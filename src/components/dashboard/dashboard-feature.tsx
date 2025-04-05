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
    "3WTLoexgyh66rewwnN2yb8pEujmKjoynFkhLAJjd76uiwBjZANaHwrmDaWgMqu1GtCKqjQSDfg3iVPh6XPH2c1mG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36CnB3V7kMLbsbBhGEHUPCKCryz3sb1nLwFNgSZNiGgjnZhZLGtfiEm9sZHXVLSAT8rBnti68i2bZfCBZSeWZEfT",
  "key1": "5yEwPYe9WmP36S7jvQqxrDZC31f16w6gBByMnsSENm2cA3w8NhwBRguiS1YUT5X8q8hWc5Xu8KERzb1YhWkdwtLK",
  "key2": "jK2xA9EJnTacCUSfHwABrcQhGJT8DZw1ABB8zjVU7bHH4ihBkHgxcK6x73ErKcbRS4Wvvgm4vKAPpKkNPd5Vgy5",
  "key3": "3u9kfJ9aSF8mF8scvZMrpK4jwzpfRhrWSnrYBNXMHWtmvNzCvoyRDjR2DwWfyGZdft6Y9TAKvdp24rbLPGnQkj6H",
  "key4": "538fPAHXqpsp4rxrAWjjbmVsU1WvRdEvHgwBTbwJRmrgAGyHa5RJpZMb6gBGxZHyJn1aKenZKKjvCsVFGUwJHxGu",
  "key5": "3uSWycaFWAX8peswq7uyUskCWDQqf3D6Asg2NsVh5hwvbPyc8T3nBHcwS6szoYXV1xD4ZUUrXL6jjVHUeSWfLrtc",
  "key6": "2ED8AmcsDew7SbrxEJy6EELKKbWNxRoXjomxh5PT4j8ApEedDnz2CFqq8dhrxEcs2reTqAQ5sj3ymQwxgfkJkhNd",
  "key7": "4KT5xjXNprspTe94kTd3nAbh7UdryazYDs9cSV9WWCgRdexaXLue6cz4c9HafMrcSvaCZwrSqQaWYMzy8qCSygdV",
  "key8": "5x136BunxNWf7zns8qkxjDksg6iTsk7rXhG2UdWfxRaiFN5zWSBSnJwdANyiPkmw1TmM4au4pJ5fkuPXtThGQhVy",
  "key9": "xBPTV8nLJ93bTTEfhbZmrZcx5A8L51uDhuyMLga14yE6SVKWi7MYq1BrsY9iKsAuXygxCiNUNwiBmbgnB12ch8t",
  "key10": "3QzbpWVEtiTsdM7v8ipjhmtrr3fkS5EeaxRd4PPPRXP1e6FAeXhnbKCfNe6zaWGTHk6d21CtJoT3fjmPx8Na6Sd9",
  "key11": "oYZ9wdoAcejBBzUzMATDzr5cx6C5AmrViNGN1JCVmvDPnVZ64iywyRrFWPJfjBfnB5zqCboFgMDrRaxr5qaPdzL",
  "key12": "5LhePRx9QwbPq4cm8PqJAywYgSLo7CAmk3CfJuN4NfEL9EWF5CkhDrfTKC9VrmHhUDuXLDfDc17TQGGRGcLsiki1",
  "key13": "bCVzt6rNrE93uxJmDpuEfq7K9HNUZjnr5sKo3oXHeVS9Vp5R1iku5UHqYfwEfwj6Ghcf3AgJNGKXTBbkAiHHDaG",
  "key14": "4gBibsAPSmDuNqepv12jepJWzE4kPhf8scCrZa7WMHpcrAQ6hwwX2HaxPDPp3NTtv93qwEBc9JchtvRC6XykmxE5",
  "key15": "2UNn6ayMRvkyeeKaE3YtZ1btzDRnuWJoXgzTpSRrubYm4cT4kN8GDj4RX6mJzzXX4PNNCb3BDzLZ8bRXwFn4Wgjn",
  "key16": "5YT7V3148EDGMYhG23tNThNB18QksyaQRt34NvwdfJpjzsHGDyX78T4r5yYJad7H9cf9RUYpbqN9JzMLEgASrL8L",
  "key17": "5hbkyJbTR2PX3hbuu6nB4xGPTyo2bzUdW5UUXyekqKQS8fNRDqd1kLsGnM6Peky5XYmmW6TZrpJ2A6ufSy4pNBKx",
  "key18": "PW2JU4vSKoD3LUX1dEuZ75j6K13uPHogczQeoXatKNH9YVb2Uqo4Gog6ARBNNksoEN8HVq4yPxBm5vFz9AMA4nx",
  "key19": "2XZjz2LgtR5srcgU9nuJmdeU2f4GT1PDzuEfQJUqdQhxEjKd8vue7qqzZGLagxbzFYgByCaLu2aui1qRLEQ4ZwB",
  "key20": "5KuqhuYmSx499YHFmaUr4LAPvVY8aGuF7aP25SUQGDBC7Qk4J2uCH6zWm6XMZN9vF2o8FLH8A5mhbeF6kHn5gnRr",
  "key21": "PtzPm4KFhCLXW3tDv7vAUD8giGHyQ4MgTU19aPcDiLWes6G9hyVSHwVUcZVZcrmYAjhDboxHNd3joHQzMLszvGW",
  "key22": "4NwFMFshoDiKSCF3zuTrLhp3fEi44cqMaqDeNBzwoFsw5r83P3AALbGCpj4tWJgwmxSzSh1ZRf4Kc4DVKGYoSbTM",
  "key23": "dtSfCCmdyiGzX9wwatb1e6nuzBAtPJdkuLhoWisoUrH4Zz1CzMYu5DLzYFnjJiLQFy2V659pmCwEq7dBKi8j52E",
  "key24": "nHS23MsE3AB8YtK48D65g9QzpNze1r3AcCHAGH5Sue8xUqLox69NEcsPb93CR4AuLnvAZQCbzm789tu4BuXgxxk",
  "key25": "pqWKxKnmxN8qjCdTmRqGfRid6b7rJfKrNBUMJzZnE5dBGCc3TUgk7tecwnYuJb7UHGXJmh4vv8LxV7AYVAXLy6d",
  "key26": "2CHMGZpFrdqbaBrwL21YpdHiGdHaRvRmykekkQp3J14yGrVwr7DLLnjzQV3qowzMHDu5jn2DeqFbnyo9enSqjtgo",
  "key27": "4HRUBYK68uayiVJkXUTo2DaNWkAEz2epPqFDK3fvMbFjvy3yuHqjbh9juXSmJS9rrUgS6iKLrt5GYVfoqNFj3juT",
  "key28": "3UkPDFofsg4SamCZfuxGNU5FDRV4bwufyrv4neKXEgiHt4i75ST44b76juoQcb3yasRyhBxepLGQkpaHuuhG57e3",
  "key29": "jYUVtdCAbKBrLokzpkPz6ZDPrwbvwTAbSMSUKpUuUeyfjFvyPAqpVTp8oZs3rtmFF4iVrCjQiDaseGrtVNxbc4H",
  "key30": "34jVuMW5uQuY8Vud8noNFcvHKkJEr5xd2s5mXStCoBaSR75dt16WYZe6tXD72fDKtuiexAJuZdJtaFspQ9YbgnHy",
  "key31": "RU9bWXB7N2vQiYt81XKfTARuvtg7LsyivHyJhFKmKQerbaV4MaosBUwjFoyCCvGXLeKdagA6tu4AsmRt1c2VSSM",
  "key32": "2LUKwXDG5G27Sw5FM6NGLWh9BhjPx9SvJcfPrhM8QjsCErUVmojTFb6igNuKTMRDG3YEjcbP9rpRMETAJZLdKCDm",
  "key33": "4HADrTiUM8tMAC1vZbVsjzRzx9JdbYQcRsY2YoSucdJ1tHQ56ud7UW8c4e3JZhayWck9YuNdgucjgb5vs2qMif1f",
  "key34": "WHdDGQjCCgeMgx92XWwwwNuewHzDpmksYTPoSf4gztaYp3oXmfUVGQ3sdG8wYKNU9zHwATxBvhZaMKXUq4SV8q2",
  "key35": "3AED7pddZMRkzkiFTH3tfqxS4ij1QSpNTDoNcJZfsjgt9J52pYkUWDYD4fqLvSKXFwxtY36xgKshSpWypEiHc6ND",
  "key36": "44GD2tFR7pvVij9XaPU2dT4H5A74ApTU6YZUcD93ftSsjKmHKxCvzx7aN93NoTzV923mL3pHSf7EzDx2djLZcFXp",
  "key37": "3AQQ1EppvrMz9XmXWhCnwHqjGh2MZzFV1ue8V3w5HiJCcebo8onYucH3uPx8Hj2p5H1HZ5SAf7nSjniW3n8Dd8z9",
  "key38": "4DCZe6QjGYSVnc8kx76r9gTmvhyBTYe1Agc9WiBcmXzYk1UocA1GB7V21PgJWaC59WtnMAcE2nSpQLYfukDsZKxJ",
  "key39": "5Q7tr4mTfEKZ4QeSo8n6pCNLN9ygqgw57w1YYi1s5b1sL7e2Tbsk5XMvSmDQUp4NgUUCEcjw53pab2Jcw9oJS9mp",
  "key40": "2RJVX25VxQQaARyzoJSFFqQT2gZccQiYPUc1uRWrXteEza4oKi97ie4XKNvkvKPSuuJQvRcBFAVEDWm7BR3QycGd",
  "key41": "37dj7ErExfyasVRUGtwnokhpCFZPw7kxvzWHMwswRcEePcVd7Tnqd3T4TcSKkuqPif8VKDE5AbL6ko5Zd61ZnBpx",
  "key42": "2DDoWG8iEKByEkTqhCTYG6jSJSU5VY39prhydsMDv9DX83Xok23NGjNo6u19QfYfNovXAdhTuxwh37F13q2W2tHw",
  "key43": "uJd5S1rb5vXgfMpAP2EcAMF3ovDFjHTYbbfP96BWbSoRaJJc69waqH52rXJcWWoZg5iojuNjwZ19Ax3Gg2xCzvs",
  "key44": "5hJbcpuNj2PEBfRrUzLFCNdXrkifTVcuxHDqkdWfRVuFVzzKxcKC5zumZumyd6k29rss2W5hdGZCdFz8f1bjda4s",
  "key45": "62WAGCj3aFQzPoDaJSxfhKVga7uMG6AxYpwUF5ePJvGJovp5g5mSRzid6aJmjAHxfd9ifhARUEmpvosRSRLq8mNV",
  "key46": "3SYXgWaDQbAhTH9YXumVZd2DQu76Dtt8touJM3RkuHNkUqqmhCAiBPzshonfNfgqisGfjVVpNqMGNf5XvDq5SrXf",
  "key47": "3oYda2UAGKSJVQJ5jZXh14KqKuNuCZ3af8zF3euUxQdDot6XZv1JjaJkUzreHizeNwGTbJvjsysACaaygwHZ3gNz"
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
