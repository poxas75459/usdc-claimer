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
    "3voo3Gn1tjsypXJSnHg4TqGohRGrohhDmihwn1UqJdihjTPrSrCHizLVfMD9ZGpohhRLbqfSs8jeYePpE7J5ti29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BwUHe3NRa2pfwWFyuZwdCWzgYER7WAM6uJi6dpCKwSZhsEwwkeZdm4Z6ddwundRNYzHVvCQSy82TTxNtry555KT",
  "key1": "5585kZoNTiEZy4efTGGmD8HTk2MyaphPUMhqyZtpbA98Ju81zxYgEFpYQNBMW3F3Ek3Fi8Po2ufi8K2J4WXk7eJD",
  "key2": "3oqS9AiE1wqPidVaiT9xL9PjrBxusBHWVGd5MybZxcghJf9XYC1psaBRauVKmJRcLut7Es2HWDpdSMDH6YYB72YB",
  "key3": "cteExkoWZY6VrVdbNFVA7mns283gT3xxNHxRWJeQSNE6BNixbT8iMk9u1LHhqjLkRye1DqdDkes221GpwbbQB7z",
  "key4": "2qibhVZaSGRzSXshKFVEZa8cuDuz8QY4kTopq3y36X4CDmXYVfHuTLyVXahWu9fAfT7QgUGypJnECkkn91dkG77t",
  "key5": "5XhtBpeThX9hc6ZFn8Rzwr49C3fZZSeG2STVux4cmrdMTpnQeiZtzgvJH2CPLAtWK2n198af38UaBfuTJ3jeUUpN",
  "key6": "4LxbgCayCG5jC3gh2gBCLz4bebmWsduMGKQxFAHZei3m3E1nAdbPjhSuVqqmCwAfNkF3SKQ6iC412L9k4qF32q3q",
  "key7": "2Nvst9M3wcY3p7kV4W2AMzixtFSepC38A6nqi7WMwCaWnip8utMRpSAbdnsVxZGY32swL9jPReoke7LW6aQH6WJS",
  "key8": "4KDzJeA63JYGCfDzFk3Z1TCXyLNTa9ZKavD9WHpUYpg7zPkYeA4BziUuWdjsm5ym8PHCF6811rJeEbP1joEc6vjf",
  "key9": "5gMCBQwPzjM1nozgHsD6nS17xAtrRKt7GVEbfL543jCzDeXByJqG7sxCGrtVqT2wmEcE5CQkBLq95RKWxDGSn8tw",
  "key10": "4BqWq6Y4oupnmdw14uMfNwviDyn1B27c3eoU1uqd9qa81uF5XDwcxxRhQdjE1ZoCAA6uuuvd5rf7iGJ7mbKeZYgw",
  "key11": "wBS8W1RR6uJAGhV47ad9bWxaseLWYeU7xPcNE4Aw1Ui5rhRCPwqKzgejE6DHkGAXDNnsNCwNHHUKzFWcdEh7aFQ",
  "key12": "4ud9j96G1sNd5YwnEkgRYnC5BMKtNBBRBVQn7g34Y9pXtgrCGjdcTMFKhctYe182rnZqPPHkyJUtukqCFbRDu52q",
  "key13": "42i2aagmkSZ1JYJrQcxF19PHAskwbVvs3qUUqd2tQEsRjyJ3yLr4bULAU9urDztDnTJ1GwGvAB1468zCeqpWhUkD",
  "key14": "GatcN8scEoTBCXJowYkwwabzT7JeLQ4GV7zpMbq7Z6XRtXYzoEFGgDwrQ42KhanCD7xEbWHutKEaqY14xAhQJpw",
  "key15": "2z5rHvKYzULx3EZTfPV9BDb4nGC3xzQJRfZyfJTnJmQSdzFp4oQnyrR9LKqsJjE8M8zF9n3g2ARt8DgRgFkbB69z",
  "key16": "5VQNHC3gsx7AbALHvPGiGJNzjMuhkZ8m13UTZeDhP5r5MqPpALRKxNTrjFQdoxNcCK8aEQrYjvRXC6qzVPP6NhcY",
  "key17": "NCDA3T3Vfu3fNJEz7NEgahPLZhwgGVXtrV6zgUqT5GQ3Z7dUrQGzwtYEMoYrTNFbUdJokpmvLKJwwK3ezrLPBkW",
  "key18": "4cZn3gavbzZKsxDP77ZXvnFBno1MSoA9Y6xsMTg7FtATJPMGAgivExvq1tMc5QAiyLNdqHhLfGQLT9z4jMYhkA1U",
  "key19": "22thRh21zoJH1SXXVV7aW849aZabRBC6pjecExsTi9StrprFsDxrjGNCpygHuTUVxLzLR5La1T5TqmFFA5fgN8Pf",
  "key20": "2GirBbtesxTgSt31KrctA4enACjSrzq5XTCGQVmeUr39a6Z25M39PY7oKJRmcuG8mUsyZQAhTVp92vAo3q7Nn4Ax",
  "key21": "4G1W43odBcAPTk3heByKnS4xTajMFussdvLXzf1bBpGuYaxWsmU3xUNMxHvcMXuRxXqokZrVsayeoHLhuBPEApUr",
  "key22": "5RWJPLFpvUQw9QM9eBuEupcBozTc7TsNhHUtKYSMg9WNWFR3TcKeG88jE8nd2Dwjvni1emJQj3uRPtpYiP7MUkRm",
  "key23": "5QZ9KjHVbvMUPfcEpQL3jrjHUx8xZ39WX1oRVC7VhaVQePnL3pEA42jEQYLi7QhvxYW9QnacVRsVdxbf6SfDtpVu",
  "key24": "483gTNsUP1rTeUeU7iEAqEPpaGnqqztPbXyJtU5bswARWGwMkAC9Vt8y6EaX4wTLbCL7LeMbMx9pke9gEMtPFAAB",
  "key25": "592WsSvnFWpuriBsQa71U47wocAkVakouEXvcYCD4gyv4pwwYhefCwVL94kt5h3sRXCrbK2qCBvnTTinA8JKbx17",
  "key26": "kvtvnh6XDug9Ewy5E4W3NRcMumAVLNdtn3uQBWqST9QWNN3jbMdKVamoQnq939t1uesmr7nqvxcqdaCJsVG83xG",
  "key27": "25KZ2TUA1MBYvicLPyF8DuhzMMnXdjk89bQX8Kvgv5XmDCAJF3rVseh43SgkhU8X8T75sjnJWLSXh9q4NhR79urU",
  "key28": "2gFkwG5LSi9sYcJQpwFqfaDFaTK6KzY8aHeod45kHuGp8bjR9kwJt9rYr5wH9voNeMc8ZZuX2Wu5Kg1eNqRWSpHi",
  "key29": "2sVLEkSC5feJ4PJeWQUVidwPsnJraMYCLp7jybcuPuYPXTj3MnfbYCscuEzDYy3TZfYPkaniHi2gMgPBDu1bhRXw",
  "key30": "618JdVH6gkwim28aCvLKdXEEDKxRGiHVjxzgEAdYr63xYmPT9xZRqdAzrQ4AnwAsNqUBQR1VzjAVo74zwf14S8hn",
  "key31": "3pVTuZNHmsL8yvV7XsdwrqWsPyafxLs1ebayFckvErNg2Rhch8tUVFDrtRDGbyQHTL87KZaHWxzFzZY8RwxcGV3c",
  "key32": "2KM99gwFM8t3EwQVtST6gQphnaWn5Q2pzRU8u8EnZT39BbxhWf4952T8XAot1gKdjLicnQPYpXYiSBt2n1tNh6EF",
  "key33": "2pRxSvGj5nQCyirL6boeovrWcxFby9XQFRHfynBcvNSEjBKxozhacmuvrow2oB7oJqbtnxuD4eRwgiTEh2pYETei",
  "key34": "4oDnbVS7bG8SQpy5iDN3MBZXHFX13eBdojoYDuhTZDnZfCjBBL3DsUgK3nPWjyzzjnJMFDqWXuKdDfLy9A9Hqto6",
  "key35": "2JUDP1ZRAkXbemsTZeUKNQrGs2Bt2CM29J8WnF3Gm8iPtq2DGT5sQkrwkqW3ayNLu7vWGCrCB23rkYCbAQ5HLy6p",
  "key36": "3xDwm7jmRi2psHAS1mbnqAtQm76sBQ21xMSLCDM7RfgyZ7ZH6mmP598D4h29jVuLHpQia5cKEYuG1wgHQDePuqSy",
  "key37": "2rGqo333LNGxyj4TKkBuFniUPeLhCtiu9uaTM2xGea4QKpLFogRpRa34Jb3i5bCAhBm42NHb3LBJiQSM6wPCQa3u",
  "key38": "WY4nUWqrnz7FjduG44okTXATkkwewJ9zGvGFdqNT3pJuWHvCR1AAqTg9cpQc5D9G5YXK5hTq8QUHGQvFSoVHZAG",
  "key39": "43GviJkqnWa4NuTX1Uw3zwuJ2V54YWrfGV2QfSd9tfjtXsQBRBHVNDtehDSYAWTjYUmSNrM3wxARNpHmmZExq4ox",
  "key40": "44WStTmUizuNBnDEkoJrKRbcLBJT8Y9r6paCMd6VXn4UAMp3tgfVKMmS3sNfPyEa7k41ERwu5ymdrJEM8k8ibuPj",
  "key41": "4RACjF6gCnTbmkf8fAx1KtdXcfC7uTHSxgopWxD4qx91nY3uu29V6Bhhy4MAoLN1oj7JrBkWVCNUeUiHB9HfHxSC",
  "key42": "4XrwsUrEJfp8C8juvMr4PtYRCUDfcKDhjiei1MbrwdrxWEGpeuScqqsaJKWpH2GbjNfTHvrsdZwLQvbKMKCy5ycL",
  "key43": "4wtGxjP7JBND2urfuQ6HntBms9QAJ42nfNefnyhuJGtBuM8ucqt34pDCemTeJE4jfjmsk4w81GR1kMjyrT3GRLd9",
  "key44": "2ra7Rs2y4wQMwh3rFSvhydb2Wf2js4k9dbqeiF7YYAjsNykUaNJTuUfvuNo4Fu91wJmuuQXrquPt7HnYbkJKKpJQ",
  "key45": "2RCsveXobzkFGSRkS3NsCNoZfo6Wgfz9XajaGDTPtKBdBRdCrDcUZej8BWghzSqmkRNH7525XMdHZngGgNWUU8MZ",
  "key46": "5NCygHsmqH1eRMKZrXFDW3jVA2EBQsDMydZxHZLkkFRZyazysbat9v9iMnBTj2eDTgpbwSbsnkx9zNcPeH16T8P4",
  "key47": "Q6Xb8VGgMfVU1JM7GvjNVQzqQFUDXhbSXcdarTP9FuJJmvCfgT1gTZEbwPLaAaVktmxm8myKciCKLKzir869WrF",
  "key48": "4LweGEjUWVAEpR6ik4xZ6CRavYGCJaQe2mJrqCgfnCCNLEz19R33nzXGbrK7UgmrkzNtQ3qL7fGRf5bQXcNUhpTS"
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
