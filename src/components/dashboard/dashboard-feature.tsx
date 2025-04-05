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
    "3oM4nw3rGJAPYiVFhbXiu7CiscKH35d8qNjFfTgk8tqbjhBKq854biumfbzTutAwJkJsqv6MyNsMMu654tKvQArs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gWousmUW1M76ErFRhKFs6UeMDcgpSPrhe4R8XirGJdiMgAgTwDQfx953HJBdU6ucsUPvQ81pbMrCmdJ9T7fCoh",
  "key1": "5rwbMyvS42AhQLy2K8MCzXmxEhmCK64NKodsDQueSxyFYBPiaGvd51SqK5mq4iY1cjhzonPCvWpGwBLaqjyuJJsQ",
  "key2": "4EhU6AaV8wTw9hMttCQdAM9y35uw41GjcPxSsFAaFZC96ES6UiwwGyHDBjfRtHZgEcyqeW7RqoKHXMQXr2tPdRf2",
  "key3": "5T9Tn7qncy97Q2QojQAdG6YuxyLpbUCzJ52Ygm66dosh7rcjCDup6yDPJdWXdWgDpmh7pstQUeTA2cist6pVu5Y4",
  "key4": "5nfuJYYATRNDLigpXNPARKhXG9mxgKpVutEpNxZsj86TRonvLf3VbbSwcp3skB2fnmp2ESpMst3ojjqp4PYxe1Wu",
  "key5": "5voTxHvra7dewXVYRMpxervHkUxorxeRemRfvPeisAHpHWohptXYL5Y4FAvL61tjj3qaBvKsYD4fdFU4Fo6ez4jF",
  "key6": "5HsjZRuLBfWb5KXrncNg5nT4udzYPZb74CCKRoULbWqF8mGHZUEFuzck8D1QpgvTA5xB95titw3kWeqHp29v6R1d",
  "key7": "36QFDJVoj1f6MeM7UqVfG32LWkCSFR1XNXrjmpZ6yiREpKq9XCtygecCnueqrD9RY4fqimJJjVnsDKCchtAnjc89",
  "key8": "xhJGatFrjcSJ6mC58JmcgGEJHhg9SGnza4eV8XfVCSnnc9oNTXJXntnJswuoXwh93cmo3UtYtSnRmhuF9qB7HoZ",
  "key9": "ETBSdW8hT55ybFzxQjGnN3PJEhVHkzzShbdSjho4LkCLKywBi9h4ivmB1BkZvbo3BbBBD5A8F15pABMjUUtTgso",
  "key10": "z9Vcuausa39Pe5nhjG5sYuPBWXSeKV1CUQ5wNpVARuijSUFLcD8SCVbGVCmzdUhvPcUAxwE3osSgYygKEEyxTSb",
  "key11": "52FrxCot4qY7gmofkyMnVNPuTAeEURLekocG5BJ9uj7gaRy4SmusCAQFPuVmemqmUgPGrx4pGB16DsRSG2zYHnaX",
  "key12": "33bXVG7ouPvVt8p5VRNKPaR5Xnqac84nfwr8gRXQ4VtmLLZAD1XY8FU33WEJrKFBXiMXCnuRAED2YPMNrP5KXBcf",
  "key13": "V8W3fPUXDRCnKq2anBnKGj9GyY8m3YCsRMJpF2UR9tLiCAdxf59zdAYsUjECMRxx3wYA2amQyqhgxTPUykRyFX5",
  "key14": "3iBFjXtHQEFf9kQxcsBc1ZNqxGhn3VxTkqKcqHCMYjgDZwbyytzvMe1dF1J76HKw43j9U4P2jSvbgPRNZELgigMC",
  "key15": "24Kei6zPAaSeeCJraeoX5hM9SdpVVTj2PiWqKpuKGGMYxBBs1kJ4wNpRcVjHpMus7KkRRE3vTmJXMuWDoAR1a6NT",
  "key16": "Bu9fTa3H9urSZ1C8NRLp1jQ1N3XAEcAsf61hSWoMBqQ2bUxA4BTG2meVFYSVSwNqopXEgkutmhE4LR4L2mqTP2i",
  "key17": "58p7ZfrbtAZvY2jGbQZbvPBAja5B225a1wEaeDrb8BXRPwiWxAzq794v9HpeZ6yUfUpmcV98Jt69ecqYGzvzxwoW",
  "key18": "33e1ULZ3QWG1yZEoj25rMcNFZc5te7DyXG3igzJJ9vufpDCX2CtWzSbHeFa14dDUbMkDVc6aFP4hM3KsU2CcfTj2",
  "key19": "4SYvKmsHjPXgX1LB1ngJZD3Jvui8nCsruf5XyzySXhLGqq22KY4TdV9Ec1fRUriQ4nVpZKrjMuWhXMRjbZh1vVEd",
  "key20": "2UWhnjTuPPGd1x9Vr4TyD1usrukhignEFsjRWnAvESSXTzYngbiefeR43JpfbNkYJAayxvgXvUmBuLDUb4gQBXSZ",
  "key21": "4CYdSNrgEST5EDnhXjjkRTxDPx2evt3hmr84HVqPTjttT9sjbsuxjT9i4ybXFxxsJqNFXFYdRxZQ1VLFbwCEPSS6",
  "key22": "4SjL5UZFeYcqaQqnQGPTvGj1s2M3TTYvcBCyzc7V1FMSmCEaAJdt4aqWVe7dt4SYpY7kD7TzN2E3TYzF7RDcW9bm",
  "key23": "5LHWxcsZaJf9rgatSPyjQAcYK6YsKmxWVHtjpFvz876WnaKvQyQPazf5jyGjSdX28rb15gjvkdjXaHyDoH6uG3iZ",
  "key24": "5hwBoZi2FBM7YDqmFf1uKu6c49A4ordsBgTeNdhBNqNSDqkURQaHkwJZkCrSZobx7wJ6hWzwcs6LYNsnbxyKxdpt",
  "key25": "3nFiBygwac6oy4P8xoW81Nh6KZTfUnpnpBK3UgrDCBb8Z2aPVTyxTQBahQ1saMKpuqKcp6UZYQaY1a4CUeJm1tbK",
  "key26": "3s7k2M6fBCv2w66usHt1tN7SyJAiLLM1XZhBnJ35Np3YfWdeKQV1anj6qDRgmLiEfST281tv1WeLzTF3wKWLzJx8",
  "key27": "3qdX8LfeWe4tdrML7jgz2qAMqtC2QkUBf2m4SBtCfciLztnUcbtaxKBRfBE4V98d4gCcyKJRVVycjF8pRYvNcD2f",
  "key28": "3Tbxc3wKgLLpgQYkSD7uZQGPgEugPrZvks2DLzSyLAjy494dfGmQtFmdArTkKcHjguaGTLDjPMBzSVdkEUPX89oZ",
  "key29": "5EbKuhdzT5dzF39QVsxG5RMcpRqE16DHVsbc8ZfmwxdVqDxTqY6qeL3a4R18Az3NaZvfiyCvMdWLBA2KmdMDbQqb",
  "key30": "3yeDQtd2sktVZqWMxa7dgU6YBrHNjnu1NNXtWRafxqDbCyhrYbcjxSXZm5P8yJMjqnntNskjuJFTp3KjbsHStqYZ",
  "key31": "5FJC3jDFd2YKXaVPi6C8agEu3kbgySJjbAJeXEneG4wUHYAoZKkQwmTAwpgcqZ2A2QWpydEexFeJheViN9pDUUMa",
  "key32": "3HeNs5tUcm42Hacj5pi4qwHJgAm2evB6dTGr9EFXGpHz7QCtENhN3UTkSZfuWwkfSz8FbsDKoqFAB84uCuTnVTZ9",
  "key33": "27cpkkGBEwN2spJtXjaw441UsQx84ModmmtFKsPR7X2bjv4TJ9MmUw7L44kJUzb14rvjHvDmeakMXz1R9MyQyRhf",
  "key34": "3mRHWy5SBuqHQ21ohafiktJNhjuJmY9BRcwUvEhQRWbazuirNuWrHd1P14JztMPNERAiBwgVrFxcu9zFJ5Efiwyd",
  "key35": "MLaKfS8KuJ9LSesXiba3VA5THDVGV9XDuTJJz5qzMPrzAq6SEh7VhSrRehbr9sN8kfbHsKaMX8VPm82E2kVSeVo",
  "key36": "2gLQ1bHTuQnW5g36m3DM6E7w1MqmTyAtYkoKVazHY2guqCvPX25aNmevMWj3NGLfwn4h31i3X9oksc3JmckPSZxT",
  "key37": "3F2gN273A93Lhr6GEjTKTFeDzHGqqVJvH5Ko6WfJ3vE47HHHmZKSj5PV9gasJHhLaDtPWQcqQwvEeCoCWnBuvFvA",
  "key38": "3ifABBwPtoCJi4y1M6f1N35QUSTWSxyLgXMLATTxyECa4VP6x3SSf71476rX5UYRWCvEUuLhq8EFzgP5ashqw8dF",
  "key39": "3bBMUkZhQdHWEr4bAYGHVutZ1sYppLRDyxX2ATL9TsbMeYGwypDCqZXcARKgwz3svZuBFrPojKEFMAMHTZkWqvvB",
  "key40": "wR5eTdwWRczgDNWVnLKMP2SzkGQhzDQRmP7A1qKu7YoNsLFND752xLezBqQHwargcAFAsu2pAEaMUyYNXWtfgaV",
  "key41": "59YyH8ZPkQF1v1J7qdpvW7QUuhbSXabE6uB2yCEeBMTy27AyWhVkXMnyg8UXr64C41PGDkMjSxthMY6nc86dM4A9",
  "key42": "3avgtSvm9FNSkiTYwNYThFWHDiERHoA9c3dPtpPBxndbHVALRQsPiEZPZ8U1QTfuszW9cPL7Lsf3nbMK9CGnfpf",
  "key43": "3c7duui2PZLnVrhVbXZ7JPfvES7swsJrGR1p635nQ5heiiF6CNC45tjGbBbNxu6iXg2XNP4vzk4Fsko6c57HS3aU",
  "key44": "yspmrgC3G9juvyLHHpfKpgAgdCByDk8cjeBzW8YibTWs4qtGUYjPJfRLdTd5KvYCXTUYWDdm2iRdjuP5qcqq672",
  "key45": "3ebVjreMrcg13yzfzeEGWxdrQRhjQCsKSoEZF5STo1yeynCRnUAe9AnjuaP3JHW9TnPgUf4bCzH4dujwSwx9rGEQ",
  "key46": "3sscxTefPyftkPJYL2TA3b5RccH8zrDGqQvEQujRjwSM5WAfEuxEM6JiCNUaD9ujhgSmfMEdWGRcNZAcVseMuYWw"
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
