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
    "5PjZxFopTCPpWQCgypRD9ZUs8LzfZrcQz1bQmYQYZDo5ESi3yHhKQLG5ntLkFGH6B2qrz3DXPbJ4LjHzjxDvUANY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZDLbxu2BJH7H1epP7CFEAvr8TyVknLXUDiU3Me7DpaqM98AnCTNYeE57EgMfWRXJkhf9nFcRP3RddczbNJ6kSx",
  "key1": "4o1miZcnxbjDcQw6K2qfVWfnYba89Do5YTryRGnLhpQvFXHjZNhCcuYab62REWdDoiyUJ3eBNXhNTCsYTSMk4uf2",
  "key2": "5vPTHViWg24TT9epQN6jSnsrarqBEK1xPFZYSg5qasPLw2asXPjSvyUKugWV9qWBiPWQTWRFGRrYA5HGck5fPAJs",
  "key3": "3AA7cUa847z6gM9BttJX7aBTmABrKSgPJeT4keubJbgnLjAqDsWoX5onW95NfjLGHg5mcs8SYkBSyiYVdE9gX9MB",
  "key4": "3YhoDqwgPLHwL84veqfH1nkXtoDokDFogjuy5j2u1bZuaTeLX7rL2BgXzYH82apzQEMY4sRSv7FceHxEKqnFiCGd",
  "key5": "4ntE8j29wmacQpTynaL34t312VtqfmM8kfUzkCRxsms98YnqtkL7YPuuq99j4SrvjBost7cdSvBbui9tsJGyVByF",
  "key6": "3MoJH7EfNHa2Edy9C7tRqMpBo8q4ojsg2XwnNQPY4pzk4rcAv8r1z4MV33tdJAZmoHiGeejJdrjogLTMRkRezho9",
  "key7": "5ZQHikA86ihjuzYQUmpCdQyAv7pE7hmSzn7v1beYTTB8VR1HJPaWZ532pagKTsYtLHzMoNJMthZwHQrAAkLAqvLf",
  "key8": "5aFu96FU3WgfrqRXh1JyULrS6BitrwU2GtqJCuPjRMU4sbiXDp7Ys78LzpkAZEmRRixDRipYKGU9juRZFTdfknP9",
  "key9": "3Et97NbB2Rdeqar2gZLN2mWm1n5hCC4mr4gta3pvMVSnmX848GfG6HKRKp7GmygB1hcd7YGU8LrJMceiVBbesUSi",
  "key10": "4Xx74F1ZNg7VEzqvJoDUdqUvPHquj6SH3nyQ8T1xWvhd33aUgVKh1pFAZykgfDUTsAM53cY16YwhLrapAbqvmie4",
  "key11": "5jJx3Afi2NiZtkbDpN8B21cm6pexcJwEqoLMqBtuGXiwGFSxQAoarbtCvU3FRnnnBxQb4kQQkzYZF7tzjSMsr4Kd",
  "key12": "3iTKzTYfNGgeYXRjHmTqQtfMJmahyS2zMtaUBrxdXkAemuCLkFoDaxXQruU1iQtx5UDp8pwZoz21gqwboD9Cm1eH",
  "key13": "frGNssZARWdNXZtVmY3p8WLZo3Kv1vorx7PEMFrVUjQWS9fyKvt9FGv72jWmySt8fswoetCMohaddNQh3M3MjY5",
  "key14": "3DDfjaN5fLKuStVsfEDQJ6DoopwW2RAB5sVYx9KSuEXM8cFbzqFQykYTVmUEG2KiWFZ8UQyvmRkj4vXn3FWfhMxL",
  "key15": "3t9nJZFQAVzgWxZuDBbNohV7ZidYYkHwPKhtBDM6V8w2HNcLo3FchdWoRZabGjw1N2koVWgFCduxRePgF9dedy69",
  "key16": "adiquDQVspdhPyiap4yUjKctNBMJRQV7RNqXksGAJd691zjFXJy2ePUEniRKczM6YLExsBdPmRgqYfnduttTdUX",
  "key17": "3suHmAje1jHNdkfQ6aMb2XsgLVqrtD7SUmVZb6We5K2dcakHbmNkbr4zWfNe95WusmE4NWgYPgARDeULyXF4WUNW",
  "key18": "bpcanTzYwV5vDQmyJ7jhWTJKMSRpJ42NhmMFnzB3ZPPjy8JyQXFee844cWs7LJ9Vm1rA5KUhN3bK5rJzGAfwU9o",
  "key19": "4Bkn7rZGarWd6zBRh3PcsfJL5XM5a8keANDfnbYvsHFkfFo596gqPK93zisSB6QAwF6cAS76pnyREyNYPHn8szrR",
  "key20": "4KSehaGfQAfdpwffCDAqDhYpnHG2UYFkqrX9i4ZBwEaDnnVstQUqjLTDqmyG1M7kQUAvMAfXNHLtqMt2ZTT6rXA7",
  "key21": "5N7Tqe2Db6A93YHz7XxAzeMZTuQukLa6eDjUHPpAHJDkWKGYsAQEuRoycDAyVvfCVZZnzEyzJnKQnGLzgXeyP72y",
  "key22": "2kpEGzcnnawN9n1wpPn3cKFgwGLPB4af16kt5FYMApw32HgceWjV8QD3oFX73jDtv5JSymuiDXf7uwcN2WeR816C",
  "key23": "4mSA6ApRMmAJE1owkd3Jm1tdE3LaeLhs3JN5eNNpGbRmmJhpaeugtL3pUjTYhUu1e2KX9J1176GhPX16Z5eQ5bc7",
  "key24": "35xtCFE5QDVbRc1GwzY2pmEwjoontGRJGuMz2zN53THVKybnBhXdEFtgxVboHn2gA8x4Lgd9KGJ2my5RsWkgqwGU",
  "key25": "67JkU1negnmd5LMad8VDGGEjq7szpbRUKz6DV7qP6NdqwmBygGN6TkbpXLGpRVcZj2R6roxGY6jeJ22YoA9wfQwm",
  "key26": "4nrJyj652x2cKrNDzF4xtGjdwcx7qC6NvPw2iMheRKds9pgX16v5BauF2PAmvcScD1BnV5AnSyuo4zaaeLdnhT7H",
  "key27": "4ifZk76p1pvt9TgzcU1Ex97bnWFoWupZW8iDXkkhpKYmtnzdtpVyyU7aDDCWyFTfZX9UM9PAtkFsUjGGvTPmgVL3",
  "key28": "5v6soSn97nmLhg7ELpjRjsU7W2VDM6mQgADednSTayJYRN8ZwGrpCLBmS1G4musXoMXWP1n9kTxLUADi7NRCoUmY",
  "key29": "y9BVcmCQum26w9ytV5iJ6tMesQWFGqG86FDs8EhFuN5nsVeqnv3TREdcXETZyAfYqrpsk4vWvPmZNmfPDB1R6Ei",
  "key30": "urKQgxdncjKRfnCSmfMmDDbmfjMKksWF8AFzv1tPzjtwLfqLHgV8un4ATabxF8jDGP9peRou8kAHCCpRgLT8PgN",
  "key31": "4EWJn8fLzyf3C6WDZ7rS3hcasiTJpSMFpSVJEg4yB3N6UvPYjx7JgSKnRmLwqcP5wtUwNhCEwBTHP74joLTDjkcg",
  "key32": "Bb2jPTcefSgFtj2apDG1PoNUJPSPwqQGthWiVnM2eL7orbEjh6Ni1R2NmKjQjZYnkV6PQLJR34ue2oGKM1rJb8t",
  "key33": "4mCgAF2TLHg4LVYSMGUHVJbDF83JXaFyXa7MyNa55XF8XrdBhvshcAsFsR8UGK6PyBmDNTonEQB2MaA9wjJpXvqx",
  "key34": "2qCMN17dHZRZ6QaQQosNdcJ3L6gZANjdb9BwGX6vDmVHYs4dRP6nqqiyWX6d16kr5KBjZn23cH8LJw2QQAhCUfNc",
  "key35": "417YyjrSSNhuGsByvmx8SGjBG3Phkth17LZhhogAp1CHEjxnvzfSvk3dAJLiRhRuCowmo5DYdLnkqn744j6MWoCJ",
  "key36": "6rKNeTCQ3wPRdyq6C1a8Zu9m2ktHWvSr5v79uYedk2yc3XYFNAbbcRN45DxUKTBfUGDVA8RVaUhSLPExzkJiiuZ",
  "key37": "46kZVCFwWN8PfnqRE2u2gsdLtgAvMSYTXbcdAU3LxmQLkrC1YmhGR6d1heK7hivH2hRY9j7Ev3oLPToFpp5bF9tg",
  "key38": "4kBfkd7q2GpFHYUHq1WUCsfvKFHfd26VV8CniuWCSMBD5MhEk7tPEziSVXhwm86NsEFDcabhEEv8PqAEuAAa3Qxa",
  "key39": "2h6s1WDg2VVcorHSVpHGDEFxzvy21FqHv2UrSqAwkD9roGSFTKZ1ehZXvm1xM9SNa7ZKdKw74BaLoeefq63EU2jK",
  "key40": "5pykeK6mY5RUwmFHb9XUaq7JaJLPHqFbfQsKzFNGLuwgAX2zhy15RorU7igGS2kNFVL15PDBhFXD3MkZ728RQy24",
  "key41": "5LmeaWnqGBTuqYESpRNwAhUvxA1nQoum5LKSeCswJrKvZwwN7h7YyxVaabGzdfCTs6VRYNhEZGUa9gL6iTyJa1Hm",
  "key42": "6ynvExyBtYYY9m16PfXqdXm3S7p3cQuqVSUFFbCZN2ZmaNZ3aYhhetpwbb3uQszv4poqMW5kPMzRPfknYK1jEKi",
  "key43": "5GP47VDkE6Rwh6oNLA1K8LKAp5nYwoNbUGRCaT4RSXAWXphbk5yroeSyCeRcko5BAskVvaLwgebBrkRNG8eyM8nU",
  "key44": "3ZAueruXYUMn57ewoFCfGaAjSzwhgt9pYyRbvqCWac54ZLTB6VnNMWqCjLv7ao4VfjK7qi54udzHVu4wEby2rLte"
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
