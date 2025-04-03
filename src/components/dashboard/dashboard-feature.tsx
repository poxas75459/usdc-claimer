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
    "J1iH4Gy4RjbucXMMaSjeWXtdmZFYzHKT6CEeVPudpDqM6HEnu1RqB1vjjxjm5grPMsNnfTFAqARqBTCmLKAvDu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fUuYyKgwRcBThQxAWuoaUMcTN2PjyGcULWTrE3YRMt5ywbxMr7MiQZC6atyFZXvUxvcjWARkRPhLZ36qamcu13t",
  "key1": "q3ghsVvu95W4AG6ntq23FNVuqmHxkyMeWCuTaRnTkJubJA6vrdsJYk6JqfyFy6RazgBq5U3wJ4roR2nMPnDqV1U",
  "key2": "5DRmutpeHH4jawsFu6u3uctrYdJerGEKT5ouRuk4Bm1VDh5h5QQsPt2FgaGZFGDxHTBekuegpCseuej7rBJ1Qt48",
  "key3": "XBTM3nN93cM4f6ruLvhq33gJo6S7n4esoPY2WK61CqDryYnhzV9jWPcUitzkF3SyLCgaN47rDnm6WKBugL6sA6y",
  "key4": "5xGq5HLC4jTES9xtXiJ1ge7VvxUQ3pyAaRKP39duTP49xLGU8oiWK3rU6Q4jTNwyj4ay5377VGS6g8MjhCqimDaB",
  "key5": "3UXJFXYCmcWHtM4mVMdh7Xnf158vmpGDhggmmDBWNKSqqPNgqvTptNj9YsFXvzPzxrxu64x51Zm6p4u2kzF76wW4",
  "key6": "3CWTj8No3ACCnj3Fmgdkii8a4JbTzD72XZAkJyA1EX2LRKhELePs99kvmjpZmUz1i8ULsy9rca5JWCFcEJ8CMCKB",
  "key7": "5fFCbZEXeHAuG6fP8sQ4tAfvxGqHemJzBcgu4RTKuEBEJvfZs1aMjoGoAMtQ1vpAYecwN5QZmvf25XiK34NvSeCF",
  "key8": "3cZFMTNG7izr4btGVMpqp9tQpvNUoYq4REvoPyWdUuVVmYZehLBJswB1vm4NjUXcqr85WRdMDmi96Ej8LgbRAcEp",
  "key9": "2fvQyeREx4UMkVLhBaLHdoYs9HLT6EeC84o8mnoEWu2X15PefKynyhWAvdSkC7qQzwcfZF34FPTwBg4TZnpccavA",
  "key10": "4K5TnjBVXXwRr69JAuC17uTeezKvkPXUXiBKTKULHivFWQpbajAZtnQ4WSEHQdTy1zJ4ZRYFXK6HDnZKH6FP9PgH",
  "key11": "4RZqp12Q1nEu4uQt4yuGUjGC4xr38tJmYPhWrfk81nPZtusFDXwJu1CYvDRrXe4uCUyhocHN8BU6ZbmCfLiFmtfm",
  "key12": "5coGeSNBZBBwCU59QH5oTphF2PDzk5o1jUx6v7JgvU7q2KAepstYgKxdBWS5eM9Q7MBJRdXFqE7gpERAUmxgPRHb",
  "key13": "52miCwifsbe6BNwQQDSfRkkDVQ2JEGNnyMcWFmNwmHboJeveskrTNz4aAbjecK5PxpyCNmQC5p7ZUKyzpZafaxTd",
  "key14": "5ReDQmYcbr8uBFjsMHFx35wcVNqh99X4s98WD9bh22fm7zCrWFL6qyGjXT5VQh8F86anQstA6n4JRfKhuqNpWcp1",
  "key15": "3zo47ZBqDqV9RGpRRYbeLCVuyna39SjanWVmCrBbCrS4LMzHnK4ks8pc5u7kRe3GqCMcyC8vpvrBUZaWQNK4Kyxn",
  "key16": "31L4VctGoxMETo18oQdfE93JLCwMhsJ22MFhK7sjceArTK1c6eKeHNpzsULPEfiA8nYDtw8D6iHoM5UwLFwJWz44",
  "key17": "4gNwBwaC1YJwpd8kJQBjbRvj6KSgxiz8UAueYY3GivvZwCVTWbYGBpcSszGBtPd4ud1SCQ2qvsrxxjRL1a2AwPhx",
  "key18": "23LAtEy1KKRfFhEEbSYWEBsuaQRQqtM4wUrhgiYPi58mUpQ4MkSrCqHZsv4E4h2MhC8BE5s5QpVhzJDXkP7xcg4h",
  "key19": "s54iQqMf1FVoTbczjTu6XRzPHSuWEsLbHSEu32idFRNcq4NvN3K4p6aoXn2Mvhh5s1uLrSZrH9Viu3xjcif9Dxw",
  "key20": "B4XkS9uZLDbA7HqegHZCDPUKriayJPAFQ1ibejCBYf1z1X5LDzd9xDJxEaGKU2NZehzY9E5KFzfCPFMKTHMeaU7",
  "key21": "2uuktwyB4HJdJFZ1oebbXmC1LKScLLVNjKP5G4U1ZLShYQs3V8ZsBF5ryrbaKg1B376udxW1n8JGdbCBnqVdBvrS",
  "key22": "2KddNFHYCtUU1v4NWCtoJkor9o7PziNdAUbQwTQtuqdxJsd2fcBXxAhZ5dGY3X8L3HWC4KMaHyp6CXwMstcEXwea",
  "key23": "3YAhk5YbJHRvnG6QmrKcuLbheEtcfNhXZZS2vqRjeKUKReYB73np9usznXDmWy1ZUtqAxmJj3trFJeYNskDw6etq",
  "key24": "2sWzGu5j3Mvj1SSUgBBbftjCLyH1o7zXCYbJpbd6scbc1wz2UEC8NC53UiG7ZUomduY61yYgDuMFPv9iUwYqZQzS",
  "key25": "34ZPExXntdPp4Vtaoqz4geM2avYx8cGcPbH8kLDMzoektQ4yRZGrWmbxxcHtXYCqsKC2KfbqHR4KJTLBPpdfiN8T",
  "key26": "SEWVKcxuPXUogWnjsSX4eUKMXnTtyEAKN9FcC4KgdNos8BJ5bg8wPcxpzFvQgU2bXGYvYwJAtbz1tqHnogzz3LR",
  "key27": "wWgJCCtC8Q8s3HPRyPDsh94FC8DJALszPkW2JjguTZqtBQQtke6of3ZVRDJCCCeLzxVHszm5opeSXZPBDwoQ6kT",
  "key28": "2gwKvBL85Po6MscZHrLDTjotLQBwaSom5wKAerXA1NtAbtS8nPgGuyFbgrMeVsfs3juT765wXRShJJB8EiCcujo6",
  "key29": "HNLSRQj4qpVHXnVqFi2uur612g9dGU24f45HnfnP5fV8zGtzZpNckajbQ8yxQWPn9fquLf4tw7Q78AtvBj7vHLu",
  "key30": "4q6zZexa74xoqqthuKu8MqyiARhWdPrPcepwmbvGRkyrLxePuH5zR2oth2itd7R5vG8KZRUjyewQErGdRpz1WVvf",
  "key31": "2bifuZAtiADWcsqqmJsFtBiUeNw4NyM4SQEP4bfAnuBwC51r8sKCZre9qwhPXosDQGWNHgMGJm9wnk8oxh5gHqUm"
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
