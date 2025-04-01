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
    "53k6quUwnidkrPVRXqC2AATJzPkC1gsfA3roNm2BDHUT6VNbwpNQBQRq3R9eo7GvNyBgn3etCqFSPvkaWNReTuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Qu3v9ZDmK51g6yDbkf1Gyqrw9iAHxcxPCtyi1V81MzCoF1ayEEjV1i851AygayEohfc8Qp5NVTv3kZfXRZULnD",
  "key1": "4MLA3yL3G8KuWqeyHuMJ7TJGYA1NFKSuXoLqhJwy9EkUeDuzYkDRhs4FL48SowRKY57pkBSXAkm2LQKDsxH8pqxv",
  "key2": "cKNDhRN8QizKg4MeXcKAX4SFWLwSxQXukFSy9N5n74cpV6QW4NyopZ8Fp727F22Hsog8XupPNtUsnDURQMe5wKg",
  "key3": "37sZZ8era8x82Mr8x99QmqMhppWxKRQqE1Y25vHuyUMQqfQpvKPRoEj7LjPo5Q1e5AwqYVKCXi2cu7vuUuro1RKs",
  "key4": "36aBY2tdXdhwfQvcvKD8AB37HUXKyrHv4wUGuV6DyQdGf33k5uAXDqHQp5CVpioszx7n2weE9dLcdkagjy1UYJP9",
  "key5": "43wyp5B5GTn3eD4LThj7BfXnJQivRddsv9ufHZb1UTozEoTRUeSgXNgNMpmU1aMYVB4vLLj66c3Mg8R5cJpxLU3K",
  "key6": "JToBHc7hFs3G4cFkNXzGqgLET3kfHyBmN96ecjnbwWvZ5H94jTDVofXen35EmkvXbYrfoh8kiGinCT2kJrsAjwv",
  "key7": "Mf8shrGXGLUkPmYwSEDCUDgJHDULzwnWGmgPsJzkxRkZQsMGBFTGjoNLhEjhaha5pMTyYqpZSMbwPtBkufc17dR",
  "key8": "2L2ZcLKeRe2wLpQyrTZTmbWJFqJBm4kGF4wVYdq9G2eLYpGf3Z1XetHzc94ycL9rFFuLb187Xi6v1NUR7MHEfYyD",
  "key9": "3CDAuN5G7PkMsHokQJ52V85zRuQET7B4rNyxpLpDV7kzGu6gufzAkzZV858mUSoiyLU2MJ2nYQ56nnWJV5U5XUsv",
  "key10": "5kRDQ2tnsnbJ4PTURpb3BWiqqVJtp6QDTRgqKir3jUQzp4FC3waCAiYoXdzLNocFpM4EC372hW93V5Y5wgejV9LY",
  "key11": "5oKBa1Sx335RB2efurPNyfia6Ceb4nmXju2KduPc17Q9pqPbpk4t3N33WJ1V9q7PkCXYi3JXU1mtRvGFWd2RZYRk",
  "key12": "5bwR4pnf5anYCyxGEMhjtpn4fsz3dL815eE3b83QC4vVVXom2yqbXQ8eFrsqMeCBVDsTUE4Dah3Ax98nojmRyPgC",
  "key13": "5Y3dRANa3yQdZbpjHEN7UsbRNpP8BKYjN6mGsLQgHggCcGEpckvZbZ5uhh4CpHMfTfUpx9zW1PcyCocZoSNkTHpr",
  "key14": "5vNxBN9s7dbs3LP6iu9wh3vbn3ssLmSirdo9NUCnoSRbb7Zw9dghcwet9frFBEn52wT67eHbfdFEcKcQ6Cm9yi5L",
  "key15": "3FPLP6QrvaaAUwFHFTgM6xmX2jzVs2EWKoe2gsGLZV3ABuhZxVc5udsoFTSNsz8hdd1MGS94zvfQT551csk6qDuZ",
  "key16": "3p1S6MM7A4VE4EBnQ9r6VhPVQGzyzaSup9namozTCVmuNeDDNrfs4ZHz8VqLj3PVThZCM5Sr86FX9PguuG6mYPqp",
  "key17": "tMqyf2FCuBSNk1HCqeZxuJ6mroEVBHx5MEc4w8TkGXnbfuYa8jMy7nqFWiaReLB9PLHiDUXLsfh4NCLByCqMGWR",
  "key18": "3RcAihxftqLUHJQzyk6Mkw7HHo39HTs6nXmeRK4CAjZjYSUMFqzJUxS5i5dCYkCne1oYeXyG4qJPKctyVcrazcNV",
  "key19": "4VhVBnF4bMebaAJNdsPPiJw1nADQLKgib5Q7ET7ud7Xu6z1JUbHoNMyQ7Bb9KEHhmmHERi4UbvLWY7L6davcDa8V",
  "key20": "2PZX6rcn8RR4mXSzNwduUY5weThr1fwRtfwEBaUwbqveV8xQHdcamDmTWUuptrCfVrRguQmXyqiRtri2UXmBzUjZ",
  "key21": "5ZjBBcfsq1EoKusZ1msbjnHwfkubXHkscxDN6PYyCATShWgpJ4ehsFzu99keLkmDd8kSkyDdwZeB7zGTVxaCQuHj",
  "key22": "5Zn5ebD8gxTFWyEU15A9LDMUARFfsaSScdJ38X15QHvduAVCRX5p59fcAbDU6jG9MwUhfc8EGvvdN7C3FUkxJmQT",
  "key23": "5YHqsZ66HuSa9BRdbxAak8WbmWxAS7J9V8tiaTEwkLkxNrSSE8LRE5WHuiV21c8fsGyaVpUohbS4uEFkcH1FU1d8",
  "key24": "4dxCwR5YcdSABPYUDw1nhQoLNNHjuYhHyPSpQ59zwA2qi3xBVp9oPoaJXva4cWnViokmF5hHKxSTWGfVkUtxtXTU",
  "key25": "4XtZdg6fZdtbPZzX8sft7psW4ZmgkymarqAycqcrtYM1ndu593v9HiSzpadab4cWqF4oaJM5w9vnT2EEZ5PVC2DH",
  "key26": "2Ghj1BD4XfZ6X8m4VaZiZTtZuaDEs53BqgpLfsyCgQtmSbhZJSDxoZRydDwVs5u7ybsJz49ffz9utF28ARZiWkTg",
  "key27": "4c9Yzt8eDhJ9muptFa9GWBFoVMsAAMgPtKos2ag9f53Z2NPrg1zjkayuSLJ4LyhARqMfxGseqtsVsgDpDowJdvPX",
  "key28": "CboRWZdH8Pkoe5DdciZ3yayemspoUc9HfJab5rU1tieSENkB5h71inaZDqKDUpFSDNocsszmHiHUArWSvz6hKQi",
  "key29": "35Jzbe8MFMGaf8sNa4XHsNVV74oU6wQkPiwQbuhfrCW1nGEiACH7a12ND7R1As9vq7Rt2piBfE8bNcxTy5oyS9BY",
  "key30": "5k2BHnTcK2a23zgz2zirhyxoM834osjhSpVJrdWndu1HE3jBabtLaw4qZRWpXWNG51hvLP2LBKZxEHSH4XrWA2xs",
  "key31": "3xDeAw326mzsLbfiEBkM3yEXx9dupWr24h5wsBtFrJbSQB8TU28DchZgz1bXsaf3Lwnc1ihWjWF87tVoGdn7qu9c",
  "key32": "4DSJbocfy2E8iNzYqj41aTnfVuyvAtMDxuyTdxFGUL7Y2U2DDBGe4XmWakhnJDmjPSmwCDnL2DiL9FXKB4yZeReM",
  "key33": "tV2vMd5A17qp95MbCnox96dT7Euva62XZDW2EMufCHT9LFGqjXX8ESdcnWDA26cUnSbtiUBi7MyeTrh8kdG92Kt",
  "key34": "4Jyeduf9k8niiKQyLYuzHHd2EdJnQvk976mGBhuFK26EK521QwnSX8HWyHbZfD5AuM9mFydLUJM47pLz3gTAsLoh",
  "key35": "3aj5HrSfhocoEL8A8WL13KczgM7iuac6rLwaXduTkU8RkPuVr3rPa1G1AnxZSUicVwus4bquPRY6CWnYUFJpnStc",
  "key36": "bZwaPAu32xUQ3C9vfu9f6FBWrAa7T9S5wJm7kky1qCskv8nE9Akffxbizr13X128BjXhJMLQroMZpXkGqWABfno"
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
