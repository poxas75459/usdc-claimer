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
    "RjWSzpTVTvPvCGujV3F9vkzgm12ysEFMKSRDFj8WQeqpFrcJgg5TdJ1Esdrg58orSAcBLQYRnwb7kiBX9ri6V8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fYvzmSUNDjqbMHwFFTd4ssbRH5nZWudG9QQq8LM2k2yXxVWJqJBmhdNhKLyhqbZc8ydjv3QGWvmrPjmuLq9No1H",
  "key1": "3oqzACwBKMuKD62Q35FAGddGn94uvX6Q5TaqKu5gUXD74i68bmVT2zEQD2z9wBCVmgBiYTQJHEoqeF21vpuHJL9a",
  "key2": "4Vp8FWdVRb1tKcs46SLcYw2KaXAqhqTidLY3ssxAjkYdt2oZYzNRqVGWJwtAKruhWaEPrxbrMCaKUdJffVVokWxt",
  "key3": "3VuvFngUzv5yckCrBNFBPifLfpBwLijFZECLTdvWBxZ7vXVWnXGXAh6sedPsbFoFVb8cpGdUqNkzC7tEqTXeuwjY",
  "key4": "62pWqV9N2d79pkaBftnAzDLNZwNBq768UzxQP2DZfBEsdme7qtBZ6EBgK46VBmQbAwMeGpM56FoX7qmMoETxpbDy",
  "key5": "PtHWj33k5orYSpNkXucH96GpGZDWgrv6oLnSK5kJ5GTz5Mbqz9a3LFfLFiwWQfQnLi5aSJS9XB5Z7RxSfZhjoQb",
  "key6": "5iSZCWo5k2mPP5ENxNLz9kx6ojxfKfQYM8dFRp9WatT3YukYEt5FwLXWeJnguR6mpJCMNhtbNk7kNCHUcpfVWbSb",
  "key7": "4eUzmJxe7NY9Y9CTXUzCHXAFKTrf9QHecuKByRYMLnCFkaKmnGLajjibGboesi3yZPQpQ4CCmLz1Ls6nUWpCgaZq",
  "key8": "5UNL1hADjSoCuGmYgcGgzLZLgY1U8qBHqRKib8CZmU1q7swsVKfnDCfAmAd68hY4p393JphMcXKM5BBHqWRC8P5C",
  "key9": "2BFkLBrpxsU4gSjz5empfjKzPteGz2xBTQQQLfEqhHK7AvJFXNZrcm8TVzVrKhk6FvPhcFeGycET5f6h3zPSU9BL",
  "key10": "24U39hL7APcyCdMA875BjHXZ8tZwPar4jsWhXoiY5jHZE6nRzvJViU9i3cMXx3h2oVqceGz6MeZGQY3JFZtkJkS4",
  "key11": "5PEni8Gd27McAeyztZnoy7qGafTK1vbUrJLmjH3SBVyTNAdftgJBrfSLnaK6sCyvfwwwgNBTWgfMJEN3wMcFVyJV",
  "key12": "597AezvBKJrvP4fR8BF9AFgnVL3Vi3Uof4biErtcRapVzR5yidkhbM6aojfVY9LH5YdxNyePUxPkZ7rSQ5KVDauB",
  "key13": "5TyAQ44QPLUuWMPx2tjFytrV356k5eiiYdoS6nh8eQyJWCUrmXdAssYXMNQaT7C5rVVwUdXEXnUedhpjJ3ENf649",
  "key14": "3qUq8XMzuMYRKzJKQLKfrr79FB66anuZ2GqAb4sGFa5xceCKL6uBjTzWiKmmMkt14bnW7LBLjniNT4i3bhE33j1A",
  "key15": "2bJEMmLpMiiB5G1fygEp3aSN5nymKYNHZAt4LeiFzk4rZTJrYfLy2Fu69ba2uxGxTSCweMeAc73JdRdsqQYZCvV1",
  "key16": "58XH9Tyyazm7MFRCvCZtXBtCzL31BpGduQV63hnPuHerdvpGAX4NCR6ePspg5eo2mreK2vXfzf5yDSjKB8K8BMvn",
  "key17": "944ULAT6wYP6F6kmXu8hYcp45KHoa8gj95gzWnsZgkJqFy66UpwVQaE49aeX83hzkGe4GeQCFWXoCisUrPtc5ML",
  "key18": "cuGtbR9q3mBwrtsQDFiomHRTAMuweyXJ8W4oigHFF78MVKYeFDEDrQLUzuAFMPasY8sLUiy9Dooztxf2oKeAqdg",
  "key19": "5NjPky1VC64dcAgTWVSA8ZP6R7wjqgm58HT5cqCDU9B86e4MSCxauysg16v6mrBj2UuGtS9Q4i83yXwCWiqoV1bm",
  "key20": "4Xe8WdRadwNmuZ37wsAwgaPjM83B35U2VyxpLTK5QBndXDF1Ws6bXWVvy4f3ePP56MzfEEjZDYKGDLSLzUGoQ3XR",
  "key21": "58kFyipV1aSVF7UCtuYFjXGUD3D4kQVzpgG3f6sAQgihJSU9bczs8RNdrKM1gHcgPjxcqbbRXtFTbZpVn9iFzAD8",
  "key22": "122cdLRie53pK4iweJ7WexxSmxygxHgd7rAVtoE671NLVYH7KBukbAE1WfUVDygX6EMc4S6UHVmA2CybaSoHhrjS",
  "key23": "4tZUm1mQzzP5pVPrUYKfvLeEJzKPYjDtF9tsjHApEaN9gbazeukbzYYGB26c8X1N2bPsNhjwfVjCN3Vo1XNhMvPR",
  "key24": "31WDdDURNZctEqVzoknoDTDJA4FJRaTRNMEHcfZiNdUiYyJsSp1LkTx1pxWfGsLWTxcBL98o9WG4XygP45CLPPm8",
  "key25": "3wemuQsiG3Jrm5imdwqzgPoSMz19pdmkdc6Znn7EyT4FZGgvKFf8rKvwNawEHphXZPiGWrbC1MLzVJEYfyFGucjK",
  "key26": "2ZiH4JVDe6rJed9EtYQTjLmhmVLmn1HPciJMXHcrKhqk9kuEQ38e2XGqradHRmQ8GgY6gBJZU86uDwmR6siRgfQn",
  "key27": "2FzbtnucnXB9uUqv4kUsJJccEAFQ4U9kAb6WtcCwnydRrU4cKgZmjMZH57T5qEYacVBsbFhohU7nJTsVJtWQV3e3",
  "key28": "5e8k6ur5hn41mssD2gcfYr3qJ9Ka6K9Uygv2UucnyZQe7XesF3Z25pZW7eqSb12t4wY1hEcTwpbtEKuYASpReK5H",
  "key29": "D8DBFrLjmeejbfbcbkwRXDjZZH285w1ncdQoNsG7z5jzzFciiVLXVjacn9UUtNMo8fY2ZXiYiStp35B5QQufxRS",
  "key30": "3hscSQ7S8SB3PKF9fCSn8KDHkC8nKrX57ShCMz5BCxFRnP3NSXzq7XsQDk74F5FGVEqbX9HpMBD1rxoNp3FggTFH",
  "key31": "4BbkMXmtt1MyioMp3v8Zi68ckkBtfiKnNczmhLxHwA4kssCrvATrB3exjD5E14EiKHTnx3UMs5Gd9rz4tcfhToPm",
  "key32": "3uC1YGbVv9F5J7v5oUnt2u9zNZ4qj1yvNJ1WuAyHgD76iWDpLEmU6HPaw65LrYRp7jPrP2Nz5qKsy21dLC3Q1PD4",
  "key33": "twJHqiEUKjQhAa9qma6m62g25ZxVCHRjm1aSVqDyhjsE8wF45GcRfWRGn4W2NaqZHhCv8pvLpVUyizQJWH3vaTy",
  "key34": "2BRMy3PErVc5rBeaWE7v32pbQ1zwNVbDXV2ZAvHVyvKCtPeJNydRbHpUPcZoacxHpKmfcwcSaZDziXhAwngZbLyt",
  "key35": "4xF4Fp1RFwvxy1NipDsmXSRoLjN78zRBqW1RTo64ULgS6btyG6M63wBSCoRHSS9wd4jofiDYejHZ3U32ZcVqDTF8",
  "key36": "3efRsax1A7LZ1BmAMYj6QsnqtuRbPtQqdHmR61Wb2eiPxaatsSB4CP96e4YgG9S89dN7fTSX7ZwTbiD2nrKXCwLf",
  "key37": "5SQ5sZhJ1e6DAfFiLf1aBCZ6D8TW3UAKNxJdpmLLFeVHprPhXHaysx2D8rQonexQgKhgVcaJFq7rEHTJUz34UYLf",
  "key38": "5nTAX8LtqVsHMgvtJxNBn9iV5Q21Y71q15kASdMbA9tywh1ZaTEd3smuQ1SWTpJqSnGEcFzaQuS9FRaDMogj45YF",
  "key39": "JmyoBiJkRgEdNhLvD7aG5xRtMCQVvXF1kZ6BrcCjpHSewUt2MFMXW3W7QkTECXBFn6Qe4AJ9Uyk1S4SiXjqdXe4"
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
