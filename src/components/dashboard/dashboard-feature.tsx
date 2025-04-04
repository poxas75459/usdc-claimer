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
    "5nz36josf9YvgptZnhQEEA2C9gURnoqEp2pXJkeEuP3JDyV4ZZrwWweXnAysBqJ4zphTuSKhG5BwqeqLc7MxX6cY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zza6G5Axsz9AV4v5wkuoyEccMom59zsEFeDUoCHB9NVABno3JKgRz6v4gbNwXReo8vXUoVbqig2S4xR5o1veBtb",
  "key1": "3AzRf3fLfqsfzESsiQKycrLXbxdumThTZCu1CHBLAyxaBXQ7xbwb8rH6mwVkRhNrsRQfUxiFpgTvKAtRRkoniMVa",
  "key2": "35FhdLqkd6zw3dXCJq5RBmvuJYNUkDbrXZwGieXdFVwvYUyhFAupcrHtGkWq1wj8civVfAbZJjp5AmaWVSfbwu7a",
  "key3": "bwGGxgbPo1uRoRfCdQJbKACvtnDVseMgWocH4D5toc2hbDEv4F3y8DNKCda9X6JhAmqmBHMLZU9PCK9vk2VgiMc",
  "key4": "4mdWQ82fqdSSAP2prwiFcwu4FQS8TUe5bVze4swEYBuHgayXM5GJhL12s9Ri7Wr9QvA38ZPA8WVhvtvMnFUyAtm7",
  "key5": "2u89kfAGEJDe4yEydcrptXU1XeK7kzcsaXQWdF5dcir7Hn2YM3Xy9HswwQ5yETazEpNYyTQAj6CSB4pWdyxgeFmp",
  "key6": "53wRncHtoZM1P5Ry2WzK8sKg3mKKbmDxoHxKBbAEQrHapFEBB6K3Cago44jmtU9FZXH8rDc9pSPbqZvJtcDo5m1U",
  "key7": "2zCcCQhqE2aNsZXKtKtp5gKE8VNhGtoRxGxGjxdUUDGTNcx5dpccfsGp15ZqT9Lb4XGMVyjaXqbU6wJP1z8gfKPc",
  "key8": "4kgUQVByD2J5MRxaxSTzovUhU9c9CNXXUdpcfdvF38mgKDbVVoaq5zHnW9AmafKKveALLLHKoLbKLG34E3HXwUeU",
  "key9": "53JNq3MCnwJCFgst18yexbq81BYV5Do5V3TMgAfJJe3Wb5FRJqCEjoUVAnacoSXYAURuPvNKbr2Q7tmym2Z4ndHW",
  "key10": "Yx5K17wrjnE92GcvPPHL4xKMRdWDmbffhDFefimAG3Hfo4DXk4hDf5NGRYBMLUb5pnEtyXN2P4JRhHdZrQ7RiiN",
  "key11": "5m2td1PrFrbmt5uFUoA3oPwRES2yMHURLHvT6JCQtAWNdQrbLCtYx6eQZJbztKCRA2iQf3RMUxLP5G88jcM2a7b3",
  "key12": "5pPuX7P61UyUCX6HgSV95c5KZJzxcyxkAzdQ4sYpTfZ9MrtnNTvbQrthfM8DPCrH5GDjDW4oL7qTQpANbMpndTYH",
  "key13": "4AGRwoN9L8Hh146V4dziqjCykxBKs1fb4GyRGrfLxUNkZFtTmnRcYeBkCqNUSZMrkn8cSgTAouauTbMs6zAFp3ym",
  "key14": "3HuduRn2Jf7AUGLPFKjMFiQ2KXLdwEcSeRyQKuHJdqEU84wD7L3yCATc5rM15UyVctQKEAfsXw9pqLYq75pSmwC",
  "key15": "2xy9bwoBADTbjVMXXXcosS9ibdfGHcjsnu2itahRzm4Q17oBiaUXt3VKimYWDRYJ2Gdm3M1YwYYtbr5fj192uDZE",
  "key16": "KyqcKiEKFmc5tomepWnf9KaW9uBDbGJBNDKVFL3FqiH21wcPqjztqTCs6Z5x1HfEjikUwS3QqxgDtucMmXo6Az6",
  "key17": "xmZjxPWrgc4g4zpnRcFZ5MP6AVbgtBJTmXexz3ZPxJEsKz5n85KKbc3XwzZEiZtRcVYAfo52LZMWtxhX4BphSo3",
  "key18": "1WUyveP3EqkvVTPWxWwRf2Jauym9g4sbXimgWsRqH4xGhLN9GB4GBsHcLNuECZvBMnrWF8G8HtepW1qKbzQ7jyX",
  "key19": "4n6c7wqYEXndShwa9ofyh1qvWwF3qsWuupkUCbVY5WDfmWh5iYyCpci98KWQxCyg6ty9CHo5kJuECAQrxAqN3e5M",
  "key20": "3QTmaKZFEe9xPYHVtf1jnmq3aSohGUHTbJSUtWVw93tkxNj6w6W45aSA1Pb1DZaNHcSk3Mm6p8WAVy4KWdZiQXs3",
  "key21": "2fy1yFb6wA4exsdPVkBtsei8oaMqoRS9erG4ApWUk1A4rBbHauNJqrAkypQqMFobqavzLMr74UpjMSRjZtR4e6LE",
  "key22": "hmGFj8dRRmdxZDWr6UpKTBez32y7iSkWAwNXVXtkZLjcctBs6nbWm6hpUq7gfsn9bfXNxQo5hjibkz5n7xc9aW6",
  "key23": "otsn1dDpTWgCUkhuiKjpwJrirPDwcBG5ahX9tretBfFCDQgSgETry9vjfL4Kc1b9k3a5fcHZJedbCqhh7abREPN",
  "key24": "3WN29ugRKSJufip86hR37rA3kjEpWTZM9MCs8Xxjfs6z36EtntoTTfhZVqD6z9U2Vr5N282oNYM7SQAKXdMKzCGs"
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
