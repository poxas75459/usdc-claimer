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
    "XRTuVgJ9Dsee8notThcQ9wSSksd9J3ZeVxukYsP5kMQEBYjWG4P4wH7FWpfyWdV3cmcEcKigzHBJ12o2dFcUVrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bdYMMFFXZNZjymeFjZkAdQzZKaPTsxL9j6Zpw7aeqnXeyFDfexudSfobmq88sRDkPN5uucA6yG2uwwgGfHGFEa5",
  "key1": "2nQjHtyp11jTwyZ9SoeCuERGs5UGeRg1yn4qk5wqyCF1HucJJ5b4g5gorSPb4dAw2mRk6bBNZkJTaHawyhGui9Lt",
  "key2": "3pS514UehrVvSGPJkXf174fhVpXQgANStd1xRxU8SUiaw39xtqW17c3PGWJF3u1gEGPcPH8biB4AjGjVLJS1cdTp",
  "key3": "4UMZeQsRxVQaNzeVCCytdTaAKrXx6V4Tx9FZyxmReAdG6ns7Z8T4gdtV9RUjSHvAwCNqrSob2MnypNwgVUD3d57q",
  "key4": "YDNPdbDboUqviVcXpcr6MrrpYN8JoPxWj2ep9TTV3SokqKc1AKkzHA95AqdZNA3BujMPhxi9WpwEgW9MeDiUwrx",
  "key5": "2nB6kfR7ZLr7hpvt4L63TygQZ57ffQh3HdpSvpVhXvUArAVkZGAorZS5sCdBeAJBsRx4XaWC42xD4a5mFpFLcMiz",
  "key6": "2BVu2vs6TmjtN2BKcy6ZujJTyFhhXmiaCtvx8LyFrXvBVwqcg9iHcZGYZdQCrTjUPiQLHadBJPGCN7XMmYxGDjTp",
  "key7": "sCJXqk8qCVAezdXxACto7Ytx9sd9otjrDzgHJNGsVBuvvkT8YNMPTnbP8NwuhEZYWqBjRsJhPfF24V9bJDokSP2",
  "key8": "4DXfgbzdDoAQBvCAUTdbVQ8roqLYK5poznqm67qib3XU5z1g8Kv9dcpq7yyQ71vWBvLVYsQ1s86XJJ6SBVtSnR8Z",
  "key9": "43x3sgQar7FvDy4Wzw3mn3xN3qf9LV9DmxcnKMfXNPdYW2mB9L4iuXWjyPYEDj1FwAxsVPQn7CXwrZuet1htc8fp",
  "key10": "6agSb6pFeUEPpnihMwJDCFtDXiT9VrzV85fAug2o9rBrAM4m99bPj1dt6RDA3Cy3uVMgpodxfFvFFeTh3KHSt4F",
  "key11": "4krZBFqevWDWAmb6yMVxKG51BP7doQ8cHmjECYVEo1GQx9mCPgY7E92sobi7FY9DHjhbLVG76if3dyXRihm2dJJW",
  "key12": "5WqS6zvepjvqzhN7tn1bC33dWjoKHPH36BP5JM2iY1MrDUfRprFnVH9Ks8AK3sRXm8FmC9UYDiEM3NghVtyss4Bf",
  "key13": "VJtqxacjPRk5n8hhDDo2qF1N2LumSeiNrNdLK5MXC9PT881wJcxohrhkrC98KuF7HkWGDfJqTVLU1Pp1EstwPwn",
  "key14": "2qkeMqgAWcC4CtpfvNJ41XVDD1hWbY3FybD2CMP2QydLkQG73Rb4isQoBExck4UsStqQjhNE5Ur9m9YKJjQzQg7Z",
  "key15": "2TT8bvXGUMS3SekopQLr5Hsp1fUQgucmpYNW8TrWLzcN58rTG7J7pKhQajDWnmvMEFYY5RaK9xKxn6DVtgaJkMca",
  "key16": "5BYrQZFmuEdKs1viFvd1tZidq3hLojhg8zsZj5HZhvvn2urBAsnhyBvciC1BSSpY5H21BrChD1Lu1vbbhvfiMswf",
  "key17": "4MdiTWhhCudCNjMKtf8ELqYu7hxvQ1ouN3q4KisnGMVqXsooAGzxLgZfufWmeaBHasK44k8zYWBu5Y81B2cT8rqy",
  "key18": "4zRGvH5Mk4RE6q5aC3kjn5CiFNS76Xv2swAC2aMMLccr8R2dH6H2Sv3rAhYYcd5xpsp53B8s3outjaAETJmFu3oA",
  "key19": "55by8FVgDHHNgpx7Cfsvfye9QxZ2a5a6e9fuB8HAXMPpmjjywxM7RyGaUia3WBxs8sJ31nBomMh2oXkyUQWb4Ron",
  "key20": "4KxHDnvfqfn9ZvPKDoEpf2vmHaCX3Jh3cR8oC5D4y1nP41Ezcc6rtrKaYr9ikNr86hZt4gL3y41n8biXhBKmx5Nu",
  "key21": "34Un51RYPyD6TTmUqwQSe8J2HMub1XcEQGnsTcnye5qYLudjcXPsXYV5nY1uB6SDsmEQtrkrTSavLquXXFmZdJx8",
  "key22": "3rBvEM1eNAS2gkq8fngFR382V9sR6TVc1bP8pw3CLoib95uktw9JVUpbMCPjkduLMFdbSS6YTCB82ZtbiXA8Aw15",
  "key23": "EEbhPyCSMFxy8PMTXKkCXHrToDvsSGEaJMoYKAAEzDyNrxLu6g1XFTW5e8NB81wS8f6d3g51duchz2DARWHy3vc",
  "key24": "5CovrFEstm6kKJrb8DoHeM5WxedAJrQc7XfVhHHDZ8ne2HatakiJnrSrWSS2XiM6vbUKKc85rLd2CAA4YYUUib23",
  "key25": "3VGGR7eXcntKFNdTEzhB6NWfN4Y51t2Q1c5SBQ5Ae33dVbNT31uB8LkY9ZRAC2C8P93mef5yazPeVwVFfyx3PqfD",
  "key26": "5LrBUAwED1ZhqUPKAXKwgdjUMzjxj22Z14Q7RPVbSxLQLPtaAKvjewEDfm5JK3vXipUUVetey2Wdujwtbq8U5tnN",
  "key27": "5NJKideqRUc3ysMHZnPUttdZRpvNEg1p8wdSf6pa8vwBJaZG3PmtK6NeWWqsc3PCtjZ42LX2kLhKr8ybin1QWvfE",
  "key28": "2uvPQah1QrkoRBXRKP6wLmsoACZNmF1CAGXpCdPBEVa52oNqviHN2C7SC6kWYehuBASuJhY7haLzNy2witU5d9ps",
  "key29": "ncV7foRNJ5qjxhXYvFLHsEB59vR8yRYSRJjumPnhsr7cMS3mRCRTWEn95c3FwgU3dNNMarY9BwQ6seBGQZRR5Jd",
  "key30": "5MZ91o5HBCTgaKcVeXTVMjotvpXCEoJYqEHZ99KMuBNBGsmGCP2dwmnKVo3ifZoirxeUhP8UEaUoUvpMPqQ8zomE",
  "key31": "3qNiwntRbgka12tfv16fXNHBQr7FTJsFMVdgBfBqqSbgFfJ2yNWuEfGws8KeaBk42mcSMyo78RfAYSP3fWCcnceb",
  "key32": "2LbYSCz3MTuxJPhQJvhBoVF5KQ3QqnGqDpF1yhS1yUP8mEMYh1dQ9kiqxr89mLsrBheb9LxV4LKy5wcEPCk1NeFV",
  "key33": "2yzPCWcXF3uQqymzuJbjbhtBGXVQRaAunPnsAfVDFNh918cdaUR87n9T8tEEv3uLgrV2m3JzTXdftCVWiKaSwW3C",
  "key34": "muq3eWStmCqv4tRvfRWJrvkC6kXkF8Xu57Ck61titDAqEBPoWr71eETvhVDq1NDqEbNdgWgY4ig3e1EWrTCMGAg",
  "key35": "GpxZyYaugvQpPGXyApiUE3wGBWZeDgoXwnYMPZeJvZmbfTyHcAxD9TwZNqnZ3k7tFJ3FjiJJvXmGrA5FdiB7rw7",
  "key36": "5fG8AiF1xmnpKXBiWmgbkc7cXMoP1d31JN8nocqL6XQ3CNWLrqPepnMrBBoFpygpAbmV2tmGvKps5rYwTTLkqnnW",
  "key37": "34oNBK4TPPUzo2yofcHKM44Pcpzqu7Vm3mj3Ad5a1iF7ajykYUjC7fPiTV37yvFknxcNbvVq4Yi3jhysiwCiDMgr",
  "key38": "3VjiUHKwTCDtV7QcK4HrZppg8HcCcn5RiUN2coAyvTsJe72ETpr8VcJt6cdpamKcgWXYeiURVWz6AKzzmMELn2FD",
  "key39": "37FgXtZY1VvZWQw7TVBa7BYyrJ65wyjHkkkZ91foaxKoii48aoaVJKwXUJHhxsg3K9g56W6tELrsNFztNTLBM3gT",
  "key40": "NvqoE6DxuMiqtfnHP4wBzp9UkRov4wXFThBGdqrvuXwJ5UKShjyAqYb7AMC5tbGno6117DtEWXLFN9uhATzXc4E",
  "key41": "2Sfw4pXr1USJ1AQQwovXpQDDMrqacAqtQkeBaRuUvbpWB151VBef38P6ruheZUaLnXeUdzqAtgpG2R42tPGjzq3n",
  "key42": "2eeEJzChoLSNG3dhNVW2CrwgQKASqoR8MiKKk5Dxtt14XUeWoDgdtszodGYVjPTuGH7eTMgQMCN6UjR4HK1zoBx4",
  "key43": "2obQEWchNrfU4jtfgrkFddDULFVsFs7gLbZM5v7u3rjbSSK8u8t13FySxtcHN4XJwbggyo6MVs99uDCDk6uuyPp5"
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
