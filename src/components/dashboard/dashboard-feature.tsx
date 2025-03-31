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
    "66dGwRvN1RaRA1dBuM86cq9xqSCG8SGigzFYbfwHJS2owLy4BYiKoz6UuQYrxaVSc3EPSLACmrhvKBQam6gWUYWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gJD5CHufdRNy7p3FmyHa7GAyRhFFDVJpdupCJnQma9LgpJQd8h7mpZPGw23t9oHAKHK3eMQNrDccYeS7NEnMHKJ",
  "key1": "fquuRKiZmJUBBErAE6imdksa7bxq9DcTsmEt8rJW1aVHgw8wiHLR4yg8JpbQzv5BNBKfE14rzVgapyyuUVxp4Uj",
  "key2": "5LqHEkagJfWErDhgEXyC3RWDWyV2YSt3BgeJqFaQRLGK4voRSVEDYEGPe4dG8Ro6bco4ihYWuAQRWQqxF2juecQS",
  "key3": "2u8rkuFRYQB4Ra8fZwiyZzAh5XwCBAwFtqXuL5KS3MWVAeKYwub7TAMQoDLyPkJmSwbTUDewC1MfyaPcsJRX7Bdf",
  "key4": "3jN36zA6UARn8wkstUunSV451XAX6DJVs3roWdvuQfthv8X421GWqozgootYhsyY5e7QuHHJadAbpfo3nfpwiwf9",
  "key5": "5GWbzrDqwqwdXNu3UQMU5ctvDVcCMsZn3JRJ6nDo78U1pE2NRL8dtpcYHCHmYTCThnCUjV71yES7HPHRS5xeP2ou",
  "key6": "3wznVPt2uink5zT4rLTqQwkatUHkVLcF3SMXRucDH2CeYemRzaQSJkBvh6z3kJb2WVdhTfaB9VhLjb5wtvCFPGHr",
  "key7": "4wGpPfr1ChYSFFR61AchGDR6h197QZpjXoVP9dToHRqLTXGdRZ9o2GvLYWLV9HZFuRixvEwSYZVrM5Uv9EMznpCS",
  "key8": "34rgHoK853mQ24rY2uHErCuwFzudLLAqD3ZPer7Fsvddpu1M9spbc8cyNLHpBnFbqvLPtmtXGLMxXuPV5tTrF1Mg",
  "key9": "5E6MiaaS4ga1akgEaytj8vsPaLwssxiQUkbMbgnjBfapR4GQ3yBjYipFcKAhcnF8VWnCDr5N8vZ1VLap9rjnsSX5",
  "key10": "3bdeiA2ARQ8Gm6v1JxZBuUvfVKuEYTBofpovWkFgJp5g1WGedwyDLR42FjsjTywgGbpGB7H4Y915ckgt8yuPBYBK",
  "key11": "58riCdEmew3vtuPVpyPBgPUusxnPRSPfhxSEUHhKmY44F58UiVds168CfZn4afc7aV6QfdvEswK4SBY8EW5ht2BR",
  "key12": "bnwuZ7QNsoa3HJdr4X27jCXXR8qz65ngE1rCL5fyHEoJQeNGSCymYoCD5LyN7MAKszkDC91DxVyMuw6TrA7WiAw",
  "key13": "2Xhs8ofqdD2xGCdc8DcAD6FTTZSQUn2EB74W9CCNjtirL2zTDeX7xko99zy6JH3Q37CbAkKf5Eivw4GGYt96sqAx",
  "key14": "2bEZV8xU9s7mwYaKRExYqLQoz7qL7uViWfPHryxfeYxtVerh41L4erxjFLZ7rCYifuimzxYhjUgEKZJVbohuHS8g",
  "key15": "3TU2HAgV5fgfG2uewzp3rthFnHhSwGdn8ADzHpfWUq3t8GtwfyKQZFz9fed7AMKc2Ua69G8Pz8e73w1PnPrbgRQo",
  "key16": "3m7VneAjNCefvRa8B2GTZ4wNxjhScDfEQXx51jEXW8p3p4qavHvyDJoeDRCva7DSx6aLrRjsEfcgxAUW3ZbXYNQo",
  "key17": "25C8n3RFpEZbLb5yZVCZMCMyszR8vwzEjQW3PH4sjAFTgxcx3NhawgDRZhGp83XZgzrXWsWtyVbJXMsTMT8yxVHj",
  "key18": "5yNsckLVZhkFzGjAFsKhCYjDZqrbW1BDQKE7tp2j5bxv2XGwQ1ofHuvU2V62ZEBskYihngeUHcK1G9JER9vkCMp9",
  "key19": "2XMimvWvpceadZ34BgvZ8PRnjfYSvBWt8H2Rhz4x8d6RCEYzvTQ7wcUjwtvCWSBhkHShcHYfWQJkbTKrh229ARq8",
  "key20": "2YQ1Xa7UwRdQx8EE9vp4G3MjJQ9vPa2CL3dY4YeZXNfoWinfYCW5Q3mAkrVVb7ejg6BVS29B84rJ7hPmfbp5oLi9",
  "key21": "3Jvbx5YfuTpqLxd7A56ieisi67wCmx4KaHVcoAXbNz3RiRjx8YxWsAXSRv63BJEgaByUyGjrmkfBbpB43ANrUS2o",
  "key22": "3D4twyBwLtKkzctrevE9jWMvkEi2B9meM332kZoY55D3yGKCGyTD4YLBMKs25LCPghoad8Bai7vKzYrexDJaFWvv",
  "key23": "3J67zapLUTv52pApdAstPPDxa3mE7tPtYddXxwN9VA6GYg8UY3RvDje3GzyR2wG2aE1wECEoZyhFa7uyDNtBuh1X",
  "key24": "2Fux7a7dQxzccdVtq8CSYKPuW6kWiPnUZLdDPeHPqaS7egfK9hr6bWHHFZwPSCxWn6RCYCgU6vqHh6SpWafyUThc",
  "key25": "Ms5iQ2F29opViVg8J7fqkLdWbMqdTgyYqBXEqVvQBgpGhU7PrMs6uYBP2JCgiwZMBBdDA79mWe9CVCx3P3mWDQt",
  "key26": "4HtTBFcGxr9q899xj8S4U4Q4wHkqWG4278N5tj6W1y5ihVcra6dpjYSzurvVhmTDdQKT12rddej498eNAZRBgoZv",
  "key27": "4AWnccrsy3RKz5ranFftdD8J1oTRCf1DPwgW2vxCAr9vmuy4e6q5eUo9678Qr1rPNncvpCt49kVvPzcLFE3LXy7b",
  "key28": "2U7hP7UX8uiPEZ9eB32RtiZkzHq1jgv3LeaUjsukqZBea9hviyzynZQk1BBZPeRpsDcavxtREdTkEs8qb7NPi9VW",
  "key29": "XeRq2Yc87ZCqBcR3ATuWL853WYYMtTKgnTm3a5jHTDQWFGz3FRDrzwGF5FTBGGPWTVm6MdApURd4oE7iS3twEAo",
  "key30": "5MDaNM7sNcTy4A2NyqE4FhcviTM6rg1MckuJ9mc639Q1RnKMYSaTUrf7MUvJQp1CBXAUyiTToJ5a1SsjaHxg1W1V",
  "key31": "BKHL6gQhguzo5vEjkurDidCmuVXcStt3sqSqg1AVqjmDz7yTeYK36LRBic5KkF8K5v7WJW5ucft171JHWZcRWEx",
  "key32": "54KkJjimw9CyGAgFNjH1fhMwmP2BbfqbHYZ5YSNhzgC5KJAUgDZ7F7acen4gUGBsJCjKvyRNSnSanY4XDzWSTjDz",
  "key33": "4YoQkLm5s7traYiPb66xg12T8yazv8MmXPsSKKCuP3LPmL8jgoeMMeD5idj1Mq4a8sW5E512FPBT16pvwM6cSdxG",
  "key34": "US8mE2CJC8qcqWoWCRAyFWvndeWtMKZUx6VgQWz1eTYHtej2C6GQUUyAv5h7HrkCTCduNT7etbMG83kMzQgU2nP",
  "key35": "2tm6TESUcqJBkUsv8dVDp5W7xmkhg9Bbgfo3fnXErjEVAyKj4b6cBsaS4nXHofaAFxUzd4euRg4WSDJACRdf4NvJ",
  "key36": "2CWpdaGLWjqWXgZf5Qi7KtgYJWZk3aHhaTcj83eS8VHQAb1RwyucUe8Hc2gjB5YNyXtAbXJftNVbvkCDRM86uBfM",
  "key37": "Go5YEebVxLiKBLcdBTiqjCKs7c2UyDz19EU2BbcZsozvFCwjoBUsVKWToAkZrgGkyusnMavYCDETP3pTuQ4t1mf",
  "key38": "63WiMLd8DgmqhmQeBoV2tcWwZUPtjzHGJ2wLkGewb4sygVohV3ihNry931B2WaWFLGXdB22u6yWGqFvCm1abH2Uz",
  "key39": "3SpJdw46W57nYoFbXFowai9xXVqRFnbiLVXw1j7JXRoKs5Dbw57GABxVYXhNBNw6oBJ15fah4Lqz7j9mSHXYn5ki",
  "key40": "4rfyLMEXpJwiaxGFT6jbc917tX7rYUnqWM1ZWN8AL42mVFyBgJLmPbH4BEjaBh7i1tLWGSaqhE7HnGPDdVPuneVw",
  "key41": "4LPcJNvePzZRFP8BdefT6zCCyehMSkQKcy4u6wGwBEKAU38pZKv2FacZyhChJ7J5LKtUeUgRZpc9xc6nFhTCVsh4",
  "key42": "5NPbKDKAtsUhj2PUL6fuW2FgAC4bnUzknCnyWMe2BPyCQ32t5JmoMiKyWZ4sTUfUCx1f5V7zxVkTCRgUTwCkepqW"
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
