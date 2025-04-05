/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4TnKV2E3LLtLVoYh3qiDTp9tg7ebL6byqvyDtMU4e57z95bPc7cSEtpFX5jo2xEAuxogSso2m4hDoQDpEwh71WVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMF39tqzENZeu3nK1QMHRndtCM8zUhRQSPxtsap6T4iSQWdGVfZJ4r3BgRDrugLz7J2dGSFsfA4YfQG2Laj3593",
  "key1": "24vKiGKbW5qt2urwqZZHAY1zLBf91gbEsr1UbHH5ZbA1C22ViZqvthLk99a2RuXfr5wFXso1HPVx9DgfvD25ZuXz",
  "key2": "5pN4TMJcHAGky51ffk4YwvkHnP6cumQhW5YjyAjnjrfowiCVzHdtxYmq8ZbmA1eX7v22U1e9brD6PVPXxNWC91wS",
  "key3": "4Xs5iADLwzSBoZqsdND8u2JQNuhBcDtpz886LVx2DTVdkWTqaNpMhYxEYBYQw9KFMKXT6mDdu6hsj7pWxbnxka15",
  "key4": "43cZGJQwB92HQVSmsf9Z2mbhvGBfPSHDGDVQBPPjjteEGFZyyNtaDGzoPaBiKgSqZagHdmkhyTTwmxraKV9qZwfa",
  "key5": "2wS8h5oJEyD8qQoDmvjbPGoa8xEX7wtEkGfbnanx2soDsc5rkFe3EjFbqpbTB1Pedm8T5z79TdC64AnkEU9NJDSt",
  "key6": "4Qa9HmdXxa2SMbKFZGe2dtfzJ2cSv37yrfGKZrAquzSBfLG6bgb1FyZP6nrw51UEJT2yNTNApijFKafm6wPF2EE2",
  "key7": "qRwbng8kmku4b6QrtkoDRLXgJPL4kCa4tHGkSUnbNiX9rhc2J3eACFcTbyxdNjGgQr1cY9SNysaSa2AousafysB",
  "key8": "26amVm77c48FkhvoZJNARQjhH7rdLdFwC9w3cKX4t9iycKmtKF9RGNRq8tTP5bGk5MsGmDgpzLf9TsXJvMLG4264",
  "key9": "3D3uZeYGbkbapEXusVyf98MojN5SwoV2WwQ2HuCPjSnzi1j23DM4JZQJ5XMN5wVEqpynuSxuPM6zNoNRMt6ThQch",
  "key10": "8wPJLKa4w62WVB23ZbPHPHckHpXDif9eNsHTvL8jkm6v9GBWz6g3BTsswo24RJamYq6MfzVJVUAUtPp8b3ykxzP",
  "key11": "4JM6Kv7NbQexdNnFBCpD9HFURAJqX14CazHJkxN47Vwn91rkSZbkDTzcNNczWS79iQ41CC6W47tddBFBxyeByAsd",
  "key12": "ezxuvggVRncneVF6s4xFwXk3rKeLQ7RLvm9PeuvC8SXyzCUoUcCRaiuntbNFHnvGh1ewVXYrwx6okAUJKrqkAMC",
  "key13": "4B7x5gC3CQaeqBJL7F5rkup68h3DbdFJUY737eQ3r8c3MeVYtDDfTh5zDMJHuawssd6NDZycNdRUnkPU8c22ionX",
  "key14": "2p5EhJSU2f2ULm5guRwmpnq5LiK2gXQ5TbkQd4FdTU2hHUeWp2nNSwyZgWUvVxMYJ7y17U65eoKqRr2EuadkmUcf",
  "key15": "5sCS9oWcKGE9fHY3Gm1TWNJvLaNT6qCvApkPRwQ5XfdtzWBAAphW1LT5DCG32VUoqopDkoimYUDRvGRJsmHhwfDQ",
  "key16": "2v4gwD2uC1tU6zL2Y3xwsmrVFjNz9waLzt1inaTHBLJ2jMrygAUjrVMvuTM1ps6JANwAr4WWTUFuhpGN1QhvNFLt",
  "key17": "5qnBvu4DdGoXxvZVPhevv88YnSRf2zS8sZLvn9XCuEkx9ArP6NGpG1ojvpnSRaHcgpGqESudxvLy1brktPGZ1wZK",
  "key18": "3GaMKVCDojKzqQqFzvh1ef9M33mGjXadiczQ4CfbvUAovcBdiYacAJF9nExyaFHZ9hJjmav1QxaXUpzvzaNyjaiB",
  "key19": "2TSfM5ca4LrUMDjix6DBL6ERU5QS7hNaYHub3EG8bXfNzcGfaKYMz39sNBB4SiarXwNsAiAuB6BsSUw3CP24u5nc",
  "key20": "4yUWfhf9YS7tgRRPrY8RmnVcaV1BVhRPS6oDSDzybKxqNWVqAuoSxXhW38Xv3Jw2QQarfemU2WFMmakxkBDYpTCC",
  "key21": "3XtYHV7hT8Va5vizDqvS7Vfw2mcPvXNKav71krV1s2HtsNXMTimNAGcQdZFEBjq6ui4LQctmFmirf7MAA6usmcAf",
  "key22": "5bkeapVMvWhYV5HSJCjkc9baiwHQdKbUXzCbQXpawtRQPwQdBHiSYaYoF4TcDj3ueKnjhWizMuGoaGT7YD8Rf1BM",
  "key23": "cDGewUavYS2vee64q341fQvHGERzRRuishgBy1CNNfp3v1AnWdJtuJn6B8yrZTV3SGudCrK8F67A429fFVFjSpm",
  "key24": "4qGeKvh1pNuEuvnRkqkLKqTxW5fFrRWRcVmSgLogbAXgjBe7tiaQxPohdR68a92YphkT6qQnwxLrjHLFfeUTCmpZ",
  "key25": "DfvDpPxtMAaXFmC8w1Doy6iwA1kaiZUuJAkVS63YrLs5Vnag5yTdgNAXbK5jCEp9uKSvb59hWcFNoAc9pz66qru",
  "key26": "5LuoefEkWR3c4yMY3iZvH7xqGWjLTxRVLdLDFkrTWcvRiPGWJiEJHHghKREaEUEKCqJXZawgPsW3731kAek8tA9J",
  "key27": "KhbbumMpw5PCe27cxPPYUbj5iqjXJc8tJPyp8AmxwLS61AZiCrEWpmEFdcgu7HjKpSnbPReN5nNeWUFrcxeDciY",
  "key28": "4tD5neph5h7riaxe2tWXHrv6BiFkEKhSgSD2WmgDKsKDq6NSJq96xpjGRZcdW8hdDqpMi6zg7LvSYbFkYAg3iiyg"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
