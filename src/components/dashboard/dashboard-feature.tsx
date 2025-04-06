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
    "ZPANuXdjyUU9QhtZKz6bzUWhNskSP61h3TTWykWAGHdCQiyxPvuXAeVJnpKzaxnHgptekWNN13hiCSkG3bYvGSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xm6YUgEmGizEU2XEzSvMUuaydP5ABeed5xJM8XHqCW18Utv2867gjE1kwkEgydELVSrtrE2QJ3iNKVXgnmD4iBr",
  "key1": "5g9QJ7x5EXP8j6raa2ouEM4b2k9kuuVma1bTMYA8evrrUarNRJzU9dbAhb1BQSmuCTyw6PymqS2w8eiNV3wP1xjE",
  "key2": "5x2m4U5mPYVJzLqSzy2eo6LcL3a8uUk8GMwMcHBmKSVt7Nprr8zPBbgGbGBYqAyBMHHJXYGg8ZKZhKQ11TZd64hV",
  "key3": "5TDbmdDtXDxNzevsmywcicGGsxH5fpfPCcVfzwAi3eVDrFfsZ95byAvRdRR5GJUZKoJWwty19Fg6qYTtuPc2L5ad",
  "key4": "Vrw4WYm79S6oyx5VVWMnxYoZXqrqTrTCyKasPZeKDJ1m2edcYdEgxRF7FiAZq2DbZS8susL6oTxpXk9sbkRxLyV",
  "key5": "4pS4r6xBHuz5T51XnhDKpSwqdJ2aPBEdUfoNLwr2dEYAiaFv73VqzKt8hpdu8eCDRDXrmjdcH8LbFY1wjzCvPwNV",
  "key6": "4xAw6PzkEPSpsaV8J2PEjQqxGo3vMNJXfZrmwzbVMaGmBySx4dJkbNPocfYBh13exzGb1gvkbTMR9xUwNzfw8QsL",
  "key7": "2DHFvEDuEBDVFHygpogWbqX8kxi2Qd88p7ptdRKnrWghrFLwtFaZBZDGZBzzTLEgWHaPhoCJGKbo225ixZkyaMRj",
  "key8": "Vc9XfWPHBBGw71oXTSDYsNABsjKd7XrwG3aqfEcmauJJ8qfetGZfU5bg6w47bbm756N8oZ5b55BSf6Z4JuAf1SM",
  "key9": "4AmfszxExLGDTTEku2m5Hh1DAjnNrD2Mwky8tDmczTocmoBtRPjrLSjT87E6kvrW5hsMSxCJYZBaCTQ4d7xFEsBp",
  "key10": "3gUxXKBYJpD3aq1moXbjpq3RpKSCVHdaSojc72ZeFSSk7Vm5gumHVAqbHAodvCuSAbQQK5J9dh8PzXTnEGVEW2oZ",
  "key11": "3xM4L5NdGkuPpnqFio3eLzvCEkqu6PxYGxwvm1xKNRR9vN6aU2dk1W3vkuRHrrMb9316wAojvpEXhJKYpQkcvzph",
  "key12": "3Yhf3mxW4ZEAemWcBp4kAmBp1H8dxHbNEvqHqHFk51a5GMwp7RanSKP49zHKWxHpe6eGHcBtnSGPRKcAKagTPVPp",
  "key13": "58EfwNr8qamXH1HJAXFHrpvkh9zqYxgAyGg8PDakrXJ99JR5MULxMH1bu8MSHt4UokmuCghBqyWAy8dmWGtsqeLu",
  "key14": "3vMtUcWcBqtGzmDWMbtGGCc12w6BaPZ6nuT6kfAhoNQbg1H2geoi8mKDREH5pFoTAhA95w9tfuAY7obxQE1Pymtc",
  "key15": "2rsArz7rkS2w1hYS4hbwipCTeDiY8cGSsQtj1q2vTvtDcawoYVFRXDucNa5YzjzHoMkFcwk69PTyiQKSN1tSRLAb",
  "key16": "3nJqVBhdCoJZRugPedvJr1cnXqnBmr2xbugJwXQHdEf7b7yz3hG89LN6SWrqTgvCAiro7bynZzv8hh7Eq9tpoDHe",
  "key17": "5zpmw5frPnfBaGACepHTpC8JqE1yYgYY3AyWBDq6nCbus3oYR185446MPvApLg7stJE5towLPErGzkToYmFgchZi",
  "key18": "25p8gEFBWowGi3uuQXTf6MxhYHoxi214mpuDe2t66Kmy5Wfj8gF6fZ13eXBJGSzKT5NJa5sr152Qpd8LiMwWHHz6",
  "key19": "5xc48d2VRv4mYP7LXWdsJejyT5njLxzsBzKW6en1H3a6w1sPh2gaf1p9XkMZsCj8eDdqk5XFv39U6uw1vUt8pvjK",
  "key20": "RtA6ERdQxfhGWbciPM4FYDv2M76WERhhK7vf53U3ARYuL2XUtU8wELzWNy1Q8T4yvRdUcUJwqE8eeAeUYp7h4cm",
  "key21": "2FEvywxcfoj6StUWakFLoWsPoGGVCPxfhLCWqvp5kj69QDqqTUM2ngPNNhxqJpga3agQqQLDcG8SnieSmPCfQraC",
  "key22": "4q7SEpuvZDhaFp3jgjWggTKjcSTRMYHg5PchRnSWMFU9niF57bAvi6hi7nceawaFNKDADnzzTPXaWtNJf4VdyUQ7",
  "key23": "jsseaDWREBZZGq6KUE6UkvwQfVkR9uAfA48cu4aVyBXdRrcx5Pe5wcYmBuEMFjmnsBKan28gLGWEW8T3DBj2v2B",
  "key24": "4eKnqVpsfR55pbJWDk1vP49XhBqoo6YGktqSbC5ckbVNN8vRvMNxmzdBEhBpnuzwMuVMmSqMhpgDkJn1mHuHaroh",
  "key25": "62zZkbCcbcuDiDg7NoDfwmk25cb81H2C4GF2WKWdfMGobyPsFD3q4M1ziSgtLUj1jWbN7KjoBLRBn4baRvUGfmhC",
  "key26": "yuGdskpVTtV1BHxevQ5GYzB8aZZTthzymhGAUsnjYB2AJDsX8d49dR781ouSbrkVY3qRaQYDgYAWpHso9PcC4b6",
  "key27": "55R36cCHLAVoFKg9XAx9djY5TSefuSEF4dWgUc8oQyFZFX72eQQ91vzuhxMpV4GzbQ4pxBS9pBMzMexM3ki2kaKv",
  "key28": "4jKF9wY48Mu1AQUHmXtBEjiExcwczpR1HbMrX7aRhmRT7ZwVbRmWtGyKbLBajPH5zLabBbwkjCq8CSG843zH8tFi",
  "key29": "vm64vt9xBmZtFLRpcfjaAcnoxbtFvWDAyRAPaHe7PtSKnwMPeWS8woiiox7Zg1W6a4n4AqAyQX1EDZLse5QcPAP",
  "key30": "5vhtkrUumLAEgsbCXaoV9R6v3ZmvLuaivTWBEQu2QhFsUGFsZE8Gt6TErRR8sErRBd3ESJBjuxGNzZYv9BcfAmZW",
  "key31": "ToDsvcyEb64r9QZRALNzPSvtT8w6WcSGHwxBDwSPbuRrbWLbpMsNdQbtQz1UUCvqWjMdCQnwj1LwAZagvWwhpNE"
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
