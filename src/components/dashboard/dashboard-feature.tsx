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
    "Ttq5VA5GHYVeLggP3ceQ3YWdSAnFewSZ1buxghGP77KtG6C7aSJuHaLfqNybafcxfy5sbstQ7jazyxmei3ixHaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YSEMwpePD8yZZWjM5xPzajzRdae84zvuV3w24Vk19Ewto4D8W4HVcfvm69JAF88NXsLFoMN8t22JwG1dj8kw8hH",
  "key1": "4ufFuJCsbSvvjDTmVzUvd3qZrMgM6udx7aJyXXcbcnbRuo39wJS6XawdSBxRGCfLmnQ3o6XaBNEQGtSEztiYXsKF",
  "key2": "2XkRhVpMqF2FsxTyu859uKYtQxLboeiVzzufc5XF4cVDdG7JeEgnqR4ZpwrDzXQvwDNuMP8yHc1cdtQTmBH5JNQq",
  "key3": "4vBYRkzx9W9NXpR1yv9myziye1u3r3WEKfkdFcibusJD75U3MccASorR3texjKjUjQziswZKnbD7q56ajXF5xL4E",
  "key4": "3ZoGsfw9WiZkED7e7K37cN7dBYzLbqdLphQcGLycBTEMnvquyDqMj2MS5PuEKiHsQZgNhjtb6rgNkWUmpB1xTdsc",
  "key5": "4bkmULkiKAMAA1L3hDbVsK6nW4peaKZvHEnBz6Kv9DPkU1dCBLiBp2EXjirum6uZGiCxh4n3NnX51uVZ9ThfkjKF",
  "key6": "5AU74uxjG7cHacPTWCyYLm4cQk7mx3j9RFEvAwsnR87n1u9pg6w4WTNwwwekwz42dBNqT77PqXkzQEc8YJyNZ77L",
  "key7": "37cMiFzFnJdq6fJdbpr5tH11tXMtfqJ4YLpDUfjyQAV6KZmqKayBHSvHPLLEvnkk9VWW3RNQzZchM2Fc6h7wEkLt",
  "key8": "2r7YqdodBMPEZM5i3zEN9JTdf5cbE4NKVsJPsVG1HcHiD7LNjbaSRceshoKisvMkgL2v93jyJo4HRMyKx6dYVGFc",
  "key9": "57XCjkaDqTdeyP7SRiCn9bbQFbhpvHX1s25HF4B8y1SJQgnY7E5vxLa6nYYKpEZ5MHZgcupCBzCFqGhcUsu8YBgH",
  "key10": "5HjahAanqHTB26Q7NBNLb7aJ51cGgPQKvndYCRDcHrrficVkVf79HX7gYKpAAxZTXz16eA3oiNpyy8bgTnC7bkp5",
  "key11": "3igvDebNKEnyH67Mf8LmavtJCjznyHDJHu8muT3aTCzMDvRYAzgVKFyvEYRj8bRkoWrSQCtunRYY9SzVPUGMrjBZ",
  "key12": "4tTKmhBsZsXVH3Sih1BkeUzRy88JxqvUcz4tmaLTkNdck1MNk21VvSQ2LV21zbBAeKGNtV6YUWusR3jbsKNnoaqF",
  "key13": "5U4pbkBzEB9Z8SJCvuJ5sqVr9dEUKBwyykGQmCeMgaW3CcZ4RP1fPiRUXUaqMHNXGtbUqAxkaVvAkoJVuoykSXWr",
  "key14": "b3ivg9BfdYz2FWYnpkzGXJ5jHHrwyHh7T9stytaEXSpmp2QKwTFECh1fTU2xGyY2ogYQvkqzdNL42SZteVD8LbT",
  "key15": "5VSgUBc7axFGwmyeHZpZm1NFQGqHBjxnGxqv8W7YU9KLxicFDvdRxKkGFzopucwhP66Znx1ZngFGEozoDWk1gazE",
  "key16": "2qA1RWKywxw5MkaPLP12QJBcGzUHBY69mh5n487MBemSmD1bj4UACRQEzbPVyrdGqRyj256RmHng5y3ywKA5fpCG",
  "key17": "2wYhrj9KSFMa7yf38MwxsAauKva9RQLchddcR6ogpzfGYYhk5MXsKrPoqgV5envqFoZo2RDR9wgsc9go8Jasvmve",
  "key18": "5tt3shANf1UNE74WHx6TxDjf2AR5HZxVFzdFpPnvay943JacWjHC1gdkbSmqBfx5F37cRRFBbwiQy2RGuZCMHfgi",
  "key19": "7vRAEEj3A16csRn3AsQkT8GCJ9uEz8MJP1wEhjjoJov6BGNfDdFgbLLpTRbP9k98qP6eoKp2CynKyreTYP4Evvt",
  "key20": "4bwKUgiFWN9uveLA6cAvoDbnr8YJqYE3VSS538FJUpzLdX8jkFnUEYwAWZd4fBbyLncNHZd2g7twu3LCatwE2fXu",
  "key21": "x7jsXbXPbvZTNdZqz8B6oWP8XdHe8AKE9vnpYERtwwEnko1nARy1s5ydYB9f1uMvqfW6uPt32jDYvLGZwcAPYJ8",
  "key22": "1GcUd7S9ewcX5MJ4GxNczbL3au3gtmVSXhVwxr5ti55JefuGNaFw6mZ9d3mmKUUTXLGjTqCZpHsRzjtE5Mf6RhJ",
  "key23": "2MP2ix8mEm9fpThNzmwsqa9eXTLPK63Dp6C7L8s7rxN8wML32ckGntonsW7sewk8UyFnhqmZfSjaQ5TqJ6RMFGEv",
  "key24": "4pGVUmrA18UtPrGcJD9m9DQejvnopWzGu8mcEv3cWYn2JFkriV5bC2wjgxpGrbdJwYtjGz8u9NbaEg6kYzdNTBwh",
  "key25": "2YEKDaEEnWqXrcBMMb6qdJ8x7uVPJN1tVFMxCaVzg16BZVhdmAExMKv3M1VDLsxGUhqS5mKn4sfoTb8duejkAsTJ"
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
