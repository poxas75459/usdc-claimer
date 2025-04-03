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
    "345qycLMg5qpTDJqtxth8ULi25b8LZZuhnRkjoqKDCU6jDJLVwP3E6UFoArAW5JTggEKQKfZa1krHh2SLmBBqrDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ErT8G55UCTcw6VFaD9Cugxdj35p5tUvYUTnSNaS7Q3bC3hrvRiFXi3tuZ3Po4MBPhoP4qX3XmvMM3NDxXCqAXSe",
  "key1": "3sXhsujgzaxu6aHKfjV7dWQX46qVDmjQRMVW2LixzVjVYcQNRvhDyZUgzEGAT8okLF7fSu3R2xdqzLCtpM6odsTE",
  "key2": "2ePsMuSxvAJC4r2RHcJMrJYV4pzL2weMCCPXLgU4XHupgdx6snBkoPLtQPcyqw35jincEN8BD3jCs1fxkH4uhTUj",
  "key3": "Z8hqAbf5QtKJZUfqpGZcj5HYJQQBmfFcNfSiJJnWQGKHVMJAUDkcu5FP2NJbK43rYu3PvxGAWBfckxJPLMTWL9Q",
  "key4": "4sPUBUrF6bg1VsAKtmohsEt3J4tVDahHTRXfjwyodnEEgTqvSWMG55oa8aCu1a9U7xojHkAnntp9vxsAXhd72SSu",
  "key5": "nPixuhFZ29wsWnmaM8fs8jXd9deg5h5HiLMfbRqrarE3U6pErv1Nr9qfpg3rd5g4mN7WSt7GysSNL2GeAjFwKRJ",
  "key6": "Pk1QHaAQ9cs7ioDgXfq24CUhAFmnbrbNSkdPAhNs5ST8cgrxYHPns1n4HeQST5G2d33in4LzbegKEgqbS4WV1LS",
  "key7": "3xKos3NbzTuiLrKwnpT6hohF4pV6Ku4cgGBHtBjkfaQF92unQHpm8TbMRknDkNQfmbLVSPUJYCuytZafwQ35ND6b",
  "key8": "4taesf7suPbyyu14T7ceA1BffHUeev8yYvPHuqNHWH9r4s9sViY5QNsk4fiD6HFygCwSmXTZfqDtSgGfD2LnSScS",
  "key9": "zdoKgryf37H91WeGaQy5tqh7kE9846PVtfEgk2AaZXavMVS51bJG1ufHTrMUHWCtN9ZSA8DvM92mYhpLWm1BQFK",
  "key10": "3XseZdMefGACwMYy1jiqZwjYFxNjRj7M2dtGjLeXMVjHtfAXfgzUnNDKp4dyeE8D328aVn1QEP71mydLaJg5KYNQ",
  "key11": "2FJC7yidvKb7BSWsXBN1NyM3WkFu2iCr5KsBThS6jQ2Bwi9xj5inRsxfE14LDr8YZeCVCcKYRQDCV5pv3SGS6oWz",
  "key12": "YYokmUR4fvoAEsv7UKqF7wjTimE5i98ERgXBRstfofKQbaCiJdghreZ4eVF1XTPivFGk8XCAcqEJSJxaW4QtFET",
  "key13": "4yKPsT3APfeP8dHdKCNK7yBh4yDdtQyVDhHCsttT1NcHa5nE6T3uma47BtwGorNNdsDzAmHpSpYnpXkZfBp6PE6V",
  "key14": "4cbapfxYDPMWeB38aiTf2Un1jEocE2fmZs8HBYNy9cioyQ2Lu8kQ8eF54K1jmfsA1gxpbZiP7o6wEZfXqvkvwqjC",
  "key15": "2xV2ffa5Gcpc5s6c7mYQoGqAqBUcavkZDAH4U9ve5fsgtdhHGAApqv4x2hoTwNFmj4iw1FD1HoknW4UDGJK4zviM",
  "key16": "i1o5fiW5X65r3sXwrm3n9wf2zB5Q9wBn4hLjHiXEigKpmc1bnfhQCWzSsKVHKPr9PFrtqnXQjbpKUn32bWd8DN2",
  "key17": "MaMD8Tr4tkym6fH2J9Bscpkkk31i2bm2XpBHrZRUQGk9dTKrcNb6H9eYmFwA89XJNDcES5SF1cQx2SctZ2jrnsY",
  "key18": "xKfrbW6CmSMkC9NPYicoyz6GGL2CQkwtkgqDQEZ9ZwRY2UnPW3sQi5RWKhq4gwofufVmhixVHB5kekdqogG3A55",
  "key19": "4hZTbvknPAc4hpBNEFHjt3fxVAmkShxGmodUtzhwgyfL52CJy1SQDwRDqormCRcbmFG7HRAaY2R5zYv5GuRuhMgF",
  "key20": "2euEQTmrW4n6M8A2Znqqszc9Vv6wSPVVVue8j2dmLZ69RzF4Vp4kRMWQTh3DK4S4HTYFE9Dx4yn2pgC7qhGWbHZu",
  "key21": "4YqRJ7rsbmwLWGcaYDjZEH89k5uNKsny2866WHtA3tJRw44wwGZSzTA7b1Usrk89C2sxYtwAJNvuEtFT2JKimsUH",
  "key22": "3sq7YmWKxnNuCDvDcNVqMAtc5LXg3racw11yC8qM3LtX7CS2SYJRFb4L7hdnhrui55x45ccxpg5Tzzb3tNviichg",
  "key23": "4iPt5DC9E6JmnrZdYY6iv4MA8mYQ7CMmb3ggLifKcB2SJLCnWwTq7AJFpZD7RTp71oqoGA4NhJh43kTEDwkygTs9",
  "key24": "2Hc3Q8HDt7xtu64L33FGrEgWMt84xfCQH3HMsExKKyAcyxEjHHDBfBp1AtQoe7Jen7DdVsAn1ou3AAi3o4uthHj6",
  "key25": "5w9Ek3BqAZDysN1EWfaBD36aM3YDAt4MYafyz4Mo6XJuFRfh2tu2QGk725LKomqxRMFpWMJ9eZFhYxUGVtMfEVWg",
  "key26": "5fYysZFGBWeCN4xYDvjaiWBY9jzRvqazm4h6xBSeRRnDAxxAixdgiQH119x9GnbpQQVM1W4QtXba7ada85QToad2",
  "key27": "2L8WwMBVZg3m1wUhig6r99xTCPnVBhsm3jfANtnKhKP9tNGqAKTr6raTuE1XcjCw6j8kuo8NWyK2yaXnzmW9g5gq",
  "key28": "2dU9VTJydv4msb5WMADX88qRKdZNXBREv6K7RzsoxAM4b6svSsvfT8nHwLWSmYratujAtGuvmds8WhLs9qVGRf2D",
  "key29": "22eX4u9k46NHwAdLfdW5nKZ9nfeF1TP8CbmDVZ4BNU2B6eNyuivqrN4VFkwPJuSDPD24adXvheo2mCyqqzesBog1",
  "key30": "59uxiwTDmApYCeH43x22LWfyM6dve3EnN91tDCEcVohp6JzzxmwGyhr5pxAAnaVKUtPVrG3DqkpZqoUeVinG6WNZ",
  "key31": "4iU22mrKobmdr25C1N8PxC2bpPCKTrC9X6H4bgsdv13USAHugBNehkLwq9mbc9kCbZkxZperLAuURPESsa5Ukd7z",
  "key32": "5tNi58fZiLKACwPYgp5ShohaC5uaVB35t94D8vjERuq5pwZMKM97PTE3ToCxL1kHx8Q63eoKArtSBe18rmX8YYRg",
  "key33": "2JuVJb3JrRrhZT4FBM4gaCBtxGUeyhdKRtCMmigpAWPigNJtrLdSb46rZ45ZtD5Af7mbANWgbhHY9A6HWZn9xGqy",
  "key34": "2fRQZppLNu9sZTmPZUfPtmfPc9Dhp2KT1fTX6aBhsk21pbnKgMjnxRvQZHJLH8UsknLQD6ptCKXvYJHmtRHBp43P",
  "key35": "3BsoBtoPXNfdoB23cYrq9tSf4GhubjCBeB2E9RnPjUCiskMxdCa3Nr6isSu9sbenKNDegpPtV5ZkNjJopKMLHPgv",
  "key36": "4meE67jcz3nfRUUz6yHeVC8zp4CE7aWQyA4kg68Lzvx32kWdG7jnAj9Bn2mENa7QrjzmBXY8kiPzQPNCsBJpcZh8",
  "key37": "5RALSmrV5LUu6LHis539d1idqPcj5djFmtCose6T8kpJ6oCjyR8V5Fk1Vgy4gnLEKfKnymJMWZTRtdsK4UF16GyM",
  "key38": "2KuKxX37KY1i5YtSauDAro88Eroia9y2Z3GTsfkCGyHH56DWhXpggH8djyLYE2rbLNSUpXc9JmJNb2UkbFdzFpsE",
  "key39": "32tfVjuzJrTzHZ9LEMkyvzzT6K3C2GhkjKeTRxhRKXmQwqWXM9Ac8T2owAwFL8edWUVEwvqPCwzbJjeN6BmHZWH4",
  "key40": "5GbYasLbuz4UrfW4RXssJVTV7GfAJnovyvjURMQ4PBeiK5LB6W9ML5rwRqHk1JELPaZfSMyaKehsujag3C3Jscmk"
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
