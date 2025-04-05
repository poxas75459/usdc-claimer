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
    "2ebfuCJ2LgMNvBoLP2v27kgYe4RbUy2R4BVvb3b6fthcqDxutiP7wXS5jv6PVR2z9Mrz4wapepEnggLeVgC8Bc5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mxTt1441afVquzUQtYPDJKWMLhEHmjhddqo4o4Qi22rPjMXBX47fDig2TQ8TfePBdANZJL4riLMhsorTQHHBabn",
  "key1": "2N9gtQjRwHp4cyY2da6uhHTSVXidxaGAyj5xGNk2M8NCQiPHgsi7sT13eLFVV6gj63QpCJt2wU33NJJm7kMR36vX",
  "key2": "PZQ71cDx85F84bCfXicLvecv8TuRJNp4khXT56muXcmeaUKJBdQF2qx5ekZ1McoErLas9rok3k2WfjKGr48ZDYV",
  "key3": "21Em7Pyg42RPgMkTe8SB16ncJZPbdRFERTSQ3aQ8BhfknQqDLUDvAm7s6LwhZ1BvZKuTP2yeA5eivgNAkciq5NmM",
  "key4": "5Z4jKrE5c5qnJdQTapFzPoWzMpWQ6Vy9XBfbFgpEmwWr3q87daEbij6XC7pytrMv24jHA6Ec2DwGtkxTYzPCLNeb",
  "key5": "2DWuKwRGgkdv6SJD9W1CapdURSb2x15wJeUJWjaMnjGDHuf3K6h5UYCMJYuDwzq3kjmAJB72Mp1TPZRcx5PBwc1P",
  "key6": "2fWsLz97eyZpBoncsXBzDJcC1szSh3mvQtjxSy5NVH3QNgPQC6csgYqiDyJbAPLULzxWu8F9s4qr25nW5c7BuGtq",
  "key7": "3HUXg4WHAxpGSFv6wsx4jebBmKTkd5CB4yPtCqyMWEemuT1C1LfDaDTeimrwgb4GtGAb2vpqRiKsvjowsCKGTv17",
  "key8": "633MAhVWULgR1nvdaNVPHXNt8hrXpuAYE6h8LmZ11C1zaLyygZvuY14AFz5byoT6Qh3DtQr6RZzELg4uzvQ3c6aD",
  "key9": "chXTQTdKvFHo12crtA8SrgkBx3KS7MfaNhv1BemZgTgjegnXFeGdBWJxYAdbPNoEeke5YjBKyvvhbcMXjNMTuUK",
  "key10": "3XWhHnUGCk58hAsozDhZ6JUtonifTdmNGjDV5i4p9vN1b1abKP5rc4ifw4jRASKXcvxgGCCYDHNr5YFXLGJqkR2c",
  "key11": "rDHxhLLg6LuDVoDywiq7MBc8oRZDudgF2NDgbS6USyvwQi7imh9aYYdiVUctwcfLByqBxzHHuQDSR6A7caTzJyz",
  "key12": "4wzAc8Lkfj7BjJuKqzFv4o53SX5eXzH8NtAe8TZYEBzXNARyFVPetHJajqpLzyR6XgbsSpcKdEfmoAhhuGXto1hr",
  "key13": "4ws64vhUBXHoWaHj1m1cfqjc67yoC9uVYs8KhKzEC6kGxeYmJvZcU1taQ5oSPaENqreEjjF5FsQBh7gLwYkwj6h6",
  "key14": "5W3dTivx9tMK15raMYcF2nCi8opPWZE6nZDEk6ymbxkinD9Ew9fkJLqkXSXKf7PKagd15y1fpBR5xxaaPBvbF7mZ",
  "key15": "4WunFve8GU1tqsBXSoyyCpCDRAjswvwD9EziXnwPvPZor2WLUhowLDfoqc2xzXcY5G95RUzKKcGDM3vMoD8zVaa",
  "key16": "3B9dC1a5Hyiur3wrQbp5SPaShTzRMks9ZfChTcH3w8a8DTvoZu7ebZ1pTajoq5q6APNKmJ3YCh4H1irV5q2h22Cs",
  "key17": "3W3Ej5mbvT1s4326FNbxjJaXn4tP3YZTnf3G1EwQ3ns1pA3vTS5DnqojfvgMCpZWU1bchCYVTRjWH6SazXDkAoai",
  "key18": "4S8WKUrwwFzDfoh4oDh7wZdxA3KtPqcZSZW8ShxErJUkMRsszBusxXD2F8CqFUY244j5uYSGivjESwUuNAVxhFBE",
  "key19": "u24iyoBhk5GhY9YGw1UvsNosPEpCGcY2R6h5GqhgzXTXoV17vSY9tzR8VbYsdafUQEC4NMmVkqjwpS3hwpQ7sMe",
  "key20": "2Y62gHh6wtnqpbzhkojczfZRQJHRJT1bgrFz5Q8epeedjoADqiT3xguFnRWhb1HsdSd1viuSxQdAAVFavnofs64z",
  "key21": "KHS19jqDPjVkMZcRTgXQTeg92Heuh859cQnAx5ATfLGC63x3LEbgXpLfvrwk2DLj3ijJR4vGGKqMyUB7UZYasvM",
  "key22": "XTnghCovUajYBnGgyUuJgS1niME6QCLPqHiNXyD7DZsmsHamnWwazS2diDddnqe2fi163YkFUV2NvRjcoyCpn8F",
  "key23": "38Geepwips44QsQNQzszKyNJ7jyJj2SoAN2j6DHgLEgzuKRKPqwJsKuqtLoQiJs4KkQbewxwhcJp7zG2PeYCXXbx",
  "key24": "2kdrK7AjgRP7q7naXpqXUpdgwoRvg1TsC9EvAeDW7gyYamu5CN1YKVA58hiZEbNzerYgbHMeeQvdwo8syVtYbFYk",
  "key25": "4tGmxHXtxWsv7WrTtmeri3MJjCGGdo9cbD51izV66etUUh53p2eJPDCyQLZwKr7oDjNQidKDR9dgyLotXqfXqCQg",
  "key26": "fcgKktrAVsZXg5rtxki4VghFKhPVGfJp6GesY9sbEEgVDBvGJxjanvwEkZJpmuKHpaZv8thF17DyvawLAzPFduZ",
  "key27": "2ndn8orurAneF1YvN6pxjLa6jzYRLP5UZf73wkxLVnyuYDQoX4w7TF6Se4EZhjTTGddpgyER98i8Pcr9LCwhjiUB",
  "key28": "zmwpD77LQG5U4WUyexpL7ggHJF34zQyKZE8f1R28sqZyrf8Dq8rsxbdtNTpx6x8EHY9ASyU4vSXxiQsR8J1E42v",
  "key29": "666qRRhuS9H9EAcCjVU2LXDUrjMCcLFHDBg8bZUMcod2wJTTyJV2ru4bakriNUfQRQsKkE9mEwiVGwmVZMEzRSLA",
  "key30": "5MTz5Typ2xLYXqXdvbdHRYNKtPEWtWftgFaic98yN4mUimcnhAoiS8hxeML7MLBVaRUsAKZWMVMKAvjn3XBqQHLo",
  "key31": "SVdPyMAv6LEfDqvKqteFCW1c1XxAW6jKo1Rv4bk8J6tm6VwRcUBgnPcYG7yV6UZ26R9WtBj89fUAbGmFRnTTSQi",
  "key32": "q2VRt4BFTG5p1HgBRUHq91uHcV6As9u3XkXCjuvYi49auhbbefgTQ4qwwG5q2UVfs2DLqNddaCtPWLm9SHaj1oL",
  "key33": "518Vyx1aSzFc9vemmNd5t25oksATEVttqiEpVVERF76qwks8MtL7FWeLPgjg4AgAA8D7Fa9CuV7HuxVY7TjVrhmh",
  "key34": "2MJ6sBUbsMf854KVsB2cWU5D4nTwUFYBrso1WWeoydqdXFQCPtnn2JErhSEZxDPQ4PkgpbV3YeZ4zFu5ta7hYZJC",
  "key35": "2Gp77e4PkP4N51bUMmDqXmCifYtzncvWPkwDDCs8ST6zKBhLWtdkaEtVffNcnLSJ1yZDUkcBx8g9cFndz1UZYeEv",
  "key36": "3bowRhYXDSD1Zan7ecoYuEgPKm9Pe8H7cCrwvLxZur48pjYeYxMkD6CJbkX8TmngqEpWtNcKAFNn7s9NRn3gf65V",
  "key37": "3gSmrWYv9hY6r9gp64iBJAK7ztnE2Q1vrXkgikzswDvBRiiZTgKTskEoqxTqR8oVwr5PLX8r1Lp7ij6CeZTBg5gV",
  "key38": "51KkRe76qyS1t1gu7F2Y4usCnXkZLETRhRNWb5awvegY9o7wNvBY1EjiPUYizXcpvRUNwkt2qZTLcqnqJ2i4YJ96",
  "key39": "4JRbkQa3i7NT1PNgwMR3cUrHzXr2FttCoEMZYLhh9LMtrVr8FfUboshviYLbeW9jxddeZk8NQg4YqpN5vDKazMeM",
  "key40": "4WKdPeRBFbrumQZiPkkraGN9YXZThpwZ3QS9dm2xembpmS6kz7WXBF6Gxhia49tx6nWWnKR5QTrutNae7cAAbVsm",
  "key41": "4AbHzkzmBRA2PM3GTaqF7NiqKLsgLKfabZU4FBzNcsP2wqVXYWYgasFnsF6oUbDJh3LXsCCRozcw89PEviGQs1XK",
  "key42": "58SQwQPe7QDNQMTnJguVxp3RaqdiEVHEbq9T9YnzQ6LXSF2odP3VKEiSFFJaMRbukBXjx85qxDJYZAKfKjFcxGSU",
  "key43": "2UQu6ps7zPc7EHpfNTDi8ffsRNhQqnjDKZqPhnyvQtNPMhP1scgWaHqe6b4NV9dzzdFeAtPZ3F3VMoJQPwNoChF",
  "key44": "MrxbWtFfFvys7xVseWSmLz15rvbpESjtepFnrfCAd4VDQqW3Hstx1bqJG2kZvHAa3bvxBRWhF9ejBbtV5LHgyfg",
  "key45": "3QCB4c3yXc8UJox5QYXhNFjq3T721XUqtoFAV8NEi5ePBbtWLaUXiVRMSELVcXG32G7Ey1VUoRPtSBjazCQbgdK5",
  "key46": "3dXtV35ACv4BAZ1dsV2hSSv5vSjQN2wUpcEypWPdmpTLiR3epB2rixYpAsgLyTXeEa6xR3JVWYF4fcFuec8PZHUE",
  "key47": "44XX1dxaqypRVhLJyYFTcyix8xaPv6CrEkHk9C5HWbUUniEZrnJxT3iuRHkW1m6svMGM7gQD6FotH9YN5BGRit3c",
  "key48": "2U91JCijt7zufUChjerEEXLmSHm6KQG3aCriqgSCkgTr8eMGhvbTgj1angGshgpdoZ87tjresxMhPQ2AUczNaKoj"
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
