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
    "4pvugpyGxpuEy2GPbDwhGht7bz1PM2nyMFuTowiRJZc7Rka29pJrFPfnCFDUWhnSwmwwXvRuWQuqSiaY71AjkNw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RhmYEP8ctbgUhYdq3sz1pt3EZwZTdBuNhZdjNiZhgUvzoKBRbJtVo2zuc793X4Sq4ZXuBPkFo1R9CtgGwq1Sr9Z",
  "key1": "Vesa5JDdPE2hUwkESHYjWiQBuy13miu7CoVqbvEACMcaPbisFM5SU87wTwEF86VJbTLQb7LrUgoWdNijEeLfWDg",
  "key2": "3afmU9qEpK1BbSHpCzCmXvbjJ3153EDTttco32EvD9jo57Qz9LF2CLcrWRdJVCeQVb9oQHb6cEHWg9uHjxyZB4U3",
  "key3": "5r4MGmAnUo3xTKNNpi77podGUMpzvKEaLoNcL5EH9Ht13M6xLnXr9S3bqhNBfFSVtXjSmKLihN4tRumA1qmiGh4m",
  "key4": "2DAEchuWZ7bV5XmAgmCAQymAkPVziwFunkQg4pjDUnHsZ8KDSbceHVwynqNMkZ51N2uoyPCj3WZZQUFWarfGnsEV",
  "key5": "522DSh7QfixC1sWB1veu5BFXda6mupA3zDf9cUJmhjvUiqWVMj7zqmiWS7qxruQrEy5kn1YGYqQKnJAcieap7BsJ",
  "key6": "5HCvSYCMCfMtVsn62F5aWM3MYRcCE4QqHNuoAvh1RofhrLqhjWFu2fFajDjjfAfT1ST3wpDcSWuWYeeiiBqJALLw",
  "key7": "4JE3ejBFFj6keHC6kagXaUUPXgefiFzadZY9iDF81yLi1S7xQ5n5W6p9mGWRRSHjtjBCw4QT1UYGuGjGWwfoTg4b",
  "key8": "2GosV7QD7Y5QZ3w7sVDMWZg8qdYFjf2e21TYmqwBSf5xGShVEdexPEG4vqNvZcH3J2r8w7G1tKd8t3vskDc7VE5r",
  "key9": "5UEuS9uchC2w79idi5vcFnH5LAvrsbNPvHprqDZAA6qoS1N7hEE2tLDmcsRYW7tppdjkqmQ9bmSfjkJx7sxpNqk6",
  "key10": "33wjtMGQnyN8A7owCL2CzTnVrvjBMr6UcDrsxpaMncKAXPBnCujxqGTRzhKT5yJe771VNBrXQjyQQh2DihPeaMnR",
  "key11": "34kMoS1AtwpVFMrK9EMyjeBaDYX143EzeoiwifmzsQCrrTRDHcJFwYE27nyjq2SmUixpsa9Bd2GGVcF1zxpzmDW7",
  "key12": "3yB7Es64XfHgGUAed3XaPRx4NmeEKDK89Mq9TGKVodZ2s3YBa9GB7vnA5j2jL9EiirPRr66vrTo3sydzzkPaGTHq",
  "key13": "48KbDS3JH4PyZ1eeN9oQGQQBRodicQQV34xcVFdrYxCfBUYLrToF4MMd9RphVaavs6AopicvRhehf8NiTvoF6HwH",
  "key14": "36k5uevsqk3XMvgtf5cAmRhJA29FvPZxUqC5J5UPj9xNhZSNEKew9fFHwCP3yJzPVqVpfyy8eJ5CE3d4884huYA6",
  "key15": "EPPkfUdxkKA3KczNEmqkUA7bCHk2De1BVxxnWfsapGHn8K4gY2o2XzNsymTjuk741ps336Qfcgn1QC159E4oTNq",
  "key16": "4n5JkBe4Sa9bKW7QA19RtYp5aM1Vt7h4XWjBePMM9ifRPhgYzfxe9DGmo5QJcTLjM1iAEzAB9vprTz5hqiTUB6Dy",
  "key17": "4xbp4h1QWr1XFXEMPWYfm1YoEGUHSh5GXqkxrsw6p1zkHomvYk8qugUmitYNP7nzZrwL37fj6jk91euhCXzWC38e",
  "key18": "2GzR5n2hRNVL7VLoUg6Xzimb1NdG4Kecs8LQME8yVJ2gzKNRFVHm5qvtCphbcPSNFFU7wSwq4AMDCgL9hJi6mrDD",
  "key19": "2XsQjr79J2Bo5hTvn92jSD7L6VYxCBUwKqziwU6Zf5qynErvB5t7r2wjyhVtfy5j13eetoudNQrvNQPThKxghjcF",
  "key20": "654e3F9o1Hmf6TAuN3kpLDDJ4PbUZyWxKVBwHc6xkYcgwvwVho9ZAVJdPbtSTVikD8Psa7qSrnpfep1avK6dpE5M",
  "key21": "2sDNA4Ho2yd3dGo8Bbrjvj5wMceGhT1aFjK1q9v6vceithFqmHRTCWUKxoFohuMavkLiT82DgtqirN7epmBEWJiU",
  "key22": "2b7Ljn6G5QA3NzHFc6xJduo5ui6YybcHYB12iA24YuGmsxvYDDazCYTrvZy414DoY27Ky3csNxogVYyG68jqntw8",
  "key23": "3FgVrQ4CQQ8781De7fRyDepSBNZqzd6rT7z9tFWnDNT5aSiiP5iYbpPAJ72GFRGU7QhPXA5vW8MdfWPqGdH9EEs7",
  "key24": "3kgUbueahriXRnSoPKC6YFNWXpfk2d532ZmgyQLg4PcqM2zXbAvLf7YtDeypC9qGe48voSiKrgZkzxBxqYYofbCM",
  "key25": "DyvLXAEXphF81xGb3pTeJQ5cjpFMEWCLUNwNzUKZZbznSZhPZMKNGnienHZ6KmHvdebZFnMcSq6fyndUs88w6xH",
  "key26": "DTAW2udqyToeRcs58pHp75QoKoqdGHvv9yZGWU7UnU7w9DcqhZU6fgGad75uQ14avScdau64Q6R49KMbbqPCT8W",
  "key27": "2dBy44JKpiexZ8mZKKTJc1iretiyFn2wsvXHPf7wMPBwtzW1mA4WpyvGEkE3BbTZnxNcDnti9xtGEpSkEu2aziQB",
  "key28": "2dYU3qJBTkHPWEzfub4VBLEAAFbDtarve64TKVMX7oeN12SkvbPpRzaFnYyCzxJbGBXebG5NHWRV7Xe4TJna3CzL",
  "key29": "2yB7gzGg5qoEEwUU46zApyW41d4UXq5Ns43njeY1fHr6aXwAchtLDKaNDbwZxdmJ4BFMx9Z7jaCbSf9BZuKFtXu",
  "key30": "65aoUqvMjjJpzhPK8C7JSKLCibKhmYjPvsdkrm9kir2SzhB7yc5WqGFTCkBhYHB3g9abvgA6c8PeStUyNqZr3drD",
  "key31": "23JL295m3EU1s3DTC61a2ZanD3m4RqwsZDy3n3iLJsoJLUaSFB93W8DkE5xyKppQNUjxUdGqbqex4axxcd8X6vby",
  "key32": "5qZ7P3R9tLTfgL7Jh653dJTeM79C2YU1AXCGWWizsdZXwXw2bNujn1Vk8rTTDYDwQf9q3LAtaceZvwmSYMGrb6X5",
  "key33": "voVwDxwNzc2iQ8Qgwu1eiSbM6MXqKvUJq3byxGo51uyELbSXwWY6g1Y7KScudXtBTTMpzmuRVEU77nHSkEjto7m",
  "key34": "5EGD61eUFPKc6e9BUSBxJpnBo4F9NFwzo5vPNe4CcUaNTyWhivee7YEFaVqR9Cd9JvxmG2Z63hJYjgAKeC2KYpaA",
  "key35": "4FH5e9gqrH4mKB4x8TmLvRp6N7gkfkfgQqpm6LDaTZpa1SN5s4TGdNw7F4aAoCwtsBUe8S6yQwpEWZT8RjkfuuCC",
  "key36": "ToRWLbAxDcZ5p6XnszTKhDWCW2mNqxzCnAVWEMZJ5BCwoPiY5iuHxpSHDBHqkapUsmQG6ViwgUUJAiTzHQyB1V3",
  "key37": "4xTamHqoZ4HcDwwYvxVCpQUHxPu8Ln98NF3cyQ6yBZ3mbuLTD65VCdCxWndeMezhHFp5S6nxmP8oFG4iKuGfhjuz",
  "key38": "3UEadfmh2VPgubXWBwTyGaiCTGQTPmjwTYEaYnRkjWt8Ja9wjSUeDpLj4W99URLo5nPQBQ1iXMq1VtKuUBYnSPaD",
  "key39": "3tvhZbE4brvmb5de15dsRB1hkvN4fAAqQTAHn7xQtNsEYFhtdDJct4Usi3qxZ3cH2L8MYdJeYuFW6zMwt4c7AKyy",
  "key40": "3DoDRo5kktVUgPf5y5hiUSvYkkQo6rTPfpjgvxG9egLMogXgMXgDFz7bEzcnTchETZ4b9Fi6iSDS6KXjt7ukcotc",
  "key41": "y4YJN94uyJuTP8rbnPeJvFTtYbhwF2MdYeeAymoBXxHeCpeb1tfzhUm7t8xRPET7oGHMdfHyZWe955e5ADMNqsf",
  "key42": "5ZpAw84RTDAWqjWraRADDU6RvbkuARoXM1txLRQYo7jmWejQoshvBxnkj2nDDPAwVw5qL34PoGFo87TTHmrCt2rq",
  "key43": "5uD5enWT3sabMoz1FRnRi67SZj3BsvpsPa1Pj76TEjSsiUSbArcyNg2beLL5tLGNBJNMfwT91QeFJq6TJSfWDGvy"
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
