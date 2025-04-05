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
    "WuvwdKhUvCFuBk2fw1wy4S8iEwNs1ZC97FgwCfxVT7fPs39MzddnykqXSRUDsXF78Rk2WY2ZgifATa36qyNqJKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53nnXxv8NQrg19D7ecWqa3MNZ2WH4afHgqVZm4qayQPx2n4shVcfoTAhbqYrGD2epfj1VjYe28wvzBhsF26mkwau",
  "key1": "37z3Q2ccazJgKa9gMeZ7yZbeMed4HXBfR1CNTpVGZNs46k8BQ5qpi2ZVSL8s56nECHYT3dUJs3wswyFTbg9T6PqA",
  "key2": "MGxwLHeo11DqALj1HjsxMZtdk1u71jNbduYa7jLZa8sD3sHw8HzoPQYUQsyjfENPjR6NWwqMcoHAHhdtcxFpFJ3",
  "key3": "5tTDtd6ryL5zeUXs2gzj4nKafZov7YwUotpRp2NquRFaiJrUPHHmaRTA94PeUcnZ99Jr41Z1RcCuUhkbdtYkon9a",
  "key4": "5TNYKb8UEuuuAnNpCzhKQaK46LK8vuzN9GwuJk7PYReBA8jhcS6bqdoQMuShL6YfZt5e7mYjX4P8zwJpbmSJExqe",
  "key5": "5HVXxWBDUv6MgXpafuPcd97w8ytTYrZffSKTJ3TvviiUVSafY8MxmXN6ViDQvnxEydGFJXyUfv511E1RCWiP7gNc",
  "key6": "5uc2Q3dbLGpJwZpSjygEPMQic4BoodFC6GpL6xYsEM44ssY5JgXDYj5WeZuKfi7Pz7TXb747x9DcNmgayENPQoRb",
  "key7": "2e82zpCmFWB1LFTi9ZYyQvAmfESZwmW3ktYtBPKQeqkkcQ5EW6c6M2XKPYGvoUZ22ZybVGfN3k1BoecjsXHAQyAe",
  "key8": "34nefJM8fJMb5MdrCmtCsB1NagGAiLhMdeP4o3fiFZcB9X7ZdyKmnj19Xk6GeHZZaqBMRizQ3iud6Ryz17H2ds9o",
  "key9": "3Dt1YgScjUYdVeCpwKwiHdWSURyPhvKXETGT8v7jagZ97d9GUq3JvAXhxqV5AhuYBUMAgrg9xj7pBgUhURFWeY3d",
  "key10": "3b7Kqu4LNp7hQ9tbXY8dvt99YsH5FCPVz51tx3ERhCggyx5DSxGdA1qj6sYBEiWJmwWfudrXjo2hNy67QRcfcEvx",
  "key11": "3qbmVYowVVbxhxsg64DJoPtVoejBHsocXptSAThnxx5ZJr8eb2UgjJYsH8XWNm1PHzFeZTY6ZUXu4NsBw9THzYLz",
  "key12": "59v5sKq3Usb1ru9s73kBx82kYKvEaBGpDzXZ5Agx5uZ7gpXSc4bsqCzx3FfQZwnkqY6tkkyQc79e2Q5HxrexazwX",
  "key13": "5N8GqdPLUCnjqfuBhwWd5s9dQ448PHJ6JrTFy6MVdyTGDmLq1ZAsDbqpnnK8aduUpKPDY6VQvH199WGDrmSYyy88",
  "key14": "c7XcCToGnNsMpUMZhShy4NrrZq5nehXWLZRTcUjCepvTCE1J8dedgaES2c96HpsrVdB94ucix663Bz8BmfSHsHt",
  "key15": "66xXP27ZZVgvNWJ3dM57vBDwUBmNJYgfBTzsaP7V3FrFX94w5RB8SxsuAWMqPvUg5hXngwAVT91NwPkFvdaWSxeC",
  "key16": "YZsbGY25ZCdAsPSijBQHr1egJiQCaPW67K4fXDopPvzie9rM9pYQgixHQmR8fquNy4CdMHSAHZZDM8vxRaUbHZi",
  "key17": "32rWGDUVecwrW2m4BZfTa76Sn6sZwrrY3ocWr1Z3zwJV9km1GzdMXSyxw6Dk8HunrgZmbzk3JVDwhZAmsgp34iYg",
  "key18": "4Zav9Ryv1JM4iJWEiLfGE3QTxqmZEBgehZpHcfaVer7Xbw6WwiTskK5ZqAg5GPxSBKLA9ovtcL8iZwfRSYHH5SE5",
  "key19": "3d33kUTF5ankHgLCYXDKN4i8C1Me1sBejhtQnfna7Q3RLHnyBPe1gJ162SerXkR299P2wvinMfiH7Z95D3Ac8H9L",
  "key20": "3hA9UWJCysLR9jQj1Zqe6vRhgsskjQX11qRyPfwBa3ib4NQ3P5mcCfHgPpTBtdWT6nh2Z11HosCvkuqgDf8k5Seu",
  "key21": "3W8yJLVLBQbVMzphQZzbs48c2mpD2kjXGnCcjzWaMRMrWLHJBPDt4dSFMisADE99g3tZaseWqgwSHMfNAEW4vq4y",
  "key22": "5PntDFHUao1BudwtQGM7A1vFUuTJ9jRBrwNeSquuc3v8Lt8DcnUW8jgVd8ro7F8nPSseYRa8hUJLMoxL4kWBd3gx",
  "key23": "3muKJuhYshoUrym6bDQ6RSnwAm2EmtKGu9bCxgzC5VEzfjRzZtBdZ88XTSdvBVHTXkWSzs83j5N2WeWPM1zrrEZN",
  "key24": "2Vcj4WFWvJK5Vngd34HKSNCEpd3gg3yDGgxkaoFi8Gh8xYdgg6MgMgxaGet3fYs6vNXP6XGiFka3kKKaxN1m6fe6",
  "key25": "CySkw2un71DcwSozrLKR9Nu7rTSzEnG5MYKjZFRoN8xx8zi4jsUHUE96X2iXj6V7PW9RRYB9cA7LprCtQbkuabi",
  "key26": "4GTbrvGgA4MDC8KiX2TSDqRySAW7A2dHL5UPKF3kofVsrRk59ZsBfunKsthB7ZhoAnN4fGmuMg7HvWQj91MhoD77",
  "key27": "642eoo2SzJRvfDKfXD8xUAo2C5VWGoeKxVCjVach6hpGVxojg4UYxJLepmfQd1nchoxkkKg2APcRFmCtTMMgM31J",
  "key28": "2mLR86EAnxjg3dzFxGAYAJvRbbDURUVBdt9KPvirkNVH6fjTk8D8S7VjedmWLW1D25vDYNq8gMgDzPs4FE3UdZxg",
  "key29": "SwFBxtCHhSjKBV3x5fWnVWTs1HXymPg616nVC8Sv9SgFnSiP8SFJMePFUDyjtxQwPzsUR42GuCM1TrTHJaY7G7z",
  "key30": "3ZRtMsgGBQk3smjT55vFUCo6yUghY5zYNEoEq3z4eKZWnENVqR4tvZHQA9xeTZ4uFR87gwomoA4M7nuHhVdWYkB4",
  "key31": "dD7pTK5MGaK8FTgwnmD4GfjAp4oVFT1q9yBDD67wYbkgnPvDxjqJMK7PVbkhpES3iJUgz3y1LAaN6fKoQgQoxdj",
  "key32": "4f3SE3pkU6jHj6kXwKGTYAXdfTA7fsPSrCh4aJieJ67ZRxG3hSYJrbo876wuZYtyud5mAzsHuVr5c4zYv5W1rEcX",
  "key33": "47nPuCELhtQMgjxxY89JKZ87kU6DiVUijMTRWZUxSPTbJPXZV8bE8fw8bbZWXbYpWfZrBWF8fsCEWw4N3cDPQssc",
  "key34": "4958a1PapGS5zK2QjpT2j4nrfZBtaWYX7SpKbcPfdce5bcFNCZq84XGkqGevSdeV1XUCsnXcjUvL9m4ehjW3STi5",
  "key35": "3sP5XVLUDf6ZNBYFxudRXZ8UN8dvxe6rNHybNgHjrvUhuPyTcAASRPC9FFxzwLMsqHaVfZ3U61HuLxTeTL9bwTyv",
  "key36": "4HWGhtH9fgzTDB85VzPeFZHBSdzgyPArEvz7aQbvQxJnN5QSEfe3Jt5shnz8QWTDBESXgNGuAm9PVTr64qichYAy",
  "key37": "5TJ2k9XToBYV4uixgyrmdxzkwh8Uhd58CR7EgKsgk54wbEu1QT4UKLpPg7WksXigi9mcz9AWhdZrHeMxtrYdHNnR",
  "key38": "4YZFzfgBUBcmgh61EbAD2PKcYQoGeK2NPLdwaWCKDe4AxGkXwieYJPLHeHjwpCYPRtPMf7fUD3CAeMU7pNZaBDAR",
  "key39": "3tRxJrdoSmtMWgFc1Yy1qi7Mwjo1wMdVfJf1nDLFHdgdExrTZ3WHXwy83MgsV9QcSHq8e59nw1UnajSP8GUzwHAT",
  "key40": "3vAwW7NoctVjj4P4FVtw39VLmh5RriKJtuZM3Y4E63yqF43owqzpiSDV4iPkUh7uX5UCgnq7qFdnk3CwaN3NVDaZ",
  "key41": "5JhknVC1wH3ECQqB7vyMEDsCDFMova6mAPqGNchswFP9RvYom4aezydjBhvekQhmYRadgxq6gZqrzEYqgfvswW1G",
  "key42": "2Fkgg2DrfpfeRDWZu2fnkwcKNsi8aaCB4TbL48rgcM6DXDkjziqJZaH2iR1mbEYNDHnUtJeas7y7wMmF3f34iSZZ",
  "key43": "bfvjex5P9E97ss1NDLivCu7MadgaHrsRiDPHtwmk7A8z131dTArDyVy9aiPwws8Uiqca16ovPdHFDKNRSdb7skM",
  "key44": "3mjRiKbSnEya7xsU3uePKfcMqwbyaDwU5s7cvcTJuuXYDnTJgHshL4NM2YWtGVscUEcuDDRswU8bUq1krpppi6bx",
  "key45": "2ja3tbgZ74MzLPMynLLCSfPLmKhsmcxioXEt5Z6oKWe1fxkzKMU8KQRwioLKWp94tBEoweqTPuLjETZ75TMi7cNF",
  "key46": "2MDv7VS2XyAgWVgWjAm1gvQLvypTVJG93CdgohtPh3b4CGcd8hLwhGnBj2DGiesEAmKkZBwCAkAH5xAcbfdxhsif"
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
