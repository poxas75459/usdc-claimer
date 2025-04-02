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
    "3Cr5ZMAcaaRcC5GEmgMzokoqHHiussEs6Mc6MjmJZjkbcFYbnk9bwzV3abv9CWDcjPVc25bMr3EkDba3cqhtv5Yb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "619dx422cXze8KaMNCxSMFgiNVP421g5wQJtAywu9Cz4yM5nGeRUtD2AvUw8dQJuCC91GRSk7VEoDrSVLNt12AKz",
  "key1": "64SNL8UMepNiqxWniGMpghXqphZNhBk8Dzumbsg8PLnvdnBqCDkZw3H7HTfqosK5q8JbfXGwCxnqKxPaW1bF6ZwW",
  "key2": "3VkhBrhji5d3pBVciwtbYRQLFeWis5eZgPWJx2gRJJD1oBghBpxL3x3dhT56GxTFXDYKxehTYhbSaihY5PqwAeqs",
  "key3": "5wczqsmnxQ9H5KMhwU3tq6gnzWoXbBQi1w8Rk9fezXcZRFHjRDmYxbXYG8umLfdeezwYgBrPYzpQXFQAxnXZYT5C",
  "key4": "5nAtYMUj3Y4CgHEDy3un3773Yj99PKWXXicP8E9X6YMcSXUgBFheyEAc3L3Th4Z4YaqwKipyLF4wJA8VYGx3c5cy",
  "key5": "2wxq6GNA8ysmJAB2KuJoyXJhDeKAyvJgNTWGgembUBXQPSApisBAMYoSk1ZJxkkqqFhdYiVFDDpFNqwZAdyYCsbD",
  "key6": "4P9p2m7vL732WQKKRnoATSJmUfRXerRX7jLShyofTAZz3e3rf77z4qMfrADHVQ1v41ewEMw5BXAgS2krsHTqgLgU",
  "key7": "24FQDudMkAgdo1Efb2LoDeZ3naw3rFVEAi5Eq1mHg3RaPBpxTC17rSUdeA9He4LXRS31H9Dw6pnH7jujxWnv9wDs",
  "key8": "3ftqExQns44sTpVXUtkkLQmYrYAVzdKdYx3sLHJEDaUDL9pugjHqStHMaQ28cbRM3TbK2uEZ6wKtVxDgAioz55ag",
  "key9": "2F26HNmWDpVCriixnbttffxc8FdSTBnCh6FCT9YmpBXEo8gzHPg8knRyhbeRvBDUaZwJzphu1DiHBgDerLSyQuc7",
  "key10": "3kMnntJ6p9TMrjTmKq69YMqHU3JVJuR9HxBsXzn1ci62BVJNzLvALVWfYZEZY6xbHjrm2aGSfnGzq9Nnk94CKEBs",
  "key11": "6WsCCxznX5KxPay23Ls2apPAXkE8YFdLPW7qBRJ3q6mdGYP4r2sAhb1Qn8YTFf3WrcFQxqahRwzrosuoD37Bo8H",
  "key12": "5KAfsZB9D9fy9Y33Tkead3U9Jx7RTAK482w9zu8J1Mo2qHZA8r87rjBg6kj6Gi1x8LQ5H2QSfHuUVKrg5Fc1JuvP",
  "key13": "41NqV9foqfruyCYfqjzjtAdNqyJ4fzXXyeCubaozfXxuNRkHheutQDLtyrH7WELgnnLh2V6a9Ynnxeb1bNf1p1tN",
  "key14": "5YcJvhJ6wPps5CmNAAJt7EswEU3eizGi71faPUydRnNkUKsZc63foEDjMyaV6BrkwNA5SpWfnAZwWBaEQWE5Kxn2",
  "key15": "3qaH53PcGCx6U2gEncVNUsnUNUmYB5NpEAAFrJhhk2CG8BCDcY12qdCJ3SPmVKMTnYPNNPgM1TfMX22wRdj6Hj9M",
  "key16": "4p1j7rmA5ViVqUevYzqYyeGiFPba7rEfn2Uya8t96RjkWaq46yF4NfF1dd7kBcKezb3XrZcnxG79ver9WBYnDvCx",
  "key17": "jFN8rKexe2JkqYkquBfX7Rcyrk9krFicL7TzjiCcW1AA1kkULubGC7LgH1v6oGSPu21JguJthuQJNRokgXcCySM",
  "key18": "5g6QBmoPDcUEWE6jAKxZ2D3RZpJP9RykuHDKoG93H56BM8PWKrCzctwDXAzUBgDvExhsJxwvc57u4LfpBZAihQLp",
  "key19": "3yU47W3ZsXcBNPt6ok6PdovPsUJWbikUGhQmTVD51teqziksMTMMDmAoH8EdsgZyRTxT92PX6Xykosb9EfGrmZz9",
  "key20": "HN6t4UmzP5fzfd2abjvY3Tcpka482Mip8thUYBa9xFAb4ixJXJLq83dEY1dD35ZRkMu12W1QoeoP3tDp67nMLRQ",
  "key21": "65nWQTEuzYynVgNqU6XAWVcVzniBcNngqConaePYrtiAEMeae2pVyS9XDsKgyda95H6GqzyrfpjcdKan3w7DANi4",
  "key22": "4xurynBvmFCAaEMDqJirBCmxrMErtSxiEsm5QnQVZX3YTGvzwEaJ12jRyq9nVLpqN8kn2DtmHNcdngp8RviPLxEL",
  "key23": "2G3d77F4i8Lsg9xc7mH2rQq6NpY6RA65CGekgdJJ5Vp2jAU1s8ku4DHtxXFmFNATfsXHnTXPGbadjGEBUkZS6kxm",
  "key24": "474n8Z3rgA4imfF5JwRSWyX1e7bA2bXeHuseKo78mh3bXDAQ8NqbKLMYmkyLKR1dKSL6FWbjc3unKaPzWjkk1q9J",
  "key25": "5C8hBPMopTTDt9HoS4FRomTsWFe8xVSTv7LwxdrFcvfJ5H8hRpWAqEqPU4UPbUhBPH2ASzDY1Rb62V4ALjP1wdpt",
  "key26": "26erVxtxAdnkgeETz288WPTUZ59p7B14HMzYU3mw8cAK2jTzt6YNKGernyQ7cQr4xGbPxRfaGVqfoiiHHrHonvEM",
  "key27": "3NSqvUHZhcaQ731fF32Vk5ChNa241uhWobbi2Ah58DFhfEhUtSZCSGqVsdJkcnRdVYTRTqjSbKL5VVgawFSQb43R",
  "key28": "5d9S9XS2bxToNsk6SKcRYSNi9nJB7tCZszVEYdsa83fwM74VDZQXXg5ZjAR2N3of8onnP7hRvMdJB3GrpXShLtJQ",
  "key29": "5FnefrMNC6xPrZnCbtYDxKzjt8XQ48LRTFYhjRGssQoR2mkVWtchWKocGkvdCPRw8UhXWH1Kz3Ljfppnw1X3Pmxw",
  "key30": "5X8emzhvuerF5M3XAMEQSgxtR6iycRoW7oTeDuUBMccxE7EptN54z6AVT5SV8LidSPgkasWrKdratuxUjnA3aYGR",
  "key31": "3F5BJDJ89rKyhCtm33wgNMwDdMbq3iiGhH8d1U1GnWXgh7mC1P1tQBvBw1KoktCyS2dYj9cakfh8EG7dxKFznuwJ",
  "key32": "38d9Btt7C3vcjUYctywmTvP9DuLkcMnZGHHhnDnKSL5HLHqWGGE7mNRHn8PhH859SWfJitxutTduoMLpPZCmoGxB"
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
