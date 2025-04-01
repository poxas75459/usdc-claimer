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
    "LSRWPriCCkE1SK2XB2HR418ByLe6KZcpPeih1NfDQkgeiFFXxKqcSbyGnaYHtfy5NH1bg17nuKKvCmPFYjdaXPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a2gYez3Cgiv4Jp8jy7UAaPCYQaKKN2YsSArsPbuMZn4LSCxkwuLJrBcAi3ThvBHnu71yQFfFLJpDT1sz8G3Uu4b",
  "key1": "3njNmmQaZVona9L4SBUBBaSAW1bj1NvXzjVcS3cho8RwAz31dQ2rKLuqGWAxwCaLDXLwYKpF5LFAxPEZC8TZH697",
  "key2": "5XQCqMqT5Dq7kp5vT7Nsj3d1cReBPSNWScW65RX8DiXewScimW8eAuHpfWfCyLZe2qgeEGsAH2zY3tSDRdv8hi9T",
  "key3": "522qGcMBEHhn3ikeERHznyf2k2kPoeVkBZ7ZSwAVVKj64yxPSkRmF5sj4eeoppGS8E3TR6ihxNSUHj9Mn37PcX7U",
  "key4": "2s87WX3ZsFdH8Li6nji5VhLaUGkUHEtsDKbCTPiu5CTogvZrmyYwyGxkBuAHr5spMjB7HpayDuvhQQUo9UJiRuH",
  "key5": "3vi51dJN3et2mNBUvmoZukNC9rTAqEAuSSCGEL1iUcBowPDUKwfja4ffx4CpJHUneCk7THyrTtwXxRXs63q48wPG",
  "key6": "2GKpkH8oKm4uD2cqnL1gfpJTiXZmjjT6nomfajQEpXx6MwrSpwvTzSiReYJJMKD4NdQxxfhmPU6NthYkhe9rPAtZ",
  "key7": "28XchqRzA4tn6GYXHKz6u4iiaPWyWtzFE7MVXXiWyEmfBUZW4Nfp3b4wGQV2d2SrXyRmx84PeKWGfajQaW4w3bai",
  "key8": "279TV3rvWaB6HkMFm73GrC4AN2T53bbrDbiehNbVdwKAJLZKyNEzf15NiSbzX1akwyctaxv3Xe7tBkyvSF4h4d3h",
  "key9": "37C5ZpWzb4bhCXSc8TLL3MQXp8f38tm1Vgbn8moR9ftpiHZYpGQrYkCor2LbGyQJRS9TyFz1jRJ44666SWd6vndN",
  "key10": "5ssaxxR5CnDSXVegnA4SkMFWQzKfoHdAaXEYRqu3xQvKRsvmh4gxS2An1ogKf5CvBQWJXNc6tCQA8cFXcHwAS7SG",
  "key11": "bWhu3GEAdBxVSDNYwR3Q2GYBdVE4wEMYvAmnUGuCBS8KW8bqJh3ytZTGaK53iDL5uQKtj2FZGKQMksBtb1hnm5r",
  "key12": "2fjA614u4KoFhwfkG6jCnzd8Q6AsmH9nKZprjtpepNmQwd9jNv96qFpUzu7pMyV7wGgxfLDpusXqCXLA8u1s1dmk",
  "key13": "4GH5rqjNya3A4M3P6NUhCz3NPf2KjuFy2txDfEUVZbJTLUrRZmj8tynYpTEovDh2rkMReESDZ15xBEHMPzxDJPiA",
  "key14": "3s6TQe4Bt5nL2HkN4rSeY2JBHpyApiT7URKnwEv9fBHRDRgZtU8gYuY5PRHspJEmLFuUfTioQ6ZqAjDzeaVYJJjZ",
  "key15": "3SLmGBf8ESVwkd1MKGSNBUToopjxDJgrxzZhoHXf9KYSN7bfCqkKjbqmyUHpQZaDCcYnWMg7jJ1qKFhfxdkLJpCs",
  "key16": "oTEs8T3PC7ns9mn9D6Apfbyf61592YJZgGtEJJvbH9mgfUVHr4TVpkBWrQVpGGUSCaFBx3w6epmWwwZLSW7iLBK",
  "key17": "3mxMraGeraGRMmLneAf75oaFvNfrDGHqCnqHckgQd5YcsFR1ECDGnB8VcvEvbRniPbNZ2TRJzGmywP7nRQg1T291",
  "key18": "8APJZAUnF1zsFYZGA72CFHqh7sJs7ibudaxKq2J53Z6x82Y4KR195SKCnLAEYsJGdd9qeMFwknYi2hhaNunw7UW",
  "key19": "3m1ACxe328x3MMGrNJy9fzdpRzzZ3933JLb8w7UoFyusnqaMMRZrbmBvQ4JLRwYw6YutG6CrQyzfoUjZ7M1aFKUj",
  "key20": "VaFBh5rKT8W5ov6KhXuFzzfA9StwCa9k7VZh47hUQypN5Sm1ZKFbjUDQ5yShRqjs8a518mvFQxg2bze1Z14XD5T",
  "key21": "2WHpPNVdB9RsW7UnnRzi1iiEQxSHV1R2yLHa4eE5tNC125zdbhSmNtNaPHzYEst1r9koMscpFEkskmBNtQJUGAby",
  "key22": "zC84bQgdtr9MS7wFLaDumHsEm8v6yeDuDGLj4pPBaHa3FivEWSM31jwG1N532MYp8zkZx5MUtmzPszCNCJAnGtT",
  "key23": "32nDBk9hiRpyfh9i4G6hrhtaWAscEdMDjsiTr6H8c6z4fLVc33f1hiChcYZzH4GqVBc1X6syvPmqnGvDkC7ffEpF",
  "key24": "2CeQjeWg2Af4q9yjSYzCvWQCDmUFYNDJpngWqGyaBVJejimb1ZvtwdiDFRAvhm2vbi6wxT3X1nqi788DXcrNUiDr",
  "key25": "3UkLrQSZUjDTJgxKAT5ct84FQZTuXtLTDoQpmXgjZfiwfPr9XDCrwsghW5u9H6qptfy7zQ8fWFdgkgw5pDxJAHMe",
  "key26": "4tyGPMqK5ZeXYYwXHbipVc6z7wgDYz7JyDu8iYehkkctajJ4AwKRLn6rEbQzUdchC7FRUrWJNdYn2gpZMbf8Ch2p",
  "key27": "4sdtu2kKiij1XykKjyhGjbXfyHkMDdQPPAySnCLnumPPdZ43nLg14xZfE1k6EN8nAa8D1caf6of387jE94gEYa1v",
  "key28": "2ZDoVsTPXJut3gTnAxicnuvEnHi2UX3LC1pbyyY61NR9VLtczomFwjavd9TZnDAa7XdK2jfNqJKobn2b3pTLEmMj",
  "key29": "whYSjsyzjcKCQqHmhZENuDg7CgNsjXpgYNUvSHZ3N7mNtpKB7xXZyCVBeBdxzdKJnvHNMPLHdQ1MDz8ApeacR2h",
  "key30": "3Feqp3q7TQVxDF62DN67ZcaLKWVk6xrnsHHrSkBvPnmur2e6RnVaNxHcrMcqxzEALYtrPSMR858eEEHeAvCAW7tS",
  "key31": "g19NpnJsVDGdeBdC9LWZoExCNTnzWatvyqvwAi4etM4CLWGhg6upCRdj2A8WZmJgtgqsC7ncwJeE384LgJiYhpj",
  "key32": "2doxJiw8obYk2JQgxVMmUFso7f8V6MweW3BkLMJHmyUcoYoszhWJFzmE38bEuNBGrvF5vNF2MsD7Gy5EnQ16qmXK",
  "key33": "4s74W5kZc5d1dWVVtMFpEsUpMbG6VH9PejT9hRudnWbaVeLZ7ghoFKF3sDWajE7hPcvJxYSdDmVuuaMgKvvzgw7p",
  "key34": "5W47Bseb3tRdRmYqw9kMdRNpAm7Srzq9HYK9yyH13CkwjhRbzPGxUySxjFjtcZUZDnhqavYop1GpxzAqyU7WJ1cs"
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
