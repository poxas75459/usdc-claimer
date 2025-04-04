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
    "59N3iC2sKqLUuKTLu75c3xP3qF8scuQncze7SK68qRhaTtbfc93XZHs1G3MWRNgu4UnhZqTQ3k1v8PNfSe7Pqz9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xyb6o2XamoKMC7gVo8kL8VqRv6cF3g4eyAqZxpR334xRjQiLE12YTgZU6bwTWTKyUzpxCgi64Ud8wBpcD2opyoY",
  "key1": "4rbCjCGjngfwNXtc9fd6Cngm1gm6AuuPSns5vxYzr969Z1HtBpdyA9qCYeywnHpoh3RRfg3jXHzMAVYEHQncKrLz",
  "key2": "2iMt5kQ9Pym21iA6c6UzJrAoehz6kNoTPnL5PWBLdpY6A6zXT3eeaSu2xT5cVZ7F7RMpX2XcZhZkdeYdag2unb4u",
  "key3": "2f1BtwRT1fRCKRr9MS3sx68AdyrfK7hSfQDAuMnZH768bFVngSpQmA5ZV8e6C2uaYR2DWq78cSdt3QwCkcf5KRvF",
  "key4": "28mBWLMoWk1qWEmtyqpXRBnQynWDqcym4n78LejCeVdYyDAWx6JfwZfrN9FZH678tVb7pGCTg6PSDzSkSBVA2khd",
  "key5": "5Jjk2NnixLpVBQbK1EadA1eJK8mw5k3EnVJARC4dLZkmY354GpEboiPE5nJ7ajg55xGKqfgakdP4MTEySVxcM3vJ",
  "key6": "2nMzHEMd6J4q5oyuFpdaZfsLXAhdxMgvjkbM3HAH69gZAUwsJ6m4nNA8bzLDbqxSz2hPuU396RqDe8shC2pTeFPj",
  "key7": "2Ah7ya9hehcUQjZ4aREczDv4hSk2FhKPed53BRNscMb28SNFUg1hM8ucW27LnkUo3biiSRfKEhKmcqr2jNg7Tfnb",
  "key8": "4GKVnCqU5mVzeBMZG29PWKi7aaLLzTZ6Pb67VB5oB9mgXiomxHCsRTKtivL9sEAN6XRkoqpEaEd4UnKMsmtQhVeB",
  "key9": "65xy1vjuqRNQymPXzAgByv5jdfwprRSXMqFugkEw9DbKKYpjR7Mp56YH4ismJAV9ByZEKBUQnWMMBaRxqEuZUCFw",
  "key10": "3C5XHvkjfDAEH5PCHKvK8Mrv8UdEjypJRAeHHzbc71zY1iq6YYCGosmRhhNgPUbSU5pj9aKf6vWGUougfvkZe1d1",
  "key11": "5CjEYRicR8h2pHxDk6uPekD8oLt1eNJwpsadySmAsTw3r9ovS2Y91UiZWtYWDtoaS1LQ2dDZxaLa2z5d94KmTqJW",
  "key12": "qq6EEqCCJTkzPFUSGtFMRmWyfJPWuAvK8A4cDM73yjcpNJHriMzHAmZRHHieT3Xz3By3aj6pepLyMnAytyypdzi",
  "key13": "34MsvFgKVFHUcxuSuF5AQVCRiVtitTSqMgps8B4ciHaD1iq5EBYhxPgT5LyqByFYL7qdA2r7nMtbEgFngZSMmDwG",
  "key14": "3Fjh73amGQz4DwqySdzCRv7jddCd1pX264t7imhfQEyPLe4s2xR4G45ZxHXR8C5JFXEXaTEcvEjujW4q4LLRxL7y",
  "key15": "66pftwFSTcSxQ6JnhAr83CpyivWDKuR3iVSRVWYTg2pUb29Q6vpM8dKbmKWC1fwqkPup8qFCp2V1FBjHMUeqjKsr",
  "key16": "5NrDY9Bg9zmnikfwZcfxNG2fauDVZhcFuGR44TdP4QsYYHa5GAr2CywiZxnkfyp6fnLrdB3Lnc7k2gEfWR9KHuJQ",
  "key17": "qDGbWQKwSckBA4MQ3e8nzHvH8f6wbjgmMxdZ8LJscuz7x8B3G8uE9Z42V6b3AkwzChT8XLruip6J16KsRkNde5C",
  "key18": "3befL2S5hcadXJ1fCjKAAEKBFhr9M3XUcoDSVRUZyk6AHMVXEa2a5Ws1tPiiueTK7kgvXG4s8YJ27ooRH1Lrc6Tz",
  "key19": "5RvqcZpNwoXDeP3MPDLFyDzPs7o6ZCyqTFscFKWYsFc2Gnpez9WNyuKhPJWDwVqBEMkDTr6N17zMPrsRwLXwnUG5",
  "key20": "tiykgjkw5YZSLvzCdijk2t7MPEYh5cLD7SMWvpVLwzpiKmqKfQMZHL5DzGgguaPrNxbbMPVAuAsuoXLGPYTC8Sg",
  "key21": "5aWC91CD8LHh1CVTrzpiWUWoS5RPCcG9mC7d9y1HtQb6dW9DdPNKhtW2spELP6pFkJ831m3F67fkJnX3TKS5F5QH",
  "key22": "NXxQoWRXsGciPhhuiURpxVFJopkLr5cMfRfN7XFXowsNo6jSV1FGoVq6Xxe6MHXrDi2YymFYNoiCPTBNG1uYrr4",
  "key23": "4SvfNu22hpCKgB2K5u6tM2F56zoqsmsaKaTFAz6Wbo4voYcBQapBGT8kJmW1gtj1NcrC5fGDCU7TuHMtczx2QmWT",
  "key24": "2M13k251mFMyVZxWZRFoPq7ofzF1XT5VZN2aL2aAHh7bq8AhbF6GqTfTHEsftdCNoSkgJH8kB1fSySfm96B1uzbm",
  "key25": "5Fzbqc5VFmXV58oPCmXxPtUygih9ksTo9wRHYXVKQoabEVQvYwwWYq2QVqeENtGjSyaHF71ddFnfuLkdwNVL8A59",
  "key26": "56PB2iJFit15J8zVYkMWQs3Um6Tn5ezAYa2NLzo4QXkr78JJM777s8268yGFwAjtjD9Kwy7gDNn4swNMZkNpwhfa",
  "key27": "3DyDnE7bENNdaeESPkHTySZ6dkr8WrVrzFwmyPmBAMg2rvB8a2XbocwQ6dK1U4L4UjXn2HvaGXqmArccZ5ExeKas",
  "key28": "3Rz5r3DGmES9PmaaxDtXzKXSPCkGauq9kZd4y99wGuPvTRog3ABhrNFApGuypGf3gJBvKUoeQ8ZDszdjiJmDPqRE",
  "key29": "695firzwyh8K7RkpsTBJcwYTKHnQBbG1oKcFLE19iHgTXgTqJBEubKw2ba8v5W9WhcFvyRX8fpWoprKUrjuEDE1",
  "key30": "3uocDYdDXZHXbYuFQx56QmKb59ieFATi99c1KMQYBSWxeuKDsifXP5acyoTUeeycSYx6HavAV8cbw3zvXFBAtNrK",
  "key31": "3zhvgccYWRhaBvV3LrgyuvZVRy97YmowA9tr5vVwbfH5ryAsaheRGqQp7H5jZL3aQhez8248e3JefERsx348QeAe",
  "key32": "5fGwRsmhHJ3FUWJuAdQb333XdgpbfacHota8RMYGXXzsLeFE2abdgcZ4kCcWyVruf8SXo2dFK3oKi4jXcdGUtZWB",
  "key33": "61FMv1AwyepCCCnXyX2oUDtk417nDds2Y9cEQPYWTzwCzJ2sNELRGYoyGCdpqMGo54VSAEZsDnDQ1dajwe5QxQA",
  "key34": "3sJLTyhA93yHkmLvzXy1QZ3wtU51iHqYPRrWdGeQjhLHYWgUrdtKFVFy33CmnWHrNojC3b1WBQN7C7HWFiLrVsBp",
  "key35": "3avSyUfrSy2LZS6bQsibbBahT6QR3YsMqX1Eo4P5GEBVsyiJ3hE8VKkhQwQXpCx7EhNmViZ99c9ib65YUVFkAjEp",
  "key36": "5kxKd2yScPKqVzXiQv8mLPhH1zadSihpRuZeGzbuUq9R3RyDp9mBQT797kEQB4TNWjh7md4g54EFHnCC59mF62V7",
  "key37": "2yxRJvnoLzRgqLBdXtkCDzbMv82EVdFdhJs7v6XxjuVuknjJsvoKwFcUH5dSgKjU9u9A4BDH4ySw7pP7BFBRn6ou",
  "key38": "Lmbe8kJD3VLue1krNzpUjWahqGYKBS9Y7eQcdkJzoXTj1Y2yvrvSJWRDsi5Y6yUnFeDGrp1171aHPR3WsTh3dc5",
  "key39": "5PdTP6Jv4EY3nDKzYr61xFy7MLugJxzF3v1MArA4oUF4itb47J9b6gjwGbLHhtQmTzLyasvazd43hDt2q8gX28HL",
  "key40": "3jdEaFqP3aC62CduPhDABpTyrpmBQku2AVryGfiUNFa9TuHkZZLE9gVBcrQaBqGT65yS4rUdEDr6PYsa8W34FymX",
  "key41": "57jFgiFDSP2FJRHfnbjHxsQAZQdXegu6sTs7A7jgRNMzrKXNEqMpcMjxUh6hpWddjPu3D9thwnXyC8REUAx9Af7j",
  "key42": "4afGQHwTpHLPzoaoYyPCYf8NN1Ycmdpxaqnb5eKD4tyqT8Ngdd6NXftannNekxxHsFi5nAQcueQTKKw54dL3eBj1",
  "key43": "3vLCY47P26UvK74cLpwWzCAjv8gLRux2842wk8bxeiwLhExj6ATKfpZS9DteKeYorhPBXLkjRHQi2s9ky46s7rJ5",
  "key44": "rciscHRpg82Qryy6vPjHUgqMgmSczsRHjEiPZ77mtxpjSTeSeaYy5zvF8GFJupq5JopLJmcP46ey3176xkj5xK6",
  "key45": "3UFPEkNcSNh4Mp2cVcvGRxw4hirKThERFFNr4W7F5igYE4KuDy67mzrxPjJi3dZt3fmZmXdU7gnWeadVqEuaYEWq",
  "key46": "3tA4Ej5twrUXiSTXByeujpMXeYjckYipyznCecDqtvyBC6nBi5hd7yd5y43tApbADMwAyNrT7KNFTjPrPiek2RsJ",
  "key47": "5qkfzSJLVPQ6CoFu8cRA5Q25xtkJzwFZXXyeBK2LCt3e8Nidhn197DQp4nUaLCLeYaZ1GoSH6TZt48Q4VtVLmLQ8"
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
