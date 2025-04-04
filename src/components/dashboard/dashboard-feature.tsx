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
    "3XLKTboKLRaX1qn3NdN9yDtRjerT7XfznZ8gNr6pJF3hdDVB4Pdv3C6jSpJT2mDoveepxFMiEXaChAugDGAMasbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gw59KpJkGENjxeYnmrbkCyRhGjTJDxMzmCYiTCq474QzDzc9zcHbC4RxMWJyd25Jb45tD9FDyTSBmdZxjbzjtRQ",
  "key1": "3i7TWF6maeUwnMptDJsRU9rpJKnsP3axDg4eB1QTgxbv3vxhMzoTCcF7iMaB8YRCgjBq4mFNtzHo7vBsx1K6wscw",
  "key2": "42J1crGVcxCMRjzsMvWPezteopp77kXwPkwMThQuaEgkdvQUyeU127hCKAW2nabCFJ2PSq6efQFMwEuyL3A5myCK",
  "key3": "4ruXHeV43xcF12pzCtXi8ZM3xerbGEJdSdsn1mjcdCqpR3rYHCqbR9y6dafGDve3mDu3Wdetp2hhgKbvPQoKuH6i",
  "key4": "4rPFjRLeReQcCLqRGtpsoZUVn5TXYeNzzLhFPDXa3Uc1ccLhi8AVTzCBgdnimKeGEx7Q2XpBiAfTUahb8tdPB3nu",
  "key5": "3wFd5mEVGBg5tVfc4uRqGvfDpLehcgc4T93cQPKyvPZk6zdmKoDkFJrce6U8dCcWRghQb2bhns1T69A1Pzr8jZrp",
  "key6": "4G6aM1H4JS5FQFd4qWKJuS8rE4ovoxWvut3F67TppZrNjtvuLGAjTAVZcuzDFxVvbjHpx6ZoZTUjNVJyNRo7PaUv",
  "key7": "3Dj4jVJEqmEBhVqVpindjn4pq2aA4dcerfhB6TjnMNFXNoDDuw3BRqoQsJc58bnWE7scQdbFDchp1KuLERzRzDy1",
  "key8": "5XXV8GhTFUS7jfmF2RdeKgZALA8xy7D9rM6B2fueGHPDoCyZiHYa8E7RgScWFLc6uKkMo5RvxsgpPAQ5R3sNBayt",
  "key9": "5Wgop351CVHvgbG26GEAYxeqKdMPsqiuQ29j3LfbxaF33sbjKTFL16S2hQNsiBQVDpjXB2gJWyGNnMN5HGrT2FdH",
  "key10": "5A4EzVEBELkGMc8Z9Wjr73hQzRbHws237hh7PWKV1PQbUKbuSERvoYRmt8QMA252miTVqBjwsyjtoS1fvofSX8so",
  "key11": "39LjVDPdbqL5DEcdgRif7zpbDJT3okx8utrFWvdJHrUZv21yJE4G4SEuPU1EgjeguurikfFEzFgn5RJqRy4dDHGQ",
  "key12": "FavKYXrZCLVnNxzxe9V4FeKc12y2GJeHLwJQjTM8odFy44c991YW1YRBndd9Au7DnE1k7PbQu2HjYpgYusaFq1r",
  "key13": "63PHqLw95sKZhnxnkNTMKxSCVAomXHKoYQE6Gyj5PXYY1JxE1J7oxs6wSnXwPLTCHSEphhUHRwNETotEBj6hd5JY",
  "key14": "hKkrriE5CpeEPAooPPw854x4VsAL1cpET4AkDUuXSJDXskSCmuPHFu8CkAGFk9xFdHYYMKnjEbYDJvuZUkH9LwV",
  "key15": "4VyDV13tP3Pb2bz3ihRCd4YeJLQ5purBMbVAR6asFABiXLY4iDkiBEgaS2m1yJySZgrDY7QYFWP5oFAd2Zi2p33U",
  "key16": "2WvxVMdAg2vJ24XEg6cTAYie8rMWmgqQH6QFJNW2iY3jA3cTkP76roX6BQpexbLCFsfSue4AbC6YEGrkVzo8dF2W",
  "key17": "66jogwGZrhrdpqkgBVHGA62STxyZ8VpahXXzUZzB66jNyehE6HAUxFCbmFkwWup8P4zjqjqDLCyo8NkA8vwEyivn",
  "key18": "2Y6CUbX9DX6Tx77UpmwbtWQc1psyyP8PvNho2Q92YhmJVfHGphEa8JvhJZi85KAdzxLrvqhkSjD7Ccvo11wn8hkw",
  "key19": "37LNyxAU86AjNWz1zvJFap3DCQ5diSgsSS8oKyye9XkornTmHQP9azL33Eq9CmSGjyowSXXV7XrPxRiEubHD98F3",
  "key20": "FLWZHREkENob4GY1XPq7g6aLwCPhcwGDvcLaRQVzyPFZm5fwxTanTnafyZvZdMgdshpz4n5rQ9QR2eBmeb3i1nZ",
  "key21": "39PqTsstpUX7Xn3AuLmbkfpVyvisxUPrNs4h2XvhNTQHnyfU6y84yJE5g1eStieWGpsA3LoaSNGP4pMdfEJizhk1",
  "key22": "wcTpiBivx16jLfCngEr6Nms3VnvyXuitBe3meAtQtmAGonxFRLBLBgt8q3ceRtbZGRiKESpBmxBDq4eSraZ5hW6",
  "key23": "qCiSbhsbG7UhTfca4zFrqn2LrvxMqzELbPmNJ17TdJx6aMLG71arTETGE4D5caw98WcemVXRExa9bi83URKwKoz",
  "key24": "2ydtw61cQL6sTeQHjzDZqgNk74mavSw6iA7y5LYPz4eiPQU6oasdjeMacdVzEr36ZFAszZemNZmaweqVfGxN7Si1",
  "key25": "Smse2N7Dg9iH88ckNDpvxfK3USTAih8zaT5BvLQ7mRjrbVQXpksBMk49A8NoxzXuTfGWBTedKjfquJG5vxVJ7eC",
  "key26": "65qeRjieY4unYiwCSF3vpB3bEAHR8BcvqyL39B8GtUsC6S8aQqasqQxR3iyqvStYuPFQKzwZfVHqnKzbUfjmUinG",
  "key27": "2gf7EeWinskTPJjB92YnF4Q44djkxmSBrv1gizqGHrBxKByePcqrrxHtofACMkJv8yWe3cLK2xya5RxvtWj3sCq4",
  "key28": "3nP9yakotRnefpfRhXUbhWTMeMrudf62S8nodcTZ96oQHkAyjLZvAU18goqUDJywewz4TGv9LuHbfLuPLSa2x1rG",
  "key29": "34pfzExkgWjZn7zQTTpPZzUj4k4M2F24wZxgJQhust5uBHhJuNHdWLFTUqSTD9fLVSqAvT5KSrhBNNrobmM7GacF",
  "key30": "3UJsdK8kjEZ3cDmWvLSeZcbh8Zm56mKo1GeY5aLM9HAPbNTS7tSkmnPmqLBFJBU5wBARqKUK8NQsUJSN5BhBBXpg"
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
