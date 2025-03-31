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
    "3cqBkCjiDV3JS4hQJbaxxAGzsZz7FGCqymyRDPUvUWk8dPEuMy94xjuCRwnooB682ibjZKjjQ2ZSc4WzbupT9X7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zbWiu9GLZbTZgs7ancxLRaFp2mmmrGbadUn8nG4n7bWP7dYxwJHzyuC7oNEfwJLffTNG8tGB7fKgvZDbxwsTNe7",
  "key1": "3VEyA9tuApvTh82k1H3wquXKT7ePBJ78rXYTxSDbFrTJhFRbghwUgwCZLx7f9UJ7bDZbxYtdvCBe8u1Kr7jwTEwt",
  "key2": "4qruaWpTpgV7inJ6bfFBLGKpNP9BPZPS6bLtXgrGE8qdLkoEdH9hTCv9kzVheFXNbS2DxAotn6sBgqtCgUSpTCEP",
  "key3": "2HN69jof4jn9C5oFFxANVs6HP3LKvGmiDNwAjpB3yW3zx4PBwkKQ2TpBQ1XXsEvja75yUXptZApNb1Fx3qvXWzUt",
  "key4": "3cQRFj45ksEg9FfciKP4RDWr7sNApQtCbqtFXxVSTCx3E712Qa8WJxSVKb55b2e8r35sQxFqCU4J3kbsN9dnKCZF",
  "key5": "22cdoZ8BVDLa5GzKjdVbLrLRynHnwszdmtD4eKYk2De4GZHfm7SRwenJtu6a6odDN29m4tfpuuRffRhMymb1ebZp",
  "key6": "2Bb1sgK98KE8BToT4yot7EU8stsjZDEy7EHdMRAQQ6RdRKZYj8vQwKexa7ZMqgzU764tRKNEWtjD8oQD3zWXDphQ",
  "key7": "4UZLQsAJ5HZpdowvWmvHuEqtpawuLTh4NCzHwE9j5o7eMb1s4dTK7LbXNCU7JDZQp52eFZewr1BsJoXpGLhwSFt2",
  "key8": "2kxipwEf9u8sTph7hDFpExfMu6Chp6UQ8MC9AetEfFfWbNy4EQgi3shvrPR49JUxnKzutU3Xq9ZuygXVuvoKxaFQ",
  "key9": "4UyWD4FjwnPUbkApyo5DCUirVCK87TfvY88c9yThdrRcUGRxPDP6UgKEedh329EzsdeU9ZtkSfM5C4SMoxJHUXD4",
  "key10": "3ymbiP8XxJos5yUrqMdCzh3Nj6Ui1amM5WEm1aqXUPfgURb9oq3aLYsG3rgDbL8E3E8BVdDZF3NqF4D8JRVgMDbs",
  "key11": "2VmQMWRZpudN2gVqyxJsfi6pzcBnp79P2NyAthom5GXX32u4ChjNmW7vqfTwnQGi5QBG5QfyB5JBBqyn7Byhndxy",
  "key12": "jDHSpUvr1sCVReFrpeghiQnxdpGWM1NjAGWndB8gjKGvxwhmwrdUYn9PpHyFFVthxRqpyoZf869acsntLwuAPMi",
  "key13": "36Z7wfYtoToATJ2xtGQzugkiRXpJV1YkW96kWv9bYTLSxrJMZ9bfY5M2NBKuCpMt2RGmDfn6CwZghFctoraXmoXg",
  "key14": "2PtSRDnQSsQjoMYoEoxHMLh4GFTuvhcQF16n46dTLc165t9SRMfHbq7peJk3XWWVNQDMrpjkJS1mF9qSJMHsDLco",
  "key15": "5kBW59tiQCjFpveBZ7Zp7q4HBVw3RPkLr5es3qcdakov9oiH2PWCQor5QbZM9EBv3iDhghpT7XzhyjJzTdTfApop",
  "key16": "22oskwAMdw58hiFs3FBYCjWQrVrRLb9TjpSaGKqkVcSJstiNB8jMEkqrkCYcLkawsB9iKBFDHXgskThcYJ98VfVG",
  "key17": "4Thrbqq4xDTZaqaQHvCFNBfGZJmMsE8ePoeSH5WG8gX3bq4jQhaP6NqGDQBAt1s3eFa8kWvyaubcQjsycJFMs1Jj",
  "key18": "3aniHKgUoJZnkis582x9CpdWg53VHfesiKFpYiPjjsWMom1VWyxruijSWgW8Jnp7wxTzr5KKkKq2imY8u6u9xYuA",
  "key19": "4NQDmAzeH2zJHSH5B9AmuywqYwTwRAt3EB1cEHcCi8m6AgbijscGdGWxmgEcoLp3ZbTfko62Pv1vM94QmxifCUa5",
  "key20": "4m7mzuB7boPJmRWxBdV4trzkBe7oXHScT2bugTi1uV3tMcw6y2HvctYSGJ6UP718Sbm5pujcjEaFD7utkuyyRt4y",
  "key21": "3ULZXGVXzZTvyjXmWzYAMjQpHZv2hA8E7Q9fFQEeQExVXFgW1GNhMDaNbNE1MH6Cme2cy2BbTGAxsGw48AwCXBmJ",
  "key22": "51edqqRuK8ATkPP27SzWxSB2wUqnQ6pfUYbS5o9xnUmFecKbKAeGwcLjTSHM3nmvgncgyjguZMRbDh5e4EPaeVUH",
  "key23": "aTkMjvHL3Nhf9kBvYU7J5BUvp8VzeSQJfVZ5pQ26iVewmn4LCaVo13awpuuwK7RS6Ztughuqvw74hJ5mbQGbb7v",
  "key24": "2pptuizTSimZ1c9M53W5RZSy2vZwZUxMRFbLs6K4XJBamwaEUxDD6jxuQVCZssmxxtVyNtHPRhyKwBBbLvxRjAV9",
  "key25": "Tm1dt3C8Mjjw592gCc9AsbctKSb65ys2jRxQeeNTD3bKUra4egbbBuTMx3eKurVxCctUCkTPbSroz2woZr5KJps",
  "key26": "4s6uwJkgNe7dt3xjeSCxga8yNVL9it7AbAwCg1SmnLCtgbVWHfz2p3kutCncUBCbQUx7Bk1yZ9Ybep6S62vKxKAZ",
  "key27": "5QuagyNo3D1yb9GgPeNUoQmBNTyXsbPzv3P1X9kTCuo7Nj4GCqdgdqF2hUUCEqPxzjSczgYfsSpBFbg4qpWHbwWR",
  "key28": "5LhX3apeXRPbeWWQXrVNJS2wFWpstPz9s1AeKjeLMXrkhPaPfpRhrvNW1Tcsr1Eec66NAFGXPXgAyc5SWonzJd8y",
  "key29": "3i2grugz7SHEUpQCy8GbipoCa9eULZbhthn9mstjDXxTsShKWkj47ELqZ3Lq9vHgA9Yb2uD8NhHd3iTsV3BJSzjT",
  "key30": "2xxrHXcH9pJ9LLcquksiiytisBJuyFiP2W7fVAfLEBFiYdSicS1PMMaPhv5AAeUx9f5cD1YfArMGQyuY8WiASyW7",
  "key31": "5LWNaEgvb71bxxZa62espvc2jidjc5exZM3cr4gFfPg2LkWioRSj4SwXSWTup9nKDL86oh4miZnYkVEuSf9Ckn3j",
  "key32": "5wmTV1Xs8FVeGDPNahTPPR79ZHSyKMTjMkbCmKNqTHY9vFvvKVgn4m9SxPQ7XS38nCnU71mN5grwBjfL1Rg7ZFdr",
  "key33": "5PNfMgELTm8XVwDvs4Gq8xqQyWtCPBstggJZ423KkENK7RixCiEabVnmZHHTT2T8t8GpAfZuAJc8B3GdsgCEfEkj",
  "key34": "4okJWSfGPCVhwVzjk3dgqchrhpq2rLZkY8oHG8pj1MH9jok5ur94EFSBhRHtgqe62Y9YSi9BRCKvce6eANCzvQUR",
  "key35": "2gZhrSDMxwxME1zdRSthPi1bQ5yGBhRCJjvciLn2VunWCTGKtsDfmTpvVSrXUZi6TfHPnyvvMJEya5GnmM4mTPez",
  "key36": "3vemMtgpqrFqNokZG6tDvNXmiBycvPHEhFv2MCEbRePAs4eBoEw7eN4VzP115mF1EhDLqahqLv6DVFxerQ5vg7Sx",
  "key37": "2FBresoQnjq6fvMBHias6onAgPUWZau5qutHSbCygEyqDm1aXorjHniSSkZmRFsRkeqKxM3MwTZocb4NSi8f1SxK",
  "key38": "zDbW9BHFJyEffExc8xMWWYgQDQSosWvBG4xVRFkQJM4Py8uXhBQTNGoGoFPNMoJWPUeyJ9uEGVVryh9KbcdDvYf",
  "key39": "ie9kA6u1WJYgFDf13uFB5H4iGCipcg6qNmViGstKrSKCurBcXngsaHcLWecuSZzvpYVwJAhThQgUZR2hkd3FVux",
  "key40": "5F9puUG4F26kF3M86c2DvR4LU8wqurey8i3GzB24iraEgPd9jeRadd2YA4RkURnvy22FQKL8ijCTS8PkBKJJVo6s",
  "key41": "5yyCq8uGgNkmXVJP7HibodGYhwXyDExHNYr7LcNrpWXGg7UdMLp5tmLpLB8LYCR6kcKYVk2EHL89oTU9GPvmvrF",
  "key42": "4vSsmgxvuki4hwEt1arRSaCfy59p91zyzCMzmoUr5B8QHZMSoEK7FJSXuEowSLMtMMmKnhEio15e8mnkNGaGtSDq",
  "key43": "2icSoNBT7whoFFkDpc7favDLEz91FqxtpyHSSkGBgvpKfwaix3cggVpwZogHZjrBdi3pvXYEjnJ35hsGDAVKgdzV"
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
