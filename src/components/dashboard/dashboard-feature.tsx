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
    "4Kyx4grL4vPy19ZhcEGJW2nakYP5yn6rPy78mXVVteRmUd9jqJiSSjjp1u5etuV4P7HASVdJhGfRqH3tWs5ZpQwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z9XhbizWbDGpnw3HG5DEyNTjs1cZr6u1tSxG5M1Ugm2t6kfwJSu7wwJhaS7ksBg72iSMn9u3WmVGBPrhoreZPNX",
  "key1": "KjQaAdxTzrf4y8R331JNigHzxYEquJeEA7PH7CGBazU6LeMzrijdPHwKTzPg1ghyJEuugUanXWV5LUBu4cYms9e",
  "key2": "37r7nGeEsyesCFg3RZSoW4oexYcJgbyvjYNtbyUyLTfYX8qe4d6HzUZuzex92X52DuJFSkDBVXAjcTyY3Mi6qUvr",
  "key3": "2cufQn9ZZHkq4WAKjUNTDjS2N3waGSdpxPQJe2tDkSAyTyhzjGZGusqLd5DEa5ifQDAAhj3aEkc9gJpp8kJcSxYG",
  "key4": "5uKPKpvHsFKbDoBfDrh2CTvbbpaZwFVyvTfkYxam36uoeMjQ2Vdk7zYKSLKuXmiCxGKgdDmEkhMp5qbCMMpcDHma",
  "key5": "4k4YiuUZHABwrfFXpvkGZ5j1prJ2iRruptGwoaA4pJQogmMqgdwowwBA5cp13LU35VH7ydNpkQwM5rgwB3HKoXyT",
  "key6": "qv4ce8oAmES8gPekZAbZ2EAgBr5pY5PE9DA4TsTaCqc989ixjUHiGug6a2aZ3RjJfdxgUFVMNNRV8Gait6P12M6",
  "key7": "pGxZkXuyTYU2sb1CmZYz8C7XvCz6YwBiRQ3dYqNSZpC8MX86vpymSggBXrBNsHcWX7ySDWtxXMfn1TA9cLyRcKo",
  "key8": "3ZjQQ3xtwDYrNZsjGWwdWNAXrTuS6uqXZN5MXrTfHXv6DfpUZZjuGzv1tvL2B9Vv5gmAKstciwiXxx97oL5PDMz4",
  "key9": "4x3RQjmaweVjEs9qE6WjPu1oUTDR8BaJNiiBCCNdYTAeR78qVFAEWtEvGYR8B5Atf2owYvYjvZnHByxE1Vpdyytd",
  "key10": "51gWAV6F4XicguX8EvuXhJ9ebMtR5wWYJPPtHzBBhPu5XgsU2UKcMoV624asGxJ9bkM7TerrK2qDn2s1wo8tRQ7D",
  "key11": "2Z4wApnLySJ7crV1HD7Hp4qgjzH3syM8TZJttbWE6vTxNHBw1S2FbDs51XPco45ykMdx44GZqmRG88LPZBNSnwtA",
  "key12": "rGCebqEUsK14Jsfoywi96hXjZiNFtR23UrQT9Q2dEGy2HVCivsLvU56fVXCJgG9JNPdEPrjj12DFLRFgE8edCyK",
  "key13": "474zmCkA7ZYwQGGk9zU24JrhLfPKEQFfvUakSg1L6RyctuYqA1sYEJoWGJ4BRpCzH5Y7cU6bHEmGyMd4DLa4Luji",
  "key14": "YRqGF8f1Cvzvr3JMoJTdcsEbJeSDGKEcMhSEEUTkMwhc5fUist4H8J26HPB1TKa46iwCohsbtJYsQCMxbssPCah",
  "key15": "GFLqRRb2MiK59Ca9d22bzjVkBtTbZEcZVqpudL8gi6ftHceRdgsurHdB9Zhdju4zc7jZeM9dK8pG7rESYRbFHB1",
  "key16": "3g4XZdwMVFN597FfMiP9ZLcmZr2qS5HnVTBkTY5A4n3RDqV1Q8VBAYeF7ugMBPjyhXvHBDC6jMfLacwyPTpwGiBg",
  "key17": "4EHPVnuaKrZwgANZnP6j2oqejj9pR2UZY7bCHp5ZpvSftKXDCTrTEbmXJLDhx4ikNWKZNHdSLHqbny2NPMw2K2Wq",
  "key18": "5c5fZQJWL277J2517P6MENC7xKGhwd3y4hKSchkwEiYhwwRByd7MTBwWHWgjbW4EQnZmAUfqfKgz8v8hVpupebwz",
  "key19": "5KSJCnYrcNMHDAdrDYnhivw15RRL7dvnnuiP8NL5gYWB3XnXTypPr5Wxv3xhiH2E86ysA6XqRbg8Mz6mYP6sLMtM",
  "key20": "3y3WiC6UM3BdLc6XFYiVJk5H1FZkzdG3excYTGwMSAx8qPmZyez5Com6UDspEZwKxy6m5U3xsK6dZdVBPrZBVBN3",
  "key21": "5QTMbSftBJoRjoweDgjJcGTyzkoziBQXy2GsXgVpq9XP8UDJ5oSFX1Y9WZzSJ4QCRmB6BxYwS29fBTgkhvH7zQ1",
  "key22": "4124SxXq9boayouxzY78u1FPWYx51s268S6Kv3qGM56eQmhy5giCXN2FZzwK5qTqBVAfEY4YiZaprLTsLHmdykYD",
  "key23": "5rC5xrH2HxcZ8ztmRdJNRbJCfaimU9XerY2sMW1nhBYgCuVZmnRo6MhtkFjHeMSJCE7ogCnTowGrqhzVRD7cTLyg",
  "key24": "62N3G5S4Vxodztg8VrP34n9oynreyXudow3dDsFvrZnce4rff3jCaAQRWKHuL81i6W8Hivrg1ny6vSRfqJVRwoY6",
  "key25": "4SpWVZJLzYGqAYJyfEKE29RpPMiEDbZUc7tqm5BcWEuWZjZHUJyhHXBGvuiDBtAFn9A1DjLMmbPjKapwHnM928sD",
  "key26": "uEMGCKHjfkY5wgrfKnRvzw5sWdf7F8vXwFVdDQvEEZe8aCadLMNNQQ65rQ9rD9AYAnroAZe99CAoF5jU1aFv6pR",
  "key27": "3xE9XEMondgajedsGgGecABPKWkvKF9MgFkYLVnsteMB65JVFj4ofCsjyVfA23QumKSEZqxcf2Tsv9cQdF21gobg",
  "key28": "VZhBpXtLxpXVK8Ma1Uxbp7iK7G4wSqzX623cad4zw3ym8t6LDe8aFnrxMrGgAqqb78MuQs4GsTvyxdGbMwVwk3e",
  "key29": "2eFkFL76zTMYhvFniTukgyx84Dead4Rt5Ybn5CrNfoYgwxGRgH9R8ychkPCpTsfKpwoXDM8kHNwa2s2Nj6Yc94mF",
  "key30": "45mRCAm9zzRR2DTaDStTEgLo8GytpcKYRs2sETYoPkCjkvbtMK3Qhiy4Pdr6dvc4zuz8V2USrXrVuUrDxLb47Seb",
  "key31": "2MRF6pp4784rudAT1MHY3xUcxaPKRpYdL4yUnDp5UoYqFFiGuU58LfCRyEWwj2MdKHV4CoL1jwGqEHCHJBkvB3JV",
  "key32": "3gwyACqqzLa8GZbSknxWwjBFAqE6KTA6ZjD5VXn3E8jgM7TKGfReTqN26BcfdsPUo4Af2wrZhQoSe9uB6gcranSN",
  "key33": "5NkkzjpQ6GhszbuRfyeAGkJrDuWUNB85LGGwsgyXR3JiEG93K7QiyW8h5S7q4mYVCedyczDdNDDSpakjFwfL8MKV",
  "key34": "64rNVMWiJcUDcsUhEjXYFK3LwUBu2fAppmzk3orUJfVCCnCeHHuFXdB24tUuwDir4tae6veRGgMZ8UwhoYZGUuD2",
  "key35": "5Eu1CBhj5mT2bU1PMwTDi3t9Cxwik6R3RarkBVYiPkDzv3mQnDfABv9zWvXbbGrUZAEhbk4BFfrQzgMryZAWE37g",
  "key36": "adYWjnvgEyyp1PN2Ecfy6vFtB8bKu4L9QLC8g9MpCVNK3zZ9nYMEkyoAfW8s6tLLXk4ad3MQxnfy5iQbGqKasTe"
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
