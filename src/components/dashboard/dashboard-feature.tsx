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
    "EYghhtGQcyRRfXshQ4iBPNRqEdWHLXytqfQKbsN5bmfCRujmt94jZozWUfLTa3dMMHDeSJfixp1t3hjuVJtqqcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DGJZdkvThyGYKchWndyW5VtoNgDXjixqD9E8PydBLZoNCJvmTrhHS9oZemAGFYDpKvo2LVYNYMQ4ApvseNB3SVS",
  "key1": "4xibZfdPS8XTFwojwzhMYqGuE8vTedWMUBbkSHKETYUtkEiNPny2ohuJ6U4TrReeHwLUhGpjCZD6uW77Dfe2Aqin",
  "key2": "2rMHLU8Lbzsv5PCEVan6or4QFAUYmtUSgbLH6KEQZMJixhbppimGfxd38QX88TvJVUWz8uEUgYLuwrP7tqtRT3op",
  "key3": "36EhdpcozAPrK6m2x4RDr6jB4SMQ4xWLt3jfRrCmZEMfGtw7mpyGsz2HxnRznTpVksfcD4HHJr8G9Zi92Mmnphtb",
  "key4": "5VpP1MT34r4Ed1x5naG3j9Xt7hvLPFmgML2mcEN82o48LDxtBhHKgNAFGpC1fYVsMuck1YvnwTBY3boMesaBgACu",
  "key5": "3jkuxjEGagX216VUHXPMiP6f9JJLjXYENTs3Ecrbw8eJhHiVPaJEhzsGAbQwRbiBpLDaSekUy7RvNCca6chZJmZ6",
  "key6": "53bPLux5Cj95r65eJ9XyVViDDqom9ghNoEekS2UwyB3yNV8xGt2jQcVjrCT3e6RcM9AHTnrG1QMsbWW22uULzb8j",
  "key7": "2aruWAComzbryTJMa7meU9ZriH9LFgtJwyFXesfS1UxNfS22s7b1pWWYRB12zoht7eksowWKXU2URL6MSaMd23T5",
  "key8": "3A3toNCiypmG8pz279u875jPFMFbtaCny7G3pNUAUdy7S6oejSL1iGRfYjs9ovgMDcHTRmeEPMa484s1pJUpye2r",
  "key9": "3zuV8KPuoH5y2iAombimS8o39ZfczEtuZBWDmJigRGU1dUaFi4za98W2eetP1no9FoVApnPDBfSSFRXyUfhxC8tk",
  "key10": "2UuWBGcKj5u2uyKoWiKG6fYXZaiYDH8mkbQDUEMyq4H2GsE5sTkGokbLqXXgCqeZsf6hD9kixGLPHWqeuNAU3q14",
  "key11": "3NkP11wE3pwWd5ViVnyXPw8XzxyLXaLD2uDJTDny5mfrMum16Dh9Zwg5tZj5PxMnzHrBF4MhWHzakwe4m4cvz3xG",
  "key12": "2pr19hs96MYHcXoRD7m8WAdQuBKLuoHy6k4yGM5kTza8gZ8LTCqCX2cdfhncNnjyHzLxn3wNBuPRWCto2xyoannp",
  "key13": "2aRZTN32T9DAGohpN5X7Nk9DjKYQXJY5fEW89x9BX1Ao6CgUMGaYPxvGznwYiQfbPwuBG8jaM6wtW9cDxTg5dc6C",
  "key14": "3dBJmkZaJSYqoMWuBfjfY8GDo9v4qr11rsXPQGLkFaAJuPK5hXbpmRcUPMJzgvQ5yo3cSbSUvtzgdeYZdaNJkotJ",
  "key15": "5qVmuntiYaxjr9vb1CGq1zsBtVJR4UXWZBNPDgyZd5FYF3p93hm6phjhLfG9JtqNZaNKrtNCZH79CE7VHJckc9HD",
  "key16": "4V3g4Xqx7Fgb4gqQsoXd6BNVSGeeEVBUDmLiiHCyQW7DV2kmvcCxgcbWJPPsxccpVZ7nng276oVKNSNiWYJNJpC",
  "key17": "5y45et5RXJz8fqsop6aBePRa7HJZR18v2LpZCopMgqvmeozMKaDuvG49uUMTzn7jtFCgBXBxtfTXm5wHDMuVUjHM",
  "key18": "3cwiEmXZZtDH6nUYvgS4uH6QeZrkr6eCSLZCdAGX211dWUHzpaDpFBt7ABstatGJZ6reptFjTi1batdBXPMY5Z2L",
  "key19": "64bb8LKkm6BTcPM3fcTfXeWKhraFCZcinQ3H1L4XqqkHsgU7GjiNcv7Yo52hLzCJVZ6oSjbz9uThXSmTrve1La9h",
  "key20": "5Pb2NierB34pRhgfgumo8Wk4D5LvTUDrjE2z3wS1pBcbdgXsLn8X6pkLLKcN1kYJczMZtTauytN14NEDimvYiMrm",
  "key21": "2Q5om9szDSPrWfhXzLWVN3rvBbMK4dThaqkw4hrq1UmwpHffMYrmhQKjhzshzYYs4FbjWaaeULVBmjyt4hHYTvsq",
  "key22": "2SnQMfmVetrnvyWSXdNf8e86MZqw6V4WXvGz7JHutoHHV9Eq9DmC8nHkm3ZUFr82F9Q4C1so1fForx7Ngp8WcGaH",
  "key23": "2Nd851T9t6CNJszpxat71UTgzUczpRnhkHdyyVWHsb796Ab8trPVnvy7XGVbhVq53ykWEiaiyyTjS2gJf8ictAuu",
  "key24": "4wWhYHXpiHDUNdcoHtrVFLszAYQDJTZNmzsV6LujjzEQKpDnXkfs8wgxFmW4RFVtt5kXEEBKDV8JAZ9ouhHUSvLX",
  "key25": "xQg18KGCFb1xb5KEBSKTQCvyacBWDsb8qz1Dh2uHhSR8EhaY1h8MbkVd761F1LBaerbi4xEsHH8FGq3cDMLmPy4",
  "key26": "2JcBLNFKhLkMZ4fahDqrZoZxP8Vnb1H2yfAKFMPYq2ZjZvfuz5hvsxfb51epRjaCK71rEj4YNjpNvqaoULdRzJW7",
  "key27": "3CnsmLNxQmuqrKaTzcmr7nbzsUtnkm4C8pLGqCixs8nTA4r9zChHapDAVhVNmBRst5x5a3HxQAGWUWvK4xFKWxkV",
  "key28": "4rJtT4hDKg85GJi7DkHjkmZ5uYdiq58byiqkufa2G8VspAcPMkNtyQTSUYuRUeGu7XXsJK14uAT7Mq35TEXMs6Rs",
  "key29": "2uxRkL9EeWBdFAPG29FgDAa6hhnBwgxc9oVUnP9WaRnpAZPTSVyabpXNWdk46te6Tw1gFXqVA7GaCd4qcUZUjXRY",
  "key30": "2mJpFB342WWfmCCApkHVbNGi63tCbNAAoSixpuBPfy6qCGdS88TdgJpkUoDgb1ZzUVwio65FFaqUHcgRzLxEKiXq",
  "key31": "448q68GGziTcDq6vsc8EPqH6WnNTSNnk9vd7qfdcSo8sPrtTMSnYA5GmHPU8VuyjqhzT9G2wdU1v5CntSbncdb1o",
  "key32": "3xtDx4Y94PMGrM4GwQEtewcBgW1vuBUHSgSawcX5H5KwjYtLqUfY4bN5dToRrgCCBspL1BZZUjzv2pqeLFg9BfZq",
  "key33": "4KBqkAebzceGsZXksW1SnhutpRFZ8XqByyE4ocQEphfv3sp4DqBkzzyUn1wvSn6PA5djCeC23cawC3em96ftqqPN",
  "key34": "5JjRJXg9rs8Fwd3tuhx5c2TqvtPLS18bsXtmoPdQGCZxtYeWZqZEpnvzdyRXX2RWfCMaSNcaYsKNdpkkJv232EWv",
  "key35": "5evdRo4CfWbxfJig8F5jitSuK4cTYpmgQnGtNwPKzDdpYUUQJnWEjbxzbiNo8AkLWxvvMjj6qJUGMSHm7oc1Y9S1",
  "key36": "3gB8rcXkY5uVBSV9LyUrZojfQU8QAuMyLUQScuJ2fugYGVr1rvd63Rv6kd3LnxmUYWDMYuMD1iwby8Np4s4Z44Ej",
  "key37": "oNRuGPQUM6Q3PLtLyq4eFz3pu9rS7LLfSFNzjDmogXbJQRqwiY9PikKjWMQkURYaVpGbBBrTuukXn94t7NoMtyE"
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
