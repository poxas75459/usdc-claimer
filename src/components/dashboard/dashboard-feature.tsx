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
    "3HaC9ksYG5dDh8t9sASsmge2Wc3eUApnp6rwDnBw96WwnLLaNUU6xtx8qoDt849cXTbGMTaEeiMkYZdPo2wiTGQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g2GbQXMs7J84pdw8EQgvFeaZwCyevwNCH9r1T849iffbuj6bc6eHAKLbLyAR1zNkbzKqybASX61FrFwqTCpF1rY",
  "key1": "5LJjh8tSU5j9FY7FcucaYHqQwALnybdSazTwvh7LiMV9eUHsQhByUgtmTShqUdEN6YubQBxYPgGWYEwqpALQ9zYx",
  "key2": "4raX94Sw5PyHDhw4tDxcrGoARpJYFw2GGFBbyKwX9MqhiDhhCoHKcjncwJc1BAV9tDjvHWHSKgmx8MR36E6NU64",
  "key3": "GVy9c6k4bJGhRk7k4uRWwUReKnNcz7qDJZPiHzgchnbJDEe7NDS4q1KPGiSFWC55LfVtjMy3DXaVMEK3pBXtBej",
  "key4": "AfwTfsHwjiKJm8YeG6GDE8ZGXTQUcMBNQsXf9Lz5iRSCHPrbPCb3YPELisZDiNZ34eSdDtqCQp5BKM4cAkugPNg",
  "key5": "5yQvbSj8cGorMaXcx28rwmPW9aie98wEsAJwYEqEEJxcbnEYJhPWNsfJDjSVcHryorjtp4ovC7ze58vucrKTs8Ut",
  "key6": "2UHKN611kBfK7XhvFG5GesqaSwoXrNF9BYHA3KuMVx84RViynxcdQXkVAwGjYdPNb6iPKhFuERrxv7wkSMCfhkT8",
  "key7": "2Jy8Y2W2WCz7v5zc4hodvcYxkJwm6aeGHYFRsyTvUVWokEErigAgXcJ2pRX7jwrm9MfRVAcMAmErj3sgcr4YWUeR",
  "key8": "4m7UXRmarwKHssCDTpG9y1hknFJQ22CwS11AobKs7CwuAZf127WcRfpDzbSxTDWGs3pdtJbUrX21LXWFX5Hm6C9j",
  "key9": "3ybfVgGBV36qXQVQmyFkZW57TA6SdFcTo3ouuKRVY2Rg4ViYR7JbykG8yppnjgJKbUHnbPZvDAW9aSsgV5Th9SrK",
  "key10": "62Md7ZksCthep6f9oTjiD5DRbK1z9gcj2Nyx7VRcnaX8SYLVXYEYsSgtvJAiziyNC2AWB6c1KThUdqa5AiwYdpxb",
  "key11": "FEbd4FxV9fKCyiaH3h6TLAEzxxcvGXyhBnSMcdAnf2uVZaEnd8VvKHLP3LqrxRvqGNHj9s5Kh8daC517x6MwJEr",
  "key12": "3soGNG27rFfDZrfmEwJ7XCmLGastM7GVNBxvxtcmRPRsisc6QHHS2Ffgwzcpwr3HUms2cgTqdEa7Rqz8mRsMa7rY",
  "key13": "5vUBnuyYfwCM7wS8n8BP5Yz7ZcbQy1Tj44SA3jnJQnFKwKZ9Z6h8gVBVDBmS3LfZn1A9DvK1oeSS12AaP7TxvfLX",
  "key14": "2ezVdhKhmL31F8vfBBw96StcHrRe5FVRZMFyj3uo5oqWVFuAPj2BZr7Au56QwAiquehPMH9xb44FEKTQxcNwwfb9",
  "key15": "5dao49vcmW8Qwd9hq6wJsv2vigmEzQnVyperAt4UtoodAP83rypik3RSRgZqoLPyL9ZfZAi2zgnh3NJuqVbiJkRk",
  "key16": "5T1ZE464opTQZoSQTVL2MiUp3f4YK4CP64SKk7qiF7yAMDEbX4ov4RT1cbCBHBzueCgYo8gaq5gpZ6UoQyUYgyDm",
  "key17": "3FbeCg8NCXhxrU1sJ9qTaGfe17LAwg6WUgjCEMd9r4V3f57HmSoNCwPGFBkeshcKDJmbHtkJr6gmPN54Uv8aELue",
  "key18": "3NF998Et7PodM46mwBNnpG9K36UdGXT75mSgeX2EfcWdTGVH25E3bvt6Z7qZ1UxN8x28Poz8UQtkE92h57WtZSxr",
  "key19": "27KhU625qhyCNmceAEa4sLG5AKUcHqn9tE9dCK2EyYSFoBBp6As7iXEPLohstAQc5FzAhazCBBaYYYMYVqwodP18",
  "key20": "5Qg6nNzS6ANSEadKe76eMQ9qyk6uFptFKu1AYs3a1HNeHp5j37yWVy4ve5RZtA9QdfKpAHe3bJ2Kwcw5H2U7pyXF",
  "key21": "67a4UaZzrbmadQ8kDgmKKZwJSX8He4A6aNriAYYN7CMpzfT56ffAvoYD8y5jPRBSzJjrRR1tQgykxddE6jAoS7bE",
  "key22": "QUny65P16ZJnyG8Eo2JTudcqsCf94ENMWTAXHZ9x5LDYkBSqREEdUJJJHjmeDZAJyUwmtESBYmtJMXopFKGWHy1",
  "key23": "5kDB5PNjuP1bRLuGmYBcFe25KZqxvYyj6WkpoEk82JSV1FSai5RZSnV2iLt6n5EVtvpYBNr53q9PyBBSEYFQLcoL",
  "key24": "3UdfFKGi4Hje2SbLCw6UQ65mhDkwEfUpnF6owY41YSWdA9s7pjnkmHf31CW8BJqoXUvfpwBVgokGGqsa6F3LVVAS",
  "key25": "3dvQq99qcBSuUXWmLr38YBTqt4tzmNadxjEyennw336yw2yikry8xjUXXLpsrEocuDB8mTwKTR4j4f8LyVuKdPNN",
  "key26": "3UjMJjTY3xbPKCWGkY4RT7zLBisuxPAn5XvXawhP8DftARKeh28PuCybHRGxedqz6La4vfGFxh5HHWx5iBP38YWv",
  "key27": "5FtrBt4uXB6k8Q7tobZajWNiBJHKMmvZakRJf1VKPRYdLR7cTs2ke1PLV81axHyoBjrbX5vmPQpzTgMT4yNmSTus",
  "key28": "U2ooW7ZUS48dsFTVnZ9BhM4P5VUZkmCEdFdM8MxDCGEuopSHUCoF48pPcuA6LbUfpf4MWsvYCeoK5CFFFcN4dpU",
  "key29": "3g1WivpVJeRDPEQTCHUDDNY3fwCNhziuah7pKAKbFUEvRyvv3TV3L58ppcWMDai5xcgo9kaN9XCAejT6Ui6qJKeK",
  "key30": "4Sz7VqsH3zahJYT3L8QQLd4L745hD682LsFd1AEDLK8P6Nhe4Mz8Gq1GUn35cLgHFXeTikc9zb2Wbdv47fuAV1Yq",
  "key31": "328rh5mHRGJUNp6W1rC8ZTr6W8nH5VqvrRXMNe7dzteLj5sSqUr56R8E4XMWXdSSnC9ZwFF6e5DKPhS924B8Tnpb",
  "key32": "3p745LHr3V9V5aTX289SxzSr9qHrdN41nbewQqFQDwErvNBNcw4q59Tbcb9HY3dUYtseK4d73K4tUXLrzpXUjQAH",
  "key33": "2NgxWuwkkcZY77gP9ppNnsDYcq5FfoQy9SZfRf6i5EDpVDSFz94UwTpXqp5Lc7vMS6CF5wsDdqY6QaYDvYwCT5pb",
  "key34": "3dW4AeQgsf1ykikUded4sJ5pD3MK2HZ9Tdn6sYZuWUcV9g8yM77B27Sr7db6nehm4EKzRnFdaYbjFruvypcaSM8z",
  "key35": "2vRtdaCxyM6iqEw4CymghpXRV1wVEEvW91YCFgkkqpNz9bi6kuaq8Jd3ktY83YHy2ek5JKukC48Q6ijKkZ4B9wAg",
  "key36": "26eo1QMjnLgE4dKG9m3Rs4cqBz8ThpxxZMTbbPi9QDco7rLCau58D51ZSDasEsJjU7UnsUrvRRFFKCtiURQ5nqpe",
  "key37": "249PjSjNzsDBv3MniWZCCQ4zQ9wTiDCJdJCqHbUyAXL8Sj8QxNhN9tro8iRrLkcZTfNX393KDyK91c28iY3EYcUJ",
  "key38": "3wqx89HxpiSBt9KdqY1baYRKqB5iTszmqTLjdjx5ZRpJGarxLudnkcXm2tXwu1yEQoy2b136qBZZBsk7NoJVmt4s",
  "key39": "Fzw4ANY8RBSqQ8F9NL4vSgxY9itDurcFuXYQUAzRZ8yyvharDhReDjRCRgSK7ji8uReXQTAk87t78WzTTiGWZXi",
  "key40": "61Z7No1XPMeuAnesg5vTuLNCMejgqFH4WNUtf1Jirb4MdC6SrwPA2CkmvpZLcVU2wEEeza4vD6emq6RgrvbUqsd1",
  "key41": "4Q26TFAKBAU7G5G71RthSSd5jjNjMgGKhNfu81JxoYvCHLumGUib35Zd4F1gt5nGyFv6wgnzbyWhrEU2xnxiKP8F",
  "key42": "58QdmTYtuyB7p1geRvX8gnhkanxbDHaQceeoRCuv5sgaGHmnpUAV2TbjFgTpUxgQXPacj8zCoV1mnCR37AEnySH5",
  "key43": "3FgQ7VSJp7dirL9de8rdrYJKfU1w321ASV2ZfTY4qohUqioLL5YoS7yVbJ2rZZrms7av2UbMVH6USJbt95qQmZAh",
  "key44": "28nK4DvV2hdZongL4S4VNWxESDv8TsZugy2GQBN1mZqpnFoBArUyJcyDS2q3pXUZke9U8Zbz7ZTok6bRKMiZ8vj2",
  "key45": "4krErvim7gjuADnUwnm4LBEyvmnabyqvbFjZauDBdczLM3sF1vfKYqMLNvgkMTvjTpsLZzu6zYmoNQJCx9TMuWeH",
  "key46": "3QCtR93jrXcnmSgh46HXGL6yHuu7PZF54x3r9F8Vcbrex81AN8y3n4MYqRZqThPyerAnHS3x3pA4Y7KSVD1pxtxY",
  "key47": "3qfpNSUHzeCt98xry4PvU5CU1kWwa2uHv9AoXRYhS7WmVM2hXFMx1EiMXEjNmFS7WRP6UTQQfc7NnY2CsZpH57EL",
  "key48": "4dDkvSYRTcWZmQjnzrbX8itgZZeDjvUQuWzYKvRMYqJ73URBkfUFt2yJt4X4gXco1FcLEKXRk73TpD2auy93ZvRN",
  "key49": "4NPPB9WP4pB3SFiWAYcWR4Hg1wN3T31M3aehN4TmFqRWkDCCrrjKmGSjKahT1pM4ngxUvdCoJyTMyTvKjn26qrex"
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
