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
    "27wLibsudW828SCywuxTJgNeZemHLi22fuNCns68NdNAtQAy1YULvNb4kTNWQRbVWa7vnVVR7T4eKZcexhiZSuCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "344ZwQHvGNjoCDgfFjp81ZXR6WWmehvJLCiz8kuKtQCsQeHyQWuTjs8i21xRACVTRFUHmpL6p7y52qJnePS3Q3bB",
  "key1": "2VVajQCDYLY15qAhnmvUkx27NY45W2oU7Bf6hQi8XXPpTK8EHKFP1hE6TD9jU1DiaXs5xYW2npWYn6LPSuHbLM7v",
  "key2": "Ryd1CqG24jvJbyT9K8NughVwet1iy72T2kc9GbNoTg4yLNW37pviwzUHQyN1i1iw3avMcsXeD9nV4qevjBU6aQh",
  "key3": "5Uc3jA5GgVJy8uYoq1diTRY6jECU3h46w6dQ4pufoeYZ1J263Wzvz2R4pFYVNaRiAEVVm4nvkgXyTHgmLB97rUAR",
  "key4": "4jfgmewvEU7v539G7E7nbn1K2PwCR6S4YEpBFKhcWkEjjNRk6SXCsuJZ31QknvADHiUVfT1joJufnwh5bAzLVAkt",
  "key5": "61mWNnZD6fmLNYRyURXrtoeh1ZTwJ9m2xRLSgTtANd6vwACYEdUBEUD7wdJiDvFKd9WZkyQELSmBUVtm15yiJV6A",
  "key6": "3CKc6o3v2PdH2pu1215eZiG1tiBVSLczTwaFvKuE1Jko1kAFLnywE9ur7hKe1dzqkMKiK7SmJbppbxbMWAWbmFdy",
  "key7": "4s1cAt46cJraXgZZUjTCpXJ2kJC76Nzi86SpDGDAcSJme3ZD2XUqR2rheiSyUp6PtxqgqvcqZbX4WN9adsbLgrAP",
  "key8": "3qZt337KNvsG25ptswAAq5Ffhp8otCM32PvmAz54nVceeUopH7CjcFiipCtjErCuvGyKpmMzxCQV4Fo54rZRwasf",
  "key9": "5M6TBcXXmavVWTAJE9MkG9TsxQRx8o46HWDhvNCSh187ty8GUCeTRFbuqmNREPPjrgFzSCeyWPuamWXBmk6TBbQQ",
  "key10": "4mYT25yH1Ti7GF6CJE17XKz97cdbaCjMoKzia6L3zvHuYZ8KPp2TxDoq8V4ErBVFWxSERAZfxRJyhB7f9qGVYrNZ",
  "key11": "5hPmzDLSxjU4dNeKCzMb9xy5G8xK5DV6JnKxgigxqk6ArKCX1AxC63DED9WrkYF1zNWBbfS2xrwTzzaRmjbhpkyP",
  "key12": "4ic1s4hsSEEc1LBXUnAES3fxnfft6eQcnqMm7w58Ya2ixqPgbdpJLh87aLeTwTq6S7nLQUbBk8pVBx8GtthuEXnV",
  "key13": "3TMCTXQE6hfSUufJrN5gyjyuA36rFTb3yBaNqvnhwjU7zSXAoZGuE3bmjwQbdzZLBdzBh48sF4Tt1yp8zvJwy6fS",
  "key14": "4swEkC6ebNBC6EewV5sNPpsA9hEMCqXruZ9wMn4NbneEntmWbgiBpK3ttqEiuqe1e4Gjb4z9v5Nxh1YbKo8epQRW",
  "key15": "55zgkxtCLk24MLZ9CssYbkb3q6eRuWzsMpsxZpwzcrrZQvAVvr1SxLKMFgtXJw7DmRFmWanGhzeR2zMVjuLsVQdq",
  "key16": "opbHMxLu9wuURGofvDowcWTF1eaUSQbqu3XTxZpzpFqSQjXKEEz3t741Y7wZVQajmuUfYgkDhHpBg9rDjLueSuw",
  "key17": "4LXrpz7V3xbCwkapYQF9CRLdjKPuLitSofQ6VvtAj8udMw3ic2NjHqihxatuWsZSP2C13vTE4itdgEE13iDcTgF7",
  "key18": "5fBdUL37CQMXJCQMFuutTBds4DWQ25H8pdd84WzqLeKZmm3XePPqhCqiK9jNauuAoEeu5rtLE67cXHmUovEQYMSK",
  "key19": "43AEooNmUW65S9CRuHHsRXta18SQjW9KQa38keBFF15QWfx5DHc5oFCA4QPSnNPk8DEyjb4ichzZWoWzyhrnEYc8",
  "key20": "2TUTau1cjtCf1UPBwXCnm8z8YbXhtAocXgBjkEhMWMrEzxJkiWuhV3YLkiMurmjPssfyNjtdV4Yf5kJiATNBFqF9",
  "key21": "2cpUKSigMLZpUKBFnaDR355H3BXrKupUFJzETurgJGa5dGC563kmbqcDBfAD2DhcZbSPvxpLzKHPqjJAsQ4AWPrv",
  "key22": "5gxMQaXDuxKcCfHUFawdCGnotYAVg24PEGqChrT6hViwjfgjunJCUF8SeiymKPynKorBiQsdDZRocZp8xQfzXJbc",
  "key23": "6HN1roGnpPBR1ftfep7pvZNQYK1pdueEfLfAXqYrt2B66Xji27sG6XS6NJETCPnFFfke6RfVVZxpAG91PH3nN8Q",
  "key24": "2sqHVAWmvDYYruoiETgwhq59TCmAx35bbWH7qag63ed1QZnqZ98SJj3pogRxWm3cwTDXyUmLjuvfdijuKUTo44P6",
  "key25": "a1aGjq98fJ9L4oY3qc1shrYfY21KgqmHViyZKk9kGHkoXDjbtRQJ8SERpEnr8jx1TpBntg7T59V59QFmkpgRCQk",
  "key26": "5SCPhM5DHjpQZZ99cWqKaVCBg4R8cer3LoVhx3VJEjkaDkCuLgeX6xKLe4KpYg5y6TA7zwcwz8MQQEvb9pVZmsAT",
  "key27": "3ptGr9v1braeWBWUV4gHzEr8CcaGaV3DcTomhVUJYQJqFygtK5bS1knt4tv5kAwPbz94FkcpLMuoAAiNxjvY1L6q",
  "key28": "4oUQBbcv9V7BVn6Tbxb3QriscfSeZAnqnExRTpPDkQAeQa3EYcoFtsJ2RsrQUFnLPXq2BPsD5Ca5XZ33V45qHhpA",
  "key29": "4xWzof8JCcQnjBJEk9kxqtAdVY7kd92XWU6bmZAKPCv48Tbuu6YDJV2beHsUerHGTAG7Nqh1XnUzT9zQx2kXioh",
  "key30": "2sbNMJ1eM6LUkNBbWLgcqtZ4QRDVqdZabvn2oL1Ptq5t3XqsPg9ggk1ur94r6oTzrcaSWzZVtGjta6G6mFTfPUf3",
  "key31": "49hHnRmLGRHgm7B79x6e5cTHhD7GVAHibbHJmA5tN1E6PDycLZ5SLBZMLB4G7m4ghi29SkGae66CREU7jvfvREss",
  "key32": "2bRnaKkG4BFSC5ZwqVVnbhSukFpBZSjBirQnL8GyvrrCqAC44xFvGggLgSRY6y4xEceEDQVKcbbBnrN5fBXo5Tuh",
  "key33": "4HQ48bCTp6cuG5MqMU64yVqJuBjeh7xQcCaaE3ZsXpfK18EbUceN1CfWK1vNkXLN9ShAPJGR9SDwQLmFeAKZmw7q",
  "key34": "3WcN3kZPKpFSqB3esdS4HHu8fV3PUJfCgUU6pheM5VdxgwoTjzZ2HjAmJaE1FMMaN35RdctTgYBpU4o52Ah8BQeC",
  "key35": "5ywvvSMr8rcsXTb1eNGGdZZuLEQM9JQ1vEYzEePrkvDZPLjwEYJmsmToBq66pj8N4VRCvMcBhACjKX5sdoRpRESS",
  "key36": "2YvLZa2KPTXm48x5RnGobrnTMNfhr7aNH8xpCzYtD8D5nJLVAQkEL2VReWgNorhUwoRqGCSLR8kgrHNFJNnpfMru",
  "key37": "5mftW5XhswueSdrpMppE6CG9dqNtzU8NrnQbW3nczAmotXbKsofc7xrcqpSSSbh4yY8LK1SnoFZYo7RsmHLSNEUm",
  "key38": "4iQvscxiVEGDk2ad4E1yUqwJ558XaD4585689QdbEWqQ1HrAr1mEgezDP9FFAT2so9cBbYUkUrFSjzVnNg2JrbMC",
  "key39": "3iY17VWdBYsMLEMPTKyz6tMTTgNmpp8K2GfX9RkEzbqh8jZgC9MFrLvsktyJLWwDiR5gs3mmbC5oZtEYGS1ZszFL",
  "key40": "5PV8okaeD5wtT5sBHMsQzNBVsXH2Vh7crg9vmP7cGypWc4p1AGVMQRRd5SinixZdYc99ETxmSRGF1KvsgqrHY7BX",
  "key41": "21ncPTorccZNp82PSBHawTTahCL4b71K5CXmT32fTv9eoQvSko5NZLJAijoaekoebK3MBMEHDp2StpCaa9EGwyM6",
  "key42": "3vybwLsm53pCwWdk6JCmsYCjjqx78ZN4cXhuxendM7fvJavUx6JE27XSfA3tz9KSk1Brp2wNcgWVHhLo7V515E2q",
  "key43": "8QzGQR2fj3r2sctWCEg9Zmvm9D2wVF9dd1bg84AnpqsaaCBLWVEryn3YoL2NkQJ7Htf7P1xnDRx7BgtaUQPvBvP",
  "key44": "4A513D2c3bHowo9MootiW19qRdHjZTudpb6RVWneEUn6QY8HnBVNpmZFmCvxAA7DAK42LhMQjDXZMtccmqso7AYT",
  "key45": "a8t5bQ6baHgzHCPqCFwMy2oXXQzD4VDgBVyokQdqDhNAZs9uD5hcGUELx18NEp2kUkqAsgNPgkCgkPEnUSAJwBp",
  "key46": "4r3aWeXp38iLtVoGisgZwNdCBvhDBTJzm9AqZEjUpWg3oV75j52xfCSWytr1YmgdZoMKbr6RH3s6qLhyex8z4Dqk",
  "key47": "4NWunJVnsmw2SKbZFAnaJd7ioWG5UPiAmPugytsDfKskLcXEpD38vfNsCBLc9JQi3nEZwpBQtNwKB2CRWgHC1c6k"
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
