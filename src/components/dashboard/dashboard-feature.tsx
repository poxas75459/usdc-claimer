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
    "4CpsZQvWSpj3EFiJqz94mJgpcDwbbiq7qqL8MoHuX2N4ZU5L5JdGYq5KrB4e5VSFDP7JCXdFK7kt6obwgWqfb3mG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LhLRcut1XouceyC8WbFUDX3N7UMhr6qPe9Qe8buaDuS4c5Xko8qSUvkd5Q295NdMuwCnx5UspRzP14j7P6SituK",
  "key1": "3PL3bnmxNMKmWUngTGAzFrwKa2gkf3MF8FpzynkYNt8SFchaQ7qitxgSXvW8rSLa7KNMETaQ7kwtasxKaU1Ju1UT",
  "key2": "5djux5bPAv3qH2VTPicYTaHS3ZcNqPYaQzvRtcTtPKd5LZ9FkjLUqVprCjFr649QEgzw9dJDYhpVhDqoowNNfCrh",
  "key3": "2NsSqrKZghumb2fs1wd19fduxGj4yVPukPKdshCcsnPAzyoF9PWbvqiYaid9nPhBd4iNKusznV7NGNDaxp89U3aX",
  "key4": "42Buw1zcopD3exGJLVnvDw1ZjQuVxdPZpMZdgq9ecvQ1ytFPix3deA6No7vf2nVbfMSah3u7n6aSKxVmmLEyNkmR",
  "key5": "ZZyh2apzLiwhnKoM89vVS6ERXmorkuvgqRVGus3W9BiHMvXADnwsreVzG2DChqqqtYNj4tcak5z8C4UUy1RBkdd",
  "key6": "2VjMoBLPYcgcHVubtL3iKJ81WPRRHKnEy8MyptAemQdU8Wms3kkp48ppKbUyq1xgn1C8ou4q9viKXjkixMvruVW4",
  "key7": "32xtFSQQZpksS2DkHgYEsNTnCyV2CC231LJJgraLk7ziqmviAH6ftsPoj86VcaUnctavYXmM7rvzhMZRWuFRQQcC",
  "key8": "32NhVw4CupiQ7WpA1ndjAqXwBkbR1sMjWmQD9WzfffpN2bG4txnABDVxy62bCUu55dyS35wP5ZwUfUNSf9TPSHee",
  "key9": "2b3ir1UZvkAEvLGwjDaW8AQmuxnh8g5dhG5DesbiZ7bDj36Vox4wKkvfxvWNCNJJCTvcg3PVGv3a8uZFcexSkxaf",
  "key10": "2uNuiK3W4SyAMkzPvGK599tR4FwYV7gwm7W5DB1vUWQaBQ7Zge1pFBbwdnQCSt1zqKJgCUp2j4tu7Aapmhkh8bkb",
  "key11": "364RyDAfmYjGK4cgfsLchG1v8UZ1yf35MwJpSAdHZBzvK55FEeNFrVpRQ9H77DFZowvEhDQPyon97AoKEGZkPLzX",
  "key12": "2WDxSGyPsmSfWKBqM2eizKRx7iUe7oMB2a4PrYFPxgyZCorVjayTyV1sNYACYBgTrvwdk2LPToGg6rTWkMKoEQRS",
  "key13": "59NFSditxQMFFAK4yhp9Z8DZ3WUUk7qHM23DKEvHkV5m5LBcTukXS75kv7CAPqiUmHrp5GNcRhy2ShRjW9rU8xT9",
  "key14": "5bKFVdtef7igGH7yqzbkPiXYsKdJto8QyZEgJPqjyo7EqKNGE7PW2emU26yBgQGtE87hSFYS9cD9pJxn94mykubV",
  "key15": "3MqhS82XrRsWmq3rU24gHdY9ZAZj4B8u81ptcmibXz7F3featwQ79bBbyGAASLEMZg5f4MaFmVK3q5pUVYF7SWud",
  "key16": "32md6qy611sLUVFS72btDjF4EdSPDyJCZzsGNw4iyfBvpp1cqd4CtX4sazPjBEcqMDNfWeSdqvwFyrmb3ynd9H6a",
  "key17": "32N8eXBn2wE8PQvKLBNLuKuSMbu3epmCDLG4rc4bLRg6utLpSa2tF8YwTJeZMRzpjFMgPM1rZsx4XD5EWYvz4x6Q",
  "key18": "2jpVQJXHcUPWrBDjqFqRuL9bBeK5pzk4KvdriTiKvDP4GqUS54ywzfcdxfynbYm329Viw1TAsFUkz2o3LJrs8Dpj",
  "key19": "3N1cawSfiDgVh63fActASyXnAyTxtAVArvjbsadmWd6smQRD53LB3YZSetqQD6KXTMrbTj4EvePc2Tr13ijuE9ao",
  "key20": "3gAK1JyksawqKzTgnCBbExp3ofxq8bGKk965cNaxpsAWMp8c5grgFQq88b1SYEsxjSauC2yXGu17gLX5SuqzKkkt",
  "key21": "2qcSmxv5YaU79o7DEu15xq9RUtwUtYrz6De2qXGrWU7zPcLEhpequJd4NwhMRAxXeY2LHsskUdSy8UoMHi2hASHd",
  "key22": "4eQAsxCzrMAf6F236qgXaVAwzMF2MxiaQPqcHNEcvv9m4Dye9nargmRy4jECUx62se5HwpxcuyjhKokcmpbo9HPm",
  "key23": "3ZrUcdncZuc6HVq3hsACEqoq9CdSjzs3dbpuJyuhWqDTeo8GRJApUqYbWriKHUkhgibHX4zpS3wvTCFxJQ9JVnYx",
  "key24": "2cpfL5J5PfH3LqzW5k53V9h7iAcJNcbiszL4FL3xbvEKoNRu3C8qRGsZ5soQMqFuVc5iXgbpDVobapwTdRF1uT8n",
  "key25": "222EB2kHNqtvvGP6idKCkihoHCvzy2uSuP6Da1bgiTspSuY4U3kZo2CDyZbeuatme7VyCAcTQg7QDMcPauc3ALaG",
  "key26": "2JtJu7h9TWFAHVRyrGHBymaz1M9k4Z2uPWYDPrRjfPhn6DgnZq5rxf17HiuH3ZyL2Bqy8nuXA3KL1zkYfAcFNThU",
  "key27": "5wqhjm82RJjpQ1vCMWtHpUaMm67WVq1V8wjYENL2NAZghMHwxmae78o11R4G4TcKUKb28gjqQzVgSWjbumoRvbZU",
  "key28": "5R7TAZLJSdcEVXUqfsxmrApLYudvEszPmrpiBbKs9gPgRL4ZhxnkHnS3uHNwzHovF3X85dBfM1VZjArk9TtFafNr",
  "key29": "3KpyKnYZyjwZRxr9Fs3faSe1HSAHQX3YAXCF22JJgoQ7NtujTBmkn8a4JCJPyrVEndhLAVtnCPWP3JmjLBwNSCZi",
  "key30": "3WJv8QKe3MwNRKFCcE9Wz7AYVuGMiGMaKagLhWtkQDqPmTFQKNgV7eDAMwWVGYJBNFjBc8qQnsRQF695eSnjAnnJ",
  "key31": "3LD7fdWcKaMq4DpEqQcH3vszK27L9MnZArEmHhSc5aa6apdZRs7edqTg6kGVYZKBTk5b3tDoCZFGLaYANm79dfeg",
  "key32": "5S1LqwuN2Q3gjtFoTeSJiAoxjXsc4v1HjEdvms26saVCJNgK3bQxibonZpXLmFg8oiZhoR4brs3MwuQXVATBo9Zv",
  "key33": "dxZ3ZvybfT197m8SX5N5hrQAfL5q8S64r26We3bm6rPyfSAHGzFfR8Vowm4dPNN3dMSjT3jfWUEHZdVVgaCKhGJ",
  "key34": "3sspugh9n7ALN9ux8AaCPWiiABVEG2qt2aXRa1MZLWVhpWunWcTsn7B2eU6PpQrbZ1kQBkEMy6UwzSGqeS5xpmTY",
  "key35": "4ZFL1PpvCTAC4BRpLbgs3uMFP98ypBckq11wiyHCbjwWCnLnhn1QXiW6Yh1zEaoeHBwPVRgN8r2D1cezzf73kjC8",
  "key36": "38anF24s17xebSy4bz6zenYWdg1NM2rDhNp14WJgUYa9B9aiYC8rW9nBXacBvZQBH77gMPUdy6yqsAT5K4cbXjf5",
  "key37": "43tcyS64PrBCN1V4CsCMmiQLRPNXXMNN1eJ1EThz7wjyrVLZNh6UovQPaygRspwpefRdU4PLTz6Y8vjSDfGvBHym"
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
