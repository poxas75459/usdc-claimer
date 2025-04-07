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
    "4mM5UTj99Uw217MfNEgSzAYB32yVpe82y2h7Rwv13QHCKWXnW8DCtbYC6zm1h3HWrYDJrmHmY1hoGDmF3VLN2rX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MZBzwpT7r1vNTp2y1NCqTE9mkdAULfWQjaGb4pQaj6sDYfgcfGqXiDDV7KxeSwg9f1uaxkkkcU7LZBqgojau3Tq",
  "key1": "3dGFQnjrR4gVRaCMyrPsycFq4eTAiK1h2nbG7eQK2iLSMxtQ9Qq9wyQccqpd9rBuZrH8n3z7rx9XjZV2auLEVGsQ",
  "key2": "4i7m93bs8AdctrxjwG9cG8eELXdhHnH8Epu4VzbyBfx1h2MdfuocUz9gX5X9ZAmTdKNxPiUwSriUHHZJzhDPJvYG",
  "key3": "2W4XQWr2qgYZNQmppUJVrXEWjAJv6SdtGS6Cytz27m78EKBEeVBUh7dtCpgPB7cVuhNwqcCo3koLnBPTkUkfRNYb",
  "key4": "2tRWBboAg72hM8yAu79yRZd6qLVvwQgmS2jJ5hdExKc42pYroYcuW3p9dD795Q5eF2zvTKHMARXEBKP42giCkMML",
  "key5": "3HhLNB8uDB8qf6whTKkmTxPu6Z76BxSELEVMjMh7pVxSWagoCppVYtpL2UP4dzRraQZCg4x8PmfH8NgjANhGYZjv",
  "key6": "5YTPiP8gZPqqi9yPPWq39YXXLiUPK4ggtJChpwsBnm8nEKW1Gafqb91p1V398PFx82PNiZ5myJkR9LRchXbaL1VF",
  "key7": "3sCgM52u88N3AS7LcUg8GzS4yCQCu28DwdT6Duqfu1aeNm4aZQojkMCAi3oCW6yr2v8fm6rQvSvYddvBdhNx4k2D",
  "key8": "56H7mQjEkAbhHjF5Vp9nbCrmaVgM3ZkfZj1wHYag4SVNgSUuXswMaJMWLXKTS6cg26ykDFUFq7wRii3aSLs5onct",
  "key9": "y3FTMH3EgJTSLdrJNiZUjPUKD39cjDEDbmuGFfiyag1UQYtkmgUjHP7WPSsBxgRfrmBqyPthrDTt8dHZpKEgmnU",
  "key10": "8dkvQrdgByimcfLT8M41vdcvd1xbRZU4woq8AnWqmNBDAtQMA2CYxa7buvjtaZ6YjS5jL12MFzoTcyLLwVEzpXV",
  "key11": "33q5bkRdErVWX7G65yBUt5dqxMZUmrCViYdgLnWzhSxZYmpLe1oJ3gRvf5S6dZBNrRwa18hCU8WachwZvhAx4qfp",
  "key12": "3DLMCyAy5QntGdxGYseTsoZy1FMBbmnymZxQxhkKym4bAXGyTFb3mQ1EK9eZCHNfbVjZpa43E5gGtL9hFEnzBhJn",
  "key13": "VdkHhTDRuxo7QZCcKnwbA7EgqdTmkn8aN1ci2VFrevQuXnB7cCK6VbWr7AMAThUahQVsLceHyupB3MEBYk5Quwb",
  "key14": "3YybZF4aqxSADNEbtHULpms3dndD6Ap4AJhZpeLrHyNW5JCynoq6Ueuu3byC5QRSapFyUX8Gmyax43G8Y8rvU6JZ",
  "key15": "U7WLkjSKSZ9eDhTDj6uFP49zHYxF6odUcQPV8tHkm7iW4kQXqFR5jXvAcqcRzXNZJGYcSZ62YMrjXt6TebdtXFf",
  "key16": "369Q9pEnEMZUQE1DcS5UFm6efK4XbTNveeMgengXnWP8ZSa17yDSs4HiQXtXQW8zJGB6drdCX5yuBrGmKkbucsYJ",
  "key17": "5GsCyv393M4MrMj955CCcujh4pauvq3vgTLZRPN698QHaED7EYVMaaQGNg67ZTeUayKvrFhaD3HHKgzyqSZfBPdp",
  "key18": "5fwCfSMaHZ4WQ1xVNS19YS5exaQUyhiRK1nkfkMfjDiZAMcJsZNub5C5UQKeqFuSJ7ipEkmZzAgUhKWLTTHmoNoa",
  "key19": "3UVdrzP3rteZA39yfhnghnXSu7uJEHBY3ZDwafVK4tyTQUoqmVjSPh6Rh45ZWDpwtgSBo41H1Y5FDkfFd58SypJL",
  "key20": "3UEGd4BAuxS9FZgLJcRL3UD1W5ouBYaoaskpppws9MLS9WzpCj8ch4hiEHtKfonPGA9jptDL8N4vKSyjnwN56AHA",
  "key21": "41ii5TbVz7niCL1CLr9TtzsWJcsa5jVuJzXjiMpPj3EHDFgRqhZLXPfbom9vm3y1izvwkUtrFvjL8U6a7zqfWa3r",
  "key22": "3SQ1dRR6AuwncjEeygc9iAudoSaLk4zvSh93dYLLtGspsWdRJRvRnyHszqLvJ9eQqEsVBrZD7HC3UW8Gtk5gBZGZ",
  "key23": "58sod53kZhjB4FE6Wp67QnfCf6FwUscRGLWrq1u4YwrZj9DugKu6Y7HTqAo2YiTtnVWAbrSkKF4QYi362nF5S8JL",
  "key24": "VAKbk5yAcsVtUmgf8iGELsE88DH2hVu5wEhG2vT8wGPVDPLYVavUWC5ogwoeWL48UFSGDaPYnpp7wQQoKDBceUa",
  "key25": "dMEZANCrJzhMPq7jEkGaqDLfkChkNjD3VeN97vEpCqLA4ykReXDdreMkCSrsjiYqDpE8LwqWSFDkzCDCYnbhbmr",
  "key26": "4Ljy2KHNx2pVzaZnBpVX6Gr79Uc59CqCdmZitfQo6iGq24woi4sQTnKEPJqBGJwv5VeY5USPKMMAajAHQfxCmex3",
  "key27": "3KFKAUJbuBjkVdHMekT5cY5sQKYv4eW5zY3hRYnioax4x4H5deg7pDtjMgAqiF7Lsh8b9rfWtuNfWovsnzkU7Fbn",
  "key28": "5r9b1hqtpu7EudNoRtu9KmF7PX4G3hY7puwv8HAwzvm3LHkZVNxhXe8WpeqgteWXKkYpQ1oUebgcFxyf1yZTFnZu",
  "key29": "61FootshP9yMoVmU3wFcNDJ8zzcAitFJzbHRw3kueQLG1FgXfW79oGvgLWUyHQt3VJuhM7UESuSFNyVV3jtPcbDC",
  "key30": "3Hajonbk9DzKLUbHMyMD6HckXq9gDQRYNSdxnyoKfPDmuXpgXaboYrqW7nHC3LsMqiKBaEGyTzmZbSaZoYuVMfSF",
  "key31": "5jEEmtyTrC9vJF6g5d8ZpMA3xG9EdtUUkrkbnWPWTEXnsXhkPacR8XsbfAbrB6R9d6A9mq6xwbQN7YpzT9usaeXD",
  "key32": "3XELMpAjaZYY8Hbk1Qkhnj94RY3gKv6yNVSBdfhpRmNqFgiXdrjX3RqWEmd2k4raMHuoo6q16bn3oSVeoj8X3CFx",
  "key33": "3tGrcr1WFyon3LjV3jZAaYESAa5rzow3mZZwhx3nFcTSb5DeG51QA7hpGxspoxJFVksL7qPvC5BhEF1PVmEGM5EZ",
  "key34": "4Hajzs8YLSP6QgwykBNhXeYxQMX3ksYsXCLspk8xXnQxmevtnhwpysziv3XBCzLsuamJcVdNRfnjBKuUQCiSYvvG",
  "key35": "5Hwrx8TCq73weSi2ce2bHd3oFwfmJcqT5KqepFPVj9xZtKFTN2eYq2vEFDSwmrZeQjKMVXGQmJxnF8VGH8FgrReD",
  "key36": "5HPJRybpjm3AdFdKQPpnsvyH9R45HZPWq5MwD5SPhc2jpxMNxUdkBg2M3Nx6m8aauwR3pr4TrUovcBZerAEGRiy1",
  "key37": "4qbEKaUrHhejFpCEpmU8sHu8MvLNBH9Bi5J9qxKShm9eeCEsdzeydrWiLT62yu9MpJCsxh7Tx7cSaccKDgi18k9y",
  "key38": "36L4SGnnUHnSuT8CQdZDeo1xnKZCaL3yBJsFtXNb4MjD435N9mY4YJ6Z75pKVfnHkwMx7gUCDq2FixATwvnXi1bG",
  "key39": "5qzica29hV9ns3V4moz3zNQwJ7GbThiQcJA5BgZA9j6a1eoWdBPsUDaFHb99UCXPAsL7sHXYuZXxbjaVSvHdTnPd",
  "key40": "xp31qFxEfB1gvi4N3Z6QY2ZWbPgZjFQwqgYgKyn8NVfmXrpuu3JkoiXqEfVhqkGQeV6gDjpWsTjo5k7zX9awBs4",
  "key41": "2ywyYYSxok8e7F4ELiov7UXVeoDYrRsJaZy89UjTSTGxdaFniZcNVJmQ7z8NfwvSFcDtY51uG5JuskcrgjAE4w2C",
  "key42": "N6XJJbraHsJHsAfEscyoMEStmxrnbv1JCFKVWNn52SXMbVx9eKhAY4WXMXtU18BBVRg4TTF32q9dbUvKA6P1SMd",
  "key43": "35W33oEDvJEDtAe2DLBqGJJdXdi7gQHG2TAEgWJF1FA4ws3LcqFS88p1KoSJmKk6j6eMALjtjdujb2YQKwxUorTg",
  "key44": "3ghtGsxbmrNa9q6Q1QqW5u6i2yKzPApabjZjanh5baBe5t32zZtv5WcZ79TGR38NR5YwCDKsjqseBKYLcaGtUcYc",
  "key45": "5B8GagssqjjAc4VnVh4fxfY32ygoGuvSdAFA7JCtymHYaFpVZqzbNB2rwEzhF198uMcqpRiGBa6RbacV6mm3ikz"
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
