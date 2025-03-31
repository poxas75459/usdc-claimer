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
    "4K23cbSn76PG6awsECQsUHKiQdsYUxSPgP5DQZNDpWWNpgTcrSBf63g9HbgG5r1kVq1iDhwsfLvnmc6rf5mWxKAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZHS4CHLJDwtMFB35xb1n28mfhkG4dVtFryPba7h3ppJNLRjb7mkm89t8TPMJ8dbsuBKvmD78Xv3MDoweUaH5MoL",
  "key1": "2AQgouADNwj8ZTqD9cV8M9cf1EjCKzk3NsgT8TPJTqSoUEFB4167iBHyryo89vfDs4eTY1ZEoq42EqLViJwkuvJ3",
  "key2": "4nexQMot2nAvQ5cU9mMJMsjExEJzXR1GMNHPjdCmZLkTDeC72t36mcVYq8DrPQ7CzZmKQsUgvxwzgenLcShZrdB1",
  "key3": "5zyRWubP6i6k2w6PXjUBn8fWFLpWirat1t5B6x4LoJ7BeyDbGnFyqt9QzQ9MCzVzmyJVm32ZCqF7DLSH1am4TMER",
  "key4": "4s6zMyPJ6gJQZMrcnostVU4wFhxZ9suY5FJH4QDKJ4H5dhPRodyGpbu6Rqszhym2ZYi2wsetMW719yqpKmmRyV3c",
  "key5": "47sqreqizXZ86ntzb27ppmBm3F5bXh88Uq8ofKhv5gNK5xXw2wAq5EXfbexDaLvoSxSaDBoEX8gjbaiTmD9f3VUR",
  "key6": "fNxDALHBDUQJdqifEMg1a6VS6cEowmBM7PmfJhHbMRLS4YVdYf5qhEeogAQgjur4CF5aR2q437UBZ87a93Lz15o",
  "key7": "3GoCq4HXgd3HVnzjqWfisDF1AceZkdWWJvpwZQkZnnkFnSJtqxy6tgVWHAJS1Sufw43ZekEypvDTFkStZ3qqp3sa",
  "key8": "3JhKsnUQnZ4aXVcnXhuyLcozZKzRGeAFxEQoPwk26E2h5XiigGJ6yGb4WFfM34A9d8RFzvrxbaUs2R6Y5uq57GNG",
  "key9": "58FLquB228SYwACZdKVAt31cGYmM2GxB1mivcMppmm3jNCNUHTb591cvUwDKh9qzsFmdV7rBiLecJo5bPp472b2a",
  "key10": "3QjiWw3nAPfCyGZCnz1of3ZvgJPXAuCMf3CiLSZhs4PdwJaHn3S9WovzdFjSRMny99T6KQFszJxTqjkhKfn2Y9q7",
  "key11": "2aYyPnJdbLuNhZ3cDajfCe5ctm4ckuEmvKneqDAUcZc3KG4EqLkuRu6QdYDr52CPc1p42keUpd9tvwyYNB1kqLFB",
  "key12": "QotjLEy553EUQKBkkfZ7kqsKqZWwb25x43RQYCrkLchkSq7dfjxveFRkNy8nLfurNX8SEjtnbUUT867v6tSvvN9",
  "key13": "2KVvW4LoAsvri2tj6yvRXGeactQvJttqyxKPccVCsgH64epHtZxRSm81kyWRcsdsKUVGd37fj8wqEYDFdoPS4Uxe",
  "key14": "4nNhchMaXGKDfBdNiWN4VePzaqS6wVK5Wweyqh9VxHrWds4wShga3yiAWcpx5Y4nHW2wgCZJ8hw9oH458PnC7AE1",
  "key15": "3BCHwzPVsj4E95xKmQkrT5XQKCW1eCiXWagEmZftvMLRDWG9EU9BB1xJUyQYyumKZJF99NouCcig4KNQGCWbXJrp",
  "key16": "Ur3T1sypXyA2SZ5W5JkVxfHpyr2Lp1V57RteGjEEVefufhrep8T8WVPhWgMbYbX8PYsv3nxWifwxFPsodhgWDEC",
  "key17": "j8wSK5VZDZvYMB8cpAEgGmD7rfyJ1EuuFHaiYSQYHYAcSYxNYGNFpiRH4cuXh72Mr4SoDQfxL6ZzRbnNNyigvsk",
  "key18": "eGHzfmD9MmC4JpfgfxJLBKHxAAw94k8WyugY5wN77MUZGiiWp6GXkQKTHxqi7ppKoogX7esty6bUAG4yBKtinWi",
  "key19": "32G4g6vcASjgQgSKQjGcVe5EnEdAgwYx2VNy3sQxFUwGACopwLCYxvJw4UdqJkn9BPVhAFkHaKTz7NguLFrSmLyU",
  "key20": "38mruJwZP72qQ4tuUh7aRAetcQhoyrek5y2mohDwomBfnqvsUbESKJeLgMRADjrUoEv6mncR67p8cug7B928L2a5",
  "key21": "MjLSHmCNsGXwMA63Uv3fTvAQrna2yzb2fLEqK8Ttg8pYLNJbQgKWf8mxZFr8L6pmj5akveSCtyqjoUJcVZANMe2",
  "key22": "64BTBpuWUwDZJ21PFVYDPKfkdZZg1WHoY1U4qjDx3ySLGdNkYzwCtnkJQWy1YXUoR6oUeJhjfzeAmpqd2CiQXY66",
  "key23": "2HFAbb4GuuwEPJaCCbRbC7e7Y6dAB3vWAXHM3eWaDeScaxEvJtjun5TELTcbwwsTL63jz7zshH97PhetoDdKhy7C",
  "key24": "2YVQ4JL8rxu7c7cpZeUPNmiAobv3bNLLG5EC3YDzBGiJwEN6K226Af8YM4bVhdajm7b6sj6YXHweH5L9z2dF1zJk",
  "key25": "vJ8Hr44dVe48eRCxqy2ziRiAPzj4obRj34H1wbh8uGDy9ybnZpUcUntBuprDGmD5RHPkmCvWFgqJa5evxijio9F",
  "key26": "NEKheFwKCiHZ9e4igkTjeA9vCuPG31bg5N9yebbj2FGFKRJxQSfBEq5KvY5YsXv7iivE9EuD286pwjxRfvyiLfA",
  "key27": "54uPGG2E2sFCKgCTUAw5bBCb5beBW6mM6uHAQZtdWytagonwgBFVN9CzNjTSdQKDPP6761s33yDYAFKzEbMRhAmn",
  "key28": "zJqnCPKDvc3F9QLvepgRpv2uN6PavBvwXREbqmbeLKzgynCMaUjHLc3arLoGrj3s6igPJUCsR6m4xpoXnfhNA6k",
  "key29": "1rnrUrwBNSm3nGGq1p51a34bbpo5xmyaqteMqW19s7YneWsvP66tAnB2ddD9KB9uHowUsw3eGPpmvCkUwJryj62",
  "key30": "5ywUWqP4J9ebjzShSCwTGpvEyMHPxDCSC9d2hftY1zSZucmJ9qkSQBgduWcBPFH9h93iZevNYEyTFv4Kab2qCnnN",
  "key31": "3UzQ4ARieLY8Mubrxpyii6ZHFEXqEGWHnmYBRo6tamP8U7Jf2mmmjhzRUwhmrYEgSmbGsb14mB6QErTAvLopNydD",
  "key32": "2KwaBM2BRMC57VFuuF1XyWqs9wuRzdocM21oHUqiU5zG8ZpX7FXFnvpaP238gFWiS6nJCMXMnt2fou6aYcKM7gtb",
  "key33": "2jEYKfvEZzoxrYFBMhPvtQqhQ298nva8wF6npY9Ys9NQvjK1feW2vB7f3y4yL2mnu1MHBL7ojJyeX5Hf7gMp43hd",
  "key34": "4dPCgGSVPvpayHpLxRAXRDoQv3B1jj4yXtfLgVxge5gHDKy2csM9z8Awx8XFuHGfXsCoPTxmoyGEc1e9J6U5gzyL",
  "key35": "siqNGXFVnufkmdSr3zbYMjtmZdRPSAJUdikXRVSjDthjATaoMfiTvMXwEdzW2prrvyzXRv9EbXL7HGDn6DzCUTp",
  "key36": "66LwUozq5WzvmKMV55T8BCrfAJpsimtLeWrKH4yZBYKFWLsnVBjJrzb4xKU8eN33pujncoXaCjQNndAdTe8GCGim",
  "key37": "4PucaRzAnwjbiiUAF6j9zvCW2E4F47K7Y4EKi5JV4pxUQSVPE2ygHe4chZdyDkmbrBgq4SkZFFvN4UXiibPrFueo",
  "key38": "556Po3RXco3KV8irW7XyNHeNuSi5YqpCpEjBRtWjxWRYiPxDTpHB7avn697KDgs7ZsAyiot6gEKvbKpB1k1XpZcU",
  "key39": "37tWqcBUatkpvt3SBqRyauTxPSGySKCcjeHoE3JfZo2c9MZrSrxYBuyuavasMN3aCRSzTTAtwWW5FxF7yMAcLSDf",
  "key40": "4mmU7thmBdjJRTk9byW4a2QjiGx4aZuxuRTGwn51VWQw1TjLeY5rAkY1gojkxezts43S9cPB4KnJNVqoLaN8g95G",
  "key41": "4Zh7Si6c4RSoNSrPuuCwcdrrRwgPHQHsykAAKY8yhyZUCwtaJR17T9jqmgse7hBDB1zvixz4Np6Fkxvg7j3wvRKm",
  "key42": "2Tcq6ZzESKg8Tm3GeJHs3ZEA7EWiyyVwFjxR7oFvv4WZFwrXkVsPANGJg1n1VSZVS7dwyjyq57tBspV9a6Mt33Zk",
  "key43": "4CMLBRbNr4HNR846fghQ8tJphYiFL5dGLGSamU2K5yJws4RseVD78qk956k5MUznTZjGUFrXLNM5ExiVTGZRucEF",
  "key44": "JP8g33CSgfxpqUPHy92KsE8fZ13WkPMa1sxvcpr65QXoKb4scu36qSGvv4zoqFmhYLyGgsk4CkNvU8fZ7s9Ywfv",
  "key45": "3BNAzMy7ueUAs4XRUrJ9LCZavQ21MwsSEpuna8wjTw1PCDj4gqUGfAafCXVpT2kgwUjQxM3Ei3DKA82uCpZpVhGF",
  "key46": "3Co5rTHLjfgwxBcX2LcwCGqbqjUuuzRvd1XPuQiS6shpNMzNA8f9xnfH5kEAuC39F7DSsfNGCrC5792v5TzoY2ma",
  "key47": "aEnNhSSsUDXtbv4G36ZHtWxe8m9mhXLvHT1Wr5mggawQtK6hC8JKMrCV3NrCeem1xtXBNGychSLGSYn5CVmUDoJ"
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
