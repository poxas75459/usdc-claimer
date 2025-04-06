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
    "4GZ6VGGRgquASkD8BoUezpgpMmi9XniFnehBEM9P2M5bFPjjZchqUYwVoaXfuc1qLzPoT4oLRJHBfD5WtzRLaMqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cuFdxyocpqyvgcqGTu3XH3m2JVhBSVpTVDJY9jByD2MqE2i26ENbvddRuYw484cKLmmaoEaRc8XstxctrQfvLan",
  "key1": "3NR6pHtsX1WRwBHfGVSzH7FX29xw1KoRijJfbHnp1cnbZKuznjdLuCR7YF2hzzZncv1mctHsjkdxTKaHWm31zvSR",
  "key2": "4MRoxT8pqyfmTfvTkrwDR4vfFEBHsFzg6R9bkTTjFhqEukjsduhehjsRzuamb3LVxMRBerRLqdpQLyiKDkG1ugoy",
  "key3": "4vRjsHgdze8aUEzJWj5VUGDAP31WGTPo3ZPvFQkx1un6UPk9jLVMV9QuJivYTnFmUFQj6Jjagt6VvUb9vDtmkeL9",
  "key4": "265kKu6GhUXM6y4GaHWPj8Jp3w9wnQjv1oKUAsjtds4DiKZPf8aKUopmu7kicuqa9rwXZUaJpa5y9X9Hzv8c9zsD",
  "key5": "3NtspCUrt9joDBfaGgoCSu6UV6cBZBTW6QCrnGwUkwimd1qHb9tfioRbFLW1JDeHLwMPdLV1Mp24s7j2veHLozR",
  "key6": "4kB23GeUuWkCfTkALcfF9wbpwTV59P5MYWPn89Hz8WWtREMumNn2oqPazECygAWZkRoRKWUmHL3FCUetGWGfQxkX",
  "key7": "5Fsn1eLsroCoMrY8FcsuHxoTrXRMTp1npdmKtCdCSziqiQzzyaanDb154fmFLHY3NSuNU2xXYZRmfkaRpdaPri2k",
  "key8": "27zqGMNhJjsuBU4TS3mjJyzY6TBBWAY8L72fQbDchRZLsNJMhdgfngiZn8U9YmHAjFwXxHEFxJjDNV5g7H26NjAz",
  "key9": "569fHznsduiX6w6myrTrGAQiozJu3jKgNTyhJoAJADRaPu8ZtuKUHcrKa6X1QjjKXSMyrvYxmXFFe8s4s1nh7mFw",
  "key10": "5V2o3Cp4ihF3isAJMvEsXntYx83Ys9an3T3wYdtsUcWWQwuQiPccXMj6kFWxQ3yLj2RvWnHyXSgU5vfAwzCNAiyF",
  "key11": "gZykvFrK43J9noRi2P6kMMfD4WfcSnwF7S55tbgpyBqEpJGUejncYdbptPWxVVWEtF9zzUd5bW2iccJCkkVgtV5",
  "key12": "RfgJRUCxiSt1Mky2kR2tSiJ8Mv6g7L8t1Qg5EKGb3TdqnYm8Z3bNKxT48YJLkTHvY6fBdPe22M16msGiyBCQppb",
  "key13": "42yj6TR7hmqtBkQsErvujQFp47mKT1MB4Rkpc8k9hZWaZFp8DhVvre8RQh6bpLNhtPTRtDSVToeNeaqu4eFzxjxY",
  "key14": "2ShuDMiavns1zgoZXFa2hxRCYgBLDYRS2MNsbPFb8NTfEAizpFeEHGn3T74CdK3NiQcGgiMkwe1rDnppWg15QanH",
  "key15": "4mzPJaS9FmmCgToaVugdgaRveRRpEe8aieryH1vyovPy7kRFeAZteA9ky9ucq4CcGeSy9qR6ptxRRQDPZJz2g7B5",
  "key16": "2jwNnXSMW49gH3mMcQXov6vdzLgJr38uzmx8cmpy4n9gXihHPpTh4BxCEwJ5js3Eta76zM56f533D33wC9FhNc4i",
  "key17": "4DQA9zm83Qr1Qwk24kyyQDfXUoGqgkfdkX4JuSHRwhq8k3U8xUSxhSLxGaH7dQeBXevPdGurrNT7rHY11BY1nYw",
  "key18": "4GPiBnU1ZmMuaMf4VDsWVq1oyrTP7m1xDWi2mpGrdRpdsFXUUxFhoz3DiMoe7gh7rH7TNYfYrjcozF2Q7pCsh2xM",
  "key19": "4WuHMvshuJrvGfuaTNV1nomrSZC2nc3oRrmCxbCYwT5DAqgv1S8sWwaytZyuwjpg81pox8vFSY6AeReB8sMMZ2xJ",
  "key20": "2MipM7LNu7xwKbWDbShUGx7snerQU6aqq37evRJ45C7Hm5XbbzGVkEw3YiXHvWyBTs534QYzbd5qrWG1seJ2DX7i",
  "key21": "2Nm9owBXJyxeGJd96xuY8W4rcqz334ZZVNTxhKRPSue6jutx8NsVcLhrjisuofV73TGDsCytBYuq839yv82y5sKW",
  "key22": "5fSBpiHtof2xVwukuMBhcdMdz7f2wLcNZg7Fhwai6otm65gTbsNwpyuLQhxq1uBqfb4XckbBYWyxJDWBuN3kxNeU",
  "key23": "4vFXckWT9ewFZ324ygiKSL2syCNAerQ1Pt2UWvHfWLYZ3Pe1FWt7Q8dbL7VoV9bMFdEQXaZWMfYgaY3a6DgVLdns",
  "key24": "24zg4CXAPAXvj5XsidZ4Jo3XR8Pm9wBwUt9UzCzJJfi9urbYJbseKcshbsTvPF5PK32BydwdVD2qYGSjKhyDur1t",
  "key25": "4CmiYKvLPMub6DdK4BtuYVfz7jyTAYhDcdb8cGpKPjYHTTAqMbYzRmmqEK5eE6bKSNhLBWEzZk1rDU4DaZBhu2wN",
  "key26": "4ZGTm2kzvapLYNVdcHmK3j9iZZBWJLFaQWpJgXbT4wBM7VzRCa1ZzmZdmKjhPUXJTJzUrss7JTnqw4Uw2wbc6Rqq",
  "key27": "5a4z8oHxrbzxhShp5e3H2kKPhYzTTKQWaikayiUWDBoryhPY1X9fWCMkknp1jgM9MWgTj8n5Ft1kGRDDp85vaeAH",
  "key28": "3EWkiy9bcPkGRFZ8duUfMbqjPUFeZUU7ga48E3uczm7dKXbqyR45QJVytgjmn6HER9zt8KVmmkfXhwD3TLnibC3S",
  "key29": "3miQFYRVWq4XoSLB1V4TEvd6PBrRoG26ngrE1LuUkM13MRVXtW1sytCiPbWwAxVMrTXF5W7heaAZosKW3qW3YeYR",
  "key30": "2YALuLpzefjKGQ8hwRPxQKHxC7YWbe2VyAgNcAMC72mqPSyBYc315DDHtct8jfz5NJYigywiqjvceY4kc16dPasW",
  "key31": "DJkNiKMJE217FYEDhRBH6Zggf21vjtPvJqBG8w7E67MeDDgRi2dfiJGbP6dHxvbQnnrGBLTCa4iWXRFjQrztSxV",
  "key32": "5W1xYLNyKoUZXazC5wXFNHUr3LL4v5Qg5M4Pgq6nWnSNwPAsdRPm6GX3m3VYk7o465mNqU7tgJrdx2ZekmvavuHm",
  "key33": "2Df6o8GYx7tVBMgwrCRxNezRKK8FZSfCru3eYmox9qjbV1Naqy5Hj6xQg5J4BhZM4NZfd1pUWx2dumS8JkCUPMzg"
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
