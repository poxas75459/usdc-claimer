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
    "3Z5BFLaoWyw4SVAMWEopYFR7MSrd8JsBVgSiqgEy6y2W3YMKvYAv7kwiLq53nZSGBQtGLgH6PfoG1Zzvn5yK3GNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jG46HWtpdfhVbrH3mvHjyJxAAKH6MhnQ2DbsJNcBkSVcpnBFY6MiYE7rhnnWqNp5ZwAA5ZogghLdM1zPbMpMwuf",
  "key1": "5FNXjPx46thrE7yRSHqbSxH7nx4RquwKZY6y4zYc4pNTaKTuTfgrXEFVgFmQMa6xN7KjtaZ9SGkjxT4UCjGqN62a",
  "key2": "37e9T6pkBocH4w52PT3QNNQbPR4B5ah8dFoSoxU34T48VqoM6iynprEwoCmaCRMoiQo5yGLDMbJK8vNjWifMP82f",
  "key3": "jYJXRmBzgLGJhymJCHEMY2B4oSrdzaZnZsyhqr3QLxMw4nUPDnh15QdvTTJLfe6GVnXii5Exn95Z4hVBzUs5dZx",
  "key4": "q4si8qQeatAnxd339LHhHdnscx6XraZcW3GrmMJbvbWDRYrJpSUvgBH1qMLUUHkAf19b8dxksrGosWyNV7oxmvk",
  "key5": "7TcqkV9QpLk3HgFbTGaJ93T5h5H3jNanzmyzhLJNUAZzpd5Z8nQPdtvctkPz7yKgVieXLZPQZmL1MVHyQvBCs7Z",
  "key6": "5Pk9ZEFCKUZHxmVzjU2U5Ki6mYNKoby5WMmbZCwRRqKugJSH7drjVgHk3Tss2FhjT65PzK6NvrypjKAQZKVA2jgr",
  "key7": "5MMBu5qbBBihd9yYEuEpn1Q1s5fwFiwgGKEHqMbUBVHqvRiMTj6CeKDhtkW5yghyisHwCqZsHchQNjehvgWGgYFj",
  "key8": "2An45LZ6t6WXRMkkA32rrWfCfbBz4it4pF6KrwBHymAnXqTRFiAJCRknwQgPMHP4qTP7P6tFifSd39SG6Ue4JNj6",
  "key9": "5nRmL9EwBXXcLaFejhnLb3VwMebcAkwWJpDYh8VSgHiZLy9q2UxiMoh9bTnt5UowHY9aYJX6mkLMWJEcrDbDbqJP",
  "key10": "2H1fy7VnKU7QGcbiM3CNuVEgakRe96dTK935P1d5WEJrHg4UmNHPAsEaUJ2QByPfwasYzoEw3nSvvh89ADURufNf",
  "key11": "5kejkXYxKY6A6dj28quPGiyCgMzWE9w8BmD9rriTwWYaSU7iWPdsqA2KXKFsUSEoX2RGKpNT19kHzgwcUfkRKbx9",
  "key12": "2u3H6MEpqGcBiUmAYyrW2ysCpiGa6jUFjN3VAy6h7h36dQPq4yH21oVWKZTEqCakXXhXS1sqHhPEibRjGAfJadsb",
  "key13": "4v2nzx7SQHefajEiHb7YzKn5P6n2bdcheXaH3ogW33jHPvdpHoqJxruBAy5wsnCYJseGMT2MTJTivZKjYNmAuemb",
  "key14": "2Dz53vYASSpeQWdzuzUc4LPt7UQKJZk6Le3ZrHLEomiq4cLgb3rUnoN6Wirv6ZfNaMXzeP66HuegpWFUvDGKbhLa",
  "key15": "TU3RxQvwx2FJrZ7nVRFM15MCCagTL4CP8LmFCgBqbAb4wJiuTFjS1vJ9qA8AbrrFE93k9fsJBnXnXYNjwXkYbsQ",
  "key16": "4oMJQ4nn69zwVgKgJmLPU4Mujp8EdLZsHvmY5QosTEfK8AsxF9mG58ubwPLPTR5HMwPeLFfrmXMYJLAaTXjXBhV5",
  "key17": "imn6ykTTQyxKXMBp74d92FEBDs9g8TE2Xk1ethAoy3jz9AypcizAD7F1bj1wuK7j8UJBM7D6HsqZEzcyN3bmcQe",
  "key18": "3MBkaPTQ7XHan4coYmAJmAe6VR9sYAznDHHc5TXjjGitaVihWc5mkN4CJUF9CSUuYkKiX8djfRAiUfTQqz4jvWVo",
  "key19": "2KqVRe3tSK3vEJaqHaQkdSCNgJ8khfsAQtqSii8gfsMQJpm5SNHeKERAnfCtPqKPCVXc4ZgeZkGcQqSjdU6Bh1Vv",
  "key20": "5qdjHybK8kE5phFtswpCEwm8LCS5Ro3oenKE9VZWYrRKzJ16iovCWKEG4eMZPtvk4SpVuZub6QfiTrWioFPjfud5",
  "key21": "2xjSxosHvp6fux5x5mmY2UrRKJTocwSnmaoa2XWta5WomAfjqtPwCNxuorgwgkHutcDwyTT4zSzDahRTij6EyLRd",
  "key22": "2FZBLjr4TUk6SPbBwJUo9zj18EHk99LCQoCUPMe5gh7SDh23rDKVxruz7wgAmVravPJyFRDgkQfrRC6dWq1iGsMR",
  "key23": "2cMt4bJUiAWtCQWCGfZd3hyedCgHEyRz2zUSRTRXYATzuxx1Whzc6j9dtsqg8gg6jxaN8cH1qffMaZ4LZaRUFWR6",
  "key24": "3PGeAcZma5KBhz4inguYHA3Zp2kZtHbnXmtag8Wu7YvJhcrU6MffDM4y5M3XLouLRjfHubTRxzGEEjgCARTaqmLX",
  "key25": "AeU6ns8RyCjkeWGrGmKa8ngsfMUZTtTUzcjb5cnqngQTZq9kYGDB3WvazD2iNxhG6TJt9JryWMsrTceP3E1XiJN",
  "key26": "sAfoXf1TpUiwJLucefw6WEkQpn87S6886EPAfscoW6ZnVmUuWV2YznkcPRn9sV2yNyzFCgEGNJjzdywxuxt7Fbd",
  "key27": "3NMLNe7A1vqkb8G6RS1tS7MrLgG3nXSzyBadTkpUhNLg5KvfETTJzy3PvxtqmLAemLRUHUqW8W5DdXamyQHe6ZX4",
  "key28": "3kHwCcCGDmsrShcxUpqGLL68BNcF8wa6mYbHAcXyLSCPRufiJuNjq1EnnqYExagABc5Diz1fJtTeygw8nVxhdo52",
  "key29": "5dfip4T6xpxVxHgQShHYvL9SZCyTTT2D4QiQ9uKQcZHDkKvZ6XFWZvQSuxPugkm762GCuNGDPbuPyC7vKba1akjC",
  "key30": "4iCKvaq4peqwqqw5tV4wSPEbQP7vVBwxaBqAqq2eMLao5maurr9G9VePWn4kFA488aGokYjoih8fF3BHGK1wVd16",
  "key31": "46HYP1Zqt9YUMCLqjmdKZ7qGtxjsoSTgXDWhtpanaTvRUvShhkMSgPoji3x9Di3AQY7HQy1h8cGDFUtoaDKyNsXj",
  "key32": "5bnSAgJzkGyus915gnE1AzPkaqUadQ3fg32mTTSQhwrx8DNBn7ipjDyBZNQJmhF8jycEidbBMtqE1Z2RgSuNMCXH",
  "key33": "4HfxFKiRfJDj8w9nkK8SVPY7sgsNFHqMEgRhgzfn2pTBxT5GPxE1nK9sNEQCxv2uKbcbpYiyudbLnhgHcSM9cauo",
  "key34": "2z1a3T1sRzXUwdUpKhpijSaSPcGQQiK75dgqp4RpG3hq5wEcFrHjX6HpayhDf2hLAWxuGiPFVgmwkpBWWTvzMVDi",
  "key35": "3jXcrczTsSroyxDdGihgHRU5CVJjJJ9kKr6ykzboZWsHeVGbqhkpFeQ9PCr1x5tA9qsf87u1rrEDLRPxcd6wDPaa",
  "key36": "6SmVvvFMqSSE6wff9b5GfiySEuRnqckYMx8jrVZJ367nuodFceUffJs3QpmgJFHEemhoCck881jQuFzdNqEmu41",
  "key37": "41aufznzAhFbguQHt5fDJW55iG8mDmVhbRVkvaGPRVtkn3fuSTzJJizxSpxTxqH3SiAg8djsyAfkfrNk6rHCUVHb",
  "key38": "4jX2ZE1awZZtZR4zLz9MGFH5tZjKhFrNvv2UMxhKW17AGQHgXazWinr5UemvZ7syevbbcYsgKTzEdHVuJSKQWUg9",
  "key39": "4hsmoBGCHZ8oqWjvYR2hLNd6P3VdETRhomf4VwaV2Y8rz2PUQGN3tErM3zYP7bLked9WnfEVB1BdjijzsSU88o8f",
  "key40": "5poxrdKbDA1wVmLkQsxxRM5W1UcL5UQwdhdQzyKU6CouyVMJaqDnxe3W9xMyZqYxUF1trWpMqoPu9hWyHRBjrv4Q",
  "key41": "39wsEQLyjoJpNAkE57MN21QxfRtoHkKyP5koUUKMkLwL2UWeSELAvCBirNnrwUbnL8uzX27Z8RdBUpwGeVbnpP6i",
  "key42": "54GFQ5mEBC4UPUzw6WEEPEm8wpBJWGGF4QXCHZKQGXhSP9JGj6bXx5METu6FsnbS7uzvDLaTMqd8E9HJPJyd1QCk",
  "key43": "VcHK7seqzjpdQ7n3Nrat95RNKWekzyM4KaaTmy2Kd5zKiY7B5xwq1kMV9vFqXnWekqtRdw6FamuetbcBN1hAL87",
  "key44": "4r3CG17g83q86UYohHRjSTgB3gJBqxyigkb8zKhkaM3KHUEyE9TKf6LL6Lrhp4QSbZr5R2LMu64eqz1v1ySmRCKg"
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
