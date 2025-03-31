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
    "2sFzfST51XMu97voJrWPBMzoUdgM5f1XsEX8aKGvMSpLP8JNuchf7cPbNuR3UeHciPCFPcmH98VVNAWKuKa1hUDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24PF1Kf22okhSLjR2Eqe9zpPBBaFt95z7TsZzUxZGQmK4o52U3QfZwANGYXxypsPGcCHegaRUdE2a74oGVL1ij8v",
  "key1": "3d1RUhqpYn6xPWLzu1MzQ68e1ivZRN86hAbwaXVTWUt9vEqBz7Bv72JA9x4EZsvYRrdrPFZcMqcUbuDhB9CJ2yiK",
  "key2": "2g743wE14tBXAXq8oj4UVyrN5sU69b5XnJLGQ71QsxjNnzgHL17fk6i2uXZi4egDmWMxVVB3LcuPB5CsUn4MAWpi",
  "key3": "2o5KYwVhAoJAtMCkum1MW986PBXis5dJThLHzD2jpmdzFhoL9aXX2h8nVhEGuEwZ8RpgGBhb4iR1tRVwYsbd4tX8",
  "key4": "3WhHqJiHXYs71MPhA2ZvVxmUEX6ueTEfiUxrTLuQQym5Fqdx7DQG1ni8T5Ju6zDiC2MKajXzYuh1EaDE7zofENkW",
  "key5": "44gjLa2hg1ia9hdjiNvT2GDrF1UgRjhsfnBPTK28s1u1FFpwLVRrZTdX4c3H4VRFkAzPueuAqYsWStSzRMSgiSdk",
  "key6": "22VYwXrWA9r2PPj4fgQ9cozvkb9EiBs7bXTZBw9khyZw8H7tiXsatT6XVWjvZucXxdsbFTBAEvj3x7coFZZMF6mB",
  "key7": "2npNwKZqmqReb5qyqGDrrYAphQ844mQdzYfK863cGKS1F7NRiDgvD3qEc1e48o57H3pg3fxY2fTUitmk3FmkyadQ",
  "key8": "5ine8AyrPUDD8wG7oB7c2RRWB2G4GzJfdYKdTFi15G3oF3cfuFGeqXG12SQ33TBNPFGwmKZ3mK4sByDsgn3dMkdR",
  "key9": "YeTzd9Ktpv8ja9yNSoJBpUG6u6nHVDobyN9ZVyi32YCXpzgFLa8qhZo6jRkruGWPM1qF4EPFD5VPhcCMxeg3v71",
  "key10": "5CbTwCf1jDYhK8tS5m9XTcV1UYnZ4n9TjHpyEW9X6hB4Vg3ZHzNqVfwjiUk6iDyfxtUn27C3gnqiqjcsPBCxHKN6",
  "key11": "25GSr13uYG9gFgmdxfW9YpzZqW1HxVzc8e1ajzPhgDevAphEZnGz8DSfJb8gHDZeC4sBeedUKPF6RRE5ztZtvEZP",
  "key12": "4JfeBTEBQP5GKRcbuCd3CnpRc5A2DRHxyC8a1yv2hp4VFGarA7qvrrHX1SjaAhVwscgW2tZsvSMsNGML3eEjLViQ",
  "key13": "2DiaJJb3tq1f5kkmPkwYQX8EgnXwRdvUtUcjtETDKuN7PLxNwv4o4p5WQatS4LFXgdJSazQk4c6s13XLeGJeFesY",
  "key14": "ib2sxGrZVJB2BxvuiQdmteUnsw8Ecbqz567QkRXBVtevCTXnJCVpDuAXAMDHaUDgdabDipMqR7ZYTWZ6dFiKWM8",
  "key15": "NW2CQ4eTHkGBtb8jasnETwjvuu2Vis8gAhQh8JzMhFV7rahXFaYUwcLR166hZV2ScUKJGPvpngyYyiGp86EZY85",
  "key16": "Vs6tkY8XDUZvXdkrtu8QDzXnLye7Qu2j3dXvEjZdmJNUDZ4c4jpkYkK9KV9UyviU985D3gBTdHCQ8Cv36zahvRg",
  "key17": "3VtuXfAf2LtFLbpNNPZZXWunuior8TsQQLJ6BEGaM5zbxWpc2d4Yc4NDD89tJswyjJmwPmnYxNkyTZgAr7sbgxQC",
  "key18": "26kJcxSLiyxcpoHzVd4DtPCXT5ty9KjRG2mTpgvnhs2SXRd9FE4MMdsZ5sQJKGa6oBxZAqCqEZ6z6ur75PpM6AYk",
  "key19": "3pkP9vXSQFbcXMrGXZDvQ6wZz6JRF4HQgzDoTHfcrtDomqWMobD9KqWwa97YsEgaxYRdbcC7YraE2xSmdNWTDMnr",
  "key20": "2HJLGEXrQdnSjHayaFQ87kxMDgZGyC9WYBmyypu6jQgT8oCE42mhPbQxzVWzcrPYA3dq8zxsaV9wAkTzN8wa5eTx",
  "key21": "2DwUXnF1y81DF3iTwh9s972DmCdMZig8wkiEQo9rkGAC69zDjRLM8NV6R9MPY2z2zjPGDAXvup9rgXWx2tyJRRpz",
  "key22": "34yFGrkQ8B78KMLqsx5K7VaEtggfQzRpZdFdFfC13kcjMrYyob8HMoN57g83ghhDrFKbFwVvnzMouNUTSBjANKCL",
  "key23": "981kFxQxUJFfRdAJzSXCARxm4pxgTcTnWBgjcdDheer9qLWdmhhmFxWHYXgo3KcbmgvBFNQX25wbv8s6n3tZ8FC",
  "key24": "5NBnGXBrBGfFH2XLSvxBzLerbhgBfyDYMRwEDjczaQaxiLNvddbaWgjg1aun3FrNFdpo18ich82NPRBLmdDjLAXe",
  "key25": "3EWnWs5x8KXZCgbvrKoPBEHQWJoHNcshJiuro5AEq5XSui3jyeGvF2GPDeEqesbxdZRH6zncL6bsFPtESmLwgxP",
  "key26": "4Tv2dYGFiRYKteqz9BXfeXhRWC1j2uRjVcpSjDHPL2DfigohMWXZFnqVJJuLiiK16emKBA1eNGbZ4xeipdWUyMTm",
  "key27": "EXeY7vDCYVL6kHLGGBpKSkf96o8aph4nKJ2mPuNpk5ipXKt291veQnaei6jCPTGXsYWWLQx9KVAXVGXGRmDawqs",
  "key28": "5NPzgxKJNt2nkBnNLYxQFkVx6fb4sxXtMuFTptQa2E1tU11vbtvRmU8KjT9qgSDV2Wg8WbuVDAmNVSWj2xNqpxVe",
  "key29": "4h781dRhQBwvXk4b2JxYidLgSFm384GNYH9JZAoz7y5F3Gbd92C3VdHsCvT3KMf8xiTQBDb5R9DJZNotogVykNoh",
  "key30": "31TdUt2dudPnLA9taNBHVW7ioiS5GPGoJaKGFtPbn6XDrNzMD6LK8h5BQtoBAHPsZX32G8mNMaMiwgzXUTPiDhf3",
  "key31": "4qWwqQccYrmzUPLkNj1QrL2HBRm5EDoS1hZqp9GePKoaxK3TCu3U8g5U2ThiUdKjMsrUuHMWiKTTJv1C5E8wK8ng",
  "key32": "aXRb1khvFRt8gZBiDLqUgUeT379Jn8wCLETcjJRRaQ9WaTsBA44U6zTzrmkTn52VFG8GvU2AGMjXr3RM3CWHdr4",
  "key33": "4xLTxupDDJ4sGwzFYSuy5zr7YJRRetQUsXAe5KLy3ttmJHoqVfp5F5eHDuoyVvBk5MSeoWy538iEKa3MAUwZ3vMY",
  "key34": "vJcmM9AFo9cpCBVPSJbxb1JbJSicjqmXXaDUNWjxmT62gXT7Q3WZphAT1j72Mxj3sfsiqU49LJ8SA38LHvqGuoH",
  "key35": "kabDrt6p9AU1pCLVqewuj2C8m2GxURAahC2SwRvrFVfDyV4SDGAtvkesSjHW9LAGsqzMGHT9PpFNw6iDRtrAeq7",
  "key36": "4pNq9Q3a32Wdp825DGmRw2bTZ23ke4gGqtBhy1vjJuJheYpMafk4BHNcLbF4jbSEbegk8UJPueyx3VjjHEVEmWEj",
  "key37": "JLq9PDtqGninVzXy7MXn6epA6x6rEQ5X7RywmPNURU8RcjtF37rptMTc7mndp943BX4WKZ5rc8m6kx68mfxRyPT",
  "key38": "473iK65MvVB6NMQXRJ3ZuxmVBjojNWS4ZWmAo651Jk25CASKQfBvS6Y6NizkSQHGdKfqJuF6DRW5UDy6R8AAx7XH",
  "key39": "22mjWs4hNwSsZnhSTcaWLg2QYzyKBK47ovBeH8o1fvk3xrt1ctcjxiUsCH5D3MXLJnCsJUHvWYmmP9Be53nv7Rtt"
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
