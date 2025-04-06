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
    "2k846u6XUTZUtQczNWg7d8gfCYZuT7BMGP8Kc5pevSqYURrcq1K7QxPRBJ6kDp3hZx59J1RgFtc2tttonog2wLjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HqAAaLAEJzQoKXDXzN7fkku88zePz9ZRft8ecGU3nrkXXFgL9VGPygpRarAsBU5WjBJzojMq4LqSjvetD1poDfw",
  "key1": "5Ta3Fdh1CZ8vhdfjpTTXehwxvvaU4Tk3Ks9BXfQEaQcuEXeDvLqjthc7kXyonMmznQFaEbq99DkVYSTKCCWEBDXf",
  "key2": "5nMaStYC62kRskRJPJ5AuETuUjwj5w4xTN2oaxRsTPTDNUmuaWtsgQBAcnv7i7mpKZpKAk8HQhWN7qGfqLDpwHbb",
  "key3": "5deNWxSZwp4edBRxW7nBr12TWLqLPGy9fMGuRU1gzcBfCf4vgnrbfS1y34wmWXCjucHJcrDkcU7ofzEuqHkQYKCY",
  "key4": "iXdDR9JWSxf1cA9e2L2i3MMn4duBWqNfguz6b9nHey9ECfjPBo4aevbobQ1G3taV5iiLHquzfrNeoGGMBpxxTQ2",
  "key5": "2B9C2mZahdBZ58wWiUFVBqf6xqsXHBiHzbbrzzgY7SjbA3VrH634U3yrwSYpW3NG2tSfeAM5sQpT5Lneq4ssKrPd",
  "key6": "3vJnV81mpmsQ1sdd7rurRQTyYQJvN7565z6EPe4tcNh9yyaLP2a98VQY2cNB9CsMSk3HeKqJCXSNtWAL8qbRzCzJ",
  "key7": "2icR7d5Zvo8R3bojVKgYavjPXENXi9Ykfgi5UPfYF57CvJB5Twoituqfeffd4UZ46J6GMZLpcctnWhQUQR7oRgGm",
  "key8": "2DciwdLarcbyb6Tkf1MosuX1geYJUu2VvmjrTTyZ16vbzwhXYrZjUWVTdxfnaQuGg93Zz2gE2hn6bXETd1wRzMrz",
  "key9": "7dvNbaybjcWa8femKwzAreMF6buTkH6eH1FSLMWLd2xQJ9QbbaFgS88kRm3B6QBffsuiiFF1rnhLnLdzRgNhk9V",
  "key10": "4mmkzkSCT98soYSBF6QXNgUQ1wJEyki1e1y2BpSKzTVhhd4erjHKEF2HTN6Z8TBYKnuU3kjjQbFG8czLWQqwy3SY",
  "key11": "3W5w9fCiH4xPFwowEg1fMz6PjKAgNngGsPh4AzWseYcaVyGTnq9JgADwE8k5iufabCchRPuy4pUvUtBgZ5jH3fPL",
  "key12": "MWU6HbqMykbZnK8DJqaxBgkBCoAjMR9yQdjZuC5wzueeUcxoFWHLAYPMrBcxBwUPCcaDtAHrmeo7jLGRDDsZcKs",
  "key13": "522KfZqdoVgxMxjCx5Nvb3XCHfLNQi7o1Yqy2rqaLh3u9u4L5KSseFGx53aTPXUXo79BXgo3TPhWGR6hGFpawFt5",
  "key14": "2Qggbr9FXLqJqh7yyHCXTuX32Sdxg97KQfbcg1c1ewbtVpyHHNyxdn6c8Hkn9mqKqXr34hVQGL3vFyFXS3NNK2xP",
  "key15": "41NtFPUKqR9yQzMJRBGDvrSmnukb6RHQF4QrgrgJ7VDMa9UvQKHBh4EZKwdy9rGMzVL6bC3XfdQQdqmjH16ZgeF8",
  "key16": "f9SoNC5QGdXYXHgrCiUUJVhTdqCH3ShoFXsyFaGsVqXZad5uR5s1mLa46BL7g1bdzafQFX7y9ZUh69eXdAtSfWi",
  "key17": "4hVcBnSs6JjAT7mT1vNDiYfgxWuRCoMiQ155Gz5oGtKFiUoDucfYqKwMHsUKs1qxGNcEyuifK5ULz2Z7QrzZ6Dkq",
  "key18": "KSa7HCse8Z7XPmaqRe7cx1uRSrrD82yNUin6ZneFVmvVxbQkfCM2WCrppHZpUGQsYxxDp6UfUPL7ULswnbRJ94e",
  "key19": "3bAV5BDCjzXvguod1DjSDFKhaTw4JrntML6n691FvTQdJLdVH53cU1ERiTbh7mb45Do3Lez6aEtrpc3jwqrawGCA",
  "key20": "J54fZcGAyzU868FN6fiCK2PgBtoLeKUQ62mdx858iGDQom7fRLHvccvzoSv8owvaB1kGRGendUsSwA5qVKwobj8",
  "key21": "5Ln9bzAHU7DGBfQg82UerLJxh8aAF5sKZmZWXTRZzb4ZsfDidypZoR84GGBB1nrZX6v7MaKS3h2ujetZmofGiMYP",
  "key22": "8PXxLnWSMpfd7Po2ctWnyFoj1em5jtUvsvNhaoJsdkUVFunrtJ8wAX9bZxnnwTwnginnBYojEwhWTbchroR7ThE",
  "key23": "7A4tEPJTipRwRYQrHxwrabjJdYG8yqy2z7oYvhLQNsarbWY9Gcb6UoQcrxPgJ6eBSGV1zfCUjFf1PsrR5VWAvHr",
  "key24": "519A8vPPRbLjh9RYwWoTdyh4SPLW5hSUj44NMuZzjRs8YYmjizut3HdAhktjdafmCLXC45jCHv8xB25MNvknMRS4",
  "key25": "FN5qSjCqYeVFTfEQhCrnnnGkHia7haKbZrRh9QS48fuJmx71zWMYFKbUzQYUECSBcDPPTRpVxWdjRBP4254Trmg",
  "key26": "2tNpSeetNbhAU4Gjkg5vKvnYyTYyZv2Huwskw8U8UWHYHVYkenEbp26sTZVC2Hd7bATLxPFM5jTbku11vdBWGZBH",
  "key27": "BoPABJ6DWiMiG2h3bxWtvMacf8xhFeixDMPe5no1n1iJiXrqP6SB9ywf5tSWYSJ6vxkWjsZkT3t6PfoqxaKET3L",
  "key28": "pu3w2qX3QNNNHyukQvbkM4D2HiBTaGbJd1UuVy17hGHFyjFXzXadtFyG7YjJD28xuEomqCAhDP9hD9EMESoFTDt",
  "key29": "NAJaCB3iuh41fLCxwG7GBVJ7dodhnxRrYRkKSkZt6MBkJtuPTgt4Y4kEyW8ogd8QcveFn2Y7KJethw9Y6a9vbbr",
  "key30": "2kr4iw8K2reXvSUDe718eTriKLFczHkGZ8FMMFdPswxieCwh4FNXQjSyGFhaK6tWwk44ofPJZPWXqXqhKKJHw4fu",
  "key31": "2ro2AtbffAKu5pYFUbkbJxjogUMWKqS6YCfGKpgxFz4fziREdhVk1dX8PpNdUQyvSgBNcyukdWNtp7baXiXdqauf"
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
