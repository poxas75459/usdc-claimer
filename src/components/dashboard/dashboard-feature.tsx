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
    "3rP7rVvadboodogFCBTK5hGzWLPwL4iLvw7J72PqztSHhb571QfWLnDomcTHhCK2HnYgiY42oKrRAz3Aq87mttAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w7Rb4EyDJAG5ecuAyqK4iKFKjtsoNvpKuCcAP29SkSy58oAXJvYTHXRVSyiMvBkSDw2m9kxbUmPRbzfVqH5g2aw",
  "key1": "4ixfZGRVbFVGof5aciisTwvT1f5uUCCzQ37B9ciJkdThDUXf55eBgSaF4hCCWjJRR7bqexncEHX3Myt2dg6sDn18",
  "key2": "pZdKt1S64a9vBtu7SUmxxcUWSPiL58M5j6vNwr4sFRsBMCWH2qeKZJravDdJQDVquyFRZDbyrETAJgyFrKHELJY",
  "key3": "3xno2YtTjWKZeTctV2BYbdaGtiM5HSjxZhwjMhQuaGWdCKbu332DrMoEWBphhhZQBMuJuYere7snX6TY73oo7C93",
  "key4": "4B7L6obyQqQUudYqM54i9XpCxbGwXrYz6zzbSTQp9NQi9grW5Rh6B92Xz8mcdFDKUJa9BoEoeHfwGr6Lj8UHwTg9",
  "key5": "2PWvcLJ5PT6BXiPABnntueNSG9C8brrHTFtp2NaSTj3ZK5msU6yP7HyRoeCcRzCgwDmDGTYmnMahvAUEcwdYu4Zd",
  "key6": "5yUbHrL5zMKb4Nd9hzUmmjpkZ1SYtCi6WCMAiZQ3J9uEW5iANME59tFu7tSkaH1nDqwtBDzxDk66LexAmdWCXkj3",
  "key7": "5K5rvDa7LPjbi3KB7DRXBZq88Y51q1ofyq9RSWoQ9FXKbRnTBXBJ4yhxkpaaebZJQY1ALjxx15dbvDhZeh5agFbj",
  "key8": "3hBtX2ryY6L6rG6AEY5Q8pUqgXT5gB1utPY7rZjxeNgZUFE3oGfEWqjkVKUfTfzbmzBQNSnRmsebCdnw7yNCXUu9",
  "key9": "2NVFNTmvvvxyicGXuj2Tdix16wNAWgkazYz8cjpEF7Z6WzfXzNnpXPd7GiLmhuyqBDp1t5U25yUWtyU3AqthurkU",
  "key10": "3iB13GdsmpserJ5M9UhQnuqYUcUQtcN8MGZfdkRHkDbQVVSSJRYi4wazLV1N9WEjGAq1GoDv9QWhxNQmb36tG4Gg",
  "key11": "4M7qzVPpySeEVTzi2fUQC3FRvni9xbRGxuNn9NT1zQH9mvF13tCbEPkEdJmfmpDytDCRGYkTm9sgGUM85a9wGoHc",
  "key12": "JHbYBJ9rmZ3hwYs5yURKPLb2ULB25ghN4v3MFZCUQMm7ryxPoUL72dRb7doq7LvPhzjJ9KAeVnqLijMfFBSueSv",
  "key13": "4ss9bTQzDdJREJK5vgTQQomGRJpFcFfhQ41t9QoSTicMo6Zfzo2zNtsBFaSCjyJiVBgjXgHuGZ7DJuSXqckp1eRq",
  "key14": "3fuaeq6JTrk4p2bj41AbhoYoW99Bt8zqSQPMA21SMSRhq8KWAzUfTt9Ci3hAv4urVQLE8jNL21KEHnsC7qPLZDWm",
  "key15": "2vK9doYdY8FV6b6h6oT1KkaC6SNbicvKtACBupTwobDhqFT9XGYjasfMk7R87XYbdhCbETuC1xTFxG9Lje8SiWoP",
  "key16": "33YDJch1iJSNNtC3wtd4cdiWA7eAf9eDGh7ztjgLH9iauUJbyhtqVvcprrHRvkFCHPB8AAStak34apCqkQbDFG5W",
  "key17": "4EN54HvVBGomgGdSzSqAooPuPtkuantL4SfTRURmdJ3FUqVjrnxpbsXPp7t9TtYPJsCqCBNMRX3Fjez1SgAJAjbd",
  "key18": "3UJKUyMSEe9zjdibvNGQgPJRHfKT2EUnrGFRrws7xdFjkyt2mt5M8qFjNMP2wMiMvqq6XdC6aEY2Twj1TNLR843U",
  "key19": "2g7usYLoJVjvAdLFiuJx19yFdDiuCKb3aU54eaBmcGDRk1wrS1KXf9Q5Hx294piT23tBNnrGwc26SLxhoKMKekYJ",
  "key20": "2wUDnjwjRBYcaNG95i9t6ErGuFB9mEP52fUjEfw9KBactRYqb51DAr3xDweaQwJA8pRpePqLbYpkxigAKcGD3Vrb",
  "key21": "XsmaD6ZDa2q923yTG2nLjT98uEV2AwLL96mSE1aEsLrVv5BzfLNoeUvJ5tcBP9yYtCfLCtmdNEhDAUdSo555hXx",
  "key22": "4fYUzgaw6x5qE5U4ETMPEUsHkxbTNbGsehmVpHnQpFEwtMPG8nVTfEETUMh8MDKpe8shEf1M17C9eGh2sfhorsmy",
  "key23": "4HSX4vxyBwCbXkr4b7ga55ithxTzowRDMKX7tvwBfUyQCzd2Xv1oUoZo5b5CMxZWCqSTRCChZivLZ8p9DmfWs47N",
  "key24": "5dEYpWfiVWC3U1Juf2UtxMQQBRNJM8R7XoqfvHNk9N93xzeG8BAozDjC9vLkyGWGBRSjqDzJij1ZsxhjztLhRSnA",
  "key25": "5gMvM5XmNve2M6RHPci6LFdBT4YE6UdVrSsQJkiemECRpSLZwKK9Q3RpyeKEhMLp7uX79yFEf2kXMkpYmju7uojh",
  "key26": "4UChygvkvuZn52QDWt6YWk9hs1U9Hc5Feb8nCfxDN9suSNHzLoJv47PXTzCprnT8q6MxWoVMVzReibGCYZrySiQn",
  "key27": "xqKbpLp2EBJMbHKQMKKJMzi2yccU1vTpNAvSFh5UqqTaGCDCWCb5khn67d2agUE2oyC6ojwUyftGmNh7qurQAhY",
  "key28": "YaDbuy7j8BLqvaQ29JJqbWhG4P7QH6cMKvz6B39GcAPXPSKVW7AwatpkiDHCWLtBryRR1dPSmpYAoqUJHREMsdD"
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
