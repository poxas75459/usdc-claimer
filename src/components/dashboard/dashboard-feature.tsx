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
    "3YFDU4Cqu3sbCNPyU3oi62zJcii2iJXtWadYJ3rfoH1pR4CRJmUVb9Y2fwgTekDqCQH853TcfoGDHa9gmzDhRytG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hopu2BSF3xGwFd8RxjjqLj2oGouy79d825FSEobN5JxHQtUrXzf1eH5SoBBajQ7yzrJKKmz7gTirPZiwCF68eYJ",
  "key1": "2ormEEtktH2jYnLMmbPSgyD5jcZQ9uCedVV7DkNV38KnZyNAwRmjYxvGnEkivoGmBYkyjXdUHkqaETeh53YQa5Hd",
  "key2": "4FMTv8hHbG7dMd69RPYXoWxymncQGU8B4rQWARxazDkghjGyU6uYpfkbX2zy7tGwpEVQ5WoKDFVSqyh1PbmopLWP",
  "key3": "5ZS2s9L7YHZDGshfrNzNLSfBpbXuSgpMgpfHEXCkEn6ZNAd1Q3oFW8rvaHsqq8jUoBNT3wdMqBq4CVSsFWmR6E29",
  "key4": "3dQNWJRuDbnNQghnA6E3ciBcqzyrGvDEnhCPBge4sY4UncoRT3xjDqcNLf3pZc8GPE3EqW1qXYvSQbL5RejA23Jd",
  "key5": "ti4Lt2cBQyTAojB2NpNcqvEVH4DZDg5NY7zJfXJvZRXF1i8QASC2KRfYkLEABcy4RUJELVLkS6CsEGHFTaJ8hj5",
  "key6": "obWYFaDcjQ2fcL5HXESvbvcGbXgdF339Xpcw51FaGsrYgsbvp4HgrkcifMakxL3qcXUq9kyh8NSVcbJtc67DW4s",
  "key7": "52b8QQWHcZXhU2BKrr6Rx581UF5k2H1i9QzjjojTp9htNheqzodWoUrgYjqhmq832pNEr76PRLrSaZ8pzNxPmYoo",
  "key8": "uGWpPMsKqEAV96N9mRx1AafcCkVf8vLNZA5WM98tiK9FQtessRoRkCcGht5zBm13tVJJ8qbyFNZ9gfKdFTn545r",
  "key9": "2dwRc2FZd6GNrxXJq6LPSjxgte2jKGGPmnR2fEjDD7YdhtcRtjtrZhc2z743QaT6KHoFwDc11fR7v1v2wZ8A45qz",
  "key10": "63j9YGr66uqzSjaEj7iEKrv6kKzxqEzgFBvV9aVFYaZ7dXjswfkk4SXerFSKUyMgJ6XfBcrDBcNEbpzKtTaotnDt",
  "key11": "3Ut7mXJ7P6W8RWmgtq8c7tdTjcCwnoX7JaaBr9SBVHvemu8Ee5a9jZCESPqYXLgXz9WqUEQLUoQhWBaqEoFeRucX",
  "key12": "2jqQ82Pn6Wfubm458d9QpMNQHwSWKW6uFbqH4sPhoXdxSa6R9s6BRjfRBQsebcQQzJHzKjUKr1udST791exLwzfU",
  "key13": "5AnUuxoZt2UmyNP3hdzEjXeLps9jMC7D7i56CGRikhhLf7FYYCjp2T1pEQo66dZ5T9pLJRqXsUWbj5mTRAn58dTf",
  "key14": "4ZGmRGe7f5Sg45RRkgozpAGjANT5eRe4s2mUvrMmSv4gzvXk7nYMcnx5LmVBeXt8ZEkbTc9MCVPBkPLMUtWxuvmW",
  "key15": "5oiFn1uT4e3E7mD63UZmxzfFj6ZQrBoJGiv9uP9unqMt5C8BAS7ZshDGLJipGpHtN8RhcSbFjh9tHo7mpHv7wMtn",
  "key16": "3oWgMBm1edp5Fgaau9Dk972da5E2FSbugNWDbmSZt5EtAxGVRuj85AKfZc2jNmwcvfteCRRSwsZBpcKJeMbkdmfK",
  "key17": "2m24AKFYGRX5gYADvW1h7bk6PfPnH6HKNBjpJZJo9bPaqP5KDGmqgbCFtzyVvSXoTwQ4EBZtitrDHhXb79hxuP2W",
  "key18": "5kZ9c9Zs4KwXxGsrzhhvfogvY7EHpMXBhQWKbcxLMZT2faQawwf3GA975FceThfmd9RjPd3qn9VuHEbvBUSvjjHe",
  "key19": "2VaKizrbVyBLvoFYyy2RA4KaqTwppy1uJLpM2NyM8gmkfXmwX5DXxAP1xs3Veyv9qWDg3scEbkJFPvoJX7UQvfV7",
  "key20": "4sskcUPt1xwLtAzLCsWxuEMvJSrstvQDrN8BesixMKkvkY3mz97qDeDDTrHcAz87PvaE1NTemd4cQBpAz1Hxp9gH",
  "key21": "ovvoWYXBTDtGSUr5qJr5XEj7atjrgdP3tPm3dnDvFKQKc3zcWWqE54eGPS6vkZRjqYafB5g5Nvny7SNSCvZ8VYu",
  "key22": "3N3bwai1PZSzK9QemqEWVBKSmmAmnMujQJpKqQ8yzTnc81B8Lzc1u3fyCBVPDBjurPt4Ar6fe7voWzaCgsU6LFDx",
  "key23": "5gYfX39L4JYbHBrazxEWCtAGv8wKc4A17e5niJWkQTfV5ijZSRWeT819DtXBT8MmYFPFAgiTAGWzfhme4QVUosMc",
  "key24": "h46m2dEH3Ak8qXYbgaum8axaP4T5gSb4GKAgEgVet9P1snap3bPC33V1bY191VyoDS47bpTMRp9cxjucqEXRY5P",
  "key25": "5ftMYa3shhhE9AWe4P1Ndtjmia8vybUPwNqBejX1tdJUayQVGamqnMqdhsxoLzQ6jwusyjihXGrkwtDqkpKvahR6",
  "key26": "5kiwvCcgUn2RCgqv5N3zyz51zQwQzBhnZTCzQCdkzPhUG3qBMpJUvRV7xDeLGPZEoHBGr9La4vywdUZmD61s4Lk",
  "key27": "4NxDHUiMHfRxC1txHgrQxrcdnrPDSXqnz5LisugtKyJPE5mAJhWAwvEKFBwP6vV1PVbXJDSuRbYysKmCGqc3L6am",
  "key28": "4yNHbPsHaHS1X9eUEGK837zpnDKVdDTuoLGK2zohrZ5FXNXFYPVL6LJuyrdVq22xHJVoGJiQNrzz621JqBTC7kFb",
  "key29": "3f2uBKXUbzEReFeDEdWWyTDqWa67rrziVUinsJCLs5V2D8nVN9Lw81xLRBG56nTiKNbyqasQcWNxyrh9DiFnniHk",
  "key30": "2bVj6CXDyxmS5XPPTLuUEoZavzXHv6CGenLaNyZwoFqD1vFQnCtdbpZbBKcFWDGpHXHWwGbMQmi3ZKXrThJKsnTB",
  "key31": "2iM4oAyBL1W96YA1fJUGaY7UZMyjoC49rxxDHTJqcrFBAo1yExSixivJqVeJeA1vt5j5kLtczoHNyVEm9CPSwLhE",
  "key32": "5m56L5dKz27Duo5QtZ4wX1zakobBg1xr6fwe53zXWaujR5P1X9t9yEVnbEuk6bMuByPAkwYgbGnTtE7W3FoDGiMs",
  "key33": "4Nu2jrAL5p3oG5A4mAnDntCtkjpW9tdSYajpRECGT1oFuPE9UyDPY1mw15dZ97YbBD13AgqC51Qye6Fb9uvFF6zF",
  "key34": "2Mfqa6sDxvosuzB95Pvx9R5dgNqLUAWqFZUyswDTVVWWxEF7XUKpWduw4WkuN6NgfJFL7BFPE7t4F853xrDvuMYf",
  "key35": "47umDzwhGq87s29WZkmb8Eyib3aH4QnyWGj5fEFX5QPiRU59JCGcT315B4JuX4qBTHikunZj4uiQjjYagtSWCUeQ",
  "key36": "Lmdf2Nqj8F6UTQ2GVSS16VXxvBdDSPpRhVunDCsyLmKgLYeUEbX6NSSvbq7344LYekwbdrCuzAkwxi5WdY56GcF",
  "key37": "4ZyyUGafcusdfsdSTuRkUz6bBwBsEVB9P8gbrfywGps2TCTEEgCvuNK2vSe6wUZvsimFjvJSM2RMf69tigRjwhED",
  "key38": "2d28CpXD6v6Jbzw2P3p4xuAB1bhrKei1fGTdsFQF2Da5L2ihZzJXW9X7eCMKZM4e5LuJD6j9ZXNe8McG8yugtAmm",
  "key39": "2stNmgEc7cQ1XeXdZ2gxAQLVDJDkubbWP5MPzjpyuV8UMxvX4MX8BxWJ4b2HwfhEvMamBsgNqvWV9h3jYvcQKkWP",
  "key40": "59LSFGEzFf7R6QunZW5udxKFZDA6BDNfDrQAdKwFgFVespMpFSYUmkr4nKrLzNM18bXSMMk7gHcbHooR1UvjVwBK",
  "key41": "4aHgAAfL6eRz5cJoaNCc5uan6dvjt8Tdn6MNfPs9dVycNAUVXbdcXSLBy93AdyorBedRzpCuRVHx7EKdtzaWthuc",
  "key42": "2ZjeUF8nB8LFRG9a9cN2FWqAu5yUcBTNp9CHmRKf9gneBv7thsHBD14BfrGqome1jMWEz3NCLobsvvQKmRcCoaV5",
  "key43": "ZasqC4NUbctSsV3JxY86QJ8Z96Sfbr3ojPXncNAHAo4dkHbRHxcGZxrsycwqyzi7aMN1ZJaSBByxm3cvmzg4BmK",
  "key44": "4drTBb4BRYHK1boZXZ6F62hpEXcMDSYquGTTKWLFCUtbQe5GBYR6gRTUbDkKojvCbdEhoG5rLRWVjSf2JuN8kPbV"
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
