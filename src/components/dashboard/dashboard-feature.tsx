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
    "5wSVP7xJ3rRXUEZwWvXLx3G3b34vMdiARGnU53s1S1pBMbAUQRpiPvN2tnF9Ls7yq74c7K2Vd26PkQrK9krRmuqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BQJ8Lzn9Gc9UCU22REPEJmKDtmjLvyqdxPkjwohF6CzJYS1ogD2CjBSY79iceCpF9imMjMVyVLuVDMXJcEPM5yp",
  "key1": "3CL6GVQBQiBTvPd1nFmNWW4Y8NWakWNpjHEfa44WNYqq7TaP9ja3vZ2LCK8p9CzxQ8euYge2YMVMdXBYciTHNaD",
  "key2": "49tHYRia4XHNMyZvmKugsVLkcZpW3uLwfYUD4nN3LnooqtCPCX9SiQVVxwoBJ7XvkwQaPJS4neKA1DVefsfixGzn",
  "key3": "2iGqEafrb6jsbXVgwkUg7TL77cW7NhVprNd2DAeTu6JaTEV3U2V2BB4i3nLAwSq6Xfy56Lhi8bbs9qXnS2ZG8CeM",
  "key4": "5Nxr2xp2yBDYjzgtqt6mibr5taM4E7jyuw6umBGV4xe9CqDxMnM7C5GrQsVTiEv81ixhFLzBV8TRuU277NN7mVaD",
  "key5": "5LRJW5WQEHwsv2wSxZnCnKEjmgsXnta4KPbbX22iED4YFKz1aBVFr22mGLKz7r6jpEfk2gA9ZGUdpaTuTHp4eQ7U",
  "key6": "wJtREwfmWa4qXDZbe4Zr9gYfErsCMQyqE6yFta5xLrWCk4Anx5cQhZn629LQpqUnFEuL3wqfQBRgxDfjixQB7Ss",
  "key7": "5x9ts74D1MDCtV3qV3tR6RBGJRRoqCMZpUeEbusW7uMixu1sjofphvQebSFTN1xtUvyouiSArTwby4NEfd7D8eHN",
  "key8": "T3rbiaAhaSFAzumordXpk7PVVvPBjrTzpPkfY6YzUiRTvyJBVjNndzHHixMFjWK9NEFhpgztNybLCd4sDAZDTcH",
  "key9": "2WyXaidffczPkyPsXwg64zYQQ1YhRfLRSUvxWCFqvBsb2E8mQtPhfSLGcx44Pfdbgjj7FpmY1z9niMTUnHwXDEDR",
  "key10": "4sqPoPXaUJ2GnVDjD8Cb9yRxdcXKLsToBaxamZvb2nCxkrMrCFZT6XXcTkMNmau7j1BVyoa1ZivzCJY43cWnKvdU",
  "key11": "2c3rUpiP1fQZxfrzpkMkpSW8m95rnLW4XcXT5B3e8dsvQ61uF6wiNCorVLiB3hcPLyi4JA2vBLFE4DHp27eZ2d7J",
  "key12": "gtRVd4T2MjunvBvhLEk7HQy29hC8DChkKTcbRqTyYDu7aoL7jUVtLhShk22WXYfbuc3neifhnxyNEZwXqYCgrGY",
  "key13": "5vbxytfWkQbyHGGX1S1A4u7PxKvg4rHnjqa19SagtYADBdiDA7D6sNSDuFASKvMAuDkvNUpWAgwqfYzURapeRLPh",
  "key14": "4Hndg8yBPXHhaNTwjqNMm3eKyBxkPM8yEZepzABkgLH98eyGnHXCY6E2fB7ifPzHB5CRSWEgf3g3UBXHKi229jRY",
  "key15": "4kDZM65spg4mQGmJLF6fFTxUBLKdDc7kWxCdtamSjmRxzhNSt8cGSQRh2v22aZXuC8mukWv7ekZ9jZ8444bndxEe",
  "key16": "5BtnCN8KaFL7Gvv5hNs1PUMACdnrMjs3CGFYie5fJdxztxFPxNM4PXotWpTnnGYcXdPHz8Ktd9XYhABv8pJrdaT9",
  "key17": "37RihEH6JKcJW3ZaZrfDekHZQ2b5Wi73DKw46K3s47PNV8Rm3RKsEcm5pFuPGhEUL7nUxe97Y9i6u5HrpAuUJnTX",
  "key18": "5VmdcxbiX4gddMh5LPFBW5QLtCaoJ1sHg73DWM4Vj55bupq1GqFomE4QbHvjr6P7D7MF25qJNFwcqnD4iKPQsFYE",
  "key19": "4udVJ33XVrWeEBbcuQoqBdHQX2QZoQzJ18Zd6u8N3G5ZjhEQ6sFTof2aktdYGF5Wa3zKCkPCf5qFqVgaZBFGeQx2",
  "key20": "sczfGzF3vbegEXdkxZ52YB9JoEhQVEZxQpF2N6vEyZQWpk6MM5cmbSP3HZmUXezyqjxL95j5bGX19tapTcmhU46",
  "key21": "29ctJCpBj8jMFMffz3WMWuyuT1yix6JzNrgf3KczUkHHJHeRvoiSa56Bud4rW51oeRSgZZoVRYUvbvkX8WgSxCX6",
  "key22": "Eph4poaLUAwsKPpE9Dei6FyLmmTDwfXF1So7ekepvEGsTgPe9RbVtPjqGVSHJPLUQkHDMrxk7sbMfH6cubf1u6k",
  "key23": "2CirNCnzmq12nhVQbW2ZViGoeSPyKELHrwvFXCRTSLAXHLGmvRYBTvVW92JubPvW3RRRRFuwoX1RE2o1yQsAnQm2",
  "key24": "5TJE3CbkPVrs9Le7SzQEeAW3Vqp1DN4R47xSVcGq6J8y27RddnUXphF72VHzhy9wqXAbkvF6gT1aPhj3rUnvK75",
  "key25": "2rtTDe5sBiD2vuf5mo7r7AAzegoKWrVvQj1SdUKi2RMN39cCkzz1mtHgrQ8oNYvjMFucULNfimV3Fq3YsRBemydB",
  "key26": "2D64XRQbq4oSbSkPc15JKBjBYnks7MDdnDsmEJHJkaRQZCRHWTvtGEBX5gcivLHVfGFyJvXNwDeaeYW71hSfEevc",
  "key27": "3xStfbVfFagi1UE8Dez936n7PXiWeAaz19rHUqRFYVsXADz7EkhAynUTH4fP3SXkEzxEn4tCA1pW6oFJr4ScKM8w",
  "key28": "K2sfnTuMhXQvGuFDMUFFtJNLfdAAtJwXhbHsyuvQ6veQL39gpUWWcx4D4PwREXez99Y3jqaLdCVyqsUbJ7AyKxx",
  "key29": "2bdo4r5xvoVoWnKYsMoD663zMmsMiU4CZFhSiAejNWD6YuBPZNarPzgHKgFDUM8TzzP11MsgBRPK4XiNasjKRvE",
  "key30": "4TnujfGA6552kFH7EzqzyU1fQ4itAtqzt216jXjxAbZmDqa4qESUXNi1ZBFSpesFwGLKRWViUgrQBbXVR48tv5Tg",
  "key31": "3DNj8RM7o1bizwwqqmjmxcHVPqf9DWK3paWUnMhSmJ6sQDXCzBPE1bHXdppXWJayVmsBDgDsTwHF87oPhHEdVrcP",
  "key32": "5uB8Tzk12WaM8nyvyLzw9pBGuF9LB39MtznPNzxasVhDssoWUJXWF5jBzy4Hgn1DNbcWhxV4FBN6Gqj8XoF8BxoG",
  "key33": "5dpR8dapgEugsrgWZB43DMvn77fG312EowKWtmWayXhc813HJJhocv14wHRFNLWtSik1e6CaCAnxZ8qxFhKjgG8U",
  "key34": "4LxKDYoFDaVdkrh6L3sjpAFKWYZdt8NMAGs3GDijVH9wLyqjvp5P7UNcdF2wGjKPpoLVR2cWL7CFX1Cqwk9KgUpj",
  "key35": "66MznN543322XZAbDz9coR7aKbzuPgn6eiTqR6fFsW7ZyM6dqMN3ctpJ3rqHH1UeiENftckasLn2C4fZTXkRuGDy",
  "key36": "2NYceYYhpzw5SMdmqWGpDcWX9AVY2TaWJy7Y7VhKixPtKq74LH8jx5yQVvfyYWnLfrJBqedNVRofGLDNQcDye4rg",
  "key37": "637LXLgP6irMSEBRyzEcmUP5bVKge8n769kog5BmmxqwrFu6Yoqp7RqMgSZQDMAehbqVauYZUPtJhsFvP5G1HBwB",
  "key38": "2mszT3nDSMqYPFr8yrMSNBTyVVeurGwYXn7woPTjxBsj8oNCb2J3p4mRFELr2ktR9kH3JydT8it2bvbAfkDLcgf3",
  "key39": "GpNoGgApY1LvsMLvoEMey7Ado2PnBWDZYzpKjoyVEwPFiQdchiZo5dabMZV2zXb8dBgqwsxgYEiFdF5aEGFetcY",
  "key40": "2beXbYjDc6yXrsnK8fiyhZbjph3E7jZtQo5NMb8BdyHFGrPDiPrdizRJUz8HaMBCzeyMFjmfVv9nfozwqBBnc6U4",
  "key41": "3TYvUTNzLSyQuwytPZgANZYHTULZv9ABeR9L6zMUpXTriNF4kTpADRm6xFgSqEkDRwy75qcm7pCqfJzTS9e5wg5f",
  "key42": "2UqJfNnwdLS4ZdGhrxQve6eNC6JeNRKHa6tbYgZvMss1XMLE6Q68Wi6F8foAeXFjjbULLDZujUnRRw9jibJdMbJv",
  "key43": "22uqikJ8KrR9AjzWHnvvdq675oBjXmwYfsvf7D5KwaqeuU26MoKHEoArM8jC7pgPcRcZ6we1D755o8zn3cdma6Zt",
  "key44": "45YVX2pmy3kHczaPV8YDFm6M823Qd3anYuHTkJJqtYYc58j2yUfFqRAgYGpjeWS3XxQS2HQLSDL89FMXHTAVnDty"
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
