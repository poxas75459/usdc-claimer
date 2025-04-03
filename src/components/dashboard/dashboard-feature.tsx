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
    "JDnpu4PYReCUNytswXAbDjiyrPuVy58a5SxUAUxFSfoJvQR26oA7EUzLqsHgM2boQXFt3u2e7ZJMZN7vmp4RoiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5QwKy4HqDKkeaEfJBuSvaoAKzwE2yNxVTPYskX1eS3mEKyXw4WvPj7vpEUSuJUqQzhNeoB9tqauGrqrbaAhZuA",
  "key1": "2cVmUpxKVxxYP5sWfxrUVz9t7sFz8AJwJokPHN9TeZSCaJgvL9J7MDXGLC1uLjetqJCAT9c894QNrMsKavM2LJ94",
  "key2": "2AhL4WEjatV8ZYJzsrCBYZcb437N6ByfcpZqFZHQGmMjP5FVsKVDQRYqwU6RswC3Nbg7P63jQPLWw3ngMz9BTnw3",
  "key3": "4QkieN2NcSHCcAgDwjhuBnFA66GWzyFXGF14KD7A2UhbLFQwudn4K9qnzrhzgFqWL84aRZy32nBnHgT9YqSEk37C",
  "key4": "59JZAhQUKwAq7mLpSnSLGoSomgWhfyA7M1xuBNcmmkfh8V8ZMToxgQKFPaSmGLJXQwdHzHDgdUrC1YokQh9f1FwB",
  "key5": "5TyGfW4PPQzwcTEuXFhzqPqQQzESbs2fV4C2jwiwZZbRRkejEZwqoJybnjHXjndB8aJSwFQMmKrR5ULmM21vsGFT",
  "key6": "3mx68fLDszCQVX4KBAMEZ84ruAD18pTKZxpNXdAygz8aDwE2p6vyZXUTnDfvQQyR7U5BTsZJmSFNZkRwnNGMZQs6",
  "key7": "2LmJFdUYWrPmNqeBJNsfguES9g18pi6ppddHWeqC8xTPDmnK9wZVd2ACSTrmuyQQFmD9ovFUJNgjChexhVWYgN6D",
  "key8": "66P12xDkxqZurvZfgVTmLdaa84cAVNxV23pLyjw67warUSgAjkBQJx6wwY5MuJRPpgofmgqduQQWewLqZoEwmixX",
  "key9": "5MKTPLAkLtw87HC97jSGWa6QGZ8ADRmdEk3hJLBPLrGskmE6S16EpsSjR59KyGK6vngXRWrBw5XojPRfLQGciYH4",
  "key10": "cDVHse1aes9z91miSwMgHVRkpym4j2dAMgCoq9PEJx292yfjhvC4hkCokXBm4wRUoTGhgJ2cC9cdM9cdRXyEDgR",
  "key11": "2JaQQQWFMy44zzXWFLt4NNLiySJDLMtK7hiUR6Vuz4kcJJbtXtvoAg3dfa77jZYGsL1wZAvdyBEPLthzGsmKwWRR",
  "key12": "8UAksEkj1ejwP8GiR3maB6iSbhoktXZX7CxE1F8j9oxjN83k5VhFvQN4YoYPmxMRjYdsdCKF1FEPzYPnk9s4vs9",
  "key13": "3DzqvY6zdnL1FZKRd8ziKj7mPpYe2aQHgLmdcWm7tCV1ZBzqjbRbWVb2RgDxBFfuKkC1ZtUfbPE8naZynjpM6dSN",
  "key14": "5oryFF9YyL94RC6nEWj9vEsN7mon7rHCJjvPXu8fVXakJwQj5NV45c7fEcSyPLgzKZheRRcExc6DkCJ4Y8f6LRXj",
  "key15": "2rtAYjpEWvp5Hq2qnYtWZKM5mWAsx324AZCGHeiFt4QEV1293KroGB6oWhMXu5nbSPBBiB8EgrH3WjMaznUtA2iY",
  "key16": "4Qoi2YPhc1XKhnTm6LkncDtmSZLoSzKpAT5gaWRDFVTV5kp4hSLHrHDoVRcRv1BbVPDgyCn3NwMhwBUuyBeTYrji",
  "key17": "3UJQ2ZXtG656B3gJNBH1Bbfy5ebmMuhRFgdva3wczZw3JzTVutQ1nBohx2ivag2rKMEwdVxx6rQHmGammJ6pCxSG",
  "key18": "c3tJoVGkDzX4DL6AuLjUrC5TD52fbvVV4RvxKCQzWW1b41cwHkFdgaZjyNQd5g6LsKkLjAuhCNgd5BKABzxqPvB",
  "key19": "iPLAHMRiUfj4j2xToY7moFxpjjMiXofWSyMXgG5iBx1HNz2y5axXSp4c1KLmi5yENnobNyKQbeW94AWTanTQ8xF",
  "key20": "35orU6D8eS7j7ivXaVNaGGTNHpojhZLkadUxUQLZ1PpJnaxpsaSmY9bSWu2Txh5VvRg23n1bTjRnmuXxd1tn4aG3",
  "key21": "qj7MLpMiHzLietBR4KddXa2XmEbqBAqAHPSadD1GfAuKs57YsCMRLZ1zCk2HtHXkCX7MPYLSGLUcQGyEW2QaBBw",
  "key22": "4QtyUoLJx9XLsS5qbBfF8CtrLhDsho9dWewFBavRSvtUCCG3RVVkuZvAfZ6752BBoCisApqC2n5QJmJfxmijJ37V",
  "key23": "3WiEMv98ddh2DgSgbzh9Z69JaM9rDM9A2St8WX5MHGpoWiYtTtCL7RSttwgBn4XBjE5Tde1VGv1fwF4PzR5KR8Ay",
  "key24": "3WBLKZzuViFtqfggL9Nv2qp1vDzghrqDSadXaDM94cBRicv6yhGfqbXa6UK7FwM8wdkD81vj1sfyoUzCQ2WBLywa",
  "key25": "sJrjmx1P7RG5dw7iLue91rNgoiS78H6t2hHPrE1jxiVL4oc1zvoMaSvgDc8X8s51tBThxtDEANp3XkthjrUgjtM",
  "key26": "5uCAwnrUKLpcLLY93D91WnHHT9By6NbChJmRUbwmw7KiQQa3RJt7KJLY3WfmKspw38ULYiGP7xEMbkYuyHCSp2bC",
  "key27": "2gs8QppBSEcxFoSDtaZJ9u84kDZ2eMtDhzqGJWnJf5PdsrXeN4Gf8hGJn5DbafAW37rBsXRA7Ya5tU8fN8cPoQ5V",
  "key28": "3V5tjjtiHbV6hACLGMDTS91yuZq5HMcAffFwYbvt6Fhb5MmMercjnbmGa1LEoRnYkNMg9JwF26mcY79b3ACkK11n",
  "key29": "4LBL1fA8j5XTrLSeA2XnEeA4UJonddvFmqA9ScLAVZ7H5dQG5mxPmvZPNb3gaifxdrNdcQwwHkZWGEjJGnDtDPya",
  "key30": "2YdE1Bm19Q924CU6o5bEquMDdQhfR3xxTZkH3XvUsQvZ3QFrYiN22RDUwEtfPQEPEe5Jsp7WDQhb3yqF6P9M2Fim"
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
