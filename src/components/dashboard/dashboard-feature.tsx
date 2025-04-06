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
    "62S7oKcEDCm5LzQYu6psRyHMJBtoHceYB4QhQNLUwjPUarcD5wF5D9qTMbeFvYSQhhR53i3rakXj9z58YSE8gq2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T65xYeZhs2Jyzk8iAAAxTDYfQiBKYLoPTHPgAWKAYPHK4Z8wszN74Zp4DXkW69bHqm1Pr8mxukRWmBUJ4a7Rz5e",
  "key1": "3zHEJdhhEV6F6LumTuEKKW6NKtmm57Kk6bgvG4k555MJ4ysMTTC9PSmUpufRju742YY28qYHKM1RdzjsDndubXD1",
  "key2": "5JJtrsj35MfBtcdM17Mt9pzPqWKQzDdFoqPjvXK7mLLaezni6avkpWpUBYtwKmRND8zUGDz6xXRDcyWSPNRe6P3Q",
  "key3": "XiWUKNT8rENSDAUx7c9waURTPxNYkqnfsytzbrP7LGKpyQhJPDSkTtNjVrha9iR1WSvSLNqnmofn2ekJH1YoZQ2",
  "key4": "4mZa1EtFgQbkn3LYMbwdnHP91GiBL29EkCN55kdf89NNgxhGHV5ZaAosHwmL2no7EUGk7QuuaGy66iwxyvwXP9p3",
  "key5": "45GwJUdJRAjxKRggwhHhop8c29zzmpiiBZmkPq1VgxBLHdvYxD9UbsiDe3FPN4wVTWMPTy7c7qQp8wgGDMyG7tPM",
  "key6": "5om4NkD2jSnFnDN9TgvSZXTdwk9NrJdvWZpeafM9J5kRzB8Z2qnPqqP72WiTtUWTpYFL88pwtEtxZ2BAKGTs9EPV",
  "key7": "4ZdUrvNybGS9BXCbKHwXNMnSPSyicKC7QtYLuBNiAQf2vnKxfjyqfVuEc6GeCcNvDRJMSuuGrCDVYTc6dEJy4ozv",
  "key8": "XT4nfw6ggJT8HPZxPfXBmrauZuUQY9fD1DwyePJkihufwiwfz5tbGSNjDCCcoDiCpSoLLYFZVBvZJY2GZvVfJbR",
  "key9": "3Bjzcpso9aan8DHyYK76NRyGxVF8hqnYAD6UBaSBjDKXjX57t4vdHBXVFxLYtodZerT8zBaH7KXESA6oP7Uvp7DK",
  "key10": "37dRqTSe3httuajQ7fUZSLxnLwMpzc3aKBGLQJh8GxEfKZLs6NszXbAyC6KAUyBGoMrTFUEDws14nGPt61uLnzUL",
  "key11": "5z7QsX3m42668RG8wf3PpJLynHLJiZt7xYAGWruUsJy9EguntWeHn8Av6DbjFBkjtsZbp8DbfX6UAQdQ1CZX8XnG",
  "key12": "3kJQQsFgvxBJfU5poSZPhm1xorBF35hz3D9m11NKbhZtYcCNcoN7fSTAJ2zA4eoMj6U2aEUejvXtHmycDAWfo87E",
  "key13": "61Kdk8DU1aZ8d315hsGYKDgEM5x1T4EHLNygm4x68yHECSwEEZ6d6YPJWQogogAEn3DcD2CzZGXdhvuvVyTGA5Ck",
  "key14": "57eMW4ZAQqivGhmhtTMJnDwTqdjJgBEv4LQmvnQiqno9Gmxr1mjUtXLEjEgVU2VYSEtSWrqSPPocz5fw5K1KjxxX",
  "key15": "519BnJiQxey69PJaPvwZHPD7XcbxzbgQ3pgAF6rDz7wZsS3g2GiMKBPb54b3m85R8FhonVwHrkZPZnht45UQCktb",
  "key16": "4h8S5Q8qsDDnS7cTWT4eg9e5yy6FQEgeB2ZH7VLqnpTFrTe6uh5PQ5Pzyij6V2DpSpESnbzvwyPb4R2FSa8NErey",
  "key17": "4uahNarS2Tr4F5D29BJjeb3Zj992TFYxHfvH6zypFYPoNVSK7n8xgVcGHpMim99is2hBS289wkX6MN2XwKWgVdca",
  "key18": "3URgAgQUgBradzJcUTMp6umvkrjnRrFyqPV7WsdvjavLam5mkxJ5JzTKUfr3Aun4Z33pfrGSp3R6PdAWW6YTp2qN",
  "key19": "5ZxE2fzq6ws1zBTT98c9MvGSszUMXDXcP2GgCSzG4j4GTT9x9XGjeJS87mTFeaG4XcsDaSCxq9v434sauPNim1oJ",
  "key20": "gyzN9ZCpK4ETq3cRjFruYxZupboQ732kh76oiZ8vn4o993GSENWiqjtGFk2g8VjxGRwfJ5bJe5xnb21edzHRuVG",
  "key21": "2TdmV1JpoBXErtbctMBkFrqZnGFpe9g8QLLmtpoRLJBprKoHvZX7H9P1wFUEjiwMDfXx5xv2Vo7sUh6tvHPzUPFH",
  "key22": "518dJ7u37fNQPTTVzuDLa4ihcfx9Kgp6NzKzLrWZVLdwVb4uGxHkY4kcFdftpZBSjuPbMvQbPGJ8CjCDjcU6mjMq",
  "key23": "3TF1bNJBy64gNRHDy5ggWzTQv3PcknskgXqGxgvr8CjjEFr24ZzqCck6vjycY9dfRtAfCiykb1AQo9gUouNakcR",
  "key24": "2kHsiPuLFMzsPo8KkgdjiPGnkpM4yJG795Z1c1H64M3myyFvLfzqqWyhW5V1zdkWH49pvpg9VCE6J5k7ctBW86ba",
  "key25": "44dM2wW2YeA5Db4b6Lz5k4ucJGVdn8gMCpF5oxMEL1zUhiyBVeP8cHm8sFedVFcAXF5nEkKQNswfUZTqvq9rxtob",
  "key26": "4wNDQKA7jLZ3p8jGQDe8Po4toXPwtApyHkTgbS7d8srA4yoVS25xmk6sqKKfktbkj1UZKaKuURr4XbDmUc34THP5"
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
