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
    "4towSVcZ21o3kLZdCnvC9W76eR7XZvnTmZZfJhuY5bZv8wFXbYig9RKUCeQm73CRcFXjuqzi1tBBi7vdpeVktC8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GwjuGEkEzwfA98BqgBuqkmLsHKyMCTVTFb9gorbXLQ8BnxheUXFa7qquh38VrMgN5Th7NnrLDh6brqgTsBVRXde",
  "key1": "58uYn7FfLQzVcHdFCmouoZVnxcjDmPFyEeM6Ckkw1S5FPtWHspsYbXdB85f1RqQzF2kNDBsQ7oZmnkqdu7qacoEf",
  "key2": "67JwkSVyRhEjCshRLwWuBRJKkT1GPjLo1dcJoLYFbYEgHKt8fgWKJ1wYTRLSm9yMGjLgTgJfHj2Drh66asAT7v9C",
  "key3": "3bvuJgEXavmXY43UE82n5XhG5GPeoEqQQhv5dwLFo7Djw2AWqPwwYr4s1BGEtrdFEzaQPFWie1Ke6e4yJnzHVudn",
  "key4": "4h68obAfe9cFLeBkKaa69VgcercX9xjLD6wKjea3SNxsL1BsW1orf88QTBsAwjrx3neJkvS7DdnuSxEcsgx7Aicw",
  "key5": "2Y2TsUtLyezZ24snE6Cs5MNkHGSBiPJW3pSAHJrYgBqhUA59UETNutaP1gnnysB2Wh5wzQgJTLq71wfPe6fxEFnT",
  "key6": "xSjE9p6jgiuGqwgEPKKDaLPXHojQDytQnKDZsZ3zktfm43S6pNHADjTGxtHQSt5QBkXdPF4pHApp6nyvXySE5Pz",
  "key7": "5T6L4YbJ3ht3fYCuwLXR6wVd2NHPrJ5nuSk47etre3aWocEPxbErcG5HVvefegmPCk8srm3BfMRYAqPLwhftcdNr",
  "key8": "3Dy7ScMG6F8p48QsLyqG4wWvRuDWMhwWaFMugKAPKVZqcnrUmiL1TP3uzRdH3sdZp8eCkvTXhEYRxCBD9ZaykjRq",
  "key9": "3PCL3xDt7SgEb6q6Be2Ynkcft2NHVmvrYVV4ScLYjeQp3NAcfjZEAhxPAQcRMnFYbN5Rhtincj8CKSwZuWYnstBR",
  "key10": "3X82fTRpoXaHr1NA4Lu453WT6tUsrYULAhP582mb5mRHtrXtYVvFtfwvx1PXRaD8uRws92CkuxTKr4PrYBRhokTU",
  "key11": "48UnYc6jeQKX7gJ7fHMZ9SCGRCnnrxtRekpSW3RBCwtVKdQVBgzTJGSnESLBCjQTMxgpp6XF9tXgHA7iEPSJMBMR",
  "key12": "Xx7JjAMMhChoVaCswvC6VGyRnFf6uemARKkyWWiq57yKnUsFSxo896NuviKdh1UkJvPc4rXyb4VyTXXJ7hWdKZM",
  "key13": "19VtpmtRkSSHVrcuD3AuLXwKjept9pp8UF6Y6pBTQnDiippJXK3ywBsCRj7726rjZL3VTYoVm3dfhH851RhUVjP",
  "key14": "3tb5xWUeRgSQw6b7skw3b23sNjx8yViNKzVarE3835gVDNjyPQ13yz2v7JwFt21WvdyiLNGEoRwkNryHiGF4k2U3",
  "key15": "5hFLmdvomTJq3j44djrK32VgMLSNMXScGHQAKkfWy7HTumuLbgPnxzBAFkkCNgsxpwWZYf42vWULw7zJSx4vY4GY",
  "key16": "4J9uBqvUEanPrg1ve7NAr2pZ7k3MkAaKsGifpCsoFwTGKvVgGKk4YsdAznYvvJHZtkHnAyMKGhAT92CYo4DLW7FN",
  "key17": "2bhMer851ABWk9jSidX3VDFkmCHvzAZb9hjWodLNugVKSU7yWg1ewAwg1v6NjPTgSkLfnwe68sMMUEqTuhwGiyTS",
  "key18": "4BpdW3axqHjbgnQHKKfC3FVzCTA7wEmiVsYDCiFBJowB6icuu2kMZk1nq7zDouVNnaVPXXQEEdnNhbenRZa25Sbi",
  "key19": "4LKs4hcQVkBx4uW52wLHCXkcg9nu6RwvrNtnMK58hB2A7wFE5Di5tfw2nzFiiEb15CNaCKSoeQyDvAdVJdb5iU4Y",
  "key20": "LfUcbqakNvCNUCjxdij3bR9AcsDYXEnxkdc8FgxXqUDmHmGYwiv4Tx9oCCRuU4xBXjycEKxEViD6x63mqRym7Gn",
  "key21": "2WDLcwnBvpAX3bXMbs9m4ZFJJqg1ikQET2dJCAzoyuqf9oEUQd5GPieDUSxiofB4fAnc5DRpnpmHQdt8WeJqKbkz",
  "key22": "hedzB5DnVVRMxmyHoTP2wRSg2tpfc1YatCanib63muMZVo4k6kDEsbTJhVevDigLZLGU87cXaQKTtDDfX88rFZb",
  "key23": "61ymEdaCENMKTsKWEKEsTNqfnaYLpk8h44JuF2GTxKBBkuMrceizdTa25Pz9Z3E4zS1Pb8ApTv3YYP2dMFrWbASg",
  "key24": "4KfaW2aMpRyhtdA45gM12zVdQqg7gkEPPdJDxf19GEGuRxMwisNwSQM8TbTgrny3nHR5ALiP8trrazWLXzKGtKDk",
  "key25": "5uipKadq2eC2nJ9VhC5b8Q4UVoS3QSw2KG7Yq82BjZqX7E64ZEJV9KYgCEZQoT5dCtCDnhuuUV2zMdmyoqgBfpBZ",
  "key26": "YQJcma2FiEXRX27saMw5LWqJbVkmDz9bL1aCnK8pW61vCNXGgzEZepW2joyoFfTUYcn5FRHhyvh9bpwE9KA2XR2",
  "key27": "5QFcSnaqAfx7MXHVbsR7SfmV9NnDwxGJMujNwPiZV2SGfZXDZ9PkbE1SERRy6JuZ7pcF6TZ8E7PAY1sKvLZPrwEw",
  "key28": "4a87D8Pw7YCTMsaWoBVbcZXJiV4T7QDKBkyjds9vBeqdmdARohrm9Y7CdKd1yCo8UhFAofyn1u21dfanKwx5Mxxj",
  "key29": "6GNE6S57SukcFiKXsiBnVyJoT3t8buFto8NFjBNEM2f3LVrAuYbP2zdu4sx4W9gjhzCZF2S8Xvh6gZSMTYJfpes",
  "key30": "gyujrZXc2C91PBYws6tWKPepsTFf4txe1v3dXKfpd5WeWbsTiQnq58DiJYXmwJn9JFNQN6yuUX3i9yN471vpbeq",
  "key31": "39XFoe1Rzrp2GCKVJCiuNzNKPiPrqrKCB2zKGMsZ7oRFB47ZSMqUmvQJbNLGpv2bisXwR4hTUhUWvy3G4WAvrF7e",
  "key32": "4ajf27hkqtEC9wGDn1WsjVMhbYaxnDwX1oL61sS7H3FXtwQuiuqQ5jnq4szh4j8tHZDFLuBg47AVPrp9u3mcQicb",
  "key33": "29yVzu6ytk34wkJMDASXVAJsJBB72wmXBbudCfpxDWyYdDzFSNxpU8GTW449mVxWPYC7RMQL4nGyn3LMF36bheG6",
  "key34": "4qy5m86yhxJubk37FwTc63biS1u37smy9qAQnVeGrTfRtPozBx1dqdErknUrNz8taBW7maEugn36972D4usbk7ux",
  "key35": "3YNkWRFMG5ivZrqmRxfWsZhPA6FdBToVVHiM6wDZGtNMhsYCqwRaGqLjUFU927hrVyTjWjYJawnrYsdiY81wrAYz",
  "key36": "5VueMm1QEvh5fo5o7GaGf4YHBq68mddU7jA3wuccg9en5tx58NF41BxcuZz5rqjNz4NesipNwGTAqYPUH7Lbjqvd",
  "key37": "4wLV1PDWSHExVcbUK2Wj5wASiKWRgCHiku4oNZDwvxmJYxF8gugSc5STgYbkbwtr9h8NLeb1bZSBA3LWApGU27X",
  "key38": "5iXwjBG4yTN58ESiapH3Hs6YasZ3tSpxpdiQX2hr5KMYy55yaKe5ff9Sf7BLcG7pqWGVnFsipC2adQVLmFdMLRQE",
  "key39": "3eWW31VqWkyy8VyZcqG3L4cZ2CnAWhbBHAorLmPKyE1MazTd8R7nNG1cFVCmscVb7t2F74b7W7Wr9dYP7ZQps4SB",
  "key40": "4FbujW9XVDQ86Yewy9rF6UV3necBfkqUVHmK2aA5G4swBaQM7oppxXHeV3AioQgx8nbSfF3GkyZJuqqs52vTz55B",
  "key41": "4HRA8tWcWcvSb7SijP9Jw92sa2uzevaGFggNNYTic3A87LWSxy3hcVumt3P2mFPzH4BXE3bjUqwicNoHcC8VVvUS"
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
