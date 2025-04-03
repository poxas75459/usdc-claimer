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
    "21QxRG6fdHUrs96AD7jeRLU8j5mi93r54WiaFxFFhXLigxeMgAnhGF1HmB67PWcucbGiYPykqetnkASsmQ5Pi3nD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sbj72WERuZ4Ga9v8N2mtjSHCFRQTgocsRVEyeUMnfo3bLpnxmqtf3wsnxe5HJmqyWJq1PBYRbRo9eGXybMtnkkA",
  "key1": "4jovzsHuQTiYmEzbeMXnBHBRgocLxDhpWSGPmF6wSEg5M8LUtpwr8H9LCMA4NkPCLCL93ftxsKk56A4ZLscWKs6f",
  "key2": "3Ap2sroWE5T9EmFFqwpbBENVAwqQdhTW85rxnpct4u8PenpEaSBffZUKbdy3KtrHfZ3SvMRzxGa28RErpwRfVxEx",
  "key3": "3uYnT6No7E9KifokuqdnmkrzGUYKAYXQ6HxAkH1FTzFANUkQ9tBVKznVH15CNYd1kZzmv8FhVZXfnqnfwHawCugs",
  "key4": "51Zn7C3cwwvdbtywckb5dtJef6mWeVzHjFqDVM97sYSvXg7U1eCHVVvbhq3Q89G3ovYpyQyyzpdy4HD1z3p1hhTT",
  "key5": "3Z8Nu9XohRdbRHCnBRFRssUf87WmSNkvYKjFv7ekooJBdV8m5E39x1bkUoJbqzFNj2AFipQy3mBNa8fYBzUdbSko",
  "key6": "5psPAn5AwVLSrKVSSVuMC8aVWjs4i56CkwAdsV3yksXezrwjfk3bNYUrXNj8Liqjpj8c4cRV1bypVyGeqFszKAVU",
  "key7": "2ALqBKSeZd1f8Dt3NVjaZVasotNPw8bJFDgKUACpEQtCXEYoKt37dhYNu1mrNqJPN96f5LZeCm58jDFDzzUbrQDk",
  "key8": "279My75SgyAJqBmFC1631DvEemSYNbcXwoX3XnZgeeF8e4qCJn5WJxFGZguCZoM2eQmNXEXrEFZk5AiCc7DGbQnB",
  "key9": "5pWfQv39xx1S9wqwurHSDF9EVHCmm4CUw66jxbjSkc4XURk5Vv2TTZybFg4oVQQJL22jnc12y3ZBwJei9i8hQqEc",
  "key10": "24cHnCfub5wtmnrkDyk3ECh2ZzCyAdnxyJ6TnW7XzDQRcTwsHoYLrPByJAoK9UxBLdEJmoXbtXwLCFk3xFXVFbX5",
  "key11": "BM2bU1WpBy1cP5zimdHkQjqRJJdcQBqGvPFnjWHcJDXLuQXheVV9rpC6fVtK3JsHGy1NomZViSnBBFqAfbmSgsg",
  "key12": "3bVcPAqz3QpQUHbGYtCf1jm5CxuDKi8pQRWPLfvkVYBTmvCR3WydqKgDpPnLpkNpWKbfgoUQZd4ocbYz3fizQGTe",
  "key13": "2g4W13NCSj9Hh4arQVjc3TvRLGhJtRc1mWufRLWPrzvVQMC1ScrJbnGQeNHGRWXuwnHRVoFHrNYF7YSNrELKAjtA",
  "key14": "zgjZUQAsYkDJTCwdwBQzRp4XAMmTyQpMryNCmPVozZK6RqGewERDd4wouqCRxn9q6Hy2ATGYjMJ2Bm3a3nwu4LK",
  "key15": "4aGuvDoTv7NcjjfawAk8WDQG62yjnYmU3TTiFQSrJRqW9HQ49pq6QoEskyvpaoQeL1sQmEve6Do9UTviuD4nN1su",
  "key16": "3MeHi5WwxXyQ3zKmTf3c2YXRS9x7Qj1rfXAoLxSCYrYZSuZTkefhkxgmvhNiPurV2ChiEXNLErBoLgfzSop367SA",
  "key17": "39doyg112KmcakBbVf26DC3zDnknW5mmh5AFH2aMkUpCXJohGuoA7vqhx9eh4R2LJKk6uzEwqRCVNbXzs2qRfbku",
  "key18": "uP8HEymdK7pcEZSBavFjqLXaAK7hrRbBr5WU92qEXZi8wF2rZsNxEu9apYT3yQvGjsVYcDy8QQYHaCKZVSVVKdw",
  "key19": "34uxAC66JRuoYPatJAfzvSZqHMLdE26Xg3tS55NWX1jACrDeKD1EWnYDkXmpZzEiuAu1v2mAWyJmD41rRefHZG3j",
  "key20": "3zS46TA7SnsAwBbyXJJQPcK8RLjdGPL3FmjM2JwGoMpeFyfoMkbBNsaLsXnf2Zb8zciVmfHQ2bbpbdzFh3ZAaYfE",
  "key21": "xMLLFzKMv5P28anXsUNsT3zQFqeYZ6mHWJCE9vnvjFjHgPzeGC4EoZvAfX8MtnRVkH6nsVwwfgzvgZpUSVp8rAv",
  "key22": "uSKdha2mGfwaN9PZg5Hi9Teq3f4RneTGTxKDycJMBFhQvs2gwuBFuePiHHa6ezZZeQBbvfDc9DopRxsqinUjCV9",
  "key23": "5k82MxrAAaA3KBP8d9DdjhtQzXKsK9F179maLLDCrmNHt7cHnRbdV48aFAb4pnvG2LFgLzqVTfiyvnRHEQe1yfCv",
  "key24": "54GQFjDoKbQ315g6BufQH7wkh6KRuAdHXhPC2FhKBqfv9m1pNB2wHRhvffcyFFiLoqVcu1hCurjJmQm4iNJp7B95",
  "key25": "4NebaFGi3P16MnKE2tznR2LSzQtVDzrUVvw9NivZGRVB63E5KKR7fGNRFRt39YKTRARAJhbo9oKPo24sm4Pcmy6P",
  "key26": "gQDDqV9VoyopSq47Uee8N7m9jMt9NeuRMhWpGqwDz49A94PN9H2h3y6scXsxDefPrTtyhJGBbZ5ZVDZXevk5NA4",
  "key27": "4sjd8kP2vvSmvRCRzikoUGMu4J1BTup9RhizuN7J4jSBiEBUVNUfqmuXnvPtqV4Pnxicr1tsaVLGgJ3Dtj4JUNQu",
  "key28": "5khKQskfTyur6FdkjrxQKDiYdBMoJ2wd4DpaFXaY4xrn5NYe4SFtBuEFpCkn8GvDfNapzNuKMWzkRiuctCSa9NiP",
  "key29": "3gX5T2G6Qf3mb247VRjADXVUX18AfMQHAAcSfb5bkHfJGMNwbNgscVNvL45sNGef1H3SDKGcPh5zcS8gDNLvgdy8",
  "key30": "sY2LKsS1pSQLmg5iy7SDdYEWgASPfZitY645BJQfxWNUARKoNUCaGqVmYUBC1rw1wk78tT4ZSxi9pd9yfLvoYh2",
  "key31": "39QxHDRxn4K11iRMUCNyUZcmkhwPotfKR5MJYGeat3nZw6WKXNvMJgeFJrBaYLbJvYqm493Ee8V8Bp7fb5p1firp",
  "key32": "om5ZQdpC1Gp9dJbrvLjJyWV4yibMnUGVtcaHk9cBFPf5TeZSCAsQctBJQSH3s6Smt7zwXiV6iJ5kH6tvg2Mu8ir",
  "key33": "57ZNMAqyXZDUPEqZXYGRVPf6JKWD7QUTFk6EKoFZuNt1HVfRYRtY7koMEcqcM43o24xY1j6AvpbSXN3bF6hK3XUq",
  "key34": "59Gcw5qtuNNSH85T4B1JVZKT8i3s3DVx8u7bTyn8katGr3YmTX76i41CBR39ERHUCsfGbsD7WuffhiTVWrKKUjSS",
  "key35": "2RnuR1xyZJnhe7t5b4tinwb8qYW2K7KtbkuNusXN4r8ZWU73BNHrQoex3vwpCybXaH42BnrX9xvQJ2efmdnkDxn",
  "key36": "2JgiT3nYeV9JqRPmv7Bc772RhV2z1rxGXxXnVPK6hhuYZtqatiSMueNnMoj4LaH4KUkQL6YWoTSu9Qkx8ySKLppn",
  "key37": "4pstbywpw97ovpjqCnMKSVzZEbgWqvFRGdsfGktYgtU6tqE176yLG6RdJSVRNfzmK6ghGzHjP2oQx4nxDyNo6as1",
  "key38": "MupQ4erR8MJu1XzHN8YPoSihKvtdVVr1zy6poK5X9F6fTCqJRiu61H6CUbCeCrVhqfCyBWyMTcVC54JF7AyNvqw",
  "key39": "5EqkrCRo2pZfiSU37x6DVjfu98DdVktDqwNhu1k1bTEQh7KSG8WC2JpfTnF9WPu85kmbrdxRyyLmNmdeSHqesWk1",
  "key40": "5Af1jpydv6wYsgSPukfhrecy5z11v1eK6ovcHHHTootkCdXT4NDKZ8Z7dkzRkM7uVAtnKpwDqExxPxBXEj935Cd1",
  "key41": "5vPXKPkaCBbcLnqUz6BGs3eddyGccxx6Yj1ZZxZcrkfLAwMETWASkKb3a7bLkZkaTrRExxWCkVNLwBYfEtMUqgXJ",
  "key42": "4FeoPADfReXEkvBRWmUdgchGZ3kSDrLEpmEhiTaEK2aUrsi6RfvV8d86pbFEwSTXrRPRN9iRa7RzcLa4oThDtp6",
  "key43": "3cTLzx3P6mvf1Z8P8vjvvbd7HftyiTZBc7eEC25VymNXvMsXznHKzYhN5dnwj5ddGkdp2RNdZY8PWBFyZhaTiBBv",
  "key44": "66VubJUUYANkeCbioYjRzyYw4QYduCdFqh2HAoPXjhe3CCojSkf8iogF4Nv3Qd8shaz1tYSTGSeB5BHKtfPJLqWQ",
  "key45": "5AuTwrzRhx6M2JMncnFHn1M9n3KwRrdUe4NZU4ETc3VCU3Xm6ib6cKHnoc99e6uQc36bKJqJLKBKevcYmAR9yQX4",
  "key46": "cDLK133DBst1TrRiCvbLDde767CnE1f8j3xFMLVvCmiMhNVEfnbRvRabaZZMn1EPo3wbucPG6P3vHXWkDYsUQs4",
  "key47": "5oFNkPnumrPvmVVt5imcgWAhUZzZXnPqgyGJo3bZeqSf4T4bwqRHw3Jtp6EyKSNSinHrjnxHuyvmDf9BVo9hxc5B",
  "key48": "4jHpVyRRA2odFV8wMnzXYdsJBxpSbLcGz6zfRi4kbzHKERcLhDZW8FzXatLaHWLLpHZ94XjS8tnTpQRRBuEixdGd"
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
