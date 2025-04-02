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
    "5MXSSdH97VU4c7K7G3bJzydzxxpoqZ8ZEsgHF746aNVCyLDskmEmdKpCwjreg3jMFvWfLsTQYfDzDbZGykyoK4PQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FDRe91wSAkhgZ3bSxB2FEt9PFYzD7cveb5sVkG5uodgY88s4TbtQzSJtBMoW7mCt6i42SdUsKtJaWCAoZU17i3r",
  "key1": "FYQjzDFJfyT3ZduvmZkiunih8Sos5i6bgYRJ5SjEsRiyHy9vbPgdPGKNZag7dU2pRJJ4o8VSXnfTGDripCHvNQa",
  "key2": "4JPARuGNzsBjcF9jg4TgJKhvNUpuoNBUaexJLNp7P3gewCecYU528Jt4YTBnxKk4kmTuHp7Vn76Lfn2LVJsVJaYz",
  "key3": "5P4LeU4d63XvnTcX36QKEamia6PbqmYHhDMKeMfYbWQGpai2DUQWnRBUhMymokWMiWnq5VyVFAgyDPFHQ1iARm4C",
  "key4": "512A8QA1QpjsVx2hB9nKU7eLiSmgdmnbaXLv9NDri1sRaD2G4vjZqDQjQs3b6HdBmYczEoQuGjwnWxKbUw1wdSvB",
  "key5": "3VubTVbrnyM3q3YF21ecUYGJvr38cfjxUZT463CETJfX9q1RSHZyxQmPxwiqQUQ9A6jhcoaPwu1ioSp8fDY6p76V",
  "key6": "5Uar52EqnbB4BKgo9uHxkT9iLWwgcvFdBaKsnSG3ibbSYJ5mMb85PvTBqBiZiHb299VR2dfT2NY29K23YAJu8sTA",
  "key7": "e7v2n7FYjnX4J4gYB1sZTgM5poFDQeQQ8XV3Dd1Xp3zDPyNJx5CzGZZCR36crPGk5u4UmcEg1GLzqZ6MrvgTyEB",
  "key8": "5Dxv395pJR8tN9mLpy7sa2mY93hPmj2iYTwjB5KPHjAWmZNmTV67kFyTzTXQqb2hpL9CMnVPsaiuoZnn5XPeCp8o",
  "key9": "4CjzkeDQzyHnHt2GGka2nwYN7oTEDD5JSFcMxrn36T2v73AbzUNjwZkRfuekXBXJNrxTQR2L6qyGUwxGSMwaaHw1",
  "key10": "3akSq8ta8H5jnaLAKQN25U8f2ZD6MQaqzz2eePxkUBHMZnJr5r9GKYUzwEPvgguYdkQi3hovkPBfnx7rghhJ9NjA",
  "key11": "3PUjx1w4wSGgCgUFeChckmXGZhxR99NDygvPGZVXgfHRgsuzFZb8cYraCk1TAx6suN6qzQtkLZqdNufvMVxYriYF",
  "key12": "4EjU9W1skyKYBqfktnNadvktmSVMLbSnxqKynTtLUG87m7A7Bs7QWzAvxSL1PW5bZXRM2DgGEy99Vo8uYYeKRSGe",
  "key13": "4gXumDTYWvntK3sMoWFRH5X5RcbdppAMeoE7v82jPjHBjg13T6Rih5kKqaxURY7XjZzGGCTiv4y2cRRrbHNL5W5G",
  "key14": "48hsJrBZgJeBExAHFK9Ta6m2fBCpivjKKSW8CRDmzZ3wkbDTCCWpFjZ1ydxTAnbnvT3qbK5G1QjC8io6ULsgsJvY",
  "key15": "4yHLRtXheHurjfmTbHT9NeGGkAMBtfY6rcB33YTcABKh9majvxhEBQcnfFYzkDtnbdE2dR3i9TUwH46LwixrWjGV",
  "key16": "5Ynv3JLTYeRW9KVBGpUVkHDjUFyzroJ8jmE4jcwX1zUgKo1sCjTUDPNtQLRKiMprfWK8fYtkesNnv73aDsUPvH2",
  "key17": "4jTUdRiJgrLURg6Gc5fVFUvXWnc1u4gvy6wG8roaPDeoJipjDPrJFUTkmJXoZx8juS5WV9x7H7ppk1FCFqzcA4mm",
  "key18": "56DRfwdGRaHAnrLvovUvk5Z5hDHQCY2nyFeZYH2g58he7WECVS87WJVHPyAi5q3HivYTbsdbg2Vms7ZBR5pB5hQJ",
  "key19": "5AX9RwVj27XcFtHsmJouKexqxJ76xfurPbmisbkwyhi3eRdHKCJ4YDP9TBFpAAN7711M1MoS1jdP4gdZ1rsLPwgJ",
  "key20": "4S6cd8XAAB5MwSo5cGzj7monD6AWDu4jNiDtGM7zyAiM2hr1xWAHrZCrjYJLnoWHyhSkjwj2R4AZgjhYLWMacF4H",
  "key21": "4r8gQ4LpW4ADAUaCHtYPnDhpH6Bn3G4iuGpPnUEFs5zWm9JaEPegYnXnJVWStjZUvKq6hra5nW98YqKrh6dj5aRL",
  "key22": "4TU1bzNBeJP4JXUHM1cDxU5Z8X3cuDF3VNepwJWupHwMC2kNm2veSJLxquUA1nfg3YPV4wAmKmdqHo1Cvi7cnFFU",
  "key23": "gXUK9VkZP5NrxWqHECr75uo4R48ZtDG7My1G7GRxSXXJNcPHAwk3rDNoSWLCAewkmCy8jbFDHXLaRg1d6xBM7YB",
  "key24": "4JoVXeSGpmseguyHwQPMRSoTQeYNbGD9sj8ervwBFo6PCcUWNxuvLJQNyKjyDRjqi4724QSMbDaUcinnnXbveHMJ",
  "key25": "3Qmwezq5DQk1TJdXdjGVb8pKPdbMipLyTYA5smmHmufSL2UXNpfVHny8MYHpMmHyxyBJ633wTfpimChp7o7CAJ6u",
  "key26": "2M4BntdiT2jTgXtW1H3kE7bTm3Hu6d29vbvYU5wax52x3T9rugo5XuwcQuWLQqdf6P9PYaAHYHYPrqD1qXDQyuRR",
  "key27": "3G9tgrtAG92dWKNmYvZNTT5zp7kJJk7kbQYykWNTJJn8cVpob1TyaP5assgJKJrSxQbFHZPVHAPx9B4jfmqwCo3W",
  "key28": "5rNbyjtqSwdEgwe1BndJAdXWgBSZpNmvehwgU5nd18T6h8rwYG3uuLjRPVu7ErBrE3rUJbGvrh9YMDKZjpywJxJa",
  "key29": "TVQDE7neRyYMt9VgevxfbfW5MZ1DdMChCz3Mmw4kq99grmpuvJGoych4y3VudAjAN1FJVF7Vmt338zKcLxu1kKy"
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
