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
    "QYFmxHv6kqG6EHEuGoSA6NTMHh7b14ciRHYpfxrWckbVmi2qvdHmEAaFAReMjauvjiPi3Y9zg6hfdYtRKmmKbX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5reUJHjuKneeyP2MbxvB5UYEjr6c19WPZAYxnpg2kFupWxCqsoNmpAKgrPAiKeY2672P6NhxprpVdsPLDqSJbAQa",
  "key1": "3TrWxaiBSBCKPaF99hWiehFA4koUPCMoqmMJvXievfTFrD8L22SZwJazojGn8vQr4W7EF91m2PSRutPvfSvtYm9m",
  "key2": "491Rne1WGZ3X2KsvVUcZpThc2xgXKhF7roV9Co2HyxRREj6sP3iF2knwyjFQfMxfsnysCiV1dAM8P3KLbWASG7H1",
  "key3": "3DsHG5KCRigHr1BYWPQpLmWJo4gzZGuvZVp4WVGrPtQAxJd3u8moXPkcnP9JcCHSsg7mBaYgJBW1h58vAo7Dp25q",
  "key4": "3VfENR1xt5bEatjW9qXpkRAviwFo1CFYxHYFQXhuG46gsnUJCCYPJMVRHqp3RmxJDWr8nVSBwDrPBwYjor1SakX5",
  "key5": "7hhHVkS4Jzyy4Eaud44WggS6sHvbzGPiW3xBHj1BFz16CxcxMt7ueJqyAX13ZdbFJX9H7Xt27dRbT7LrN7uVeCu",
  "key6": "4DdTDfWiiGnGPkULt5CDnJr3tiASKHdqwMViR2K98YCuroE1diWQqtAWvUp9QRmYeJ5NB5mc7CK9ZYte7g4PWtBp",
  "key7": "HEKpCsN8w3pvU4kcfTUWxw6m6p8Nbo9t6LLmdoBKzdMp6Up5tksWAZzsWi7NfTurzrbAgkH2qVTuWH5TrNCjCLn",
  "key8": "4iquLoHzqEXhhYdLRnqbwGZPR9Ckau7QxbGnCaZcBrzCVLeAJFgvRzF1dmNR7YKJqaaBQNSEgjnCZPWaXJJcbkoi",
  "key9": "2iGeXC7suvcv5JXJ8MGuPjYjhySmz3JfhCkCVxmYqd7i1STK8M8Neg2AQshYPDozUjisTUNKUPesy7DyrwY7pPQk",
  "key10": "2dZxnEppMEoTU71MSruExRABn15GSQYCWvRb2z88ZCc5r5W5ogM5EsKAA1SjbNX2Fe4wkivNqgeJewzud2rzsK4N",
  "key11": "4FqHc77BbQGSJ4vvDtZEtjBLuBM8CBQpxWXGBCpoAwCodkLa6ZGeV3KcA8ikW5TAvws8yqEASWs9DToF4yrNmriE",
  "key12": "S1SwCfUEkHB8bC9ksH1AST6zNDVthYY6CQuaPrQmcdZ666iszV2bFwMWEijdLFjgXnKUHAXeGfPQz7fjNXCKJHN",
  "key13": "2xdnpSr3N5PBQ32FcQCHyD17cgghoTz6Q6ji4qZBLNbHcokcLgZFzctcVDiHhGDq26sRt6pZ1fzUudQsnnYksySs",
  "key14": "5312XZ6xd5od6exXz4Gors1uyoV9zXvHK8hsP8WYPGuZtxB351HzNKLkFVbCQD2EfHLDcEDGR56NSf5S81fVPrz6",
  "key15": "3gYcAM8Wzvks44Jn7Ev7YpDijuP8FQGNevNQ7GKkfynLbpih1y46j6pDWgVgCohpMcs5QMAA9DuPsDGJwwXPMtBV",
  "key16": "3MuctrumAZifJkKGT1oShwXam7wxW2s7HJc6cA8Hu5BrjcpKUPY813BBhmiNBpJaQ69kz33rxu8oosn8sdviDg3J",
  "key17": "5gM3MUgyGVT5zYLyBcmwe2hpwEQP3bf6AqQEpFUGXahhYYAEejXxUTfThnJ9zXisRMqFhpMfbGAoxELZK2vRAx3Z",
  "key18": "5opBJw8yHK1Lu6D3VC1UUdHtMokmEAgU6ayRNU9TjPRxQa7Yc5be6cJWGenFDHtaBMQ2Kj1sJrrgh7583WZBF4sA",
  "key19": "41C7Nm7XmV3qE6jVUh467qbMyJcyU7YWKdHQLSZvjuPHbE5j2phCVVagLFfeuTRf3A9RYQni2UpykHX7Q8KZjNdF",
  "key20": "cWr4wDXbWcHhFvaf3FnU5rFwA7ndKHcGHunbfF3QeFsaJDvvUwFL7zEweJv4VHwV4XCb2H3iZuZvUrzoRt9FxFb",
  "key21": "2AavR5jB2yy9zEE4htZVt9NMXDBCKZAUUZCRqFK3abtGMY19LgjTh9dXh7nmALgSWVnFNWVXHQdmSiqHDYLA1YPa",
  "key22": "64wLKmtS8KWRwNAwjEUuF8syPRCoufVyZQZoyZTybgJp1PJ5UdNRJiCbPYuyFiK5u9JCAtgt1vNWadusdmbRAHaB",
  "key23": "3Qqp7nkNTkW2pAogYxCARXFS9YbTnYpZHsTQSXYr7zrkx3iSsPc3dAerbNCNTMz3eNB77ywiTQog457GxFGUSLc",
  "key24": "h6tMs6TpKMVgqMPxBpoyFThhLUkJyVbhNov6QEu9XHMhGVqDeHKGtft9E8qb7MqNLkeBbCHPze6o34aKLDVqgpa",
  "key25": "4eVJtDXzGHfbjbEQXZWbtt1i6wPR3HcLEEhGMaFhfd6xMZ97KdXQ7ojqANWVE7dWFEAH1VDVanWTYXjNDATDCBGr",
  "key26": "448n56Ch7517ZKj1W6iHWxH9mD2oknkpjT7FJS8wGHDJxuKcbcG6vjM7ntML3NhB3mcqbB9q1xeZ9jTkPsUTnTLG",
  "key27": "4ZGMt8r3VF7KC9rXX2teKe823NjHCTKWauHtcaRV7Am2gZzDJxhnrnPe9bQKNpyzASfZZkTkMe2JACFqeBR9tKoM",
  "key28": "57VapQoUUgGYB3t5cBRaJXddFum5f4wjnoEDYv7cvK1qJ4TLpeD8epDUvYYYJqamgwjiS1ZqihKMpLdySsnx95na",
  "key29": "27Q1yqMWRA1h8MeDA82fDJGSsr6rJkGTNNmsfWAZu7ZUaYyZv3oD63LJSPpLfWjdTwQzMRarQUxJJPYzUkNVHVE2",
  "key30": "3JbofRayoGLxZ3KGPauVMHSMJA3KPfmt1HCgY3EcSRpZ2w2Y9czhGNKxxCxt7gvfJ7vKo8rLiZJBpDyHAi8vXM1M",
  "key31": "26WYjT8CoqdjutaGJ2HcRaPgKYCYXKFzVXLBehRvH25QxqXGmmPeApqGAcwJLcsJ4CCYa1FF5roWVNTVffo4uXEu",
  "key32": "5Hw49WsAV2kDiBVaVah8KWDiQwyj4WzxeTDZMmhE99CJitWYokuMu3i9huJTwn1EVFwCSc2NqF24BeRJ1FsdV5gD",
  "key33": "2J7MuEWw9eXmvYvxnQRiYKwsPYfEmWAvfKpdssob1exfyvsKd2QJr4MbbpeBwRLASKmEaHFaAB6ryrt7hdsGZD46",
  "key34": "3gc3C3hTY6Cz3mnaSkK6TiD168UxUxLnXddzRQQPSSfUxpmaZhQTeNRH4QSjhJ4r2Ps6PSa5N2ucn6mty9x7Rp1Y",
  "key35": "4q9HbLmBaix5ENhRwTSE2dbFsArKedyfZCviUfxRmW6jG7mjhfTTneyJ4kzgzpRE5dtavvcDqKp5oP7BK5cKhXYx",
  "key36": "5YQiWZQ52KSUix3XoZLnRGEYEgfkZezuAGoTxBkFVsotQrh5aXNW4EU7e95U6JwzYWrqCy6ieaUv13F9CsWFMNMb",
  "key37": "31k6e54r5eJ6EVyhzKLqL8mDG39H7FdASwKE9ToAwPzLUUuiNRsVe5BHyXd7y1DPHdaRkgGpaiV6xRCCo6TJAxYS",
  "key38": "2EGLRdLDGNwDuJsZCQnEWa7PC3xoQ73Kvof8K8SqmDzSxA8yfUsARtg8ZdoZTePwggtXsFPadhWGKJZSttyG8Knn",
  "key39": "4PLJmq8bcepyQ4cKZmpMEfzHN9AAphk93CkHUX65DeU65pvhLCGi5Hy3vsCK7j2tGrxvzwyfyPdNxWa8EzcRUA7A",
  "key40": "3GU3rLe1BGCu24PEoEuPe5jYJ8oYjdQB9pahKMoXy6pNftSgxeMpCPg4iT6fzoqGB97UXC7N65wMzaRfGQ6gW5S1",
  "key41": "3uqzjhbgsyx2MEK6mSLT3GQYXGAYFogAxDVzjWNmketNouW2o8cg9xGiCGWADD5in5oJhmu32KBEkLq83X2jAD8h",
  "key42": "4UmX5WZzYQ7YS5kZXpob4Pj8porqfa2SBHxhEmCj3tfpfdSteHPEDimDg639A92Ky1ohqqnTMdYCtDCBD3y7xftD",
  "key43": "4ZpbVS6JZg4bBaGfg6Y3W4Q6xSqZA6yF99tjPfyo2mojTTM474kKpMN5w1drbH3DU7fc123dfEyKKLZJXK75Tvwv",
  "key44": "52taAbz6Vi7QwYmQwUGdDm8UNCmV15NSjtZsXrHPEoS2QG9PUoN7YDFZp8bhBgiS5x8FzosSrR8w6MQA5qRmwwAE",
  "key45": "2ipTdYRudiw3kWc4B3bkDERij8PWoxch4yRzbyazwCqai2gCfkmGBYmmfXqHWNtvDmKUAWPhUPkrMz4GotTZw992",
  "key46": "32TpCorVQr5MUEqHYk5teTA6w2mLpjMj6nrQecWQGWUU3zgSgPxPMitP78LZR8sDH4N9EwZQET7xcki33RmN4azs",
  "key47": "25fvTrddmv6GNy6f7XVUseihhxt57BMSChWz4sfBZCHCFhdCTpUPAQH4Hf8cPAkA81GEmpirqCQujAWnVd3tWrWy"
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
