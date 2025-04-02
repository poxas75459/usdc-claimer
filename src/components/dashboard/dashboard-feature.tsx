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
    "5pHWtf8utRon2Vx1pcnvaHurpHvhfrtQaGyCkPCEYvCxmNHTBq4VZzGRqGiDXxcmyk5knCH6xnVpDsDyjZftcCak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C3Y3fBDLhCzcMGf1GKRkbhR6798U8MauPDwxbpijTJBBnoVXkzJ9rgrNqMybBqM6MyQAvZtMNrzi7G1BuzBKKuU",
  "key1": "53DqyPmBGchiBycPqpkRBpddjJijxCiSiYYTukMeZTbifrf1bP8YCTs3JgBeUYbH6tNFjmb18vJorEm7m84mmj3p",
  "key2": "3pEbK44Bd5VJYYCKr2ZVE9MrF3w2e4au3fmGPSkBAhrwNger4mb5EBAn4ey8rhcpgvVpTAPhSPXop1AabPc8o7pj",
  "key3": "2D7kTNh2AVggUCzqssvuHjooi5QyqBkJbMtaahguif9tk3ecsyUUicyurqhdeYdvrx6qyVLFcPYPuCWspLCpbvkc",
  "key4": "5KQypJVhbcdRHT7d3TthJzijjzpzD41DzZ27sfUPiycJoGbXLm9rsbFcZokRJ4CBL6fUky3cHtYVEpdC7QtBxiG9",
  "key5": "3A8wvpPjQiM8B2ehwzevrFJCmvxX2NPiUfQPYnTHKZmN8VxnjzDwcfs7sfB81pt178uL6zd2grGbuDLn8i46mWxt",
  "key6": "5w5mViFSEWBfydGAP5qHxYjzeUzvTD8r9N7rnjafGY6jDt2ndMXUByHJQy1FDt9zZ5ws4nxSQfY3UVmutM8gy5Eu",
  "key7": "2jvFHednujcQiADt3tNLKdPhRLRnCtHWqZTUNunz9Gb4sXqJzbxs8s5WA1MK99EJ6BhJrCwzL45uTWup4vd51yDA",
  "key8": "2i5TXTf33WiN3qYr1LMSUsYKcudyX5PHMr5183XmvuvwkZgQWeDEoMhdTP48WNxJV4LEoQcnsQMDwU5vNtCnY4ry",
  "key9": "5h9bxHiaifgWvg4ZkqKDLy9zpZykHbJjJQrqy6f4vVt9mfckVuVpugoYS2owtSz5UWU7D8NHpeQe2cAsra1MSqP8",
  "key10": "BGa8FhP4bWrSyhAmSeqHfpt377BHQ3cViSnBYGKLTNFif9NP5jMCts7vDU952QSX9UfvXYYwTKCPbn5c9FTev9Z",
  "key11": "3hr8Rr92foo34uU1ziRv5tJViTTgf8ocqm6uwJQbibkHABUqCQpxmd9K3dRNWwrBAGGjwouUh5uPGgWo9rVBRaPn",
  "key12": "Xv3ZKRkYqC2DpBwcVTEZgeXo8NJR7HrhXShM9QZLyEXR2iWfVNJ5w3XZSLW6hZMfMZZLn4qBnNV3fGR9vdhUh9k",
  "key13": "NnUpQGXgg2wVF2dqcybdpcB5uXcThRt6rrmFfdEBx1ydXPCgacvAWihCiRFKMVgTBrASQ3A5pYjVvHbFaLQFrjD",
  "key14": "53bqEmhmBnGb76Vw8RF5qv4RzyG346Kdfg8GZUhSujuXCnJqL8YciDRXRh2Tqsp8ErqvKW8p8HH8sbHC9ZXnh94K",
  "key15": "4sLEKriXhzaXkih2GYjsG1rZARh99b7rmMwTjqThJxnDpxpcrWfbPL7Wm239qnT9C7ws2LJ7o3D2AqXAVBFzCcmU",
  "key16": "2TXLX98brmqNUnnhQv6625CbjBQ6GCdEwTxqi1PoXbBZLwbbW99ZNtRHv47EvFBfeA2WTFEkNMEtSijYCsWEBJdT",
  "key17": "2pB1gEyJ4T1d7iy9DcdJCZkzxdXaugzkAJWQPVvEbUyAcEdXh95Hm9CsTGyLx5KVY5vfrcQma7RGt5tQF8G4vzT5",
  "key18": "LPReVsdTSo1Nh6wonSo7REX6R47iKkhZKzJ6rPj1UrSnUGXeuVW95XXMMopopKFuM3FKzxWoFLkBGgqbYPVuSv2",
  "key19": "5DocDVBBTTGK4fepGmyEwf87hwHdanrmDyEVivKwiBaDLVbWmAYj16mMnYCQswUdQYycAt8MkN8BfrkQVck4W6A9",
  "key20": "6232VeH6HmwV5FDyUeYXCZDf12ZskNVcuzguhaEHckitgEBpxGK4R7xiVaAjJPcFSLzZtMN1sWeaNfpuxqMwaKR9",
  "key21": "2Lfv5n1vi3vi2KVTwuFkJaNoq6DQQv1V2eS9TyMNjXcAzqUiB7CDMgEGY5NsZFWzN4NiyH1eZBa9GSRGyBMeiS9J",
  "key22": "5VpEBR5pN5P5ihCwPdUqK8D8eCm8hAPCN18j76f26g6Hv53osoNnSca5W4zpea65izR1AzJWxF6puiSqXyRr8XqT",
  "key23": "4pJGTwYJvKDmgjxhiqBbB7WUHQ7K5ysJ6jiLtTkjcHbVmdKkcjA73E28i837Z3WEpfv3wEA2FcJJj8zBWpRRxk2b",
  "key24": "4XbFkPvoX3fXw7btMNHk1Qcq9ah3tg3t1HPq9q2rtQQaHHysRmYGKFn6z9cDckQfnD6SBXMDkAX2qMTU5wQERgB7",
  "key25": "2ovan4ManQqRL95CHtZEZHFN3SELgt8LBXFbJxB1Rv398YgUjNTrymeT95PMaJ5XCv5HTf3X95pxC1KAXfkkeRif",
  "key26": "31N2ceB5DaDHhbENbfdrJvA72pF9KupBNJdPMzZmMKu47KMEMoCMDTVvFmqJoH4Mo8FCUfDThEd8dDLoNafgjdxs",
  "key27": "4WsDJK1FjiB6LLRaBwGPHThsBq4mWnhVNUd36HvpUZ4VsvmjWde87keRth7gnZ96kJVPEY3vkBxMXQUXxcKd8Rvi",
  "key28": "VQVp4GnpbAmbV2rJzbHBrPcMJJrVK32CjE8uRQYGWVSWHkvwjZdg83wZwXvNLyJX1aLnmFRwR5zCgEZNaU1sXqi",
  "key29": "6mYWnykisUJ45ksFZkTR6HryfAE1qPeTYjQmR12RYcePCrCTobFyRUKxEnjKAczw8Bv7GAqJyHA3mN7QU5Tp5pF",
  "key30": "5iEVtS6jjvWbGTW6njn1QP52a1g9iKeJWHf5rosLhArVpCXTQUMDVkAEsxGdE39bJFgvfvMGaWdsZRYMkMrTiH72",
  "key31": "cAfExKpUhEx5YutzPwtiqgF1daAxxRY7yayvwE8LVLZXnyMcmoTJaEFngu4m5SCFuBqUKvLS25CQyokw9MyPdLH",
  "key32": "219vzmmNVp5nZdnxojnER2ReFFGmxdjnz5xkDEtbZGAuxCgHSVRaLF2Bc7mbvHpoQtEZ2XKnG4LEW92tuSKRYQ2Q"
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
