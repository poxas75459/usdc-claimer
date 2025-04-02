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
    "2AvxjpBbUigrCC5CsowTW8Jtad98H7fRWQUyQZU2MKprk3gNq27UkKqUDGrmEeeELPxZ1ubRBti3RsLdVSgWxo9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m4F8n4x9W4uAZgzfxtBANZv3j6ZAkS9RZv5ov73TCPLdqAftKp59fMzFNWBb3nqP4gzhDC3uPH2aVDmfGgi7maR",
  "key1": "46EttXzEG5zummdMX8CGyvNtXVHGvDUKzNJo44dEWvUYQAb7XmpQh1vJ4WFKH2MydNXvqAbCRQxtZ6hKqbsbFS5c",
  "key2": "3uDT2iJXt3vwL9b21TYYWoqYUb8GwHNUvuP7KBnKjKS3Tjp5zmSSX16a2TyGJk5Aaq6jbL27Wcaq9Xq82TYhMAUk",
  "key3": "5FjHJ5CTDJ5u1VoKcJCu9attFJMNs3xuvVsQpzrBGAtjZVx1yJZ5UbnmvFG2qZdgVppcPqx4Pv2Vw9wPXnkDcj45",
  "key4": "cxTNCM7jCrLEQDCQawWQwMAxtbyNnB3gjUWBLD67doZc6LXw2ZfZgztSrMLEYdesCi7YENzrrGgg4wHwf1LAoyv",
  "key5": "26sYaWCDQNPRYiMKhRDruFV5mvE5CZ9bjfqm4KztkN21CnBVvZthp2ZwgYSET8JSdBM9Pgbzp63s97pvdzqwqQRL",
  "key6": "5tV3H1xb8Dd3qmSmAPG5QbPqnNh9kt9ueYRVXAL67m5CBGi9BPttVZyrjpAgdRruCNE9uTHfY528x4ojd6cBsxrt",
  "key7": "pg6U9JyiyoSE5yfctr3q5xUe1Qe3wr4LH7nCByYWxMRaQwE8SriHM8PKywvxEcCFPBbLj3Y3zyyNzAn9SRHtMQo",
  "key8": "3ZSiwpmeCwbLJLb2QZYL97SUZWvoieFn8CJiSivpgP9PZbQQLT8EnayeyVRuJkahFka6c8iGFNm5YTbB2hyH8cTp",
  "key9": "J29GwijxfkVvZsNnTPwgRyzDnxDrpyN7h19vHMWyJaYFWHH7fPo4YR3CTHbjcNXiEgeghUT34wLfkR45iWhcoQH",
  "key10": "qqTvJgGVSFRXvRQcV6Hn3e6kgxTNShJmba3svawdo1ernU28RWq9tpghXc57dgQwzQw1SRjyM9hET9vczdBjQfT",
  "key11": "JZFcSczYwJw86hCHoiMiGuCee6TnnZWw7R8KnGWGKfzbA6cU5noxfrp9QZvAgNhJ698CgUeAPx2jKBroXSFBZdH",
  "key12": "2j4SdApbNR2nhFrTHqVrMikqfBpEegbkhaZSaqgRS9v8wvb6ue6zMwQeByGdDusvkUYZuXsyciUqvCkqdAifLjDn",
  "key13": "5jwggfFXDJNVEgA8KLgB1ENu78wFJkSRRi3JJXA1A12YPmRw1DknrQfvVYwXH8r64P6RxX1Qm9gVqwkWNeAnkiJC",
  "key14": "4C85DeCV2hi3nHE8A6x9JmZWLfQtbJ7tpjrG4C1seBBwLyzjdjPimaFcNygTVRTvH34GCrertWLmgvrnoKRgXja7",
  "key15": "2qt9qBdw2Uvh3URyttttkhuWFnmVMziVF7Cho8BFdnVG11q8Soar6XRDCQTudx5WxA7riHn7AxX39JzDxm5gSkwc",
  "key16": "4jmvCbGNqbdGzYo6JVRiNmBtkGskAoXLvRiq4VrA4ebHGuBFo1B4N8ub8neBVWDR23LprvYQBytYU4dH8u2fvpu4",
  "key17": "125NpEkBihhZB6qmYLASMru7u5gny3U7BCrbipMhwtTXDkZc3pxRiegvhrpY8DkKDobKXATcjntFheor6pydC8hz",
  "key18": "3F1rVQu22hiQcJTdxcz4D3kLyVQGd78ZEH5G3AoxBD5caWrf1AEQBqceike4DBQE2eSzKaRjo9oYvRbPSHXdgxKR",
  "key19": "EM5UMzXeCrhxfQrrCeQaivwSjiKQWCXothTrWPBSiAU1dXSJuxqFGj51MD2GHViPgt49CuQxUvMoXbruGM6AMya",
  "key20": "GWqu4A1mcf94M67E4kGsXUeZ9jRYdUgW3ypd5yCjQapSuRAhvHHrhV9c2ftJxkNMLvibMsuBwicTe4NqWnZyDXY",
  "key21": "2tcsPPRNT7PvtoQGWz4NWEaFUMG9YxWnCjtGi6QuHs8hxAfCEhJ7mvuBXfX7K8NNNahhK4ZgwhvwGGQjvUeX8g44",
  "key22": "4LX8j2CKd4rcS4GXdDDmiApc8FTWiotePoqA7bwS9bWNsxo2cjZoa36HhVtvPqUjAhcFCYYrhtcMaTTkHL5orYnV",
  "key23": "4Q6DyBktnkcYjDrey8nbcqd8NkvhryemL2zpTqMr2VuiAg4K6tTwwbjyBqMowWbDzEDiHB4gGNYwutgYtXrxwjUF",
  "key24": "2jKydiU4E9srDrxSnuxEQyzad9t1gnhYHcrMSwVS3dhAjGDuKELmZdtfU5u4BvAQNVcmfAmLwEtEcuwUb3ngU2Ms",
  "key25": "393Ea7TzMNbhhasMZ5iz7BTrUKR65ThbhrPjpUr2xcYzB6WKWqiXxBCCJMfq94Ubqy5amaakub8nef7HArovkufP"
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
