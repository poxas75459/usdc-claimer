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
    "66v3rXe9sRf5cuWLaG6XFtbue3ngy4VZFsEbVjyzFvfXC7pJeunFjSdj6VJSs2Bw58ntSD2MKY8vncAFyU3U43ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qqN6naRu9ubWtZak9Lc3GQuhEfqBSWkHbN5Rb4T3rVmdxxjUfKJ2cSMDTMagJEJ7yjbKrBCcwNEZw1UYUdHtfTa",
  "key1": "5sm7t46TcPp4iDAbjyHHH6sD3qsuLfvjfZYQvF9U4StZhmPKjoDy7eNAg7tkLxHuj73UPQRE8VbFBWJT5jXYB84R",
  "key2": "2HrBDpWKUoME8RWTJz6GnR9CJsT6emNHhq8X71H5bw4DqHy2h9c22hRr91rCvFZCTwEKwHeX3a4mdFx9e1CtGgEX",
  "key3": "4wWSSw8UmEwZT3Qety3wV7VNHuwLrFS4opAW9w4nETomiLdLs4p3ipe8up4WRHcLrQ87NvMYnskA8UCb5kxyNvrv",
  "key4": "45k1NHAHX5LFgQLvRYHSLgZQRrgcHwLYq9fyGo9ANBfQFtGKZtzLXRJZcMcLZrHKAWv4sz7HRzfieUmtAfGv7H3D",
  "key5": "25fv27vqDVo51nCNUdy6zYXjTpJsyUm15AEZJpWveyM8J2HtYNy9WscxqmhwLsNzHRvWtwHNVVF5dKhh8ZAvAuoA",
  "key6": "3CzGkfMmr5syQea769wFNAtvpJHRBhrJXDGDNVyUqmDTgeReytyWJP99UhmDNMXyHvgCQUEa13i5kKBU9ngcxpC2",
  "key7": "5e4UEs39kh9m9DRqm5mvdQhSsV5gpkRd4Far2DxZToEJnFM2Rax4Q7hF2VedB3b9d6qjdYfvMukG73cYmWjRMDec",
  "key8": "4LQdeTmCE2CQsWDxxEAzi1v3bsYVjqRPJzyBStidjwbCs3fqMj7UWJ6VEBxMfFDJcwx1yz8Xz1SS2P9dV3Rt8FPZ",
  "key9": "3JhimkmHArVesx2cbMoynMbsRrVSRSkZ8aFg7xReT755uV2D8gT3X6CUkzfcM2FKSiCNTjQ7ecC8qqHFudjXFfrA",
  "key10": "4BZqpCbGFrMbE3vxQNcWp3fMEC5nBr7PWEkYxndNjrwjSX9ubhpAUztUh2BhDoNtjTgXrFA7KCn8ytXSe3oXTnjn",
  "key11": "3Tqg6YkZYUYfjta5HbLcQPAidsdM7mtbHAv31ym2wwbfYF5qaAKvrRjkGJ5Mh8iFMGbo11CmUDq6KMG5VVQV3smA",
  "key12": "4mLCKqys4PKeCbz3XKAEqdZ7S8nyfzRw67B9SiJivYdMgoNz12qLU24er91p8Z2iwF8AZW75BLPcuZHfB6AGsUar",
  "key13": "4KpVkFGWRwzfRnn76aR6coNQGjYcgCnKWJ15AsJZwVB38LiPraBcpnmGG3LK5HBhavrnRTX5V8xLnfA4yFAWW5Z2",
  "key14": "gAtvLU6U8NP85BnA4qUpxN4vdRzWcg6LdeHLzV8xgkhRxA3tXizVeKuhZgxL1esSdtzZ1ASaS2EtXcMeagHQPTb",
  "key15": "2L2VEWWJYnNkMdfBdBVcQwXwJy4SBF1rM9yPp6oFKLC5EnVzcu4EVwMeTcd1uvVrtmUWZWYymHrJtyU1GHJXLsiv",
  "key16": "54ZDH6T1srqDgFLseBKeWjsxiWrwUSCDpAFQs2BWSywQJ7acjmdY7ENMCBu8vcguMxcbvZjjT5Xs5uGsjaYaz83M",
  "key17": "42rBcrre3Po2FTGEprJ4We7ydgbcTNxjSvp5FbPANtvFMgH15Gy3oTfCtwChErLV3cPotTJu3iSLAByJMHSsP6kQ",
  "key18": "5YpZiByQFbBdvq2BKst9D22ZcUeNx2fXjkmiXWtwmW69wfe3kQBGrzASNSQV2ZrfohRNeg8PiVBVfRoHeeczJf1Q",
  "key19": "BnNLePohBhQL3VUjYBrsuBPqLdhxo6NYyFCkghbaG9txqoACEEHoTLC3TkyUqtebscb6baG9R9xphnNkivEZ3Br",
  "key20": "b8b13Vrsr2vHpiHjBRRzMaZffoDTdeu7CCXScEGVnu6rhgqMqNW7vAZbAY3u187R5uk3am94Ew33eDeKw4iJ4vq",
  "key21": "2Wb6LqafDkrJzTMvow5idn9YpQHrW4jpUdj9gscHXa2Gts1Ww4D8aJU9EkT5CTihgXJbHGyxt49apz4QwhQCpS4h",
  "key22": "3wBtn9vq63Tny9EeAyxowHpyMnhLqZBfTtMVnZrHx7GgVYr3kctphDBqB5HL8uYCS2LjdXjXSvpywEjcmq1P6wc",
  "key23": "ycQpzHGtv4cQa5pgX4BMzw4ifoQ2xJUVMV6tmYYRiApZbAZr5eG5TnWb2Ai9WNdAZh6yWMoxej937iLF3B2jaNG",
  "key24": "2h5SBTU5UvjfzAJYwNm2264LFaV5xZCsfzCQ3MpVmd9JtYgmpP2cWCDu1Z3CxN2sSY58nbKBDe1LVnEG9FQCby2H",
  "key25": "sjhHBKe2x2x1jizN3NqfAP16xix9rSdPaLxE7cfZ63okAS6HQGZLoR7jdi5DfpjozTmYsWwQbEEBCk2wyThM3DG",
  "key26": "StX8FcZUe5hAwxyfy4UJYkmW6poe9148bEA8AJtnYEC7GKY89ph5wfycpRqfMq2ginZVLDucAiHv3N2T7URMNbn",
  "key27": "4sy45e7UMk6pwFTK2wrwfW5vpb2ZZU1c9k9c6tcgDfy45eiEQWwV8CLbsJVfXwLZKaS14s6KiCLpWq6rUQFMk4q4",
  "key28": "2uajp5ud4cjvSNSHGBWPPHcF6kVsQBjuHKgBmLfgHZCyKz9vkPBJ8TqRT9Bpm2y9zHnhbDQ4ZeUco6FsWXuBrsur",
  "key29": "51L7EY8Jcq6emLA6ahQAL1VeaP7rE1KBmsJNs99ykUGhi93dTv2RUbVr6k4a9fjtgkhPN7GFodBbzkJdU9f2SyeZ",
  "key30": "4uNBHaPrnNG7sPobyA2J2cbzwDZaJLcrk8tr8CwH9EvFH4bjD6QWPMpbvwRSzVbyuYjbifaqotvbiJJ38io6bR5i",
  "key31": "4EceBhCYfR2rTTU3qxYV7jSQ4CH6zPACxrh5Fpf28hhpZwib6D1LfABXuPhiwtd98vkNPNCnT4Bm188Y7zG2mu9V",
  "key32": "vSb79pQBeSGmBr3gNAyZDLa6GrophR8ZiEjJuVcPBdLuzQ3Cy1B7NqjozEMTwCPU7aZrtdKLq5wU4Nt6rYrLPX3",
  "key33": "2aFqy6ncYBbZmEZvHvTy1uM288v21nF41yDbMfRYRdduexSSsfJi8FDvHrxD4gnVs1hJySvuCpob8DvnVNT5foBe",
  "key34": "Ss13WcPYxtLQ9oAUK3CeBJ8kSo3TcA9kvhUHUJ9TRYfXnWoV3sr595JcVL4fug1njz6j8C9CrxKZaPSsHDHDcXD",
  "key35": "3yqYbjn2oRiMBvo2ZgVUTWz8E5khmxWsce8oMTYWLVFbnBRXBGoU6af61tizF1KPCcWwpMNv1wvNkfMwySBjDUrt"
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
