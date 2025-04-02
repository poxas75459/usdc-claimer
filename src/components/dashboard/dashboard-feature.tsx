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
    "39eJT9tTKzRyNUbTAme9jjTtkpuLggw3Piw7hyr2CvK2HM3NaqsrVHJidg8R1nWqEtZ8mBWdcPj3jKkATNWt62Cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ls9qbA5aiUhv74k22PtEDp1Y5uUD1cgRovSJrDdrZjomP79F45vum34QMtATPMa8oz6Ko5aMFsVuib2oBXQWsz6",
  "key1": "37Mc2YXBaebNuFpHHbe7iRhGfs2hWVzwLhtJPYaPK9NLrS9vSg2vwqjX5cV4SVwFwWwyk3q9FnQQH9e3FPjdTJSL",
  "key2": "Qv2ZczxrUyQvJ8DSzsQqJ2z2LyRUtyjHNBzmhjvJouijJNg4xQV3xhP36p3QE9WFkYrtETRWqZRRquEEp5XiRpB",
  "key3": "6WxkiihoBgkSqhTqkJwuhCPHYz8YzKnmB18NEMfbH44y1GjyfcXtJds4eLHvLu9xrw6ZtWXzWgB2EfNdtFRD4VK",
  "key4": "2xcn9R3P7iPnKtXXDF4UNyJ9oc8CdyM6WQwrz1GpmbTcojpzUDJ5yXzAMya9Wjab8WjjzNWPD1i7yuB2TucJkxj2",
  "key5": "3mtaUbwi7g9JW2gtipUmYUwK5PNSwoEjf5HBdXE4Rfwob5wqFhKdv6YgNHpmFjyLQEfMdaj281hPnkjmH2T6a96H",
  "key6": "5D1gSGUmcxhrYmVLsS2arkY6Pb1kwLQqTGAAkdfhh8MCiUojESR572WmJk9NCbGi8NKf9PQVfS2E35FHPA3Pewwg",
  "key7": "3GCnfHLkXuYyseqtSaUyfueyvuLav1rM717wyLDiNuKuGrLAH6HcEpQsvY7Y1x4HPnZinFTiMeKJByLKa2jVm5uY",
  "key8": "2Acc8rBbKPsDuBy2U3eh4NmfJdBpwp5qEHBXokHx9Ju3d7xD8kSL8VwZxPkUZbYdF1xjFWNbmJusWCtRwPVFdAjW",
  "key9": "qNy8G8Y6bwGUri99xMkZYNSH1hCJSYE9shfgw7D1Eff4k3RuChFviFkvtD2uhY8Y2zUGBQd22CA5oRCJugCNnqH",
  "key10": "5TeUEcBxnKJFM35McG3ipaeARWMRktNT5QuoG898HLwBGmRZxsQYemaMZeSMhGnv8NB9FXRSK3xo2Y7HNvpcMzHB",
  "key11": "7XdG8vRfNSgvgyeB6JLUvrBwPNkbaUBQuGmWCeJTCpaMSTjRUNTuKiscaqrfpBUxHBRan9pecxVsFf3Edot7HC1",
  "key12": "3apGDonRLnZEdrQntAhmyd3muL7sRLaefPGp77oZb2pvXXyhZmYT18dqzF7QHSwC1QMKyz5m2syZMm5a1Ap2Fwqb",
  "key13": "2GtPRF1bfLTTSgpybHP8mJkBTsep7REHQGgJcSd6RyL6jDMwetEAgoVWhFR6Zm53Zqu6P6Y1XVYdxj4uoPtAKkBu",
  "key14": "3sVUnksAfWuNviizm8ZyaRzLu3fPdicQWR6YBLRHTTRYnDAPpKVH8fHoDiFkCtANFKGSdEw988oWgDz7epN8LKCn",
  "key15": "2hgWsW9ZCTL8YXnVfB1AzaFMu3yEnPftDoiQrAFnWN6ZmhaHgYL8Bv377nbXdbeKY4nzabqdcHG7enuiyiFi2A1p",
  "key16": "La8pgeQzuZh5W6HfxaBhWMEFr7naqFdJn25PPkJFkiRvuHe7diZpp5hq1DDALW1pKsqvJeVCzT52rhPPhnpPq79",
  "key17": "3LRwwtj8sm2McgvF8ipWe3YSqLpNu22AvRkEykQTmYTKQGUcnFSc3LVkuS9eJr8hcTAUnzBoLcJjHaKs5nSSjJca",
  "key18": "2SecWRUy3kKNDjzjJcoCew1hW5PXwvP96xTaSz2nrBiQgvy6bg48eiDzqfYVQ49hWzyPAAZjBuPhkLLievMpZuQx",
  "key19": "54EGKo5ztUF3Fb1psA4vtfyYZzqJo6JzEgBET3iMw95nFTdNSpwxJEKAZfKEsS6hA41EK8UEeGokagnuU56qRZwd",
  "key20": "631JtWNqxbVi9RBRMB3pDFPcAU3n7dWC2eWYcy4iUWTbUDpeX2xMh8SDdqAYFjWDbKE2Sh9uxcFPF8Jd6pfwnA9K",
  "key21": "2iki4aiqs3jG6kkcCYSiDwPBehdy8L18NVjCeFppS9qsm1pSCbFgAq52V5LKwS1yxQTfneymzr4WQBes7cxJndEC",
  "key22": "5wpqvDsNipgkEwqGkss2BF7K3LwFBijxh5ViGznRMes7codNokZRWwxGnKjAuCcatYwAo411PeV3N9jbZ728Xr53",
  "key23": "3e7XkRCPXxjutimXh4kN3enrffMKceHK9YYQXgotLiwFdnZYN2pKXLEnCQmHAZ58EYso8u6NYGVKM75YJ7wJA1jH",
  "key24": "33ZHAv6gMRYECWjCRQh6tBciEtr7yZM7rQKRugD7P5PU4FhSEqakxJGKtB2FbGArJrY3FL6pUrEf9bmozvVEPrkz",
  "key25": "5GHnYxEYMnPDa6CpXmH5vNwB5HQHB1RkF53YiQgyCif4d1f2tuBaVJjkfHHgfbcAEsBBFbv3ByBWH1faUjPtFGw2",
  "key26": "59C4AXuzSqbzgLGxkaorwoYG83LyreQsCktAo9tLkv4FcbfNkxuHFRjZF6GH6j6w2g8FXTrLWPrkEyXaBaLGrNmM",
  "key27": "UceFpUmY5YYTosKTvuSmJjEiXQFYwn1J7LVNtpKZqV1gxNH2E3GddyM6trEQoaAe8ia8NvZHExJ69QUxDqtU8iQ"
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
