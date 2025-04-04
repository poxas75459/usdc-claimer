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
    "4K21Dj8dd9e8xyueWz9Sfn85QVVoA5enaZ8crgvUp38sFiBcFv4uL4CmULSF7LW3VhTyTt5gtZkJZ6WPLXERcGLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q4Z9s62oCgFwP3JNX2qLfNPq4tFoEZditKzqwZ3tVnNMyhHoCVZV8ec8Q884nnmejkEyCMnhHK723qnW6bdgDXx",
  "key1": "5JqrMWF6WBzCPpMKnou2g4F61B2E4ivETsnU6NBZMrJohFETh3wdES7pB5oj13Lj5jkAVqKcfNgQe2odyqpLXFdL",
  "key2": "5ksmWUbmQxsNo7mqYBq22vdGgn8fkzuTef3CBY9Zer1k2qti22XgoYuELeurXrQdYRuEJbU5fHnJjQW9cU5NguvR",
  "key3": "315AL6ajjhezw1TnfPc87gndm5JYsJoK4gTLRmpCkMWdcSZPLfSCptrqoo1BTaQGBG82gtbZMa6B8GPG4X7NhvGm",
  "key4": "mPHW6SWD3A2XunaNFQQdy99mh9fhALjw1xnULMP4oUQ2T5mprZCRun3DS4Cz6sB2AADF9eU6SqGUoC6EGdZScFd",
  "key5": "smMbXtZQJyQmXNpfVwpyH1RJvjZzDGJx4N6Q3SSgfUEKrHCHUwdBeChyqSnuamcMeiTEVk3WN7cAdH7eqJpHRkn",
  "key6": "58EWafgZ3fMdEDPwuwRyVF273se3zjTHS1UHLhQvBUUFsAdc4TbFW1FQ6h2xndHyWGYxqmLjteigA3kGVrANUoxC",
  "key7": "3Q3RXMStgW5Yj67yvSoiDtDhybLNK9R7kzUnd5T7iXgDLSKXPsnnatnrJXeJJXHBzojY4kfputi1p42p7YvLdL1F",
  "key8": "AYEdAXNTZKUEEvTyS9S9mTG4AiTQBwPNzYpNFbQyuDLcH1TseiFjrnWVBVuMmjdbdPhuAv4BCNsCQZTbkk6KATZ",
  "key9": "54RXUho5wNc3Uamywy1tTodcsuvkHLcbh55oyFEQAgYzGBRtSujUvgktKDsbX1qRbXAXstdEbiGMuJKeF5kEicpw",
  "key10": "23SooV2qBkKTSwucdTHhiTXDL2n5RAtWueSaBFXK5VtB1QZv7dpAv9iZdKmWTMqw8bv9NouaTfe7PYxrHjNHwZfv",
  "key11": "CDxqK67d6rmKacmBucvHH4swUo2Ks7kZtgqwsAGrnzmALfztnQnujArj7Xj1dJAsL5QApW24x3bempoK2Af6ko9",
  "key12": "2PRzA6ooHuVJozquCz4FdEsZCPQestD2widP2HMYr3K9mPaaa65J8pZLVH7iHyJcGcPjLzvAfoAxKHzyDeZMQwXc",
  "key13": "27biVTZyzsLAikHvB7FUmbQZ2q3DtcX9ya1x1q88GZNTDUcv4ktKCt12kUbLGucwR6Xvgr3rJP7GmJANQ3VhCSV2",
  "key14": "5v8pNTXaWiDK5KNhHFeRW1DthLGEr9X4DKydPkHHGN59KN2y1QXn1BGCLDJVvhtu3fCCJS6mhzcH6wYzVx7cfBAy",
  "key15": "22V6azPhDDAfx7Rw1RG9Lafp3QXZvUQZdjySB35qZc38jZCzhEv31ABNaK9NvQS3DbPjnzfPubsJhxKsP8hb8jBV",
  "key16": "2QkVh6D597Y3BNbKR14o7irvRoMgqFCshU5MdEBZJDL3kyBYobHUc1krevYcFkLpcJpbju1pEgKGqwtzyqBV7qH5",
  "key17": "5FvpN4kfzgvb7iBgNSdqh6Th3QmfGrcJEhJEaNuctZ9ND5oQc9sL4HzM8t4czdKodd8R98ecKW4NNi6m1cq5YqYe",
  "key18": "21dk4fKcPcoSb6KC3rEe5ErU5W6ni51GrFJaexCLCGn6EZYaSwnhDmrx1ZsCbe6ESZNJUFL4RJvwa5zj4afjYQ7J",
  "key19": "2hTWbkrBMVjACARiGySZg7rKGn4JXeGTdSRFK4KXWgFUS8GAEafSJehhUfe5j13wqbihrthZBVAXmM5P8oo2ni4p",
  "key20": "62YHNhCyajmiGdVXm29PPWaGwDUTv6e1NXsRrWM2xVgzhKknntS7VGNCKumYsVTB8fCE6QoQHFGFxpNtm2tS3xKF",
  "key21": "4Y1oXZDfftF4uRwmSdENHkdCbBj9NUmWLMSSdSKhUUZiVsD9bxfTAVnXvaARxjyXMuF4oS19E1uU6NNvQD3x4Eg5",
  "key22": "2EMTLy9aCZHfZWY8qVJ73yQUnop6bap9jXLnB3pUVP6qg4kMkmNMHxtiM2zDKSioRq3bHYDxWh6kANqShBsev5ps",
  "key23": "3omJysvewsQ36h5SnqqXdRst7ovNHTAw5QcD34kH8XvERzMMprcr13YMaLpxH47PXTawwQEygtsYjEJU2Y4ZKyXJ",
  "key24": "637wCkDbniLnMjz7TVPDJLYbrcRLnSwwBgdrfAV3gYRY4vYRM7URScZ3ChPVwzWZrw7TuhpYd8RCQHuJmHxS6PTk"
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
