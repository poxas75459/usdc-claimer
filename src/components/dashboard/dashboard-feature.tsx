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
    "48FT4WfKBdhSBvaTxbJyJsfVMqaQAGmB6LmA46zBTCtG1gzJP14mCLnrEXBRR9taxKiPggG74XM27Qg1mtVzQU7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tsLc8st93gNKShWTZ3iPKC6LJwpHnRgQJR4cz8qwXYoND9nFsJ96d1HDwKukcjvDLkGj1GfB6Jbptgf2Ft3FH4z",
  "key1": "4m7LvCyqzwafoj7PHL4VNQujJwG2e7mh7J47K2pxVstY29kD13qMPakudxBeA1iiLTfcuc3irgvxhowfDvoN1j5j",
  "key2": "4FZoQLNd7VdRfV3E356dQeAbnTRbFda9zvZMRfHQo6PyyCytF5cN2TaCqfB68eK9dqRRFZbKwoSRdyEa1wG974nM",
  "key3": "x3mV5inYtPimUz8ipioYP8rYnfczyVkBdv6Vkpq6JbsFaxBMF87kpSAV3mbb41g3M8JwzihfPJiteu4CRukeeqD",
  "key4": "5bHV8KSxsatcUf4rDs2YjDpSfBnmYSuj8f5uCPeszRUkZGeQDdePBk1pqnYv81BkthefgDJcFSsvrsPromiBKo3j",
  "key5": "65jTT35WC3zqf5tW1dEX3Vm574jr4HtZg835bKRWLgN765kzt2pJ1FMVSxr7CP3fa5Gs9gatNjQ5ia1zujX1VvNR",
  "key6": "4grXYHz93CuqSqrqN3sAREVVQLbLNnTJxMVRB1B6ETUjWKXnM1XaEhL3NYCMVaazGkZk4q4gNesMwByoPEiXJY1z",
  "key7": "4mc62G9oqWXzjd3KtdzrqfUr1fP626sH8jzfTMkNrD2KWQYbUw4KUoLy7XR5rCAuyaWp9mzKqTqqc5fLZ6WPvDuJ",
  "key8": "5JSjLuBowYYA2FQ2ceYpYmp2p4veMe3qoqPXJKSkmpkBjAv2vbkNb2iR5HBeyKJs6FtcrqUs3dQ7YQ5JWRhctTgD",
  "key9": "2RYXXAmTBwpzGgKX1oMbt16gyTSutDgnprrbaWLZqmqjFL7UkkzRX5Sr21fCeGEYDPSyFwEgDXib1rmMfx58eES5",
  "key10": "4Zpoe3paSmSKr6EaE4JxiCXgGZX4Pthso9EVC9ckecmyHYYKhMcCFRLmLrjcKh5C712H8uuajbeo5QWSfdB9WtE6",
  "key11": "2xQd89C8UubMJCYMsBgSw4VtLZVnDfm6tUyvEGzEbfD42HndbPHahvwvVBq4YNsFeCs6PT3FLhUyVMjRj1WFLeBG",
  "key12": "4C33MY7d6xaHXWuvZnNyQuesjtVSevS7hJzLmsysSw4jyUV9DLTJazTWCW9QgJEDNVKZoM9bjY34nwzxqXALA5JG",
  "key13": "5n5f2bBjr4tHV1F8WiYvTf83cnnV36CJhKLXnGDEgdV3D5q9zJ5daR1qHgCS55JLcaLTCR8PTbfdjXKewYkyinZw",
  "key14": "3MHyU6B5S4VwMvUXJf5Ry2HtKknQxcA2FEecJpcLC2bPhBFES5dmUszyd39onj3kfR6GydKByK9u5BVJupmJuHAN",
  "key15": "56DrQ8Z6Px2U2KdHHdRF1AZS2RQDRgTd1vHxS6v3xNMY9DvPZbzfPKveGHMYhdHtWzdDGRo5vGXe8ZCwNr5SL17C",
  "key16": "NPUYWVGct4eQo6LcnagWcZCvz5uJFqYuWRe8k5kEzNEszSVuhiAL92WJZ1egGjmSKmfYW3715ZE3mCbkyHSfCTJ",
  "key17": "5giwHpU18chzumVqjMDa9qHjUmDYc7JHMHkqeYxMj4yeP1nGNgEcnuppRQwhsdAtqsMuKu53kgopPT6uDzK88Qoi",
  "key18": "63sYDLHD6cHALg4fNb5o9DBbAyGP5ZvG1qGwJJzmr1NwwP1htgbukU2uqpZuuWh4QjMqqgcDfiVsxk5k6TugMSwr",
  "key19": "3nfCctdppzGY9F6dwctPTGkEahKXygKibpADwuaKKBigSDeNonm4QwduGye5dTWhFd6PiVLEJuWoBCewmAcT9XXr",
  "key20": "29Wnk7BRSa39dDaDuvGgnFafRmQ8sMWq4DUYLT6Jy97UedACjhorKym87tDi2L5fh6R48KKP4Y87JZ2dbtebVt4t",
  "key21": "57XY54EXK1up263CHHjTbCXDpUwtGYckhBoLBh4iPP3oe2SKmtfddnNnz4i2gKX1ZDFwEcvU8Rbr4mf9KDNYb5eW",
  "key22": "2PmBBLUe2JAAZWEGwwr812r4TcDunmY3j5HeKQjxGg4S2NT8VQjRzVPXenVi9BCh3gH2gpRvwLieTzoL6Y9ngAu6",
  "key23": "4zSv2YDfvGm9odQkeDx3SZVR1pxfyQJyQ4fBu5VLq5kpS7yGTY4hFVyTopbMFvDMBa6Ssjw3K9pj43XeZGvBhRr4",
  "key24": "328VtN7yBz5jgCP4hFdESiNUCD5gM3ZWTfA78GzRcZgsGuwB6SggKE2mhmdqZLzNzrRfwzMTqeaJvKqBFuKy7wq1",
  "key25": "4XiRfUA95kQjHapTKrmUYrc5sNhN1LkzmyBzzZrCwmvPK6QhKEyNp79N3mqv3v5HVmtofuhYZaeJ2T6rBCPNCN9M",
  "key26": "4T8iwAEwRLX4a2aYXoypFT3KeDWAaMDeeXkn3iXraQycJ1hzW8mCrsL8vi2rkACJ2raNEEr34noR9ZBhqzsdoJC8",
  "key27": "4meztTsA8buUbWRUirx4dU5XLp3TEDSaRB3ybRqkiQqU1ef4ddLsrYLHqsbucC9WFMTmJ92kKMoTtnhwNkBumGQp",
  "key28": "5C9gieQhUksZSg54MnpG7PUJKd489Ydt3LVbSgtU4kL8NS9ZkeDyPAyr1G7aMLdfy4av1gRm9kUjrdvzdcHsRegd",
  "key29": "5TV4fThuxQ1y7r4yo1nfjyME4w4YKyeEYNEuWUBosoXBtPi1hbdxpkm8j9TRytpFCQ7qmJmehGusQQ5hj6Aeg2m6",
  "key30": "4WEWMShzwzg9dtLdC4tSMCn1WS569fRkNELH1SPAFPdvd1xZSGcykrX4Q5YX5ZvanZ3QyXxghw6Hsbyzeouw5vQA",
  "key31": "5QtygtFvjxDdA9W9Kb5n134NHSHrwf7pqtAumx6nFK4s5u2edznpAfgmHh7CJyhw51EtbMAxur3KQYHKaANbxpFi",
  "key32": "37Vvspf5PoPtRcFiG4Yd7Pzm7Q7y2LGVMAuUNEqh4QyjkHgYu4PZ8v5mANJRKMFXiAMUdffCUD24wkXRz4HvL3Ug",
  "key33": "QkcW2Zd79UaQT8CSouUa9k5vM7zE5G3fvtwL2pZ2oXFkzdefQjW9xGFeaftew6zBuXbR7TkoW3oBAYxu77NKshL",
  "key34": "4KkNpv6zw4H164RRqkL7Gfy6KUns3DZMYw2i7Mo7LTYdVXvhmRfZWTGQJKiWkt95vKCoiP3iyZcCX1A3pEJuegtc",
  "key35": "5zvdJxtoR2GTAeuJ6L8spAmBWcFa7SqXTAzfF8jqxanYo4G7HzuxgScuptXmiztzFQQpEKTzKvgYu9UUyHYtaqxw",
  "key36": "64MVXacxzRzhCZvLZrEA7evHZinfEtdUaWgN2hLngGNSRYk1e2sZ68hHZxMggyvp997nmARJctuyXWeBd7CnFVG7",
  "key37": "LuqXsrUKZpViJ85RxF2KpcmSXjaFzj7ZaF5RP8EfnbGqApKWnVLfF6k6xuNkfBhhJCHc8qLSrNgDKnjurHvrM9T",
  "key38": "4C3DUpSfBv3jPtPCib5UPEhVWzeXF8jYccf5eKVBzASjB4E7sziNhUPuF9virFs355ipCvh689P8PnzCZMVPivT5",
  "key39": "4zHQPaZyDmEL7d1FPj14rvA3jzDV3YYr7yhdnwDBxgwfzXijdiKSQNNPhgsBH37UmrLgBUdufTNSk97XsjZk9884",
  "key40": "ktpcKXiz9bWHeja39RyqHUNGwQqLd6tfC9g2FYwXHdLYw3kFYexiRgckHcnMqHAhJkZHrX9cwe3dcwpjDqmvuwD",
  "key41": "5JcBoAiJHTBPB5R16XtmXeAh4xcwjHWhZYzdbqKTJ8cxvv3qFmFr4gnpDhzVtPkFfiGKjqziz2q6RkzAvHW4kpn7",
  "key42": "wR5dMCjBv9RU712jidUmU7E6bQQm1PjVf3j6LdZpKwKaGXppHYhojy4djnV42z5wPpYAbakMKiu4Yr5XxTTAjMV",
  "key43": "kpc2UQoPZtjzE63E3qcg8VMPFwefQx9jeeeiLvRqGNwKNzDp3H2xw411vSpxfLxwzJW4Gg6Ca4JPjPHaPUNA64t",
  "key44": "2BWhP6X1rv6KkdcJWRNHo3EvX2MoMMEZEVPYxrDKToXJC8Z7nRQN1dznyufnk6R5av8u1KAdaLFEniw3xsK8qkgG",
  "key45": "HL9CAeAwNp3ht85XEJLpF1MY2cQBQ73JB3byAAgxQ2nUpd6tmp5UgxpMooBZy1AZKQfYqrh7fGytBvSKQ1o8sbt",
  "key46": "21XN5aRMkKnoaXsyW4mNSw4aF321JHSBCD8ojPo9ox5t2WjmjivDNJcGcXV3dic4rjWNWHn4YZk3jph9S5gmQDCg",
  "key47": "3n2xtHX1TEzcPynVisNGZPt1G5DnCTZmgLPx9xZHF7mMfDHUsbsT1N3rwXmczsJkEu6LzibZY3Dj1wmLtd9rfxZ8"
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
