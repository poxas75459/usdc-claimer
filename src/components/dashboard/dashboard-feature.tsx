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
    "4FAe3q7fFy1MsRTj136fw5jVVXQrotVdKx3oo6Vx9Uva3DJeh8CGAk2GKMifffLHdpNUx55bpcDds7vJMtGmteXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oEWY6KhU9UMxoW1WKHZ5f1vDmtCzEdkgeyvXmt52Wba91NpFJnqrzShT62nLgPL8RvNjPVWNnLZDMuMdbTu5sJY",
  "key1": "VTxGJxZu4J9VJLcCezCAPETN9A5YoXQzjJX21F9mXdEXx3HCEzUobraHPdQVS6FBjTffxKSbnGLxwmS1oV81YYy",
  "key2": "2eVPLUtz249UL73mpXYcuhz9ewYUrenHX5ACcT9b2S3VYocQpJTZQpWpwKSMiRQ49gD6C6yrH17RHi7Wq8R1syyx",
  "key3": "bcAVZrsnHckwuMWS2ML8Pat7svgm5fUotNCH2fGBkXdMGPqnCAzEx5UumXiRXHgJGazbSEMRCKWSnL3ypLn6FUC",
  "key4": "3w2K8ugvT5DoSwQQhMiNhEFzrruVne9NS2Wn1pknaQHABFA3xRVYwjcjTYNbmnocrkgUzXQzmw7DzTubMssbUCjU",
  "key5": "42ptNsuqFza7d9eq4DByhodpC2hdgJR4UjMrYnyUzW73ek41Do9iUzEPLUGuQB5bGsxhVVn4RSMDpNvTSPFWDkGs",
  "key6": "2eC6nLG9ToJJNTutab39nWrhbZ1SPBCwkD7bmQxFbKxBhcCAAq17b5fvPRVtnmBiVjBDNiiJSa4S6FrHxtTtiCww",
  "key7": "2MRQqYz64x14NUzxy7TA4pJH3yrfKHq4caaePAYRwbj8ea2UdHYh5P6W2tqrYMSNdEHNG2RxLjRWYFRCeSndUKr5",
  "key8": "4jgQYytjcZk6UbLUbTCLLXzRLFKxyeh35GZfRpPFELsb5fpU7VxjpfyQ8TVHE7N6JH6p5Bks3kemUHGyZdgyYn1c",
  "key9": "5ufJDnYh4d7TQmvWu9mZHwUUMt42G3xj18RT6a9eybkY8FPmNYc8iyMmr1uq2xCsgRmfMuqDJWjxWQ3e6rDcSVAt",
  "key10": "5vQN5LVyDouyHYERFpQuZHyynmb68LeKB528rdFfH8XjsYYRnfYFchaKSdevWLYoM42F2ovyohAsbXsYwTN9L49",
  "key11": "4zPLBme9A4jkEZ45XHbcy4LuRt6MPRjTKZmkRAvvfwykNZaGFoLoGifwBttC1noGTs67id8E6QynoS4pYgwkpbRJ",
  "key12": "CsRxW2ZQ3w39EkDzzY9BQkFmBebPdsVJMPDWRzYkZWxDTcfrubz9zZQQJbQW4znHKfukvUTEPiYi3wFmm4MnNuP",
  "key13": "pgMiKKyK8LCVFXwPypVjbb7t3wgDZfx7HRPqsFarjg2tXwKcQpLZW87UJZdQJ6ahCG6LgbQuNHFXE3ndrzsd8QZ",
  "key14": "2Xs4mVMPwBCJoWGqZK9prvjy2C7YURYV7q2TGJRu7Wc8ZoojWtEF8CpVoAb5UjRD7bzE9XoG99YWzQXNnjyqyGkE",
  "key15": "2Y7UTWZcxX7Jf7NreRker3kFakpq63LXXuLfmeaa2pYQKfroTC5SxJ7vfc5z8PtDjyiSoKzdarqJpcb3F8XibJSN",
  "key16": "51yQ6J9eHpUs5Q7LgqcsLFfitdpVcbnsMUyxG6VbidHCsBHyYThh41KZkSeA1NZBdqHMo8eHVrzLpYohgXuY6RsS",
  "key17": "3mBrv3QH5vm69RgspGqt18rEEjCVH1HxZTKmeTtrwGrLLf96SBEWDKkVX7u3Gf11D6ryMoqvoQcp12S3q4yMGGE1",
  "key18": "4WthwTFxumvnYiPCzA1UEig7TSE6R3QBcaNJ59xG2qhdjgeaniD5znrvaNRPazE3xeXAAJjHfM7x7VqWPnox7aEX",
  "key19": "5eTCBuJMPjzyYhwA3NJDQjkw1kNTQKdDyqcoqDyEQTAK8Co31oBm2wUzfDqZnE6xfLkDCr3SCV4oLNrQsTzgJQbj",
  "key20": "PFNYUwVYZyFaEng6VXTaEy8vQ7zukMGgrjJT2WzCpDrUmgmfGXvWtuwVeF2UccV6vWw6HkmKqFhGjdxmn1x5tC3",
  "key21": "3xLsDgKBxegj996c5AQtKg3ajN5HxXrMcW9YYS9ZtHapVH18vrttq5qWH4XGeuS9HUEUYi6N2Rc898uA8VVUxXQ3",
  "key22": "dAGvwYN8ZzTfLFNR9YuLT169ZRJRv2pAx7P3rNzErnPMh6KNZJmtyyoEZMxuZdWU2p9CZJyCGHYxjX68pp7NDGP",
  "key23": "QTdAXBsD1zqpYTYXmd4tPVMzzNcYFRCHd6cgcaaETaJYDXXkrkKtnTfz96K6CnS9DgPNEsd7uF5uurnZJdAbuug",
  "key24": "2B3RiRPon7K6FEhc7RwTKge7N38MwVeeKFm6u1x1xvczJBSJ9hWE8EACeKZ8EtiYUxS82i2Upm3jfXLC81eTrdXE",
  "key25": "4H4QGJVnGpkK3WktoZcxNaDBxvmvvjPDaYBHEVXQCSQxWF2QL6QVZ51pmu3uWpRtXBWgtmYg7Haf4ibZRfmftJmQ",
  "key26": "2ZjQiBLCDzXHVw2gtaLUdaGhbTZTwvmUkmot9etgmgTD4SeggzqTC8xtn2UermScXM3gqm57YTku4EHKpVdZ6CdA",
  "key27": "4zXMskg99yRSHrkgmSaqzZgsEUUnuFa14d4DKM2C7igKfSg2bVFyodj6imvnhUbsZ5e8PPUy1kdxZPotWFP6FEzG",
  "key28": "253dYVdv237KyvWTJDSAZyKGHZPg54LwiG3wLsL8FVLYgjjd6bJXENQacDqaxwpQZe91fnTJuKtvKAsBb4PEFzdH",
  "key29": "5K7JxQEiFa2qKD3BEmufCGseFvaRngu1Ht7RAxEofi7Xxh6wv4tQAgegjUVcA8rK4W8CHYT9DZswM6r3Buszv25J"
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
