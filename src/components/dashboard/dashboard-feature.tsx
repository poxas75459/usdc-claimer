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
    "5S6uAD2QLXP4csKcHUx3uYHVHpRxiYxu8EgbjHdHi5vLASxyHzKYNjPDC8cnc3Gw7ymiBgF9S5Vgp26rwVJNUtWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zhv2eiGHCwpNFi6wzqvbtw5k8fdU2zVALV7UNQ9ZWMJREbVdvFzaaESDh9EPHkXuQbhdFoWz88HFMCaDDARBjiZ",
  "key1": "5s7rEqAk1mqC5RDmw583i7GbeWvTbqEBFu4T1bohKKiCfGNpHeD7QJwKRdreJwQMH6ci7vND6SrMKkhQvjkJkQQB",
  "key2": "39sS8bxp1t9WgM52XPvjX8eYuXmXTgreZxF18v4iTMCanQruNjmEV3t5iAdh6apx7yUgSuaUtgFNw1Ed6oag9NZB",
  "key3": "2eXCBFCBmkdsi89kP6dpNm8s9RNG9NugSLCPLNrfoBVS6NsWDmLar7oVatX2vsYeVkEaxWG74AnZMQt3AzfcdJyn",
  "key4": "2TnhHsms4qFakbNBSjwVfth4pejbtFdB6T4V2UAQMHtzsfY9iaF5DAj2KkwpPUEb8sU7Vwu76tdEw8LjhqQKsKQd",
  "key5": "vQLSfGvYMWWeyMJpP1nHZmmyJyfeW1ox2KG9WMGmhVSMbykSAwfaBoYVVhLmifZPjAFGMS3dRGPQ9tBC6ZG2xWe",
  "key6": "3XgeL4iZjDhYacYhcqpv72v1CWu7yebQzgA3zcyHtPRMHskU2aBgcYEsB4c85HAtQx42CFvww8JovqXhipWJqzZ2",
  "key7": "eVChp7kW82ywFaLhgRmv2BKLwvr2xQUs1DEwGsK7EuHT9WQsuWreQVGRXn2sTZrc2jne3hJscGbttkLSc9uuNyx",
  "key8": "HG9b8u81cteHH4BjbFd8AyiWox7GgNDJgwr1ryn4Lkh7T2SBMJuGg57Nfdj2ZKrjgUUe6j2BzgySWk3eVjz6o3b",
  "key9": "2JrUJQBTe63sYzehZPaDK4QbqPSC8je7BKwEY1ECnaMct3dSUTbS361PzBf5KMeq2mtoUGeVqohYCstJdgZdJyfd",
  "key10": "3etqwNZU1gsKiEMVmzGhzrsrJWySeQ5HDhUrkHNzm9SLj2bLi613UBJ3PmBQJB9kp9vnR3ke1QqcGD7ka4iZzTGJ",
  "key11": "47PK4WAGG28zZ8kHMFuazgzwzgXpLdx3ydEYMJxxkMAqGMRFGJG63NJYdJAZ84SaqvxNMLe1YdhCzCtYeyJQDaba",
  "key12": "AUUDs5A7WubsqJE2DnwnNpWuaz6QBeLn425you2ELKkQidsUuT1wuZoVWADUSMMDGKUhugiLXLxBZZdRnBVxYyP",
  "key13": "3ayWYN7B8j3ZtkvutnhYseh2LdSfYfJvhSVs1fuPJHbMbAkPEokF4idxW571KF3B776HsDJhJFkQjqtanCAoDASS",
  "key14": "59UBzWHR4ZXcUTeTLpd4Udkt6BjgnufmDyJ53QnkEzW6C49mDvsWajT2FEaeUfH5CrtjFZzVkdiWT7bJAJgzyJZf",
  "key15": "3msXjGEf6HrDjY3mtZgmEP7tvjttucrM2rUq5Tg7JTFEE2ARpdG4pfbnrjM3zPoXqrcwExLiLGQGuPLUuHXoE5Tu",
  "key16": "5xACMe2e1ddzSGUDQMSzRYMmhuUyoTEHgzuxMbVTjCTewLPaj1dGD9ap5oXkrfkV5Zq2FaduCu6n9PLXKmp7dpf9",
  "key17": "ZBEkertmqCtWxomXkQN9ChRDgzwj6iZWcUAeAVJouwZ7XNYrVnYRZc5SrsHUmDwGoGwW5NRnQqu5afHahEbao5V",
  "key18": "3AgpRghvNyLKwpDXcGWDC24M7qBWrHhWKnCXgF9G61QsdXLg8BwD3owvdZSSLTVnkhg1smoHXuJNPxJZybweYt7g",
  "key19": "5NvqKX4CQMTfJXPTD5v4wsLNiBGQg9n2JKqg73sTcuS4UhafpsBDpXZBV55mB97wLHBm8Wvj61RoqtWiPhng8HAX",
  "key20": "628RbsiR3mctvjSnewPFXVTsGvr7UPorZojpCAVVk8fshHVPRZVsJibzqJwonQyq45Cw5BVS7atfkq9NondgRUc5",
  "key21": "2MPUGr1b79QnqzdSD7dUwmiPpRt1WRPYpC8YkBWJXDy25An6cb33Kj8cPQtu3CXav6EYKgXT1WhpxAT6rG5YJuuq",
  "key22": "ids1qr5mKM6FdMjTDsekG69b2G6oqgY2Xm8sAzNxa4dtw5L5AFKFkYumkme8DF7ZF1y6WiZVmcwHHWNVt8v4SNW",
  "key23": "5JXRqPuhYZ3ckJjdE3aVkzmKzqBs1KUYjUtRtANeqJWxxmNBA9KpEYkmifeRRJsuvc9atDgigj1k7uuf7oAQL2ix",
  "key24": "34EAz1QaR1VKP175Zm4JYTdLyECRcsBdbcgsmezwxGWZeDD6GSyJgNJGwPUJKBmphJNubiz82t6Gd8r2eQhwaZXb",
  "key25": "3tW3FAFQzzK3ssBqhAnyffoLCG5fKEhysYDmKbNZQgwTtzbDUgykN7M8x53dESiM9CQDRnhwWZ4b7iRArCEVem8e",
  "key26": "2kfshZQiN9JcyeEMtE71jJpex3tvJbdDzUfW4G1MUqkk21NnjYuz93LjSPaqhGzDdiYmaG2xPjNXbgJM7zn37kGj",
  "key27": "56Ec6DYSUp5cRJc8ns1F74H2RuoKbpz6So7Cburv4CPVN4b9wEMLeFxSVUmYP8LRJqws4Pf59TdBdozdPxooqtqR",
  "key28": "5PuEF3hfmBqzvhtBy3eNkTdNd9WYxP6mW1fKsgYcW26ZgVf1znMZLqyP2EJGwHAr7HRFBp9LbkAVHYXqfqkUir3B",
  "key29": "2FXiqCBYNRAtoX34AgCJ2YjmKvTJa7WtZZhqHsutmaYPghB4zXBrsiQg6GdSmTMq8W5BgN7UAaLAitJU4Waxs5nE",
  "key30": "CSsxjnHRoyi9PbShGYwSQUp6DG7LDePRzqdSy2uPLMEEBtFyJgcuQTKDcqoNhjTGoGXHEnUeE7z2TyszYSTQzK1",
  "key31": "5DrG2WSnLsLmwsBM1ZQEbQxWnu6MsaTJcUprtPFduPsr5kcNVRjMVrZuu7XBywuL4EaQ7tGtF8bySpb6AZH5o5TB",
  "key32": "411wmLvvAco2Pa1T2Vo2gBwhMWz9zLDiTnYZo8rh6StQhC9ZCzbLMQqmtLjq5G2SMz874GT7G4rJDXdhwVJhxV5z",
  "key33": "uSzSLcef1qudKyPc7uBPCTmK7cihXYHmy5FKUhYjuw6KUncxGsoxSF39VeBDfUNv3YtAzEwC93YDU1hedJg7ViP",
  "key34": "sy7DDwSRPdfTjB4hnotpnQRtqDgX6DbYPFkUEgNawKuDKthSAZXpwBJZFKAMzkoV6uz9Y3zh2NheDmt4QmA2akh",
  "key35": "sUZcX6XfN5hSJof1mWyNhNf3Cc5tYg2yJGDYeucPEJSgnG56oi4gZMhGTfPnzaAfAGEYKJiHEqpb7jyBo32ssE6",
  "key36": "4aHUxP88RF3REFYPniNYWPrYWLq7Kz7wv4qnx5kWTJYbg6uet5qD13pPsGaY8zPteWDWDn4sPQkoZgTDfTniSRsq",
  "key37": "3bLEjK4iMTRoCHe76sEKTyuSWRvshhX9vzRVk5QLF3u52cKJ2tbxtiHN9hrfxjofhS6pTmpvU1RfNxf4AxY3e2Ak",
  "key38": "3AMUfBfMxKEAqZFtz91DjTWWUeL8d7WU9vfLs2kAVyNPNqt7JQp4nffCGNMGLLJa1zXPppjunjUTRdZqjdBmEtB3",
  "key39": "4E3uNMiKxb95rakhuJaFR5HauLAHrdPRfFR3eH96VBmkL7qjDK32fJRXQzTTGfd4Mf6SKrBAKLF9Lfmny1Jg4N67",
  "key40": "5c4w7KtwNTkSmL32XHrbTxgxDkSWRapv723EBcHBrcaeepxWRkzWubUhbjMxiRU63fxmbTcUbTHMkEt3tVuKbHtn",
  "key41": "4GFXQQiKdPf4LpAiMj38quribZKiKKBMqAgs5He32iL4d7i4T43ghLi49vhhaVpT69fuwLwGufSpNPehW4vgbFp6",
  "key42": "kXRCfdKd8ymdmzRmdfjc26hVtESZvAkM1B2soaciymCGrRKCDxcEp8HnE2u8jjGcjvUqh4VXrX4dYjdqxDgddkE",
  "key43": "KdtCEjM4X67oscPwdi4iiErFt5tawDsU7AformKBiLaD5v59ZRvCox2LLop9L8GJZq3V3SaSX2S26ZdneasC9uA",
  "key44": "2WSKQyJvpuWKp8VME6wwi67tPzD2cr9QjUWKEbRw8h5R7kASyzjNibsBgN3xkfUZCFxjLpyB948kbmiEMNbzqCuQ",
  "key45": "2tiEFT1qSuvuphiqF5LxmjsVrzwUn5WRcA9TjcANwZaWwKd13U6M2ySBryHnjUbpE27qvnwKzNDUmbSjvcBh437S",
  "key46": "4EqJ4qTV4DyQDFHUcZfp1s15JTmTSCC9ja2K8Pmfrpbi9qiTZfPCip8HYqCyiDUre8Xkr9jQGQKjHcHvKWFcVyeB",
  "key47": "4jgUacs3MpE385J5gZBjfv6UYZ6GgY21Skkva9eQnsbCJVpQRA7wEcFY6S3aPbX7WGWHZUQ1CPSuPZMZn29CEWw5",
  "key48": "e7EMQjnBAtx398BXkhCfd9hZq1BcikzVHNdxxKWYjxwFrxgvood59BVaVLaD2xXByzAkAJKxDsQo4Gck6kuGCq7"
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
