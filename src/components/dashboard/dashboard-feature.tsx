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
    "2YTQdZidJ1k51Fbyu6fWdZiyg6XDAWifnk2kMRkG98KrE4E5WthbywiLsEEmGQeTZQYZ93e2xtGAdGEZ4P8mSivW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jicezZA5jp2PXpLr53mSFqbdaxuxudBn5LYgk74GjL9RiAFxAMw7vehz3Fy2wZyTLPhsic8bnkMdLV5PBqxWiSG",
  "key1": "5BV3u43H96HxCdGKG9Z6EAGRncdKcLBTFRDYm2H6REGwu5BodxHhPMqo3Cv88unDwPQt959RcFPVZzwp2B5PJS2Y",
  "key2": "AyJcEe9yufh7QBRRd3TxNjzy2jQ45dLWS6jCR57PxfyywpquUVnPo6vfW6m6XABW3Djcnz82ugrZ5QXgwFF5NiN",
  "key3": "2eVvrP21hWFoZsi6ckBk715TSv6wG9G1KPTHy6NxcQRQkRr4xipg7EpqwrqvnKCjbWaqrb6xxFsv6NVGiAaW6DsJ",
  "key4": "4f7PktBqcSa4p45P9N9bameb6yYYmK6ZZdgVpXDeTjr9QGfiGbpAMBGDrN2hmkqu5kkL86ZkD29inqE8hohJyA4u",
  "key5": "5oniVz5d9eAmqt6Lvtjf5QzE81UhQr28TBVCrV1o1p8MLZiWXWgQtaYFHica8u4gBsu85Z6nMw5ZEpAYsua1rGGr",
  "key6": "4GpYgrz7tKPQQjUDLkZvVTor9sjnEty6bboECtEj57FYhK9aGzRMtW1JFnduFwWLMVgXs2dd7HAXtCRdkjMyp7GE",
  "key7": "3LDUvdwwuVEfjuz644km8kL52Kh1N1DLoiqEkFtsKPuHJCRJwi4QUvZEKfSBpWV9XCiy2NZXhowXrvjDijR8RCf8",
  "key8": "3V4qHWGJZD5oKNM5jjCdqLdsxm4sDATF3UyKnKtANJDcYqjx6SjsbKVkFvXppSwWfYTcmyQHqb6VJoWqt8Q68EQF",
  "key9": "5uKHF3nhu6hapBJMskQ8NGVqebwde4DqvF9CD2BEcLwHmuUzyCBzBwfKhusC4DWVGUB6HahSBdyM4vXW7ki8fw2i",
  "key10": "JpfyPDXiUyWPb4qJG6c8dQsc6MrNiocabA8z5T9ZdWCntYVtjEpnTtAWozPwy2SAtP5KzgUtZHMZMmtvGVJhDWB",
  "key11": "2eJR4kJVg3QxYLT4rRzkgKreRrz9G3qf1iAeB2eMGim7RjfKjzJgVnEhcjDpHFLu9eJe2GC1RXPt1Z2h2he1kesq",
  "key12": "6NWD4qsQx5huWR1nr4q9FUufMR5c6njV3eKxZ5M63XHsstyqvZtyS3TzFxfWVmwu6ybEq9KYVDF2Y7DTHLeffiM",
  "key13": "67VAMvti6r2aq3rnpaf1V1MDt4xAwwhENoTB7d2M6BnVsXvLckzMEXMDMLzXxHby8eR7YkBznNXHbYpQ1ZxEtnqw",
  "key14": "67o5DXcWY3UWmTCW3zmrC5PPspT1iFnXLvSPSL6MV8MxwTBXQVQUG4PYYR8QVEanmyNz7mcCzzW4Fo7kWMBeH4W8",
  "key15": "4Utup1mFQk5THc9cx2AzdSUrdmZf2GNtjiUbytARofpQ1iyDL2zfpuYG9bnZoeVDQ3YneQFfbxthXWtK5ZpgdydM",
  "key16": "CpefMqf6kVRjXzbRU61JSv4GBexNApts1TSNdhY8LbkUbSTVZ8kSb5CYUZ613KspQRZ2sd9hwEDeTe43HHNBRPh",
  "key17": "4CS2ErRARTRbdAMg7wKCvpYSWiafSx4PchPS7NSS7Tjwfet9iqoszwRatCwXq8UssDJGbRNiBBeGW8Nwi7gP7Txh",
  "key18": "zQgUkm1m2oSAyNasS316mUWTXUuZwWjYWMkKCLDqZCAUctzsrFzWyUqYBQuFUvVeNBu4VBpmye15ECbhW1f5Uq4",
  "key19": "62KpucVs8Uvn24mS9AJUyrc1srHLxv6PJhTcf47udMsBuYPyiBCZb5Dz6KvZZjq7CDGJCwkunM9i6X5J5Pvr2pah",
  "key20": "59f5RSdW3izKa42sqEY62u9eijoEja6DiV65NefT38Tbjir8vGqt4saFDRfvFRk7KjFYxJtiLrQdAbxix1VwR4Hh",
  "key21": "cHs9giDMGBmqfTxPK5KtUSGRMZgponmovSxSGzHFKYsuopaPS48Py7zmg1do1gqyjW4pQ6f1yRKhaMByhk8sTF7",
  "key22": "3Q7TZSRaaBAkPGigcijjX2kLBW7u4dukxbeALu8QAY9esTEz4PAEJj7mA5EAwBYb7nZSWofNhzAaW8CSZnabbQ6k",
  "key23": "YBL8LX8MBT6T6bc2xyyrRn4zTEsdNiSKLc2PvxCsqksch2DMJKNZAyyR247Ez6j7KosM9zwzRn77XQx28T5FhG1",
  "key24": "4m3ojRRfLwfvX5rdp7YKFojCs4YETkWLLiSsZF2PX8z9m4MsEaqnA6Hpdf1PMbV7AMkJr6rrreFHB3HTVSg2DcqH",
  "key25": "5KCDwae9tG3f619qUtQRyEATYeR6sVLcVRcRSi5jBn5WD9mEsjmpSoapBGhFqtVfBWZ4eCntR4nk6TgADyKGYRTy",
  "key26": "2ycWiNbgRp5q8eVZWc4LrN13BFWa4LyQ1UcrLxPCyPEoPQcV3P9BW3dAvkMHfq4fM7k7QZtuqLcxVrJdbJo285pm",
  "key27": "5PnxcT2SFe6yLWaXB3sFo7oPgrVrpK8uNJeLbuZciWob3vm3zp2GkHA6TH3k9Fkt5eXfLVD4R2RBm4szQgYtuesb",
  "key28": "uPX4xBHTuK5yquitPiJHNCo2rsn3bPvGW4q2dwz3uLqDjdVCw8hvvvsRcJjmdgo1QdLnfbJoZ8RACr5ijcqDG65",
  "key29": "59kwp63Tf2KDyk2AmAhuMeT1f8oqMbwTzzHXgGVaSaHiCv1dHmmKxReNLXYcLdCN8VzWXxsJS14iw65Hm1DFRoJd"
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
