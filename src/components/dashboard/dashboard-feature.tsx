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
    "4dQDyak6VSTpBTcFbEvPga1f6vKTVTQZH4s5utkaRd4rprscnhXLi6wcTbCb4wEjioLgisVH2bV9tr7kAiLvfAiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "js4VsSJbwVv9FMTDHD7Th7RQ6vDWdcERruoxT9GH8AjNt5xHn1Z8N1jAW8Up2FEXA7gBTbUdM6Cz7Xmi5uoxSKr",
  "key1": "4rF8RcqdPApaEtXMSVwxX2NX6W7rSV5Zn88WxrMKM41hS5iFHY4pAiaQ4L9EZ73aWVHJV37soNKFVCQKVU3yuHEn",
  "key2": "46f3qCmemGYyVQWDVzoQMAcQ57K1EBtNE6BxGvvFihJQZaqWpStLAdjaQVR5hGfuAdayX3Wr1GkZAfP7Z6QzamHn",
  "key3": "67SxT3gFZ4W7hr8oQ17LWfWVdzZnjRncuX4kHKMUyyaYSa9RTmx88M2tjgmsNQWpGdn6bREks78LyNgq4cKah3cv",
  "key4": "66xcdGbZ9Xy32BmJ2FiYtccuYx4C7Fb2yzVFgpvBxQrwk3DFQDd9P83SfgX9YUTddVtYvWWTFrNfrXbusEpWX2yn",
  "key5": "2JtHSSskXeoFE5mfGGLQHQANsGerSYnYAui8SJ2BpMs5oHxEncZJjygjK9UNyPxsoHxoDxUwuax7MptNh66DWayT",
  "key6": "56SNSKQNdZVxHf9i7jWqKe5qGie3Hxy5KQQn3KZpymiP7edZcy9hvDHu6NViEAEmCi4Dgbe991aS25ZwdQnAHS8B",
  "key7": "2aENJeMfYss58BRbrPAXgCsMNBDfYeCsoZGJFEm2Vc9Jjnk2gnHLrttcpW6ovKPMRDA8bXjKvgJcYabcdaTJ2JPo",
  "key8": "3WgKiznaixyG9tbE2xcGKvdg3nzsz97Fduq94pNFa9BL8xrC7Xrq22QKBuavcwvZkTEd1fUhAgw7pYQYD2YFWLFQ",
  "key9": "4YyZTWRFAfMMCZeJbSBxQs14nYZ81zg6QhTmKKH4Wpn8RuJ6D84hBvPikGFdPohgJNwnC74yp2JfUbeqNFMX8VUj",
  "key10": "2cg3h4CCwP8JT6LtGYvkm2BNcPsqNvwCTYr5ew6nTaL8xUUGFLiNXZZHnq2paaVZBx8w7JZwriLHxo6ezQBe4LNy",
  "key11": "21W93YayUc5SpiAC6TizoAiVRzUUWM7R8sEQFojTBWP74JNxisgoL5Eo3xMidtFJKSrTKozabWfxXHvnk7mwckTW",
  "key12": "3yzJ6QJqrxiHnn7W9wBDKRKTYpyBC9HFJwehe9TbwAcjrretj6gV7GJEQxf9d9YwKGhDZeAsbU1mcjyj2V85zFiY",
  "key13": "4C8g2ozMVvseMMS9rydJreutcG8F9sfPNYa5xK2o8qw3ZaeRK1aZXuu9a5A1fR8dgY6WH3YiWNeegGS4vFgchudt",
  "key14": "3DRZx3iSejWFD1SZjAHUvi9YsCrrjXkjJ8Pv3UwHbKp1J66iAPs6eJ4ZFFcgr9H5wfgPStCCqQ5umE7uPjTC6uUG",
  "key15": "3ERtqEHCLvgNSmcykeFEUkPH9shxT4i779mzHA9Esr4Ej68zXQsA8hnpL2ifsudgVzQbuLg7p8bUHauq53tmBNaA",
  "key16": "xNTpzgGFHDZDS8yu3hyQ3VmYqmhfUHy9NHkrSo13wo32wdrCHAwx4sPutZBTwaiodH979WoDQ3XEFXk57wZHzAd",
  "key17": "3hmmetu1jq16X7ubjFESKKQYRjuvyonhEhABTevZwsAwC9QTVvqnQWaSgq2qcRiYLULEtgdfXr2JU2zLjNhDjyRw",
  "key18": "2LiVjGn6fpWb412PGa4afJVyQSB5hdLyrQhVZDunSPnKqJTpHH3FGecbeZj2hV2jPUwkU76YbA9eQyvq5FopKxDQ",
  "key19": "RzKAMVg5XxN5tz2E8sGxp9Ak7SSdTLMDfKFMpHEZooWwoGJ4x9pnNHzbB5QN6L8uE3auQ6XiBYo3aPUGdwTQJt8",
  "key20": "4aeXgXi9iXvyug1yLbrJNL7jMKXyoQmWWRU9khYsQtQcdZk7AstWE3tovJJLWEhRCphiZbwa2VbkBBv13QKAUWaJ",
  "key21": "3Ucsic6qA2NFUZkbB4VCG3ZgaLMfYpKfTw9BpokAbJ8uDxDMoXeAoRn6CEYUT1TWbfTJg7K3iwnd3r8wmcmEwYMB",
  "key22": "61mX7ZUJsGJG8da5vw2GrzHNQspVkVfac1GLt8tjda4cdbH9A1PDBoJoCLT1fQQwxM5gszpYj27r5QsBwQYZiKdd",
  "key23": "2Lc63i8hTWvzC5sKvaCsKFDNmif5iNQW8jRcPziDvGadqcAAqMiW69c7PrhbbsyzCjNwQczt7hmdT2vzTCCoZvZv",
  "key24": "2bHfaTKENqr6JzBN9SoPeqBtjPW2gfyuo4MdiK1y5VA4QVCUvbR8TuxYTCssxb7oxAgJm6E42shErVrHE3Nz4QMC"
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
