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
    "2H1batpbgBTDkLapefx3N9su21FeL4VA8UKZi1zZkqYRyMhT1q3XtDqvri7Dsqbmstqy3gB4LYEU64k4YX9dwuPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XTeBHxYP7BYWxy6jstKp2xr6hHxXJsL5v9MeqwRaia5xBFBBP2gu17s1hQJ2rhGFDNcx5vguAYxQRNVooWMeMq6",
  "key1": "3oUXLatsufzjTuMMFRxPP367davsSauGQHisZeQZ8FFSSpzL8MUDyB6MvxCQ9n8TkKDwhVWx52iBQzqvBbaR2sMQ",
  "key2": "2ZnAB7sMw4xhcy9ToUDJvCJTFaYk9CdQH5dr8UFuUXVNQxcaEwm7zEQ13hQewwojJt4VmUfBy9LqumBHzzzueTts",
  "key3": "o5fgfQ4yNK6nPwY5ZNVcfHnTRUR8smetrgLM74JG32yCe5BqYoHnTy8zQoeNW2w7WVVwSwk72LdJU3TT6zntWNg",
  "key4": "5Ty7QCeWNwj9RnQFzxxHYrW1Fu2tMJxQFzFLmAH4A5AyhAb6zerehqx9iGZU2LTFDnfc3rDomccqBDLuFhoeu9db",
  "key5": "2VjQcnCDtXgF2vT2kaNzuWwCtcYu2cn5qbc4hQVFY2FoKaG7zTVbmqWrQFoJEWyUWcab6kqWPVH4BCjaFE4MbJdu",
  "key6": "Pt9QyNt8SAkrJvexiNB466b8BeCuQUgorrCn9ESyMJtCJRzeZgmkBS9Tw4dCdwEcJUBFuKNPg9uc2kSiCTJ9vAS",
  "key7": "4sXkPYF2kKuHzovvvUR1d2cymPqygtu583UnvBjFQeSHPQajarFVZriicN3AW7JjzyRK68Dh79ykyYUpMDjiokUc",
  "key8": "5HntmJuQvZaGdvvWHgUGHwJoNNAD14ftud96DKvNMTNHpGhxHjudiDxEyCXmhZABhY92u3TpMhBSDqRTZpzoN93Q",
  "key9": "N1m7vAVZABuSbajSQbScc7s3jZWrudDYpfpbyAMhG9RWeZZf5yYfvPFH2NFeqgE1YQrREdqKWCkvmx8qyag2esW",
  "key10": "37pCFTSq1RkTdKZ2F9w6Sm4MSkqrwnrKb6eP6B6VNsZbJheccNUyvD6Bv3n6KhpG7FAxF8GAjCCvr6exhawpy2rN",
  "key11": "4zFTLqc8Kpo4fKsx8NSsgd3nJ6BozoG2SvH31hNQd55vB2pXbeuHmhRU1FvGySyGz9w99xk8qGSKAaQ6o2vkBMFG",
  "key12": "4He4Z7S34BQ5WfazP7KCtxenfqLrS2fQ5J1FDcX6yiUPMaetKxQDKFiZWYGUYBXUfgJQcBQgBEP13No8HkB7j8z4",
  "key13": "ZAzxPE3ZBcLmxTcAgertwS2NfLNPUHHMh5iQEeRwaeAGgjd9P29AB4Vq2fsZHU8LEDxB9tEuFGdpUEsjyWsimQw",
  "key14": "2V44SD4txVz3yX3Bpbyvua6WPkf27rGakezTrQVjc5Fk2AfjQG6ofrHEgKXJ1FskgGaSkjiSTiQgdtZau78jhNEm",
  "key15": "CH6HwgQZDyafyAqHdfwhLTKoTQFbW4dnrkeAAkhFbijxFUZvEEqD372aFLPMBcCrRB4MWDas2ansDSeiofXDPg7",
  "key16": "43HCVuij626sGwrM8TRXeVHjZUU5imXVdEsEECSxxLSyuvjP94ecq1eNpif26174afGBTbPobjyGvpGM1D9stqSJ",
  "key17": "5kg8sLB7nu9jw169LZtYg4dKxkmrS3yh2YrNZMQyrvkpVHBvQ8sE7N1uky7CwPiFkttJqCjH7KdSxr4k2DKu1LFm",
  "key18": "4dL7rxLzzVjGbQXf7b89eYouo97Pt4DnicnZfUUqaaMHK1TsPJAY3uzZANSEJFV3Vzb1yEKweHD3jXzPtSZAK4Bi",
  "key19": "2wpRQwxPhYDRrmZu49Qyoccgc45UicSZ5iuJAuNNyAB3xMvjmAyWqs7SfRDEBzj7jpTuuA4nHYKFc6RW4eHN7vMi",
  "key20": "5fNYCQtQ3K3QqY4npZGDcHu1nSAtJG9S8HLMm5n5FFGHoCngd32qYtLgftLVXrUdUySaoTRzWka8pdF4HL7aZZW4",
  "key21": "5DoLtWQ1VdgfehNpNioueuq32FBqAGTxSGDYJSVtXvmHN8NaykErzdacY1YFkWDfK4YE6pusHKqdkfX2PH7HXqzv",
  "key22": "4cBnTBwev4QHYos149wGdHdXLnAQHR4BmehZ6o4GMv7vdL5MWY6dLzWVXfTZmZDaT2ZKUJ8shAzhyk1n9boD4Po5",
  "key23": "iJJ6wT68pb5x32jc8SMkbX2gTMeZPSDQB6juYFbzcoZmZ7PAk1VurNXD96Tmdgjy5Qk2rUqHSHEFK1931PpSPod",
  "key24": "2V3nQEKuFhXjsLcYYHo3w8FFqNegnABHt22fLiEm7jUHEqmoKGSYrM7vVCcZZavh8CngAzUBMwyTaFrxVoqJQcBc",
  "key25": "3rwk6kkSieo1miET2y25x7Uixi5UrWPHSCHLGXcPRTUp9iZvbuqfcX6DB81ALb25sQ3P2n9u3VQWw5kwy67V8rUt",
  "key26": "2yVtJgpTvZP8YCrXM85U7aspus3S9BVAevQApd3Coiwwfz3JabGXT3Z4F5vY2P71GyWcCbihbuUPmL7Cedbz4ohK",
  "key27": "3ymXArxiubmAAfR9foph3srWTpcGQ3nbYAZPRiAy7otjATVyWmacUAPK8RrYFUs8jDFeE1LNw3eJWLueYb1erbCz",
  "key28": "3AmzxCN3YDPkDFphK25Rv9XG5U1iKPfCRk6Zy6fGtL2r4EcfpjYt4sugiHRn8Vvf3kKmwrpPVQNaPWGj18FmsGW9"
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
