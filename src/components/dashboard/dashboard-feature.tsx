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
    "mFFZnaWhy5thXEyVEacDXmeYZAxnKXdQDuT699oWmVafLjosKLShPLXcmVtue9TTb81ahPMxvxymZXM652TouiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CfPZPCjupQyXybRBB1vAZeS3FaN1SrNTJLSJWnQ29SvxVZs6xZzGVZgV5CDjaeoijmPF1191runJguGETfbucTL",
  "key1": "4xh3TxAVgyArrDRssjKitBTnR8jSCf1pQmt3yHyP9ymEuppHvGFgyHV1NLhtich3pd777jXqnFoABS2ZbkfQ5wRy",
  "key2": "2GJjJUbUhzD32uKWED8yBnZZQFci4mFiBK7SoWHjdx8X5hh8LkumAKnZnbajgjJC1RgmA1jGg9o8K8d5Gne9Fw1f",
  "key3": "34XgKvoCxzrnMVoWLHN9ACQnXh8SLB157bWsMr5bK82g73mqRVCWGKENCLw2TXSrCbcnQ4vNTmvJZ9crZ4pM8LRX",
  "key4": "3wS8BT9DdPQK18DfC4FW1GtFzGwymCdtTxjnET48csrQodEbwzPHHpHv3hCoKKPCmALxhom5KJQRMSX4fhLeC5gt",
  "key5": "fj34XMSx6YH96iWDhHF5kkTjFgQX3kfazNpKyp63are7TXqGCkdivmHDA3JeFfSNL96PvLXJVqBLNmUomtVDCKf",
  "key6": "5GCfdZD1FumJTdtEfr7wu9zS2r9eftNrb7Sg1Dvg1zw3kYZcR3pppLpTtNWU4mzHmCAghctuFsuD1qxmiZgpa3J1",
  "key7": "4iUPVewNV3wGLRGaSzJwpUU3Kgp3m9g1KEqZ74uQshnqo4jyk6mtuVTHVbbQMwBQpEvVCnKxB4NJXzhMQqGSWBS6",
  "key8": "32VdB73WCK1Xp6UsUzdShFhe7Dz5TBgxVSDxUaA8w3PgfJtXix2fvBZxBtdxELkk2bZWtQa2tJrmCmjsYCZ4tPWf",
  "key9": "5iCRBEkpTQPMfADcip8tU6kbG2zCZFwpST9Am3B3j6aXPtCtUskFxhTCC4SpyhppGRwo4vLCDFtKwqghZN3kG8v1",
  "key10": "5XM3XZwGQ6JD4vp6LqyVH5FNbiDV9n2XCgmFB8AQuvYpDPLZX4HRURk8jQueKWxF3JKrJzGXN4NXg214nHs8UFBP",
  "key11": "5tw446hZy24nhfWMkM4AcWUqgcJRPPZYwzE5G1bdM2LLSYSG9PMUgbqRniF29P1QaVQJoEVoheuU9vaZBaAnnjm",
  "key12": "5RzPmgAexwEF1PPXMzhvFytbYacrGdkqfPy5MCercGLQma1QRBYjFcqDRqShUkKbcTaYg2V4gaPBjotBRHaVhnhL",
  "key13": "24ZTQSUzz9AymdsCHKav55BqsHCgEvsimgHbWT164o73EJmWp3WTuEeg5Nd74C9oyRpjGwM8KR6UCNWx8274YKq7",
  "key14": "32rLC6jzgUsMtvLvi1Q4WdqjGcFeKrfVVQrgfj5YuM8ifir6AT69T5cXesc9uRSixHeB1dzoudJ4d6UHrrt22rdP",
  "key15": "wE3QLzwtx7zPrJydZ4TqaqYU2eX7odoGAUKTHGNUU3qLLS9YLPZjyhusvCrTVhLzGTvF9GoPfS69pqczHFYdYoo",
  "key16": "5qy989AtCZgeeWXhfVHcGPsXrAs74q3QMC7NBDw71wKaVqNqcK4Mx29XySkbLhLqyFwLP6kvyKea7ZVWCQvjvE8d",
  "key17": "3KXZaDVhLf5ie91C1XtSfFUVMghDYu3i2vTCiEAknDTTf6a18kQnqXhEFRnq1dbdobZA8rUfUJMNqCbYMPzUFGU2",
  "key18": "hqTqfA7yNcJM5BLZdyJEyw4h5JydrSEh87YpTMow2H8GWvRLaJAnLjqYAgyLz84CadonhC61iJ5eLKmiQD5cVJh",
  "key19": "GZrXfo64cbf9bfpbHL5q9zUqHrqpAWKfkAW9Xg9A4BYfbWq4YDWTzWDM3Z14iAWcBfQM9NdSqtpBTTWJ9R75rV6",
  "key20": "3VD1SgdYvJ5qBCyyJ6yhD82GRJPxrC58jXUT8VLxqeVjyZR3Z7GnSB56nGZf7eMCU9AKBbBB4jH2gzUDNiLDnCv4",
  "key21": "2N2NW25t6aZ4D3mNECYnMTtvQwk8wRu7JVYedwx6mvT3w2FyRhMxJYvh5inXiA6Xxy8BXRjZTYS9RiMbzCyabbBB",
  "key22": "nTU4sh9pSUXbp7mA3qCLJMhmTHGz69NTGMHrpjDoP6UngETV89ycz5eM1Bz2gD1vEVbtxvgezfysJ8V7E7WKYWb",
  "key23": "36xK2USBFMYZKqpdCS4ibGtJ4eHmqwdqjNTB9bZjeLobW66REzqG9dcroGM2Go1S8io97viynQqFPD9FzGaLTkby",
  "key24": "3bYq86nCi194RkkaTXvEaQqp9CKBmEtGsuivyjHcmVfBRHzCovNgTvwVA3N1MkGySTav37gC4iyknpGgqpXUuARm",
  "key25": "2CQML1sF39sNh8hhbacexbRSo7FvC3AangkvmAjR7VccGKMhKkorPBSoEsSNYSkkBG2SCydPCwA6ZFbFvA2w3QqK",
  "key26": "3YjWmUCX8YPrMSky39yRW5PYSPe46zMgGrNwmg5WDsUcDKiPw9NoAYU5MQP3QLpUz2uLwVE7W7YPkXeowJ9TzwhC",
  "key27": "3pnz3jdQVj72k2VpDfqwXnwaGLztZqDLmQL1F2BBVKaocTCdbVVtsbSyNmwhkFS94GYProCVZbuFkCHAaMjLdNqo",
  "key28": "ALdd1AE4uHZAfRKzkJeQxmSSde7tHBVrs2MH6qQjL7QZUSH1hZqg4LLGJQ9kYvvnEPzsa8y3nLvfvvVT4qLv1KU",
  "key29": "pDjWStj18dAXcBkvmuD1kj39LZxjjsvAmmqowBpBxcuVC7Y5x1AreYyqCTkV6JVtVFEmRuEfv5s1cCdpSCp1exm",
  "key30": "2GoqHmMkDax7FdzvZiubHMBkveHb8YZgXTDT4ALP8MVh7VupSRuXHNYpZghxwpKtKBGksipVcxaAU1GbZwyoJHJ",
  "key31": "5EDVDgrvSFaiACXT2VBXFbSvvkcuCc3Vh9ZTZWTfXWQE83HBbHigs2gB8NLPAxBxgqsC2dQjBDLqxtRgYoz26yDD",
  "key32": "3nbbPKLsLYSzKRWfsZdckxdBq8rQfLR78k9TbmZ1BtANcZPoS9mhfcrFUNCCTe19NwmE544F1Bfaau2RaQLXVfWd",
  "key33": "4HWR1U8SqtPRwZeN3tn6zbzf8iTovTfEbfAu447VZYoNKLWdYKBd1rVAdaT37oMUSx9RZsoqSd4T3wUjsH5V4N2U",
  "key34": "4HztSqh8RGmmKc1qP6E8MTVayuwnjdNt8NS3dapCp9Cc8Cya9Cabzv3xcnTLi2rJvMgJTb4Tf9uZUBcgA7rHfvFs",
  "key35": "63Rykx9Jh2p2QKED3qULogBMX9KP3KBxWLKnbpA9d1tNojCeyssfJ7Fduim8oKuJQa21xHyFqtivBc8WjsaLcKyd",
  "key36": "5AeAhv3szY1C9kNKoRVUkvZQ52GQVxMj81J6B1RxMiNkmYHghpGAjrQ7DiBWnBTw7Xc3yi3vmmB83oBNX1qKivVU",
  "key37": "3tSoSZUhj1iAn9EkwwPaFSU9WxMkFZYLBjsSvP6LTas5qV1w5z3cL99uqKuEJsb8kgpTeCWA5Wre47vNmKT6mRAZ",
  "key38": "StybrUh4Yt5BWV657d8sfwDyqtFJjsp6sYioh3CYjEdzSenneDJVL9fadmYyHksTwag84xm72TXLVBTrpH9ASHZ",
  "key39": "61x4yzybSKQ2EwuoSf5XzeKBuoQyMYZQEBqYYzmwqYdwouHQgaLitH5zGHeLVaZ41MeuYoFGZkFrPPvJdTZgrZ9B",
  "key40": "4syareqg7UiBrWz98F2E9GAGb6iehiyzjABSorfZwGkYaLVg8vxQTjdnGF2eLrwJfcspmUdjtrkNaJ8qLeT2FsXa"
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
