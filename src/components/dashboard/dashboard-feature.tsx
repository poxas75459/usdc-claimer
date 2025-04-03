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
    "zhL6jChGUeaP59yraxmKewjetNNc7pL5cxaL2zbZs93La8mEiYbvvPYrKj4PEzAZEkCMxRhm3vWXkCQ6E9Bk7Wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cntuxz1SqZawHho3sV3aRmmtDQFqzV3WAnuhw3ZTEysHhp7NDTcZCZ9rPCFKaUcDjenvdaZQ6p5u7ncAWhKzkba",
  "key1": "5PbNZ5QCx9aFVmYEZAfy6ppSZwQwuaXQxWFhrVjhz8i5gu8UbPjdTY4mCEc5hD6uw5mgyjXp3fs8SAyHFFQpejJ",
  "key2": "5UpuH4Yyh97zLP5nS41QU9zunsYfXSXvcxX6wbtUEUBpJWGXTGihRQ9hTYcmMXvrtfWHbNP2VMdJsyEZWttRam1c",
  "key3": "bKptS7sJ9EretZDHnb6qB79rWKf4qTAqR8WJmdpxqx72becfGyqpEhThgYeEvb3pnWjUL46g5zDuT2RNQx2MERp",
  "key4": "5cDrQPDTkX6VSp2q4pFT3DXrgZCTRBHchJQfMCXajvKXdFpxeZpLQMuPsQLH68ULyu9pjppcUByN7USAkn8sDDTF",
  "key5": "3azyyDwTifna1pt5J1SKSaxNHSaWFYYz4CZub7XJMY1FyzJ4SAn6SBzALVvPPdwNSkcrzN8jeDgxLXcBPzbdXTaM",
  "key6": "33185Bntc6fyPrDvkAXG5J8MS24eW6invGJmWi4vtZor1jXAURuoKXD4k8LvwHRrrNfQpHZMdgEn7pv24t5QCpGV",
  "key7": "3oetTVDVPbmr1tZ9ZguDm6e2XgAoF3dDGcwt9FvgCZubaBLU74FXbtnZAaMQMLS6AoREtCqaw64sfkHAQzddN3yQ",
  "key8": "tZnWU9HL7gNKA7M2etvEL6dRWWPsuhAaG1hrrXbR7WYYw8yg5QWbnNhau63nLK2fT7MxTma4rFTLAMKCJvD17eN",
  "key9": "4bEXuQGJgi7CmBGnUWCaft9wTQgy12zQBFuUoHjXn9qMJJY4zHtCDEtjvKjdNGxbbWZtRT8D7eD2ZmndGP4id1ub",
  "key10": "5GdR69i31pfT44aLK3GwxXiPdwSkJrx4bJNNiE1NPSoWDJm5t6qNGkMeDWuhD7Z5DDoqGtYmtR4w2JPTs8dWUBhp",
  "key11": "5hrjmgn6wRg61wZpbkRaYBsg1VZPbpd3nAJ5CTRJASPUqrozb31ASeFzMez1xZEsmApJfHVH4sJjrLxo6PAoDHUs",
  "key12": "n1zpJ1FrKhFGMVk1JtggE6UFcABCub2vgPusmdePDkbBTVk2cFqU5D3S3UvhjKoPat3RB4SFoKaRi55KnrUC2iV",
  "key13": "5noFWuxFZk4eizP7z6Vyx1R4RY8dCQxUDVovFqfDExxcDrfFJ8EC2pt1jkFz4PDJfoctqeuFaH5cuMJFzrKAMCh2",
  "key14": "2m3X4D7r79tcay8npjK3ytz5aSh13B9sEL4LpoJfRp2PDLYUswQ3YNZz1Y7XnMbs2wQHT9WnTty8F417uLScGqLN",
  "key15": "659kZs3rAFVoNhu66bnc3wnLHVYpPQddeXQqHq3A3qPn5Kx8BNmoNuJFdCPYXCFHaKTZBE5FEkvse3aJGcT5tvgF",
  "key16": "9hxKPRoGRAHB6iwGpNy1VDhj86stnSvM145tsqJwkiheGECbYcSjGYkj6gH6zzqyWRz8DZH4rNFvTwWm8mBax9w",
  "key17": "5trZgvZwV7EQ3NYWF9JQRfyEYB1jhCRaorSLwbLD5fz2HAQHpKd6AZB4zLDEiKdJjGgkHDLF3uGLNXtn7bNtaevH",
  "key18": "poppcJS9h8LhsmfUZvVeuYRctouHoovHkjNqHs8aC1GzLLwp1PJqeZe9TYiJvzzRpRZnGyWNTfWrfi6rb8PqdLW",
  "key19": "4CpYakniF9D7eWHM3XTHcayEFDYidvFjnrJ3YByBMviX5vh6uLmgnKKPnN88fnP3vwHFk4QRM9tKTuZabpuNKmAe",
  "key20": "3VRpPMrd8WxCwEwF6Ca25XNw7m8hs4mqzfXhdD9UGP2CNQwjryZxphKKV15DNiAxkUT8wDCnEP8N1gjLxDsSUyJ1",
  "key21": "vVSCD55VtkzcCp7hjTJXmTwrM3Hm3nLzu5qZkqAkGb7bSU6Dcwuq7cP4cctzdBsrEd7GwUAz5f68xMTJemk5x2C",
  "key22": "4Myx8pXCrQqfYQPYz4YzY7TU1w9exW7F8a69XRHwTtYGo1UfSCXHgUNsW4TiSrwwn2v477q4gnTDyiuQUsU9tnBa",
  "key23": "4KeJeAJpbVCphYQ7HJV6LRdS3PgYRDrNc5C91BjokvcDrrrGCciQLBTm5bKLdVDHo3efsxcAyipJpQfxzFcpdSun",
  "key24": "4c7GxcrjcPDJvn5cC8Hhi5zJxn2xMw5Zdp2tkA6kdLJiaP9qEPptvcxsrSvzM5QLWzKALTZriT4rmEKMagjvV16J",
  "key25": "2wJjRdq8nankTwCqjvomCTBtNSF3BHxZN8yRdt1pmMdLACNMha2kWza6MCtXkjCGfLPp9kvZ8cZyhqUrcrLVCm61",
  "key26": "4C7mAeGzWHmzFrUAZv6sygTxxtht9Hoo7X4vs84xQEkw7EqYu28Q5r43LGF476a52rx1HfqPFjKydmEZsMjP5TmV",
  "key27": "E1PxdgFKs6UzhxMe1gGaZcRrNhXjn9tZH9nbxGFsY2tYczvMhRxiB3jrnskvXNeUVV5NiWMEQE8Rj3KR5U1fayv",
  "key28": "2faMFTMsXWk1tMc1DAvFk2ZEzeRF1U22uoF7tS62Zk5XhbPwBr6o1NeMN4aYfHqRzHfctGePeBAA9PNjvxfcGvsz",
  "key29": "3sshXNTJupy4oiwz8DeaSXgSDBaHNM3epzStWAubaLhd2PHJoCRdymoLU8JiEKaT1cykHtHaWkekrF87MkbVxKLG",
  "key30": "P5gubEdXRaRS8Qp5dFjCySKk1s5Bd9RoZpkY5w4yQbM6zVTdwKFywXF8pSSgY9D79y15rmZJ9rdzSvrdVYT4ApQ",
  "key31": "L4RLVjLGQsy9i2K87gaeJRgtJQJmfHXXBQ7uiV1Y2S8zhCVbNXdy9NR2bm4Ry8n6xNKKCW88R7Hr4iTXxZUJs1t"
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
