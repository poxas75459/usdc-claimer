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
    "24GKCjhMp55zHnRV1uNwDu8pwi7CtJ8gV75fzwKrBZFvtgLRX26abwGjPyPtc3PjuL3mJQqcZ5gaV653wtbt5geH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QQdtFTp9Afp27pqimS4QnZ2EGgavxG9TNbdMD8qpgBi4CLXjDRUynTdcYjUZ45zYbZrBU7ngusPWXzfYm8EeEcL",
  "key1": "36XvNkuzw1cEzud7DR7sGVxvGzsVhPtAih99hbAfVESKKWJ3PFxhinFh4BHmrKpj7SHJmF3AodZrswPMrg9grWJm",
  "key2": "343y4r397KFsjR54wGvnjLFJnierD5hr89VFTczPbn1pZuSYLw15NWo8XYwyJfCjCssVUJBLAvZHRWSY2YH633VU",
  "key3": "5DmuSEqmhjcd3NooijkYZAY5mKmDHahTExM526dS6vLbDUcRYXBNcZ85nhvhPtj4jgY3oz5EUPNEgNPzPra9JUzm",
  "key4": "4EQxDVEWf1zCbLyanG5fMLArJBKqrsSVVZMxsX3T7XRCZ8UmTHtUiCy9PQWDCeueZrzsWrwGufks4Ac5pVuy6JgZ",
  "key5": "48yWbamSL9qrB26cro7qsDmRxxBuGr9bpumToF8EpVXkVcYzfPftRFyDzMkkA1KYqADWGHJfNL5isiWiMTvQSHXQ",
  "key6": "2BfKbeGE4bHEBKBJHa9GMTfy9px4PnBjbUvK3htjzJaf1hygXUhqyW2ZJ5QFw7A9V4gjXkKGx3U6cuj7rhspNoVT",
  "key7": "2VXa6MVrEw9sPADsBzPvXyadFGtyKD3KceHX19i62JVXCQ9eWpBVGg59kXEz5qGyBjaZSYVtxRfFGWBav4ALmdVR",
  "key8": "hsNYLJSPYg3QitKTmTM1ZwjCn7rZ2teoxitXFXYjESPTSpqwKBvrRX58Y9fezAfd6yoAATmQCxjmxvqpF7YznXB",
  "key9": "71JL2St4zweSTSXfTFT8Gn8AEq1fcMpHgS9r8sM3jn9ATWuMAEnV1UyDBhCCM8S7ZupD4TC6ZxLsJaBKLoVUDBn",
  "key10": "2uCqZuz44L5S1pHkEqXYwAos2xcfyrfoBYAmzYuyUBpXGJuBKqqbs6WhXrqGGt2GLcuVtcaa748Fqt5k8SEhX99q",
  "key11": "5wjB41o7RcDSq67a6jNJ65JtL2GpbMHXQiBPouFP78WUqVeqTUsN8onVdWJ9SW9HZr43cmvKnD4wkQS5JBBbGTPT",
  "key12": "5H6FuuDx42FZKUkLcFm9C3qpW9hrc3T2vAGf1fMpodNUuzkDK8hLjHH9H3Fy7vHrQjH22EZUag9nMQBYpQzviVgd",
  "key13": "4zecRWG5LHuCqwzDVGhH467WnqHE4JjfccLZrtAwNq1x2f6o9YcZ4U5R4KLHjaLgXwuNDPm4vpFVWZQBLhyeE9e4",
  "key14": "3bEnbrRqaw6DKGFe6H2oHFu7DkYtqM4zESvr5AbR2nYTRhW1hvmBHz9aeMhJwSxxkHWowrbDaCW9xAFBXxt76PG",
  "key15": "hoX6a71yDpCcBzKzEKAq5tnh79tcSbkpSSvjqc8DHKre2MeEUV5mpKS7QuTze7K5DZRgaHMLvbLfu29pAvfzLkZ",
  "key16": "5oX1nLpmfcDXvFrfipGVrcRo9xK8dMWnXDN4aGY2njjqqPbQcA98kKJAhXncDu1dwCbuUwCEj95RZ2K5fe7pLzxw",
  "key17": "VZqxKcnzmKNLARQbRkhwguAtgjfF3KDSALtDDwCkoWXZdXk2NcCSKHEeJEr1oA2VCdk6SaqtdAKEGzWd3rfHgWy",
  "key18": "hN3oVwK9j8fNJwAcGDU6CNB6DgKa6o2MaNYD4bhKY1ZvDbmMHwibatTj7ozQTzvwxtpjTKHuoCsQnaESeQRSKC4",
  "key19": "joNza8UDEtKmLtcWc8L4H7WLuMxcqNt5CaBMiJNbHkreUFEc38UXnM5W8j9b9XVUwL4PrP8ATiAMcvRsGFx5ePb",
  "key20": "4SkvXg126LwoA5wJRfK9WAU38xq6xmKKKXJWKs4y8UAPmkvvHKMQgc812vhq6vF6ttRxy7ZS8tUY82NdcKZ3dWih",
  "key21": "3ST8bUwGMksrT628DbCUvEtXzg5pj3dciyzbRVM5HonHgBade9YwGHv3HjvSyznyFtcE8SGBR7rT5skJJjijHiCZ",
  "key22": "48wqPBeCnE8XCnWQRZWcM5gV1Yyhqo5xsj6QPWdhv84txJfDTsGwCDmYGaBXvF2okKBGpTqngsnoYUNjrhVWj4Lv",
  "key23": "45W7BHGTuz36wpVHBbwoU9gWgkgkLEvWKsuv1rQC6dq3D3x8nYMbVs4SZd4iDsCcf9DMtUKV94Syev5R6UpeTMsh",
  "key24": "4AfhJRx41hVAEctaCGktDfyPXiiPRoB5anDR6V9bD2p4Us94vac6wGPgxxMVWAzLwGiWqTdzAJbmC3SV7psznCTR",
  "key25": "kDHAcb6vuNjipBiF416ChfrCfKa1qRX97DhNadncopiySwzNbt6YCeTQ6AVQMPg55c1gMFz2KNE1YxwXZZaRiVF",
  "key26": "2D23d71J7iJNPuCCzVvtWUEwrLYkD7D8VxECuMKEoFmp9qFcz9VhpZhhJFoDWCxZ7PvdhqytTSp7rN8NCnPCVmHW",
  "key27": "2Q98VvRVafUSTgH8Fe62xQDtfvabc85MYveo4EgXGXCsbHt88sVAMJmxAaEZWW7P3A8FonsD4bX7gLmCtoA2ufup",
  "key28": "414d1F3poeYDZfYbuSW71bcwFNpZ2prMnRNjpyuuqT8ZbGAauje38c4xpsqWCy9X1ujSRPgJfQyUNRNL2AxR1NBN",
  "key29": "2FRR9EcU17JpTzBVEyXtGugYiwej7ApmKHbyfPguSSMvx1c4WThXR981fqjKEHKumDDujsZ2nrE8vHfQG4Suca4Z",
  "key30": "3A4x8CD6b4mqxpA2Zmdu9gCbHWJA3BcUXgDTbRGnSuqsTcaCT9QUBK52C7AA9T3dbjkTLeX3ULN2xN9LdKbzde4e",
  "key31": "2LZkFFNBigouqUuN8ncQ6FVkxveiFjJENUivE59BBvMHnjwRLNi4dTfgHrzB22RTXuSCuy6NCGTnnhhz73hZiT4p",
  "key32": "4heC2DY8TLqPGuAxA9i14Y1TJQ1QcFYvwAY8y4uwn1RnaG7dZY5qM3WeZpK8SsH2QGAEFSTzdcrjcpWDXHwQu8as",
  "key33": "53h53LMQR3mvqydfZDVk97rWWk2YKzbRS28uM5jwHMvdK5yKUEHoiLe3s3kePXmbBKdZeuX8Z7mAbqKa8ShnXfWr",
  "key34": "2HPWcFdnEmXt8VA75Wa1ubjejQpX2iLmhBVW6HqC2agfEMpW4ampD7oUAbjjeouY1oe2ZNe3nGCrt7j13K6FnPTw",
  "key35": "jUrAg4EM35TaprnyVwKhKcNDk7wEgzAQ3QMqhbWTbefJn7zQnixJXchGoCUCpSt8E4otiCtKm8gN5KbbEKKNVBS",
  "key36": "5gGVJR2rhuooeyRa2kjc4DcDC17R9s94DxeW2geGHUK3qEdYC6KWjmDAZyXBFX35hCGKrYkN5CCx6TrTSe2ZbXcY",
  "key37": "39CZngQhhs1wRzJbbmEoaE5rgv5CxU2QRu5Ee2CJ9ageSygEHAwnpUAPPsCQUeKP26XstLwtdA5DQfED9mNvbnQ4",
  "key38": "3JZJ4vF6HjtgZtUXTNNi1Cm21v1HZF28TV8RBhYX95EbbPeTNf8bXP5dyBopRbujn9HZr2hVYWJtiHhJrw5T1431",
  "key39": "ZqHBWS7752fbA98ozcbuL8uk5CZryDMzTL4JUjVx6jA7pnrxyHxD6Ttkq4SBsfrPajsdbSFjmGVNTFudmUnnaCf",
  "key40": "4QfzmRciZjmxEwc7wG4KRCAeoacXFKuHHBqAn6pHiiNJM2tPEdW3PWpBH3QQVzuH1qTz9ew1ZTeUiu3QrhVuLiT6",
  "key41": "2NmmM5rLujgp4ks6FnuhQGDpg5VT8k7jtDdMFByttWiEksuMKZ4GezVPvybBH2tex94wdthFvufBR8bCC2s6WBpN",
  "key42": "bcVyeEbsmBrqbEDXAvZH8P9oDSETQn579LdurK2sx8XHBCq8r2tfmY54hcwixdCX3MLUebXxrjkawxctZibSVWF",
  "key43": "4vBC8QbS9CRDFZyTXpMJmdUb3oipZGJZUGHGh3edhDMDLPfZhkNtKubtvxxysrqmwTwGDD6u2Mmo6oduMoGCEMnz",
  "key44": "4KzJsevNDfCXSLkjvjMBJt4moZXk3pXn9vj42F6srkwfto9jG7cYwZL3bpP73QSwBs74qZ5EbFjRoQcg1SJwTzJH",
  "key45": "2tc7do6uVB97uTpJ2YRXk1raD5MCfPCRJTqcnkvEx69oPBfxZccn1VbyJspxm6wUQWvywj1Hvs6FqeE5PM6SLWCM"
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
