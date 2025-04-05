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
    "411eGhCVpLh5WnRh9JBpT9JtsWKMe4FYVZRXyDLAcsFVe85BJQusizxQZ3nQ5aV4mFgQceNxoe3B2Uf8mqd7AV1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K4NTbqQuaQe13Xw6MhEhZNHVen16VnDsE4r4zPj9vgradAvTmMqXz1spY7dD3ZMwMKVHJm8cqjdU6vRi8j2B4xF",
  "key1": "5fsdvoZqu25zxWwoUkAqaxk7mXk7Bi1M7LpkHLyXuRV8E4mKQW4r4eRec5Bim2GLHELMmQsWzBgmD1L4dhzouFZK",
  "key2": "3sp18CyDnADjmGthc3xrfu63NBJLutS7zjjunyPGVgonZj3r2XdtTjEvoLhdHcXRiKywy33oGZtoAoNXdiWTiA7p",
  "key3": "4V34G2fG4YcojEEeJg3AfaomntAVnVMosf9ca8EJDhecNDnmkqA9oy4mujTj8WRD6Zn71BmLMsNit2ZjmXxopUXc",
  "key4": "jEm6q7Y3fKUydoq9z8poPdFyZFmTJgynnqKMVwYufYp1p3s5bqTvna3Pn1vck2x5Xump8toqz2mS1HujTNbAgdx",
  "key5": "37dpHe9ZkYVjHRDUgnKenWZbW1AiV1SuheJXhVEyZMn9NQ6iq2a6vqYee8eCufQaiXkjBGVx7xvr4aSpYH4D1yti",
  "key6": "4898KcHtjHj8JawG6zrTFTiTGBNjELhay2SB5QyNn8CcwwJVQ738hx3M23nbU7umAcMXRJ9x61v1px7XEERLfsyY",
  "key7": "5zxUDYX52MzaJhE87g3BuWcu85s1Kf1hQkTCrGJ5CdXcAw1c8NTBEVeRFAxtZFugjdxbkfPtP7B8c7C4GySQM4Cy",
  "key8": "34vbqG4kwGcBbo9PQB2avui9Z4rWfKXytk34ty3uscY9eMU2qkyBKhs557RHusXwdfT5XzEkBia8WcELmePbnprW",
  "key9": "46vGPoH4HTEZ8qUTCBY3oVawyUhusUcpXSCCzHPzNJFfoSiBW98gGJXXhLE8h1qs77Fqk9NGzV8r3P3VLM23M3DH",
  "key10": "4HaL7QnxAWt291X7eG3zCc13r8fY85mTHdHx19L2yZxXrHcQmU265kWbHT8RMiVWVV1Y9aR316f6f8e94e52Q4vc",
  "key11": "2HJuxPJqzyVAHYhhua86Xz94ZkuKYe9RCojSBRRsorYxqt6yVEuqsfizQTpxoeUpMCibMWwNhiC1itpV8kGSJaTU",
  "key12": "35xoctRgqqmuN1C3aurB68wWmbHWed8wEBGuufY5aJ5bMM13DjHdDQQxZwVzzZwVNpWc71cw4WXorvgWa5zsDfuw",
  "key13": "52ixt1WpLPPvU5knh8V2yM2eLeM9PVAk61e2CTxDbM8gZZThXF6AmGhpzVHkLbcy2kofPiw4w3Fu23tUSSmmF5UC",
  "key14": "9A9WeDo7PH1XYkBnA134AWNhisoKQRjYRsS12ku5U51BSWANcKdhQhM5Xj54nNgPoNE9FnPFwNCYL8DP1BY5GVt",
  "key15": "3cu1eidjEJDVcgoLJ4oomHboBjrojFcPdnBPDcNvTaxzVy1uVrdyiUraxMTuh974AN3iUKUrASbfXvajp1qXDjLT",
  "key16": "5kYyFGhHRBEREKYgiYKiPrDQAeKiAQH2SGmhUKbBwUc8cZ7UoaHBLay3s8eNFX2fADuv351jCxg781CE5SfkeP6W",
  "key17": "AA4upG9fewyxdZxBKZKWDnF1hvtHWUZH7sfSMnf4zdBf7kCTJFL7LRu6sRGdPP54CQboUZCcpKY9oDXBcpAqqiD",
  "key18": "2Ln4t5VH5qxFHeA66fKb5YkqbcQL282ouUt12Gf642TcG7ysEkRskWSu369rDDRGjsPNpBwCApm3b9J8kYgJRj8F",
  "key19": "GvQgn4MN7MN2yXrYRyFKg2okXWZ5Fs6UMLmiRoiXxznj59ikS3hf542QX5QQezgUASz2t4LQyyJkUyfYVoFq74F",
  "key20": "2Jog3Dhordy7QPVkQnfKNCae3JERfYmEBKJAWgKLFYNJfnFjT7xGcPHrxG4RA4fhopxwY9nssfNEE1MRV4wsUi2U",
  "key21": "39BFXDXMCQif5aqy7wE13nPUDwLbH2GTtCK383YJ1XmycigcL5c7pXixLnBgRn3WrHH6eQaGxQxgSstxUa4HYXCz",
  "key22": "epEwJSrjaF5b36s1Df49tk3QoYDzfkfA8VA3ARzqN1cG83gmpEdGmubPAb75tLJ7ZA3J7QwCQenf8JmbJvXcJvH",
  "key23": "3J8n3DETrh7iw2ydfsfYSTZ4MfT9bJrYEmwwDvAyKFJftZq2GABtE432vRHmQoqYPgcMafK5mxwPp12Pkt5zMw1g",
  "key24": "4VjfNX8pT93gZWTRjCBFB5ZmyvVL4oh257W5ce5JqVXSNPzRGxeaQC853KVKz5syY2tFYMigb7e3sXunVyPavKh2",
  "key25": "27mhA6stCzX7Kif5HEEJ4H3U3WeYp4Nv1xqoyc7821A6TdVGeMZSjB5r7388jdTrKjadjyVZEKZzJfCXyHWwezi8",
  "key26": "5AVc3ZQ13Rz4jBPm6EYMrPNy9fk7CvepWrEULYvDHjE6pEqtYDm3V4ed7NUgagEosNmnw3QHsA4WjBRWqHUrdKT4",
  "key27": "3HrPTXSakND381EcFZNJfdyq3u8whXwYa7vTAi2voRGuGRPrtVM3aep7RmryTq2wgbcithRrtDF8AdxJU1S6AZaF",
  "key28": "5uBpk71AkA6jWfjoT3Gi3cVheKPWrMaMW7Scv2EkvyFnvsBvmEtpCADiLRud8QKfeg4eGJcRaTquhzn97u63f3kY",
  "key29": "47GcnKBEAatDQ38rS1yqYNRd3MNfMyn54BHN26ARuSqYLE6YaMMCDqD1jHVhhUWq2rVG9APSypWxkHLSgX2YD58c",
  "key30": "34n3g2FMrFQGcko3YUTAArZwShAxRXrYBVW4TxdbJEJdiWgyqJcRakVQvQYZFnNm15cAaWk4e43w2wvwKK58q6ys",
  "key31": "2qovExy6FVQPqesXfWhZCbmDpdJfT7FybJ2hjFkZPiv2GEWLd55S7Putry6e3DKo8RNYw2jp7WsoLMs5C9ic8MNf",
  "key32": "emHhyQunp9xw1ELVKSSULMSvs3s8JXpdbCALMbu6sCJyt8DopbwWmxdNxEKEbfnxi8V1VbgxEZsK2UDH4oxNyKb",
  "key33": "67hztqz7xKpWXbjJaTTUF33jwxrhJYTR8z6hPZaezpC14TmpbyrgVtWjSCzdWZnYDnbsTgA9fTkiD6GwvQsA27vG",
  "key34": "2KxyMs98hPUmmEPi7bVjpHdZjNyaDYhaGu7JsBwNkmSiisNDVBxWfE9fgDahHHKHh5G262js79KrSouw83mqtucU",
  "key35": "296A2eLYgszGoYApy2mUCgrfwpTnEb5vJVK6Yo9bK9VubSAjt45HfPH6NnAdu7GrKkpbh4gn7hsUSunSuTNHkvsc",
  "key36": "2f1MLZDdPePspCs3seGjKtyt8wkS9uy2XAhZ8j3uerwybpxKUfjxefKSHZxmHGxbSaWzgRRqAH9ZkRvMQMCFzvu6",
  "key37": "4Kc3ntarXCFNKAVHQjEwodzMWtd4yXF5XsrXAym6vm1ynsBSnwv5aiDoyyM97Q3HZnHcEQhgn91BikcKLhcVbbfj"
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
