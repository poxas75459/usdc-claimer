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
    "5ohsYvqtaAtEtbrL25S3fvBoVZYMzabMyD1g4GrcieqdGQgyaSK9S5viF7nUSUuuxwDUgF9yL6PJXwPgqFpo8ygV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XGWc9MxPgbHUtmGU2Xu6jFqT8QfAcYoBDmqdsKEMR69oMHF539ngfy7ewnUjkPqrMTnihRGYxnCdgWmrH4cp7d7",
  "key1": "39Njj4E9hAgDq3D41m4KzNFoBuNRNXj23pMu2akDNJWVbkAJtQzqJVBR48xCZfg4Yyi34bUKimq8s9zi8sUS6kzV",
  "key2": "3BcadW7UGHgihRyqg8zFizHfjBJUZQy38HQ7qXg55uMyjy1v7XnnoLXTkB37XVi3hQz3EjhyHoSVcfDsWKQ1Aq8m",
  "key3": "25fqdwa5FbTtvcLhC72ixVH2TxHR7fVfRRJvmwHKRJQQZ1chnw1SK7gR8oHeyuW7DiVtDy7eq4tA6jQrtpu6kVKo",
  "key4": "5WapctVh7cAgVHLYcbQgjzHk537DkwrdoQM2qfjyqKCM97sp3TuUEoRkmLBn9mYH3BnohYjf4V2C4k5zAT6KhBUi",
  "key5": "252qoK9AFjHTG7bE6FJY3xUnAV6KgepjRhSMysHQQ457Art3fZhu5fXSx18GNhrBH2aHYgkRWLjXCrBxKjDnYFmG",
  "key6": "2zaA4VcEXb268wudpwguYY7Sqz9ERJ4iRru1hbdTHdXM34owRRZxxgyaXN391ZcDeHyXVs6FnhANT74VK5oPEk2R",
  "key7": "o5hkBQNL4eQ8G9gp2rK8qvVin4mwnp5Sisg7NS5cySMta1mAhkSepVAPtCqQHrS8FPmXNXfBBT8Mq24pNh5o3Ne",
  "key8": "38LznGMxrE3BfvB7aFP6bsZgBUwi8f9ZXuANMMpmjyVhyhYY68yQZpqjt13NhtAPYmLLfubWwYb4xfHov5TSjBxf",
  "key9": "2JwQ7s5ztWxc7PDUYHjnSDftS96agqF54TG7HJxQ4H7SXPEBYVoG4NJSyD2gwB6gJm8Dk8t1p9q7G2a3o4mMUqeJ",
  "key10": "5reUBrTiTd1rxPVUR4Xqr87aHXfEqN26KS4pMKvg2CcbLWevpHc76jWVBDjpr9qVtcZy5RqRU7SDfPpRgBwTgn82",
  "key11": "2dVwUUW1pVpibVreTRhQVsRZF18JBSpTkLVAye1dnheBtukBBYHBAeyoNx24Pirb8LRikpgksj8UkoENaeUoNdC4",
  "key12": "v2JnUqW3VpQtaqHweG6zBye25hZoQd9vFCX7J8QNpfq28WJmVVD3MxdD8pSVCEhnuw8DnXpGRwtYyv2k97BwXj6",
  "key13": "2vAFNMgQvgWHFqyH1PR3UVtySLax97dJTct3UhmVw2HUX6ixCEea6LkryJHjJdywdf7FtW7af3fMRvcqPTJQURbN",
  "key14": "S3uwdEJqfWHFLnNPeidMqKRnYZrmfruNT6PK6kQhSoyMGFMJppGw1b9aApa99Auwxv9kB3p873RrP42GhZ9B3Z1",
  "key15": "2SHbwohHV89X4PArmBSbvyTRYzf5xjnDjeDtVwas1YwggUCfWkvttWyJ7FLDFxP6795N8iwSgzVkH5g2CfndoAy9",
  "key16": "rdWGWpE6pFDo7kM21oqUmTUimCyxwQF3kCE1gyT92yzt7vnpbr9fdtMfhh6V9vpxWaQiJAaW9pMEkGa8FdaVXbA",
  "key17": "4rKEDzDM67o3Xr1E68uic8j7WDr1YQ66ZYC1aChBupnpJYmN4HqU68AWK441nC5J4WNmsuNnGppiKH1v1RJ3Xpdy",
  "key18": "4opbHrVtub2SfoaJ7YXpSkhTn5HUJJAtPkC4rqAFMjDhG4gamodurp8S1SrAbn5YsZgsfNUuryxgemT3ipnNvK35",
  "key19": "67SAeP1yVDp75z7ZkxJcb3KmtrQkLqmMEXKu7P9nPyz474vUL4whTFQhTqULbLiAKKtDXJ1UzbLxuyLsKueoahhg",
  "key20": "AFrXCxUztE5TVUzzMb5vLGpDKSBP77bu8GLFJeWZTVtYatWzgwPtUuchaskGGGkjZgzPmBKr93mP6TJmTVVQaTy",
  "key21": "4seVmJ44kzA2roybBKmANYeuj6apDnsq5yo96Bcn9PxuJ5bykYJyKqa7Tw7ggVNApwYj5fU6ihMCheZQnLMsAZuB",
  "key22": "8F2xfNFi646dSDvgYikVZNBz6PsYs6BZcYLQiGiGY8b1AcfDA9VAugcKrCEPHMHLGpwfhdCw6U9gau3w7w55zeY",
  "key23": "2EVm4NTeohjtmfMjNy3R1qiZNYVRAfwwfgV2oEdFpW5ZSva3xBLQGp7L37BTvgxJ1x6XkXYaYuDixmMsriMXoQxC",
  "key24": "isqFs7G4J3R6tWaxribHDEwEpPhX9ES5DByuxzvrqZ474GaqXHEVT6BYXHw6yW9ZvhLcWAVk5Nb1UZuFkCCA2Pg",
  "key25": "55TWL15qDymzDrfojZaKKv6JqGX3UPJqYpEaVFh1Wt2oPdcPuxnkA6BFshdZVT3Yig8TaUfugC5WbZ6d1ZKEodJU",
  "key26": "3p4UQFDWoG5krFcq9wjTcMEYJevcdTKaj1fFFWnKFYTecXCehFXcYXmaGRBhfPWbt6RVJL6nvc8Qitbz2KQEHsPj",
  "key27": "3JhZnScWVnGzbq3ghwKKDhotzxT9kyGhxNXiW1CBmMdEgRsneubtNPJVZWDYLfRXCGo3oRYSYo33KvKmFKRp1mrM",
  "key28": "4sisi15xT7sdbwGCQg34TKEjrqrWey3QvoPDQRcRG75Ko5csbYUAmHFZnyVAo9aR8JhR6hqTHEVA5g7eW9wGQ1Y4",
  "key29": "cz8ku1vuLwFRVgSWH6YLrvu4S2AXEEteRAKosrNhS9XGEvZLwPca7NzBN3o2amCB9ZzTUqB4wmZmdep2jixk9MJ",
  "key30": "31iRsj1kBY26QEmhtUrF2zAPsXumTjNUiJh6yhYycpPtLrLQ6H4ptXoayXLKy8PFrbUqugCYYxPqdYZExtWDSEoQ"
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
