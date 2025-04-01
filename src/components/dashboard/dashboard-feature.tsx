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
    "3JfhUC7sGrCnRPHaiKC5VkNGEh1Bkff2PMKV9AsXd8R5jQPPoSeJssxENvGv72qKGCZc9tx74pTaEjARUk3WmE4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ipEBKkMbcUcbD9oyCHww7KV16Rf1GixoL8QxDMkvMxDFNdv9aFDDdBS5cWNcu4bLAepQ3jjFBUyuFzNTF2Gj7wW",
  "key1": "3nuRUbYV6fFzeV7SJptq3cv8Lb47iNckuu31YNNsnyjJLAoPSd8bXvsS3LG14zzms5hNTnVnj3mTcJM7nTh5fHuP",
  "key2": "31Kd4vqDWf1Ju9VHo89Lzf5qd1gQH6rp1E63G5DoHN47iQ8pKfPePGoah2yzuPhS9usZAjpq9cXcbKnyC4k2G773",
  "key3": "3aViXoQn8zNoW9c14hDpsRQCTyDy3dqnaJqfYYhnK4Z8L5M1mTLHk5BZ8S8mwT7jtXewQbh7mXHoc5VsVH6H4F35",
  "key4": "4BdcXsYvYWZt7N2y8ixEZrPjGh8CMTRU48PDmxCwMTz8bqAzSRtDJyUcp1MxRenUP35RETN6SjP4cLjTxRMcvgdu",
  "key5": "5SxhTAeMFmoPuySxyM9nJppNEtKPfmpoy8qo1YmnzLB4PJ2GW7im5ufYcLXwNamdNVPiX8WWrYsTWzBD975sbsMk",
  "key6": "4AbvsiesQcnCwmmuxuZAJop5nEB7ScZSEsh4srJ4FUkaugpU5xUWMJbbQefd69XMP9mPrVVyVexV7DhsrEx8BDBM",
  "key7": "G1ePhBoiz8ECSFwUFXbcrLZzhY8jJoni2ka6nzZNRbuUkgXFtf4GE8TFUQ9k3ZF1aMR5tJtDNkvBEJ75u65eHGh",
  "key8": "GCnCjSS1jVXLhoxC8ZDDWH359s3SicHmUDVM8MWCSHYqwa7bzWwoNt4Vtc3H6LbTVe7CU742FYa2JqS9ZxMZsd6",
  "key9": "334G9JhP4EGqYG41Km8mtv2KdKTNjNXT7yJ2SxRfdcNFdsCGmtEvzfWdpPebWemxgLseB7YpsYgdsZUPwkfJUwWu",
  "key10": "2qxyFu8GvLddMezqq6yd66zus1eka1DsbdiZ3ivGgSARv7Ur9MqzjXHjjCrKQbdfVvjBuo9tyom7sCkXfZdRwi5H",
  "key11": "4wWTLjdZNsikLzdkBhzSJPqcUP1iNBJUmFwrAWbZn3wDWgkifGRhgVJLCPMx4HVBgrHnkprb8r9qo5XUZLNJexft",
  "key12": "3wmrdQCVcLS324ZWDxE9LbUXwG41ZhBsCGLeisEdGgcJdWvtqKkwKotYNpLWnEAKyhnGzPHeQnEUYimPepLTC3RT",
  "key13": "WhTQT2aw8ZosBJrFvKo6e9FbBTXNKYby9VDUVXvwcLsdRpXq9wXf6ZKYMaUEfgauB8zhAXHe6NPqh6MmFTvoUrV",
  "key14": "2FiMWQ3VeDjdVvBbeU3rD8CNbKUQ53kkgzRxC3fyxXmFqT5FJY9LzcMivEBpH1eA6c29anmmDngZkF5n4sGueasT",
  "key15": "5tspoAdSR1e4kgPXRtNAHTPXZ1Ya8kwfGTm6pEa7pUG2v5PNL15yYzf4EjspG1mpM96orzQvzBg3k95MkWqyiGQW",
  "key16": "5682i8AKqEs8CQV5LTCuHitbuY3PUmtb7Vr3vENwvuYr7Z5iqCyYPirzizCrvn4zinMRB1kJrhkZ4wk7Xk6Ude5L",
  "key17": "4D1vw2vwntsfmz3Dj23otAmvpSdcRropBKiJQ8ukEYcW4fSYSCh2mWT6wFUMetzgRVwecF4VEYDGAqCGiH3bE9eZ",
  "key18": "4xyD13A5gmGRQgNGG454okkoNPQDD8J7Nt9snMMRRzVbBMaGzdgXWszoVB7Fgg1tCb2kRFD7TmtHZNAzzxhB3bEa",
  "key19": "3inMqep59nZJTt3bsR5ofwingv6ECJY7HfqbHPWfXWXrh9w3YsajvVmRMoX2s8QTcaGC2W6gzpVHzcLNjcBhYaLV",
  "key20": "4PKm1Ma8ZJvVrn8yB5ur7YxN93LLrU9EkhWes3tFq8gfe9quF7ijkSUy5A1Lyc5gLPxwBTNpEmhKahtqyLrUaWNG",
  "key21": "3z9horRarQPZTaUQ8ghd2C1gHcGXME2ZGSq56uKiSF5nT8he5anJm5yYtM8LsK8HHBiXxDpDdsjhquGaxQD9MTaY",
  "key22": "tQ969k27Anp25Gre8a77XRJRsRtiSQu1guCfWPajXmdhWRtE8xQ6ZioBvtx1T7E3riwbJLRQEX3yTNLTqrHoEJY",
  "key23": "2c5cTV9Cm6LzjygHfn7FUH3F6WAjL8toa6BTPdzsN2zTuSRb6AvfZZhEeuTMA6hZpfFsV8vSWCVipRXq1qAQzYjH",
  "key24": "4rChskrPJL2kAYUxVJuRWsiSZGHLy4uNzw9Mx3xcvA9UvbcuWmwwRYUDB7n2V4Q7TidoV5YKB9Pz3BZRXitAD8xM",
  "key25": "5t8XNDm41WskyDCpRQ2rH8vTY51yhV9BwQpNNiaDzt11yxYp9CnALsUjZ3CW4U2kxJoFbyYsz5BvfDUZauL64Sq2",
  "key26": "2Nc1qvGXf4eDEqXPXFep9A6XULH5Efwjk2YrBp12mavFQPCKhnkUugC5WQc1cjKL3NbpiPjNa5qcSgA6MkP2baGk",
  "key27": "4NMUFLrW9nyr35Ev39pSmwvwPUBqMhHPMKqAvAXFAhRCXQsfUCyjox8HzXSgFzyXZLWMZNCfeDD1Q9WXrVafjaPL",
  "key28": "4nikezNoKzp6EnCYAh9JjDUxqwRc5XgEBDtJbJBym5G4P6cCvhJy2pnUyUM8KR5mMetpS1dwpzL7ezYhGGKUMptS",
  "key29": "Fh9qeA8kiRjN2ma72um1fzRsnmL5mV2jrtLBvsDacPDbsqJuH5Hsoifrh22jKxPeTWSHZd5rHqHgPhUePTgty2i",
  "key30": "3oAXmjmWAJka2SW5W6d3RsEWtnH1GvTXENVfP1NZETX9TdopEsehkLvPNZmGkzFuFCoXHJY2m5zrWNgwrKxZoe2g",
  "key31": "448cjmrQERRt97XBwAM7UNfPBZf76xrU8PCt4YVjC3gNAaaeAXDph1G4J1vVvCZXn9KUtY2bWERQ9wpSi544yJpZ",
  "key32": "3dnarQgW2FmNbUgp8uLUTVaxBnzKiGGxsozytTAUC5PmjAybc7fBuywZUyhi2mGAZGGW8tgTDS81K5PzFFSCuPoW",
  "key33": "2xMZmpFLdByyZZXHhYNPKa2KyJXt2q7cDMpRTTHV1cWiqpUbC61oKE9ETkeusBbV7SaJEq1UkuwLk2eSQs3nsHpD",
  "key34": "5NtCyfdWPigfkyM48jZ4t5wMo4HU7TMErqUSDu6pkphHVukctiMETg1UgNi8RQjDnxJydaKU9r85gc4YDN1GdrJq",
  "key35": "5SbgPjQFVLLMeBQ7uB6pgnWo75NkJe2Yy5gqYe6duPGsYfikRDq2zNDYuECTHZVZcLqNnwR6u2w4VFVndBpFQxcN",
  "key36": "3YFnapjjcoJgdR2yKsUb4LmNSAZnkZZNg73Z4RMYrocvtMJHAFxXuLaJ6UbDRfRx6rn8SxUk98L3HrVLZFEQfUER",
  "key37": "3P1WhewSKyDZPLDhnpJfYtmZwnyC9wTVTmq4bDNpz1ZLBUqujDoxKf5o2jhLYjTXKzdFqdnNBqcEhAZRNiUNZSt7",
  "key38": "4kJFz429vdD4g9rbD3bXqGuP1jZ92JvWhW6ansYqxgMw8JS79F27p1BdofRdzEzojQzcXhRB76TXXqckUVqeHXj3",
  "key39": "4KeZ8tKVfYsNUdRLnWbLBY9zu74yAJumqNRXrA1uDbisR4uCSF2of9WYgcmgSWskrSCFR7St6v4uqYafadTsPEhV",
  "key40": "DngNaN69254ZrqaEVrkYucgfu7ZpNHZt5s3UWqbb1JXCp2MgAQBPdF6Xw5y4JjQBZvZabLgEwgSchdozXqaXGiw",
  "key41": "4axWNvzRhwJmqqTYn7iCiP1h3e5FDJX2tHY6ehztLUvAp2w4FJDFPrs6HSTnwZasNu6BjiAGtKsJdkdAoafrbS9k",
  "key42": "oodXjp3ZnnT2CgP1EsiE1fXZEWvwCyYrkhvTEuYkWHjD5uTKgUXs6fZUtMRwEqvYUsY9SBT4twaaZHV4mVqAew3",
  "key43": "MaLgd52hZgXNrD4DFPZ8SS69WqvBKY5Tr8WKM9yLJde5XhicLCMdGmumoSvffXDFtrnisqfrNeR2V4P1fDk2ipe",
  "key44": "67Cp356NmP26XFAC2PsqUi7of1HQUWukhFxUqosx7dzKi6fDbnop332c2iYuY4AU2NopgzjBGmtcwWtf8MTE5Kxo",
  "key45": "3KBGgoEdVncKFuf2FJTdWcYZvPL64EWfnaUD6k8d8a15fA1HMRBhpb7BCi2yKLnsgZpDkqGWNE9VQNYzkjd5jKhX",
  "key46": "3qnjK4Geo5ynDDycToP83g7BS2eL4768y1DPsJFiVnWmtWLNghW5KsF9xtT3D9oymJ83T6dPMdfY8DL6sidtMkzH",
  "key47": "NU1dyoeie53aQPoPK8rYnMTf1A78UmJqyHMBGFaXeatpRA5c8oihazdUX9kKcZQwaD8v32DHWMdmsNwWCmXaSRi"
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
