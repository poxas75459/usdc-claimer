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
    "22FNw2ncEPaiR1gpEv2S9A6KTsazbpfjtQUQLWG5fYHNU4wx9H27BaidQ8FP3Co3a444pM1a5nmmCL7S3Z5YSnbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ji8i9eDjFRguLYfqLdDHypLadADaRnndnycZBGHEv8dquFCVhYEReMvbCUhTCX381DWVij2E7bYyQZ3mrDRfL7z",
  "key1": "5eaqU7b28Sg4cSCxonKpe6DxYv6Mn84AvwH92uspzVvuubK8JRXsquDvhrP2mzPSv1mjaCCGjdi6Q1QUFQczS5hB",
  "key2": "51jtpeoZxqPA4Yetr9QLN8fJVYtbitQ3SfaTVVGRwnXiNyqPpA1PmqHq4MgEbT1ziagGqCMr1tAkjGFp8oYJWC3o",
  "key3": "tznUk7KUnmHQPWzdWRPeVEamyfdTwctssNeGuzymh62To3CjUKB7svUPkgkHk8yyPbJ7zxWcZjaQeMTZF5XxQU2",
  "key4": "5i2qAMhwettYgvTWqWVBFmXrRiFkXgEEgzton6weH8k4zVrf9DotEeypnDzFauVTeauQvqYFpV1zKupT2coembTN",
  "key5": "WceCYvhMiDvML6ym52Rh4aCarqnaJBdjTymsg5ysYgfLkLGzxfifAK36YrANm4TuJjQ1muUtB78JB51oy5pJG3B",
  "key6": "3LHmVWbuGMH59bJUQRstnKhadwME2oAmPqVbur23y2hv5hSiioRPzsh2bQwkhRvNtiHEZnnv2VyQ8C76gouAeLTs",
  "key7": "5fqAX98sfvXpcRhNwUfAnLJjTST2kK7S7ZBnxBrvtaWRGCNXbzCkXxwXeDFj5R2M8L9gQbMPvNrJgLb1VfFVkuw7",
  "key8": "4QjynbMxySBqLRViZxrNRAn2rKLbHP6bowni9GLAv6Eom3XL1envTsrQPvKtQw7Li3GusjaAZrRF5sji1MgQiSCX",
  "key9": "NnEgkCLsAHfg2DjLSgbnaKmtqQcLhatvucRXrLua79u8JDF2mReUfx3rVysEXPu8A1meMfBpMaprUEvnT34aSv3",
  "key10": "RmbjozmnoBvXp4uFM3Vw8fnxhSdjjE9CDRZnmVxzG9BtrXxK8NPnoAy3jnBHuaXjzkFWmvvG7HH39gtxdK659Gh",
  "key11": "5Ukj1oFxZn2zHm7GzvqHy1UtgxnKg8VaUgZ7iBX2FunBeuW8RHpaVXbsp5tXipCF7GtJTgiefj9jDemRebAbKLc8",
  "key12": "5k4SvSzTWrUDnaLLFaPi2oSQcyrdGHZebvZNZrDNsGF8fjDTnQJ2UaXgEbNV1c4btN7swKzktZC2YERCGy4k3JgZ",
  "key13": "2DhMcVnPdvHNGFrddZKQhNngXszGBcsEy1bfpm5b1gG6AejNCuf43yjBjoARdusN5kS7tLeBTtShwQWr6MMhvbw4",
  "key14": "5w22Ke4o4eUNRYrRXKfar8YhdRK1DxhezmSNAYKW6EgTQNSfDBGuuieCa5BcYezPvmyYzm1KDT7gsRcMQNxQBSjW",
  "key15": "5ugR6kBYKk3Be3c3vK9hQK3Kj7VkEWLRwQ5wTidsLy91mmFP6zqQP7NvXJDRUAo5QmHLe8HNoTPbcH2XVZefeizm",
  "key16": "3hvLBfJv4qVa5nbA57HpwUVPDNZzNsVTJQUbaiRuMarsCYjCqktRLPfSYzRZT7T7hHKjpYi3FNrLSHz6cf3HVPqC",
  "key17": "3uFVhYgSkiEMh6Sfrsa3udrxvKLEqe7DCbprthb15qQyX7ifnYahbvukjzqCtp1Qu1VrM3mZBymnka4psJW1m1XP",
  "key18": "5z2ZumNR4DKxqjLyEtetZ8u684asGmvs4D376oZbs5f6KAA24TnxRLsZM4nPbFKFWPVX2vDTiTSrfGak7wfwq3Qx",
  "key19": "37b2LowytMP1XRgiyP9hSwyMBkfpBayWzRkZtLQnx1XZcv5rLvmaimdGnQEGFhiPJwB1sAbczAoTgJxAbSnzNut2",
  "key20": "42kKkVymJmzb2qEC3NTqA3ELro6kjfLFeSWYAziEQ6XgYri7Bshn4n7ZLBEWgpPDWmP8FUFv9bhTdbgq3QTB2ug9",
  "key21": "fh7LpM8UKz82uFCGkBKYsMsufiyzbD4UiiLFF3Ybgc9zrp55HJn8wydqGVCKkBK3rUoPwQXz2VTwwUHBWp7HEnV",
  "key22": "66iPYh3JirqfHa1SQof4zQmSqob7c8nhwt6ntMFpQuAkHCm5cwZDvuEY7ZbRyRcTLVKjqFVy6pPbiESCoUVMpRau",
  "key23": "RjZTQvtsz156z5e7Z97dsU5scbTXcUdm2etTK9yhyDNP5s8qDRcU6jycxnqMbFoBhJyxXQEZ345DHjx35F5YhtN",
  "key24": "3xdVq4Mn2GuZUvDHsUZXx5g79ZQaeaxnhCZySgykM2rSAcc1Tax3HSktVqdEAX7LYKgRwTpVgVYgMd7D7T2r94Ek",
  "key25": "49XfrF2Ut2ZuS4YeZHKmu1WDkyXFL9Jt9PZeqy6Uup9vYbHR2zCYFaHcm42m2pkDpA2ZwcNJzPeUsg4g2Pv4M9zL",
  "key26": "QKCqF2dgzQ3MNWt2jS1fPopzAKWmvfm65Qd5f56urbSbGJ2FcBiGcgRdyXFEq7Mz6BBUxaeAqtTp6FAyPUjQByB",
  "key27": "4aNB1Y7TmioeHfsVqNXQrgHPk68ha7Tv9B9PAavUUayeF1GkBa8Ye8tb1XsAGXpjQ1J9K3xhgf97bHVTG31pLBFq",
  "key28": "2vez17a51bAEGXdjQo6sdx7HvvG2xs6YGf9Uq4zg6D61BWHnSWKuQ1GZ1nuf8xkh72KtnowSiffrnJyas23piTDu",
  "key29": "5npnk6jv2uf4nGBL6TaaStHG2QCBPEkvViEbPykEZoqTHwwyH4jMDBSuZ5GTH9E9Pezb41g9mUBz8d4d7veCFBua",
  "key30": "3VFy4TMwhgrrLqog6c6BCugV16hJatSL4wEG7rTRAAtQSPD2AKxw69jKp4J4jey4P8YYvYsZkRNBJecVa1nDRQHb",
  "key31": "4Gzf31MRRUAAbpgcgtBwRUPeTNeckFn9s8sty8z5oAdTK7zyztBSMSdwG4zpt5pJF8KKRFBRWsqzYdaSvaeTddS6",
  "key32": "2FdFp3mMwYy2GbdjVBGhJRcM6WL3TnRBK9zaaRp6BEEkCMP4XY6pkJpjwnt58X8bFzsczrBfLBuGXFNPwvx5tV5Y",
  "key33": "4FnhiNx4FRPaxjVRh9S9GG8QCBkBxHadPBrCLMKGf1cbbi7xNoDdPdARAFP6LTi9RYM6HBDW6RbvUpYhhd3UUZE",
  "key34": "4HY9sdNbyJeW5Y89jxnBdZtrAZjhfk67pLsuP1f5ezQE9H6wDk9vBmJzeXsRrh9Gfmgft4tUy57kLFbtEFZx7148",
  "key35": "4L6EmLMXoYtrM8ve329YnWkd3J5wzUiTGSvccuuEQy72bmPxq6dTPNcY6UmGguLcZo81487YurqaiDZWQ83SLsXy",
  "key36": "2xr9kd4rDRTprzitJyzx1hbXfgGzYVGsqcDi7NFvdjPh6bbCVkwr4B1yLL9xwKh4Q1Kncm5RuZGSaypUKHg2vQ1u",
  "key37": "4uCUvUyUtGxTrMaT556YCWYnnwen3ss1akvh9h1NCx3CTSNTMi4DXe2Lhgmq3RXqHhiXNoPjHDwzub93BPu2etET",
  "key38": "47dEgRk5LTGMZzb4FpQcauGw9X24wPgVhGmEGNvwifK3xE4Mwsocy8ia3vFVyTeYeQKifJXfjkCYtEajhjPRj4yv"
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
