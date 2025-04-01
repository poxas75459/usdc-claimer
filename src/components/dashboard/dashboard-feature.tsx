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
    "XK3S1YY4xYW3JzzRVjFRuAge9LYuKWVZreu3Mq2JxpBpBj8dekJQjudY8shqMtTU3bGt2ZNmbtjXEBCCpgXJmhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rArbeNK9JgrzunBksJGcVodKp5v5UbQE9RijXLnsxGx3zxHWCiFwJ1E5TFBi84VCVrvHTtNPmEZsGoCcRPodFuh",
  "key1": "49aoy93SLt6uA6uCV9jAghLVnRZv8BSjuF7UtkDLRYfwNDZi5nNhkRr3tpz2Yj31VR424BCGsDPQyGyz1GsH6krB",
  "key2": "4NkF7DB8Gd5oDqPQZdNSP5zMbiMidGKCkW9HAoTxZ2KD2YPGrQSJZLPJDgzMkT5UDgrgN3h77YaNWpCxzmotPxue",
  "key3": "3kmCGXo4ydbR8oi3vS7G3dtaAbqtarUXUTvvL9uS6kkW5D7VYjiq6L5YFYfgP5s4YsSV5mGxrNK1nDokcsQ45wBK",
  "key4": "4L2KNzrtqPVUpQfAyrM7WCoDpSL2fadmSxWQToF2aTVRLuE1ntNT1fBB4MbuLgi1GoijNYyCAPKQ7inDZgi89mHp",
  "key5": "5e9sUw8EkrKubJaYcytcbJwNV5heHCDm2mfxZdSQhNjzoatZWAyh943NsB3P59aeiKFugAEr6ciTeVTEv3gg6gf4",
  "key6": "5MGP7pTVKt9gXSJWVkuz8V7nCC2ya9sWdLJoNgc3hJFopj1yw5yd7qrhaRH239oAF8JDMq91B7fbQg5jRaRKSqTH",
  "key7": "3qzU3PDZ9YBj7ZUfb6WPwCBCBs7A9TFGHSbLEdncpqu64evmYLsCxfoJaQQGEvrcL6c126y3u44dAnaZZyNVbF5D",
  "key8": "XSuskKJTfrEFZuyseqzUqxwa3otNa144DNwMMWKJ54Zp8ponP1qHXDYCsKLUdSoZPnX2aLzxmP4xnQmBeRpgmYj",
  "key9": "K7Z3KrQK6BpWe58riv5ftxquv8Hue9JraBA67ccv9vtakNjpYvaTCN6v6YCgDXUpCj98mDXWQfDALsXPsK5GPyU",
  "key10": "5mb1DU3SAAewhYqwWUpwwtyFbjk4PTUB8np8wjmP2WczaGKWJNuVYPydVpDxxZinGTHpnuhQF5aPj3NPDxyR4vd6",
  "key11": "2asS3JxVEqkmdeXnugz69zdM2FPjro9hwXvvnWR8A1XBE5WgZP2pJ3qp9HXf9imkaERGrHozgQqmpQVG1AcMwiz",
  "key12": "2tdN5Hd7SWbFbVoFMMfvrw3ctXrbzM6d2uuD7wejTHR6CkJ4o5kvy5NqeAoDr2Kuk7j1FJ3KzoCKin5X26zzL5ob",
  "key13": "3TenthUL2TA31oV82xsW1cUWYknDW7boxNb6vrbFqThiZWmephATWFHxyfMgc2kYFzXRywz5V1zt4RwFoyLZZoSB",
  "key14": "5bwmZmgbApaS4QgtatuTsCoWExfDdTRYyNi33wLGrAKw29Y95yiG23vyGk4R3zFk3nPzEqu8AgsHTSvv57tbSD21",
  "key15": "4XvFWyGibSSyUqv6vT3XPA4i6twyTfiX6C9cdW8S6d1PzV6H4s9Un7JLnqtuD37qdrEoagGJLD4ZVvhhgyjbiZiD",
  "key16": "RsFP9oKd2wtaFdHi9FseBSRkCvVw7XWaW5mzZ1AA7mKd47cSs81iN1itVBshKQVSkEAzf9fhcZq4D3py2XDu3wL",
  "key17": "2doiZztVNN2e9NrtDq9hV8iyS5spgQAeD5e37wx3nV4A1fSLWrnZTMTL2LJyEacJXqbynGXCVmXYdWM2CirpVXgn",
  "key18": "vxqji8butnEshprye7dk2CNyGJwr5FUHKXVkFcVG23s4PEctYMHg1UB9KtHkfyvgYWbn3RSMcyuPcmUQ7xQwesq",
  "key19": "mJmkkRG4KVzmj6VCFGeoHZTe3b8vXiniGWSa7Eb4HCMsjqrLGMm8P4AAUjQQzCNk6RpW7qr85wuzdqzPKYL9dYc",
  "key20": "2xGe7E32yBvVh4TqBztBBksZkDWKwYPpgt2sYBeZ2WuLJcrfbpJZ2XevTDoRvqRSanjtVDUrQx5EjeNQ5oYdMsFE",
  "key21": "45LyrfaHHCHySHGXwiFJw5JrPvkU2Q5vRXBWPTTYa1vPtHs1jo41QafUGPXLbfpewqd7q58kEddNyFcaHySt47rQ",
  "key22": "4NX5VVHcgKiyrZCz5CwjayXvGuEoJtbqiagBfBZpeAHUDLkFAQLQoPMQGQUSPKhCrjdTdTQkDaJf4EeLYacXjDit",
  "key23": "5cq8BKGesq68zDHHJ2bcmDfU3Uo1Uv9yX94dXXoY6Zde6m6yUyFynbcRRA8NTHJhhtKNcKUmrX23xVuZZRgdbSbH",
  "key24": "5Jb2U6K3MspC83rE2JuxKTTNUqa32KJx3A19eyrNj7GyWPrc8VAKSTCpHwVoK8QENcbuejUxjQPCv85iLWxRHJ5c",
  "key25": "4NYBxrSAobYR7MZgsmTeW3d4L8uPHHSbsjhRFPMEmM1wPqnxcyjDHNexZ2T6fzik9YYZmsH1cdkwS8s4ZQFoF5EF",
  "key26": "jFgrWnYeYu3qdnt5EitJBPxkaSG2VHrBmSyRnTtRnMoDVGspYNkhovknx3RRWfJLrmrX7fmsrW89swUBHqQD1mJ",
  "key27": "fC8VV5NwYyKyyzXnhENjygMiNH9zsMwv1GMVzZgKTRWhgwq7zTuacyjDbs7f6DeiCCXcd6k8ZM4KV5gfA29Pxg4"
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
