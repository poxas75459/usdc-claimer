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
    "2RBfu3nKASgMPkyLLCFtjNuHGdjJXJNVDRfZrQ5Z3kqoZdwxpkMA2jVhGyUNm2EyBFacMtgAvojhMBjmAd4dpfkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V6aZQDdTDVmm7UcR5gm9uQXhYTHgnnjRSmhk3dQ1SCu1wp4pHMYJqBmH16Q6kGgi3EtqpHFXss2zjbykGkh4izq",
  "key1": "5R5zSP8Mb4TEATJAtMkqGExdSiHcKaApA43Ny5JL87qxy4U1FiepjhzoHwNoi6vbzQXGyzBWdsUmDNomJXmyuzdL",
  "key2": "D8rPe3kAUoHeo8FaemsdzHfTpwySWdoCeUGczNZhrNe6kS8HT6NoEPp1zwBdtfhcE9L7aQA8n3wVGa7Pwm8uYWK",
  "key3": "yb8i1UcinttSSnN4KTt415bEx7oCnbjNVPfcHVPojFYjQt1pXXZM5BNPLbLtDxsXdB4GFsbBLx8nCLeraesedEc",
  "key4": "261Vf4ZV7Lm8wVtbVicPkM1dc9frX3tb4Nb4o337puYFFEXLoNCDz8nfXwVPmgvoy4rRy4EBgeVWB4nU64ptqUEh",
  "key5": "66QzX2LPZe2Z7UMVEvZysTPDNynVR4F7xRMswfLkQJEmXUf9pBVDSK7N6bAYXdQD6hrvzVkbJXEbJskRefGfwZwi",
  "key6": "3R9AfopCUT6SYDMYE6MQ28gGvEtTXuoe5MGgWsZ4Xju7UPdTmwMneeRL3iKvDE5WoSgMsax6GjmTjtboTs3FgLd8",
  "key7": "4ZwHZ8snTkdLftUB3qJqs7C9bVBhXmZkmd65J6yzQuFFN1J7oekG1dV8V3peHmCGXr4iSWhmHrycBRgdd5yqjBDb",
  "key8": "5FukgYceMW79z9NL3Uoyu5YpEATTY4vbCzFSPTEaq58EUWtRsJzVtCf2YtZd6rjvD5gwEhxpeJMZyz6eiSDBYRtk",
  "key9": "n772HCr7sGVjDYHv43mYFXPbca1EkA1bs39pGdHQscHLuRJqjjkkhU7rbbh9aSTK1pDDXiNFePvAHQY4wZWSSHV",
  "key10": "eiMDrQtL7ZBv4SPPu3TivtjHciU4URC42J7YF9kqVXN6azgGvd8hCb5UTQi2ojp3vATiHxrdtnbCZNwdBGXGnoJ",
  "key11": "25espuRKPXZAqwau7BW9vyNTFsfRedKBfuse3922KY5qpWbbKMt78qbNQvFggxU5JtrQYNd8mAXJHm6JiVBQvedJ",
  "key12": "5DrDKqg6QNwgjAHETygE8sn2VMWbV4tX6gkYnFfMbY9HspKZG9evjgzA5WNcGHvsexYZPkzKLZXFgyMWvXAVUfdG",
  "key13": "2ybw4PKnYGQPtGj5PAHoZLsZMZm2GbiXRAazjmmQrBrJndyeXrhQdKyzNsjZCtuUHgAomrSiBNSb6q6p1c9XLWin",
  "key14": "4K5QGBbUwK3Qf3xgvTBytJgspuTZ3deraXWuNWTSfEJwXFAAfmTtNfBsS6P54fBqtG8553EsuKyAdFxwbroHRztk",
  "key15": "4ZUFSLFnUjvBVg648VgcLnBYo4CNpPuLUPMxXNA7gpevQ6biWSW6EbhVqz3C2w2e4yovXR4RQdnpHE6TSb5oAwqh",
  "key16": "3avZrnmVrNYymVevbEtNoV9Vt3c2Yr1SpUxfjFAxG6cZFf5oqTCVjLJABXaqJhYyAaqGGoqjgUSk8vX7aYUCFQew",
  "key17": "2YoWvyq2Aq7yeAWDwSMdMgfgEbcHeWkDM77ioWpmBffSUzqbJ15bDrcBMnQspe4kX4mQSJFPCWaPpvGjVU6z1r4B",
  "key18": "3ZHXrnBM1d2AVUYD6VouD1Y6nJT4CwgMrFfRbX9vXrQsRAu9spiqemCy2UPeCguXgYhFtQCoLx8ufy3X5AEp7pnq",
  "key19": "2GM9kC6oxsXt7aQ35mGQMjwaKG75hddeJikxw2qCPcjPq5TqMNryZgFgzrzzdbTsLQrPAXcgsaZU1dvFrGYzntdc",
  "key20": "3ynv4BZ29bzhrfJYpoSV5XvFTK9hEjkmR3F7JR8i8Qv2YZyvXMsUxRJa4zicigL2J8QEXKEsR8UzMAgypZZ1e6Sc",
  "key21": "3UQc7Yq3rXm4aYvi8hW2TThh58EHAuSUemzfTrqR3FGhERUwi18P2womBaZ6Yu8LdPJWnYj6PyhYLtjF2KfuNrEN",
  "key22": "5DCRABF5C9GmpviSKYrbVxtbMKeuzsQojGgztt3cNSMmXvkSPxsVqdJSZ3bx72veXCMf5uXdAomH7pyb33wCnJYs",
  "key23": "3kvziRJpch8BGpAnR32g1oR6uRtMAGs2KboQpEgtZoTSxDKZewbiPDCoiFpBScNqD8AWusuEPfn35csAFnVZX2oa",
  "key24": "TF8hpJAXW8wmfhs15FGohhwrECNonRNX39qfn7Uo4FA4SExnLaeDezMbD5CFkgPvKK8GzytrKha5X6ZzqEbbUn7",
  "key25": "4cKGLDLCrPU5AXuFZF7dWyLYEPURa7puXJcEshLKaxYQ4n5JNN26JpaWppT7FvPgDeFPUhnn7RYexwSFybEDPn1o",
  "key26": "Z5j4CFzb6zzmBjaQx4mAbUt9U9iMzfPbf3882HyHtFEeqaGJAeeQA6bdRP3xV9BEx9vcvKjF5u2PAWWZtT3qXVh",
  "key27": "rCeDktzpWwYsXiAo1j35ttcWdhNUJmqfEeeZdCaEL9xbZgwcSEXJfHZkXvx8R4r3wM6ovcjTj241h8uz1ZZjGhf",
  "key28": "UtLMaoF6jTDDxwXgu6xianQ38f6fE1B15MWrjJrmoghx47gFGu8LSRpuKAYEnh7UxB24opAXX3FUeNF1V1CedZ1",
  "key29": "32C7W76yZ89FMzt4kBW2K6TPWsqHzh9p2g53sU6vjTgeexTBa2ZoqKZTX3kqs6a68K1ZAQrmbuns4tB126Lt8oFu"
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
