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
    "Eu45yNpLNzkEEYfYx3TzsDvfPMs4CU1GaopnrEnfgnbBPyPw172deLDD6nHZmZoz7stY283cgS7b5mekr6MhWUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nht111mBwSZgczqo86X6AcuPYnkyC2XMjNfvCB5MmwhaA8Qv1LrNjyyjK3S2HcdHZGS1XK1SHRccAMbUf8afoko",
  "key1": "4cKjCgPVJinKyARS9GLhRRU6wJ4howgj71ZxN7w7nMfkugrnvhzvC85DBvGvwANJuToAEQUuXFwcgCFnHXrafzdr",
  "key2": "Y1QXFzWBoUB6AqFs4pffzJB4ChTzzxbULkV5KpJT6zg1kzYcooHVHuigFtR1nwRV8x1eJ4SsJtyZ8i3jLoX9Spn",
  "key3": "3de9M9bvrvMQakwCWsgGZs8TfWyMw9Dn779DFqg7FKbEbn38iv3nXxhVZFprg7VzaBdR7fdQAAnbExbwRPW4Nhef",
  "key4": "mD8H5JmNfrWAV5wEFFvTdPRn3HL7UXmWHWaKFiqp9mSdSqgv2b2EBQvwVDCcj8q9V1png2AcPwXw7B8PkSGsvgP",
  "key5": "4i73pKebumo7gjD6D2w9VuvbiG3MsgdQtVWGXcLGSxvYGj8ztTvbdefcWtqB3cZfaYrsgTvf7wf6vpccANNRqqmn",
  "key6": "KKCmrWnx4hzxAAR2yBS1UAoJkLat1LMfDzbxUe7yiRCHY6xhpzLqEPyzLEwtQaqWKMaexjd3psF8CWLjXG4cB71",
  "key7": "2iuBu1LkCdNUkaxvm7LEYhBKNnVEuN4xUEiJDb4tYnDjnVSsC1bPRaL3FjTXk8LFwP8k9naCmUKNP5tKBaJ7ZDix",
  "key8": "KBfS5QhhMcMj3zA49NPQVKBCDQNrrMjEbSgVm3HfUqbT1hMXiN4KzvHVhtiLkX3rMZntKwWPswhzTMogiJMK8uL",
  "key9": "5kHuKE4YirFSHLMGQBa6hdoXdR9zurx4NqkzMTcrtCSvHSmFQZipsEMH4nguGpwySjruYmEJp1MBpDZdU8eZtfhe",
  "key10": "52HaF4taHiPvnihaFZywLvtDUMtBYXwjiWcb7UH4TQSTNJX6Zak6A8z6j56ND4r7a32MtAwkWRwQ2zkfkSSczac9",
  "key11": "5muFfC4dUXczeaX3Stszui3ydbVFP6dPXjH3DFEJ4XRtWLjS6oTiW1w41axrhp1LrdfSN7gVd18vr3VGn1jMtPci",
  "key12": "3ey6vAFsuVp9eUCsYiaBzPFiT6AsWksFLY2JDjZvYh37ZQFkDUXQRcouXsWRSqXkiUX3a3dKA3JpKLVs6mYUQtXH",
  "key13": "2VmJ7HoDY6wAkdK4BB2BhYgrikfeJxeNBKPHYDtAjPeQ9gCY1WCoXq7Q3pSqmPtLmu6TLpigopSj5YspjPFe4E7p",
  "key14": "653D33wQL3KFfE7Uk9QdU8DTSNHX21TkvGaZB3WaLEi86h4KEefYZ5dRMdepdEPJRf9HoTsSgD3vPhJAS55c9U2u",
  "key15": "3nWDeWJKb7dpELKMZVAe6Tqt8XDS1tgdy5aq7xYvAMXpCPfD9CqBb1r6DiLRgqdf7YAzZKqr6HT2EBd3Bkrx9p4z",
  "key16": "4RUzuMejipbbncErPshdb7wsoVHc8ktqxuRJC9NGB7jN87hEmL6G7eYi5Z7NDh365qKifLET1KmXj3piwkX3AoEx",
  "key17": "3ewGJjfTqhAZtjGZt4RFanHZVQWwQhzm1HYETQJPaT4BpLkrnBaEetQchCUhzAjJrLiDLNdjFiyFUBqFBqbiNUMq",
  "key18": "3VuqT9FPdmxdy5anEu65U3giJLsYKLg21zrwDdKjvS6CdcppBndnY7hGopoemteojxNAhLbaGtvNXLer7YxpSsef",
  "key19": "4SaK7pQpTs8gCUwPVSGcaUeX1nqKqDSd3RpbnTyS1KinThGq46LEMLFtdVQ2iANZutwSuimZ4JnXGCHhfwMA7DQ7",
  "key20": "5qTzt6ZbpgZvXKMkorXBpdoMd4PwoPP3mxeAZyCHFkBm6WzYojVTaAVnABBN2L6WYursBL5ZzGWKfUKpg7LcyZ7v",
  "key21": "5dxQuo7AzsDVys2g8MNjysqmYdVBwd3CxpVzt16xUoBLPBbg4TTjFKFU2UjDoab71iXQj16JN5P9rKRQ8pDVjv8t",
  "key22": "iQjb6Lag6ehyqrdscQzYUnTvxH5aKrcMw9Q1Pk2YnkMLmwueEdAS3wzWXqrqRSJfECnzawYVwMDSsk6XJXSLWSf",
  "key23": "4cMMUT1ZrNL4JcsfSgZLfxH9QewwTJVQUp1etvrb5Pj98uSYVgwocwQWmfN4pUnbjPu8QUX7QM1jLQzKPSSvjM2j",
  "key24": "5W3SC1Nvb8epQQqiAUXwnQ7BHEPHNxvSg6GkCxTj8pctSpZpf5R45c4J8ZhYCCDEv3PScGAYpZEgqwUcHnwNsPJg",
  "key25": "2ESneEHbRwJpkcLpGF7Yw9pFpfL2xbdjCP7hG2RmLs12wLVzEfNHw7o2eFff15BXfXmEiYN1dCTrXRoouFPqrM6H",
  "key26": "3yhA6PoyKM5SfeSFs7bucM8fxL9g7SLDD7URGXcaJzzbkLoVkNfyfnoqv2NYZ3ySj3uuV6MsfBn94ufhpx7hjnyu",
  "key27": "5aoXPM6jDmUZozsfn5u9CGKNzjJxPLvaFmDHBM9og2bm9PB6otq9F328m76qwVzfCJgxQBckaJaQ3rUeFsQDRFfg",
  "key28": "2A2dQz6SaRCy1qPSXaEkteg6jszJmX5t1Rskgfrm8NwT6rW8CWnr6j2kyjkw3fTs8Me6B9xqtLgrpcMbq1WECY35",
  "key29": "5DoQ2eyUVtoLqrF7GhgKk3B2Y7n37aizG8Kc3NB2zHx3CYFBZEPAWo26En3rVUpvrAk99oGSt39cGFZduaokphqw",
  "key30": "j17yQWG1nQ1dJDQP2nQFaLLRgdxRsa3iy2nvUsDHQHmqiztaoat5jmkKUA937UYkhUe5Y8sBTcoq15Wt8YqUVgt",
  "key31": "2RPierUGJiSYfFYmVc88WgjRwd6GAmR5dYMkLe917ToKB8benZVvse49y16sTT5chgq64VZQpxz3k1uRaWVyGxj",
  "key32": "bHnakekLrmkh5P4VnJtdCvCWRaJsxygnK9chYhfCK7b161TAXGhJ1n9d1CzH7VDLWHn9weSFAHZGW5KUqNjtuiL",
  "key33": "2TULCqMw2hzDYcqtCe9SNvN7FLvFzMSG78MbC21LfsT7TihiDWeoY8WzkaqAawd9nM3Ukb5AWsmPQaefLBAC9zGa",
  "key34": "2Q1uht8jcretWncfCPHUkfw3xzch9VzfBknTVsrZVavAVMQG5mFRL2aKnUjSKSE6ppE8aKAAbnzY7U53q81kX9rX",
  "key35": "mYuuvXoP5H1GEQ8P2EzoHy7QdbgaGjcFG6FEWTA2tCGcfpZq8GdHk779RMCJyQD2yoCHW5BKGMaPD67z71YAtW4",
  "key36": "2efjKvzga3KQGqP2qKrTS98YFM1fQDdXoCeq1j4kt2PL5rfgCBsvY3NYhfdJN7CD3SyK6qBxDkssDwbFNp1iZoUM",
  "key37": "5H1ofZ6J1aHP8gsM5sBWa2oWWTBBGn96Wm5XCZyDpEpJPvEDAaVpC8PBTqpEoEfTcTp7mpStVWr9gkFZNEiBvjck",
  "key38": "5PjX4Sb8jFcFjucXSjFpnddMU4aUke92cSdihve59LXLE2CQFGf2hcTqBeWbEvChgQ2TyGEmB4dMiXfRC2By7PqP",
  "key39": "4aBu9j97XycJtcbfJ4X3BsxGDD3gzwiGvjpEmQ7Xn5LFpfCcCRA8jvgED7YQqNK5sX5NxtwYtz74j9BkDEQJwsdq"
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
