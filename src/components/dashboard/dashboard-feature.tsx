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
    "PHxY7WePUNFNDkbivnfp3HXGjAHKFhhPUfja39xt2UCjW7G33ryg3jKTTVsVnYxPFEGy3gY2WoWYYKFHpzPKieh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZradXd8Rpd2pYRTarAZ2nrEkzhMjqLFZ9pXqcuStx1MmtDTiwKEczRHsJdGCsXYf85ZnFHoEw7utfNXcULsgMk8",
  "key1": "5VDJM1kGoZN3LHt9HGc69ifyFwpkBMcAEkNrPP7TuHbxDfKuH79VD7wwWtZoFfh3JdMvY5P4FUotvbknPHSR7mFm",
  "key2": "63eBvPk38aA5vPWeNwhMNVDeZ9P2nAM783uqGqr58yn8mXsqVgiV2xj1755kEHJNvPy5LTfjYE3oFeVAu1XCLmY",
  "key3": "62xdFyHkx9g6HiDSRVG4rSAFBL9AtMeQS6jdyamt1sy6kQqzieivom8VvK61vvcadPpKqWDiR3R5rRzW5jWUTvx",
  "key4": "sRFpet5mvd2379rKLcoYN7Ria5Xa41PRewRmEfSKDGGuGtbNvTsZDejYYEjv5EmkJYwWLtiJXUGgvRhLAtNv32w",
  "key5": "5QePJkDyGvT3e8Ue6KwjZbbg2LiUmwZD2BLYyTVnbrVzHGwvoWWfPB3TmwYdbYaBh8hNhNKc6qDrBtKuoh6BYCce",
  "key6": "4FcGz9y2cfusj9YKXTX7TQgeyHv72jQ5S4fF25jTgTmQVCY6gV9Uv8RuiTxK9e9x8dhjh9Tg3uZhiaY8MyegzXiM",
  "key7": "5oTDVQKqQactLTj3n2dAn3JJoScghr2BNawkD6gHKVRZaaeG8igY1bZLbHkHyJEe7QoYfV8pmreWxL7SQCHmw5zL",
  "key8": "2iR8b9VddoNJB1BXTK9oJ2pWoKq1eWisLcCp7HZXuZ8gcJ7z1bmirhPqymwSYwNMKxoznFav7aHxHCaWxbqaPAUT",
  "key9": "4bNFETGSYyHG17WgB2u4vYKeRNGRbf9jELYbnR1sghwWh3zwUJNM59UonjppVfp9shga4HbEG3HLYZ8SuSroUXrU",
  "key10": "3RK7CYcXjUCUcxjhZ83AjmuL71C4fY9D38GN55RAszpjR5gvqPUyyqreaqPTYG9os3vZK7LHqTxQaEmJFEz4R7Ax",
  "key11": "39jUZtwCMb69wU2zw9gVdk8ggBaoFZcpt1JP9zmrsnskdc9C5UBmzebbiz3XhQboC9z2cuupkCAEyfAqxfFj6N9C",
  "key12": "5dh2ZifH41mKK7S5fUjUAvEGsUgipxDnLJTW4uBBruaDvnfcVv8W3tG7CskFBXmTusHFdNXPoXXH8RFhFX3o9ZaW",
  "key13": "5o4pnqrokd37SYZfzAxCrzYBLCGKm8PSEhUegykNMDdCbNEGWHTkpqfKyPymBNfB5JTTPDfABRW9PEZvbSTVMVWd",
  "key14": "59XSKgpPEsGiuxtmM4KAQ886rVPEeM4ksJU9wXvjGmcPyaes7t1WCJPi2SCTRdaZkiRfgKRxDnrgaiVLbu8kHWDG",
  "key15": "59LFHZhjiTK87ReStjt68znx2euvCREyhv3iWzfYKndiER5kdmqHgqcqQ9nPxDGyTrLaDtMRkzcwKLuLZXmpEg2j",
  "key16": "5Kqo5sUFfeNUDzt7CBGzjPBv85pWy5NExyRKnCVPT7cxsspVbzESwx2LeTVEgLE46EqkWoDYBFGGp5dAMAkuwCBh",
  "key17": "4BkJxKK6jTrov7V3x2bYs7pWhNgZB6R57aEFUw82VGPuQX5JQHr2yKvU7YbAi6cem4KUZNAAXDEWo6KuqMh2UJa8",
  "key18": "3gCUwKkjsZAsE7i79W4kUnsh67vwCVpZ1taiqeeC9DzQ4FdRRFBYmLoRG7ALCgk7W4A6XtauKZ9MZh4c3twpqj8b",
  "key19": "4nhYfLfz3fbsUD8zcwFwd3DszidGcjNgmU7WD2bPCorGF2m7tvq7YEHN2n4iMRumw1GiHQcq2CXHfkqNpaZb5JES",
  "key20": "4ymwaqpp5ZQsyc5TESsMc4naynxENw9pJwZwADQVMZEnBpnrJMgwyiXrxEWu9fQEEGUmWX7Utk57Ro221isahNpS",
  "key21": "63E7PPUVGHf5sP8S5sExoPMBDVpT3DzzMyTXnEHBywYUTUsvDWNE8uwaMJxsMz3eskC5JxbS8WvWTxzDXfTC5Wrt",
  "key22": "5Pe9w7j5qDtrueN7iHjaVXfXCZ2uLTxNB6FPF2N4veKUtH8VSjmHiu3EKSn6koBgMBsC2dQgdEKqrU58SpiU3k4K",
  "key23": "25qPpJA17TCEADZgjPdNHDrYCkvz2jkAZ78VS8T93KoUeHpYWvPRFY1LiDngd6Fgk1ighSenZvVFJfSrU21Kp8pC",
  "key24": "4PX9mCNvWSaWv2xdEaYCUDp9GYMBisvUmcAPSZyfiFoJjWfEaNdcTD4Xv72nxue4s2anJNqFVfg6JqzMQtaMGo7x",
  "key25": "Eh9Abwko5fc3KfUirTEb9PzkGSCmq7vz8jXhrfYXSzcVM6oF24hLAoYUNy4mNPRVHEh43LABMCm8aWbxeWScu2K",
  "key26": "4sSxT219YUNChqEADfeZhLFR3ZMzSdmMJ6G6mxvmP4TUTnpUpM47fpookG4ffGkq6TMChwZyMfuDYQhN2GsFBAZd",
  "key27": "2GAASUBKQ8txBT9DH73fE2gzNNSoxxbExjRQdfFjgMZpM3S6fwUJHmdrZCaHjkqBhAehn9yLA8VMkUpDhkJykDgj",
  "key28": "5rEvHfTwZE4oWYAPzdnbyPFZHL5b7uXapsKaAqWMRdmWk9UfK3m28rtM5SjP2DXKcaRyVGZrJZtzQTrTcwfBMAid",
  "key29": "5sXQzUMqQ2ous9mYqPfw9vPNe1QkriQAK4ZG4EXiyEj4SZT58eS6Z6y423qe8oXH7zXYhcdua9dHXFeUg6EzER18",
  "key30": "thq5g6bBb3y6FXJK16BEPyE5wckKPdXVo4DXVXh1YUwMUiWsCw95SzRYaKkgRpKuwoBznPRdtaXssvcXrCZ96FU",
  "key31": "2ja4KcgkcyeomYtfhHfwFF27Qv3azqx67GdtS2eZQh3Td64YgLKscjWiXSS3nsiYjB9swHvuQ4HU2LLHV8dCTisQ",
  "key32": "5hNxZw1V7bn3eL4JCVUvdfjXVh77i1gSAdCpEGvdshx1TdBcVchbnrBY35JgfKxhH3E5BQmCnyaGAswDKysonFyU",
  "key33": "P8RRGHkco6CRuKrZBo8B51PTGNRt1Yy4CBnj4Mu9VtQqQ5TzAm4CKzXAJVK5KeNx9EvYguJfeL5RndGpxrp4Jm6",
  "key34": "kGJJYPV5mWcfsNQ2Fz3tXfbJks9cX2BiudV2dzMj8EbdxiWzVM1rmfKDWLpPi165FDNwjZb6FQaafaMPc3JpL25",
  "key35": "drMkCPvVdFHRbZkBcBnrnVcPZY2jdMgSYdsXu5MKAiyNQvbqn9h79p2oo2uP4aupXPNVRzXuAwgBYBu2hnD2VWR",
  "key36": "5RLWw9SRjLzo2NNnbb9Cxg6xRyA9xe55bW1zYyx3yhrNZfmAK4ajLNuG6VSd1WBodiJ2Nc7A11VLaRxr4q6Wq2wh",
  "key37": "4AbrrHJ6FyTMaegXw26cbkUWkRZoq3Dk49tdinBxn32b4VxVUTrhfqdsDC1tyZT5miEYP36Lw9WfVEWHe7MWXzhg",
  "key38": "5Fxp1AVw9ArkzTEvJV95JcdCMA99h1mB1jWXb926dm21Ngu11fFKJWaufcYjhkR4DTH1KwDeuAtaR8GDo5FeZqVv",
  "key39": "66uE1VTft1TsMS5Zx7X8XTM844fNb9vFouYYw3c1wNYYX1n5NEbpr7Ftj3vzkpNZD35KLzniWaW56fxMcVtSWR6P",
  "key40": "64zcmBFgKWGEie6VMea3qZPctYatYBR6xT4Hju6xuhF9wUXXnRxAGjRHyQUcVjsAPHJFY3PEneBNqXWwo6eobiLd",
  "key41": "4Jrp9nE5m6ixA5oMHcMqXir2qQ2P9JphHQH78H1L2sxY6oujzXwvHDiAUaXq3GEdWD9HUCUKZRMm5FKyWEeV3EaK",
  "key42": "33LFUQePx9T8VfK1U9nNeY3n97mJXg1CgSMZRWfzoJUPXdETzjYWy94pPkNe6r2UNnz9qG7z67mju6hoN2NvXdzg"
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
