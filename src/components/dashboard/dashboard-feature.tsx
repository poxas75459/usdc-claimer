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
    "4R2M2KbyYrfFbThmSETVnuYvWSjZijMNH3eaa5HFhV6BJNk494moLuvuKvWHb8cnREBgg2CPhZL1i9UFbVoBXwHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32bo2YmES5yhWC9fd5XENJgWHj49Qt7e8MRy3Zi29uefFHoGK4scPcoGbySk7Q2ytHgCpThbZUHN6qGVUNstgvN9",
  "key1": "2svoJ5CqUyuHExRe7vpdvvif1jG6kJviPEyr1LcZDxMVF2MAF5wfLq2aWZmFtrP1oEDcr8VopeZs9dtGTZyTZ83A",
  "key2": "5Eba2Q4uFqt2TNx5z2bhG26Z5rqYVYrr9hC3bXB2TBAA9ucdPRjW3iYymtysEt8AYvJZ7snRYN6zHuVGgqyNZNKG",
  "key3": "4wXo9Hrqmdc1EfzExaS4SYuXENEQYxkwGEcELYFQdhKzccVZ8hX6RTuQyE5vBTYq8p9XzGd7ZLdELpsUuJFmPmeE",
  "key4": "3cDU21jGqq2UhZ1ezgN4PF3NzaqH88eSZ5GeYHYbHgaFsCNmUgEcbNJ73WLmZ8yjx3KoAYbm37sYeUkfHZc22njc",
  "key5": "5TERAYk8f58Sy8bMHC7wN8QGSYqmyftkjNosCo5gwDN7226L88MRrV5pZLcLQjRCzvRMZDfLFX9xnGZMJKUBLfV7",
  "key6": "4iGmg7UyFW6E3Y43jrb4B8AwpjzxZ4WuCzmeZnXUULm6d17Dh5Csa4XseTv75AwcmabsAZCJMwG5yWXYjw1qGrrG",
  "key7": "2USzdXqa2hm5GH6biN3qazW1otaqFcLUfDa1csV4qek21SLwAwMxVjoWzd6rTJfy5jUpuhifbuNpgLF8VUK9SxRS",
  "key8": "4ESFz21tQE6s72EoRGxeU72LubPccDqF6ji4wGZ83HoqsXjEyz7aFvWB5AZDsKoTuQ4CNfUBigMaKsbhtNxtC3E7",
  "key9": "2Fo3Bk7XFcRsw7jptc6SjyUjTBqt6knhx8NCCbVUkR2euJym1VbYstxYJQWCjHb7EC4mNQt277jsMFhoKM7iEBj2",
  "key10": "4N1wuT9BUhQq9h8j7VTqdjPWDYoK6GozJvaCM1zJ8pdDyG2rLmBoPwgreA6JNMtxWeEUhUBJvCJq53XRPpnFVuaN",
  "key11": "3DZMu82VyWH8dkUY8ueBC7hvDcs6DEndxKDuPJzWp5k8quL9kRkGfjCU4Ly9i9gDyNnmxazCqentbBq7SvvvHhnn",
  "key12": "YwmU8rXSAL6eSxVX8B1cfAn7htEht8fZFn9xwGMZBuLgrc5isFHuYJuSEoihPCXAMhPQCxeaMHi6jSDZ3bZJ8p3",
  "key13": "31UzJBmZKYv9GV5SyhzNvG4Bqe8t1gJRJNsMf9PBWfHFERSW47kX82H5AecxCugW5di5dVTRiSEP67MKgTJFkfXg",
  "key14": "4fjaY3gh2FeZMnQPD1ueYeFitGmcTJNYYe1oFijmSG7bZuFmG5sSxYrmQpkTxgv5RRQzeCiRQshTbvc2wisaoD7Q",
  "key15": "FNk3nGZeNnrm9hvaSNTerJDe7ZPMCRMvUJCnstbuxPFRCXA6xNTpZKwZcPCXP93C3Fo89SkCs4WFTJkGWz8WjmQ",
  "key16": "3UXJ9VdEqxNnZ94boZvkpbdPGvohp6qhvLSmqzUeo5dGPC8p7aPLK5Y9tA29CWFEbFAvawsKnbc2C5J42Ztqw7Cf",
  "key17": "2gWRaBHZKh9FXtdT1mm6hF7siomwAwv5ZFA5sQZ5t4xJ42wZzxdRVBW4rHePkh7VKJWMpMyhEtXj7AGDhdoDA6FD",
  "key18": "67Juk5VVnLXEFcTXAyhtqBX9DGAh378uEGfJTvm8nDhi58ug4nrPzjqWLfWzUM6545zMLPx3vXoyyWVhRpsGW8nk",
  "key19": "4XwnzQZRpMru3J8ax5BKkr3nxMvBFnC12r5dVXAu35ohaDQvmYzBdri2bBEL2piK9NRHhGXGy3nzDyuGHjmptvpk",
  "key20": "fTUowk7hSrT2tj48fpjVCLimSfV893RtQhFa88dSf2pnH6epBk7EK2fRCHP7uL156yvSBFbZppqsDqnD27kKFiW",
  "key21": "4cibiR4tpW9yy5x9XpUQUb99L3wtGSdBsSm6KVGvUJYKesSQUd9J1dPm7kGVJFSCYaTbyAVWYpE89UFL8PcKTVy8",
  "key22": "3vwqLYdA8kc8f2ma22pSoWF9zKCAdVbiTY11xC3GCW4JRLxJ1mqrkCq1BmnQL7Z7vfLVawD1FUkjSek9KpPV2xzs",
  "key23": "DzQa3K3pjF794xsccyRS3SjxGGZY8sAQmmEpJPEK96ccUMmMN2w4xaXsAzRAdh1UGXDurmv6nBhmEMoC1KsrmmL",
  "key24": "v6FSuAba6R4TBR9QLpdfKv52VwT8YX3NRtGwowLQJPJAfnxjS9gUvujppjmS7QVBetWQtL8msJPHBjpDZbEV8KS",
  "key25": "5vR2a3twBr3n72bWsgZuRLmgxHSdYmaufPki2yEca4sq2HTxUKGzEK4WsCNcJsysaHRYye3P3FK98MyJajpB4s9h",
  "key26": "2t7nQQgQPZvQ2dyG4fca6mxxMSYWDe1DKR86adv9ixQLwxXGxcynops5eCaXh1Dzdf7LSMQBjF5g5pSjFm1RVXrw",
  "key27": "bncGyXYvw3UfnJbCTMFBch8bcQqHZjk22i5jFu56MkcxZJnvAR4Th4gXdUy4WzFb2RUB5j5DQxag7drNQd6z4Ca",
  "key28": "ysoQceQbxGyoWBPuDfS2XtYwwRmoDqsxuDyeDMyWbqmUaKHHUb4xbm6WXYPATe4LA49kbzkp7iaXVooUcwkCknF",
  "key29": "3cuUKzecUFtk5fSV98UaMmzXe3VpTgxNG9buDQy8UNrxnReqbPTj8rfXurs63hGJFv9w6fpkWJQiLCFAdLRBHBAu",
  "key30": "4g5PAvoD6SHXiDzuVZWDADKL266KU9J6W8LnfNwaECV1yMfuQTNg7r7iPsmu2d3Dnb4EKBjQHghoUQQPbjxkfNmG",
  "key31": "5xnBBpoMzK1UFMy3WBeknwTkiZ8ttDshH2nSeaRCYJV6CNULU2qX7FPLje7mYjWSWwJsdFka9KSJVgQUCptCUgFz",
  "key32": "2L3dbe7KKxbqQ2E53ywoNUncYK9jXU8xiqEid6Ez3hdViCbR99t37iNqKm4R8cgrh6JRoLFYBCXH4GXq4AuNNFSC",
  "key33": "2yLUY4iipocZ279h3zjtfLYH5EX4nrjrx2A3UPwkQSXzh1YebDASEjC25fK9PaZg66hJNQ5ZTEa859N98gJWHcJH",
  "key34": "22ALoQ24QEhecM8nZbPg2QMqrfopAJGCe4CfzaBSSDFT1tP5No6dbT6DPuLvV1BpBDrth8qT1gDX1n2sscS8ys8Z",
  "key35": "2Yhrd5JBT3P78vY8kdBv1UXsYcrgdEPyFuZH8MYxxQQLHJq7pQfkFsa2xHvBF7qu1h6G4kAC2NUXZevgjPofL7Ge",
  "key36": "67jhi2yWUnuJuLvwWnAotAfhzzBmhR3v1qMV4Y3mxpQCfr24JNAEMZzBQGkC4nsoRnJMdj2NJhCLhpnmjjWQrQb1",
  "key37": "CJEnhTsYWv5yN66nsvGt1feE3Udj9m7ME7KzeqMhB5hHe3rVqVrjP7xMn2acmjvUkKnHGGmfeGQXzoiGNPia8UW",
  "key38": "pXgoA5B2VeWbFMw5krJKC4tDbNCQAzELAqk1ASTBPzNvB8Xxo8gcHHd31QbNu1gmAy6MGGsvBeoHekQuovrYC8f",
  "key39": "4x36Xj35ive6knu5qckH7sWchzAScM8LyNnXDHBVqBH6Sy2kueMDvqDx9UhFMjvFSmjmNSurhfusjMFPyHVrD8Vm"
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
