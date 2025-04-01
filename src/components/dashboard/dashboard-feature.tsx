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
    "BSu6DMt5Z3YKqymMjFufPWN62LgE5M6YFfCzMdsjyT1kG59U4MbbN8kQwPq5XKNWHYrWt9vEavegCdZeL7Hfp7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mmqB5ygj6CcKF65PCBNtCEgEGGahCbMK456a1u4z1w7yniJBHR44eR2PpryxQhzf5ZTSNPaaVJWt4BLGx9pfyLt",
  "key1": "2yEoXd2v2HQ4XT11WV4k8aSVNgQVvtqyL8rbE8bftvXqpC4iibBB5NyTNeY4b4uVpEzcJxSyR1EPDdcoHxrxWQcZ",
  "key2": "2ofJYdCbksLgGKD8ZcQzef7GpfTeFkvc5TBWvg6DdvV33iApidRuv1zkVB16Bon1smwDMUQfSERJyZVdXbdpGEy7",
  "key3": "3RoRseQVW9cXDj1MNkNmeCpPNvBY7ppn4pHQpgpozzFmpbduoyBCCnUciBs6y3fXijfYBGZdmAzVjratveexxDUz",
  "key4": "RApbKEhEqE94cLah5MgLBojaWrET9eaiNTGPHa9i32rqTQSLRoRM8dNHqnfbKoMcb8v8czBvTfRCTTKVtucmh4m",
  "key5": "25B1nV4YKtvtNsHv1GH1sEKf5jc1ojBsJURiRNHy8eXixnjAtUycykgpwTGWTEhhHsTPfdswNPdpgGwCwj5Uyy7c",
  "key6": "5nHTLZToBxsr63s9a6UU8fz5AyLUhDor98kuZ9b2fJh5bKARxjkpzmEcsDA5dGeeQa4KKbhLFDoeJRMqJjWUhAbQ",
  "key7": "4af175t6HuMHEu1Ldu454i2YEw2smMA4JJCBAyY8f9DhTPr2JLLky56fegKahP7kBzygtDFufhmBWEcgLMypexsD",
  "key8": "joCJjr7kygpjQLVkBBuoN1Tp63LJMCmfW7t55vHsDPXKsH4qp71jJGUaj7Dvg4SHnKmriMXuRQmUXdwCZH5ExXt",
  "key9": "5KxQxPtjGsJJWpt74o4YiuDBxvPGyuGhEdBGS7rtasqBpCg88SydHgMX21Rw1AfMX6J1zqmDufpEnDwvAGYQJNXn",
  "key10": "KgomTjDnKM1SQRW5AkFjdY2WhrgrmcXGq5ayrgTEpQnG74fPyfU4jhqH9wyqbmwy8M669utWtjSGR6YttZaBiJJ",
  "key11": "2Wxtztv1p9N536MymdTVLRMGhP1RPRFSJ2eNWYgc686ehCGL258NdzKkc2AZ6t5wieyPoPoXkxebbYBATc511ZBM",
  "key12": "apttQ7pewR2aAZaJ7mMhjHZnHxt6aPED4gb2WRuL28L9p1EczeD79K7MxYn4THwS2V5yiRLLAdgVnw4Axw1GZsg",
  "key13": "2qRgyCDZCgJZ2Xn4i76k9EdvajCyvD66bZWNSd8AEALGmKS139p4i9kKboNJHVfvu6u2qQchKwQYAuLe2fAbzTor",
  "key14": "3SRrP7a2C7r5VmEGUUrHe8UPrkeJz2Y6rAu2Rwz5Hz7U8cKVpAYeiaN7YjzLh8Lyjs4BeKAHVLMRq9GhmqcS8fSY",
  "key15": "4Eaa2QM8MxTg6fJceSe2WGvSAw8nL5a5bWR3M2uUtaEzg2MqpeXLD5FnxUkoVgNJ44oRvraw3PfXGLKaMiDnPAPU",
  "key16": "26ABeyueoTCVME1fxHeNCHc8gU6GjJojDZWR2HXuSDSnV3fjDBd8W3bxfo53ASkJtjYz2m3kQCKB8tnN58esYBwe",
  "key17": "3RwMvNt8WMe2dSQ66KAEZMTqzRTZMZdYjddkx7w3VjyKEdQXT1M52wR3CMNMUxzexYNr8uBMd3x8fNZkoWhAiuD4",
  "key18": "64R6qddW1U6auEwWJutXkJeQSt8DuTfqxD95xQnSBUYAvJw12XHq6edPS1RJj9ZSoWVPTbpr9bMZ7HKNkQC2CoL3",
  "key19": "2bhsxk94mB4sKzzc1C3V5j6uQtmmgDiW5wcHxRCCMyh3kGsX2EsdyWHS4X8PvWLNG4JJmwTrpFAGT4vRrL2snTCn",
  "key20": "3aEMaVVKaekhZewLWrLEjsBmjkPCBrHrf7RFm65LjtiZiCKBEtaBiEqQQhx2Zc6aB3LEfB8bYHkjMpx8rrqZW8MA",
  "key21": "2mYQcVQbSS7sQnK1mts3i2pTE4QRe2nTe84kY4JDQxsGa98bLGW8UKehiZPWG35mWzruRhX6guSgUyMT9vBwgASq",
  "key22": "5HSEW4LMPb7w9GV7YpztRk6kKDat6862LHcSjvAB39F99zH4cLjvRLBjuHdXo6dJqJWqD8PY8YN8BeL1GCQryGFs",
  "key23": "5Q1HvFMw2H822o1vZb4BP1ycaboqtJ4LET8UHTA7FtdcfgBKwfecqdHbFVxnF3Y8qGEiPn9Kg9k4jz52rY7NiRzJ",
  "key24": "52D5Tas4juYp5WEmNEiZf8b9cKgapES5NxPgs1bHMrgkcNKPZ3hBQiC2uCUdTqJ5PJTzPtNzDJAUbFj99hu8pWU1"
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
