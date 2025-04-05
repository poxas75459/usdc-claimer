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
    "3prve3ud7BmZHbhwMWLUD2QBxkLceB1C1knErgDQuQhGTRGPbD1iVizHsaJA8tnGpu7Gq1KTRnxakj9rrcCn6dCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oY1nSfFkv5o7NEeSgms3cSrV57GjnHiM9WTBQQhYqGjR5u2FQtsYDV7Y6fU1wxYG8sFS99C8sJyAzBfTRfaHGFy",
  "key1": "Y6uJLrUu7aNL6KiVgrKr53KFNxzr3dDcsiiYMY367AgHj5h9tZXXZspTFNC2j4yFpY5JEvxpvwgpKCXwc4672nZ",
  "key2": "3ymwCHBwGwmWaUyoVRKpBDcWbyaukjKuchgi1g8wGpusKRigqujvL9dsavPRjUdiKruUdAWKthHctjjYnrrVq67r",
  "key3": "HMji9h2WWcfuhu7VKg28Vt3rgmLzPrcX381uG5hvyuUgiwwD1XEopWCGfHKDnNCbBbciowNwTGSudvh1dsv7E3h",
  "key4": "4p9EQhEwXxfankbyARS6WEA342afJnXvL81UnN4UBhWUDu5mMkCXWBb5fHN4JztwboEpBcf2ZLaaz1Bv9aqNiYJP",
  "key5": "JSfkLLjpHcVrNk6NzzCdHtwig3qx8ggd3d7eZ9qHidYGkwepT2ew5EPmPpXyGWFMBxFzCXawasS8mWtpr6rxpqj",
  "key6": "5nwxw5DgCPsXGEmH1j8qvu2F7HgvjNLQFPMwS6HBn4d5xd58ECFs3PCZGZ73Sam44Azy3N68YsHhGXYeZ175Ch7j",
  "key7": "2spbaSALiG1mgQAeLuh6fjmVDYHt46K6P7LMYgjmW9d3vT8t18v4m7iTDzBsvSfFNWwj4S5mHfupeGCZNXeSb71q",
  "key8": "2QWhbRDAr4HLgrY3xsxiuRN4hytxXXVYAKRN7Gg5d7UTPbCC1yyrZDfdUa4SNzsyeV92ojxBKYJmYfYrKkeSBYTN",
  "key9": "2EraZKPwtHyJgs6PoaHMFj6SXhEUbPExwZcfuLTpMhBSNARxtrF2RJdUyBYcnVyh2sPZQts7wBDrEinmzELRPHoF",
  "key10": "2tEtrKQ8BG2Jj4No6CSw8YXL9bJmGm3gwStCnSA3Q7uanrfU87SjviKTCaQyMXTZZMfZ82FNXiC3da3rbpCQE9Xa",
  "key11": "5WFufFimcAQLnBj25ZkJoSzX7AkMaoSjbQame6b4N68c3CLX1JyDNFweLZkGRASxtgL7CHds3ba2peSr6PiR94Kf",
  "key12": "5toXkJa5EPLkQYUftKuc3pCrf41bpqpdw8rAmpVtxXaQGupV6cCXydYeVh3vuwq1zPYaPxhWLxXafVvHkEc1X2x5",
  "key13": "2KqzdiY9zqo4T1djRYyRHW8CUyRKbG6uAWwtqi3itG4VYJaSr62nYsyDoSEWtd3i93hLZ62oVMYu7Xdifwuam8Ns",
  "key14": "4N2Dr6neQKtouYgqFLik7oZvw7NctXjdRpc3pPgU72B8MXYErGCZtyfPFvxWTudwqN1kJPuJn43bEPKrDqgcTq1N",
  "key15": "23KhuvAR2KsBKgwNajz8PHmVFZLVTvDTnRZZArY8RLyqBoWuuJxaE3sEgfvSZPPbJLnmHF6dfasj2ttgD4eyyTpS",
  "key16": "3z4L85u9As4JT3JgWuhoXuJMkDkNJgaK5r1KgqbCG92WHwLSASYV6sqRpKy4iTtWwEfduKEf3moNHLoqU33yixBK",
  "key17": "4E5vNLr4NEqpe76Lu2zMtjAr6tFLVhDGW5VhCtBQRb6SSracdw9WSuZosHxnxyo8kQPU9ikbs5UUovD491SVnfWi",
  "key18": "k6DPyTr3znQjSymg3mi69BdMYQdL1J5khS6QfVfVitU1vEcZ2hHMUEZiyXPqoNujPChiHDhqte9TpeMMLJSJCRD",
  "key19": "eDXsK5oaP787i7CdzDZuBExdPNp4ZVsyqkMC1WEn1EArqb67ZENcY49mqNwp46dkGmq5utWGmWLhMPxYk65MtCh",
  "key20": "3DB6VfPrFV7QviMAwDFWhpks5yGLMLps3RGtCosy7JuTJeAFVpSRBVJsV1947xP6EDQdhjd4ynCsaxMYPrbci5ZX",
  "key21": "66475xX4z5sTWhKJTSyCS6SxfPVGEuJ7neF15J2yJJEerHhJn9qVLPMvEHgwnphZ3LoLEVrYqEWKn1Hfk3Eto6ma",
  "key22": "BxgShitDy3EpyrJLwtAD5DneygyziUgPUmuzNSVwG3LESgp1cmUqqbTaWQEmVN9asN9vqQiLhhMabD6Qcb7mnNJ",
  "key23": "5hRgAaQsjMCahyjVinbipbrmM4ZDfrb3MpqtuqcmmyHce5hogGiqyuYHdjGfE6DQPoki3QnZCv9eQP7qeej3Jwdv",
  "key24": "3CgjQULnJVQNFFanMoJspXtPZnBggGMKwgmkvatkvcS1qgb6RoRmc8xRC7xNg2Uj3KQ2zfKCvxK94adkthgR4sJg",
  "key25": "3AEK9Daa24iaFFmtG6nMJNNfthyCSsCtzgc6vjha4HVxdRQVPj4pXE68iQb17q8ss7V4efDFGoQD9C4P7qA4YDGY",
  "key26": "qVvVnuukygaUMwBUP8DUh9hXrLpDaPXnZZd1MWkr1Yx9kAnebPY4Hqa4D11oM2LJmzaebhK6kDEmRf1yTbfJHvD",
  "key27": "4ECGzdX11draQaoCFJU3PRwrU2L7BounZK8yXCXh1TzPLFqK79bSdd1yJr1E1WAdmaHuqGTfYBvaFT9sGGw7uTbw",
  "key28": "44J6SkGKg5VNvExuxPdq95hANntRTfKTPwXgdBNSmNh631qMn3qgEzvUXbXNcuoeLwSdjBgQEfsL4ZQ3wUBfUuti",
  "key29": "nRfsa6Tcn3oVTkAZBQJ4vsCLuBrbUMA853fRPqyWrm9AAnnBtbCKGrpeCnN4ibfAW8DkBV4wEFFdkKhc2uBuvpM"
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
