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
    "2bJczPaXehdVWm2xi7W9NGQc9Miiha8m4WJx5hTkxm6PUyBwsFo9QvYdAgxkeQirhE9jzXkXLTaGG2athEAEPVQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J1FgBcakL9TWHXjLgHWCP87sbMCxr37LycWFVd5vjKsY6GvYczZ9mjFv8H3nEqkWXKtC7mb9EpbxV48pxgMeTiJ",
  "key1": "3vosDbZoGUVPETztGQxgHQXcUBSuVLrqB1WPxhsFnFrA1fJnRWXiNsqh8YGFLMfyKNpXdsXpJfECRWyhacYUfDbZ",
  "key2": "5WeGPk9jPKQvDCRNVEDYLPgf7fo8dwqnSxXkofJtdmD3QGZdQNELE4EaKY8CXGCzdBSaxGCoS4vTZPxC7NiNktJ5",
  "key3": "4KajXBcsB9DRnLHKcrX4hqKrG9SM8tNQ6MqvPjmgRonoX1dG1XDEushpFs7mxFMWyFxZgKXBSjEuWWyuLVXrwc9U",
  "key4": "3yYCgRi2GTppEztEQA6naGSHBKbiDDKFxRDEzxykm8E5hegDXyqXCuMuBMoCFFb2NcAWd5knPKkBoPkEuS8xp3tT",
  "key5": "2wTzWhYVwTJpyGrvSyb5fpQj9yVrXnwCR7Sdd5rx84gpMHYNxXYx6DgiTAD31ScErowXgHvRLqtkZa9hBSoVq5SY",
  "key6": "3r6gyPQtG1RwMzon9ugQ3NeVvXDQB9wJ8Wk4vVfxMX5ZpcJE75VAccxAAn2jRrihiEhJyJ7DasC81SYEwSoNNQXV",
  "key7": "2ZL1hV4eN1AhohmRc5mc6SsBTeSrMikF4goVZgxhHzzDU8benW7jAusMJMsuP4RvXUZMERTQeytAr7NoQNXkyNSi",
  "key8": "XNuZ3axKMahm6sEG9nrPyPowLG1KL1dxyZB5B8epBQMLwpDE73fPkRs9Zqb4MqgeF851cQNZUvu4AKotNqEJt1i",
  "key9": "LcXukPqzgCM2kc8qdjNZ1V8pUWyU7DG5XyyPXzL3EVR6TPXqpL87YRFn6C4oraNbV12Egjn5GNcDYDtXvej92Xa",
  "key10": "2xS3rWjgnDt8uhDqmXBtw8toS8mEKwTpYVNryWFxY94wnC2BMdNdWQe7yC5MwnG1hN4gB8K8mb12C81hNAoAgeiD",
  "key11": "EWo2zn5gdkGLjmwyxnSiLQcpGGNTutyRpB81VSAJmewqYPaQN9JJbkSkt7ZQMuvGATzA9TZ9B8JqBNwzMP89o5h",
  "key12": "4ZiGG5G5WxwTW2sv91SYuNboCAhNscBLN2rU2F5ddp88WnYdrPn27xEcJ6HzBUaTt9i7xnrteShYyAWUeXccgHfV",
  "key13": "5TxfxrpwCErDWsXiZMMkmtJ82XqhVNhvtGooxkpDfiri2K4RkbnWFRCLF8MnK3DoHnkC6jeaV85mS5vspEFTSJF7",
  "key14": "3R3Q6KAyRaL3PPf9u4XMRE8GoBVDoXsx8qkgT4wv3bve33W8tk7cJuwJDQGT9PwNGmc38TSPfw9spPaJ9PZ8Ffjc",
  "key15": "SGSz5eCpCzUKt6NJQYKAQa58Vfi2wwtRqWVgS75bx3a9fweEz81bDsQ4sbz6GsERNtYBaTCQh4iLGd3H8Wr9aBY",
  "key16": "5cspgQV295XYDh65cpbi9RpY5LQvaFMPeJBTCGnKhEJ8vchGDiZSDPc1rWFNJvXmUkKR1e7hJejX4xA4tTiG7Gjz",
  "key17": "5gTvPE1QP55HeUxJ1BJZyxgr3PbEanu6bRdsqsw4BmiifyZfwLExBqk1rqensKs9UPbUnC4xKyNFA5ek4bAwWw5N",
  "key18": "4nYyApwcQ38FFNvifzR5yGVC4KtjxH3bTbCgQMKsevmZTqDXK8XdVGsvr8ti43vwacBjASho5FanweHR9eM55ih2",
  "key19": "5t3omA41frLvcb9beNLBSDAbqUxTmrkPTDQneJkv9BRRx5Tx7ax3EurDsmhbuMTzi8U9mJPVRRCPEWnVXr5LyYUa",
  "key20": "3oZodctXkdP5KMsbmGu28w5U4nKcak1z2yfvMTeQAXrAJZ8dGumZXVM98mp9acWw95SAnbiXBi61AdArDXMvihJn",
  "key21": "2ABdMPEgH3zsdvz49LsqsySVByNcsjbZVHjjCGf7N6rMTpzi8Xi3X4vcSLMd4K8iaazCAwYYgFjhnbw7ZxJyGD28",
  "key22": "4quJx9yBWBNibBkQmJHcsEgfQoj948RUzig45D4FWpxBHUB99rrhWtfFehgRmaJQGe8KhEMitJXwbCfZhRrCLVYw",
  "key23": "2mwpAMSqJFFedLNSCiB6RqFGxeuYuiNCGv4zwMGTogtBnxx9RAd7iHGG4szwf7xoXUby7EtAuGksf41shFhhZDSU",
  "key24": "N1GDdL8QPc2UpKU7akm9sfXeqxzVwWB4rYd5S2WxnJ6LpfdC5NbCnKa2pg4jP1hfmJwD6pq9URgdLx8mmg8ZrXk",
  "key25": "4vCqKnfBSzFgPNYHq8PWvmpYhCQ6NYNgcmXYSHp3G9acFMTG7aWjWJncg3UDBdNzybMT6Nj5VLLJmwEPwZmit2Pi",
  "key26": "ta1N5c8y1LkS5vaPzQKRLreQFjA9DGtkaKbxMVxREsPmPJjNJzTNm9CLBj7qwN1YMMY4R5vnwXbM5W588eRX485",
  "key27": "3rmhhvWsSevR8wGrUBYsFAn9bNzvKJKGViqgDqCGUbtCmHJ8LY9hVEaWujJC2y8mxTfmdUZFuCPaunjGVTwYVJSS",
  "key28": "2Et6LjdBT6XhNNJs9AqJxNqzcR2pkJf8Bv5ceqb1G2v33JwgZkxtkg9vdHiBwmLJ5BCfsGFs9QYhrwpnQN2otFy9",
  "key29": "4cirn97KiEMhDvL5mifcuNynuAAaPpn2yK32DghdgFCURciYeXfsLvZiQjqGW3Vx4JigKKEwPUCvXfk5AW9bjbXn",
  "key30": "vhRs34Bg5Q6BsqD8k9dHTDahHnErsmZv3VTNqDv8xRpkxMdYf926CusQTHcDeJ4FDPtHbBHmcUBfVm31GPGCXdA",
  "key31": "2csxB9ot23SYj1veuPiCcNnvKxCNYJCH5YaX694LMnWnAfRHeceip9ZNA8bgA2iLBUtzJRdH8C87XF5qUVT7xsrT"
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
