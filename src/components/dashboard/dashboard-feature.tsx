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
    "54JkbNuosruqieVJbGTQTPu3STmNRo96S5rqeMcpiT6mayMv1cwunzzFDry7gr9KhozaFEc3LBDj77mZcjq9L5Yo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3puqwGGtzo8x2p61zBsb9tXfNfW2mvPZzfUzqzXTxB4mfEKBydZDaRZaZPnQ84MCZvM7ENZrnfYvx8YfWtS4Xw22",
  "key1": "67QPX8NiExY1ay5P3r6vqd8YYbs4m3Hzkzx6YBqEgEKbaaB58kLma4sisW7wBudffNEum2pMeSxuytxf7Bx3A9pt",
  "key2": "39nrc7p8jz6heguVQqfGMj196pgc8QfqAtEPiuAMnsdwr8uh2MzUzEQeUxNNunXiuLhQPDyJvxRnES6EBrRCeusb",
  "key3": "3azUWaGXCxDh5NqCa7H5BVUm5Qgv54Joso9MvjNkbV5Zb9FUZru7w67Bc4WHik7bgr5FiDQMA7tJRpp5VxkcLKv8",
  "key4": "66EQYqSkDkiwxVxCiCtzyq4TU1ZBxR3oUszMY2wWyTLhgq9qyz1GrU8rRs1y9aLd3Zqp5aHMKmQMqG6iixKvRg9o",
  "key5": "4rojHooJn9QLGjcyecWamATahwZ3nc4CoextngY6LWoSpW2rnQjDFXFuKT1jvtaMJ8EfBFqYA7PzQCahVzgVKEy5",
  "key6": "28kFCz1aWQeQT5cR4FvhqqJhwySUWAivywBfM4iqySXW2vF5iC6ZPJePgpL3dQQ6PU5mSBPpR9X7f5gaCTYd3Qmz",
  "key7": "2pXxNqdfqepLvQC8C8dKDAMg6TE4TMUwxFkbdvJMMDvmJzLo7L6XXhP2RuoMXxt8kNbnev51k3beUPR45KzCGWqZ",
  "key8": "2Ajaor3uwDYjQVhafP1W9yFghx9U4qxP4ivfJrh51TA6PiJnNrf1oC3p92p7H7fnhS1MqZqP6vVixTW5319Lg5mT",
  "key9": "5ej1FjbyxNae4EBj1KMwD2UBXgrM79zHM4dVVFUUFzEWFj684ncPFU7Bdjs21n1dWNeGyn15P5Ywt76Bb5XXcsFG",
  "key10": "yvf6GFSSjNMz2H3UBsgxch9sm3UdXHoW6qLxQhRZh8EgSFTokSbQohem5iyhTx14muQp7SP8VktUSQw6dkk6XBa",
  "key11": "3EDikBixZirhWBbELXWjk2bW1QqSCJ2tkiUW4yYAfj5MseAP8AbomKXbf28WQ499hFq6NsAV42oJ62bT9nVkk7KP",
  "key12": "3r6DbjAV1RB6rcZMTNC2JxqeaqKAtA4nMHBVJfLQX7FLyqt5z9FAsUAYst1DBcXC5ieN73ZECNAjPedAfKz6SmUr",
  "key13": "2GaGkoHcX1zzuKGXGeNCwtg8YgoJX831YjBLvuoczhAdrrztfMh9SCWbcrcMBodKxCBU3ejoDCYFnwxwBE2VktdJ",
  "key14": "3EjEM6a4hFGmTJADyDsjmfan51QtH3bkfhkM5jX8Jjna6eDSpzrHc1WGzBixe2PwvHNy6GZy4UtwgKEnbvdRMK8Y",
  "key15": "2x8tSDTpn2A2xqV4GpLiKmfoxXpE8XWQzgCCfvx91muLyLP1uQ2Xv5aZv5zgyETWtM3uUhwA8isP6pD62YufDhCK",
  "key16": "53harYgUcabfQorwzxyCgP4jRamdwHZtvhR7d1miZ7upjQ6AjcbNeNzgNumxYqgBpb17mMCKEZ4mKS5utRZwM3dE",
  "key17": "4pPQyTRpvK5dtGKwNwmT13uPYeFtLL3KuRDKP8JhACF1P2zpvh2GwthUSUqVvUXNMxDPESYiD9kBmHgrTJjUsTAA",
  "key18": "42SHPt6bSNoDsqEeUC2QaQqSx4eYjtppZtdT4GWqUMongrD4V6W4RrTKgm9RdiEHV3eovrqqUbwFDRANY6gkJpZ8",
  "key19": "3m4B5h9pmkj7nwWzkYhYnpLX7gpvkr7GQf3u7YSsCF1t1mySiTTvKLJmk7i2M3gENtd5mrtRJtWriDHyk2rRXvUs",
  "key20": "5Pov7H5hiSoMKERHKWLdhw4wpadApsH9ZfEaCNAsiSxA1wfe3t6se9h3hsCd9dBD5mBp6qpFn54MRZmVHo6wBNwK",
  "key21": "52J7wB2ioYwZ2LNbaxnpTwFJM4ngqGL1CQ2nE9TVpcViyqWTt12HXxo8vuHcFWYFUUrmTAETTvkdrfPoSR3cNDPT",
  "key22": "3r8aBZ2vQCMijXnxcpp874hBXz7ysazHPGAa8G9FXCtNHPfjpArcqJ3UFpy8HmxxdFwN7mYJRPfRta1b4tbbaUKp",
  "key23": "4bj8JR9XcxYAGiPibFo6466kMZZdjBSGKRNqsY1t3ghTigeEU84w83jSoprsGSxjDMJaw2cc32rRGq5xMHEpRSUf",
  "key24": "4ZetNdMAf4aZk2iQFCvrvm8Z3FqnNqK1pjtwnyun5XqDvAaMVnYgqchyiPiQKhxNKYiEoRG8M8SZ7pC8EX3rsjMc",
  "key25": "513bLUrPkpdeLkFEFEFRVcig1a4PFZCrYJsJuEAnLwFHCsAhrcKSjmUNtdzLFs6YhH1FzPDvJQ4asZC4PDQUp7ax",
  "key26": "4aju9qqEbYXfSCnz5fH9denvPuR8VTYFTJrZyTfQEERJppKJrPwJEhSUpuumzPo9efmxwUTkzp4vUV3o6uSoJUVX",
  "key27": "3jeR3xHWr2AxJidssJGZascdKbVkkBopNau99nbMGnwp8ccunXeSMrdSNjfgGt3NoU8zAg53mmfFPrcmYrg8Tfnv",
  "key28": "38YMBb61vriSqEtFhUWTga8z2ELrSPTFYKbbCCcLHJhCMVoPEP9G1t5DK2KMhcPw1qdYCNcRzZPD4iJiY2kWrNW3"
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
