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
    "2yuucopm2tf2Cq5H6C5WqYopiVr8dKRnrSh4tkppWv4Nn2WazMoPa2sTDKZSLQE4LUWxzVkA1WoMdbXqxx5TxL9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y1dLkKTw5j2Y7kqkBzMCFPLooM8jWwRVpRb2hHu7MmodyHUgaHzX7S4a4VyLh5vo8VncnaNvcSF3fKHRqnkHHkg",
  "key1": "4GDk29ur6tEdXmzyMLRmNdhoHGXVmgQQ3cSR8Vwxsthkye13ySMVeueriAzPBBb38rttLivNiNx2Bqjw1M86UCUQ",
  "key2": "3VWQwMjV4od4b1u1wDWngDiZSBENhunrSsArX6USCta6g5MXfN5fo5xKGuGGg7C25S72YthLJAycd2NdNxKhYBuU",
  "key3": "41Ls4A1mzuMwxfsdgR7H92GAZcP4hvHbJsectSAmhfbchzCpR7K93SCzJEBzfk4KCZZrB3jNHKRMs4U2AsbKbN8P",
  "key4": "61hCfP2p1G6i7CRgTnTK9uUNEXjQtAsypeP1gYxqwuw4HTCsSPxe2SgRpWeeHD2fuL1jocBA6pJ5MvUQJkVbF7V",
  "key5": "NjCC7v8ovugfDayr1UWZXPf4QuiiJCen65sANizD2SV45S9NDDJD27dqam9f5rd2YpdcQLKuhjfGLXCR5fgP7gb",
  "key6": "4xpgMvrJ2op8ABTvmvkQmTXTS3pUbcEeMiahHdvoNA7eHhd7e7VXexw3BwK4Tj9re4PCP3tsb5tXbAaAojmCYk9y",
  "key7": "2PMRKvbaVRhJKNJBxRBBoAzdUZKvyrZuDhSxVws51yKfJ8eUPKR4cBYLU1hk9N5CRPHUiVVCAuJkwNYSQ8LTxuPS",
  "key8": "3BnR1yBkU6LYk6oFL5ymajJH4A5bvWefZ9LNsEz5jMJt1pzkvLEDRkKnXAjWMeUCXj6fFQgEGuiUegq26rhyeMEG",
  "key9": "np1ECJqqETcWbepbenDbtrwWbmJmYKmZrxhqmxoVtf2ucFwvk9zvKte9ryiWL3xEHhPuuPWdkovwsx8yjkbBC2w",
  "key10": "2jhtpBfKLaxxFCgwq84B4wAF3JH4dLZeN2tETe2BdBgb1PvrCxXQCNLvkQxs372dikbJRMK4nNUrTGxZrgqnBTXi",
  "key11": "5fuWHRjogWGsxeLQ7QFAvTfBb3B3KXzfwwDMpF8a9oA472KouPPxc8ncZFQjGL3nCM9tPzo4NocnWcY1QwAMCubs",
  "key12": "48tezcRhyghi91Euyis835Pertb7Nn8NR4teyNvv98PhRGyzniEtGomwwG9U2Wo3NZwxRbagmctPgJJ1JAi2HzaM",
  "key13": "3P8rerji268nZzr5RUfeeuJ7hULA3oW72MG9TDdF7MHd98AdUk4rypUA3AkWDdkuKWmrg4o2shijWh1Ui8197MhD",
  "key14": "5XSTN4MAwH453oDXHVw9b4RX8qMKqqfVaE2pDxzQpSfgrjmKQZjUmznrvHFttyoVmHetjMCP3WfE3MPxQbbLkzAF",
  "key15": "5Y4UZZacApNqmuvtWW9cchwnX8v2UPn9zKTvjhzxEzaR8kCjLWKkdJTsxodDDUJBPUxvwXJL8awC8RWzQL3p5K42",
  "key16": "4SupYc9NV8VSp8b4e6ZABS1FVVRph5hrEoSC4SxbGwtLoc5sPdseTt6XhAAooJ8MU2H7dujfRAUCCH8fPFYYgqKa",
  "key17": "kbsEqKeV6LSHPxdZnVWxwmdHXm2mGsMPhC61CVXYepofwgWXSDG6A3oBUFSQLKVnVgxDJCS9yqMNg7EPDMdehdi",
  "key18": "5tsDR69fW5VFvgTCxahh4bWWmJ71UJKvJh58FmUZDJy88KH3GZSNZ8bAY496Lf9GbEuAPbmMfoBBNW5szTCFhRmv",
  "key19": "4SvAsJ2oSGWXxv73i8NCNo2xwVD3j3e41MNuoippxfGLoNckno3f44DY3geQjLRPJcmEXWaebmHdp5KbVLV6VHAf",
  "key20": "2XJ3yt7WngmBVAiW6WeeiaK7EuL5NsTyH5JAzVRCvgX2MuL4mF8AFpA5UK5hnFHRLnPJRQ49bYmphdt9wZkzTKDx",
  "key21": "5g6RuBnzVNpzkSad5vGwvMgCpqUtGbZ825wJ9ppcdHNAkv2X1oHvQM1GhsFuvbcsQZ7nwpxGTGHxkFubD4WGUpCZ",
  "key22": "nVsrc7a5P4GPgNqjooUdG8qKonAhZryp9ahd2aBLWZEytDyTo36zDKtnxtVcqVvQnwk1dqKpJXHQbMNzm1Br9cn",
  "key23": "jQRydH36H9XRCX3GkcKZ5LbYavVxaJmx4YyRp2wJMpH5NA6ij6e79ELnGg2nizkczyS1yqR59FtgaSe339nMYzG",
  "key24": "5YAUp48UJUC4VuQhTqMSvYZi4Uo9AYHeM8HUHcL8ajdgXrcfLYShqxM828h2JRoJaxguB662R8ia3NT7eveJzQBo",
  "key25": "4zPUjDmX8q6hfgXvTpi1U7YLL4FGgbRfT4HyhYoNaGKWRgQe2CJrD4MjQkeKEXayysAmSH1UWrQR2JtdR3aj9JL",
  "key26": "4gAgXearpej3NUM1MNTkV2uo8tiVMFrDiu9tpCzFa2Ny9c8o923o1n79zbKBF7fViicuQ42inZjzpQXpj7FNgLLY",
  "key27": "5xdqPF4LydYvB9t4kwwjpkjnZ9R1McVu9adAvPSRS69sErXiwdNPfPuj7Z48wrbuAW4gRR4ag4TLZiFs49vEn2Gg",
  "key28": "fuxTSh7pDVSudRNYywnsvp9rLbGr1jggBQZTsJ36BB6yKP4WdX9CeTSqzZXTh6KDKKMvMnm5SChjEH7xPkvH3V6",
  "key29": "3MqFhZB8ixLbSXvJydmCSvNXhvVW2U9JSnQeCBRVGxqvrCqzB1GrMELfQ8UkNoF19jb6FKcK2jgr7x7bF59X1WAV",
  "key30": "3aVZrPs7Hm1BvwfRLwGciz1xiHgajCENY4FhF1Vbq1AeHL7Y4QDkxxeAuahT9pXDrhcAhX2vemDHeGPFm2sHrKUG",
  "key31": "42sSKemd6xUTQccvbk4oSpHcNcQ7rQrSssumeQSAj5b8FvC5kpqonPQweAhFbJ4ftGV2Y6qbFCBgUWUNMuCD7tv5",
  "key32": "4MFoJnHE6G5a9LfaRdyKxGGMm7ojs5QfiSS1FBTfY7DAxxtgascx2atgbZ6FdbyicS21LUu7tTiwE3aS38PtbAbc",
  "key33": "5Lvm3y5tWke6UGdx4gBwBra5udqJqobTb2YP6uEDpXb69xAD4WpmBMJsuYysjdUif7uPCikrX1HMgSamfaDAXksH",
  "key34": "3tpvtBaUYgNf8wag25HiYB6F3GEhtMpixDUo9ySAEtu6wFb5ZGrzEc7oky67eePmurn3asT91MCpKzwAeRKwUoLa",
  "key35": "63eV77nko58aAd7dELhfhDgG2zWX1xbbsAa9L3HBwe3XAyaSzycsNWzfGyakF5mN56pUWiRBP49EoEqsKFWrCa5x",
  "key36": "3WZ4FkzVKyi4GQJ1FtwJGHwfwFcxEisGwvZMXr3N7WjCuwqw8sL52YvdwL9gUdoPXQzDAzBiaXgM19RvrqDvc3kc",
  "key37": "4C61v7PZCcS4dmxXceS6Q4ne2e29iSL2qHZXgTYhFKPMWeSde9tgki1rV6eHH6ShKyX8pTJjHdZssEvgUuMj4RJ1",
  "key38": "4jgYo2PPwaVEUzesByQ8hk6tdhJKMWTQcMrb4fxQFsSRKY3WzwrGAx1vDtzSpaAcz4carosP79wuWX1ioaWcUQvQ",
  "key39": "4ca9cice1cPpo9Gw55bBBpCCpWjjEJMo2aYY5RFCywDZSoJyk31iEHToZc8WcbsRgBqEa4cyUGeVJpvTSGVPdBFR",
  "key40": "61aX1Q19zePbY4CB6EmjvJMzxhvx1S69Pgq1ZCxMJJU1B6WqBa8nxDLE7KEyarVSBnQCV1hGNMsXhk6P263QZDaz",
  "key41": "3q58pQ18xe7TmnfwfVyczhghsKC13eFvfAmUhh5wAuhHq4YLPLgUr2atHEFjvJzvnXoPsZq5UL8amCD4Css28BEV",
  "key42": "25sEj9yvrjxxiotN879FBhgKCAR5urwdwTkHQHrstbwjM6fPjG7rjP6WcX7Lxnh8o25ywdgGKDmMTQpDYhAycJRm",
  "key43": "5ffVUgr9boYh4Q4ZmRe9FqYnWiAcA47Ryi8mkgTb8BYmXBrt7ANi7k2AN8ptQLZRmJStZw4FnKsBx281dEoXyLbb",
  "key44": "5ug3jF2kzDzsMP4FZBj2aW6ZrTy87NBfHyyVJsoGzMAdk6BUV28aAH2WMmdkzNUsP3kSZxMBukXBmo9TJh9f9XDn",
  "key45": "qLQr3AWF8dMALv73mBztv5AQAdVLBQ2Fx6AcA3M9hodhghZ92cf9a6M37sQjwYBZWTBgeJb19vCEFjCfHuqXBcm"
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
