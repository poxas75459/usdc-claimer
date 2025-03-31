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
    "FUZ93kHFbJjfe4VQs6pMjr22pYmw3Gaed2mk4aQY2MTxzTj2Y8wkX6Jw4F4Yhd68fhNrnJFmJKqHL3mTz89Rns6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LgjzZpB6AahPCJHa4NtRXE6jvZ1CZgmqRhigUcrTjYKvqmq736SH7aBKhRMqCEGqHxCDQX2VxWH9Lt5GtaCvyBL",
  "key1": "2c8Fgq2P4nTnxsxgs2RY3Auw1NjAjtPHfLtMiHWNopcjurCKQmnftzLYCPy8d1BiVwxaBqMpUx4z8ahDP9TstahC",
  "key2": "38PDb7sSDTqjSArbyrjnQRbeJNJ8oFZtXH1Fn1j9yYdgRuSwnjrcNsdpsAVDZUz6DKFpc8Vg3LBBq9NJEk9b6fs5",
  "key3": "3zJ4D7HVGJmJrq72JKgZ2ieVuhkQrf3cDi4voksWGyaaMj25EuxVj1SAa9TU4tuCAxP6svEeobczgEXy4Yr2qxa2",
  "key4": "Kg56XtA8rzfQ1wz1UNy4CEX2rqPTeKRoJ4BHBxfZtrHV4rTbcZhnAHN8joMv4fArmxR8TJ5vVUPXPeAvEydTXrU",
  "key5": "2namJdriDm8xXX11bZx59qUssAnnoys1XXCpz53KTyqrvWagR89dFS278bT7oRkBZmrBjZpsxUfRxuy4XimY8Hkh",
  "key6": "4GiB1zuHwUHSTZrvgnRgL9hkR828DZQ4UPZLXTPEpfwbzDxZBdXLRYma5ZL3CBrENU9jspgXngKjoCFBK7GpFvpN",
  "key7": "VLwfhgCWMfHbytMvQjJZgSsaKmfZUxCFmSVTUrorBKGRYSQEcTGdbbLwNVJ4wk32ossy9XyTeKXG7onv4EL5pcg",
  "key8": "4KYeLfBajR6FS1MmXPaT9JNNjwteyHX9vsf2dBCQAD4Nv8sLk8pDUyJDM148qaSirHptBnRDgcc5akj8CbjhUVgN",
  "key9": "hZsJm6GRAYDJpF2uRn1JTxarWhcFFRpm4SsAZv4sUHGiuDPXTap1xVafq2FhMV72BrNkRntMDyxYzcg2z9UZFXk",
  "key10": "4etC1UX2qSuynQAfTbjJVycf9qw2eRg3onvuKn53iZ2BmvWK16A7h2cMu2k2Zw3d6bPJW2c5yg2Z2ox6gB8gn18d",
  "key11": "2SMJmbVVMuoyX5R5B5QJ712jpGTguYwy8wTh1wFVFXi6rQbrkg84RVCBfsm9gyiKCLiLYY3RQBrv5qyYWnYksu19",
  "key12": "2fgCkQXC8VzeH2SErLC9VnHK1Ybsak6e7nRP4Ld6ZPb7F1BkUtE9zL1f7yDcWxQx2quxA3icWK63XGGX9X5heMxs",
  "key13": "bTT1pMpADwwGz1fJm5q3RgPCwSwimYo8L3uYUf9erBxgZCfS7H7xhzymXXEW9LUVnQdosYcqQoFEGU9CtsC2Gcz",
  "key14": "2gLasDTMQQsziAwBvtozfrnLh9E83CMZBehiag8o1G9T6tFm8i72uoJEzKc3HnNQY9gEHsNwanksnmsTFL4aKsct",
  "key15": "3MuutD25mF8gpiqebwrJAR5G2RsJs3S1E9GYxVXsQ6jy3wLVna74Xvix9Up7ErkmU3JCxnuPv4gM3Vdf85KvE7GJ",
  "key16": "4zoHm99KYrHJJbTjA2wnQF8uodcpUWr64QULQU59JA1sb2jjgHPjhgy1PaHpp4EBZxujmVjU5SQYoyU1iK6zskwx",
  "key17": "2uavCGVz25ohyR8zoqkU44QwKYa7we4JHEJPUV4ajDMGRsDAy9R7EY1VLrYxLdgKPoQQqV5js2nyRBGmRQnFnPuP",
  "key18": "25xF5VJMnDhHZYSJb5FJ8kGtVJjLuczw3LHUUeR1Y2NkUK1BYVFueFSzb9PgGuVNJotdLsbE2yaYnNTMs2TQUK8G",
  "key19": "2YGhE2Uy5X4p6HzporjLSRqmvFVAbriZPJA5xFvzWwQicDsmV4zZkEDaWUkXzcvDkB8mXVPm8f6vdsjr37MBWWJ",
  "key20": "3CUVnojCCi1nCRi8SsLozJmdqsY7yXdLjoWqgiD3auoc1ALEk8XXE2agbCKHxLT6sfTuf48dmFKyDAsJDtLRM4RR",
  "key21": "5R9YA1qphiraSUHaV1cDxnGDw7KFzJVT6y2kANY8LEVQUnZPNommJAHj4uZiAV85c7tZT8Za9EUaqXnD636tVhDg",
  "key22": "3Kh6R7inLyCJLLNQEP7XphWgACfVkKYVcY4X2JZWvGWJgbN3awEK81mvB6akEfwiuqafKrFsxD5m7wTCzhpFzrsM",
  "key23": "37LbMV8N7agWHGJXHTpTCwjWSLBvt7UgcWdUJ2tqBXB53hsETifTTH8kXyaRMc3P4pyn1FssUxEXTfqMveMrdW6i",
  "key24": "4m543nAHRvEd7DG4cAjeHg3Ey7B3nXVGVJnTJJFG5kXgSYSN7RGApnjTDnU8cY5h9UZBi82z8HP3RGqu4QmfocFe",
  "key25": "5n92XiVmV3fuw7W7epVMowFBQwkbm7UXysoTkL6RQvKa29r6S6XNve3jXZ1X1GtNXqpTwxJg8oh882Ayq9hDU5SC",
  "key26": "36q89dQdAcjvJ19uSLqcKcCmRoqEsY94vydWW2RU4QreaPWWSVbeyBDf35mhwUgfUuiEAioxcKFNZDGvRvMdGLtC",
  "key27": "4rmM6uVn2mNFdfMiVQPydcqZmjU4qnxASFUUq9HmdCCgQZLXpUNato3axZwDccN6Q3i9AdEXFxtwY8f7jvrBiwTb",
  "key28": "T14mA2dEQBPci36aLjY7nHDa96KKcvjJjm4pBVr76Ntug4Q6KpcLoZi4JawdcRLXYzsJjZtKcYggTTWKDsKYQHo",
  "key29": "KKAwFPAdwAcjPhyzse5ggGP2fEQYSKzaCXh9SSzcSRAyV1S1HxvydzmatWE8MopULNe6CQhCBoMsh9wuzXquv8g",
  "key30": "4btC9HEFQmXvMuiohSKxqAg3Ec9s4NS7i7PEc1JHGUBWrrqdtnCWQ3eSha3szxQby3XGNY6DApUD1LVaPHYcEGQ2",
  "key31": "2SVAPzQTon1WR6eRJqoAnfer4buKZhAzubE2SH5W8n39Yeu3GAG9RRVeku5pX7r359L4sjU3SHMN1DJVShQUs9nU",
  "key32": "d5NEQkPUHZjowLJHb7RfQq7YaZtXWPrQqe7xWPC4WZKunpY9vm27m2YFkdzQFqsz2eQ9mEzgLfurxfpZe8VLxow",
  "key33": "2MKneFB6JKXMrXbdvnoRa8LCxHXCq5dMPHduQHkVn5maU2yL6QRk1x6z7rWxgTcTgBvxWVwPUcmxrz8cnVzfwbwV",
  "key34": "3WKG8njfeFhkmPQiubK18qmxaSqEk19wpHEfQJLjWaBvoGRockzDxjePy81NUAVLxZ3kRZTmMeNwygPecqtnATzu",
  "key35": "2q53DuRh7sARVjYFAtYmbcPRvgLx8cnxqsSnKmnFEwCJeQWYZX4TrTg1FDoACgdQkqhfHzuuNWLAXsbZHAjwcp8g",
  "key36": "5BVBEDKaxcixWz5zMe6re3AdhwSrBVLRrw6vozWZyw1bciWqA2yQYEwDc9HDzMq5HkgedyF9WaDKFrmdX5gVqjqm",
  "key37": "57BH8evrx4FLHgAsd7cWZNqijqiq6QeEfRuDsfWhCbfQ9w9T8YAd7sYMqdhVzPvLhaKawNiESEK1YbanDtfqd1hG",
  "key38": "44PQ8313mv2MaUvSfvfKUSMwagX5iya87v41bVYy8L86gAkqVoSbR5VtghwmRVTepu8bDA3ow3RHWBkHDX1RxcBY",
  "key39": "T5GGiugAbLSUDS4mhS8NVcEmuuYc4QfmfQHEzTurMjgnVkqiN4hRExxchvoZQAdQS3Xf2REMBqBug7a9oc5ZYyX",
  "key40": "64nE6d8t8d3i4KHX8H6GDSmeE5rSeQcZmycVfGCqTdHJqVdSFAumekAHiZ6noyz3rbEzjHpkiysCGFN2p5GYEELt",
  "key41": "5RfDUcqkbTq9tHRSN8vjMSHw3G3Q2PqwiBfr17BEfn75Gt2hXHmuduTQuQ22aBd8RGDqYnjx39PcVwaGT3LB7fVX",
  "key42": "4FzVG8aZp5yY68ZFH4KCTPv8R5rJUyjX7V7eME7RYAHQWXMwtWJVXaM8eFJFED1kkRGAx9t488Kw6uftUTgnyBSK",
  "key43": "3CiCjeZPqVjw2TxYS1aUMXfu6WwJfD2865iK4Ru9kMsQV4cwRWQTpTGiz8TZeZtHbWsgi88TqtZ7LdMjtKVrmiwW",
  "key44": "4s6wnpDmqZbwrEYtnJx7RiRZ6iyTCzfriZnkS1VSzKydiPtJts3nDHWLkAAutbBFApWmpbphPd32YAs5Me8nwqma",
  "key45": "3nUy4RG5fX2HgTFpRNuzNUwDAHVHyfMfnxGpTsc8f4qzLZE4urTbdTEoCvT4VbZjkRdDLTqcfn1fygpLyNfWN3js",
  "key46": "3LHFLAdx68JTbtmHVUtLtK3Ww8qUQsaQP1gweH1VtwxEZsdfAxGxSn98tFeUKkR8d84ABRYjoihbCj9VogDiSqka",
  "key47": "4gMWQLQcLm2Gvdi21zA7cEit1wcE5oTMEjDasYrs6JYEL9yZ5gUaNutgS6RYQXnS8QH6qBBfXycP61aUtnQBCHLJ",
  "key48": "CNTVLxZ1ub2xx6eexfYW7dsrCYdMy8CqrWWCqXsHbTCteh3michKDZ5eE7k9zcVHp1rMhkQbPkVy8sqQnU6EkeJ"
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
