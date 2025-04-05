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
    "Abg6ppBEmtUmnyx9Z36Ybu9ButxvR6ha26fLKNzsS8TZdNdzER9Vhoed1unhZvSpi7ZfeBS2PzmoHXb6hY1kEnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hEShreeV4hvFyMsmq9EkiUgdcfNhZBeuYM5Y1ZC81A4PZozk8kew18CDseVSVYJPyMagPKsxpF9uUXyLMFkxp1y",
  "key1": "2RwueegzQBTHsTdeuSszTLuu38hFGUjqkCQrMonCW9Q4jNrsiURNa29o3pGSPfDSSVpa2HEktexbh68zgpnxCFk2",
  "key2": "2FiFcmKra48QfFL8TcN3YzDw4oKC3X2Cc7Ap67WCaW9JVvyvisaSRx8NiNHUsTryV3531cDnmwunm9NFiTbfwQw2",
  "key3": "4X8xebkgYQxdCGBxYZpXXjenfZWfamzChf7mqtcSGrK55LCj2JwKty1AR3hLbp8W7K6DhGrSZoz4ytLrvscibfUt",
  "key4": "2PupD8kroqckD7DKzhKbyxs64grMojXiEhJeiiWkR8VBN5zwTAULjLDgujZ1JTw7f6Kmt818rJRZvxuj1CREQL6T",
  "key5": "5RCw6esFqjCsHCPQKcDmve7JoGgdsj295FXoDKyimKehTe5oL4pXcYc2pJ1THJt63WGzFMvdM7uiPPLCJHQEZve6",
  "key6": "HHVVoBzrp1GQSRuXBNyVbr4ygNhUWMCYwYzGcbFWvH84M38M8ijxf2ufBKdBxQ6uM8pZCUzvMaYaradUNUREgqW",
  "key7": "4droE1qsMoMoVfguyarUfK3bimyv2oC1SXdjDsYpCxbk5EiEQAhR5vhdkbxiAZyuvifxWm6n39PMBTffMTpU86s5",
  "key8": "27WdWRmdCPxZ8TbwSHrUhf5Dzm8g8TyytLuu2osNbRT3amknLnsMAnNFpsrxK75bQpfrhN6NZKosEvdEtsQndigi",
  "key9": "36sV5cZ59NkNTR1TiMjqqBAtf12ErKrnXMAiv3zTtju5k8hviGs6vREUyvLPMTFvzSQvCevUAZQtxvfdw3k34gyW",
  "key10": "2cXk9rADgx9UqYazDfLkwuK72QQaWBaVLkg2MYNpBNtaoaM8cvKZ6iC8RkmHZUJRaMJpUg7ZbwbQ8pBuxt5Aa3mQ",
  "key11": "5ifSN3XtZQrsfAFFmJfXL3oHDRPpsuHDSu7URDrJyCNDLeFFr1bmtTawt4oxYK6gznfNvTCaD47Y2J464ppRikp9",
  "key12": "3winH4YV3E1hUYS7yFHLmmqtz3d14hcr6SxUjKUboymSTvqxx8gMwQGBbGi2JGufxAydrtwTgdfcZwmyyj3i4Lkc",
  "key13": "w8qW1B7RcUGHKC2q4Pchtsd85hJZRYn5m29FKhUF4DFLZw3LnLQSjNoQ5oN9EXdnaAN7VcykwXeGxHMFF42L4Rg",
  "key14": "4o5riiXRFJW1BndVWY6NR7hGFBYhU7TiTEjCK6UGEWA9FynapmLtsaeppZi5DNHAHdtBxGTwbZPNPEyHnzHKnFKo",
  "key15": "4hEMP2zLYrAN29ZwFJYNbUTFZM7FCSCKSnP2oVAsyr23krLiXMhRD2uu98osMSh2k6UY1QADWG7pheEWVPJZcXnb",
  "key16": "2md5QFH3CHyk4vVJAyTWSiyzXhreuq5kFo6ZbZ3QMUFczwCvE7mWwY48iJ4Uho13RontSUHciEaTbMph3bNAeT6Z",
  "key17": "2fosZbshubnWC1Gaj15gnTzkPLpjgwvDPMoP4pE68DMfrnX4n39UG2AwbJdFbYyAideXFEWamJbynSEh7FMNNWJr",
  "key18": "32ptRYajdyhZKkxvoLovQESen5G6bdHKeYhGpoamGKQy2r75qMHDtoCfbRW1nBiY9gjYKtUSXMqsLyWtaGcnBKDH",
  "key19": "LysmfneH2XbyNuodLCRFZVBWMjA64wBh6fpKoNHbMbYa4eRdn72Q8Bz9xYHdQGhfp5N6vTHoEHQkvmQHJTEa1Za",
  "key20": "4GgioFYkreVT1o7GSjQyDah9r2FfzbKzHiRrTxFPDQEtTRwQZMuMWjgENVsiZwny3SL53AXbWUhuhDBuVx2sWJX3",
  "key21": "3BSerZ6S1iyZrbyqbRq4KQT4mMHR5GQb95ygCJJe9FPuU9k7miVsL24KZN41Khm9NywTqqQo4u65JjKY2rsvHiFd",
  "key22": "2UDqEVcmfrSW9DPK5LiueRdJ7qJpak3TvU2HYVuoeAW4RhSUPc4piM2uCe3oLoA5VRdZDRn5z66GMByLfoEk3vY9",
  "key23": "WJ1mnVuBtLZmnYgMR4Yf9wfHaef6ZjSWrt1xjP7kBTgxzbjBwk4hoyFLKLyyNuocoC5Z4LHYJ2s1uAQZ8LJC5U2",
  "key24": "4cijdryAgZVqCzrwrRus8818XdC6RGfhjitggwYF3TmDrVgrNqwtKqW96njDsChsapCdDy1nJTLqMko88jxPaKxr",
  "key25": "63pU6QjwmPmaoQ7oUMdxCeXXLJa1Rwr3hzAbxTEbWcUbSBtv61vjqBXLQHdRFjU4JEN8gYbUv1L4FQSoWJ7EZDzv",
  "key26": "3bPP63ZsgEr2kX1BWfwHujfbNjfsURHpi5X9x35Sgp6TnFw8QUSPjPKx7o4HmN6t8yQkdH7V9iTfUqghejybWpQ5",
  "key27": "hRypCceURuuRyYq79Wp7wwV92fp5YVBpuL62Mff5815hWhxYbNTmk5y2DqyTDKakSCSR9X6rEznPGQNBPsmdvu8",
  "key28": "4Sw5oitzusFNM2cTg2qST52g6dKPBJfFbVHLnAdBZBjJ3zgEqkRECGbSKj41CJ5XgZ1M38kfhkJ6j8gU4ugEJDrZ",
  "key29": "2Z4JEoeUvbNtFqufsheh4ok9cfao1qcdW8j4drqGygZ7fdtYX4nqMCqd82iGLd57pcVPs2Ey5P78CKyWDSiLCbKL",
  "key30": "3CWgARbaNSw38o4fwkFg6LhPiCeaPKufQqoNgCrUDNjtYbWEtWMYNPmyXfNSDrqoe4Cecd6iDpKvXD6ZGtxgez9f",
  "key31": "5FrahHvGXimQkLtwLjoFEjvXydsV7ycVKXDfWxecRe42KmwkG77Z1KR1mNJabPTQyeG8K35JzpfSDcpTqNJvBG6n",
  "key32": "4upLyz4H1L1z5Sr1pBsu3W8h8k39P8TyfQ2yKgw1i4SZ7VzvcZXVLZPUNtz5MjMRYbqqvr74akCn4RHeEeoJHzM4",
  "key33": "4zPRH7EuU2CXZanHix7Cpd9apy4ov7XrjJv6vW5VZP6LrE14WwNSWitJuMqi41pXAZD2BJG6EUvX2QiJsk6nXmfD",
  "key34": "Qz8mtiQid6mqLV2vNvytvKvq4xDfRuwYZFkin8H2WYR1aRtFprt5cLfQ1CCr7uiP8XnUQBSrXhpW1YAEqfDzU73",
  "key35": "5Jd3PptxZiJ5GCiz2WKveQNXpkQEnUocUJzztUAm9K3DvzDAaj8Yeyfc2e4MyfEso3wpC4HpsXyo6gpRtCSjkVwX",
  "key36": "z1mWmVwbr47RC9epujkRVvswgf9qfc9HiM8auB5uG5jUJSRxyeo3xzw3LtDJGjhMSWhYqvqGZkD5kDYRWX4dpHv",
  "key37": "4ryBL28zprWVUyq8jUu1nbrcXXkYby6kvty8yfttrs1dhqQY68rbj5Wd3bU5pnJnSuwRBg5rfg2YHnG7vMqZfcQj"
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
