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
    "4392RiqnYFeR64AB7qMyT4gXy4XHeurQdXVQPoiF8UoLYNB5Ks4BF5DXKFDQ6Z26MpwcKX77FQJixS8Rx7z1DwqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ERZLkotcjYZwVpcPjgEDuQ6TnRnYKvK5t9yXUsdYy9UrcrwYG9QCRRrNnz81pJCeALaCcS7ZMhYRkk8v6umieaA",
  "key1": "G4YFAjZx8ZMQaZRafFsKhoV1BJE869XayhAFBFxdzaRP2aJGnyJr3DNSV1E8xRD8HtQ28N9mHWBdtRneQTnkaN7",
  "key2": "4L9Uni62XiaTpdGAGsgKNyeyqrah78TP663KCiouk2a7u8xsDBVfq8GBR4eCp3jvsXPTHwek911rL3KD7csQ2gqC",
  "key3": "3x3xDXwzTnjbauiieRRaY7KpSyWacZfTbcyGPJ7SrDWTfAw7vwb8k4cA7ndHioqmbW3jJfDTaZjfFov8LHbLkRCt",
  "key4": "22vfh3TfJFZckLCTq3U8FpHbaFkLKkj6W2N1U88qvdJtXP5h8nVyDPSvVtBmBwsxWerkuBdwXftQygJwwHyDpSRF",
  "key5": "2udTSb4SyGk1CWmVLANp4GsACKBhTgG37vt1fPsVSZ1k8HWn6DJnm5JDnMx2ApCg7TNXeCuWQHZgZGMtcGvwGGYY",
  "key6": "555P1WxtKAnt7UVC9pfR5iZnyMJg1c1oooUd3HiYLxHS4HrWEbBsDP2YGh3ZZXbQ5ZSjx7BATS3VkC9SuvDwTqq7",
  "key7": "3xzN8KBc4Mm8Nwvfiu5W4h1YZa4pzpbt28VPwWzAamZeSanqu8eNeAKTQFDaLLU92KXTUMz42UphgNToPFBSF2Ci",
  "key8": "2RobmzJEmmnRBed7hSfHMCrvgRwqPqymAVXCbYNxB8QNtdFbPjBRGHWxDnTYuxTATAeBHsLEMEF6tgFqZPrUxWTj",
  "key9": "2WNNa9Umeg9Ny4VLPM3A2UUMdHBNEWg4ou1pm4tXAgtAPPniRv2tevps9N2yHtmq8vk3sJ1fak5b1YUSNZnNq9Zg",
  "key10": "39pECT2bjjztSB79SHKs8312i2skwj8JFxwiC4SLSHLKy8FQ9797VGiLxLn5d8M5u9qipYbC8Zz82GrRMJTB1Xr2",
  "key11": "5nNg3G3KbdV7FxZiwg7RuPhUDR3ciH4is2hKSsVUJZ9LFGtAK27q17yZ5thHpejaZKMbGCcbW7iYFCc4AXoMZhgy",
  "key12": "4YTviufRe89jK1BnEewuRTvGfZ25SpyehZ9uGCD3vcfNuJNB7kBkh4ahxa3SYzegNwqbJefhHwNQTrSgAR5aJ7jr",
  "key13": "59TSsgE2ZTvvvVwBrSAMrKiaM66kPieA3a1kNzb42Kk91aBcUYMmc5vsSmCABHaucknYrdPmjwgpj61mjt92kLd8",
  "key14": "cMURieCS3SM1Wopn9ArxeaJUEGd5ye18sx4D2JPVNhAu7G2H2wt4NY88fY2ixDYALB13KDxxfk9naLhakj5mQfi",
  "key15": "j4TV3ETgCFN6NDSweny7m9vhCCgBLiYAANxQwE9BvMvMtQrcTRxBHK6dUryDSiE4Xsse6E5n4BpWU9JAyVB13uL",
  "key16": "pqQiXzBeKvp5ZWgKvA3y15tPsLhXf1x1jGr72LmazSRBp815AiRaJQSBkVC2DAEXGK6eyvRktTL3mk8Q1HKjaMH",
  "key17": "5ifzgRzWXLbKiVhb23jUdMU8EdwhP996etkf5RFdLocjqeFNkY24wMozvpgBszWU38hvGkJDQkXykGPimpzAV92H",
  "key18": "42TxNsecRzsrTTkN96hwb3sC8CDkiv1pX56CTRcWTjovW755y9imZBPY5AFgqnyhr7MqpzrYEdkGEg5ANNTV4VYn",
  "key19": "2VyP6YazG71Jj3MvVmhz9SXL7RBSZXExEUmEa4aGBJRHFh8zLEskA9Lpw9mRThXoLivFyPHW6bsp3H219L7zQhr5",
  "key20": "313bzyRkGUqmhQiKxRLpCDQctrbHRddx6Ljw6tszDpNXpahWM6xNPHK2ZH5nFssTsj1e6pU2TWjkLqFgMQd3XFVn",
  "key21": "4wf76pXeFupXYN7gc27WyfwZuQqr5U4i9gSnhFGUZvsAwbr4hYFkCvFqZWHVgBRMiAJEG7QiKVrUtJGFwoDMYjEy",
  "key22": "9z4YhKT13MdFfCuntwPeUMZoo9yDk1V3exo9tVTDTHGE5bQbnH9kLFoaa76K7DxXRUDQ5vQLaPRzD84cCQUatit",
  "key23": "3GT1V8A5qSZHQw4fwV6PP1M6FT2d1s7pyWVDU9xxZ1UGWKiPQtRr64QJhNaF1MEkCSpVm5Sb7zTWk7xsbw79mUFt",
  "key24": "5qA5xcXVPLWq8bkYCdPc6apWgcwngaQ3twMQ69cmZZSwrX77zqypqEftP632pxTRxbiRmaZwpRb9BiwvjfHq74bv",
  "key25": "4w1eUoKkHd8GFrqsVSSu59Bhu3smLeAwYvoBGE5LF8dr48XmCNG4mG2CjZmsLgKMKjAgcMuPMhreWgqpChExXWhr",
  "key26": "4Eij5uKT9AA2XD4aeLmRgoMZepua5bVzT49sDjHgmf5tVd2E6t1aj5rhU2Xcn7eEN9JMXKHLAogfxMtEACSeF8SX",
  "key27": "mQBVucTYegeHDxeab4foFfrxj6Mb8GWuLfUyLqBRp9B9PyXMMsj8KpRGzNbsamieZPnZJ9tvFSDPqTjVoqM8C5Z",
  "key28": "41mEJZp15DK5a27kKWJVRBXkaNCeoJvR9vqHZKB1Zais2KwhE6U9hWQKyjkJcxrhZjAStV5wSk4Nab66dMwauqpm",
  "key29": "2BvQCeX6oyAMuoJZgCmBnv5m384ggTdZdBRFrYYkLaATctV6WgbdktQZ7mwhufkr3RTKC9iXsW17BrjRaVoRzgcU"
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
