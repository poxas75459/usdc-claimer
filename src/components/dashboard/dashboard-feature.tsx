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
    "3HnRdTBs8X2m47tcTwjfmSf4RCzKqmnfCELdrM6ksNJGbLzvaqiTF4rYXRcVvMXRmehxdpV56prkxetxupVo57Rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YP79YPPV9uQ9a8c9hSVyWhNcdWmu1cbAi1PafPbp3ET34yfMKBxsQ61u2A1NpYkjzHQ8ABDPxSnJz2ULbTDLA1S",
  "key1": "5QkAasiUkXXiC3RVuSgj9JK62giKwmNQxHQGijP1VkR2baY4GFnMQgVh3oHMEi7SLCnNvkSu5cEdXEvyWx3Gm9se",
  "key2": "67Zo4shVXTDPUDUZb4KsrBLMzACyif55FSJsDTUjHyQQchGm3Gdi7XnubdT3c4rNsxCTYGd4wMZaqtN5ccQXGHeq",
  "key3": "5pTTJv82drUz7y65SfymR5ktSuFGDwg4Y6AcLCSu8Rj3GxTcgKeJUZEa3oFT4qzbAH2jxQfwHT8Vvg584AeNUXHg",
  "key4": "32cEqru3CMHPeKangxj1VvtHkpWPSn8U8pTWVpZQxSzHCWVBA633uNDyWvWDLF4tjsRMvjxvPWesSTPR3jFXuQkS",
  "key5": "5rBRg3xza9vputBhMYXoSv5VJf65EDzQptPP4FksUEtAjvyx8NAu4woHR993RtuVrtWkazDrXsx6Wvwby4KnSiav",
  "key6": "3rUAtcTqV7ETcUL8jYSRSBPGayXDfmH4D8AfFC9PTGwwnfAghEHkbvEtaxis6hwvgbB1s9veSyhUT1gUarKYKrRx",
  "key7": "3jnBWog9i9iAC987XkwBaqUjfZeMKYSxBu9hEjxCrpFRAQqCxysVjCbgKDpKfgLG2VYKsL7z34Ncp6gjsxj4oMfK",
  "key8": "2xJDknpw994E9aSP9isVVvZhuNQtZXRRaNSB3oSHNbFVsULkfW5qmcQW9b6BkVLLz2Y8Z2TX5oMvZy1RWud2YGz7",
  "key9": "4rWM8z8ZTfwEiKM7F5mLQNzMsujA6aMt2VvVGqGNdBTeSdrFTDGYFzahmcgPPRVzjpj6wEiFqVk8rMbtXdAxHhZU",
  "key10": "366ckLCLTvhvh2qk2Y2BJmFxb2CjqbQ8wBqSJR3TF1HnXeYL9UprLCMfc5NPgVGq4frqeruwuSCcJxZSkdfHekpR",
  "key11": "4cZXtUMmXGuosz1v1d1Xa3x7fnW7yeXwdvMaTV3NgvyHUD977ofsfWZqnZsH22UVptcGKkjePTpTM5oiDZqBwEEH",
  "key12": "43qb4SxfumVNrmjynoxoqchWVtdapdsMibHx2oACQcGPuL6ShGHohZpmDF1HAL7Yy51UWCMZ6HAEMozk2C1mKyrs",
  "key13": "3WKEn8d4gg8qTiQk68j48JSnZCuFMFjpUUCpgK5rowviJ2tERteAMJ3TdzXxS4o6mXg65GS6RvESwLXgAmBRep99",
  "key14": "3ELTE36UGpEKgLenX2zbUw8VDFwtvnVpULLRyqKBqfJCgyeSLmupcCacQQSrgA72CswzLyEUghwnbeKJu6pWdhbV",
  "key15": "3gAdP33hi8fr8Sx59uxKEd7HDYZskvBBcyWVmN5QNopnRXp82giJbiAzYeggUQ3LenDTxVgjKZ1PiE8N8dc79v5H",
  "key16": "3rHjedFnhBK8tu2u5nasoQrqSv1b71jt5UnTmR3cxSPrp8vHJksw7WzPQUkQXwQaxzJ5pnFFaR9MWbFGQ471aEWT",
  "key17": "UnLK27pNHrGeyo9Ge5NCK95jA36gtqbgfFR4FkZehs5BvgMYJ2pFxS3z8K34mxjuzujtH3yLbHmrtLND5yBdt8C",
  "key18": "5rvCDWYMpVKQC5okveV2T76H26pgVrush1Yutd14CEcxc1iLdepCcuoBzQo33jSog2nyfwjbsQPZY5eikboUpmHs",
  "key19": "63kYNs6nc6nwNBRoXUzPHTeBq5njSyrXgW4VtWcmWKBn1wTJTedMrowDajbsBPARqiTRtT54FkeWtZ8VQM9vYxGe",
  "key20": "3rJ3or35iDudjPWKpsgT1CrdKzUGuUAQtDGZexctaxDNMPMKa7FiW67ctLTsGVHNMWfNvKcEiuhHHSLQqux7BdfE",
  "key21": "4xgJGjKt6PAqPBRjeLdFNe7UddDq8V3knyMK9j91gFhzjB8D9Ks12nM6KN2dhDwwyi46uZiuaeB9KkMbVVwqh9Sx",
  "key22": "CrAEVmcq6rnhuHEFGBKY39ttEogruPFV3QttYp8VQuTjotCxoFAbrfgmLV74WEgkURsYn9EXuvxYybVUJ9nxDS9",
  "key23": "o3kKHmmXCM8EASYdcdToD6onGgr9feiFg2gnvWbm8Ac43pqpGkVNJmNF67CHMMne1WEuNxqdsPp8Cvd8g11BnEh",
  "key24": "4ZLqkrzHqd5e2DM9Uo4tswitVPxHtnwjjCJHZysF6RC3YWzpxd1UTdUDS98ubEzia8us9SRdBarLLaHvqkUpd1nH",
  "key25": "5P3cD3guB1MScgxFLcZZgtVaRQpLz99DvtYkCvNoNAwZq9FodGi9oZGwbZBJfuthndQopLKy34Da1WQodi92SGkn",
  "key26": "393zs6o2JbgUFAw8VT3ijQtS4D6pnnLWKX7Tet8zEfaXNfZtGsNJyRwjWK79Z2JxbJLWev5VdjriZPWWPH9hdJkU",
  "key27": "2AoFSMXSY6uqtCAXkZ2Y89BUoPPSyi1TaD3ZbnfcnJiA4D24GeYwWk8CP5JXHTK6ZTiFeV1bgZC2w1FveuBBn55b",
  "key28": "3VjM5sjKwKHCmhRSziBrhL2H5g7HQ3DXsiGoo6SHNKhjiZbf8Dcu6T22CUA2RXF5E8cQby8gvtFxZtVXC1mtfrZz",
  "key29": "4M5pd8h4gZCxmKQ7bHQGMS4GGDF2BHNvTWwGv8YnAwDU85bHEDhWesZuUoRgVkJhQHEu5MLNgySa8Xx4QsenoBg9",
  "key30": "3jhWYM6H8J974NmjGWfvgSLbfCKE7sqk8Gi5JVtk6yG3Q7zQjoq7ipfM1rKNVErWUPuJ1S94itYEMkhJQuU9jtGG",
  "key31": "319FadhfN1aMUGJ8U6ww1gvxgWeUV7aVVnVkK4ZVwp37J3uKfLF6GJBdV77d3fwpPHN8tzNVeXH2hpLTiRqzFfQS",
  "key32": "2BenrNJf5u8onAqwvQneVSs4NCFHkGW6x2AyjYRFbz7dsJqCAab2H8KVrGzLDNQEm8qHTgwq3FhJkDkX6oZ5qFyJ",
  "key33": "2nhKpEijg6nAGNvduPYaXf8g5kJ2PHqf1x6sYPEbgpGopLkWd8VNSpvC9fDMwZxMDpUDeYDRJ8gHHU19JVjmWpMy",
  "key34": "cG7z92z519iTxCUHvSuaPscx4Uadmc1d2pcumWySAQRaiA3dUPzW5nqxmjNf3hFFWvpwNS4EbEq3XAb8mHkS3E6",
  "key35": "3r93RWUmnnArFg9dk3NBEckWcPJWyUaDC9T5BHAaZKTLvJqn8v8LV8dRc6iVRkbYePGNu9TP1bWxDfbvqHvzxPnx"
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
