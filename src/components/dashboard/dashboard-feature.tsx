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
    "3iYgszyb8TSXKibht2eXEwJMAQnqHfv6YnHpnQjjs7gLru95eGJTwV1unQcMs4FXp6RH5Z6DKQXtDqxGLkvWxUAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Quk4UdeMwWFWogRtA2esQhxXD7Tpdkp8z9eggqgKugjUCKAGqEdcdwyk5iUwJizT9StTrm9uojG14bvfakTbJ2T",
  "key1": "3pZYEhkiwYGXa6hK6aKTSiqs47AbGPY1SbuLD8kbeW1rQ9ry3TD4f4THsfJnsicM8bQvt1DdZhcA7nJ2dSJF62m9",
  "key2": "5YQCkRBCS7i4BmmKYpU1mKsHtsyFC2mqCPr3tvawfmm6K7afqT4VgnjbrRLwEmLJxrsRFgJHyQbD8AAqWzBfod8u",
  "key3": "ofd5e1zWiomEBcS3fYeaQrUCpkMeDe3jHgzwuS4eDPjWHvgwL9k2npKCP74fr6kKVdGiV6scTNk82mP4etsbdGJ",
  "key4": "3t1xgcGpEcwUBMgTREt2AWJdd6fCtz57ntPCK6fE4d5nf7ZVSSvY2QJ9GTrGRemW4LGVSeNw9otEz7FTvSrUq9RE",
  "key5": "3ucE6Gp7tSjEAdWoizA8MTiA8GbhcpoAaSjN2QpL4YicAJJznRz277fBPjdKtiDB6oxGoHR1kfFRaxFEr8QLyFvJ",
  "key6": "4yXyQwWwEGkMEkmhQanC4EBDAnwjRbjBcYQgai5cvUzNxjjn6cDwTFZyQ6YcpoeyMHgSCGk7CGwW3JkSyXcuWYFs",
  "key7": "22QCW8W6JNcG93TSrJUHwE9qwxocSDPHsUp314EwbP2XaoYBcTY1PUGV8xKCt1SwLjxe8JhafC9XceY1jERbwT4g",
  "key8": "54qhXUhYtESkHADTZThNVP2S7RYzvDhP1MqP4iLr2TuR4ucRgLS8P4du6wFkbmhv9trziXPRx3A8eiKY8jvvxg4E",
  "key9": "2P7oxdto2shFUyF6vL6My8WooX7rJGjuCsyyn3VsSCRVATtBv8bXDSWTfjvieh3AsBm4drZrcfPfjTWKAXDuUqFX",
  "key10": "4WhifHeqHeTCjBaT5dmoCAbBKN2z31aKMpsTiut5eZMaUtL6hLxx9GH7LHB6kbFPJwZwi1VFjssu4FAEFX55xVTL",
  "key11": "21FFw7L42zueAMVPbVbNc31B835Fqs8GbzMY6rawonYFBhUnighMEWG7F5eqnQvu7Nyb7R7VAHnzhpzmEEb5kWww",
  "key12": "5Y5rM6Zf2RKHEChqUqpZFDj5GXMqpKF6iGxXp53P8kF5McYRojjt7tnwLVcRPTs25oeABeG5hJeYf2TKkHk63tiv",
  "key13": "5WEFJguCbN7jKqGc33ZTXwVrMjZt1S1hjMDR62RQpvLxExzoYRFModNcmGtuBqQajbA1BZHJyVi9mdGsvHFPcqX2",
  "key14": "3Ppq8n9KTqU8fmrjmJxcTYkELX7PDMX1v3nWmNCKmAvqMFAfmsZ2cBYXuzHCfHPP61SeAjmBYUW6G1qArmGv2EjS",
  "key15": "5WD7bDyeE2QJKNgYvTpfCNdprNLQCnpRJzuaFi2kLA4UQVCJ7bH6gcWuvqii4Aq4HkYtxPFncHTeSmYonuuPL7J6",
  "key16": "3JELnBDhyNfd4jAxJ5qjq288pMPRwuxcgtjSkt1zYSESzZPtApEnVyt9cg1DgKonNQekvCY2avWfziixyKycaxxy",
  "key17": "qGwb4o1oAX4kWmX6wnBuWjmeabyS7g3sXXhicYzsxC3X3DjvwQGkNJJRtQXh5kpN5zZHYcGtW2DfXUEAzQi9tpC",
  "key18": "2a9ZrLgn5agVz551RPYsescfiekbEptAhgDcRk1uK5JDsZFBY2DB4LcjE362MMHiFwGhTiq9gRj3r3zSdiJqAFE6",
  "key19": "4R9naRdimj9E2rRfhUGjm3YumPFbpYxsVrXTPZHEs35LR4FhfY84TukVhPLwAVP1yuLVq2pPTfmMdDYX8a5JBhzS",
  "key20": "3Au2J8ywh4L3NdNWEmQFr31AQseQXGRkWtheccNJJKCWLGCHXxag7rXUqHzzWpEDGng3hEQzeZqnrUe2djsZg1ms",
  "key21": "5k3Qu87TyAMAxBufxBBJUAwt955NCda7HFPrnxeBSNmnSSiXQo5LRM3biU3gdsiTthkox9xxxy484yJfUqgiymV2",
  "key22": "2sdCAYZJ1Xnbia9QjRyoL661XHrRS9K5iWC3mUYs6qDGnrrphRWmnoKYCGwEwkxLn8GAu4RKKg9kHSqzVJ2K5nSi",
  "key23": "5mRfr1ddjH1BwfqJ6RJjNeCrFBE1oAaS8fMUmUA9VT2SMp11W53g8Rhdq5fju4uHMgN25GXq5Tv9WSntKrr41BPz",
  "key24": "4hXbB7PkXkhmb7HbmvdV9rhUBhpTTvfM4vosDB3N3rbYyxuv7kBkvuJZ1TJ7yMp33RVfYopXjnSxj37YxpDyENhN",
  "key25": "5fk1nSrPXFvZgBwZQgQDx1cCjFjmVbHmJpVmG6uFRLKWuxBkdMq79c7MXmnykSVjj9VFnE8Vx9sVo42YU3SyH4M",
  "key26": "2dSvwVs8PCU2B4rnCHPi9igyaXUuek58wXgg2ugu5aFiNVFvtggYbywsC3kKH3xEnWbvq2YACjFPwVJSov5EHJ4d",
  "key27": "FmBxgMXTCfhgVeCyaSpa6Sra1hsvytnLfmTERsYEnB1bSUsi51dmDVD1hP9FFGGndd3bP7m97s33MkWSheenSWL",
  "key28": "3R7muNkVnPx6wuph3ay81HacWLLxEV7xy81bEYKUnB7nCE4D3xXrQouza9tnG6Z5PECmmcxSpWKm5TiiwJTwmCof",
  "key29": "34XJwEwPPnE5QsoXv6p3iqux6xTaeJ3pxc7wsWSSi2myNdn64SZrdSjojkhGkY9V6kLcZwKiA3aEq9WtedaSsMk9",
  "key30": "2EpUPKUNXE2BaZyqe8LigEHs3jCjybTzJtqR94JAT8XvPsEJ71vzbz2DuuH5qF17JqfLGL4j7xPCCuQBBUomvTKF",
  "key31": "2TKqybuMeV8J7mXvarkwQ4ghvgj5SCymg6nA58wDTRy35SucwnDUniMnJevP3SRTN6SmdgutaFqHmUzW8YuALD4Z",
  "key32": "41qdP6Hz2DNbtq7s8AdHBKLWbUMjj9ijpurNP5fG3fMyNjZX6Z9ZWPgGxDJTxeHRAR75uZDHyqvD2goitqP1E7vh"
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
