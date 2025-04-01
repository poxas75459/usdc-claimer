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
    "2aDdi7V4diRayi7TKKeY7vTQc3b4Reans1W7DrRbWBkxuin5qvNxa63yayqumiaxP5pamGypgBMTFR2DL2BXUVes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DgLJmaNXkpzexCpBnXYETpuiPAv5E3CBPQGhFEBNcAs4XUasvG3ZMJMtHvYgpro5Mx7oRDEemwJ39Jxf8LCyNCn",
  "key1": "2khb3q5tsWevRdDEjEeYPKp6HgQFTbsXbE4KQBQS24GhoTQ6sSBmsWK9rVqzy6hDdfeJGZscoAuZAGXj1UrgGHp5",
  "key2": "3c1D9gVKLXW2vUR4uYpVbcnNbmuF2UaLPMk4xkWwj4VY99iuvbCMbKbLEUuCpdPj16GpKTYAR8xX6Cb4tZSaPC4Y",
  "key3": "4a11uemRzKqy95JLwBwo8FZJUGEdPTZ6DVs57SZFEBNMqkttB81AuNh7mSkh4KJwqbEFJXQrTgx7uwZgVgVDuc1K",
  "key4": "2ss8yHspLpkGe9gktKQEqLKu93QL2nwb5hxSQRGru6Gsht3fffxtXBZ6ysvZtxonB95Bd1yqKkTmoY4g3EDMfyjN",
  "key5": "5SyVgDUgerjkVB1FHdMZPwdYYyg4RK2TSgkofhKBF768tA8uWT9pRPYs63e9wRS6nyj7wHMWxaJSrC8TGboWK6uV",
  "key6": "66jGkWz292WNx5SBVRpMuTta1sURCh2cRvfz4viHzXUe5KsXSMBAN23c8XY1fQ4h19ywQZn4gyQYiLbddL722Vo9",
  "key7": "n12BJ8LW9VzxTpxHmMJFfZ41X7toH6WLJcdGboCrNP9gN354H7SQoH8CYBEEThgpg7HqmhwszskJ5kFVjV9BPSq",
  "key8": "2TNdsszSYtRPn1m1krpsEuN8bsKahtB6T5nUfiT15cmHW2jSjGxsvm9HBKAtodcNokA7AyUB7Eo34txu2TKqg1Tg",
  "key9": "5KEpJY8XFJRGWeRXia2HFK3AS2dRTVvUZXgrACV9y74AaykNsSEVA1wEog76nhTabP6ppM5mDK3jD94fh1W2jQXQ",
  "key10": "3QcK84ZvFtD7Vpkav4mbww4LhFCR4ZfzXYSfcJS8sfoFGLVMFtz8V938UU4CumRvS1yDtUzLQah7VSctREG5T7ko",
  "key11": "5qXwUP7Ww9S84BNZwJGUkB8h3Uxo2k2V7QMBKcCz2wPndZQSbknphTiaGiWVNF54EmDeXKY4Rb7JumyDmCqmaP3u",
  "key12": "2GEAAfGP1shEk3eREn3Dj5MFCk9pYyUZddrkrYES1RRq5CpzN3exFYRaZaYLW48JxKVbT71YeDy6hySK9wGgJqTP",
  "key13": "4xLHNXk8quwi7p8ojAdstQ6pF7xsnhz3LNqc7ffa2AZVBxW4EB3PYB1qNdMSkNKZJ5Pz41dgpwEvDAPUgsx8HdNo",
  "key14": "54gFStFuJKxPnArUEgHP3drem94vkEPDJRS8kKRHjgTzxTjTDxcRM3FqM1CQnUu1soeGQdp9LVyZRyLh2g1X28EW",
  "key15": "rouPmgdULW8LaciV5xGX4J2Eba7HykkmQLh8wNpkFyoFT4PVFbfHk1NAQ9jbjZrEmh7aHReVaGGYh4Kou3aiEWt",
  "key16": "2fhwQSSaykrsqZ2vKzNZ3iHxbi3pWXy6uP5NufibXwZUKnxq1EXRVmaxLYZdGL5DshgfesaXhW39tog5xWiJRNwa",
  "key17": "royAhC1ikTPWN3P4fYL648zGKRUR3W5mXufoQ3vtERY3MKuDowuTUTnUbvREvL8qaTKkY9wKdHwDoMdSES5U5cs",
  "key18": "4VEnTSkNU4anbgrzKhP6SuFwbHQmmdQdMa8owTwQpZrpRxFD4zsnsbwXHs9KDSA2zfB7QB8zJFq2u12sXMRwueyn",
  "key19": "2SGh41JoxYyDVRpLq3N4dHGZDEzfhkjbd1Hdt9q5tBs3MN3PouYPFEx6DZXeHrBGys4MmTmEkaogbSEy3vj47NjB",
  "key20": "2H6kRCN6tcayLb9quT7hAbAmpWZnwmYAR2Vr2C1JzviKmvc5D2PgRN3hP1vrKMrFMznprz6NVcHitqR66XaqHKoe",
  "key21": "2vuQZEwTMJ3jfLacjZqHT1AUipLo8oMsAv3vJ4EvfQjN9Hbyadd7HtcH4jzLNCVb8rWKSFDwDB7DUbQQpG7JxoaY",
  "key22": "5VJxvYVq82REvsbuaXJVcyfAn4KQASbTWqSyvRyfDS6g74M3udKWNazBhhQJfSTpzxi9E54wxQQgQy6qcWV8KsTn",
  "key23": "dJ2wQGoDrXRebe3w8vtJM3ZRdDiJKHkDQvcBB7Anr1wGP58LVb6jT6K6bG4WEYsFdh9L8Y6VkENSs4UWsQP63MB",
  "key24": "3tSufYp81YHdxKYKhteW7NJLAeg22NXuHxjyy5FXw9fN1pMqD3C4hwdBWZFAJpZ1eJ63AuLXAavQLMJN1fJdNJa3",
  "key25": "R7Hgy73LeVcgbNJQAhToaEyT3CnfwTx9cc4BPtr3xs1oDwNHzEQ27GV4mpsxxd8WY9DtxtpVKSboxpUdpKVsfEn",
  "key26": "5q64kSSRUw8EJncveYq8S3EJxTvCGZRi3PRAdujfVSyzp9uZe6X2XahJ4gXMEJjpZvshQ988iwai2xeZHBw4X1Pz",
  "key27": "7S6z9uGi5tvCJ397b1wjSwTHi4YydXwgrkSLVfERSaNVeEvHab6JeRdzV6FXEhry2THHTbpPJScE9hWmxnmYjgM",
  "key28": "F1pDyqXjvttekDHsB1zGnfDNzW1Kbg8YMamfBNqxozmAHL61RJ2okeThNQfym4sFa1rvYVhHZgESVgvYkFNmkSM",
  "key29": "5JzU6viGuPQXHYizFVwK3R9b3Zp1p48oVWuAsqKDqnTGKYjGMthmudeKgjxmTGXAuN1L1y3D955DPJBWQax33P5V",
  "key30": "3iMTsW22qJw9cWt2eaQxf2eYJe5aa7BhexM7ZmH3FetQz8WUz3ybQHo9urvPPk4R4f9GZ53fHzWBwJbTR3NCGvBQ",
  "key31": "3o4wCyDN1tYdnR5SfZXFp137VXEqrMZk1FtXCFAn4rWmwUYBhDa9cRpYaQJCX2q6MjD5HPzzVsch8ZPhnHsW46Wo",
  "key32": "4QHRKijDxewbVTvM6cPVRpMFM5VafKjB7iMWucwooB2doHhQQ6D3MGJcajGn4H5ovKzhhB5QB3P5o1YxDpmn41yt",
  "key33": "5An4KYpfDB9Qf3AasPE8zDJoZeAYLBBZECdejmyoqxMcVTf8oVFpL2EzHrZtRiRHFwUhJGqL5utv53j9XmB2MGTB",
  "key34": "5zKtFB8dq8KCcoeGwgXkcMFPfLzr1RnGsTWj4a9F2Yf61WZtTB6VCZg39zJneXkJtyRzKu6y55n8E7wTvzWb5hZc",
  "key35": "KQiWRjCYLL675U2x8NH7bRr7eZDTkDTyaEaz7b6oZKJMZSUp3cSUUraDk5vVHtu2qpBW5WZoneRmwgQr2JHcwGh"
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
