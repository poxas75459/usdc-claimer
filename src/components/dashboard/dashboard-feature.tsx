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
    "4Jx92FBG4tUK3bJEtRXDE9DUuLHLVKpUesR9CaTVRb5fFsqAViyi2DfRpJVwkjsQZbQ5bsGwcmYiuM7nEio9FSov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zQ5bKNE1B8SS6XKCWcL2HRTys3X1HBA4wjkHcjrzqMDYjSvvBLWEuWFBqzG89rwZcf9GrdL4RJeJqfoUify7H7L",
  "key1": "37BJj4DrepMWprADDV9tpvsMPxxNTC3G28zXUcVNritNEGtjVUR89pYVA5thdgVm9DxkSGmDFqXar12A8ASx3GBf",
  "key2": "CQz57Cjtq2mpvrdZ7A4SWW1FAvqd3ekjGBci9ugRFffGtjtqjy16jv2iRFyp9KdZNMwiBkCDy2TapR3irKcKpUA",
  "key3": "4b5L9HRQ3fhgC4Gkqi8Q6GZsbavQ67AnLDtTJHDWdjLAh5xxDVhzNqZ9E9Jhe7N343QzxCStGuZQYmDESMJJAoEY",
  "key4": "4dL1fkubCGRyQ3ap5dQjiz9341UuUjVhe7zY5KFAw5PaB3PPb4C5FRvici9yxkFDvw1gGyXHbU2J2yXuamakWMxA",
  "key5": "3b7gphuhywtgqBLrJkPMGZx1yS9n5UAj8FtU2ZwDkTeDYGKpwgnkwa3LjCNnew1H8mnvqp6uSaGcYT5vwmStAXf2",
  "key6": "e7RCCJebuqxsydVLxqY21QsfExAfU5bYk7f831awCKums4tHigWaGYrEZWTEtqH8Qb5CcUP5nfPgAsAAjmwNtGk",
  "key7": "2327ReNJruFi6JqvVoe9jmDegVNxL6fdkDoH9Eh7nwtF29XmQ1jd8CQwZJLRx29MUNueSDuXm6UsU3ot97kT49U7",
  "key8": "42EvzdG4wmCoFQE11CtDYuHVQfuhpkksHeJJBvRmQVNh2yLcwoyys1Zvjn2BXJmrHGX4JhtXJNx7PtDZjaAG8mV8",
  "key9": "3bpaipf18wQRguSVNTxa8gqW9P8oDYz8x6msoFdCUrQSbuY6WmQCUczVEMemT1VqEBjACb1AimvMjSjPMXnRJx4Z",
  "key10": "36pfQPWmbDHAF7oVrc2HV3cX927QZk26Ur3eYngTkWHmEkKcJQ5VzaqWJXxA4zPkmvVvRqTdfXPqMUqrWSfi9kxW",
  "key11": "4eDydiWe3Vs9sQWUwMa33RCTP23Jf3yCWXtEojA2Xh8NYtKfo88wjJJQvMbqV5am2fUwzNFVEqA8KMLKsYAZ77cb",
  "key12": "95TrZi1WCjL1fH8Mvsc4XmkrWxYS1y91zk8hibbv587RcxAEy6ZBHmZGWtb26a16QUKL4tAdoDwuiWzHRmeEdq5",
  "key13": "2qQvbWNQumNu4R8ULyrZfDX9wxYGS2RDSQrd9zr6E77GHgHtAHwEPoeZbNE1BTPTVjRLXuhHDjjxe6P6AZaASyM2",
  "key14": "4RBQ7ryoGia2HWWzmjYxhb6aJoiBfVC2jwLsmbvgvL7skZV6x27Xjx6HxvrJADmbM6sbxPjV8Q9kJcR8bEjqvNC8",
  "key15": "5PcGMW1swpFwDXRtSt9CWYFXhgFj964n76pbPGHgWibS1rbJtMtjcWAhNZm8FmX7GRJxPg1EojCgL9c1yj7K6jBj",
  "key16": "SBiDRZiAun2JsPjecFiwbd3gBkgvRa6Cty23cm4cYcguFrcuNSvfW7E1HEhjh7cAD8VMkPgVdEqwK1RorVRJNFq",
  "key17": "3WE2avHwLcC9utUnwTGLnKHQgUDHKSAtUJtzG8tn6QNEvN6qJTi8MqAGqTSPG98rU6hkaJgByCJJUHjgw9QekzNX",
  "key18": "LE4kqS3Qb4WDqQpZsQuAcAZqrFMwV1qmdcwwfQGJxnr4LdLUfsJM29UhqbtHizjgNooNqnvdj2SPnpvKtwJSKey",
  "key19": "2wt8up9DwpFJa4HZW6HURNhdvXi1434sFrExunSFYsfTg1rKXbMb42xaiMetsQ7kT6qspq8sVpWNjddZWgD3GJAs",
  "key20": "RzkWeokzxjdkp15PrSBe7LMfr1sNHrwZWY7nzKrk6Zzzdog56TCyCro8iaCW26Agb8oB4cBYNwNCNgKDrPLZ976",
  "key21": "2thmpxSjwACdjLdA1NxkhZYgr79Sr25TcNWe5BdHgttNpRJCj1WDyHekE6s1BvyqRkeu8VpmqVWqvKeGVbrj2oZE",
  "key22": "4QhyQPPvQZxuKii4SKZfX9ma46dhRdnrHEXw9Q5dSnpdgWk3fjPtpYgS9BxMPrvEtug5nFMuXjFNT4KpCdHde2ef",
  "key23": "2dfBExHybameLyk2tUy7rNphzayZibC1Umk6Ut1ca59mxKAgEf6PERg2DXs5SXC7PwacDw3snfYkqj97NPQ35pwz",
  "key24": "5EfFjWyVXNnKeEBXt22yffuYzJVuGjLzM5xTrCShKWKPqkXywRz8Q8Q9QXm91v3vzvYHmSzw3ZGV7Y5MRkafcbEJ",
  "key25": "4Aheotpzygi9vNoyt5aFRuyqubC2TXhw7fGcYAh45EuZoLDhVXTTBcyxfTFpxriYu9C2yNheibD6eEp8eRVoV7Hr",
  "key26": "4G7QRBjUcH24hcCLb7g59Q2eASrYVT2AWkytqBriXWKHS6XUQtoXg94Y4YccAApA6rCUPWt7Saoz8dPYpNXo2zmo",
  "key27": "45bkBPSA1HvodPqdyVMrXU4zp71WH3rrNs3pVh6kKKzBc1vg2AcVCU1gVhjoafZRNgFSHpTrmuVTLc9GnfrTxPzU",
  "key28": "3eXvAFw8FGY11RYo7U6GBZakLFBT11Dah8AaT56St1toJi5iKmHveTt8PMR6vT1f7afHgpDJ5eZwtZwM8jGL4JwV",
  "key29": "4rGHpsybyQHk1ZogoeajKNVdX1cVjb5cnnfncyYFi3Y7EXrLYzAfbtUbJSAksX7fVy4G4Sa7AH2jiqTVXp8UqgVM",
  "key30": "5bA57F5sySULuDnEyFFNfSPYGZVbbynWMGHCMSBb39ATozaUUGCXS5iSPEHfJaVxJ4Zk1TG9H3cq6WxuhRJXMxNX",
  "key31": "4VySDLZEekLNmzmDL98gDxpd9DzaLxTkFaQNgDHEZjJaJiMHRsbKaX4Dvs8MjXRSCp5zGSZ4VCvmeRvJVd2ZEjQo",
  "key32": "2beGpEL7R1ra9eme1gfz4T3MX2Xwtcso3GkEAsXJFzxgk6Ejqte6dg29kz5d9LrLf2Pt34bU9EJCoZkQThmi2rAK",
  "key33": "3PBaj8ieStCPoKtggi3dybV7JvNE2gk76EcseHpSocYmDv4PULjHbjr21Nstv4wBedyKDt9KYA69R4AeQhLbqMUQ",
  "key34": "5BQ3bVJQh9cszbtesqoZtKzXycib3WT931kbQv5SseJP2N5YbdUt6nxLbrJujdoQEGMz6UA7QPhSRv7Rv3HfSMrG",
  "key35": "5zCrMMLtoiM45k9oprFxezsgM1yd7UFjtpjnimrhrDuQXkmvNiiiLxAhfXDAepexb9ufPdvV59khSLXWfUvhDdcL",
  "key36": "5S8yGCAbZPGkh7hFoERR7wio3m6qmfdT75TZRjmdK429Geqo9ePLkb8WmCSfCWVa4E83tnwLkKGjySBW6fWNYAKn",
  "key37": "GiXuX5KrazoWRe7BjErftayAVtWGxHUF8w9FK6w94wyZ7XE2oagVSjNHMhCVtm9MiR1XPryKLryVQQ4x84ZpLUG",
  "key38": "2KLxaUyL8X3L2s2F3djwmWPWmGBT6pUhtZpLECHhCbT8EhN43S9KEnD5GpDDmW9mhPmZmqaSccXQQKwSZ7zRudMo",
  "key39": "2D8mm8AoWHSpj7CtPRzXVrE5ZpWgcjdrUtnyLp3PdgVgwCCeQwG9MnohR1f797KcDSmgemyaNgQMq8v3Yvcaqmfk",
  "key40": "3Nfyj2rh8dqEpeUy8GA5imm5T3krwckhSmb93KSGVcQTXTpk23KJ6zfx3LH8QrJ7x9EZY2m9qgmLPffVKpY9ciev",
  "key41": "Wc4nw6J7ZnkMdnAfGhDvYmUpyDwn2sq9LbzErZitE29TGt5opMza3cVUKW24LKv8YpQPLF52iQdtA7f5VgWqZgG",
  "key42": "3yUAduqyzBeteqRFtXZ6JwR5vdzVA6yNPny8ZYempSPkpymTxHmaSEghcDk65MGYSZErKNGqFe7K1ro5cbNWrnpZ",
  "key43": "sSFtryNMnhbe4Mxi9ggcC8PBTshEhB6dqEN1EvK5jsRvgwGeSKffqvWDzaenVJ3vFqdWaXaP8ekvNfZyVt4JZNf",
  "key44": "4HPJpsjWWnwknAqQRoVfUaJEEeYmiS5WCjxXJMHLfJzFttb4brXGZTDsrnjWMjzScct6fuxc7svAwdpHvxF38XH7",
  "key45": "5zuKySNWXsshrdFgwMS3JZGiVqP8BWHJZhFH6KpsdjuQwuVjp3VULNkXJ4JYpT3j2Q2ADb2JUfb6DGgnyy1s6o3m"
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
