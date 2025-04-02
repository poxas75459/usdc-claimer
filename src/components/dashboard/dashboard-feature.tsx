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
    "45euJBUa6dvgShgV4WqbgWECoJvPSC8qKS7m9STzCPBSxtc9j9EW2d9cuuytGbH8Pf3qsozMsDNRdkQQLMLQcLYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AJk4RVsRjAtwx6HpHo2xSLQEJAoWAHzvtXJktc1ZM6dtcJon7cPPbgJQyywnMyMPpbDbshFBRqhqB4YGWy9F2gR",
  "key1": "3TzeBgEAJEy2C6R1uxd7LUpgbmup2mdVqVZ8VcbJ638ZLaP9TKTPqwuVZZNDpko1ThukjA8TrgU7WvUe1Ao1HWGj",
  "key2": "6euKwxKEUMn5Mwcq92GRjH8GR9GrwV6xVGr8BpUy9TR1sn7LF5Pj3ys6Zn6vb8jNMJNhdyXYL99YHVg2V8wRBFS",
  "key3": "5eaGyWhf1DHxeWX2f23Res69bKJaHMVfyPTiK6FtHk24Sv5DwBctjLCPQrzbdg6kqRBSk4gk3jcp7WLqhQ5bD2hk",
  "key4": "5VgWixUQVSJgxhzc8zTBnuUZ53ytvXVkDHaWMzV9tiQ6e3KgUNpTc53BnAskMFwxqm6NNo3Jkw6JiwrEuue9f2cj",
  "key5": "NhwFMjseVrbLnuUgiJkPsML2yinGGDuZwwFdM2D96jgCvuhp8AHDobsBxHw8S1QsK1NWtpX6AfPDyegLFZeaunk",
  "key6": "5p1US6xEQhe1h3h6tj4BmP2eheLKK9vxbKxZWxPjYhmAZqqkXH8jzeNqTSYdYEkLzrzQ4L4Mn27kHnwoCJbbzMei",
  "key7": "4Wh1UTtgcosTm3f3A9HdFT9HBaEyTSpLYpZhVwXKbYfe52dkHigjkLNdQeQ5Z6k6oLwuwFzQHm5UQngnynyB5QaD",
  "key8": "5QVK7Jj8CLcXaSxoB5jr2c5T1jGgScy7KdwByb8FrCrtPLPmo7ig3Ri5MSoLEjRFapsaw58cYkHRq7qxw1gB1Bau",
  "key9": "2owcTjtSu9Qy5n4jevmBvkmm55XUnQyzjgBHLLkahd86JrYowNeN7r6PZxJ6yStpLtu6dZZQcudDeC2eEDokc2QZ",
  "key10": "3X3JYQUAcV8EcSTUG1v1PVGcJmmm5Vx1FVu8SArkq4e3vRUHhzf4opfh6uGR7eLomr3cgzsaP2MP1Ekqru1eZDXd",
  "key11": "5qTNmZWNvoSUGufDuMtEA9q4ZgRUaKQLGteEh3w5Gw5UNZ28aSo8M6daDqY8Boqk4pjFKcfarDgnEGd89TgSX1Mw",
  "key12": "4ytHXLadigBQYLvgdZBAqAMUAbjJ2F9bT7y3vN1DYin9RtQ7vxRWX369WXGi2SpkQ9UdC6EDiXNHTcsNkQXKHJcC",
  "key13": "4ornwzQQPQSnQxXdexfi7WGGX6iiVUXTFutwGaktmWSg3V6xvzpyFzx7C5f6XynWgRfTsuo8z6QMzuVUmyKGZhXs",
  "key14": "5H67pFS31RShRYUndxenadHpc6eBvmrJntSzS6R8jVR1xwsfvitM9mx2LiKk4aMvECTHiYjQttbfZt2SP7K2o8DG",
  "key15": "3MxR2QsavpAEubgPGF8xyesXPxELGNNoTuYU8qjjWcgkue2LjB4Wn8EYwFwWgn35tyipRsTQ8EMfBF72qm4DofpK",
  "key16": "58Fq8Vtd4N7jFk1nWApWVpWVVqmHStruhnR8by1pXnf2KXdm2JejaHnuWtS6LxkcqXGLHmzHKHQiGUekZ8eXq9QV",
  "key17": "5nKW1Y46mvunxC5ydaQNiuaPmLctwFNVbJev81ua8YzJtLEyjGFDtpnjgzJT8t9pggW4hspE8Y1QpCMpdxsKa36d",
  "key18": "2EkXJxZ9ZvPge2uJyRhZxpiENHFk9bg73u3SDsR6sNm2JWFTA55rmhTFqrdAK5Y1zLa43zBBrtmvFqD7Ue7cEo9B",
  "key19": "3s7NKuj7TwE2Vgn7HULiV4sn9jabBjMo5hxSuyBv2TKKkwBUHqUVK2vP9TtuacLPoDELt1g4ZR9VjDuQGqeNvfSg",
  "key20": "yKtayMV7DJcTkqgtKaRGgcWSTu4BuaccWNhVUTwf4BY2pJLsHeg8c4qposPCUXy3asDmLKDfBS5xzodWgYUQyfJ",
  "key21": "dpb3EPaaWwfRjJdHS3b66vqZw6dn48Agj74b1A8h2sLtBCYXR9E2iQxvpEjsWZYPi9Fx7M9Cjhc5hzvVPg16oWw",
  "key22": "4udcKTYxqywibyrvwPcJxx3FzdBr4QniE8EhPXnW1p6v5bNwPUnxQCV3v9MtFRyBETwZvQ3oRe9fu39zRTU656CE",
  "key23": "5GC64iPCwdStUXhfrRZJSJKAYiizanMUUe7BidgGtcBpBYE1mq76nwLFuSUbxhSvSnXwTyZwWp9Zq3V5kWp3yKLF",
  "key24": "wMYan24cdZhZ1ugfj3ktahLbvg2Uxyvua2EzjRgBPYe44wGZSS3ucXipiX8CsAzCwyofnAKb2UNyrkum1y9x5uy",
  "key25": "BtaEbfStc7mUJ3APH9j75YAEvxCCYxdXHAns1hME5WLnuZMQjYEqfjkK3K3h9DrzvjFFT9SrZdNdNUjEs7DRM5b",
  "key26": "6hEmq9tK3s2EVWAdNbTEmwT4Sxwd6XvTHSPtt9bmunnMfkgotA1V8Mz9Y3gCHurLqrgvWgQoaTFcCDRehgsq6ii"
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
