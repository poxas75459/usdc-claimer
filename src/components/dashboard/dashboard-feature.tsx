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
    "4rFczMteW6uQnTuUSkahnBifKitoJiZJ7xHVtZNJmBS5TotZLkbckikRebAZU9H7Y1tBGxn6MZwpHZxuMnAEbdss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8QZZbYLKm87qzCpZAhnNd83HQX8XNuUWBTGme9bNSmWe7xKnC6a2hRZXUPjiWD4ui4akg4Af4JdqZvQDHyNDj8",
  "key1": "3drXrDzdVpUUrH3dZkUC2nLH5ks69K12d6qeXKFJZ7xmui1ydsx7MVDbUCo2bCEUtE14ek8WbGZSpU8S1HHxhTec",
  "key2": "5HXt4YdYKVBoDsSSCEiKCECXVbzeNoDzfjj5avDa7DP7k9EysaDBhUpn6Z2gy9GC9g6QFDmxxin83tZSVwbiM43j",
  "key3": "5x3vHTPzGfmtC9zmFuwDZWFV8Z1L7F2Dx9jXo9NkpDBUmfMbSRkX1NqMFzNmy4adDSabkMDWCNocKEc6Kn2eBmHY",
  "key4": "3xaZoqRzhENDiyghK6oTXerSv3hfVWX4zHLooMtup9DYeVHScEPyv6LCPc3SPRxfwkNLfR6GKpJCsZ1A1USwVMC5",
  "key5": "4MN2Vmpes1J9BLneNVA8v9s3F2MfeFJXZoYuqWnWA3zhACQfcSXogiNMbvCibqrBL6ogsB9nEG4yQcY4Qp5qpivZ",
  "key6": "2Vy6dNLCATjo5MAdvvxpGRiGaWQ6PNdBdKSHo74wUm4gPUFLhK7pEQ8Hj8ECH5oWPyyK8U1MoJpG696Z17wPk46x",
  "key7": "4QQbez1udBHs2UutLdW2tuSUNjG4oyoD2zCtRhnqu1kHUkpry58W5YdY6fTbofgRwB3MM7Uw2eWeegzDCiebBg7z",
  "key8": "4RypSyStrdJeb6YZ1WNDU7XTVL7sBK9y78jyeYcot9nHpefDrdKx2Bxw3Sh9HDoQG7V6UX6E9YhzHdp6E86XjYYe",
  "key9": "3N8cLn2reoDFwSQke5bYArBGDxKVLpUkhbtmbMS9owE4uasJAQiRReYc5C9VLrYkufoC2tJA3RBrC21myM6PsbkU",
  "key10": "57fc18w1jwYNY4keCk7MyYuqp1VZfoXukEKwCPUVsWy6EJnz5EZGGgeBk9LCWUE3tz59GtCfGDwM3tEDzDYCt6Bd",
  "key11": "gBZx7M4ufBt8WqjFWvrmEi7gGBVsi73HFSi1rxRg2fVfCDtiPpf3iAvAhZCZzfMnofYtsoLvXQDxjWbDEPv6pm9",
  "key12": "4s5AuXESbxBY5eDfRh8mqovcJ18nH942cNX7Su9CbT2iRcHF5TGXNPKUYM54fsgRbVcR8xRzFurTBYAVjr9fC6QP",
  "key13": "4yayq6c8DFBvFD6jyWpUUM4sp744mJMsw3e6GQKD4dtYhrBj2xVZGtawt46osWRisNyuVhDvrj2c1isVWPXxQfvT",
  "key14": "4vnUsc2tLnwVzwfAenvVCZuiBnn49HMEXSueRu2kT869ew63ZtDRgYqDWNfZcRBVGhrkBeJ9WQ9cFaUpg2iCcPRn",
  "key15": "eExDuSJcDtCcqqUSN8jT2ZjwbmpXmM9VWFre1GqFe2GPrYUa8PtrrZNaYZaAAGEUPZkqTH5b7bib34wAWdCkSM8",
  "key16": "4FnukbwKe5gVLE12c6rxyLrtRq1tDchXkXnSRcLGeWhjLmCSitk8SGKrHdFBgSLenDUFWXHqa1GqjYWEDuJFnLd4",
  "key17": "3qFZLmNZArzLFTG2MG3keMUByMdGCQqf2WA43fF1JY5eSyuBoGLm3GtCi2d3XxoFpjmomgKCgHC1sV2mFakCR2LB",
  "key18": "2hAwgVELugPya4B8XhWCPH2kCD81ES69zrAHvSeaghq8ZUU5x91Qx6h4HMUuKm7qkKBbrRjmdzQk7vuPpyGA9KWb",
  "key19": "4qEE16W13qPzYeamzcobpxHmd4Em8ujuHMMm8kmPWGLoB2gCXTxQbR8h4A2Egdq8NSFsibJihXN4HwkMS4BRpgKe",
  "key20": "2HcQRzBcoNi9Xxg2anVZwWxVe2FtX8iBPo61ZxDtSf6i73rCPVP6HMXFQsQ6oaHwEJJEQcnMd5T4KtBR5aLoNVGa",
  "key21": "PDCKjGC2YQTXSAmQwDor6hQGna9VwGEh9x6YRG9mjf2xdbAW22oMqjM6N1SL2skStMUz6gf3nTd7EZXSCQ6iae7",
  "key22": "4KZiLYMyaP1ResZ61KRw8beUu2WcVorDH52M1BVXNfsVZGB8CNZgBTMojR4CSr6CSU1gKz6dmPwrq2D2dwScJiUW",
  "key23": "KAz5HhyYsQUAzbssCSnepHS15hPbHz8K4NE6dYbuxkp8ZcRgkni8tMYDwj8qindB9aJbHzCyJHUhqqhUZ4u74oK",
  "key24": "2xkZbjoXEKq66aZqM9Mj9bXpawNK7bid6r4HhjvVviLqXGPwDZHvewAfvFZaYfAPjuT3s533jGVXpS9C2q3bTNac",
  "key25": "3f9r4MnHL4Jqz67DwPEByZHAj3JYvPBZBohSkfnNVL5sa2gKewPAy8NRgZxUjUC3x4uu3ZqYykZqzgEJeegLdwQs",
  "key26": "5GgaqgYwm5wo2tUdCtRrFdgNQGPrunoutwKVcTw3TWzmtWMHNrXGFfUVJQqXXaBBQYyKWTK2AQAHhxdp9DzUeCeL",
  "key27": "z1RUiKn1zWC97UKGFmknuWud9cdySNq58KN7B8uoawSm3AVtC8evv7KUZJjwcU5b5RkVJD7LbbRNKmSD2YD6JPz",
  "key28": "iAe5tV7Err4jDJsHkkcPRRJyUHHEdx6gUcRWKydgPvkp8WLdixDAb5cTwXLeXCG8X8st8cSwcCp8DKSuUqjugc4",
  "key29": "4rszqMbW4ZX2mfZa2bifUXerikFTYcn9PKB3h69SE1mZwX4kaziN6EuxbRnxqntxggKosaT2XH87T9eyE35RAfkN",
  "key30": "3KFy46wsg9NdLVkDC313nUkQx292bjNsce6cBbm9CqPCMjpbuEUDJNxvbSAugLprrD4tWB9Gvt6ud9S76KtbquDH",
  "key31": "57tMYJhfGkuzJTT49iQ4BPkH62eJL8TpuoTvD6Q81E1WmS5n8z3F5a6PJ3czx3hUZX7cLSsj8oeeHg2WhFLTzxmo",
  "key32": "5s4HPvURioxciw7Megy95NhMgWqfQBBMk7CJQ5udBNgrszz54w3cnX3HM6J7xy2UtFahgBv36DozUi1rDdsdeNLX",
  "key33": "25dzYgBGpAkkZ9J3EPpekQH7SBhEy3AVfUV2eVsEmyHyopYsjTB1Gh2pLJD3XT89Vpibuhsu9ty4YTpUc9w3GYXM",
  "key34": "37dxgC79dvq6sTiJz2ZWKyxU2BJMQTYsjosfV38KRhe5CRB6wHnmJZGFC2xsPnX4XVeo4pMUvptS1LcxymdXhndy",
  "key35": "2R7UT8aoyRHVJtCBR4vQwpB4AUaCKqduB55AqWWemPzdxZivKBFdBx5nCw5Edz6ujrJZawsp2dbAWLDa2DY5QtGr",
  "key36": "4ZXYAPz3jbGt7TNvDdSgE9PdPBL1SbzoTfZtA1LpFtoydcitLN8zeatykNbMnfASgf4W9agvEz35YXByLHx28tkQ",
  "key37": "66z635CKn3JVioXXcQmLwfE2qLkpefXRvLhf2jWESFfeKBHprEa89bQVdsBKKPzGZEBGRYY22nhSp5VDVRp44UPU",
  "key38": "5hB1jH3CMz7BjCSaWY1aM84m7YuHfoDXZtXMKBE1cwSGQPkXkya4EMr6bMmTMuyvKNt2LJZNQHSsVUX7Wdgv2zZW",
  "key39": "2FdvRvxuVreC5po1rkB1JRUHt5iR4cayaFZSvt6ixd4F1SJoMvgy8u3gy1Lqnjx1V1pVPdSsSJVjFVoMacb5qxaJ",
  "key40": "29pXjf9HnTESGp9exhaKQbDSf2FtdeyCVF1pqCiseMMntcvT7C7tSqKkCSyptHyN9hRwtpf83VxL4CZTMuCiyY9N",
  "key41": "7miC8garJoB28X5vr7fRRSL8r5kQSx1s8DTM86JDwCWcaunRkZVNpNX5oSyrRb9FfcVd9MGU95vyyHX4WPdofZG",
  "key42": "34gBK7YtGLbkLCRzm7auAsA3jp9oKc52QW16XtQTNFV8SZG2YKCo66UZNgtZVzwugYncKG4jiQDZUkbXBTgPCwDE",
  "key43": "SobDVSQEKnYhz6LBx6Nfpy83sKh9UKHUK6mCPzFAk26eEx3MCEjM4kfugJpZRXRUZPykjWuK3XSomC1PCxn1NGi",
  "key44": "5JvAaLSqmf628dm1UbfrBqeKL9QJL4qnm9ikDXJaeo5BBiWiL3sABFh2h9kzZXBV4fL9XKwgisEUPKhempRFBzpN",
  "key45": "4Ww4MzHsFrp2E5vHAQ2kadBWpAFdksA9DyWrsPK2LH2GSBpPJHmdAdwK7UmH4Kq9VttnCKGfThJCBMT6rPqKKgGg",
  "key46": "Ue9RckssFJPuYaRoHG8ZcprDdf45eLZVsZnGcMCoH6HQHxPPS95KRQDj6mi5m7zyVXnvJDzmV6kePtWs9YCjA1b",
  "key47": "4ki1RDGE8jnMonqUAavDMftvdgKcLU6KeraW9AZf4vgy1CPSxz1v1E9jg4PKivWnRQejzdDevuLLDAW9fQKPhgmM",
  "key48": "2Lr41e6AARuJLtP8DNpAsnMLjUBC5FiL47uQezh3PV1cTMcYBxpaR6krApdwAs49yWQonR1PjrFG8b5LbXGY4MGs"
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
