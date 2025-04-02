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
    "2YhgHvwmrCatTH9bcw7VhMZCwExvXgmqtMK4DoJATTWJK2P4AxiNWGdLg67hxPvmDK159efaa6DEuoiMoXcXeEpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZLvyhT8shEmTfXn5hZf6Aoy5cDmQajsspPjb8fekqpDg1qLUf3HCk18oGbJ5oWZM9YdPBjXCUMKnViVyrWdt1LX",
  "key1": "21ZZEWWHz4uytUN7Tx4YkzX5nAoMHx9JDQoMxfdirRa9B9WdRXctvqoQUDC4dbtCMcDm8JWMLoZNpbt7wbM99Gnr",
  "key2": "4oGpUcs3LgCgdrbpEjE27NkTVt8k5CYHKsDm4v1jnc7fFuyU8S7guYm7BcnVtLEojPCZVa6SBL8LVBJAuoaxRf91",
  "key3": "5KJbKLXn8emnaJHYFDCKzLHAgpGu5L3SPp92qkQvU5i1fsz2PN4uRNrJ1ufHbSNfWJ4PpTA9X9qtfcEDjBhLNoLC",
  "key4": "2h5oGip81hxGb61y9ip2nwL43VQVDgUnWTZm52uyWjGRUtQAef9qRjmXzRdAsU4PhYfQMd42YB2ETDXdi1s2QWyZ",
  "key5": "5MTBmgpPsZmuCTaanMqEnUShNKRd563mv7GpSp65otWBu8QUmiBey2efY9HSwXbQHZqHpobDczFkwZxK4AVw25Ai",
  "key6": "4Qgz3HrW7BSvqwnChNtVRBb9tEZNnWz5nyNAfmRGSagukyQA6ow5p6XGcKC6CtCBe3C4UUR9qtsPVepK1wjG483Z",
  "key7": "4ry61wC8sYZpnR78VFBo9SnMnQqTZwMwwcEophNrViXCQbNsiKLMzjSDPM5ywmi6tot5RVQLe2Di9Se4NUnuLUDF",
  "key8": "3NGcboLVkeZF1pQe6NxmgKyaWGtAjPncG8V7XeYFWSGaeYk8J3Fc74QtUS9NEgwzNuUCWUWJc6Nyoz7E7yLr4E42",
  "key9": "Vg9afbAW3Fktyoc3SArhHTDvaUhorqhNbW6o2XDwsdUJFQ9D4q81DMo9hD94oXgyYxmwrcnnGRoz63nHcCV4sBP",
  "key10": "4jfHgEUSURMfuRuBmKSEMGbcixwHZgUTWpKux2qLoHBpRMLQuCfS2qTo3g6bHCbv3WTzJz5rZ9pWCfjRAztQWbkV",
  "key11": "ADEC7R5hpe7tyBBobUjXmwseeRRYmHAGS2PoHJCpcJmbGJ6W29kXKgAp3qNRjn17VmDrqdwR77H4gdRnQrT5cgJ",
  "key12": "3Xz1CGZSa51np65QtQvsRhrhSCuiNJ76Pq7UoXCtdGZhcN44FgLycPBGdZRbDy5zUY3WeDY8sSh4FCCDumZnH38z",
  "key13": "Cux22ZLvSGynwr37dtds2PUSA61fhweWwquigaZfPNo1SuCHXoXaUaptvGicQVKsAZjcMticZsoHGGtaEzUq1gP",
  "key14": "5yKyqn32gyjwrmpBCMXXkykprCXAZF6ArzPuQ9HXdeGyLVmBr6YLqeJX4dbTMwgNKyhKm1d5GkD4WnJ4bZ2FGi4S",
  "key15": "4u1PmoNtUsX37h5B7Yg7ey12C6wiUok8ddeMpF7TKX69igj3Nxw9Pm29HNaHdXSXXT8wJYrsL3kUP2M5Nd6YXtfz",
  "key16": "5yLHbkzGF2KjBG3Ck67DbvpchKqn2eEqBMxanopPUHgHdSSp8f1YvTMGohymskQbyHduACUhPybGHRGbVJkP2ivk",
  "key17": "JbQy2uNZjNmajV8SAVNzE8Gs4wv3z6oPWoKJQnFcjPzmYkysEBWU7RUxr7B35jFZY7Bhe6W9UmvKidc1EjGWWKu",
  "key18": "4CtfJK9CHSDHLM9fwBmKYWX7hbo6cGJd44oRor8j9XjU3Lf4GZmA3oEs1BHjjFJkgNVEgVrFAHoggsucMmsyfKuh",
  "key19": "3cGih5iGXmCiDvVTc2y4sSB7ei2NhULgjW6zBiULF2jX9xjbXtu997fz4fJ1GNfNWxZd9t5i8BWoMJpJzJxnz4gi",
  "key20": "2WWLc6ugXMX7gTuKCoPoLuFGgUZJqVtuacrBu5L9ZKmdJhDAnoQP6zeEwpdV1mD79LMF6jQJ8xAgwSaskt7VRwzf",
  "key21": "5nDQKcLdop95dbS5ERBC3zCQW6AGRRWwDFuFam4rHYxM3t2aertGinpnLTCVzLUxH5VN2ispweX7MLHYWZ75oBCU",
  "key22": "4oi6ioJavcmrbbSwMGWsSGWxuvMgddYQGcEoidmztG4BaQKiAVMWxYZ9XGw2RQ2H5AZu7TwG1vr3KzhDJedZDH1a",
  "key23": "31sFricGZ8kZWpUas4TxgE8zTfFC5jfgXoAr31ENRGF7hHG9dfwPJUbQ5u5TGwPWCScEfwNVQJojDtw2mXNoxHDz",
  "key24": "5fhaFwiCHj8W19uUVBvMV7oTY1AzxkzuJ77ZpqPWpvqkNUueMJQrbUjkyXFrKZt3TrAd4F4S99b178dVHB2wja6F",
  "key25": "4QsofHmcxxv46f4naX916sXgE8N1W3DaBHr2boZ73vYhqZ3DwG1Tma1GDgtCqdmNTv225xTyFi8Si1S4grozBC43",
  "key26": "E3hLJyyGVk8p9Y2S245aN7jZP1bFvHW8p3eY32xArrhXt8y3MieTsBxXYJAgE6czCs3sncQftA2euiqSFDzuktQ",
  "key27": "2TSw2c4t7zReqK5MwotDbEtDbPWwp6JdsbesUzBhPNegNaJzcyBVoANgFwmVKMNuCgTi96rzrfchP8Jqet1tWjzk",
  "key28": "5BLWXB51UCnfagcQpgZTUty7mvMrSa5iBwqpXKESzDc2UkNG8uFyxqXgsMPr8YeHK1MidoZHc6BoEwyQBgVxH6bL",
  "key29": "3f3dgQwSjcsgVsmYTrm2aZiCUPrgTSBge2YQfJckHZvbBk8wHRL1zvpXQMJ938AtmWH8JkKoWx1vaBkotC5qizpJ",
  "key30": "3zwCgMgCZipcGwGRgjKriY1FLfopgnpNTP8x43czoFc4jNFPSHKA5h7UppJL9W4M6uaihFbLnjr3B84R2dt4Uaw8",
  "key31": "2yfaZ4gSAcmntz5MSBGyLsfZS7uxEcbzwSz3L4EeJaZRzAQ2uGt97DqtaFiPE6wpn9FWPgicYhkAkLhSj8R23fJU",
  "key32": "39TEb9vVVYGmezgW71pgsxwbAfyt4kaf8CezR8XZj7hx15xga6vpKqVDKccRAShdY1L3UwTfcoCeV3euPJP3Tmgr",
  "key33": "4Cig6CbfkFsa85BwQNJM76ewte34SVsQ9ep9K9bVYdf6ffVN8MJZsYpEM2zFYgJao4gZcpJHkj9m1BTT1vETT7E9",
  "key34": "3LyvTZL9omXdds1UzEQ8vZFEQCpBiDqZbBzye8ozFTbFPFuJQpDLenPVnceY6xY2qr7x9HLsS3FxdxAxFksUX34D",
  "key35": "4kWfJYBZAGhw2wXvA2d1TULmk5Sr6jxXApWojXNArQqjM6AFK6Rsbxw1osKNFBRf6EztFWjaLdMbhRUVsxpUnE3g",
  "key36": "4AjN9d4rFrYEp9a1Yh1NtTvRL99LBKAT4x8ZjNRaAMtv26EY9uv4LJEB28SjSjuYAoz884b7h8ypHcJYrYQhp3re",
  "key37": "2h3kAYpHwHNaVWPZMehvc5qaE4oWKKBJ8fQex7PdHAv6eCYbeGgGCAQCm5DZopSUJq5haCDKerpJc4ia4bSbnVsb",
  "key38": "E4iwQqd7a6Cjw78Ra9VKUbMVCs2m2jQ9q8z3MTsNGgy1nu7Kej2N4o873YFkqkscDWCuXyrLmkyod2gge7WcQxG",
  "key39": "29NzfXvAZypLJuYDBncK5gwv5LUVurjXuxmgNCAAYNh5GzVdv1KoG58fDQhcKmg3SxaALyD9ZE3piLwWppK6vBgD",
  "key40": "2bPpFogity7e3E2i9r6a4gqKtr8LKjvTYbgR8SfmEMEu1dhTapVfHf8AubNfb2Cxo7DvBkjkzXsmdqGRw3yYN9YL"
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
