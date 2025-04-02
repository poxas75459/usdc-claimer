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
    "3TdNyqEZPEVYtqvpEBK1NZoer5A1ko3PriBY6LkXP5MV6ZECYL3kUhuR6crZYAoJRkBbRFAEiRst4ibNzhxLzkTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MRQQyLw5es6paBydNCjhNwrBEgV7nc2erpiEhjK3zB5DByoK1B9LUGtZ1mnjGSEt5Jyc8k2GsghtwjELTgxs5bA",
  "key1": "5qr4iK4snDMxbiDf8qS3M1n54V2AdZwo8wLv7N3ycZ74ZTidszMA2RsFFvh94MZHxZ9GcRsTSZkYT1XDhHoTStUt",
  "key2": "iurcTFnmacmCM4gZ6BkDcGEw6cr6yjTwp3y6XhnbzuVaZvEf2cK1fF5szRCPPzQouvcP9VWfndXc3yp6kLsdaUn",
  "key3": "iodJKenRQcrC5uTBgoZhL6oNE2CwjuPnVPzqJeDRz9CKNQfCSPxziHU6BE2EDsoKtbQzBDVXfG8C7Y5oKDMYeBH",
  "key4": "54yGGriFLGXNcsiF6KEPqXYSUWdHxYyKrbzEe2LV3snfUmX21toa1YoLFpAafAyQiwR2pWsoMz2oSgxzQJ1GsCoc",
  "key5": "stvJtz3mAvG6rh1fDcovyoaL1jh9a339oj71xGTsybk86ar1fBw8JGPW3DwEtrDQiuHQHqFPogruFd6Yfj7rXen",
  "key6": "2DDY8CUfqoF8tAEbJfZDnhaVVS4kewok1BnFARyPdbF7WYVoz1zFSDruWQnmisb2Hc4krNNJgajbT4nePAcsT93a",
  "key7": "49W42YhfL7LBzvCXdYS4sKt6Tqwh9w1mzWaKqiJsavRNXd8u3ejmpvfW3kkJCy4k4AXPE5QErMHLTxxKT3unnyKX",
  "key8": "2waU634zy2nf6HNjpD5E4KDGcJTnHJG2ADFGdRPv3fC7uWSHNCySEQDnyrUM11ezeuYLvriWTsjZSkJafcRYTCSm",
  "key9": "Z6quUQd2ApFPJezrHArccdvSsAftyKvFJ5niLv5NVUaqe4r5xvu4M3Fdskqv5P5YGDd8kCgFiSxjqNaUSUro42J",
  "key10": "2aaUPd7JKYam8JXghhoGuR95frxjvbuur8CLuXGkhyFfmVhbeRYaDRWdFVeBk84sD74NBqKcoWgpUTECeE86AA7P",
  "key11": "2QwBgQREuhw3ETGdJMJgNS2NyogXLccM93CiQneo97UiWKAUdibA5J1yiVirgxGXqJ3WVtu8EYcZT7FiFwBQqzXA",
  "key12": "2qQU8VguxcKbR5tWTjQ9wJTErfXrLYoJ78UscvHEFj2ke2V3xFhWk7pAvJFvd2zKNAnrkMEohdbsXPndgGyAdZsd",
  "key13": "2Uyso7dkQM1avKBAS8qAPrJvscFgZQL3FqoWAUSugGpExDHgkjk56rPkfjUXTboeSV9XALbLtFLts5eRWRq3wk6F",
  "key14": "MjmyiZti6bDeVGnM1R3EmNuQvvyruhJodhpkqcTneZRmi6k6TvuJpD4vfwyZo2Ze3MaMAeQbwvUttHi1tJP3hDu",
  "key15": "4uJuCFBDn5ndjwAqKBiBCdph3b4cvjrVFH6qgbskEqdJjzvSGqnrAjuSLLWEugXH4KL3j2EmE2vUpMkcGiAGhw8o",
  "key16": "4VYYuPvhUnzubqUeF7L1WaKgtRgUT2fh7Ujop9zWjuDu94NbdSv9CqrHC6bA94AgZy2F8i8WUCfxMvSftLqSt6DE",
  "key17": "2uZYyF1MwYMPLFqMyC798VXqASVSpdT8P4vN9NJrLLDVxFYkqYtXL5rELyigKhfhWeiSPMc45D1HAoEcDkSoieC4",
  "key18": "5AAwkyMi3pFyt6sie7wZLq9xDGTyuyZtsVuNxD715SgrX55cCNFjL5nuwjth8fffeMDYZM8iDZB2KDfrm7BMu8p3",
  "key19": "4ZgJh4NxaHunyJZNLe9AmPiekon1pjL9PBKft1tHyUGTqJRYCWvoCjoiHgp1vAU1hj4zR14X2PWCr2RrVSQ5noY5",
  "key20": "4C5Cgi9GtAuqdwFR4JQTPmJo5VYixXh8xFNU6t9HUpKt6wVNxKEYVLJmrKhD1FQ9N522xJeLvxgWw2FBYcZZsVqi",
  "key21": "2GFjSoyvPVXBfihJqiFqNiVKSXexKaJfsnrn9zqksFbCWRCRS4Q9Vb4GGLXMc2h33d21kNwDkESpio9oaxikFoZo",
  "key22": "3aKg48pRSbEzZEY4LDjESse86X2mfCWyx1ZtYUVMnryjAJEW2muWWTyqVwy9CY91pRZntfBwcBhYTYwvre8xWaW7",
  "key23": "PPD4DuQ9JcjnkvxF1VZGH3VyNJdURhND7AjB1wxwizZ9daTztKAZAkik1sjcnP5kfVfK7dKYCug6Bkn9bQVETqA",
  "key24": "5XRVH441vtZHUGeqFUg5zpUPnxYJCRyRLqoRhpcwVpZzDjxduy7yEY9cTDPUU78EfZzcAJVwCUZzjoqroJ7YbbFb",
  "key25": "5R9iqHaDvF9ANbmD8Fx6okrdMV35FAtRAb5R2WhbgkEun4xTZsrV35XBhK6n2g9tpSFaHuRfuGCUrZncCFLKZg4c",
  "key26": "ta9MAup6AyXJC5kfQzRRPMpugKcMWxECBLcWLhfehYvaCKDLZdoVbxHpZLEpKeQnTRKPsnfzEH5DPPuQJvzWL5x",
  "key27": "AcBxBqhS4i5yCpDXdpXhWPhSUiZQfLBhQaXK1TpbzMroNZDVLDFcRn9gHgWNzdGAsA1kcWipDQiY54c1PjFcGm4",
  "key28": "DAB5yWNyM68KM7rLMQBkPoyoPeK9rmZrrPMuXTqqcnnP6EQQXMMSn8TKgkL8Pd37uCih1oLNYUKykjfkWDmedQT",
  "key29": "5txdpE7bbMe8F8E4XuZfGJQhayaPdD298QypZCKdWs5WjeKTyxeaxFZFrbAuejYZPBy51Cu3nmeDhE778KsBFQmx",
  "key30": "33MWabkmEbs5FTEBBJn9Hz3evVxppsZ1my3hvKiRLe4t8twWgmUuLkaGbYXF6zrTFKf2rh7LrjzUascdfd6CdFG6",
  "key31": "2Gg7ss2W4om4kpCju2VJdP4godvzmBdmQxHyAB29cccFpZxSRjCdRpPaukgr67wzngKn5A43yBYjQP9MA8pwr5Dj"
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
