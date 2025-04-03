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
    "3w5zR6v9earFwDdzG1cFZpwDmigt4XmBLWPFimYeHLEpUw7Jm9YBhqW5chGrXpquZs428ejKLw9JZuwjGa8HyBJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vY48AGorVAsWQTuriqGbas6UDNXLR9EgaDWdYbfStxNnhjRFB9w2pWLMuF5T3wkX7osWfkKDGRbZ2WqWFrdG5E8",
  "key1": "B7phCygZAsxcXBMJDk81P4G65XqrVwP5w1e12A8diVtfqxZCaJVn7xja4NUb8b9Yht1Jp82AktYz3w3ha6zMXdh",
  "key2": "3UwQDyy4GgKekyeX5iKqR5jcqgArPLJp9YAnPbh74TaBM9sf9HVgRmAKVuVqFRSNNSUsiBmoRAs5KLTaa47vVVaG",
  "key3": "Yoic8cAnKHZBZdSC93EHfY6DGZNLtq7dcKufz1yGcQpVeBe6eVgcpwEotdjiA47Jnqas3Z666ei3FSbq4S9timv",
  "key4": "uCNud3uBoKFtfbUWE2pXLL4cHXzJvNkLtd9L5frKHXFMnxy2jkPgao5YBqSWADgFzpXwpphW25jmRF3uGwTohpY",
  "key5": "4qvaxJQcaAMkTkdWCsUZxPXxWP15rHcmqAU8BJ5u8gz49739nuboMzfyh7vS9XStWnUpUwRSGdsJGsF7kB3rLaSz",
  "key6": "4zHbstirZmBYFzeRmUdQffgBBurumVXZmFZJ5hSAqzAwZBWZ3SQ5UTPeCyjfuQqShK1zj51gJTMGGDEfLbGkzMUb",
  "key7": "xM6NiLe8b51Yz6cVEPFinHKSVqELMUxDaFGVYUXbDe7vvuAACQS69s7h2egvnRHQYCG9bNTzd9BiMX3bQ94TLpF",
  "key8": "2xxFH5pqMrano53EWHdKTMcuvUi9tHkr5PAbXKa1i54h4pMae3kb2JXGmrn3oVXwTy4Qc4vZBeaiFX2S8kQuMk3h",
  "key9": "5hFKFPwrTEZbNJxYpAYuHKY3aXx5G1XGrNGaBiCPAzmxEtSsJ1B8bc4jW6oQY2df7nuWfGTeQz7tvoKaLYefsJ9C",
  "key10": "4ZyR7ZrDWhjkRnkrDwm7Y6jUNp76m5ypEiQoU9RuXqAktBVajDExTw4AJmW25a352S1Jh9nJeBEB4Eu1ZwQtKiwA",
  "key11": "2g4wyb3K6xEwq8ewbYWVZfdQf2ZZtzWoYLjnkgw1jxNS6LdxQdxUYMk52hXDb8q1afynonU1h3b9sRtctDHjd7DV",
  "key12": "2bjxo481NAcGxzXvDXK61APGpQdB9ta1QxLVqJd4db6rWjWt6M615VC4is713mWUUVBB1MgHxfzzcn7jgCpYn9gW",
  "key13": "xbyGgbraWsLhmjaQt58igEqgP1bUnM9BsEettHgWVdNasEkDrjDdeu3rnggXTdUoekWBsYsPoUDrA5rGyEigVLz",
  "key14": "5TwgLdixjD88ad8HqtiyUqpGsPKJt5EN4xvyCSdqKqkvSCVyHTXo8CoABYKEVzefpYsUt61fdex54BJvPb6UKkiN",
  "key15": "3xYB38MWLUa2hdN9k3ZPz8HeqY9cCm2rZFRZWi2KGNmamXfYLdrM34shXKeLERPDnpTyxQRhXFsneHtsCHYvkNFL",
  "key16": "3NLwyBuz4dgbUhEKwioBb27U4NZpzuCZp5anzJTaJSWyAz8NyZTA6vkt4UNyzNYUcDQYpxGxLv6xR1pEWEmpkeCE",
  "key17": "2rcpvuvs5TWvZsY93q1uTftC58vfEdjYdfyGKiPRTBQ1owYfuNv6yhZq48NaCvdgTjGzsLftNbfhdFkUJEXovjX2",
  "key18": "4ANmqPjgKEvTmZswn2m36PPQqgaZ6T7Hn6fhRtnbtLJDwUxv8nostesXqStqc7nP5919KyukK49ewXKCUpo2qDzJ",
  "key19": "3Jh5PXQRNjwa2Rka5aADCyqU7FvvTxt1A7qy48wwDRDEfH9tfc7fwsZT3HPLd7QrLkH98AtJtGMVrNryr3XaduPc",
  "key20": "34MjeDb3EANU14o5SnBu2fNaUHit78m3juoW4g35PEcmt3eJbHStTuruE1eeNPeDTSMesWgY1HRiHFG18sjSUqjY",
  "key21": "fZ6C9KeKFMSmWgq8idsWj8SMNpvf7t26oiXEh9LUquh3Y7UyHcvCXSNh4XP5S7BMXbSAAzdjaxVjVfUmM2x3kee",
  "key22": "4ymjS7DJBogVTnrFhUr1BhcEiajVJvK4CF2sXpgCuDhmWR7g7LirM9F1CEa9LPFLFkbx18TukTBeM6Wr5dwZWEgY",
  "key23": "4cjcuGaadsS2kanEzWHUQ4W9K5L1SqCx3VpENxWqauLeP5kr8Hm6msXmz6ytbxJNvMT8J11PJJekHY82xGuVXmPg",
  "key24": "4fmxM4LTSt8xeYRenUv3UDqW9KzhR7iM94JwY4z9b2gTU22S7gSFitk2UqLeoyUTqXTNvQ9m1sbH6FE1bMoGeC3f",
  "key25": "2bfQLEc77pnNPdUVQ59JsSF1ReGD1N4Ny6bTPnF8xS11bndGivXQ6PpTjQbgMQeu4ZkVwmcjm997QeLSBBS1Ta3P",
  "key26": "25EzG4QYu2N9qxTifvNygtYhQ9TfqKv8V5J7LKNLXmSAEjFB2G132TateiNxDg8AfXRQF7fUn9s3kArXQSjC7BSK",
  "key27": "2PSaTTSYvkwTwyJ13Yse4hQMsfckYo7uGhQva1BaGZPQRKwJS7tS8fLTbuZmEmFxHGZNFyU6R3QNyJTCRufPPzMY",
  "key28": "4tAC4urFDvXza3kbEsNt3A1QYQ1kFt7mkdidu8SbzfyBBeoJn4KU4y3UZPRfK1kPhRzhEEMCUJ76pBJF5EFouuLd",
  "key29": "5CzdqeQGRfZbqZS3WUtEUxuwU6KxArRSL4uqWNvauVABUfHQEQjNr1XtZSEfpGrgkit69ztiwnLWLgTgqkCtcqZH"
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
