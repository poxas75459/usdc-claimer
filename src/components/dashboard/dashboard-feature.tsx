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
    "46vwAxnoPLdwfEdxri1BjdxWHH83CYdcA9nkmFTZbBt7MjwV2FzubXZoJZrVqDkot659G27YdPkw2eVvDK9ZG6wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nAF3obEP98Aaun2wimNEQGrVgFUmnA78UXwYMQnWtdetHmFG53tMTP7kD7WS7ZJfGFNshi5GVwFADAoGPmvMTmP",
  "key1": "ofA1ksMesCyq4AgFNJA6C1ARAYYMcpVsRwpWjV3vezJqQa4USpfX1U6rtccMBVfxFHvQT7Rvkd9BH86UWdNhrW3",
  "key2": "2r7119wTdUYJ4LwcMf9vhLXS81UqZW7kigcE8LwZnwV8hqW8XUwEuT2cRtCXTH8q8fCxt9jTASPX46xMaoPuBjGV",
  "key3": "3Th1fK6m11CBTRtZUHRABQy14P4NDqTuKdE5KTefcqQyjddVyHeYUuGrmhzNxMYRfzNJkNnPj8m7QMmrYnh7bxzz",
  "key4": "5uQT29QyfbJGVmRzeTB92HqCoFeFRKuwXaFigvj6FVLxySdpYfpdUCH6dHmdPaazZHv9tBUa5eVVJm49MaYgCYJJ",
  "key5": "Et4eZThpcKBg67hrFo92Mm8PdBL9wKZdCRwC9KHDM9Rg6L5JwvfkJNmpfm7XPmKiTKemESvxzdffyR2xgUhDjnG",
  "key6": "5vS5aqMWKCMtfq7ayMdU9NdGmMk3Upejw1KM6Fbk5WiPkKrDJ8rLEZn3FxsXQwr1YScBDmqpKzerZtqBSCrHfStH",
  "key7": "2hBSPKW6fWVqFpfrarbg2KyobrdkhkdS3y2Ha3QjaGGQEGyV4en31ZBxwQGzA1165tRZXE5T4m4JJBwtoz3dFDb5",
  "key8": "4TfmX2URWEigRMiUhwonKN4hzZuP4HE1EgwTtaHAUBRtyUztm6MBMFhXhfoT7P88zXuqFKF1kQhyzgTJVFkZQopn",
  "key9": "3GSiAgBdnWVXcuuAkfqZE3mBkZzTy7nU9K772x5BQ7jpQXgzuoky1q1sZvZKmX7qiZ7kf4dEdeS2oThSFetArpnH",
  "key10": "K1PPwbVhkSKEh6KdHcHkdPPS9srX3DtFAPoRmLy5TH3oEqksNhgpvGZxLzDMjwAJk3pjkrGKh54Tiwb3Fw3aHNs",
  "key11": "4RJhcXNtNAkTQCeTjBvCZ67dUr6CeTWTkGfMGQyDpQy7FzaPM6ZhLkowFg7br9utYjux5L3ceUaU6piJyHd5ivS8",
  "key12": "2MQQ5AMTbEST2te2EXcnNUzdtamamDipiYxmZYZXJQBo79RpkbeMUe3o47E1sA9GdThLSAsDdtzV7EhoEfZiwanb",
  "key13": "4vQwWZpm7GumKWHo5iE2J2aw28t7nYHrb2kkYTd3qY2zcwCC6SzF7LgpCkfYbrPbYM8FvxFEJaDk2kXRdgqSF51i",
  "key14": "5cEqXRZ4PUyxwHZA21o6zpUe4qQhUyPfQaCNkL2cHKosKgwthERArumVend57FSP7jyQKMXBvLg4VZy4R9u51vud",
  "key15": "5RS6TZxuJHAGZ3gXL3CCLKohPeFjT1X2qTeopyH9u19dHCxyb5ny91U6CqPL5xjmXNtmnFLu16jasoHEZc9uqkCQ",
  "key16": "2wr11XoRHvb7tk5gee3a7vo5FqEj2QaTZK4xaorBbnZTXCFtUNCvRAfxrDesHs7ZBTGKWKP52SHLqnx5Euvz4eJR",
  "key17": "3xscjq7V886SJQCCduX7WH5whJuGNA3AJj6LxStzX87i36rBjoERov8nz9hWMr7pNUPzGsyNB6JukVZQ7zYjqQAS",
  "key18": "CEsnxBg6dRb9nzuhi5ZmwCKgCARG7JnkyMRs455avtAy9W5ckxrtW38CZRcoRaLtXnGB6R6aprFwh9AYWams5Ew",
  "key19": "3XtTNqrbmbY9cxJESss94NnJN2RpHYpXCyqgyqPUGiBFww3YpGFLRA8konGNR6KbN54PUbcSxbPyvgaVwtFpt8V1",
  "key20": "3vdh3VikKzftFPfLUkM1zrDoqf5mvhLDbMqAfRFKfjJnT6AtMyW9tpoBgAwwP4TEiDY1ukAVW9avAxdyuGsu2wHp",
  "key21": "63MXagD1ffEdajA2FapeeJkQRexTkC7czJZoHVgkv1Fpk6cYrbSGy7qKVLtavmoAx2KAZkgQ2jHJABpYEpjBkFfA",
  "key22": "S2upcHyAAU5ckQQEhVX4rFJKYtP88c7EX6u8DBVhBgeL9ccR4X5h4re6DgxnyYhZj8KEw8tU6chdiKfGWsN97Qs",
  "key23": "uQSuZoNgvcQeFnTzrtgovDZdDvr9GfpbVbGbFcNiLwMMddzytJ1vNQE774h5RFEJn7799workLbSJfJAF4GD3JH",
  "key24": "5GCEv2wxcGYz36UKd4Aex7ZQef7EPZvAS7jHcLNs2MnXSotL6E6ZRebVn2vJrviuHjfbbi8LyqMH1q15FcCTBiAX",
  "key25": "vuy1UJE9BqEFaXD7UJyavfVuAhpjEgeNYd7WYajrbygaXcry1rDx81FbJPjkQnNPhnt15WwAhxYKA66Bim2pcLa",
  "key26": "3CtaTX59cV9cbChWNEgcmrx2L7tuU9RPtMLHN8JNWKpJE2LvRfdRwv36VSus22FU5kz7ix8zPmUjvy8c9oMeRM25",
  "key27": "2eKJQGMmgn6oyzeTWpEFsCXy7LYWjnBckAQX19jNk67wM6c4KcwN2u4oP4C2v9qnfUaYBBj94hRyiSQje6dJ6Pf1",
  "key28": "3b7ue99Wt2qnJcJAPPRwqRMbY2v8wUr3vjXkb9y1Z82h51P4uKDxH9jaRKh61f3Ab4XAVMjoM85jjSAT7doVdp12",
  "key29": "w3b27bb3HUnMhuwr7PaZysDmFceRj5RCPQWhxAf9Zafr7KVfTu4HTi7EPaBvmQTJ8ixAPfh8jUDXNURiAqiZwyv",
  "key30": "4Z3b5eEe3zpagAce3w7VFxvrMn2ADN5DjcXEWwyXNutDuKDdZ2y3fsDrsFtM8UtLDpq6ghtyaZqPpDHNNRcDvmbM",
  "key31": "29y1mCo7cfDKY25pTEXwu82MSmFk8RpoPjRtvWbq66FBUWKJjaifcP8yBBBa9Q9AmoYdmuazihESo6c6782AYTXW",
  "key32": "5N4tUcVRKUn4nMkmrhE76Tw24tjPzfg7eSEYmbVh5sntaBqeTQPfK4p4HnHQuh6ommDr9vsFHuzDNFNtCfJKc88D",
  "key33": "DRRrVbXj4tMdyv1pHV3QUVFACLgipLhmSw2GhgphrUrkq7npkdJw7Xghi7R39Q3NDZYDqeGmhWkPo3U7S4A8GdR",
  "key34": "2rgHgKmU1wbLgJhE4ReA4gK2qYJDQmz6FBz8btNw3YJLW6NSXhz28pTooyPxXDkF6hCRnBFsR9y5F4DmU1pvYkRg",
  "key35": "2TzLtArUacz1PWcF6DbFZgVPhuGVsT7rBeQh55daSMdAkMbKfu4wcdqcpjR8p6QZxhXnJh5n5WCrJPRoZTiLqiiB",
  "key36": "4tn7qqyAiXAvbvQPCPPnWQ2YFKjE2CQKYwakeKrZtgYziWk8sFMWG9AXpoVoYh4uQmsraFPkvvquSzzXFc32nmTV",
  "key37": "54CnshN2o54MPSXEYfPkvN5pntPVwqRzreLP8YtvtKw1Q2ccUfrttdr6ZAeXCbjieFkUF98Qps2jXKs2GSdrsDBx",
  "key38": "47HXtNevWv3T8N1FNigJALmbRQ1eGy7LnAakwyzJfqK3EFM8W5xdkzWZmTezkGsJ8joeAUWLcKqqoeCVHrpP3n1f",
  "key39": "2fUXz7qkDs2xcpqNZ9LYEkNL9bGLX4NVMqiefikTzmvN6bn11vnbDZkDRzsdTQnKTHFheTqS9uFSNSzdxRdojZ4X"
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
