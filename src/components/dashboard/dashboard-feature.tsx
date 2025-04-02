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
    "3REfpDFfZAnJ6LGDMuhbMdXbry3hGdwjEktE3CKkxAF6khb6zmbXcujWnciE7JZTVXctfEf3oubzoFjXVjNyAc4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tjbbKqKTkTjjoHeM4Q7CCrZsdyvrKRFaHQsCNV26KcDyG6KGhrvnRd87fqKyhGaWK1VtghivJZbAGj9AG7fdr8h",
  "key1": "5oYiCzp8dLSsh2YNEyJ1i1aEBWEnY9DBDqGmwxu1u7FmgD2XA4ZZz7kftU4SJeRHZYeGreUbRmm8QsAnw4XAQnmD",
  "key2": "5hy32vztaqcMk1BqEYAFDbJhPJY9VxMScio8PzTwwkj3yMPrfABZhCe92VMACv6qLQgi3DKSbEPdvXHEGxLRqeL4",
  "key3": "vwjYuotntA9b3tdydF675g22DmzesAgtSbZYr4AMEmtNYA8qq135pV5fqRRAYbCwVQgpmMVwmCWmLPyTT6uYwUF",
  "key4": "4ZhTDowUerT59mjTk36gF6vsqDMMommTNNnQkMZzLnDPtdVhG2Zwiv8TTqytL8Qjwh3prt6p32sbWaQsiwAvpQmE",
  "key5": "Gttn7qJiw8JDx7fvT4MGJZfdKoYbTPiC92gNWWNG8F6vsCVkTidwCd5JAHBhwdmjGudWe5moicPaXrvw3Da5h2Q",
  "key6": "fHEFKQ5kUHo9YaSb6WrkEYK1JLAoioZF7nLA3dAKpaMaX7cnyNNZbKXa7SrpiT7FxMvifCYYgY6Y2QoodJGmQmm",
  "key7": "3VJ8micsGC9bfwBxJkzjCkYkmfsuByZPePMBPmNX3Wb9vcitTNXe4rSDzn4fSPiURLXephXm3ivc1JwQgNZ5ALc4",
  "key8": "54m5xsHCvT2sHPgdQsLLLBLAVuH83fcAyPWAY1ghYqQTgGn95dgcvZgLUUtf3GqyQHX46u7fN9bamtko4KCnsDug",
  "key9": "3RQTYVKx5JCmt6QwHpdCSKQ2FRB52KcCyu5UZsLfa5wvFtFT5yKHhXsgn2HEBtXKVCGFy63AtQRpy1oMaU4Pe8ws",
  "key10": "2ebv1hDJnmGCGfvXkYUbdbGZ4cPpYiGPGWdriDXKXJbxcP8YYPayrPpyggKVUX9tNEEWn5M1Wn7xJhEFKtvZTe7",
  "key11": "3MNvoj1s45T8SKPH5sN64AfkfVmvbivALqtyCesRsPgrAPxNVMKBssHCcA4NKmAY3ka7PK2Z4pj9ahTthZQjER2A",
  "key12": "4RbauwGN35aGb86nMwFM2cGZNexRmW4gyemqw6RJoznc4JMQ6dKppJq5UG2dbBzREBjPUN2EicLs9J58KkeSCY3g",
  "key13": "2VVa1C4wkxsjcNrHqvYVyvqsJus4vqr19mmdg5sKMfzK5212eRGaFiQrfm44ReozGcbbcuJVHcjYbDDeSMd6dhWb",
  "key14": "3z3t5zM9R4Qj5X5Bm1GBr2vHmXuhmUyEBQAggJUYoCVazQdHQXDCb4ptyvfxXVfjo81PWzqcwMdouTsNHkcgLAVm",
  "key15": "32HYQp6YezNjTLQBsKxuYWhHLjXMryQF9YcmcQMvGMwNRDsXDAY13kB8kLNGEFmaziYWguYPtUSug8QhG2YskQFs",
  "key16": "2K7K9dzCYJUaNnQkrf6ex96SH8bNbxs4QnMDN5yxR47LAvQTeJzELuQYuucuePFoSZApGu6UEVZ3can9zo2Y5CEv",
  "key17": "56PTFnFaF347HKpurXU28HRfajbeFLJus2Vvx2swH2mmtSgqbc5AhMFVzjuPMcrCHxhxM1RUwprEhxwvMBc9QHuS",
  "key18": "2qZFj7kSysQoitiBi2QD22nyybR9HMNYdtVHqSUBKcGaWYg4LbaRY8oDy1Zd22Bgv79sgJYxo3cxKZw7LLeSmyU7",
  "key19": "3GFKAZoxw3iqnmy647f1cs44BEqb5ZCofuiUVECLBwmjEUkePWDh51auUMUidWVmJ1HszorFsbwFpE7UmzZgEArH",
  "key20": "4sGc1BhtC1jbwvwHn8dD4UYSEQ73WsJa9Qfquay4oVjQYKbukEvUDGsuu1KFWp98BLRzMNnurESKaFypce4TCRRU",
  "key21": "3Eq8e8bxkVN4aUCPpzKT9MCXLLUeyQif8cLANuZjhseHfR85eKeaRmTjRxwB3mBeQNDkpTEy3AqcbmMHCrd8E8CS",
  "key22": "49NiNgp1818NvDZ8eEu2m93vN4qxGMcXQ2LtBBDAeCBmpMPg7iGV4zF8CAcVLrhpYBcXtGTfq3v7uR4QUnpYij4S",
  "key23": "52qK39V8DPBjPNNjMRmKSeFhzHuVLiFPYx4TzjKTqYKQN6EiZyfesuGF7qvXcSbGHrWtwoyYGBpuvYP9i8Xcoshn",
  "key24": "5AjnVyiXKvPCbyJgY1RMcf4ZcygkSPfZoUCwhD6y6rL6aw2pmbdATED9S5SvXKLuDiZm2ZLay6xQieypztWFJBCZ",
  "key25": "GnrjYjY8c8Bue3xFWF1vvsjhakqGUM9rpzgi2NtAk24dvjbmUqeGgXwhBeeYiXxT97sERA62dtjPpq53S7qeJTy",
  "key26": "3nXzaWGzmhzYFqbSkGanuXt9P31X5CHbPJ2qwqddJM1o6am5eKsUfZH2fTjEVzWzmdEP36MzEVELQHaXFcsBpooP",
  "key27": "eBHkiu3LX8RC7ZMyE7zunVgTduqM1Q4NoajHzLY4DM2Jvoh8NgqyJCkg5PZG6sdbMAimppKFg4eVckQicu7Di1G",
  "key28": "4qmXN9LT1aGPD6iEf6dZwQmLTix4E3xGBXVqHngCmJAnh4Sh1vYrzyDwjyRaGAVywcDQn96hkd1rSdAkuYr1aqV6",
  "key29": "3CSqMS2rhYzTQt9Gub6Yqb95T9mxTC1B8Cmgoe2NrMcyXgoUZz7T1iGT4WPSMECFu58kAZTBP9GzyV1YvuaTyYc",
  "key30": "3s9bgf4waaBZix8TRxPkCcx6JgL2hCiH2afzz1mvb2uWorJZKj1ti9XP8oPhipXXTVE9Te6om6geNMRJbPcnj6hz",
  "key31": "4XbaPi62Ea6QQqtSAM9gU3B1bSFXuv2pVJxD3B9qesz8Sm7NnKU95EiBCDMjBbUBSpKTmED3img2SBkPrBGze8pV",
  "key32": "3pzcjzzwn7aSEncKoyb6RcHv376t9KmE6wYd9mziBEDnE8drGe9iTQL7pV6GAEzSxUR8dsAjUggGb5WJfJLG562F",
  "key33": "5jzzr8RrhN7fkHbtQkQD193EMx2iuN4jUVcj7pzwPHcWgj96GE7ko2RePKfNZMAaYehshYbPDrKTFNbFi8c8UuXL",
  "key34": "eKBrXfGv36EoAc3mV2f4i32GGwuo9ryWJEJn5a1vbkJ439eDL5uvFqCG8cQa4mgPL7cGUbiRhk6PMTopFMMAPt4",
  "key35": "QoFxt75LBCLufyFYapqVvVDcHGyrL3r2PFXDhpjpvadPuDCM6qPKVMVSK8R9Zyu3EMVp6QqLjszX8SpZPikjjJb",
  "key36": "3BJPRizKH8AwckoXAiv7E4UWU2BofodC1tGxYJ4jnvWMaSWesmiP9k6BSnZRyRXbgtvSADH88QB18n6CMBndaomB",
  "key37": "jmVib9DdmRh4cbqsaqWyWqMWSGtHBGxTWTvLjQTbutLTc6dWYPqemf1XKzJEpEFVCsDidsdxshD4duUDt6SvLBD"
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
