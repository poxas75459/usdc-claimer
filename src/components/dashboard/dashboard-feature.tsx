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
    "4HFdSu9TVn9KTSsMJG57pc8gVxspBnU6o336tzSrWfpb5BFYGyrfufUDgVx85cLd5uocmjLvUd9vxgcGWLJduRY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vc6RVd6rRmiZ3QDg4zWzua8DadLQvAr4Msq64rcXsduaTpuDSdauHtGhvZvfjWQ8DUmyaax8erbSQ1x78C24mSu",
  "key1": "467jHV6RCYMDGC9nTY317o73seiAaVEo2Sro4AkwNJavBzZHdmLWptedrhh5DqKreaKzA7j4F6Kej98amBTqQ7Yd",
  "key2": "BRUEQFpWwQhHC8i3ukSjW4btqyQ3hnK3358uzevQ5bEKoSdVLRs7LPNsC1MsMqXCbRHkecZUfoAResJ55qvjT3Q",
  "key3": "4GwJDQ7q9wepq83KNidvKjendgWSfDC1cBmuU32hxxoaxkRJrY9iaRrdf44SYBsPXwWdZ4zJi4bSttkRECqE4hZ7",
  "key4": "4eTJ828zx8rWF8wdHAANRXLeS2af1EcDhzvfMxQvMGMpFeBq8DUNs2P9iupaivxNSfVW5ZGNEoG9UULg2UbeeC5s",
  "key5": "2uK8gSjXzpZUAFTZc6qj1hxoWhizuoihGRyDvHsfH7w53fY1dNPbLtrn9XamBj8zgft91vqXmzCe4SbqQWx35YPm",
  "key6": "58pEGvrDnYoDgqp6BuoKnw63mb6yVrwfpUUzPBb1HRgz6ABcwM3tvSJ4Wezh8rtE4NDNnDx3TxGGtVymujMkpCPR",
  "key7": "3Cj2xjF8za5fJ4Fspqa5oJ8VQj58fh1gSjuYmgv9kadfFRMAH5UXE5Ffw1x92gkqvcYvJLoAZV5t3UrmstB56X31",
  "key8": "UAJi9F9W8jftDpfZ1D6A7AyNLetRLxqsjWpsj15XG7c8psaGUM6ConNWT3pZh2s53eDJCHoQJqSWNFpw7DeNm1A",
  "key9": "4R1LMtNxZRnwdkGhPWajdHBniVMqUEKfUsLPG67BCpjYMG1KDhsShK8WokcWM8tjJLmMyV1hCWwyiTFWrDS1RfAa",
  "key10": "4BHM5Nux6CmZSjyCAAhkVjdPo6oj7epRyKY3b6ZzemfAUVx8C87ZYJqHCvqMm46vNwu5JDAEi91fkRCKjjpZwA94",
  "key11": "FadN39PEu31E2W86jRFYLnfpnYo9RBepyq7tYFYrvfs4phWSxKE1y4vyPkvZhLgbehuXmroEissCyNNNosSWq7R",
  "key12": "5C51mgzN59EnSrKbkcDHkwCunSL5MHjd3hYqe6X87Wzc1zBAF71954J8EwbmTWijvhgwpx1M4cb1fs49HUhgcLne",
  "key13": "5GXRxQA5g3XTLX5YxCxn6BRxDxp66xkYsshjej6jn3CUbtTux5bNjd9H3HK1qpAryxZoxuQ28nkethyf3DTWheNR",
  "key14": "3PGjCTPAWYUheLv49CWr9C8Xs57YtbnQowLKNKPmQ3UGfKamvGQsdx6fivamj3gHRHc2FnR93VxJitWmfYfVn5PD",
  "key15": "3H9CPjzouok6L8JgaVaPnekzfE5344jVN7kkQgNydwPuwSTbY1mnA27hdRPt46w3KmCQ3CRGsxC8AvtjvZRczTvm",
  "key16": "2zLWzxPQ8m47KZNmYd1koZFz1NJRCLWmYUDm8pssEG8CsNHjsbyEn14BKQ4aumz8x6XBbhXMPn1f9JAumZ7XEDUg",
  "key17": "4VA3EBDvfVQUiKxxSfJvKnVLLAKbLRFpTkmiCtVKfyM2DbT7G1v8sttPPJgjVTEpeUDxgCCrr4kyvMysaw8EggXB",
  "key18": "HdQKvRDYWL55iQxUngWcRNGYCKf6M8rwBBWdTYrjtbxj5exqznyBpdUE51eDH6odoxmjTaWvPhjJZP94tDg83rD",
  "key19": "4HNvgN4hAaHUV29oBbdHknwCw4R1Hb7jRbvTdYa1nUfvFDWtdocdXYQuWuVzX9LuFPBdCBjtvNNWBspiQyV3rauu",
  "key20": "3vXFNfV5TdFwLVqTozAtBozJ4zjd2Ym4XJKa4ZCYN5PiAnrN1ow3ymLUzZoB54PQuSLSvuALM1QcmZeX7Aga2rwG",
  "key21": "65iXEgGVahkqFCMrhEKWXNabZvWJMnaYpwZA8Em4zJaku6HTcRja7n9uAqntdGkZdtbPaP8bvoMN64JxfVR5NVJS",
  "key22": "4e9qKTJWaUvGFqwWyrQpcVdK61jgW8GHZbqs9WFsLPy9VNV5uwUtzk4QNjUxQ3A6YBRab95FPscGjK1dJt4kMLUi",
  "key23": "ntAN31jsmjAU1puDVzDj1mZSPN8WHB8saQ87QsJwyrwKAPkNqe1Jr3Z5K4afrMyna3sJ5L9T6HqfHuneBnpYzQN",
  "key24": "irdBFDcb6mNqh3ZZatr7uX1tHbf1CS5CbDgqBLQ3daHWBm2JUJA93F2QJv4J1eoP8X1AaBgg5967E3HGHgR2JvU",
  "key25": "2m3SpHMCD4SyRwFvvYqCPf7EPTvda2xnUHVTuoQ5sZ3meTtjmY9wcSeidAmNFokbN8qUrJKoDGv3grA55dA9mjNz",
  "key26": "3KC32gZusqkTh3aiC6V2vFzdD7n3qP1gQ3idJqZ1mH1vihuBd9TT9PrshwtLB78cS45cVd6jhvdymCZqNvXAVmhL",
  "key27": "3qR9edgkNfaBL2eqMYEFin8EsTYeGk6d3E2Rag9n1gP1vh4nMBZ8orvmz8XWqRPQX7jphijiRZw7z7ha7ptwCFdM",
  "key28": "EfPJ88nxqtGHQQoHvBKDF9yiz1rafTkMHQ7gkCgmZFrLSSN9EaHw6wd7JvaY87HrFsseh564AN4JJNFSg5DnGda",
  "key29": "4nRyVtELDWsEmG6GLNnMwgo8CCnfd8cU9trqUJw3v44fKcjhLBd2LG19kVjkgGTRv9LVLrYfiejpEfh7eKgaoknH",
  "key30": "5BBYBZPw9srVkgmyScmqrw6i97VQ4B2ba9yjpVZLyvAkiuCNaJ2ZhjvCE1VKXpg94keCiMEFdBVQMtNY1mN9e4T8",
  "key31": "2FFo7D2mwWxWacJYwbYB8i4Zu5fh9DzviCFQcpwmZeczvoPVFb4PJDX2PxznAibMejTKQALQPqSh9FQdTNuR8CNM",
  "key32": "4e21vphrNhiJ5rKLWwD1hHUJ6VnmzqUqQ2yKmDL8xtXoReUarmAZhChWpKAUdvKV2aq7LicQv8DMfditgaGAYhFd",
  "key33": "srdAPJQheNUcphFVUC1nQ5bWmtmfir27y4xkk55TKVUYMs7pXTYUtuDVP47nopCuVN5W4zYWE8LiUMxWE7QKvXn",
  "key34": "4TSiQWDnNE9s7regdCFbaMtAXXUx4YtCR9eQV3TFJtBxfz3hf9JKL6bZn4LQFbK18tmzW4bPSpSps6raAWC5vBtz",
  "key35": "4LGwqdjiyCZAmbAhGzjVBFyoEoqUDKf8vXheiSram32aWBwt2Uqy2k6v4CVSVxvEjVXp7KXDXXN1WqtfTBY9KmGz",
  "key36": "2vZ6jGQZSVrqoHDJa34ZASNmjnHaRiLBeBkvYfK9yz9PBWiQBGZXb7WP8ADJENqiU5hnS3WErThciZvbZUPVPHB6",
  "key37": "3Cs81W1ni5otmTq2PzLBpj2yYJzyibyuGgowfhaGe6ZUJB7XKS2pFfX4igtEi8DQ66jNQwVPHaL6PbqXRK7WyiUC",
  "key38": "53J49H95LVvSgqLrBGZccLqxZjxrbLXJgVsvdxd13NjZ4WYtj2r9HXvLmxb2r3KyDRu9n67wMCqFvfDRsobs8ENw"
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
