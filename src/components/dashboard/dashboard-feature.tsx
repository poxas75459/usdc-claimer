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
    "3yW79zMthrFg44wUTcRSi5nbtYDcfFuWdGptdvZ9PuVCvqhLJJ8M1vH5nWPwUADyYurRNXii8RX61VueUX6X4RWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JoLjh4xCdKE3uEDtqDxEPXVXiwRcS3S3Kr9Gmh3LznXaSFRHdhrf2KNW5VK5cm373yyhX2REWjFw8ZEsKLue4Qn",
  "key1": "4bwzvXiS5E5xn4KUQHNve3FLvQqz9LFRsNztAcA7vsmkPUfFpFroN4hDocsVPQPeQmSGhG7UEb44vn3RxCWDE5Te",
  "key2": "eVB3b7WdsKBbrLvXxn48GtS5StzMR9hqgQMLW6weYLyvDe51aZSSMwzydpNis4vYxPYjiP4aGznSxAHaUXJXVJV",
  "key3": "5qSNnj2PyAFKUZv6ZrPD3ey4oFgNnmYtZJB2CZ3RP9Xrbhe9StJkawUoJ6ztdiAKEgymdD23CJqDjun2CoMRZDPZ",
  "key4": "5dBAFDLCCN4P4Uv8cQiFyMRzu9GAQYGzwLs7GiKoqyCfPzVmyEPDg7xncxdm377m7cjzW3wgg1pxFHqGvMHs54gh",
  "key5": "2GA8rhvXJe2kzXVRRQx27hHFe2sn8bqhnyBdyzwARE5J56dHB1rp6hMLsMH8JiM1oGTipKDN5fYVfVh84Vd1qxA6",
  "key6": "4JhaSYFzb7u8wkEoin9SheMidT1EkdaFR4DEm6aZKkwawUtKo7dGfrQE4Hxqi9TZGgiVK8WBpc3mw1mxmAkexoKD",
  "key7": "4nfc2VAm8udAyVyhpKtMAcZom3tqBKbJUjFe6L5cWpz9nGapA5yGg57WC9V3NzmNFQ32Pmutgn9crcgAv34NLjHh",
  "key8": "34eZHWLKKT1nRGDdmXf2qSebPt8f9g53BW3kbGqHLWJUvaAaZXhAqm3FYvKKMwiTvS9moH5jPc8FJWcux4zpb62B",
  "key9": "121PMUhMJ1cPtR7bS8Fx1VYerQ2jyKUZiywiWAEJfetzogExiFvbqr5zueM6BDfcL2HEvKmnzAdgnpZLuvk6z8bM",
  "key10": "SaFLdiYuJrrfxdJEtLfjbFHHYhEPVSKDgbs9GKMqpLF85x5r7ZKzmWHVvBw5AmZFck2zDbYSHykKLMyXMBKLmc8",
  "key11": "3f3d731H2VrUZswhUCvDZ2D64y9W4dmVWUZQgrEn44C8uC54ZB8i77MdmzAwd1atQD7XjhkW7f3urzgktkzMhL5N",
  "key12": "kWepjAn6HQNrJGCdRfgHNsRqsPbLU5fJje2jKy7yLqD4WZCXcksYk78UZ1eU1spp1icrPkzW31iLjS1bekyrS9v",
  "key13": "vjNESg9W4HXNa9uP6DiF6kFdEcdSxx6rexw9JBBcGiqkjwj2GszbMZtWFR4pQwZjUQZydFvYmF7m1ScLXD3oeLx",
  "key14": "5qU5i9gxobzg4SAH2x6DXe4ZU76BFtpDdxd4kJBvLqzSDRzucvP2s99hH31Kz1WcFzuHUYoxt9zchSzTGop8Kz1P",
  "key15": "5TQpaX4ypwsjRX7HfQrVWFN6KLsWvYJmsGkvzTfwzQXL7Z8thFRehpUDigpNBCJ7LzhodRzc1ypg4sZHYwguYV9W",
  "key16": "6cM6Jg2j1Sb6DYeYfTCvWDABkaqWgahWmUY7K3aBFmT6gXBW7dr8U9bbcsJJj6tugT7s2JCAA5qutDywX2aDJoJ",
  "key17": "3g2f9B8zhp461mm5CEnng7ic3S7CWmRXZC4VoQkfnzd48xX6ZCLEGm8uGj6xf5fQbwyPMnZqMsaR91ehWWWNv1ga",
  "key18": "5Y198Mk4nKzNBgo5ecBbUPvPfpURnUrax2JgQUU8LFMWeX4Dbhsi5hhVwMBoZWtmdti5WgX7guCSg1Nq3prWuK1x",
  "key19": "4FRX685xfjS3mRKLhLZWQessjakL4UXfRixffFvufHAard21JHw1FWixHEKhp4pfdcy7qZF6k7hTJuabi2qdDjU2",
  "key20": "37uDL2R4pRNGNprP8s5ySomdA91Nu32Hrn49LBqvUo7YwXxwtt3wjhpKyWsqVKd8RKBX7frRKxK3F2kWvJ9qrh7K",
  "key21": "5G4w6ZFqs8PFLtgAhkW3CoUHg86q6gMjBRktHWFeYMKNEze9fdM98H8JK3mWZBFGHs1XnbFjocVxomSGNT5BArXM",
  "key22": "2iQMU1dkAFwdpnEk9aA6ahmWUMk8kRPeFCMsmQKwhMjD2Kn1PeyZS1T1jHtZ41RrXvb4rF4uFPedBgCSjP2wvs6w",
  "key23": "5hqYmMUniYsiyx6QPt1iQdkiydyzXNTxiafuWZveJ9BMbNp2mQ4KxQLYLCaR5BFmsfxcSMeRewdq652eoFMf1ssk",
  "key24": "5t1Yd1tUEgtkGuYm2cSDwr9dxgongDwnydEHmms2j6CQw8gi8fTVBJZx26GAyHZvzQT4KyG2iqRtbz2jdbMLkobo",
  "key25": "mbT8kCuxMsvheGumYm2vRdXhj8DttZzc1G4m1Hf48Kprido7yvv2bUgbnbepPKrr2F6sAtMG8o28oz6uL7kKNKG",
  "key26": "5bJekFuUcHgYUafDxYak72LH81hoqfjpU1j59viasooYpWk96ewod7M71SAspZspP1tdewh4WeCByrj3DRFUD2iC",
  "key27": "zhidA9iASmxzgmeyyj8XcmqGnhzkHmFGchu1szKYskLziUztziNxbPHMJNAsgioKnqHWiQBxKzkAkm2VhnrTz72",
  "key28": "44RgSt8ZidDCRfRWBUoa8uydiwpVX5TsyF6zXaBbbmdJD4V3z2ELeterR1XXuQttmA6DfsgdXyKihzbyTKpv1X26",
  "key29": "4SJ7GYBdVnQika2n4rY26LwrtWyYUV95g584pkHsApctiBRppVR5fy9xtr6TQFgA9AccZhkvngQAnnjKkhXrwNpD",
  "key30": "2sMLDLT6LVcjGRKiw8YVzmpvWzqZ2DwyvMxNGvjirPzT77Xj3aNpuxf2r8x63KJhYrj3ATTF8ge6eFExwTdQEJ6e",
  "key31": "4FeXfhDMGEGvzP6xQvKCrYy8UNR15FgDSQLEdUiTNmBytbJwswovvMtpaQk2JELgawNtrj1fqBbGbmuQAgrt8dML",
  "key32": "33dnLAjesFgZFQCVa4ojvRRjmXBvqTxSuSMBiK8jt1Ehb1dNDq7PdDDR2pQW9KvKcACwC5U57VgvT7VHkk3oFNBA",
  "key33": "4cKpCNxGr1zmfgCV82wDLY4oozW5kRig5AMhLVWtPsgitFci451pzEKEidXcCHYXaZQvSbTczV1GEnBjvo7HKBtP",
  "key34": "35WRo2K8ht4AyxtXSE1gMy2NnXSYR97cG1z2idbTKP12tKUseZGvGAgc83nnVDyA6sMn9rCYHjEjaiM6qyaiCc1o",
  "key35": "4jEJSaZQfZUvNr2tbjSs3H7BfWfwqoeX79tRMHUpViwmfGYz2TLC6qoJTN5Yh1oPra9WMbyVemPTLCub5CWNAwhh",
  "key36": "4qJWcW9grNeAVKeqoF5Amog2nc76wcQ9HaKPjuPnjtj3wG3fWyKrAVfY3pk63c5wVx9PcpfpnQAfyDWLGRN8MQet",
  "key37": "4kNZZetXwQQGyT2etSnud5p3HPnq2G7GQJt5ZHurY91uhAxx4fR2w78dPKf5xV4xWWegRxgtxNm3QgqcAtTCMLDt",
  "key38": "2k22eNs38yJo3sFzkgc2phVCRvhcYZBxEscdGzRmCJrG8gPY7uouwwVYVFubukhehG6gfo5NH8fwthRD73HAT6wC",
  "key39": "2Rx8ZvP1UqQNBSuUEmyZVumk4o1nsiyqDnd95y7ZR7XeZSi582XxHhwU9q2qDGhA2agszGBnzQjZv2gzdLNfwFUh",
  "key40": "4aTfFXuvXbR8tigStxNdEfk4oijrRUkTRrr1FGpS9K7pkK9qzqzgPpXGZGS1mFMSapxUP6ZvaWwvCQFcJSwMAfx4",
  "key41": "58PxfkGB6qSvUqDxLLV6vXRDpqgqpvwnRrx9x1PsJbLNEQtCGNnNkgoe7SA58W2vtzbZDNuJWCCbWMbh5wUDbztr",
  "key42": "beS1fEqtUtHeuNs6gJMohC6eyoQqBytMyqjdk9L6kxCX3LWVsJ6dp2ajMXyFypuBUEcyu7TvVJmGWyXSXe6Rz5e",
  "key43": "2soxE4GJtFwhyoGRW8yjRX1WrFUxLw53XwumfrJmh2e16wtbhMAb4ihjBUn6uYNav3CXS2cirw4iBTewRzU9SU5S",
  "key44": "32hVGEj5jgeu1gJhn6KatUoVG1kBmHB6cxUdMckqhCgkfWAhVUWJ3JcXFm6DkozvryqXcrN8e56tFsXebfua7ecX",
  "key45": "4G1YxkTVQnnybyoNtyBT7sQRAqf8L4Hv2SrNF2KErEtPVPmrmJT3KvThtNemCpn262CpVEz8J6Umo8GtVWw17Xax",
  "key46": "4CRLNb58HXn3cMPhtBKYbwN1hYtA38874EvjkoLFzhwQ8n8w2k5sM54vDXsvSxfGYdnnFfCk7xduoFMqjD8QqX1g"
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
