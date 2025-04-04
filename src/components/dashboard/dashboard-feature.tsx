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
    "2qKXHq86tTmWN7jupaLStzxq9ZKntHDU9v5Jxoz3PfF7Ts5BVAEYK67VRqHAScLQM5qFqSok7bSa7ounha9YJ1KK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H6zReJGo7cWJnp6LzF7WAASfkjpBwohUokHQUSDsWMEBf3xY8pYeThWMPWgEvFBCStDAY6Xgiri1m7RWWfKKNbC",
  "key1": "2ajoUYUSUNc46t2CFCxmwz3Nozpf7m2Tg45QCPjcoqsKvmirBoySAFF3gkUqueucsKzaL2jxFTG8bPqj2ph15yps",
  "key2": "Be51NwskZ9iqYuD2W3zVfc2Y5CJberLzQjYP7Pj4C9szvzRMHwYeYvVCDApzF4AmHQD3HYbQZxksuS8GBpsSBoj",
  "key3": "3Sxrt3M81RTrovymfvgcjjekPiFe13pENHWWuj2XohZudAdgtPNn8HHzgPgeoFGSnyatMZqPH7s3SJBJQiuYCLaA",
  "key4": "2psVCG1rdqK8T9sDmko7zBeBZ3mJsP5occke5kjiWgQgrJoSLqD79p8NmTx2wXmYwETcPVfqTEytB7TJxfHB7c8d",
  "key5": "42TmZRWCeNE6CabeWGQqCXrtiGrCiwuuQ6EsKQ9idVt4uHdW9ub2hBWeMSFaFUWmzR5hZrhzB7fMrBcVUqNaB86j",
  "key6": "HZ8pPHDuu7LRTPvFJjEm4ttfshi1BqYakmmGaZzcPgSei9kiggV2kariD5XST4cFpusasfMfe86KBM8Ky7EoBRv",
  "key7": "3rar1PRGpgtEbFwtQuwbv3ncsrR24sSwz4WqNLLbrbjffG83WTYVLgqq9WV5nLFGb2VH7F752aJCt2NVMmXBpuAg",
  "key8": "5K5sicV1B4w4EoefSArtqaMBode2pZptDKwSu6PMnR3diZB1YotvgrmH9tqR5bSLxrC1okTyn5Lr5BFj4BkoEyNH",
  "key9": "5sCWsXW9LLWkHH51FUKftmtiuFRsf91RAbkjauSagkfVTGrLQFVQGu4k2MsFRTVY7CAy9ZgCiKLjdyi5ktAUyNPJ",
  "key10": "5SXs5PHUPxKddAxBiS96HPd2kgAqAqttLgjtTZL99AzDDq3qj2miALdrXjJ6VgNMKdnTa63ED3UUdUx8ZSZdrG14",
  "key11": "62XZfYeYcsuXBgQyRi4ZNaYnfsGBmPT8M7PeozafTLDk8MogYEKobo44ABhHYM1pPx6PqziZ4Bqi52G57XfgUtdJ",
  "key12": "5CbtKYho5HrYe3jxvkcKdK3z6UbpQxnkwMAP7VKdtRSCwMoQskxMowHYuKZFUgExiWNw5YkFNmKDjWAXP5pySQVM",
  "key13": "81NsyzkszHVWYZvsf8uGpzawRMaL9VNahduQNrkFHcUzoPgHUBPQsXob2j6rT92YBz3utp3q1ocjFBv6i7VnFmY",
  "key14": "2iYuUGLP1vwWT19GrazcK71vH45SXQvQBeswpYYLmyZo74pfPtHGmaLqEFUyUaPYND846Ne492HfMRnA9DM7PdTg",
  "key15": "3X8ToFq6eiPGWpHRVADDCrRUa8syhN6fRgHPhk6bqGB37o5Mm1v8cD134vq9LYmMzL5ZwoMKjgcSBTk1kE8H6rC",
  "key16": "3htyo7jpACzfV7LibRTbCjGFk5JKqVoWCq2dfwBmH2TSQnWYzrd8u3wZxAcozxZCXWtc9uK5W4WGpLvezgqD4t2L",
  "key17": "5kerY5yw26MzMppGhU9UdfdxdwTbbfakqY8ocCdwdL25gcv6CgZXavxLeFG7o7Nipwux6HVsnQou2okfWpvPN5dD",
  "key18": "mkhjw6rb37YWbYrzAuRRG1wBjyoPbxCT8G5UCMVNE9RhY7SK5D1RyCvXdC3qSMRsmBpHE8xQAa8ovYThpcE6D1g",
  "key19": "3CTDVpuuRoVGUHnzonxtmV9NySh5tfxaSM4YUNtCbkAqPwmikQDUwDqnNobXxSicu7R4CUadEaY7vEAYCTnR6XDE",
  "key20": "23PRh6eoJcvoreJJP2NjqpsgZQQA13cazBxSf8z8ojQjgwpvCWxPMDxdTBJnRCR9E8SXRnJYFwyiLJcCh51VYZAr",
  "key21": "57v1RupLYubeiAYgat2LDBWqFc8NfUV2pRfKp1k5jpEbgozc5tUbci7rKZi513epLf7Hegrrpn6aaeVek6QfBAHG",
  "key22": "49sQLkiQ82AcmCKKJHwNpZ7hSKzi1b7XG1TgijMn5w6pttKqYxj4wG49ABdx3H3i1sAb1rzyr53SswndXNDqHS15",
  "key23": "3DU7eayqWur6ZaHQgzFepAaajrzraczzw5pmm6xLrZupNxN8DS44NGe98iNutatdzQnHKmQ2818AMre56FJEfqtJ",
  "key24": "3zr3DhpMX6jpyJMHgRgS8d2jzmQ1L9rZWpBVbyn79aHZiJoCA4SdNAxTNMtZWLR8Rryzn1JVoQ29hAJE6eHDw75V",
  "key25": "4K61zvbjXX3hBtZdrt7vX4QmXMeKWoroucgw5uaEU4JBhKYLPCAia4UYSG65ikaUT4ZdLHCMDYtV8YX9F5KXoxh8",
  "key26": "DaVo4vtn6Gth9JLpe9ouGVKsqN3BhWqfcP2GoSgbaRdxuoMFygKKRBW9hsTVsx9JWnxw4umz92TRpz3ghE3vtP8",
  "key27": "5Mc129Hxe1jXezqPUMs38Gzfgpv83jhcVDRbVHedYKTANVx1gfp7GGZbLtHbmnzbDZChGfoVXzRtF7Ycoh8gTB6P",
  "key28": "4MYqNT9AEheCfwZ154svR2VJtTXR6q26Qdo7GdxtEx6SuBaJ6UkvYYAntmCrAbR5W936NhvHW8pfPFsEg17cnnmR",
  "key29": "X9NhxVSsq5nkbqP6R3nMV43k8xDYzQzJAY6qunfDvL1cHUjC6QjAiUC7sDhEXajCph4EkaofPG3DfHBM1g8V1vR",
  "key30": "67gEQoC7FvVCowf1zGd2uQLSykTaW13usNzs11R89og2W4JgcLPk8myyZUwrdU6sCVR6GsyjtZvKuNMGjzXv1BBE",
  "key31": "3hYFCDkTwskXKKi6ek65tC6dTNC9rQCtrH5y35nyjxsHzdUq99KkYfgiAxeH3dur4RybaCTBuqS3WQMddX7yABJz",
  "key32": "5B5tvEix5Gp1pWLQuP8qXFxG1zNVCs1RjiyHnny4FHdcZAffp55wuuBX75mPDQRX8xoLyjzvYvfDDidzKxFK84MG",
  "key33": "4yvYvoznUQ6LEfyug8XrWzk7KkzdsG6xEm4uy7BnLmAUHNNqsYn4W1omMwUzjU1y7BPGHMNLTt4XYtLQoi61MhUk",
  "key34": "5spApXZ9MFXFddoaj2n473h3wgWaW6VNof8Naa9U8JhEx2prV3w4JSM9P69iZ1FHcCgcm5j6NkaLLsuzny9Edpkn"
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
