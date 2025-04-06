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
    "358zdvi3k9ehZM69uMJytGSwjZCWkJfKi9W4kVikMSh7w2ipsq2pDaNNKA3TCiDiQmGrBJ3M7tK6kpYgGekrMs4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ya479dsWZQNMiBEqVagjx3cYGX3bbeQWBHGPs5UKpjC6WpvVEVCvHcH3R6tTPbE68wTQuPH1XoHzcgtTPdmb2JP",
  "key1": "5r7GL2rziarT3qBZtsfvzMWNxqJA2958BFLVx7hCe2m2RSTGBWE5cewaeH72gGjJ2PEr9MqkYpPRka7TA4oEYDSX",
  "key2": "3tPYRsTx8tSXfHEQ21VHWGXDXKHip3y14MeaDCBwcFFQXho4edowh5mjUJi1yMdyG4fBYAQXx3VMc1dHQTD7GRPU",
  "key3": "3uTnwGbWQsBLXRHHVhZEj4Q48LCytrfwhDyF7U4N9511tjFMgQZfsRYBpKaUkqqBc4QG6YfVwxuiTJkDovubbRzE",
  "key4": "5KTUdQhK5qiHNjq5ykzoMQasN62x8vWn22g3cyycQFoa3y1VACykd3AQou6WJq2yFwgzo3y4R2ZwZqGeWBnLs9ZS",
  "key5": "2fga4m4bAJXTsiFJHuzcv6CwgjxbdV5QM36JAwg7siwrhopLd7PMxNDUyAJbUC5bAB68jBN776ei8hf1u61Vce3H",
  "key6": "2aMoaqzy6vvqBm7GriaaG4BHvmcfmkMWoANMWGkMDJRWLAF9LdWx7eYHKsehRUn2B9vpwJqtBSdAzBNMje84Etgh",
  "key7": "2U2eGYpHspXQZaxb3caji2SwKUmN8ZZBL7WnRRH5tXamu2uF1K2i2ndnqmcwde4Tu4rPAHVvBPN6LxVa7nTa5ixM",
  "key8": "5ebGqqqq1cpU6G4C6iYbk6APReWyBYPwBTd5M8Q4VZKn67HgdrPnPSyLKq9Z7sBdjDzdBDGAXRtrMyfTHQFRd7y8",
  "key9": "4b4phZy5UXQsmnzpsNnc3i41r4Ts5q9N2bCVGFVkF3au6HyPY3oqFEYiUkuAUeQ57tsNdd54y7Z7FvkGsU3JrxX3",
  "key10": "29dYi5UbuXzwwn5jwQLNxzwBi7GMJCH79dZ7DcGFJtdSs2Safcx3ZUBdK7UiLtxfUyd8E2W5MSByoFMFs2kk8bZB",
  "key11": "5KGsHvboYbpK4VVf5HKcpeTFL6MJTd8rBv2x6AZcV5GBz96yy6duYZxGGPN4uWCebf7FcwBVSrCW5CuVdqooKCEG",
  "key12": "3KYDHy33bmFZCLMkS3YRu79thcqFEb2ZaRohDcF3AdwyWtkiZNX2pS2sNpF8CKWtgq4NGhDCoUH6o9tmmgLge959",
  "key13": "jXPSCptmpgcF1z2i8psSkW9dD47xyucJeVr3EjdKuUffQPkS3j8jtHdpgEeoy8j5sTg368anWhJTeYRfXdiVnu7",
  "key14": "2Z15q6UszsAyRzWMxMeqnLHMxBn5A7j9yu9M5J6oAVNsDMu2uU7eAPsxpJe5GLiAtqTRVJwrD74J3ZoMu1br7KNd",
  "key15": "4KJ4PxfKAuJ1tGqPeAHQmuAwP9YH9QACXf2fHPtsGukZZ5Sz6TErCkHMmGCWPGhpWSK4AadcqwhS4X9YCymhMTDb",
  "key16": "5wmBGuXvAnQXRNaa1zekP5a1au66TXXN1j4ngfhFgXRvSbkdumDDeXRhBLZnpnaFUwhhgQXZFgTRUoqiTCmQyvjA",
  "key17": "4Q1R4a5VqYNMcig1PAfCSg2ehYjwVD9uL8kUQWSUzPdyHfmoghot1xkWgRDKZrZTjMa93QU7s347os1777zPxbrR",
  "key18": "3dR1V94jS3aw5Cvm34SXR6PTPumF5PY9vH1ftqwxtKFP1KYgkpiXNQ8Zd84TLPUJNbEn1SUwfaji2zV3FPTnVcfZ",
  "key19": "2Z5eoBdDXXiUcCPSkowd36MWpXWvvTSjAbkhRBhmso8zHXZdMwRbXtYaefcHDX1Y6RUWUNJ4S2GN8Lz9hnP22XjH",
  "key20": "4pZW2WKvm4WP1FxDg7FR8EbsqfmKmfDAKmpo5tCkiGyJE7KDDvyh5671NAZ2jQjiT68fwEyuFq25mP6gvxw882Ma",
  "key21": "2Ebo7ZmTEM7V2dbfPuB6nYRxzcEVMf9fqEG3uCkgLSFZYaDYaNaaXW6bEfe1fSY7nRDyb91ykNeKnT6kspFAZ3VF",
  "key22": "dCboRkpZQXyTuBbi4CY1P8n8anFBFiYUwooeAy3MQcqjCHQk2FimawavqoCeezeBYMo1XCfpKvz2uxXzCWRmgD9",
  "key23": "3XSxoiPc4bpgTs2HAmEy4SDntpZ1RPPge1ymu8YULTmHwy3TZi9zzMQzi6SixwYRpo28gSa38SX4YpUT659DF3rL",
  "key24": "31XL2weLmKTDpGhD7mHBpLvysKzscze3AunUZHMNi99EF9n2cKipm2A5CWjqseFChM82aaMkQFyEv2LC6km5K1uc",
  "key25": "5vD3tMUyQmmo5BVJXSUBVJCqaDf2F3d4aQu7oPL6jLVzHzkjpGrG22PWhzR713WmvEd1PaGac5Vmg6wb1vmMaumb",
  "key26": "34mThMaio66HRQyfMeSaea4CJh1NBuszpaDuEQiVcqaWPHMMGsSAhSSJVxchzCyoCjmtnnQ3cMhP8dYk3bQSHL8e"
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
