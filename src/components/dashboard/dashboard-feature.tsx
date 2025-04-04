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
    "5tUEcnwwUUv9EiimAUUEYm5wxQAmLanq6V7x2AvzmJL5aTfdR891uZBBXzrXwRZfAh23gquGMU9gPd2ScjvhiNXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q3nAFJfuebv7WPmmEV4R3FDPomeY47xNWV3AEf5ZVLbuPg3mhnubNSfEHEU3k5MHZuRNHY8pfD3wgkt2ZD4cxkw",
  "key1": "kydmi4nf4wNaJLuk9G8vX1auYBj7MtSSb1iEJBsVDKhuXgAH6La772mSDDkQzMX3HASNdapi3KdQm1oLxDq52DY",
  "key2": "61Qxg1FALa1mYpZZchTiWy4HJGhrtumpv2jsYham68rnbXFQJapYoNQ853gefYz5StRL5JHCN6viLBet9iygAz27",
  "key3": "AqjfGF1goxW1sNzwwsGBzrHyjvuwtJKyv16m3GnVq1YJuYb7yH3Z6VspSYEgkhFTjfMqG6keQbEn779q2jCsAhe",
  "key4": "2NhB7UqdJrQrgRWgpwQZM8BBRAbD3AddNCM1gnqW9AKjX3ZPums5G7YCudyrJFRgXq7h62gqK7UGAjfKHXeVgsUA",
  "key5": "5pNjLURAJ7Pto7frhbKU7mGc6yTzSwyvu15vo8qYECwsdFt2hgdW4S7RKpcu3wYUNPDE2t3VfdqGQKHGKwPVSCYu",
  "key6": "2Hnr6FGTYajMDht2Vc3GN9GAoUWAa4bFQzJNAn1d8X8EbLMcUNzpab82WHN3H2CkZerYenRb9CHNE5dnPgXvFWoN",
  "key7": "2tRvJGhVQdpVQvkiYxJZJsE8gZvpmE2chHLvtaJcNm8zX1oMGtFdVH7iYiwp6EDDSHyJcAfwDJBYMz3pbxNPZMkt",
  "key8": "2GrFJGKDQb13f1f3wYRMdd46azNpshmdbB3wRe2qfKw27FJee67J6zdtAkE318L4dtfbVxgpMyzchRQbFd5sCMfQ",
  "key9": "4oUCtYkk5V6JSkXV3dRib52XkJWs88GexiUKC97K9djWU35nf8EDMsZK1i3w3pSsGX8FevkWmEiGvRPsdEhuVfYn",
  "key10": "DGn6RKSdmtcz1KwN6NL2isB36P6xxZa1oiB5Ha81GC7zYTqmMUVUb5HRy1ym9vUfW57AzwLpK8coSncVHsHoNNA",
  "key11": "4mawvwbUw7AqBHfo5bMAFFtxfou1BQUyZCcx3j5W4wwMzk65FXFRwVXhUKQeQMygPWksNGQ3ZoHGHeb6YrAZthp4",
  "key12": "2JQ4n2GAheNcCncKrD7QdzFRb3dY8UxNs45daywtZmbQ78TnAW6bVyzRRcoMoS3iSKneU4i88GqeYRBagofacs2J",
  "key13": "3BjrL64UXVw38T88eFLJFfHFh6zroN5b9t68mWHbog6zSecmCjoaZ79UUYrSkBGD9G5DMXpGXk4bAYfgUiaTy2U3",
  "key14": "3QFqV4xAdesDTaT1zAWEg5ce9aMvas47QKY1FnPEPYERgaK8Ar5KyJe6vmC7mYh2igHqSzZHkdPrtMaJLCbBbRCU",
  "key15": "3TjpwBgwUhgVGKp27oHJe2DYhge3Yj8DFivPp9mf4ZkjqEnptE6DRJe4yPXGThBHzLU3LRvz7zazekDv3DMxUwJT",
  "key16": "ZrzpBXEUx7v3BmVA8ipbAjRttPQSa4htMLd5VcdDsn4vTqUzuXJTEwoo6n7mea2R4ShdDDFT798R4MToyDkpav3",
  "key17": "2ER7FbQugsnMi272TJjmAnHMGTQFtagtcdMyFegq8jhE4fe2svT37AoVVqBPVe9GwFs7hnxVvXYdHo3Ru33H5nJT",
  "key18": "UGcVLZPsA7YpDMNuZjNoWWtjbXCLDqdBfFSjW1ctgsNr6TwcMjYFbMEFrXwj4h5XbMCrNBz3TGipahsnkUBx8U6",
  "key19": "JHJiL3heLLfw6fXuPavcs2bp4G5fbqucTVE7WLeXwpghisNjFNFoYLGJ2gPSCg6rysmMKPUmMAsMAKpu2Tyj3iJ",
  "key20": "3oZ65XyUXquMrobicfKTaEEDbjxp2nPmQpW5ryQemVrtnF72mdiYSvTRpFZaQ3fUkXqSjndYKt7USjRLxV3Y2LwH",
  "key21": "4Kpd2wLFbgY6YBbRPzLYig96JYwwAzTzYCaxqrvjNL6Wan4Ba6rssayrdypQSUwhFXh4AVUWo5SGtRZhbLa61uC6",
  "key22": "4ro11XXLUuNscsrbfJ9yp3tvBTKtz8sKMKtNA6PBH34Q69xiwrcyfKCjANtx826xd222UstNJXzarhQEXN4tRfN2",
  "key23": "3F4BaUZyigB6xFgoratD3AsbBu5cHYZcfgx5Fwtj6WV7r6z7tk4eSNH2sjUkX5rzeG2dDVTyVMxg5E6V181MxLWT",
  "key24": "4kRMSQ942oAXVTWpEFBBMvJNQ9ZL99oFmcTXhUAWEKfRsu2DPLpUffQpSkUB52baagChhTdtZkbufSUqxiTD4b2P",
  "key25": "2MUNe6a1nBg5ng1JzH8Fo3frdnApB1WrYEBBZYuGP7e8m7wVFH2QorR1Wp99riW1Jhw4uNCiNj2nMXZiTTfmhuTj",
  "key26": "3WEkL1XSy4ZaeefczZFfHG54m6okyS295gxt3xq6Tn1LMTURWYHmB1TtPi8q2uEyGwmLSVZ8Z8DwdH6MJVqyyxDU",
  "key27": "52GTmGN3NhzYU693W3yggfWyfupbxXYPPdMMKjJ3UtrBJ5VzysgdPyjjJiDYHFef6LdpLS4TdSE9J2QQwSfh3aWh",
  "key28": "532KrVjHSMDcDZApHmgm2jMwJS2cv8Yi5Eaa6bJGGCHmVvG4HcVqCaXrCN4KZCe5fyvNTJ5qN3PK9ziVM6d9aquE",
  "key29": "2FcYLqi3QmTkDDRdrwoQGWj9bJMW24LwqBsqHAM4KpnBDV9ZDFbpVsFBsGDAUwQ3TmZRJn2xHiX3Rz69LKcjZkTe",
  "key30": "4tw44wofWPVzY3y2f4wVhxTqLm3CShhkD4gpMXrMJ4uKqR1A8z3F9pwscHd72B6ShkcAfDUETCbjy4CMELrPCjJL"
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
