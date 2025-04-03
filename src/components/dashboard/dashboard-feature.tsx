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
    "5mAYWq2K83b8r3UpknnboCTykGxEVL63GBS9dvNiyEtedfzY8iW3z5sf99NrqWynCEkGar9Lcuec1xmrSNJB8GKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "382pfLCFBZNm99f4ojyYrpWWux15DYHJZsxnJAxafyUTPabk4MZx9RufkEGFG2esMUVZs4Vd6Jts4X8q3wcwW5BH",
  "key1": "2DDzFohYPeeAhWaRSTT94HoDvCzbYnLxqRJhHuZBJ5AHaoRdxGZv3hUqrtJSzgRXHsvMGxCPvZrJHNdAt4JrVUEx",
  "key2": "4bk6aZaPjMZBr63zq5ostLXTVSQ9F7XGKpRj66cA5ZEokK2akcapcjuV7vk9iFVeJzS2Pv5oQHuV2yWDbaL1xAWy",
  "key3": "3Y1k6WhnTjmiMFVCEow59RAEzy4YyoEQv6j439RfEEP5iPev3Y6pCNRr5sha5Cqf88PgAgCL9NVnheVgzJSNpQdY",
  "key4": "3XokH6LfcwtRBnobXBZRfxNmiC4zTD9VnBUvMKgcHMZGzpdmXVKpuSEhUyzj3pLdMFKpaMhsXXMep2Jewi9f7RjQ",
  "key5": "4hnvHyvpuqwRko6EGb7zk2ATtiBaXeSjsAp4VBM8PjiLQohvXikA6VKnfk3Rp92hm9E9Vg1fK1Q5WNGe78vy5zDp",
  "key6": "3ypWVtH1UeBhAqt2cQiXi7eJhmdqaa6SAYN6xTo2sHwdzbpqBsa9cctg7WRM2jWXEvfhtm8v8nbP2Ugb5fAtmEma",
  "key7": "2xCm1Jj6krW5U1Pnt34MrvTLRYbkVbSe61dKhbzNxA8PbgojNtTM7Lxeya2zBtSMhfPaxcrVocxv2gBfuWsg6s39",
  "key8": "2yawjCEDTnB5xQoLPVkriov77Xio7Dbwb3bRzuPbhLiY3qbuk4xwHdMphRGxJmXVaonvZQPXL7EwTz6exBVkFJBa",
  "key9": "23T1itFiwFxGzCozV8adHuYhu48AyiMZbLvNZ5sPugevSSnGiB9RchuFesUCYyWohKc7sExpEHcSTwQmNjMZVagA",
  "key10": "3YnHoFUKxNDPP7HQJY8KVZMJUMEGZu8jACRsf4q9UGcjbTUWkD8Fdv2XEcXt6GPW6h7grN2GPk3vVWtgp5dhs45s",
  "key11": "5Jgwuedr3svA7rPT8TSqV8ULGnKnnzTx6pdC5GU8HjRDM88CfY6Q2FiQdLHdokjAYwZNu8JGnGV2SVujS5scKcup",
  "key12": "5uCt3f2WESb9xVSNUJuXtzcTVTcQrQ6UMB5WqjvU7EMmQnwuc4toME86f3nBMKJPt1Z24ouunSrmPgRmRsexwtij",
  "key13": "5zLBXLv2kbhLG6mWV8C2PhdBg2GpNUP4Wh4GC2pfm8g4qMHm3Z22fefx1ppuBdTRM17kdyaLivD9mP23wjNgcAH9",
  "key14": "3QPkJDD9jTNyQWCuotkyBg8KuxXZ71hMriwwyzXEtfXM74L6n1jvcgMv2cFHmuvmCWYg2zJMcPLNMrr8WRybrbvo",
  "key15": "3EFaFPbN24GjZE73qKWwGGK15URzxBX9AdpXpMHsa31K92xU6oJGKqgFESVzqCcbzfV4NDTyNi9W8VzTXK5NKcMx",
  "key16": "3cKRVkTo3Z7FVr6WTnC5RZHmCVtFWVuTDsGnJvifAYLQVh3txPHX5H8hxWjmQ9SMGXbns96XtBJNyWVuJGSGAkXL",
  "key17": "36ffcG46jTx5qsnJqopFoZRyXFGucG6igzVPprM7hL9ia9D3LVDSjQfVycGmtEggT8qfrARMEKe5MiT78cGxsT5n",
  "key18": "4Fwjtgu13kvWQz784tdJNxFUWWmpienWwHZiEamUM66YUvgXqGFkono15XqGkDW71UDiWTCiZCgtScSS5BdWmGCN",
  "key19": "2Y4kfki6JifJi7VTCtYXHrizVL9MjbShcqtCjTsQajRhaaborwPr5DSsyYrY9p6AGLsCevfsiq4A9roNn4UCrVpn",
  "key20": "go3TdZojSHjvgN6PTb6uLoHVrbwjZF3G5b4ZnZC3sf9GSRWwQKeYWgUrvxqAiXAZU1ALTWBuMrZt4N7cyKmQoms",
  "key21": "3LUcYi7qFfnTcMTz44bk4dJJCXUAkC2m6T7ENa1bDxkUByrtNygaarX2rUZJU44rtwvdUcFM8cd5JDkEogRfvEQK",
  "key22": "3Jpp2mChxzps4EprvkMK13g9qMBya5qjpXjJhbrB5qgNJ7WASLJdk5NkZs15VtUVn5nNkNrv473Uah3Zq5yU7giV",
  "key23": "4gZqpJYfMbH7c1CSCWQeqGEDBrGGNML77w9DxzPdF3gAENmhfBa8N3bw5eYcgbDoVNiac2GnnigATcUMjcS1ziTY",
  "key24": "5GNTki6Wnw5M3AaCe5K4ge6v71rVHrawBKDUbnNHcF3vJppyey3aeUL7TsBXbkj5xWNpAJGZ8MWEQigq7A7FrJ5u",
  "key25": "3QrRo8niYc8QyDPqkBGUSpuwkwGQEAWrFQnS5vwGmkNZKeRWuy1MRZxkTUZ6otLsMfgNwsidJwast4nkHF8yWN5Y",
  "key26": "4M28FPENfx3UkBvudTHwNzZTuGU5fqN45eutc3r32H7V33axrxG31rpPNcnoGWPtLEr9mVFvXxFfQJkT2Y8LqePv",
  "key27": "57FAkBy3wJSTQ6zhXURFtQFyF1eYBtPVkyA9Cp5oKvkxv5q4Nvb2CWBaKo2FuEg13iUzKhpQABRCzKMyq15C6SUe",
  "key28": "4qgzgxPWFYPZV9i3wXfBo1CUrjYcPvyRJELLpwmHKCJQxJgRLYtKBL22AMAPtuwZZCt9JM59AfXZXAntHq13RioV",
  "key29": "3NoXnhjDerZbHaaAbD3LfnVh7S31imbMbwBRSQuNbNSyLtXRQegxrMUAZDovtLbuxif2D96WaYRgznpe1KJQpY6",
  "key30": "2CuZ4TkYfAXAnJ9gxVLHzfwrzrZ5GL11BGDSFM5QoRigrbXKCbQqKTQEUNpwmKvDKU4Ki6H1ApfRxuPFDEsR6NnX",
  "key31": "3DoEvZZHXfkZSBSKqkfd7jRx13nNC8c12XpckWYtoHAri9KMq4cakxzLNefDXX9CiDT9bFE5AwjsyDnk3FNEtrWo",
  "key32": "4iB4jruR81NZ1ifTj4j6tegyxcgZZRwaebi7tSworgqECAFy7xKZgndEJxVwzLsZWoa8iugeWNsnFvpTTPdL2GD6",
  "key33": "3PM9pwQJXKUW1vnswHvxQ7zjg29L887btmuAjWUSf2F7EbigqMt3QDGfNxHQqPRxJh9q9jRKkD2PVyQ2mJoHCgMP",
  "key34": "5MKcH1rtGBiaWCzFSGHBrNnW2LMnqnTs85DQ6dJ9vEk1FadBQXHCsjPcjxSy3GEnZn8d6d9vswEMHqCJyjeBtaop",
  "key35": "62qBKL1P4kMQFjtNXAdsF4gThwB9KV433SybHLdTT3Rr79fMGDDUvyzu33ruXfrUrkfSAjnUMD1sxjW2CMyNh7MS"
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
