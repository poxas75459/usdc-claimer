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
    "2EWwDLLcAWaAqg5jVjKeo1dW1fjhCGbxs3nW5WqQjJ9qBRxprtjh5gtytHhX39Zpt8ktRiSxk9r5gXGKRZ1E4BH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pZkm8Shu7AiFHR9zU6M3yTnXM7pjGS7pUmBmbfaKr58a39U14fkyjL2FbrALurMmv4DtmtGyNm1udF3YPJdHBMC",
  "key1": "5qTZmwry1LWcV4rNuYVr1vZtRGkhYyD1BdR8LoxZLuPGB8fAdfL61BgsXpRVpDSR1kJ47KAGjynEpk4sCHppFp8g",
  "key2": "Ke1aCv657arFNESFPWdFqeQmYt31rzsDuLH5HLGs1ZBXEY4oHDXw4TYgBVetpq2udUVLTHuFAXxa1MfnPnu2WxP",
  "key3": "4qFFbVzVFnP6wSWqnWN5AYeD1WDHizZZJg2C4aqFj2JEUmEvXuqPBwgQmm1SPaWNZc3tiCpJkniGUbL3BxEZRx4q",
  "key4": "2LZQGfVVw4FicqB8d3MNgg72gMfeXywBtoNdhyTeFp67gJfVB5Tr7nHNkMunjtdKrVrKcodfZsaBwpnMG4SUTcgq",
  "key5": "3GwT33YmQZoqFcL8UBiKAD7Skn1rjK6MUySS6SYTEW4EA6yG3R1oLzvG4EWRd5zNZQG7xB9EK758kQRGZHLPiVzV",
  "key6": "5Kt9hSP4NeDxhncqp7tset6yLQLmS75Ha3xGvnw7ckh3aLf7C32D7XYmpYp2d8a6P5rCrua23qBLLonJp39JQXoQ",
  "key7": "vBd9CkurozU4jhTyxoijpGTL4ZY28VGgcb9GCq7KUEu51ByhXNxv5Bk2xpGYVwnjjWc4evQuWdBxuw4mBEotXLz",
  "key8": "5NdGsfbSTBL26Yxm8DK3bP5JZQLwEwnMGUneipuDZ5S85bGbuLY5WkYXAZti7Y5CDQXquXhH1VZqHL13KNs5X4DZ",
  "key9": "3mkBF9x37YMDpcmtvsyLmRJmRpdZrLKpnottZtVVPbNJUv5u3nmgB8DHS3Q3mScCanA8zwjsoy8wbkrax7CAEN8p",
  "key10": "3uA4MgJhBEdHBYshcUyEcvYTAPhMDQgy9vtGNPXQJzQizYUPet5TsnQ3dSYuakboftKgAAbjP9njhbhJM7Rtdt2G",
  "key11": "4GwzWCkCCKJ7byRXtQNDRrv22eu6PPMaEQWB4wSZAKiELkYPkjCqxxDmyVYsyKueD6wHK9suRHBwZVHACYGmW24A",
  "key12": "44UtasBdDJN6aktdMQ9XjpzdoJntLN7VRAGfsqyFZhNcj263GvdEfTWoTxLFviCmQiH4kpb9Nrz3PT4Uu5khFEW1",
  "key13": "3QvUGqF84PNFjz5DGc189jppZwQaQeKQwJk3RKJtnMwGQZdutEnnZJN73sMFQey2PSGqGpZLnerAgz76uqMvCk7n",
  "key14": "4V2WsrvAcEx1xuAaGvdp9esdb3ew9uJzagXFfjvamdayPedc8Q1CAcByXiEHG1WKr4dYYB2GTxsP3vWTzjfh7vbF",
  "key15": "5YciKchoaSLDL2sop9YuP7gfynosuRbZ84quj6pg7av2cvrwAEBsSVUtZ1yxNzqE6vJzmhD7pB86ZrrDXtExNNeP",
  "key16": "21ePcUrjFruxRgNRRB3GeoyaLF7rcRSpzBnJcZmM4uxZEG34TZ7HaZLQMxRQDtBKvbotEzVeXym6VpN1MTV5JBxK",
  "key17": "2ikoEFZ7hJepwBTtQqBoZwWbSXUfADQDFp7nMWt1CTDZtzgJSAUnzNNEJmiHX1Nbdf1dVNDZ1XRdod4RMFXMNh6R",
  "key18": "34DHAV8VdUHfBRoekuhDADfwk956zQapjT63AZcoX2Qcd2r1qfY5ThBkFPMYSn3XUqKBeAK8aP1BQjEN9vz4vXZm",
  "key19": "554FBrrSn8UAWCFFAWUbTdqZrYmm4fsFMwN1NGDV3kXWEyzBJjeH5swVWY7ri6CZwqrnDn9QHbrVgSbv2aKiAupc",
  "key20": "3BSM1cgMvp9iM5uXqvgmhXLS1i1rTfoNEKGmfc9JQMEUr36qTgQLfnBbQvcM2zEzVZ7Vgz14RiE9twXp4XZw3Kks",
  "key21": "4JwBffzd7b7Ue9Ld7ipCnS1hdnZ3TuTfqrxNpi6srf6VwHp6ocGGYNFkzXMbW56rUiDpRGs2o4e2bGJSmh7TLntB",
  "key22": "55yzXRY2nZqHXr2zEYUnn54hJmjh9LMHoP7Qnaxa9DXSfW22QE6DVMQ2sbSELGfH8d9mjJZi2S2KCnsN8tWZYPDn",
  "key23": "ow1k4T9Tj6vq3VsF2ygK8XngXVTpjLfGi1NEaJYpY5h2ffxDAwLBa4FoGV8kLCsjVcxmU3tCxahW8S9JytqEozM",
  "key24": "3LvVmemC8TQdHwFvUvTrwjCeAfyh6BoaaAbHCdawouq7kyFgpqXe3Td9bfZBdVEsE7sTbK2Z2ohfHyTBaCPndTRU",
  "key25": "2jzfPj4TWpYeCWc9HanAA92kKGBtY31DyLSPyrAy6b9iE47VSwARZgWsU23QxsF6Rfv1LxXCP9g788ywfZnmTaLs"
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
