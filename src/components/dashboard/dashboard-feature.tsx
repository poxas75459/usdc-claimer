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
    "5QeHyuaDCxJhvAVZovJ5otPPuoYsdMYgbxPTVN8t6L8VarqECJKy1owwuPGvWaCj5Jt4XvfxV3xP2tzAYigaxJ7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DUSsnFR1j4gpnZsVf3ymsV3EA51EHx6qTwkpwpwVYHaHfcKnh4KiMqaLBcoYNpKX3rhv92rrMdFD24Vj7Jbk782",
  "key1": "4Yvb7N7Uxu21EgxKgiucGYpMgSwZcb3H998NhaLFHcMvYRiJ5N9rrbdFTNCFvL4ka83A5jbfqpLjUvLMmHwpa1Ww",
  "key2": "gxmCennmgmTCebm6964c2YPTXbtW8tYTho5wSfnWcLquw1DbH7iDWmJp6S4WduDajBjWgFPo4u4k6e2gBxwbhYM",
  "key3": "2JnSgQ2KC25VBqe6nxyVrPzx9TUMvwFDQEoxzCqnK6eZBi45GB8jh9txHSJWKRiANQGNmBfmjEgNoPbx8prjGSg3",
  "key4": "4U3na7rFpPcrSv5SPzg1WFLnZmrs7a6MwEaxfbnr1e2VwvgPbn9KcPNGy5yjCUELfWw9zNMkbVuhj7YpWEVaucnG",
  "key5": "3RZQ7312RQpKBocdoBAx3KieEuCBLEKcqhhmoQi37XVygBiG1Ljgq1Gf8C3wayiAzVcT3kFMxFCVUjxksDqqENDE",
  "key6": "2625jsyZkGzthPRMxTx8nkjczRkYYRnUVDKzi9dEquwa8ni35jVoEJfb5cUD78Gyo9iSfeQqtK86mDmmZgPmxf7Y",
  "key7": "4KZpoWQVT1iy9DkJDdAht9jaf23Da7g9PVuCBTADEQdknSmenk7Vv2jtcgjAse8b3LrwAU5Xg76sFggVAWy3dUKf",
  "key8": "2MxVcfRUJeWGavDGxp3T8ey8XxzUUkZKmZedco94HhdD69qswYwtFrUZHiFttWXsVbbRU7ZqiBHqhtQ16M6H5gjT",
  "key9": "PCuzkonxUD6RLNtRi4b4bpFJSoXMfMNs7QQx64W8AYGrckkkBCW6rxL4octohdyfifaqjFN7KVHzZ4heHumRn6B",
  "key10": "3wg5rPkZK76qa6cmwgaJzncvQMFExGoY1aiiipRohkHHjfyGTGcGJthfQG1YsyotDtnbyPYGmz2ABpPjUqgquYXv",
  "key11": "tMsagYUPw1AYFmXpgpkrSByVpCpK9SWjqdrwWtegSCE5uM68hn3ZtNBRCAFiqQamMWWJUfxZKDEBAbZ71nfkysD",
  "key12": "5WDY33pDu7Kef68ubGnq1sYYxLFFNQ9nJauirrNxBYe6nbrozozxmtNWUUpRKEykb8mYX7s5UJg1p3r9pTMuC4uG",
  "key13": "CZmfkJqo6dczhhVa3WcxyYAAfr2n9nY4ZTU62oc6zQKk2KZZVn87kSuWQMzoiG2D9KK2GRUpNm3Pmg9AggupwvD",
  "key14": "5xbjnQzUzX3zLUW91BbGAqMvB71Jm8gXjJH4GoRsE54NGVFkT1uP6sofoFRyPUWu5NnHwepf42kcniL9a11x2NCA",
  "key15": "4C2NeBYHmL4huRA1ihgXhkD2sFm1UwoF6Yc7CnfzN2G3GD4tC9zdnwPUK8WETojeBD21LieTQtPP2xuFsrgNsHgU",
  "key16": "3SieTpY6AVqcSoQ4qDe6DT48JGfQxNxtJ8q6mUi16XYqiGBDgdyeQ1PPdtfk8GaaAokUmT7enVUu29BqnPWcd3wy",
  "key17": "2iaCbyEDeDPEKZvA931o8cux8tC3qNVt6UVX7pgjVwypp4bUMHBeywCysoQz43LDbrBuGb8gmLWG6MycCqKPvBbK",
  "key18": "56TDhxvgHCL5vi7ohPKJpK6hu2nsoTyy4YN1iRTopHM5XmW38AVANFQDHxkfar4LyFAodv3YTvvMCRPGqx1Gvv8q",
  "key19": "3Dm4B7gzjNotqZo1tNaJ6ZX6yQ1jQrMMSomEXKGNBxhL4iTy6EQNTuwGVHpYzzdyboUraB9h8qaBM61HYKRpnatH",
  "key20": "ZWDPZ3KiRyjcTJoL4awJT25zHCSTizfkmDC1cnmvytiUdq7hbfUHbZPTAyhXMDwEjPREiMcyyMV13sFbfd95hpn",
  "key21": "3m87b4MDgjUANyXzfY1wve54F8PEfE4JbXjS3JtCdXGKTZ4Zbm6TftQX6bVToo7tARiSsHhavGRDG8oLZF6PCBx3",
  "key22": "QLzbsGUu9CqsaJzmvJPcAMyYuWNJNjjMFmSVXmfPNnrhMseaf7nF6fL14UzELMpCk3SZA2wrZ4XYkijRBioQDjf",
  "key23": "4tjyPyxpJvFBw78BtbxiPeJqQn15VPQZMTigLKtCRh2GN55V3QG17n5v3ZioqQVx6KkufJGRV35JacheBpwpvvqJ",
  "key24": "4MuJsSjwrv6TDXdrmNk2XmTXwQZxRFqd4Gn5smPXpuTJHKve9KMK8rZQgYvgazRg8t2PLZKDHFqPQ5VmHyuc5NVt",
  "key25": "2MdUvo4iabSXGzYH729HPP1rykMTz8BZ6YV9knee4qKCgp3Hp1R5oC3qYP9uUxxHWPYHJnop7vUUNkZH3X4MLM4P",
  "key26": "ZYXTSd8Rxds9vH1yjYC1PeTgkCc5dPoPrtjB8nMpdE4RKqckhKYQjrm6sd4wo47HuepUz9GRtPA2iUQBNaBhrJd",
  "key27": "2iXrNapWrGpCgwm5G4hEHdVeEJyVgVX4145zBMqwc7RMJPPRZ2VwDczttDtXpyRVtpKAv17zPojAd2ezRwiNYRkV"
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
