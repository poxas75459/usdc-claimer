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
    "5S1T4o5Z5syk1Wgv9HRDtad6KE6zgd2qRgcdvV1FSUTu31msoj8k5VzoeBsz6HVPk3LegD5a6Hezk3FFTNi5sPZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38SLbruxSMchQf32xZqvhpTF4EKL1yoBdU7LR8Q4D5BnEghBYPEYU7m5yYM5a8UHBAXu3wc7XYZJ2fdJpdzHUFsA",
  "key1": "4bNXMMCCGj53vBZnM6qqQVYoqNthMpgi16kXZYBHZUcCAPSYxTDcwAZwQEhMrtDmGxQetbfCZJv8xKUm3eTzFZr9",
  "key2": "5ev4KHSjpGcoxooWfZbn1k7keqGNWFDNFGnHFFLu4DK4Ec8PBtjQ3XSDWbchQgM7qS3WvynZ6rw3t8SfZatZ4zFF",
  "key3": "BEkrWkqMQFNysn1CUhWjiqfYyr2V4ddEj7gMZAd16j5ZcW9nLHYYgimihzPFRrwcz6b2s9vugMAqf8Q6Bw9Mf1h",
  "key4": "48kTPxNwNpy7zdRnz5mQQvy7YAc1e6LrdJBCWW614RNfyKzL4WChuvmwictcufVrkz5HeoDg1EgPx9X9KysDHDAt",
  "key5": "2XoU3GFeJBTwpnbF5jhHJyDcPzgcLSGX842eQQR89LUtzSKmp98gnehvaHhLvBPQ2HVMJRhtoHRAQhDqWqykBGm5",
  "key6": "R2US78MjbMbohvYYZCSN8kP1P3ee4fRqSHKzmsSGx9AxEpuug8VK6ANWu3WFmxXCbsCKq3wBiBXY4bR2CH5jri5",
  "key7": "4rnuvC4mgRdTvG6hCEGWQGXUH5ek5KgDHQhZzarAL1ARTieGWHqW9iNVUPhvMQYxuvQjiLp1SgwahpKPTQ6yJEi3",
  "key8": "2MvGVuqGCv1y1bpdKK3ehbMWq9m5NX1CeJE2pcBbyuNEYYoaEkgRMoJJWrMMj4TUyd2eM5CffHtVZjp2EJezHgdQ",
  "key9": "2Qx81L5rGBYk6EjnnrzVtRZQZrhgyNy1SKCKPMRg2dJbqJYmQ6rVAjkiUMiBozm8y6fjbFqHNkoumPMrxcciUSa5",
  "key10": "HDmDEKJFmwuzSd5wXyecXX9GrMGhJv2yCtEzGsFoi23PwzQ1HdQh4CVVCSxWB22zaiGFicua4KzbCZsrw7w3hrB",
  "key11": "fJmy69ae4XLQojGyptMqUAimViDHgDJdZyhoVdZr1BJwLNfVcAmmX67n6fhw2ioY2sMd87z6KEtnxQstE5ubH1x",
  "key12": "3T4qLUtJKXCQTBZ7moqCfzU5PXR31D3MDbD868wKxWhng5uNUtEjLDMEQv4f16pBoxWQtNZRfXXyRavQBWiu6Pn2",
  "key13": "2vr6xJMETnk34qCB5grrdqh5SCfD46zaJTeNAZZ2DVU4xbNUPaNjPUWYoa128yqopTyiLNUZ6isd7FRH5TnQeGoT",
  "key14": "3pATq7JqSHLpnBgbZUoA6GRyqLUG853rSFNGhhRuGW6BKG78eiATFQwtEAtgisSryYZfcict7PjzUX5Lra77WJeR",
  "key15": "iFEVZChnNYRm7rWA26uPdTGxpyoGrsnLjRBAskFfW3UV3ZTNmPBDdzvZnYDHZSRkN2bok35zajEhwVvSY4wVvSL",
  "key16": "4wMd85dSnqxMXzBwD9NS3z3TB19kvBmkX4gQhCqFwucYMKBWX343A58BGDGWsyg7iwDV74JruZauQwEvSehQY17r",
  "key17": "3D6bPoTN7HHRV1T9z9Bsqkw2G7FANR62pw7k3eshbWvqfTmZbCECqgTPou3GGmhN71wBBhyBm6LZiDdtya9WrrpU",
  "key18": "4STMELSzSvM1HLQrCnfmfXGNuQsiNbzR4WTG2jwBhdDv3uST42DjvVsNXgmzXEDSZpFuZAbnpm7nwj4D4MP4mF6u",
  "key19": "3bRMvgj8bBnHryDUEDq3MYv6nmqtD8RtxmuT4XNykXhn93tXHarN8RhVZ3wEak8H7TpFcNRYFRx53qFpBrbpUjg7",
  "key20": "5ryZTqasntQiH1x4RC4SiYp2bkVPQtX1Ugzdfppp72QkKTQSmi1r2riRU4V2qFUr4WNT19vxi5MPQB6HChrGNZYA",
  "key21": "WETNPFFxhwS8tD3drAX19Brvp3WS2UU2Fix4rntBwPPa4G6s98jdGnbL7gDYbWb7B6asqVjmstmtQVpCfWhHPKo",
  "key22": "4drrvq6v5RF9pjMffia8sYq8Aewg1LCbabTGiLXj9z1zq6oUHkC9m5jnSDGBbMA4DGiruS89oee9DSH1wQk1MchG",
  "key23": "5RU4MrQup3yu4FDVBC2trht3soksfKzxDHe5NS55yxtivQtU2SNrVN7XgCSiSuUBCsDmxxrfN8Q5YHeLyctwhLjs",
  "key24": "3tyroMAadocPeGxNz631S12THcdJBeVPWSgELCbjXa6umDjjcip4fGe3wHMxF6QstKSvLDZH5urjZe1noDWdBVxa",
  "key25": "5VwKM4WGaL8W7JJaGd4EK3VdW5A9AHnQjvW3Ay8PCynJTXGmgfJjRmUC2HByCUgSsJ9JTATvDA3jEv6nRdtdPAG6",
  "key26": "4Prv79zTG8ecVmMViCUuj9pzc6hUpBDnMAN4HrigNPdwjTTzYMAxKimmeL8MxmSVAMM88to861TSYFDhbcHSwPww",
  "key27": "3wZBdBoDqXwWgHS8b8G7LRbUq7DLr6FrxUdQEb4f4zaimpfGQ1KkH5f1ADjk6nQ4k449gDsUdaFsaakhbw7UniBx",
  "key28": "3f2QSPGroL8CzD1WkMGofJR8R2cKxnNQebRChr759aEnhCFNX6PdExhtYinsqtXZjKocEcAX3mGuFm4eEjQPQTLP",
  "key29": "3ttEgT1dxmFmHgTWJd7XHp1guvpz9brRzbDcu7TnEB9UQnDUpnwkmLY9H2LjymWZ2urZ6pvFSmZ7ov5fH9DKh36U",
  "key30": "2RYboXUuSJbJZtwtftL51FW8thhwuTi2ujYiKafyKzZ8idJ8X5eBN3FUcGAf7iFPg3FSG6ADWhWp7TXGGLVZzNi2",
  "key31": "5LQMdWqcrfSg1i4oXpzMAxqJMBmJcb4xekbqmbVb7bhbopwdkvDEG79teRCYga7e7uhNCj3w2zBpkVstP4S2DdvH",
  "key32": "3xFCbzqiKKBgtwLmMaqJue8pUQjG3RJ6cvD4fowTCVxuXCoRME8n9Jyhzk33TKZMXkNY1LZxWWEcDdgoHKkYb7P9",
  "key33": "4nJ31PKcT6SgLTXLY4LYudRfARJqtd1qPq6W98hnpj5AhBBp9UT493VzLstRmyrKwesU3N5GVFSDEdYY1yfkWWKk",
  "key34": "3eLKCRCXMV79G8q9QBiKrH6pTDrPphp7rghH5yDMTjhhcNnrZoEyu2pWzrkoSF6LNZqWju89mp1RgKWoFyspwjzL",
  "key35": "qCtS43vuzaucUqLpPtHtfMqoWkzmyLR2u6v4D2Z5KLrm7XDjkvuwzuLsBUHCgvb5qo8oCGWSB3ELXw2UAhCMZWV",
  "key36": "3vm1xcUe1LujZWiBiZB5bEiejdyLp19hfaK5NLVxordLZnj6bjZdeYpHdSM8TPuiFcnYsFYEXekheZr3V3qeqrf1",
  "key37": "DHGfVN7kYbPSbzq3zAxXRcQmwiznJ9gxeDm4QvbExfYzA4zpsAmMUQJAkuYiP3WGrBqhT4x6JySdQmDhQLtWpHe",
  "key38": "53gtL1CQfK36dih3zLFZJvcoKGbk6M3ScEbdP4HQxVGTh7vuRLTsVahPg7mmE29TSnXh8i1npLHopQ3VbtGxxwgU",
  "key39": "4dAhX5KPhfoQESKGTMRpsVimD6qpqtJfBwr7eRVYD3shApeW4mQEP7vkQy4Np1xZTFWznvFrLm4VVq2GgRzhm6H2",
  "key40": "26tTU9LHx9BUU6e2qKujxT2WDsC9gkgxKgSt3rxuXf38Bhs1PisLQM8QgHfxT1kU5i8MG5fhFhYPHDKdPofzfFTU",
  "key41": "58GhYmnJnqX2pAU6kx2xiuDyzwiMZbotnc1KUyfzx6ageuwkcRQNEmmgf8F1jqYM3WgXXb9ZPbHw4ZEgA46L8qKy",
  "key42": "EB2KJEF9ofW4r2zdFZ5EAd4wMER5XPTqKV3rnaQtR1kM1VJgADspgCPrVTDdoSwUJm5ew2waRjh8T9KLpaerwiq",
  "key43": "2ic7dktiG6YjFdQTFks3tWN1n4mJ9t6QPiXkhEhpkT6T5oAF8V6qba8APA4JcKVDFbQLXJfsV54jsNEUDZeLhzjT"
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
