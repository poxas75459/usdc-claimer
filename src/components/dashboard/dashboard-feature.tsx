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
    "53sSZRZ5xd2tVSbzgaeGcL3YNnhJzFshADyK713czX2L1juVSwAcgPfKrx2V4sCcR3sUuq2YDPWQru3x3apA6VUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WEdmdkBe6DDCMiC1AqT6R53WEwcyv2qPQEgvbKLK9HNouzRwnj2qrTeHTqdsm6qB4LWFt3SoxS2hB5xkEGFaJrE",
  "key1": "jgsxkCdMEVBB2eotrw3dsNQK5eTihKEQMQwjgoTqcncUtLw2a2r7jCSY15GfeGLFC9Yp5j6sVJNX2HwWmuMLc5U",
  "key2": "5ziqvzcj5QPFY52AAmfH3X2Mi9eqEGr1vGxxWEAGhdMD9AJxzhLJ34CnsR1mNzimdpSRQDN3ZkxvHq7rd2TjXx72",
  "key3": "3iUx5dhYip2nh5wgdW8QCApxSGGEpPqGSE3MGT9PgFjvrDwrPoaXf5p4HABMSSWYgiLXpLDbuq5rVGTnEJcS5Gb3",
  "key4": "38Ci7RqCy1kJtUMYoL5rgmey9eZb8utkvV5SN2vrv2F8zCA8oXXWQ92TfTkVeURsSHf9aZtzWqkZ5xQ23D3Jk3mM",
  "key5": "66nRwK3xScWorDCfp4vCYrSMXHUgUN38cyE4P8QNo5nSKCvf9FdWhC8uMciVHYxjGrhA9BvoQyha9V9nqTV9UXEw",
  "key6": "2SCsTzJic61WF2A1RRawxh3cPKwxSRPHtcTkczkQpnLii8iyiz5SMf46u9NzkQFEbDiRDYzxaozR3LHHmtmNbn8P",
  "key7": "5vKdtBsicrtTjQd85TwppZKpFFUj9UDhohn83z8YQEPEtiLfgoQcDjsTzKbzfQfpimhJwU7xfXB9noLztroqKvvD",
  "key8": "2xhbWgEJJGEsxFRypWB8hsqd651Zvu232G1HGiGZb68UEn2YN9pfmt3UmPNZLuwHAugPvuUuLr8evZd1BDXq5vQd",
  "key9": "VxjsD674vw2ykSTrq98H8cY1kCPnUt4QTrdht1TGQ6sax6ZAtPQ1W4C5EPut3fjBnnypMgg63iKFYwhdSBqLT1N",
  "key10": "mFMTVYpSJGqMBnK8nfBVFDkoBFSfYki57uyF4fsz3sDZREjkQM9fd9qmGrWLBGZUAPCW1HXucMZ4xzJxmwz1Rp1",
  "key11": "2h1EQ7vdWxQF1Zh2pSivgiEgykf5QPwdeGVPCpwY9ApvgSm4WtXz2umMNEAVnzfNFbEPZ61gShjDP1Q1KK7nBUYy",
  "key12": "46tcLVRSuiNcxX2G8SWdVGV9GfxqFYQB7cECKZWdT6W3kn22My2uqyBfLzS9GhHot1NDHReiUzMf99otDF2rqwAK",
  "key13": "5UVChXjN2D4C9vk5ghLYf5ZQfDpiYJiRxmhEjJRkyr1if4j9a9uRvPsE25odetpKwRB4z46e1Wzjc5ydTMxMDSym",
  "key14": "2RKtSafccUCG6o9FZcMTRiufz8RYH19oJvjPV3ZvHFs71KbzAaEJt7QyB7Gh33j4o6Mm1HGkHpQMNJbpvG2uXcqr",
  "key15": "2TTDc3NzZQ2vMvSK3Njz74WG4afeXgeAbud67ubMhVzPWEdZC9AksQzX37TsRViarHrQAgEExPHPFKAhd6kQJFLk",
  "key16": "5i1pGWNhPMxEohUkt8tfogV7ovo5mW6WdKS7NWU4eKYJh8vgfNqk5MeRH359WnugCk4g2zGoNVrV3YLtLa8mEnz5",
  "key17": "2bf3USKe2ZqwAq3wddXdSgQDqwCAh4eMpaVPDswiakjkytLsrQvRfkiuujTRnw6iLtZupaVLNKQCPa9W7ab6JkHb",
  "key18": "28hzxEXNXnnoHoUj8fCbJuhNriFWPUjuC9vJUrXDSQJCie9PV3yY6ZCLCW6TD8B58aRtDa5VALYHbGSzkspX2uSb",
  "key19": "5ZyWhRfoJzXjmAypzPGhX9gah1EdVXTmpKkw4Ygt8fxXxxzTrzDREa6wqMLeK5okTdDkEevjLHQzDsLcam5xxZWz",
  "key20": "3cUVTsVMuZSNrDdcvgSDA16FBcAc88rKZvLh2DEBAKU49CKBX8RKAemYQXSzLx2JGnwMDd1sx5PhF53mXofxSsP",
  "key21": "qQGqfZaosVJy4zytgG1s6vSU6FMSCopVMoh6uQWqXdxwdKHirc9vriJV9r94yYEFyZNotj7V6KZbv91KHcjoYHG",
  "key22": "dC1Y7qh8HkkfQbUF6KDmWyF8wxQsExMqiYJ7ZVT8qxHh9nfvCLLL17iMP9Eox6DxFsffZvcaeGE2cfwbvgfna1Z",
  "key23": "27Un4cCcctMnT93JdTEuMGeMtadHG9yNmkwfMashxfJL25pvDeQjULdA7JPhgBZaw1mAmM8cqv2NgJTgRLwNPaok",
  "key24": "4EvLZP4UuHRNQ6m33uZaF2PewumTG1Jt9DyQpeGfuR3ipJagVQFGTmqro1DBZg3qobJqR1VrgLx9Gbfesjc76dRb",
  "key25": "5gLEE4u8S6nBvKuwofvqREGtxZzhZVbEXXtgFj1DBUaUxHiGCmqjJsCmwjmSeMEnLgJb3a3Xc2iG2WQ489tC2JPm",
  "key26": "ASSNU8BJNYbc4VbmDSfTJuPThN9nuycHmZXi7WwxSTKYaAB3DK76ZsSiJQtnFfttxSE7P9iGSvBxMoSbkvHcq7p",
  "key27": "5ZWW8S54gC3RJLcfbEAqpmdy8qXZrUU39rPSH2oL1t8XU1vaL1aEuac2KUxDPi66Zy81pRXYezUHRqPW9PsewPYE",
  "key28": "2u7Q9ydoeshwXcRwXFiwbDQH6ykJK3caLpVh3CQWKy8EJfuiug9JnPwmuhhiYMjLsTqVBnSTAJUM1FhtMBqQUddQ",
  "key29": "2bTvZhHHscnf6BMg5yCYVgMBrAsMPZwbzurfCkVzPME87KfCcAVNx2bsrsag9qAizzapKdDEmanxCENnpV23r2uJ",
  "key30": "5FwPojzqUi1xjwEm6kfn1wLebx4mzt4CrcfKTwKxg2qspY4HTnytKx1MDAeAr3Ywybsv95xsR6QZ9KdjgjyRFb6P",
  "key31": "4vuprC65NJwFc2gkMMA3GpzotiAk39tY9iMB6vdgHJ8PXAxG8EWUhPy7wBV3i6d5PKS8o4LbCqstM6nsnztpjvJt",
  "key32": "3HVeVXgQHTfUDshCKDT62HvksjCM2BR5iqnc6uEiuz3TFbFDpSvGNpvXuTxKdsaZ5pwgkhzUohBi3o2nek9EGoNr",
  "key33": "5HNsMRrD6mJzB9njDL6R1mWK3UHqzZ3oBRciHTBFuzuvjJuJ4wQkLX4EVSeqmgD9Dg6mNJuKKy5VX9Subo5RjCpR",
  "key34": "4iZsFZxpuEuEuHScosYf2qKnGPkC7d2EDAd7MzhyhXcAYXqLq93qnXXHor26udQPymVYPd229DWUdWs5uM24VuCR",
  "key35": "5PGRdgL3mM73kvrhK89FQcVHH5Vw5s8w19NZBdCAcUGCm17n2awtGdKcbKSEAFX7pFwRvHxaNsHfu7zQj2WkeaRX",
  "key36": "5cKne5BjUNh5LLTeknrfFHyFVn9whB6CcbdAzmoYPnrvE2XNAXP8u9VdGJrGRvqLrJQ7nAK4hidDt9f1BtAuLbvd",
  "key37": "3M1NsiEiu1MFt2M2kcgvnWCniTMRRW1JkuWUTLbpemRqC4w9ByDvuemtrPG94QUmfbqbBFsy66t2jJnKxrX43xup",
  "key38": "4ieLsegiVkzXGwAnFEbVpCb1fUnUfS2MirvUdpoNbu7YURL1w7bbTkuGJqBSPWcwLz8AvkeFbDDZ7tfMumEmXBQk",
  "key39": "45cHuJwYZkdFfys2o6ZHVtPBaAchQKu2oEPGRbpssUVZyuroiDLDafEBgiN1zpKamS8nHvxacqsmFiLwuw43BUVz",
  "key40": "5XmnzD8doKG42N7YDnZU47VxRF8gXWrHRSDJQMqUtKz95yLDSUU8jUKy7WLvsy3Gq7N6xxm67q7jYTZJaTqs9qZP",
  "key41": "r3YvFqeAZ88bkwYFH6wqWozQCDnRGL7sx6odBsV4aXL9MdwjwU3GUPfhyEPbzxF8ep5KEgiqcAZ3TfigEMnxymr",
  "key42": "petUNoKcZfCkbdMWN7H47sw2hbvcfVXvifYRZtyk5k3zZEcsGNfEabQSxgDbdkjBy54CAWvBJhTA5eM9ex8Ga4h",
  "key43": "3hq8Ji6v9xJ7GAHDFjgMn29FW2s9rKoMZ9XR1nr6Lna5VP2q6SpqdXBJwzD4YaQRjJECUAGjvTTtPuHZ6Xno82f6",
  "key44": "s61qmD4cmKnKD1TXQ5VRkqcyptZ28LLbC6DNMLLbB1NjBtLB8qfmw2s5xVfi7gbdnU1PgopJJmPk1gk96hNqtVN",
  "key45": "2g6eazTu2rBh6PfUamzvwYpLLXWKjaTwnurezh92V6JynfbrjciBDau6KdokfLdmszieAvkUY7uEsgewkMEFRWvj",
  "key46": "3Mpewy1dxnDgpqnBoFksuvnupXQKLQDpy6AFcVvtpELnXkf1JGMFHffcbkQDKz8NfZDho7hEgx9w6xsbjcNg5kFD",
  "key47": "8VabSbXCFjPUBXiACSigDg4McyqFtMN8XzAoac6ZoyYcxjRYxwrg71V52tph5GCpf8aHdVpUwT5VzheRBEvWSRy"
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
