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
    "2bmuB3wqEAKHdwGPpzvzxEJHqmC4uyRdvVGqeWUxWx6T5r2Bmoz1dg3KzLzh6gWXzQpisVENGCDw2jHsQJiMYb1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pYExsR2mHfnzbKJJPrR6934mCU9A7ookqCjW1kJemTfnqzrkMuELd3K7BxDY4Vc1jRr5jrng1EMTUL2FHSHG96f",
  "key1": "5aULZeECNBpoAmzvF5dewW73qfqgm9Yooi3nXbjAKoaHRp1vHtTGQcSLx8ehp8sAow4ZGBpyMFGpC3xwSw3yQQ74",
  "key2": "vmLP4jfuUQu1MjqG7Zw3qDTLUjz4eEKi1woqXp6JiNJXyCwhXtA1udh9uV4H6nCVeeFJ7pLMh88h1tBzuMSoYNJ",
  "key3": "GeaEmsgsotD4VQvwG6zvb7jiRnVW1joyKJTWoaryXytKsGExHMQCwAges2i4LasFyyJR3gv3v36KaV97n38o21i",
  "key4": "tCBSJwkcSLp9ExoqxbsrcNRV6mF41BWJJ8zJjXinGRLYdkR9VPbUwdTTGWn6nLac9vfaynTeNf1wsjYCd9qtTR8",
  "key5": "3nHjuZ31HNP1zFFp3TKHZxZD8mMxkC6uWk2ynNX8huY93WveJgw9vxYoCGDVjTwGVJnmbbBwHA7A7ZitETtqJGyh",
  "key6": "XVFRTvcNe4chMue8uKMR1TRWPzZ9fpw5pTYi2RL7XrA4stW2YMvi3ZPJF5Qd4cHerhDXKhW7gaSAHbYH9BfHUuK",
  "key7": "5tKbq4jubJi1NCjkAwcMC5fFab7H8tENekvq9QJF89AcWx8UiCNiKS4zcoULmC1NSKYxsdaQJQrzweDt9CykV98y",
  "key8": "3vrddKAXEAFZcXcTN87ccsqFPB22zLcngxrieeH5UCFqwvu5Ny2jokSYkBTG8F2YkASvPr4u5dXLwK5NqAEuGgKZ",
  "key9": "3n64y55k3Jsax77mNm8C9kwf4PP6xMqTEqfCPUVbbL2xFF8bPaU8fspSD2JcForhGDSv6AkrjiqNqhLFs8UEy9oJ",
  "key10": "4MeKsQKPTHkCbie28bwcB8TiGVGRBw5pCQsDL41dpfUXvuTn2AJBfeyr5WER2fx3U3hscDqxLTou5RVUHTU9FFwN",
  "key11": "4sacrtqSwCKjixqhc29K2AW452dwZXQ8Z5CJBEypbkWtGmhKpgNkRRJWBcHKApcfzDDMez6HNuDu84kJHMe82cEW",
  "key12": "4tL1HiTMYk46xzaWM4Wrk4CgX17NSCNnJrvMfPTwkp6PYCyCwTStHdrBEsaiaYqfUmVtbn5rD5kYz613RGpY1vdN",
  "key13": "PMno8gGtDzcZFr32jEtTF1cDq6jdcU5dNdmxDgktLbjS7EMBdwY6YHz9satS4e23dNBBhSA72RJYw4s3Kbg68M6",
  "key14": "3cSSe7LSqASJpyHSQuK1NwgA2snR4TiH92XAs9keHubxdXiqAPGPEtXuBrxhdg4uYZfihshxL3HoXSY7eNtvtXUR",
  "key15": "3QJYGBPJFkTjMATsSsjaTFJ89QKx5KNCwnCbv41icHxL5VExgVq7n7dyUHobwsY6EG57JwG4AD92DsKsxFEizZxS",
  "key16": "3NWvn4X8F6w8X9LHVYYugY6n5NTfESnBmKR9JjpRJokxHbghtwVe2sPMfmJkHP7kNodEJVJW9NShgNgXYp5W33Tb",
  "key17": "5xyxg5ZehTzGfHQqTf21KH4Nkm7WTD1iwz8DnLwUyzDvFRiXobv1JVRFeGGUsCWQjk8RRJSA4j48C2c97Hih2mco",
  "key18": "2o9ua37m471Bc6URifwNoBktDFNTyrCUzfJkJYm95pPXpqJ81XdMY4gYfayGHLvbC53EzjUwEMaMp1MsongmLoJK",
  "key19": "476jrK8HKGf7HstGuhcEaL6xtKUmNacRAaVVzLMHNMBnQuXqoGuZzdVHRCMgkUXgubaS1ZqdRjDDmsJCRZ2TzJRN",
  "key20": "4dTMF4sgArLS2FSYacuhXrUAtZBWfWxoZBSzB5dtZcsnWRcoskDG1pKk9DSvwLChqXAGjfVzcM2JKQJY7Bhbtxd1",
  "key21": "57dndTx3SHM7XYqFZ3RM5VmN9jtj4T2kN6Qhj2mGGvw2x84wVcjUTKiLK2YAbmimXisx2b8orn5yBRBbYnVdrxqK",
  "key22": "5EsXuB9NBoPbm9oAiaryjBk2oWJVvpKkCetLsLZiSjJPRxAjCQu4s4sRE88VjHKr6vafWUTieMkG83LYmiQgtozD",
  "key23": "4rS2DVNbKPmuLT6M2MrWKw7DzwhtGEMJAoVSXE6URibAhYEwyi9ox9Lz12GxLodA8Aejjc3s6Yd7cn9zUac3yYzM",
  "key24": "5iKsYB2LBbXXTgGWSwXS9SPap9YBRbyHvx6FaWBZJvtND7cVWCzGZTozsNT3kyYHapT7oUTPbMm67dwufFrB6Ck1"
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
