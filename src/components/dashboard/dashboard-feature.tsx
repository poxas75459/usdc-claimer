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
    "5wfPhprEW8MEDB99s748VTqGFqiBD2QN7KiM7PT7cRqWe1zcpGqnHme324X65HTpmGxDJZpcSTuj8X3JES2vz67e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rABkbYAixA47GWViQG46RDu6yuGHEW6wCR77Zfgfj328BTgfXpJBfaaijGE8qMepiD3MryCWK7E7iYdQ2rm7HMF",
  "key1": "Dfm1h1Yp2MUEWcofsPpG3vtLaM2j3eG5D8zXwJNXtS4wYK1JfyxeZ9mo17KrbvzMHHg9LW2gycj6hG369Yhgwv6",
  "key2": "4PuQj298n347PqHg5Leg5zh45zr1fDm4sK4XhuMMxbx5Kw7yw8wQAzLUusNi28ZY9gzRLAiTNNU4CeQN86JTPC16",
  "key3": "2HkaL6NQv4oGwTsHdMafpybtUkuw8BnwmJTUVarpnpTkRpqB6UmknpxBqTV15q2CDiF4wRKPyG8gTLP6UwMdGQug",
  "key4": "3ZTughoyAXpaSkBdWytCtHziHQEfAVLF2zgKk2VNVmShCCkmJ8ukuCAbf7W8WxgTrdT1Bf3rK3FX1gvwtpMTTtLW",
  "key5": "LHbWZTMKxFvN6SM8QZA1SUWP1nd4QDRgiw6eSgS7sR1k3fQnW1vnBkT3AvoYWoTMwTyKJj8P44wWKDJ6PNzpRm8",
  "key6": "36YjCgqTStNxnK4zCNVb31syGEvtsdUQ3T3qBguynWmdhuBmce4SyH1TtDNx2ZuYqBqEB4fTzEG1ZAKdTDr1gVAz",
  "key7": "3AnnoyKEkHbV2XL9EQaSN2K3f2Mc5iQXg4freXWgwAUP2wiG9TNPhxUNmccHUXk9v5Eg44ppQNx5qVTphz9ixk7J",
  "key8": "2wz35wUd2XeBTE6HabZua8xJHm68ERFMx7uhk4RzdfWiKV6RXntwnFQLdR5XJMp4NazSsPdK2Lwv6fq4fwUEAzg3",
  "key9": "4yfFCf5P7ZBSnxd2rjAGxUxz3ey6WRUbfnpBPFCsMbKQw1gdRnV2RuU1vq6zYjpYXHhiqstNTypFBTuTUT1uHW8N",
  "key10": "3Pni1aZSVT5fQeX1NGRamvwY8uLknZAQhpUPSbBR2uwucuwPmch3KFmjVcdmRRAg3DYNqDq5M29cJeB4zDznCDt7",
  "key11": "JVNytyWt5FU6nVpzok7GLshFZAQNzfyK6Djgt7enSN676GeebhrSzLMSkRKmiHtvhjeoZJHDULqprQdQF4ckBxF",
  "key12": "XzcQJvp77Zjk9E4Sp4cEUEBUaUMkRgM53LrRXJjDQdYPYRxFSRBDY3QVfu1uaLMneYEWqZKGFpMNJKyTNAsvq7j",
  "key13": "3rKq4UfQaiaZoHEYEg8RmpJYKbjXvD11Nq79dcJRWApvCpHZmkfW8KE6bJRFmYtoVY9Q7xMwcgN41eWnehJYkzXJ",
  "key14": "2urXYokduXFfiUgTAaYWkoR7oJA8uBRYd7ZecCCfTJne8b5vqjM2beF2wVxvf7hGSErrfxLmHnVaAMVy9hpUGBGo",
  "key15": "4GL9edv3NdKPW7rJEhoiGistpneurJmB8oFz4Cj1uokoj6hYKesR2qz8apBuAM4C1imr4b3ozcXJp4VuDGxCFWKp",
  "key16": "Rmqtfd6meSVmDTSMeFgBzzK9xQfP8u44MuEV7AtpMvCoo1QSzg7jv2tg8513thfpWEgArNM5qAAYbGJXiWrejeK",
  "key17": "2uDWezGCGdn9PE4RBAFMQb9W899UQd2GP2SQrXw6tnB4Eu7MwUmueR6o6oA1gXAPdLAtZV53s3aZMWG4oyT6TEVX",
  "key18": "5u2up6udj27rh2dSnSVBafGuSHNHQWeN2hL2trPn1fFBgcWHhbCy2717eSDXnoivMgR4wri2F6YAhdBnn17bq7kE",
  "key19": "tqkrHhXsF1i5hhuhAQFjGwXP1RLvkLVki6opH634TAxA2eAWm78k1RPgaFysPM5rsiEwscYqXbrGvzvpzg1FsgB",
  "key20": "KkEMfUPHYujaJYD8u2MU9X94VVngcrbxRiDVBAPDQSMry4kXisWbMkbfzyh1krLNvLuRSDMwUDqVm1e22nQMrqF",
  "key21": "cmLAzciXAexANE3NQN5ZPtc3giEiU2yiSBgMH64Dbtb5K2GrynsAQ3woojZRLab8Gb51EfR216D1U36Mv7ZFgaH",
  "key22": "58jewkdK2iXeCL2cRdWhNFQsTPdaHqagULnAD6YAYMauFKL1p8RL4DWsrziyaoKzd7ATWcoL29r5fPRG49Jj8aHF",
  "key23": "3f8wXEjzhDciwc3raZ7NhfD9YYkQq4qyjKu6n3mhbTGHLy4YY4C7CANKHsKmAAYzTV985DAEG3FDmkDdiDSLJLq9",
  "key24": "2UETFC4o9haj3CYhiQdEyvuSNz8Zs51NvUhRjm4TRDM3pnm2nGAhbKkSMXcRSUZSHaMZwyqw33LcYT8H69KRbuMM",
  "key25": "61cddCcKKPzmjR9Q7KurBXB1NP3xzqeMiCog91viRB5jALKbj6PXQ37iBmpXaTHFXDwH87voGYYuXv7BZzFZnJcj",
  "key26": "3jkExxbbZNU5zGTzXp3pfQLfjywCHwhNp5dnK3xF47Bupt44gFfKCWFpPCvC8Uy2FTNrxoFV5msAK7769NfmJFKd",
  "key27": "WxydJPiuMxXM3NpCbrPSjMUXUKfrQZqrZveB94GsQzfA9R5JUfcxBTBRaPsTG6WKzbuYQPR14h33zjjx9hXJt6r",
  "key28": "4z93eJR2GVQ1xnEbdK8xsC1bdJhG9eQTSBTWtahAyPE1d8ShLLWkwcvQPRVMRD7z4wQ5SjB7nWU6VfeSyTCjxNEK",
  "key29": "4ud4dsKi7oGXmVBzvZPQ6p9n5LNsLU1SWbkRZgVYTT2wnAQ6fWg5PjKaQA8wRcgWtsdHQxpvjCez6ZU5wnJbW75P",
  "key30": "Dr28WFTFaF8wkQvEuwQy2Knjn3D1RcePMbNFKH6rAmLYKZLcQoUhVozq6ncjUi9d753pv9HJrWbySdvWVhR8qzc",
  "key31": "4pTh2DprKauwykQdmmupBgRVXjjViYBf7gYGDAazw4hMFagtFctcXXxZNGzWZkhmqUg7wjefx7wxVnpgN4ievrVi",
  "key32": "snjZLYsoxb4rnLfZzXkmv3CKoJvCMHrBe28tY5PsuVjrfr6Bq5CP6wxwb3k7HzagYVj314ZYN7FqvVZcW4LaZn2",
  "key33": "R8ASnxVUq5yz74W3bjF7xP3nd1kZdfUq3UUvpofERs1VtC5LPRudVtQ9wPovnCyAoyQ3TVVjWX1C1BtCjWoHDmy",
  "key34": "4fSBYcmbqHTin8PopPNhcoWWwJjnNXu1qbowfAwiPewaGDpSBT1bqWX3VeCMRcuEGARH8UVWZStES9jhv5e92zvF",
  "key35": "8wnvPDwrtqRbyuJQe8bjeENty8K339nZAwChT1A931wV9RUrrBJfGYXptBRZX6mqTihaCvUY4CiQfeevV3DngV6",
  "key36": "5UCDVb7MDgJhozZtYQwhR2F2das2PzeaivgPUtmSUjeV12RuyUv1V767pU1kpczAhNjpMZTSztLPeBynJSTQWLEd",
  "key37": "4wSJznUwResBvdqJ1uHkb1dNLySAbAX3j1v8jwSmfKCFSWcCBZ7rtdUYvJAiYySx6qTUbKSZsJwXeq2KZK5cbbo5",
  "key38": "41YRwkMfcBqgy7UstWWkeNqWTE8K9ZxBKEzBcSqkNSuLRsb3XK2Jm9vXiny45BL6fD7DzfiPT1iKxSANuBTn3FUH",
  "key39": "5xkrs8uVCL8BwPvPkR6GBU3ynY5uF9igY6o9TizYTak5ujxNiUBuLiWaKrwF4C2swiyAkqfNn5R1GDzrU7H2mviE",
  "key40": "NsXQG4e6nW2qLwHEznRcypyk1YFCrkDFNM9mRGtYauHW1ETsrwKEKBGaTPtYZPhjFpkzMnAXT2vKLdvvWfiDTdR",
  "key41": "s1uHwLi6GfyJMNHg7jGf5VcV4UYhyMF6Nkc3QVJYw8G1JNWBtUDjAZfh93GWEUmH7aTK9QWeNtDFmET4bhnXCih",
  "key42": "4JJPi3XJSnUJevR1N42ArytJmzFMZhYhQKSX1CRMHpr2rqACF4UAVWDSD6Emt6MH5sbmcToBBs9dffjoxnof3UnS",
  "key43": "23aTGqzT5uxKvszSuxqnfHQBgBhf83ExBNkiWazmtQnnYdao4m766iEFeyB4vf8TNGFtarWPPPY4sLvk7mm9t3gk",
  "key44": "2GKxRC7FvGi4UcDtArXJLkXRRXK8fuN6sYWCFyQkZaU5WsjFngig55U1B7xphY5At3Zvc31H5mqrriq1hVmKWD8c"
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
