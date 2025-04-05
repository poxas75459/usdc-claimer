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
    "mxMGFUDB5F8T46WMg1SPopPP4x8TAi6tKBPcyGJLQACAk7k41U57n6eNWn6sEXog8YwU65Dw6TF3WbauXpG5Dh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pDSfEo8fat1Zun8CViTsLz82UWo2mBrw8LvGpYBH9nYLkoYPN6xqrnjd9Sz6ben9W3TweQSVR3htCGSwtd8LVhh",
  "key1": "5MRZsi7LJgNjrjZyVmTMsvAV1YLMsdMV1GfdjP4JbZRug2vrtZc74dc6VaPyrrLArYdficgPio6F8axM5PBC3FdJ",
  "key2": "4Hvie2y5RUbAxx4Mt5nSkgoDxEfEvnajSChrs8KQaKHc74u6f2foFi9vfw9LS8ntURbZyPpLBzSQeLzYMxWBvpmC",
  "key3": "5GBHLtAAQhyb4kWU9turz6U5iGNCcYcc6fvSwnML5bGzTP4weLAjhixjNxaLaKVJgLwn2gJAiFkkGMw1oNX7wpwp",
  "key4": "5sDcWbE8HoK8DhDApArRQ3LiDSXzLvc3uyXCw86NMbciZkVeJ8bxbakcJs5k8eXTWRKrzFuJScSRUt7YxESTXx91",
  "key5": "3yyhxh9LqQg9ouVVYqULNViVkdTm7c5GshZMWVKWs7mFT3iq3yLNeygAurwiadSeiZg9HnyhB5de8NCE2oCTzfza",
  "key6": "q9q6jqzwY3hydSZ7f55gVSfZBhnA4iVxrgvKd2vQZifyGqTFYg5cMnA5QLhVUiRtKnNT1xCPRKPeeYZpGce7vhR",
  "key7": "648ftBHihowCwR77iXW9FqSNMAyp4HkPahh3sjb8sJcy8HXu7P55bYRQZnryzq5ncsTP85yLJdepnz7NgcitkDTA",
  "key8": "3Pcjf31Pw8H9N9CwD5Y7XqKuo66wQP5CitV6JTdgwKEVW3R3iRPtj7aVP9evfVaSxVTq97BtXvNFVHRp9oFSxtTo",
  "key9": "2Zkx8NC8sgXbSdNc1FWnM76CezpPi2JndMCYf6rfwvzy8YuZufJqMaFrj9QNgfYhLtFzjVQDc4uMHLWv7US7wsgr",
  "key10": "5tsWWpQ78UvJirxwGirkc8PrMpUehJUQTYzx3KCDetmvEAiFXZFEXhJHi7W5qxfyBk53jxvcfXiaTBE8qrBY9h1",
  "key11": "2ExPGuLYuTVPPTa8t1omzHgzAG6Z9RfYU2HkE1wXQNSB5C34FMYHAKsBQR3BYLYUAjqfA7usUGJLvZzKvwk4UabS",
  "key12": "22TPEMS3FyJDcGGYx3TBdjtphYKBbRogTcdDHNw9jcKVchBECHGuKuzAjhM4oUoo9mJZ36jb7Qjr3E4gXfw3yQfE",
  "key13": "5xnZwuT8Myfo8eskjPkhw1LQJ9uMrFbCfETimUpDcp1VnRS9qdLitXBqT8UiHxaUPo9SUMarGFsptgSXYusuR58x",
  "key14": "63ezzPynaD5RoDLQWQvAHeJKvRRpF8RVB4U1ZWTgMJsNG7uw1HM1eb2XJyYaqaWTessxdSgXVGXsiKAySPffZD4j",
  "key15": "2qmUDmds5t7mssXXL9rot1zR3EoHCvw7iX1TzgWvDeUDpq4dK8QxHGxjRMAhVSSEK3SPxVYq1ScLY27iAKYUDPpU",
  "key16": "XtpJx2M1uGDNG9YJugX9qgXiAiDdZdFHaL7DesiYRvGi67KLufD9Fb17MXTsPpy2uuCPw1ViiRSwYTpZ7AKWc96",
  "key17": "5hCHtdxYK2vL71N5v9J56ENiWLFbUsuo3TP5gCc8zLJxMM71g8o12jwYuyenSFFvLjmBmUJABgBoDc5DUZcTzcwh",
  "key18": "2cvrTiCMYffxkANEKq8AV6tR3Xej7yTeMrrs4EWP3pBSv9DikvKAbSEVpHYk2d3BmZNVGn5VMkDqcpfBRrtHBJRN",
  "key19": "5NxhdyX6zPEhHbJfx4y6pPhsAq8bDM6hs11qw5XZU3giVWxZyxkva8HcwcQj28J4rxGKsz1zQVApHckipcxLugBJ",
  "key20": "3iugyP8m3s2vb4P5mvJ7K5aqpDkWVsjBdu9yn2yLTHTKViWofWwd9aWEwnVbKibdVMSPrwRjC5qgWCCEDLbsjBHr",
  "key21": "hRrkGxgJBTDmMuWmkx97ZnNSRcRPheP5hG3EkDCTYHE5TWpYAi2uijgcoFif26h9DWduY4f8zpRJ5d5T4RycDGw",
  "key22": "2EA3QFBSkSX1uoKW9wamd4XpDYNuQr3cNLRUHiVmF1F5PVmVZjJGHo57x5ZhhXUTJs6dTuDjsjt6ko6fmP3Rnbyu",
  "key23": "5w5wVZVB5epq4HPWsRrp5jkExk3dPSpF1uMRnMmJWXSttLupNGZfhFZz4511iqPNJyaMqEwipdFrPxFbcTXDFd63",
  "key24": "3dbTrdtKDuShirhokjrvZDQHvp1BDzunhHvSZAALzZPFVXjgroWw6nmCVgJtkvPwBZvVgLavFLnGPCKfJLQhVupW",
  "key25": "4Q12Py6354yfrm7utyqyDC2NDriKUpHtibEGcS3NzgdcAk3fSZ2dimaQt7bkxhCZBdZEhDAugC6ckyTL5qwr9HcZ",
  "key26": "2qTWkxWAqMexk97Pi9Yi5MW8WBsF4oREyE2U3BTDvwwAHbE9sV1PSHT2CWiJy7SrTcb68ifPjEVk4GMfSa9dPfmZ",
  "key27": "3CmDWtmPZ9Ka9C3UyysYLDnfJhgCaZELPSA7JjQb6M7DN7oiSxrf2t77qk7AbBBsewcG8utjCcupyQYWW2mnnHPq",
  "key28": "4eYzKQaBJ2gdAEVxJvTwNx3Np9iHMffCj8RfNnvT6Axrv9VPPC2tg7UC1Nt33Xvuy31nFWKK5LFf28XFG9FXET6f",
  "key29": "4T9fUxBd5FfSWzC565Dieazzgzu8kqQ3W2ARRkHaG8bptYMRXtCRVsBEUoe9sFBWMe2UvB5LBRpebrc9xy52CR4Z",
  "key30": "4693pARWRJAAt9uk7rXApLpYYkE7W3pVHZvsvXNpEGtiJyfyzBZEDxBs8imdzj7F4KQrSM9YdECuAKufjECWBfN9",
  "key31": "5x4DWjmgDnEWFh2ugZfrZYaCQWm4cthjNJYazrbgPPfNgCcwfH8sKd8oSMKCBjtnaSiXRFra21krtu5QhMLiNUCx",
  "key32": "5e9Q3gguEp2DgMZwLkMdc3PiEUQgnUo6MLabENG4e2fwrDnraho2ZtKeB2MT27nssyPhMuKFyU1zaBdvarhoURaG",
  "key33": "47FymNfedjWuMuttWjwcayR6n9jsrgMRKtfVHqYGRgjUQCtins1sxWxuK8h7bSgALrNyGMPzAxyUWNF73pu7pAQu",
  "key34": "5LrfAM9kxPRFdwU9qU12xv4aTK9wxv9zPEFGdSH6qXxvVPztowDmYiuP6KkZbkRf8rXGTogcRBW6e1EgPUzCe4kF",
  "key35": "sBvipEHLTSCirKYWzFnaBFU3t5rwuE9CU5Gu5aRs1wwZXW3c5PXEvpvuAN1qFsYrBsMSiGnsxyPNPdrvxy23uZs",
  "key36": "4vRfMJtTRC2v6yCLtFFnmdWYuEoHPBaM2yK4Bo6sLdQhKTVkWuMxsisBvF31hGPGJWhgX3uLFkjELjBnZ9QPikvV",
  "key37": "4whZNCMbD5eUwqrjQDVH5Z4aRx9FzcFgNFbSHnq7kPjACmofkH6azgYyQhaerPpYEQaYw76DUvnkYCNqgA589wT2",
  "key38": "3m7uM8yrT3bRNqAj3fsLu243fc8PSQbsYdDFVp7rxQe4v3ziafbHk9sDxGt45jrVoE3LKeY8TcJzbFCEvgujfdML",
  "key39": "3GTzTNMu94LidbW97qSNghvTv3vybBs4PKgHY6tRpMPMGzAbSeTfZTuo5ST2n8jmBZqVRbkWwd1UdosUXbXL8o6K",
  "key40": "5iNsiPd8dDcQVCWMnVkGtD7abmuW9tH7DqvWtdJnPeAoEVkt66AuH6YUXXqhcnFeX3btkvCbFmZhWokppDR1nrHs",
  "key41": "4ZPjomWL9ewVVT7Jx7cNUz3pXimyhS2S2KUHEE2no2oFwrTy1Y6k6LspG9GZV97amrWpeWnuUsr4Yg3UtL3FbgbX"
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
