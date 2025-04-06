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
    "62ktzsodpMF1oQrszh3g8D3Y1MeaHFFmSccajHoKZLANeqv53nL2MSAuLes9U8AD2eiwPZAszgnFFhzpZpkZSUYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LYpcn2TSvXJ5M77ex5WmTq2TQo8fzsDKM4kRFeBsr5JSJEnPfZ5bn6U1Q8WLjAuNz77ceFRQmEpYF9BgqQskTWw",
  "key1": "2pS7issePfSpJ891HLFKWZCqkNe2kYMPo9miBbDrnHPvhPNK41kMb8yj5Kr8c9szPiT2MRaQB8KDhk9mwseeJG9j",
  "key2": "4jJp48QPWp7qLAAK7Jc2v8btQCH4M5Jr8QfdRdr68hHsWvqh9pPFNEWxXLkZ1U5UyYufyuBREZF1mcfJghqYxJW1",
  "key3": "5JisUuZkK4xURBQ1hxFwsCetAXSM5b9FyiAwPcfVduXe2QoG5u8gjQ1zD1aE1y8zTZKpe9hbxqHfBqCwzpwatUaJ",
  "key4": "5EaexjSx64ff4nzA9nSzaa9y9mfoV1TdC7EbdDouPXaApEfpWRdyZ2kxYvbmUJMZrmNNaUc7h4QRc5aWmVENfGFX",
  "key5": "2tsPMj73rw5GS4W5Ca1pVHWfx79mh6X7Bn45nCSAX44B3CYtGzq4iqNsE4TwcGCin5EobWnEu1a1c4n6CVGtTmcz",
  "key6": "4FzbDW5bymFoHmfHMGASgWV1RYPD6tSafz2hnQP1m9vSBXTo1GmX11Pwb6Nn3DhccfaQjyyebJhSXY35DaBXc91v",
  "key7": "WFZxvMixLTN2wFPfQs5zN4g6VSNGBpHy6g1q8JYgyywfQW5Bqb2TDsCiCsA8iJfmw2JRZMWX8c8Y6tHMzUoTKfF",
  "key8": "QwG5S6VNPYSC85hTexhkNzzLXt92ADySJfzwdw4Hi3p3Mg6CXdohzj2hSniiVQdpHswTjbQUziZb2PAFCc3VHot",
  "key9": "4suQESqCf8ZffB1C4FTmGgXmVdr8w5hj7WxBqMkFY7FirfpJJhShv9iLK69sPANgNRq9q731jaXZ2Sw3ELwnaiPi",
  "key10": "LNxLJY4gWqxp2xZsDvpJrBDGr2w3xVTb9mhDjqpJJ17nvnaaKU7HYLpG2sgbPP9Agxx491wNpzv2ZDrHoHTFS1y",
  "key11": "4VtwqpZdC8ciC4XYWoyu1ErhYmWEFVbmVStrs8Mb7z1R2dKSpaV2jru3hFZfvzP1HptdgdVi3e2cg1TcA5iD2rLz",
  "key12": "577FHctKg6PMXzUtCXj6tqgqV6iG9C3VLLYTFPqbiXL149PRSozCU4CXxWSmw5esDTm6oJFBc7yLAmNqRfKH6tpy",
  "key13": "3PeYwNwNhA7RPwp2cPdutsfo9hwtpB7JBNi8BoBJGj3EaWXbjV1Au6KBEP4kQLr5iFa9pwhMw1auUFHEUqvfasi7",
  "key14": "3QuA7BtKdhd6uKKAQWRWdaYTWu95SjvKgkVHiT96P66z9REhmHVrQSSzzbM6WYfNKAeyyUTPL5GXrAeVDGrNLp1B",
  "key15": "2g74JSvHN44M59hfNbGNtLMxbhikoxM7KPxtxgURYFiYTy5W7PzUvn5d1RdAQj3UXiRMmEPXM5YKj4mpe4DPWS56",
  "key16": "4J6UzKaUgyjGamSanaro15SsVS46dVo6xXX1SXVHxMbjiLXsFoVoDkL34sGacvUxEFigY7yMsyLfMUmfr5KVE1WH",
  "key17": "5KK4cYjQj6RZbyJEJnAkzmExfxGA3pLZX1wJYQUmy9ZeSvEehHtZ5NcnYFAf3LVGns3gSP8Kh1RpKq4LmVijEnK3",
  "key18": "pR9oaZ1bMRJwNxWYn6wE1SSLKdwXkyBx7s4AxPP9rgRq6ej1f4SMU1kdqnBreXQpEmVbH3XZWL8QMzaijJxMG76",
  "key19": "5ZQQAomEtaoPiN17vJqSZReMTQRCPUXWqEJ1oNKLVXFjfm8e2t6bUN5c5YZFCwdk7rm3XR3SAeJQ36Ek1qPek4xp",
  "key20": "uaEnM85a1u923Rc41nUBMHBymHqEbWeTYEiL12x6DfjUBvEPg4pQsJqWTx8fuuhpxekwHBwB5KvBubcu3oD9bzp",
  "key21": "noqygiy4wB6dA34sCD3TsGJ8tMCXAVYH9WcVaCNTk7eESYT9eJULkQCSKaWhbmHPNfpbLuqTxYfCHppKUErAWH3",
  "key22": "4QCtS27YAwFxG52YAhrgFC8rs2JdrtnzSQqUZqt5fGH8gvyCncrc8UKxPGENQHDN92i3cahfqq5JeN9mzwu1hXT8",
  "key23": "66KKJDEyqynLgKt3MqqQoJhaCPjdqSo54nJGEfnrQeJmQRxijwuQ1o9CwMBCFX74PPbaNfXjvUNhxYEgo5mGc8R2",
  "key24": "2AjKt7jPvM1QehYP4XQJfjS7L7FyoLkzKnwaaXqyyffjrE5E6QhNpsSpvme1LqziPnbiQxja4hAXgjeuYyFvB1Qb",
  "key25": "3zvCMBTAKKBMsqt2j8VWc3dSoop1YuGjniY6xxqk41RMbEvA7xCZoNWGd4L81HWSrWJkEkwtW3pZP9zELfb7oizp",
  "key26": "yQHBGbMHzidktVvUsHSYsNdmeDKjgWUjBH8eMrRozBZENhkhs2opjLa8Kg6Go4AqgGgpwU1uQgAx8ZbxMRFirxb",
  "key27": "3HNx4oFivUZupQRcgBebhMt2V9ztS8N4EULegZzA1bnhSg8D1YjJwwsyQ2WmEr2PQtwABtrCipQs3n3dgq9aqDsY",
  "key28": "57QsqLK8AX8BxyDpWk3BkXnxebAVFEavHKs3sTDVDkPpiVm4PRD3dQzrjrg64vPEYYVKLkdS2zC2Lt7JBEaNPbi1",
  "key29": "4ixaSjrpreYMHdfyP5aFkJinr3JY6gaxfFbFNugDTtuftUVsUzjNTB1smFhGYTnumRd1xzQme1H7Lzb8R6J817HT",
  "key30": "5TxRdYEZnNkhVTG3YtBSgjcSRVHcjqfsGquL7nZv71jqXnXj1XyCyoKN236vsHxBL2NSXP3CwRNdyNvrr7CRrCtA",
  "key31": "3q9cZMeWTFiM3SJnNnYFz7uTqqFKPrj9yM9ZWwp9HUFNm4j786nDUP7qoTUHVPyvHFPxYv7VgSinJYgXg577boy8",
  "key32": "CysETLW2YU2YwvA8qDzbiR7Dyt8ZDdi2z5AUHsoP6gxFEbogegUR9jr9tDjP3kVoKnjvARjKGPmWyHR23f6Z4wQ",
  "key33": "c8KfcXRvaM9wzARN6SD8cGLRX18UBXon4ZzqT2yLUVLpk58Sxb4VjhBw59P57zn9YnSBZ5SdF28eQeKnwBY83iA",
  "key34": "5rhKLPwV1f7jXNSweDXS1sueCPPhS6kGcELnUBXwdtXqnMZUqD5GioK5xgKaGtbUGQQ7fgvvketnHv6GqrrMzAzk",
  "key35": "mPHiFLmVB77cygFwoWeqRaG3RAWqcVgr97EaFDHr549ivkLZBfsZN5pGNEWKreGeYQURwxfZMJUzTZ8nZWtUU9z",
  "key36": "3MtRkckQiVfkVQvXcexk82yZT1jTxNF9NTkEnCpi2NiNZWwyg2PP1gr6EnAezxocf1K2KZqFak5n9yg9sAGfSxWw",
  "key37": "3Zk6mWY5xEDPoho7cZ9aUiQDmW78CRuRGzt88kJc1BZEdc2Wrd7cWfEZ1xv6QSK87feyzqYKHXXvfSLkg8n4mMUJ",
  "key38": "sngr88ecCfAud953wmNXtMz5BBewETBQVpLjqRSpkq9fkv2gYNLxBNWtspyGS9o45QHuzzqsXRQ4MU32tDt9y8t"
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
