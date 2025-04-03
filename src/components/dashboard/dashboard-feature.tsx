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
    "5H6CdHHzwBWA1dnWjh8mbHzyi3zDqQXgpLjc35UYcZ5iJGh63JbMAPPeVgBuoQ9AhKF93GWe3kfS7b72rCQapfo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6363mNEQXDpBzFWx9hh8jc7wMQo5WVBjo5KP9hpSawGE2Sh5S14tR9jYqGHiNhA36P5jMCukq6QVWtWmGUJpZUvY",
  "key1": "2Knr1dXgMMVyviLtdweo79pZTM7RVtaDQn94y7F4aKdZztexu7fNA3f4eLpSZ8NGczX1i2ZB3F1ek9RNrnxNKjMT",
  "key2": "Cv7JExdCmhKSH26F1XhZKNv7NXyPzvvn8JVA3LcyZG1aVUuD3WWCVfjwnBTnBA9gSnNSNMZikGWazS9ak4XAaXn",
  "key3": "4Nk9vCvcvJtUzfTmvhkguUkjunauLWcY3Kt6mFKSegrpFvGrWKgdGGEnyhfhutG5ctBubT4FHTAcrqqNb6M2yBfS",
  "key4": "5znSrXSSc3B3CP8Keazhx5exK24qrRRz3zw5kdKkS4yYLm6MJd2TMugSZRuqGs5bt349haUFKy9FDQn7mSvjVFzY",
  "key5": "59qZA4EFJCew6DLvh1pCCEVckieL7XbGEfsKYDyQyynwDtiXegFc7ydYYrXx5qXj2LNr2rdbt7zFcXGxBGGyHj7x",
  "key6": "4tXkYNmdo7c7pHT2mb13JuK6HH6J1ZyBENMtJD9cwPKe3ED1PgTQ2g3v1ETmSRnq3kTnEteMDbTozJ53hwLdBY4J",
  "key7": "3LV8hz8YjGv5hkE4297pDDjnmVDFdKxDXUoqsFw9hBFnAsdt8AwybVBCwAjuWHqsUPKmf8uwvPg7wv9MpPGmrob6",
  "key8": "4CKEQYntFbvnYnHgWw8DrAMc44gUkdLWz6EEJ2tod44w3CJ1Z244pa23fePdy2K8hrKHV7YgGfsCoR2x96eJPVZZ",
  "key9": "2PjUaFyfFkSkM1o3YNvkL6BJwsfoSYryEfugvp2ERChoBya6snpueuqZ7Pg8n9fE8TmNz7si2VMEAKuuD3NAGz3X",
  "key10": "2qfeyv4cbpiP3Q9DenkemLAgA3WdR9YeZyVKRqTfid8TG7N6c7XR2CVTARdavHqy8npVa8duKM2dd8v6nqEYXNie",
  "key11": "2vC3XH9ej7bbRPVt9MzEUrWMbSPf5qGz1zqdLnwFgxBwzthiBan4ZxPAZZXywDAeRruYBbZHWJQLJWEsmAmd2TYH",
  "key12": "5KAng9RKuV5cFkqx5Auc2U3Xo12QFGvZqaV8BWvAEVxg9vK7bu4yCF5ZDgm1UbGDaPDdqgPt7LL9PAhnK4T9RjgB",
  "key13": "dgd9dSAV2ngGaUjauZ2qPJ96Hia1wxRcZyNP6x4zt6tGL1tQLt96psiELCMrrGSAoVg9j1LhGtM8EQWm97DVTXu",
  "key14": "45tC1L7EyYwtmCh28Txao9tVRajC5QXwYBEAZSTzTjhtxT1Mk8GNkM3WqiJiTFQAsP7EnQpLosUi2pZbC5NsYKB8",
  "key15": "3dkkKonBBj52chp9MhyQYSVoTUgZPY6x4FUGvHa5TJVJRmZ7hxegbTBF2xSmLkHkgCC11ftQVTqnoXfooESQ2WCm",
  "key16": "371pxcpTEbjWTxMux2aPjAR7QJR9cEzoR71LhwtWMnza9VH7bSJpevW7FFhWwNbox6iteL6uoiuJN5UXAvqZ4vVf",
  "key17": "5hsZfVxzDiEaDPukUuUBpdNdffnFkKGuYvgVtpZuWo1XXbbdrPJ2Xyd7YQAmHKigfkHfmqZMkV8XppqRBEN8kFhN",
  "key18": "3QDRjyRkvdjW6QrhSGsNb4ExT9xKcynxGd7duXconNvH5MAcuE56MP977kmokjKSMHvMY3pyvFyofaW8wJF1FA4c",
  "key19": "7SXUS3wNn3Jd8c4s1NLibnrCKqTUndTnMLRmryYmB7PVrGXZu4Jvhiq4UoZ9Ri7DBWGChZq1pSDzUA4KtTv2nYn",
  "key20": "2CiK9Fbo6UjVkmToxmxqEVs74QeQY7z9jw2At9afyVRNyQfFnoyi42ka6wQwvH8p5JgRouF5rgUUn8d88mUsQ9aM",
  "key21": "4euRBJE93fRtirNxYgLucvQAEMD4bAkTMophEmtbKUX15erkqELaqL7WwVS6HEMavko9CQb8468sEKBT7mY8Zk2K",
  "key22": "2GhSkLXhfwQcEWJ1WiQGv6dh7DuX2j6xbTMC2ZSXXZHv9KBh9jtycdKrrXHnC1E9FaMPBmWHCQAaSdd4Nn4ECsWE",
  "key23": "4MWAk8smT6zCVyX2dJSsu8MqDBkoKs7LmZTVYWr2WeLzHoVaZYBcq9a4qG3E2ycdk3V2jd78SAZK4DajojYwreV6",
  "key24": "4e3VJFX6psF3zyc9k9cuTyFsfcZBBmBE5YaXCxhHP83jmjzCjRsYgm9DHyu4YDH99QGCCWbeWuhr8iReihWzXZk6",
  "key25": "2PeVW9zSgoES8XmfVPsPb1nkqNtPjcirtJV4bQEChkjh9ofNvGdByg6EffKF6saZXZP2eGAYqjgDHoAhdMcg8feF",
  "key26": "5GjpAevDe9gwURvx5FpCGTZ4uRogaoR4TzAqxWL2M5xeRMd1ztViYK83ZsHw3DUHN6gsX9KGYqvKHiURHipzAEhp",
  "key27": "2hGtuiTuXtG23dDhGDsier1BLbn4A88e2uxopX5wJa2N2392hcR4SNSBeUCg33eKaTeRT6WfkJYNuMomA8dkLUX5",
  "key28": "ikx3Gvk8buCDnz2pppybVh9iMq8oeAWx9mKUkKKbQ9FAVfBsJp6PJJgoZWabLWqoeZAVnuf9xy2or5sFxtk1mJk",
  "key29": "2r37mtiMiSZhNAP39pyihzkA68hJHaJCg51jG2EQFQtxFmCrJRr4i3u9FSz83qHb1o3DAMkPQNiZGr5ZkU4BffPk",
  "key30": "3q2gEr6aeJZFF4V7rHs4UnjcdzzUjpRuCg1de2kMZVcf5PGRmp6aHHrtPAdkcUnecLKrET7NYch1rLMdt9DjN2oX",
  "key31": "3btXnTYdxNGuYbNV1hZvFkdwASaXftnMeeLbJrmR3cQKppuniGep5peLmJD1CTTh77GFBN8ByL22FP4sSp4LKddb",
  "key32": "28XKMQp8CFWGkrDYUwW7AKuispLNnh9bc5GAegwTEfgvCtQaZTj5ZEZqdhHobY5ZDss2AXQHJx1JHQa7exAbUPQU",
  "key33": "4ApB5dCgv7GPNqDc5VaDdhMnhPrrus1yoe6HkYqeXGS61P4YwyG7D6Z5Y8GuTGBkGmyVZpWc3J5TXXjSy8tSNCfp",
  "key34": "2T6kZTzGppGbm4ZYVY6CruxpJY72FZLUuD6syrgormZmsxkWUszQ8uuzbTmFEsUg3phcP3DKqrEugqwg2EdgQFiS"
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
