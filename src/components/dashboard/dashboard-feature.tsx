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
    "2zgVcFhBwAWRe5DSPnnB4G3jVfMK4UK9M3nri8p4tQ4cSoFy6aN7wkw7kemx3jzoEZL6vbCf869GWAeyzEX6YPSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPNHL7nTFpVDoNXawr27m8VTSYa3mgckALYy3CP7U9u36d5mNLDMvbMX9AsRwHQT55f5GrFPrPigoDt1n1WZxf9",
  "key1": "2oqY8t4nNHXwXA1YFmEjr2ggigYLeRtPQ2B7XhiuA6giPg3LnFAWnkctstxc7GZobaFbGpWGjXqUeBi7omB5P4bu",
  "key2": "4Et3QDRpTbdsdYQyTWpJjLjtpwbxmbtayAmFRMLcGhU8em6NrgFmL646L27m6px5Ei3MyFqTDuMJpmjhoK6z4YWu",
  "key3": "L83iYBNsxGEUbdtLuBVEWY7QAQurftdQdaWtBKjVnZybyiPQ4TnFTPm52w6Kx8bWbBrV9qpQVnVEQ8yq3WwfrnB",
  "key4": "ZXhESWLw1cV4Af4MK4H6bMUy8gnTAsxFioj1CfJCUSUufwHYUPJPWEpcK4w2iATTsNhPybE1nagWv79QpuVFTe8",
  "key5": "XdmVzPCnUrryhvjC1dyxQ1xB17QPVznLmx8rzAo6rpbifWEJhKJjaH6Y4eMZihaZSs2aScV7HdgvN17aaZrzDGb",
  "key6": "dHfXi8GqxvHbtotXrXT2XqBcEJzu2F2NFE7bsFwirtgGfhpnE2wLKqzkMhhLwdZ9ixeEuXrrYzkpLL6CxqqXsY3",
  "key7": "25HgqVZf6NPfVGwTRvr98JpPQ3mMZepXazWf1RN4rzeNvWwULF2H9onNw3prBpkT31vhyw51SHok79XMUzw1in62",
  "key8": "3FGDUKn1qEgEdSEv8UeZoywybvSrKFRbEFgAwDCHDZ4zBjJ6F97SJdFN7EquTGeNdVBsZhLLZ6WxSevyueXhW71T",
  "key9": "3eLYjxpwaYAekwf3kZpYejXciauzqSHaiLHBhoA8WFUwBy6ggyMfyp2pM7cMNLue6is9qqugnCLawrLRMxXCdbak",
  "key10": "4SNQQJdkU68WmQvUTVPfRFgR4Q6EJ4oqWJT1HXAquNzaK3wD8iqModsZw5hbiXctwT8bCicG3vbAMjmfuQ5KAy6Y",
  "key11": "36kvF3kyezLNqbbcCB3pFqUFYvw77eHF4KZpAbrMbuV8jiAtDkgZ7Lr2FsQQQzL2qA3t4hgKHTAScrkyEQHmvgZF",
  "key12": "2F4e4Z9SnRdPEwfL4LetpAbFzmfgSRrhnDJwP66sk77b87Vq3SoPVHH54vdzz8ttKhuGMPZUZQGVos3GkMDzjqNb",
  "key13": "53GVmHjn7L1PjV6WNDQSyxWfZLGrpXwTMZXwHmfEt5dUYtjzsiYBnxehtkv1ND1ELz2CvL3iur3kEQA1V4F6xMA",
  "key14": "4fKLdWXtfYntbBjPpR8FTSf3MHSvHFBrQEoVFhYAk4b7bkJJDEH9J9sqTeecwZjLauZyDc8h5xS1yhGW1txvaZPu",
  "key15": "2r9P57zUxavD4ZzeRVFASztmpiXMDyLsYhtFyDWqvpNwh7QjG4E5sWW2qtY2nMyJr4AyuYXPCjsp51xuc6PyWraf",
  "key16": "2eCYKAdks2VchiMS7VHHQyK1uKz68e1WMbDkudnbNK2RdouWUY7ewZcjAhmaFrspCafJxALQqGb9XJoZA5BJLd1C",
  "key17": "5FM4qwKVH7YVneWQUjsyVa1bWeszACH8FxgK17gJi9kVjci6a65kcc2fX5fTCXVFWZVNxsX7PmY7UsHwnk51oEVT",
  "key18": "4J2w2MKSvLmCAuBUg19vcmSz3rjEu2rtu65godZnsmMhsStR2g1jxRrJuuJH5QESUh8C7NUjKA9r8DGx7Ezu5wv",
  "key19": "3XXR2PV9fgCkqwiQB2AjeEgo7ynmEtJQGB4VxfLEDmy7VsmmUFrvMLy4viauWj8y6jL5bv1DQ9MD6eKWFYnn85nZ",
  "key20": "3fjaYHSu9jnfQ1kEB7jTADyipdZQEu8QZnBvCm6pZmuH285qoK7kdfHbobC1GvPB48eBch4tTD6qki5EC1thvBmv",
  "key21": "JY33J1XXZ9Ky63aHGvC9Hm9WvtTum332xaVSoV5vU3pYGt26eyCMj8uRmg6KSWj8cjNXBuCDg7LaPnTJrdQ3DMJ",
  "key22": "NarQbCuA7qg9q2bAFDzYYfvSag8BkEtSUCZTfs1K8UWeDZfLzFyTiYDcjQkBi776mDnBLeaxPMEdQe17uSdsNc8",
  "key23": "4oNH85H5jZWaoyNXDyKzCFF3eFnruv4LkYxHEP6DPwuLZeVr1wmdMK5vz5mTUtcjkxNeujM4Sc5epUNGKNnUiUd4",
  "key24": "t3dYNw6ARDvQfuxsLCnmtCjGoxd7cnepEM5KQ43qJ9VXY2xLMeQifXWPFMgs54b4oaVWBNGwk9H7A5TXdFunjod",
  "key25": "N4AHzzpsD16XBc89ESfmWnHmYUQxQs45ZaA76nDwrrRNsa4SRjwe7V7MMczawvLuT3rXPReXmADBapBhzPUkK81",
  "key26": "3mN8S7w8x8VNe8JnRFuQcPDWeQj1T9xQhGWPXZ9YUgppUbiaBft6335bs6RR9Eh8xKiKtYnKweqk1P4KNFtan7RG",
  "key27": "3xN9tGAjaheYk6QFswNrKX84iurf4BqWXrPv3Qf1w8q9wTNPm5jr1yijN7hVb2BcxmCq2QbmMzg95aTNoVPjrQGU",
  "key28": "4aQ5pzY2dazaiE5mHpEV8tmaxz5BCvHJ66jznRWyJ2RPHQXe4aESD2fUiY21WVRWKBBn1hgt81rahwWGzFsFw6LJ",
  "key29": "4kbBEFHy62MbzyW1pHkYcsK8husp3jhLCufimgsXnDhoLQ3mm5jZ84zrvZytaxvjY2cbh8BoGhWeHHb1wRdxDtHV",
  "key30": "2d5gebmruYUBWpDRJ1dM8wM5AxY52mm6nXKikEiN1ZEEP4QKmUyf96uYimEWVySSeFfd44KrBBWC62c6HdRRQxEE",
  "key31": "5omaGyypoRjBXvhgLnH8z2ozrWT1CVD9kDMX4GPhXeCMETE316zug5jXBcrrEhiC8QF7HCNH6jMaYBtZLoDtr8ow",
  "key32": "zYh93t63kCKmtYzKvdv6NuJL945pTCLrgWrrJyMqi2B5p8GVBzKUiSFG2UPEkarYZYR7cZx3unTz6VPSKviGD47",
  "key33": "RVsfR1ERmFPyx6q99ZTcpjcCSqe5e3VSmhE8XHXLGdaRfQST7hDPNnqrhAzyaQgLr1qAStifJLK9GGGVVkbp8Kc",
  "key34": "37S1tcKcSdhq7w6aohd8GVPhFWZji26Jd9WRFKtM79LxuRLw2PomtwH1pQevHx18d1wr57uttugJBs77dybygFtQ",
  "key35": "xuDPEqpQHBRfrtCopE1yixoz8wBRPNMkyLqQDdgzNofCYTPjKGtYuHexPfuDuLpfY6AX8x8evvZj6y3aktCRN1U",
  "key36": "4NLUi6FGCWSB7qBUt8wgXsSt5TLNquztV9xNnRHQMeKgvvN1w1bAAhuwjYo3ZqYo9FA7ZeThks4FTpxnXKHHf4p2",
  "key37": "3hXaUMNTpKrXsEEuuCyynXe2etLpUP3Myki3MVt5P5Tx65SobRF5XdBw5zNJUSyjXQfamCdwKYzjgr1HkLvYyQHn",
  "key38": "3UhfiySsAexF57ou2UVqtoSDPnET338HzMCBYUgypTuWxwiYFakMAc6rAYqwfkrAsyLmqR8APYTmiPAJH7tkcDRx"
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
