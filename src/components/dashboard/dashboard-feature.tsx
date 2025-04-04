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
    "5X2hroCRPToMEd3KM4Q75DfPEQzfkHuf9dTByRSUvWTEbagsB6J4qzkVrepVypkwGTgDiTuT6xGQzW6EB9py3jiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wVBoCxGB39ZfEiRmtWUfrNsUZ6aXJStZFSyBx5nmRDjgVR7vZz335zXtsZpZyT6KUYusKZzBreT7aQoZMufZgxE",
  "key1": "61q6Kgcj3MukjyTAEZ3rF8NPpuTHtXzzGpqU9CBaVXbb2vWLURFuuaR3g4d8uhefeA59LzYewMM6DHZfi9ZZ7A3t",
  "key2": "59xzuPPBLVYo8gExLJHkYj5eSeyKhPZ3vkUC5UTYpTtDYLZ7oGYqqbqqghvW4YftFuHQCXJAfV6Gj1Z6cKXceBsc",
  "key3": "5tvq7DQF2jnqptD1Bbi6GK8R8wBpPnEVvZYWcxj6DYKdvWavvK6zWWm9D55xza1njZPcAQ6WaPm2g8c7XFZuVKuS",
  "key4": "29iSngmqzNT5G9YTYy1XMs9xNmwGPHHQyDwakLM9pZvvkwbyjtdAs7ndSKF6xjqc5iu1Uv9uf4BNRrUjpSmFaMxS",
  "key5": "3o2sbezfE1Vc56Y4XYN561S7NPKxXmv3gRi9dbPjmnyfbnYhLJrNQjzZe7wUrDAiKbGHuMtfUEz3b93GCJ275SJS",
  "key6": "5TA75jxPLBfPpHqtEbSnjxf1wPSNUmqSxxgVsrUfC339uG79qA976mVbjU8RR4PWkynYRJvwMm87SfbedkkEdgkv",
  "key7": "4bqc8emjUvp6ojki5C8U1SxMLMYGB6MWMGE3AiAL6hA8JQgeEaPaik1y1uzM5rsjfoH4oZaKcmqMKRv9M6AexsdL",
  "key8": "372vbsCgBN4WWaoHy1Focty9J3eAeVip11JTVPL1PRnGh6Aw3DSZDnv54SwmvHY6udUK9Lgv6vZfVtpTjtGy1SK5",
  "key9": "vCaPySqrEHMBmnpaW1Wu9P6y1EFZ4ZBGhzKob5UZGSP6F9TmGTwtkwh6BMmZL4ogQEAcXV9VaYwh1K9AZcVRSfX",
  "key10": "4qSLvNxKDuPBVovHaHwMtK5PMbardUcvf5k8iU7E7saecsRPSbR4XXzwV274rE5vAs25DeHC8K3rJM5E1fDumZUS",
  "key11": "4xx1ZGm2eFNWoQzdCMmN7rRPZVk9t1JJAj6C6QGqkANHEAptR4gZpZ8rzJ6FyXxQKDQCwqGfDyq9FdEHWv5CeHxZ",
  "key12": "4t1C6PdRMZyymCdV44QST3JnSwVKXXA93PoLhgYfUGBmynoihiMiqQgmNjnZzddeBDkHn3CokFH7pmjDxo5wqo7B",
  "key13": "4wyFUn85Ka6diQTwDnRJrbY2uC5QpiJN5sWJZ468vLcR3mF5W1GnaXpX3fbp1d59KXhMMW8GnX9AZJFMMePaYJ56",
  "key14": "5u3KhiQZp5eXE8xfUE9u9gpoXq6BXpHgQXiWPSwfEErNgEQgbc6p8RDD4XRoTLaiMDuFSULuojk21GFEp1HyB9Gu",
  "key15": "2cX8S8vmeKCBjaxj8tvoNAMeNqP8Sshs14A2WZhjySoxMJxkE49ZZyz2CTVeudqTueDMDTGC5Ns6EXKHRzF45K8",
  "key16": "FHJSR6FiU7EYQe5HW4HhTFsbBoojhwyd8SCbFMnyYxH3ctXPVd5UYmJVd7gqV1JriHUHztycZxRi61kkz96aZtV",
  "key17": "3cCCJYL94p1gtaiMmzGY2t6NUkFs5eW61RMcgcQx3ciBu7Uzz2yHdVmiJEnKNdqdEuo8zJKaxoSJu6E7EXwqznbR",
  "key18": "73ps38fwpixbosv4rz8AXjovAMv8wAgPemaejfyLpN7UDKcdon78UcGdtoNdC5VR5Yi8i76yDGJ7WteEyAWt9fy",
  "key19": "gvg5psuJaLwRDgVfwzhwKoUe7XEe2eqyFgdb5LHt4zc5tLQzTHNzsAHR62AYtfYQGLGeH1dMf6KgaW3HPkEmeYd",
  "key20": "39C84HVew2qUtjwj7Jrt8mbUv8Xa4wk3hC85w4d4d3yUTVK7KXq295mgn6uQrmEViLxLpMD9kdKHBDgS9MJ3Hgx5",
  "key21": "DXgsjGGmsNMoC6CAbVXyttwxX3MjCWa1t82zoyhj3jRxAijGApxVuq6qa4AviLMDbQYmXTdnhtvVPZGBmPdGpbr",
  "key22": "3CVL8ssucJyBHWj3dPgmYQgaKbueR2EofuYzExNaJHZngy9osbWTrr9SHbhzSdquhXAYqd1gzxTiLaa8pzuT7uo1",
  "key23": "hV62apkpcBny68W7NoEKghsxrk6hC7B2HocDC17kHWexePsHjokXJgM1fgHmG55VjdDkXwnABVMwqHbz7KsfxWS",
  "key24": "5k9QWQxvuCL6Ej29yGcbnHn5JQUCGw6NNHPBMS5n8vNstKvmUqqbZtfhzkKWs5xqhziydofVe5eTBSrheX3vJMgY",
  "key25": "4ykYhxz6kFEg3VGKszgU4i4iaSEVYp6t6KThQ19h3K8Si86peYcnZNtLs9BNBZoVAdLm8hBYaJWuz5AdF7nonSe4",
  "key26": "naa8aFrfpFVjTvPNFRmzeUzwySBmzFbh2fdscA7M9k5zjP83aqM1qJCz4tt66KXz7pGhoQo5a8U4JJxkoZgHDi3",
  "key27": "S9FuAtiiiziF3DjkGp2m3tLusrxXy24mjJHQmWNmwWZrmhANW5n12ZSWew5UP7UdugWsC8gstYogUqLZbkhDiHZ",
  "key28": "36EaVfBvFpVVNgfWRTpdFENAs69vXatZ3WdR1dupzyWRH14xewyZWBJdFL1rMgxLew2Qr59Zhwth8fKH7jXkeswN",
  "key29": "5EXyEK7YGY8z2DEsaBacXW11wTsX3ApX33obZztKnpHtLXkxxFKweJ6MBSi8FWahCn6hC4yZmTyBsb2vy3ottWwQ",
  "key30": "3DyLCJAbKSN7bvSJ5KTDjCDisfdhXdm6xNvQSq2xaWcqj9hyTFJSbEMPLAz3vAF3xA5kZbZyQFfu2QCuRyc16QcT",
  "key31": "Rubr4a8vaX9q28p8pNnKzLHkz1Lyy9eFWqxvq4swbXgyRkW1eirM3BsE6EcgDMQjZ4ExGUhXMCwu1Wrmz2KhPZP",
  "key32": "5hzSE12TsFnTwGeszL96tQ62fvdGKTC26EFQtvz94cwfRe97NQdtnZB8XV5woe9r9YT5mJf1unykhvaNm5amShBA"
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
