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
    "byB3mC2BheMym6NixbzwCresYcHvg8Bzmodwgvfpq25cFk6CQ4nMJPwRPg6mpt2AfzkXso4QXfq9guyUM55urJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "15RKGjewkfiNgn5NxraVmTUeim1mvV5rgxfRSNweHYthGS5zWsmYaFY9nDUM3Q7BbW4A356W64RHScVjDEoPdXG",
  "key1": "3rMcqUXWrFPfdB7p1ZrsfTEFMoMY29gN3RzxaAh6jFTEMS6cq9heYnFPn1DrvvWuvbUt41kJeEgry4Hze4JHxWhC",
  "key2": "2h2FnR4Uds6rbNntamVZVCWEJWomLoTzBbFM44BSonuRNwyqJvg4TGz9yAqASb45oDAdEhdeztFRihNfYXTfEGLQ",
  "key3": "ouHS2qU8VyzvzC944Rg5eNDxhfrcQLErYviqqMnG85eZDFdsryHdZd3bGBYNERFB3UVevFboHV83x29G38wFkP1",
  "key4": "3Whehm5DPoiGyPxP3tZto2TJXxZAf3K4h5p4nevykkSZkmHxQij5PWgP215JHqVuUhQYZNCke9MGAm2KgrGWWgf5",
  "key5": "ERSL7AGRRmwW7hMpSANEesUCWLV7At68JnkDpoaFosBVEoH6aQTzhtLxhvaEgx74VpXS9VJuHMLHscGZe3HaAmG",
  "key6": "RH6ewRTNcnCaseAHvBiwmhkuVLsfFGZjSbcryLmQE8zeW7moRjqkcYN4q2tx6wi7x6VJyepXKFnAAnAoAs1cQ1E",
  "key7": "3jrC5ZpZfNiK1i8DojuV5sijx5zAUb1r8sGsPnziWMGXVG5DcFxSvSvbUANymsrV2okXbcPDadQ4pkdD2W4tAqYK",
  "key8": "6eJM4dixW6hpEbTmrAfcq4vBnSDHhHUL9T32fZ3WWSCXwno8SP6E3XguA9rW18CtxkywbnfH3bbSAb9HumJ2VX9",
  "key9": "3vZ6kVmDfM4SRCKsnP4LhCj3UPC2zUWtzAxYgLg18hvH4N8nmoJynZBrNXR3fttCZLRFABdPYmxc91rHEm9zKVz3",
  "key10": "4yRTjMMTXA3N5yBQpdK79yim5gwiumJJRBYFUH5Y8CNvsnnSb7FoYZ2M5qKzT15m3EzFFsWNyWgGyABrUZ8YNreR",
  "key11": "232ANrQnUdEqWMyy45RdNj1bAAmMJ95e161H4roypfBfDEPAVKKve7Def1Jvm1dofgqctPGqPkeUSDou6DPDT1T5",
  "key12": "CnTPDeREzQJXXBER1SyQ9D5ppvrwbMe45HVBpsBXHqmUJGqEjmfaZ4EjzpHFmGvdmT2zxhsEr2EQ6ig65tcAt35",
  "key13": "43ssG98PdY4ZbNv4Ctotc3mUf8KiVKo5eeATVnbSL8LfgFnv5ZZJ1S7zpHntecWydby3F1MYyufSK2KeYbxNPsNM",
  "key14": "4BmAvXeNBH1CpJh9QvzFGPo5YBCs5dnYpPynTk4GBUGHNMML49R7gb21vq7E3ZiDRRxiQsT62DZ433cs33bcpsG8",
  "key15": "H3XhZs71Qh9t9DQLaPz2yRWg9pgGrkNBB31XyvwXBtdQw217xGrJ6aY1BzwD7KHPznQ6ECjXmTwu4T6f7iGu9Pe",
  "key16": "3ZAX8JBNqP4Mo2oJSG273xSRuqJouhe1KqfJsV83PQrioWYSBWQgjp2JzRjrABQjbx2maRaU6Jxkk6eYtEAAxDCd",
  "key17": "4LCPn9eab1sNbYCYXxCrM5Nz32J25ZUxonY9TmBWpShSapMrfAN3LnVUNtumSobuPDwTvpSeGxxScSYMN1Rq6QJ3",
  "key18": "3esYFSHbP57GLudnTTvT7H24QqZHQQuPzRQcdmrXgcXR3wWUjpUNWX6BHmCZ7dhnH1T388aGHgmanFkdVvqgHzPi",
  "key19": "3kC18FTmkANpbzaTLQt9F63meiRPdVGsmi8pdEPbAF5VDs6f9bgNAtsf55WQRZSRKrCoCuR51KpLjFL47r6t5x4w",
  "key20": "UnM9McbGm5YWgKy4jxtcJy56Bw4AFmxGLYfRZsha8kAKCgn4EbUPjdcnRZWFTLFHWvNW3UcQjuUWQJ3fVHnZL9n",
  "key21": "4nGeEKihFAsFWHH5rMJVz8fLMPpdnbqLPEgp7M4xHRxHY5vK9fcDzP7FBM2X9eezT6cP4d7EBNzLsG2SygS7RkB9",
  "key22": "3HC1DniRTj1phkykUxRaFi7ndAQUBQujPh4EdBhacv3qYW1SJquF95biJ9tDtgSmpuvFVKVtotPaem7sbXMwZ1Qu",
  "key23": "5zWsEoZ9FQDozB33BccWNDuTAE8WwEf6d61QdLNnXr8xrg1RteAUkZLxdxSTfnYXSeeffeE1cXiEuvxvx5hWs7VX",
  "key24": "5MkrH3Saw8Ek8w48KvhUcLHjkdDTTK1E6de4omPiGrp6HNBYZkpGt4YPJwwQAHCt2qY1nuMdWkWo465M98EetwP9",
  "key25": "39MQWDNeveB4eYM5BhFGeo5F27pTHCrS4qxHz4sx693cVT2kLuSEL9MeJctCEoEnUve3YTZbtScUPwpkP8CkMEQM",
  "key26": "4pzUuTrDfMNp1gthQHEAjL2QscLXrZSYULEWqfQk15VZF22qaRXRSq7pkY3zLaoRrue5cCNsMASszCGMwW7ZMwm4",
  "key27": "5znCYNk5wCM5UZ2G9RsEURGxQ6bVEz2dXm3DcExjc1gQdoCZpPLrP3QnKFVJUYR1F9No4suJgmV7WbqRWkVx1brm",
  "key28": "1SYpL5y2peZ2bmwMied3KX5fH5RHx485auVKvbUerr5rbmXLHnUeRnFrDTsXjCty29kdywRyfpJ2ohrxhP1GxQe",
  "key29": "2HACooKtZaFR7xHCcctNDZqQ848XCEUeyPVebvs4wix8CrDzfscwkeAbzifgBwhEnufa6JntCWBAxVZE6KTu9Y2c",
  "key30": "29YWLXeJDBpZN3LAqC9dm8f496p9eYVz1MiEJxa2W79bPouaSMmZxvKF4Q2xP3YBxTadsUwjTFVxode72c2NEk1o",
  "key31": "5cgUxVQZMmU6MUSS6Rd7cfeFdUvCWNaP4UQcyfdZMZPhDFHyQsYtBuCNBSFjoUCP3MU7qds4dqYH3RGbmjaxEAmu",
  "key32": "iBAbDR52uiisYUPPKy9Axyfubv2oXUjPgeiCPa5HiesZNiBbhyG1m3BjGo1vTarZcBDzdJALbzw9dnzKGpTBQTV",
  "key33": "8wUc442ijDGXauKnqomtGaCi2BTPozTjfWijtiiCUFr1ehrnpP1VWTMAFGhLRTVZ5VFzvEkTmJPVzJ4xoStA8qa",
  "key34": "4mnL1VbrwmsWCwJQgKcQKNAGGm2XHr6hCjeWvfodjL4EpT6GvevPiEVKmxoam5ZmpWjSxL5e7xgRhkbnkxg6942v",
  "key35": "3g3rCLzSDknL6fcYa71VQ1ZjwBX3eVpvfqFjbPV1fzGZS6Dz4UDNXNKSikh3XvtFkwDCjMgPbe93v28JrAwMiPCd",
  "key36": "3wakM4kmiZ1M23aWMDdxuTtDJazrdCfHB75MG3gKwJhKzWSDCn428VBPMVjxsTu5WWV8biUC54q16iZF8iB65eB2",
  "key37": "38i6sJZFjUMKtueiQrBD6VCQpgYYREAi4KYAK4P1gfUcDbVKdkXSGRsehRS2vDZab6pFv8gmiJbVXJjDGjNrz9oz",
  "key38": "2DyFEXrEJfZkJxTu2tMixjKQbm69p6RKzuGNRHeoeU1BpB8JvXkH4cMttskgUD5Ad4Ki3tFqKwbUyrgvQLYnxhyq"
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
