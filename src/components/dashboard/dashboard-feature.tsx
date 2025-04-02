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
    "2DRyrGBaqb1ijuMAaMHpWsJUHM6ATFd5gGPfkjqHYFZcbirfaYNTy9rPLB9D8VtBWy3r8KcvpucAtGZ1xtHgYZni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ZbNoak7CjpKonZ46L7t5hX2pC9pxuB9LhCseVXPeXrpUGNN5S5LeP7ZyFQpuAQRfAiobW86w7Lv75bbmdKCytn",
  "key1": "5DYrdGFc1V7iQQmcUSyZzbM3EWcARvaJVc98Szdk3DtVVUMNPB2XxUT7vwqzZDV5jeKTb9aX31qWRvZDG9tAs3dd",
  "key2": "8YM16uF7DtC6CCg657WCiyT4vTZu7GURf8iHgdHG5waEhBYQAiK5YknsMTSiwAEeVbfG85hTyi7kb4YER9uc4tj",
  "key3": "4gxdU4maNTJPXWgCtuzspykJ8fUvnvce3fRdXbhUzrTZ2VGteGBQuD1pefS2CMR7YrXiSa8hkSN4gdtbUwdVVYyd",
  "key4": "2NnVPQ3sTjpmSkDTgQ3EKsSDLQZBJEsFgDeSMKKzQg7MZfu2CSMk5LvXXkaxy5m6d6u63a3ETf2UcrF6y1gfCg8x",
  "key5": "5H1ZjipmXidLijucRvpUHftGJzHVbsUfoasMYQPsPT6zEBqoMUF7wqJraFQRQ1mxtWQANL33KptDoDyunVr9ZAmw",
  "key6": "35PyJP6NMsoiVmSqyrthuBJDzfpVDfdsd73yzvnr3zdR655V7QLskrqHd4QfKp4awjH1Ys9zCrFtPqCTDT2AYaWs",
  "key7": "4u5HkdgivipAVSXjZFmvhJFA8yaPH5yuGuU5DciEzznxbJ9n6oVnr1rmgu8jiSbhNCv7fWQpWMjHshPmC5nw48WM",
  "key8": "5xxt4BCaxMjXB94wYPumY1Kg8qvLsypR3qw6PTeRN9ot7hnjctXCxskw6kJs52nVbAJJywNmfQ7kCDTjtXijNmns",
  "key9": "4gebsGFfhySFnsdcCQY4eeDWyaLKsnyqNaUdqozahPJXmCzm4uL5PiCGjbDdLHED4KLV9a4qF7dM8uuKgEmk3n8p",
  "key10": "2ukobGJoqqgGh3pP8aTZ3F8yzWFpZTMsbi2Xqx562TGtLuMAHVTtADTGzhP3xdADD9i9H6QBVzpCF17LUUzQk6QT",
  "key11": "4gqa8xmqDExB1GPrJnDVciJNYmsfKod1vFwGfeWHbwvBzRWSACJ3M5yY4zTxip1VKgC7CsYFj4rRHGJ4SWZc8iVb",
  "key12": "3oGQ623WM9JmucjNgFVWemFcZAYgEPDXWWgyVDHYBZDbzFMHzY8YtrhMejgEC6eipRVv3jXRiYiM2UwwNWz6v98S",
  "key13": "2TwRdmXVtrgYSUS731ZxPyarNXovqWcVcvLw6FSqYvWtdFz6j54EVm6nSexT6NbEoBLBW4y4nDa8NFBgNrwAAjVf",
  "key14": "56AoGhfWdXWbFeTudLTCkpDCUHNehsx374nPZvAgVygkH91xLdaVFRPZK58c339JXXHVZbtsdBcXpqFU5PoVQucQ",
  "key15": "3BxEgRDUqnHq6XZuaX3NeT7LgwkEmrN2T4SNHtqHZo44PqQnQV4sXFow6SxAqoNpsVtdwYhYNkfqivC6DZWS9ELh",
  "key16": "2xwwunsVWqBHSMt9ehq68v4vpLTuVjPgYY7h25eyCrf5sixF1pEzHSZvDfLEhzjwBjTfWw3B8jVBuSeB1YgDsyFJ",
  "key17": "kZfyzL64RNebvrRWkWtC8zg1RF4a9ruj2KYuqqYNaPwfaZmx7aY9ATYVHvrPzgzi31SXdNWabFWvhXbqCkQpuzo",
  "key18": "RFdEdreRJEcBt5vZuXQwBDEGsM2toGwVCVfS2YieTg74diaLk9Tc3729TVjo92PNS9dKK6MUmdMGe1V8SnRqSAr",
  "key19": "8moSQYLZ58KSPZfM8ABq8BWXZRmbZzLq7pvPAJSW6BKAcqdcgPHY2kutDELZeNkqKAFTkhxRm4yqsTU3iPyaPy6",
  "key20": "5HWsCE3b2P6rgwUZwLnQUjPeSTjJwCNDNWHdn1Co2emhR2rDBnYMdz4t4k5jDMS5A1pVqSiLqH9AG9xaEqPb3FJY",
  "key21": "32fsCniaBTCJufeo4PhShRBThe3rnskUhAg5LC3MiiHERV6JL8XDJL5yeAW4U7NxFhnsNqFfzteLNHSVc6YGAVgo",
  "key22": "4dMEVfByGQyw5aurvoadhDB99TE5Yvwqwjm1Kf9qgcn8oT5WoLHhZGnEabQkuRwyKrYCF5XNaXYtXKxnNdgsTk1j",
  "key23": "36m2t4M89AHXVNATxJR1ojyERr1uogKxe4FCe2QkRTARLGG7UMgfv4jpqYurKdaPoNaHRURFRtMPcd5peSenFeLr",
  "key24": "2J64EepZGeTCE5nQGu6QspqPMRcvq8hAupr1rTSnJM3J5rEkgmPsyedPz6pS7kj7cK63QSB6yUtqCvkRLi2Ew47B",
  "key25": "2LsFUH9RjbGarVDz5FvSZDU758rsUrFRdZBXiJHE3MvXAmKhMuFJR6XCXCWTEcKwCFtXHie3txHQH7zmBNcNiVpB",
  "key26": "4uYuY3JSogaDS3ieSbHCAaajANr18L49AGDPeSWzjhKQmAHTS2TZLXY3rEjLpPncA3Von3vXGNkqrQBpxoPwHK6u",
  "key27": "5mZe3GekaBsUDWAeyskpcbviD6HhX6s7KDdvXecyBDMvR6FE3KPCuoenzRqHv3kDz9TrLrYqwDSLw2i4NSpAc81e",
  "key28": "3jYGdd3s9CTdmi7ZRPtE5shNak2f47VMcZT33DWDhsvq6MyTFcxmE4FMUpPhsHKqSGyipaUaLpRzbReMuVCgHBXg",
  "key29": "2Z4zSJQccFx4YQfXvbH59q6Tgv3rbTvZiR1hgUjQXQM6bT356nx4LHshbqoPXb4tsAs5n3Z7AK2HbhgLeNNMbsxU",
  "key30": "7YcJ1uHH6kg6H4mnymaRSZwK1G4z14ReZ1JBLYAMQaeqJEvCNdMkCDuzkU3neJThfq2LNkHCAVVFPPGU7DmpY31",
  "key31": "2d7FETvYQnfhDonCZdSDo4LcKSrFD5ks2StxaJvvW8NVRCCqdCzSeboBeRKZNx2E4wRqw12HBdyPiMTsf7CHYXxD",
  "key32": "m2iGK1RXU2gwEkwMjva7Qyab4PrrWE4nti7H5vcd9929wv6SBQnR1AQCPVfv1mhsb5DqjCU4na9HejMm6K8YjwQ",
  "key33": "czfq4gdbnw1ZWi6MLuBc5BVDZQoWjarLoDqaz2KXg5SYRMVfuaUtbshkdQnfmcXftB8jnuKrd7R9SvG7BE5PbUo",
  "key34": "f1XE3N1bznegP5W2vv32eySasE68DWsKkeMuV8df4yJ9rtWBYcd7A17x6Y6M2CzjKVjm8CwS3uuVnkw6SM7xXx8",
  "key35": "JSmVi4bcDF4grFgBGqVM5hJSckcnutmwrRYxJVVWnA72dYgkJsnZaXkjzVSPGU6rSB83e3h9Gv48QWk6p7EgjpU",
  "key36": "5eBVk49SWuigc6uNGTE5im2DfdR4VVTMZT99btdrABnrBbXKu9rkVmBSRag2s2j6vxPbwvqGS7hQxHUGzEGwhyRs",
  "key37": "54J71xhKjNP6ukXR3pnuvfdgAnxbAKpE1yfT4m8d29hjynoEwSxgpGNEJ96AA1EwNMR1Fp2DznmsFTodfhZ9MNMp",
  "key38": "32ZJwWxiwfzPgqgJXcnaFSYnXLQWXDN65jif12e3Q2mtp4kBSv6J5ikVDbeeZkuEm65L7zTXZcYsc9DVaWFtxEfy",
  "key39": "5XCv2FB6hTrbZoCAGd7H66ywWuxpQMQvW7hCvfeHcdp67CunUk6qs96vBQzBR3isjvJUQ9TtYTdP5dqEEBndzaZB",
  "key40": "5sRmT79rFuff7btiknqXZGgkEeTescXZeSn9ywk1AeDczVvPj2shi5wF85NMw8V3HP7WamywC8aME1oqzy9VDtcd",
  "key41": "4tVKDNAawP59KxB9H22ffoKzTN5xFxaDJuGUtFCCtFnmyLR3aWgVEWNSTaapH8hJFc8M3VYw38z5GPCeqs2W8akh",
  "key42": "37qDGYtLKw6KmyDvvcS6nh4vBHbmuVe43q6n64cRskAQ8azdbbQcQcNJv89FH3yrTb6PgAckxDfP7m5snxgAYtdQ"
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
