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
    "5bmeA8ncFJJYKDuxWPZ9KfcMLwwfMBPiELCT6WV13jbJW7QFHVvXZAjvdsMkyBwxHeYKevZHjA84FzpDx9svtQgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L4NWPcq4fK6TbpvcDsmq1rhzEgjB5mzafUBWvE7DARYE1fwyVQspTjKiR3AgKhf7p9CFsnxp4ErpyczXFfrQqY6",
  "key1": "dkeBSas2nvAWhqTJH77ohErdQKw9szu2A5LdKg7UKU5HLW5aBwmG5BNTDQkvNdS6XTT6hHNKjMbykv2P8L7hbM8",
  "key2": "4uS82XLb5dcdHbyU2MrQ6cX89Bf4VmcPgjj8Qr8VKdTpm8WcDbmH2Hp3JZVu67oXvFjddi6mSn4hs7XQyMN4Pqk8",
  "key3": "2e9BQJ7jkS9jDp16BwLhdJGJqk4pUTBgK7RWivSP6DYWsxCzAJ6eZGraWj42TKHhAJhRHWMvckNz9mx2JvGWvhrN",
  "key4": "5PhAL84BHw9CXBpDPi6tVCxaNWMigKUhNy3r6RpFrfrb3b2nRN98CeHcAqXPgYrPGBehfY8wQyfUBLXCkbptg4be",
  "key5": "wsVgjGszGwr73rS3fDsPp6KDrYbR1Z2PcpzjYLZuobmhHjChMyXZ25qcc6Z9wopqkB8dKqi59XEz3c6CgjdpqcU",
  "key6": "2auUR5dsj815ZHrjrc4sVJuLEqRMeVgym5dYrktFZqyZtJm6hXc7jE3PC3LnKT1LPinyDnPvq2pLagrpPoJEei2V",
  "key7": "3ed588nyZinmJgE4ZUDsRDHdYc4T5dus5Betf54xrXPKWNBt7Xky6LCXJZsjZz4Hr57WuVmDv7knWtQrfCPkVFvT",
  "key8": "3qyjarWP2DFRSjTmcrKFaEqgezKYwBYSrdcM5J6opSHAh4qBqg7dmqAgtdZYoys5RXHo2DBkUAGdx73h1nwwLEKz",
  "key9": "g6UwGRf2sHvVtkpJTC73fAVyGtoXPyXUenUF46w1HBYPvXuTaLY8RXUbpRGQHzGctknozDanbehC2aPApcCJhRf",
  "key10": "3cLg8yVv3tKNpqzUvw9QWUVVdWXXKkG4f5DTUJQVWUbAP8f1xbpRzYBaXRiNedqmGa5nX1hg3zVs7koHaM3CEJRe",
  "key11": "5DDPP6hKgqxmgLvEhV6vBFZE7nPowYXtPVzjmfUqmPkHCsibz8fGh1jQ6MKVx9zWFN5jcQZ6AvuD5VznLWF9KSnA",
  "key12": "3MMJWYa893bhowpqAEwoMNw3rGy2Tscjksdy2AVjAgtUY91ATPZv8th8hh8TxJNRZ1TTGsRUEL6pJJvLHUiyZySw",
  "key13": "3nPdpcYxJ5i2qoPTF23SDTubLHGCuJNKbLPbmZP6Txg86eUGXBUcK2VvSzgctvtSuUsKrrzLy8Jnd2yx8mFkQZam",
  "key14": "4KiAtat8avFUAMvuBkpbuMvSNFYp69hiadyNJQ3Wkvfe3oLieg2a41Yptff2TznYAqbYhEkfKSFF1KuULDtoGjjj",
  "key15": "Q3otQGVGKN6wcnuD9sRDbtFrRqD7n9BH7mvB3cjpCYx9MDLeL71m9mqqetdPDVG2W963eZKgCe5wd2GrLx5iXAj",
  "key16": "5dJtiWvP5Cy2DPgL6wNRqiL3WX3dvyepvJhqvbKroCVkuSpRB7dEXVn7kLLJLQBTddd8rq3HagYG9vhEWK49R2dd",
  "key17": "4rNgcYr6WkeE6LAby5e9MLRf4MgvZt4d9XSfJxwCHnzqMmqhyctKZRm42Ufy3B4vgLL5oT9c274BpZM3K7oE72pg",
  "key18": "2Mvu3VKRdqiVzVSE1hRciM7g3UTX1GZZ5JPtcJqbPXCV4wg7HsiGRQa5uhmycHwCwBjhRtK9YRwfRvsuDSB13QhR",
  "key19": "5jHJgwQxj1ERwoE4rK2n2bdmGr3GQifvcWmd5BL2m4egerTbhedV49rHLrmobeX6j7UyCSWfV9DdTJRUSyV3kU8d",
  "key20": "3hXxc7yjSw97WEbvGJKfdCtvZUghp9LyMF434FfAmovuBuYAP8uL5AXpVP5w9PEUwA9yFSaWw4Ng9N3XZ3bmGmUV",
  "key21": "3MeAaFJafNKg6qaHRdBY9yi1xGP3YpBAoQ8QtgfrmMWir1Xnye4KqSw1FfGBh672vvXTo9wrJDu6QipmtroW9UdT",
  "key22": "4U3iT1jrvkjzw6jsiUM7oNKU4mnQrg3TpQbZhauS9ivirPH8XgcEX1PJsPv6g3gGh3oiM2F1oFBAGEpFbzxUmmnG",
  "key23": "5MFki8JgSd57FAMQK7BW1a1ZRhJBBF5i96SsTSXofCq6jSWEntUFRJA9LrxqPY5sVZTFEE6BGDcn2Kq4wyCbodGj",
  "key24": "2PrwqXMzsGdSPuHNzb7PePnMCtw9R6D8hArEQ6ykTjFVZcLfF6wQJRU6fiXSaBRgqDKyiWiXYcSKQycxFztHfUAS",
  "key25": "33UVqcbhZC3zXX1xmvWqSsmLFwERBeyNL1AvsB98QfwhSgadfdNBRGWZV3gzbXKC7myNYWMHRLVJcSWRaHMLTQb3",
  "key26": "4nPjdKnB93i4SSivL9a82cSBe9C145eBia5tQVjPS2F6ZTLu5uNaZ2GJgNXBffrFBy7yUg9bQVzVBGVFgjcnaXt6"
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
