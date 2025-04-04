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
    "64kmNdU2kH6tkVzhJD2DXCkzihXSi4pRVX1NR9b8G93QTd1N8Nn9ufgeP7MDKDCFJjqeTUpExE7r6yQ3Pt7WTKos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8vyyA5E6C9AodMEf1T276LMSfcHD7J5qtQdjfjwqwWDNL7m7x1R2kZbX4WV4Rgc6zovpYpEnroNZcaj2yTuFUee",
  "key1": "4pi3igZQPvmCKRxfWxkPkmkLy4ygdHWBd8hFSKkzoPsC7rS9oSoBYvGtzu1G4YQrKPyVVbU6GnHWtM57kTKNoHfG",
  "key2": "3tt9JhwcGwBQ8dr6HxwzZVmiswoKk9DGCskb5o9QSc87L7ekiGTtADe539buXm9LmNy2bKfgjxQM4swby4S7xdXB",
  "key3": "LWjn4SNqyxG9voUoEnW1VEYSi2EwYmDyy84AZvPJoXUdBjQNPkKdy194Env3kJ89J5vE2Kw17c41QhXV5wwo1SM",
  "key4": "56EorSo9QA5GpbLYjaffJPbhXUk47xHX2kHxtSo1kFG6G9N9Egd2MUoQn98nAW1HHGbfjc2XWKMT2dJao7xPB8fz",
  "key5": "2jay1YLuUHKZPyRiNh5sdjFw2qi5cHHpqGoCinrjMTZcSx14KpQLdsi5naNjb5x5RoP1GBzrwYmA5VZYAZB8pEUk",
  "key6": "3mTdHnyhHPXD34AVfs9GcKyQNjVLLmzbyb3LphQ8G4Ms2JukwBmNzGbjT3DBfZo6936zdDoJWudw7S4bYTjDb7eD",
  "key7": "3hMxjMXbQCr9vZYbykqbfiVngpRSBenrMeQW2uphpWQTY6npyusqaVWKypVGK4TSHUybADZhV1oie8TcXxARfrjs",
  "key8": "3VLzUSWt16qwKrvdkNE4E7ubm5S6iMBLEuBjxYxvxtRcfgew4fRUNceTpSGv6RjLD66Lc4zVcbPC3wM1T2Cyudqz",
  "key9": "4E1aF3ckhg97GfqsYGDE716CGJnJicznxtM37vWZSJWT7gtdf6hcyZQKSsKxANKCraUysHHPqhWakBzXDDG4ncJP",
  "key10": "p6FSshWYLMNqyZYvttC59f4aaxzy2VoQSdjyuaiC7rn3ajuDdFsNqPPc85Yag5W2wPMSX4VZCmr1q62TtsBMceJ",
  "key11": "2V5EDZC4K3cexMApKsrd5CfZ2r7XWpdzXQvtTFTh9Mb76GPF9JAezPyrEZwictuFHSJtV1kfAXTkcUBcbFwYc1yF",
  "key12": "33BXfYpGPyPShFeeCLicMfdTJTVn6hw62F6SqHXzbEpYDfFMfDEESAbnXh6ScLUgzC1MrbbAkHbYmRo2PAbrWMeB",
  "key13": "3Bc5mSHJ53Ai2eAoDwSQ4wLypt7xvKQfzF33ZJeAb94qeY5Fipqqmjijo9mYVCvCQNFWkAn65GtBvkuyHoRLiFAc",
  "key14": "e3RA78ZTCX8HthX1WjmbNYB7FEAP6pchdtKdNEBpcBHr6RuufUgPk8GWokbkQ49By96yALCY5UgWM4oA4GkHp1q",
  "key15": "DhAgJX2hUZ6qsuttqp3ACFLTj7SqNHv1Ug8QK69Tr7NhXVnsUErYe8uZtdVRFpqqKZBbQoKMFP4tN6pApzQHrnM",
  "key16": "3CvXYZqu5usGAzdzHpxpmRbWFFu75aaNGCV9Y5eTCoGjBbB2LNg7wswSCAPytNbciZBuxEdvfAeiiRPdGGqPQ4Zq",
  "key17": "q8x16UeLzKJ2Feim4vZv3fCreJfxCAjmomnqby5HmSxa21enry73KRKH3imjWuTEBtGtJmRXPzDmLEmTFDgAee3",
  "key18": "36QTvaZYBeKMaEYZBbuLZvXdVWFnTqpY9zUWnNDnz9bMKwgAZwvDW8ctvR5fQpZEfAyuh5XXmw978SHmPXAqZ5pE",
  "key19": "5BMNM5HNjupbE7jfLSvkYZM1azRximSe7d8YrtEztpdbQhiapVgdXi8PtPMhxv5yBboqLwGdSYnVACcUbTCXZBBp",
  "key20": "2UDdAuFyY9zURdKCiKizJdU6vrVZ4QHxxKp6zdo5aLjQthnEzAmmDBrbbMHgLqicEYb1t7cAhzdeRZPfRZLcyztH",
  "key21": "in1zXDV2BGJpaS6FcLYgb6vBqHt4rDNTj7EMtzA8QvNubEENV8SGzg3WyQb2grgg9xfq4kBWbtvHrM6LRgiyxeK",
  "key22": "5eNxDUcwjcnHTvp9aJMJYbmHJLocWJhrc7Bb39Bzr2SkhRAyP1gubAS58GaHAzS7tevRiu15t9g2wvSQ1c5ht5TM",
  "key23": "4ioZn1Dsm6q6JXMZpBQmHJ5kxqLGvkSrhPzEHCFn7YusifjhBXtRYrMxGuXGv8zAWDabVbFkZzKYLyMPuFnxBXqp",
  "key24": "39tUT9a2YpXT6RoRgxW6zvRGr4prXeEQ9Ric6RcVoG4iiZ1a4qVsTg3U778cDfGENCRV1L8vteqw4qNcLehTmmWh",
  "key25": "65kCuSitxFGfjkMD6PEonAkNg1NsauJ1pk6Bcg3XFAa8Z9QK9SNpXSDUTc4iAhKXMNHww41b3dD8VQAtNVKF1NNy",
  "key26": "4FxnrqKG2bMhhx5jHb42Tj3H5rTE1agiLrRUVvugxJjrXquUmPmNoB8dUib2sctNFrX74WEY3PF4htnV4Sx1UmGT",
  "key27": "ZXXBQVXqS1AA933k7tsBtJdhtPdTthgEED2kfi59MjEPqvnEJrTbido2Nc9o9XY3Kfj3tAoAQPpYC5EqWqc5mNR",
  "key28": "3oPCAZ2Du8c7T9ScPWsVJGNPrMUrsUtFDGHnEGjAq1yS6jESvYFht3scBzsUN8bERCZC84FV2hRog5G3U3yqugWa",
  "key29": "2yjFcNTg67rapNGFk4Pi55mbDjeJS6hdnPx2W4uutwEH9ZxgNTjPNb9EY3dRAvLRHiY2bDcRwfk894jpEuqBszE5",
  "key30": "4GmePgHD9Mg1Xv1uNMBwpadRfnxHqS5AGhbLPgtdcVEQBcW38hNgEmuSz7EwZ4HiNR6JpQfWm63AxKT6fLzDMD9h",
  "key31": "ta95eCiy9mWzjcrpPTdEda8FPQ6ddLn9Zxv2VNpLUsq3LVq77acGn2D7BhB5S2eyBS2DaDMNvN5iUeNX8NE1poZ",
  "key32": "3xePhrqek7v9A5FoAxgJmf7oS45EeWcaWRtWaPLKgFabh4LZ1gJjGKyABTttLaM8mB63TwHobQZBvX97n1NPspHH",
  "key33": "22GfJZ19gp8PcoykNXtUA5MEP1vssghUV8s62cHowrFgpq8yrMugZTJri5Eci1t3GkSXakFY1Zw82sekKzVYp7KJ",
  "key34": "5Y93zHqeDccP8wugaG71VXEkXe8ghQF9x4qc3L5Xc9Fj4Fi2gZRX1RPrixE7tp2UrwCuu63ACEj5aT3F1EPq8fit",
  "key35": "A72kvJJrPHf9TzEs67exnhym26Qy3spM9W1sLzCedqTww3N6d3L5SarqhT157Njhq3tDAbhNZPQUjmLiyFH4xxt",
  "key36": "5PHzS2M9yUwDF19VaQtLcDvMihidqndYTUFSRvGjfQEdhwYzfA6wFDhzkpG3ng9w7mbjYaLk2htYjMB1HGiun6XM",
  "key37": "56dwHaLnBzhZmNZBWsiChnLFSTdPXxE9gERkWxUNbzk1pqmnNRao3Wqap9EeUUyHtzAmoabfpoyiTxvZrDezR8W2",
  "key38": "41VFy6ughDJLREPTFFJLiGNXhoVbZjJezgiGzKKcDuch9hgx5VHztHYrDG6qBdrsKKj65uV9aZd1889kPE9pb42t",
  "key39": "461b5xsyJ3i2Tey3sAMc5Nh1nhbYRAq2HxBLisNM7DKE3KdPF3zJKQNnFAZyw23jZrzCRyfcFAmuBPqZREMcdd8A",
  "key40": "3vQA6LEN74byVymSJjcFhx97j9Bk5JPdgroDn3DtttzJyx1DWWJzyb5dY9smgdT65SFtTopJMxd62L6hdKNP4z9m",
  "key41": "3Jc5KjRh2WNZDEXCj9dX3Dd2KHtbThXXXAd7u17fc5C1bsbL1adgTJ9DW8gJZBmLtpCRQPApay2FxaP9vGvn4RmB"
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
