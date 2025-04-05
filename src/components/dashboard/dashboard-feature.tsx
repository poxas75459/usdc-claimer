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
    "vaJVx78PiZ8HFLWEi5N4LM92oqzRBLCsCB9xgS3NZULZQajRccoTLGvhaGDHHeBt3HtdVxruCPDHRVmzUk2FN4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GB3ju5AxTW8Ldmqctd2i5NdzfvNLufu4M1v4QwKtrYTasH5G7ag8fstgoE7hnEztrxYTAFo33ffDhE4MUcvxrYj",
  "key1": "4xxgeiR2mJdtQ7v6QkUUuHjrgqrZnzphC2Cyccburw19Tfx8mtwxEpSiMB6HtoC3Ct7ZV6JVFtCWKCEaYTNvvv1S",
  "key2": "5kNjRSNuKhRYsxA7kYxFg3qsh4Dv7xMzM1X6Rzjt4ZTJaUyhDc9jqGcszP6KRcBPRqfwQb3MTSzoYbniBqFdwCaQ",
  "key3": "XNRogxGGvagmkgM64CQPWbEyZHKVbahjuVQvNByMFeE2JSrxTrc6DvRckZBvmzdfh2whHJ4E2EgF35fg9wSctey",
  "key4": "5NaCbRQCmQD9MkYiNNgZsiiwy9AZPfPUt6gRiTQXsvoMWtBUALVA2J5nvGByEHzPSBYAaipS1oSWRFQeRsAQW4WU",
  "key5": "5eQSpk69GJHuynrm8HRZDBWkrgeDtgEZgvd9F93sP7a3ztRt9U89wa7U7KRtKKpGwNjo5nFdYRAou4PFiVzZGuja",
  "key6": "2swdJr4FrwShdN5CM4aQrqddhCsMSTP18u5f5kNLxD1H9AJsJCuWs6AzV4GLX2Pfe8yZ6bWyJ8gVh3MrgBaVVrLP",
  "key7": "58Z4ScMQ26YGi1VHkZ6oLzmoK9fdqPzEReMVRaXE7VngLuA3CjH29y2xyg8gysjqbETFLWTr5nkqFTUKJEcK8wjm",
  "key8": "3TVeiyRThwekkG2zYCvV5J9DcxJSHcNU2GdQDReP8YhK8fENiaQYS1z6oc7ygwZ2yuYDZzEKCfGK5PgAFCQxPBfu",
  "key9": "4EdUYKoz6PBaXj7ZLcNNEM13joVJ3XjCScCAmpbiignmtJ9caUEdexx7uxQAvBYxtKeQbqCc4oDMvcYhibkqwQ3",
  "key10": "23aGyKrJ65k5JKAjMsSdXBzyiumucCXChAowvF6NfqbPzcNueqDrSGZdVc8cb5qyMSFYSbZqVcr5AhAuJPot7Pdi",
  "key11": "5j7E4CPwgUs6rnCDsUBmBqPmmutuyiRRVUD5w7WzuQeTaayW1vk61KwSyLLv99Z88mS6ESCfLMhVoxCLgYDGxJwA",
  "key12": "4yGXZpJYdU5oQWqMZGnz4DFbnUNouTet8fsxJc4X8VEzzfKGg363og9ai5AwyqGFQPyJ7CJxSfMYDU6ES23dEtnW",
  "key13": "oyF12myBeSxByWbPDauMqEkwPCjx9Hr3XwWTxqGyTjf38cxfNJE9BpvydXoeYtVcRJAdfMsNbwKcTSccSUhe3Zr",
  "key14": "25q3q2kSZFWmeG2At1HaF5LkEMLUP6BA6iMC9V122LHXHjmSe47PEEEvike2FbhzFm2N17k16CJzgPZ7caJjFxk2",
  "key15": "3Y22AmBNSFTgtRv2P1FLDnp38QN6JHZQibt539E3QGNousd28tHBD4XG8knzxWCYbFEZq6ZSxEY9pgPMfieZnp53",
  "key16": "XDCkb4PD725Y7gYL7KqMhTHMAkQb4MYoZbEyxqNjFAeBhi2c53DkNzE26QyQc4Yk1ikbtJGQvBLwybRFgbaGjYW",
  "key17": "4jHoExr7HFEbScBgAacBs97XaWSGPW6Hb1fBHCcgVukaym6qqi8a3DwFNDJk8kbiZhsbn7qcDuQHgUYfidyXXuhs",
  "key18": "2JzsEo88ZqTZXwhwtdgSjQqur8HeMCBYZr3gejkhmJzi3YYHGRgHAYMuyvhgRsPRcx1KDJyf8NHure5QxS5V8mMN",
  "key19": "tnPtCrtWSdX561UefghHPJZrpJ1YeumDSUSvcPNsMeif5vu7q8evkjj5RjRNnUK4XDmKsC8gAMGAVW44YTmSqWY",
  "key20": "53UkgDduxzKQhdYyp1wv6z8fYwEnskRZ2zuZAymWheRQcXosZJL3rSnom6zX43tnBBJLyeQPUS5ZfTrw566F6wAf",
  "key21": "32qA8VkHsA8tjScJeMWB11hw8B45tqFfipb4D1dEodA9Kb4hvttB4QAj8Y2EdxKQ5n7ZttgMfbUQMpe6zzBhEgpB",
  "key22": "4MRptSYqLBtPRmKrWQuJSoearrrSiuJnpFPf7jLizZVh3hLsnSkiDaf5SmeQpSD5P6raAszPzZr3YFDAGaaF66Lz",
  "key23": "4ncZzwri7z3dvTHhhfapiBSXdRQVFmDsEeE5tiKzg8QSj1VC4LmTBvcxshdTwrdaRADSNsWivaLZJE9WiVWepBg4",
  "key24": "3zJ8kZmV8Q7A3sHB4X6MkCLeNb3BxrJPS7DcZPqz1fhGiSE1eKLjsMJ2ib4GjVbe6z2kRw9Vxh8wWBj3CgHZgoTz",
  "key25": "2byJW513JNNb6HUZsibp2NsHbQCNbQwq9kosftnQJ7f8T7HB4WEnJJHxTp8uRy4hfeacnd8zjkgX97z8xENasBD1",
  "key26": "3AfyV7dvHdL8eMDz6FnBEKw6PfNyTNxaGZ77UkXNdCdZN7rYWDeTBy14veehqtoUXCwSFCQQ4j5Qi4uvJdR7x7G1",
  "key27": "39SL2Bm2DGCM31rGfUxpDWf7E94jxH8iNNqbno5ag2eoRRWhQykxb7RQRmXBAedQVSRPVHTnPX3HgciAuFFXdcEb",
  "key28": "4oFXdJjyDhzQ4AhPMghEuCFV5LK1LkZNmLgyDSStkmFoZ7zesj2APMoAKsXzJcBjN79zRAxrXe8VZLfXyu6MgFay",
  "key29": "64yrkYyWYvQGYQSE8Hq9axtkJsvUUUifjgiMxm5xP7ME2Rapgi3to5XeGWxDaX5D9VBhAnZyAowd7nG9WxgW2wXd",
  "key30": "4C6hYEMEs9LkUd8N7gw9xpmjxZr7dc6gyk2nuMDcVTE6y4ckZUXGyDef9BncTbcyT8ZRk9Qy51Le2Zq9jz6qhYbs",
  "key31": "5LRZ1iD5urFsjDMJ1gQNtC5jteF2gsn882zRZVrqufdoUJUTADABq5LoyZmWJDvVCbvzt4cZf7RLHinBgJKqYx38",
  "key32": "5f7XpxhjfnxwhGjptgdbFurnpcZUbqbDmU9GqVn9yAUZvZbBp76WUJ8GvMKMaMsDDeufyox8roqJc2kovMXYQvQC"
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
