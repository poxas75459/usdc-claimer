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
    "3nCiLHatjXaBJYEsbH57ZmYhnSXCHkqmD8LTirQvKUEGsM6SJ6eeNpgeD3xotDpGrWercHSsuWYUAXviFHpoRJ2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k4B8tGFcvk1jmKkxuJwAxTB98WTyv2dVmzkcUY3mwqHZi8V64Exp25XRmRxRhEEHgTHvscfvvrM3yvJgPX9cgvB",
  "key1": "2C3zHbvJjGA5qyaGNRV8svwAATNNUhNUaneiHu32cADrbWDuTKdPhmV2jY3UgWDqUWnpcs1Dg1YDensjPhg5rKZ8",
  "key2": "botVPJNA2viECm4vAyDJRBgfhfMYhVKxBPTYMpWQtDg4JcrqroyfHvPbnhc4apXXeL5rPsYjh5M41h19ifspoPg",
  "key3": "31ojP5Q6ReqeVe192N8Z9ZcaLJhL6A6dxsLvWxzAnMRedQsL25mqfPFN7YQxecpDscHZp62yfyuekpo9e9nJ2VqT",
  "key4": "3y6rdDB7Woyk4DMtKohWanGdhZA6swgdAdaPQFksiUGkKaPk4ZHuKKgqH7Mna3uKHYFBSR1vxDcqPXnyZCwAGryL",
  "key5": "dKu7Vg7mjbJAxUCToMx86djsQQXzz7GKrJoTCQSkY3XocUf1dVa6kwAimp237MJYyTSqCV25YMzMKmC7W4ZivvG",
  "key6": "58vtsuudKEJbSYQksVHx7qJzY8kpvMG5SsXvgz7ny3Xd9ND3k45AnzrjsKJ4T3CgR5kA26xxToWezj1g2ny3GmVJ",
  "key7": "4kVhnWJ4qa3ppxxkDVHcPuohsN93EL4DBKoyVpXv1Td2KK59Bj3AcaPtGc3xdhxDEy8F2afg1shRRFU2EpKwWN31",
  "key8": "37AfH1BQjAoUKkGZNqxs6YVRrNhfbYy6m8G5jZ81qKfux5eCUK7AY3sgXc2kFkD8u7xeouvtNvorwHMxDQngLdQ1",
  "key9": "3veeEB1xi3AQajxktoHhXMApzUKA1bpY7UpSMbSQwT4CuLpCihNDbu9FU5gdz5jXeAfNeUiVep48VDHjZVXqLuYC",
  "key10": "2ASQK9uobZFk984Hhoi5J3afZAchDan1yoNJQKYEbx6A3pkARxJDDq2sKJ5s2rGUszz9QvEqEUGM66jegAwqZ1dw",
  "key11": "5fvSrjEt6aN2KjqvjMcEqQszQQYDZNkM5r7x4KaXfj62Z62REaQAMUo4hFeu9eYNZksZyVjPwkcK27dcmkDYTHLP",
  "key12": "2J5Vz4ebASyKmHHTuzKm7wU68p47G6ureKF5S2rgZxKWtVdr4aaoKrRgVfeEfW6AzwF5pXw67oF8QxqUkgrpmX3g",
  "key13": "5kVHTfqbSYRhC4DzK3D125GYuwSxA9q7tZYfqw9ejQ2fC8BwEiTLkuQJjeWLacCm5H8uy6upmKAxnixM3wXN7Lty",
  "key14": "Ytuppr1LMpjVdatmpQVbYr6Fpcxg6EmZe8dcdmxM95xZUf9b6MiWntF7wLqyopWo4C3FjTCnFdfzWGgNG3YrC5N",
  "key15": "4bKzDatWApUAX4bdH73HoPqbtQRR2MS2cox516c9y9Ju9XqGTeB2XtFVDp1XVDVyBF2DzpmDa23vqpANFiREqiXn",
  "key16": "64EHjozHs4wSqePoJpBLuP9A2X4iY4vHaSZ1gcJq4PtD9KtHv5Z4ztHAiMyAcUDUwaNSKF1hw6HASwiVxh8fodjM",
  "key17": "34F7ChmBhLAwUGAonnTBgSrtNaSVhz6PESEhMv3Nfaoe4JNSYfp3JtasH7PWLeqPnC3upp4SdjiLY7p1JxENbASU",
  "key18": "X6XtF2DcCwGjCLtApcXZntuVtqXBJTvnUJoQLRwcUboZkvesWHruKrhsvY9EMCFGiNbMZX5Fxgggi3vWnRxj4Ne",
  "key19": "65U1RrGMQLSpsxjT9PvuzvQBYFJo1Z36raWhUwNKFote1ERgJqrQvsiSwiSDLwe4aJhdYx6KGLUTByYPqqe53SCV",
  "key20": "4i5hF7KzJFawCbKS6PBTuGsB6zuXHCnLkNAUo9qZUGfeugGksP6oYkib3JgUD6At8DdF1bFe8wEM4pQ4Za1XpMvL",
  "key21": "3R1Sx92EarwzgB8dXwUarBWBSCK3MF4SYHrqqNCPsVbxJ45PsXFqGgFAUiSim59rZWcXHGvZVKhi6cFeYBXRHjuK",
  "key22": "3AC3DPDF4kbjL4dJgEMLsQcDK9UaLiaNXhjhSYoZa6cafn5XDwMDg3dFCU7wyrm54u1gcfwSumfmE3JJQeQZiD9D",
  "key23": "3jutwUdeWRobzk7kuPGj9diFqNECF69X9pCJFjxoAVgVBypwvabNdfQT69m54RH169EajpR9Pwa1CDrjidPM5B9E",
  "key24": "5D7enJnjwHiKVn4YF7WGjevvrRJ2ia6ZeDWfqNWkn9xfsv9HoEnAFhtegcSp7Z76A4gqTcs7vkcgQBrWmKU9fzd",
  "key25": "5wyc6ZSKYp72pWymxewRvejV1VtNaYvbynDUK9ntvLaKBRauF5DQycJRTN3r5QAQK4wRKPWrE27HNxuxvQvjFPRj",
  "key26": "2qEbaqYCS9F9Vp2QtW1DpbmoMGswfeYGNuzYmjQkRaTby3o9qw7bSef15SpjJZdjDJo8CsBzrB9zo6uAXCrbjVEX",
  "key27": "2QHH6nxqC72jhCV9eTiyRtc2KoLW8EDUNe1zT6seWn6DtL6aQZmC8SDdNEmbSXEEdrsM6Utu6eKWHaDbxHQcDnRS",
  "key28": "5tBkYv62ShNshhYgP36B5ArNofPZTymtRqaxk4sdDhwX7J1Mh4SXYBfnaLFbAu6ZsM91CFbh7UoHvKXJnntLVb5i",
  "key29": "3EzykoSYgrLAtudGVwAsdccdaQYNvY6o9FUeuTPg3DUtyrSAqYHqEGTHKNko1mRoKUksK91E2nao46381G1FyTgm",
  "key30": "4QRSqvbk6F7zRJAZzUqo362VRiZz5LzCqnVREUcHj1sZJPefU3TkRJqQ6mJ7i9FvvapmPCVKaDtZa2ny2k9zQhw1",
  "key31": "5vXKHRi2JKkpNbqUNp56MSQoCpQTFmSmpNVFqBgzXfXz3zKUqosh4uNqAw6vkPKeETSHSUKd4vYQTK2MyVmCNC4r",
  "key32": "3LEzVZfXMRmJ5CnSQr18WxVQUZUnXYFzNm5qevBzxnGUCHvjFukv434YJ5V1FVXrcETccZK5JZ99Sa58mbm7E5yb",
  "key33": "5YkAUghp8v2t5zQxPfinPDhLHamLx3HSgbPHNAaa6ihUQB8tq1nCfm3YhaXDs9N9TomYqpWHPrn2Hy52429TdXNB",
  "key34": "M8bjpT6irQpF2HSsyZyFcPdpm56nTbMSoRZG5xGhw3L6y7QLCn58wHStkWzVjN3Fro2hEZXytBXVGCjnP9Koswj",
  "key35": "dxmWPgBAdipG96zLVJjR1wVksWBhXiVPiiYUwHR8CqiHzi5iXP13CCabEZchMQEEoCXnLtBgKzycJg4k9w21ZTx",
  "key36": "3HkzPSF2uvpskja3r4QSnXuNHkGBTXV7DyJhMksUXjUV5rCjPrYd5jSwWVKpNKjmdZTtsbpthjDEs8Xs7CFzHQN1",
  "key37": "4g2tgAqHQrAKW83HhyuDD3dcCWV7MQL6ptStGA7DNpf9nFhWzgfTcq6sCUDtL3Xi8rBYPdU2zQYF9Db8VNRzXGZL",
  "key38": "5a7RQhXCguJ6e7LbMRhX3eibcbva3QoxdzsFsG4nybzi7stckC4AbKEythAi7TUUXYf4VrD3gjz7k5jbVufQWHWz",
  "key39": "4L5HsrSf18NgssArk5U5U5aPFBk2WADKo9fSpwzHLjVb5oaD4DXLQEoeN4JTvHHqxj8gJwNeeqmbwDzi73tASRTo",
  "key40": "2eW88bv1QdMqFjsLQyGcfYJYxE2eArBXiWzvbDCbnrUozGYc7B4Ry5s94fbtyMiyuh7wid61ubHzmn4G2VDCjAB4",
  "key41": "2fBjZ4FEQ434CbzJ2Li9o5RtuZPEdhHTCpdZxKSfyB5SRnVBgpZurrFR4KNACU7HUSZW1yGzZ6CuSWtAm48TGvNY",
  "key42": "5cSAQzLZXNUqhtxGUpTWyJT2Z1ten5VrJhSTfdjqW2EnksoruKmPVc3geTUXd75qtQKBuD3CRxZpts9pSmJ7yuDP",
  "key43": "bANARKjURGdBR4LAEmPgmC52EELPDdLKQK9JVVm5pzku5B6drc7Dg5iqk1kUPNkd5wk8yjcbi5visEVXp7qik23",
  "key44": "3cnizFKu2VGixUtp1N9NuHyED99Jp6DXCmmYbDZPNi1NhbHJhB7hsMqqRMxKJEawErCjPpixhh4R1g63uHge38A9",
  "key45": "5Gpnjqr7AuQGdaQYpXTjnGqwYnYUHwh63aDC4uQrQLnr7kLgqcMEAWyUvJnAu8fXxtQWp1ysCidDBwg8UkwNLLHR",
  "key46": "4ZPvMhYvwsD8yxxTopj2EWtEBW3yqFQbZBjobqNcpQmPVmkpASrs8XncT6GCGMJVBLMLqqCuVqkHA5ZHizhuZkR9",
  "key47": "JzRpeY4tGbxdPhh3E6rL22u5pLTRUWK4QDxT6UAAMWhfFe1F8ct1pjLRbMrxoZveDoS5sNJXzTjHRhdXSbEByxY",
  "key48": "4CCibj3nrR8QaG9jfcAsTfpYuzuUJH9oAcnpziu1rs4RUT3VsLAJQ2pnU3XctdSRyjArnrb8htGGKQrhThMfrUEi"
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
