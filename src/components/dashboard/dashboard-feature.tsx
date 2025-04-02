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
    "mH5tpm4ipoBEGz2nVQC6R8pNpV6rn6B2R6S6WHGRrWKGs8DktXpUvNwNs7h1hQ5YG1DBcRTzwxociJTb79Cod1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vdJ32kjLheWGzxWWnxe3eJ3ii5xk1hvoRZ7XkFzS4R7HRam5kHHCo1poxGEZJN8gEvbV4sx8w4Jo9vQVqb9zjX6",
  "key1": "3RDeRKyirzfTWLzWYC7SGoM8GogpJnqVWaxCS1obhSSCQfhy4VoG4HmmSABSMDcqJN75iyCnNndAuhjpdLi4bDZV",
  "key2": "2tvj1MaCfofGEe3F1v3Mha1zarxnCnzsFxNwQtTkwCWvh7gmQ5Z9WDQU7udgA94oeCGKeKtFVkQwr86tYmivjKaL",
  "key3": "3F3gnNocGk5JR2QqYSzoCJGkFHAFeP2J3cs5Bouw425YypUzpxTCzgxUz1ixkSJhProqVho6o4ZUkpZhwPbdPuMT",
  "key4": "3W5jFRv4Y2RT8i5Q8w2U67wzGXDQsuybt5keZb7D1rtYTHV9j4PBcMSeVXWNHpHs6UJxC1kKtgk6TMFVp14JonoK",
  "key5": "sR2QCQ1z7WQb4yd1x6QnDCJqNgkQNzT3RProfjvY2ofcE1dEb8J1KmbDq4dZU2gMukLoeJqwZKt2Q2oLxmvfPdZ",
  "key6": "ChHPe5412aNPXmGpqsbtdsDLZJHuJnSGqywG1oVTgz7mwZHEboPH4jchoQ3isYZj1FmPsnNs9n9kRbX6mRmWiXc",
  "key7": "4hz6dfjwhKp7mmDa5ds8Erh5uMYobGUru2oNwGtsjD2R1TfJnScEv6FawVMefJwDiwnpu7SGEHFUdxbqMNRAnNiD",
  "key8": "2gB1pn1EnNnL7xD1muNugqWw2Wo9dB4YEyJyMhXAgXoFzxu5X74nxcY7so7S25Wn4akaqcwpzrsXrpTHxucD9mRy",
  "key9": "322VWq8dzSq89T5Xa78tV2KUQu3fZBdRfvKBTHCdoxEyo5rdkkSbNoFEuge4GHPJP3iXuUZNRkgAdLUUyhqczgGq",
  "key10": "5Q2ygYNHEMB7fCG4mSLVJWj4osjDbo9wHpGPnThpuEFEhktVbnu89SVfFxVkF4kLTqVbqEpsRu2P1aeF9sGfPRVf",
  "key11": "57H3qjvBvi2hhMdQgknBK1UBAgMmgQPA2quYUYxmXgnqFGgnpfxu4ku9YJ8rc4UbfsVBq7LQmtAcM6c8L3btBq8b",
  "key12": "2HPuFxJpy4rcA6nVGdSiFV8GF3TWEUsWtbBGz79cC7BosDtCpkZEu4eV5LM1YsU19kfzirtM1jqDKD3hPY8efykj",
  "key13": "2CqHzbARvp5E8dQU77kq6rJahuPJ7fnmvYu5qHAoR7yBLwfZYkubFjCt13q6qzJv7sgBJcHKjaHqSwWmn45kxg25",
  "key14": "3WniQ4jQpqthZnQJMQqCw3eiUxX92QZB2dQDCqCadRstNQpY1x1RC5zTGjRMCWvfMS4vWPhAr3fHEcmwT7TVf1Rt",
  "key15": "5CmjdiYvzVV9ThrwvTTBHaNEZrXjzQ9cLp8MkTyyFdy3TMtijfVeyqmhffvw8AT1F3dbyqV5mnx9gZDLXqvJ2dGu",
  "key16": "wEw9ne1W1gVgAK7MHKz1oQ5H7K3fUhn2ZkQ2d1Tt7daVDETNRBLzHZEybQD52mkfxumJLjUECf49qGaAWG1jt6q",
  "key17": "qqUs614z9MNGGzVtYsVXQTrEKGpoN5N4y6QGSYAwFxcsDkrMSBe9n659tXkgbPmY7Q3sBFHU4RwTfPSEwa4TUXz",
  "key18": "5RgcJFWVLh1vz8pDSJ8krdmi4jiSkdfqDc94hC6kSsTybiT98EiJzvywT3G1Yj3GtD37tHQZP8RFjVLYPYknhMUy",
  "key19": "YhyowThgAYtbVfYeEpkbgYqckhJ76TLno2pFrFSo8zAFjYPnLmvonsBeTLp6zcLBCS9Px5opegELQngpWwFH86v",
  "key20": "3qGfdF8CNoYFNvwyvjsL8np6A4HRTSGuZ4n4Z8hj6bq3KrbYfRYDLFsWj2MjmHdtfTpxchzVVphbwZqjXNnvHLye",
  "key21": "3rAzNBfe2b1tdauuLBTwQKdPxfX6NgoEj1Vih8si5xpVKGcbLnkmKQjZJw4BzfMgLJ9zy28TGpFvxdRiAjKPTe9B",
  "key22": "3zx86VuDigrSENFCP2ALQp2p5Fv5LNGVmUcKSS9u5KdrwXSLb1pMVYh4d7CoYrT2W6mUitXFDqWz3NkkVoXc8BPb",
  "key23": "47UHkgsZ28ZXptXVmhshAJqXvWt9ssqaM54DnMMV9vPuNrY6JiQChks3bRfDdGEqNTTUuEBSqtWKNdgYU68uazDe",
  "key24": "4kkovC6HCzEQ55TPQSsMYZgYNF4dJkxAWxpssKPSFh5iiB6FxqR5qn6FCi4e26KTLCBiGxCCHA17vJ7iNCUK5RJ",
  "key25": "43LbuNUDYS2CHovbb14kqnkWH7w1qzpBsRiqh49H1bZ7reYPeAx6YU1Lk6NvY74ZFqw2Z9GEsHgkA8Y4vdUs9rmo",
  "key26": "4BwccA1C84GVWYyXKhWwqLAJbZbnCa3xPAGCS2m5r6ZRsAsAC5j3DJW876VFV9VF7mqiNAZHe49xwdU1Zgu9cguy",
  "key27": "4uvd831oCvScEs6P5MPiTZamgkTMQxRQbHLwEpwcwvSQeMFi1DP3nY9yVkT9UUMQVMc14yDfHVZz4o2S8SkfKeY",
  "key28": "4FgZuG1v7F9D75KEpiGrzVodkK5j4BsiaeeZDahxXd7RzFNTBELvpPKLhk5EhLBx3Ez2FbN3p7uF8b9DcXhX83yz",
  "key29": "4jmr6PmrFvMj8S1vTJaCMBeT8AK5uXBLv1wFgtrsjhiRe7JerUL5yWDC9cZ6YD9H4t97zYUioQFLWhhWeZVjdA6M",
  "key30": "KgvS5cjZAAnFA9DmDKBekZsojoQwPVEit9Hn59UECvHwkgNA7MuiyKgrxi3BJiDD4TJo77uvD7vrsZMQFNhS2cp",
  "key31": "4RkrMwez1L3NpDi1yqS9S6gmTgXqz6VVYiSQhzNZmAabpdTqKEdHfsm9dny6u9KVC1cGSHgzDgseMg2DjPHRDNTA",
  "key32": "Um26j9PFcUwNvuA7P8jpPFEZsJ2ZSj8KB5SbfvGcp397Cc6eWdDk23LjTzXr5sQS7SivipSovRD5urHjj43jWfo",
  "key33": "LMAckfXeDcTVygrkj3ZYs2G1dgqjVmw5Cpp54xMQ8Ab3iVN8trH5Ka3tznXSTuKJ5zjg29pkM5EFFfkLkrw2Dm8"
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
