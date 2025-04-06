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
    "2Y4CYEr1jt5rtSEV39UJ3V8dpXBJvVBZpyktoPJzNQ4PF3ujAVYD1zJUTKVryQD5na6whXUBtbHbnb7iD6Y3kBN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wMxDR8AcLUJFUm1wfTtqVAMKpDABpruP1yAqms22vpDYRXcFr8vsJMoSFZLvQzrUt4dPRs1ZbDEPDJatmTKBqaZ",
  "key1": "2steHsP2GmrieKDTRQVCMuciyqrHE1ZRDJp6KL8ycABPTGBW9iTwUXn7SU55bxwiAExe5CqiMdoKoRd2eLQzrbz8",
  "key2": "5H4XqJ9p8u2HJKszjEP8CDyzVrXQYzj551jaYZR1Ah2j5qyjLyc2YJ2EKW4Rhyo7XpGbWydFhv5r8XKuosAyVu3r",
  "key3": "3rFtYSa2DyuNkmTY3UZdAUN7DBDDXcYVCGRZNS56UPpqKrL7sVNWLBd3g8RjMcT9GB52YcLcuwThZeGqpyDdjjez",
  "key4": "5FsTyhcrFNRJnB7rBzcivu2cTM41C67DPJ24pvfnh2SEKpXR6YxK5Kovx1VKYawnM86pmgJQHUdMhqsZnP5bKG8T",
  "key5": "KEvfLMQNjDVpJuzUPwyeA5Asq4x65hxsRBWtHxVquCrupt1b5T3YdGtZU7zM3YFMzzycxBC6wuPmnw27htAVF6g",
  "key6": "2n3PbUFqwbbV6ShVkUxh1PVLvi3BKRhm3y1dcz1sYJCvCPBVDCZ9gpznxgke5FSZuS3v6AYBWMFfHBo62sFXc6Dy",
  "key7": "4yhvwRTxvqfS8mbTEVqabRLVNFXq99s3EVNeTtBdHNA6G3aDRDGv1FrsxsMUFzZrraaoK4TCSMet8vWUrUQvS2cv",
  "key8": "5z95pwebrUSSMJq8VGAGY4UKeu7gfhnix2rAsho31k7J3VamoHWcBXDHE5s4bgBhhgRHLcDt7bqJJHTkuckEqr6m",
  "key9": "5e2BoE9svPERA9q92Svhs4CUDztcULHeNygczeXntVbi9NGBAWkppaDxFrnb3WDM4HXBz6ANm9N3QqWHpWB7QiU",
  "key10": "2JAteuJd9fcuyti36LtFWUbhitu7135oSNMomS1aa4pBw1CJgX4wXvKop84GV9r8SgSxF241xyirhfxZs96UnLPx",
  "key11": "3Y2aXrtm6cWjLAuHVMcADfyRekbyYJZYWUYUqBDeYqNq75oQwSyuRmipwYk1Z8FrzR4YhxJEMG7ejAZsvNrMWFnh",
  "key12": "jUBKtvgVN7bb9Yjkqr1ipdp3uvAkuhjpp6e4sEfe14ftyDRbPSrQUgix251gwB8YiHCWi2wU9bBXtMCyAoHGbLq",
  "key13": "AkYz2dYczzwiyyEK3SAAze4sHx2LCSH283tkA1dgvsymCMX2jrFXYGrYt9rLaPdqvsBrFowxnz9qhkeTXKtGrbJ",
  "key14": "61WSUyx78q8UnRQXU2g3HrEbiGKQ8tQnLF1ix5pruLJTVNaBvfsu54rf2YVGah2rNxY6cHCW2zdz4hRB1WDDJxJt",
  "key15": "ENE1tovXiynmDcuemcRekK69LCKGk8tSe6vFiGoTRbg68tci2KzQwhmdSSvQKhdmJdA542vQZ7S9reYX22CBNtQ",
  "key16": "428LhEbSuc7TGRD5sstZnZUKA8KnqHhDCnG9Qe5oZtKdZEGMD3rvPZcHJ8j667iQ9rbbSdsuX39GRYevQDV2XgLp",
  "key17": "3hDK6GSNncCanLzX69FMcKAzcXpvs7kDJHeQgNn3s9o4bGNFdrVKbpMcdmeN4Ecz35nxj2Us3T2978MBELHMMg9f",
  "key18": "5vsmwxqpeWT1U8xAubSkqmW4RduEcRecJrSKnscgUw4uSKtp2u6BDM4CkQMJbXMkjZiT6f1fEPEzxdX8uBxCqcqN",
  "key19": "2vmnxorkNjqhu8a8HPcwtSDnDreTHeHGUVCA55ZMam2uWwEZrsHTu2EjzqLTVAR3v7bEdMNAYiTSgHhW2XoZALcf",
  "key20": "XxkoeAXnZScXfBhczGSEgfceLVztwmuH4eJMwd1MQ2Fn7rZibpf9yDCkkwW7kqFMhgkjcR1dGGZhknLnR8tj53g",
  "key21": "yQoQhoKvMN7DTntxUE5HudG7X9zMn54Tr3jvSwaGiRScvivKxvZXxsSEy5T13GEnvm1gETJiCVDiZS4stFrhLRC",
  "key22": "2zj8J6PzehnMtEsVYNFLxCrdiuJW4kpvXJHeAFXwLVLaV1i1dScfcNn2Wrkg3Xuxs1FmBwBuh5onTyi7vhSPQqnu",
  "key23": "5rNFisVnQDLC4PreRGcCwtvdnkF7NiVsrGVNzgNP9zmf7NQuz9AB56VQqzWhyW2v7BkEDYzoaAatBsusLEixiVVg",
  "key24": "284kVar2eWACxeKAtiChdk4Tbkz4hBdWVeNytTHEYXChyFfz2EyBrBbDe9Xz9vnb5jX2ePaEYuN3UvWpNengPX5i",
  "key25": "2m5DZVbHyLmEMsQAgt7yGbtC9biRiZK1YNuYwZK6heCwjQyuKrKVYkKUgxu2QkG2DVeJBk4ivyms4zZmBT3XJRNB",
  "key26": "3bX2vj72RsWccFuNDsS1786Y8UCcCZwLaGJXxjWafvHmiBZVf5PCcqk3JLRCL3skCVE1baLW2zKJyDFxHpMZALgV",
  "key27": "Jzkey7YFsNxFTYvmWREDPhTHEEYR2wmHYdEv8xgD62bQByfDcRbS7U7SYcSpovpUUvD8gKGQFnU2SfigBKG1ZEi",
  "key28": "5hdeJTPtXQoaANL4v111CNDchYFsbp2AZSrwS4H57fCuZJFfpfnYhyyUxQKh1oiiH35cHyCQse6UNLDDpvqyVJh2",
  "key29": "58761XJmAffkP2DEvmh7X7R5YrhxMLFmtTJNDYjVesTHfVZ2H2rbkF1YtrQwPFZfHwLGPeN4YZVpBJ8XY2C3yXAi"
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
