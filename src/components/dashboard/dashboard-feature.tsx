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
    "2hiU8SwsBTwFqD2QV7TJWHcr5aVheHtxDVVS92UKAgk3LRv8YhrC8h59NMAmL3TgHABne6Yf4RkrXNJvWeXry1eX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T7CXCiUx4vjX4uEvbWgjyZHPiKESsUC3XZW6ysTtwDLZY76q3FDticPr2BBh94ZCGx2XaBafHTsv2mqprJaaxxy",
  "key1": "3Nd8gr7WBoGuoCYzk3gZrHsN4JirSUT7Z717p62HShfHFLwe2xSs4FWepTmLfs7LP2K3wu3yBwD716zb9GwMp9m",
  "key2": "CSTFSYWuZDXWkfwcR5kPzBfeZnCrWZ6KwGvWsPtZwsp22ox36waDmXeegfcUnMX4WAggUaUa2HLQgnV6yj9R3F8",
  "key3": "LMSZut6pA24wVhsp89SytkpYBjM9uADz7BthoZrUwE29PhPMY7Ck5bBPkxPXsPUHKqDu97m8r75SYmJJ52q6dnJ",
  "key4": "3y9APD72sdDRjNTCT2erzHsLueGDfzNLuTpnQ8ahzafVGZrgHvgVpNFpo3eJFtyG6U857LS2a8wmr8jkVFRyczQt",
  "key5": "3sAz9B4u7SwjsWEaaAbts3Rc85peLqLWGN3x7Tj4KU5VSs23LaBzAbtoGTFnUkH2CHiANB7iUBNQgZ1CLbrJ1Udm",
  "key6": "4qFvrWicrm2ayoc7Nppa7esxZTgggRWoGB4VyzDJ4aAVhdwETVofyYQUREKyQxwBaB4BCVoNJHb6pu59cQVhAax8",
  "key7": "5zzAgHkBS4qwTKFdTv1bcrsavDK7Zox73nMeA4X14cCQHGjzRqJvHyPunj37ZkzvKTuUAYfGsDZVjaSyqK6ZbQaW",
  "key8": "37cHiZ3wK4op8Rk9rAxnPLrjvcNr1rvXANR9CTWcoPhnWkZS91J64Sa5TiMvVTHVbhUvQnJP4pNyrnwQRL5wjdZp",
  "key9": "4zho6YAxbSyNHCWgxrG7b3P8oTuVUP2tAAE3vWVgUZWn9nHzPvejh6p6kugS4vLboFxWneiTA8AMEYiK9vH9zyda",
  "key10": "3Gs3sBzeNmLTyQ5LtBhZNYa4Cbp7YSasEPezXGmNVwEaGgiSLZeMQSavoc5LSy44JXCPpUCrcZSby3JsF9APP278",
  "key11": "3hjEj1y2R5x95AvE9mMgsCwKjnYAKRvFpcv8bUgNnuFgxsv6PN83w3ffX7UNrh8CymYZ7DVwgTwxaBkdvseFbQs8",
  "key12": "29dfG2KTvVCPsMu7EKQGwbnecGBpadccjzdcc1UauBRkmtnb7iWzALzKYCZpcc8Rbr117HPwr5s7momyGxKMVpyD",
  "key13": "4Tbq2xC582R2sa9DyLh3GuYcasEFpRxLfcWNPFWHjmTjZYRM95jifTG7KJo5DQD4Rw7Jnn7rqQ6w4QCFfNnkqD9i",
  "key14": "4FWZ5Tc34ykKLkhjScPHSZGptYrfcvVRRNPZdkuzjwLeQf14x3duXv6kiazQ2ugXTqNJudvHyszFEmsp297Ud4nA",
  "key15": "3vA6zxAZWuzTBm8vBNUwpGLZ1aUa4tZ4DV9uWp4NUZZvummPmnk4iiHcQ8RYWK3RvshVN8f2CNovQwuvBQBGdGZJ",
  "key16": "2iFeBTMQogyigBc4kNUxn9ZsFH81Y3ognsb2QptomGVvk3Po7KQR1Tna24dfeXMsx5Aoe3m6oQu73tk1JQoTgt1T",
  "key17": "3cuYZsZzi4Jak5A2rdkt7AD4GGyPkHCYYnQb8TUH6CjhPEanqwLPi2NYWgtGhUvr1Wbh6TpKXwBDJSkzkJA7osLV",
  "key18": "3hFM8Fto41hobB2hGSAkVAAptzQLgBYG6YdvkYpQrQZhqJTKbuT3y4NzR6gQ39JfW2yVubqkgki5rDz1u4PBehNE",
  "key19": "4vwyXQ2FvKf1JE1WpHvuWUGRe49iFDnUjLfALTzaj8BJjg6uHb4AnN56daKz2oTjvh67gPer8fRDCxu7dNpcYAat",
  "key20": "2cFFHteXKPXpwyVgiDVM8cej4bDA7ohswcqBhdVNJ7DDyKm8S1HwcFPEJWg2t6dcauwe2vYsWHFXPxSD8XeJa3Q5",
  "key21": "3obJGbP6zd5hjQvv6yMB1XgT8LpNEZjHAwVYXjTs3j2fvMtYzP6SFxNCbVb9iz74yRJYstGfWURg5zcaQVhwiR17",
  "key22": "48J1VpSVwqrEoEwui33RtRo9GPsV8DjU5VLzv9jwRuYvLw2muX9dKEMqMjkb1Wre5s9BLjzEV7Cp5vVazPVT9jsu",
  "key23": "2M1jPr5sG22jGbGuAW3EutrnnjteyRJ91DphEZK56YAGqhtKpR4aotiT8ays3RCKB72eN58fCs6yJEmKBiCaBX9c",
  "key24": "55dgAF92qq92vhpLs9LyDDyWo8DvpXmLgMpqAmgbJheJKvVospFF1RLVR7EoEA6Sdrc13hGN9AxjMmLQ4TupAMBQ",
  "key25": "4LwSxbkWjoqK2Mk4fnP7uH8oN5EspWSmr2JK6qBtKFoZg5kFFwvuF352P2RrGguQir9eNJRjU1BignNSZocug166",
  "key26": "sDtViYxJajCQFeygJCj6gEm2Vjm8AZZ1w7sXN1G4LPVVvhPgjzgxbqYMhnPh9KkKznxPYRGCg2K3HxQ5iRXN4on",
  "key27": "61gPGsh2zgdRVW1pJbVg9rBcN8VgyyTGSqsS7M1MQCTBKoEBVdHfkWTgieupHnuiwPbvXuBu36o3SAbyafQGd1Kx",
  "key28": "4gXmcAZTXiUTvhbmvJe3HntZBE4BbQLzhnmJWmTK5Zw4e3zVMykWrULkswz9gjmK1Q2sy6ZSSAz6SJ37AmbcyL3y",
  "key29": "5FJf78aZ3JVmmCPLuNYYGhm92KV8kcqGSb3CXjkJYE5EfNqT87d2ttGBF7qe9YobAZY5pLXxV45vqwVeQ64UnVPe",
  "key30": "s5FGwwwLUxYjwcnY7kzDxY1K3B9Hgx9Dev9NcBMPRg9ckfunxKKZsMb3CHMpLhEen6EyGhVHBR4q6mzc8amNKbK",
  "key31": "3FJCawwVgKwogz8DG4VA89KwsNxNgkuDZkeb2L6XBy3SPcVXHRrw5z8VKvmLFoa9N73HseiYWNQjKwS5wevoYa5Y",
  "key32": "5KvhvujfS6p8JMmHk4kMUvJ4zhpQqLfRuVXTBL9NjrPv3NAsMzPUuY3E7Lw2dgsKDuyMh1mji4Dc88qUWZqXFbsb",
  "key33": "1TgzftJwFK5iyUgLXq6ESf1ndfBevGBMwqk8kXb1D3GoqAmJyHb3wYv4MSvLUzt4Mf7PTbGSgLAySHCPfiWKqB4",
  "key34": "3NGDb37UH37Yt5hB6FFeWg9wijfGsWVeX8VcATiqJeApYXn8whrXv7nGnzjPtJWNR3dmaC5b4RTgd633AJam85j7",
  "key35": "2vMReo45YPVTGRQAZ8CpyoWVgBz2MvEXRuZWXL4Amt7bGRUHpP9BFY3xivyt1vJXaSiUTEiad9hYKGSy1DLL2qSQ",
  "key36": "4gS1qVHQ1x8Dmw9BjEyr1vrc399y7tEmnFAnDzK6bXRH9sEMESE2Ggjc3PDdV297655sKJeeUTYoVyUTMuPvGZVq",
  "key37": "5RGQZM5pG1F1DmHNg15nmuiRhBWRt824Uof8r8WhKUaNdYLcCPn2xWub4p4KuaSxg5gr6dYZpm7QJJ7BWSfsof3r",
  "key38": "3hrVkmSEKRRfMUj31mRjn5qRXnMHJYfkvBTfNH4Wmw1YgoyQekiL6APiQcAFqGGNmzS7kVptJQXJ6ouk8tTfNd1u"
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
