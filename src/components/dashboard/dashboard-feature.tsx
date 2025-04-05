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
    "4ikmVzCKyoh7cR5htiTzhJMieLq8ba1vxB1ytyMgZQ3pVsKuMmujWZesjYaadB98jjMN8tZqfCRK5S8wi4XEwRU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3knXFa6EophaEDHYBUsAqRuVNXkNfpXhMci9gpVHivv6a6JXTTWMrVfc5C4L3cQZJ9drsb6vy3TpTqZf3M78GPTe",
  "key1": "3vB9cuGZPTorDsnBmKKumuCusvjQ8fCUTUNJUSyciBdrTF36fGsR6tkLYf8TdZ2eU3hweFB6MBF5NekMS6pCpPGX",
  "key2": "5hf4NgMShUAj49oTk7VaSaB1WnsRq69jHCbgwvS48VX4qxBS1b4G25CGjUuXMwnDFLWWnfQ1kn7tDcFc9ZmeWjG4",
  "key3": "FeuWsZWakGz8Wr6LSceWwyNb4KsHZDBXfdNx8853zj2gBaN15tkrjjiFaR3LUc9Y2ShSzFx5urTWfcYturWu4xf",
  "key4": "2cUC7EKYhAA7M965kgkSTm6d464QeqZ9XKa8XzW495SLGK7jSGfLdSqynQjvmjnq5oFjG9WSv4YFGZkVXAaAmMNi",
  "key5": "5oSH5CVwbaGoU22frpv2dGf3w5s5t9FeCKh9QwkH1Moz3jL1qCYczwPeoWeu2zC7o3fifR65Zjwie6Zv6XmSu5pQ",
  "key6": "mjyPvYNoHxRCvLSf7PfEabY8QJos7sppChLAufCHFzdsf9ocsJwEDZP7aCkwfSWMJ2AhuJJDRfJur8qNCh41BeY",
  "key7": "TCqpZob4EW1J2k9GDpKLXwz5JvJ2UKh4ytvN4xLDVc3ps8nRCcHw4Son5SZtq6aCEEFwTTcDi6VuHsg2fZwYPC6",
  "key8": "Y1JR5VBjPgYsgnY9cFwoccv2E7yRy7bm3zk3u26WK5EDV7c2kk8fnvdSAX8JGf3BAyeJ4YBx6Fcy5qKqxyHtGHY",
  "key9": "5icg8EnpxpAmc5g3iHCYUavxEp9DYyM26YBZ5b6CZyYAFKhq42L29qDNSB8nGx781SqAn2HvxUAPLsv9Kp9hUN5S",
  "key10": "31aD9J3J7abD8hjL4Ch7mBKsbhuNvScvhwocB8UeYSeZ1STgJSErk669HQepxaif1gbndr5u4ehLGoVqYRs6f78o",
  "key11": "3yYGrU82gVuFNEr2xnUNeNMkFx3m5THk38nrd7koGeU8SDVMHsHh6qH1aFx6iwaWCXVB8DxQnGwZCQekx5JabdcU",
  "key12": "29EzHaYMomwPnwAmFCzrZAwYPijDXCeJALhYenJ6TKp6qvSPtw44jYck2xbpDE2Ck2jWZVPBaGVPgELpfYkf4dmh",
  "key13": "29yavDKMurGjonb499789tzxDFtiyqDdFroLdqeZpF6htGCStT3xdsnKS2utQNFxuYPzLeTgrPGkzW2tqf6Esoij",
  "key14": "2TvTDmd6Yk3e842xvQfkFUy5z5KhXf1TpfiRzDsqbs7fVZNmfZA2tg6v5eDG69YHzEKsZ9dvYzHenyKBgYfd24rq",
  "key15": "5F1KCFaqcQ2TEzbK9yn2TWJ74RxjjRs25QsXDuKhQexj4Dr5kVG47smsabmqFQLpuEfEYEU4vD1cPyBYsGBzp5qW",
  "key16": "28JNkh3B68i4j66p63r2ztnhZBMosF8TbfDWPZr7q7txUyYoBY7dMsFix6VpcZYChp18ai7xDG7FPzXdxbVdPkL4",
  "key17": "4x5mGscfntVh6yThLyFUhFZKhoRc4sCpFyc2nmDTYxng8zx4B5FaiYZkeKTQpmpiMS6Hg1dtXaUs74qSHMRwo8Mn",
  "key18": "2wV8FX97MkmszGdNRjXcUT5LDYBsRvQjCj6RdjvQvQ92UoLa5xHjBRQQUaJjmdRKwwPamkhUMvnt4nb4aoRrNnmm",
  "key19": "3G5M33gPasSnw8woUBLt4PGG2m1maYp7wTUdsWujbsV5Js1ife9XGC45BDexBmsFR97sDzBA76ZGkgS3inttGJQT",
  "key20": "5P95pj3UJMn3t9Jct93hAPp5HmJznQvw1Nv4FqniMqzmyMuUd8RHJ7kPcUTetkRCoTE3UQ4BtK1SKUvW2HETfmiU",
  "key21": "4xQKHnxtmdqyKFwDaDZ6m5T45Zyu4JPqye4zrkqSfXsHWwWicBrrFCNjLto9ij7X1w4EseuUXREx8YbmbUXoV88B",
  "key22": "5PVWPBaaXRiBKGCdP9Mtn1gToYzrqJNhzc7SnxN436qMiACpFf9ktCeWWBPQgRZU5MrHZEdLbHH4TDNfrciN5EGS",
  "key23": "5UbTdxuhBLzJ9taqd7bsfuzBHoU7BAnGJWjbF6PmF1rNeTWxDdfuRLbqzX8GqTrmvaJne9hpAFEBft8pgYZDpnvS",
  "key24": "58QBv3ugRtWnzvRFSyLBapzPTAr3wEeK7NTScozXGukyEPaz39uatAf9HcYgYEaLRXFrJorL8NZd2WuUsGrJJran",
  "key25": "3r7XTQhXt7B5kTtbqpxq9pXnc7SR3bYdfTbgZnntjE8hxG9Arku8ZAaiGAijDQtGpjRJ53CXwE8CFA7pUotW333w",
  "key26": "4ziELsTmyEKxFv9tJMDN72JHBqgNamddkoSFsfAGoBQcKkvnWyQDwjU87yH7WEn46MJMk4PRLjikZBqp4Mgm2pAN",
  "key27": "5Jox6reZEYa7hJ2Fg7PdnQSe7b8RL5yFR1GpQsnpcELSPt4Tjg1Y5U76sQAUKJhRahi1RW7LDB2LCcgf3gcRKiJi",
  "key28": "4P4tgZD7QRBXf61xaVsopUVKTuXjtTBPzxEgosV84ofjBAxxUbPbEXqjN3SSJTuYm5rVkRuocxsUymvRuAZRwwjn",
  "key29": "jnkrmbLK2K9v9JCyA6tacGGJuftjkLiKS5ejR2E5HR2XuJ1nb5UankfwurU9fQn9jGimTwVHdApxUQDosNfnbK8",
  "key30": "3mgjQrrc4v8Y75uxqLXUn4Rs2vMG1nvruDAq5t2FgjRiwv6DqFUFP9uz3hp1kYqL5L4kSrkedEZCD2jA3oX4xRoM",
  "key31": "5ABui2hBbNKt5A2A4pgDfPdv7ZcyDi1vYq45BriebF9QDr8ok76fdLLs4bVBNcC8boPP5VAL9DtPWTkgTuZBCWdg",
  "key32": "5NZDySfDviffZfWKXD2kD4oeDbFDT99zn8yGLiRDAUX4p5RKQKtH9h5RuqaXa2u9zxfTQHs2jbtGmKMHx9WppkiG",
  "key33": "3D5UYYCxWb29Vf7spicauaEXQstvktRpmZzYoZ3DRPQUXHBSG5HkTG94gB47mxRjK94kivtGxvSiqUmiuHsEGptW",
  "key34": "4QENjWSu55FfyQfrKim9BhU7Ls8rXcWk5qqYQyYs65ghxigAfxaKAiZwwUyP6wMVHPv2FdWxWikagHdTQdM9hxzr",
  "key35": "3SowdmyZk2ULUnetMA1opKaZgHaaHEQpYkLKx25YGdfwuoZvAirrV9QaDkPiZB4jaZsw2MQCZYNeV6BT1YHR2Rze",
  "key36": "3RMyBiW6k8k4CaixS2jVonQ8KX2PexEHGZZGuo9vkH4aFJvmQTD7pjTLnBZvCDzSu73wmYQw8Xa1AjtUD9sAkQPi",
  "key37": "4ehpLYSWBEUFuEpoFzcbBibxgZLMn3Lt9SYqVREXqn5kBeu8uckpLgqGVfsARjCMuKS5oWectHVpSYihJTK49Gjg",
  "key38": "um3VweEvq1fe2JcFP3FV7VLkAt6ubxbgEyk5r6KTgNktwjg62t8YrJspGvchGXR8KmPUjfTLWEz4djJDwZ2FsAh",
  "key39": "3bdbSj7AjTobLsZBp69Ry1btJEEJDrdXmw7HCxn4aucGeodUkUaWNSf9sqNU7RUdW2TQbmKHWUWN3w7pVr8yoPba",
  "key40": "4mo4bVMV6Wen6PAhfSqgAPQsXzrk6afZuLPgvkecYoveLdtgJfWAuwGPhLP9fp9vHd6H78CFaLgs982SFB5DWp9C"
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
