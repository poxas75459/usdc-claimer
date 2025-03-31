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
    "RjTNmkWtgSYhdyGenZCghhVpnrGYikN54fvxbAWgV6HcUFPtL17yZxbRPfrTFAXQxb1EogH3Zq4xisrtQGBKiKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1x1F1sSQv3k6sVtvaRfYYykxVPN3QazsiPzrZWpSC5FXvqXAeqYSkGgNzuxdkFm2c2HCTxXygYHvZQyzgtdJjn",
  "key1": "5iQtXnLcGzCGxPWinDAvo7bYEy3KfJAN4uwG37ntVnQxTd4xa2jusGztMeCxe2KQZS2ffVZPqWoLGFdGR6cHHVpZ",
  "key2": "FjPBkv5PbwGeEsQNeixzMg9owaCeVqus3uv9SPMeBszWP6e2F1bPiAkJRXpEuGXU5L45MQPwVEW6DSQWffzJf1h",
  "key3": "wLXem4V4i5knmvxLKB5sogJRkLjV6gXeSWPASdL6SMARfz7ESjKDBtWCsVDDqnFSpkAGaV9Pmtv2xjNxFLw9eoS",
  "key4": "MhjZ1izchKYovRe3ezdDJXzUL1GWRamqXoviY4ARDMfpZprvR8jCyyNs38oALes3zvtjn8FFVPhY8XYaUuYod8G",
  "key5": "3v6ZbX2GNsCxvMTAgy5jMbrDmGqCXN2H3BTzGwvUpabKBBX1KCXJKPsrFXjC5XtwLmW7nrHguM6m1DMh3bgtS1Rn",
  "key6": "2McosGxRqn8K3rmWgtDq941cFZQyzLNVo5acfrmGCLnnVsysfgNpPrcCawAy1bHhbjqVeLxH4PVfvDWtaoykYj5P",
  "key7": "UKAe3RfdfQUjfqjfrHZqebpZKTAi5m9bLnrFGF1tptp9zzZza3b33nBzqY73rng2k1ActWjyJbLBTAQsdwB5yng",
  "key8": "5q94JK7KDkyEDSM8xru4CTkYBuqKTF2v3kTJVk55FZYAn6BD51erENBo1rpahzA4nZmWrpESbHsrqMtLN3uwJm8v",
  "key9": "5BhKjetfKvwDF8b8jKi28T7wBYi4ecjsvT646ywrRGivv2SJZxcJMuDAkkFKWSyTnP3pKuLMc8mmWV4SiUexAZei",
  "key10": "4ekZaQm6ZWFhrTF4TRd6sbtjTJpD3Pw47w3VYAVLjvH8cskv6kSwTqtueDJVgt8v8J4Sb3o45QzsRYC3RtaRXppV",
  "key11": "5mJvEZE2vV42PgpAPmZibR3LVfPhAAsEXMjrt2HGAfemUGh1AmKxj3TE3rLGpoqiYL9r32oRebkpq6q2kVj44BM7",
  "key12": "5AodUsjeJ3rAoD9SgeS3KkL8S41UCaBc4Fxj4TdvWGhxiN6T6r9oLBGbX5yg1Tdq8nr4cbyoZ4nSNPPZF6EkzyNY",
  "key13": "33Q2XY2t6bStoVJoR9ZEdfc6MXt7rKQyyYeRyuEJDskHEMeMsnCvf5k2RTy1DGKwSrC77Pt2Z2nrFjcBAicnSoam",
  "key14": "5S5JQgBetkhZELmxe2qZsBu47UnkZRzzxWwks9pacKaPmUgEXZT7iR62QXKQZX5LZTMV2ye7Yxzu7yQPBh5Vjscm",
  "key15": "2sp3dMdRd4Yf5KHpJhL9EWKFPfwy8P5CZJSZh2w8DaNo5z7uRpenwxkGzV4ouhpPh7Yi67RfzNQrK165JvSwFoLE",
  "key16": "33bh5BgdRUzWwDss8qD4ubZgJofMwE6QBnW5UakXuuAkUjVszLCN1pa6KgCqyD2P2gDRWqCLcFf1m9a2fQx6opgV",
  "key17": "3DZL17MVJjmDu5Xod5wW1kEUqbZseZUZmUrvTc9FRqvKs97T8BRi2uTWVvug41txRNCxaSL6bASABbwvjrMs2mc8",
  "key18": "65wiNHFpypqjDczhjgbhJknQWygchqKQZw4zpZrr6E3bUPjAxhH8zMXdTEiGLyi6rnEAv1U2fKKNeoYcWtTGVzvb",
  "key19": "3ixDvQAW1LXwzzhsRSzdxUc27sNLDfctvaf5Tby3kKukNV6HQxTddPrMPCzjZ9rzEfPXsuZdPQcteBtHZpTdgmum",
  "key20": "5xvkAgCZjKEtxK6bmFCRZkPCtXt6NrohSLPpsiLFpp73KbkMDdbwvHsQCtm7sP4wigx1fLJyLWsdSDyEPGgmXnRu",
  "key21": "43AjZUPUSh5MdWNYVuKgynwZWw1MWxyDXJ9fevjRUHn92rxoByLHoMtWVsRPoWxyLYS5hsafWR8a7c9Nh7hHByYS",
  "key22": "fkhiXfiTJgHNTSmx92DztWpEM1A2uAhK6eqanaDSuKbFtoaKVBP953vRzyWJnDn86BFFX7BUXY2ehVGAMeATGAr",
  "key23": "3JCFEzpkaeARpQkWrhbe1dcFTAEie24vE3ZeUXug4AiYcAhBaGwJocdjjJ4JSGkoMT3D2S9KgiC5HwsaZfJerDH8",
  "key24": "37kRYjkDpi3djBhHKkk2x77aSLzkDdP7whv6Anayqx2mdq8kEizvKF6hhsAFckWvpYMeLckJsX2kFi63jXypa7vk"
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
