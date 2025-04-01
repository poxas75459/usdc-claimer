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
    "4xuGqzwHAnHPNqJGfwRBYG5Cp3J5m69rthfBoarjGiabs5Pp8tg8jj2fYbLNfNMFPLvydQUNFxXdpkAFAzh2gXoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TRUBeuaccvKCiP7wJgBXzwEErVjSgoKLFYkWNwQTfSxe6VhLUJGtRNcgh3wrAg4oyHQTv7KvKxjSbZjhSWNU5ce",
  "key1": "4zwSuTnZfkxZ5f6ggoauPKZtSRkSS9LBUD2hkviU1Vf1n386j1hzGLCYcbapVcjM8gokhJU2FGJkdvpMHNh8uEkd",
  "key2": "4PQBKJUu1c15eWyYcsCdsmgz1Xk2ySH8P6B3kLXUWFhi3DsNLNfyH5Veu6ef6EPESvaDnTBEXDRC3PHDFb5LubQ3",
  "key3": "2rDN56ZDnwi2ua4EJnSmN8MFdBfmNn74RH7WuvC5WiQB4LxgBdYzeWPKjRqF7ThongPhcMqNUhU9egbiHkG5cbZY",
  "key4": "2c9q4LQ9BgwcFeEEssvg6ypzoJ4iL1xfpkhQ3MWsrRp4V4dWXrFBHYZ7Xqm58tgdFZS1YmoDcyNE32ycd19TYiJU",
  "key5": "2Yt8Bdkj9GNPkKcDaKTv1nxKDQNGrefwcgtcoqX2yt3ftrjoLKyXyjBA6naUvSvoBhC5rbc6jn9j5Xa75udyVwqF",
  "key6": "4cyvSboRoUMbZR3xnnWv2FiAQjttPveCyGghTK43PnAmazydKbXsK9N8WzjBidy1qurf9WEPXbNx9JKgxPhpJnL4",
  "key7": "2pDetf9AVQUsYqxK5Xh9T8aeUqtDoUuq1mSBgYKtGNLetrWYJUbsfN8L3gMynMGBYharhQuWwBjSW5stqFpKgQJA",
  "key8": "3wA5nMSw4qzfzcNCxqqHz9eYNaYLkh5ESD6uEGNv9U7Q3mJJ4GhSQzAAGXNieSymtDX1YBbj1TJTCmPH5DiEQnn6",
  "key9": "2XfpUG78wa3ZeVSS8rgEoorJr9ZRnVtBBv1xQJdvSpfjs5KmyNYHx2b7J399GtbvSb2G62TkCWMLF2w2V3GZxZ3t",
  "key10": "A6SayMjwR6HP6VWNNbEzoPGC4PSbZTcXtmTfCsVHUtB34FobMDnPqXS5w9CUKqtSv8xJBChVxTUYKub9jnjDMqG",
  "key11": "PFPNBzB2ZFkLBuoWMVS1CPss9Rk7M5HqMRYzZfPWfHA1nv9MaCyZ7vwtg2XeyaqyvwJeyCWaDrUVAZkZWQ9ZTPa",
  "key12": "5LWAE8J6JvxjbAXSBEniQue2AnKJuMRk2darPk3byP2pPjHiQ9wiwV8MbdhrdCskviL7yLfrGfvA3QqvfUesSYKd",
  "key13": "38jxJ98QLSWxVEgvGKK4Vp5vuLyqwRvQif4NY9aBHpuy31U1a1zubbxWRHYjFxMU9B4XWstdZW8cEutnkWnzCNx8",
  "key14": "4NL5dR8NF2h6WWvCv4bE9F7p6StLZtjDNdAeWWbYjay3YLRrGDoSZvYXkJCxG4inswV1cLcRqsXSEFcPSWrQKcKj",
  "key15": "2bQTDq255rLAaK4BibcmsHqyYYo2dpxJDDwwkddZpbzog7TYvHyzWLT5ckcPHY4RQdkazL5WcmoX68A5bXbXqsPr",
  "key16": "59yJBodfov3DbP3Q7q7MzCcyLG4weEohMVvMDG9cxvRhtUpMAKnQzsFheGt51ntgnF6AJ4zT3LoVX73BVZ8Y5Gny",
  "key17": "4KkddGBL5GStZvrYLmzUvc4qQPSUN9PJzYf6LYXSuS2QWLQJXdmP7SB8WP48jNNgKucKf8Ewj1eHfkHuqnpio2Jo",
  "key18": "2ocUyWRcdXrtFY3z6YQz3w8pGHM6YYpqnv1ZBCWWoFhkZL6Dtrk5jF87VbyBsxwiCxES8NpfUMmxKenhmfA87Yio",
  "key19": "23EQ4nGLTAYqwK3T6Jvo7QQgTaKZEZLZUchfswon1wThpXWh8TqRL1tXmfBN7tcbATWsUgStMhkyB2HXdvk5DuA5",
  "key20": "4Scpvhc93v7x7AbvpJQTTtKySqWDwyyyzFeYpcq3uDkzHn6D7JJ7D1VtCNQ97zbHAcCq3ZqZx3Tif3QhjYCiCxpk",
  "key21": "y5gprGpmT3RRr6d9V8VjSN6AqjL53eCmHPD9tXyqeZx1ZzLzKUVHXqBmzD49aJDyKJPZBKGhG8DABsrahh4AjK5",
  "key22": "64skKf6ENkUktbJB9eS8SmS7DmqZuuYKQqsWpgFc4ZcB2xpMEfJK9qyezG9YhyVCKJzGrCRys5GoeJYBdyp9ykfq",
  "key23": "fCCTRZZPcb1hwcdCVv9cnfYgZKiJMdVsNiWApLcf7XDwm5973WNjk4VRFzJdhgogj3BtkLSLWP2NdVe6LhviEyx",
  "key24": "4LhndGvUFXqjGQWF2SzUt4wMvyukrEXiq2aqmQCaM7UXtFLxL57DtoFBSWpqkJBcRtysMshRRjcnnebTi7WRqzJd",
  "key25": "2imcEoER8ukYz1C8VdHa8dkK7tLFPL3BgLDvptXfdgJDokMUMG6Wa39q7sB6FxgzkWvtUCLwrC8WrujAw9pPgqPh",
  "key26": "3SzC3EPjwULA4RFExnTUTuUjMnKjYPMoypPMscw6BmPLyR7oiApPab7T6b6TK7GZTsELdLvsQkfJZua48sC5rXk5",
  "key27": "3GHT4NSsUtPCo62x3iCRbHfuBSDnmMvZstyqXiTWgmLdwzFmEwViuRQ77HNTLsese2vqySBwGuqpZajj2j67CaaC",
  "key28": "4maMrc1rCZzyhRX8oN4UagRfHSFP1X8KYkxcnUsqiFpeoH86zoA5Xb4fqBdBt4YSFAtWHUBxr4VfPFMXMt9FFWMw",
  "key29": "4KJUFZGuRxp3rqpkASDhsWzP8LW5KkMTAf4pq4opLuS4cyfoCv4VvG5coAhv4AoUXCGkVTpTazxotpnBx6wuQ7tR",
  "key30": "2ThuaoEaSA7VYhPYFbejvpvFAuov7q3jY1eo2pBdENskAVs3Ap3mJKZQPytkmhPuptwFaSM2vbUXaPpx5bSYQQFe",
  "key31": "3e6ySjNaumXJ99crGwi9Sd3XEQ87y9zy1TcipcZimWYzsn1xJDuXAV9c3vvVs5yrZCccX8KCU77B2wjBg8o2buS1",
  "key32": "5tXv1HTnYGHHdqaeQrrdy1eFa9CD1cWP96JRfGKE3pZStALJqRdLyrMDASvosLst4P47VqWcVvLFLxDvgQzC7HU9",
  "key33": "G2P7Tk8UfbrXPvGfx8BgnUg7nFJhhp4KiSEaSnJ4P82ReJWafkSX3XHnFy5GfkXb4QKGHMmzcvJVXasBjDJQTZa",
  "key34": "3X7oQDdAq9u5wQi1ncqX2hyhkuykVL1R7P4cWJzPk5ZV4PepFzxhSyF5JufjH7Db4RCeCmzxjjfoNKyR2jtyn763",
  "key35": "Z4h1TZ2zUYAp1rP2xR9WAEM7bJ7ZavaNyS5rGHMQ7g47RqS41ncuHTv6TpARE8foZkAKh8jxU1GXXJc3mbdLeXn",
  "key36": "46JfpaGgWUcYzGzUkcYQ2jtZZEidJQr8BYEdZY8zBW2c7kmiX6XrTWV9HL3Tk59nFzwoJCaSkmnDQsqfT9kW4omr",
  "key37": "4RVpunoDfWVAYaYmdTB1wB1pCuCJgzUH8LKDBHJsb43J4yK2aoXA45qpogUBt3SP14EAGsoUJDxmKugDsYNqQ4FH",
  "key38": "2K3s8JiiGwn1CzjSrWSbSSPcZML4ZX4TurELWaRcRzzSDkHq1AT2ba1VQkGVfbGWFE5HMxioZ7kRgzkioWnhuaXD",
  "key39": "2vQ5khzHBGaakuz78YoJGyjUcNLFeByG7kC3do4i16J7SuuGFfyfmehMkLaXuYkH2gZfBaQJUTZhxfKEZmjX4Gt5",
  "key40": "4jKozqoGzPk6ZuWMoEUpi4edani1tasoxGqi4NHaWGHrFASTB96ZyhNzfVWraXHUJb5RGPCML8mWfSnKRHVvk2Bd",
  "key41": "3xvvas6GdUkwe3cwR726cMMTYMDo2tJm5NhVojm6XUWkDdB6ZwCWSr7H2sjdooUuh32uHPhXWTRx84dTueuncUL9",
  "key42": "24r8DX3Y21hgRBVYhbXi33WGD23FdNyi3v6xTXCYUDRyBKReh1Dqyrusjz4NaBBawpLi1vhoRnmmmSDYHGc3sJGa"
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
