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
    "tCq1SNVk2boD8sM6RLPWMTGu6jeKvMHWPWnLwhrf38gyt7WLCrsWCHiyk1Hb4F5EZZ7VK1CtJr6bg9LpfynraPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uYNH6QNvct1eVhL5L55AMTVGG4Kd1uTDXBXtgSwCcr65mYaRYjZomw6bLHtD8NsXhhhjgH9mphJGaWZgNTTrsTp",
  "key1": "4tgiJfE8s7VHiAZxWwmBgDJYPGkdGHV6p4RwkRBzkBKL1KHY924bu3sr9EejqzdUa649UtE9BzJyFQwfTebJQXS6",
  "key2": "3NF6BYJq73SknvF4oyxgE5W6GJ38DudV8sDAWaQFEFkqpuyH1YuNZSJP4Ykcm7hnYmmBU2JxW3VJkwPRrocdei5M",
  "key3": "23PFEAUgYVVYLzvxyw5rtRYLNb9WaoogJKweMarjvNQDdoq2DGYKyCpAZfWh9UPpA94QdJX9yjFajFRGvEJeAZcD",
  "key4": "5xkQmTk5zmcKGHrcioANWicFZGGuj9vdhnXVJbJRRpR9UJyYJoezGqD4k1vg333VmBm3my9pSP4mWbxo4MwYALom",
  "key5": "5PVfprqPHKgJan6ZxZhJdeYbt1DfBoWnBozBzYNhKXn8UJSKYf4mcdqhUqAYTWFCGCgfKzJjDk79UBwnfzZqSmuQ",
  "key6": "125HHfVHiotZL7BTdBKLnhGhtBycEq2gRbyBYajKVLGMyKwrLZpyEZznrMCdjU7VaT7s3mZNUuP2E9xqzdmwovf2",
  "key7": "3Rcej5MEdi3w32XhtPYvNSvBvAKmynXAPBPxvi1y5TFAby3Hpyh6EZcSEj3DHFC8depYkfrMr6kK5XngvQRtofW8",
  "key8": "5XS49DWR5vMa3RWgBab53EXmzBDb3CQmQzcJokAuojm3KuYwoviYzTFijbNd9P6WTSnz95UpFy5274n7mTRSgvxG",
  "key9": "4pWLitAtobpekhHgKwYcZtvDQM5auRwSbbM46wEiZZzvrqF1a3fA6uP1vqcpU5gnCqHK4EZqvW6kDwxwdo2GDvQ",
  "key10": "4hS5VaEqpapuPoAnA5Vrk2J4d5ki8FErWznom141LotJKvDY8KyWwXMsopvV9D711oDuCWxuUVd7yuMd37YF3pz4",
  "key11": "34AvHQpNa2pPMxezScHVmyeDy8F6baVwDbShg4gg2ehvszq48wkyGhzM54B2WkWox3wDsFjAzRq2nxVNxDv49KwG",
  "key12": "4YTg7puzQu9PLG5atFg6iPfhreMfkoeCESZRKWbsRHYadB1FyaaEKTYwPUpNBvXFpQsmvZbu8wUt3vfkbqeW4G2b",
  "key13": "4xizkTXFhkkBMKzQRZcCBDJcq7r1VG2GPzpT7aQwWg8x8ZdroEpcSktyr3UBQmtcUjVN4Z75LugeqJrTo7UC2rSu",
  "key14": "3vDip3F6qaaJxYj9bBAo57Fg8JEx9K49GNqSdGZLSMYufGJNF8pqnedQJbL9smGudzRnjGJeDRXxvSmjh4K1yLWu",
  "key15": "srg3RAL6ieE8WVYrB1ZedkuAga3wKT12tPDxYaHcs5KbCgu7WW4e1W379VoUrZnNwMURRXuWJ3r94jpSVPG4JM6",
  "key16": "5kwMhnfHxmPt8oa7Cj92ze9dDcJWRWgmDYu9QEjUFPQuw9UYAhuS92qWxN8vYPeLJv16fH5JUgpxV9JfxqyBY7YM",
  "key17": "98QrPjK9bz2HtoecCMgtC4BN6RhawnYAHiMYtcFukkuJ1YDoCihh2m2f54dAspD6MBAS3T4r9iycK2C5MYcYuQB",
  "key18": "55214XTh4fGhJpbLn5jgXaz7NySCUtkiN5tGCtwU6WobMQPEFgT3PXEcsMGm9wvatf4DrMeg61ABSNditfU5r8Rr",
  "key19": "h2wTwx8g1BJQMtv9AdZQmu4NmgLmspwVwQ5AncY1kKxoJtdsvMiYiWxuiNes3mHoFs7Mfu7tA6fqRugvZ14zXih",
  "key20": "2RgpX9iyvQv9z71sYUjQNfYP5ngwWKjh2KsEa4WLnueUwUbWADjoiVPezHy29wPXDTFozDbQbUg62J8pdbbbnbYN",
  "key21": "2khFaLeAukRbjtBnbW2HaFQwALSBa42dK6XPJJM2Uo453pD4XKpMWvKZmCMQcAGKXfr2DueKkLDxWqudgNGYifga",
  "key22": "3wNntUmbAuC1LyrC5sgFSGJJ143tDjQVqRJ5mKypk6ur7Hvh4YfFX6gLpxoBbfyu4uBLgHe6mDTfE1S77awU3XfU",
  "key23": "3YRrnKunUvxm5VR2XNM9ts15ccrZCrtqQgnuviQq2tZ1aFKwHRHm4bRm9NkccooRUaLCnfF6h8mDND8DdJetU2fX",
  "key24": "5Lc9ptYybVLvRoN5Qa7AsyPWtP497VgeCP4Z4pP2eCoDY6iHsHdyihhxnYspLMRz2kkSrp5Q9vMPRCnbTp3Cfm6",
  "key25": "3UXBESrdmrkA2PE7g4an2NUsRmrAA5tqCtK1oG4iMKzD4PyikgDNXgvHW4XVpHnXXjh2DtQ5QznbcwLXtYuUBZvB",
  "key26": "2BinXR14oeT2rfpmfnTMp9h77JXKEKLZShB87Fw8fDSNL8d92CxtqH35pXGA6626ah7BDvBh28BfvfCFrDqPJKjs",
  "key27": "2Kcpv8DkuHPwWkbudVbn1ooo3VTnWJoHA54tCwA5UEDAR7sy2HMPPVvA2L4yQCvtJAop6ZVP15EY3qjAM8nwe7av",
  "key28": "2nQwRFjvyWY1dt3h3pjfY62VFHKoJw38s9s7KHRaqznH17y5Yq8Y3TgHR2ErrHojnHqFGAWF1dCDWH6925VbxZER",
  "key29": "3mWS47WMMD1r4iqGcjwupQh3UX4qh1wwDrigDGpPdLbCZJfFYHSHgJA9kjV1moRh6v8VPt9bwUrK6ihMeZeyxuD6",
  "key30": "4fqbx9igBG3Cm7cjA9SMfEMEvnUQ7sbC6BB8TdA5BN91pbQYMXh3eZMUry7FJL99kq6P7BujJ3gsmME9QSNEahJE",
  "key31": "tZ9K8tZa519wwuQfsFKJmebZN7FDpeMZxPefr4rvYtZCBZUW6NG9z2LBG8zpAncFxNsVvwW8F6P7KFAzQTwJjZ4",
  "key32": "4xx2Zn4uR6HghEJy6Zxo6ooYFA9a8SG7EtXRhckvMzoMczgPEiGoaTWwdvLoPosmqisuFasvCP4YBGotfsYCbmcy",
  "key33": "5DTamBcJadatkyx3ospTXAe9G2r57rGe8VdU5rwUTqLJzi4JUfgQE3F3a3TbwWQE3CyNyDHgYtzbmDEWeBx9phVg",
  "key34": "5NuzuVYu24ffR7JfTxPFcKpFEFhswfdJAHXHgsWGB3M3n95d5K9mjWRZz7VYtT4st94wFqeoXQ9EoY7FxNwepS4H",
  "key35": "3jWtpyFEP7GhtZ68wg8LqaTfdAaBbNwVUTEVYYR4rcyyg9qNNtdxyvxrDZo3gm54dzgtJZY98SU8f8wiijDcoz2d",
  "key36": "3trATVbei5tdvso2xsGMCudMKZvJ4Jbmf5s7oTqZiXqAjKrcY69oYXbb9XW1qkGoUuMgPuxLYEESbTVAuLKCncro",
  "key37": "x9rqMkPgyKzYhfYYyPYNekcwEPYVcU3hfzRKv4WgCGE9bog7ZCwkudKjRJPVvdxE6ohHP1FFqZKV9wa9Kfj6Ftg",
  "key38": "aGPffPT3AsnhAHPzuwo9qo9UEHKVS2Ufnvr9pmsXjPR9fHhwuFeN8sgJR9d3X5URaFAHYa57mR5SZDEx6Upb1if",
  "key39": "4N1TZ2EqgYycB7ZzvCkaUqiKSPkNnzeuRioD1Z4PmSXroC4asvL7i1z5QMTu9huge5wb5uyqTWeRkVA9N5rmaydx"
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
