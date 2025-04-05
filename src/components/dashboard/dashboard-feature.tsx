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
    "2ovM3WdW4jrnoxGuupn8uBVJvctP1hVDFrbqCiGxhP1z7RqDpWhPRHm2YPhjkN3JcB1YNzRJKw42cQtTzhPXid1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VWS2M1UN2o5fuQZdKZRJvqgWBCStCDHy1L8ZirPP5JFgy7jUKEMErgzxcn3ssrJuBmCJ8xv7ZfFxFKKy8BBh24x",
  "key1": "399z4J3vVbx6b9FWHppC6xKWQPS4Wjs7wVB5GKtRk6TLV1MJsogETMj12kStR91SRcc23d4jto1AFpHcNMimCLjJ",
  "key2": "5aCMdoyCYYyh21MmHZLPtRJTVsNq5RRYw3yzvvT6HpyLTRHUxf26gXoLMt7vtB3ZQ75EgeSKN2BfgojAaZYVCUzc",
  "key3": "2vEtbNBw2zUrvTHBCHQQShRqW2ogR5nybycPhp1ZGgPZ2ZoA3hKWaNnYHmhAwLPL2iMakgjZw1GpujrQSiw7XWdh",
  "key4": "5XkXp2yaXy93JcKtqqhXCuFgeRM5NnC6zKXngSSyFH48CKKCKPCt57nDY2Xa52ZZmmrMmi9QsHSnU61rxCqTiQJK",
  "key5": "3XHwALRQiz9eHTfN2YDzSnE12jTmJ5YmVGdXVHJ2a4eCfmXef8wxqHMmNHaH379zpWP7RoW8mzP9iBmdvtMq2gkK",
  "key6": "3U9ju8iBPFztWng8E6iRcQvfPYbRR4ubc8erQP1G2WQAw9hXMA5Wg17nzySXNEg8PVNN3wMGyw6CejYy5LGBF3SN",
  "key7": "5tZC8thUivgUktC9LwpXNvFjV1a3wTUcVtxLbqxyiv4hcb5j5M3kbWR6DZgrb8zX4U1kbS7KvubrLafD67BrAq2u",
  "key8": "2bkCXAUsxaHH8RRhVJGYSYZfn9EZCbTPDsD6x15UVcT6LErfEr9SZczGV46CcDFh5xbRnhZL9Z9U9eEP2P5FfYRD",
  "key9": "24shidbwM9sy51digAfXJvCoZG4LU7v9tsoubURPsQoqoKPEv4AMY6sqWDeVd81rdPWNqnqgpETnLJyAJGqNz1VD",
  "key10": "P8bAphEpqWAFD33JgVZSqP8WTm24gn6zuNBgZTc9CtWMcPoFBnEBs3oPo9m3TmHeYsKf2nYAc2qYLYwjMYGqUWu",
  "key11": "5BwV6ZqJoxoQSz9BAZbQHdS1VxTJoo7SDjHo7ekyNVENTh4EvXaPARTMGc1pW8FDjewzcb8ZyC8kpwJcznNdgCvx",
  "key12": "38Z28RR6KHm7wr9a5RUb35pHzcFbaLZk2DpeQ5j3hFwdz1tSTuUsxd25Kxk2fiWF9LU8vvhVY45zr3ZEY5KxV8Pr",
  "key13": "3fnmySUZ7LMoKCBJ4tLtcRnd8r9YwmW6VjZ8pTBznXrXidtcDDVZJuEwP8tHZvqsAVHV6mDp7ecofqAnNSJUHkTy",
  "key14": "3DMiTadhCCmdJKKmx9rSKDRUg8NBbsYkdjvyMk7h4uVnAnma2Nf4zfLn5eWDneVjM2cZJCshE8nBnZm6cd9JEmhp",
  "key15": "3UHGMU4RaBLAqGH6dAKA2ufSbdQiatYbw5WauTAQHAeWgiZMkB87AjiJ5boYajJKQ5jBwrpmy7zthD9DzqoddzdQ",
  "key16": "2LCAbPLtzZtDw2yk2DWQ4RfhMdimUdMf6b77QYu6S6mDyUYeJ4zG2YyGvegtq5xC2VAKui8B5zNayzvG5s9CVX2y",
  "key17": "3dgNJPnGupUQpg4a9CPy1ZNH9C1H3am72pnp2ctCU1UyHrxayqtDtKMEYumNhcw6t6kV8SPidRbbDHEMUGk1cru3",
  "key18": "549BPyaNNu2eEtfSfLJRcfTvDKDD5aFJ94DGfxvn25vV8ob221ijDu65258q6mBwDEGMW2FCvYjjh2RSp6rYTHiC",
  "key19": "4KbqVRd29Md8tsRVbrJDiE9Av3F75veMHUjFdzTY72Sp1PZQh6B3PsWdyJPWCyWLHVZKqLJNqmBQ5hHUYDN9w6jF",
  "key20": "5suWjnmZeBLthJGwpoXBode7RWRaP9x4qbo6zGhTfzXw1weesprPWeZoZcdufivq8KunVALnkdHox9abwVJefhqg",
  "key21": "5nPyNpYZEkmRNHR3rdf6zMtQH9h3vJnqjV3w99JsSzWnzCf9nhTB3ZkjbCLkiwM23MKVz8F72hkHfX4SmkJkzG34",
  "key22": "66SpanKX2yyRZytkRTDP48r8BDGPgpMuRDBkoX966Ba9s7WpGsy128eKq7F4Fz1tbALMD9vrE6jHpkVzFbnXFCJX",
  "key23": "2zcHpVuwyZdCnKCCVjvqgSTyqjPXUEDUCdED1YH9rfndCs3eUuNeXXeEwRAvxniuGcGdpkovsidQyZQxj7FBbNJh",
  "key24": "27StdSqWTjSkkMfKdB25rLvCAVHScp2vzxobNdNoju5zt2Z2L4S2TgymLMCe9Sn2N9WZksyYtnqXH6zB95wgYE37",
  "key25": "3mA9mmUp3RR2v4zTuG7n5H7zRdMpPDDnS8px3P8F27eV8m2peqkZ58BZw9W8HTbwMZn7jk9LVtdhANMJDdh7e4tT",
  "key26": "CsSAKiZFeMfgnxtr73WSxWGwfvRf8M2YvSLZiCRNRtuuV1TX9d1FfQq1CBxqyPZ7mUH9TDmQ9Lp8MdvGj8RoncE",
  "key27": "qLUowWRcLHXbSpC5CF6V7jPL6cUhCKN8uzqqCBrxqdvrcWroVRD3udt8gKtHz6YeY5HSwrs54BRhdx1YxhVhX2i",
  "key28": "569E1i9U6v8UccAb3NjwFNMm5tKKi2TzBVtPjZmfUX8YRnhZwA8a7PotEAY48LPxTWNY1PX85bttAF1adkW1xfaP",
  "key29": "2KHaHB9VNzsJZt1fwkGGKxaPX76EUvtAD2jCSAchbN3hRfn1pRHxxC2JkUp4rykg4VADtYbHNgem6SqiTcfjCm8p",
  "key30": "bXM28wDrYtnYaRgCcYpYtgmocDSzc4EmNuCHZFL7M7jbsT6GYQHESEAqYPmKvTeX8g3ycXqwqzTRGTrY2fFw3NU"
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
