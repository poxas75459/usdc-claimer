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
    "2UD5xwGm4kaM1usGsjJsMHbB6jRJNwfJneRMJna5s47nfJtphD4YuCAezoQDDFX5HsuwcaKoUETFk8Yk5pTArqpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jzAaZzoRmcN1jAn9PNcSZvCAMsAoFA7kQhsxtmo2swKdzMkX2jp3rUjefBRFNQFbaMfru2YWotmrnDDRbBD86X9",
  "key1": "64uyBJZQVeyzZ3Hy9R8zVnjuScSNpPcEH6Ge5xZ8xJDHqAX1Us6cPvxfzUEyGbjxwadh5cNAbuJ8qwhnih5yRYyx",
  "key2": "upJAjWqB576rRDPnoqaHrDzix7M7JhnAxh3C7V1DSoXB61Db4iu7nGVVVU2CrTQ9zTKqA6gsRGe5GQ86EcknPzn",
  "key3": "4GBVXEatz3Lh6MzRn5bvQ26jERFeZCHs7gDgyBVkfmUPqAcKm1sUBQ5EAEmAgQ1vtUpqRw8wvxn1zbvjfdhmyz6v",
  "key4": "5QyL4M9EnXjZ846pzd2orj4LRzTTVCdw3xj5MjsTewBghwH8JJweLxByaxwM9nVm5BDNyGtU3n7TVfnS5ciRg1RJ",
  "key5": "1xaSobA29vYn2Kv8rwtx9Pm6ebk1PDBzp7QfJu9kRQcS5rMLZXsnrQVmiGV9qyst1GEtf35wMRANvPSWub3mpwo",
  "key6": "M2fP7hLfxHGa3Mi4k7JtFM7vdpvYRXpoPQFmmgxKgHW8AfR9DA6diQVS9fpbgid2vNSNDs283kyHtB4xQ2Snove",
  "key7": "5q7ZziXFHCuXvncT1SkY1a6Ua1Nf1MLzktF2f2Sws18JKeGR9p7SDweFFcCWodoQkLvq6R15YWHFHWv59eCMBwgK",
  "key8": "oXSgqwfwQ5cfLka2Xa4VQoR3fpmx3zMNt2BhbanGVphTYmbL7hugSh9ydH27NqJQHiNAiF42Dhsng4UWRchzBqq",
  "key9": "5r31VcuccfF7k2mTw1tbCeFVfktv3TWygvf8NFBRjCgBm95PVCqs5u3zd5KyX7TozvJ2CTFJN4jzvyaFFNoG8RXY",
  "key10": "3z8cSDSSApqW4P3V3JcM7cNPGoqt5fUXHYGNPB8t2D3UGf6cc6mJB1S9rLcjQsqw388xD6WV1qHSvEu3Dm8RX42k",
  "key11": "21Xx6YqSVFsmxozwN7rS69JBfACLJLP6AwX6vtng7sDPVY9qgy2bAZR7T8ZVpD1L9aN4rKL2WJRWefhPLgriQ15N",
  "key12": "2opH4ZwZLXmNaAMF9kCyP6WiT2SkC1tQC5XqsRpJ1ubXFFjCa4hKTJ7TjABPDkSvmQc9cwaDeuQiDg6rb8DMxLkz",
  "key13": "eRmxmyj2suDWmEhVinEQRbLqi47Se8Kxn58hNoscTh73Y3YvA14fdhn8L7oSS4qswhSBxTcmcJztgvpiDPpv1UJ",
  "key14": "4WXVDvRBgQU3esyEFkakAqBARnyU2BJRybYvKXUhfLQuTvXJ95hKWZnWhaFhiYdgqahoWhJ9EFWEUb8ECVUBh8Gg",
  "key15": "5giCFvB4SECVweshFSF2RJ4ARLqdERntQHA9Z9rceomP45A6k4QTstGA6zR5xe3gFth5kvxsFvhuyj1cuvekxqKk",
  "key16": "2kmq6YgF1WkBn8USG85NmUNK5XQ8T8Vo4pNDTCnnfHTFd3Gk5YY9NvAmGTfVKK4BEovQU68aZPvijpPMPhzMpid3",
  "key17": "314ZhSiwcRUp2XtMM7FkXk7nMgJkaDz6r6tKyWo1ZT2a74enjRwFrUu2Dz7xWd1KScfyW3C8X7MQXXFMaJWRrth5",
  "key18": "65dAUSfBCAzvAeUNX1AAeh5igxdqtCqKeViY2Sy7sVyHdTjaWd3adU6rwB5BpYHioK6iHi7FjDbf8R8pCDD6cy4n",
  "key19": "3G2pqxxmLvvcCMD1ENVkF6ekvYgu4KDa8zV4ikrd5bVAjVLBASmtXk81ibFAGqESMPAH42E2seYy7oxVr6LMhuZu",
  "key20": "279SVFA4fsAng6qhYv6LjUmS2pzSRgFY4u4D4P3sUhF4sPC5TkNwR2ZRb5EuRwKAya6QVqhoAcD4MbSDxnusMrxG",
  "key21": "2rALbjJKVeZdXAjtaxpANgZNASHUiwKyNT8RSU8qRBaj4kJQRDjhFz8PLMhf84tCKPWydkx9E9mLRygx2A622vDz",
  "key22": "3NWgCpSQuAi5x2mJiSVMTGZvC6BbTy12TiTgYCxfWrdVo4njvUK46jarrnF5XH5R6gt2Y4QC8Tiqrv4XVWUsbCdS",
  "key23": "3r6PYynPqWJTtB8UwxzjEzDtxUfWJdRXVRTH8WhXihcY9t6Vyf9EmyBAZkgaFL1asTu8DLZz22KSZSbJ8QVP6JCM",
  "key24": "R4wGtmeq1j2vRZKpXegbXSHCoUTo4Z17NpBqsRojrDC2hHykYkdVEQPmGZXkPDpsrewT75uBiJhEAcFzEBCrhFJ",
  "key25": "5bHz63V1nAvLmEmmUYbetLrJ9t8Q3fRFVZf6yrXjkbQuwYESaQQN8aT8w6x928R82zmwHRuvT5g1hZCNYcTcFm1k",
  "key26": "4zTS1ArQAt7wpgX2UeiwucVaadMYUoYuZ6yDrpVrPfsdbUExSZEXcUqrFX3KkVc3uCCJuCk9dZTiRchmnyGZqz4L",
  "key27": "3WhwFxFcvRWa5ygVLK8DV7ci4fVDa4xyf5eYPJZYWsFjHnPax8wiyoxEd3xtqt5uAxMLWJeX1fJxW4K2fGk75owZ",
  "key28": "g49oPZpX6cwkK1j36CwzYjEu9DGkbUovgyTtve2weSYiBXoVvLdXvLUKbFx4G7jcyuteUeDoenubuzLFGdmHAWA",
  "key29": "ZbXefUqjGSExb2Myp3JY4rcPMfddM2GCQCnZgvvYGXHhsNp3KX4d6W5zB7zjPLcZEgaxycHL32vxbGcQcRLLEkN",
  "key30": "5MULPTGy17Ym3frS1sY1ssdWeqbLKC69ut9yAnEx2s14Z2giM67HiD8U4phH57X5B1NjMZwermJigTbPeraeXmmA",
  "key31": "3yzz3AkfWvzaJai4zeE4AQt3LJpNdi9AkYrF4aG54f4w4AaRiFsWLoFnipQaE7bH1E36K7kg25cJJ3sm7jhhT7xS",
  "key32": "5rTHmPUffjc7tEKMhVtEBtW1tDSbH3AffqYzfzd1dui9B2f8CE4nM9rBrHJmcUD8uhZncBy5VBAjuMjvnxuZR2DQ",
  "key33": "4yGb97hQLCPygwqdhBP7j5pRY4dk1WpPL3mMVyLCdr4YRpXQ4E6hHVSpZa9yHfxhpMamcRBRZGDHbYEQY8VPTH3s",
  "key34": "51hcZztSmpBYFHQeYMrNxvQfhczvuovF31iTygbxwKjD8Rw1wvs4wjh5XLAaDLUHRzKmQgAsx6njPc3fKTr2w5kJ",
  "key35": "5ryt7j4TNcsb3q12BiN2vWfNQuzwfcL8mnKWzBog5o3xQanms9HrnCXZBQBuG5bBVJ3rosJ97shm5SAg7rJLc3o4",
  "key36": "49XoZWxWjNwoqBGQy7xkkB5Uy9ZKHhXHwZqMkmcrU2CcXSzRN82JYU3pNNjKoCzXrmmNdoPffkzRrGrgwoi4d5ET",
  "key37": "4Zs7ET7CTpBsyJQw7EthXv4fpsed4Dku9dNwiVqNphesaBLUaNyN58yDRFhFaQtxrJHnoia35G5z6eUDCYEDHZdS",
  "key38": "22AJNZFqDCRWJWaweKpvQdAco6rrwZUFsyB4YsjTxmAKEcDyYsyUHoJMH5Apa9PVMfZTNSMQuAaD8nVc6azLp7o3",
  "key39": "KFZyyszcZJc52k12nL6xL5spngb2z3fuPJ1wGo4vLv32HkMWSk9ZfaySTN8B3TmuETJBGUAmBKQ5o6FexXqJHRf",
  "key40": "gtJ837b46JjF8PbCZc2gevdYAHjANFf3VYP3yraFT7SLCpHiZf4oxeJ5AeeVpHYqbaim17Q7h5Ngtxnxwwrn2jM",
  "key41": "49wQrBkidcpUJbnXqh2Tm647Adjj2MnN1ADaHAi57MGprFSipscKMpfA5bwCrGh32kXj6aEkaw8nHQp1WPTrWFXW",
  "key42": "5n73rEAnMzDYwQTkr62X9iC5DiawcDUvf9eJkavXxQzJj7YntyGWi5w8qBB4iACV8rQJX1roipDhapfm5w6XqNs",
  "key43": "532oQ1S8GwjuV7pjc5ch6rDCRcRgK7v6ZaViqT2DWehN7ATFpuWTT3TvXjcSZ9Uwxp82yL8xDo9t6dNan7ZNNJXJ",
  "key44": "oA9xdNAe5DPtc1ezrAAjdkwzqQ6boXsBq4tRkjJVWF35TA6NBSv9Mm722Wb6SGxT9ZJ25PucU8pvFnkKBbPBseq",
  "key45": "2Sf7Q1eSLALPSCLvqiCMtiGzyKxd4cBSCWMtpijuZ7LL8eR4wrMJ6GZKR1AyJhi6ky4zzvNrXZ8qp2kejiLnRRNS",
  "key46": "3ViLA8bTbfFfwedsFDuQVtBWBLMy3G3aSJZUjcPgiZMrN6WGnWyU5Jo8owBbkekWb4rujfEv6LhaqHucJvR9PHA5"
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
