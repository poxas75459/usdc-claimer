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
    "2XUTofb3WDaephWoWa9bsVk9aDW8TpPMiRHFMBU8Q8SarPNSkWxv6YCrPDs6waaNhSmmzrRtxriwqqaTnEp9fGQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKKTjFiijNKjWCbgFMiRmMtnvxx3CFynEkAdYkf5zeWKcpBujZeAQusNS3SkYzkYtjHu11J3Xw4gDyap7bNHwsi",
  "key1": "4Uo9tbmDwVfk3J1F8gvgTjmNyBufBvrTmDQT6v8zZgEPzLJUJXU15XBV2LKu4Wb4tpedQv1NqLCA9WmXYJNAU2D7",
  "key2": "S6AwXa9MRXXm2Y1wDi7wF86rgdGpWZ5H2d1Uo2c6EcMCcDvVRrTXXK86pWdeyDaMY3URPeUgsVjbcbAPZLToEMc",
  "key3": "2LRnuzAdaNGMPsCv9eiMbZd8vwBmBxHwgUv5uL5Nb9899bdG9bypyvcWubPS5gsPRSXorLVK54gCSFzsMzsNpTaN",
  "key4": "36iVE1GJdWvHiyyD1K7KNfbjTvXJm1kaiX6fTh75TuLoiWSvoASBkKCmog9PZUJGs1EqpZGfByEsUXDVAosn85JZ",
  "key5": "5nYdVxoCS7LL9qhFTzuyKmbwH3uEQqrDGeBCk2imMu3AjeJVfkAThnHHsg4qsEWSfgfEicXqU9d2weZ8eW4AYhqt",
  "key6": "3EmgMUMjzGnR4j5zRiXJ3zA52yDKgcpCdXr21bujZRd4o7JGwXu1ieZ1fwerQ7k7T6wYoy53N5v6UP7YV5CyVQ1j",
  "key7": "3hJ8ppHWL7gQVkuPn3xpkgtuHJnFjFUrMvcDzHyG6dtEhcB86EgfjCSGksTnRM3mq47sovj7fm6cac7DqoE5cFPG",
  "key8": "46oPRJSuuaekAYqAftMTtD2cLzzbCBLTz7iEAeCU44W4GmBhn1bju6cnhtks5ocfQrRPMm7cdgVqsfw7FTFTtfo8",
  "key9": "433zQXeKHjkjsc4H1qBJprhfbeN3QwAf8Ke86ZKxH6mooSCbtrZsBVuGickGyfKs66jjNtCPrUxYoQxjFSBNNF7M",
  "key10": "2FTXXVtVkNKfgjFvQbQxwjKAcvgNRWrWuxJV3yAk82RjVBrJYRkk79uw9V3oaqwkWFaVB2xohvbR7ntnUEFsf93c",
  "key11": "5F9JYUve7qqZNw9J6pTRG67Mpo7aKU11Wauf38tUhHraMU2KGXUqRtKuXkB4DDVhXJ93jWUcN1jMYGcbsU5fxYX5",
  "key12": "4Ad7QkRyPcDQMGe52Np1Yk9wo3BR2D3cr4pPPi61nFkufo88n8cThfHK4arK3N4tLNFmVuU9G4kBrn5Zh1YWtq8X",
  "key13": "wSndUPV1CyeNWxNG35ey3zV7NFCxrTt248XVQmAdjcriKc5rHAqNtMZjcaH4PmLP8sCRgaiAR1oAgn4E9vgNZCV",
  "key14": "32B1sXveRAHETe9qnZgjSvEsoAhma5e1bNd5L9nFJnNXEW7XhTXhG76e51VZd1PQE2EPjZXomfTFgAtLcxRQMweg",
  "key15": "5bjRTF4VvSPNhBemoqDhmsxVCX4GhA5mN975DRFqhtYWEDnV7Q1EVwEuYwPJcfYvT2EnGnoshRJuB65FkyGmJpqJ",
  "key16": "4RqzbLDq6ZSsLCFzyp6UJnnyPd3TwTXogfYU1r2koYbWce6YW9bJr5Xqo9EJFqd83pVZFenZLCdMQhFCFcHNwKwM",
  "key17": "4G2HfXXmr5mhCwVEEwddPDoB7zMcy6wQd97E5t9wvmntkvjZCb6oSF8JgRJ5YDzhieFQQvX4h6yFtWUdHhvG13Sg",
  "key18": "2mGFsTFRUnknf1aWF6RNzp6yAr4gbwy3E8qjDMTsj6f6MNwaG4WrHdSSrm7hew8BoFBTisjQkXw83Z8SAb9ZTAkZ",
  "key19": "5WxqErJ7SYEqAQq9WuvRNPwAoHhtaTU7ba9Uovr2rh3MBbNqMriuhv6UsixUC5xhSzEoUi9bYTKxL7TzjiC814zr",
  "key20": "qXZQPvvzgckEo6zxvScoNncK1fZMDUz7JhDd2p4BCyqJ93GwLau1b4Edymrr3emYmKyecexkokHiaKMz2UzkSrW",
  "key21": "2rkPa3vHSC53EmwU5eZU2W4G7gpwpkkcK3seCyyKSYghU88k3R2DLHZQyMQ2m9RCgDAZQYAcw6KWjKmVGRnm4URx",
  "key22": "4FCn7wV9cVHR4mngbpwZZCUXWQTD2dsdfYGyXLow34feS7cukqw3rJv7ZY65iWe98o5o9Q3mMgBk6xZvSgmKftGG",
  "key23": "3XM3zGM6D2j1TmnbZtaDTTSgS6LSdFiMUs4EtGUFoDdrvrqQX18K9aWkGmzvzGe39vQtqybguFxm8Xzc15MnT7kN",
  "key24": "F9qdsVCBhfcicD3FEAFVw8878uBoQCu6KDeyJZkV8hZ7s92YTrBu5MJkTBNUCHgqxYGwRvs4ZZSR1LBe6EEgGmp",
  "key25": "tjCPNEHBEEM33d6YQt1YYsT1uheC4QZGdvR4DBb44waHX2gWTXbcEvRiLeAHmGvS7CEf9dGwCyFTKghiQSY8b92",
  "key26": "54tzAX6MkiusGfbHP1XNNcTQRjRVjJGxybQh2J5f8iaSJJsqPfrVhJ2uUN2ji8aPZvnFhMdHHnPJLhi3kWvBDK3b",
  "key27": "Rox7Q91CMQPwV4vwNJwXvf8XDBZm1mpPqEMNvysV3Y7K5vXsWL5AwdHroNAyjFnHhL2wUa5v3y9iE7TXkz9y3KB",
  "key28": "5ruUYSj2aXsjDkaCZmoFBhT8i3uWJXyeUGjSAtqBBHzPnK2aqkinEYtsEDnuHL8HbuDi6ZNU1WxjWgGHkSxEaXbz",
  "key29": "5Ur8CHy6Qrjb8MqAbpWGXDwDTXYgMahsCPyE8WbB28CZhjuWvebzwCPdaTVPB5wRAHNMwjPs4KBqjhyAyYCPCg6d",
  "key30": "62bfzAc9upafuaUnt1sznqdZijnaFAaMCvnBfAmMr8drUZdzj1UTnDZAUmXcDHn9hJAPmmz3XuLQee4nJY67MwBA",
  "key31": "5yKDdHzjkZgXzssfpRFQiGrtBXBBrXVz2H35788rwcgQYnyd2As2VGmkkzFadPUcRrGmySPSZDrdktATrYvmpF97"
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
