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
    "63iMFp76u9T2T5p2ueK1Hz6th4gV2D3xKEGgHDMVLjMtcKCtoNybqzKiVgi3GzmakhfkinQ8vE5UMcB7XoECPxBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q9kmXreec5jEJ8JLw1KgdRcNwpMf2W247raH37n6TbPwHzSDH8uW9cd1QqiYHLcfk5DcQQVti4peeBGEEexG4ZC",
  "key1": "26gPhp9wucKhH9QwVLqBuMsnhBtb4L98tqUURHFTANxtAdQQHERMmu4PoRKVDB7iGqcWKQoo7Ryr1rKHGxmU3dDh",
  "key2": "4p3BnhM2eMNq5RHv8WtNXx8dzMCSTFekbnCeNtpTgoE9cNTPDFP8oom9CcTM3XfTqxftwoxPfuZUpSFaDUThAFHD",
  "key3": "2x7PbVfSBJynCVWnMNhrdcP9SqZ9vyRtkDc2imUD7Gd4gUiGSYKJnupA7j8er7WdJWGgQsiDzVDpyw5KsMAg7TjX",
  "key4": "4Zs2qGDTchbzpFJN1UuAYeLmx1JnCpPwdaVeUfpXJUiR4sRhhZwZJhjxpxWsMfYzBtnRRSvNsTNXh3iw8n3UEaGr",
  "key5": "5Fet59tfPQ4Am6VcS7rW2m52TYgsj2SZQ1BSJieJskbUur4aFyqkrttnz8aTXV89pGzye2BqewWf8TLAAdoXCQJ6",
  "key6": "3KAYSNaBwBCwndEwBFTygkY6duuTaU5wz9ShqSUcZeKqVf9VJR3p2VRLaDLBHwrQg1kxeEVHJmNihmAhMpe9PKAv",
  "key7": "41UPqFge6YFnQTqVBXRZ5DcTZadmAkrYMDXCjbPL4jdk2wRgT3fNHpBubKtSLjKT9xoiZ1xZbMiSiSs1djqFvmFH",
  "key8": "5xWk2EpKfE2aqD42MnAgj9sxWNb3exLtCn4cLcfQnKJvZz6WDPpyxg7eS5DLUX5XqFqovz9YuWUPcKbHweHD4Vsr",
  "key9": "4axjzCtniKEegjdQbmWsw3Wye1QaBQnNZFyETXQ9EC3Lka8k43MdRT9mb3VB9ko3djN2nrxErBVLyyjHZmqwLiYN",
  "key10": "65czkr6RvA1ysc2E862NdDGqbRM6rjmCgsCQY2J8Tw53tgGryzaHN3DzCtHTTGC93rDzmmQZUx1vukj3XBGoft4X",
  "key11": "4kwmXP7LhoXbKHbEboerMGvmt2k2c3yhtVD9ebHE5H7W1J3rnB7AgrAzXG3U4PSdmRFjVPwrntn4wDosuekYaun5",
  "key12": "4nT4BvSCUpWXdioqcaJMC9MQQ9iBunPizAt8zSkwmY4WFYyuxbaYZwBRJchKegSRxqewHPGFaVKV2Kwy2MfuXUfT",
  "key13": "2qBdmwWbPajkjLbuG48x3r6tUcTtZJsgt7C8YEQi3ndSbim6BuCRPjHMp5HY1NBLtwGWGrAcTH7CmvcpwEJ13xRu",
  "key14": "32EZcbDpynoA1TYYbu32Gg45AzWVs6Mx2GyDpXr5vSG8tzoiDg3kWaiBBkyHJBxK2BoNpeq52nHrwuyEWR8WHSzB",
  "key15": "3LpxnJ29EmKuYkBxDX6K4DtDNCebNschr7p3PGmAB5As7SWw8dRoN9xQNNEYXACpzKthf6YJJhsy2qMXSfE1SSZh",
  "key16": "2CtF6mDKTCvYcwRbndGFyofuUZmx86GVsMiEze762JQTSDLSfNYQBExvkwtQXXQaqAfWwLF8QFN9rbanuwypoKd6",
  "key17": "5ZREigXgpHTo6U2f8P4Pfw4fRJgK3xLf9VUHY4p8NUBz6cgXkGD8RCYy6m16Mom1onrWq14eUVKHQSCaFPmaMWKT",
  "key18": "4sGrg1vMFxR7ivk5qT1HDJwLjVTxTFRjxsGPbicQQPWkzNz5Q4LpjA3AsmC5XKbwFprdLFVHS1q9jLDSNuTDZX87",
  "key19": "2gbzFvyGRQmKAEbHBtVT2S7iDEJUiJ7LwbbxrxiigNtkUCTkEyL2dXsqTiHes8sRYAcpTvfNveKHtr7etZPQTEMt",
  "key20": "2ZHBPo6F134uoiC58TuWfYYCNaZMVapiWQwj26nxJ7CrzkcBXdfa2Sf9NB299dfBx3rLERz2cQE7jjChr4isF22w",
  "key21": "2ALfg4UC48UtogVRAkFMa5DMvW9pjfd939Q9ScdAAayKipMTsh9zxYHftvZUvjQ69z7upZ6EBKAQAjhjNrXqMzPr",
  "key22": "587iEbftqXAqBQgw8fDZBuahRJhATxtFcSnkBuJPTDrjQoX7LpHXMqGfSFspFCgsBGDGD89YCjdHWdYzc9JQVwtN",
  "key23": "35LJFw9QCvaUCmH6UQDzK45mRiLZ7ne1ZQk8qdjjWB8oJHbtWA4Tn8BYKz4gqfWRwGvZ4AzW6Eafei5phm94DDZh",
  "key24": "2N1F6nzF5hJzyxtGmwYuRoPt3Kc9uBeYZtGJAUdArKdSEu335gJwSYnvyPzYWSwJDRV29Po8VZ7kyA1UKPQQwiYK",
  "key25": "5VXcfWheYK59GSVHuco9nqeRZvtjhRxWe4W1c8noC8n6c2VjxmpThqSp9BcgMHkjqpFiMf8GfFR2LqNBc2FP9pLJ",
  "key26": "4gQkBksXTcMy8NRWMyrAwDE8vuWRFScDrz7pUdR3w5GLK5t9ZkzXV2skCXkGXadMXRZmjbhW7tX1pCpDVPtSTuYA",
  "key27": "3e3zMQrfqFtCiGjRwYtX8xfhtHX8znYCtcJspUPZpEFrzRV91VdqmLSf61XAZfEDFHs9mSg1nZdEMyhG28WCLoVq",
  "key28": "5FPsTa3yUTMUjnj6zq2aekNrwYJeatGHvHwvSugsP9gPVYS94sSqXMz39DbTKmf91Bruj1QTBbBxTNPSyTbSnxDx",
  "key29": "5hRhWQDAJgKrEQk6exUVvWKLUYwueuZc6WaATMrddRXy1cydrL9RhtvoZFq1TgyWRBgbaRLegSpxCw1w1LQm45a7"
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
