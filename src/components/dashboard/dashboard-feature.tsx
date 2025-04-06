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
    "3xZnHr81wn9RvvXACiEUEibfgMsnJPt2FsyqscFdyYQyivWSWxwEKq8XYutmdLAJZQnk6sGUTBVTs3T2yj9RB2da"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "URFEj9J4ZkNcfSKJFysqVX6cXgpDFCCPQY3X8VEPNevqec7EW8xbx9MBZsNh8uuH8n54yAEHYe7YLGQ41o67vUh",
  "key1": "KyFV4mASddqRAqdSEDZEVGdteQt8o8nCLE1MT71YHHZiusSUgu2NBiLspDsDQC1h5LSk1svADtni99PwLws86mR",
  "key2": "2zNsAVhY8saFEvhkA1QGA3u4JukHvgmW1jWSfc8YkPsfQdwss1YPSiS63aANJgJCwkLhNJwNrmGP7npa51TFtgUF",
  "key3": "2ubZjU8oNrJbXpEvuc4heEm4ohuMBLHWAMJL7GKQDcqEQuNifUqDJHAPHF71C7V6JDioAWtSqSNYgkRkeKxfzqJH",
  "key4": "3Yb4LxK4J41NwZTCeicEhmUUj77LP2NyFFZdhB3KEBQ4GJdPsDqq3vEm6u37ayufDtU4NfcgSgkLEEVZmMqSzom8",
  "key5": "41G6ueQdUYmDA5dL9qbQWqMfNuchHhUgsNYReeMUJf259QuRfq5WVuUoh8KW5VuevyAzHLxFPBegcWbzEdHkyknt",
  "key6": "xdquZZBxrosGFkeM7g82SpqgVXPHCt14ztp1iLrFWQvHqUxD6nBfuG7ZXeG9gciFEw5Su183XnAkPsZ4uUSo5Cg",
  "key7": "24UKkDdzhcu4gBJLp84HUdeFnxBEygcEpXoXyE9tENXUTpNXLVrNrLhSxf37ERnE7MFAez5MgCAiaceUTDpHkXhK",
  "key8": "2Jaj9GLfsDD4JGn3MtAS5ZUyKoRaWwkBuoSQHPSyxWYhvu66R8B9swmR1y1tYvJZBhLDZu6wb5B7e5otcL8UPL3L",
  "key9": "3mpRPMMwUfpekWpyYCXXwbDD2Loecfj8vSgNR4QSzVDK9YEFdECqba6YXuQzkQCAF4GPMKcwSHmZA64avYAFJQ8i",
  "key10": "4ptWkKdTcbgSF3Q68qABzJXqP4SgXf86nkpXa2iq7fUUSq9uM7aSz2coWfJxH8DMPfCw5BTL7oGw5jqaTxxNviQs",
  "key11": "2NQZGWJudhqJSuZQwCWzcaCJqM8xzkanJ6DciotPdQBeF2rpfBPqVz1caeMNhddTmg65JvZR79SmgmC2VV37S5r6",
  "key12": "qYerKAj1y4LY3BhbazBivtv3kmBFkhM4MSqApM32BbjipiqKJWj58bD3KgtbGnSBw42H3i45LTFryZZAu61qxLH",
  "key13": "4JtkQUCPxMKkWzo75E8DALxt7QjDmkugw1J45yM7D7aW3198cCTujcxK3qpU25B46LKtX3uXYrdawyrEgRxgr15i",
  "key14": "3ai3gsgiewFfgVL7emfnYpZMbzLuxAgRSWHzGGzEGFtgKdVLmUYjBzTNyFdPf3gUTJQd1pUaKN5n6ZjnWAA1WjKa",
  "key15": "3Vq4xp6BZLrHL8FGyKRYo9mVca3kPmouJtS2t76xxHL2kQv2KHvE1YC8FKwGSzhKdzwpCBnJAkNLR45HLUHJ6Jx",
  "key16": "3aFQaKGLLHiRZ2kLSYpZodVdcz4b5qyff9xHJAeQCJWonJn9QC8p77R5qmYBRhP7C5FBTWX6w8pVqNd7HZPGYPmc",
  "key17": "zyHAatNcqj4pZE9xeiD6oixwKf2QRuixVGBsGnraVj2KkjxbBBb9qd2uutZYWdn2gFAuV2jTJoTdMQLojFxAeR4",
  "key18": "2NZVKjQzvHopwYvvwMj13wg2xXvRww7ARM1u1xaShw2iknU9HNSGxiz7SQZRX9xzhZWUx8bX9pYEWGC5Toa1XS8t",
  "key19": "meB2mRxiimjjqkgjH41s8vTvHZoqoa1JaPfqLcJ5NacumeasbLbZ7ag64nPygrtmSYCuZBh4d6vpC5xNE9vaVBY",
  "key20": "3XEdM3i56noFkap3812xNvSbhkZ5ytp17PW2uPdNnrJGTqGsLvhD7rrpaVWMP74mHrbzpQGAec6VQkhnDC7qaqyE",
  "key21": "rreCe98E64TAVs7bwtChmsoXE4uinphKSZUGCpzTVY2zgWNdZwjZk3gh5Ss3AG8KXvYdvi3dwAeKeXtRj5XtWDq",
  "key22": "4wCPoSenmMA7FjB3qEk3jBr9nPqf7yvRnfzmTDQi65R5kPmMc479TUj5NZXuRYHNV8YoSu49AFUTrxALED4Co9bp",
  "key23": "werNxQKJmuVmTnxpNXTkEm7Cfoxw7Hwc1PB2YNJqgyXxyYmzg3dPV4DoSLeVZzS8MqtssEQbNgc3JNKZEF9JxSa",
  "key24": "4x6pz47sJGk7iS7wkPqSWi8RKaT35pifnjizY8WqDooL9C27ttPsW8Rvtg7JNnbCRynFFUG8LpyqXyBcUdVn7zmk",
  "key25": "v5wXhJ2fUu6i1GoU9H624EpCZbG59Dr8dZ556nmCEY6k6KuQCbfvxMexiw7apeiH4pdiJCSjrCbZogYinHM8F7o",
  "key26": "4m2Q2ubp4ZDDVQnvbnzERWHUiW1ituRy7gpXouCZNhjfaQ7iQQiyvz4CchifGXWyYEd8yvmS1pniWyd5UGBwEg8k",
  "key27": "2vyPDHP6fmAtmNj9gnq85Lf2YAdECfboMwvB1yvY5WF2cFqKRTn7JKTWHncbp1qaKRjuArcAvoVZYUWWJjpMm2VR",
  "key28": "3pb7i5Xv9R3s9RRd5ZPowKWiQkCqa9TE5YQXCDDpt77cUCvZvYmv3rNBGrfFQvtqZMcJYfCACNqUyCb23pPbNX15",
  "key29": "3N8pnpTxqYzcQwSXi85eWTJY4hVETK4YnPdkDoyNUAoPBT55CLgzncTPZSRpA8wf2SggbkUfLXbxxesKXmg3AFsm"
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
