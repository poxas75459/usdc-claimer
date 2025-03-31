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
    "4D3UQjJ8dJcnVenyiNyryQJ8jReyV3TvKigyVXoAeRWcJFqTgqTmHFHtwSti4Gkn6dQdvb3obBN7Vtr1ZTxDwUqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MYuGjPGoCSHSkw6LSxWHmxbDw6A2ChJNdAom6xpsp3yFJmjDkuEbKLXHT4fYrbJUdTJgjbzeLovrGz424P2TWsW",
  "key1": "cTRwLnzGNxCBiC8B5sTLbdKwhTALetJcKRuFUYRvnm3MkEW5VrhpEfGCbtzic3Ewy2aGuwGsjBc4QhSn1wC8f9i",
  "key2": "5NMtZMSJANxLaff3uLEgZhQxk9ANG62PhhwBym8dxGG2CFAX2ig2tnEDzQSPvjjSBYm67wKB26ZTWgYNAUQnBxhM",
  "key3": "4R7XszvNqagwQhA71bfAi1Hb66jEKPMDT9hRbWbnqq2w2uufXiLez8JgxaQNvAAKD2UUzkTCQ9tW26i3QsxcaLUF",
  "key4": "58a4bRxVkqfZfd7uZNxWeaK2NY6UCYdAABQKzib5EyYon2xWK61CLFJz8cHndHsrsfQwwKYpRsbmxkKA1YgPV4Nw",
  "key5": "5o33oGnJahRMFKvEEAA4LZXdpjGt9GYAckMyv4h4uMh9PzTXMdJkxLjHrotPRYYEmh58a63Ew1RiE3ZQPcM2q8f",
  "key6": "D3BvFYRt2QrG2aBfRjcoTz5yYhCt56V2sFMhhrQaYtnkUSufCApu7SJetfBt5eT6EESodemtiPQ3uKr49HsWau1",
  "key7": "4PZqtfTaFq3cHBMogym5xRUs3hxsZgXYy736YQW5adMoY9Zmck241SvqnGAmtM2WCnvKMWxDHwEpbTVEHiGN9Hsx",
  "key8": "4f2wrhryVnrtdJDmChhLcQHUnRhbVmPdW1aripX4vHQxeT6ANeZNg5WQryEzzRuqu1MTD7a2E2Z2wM511sGmQzdT",
  "key9": "44DarL5a2AMi2MFGepPq4coUn1pvrd9c51KwQWnpZSDJiTZmiUYAYumycVLHJfbyXY2qstfW6YB2TBzV9N1wB4JA",
  "key10": "4rqSQbG3wA6GrnS7B62QZmvCWocpy6L3QGQaDMLgUFdiHFbzccrueJGCdpndUyCCWFcJ2wvhTKuNCWL3DnY3juXE",
  "key11": "5FGzZZiLqkCUDipqVoKeS7cfh4feZxr2awnFZf8k6iCmMFEADvWd2r4PqDj5LRPT7nSvMjLQYUhKFzN8bA1dqAGW",
  "key12": "5rozaVp1JHAcW2FmsdSF9wGrkjvKiN9JoyKjutKUfcf6AMrxYAG2U8rRaZdFeRX9ERc3NjMbEYQTdTW8iqdE5Dv1",
  "key13": "5BF9xAt1WiQ2jfboMBURN7pmFxHLLJzhqjMnaHe9YLMaU9kRQVH8znG35rDbkaJPweMFH8k9zx3AbMyFJEs4pV8w",
  "key14": "4pUVhduUdj5eHVawv5kipThcLx4Pr8aRpa7DvWwYCxVgkRFoX6QXyBU5XEaHkxBgH668M7X2Bhz4T4RDomZFNJfc",
  "key15": "NcKztjzWdsy7yB3Wcy5iJHHJPJsGxXt13u1HaJVAobdVUimHKUYXmJaVCPioaPCvW6jXfc8hPbhmF9j2cM76GE1",
  "key16": "643nqYbM3tCNdoW6xBYguAwcvtXNGfMKq4Qm9CCxgfcYGwto9VZittEdbfZ72jBTqiYxBPc8nb3yo7zSwNNQ95S3",
  "key17": "5AAk5FB2vfMkiqvHJbf4V7LAM4nvwqvM7SRUr3UUeATqHKhQUXaMB1D72F7FGRNjAPBKgRmVoQYCbwHZnk7rsn9k",
  "key18": "455aZf2Njhzx2AFcwEVuWTBqhKVRAPizMK7H1XjmeJb4TaLDhmMuX6msMFTjSTFY4GuwKJiV36VgHyhU3ck5jByv",
  "key19": "25UacNJ6CZBQsGMZbqirmgJ8CBHdmJt7RdDa4HbpbP3Rb9E7FyHHYP2h7k43MyTniRAstoyWabn6FTLLTASpeQb8",
  "key20": "4XAdYr9Tta5rpMpZGK8FvZxAbEk6ry3TPjY4nueLtxDUV4Bpf9dGUvczoXeD9QiB5Asmc1GJ6earS7rEhHgpLLLz",
  "key21": "5Gg9jmK2scbhDNswgcWQuPTnaaxvZBhJ12NDBTBE3GYQQP7xpMssQScS8duuwuzQK8eetwU58fAqKiamTpjf3wQX",
  "key22": "Uuw7GQfZj7FEzywuwcBAzM7EMk4CG2uwXJBcnuFAwB2WrZMkvCELLLAkpyWKbTWErfpzyBw9T2fbxCY7xcNMBcZ",
  "key23": "3LxtAqL9KMyM1QsdZ7Awya5LXLfq5FbrgzhCTSSkVUE9Zp9MyfCpKCtmdyog3i4Ny7YQc6bbPEeaDasTqR1yusrP",
  "key24": "4BFtQmt1XGAMdbabFduReNxd6yzCU2djRt1oUTcqpF8Adp2UuzbGzkDjpf9N3JHPfxpu6RsvnU4VFKXj3yZfESre",
  "key25": "5pccrh9HALJpXJ6TfM25B1F2wAU3biYwFK6d3QvALpmec7EwbqbSJeBcXEcVwk5JGMii76VSgQYSBXvrjmrd7DUp",
  "key26": "41fcfuteCfsygRDYic643yywhCvMvfb62uTYGbxFuyKswEmf1wqz9B6qr69LPNT4EsurRxNn9ikBWKpRnLH7KqBd",
  "key27": "g4Q833fZnKeqWky2ckFVRzoyMKHJoJA5tE3Sh7DfCP1a6McS2g5YAU3bJaFVBiSWcq77mTxq4HqrNUuTwVPY26D",
  "key28": "qjTyooxTNUNv3GqPVVL6iZ4oEeP7NAuVbKS5irqRUntD3bKLcrKoBV3K3EE9Ri8u3aUHJJDSRDddpLoNTB1AWQV",
  "key29": "2zKxstR25ynk71W3uffDMaUraztwQ5Zv9evBfwBuF6skmr2SzbWUBYkYF9kp9FGSenHermge8ju2ka3VkAU1pzt",
  "key30": "dcW3UhMnskLb9Lo759DwVX3h8BTrfExC6HRxLVp3HUfA1zvPMjvsSicnLurvAC3jbwfp64s8FBr3L533sLQmwsx",
  "key31": "GnhCdkWAoTutpyuDpAXWsv2zH1Np3oPBKEhhH8dfvcULCvb9hkiLaGZsWcLKPBynU2pv3npDSnWRJvL9AwsuyUh",
  "key32": "2UXkGdP1TevPz5EobVsQBD7JCnauB64jy1McWmQy7jwdKxMuBZc41cefh61iGxD6U21YoPcAASWLywPfvzDWqoXt",
  "key33": "4SYE1wWjpMKJ1Lh8BYXHA75GzEhC4Qttq64xMtF8AHzGkLv2aqHVxhX97MGLmLL73KYq68ijjiB2pQwnkye5UsEp",
  "key34": "3vErv215CkYVG8uRSd8kP6PdVNFWcEp8sR2fxrJ9GU4X5b5z19xcsxPjF7xnoHNXzNmRHHfc5FkoFcgjD5Pf5H2j"
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
