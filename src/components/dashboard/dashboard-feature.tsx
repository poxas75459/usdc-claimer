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
    "3aYyzCkfNUkcc1CTsbbLeaVP6VkzbDc5jjh1hkqP27RMP4ZqrknUZDva2Vwe2f4wbNKfnYT5cBv5uGNrgnT9Gos1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22CiiAVWx4PYAvSHv3DEPfVaYHgPdbWSyGFF4K6e2oCw44mz9oABUUk7sgezP5Gri8mDP9rx2qMnJEbfSZACCCgc",
  "key1": "4NmSupzeHpeGT8WngK6vRr2eoWcPJzaX9yJ3tq7a5AVdFiZZQWnGhnt2r7bzLqEpBjgB2PUzktXLSPvDMV4S1tTA",
  "key2": "5JvdnmVVNJBxX5qFFFqXTAVWg1wjyUbmTLxMp1SKK8nhH9kXUGGAe8q3GH94t8qHntqgQmDgSvJ5Jxe8rVZKUuxV",
  "key3": "4J1HDSyJ2iPS3hZRfqPusfGzJr3ho4pTvT43YeqK2LcSmGxppJ6gVRpuh6Eq76dX44QvfA8tr2sCYuGnxAHeASeR",
  "key4": "5Ma5JTULyPyWHV3FxqGEK3Ygz9ziEVdt4mE4k7xD6pAH866ELKwabinbK5xLp9sHktosDPyhGAgC7rg1LR2NTcWt",
  "key5": "q2sjutFG6mEysZmysktkbuTp1GmUidK8MhuMrzLvF5ECVE4vViZMweQa76fa7xswVMzkU5RvsS1TK8XF21VHtBd",
  "key6": "4aYT2uDeg3nDnoAQNHauiHt6S2UuotUdGcVx5CGBbfdfN7UVoVCy8RLHNNfvDpgvfwNiHFXG2isEme15VYMgiKqD",
  "key7": "2CufvhrMf2Gw6eLX3Y9WbfVRmD6a5HYjMFAV3QXpmetrFM4LRvBfhJYW4h5L5bDjQTPtdjFyQse85eEAt29qs3th",
  "key8": "3mQ49hTxRuGzSzF3g3j63RZsYpN4tWBkyvAZXeJBtbp2NtdHYu9F1bMbNkaDfGYEAmJXEA1hh1wJzWRW4yvdzaD1",
  "key9": "ZFgo6cr63w6hqs8E6oKyWyonELg1i8cfKpKJfVCAFNaYqQy2zhz1vFd28baBMHfVMvR8JSne6CescQC4tvuMeZv",
  "key10": "4EtnBFLHpvQLQ5HUsE6iMXyMTm3umM8N721GYCBCvHwuEZ173z9ncdMJyxJfKJGAEdC4Rep6SakH5kC7yh3DDt4j",
  "key11": "5sn9BnLVvqApk2FKNNCFo121ntHDwDKXSuhnLK3ZD6GDi3P7ZMygdxjK6GcYSX5EMF5KTYV1AJ2FuU5iPzyCDBd1",
  "key12": "3YWdFY9bwYv6G1hFSjSMX7GjgHUBCKhDyhsbNc3R1yp5AxWkBHqCuzqohLVsKy3fSjucRofgiqvg5aNNpkpdQwzh",
  "key13": "dukz8MKUffL7ShYUm4DZCM3iXbdwJqV9yHSENmbZttRF5RXdm5hPKR6TXPJuTDAmhpbw6pAeSWxJJAzX7KkxgqJ",
  "key14": "46KEfVNHNQh38uEAXf5vSkyhYCe4iCAH1H1brPVwKQCQiaKksWqDMKDAmouCxo5oHoqRnW7yvnQnEX7XKyqK58p",
  "key15": "5QsHTrqBHY9AV3XH9eptwuR7ux5VZFkxV7d3yrP4wrKZteH1pdEy67WK1r1mzgS5bBiNJXYbJPywfuBX2exEPzeW",
  "key16": "26zPQ1kMv7Dw9RCEdHXmGHtN5qvd7DTdeS4qGRnfr8Ze8WtkAM8xCDVikLtLskVpjfVcCvqKSnY1m3JLzxJcyWU4",
  "key17": "5dn8QVHpBuTXnyUwAfTdpmSpZRHcZhWu8oZWqQQB6oKE65WeVMKzQiBLe5YuwSBVJeFu3EQKbSbcscBHiQyANnST",
  "key18": "23Mva58jqnN1mxwZJA5Kie6fxCU9RRNssrpSB8c4498C3gAKWSo5KBxBYbt2MLSHuWZRBpB5TayHr8ffYa4dbPzK",
  "key19": "4AXuZkPtk7xu7RvV9jjj5TS6qyUhCuVNxBfc1pqzFmUhJxwq9tJ86ENfZw4mE6V9jzrPmx99HPU5fgybPiigrghF",
  "key20": "4c6TPtjMrFtPHoaudDzXprbSyPj7hqmk9McT46V7Txw3HhCQpWDYLtESkZhg9zA3MEhWcCaqT3zFujr5AouS3caM",
  "key21": "LzUM1Vzy8vmamvp9d5cN8Lba1eyWSQ3UMKVssfdKwc98hPzdqscGX6AcjrcUry7Cphn1EgkaPqYD5dtz9Jr3BST",
  "key22": "311bLpfUoS5ykB9sxnd8ZzkWzk61S1DCFwDbn1z2R4ueyjoTSutyYQnWV8hB2KmdSUBYJfPTHEeMRBfQtdWQenYW",
  "key23": "rZjkvaMELt6SCJUNLCs7MCaBcamUNtrPqBf3KgQDAKFTTkGFnSQGCuSZuXFHTpAoXz3gWyaTYscWh8JMb4FpgoU",
  "key24": "4DWHwidNLmvUGb229hCHXGmUqVNPxLTjfL9bz84ydYfDMCu6ZfY2jUwHATnHwpbmhiP8SXfjXgeTCSgXf6Z7cJEB",
  "key25": "x33p37QSRHUyd7UWwmR6shpP4oVy98MnC94K7AKQecKwPGN8FmTYCgVDFXkaCXjxRYWAKp2wtSJzcAm3RYRx3XP",
  "key26": "2nhp2V5UYvZujTeRy92Ch6Qs88dEjKhwqFpWinR2yLGiru4nV6zZx3ZLSYwZgajYjLDf2RNWfbY79ZScYnPv9T2D",
  "key27": "UawUaJhi1XYueFwYXMX3dBbhNv1dFG7L2C5juszREepDpJ5ja18foQyWysYgR7xpoxqDiy9H33na8fVF6RM3iB3",
  "key28": "5ucvZd4QvFbXSJK7AmqSGrKdghojQMKMLs2xPdQkQhVUfwMrkUj5Wkt829yWRRJ38reFKMdVQXKzMVzLj4FQqLio",
  "key29": "2LSehrVesutiVYADTCm96ZDpA4u5ie2H6PokFoHoxUf2uXoF9UTCfe9BgHx9pZxciXwZNbgD1aCcMPrxgJiwC6pS"
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
