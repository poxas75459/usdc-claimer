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
    "4sPMSeympvrC57MqdVfr7eboH7RJF6P3sJeJzNU2i1D5L9HYfFEBNaMqBMNU5EYYvjJNWXFoStVkJ1cAUCrTKQNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qkp2RzkesfnAif3Jaah8cEAdtoCFcZdRf51RdZKWLAesUw3fP46kCmVft7CzKW1L16NYJY9Ke1Hdmb8MBeYjrA1",
  "key1": "p2cePvFvVgtM4rSadSnPASYtZcMnahCWovPsLu7eX6JbgEfx7NY6dBkNPNNtErj2aZ7Szc61aQXgVEMK12sgWqx",
  "key2": "2JqxJFpQjsuf2T6bUsZtWFJygcw19HT2y3TAS8Ek6sUB4i87356d5nnLZ5x2WBPNEnCMiK8GMpoFqxsubAveQ1w6",
  "key3": "3aemMg4WENGg1xqeZgXcr1Bt66fdT4kihr5eUWBKL7PdCFypMGdYVkfuCrLgFn2dWd7Yj94ktyTdJn6NjNeXFWwY",
  "key4": "4eAxDH4WtwKET7w5QxR4MAr5wiWdm5SADy6Qdk8SGRDwpvuXtcMLYPB7QXKVtx5ZkyBwPq28dW3zBvfVAKvEfssZ",
  "key5": "8AUcuKo3bKjkMba9gJA4cSYoU2E9R6K3gqtfH1vx8k6TLGCkYYg5jnuaxC9Tv2WGCdksbbrbiSoYy4pAW9EvQHp",
  "key6": "3u7eXHHHMgigRxD7JVfbysohHXpd1DLhZwKp6eNHDP1c7ph4YVaUtap5DBLpregAxrngttt2dSACCvpcx5eDphmh",
  "key7": "wGyyXux97c8TVRKdRXA2x5LSVChoWCs5LrmzfKTcReisRP4SkZN6c5AYM4o3Jt1swbw6yJNd4GttdZo9oPj6Mrg",
  "key8": "4NK9Mw2Esn3dEXFyF5fwjabd4qSMSfwQ5AdcpEzkgLcsm7QojpThdrwv2uuLqjQHpjkF8rpSwHC6pxTFpoguC3XW",
  "key9": "4jTeafpv2gdUUSP9eGGARh1dMer9GmsHC4VqvdcWUrh58JJXs9bMNGu58PAF8rJ2hmoTNYZ7cBgDUyQatApqcfi6",
  "key10": "5wNmEAB9thrwJ98EquJDxfHneFYnRezpFM7po5ZWmZhev5VJkRWEYSCivAoqa9dT2zeSGYHTN7ZqygGJWw3cJCCB",
  "key11": "3rgDnbfdppdLdKFjc9ZwjPZZZSQ4iRPjwKN45wxhA8hizS4d585Kk1uqwqaZ3LG4paSaZdpHutWQF2PBSHqMpQzg",
  "key12": "24J6TxhT2oSTJRJmKNwwKUKW4BWQvz997Mup2vWHy9bJMpZUsYeUKauteVRBbo7riXYSNXfB6sbw81k5gEznSoph",
  "key13": "5DerMLFiuLCNgtwNPmpiogtrWcJx94WC29GJ2EJrTmYLjUoDQRdSzTNAsL5xq9Fe57G4wTWwdfocqd6A4bdRFWpp",
  "key14": "2MzkChYJFu4M3huZfqvdVAmJFgpNjXkMb1P9ttSbCiGAX5eMoPC96NnRV2JdVGzGCUopVs65vkFMfnFF4svFp8LV",
  "key15": "5hGuwXjhfUfXkCR5j229hnrAw9sHSsAPrEdJUAFSvWvtLUpux8eAwk1sfbkVizzGM51PoUMUCEGeuYWSbecoZEsJ",
  "key16": "3pmPNzh2w7vyG6a4QcGAjtkBnLpiCqf2FvaCzWCR48wScVhXh3qLWkmvvZQUrrRdWscdhyy6jPBNCYYpLGQ98Fhd",
  "key17": "5LWjZw6DtZYL31KuXUsUFnz2bivvPFWHCkcQPkTQi25Y5yyYGzX4RE9SXsNV5myYLCeGEagnfz4nxydArQsLp3KG",
  "key18": "4cF6rUjDM6fRYQ3cHt8BiWvZfLH6fjBFHYNyfjo8Pms3v7mFdgGWrFNQyCbfZy84wMGwvrJ5NJq7SKPWDMYotEQK",
  "key19": "4CsbVDdp1DbiQyLvDhbbFjtkR8jhDgZinGank28SRMRKAvvv1L9zPpCDvKD6WWANawq5YAQnv3rPyAPDzvYv3Nki",
  "key20": "v1YttdRWgvtC5yNunWYA3JxjGhYEpri3CN7RKyUQ3Yw1AzhgtsEQC1dwYBN6Z68KfgKiudqktnJU8ojcR7mh8qa",
  "key21": "3GJ9r96vtAULtSnSpvMW71k9gpoX9thnCVJ6WxKdK5SnYmUiC3FJBFZrRa1dYs17svZ5R7WdaTWKo2tV9RwaZrsj",
  "key22": "28D4r9Et9yEXymSnErgPUE6VctL4YXUwZuuYMZdY5CKc911isSq46bBNkAbAHnMKrvgzeKppXfTEi8nLnHgfydgc",
  "key23": "K1rcAFohbpLkfaicJLPsNe6h6VVoqJQH8kM3x3ztrhvKYUsFFwL6xj1Nw2yy8VuS2Qbwr2iH2nCEzk6BBm21mJg",
  "key24": "5NUePsmpfkx1HcmBtCRyx43dfDy5fjt2ptrrCyth1owXwNyYLpc2xR1KQgFamVAuTC6CkVfKDJBTYwi2tE9kxK1r",
  "key25": "P9J7m6xANf9y9Xxry32HWSbhxh966aADjRcDcpWJgLUUTT4WR31dJ1H8GfghS1EEPvVp8zijQE1BBNsG7F7ywrM",
  "key26": "fWW4CbNbQfieqQXsxbq9t7rn2ZXFNfhJpeK7gaFzF5vvxmxHNXoDzrkt5wbHpMi27wuomDa1fbKsrN4fg3W7EoP",
  "key27": "3rZvAbEapi7gsLf3u7PVxJNHtw9DM31tZaiFupSjJC5A6zupaq3bD5wRXTQ8iBLt5jZMqLfMAMVHNAnZwacddijB",
  "key28": "5FCwdVUsdtawukytKs3XqMXyKbMeUNVSDWwPLf6UftU9vbRZEWwNE2rhq2yDjaV91v14z9m9HCjmN2VJm6hMFRTJ",
  "key29": "5nTaGp8Zb1iyj5t8Z6JBj4BFx2fYVjzumotJSsdiwEEjZWtKCDNUPeBhmrJzL5nUxwBfY1NCfNdphP7EM5EUyCov",
  "key30": "2kGkdK9PFCcrUGezMmSyQ8a32MGtyKT7vRxPHE4SCmNGeLEFz3ik3H1NxAeBEUrcaDA1hXUHXuswpENg6SPUKMhE",
  "key31": "VauNqwgPmhtKzpntsTkz7DBfLotkHx9GWFsK24gL2ncWsPc8Eqh8wqgNN78vmj8vVYrVp1wege2KpUfjnp7YqhC",
  "key32": "5FdHGdaf6PrCK51dCMncnaMHFGrHwyZjRLQ41JbDCA14Qh716R5PY846GSja3i3iZDUsudeq3VuxZLzmUwUjPzXd",
  "key33": "39MJg8EAQUbGkKkxVNpTmNycTYAyBwdjdtsewHcYzyfKYCCb8QBT3fKe9AMJpxWjXWcVtwahQTP5prVyBWVsjrTq"
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
