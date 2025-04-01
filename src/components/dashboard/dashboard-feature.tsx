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
    "2qdKqbQnRKPBpUteVGK7sCP5qgr9q7Hc1kmARyJZTZrYxFSUhRneeVEMUNyH8ZVZUNLAyvVELsA3C1yRBVFUcwmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uWtVgCsXGwui9kjJDmFKetHyBJ86yE5jjavC8JcyccEPeRGKzFs12sQJCBEvA6LAKVDA6Eey8w8R8WjSjfGuTHY",
  "key1": "3yMdeVfPeXhrpRYjWT4JhMXeYRYnfZcu2qVkTSUqhvX1CVt1YnU4mRDQZdWxoV5ba9ykXfvCSsrD88geMpJetuqh",
  "key2": "588ft4eF1kHnRght6TmxebopWCk7eFQdBwQHLPvk8zsXEqUVjt8rJaM2vrDjun5XvNn8CLJcQFQ2ATG6tUW6EsgF",
  "key3": "4jJHFEMYqmmyzaL1LyPberGTDu3Q3WR71gjrUYEg7L3NWVeF9mYEsbt9a3MYr4qk2hEJX4tTHm7JFtX6z3tqXcTp",
  "key4": "kes6k9oBNdcCrxTgjnTGHFXa7hbfpU8hnjewP4XKsYpCoyVhWrw7K5DbVXfKTtQhuqp5LYG8HmXRW29nqK8a9dm",
  "key5": "z36nMgh2u9bJMS8f2q1CkkjoKkVS4Gsxmbjvydz7JerbbyJQ3VvdgyNqv4WeK1DNEvhfEoKbreJwMewuViD34Kk",
  "key6": "54GVp7peXv7bnjpahLfAUAhpmYiaXw7wHSSazy9cLjhainrJzakvYpbysR8uw3WM1xnHCSnFBBYo61d9AkazGp3v",
  "key7": "3W71snXDDU9qofRCNkMpmTDXU9JRLbppkdZq7G7QvvwQQ4pW4GDqRVKCZ6QY7nWJwNCrodQRazC128pLdvfnfPUh",
  "key8": "2fP6n6c2ky9hcPyjfLNVVFZhzixhKpRDd13M9Rs8YPjynH5p3oMHihXv9ckPB1srxMFymPpHPC669MnjGVwxFovo",
  "key9": "2N9cSDsUL4T69vaicXv9XK1ka6SonyHWqvvH2rfSqxxBTbqU8ZquGGBKh74MCtp4o9BxmnNXVNEVnWB8p8ygzV9g",
  "key10": "NZ6t4btaR2SsPXwJbMXEyKxt43KrGHhL1fdTudcLeiHrvYamqMZSLkUE753cNSetY46yPacW3vH3nRxTEkDvfFu",
  "key11": "3L6AvQrauDunATRv3AWfWp9GVDRjNKptuaSdztVo72JikjcmQxpWghRuTB6vVoJVo7uxR2tm26jPsTDqM9EDEfWH",
  "key12": "5eYC8Tr58PBDmrg4YF6QzbxtW8WvBEYLQjHvC2omu4mA8K2ZQFhsWDKucupP9BZn3NPaXGCGiygNdshgpAMveZcU",
  "key13": "px4K3kJkHA4Arp5xjrHZUrzdYzvwz37qx9f8WAkumjetTJo9FEwXWATWUz4Wyh7bNhmr1FbvZ1RmcNrKv32VaDM",
  "key14": "5m6QWNAqSXxx8D3jb5WQsUdBwurSQ7J5cc2FeaEXPwGHSvwqpWLcZNvsyr7AiTBugWUAXbrSq6idTbFKQE1Ljr58",
  "key15": "McSEMGBKD8BzDoEZd7LpoJ3DhMMyWopVd5EDUe5uPb3CAUnzp3UtciPPfAtAYrYiZzGZexpKavqmcBKEEo5YuxJ",
  "key16": "3hYi71DvwydbHcoGwgvyGEawzFjVLKRW1JVQto432HA3RVEEwPrhBNCzcR928LY59YQX4zJ2KEpPYeeJgJeqKe5J",
  "key17": "4DFtKZikh3W5iEGridvuD9r3J3dAQ3Vw3e7A9HfLGLwshNCMjHoWgdzkHYcrGF3wdurDdhmbshsmATAZfb3qiRCc",
  "key18": "3zTV92TVG4FaY1s2MXJGVorAb2TuvRxgN7MGDfQpsMDvgDwS85yZJTQiVyKcFbEW4iiVZvE8t6fNd6kadtPmddkL",
  "key19": "3XosEAvNRLvcZzYaERnyisanMo42GVt8KTYbGTVkdVMWw2aEMmiL5zFDrRbRzuJCsTNXbFrNEFz8jZPfWU6RKoMx",
  "key20": "3CoKrp27wvmLXvZ92KUnaYgQyk2wW614mDoh5ZmEffkjgRu18JGAQA3neZC8TPFhuiUeTW7KHHky6K6jJR6kJMk9",
  "key21": "4MEAmjKxgZYbdAyQ4udKJE6TKswiM7Z8tUHZTWWXS1yUE3DtF7329FzrPuwqanmwBxWeFS3AN2BgKRMcZk1ZzN2P",
  "key22": "rUctMx4cckhFCwx6JkcC996NQ8pGrivF79LECShpzNU4RLRPgqfYYrZttzEBjQTPYByD3mx2nDxR7Xagb6fQokY",
  "key23": "4uDmjEEhPyf2H6rq5VpBmYBUT9d6yPAuY97AiQMAAv8msiLXFmEFfiynoCJN8KFRSbgg3rachCFiKMruvsxtG82T",
  "key24": "3uDxhytxRkVPXDXjn3SLkpCzX2PZkLTekibuJSyQssrD3UkmMXVKm6QnD8uL2asU5yhd6E1kpLjK11ZX4asPjaYi",
  "key25": "5HykQPPAVDLwk1Ny2LJbrZBZKW8SPS864tZkezHPZ8NNHGG7vnVWoLFqWUTBfL3RyDqwtwkVxRmhntdw5aCfXAgz",
  "key26": "5i7gErB7VidGaS4kfCctRmvbnEVXNAFHwwLzYGtXwzoLwvsxPk8abunu1saCSNw6XgVoEQVWcZvGg7aWLBPepkWT",
  "key27": "5wg9sSXxwueUwQL3w29dDYinT9vJLfEWsgdomnUbdU6vU7EMJ9zfSipu2B39xpnnuT4r11fWCVUeoweJMpRKubfe",
  "key28": "55bK7USuPpP7BbvW7DtsuHs9tzifV5KksYqKzLBW186PmtLqSebZfjXRZMpecYH439WR41EtUpwTpT4VpnHPeLCr",
  "key29": "2PsnZzoo85MijXPmEoayYt4bCTUwpioVbfuUU9bv6LjF1Egm7KtoX2j9VUevenZaAxTZjUXzjYrmUbBJrkzTbYxS",
  "key30": "HYjL3mS5KZpa8gpJdxnawvwSqTSZaTmeSKansc1CBh5U7qHVabqsvfbyW1j9JwXYzJNBmCDh15YbDMLUYNfdY92",
  "key31": "4AfVyZq58W2NGkusVTaHUstGpEEtzMx45S9JvfE5PwC5ZkYdgZwEgEj2N5FXtCMcFVrWUf7QKaVWEnVtyLopM4mr",
  "key32": "443ua9m3dajLw924FSEPNvyvPwbna8n6yxF4AVExNMUcANbum9fvKFRJ1zfFeUsShCuqJxHXsxv9EKXYFBs4rCCH",
  "key33": "izXRBLN51t4nyUooVqfRqjzizwJESxS34bPMkBY3ZG9b21ckPeVnWoDPsqzCyLXhLkoVnrUdEjWxpovwQs8GVcc",
  "key34": "4eMptqY5miUMjGwXB1QsHauMycdqv7WhEJ1vnRd9kZwbxstwUjdae45vxMje6A87kB4WBabhtUV21utpTZ7HUtJ8",
  "key35": "3KWDXo1jeYD6YYAkuwaFkTbZ4FuNbMqpkwpchrLueVPWgdNZoJsxtZCGHPzBXo4P15MyAbfztrWCkgDzfq3VnnTE",
  "key36": "Z9tvBDT8Mr8fqNpA1R7pRt8SL7mn3fcyT47wd1FRyZbZiepHsgn41h3y4zd4ZBF9Yd2cWkWP8WNZdt8k6WF4Ggd",
  "key37": "64hHKTj3AL4E63aBzffX3WH4syV5upWbxUVUNNMyVTw9tH9ttHgyrKXCqJKWzyphL4nFk17Fdr48QnMrPgcdCyD3",
  "key38": "5H5FmsY8UicKZf55i2Ensyhz28yubb4cAHcgiy97h1fivVP7KALp7eNFRZMr6Fj2ZVACLNCYuWtaXbczJL5YcBGE",
  "key39": "63hREYeHujHwGfzDyLJGRjEdzRk7DrUaryKFQDzQYakzCxvSNNWHz2ckbdGJzwfr24HrYttQiPiGWgN1o4tE3tS9",
  "key40": "3KUjKzEFwMUZY7Rzi1WcVNgCcFgKiUGruj7XHguXvKpB49siWj3WvMK6cFqEJchT9EDZbzKsrFBxcD5NUGHHRwzF",
  "key41": "4gAZ6f4szptDHzPfTYyKqErjxX5GMK1D4gtJMNBCsPGR66FHZeKwHsWsvNLsS64EUhgQEbdc5aGuLb9RUokNNNtP",
  "key42": "4n6q3txKNedrE7YUqayGjmjeywwsux1LuYuTGADaqWVq4guFFJRK7irFuaA9L9dRnJhQHDHTJN4pZvGyctRv8sKp",
  "key43": "4ZxfWrAu5vzyjss5dsf3X9rMrRB6CvW1QmwyhAjC77ics4UAiiBG1RA9Tfbk4xt86ZkuwSH1oYBRWF1XT8UnZmLJ"
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
