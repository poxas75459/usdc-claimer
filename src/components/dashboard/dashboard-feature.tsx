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
    "4bvZKC4EgEWzoz1kXHBxYxs1f6G4gmsj2LyHkSebzwz6f3ZDuJDUPL63nUhnhiYo7cEWy72sDf9snqkZLRdBG9Dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zsh1BLBkGwcXioAo6DF7dxSxqCEGMMDsjNdAa8Sr96xjnHJ92vWK5tMahbLQ3EHjpguntkL9CLDiQu1EuVEkqkX",
  "key1": "3Ys4VUKUiWtkBTZUuPefjUUXRe5gBb41pKiPCoNCpcsuZRiYegaYj62994d9hZ7mhNaBV9P2H8hqnyRZwqKnbpzZ",
  "key2": "3W2CsYsLEZtGxg7ufSn7XjnT2Jgud8j613iRDiZxKCysb5g8z63wkd82AHh8Y6ifD5s9GaawHNCipJa93YWsL2TL",
  "key3": "TtczLcngRJTTQT7SArcvyZ7KvmhQ8Chc3xYxXPW4XYWo7QH1WUcPSuHqryUcvEeXmrjZbi6BBYhxGuxAELC4eAi",
  "key4": "5xRcqHLyKNfaeiyAgYdS863kWWBrgSQ7vF3Hqit8owGDMMYF62NPn1NADRgEFeQBe6gmgWBSfiQGEnj7H74U4r5Q",
  "key5": "2jGXLW9G9ZNUZ927RNK7hKDwfNioGitXhHWBWKkoYVCkhYyzaWM6iSQmDJU8J5hzXhQgsh618UuCXTkEF8Pi6rda",
  "key6": "3YVoTqAe8onKGt39FQHv1nAapecvkAWN64d1vez9Uazuokqti2WqG2fppee3Mme3tYuBVHhK2sHLT6Eyj9zjhwqg",
  "key7": "MTsvRjvEMzqmv2c9Rw3PyvDkbDhR9dHVP4ECufTkBzSvxrJVZ5SkYd5eL2R2GzJyF5zwWreKgywfHCSUouc7phY",
  "key8": "K54mGkv2xoTyPBzjP5rHK9zD9MBvKPqUAQKgwGJxubUpHL1RYzNpBqvS1UpGCr6AHpDc5tpHPRAMh2XVHkryS5c",
  "key9": "5mb7ZMMeQfG769DqGbGvJk88TbPoivdstyD17L4DarNBGJry6QbmfMghgqEcrmsskv6LUTfrzTvQcutmpfKLAMqU",
  "key10": "3R57rBf6t8T6RfyBxuaxMfnx54edDQZkv3fud5z3oR8jbvqCNrKLJFLJsKZF1WBnyY48Gr1g1sESSPUAVJmJG4HL",
  "key11": "4EKtQBuczZBG4VHw2TcVo91sDA1DvHsAiFUhivrY1orfKt7HUmLyuFLzWj7E4guBmzPD4XpjrnDECEQjDJbpuBwJ",
  "key12": "3Brfibs3eheJoEnS1PUyMMxNpcmg2CNidDXEDfpME777HxFxk5R89vA7nLN1NCXqL71o4DfZZBMrNiE7YgnY7hTd",
  "key13": "3eWBUMaBZD1R5v47WEURpJqxLZ6Ec4B7ViqCc8Z64PoobLFfe3nLxCG3cMKQN3XKZKBwPKsswm58A8iWbemvZYU5",
  "key14": "5C8ZvUAvVXcKFdPex3T9CDrQWH47max9aNuxF8pCc1N5zUiTrT1aaPFbw4HCnWkTbYVUob3AU9Y11bk8LcEmF1b3",
  "key15": "4dy54zvFdBS6NaqoqJnT2Knu7CcQhNnnMuzAKk1ThAF5ajmhFpVXdrdeS2KJDxNt9dfmkuL4AcE1G22TV3DhutFy",
  "key16": "5kHdFxVCPSCtj84rxJwAKsFTyaPR6eBKLWJS7bLdFrvSTefe6xWrXMtaAB8n1W4qDzcxeg9k6mmaBpdAFqT5B4Y9",
  "key17": "4zkCU5vnuaoVWvnChdMN1jdth8veY1qrA8juSGPN18vRW3GQMEDKKtJfZbbNNieqAtJgu3cofb26HfMX8EagSRA3",
  "key18": "65Ff1WCu93QEG5ZE1Bysr6JQyHHgbUouv8GNT7WAPgHDAyptzKnAwyYPPoLnFEjcwXqgNAKQ1vMN74PwxiiX51iZ",
  "key19": "5uCAHrbJTRDMqzLsgH1yoqkWSa91L4NaxiFFFYUgc82cHdf74hcin4XE8Q8rGqRgnwmv1JdAjejzodx1z3ufakFH",
  "key20": "5BYfwNEcBf921tX8yGqGGgynfrpDJw4ppR4JaC5E547jpfSoAKyAxmdPpey8gtEfp2WWLiZLv2MQFQ6GGjZfwHBP",
  "key21": "4za9y4PeBXTHeDjNxMnZpPLigR6QmN17sHRE9USLw6gGSdGmuSZQk5RqeQUVmvGKQBwp1vWEx1khcBxF1Xjk6VRx",
  "key22": "yiftDQyFGLqT9GGPAQzXvrkWfAY8GoWR5tmtVdBZ55gRwQFfmn9AuTRH63MZvXYXd4euTAG2sEfTwHDdGcrjB2n",
  "key23": "51kvFtVECZmWnFiHnETpyDZSXdPvEkvDQcuasEu7hZuNwFfXVxWcBt9gq4EqGUWYmUjLo86i8sYvZVAwjV5qyqcF",
  "key24": "4hxz38RMagZdLpip4zwzWhXWR6mBHeFPLNWDwsFPP6FMFeEmQ2ykqQfA5Mhw9oP5FRfXiVL1fAxGfqi49xV6gwGL",
  "key25": "oWAckKShdNMc5RgJcZfnTnd9bqNUBe9YYByQoMzuwpmtMJPLNe8xEnrhnH51V6bbERxWHNJ9EfB8CHEu1Wh79W6",
  "key26": "5Pxuu5WRRYJ6ys4RmYRmDSDdPYekVvfKvZdKnmPxD3G4fGJ32Kv8QED5tEXmvFR8u2MMdGkX6xFgMM3cKcJzkRPV",
  "key27": "25Gucwuyw4YP2qxdb5rS5ErtNFJPttL6yr1uwMDnq8sCyobPJVDsL9DncoMLaT684pzZJCMuoRGENr5MyijeQ8ZZ",
  "key28": "4wm4FLAQaj8bF4VZVE7pzuxWAk351g4bGXQiSvagqEHp2nREB9mKddgbiARbSaU6nSo3DEwQmrUMbjKSicvt28eX",
  "key29": "BeezAsVdacb1hC553CSp5gnMoqjLTniQG91TsYtjSsfABQ1Hbao9LMHppbFMjUWRdh7BcfDy9mBBR1ZCeUtaNSh",
  "key30": "4U3LvqMQEA4qi6VYSYgm52j1UTk6UXgHyuLZWJFXEi8ZQ3W3eDwvQ6sqbUBKZnaBmFwePSmFimHqC6rvesfF14oN",
  "key31": "b3PC9h63oyZ4ZQf8Z1xcFmQoXDBdgbwtwC6LAMTtcnPNZMLz8CJgzsWo3SSKpzE2reMrJkurDJCZZkjB4BnLWw3",
  "key32": "2sUpoQw8JMb4toR23CBNCtnDP32sFDnZWjDLsZfzrYe1xC66KZ9bQ4xLwoYwTpjzN1svTaP2zVgZh8nV4ATbHmCS"
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
