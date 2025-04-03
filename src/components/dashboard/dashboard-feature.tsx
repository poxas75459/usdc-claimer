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
    "5Hev7wVm97XVNLthEXvQMP8AyNEAcCJiX1mvuAWY7WgWzqTAVLyMtmbcTN6otfavrh3RrBums1gsRz6EgvVGcigU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MiqVVLSRtTEvVkA7FmMz9wZH9v8ZBvbys1MiRb9cXbv6mFiBV9PSEXRwXbrzyVRHSfWVv6t9MUwYCn5k16H9Y99",
  "key1": "3ZxzocaeL1cyAjM8Y3NrtqtmHrd25oYyP4Atu3HWbArbEyNHHt4GR97W4j3B3N4uYJJjZqFanUTr9oS85YHA2X1r",
  "key2": "2fW6ptsANBkEwtfMTH4w9mrjgMqXwFYLLBcAe6EfYAPRpJKSCYQdfDuPzJVSkACrPLS8RT4YhCK473ynC7RE2jPj",
  "key3": "3iZCHiVjdjvq7gQTSwco87SWqVSpxPjsgjacabLitkFijd6pedr4jVGCpD5tSHLq72hzDBDrsMkhE9P99551x9te",
  "key4": "3YMMDpyjfyoVkh8shbxtNy4ondKn67ooe7A8VdNTZcxn8Bj8dRFuiSf6ZXxbqVDdHMK1KgQuKci7gu4JLc228MYB",
  "key5": "3zvsqgCyU2h999j3eVXcs61hLZgDPFX3rG1gCfnzLRdAZAsY6rFSvHiEnkLHcpAmmYkacJb5rhRxTEEGJDERLPLF",
  "key6": "5Z3gH1W6SwPMdCAPXiXayF9ngWuK3szcwFLmyQRvQy1PyGviDv6wYhULRQkyo6zBxazgJv31AF7RS6dULjQ9pnp1",
  "key7": "4gZnpVeyBUihRNhYpQZ1vALYJXr8W2uJYAQhNUiAiss7g5G9QqyoGWtwRBm2TvRN8sEZuXfShS2gH8RmR1WaGrsS",
  "key8": "5otTc91EUxarwAJnt2c4BYomRaJkcpjrNcCcmPm7Vcv2wRWoufszgihqpoA8vmYs1L3RHJBu7Jc5Ju4csb2R3wAW",
  "key9": "3BZ2vXi1RKVnddyjfiMnJ38Qi77C1du7YqqAg7f52wDzCvFn2Yupk1TLWUzweTMjHhXg7ZV5Q1hJwp6LrnvhaRoY",
  "key10": "4QEBTuohpjcGDR1KdbvHfw2dzrYVimELHi8gyTSaSmgs9J2TUZJB7WR8EpYWKi8FKhXJXMd3rgLaw9XoofAuDnx",
  "key11": "3Q92CwaVYVyvgx4prvktu9HswL91WzjaS2CRXFWEeTqtfr1TvAGxUwKGNvWeL6puRBsQpdzypfnRz4Ubtu48ZDAe",
  "key12": "2NknFfPn1oshQn5TkLzG7eYhgTy3QeqRg1Wx4Ak1dkixdASWNFP49bLc8zoUCA7h5KD6Za7kSNRcoqG48pHfYHFr",
  "key13": "5irpsdN4b54vQtcXqhW1Ksx5EYP1nM6JyZDEvApZdmamPo8BqhNAYYZPoLMU5SnN4hAxm7J8Nbui7tBn3wCKHwFU",
  "key14": "4mAqATjbkS9wDa9od4GNa3uqJc94dUoKn7395BY4LAWJa7oFn3xvKC5Mxj2SWa8qMgRWFfssSHjmeJ3ksatCzV3R",
  "key15": "HDMgKXnX7icyYAkedTu3EvKxTFZ4sazK98wmnUqzayvJ4yuHtD363RX8ELSqR2JxsjHZ97mJ84SXrKbBboJMXYd",
  "key16": "4mf8uYw7JDB9QcvtSZi5wRYF4dYfnMwWR2YUjdn7phTLJddrVpoBWUzqNr1phr9P91xzcpgTExqtRT2PkS7iwyxs",
  "key17": "4cQ489p93VBhmg12pqZvrPgBcanv9UKLw8pxq1KnFkwSGpTitgHZWyDbXCaExj8V5tYWhyTspocE6TnW5mmSJk2E",
  "key18": "3TXV41jp3SuTyop5D2FNWwFZFM6WUVEnTKrYekRW5C8aEN5jupguTfvmcdNAirYPo9nkbx8G5zDoiV2XHcHLM2HV",
  "key19": "3jjSfgzKGzqpzEybNsLfdc7YhjekE7PkjTmH4aiRKQqBZsSECPkfF3irWv6NpoYPGyRaEBpxu55MyYgRmLKMyL2r",
  "key20": "3v1Ncu9RqMZCjANFPsJnosaqCbftaQjr9wgLUzwz9Yr7KBUHJvka9P2nZ3NgHb9Zx5amgiUSQcZBN3QXtdnPEuUK",
  "key21": "3SA5FN7gbhsHao7seNxW66FmZ6pdxNAK5ssgRyJwqiM5qiLqc8zivqN9LvmTeYf3Ycu19jK452Keh1zdxEuVWzEf",
  "key22": "56HcdoMX7pxaRFYUqrCGzuFa5xckihVK1Ab4ZkJNHhRuqbuot8RHQ6x95TN1JQJD7iUkyADkyTa9yCKTUbCCf7oz",
  "key23": "TyoPaskmbjJrRt8Gus29fGV8CsoUvv5x7gK5CqbJHTp3STXh7gsZcfAvSbAWHxsz2u1TvKUdRKFHH2HiwfmqfjN",
  "key24": "2oDQ8unSWW2AKrf4L3WNQrQhB79g81qPGq5Jg3xrRUSzroUVWyMbnCgYj7Jaan4j492EB6dmUHhRArnzYHjTxBEE",
  "key25": "tNkgKP7o3eDEhqLAVyzWNNvRtb5nioKD84rVfyQj4FSiGfyRv4WpFjnsU5APFceqAoeYo5yqaVZXWqmAy9SNVB3",
  "key26": "4pedTnBGEXy1jjZpXBhGjrLTVuKS8mCWXBaZTLg3bkh7mojaLSb6zXTaPR4rLPwY6uCrvkGXTXSwRvNN9gqpURAc",
  "key27": "3PWYmF24huKGQEAZT8NazXSBoabcwY5Y3NrLKftCE5EyGaVN5tcgRfBiLLRbLDrx7fCyzWHdXn4FuSGBfwgNaJra",
  "key28": "5cqKzwBU17MxMcApVsRcbYB9AsPCxGpGTgMcV7Xfvkcq74zbZkWUW47DvXyS2t2ZwZfcsJjro81ruEvpVnTYJbfw",
  "key29": "3tZuXAKw5mQNw3xFQddkYaPr2GHgrPeTJnxzhgDRKENDzcUR3HPrZXnWZ6Nec9sYfMWcLHFhgJfDrBsBGXujMX3R",
  "key30": "Qrt6yiNqRtm1Qt1q2cy5QyAqszV4S8rHwsRjeVBiEsNGXgx1SmQAx8LzR1tudHBZMgo1gjWircAfUUGPqYGMgob"
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
