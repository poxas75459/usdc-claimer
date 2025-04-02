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
    "61ofHiY2v7cLRu3dMSKgDCB8ic32JdVrwWuYz72GHe1i7NorCrTqxuNrW8o4yn6miEP6nsjPsk7LHpNYSMiAHkDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YxVWbCKn2SxrPA56GU6Nm7Dt18HP2Y6yyFrPSoQPPddjEmdRK6ZkcJ8cfFNmQM1axse7oatzY7vRZt3FtGcpi2m",
  "key1": "2pYs3YyimGU4G5ewhhCRE7rYM83ZjfQHBU8AjiqdizAx8gws2MJjydVhYD1LBeZPJzDLcDDkmnnFh3gfBZwBoBoj",
  "key2": "2m3waDyf5D92gPGn5oVwcqCzfJ6QWFAzaUV3FgeytWtMWwmK5f27DUZj3C3ECdrBauAGyCBTkVASoyQSSQgg9NzX",
  "key3": "2DqVDMwyQ3z7LhKPQZMfPc5sW7YAdo7gxxEd7qP68aGFhnQQBvVoBtKxaTZjx8cWzWF3e4ecLgtTf5ZRzAdBJaMj",
  "key4": "3wMXZwXJrLuHH65YRvWFEV6KoWg7sNZwtktWYtvM4Z7DnqiiupvW8WCZ9dtBVvzRBmYCCh5djf5XAn3e9GQxbwsb",
  "key5": "b5d8XttvHbYdQyA5g228ePF7u8J842gQw6KgA7T4tBzVqYWYBnRT1mGGJNmsdZFrnK7Lb7hDtuQCMkSBqQPnZrw",
  "key6": "5TViuynH4ErTPKZ1NoewkcUs77GfXxyoWdwsnA2Pm2pViUBnY4evnU2bZANc91wN8ofCDNad5611DrAd8GxcGDZt",
  "key7": "3Ai3fiikXig9hik7mEJgZCNsPqpwGyajWGesKYTqUnD4XhYr88Rh8DA1EbSjJ9JSdacveXhTL8hQHoZY2DCSFRzj",
  "key8": "4vSiFAxDpnKWrBa5q2HGgwn7ZNqVxu6FdUYGf5rTY4K1qqCnwExVC6XKbk3rPauLAsqufSwGe3jLwfXjnwdN9ku5",
  "key9": "4YdpK5gxUR1dce1tuaVB8DQyFujys3yoWNmh1CSXnKimtjj68kZsbFZEHye2v9U1gCwzE4Mt1D9e4ZDX4owcaJgN",
  "key10": "3BNtPXDbJKJuYiE3u6C4VrE4Yhj23NtK8AmuyBG4dvxAZwFYoHFDjmB8x83SJpezu7wmfqVLX7VyzbjsEefP8HHW",
  "key11": "2KQnpT2keJovVzr7X1UTo86Hk5daMeCiE8DwSAWEVCN6td6PbcM3WE3tLYrR6iSYiCsRPSKyu8mg35wnfNB5RRnj",
  "key12": "4kVDGU3DQQca1j1R1EJbPEwTnA34mPxszRz23u2Xe2YWSNU99wBLxtFsBJWJEMJY3RuBQWa4CPw6KArzf1gMqiBB",
  "key13": "5ZgLVTyBKhhbY23ncGXMLJqBTC8jujBvRTUe2WxWbgcS46Ax1JPSny3UrbxQSZsngbv3iAdVQcZuT6YwxrQiPcHr",
  "key14": "4qMzFWtyof47q7Kf8dj9iMENoC919G6yiG2wRH8fsVhMeuw7ZSVtBKks5yML3N7Psn6Knsuu4zK2S4yzp2SKiyYD",
  "key15": "3jVRpzWyn6nRD6VV7SQ2kHLisxoS6g7zTb3X6LCC6x7WQgc4WJPRnwPHXsbfxWSWSvWKBR8ZHV5ZLH6icQ9dQkhY",
  "key16": "2BkP47KgG6ZZEymn6Hq58y8DEjNsYVPwYkrYch7unKJUPwar8AdvFAguc8rR9cY7QuHt3oLVRwLfE9V2mJDUBYY8",
  "key17": "4D7EYnLaVszNkbrrLYpxd3BpSrKjcAV31vcoMD6y8TB1NBZCxmv1wxbhhsc3wXhS3fQ5fb18ja4dWXL1CWx5n5VV",
  "key18": "2hGYeSTQbb9DFEskyU4Ddp4NJ7552jKKGkkjkCMw48Vf6uedqo31uYRPdzDPXF5XqzYLNooXdh8cjLgsftYvGbc1",
  "key19": "5mszUHmj52pNmCSrsHiiHC8XMZ91T2eBEXK2DM2RJMs4jXG9boePTapGkV4bY3cJKfudPPWYyQftRbwVo2omu7rm",
  "key20": "4dae1j5L8d1GwwwJCvhVaLL6UctRmFe4q18aFrRAmwz2W1zgRr8hRmtT1kBeZc7UBWsSz1PYM7GJLpHuAWAgPE52",
  "key21": "3BNP63RqGhJLxJq12neBKFqciFvDXjQM6sAYouQbBSMbS3ZesAzp8kyzPaFFnkVJCpwy8vV7cK2rqW4gD6z1qnrp",
  "key22": "4hCTP1YX9cHDVWL4TFFxMSQDFfLELKgseQsnJXyjnovBULTi18AggzpfETe3CmjpZaLoT6QpaiwKJvjPkFHb9wmR",
  "key23": "5MB4SEP6t9QdoRWNHkF9wpvkKE6fpyLTqvknbmqrnUuhaj52kHDNZ8JgM3FzdzET9VskYFWi3dkNm9BkSwsq1yL6",
  "key24": "4vgXbiJQgftU5P1e1aT9vpLSdJCMMFuBMqfFkcBk6tv9oSwh5bDe15qUZYZf3xG7AMqE3b4NhyjDdgj8kKZ7LjNd",
  "key25": "5ripJWYpCuUtNw32YFwJy1rQD44F73VJAxwaAwVtv1bZGU9ZUxENuZQQsr9timD7jNHbTFcoYp1QUfoFw5uLyAVH",
  "key26": "27GeWziuG1eg3faNrU7rGnWRZs7L3G6pq8nWy89V1Hcx6wk5LizkqtCixk18ndzwKScZgQAYma9yYT1xD8cbHYAU",
  "key27": "2RYJoFugio9sxqJVTiSNEB9dw4PSz5z99D54KiQ5Ywj5RQP1FsTw9GQ4ceWwECFYeJb1DaNp3LpC1B53XnEASPQ7",
  "key28": "2wnWxPEV8KPHYSVS3tcEtDpxnKsFGftY7tY1XYKJPQEdZhLfTCvVsh1H97Wp3GtNBzZMW7QkKZUJzoVaGsdSLP8W"
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
