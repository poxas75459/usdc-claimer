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
    "rbvNobrrRW4uLwr9siETCJsXLFQJ54TW2XHLceGwjC9qHH9zqyzMCg3RiY7Pyxh3tAjK7WFquBsPPgq8FsZUXBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KMwPqonXKuSGd8gN1r5KEx89VEYr6JHNxBYzYpWSrzxkWiBBKw4xuB9BAocF8ENciHfdpRpvqH67g5WR6d5CzWd",
  "key1": "4vh9UvXoro6sEeDpuU28NSKXLsnYyqtt7cGoEajazqjPnFGoxCGgFmD8CeABe3TWxhBBWS4fgFWG45FLHVhdWmMe",
  "key2": "aaycfWdBcFsFwbEiYRKt4ssRSkWZoR4RZaVFWEibVhPvLzjxdBCPMiAJVNZqegNUzRS6EAQVvGfpeRyTmKfGf4M",
  "key3": "pjwZm31Gzc2QinWc7QtYSoh7tSs2sC1wr7ptThkMNhZf6S6G9NUA1eYj8Q8kP6jgjbfazqWgueBvckr8J7TPKWU",
  "key4": "Xw3LnsCXePepGiwuPZMDaAUAMQphxAzpByN4Cwr67WFaTFXNtKvNMC8BE3JJc6P4zXCXnScJNX4iHFUJuhN9qt1",
  "key5": "3pVYVbhDUfQGP7Ju4xZNnqhQ4QxtHf8tYa3dZp2Gfu1ErMvuqHWF6RZfTVsvXHD3iPcHwTrc6PUtRdWkJXRuovVo",
  "key6": "4gXMdXbnkN4wwJCuaUa9Dv7esvvP6niDKhSqucrJCHgmicFxLGLriviHF6zGx2mR85wEoWrV4KHcf54ZDVnfU33m",
  "key7": "MHRGRXDGuhGJAtaJPm5QKqdwK35B5YwxPg7Up14y4VTpxCJypDVWtYGp4W7o2Rs22H4k6rbQQgCWk3dAfnyXocm",
  "key8": "4AoKVgNiSH9FgghNiwmg6gR4isS9uXZSCPFnSGdrzyPTJXyTjf61kAk7XcY8zs1CWf2oi9aM4ZYkkp3XEAPZMUK8",
  "key9": "3MEAY4mXhx2YmiANEsyVfvnsiCzpnFYinyaWqEwJHqUQs5sqLP2ZTzASMeDifQZRAyNuJBUDEY8T6hRoCpuPGifK",
  "key10": "3RJar9RMiUePyotDdkzMEn9FxtAZ54dZAQY9dwja6xdyBGqdx4hL1MMDRtsNQ1ughQVFZMZZeczzrTqSgyVCVCxr",
  "key11": "4kvYJYpajUg8uVpdDCMiqXUGwxNDbhtto6wUTBptCfPNyy9JdHfhY5Vd6kqggNuDAdEqDs6NocwWUiKnzFUmJqVN",
  "key12": "2impGzd9EHVQiS5rouuqiYmotXL5sEZWCqq7YFq3QAezjBR3LH3k93maHhsTNvghUzV4XhJJb34TXWHkG2pszQY",
  "key13": "32f2bZBYjNLsTCLKk2RUef9MMKJP7tBHoGBZjRq6M8uspwfFxj44XhLUBg9RiZtFkfwUKLRDJGiW5gxwLqT35qyR",
  "key14": "3opuiXU8TryGubyWPaK5t7UcXu8WuxqJdUxaG6hqN8gnnndaAbxQLEggexBZn7FeKbvsgeQNF88ypGDq6Ls2QxnN",
  "key15": "2RozJtNSpH8pCkhXE6dm6PaPeZZRYdUfqEWVz1gEbMxxPnnfqohXvEMttFT59fhd7ddhLF9utmw2jPt4DKBX3AzC",
  "key16": "5BVUM6kFStKMRyRxRMKWHa3B3xmCH6Q4zS4AWa8gU1cuLxp7a5W7vjQYN7PXjp9zKH9kjafjjDYxZ3CAL6UeDEvL",
  "key17": "3ZUj2z91JTFMLjb6WroKgRJFctqQXtSXhnqmwU8CbMTw2HSZXGh8MeKQsDDhMDAoH6eZM3Eoc28s5LiUaXh448gA",
  "key18": "5LY8NXTywGXE99kkL1WJyqDD3ErKjciQQoQkz8Z9jaFuuYuwGmKQRaUGXM8xBzLF2Q8x1yEasxjJyRz2eBinXuE4",
  "key19": "4Au3ok4Xp3Uu7H3L33xDyaiScsQDGSkuuPYWniVJerK7uRUB6tNX6mckrmC9Fg9XPZsgegmMqo7zuWzrp6FZQVEQ",
  "key20": "5mxiR8JocaKV1HiKFZbWL1pfZ1HgMqKQ8B9AMeomFnd2m4R6kUDiHS7eLoCH9roevvBM9S89zQTn5kbLCsgsV1uu",
  "key21": "rq3qRkWsrxNZ9bChaLBQqxuFj8TGG3xNMdza9Y7bq3RpeaU16m5NCmu612MEbAadgLyxoYysyre6qXaf5eb5GB4",
  "key22": "yX26tq6tHjgKFxNtKwNVpnBz5jboUhGD85RfhZmXGZQ1VACRPZVpPPxw81W2toSDd37U4cTvoowtLtZYzCujS5Z",
  "key23": "yw33FXd9wQCsv9o6dTiZf29Go5XEiTZhYqCruHa1b6ueEH62QUP2ZhTgfr6arEACiuUinMGvhJc8E7YgoXogXK5",
  "key24": "5fzvQpbiu7ALtyuytvPQZhkSWFGACom9Y1oFXhU3TUddZNKnTxXoHrzGt5fMKfUDrtfLEDKCNHzPicJqnoG18hqY"
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
