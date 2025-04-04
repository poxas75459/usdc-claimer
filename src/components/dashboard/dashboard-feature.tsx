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
    "L5dAdECjUEonAq2Byc8FwTVoFdUmAyS3bBJgZ6UVGsZikd8hDdwarVgJoCGALjUmDf4BZ4Uqg8r3iwkwwcPQPDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36tCFeGP3Ta3QoBDTc8knkyuRKPDzmLMz3Li8jJ4YHUFn8B5QWtNATYrjenQj9P2eaPofBqZj7jHGTk8u7YeEdHH",
  "key1": "4VVbqmhyZvBmpQ5f7VokVMX5a8zBEbaQzwpJyDbphnNci5rDfon5ZCPSfSHGLa2yWsMzFcRU4kecLCctSpGce7yo",
  "key2": "2MkHC6xjPUueLX8iyUkAzFfbm8vjSpQB98FCHGGiCk28yw89mLEhHbdhtyTXoS6HbJnvJkxcNboXJBsZvJXMCbnp",
  "key3": "zYuLHmiqBkH4ysFYWpEuPCyQavgdeVxzKk2SeiycNfK4Ez2dXawYwpfMMHCTpygFih47rbzPRSR7e7cDT4dKAN7",
  "key4": "4vsnB3GBmn7xNWoMDXM5AJ3dbjNQrizKHjUiF2cESH5AYUjRxogLp2WF8MxurhyThaf1MsukN2H256oNqGBntFS8",
  "key5": "2RcbjUn2fefkRRYoT8xNZTos62EHBZZEQk7PbTKcD4QsPFFxyB8PrQP1RjwX9SEv2wjFNeNQmu1HTDARLk8RRjmw",
  "key6": "368y7QcjZa5WUpEVYDsPc2fx1dQrferqT5ZGVHGsamCwgVS5NxrnsDCT37KEBbX7W2aFP5XZ12VpSWxn5yfuCmaB",
  "key7": "49LpLwv6ewQU2WGDpnvnqyDAqyFGQiCXo28A93yvz4AS2Bp7ZEJhLfVqxJigRT2VAEajU9Kc4E2STMek19w4Lfrj",
  "key8": "3nVXw6FbVcALTEzwR28nuueT9NmFARKt2f3LrXSyGNTtVbiUwrw88vyzxwhCK35Jb49kH3CYxvcCJfikmTp4uK2q",
  "key9": "56otWxeULTYxswRDYgXB5tzGN6noJRypdsgnjSgiBGy7axwepTi54Cp5rF65HWWKnXaSqfeyWPHQkgAsjgWniZsu",
  "key10": "2dqXjEqUYCcdDjce3kfenPJSgWJbAN5VGqtVrqjL951VoKx9SD8oXpD7Xdut8GMitZDfjb6QxdyBLtLuHAPKX6jz",
  "key11": "THq6Mn2Zf5qsfdF7QhD8Jx1mU9F2wCyiLfAuXtb8NR8SfiFGpNUunA3FKAbMCMgkUAexvKrfpdWdNpC9JuzD1HG",
  "key12": "43DEkx6xdxahhshwnjSSD3tLqnR3HZ9q6Vm57nLVhNsiEjnoiVUiHPbR6X4yGHX4V3Hg4rgn7hBcQGHRoLKV4DhX",
  "key13": "esCWaFXXx89opJTAetyANhkRad3DEdniHahpTDDWqCztK51HzdAH3d24LQNCvhC13SkKjgcZt1n37KFsqv5h2xC",
  "key14": "4o3SGbbocQKh57kRR6djz3mYWEgq4Q6jR6v8mvfeQwr3VuL9KB4pgi7AePEahK5T8N24v6YwGL7SbJcKhoDiXvWh",
  "key15": "48wgLkma3D4FacmSqfrM6nCXALLrh8sboZinYHoWH4gb6FQyi8eQxTbZYtUrqWcLdY1WsNUMyEadEZCYGQ4BZYUZ",
  "key16": "63Dg12mVTyQPYeaJD3fZDRQxQGif36i3vhXbzr9bnVMDMMYdatsLLKke1xV9kKcoFKxxD8HwoJ3tMevnCvB946AY",
  "key17": "41G2PMUTYTjRjf5dLgqZxkLLMvdtVPsEEkzKTQGaoUSz8SYHpA8ZfuybgGqjCxknYAXFb2y5bVCeCWa6TJDfc3TC",
  "key18": "624Hj7vtNMdbmg27ybHye5Xv9M9kFk1XFtrnjZqREZZT7u8eBkx9izbbvLJpd8HdyQSqM29TkmH4G7Q5jHgdWi85",
  "key19": "5yNM5h7eDdeQmfsrgvmAqVpKgbnaeynQ1acepjsaGAvBR3Wm6RBs4cfsNnMSdM6QnkxmeJMi3asMgctr5HtQmrd",
  "key20": "eiayAatJksyAm2pgLUq6EHhWRhgi7kKQfpVTmcXraUdwMDNrnkSv8jAa2gSNmGMh8P1GvGZdH1Rf9fzoia7B4ib",
  "key21": "DKqJG9HLTvxWE1ZhYw2vwqCL653gcYQZ63GxsCEsgnDFtQ9zsqVy3auFQApq7Mr8JaB62tFjKbHofCjDrHja3WL",
  "key22": "2fsR47d1HibVZNjMaXDYgwV7EdPuYb4NZepR7D3kD1dqNpTWbE1muDsCViJbSaX1VNZBDb85cSNUvu1sHoLJKhwq",
  "key23": "5msNt6C8WumtnU5dmPu2peMmmixKcG2bYV9jL5HXMLTPseAy6jZVWAkqNC833QqbAPxHg1Btbqszht5DcZnWKNdW",
  "key24": "5jmefqWDRhVin4B1Pq4dHpo798Vrg67oSJwnCGDWLTcbLHFJjZPXYG84byi7CLrwWcLCXxWLJi3QEHPr1Jod6MZv",
  "key25": "4sH913JKUegV5LQvputBAh5TLSWV1nLoWRcysZtWhwdyM5gUCvhoFi8mpLPsoMYK2qM2T7qb5f73PzzWiodw6BVj",
  "key26": "PkhvR9m9oqsEHKgd9QfZNN7DdfNEojJzY1oaZcheooYmLqBnYvGpdMQnHAXpuifdUG2Q7HwF5kPQiWcGyQERu11",
  "key27": "5CkjVej4uATrySRFCkVPCKDNjXHiVY1ekcyEeHUZuBE3oakaUKTN67xoSUAop1x9tZG6kxNPczZHxSxjyCLhJmnW",
  "key28": "3EVE4Nu9X3vNccznr67wCUufyE9XehJ5W5fc1xwLVL897t5BviJY6fEzVPxoEMvid4wrqs4WiQxEyYuFxjcUjZGv",
  "key29": "5xPXezKb9F8iGruCEaVzS5QZfEvUum2Wce1QBskcXct5VnDTc1YepvFG46cvVCdYt2v1XKu1s6XgkRU923dm8uDU",
  "key30": "SyR2XNC45JDVL4HQmd5xL2QPJVPR7EvxBPPyyd8Ss6M3QAjeABv3SChhJ2HV3LboTy32qT1yYgoQEJY73F67WdT",
  "key31": "5FbtLuiKLaojcxaWAcvZwJCGBnvgaGtWyrXVAcXhT14Ktn4dDpFu9q11b7Jr3paRGeKdkJE1KBFDV4CRVPrHhNYb",
  "key32": "2QTMu3CWn4BM61WGqYUdud26pEGFfgsLM4mzVn2WCmbFgiaMoBmLhyLFACvpu15bZE47GUyU4HpgpFmmYpBiFaFL",
  "key33": "2sQ81LBfqLZY9kyAbw1pDnBG4ECxLscw8Fss4C2QKYgpbXz1stBkcN58xu73zbrXcxkkNbZo1JVgmKDoqkBDMKbX",
  "key34": "5c3QUmywa1nei1j6BbgCho7u3H4swavK9tzg8r7s7mvWVRoJpVV7xYrMyFwzFMoLLMCBXV3g39EsA7aqqfo2VaUE",
  "key35": "iVEsS87JBJeU8hnybTzeY3XVhPRNUUveNTxSaBa5vNpbJi5A9x9zpQGetmdbLau9y3ShzEPZhCgZgLwEmsf1Xu8",
  "key36": "Xg7XQm3smgdDCYZoNekQwFyjJGZitKAW1BsR1RpbnwRqdswD1wqxM4udzxMFid9gyPa5MQhFWhTvn6hPbuENrMG",
  "key37": "2MWmYad3sAcxQxWxPzeUVfVv2rd5U9GczCf5zqBTKasFHCJNdFNjamBBfnfYvYJJrcVE3MmpKEfRHynowh5JkGqK",
  "key38": "4n7awY4i8XJrPVaLHpnMCjFFTdXWPTTV3HX6cENXCYc5wne69QVDuVbRWVEcVmEtPmQMQj36FEXyfj4nAkWA2j8C"
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
