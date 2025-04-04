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
    "4H2ghNG7Phnp3ApuGUnvT9YQ7peQQZuioodjb223t93w4ZRnKe9X4M7r9hN1M8cmY6DuKvmAdp3vrmYq3PB2MjQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oudMDksQpoWqMZB2sJBFvSN4qkFTwDoZCNSe686yx8ygR9mLVBRnBhRLEyXvXhUbekFSENrh9exSzPJDZE3ffM9",
  "key1": "62VTSKD1fnHrQbDdgyTM4z7wUDXHuNVd2E4Pozdn2uCbh4VsUuoPPhRFu1ofZquVcbS1pST3DQ7CnUvrxPVY2U2e",
  "key2": "64WVckr9ukVXBo5XrifqHMDxTEsUAm7KK7vpxTQ3wiBebC5qntzczZqQU5ZUJTJBrKmPNVr4hgogExxGKJrmjTH8",
  "key3": "5HGwRfSTq4kHHKyqiSy2zWFK54GtHp43ZUDZN1nmCB18i21eSu8HVHRmVLL7MV6ubsm6yhEfSJ4NFyZfQFmCQp8T",
  "key4": "2xKGVLdP5HhSC7ycr7YfFek8xjqJUZo86rGKmM1QiysEeDR9ngafe8KnGg9M4QgDzstTErj5rVB8wLXYUkYFfk8j",
  "key5": "58EpEeyNg8Ftwu9amrWmHAc2UHjCiQ6rbEJzEy4FCn1zRNyEK67cJGrbhD6GrEUmhzrY6feMd3uH1NmW96ogaaSp",
  "key6": "47NzcJv6hm7obSRZMVZgFT7zfBtgs5HYbuxH6ZvrGv67tCyJa1dqvt8L8dZDwZyjPW14YSuL4aujqCRuxUyY36k8",
  "key7": "5aVZgtemq1jxD8ynvmjXbrBwGDvZCdoj4gW8iqH8qRb7xNSiSbQ1aM7w17xv38ngZntyvshnbkr4Syy8VMd9U2zp",
  "key8": "3FNLQvXR7VrnhwMc4Jy9GEGakaAQKfqfhwk2rJtJAvqBfuj6QvjZWKirSznamCCmv1DESf4knt8wjNKi1udB42hf",
  "key9": "2cJv6MgdaqkDiyxNNE2jHp8AyuB8QgReS6hMfiUFwz1fUEiKn8y9KNY3vdkPMd4EuBpGKgskRKmkGYym3XDBZz2F",
  "key10": "4R7LPndktW58SG2y4sf2PuJHFTn1zE1HtBmGLC8Eoif3tpGC2Qu7Rz4gjWJk3sUbKkFNiyZttYysVX9FqZc945MV",
  "key11": "4P7HbLeJVv1Qxu6vpZMybPHkZMfQf5Q7wHR7VENqec9LgV1sjQywcDvZgW2UxoCWqh2QYkvvM51cUwydXJpPhrPq",
  "key12": "5YNfViQsjJ1gVUCaUXmYpkMKGv9ibdHerC31jHeN9LkByiRpZCWcBzTAVTjwd29iNMxpYCL2svbZnc7giHrn5Y4c",
  "key13": "2LwSazNXa8irSp651MfYtdSCqoa9D6dzVYBPjUju7k2Pu2DgQmuRUabtPrpGrUpGU1d8EkcAuwkxjtfmh3kvCRe2",
  "key14": "3w1HvS6aCVbBbA8Q47x7Zj6RECRutBvwf9eStgjbZG1hQm9PRtZn51qYSpJCNWJgxfsW77LDGFNV2RiG66gRGeyB",
  "key15": "5NESx2F3Qhhds9VYWEk8LsTMdAN9fNVAphnzgNCpEJSX7JUMopg92BUYn5SpmQrEBubGuBU5qGDmptH9ruYdeQqn",
  "key16": "LSXew9u1FrRqAsYWVqxs9ZjMzDdHqo6NyjPo2dctTsWXA3E9YBxd3D9ML4v52aa88tjH7B64PvRYsHC5Yb7CX6p",
  "key17": "mJMVf9x4bw1AsQE98aaA9GzqkUDcdXCHQ26q5r5gJURQ3iWQWHppJKjeJnm4Q6ex6fxUc3F7CJpQqAkH47t21tr",
  "key18": "nR52UmmWxWhNrnwY1sAdp4fqVZydjsPWNPTAK5ZgdPsa997X1baJXkpPgBTFQMH6QNf1HtCMmJwwER6AWe8F4BG",
  "key19": "v44YraeVb3menz8z4PPVQMqyYwfxNdiQd3bNMTVGfQqfyu715baA7dL2o8uEFhRiAHxUeJ4cXL6gZRoRB5zyPXX",
  "key20": "5HW5aJq82w5YXofeLPECCrJsvtn3Cxtz9jfc55PsTcNvNKmS5ojX9zrgDPfqoATjUUFEvnFDQRS1dMtQ7boWMhjL",
  "key21": "5baRbY2hLQyTytCbATdo9x5EpCTwxE98HvQq32YdLd2VfTkkUQWLctXNrr9g8xgBqyDZBzRiE9LG36XNHxCLhDHC",
  "key22": "aG7sw8qXvXdMfqX4PBmr777peUyg8tkJEHtf8u2d2LBGXmv2wfdPtYu8PnE5FPnjdtuNNFd746Wz2CMTo9T36uA",
  "key23": "4ppzFrcDEjPgzpAm155gqC9jEHGQu9ZXg8tCpyzq3uXhhCiFVkGTLar2kacQNuJUZfu9ofLVSKJLwS7oU3LW5Tqc",
  "key24": "3TVUMDGGH7U5FM2vpdPAXC6usFMfFqRekD7azXqcNyFQ64m3hEJHUn5AgGJ6LLHsd9qVMcbKEqjbsDNEKf2dxuDx",
  "key25": "4xdSaCa6DiZc8QEGPcPY1Z1uw4HPkSVjX66SMkL8epgBiu7PEGJsBu4H3vBM6NDJHJxkiPyy8xMt4UEPMM7cwsqx",
  "key26": "23DWfK4RLpCn6pdHXopZ76MEqhSavPNJDNYi2xJ4H5uhu3yUCN5ErGVY6Dw5beky1aHnZUc5rBTJyJooWFa8ro96",
  "key27": "EFdHMYfm8sqFuHWaYTAfWsARkFZsXv4WQLQEuERSKqVqsD6zjFUd9C6L7mnDGtYJRt9dYL6qtVrpWuhR1KWwTuW",
  "key28": "2xvjVnUNfDYADe1uP8rXgAfggj6xiSAFHnm5rbUPAS1qLuGqAQckDu7qJt12x7bopB2yQ7Xv71YGWfoPVpwcAbbN",
  "key29": "5ZMiioaJao7WVuio1a88AvZhWnBpBvHaNbBR45emZRyvP6jnc8TDFhcUUmsNDWoTMMX5swyJzujxP8RrNsegcVBT",
  "key30": "3PtasGM73qz18JM4yZgsHW9Eh74BsgVZJVSCPFn7cq7sdpmts2GWA42oMmRL2Ys5KBwbWFj3yfiowCq4gavAN7Kg",
  "key31": "3c4d4onwdmBgFAvDFD1rGP6JTVsXurT1Po4tdb9SikEUnaRF1Hyub1npGBC8g1quTj5Q68xbmxuE48hPtEeqbA48",
  "key32": "5izqrDFniAQH71RgiAFKwJmnKN1dHU2PiDUQKWo3ecXp83Ft685QD1L7KJGJnQmryV9ETTuZTh2JwpZScnE9kFrC",
  "key33": "4hQMi2fvEubmkeVoJs8RmhbwM927eSk3DREXQSLEfXdAJpvizyp5uAXzi8pautvbZepdmuXRvCYf9AQKpPm66KNG",
  "key34": "4BLf4ighMUAM4HHaqCzDCneqVzwQYdAMYbz5xwX4NUgH1nkwAK34ZpW6LZLuqJyMsosBR1aC9FKGTPmPSoKJ1HuV",
  "key35": "5tuAmL4Vbs4vLYPSEbiBTUHeWEpnKFtZzCmJG8p3cpxt3i7NP8hjjeBm7L1H1GCjLfbhumhpp8hEGQ4ye3wQjyXK"
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
