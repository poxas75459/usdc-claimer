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
    "44WwufWA4ryL9ExLDqEtXhP7JRUe9h3ryTRhWpcAg1zoJKSfhJWwwkf3eKxnPTwp6LJznTNDE6xZ6vyQzV5DeR8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wpRirjk3AC5LRWW99ALx63HLxxCR5RLd8wXxGAehgZXzBPprP7Nhjpq84PBXkzidmR4BEzN8nsLuNwCdQj8gC4g",
  "key1": "5mmSXhWNZCts6HcBG1ksXHL9R3XvM9is6SgoTGmv3JtPEaZcgCp7YpWjiC8gesHqwocTaPjhvuzqT9HSWFGmaotn",
  "key2": "MR8cycNoSrtRwhZPmNJaqTm6vKF36iQvDU9858rcy3RAd27d87JYVGJYiBVhD38Y6npsqW3TCGx9GAyxtf7g5Qj",
  "key3": "5Dn8Zgdij7SHH2B8eReJxUGWxzfE6DEHxVQBcscnBWxupWZYyJ4Usaxq6wKaBXKXkmrAGUK1XZZfPCo1RKRLA9fA",
  "key4": "4JxnAVSVoV1h61AmM314j7g87b5ZG1EXBkogWEB5G94MDTmLC9wEtSiy5XJnuEmJyYfBwsjBLDkKX1QY4NEoBb24",
  "key5": "4GQ24F7yZdfT1b9NdQQhcjbLVEybmQXkBvvRfTXZwVeZarNiYiDXHqQrL63b4GHE7BCdvtFkCntP6LBGyir832ut",
  "key6": "36WDzCFRUbH6UEMRoyqrfRgRhwgCrvVBFkdqa9914Qv9yubMgK2ocKvXnqWFq8SbSwSFtSSGb6qvvp1pyXJDwap7",
  "key7": "CfBtVzdgLvvtcgwTrtfCDFQgns4UxGU9AUG6FwkBmozzCXixmPk42SXhZ3nkdVD9HNnmUsiNnbMzw41zoaQYpbo",
  "key8": "KWg8kxuCXcvZSkk9EumkPqM4NoyaYwgBWPsCNJbjyLwuLvmzBHWZcQWknTAY3shxFsVdLNjeVLZDAptujZRVv51",
  "key9": "nqfgQFF9Boj6D3Bdj1dgUsBsSzaVDB6Gv5qKXjuyLuWtuSDAdaubJf31Z4C9zsksd8VnDsfaHv1c9BCCcPDvNQF",
  "key10": "36hvohzFfGUg5zr3ZbQ8pcjhEmw8kE5k39qC29a9vKEvjVmKMG9TtkqUBmmmxNgFrkQWJgrswWM2Mq3HFuEba9fP",
  "key11": "2Lre2UfeTG9tNiLQLF6XptaNKH52b8N47TwtPsLiJf1kvWC3PwhhM2CMmWu6oqey4ihoGarPBgF7581nMzF4ZiVC",
  "key12": "2hLuZVrtzSvDq94f678zMhcCfdqmD4ArhKECfShuNXXb9FuPQTVJ9juvxitZfearY4Fg34T8w8sQU8mpwXn6hfVA",
  "key13": "63BY8iQTS5z5BXDfreG4eeyviTb4KEaneXKwLMERMeu3N7JdXeozYw2dmRdDCoQvpnNB1BcZB9a6DD1y4c4KvJPT",
  "key14": "4omRufwFpm3BnSwD5zU7WR1JhGKUKakzoHzLJ5pQg3HyrE8nvktqQL668TwT5sTWUeahYZqfBLGBH8NNtQwpyYm4",
  "key15": "4wsuCn4BuygYRTHQjKKRZvRwRwvQcGyz8bvkktPUz3hNd9C8bT69a6ayAkzTHKMfZBeAMkgDgron7oFpWVnCrF1j",
  "key16": "5Zb1N9BNzuWns3HtVKdRps1eAaZp5rxc4vE4QuBN2QPtjpMTS6FkUkY1x8NgzR4nxbjSTFS7bwkjWbNhMaEEFucZ",
  "key17": "3YrDNND2AvZPuacYKoJHYTUMAhkFRWtEUxweZxxLf7w7toVSomF3MB57HogtKEisCN71VLigpnEBkdAepAVW4g7t",
  "key18": "2pj3CPgfuaJpj7hU5FAPoUqfj5Kfe23UytmSyuAbTxTuzGHCJe8ZsBDWEmLpsxfPqpsHsy2iGkg7mZ3TJASNQAx6",
  "key19": "5pxfkg124zpxb4jwZEBd9rxTDaAP74AR1XcCWdBqTAMm4HFRe1R5TntawhXqjJtMDFEUMa9uTH5fQdNKhTztwcrz",
  "key20": "3sLx7aav5YhsNduZ5sTGm2EUVm3v8sAW3mj5PC9CEBSY9pBUsZkJhNLQNPoxTTbqVHNQ31Aj9dvLmjGk1xDBjdv4",
  "key21": "2d3iCKT9iMeFh144cu7ZKcWvneqGcKK6j1GfNzvRQKbUksThx1sranBMumyDB432BZBydqGc8tNW2h3re8XYtsNU",
  "key22": "665qMAYMH4wCCQk1P45jD9Gx8VoxJa8SpMZ7ydtkxndUz9oMEBPBJiXGzdRPqmrFi955kYMPnYsCyqzXytF1w3Nf",
  "key23": "2LK9HSzuKRM4AEF9aMArKmVXLeDNYyD3d1hte7mwW2Zn1Qjy419uSq27mLAoJmWnTqpJ2np9ekyi6EqjQg9a5sT4",
  "key24": "oEenGazvg3u2WAJHYVe78UfJbAoTtbojN6FgapVTGD8CjkkbFXP1BeWKm1xDBP5gawMWujDRoT4PdPqviHYuUM4"
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
