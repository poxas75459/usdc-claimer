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
    "4GD2A66armC553qbyLZNApAqxfpiUVkaEiV1hxsa8JwHUtmZmUz1Ro3ibdFRpSUSvKzf8g4YkEnEF7oyd9Nc5ebv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eaqvd5qYZA4QdUKzAxf8mLPVfTymi247icdy8MTDgZcVMyMYwx3osKJ7WmSKxdR56VYU3Uf45BZB2kWrDhrP2Qt",
  "key1": "3DhEjDq6TxDHENiySWTLFSxxiUXMGjNvLYXWZyd3uFTWDeSd6zhb92Mijgh4pEiLC7GCvDkjerDiFTt6Uz2vZzC4",
  "key2": "5wwoxpM6q6KRQu1LRR3w1dP55YMwNnwk67WtsnJEDmLRVupJ94FiAX9Zs71RdgaZ4bovFtFgcBb1Cct4o8LanJUD",
  "key3": "w6hRZsZJJeaboT1UXEDhwCg3T9ekrobc9HT9SNSRyVQYmAKW8Eh1nDUSqZYWJAUY2wDMpJmAhytzXAs37J8c7Lt",
  "key4": "5CvT6tBEyjv9nkoTqbzQaLS27Yx2Rcxvb8uUH9FboabtgnHKKFN8hbNrxzfythU5dZvSmPNDP2nt8F9saAHehrtc",
  "key5": "5ei8KcMMXhyhjdgx6qEaBBMVZjoxJo3GdoUVL9iQ3EVcKCeztKzKJx5kCyDfm8Y4usoDMW9cbnvnwZmDnYwQtDif",
  "key6": "2Pp2uE146w2St5jMLYzWgCXvYirJQPkCXKS3fWG5eAdg7opem5UF2Q6Ux9ctHzDnh5uaEiqBKjts6XHtGKx5VkHZ",
  "key7": "2NPutmjCfjaEc3PrpL3CN5Bw1KoFEifg3ghf1733kfMJ5oovEygm7jfvaCyuVxFZeFiruQ2kD916WG8fsBrp624K",
  "key8": "64rCs47ivX8BDmYBx23cdCfWCkHqYRb3De5Sa5FTWaUGLnM888aeeperbjtBQpv5cMbTBvvi5ucZRKp6rS5gu1pr",
  "key9": "5GCaFF7A9CsZEASZJuVXi51GCtRRVb5fCintFTkA3ZaRh4Ci11WR7K8U4FmkfoGeTiySj4na8jDrqhbWnS1ysxEM",
  "key10": "3Cv6QporzVCuipBhvPAxr9KLNjA5H4PCTrH2brWyhENiKgrybyB3k1uunqkjMnBgApR8TcNQTAr1VHdvmZYo5VXd",
  "key11": "G5ABAaERKmXp8A92xhPzzqFymddE4kMnaHE5BaGBxU8QgFgvDvwudouZbWxSkgD3ajj9BS8ebAA84RAfs869mc7",
  "key12": "5nC3JDawqF7ZF4NDAMgk6DdzxVvEqmj6q87XwLUvTPaU6UcAyqEYdVYGGTYc8Vo7Fic2T2WpintfGbK5kXJejbtb",
  "key13": "5KLxHHqYk4GhUfj3LAMGzHe6ihE3JSCJTKHxZSuDtziFBKkvSuhELNhuh2cgM5cBan7JN54huJcc4e2rrJHFX4qH",
  "key14": "35ANaB2QHsGafQnuxmg1AfFkfDP2zXURk7xTQRHhdG6FkaDenWCN2ATwVf5QnNQBvhyd9g3rtvHstSQpQmCzegRm",
  "key15": "4MvLNim8LQ7RqBvr3d3P1EGi42iQzLAevK9cgM8XXN3DF6rnT46UK7A7oxtUjoyspFhgFTTCtsiiCkM884sB2NFQ",
  "key16": "Pbq7WqUwzkyNdKKUFjCeJyevJtDk2dnYohZ24pS7KbYKoPBd78wwdMJyyvBUjbGQ5qSK3TLv3gUjDDTEEUBWWXR",
  "key17": "CkZeyiecbA5CoPXePMCkbimo7W8w6goTcFE7SzvDWc3J1tLmjain7yLwAmpGPYFGnUqh9SjEynSrbD2vCa6gT21",
  "key18": "2TkPpErDpQFWxUVxXzDF9Mhvxkqxkv26635QjCqzNom3YoZ4upb9pd3XW9vDE6ZJgUVRoBbn5ysYHBJa3e47e78v",
  "key19": "LNTDzDhvZVqVdUdFLq8j3uwsLY8PeBnQoiM285bjBekwmPLb6HUXyPViLXH3R7u7MqP3wzmFEPLRRchbdRgGgwz",
  "key20": "fyYcPDXRd6yFJUxpvJtG1AaFaTYrrPEEbfDJKEtEM9S2oqEXpz5aCWYVixTAMvwC9atHh7wXbKqBhEnry88z1Bd",
  "key21": "S3bUP1TbBVWwYrcPjj52fTMz6LHT8oeZBwiFX1iUNWbQZpyHvB24VGHaPwFkTVC1fWDXwr54a6WVSFGAoYWoxSs",
  "key22": "4UeJyG49qKiWRdtk9kDnpBuEixwPzvtgQhDLDdQxyuzPnuZrADCoZ3uweS4RyVBE1eXyGGqpPq4PUF4pmh1HbRfP",
  "key23": "56ktUWbL2uT2SED7XAWmANMjncRq8Q4VdstrKeHKPfDExaG9pN19a7rPoHLfVU7Bi7XdDeQRVzV5QGX2pHW7gPi8",
  "key24": "5wsLNqeui7YGZaTRUc6mFJWr3Lnk5G6KWRv2BbPjvvrGZ3f94Mim3qVjaXWJyEVgjBeqrRwBA7LDksJtKp3SL5GV",
  "key25": "5FG5ggx6LKvbyaRPZCbMWw4ni397LpoPYEoUbAMDccsxTRFgcycvN6QjtFYkyjq7sMdC9YuSUidiZ5AHMEhS6JaP",
  "key26": "5WMdHozdG98SNghdR4YMCSxRMdjoaEVkh1hmxvxivSZokStwYEavjzRB4RBXZMNVzCqbFAP7QhnSXoR6r9WF3P9a"
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
