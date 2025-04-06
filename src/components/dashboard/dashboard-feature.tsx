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
    "3RkjPKb88z1CXGLC3cNkFqgvSmrpWFpPMbw8RT7BhyNoxqvsprvbZ4TTxmWWRYyzNpUcZSBsQcfXJ7e2Skparw9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LwNbtF9NRGURno78ZY1HgCsZscNJv6kWeu5ibLSR6ugxA2xzQQP4L3616A45PmbJJVpnEQgKs9Cry7nNd7ASqX",
  "key1": "3srVFz5itJrtnDfwiU8qxYFJgeW1UdtrNJsZ9sB7X7yajihJKPsq2oHEFCqYUpJuskjZymaiDRtnmy2oCTPCmsAX",
  "key2": "3nJAKp3Ss11hm45urcuwaUHtzxdsx3UbnuXH1TsRmBhh8NUAvRjKRtznmtEDWMC5o5y9FXP5NwoT7vWsCX3jdmqX",
  "key3": "46R5bpQtGZzHvRehyLjb829RMyxR86H6UMQB2PKVE6yQNmxX2xJAD1zFzwJtjMFknKMCS63sbUQLhoKXrYxiJBTY",
  "key4": "3VN18YvaG7vNCeVsMsKjF4tWwBoPxvA9ndGLTnLKbEdDVMEJBSMfqTbiu2P1GoqVwAGj5t6hAiimJLbzKQWxMynw",
  "key5": "tDHJaCdT2f6gW5LpEB5CSfB8XVyKWDHk2jF6Hf5KRzK8DdyT5fcghkKg66A2PyDChrAbamSatL13f5uETgCpxTS",
  "key6": "37hSBSHCmWBqduFFXBDnBza3N46hPhJs7fAozrCnAv6r47PWdjVR3BFpqnuUcWqx72YZdep8S8WPcDFVyHpBRrX3",
  "key7": "6247Mw7E3ebP8PFt4Nfb3XwyXNSLkr2j1YoBJcSr2aLrr3wZf1CK6LS2VXxYYR9DhARvFS5SGdHgGYx8GQ95Z1TR",
  "key8": "3RDPPJgaGTtRANdEyLYDFnsRyKDN1GET185xStAmifigSZRWqETKFd74Xod6ZrgVqPqD98HDBQTm1u5XpKycsHhz",
  "key9": "Lny4LRuUgrCnpyMaxCFUpztyveEnPwc2eHFZeEo84ULM22CiVFzseShLkzNWfKCW3ff5E9JFLMBtDXiers1qMaq",
  "key10": "t2DRYhgy4Z1HGUw7VUB5GFKzJPK4VkbYW2kMJkwAX6NvvaQMtKVK4p5hJo9KEdPauSdvkuFCcozaMqkrgybc2Qs",
  "key11": "64UuLi4C8oUBNUnpRP7PCdeHS5sWgX3ffzqpw2iBbJrsNiG1LBZwmWgdqiVKh7KnchaCTFgji3x6jWA32Tc9HPzn",
  "key12": "3SwC5E7N9aUQPEuP4QK78VMQUz2RpZdCt3yFrFsVtdMKvUuMjNLt4NcEMdgHA5z38Ck6JXgdLXTMDv7bsRPRWaru",
  "key13": "5mKZsh6P2bj1ACobALituHQMaTvZphztZTVw5yrHXXQw6gZjDptLsjwW2DN2TYZnj6zmKwccSt9aHBFRmNjs3GuT",
  "key14": "3p7HUUQYpBsL6ANMUgvikq3DySNoVMjUQPKQVPQPCj789JsnLHvXw79ptxG7RG4AocSSrHSVc5cwksT8pw8YivFb",
  "key15": "4DaWsQXntFJcFCCMBHuUHEE3X8SfB1kTdZaRYXCyHB1TbYvyhJxKY6Gb1SqNkPZCfDeAZZXcWABYk5cZd3TKKtS4",
  "key16": "4sAReuh4uyrJ6b17exQadH3BiVScjgDKhZsdXe6Ek6hdB6FTtb5wWHaMnnv82zBJKdQakrPQP8As7eetmwrS8my1",
  "key17": "23FBh6EBmZdkGLEAnj9cZxhVQ4Mu1d4EVg5iSLZCAoue6Btg8RUrsyuj17UJMCS1oEj31Qzp5PRn63maXNCMUNwo",
  "key18": "5oaAr84RcGhNvcEvJsGTZjJ3sJSTPrejjkdcnZ7mqBU94uG46P6LaQZP47pu3jUNhJ4x2ie11NEqQeKWFGZNHfet",
  "key19": "5MxKXrBmKuoz7ZJevo4JtcCV3Ewqd5FaruSUM8xPtMtCPjk5AooEKuCS45gqKgJL4d7KxHUTWgCcAZ3ijRWtnEhg",
  "key20": "2CnGe1hYNMjmydmWr1ce1ocm3upPjGufDhSJbEuzJCFFVyuF7xkp4EojbwLHQDa4eeoq76SU4Tuen89yrqUsWemY",
  "key21": "3bS49YuVXw6A2QE7TmpEoEnQssNUNxP2zc3GuyiQg5JupPHAUhqF4LdAvEEvZ7bnLTnbvXYYYqvNYWEfk5R1MpTh",
  "key22": "339vDchATcvqQssNgC2MpvuAu49PbQ3AdNhwwLkhwRfFefcWpNWzTF6esF6DrThyrGf4QgAnSfxSYGmVCJ9zwjFM",
  "key23": "376XbiLPyzT53nJcR8CUM6ZHj5DBDjzN96U7b8Yq6Si6TmpchXD1xfGi6USAkEDCeep9ZDLnrJWQdinz24sevdjC",
  "key24": "4CNERFWQZBiWphLWmRBHrSdMGvubDeXespAqQriA5UvDCArTLtf4ALEsYBi1RPkCd1T7QzfDGG4si7MZzC25yWbA",
  "key25": "5RQa74eejHFni78ZJZAPV18SfmqP1BnAyRkkMe619auDSqd6apATB2i6ocZKqvGuXt99aJ1YBaxj8u6WKyDZFYst"
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
