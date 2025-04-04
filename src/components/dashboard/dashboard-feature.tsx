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
    "5Fx3MGGHZVoRD9KP66eoGqKAp2yCaSNhLTmD3ojJQeKEsMMtvZ7Fugr3bSLwp7wNArpweGPBkK1AyVtZLoA3Ccew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CryNocK6exTQqphp7As6xv9C7wYWkBLWK9Tr93KA2seb4Z2BMrYMz8CPjj4DiMbfVeJTkduzc5bUt8NdNSuvrf9",
  "key1": "2YsFcgCAeXBG8EdZ4iRvq3DYAG1oQnEaBoUJ56bMEDjCaZv9DcYmUnrK3c7XqDZb4DZsWSUF7dbEs6sSVhVXPr61",
  "key2": "5CMqyCxQ3FcpcTAQ9SBYFzG7XfcSSvPJ1y1Cbz6h7yzzPEMZmnL2soz9m7bCnoVxXsnJfGMJB8Zo3F5S74WeQxKR",
  "key3": "3ywqJc3gLgQSSY9kBfMzrBRu9FJpb4jHVAxg76hUjKmq9wdDu5MhBNjakspvPcChCAy4iWq2ybiyKwzjkjtwgf32",
  "key4": "4DSdPuocjkwhdedNwLUuRJNiP3KUU27v3CPATdeAJPjfKTDJ1X4GWydELRSgu6zD7xSHYSg4KxuU8pN77rpSDatS",
  "key5": "3TgVxfv4gBMaMMQkZbKMzB5oFvc2rTci1cBKHmUtskw4ZhRT3UACC3ht1ANh5LmYvBCMo2RQAe1RvQvfW5t2H9A7",
  "key6": "58KzPgGb8ihFDSe8e7vJZZmT9iZyUdJ8NoG2eMxH1TnZakKvT3sgE8keivtVcQQWFX1WYULrSzMqVn1oKPXpd53D",
  "key7": "5iGDQymwdxcWCbVhqR6mHwssvrU3saSU2G6ewiGTW1uDJKcAbiW9GB4bKCTmGeSzaNsBHzbkFh6VdT6rJftBY9QP",
  "key8": "4H7786EX5Tmy9tmTsYa9Y7afSVaJsEJoABUbh3UrBFgVNf2BCrkasFcVcdcg5b7wGRDRcpyCcQzgbSejMGH5ChrP",
  "key9": "577w8FV5BoBRCJXLReRmAT7Z5PUNTG8Xwpccx8kJqKrqhcjq5G6fQTCWHba6hm5NGRnzkGxEx6RnxKpxjjPFHQqt",
  "key10": "GujJzyHyAJSoDmZjvQRzh1XNrmGK99bASL1bUhUpxEUNoAp7naVeZy6cVPt8XdC42W9pWyFhmHboJWtr16zNsUB",
  "key11": "4SLo8pyMhfJ9rSLxLAXBqMdVFmBuevQPbxhkVEbtGT6F6g5XJnBVZc1LFPZaYZmaaDgfFVddQVBpUiLmmMGUXTay",
  "key12": "31urTx78oo6edP2s1CK3vwvqS2mdXCPHt1YFNawkn58bc3txDi5kLmJQUyZPN5TBkHhQDrzWG3B6AAocPH1gYTSg",
  "key13": "3YNSpteJ9BXnWPBW79WEo1BS2uKkZoZ2sC3c9zhv8Ues27s54RRi45wbsUWWtYXJJmHZ6dQy8vAciFsKPNG91uMK",
  "key14": "2CyvhY4HK6J2ezrdEFwGcLcPH153Z3175iBrBthq7nBgquq7axTsPKuMhJZHEMSByNaGAwhNLkQVwbvm1Gi2R6UE",
  "key15": "7GhfPzCt7F3kV7MwJ8s2DGRoew4XoccSiszGWYKKh9j2VHtEoEmMrYsPRXRairnqjSrs168DbW66Umutr8Xj9uJ",
  "key16": "mFR9mu7QJVafQSsXQbHAMTnziSjADajb49FoxYg44bKW6jYtEwBzjio3G8nHSqHkasUSEnquqU8oabYDk9b81mP",
  "key17": "38kyR13WXc4bq4gbx5Y8kHBPMQXLMxQ5KgEaWPPKPe3xqvYagRrFPH4NQvkCh9DUFZovdWgpniMet1wUzFQeqAzA",
  "key18": "3tfLcBLpVByLELpYhAPoYYT1eTsa5rrjXYZDmsWj48pxpN33kth373iPsVtwqSt8V3V2aKG2mYFChYfDboFwQApX",
  "key19": "3JVAXr5yegjRe7UVwf3ZqDTNmdGdutz6KoxtUfFwhFEqnpJ1nqD1edsvndUurfvwLfyVNyqRNCreBHB5FHx4AY9d",
  "key20": "5cter5tt5y6g3U47RNE2Ew9bdgWG3noMnnRrHBJgFmyf4Kkkow65Wh3Z92MbkJ5eYzjs2BMW8JERCKRhY7SBn8A2",
  "key21": "HHpiBNDjWpdMXFrjfVbyqnL1xsaU23UJtVNLVQ79oaYgJrKmkxHJtYcfo3v4yT9FpV34X6dsvdk2vycWwrZvCrT",
  "key22": "4CsLYbpGGsFQJDya3R3AkJnxTVhMp8jrNaKMvjyDooQHY6cYPxCGfRC1f5KpVCeyMkbskpNnPbrgarxfsLnDZd7f",
  "key23": "4dwiK3YdC31qmZgRhPRkNAhb4tE8vghfBxiimSgLZrUmhzMbEqj5yBxNRanLwoog5eF7FKH9nTT8HDytGkMyM1QD",
  "key24": "3rcYjRjfi5mAHahdN2u8JT5eoh4G9n69MurFGUbPsnKinXqXmVss5Sarkwm1y9ESeEBFg6Gef21fU9NsbXuZinGw",
  "key25": "5NRZNNCM8wYZ6N3xDGM1mFwuCGZ52HCSFk2GFQcaNTdQ1yH1xJ1nRz691QEnURzpGF9jFjcBex75jihL5hCPGTzv",
  "key26": "2rt4mEq7s9Ci2AEVECC62NP6zihfSJCJ3SaVm4UMSx8M8TXELXkgQnBjdeABiTohpsq63sHTmHhGyyB1oWzFewBu",
  "key27": "5u3DxJVWReUL57KwxShj5WPQkJ37BtPdZBuHXdRXUaRhnQBWh2qR5GQgektzNedAYQnp8AgyDaq99MZCt6mQBDR2",
  "key28": "5dmNyxNquQiXAkL55qmXzfVxRS61jJwXKW1Js3ASC9BM2MRe8jhMbzGH8yjZPFW8HvgBKN4Gggvqqs4Vzqcs2Nxo",
  "key29": "3ySGU3xsakQZiF7FGrtwQWeZuT5zYcvu8JgnBzuqtPVgo6qHqbJADMf5MdjAeELRU6bqmnHEAYuLmxCwPvtuUiiq",
  "key30": "3g5tZenFv4Ww9dSFraT9Atq1fZshiyMTFz2QrU5g7yAmkAH3K8Wxja53F8JgB3c4VyrZLdMMdfZWKvY6wXwBbhWT"
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
