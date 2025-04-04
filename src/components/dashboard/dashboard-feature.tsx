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
    "2ooQtuHE47GiDDrsJwmfQAyiRqtLGWc6kQBNi2JyDPtXYDKgHeosJAsY756rNDNkm2nmTNLcrve6digvTRq2yThG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExCYM7XAoXPGLKb4f9U2kZFEfHCnDjfccLjjkDwvNA6tGDYFfAbtgb3uACuNkdEU1ReTFBEttS967M7Lep4j2jm",
  "key1": "4tpm3nc7mpSHK2vAbsyRM7iyTic78BFvKE9CqjRkEtZGY3pPK6kPQqc95TW9X7HbpoCyTD3zxttBs33EkwP4yScv",
  "key2": "4Ur3QXpDyPBTPZ66aHiLnBRWz4gVr9AK1kgVm64WJ5SgaDT8B1qQXhESGzSWGPXptxoNboEYmRkS3denuFRGfzB8",
  "key3": "4eQ49NUCEFbt6WTFdunUPSocrHFPbAsb5cfTYVjvXA31iFFxei69wms8hZTg51B7WZ6PBZS3st68HkAzGtZKip7r",
  "key4": "5FEcU3cpM2F63gwArWCkqh95Ftq6N4RUYSnzvfuaHfL7nrvbLoNrmM73yZK3cDGRJ2k2RFDhYSY8qDqmNxctPULm",
  "key5": "cXH9gSPEgdV9sUZ7dSkZjL7CkpJcZ5JU6FerG3GvHdDgMaCarCrsnsFiPJAtjvE95HT6biZ5KyDBmkD9MFoSNms",
  "key6": "4oGDDiAPtG24ba5WmwNdmBHaXYiwuAm4bxnwQTWVxJJ3TxxKDK9Xc1BxpYWzAVgPidpoVgAXL5BAMhgAPSAvj5ET",
  "key7": "4wmHCMhNkGe22xGcwxgNmdPAKXK6biVWM7p9HuuhTELqQAkTVak4tXVDNeiNJjitE7yAeC6YBfRFjZbfwN1AoB2J",
  "key8": "2pYrB9eWGwQ5Umc4NHeh9s3vkNT5xMjZ9xjPrfH1rRpRoDpLY2xCxXDqgfx3oedJfyMpnPrzLRmdHESoBVtfRpiA",
  "key9": "TPMEGc3KhntvuyejeUhTvK9MjMpWkPPKyhGKReWai2QrEtoWtWc9Hsj5yBt31gQSLhZ3Fc9VJ9hcZ68E6joN4mM",
  "key10": "4QnAW35GdtUTGByLRieNTas7eX7Ze5QYV7CPmgCW4P4yEXZS5rWkmj3CD7iLquZNiEGjHqpvpccmVYeswX5nvpfZ",
  "key11": "3rxarBKTm5BaJdVqDELTBXUSjePD7gPF5gahkwYuU2Jm8w1GrMx5mAV3h9iVQgUYL5krTYAkkXHZDdMqCJRfgRtL",
  "key12": "aSSVjsz8wwWTMSAGLoQoQ2Bq3uDRuVo7oJRGMMCyrJmWjKaPGrbnPvwNgwQtGuUDXGV5wEJCN2vP7SX35kE8EdP",
  "key13": "2o4n6vsjvyUhzb1pVk4H4wwQ2FXGWwVZXztjcXWwLH9ZXLaMWR1c14gERV5b7HuLKEveM6PmkVLVLjSSpdqsiqdT",
  "key14": "dSF8ZUe2jw2VLgi7UyqM9x8B61n4kTUV5MTJ64wf7uNLwzyG3AV9ooCZuHCbgZM3zg7FRY2f2iHGuQJcUsark5H",
  "key15": "9MzXQHGKMWRFNymGnUdTSdiXpa2ekeH7aWR9MsDdkNNtc4X68NAU2zMoeYzKxiMfjTX2rCPHLEiFuajfSJpDvue",
  "key16": "UPwomsCocNf7fxgsbZUHiR8xrdov3T7jtQpTGEGSFqYut7HvCdGwuF1Mhc65vHBm8QVYG3aEtV1ymUCNphke3zC",
  "key17": "4djMzgMvHJ4vjhSCgaP8RiCdktWF8K2bNuA5QtBdLWmMvBayaoyeoGjPuryV8NTUYjNy7gUyvxaKLmR5EN6Hm2nv",
  "key18": "3Taq9CwBHNHyoE9SqbjFDrbhaSmuL6vGgLrNgKnthAwPCS6bw7zQsgFXiXN7NwWAGN457eF43FUxZNRw91pXpNje",
  "key19": "2jaJFbWxWPSdUCjJaiCaiVLe72Gqj4aJBiLEVXiPepSuYmRbi1Qm9fczeqgdVwf7ZVUWMGgt8F6A9ym6bXSoJbCw",
  "key20": "381XQcHsXigvXqQxDzXkwboraFfpcxfCWTvMekbjQ4e2fWnfsS8iGAZErmL3NpaxwYzoYoen3YBwFVS65YeZWTW3",
  "key21": "4SZtS7k1jaLDej3jWSdR6X4siEGPk2bvtw5P9Pf4fkDPn2kJEm4cPQfHhMDBcPJjF7x63y9UsunbhaCjXh4bPmrP",
  "key22": "2SdRmn4dWdUXmZEUnodPSpN268RqirtiUB5JUW5XbgZr67EzYn4f1ve5JV7ySTKnppKTXbRRWBpBvZRJmgkFLUws",
  "key23": "5MCUmK3jAdFsQJyWfR7VJ9Dq8CmMmDS39zVYvUyytmnQnPzFPrakcVsHwVCEMWW8R7qwZ8chK5t8v3Wrq5fe1Zk",
  "key24": "2UZyb2VW4cxQpuqcwZ6V9egXkLijsp28JLXBvgFPgyvLNn7Xk9YedKmLGZGfE8cWSkgDzxyJh5sQkGzrhokfYEa3",
  "key25": "49zrMB7edojGPPmFzhisane3U4bkWMEu8wHcUCwzMtAk5zYtRyqFNgppzEDaSpN5N41Kh9e68Ta4iVKJZpaAAQoV",
  "key26": "2PQcpTrWwS1fLBE6DBi7Ct4WYaPMcpPYQsm3WJMaJBzXGeSEkm6oGqSL1bEgR61EXK64CNKfzRwvU5QhYrC52dWn",
  "key27": "zRnD2i4WZ4yvPo4fqmDRLJN5VJrxNHuqDyZfxLzbqvpHFiiosQYh4bWywC14cZT3x6jg4aGMPwpx6EQGhikvNCD",
  "key28": "4fLAh1M5BrsBisAD6r1S9Vnuk3KPM4vwQDveZgDR825NsrL6vLUJi1zN6ewKxvxWztA4vCiGDCKFLXJy89fWNVz4",
  "key29": "2mHNMUDkFLucZeMrxUhgrVYFqcLeA6YfkwPtXRmSBHK7B4xJVCTkrXiMG4cFQfWFyTiwMMQMWfxrW1LbGoxqKMhp",
  "key30": "47zA7tDGZWeVsRczt7rJWJkX45kdMxEbHCwdt2sVcpHYAoT9RwBkFMMyxT2BNrwAuyDFimX5u96efGMfVw5Lfswp",
  "key31": "3ewFgaeaKLeehr7q3Zr1Um62giLK4RqiaWqAqJ9vnrVE3PJayDqsef1Wg92Cg6R3k6bBMVLBFX23SYquACQZdf7b",
  "key32": "67naGki5vRrqFo8rHjHdV3nTjfpWkHyqxGeDRMSLJXgQp595jMaBnoecZG3ponp6XetmU4DrFpsrsrjLQ9cbuyct",
  "key33": "5aqGUf8x8f5BoMXQympTGLD8CJuvXh4Udjc8LNmkXZ9btex1u5QfsS6G6128LzHoqV32GA73r4sgA1zeEDU9h5Mr",
  "key34": "4Q6hTq6L4f9v7z5gZJ1iTq52S9hsgYYh79ZY8mbCTgfa5LiEgRsJaRjra6o2AoQHtMidRP6tKh3nR3KzscoNzArZ",
  "key35": "2NKQA2gg5udT6gLZZWdBrT18sQ2r3WAkNdVy7wJXFXXy2KoFza6hNMawAh38aFjGywXgDrirDSqcDYKyZmdbvbHi",
  "key36": "ArYYiAZue2TPWYodSDPcqyfyhHKW7WuVy3Rznrpf96qUjFDSNGoqbaVxHdV92m1BgRnJjVnuYgg35m1zGgHT2aZ",
  "key37": "3F3bohzb1gNtmwNYJD23hjnoi2VVrivSEQtvgAKBzPoqcuEvEwNraYeownbDvLMNxtD38eLovCsEfs51R75C1skh",
  "key38": "125upFTNJUDBUuLTUCUwuTsWQs2TcHFMnKtwgpuAnhGwdM9gYPpGeZEARZcXRx9vCHJPnoShS8s4ybjD8dQarWrQ",
  "key39": "3Bnx3gs9HdEpkaSp9MNZ7k4orjdmBjfbXby1A2ZSgSfNBbDbQkZR4BP9uNoSMqfQ7w2rPxcUiwG2YusLPTvKY2nV",
  "key40": "31UTzvvWoLV1HiLJ7CsXiKv8ASoLVBA8SQWHTTpeZSyiFfDBYjMnxdphJiag2Rmkftv78oANKgrpWskwPwUpLPfn"
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
