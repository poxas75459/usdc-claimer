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
    "5dMHL4jiRL5vcgZhmamZG5rjM86yFLfk2MwHWvq8mVYnD9xWyi5qH6kHu8w1EWNrk5XzWCbiq4Ey3ZsLWAgeTXcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewFhPHKp6wUVSdGUTWh9WvzFL9hqoFNkG3LLbFhDy3h8DVjcmkZvV1yCxf9DUj1bMpqFhL9bfjwQFPu4hHSAcKa",
  "key1": "51eV2YCY7Y2DVrvADfJKDsEpUUdbqBPyVBPZSnB3jGCUpHh7o5fMz2nZKDx1JTHeixiWbnukELSwS3HLMwfT2qFq",
  "key2": "58pLbcGqWN8xs8dzEKd8L6Nj4Aep55JhzXLtns8RzzRUEP5ix1QyBGceE2SQ5LLF6qwJtY6KZaAz6gaEURLYEvDZ",
  "key3": "5DfboMsjnUu8XbHGaaZYtJ78Uj3Uc4zNz2NiSF78dddeoajWv23hFLYpojAYNNmVZ7nZx86W6qpNXbn5L4k1GEYd",
  "key4": "5HWZ3uEZzKKsP6f187Wh6tDdyjddhZ95uv3viCeQadQMMvjSpVTCVD4Zy34c57Lpup9cXeWtTbg9wSEqGbAXPKuD",
  "key5": "47xWkMb1aPpeSH4bkv12XGoR5S1M5UaT66Zqmdis5rneFooQLBxnnDFQPi33jHH3exDBpgTrgjQTdbzf9kTEtDSK",
  "key6": "4c9pXFxo3i9yAhYN4bPCjgTzrnPqZ7Jr1LZJHvDFNZXhbmYRRsAVCxg8U6nkfh9es8VxJhxNeE7ErArpfqW1uP17",
  "key7": "27qPToabm83mWRvhYxVuRQU6b9zsmyc6UueTgWAK1FkNGP3ajq1A93hRkfRkDQsGPk68qYSKnU81GtcCfd75WX1A",
  "key8": "2xhk4oWwuD8KLGtpvsJCHr5gFsRHtVorKJcagKh4hvqPdkbpiinwZy22zwKuNbDM1owFip3beDPjS3oD16o3GsaE",
  "key9": "2DnZgZPL2dLP9qseu95xWoWZq5TzvgC1f3gGBbafoy9rg7BtCenGv8bSUQ4dkruRzQ2rcCYn2du8JfjneZvVa3EQ",
  "key10": "5ujjoD6xNRrshFYvJmaDMuffwPC5nSvHqezF93EMXYkuGhcpu4MfQePoLw8ywBKf7qX8wmpT7hYzoVBTnkkwQ1Hu",
  "key11": "33VHTZRXtqLGpCzKWHkGdKfE5k2NVYPxn9wRNPRV4671hpVXdy5WRBpoVcNjhtzeqzbWo9ZumzJpGuBMPkVy8eT1",
  "key12": "2LRMVDZxrFZSbhgbociHpoREFMgBnvp8rxRYmavUKH3Crzwhx2VvdG7eGMgtVFrcGD7B9qKG8rFpbs14k1WqeYQi",
  "key13": "m2Mt2hvgta7YwHGBJTpm7as84TFyiATdTG8fzGw892DshcFMWkiokheov7iTmB5GChr86GQfBDnF5JoDvBcvP89",
  "key14": "2iJYLkPh7wjmaJYtRRQFQPo6e4yb1pxKo3gnN2Ls5w4aj9hZjLPzaCAwButktNfyyrEoB6RTwqjgwuNcdr1SfJxJ",
  "key15": "2MRntex7cGayxKfjhJzePsTha5fxKnKcqopGeCiEhWteZymjm59Eof3HKZT17oZfu86rF2Ho1VQ5wACULJtn8Q6U",
  "key16": "5WZTzT8DyTGXPTpxapm4qn4cV7aAXYEuxHitiihLnyvfHDffGTMNNyT8E8fSnjXWZoVnnWuYbFxzwMwy3AToBiDA",
  "key17": "4yxtm4NmJfKQyLJZJHqpdGU6hSgUpEwRFWChPASWFmdsrrtVp2rZoYMoqvGTwvWCh9DsnsXiVzAgyTW3nxnLKkJx",
  "key18": "4JHqnTrH4yYM82KVFGTE7uBUFJZPSEsBfvbL1PG51nGiC15Jqg5VDAwiqs7iB49PYkN1WiuVSQigXNhw3nX3weez",
  "key19": "3f7bSrk3Efjdm4FETiervt9Reidz64BkHhHYVyMAQFwJJV3vG1teUbL3pUBatXaHAB5aGLnVwrpAc6G4mywoF2Ww",
  "key20": "iiSz7dEB4MGkmwrmYDyFkbo1HvapSQ3BLM2ySp2ukttA51Hz5NEqNj8iKuxRmUtGXKNfcjCmCvGvkSTk4PQseXA",
  "key21": "2iM5qB14XX29DFzAiEyHk4UDdbqC8QQ8YkK4JG94vEZqypggF5WvoetCq35faUfueUDW4gpC9dXnsWd1h9hCzS15",
  "key22": "5z2bjhY35z7V2gLGJ9U1nU7fXuDM5s8J4F7fcbWuKpbwCTD438zszK1eko6N1fFLfkG3icFjVL2x65TWxisWkwvg",
  "key23": "2d6JLGA68775q1gkbDRCXd9wKBYeUTGJjHTUoGvG1VmXyW1tAR7MYXbYA8ZHLjHz1kV71t214mtJgHWZprVBsPgJ",
  "key24": "4fhDZQCmJ7yv9sLgQtAtZ3L3LVZtztwCKDR79AYQxsvprhvMQf1U5N1jRWLGtizgLYkwBzcQhRAhhFQBystAC3vZ",
  "key25": "4sGfURFbU44vYjyuQk5XNo4AiaCX5cE3UUJD4rPn6E2ZcitDi5557V8JKc2axDWhNEy5SkQfgLkK3Hnvmj11HGMB",
  "key26": "4ZTExZXepTUgZ8KMnXwquYExHpjfe2CTuPj7MjJTjQpJ4tPZsQLoZRk83pMDV9E8VDPmy8iwP4eDRdCSu8SsRzhZ",
  "key27": "4TzxPdmQUL6671hLWwKD7KkSE7KevLspyLqwRxhB8F4Gsd36KqH3JBzzkWMBE6GJwNaKc5wQeS44wXjCdRMfbPDX",
  "key28": "VDtysUXk3nMPvHqB1dFwnafhLFYjMVUpMYpxiSHhf8p5WcP2HZsBf72FbStNpFZHQE6DYFEZ8kzEsE7NbGVVSkG",
  "key29": "3tZs9PvbReCGXyFmyEdFHpt1V7ekSVTwQoyRzPcysa3UVP1gw8xbYZsjnYJRAqHeMbXth8WuJC2ky7n7rcQwXgzM",
  "key30": "XGrFsznovScFY1AUGzUDcPSxeaKsQc7WZ3XSJSVaSPfW515e6JqHCe7A3Qxv5WLipgvJAa2PAAEmDa3wfX22pBW",
  "key31": "4cVNRkL8J7MWc5hsLHmnG4iBNqRB26FsJSzofDj7qFxXJU78m234sa1UPywRvSyDDb1e1rXbLQzpJkaS1aXcwASU",
  "key32": "5f6nnj5qWHDm161WLKqTNzzy5KocxEZmq3BQooWRyJnHJ56YQoJiF95SY9AhURQ2BEPrqDJiLx7D5RBMkvdjdrDN",
  "key33": "3eTwPRinm1gq3joLx4aLtFt7gx1tYjyXbqQrFPh68vnSuKVQCA3KLNv8yFMWEv9FGYWmZ8pCBvGqaaGf5mJ9Zjm7",
  "key34": "63Ut9znw84YCFcdysA9f7uQ2BoAXzk4dtW8JG4kWr2We8eCh6CNFLHj8DPqdppL9MosT3PXQAN7ZyLnrGZ6jrXzs",
  "key35": "2jjvdQ71A6wWzHbrf1rd3tK8TygMqpCjxqqxGjGKFLunJZ9MHGPAYdpTuYUA7iEy7rkzSBMY3JAFUwVbzXB5pLN5",
  "key36": "3zWv7tf2huQjF9vGjGkPezGFYrFiLXR9JnXWBUtHnGnBtnEUBk9xQiuNm9CvnSt3QpxWNUMuTgwyds2RuqoGgDB4",
  "key37": "4JaJdZ3RS8HMoRpjnGkGUehjQ39Rh1bRiLmnFyXBZXWtVRBRACA9uNvfeBPD95DFesaFkokm6fCxB3d9RygZ2prz",
  "key38": "3dGbh1pMT2hgYe7o2b9effWm1NJYEVfmTNgM13C8WP539tSGNmB7ZBVV3aqZNdqm45swAMhe9VsPqQxYNTcJNDHx",
  "key39": "4yGzpqxJ3dPvWpoRGdKcM278T24R7k5G2ScpmCh7Z9PWHmU2Gvgc8eWwstHB94kwj6bWynT5QXzWZnagJ22JcpWe",
  "key40": "kT7KwqiyagBh6dbrAmr8ddM1sJTFhadJXfFbbN84EjEwCH3Du4CmAgKn5bQmXNL21pZPUBeZvERfu2aExFRgAM7",
  "key41": "4QFUXaM2yaMhD5pLvSyNBFgENJcEmhHKWK6EE5wB8bEhd1GZcTojUWxvu3HUvCrYtB7HpTGagkjxnxZDrNqWcQYJ",
  "key42": "54JGvUCVxqZm5wX2mxQLak8JWdmWXrLZz48sT2etjGoEMjFCqrgZVm8W1fEk9jRLKByu6oeEjrjTCd4Cb8yUyR9A",
  "key43": "2Xhx11cJMLYNcB865hRk87gHGwaCUB8uHzNYWDj9dxVBj6J7M4Q6uehnMnevtjwHRDZSFv2BiZwvo6mXr4TrvREV",
  "key44": "ahM1z63z29Uyp8KUFZ1ow1ButorcZ3aH4FZS9aDziZ81fVuKLS8ewTegjaMRS74jUTJUasUZEBvUMj4SRoZNZQS",
  "key45": "4muEcN7FFqsXqJcUf41ZyrstTBQ7eAewgY9am73tZfbksZa4phCWVFheYEYhT5Vntv6wnjV8NVCsqe2hbQHx8yR2",
  "key46": "5h9g9UvVBpKexT9YLxNNsvWnZNgqwMm3JFDbjnywDLKByP7vrr9gihTYjRZKRHm5WDeGi3nDfXy9823uZsz69Pkk",
  "key47": "4SQVcsY65UQLL1AuKVLSqsSewLPHtyiB4VZGHHbtYjDcoyKS83MC5esbCTPUneaGpJuQ9A9qVY8pCznEwRK4G6cj",
  "key48": "oQqSYyDWo1qvGk2EWt8TTkqiDiPNHPSU4fbS4UZoXKtcqtsdd9TtCboJNV7Zys852HPhuUTXmYkjb3761WFPjuy",
  "key49": "3rsYBQgkQwiqGX4Sh7EGa3vzXeLV4Z5mtqTpc8JRk297mv44VvBM1jKFF13xmJtggyWjkyvrjbq6HNKCEnhpyFeZ"
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
