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
    "NBKFtZVhaz8hKNppyUUQNmbjV7MzTRwSPhoZy9WKJBNPgnJJFWpqDCSuwfsGNU1hdSDmDmo5c8WqBENTW61ASgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FT1PMNFAcJMEWwRsyF2BcK6feMpifTZ1Hqj7TPr96r97Fx2NXE4MV9hQt66sKp1sEXxrgPm49kTuVLuLz7mHLBC",
  "key1": "33z9XA6nUifwJrsPz4FRjsKStQyyPxVUtjZEXWyZhou9YxRwCkcmLbeie6DkCKYPkd1xLqJkfa4Q3mKKaXsqiwTT",
  "key2": "3Qc1yF2poQ2w4Lsbn1MjpMKKQF4isFrkPtNzgYwFCmtD7e4QmQvRJ5wgxTGKdgwVNtVaEnudejbGjTW6qw6a4d7i",
  "key3": "4RiUzz6qChFs62qXu4pdpsMLzCpRhom3fMDuwKbd45WSDd9MwcXtuX6NCx7vdhrEYF2ueHc9aaHoekCqu7NEoFEC",
  "key4": "22cdn6ScS9i4hM3ncKn2JveNFt8Sy3G8hBQk9FZN5NLtrL1e1d95789c4oHWW7XMnYp9KepKTKGwET7Ee1XuxV23",
  "key5": "4ExU87xqRjpwLRfC2X8LLyeUMAnByvZjCCAh94ZVwusbThSK27iZ6rqVa7TeZpDfSZMVFzycvAazsNRSeU4yKVqk",
  "key6": "2uPQqVP1kkM32w5VtkmsPe1aRd2vk9AGna4CYuDv4ucDgpT71SREFNrM4ewvSoSW72izUXk4nErNxgbNdUvoHLj9",
  "key7": "5neQRhRSVfGjUffTqMNtAs3ZheFrDFucrvaDN5riMPYk6iHyemeCdtZqrLrkZ4tBuPntYQnEUxTmVoeDt3F9Lq2w",
  "key8": "AQH98miNZSLrwoP3RMMg2fqWQaGygWL7Fi6w2DSjBf6Nyac4oRa9W1BVyxfXWxRVFqAXQFtz4D8sN66SrhBe75p",
  "key9": "4ieyDi7asQpH6Pv9x8RTJxCqukdkwHfdHu5noUCxSiSNihAgVqjD6f697HNgQvpZKrrCJVTvLzR8QtbJEwGX75AA",
  "key10": "4crAHUHfnjJaqZdnZogD6DUy6vuT4wnLsNVge7ih2BopE8PHtDfEP26kSy5yvqAB7Dve7vsy9AReZFeywnvYskXB",
  "key11": "5M3UjPN5JqGUCUfAx4fj4bb3Zx85LzrLP4CAxjBynYsyT6zP9nqXear6wrZ8H474RtdwwJP7cTXbJNLWRy33GQmQ",
  "key12": "2pWyGmwzUu5Q4sA3fSgy4za5Eu4USTqirtFyAD8aKDz5KCcUFRahPLAFP18f2JpiXo9M2YdDMwpCMcQe61e3XFVA",
  "key13": "2mDzk1tyEAj3u94dFKZVN6QrzX8V762aAHdieDFvVx53dioRiKuK7q1fjaAXXTm7JwNuUzoFBzhKwNHJGVW8NXLW",
  "key14": "5wcwHvLNaip2taz1spN5fUqGq21TSZpiGcDTWXMXipky3hk5qEB6LPWfDHo3q6SzPkXUQ9yu23uHQHkp8mE3wED5",
  "key15": "5YpWkj47rUZbC7g5ZCXW5LcxuzyMvQ8WcUPQdTTtRAMd9gFyJjqb2nE6spPeNB6cZdtkaCvfKskh3DkRDNfffxCJ",
  "key16": "291MAfnGZuPCfs3kgztxyx6UTRf6kk7DUf5hb1eLHMWbZdmGBDH4YQSys1awA7C68TWNyiKERKtSt8hrdPMR2mep",
  "key17": "4kpZEuDTLTMTEqLkDRkzovV1zuG2m4NRH18mHBLDiLuSJHycD5kzqWbWBsXWHW7JwErouhN3CqF1chnZmYPvLdaL",
  "key18": "3gmYV3ZaoFqFzmDJX76b6AhvLrRhaHpyKoonjU2erGUozgaJDPigTNzXpVdZY9U7LeFcqLN3z63GNXqCgaZXkGM3",
  "key19": "2MWKAv923mdrD9DqoQ5M242zMhk78Ebvcx2R5zou6bM4TUpQ78UWyJX7zpdUDsXwaZpDUsTirFroVP8WtjC2jydr",
  "key20": "5B95vgCuJ5jWue4xV2Y8YQXTMeDaxYsjavAWRiHyKdjxgAySxfPA32XwUzCVrqmyDT84hGDXAZNYT9PxGRVSt5fj",
  "key21": "5xPp2tomMFuY3sm3j2fs4VCahjbMRdr2axMfEuwCwjhWiAkmSfTj4PMK1PtjJivXoVynuncpVLK3RbQ455aCx1xt",
  "key22": "4yCu4HJkybmYvrXqQccTdAiiURogxk951b8A94yMsxa223DX1j6XsRxR4FsBwF2rLt1ZLoeDtkWnhMkD3dji7UBE",
  "key23": "4RX3ZKWQnt282BGd844TZEC5yxJvUV6JbtyRhwTTZrSkGXCvZuVLHbnBT2aJpsGTssYNnwY5z86yTJxX8KNq5R4W",
  "key24": "xwrz5Zh4GQYjjYrB4v9mvkHoiedoAqak6aQ8ztLm51PsNA2bjnSYnpbZXKNsdgkXxf1fcUrCTwRyM6wWMYvFNnj",
  "key25": "24qfjSgAzsAkzGwnATGkqw5cyaf5Mijsm85bFqYB8ke7jMWtLQqBRtDPvpoFS62QGkFzHbhDVr3Z1QQCHP4MkHcm",
  "key26": "GPiExrBm3SGG3fz6c5zWhmwkbGRuxhs3NydHAqfjWA1TRWM8Rk7FEG3oF8Rj97DdyJijC6rXgN74C26by9FwNu8",
  "key27": "5DLzwbB6YCq6J66xpPjrN1hx3uuJn5WzKyrS5TtS1osGBZhMn4rJf4zU8wdkHY7L1bB13k3vSRHp6PMAWVEYh3T5",
  "key28": "2QfLgyBo27YrDYooanfwRcrwt72zj98mvpkupY8Tn9jAaXQ5BPwp2cjRgFi5pf2etVxf5EGAAVvyGv35eRUnhDhh",
  "key29": "4J1XnVCDaYV95C3TsJW2Bmv5o426WS1GUe4QmvJT9Gbafn3ETaqVNUWQfn9Ra2JjvW4LRDt9dm2BNv6sa6cM36mH",
  "key30": "5b25kAUVEei2Fc1N9LzsZf3wLD6rpX1kuonN3hBmon3ZHYvdQzML5Etu8BLmz8mh9WnRzrJHsgnDfbxnAb3DYkfL",
  "key31": "2quQMrMxWzdF9qGDbUngLqTmMc49wpaWBiparb2osRqZzW56ZdTTfZ4V2jKrFC9vUZbgr896GAwMeJeHXSc836ZE",
  "key32": "35CWw7NVptao1rgVn7E4oedHfHL7rQ1mWvFsQPDemVVgvmJsjiM1YFGRiQXMERu6oZBUMkpu3NYAGdePZv7r4sxJ",
  "key33": "3unjf8YJLT9z71DBJ4PqUSR4aLw3WVJk8v5Z2FX4hEsrcRtmhAzZDyTjuGzCPkftdKkQTHyDkuazuy7G5BeQCAEf",
  "key34": "2jhA62oKbjM8M8DXFj9H2rSKnUipaEWwZtzY1GjeZFX2cvQHkQkAZ49muNEUQsZoJRAsNnijoL8Mk4dmAGjs27ZZ",
  "key35": "3Y1whgMwx3CU8wcnA55wcXCDfHf9auiidTYL9ZgYD3M2SyPWNNKKgKrDUsqQcjoexZstKpGfM6VJBQaE34FZoDC1",
  "key36": "5aHYsZ4GW6mNuxE9UXwxs4Yi7pDUJsmo4z4wUVv7zgBd4bjXnc6tcVso7xeoRwFCJqYctoK1FnsnU1LRwM7LPWps",
  "key37": "58cQSJFiBtMi32NQg2QHA7baMTqQJwGDoRkbZKS3kYEW4So4yaFmA4GbRnREJ3JUgZUAF3UK2X6ey2N913M28obo",
  "key38": "4rCaDdGPUUskuTPowrMehNHmWAbH17yurPq4v3fjEL32Cw97fjtTkUXT78vufkEW9GU9asNSoyFeS5ZZiQh65RVN"
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
