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
    "NDefKgx4b21yofBcNjryP63W4aeGzSeFA4Vw4GKKb5bYNhaFV2czr3JeA5xhuAHqxMjFJzxNHD1N1Jte8XGSX9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XUzD7HLXgtHcweW9HQc7ax3y84z1hRz9bQpARMoV2RSp9z1FS4WtDAjHGzdCabuyycukN76NThmjZLLvCznnxkM",
  "key1": "5cfCWoCj4xUWehC5HAF1W1BgHeC5TwSNgsDFRxQ38VmWNQr8UekFm6gy3HEiCpnH9YtPxwJrFKJoPMNAdNKM6nkx",
  "key2": "3M2uFe3yGcaGJoKYxmnY89uzLdmvdYhtNJpHK2ZRCCVAPMfgaGhFtwAJyKXGa6ix4kUiwfZoLUDLYbzFH9b2ny7x",
  "key3": "23gAnZhbXS3qswEGBitwnGvMpdEExVeTPq8zSEDk6GaPAaEXuvqfv33H8G36NsVEWzM1d7aGbj1WpWTkBZVsTgB7",
  "key4": "5473AfB4b4Nnb9Kk4C42VtgCpYMJ3xHMKhQWGaXK2p7ejVCYumKsgohJiKGqBaAD1NRY1apDXfbY2penNJuu5rFd",
  "key5": "2RfLMiAQbR63cMkgZbY5PUFTjwngLPmzBwpRhR558VM4J15uAK5ePSVyLV2Qh8oTsDYhtvBYJDVkVNvGhFfbqh59",
  "key6": "2nS18AVp51wv5qwZwbjRh2G3wzFf6CxrCG8okR3Rd682gbP9zNUz78g1tpwVjjoHDmMzgxiQXz84vaTpe7Jrzjge",
  "key7": "32XGe5cGz3fovHKfVPfDPPzVw5nYhPwiLFo3raMZ6ZH9cnzLbKen63BJkcjpvcuzHymagzAvRaeDjT4w9iPQjARM",
  "key8": "RyDb6Ti4wFKruwX5QrqiNM9gq4eDYunww33svTSJcMnPXEw6cWKYJi7c1awYrEmFwMbxkia3oZXAhyHPkJUsHQF",
  "key9": "Jqzi4ir6L9dhrG5rgFUcA2KZEiQxeGhnLPUHZXqPEtiy3JjfXYkqzx86ske4zgAeh5HCFPts6pFhZFZtJZKzQzt",
  "key10": "3EbAuzKMKpEtZsnfCFjumTS6gYuuRb2zJotQHxztEAfvn6bSj7Aj3EGx5psN2xmHFj4h77q4qPDD8tcyngPAFsKm",
  "key11": "5fT4pBfxrVuGkD8kPmP6K62EjENFUsDs8Th7AsEnUxnDtyDsjofGdi9hTWiemFa1rxe12aubL9ehRRF1N4rgU3tW",
  "key12": "3BNRdo4tomcCZ2fziSgXYodZZrHgvcsm4wMiyuSib31AEEgfUMq3MSCSSetuHceJs5QYDbxsaoNoqxqxtrpDDTZK",
  "key13": "5bHyJrbSNenPhmKzD8XCpH24cZU2sKZFwxCcbQiPuizXEJNpi3oxAfvtzXJdbaADyAPgqQ2idUHUCPbfA3mupxjr",
  "key14": "2zMrQEaUe7pxH3SGPT4ZwEfqQYriifQb7QJJCGf7ZwP5d1C8SGzeFnoogNf6B84ReZ1hdgatyVVSx4kXyC1Lv8UP",
  "key15": "4396ojXCrnuSMyCcC6yCAWTtsaC1w7zBuh9QvsUyTYEyLccP799g773wDf72KDErjT8kfZMkZZezR11J93c9v4Ef",
  "key16": "yicRS2DA2Dc2c8KrwLVPqTbQsWxqm8Uz3vKEKybDNnvYtv9zs1RUBtvh39k6orePGr5fRPWCCgSwLzgnguJJwXu",
  "key17": "4XtnsRmz4cQzyJtcre6bxnJ6WFjc5a4LUPW44gjfzCzisgLsWHf1wKhiUDf4UBvBo8A55hCRDDM8ekT6unAB94He",
  "key18": "frXjazFDofHAVWnUSyN1uQkkeCPviVatZ4vVA9NVYvzGsxZY2SzLQQanuY6LUDoWenvuMwn1A9yq87FNEX2HVQu",
  "key19": "2SHAaqHnR8zBng8kdABXqY6czQrvJzxUcqwnBRRq8FSpuHdCUsd6PgrPqs7NXWjipQTu3WBf6LrhUUhY7uPrwpH1",
  "key20": "258GEgZtdTjABELbRxgviD3ghMyyj9fEBCBFBpEYUuDMj9HnSkRYad4CvVq7T7X6LCtRCLzyxLb3RfkGi3iVW2Mg",
  "key21": "61jdf7M3ggtc5YfUeLFQxJeReQH6RCRMP8Fx4F3hCmmw8ipvJ5fAsoynhNGH7gCtvvkpHzzUq8kW1FUhDAN8aC9B",
  "key22": "yXMmaUhux27gDGk89n4r6YwQhTuMKxHrSve4pj7jpUCSRngh8kFif9nERZSC4MaDFcseKfGiQpVJgCpgF7VGXNp",
  "key23": "3o3xH96HzroGjsogRGiG8g6JeQ6GXyJUMAqsatiEMUj2sEx2gdYqLFLwjgcRsLhFd1byJ9QUquqUc123XCMF4CV2",
  "key24": "3fE2DQs3Tiea6PqhBsj831aZkVuDedr4kM4oezWyi1ETYqGP5TgozgWpNzTaqit3fyuTg6hNAwxheiGRcCuhaNrv",
  "key25": "LGPwUgJAVgBTpMhtpnBboEFeUduS87jMk6UMCVkXWE1azfmnq3tYSbXoQhpAtEsKm5ZGSXZzqCHe4Mtbn4qQM7K",
  "key26": "5XyJcQTgd5njBbJeZ928gnXJjhCqievQvQxRKjJ6sUH68d6cn3aAFia47q6ZigH1hUxMitweBXNFbusxvYNR3eWF",
  "key27": "3dXqgpvKPyn5Fw9zC93oNwsKh8sqRqqwcdBUyTztuERpqosfeQ9dDJsTCzVK8fmc1WYFpbWhhjNNpR2BgjWNXQj7",
  "key28": "QG7QG5DeSjCaARY3uLyGB8hBmhfaHyf9HqsoDNcf5qqjU4Bic9sQfwswWWZfyY3eXiLqbBy32sTp1dhHosjRUNP",
  "key29": "4o6nx63kqzcnbweYCgr8qkWBC7H6Sy8iX95UJApoV7MoRqNvtofchHQzeXFLc3GhCYvka7Y1gc8iks1Fi7zuCDq6",
  "key30": "4sTwA4s4poAdDzdgUzcAEfBShViWY4QbNmT3xpbYjyG88x1aq8FUGRk262J2f8LsbxKTjQ7JiF9hAu5xyZMJp6Mb",
  "key31": "4XgQh1jEnZWiyM7onQQPkvKoMFVMdxWrppm9yn8GDhoRTw6EH62vxfQz1cKsDAa8W7N5tTMtL2odhvAcRgJp32oc"
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
