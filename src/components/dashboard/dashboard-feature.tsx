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
    "38PcEW7MoYGyd2v9g6TUWVmeZczNYoNipjpQG2sr9NZ9Z8hrZCn17WsNqXQjgxdKpGASC9XyMi416AhuVAYNq6Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i3wbzrbWFsmEtJ4HPvCqKmmqcm9dv9WJSMXDem6cbxDzE5QaomG67nnEQnZmr8Hx6tCsmi6NeL8uVU5NYLRwqZv",
  "key1": "5bf7jNZ24tQAhyZTGhUfgMQVr9767fM1mbQAPm6dXd32ZXzSKhyMvBRBJzfxk42QNTMiTpj2ZkhvvmUZHAzqm1fG",
  "key2": "4daAGDskJ3kx57FrYXNHdmcsUf9adcg3QTFxX3JDQmJUymjpSwiWvfYnjXmXFngDW51ppHAoNov4WvxwDeVVtsEA",
  "key3": "3DiEdFgz6E38HQMRVQQxByNek8hgPdZ7XLYtDiYT8gPpdEU6JddCLDHENWpVKK1Lv4hcqva7D1BDmNDhNFDAhSFh",
  "key4": "3Ds6L3QwD1yJo2NQjYA5QAixxwaEgNUcMQbN7nbD8NYTkb9RXb3LaPa18dzy4k5UnzZYBHLWDaZVwqJbPQNMsJmg",
  "key5": "4QjHcU6bLzbwRevZiz3ZUfTRQoVo6QHNxTP2cEiNWeD3MmU6W3WisYusuZVVVYSsCcd2ehcRHrA2EZKNAawBMyZ7",
  "key6": "55VEiktVhJ9RJB7uNQnEyBFsG1ZaSLGea8GZsbGLtZ9VZaivLEGqyKKNkwg4qFpQaKqPf1eBtLtMTHzPE7W1Gis5",
  "key7": "5SHasFJHh1dNeCxb5u1uwUN2PmqwZ2vNrPHAfvDuyuLnyjkLnjYe4Ek36hTDJF1Wqboc4e7Lh3f6x9XaKprm6n7S",
  "key8": "Fiojo8tLqzZchkWtDT68WEG4NKXzLS4YmF7KehSJzRjZsQc82V66DiohmbsiXukHxoWBKkooeX5zVkCHVJ5q7Gm",
  "key9": "4bastqHg1UHP85ckHVMJXByemoqvg4tcYc2GAoVU7GBw5BqJUmkYwqFWqukEaQ1YXFc1ZfCCLrLK5cB4YcBQv71Z",
  "key10": "4YwTYyMED7ywvJRcbXTjf823B3BhT54ft6orfS46BHsRJwpqsZ4PAwYaLWDUh6quYJJSzxE3ZskPbBxj9JqLcXsu",
  "key11": "52hTuHmpjSKDjddaZYYmQ9KYcSgqxcuWGHFSDu4tdRzfsrNYvr3kXm8jdTNFy8Fqm8GfbpgQerugHYi83Qyndf1m",
  "key12": "yEG5ZmXq5YNGuaUaz1SUgtrWTvX1BAhrz5tGeyryuLym2tb2b6Xd9LWKFE68XvX914hJYeqwnzXWCzoYnnmBmCt",
  "key13": "42gagmCn1WccnWYkEHz182gSYCRMitbhJWQwwVNydvW2X9ZFpdzAcfpMqrdTKuJXBiRqDqcLTZWwyg6DrhjFnuV2",
  "key14": "5WKNKz1ccw16W8c3FVgMLW6UYby176vp7NNF6wiCn8ApntBxyScC28HxjvSEdF3TFbVsCMYSkjdYsRLDutXAeB62",
  "key15": "4XYBvKAUKLFNHiGZfD84zyUtJLbGqSrKapUdbbBSrQH5KtFyJw34HMtPKPv1CJEtdYg3hkqh9c1eoMjG921qEUeX",
  "key16": "3rkuzPtks7hjio71rdwRZhg2toDheES4UxneC4iVhhW3ncdspWvKCG47XdqxiuThPQfb4EAf6ZFZG1HsjiC6nB6C",
  "key17": "45R3prZqumza7RyrvfWy82JTEnUPSDNZewWfKgG23E5Nd3aefxfzoVtXcpDWdG6waW3t8sNZrjK5r8fJxLysukZs",
  "key18": "4HgJPtp4sC1GKkuzPVDVgtTjZN4Jtc5wuEUyCyuEjNWkScptv3gpXqevS6K2iY8aAxErAGagv6sz12gHCYA76tWm",
  "key19": "35JxonmY4Zfvr3kmUi4DJMGz5fvLJKLEWTGxvXiLuovarC5VNWgMfkgc7dmSTyiwGv7f2cdy6LQUnnQ4KTXWpYJ7",
  "key20": "2TPRZ6ro1r8NPnaKWTZdicgFLcwnrNV8XJ8bVc8bA7XfBn35HttkETEgCDiMDHxZiJb6oj4VMg8oc5c3cc2iHt53",
  "key21": "63T32xddbq3RpaFB2QEGHXKSTB1vpjGRxzqjYY8VLHaanmnuopE9z1fUQpJAx64quTvZQW4B7MP1Msp98vpvoa6C",
  "key22": "5jfNjTeiXvoYry4dYag8sK5T97eaFxhVwKFR8CniDEhA5iW2CkVmvVXikY4ou992T88QeP2RXv74s9Px4BMzZx6S",
  "key23": "2YrzLLMVkduHL2cwaMAZddRa7mPAyLNRVyihZwo1rnoRt2neXnMvRxU2kfW4jrGQqRuJjMqmaVp3qp4QefBbRbpb",
  "key24": "37bWDpVLnodBHGjwcx4fQ4V7QEsdAYZn5AsAdVRczNNAPT78e6QB3DiTnHrWCoaGfvZWKDf5bP8Rjpo2nW7chCuc",
  "key25": "5ZBSvZAqgxsY7QfLbQNYaJqzVh6KUgfFZKCjvG4C69o8qR8Z3xJEQjXeXiEvrj2gJNV47Dof4TaZLWCRQ6RNb252",
  "key26": "2GxTL29pkKXHpxg4Mcyx4UYkkhgpyd84YzCy6oKm5CSGFPNwiGiLUX6kLumZt8WxaJkugQZnRCdJEBwj27y4dBSK",
  "key27": "PRZQDH9BFgtifzeKZzDA9kYgpEoFkHmzQ8WPvufjgqjP2ipUUrDhHWddmWDWKexYUMa3YoZAbCNTREyiRpdNkMb",
  "key28": "4ceURUsdoJY2UMHfBtcv1LBkALijE7mpqdqGzdRcvttu59xCfMxsDso2MWdy6TjBuKpFrjnu9QqHaoHixgzQ7SfY",
  "key29": "3Gy2WKq62gBakxin6bDTUxV5xFbVsnwSwRSUVLE774MfJnpBQ4sGN3JwNnZRuB8x3VWsoTdnSyxzdGJRnnx12Voc",
  "key30": "5WKAKWhNMzrkNMMNvAysLdJSZaUUsDfTjxPWbmBoYNmHqVs66vrKhDHf9pksBATu1NrzvqSRNxB7L7i9pXTV42zn",
  "key31": "3MkL2K7wcYhtYPzC9WsCpmyXn5UZSJzCjwX5LiTCL9UnjR588V6wHMBoEBh2TTqRSm56CXannkpP4u8vrEbfHBLC",
  "key32": "2m1Tc1UnaRaMToFTrojHjh2pJcxNyX4UN5BY42MXdhDf6PRriGUNCynGCfoTeEMkSJ3cXtirfvNS2TWW4nq4oFGV"
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
