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
    "3KfpaNscqCMmZ5LRpCrj9KegKYcqLpqN5Nh6Ce5UNBgkuMVfycpqzfyUfP3UBV4z1h185p6V6FqJhWTCMW5BXqWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JLSrJpCCEsmV9CRjxjj4Qd61X9rKNXg3MtTMP1UDFp6Xv9wUeC1VUxDf9Q9Kn5FZtFjUDXgLov5CpzeUzwNMj84",
  "key1": "2pAJnd5wTSqgPZyiJaWTaQN5yBn5hdHKZcrGcYDA23GGnEiYjpPsEnvJqMBXNL33SzxBNAAFpuxJEdKGbwrigzWj",
  "key2": "sUoP4opqbcAeqACQDN9KcxD4H4b2ZaUewWqCV7aazuQxVDZkHRKcRxRvVV8uWhQPnNChiKbyxscGPpGtZ8bUV3T",
  "key3": "45M46Nvjb3yTrLuUz5Gm3aovYJKJxL8pPWfgCxmmKWDjttGEEXMbi5tFaeEnmmBBuRMGeQLWKMJUYA7ZDkveGNYA",
  "key4": "5LRouLd5a46Cziu3N2GVeo92FM6d6247DhD3t16dnTT8miW1sEwrzBhvkuX9yxa6nfY9LBgjHRUU5cAnbhjnonoX",
  "key5": "43ujng6x8DAgTXq2atiMLPrtv91EDEV1DNnafCJF7crF1zEHhP1KkBvkEUjkhsq3fcHvEbUxPXqNytB1DPSLPNxu",
  "key6": "4jNs2CE1mGwzfWHe1nwbtunsoKTiZnQdszJqM92uY7sg6wh5bhtbusC4i1xiG1e29vMETdCpADWokHzmCu5t4R8m",
  "key7": "2b3NyngzUZa2TA9BvieYjhZyr2uTgiGmQDavnoaVLFEBm9weJyUjfE3Esf7A2jbcSZGsshay7ZGPmq87pxd1bmsg",
  "key8": "jG3D6GMqVkDyrGGyrcpW8TVVXoP974JtmvE5EG8PRE2cmoX8qrqpqbK9ZS3a29TceVcmUFePaNWFj3N2aGXSrj5",
  "key9": "4AbXzfxtMw7goDvE9wjUPyjFhsZvUykmnyfwHGZmVE1DvDM3UYQX3ZvxAvzcGkEURpr23Mg8mk79nhThGcQCfeb9",
  "key10": "2P9jkNYWz2zxVGgjZAdb2tkroUn5b88VC6wGkhhMVWnsJGPcUCBbUUTnQ7JxgVMbbo2VsroTQEqKJehb15tAuNrH",
  "key11": "3r8p28s7e3di8GbwMT8QC786FoipMCapM4tSob7KJ96dGG7SA2SyEbrxhRkWwJvQPxqd7oNfrYCCGWJn8pH1Tns8",
  "key12": "2VpnkXuLvq8nKqTK9WKQ7R8X8GQrE7fzmVwnHDFfSTSRTB67LnhRr8vzCn5StkvM1vxrr7ZSBkZEqGUQZy1qBWso",
  "key13": "2hQiSLMEZEp6yt7n3cV2QzeroTVkrRPndh55LA9u7SCrifopHmMLR179QyrfYRnDk7QpBRjCTLw4zZgujZfVCZLo",
  "key14": "4Zay54ZfU39oeDw27VY4QsuBaWDr8jnugcdSSfMssmnQ3sXorWL2Cxf5ZgXraed1DKNBmR3P7ydxGvSMowUczYfa",
  "key15": "3ykzfYxvnB8J8RGExMXcKRtZ6biWV4WTvp7Q1xgMuctSXizhxckssrTpHPXc2vo8FQ6tn8C27o6KF7AGox29hk27",
  "key16": "LCjHkDGUD2yEQeufsgeuDVC3CRYjVAE3KUQRC3TcfmaFWYroHzizXevuAs9wYGPzvy9iFviiCw3wEwQqKvTbm7e",
  "key17": "3ZWVKG1dVV3sdNwP8oL3bbzCB4YH6dTsVZXTrPDThcuBuVEoNyoPEsNGfRX3W3Ekaa8F6bmPnhoHxyMy4vZN9X8W",
  "key18": "3uNKM3BNatPL3sjK6KQhGvHAEcjrebN77qai8zGrqaZ8w9kURtF74QiatLNbH5coM6QEgX1SquFiEKEsjX1cMUwX",
  "key19": "3WdN2HpDma7k4t1XNcvjuLdM42eUvMxxUJBRF88rFZxxPFEZk1JRQSaQKo5U2GhRGTRhUbdmZz8Tzm4593QZV2Ck",
  "key20": "329ZNxCKuyyuj7X7uadL2nyA5FrB5jgPHRv9JnQb4j2HVoGV2XJtgLKQp9nMDFTdK7rPKUsuXufTnmRhrfTDoGjn",
  "key21": "3ho7qHEp7MZmzaw6WP7TpkTjzV9Ake6b42STEJ3oV8GZeQVuD3qZrcyy22a2tc6JcvE8oxoEbiaENgqqv2Zo8nF8",
  "key22": "5X1hf2w6pQcNAWtjzFxxB6xm86h7Ks2RitLCSFavCLTqqKUYxZLXUCzYNDZ3DSibVyKH7CFw6RdMkWEYvWNEkx39",
  "key23": "kbCupbY38XB8mND3Mhs9VafCNpxZnDLJD6d82buXyyAuFj38J5WaPgnqiKziueHCcR4cen4Ztg4Sg4TXiwGHH54",
  "key24": "2y3DH2aePCHF7VquZH7gPLEmHWhggMh26dF3K4nXN9vM1kuFQDbrWxKyqqsQg8d4iP1PW6gkruw2QiJr5yvGfJE8",
  "key25": "3pW4KQs4gt7iXuMLUt5ZZQLC1GCjKpb17i5NAG8fL28XUPoue6A5Qs1Sr1BmMBtsJtcqgZySA6uExbJ6jPEnmj5u"
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
