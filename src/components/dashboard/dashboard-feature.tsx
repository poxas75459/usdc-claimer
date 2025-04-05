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
    "5CwkTN8j6KJeubbppBfrmwwGkdH4ctZ7XW5f4vKgFdCJfqP7J5SL8MKoHT7ZQBbtnfehGLxbFnB8b1yCPSY6MQH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23AAr6eochLmmeP8Y1h2rcbwoomZX5CPNRcPkMTToVsqdivMBVWn3ZwyEqPJS7SAWaW5ftVBPFdhEPiUwjYbtXCj",
  "key1": "37HPk7Wf1DRXqzfHGtXzQHKdbFDH5nksP1UXRNBh4pbu2J5Xu9WsNYmfWAWs6FNWAZ8BX1dHywdh3aWZuJCfw23R",
  "key2": "3PYqxc5tuYMZn8ZV4aNs7Khi661GKufz7RDxctvjouo5mC55U923TxWyAU85CVkhYJ46jX2g8J5ic1RPzPZCsmzz",
  "key3": "4Cwf5GyDVzv5CiXt6pNqZRNRAhYY9G6hAWWWXq5uXERNJoYbLnZGKzuGkW3LMBRwgzYeAmuMEBCsRyYmwcmBV7Yx",
  "key4": "8tx2bzHnx4ACiVACRsor44TMCrnWdsePbwVcf5aYadQQjRdnr6hdeBaYmTwwhgpbUQwpzXuJjA6caZTgAtNKrTC",
  "key5": "2BzBf8Lds9ovh9JtVjoEkXcs3hXcP6MDyPECWCacTU3JXnzKLjY1MwV5XkNqnbMdkZx6j7G1wvCphEwbcSSeNS4b",
  "key6": "5vyL9Wr5BuWHNdSbKiZDwrEvYFCWe8iVjEBVaSSNxDP2avzXTSAmDLt9V1SXmMHhuGxov2jECNnSUX8Qw181kkSn",
  "key7": "3X7vcut3Nm2F19ooeeenatNoMUQZ6gtHAMoWdpB97buDkJeQ2uBPTrvCJGduWTUeKCvfJVfrTSnzjoUJHYGZ4kLQ",
  "key8": "4YJPtyQVeRkYahEMciDGR8UMM95h4LBWWMTW6LJ6dVUfFQtfmdxUZEJXXQwToMxnA4MEngwqmhTU1gjtL1xABNT",
  "key9": "4mC6sxPRqify2VktuKAEm5HU1SaNnGXmSMfQWHCG5uP8nxeutncfv6sTvkNz5zNM5DHzbZmX4dbdGsAdHdvES9fj",
  "key10": "4qw1M4S6AuVZfEKJfni3j5XaJyN9HyPQrUFhhTrdGhLHQPRAe59yLd9Mhxz9C1PgxPYVq5pgDQMQTXHeMFgX15iM",
  "key11": "3Ks121CukHxEUEPwjhRkEREnioD3xTG2aavHNruGdXffbUQgCCw9aJxzNLaCxAZASP31Rzb55J7dLZ8ezD2G8up3",
  "key12": "4NtY9CMzj3CwHfxk4Zrn8wqCy3Dwm3k25K8Unz6Yt8NEWFcEhjNeTwoVqZRetFnrXT8YnvdeEojPgE3Kqgan4gpE",
  "key13": "3QvGVFTaLZ5W5ujxHcYejYTMpBWERJ924xAnesSAHfJ5tuofWZRyAttSwqh2fpUeVa3S91jF4uv5r69xjDNed9gt",
  "key14": "5bNeZJwXtCdHdKXZPXqemJmuqsH6MFBoNedCv7L1WVT6eya3DbAD5PvCFnnBqG4nTqqh6z4A9LYsHUdwFYTVJtPk",
  "key15": "3Zz4nEtzqFdsrXZcQAN3QX7L9jrvbXAuBpJqV2ZV1XsJ5nMnYHs1D5UauHtHYFYTR6N57twYYh9YJAtSASTBPXvT",
  "key16": "4bMEzzibfYRJ4DfLgpyamu4w9NFX7xMaPWrbt3d8sdhez1ukEtf2MJ6MrFe6pwiXr7HepfTfM7SWp14cXZapAtoV",
  "key17": "24cVYhQyrMSdZrHLuEU9kiYqZYf4cxDwZQWDhxQNsoJF6BwBNnL8Uir4QzrWWeT1kAgTKJQVTpvLbgtgai5aiHFc",
  "key18": "T6Kq1vyd2ozB5hT3MQxX5ETTr7dCcvnwSfxYpCTVvbMtYCBjsDMB3RwfxpoTCeusitEhfSUHvcDgvvbfgFGJJjt",
  "key19": "5of4UtPh35NadhsXMPm9LwQ3ZZrUSs132qz3nunXtgRUTsD5ykBEpgSB7s8QLjRbHE8uZX1SMrtgkaPELKA5R5xF",
  "key20": "2QMMLRnE3wtiGUWK8asBtaH5xn4a8P5h2j2xotsbkp6Mn4qsryAQQjxCW5vvA3FkTsELdcEASaM4oKfvFjqikaJh",
  "key21": "57qReGobMM6zuPTwef4ZLhuY5matSfnUes4mYjixBBJSEdvzD4erYvCgT5FbHytQRdHWHZgd1TpA5iL67wQ6SZu5",
  "key22": "4qmZNj4KeDefJtCmQ1yezNptWGgFGxHbrRHFQRPcXf5PahPgVXkpTsGodZ7B3sV9US7EWUH6Gdfx284NH8ax5gTE",
  "key23": "2Ku4hCY6tmyUAHGh9Q3kwE6ediKWeQB22XnvEuSAXtyqRiemR1nucFHmNMMjrUZakwzh7LdEiPxD2Rb64Tyetu6P",
  "key24": "5WiiuSZ5NsP2EvphMDn7HZ3kRwTBZYZ8118PjD5c8Wj4ps6bKjXba3PzpYajYwhvwRgMHykVhJDiEraTLfoJKECc",
  "key25": "2GVyKes8cZdshB4k3rcNoFgc6fn7JvohWzxQquTgBaocALr2J6aMvxfbittFYTPLYWMa7WpPWNhgfspd5XLXgjXm",
  "key26": "4rjWiGkqdcUfp9on934LdmTGqzoM7dcwfLxUMVk45fkE5T9bb4ftXSawMyoyi8WezqJf3Hf1m2FC6yNotmQwqtB1",
  "key27": "2vESNqyLjnUUMM4UePdEduLy9h9SyaYF37fLt3A8MpUS5kdGDTm4bZ9y1CNXkNvzxsahdMDx9DiksWyzi7gCUZgy",
  "key28": "GVmkaanHKrCeK3z6SCz6g8qUVQ8NEShyHtSLCCfqFvycsq4CFUUSCNiy6ESYcdknZgw3J9DsukzjC3pyx8RFJTK",
  "key29": "1t1LfLJxiWp4ENpGnMmoLxcQbQwKTDx8Tj2oTvcWKz7SvGQzHkSndhXvxZbJjPiXB8Vqk98hejxVtVTQFMPAE7e",
  "key30": "23RV6XAjQW6TYnPH6VGTcV6tRztkevEFF8mXpogB9636tSguPSJz1dejAHoPEKa4jYKNaoMjniZpxixMPFuUNgdN",
  "key31": "3jT2FZxWSoAGtcomwPka7E6sZsdJjsVFfQ6mGFs7ZbEiii7UShYqifeBCW9oKD6UmRgSX6cbu3Um98Cu8cEDCBoH",
  "key32": "4WdenGPp6jDDgBEDrDebEoKS1WixD2QQkTXVqkK2W3Dn1PTHSj5RV8nmk9WRQH576bqj5s9SAp3Ft4XYPEmauKaK",
  "key33": "26fCDamZmhorUa2uBrWisiC4UvCzcgMKzPU5CDwHWR5fJnDuuDvS5caeysuQx3xsYY2tfbpDdwjAABNnkZyUb44H",
  "key34": "zeRJ5YhwnPQgYgRodG887fXQyAgLyHj1CxTogsbwNzN8QbpE9u1ua8md98J6PgWSn4TAUakDQHc8C98niwwgARn"
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
