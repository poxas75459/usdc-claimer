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
    "2Gmh2zqSb7Qfd9wMTdWpDCsaZErGm7vBxLMMYbbP7cfV8oTvD5NggJNvqmrDF77YsjvgvvdGq5FPYhkAD1da5mBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d2rS62dgc3qFcVtW4VurRKZUPd6LmrFGChgtyNwjo5kabmY5BPfQPzqhcNksRaCpQBVS8p4jMHtJQMkdwtUcUdu",
  "key1": "5bkVkxZW2mEJiyHzSW9rcAuo9uwk81tWqc5jRHbtnAK4tJ5tpkhzdMX9ArTCMs9nLFzKybsjeUYLua4VH3dhmhUg",
  "key2": "58g5PmMoxKJ6hcBMb6mUmfZMPipuaFCTUjM8mqS4DDx3kNbozKUu8n42spizADRwgnLUg8Euk74V7BsnY2S5HxbN",
  "key3": "3DFYSgw1qEGxyeHvd133eJxJcsBgfM98sTrRiYE1Z6HNbqWYHjBdADU4F9McjxMJKdzfSQJwxAmqoZD2AUnSd6dT",
  "key4": "3d8X2C6TFyjkR3oVmWYEVTQrz3rkjmZj4yWvLdaDGUJBwERHvrN3kM3k1SZZCX5D7hDujAafis2MXMB4vCmEwskf",
  "key5": "21LSqwxTxB2Azk9TfSy1ZriGueuLtTAStqWZepVuPPc1E3oQvdGH4LT8wnseQTyv31qjFVmQ8xuxVZnq1Hzf2Bsp",
  "key6": "49kDZ8UrkqqxukbDQoq1Gn4vK7HAcTeKkFqUN5Z5BhK8i3oUccypyDoJMXnDg9G13mjHoV2mDNcxdZis8zrZY5rC",
  "key7": "65m5G8PmYYPv93MFRGKDiBhuRitUXSwcgGW2ouWpDgUtb4KszBTBaEdA5PG6rfDbVxmN8hXppLPbDEr4zR4Y1Yb6",
  "key8": "4mztMLJw23iLKSSAHp1NSi1BbrB3YoDzH2NM5Ztf9eAHTgKiJLfv5reiECajEZ2fMCk8vDKiJdiGB7TdwH6FJC6Y",
  "key9": "4CTuqZcmnbGYUGu8XS6y6X4tM3CN3mw6jaFH3CzPqNLYu2vMSRPLT9m1naBX242YkLxScrqq7Qcdjv7rHPFK57B5",
  "key10": "2zpwFCcVN14MZqkDvXz3MwsNQiptBFf6nAYvRRmHm3V2CQNdccUaXqaSmiyXni6NmV7yEvW4WztE9FCUWQn5hAas",
  "key11": "3RNtyahZrikW4QB6cEB8egJ9uU9h4wofMTVuy5D4ocoKTGncvHvxXVKcZ6gWfomuiVBv1d5YtFhRJMQEfCVtbGXq",
  "key12": "5Ta3vNqvmBFWhZ3dApM2RZTrHmfLoDszaUXABP114RVG2kNBEGUJeLxhEK2R34koeDcKRzwpz3Hmwvg8Y2pEbQ9i",
  "key13": "2L3T8qZPcpN8CHbn2UuJY7PoqMcYN91MpLCf5h5adGHKcJvF5djpmkCddTRRKYC6UTdt2WFHQobM7Yr8TMkPJJdg",
  "key14": "3YA4nZWUqWff5wawTMAYdhFRvinkc835C2RiDiecUdV9UeMJ19ZEzATPPVFamdFUVpWi8uvFzzmq5SqL1KBmCH4J",
  "key15": "63jNk8jkpnGBNP9MyrXAeVg3kuvZEKSr4GDxbAce4LHC1WxFCdDaPZnGUSF1k1bWwjnBeYGvkHvVeuccK8pD1mro",
  "key16": "3KgxFAgmbZU5kBMkCyyhDHQEUyMEm9nVdbNAXK9qsDsCwB6drLU9M4EKtUn5ZL9GXpLQ6nCrRbfYv2yGn1Qaeu2N",
  "key17": "3HLe64rd3kNrMFduMqw3ab4u9Y24i2L8xQPEkob49wxwdXqyrNkoCkBWMThtAUMdtNcpT6c6Prw4jq4ZrE73ziM8",
  "key18": "RXTZFCokm7dXdgS664vjFWfA8kGacJ2kFeuwZeLU1R5NYgJFDY54rNU3TZyYc5mjEmmjVXZsy62hFJzQj212xFS",
  "key19": "5ofAYcMuYaTM7K4RvFbqzbvvz3bwWH2hVmmtvpbrjx5SQeyoZWf2jRxqUd9SJtZ4HxsAMW2pn2R83mg1SXN8tKEe",
  "key20": "3jUXrcec2jT1BWDjB3m2KreiRbAuVNkMWqyzMsApYjtHnWxDijsJikaup3KCxmqLxVLFdrxLoXhZ9SGx2LPkQKpt",
  "key21": "2nzudAgioEyjZf8JcjyrpXcnPo4xcNCpFoS82EErv7JDT48XrEbSFHAxoNbzyUh5HTXpS4LyrSzw5Nt5iftVDchX",
  "key22": "53GTTPrFBVK8DapRpj4Tky9qQzJs1CDodoSo2LA1oEiQZaZEmRYTmNFEGLwiPQQYGsvwRFZh47W4z6ep9JyXCna6",
  "key23": "RiZs1c4uCVshkfGB5Viajsr2GiWEeUffwo7qugJXAZNmBE2YZNP2cJqRqVZMcT8fGzdCfE3qzm789srbojPa6Ck",
  "key24": "347KbLUXBUKPpz762mP7wA1MwH4b7b2uJmq9t6CS6NP46mSc2zP7SJVMdeBTXK1vjbD2u6eVxaKaexPNZWt4rm5r",
  "key25": "2dScxxckPB44mMnMJFiKwn2QgEAb7yXjxvTRJto4eCJSyKTxuJipxAsXksGWPEXEV5NpEfB54c1qtZfGj3E1eQ1C",
  "key26": "55t8LN7kMs5Xsbush2CUmgZC8sCm74MQjHvPoJ1pDWcEpXcrhVB9f85ypnihzAH8WoKHGywwwjW1EPTjDASeVfMK",
  "key27": "5aLv32FRxz7RFnkkmCEcs1HomCM7HLJtG1hTSnEe2tL8aAuxpFWpqxha4Cz1xdskd9vXy9co7yo6pyjpdTQAhwWm",
  "key28": "th3ssMN5gBa6NZ8KipFN3exySTPjpKi3g88gemmzqhu8TgEvJWYpvFyzySh1eo8qdzLwEjz9oDmUKLSLK25YeME",
  "key29": "5rthkGT6AEPPEGkLGBEbdiuX1YD7x8WvbyxgNFDez5yBKtocBAWPMzLeztjCjwSU7EiYKs7CM1t9qH5U8cUsEgRL",
  "key30": "35eTMgzWHAEvRs4oxPz43KKhzf8R8fzXb7Vnn9HYwTyJGavToTnsnjJLskmYHvAQUyNUZgD3JXeZTadvHmf3FEo3",
  "key31": "63YFvLvDC7AQ4hMMktShdXgKLxhXXA93rjFKWC5GEqtm44DfGTdHakqqx8aJ4RTqvFVwMoMy6bQp1ARiczCPJCdi",
  "key32": "4L6Y3cYmXinDEfV9ezibbU2EFugHbP2pd7ifHD23NbC4n2uTrD9KhbVB12vAsVzY2XLAHS9xtJg3Xds3w1kM5FT9",
  "key33": "2HhGQP82QmviSWvT9KUoQAYu6E6t16Spw4EbZ6YyNN3up7AoufNp16Zz4L52MAiQhocYeA41dHHYSLUSnMMBsht4",
  "key34": "4pinw57Sc8Q5BkPGjrXEuh3TecJXmqiJvHFBaGZjBqoeH37zHaWKNhqdKhePWZUToP3TygeBDXYs9VqLtjaBUShD",
  "key35": "5scrdSLioJSgXW63zv6bZ1PXuYw7rwrVooYik38EKRgpKqEMHTGjbV1TNXBDdy9LM4K2aig4pqJznMJAdQGdFjoi",
  "key36": "qHf7JDMvi5xULg96TL3QCofpqihU3tUhTw79A7fWxWXE8Ai1ZJ7wCQ6gvV8jBCSL8D7AMmH9S8BTbuyoejJgdrD",
  "key37": "2mRz6mpfp1EirmDwVkWDQw6Yz6gud5NeNXuobpKCh65aPJEJoUJzwP7kGDedVT3vf5My2DK43WdJwHaXY9XgZxGm",
  "key38": "5VjrNAddc3NKzRHJbByw2GNPpM2TaBmncumr1p5nL8saVouKJokbVxARU4VAjFEN8JMECwnWhq8SCGRgZ62pW2ae",
  "key39": "2KBT6XKrDrfBYWVn9LmKLkNwjosvut35A4dJX1yPwTuo5dgx9uwcoZ9H8CBC6Xbc8p16WccXHz1i4BS7bNReN7Dn",
  "key40": "5NYDfUHpqdc7pC25KQuWVsTWpptkqgBKo5iLsfhhkRqDEQBs2RtKsLniab6tzLReceVso95KrSwPHCfEH7tfmWbn",
  "key41": "eFDN8ZvoRMfi4J1BFtU9kvXqjmkXVZM5DPGzjYfwS6wbmyggujYTtRQf4sQ91Ladr5qGc9VjwLknysGUnApn6BW",
  "key42": "4qrZsCj6mYd3UGUekbGYwhZmQZbCwgDAmEywHwK7QiySafrcXeK72aLBryLvHp6QC982JdZDf9ucVPiu5Ry2Mh5Z",
  "key43": "3i4t5tX9r48ZGLmTamu6e7MWDEBYABvn7EezQAKU43P7j2ubEfKoGJnDVknYVv7ouTy7EKkTE2dMRCnWSKTD2jMc"
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
