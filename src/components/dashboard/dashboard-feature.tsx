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
    "mYiq9e4GQTFTcm94EdUTuEwiVeCQnjtodmvuUoYwjYLqQwTn66ugbSx7AMgVtbSN9AbFMmTaqUVgMRcP2oeHCkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J9gRfyuSxkbuYh74rFeCyUhHE8nmzEVxn9n55Uv3rhRP3uEcEQsVgqTiM9baqHXRq1c2u4HymRyZjwSae9ybYoG",
  "key1": "4BBQH5HqBWowAFq5awJLDZsB4hei267r1KG6WUg68PgPUmfjMXhAHpEBHW257B4BBRTkkPHt2Fv9SKi8rPopK3PJ",
  "key2": "JCoP178sPGE9DUWqpQa8L8GYV8K1Z4VgRmzNjiwBho9Ugh74ctTHYQfWqijqgm2WTh4fZ8ojGcNQNkLuC7xwx4Z",
  "key3": "2btdksw83cjUCoKb6pMgaxwniQAKExwLxmuEK4UYHtR3wWJ6fifzpmMtGQiwVLLGSZiBktyYohLUeqUNxJyV4ShG",
  "key4": "2kPfixLubaBoaE68XXNYtpLeMsc3uQGTCH7XBLBoTix3NhWdCw32thB9gRNPKzwWaQKbQfTHByAiDxJmv9MkJZPx",
  "key5": "2Sfbs6KU4c5bj7pbSQjVXBsePSZdSe4c1BBkFrrat4aAfAQ3YBW9sDqUB9dCD2LWdPrzdCWiyjEjYWfuqEbfmWoD",
  "key6": "28Kj2aSLGcEnfq1esJTqdo9ygrvx9A66GMgVd3Z5sR6Sx4svZmDDaKSWrAAg2DWSQme9AyH4Fnv7JwHg4FE8u6Ez",
  "key7": "34WbR5MBJ4N7Pfo9qCSiJohEmbiHZ8VFQGnXbeS8rmhqfyTXuxoH8pgaVc4F3kxrmRPbSBemjGVwBzgQDdBtUxqs",
  "key8": "2e3YBnv91vjZdyHM6vNrLX5ohPjekR1T7ifw3A3s9eudTc2YkmzUh2WTn6HMSzmobU8kJUEjJ23FPWBs4PgZb1mk",
  "key9": "3LEi7HmanwygeYRNCaj28kDvWBHhkWznv9NHa9mJnrx7hemCp5wZtZBEZkMaTPhciA3Qu5EUk3FCfGin4zyg6eUZ",
  "key10": "4nHjDHJVgHM3EV4iKDNGPDLYH1eARsrc4bL4JFfHzH7yfCm74nwfX3ypJQDyUnjkAKGaPdeaVCaKjPWxRupe5PD9",
  "key11": "5jzXCYvbvhTguDz6gKi5V3vxADfxsYHkpktwEiKYypufaKbcXkBzMxDDu5XKBw8XVVM6fRUBozTNQt5u6JgkNKma",
  "key12": "4uYDwXSoFMwFP1W3CXVH5iLrKKMYmuKKAxpxy4NTkMZo5xBCNSstEBvPE5hbDegQFCspYYWfBZmVyBhAem7sWT93",
  "key13": "4GqA9pf2SicUet4HkC9EJ1e7zhyYV1ShLsNucBnRdup3fvRQRw5gQW37QGkQJ8a8Y4bTCT6BuMxquibhfeJ52TBT",
  "key14": "49rk3LZmJhoLUDgrYkcVBgvQ5uikvhjmL2eERTedWsvyQNEAyBEbYP9GiC33Z2ERz3f91AB6uZEzQWEbkCdsrkNT",
  "key15": "4YM4wVH8njrtD7edAWWaM2ckjgyWx2fERP76pcCSbS2oGVtCxJh7Q283MDa52HpL39Uue5T7ywt3QedvcdyWj63E",
  "key16": "5q1mifWoDyiEiG9PMQGxdkgrB9BmFuA2Uu8WmVmkLtg7QouX41qHsWFaEoGpKZp8dnG1PVJ7u2ereH2ZTt1VZnNQ",
  "key17": "5JCBT3Nyatfp5KZ8jSx3fupZoSBPxENas95yqKep6Szt3L1wQoEMjwh9UaXxpSsoNRd2D6H7r8r4bMhbUEzUnUZp",
  "key18": "37GGERBUybXva1dAMoaDUfPgEdCr83hwSD8GpSHJ1fRf4MrzNoMHi6BsTG7dBBj1HTrnfeWM4evD5gkQAufMBgg2",
  "key19": "HNDLcwr5bpoFGkYiivSBiUvW894aK1iy58gerVjd7ikWEjco1RuzpJLNxTuwMB9voEGVzYYhxaFWCRFrJn1Gzzz",
  "key20": "4PWZidf4iLcpAmhDXBPk3rSnf9axYQ6uUaXznAMHL1zMdZuxX7RJ9VEMBD4EVatkp1zviRCR3c1Nj5c2suQCT1dx",
  "key21": "fb7XDjWb1YkGfs6vWHU8HKhMzwKH1LjsYR2QPbs8DbgFTytoQamLV21T17NHgNRu5CS5xFY2oZe9WyvJVEdDW49",
  "key22": "4jU4MRPfCswSuF5KaDuHuq68cV9R7QXxiY1YEyVfGBPrBs9YspVBKEBPfvnwLEvVFZ2sC3ewBdPDVaP7C8dqd8dV",
  "key23": "5W9zcZJAeyw3176FPED6yfQXK3tasMah6tVzcRDmfeHj3cpYAEjCsHHZ7H1fqg6CU5XLe5J58RyC6qsWD9SYNVVw",
  "key24": "3TnexX9wWAv4WCJRLjjjQEfcHctNBWxyWua8r2ZH27xPY88xwbHWPzqCBPmNLXTNmokmJJ8pzeeCnNfkzCDhUVwy",
  "key25": "3DJze9KQM3paFSLQnWoNVBbSB3KmFNzrEFLqHAzPiyupHvRnjWMZ2pRN2ahmJ3kcp6qwusVxL9pUJAH3HdoZkm87",
  "key26": "3yVyYo3BMG8dzHBrjZuNqtp8wWGtxDGtMMygpb1EPAyVfe4wJ4Y5YjxgzTG59vQc652aXUBxEB6tWiT2xVpuUoLQ",
  "key27": "4ESnV3rnEgR3ZyUe4nK9mVo1Q8P8hkM8VmEjXQJxvSfT8hdtaeFSYB6RUtL4NDqG4BeYqsMxAHzp7xGfNKajdnGF",
  "key28": "5C6RX4LFzsikS1WeJdxnyy5pjGKGzzgE44dPuMsuv5BHwXc9TWZozK6aGF1fRUSdc2oTdwiMeawBCStw1N5bDF4",
  "key29": "2PUYZB6pkcpQs9J9NL8qPwBaSXtHar12BGEJQygx9vFTtoDsJwLtNy7fFsWvmdgazK9jrihZEhWLsD4RX2ezLWUK",
  "key30": "3xegZCLxmipFPUzBWusJyuPxy9RvXBF1Pu85GQNwo3awc13yeGo86WRJxq2EHR2NBbUe6AdpuvxpFeQa4ti9P8PF",
  "key31": "dQnEhq6hH5UL718Qym13Z4MxABsUq2DbX4xC6xKuoQmLXpvxA1TwqVeL4rhzn7JS2HnmyAiN1GmgAiHFqpZmWv2",
  "key32": "5uTtQLZ5c9CEiX11uW4yLMEWuCwxs39csPy6h93ary7BVLiMHogCp3t7FFt4CEFQV4Tr4XtYfpHxkRpn3GcKdYc5",
  "key33": "3SeVetjLc4GMdTLsUG2fgYEkUeJQkz3uDdzQSNBxtKHRAhaMJc3xKsj85BXxAjDAthQwxKZ1692n1ni49piawh18",
  "key34": "UJMyQkxhFKj6dWjbd2qnJn1UppmUeayQZ7oQn49ctUbs5shmx9GGLS4NBnYTfo6KYwtSu3m2wf59zzCBzi44j4d",
  "key35": "29VmjFwetE7UppJSET94qAC1FLbFzFHUz5BZL4fQa1kNemPy3zLY1A62SJc5MysqBELg5wK5kRL5LjhUHm5conpm",
  "key36": "4TarYtw5a4yjuZuhGtybvhTBUuYhonspA3GsQgLRufzRx3j6F1aJJ3pvDT8Nsh35BoVe1Vp4vFAzAmuGuVdmZUko",
  "key37": "5tvzW8LUUusaHTCrVgoT34tarEBqSFFcNax4aJsG2p97U75bWx5aB3CVRGkoFWRR5rHsEGof77VnSxoPYxYAjzxq",
  "key38": "4AVUDoDrrvME45kqUTzXtJV6xjRX9Qkv6FxG3aRWSWxFhhYdi44xjYH5Q39CBe6UfGJ1D4GaWcALB4X95cBuRgR3",
  "key39": "5ic4iuzHLMhNcwKJfddL2i51WAVdEM9FHAU3JwB1iPZEgKC1xLZ48cRvdBYMWGLf66BH1noQyWsFEfAWEXvdqKkn",
  "key40": "443281MSe5LUMdsJQU87AEP831rnvU7aTj4TLgvaPefQXfPrjPjrRWq8z3nta5xjdkTCZiKdm7uwAaoZMBkaYzhj",
  "key41": "26n8hyP89ECwypGXFQA5GxgQNQu9WDsZafH8zXnEWyRJjxpSLG75Vad3SA4eFWBPeES2dstVaid6DhrMU2zCBnHx",
  "key42": "P2tNWSMNzFrK98o4pw7DZgzb93EXTTNTrB5CFcNmdwq8gF1Aoyy8R4VP6sM6KKPwWe6kZT78hrDmfzdxDBGbSji",
  "key43": "2mj48GGkkA2Jqi9SbYvecA6BnuouA8yHEZER8T2GgTKmMenj4WxNztcZNWYPqYYC6ms5Q1PE1WxqPCLkhfZqXsWh",
  "key44": "bFf3xarahtc61iFeGmfzSTh3kCWmAKErGshYNuJQDCsqKDbbqW8U1gimuSip2jJES5WzYZaYa4FT3bKJYs2NgTH"
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
