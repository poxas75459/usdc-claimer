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
    "2F7ubtABpMRQeCFMPeMStfTkGAGvcnQZoWiULcCEcK42mcvqyYqwHnaVu9UKkQYdgSodYWAvHTYDyFKuDZex5UGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZMd5e2mM445xXxK6yXEp9CnB3uivhoFk9fUNvWsBbpZJTKvRDPAPEe3gLB9osCroPWmfNLSL2Z8JV21ZL6vi7GM",
  "key1": "3VtB65WhjEkJm25JamHypUFP5ZKbAztkQhhf14aRuunUUBNSS1fkNLNgCCxkDMRPyKwHiMHVAs7WZjHTjzCEMZGD",
  "key2": "5LPMWUFEn3CX1kYEfc13dJCHbch2uZQGwxZ9d69VpkSmNu1tF3eGxNTT2AUWcji9ZMUJ6xnzMV2aRb3zS8EtgdRF",
  "key3": "2QZ2RM1GBpPCcxZb9oUM4U6qRs8uqtQjsjE5WKd5pALx1aqHJYVrXKcGwNpEQ8Bb1jbiiBSbtEgmsQkwau23ajKD",
  "key4": "4W1hqyGak95naXZqfEDLHWR28y7D7PPKjPcSsAM2PcMEnER2CKzQDoxhjDku4F9J4NXacE1SjbWYLPG4JZFWFpkS",
  "key5": "RJWeKfC1Kj1beBRzCtmQk4fpmQAMjy7aV2F7Cm1WCL2RyzoKuRYJHeLtPAh9iZ3V4dCvbwa4yVqSs1SEfYoneQd",
  "key6": "q56KUgNyu9SZawcg2ovkAVurcgrEqCm4AFQ41x7wmKcgjsWjL94c7jVt6hZxsFqDPfjn5nVuBSNd5jcUgjGiULx",
  "key7": "66ctNB4ZxFZ7wuzCMa5KHHdocXkN4AUek5MmWDVcyjyWaHQ5b19QAoto82uJ7KJtcEMJq1Ra7AFaTvRsfJhXV4se",
  "key8": "DQVwU7EM66PySDMZWaRCNxAoeyGX2oE3Pq12RhrCKQbQFf8rsH7ghSmNRr2EDbEPoPFKUoKEMw6RafXNhyaueha",
  "key9": "5CcoctEjsyrr154q8XatNvLXnkBJPNgzYWzeUFgy9kvKMRCZ1tqkVAZVcE4SDBmW6jpVQubDweCPUjAi92BNtn67",
  "key10": "zJk419sd16XVhp3ovyL3ZeQxshjfc2Xmd7Uy3paMMnad3t1RagRcuoParDhkWsHQq9DchzXE96UgdNEV912PEMP",
  "key11": "HqtYq7QFybr7VzWDR9ztxTW6G4nvjHRj4h6xg6wGUshVUuqVVDgBUpQg8LaQecDBcUH1YrU4kXhv47s2TaxXpGw",
  "key12": "EgosN97gpk1s94yFqXCmpBTBQAYzTsoSeNy86JXaEDfbmTSthbDCY8fiiBDfahp9jcNYWYYXbeETWdGs4skzv3W",
  "key13": "2YNyYtvvaUWhnvtazwVxRTHTyjemaBsXYgb7VbW9cHPnzADxAHoTvQJRQ7U9sjbV8PebhMQoTXKzuPgBS12A3Ccn",
  "key14": "3q9dDVHdctQutp5ur2j2uTW4XKApy83JYTQWUtDSpTuWZheLeYK6ru3LnM6Xs3csJTxivJMLrdYR7TT5gUSogG5W",
  "key15": "3HMSmjwNUJ1XLVvgQJ8hkVmgx4ve7LxGt35gQnVQfcTJmkcXrj8qMfoyf5UJ6YJZyG3ba9CJqoo3ZFEKkK4aRHdA",
  "key16": "SGG1dvMSABrsrPbY9ezT9LKmnDsx1o86nx7Kx3LmHhZAiDjW532xLipG1vrysN7WeKhu4BkoC3xvhpEoGG2qQLh",
  "key17": "2dvWuHkDeH3U79qJU5F29daV9QZJySEvtbjKdZAfML2k8aYhYzyQXRqptxsusTPXZYq3DAKpux4a8Kcg3FN94uUX",
  "key18": "4yPd9jpWNLLsLPiFPt9Jt8yYmWo2gyGeXFtZThtXU1FDgvALicpPspkFb1usKrTf9Qo5HAhsD7G116HJpanfCxrp",
  "key19": "64HoVnYSc6Frv6rqHFKHhebC6Qq32xhceaJA37Hpct2KLdmbkZwMgqgDaKgQCJKtRqs8HqbpEUb7jFr71PXCzAHz",
  "key20": "5KeyqphWKP5sDjQUxXRojo5Rc6Q1K5kpPx2GKDxWiFhj6aBvsuvL1F8Vo9NiZegNnuJuPmdb7a7EWnpjrAHTS9MJ",
  "key21": "2yU7GBHWYcZ387QuAsonYwVTRsCKrrWjDdgq8CC92zDvJPefMQsfFXNrwGXU18a1nBCdv5RcC9hZAieNLQvQMVva",
  "key22": "2nowKM5DKd5Cg8c6uMbSVzZ8uEosxpcjdXraHKZrUGktBCw6UCrhWcvL2eQJ2mdBEnZTfHRuyeQL7TArnVRRtHg1",
  "key23": "3np9hA3opxzRF9w3bSssLerzeWDPLzniBTEUX2bpwvB15vjuqMJdVnXzuwwBXb35pmKJE1Yb8UXAjqYYgy47VWay",
  "key24": "5A2DFZoSE6E7KEuNPtEhG6XXSWtpTqTSQMUg61SNU3Qh8Fdr8p2GkbwK2WezEb9nJC9Y5BHtSAU3F5RtwMNLE1q1",
  "key25": "vA2qX678ffe3pua4umQRfMZQ839rmy4cUy7nBLNUhT92FNRPy1Fqa6Y5cgoYyr5v6Pwuin1aD4825jQtQQfDL7E"
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
