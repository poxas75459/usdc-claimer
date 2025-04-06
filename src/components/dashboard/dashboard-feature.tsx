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
    "WMWzfdxhe82D6bvMRQPvBX3Ntm6eStUaWM6TNceMfZ1ZuKHRFjuMXJVdvejCYUpYoHGuwWiVADzWAPfNPiTTKq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SjYPrKQCXH4rFBGXYMWCsuKzqQBv2MJXVBQzydF2LLfesXC1aXdQVL6LDHQXX1Vgp9DEQucGJU2wnjugx7FBYSB",
  "key1": "58n5BSxkXmTwjFdktSGeD2JtrR3dL9C1dEoQaQpJhmRaggxutwkcKxEfA4pGoSKFH6wvDbHmJ8FNMWzpsQVcUaE5",
  "key2": "9XX3yvmjV9qVk8tgNGqTU4wLCFsrg8UDAZKPRD85Hfcwo1taVnHQWHfHPusqjpg23z51XX9YgLPFi7KWxGuBbq3",
  "key3": "4GEQiTH7WgwGTfJz4YTJJzENo5f9CgPPxB4GVibShjpkY8fkkMz6WtzKDWGZDkNSnuq3RFNtwf2J9iMxUHsPWABC",
  "key4": "46G5dgnX27uRtWvRtLwWVuqe4BxtyQJVNMDuGoqK9DeHUxrWMURiWw57JwXBUafmifvczboRby6bCi2oxhmHQ8zy",
  "key5": "NSv4tfw8jy5UyXMr1jfwocrmRJTrWiqKNZ7hS4GDSmuX9wpZdStVoV2LFzoZhXNXR9GotxTLBp615s4KrSUNEKj",
  "key6": "2Zik9Nc5JNph9NDTXGC3DFJNt6eLf3ypbj25CAYb3eiMWcFEZNjjpaADyEH7K5jy8fx1ARC18HVF62f82BrAHnpG",
  "key7": "3Aw1JfES4A6Tt9GvZbuXY7QtiDz8ArhcyAJsevqeZJA8LMPj45HxmoaN2Pbncjjud2isi1Yyj9UTZBH1zKjJLjz2",
  "key8": "28QpKAgrdavRxbU3Vt8Xu8jPbpAvafp7Ur7uEoU4WtGDS7rVwfRf7Afe9Dex5ZUzYjUYc5mupfFEsVjh8UqCMFTc",
  "key9": "4p6E3ADbhPxXcFZ174uWXNddoQCLjYNweJzYsNrvJSyUtVxwyuVKwfAaqaWhU9ipXgzPKYXfV6rtK8D2CtffnhWw",
  "key10": "5DdKnLt69BRmTBXjpNgGo7vGM5JihH5eXfX7iWQmDsLZBxp7cys9XCBwCYVV3Kd8nNau86RmhonoCdbFKrXGtkts",
  "key11": "5Yz7j72Vhr6KHLfX8nrQAcQmR18gC1DmavFCLxqXRXpSG8Bh6No1naHUJYxECRxMqg2gvGCMiMcWqu8z1GKYiRvt",
  "key12": "2eKTGcsp33THrdeCqMY4BFKRhC1rd3uqGhavKHuQM5f5uAbaBxLhEj4wGwuMEsx9bb2aFzGaDBQMbWa7YaE3T6US",
  "key13": "5eXtSjjpoyCmAWj6K6GkjTy5gsqJPr3gpNsAH5h1P2FeJkh1z7nAgjn3NXcno6VBoLKfmmL5t3XGNniZeZob2aRK",
  "key14": "4eSwp8tE9doxw63iRLd5EqPEt13Ed2qrJ5KyqVaL7XjT6hiJwB1jvrrXz92nHKLHzuxP7pUyypPG2wjNCJjm2ifc",
  "key15": "3TWPA5Bxra4XnQHWr1CTk8BkJVZh1iqa44DZoCWCU2iEwc63LPgymtsy2iC74rKPkbXS8AkF7XqPXCqb9sHJqVKR",
  "key16": "4jxp9D2beBqbkGdUhcnULStSskGhRXC5t9wQHTbbvTJkiWG7ngbG2Xh4z9QB62br51TEMUFy8m85YmMLDARgLHyA",
  "key17": "5XhLEe6LWoNkLWuCb9p85qJooDpHj13ZhbBPGBZviP8hGAJuYEmoA13LHpnasm14PPiAQaWre237PkjViXkz6we3",
  "key18": "5sN6xd8pdEwx6iueArgQjthfmAikYEmXyrDJtQ3WPkSJmigTYYrs4KXxtRUedG2BbbaiziihifiZEuMXR7fhN18A",
  "key19": "3p2VxUXpHZphoTGv2UYz6xrQZscRGhiRjqWyvJruNJiTGmU2KJY5pi68dnTT1aUjqLY4VxJFUsfmf89XezV2FaUe",
  "key20": "5BfrzudX6gDqu9JQ6j2XKQ88ukjUqbeNjcMAqmBNebQ5GR38jscCbcG9ufvkQxDghwtMDoPJZXoP3spD2MZ9fpKw",
  "key21": "5HhVgcsQJwRHiLybFBLGoYnhEMy6YVM1yLuYiesd1VztEX8YABBDXgktQL7aqS1BTfKzcFgxvKDvwPG1zJDRUiof",
  "key22": "5vRpfRWq6r8i787PAyX9eySp98EJgnbuxZb7L5qkffv4yamU2xQc68cBXNsgf1eZnwdSPAEZrpNfRZg1ujat1vZq",
  "key23": "2NBsZoCJFSsPpRykGZfTfu78JrzeScpuUCBLPr8NFyegymWobMnshSpu6AAZYCszT3Ndvj3eZPnnUH56rX6WiEEC",
  "key24": "4bWohWxpoMJJECndSXQbWwA58vBU9qy6J2CqUUmp7ze2MSbK1EH2c93GSsXPiUBtofcbKVDKwuq73ekiGpXrjypR",
  "key25": "3iAGpYuTPrSRM4ZGMT1XM4aQWS7T51YqdYfYoZJ7qC4EKMqSeQCTcuXisJK72CAoMpPGXtT4zVZqmiEEYt8enTrM",
  "key26": "3qLryfsY593LsgXazxmxFLRF4zgHbea4moAjwtb1tp9U4nETSzyBBACoBePn9MbQJp94TkPk8iYLBLFaxiZz7chx",
  "key27": "5Ynkcw4K5ut9GHoAL264WAkyFMUK3CpQ9pQLAvpjdCCRNtQnp1jrUHjS7sDLJG4EZhDbaPBeZWtaY1fCfGPiqPCC",
  "key28": "364voH5Jy2kgtjmYhD525jBxwhy2doAhF7EQLZHvGCz5f1yk8y3eoa7ZByTWX52CuntLpkSZRGh3Wtv2MqfxZT2x"
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
