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
    "qob7WLA9HiEmNpChAumE4Mw2uVUZpx9KsV4bGcEroi2ViEKNqQtEKGEfkDHbr2Joq4YA3DTPNCvyFE7PsoZaxFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ghd9Mweh1jD27PcnuJwHwkqBhGw8XwUFa23WY4yzMZHCNnMscRGJRYWiPUuVkDKn4oBqLtzMa1Sn8q7uSSKzBQU",
  "key1": "37Vz7xZdvQoKxJW9DUSijb7ebj7i256umxX7MStX91X5EuJaxohRUuLetUgke1JunRznHWnfc5LxdJazoizJpmBQ",
  "key2": "3x7oxSgwp4zfs1MiG4vtnmwSrFJAw31m3CAf1RHWQTHnhiYMfZZYvTze5ZnxANnC68z8F2SdjdQGvUSH3Sq1K7Yq",
  "key3": "4ukJtdHYuR8uXhmnoseHjhygcTcgQCgbejGxpUhmpQ4kGJEPN4QfxaShFdMhA1fsvJhKksFoxpPFHdW5sgVEzXvK",
  "key4": "cVykK7fJV6j2rrYkAnyVLwLn7PLRHLVuovssubghwNKy9pJDioorwq29KZoi2PNGGjH73zWPBSStEPQUTNYP8Pn",
  "key5": "SqbCN8322eEJCGZZWs21K9JKj24QttKeWzXPtjy5L9jZdTScdkaUuST3Ki1je3gn9jPMDBDWd48BoYE6PC3URRj",
  "key6": "BS84ViAXR96XyLRtpK77f4jb8GmFqUhtM4NqntB1dVArBg8CBWph3cTXTn1ze575fQADmwi4Yghet9ZGfaffZXQ",
  "key7": "3ZQruBC7eNiAF4Le38J6AkamiSfmkmF5FrpX58Mmy5UjLURpD3EbyjCsjhfRNKsT5iJCueiWaaN5t3FTP5PLbYgn",
  "key8": "5H3T2XVrQ1wDnEFTKEHDhbMXYqUGKFRNGbY1UE7fVz5oZ3Gw1ZgH1dUpWU4uzu56ctDiDgoVLK4GkLPMskAPLraR",
  "key9": "4sppmqKqupNB5sPBBAcKic1aTo2BgdwXtbKDvxDhPhiZFXcFN62rbuDAcbaaoz2dE1d5DMd8tqSDQER3C6a9QgSG",
  "key10": "2Mui9ZCX2jdBTeWeE3tcsR3srC2ftnR3Qz58ek5bN8919yBFqJwDq48chkfGuwHAmJ5bzqW7u4LHJzjMH6a4Je8b",
  "key11": "JBmMHfGkWrEGgEa9UsxRJ23R8ZNam7c1NrcGyvFcpX9g35J58xYZyczGvx6wszvtJexG4gZUxB4zy9p1YyMAydn",
  "key12": "44EGs4zh7GMutqWH4PC4Df5ACadZ6k2i63iKEAb3YcVWZUnyBC3XLD6r2sc4sPY96sSCFJrotkNEJjRVk35yEUr3",
  "key13": "35aTupQYNpbwgc27CktGZCtDczwgaZmHcW9XoehdJuPQSF4MP2LvuWJAnZRfQrNPYBUeJkYPac6v2sW2k4vPQWdi",
  "key14": "3hXX9kXUekUgLp81rUPczNbsv1aqsxB5Knjs5LwwH4vcMtG1k1JFXx6YnpoDRKp9S3KstNBwkE3ycLWJatZhyK4a",
  "key15": "5t8oVamgKj6yWCnh4MxKTu157MV6uDib6c7vNjpaHiwamS6EEbo9QrTjT6L9cVAsZRkoQko44ZVmojNnpM4GuQH2",
  "key16": "5R25Jm8jFpz4MX4iYHvWMND1g8Pia5hFM4Fkb8GqcpgjNyGFMeRxPUqaPq3zXfUSGK7U576KbWCzceFqaakrfd3q",
  "key17": "faH5PQRMiqEE4DxrijRyFbUs3LUnRAcsGuH2jAUPEwWVGjyvBiGFW6cc9BmtTU4qy1CbqsCoUTTVVge32hYM5zJ",
  "key18": "67RU8hTbnxhdvbEvWqUUwM4yvsAdvejvTCtaYV8dZoyBMTeUH9JeowbrPYgpf5Z9k4oRqhsgcSHeLcC7wt7dMiMZ",
  "key19": "4VDtdEgiji1PKACEVtZ3Sd74svjSip1N1GymWZx2Nket7RVPWjks4sMnWYuQXstzWC57sb1uCNwK2PtHpfEysQYi",
  "key20": "4QHZKwAi7CWq3YPoFJUDZsVFdwWJdjt9phjhxBvVHwbafie7xg4BaKhkqQSpqwRopR1QG4n6SmaYmMA8wen4H6s7",
  "key21": "K31g57FNWXFjY8XA4ddoEdWqz7gtCUTvWm93qwNcPjzKwiExqPG28aNpBX4qmGbwrW5BEAN9HhGekQn2ebuUyXH",
  "key22": "3grnztNHV6ST32ZrPNoVHFpBmQFiUcxByp7YKRcvrw5jBDcAsTrJWWA64v28cADnuEnkY2jBt9NbvDCoxkvLgRyB",
  "key23": "cXmV6wT7tgHaBwqNYHT9R2JbfhsjeDdnrXDGjowTNpaKhviwZB9xGZxkzsyTcisVJZy3CxvRenBqpeM3BeriEgz",
  "key24": "3joW29uA8EDdCFT67pYXDEY2oCM9LNtCGKHBtnhteaHY2XAZzT7fo8YuUupFTXJUP6kFcdsupZHfiZpwETLnWix2",
  "key25": "2yj9vndoFVsKnpJcgsmN8hcjKUA4KA6xv8tv7BM187La9VuuAsAingJFqWRsD4cnKUE8rUSxW1VAN3c5AJfhtQDY",
  "key26": "2qcFjVDLVx8yGMLj9QPZ3obMhjD98PoygBrXrydSyemimojL5DrhpAaPy3CsS35vrWCQyTkPYiCViSU17CSiW9S4",
  "key27": "35qepSwWTQ4aEMaX75Ld4hhzMGcNKgvhj6LutcLXno4B9JER8f3wmfgt9hSTDC7Moa9yQUc4MBtHUJfBy67RXA6b",
  "key28": "25XeuaQFfv68VMNaRSeQp9N8nzk5iHVbUyumqTFMLR8mk294DQ5QfF9GXwXfRM3UWvAtBHp8Tf2YWymThAdfsZBS",
  "key29": "2aFSFU2S5WrdL8JAohDzZVzGM7qGmy421dPCD125Vg7VvReass1EHVg2NJpJQiEPE79Fut9HAAjWG7kSz1VZ5DiH",
  "key30": "2sFc9z1z4WmsyzBrk136w52FS8JkdxTJCeVRwLSSzw73YVJSGfd3LYJP5jGSapDS4tYTTjuFwQpSfReVodW7En2M",
  "key31": "31p9Zn1ScqJnruFe1qgC8E9HhMxsgqm1Azp3UyKxVzNPWb6WiqMgEHk1YEziumsDg7MPykUkQg4MeusCp1Ffonf4",
  "key32": "5ag8ccCRZuKvREErZYoCzJLPDw5Prg6pMM8W9SVji98Kiiu1XEMS7zhS6Y9v5zGWGuwm8YwpeF9X18hVBKpgMcda",
  "key33": "4V8mg338Bg9oDmcJYZazi21Snyq9pHyDSRYX5S6K962KkTgM9bAQ1VvfdETao3JnPUfrmgyduBtytJk5Nc4omrcD",
  "key34": "2y6UgXR5zr8UvEDNH4kLostLBd72XUCGzRwSCU2ERAp5wpAx9skGD9WL2bCbbcbVKsovn7UQM3n8WU8UCw7bBpAA",
  "key35": "2peuBEcPzUL6wSTJJf813gemcLqBXzC83cWMfDJTFiyYD8rHFMPBAgcWeNGGDLPtcsDZ75oLD6m8gdSVv5uwauRR",
  "key36": "2bRqKBRz8sKufi7NuptBG77ChuoLFqo11BHqtiHFKvtE8DhfgzV5VYrV8NL335iP2qkmPbdD25QGPyTzV7VHHciz",
  "key37": "4jvRqHR5QDgSaFh6ycAAwEqKaELmdaSj19xAC9cFG9zAhdP5uVRkBSw4bWZqVE6UwtuhCsik5L7ru9JvxVFkJJCc",
  "key38": "4K5KpGuotVz7mNZSPRf5xxUwqwvWMPRTG5Nf9UuscaJZMkYiYAf8idtEbdDhj8GndUuameyiJo3hw5ZBKhsih2i5",
  "key39": "3ciR9bmKCxXiuZs3kapTGQiyYJHUNp3mhXG7fh7n2dMKtJFpyqUwstNSxyMBThDuKeqhfWhGhz6a9xo1TWuJZPTg",
  "key40": "2AoxhQyBWQgscSdzfmsEsWzNHNbCdg8ELdQSinZwYvrKdneApc8xBqNDHcPxjy3x6npkKmpipYQBrxHg4YF5o5qj",
  "key41": "2DwLbvWvmJzo2mGdXmdYUafwqru73m6zbRjfmZdxYHDLNcNVyXMnA6YsrX5LnFxyTxPEKEBxKMVmiWfMsih2xKuS",
  "key42": "Yzpjjw87nMhvegZTfgKMw2KauwC4wUnTiciYgq5cKyFzXKC6TSMPAHw478VYew8a7mDrn1BMvuDHQaYiCeqNUhQ",
  "key43": "2FTC9Ra2YMw3mN7yTjkgDHkYHfoJ337Brp7vq5UFqJeLHFiobt8Y4uJaZm6ggem4zh8xvPPNStoufww39iuHV7X3",
  "key44": "GCdCAEJZTicNnsvEPSPfqRJbJ4xjmBAEBNWSeZqiDuFmm213C89rue4NhCZcVUDoWGwD5NbS2vrne65f5Z3chN5",
  "key45": "2Tc94u5u44EjEDgEXQDuYu9SVqn4SfqErKYK84AGMogdguqEAv6QZDd4kMtSpvJ4Y28DX4BEVs4LkmWkWnvStyWj",
  "key46": "2t1hH6pmci8ZzikpMvy7uNyAH5nWBBvYbnMw3AWRXNBweYqcQf7fwzMSCzPwEgrDhSJqjiU579XrYmP9jjNsZUtU",
  "key47": "4WBu7Hay6MFz8WNMPoXDsmSYpDeH2bN5ztNjECYtRYpBMknSHfyzzng6rH6dmD1WP8ijhgijcACw2JwoJ6Cs6x7x",
  "key48": "5qgLyVtFp2WAsndEHPxtnThmKyMBnEkTZzAC5GuGTaSq7V3CzXCfnfzW3u1LQmcamNCbgpAwLhiZcvASsRz9rWJw"
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
