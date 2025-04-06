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
    "28oZK85QQBqwpPPMtYLxwKoxENcEMknUPoPg3vnGRVi2D5FApthS1mqDtwsRjCiDqFHHW4C5oNSaWxVVaKxSZ1vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Aa22EFF1rn7pqQQ3ViiYffJ8rAooHLo6fYx8mM6ZfGuG1bpdAPUk9YCqg531Qh3bmLrB9pFwj1ZEbt66auNX6R",
  "key1": "5rE1oUR2KRgz2ow7dqahbhpqmvdYhNzr2nU3TeMFf3gfT4uMX1cSoc9h1GVjoQhYkjgFAFw5mkbwZunGK6aPLZG1",
  "key2": "2CZwD5TZa3RLpx6r58HufBnXuSPuoCamHQfb8m5vcSG2BN8PE4CNKL5RScQM4o9C12WyN5ywG9j19SQbk8UHtGWx",
  "key3": "3xdhNKtDFR46WA6T1zxWAPeNismKd5Ru148XGuUgtX8fRN1ojMb7vvM2M1Fh34dfAvJzcYdgBfKkY8opKYdYKWJZ",
  "key4": "43zoTLYRvE6JsjnwepRGtB3aN7oktfjxxMD55i3SLyjcxZ8EKgKHSxQjBZABKGy2Qcbz62FwMXdB4QTKvEPE7v84",
  "key5": "5TRt3Mk1eQzLLBGGvcPJV1s4kjNijMFhKr33fuYL73FG2hMRN5q49DVuyVAGo4GyJwaRVULZJP8xf1RiKEgMjq9k",
  "key6": "1W8Z2SbewayZh8QnbokU1CCSzjzj6gxPCjncc2NcvhEvUnxVrbh7nysjkiHwZ9Pp34sxcfsddgAkrp6fZfZMWvn",
  "key7": "2p3DBzQVbDLSmVCGVttNatw82U8CDjQPmUfEYFhRXujcmzqf2p3LzKpuKs1Yb1r7UPoEqpuqm6m154f1MwpfgXHG",
  "key8": "51ExrxwY62KSMbfMrU2UVBhbhvCG8o5qzMxKQiNkyPkyDwKiJqHU1AeSZqVFxFUTgUfU5W6KsDReaQoBPA5JRyVH",
  "key9": "2To3kQdFuPgvNDwWC7u3AvgotpKLn7Uq54q5Xt2p3EPFWwvWVg4W6gB7TwWv2R5ZvkBCyKyKwztMF6tGHxNLFtc3",
  "key10": "jce9iPfvUx4VnNqhXSP7ZM8nobACrrUbKTL7iYYt8XJMAxz4t837Pb7CHheSGSiCkbMHAuyJcGTw9ybiWEvHEsH",
  "key11": "3dBuu9YjRHCh7FwukxBp2auFmt4p1fHFKgUtju5qF1WsSq8qkzY1KJror1o5s5HNFXvHaW3xBLLBa1Sph6X4dVbe",
  "key12": "4bcbYxcaAUdBs3qFnVvf2BjdBTPVCCW7vbt1bSdGkyohuLwoPbfiMM8Whk33ArwQD3ymR2uJ6YQAbtPygcvQ1yKb",
  "key13": "5LvrfiSTaYSzziSi87aDrnpXDb4qtSoykt7cz6octuSjcB8wJTQ1cxeEoJbz2uVQzzsTubZ7w1CiW6qjxv9PcrjZ",
  "key14": "2QqnPC72DjQbtCDrXycjkZUbWaRfFFiMesacA3LwJfqGsnVYGYe8Fbh4NKSCuNVKbod4intH21E1ogr2SxUbkW3s",
  "key15": "2c5nSEbT2rt6DsTXPAt4qi9CbSLX7ZxRky1oAofyyrs5idx8XMQc7N4mzF9Np84PzndWqtMpDpg5E6ejhMUXLM84",
  "key16": "5T8qLS5YSfbRFKQq7F7uHXXzMNZRL7EAUdaVGJXkTGK5A4YAkxYktqAYyuSbdPEKoqzzTVS6GgenPM1wRDLd2txn",
  "key17": "5CESs6YTqT2t4JDuWu5fcu7T8UZJN73y2TYSNBo6CYHX1CSooXNP5N4yyHEweKWhAXpkN8xznqW5EpAvgcmGyk5G",
  "key18": "2jMneWDsFP5ciUjYja2MvJVHZnsLfFscTs9e5rJ58S5a7hgWn1AzBw1y2vyxLkwUwdTqJ3qRGNqof3EW6DVfBoEP",
  "key19": "1XQ9As2tR1NosfGBAffx51eAaTd5grBVF6x2FRbFnwcWX459yWWCd1QB8dGpq6nHywDPv1P2qyP1Fj5CkNLN6qa",
  "key20": "gWpXtDvre4zaxBxZknYHGe1kgY3VQn1G9Mf61ThsCa81hPT4p5wM2qzrzJiLHxVr1nkcJbRbAd4CTiuP6M7n754",
  "key21": "5889tKQBP1Ej8JYZ3AA5dFRoqxEsbfxma4WDBLqJGKBefL5pWb7PUULLy7WNPcHNEPXeHh4CyUYXRY6cXKxMfaE4",
  "key22": "2w8aprLgvW1skZYKnqrMV9nELidWGFTGDRTRmp7nLLDpToWhYucvymbJ9gXGCxabxvV9nBTGQ7F8jeUQbgjudND9",
  "key23": "4iQsfJy74dkjf9wgF3xm8HajTp75QqMUSD4AcWpPvtJDHSevumM1W6KVeRkVdBPW7o8Xj4nmPqezghGneeGtvSEW",
  "key24": "3Qk8Y8yzi4u9Nq37g69iXEpLiV6CzHHaBpZadLqJoUNctjVZm8vSrfgqvXob9xf3zFstvbVgkN6KM5rcwJB74ss9",
  "key25": "YLJ56AoTZ8a29gXBjdEJMhky7uv36TA65x9ofAVSVSZEAuFxUCNi7YUUCpRNAbSCq1V5vAzi3923F14yYDFU96z",
  "key26": "2VTtm8BZaZY6pokVCJMTsTiJaMdhgjNBDx7Xi8fDSSWN8qmGNGDtrjWswr3pDyjx8Mcx9a6HLmZXmUj8TABNDBcA",
  "key27": "47AhGJUT1sWoZnzzMmc7Wf1YzitHPE4Kc98vTk46fFHh31YUPsdrmQfdFQYXMnasZTntyLfDPfsQfgMzPpZoGpBm",
  "key28": "3nCHFB4mkvxALrNsDkkyRfPiMoLZzyh3HvbDJHxBXQMNXoL995zUG1di53jLxvtQn7sNfeJ4J2LhYBTDLEdgh6ME",
  "key29": "64K7o5c64pnwEB2QjZxMLsSQEHpeBzELYNupssTYCvFiNDdxqx2eaRpj2Zvfc71hzdqGdufJU1wzZb1sspGQnebg",
  "key30": "2bHJRTePePBgS1Q1roQf2W5GFqkpinKUH8M5D6n8PCJ95nTd7QodqeiM5F1J3QBDn7KY9iR37vm2HgyH5zmsWkjq",
  "key31": "3fKydG1ybrABHqeZtU9zvGpbsMWuRpnvHjibnZdqQnTV8grq9K1iXphm5UfChrkJ1YAE8GUXDDpuGej37UUJSAE8",
  "key32": "2C9cEarGk9bBWAATERc3aSNVgrGVP9jHFPsVqm6E2PHxvMsMLzNQP2Smg8kvbjNwt6XLbGpuseDGcK6DZrDn3tDm",
  "key33": "5M4qXByAPsDfznYrSzdRZZ2gumjyuTKDuLLepca36KTTphsrW29eV2CNyn7w6UJRKSJwqk9xZEmbDMouG1Tqotgz"
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
