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
    "R8db4Ewp8zDf3M24KWQgwdy8DKQLc7HVTAfF9yN85nGp1BXZVfRb1Dk1DyAvBoATvmL3WeBKgt1Vne4Ub8uGnQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yyXQha6iK1Rjm2QUqpAGY857dMPQCfBHkkzqXja57fof9ENQ3M6sns1iKkkYMmV8BdgsLnmbczUSJu7ajHfqdxv",
  "key1": "43ZH47Le3g4FzpYwWhxde2mGjnV2GLtCRKhVeQ3SFAD3pvC4fugRzsKDNbS5rSbdJw7L1bHQZJSFBBionEiSg4KJ",
  "key2": "3GRiqUx2HQmVeZad2FDJbbq6LT5UXzKfrMp7s7DvNx2q2L8pMTiB6nMQmdqrEXLJMqWR4yfuYA6jvf7Vrrs3A8ij",
  "key3": "56RmVDpPTu5oS1KTnFS18AcqH8vXDoey7fPFjwYruz4gW1AyTGJvsKVocZsRsogroFsCVNdUPUbktWDr9ovWB8if",
  "key4": "4iHTvU9X37DXr2Sauex2k5ryk5WaZACHi5q8Z1wCsmX1LByDMewFQ7Zg7iAfg3K4VHULMZyjE9soc4YZPXK2V3wF",
  "key5": "4cHJEcdAopPbMTGYL2DnSAYW4CbQSwdah98TBvidVbKvcTEXof7hjgucxRMqtoxUf3euVC6hadE7UMVD5rDZ6dPK",
  "key6": "4t5SMX33Rod8hbUJbc4srs2PYrLTFCQ8dFQDRNsq3d3xhZU434RSWEG2tGvjQxf9isw7twXmRUug8nDdJcXvXhE3",
  "key7": "4kcWY2XXfkSQGm7VUF3drxXWPKCEuUay6b1xo2yWoZNJwJQXaboyzQvuQ95fMJzFSpUaUXJmLABQLAtCygbZd9hD",
  "key8": "4MRkizCmdKtUgUWLgV4nHnVkW4tU64cwGxFj5jX9pvbW4i4vZyUB5raVerLaMvKU4XbhtzjRWx84Jvwm2sS3UhK4",
  "key9": "3Dn5jRcSH5CBdpVBLPozkiPPDFJuLivFDmZSL7ThedwieXq7uA3HEtJEaY9MnrYS6btjU28bLv88rLpwSCSy6B6Q",
  "key10": "2LuZzBNrsFS9LkLvJbPc5NjG8jZpJHhHqgC7NNAHmAm5QDZJdSBp1s4QxgKinHhz7RNbovS4FowA185CfUHRae9j",
  "key11": "2fVoavSYBzE9kyVxQXP11y2aLUet6zxXKAL6W7nMJqtGFAbjVEJTdntL7UdFMqCA7hZm2jeuUQsZSrLfDXn2e2yb",
  "key12": "3BwAvw8oseZYuFAnRvorgYEmo5eAoszard8dya9dW2KiyACXKR1rmA6WY3MYJM3szX97Kov82RgLFyPvd7GABgkk",
  "key13": "44vtCtM1CoHuoxucycjLNDHSH1Sne3fz5ofBh7yfDyyxeL8d9GgsP1NDpxo1RiMyC5qBKaBhjm7BxSPuDDdkM9wC",
  "key14": "3rtreekYUeTCBUnicZwf4T6dNmHxWYX5kyZCzg9oJGhwHsJ4oBxVhWdaFtJZpyvKBCtiqYSRgnkMPvHcx58PZDKz",
  "key15": "3bHmjyLUeeSyZSbaS4WGvuxDJADqwtFGpMCmVPorUeR7Urc3qwktzg5hbfD24K6Bzyr3vFFp8EYTeuNw8B5PoSfY",
  "key16": "5sEUazoAkBd5w7H6XJjbjRyzk2FmCVTXPKAKUNXaqrk6fnEA5hKas2gc6bYMdhJK29MbKdVPbzCHLzt759C69tDX",
  "key17": "2y7pByjpcM8CKEqrP1BCwKoDMAUjJSvCYqLrmfs26aTCdYSsygRwLkwQ5bgpVuTVGFV5urG5wCwgQhXQUFGRhmjY",
  "key18": "2RA2CQLLQW1k8tyLZbhJ1HRJnmpdJPoCF2qH261eB9U6XTYA1xYww3LHEhhhChj1pYtCFxKofsr1G3CJZeUFCb3i",
  "key19": "5m3J9iPXggPErqvuHeKjCEgDSHDnj1XbwtpNPbyYh1WuXv25G9UhZCE4ZK3765b3bbN6k6qiPMqLSwdumhBpHuAD",
  "key20": "24QmQZFwjTJ7pawVuZKBiF5YLQSKzjBNCnzSJ8S8stsaeDQt66RXii4aSJsj68yWaFtgLsaZKjdMdjhhc2At4Bhg",
  "key21": "2GM2U51HtYVb1g66ppgekUYhbs4okV4N4s3SdUxRX7KgY3XAeQDmmgYS89UEWrymBzo1tpWARUvr5BZ1gsLFSu5r",
  "key22": "2tkXz1MyEZn57aN6vDXej9VpPmTLjkJzKgStuCZmYK7MC29WfhvBzfAUAbjJcQyXnJjQxdxbCWTwhVX5GXwb6cDV",
  "key23": "26P6Gp1P2XjaZbHYUCVyqAyvhQ9Xn6jsn73uDMWsgccFFzjQcw2ZEmYp5XycCecRz8w6dbz9LnLHEcxg2pjr1dRB",
  "key24": "2QUd7dxbHVLUHa2Y1Gtra4hFLtbRxfhTkfsY4jdyALhgJKPLYfwCabJYjZ8ePqxRcekMuK5iuY6dF8SzWCHjwCAu",
  "key25": "bCWzmh88TYWUSpGa9qS5Fmde2QNYk3ok33ZFE3zMjzv2wvgyUcJf73nwDEfskTLrnhynEPkFLfksG1Q1M8RrVrZ",
  "key26": "45Sx9QAHbhf9Wws91Bp9g9AQ2VF7TjzGbrvKTdbBPmpVpDwK2MLYBbfdffxAZ1Eofq4s9JkasXpDXmGEU8km3uWm",
  "key27": "3t3PzyGpj1oUBqrEvUJoU5pzmqMnrdxppQ5fwXnwCnaqntBhoLZNFYbVHBi6H5f6GfsQGQ6ENQyPTr9epSBjL1iZ",
  "key28": "2naLUig1k5UzCEZDTAb8FbBEno43uzG2mY5m4bPf1K2QtUuddLYQfcPUzQ5YRDwy8PzTgeKDd1mwrd5HtdKXWWAg",
  "key29": "22fHkS2eaKQKdPdLooVSNNyDzU6uDPuKky5rzZJDEpXkoJPnJmaygpqafPk5PfyweR4fs8fDfPyqb4JGLPgK2Dev",
  "key30": "4fpE9updCq2a3YgGy2P2CizyQGH5iuxYigyexzyygNrqLDkPUK7w6ocmqFGaRKzPbYsz49ZDVvFJ57Kd1JaxFdG3",
  "key31": "4PFNNspA5SguJmbNg3c1S139edAR8es8sQaWpcKtN5y9pUjuPVmEPjZTg9TZezEo84rA1jjUdcJeYFP8nsriqKgh",
  "key32": "2WDZXxYv1LWoEkD4S8ZmqmmnKXBez7xuDnNENLKTV3BmBKPW9JfVyR4j4LxCM1rPV5Y4MQQQ3kSMbrATERaWooSH",
  "key33": "2VrgLsXitMhGKHCRk1PcEgxc7QvWtNdtKhWywqxDrUZ2XcoGPtWCGFZpJLSdcQcvZqrdQHf53wA6MaS5i2tfDYFj",
  "key34": "3mF3ry9XSVJdRhoEMMMWYKG9fusiZ162QjkzdyfXB94jN8PJuvyvC5rx4DUSCSviyNpE9U4CvTj4UKvvyGGR3Nh5",
  "key35": "615rrNKiHJUAzNk9Uu4X74AC8Q77MqkSwbr9PvYN4F8CutXsPSVSqoh55pWgd5GX1P89iuSJj2qDGarRgwJXR3nZ",
  "key36": "2WKLzJqvztcWpezKNQnJHJdx5FujHSeJXywV46qoeyt8VMchZSfMiAX1ZsorpftwBMMLhWPtbDf18sbGaqCQ8s8p",
  "key37": "2GvMz8MB1AhXm2eXVKFzqtg9EN54EgdjP9P8TG7bjo1n9Skk6h7SM3hUZaF21vk9BFEpmxiqCcwDu28xRV823M2P",
  "key38": "66fmtzZCcRoFA2RgtRQuVjjEGzM4cN3eCT76Ubdw3x8w4JG6HHBBnW2asZ1Mi4xjemHAc24jDGXGBPdspZCcsyAa",
  "key39": "gt2yUsnDgeaxXNgn2pkKs6HjD5oxbUp8VGXsgtVxHYaYy4MNXzEwGmbDvMT88JM1ZwfSa43jF3zt3f4v9WwsbmM",
  "key40": "3qw1zW6cuP3RyakP4tN2eDVY3Qb2LdBwi5kB8sNQCesj21hUt1rtPMNj1EiFqyD9uhGPWaPWQ8JBqnyXZCqwoPbg",
  "key41": "5NmHuP3NvthXii23aa2pbZisZerMRhThsVkeHT8cprC8FEhGYqe7MHryDhvxEkjBJw7bG23vJEaZXZfyTsyDBw3o",
  "key42": "1wd3qS62B6qr5T4TrePLYfrczJsiai5zZEYzZte5psCsYE2Nb34yUdWTjWMAzBb63y8Gg94PUsV45PKJSPZayJ2",
  "key43": "4MEr6MkDjEHuXNQkmiu3vQhJeEvh7K68Q6DDWpen7ehj1E8mMcwY4izPLFFbAaWjjsiRhr3jUon7tLkxKS5TZsit",
  "key44": "33VwHhvTL53D4z4LRtiBRjG68uQwwLZh6Ccrf8SbdBX5YVMW9KFcyVLW279tUzFAYpU6JyY9Bhw76J14xZWgmf7Z",
  "key45": "5Y5YXB1MkJv8YA9eE1TTLd5ZQYTwAPKHNktsxyfMSwn8MoRqxM88baJqkxgJaXdenyJvw2B6a9HrwU3TcUHQraJi"
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
