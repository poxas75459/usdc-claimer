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
    "4uHjGKTS1QehPUBSHjA6sRcgR5mPo3SaziBNNcoFdwYQSfzg9sbJtXVHs4mGwBkTAzWCJX3A2qmRdgkL4xAWQzaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32YaJfL7Miu6hBhf54Wxh7riWcywLbm2tPyuQRFdoDi4T5zd6M8HCZHAz9CbMhMosnJLb88U9wBeDriMgpaGk8Rx",
  "key1": "4MH5Mz1LriaJBtA6cvDWK5yoQVoStr6Wqf49T3FfquMyXQ7pvZRfaDHYo9GxM1yM1SeDJPx2yT7VcRLc3xjhsfJu",
  "key2": "3sGc5dccsq9hhPDhy89K5UJq9pqAKjwDcGNYPWDXEDCGMg852vFApArSKHRRKvDFmE6zN8yoDTuZjV55WdE7qVmc",
  "key3": "3RQoKXLkjPuETFdiaGQHuzPAQboLutaULi4FttcGHUj4QVUogq5beqgLg5hxmksHqKQnoJezoG8AWLLM4iNwGbCv",
  "key4": "3BWEHEr7Y1br7tFEKVaRy37GTpcfNiLPfyRWmmGyWQks6q2uFkKUdn5JcPc1gBPV7oXHGmNVQ5jtZ9fVHQ72Xssn",
  "key5": "38iRwhk1HcyEF9QJrtHdCnt8BcaWhPzyGBLsGts8ta6r2TjWgMQAWTp5jjcqZaUCjDvg8kWnKh3nPsggToynJkDD",
  "key6": "21yXwyZSshDZGpxPaAAJ3HN9bs3r8bwdHE79zcKiTcbPXw4GLw1T3Syusnqhc1eTmG5AznzUG7JbkjbUtS3h5eeS",
  "key7": "2aTWKyBa64NnC4XirmpGWVhXVRN3a4VjNDvgGmQqzFV3KQFkMtKxE6EHPdbALrZ1nDdoRxngTDkt3oQaDANhXmiD",
  "key8": "2f3vzzgbwcmLzR7ow1pKw3513fHCcHtEsqjeVTC9bSedxp4jfAjV5jQjgGQZasSCteVX4sqoDxWV5UwcYGpgmMVK",
  "key9": "2gb8gPcCDdsNFknjnKHCCRkdZpb13aXs44x4YJGmmfUjawGPXUvh74GAtsFyuYeCY1Qu2FVbBJaQd83ujM7dQM2Y",
  "key10": "5PpRAWbvsYg2twtkTrMrmvf6x6xgurtrQjRhyoYwaB6hF35kxxGyiG9d2MS5SjyGroSGeBHURAtZh9TpX4HC6hiv",
  "key11": "5FRvf2obWL97S6aiPeBAjaeWe68EZPAAx4yFHkmf2BbVtG6zJmyCA7RqCPfaKBctWsqjyYyX5aE25NkbQ5NtYAe6",
  "key12": "3AstYchjpZTFk66Sov2DT7LyPnwcjR11N8VLFBiBjeDGd4aZGjebmhAX8CgvrCZu3YFNB9btTfKBJ1oQL3YfxWG9",
  "key13": "29N9puLDcfrvCUNouzcYGciZcU2sDma2fVW7v5mdPaZVuDfascLaTdcE6oPP1ESFcFAPcyHrMksCHpqmavXeEDu9",
  "key14": "28Tm2F42bckeNhWsCREuNUpoLr7kKXKJJja4GWw5ubRbp1qaNpzeQg3N2KwF4nte7GoAx26qsU1pR7kD9NWNUQeE",
  "key15": "4p9siP91hCedsqstcLwSE3Yg8PHJ1Cm2wbkNQQaDBEjyRPug7HU4dkzszJ7TETUhEZvJ6VCyED4cueD4TocW1jya",
  "key16": "5xRkMgBkQN76jwnhBwmMFfN3BSNxtYz7NqBQMyo4byWgKNv19ZoZ8UH9HTBVqcfuGtNUuApsNnSpCtd3tnYvSAkm",
  "key17": "21KWZQhfNtaJy5FdhnFWjr3M6aj2uczsD7v4gCLUQDNfeRBm4ZBCv8CutpXj7SWtCoCEXmaCc5Jji3uVqzLAFk5G",
  "key18": "5CBcxsm8KsQFFrKfag5CdPK9N3euCnMaLz2UaCS6pwYqxsKCSLBStai4NEPbu5vteHP7EVX9GR64hQTs4tXDCJEj",
  "key19": "x8FWFNWw3YVPBQ6huW7AH7SnnVbRK5hJFcYkQhRgsCQHFsDUBFP8KKDgzBDcPmowE6RVJtqBmE9iyMBhjfdgHPB",
  "key20": "5N9pybeAP5Kw3DApW6QthujtUE5mhNLe5fWFE8LLiVayLUYAxZ1shpR37YtkrzWk1bYRxbpRJ6fuenfMfUmsfbQM",
  "key21": "2uhjoz4tJ3GW4hFiwqy5H5yZoM187mY24CbeweNcjRmuBGtvaqJrAMLQ9caJgHQtQx44d5RautRbtzVskYnAqPAf",
  "key22": "3eUBCWuo8nEVN7HEcYKx8AoD6vCsfd6NekVnN9xk5moTHi5F2RywYhRnGtxtbK1ogU9EYkNV8T73ao3g5fDqvShJ",
  "key23": "5z9un1DEcH7AdnWLwPoyaexv6aqY9DmbekLFKZKVXAH9jR3myeovZeYpoXPKCviLkMxrpmhWeaQjx6PadvT3cvKS",
  "key24": "d1b6dGhrm23SVxBZ1xEzuafwp8br5DwT6Gp91kpqvPJnWpfgEoPZpHFxczsSzYBYXxVF8i14gDnJCubrVYxpuca",
  "key25": "5j6BWip5DN8WWkuRfd5V2P4f9q3mrvcHmt3f8dFr3kXM7gswZfW3PUFpoJfTFk7zxMuwAWCYNCaKH3Lo4Rxv9oYU",
  "key26": "2fZypur2rmw2keLdGu4KHSohhUmRPVDWcbVgUETbDQLjpX3VR1y7MLTnCMnmEHBbnHE8ZUdcydw3PSdqTgX2VD2h",
  "key27": "5FTCBR4yUaxXDWc2YcvN6d2ETwJArxGCUrwzGa4ZuhhqQkhdU4y2PifJY1Tn8616PxYbJ6BkKn534wysigp4e4LN",
  "key28": "3AdzsCZNdutZFoDUChMDYU6qUN91DQDuWx7sbZTRfHDGSh5ALvtuyJx45Ti2DzJAFoMtqATsgvXx1S6G95tCEey5",
  "key29": "YSFWKSiWKsjAGNHA4bLe41ZkwDtDz5QCCtEV2SaHnApy5WwL1W247E3Nawa6qUAZZSpgtTzYK5gxdvma2xkKREP",
  "key30": "e386E18JgC6TeHYS7PnyFvtoAjD6dC8ZCzFfsSpxVeMVP9NN6CmyNFXuLkRe3EcBpH2Lce8ecCFZ1DKuS9tiU6b",
  "key31": "sTdyne69iEGHZiyjgt8zGCTZshYkWKcU3HUU4NrJcmDuh6WB9RANjMNMeZV4wXuKF5Ju12kuRqG881SYoA2mrw9",
  "key32": "4AHvcoLzmemfytm4dcKdVzfETEE6RyQVtN5w6XjVfwjJKvPdZ25D33x59DZaFGyHF9tyYkuW5tPQGtdipLbZmaQp",
  "key33": "126qzNXX6FaGi9rfZ79suiuBmJB39ezwxgehE5L5N2Stn1WCitXkE6tws92YvGoncgXcSfckDCUQ6rjFdUJAW7ok"
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
