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
    "2rJcqzMBYZgMee9sJ7j7y7tn3TsMcdyXawf65F2Xc7Vo3K4XBcyZvc42RFqTHHGkfCfKP8fT1JdyYdJLorFfQtTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YGEyoU2EjgxLvuPpZ6UQo4K35ciRBWyGZWULeqWmw4BqGei4XcC9yHUjYrQFknjWC2e4BPPeq3tW8utJ6yVwbhW",
  "key1": "4h4np1VfeZyL9sDetp5r8gwPbVsKVNACs71nS6i8EifvWZCfEdY9HMHUVGyNCPf1PF3QXYi2oxTDgH45bH6Cig4x",
  "key2": "NwSZJ3y7edLXodGXmf9ZQTaQPj9MCAe1EZxqUzcymxEB5R2hRHKY8MriEDoXtVCJN4qHujvBiXR6gUYfeoHQkzu",
  "key3": "5oc3rG9qxva4eJ6JngHP945ZNLgNouert9TwvsF9Cgso1zz3EE9CTcqLntNHo6GJQhGC4PaAJDn27e5xtYueEXgr",
  "key4": "33KRN3RgFmn7HbAp9REerXAq3nfb6hBkimXAoTzbd6Ftafp75RgRnHFCQsoPGXK7Ws2ywVXAonPCAQBBvVnNxFCi",
  "key5": "z7Qd7DNi8BgNWk35k4fZFkety1cMK51QsiFd56tCgC8F8JYii3GjYr4SoJs5d1KBsoBSSsMB2VKwdZgYk12ccmU",
  "key6": "R2dwSiYov5mNpZpPx8gbpv331X6UYKqZVDCnbLPT2qCmCZuQnDmHqvbRaxwyGxWffArfL3rk4m6ghir8HWUPeNz",
  "key7": "89NVhCRdKVTA9CcSHcuxhKZ2JcbgVkgWumUMLrhuadPjmW5fYo3A9wrSj3FeyxrYQVoLAcUpvXACPv3ACVzfmtp",
  "key8": "5X4TYUEX8DNUAbqinasaThqrw4pSS6jiiMwT8GoMoZioDZerUFYhUdp7Fhg19PS67DFGnotLTt5kCupqoBScuyH6",
  "key9": "3cP3S7ChEsRz4KULY3pgNSqTzMWvSAiPKiEcPhfzT2b3DagVeLiAVakrnczoDaSrWqDUtvkpbW7juKapSaajXgVQ",
  "key10": "2mY533sXe3XrVCNHAzK27ULaDnpf5xyGeiDz5zTacq538xheBgUR6cDyR3X3kKetnev7LLKPBK4ZictPCK9ZVAeN",
  "key11": "3xoPtLn6KqQtHg42bix9oxSy4BaMZtHkJ79QrxNetHVAcKt4sYp7RKPsL6i8RA2FTBAMJxgmKFtXyYTUSsFo511F",
  "key12": "5PX5BsZzE7dmNtwwYGek8BaMmsGSbuBrsro8wtLXKdd8VsQ5WPMcGkta4fYf3Vk3yNhJtfeAtNxFRhWLQF7v1c5J",
  "key13": "2nxY134v9drBsKEEyZKZs7QN1FcA6EZd6mST8VmPZZ1FC5yxU9sgz1E8E7k2U5UGnpnfoSmuMhSBRYaJuDoJu2D7",
  "key14": "4JLjbhd6DiXhKgKhvMGCSjWz7FdnVzptavWbX7ytaeWGTzHcyetQg42DbKfwPWN8vasx3LLybLeES9QtAF4Au4PD",
  "key15": "3Hj1yMJtU14LDrEq5ZRVnm6KNnYbtdvx3mixZZKwmLAYmg3MHzS5PwnGfBum1NVQhJ72XyrhgbQbMW1FTpWb9h6R",
  "key16": "573yPLYfk27UNDGCWa6kAx87GTmitPe1Nix11yR27sj9rXya6DGytxRoHDH6AZ8rpskYWTEtLGowyZhXdYBuZ1H5",
  "key17": "31ZnszXmeyj23hQJZXbeVTgtAEjXwbVDTnExy7SuGwX6Rbh7cTKwNUNasGiUm8kt599scy8EMRbMuhu12emXPqdT",
  "key18": "AdfSNUxW1kucMUhquwfoxB4XpfwuZfjLwbVZvWtzhCYCf46HhXHnMmnaa3yUmFqY7nZVpAwprcen3uPSQDXDbpy",
  "key19": "KKs87FMZwdkSd7XghprH4cMNM1KLUSiBoGb5GMPU2NLN5gXeBau1RLyAtx3neuanjJcc6eojppzhhBhWDNS4LM8",
  "key20": "2QMyqw4CpSnfBMEj6mHMzGTm1y51BqzSeNecPGpdSnAz8aTbDkiQRuts7rxu4ZxFmJiQYQ2nApGFLgKR3nbQteq4",
  "key21": "5NN9uGMYNiYYTNj6bo9mLM2aAho46Vv4U9S7w7Co3piB4L3mJRf8FrKX4ygsKnyGnuHCTssmAg5qSyxacQzXikxP",
  "key22": "2GxmYeeEB2nzemrhp1E8w1dS6P1bV41BRtZ4myLjqKjKJHBDRXQosRtMGz5ZFNDnMpHgTiSAFBiMeDmEbNrR7AJU",
  "key23": "2hhFuitmrGE1ipFG18jmiZEzRWLL9xFUYjsy5VEULfVyyHSXBSnLMoYVM9vE5WFzDXRXbxLtYYJ18Asfxo473MSK",
  "key24": "2LMVjCL9rdHxwKUZaMCV9JzHKA9DCrCfabj43pHcRPYp6NZMj6iqqZ199dSaztQ9WJBrgKiekCrWL9qkDaRi8oQU",
  "key25": "56uF1VkCkGLBbx9jyiF9Hc7LJUhNLLjcqYacnTja5AcMYj4Xk9VqLUaK2neDP3rgJKSXaDt6gD24wECZmw7V5x6h",
  "key26": "5c6uzNuekZZryipYWaeMzwDTTcWQ4uUGLkjduFNyEEoxTVa6Bv2qH7XrcxbxcBK8NEkz5i1qMmTnJzi9iYh1HPo1",
  "key27": "2jnRVDmM4JZiw89ASrzDUF4YEjizU6rKD1sTrGb7u8qXbukSqNkBeCZkpt45T8zkNe7dM1c75YPgVSNUctRV2Njq",
  "key28": "3WRngEA2i143X63RRwiXGT7m2cHH1jtnwmcCv76MpHmngmvPZksiraShS8Zex2UEtMUNP234kRHonQARXBNd9bjj",
  "key29": "3cZw3Pd7v6mk2pb6szB21TkaqcnNptzuDgDdXz6qbdesxUwq22CtL2QhtYkXrzWL2cKEb6snTafFq9ZQCH56JdHU",
  "key30": "4EaHTXE64Rbdiei8mwuhEvyHtj9CPzYeBH5G5GfbhMV5ruiGDEpGNPZfd28rhBDZAmwMxcn3uatwGJTBZ2MCteJN",
  "key31": "33d5KjRZL5CntGSKkrkqgLQpVEVxmS52phE8UuNZAHRN544Poae7NWCLbLAth2SxpYmye3PysvKAQTfgwzZBW1YW",
  "key32": "3bQnGKRiUjYrdA4Q6xn3qMVGUyUNeKeddfF1AoJsRXdTFCMtJHzuVvPT4Ky2aMVKzpWGuen4w6juJA7BEKzceKEg",
  "key33": "2PCqM6nwQgBdyY3WB41xyL8QL7XVhmvDWAxaibgaEqvXBMAe1zHpLde1jLzQmG6vhiA5V6Cipxj7xsyYH2BmeQ5L",
  "key34": "vE9cFcsg274izd4rJ9xchkoBEULLp3fteMrqkLFR1hv2dTKHP9joMLmmnzHV3U6gaLBgPeYGyULR9C3x2WbEEwS",
  "key35": "f9KtHANgt3fuKQGWHCtNeVreFnsKyvdUnwYCxGeYi6wJv7r7WHBMeti2r5WkSzvFiJUo5Dsy5b7NNJzGMbtcgrV",
  "key36": "4NnYieexKSam9tvGMAS1y1TQU5yieWAMAVwuGiV9MvpqoS72D4FzQkFQcTfqysAT43gYcgvkyfSXiVnTL6nkKv34",
  "key37": "SwM6U2Dz1sbXzdL3TLbSHrkrckXUQWUtCXfZWvZfHrUs5odcqV7fXV1G3552w1rqxLTATksHmKf8jaEvzYBcdeu",
  "key38": "LPfA72gW62D7FSvzhJKRugk1ZGwGNbbW124ae5ZrES1hZAXA7oajFEmLQjrhcqdACkcvC4TKVtTrk494P8o9Jup",
  "key39": "5gkRczFdFKWnXBDaBmKAnUG6aiCFKQzHJZE8aZDLy4qTte64sgt1dFSy4gVDznMevbBGCUj1Wep1UY21fncD4LVc",
  "key40": "4yrjxQVAA1qax5nNs5ekLQWeTe4XXfXFuRCkjQz37zGuQNbJgQRRvmQKnaidjkqR8M5uSCAR9R7z1sj72j3rJw1x",
  "key41": "5ofXV3jv63Ykf2bYz7zBaAw2e8qQkF8Doy4wEjCa55xpzC4eFp6RBsnPnSszybwcNsxxzwwMPy1yuNs3TvBr5373",
  "key42": "5EtTJNUvuJ9j8okB6s2WPhPAin6m9bHrZJwgvg1e2CkPR9CX18wH1sRtmeWbpVKtGAYpqbiZKSFbFJRC2G75boqw",
  "key43": "3AcJ4GuXVSGm7AoyZwG5at548byDkXKJoG5HaLaJs4RP1ykgFu8KnbE3MoiqhjNap7ax3FhNJysQXshpmiGUPGrC"
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
