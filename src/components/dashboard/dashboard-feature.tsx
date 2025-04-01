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
    "2tyLf6JvtpZa9DHFzEoTGPTjN5ZEgfunzPArrJUGUuB4fDeY9beGALyiSEZoErxwqkHEWzSCjjvA8CvDW9CSwuK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8VZ1XPLSFktfbfMAX95ULuQeHjUrU9GF6Twd7TAHwjZb2NuUDrShUMJLLTSMLePdvvbM8NJVPYVxqX32dmHVSn",
  "key1": "5EzFiMT1HVhJ1NJ7b49EvMBRJid9SnkM2ESmLc3g9sHdoq7C5L1mu51aRtWBtAsQMZ8MSs1ATRhqFePhiVb6TyKS",
  "key2": "ubS21Zwii2Fp56XE3P6ZZBeMRpezCEttHK92MmnmEptTwuuDnZcPuJD2KVH3YfHyCteZUveJSGPCuXGRVL58DWV",
  "key3": "3RqjY1ppRn3myYEzdVbUAcWYX6D7sCnVrbh4Ed3U3Ro1EYamVPfayHmShe5LX4Ee3LVq9bwsTKVpXx2Cp7FGk1XM",
  "key4": "3YqiLwmdBtLTLKrFXiMJaJQENmpJfHUuTaGATpnTpP9uR8fPJz2UEyFLSp16n8k4kRZ4zZTBfvjsnmGaZ39mgwEp",
  "key5": "3zkUL1fUprXdbKPHim4y5MjTBJ9RttbDRRCnQrEsGS87phDvfH5g8YnpaYPWWGEy8GtZu6DcEdUjnKxzb5fL6mJB",
  "key6": "4zPzDLNEHKj6sjRVipYVZar2ifLTNuuqbwYZ8sWjPFexXKWqtgYG9GkeK6zWmV9ztLVGXnb3dH6UYVo6p5yHCyJ4",
  "key7": "4iWd1nsTUEB6hmhxaqFmWcnykFbEtKvjduXWztenP81avR7e1ScZohG1HwAm6uMLDFKZGxuEN3nG362ThfD6d8mK",
  "key8": "LFWTq4XBBwo9udHMXPW3oHyMZR4wnuG9U5S2o6gJwJc9G1tcSMpRAXKrfKwankcmvxf8k8s1sH3sr4Q2F2poKeM",
  "key9": "5AhGcNXE4uHRcaFqzhwtf4YuGJWatVt3TMYXdrHoMfeGmT4ismtFrnb3gQfeXYqiRUqLa1JyVKxM3xjhSWSzuLEi",
  "key10": "4kwJRYfe26YcTqT7RCsEVjyycvC669zqJiMM2fR6oBVr3mRZuXhAdAXyK1B6cZFWaJWkL17FunqgMadbirY73SP4",
  "key11": "2XrhW79dnMkdgpixAcsupqoMouGEFzMtRuBUgph4brQcBrFsbENcRRYTB3ikhKu7JbjHCn519PsfoPXsfhw21SN6",
  "key12": "36uh2kSrdVCSb83D2hk1NeeHEG3BAci8BxdGCBFtrj9bUpzeqT6UjuorZ3a9Jdw797AcgiC34DFNtSKpyHVXESKn",
  "key13": "5p3G1ktqHyEypcj2HZtJ14dpyj6rDwU1uxxQkvWHaND4czDJVdubENwd1QXjkBqXtMCNXwJngYb9dzyhM1ykNrZj",
  "key14": "Us3XMyY4ckJVQhByp8QPKA6sUZkme88muKcvtJ83i9EJBp1uLdiCe5dGKXrsXpyRqA62EBCKevee3MesBYehXLF",
  "key15": "3Am4FNQNRF1N6zzXEEG3TkPRLQH832FKwK7dBdXZLc5wxtirQKTxo7PEUzHWwJv1zuNvkV5LQ5gSvDXvfSNZ8uDN",
  "key16": "4zKd3TQrZJW4p1WkTz5EmzZRTfDzYUvBiSeoWSbV1zp5wjE2MQHZjN7E8Gi7j56STy2MYTHrsMYBfnHLMiTXokq7",
  "key17": "eQDYqnkMLurXvh471Y42fA9h1Rp6dqDeYhhJpgzTFubTTowsxc6hff2GQve9Gd2ncYrfhwWVk1zPBQ3QwcHWNi8",
  "key18": "33TrydMGMC4dLPZBnDHd3ZNYKxgstqkYLAmpzTyHGvKF2SWhkpNWtTnQeg6tUfnt1Gq55oUgYN2YXBPqytuaSX3J",
  "key19": "bCX6eQjQygograb3aGYWjkRYFEFARWEhwLLvbQxd9kqa5Ytd57nfaw7SsoaitwzJx2v3p4Bc7NAkW5TFCjeZG6v",
  "key20": "4hxMG9BiVRUvxmP1GAZRgRkitdrKKz6Tzjg9nanXZdiavKjEmSJwgHzrHdP99U9GQvp7HPtB5N3N8FwpramDiJjQ",
  "key21": "48UQef9xnBRuMiuiieJSUFtYM6bCfvyNNMmQtP6BWfsQnridznb1bctcNUbGqz91MYG9rY6gioLpYmGTRaTQR1dr",
  "key22": "4efoCAPTF12ta2b95YLkqNmgydiANVZtcYjYwYGVP8X3ee7pEqt4yhr1RVkwsCbY13RoadhuG9n4Th6ji2QeXteY",
  "key23": "2Ts5n3eBZoUdSSECCCVKnd9mwZ4LXmoLLSGht6m5YR83D85BctDiZMPsUHoMw1JQ76YHJ5bLQF38vT3k9H8VnHwi",
  "key24": "4J9SSoXzZiv7GA2S3Xhgx7xEWN4AdtQ4pEQypxA53a2jdn4DEuDHx6ogJtJ48KSec8RyszhMiBwRETSJwxRStAbd",
  "key25": "4hFnXM7FFbcWpxssBkByQ518doSZrnc4xTykbswraoa7ca6jGN7A62m3eFRbXpuVGrgUCRdXHs4c4yBVVPXtsrSH",
  "key26": "67E3fdmJxPJzNsVzTEgfCkSMf6DV1i8Qp16GFcDtCfJmqS1rE3M5oNXnXDA673GLfTnuG19jUrkqVaLGTnzeT2LH",
  "key27": "3WLU7eMFZqvzpYXwxhTRPAq1ZAbV5bvwiEef6qdpwcxiNMLAjPhXY3C5eSMVZ54452zy4BEFmroLPMvRejpXpEQ4",
  "key28": "5Fv9ioQWK4nopWZa9Tw3b84oWTj7fJgwHa6AkTjpMB7NRRd47pioYRaMfRu2vWjUpZtHxdZ6hrdLSuCTCwFy4cGe",
  "key29": "F1QzmaUoSrH6bo26jyvTV6q4wBphqqv9ufnSCKSyS5MX1PVqXc4M7C7j1ZxNqdgbGqThvCqJemi6rz8ePprMWGz",
  "key30": "2aesu6W2o4Anv7Yz3Ja1PzTyrtiixgx3JSCMPfEHYir4TqjdYQzdCKCbqLDCGKuWxQegMuWdTLxbATm8p7D1gXFt",
  "key31": "54ZLv7njc39fnUm2LEvqJ4hqW6ry7r4ac6QnNmxMwDuDRRAhX8ynmwKXv1jj4CN553xDgVUmperKforeZjDsR6W8",
  "key32": "5wBALCpMWcCWcxVR2nodfrdG4mizvmMG3d7bSsWzk6VeVM8o5J4aG5SDgiERiqWQ1c7gQovV9U6Qudey6n6Per8w"
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
