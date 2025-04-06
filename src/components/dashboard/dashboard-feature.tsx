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
    "5XAuUqBkkuhkSkW3sbCWPpjc6LzMBExzjXuU3dMqycD7Gvt3LnD1GQANFr6ArEUoyqv7wS7zK37HUVPVGRczHQVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D1qyHpjNiMffJhxhErsa1C1etVxtDhdbUEXodeJ46gvxwKG7uz4ReQQ9x9Cm8a83XZzqKaoyDoThpWBwjgGj6a2",
  "key1": "3FBfw9AjzCtUbPqdPPXCxFiTPndAC2K8w1voV9Vvh2hYVAuTSQVRKYJ6RjddihKXT7yD3RYY1SdRqaQijfRyXvBe",
  "key2": "4N817Tj3AJKHguTB5jVAXGEVRTwsaPk3bqUxZokVWtCNcZMk9zni9GrVUNBJZBKTwp1PVpRX6yW6zZm5vaU1GT23",
  "key3": "EiiXcDo7zjb71yrwq2BHKaexPNU5Dkc6gQK5nFnwmgPznhqucoQU9YA99cCqiU7GDtBJ8NxwPzkyRPnR831sUXL",
  "key4": "4tvDAHLqFYmYTB4ViGWAAgLg8TJTZXvbq4Foqmmb5aheTUyi7M9t6uC7JtALW4h3U282uotBeLxnFmTSdgCRTME9",
  "key5": "3btuhhAjPRDVx9A9pCPr2pzhGmSnJu22qCqVX6TAm23tHMwL7Cm9zyxZyanuLiSd1bZupaariagD7jDX5hX4csEz",
  "key6": "5kcsV6TP3EPwxWNcCKHC7aQp2deBfqGRk9Ey9MZFtyowkLt3svXiFJmhFSpw648gYS61AJK1a9iYrd1nqLFdCkj7",
  "key7": "3389yA6NZCMSxEfNDvLSVR17XcbzLeY4t6ejWqSj9tP3WJ3MB3iKt6u79AJv8hVgaqDkmcDuGZafZyYknHmYHxnL",
  "key8": "2VYkYdCTgrE9Avnrj9FWT6fsvEhmmVdisNWzSJwMNdAmzGRwXZzXCC3cUVKjLPcapLuSWhhJZfvreK5FvnEjY59x",
  "key9": "3aoA4Lj9cUiyHA7fMLwx2CzMFwkE6mmEoXHMhmkS4Yx2nG99FRBV5vYyUoLYVk7RwUd66tpoeH7WrjSeMVMoP8qd",
  "key10": "1h14rNbCbRdJ2URetaDsHDZbqAwgG6TkETFtrLLWTeBG5c6jUkkdu1Cuu64dvjm55m1UohrCn4WgD4xjri7RGQj",
  "key11": "27qqt1WbgbjHRTr8KpDeeQVk9Tj4BvaBN21PPZZ24WieNVogCW4md2DCC6zQDXcCvTVspYi1Zeaim3MPGjsYHwpj",
  "key12": "3LgXyxgYbwBncSXAvRbUNCocE5sm9TqYGyx4xUAw3komsi16QV4EeXXusFGtEVkoF5KAnf2ArBc9KGJaNrXyqXBT",
  "key13": "VTMcJgzikzd1MzD1q6SYsaKhPq7AtfW1GdXEQcqu6nF5hqcqbQ1CAWg4tcwCSNXZbFFDTS4H9Y7tjk6bydhZPbb",
  "key14": "3xJtPZQnVwtJnKb9i5G4JRWP6xcnmj5HKK6PDrG2iZKr3nYEFhRmei2xWUq3BFSub3hewUz3FU8Y7VecLQppcPQD",
  "key15": "67gVxy9fT4KNh6kNZBx1zEY7uNX8bZXkPLoXSxstPKjU6Vx8qLFNjaMzzLR1jJcrggxZ56GHERDFsvrdErsAMqMN",
  "key16": "3f3NzbnRR44UUMoY8Nppw7hxjh4pKSMuanmuwWMnyRcbL9cU7hXH2YwXUJMtBZyRxnqcjXvpHorRsWHXTe9Jjp8",
  "key17": "5Da8AHJz7wWJUbLeUYgiLECubFtn7MUqME2hRYTybikP6EgE4LQEWbqV9JeCdWStejgF7w8mEc6KVJ5CS8VptPGQ",
  "key18": "qmxswZaNB4CNdGEKrxNNtbrBB3KfCw3kmDUzSkeK51HGExAvvjbhA2PHCJA2V58Darn4m56y7yfqcMYs4ouUSpb",
  "key19": "3dMYR6DGwKP2n5RicXZJoAVbBxv1pj1xRGHqwWjeuqmcPf3vECzd3BbU7iKJexbksGjaSrA9xYdBoCsfwvGnYLDg",
  "key20": "AJxm9YAGjgurqDnnNhurZe7Nw7Uo5EjVR863hRXEiSfwN9fz5ePqoN66Knw3vArTexGyHPDTNsFwMNoZiA8fyTf",
  "key21": "2cKV7qQVx8jZqndqG9EJg1hwnWQmbCuj4uswJAgad3HXr5cuPH56RHQsYoRTEhbHhGHvMmdSCBaoVm9GueVxsRcF",
  "key22": "4s4KuvPiAkDJ8mwyGUuyJJxH887vigkDoSZ27CprvcPM4EMZ7f3Lbi3B8zDXMspsgmddG9XW8pR7YL499Q7M1dcg",
  "key23": "61gKUPLcSU9rMu6pzRNJxXPeqBWdEbciHiPwj5DayKd8HwMPgAvPU7kbY4LHiPaarCbYEfYfcdjjfWYDWMuHrKUb",
  "key24": "2uWPSaUjve5sYj3C1igXqPs71HjdSNo2kwwCXUCCpfiXWXTFQqy9uVtU5uYMJ6q6Gzv8EJUL2cfXi5DNMNzh8xwz",
  "key25": "2d2qJjtvFLd7tgY8hT56ZU4WSbAtra7ASvvgDVEWTqXQNNA6zxGex2J6UBbQ3YxkN73Djp3fenEkVMp5a8dcVgwt",
  "key26": "3KomwCbVHcssxN8M68NyT4WVj2GTTRCBd9UziH23Dtyogb3wULCFnuwfEcNSjHnHUq8xPSAM52P88kH84JYhBBy7",
  "key27": "BA6BKAYAi2x22mNx4hEkmCwypzebLJaviWVeWM4L5t9UDJdeiAhXKkt71oHDkxLA2ZqtLYzDkLDGZQSdffJy4dE",
  "key28": "4Czn7k4sD97RnmaijtwKSE6o4Q4ZArn5MsrMns7ivp9VRDwHdkKAq6khD9PyBLXUaTytCDipHgnSh1mZTR3PAJfe"
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
