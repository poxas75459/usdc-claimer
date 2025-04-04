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
    "25isFrVj6u7FXA3Ge1fWcjK42x1Wu2B9XVWSP72kJsTn2LeCbEgqGCFqaqkgLBACL1NiiFtDP9JhbaNAxDNRrGF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T76NsJ1qnMRPNieUUWW32Lk3BaYqDh1UhMiEJJqRarush7iu1BRh5vv8fbPProTqmGNyjGg1PsxsmmAtTDQpwGP",
  "key1": "4tFazbRnBDNUGcHDACrVf3fi5t7qJKnKtSsvTeEe15cfqpn9v1ZLDTkqpJy8j4GoQsC2hXJyJ4xpLevdb3dd61Vw",
  "key2": "5sN4nM6phiwxe2YMNrqUrmJ1THm4ushRfjA44QqXkYCzSPKH3ctSrvPojLZAjo41zjhhKdq4Yb2ARFxS9DbA4Vc9",
  "key3": "5yTSbuFbf6CowfnzzHZK2LXELArV6AGeyq8M8D9JzRjc1A78xuWxWp23wZnrvt2LrbhRtYaK1ytGBFS3ncKvyiKL",
  "key4": "5GLAqxE8AnYAFPyzXsKCxdzz6j4ANffvbmNVRza7KpzCwFx8q7BbjotPEhfQfFX5gqSrfJp2HhiQbfGoFD1r6aom",
  "key5": "4FT8WRETiqC9XdShmXBvM6V62q1KfSAqACw7xcG83NMTu4NSAbkaiLhU9a44D45tKsBZW12jMdrtgERD3NTgyw4m",
  "key6": "4fr9gj4N2henkhex3SdvQTTeeVsWyEtWKNomfDgzKKz4bPwRhAjFSuud15bBHWYCRzPZyER6hfeZGWABrkBz2dvq",
  "key7": "SnJVTubWjjkjXWMXP7B1ff6PJHMXzJLaYJid7K3ED9deiJ5YaxJq54zS8EghLTMo3256Nv2hB8FDb5tVS5YwDvg",
  "key8": "3wFMV4ipApoEPeFBHuxyCDRZRnYorc7sVpq9arc8fdKUStzyp4PkxZpCFE9CSn2TR8YjNV2H33Zv5fbsgz3iyUAU",
  "key9": "3LUcVepXtGLmTr1q9GbWeG5VWjSGBRRT8SoT7NG6jNHMtjUjbdYVJQZu8RATuDS8zCbbRv943wV864ear6HEkGSL",
  "key10": "3vFbDTMsLjK2srG8wsnK7T1W442CBe4uUQuHSq3mHS1aYLM3JpBEeF5gh8xzMP4y8ebtWu6iUiYDfZBfwELZetT6",
  "key11": "3mDWNt7Jj53GFZxxgNuiLxfUg5bVvhr4XPHKGWY755ezSaRt55pqmXk14rRBKMKa3xmL6jyoiDMHSiyCzMjHC9yZ",
  "key12": "2ETTPVNPT5y6QtreESEnbAGcha9kzr3LgiFkye774VjAaNdYfTG2vv7Az74TKXMrt4g7hsh24hxCZzcjixWwrTPM",
  "key13": "4PoaBNrqqBNctZ9sRVifkPNaTWfFmXCMDpbmh2YyTLjzk6139H56ds6DZ35YAPWJU6wdGDbmhc9eXn7Yr4WmebpP",
  "key14": "4KrseNggYPcfWKS4yp5cypNKyaV5TA8uFyogH77YqBQdur2DSpVsB25nPijiVEodM6NXcRtQWkKPd2La16zjhwyc",
  "key15": "4pmabHakcyF1A3kJJT7ZH4nosDcTNo8KvtmQtYvPjs4Tyz8QRibpNuDctLu7CgrnjtDGkGYXKnMavx68Bbxarup8",
  "key16": "4zCnpxBKeyLcseuhodbyoMqs873xe4g5BSPJdXejxcC7LZQyXSxctYjMMFuPortCzwUmEjsWWbxNR1mGsqbCtg5t",
  "key17": "5z3icR3LiBEph8qi2wmwjwxAJFotedT1ANMsZwiMYH5ygUthmNmLmXs9b8rcjLT2DkWUPr8iftJ2muqEJ8dzAipe",
  "key18": "41bnFGhjY3LX8Dn6FhrB4ok98xUutPuWzNepcjbtJmHVMCsQxD6nUfTBit4EEqx4L9HwtzsYBwcKaZoNNR2jEtZb",
  "key19": "5X5BhoguaWAFyzVyLEkyTvN6Ej535MC59euV9fz93SSCL9mPGbTwJ9kVVb2ojKN4SVpJLVq4YhcVGDMUSMKimy5d",
  "key20": "z4SLjcjmx6bEpB99AQd8hNqv64tmuePdWSbZvtdUK6aMpa7u4or59dBnBbu732i1QFxHYWSbHoHffQpHymrfdBJ",
  "key21": "4ZSqNqr2kqyCWEYrtvJAuLwoNh35Csuu86uUzPUXixv8g9DY2bTGJ7h3RVELLkWWKinjZpeWEd6vW1751sfTBh7d",
  "key22": "4B3LsRqqoba2gCkfWHusNxkaTV4eLPbDaXzZuqMVDkpGL9yXKt3SW59TXAm4oGq9KnXrXXhUWa33PwV3fzY9cwJB",
  "key23": "aKWsXgLRf2PPivxX5gdTSieWPVdDtiuYyPaNPcDmMyWd7rkHpvjE6oAGvSrsE6sq25MUN6eRcUoweEv1rypAVs5",
  "key24": "5FcMq2DGXHhY8NEQ53Ehm2sF5THMWTgEcJPH16EkRmR8FuNNxdrqQQdwGea9nLNGf6AvNu6TRYex9uWZ3dd31E4P",
  "key25": "xhNcahfj4cihNTYxfZMg5BbxBSG2K9QwWoCU4TxpS6h5vx58yr2WHruxH1AscL9n1rWTikQidektNnLKkA125pu",
  "key26": "obhYyJyZa8uTe2VA9GbHNSVbFPDNS8kU1Ua5xapotGstf4bejgt6rfVL3jRTb37MPAAsGXzkDNiRBJkrjFrEHFu",
  "key27": "3pvCSbC6tUxBSmD1QznRrPJcJxb2nYJBbuyvRwaZRK8yo64s7b7iKesk54YiYu9kpUm1zbVC9iGqtKU3qbAmY2qh",
  "key28": "2DW6qtbz2vDPwuAMUcRHMXuYc8yePUkctgnpxymHTu2Y8ztZk9TpiUFnDLySg6wormEP4komQ9mqgD9eSky9KRgs",
  "key29": "KMJSBnjePsnTjcLswg18rGww7NKdWxGm6SvZxDPoL3WxzvLVMqfyg4LbaFzR3mZcg7wK87N7mp1yYb3azaCmsCN",
  "key30": "4QoNdGHaw8n5GRfYbPJDJmKWhxzinJgEH9CCU6LSEYBSfF8mybtkyHaMh4qSY2CvSe2nW667Sx1om1tLwyVxeWuo",
  "key31": "4n7CTBMiYG1bLvvYAYMribSCdWeMEo2wDGEmNSwwrNPAWZYRsssogkyaVRDmtVRJuTZuy5v9GNfcxz8FJY7u33Yi",
  "key32": "3YQiUUkg5SPWnrS72cGmauG59iKPxJzVv6uhVsAMEaJut7xZU5FpVofFZrxzQ8oCfHoVkkNgQkDvV1F1Jm3ophLK",
  "key33": "3h2HjX5DPZeWxQCNCFR6XncHfXwfFzF5uUpWa5Bkjt9oVbesrmuWR2AdBxKsDbE9vrGYxQzP7StstexieRsxtuPH",
  "key34": "5e1zPtj2gHXpKwFN6kdEz7p3DgeuCaXDmFiSBTHw4TaYCfMFPK7rVJhWGLJdTofgeD5RfY14htEvLJiurAg4yZLc",
  "key35": "3nm4GjfcfeKw9hK8sUucBcqjBkeCLQXeCRzZ8tju9R4o2EnxNL2AYUBpoGSzseaBVp9QfzLiYy77czKCeJLQb55i"
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
