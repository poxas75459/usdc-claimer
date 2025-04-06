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
    "2A66xhg5Jbo2SzjWuEpHiBq4cKTxpNerGs2EEtpvoioVyUunS9MPL36EaCmpeWvehgD67XmESfArK4L6rrtVVzkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2agtUAm1pPhEmZJLz6E35xnbGmsGUeDwh93GrzGj7KoEFxqiqDZGUyqxamt34Jh4gFt7yBSmzEXPk5H5KgQLqTQt",
  "key1": "4t9Qbin9ZzPjZvbHawu5p5sCn1UrpWxeKr8sav4ib8LSDNamH2U1nQs8y2eNVuGviepHmDk6aUD1zLPhSR5nGKT5",
  "key2": "58hUsJFXP5AAxQqbk956jhxUXoWXkzAieJKybMfTCm82Vmx7jiVWEh2JEKZkGK3e4EMvxb8xmEs9wfuGnpUvhmG3",
  "key3": "4wh4qxCpbzVnjsqcdTjz4xXF4HaKhv41GYLUM6rKKVzhL6GoWam327y96SGeRi8AKqun1qcLimQRYsVcGAgLddKj",
  "key4": "3iNksYCrg7bWhtrtV7FbSkgoZrb3bxbZYfjnxGfffHQFDzaA3qwXr7B61v1qzZqa2YpVMiovphud2MqrTGca7w82",
  "key5": "3aEkPHxLMMzNe1o3kiMW1uK64ZZDxifq7ai5aAe5DCEARPtpvPWqHC7LhntvmfsZgcivjYit5TKA3GLEcGt374Ev",
  "key6": "4tawatFBWDck4q4hKhwYbrviTGD1p5Pqnr6uDDzoHus1QoKZWyaiBz8jVskh3rZ2ypWdwZnAFwN2XSHgcQDuPo4G",
  "key7": "2fZekHtQ6dPmBTKVpX2qXSQBMSHoDNdRbBYd8YaqJkEyCCFAUwGZMdnP3xUpoy2ash4mTi7wx6KEMwiXuJ7SUEMX",
  "key8": "4M3Bgcu55z631DzjnbZhwbzcy1WYQzgKr6Jh4LMs1oiRYPiHiaXPvToWU9ABpJSdwBC3Crz8n5ao6AUZBSwvb5c2",
  "key9": "33J7GH2wZ845SbrUQEwgUx2ytqZScha5vv5gQqbrj8vsHyyc5dPqtwTwcC9vCYpwqYbpAAFGn9wn84JvXdueHt1h",
  "key10": "2XssQ8qirUBM9BwDTLitdBtxdfav9UV481UgFCUN3JXSfi14dQq4fFT5vxziKVjVcZb9YyuXqsAb21pNY4uqrFdp",
  "key11": "2bA5XbSSy6j6J9H21CQ5CtMKvTgthF1vKUwczS5QorHipmn2PC3Zv2adHpfo6ud6iRqYyoDqDQsGFtzXHeitM5RN",
  "key12": "2HzeqihMCcYjmb9yR7csovir5y78nHsyvMCq7WiioRgirBDGw5vWKGR8NhtXT88mpN4CTfYUaHY7ugKn3bchy8yD",
  "key13": "28CcqMvTk3vpZmqrPSDZyJe8mE6yvLUqkdiHeE7g1joatQAzxvFJcRFa7AgwMYKuskdX61C5HxFC75jqKZ29QwGG",
  "key14": "537razzqumqWrEgA5E6gKo967SnCcapSidQAJpcsr5KMkJd6XqDbZt5HJWbqYBA2M4QuN6wLzKtmwe535rTGcw8W",
  "key15": "2MqCrzcRy69LqkE4CnKanyucDKhSmSxvoCVFXgtcFEz1enYMfWJqDNdVrYwvu7RGJHZ3j3XK7CM9uACYQjWHDpwd",
  "key16": "S1Q8Ct8eofLr9Yw3iHFtJDcXcyBRppbgxfajVJwXFddQQVkRN9CuXmmVJnUtjUM9qS8tiWYztuboGy5v5MwhmQX",
  "key17": "3y7thw5jg6dezzBnsJrQ6t1xoaRXrRa7qohEwoW873dyus5f7pXSu7o9tmfwpBPRX8CT1o1GFWiZCcvm9dXcAeuv",
  "key18": "2SrKXQBKxjpec9kmVmkLMdUxWqUmuqhuaGEQVcfYLAiNYgDGzKBk6ybFeoJLeDYak4FGRKhuBrDnQX9pGkkozxa3",
  "key19": "2C7ZMNYFgvhYjZbJZnhXwyYxk15VF9nxoq7HuHGUfG8zsVcgJJmwCbd4DgPUE78VhQ2SWz5h6UytA7W9jd5CAJfH",
  "key20": "3P4vyp2YbgmwEcqV25y97XrvyLKo9MdYtDz9z8fT2SskcVvs96cJz8ykNa5L3huYQMNwdVEdMR4afcTFBnmRr4MV",
  "key21": "4YeKtJpAj6BjfvRuFRojWN1j818SHC6XmBQzrU4LLWu2kmqH3yQMqYjpTKyrD5Jg1GvVoKCh85nxBQ7kRmmFbnEx",
  "key22": "4g5AbGA7UMvcJ2m7EgKrHxrvb9u4DKe7idu1BMkYYwN9dSvwUoKxo8foc5itFac8nPoe237UubzoU5E13taShuqh",
  "key23": "eN3drA1XvmcYzRtNRYiuq3CRCxxYa9sZ4BbCSUbYcVBvABVckiMgJkRqd6QVGRZHi5hVBvQgR24bH6Tere8dgtR",
  "key24": "ARh1YYRXqA5vFMgqG7otd5wPTnkkDtRadsuxe5ZGwV7QfpgDHpx1M6VNFWGUPoscSjUCTCXjz57sN7o9Q2yfxi4",
  "key25": "5MnTdEnFAsxEGL38eEv55T3sn92rugBKE4PtjCVFjJc1ww7B7JLXHz3LWmrUoFSah9mX4YCKS7ubNeNjWPtRzZZ3",
  "key26": "43qNaN9Dhhvy1HnNNoo9SZnUYkS9oDinZpy5HdY74movFuqBJEJ3kgb3wErCnSrxMvH8LZ75iTQAvY4qS7Sphbay",
  "key27": "28Ek8qJRogoDj2cBHpV7vmrcPanKW2335zXXYfxGRa6CCk3NDRWUYiGHvKGbZ1S4ddK5wWdqSxd9iWcytBD4XCap",
  "key28": "413mxnCCEmEvx97V74ZDPH8Jyxn7rPQuRKb7TZsREbZ8qUhLXknktnT4v92FrVXS4hNQvhAU6Fi759Tq5QHaoN1x",
  "key29": "yq2nc8WTKYakCDQTN3tCCxMbBXSQ1QKT96VTWBdEhEZi5qKMn6NPmffwEXtGFavmaiUupTVsdwzMzjqjU88ZmvH",
  "key30": "5jLbE6iR6Nhzz1anozeiByvTSSJuemx4s98FzeN6iVqvMksWR7Xgu5FSdqknnUvSYtzPnMLWULPVh5fQyy5cbYYh",
  "key31": "2N7j7Qf2hNn4ifXnNBgv3HnKiNNKToyQFDmKyw8h1ahym5BPSPxgGL9cMr1zxr1CPiMSnHyLefZqTCEpSWTDbMnB",
  "key32": "2f9yKu4RdQb1oGXZRJMyt6LrDKzdaGjfS4UrVKrFhX1Yab4d8M4Mmm5YyfQ6RyWzPGEGZjrWTVm6tvVZdiL4afya",
  "key33": "4wCMKkRC9C4ZWDbmfVciHqKipbhjpgbtkqbSe4EKE3snLvUwY6ipNAfLdpmnT9TcM46L5K3KGk2Zg7sqTH6DCzxb",
  "key34": "2ETBDo1xP9XCyS5sHTNg2zkBHQs8S1hwk7jvgXqDRD5McVmr3E6pfMhB8UC8UhkEMyJ14QYQ2F6oA38q9BMpjH7v",
  "key35": "2wS8wVLoKDbDkqyWCMt2MsTnmER3DunE8TqexwtbtvYPcnugZbRWtffCct9aKyE821FXewf1YocWar9b4Phg3Ss9",
  "key36": "2ks1Jc7fHatZoun4TeF1gTx6BDELnezRUZaihA8QQoZtnhNWgcVsZbJYcKSgCHGQdGg9ZBLpVApK15AHH2LDkJow",
  "key37": "NSDiQkUGJwFtMidhNLFLpKU7b8XcSP2cPYvvSMa7Pvp49QzYGNEPD7c6gefUcTf9dEPs1UVYc2cizDkmeBR2Pch",
  "key38": "2mg9xiNWAcXaC7ZTt5zeUjz5iXdn5Ry8SkFBfGxZSqPTF4CMYUhLQDpouocRsMuA7o6vMmCt6VENWwMCrnpzEpMe",
  "key39": "BK3x5vHKXk5vYBabBWaDAaLqHAbXo1gQhYtjTkm4BmoUNBrvLKxU3qRBD6cgGtVj4tY2Zn8Gh6dbaYcX5yJs7DD"
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
