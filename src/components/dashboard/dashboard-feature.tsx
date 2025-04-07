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
    "59CAm9ZP7d7hC3ySstDWoiMvgUrskmGr4emDaHSDuLRDY1a8nkGdVCeeq5H8cSzTFP7pMF3f6AuwSKUbgvUgdCte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tUET4toioaU5eQttrE55DMskjXWxMognPDH89qddSfWBcttrFzBhsWZGMkKcP25n5Ykc77hmsqQwVuMuwhLPbjv",
  "key1": "2XJHxuNJQddVX1jUoLkot6aQzYoynWv1peWkMjWJY5ka2c6CNd1ueUtcMcgGaioUtuFEgvQRtVZhRsboaBvtm5RH",
  "key2": "WjJyxe4rs1ZfUKrfrUra5HwB6RiyFTeKNqx6VqwodHnmbeJT5DPmSvop4UaE6UUBkW163WAmJF2ffJ5pVrp7dtq",
  "key3": "RyiT5ygfcqQcZACYWqx2ay3gAfRM6B5RHktsyc6c4wksFWbk2yGe2Sddc1x8UyHNwQFsk9DXBDabvUFXAMvDk8X",
  "key4": "4DKty5exve4a1DoWAMUKGyttaMNKMxJNXtYVSe7ru2vxoNaFvfRXQusnCebhtu9ZUcSrhAY8AZtJzrpGm4mfPM8i",
  "key5": "3zFUubwexizTfPo1uEVxmwx87AFrTuzmPufoiwMqH1QxsexgpzeczQRbYmC3E41TyNok7NyUtkWTcEYJnqBESijR",
  "key6": "dxxPrLaoJzybw1faLbpwx4hssXDh11kU5UrZgknGCjzer2rzf2fp9mHcR2o2h7XJ7n4bFkWjZyZMiveR7zVCrZV",
  "key7": "4zxTBAUFRB21Ufqjpp2Uf7W8F7FXxcWRUpXNsrwrWUtWGV5bX4z7NcUMhcFogPxGfySidLvaYPBLDpewNGSLece5",
  "key8": "5m7NocGzHFbqoWQsoQdRQReCpZfDUKp93U9qFLdQD5foZpgFuBwncwnC4tJ9z7PGb8BynY7Fth8bDyVVhqQdT7JV",
  "key9": "a5DGzGtKUnC2ah9Qk7KCSNCBv18NjoyUpVgND2tP88sC1zaQF4wHSG2YEmPaNmtiXNNTbJHZ5PYQPHntqU3Ru4d",
  "key10": "5tvZ25fjXdsQByH62x5TZ1uZqx9q9cVoQ2FEsYN6YS1vSAvJVTqtiyx7ncg6RAfmeVvNGyt3csNbvuL5RjjzLaH4",
  "key11": "2HWPvcNKp5Edb2mBJC9mehZBmsAbLefnmBxeEcUFxsVanAZxz2Fb5dp3Hnw1QBJ5FWcsdDSzt1wV9PkFSj3wzgxi",
  "key12": "2dxMVXeDgGyWrJS7dQDNQPggw85xAsKSYBxawQrjxhWMiXNCgmpEBoDHHMxGeKKQvkP35HuPdsmkC98hjh55gqb5",
  "key13": "66K6WFpSoQiy5vNGnRbqrd9dAmzkr87pnTVWjYmpsj12aeFMFztdK6me5UsyoqXU2jEZ7dFjkVBbZQNWvwV8Hgzg",
  "key14": "4Dq5YSnd4ABDqjVuwzF4kibfy9qwwJ1CVMeQ8YSY2cGXNc4VepfLRdKScHzCwA1eD9c5kZ3km9oDN8pyYFmokmaD",
  "key15": "58SR78xDjgJygxNVwXJ7HUUb2BXUJC7M4F91tDepvw5QDUzV4igCr6PU1FSZkPVMWtX6jPsmo5Pyydhu5hh75FmL",
  "key16": "4TwQkRZHbaMy2vHAiHs44W5o5Q3wsdA3UVSfvR6BFRwhfaRiMa4wYE5XJkuATqf6a2NU8b7YQvViq7UaqDgbAm2P",
  "key17": "oMmnXLzEbgiJoExWgf2Rp8gPTX3SirrBKVGA56vMBD3QhdjCmHz6xRUMXU4oQuLcUhyyrqtbKHfi64XXXX3t8VK",
  "key18": "2zzBMjodC9QH57JmwmvJvNwsjJx5vdQz9WrAhf183bEP8DqCpoT8Hp4AEBqyXP2YWoi6Y8YQ7dEWedwo4zySS96V",
  "key19": "58X33rg3R4UDd6nKXFezJCGYxYi4MxfPfk9xsWjURw1x7RQqTmQVcjkRZZLxuSt4S11vAwGGQPP9QirKRWCT8Nqe",
  "key20": "62vkh1ouMvsUCLrsmvfmMiynWkyzgBtjhT8L5vrk6VwhYupeSLd72edunH1G5vZfPNu3gb1gRAcFSWaLF352oEXt",
  "key21": "17UC8SRgy6URyfRiH1T1PRVjhGceLNExBMCiYpMBzqeXe5JnkjL9sgij9S6FTNo6y3dFp8Fd86Fv6PPa1F3dMLc",
  "key22": "HtqdwnmPLvoRTfVRPuMgNnSfctfTNMXZLmGbskZDX28cPPM429ezt4KnotqynL3kTSxyc12KjxjbGgDwSMZusij",
  "key23": "2y5uRPZx62r98oxqp2eeypQQ9ev56k3xivW2Q6pyY2ZZqmFMWq1cRuUSpfnJvWEywEJyxcJ9hRU95oiKU1dymtb8",
  "key24": "3ZGRGhEwMJzjpwKF4PauCm5sDKjGJnXkZhScFsCbsLCXaUffJ2jeyBKme5rAr8mKUSuBevJaQvMT9oifiNwd2wQr",
  "key25": "4F9MaSTBbkwLxr7BHWXWaEg6mWsQ7VverYHWZY2RjgKAMKcQL51fbVfdDsYiVqVv9tfmov4MFpRmbbKjj9LXo1vy",
  "key26": "5jL2hnXntPqivrh6rrTpGKrmE2uXNCRvUYABAvdm4xWjMWNiKxSzEda4oZXP7y6LV7L3ueNBFYatVfUx7LezmYHa",
  "key27": "5xDJBvkQ6TjmJg2Vcb4QwMXXJzzVadeVJCGvsVEFZcC2wiuNpomFwuPDtkkQ21rJQGBY48e2ENvEwbr9Was1wN2E",
  "key28": "3Tip7FVzP6cbRkeMp8K2fFTxY1v55z2L9hgHdLZjyyhLn6oEKRVeAnh1bCCNvcMScHQoPP5KUgiCC9K1XQ7rncv8",
  "key29": "3j8HyLjBCTNyirmnSspzR1aroapis7u1Jw1kPZgtdLUTvz1WHtorg2mxKMZ2fKzgt1RUoyo5QoJ7QYscJ4AxD3XF",
  "key30": "4Y2XgoHrHiuLdJp98Kk1jch14JuifFEirrjojDT2mVdj2qvtFntAJC94sQx2ghmrCPndjnuQ2gw2rmUhajDekfsM",
  "key31": "4vjxaxWWBtQcMyaFGZb5Q9pf56QPxigAJSKU718tAxTaf6hiJTgqA3fUtVpybrfosXbMBg1vKo3KwWfox3ewoeTC",
  "key32": "4maRAVauUc998F6BFUqrZTuUbJQCwK8zCtbkrAHAHGE14wRcpoEgTxNwGHZJYgEURNKcG62o2eZ2Q51Pg7HQJUpp",
  "key33": "evSGzYSuojXEBEKkUtW63wtv9dDgV9Sm633kCXjgGSQ1HM2us4a3yodD3zXfCYdBwEwcnymVCXf4LtcKngwuB1X",
  "key34": "4qgopGirvbUKvKRgebrCv1iWi2X2mKncEkZJpvNYRHUbfda5UjJZdAReVDGDf1NtCQ6zuqSDeppoGHe9PMHjLJy2",
  "key35": "1Cc4BgtW2SmZHtKaxbM2rGX55hyKwhaVAam129a2mfVbiiu4vCUJ1bMqzkAAyJeMqBpFBZ8r9q66EhfxfXqSvLa",
  "key36": "3fkPxiwjbS86oEmrJ529eGZcg32fL8szfWPRT1Gu6P8YE47VfmB5N97wh2ibuz5VL7cNQJ2M1eo5Ycn5mw57tZAX",
  "key37": "RAFytJcDum3ec6AakxdcZjmUjgX5UnDrQ91oBEQAFBXitfnewDBFqxgAjxrC8Y1Lk15tirAwJuMJhtNQNuDJSTp",
  "key38": "4sfkjXie3KnGYebt7e77aGZ6AmiF2zT3WMmCSMKz9phcEB9gnwmXdPUqWT3Town9NxDWK1QK9EtvugxCveCvYaC6",
  "key39": "2psGhCeLo5uovotSTMUzCcyZ5AjY7rPtZ9EKJqDEKxXrtS6txvWXKeuptYKvFYxMrucYHmST55RjtytczJ356RzV",
  "key40": "4wiaUQPC6HEn7pBhcUhvzHQvVEaZnEUA95k4s7xKqU1HtmGnXAfCiQzRmo3nTkLdDZZTDsLq8ppg1FUjsbENXKFz",
  "key41": "2HnbGmdbMX8TML2bikRxfT2Ut2RCFAy8TsV4FwK2ZvbC6hoLA53e32DBS8Q2G7hAy9fYjCL4U8VLGLJ1h3Y82CcX",
  "key42": "J1sX2eNWw1kmTAW2y4P4nSkwySN9io9816rDj42H4Xjz9BxwpsRWxwZ8CABiUq8JQ6ysFHbgSERD5bBafSLJF2Q",
  "key43": "2kANC4KeG5UnQ8xc2iLa5kRFPdhUjDcccwNHMAw37exytD4VhfwGfTjQDiNQ3F5fFqncHdLpiqb5FFkiAcph8aGn",
  "key44": "G6V3a7Yhnh4CDpob6rW3LhvtMdaJTCmCuSoev3w1ycg7msj8aWH6MmdDoxKvMB2TMW3shu28w2gMRiR3zZSjtgf",
  "key45": "aSm8BHmtpGB1jdW7VaS27UWbTtssWoW4ViqYUoAeqym5ExsWX1J7K8SKjEAVsExbwNpjWJzmf7Q3tvEGQqALFAZ",
  "key46": "NB14qTk5Z8ty6CLSPN3te2nd91csPWGQyib2VCzjd6hP8srhxaNmW4ar71ivAkGRuwQ9waZtb3zm2ntsKbp9AwX",
  "key47": "5tpqfrMU7C1CU3E7u8pmVhj816oJjAAD189AxoWv8kbgjjNV9CoaHxHtoqDmpDZNEaw6TL73AdeN3QcNQMgFANMa"
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
