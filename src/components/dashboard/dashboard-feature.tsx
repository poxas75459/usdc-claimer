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
    "62U2h6fKr7fAy8Z9MXCbwiGbxU3eBJD7zbJwTqQB2KhWExXuFv8QyR8wNSFE2LMxYXgW3wW7Jauu9vK3J22JSU4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CrR6kDYPu9E7JScjAG87BZki7EyRddy6CmK3LF2bvYBEyzHToZgdsojZbjzGeorG7cV39mECadCS8fB4ZDWPoLg",
  "key1": "P1E4GPWSxpBwhjscTuShNJgRNUDAYMxcdUnUKMfnszeVkjHpweARxW7dy9SoB9wkXVMwKoF5om2V5ysGRWs2ayt",
  "key2": "4ezfKoMGucgGJ12b6TYUiVjyHCSvTJZZGnAMxioQKreimftbGev6WPoBNSsZdyFPpR8xcPRXBCVJJTCAHdejTaqS",
  "key3": "3njJjLfuBFJNWJQU1zQuEBvwLrXbE8xM1xaP1q4M85pf4U4ABVsHMHC8xLJoQzawP9E4FqajuyFH3Gxj1HwCAKmG",
  "key4": "GNwcCfsCSu9bmPi6rtnzBYFr4sscEcURdteGyS9sZZ9gguG9uaT7Mbfdqxd7ykvnoWhR9RWyGGk1HwsJGKxst6T",
  "key5": "2CvxN9uaJ1xNWrSk9wJZFXwUd7yGRJFsv6yJ6Ew8KftRLW5rm6Sg3nLoGPo97HJBDTKQWR6oNN1emZmt4zyqDbuR",
  "key6": "5c9zAit8ux4wTM4toWivQuMqiNa39fHYQgLDVUGXvgCfXLW395VWbBPw8tp5p1zeGcUNvX1nxCdSNJUXJNHJm9pJ",
  "key7": "4GuoekkQdpHBzHaeGA4rRmYRMzPZMSVXWGeefSjTp79ebbYZ8Uhs2qNuxYxx3W2pNKpv1qS7uYBkHjJhNHEE8NNs",
  "key8": "5bQuobLwvbxNh6oRqbryY2yTfso8Ud2bogKhyZAtvQrnm5JiM2xBg7paj89aneuzQx9wLRPreJfpPtUDq69LDJRb",
  "key9": "2j6etLnytZBdvTFdGwpEWMSr68ofNbDyXV26dpLjbdyFLyEyz2GGnXvVzDJPiiDVvHhB4HvUtRoFDZf2YT84ZxsE",
  "key10": "48C4g6f4Vtc34Ba2ReWxC1nwsNs3csah51WUq37qbR7Ri13GWBrDGaRhEeP1ULEWe3YPpaJpvHdu9BPSf7BhU4B4",
  "key11": "3ge3eiGyyNpVjczj2w8bzTNj8HzQzkRjkaMJuD1QsawF8H1mSoC1wYAwSPUe4auRmX4WwhgsBVTvUM8uW3gWGnun",
  "key12": "2Dg1gYSuJ2iNBUeRY57R85UrzNkqRjw4hxkkWmdeSfQGWor5dusNVUDiBNHr33op1dyAYdBNgCmiScFDU4f5weeb",
  "key13": "4WDndnj4E2tsuvpxMq1FGZWohvam47gEot2mbpUwkERrKmYSN2iCso9tu7CVcnPp8vS3qMaFxxrb377TwD9MrU7B",
  "key14": "4cmXArXdgZ9e5BVPHsnkHQv5DqYm4ywYdkpuwHVWx6ZWxntMN6nhJxwK4ZVES86DPDaTQHKpUoXNXZDoQJXAU3cS",
  "key15": "5U5yqoLCKGHhAcPcLLzbZ56nb6BZAnsC3b8sfuxUtNM7Bcvir86dXUcJSHS9NFYAmouQHUJyvaMndUz6JtYNSVFC",
  "key16": "4ZFMVKqTANNKgJk8yWdkSBg5FVt2z7gxk9LMPiyfG6tdgbh7B8FhGY4ZVNksoFVj6Wz1gaHwYgnRmpYSongBkrpJ",
  "key17": "T8Doe1jkKW8Rz6R5krATFi4VYb26wZoZ2kF1eGxCYg1J9tSErFMjJNtWbgNAhHQEt3VyrnpfgZdjDZGBL3K5APQ",
  "key18": "5VqpyC5nRAQf6fdiHYCJSu4KnVsXMqGK58cNYrCveNxa4jq9H3YcSzCB8FVPBmuJSJWJzagFYQ8o69CH5RHjt9yC",
  "key19": "2YTsDXsPYZmyNziCBdxE74xRP4b4jtX64bD3WpQuCc4erZTVmDfQ4wrFyp3pBg9QGxvDGuEc8K6VyNGMkg97PxcF",
  "key20": "vXjuRyD5XKEJ1Q8ZuK3gJviZbfRdoUwRJus75VxuxZBi9946pfrd4r8PwJTxHPddcM6cnfBGHy2EcaPBWZqGq2h",
  "key21": "3nD9MpQskJoowuMCUJeimdEMty7c2RUdmqzRVwL5gT2KfKmKkpS7azgRKSGQxZ3E41iSRAkreABke9RDogw9ctUK",
  "key22": "5LkvwWi8AUHZWHuMghFb1ABEs6rUqp5n7Sbtu1H7hi8NZMVj2TprFehvLKqQaCp5TLySa697q5AgSaj3ruF78aV9",
  "key23": "XyZ3FVvTzqa27s1jZhhN7zEfy8EbwQcdVrR8AfvMyTvfZfEmWtgRC9hzD93hr8JeCX2NZ9yZ8iD9q2isVk6yvox",
  "key24": "5osGC9FyYYiEnMUWNzaVNGnBjvsWzavTiewRq6bjSkMbMBqYeV8W54B84Vx8BCm8S7Gfhs6H48kpXHkLw4fHpnTF",
  "key25": "5xQcdE8iHYd1DbRuVearQeJRiM4qhjW8CRZ8WVPdn3m78TPecx9DZ1Ky3Je9aamYt8gSvN9rydwabQay3gqk3Yma",
  "key26": "5CSHJChqWNuHHH48BCdgtKtahfRVJh5LFbx5ZQJt4WYodMxkHNciQSPdaiXDNNmjZwovpye5ERwYt5nsTx7z1Ejz",
  "key27": "3QWTeUSRmT7DoC7heUVkqufZgjx56mtGSDF5Kp1N6rgfoBuB98hkGy27APzc3AgKSwECKqK6TTfTf4bG8www7hy2",
  "key28": "3HUH421kk5YVKuzV88KL3Vd3cz7MWrTbCXhz64sDmq4vd523gE1QwiSKUVq7WECumAjoRNZopfnJZq1EBuScWZ8S",
  "key29": "3hoR2LeWgYuyNLC4adq34sRHGrCkdirGiBxrzcGReUhUgGDhuTPNwCjkRoGMc8caR2dYEUxUfJWT7RR3XWTNpwdZ",
  "key30": "iyYuvkSDFpis84fQivSek9QmGqbpxzi2BCtda9Mdj8DcGNUMSMZ4cZtznHXFVyfk3ZNs7FhEyrPCiAMfPgGN8tC",
  "key31": "q8symuYjucsTLeABnbjDRVmqnoc12ap7nUU7AagPfW1GHmhmdjMBUcJbGGpcKEz1Sjo8E9Bg3dPyhXL3dEkjjQf",
  "key32": "BvqvVPx2JrhfY7Gt52Drqgz3qxVuJ8vjDZrzmYeJdVe8ZL31UGSCcTTQ9zHUsxpifrgExUapBCMxCNtAKhWFjLy"
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
