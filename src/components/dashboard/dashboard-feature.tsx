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
    "45EX5xexbDyNHK5ry8cj7Kw8XqsrkLuEfCeLLkxXiuPKQwqbhFmBU2tcJ1jzZoY7xzJSKteRS7FQejm9d5fmwkny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L4dWKe49i14NbY8YvAN5kcLnbW86ZqATjpbxCuAUV5EnGYo88Q2LWc72dFEiTirGUTHoaUSUEhTwu4djmRLSLYh",
  "key1": "5XXsLNqFqLVhP7bJ8JdzFaZVpcRgcYzVqJWWFdLbQ27ynAge2YKchK2Uxb1NC64jCaXTvEwsqpmeuAjMSik6mX8z",
  "key2": "5A4vj7sWGwj2zB5KHaFTbwEUnu5DvskRibeRXBoeveUBiSzM6qmJbiobWKNMzuCfkaabTp1GyJ7pkrbcopjtapqb",
  "key3": "4cBHPKZRYsq31457UdiwnzodR3oi1UhJNpjqJV3wAicN8GTy398YgAaw3pdWpHqZwLG5YsPWifgDT59Q7Zd9H5rE",
  "key4": "szmoCWmV1dwm8dD3L4UTvM22CmRnbxRMwQ5EnZDh7DpZxKSc44wQnAUYy4XHwDnALyZaN1yzb2jAYQGqFZSGT2P",
  "key5": "4TQZjrcVdAQkeHXTNYubDwKFnBvMREthuST8iUmGV2nSDL1569Bu7KadarhYWsTkUsHzUnU1uLXCbzakJyYcfLfm",
  "key6": "5VrL2VjAtaENHz8JCcSHxKmJiciQ8343cEQgzUhL3yhnVtT5gKpuNdSc2X5MHocyxHVECza3pQB5DGozoYZMQoMT",
  "key7": "3TcouzinKZ7HqSjUXhpE4ohKjM2krjHUXwWtHqDamp5G792TGokoSv5zkUfkbf4sGL7Pm2WHE9MDVgsbZzZZEkYV",
  "key8": "43aLf33gjz9bGrjT9W1EWFGSDwEGDfksYd9Eg36iTNFdEEZ8VmDpYCAyhKLteB3AXvK67WSAKoLzYFMGQJZmsuYL",
  "key9": "2GEbEYfN6yUmAfyF4muyp6e8DY1wy36vxm6FgpJM7UYharDvLGb8V91BqpBkdW59mnDkSb6ywPr9ihhpBaR3cCAL",
  "key10": "4eARqBtzakthFTJg2827puTCXxVjUd81rtzu1rnKdkoMHWf48rKnZr2neAibXJoXdZ2UC2PdK86cSFX9KHjvG11w",
  "key11": "bg5SKcj1DCjzBou4SrbpQoZpDC4BMgZ3jyb7nz6iR86chBNLnPgKBwpDNzhGPHXThmxUBuCizWRk2RDJTsNZnN6",
  "key12": "4uH8oVD5mZpAe4Fj1MGPSZhzQb5aHGW3XEjswudvi8DwGAM1VauK11n8XdJJq6dD6kvD5CxT9MBhVKMjbDLa8Afi",
  "key13": "5hjaP6yRATVw6xFUdt3yFVYe57mMhWajVMsg9apWDvDX6iFrSiv7ZzZeSX3HPq5hn87TRGP8UQuYDQnLdVxLqjxY",
  "key14": "5y5DcT2Tsynk7p63TVwMCc5sacUf8TMRZjM2npxAhjwfMe3ZyS9u3iPL1PS2XhdwK3wPzaxwr4xhXNWB46z88Gno",
  "key15": "tfBH8aVmdXoRXgAcgvZCFcWe6yqdrJAMCrEnGkqRq7j8fjBSLiMuTvqPiPqLhAPrUu3jkvR4nv5dA4GifyUWa3i",
  "key16": "3879mXqJQbnF1jaGMqX5anet9hHpZXVisJphgx1Gbnx8a8sHEjDnkbLegvW4HtbTDwwkaQi9BvVDR6MjHtEuNFUN",
  "key17": "3yioRhRb61h6GWUd1qWLMeTv9hgUxfXpSkHkhkHSogeasJZuQngmkQfa26sCZnHacXiMT6dQbSjvBrfmL4nUZj6L",
  "key18": "4tMo1e3v886ybshokhMoLfJNbPLihPrETkGeMkVShEeZQhMhgC29sDAeq6xmki6iBWpZF4wGUzd9mg2NfgmBXynm",
  "key19": "5NnumWZX5q175dpTEDGdbRogQBWuscpyQGTJHd6sJ9nMZ1MHd7Hjx4tWgRA7cuzJWAG5iBsnyFQ7fxPyy1UiMzmA",
  "key20": "Zzcn88H6h1MbvrHDkZUA3yh8VGdjyqPPkCe8vNJneQnK3U1y6YxVno3RCpbKrP2nb77Xtynsag1zfMSn1QsxE3U",
  "key21": "3cGpeQApCkNJrjYEMG3C2XLezEVHbSvWzegMqMiGr3Wnngc6zBPhFR6BZsjwRoE3dXkwpd1GazhVmGT955sWkV3a",
  "key22": "36FvYBqMA48q9LXpr8YmamVrY1NF6JPbyWvX5qSXR6DyE8GyWEWTrPC6tKo38LLBJy2JorbVTsHmRnBvUTWFaRXw",
  "key23": "4YvCc3XPM1xGBXQLfTf8ji9idi5sXeasYSLKhmBWMFP74f5KHK1NQjYtWgthRDqcVPhWUdmJaxPYqKTfZ4MFo1ua",
  "key24": "3vcC91aTjsvoHMq2RDWRFZNtzBX54PueBWw75LGVmePGGNS32Tn9LEkPwQGCerouy11oGxYb3uLb51ReH1d8Gppy",
  "key25": "51mhnaugKA7JHZDfYey4drdVZ9PB3fNC7cABdBB2b1Vd2JrA5iijvcU48uyL6ihqDhTQ7WFmpwvWgBmRX3L4YxJX",
  "key26": "3ZDNqmTycwimm6ABKB53fL3TcLMmLKdNj5HbgGkqEGevJW47hFBhXixo3vdmdH6FxMoHBYD5CG64hGKvaNQYaeSD",
  "key27": "2sj8PJNsuFyewikjPJyk46NrqEYtFCfkB48EGQ2TNmmDvK9gUU4BGR8ta2LpE7AsqvV9And7dnNKAPDv799tbqAy"
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
