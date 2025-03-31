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
    "5QF6FemKHsPK9eRyxWutSSz1fByMH6teybVPzBPmE5sYDEqCY5MNgzAVdX1XwPy2eLbhQqo3nAThjHdx8FL42EZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T9CdoTM9G9YSCAhh6fzmjVgPFbRF3LY6HkfCewmHd7jAaUuiiApihTAeYhBs8nUHPEBdUCJStrJx2cjEH9RnQvn",
  "key1": "53EtdEYGPtbKS5QV368u4fgaCinKFfC2J2nFumDrdHB8U1NqyFgNSRZtRg1nxQ4runQAX9MTsKgcsa3bosZrrJHT",
  "key2": "5JxiJ5Knozib6kf7Wv3qDK2yaBh7qEqWwgRhHcezG9G3YxXrXBKft4VF9j5kKRzVzjB57igpgAbzHPKjYimrZKGR",
  "key3": "2hcidL72Bx3T4P8Yva1yFR7f2tqUxAyJjvhTtqEu9CRmjTzgyysBirRGZigfBwfd12AbDV9TLzMPbZhUnFdKAWW4",
  "key4": "AgD3GbFobQ5LfbUbEbCrnDdqatPKrhDmRR7RZavEwp5NHw7JhwvmTdm1KPC6GkxF2DCAiHsKD2HATqDB9TwX8Q5",
  "key5": "Vugd26jfvpz827b5r7kXhdvBEeX1HgJUka3eiPCgVCKMfKAZa36kXzcQ4qaHesnqnAAkVshXo2HDqDJdEojMrMk",
  "key6": "5x8ECWAFeaMT3E5QaiCbbEbGf1PLEs3Jd5GvAUCsLikukSsRUniWGD3WdLo56UoRfNxK4KXBk6v4fLqY8fBkpYdx",
  "key7": "2wU3MpgHJPrQukuYrpMHBisCb4DHUgmEjMNxYuAWzoPoUzMvcy56bM2pezmvyMJuSKe4GZpdcaC4AWnYbP9c6Ki5",
  "key8": "3iqUSPhzgywve5bzMDtF9hGdeAsesvcfscYpPjj3MQKWKj8svL3asfwMkfJv5xzL2n9k8x6eP2JNfyPnonWFdioo",
  "key9": "3Lcs6aZvDgcqwcU68mjkDcUVYPZkHDHwwQ61EDYmedTvJoHyeKxp5Me4dLNgVbfkwLK6pbQhLSE65Jj3KtLR665i",
  "key10": "5Buz8qoA6pLYW87b5kk94rLePaMj82AnDEPMhnqzz7f35a3dR81X38QU57FgQpkTJbDfkCvqdoJuh6AQ5UdqMnLE",
  "key11": "3CtWgeHq333C5WV1qZb8n3QmMHuycaNXcWygzD244VdhDvaNG7hphT56ERbwK3UmyA6ycatd997U3SbWqh64hybZ",
  "key12": "2QZTK6NbXudZjY7RoGuhhXpd1K1wxcd9y1hUHyeYuwj1AJm9sDJb71r6dB2Cj4Xh4vB7tWy2rFHfhEmD3SyVVPji",
  "key13": "33iJZdGb85UrxSQ49cmivFvbf3Ur6csFC5hsKTas6F9W85oNSFxYZpDHJepxDFwgfta8AFyvsfTGxpkE7TA9Dqab",
  "key14": "5qRhmbp6u6sKqDH1Yn8YMjDpn53TQB1Ff1HiRwJqavqWcgvizTBgxb27VMriY6ZyYKnfAMMxZD53Vy4AB8CqDz84",
  "key15": "3fK19tgjDC9kpVvLtPTLEsjQbDJvPbA2cpPoURa18o1QMgUG6X3rYCpUc8Xkdz1xRDfFGSwSq9h3jfnZZFDiaSje",
  "key16": "3rzAMtkZLZ6mEQiSrkHoQLNLciRz9xhJj4RJQZrmrgsuSBhnUyBB6ogtQU9HxvC1KSaPRC45yZBWo3eriZgrNSt9",
  "key17": "2rXKTCESksituRnsenbBZ3oYeSyUhTVvQidmmg2d7EmXASant6g7SLSX6U7sk17wVzD3Ey8TcXRXvVBZrL2hN9wv",
  "key18": "5EEYemTsbtujjL2i93xBEKfudSd8GkCcscaHG34d7k5q1XoS8XLpoDKNuyV3do5cN5cxzxQHWbcMZVZsxfJ6HgPy",
  "key19": "3rAsW42oZURUSgbv2r4sY5rpmjsRMiQF1PQ3dqQ9kZXZH4QduDxh84ex2nzKbt6PeRFZ9RsLD497oVBzkYncNyaZ",
  "key20": "5B8cRGwnGdtUYQ1HqQMw7goKj9ESprPcUYaYd568SYj8YQYhCuqBgu4PwmnThRHL5cy7sECQtLn8o6dx8s7hqRJx",
  "key21": "5s1bxnmtZY6ygZT7CCHbxk2JZM2Gh3jmFaGs64PKbJBuMtte2JN2CPDMQY6ybiZwbqZTTGyvfSDVe3HbYjDSUXs8",
  "key22": "2RhZ1DHGMZUav9tvKXVyn1Yto4FchEv7mfFH9xiKFgUL1KFVXXng8tPPPEHYPBwnq9TV2wjNLn22GD4h8svXiFQn",
  "key23": "55RBcYBvCf6mgUCtUVqA48uRTcxAQJENK59MjxbacavxiDDxBvsAC8JBpJb4TXE3zLSuV2jTTmw11JjaNp13JXjA",
  "key24": "4H16u3zZaQyNbbvKbjYkPdynftA4HfQGGBTFzZo2rUNtPrbMKiYjFUTkURR2opo9GoHVux5FY6C1Q8m2BKb2srCA",
  "key25": "2kBFD8YRij4VenBwsLDyqjPiEsE87kN2rLDkgs8HUXeD2d11bzgMyVtpYEB8AC6yMqnTxMvDT5fCDPdZ2wqfW8PU",
  "key26": "EKoyA25ijisGuwwWFm2C5zpHgPT9vhJkpPq2FPMySeMshW91yEhfGKbhQwuEii6JftHV41o3DYbHqXKPp4dT1V5",
  "key27": "49THLCyCWDWXSSwXWDHfmEgVs1zgiikMmV5UiRNfjEvLM47T8Yys4TWkLEe7wXMJ9X7q92oTS6zkjMLquLpcwP71",
  "key28": "4uqzsbdtTDnkTJkCtjdbanoKpRtsYYPFb64wWBibx9XbV8YYVABbka3RmJoaF6ro3nhyYrEdpuyUfcyJftyn2J8Z",
  "key29": "G61fBtyuBoscTnVqywp4Zx8ZHfn1WzXgDLak5Z7KgY4ruYSKUX9dQkd8n3osBdiZgoW6eKfKW3t7UVVvHVYQ3Sw",
  "key30": "223u1gkk3U47iBb3B8m6KXk6SfCJUPPzNiGxg89dzw44U441jf5txK3H9x4cXkkm24zBGZUQRqzwNueTmysT3qT9",
  "key31": "2pnyhV4Q5mHv7oiKJRwbSiPtAYQ3HNJMjLoy5fo1iWJbdGV1cBikNuvfRYTESLZgCRy1kDiJKvJf6m9cTZNqkEk9",
  "key32": "2ncxCtGTooisPES65Xp8nQdi5gYpBqzBfqVMHPAwQgzVGYDB4cFRYEvctEqvaM625f5QqrsR6xPsHm7X2W2UJvcj",
  "key33": "mWnkKmjM5LL5scPb6c8oswnbazHnFtzaYHiTQTMC6fT7X1g2Gd9GmmUYpUYEfiXgDaHe3Ck27tDaLfVajENYoP5",
  "key34": "4C5WBpMgAtnV9Mrr34KN8GVbychBEuzCPz9mSMqL8pPgoWVphXUGQp8gKkLD8BA5MSToZ2Qdz2fqdQ8eQehTotLP",
  "key35": "5vhHUVagx8311kzPLpffMVAcnTEV7DyBbtgePcV3ZRGjFWq8kD3Bt4h8daLxaNwJmvBG8sujTFx6PXiYAPjQqZmK",
  "key36": "4RDYnfPgBJDr2Q9v6fn8gaD4VEmyu2x2r1Arm99dsj3q3D7hdtvWB3uZavi5h7xfstcqmU2jnGhM4jXS7q93iSue",
  "key37": "5eo55Sata3mXjnnw9DyxMRV8bJaGt2BFbsvhSVnmufVLffo4n9wWHhmBAbx4BbaSdLCX9aU7sCSgzBgLsK735ZTi",
  "key38": "34JShBbwRuLmLoyhqfDnyuwJB4aUizzE4dAsX2yTNCmTSTEKLwcgCb32Fs3a7vUJLxQqtuusQix926w3vm5ceo3Z",
  "key39": "JzPwiTiXMqLzg3hH7QFpmTVS1UnfiDyfjExy97qaJnwdEyud6KDTHiRnysDWxbKUKDZ8GKganHoc9GV1YnoRQ7B",
  "key40": "4NhKNodEBTxaWFEcNSv7DeEd3mzL3wWfCEoza7t5p6UU3VvuCA7v2Q5h9jcUVLGhMfLSrMVTSiE6giMnUMUrbjnf",
  "key41": "2QnaLuQayuYp2JKTcoJfNY7dhev7fFJoqW7ytGpfvLFV2bBB23GDzB56ApZzQUEjaQvvUuHhUpiZZY5T43J58MXX",
  "key42": "2uhs6vcNMAjRnkyyJSFsZQyPW2mjyBRcSvXr89FXXmtiUYNLs9mtJFqHV8mdvAyaaKDoXnjr9226DbVpCWkqUFDj"
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
