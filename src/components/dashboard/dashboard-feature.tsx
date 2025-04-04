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
    "C7Ymx5uGDpLpoMCh4FjvTocaQYmabHdukYcGHPQpwooeM4EApFtBTwxXKgnACXewW7SvWintSppDMEM11pptnN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DCtx9NbqLBG46q1R7MNLmEDEDaSXfZq57oTRjrG1iFSUkNG4JCooag83kgvp41jZi5vxpaLobjwTqCF79WBB4bb",
  "key1": "4nEqJ7ugrUGRXz5U6PGC9QgpEoT33XP3Fa9pJw4JHGUSmb9F3cHgbAEXo1d2p8Ynwu5GgwmWLyrRwc75gDw1kT7W",
  "key2": "2sF6Ma2YzbTgDsMcQA7Ybig6GbAxjABow8YZMBYvCDUwD2s9NX9JA4YPMtock5DyrsrFBfkz5h3uZ1eFv3dxeRNE",
  "key3": "2AEUfkpQeJHaGYW9vKu9NZWH75Czqh3bUiErpxDRZw6PN8MnDKM3cqfAZPbc8PKru6iFXUrM5gYrfNgEL1cY91oh",
  "key4": "31kn4riDhvUiNAK8vpr7p9eLpK5LkhiatfjXi8Uv54myrdb9yHgHNvpGS3ScMPt4JVUdwPVVbLkt4GqqRMxjWXGA",
  "key5": "Ydvp6nJXACYWF9BKVuAGaqCf9XXToUJMEPEbW9Zo59GsbJZkfKnoaJHzNukKDot4uymhn9Hq3oSLQ85BsyMWZEY",
  "key6": "5x26TXh3373fZsKfQCxPCWg6Yhs55URSMw9vaqE1WUpwufmejzZYDuRhtCLxPp3mbuH2Ek68vMDe4rg9RKDMF4r5",
  "key7": "2aXj8rhoGA3DiQgmPyym2ZyyWyKzzF8Ewog4NE8SmEwHMutmpv9jgQUw8kffB3VnGXY2HhAhBpwkRny5Qgsg1u3L",
  "key8": "5s11s7J7aZpZnWWVbn6yfYRJmdvxLmcoiRK1n5CdiZn6nL4AcxJH1dpCw8pek38Fs2ijY4sSci2WHFpC9j4bJiXF",
  "key9": "55r2WCng1N7UncQNPHzk1yRUXWtbVPAbrCKxrexQD5YeW6MaeVh73L7Yzgm9aT1MgCLULHc1ZTkRaWQLKzcnsRES",
  "key10": "3biJ1UMAnSyvkWXrzFjwogTBRMkRNrVY43fYAXFWsATRrNudKJjYEKAGHatjByPmAWvpjTrxLjJm8VfWaSNVDJQx",
  "key11": "5QN2QFPwmU4mcr8fb1t5r2Pr18u7mQfAH9SU2SQHhrw48hjnvGN6AfdEvPVQPjBeNuJSc4JYbKyfQTWTEax8fM7j",
  "key12": "3eenXm6xrKDJ2TNZvWexNpHqCMuCxZSdBisZ8cEm7N1nxSifYafTiRRYuKpTGCMqB9oKgehzwCW69o9kvvAQef53",
  "key13": "3DZceFFrG4dJGHsLsngjEvXpb6g8ngMEeicP8ZHQHnKq4WaVz9FxzhpL1MArCFc6Uy1WfMkNrgsnKNZnno46nU6S",
  "key14": "2pPeRfveXutq3EhSLadgUgpvuSsREUig9TZ8DSjs5R6FroQyJyZKJ4KQKh7P7rLLjDa5DMmWHnkV7H2gZeioqvgB",
  "key15": "413vXWxoFvwVVWzFuJdEzpjT5iWRD58NppJNY5N5hdxJwgnZtxAL3J4BoKLmwEJSEDvCFTdGpp1nE4BinfBZoDTC",
  "key16": "3yYZusasLFpQTmxjPt5TPkGB9BrTBcuwQumexPjmgAGkV8xehHH7xtEdkxkctQYMgiG8CEyPe7YA76r8N87jxFKQ",
  "key17": "3SM4pVEqYaaYrf9q1tZNnz4USSKu4bpzG1Nf7eMik6A6sEz7zcBGnCSk1rYN5ue7nv5boHdprgGG2W9gYKoDxbq5",
  "key18": "QRCCGTiQGiphSMyZrkUtBS75Y9Vjo6hMcNaJEYDxeJdKy13N617RGEGaJgTEZErLy5o8ec4FTVvaiuYjgqoQtFq",
  "key19": "4mjHD4Z7QoJGKnwS3QFqUn74SC3jUsgpiJQURgd9h886c9pQBCyHa2WUshAMfa8SMX41Z7gy3moNYQTfsJFLpB3T",
  "key20": "4uWAkcRJ1YTTyVYmVs58965vnRKRtF8ib7AvtGVFpZ4yGeFsY9qR3wtDfUtPRrF4kQyuRse86wPWL76EWqf2MLSJ",
  "key21": "2ks8K31tFrvoArP28afiuj6XKrrXjjLjknJPvWXMyVt89mSiBXcNiH7cgWJpaDWPfgmgdVj3DnB1TiFvN98bqaeJ",
  "key22": "2BXXnyLgtJnm9P34MFHwknZyUaoVpikGdw6NQpzowYVoEmYTBqT1zY8dJQhBBYYd2WorAPVcD5kuBbJAeEeucPbB",
  "key23": "eAkqkpu57jWSHFhrSiq6NEf6Gfcvad8LBdzNGWPbQm7QhdHDdny6WRikPhy7i6pSvirg1ncfz8jyzUdhfwMBiU9",
  "key24": "5y5BPu9pDBn1gGHZjBmnGwTMPA2cyZxwwXuu7S8xPj8diSecU7VAB18n3pTHHFnHKA1Pdg2D34XiZPd6ruEfWUeZ",
  "key25": "2P4BzYj1z35VctPobEem56UojQZHXHmoHVZUhaK7mbEdFEuLbb9Y8hFBWrkDMSDvq2wMXDPr8iY9mGpj3Ad6joy7",
  "key26": "2bHhwL1AYpAeABwG8EpKpR5xzub4ttJFquvYXB2JD2DnRNJ5m9DrcgUvMu8Le7mJUAg5Je1HBCwYGSbYG1nAc3RJ",
  "key27": "5RMgxHkHd81zTfwJychVVwExhyenwFbF53zkWdJACSuNdZwHRgAEbEGm9yVFuPCwU8mnjL8ffy1N3aB1hfTusm3G",
  "key28": "23m4hgohHHWFfvvPxMDi59X8HPGkJF3kUHjoFGx9A9WCnjFn95xvUoCq1PxY2opWVyvqD4hx7ip29smig8wSQDH3",
  "key29": "2waqaVC6yeW1tiGoVSSQr5Yxnzx4zoUFsTEbjMXGSzXSWB6WSjhWGiQdQp4ZzFXJRQwENqH12nqzDUeMCFFjPLJz",
  "key30": "ffLbHjxLMxjMqNiqdriUiKREBBXWz8gtA7mq9PTcEbHgtycELmTrnVuHbZT69jEZuWRG8qAwxNBgvkCo9ys5XwX",
  "key31": "53uEL9onV52gi3VLokVfFMvy7oPG3YT7v2vyChoVQJg6GYFw2mA7z6VdauQ4ej7v2gsHjd6QcUCSib61Sy5G3WqC",
  "key32": "43ZMWB6hwYH9RZ86YqkSYnLrKNBg9TTNF5fWUnsks7MeFLsQ2D7JoAzYPAV1J84i9wcu92tEpPjgnH7RhqanDaSW",
  "key33": "65Gyr6rAgAYwQDqFTaAiWJTzLd5kCEwBv6imqQ67v4pPB49qvm7ceJAySypFnAA9oPfzZGtTapfTLBNLVFEt3e2b",
  "key34": "62iWEJ6Fi24WK5mh1Znxxd36jg4gTS57qFXwjFNMeC4PQsZBvDyyvKEtmCtqNbVheN1eHJSszatZnq8jzgMUCtCf",
  "key35": "24EyB3Ti3psUckfujeC3K6JNBCJ3vzMUxDsSAKSVvGUVctAQPM5SDuh54ACWTLdatycKGtGtd7FJC6iLQGd9EfH9",
  "key36": "2vuqKtLquQL3UHgKcKkv1t192kWwFU2EFRqZZf4qTXxMqKYocCHWmDBByvNWoWGu7r4V7Vz3z2jVzSHZqae2HQjj",
  "key37": "ExnKmKLbfZ8qvULyYuqZ2kGiie53wVQ8CcudDF7xJuU6RE6yEkemkmm9eFCRD3FLwTHNMip2iPz7usiku8iES8V",
  "key38": "5AuB9HscN25a9jYZGWwjG1iRdEQWJdp7kHa1wD3sqMYBdaGHyvSE6id6aFNgKoHTcocaohoVE6RzYaa9YyrbHQBa",
  "key39": "3ChoQrKpFLj6sXKXdBKwQvKs69K63eQUb7SGKAbCBtL52QAqcy5vQzSE3HfCfAYXhDRS43vVdDDTr2WzAewE7jLt",
  "key40": "G5bzjwEaGBGxKiuAZTMx3bxwpu1WqVBN3Xk1ea5BRTqmgTpKhPTonQykZtzZBf2PN8KWX8c7989qiLUsuyjaT3N",
  "key41": "2y9ZDNNEQSCZLAgBoM8WEMMhKsLssrYYwpvmt5HSFgeX2YtD1yqjC3T2TnFGo3qQxmXKssiAYQ5yyzNq7SXDbcH3",
  "key42": "4PihvbJ34X6wfBVCPu1cPJ8sS3LPmiq2P84cH1K8d7wD9jWiNfDR1gyuXp3CPvinrjakcdT3jtsqKn7fHhktGm9D",
  "key43": "45UYuG2FMgc1t9KnjkRukmzycr9aw24CnoasbLrBpHxHee5hb9EoiApUrwEiDYQAD33AwtCvzNT9gLiba7d9DYdr",
  "key44": "48eLtqapvAQoRJw6gm9H6w7oS3d7zgcVuUsW6qNPPGuiPLneEi3tGnXQyCNZWw47LcKrT7ar21BaQXjEGWZV3WA9",
  "key45": "3zzPW5p6W74wHkXSthMBsE2vqYwobzSX4SzrY8gmjRDHfooCRctZ1mby8RjfSkbAqivXxtyb2uc484hFrDMUPFsj"
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
