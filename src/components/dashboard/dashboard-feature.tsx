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
    "woCVAiMTqU6dEm9wBEwWXHChntGmDQfdELXti4wHQMSP3HjNgHjSgzvSVBnTkniu4fqHYHyAP4N7F5MyxiZ4oXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65xKkbAZUxgS2VF3JiHBCwSTrPWGF7UJvCx91utXHb6nz2QDNiYGP9JTWdAMHWBRqYL9Q6rBhY6MFmPxSaVoftqi",
  "key1": "cD4guV9dxK9s6WWfgkLD621BaNaWc2oGEbkZaZqrnVxMDjdxvgEBvV5yNrPgjznADQ7W9vuKT8w7Yf5Hqe1VwjS",
  "key2": "294pCuoNngRUnBa1d1ZMwswe1u4v6UzrGQJLYUcm72SPCvPSt4MXhkE2F1WWN2ts2ZShJUF9WrJir9A1yeJxduo5",
  "key3": "2kLAdhxke9xUfGGycbXpEakr5NctdRjsgd8UNf36wFaFmDwQFfbPGxdxtyNM4Rqpm4iyggXjUn6nTTML32J46ToT",
  "key4": "4W86cq58aY8bZSy4N4Hewqx14ehrRWuwUBTbn4e3q79BCDLe1nE7q2fbnvUFNKHiMSnbjBgc8p39j2uivcPRmStn",
  "key5": "4ayBgMZfSY7rwEjtbM2bAcYwL2tUCvmJk7q9KjFZ8UnnsELXKSzUKA11sZy1MstFQa7uhRyfBBu1hG9c9Gdg8iG6",
  "key6": "3EhcMSF8p7tfAZP2ZRaaQyDRSNBUXeD3YvQALAE6Y86DEFwtU4gVYon9ewtyJzut7qEzKrsaoKXBGaEm2fBUUBt6",
  "key7": "3Ykey8pgbVni81iApmNxTNvDq17aXnZtQz9ASMSELg3nnHrqMgDWH6PdgpxCZqh3BUXqezdFGfBMc6XToMi8TNde",
  "key8": "4TqipcsX6VC4bF3ihNh24uHCVZTvs4mtHW3XUAzhnS32DPMeLp42ch5iWPfxHQ5HdXoVsRiXVvANGjup9CapPpJ4",
  "key9": "2CELUQQg76rbfXDeY3WfASKmR7BCLu4JrCm7aKK7tLeYWwTjermufVqesKVmiNV2E5cN6WAAtwhvR14uBKEpFMnC",
  "key10": "36dshwHUsUeyUHRUpLaCJd3vxDe9dCgnwjXsjRA6JJhMvtxDxb5BbC4XJBqqwWjqLeEuZHCzJ5i1gkrv3S5SZr9M",
  "key11": "5xFv2bPsLshLr8N8n9uT6nmxNyEX6s8hbnfXd1iNqV5ssMYe27q7Lw1fw9NCDWCwAGNP112SvV9K8byg9FhWnrFc",
  "key12": "4uDt8NHuM2rEgLKTePPAkxkvE383AnsVk2DL744bnksAPVUZ7VX3kBWT9ST9kaXv4Z7ZJQZuXRVwwC3Q59kHhCfQ",
  "key13": "5a7wDkEAiCwAnh7HpVeCHkWduXFcffdeWCfuUkbtVeqcscGa8ZGjcLzE5NkcbosZiUZGP8ZZhKcYMpkiYmyfmqLy",
  "key14": "5V4PzzENC3o7ft8Ye7gXJqEAmCQ1cyYiW81NEP8TSWhwPtARxnhc6eCEm81YJpSX1YDLudoAuv4LYHaCL38a4q8F",
  "key15": "PFzT13YQw5R5ESethBT8ix9uaJKEQyj79uZpVyUQjgcgaSpDPjUkbXqezJtx2XTRS4g77WfwqC7rQa1pyJk6uqQ",
  "key16": "53f7rAVqQZ4sECvEftDWTnKN48xVg2RhQA4HYmng9mqNezXyjcq2ai3LPMBf69yLEU7ebrJ7cS5myPwMqh4KVhjr",
  "key17": "26Z2dmrTVjGh6pPaiT9PSQygMGSMPxKsrJRi9CBnthR1Gw6ULQqEdRd59Tg6aGE4wq3gSGH7dV82imPbMm4XqAvu",
  "key18": "3kMv9k1RK4Txwjqr2SoQ79qENoRczyQn8pvUemaVkXWzTxokTh8SkWmJSqXFV3Zfq9FsFuF7LefAdjYLcYyvv7YU",
  "key19": "3BTmMeUaRLLAQH45DXSxD2sofdLWbSSp9fQDH6hwvk7ZmgE4qpk4rRsF7gywqEWvFKSVCtMm3kBL4KTLpPaMrERV",
  "key20": "323eEE61UR78sNChWFSoVKa9qP1XvcLsufVBDY6tM1bVFGYnVUdDwdfrLbDxRQcRqss8tHtBkYm1dstT36EfoDdL",
  "key21": "5MuMXQHGJUePfuvNUxTcAJnGUumAn34wpSNPZtwHP7AgxCPm6NYAnSpUzJLhxJkQDCFDQmWFN2o3wxSw8QsYuwgM",
  "key22": "3ggrDpY5tdWvKVH2uZY1qVVTE8BEjCawQkxG2aYsmswHPX6jFb3RPRiRcWKHYtmdFMduwB7Tts6nKYWSwWtAP8M2",
  "key23": "xJ9LDavzd5LKUM2cYdVb4C2SRfMNgN1uoaftdYwKJZTdVwrVjziVv66T7HDpNs2NdbYPLRzCzEUavzwwDRGmhUf",
  "key24": "LSDUqsKabSK8z2rxxJby1NUEoQTQwy79SqZ1QnJBf7zTPsrxwoJN3prUD9prGJL8BhCespjoXpin5aftBb7BJZo",
  "key25": "4uoVD6wQWWr7UdcMCz4mh2MjYJ2qFua9mrg4n1gQztPj5EkbJicR2958zfCepZDajBoEcP8bV91uPEKG58wEQfWW",
  "key26": "5HWYHYMPDpiTBkLzo3xK3vevpw8S6svqcZTnUCKwCwus3JDjPw2LZSEA1yTP17ZEXH6H3shgwhxWcLBWxfy6jZvB",
  "key27": "3gsPN7ouZeuCeiTHPpj7npRX2cmBgkq3Th9meJMfuDdqcthcU7yiLRHYp9vKiNYbeaWM6aW3xHTDZTgUZq7CaFt2",
  "key28": "4EDZiXuU29zMhGA93iy2wRfikKTV6JxEfMFacfRB4WabkMNspECb95XwZdja4zyaCQUCjBTrX7vv8pTVr8r4qoWf"
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
