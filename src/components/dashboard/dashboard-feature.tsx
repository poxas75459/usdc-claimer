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
    "4hVw3WB5V6DeFQLkLcrVDnjXpTZT9QTYShEokapt729jb2RYFFGviejUB1CBp5gXRD52ZFT7sHgcoFnePzmQ9Bzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5acKWFgic4Ru6SSUsHXmGwuF2vumc35PEozFoSkiA69694im2BK7TghKu7HLzbj1B8DfdBxRyzNM28LMwfhHK22V",
  "key1": "vqPwqnRBR9NBhkHJdNbV7vby8JXcc4h78tm4fAANMdrh93opxPFFt6kZC3d711qdDSsYGb9AzWtmCmns6gF8qsz",
  "key2": "56yxvHmF9VFMHyhnET7QxLFPaw7jWcFTQMpnExCoRPxU29B3KB1FAPbnfbyfEV21whQ3xcAERWr1ZHYn78sanq9J",
  "key3": "5Zths7M9N8YmV4R2rFc4JAwYf4JqqEk8NExReBWbNofhe6L6ZZgvJ2WLCPzNy2EZgabSbcLUa3J6AZyvfYPDaAZ5",
  "key4": "472MmPzceGNTZe4GHQXbs8pynVYyet9AQjRwcooZqdCS6WKkQpyUQpTH9rQYQfsze6yq3GTtentXdPBa25qjNTk3",
  "key5": "2C4ngQ9BqQ6XUTJfL9cBebqE1gJswmadsaHMEx6ZpdeujPWQzMu27W976RHypZPEi6J8z3KtA2FykTg2x7DzMi32",
  "key6": "2cjZsB5dqjrjQDd7P8RMjm22FtzdbYqrz7LVSNmNqFR5pnaZNrQkoFQEBZb46iEuLP59b6mVQAbAPR6k7DiBWwmy",
  "key7": "5BrvyuYecBbcgqSNQRKPMRQPF8Vpo2nQXW3y4kUmpBzfNs6uNQETESn2efDzz7eqwT2Pe9pbqaSDvYe9UwJJJ4rz",
  "key8": "5yAT7dnYSwEEJuSLZ4TgQkKfEPRb9g9dd4caRRWZqkjPJyvdT3zf7QXCP7E5rCgDSqqBng2ZRtLY5KxLRC2d1dXB",
  "key9": "3uaegQSdW5g866QgYA5PEEMrfjb9hT1cKbXiPx6V8bC8emup6GTMAK8BotbxXaBMzwmNE3sHiYw2ga3xx7XCHuc4",
  "key10": "4FBnRRPHaQAD8rxf1BKqrb9j2fiUNU8exo1rHUGf6M7YTGrbjLMPf1UYQpVHGbpbwJ1cLyMJRfuKTLvyEdZWcnbB",
  "key11": "2any3k5TQuCphdMyHF5wwXQihSSe2uGkt8ySh86qZbtmhbG5YMVJFkt3HYukwjTD7fBubia5mouUKfVuR7nmEDoV",
  "key12": "n8wp1gZ4dHPNasAhdKMzJysWjzAVDabYiJkKJ1xY8RU27v6JRndJFDKTyaFkfX9ZUi89GY7p5PnCnoEALqagidV",
  "key13": "5n5h22zvPCqb2TZjbM2pQp86brrboV4XMatV2me1dd3gwvtGXg7sJraW2oguSKTHRqXs9Umqyoir2TE7NXx9NwGF",
  "key14": "4Wq6rPnCfe6gBCmP5oQvPBX2AuFjdj9637ufwkZ4jRRwVNDyHeJo8CS5nvWNbBYL86vYqS2zecqtWDzXBha5wroK",
  "key15": "3cFLaYBd37fXdtCanJjUx9623Mig4yuL6XbC3486BWojugjuQxBGWX5h2CwgmEkPi2bSMgchG4dsRwYKGAuFB6cJ",
  "key16": "3tE61m2sVd18ztCxU9TDzJM2Wh1iQDgj7aPcCED5ACuk7zJHva4oyHKkzz5f65QfDUQYmjH2k25dCVM4DTb2BcDe",
  "key17": "4wTRt1r5gm7nZPUK6HCnnKUjfAguL5ZsauLYsrco2Lb9PSb4qjpwi4w4DuBb8cLe7tWt9WmzZwdrE12sVmA2ajqm",
  "key18": "5gP5QRvyWrFnAxhqEdzUCpRrSPMEW8ZPtzKP3Czpw4T7sigQ63M9T9hDSLMwyG7dWNhMBLd3HWRVybA6BofRpmFz",
  "key19": "2suPLZyEfEB52suzbsqNjozN454Fg34rV1kNkTqHe6j8frEegtVM39NnPMebZpnMhCwDyQMihUqJCDdkxpyQp2WG",
  "key20": "wt9RLwntYgUcrvEUT1LRkXKcykphCthr5UVR5mQ8qVZN4sASHvRaXym3rHyT3sNTm3LPjjD7piZXXp6NEw8Fcv9",
  "key21": "5EnvCe8YJDA5YKpmRJmstmACzqauDXd6q7WzhRLp8Yew48yMkkmLpneyg55tjaJ5hrstDbPubeuT5mG6csURcST9",
  "key22": "2ZeHdyGnjEB59bUmYMpDnKAyH6L82mQsYW91Qm4L2Vc3Wwpbq4NpBHjHuHoz6h1Pasgg2GfKrGdnUQvfnjG37rdv",
  "key23": "22qnhsCQ9Tt8rzfipCM34mvfZbX4sKLuPkLbvDnwTpLg7keVFu1mBU9JDfDkDgDk8RZvvyxAod4UxyeU2RyUxred",
  "key24": "3Vedu7Qie1D5sXzv4RbXXXvNxNUvGwMjybm21k62qAfQnDzVbpwLVFiXa5Pwe6NyD9rnzhpWxnn95MaMJS4zdfhF",
  "key25": "VxpPVGH8kwSbVLHKWyNA9uryco3BywDHJvDTjDyeuYNKrWGZ21hkPcqxoSwXnJskzMCbPXUPcpCig2CEf3HXJTD",
  "key26": "4e3jEmyvVjE6JPdnTMcUkPQWjKkQkchhDp4rqM7FVvXK5SYbA9pdvRA3W2pTTMUHNdJvKvCsvzbdqYvjv8sKo4ES",
  "key27": "2ebfGPnsgTqH8jypGG49VJng9mmhWpMgRWm45mE2iPyfPDxh9pKhYZhGYrkRJnszUvNt1HL1aagp7B25LBAmqERP",
  "key28": "4UxABffbXThJ1qwSpxGf92rXbDwEY8AUFG6AQTDr1JMp4xT43AfbFRCiHfwEPXFdooK98u1kFFqvKU1b9QiarDwx",
  "key29": "4UmEey6B3sNBqdVxJSPZicc8z8pZReMnJh29diUUg6b9qhL7vCb5rKZ4bJUhPMqDt2morWH8DHZ9fqKPAaNEdbyv",
  "key30": "2VdW1hLXEDmxARs8h52fgFdUD2j4ZydWfUWtmDbjqm56vnmWX8BwaKzjKFG4HtgqEzqH1HX3wDqDWiD8M8RkW9yU",
  "key31": "4YYwTqD4knKtH4s5nHwAdAwEuCP4gTtZtTqbAEdwBsTKW4teCzy2q96x3EehM4dAW6NoLKGA8pVTFQFN5LoWpUtw",
  "key32": "4gVDDSFChbA4JWUypP4hMsi1UnBgUzKefKsb5J1ACv5g1wWoRNsSWVQzrh7nPE6GnzV6zCXLzQrwM9hVgqUPbktY",
  "key33": "4ynSFHiE2t82oBTLw4SK1HEc9mnbNUyCoR7NFyWMG5fK4szwf5yzWVP5FNy8ig8in3vrKF9VNXzgHatyXWzBbpq5",
  "key34": "67artVE7JVJ5UsmhCE7ucjykZHtMxtFt6XCHsYsDbBtRykbybrWpuXA2qafpDWNmTEhKZW4Je3ostMZc4FNLD9tx",
  "key35": "5JrEEJ7397kpkso7tBYYR6XqRKuC98C4wNR51fmZUHJjMAt3bzVB8xJA4QKkoyLFRXS7uqtaxcbQHd7eLxxouMeL",
  "key36": "5YNyY5UJvqXZBvVDKh5i6aWudT12yKprZnS9svd6Kq6B8oLQxRKhgKZqwPgQNFmefgnfxSF2zRJjiEGRRu2FYpMC",
  "key37": "3352aFizVTKvXQFrx4VvVwDsXEXCKi8JoPFrcN8dyKgYC57DsuFmiKVBMwoUCyN89ypBUmVDosxQixPx6oFP9bmW",
  "key38": "2Sw2rVmNoSpwx3hhpKRd6wKzWP6hspeFpNuatDQjxwuLVhy8TjtmhLKes2BpnCzrYi3XtteDWj8D9QpHHstqGBBz"
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
