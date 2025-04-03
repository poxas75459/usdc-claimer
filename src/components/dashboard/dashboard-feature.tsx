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
    "2TVuuC4U6qsPf8UkLwpYQPmw8Y2KLQTHMVTwRydckSYiJj6XG2V34WAq9iNAC8x9fZG2mTCabvny2gKx5QJbGuk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TmEa6FKnSiagZygUu1CY212D9WjSDvqAayaY6c7uq2krZ5ZkX9AM3aBuNWhF7NH6g4qbHHkfwxH3YJAeQJ36PyT",
  "key1": "4KZbcCmwPKGj1mdWtiE9G4EX6AFjCASaMEC22da4kEUevKbnWF9FE8qCV8HfTTSF7MSSP882SYrF7aJA41EDfGbB",
  "key2": "5bPoBX79NzMgx3LydwTUtUGwZNxbqUt71vG43PpoURwo3mTzbX9dWwBK9VsHma1FhE1KJFG7Knap2abocuzdkyPr",
  "key3": "ivVnBhNZP4ToZegse749UE5S8amRDHQbbLtFNuhNQZrXbbvSueCFyScwQP6iu8aEsmEvwrdpBAdEKwkXXGc9rPw",
  "key4": "FYMZLVYF8T1DSvb2UwHHAQ6DVbGqc2iFpmDjuiR5FjfNWqEejAYn4uwQgVrjvfLR5ZhRHWoMeCBcKBEq5rnq4ac",
  "key5": "64d3Y6X3SKSoyW5oi8sHtHfWaeBMKE9NYa7yFvnS3t4ypW7UtMrZFQzzhrYSFbWEPksKMSqmRf2t98ZFV9ceGnhv",
  "key6": "2KS9bFjfSjs6Qzf8Uj6z42mVUVz6UmTWiagWH63nPzwzVtRpKwo4TdzEKvjFWZYtr5KfjRVMjKe8v9KhiBvovJRA",
  "key7": "3on3sJxh216GhE9PiQUicGyfoa6FQFE69Xk22s5PNdC22pKeeEFUr5oHET1g9rciCCqJpRmX5MRUQdWbKdyPgjMo",
  "key8": "4oFJpZDybbjmBsjv7PEZYG9UL1XPLPeofsPSq4zb2AeK6q9kbHSoRQJUaR7A6FKrAEYEuWVqqrqJbyjVAK8jgRpp",
  "key9": "3q2CaxRUdGeR7ZHHZjS9Vk8ppYCUe7A2PHiatdAtjD34niJs8zttdLxhZXKxYA4cS8MHpBki1rFAnaNRSs1nC8zc",
  "key10": "39QYAZ4iKnEQ9U3mfp7wirDA9Y65vcoqNZdewmYSkP4Tzeqrr6YjXfiAafVZjXpZWfbTUfkDfLv6NrLERQGJKXGN",
  "key11": "5YSgh95MfQUcj96m4iS48q9yVfjMeBD6ZtAWYAz9vWUgPchnBUiw3zNCe5mKRnzVHx8uvtKzwh4TdCMBMaEFYX6k",
  "key12": "2ZSP5U3S7xgxtVjTrJoKe8NEMNNzxrK1cbNVsHPYr83Lu3FNKDL6eG5zWkYgpbyWoc29FQzAztKZhZm5reCSzbg3",
  "key13": "28a64LfMExTFHNnTR1vsiLwqDmZAgRzZq75mBtTpwee8sK2LCbUuFhWhFvQ6HzEeBLvo3cnNj3mSRoYXMA9oLvP5",
  "key14": "se1nJ4KsfGPtyTKLcqUqVPD7A9mpC2LQM81CqRFqCWXLCD4uKSzgA6AMFbeFVxnF4wcYzATo3mGNc1grbBN5HCn",
  "key15": "2jLLUbVrqoyq3xnCoH1KvXmUNstC61izHBv7aa1adiUQDyXpwVBfuC7vxFW4dQbfqxjTkcHXq9xcN33WmMeUkoFe",
  "key16": "2cngNTC92cEc43meXenPLmrhRfFhXXRCymPH4dmTePuhqSwRWmGuXB13n3TpXG3aQrzyyn5gCdrTKkvs4zm7vb1V",
  "key17": "wkgf1Fqa6C9xXfGUZiQYVrfx26QRnfG3zJLuK64stK7YhrUQHL9pFHGUJubaw34oyKjDtfbRZjiiePXHDpgGxPA",
  "key18": "5KAhSXjqb969hpgnd5xYiTEnJASP9s1W35gkovnBDY6N99ZbKTTWmvSVTmoWV3hfT2cBJvvjqf17FSQZqyYMsUbT",
  "key19": "2gNv56MqstbQLf549yoHe9TsBVZhzvj2onQAu6fkSmpoqaUur5D3zFsaKPc85X2PqUK47T4JnoDJmPXiSRDPyNTT",
  "key20": "2QshCyjwj17VwJYqHAnpa6XPHmCK8BreBpR7S5HZJ6yFnEGVfoL8U2eFWwbwpmeqDSp4F4B67RNrrnxFLgvn2bbx",
  "key21": "5JFdRHWNX2W7Wtd7m1J5GLmeEoicwWDHMktpzL5n6NMAjvzrVvqtWRrphvRuAxYVACpEKQmK7ofzoesrHWHEfPU2",
  "key22": "FmkppSKjiTeTA1wu94jDNF1GGjFSx33oF2v4m5EJyYtpGFUjhjYBwijQP8G2QMYC3BB6hHbFWLykUKCStLikDfC",
  "key23": "2wK8DRfAv9xEwyRQtnrvZkKdagu7L2MGaf2B12q6ygs4u77vwFbu48FFPqMfE8YDiMgdvAGo2qa6KcUVhTjKbb9Q",
  "key24": "5TFpMef7Hk63i9USTV1q4ov6sNbrpzEmqRinii974rXzv3pESS8cShasZaxnB79Jcfy3SPVeXQXks8m3wzTEFEJJ",
  "key25": "48sU6KwbiR3LC9bFWNu6k1efaawFWJa7DP74FmLAxDw1WdB3XEPUa6RvjCqKRjWmsURRYNAXMqBxEAB1pPcMg2pk",
  "key26": "5rpvDo873N5spPsmQEygCnnRYAmeXt11eEWUHRixuHXRHUoHVds8CzqnWZumZH5YZVaMqFSuiTiPc1e3dZ5TpoSx",
  "key27": "2rkDKcWM46j3CbirydCEa44S4QnyTmDC5y2HndwQ9FjUuj1ivMAyCnwC6PMovY2icwXhQgHZ9sppoJitovcJRNKM"
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
