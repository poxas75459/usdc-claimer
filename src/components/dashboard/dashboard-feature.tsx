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
    "4emVqGWCxbT6cLHrpEbB7UqM2u2DRYxoBRnhCP3JQ3Gpo8hShMfa9bX184HLcV7sSVeciqdud96Hv6BL7yBTz1ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XnucSTKB6nqGmajcZ3QHviD779Z3NQ8HqQqNaX7KbM5vcZSRQWd8NUYTDDJb6qN1VrwxLa6jKd6wrm58fuzjnCF",
  "key1": "qFXHdSD4MPjxaEJLnbZqg5GY6E1Kxdw5CZswaHLe99xRaCoCUwzSysH4ZKYSPGEfgdfaUEjwgxgQyjjWxmDUpjq",
  "key2": "5MXT2eGeEd3KL9b9VgdGomD9f1ZVoSs7VGKeAcrd4RiugtcYRR2HaciUNz2z7Jw9wewGYJpaHTyc6XfasBhugBSQ",
  "key3": "35xpqtQaJhf9r6htKMBzLHbvUn58kPnbta4a3PAEtK3zgSdV6PLwXZVoax5nUxz9oxv7x7WD1NZzjRncJnpXhTks",
  "key4": "2FYynvGx7Q5D5hRbZnX1omb1b3y2d1WJDbvTptR1pH6NBwmaX6aF3xHnH88PSYAzrYU6Wt5VTaajrhhPy4pBmRup",
  "key5": "4gxVPRQF281FKPZC36V4yHDjaJt88ZPQvArLXdkBgFEJp4nWM9kuaht2XF82LVHu1fmVoXfeB1w5vh2esAwRAJqe",
  "key6": "GQz5Qz7paQbKT1KDzpwYg99pGPagRBdff6YtLjSiY281HQtjo9QTWRwjq5RzQENAWtjStuJdTusKrBZ25P6rpri",
  "key7": "5Q7pKKjMNfHpHxEdntPoHwVU1k5ZeDEmWCTAxhP8cRWnkvSZGfxfeiEcDvuoipgYuc7QzsesZ6Bh4qP2uj9dTKRj",
  "key8": "BuPYdpgPe8PznYeQcwr7TzxBSk7nrHTPYAjqw8PmzGkgrhKn1Yd5vDhysNqAwwGpWgYg2KGLdKPjHWX7xD83CsQ",
  "key9": "xkERSdmb4ZjU8KFAnL6xHfycRgVFGVyZUcanxQFAUX3CKoQPt6rhJqQfdDPtRrw7vvyzXvspEc1sBEhN5F9cspo",
  "key10": "5pir9u9tMGDXSEEXHxWs6CXU5rPEXCevCzLQaUH1j1U1vFrdhLKRYqYBf2WGFQqSyywHPdzP1AKLZBToAoxuqVVB",
  "key11": "472mzFPwFw2sCWMpmtuoev1kpvhQxW4fYYBkdm1ZY6Z3nyfS64sXyWyGbroVXtY3i9ZqLhXcXRLMvn77dw3BYzvG",
  "key12": "3ETDqEy56eKoYmTXRyYSZd7UrVQqzy7BKUU7RsxL2aXnAcCVb5sz4jxy5aozNLFwkN6XNTvb5RWvidi3meVQRCC7",
  "key13": "2KZ2H8C5JXMtvwUqRCowVJhdhrrChB2tpZKdKqighRsqDb7mi9MrK6McWnLtZEoaybXEydhEBMnFae5a91gjsLAD",
  "key14": "RdZZjkGf7ihMoL18x3TJUC9YdiKMsxGBC1S9MzUTHpnBRv6kRexuKsyDzMojE7jmis6errdipnz2jtUnbdpuu3d",
  "key15": "tRYA4BDvS37nEnGBddWKECYUEerDbH7Tr6Kob4dVu7nefA9cQkhXLUmb5VHcX21UQqBHw1iysmzdchQr9tXaVFf",
  "key16": "45T5wXQfoQVCRERMjBjT7X6ZEkEQnyiR7MUTEyrwM8jdiyLjrw3H2g2j6Jkz1HHDtHkp5yd4FQKNpSFZrxvS3WX9",
  "key17": "3pCfN2wcnTysiuVNQkChceKCrQooFWG8Ct6GEeyRZpbeej2p4ecRkc3o6NJrwugD7eLcLPtSePZKC2qgQbdAUWjQ",
  "key18": "3Evd2H2aJZDx9a4uXCxzK8k8raiVMLWUMU8x7JwiBhFeMt2YFHRNCj4X9Mf7nDPmwaFHr9umhGb6Sosyix3VvMF7",
  "key19": "3RpMiNRFceT568coZYvkU8VNx4EwtwjzkKwKDwf9otHvTiSw9yRq85huxzbowzY6utqKun4RPKMCC9fTj2s2svEB",
  "key20": "4tcuUacXeyqSKWehYHMugZ2d5TYfDx2Wp1PaJrY9BYUjECJNGtxJc2Fr9yTX2DX6rSZH4WxmHYu1UXPTZBHGfwhz",
  "key21": "3cFKSeR46N3hAoi7MNpY5XJfv9P27hWZqVCFxd9FcJHwj6SgYpuZhPcMYMMCsTw1hzAWyF2CGyFPBD93QkU3HNo2",
  "key22": "5im8xdQRZ581qw1oa7MrndEPg318U1iex277UC2RqdKQpe2FvBthpBn7cbZJ2nAtrHiEsAv6vReBpWdsqaPeFgru",
  "key23": "488JVZ7zLP5Er4fjWzx1BLedx7UN77hwbgS12pV2qiaxAUcjEwMxjoVbARd9L2mW9Bcqs6ifg9XBYnAehRNQkXZZ",
  "key24": "3bKkDQT7hcBmAXfR9VVVKbxrn14Ughz15kGjVePU6xvbnphqETiMV5Xn67Vr7HPsjHbvHJUU3NCfzmMFkVAiPE3n",
  "key25": "523YpdNkSuX89qSwPtmaB9paXx6n5sVSM1a2wbDvSDe3UwYwn2uSSzNDYZ7nm53B6a3WtNnCaoFpjRtmujKpxHAw",
  "key26": "3iACKo6HMRV5sN5FiXnG7kBaKXYm6kQXqamF63SVDynnQCF5aiLDmmAaxpyos4SqJNRqFMaR6nyeFikSkDzUMsv2",
  "key27": "QmDV6h8SXxCoMgnym6jbKN2SKCbPHX8P3kdQb8nCkg397EfHYng1Zi2WGmRqFGhaoo7wVzdYMWH3UzWUnVthu8i",
  "key28": "2w5vvQ46RgbYTwhbK2iV8pbzikiRgFAVV4VdcfVAjTcu2SBqVbtx6JLEVGkDkvqLg5Za8MmgbSahWRJaXrTJwBYa",
  "key29": "2ALVeXL3DvxThmcqn2UmeY4Y2snA6Hz4Z57yPZ3CGMp2y3e1ranEeVMo8MtApetm6nXMsW1KYMyMKY7rLbNZw3SS",
  "key30": "3BFMrgY84mVUEjfJ8YcR1F9koeVnMoboLNQEX8vVSHc5MmC41shnBQURANYTWYfpt77LHQKKPfRiFZhcBCtcpPqo",
  "key31": "qza4rT6sy66mZyDAxNNkMqfSf8XZpWoMzjbi3rG6qc4hYFGqDgbxkTD41zHRzAGhdaDY8C2MrLy8joMPjbABkCQ",
  "key32": "3iHrumu2m6raudiqv3NvBReMvSahJARNK86L8J5FkDBM6X2F36Y4cy1XVW1ag7uYqF9udDh6WJeiKDGRuR39NyZQ",
  "key33": "3oixU3scsWMVsEXjE8t9hc2BRcWoTJChKrEwPvYZFTU4SqF31GDZzguWvWJQNb2rQ1E5jTRsNBJgPkyvkKBFGHa8",
  "key34": "3dtVXKmAPKt7BRQqkWQrnex3EVx3yokQUWaN3y2dYuc7rGxBZBmWnVdey9A6UkJG2gyHGqLUUe61dvj7v8cubuoL",
  "key35": "4ch62N4Za5fsNxcDXfesZNQiLUy71hGivzYpeomfWTxwUqtRVaxkSDQ3w7GDyCwfgM4p8WN4ebKirJj8iZMxNas9",
  "key36": "nHdeco5SHhuXn7b7cxN79tod9o9EmTzu9pVfVTRGY7HLV8WQiS2LPQy1ZJnbE2kyBu38FQz4A9x75YupxT7uuiG",
  "key37": "C6GT8nDJSt9FuyWb26rBGJXze4mk57n3pfVV32G8Bhk4SrUnDbzE4MVnwKdPkUime6cQXUFpsSbnRK6YJtZzrnw",
  "key38": "5FQboFzMLUeJdM1twxpbX7rEFGn2WMp6sEH7vwfV1dPL2uG2zcVn1yXeLpUMMaovQqM8B2M4s6RqXJQEHorDQCSV",
  "key39": "59fcmu6wKBRE582rd6kkJjLSTvuDXa8vFZfj3it5kkwiE3VrTaZFtPpHQJbdoChmNRpNiWzLCZpHYPyBdw3pzDTQ",
  "key40": "4SzUWg9dPvbvAgBLwxjtTVcJCfjWZx9cq5jUgYku9LjtxzJkExPba76wvp9RpckRJMnJrwpXxXbZqYsXTvmfSJp5",
  "key41": "33J3pZMJyxoHDr3bK35SnvXQJi9g3gyfBManjezVBue94324QCaWe44jP2fbxPufDR8MygFH28Ruq7BiKcuDFNaj",
  "key42": "2YNy8e7dYE5PtsfhKWbHCiEv2JeKA3L4tFmJpwNKpaFG5E9mJ4AXywKdiM6dxVuS7akuw9vGdfuJKzfa3DS8bzjm",
  "key43": "3CrMdXn4THkgqGnTVQiNKFuqqqaJdz8rXsS8TXsZxqZ28g1HRw5Ntb8s2N6KpGB7Wf88PWH2GDqYTgoz2KwBvAyw",
  "key44": "2zv5yCELcba1ip6HGSMZsJ5FusacFimTsNFaWYvqG3aeBDvGQv8cjEjRejhDFBojnpYAxrdYpXyNar2hJZDRYt8K",
  "key45": "5CfoUmmFWytDnX9UHtmE2HgAx9Bvmci9WgcCKCcM2Qow9Tbdp3JAR1eT19wnn8hjcpAGvoinztEHhMLNGYoniVGL",
  "key46": "4a8BrSypJ9CH93Buo8ng3CYVD7pooRD7MTtKRK81ftihkwzKF6ZXhsNm9Nos7qgXmiEBG3n2N4sDc6QfLM5ADnQS",
  "key47": "2YMoV1D6QLn4U7SM1ujxC9wJE3dqc7iYD8Mx6zQy5whaX2ZCgN4WohAA8hmF41rHUWUs6q3RJqA81wiSW8VEJH93",
  "key48": "5iJksriW5AbCrxZZbL2dm4vKozox7u37pzMACzUDjwHDbFR14WDfyyLk87LCK8hQUgpRrKsK5kejqz1nRFVyZdUa"
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
