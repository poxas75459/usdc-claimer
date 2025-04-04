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
    "3C4vCqrRHR2k5nv55cN2C7QG57mywmkrhHdx12mZCQSt8Hv6ekpuxpEBVvZMiz8sd86hbjLP7wiK42uE2yLQjvtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aGpeGaXgqXqsE17STtewKsGkDDgRHrNxaWfyD6oeYQxCX2JePXwsp4UhPDrotTw4r1Nv6Th4VeUdQCiB7fh9ix",
  "key1": "2gYuusaVQ6JEnDphHAMCRwHmZjtE52Q9sxPXRwETj9zBzJr8HQjJcknQMEzFxGJqMpP1vaymA7yzVcbHfuLPKAnY",
  "key2": "2vF66bzGm9Locr8yvLBWHeiHbsLYt4BzfzCfV8Sss6AqpcDkPc9nmkemsiq5DjNKiKMMbmzcXxoJKEc7VUppfX7o",
  "key3": "4eyx3CJ8KekHAkr6cwbVDjeSctEDaSaxH4j3x8aVYgyvFoNK6e8wJrjvmEFZK3eBXvEZRBNY6uKF7NuWBMQkAyzm",
  "key4": "4co1sQXeQim76d6vWvJDKwiTSrcSPxuHi1firGS6KU3vkByVFngRenu6os62HKNMKm1ynicCCeXPC26w4fN8yfTZ",
  "key5": "3or3uDLKH4Y5fxe4DjZaUrCEZrQiWFCuD3Rma9zn2fKjP1hXKcZCvwE74XTdDdrPeszFg4LVw4cMR9K8AxbDKr93",
  "key6": "35uvs7Yj5iZXYFHaVJusyAkSmLbogsMoY8vwxGsvW9EMr75mGomzyZhRLFT2LeDf6jaxBCCRixqw4ALaggRwbrQL",
  "key7": "2T7YHWYQUxnydjPjUWnZ5zNhBiJPcWu3E4dSshYjiiyxr8fGhCzmgK2jeDTaZHHmux68A8wEvtyeicuTescvrMgF",
  "key8": "4fAm8YQFQhmQgDp36uJzksiFwN6SfNaLR8SUKvn2u26SECH63WS92MaAghxxKTRSBZC95GfafSypjbi1EfLukvvg",
  "key9": "4sYteijZi2xfCPKUhJAvqpmH6e4DQy2MDXEb2EbZvkTGdJjJtGCPDUHswdJ9QcSUf837LW7Wtgm58yR16mVQW4e",
  "key10": "5gB9Yp5PFPc5KTrnWVrF3s5YpPWDkQijhdjVB2jAQ4zVjHFJDdsDD9tMacMVtUppPU8rMV9memNUkXe51Hz3zQtx",
  "key11": "4TFnGcasoXSKRpwnxpzTPut1FKxS9SXTb4r8SQLEU754KAbD4XgHkodvH5wmNJo6P5XHHRaoUgrQZbzhgr6h3i5D",
  "key12": "2BqK8Jf2HpvZNHsZPuNFxiGhbtREyEkLMHZBNSPYBeWrjyvVozmH6QQD8knruWT8EhTyEPh9FMo2oTRaspEzxfZz",
  "key13": "dfe8bMfQrebQ96M4oJTir8yPYm2gAj6psnE99b3oQooBUZD78dsrpxLeZXSpQTE69XZiZivq1v6cqQQHxizgP12",
  "key14": "37RZTRByr7XUNHkWWWCqr6gaXSYeSPNfrKWER9rjeu3wPB7rH4UWUVihWwK4Zz5ufwQKx5fRrEMeCzVdFKEQgT9B",
  "key15": "3dDiobZD1o3ykPfVzChz8yzJwL82cc2aLpSo8y5tk5LYA1NKbNJGXJPrR5x3jv6AvCKnZqTcQNv8LuPs8rkq2FMw",
  "key16": "34B4qFNwby44GUMncj4xeQ36M3wGuJZBvV5Hgun6mMz7bJFUpKyaP1x7dfRA5MvognrfMJ9TQiDqfDRDGk9dVdJF",
  "key17": "3CTMFDzYZWWeSn9jbhnqAiPsqsH8W83nw3p8bEf5aZyuGWzC3eAdzt66W74cVgVV4iQY6BwmZ5st9eakLioQTZGW",
  "key18": "3wjKppwY4NF4vpTSSN7qoYnnqR8scbwgbykHq6vZ33EWrz1EgWApj4pE4MoFFzfPuy86NmhPjxwXif76wcMmy3s",
  "key19": "3Gtkpi3fbUysopwbJHuNDD5ke7mUdvVRmySZcs9pamvPZEeeBNoxEbcmULQTWUReUmp6xmvVxGFwwNymH2xoxLU9",
  "key20": "4F5jQqyhsZusVhjTSGjcsDViSXYMNgTGfNUbbPYPqhnGfJjPErioLtnian9Zkm1SVYW2bzPtWzugBL1fdDQLpgtZ",
  "key21": "2F4n19awwXn8EB5UiKAzVPNCHoED7Mk1n5xLbrWhCS734zB96FJUWA1qoY9qwt7QZjZXLedfavKow6W4zbXsGrQa",
  "key22": "i5Uro3hWgfcGDZADNN8pQvmV7AnG46pb9rSdWqoZGQf4WQ2HLpNfW274Ne76E7fKXQLfHCzW2S7HUDpKwNCgkEP",
  "key23": "tJGSjtksxuGVAHE6prxdW2dWYsHYgGCuHX7Z6Q2TRZX2WP6uodEBPLLUc9KfCahWXRogN4W5qYfbK4QWbd7zqtY",
  "key24": "4LXggcGmeB6Vx4skMVyNr1L3kmYuFugmgxRQTiPybCQxddjT2mCN8GK6LC9wT6oV3P1sn4WumVssUZiuhwbyktTn",
  "key25": "C4EwNnAZ7q8mf7M3tC5dgzCGQDv2YR7t93q4pKCsYoqJtXb2REERLBhCyiUcM8JMxdJqzKVQCixa99sxeVkdqbm",
  "key26": "5MVgAPAJGcDtdDZaZfHNJuSMUiXdV3mLMWMz8wume7uwm4b16mFE6T774ETBz799WVpU1qDuHYjwRpoB1FD76rMi",
  "key27": "BX9eKDGPxbiMwcX44wrXkn1553Rabu25U8iombv3GuL1WqxgbeV4pyuxGAvkHous6UMEg1MdwyG2WLaN9Tcg3gQ",
  "key28": "BurvfNkLKNmDHNq16kdxxV3Qu68LYwvFKKvxFTYaxRhYDsKNNnT22TzajPdeTC1rkUc5nEH2t2tXsnjkRYmB7WR",
  "key29": "2b2cR1qt3DnFu5Yw6cWvhB7GykcpAascZ65CmhHgQeKMd4wNJZkk4q8sPfxfFyhNQEjpGHrsftJ5VfNYS1uV7KK5",
  "key30": "3CNwz9BLj6tKjXi22Kdy61ZPWZC3c1BcLzjpsbii2u4FV6VCvxNaqnXQi4owcj9o9cPN6h78KxCs4WSPbCJ7Uop9",
  "key31": "4methEPhq7sHhx9NyuSygVNpPF5VaHtGSD7Nw5vbFUap5HnJwfJHvVymhdnYXXCHn9Dgb4YT66KKYpatLgUbDbmY",
  "key32": "4E6qxue8p8ziSyoPw3ACEpNLtiDwzLYMJk5d8Hndkkc78FLarTKyevDGERfc73xi18w8EuaG75htpzE7Y3mayFZS",
  "key33": "2T2H2MspMV1Cn9n5fLvix8STHQmWb8UjiCA8CSf6x6y2hKeJ4xcWamU9WkYBmQW93HiYbD8Fd1LhNCgfBUU6qfTa"
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
