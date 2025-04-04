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
    "8v5HakBhmhLcoTr4Y3CyH4ao84BryVpCA1QHrbmdFuRAvEtfsKcQUbthpaq9XzVZ4Z6b4HVQhNSPZDHVLb555Qc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m28JmtAzyBbZkWgJHwhDu9C96po1MAc7Lx4Datj3hnNYKGqsRfCEwq3ZZhWWbcBrw1oPkTs8WUZYUuBo2GNPJaF",
  "key1": "2n6yFeB7r6btD9FQaioTy47H4nXT2PsmBaBYuT2W5sZEQwihtCyPYJ1GoYm4a1ufMjv3GyeGRATraqtFman96iw2",
  "key2": "5RP9rTcZQsVzeTtXkoxxih9VRu1qPn9hzrJeoZUKKBzLmVmtAMsMw9nrRsjiLvrqVJHK24ndv9oCqxLZbCR9BJTt",
  "key3": "4QDFTbuWbFpgaCHiW2hLy2RTKPb18x3rEj7DTSYawYAYuJEqB89DVD4zkvr3qfCAsx3kUj5nePqoBLXQw5RiYD34",
  "key4": "2jQJKNd9oomPJS7HZr1cMBhq6XTYWSpC2QGwXyfES2mRPCVhXdHV9RY17PKd7GtBp3DjbVPWCk3nCRUk5GRXDCeG",
  "key5": "4HPP2V8z2Qm6Q5RHnRNCcuxxSyX3bxQoSuGhdL3zXgDVhdLccBBCWZ3RLZvEJgmnUiyVVDv3SedQ3ECgDy4F6Rqm",
  "key6": "4bXCHWQfS8WwJUDPgrfX4RyLLYPRhqzAmcyX2MVuKVYGmw6CUUXrMaYMMG747kn8eexwALphaYrWwtybBNuMYh2C",
  "key7": "ztBqymTJdsQXj4tpNmLKA3DDw4Re1DrxwAWMK3yCm2WCUwvuHwsFtL1PZk4y1LtphxLkUzeoWKuGoeAfbAy7YNw",
  "key8": "vHDk8Hx38g8Qu7WyCyh16JcWDNZCrnM5ujzQ7Ud6iP1m9ibRoCpasjVCrbh1JZwxFukogzE9vJqGiFirYhkZKj7",
  "key9": "5UEYge2vgmQQE1g3CjTp4Dm2iHeVJLcAbCTMtnxVpohmcfgSFuxxqiNn8cc9EfdiPLkfPBX8amEq8QYC9kPV8bVT",
  "key10": "4c3C5LMTeYsG7XPhA4ms1ojPkV1sBZ95BAAqvxLZi4Spe65eJxaXk8Wa74oSEEh35qK8ASL2cWVGrfjajgSmjFB7",
  "key11": "5estfp5zmzhUASLEqVMZXXB9kLeHCHCYmCK1uqurK5nmLS2HrV2NZ8wMWaWoRbDnp6nCSQSPFnJagGadHeZ4pHTu",
  "key12": "3cx4zh3Fc4Rgn4ctWkU1GqGaE558HYxzmyCFRKZD6mFuQXygBTZtGrDW1As9rKw3EaZBokbR4ZVKdur7R4M7AY3m",
  "key13": "82GRTevnnGDJCPq1Bw2ihBgZj44tBNGEus3BKUajnrVJeHmGkk6rFUp6QUrdnRf4VRX4VebZnpkykvfEQGBCiav",
  "key14": "5VFpquf8Fi7fRAGDWxeAnqa39gHQgdK47E8p7HovD5nhwEjcTvP9FDSCnGEtyYqH5XewvzSL6czg3WsuUAEL74KC",
  "key15": "2GPcCmRqbtEHwG866aPB5vKvMCZqXLXKva1N5JVNMAK2UXcYiQ9tdVkBR9fASgbe16TGgxCF6MWduBoxevEKT6Q4",
  "key16": "4njbnU7yTLYq9z7egJLYE8qjn5NTz9iEUzuELCAepzS3SHTCzekLjW1ApuhQ431h9SBrkk6B4DUoFtRb795jhE1t",
  "key17": "5xprjYmBpav94ZSVfU6D6aW2DpaUd9Q1m15icDWJtYBdWjMqzxG6sipwdRjKfqhvaxYkDLxdwVPtR7DTE53t1upz",
  "key18": "3co7Nb2hv9NqXWbfH4gDvgULibL5iABApbQiBbippTjZTjpLUTXmZSexPT91rBJF58wZrsq3pVeLjGKhwxH1BqLG",
  "key19": "4fStd839KyesNKbvAvNqMiwasoiA26pzYz5X79UZm9sFzK8mmk5gRm5JR8vUh8P1H75G1Azz72nHAtc6AR1J43Dp",
  "key20": "m4ZttXCpa72AhGScWir212AY2wt9CVsH27m3thjjnB4afExtANUH5328vLjTqUocB9cEf4s5CN9hCZYAcPgdiN5",
  "key21": "2X47BCW7ggXdDJurCn7ehidzRzf5oikkVNt9yHgjQtfAd8Bj7PpvhVbHC5pWMJQS9gUdPTduW4Z671euCFcBNTmt",
  "key22": "fHm37XF2RB112cxK45zcamNjz7fZVRYFymzXJiAv77mQdfefttbi1u1K7CwT39fKf56ehWUHBvxFuUypMtHACrf",
  "key23": "3o47YmyeiyZgN7NdGKmy3via8TJxWnkwxotWwCsTZ9fgyo8PegiZzQ9jkUd7WSynquUnK2DfUrZZUCeNwbxyDfFZ",
  "key24": "5JMk8wuRSvdZCJPVTdYgQ7JWBZqfmHKrA9tjvdMen6dbvzPnCq8Vna13RGK9LHFv4JFyqztKJXFoNkoAq3xQsKpo",
  "key25": "48AJVpbRtpMahatEgkmXgPy7S3T72mVmHTxorTJ9RN6smHLBybskHWpjiFEnxihMUePkHQkpHYsGmcVoQ63WgxBf",
  "key26": "UsQFFSFgF5cA8QpoABoZ1NzQVio1ZoB357dM5AgL5SMxba8DNMKC89m1mVm2LkaDh2xmMBGQWKQZskuy1rEYC9M",
  "key27": "3TiXvjKCfuxFFuFf8TWJ4FxPXor3uREpRnM7ShwbMqLhwsKJRo5ZhVTZo3oSorgh7D9gdUBLYd51ksqgF8trxUsc",
  "key28": "cEpVxA8YozsNduLyCyVctUS4K9EzPpVTBZpxXhLHv2k7qKLswjHid4Ho4RmdzuGbbs5zrroWRpcq7Yws3PjMgZT",
  "key29": "5ux3n5EpGbXMb7vwYMpZJQ47EihmwVV6f3zod6RiCDF9vjXH7sNf4aAYbYWtdbmQDz5Vu62m2NkgBUgW2EY6TzbY",
  "key30": "4en8ghwAMhsWXBEogDi2EsAbedRPPKf62z4GdWEQXmVLyt7dbKq9v1WL96dLwcVR2KHsyxUVDQeMDzfbuxbnRGVm",
  "key31": "2a9uzXQH6w1YAUSWUKGim5QjafTa4Xcomytwgs1wzyd73YvT3nFGRv55dUJeZhD9jPnBArNvf6V6tCHqhHL9WeoH",
  "key32": "5FAZoW8oLTLBb2qDfEJ2U4WmH7iaUqxQTXhqG8mGpVff1Z79aNHmjjDgwabwWC1S9fjDc9myxP64vyDG8ui5P5Yd",
  "key33": "5c6JncyLsfR3Da1hUJiBvb9zrU98gg25oKMoW8CgtUhqDf6kqC59KL3s5F6xNsJrLavjWHoPzDfZCfWwNe7PAe3S",
  "key34": "5x5UyhiXoqpYSLbdWpuGc8gjMtZuc7BDPvdLY7Y3yDUXqY2CD31Bzt2xvspaaLutjVR8HA2XAF1m6hxYjkNCFAE6",
  "key35": "53SvqmcmD5MAdXGLxa1CLocJDD9wv4urhXx7eK2FvGq2H5BFD5ZUsEw2CUnpGEJJtQVGrdGzhkaEiR3Y52CsuLnX",
  "key36": "CNL6SSYjQwNNgbCtJPAmcj57oCoNdmg3qF97vhN1XHxqq9R4f5FPx3C69xVmQcBb44y2qTUEkAW6fAnYdpgfwUe",
  "key37": "LDohbCoCk7BsmesQTbVYN6i7fQnGgHmxCUzayDEPK42ry8E8aXPSyeqvrLo4FPBPaS2XMCv8NAXc89pjZizBLWh",
  "key38": "4aRaAdERhRJV7CtiocPdqjW4LsB79Q8FqguG8uPE8uq29JVvukvSA35hc1uwGt2D4kB6cWuc6Vr6L7UhsSQ9oXF6"
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
