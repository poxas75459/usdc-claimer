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
    "36fGvuAnosVaWZGky6bwdwjo7AjeeqwFYVyA6ovPjPzS36D2mTgsTNutpU7qdrGfs9zkAtoB1UPoaJU35Ho2WXTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r3cLHbRhFyTfwvam7eidRH85WAsGZVNt4GSmEQWfJzynrHyJSTEiHzZP89SjrEj4esva6Yw1qFzYZcXrKLKNqch",
  "key1": "3HP4u5WdzVpQ1WpPkKwaK1RWPHMgbJkVGsKQZG69BGNn46ta9dwhugWbQVavPehX8Xm7gGDrTYV6LnensGjegJG7",
  "key2": "2BVSdYaaV6ZLKFkE9RX1BFFZegX9ttcB2fVFX7RiDRsmiBULcFeYvcbd9miMtemWGWHVQe9sRJmntiGPobLHsGDt",
  "key3": "3Skxe1EMF8AEaRKvUJYcSn58PZdq3HLkwJVWoVWz7trADovKhonqBzrLn86tcKqLwMpEKSd4Xv32BUxfpvpjwsj4",
  "key4": "LqF213D7reQmuwZ9yq6FAoAcpz6cJG1hC1GoY7LARfn3XF5jUdipB2txriBkmYDL1kf21P9TYq6Ur54prXGC8Qk",
  "key5": "u5zw7RHa9Bhfk4MgiPEQFaeKhX2GH6KY9cxS8oKa3JTUMMz9dpLmgau5L432qtwtqe65XZ1aAm74DUD59MBpkae",
  "key6": "5r9GoMv3dJ1q3TE9pj3J1t54EByKrMqVtvtM4e2GgdaVoyfduTGRuuAroykyUHpgvYKauhA6XkQYTBGo8TGmxFa6",
  "key7": "4v98tCdsYS6pLo8y12FZx3NJT6rLNRsRYBsEK7GaDuJwYeHp7ZyeroGtwTRHkNV9U2UthwXmpZSVg2cyDvzgGZWt",
  "key8": "5GKgJCQk4Usa75XySYRYe2QzsweaMo7gMaUpr6mEZSNV1eE2Z85tMBgB6aiv44L4Pmc8L8M8efoXzp3RKJv5qVrY",
  "key9": "3QRpG9LdgCqjF7WQyaN2jAy7y3Hv5ApYU8eqb1PX6YVhWJC7oq1AoCbNgFnw2HvFCG4HAVUh8JJmWzs2xZDAhVgp",
  "key10": "22yYXvJ8F6oUg721B1P4GABiH6wcf45NxrBw4auK1zLbwkdNuHm5wpc9gt2LdbmsYzorvowhJG4DpkdgX8gn6oT3",
  "key11": "4dKGQnsT1S2YLJJeztxu9vn5RXNJdRfcJeiWsnt3TTw5ucyZPNg9k2hZhnotNiQSMpCk3FBxkXNQn21G8Niuf7Ud",
  "key12": "3AwB7eHuD3xJcYNRdV6WMBg9nGCABLwehHXmjTmBP7h7VhkRHRysuU6kaEV8o269UY2Gk5xJjBJtNxeLFxwabtSX",
  "key13": "2sdwvkJb18xRBbKkFyfMAsH85ZhRV1A8rWtJLtTC36o7gnsccYB7MktS7rmefKg66kPY1qCtfXtDxtxxzGbRMHqS",
  "key14": "4oDrBChCozPsmCmZyVdw677mBfr4iYd2bBJcZevBUr4jyFhYp6QPasgXy5oUd7jQ6DPyQAENXsrzU2U6m8LyTKBQ",
  "key15": "2Z5S7ssCGfQNiqJaM4qcdquR8A6pjZ7fWeC3yM8PmpQaiH6Ecfxmst3Dyhv3rR7Q6NQnDkrCR926Pz9N9U2VPD6h",
  "key16": "dnQiBAcqamta7sYbXZCuBDGt4pfRs4KtTaAjmbMHvpZVirHMjJpfmj943zKAhyEZmzfvM7v8tzrHfp5RZ85biXX",
  "key17": "2wZgvMekR11ac3ABZqgJg2MBsQP89xV3CVw48mhBcHaWZRWeZAtUatUt1nvWoujgo3LLcQKcFmB3w9gKhkygm9ME",
  "key18": "2NTC2tiZzpMvi6JofwRQaKffXDefK2pGuMgTQuh9tRrjn4KfFakPQSoB4yk3ynbckPTrMgB9Tv3WYQaxCkfCN7Vw",
  "key19": "2huMXvff8Xw52S47TxHEuWJEq6jmk7yiFYUC7z61bqpWmqENL3LzR3mX1mHfcEfSkRRGpbtH4QjyTEp4jGaWEt8h",
  "key20": "4ohpp1CzAVcPfRF8ZP7us3nP1ctfpqLzeNxGT9Qmr9A9instaDA4V9WSUVC7nnhouDFS2emXahLincRpemx8ZJwg",
  "key21": "3poX8ryisXtJZEBy1a8HQZ1ZoKRQManUG3qQzoeFzJQGmSiZVhKiHU7sMeQygeUMVXSZgXiqVxn5EAtJVEBBJaa8",
  "key22": "2CpwJPjn51EfJSYE4Nz1srUSjUvfGvMoQXZxqrFk8A75qmSDvDMoXL5a1uh6387RWebubnxD4ekSxoGAG9B3ei4",
  "key23": "2JGajyptZsdF2wroU34FTUZReyzoECngvqfRvPdTNsGB5QwCYsMuJKARdMGrwy69MAQMitW4mKzjGhxhxE4PjMCn",
  "key24": "3hfVvraC1UKWeXUuV9h71E9siskE7H711V7wmmSA7LoRFavXnvjDkmNYeywtcHw9YcAiBmJwtAYu29vmZJ7XikGs",
  "key25": "2E6Sp1SLfTJEMeuqEN4nNBG3p7RCbLrKhivsRsnGGE55xKiTNnhdkEJHRngAgBsoVDtJfWna3MjGi8Yqg9LiaPda",
  "key26": "BfQhGfspeseBwgPeiuQ2x3rbLH5hmZAP8SuWxnuiCijR74A7W7VaGTp4tHREB3jc3MeJJfg8k59tZVEJN6h7eLw",
  "key27": "2ngh1rGdWGmUF1WGQVXyFS7CKUpK1m4XGtxswTcL8orQkgCZARNpHfd4beLrur9UqqUi2XwPzhtBbBK59fvZVaH8",
  "key28": "43J8RELPLhXQijivM7aR2i6eCoeD2a2qNhLbXSQSf5wrQ8dkgdutnKf4s7jcG2N7kWmDhxSRQoo885ChxnaBye7V",
  "key29": "5z7b2JUvXPmgSFYktAHw4LaxHK64mkFdBXi7JT4NsqaEB3tZNX4PB5Go61f2GkZRog2tCo6Visb7BUrerFRdabr2",
  "key30": "52bzcm97QZpQ97SWBtaqwojH2Tnza2oMkCmWFtww4gebavU2HwQgoig4fvPwFpTUU3SGvTZjhJ5b1KQsbEMEe2jr",
  "key31": "2skqJ2iXcBpwu8cSKJnZZ1gwKYsWiXqjdQPBHdKXja9Fmt74XGUur9XkqvpVsrWNWHpQPG9gTbS61AbAyHqcrdcq",
  "key32": "4dyBJbqX2bADY5Lys2e4EdqEUJ8BTj8sKtqavcQH2Cd3qv2GnorsTPvYe4pfTHjnTrWXB7QGpFeLfiD8khPh4rr7",
  "key33": "4GEvrStnREyFx7rHQCTG5dFK9BREKEX2TWHgaeYEzjhtXpLCB67zGdUazgQ2hAsdrEVQecLnnNxSdXfAgfUdNnaf",
  "key34": "4XV4SzfN4ce3GcTgj7PU6gwDbNW8rFTQ17d5MZUjLkYLcSLReMFJSp6Gh3GiZ3YwP7vrm1mH3UxatU1MmnESQDub",
  "key35": "f54yQZAPeMy6Kok8rXQ3eEubzH5ETiQBchMfc3Cq3n7kQUJK6DuWuoiurmcAGs2RAuaiBRTjWRFrwniGj66H3tY",
  "key36": "5xpwUPhxXP6WxmuBBt82MjMCFF7UkhRQnkA6AaQRniw1UmsTuf9v7R5JQbomvM5vp6rLThiGRHRNKGwMmTSso8yv"
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
