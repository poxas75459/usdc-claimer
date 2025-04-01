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
    "638JJKpBoV1XBWWs77KJcwwotf63H6NugAFux4T83jAcgR44ZKraXRPUVbfGbLPnkEhmRo381KMtSBToeriRHdCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BJjBFPu2noQBb3qcbZTpTfmZum4rao2tT9ZtpgtXvsydim3FkMAjzPUv37hD2NDAaLtD3enh6qRcCP1LTam2Q4E",
  "key1": "2xVTFJwrMhz4pa4fGEFGKbSfEYA56Emf77wRRSDJVU8aRuSzH6cYbZZqhh5kJTkGxTZKGEJ7N3v8XXkkazTZBZrh",
  "key2": "22aKrJnLwsMdAN3HV6Kckv2ECQWUimbkWXwhYMDUtQfPMfP4ZHkMei6J97NjGaQ988sMZEziM1m5hFY4QWDh2ZpM",
  "key3": "2LW7UPUjPkoiQ2PVBUZb1uTK9UvpYxneQZ1PBUKwQBGmnq4qd4QHHHvCpX5ZBenSLe4HBamB5KhmkfhsRyDwuiFT",
  "key4": "4tBdbwVhmNJJxiLnbULVTDRC8spddXonMzXR2e2xJWQTbsPQm17E2dVqav4mJFr7Zi5VDdawbDGPdgCwvQdvx4mX",
  "key5": "3Jza8j1dRGuFzKcS1ThGhUXv2U8nigcNoMnMKSviN7c9oEdmZk7zvnAS63uMdtsZoqFhVEogAZWeoyYia4rAkbRm",
  "key6": "3A8Fe4kME5qGpNBUYmjXN3QcvfXNdoBq1sy3WpS9FgXGfkUZPb41FSwSPRZgsg1PuyG4CYBwHZ5CJVCa9W5yGqow",
  "key7": "3ymhbiGQztQ7Y9EP3j2ZwN1CZJvwqt81c4dMRxiHcTST3hdZMvhpRWCRVc5CXvUNKMgG7128h9HJMCEoLyYNcJrq",
  "key8": "4RP5fDytiYc6JD1hT7ZnAfqvGNaTckSEo4M5tLLkgn2co4ufFohb5kAEUvasBnHZE1JmbTZaXppTJDYqzBboXFme",
  "key9": "5m9zAuqqYC8S24aBZkur5fTVeef9gjffLUxJM7WoLNwr7HykqGNXgFGeUiCCSsDi46R8sx6Rjs8c1Siwz1TAxnTP",
  "key10": "3eMT6yHWMZ8BW6UDoFDPiGqpXvnfgN3m6VN8vDzwTtroiWMcjyZqH8NxYh9MfimPfVbQAaUMsajoD4anoVpk6AtU",
  "key11": "4E7HSbfdQroHbkh8CMjFJoAoVFrvY6pQSp5JpvsxbaU52DBeaWaRXeZa66tEGZk3eroHhzqCod7QDjaaMovcacxR",
  "key12": "5V82P4aU5YhzWZcTH7heYQEQLYzGiDnURFxEwQ1m61fsNDip5kVJbvXgrvsMqGBKedMzXhPwj4AtRyZQLJrV4ad7",
  "key13": "5CxQ97RdknVChPKQKG7GLeXKboixCf7EAeR7MTxsz36B9c5xdADCh1bfKatX2WRuyx55KinBG9WSSAozknVTkwtm",
  "key14": "4WNhUiX9DooCJr7gnnZBFbpT4VSxnzygYaoBr3oFzPmySroxZVJLoAFBiSe1gfJc71t94g5veumoB7wKNC93AKkN",
  "key15": "3npwii161a2jq5SjAgLUFHuKSaBT5HzEeQ6oGNrNAoYryQtL3i31BW9hEtqWhe8k1Xj6AcYdmpJuCXu5w6xh8dD1",
  "key16": "3Uku6CmDHCe8meQQDQKZLoMVJrYVxFxCGJDtEfFQEsiyLpVRgQPQpWxAiz14LXJVaptviZqwsruD7Ux9ScB495N",
  "key17": "4xU45251mJgvGSatQ4GTLR7LNPqcTScJ1qefMF5eJzXG9Vu7vSatfbikmccqs2tHgp6xn6HDsfbFDdjJ21LQcQLd",
  "key18": "cBYXufyFwH6YWWYaxh97dLjDX8eJzvBr2w2zS68DWNQuj99VSAbuiNVH5NSutKufPXfKEbNtHsrFDEyQFiQyz22",
  "key19": "2LXdxJmMbBzS7j5KrBPDF2LVG3SXKaLH8BxJH8ZDePaXcJHHvHVLuQHqP4CWMDeasRgK7yDA91i42fXEywExPfUU",
  "key20": "43T52acd9VcUpz9677cwJmz1MZyPFhjdvHr7P51rYAvyjM6eYp6jF3VXPVhLKNdG4aA1SWmWfuiHaHuELGyxDpm",
  "key21": "2ywDeRVUoPo15r1hh12X5BXkXWgFsjDsbDrm4MwqWLFyEP1HMdpSG6c12hc62N8eErD1hbyiASrEL1CrDHWq9zFj",
  "key22": "V35NdhJKG9Nn7Ch967z1QGy7xqBWa5CMH4jYdxcTrnrz7ej4iUNFF9qCJa6vuVN5fD7AENZP2s9WdPcHpFMDpsF",
  "key23": "LTssR83WBGPJHjJU4H7mQvqqvDwiCTL4QtG85bRjBZEGxdod9v6gX8R4xDqAM5rbb8ThDCvwk4gnZiwkcDB97rG",
  "key24": "5xnURu9doVMxecZ1mh6wrUFef5jTTfdQFeDnr1RtC5t879R8PxSYpB4216Kab5Q3HVFdRZfn6oir25cqBA3i8Ubs",
  "key25": "WNNVh6b1Y5oYg4UyweXVN59bmDgFkzwvT3jMPHfVH4NBf8pWaMuzbuCgqPRwtXTcm3BvM6z5EFcpqSAExPStJF5",
  "key26": "4V6zQxGBiccJ9a5ZBKfBuZMZ1xXSbc1DZFoXNV148Q9B6TmQkaLNYChAZyxB8ZxHgRVH6jgTqYoyDNLEBYcyh91D",
  "key27": "sPkLYPEvZ3fw1s3T5rAMLaCgMs1ByxTDxGbDXKPxo2f5XKoikNRunaFAyP722bRqqSUtduQjnAn1FEcPbq3mX2Y",
  "key28": "3mJtB7zbF9uHXqK7WACE1datJE1Sy8FF9ivtTtNoVEWBEDXBbfhRA1r4rjtsymLEqrQXHcSLKhR8zQqqUGtrKdcF",
  "key29": "3NMvscBwsQirdb8AscUhAekeX7LkZk1QTQgx8XmHeRBNKz2MhakAiE9s7KTWJbX1xTVtzoCgfaCmRzxXYucW57oE",
  "key30": "jxH46cUJRb395wirZ6tDdJbbf8YCeV8QZFrQqcdhmM3Bpbr6bKDz3xadtNyX9grz3wSrhc3QWughgTSoi1Eyk4c",
  "key31": "65J5MNWTjVfePw8mRCWodTeGsFUGpowNi41HnVP5ShYebzyy1ti8DQY5A91Nr2a7gE68dSar5GbohrLLJe56K8vg",
  "key32": "4owRpHHTWUQdjEQtkiNsE8hhfC6MZKjZ9vVZM3TWsyoydTzyTgXknHFDPASiFapxoE1HTDsRLdEq5PtkoTgenqvP",
  "key33": "3DJE9pdLZ68ereKEYowBDT9ru1QhjmJiqMZ4h6xXaU9WtUthATkCEeErT3heKTa4anwZNQsJwopi5bDeKxSrjGso",
  "key34": "3PvDQ95U2pDzxbYTqibZYvZVyTU7TrmQnZxp8JRKQd2npToG2eAGNV5FNkk7UkM4apfQktdwpVz9hPozJ3yfWouL",
  "key35": "3oLthXR7KSrxyLQ4PmHF5J2sAQ9giFpNmDebbKwbhpWEnCQDzJDdTeerArJKwQQEunP1fsbTRJhSCqf9P54pCt4b",
  "key36": "pqDVmhtDNgjzoEgC6KfgbAxp98x3PQx8qYCpqviNmPiubmvFVH8RPYgXaiBQFUJpk26NrbcpaR3L9gS9R6W3Vps",
  "key37": "RDtvDBEvqABUorVZjEE8Tf9phFtzMCXFYeksp15MqHzhD8cU6MsH3Cf1RVkNVQpQ5HqiCWB9n29XLSs2i5T3cWt",
  "key38": "4JvGLc1YmQnRWymEF1xBXDVeAPFKE6iqdjKVmboebe7wGSq6YrPaq8pWzdp6gx1sT6qrumQpHey6KKUtmnrbC6VB",
  "key39": "JCcPTxAdR6qJQyL7f95VAMYDKJswnuPXoiBmr73AFFPYKZFjVvx88MjMdj4nbDyPbeE7PZw1MM6DfBU8sCN3TMq",
  "key40": "3nZQDxCtCbe2pUUahJMWRYxPVKpp7XtSSJfWVUe9CTH2RN4yKCzxk1VXVrqEbM4BN2aPHBxhJi65VgoDVBEuT4Q8",
  "key41": "qtcsUY6Py7ZtnyasWbaHQwhMPYB4MSmnEMYmFF7ZyjMD9yFN4XEvUX5aNmTeBFdDHDagQhPrnWxdD84shmW9PC2",
  "key42": "4a2CC2p6GVgWR4D4VLzeZha6KgdWKz7duhZFKDsWrsZUF1snaNkq7UCQAcToEeZYtwg4dVj8BkKS3xv49T8DV66B",
  "key43": "5XBvpTauD1tmujZzKGAjYG8KLQD9DcgQxmnGzYQanQWnTms5qy2oNC6CAm5JSxCy2K49SifatSn7G4PsFUSfQjqk",
  "key44": "GwQN6eZPf1MyewadYYD946qrgiY6sx9jsT8TtSFHweDsQT2cmgCpnhjqkxNVDC2RMKae68QAUTN4Wq1yk7iCzzQ",
  "key45": "28meqTsck2XJ3MKPDwy1yLkJkFpjKz4XqFbUMh6rtXrrmHnCwF9A4SBdeEqhb6e7cUf1z7tEXehrsMVk5PntWiJ2"
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
