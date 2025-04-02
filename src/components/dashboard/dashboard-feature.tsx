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
    "MrN2fu7657REGds8FzAWDkGZ3RWSe219uZvFDYB5rn5MVt9sMLuuTEu5nLLnbHkj8Ux6jsepudj3Hioj55HDnQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zBiT63iCTT7Cik9m2w6ejG8HVu3SfYqRSePM3LXwGNybFC5ySCqc5UYLZgitJC6yH9tzsjKnvP3N4Ump8dXhiEV",
  "key1": "4oiMRn7Xh9Az3buXMNcfRN7EkoS8Cg2TAnFTzgV4sQnfB94sEoBYHpGuB2ysH5PbuvCgZcmEkoYEYVehWzPMMtGk",
  "key2": "2mm94Jx8V6AwdGGNpFayn19ofAmBpFGzFg6mTR3agkHxZz757XrxiDs8HUECd5HSPAj6aeu7bGzAxcCgp8FcnTiJ",
  "key3": "3Y4LFGDB9cKLKcGRBMAJrKKMoEQpdoPy92XevPEnTEfa1qkQLmUtjYUK7yS6ZCpeQjEf1e7SeFXFkEKJjfgv4NHX",
  "key4": "238RxsWXwKW8fmnFjrDogdSvNybnuQB4XgFhUAenvui4CKzZxm6c1wYAtumGistXQ6eAfmp9djaLC3cab3Ev7UgM",
  "key5": "PX7uSumnbsFa5xuJhcVm93QZ8JTj2G4khHm4siTU1v5pr33FJobd1GtgYoBTVaAKecZKWBxdN6fiPAQ7V3PdBuh",
  "key6": "3QjcjMAGAw66aKV8YKP2Y6PcULSwrHdbpJFwasL1Q9Mh8tjvxCqqfiXMbE5N6bducpbkrxUHieASDDHxtUHBWkMb",
  "key7": "FQsHFBFBQpYjRJNESJkiQyEes1bjk6BaDzt1m812DppdnhJSMyE3AhJLf4z5aNAShe9Ka4rqBouJaTPvzcpZAqJ",
  "key8": "4HMCjFekUu9NmdPGQWz8oKVJzfF1tZWB1Fkra5kEyNR371DgBV9maYBUy4K2Ks8C9g2iQNX369FmBRTZao6YFvgf",
  "key9": "4ZRnftEdDzZ9c8XXTtgsob5WsdPzWaB2tnzWNKimQw5Mq1zLgXoiQ4EwbMGJE6TUdWkzoiYbhBPWxn39ejw7okJf",
  "key10": "4Q4NjAYBgtxRhPEiqnLACGUAHiYdjZJyYUQYczzojuhWn1dbjEbFaV4QTbWLSAYpAxMFvj1hx72Gz1PZxBLFtp7x",
  "key11": "Fzy6CB615FJweDBfKRLJG1NV4AkjNU5nJ1FQA52QXUEiu2taeb1rf9dxTZgsUKhqm4HzcXqBtjoTmzk9PiVBceU",
  "key12": "3tbw13GbgV5VtfcvNbiKriL6H5X62neQrHoGCCwzitp1ayzdpPWHbrufdBarJeUxFs3xFPkBojYFMEA8TSxUwT31",
  "key13": "2QZTyAyR22Eqro5B9ytJ5CWkAGiyjXfiSjn4cCZCZUTbQrqg3qZfYKLqUpcwM9LdzzzghEW4jXcUUW3L3BU1XVeR",
  "key14": "2YBES4FY73K8LEXky2AurnDRHEetPovbdJ9Jp5kCAtPgrKSyf3mcNDQGKq9Np8Lf9oJuZas9gnETqnd52Ejdh1Pw",
  "key15": "33D4ZSbzeyygYLVNoLmZ8QsKHJk2yVYHr5i1SPFXnvW58sCrei7e67RJtiX8LQsAPRdJ74Vkn63iSE7zyPR83peH",
  "key16": "ivg42Aet3njyYtFu7WrDJcSUBSTZaLwb9kux6eK3hh36YAQuiRPN8Lyw7GcYLcrM2mpGiFyLGGMhRPaFJpv9XPg",
  "key17": "36CAHKZchac8pabZS633UZX1zedfMYRPb5US6QYpb3bjP5YyKTsbk56PiminMKfth3ZDQgwQ8iZCwzGs83w7P45N",
  "key18": "tnxgHyQAdvpRGm44ZNZmzEFYCKmoSaYvjnapxBf49exwELAFa51SGz9FhCar7gtDc7CmQKeGxP3D5ytV3tYkeqd",
  "key19": "4BnkpbAsYCCfZAW3aHk6AG2SpqwEs8XMmpvpAvoM1oxpW6oVUEEyxjXNipyQiimAYTWej6CNCXCghi2YKHiyyt3C",
  "key20": "5kfLeXGSc6gVAtms1ewiDib7qbSaM5sk8v4pp2gASwtDtwh7EiWYmWjEXkWapqetkk8hAJastYnzrZWotXG75XPr",
  "key21": "5oixptVzzb1pUhwi4Nkq59buy7BjX4Tx7tB3s4QptaCx2r4UQjJEBz7AnrC5BPsoQG4QtN5hUoEDQ9cuLXTtq9Jk",
  "key22": "4yMrsh8x9SAeu8F6BJh53YY3WYMBuMxVQzZewkCaexdiq4fXhB4iK4tjGQCNc59rQBvhJ7Dkhj5iyAuE4C1UtMAU",
  "key23": "5VfGww16JmtXzHth6ZnvJBEfTgC8PAhsrsvtcQA5KkjqXpi1uLpjeFyZqXniZfe1qxG8mj8kPMZBF6kRKxGRWgmv",
  "key24": "2GhwWboqAmcdb8gYH4jW2rzwf8yEckYTcLdft7QXXeYmQcFuW9XPvch22JtxVGXkCFgCegNxRkoBDa6fZnuzxZRb",
  "key25": "35vMM3kEbksyfJrgw5CwcuWMTApoMo57WNCS2Q6RfvZjCvyWjsrW3K3JGvhHCTiPeUSjucq6Wt2X2w2c3fQ9Xoc1",
  "key26": "4k7v7KhwPXZDuLjigArvEk7LefhZxFpv54WHgtrK3JJp9QsFjsZ8aWqKWD4eAcWDQcYt2m2EDEBBTBLbigQ4MYm7",
  "key27": "54DAeP2ZTici4NDsApWKx8kUqBU2sZ4g87n6wpKXmbNj7PSLW83qdpY4kEtjW5szNdmPjfa7t96LLd1qbxEQWfrE",
  "key28": "65hJDwVDV1GsYr5Lk1vfDBomRT8kFuq58ezryneyY1cDqMHq7Met1kjBjEcjGstCxsN2cn9THLiDsDcQbGBiygZq",
  "key29": "2YkvdroVGr7fm4vm4CUEd6xWLGkut1KgJgTJARGk8D1e88TmpMG2oyDHdCGBe1cSDKJ8MbthUQyHTgPEaoFXumfC",
  "key30": "28MLKtcKWuL83nGrAZVBTkL4BQUktteU8tGGMezdR11dJUxaJAnmeDwvVtcFdtCKTdE7H2C4GJkYa62E7L7vt5eB",
  "key31": "27okGN1b24m8Sph5JPE29SkbQLtBkcubGwXXrfoofU96HJZ1pjbDBdFRqYLuXhEskgZFzFU94XX1sYFQ8uecy9ua",
  "key32": "3wPi8DswTbiisbJDsV1Azv2EoYB8qCcDEHc1ojHzAmGrEgqzPFSCq12qhHgp8msvx8BqM4DvgC5CBRp69rVnhuF5",
  "key33": "513BP7vYQajNV2ovWC5zMLgCd16JTqk97zGKxSatixE2Zjk9h9ESGkY991AVAWfUyd9G5FPeSsWfp5HenXtHRmqe"
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
