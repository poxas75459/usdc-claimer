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
    "261MFMs4TPgV9KqqFfphteWKLB4CzxBpK4r1N1r1F6PDWTnQBQkujKKqwCSSwibkYVaJ12GnFcuDe66Mpaa6KLbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24rWjyei5YXVVcTDRTBRnPcK68bp916mTKMNEDrx9FSjgHQBqFbkYTJNiQdcLcki6XJ59bXhtqy9HnmzGuFa1xKC",
  "key1": "3gxWgnYuoXkBw7JhYwxq5joa3JnZTs2f5ZUDPGBJgbc1UomUC5Gy3bcV6icm4ECEqKRR9B9XVn4xjtaekyCKiuGW",
  "key2": "4qhbpPvJs8jmuuUH5ky8DCffy3W8pZjyKA2g6dZpWb315QkLL2aTjQZRnNLarvbmkDMptdcTKrZVHvvCncGANiLt",
  "key3": "5F24f5rqG2ZxBkJyz4S3SERBVBD53iQb3VELTkieA6HxdW2YLHAqytCUopg2hmnXqm96UMaS5ockbkk93QdgDJuP",
  "key4": "2tEChC3EJhLSuK4rsJCHUD1uCYHwtaNZTXQkzrg2Ed1q3xv3PLWVJS7VgrTWjqTKjVgaYfwu6d1eSK1i7Yr92nUT",
  "key5": "4BfE349uZ4z1GF56Pv1toYCP7tVPNHCWMX1uphBoyLpY2Z7A9tvSHoFwNrDaE2a1nKTwZ88oRyE8kuh8vPj3LMSw",
  "key6": "4R7xrRztW55uyfhJKSzd2Pf9NYaxXhAYhdzv7B9stdjC3uFvSLPRuSySTajvTJj5qLMrtQ7gp8yZTsmK5htYJHLQ",
  "key7": "51bhLNgnj24MXtC2A1sZD4wQDccjcBVqvN9RCjr2ws97H8XVKmAhti1iiadaSRFU8KH1fRT8yiLkxFRBmAArvE5Y",
  "key8": "33C9ANdxVy2FEDLF48Nmg9Ujr4r8pVQuzuCEL5MKtqe7dQZezXiNAR4aLbWgHBrioH95ZBSY9cCpHkeaUBZ66Pav",
  "key9": "263aq7dvAHY8dcD4xGt1ZHWcRdY8C29itKpS2dJ4P6dUQMDVwEJXJm2L52DhnJHnEXKhKGTCfjj3oi5AXBwDYY9L",
  "key10": "4mZgM7N7TRoKnddRg3tjzHM5SZx6zxywSGLkT9rxyccXtkTBjP9ySyJDJnr2B95SzMxyxp4pMm6oLh36V6H2UCjd",
  "key11": "3U8s7XHUGwnTzUaKTEGX62vVhDg6swGsYLPnKS4CtKK7KinXSV6pCwAkkCfYYVSk29ZbUjKZ6VxSpFemEqJvmUBc",
  "key12": "36sxb9UEJoFrBoGpPgbDs3eyCXgGmzPzR1Lrh3EpKd6yuzdnMWm7BJkGZDiryrxpxzhkAPCTu1AEWXRnZj7bDRNg",
  "key13": "Lfx19Pe3s3XYyjfZKCKaum6YPs4EPDKiYeZekxkkgeqogFKV8rrJLkFrqhiPnMbHhC2uffL57ppsTiMnstaeu9k",
  "key14": "4qiu8CEqWcCy8bufwsZNrohWCWL9GsPMaioBKV61Qab6YMvVer8F8TZErKkc69Bassbb8qsETF3rUYR1iVCRcvCC",
  "key15": "48ZnYdfxyqFhEriPaBrZLFGbQnMSFoYJVeJZxTM4sd36sh1o96ZiQZjuSKgHKsNdV8rCKb5Awx9Cu7CjE2ev7joz",
  "key16": "3ZG1X8s3qMX47kGbfbAh55MtH4ZVPtqUDr5FctF3SYAPMU4YsGFjvZatkq1FdbJZweniLpwQnpqqmoACQEULkbC9",
  "key17": "3VHSHUHZjJq1CKsEQAUhDCaXG6BUuZshKxUX9FGSxQZ3r9j3cJJbpSG7jh1ET8Pf2LTdWZA6j7kk66wQcdiVMrcA",
  "key18": "49n1bWgigoXgDnqUfffgVtvMV3gBMTV6VP893wiqJwao8rPe2oFUohJvn77e7LFcaU6v5E3LjopYj5TVLyJZKKun",
  "key19": "36C96tJmGjZ9ECj19W9KJp74NJQP9c5Kg2XvYkvzANuVUvDG4kSEbBahsvNVFp8hgkg6Q3KhXDqAfdJi5xTXtbCL",
  "key20": "3eWhCWRKYTKCXSbWSgSr7uBjMF12KmQNo45eHMbsXRVAJStP9wwLvBFGW6YGKXeVbtqJBNpEBf8qMJeGgAZfHSC1",
  "key21": "5rHuUwxL1Hq8neQSrcELM1JXvBEGSPMXDJF52FEWouN56XCkeuiKk2oUPmQpZyvU6WLvrJ2rRDxCDicnJ73SwA9R",
  "key22": "383MW53Foypqd9NpKA6ibyaVq7eCWQhFKGJGMFxe6AbeXnCquYi1BYELSuWhc1hEjViXozwngLpcM5FiAk2ANs72",
  "key23": "5XdmNHXexq5gcdUAdJb6EJUhQAaq2A8471ka4rYgqNHnbdGDaMqYkkCMDsPFbMFe7QNcP6CrpsZxmuFm3KRXd5Vk",
  "key24": "3ECRdBKcQsTJB4ZMXDsn33ptA3udPFP9VAAnjjoZu31Hc9yaAaZaT7Y8KUVnBYifhnnwcRGpHHdmiVYwduT1a9FE",
  "key25": "2yTCgQGSwaExdWXsoqeSFfEXiFsATFeZUABHBNCGags1qzBrhDBcAn22nsSpbtU81yTbdKfjmoUJpmdVQ2oLhY13",
  "key26": "44S2qfPs3fbvuimTD3RNm6yjjs2uBjELreCwMxkhSpFWDwJyJC4riks3i6iGZkfhDf9hBBc2yapVn9sUWBebRMQQ",
  "key27": "2ULNZTyVMUd1irRNDYxZgqqQCXChUXi1PxkAdTYq3DFB71p5wnEL3xFBYYT6d91vCNrQGDcvTbXYzLzggRPwNb2D",
  "key28": "QhRuWiUB9vKs99YTHxe6AK5Ru2Smx11asGFz7zAumo7PCN8C6XMpCFgkeKQNHgpRfkwLyWejhGVFPHEqihV6Z3v",
  "key29": "4MSmDXBT2AqQUaPkff3G2o9KzArPKioJbnfYSVgjkFq71xQkkaQyyfsHUs5cws25smhCyYxEVcP2SVVmkQnZF6Kr",
  "key30": "sTkHZXzEvTXmnDBNRj7fLVvh64nQT26htZUZvKsu7dHcASaGs9e6AGf5ZTfb5WPuxnxi2PBVj3LvgKn3aPa2FZ3",
  "key31": "2wCtU1RrPk54dxzJtZ9kN3F7a3AryfbSwG41DQVov6wNG3sBKBBoP2RJox4madQFkYneHwKF561puFnmd6yQDGN5",
  "key32": "3smweDWP2hqMo2eT9bXfvhzBskPzDE9iCQuZsrXvmETMDFTSaUX7zautUJPpHAQzvC3Me3bpNvrib5HyGdJ18HCt",
  "key33": "3Q1XPFEtJwx13hw8MRFD9Gqb5sLywcwN4jWesmna5qwGXexitQHjGAKu3L8UDUAQeWuhubCvQpQzD47BHJYteQhh",
  "key34": "DDytCEJZTpaufFhb2UP3Q4eBwVpeUovcHAKSBLjLfnxWVmJnbiZKkSexzTjntYSpVRr7TvLD4QZVPpp5M4UGmrp",
  "key35": "5zpwzjnGXFkXPPJov3MqKuzjARTu58ECFSQRoDy2AM5T2CzM2CK9sXz8efA768GYuEbb3Ky3ArD2ngwCuTBzJB7t",
  "key36": "5X9WCSHoBr9yDMoJwoskyeMENVqgMxdVRJaWbbWUtgoVNxbXNARi5bV4miGs24ApzVGFTfi1k8RSDipvidXQziTi",
  "key37": "7H1qYiWjR4z88cDy3rwHZDu3pfubbNh6ZoV9o6bCmMPL5qiUMCx7GGZU2d7GRfBVGPYGKy1er8vTWoqrAKyf2od",
  "key38": "5Pr8XgxasM4EVierDjTGMcwBT4dVD2Mvjff4skWs8fpMVkkJbbPPWp5wy1r9HGoEhFgRKGDfK5yqRfb8xjqiznx2",
  "key39": "29tCSZbF4q2AED6K2XDmmSruF8WekRruJmTLcSsyJ8QRqtGwZFF6R2koWkpifQ2Pk8Q9Wc88Lzgruz7mgWRUrQ2S",
  "key40": "sKrZczeVpXCYXhrXH88MGXh3FCnmd3gxjZRgoZsoa9g6HtXDxe9ZpDmyvu3BR5FWNq1qGH7scfnoGNQKjVPtGz2",
  "key41": "5kKRREgXzfaH7XmTWfNDhNFcFJZU9YZhNsnTq12wEu1933izd4d9X7ip6xU23RJ2wrhNyEJDcgFR3zaukJV6sLMA",
  "key42": "NJSvUNKMyzQEphk5DZ7eHfzyEp33LQWXK4W5foZTJnKpLn1826tk7NvqgYkVGy8j51c3eFBfJcqpReXLUg391Ef",
  "key43": "3nqpUMaFX7ztQCc4mKdYAbgoEwCA5uV7zFnKtPxGxyGvU7cdUdzWvt95b89xRTz9m2twBSrnLa128oaeroGmVmXk"
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
