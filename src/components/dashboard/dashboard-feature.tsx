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
    "38ZmxXLzKFAR8gCh99nH2b1tu3yP71VThz89agMsVqx1o6soHU6RNxyZKmWAutEJQxYXqV7qe1mte2dtzH8cEFKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TJsMDUTzF9r3dMqqxdBkYE2kaZLapz2oLjK4R4gQH2xmav176TqUNzVh4fJ8kDQugT4d1oFuGsUMzA3gTu8RhvF",
  "key1": "3Z7XuQ2grzMgX8ekNEo5RQLza4FaDmKq5xpros7BsGo38Rdz1JrhHR5dJnRKUjWbyEtBGdmxTtDz1knHn64LdtAW",
  "key2": "3uUdwpLr7oSxEiva3ouH8VyjnZNyp2WfpbXByYtNqHA5owcFoWxd7Bjd6b8KxZkTXiy1HUgm3JqbRpHuBZotfZpy",
  "key3": "639ZGGTFSERSgnMbf1jVXqQqCs2nM7oCV5mvLDT7cLgBmLjZxFNzT1hJjaQn54szTDkCPdizm44zV2Ap3LECWZL6",
  "key4": "5WuU4kybVFaQccs74WPNAxi3QA69YVyhocgBZttzxojzo6TSuLjHN3cWNkmNPdUzv7FKvagpEcY99tHgsAH3Z84q",
  "key5": "5rLrsGLyXWf6M4eBunAp2Anjh7UuRtD6XSdpDgANQJ7LCCDVYcx4spscEsYSw2uhA6GGxXZMiaetcFWjgSdrj3tX",
  "key6": "As2oSHeqYpYVQDQpMoX6KVJeMHxruX19FWpZNTp37ciGyvgrxhqEtcCxVeYvCsK2WowoLPYXdQi7wy9bseEHTyo",
  "key7": "383FYkqBgV3TJdXbAZRYDxk4urVRaCmQe8nqyj4z2Cj4N2WGqKdS1zUYWfHQDS3sTyMjHzNa78GqhwNMmwuRJnkB",
  "key8": "3JtF2rKmw7QdXJuGRo8fZ76G8C1vrnGGz4Xui2aHLoxYevVxYsCaTQwxB7eowNcQkgps1xP7gEsXMCU9SPN5W9AP",
  "key9": "55XwyKvJth5NYSRuwvrPg4Cc2L1eGFEjcHhFpRsSkyWqGv83QxYTFCw7UEGZBnJU1d5BcnXbQhi2n27fVUrygbsu",
  "key10": "4hvvh4KWjqddqs6571aUXFNqVMg44x3Hdi1gzq6iNJqFZzjHuuDk6Yj94bSo5aJ8tuSgqz7p2Z6xcXV65H2fo1U",
  "key11": "8feJ2BXP2THcJwKQF1pdQh7o5HUbwkkhcMQQMSP8ZowuHLo9XgWW1WrTYMFip9pP5hPncUp2SXGXoZm3Aw6dzyJ",
  "key12": "6BejANvB2wqaZFhiu5mGVdAYSrhddddsQwrXAES3jbhMaJTZqaSECABw2nsgXk1vp2aGCSQ9Ldp2w2VncQT4CgB",
  "key13": "JTX7Jdfq7pWc9Z1PYLFrPhH6PMiujEekMRMLmDXTZ7Aa17p4ZewNSZtyJj2eeGpHzJNfr7BzB7uiQuCvrd1JErK",
  "key14": "5WfQSG3oXnxwP8EUmztrbbEDmXEVbqNLJyjPd4N9V4SriCTN15AKWj6VuPQUXkZy56Huw7gqzjgBkWuqqDhtK9TP",
  "key15": "S1fdPmexRhPaBHRJwWuCGSfBehU4feGrBFk2Qxo4KS1C74ueJiq5414FqJxi7T2dGmYtuVdPSRpKvCSuSpRLXeQ",
  "key16": "2fPeqm7JBBeYGS7ESbXHeGVwZv9mbMTu1VD2VZCqNrKLB1Tv4sx1NE8ySLZhKrKk2j48i5fi9hM7r2kDeNyNzXPq",
  "key17": "4eFmYV7Nt79p8eTZ7xkRr8RssDopvMEx894QbyfaNUFyDtviwezQtCMN2umfcrMqvVtuhHEh1aaUNqKNSuFnEHoP",
  "key18": "5fsadVEzjyety2EjgqhsUDX6ewUzffDF5E6ohUqFYHhUoXTLwxoqeGTZCE3MbpiYFHBb2XMDtUPYGVuJc382Efxu",
  "key19": "46DKrPr2HWSrtThBAA2foBKMjDs4Yzr5Cq3xeeHDV92HMnC4eYrow8hXqPwXF7pQLKPzTwXk6EAz8VBSJ4M2E2tV",
  "key20": "3nY73DzifS7tZKnmLjZVnM5Jqg848PazyFo2xHptDskwnjCV52inYU6Y7WVmTPcsFD2Jpro2cCFj4c212EA12hLX",
  "key21": "33ddokMnhr2TLDaF4LrgvPaKidmeVUzgrwqVB2dLCaLsEaYFw7e9pPBpW37zc4btn6VAy2w3gwYAnQtjT9HcXxwu",
  "key22": "S5Bu4VQU4MnKrxtkuqqhqbeX5FSpfvCymECSbdmcP2anUgrb1oQmioyypTh9xrd3sJeNX7Gak9PUbWkyRwmmSZ5",
  "key23": "5wtKWTSnSSVNeUMD31jrMmvbwjDTiyiBH6fRjDu8qGuZL9mN5S6ZMnHTZraSTSoABsZakKGsNDeXmxhv7WtjU9r1",
  "key24": "tN8ZGke8XwJKhWzaKZEoYyhLGqRBih4KG35qPQmy4xCZBbeF33B7KproEUkMCqEpc96jReZmeBJcHccHstjLRHh",
  "key25": "5zExp3VUHducFaniTuuTdXehtWZevtdp6xHPhrakeMf4KAjoHmEJGmaipN3DweFaNBCZ16aPzo2zKRWgrq2KYjQ5",
  "key26": "VQ98hdBu2wpRUEToix356dxcqLoRzPABKn2cP1BpKZMs6WrBrPzVKm1DTvnGKogQWgp5V1BD14X4JsUNmEwPV4u",
  "key27": "33Xb25yV1gPzmbo4d5aLWbDfnRpoxkVXeg7PYGMKjK38qk8p9icJvNoQd2zumMYBykwhBhY3PTUwHgSXEzAjwZE9",
  "key28": "5EkFKtbWASvbtW6ovvPTbUatBhnjPg1o8NdpyZ5zjzcMrbGyqRgnWYcRX19mG5tpr4TQ51WZN8X78kejF7fe78jN",
  "key29": "46Dxf8f2TogiHW8LFJdjp6U5g5JQVuxPRzLHaMKNgbhRBU65M9bMiUNzR8F1hfLwBpWbJd4Kkvj3yr824Cc2wg6w",
  "key30": "4jbM542HwNJYK26X8uCkwiFrxBAjraj9NzTDmkHgCV6MNHdNeNfdwkvzYtz4AuqWGE6SyLco23dmaW4VXHCP1jF6",
  "key31": "4BViJt5Y7ajAmuvXybPp4314SkHSJhAWFhv7P7rQgQuGvbtMPpYBCXbDCo2TXdVScNgXxPenRc95PZUmU8uC2HCZ",
  "key32": "tpU4i6dBfFJaKjd5UZiSeXmukEXxLCES8bWXAd1V9bHmfCcBfGiHdwicJfvG2YgzF4t8BS2UYjM32PBz3AwQf1M",
  "key33": "2s6P2YfRpVAmpBTR21BdrrZhdA2xewKonJFrPZka6tdC53cMXbjtdg1GmX1TvF9TC3LWJxDhcwsVgJLXjBZXnksH",
  "key34": "5sVKiWvABQ4o7K4CQsaZMpk6EKeMDuxKbLLUkhu9oFBijCvm4uxuuzAuBbbYiYmk8RVGK6x4nxg39bK6SDj727v2",
  "key35": "sfARVv5x25oiGrutPhCvveHkMwU3cqtu7eDnRq6rNeQqMsXFpBpW967i4a86EsYmcfWm2YZe8Hfq5Q14ptYsDo7",
  "key36": "3oveieSnUeb9JznW5iG1R2ShvJt7CLAK97qN55eercokvuXRuwbofJrmZZfRSb2qeuWGDvtdXEdRNFqYKARxYWfA",
  "key37": "4PxeUPe6Ttqxm1hAkC3iJkio6ou7stwKBVXuB1DNh3MGAi9VYe3e7y2pAfEBsMAaSYE49kyyxSsCVC8ezRXz4jqe",
  "key38": "56fBz7NCr2uCq34CuVE68TAJqRs9JRbrGGaMX3oBpLsGrarK69hsjqJMofRoE2EL5cWGYxwku8j3bUKX5z6zhjDd",
  "key39": "2WyJcoqfbowvvH5wReBpq9ZAxMAxMgUoAJN4ScVsgoQdAAjfxB8gU2K4ubGc26sPmu6yLozRcKge1HMn3SoghB8U",
  "key40": "2TVfs1zCHbrivbhTRZyyT6ucFoXhYFHVDjWGHbhrBfSD6zW5FNFtEaHsHvSqtSQ7GbvZREfKkdeArZ5PNdFr16V",
  "key41": "49q54AG7d6sUFbbqMsB98jwAugbJPCTEQ21FtBLnt4CYRZJnH5wVB63qRGfEJYJrhHXRVZmWpupvvEQgW78ret7C",
  "key42": "33tBX467e115ezMvqxq4C8mBKkKj8K2aUVBheKQMYCc4ktuEAjVVreJ9YjCeAfCrjGLfh6jkrLF5YsRuRux9Lp57",
  "key43": "3KiUU9a8W5c71bHgsYJwqyxMGVEwE9GZuYnQb1sZ5dFRg3ng1AZYQ5M5gUPsk713j7u5r93NSa35P9iUMUFs2Y52",
  "key44": "foLchP5qJjkoJhjR3oGd5Ecb16mK6n4ZehujktF8GTUMNawfEddrbEuYdfRjHx6dhaLU2WH5eiL9EpqpHm8F8YL",
  "key45": "3K24nNHwNwM9kjSR8X98BQEty8YT4NeW2MbDZFyJ5mcefJisC21n55wFK6GgfYC3zPVjuetxiDazhGmnkbyB4Tv8",
  "key46": "4hXagBN2caYNoaMMMVK6WxJ1jq6FM4rHUDore7dvELixRFwfeQUWhrFJxh7z8RfoWYQag9y3SFoc8aFyDPYNJbcY",
  "key47": "3z35ENB3gqN33W3ygNc9mGEp1FbvrPRpvQ9ZKkC8ipwwHYmSUnYkgK3872YVW44e5j952xi73AgQmUErj7sAuCgk"
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
