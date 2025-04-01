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
    "31v5Z4w2Jn79C3VGsdxHQaeDj6AGDVTZ6XafCMCDeQsDM4mCVyCPLivhLq89hhqe5qZGgKSpRZ1heP3PpzUWeJKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yWqTBSsEAXsUgg72fXjLeqRan823iBuv76YHttKy84J4X1fswBAoJht8YiKKvuVRByUPkfsd5x2QqywCFaPGs8E",
  "key1": "5u8au1BDtUBSUAH82hU98iMzbKRQa1pqqZXkCTgqV1EEpHN8hQrhc3zKR13Upv6xChigsC3pV52RKR2dW4gaLngf",
  "key2": "18ey8kPYg5DjPFJApAQXdPUYZtYSX4Z4vbfZasEoR8U2gfHeg4f7HAGLSFSRBfcSHj19tvaMCxW5Lsxrz7CCs7P",
  "key3": "4d3ow69uzcptGTVcqCNudkqkDuJ1JmRX5JkMd2AidnRrc3ivHhDKYQUsR7tCUEWDcb99LwzKBn24tdA2CTcEDtU9",
  "key4": "5RJ88ruXC7xtwUvPpDLZxsWnit9N91tNo7orXWtfcDnA5yLKzpdyvGZNDDJbvmYAFMiocyKLX2sT3ppU8ZHhqCM1",
  "key5": "4kKm72Wu57iMMBbHuLJZ9R2ncP38VhNaYVsio4HBQpk6FhN5VsqTTvg7MHPx45dB1ffvNVvB2MBfbR5nPchzA9aj",
  "key6": "4JCZ8VYBSUMKfAjpRhaM2WyrBN9LPprA5J569p9pz2o2a6zSQoLNciSsgCP6bfDcnWtuKVqKVJNCQAp5GW55G8P3",
  "key7": "2HiuggvYsBny35QtQMB6phyDq8HgKnTxvJbN8stdXDhVSBvFKGtc5XMX2qB9eRRqpbQuxoKwQnv2kRMymYr8vqmk",
  "key8": "5uN3xg9Q6t7M9ThAmYBWd2rX4vnxZmfuUcGWnQU1EhgcXsvk4w9X9JNesQgwYPCvCE2S8rZMD44eenUzMYTRNrBS",
  "key9": "rXDPp43EZibqxGuLA1TnCidQUYB6gXX9hiZhWhVzHQyfgFSf1viy1HZ1dDDwL89dKrU9reTFZVSCmVTzmNWyCb9",
  "key10": "5mfLTPqCQjPpoesM17uKxYHnzketrsTRYz7SEYMh9DHSxpBJcWBTW7RQCwQxZaYViAtouB1N59mqMpEHoWgmeaZG",
  "key11": "31D5eDSFFsAE4pgcCYQR8zTmJFYF8A7BwMqtvqrdsoBpByc5i4DnBrpoYkFudVmvHCkerddNAwMAiUKEoeoqDoAE",
  "key12": "45Y1abTuaHVPb8AcW1JJAoSVrvAvQDRxjLugp256RbgMcGjiVeod37S6xyFuWFL9fwrb89xFgjEvRfdv9kvfbDqq",
  "key13": "3zCMdpA8HutkWJWF63QhErjJsmwuQMsrFcAvo43obY8rQ2Lwdf2LYfD2wiHDci6gJ45kv9zqCSnLjZ74GeR2CZqk",
  "key14": "4xErcbdqKnVG1Dg5yaGafuZ9qVs8YiCr1AeFikWq5obbdCoq5pPsy1Kv64NH9q8RdncDxBk96e41brvqTfXNjVBf",
  "key15": "25qmVkY8ZD8r4UCKnAFTZ4egbNyDJffUgxMRr3ub6oZSd4asj6cJG1agmadrqpWr6KmookxxDAok979EyZ6mfLJ9",
  "key16": "593LmtbCuXYxGNio6aqd4NC5McGDZy246XE25mo62kjJcvZKdKwNZuCSVaxf8JGFfrxZZ9kzNm9jBS1okK1jyHEK",
  "key17": "2xKnsVCYJ9nAddzh3fQwBftZeXgz5jry84fqt7xv9Pt1JNaqLS5adtagGrr7EdaqEJkA7wZmpBz7T5Hk3jPvRU4h",
  "key18": "53k3SkqDft4j31v35ABTqytzvH16N8gA45jJFHAgC55BndexzZLxCcCY6S7NXcpsYGPdmaGusKJNunDebBTzJhHf",
  "key19": "5HFC2mbmEyfffSVuAeFKPuj4BJUAFPoHHiG4ouYBZHoSDULB7XF46JC8JRwQGJGGuD5EHy5VmvRpvc3kdrxv2ryQ",
  "key20": "w6eiCwJNgZNE8MJudq3Z9mCenvnLxYLQfvL8kj7UZtpzSbeDfBWiMCsA2oVSbSuoCAcGe31ouAs2dhWA4v66D2M",
  "key21": "Hwxi934mYRxNfEoWFt66HnTCpVv6ENBNht2gsbi5LjpxvVD7BgFhK76ZpvU4yYaDMK4eUJL7XSrZS1m3qo13mEG",
  "key22": "2DKMB2Y33QyYe9Y2BVN4VfJp8NdDx8Q4T7RjaUVEkquGLyLy1TE5UCLtfY2uMpbPc6CUYhahkLJpQDMhj52ZjzmE",
  "key23": "c8yVf6ou9RhKm1jPpLSwvkhiGYp4TU3errcmhSHfnwM7gxcZ8gCWX2PwReLeLznR2sCeWFYC59KvtGWteckXWwp",
  "key24": "59QuUEJsiPFw1cGXzn1CiyocTTsqKrWhbTahRrQx5wvrmtMUpVw5TqDjoLZVvwqYYXwodRve8VzRGfJ4SaDWRUs1"
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
