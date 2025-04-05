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
    "1mPoXYgtoT1hg5jW18ucJa5bYgBTR3vTzUP9wCsYumk2PDeumRN11o6WbkGwX1Htv5ZMG8e3D29xWLTTtfVJUDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cis8VGdoJqiystLsoVTYwLvtTX4GJk67t2nx6d8wMLxsAUEkZobWY4ApmRzv6uJtP9oMpdppj8tNTTx2YPcjULs",
  "key1": "5ASyALY97rYwdTZB7bTyMzSSje8CEitN5Ha6a7KZ3Ct6BFmPsNoPmNLvW2FBoG5qzPiwT6d5XmCcPHfcdcxfWwyR",
  "key2": "4NLxzL3YyKyUyRpe1Hjygb54i9SDcCMTexb4vLmr6JtiTyyjcyJsL1pGnqMu3QsXnxDtGdCVNBornQtgBHWgi1wt",
  "key3": "4aeSNKuPJrcXQRYaX4YyNUbvKoSBPxnDq7X41PFFYhEgEWkQnao1oES32x2UjsX1oMzSZmUAn7682z71rxUM6fyi",
  "key4": "2tXSZhYqernExZd3J8C7EzuEU4urzdm2uKirpoyV4iYBek6PhYxFBRbe3T7kaDvggFAXCLWcuXYQvhiaMTojPdQU",
  "key5": "3jMPBe6obd6UVns2MsXS3Q1nq3sJqNfz9fjoSBvJtWVNkyV4g65nJgitZcZPBgHdr2q1m7zJnvhf6TNfdGpAse2D",
  "key6": "3Trixyd819U422d6vUcqSyuSXGu9uWesnfjqLVk6VyaYnRQoQVsyHo8sS11gSEjucn8imzn9EhnFPSfS53mCqDiQ",
  "key7": "3cWeuCSHwJ9f3iDbDgWCgfbQ33jSLXY9egHzL22CbkGJ591zxEc8Y4Gn6HpXbdskzaxMBuqZxBD5J94ykzzWcZ1r",
  "key8": "5fVyAC6NVyL2QxfWmcj84FaXBcJAxz6XBiwx8Fxh9LzTK6oyjjVuaGS3kjY7uCbGjWhW2NZfyybPSiN28cQMo3Rs",
  "key9": "4foUAXgeLMaqtgpGJumUiCZvEm16rUg8SvVs7sVXeASPZg9hKYe51YpyJ84yTzvBEbs9DSCJHjTTEuvQZEqoKmz",
  "key10": "67f63qsKaMQFSxc7RvNJVhjLbFEderBW8MnXzrMghVnCE4DtFzzCtoUMYMLBWaFbM3LCm1Fc6QJKX45f28jYXcE5",
  "key11": "5yZdP6UHLniatPtYPFwRnZtAzu4wxKwEHD58tmmnuSeQij4r7qT9Qhv5EPcDLHWwbxgiFguDZ8MCysCnon1gcfbh",
  "key12": "4GnUzyoHSHBnePBXvjohJErewfWNZZsFXbZVKMP8wCAsYnVyo7Ynw4pNY7ybiwQsxAv17xqPTo7wmpVkZWLWy1Uh",
  "key13": "64MLkZv7rFgnkMpNi87sFfFgnR2RhKrbUYrw9M7fBRRXZEVzPm6HddvnhcYK2u5H856GhotFtyMqAtnPVjUpvk5W",
  "key14": "4jZxGZbWhs8zjf8AcHQztiYvuSqFS4NaD45eZWdVJh1Q38mhUHtUuDHHYNrdyDu5R7rnUBAXLJM3EJxTk3bvtfGG",
  "key15": "4yB319NduQ65ygx7FXceKbYNy6FLrJiLDS9tQp8ZBZnyP89nEVsjujjvpPJcZBAs4j2SZqRsDSfhADZtd63NXrr9",
  "key16": "JsEZoMqWjJGuLeZZKoJg5qYaWdfYpD36tpS6kTDj7PLJHcYf5YheAqQ5T4DDDzKWfwtDNHHgeXx9XfzU5nvjDjF",
  "key17": "67fNKyWH3GifAJ28xfPnS1cQcyKDGDLvc5FGE8JQfHo1SnzJ8JdRKJ6PxtAhiWMkrf5WsAN5PxP4MyhNGMhveG9s",
  "key18": "598CyKeBWqYzSw9DSmyJv8V7nx6jTaEEYHs4Tmvj5r8Ragd9YuYMpSCaEHAxLopa71usRfPB1CbEXx2JnLWdr9GD",
  "key19": "ve5LY7j15uVHytZLKTJAVvtYFYsP6kCcJ5p1U7tP3izuUGuc5M1ivcEvAqoihTHqxH4r1tu77iiwnnMACMtA7b3",
  "key20": "4XHwL2xkyDytmURTjmjGe7vYz36gJjMm3UQKVE9i9r5d7Lyit4EWT2XghpzrsSWZ6EXyZA6Eowz5kzwev9H3UdHA",
  "key21": "MArD5dBPdk7auUZDUdm4wa2Jbv2ZxqXRAHXSxVQGfCjiRSsoNmnMaDgha1gEaAq9twshX8UQWtFxjaW5zGkFK8p",
  "key22": "4caiigMwYdgfBeyRVJbT95fiaDju8CLyAUX5CVJk78DKc3BGBQXXMesbFhYZKm87wb61w8BNLtMV6AvPXBdDQ4DZ",
  "key23": "2poUTWk8WhsbQzJk4y7fGetf7qGSxXoumJJB2ySYzgF9km4FTXGpX1zm7Nek4oCBPeiKUJJkMkXhqYyp5df13tw",
  "key24": "gBpC2xLhS8nFc5CFobsCNyQRcwBQfymDfY7fy6VvXPUSXQiRGJQuFbEu1MYxEwaMe6sVwv3wYVAZsBBK89LdPZG",
  "key25": "sv6iB4RZbVcGP6F9SfZ3ZjtC3nJJEituLpkLP24TvGWiG7boEyk77o912SDLpi9xUaCNfwxM7PQxhGqnkyVDsTe",
  "key26": "583eDkNv5VkE6uzpawSstnfHAeBFgqapjW1EVRe5jjD6ZUUZ2pCfkkEJw96hCgRtAX6Y17HJJf3whtKgtSkttAtJ",
  "key27": "5zrouGHCkfQnSnrFcNPFgTtnrux954jn9AfRVxy51egnb51oPbYXgKGnBeqJdPgpwRhb1GUHDFV3iyEVDmqpoNbC",
  "key28": "2giHaui17Ud4XMfk2HbMHSNsKmThaXAqa7dAkSPprbtJUuSWZ2tMZGMeJodSL3Mru7G5aoeAacGiNETxEcQHqcUm",
  "key29": "49o1szFqNQSysNj35fQHas89rzByQdwwn9MRwwY1EbHB4X3s4NqFiQckfccdmtdoMEpCgk3EbjSDWbnWu36n9vxb"
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
