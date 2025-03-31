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
    "ipvearcFB69RhYkCgUqxbKgccfnDq9NQSbBow6FLFUZA7DDApMqhz7Mm4hLiWDMUu7z4NAiwxzxVqehErg1PjTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jCU2KY4QssH8Cktb48Ba8iTy9iMtheGSJsTdc6Vmu4hCM12See6AukV6FfyEBXAataii2VxQq4caKAcQZdHVP3W",
  "key1": "5CmkHCoqLzUuSpaJAphss7UhcFUn9sQ46Z4Dm3ZK3W7n3PQbCB1GFJRAnUpQXEtDhSPjDxeSWKieiBNGuLejWZnw",
  "key2": "y995gNeSqh7fxM2f4FoGbThoZF6MgLkhV82fDbHzAufGUVMqevymgTFB9p4B8usSMs1ihWdva2YoJx5YSo186d9",
  "key3": "4dr8F3R9ACm4thk3E6h26EfxHPrgb4xNcpb18vfavXaxF6Gt3J9h3iA1TBR7Zrpfg6ztRSCF3mSoht861tzScSPJ",
  "key4": "gpJyxjMw3YMR1Bn8JtiNQd3VJSSVp4rtZ2TXRPKDqdfX2eL1Jztm85D6dmiXckqEAnbpQD3RFrNPk82mZfRuVdP",
  "key5": "2KB8sDKeuzgjoPYQkmrdo91ZK98VGCw6v8qLwJYipnao51LDNt9CASiv5XJAyzzsfbRLNnjMyQTHsSXz4YjLftGo",
  "key6": "j5GGvorN18VdVAmvrhys6pd3weEff3LihqPVfbpDgnHVH5N2gZ6xWgqUSGztjKvCkV2vYT2D2BQs9t9CTcMAVik",
  "key7": "nRCrAfTrNnTnUFEym8MCtFDoyFichpD9ijskaMEua8iMQ3hSJgX8QYRvt9oEh9wWGVYVvLRqMoMiy2hP3BsyiaU",
  "key8": "5fSdgyeLHw6gK47Rf6Xjz1ft3Wa3g787hjgrtsDkfhh9MweVgCswkreK7C8QTuJFmskHuf5Ntb21gSN4SqMPdtjc",
  "key9": "5naGTA3BzmhEqGM9ZzB6iqs8C4por7zVcL4z9teugE6AH9nGBQbV2ihzABDDcQc58ecqLK2jWxMu68VPFEpDxL9z",
  "key10": "39dJm2FNcmaRkCYqL6kXJcZC7niuM97kQc7Df34Tt5AokRdP532rUqoDqip6C1vykxiQkq1rXuDL4nX7bYUqTkBf",
  "key11": "3DVHuMdN4jwYmQG2DMTVHngUsbigoT43ekvc2tZuVdPuvXZriGCtJJPmDTUs8PBD2yMJPcRHrpZuz4Tgubh9kqeA",
  "key12": "T83W93VGL5FnrnnwLU2p2QzFntPsbuAS4TntbrQiMf5Yb9LrPKUnuH5VvumA1hu7uPfEKmg4Pc6SAwY1N8bMXWt",
  "key13": "4Sw6CCKAeCzLsBrNY2YAY2fRx1riQ73BEccnXN2GszYYjtVdisPoRwrfCBU34ARYiuN9scHWxSMkcMEGJrvenRAb",
  "key14": "3NouecHgiciwSW6LB65fEA9YJgkxytefoVXc59vaTRtSpR6QPR1xMTLZ3GNEJMsQAHiANAPmNFyMTXTzDmgMDarp",
  "key15": "5tHRc3kaz2tsUaeQTY2kRJNBF5TtL4Etr1wcX4r8Bxaa3v2ZjhhhyR7MZhvzmxAqWJLqXRCuuNrTm9ndx6xHQgxh",
  "key16": "5C7u3jJNvGeyWM19dNh4yUjuEgNiCsMkadW5k4jJ5P3MvctnEirzNSmUU1jTjBhg1ASZwJA6XkGZ1iawv9Jjg1bC",
  "key17": "3MwCkZeX4vRn7S6mA22ENQVt6LptZttzxu4ui3cnoscVHFzzgFfEDj6aW3dSekEJJMVGf8G9ma7B2nWBLL41bZLv",
  "key18": "3SDptEBFqV6AC7fdegmEccXiALvS78y81vYhKTrbgajXffTkbgy9dfzqLDnWCcqtW4m1mxo92esEf1mbTZvQvXnQ",
  "key19": "3w4tks12p1DM521y79jAyigkRQ7sbbKJQwh4GYnZztxAN4YyzPCdcoFWF9BJpokYDLUNrdA9Q1HHchYhuw5eA1U3",
  "key20": "bzkyjrp21KYBMGm69JZB9QHE4WTgWYN5WaQPQrZMaVM4iJcVqzkx51RXe15TLbSYErFLvLhmekk54i6iDg9L9U6",
  "key21": "dgNE1wTMFDTdK5cQEHLxVsZ9gmYDWznRYn7FGmbCdc3pY1rRDJQLt73ojkJ5WW3svovqevhR76KFKEqEUn8QrKW",
  "key22": "2BQuRsNXWVEac5B7fkPLY5Be5nA925CYPhNqUcqC8eDAVLNVfLQtWMgPpWpEHEQWMndYdGkwpBaJwuMs81QVAsnm",
  "key23": "2UJYtqoERHVcPkyFY8ZRFta3RLiQLqupQCLd5kVTDuQSdiL6es69nSk7hfHAMcy1NkGmAoeKf5mK6sg4ZVMR7Goq",
  "key24": "3pPRcpyvNiVrj9qKjCoMDpfpNWQDXHjuLLficgmXitsgWkE2rSC7renvSPvabSSMiSrey1YFenxNSetFP2Er1TCS",
  "key25": "XuECbJLj9tN7wP1KXpBfinhBicFTsV3NuVPc3cXKXNzQmZ8E1yFYLPQFFMFdSxCK9HzxvRYUfCQzyLrbo4BuktE",
  "key26": "2eJequZ2b6nT7P5xLVbyK6UJ7i5PRmEkBWqh3wKuLuBKrJV4co7pamjHjM5o6UhuDaZZNuxY4y5YLqqe5xxYtLJk",
  "key27": "3QkjzvwCezFP9U2ysJofxhseZbsfKmnfYoQQoE9Mdybkcn3LpoycuvL14npvi9YiG1DHu4NQHQHsoQU1QP1aTUG5",
  "key28": "3aizRoSsjpjgYS2gsoHnAoqADuhQsH1yjmTG6i7E8oCPHc5nTpyRgMw4oCU817fDTpMQAnwpXshZJX6WJQAPmM5U",
  "key29": "4tRRZzLqXgkNQ7eLatPQpq7sRHDQxwrBgnX1mHzwMSijVjbEwazsKyZjQxBBs9abhjDNwwsua16kVzYKmRiDK5NR",
  "key30": "YUTnkPL3VRsSr1T6iGugDo9LhvcqkrA9hDwDKHkr65DCq3uDzG1K1BZk716LVb4WYgKFaAsUaSsqoP5m5yvThTZ",
  "key31": "27CGqj7VhUzCjZT62cSEdcha3aMFsoAzkifEMi4xE8mG1E9HU2W2xfdcgLDif836xQHqtXvH7VVfNPooKShEpcJu",
  "key32": "F5N6BuLXvjqx2D6ykMhZnShxYSbEzA1QvZUFpJNQBDLTpXHqjcc7D4VaLsKuZvTPXNUAwfvVfasSPLWSwM2HahY",
  "key33": "4JyJcD2ahvB53mYWPqBdiEpDzobozYkd5yzrK3cG8An1qy4yTWbmxyf4wGGiaZb4BpByjqBAwkv2RWsEZSVyJf1B",
  "key34": "24VQnRfkUorJWxZmEWcRWh6izBEFXnafN4M62DQfo6nVzQU7JmG98utPrGyPz5wsJWE9BgHZgWQd8ScBJpBmra22",
  "key35": "Tdd1Ty5ouuVA1FCW2eu8yVUeAzfd76smYAQm246WGqxSSQk3pkHabV1dBxsfmAxVkcfhtqFctiDbNiK4bsH4DoB",
  "key36": "48FXA5Fc6utnNNA5xqcVUh5r9X2pwRKsh6DzxUoL1hnq68LfMHMTo2VZbALo7U3L3osoxw47eZftGgyr4Ro7zmms",
  "key37": "3bNaRZFwsisyDk4ZRqeFyXq2oBhSm3eLC4KodLJzuKQNYcpvggo3D5TLg7h2V4LkyQk2ZpsnaApUaqpaxCUDFZby",
  "key38": "4o8ZRh1xd6FZk8h2pvNSpum5vq7FSAYi9CyKLrWkCnL25q4cpXAGCBNVaUUPb7pirWqYNEea5WBnL7UqdT17oKX7",
  "key39": "4grSTT5gjpsfQw15bsD6oo3Zw63f9grXm74aMajPFdY3oTTG5aG6Hgxdc5uybPMqTtMXa14eWnxwN11eStkNMdh7",
  "key40": "2iqGAVSENYMT9f7PmSQmUAmAtfDswns5K5z3MpDmgGu1XUKck3rfVEKLHmPPHXW6n8vgibVXYpU9XuW1sZNvMfF",
  "key41": "5ZFPmGmEERo9R25QFRSPZ2mkT6U7QdJMnysEEWFuHBpAUzxRPHgkdMQEFk83V6HsyEJb85qhjhS74fd5ZjhhKf7X",
  "key42": "5bGGakcrtwtRW7duCZ3LR9JApL6BnemvkUdPq4HGaDSBwoQucZbcZ51xCFLCVDvxgsKUrpMHTqSuKEfShEky6W25",
  "key43": "P7kZoKZD9H5QkD94XVW71boJ5uXSfycLLXY3iP6MdtV4nvSNyu3Dxv4HkqopH66uTiqxs7kH1WFbD5Mawf4Cd4U",
  "key44": "47NsAabkNKmrg63aznnhvzWciWn3sAJgPmieRq4XgxLKiprU2yAoemC8HGJ8QDspSbQsWySuiWnngHwhH4DVWLVh",
  "key45": "Mnxh7GJDfb56gQJVYFwxNeBUvfy5gQiwenwwUv6vung9rD1bbQRsnQPaj4uJVydU43rDxFnmoVHs2dozhXUBj73"
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
