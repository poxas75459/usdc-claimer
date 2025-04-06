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
    "2tiL3szrphnTwxsPuqdPrmuy7zp6y71RwNfzJBYfXSR2fguZLdVSVaEPvhGV597PpYLVhtUq7Skj4x1pr5YbRKyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZoFFWshGMGbabPvwuGCyCZfv7v6fCMvxgsheBo1yPMuJj6oS4YaKCsiDzqTqhcRkGximLjUHuHB5ikrMvmioWk",
  "key1": "5MxY47LChvkPPRFbmvdhFsQS56wK5KXJQgE6FigKUgvVuu79ifHEiEByRPY7B1akMHUe7opGCSWdN3TyFBHgnEfi",
  "key2": "5M22VZW8wQPZViANJLLUgx7GDNA3KurT2YhMb7BLGh12GuiZLoQ7vGW6UHgzhGMHuFx7fk245UsXjHNeeKFeqbc8",
  "key3": "4C3PamfiL2Qyukbxdpg8bCwRBA2jCcKqedo3oCK1RaQd4dsr39F15vfxsufQyxZ4CzSVdiqksfD54tRR4q1przV9",
  "key4": "3Q4k9BVgwM8VHCAWrK8m1hHxwMwnXSQ2SLkXreyYwZVtJTz9DxVchiq5HjTfZRsKRxEDNxt7sZPwKwMp7auZZnjN",
  "key5": "5Ptp9pSXbyopygD5hCihvWruCYk43hTepuywX1zKFXLiH6udbzsezF4rwwngZN3vDJEjt5X7tbEvSgkujRXmWZPo",
  "key6": "4vDj3h3CSxzPyx63Coq4XRFMLDYJosStWvEJiRYB4yjXvDFdcaK24nmXVYF6amAJqMzG29djk7HuVwLdWQiCyv6k",
  "key7": "269YDq42qV2dpechKmg5cnJ9xn4VLf95XhgHPjzMy8YTWSaEGYPSFsY3sLrY6cyDZdpnhN1fidcM6onxrnh3GpCA",
  "key8": "41WgRVcRnAb8SzrsUBVUtC1YtPoEUCHsj1Q56TNjRsd5dRrxwg8Q8X384jdXysueHMaKn4Ts3Zfhda7FwACec499",
  "key9": "3JnPnx3f5fhYMgdiQjFkWwe85SWBx9eXw79m2BJsZtk6VYUnotcFiMhjESTkAojzCBQP6bq7kTXdGUtkUZmk4tRw",
  "key10": "2qBAq6KeXgbQE6czuTvkLFJbfDQQyY8Wj6RwQhUV9KHnoFAJbbYLcPwBvnHrs2x6k3B7KUGKTE7M3rua1zZzR9T1",
  "key11": "sjhRstTJ1jknF6eLmT2M3pAdpmQ4E8L5sUBYKV2JAHU6QrVyPKivowXNSZdi1qknAGYvPjwkHnLgGQJ7TQjQHMx",
  "key12": "4oZFTTq26kucmZpvbs1gK1i6bycHzF2mNggfbuMsth4ZEhr8YDEsBN7QvmDnbao9jpjDSw6p9EReBNBDTtzy9vxg",
  "key13": "2bTW7jQfDqduCfyp8N4om8izBF5p2cD15S2917G7PUGeM4xmySL4QDkw83zCHZHRpKa6v7yzEsEBAfB12xjana1R",
  "key14": "42A8rQUkfsEWFadcHdj5CsvMb7DyRDx5pRkZ2sgWEXVWFb74K7x2z3uhKwaWSmaQp3pr4seTK5TDJcr3WqCK9cFf",
  "key15": "44DmiK2aB3YPDj6WjQWat1FE2MaFGrVtAgRzKdcVpnEAzJ5oM3B4hugKapM14bgDgStzP8yapBgihdGLLV3JpN1L",
  "key16": "3i5j8nt98pKGzwqggMLG6NaAKZrgfmJ8LooyEj7CQjPx2NdFRjqQg9oPxKmLmASrPc2AY2KNuwoqtrVYKg3Uua16",
  "key17": "LKBPmPQTS3xdpnmyFRdJN69TEMfSuAR2HMcJB3Nm8JrotBBRTaHSfmcgYKCzCJEPZnhg7EqC2j76jBjyMznnCue",
  "key18": "3yey9ggNGMUQ8BwNLvodqXxy84qV3e6RNsRAU41oGEUnTGSaQNGunZq3t5h8pw3bK5qTyCk9smAsHXaD7b61YDGY",
  "key19": "2pzW8bK4eSftBfLedm34XurRD3oLMswdY7Cswn31izxK29njnh4KYXmHhLBAVRiBM3ZxSRfNcTfgDiuRghomZNzY",
  "key20": "4fAnAq24WQC9sYk3xoCanaswmqwoPQLQeoLCVpHUqBv9qQLnVgn7EczpQ2BNi8DZaTpRV4THcZb3bk3M3nfvviqS",
  "key21": "267ek7VsAMQGo2i9C4MemZufPz5Exzmz6PZxiMZrnYdGmLgPoDqBGguSqSCisCcpTPPiBDxXNuSSirJCHq1pcJag",
  "key22": "AZUdZkLSifDB5Y4xowwvwCwaCoAmkWt2YBeWhLyQN2JD227X45byMwvquNhamkR2c7fqkBVM3rYACWnjCBjHF3n",
  "key23": "2di4axj6xqNu6c8WBJKiFrRZBjPxwozi7SrpYC2xP8K1U8FMpbW2jD1vkfJPkTPVHVTYb8hrfrWU6p8m1mkqed9h",
  "key24": "kDBWLMCx8MrwfWekcLTMGJm6ZCEiPCwUSckcV5iT7XCpVNZ42dWCaaNsQ1czVWaBUKzAue9WsrTRN3KHcWAYn66",
  "key25": "NEi2tdP66W2BEj9NEisQioz6iKdKatQu9o5jovxQmJxHo1vAqhq8GbPr8A2hAW5oZ1PpVhUGXyvN2XZRHAraRWr",
  "key26": "5xfxdUykUzvws26bDP9gtRbspDXNXjEAfCZp9kmn1YPK5b1RgYMwK8vPm5hsk2qV3JbitixW5iyNFNJBDefyxLCG",
  "key27": "3HEF66LDUi8uvQSE4ht7BxyVHmDBxfMX9LAksbqfXsi7JwDgAZPh19PZ7j2BSE8rRtE8AEXJWwfwHuUh6yeTDW7Z",
  "key28": "2iUVPNzSwdnzsgcwcuan7Y24De7fu5zvBioCSmS2cBLCndc7NZjsb1v49Z4x7jShQ16NUR6weamWCkSKxtzfbTS3",
  "key29": "3zWAxG7iYCoELQeJ7rNCeXcckDbGWPCKv5o8G2ukLjtR5H5uwsEdBAwZ9Rdzr7vcCcvohZzbr13rEihz8cR8UHWL",
  "key30": "tm3JMBWfF18CTkExxU9LM8b5Dvug6UKxHnbtHa3q4g9nEa3RyagLTSySHgACp7NjVH3gTNpm37KnkiTK9MSw4BX",
  "key31": "5s2BGmMNd82ndb9QGwawF6oRNXuHxoy54Q5ZJy4cnFhXqyk24JyhAKGmUSDSnvXJ3AVhhXCdh3eKA2qrBiJ8VBxa",
  "key32": "2e9DCx6MPGGNrM6Y8BJrB2xL7e3dNZGqseLDxQxFWeH7oTZcTRkPcCt1UvuQJT594Ec1cr5cdxtKehxPR1mL8TrP",
  "key33": "2THh9xNaSVsVUwS8AJhm15vRdU4CDLWtqB3EFK8oLwJCWWLxrSYGaixnzygrPQGkmg4dLhhLEV3nA6A3RMpwMkNb",
  "key34": "5SB6z86PG4Dw6attnfLppRmENZ3eJTp7frF3yXHmpidaTJJ5kbFj1KygVYfMWvZs1SwJXELH5r37PZPYHrGsbR2p",
  "key35": "2JhzRYxc8EzCJghUAYZEHFDxRRvnMq2u3stiVkTVCMQ6SR2MBmGeHChusKmmjFEhRxvDpV482HADoYEakSTuxphj",
  "key36": "4Biw71qPwZ4t5VbcGNoFy5YzBkJBaVgHF8qhyYzwALfZq4jC9HqT8KE2HcLLBiPy1HrpEdPWBMYpso3rJwowEvhR",
  "key37": "38wMgDdzeUrMrbDSWP7HJdGTdWGkU2zBbudJpYHNRjbf2vQMSqb6xAjUuHLQEik4NVqU2ncgbb6sHNBnucfHffkL",
  "key38": "3hAZLGP3d4m1nsxbKp8eqkPhzsHjt9cDK68Mx6SM4gTjyPxJbXqki2cpfE3N4VZ8xSQHAccacNrpCSwz9dzVndh4",
  "key39": "3tRK7tYmwA47Vjg8W4gkKaMzD16zNVnwNAbMqRV3cNVrt5MZVHHZa9aa9caiSCE8EqaqWc1HhEqxrrNpF54iQnDX",
  "key40": "3pAQUht2YBZkPcXHwUygNoxdCG1VhV9e2JkGYnTExNzVC2YKS8MY9Zqc3TNAAaxByGWNpS2tXUynz2nu54QzskNj"
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
