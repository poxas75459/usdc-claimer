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
    "2q8w7bR1Wnx7axS14aUmoxb3vcnUKcecpkbXbZAnKpg7iA9uR9iLYGVp3CMB7T3bgczQKGg3Ps8A5nH7tA1Vj1gh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cR7F2urC296gzfV36a632oUTpPky4rrkHBPDMcEAPyqE3rVc48gNxWDEqko6NCGA5B5R2jjpesYMBQWiXW3ZNCx",
  "key1": "4sY9YVfvSBQ32Gw3GUSEsaateq7ELPyPMH1nsXN5U2FiEfUdZJANMWLNzhZp2Tmsn3LtdSQ1EGu4k8dp1vvqHCf9",
  "key2": "cnHVJ8vP3mbZbsKGudcnsu1TBJj6cY5c9Uj9GRxuVWxXpWBv1aMrimqW8Be48ZoikQJBDbJUTKmgp7Ab5CyftyL",
  "key3": "yugm5waRmUxsjRDa3XHzW613kKQZhE43bGrSUB39x4XxPWaLuLrphQWcbTVsSgC2r34U5umnGskrH6GbTxXAu7D",
  "key4": "L1vp8tpBuaJhnzYcomssHpsQnrM7x6CT95PVJivoA75oLEjia9SFB2tSBhbQtYjBSGaVttJTxx7SgcgFdhv3bmB",
  "key5": "4JgAcVCGoYyAdLJK4dG96gYYFcGzzmcMaP9pTKqAzKpTTWZUfwjGw7XeFGPhtDJoqYYzG2hCDQpoGbXxyGLAoUrS",
  "key6": "44xC26XJKRqtKiSNVhKEMT8MyPB9Sesn727yR2PD92TzfR9zdYnwf11C6Pt2aUKP3dWeFz8mm9Ytf1PgaEbKsdeS",
  "key7": "3cKvMPWY6K2Be91yJep5wAtWYmZ6vYWFmKPNY1waaJHPt6t81y4tJcWfieit1pJoarG7vSnjf5x3vxaVnSCXyPbS",
  "key8": "2apybdb4VyPvZhUrzGcGCaRvzgfFJCpVDqY3dSp5jYFKJkpJEJXvPcqm4WoQvMv2XKxBXd6howSX8RDBGqvc6yba",
  "key9": "5uyqG6vZXHKDrtqzQbGwX61KYkw9bXP4uMUnyJs3UiVKYU23oDqfhbTgq1oqYD9YLeyuvSP5F5yUNL8Lpw6hhpSa",
  "key10": "5Qs7E45Pq67w3C6x5pzhpSX1mBi55dVq1zo8AHge1cbXKx2jnWkksSbnRiZQw54npCjSTnwfJKEx4x7NSmcWiCdS",
  "key11": "fp4qSxZJ74nLUvy7BgPKwBkq8ofZR3djCNqQwgbQkL61i6L5nXw6cFYdMRvTFNk8suFR5gphsjyyxd4JGGGQdYi",
  "key12": "4Len4oiParzrPRcEoCSS3Y2bLnm67kDnTT7bDdykeZYoqps7PbQ3a6YgB4YPZNRRePKRnNDxqDrJPwa643dLpHFq",
  "key13": "2xXHGPrtFRAmJdRJZ456WC5WRS2TFn5qoXQK8zKwf1MQCaRCWBBaQmDrm4MwFSaoxAxqoPA6VLvUZUe25VUfBDLA",
  "key14": "4e5fgLYuvCki54znKDHxnsJ3rrUiJAjAtgeci9p7htSyDSPJA3pM8ZKDCKjGewbdtpiLH65t9hKipMqVjSPyhrj3",
  "key15": "5tRDPpNgC2FE9TwpzTwJdQZrfVBH8hzn3rbGNfBodVMWXfYuNJjusZf9iBNbWESfHC5gAYMCjebuzF9GQHSbf5aQ",
  "key16": "63Kw3ggfZX5oM1qFVoJgqpkMe6SvnZSro1qH9oWUuWbTy6MTVKSDMrfoF6ywHprcnNqG5e2UADuVge5WFUMiASL6",
  "key17": "m3rA3ERJSbecAXfzh1UHhehh6BGK9Ddf1sNjNnhCKGZdd6zX5yW2i5VPqKur7b2Vpwt9cdTdZhwfxiUXzNorB9F",
  "key18": "34ULCvpE5c2xDcLYJVjHgYvdNBo8qfQ8YaJ8iHMQHLnawABhGqixBqVCyHr1hW6rgaBrw7f53761js2PJtjSvrs6",
  "key19": "529ncSDXgGUyuwbj9jF69sagJYY9GHyjRoH2sHq2TVCuyKauBuSj2E1EpPtUe9PZrZs6pQxs57snipSxjk8j9nj2",
  "key20": "5fSbQV2hromzStKYgRaJAektxJFMQkykw9SKojh6qNBNAiNNEALUfzg4KeinNgRU2knVKgdCEvGefifLjPuMtvT6",
  "key21": "3myKyvpPa1RHaaYEcxJDWTE8oAvAmFm595K2MH7c5xm1iYFpXJNM8W6NYmpomrsout4UgmqjWHZ2dypwtGmwsyqk",
  "key22": "5kG6upVQwG5KpukAeawhCzXRLAGjqgR5bMa6R1uKGxpKvpWadS1cBTjUmrVfhN1YZ5VhS1G6AjBgRTnEQTMBoV47",
  "key23": "5rofY3So65veQ5uL4cgvtb6CP67SHenCZDp8zpmZoziH66S8b8bvvDvnsupw5z3YDE5K4a97CpX5cnXz9uSyGC5e",
  "key24": "2uQyoowXc5nkzksew3cdyEaEydhKpFhpSHxjjxozUb8cSvSfD7WhTE2VNw5oCfaJuMeaH12Yc7icsTicDKXKDsHh",
  "key25": "2RBp38qXU1xPNLLdQ8oEA54JCi2j65fvDYtBD334mgWvkaH2zmc12vUMjFTzawYUDQT6Pw9rZsacxzNw1456wVxQ",
  "key26": "2LFXHYSz5wLcaRiMfXDWvHNYPiXe63kjwwDygyKntDSmKaJTr8QjPV2yWAMuCT9tM22B7gPt36KzmFwFwi6mEKjT",
  "key27": "4TP9JpVzEjzXXQtVWWxNLZVnWaGnfKXia8U6xcuRNZ5W1ZJdanEXGkd5UxjRrraqSy64MnqhmVPY3TCnravVLBnV",
  "key28": "2EczgVBfnVnRAKKu1rQTkoZM2Hyiea3vyfQSYEuQKyCFbvqL3fYe8pKb6u4Qyf2tgAgYrpkC7nJScPfh2ZUZn9h5",
  "key29": "suxqphbRdYSSVA9LKM2tdwU6d1axqHJRTRzA6x4pWRbgoAJFd9r71Mah3br4eaADEadVCuYCEtwtys57azxajRb",
  "key30": "5cZWSjSa53axHny57qpwc8kKEU8JD4y2XarbtarihVAAPs6zzsTosNGRxGjC6UFCNFJ9kUmVuLU9MEgJDHuPZcks",
  "key31": "5qLAbj62cenv7bZrVCM2jc91KmJoQeSKNmudwEkQZ3w8aaBcnaWKvDyfSEjajYSZBUTaoRYPvkLFa8BZcVc69dqe",
  "key32": "TDZ7rAAh9KHjuTQGTEUyZTPYQH2nxy4c5ohxkwLEuZrt1ZBdFAyzoRb9K2wzzbrcgkdZ3vP4za4aKV75Z4Y6PKy",
  "key33": "3AgfLFUJUQh3xxaG5RT5R3dic5ceku9rLu5Ss9xrvVfac3uvBXrqZ12dgHY5EWG1mfFeMr3K912pgdZ27AsSza1U",
  "key34": "39uYjRMKMcQCKDrjN7qiXA9y5odfYA1kQHmb9pzxUaP4oPJNZ439rykSrtcQ2wTNS6aL72qPB9gPVtvoW5SEgpTL"
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
