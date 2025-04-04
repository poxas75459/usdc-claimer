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
    "4GPV28WZvwzE7qhzFWsaj7xQpR4D9TSzcszy8p35MuKZj4GVgJrcbsptJZRDPx6XHRWbJYnRu4vDUFJVgi2sMSCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ocQ4cZUqP4vdauz4p1mxHGQrwpFmoYkcueGJNjaNtw6MnQnSvhe8wgRGin1CCQigEz89v3fifYP9fGM2zY1RZV",
  "key1": "5ET62eUCzt2LbkRbMp3Fy8EWV5HwDHwMUYuf668XT485c6ZcGXcRjvRnFx9oMtqApREPSYeNPERbDUk5KZXNkjFV",
  "key2": "4BRbNagCzz36B7SmLcCuVnEgN1hyBtZYVWxotpvcvEjMp8F4Wad2xwqzAjiWktiACzu1Pnz4GJ2dbH4TDq1c2WH9",
  "key3": "2FrvroYp6ijnSvoKpabGDgNAgCJhP2ggnDfkBbi5N2dkmbUJnH19eHk6ky8i9qjSp6i8ZXw2VVQ1j1bExia3QjJq",
  "key4": "2sRsPmTDwHZZVCncgFXFKRU5KGdtsunvLVYFdo5Hx7fzWZsnM9awXJivQrqtormL4L4gYehyTacp1exWJSppbGbr",
  "key5": "568NVTVvu13rjbMyrDGZNStcBWoErvvnMAHkyQsFSfkaGUTsEnjbjzqK7cVpjJyd2paCVYg8guNeQD5sWZ23yqst",
  "key6": "gpfY2t36sakq9zkoL13cNGXFoGdSEG13dpz58tS2RSX2zGLRxk8YczpfF77poooCtYJfY1nZRJ1iVCW5485Awo8",
  "key7": "5jAEVTh72KBuCoS22teNZwmr1eQKkDBaw7LdTfG7inmfGdzLFS2qjQDnzJj79hCxqWQQTFTyK98YAuM1K7YEVuVL",
  "key8": "MZArSPYdxejZNQbdwBvbgeCRzBYjtWCV5hAPueg7Mw424Gyha5a2Jwuyep48kRbapLVgBnU3NCGLr6FGKDSUzz5",
  "key9": "5tcZirbgRShQF6vSSUKvLzFAGV3WA24s8B1DKeDqDki8p3CpwRrMscraPoACftjW61GhrJV4eviCumCjQvUU2X68",
  "key10": "4R61eDhyvmwwyPHc32fC2zpv3C5cdqR5RusVpTdb3rwSJg13XRpXSwcP69k4wQZjBeejUeMHLCjc2xSNHAUE3tFF",
  "key11": "53Dv7NWzC8ULVFL2Bd4ugihe9CN3efChx2qFJ2LWjy2FsVQ9Es21XPfVCFTZhTqYLrGhGoCqswLbsoGtv8kg95rH",
  "key12": "2B31rqK1vY2Fk5YB8tk7mFzAXErMdUHpy6XozderSjKkrHfv49PgUueTVkkir9coy1NcRMUseLHEttXN2SasCipe",
  "key13": "2trv1pXVuz8RrDAXixgyV8sKSsspcoYXTF6DVFFxAMuMW16QBCkoT19VWD7rhitzhcyi2wMefdsMdJnmYwLxoJtc",
  "key14": "KdLYLbx2VTtd5PwN8WEvszgd5tyd28ELWmQtmCo5b1yc6F2EztHip3m77oFabvzpsMKbJUScNo4phkCDZrDkGQe",
  "key15": "3ChZyRfCFkgNNXscxKEKFES23xhpvxSZKL1XZPEB4hjC16un4dqTCmv6ALL2Bq9rEhsHbdfPozPfWhKXaY6qGbV3",
  "key16": "A7MLjRhPCVHRFdTRnk4Ae6WjHGSrN2Ug3jj7b3qYFQFzqjjkefeprGoH9bMH7BWSMC5dE6bLy5f8Hd4eJWok11b",
  "key17": "3YYJznqhD915Bv5qEZdarDZJyyXzNaP1mjsNPninw3Gz6t9rv497osraFFD4HGWjnMFrub4rcgUTir7mVsMvUXJT",
  "key18": "2FB26j4kBhaCfGj64MgBaiMPeYa64SfTt9FuYMTdcNH5TheYW5mD1mT4WVD3LsTVamLT8uXgZVZP9vkjaeBPNeX1",
  "key19": "2cbt9aNZBDwP8ncFBsMtbmCLfuaMaTWToNhc8ZciJdKYKqthJnw3JxzVHqnUkmo783tywG9MpgKoTar6a3k6jHQX",
  "key20": "5gynAnqwxNGwBAxRMkfeeUYoLRKf8LZTG3qNEQN3fDWtFc5yogDuXGt82toT4eWBCsCpbJuDe8GL9EEdDF2BH7Cg",
  "key21": "4ZENovuA63gwXNdvb1n65XBZvmzDUWrVMagsJV6S9EfuEeHqsYHr6fSxiA77WVVcDfcNVg7LvnCLLwdThL9LbWTn",
  "key22": "2yNMTPWmXJSYmkWNjSdMSVtJcsjNvaQCfUrGugQ1en4T5X6rSVuXvhHgdFhX91Vo1riobJGNVTUuWTsPcxr2dLri",
  "key23": "2dPTT582dpkAQhs2Sd5PzgcPgVhJ6UrdjLkdcAGGTMTFcgYdL9RMykq5BKc9n7dbieAAGBTqohU3PWSsjPuQLP4Z",
  "key24": "2aZs4MGAgn3XfjCKJHnFY8aNfCCA8s19ST2ACKiQEkxzFkvhw3YggUBxQEaCQnVMZvQFpr3K2UEXDdGsS1tuvLsd",
  "key25": "s2aMWvs3idDV1bpdQKmcp9Yb57Rd2D7JSRP4NDfrvLHicaARdMhZA2cpkZ8tz56KpmrU2ZcrXg8ZDJZhZ3862cg",
  "key26": "5ENk871d9ohxSvGmiufA1VknACxzYgGgEnfbLcpWx7yDESPY1CYvKzJLfgD78VEkqdeQEarVaFTJSPr8BaUwBFsu",
  "key27": "dzs8WH4WYazEpwuuQBTntoyyvKAVY9K6UQ1FVexzAA4tpEyTtgKiCiZLc8UPfPno1Pn7Ti6vU8eQsrgcHgXrYZY",
  "key28": "5iqgzm3dRja6ER7gTnbAcoQ81k3znGQBzT8UrF477gHCf2PiEE24m7jZR3vW5m7zoLTP6maEYTM93gF6xzaXDjhc",
  "key29": "2PTWzAjV1dKB4a85DYCHLYsHfdXV4QarpTF5fgVbMQZBktsXVUmHHoxYp8wphWtX3egv1opmuw2sUgM2dpvx7vrd",
  "key30": "48m8Nw8ax2kcsoFn7hwF7baEJS61HH6UrLgmCVQyo7MG8uUh6VrtBGU1conDXixddfZgM59X3EG8VeDX22TSzHu7",
  "key31": "4hNvFDUuDVjUEZRSfbcMgTTkdBAChTKkV9ae2RJbtQvoRqrJL42vkzNmuJcfo5f5jQbNRR9AuYu7QFuF4pnhAAJN",
  "key32": "5y3qCSEupU2e1h8SDkMrygLi1DJUrAbBqzRjxMC6ZcoSajyAaxZJzk3emqo7MFZpbkPoh8Y1L4MvxTn65i1jZ8tg",
  "key33": "46JnJgY91nvtUPaXgZJfpt1H4HjV2DLWo9pRvyA4ctHCUiMM7sQ1bU8Z8XgizfB8Z3hVtuQXvQpdJVQN4G8sxydY",
  "key34": "mLCB8vh1u5AdCyQTCZybCCpiiMvN9q6sH4opUqbS4Us4JpqmvFUWKxUatcXa51u8iS517oVYGYm1vk5BxKo9ZYi",
  "key35": "4N8xLZNked9aTFWpWRT3w9WJGiuUfbUG7frutzU177wFKRYsTQudfLjELtzBeBTQHRhuT4LyHwKoAvPBsXWCtWPA",
  "key36": "246qTEjoVAPC4BxVTQxELGroLQhZMJPzGY4geFfg9im9CiugBSoCGYduji4UumnWbqR7M8DWkzzc1fDQtoh9Bx6w",
  "key37": "2QMUV2FBtXHge7g3xZfVuCB2qs2Kk8vy2RwYfsFEehJMKHWpospX8tzwipq83cVYickKuDLJJSAV4ZyiRoufmMMS",
  "key38": "3t6R188EtYJdPkruZVJanTQRJ9cmmgnZgvcNf6RRBGzReeMBawtb5axt6ZbDW4Z73LrqtWgWxk25s8JaAqbKi33S",
  "key39": "2QEurEdUNTAkM8kybackXMk1VkxQkgyUKCD4htdg19qiZohg4HUtXJh1dmRghBVNS743bnMwpByWaS6AwYixNWHD",
  "key40": "4oFnJ5jiFYmsr1iu4Z8DkiQQp3iehYeJDhN629H2Qk1aAnvmMENN59W5PaUzg9aVEhkFU6uH3wzE8HHuGWdBhfPP",
  "key41": "4ao3hQ9rqgYgXBXYd8Q92ha8WZ3ULavMRsJK2RX9sZQUiJHntjcejkYyk2TMeC7TPFmuPZmYgHsMQveuxnEZCnfz",
  "key42": "4PMMke41k2QvwVxWpmXUCEwnWVAnBX58Z98QMygmRNkEeeYhWJqRnyZ2cPkXzCiTxaeP1CSC1YbqP6oGG8JVhnP5",
  "key43": "PSJttU5zxpteC72HqNUcrSCfa9qa2vnSy431ntstsUv5Ly6CS4YadKhwwrYxG1Lpkv6mpMHxTA59WSpixQjXP7X"
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
