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
    "36Cr6eGpBraqxff6oCvtNZP9xsmV8nSgfJr1ZgE1zX94ZUwX8PuJkRoWeQUdam3LYB9JkgRxRLvJPCCQzFLombtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ADKxvbXY8upQ71K5yTr7uf3Reg3DQteVHU7YngTjWsQ4zy79fsX4pDXiGdv7RbZ5BfkP7GNWjuAYUZYYke81huj",
  "key1": "5pJ4tWNUWVWtx3r8p3dk5GYuiWHeFC1hSaEgsfGhq5vRTXbmGNRHMXiu4LQSNM8nNP8arzWJPgXSw6oE7FvCgLow",
  "key2": "56gyPLCV71Vkefi8KivaJEJrvv2r2DS98hH75G5cxi5D9ucpVE2NAeh8pobR9s1YqaQDSzbTFJqhNyNYKXcTHdER",
  "key3": "7KcNQioneir5JvqE2sq5i9ttqYBPEzJAEh38ukKgJxLYGLjzXGPSGQj4ndQ1GDmHkvVvoiDKMZ7Q7k5ikY89o3W",
  "key4": "5GhYm4LqZ1C8L7KdGdrCu9HtuUYiBqXaU4HmsPX1fneVaPAprnYHCy758X3Ym3CGwBp4TDp429aAPQgDCk6YaAN3",
  "key5": "5RuEVPGM1dsdsLYkMxSYVvmKGwTQdV9xLNRiHTCnAcogCCam8ZvbqxxMtS9RXagKnpPfczCvM3x1HvYsLZ6iHbWw",
  "key6": "5GoWbsVTFUXGNCmFaK1sXSa8qWBzD1thXico77FVRefUzmf1eDTfDxouUeaMUWrgsTRDK18LozKCSwXHRuKxvPdr",
  "key7": "5c8sfbjrr1fm9x4a2EQt8DwCFiXpaze3LoYvFK5GDJXNhvFyE7hbvd1kLqGThmwraWDrqDzVB7Ms467iHs4mymWa",
  "key8": "4Na8SUBdviB9EQG3wx2gK4AJeUWWdyx9Cm9Cjh32dJ2UQDSiVNSFwJpLNNB9MzqbkcM2jrbYX4tdZQqF74qizPwF",
  "key9": "64yCNdr9dJFGSaAhU8YpuP18P1nL9miNnDNJbQWsQBwsoFCG6GkQvjidS5Xj6ZkJo5ZL2uBQKZyB5zdYg6QrcdPy",
  "key10": "5Vt4cWJuSPR3vxoVCHAwob5jheddzAFhPs61ZJPr81GcBeP9jmMAeeEr91XoRnzqaYJTWzhP8ZGGU5NnRyzMFD3D",
  "key11": "5pFazX5WWFZR8FLvCxDE5UJ7Ddztkatd4BEuKBcUZo72GDaan9rLv2swgvaCLbmA28UMSu69rUxtSGDS9N9u3N59",
  "key12": "MeEBKZHpPVxTsQaB5UfeS3sgFrWJT49qmY62HWm7sxK65YQdYsZ5kFEHWwvVjxjFJeJ5rYjt3eynuycKraaUNo7",
  "key13": "3TJ4dv6ukh5yabkgTqLeJvZE3c3LK4yXBSy4yQYWcd5gsiDnKZD7e5B9j3rrZEmH3dLArPmjbcSpqhrtENMe9Fmg",
  "key14": "3qRrTx5dFcES6ey7Zoa9ZNtqpMQydJPWNC1LFbbPAfB6NmoVzrUAcyTJuHPeLvQBfcyyKSnSSuojGSAcN6VMVTxZ",
  "key15": "3jEJq1dKLb6ELQDKrDYyABT4DJ5HcA4KMjvZyTxHF5jRJY26jyZvuoS33bFSK5PxH3hudBVeQb1vNyjj7f1CYGwB",
  "key16": "5okYAwucBiTY9tBZeNPC5knCTKfohKZtEyjT7vwNbmKJ8oQnGNJh74PqLjuEHakqyMkWkPyrZizmuqpYT7ytoCxc",
  "key17": "5WaPK45no55kf3ho4KrYzjt7vpUG4L6PHyXtGiJnTRstRDBS4MbPpJuZqn6nky5c7Sqh1oMFhQQrYGoafmhEMP3X",
  "key18": "BaNzGH4DedtYnpxtsTtdKhcgWsGTuczjUkLSQ4QVwn92TJanvuH4uZqaybDGV2MCamLy95HRgTJ4j3jNw4ZNwwK",
  "key19": "4MADxyzfrcbJNYt9NTyLRcv897xRjWSTyWcfoWPotrYSXim6brfLiZeakZahFQ77hvBYHYnqJgzToxXdTfKn3r1R",
  "key20": "5waS4wZT1oPmZgJbfaPMUJ8Q1mNTvzXs2eGAHkb1dRG3KTmYYMfC5Lp1CGn3kj5f5kn86skzMJKmwhWhFFC9Fhpb",
  "key21": "7R6EDj26xxht3NZhCXvkurezgNNLHckY7urX35WWS4sf19SxjpPkNxCodMJKQ9MGzNsRZLCfPvQpyMM59cY2awQ",
  "key22": "4GSFFt8GmiMGzKvGYjbLnG7gjkE1ToAy7FkbTtb498hxsGAG7XKFegtcoHL2RUjQfcEHDV45WF8x9PDzunMijoSR",
  "key23": "5FHv6F8ukuPBwavmKKsHxLV2TgkZWeVhZ1MLbVW2GwU4gxYaWUisg6euKdVvLGYkZ34zk4LE4AcAjqy85MXz6emo",
  "key24": "4nJRqGdUR8sviCUN5N8xG8fhiFYzXtTohY2wD61TTEfL7mBMWfwXkRy8z96ZxfjpwU4SRedaKVJAPQuXknztmnrv",
  "key25": "45a9MDtG2Z5siVsbM7FnnXb9MFep4pTiBKaZ29eBaGjYhipMM5A8aaY6iAwmTY9SYS4rtnEqEztA2CmeZ2DjgZLq",
  "key26": "cDVZNtKswrGqpxZevCrF8HsyyqFm7qvnpEKgiKNP3sCFgc2NWFYDJDLWuvq3LMxVTnRigjaKZDk7Zzud1pXeG8z",
  "key27": "2G8XWFpQ677UsJH4T1F6Bfc3T44g7i7Swz3Bx4ukXR1Mjg3a4CUaNztFFyRQVBs5JJMzpKJTvvSJjr9hbXukCTxu",
  "key28": "2ccno7KybcfGjPUGYSDHsLquN5voDV1FtqDpFTzXFkkGopummmxMHRjNANUEBxnWi1cfSMLL7NhR1ugoiM8rfkc7",
  "key29": "4oo4dWoNpqXhtxCo6zJAZ1MRHUKcrdDdPNVk9GmfLciq5ctxMxYx9N3eHFk6Av9P1QAMryJcwNAhqo1YLCXqhbTH",
  "key30": "4GdQSTT6DdtQjxS7UC2LLch64SX6sKBRwg6B4tx3Zvvxg1hNcRQUZSZv6X8MehyDdbdRTC5TvmJYBNP5xVSbsjwT",
  "key31": "3Z6ZMrDbVBHqLhY8tLoKvHVJncP7EuDwNGDjvtxNVz67wXss9MjyvWtBUkFhjybMFiuRo3xZMQxvaV2yaPKuCYjp",
  "key32": "5rKL9rBq7oY5fT5t19bu5vqPpUKkgZcMMjjRQeqLQ6KTQ35eeAEqEXYKPHtEK2wC7Y4Tp7m5m6eKjGCMU7W835H8",
  "key33": "564sXiqgsRf3tCgCZ4e5cZobiRpgTqwp7HYozF7G5XaeGXiC3S8yQfysNm9sARcQh2hsBsFEuikBySY6doWFnYok"
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
