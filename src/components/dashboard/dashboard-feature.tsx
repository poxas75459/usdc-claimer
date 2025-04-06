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
    "3EnXkypjQFk3bCSTVW8wTM3mpMv9UEhqgsbNCe2b2i3MwpU6cdnDhkNdyqcK8sif5bvZY2WpNeE5nPE9AihwtM3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TN2knSDi4MwF1tTa6QqiW7oijNWVGAyaSWJYmWZU5N3n1vetcvjWWgSpuzJerHDxCNGUiY2pQmYL9uy1Ahaadeg",
  "key1": "4LaZetcw1yJr4GDLCy8F18Y1pUWPLnuL4BSxWhRhyN1n6VmZjoY1SdSrH8U6DQ84qRWdNwZccT8PznQRFxLNpH5F",
  "key2": "4YFp5sY5svfz1NTaeDAy2MNXfQzTPJQZ2fkv7vEmQ7vKHVyTZDePPPfnXcJpPHGG4SQyrQ6wwmeqY5ZvuhcKpnjh",
  "key3": "TUui499QCEfXvxz65yDNsKb2LtNTRUZa2UumG7aC9ASLG4bnE4ykvKmpJYHw8ZXRaZApi4yR7kvvtg5KNm9iru7",
  "key4": "4ykQi5Rq4fYfk1TNzvEVACyyaGuxYBNyL4hQqqdGtAZQrJR1xqnEVcRTDBpqriX4wAu4Yk4k5mZB2iCe1VrTDKLQ",
  "key5": "3Zmd1NF33Jve2RkCzvkBdGUZdeLXFF5FEmQEE3QAxUgzJsKPP5MUBoDtFMFnkR5rFDaeUb61SCXkrUjsEurwmwZF",
  "key6": "4BY2dXzCR31VJNf3G71GeKszsZHUkTX3BBfx1ChmPRB8MZXm1k7bTyFn1nra7pUhuDMoE8S1wuCukx9As56mynJA",
  "key7": "4ZfWABHxVUg3bvMS8rJBev12iNaVXupSApGxGcd4f6sGeHtJz9ttTbNM69nQfMJKfBEaZQR5Zd8RoS32LVHZ4KQL",
  "key8": "2eMk6yaZ5H57utKgZSbKkVo7BrmWnfUwjB9M26D2Sbhe7ijPK8RacaM41w2uwNahyqsCris66t8Xc95X2aRpGwLn",
  "key9": "5zd1TRKrNEeeWWYQDmgkHNsZ3appsiLCWHrLhFMfd1gMXyt7TSraSPzSDcDZifL1r66EpHyZeZQsBTFKWf8jWU8m",
  "key10": "A8S7UW6VLG1YSTr51dJRBHVPL8dWakzh5XAtKtb4aJrQcgDSHSfr1tD3mAi3S3jYHzTLtcXZZaTyswssZU4Txgk",
  "key11": "XjieHNo1v2LjUVLHHdQCbW1zSXW5KycERTcrZcUJZLHqynerr7VkdCL9ip55KNHA2swCtNsBEnKsLiqu743HBxv",
  "key12": "2mAeXeJ8gV8Wsn7pa7pcHu176Lp9xR3mxpwJty67ubiE86KdJi5TNujoeDAjDdQYNUAbWjGNyECyk1FKEGoKPadC",
  "key13": "5hh4JjvXfU5kt8y4sZL2R1pAV74Kka179cJVh5tHDujsiUeDmfjnMGaRyofjJS4bvaYPnYJJLY19wbrxSSN58Mfd",
  "key14": "LyiufxAf6C8bFy5MwGk3N3C29kLYWC4BxJ2v2wSjtguLuFQWgwhakBJJ7Hb59kHErLkb8nh2YThkUBmgUgsUTcf",
  "key15": "25D9cJpSUZRcgT2jsxh9UJPh4fFuud8G85M5HSaZCDWEswTGwW3VcJ5MN6PqrFcVFtyXE5fiz2WGk25HKEsiUqkq",
  "key16": "3mhGw3GCVUxkQYuhcm6axX1xFrmtz4gjDcPrWxkYcAyubwUGCZU1kcgyvfqJTDPg2XA7SviAbh4KBmYELdAsARfX",
  "key17": "2A4tmL3Xv7ZZLUd5zKpfEULgrGS5joKZmZZs9DuDTcWho5AzEJt1vgmUVVn3ZoDYjL9qafoywVQEf8JM8oJ2yQdp",
  "key18": "4BNW3YN7cep9xUb9kTDzxUFzTE6JKCc54N2sGc8E2Nvg6BuVuZveUNqq8j5Mr1KCBPrBe7DzSFt8dEBmPj8dAvcJ",
  "key19": "491hSU218xuCdrHvJVRNN6om9z9dLtXm35B1VKCjp6GqtfybkfAc3BkjbTZt5NakxPecJEpikNaTmaD5f6R6Usv1",
  "key20": "45hc9jaBcjDW1yRrb16S4RnonZTJJNJzW1DisKqGoCYrwbHdqEtjqjFdRtSKXifVsrhJXApo9oMczV5hqLyFrVYj",
  "key21": "F4ZWRuVrD8mZnrVcQjiuF7bXSnS1rcwzSNtaARsndb2mrap3NwjZs8gPMM5s7gJSbEBRymeG9hQyFi2dcCWf4Xd",
  "key22": "4zsQnJzfHv12dLNXqKRFkTxnp65hAH1snULi9HJoP3x2BGeZnDaYJ9LqPB89oC5EAVQbLJn7DCHGEqDsTYDLKEF4",
  "key23": "bTrKA6r5ZRLT7vHEbLeXx3eJ4WwWqEnpAu5u47PnEj5pTtvydruV1f2rzTAs5M2UPBQ5ay1C5ZpQdEonNGJ6J8w",
  "key24": "Bhd1gpTEdj2n24h99HL5WragAMr4NfXwW8FNAp9a8rBSg1DEgHaUEEhJAQ5VADPEXiLXZCaZomUe3oJuZAD9NFV",
  "key25": "5FeWy8S5bRBu3mywbYbmYH6773r4ZT8i5NWEMwGtyZy16tjQYczQFjCqVpEwvY4f2ue1Kog6K1Sy1k88iZJaY3up",
  "key26": "45DtvWNVxj6BeKYsxxEJV4KS2HnnMyMQXaczS2WtMom6VupWfvLQKW3w9FR8gitMHAb959HFZJT18QN6GA5UMwy9",
  "key27": "5Q8xmisYhHVSAF8qwciYzLXFDLnFWinw6q4hnMe7QhcUaSCgjSNfd2EQnPkZ4ujGzcJJGAECuSHmfw8V12rsQP6g",
  "key28": "66bgCwbAPbR6fxKvmNyEQw1AsudFfwWgwpy4F89XtckPPE8GiQnwRkTFwYhhNHwV49NfujJ5RUgJ9Tywtg5HDJvV",
  "key29": "5vX49Lga9ZQzVv2a4eKyhRhcR5vCqp8xFDCaf77xdmAHmuSqJUh998Q2ZQBGJXfQzjpHaPcyUT9dgYeVVTog3hzf",
  "key30": "2EWDANWQZAoTRDmpw7wWmqVHUwayUQaFVQqjLQtH1XB6gFT5FbtdAJhSyC9GghYk18c398RWfFPi8vhzDsqvtHNy",
  "key31": "3h9BMesXe68tz6oeiJHQU1dTTqGzQZU2jy8Pgj8YghBp546dKEq2EWCTUebQmDCDFyrA3cVa2h9KvseatXsXEQqB",
  "key32": "2rsSLDTMdf7d99uU4okWNjsGsVJThCCpHRhMsjx5h1nRiLVGyGEsF1xvd23oeBfBvR8Z4PUkK2CH83gr1m4uxuY4",
  "key33": "2AiEMxettPF2DMrTtNAjWhx2zjN7bWnuQ5gBUNH2kC5y2bmsyDb1MZRiAeNyBubXbCR95k3nWgSVHAzaTy6nj73L",
  "key34": "2RRHhnGEu3p4wRtsCwaqftobXcgoouzcjbbvR24q5ZtGDKCFQ9x3eGSQYSQ3UNYQ2KXuhYkCuhkfShBASkVKw7w3"
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
