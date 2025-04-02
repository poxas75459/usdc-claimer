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
    "2Ndz9MAJgbVRPEEMV4MHKds3mRHC254FAt7cQHqfw53qaYMgjjiCe8tAWhLH5tER6bt97LjEGYx2Rg2MHaKy7Vx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mavEsnCDtCBLTV16P3v2PoQNqAi5UUQXpkQM44GnhRuDmUYQtA682UAHp5nqiub5dy2RCispugkBfoSvdYpiozt",
  "key1": "2fECeqDGpTAF7UfooBqrqCKhyj8ewvZPfAkd1JgwpEYEhqyNpxCfktNn115sn6ngUYpubXx5UB7BTUoxh6TACByF",
  "key2": "4cJsMFBwiFKnh4nFyD8AX2c4ytwxLDnJ6e5o3jSH6AEdVi1mfQXJJZDif6wQw4UA99nk55jXJz4UwmZNzbMfpRbW",
  "key3": "BidmrHp1q59NLXLaCduv88u1jtPtLPxCJxPZAmexeq3p6fQA4Umc4cV8rjiGwbpCB29RTJNSwPT5Sy6LDn2UN1A",
  "key4": "4jkPfVCgCzNKQHG2sWnve5ocjaEsZrH8CuaUDrm4G3HR8yqg3Tdk6mwd7a1E48p4H9aazCfFhaKvSDXFv9S7bBw1",
  "key5": "3Vd7TbwfDp9y8c73QX3ffKDC3EFvtfeLsLcgcLQFtpGotJwmUxbKNsu2wQt21dPUGyFG9or9oAr2pmtpgqeBCfmf",
  "key6": "62G6492m6QowZQRGnKod1KzkS6rQzd8LP8ogmU3wAaWEgghCfayWt8hntGxEXSTjhShttDex4owDUMrjgLpjxis3",
  "key7": "SMkTxB7Kd9RrSVGo7kV8yk89zJjoemdRXek6jhx8WNY2eh13Nc3VjYoBU8wCrKpo5AmN27Mc5TNz1W2UFRnW72M",
  "key8": "2KkHq2XAhLMJxBqf8eZSbRghxzcx8RQ253EzbAGKhUQ5CMcMHkhQi8KhhVva9zLNqDgbwTpbeqnGey83tHvVEdmV",
  "key9": "2KTQE4vh5pxR8XLDbikVk4mt1FSwwkzWDLiLmHqrdhzoriXLFXCMwHDU55AhBJ2w1XRJRkxzGcjZmarTY3tkHV6A",
  "key10": "5kWzPUvqAwJW4b61CsvrzJzFcTgipP7ZWnF8p7Jknp8Ve6Rj4EvVXsumEmYdoYzN6s6r9QziqEqH9SNC4WgHVGfC",
  "key11": "4qXtDxA9M3PJjN89mj5Yz6J1T4vfMq5H4b7RfTwRazRT1dTJ2LoyuVuPEEQarp8CSFDgMMSkPNMAAGTou5hmUvSt",
  "key12": "3Er24B1cnzNXR2cNHgQX7znYbN46jJBDZW98iLwMeV7EMpPzbGfDTdkVHfPxPQ4Y6HtYSWNw52d5TtZ8tt7Q2nPA",
  "key13": "5BVJ3j8sdvo13CNGFj2ztHocRkdNTXx5dw3N43gBNPFkwXmjZz91k2kzdbM615RMiaweD9UMSgrriwLkwrPygZPj",
  "key14": "3fEb7S3sLFU2sGdz7EqEDTJHV2SeYjiWDMajLYjHoV8Qi9rCT2CYCbVE9zMF19dSJEMccPEsDDpDdzAw6FW6uHDX",
  "key15": "61JXfWcNAvc2dDzLdB6BidX8Zaquaa9A5vSRkvtXsaqF7wwS6WNvtQu8DZFYDTCEKDfkD5dpDvViYhpgrBTr9sVb",
  "key16": "2tXsXicerpDPiEDwvm5byEQmmtkWDYsqBL1snwbdPqChhSsxJSLkHwqZsi14BxfVU3iFR5WwUkhzPQymnj2YnZTj",
  "key17": "2g3DFqktQyDEWvV77ndAXHf4VSe7YSvjeYETFgwogJmoNsZcRdfvkraxq3AZZexN2nGyReiKDvYzCiuwp9A5gPPA",
  "key18": "ounXjkzXbqEre7FKW9fvPM8DuvraJzHo1cE275uhPLsqdFwHK6K1yF8Z3VfvdGCxFDNmR6S63sGmHM47Jas278M",
  "key19": "4Ma7SyahSU1fxS5T1qP378iXMw3ibNXJemFZgqHJn3pkndSaseAKnLkR9VAY6owqkpx1DkabW9FK5P6gR2aofQY7",
  "key20": "2xntvFzA3KwBLYpg5FYJ9McL8ztW1YRGFNkkT9xZ4x8fCPvm1a8N3DdQ5w23dpf1oN4dmKHYMDxNSpveRhxrdi1t",
  "key21": "3emTRCsaVmFLPw1dVvV46AQXBEmM4rEJM85z85bd4dSD1XJ8tKJNct5Uoxy3ZT83H5WLRtFjXNu6Ht2Hfr6RRxpk",
  "key22": "2MdwyDALoe47fMkKLGLx2k8FfgvejwxqaUrSn9EB354XqRqMzJ2JqE2aTKHGFMQMJMeYfLBzcsG9uD8sNDBFDdmg",
  "key23": "399pSxqYPGCSTftARsHifeWbs5AdKYp8R6jifSMSfAsZMUzsFTCpSqDAfQbgDdnANrRDwXbW35i9BxBatqGM3qeu",
  "key24": "48R1Z3YJij2LpFUQhsFauG7c2K1o1FXHLQfozArhuX9DCzkEUR4jT25zpoSusWm23sX4aCLjx8dyqNFUDWFGze1U",
  "key25": "2ixpPgx5HqkTZz1WYkmBH1o7Bii8gmqahJTc4JGo5LmVWQXk8rTQEtAUSNTYAnxamp1XDSAtLGGwY6oVY85jZNhP",
  "key26": "Z7PRAfmY8px8gzQ2KiBFuQF84mHXNwg7DLEs4oab7NjfGr24E9Cmcb7z6TPXie4ab3k2Tc7HsCVDRUHtNQgVFuM",
  "key27": "21nbd1yj2iiGdqMmgeXFPTRnj8aLdQhG7r1w87gMpUXFELNsASYpFL6TNhZrKqp7zfNEWCxJyZxMnxTSUBkyUV8u",
  "key28": "2QrKzAwMvTCFdSTY1aH9gKbLi78ALqbCe4EdcouBHrDJyVh3SwHD1oqeeca61j9RHSVHA8PRSfqiawbvk7YadfaJ",
  "key29": "T6So7RZvy9NriRXxso5Htr4p3d3EK69TBpSXC4qp9PaovKCqQQ31Et9Jgm9FE9jVKExYG8m257HrDX5kqFXWtTS",
  "key30": "37UKUYVrQ1uX3TpsWNWoVDAhHoec4JvMBvbXjuX58Y49T6PFjKtQrbyKD28zkqDnr23ZwUZxZjewgnGJovSVRxKq",
  "key31": "Pub7fu9JkAxJvABPzQsb1aj4ENkardPAU8BMN69RY3BZpF5P7A6z1bozopSwQFxPGVd9xE8bSVQrtVoqji1vNgf",
  "key32": "Dv2C1Uo86AjgzWSpQ1A6KiAAMfPw7moik6H61qa3CwwQeF1475H6sGuJssb92srfyejMrSodwyEuJcaT9TZMMNh",
  "key33": "DLofcQpvuDCx1bu7NZXLubanNhARr9AUEVbRXyQWoWYhyj7Bw2rzu4ny4dekJJYTvykGL8ALv7GehuCQW5kPYVe",
  "key34": "aM1AXFjynGNUe8muNSngbcyUcM38udoLdfg7kZWDZqZqW5AjweFSxTYWsgynPiyvfXVfeKXTtKevp5QRNtXR5QF",
  "key35": "w3JroWNT8F1eCtKLNvVPL5DoKRRBwHcTnatYGpiT9Vk425XwAR19d5FsjUoXpEkgiTpXGGG913fsd8gfD1N8aq1",
  "key36": "4KctTVLFqbhLmciUJg3otUc4j4j3M39X5VXsZvhuZHcu638WnoL72e7eUstes4qjUC37xhCW9Std4m9Yt9mZmstZ",
  "key37": "56cPpFXFfgKTgDH3kVCTkqQMANih33nZHi7KMtzUFcmdoK1AZF3RveNJGfxDjg6FG7CS5VqdU884r9xWoTfBcdaM",
  "key38": "3sZFmaSD1XWSfyJhrmqmFQ4kSH4rpQ1fDxTy2fYW1H4w4ToUsXNbXPWqjwG9Z1r4aS2VZmYEUyukbPTKmiqePEuc",
  "key39": "57zcm2tWzxjkdw9WkEUDaK2x2pEkoLoc9re71FhZ8RrgC2dE8JFcFM4zTDfhcygaPutFLxWA83svUHBuChFRyjfv",
  "key40": "2X4P5aG21G5vMHWViMJp6rLaL2F8Ww8aMC6y4wVG5PoAp2cTyusogoTE25hwAwA8bNtFSKQSt3gfKgx78omPZkZx"
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
