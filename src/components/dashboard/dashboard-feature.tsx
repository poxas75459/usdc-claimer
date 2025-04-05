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
    "34KtAT2atQrCSopqwZC3ZAQrNgvwxTihFLDCaGUGE3hRvUTA6Ag8csKiYsiqo2Zfxf5PW1NMnnUYiamPMxJ8KZNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5chYig4q7pLZvEd6qrnBeiLGtaeXULW535LJnqaA1v8SVsRyRFfNDrcLZdnkFrC17ugh3rbxV1Qy4cyDgFWGTWmQ",
  "key1": "5dXYwyyedQC7sXDvnYmap8zp83T1pxB5bRgXGnHWHJqQuS2EE8Z8kbaivdziWq2St7nAhudwyBMjz6LuugnV244F",
  "key2": "4rrJ3izBRK15UTphLwhTC8qk6FHB8ABm8KtAkfKjDbjgXPZKg5MoMj6MfzQ5SufjBEQWUurZgrBvKLYuZdDX4TcR",
  "key3": "5H5QaDJhadhaV69aJcFTTcSETtby3tDvVFNV2ZHwszV96cfmLGgoRUCCCsrojxtVRZ5NuSjgpn1UdbnK7dfj1xRn",
  "key4": "4B36gJAeBPD57X84PxCPVAxXwuf8seH1vKeoCW8m7LaM4Lx1HhyoX7GWzPhkrpgtvwsNGMaq8brCrYuL7GH7CJzT",
  "key5": "2eutERUTxHuCgwZMzno5fQW1gpeaYDHgWBrGp52RKfPvCzztFHVMcRZiZ8N4EvdeAV2hDmYECW4EQJzkKhkKoHrM",
  "key6": "31Sz5AEEKpqdanUBMExAGCssMkSqikiigK1fMDHuDww8FbjB7kXrEHnYNKR75auVNdErR3NZVFHvfcrdJFdHfZ7N",
  "key7": "2V67CoeSJyKgw3y2T9reMwLAggZxE6V28AsxbTFCgbhJ6oCyXC57H89RCmDNszsNSYMcf82KoGw3rrqAfBs4B2bQ",
  "key8": "3t1u9BTMgvH7NsQbgaN2iqA9s446PejyemiYoLrZHyst35WfwtYrKNcoSqnUbcuwMoFR4RMgVQ2SVz8ductYyb4G",
  "key9": "55bpmNR62g27c1AdNa65WDbMRziuQZuuUe6XR3t77XVpDo7cpcDB6JuhRCgKpvPG4UeBe3pJyfadjS1AztfZTe4p",
  "key10": "2WrbofKPTXBdfPD8aXuumBgETivJHioAeQEiD28PksUuyP4RaiFR5yTVapaT81xSTuSLtgV9nKhzbUANf4p9fkBj",
  "key11": "29QpiH99Kqi9vhBv7gAL8ptmNDdPiLJaaG8AwUooK9jYy6qtsNv98A9eKbP2K5qutLU8QybQj8PieCp2WGR66tUw",
  "key12": "3BCC41nUnYDmX7vwPt8dEbpSy8nv3wGCknCXdHDTPX814BEKSJVuw65s28eYQ6XkG8gZFoHb2mkKTpxWD2ApgUHK",
  "key13": "CTAd8W1dU9bDysENscrqJs3oqbm6cr63SyCiUeeTp6nPb4CkYeBX4xAzNP3LyBvXeYz5d3RtNe8PM7R7wZeoYdK",
  "key14": "31Qt8zbLjhqVXXJnTT5K6mVYKR59qHqS1MKatKPXAjeVwgv2Z7543tjCAxcsxrm5UR5HnGAHmRGsLZMzvUcGujL9",
  "key15": "653o684T1hqM95efPT2pFnMcFx5hpW2NDf1ztEKJsLGn53jQkXy2jnafriefz9DEQKLUmVMb25Lk7Zahnotbz8Xd",
  "key16": "H5S4Fh96hcbNJN9vyZsv6CrYzn1Bw3uxz9xtkVEb1WY8jNCYuwSTXW1P4CFiKwKUwKgJL6Rw16jReKH7YZLzKkd",
  "key17": "4qL6W2KBiWEj3vxcb6gTHbBWZNHMJbSSKu2EdbT4v9Q7vphG4tQrUjLiJhGRV6M26EwZWh7LkNFNFzGZpp7SXuUS",
  "key18": "gyB3FxvWwrNHBey9c7Uh7fQy6qcHU2vHxBMACHFiqhw7tDF6Y41C8HbA684GBcZRvourk73ZYgm2oa1JLCXB7bY",
  "key19": "4FSa32j5YEg6BgbUfSroP9WK3cgQkhX13RQgfsJGJvJ6JHVivS2hbPxz4yVG2BfLz8pSPy9MYJ3RjGUvK7kg8Y3K",
  "key20": "3zAuonfMANPbGuo5ES2drJoWf6gE4CngcP4FrBvuFVb6v73DuHBL1e7MFVpAchmUTT6g6rUSiZLYJeva76cSDfQJ",
  "key21": "XXqAzR4TCxnGck991WpUmz89qDwhsDUyMspMEQdnL7NSkMgWmo1a39SN7X6j1i1qtsTfJxWhC1czAfefPCtCZok",
  "key22": "2gdEv6YCk75TZ694Mprkcv3koT9H4jwHM2chSBATfUre8BeCYWPXU3SWzvS65U5fr8eR1PFAe7kSanjCayVzHvPS",
  "key23": "5csYx65gDEqD9PJfcy2MmF6GeRNVLcrjaKTmEE1fc2Q9mq1s3qH3f3fMtpcRDWF1rzefq2MWmhdntfQgwFuTfDDG",
  "key24": "47Cc19d2DvagBW51FEyncSCWKRBX9EtKMyrVnVspeVpvQ3aTfTwX5R4AtaSKdasijUvdJBkZPW7WiJvnXjNLmVj7",
  "key25": "4jpmMGbYShgzJhWydMA1a6whJp97odVFKu9vzDVPdfcunPxzBkMCwGTS4uZJVmjAhkoV1uJ8RjxsNXA6iEmi1UUK",
  "key26": "FBT5mGrtNDXTXv5sbcwbe1REZvi6v85UUXynaud7SKtsZdHEVJUK1Dw6tYws2fVu2cfF3QbAHPzJbhtjnTrzAGp",
  "key27": "2CFSJQ1TYcw3HLbRqWuC6JVTC4Du4K6gUZhJA7wvhzWJjQHBee37vckQJvkUvE2VQXraJF3YgQAJtnUqG6r98Bfg",
  "key28": "2wn3wZCGcd7eYWradGV2ZUQUriiugKxbRgSxH1cpMyr7qGkZxjKspCRpc1iTfUMK8BKzgRguCrA1JEBgKVwJk26H",
  "key29": "5Bk65H46xyGGFHZKu351jGzUtE84B3wbXBTLJSnEwTVz8ZR2djJPtkUerJyua3CMegTkcwsF9A259Hpi1zZ8nPEp",
  "key30": "26yEsQxTDdem86XopRKXHMXLVvcis5UBycSWAa5kdx7soVCcShjLPZoZyaZhipERLtYyDSJcgRNQQGwc66cSZvop",
  "key31": "2wJ4xC5ugmZDwax422ChH62WCvsSR9qEqphW8aYzff69Xnz8RwbsvCTkPaXZrMrPomhWswxphgCEoX1xPZ4KtSfM",
  "key32": "5jymPnE9DCs7hYXuum6Ar5A8M2rprccBSbeW43CtExmHndSEfUpw637p2sPPEaaoAR1xg8AgDWvZzQtLJ7LLFZTs",
  "key33": "4N5yDEC3XCFHt6G8S63i8h9vSm9J7VdQTp5Di2isZz8u9SnQ1DKhphJRQABzqgivqxvEs8nggXuNY1Rr2mMJbnM3",
  "key34": "44U3Ri1poh11T9Ux126h7724nU39EXNGRG2UAKo9ySLaM6enB3jZXvTPhUAwDbXKKjVdVtfyQwoYRcV1uB4UXoin",
  "key35": "35P63ksmHmmxsHd4G2Jg2FA7MshFMK5sVTN6YuGzjHvnD7nNw476ouzUAdcXydMHdFN5RK12zYjNugk2rh3a6o7v",
  "key36": "5otsgy59biDgz6qKXGMuUR79vqe6jZteUCu6fm3sspwrbskbmJ3a3APRL5VZG8yPNfxmwLWkhbRqKnWCFbYzQfrm"
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
