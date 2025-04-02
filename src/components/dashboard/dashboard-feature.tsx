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
    "5pJeu77Sio57usLfC2jiaCxre7BNP7ZCeVaM138qY4bTqUvVcxr5GXnzR2amumS29yomrnU5xyweNoLtn6e3tK1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nAin1m1YupemgHxAejNiaoi7x6bNGjpjwQBV8EZofTyk6BWZ7pVny9e5Pbn4bg2SYTD196EyQPuUjmP3cK65ZHk",
  "key1": "52ve2p4NCJ7WKQ5AXjuyN7cP6Vnfp2YbzGDYNMkt1u5xWqCPuxMkUPEiRxsdvt7ta7w6RgwTgD9tNsfgXhM15Zcs",
  "key2": "4Bz4G4S63acAPNdU7RoaQKu6xcj9NcAUDE3VW2aS7maATv7QNM9hd2TAfkQXnaW6uy5kk5pZJNB8XVxVMMLa8ZZy",
  "key3": "5DfCSpsBU3ivu1394HFJHK1ydWnFTMJXNjcSzWbRoouvKL9SqPtxAjwi7ED8gh6dz5azJV8TBAgSdY5fJTsFvxpx",
  "key4": "6PP7DLjeTTdyKjAKHNQce3chQUKP2Ph38TnM5AEvX8uJKqTpKTDBeuRkaMqJVz9mh3Z4KYCxd76MGMMGEiNStLV",
  "key5": "2qGPpeNpZ8E5bhgzmhJnSBTt4SXnrQjSEoxxKre6RTH36REvV6xZCFDwsacv9jzy6kkKBDWtbEKnZUhfPmagCAft",
  "key6": "e9AePFGBb2z6Tipy5YwoqnJNfkX28VYq2SiEhCbMy4XyPeH3jpWYwCypPuSmxtHpw1Gwt6gUeUpdPc1EYtzaLRL",
  "key7": "2GRMxYMY2jvbtqJXgsxZ16KDpJzMVfBLnJWL1SZzvQHTwNix54PtTa1XGfxGzmbCPqxZPJDdpEdZeqZvpM1JG5W9",
  "key8": "5z1F3Ch5Hy6nf2nWUTwHtvKK7zeqfzvrQ2bEx3fSmPLZqCnbbknLVjqzHfdovUKu93fQSHu75Lxgf2Mi4idHUoMD",
  "key9": "HGX1QdWhKumbTBzQ45bPBSNAdy3r8vTFe1uV8ZBcr2LYX4bjtVXV7VfmiYBYRYMDHccLNznBmEZZ4RcYMGwNXHX",
  "key10": "3k7RaxQYzDZRqRET6dLkWWgUFBfBUZgD7FcwpZbviiTGsFViCm4Ym8ysda2Dd9CXCr9AT5GRauqYJsmRgLrf2Eu5",
  "key11": "362Vry9ZKRp8poDT3YLXZZhGpa5decTZzquGeEpDhYeEDfsETmdG7DTkw2CG7jiiJQXnq4NcBy7jRHWccZirBZzq",
  "key12": "5phJ9qygCi3tecZTtrLJ3hBhpzpBxwXuKWqcPKRSyZ7yMUUKdxm7gE93CLs4FjhZLN1tuM2XwPxmjYHkvbWP2of7",
  "key13": "38dJMEMJNDn1dyJc5HFYQhr5LMoWiNwxVdiA1PZVytFTePco1HZUzJvBfs1wXxTmo9zhbRX3cuyoXZyaunfyq8x2",
  "key14": "67L3t87YR5fDMKzyW3u6xVL1SMMfvux6jcJ5DTGoUEhi6H8asCRHxCtGHZ3vJHC6WQCFXUziYkvxBQp9M5WLrRyd",
  "key15": "2gsqTtTFzV4Dj5NG3FrLwY4ieHwhtYBQzirghnBT9VhGKxMUpSAeaVkaRWmk9kyGYKbMjQu5r2iDQyCyE5DrYSgZ",
  "key16": "3aUE3jebfkSPMxMFTkA53txkvCWhX47B6ZwcnRpvRS2PoTLaa6yszrw7D14AwKDChSnv2rWpxQikRLqE5ef3h8qg",
  "key17": "Bdam55cXy2J2khpRBBmgtNakid82wH2raphLHcGb3CXgLmTVm6hQHfhUArkG7QeKHpso3smNzTkK255D1sxZCCT",
  "key18": "2o6afQxtsdkkCvySZDCYmVVjR11mGPApwddBPtHWMDvxfwjhHRtFZ9aB5gVbv6oApcZhp1qjT9wkHni7SZifrAih",
  "key19": "2gaKHURqteoGoYevqX7jTDLJszaLSuGvFhkP4d2JtTSTKAa2dFsaCDNPPcttRMN7xX1ULLrwy4S1k66SqYQxtpZY",
  "key20": "5NPVKwZeUQpJXBKNR1b48RxhAmAKZdYaRSUF85zUkES7YdBFatxeYggYrFtEoyfDrmvKP8Bcnv4GFwjPkzTMyRbZ",
  "key21": "388YRyTbQNsVZ9zZ3DsebLa7ZExgiWu9PcaTPc9n8yf8cWsAPnxFNQBEsurSzeN38jLGZVB3jAMyeZV4vhfTsxdL",
  "key22": "3XmCVcx44DHpQTmBTBQG7XRq4bpHsPVGHiqh6wtwvirjbTm2c9imR8yu7CiNmhfnLEGnztYsBcgWDKzV4Ep7MeAC",
  "key23": "4oVaye7qGgUSdbjrWy23cEBLVKkuY5pzgVVtQm3jbyZrkmmMEeGjnmKQGQ8STFLw9TrFV1A7NuZY8yjFdLzMwEsB",
  "key24": "3ij7qovj8TRAaEqcaR2YMcmMujfGEoeX4yuJX7jZdP4SuBGykNkmySN33dKKcibPpk2fJaxg2vbg59XRJLaJm7qb",
  "key25": "5h9Fb2XMvfLmcuYmjBhtLvSacaJ14pJAhvVsbe5VGjfAmaCtX242Tuuvgw8LAG2hwQc2S11paT9yyP4dFNMutyds",
  "key26": "4Qv4xZJYjtpDHPLrua5Zyu8xRbWX9Eq38mwSDL7bLo3vhUmQEi6akXSYerrK3c2QM9Q8jK5y7jBd9b8rkXRjninJ",
  "key27": "2NUf3VnXBhXiKrRohqe4u2vECb4iZVqRFdjQknyV7JmkQZMz3pzggo8qQoELNhx3NfZfpzsUoYDzdjTigE4FXUB",
  "key28": "5s5nRqfb6uhcw8CRYBpKW4u6pEV5CdkBUmokqDsy1YW6m4euh2Yx6rTtGDGsEjZH9aXLoTCGMrm9iEtjjrmL2TYX",
  "key29": "t4aWU7Y33yjFj8syx76q4LUTn7zUkptffkjRew8DMsLcJHA8JRzNy7ekjce7TrzAKcsexnXNtmEMRk4ewZMRPge",
  "key30": "3JSc5Str6UeKtPiJSumR3XBVZENiHoRNaVSB18hHgEQyMkwPEyARnEyyA1enpQUPXzZYTNxKSznUR2k9b7m7bSrX",
  "key31": "rJ1vo3rDU7x5SnffbFyEhuXFq7q25yPyNZ6PHepYWXF57WsBwsDM3R2hUSnHwZPPoesEozRJK7TY7fpkfynMjKf",
  "key32": "351WUhTurrtf5uiJJn2p2tBqBFMYe6pMAm8g2qYUgBs5sbqS4x9kVrzYoQDWvVs5oBScCENKUtF3wPRXYg4i6v71",
  "key33": "4ysbp8dwG8qM9f7TAzZAJqn1UHzb14bhk4y9x9vTGvjUYzmFVKLDQDjoNCuP1Z2MmNNN1dnfeddZyjrPEbRmKqvg",
  "key34": "5UTuvDAwnSFRJBnKpcHUjaasu2A8mehhAE77ua9Lo2jpx6zWMkAQGxWyuHEN4J8TSBHfC8TFzTScPgZus86r9GQp",
  "key35": "3vdCY2qpz9N2TL83zEG1RGmAmbLXL1jgxkbMUX2DZxTdR4E8aFjuyAz4Mgc59GvuPJx2hqSnNZ6YY9fJGDf1wXUA",
  "key36": "5T3vQAjvhkMYYbsGQENxKY7aiVqAHoJ333yE4Ku2sTzQ8ZzTH2zHDwuKP35pP4egNgoYuNvedKrBETm1bbBpY1oM",
  "key37": "5zCwmsDWNfv4ZBYSMeHMRpNJZvrbVFsXoGLzFvBbZ3M49ZFJaaQAVctkryC8vnGoQHwtx6T8UmrCdYevH5jxr7LV",
  "key38": "3Zh64hxKJoKobv98R7y9Brqsfgm1cfcXZaKmZEyvRWbgFS77dKgxucZYaHxLnxViZGbGNnxmPVgDQwEBPUE1d811",
  "key39": "f8UxrW6ZKP9yqswHLxLHE71VtRsytBDLhQPf4QXLGy5UCKWxF6kdiCrytcnuKPiq9LVRsRqqDchTFFgnZ7xkHpT",
  "key40": "5gyYRD52WznysrHYxiAF6HtS1CKDMDazTiz1RPsiVr82DuYMdUr8Xmam6u4A1aPdZSd124xhqZjVkwkLXj3oNZWS",
  "key41": "fhQEgdqoSrvAGVkP9u65HJ1RR9HoTnMqvFpWUGbh3SqjbNf7ozAVdqa3SqALciLszxbCtMQvjNyDJ1fZvk5vdUH",
  "key42": "3fJBRj3KMeUGHGhHoDkBcsvayQMibTnGdwiszrKr84inTu4oLuAQm2UWL6pQWDt52ZkKEVQfEow52Sm4NCgo2jxR",
  "key43": "2YroQkJX9ybkJykmt5aTwCmTU2tEybv6C9evXdJXoBFR57Wpi2ic62BJrCePREx5sJhGSwDGJ6kUH7R7tGxgYcay"
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
