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
    "256Wr59JD5YR3Y8sw3Tdwj9QmEhiBXSdJ5BiZUmUM4zeUBN3r76kPWY8WcrsXRV89Z8B5iVGTvYkxXXcB7QCo7gh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FPvVHcyNLAZbDtWSqhPJh2wzXKfq2bNjzKVta3ffSUDjsYVX5T546CkzyaNkYSXPERYuy9G9sfogxu4qaNWVkec",
  "key1": "2z3ajp37ieRzwFjye2ZzprnerTokTMmd25xTPEmtRsf7VqQFbhGu4264cZ2ebVfFYFiVt2A9AXrbNWkF6EZ71XLi",
  "key2": "2hLbtJhdAg4cT4tKzkb6ns23peogikDZzNyqbgM9PmYpunaddD84JpVx8VdZSbmfpkgxLw3FUBfhgQdkNmMLrxye",
  "key3": "3r8SgtJdNT3NZmf7TFNm5NDNyhrHydzJpTzeyUEAxrvVD2Gy3UqFzd5UnaptbZmF21yAgLfweW6VzxMfBRkL4F9C",
  "key4": "2rf6vTtVWJJsUMZU7JFMr1tUnhE19VsJYdJQDpaeQnKWr1EuyjP1NNfd9zvQHub9fYMzagbf99JSeEeMujV2xFg8",
  "key5": "2io5PzjHu9E3U7skvygiMdsMftS2rR4TLBzvsd8jr4XZ4tH5T8fsmWaQsd3Qr2taBNfCxzy5Fv6EPQSMdFq2h1fQ",
  "key6": "rfd1Bx72PXELLzSMqXcK877DKXsXH9W5K5oBCRZsfhqLWEw8c23K17tuBfEeKvi77HxpqaP9sQEnPyz2wnKPoEL",
  "key7": "3bTpnsGtTtF46UD8UZwcBk9GV3YiQDtum5C3gxjADxyG66ujJeMoDSzChUvnkh3K6VLmZMdDLmdD5iuaqHmtntPU",
  "key8": "2bTj8ns8XmU2g6hTtC9sVV3CvpEGDroVKirzWTCgWHbgx9sYUANCHVeXMAePABMmH6ximUHA2JXBwrJjKf9qzYcn",
  "key9": "n25VzHbqx5oMXgRT7wHUZqXgVwDUhXGD6ZnQMY4CDLWPnLxjd4uxgdKDDXom8JXHANtDspzKMwz78q8cZmeN9p2",
  "key10": "3UXj3nTeCfRmVyz9pDBMKQpqRchVUdp5FKtaoHhprJyWFiK17kCzpNFQqDbBBf64fEyfUu2puTFze3H5X81ZR4a8",
  "key11": "2CpRVHPbUWjRD6TgVqnMJjJx9kzxce8dZh6M1berAAJ8Vib8NzxGdrxRscbWtYagifmyNLSXbWW1dw88ev9bs9kf",
  "key12": "i5x1QyrbnPfAfJbo2q78q5pfqeZaNsREEEtxJEti5Nti2RHXjJ2nXhyZuvqbXb8QhAESfzKS9NHH1adqFwhjSBn",
  "key13": "4Y5CXjtEDa3HgBKKSUGCzCaVggBdezZHyDidHTxJkuVGMYTrtqSkWeMNnAfmspDuNBEFWCA2LK3TCkRT7J7aLyPt",
  "key14": "5TnitTGc9xADDQpDL16QfXSd4LjRuHZpjDxEguCgGoPaqDhrdkGpLzssLyPGJEzVLmkCrEsqXD3nEoZqMCTzSQAR",
  "key15": "vRZrUu1Tk4vXCiYChqWPUoaiZxwHAD7wrSMzDiqDY5Qwe5WQ3k8s8XfFm9AoJJHfSyNRZSsyXyMAHESGdWmKudo",
  "key16": "3bpTuh7SpgECpxRWKcaxTDbzpxc47nEPtczbwAhpZ2hzH7PS2DxeCR7dGdZxAoqLAxxDEM5K7xca8SoeYJFGivAX",
  "key17": "4o3Nyq8itGsHoMrGgsAAonexN5tcSBGZdxYCNFSbVCZScyJ7HfhqsSw8hFV1Db6fnxuKX2r69TmEZRxvD8t3u2cG",
  "key18": "4xCesjW8QNR3uF9BkYnghgX6AvGox6MFRp1FkRyQE4eZk1rrgd92tDaDZBusqwWGukRUWLvViJeZTsZT9TJGbomR",
  "key19": "mGkBnAHzFhcdFnZyHiomxrZ97PB59Yxs2uCAZ398rZB7vsC94vPuaNSWhPZTrjM8SEZViTLryRf2SiGTYVNhpzZ",
  "key20": "39UXH2TreA6ibanvG64ns9nGViSm4bVjLBQZTQyxUtA7BeoZjHEabav74rx1RiQdsYbDskqymXA9Uz2q8LJ5ekJd",
  "key21": "4Za8cK8ZLmTATsW1wqCUenBAn4Nweo1xRzb5hY3BRDYFyVxc9NiHMJ5TUobRAMJGKHsSXVYj53GfFDe2gd9kppBt",
  "key22": "4w6TmaQWyZkHGhvnYpf8x9iwEBRgSpsnib3GcHcYGDp1M9r2xHKDLCxQwjNi9n2Lq1Vg6agz2dTsbVRaExRryxhi",
  "key23": "4hGA42i25tyrhhDqDqouv5nAG61U7kky1n6c63NHHa7JabBTFWxzfvRdgiyjtFY5ZDxC8dYhes1TVb1zy5rM57CM",
  "key24": "qXAfwDAmyfdifS2ahkDUg5v9EXKK1esDeE41uyvNesRujiaHjYUiNQVSJVcxYiAcMNTXdEY95NpRZUQ6ye3Zfm7",
  "key25": "3QpNVs3w7E8tHXp4KKeuDKjkuoR7KPkiaL8ea2vcz2ewi2LWutM42Q9KUqBCd2gUAnGMzaGCXLDnVNaB2JJPK49J",
  "key26": "39uc6cj6f2rKCcZZBk2s4qPiEj2mtZtxDL5JySdGa924V1bfo9mHCFCLjtRTzAb2zh74z5jAAWGdmm7xN5jW46qj"
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
