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
    "4iH78rcowcfwJQeU7rB8LXng5ExJwHcWuP8UHh4cx57uS4BJsJcLZEGfSR9UgYbMNjP56NUezFqAyPR96dDvb796"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J4kmthcZ6BFH8jvJVMDCt6L6mzmwnW6HZukMukDUS3DBf62rW3DmdHNt6YicFPexg1nHvgq1KwttwPLWzne9xz9",
  "key1": "scyoPvChpWwMxAonpSPeLniR7rWAS3PwTMvgMRMLt58jhDPzjBEho2H1iUam7fzndna984Mm5ymPa5wLip1XhCH",
  "key2": "38tLEQ3WeoMUQGTvrg12MHenr1qkUME2gFB17Vp8VgXt4LP63HKAVAVETuwWZJYFNPFjdrz64tgMJqjvcNJdUrM4",
  "key3": "5DEGcWwizzETmSUGkk72d2kDZ4qjnFiB2qUQhWqHuLCSqiJASS7oofz5hCUom29BJqEgbjaQWhCivBT4aEL7ghkv",
  "key4": "41fsQyrR4oKUaCjiuQq6wHDRkdPj7tFqHiGL5WE9ea7sEnGz2KnWJrK4NRqqEsXfrb3edFokpgYoqhYg6SeaS3bX",
  "key5": "3wVdmcnzpvdr3aR72xvKiqE44ZvzfevB53mycLks5qyrZ6FWB4dCCa27tQFPTxuXMCCmatskio2Cx3gdnhRuB6gh",
  "key6": "kNEmMKavRW6GkFrFn3rnUfnE9hihPzMv9eqiYfascUxc3bHCEYVSiZQkLKrxKVQEZpf9RTiq4YcGaDNRJDhm7HR",
  "key7": "4nDBzQytx6UzdWeGxhrZbB7ALyRmjEko61qB4PsN6ZeD5WXgoseC3buBc7xmvZZbBR3MCzp8u3wh9RiEGNsjhW4k",
  "key8": "2YVp8hDAPGftoQ484bHv5K5twRgD2yjpUpbcy5zJxyaqK3rEuSGoLKZSbJNNxPKvirjvNJrApg139PiKgXUdATzt",
  "key9": "3ruLAUHcS8AgATMRWUbymndckbutjZa4CYzpGt4Zxc2QftkPE7aJHr2XeHNoqtKg4QQWrXmfBz2db6yfq46GYTnr",
  "key10": "3R9oaDR1nqd4wouoRwxVAwUJzHXF11tt1FjmrUiFNpYT1jP2P8gfdskrHs5VBcd4gL9pcjjwJXoAbCK1dLJTJVmW",
  "key11": "BjbMP9xytUmFzdasGwMYeUn4awLCLZ43Dv58pwNYktxnkoN26bVfZ8uqgbsNCpxbHGYDw6fuehttFL8fqJ5aMBo",
  "key12": "ZZM2ycV2p8yQDicZfmwj9XmbbbjsmvAYv1Rzi7e7zap7bhirsuDuDCbDdYgxUr3jy7wrAmyJHZ519xnugwnzm95",
  "key13": "5uSqW2hTp77BQwL1zcF673SDuCMchEQGAFjfiGDhz2bonxkRKAf1186fb27MfaSHizq5AhtSxsjQviFMKNTpDuN9",
  "key14": "5MqB5gNXpkBponE1b9yJ4wsrfmUsyMzV6zF2nkKwrZKBKfLRwneMJuJjYsPPrn8YKQzjdWrr6e5TYo12LxGsSYvc",
  "key15": "5iVzE7uMH5iwRYWLRLMsbegPichL7QvxyQsA3wLLfzCXYmMHWZuDE3ersHxtyQRQAShFN9FZAdWCwkAgsuzn9aaC",
  "key16": "4fDHgja11Ub6HsGhEfwXdqjELFez3Tai8ZZKKb5PDVfv14azjNDsUPHpa8uYvJfGw8HKmLjvesft2rhLBxBty8bd",
  "key17": "5A26D6Mne2J265zJUvN5vgKNXNE3aKYvRPh9uiGxPiMxknENkiaGRhcx4HKmo2HXTDYNi9jnQr4zA4tLUaGTGo6A",
  "key18": "3dJB2mrv7rnDcG22Nkk2WrqdtoaMqb6BSFzWuQC8fRS81doh5gctMg41nEKqEvQXU7M54yju615LHR6pzh8esMvv",
  "key19": "5V7nZ7h9SxQvBxbEq5UHHecvMdbQxaesy8EeirZhj9tA7gyuPTS4idEy22dGEeMuSYwMjHDfLietYwy1gh68ppqP",
  "key20": "48ryf74PY6UHFpqLG6r1LRNWbG2riPNjjuH2j8Dfsc1tKHH3RFCsq6DKq9Pc2txViidd4ihtPqnfY6dnqFqVNJzY",
  "key21": "4zEAKiFFjZqXHpPSkGKcPcSmsVao2mJnMDWV4MMnp5sK9KAPndsyQCBSi7TuG7DXpDhbv5zvVABkWYdYRT3KneeJ",
  "key22": "2kC4CXYRBHbCVRrgSVpfcYsQzrUpdafoQFJm1NAu9kVcFjMFyqSj4MEzGsA8BtsKrveVCZVkugH4EbCAgvK35HuH",
  "key23": "3AnMCp2qrmrtcBMm9hjs6QnUuCuqksLz5rj5HFunPEiF6Wm1wjDKTSgCQrPZ5H3utX4njDm5TyNBEwcAFY7H9c5d",
  "key24": "2yKUTz1oggxU9uZdHkS35CHXxsTP93Y3oGhP3bKzohCbmg1pnmJuHbv25YgBuHB2C23nCCKWvPBsFZvrpqEXTEM8",
  "key25": "4P6iQ9EYDi7akAD72sEG4wChP2xRjbUQQ5tLJJpfdBMFnS4aUqW6gbZynR2CDu2aLipTRS28fBhjRdsuMuRMkZfJ",
  "key26": "4i556kfNuV5AvzVfzywfdsp4P6HcxMJVcYDKXtL5sYcVsvN4ApnCmuCM2P6vEPWGa3pR5nMz23RG4Jab5B2wcFvg",
  "key27": "4ZGmWS3drKpYoyxxd9nf3ArehNKEsWQQ7q8WXVzt4P1QG3hDmZfD6ceAZgAVZZA7NLT1dpuwFirUEh8o1qFKdzwn",
  "key28": "4KuRYjuP1Q4B5otiR7orAdyaTaDcu7KQmaFFRpUcys3prfFb45x8NPQBG8Cg3dJtUxF7Ja9sEPFiScrhNvTtoRBL",
  "key29": "4XgLLxP2GjNWDkZeFT6wbonFM3ZhfAngKdZfvzrirNbXabkPNv4p71CGQhmhAEyusEjsUy1U5Dz9BSfxJokKzuf7",
  "key30": "2WsKTr9N4to6F8E6y4SZrB8kKtp1a1BEUkFXBkoWAjThnafcsRtkMFZHRKz1LRyCms4sge9rHQoxBrYuPpZjF6Jh",
  "key31": "3bqyZtVt3JKnZc87ewafuTmjggqG5qMQoFXMGYCLA2wQkjoAbwdjnmoR4skff1WBRRd5ehQUAtEtkxZGvqqGc482",
  "key32": "3EFAZUDKj4s8KcaHBuUAjojdJwgtXk6fg72tmdrkMAjHxZ4hqhtgoZXJTTg1iegp3HB7PJeKp6APWXkoSQ9TwHP2",
  "key33": "2Tz43ztHinegEiSpMt4rcDjaaesTwQZUg8UbiGam3ypQa7gcCodfpsu9GU6EjXPuxtDzcgZsyend5tYZVng3SUD4",
  "key34": "2LPQ9ifGbnhzeMwEK68AYv8YxeBQcDuH9v21dqQ1BYFv5szSZi65FNnpegbycES3wKYi9PcQMENkPj1njhk23RdQ",
  "key35": "5LHPJ1MWJnEiatf98bXprA1bwx3xn87Jm9GfV8FU6ci8Gw1CzgSs6iue7M1AbMFQFaeNYhXFW1J4rAdiAvyFYLFt",
  "key36": "3SGjh4o7FdaoQpYUS7bQxYjjdBiYkAsef67cxP85vduN5GbrTRNoc6Rw1hXdD7DRgUFMejjwNUe1gBjSN3FoFz44",
  "key37": "3c2FJrozeoqGvAHJzoY53gWWDMeshhTAuVyxCDZ9pdprpxDMwKbepXr6u432x5GHdMRGWv5gPzVq1YC5PeqFqmgA",
  "key38": "5KPTBRZNavtmyXQ1HnF3DUWVB2VaFMc6WCqzyVU8T2Q8sSF4LHg4u9C1Ugpsf34UuVaXiqq2qRnkFRGNv8SCjCEf",
  "key39": "7gySRZYLeuRw573MdZnCWKa7DpKTYu5hkhMsqvqpKxw8rFUNtDGZ3whovH6Uk5ump5r7jKxp9PZW5Uuv591SVoU",
  "key40": "3ykePNqp6LNVDMW3JTkkDjR6WkdQVyWK4i33pirQ9Wjv5B3NmUr94RVWdwdW6GPJbpdbrhkjTGEsXe1hSH3b9Pq2",
  "key41": "3rw1nhCKYHUPBNqeM5BXqZooEYekRnYWXZy81pJT3rLzonoQbnnmRPvcJ3KZb4kdY5CA9Lg4KZtLkdvCMPmcF2ST",
  "key42": "2svFbF8kRhpXThEjGkoAsKsqDhaeo5m24CtgUWgP2ZHsbQEyBmSv1fqumuybkZDzimrGUxz1kwrN3t9kYwXiHDPY",
  "key43": "3KJ2WR3y2LS5a1BDxWKnqq2kz59i3XgBTPrhmWTUfMBWvtday9YePZ428zJQ72EiFSkWwhaMNbYawnaqLcphuZhb"
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
