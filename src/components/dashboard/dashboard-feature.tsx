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
    "5YVaemLaEfciM9t8Bn7SVrQVsRn2qnSWgU7HDanh8wBEhSnpzb7eUSmuYn2gDNQBqQ93vjJgpAYqZsHdNWXbsN6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aHhScnHq5TZPCKUcjUPbhYjskkcLnN4L246YYTitjgzCGdzH3wjMMGLWm9JZJT4SWsMoL4vzJCwSKDLDcARZxGp",
  "key1": "tzybimxWXuYQRC2ksHagZrFekYfQomtYQUPhmF7hrGebtWb9sUKHxBgdFzX8kHwCgaxFaHWN7rWZzFXZoNRDmqQ",
  "key2": "2VwjMev6UjHSWkVKENvPYkox6qY3yniryxggACV1rK9B3YpZqAsNukuitRiL3ppmmNp8nu6PVjKX489fDPeEgW1X",
  "key3": "5S3aviQqdXZCVnKUvsvnVTjNG6fCrDJZrfPTPuaPhMWZ7ZZhjhFV92VsF5nvdzcJU7v35Vq2r1jQHpd7mCng1KTv",
  "key4": "4FQXoENRKssZBqY5F1MQGgjF7E4rAG3YXs1X5tG9s9DZdQ1JzTC5cJnWSGtb5Cn7FFF2GuWUK71ZaEqysvhTsDaa",
  "key5": "8q1gJUh1REpZed4L3wSXFPjMHXSRpTxBwn8SVxGJWcAwyeGsAqhDzchSZrhztJ5mNgCUwtbLoipMUZEk1UWa9Zn",
  "key6": "4hGXuQLfJUv6Y8L675mgxcxuQD6VyJCMAN3zQdS5NNfFTE5GQ6nHmwA48y8HACNUA4iJMKkqZDwf8kgDkPyzZwtk",
  "key7": "4s2UyK5z99eDSExEBmTj2zJjWEzYrG6FJGCWAyoQNT4t2Xd7Gp35QR3KVEGZMxWrDrbP6XrfuNN2eWHRPxVADyLK",
  "key8": "1oCNGqRtbyVmxx493C5kAYTCU6rL68ZzwsYAhzzJCnrRUEXHLFFoTSGfhYzNzGqAM5wENKK5X8EeokWQoTZBmZ1",
  "key9": "3CFRgYkDeW5JJDstdqM6YWp63UnintyBND4kwUBEBA4GrrCHCJnjPfzVeVJG86TPGBo97xiA1R632SniGisQ4jGW",
  "key10": "4X8gV9Ly7zV8hMCuc2hjWUW231Y9fsz2uYbfppPDc2BYrM1bbsfmvgUBQEryAZP7PnSAWDMnk8BY2dCT2YU6SZfq",
  "key11": "ReMGV1fZSpadwuhPygN13bSAiDDys2fkxRBhnvLzVLVwczD8UaTi7iJEQEXucdhmFUXS4d8oHqJinCGx8KvY8KZ",
  "key12": "4L8FhZgZ2oWBNKP7iwdHph4KTda8Jq4jFAgAWGSsVpc7ZtVK61PvL3VyJj2B61mBWygypnfsGryxP8RNEiuG5yJq",
  "key13": "5ErjoKonhoA6w8eTnkKQYqo4DQJr7fTyM1SZtM1Xyrqpd68tXG1aeS7Fvmb2MDn7AcUjwS11ZDjmNWVwYLvkPe2k",
  "key14": "xMmvvSkY98XnNMQGAGSJCBCAK4ubmHGj3oFeCR5odaBFUVKG5PDhHywDD7WFPAVicEzLFTszBsZiFJKbZZPQ682",
  "key15": "2ycDpGbmVwn5M6Eg6AEe6riU96mmQydC9vNpYUCDEH1m8Aaf1wirEMBwrq6NjR42P8aihkE8UKgbmvqRNYrJfj3K",
  "key16": "5PiLbYAQ6AoUirYdhufix1wYUfTPhRYkog3WHfbCJTMShi6XdzBgHS4smrshKurRTZ2VS1ryQcq6HE9K9TCNooFG",
  "key17": "2mYGD5FrXePGUcKxodND9GZwhnjDZq2UQ9g5PKy5kHb1sYUmbPMKeLjHD8jx6Hs8j9HKYsudfeC693XFmheEmM8D",
  "key18": "2WfoiYVsqeVvgZ7nZLSC613nLhoYiT7LT4PEvjmCa15cozx3MUmKM6LzwJdowqthQxcyBNFaESenKZ5LR8oBiYbE",
  "key19": "uBQSQzyRuxxYzo2xayuKoDcxNaLChxtYuZiy2zQjCMaXwMYfHFD2ZfUV43BkfxpUuSq2PxCf5p9Bv88VHqfwoZ4",
  "key20": "5PyjdNEVR4fbmruQebDbCdeJK6yNoCGgvKmNX6w3ki8AQ48xePu9Tvz6mWW29NsDztkWmXgdFNCmj3MDnWTkhEQg",
  "key21": "PNWCD74d7tK9E5HAZJQdDczHPUnR97TYfgt4itNQHhofyGGaLVaUWNSR6swS1qiMsoMA9CaKbf9V498fzXpQwHj",
  "key22": "4nMPpWjcMGuJ4RapfeUuKn3rsxpRY3etAMYMioeZWqsJP8tdnrECpooJevZr8ZdB4CDsKorTRCfdj97neUB3FrfU",
  "key23": "5SzspQHJqREp4kmwFbyVcCEv1DbqR3zLhqh8KefMrH66jk9n8ZraskrnfCPLs773YyUXT1ZS8V1cxdLgLvKBoDCe",
  "key24": "5z4AXnoshKo1EiXozxuhdNEzJVV52smGMcMNsJRCrsiLHkPAV4c8tXvgH9XbwDVZjkEA17999b62WisNnu1XkjgV",
  "key25": "37yjt7hzHucaUtNFRYwyYXKn1m8HtYGYV9ky7ou7sSFcQKXmCV6kVpfXx44987aJFCc2TAbXuAvWzJCP4dwPgyJv",
  "key26": "4ukDUhtt4CU4FRqNo3ZNMiAytdzEoCTPyx3V9W3aG8hS67ayFPDU9GMGNeDdPWpRxGQMug3P1FWhyWdApSxCymw9",
  "key27": "2EVu99RGvZ7yRs6a4Nv4vS9YijAxyMhcanSxR7SHVqWmDC76B5Eh4wprkkhQpAJVmi5yme8RyX3vu6Xa4AAV6YqU",
  "key28": "4pVwPu5qhkAijfXtiVhYCnA4mBwurAmVRB6hG7JvrCTSb9BunnURkYjc33htLK7QeMBYcyV8rX7VJF4rmR81jtrA",
  "key29": "4nN7zimCWob36GJhgwMndZKztK3UdTrAxmqnzgqAExhTejfrsfQ2Pih2whxvSccNbzGcdd6ywPinMTU9YPLGuDUW",
  "key30": "KteFoUeUs3hPt9yqMXgFjr5xSniKLnB2NZJMgxYEcVL6SjEJCe9YRzjMRfWStzHK1nQftGS41Tbvq5WiB5yeshi",
  "key31": "ANaQ7Ezbkk8UDU4QjnnWBdnewFDq2DkWDtk5XvtceKKhnkqR9Kf4zktkPVsEnCPRnsJFZBLXGXUzRgxcoyVjqcj",
  "key32": "37h41UpESsQDCMn6vnGWFV2McyiKW5PAT39rz9FUGJqXTce5LDBnT23ZKiypx3JR6U3krqM3cShvU72UpsSKbNaw",
  "key33": "59Xuv1TnUAhJ1pQN7so1cPfEaSEXkuJ9q81caV7ZX1yS1rpnY6k6kusEYn2HXQwgJorWCGffT8veKfd8MrGDkNNa",
  "key34": "5wHoCgYwGDZzbUHB8DyxrFrbNxKDJwPjFUHZWagvnYJcvPbViDXgmMXJijUC32qSAttSZMHw9YvyG7sMKDEWsxV7"
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
