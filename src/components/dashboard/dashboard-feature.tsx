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
    "bunsPjzHXv6GHLZepKvTGgii8HYpTtrTCsyaawMfa2119qxogbdDdujJzH7f2rmKRB4hasGnNqdaz5gh44iauhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YgS2XL1bULwpBLR8i5cy5baw5Eh2E6TBtxwEt9RZNwoAb2RTyNSkdytBRdcUxxXDUUkwxJsbTz7xAA3Eg3dQxFK",
  "key1": "jz251SfooyPJYwVZV7Uns8mPfpdDZ6sSGoKWvHNdZost9erxxp1wMQFMyB2RfvJAUeyajHDhm8MhLhfk7xwwLFd",
  "key2": "4T9NBEXy9iC6V1Lcga4aMhCScFZopAEipnBUcZr2VucjmruLyrWRuvGiyNduPjQ1sgtfxynQeVdsuX9q7qAP8sbm",
  "key3": "41i9zMJXkowNrgnBApwYWfGuAHbYfhXZCjP1VTtBr29xRacv2TSLwqBpwfiTSHsZ6JbFCreGCVi5pjpcAqsKaCRf",
  "key4": "3MrnkUKs1NuiF5TtycK7o3Cx2omxzLK6wTFbxnsfBdLhe9dwhZuAxUD9UKAfKvdXc4WLTpHjfeRY7EtW7UgtBsQv",
  "key5": "22x7qHZF252JZ9rHLoDqaTtsq9g6cCfH6KPbpBmRqtXnQXEb6xUUa1J9Mb5mpsrgQFAAm9vez5Y4adLnmVawdW67",
  "key6": "2YNm3rwfrBtZFCiGPnFbipK8PphyWiNK9wtdZ2DVWUWdEsBooM4Bk8j2y3Qw2c62fQQVHVmXRS3BEMYhDq3dtgRQ",
  "key7": "26G6rdq437z9PKLupbb4tpCbD7RZ5GxYRFsGBLgUbKmU1ey1r7WB1ZqcyLFHzqQgagiqsoQDcXvhP9bXnqQApmxd",
  "key8": "2TupRbey6AfKVzLq4DZoLniQNLKZ4suXvc138q9dhFRCYMkWd7gnzX6jgPNKgajgL3aJxq2JRqT8x1yem2eqHqFW",
  "key9": "2Z96vsuEfuXfp6VwGaL4pRcyahVXrvBn5nifkspfisZoyurpUkW2wvbTTmYq79wuRofKVkGzRk9BwouxBZN9H3iG",
  "key10": "2CJbXrNWiz4RMGaNcPsgvK1UVm2P2oZjTexNvUkqq4HtsaLia6fSuZ3HCaAjYSaCXa8LL7n7gn437z83mmp2eGTy",
  "key11": "44pPCKoQmdWUqs6KQtee35niGmhBsBw6Yn7ChkGALfFk9fgQ4DmMTHu21UrEzLJftf3HaSq7U6iZHdJ3T3kwRxzY",
  "key12": "4LCo3vidRexQHBAqe3GCeSU3R7u9aiWrtdnXPKvShTSbhf2tYPA9A81T5iBRNNQNLkfMF88NNMc27cFytB3VwWU",
  "key13": "2o5gMpjcKke8LwsjbDhFKqcu2RkLHNpwq9935u1ghxavUmzbQ8qFZcnfX5tbuCM6NWAvnEgrC1pFYNMBTkMLgvMB",
  "key14": "3WNXv8xfdv454UpwuDEPyGk2mdowpmAmbxH7cUQQcNBwap94DhXkHTjhg3WL6VSdvUSctd5e6g4qARB4U82GvVkE",
  "key15": "4p79b4BdwsvdwmSLKMtvZNNogEJsdoFDT37RZb89Z2YrbAZnbmnvzxthMujgLKRoj9d1RxyCqCzWjoPiWk6kw6S8",
  "key16": "ndFRunqEUJRCtYaDhio9aiaEd74uF3faRm9DoVhVa4UXzKwaVFCJcCHHNECmnEBmSdvm3p2hoxewv7yqZ2CKUFx",
  "key17": "KiGY8mhuVtgM11afG12jujiSG2tpMGKyLDrP7SDDwkSnomTHpF25yxRVaWzP33wQ5DRWN1wTxugSayAWSiZSrnW",
  "key18": "3bFVFcx7LJ9gS8RxW65Pjjtoob51P8RQLKQgrSY3rtXefEcHD9XSxAxm4tvia1f12GfMZQuduhGgMdFUC4cJ1Wv5",
  "key19": "4i8xgFPWwmAjwxv5fSYDcBi8yFML64xvCHkZzdQXQYMXHXS6579w8hq7UzrSxkEcgDzHsF864NvjDi4Gch2kc9AZ",
  "key20": "BGEdDbQoty2bL3xuaLZvogtSPWyRpboCLh7NJi56Q2g8JPVwxWgnpgaacG1CsMn8b1KwvJFeTdSrGsHu8Ri8ZjD",
  "key21": "2BUCEz2FutPTy5GvfK32rCamgV1LdjuGuQqFG1jmLMTPCykhX4FFkwRNihF5ZVnNY7kDFsFiYiqY3B68rDTSy13H",
  "key22": "5wP5t3a5uDtoN1eeWYP7K1Ls28WD1pMWD6ZcnkiZVMyR4cbnMTPmiR6FeczTExhHF66i58eBjgpqSPTTAgXwwC5u",
  "key23": "223x8CsPMVXWjVNn1TPeg5F9g8WUKSHcBY7o4hnGFw1g413iUv3A9AoLE17sDabCr6VzPfBituCP8wZzHjcHLSuG",
  "key24": "52StReM59eog59QfNLgyRVCVHeu3PdpxUEHwEquKq1379UEXwP5QQCw23te4K6jM3v2GAJhQPNQwdnXxRz3TD7ge",
  "key25": "439NkZ6mBY4hN5aCGxS226JUfmsdJA2PYUHVmgTgowkzEVXctV7jjrt2MK4ce3TncbuNKCyDEvhZckRjtWazHpcA",
  "key26": "5MXk8ixb42tVUdmfFTVdq9VyVows2tkeq1C3zKS6D8EvAw3vXPsK7FEKpYkJeyyq9D9iFa4N21g3EZQ94KfJg6WN",
  "key27": "m3GY2wTezMJbVieBzjKPEgAoybvzvsePzF2m2NbN1LC2RQqrbBGSXi5bFFPDA8HLoS3yVZhMzAQVy5FMP87NKt3",
  "key28": "2vgwJ1LURnD7gDitBLqbwjs8GCxXqnmHAkSmxcY6bYuyV9v1AmCLHD5fgUTQ9hCvyEpbZY4qrQASxQ8jBXjLKKBo",
  "key29": "s6ACnH3xf8b5bksjaacwy1T6HokpyzH82niiVHdCeq8nhibSD1i4BZFGK3FeiQpobDHDuBgDK5L7Eoq9CFEtjLz",
  "key30": "5wRJeCyePzPdB6YXG5giLaXNV9AsqedsmmS4U9gHLM7VMDQg5hyZ3WqT3kk5L1fXVwsM66pJ7E8C8X5CQrLYMyZc",
  "key31": "3yfaNuxZDNeHvdWmsjcS5sr6ii4zJYSYfVgNiDQMVAbVuw2QLYsq9EWoxtrrJnumZ12hHpv9VxRkxE6XKT1PSPen",
  "key32": "3JpStUw5rxuVzrW2m5kgMbZGQJSATBmz6iuHUWiYJMUD3jcAAXpSYc3pG9gZDeMDmnspSmrEGMceQm3qE8CnifP1",
  "key33": "S2qcjjMnFt8Mm6KyV5MEfB86AqeSjK7QTNVWbGGGEJvj3b6KY4JMqMGjZU5S3qMQZoNDhfzG5Yzayc6rMjh41gz",
  "key34": "5fQG8rysLTw8Dfbr2moouvaD5bTi4oT2CRCm6rNHTSqpe4Cg4rb5NJMWmFucNR6BcHfNrerHAHg6L4iRam5oEsHd",
  "key35": "3FMvGVeoLz6zfRgvXDriStTBGsZ5Q3F7gmxwYoybqWg82V9NqtEnQbFQnfeSfxdra29xymUxhmqCWyvGG3tEM1eH",
  "key36": "5iFsR1TkQvP1HqJVx79aZH6TG37fEuyAZjfwueQnvnevnf6Cs18H3DEYJQb5vrZmXS1w9b9bfuQMkWR4bZuJgEfA",
  "key37": "49TediWUSuafXTj5qFsUrTpmPhk3BozxG3ZyB9kGdXoxcvBvxPAqwv8DaDMuLR7Wp9Q1MAJuBskVctmwnQtoksnh",
  "key38": "41FnggUoD4xsShp7V54d2UQGxhUpqNhBUZpd8KFrnccGhUGrZeZmExDb8MfoeVNpzwTGhMtBTWqTXAb2H6KYcC2S",
  "key39": "dQ42sVNobQ1UCtz4Qm3TKrADdrkcwYsjFHFr1JBpCLa812vGUicawdiVuehahuH7sYRi6Zcm6n8GhcycjpTvgoT",
  "key40": "2acfMp9Q1mhEExCvhFLpZ6xX8hDwJndgERS1aXMHBgTRpxRkVgt3dcAt1d8D1nEUcaYPibM43fA4ENidmF8wquY2",
  "key41": "5ZKQPxLQCdSMsnN3w5VJfjDjtQHRGomHzX2jC1dNuE4L7CVfbcsLmahAvkWgsixusaD7HZzU2VXb9tPCyGk2EhSX",
  "key42": "2PbxJDMWZEpPLLHa2QcpRhXjtt1etr5vLWZy9tJHPwqAjHY5nm7zVvESY3HqTarEeeqcntuzmoF9hko1sywqVmuD",
  "key43": "B3Gc6EDNwtUbenK4joBbJ5p4PwYBHr6M1vnEoykSisraPRHCUe24nqvRSUTRKXu258597rDVHDATpquqyrJEuxK"
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
