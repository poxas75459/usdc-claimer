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
    "2Xj4hvdJFWjubJjyq7WbDouUWyBm494ToG7pdevTYt7VXciTRr5UUBtGbEUDMhjfzBw7jYXVM7CizMNRhggfRpU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SymPXa3BrAh8thaCmtRpM7ZHBfy2rgnTzB6Soyd7s2tFzycDWrWYx35vyxghiNSmNobVibTJ7YgsEsQY29VxsEn",
  "key1": "5FJLB6HBCn4kZSbX1v4jwrkXQP2AfFRjD3bLwy25YAgcwY8HSWepcp4EazJoBmLAfTh8U5oGQMPgEwc5MNPXUWMF",
  "key2": "5wq3eihf6jSxEAU2Px5TeexQXFLFi9TTMYgH5zQMd3WgsLkfgCfmkrVXcZe5VSrEvZ1EcDW8FVMaz6wJtbuBh8pZ",
  "key3": "4fkoMUkcqprbT5erJd6yCy15usFiLzVtbq1XfsNxCB9peKZaF1s5SJMVZL6dmuvA48WgsVvgG7Veh8JbvwMY9BZr",
  "key4": "5dFgG1N9Zsf2FAoeqbrXyi5gNcN2nG9yCCrr5ddUHfoQ19A7smbjoNpMrSbKvqKSX6chUf9HguZjkUrQggvtBc1v",
  "key5": "5LciXBJqcQ3DgZGFUa8WjmpVbRPd3X8WLbkvECt8mCFm1abNYh6M1Hy1Y5JrETB6FJrRnEvVzRoyHQnZ1vnU7DK",
  "key6": "2npgXP1F4znLC8KfoqKKP45SBv4yrVkmkdqA9qXg73a6ihrrqZCsX19W23GPwEcbnEvckJoCvzeP9X6M6xpBEnbV",
  "key7": "5s5nXZoK9Zqtrsx6dXqnbQHP6CpNWfuim4dSL4zKgnPLJ4Eh6RRGUQ9Dysu67jiHPYpVi8FiNu6Yu6XsioamQi9q",
  "key8": "JAERBndFLETA6N1x49ifsuSyV55q9qxqqd7F5yhvdP8UV2pmYnWoud2dJVjRRLvCTBqXsvzDtti4Sw17m4dECY5",
  "key9": "33j6DLZmPZQJaFyfCFGdk79vUQHF8qFeBPh9PZXaQq6vgTHMu6PHTppvFhx6sDaAAVujL43j6fuKYjYtoiPkiQsx",
  "key10": "68JJt5exvjuej1vrXNkUVrsddj71S4GfxuJE8mJ47v6M2p79yVXTmhHez853PH14F8XkQ4MgU5SbrGbDQhMciup",
  "key11": "5VuM33ULDG8t362Nxy1QYUNUkskzZGW2YzxA43Kn4HSF6ytgJQc9t2qXBLoDqL2sU6qiCe1Gb5NKpdgWdAukFFQa",
  "key12": "4dANJ5tXvDfadRacsCd2BoHr2yYAZ2sw825Axar9LmAzixDQvXGkd9e5hN9w9YbK1BBYzgFPfkeQNxS9GsmVWMYn",
  "key13": "3iiJtXi9mEY9ysNevyFYET628pQwvrmcA4T6gbXoKM673jEBziCFFNaoAfU1Z4pPk13F8Cza82ubviNZEJnk5Cux",
  "key14": "3ZvwWs4PaKzMTVkM6RNL3czjRCyZz6R2ZazMxoQmvoph6w9c52M6nGKZm88A2ZW9LmkdRc7J6gPvPqzpdGi9e4Cq",
  "key15": "2yUyNKep5nmfVhYmk2zorXWYN4Vr5PN7DxjyYaFPzto5QmUVX3cYbP6jCnJa829MtJWzwu3mM3MqLLVe8yfAYYzY",
  "key16": "4PxsviAess2uVAArmM3C4zbTho5Z7nKnoMVg1KTgkGogHdFEoZMUEkEqXdUUv42VFeCvmGjgv1ed4iy2P837HEbS",
  "key17": "5muht994WBcWw6e9bbMJHNNoaA5QZPQivS5MYPVFmn42TxYBnbb2LhNfcXzr43PBiudahoQeJJN8UX3M3eqEvGMQ",
  "key18": "5eeV9qA71M5w9w71B7iYhSLBM3DHDrM7HE6EfnQXRmDxq1kbqdoYpVwAmnjswdqY6Gsi2Y9Y5P1ZzDVxZ2Vrffic",
  "key19": "39jKAjGD4A914LmmE3esjssRv4tKGBdzs9My1GzzcPPk7ge89YGw9zogabgSqLqqdpPPC6CbQM9vWuUFuX9SLPUr",
  "key20": "5VG1T6faGCq1zZ9UDSc6TigLgJSB8LCHy27nVMKHY3JGMjYh22Zm7wTxHKkhdtjSy3Db6WjoPKmD4xvZk5cavbpV",
  "key21": "qZiQpQmXhh5TnHP4YgrScZbzpxhkjbJW3JCSWTRKt94bf2ohCfaQGsNp3cLe4BBBKLBJC8ht6b6kQpHL8zdAui8",
  "key22": "2AXJ7wWiV6NhuufGpKRRQyS1KBkqENxXoq38sjz1LN2xxyKc6z36rWnEokhcvDXnDsuhtwgzsnkJyjnBWYHEUXiG",
  "key23": "5UEoArHsUghgJnpP8jMt8xneVCABtgD8tLB2Nty4XWF9QbvH4iDT57ma81NaLHXfePJ8qWvSuS7mpULUnCkRzXjo",
  "key24": "5njiXm8Ef8EsogrLpcwDoHuXhs7QKr32AuvvNuGKqHeG8y67oCvXEqvo1bhuJVLq5mGb5emXr5ouofXRsxsNESXM",
  "key25": "UjYCbJc8GZHRwkiWedVDhQJPut8zfFWWrghypgy1wBiwDpUVBuzVqeF14qcwmMyMVHzKkVdrYLspGNoMxY1DVcu",
  "key26": "28cPzeKrEPQ4iQLVBCLQcpUcnyqeMv8yj14HR1qh8APH6TBUoYCZmHiNrsfFS3Xe5Swym1xq2xLDVvw99nKA1bz6",
  "key27": "2P4Lf6jKctVCQtnS69fyF5dCEeP5SBZL7xzuhbqZnxaQxcGbsKbdmtug7tyFfdXNN8ZLbwS8aVJpJ4dakZpZ2MLR",
  "key28": "4EUtJiw9TDqnA4ry4niX2QhcA5PYaq14DUZMUoC9JZ1Z6T8Rh3SiJfMiAaKsnWECaVawW2ASV6W8VGVukyna8xXo",
  "key29": "5kBgj7nbagGrDEM62tws9xVju2AuCqvoXK7XE7KmqmjQ4imNH7zjCimoRmRnGbcZ96wktU3UvdiBTh3BsM8FZG38",
  "key30": "ETph9oamMCMZZjhn22hKCmYxUkGoF4gNcLjLxhF1mFbGbpLzB6yT498wwNLt7p5v6LfpsBiGhnVL13CScaeJzYv",
  "key31": "2yymyq5NcNqeTJdL9jAr7e4D6UmF2h7eGWnoDhkUyamCu7zzp7ycSzDDVBRK8xry7EKNGfvmwhX51UV3pj49miew",
  "key32": "53A9gq1oBTRRbW1gqp1etenB3VtNVUeYJAvqr1dqrKDAywjXGqjvrUWaqwB9bnvz8kbbM68f2SwgYz9k9HS5FJNX"
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
