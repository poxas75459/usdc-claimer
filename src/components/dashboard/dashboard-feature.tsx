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
    "2qnnmKLjLjkA1YwtGKHQv11W8M7TZazVw7nQAoWXuEVcYcyLjUsV3dAk2fWqtFXZK18Af8hAiaiDzKbqe4v82vJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ucUGxX1SoBQbWVYQmHa6pUAAPcodn9Zv6XEq1rB9o4Poqxp7EftTE7mhkRyHJY1fFkzZ9Nv5CE5G5updKnknVd",
  "key1": "4oZEGYnftzwLoDHCvHWA8TBwNjyZdcV35BEzHMA6L26UmBpm4ng3HXmJF2ckvb4MEsffZiR4qYrmvi44Yx6TfhZH",
  "key2": "3mE23YSwGyyasAFR1kM1dC1e2LUkLjEVQWLafCLy1KmHf3bejeh4cdY5P6BGMF6QjVB37esWBNQ7YM4t5kBnMi1i",
  "key3": "qVk4AQC335qphWvM5fJJQ7UZdSD446DMeiBErkcH7ev8wNww3HwxKr2aeMYVXNPrU4HxE9tdrEyEB24gZDWns3F",
  "key4": "5Gbuw2hL4dmzckxqLQAwJrpc7JPkA4xAyvzJcdEwJDW5SZ38wWzXhpWjQmhGK9mogV2W62emd3jVE7RbcMRZrDW4",
  "key5": "YFk1ENGjJNTywKcXsMb8RFyV3dWJagZGckMcWFdfnht72TrULEsCA1pHEf2sant9chEc9BVrNSQYREGTrAzYoT8",
  "key6": "5msXD4psDxwPmXsivwyfxpnrQB2P2fWFydUyBZ49wDXXqT5mtDmzSaArWG2Q6xauqB7dgSLR739vg7Sw7DNTTKDw",
  "key7": "4mtwT7PFdhkVetECkz8MdZj9tTsXJ5v1PdXPo4haHqQvJrckgPWDAfqCZZHkVJ9aiZA1LRwVvzUmxh6EzYQWhc5P",
  "key8": "5Ne564uEZ8vZmc9Ht1aotVgeTn6JRWbYgLNZdxBkj1KYJSScq8Be3xZ65DPRopeRTunwyoyz3s57ocVfhn7Bpq9d",
  "key9": "qFaRse8dvuPauF3SYzd6M3nA6H9kF3LKLNkk3cnzYFwJxBFhJG32kCmMuw68eSW1fGWDaUaqpY1K8pUPPrwSosz",
  "key10": "2tKuhpVZA5ZrCQR2G7CXwxCWANRGuTVf6YGbXGT5GpGxs3RkJoKXBY7Pv44yxhRGiqtEcCFqYsJuJBPHVsKbWgtX",
  "key11": "4TmCRbDJQc5k2jekT2R15Gkzqe78HQ2hAy3udqyYf2x7brz83t4rXGnpVRFazwGhq6yBxKKZ9StQqm1btx6mzh4p",
  "key12": "5EZNWmDZXtHW2TAsuUEHfzvcT1HNzMr7f6i8r5ZPHP4XVLCmKCGhrDiYcV8s7ybxtfDjBNKqUvvEpWZy2hHyLs6p",
  "key13": "5ivrYaKsQ565hgi22fWnBzMdRc4iDn11Ab7yVx55fN1k5E7p1FcMrLBLrfAzcek5j3QRDWbrEVNEd9gcZoRgnAcH",
  "key14": "2ftJYJwoLeQZ6BeQY2xonSAN5MWgErWYGPKabgZUpYgHPLD7de2eshx4fwRyx3uKHRFRF4NN9aGwwgLVafstBnbf",
  "key15": "2uSdkGZ5EWSBcpPTfRzcT7a94Mkea74tq1TWpPpXnkGmeZym1RvkZrXoYzrqynq8nG9VxbEuD99JEPn574bRRpkk",
  "key16": "3N6p5hii8DEUMgWtBMSP6ZLYCkgTVJxSuhtyRGNVFwXcdnnJisjeunH1JhvbgKJdoBUa1nLgyPhxSQM3q3MBKvAn",
  "key17": "2GPfwZ4rWcvYfSpaa9MUxTUPfzt5TkymGTMh4X9zxpWxndJbiqohEJENEjG6kvP5sLHbMz2jEm5gyxFFiLg3Yzno",
  "key18": "3yDxpDFTRtvRou7iN978qpjjsYUh3gAtjCcDfrGsfFbkMTcfcfnRMMi72Jhof17VJyUMi3FVdcMFqY6rJhQXeWPk",
  "key19": "3G8ffdAkfwB7CTKQp5Zy3NwLanj9pbBR2UUWLQuxrTvN7vo11UxsGdNAGHohxRFRgEFEEkFCgjQpHfB3hG3x1VUA",
  "key20": "BSYJzSx4tyv1ZuuGssn5LDxdBB1jYqv8qx33uBfvmdvHK3qTdL7mgZaPMJS6AgVu4hZ5hXPoFqsTYJHJV3Pku32",
  "key21": "5BWxx7BU4cDberA5C7QMQReRi683cYg2jsDEKev7PXNazZHwnQ3t5QDn8H2BwhaE2BDr6x4jue2w8WdRVe3bak1V",
  "key22": "2TEohADvM5ynw6gZNMy8pk8YeggKtbvRQYAdeJd26f9JhFXxERnpmKkvT7YthJjvvfyp6wFfgbHoVTtNR1ES2oVF",
  "key23": "2Y3JMFFCA3JChMouRn4ZNNJ5cUXNb8hFiJAnsCxhfo5RUnSyZPHCBDFQ8v9k7GUiahBTKYvCovsPqPCwPvXzV4KK",
  "key24": "WkEXDdy8SwwYYuo8dXbjUBktgmUdE6DZyUvXBR5XjfKQmpqcLgUv2uFgWf9R2anhRs1j8BdUXMd5rf8GLsG9Uos",
  "key25": "cJon99YNHTwQyTFrVXSy64ZuKuyaNNZw6P3wCU5wMeVjTQibkLVJY28KMdBPdtASkfxoFHhDFGfYADojtVBNEuQ",
  "key26": "4joCj3bAmgB5zGNvsd8VTNKiXoiBmB3THjwhQERkVkEgQUkUNnFL735Ed4faL1YDY1VjbcP1DzvED6E2Y8X1gYYF",
  "key27": "au1H5Fxmkq1Zbm7W1U7D7p84tjdLkGpUcCrUMauwfuK3VGioZkWNTX95HmWmGKSaGMBznkibwyM4Fc2wnSj8378",
  "key28": "5HbV7yKGeLR5hJQKsSHEzLx6bQ64kdggXLgJomaKdTz1sVwG9gEoE8ikgA2vpZqrUcSi6j6PhJSUu7sRe693KmYe",
  "key29": "3158CsPRrJV4BycEU8AMggKoVWP7p11qhj86cpWyMi1eABXdj4vApYN7XygGfbm4xzeBZubtJNwxMkZe4UG8EhC2",
  "key30": "42cQcpxyH22h2XEkvoDzkrLprCpaavYQg85swZJJXnD1Wmq8b4reH6EioGW4XDHgc3jcumTZcdyNpQpxvSWoXpy7",
  "key31": "TdsotrZAJwo5sddGAeqyCxf8Luu7KVswB444ZGxrsbqAFgcdy9fniwPHcajR226ebNyCwrmkMuHTgZiT6BMjDEn",
  "key32": "4JMuZrjwayNZrs7RJdLfJageMsWp9uQd7JrWcXC3JXTMFPFPryxiA5x6DchnyMNXE8kwD7F5rRsUpiruM2wHHZ5N",
  "key33": "3oGzUMtDa4uq8MEvBP7g55CvwvMg1UBMttN22Z1dhiMStyyhDrRuE77cgqFZE6AprAE2ptiwwFUQiAM23yLdCTrP",
  "key34": "3R6NaeTWvPGdHsJiAwp1b6iqqWVUaEFfUMHt4PoSvwgLQHNvxD8WgcyXYwjqjoa7H7PXAkgXdAtfbP8JhHqALzqh"
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
