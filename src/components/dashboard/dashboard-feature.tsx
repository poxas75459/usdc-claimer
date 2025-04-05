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
    "4VP39ZHzbJTGGgHKXc346P7iC8cuCUFgiz1aj488vo9QApvn62b4iPchzttu6vJMA9BUVirZPeokh7FkJKrwJYRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66JD6RhJfoA6YnFa5FPFbPLttdFzkS1mGMJruAaguX1Y1zrsprgN9kkrLAEvJVqBwi2mmZ4huS9u9gC4i2vHDfeg",
  "key1": "qJnBMKKLZ5R61TKwrXsZ6pm8Fu5j5CQBqPYeeBMH4FY3SaRZwkfYShtvLtPtRFe8rmbW8gciPhsUG7ee4Vidhtv",
  "key2": "2BYcaWrr5qcdRfKNgBPsAvyYsV3TxMKTht86YZrM58CX9JGEUzy735La7oBNzyPGfUbM5CETzYXERzQqzEcRUeL1",
  "key3": "47VvKhUWySz9QkSWc9uygY5SYVmF8J4VEp7M1RGP5JNUQEcRjfcr9mrBXRrUuJGdEk9HLg6WbGqTzhywZwJy2fJ9",
  "key4": "2R9TjcjGFUAgw55koa2mtxtQTYaTr2H1kiNx4eESpNGD8uGdtbFcyhGLN1m2jLaJjas3PY1VXAkSWCUAS6CU1dBf",
  "key5": "4Vu5SSV8NXwe6NSUz2uE13NQCvzKauD8iBVxNdN6MnBk4ftmW8zzcXjrzAozWfU5uKRtYjQPeDqrgora2copbkAG",
  "key6": "5bKXPRaJ9CT3ueyz27YggvpWnoC7j69mswPUqea2RYzmaE7T8EQRSq9nCFzs9v1FBD5yPgtTrH11YVRawn5UKAdV",
  "key7": "5n3P9vJ1d4FiFaEg49VCGB6gLG6K6PUjZty2MZZEbi7GCFsr5nhLRgziyzTcY294oahmxH985taeKNdmjxJ5AEmn",
  "key8": "5m456Hry9sXyofQ1Y25uHhnqYvrhZnjfhcwLDLkvtdRSChihL7c1qTH38HBeoWj3GEdZsYksER8sG4poLCWSepc1",
  "key9": "4Df3BwQZtfAc6HKoZ57dVRPsksdZTiGWWufF2GhxmvzEQ4QsJ9VN6dd8yMysf3RvyP5j3eRBQPzBxuy3YT8NwXT5",
  "key10": "3m1aoTFmFX2aU1eYFuFCeHoKRCeYEVBA1RHTBA2mctm13AZE3tUYJZw3jbWSUTj1qvcsUbLXPn64Ya37m5LxubCM",
  "key11": "2LodHtyKdUbEZghxpTenVXzJfpobSYhCtiiLgQjwyqvcMwbTE35mj2xtmkgvX7KRdUcxPVDnDGtSsSRZR5iDD7vV",
  "key12": "8TE8nqUrEBWxvHJ73BMrNEDcKbphan1Ks8p95tQCVdKzh4GgZwAa3K49EQ1LiDLScecKrpzjNDsY9weivtkhJ8A",
  "key13": "5aF1SfZgGDpTuPJWLyZswVzodtqGAq8DnDK1tQXyBAzfQJ77ddWt8WAQ7nScscuAyt8GUYdfnDTEZCaPvNdMkdTt",
  "key14": "WA8Q3AtKrsVUdhaCd6cPEusVTtFNAewoePuNKXBvDaZ8h1e8nRNPMQkHW7yZmxuSmXafyAkvvCWGhYRW28cAo8h",
  "key15": "5KczkXiwc7ozjjD9SQQ6dPKv7WGrrdgmz3rapJkLh9CC9kJMjq5mapWJoxZQMdfXeVdvS2Fw9NLRbgs4J9QfMn5N",
  "key16": "g2dypuuvCUqhMURHiYcTzyyH8AGjcTHBLdd2hDAvkwQ7A51LVtDeNEwkHWg3GE7WtVdRzFNkgpCyosLaHTeVe4d",
  "key17": "4sAnsriqhGq34Z5NSwjmfXUveDZ5ZMx1TLMUTPEykYFbUNZ8gWLtv9JCGrwapqsN6UAXEkW7KemJ1MdBrBxxuaSQ",
  "key18": "4vYXA1JkvzK6WG8MZTNSbiXzT9Nbqk9zdqo1RJhZaA56Uazcf6BG7bNcTVbC3iVYRmu3kkNY9cC4W4mtQnjWVQRL",
  "key19": "3GUKPWx7a2YT1UadsvSvuxi1gkB8zpJATBvWvCKrBC1zUfXrs7FuB1L2yGT8kLGPV3LdsUz1uVXGmbruJ7pu7YKc",
  "key20": "57tfyQ95QiXZrHqvyrnKcaGfyg27svQhNTS3aotx2K63LQRX3n2Nd3Z3V5UUzsWnmYXr2Z9ehWBcCQeGAun2o7St",
  "key21": "58jqav7kURWVf5uRLYrZbcTiS6dfRwEjfpseMTniVN8PrurG9J4gLTYMUBzJNadYJSqfcELgoJEQT3oXTar3GZoN",
  "key22": "67a6PmYLGcyTjGZMep4qyRt6QwzaDgbJuqcDkPPf7GUS6LWinyVqFgR8S4KdQmM2SJoRVxJMwtqGNdibaWcsn4yi",
  "key23": "5VLm97iCUMDTE4WT7AamEQBPzzqR5xw9Rb7UYJ5tGn8DBxEudC1NEGpdiDNgxVySoZcQeHrGk5jxYTzB2PjJFBdZ",
  "key24": "3froykKosyiMkdbaQTbEGmgstG4AavB9wp6Rk8JDFKTRyA1GXbHCcWeFF3P8fpRcUWVpiEvuRo3LWHp8vMGrq8js",
  "key25": "2Yt1p9qZC8JQoHZsycUVudgMasmUHPUzNHjgiiw8eWEz9AA1KVb3zv8znJeAyPakHMe7csCLCE7VuyDnSAJtuDTF",
  "key26": "4wo1RW4HD14zLrDYmAHcJenLJio3MDWA47qYGtx3ipTPtZRQP25pPsTs9StddcD2KafThZND28mKZPq7GZDvKr7U"
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
