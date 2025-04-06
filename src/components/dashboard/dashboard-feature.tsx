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
    "2cJsQgNJcXXC3813EHgFVctmv8VoqW85CPqTAvPAzFfWRVPvHgc7LQFxbfEpFrChjCZGdoVNACtbX22GJja7gndv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b8vfj2ky9FoQhnE3G9HHXV9zaq2yF8rV5DrZVsHqPo7v8DBkU5TkfAJWJfkAyxiZ3KQGmcydMy8JDFD5ZYzLwvh",
  "key1": "zsZAYWZbr5VCobvhEEjQsE9AoJ8FUjr4HH92y2e6aXB2p6RpAjqNQTbLyNN7AGVVYhhAFug4Zh9uZ8LV38mEXV7",
  "key2": "126aot5Wpec2QLiZDUBpFYh1GYBPdiuQp9t4LoBz1dVtTapnZJS1zAeZScvFZhBQdRTBXCfzq8oSeMtvLPLkYisU",
  "key3": "65mYjV3MFdreQAQcdWbSbqECe6osZYWHZfMpPwy6zemqWBNKUEHbL8GbkCCUYmJXFgVQpmM4uhFvZCRgMY7WrvCg",
  "key4": "4Vi557Fvf4sYxdiq5sC6U7Y6CN6QFAFt7KiWiA1CMJqMMaMGhgDY4QSb2Wg3AeMJSjnaLWXoJghcYD3zqZsLkpEq",
  "key5": "2LXouqB5924E1Rjvu1os9Vse4EHVmdVBuvjfH16wbwHATJ3d2FxeV8HH1rhui36UX8WRY43gyqfBJngTqhWVzYGr",
  "key6": "5KZ3MCPoE1t2hohfhK33n1o43PCt1fZS1tyr58XN9XVqr4XLmpKYn8V1FDNaEYZiepejtx5xfN6JqE455SCHPCJy",
  "key7": "5FbCqrHgkU2cYbEiBoY3WsHRrhjMXmKr5pSC3HhafJwmENaX9Yo3bXNJuV518whHxoekMEWGHUV3pinqirQZtpMg",
  "key8": "41X8rocdR3XeCXrSBwsb6GSs8aJAXwbwrAUiGFgeBWCGv2nDTv6YsEWwDskcvpLqnX4g4pY23KBqLMQbhyjwqGgS",
  "key9": "4JvpkVRXYL7XRwMBnHb4MKNUQH4EksV9KgndtwpJr3J1ZHxqfYY5ZDPn3ZrmKfkCKKS2yb29c5o1XNF3EssDXBnn",
  "key10": "2oV9obKDaLPQnq8ZpVT7SovgcNDYxA6y5UdjJfxFeYGJhDaPYBfLufL5967unPadgKyhKRnMSC5ZbrKvGebhz3qY",
  "key11": "3sUrkf38zZwZCXm4BYv7nv9SmcBrCmweQgskcUB1fHNhGrAUwbDKWrqPVrNLKoZHS6n8zMBiEfejAdSExGGWsnud",
  "key12": "5BhW8N4Wt2vuTgkJVeEZZi2D2Fuh227wcY4rxicFMMLnvZ62jVjqpQnx5SNW7Po7qKjYNHUwwms668FxuCrHpmH7",
  "key13": "EF68u5NasLKP5rLFv8d57JzBeh2e27jJtqddnAz5mhFdx6i6PduPuuRRX6sUG846yNisnpAJQFisLwEgys9jJNk",
  "key14": "2osUefUmRoY6UiRE6YzQKWXSttGkhQnW4iu8FMoTG9zmqvD3nhPK78ARzz94Qf8kE3rrMQ3f6omdM8zaRg76Z9k9",
  "key15": "3PTot2kBTtTW1aBWC38rX2wcrvL7Dp4YkFjnaxNrcneKRCJsf8U4SRbcffFYGkBguUFPQCc8Fwg4h5Bb8zSZFtfZ",
  "key16": "3eEmqLnSkbdh1gkxPK3b51kSgjMJPYmMFrFTqowF7SNJDy5roEsTMsC3cQgGwi6Fm3XNg3S2PDukiq2ypK98MeAZ",
  "key17": "2xLCza1ueXJyu9ogTsNoZmTUhY7EB5QrGHAeqgzKLEQ9Xk9UmLJjMjrRPPVcVvSVGXHx7JwFWh76b53JQ9JTZa2V",
  "key18": "8thRkCjUynpTGB6zt2mAAjkaP7KPPmx9YgnQiuMogNmeVDSFa9CuGYYTX16M34HdKA2qF5VnW7hNHmCphSRtmC2",
  "key19": "4dMWssLX8uHVCNzox88PoEfuYgWRPrXDaUT9WUJ2TDpkRd7tjvEBT1LPWCzWPTqjtBPWJB2cVQtyAakv89j5zLuG",
  "key20": "4rVvEwt6VAW1ryUwoCrCk1oksZ6tRcqJ6wU91jNFNCKu6vGECbbdVtaNZaw18ggLanitpqpbieP1h5z8Aq6VTFFg",
  "key21": "5BmVBULhZo8BGPaFU7boPLRPEohJGGfNNZRsQvtZRtt2DGa2AZBjcbLibPCx5Msa9AR8N3tiDondxUVHtMf8bvUJ",
  "key22": "3CQ7SB4uqtFU2G7YNf6dLc2ehwWyBv2yuntNFHU5yYSHAf3TDYSyEPaXTwgp8EpEVu2ukBjuFFvrrHTMdCKAQxGK",
  "key23": "26hPVK1r5658y5sdgeQvqnaci5id5mg6EqnU9VkrNcAHHW6cUr1igp1m7kDa1uRm1Qz9fWfvg6dUesFkbQqTFos7",
  "key24": "55a6t3wfTKRjGt8oNv6oan3Evr9sRhbifMaoVceeM9HYENDK6uNmng8jEkV5Nddbh6TwGuE8baX7UtKHytPcj1Z5",
  "key25": "D7xtByQD6PfhnTSf5HW35j6cpapFXa4VoKbYePgMmVqgzvqR95J7SrheU7H8saaJetjKmPoQ6YYcbMEJrK19Rtw",
  "key26": "2fvz9voBmQ5LQbYBHqMXEKGm5iwopvMzAMnm1DtvDQ4iXFGvVnSegVDT7q2x22ZLFiF5LJeMeD58J3cXFhK7ZEr5",
  "key27": "4rUmNfT2AfXTfjTfBSVP2PyF3F6vaRh4cww6TyiE47aMhdHHJxCprpoiY28kGUKAMekfRbxX36a9XL1ypvMG7Nb7",
  "key28": "3Ag6rVwEHcJ2MMGorpNBhkvpBRnbAnHXtVhcNAw53wJoTKauhPUr53gJQEXMxCTyySc5tj4rmcL48sTeLob3EGBY",
  "key29": "ovwqN85p241vSEQm3oHbrQga4XovNzLr3ZR6MQHnvWUigvBxiPMBehG9rXM5i6tMPyykuJrnwLWxTAtTVkRt1nL",
  "key30": "5s8hvzVQga5VmQJ9fDCFMLQLp9q1d9KfKpeb1SCm5R8nLWBEnpDBzrM3JxLxM6BBKYADuEm18Hmv9z7EDowLEYPU",
  "key31": "5VTRnfRAxdVkS5uohM6vDjVDMG1vhmVdVckimEi5dKrp2uToLXzqCiwsDt3atFrCSqqDXY7SbyPyqvmTGU37rfty",
  "key32": "ZAFmQ8DWpP4KFbqCiX4fo9ztLZQe7KdAYr2xvhPVeZCpwarFxsA7JMTNZdTtR8RHKzcn6Ms1wEkNwV13ZhmUS8g",
  "key33": "35h1aQKDgwWa41zk8phtpRaFuimMQZ6G4B1CGx3aif45uUSR7meWPKiVVcDMp2vMBrpYYLE4mT6AE5AwoLFsyeL5",
  "key34": "382Nkm14BpPw2tK5uVFL9jWSAhk2gbNms3W3cwdMtsbJQ9esPAm4cDYAaGEv4rg7Kmor2qoJtwdZt4CJo24nni8N",
  "key35": "436ApEaUg2sCQxV415tgz1ccUdHqXqemcjJRJU1ZakPMsSfhqiWSWm3cpDrfXgD72qwzAtA1tdBiWuYD9wGw8b7F",
  "key36": "3kLJ4Jvgpqy736k1MoVVL5ECoWee5nje2iTHXeEwRfsubucsUKWK4H241HrVBxX5p1GJ4AeUobXb61fyXME3pK2i",
  "key37": "5Ut6PZBgnrJVC4pRMGSHQVCrRTnQ9z5dMEmUxXe7qA8PBvQo1vrcboHgnckgm6LZm3X5jV6aBNsyWAAeWJrVp3GU",
  "key38": "3y2yuTD32dCUYEeKk45moxsqfuUQ1JvMac9U1AynweSe5PtNTCsJJ7AiFnNxMbdoXvdbX1aAiaTjQ7kKmZZG62p3",
  "key39": "5yQznY4fmT5G6u7kpnENeViU82yMazzJn3CnjbMufVVxjPnQZ3xkxYphpBN7sDTgU25akFYTaLksBwFr7uyeyPjN",
  "key40": "5LzQPVP1c1XwhT7VSKPsDmE7BedKYTzjorB2964o5xrSfGikDjw5cPscaCF8Q8arW3VcX1aWMGA7sUWqRM2a4zUk",
  "key41": "2KgNGQ5BnVZmdEZDv6z3X683tiZU2jqqNMmgxySkYfCbMohHiRfTHaXBqsVX6WTUfCfCozzHhUKyc6TY12oKvcVX",
  "key42": "1c1ruPpwEXJ56LBN8zwKzarqGFeGi3rzqytfnpNX81ZGJBGVTXhHLut8rDqBiukrGDvMPTdjdbjXKCuvgywXBKv"
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
