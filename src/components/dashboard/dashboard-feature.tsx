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
    "3SX7VxSmiihugUuTvTE23tRLJpXMLegAv4CyGwfDDQjgXa7VfUfVS4z4HT9rsHLwfM3QtP1Bx35jvxamGhqL8nmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ni9BqRmES6Abtmqur5nHTrrJeKpXJ5LjEETjpf8n82BpMSjVApNWWJB5qiQFsdG4khLfYYg2jPRBdp1qUEX9Trz",
  "key1": "3s4pPKFuBsyyCgjkeJSUqGuS3yqJ5zKwpFDJKqCkvHQLuackLNp8gyVEq3iDqErDjkwTsGEiTkAbPN4hBEApp2py",
  "key2": "anmTE1pXetXeDAg74U8QtCe3RjPvkUtr4Hc7K5M1kdLZw7GLnpumeq38ZjUwKyB88pyveBLhkXmBDEgky7wd6W3",
  "key3": "oP8rGpHBGXUzaBErUS3EpY1KiJ5gzySmSTxSHZqrExd8HoJiBYjYMtoKbsPaNH9irHTxvqSyTjZVtbMbFnjHprm",
  "key4": "qttA5CCreFKvfaK9myvxDnTiiUuLeZpLiaek5ugcKqKKEGuVYCCFxH2HpAxH5Tvh5RauQnmx4Z15gfkMz6GzQUC",
  "key5": "3WuL8nVVxCJPfV56Aui2NrKw4C5EoWaFuoJBL5BJBgHZELbMW76z9tddRyvvRnsuAgcygC52SxZr7ZJkdWk86xPJ",
  "key6": "3n1JR6jimaM1tXyy5WFv2SqYe99MxS5jknbnqqDXGftoN3eah8KadnWbyhWw4zp4A7w58dvGtjB5ZdAqFMTvSWZR",
  "key7": "4jrU4nMak6DqxPM2JjEP9dAyjkvL3Zczj6EWn6nczL2G62M4mAjk7huiKKAdpE1NjrgV7JT25bKrNmnB7TWqaMoM",
  "key8": "4E7rWNVmymdD8YjAAZDAUZEApUftELdh72hZafr4zYXF6uLG8j9nkmLA5jHAjNyXHNjRPDgXhk7PnCgZWnx5dKSj",
  "key9": "5igDdscKZvAWhcdWx9oDQ3j5JLDzN4xzk1cwM9Qm4cT2cHrn5UGXo1LmsZqGmmtexiQoyp8tgs2JpLA4Wif1R6Lu",
  "key10": "2qtgqtYETmCoPvHArH6TuofMrwChpoAhtE7rbHsjEyn9zBinLvEmtk3tDUPokFKpJ9haqXZ8cpUAMTVCKkQeYwCH",
  "key11": "LQc7BNC8HuHrYNWQgecwK3yNnyVpFxgTjembxrr8bZyZQZxHmEUgvRZgVZECCi242Bx8icWAE2xxLkdsC2oQaka",
  "key12": "35HUQr4pzRkCN8p35cBWEMYBX3xMcdDyZJjHxvBhPWjz7ACr561PuDkFcRUN1mmbwMH6cJW9mTLaNufATdXxJHr1",
  "key13": "2h3NXjH7z7fiS7A9AfjYezz9FQ9yAHQhcAaX7tvKgGEZ6bXTCn73ZhdaHRGLmUth5U4PN4sGcWgmNBhukVGswQ3M",
  "key14": "5UsmwJ1w3b2BQZMYyYHU1xJZ4rA6udUqEKQhWeZ36tYKGLkzhxNUJZQXr93qHZvq8S8FCRXYbKooef53ANfrBgAf",
  "key15": "3tvz1HqLJuLwHi9Mjww1VEkvmEfsgFK2TgkJY6oJhhH9EXkp2NAypapwoZziAn2B5yFqDDxnmW1Cv6evVSshtazs",
  "key16": "3paadPvib8uRkuw1fZY8GPwiDFQ9MMkHEMvmbsZSobURqTguCJYp5wCutqcKHpQY3EdYbvv1U4pgTFQwbP85xxfF",
  "key17": "5aA5oDwEhPRhi8W6WpdgCthBqhxte38XePSnvwvxhuXw5ENsKbjKG6qNiB4qrjs5EPZkotLBoKEKeBjZ1hMmxppD",
  "key18": "4AWxFRhikEatDAaUedwnDAejxNTbaHFSqafvUZtYHXd1cKc8711raJHbKpQJrc4LjNoHMAwCvnGEbdm8JaTfx7P",
  "key19": "ZEk2dzVF96ZWNWnfQmk3iwwKDZKSFxNoPH66bMeQD3t6t4QSJ1aKiuT759hovnSg2iboFZjGVhC5iZXXzh22ip8",
  "key20": "5MvjQN5RdzTDYNQgtBAjcJJrnHJHmAhWB7xdCka7E8eQAbDoKk4X9fQTcyXjvEFLb4yhjroBN2guBzEnsjY4BAqk",
  "key21": "3cotfoeNwkeJ225shkMC85XbVJKgfbXcAVzBHKWHE47EFsuJX5mmNEJeV8Vp9DSDY49fzk8krBFbgjYzPjqaQEAt",
  "key22": "3ojQfXv3KNjFTpvz6mousB6wV744R4ECZnhcKpX3gsbiN4enVkQi7LbWx2UoL3NLV3NR62KUaLUvmRugZfrCp47u",
  "key23": "JGRoNPrVsgg69ZbZbU5Y4QBECJu9jjuShFPzU6Hxbd159LqfKDgMC8oix3qmDBmdnSbHh8c7DcHtcUE3NZDUnZz",
  "key24": "5moybL3sMzk9kJhsUDZHNGcV8nBCuwiiCTNkrFhdhcAxaFLiAnfrQm5CfGHBEQbKR4BAnL6hydDbQt8n27MvTsfN",
  "key25": "5idXZkMP9Ns64ytqZs8jVZDav7jVVDcxVAvJBH818n2ZzJfuNQBE54jLHqegLoMD5iJpu1aLDjX2j92itydSE4Lk",
  "key26": "34zvo5Q4yFXkSRQ4nbCeU4yWvZxGJarYsZSv3k6HgSH9fY3ez6aBCUrYduj3oiXDvdG3vEVBxiWXyKj7h8mryK3p",
  "key27": "3TdQ9Yo6vANLpeKT5GWyuNZzmYz4UDzcJ5rh49LqoA22cUpXXFirfwPRXsaZaJZXMgqTqrBH961EDviF1okTdKWc",
  "key28": "28DHBVMDnZUry1GEpAwXywH6pRYFZcxKZ5juoM4rgycgkHw7K5b4tNHpLSY2YWXzQvfMiWjHuKh6h6AR5B1rfa6a",
  "key29": "5x7GBenKqqtUJEtdCdKHHgKP4RYW2qLm8MEtYUEEUhouWMeMHbzt4XnzpBx1CN5Tob4cvfsFYyiBv6E4F13WTwLV",
  "key30": "o6VQG7breFYDSGHoXNBeSB8f83HEJJDY2zkArvTVLNJxcnToJWGZRAq79pwZCJvt3zNfTPHQzjvrVwzWTgCuvLX",
  "key31": "42gTLyhKBs4kL1vNz2mczBiWw6g2UKrjA89r2L1E8WYkjARWG6jySbfgM1Y3x3eru7PM4cRmSk5ZMhSLaA1zAXv7",
  "key32": "62dwdTEWYbBUnt42cJSaT9ECSzupfiqvGJ8kKLpoE2sQXyRdsXSTXUmgtKQJfFCZkR6yRdJ4yNQG8mjQuh4hWmox",
  "key33": "3HLKcMmJRGBe8cNVhypLdVyFTjBHPRWa4pXuff8FzU7MfHtNdrUyYAqHaPA3iZrR42d5nCraPZQEsnUKtCKYQEQ5",
  "key34": "3Ni1yQdTJVeV6EKkb1D3rYTa9B4a9i5oVPsK4RPsStCGV1sx75MRrqFmGAn7ApwStFTL7LRt5weWbLaNFJ9FonG4",
  "key35": "3GzHwzgor1ZKyMDhSuUNhr4PiPVa8CmRuky27dvgHP6JsrJVx2Qhdj5SKUnNQwQYThjxUtTDfiFRc4kfmW2s53EY",
  "key36": "2UMh4puTy15dFjfeWPZXQxYuvXbUNk5ZyXE47gZkZ6sc5xZ1ZQTwjjLpxoK6DA7EZMHzUHZs3dmwQtx6WNBs2xyU",
  "key37": "3SMUMJCDJxKCUzroLoJeb995JknJkHkGtHWK63EwP94aVLcwfh49SNWYFqKL3CcehQ75nA7FtTQZiNS9zpzeJh4M",
  "key38": "xKyNmAPQjKxB51kFg7di6QvzKH5JiwozoyZZzE6eeYWKX1Ltr2ZVbmG5Lhxdouh7SWMEXAnagfn2Vps6AwSDKeW",
  "key39": "myCjAUSX133FkmLZEJzv5y3R4HXFhWPZcGMrFnXV1b6njmZTbxioSDbUXLQFpnNef5t7wVNsw9WGqJj4noXR9Pd",
  "key40": "4bfqoJ9Qjj66nFzQHQbHQzPfNEde3hQVvHkooRc16U8cNsjCdigwdsZjYQpecxpA9NmEciw7FzSCgyFp5qHXbmYS",
  "key41": "3oMTT7ScYh324j6SKVZh9yi9ZGFthH1Wd73vBauxjaSvC74UH4xt5Wgyz6xCbpuaCnXygWVvzpsz8Gr4Liavdfmb",
  "key42": "3r3dC7ir5jvFSK29b31gxCdW1knbiMbPuTsGtyap8hnuANX7fqmqZP39cAPxpNcKY4Wrhj1enD7dgV8RBW7iN6F8",
  "key43": "3DzVAbvbHa3nU9tNnqqoLVPsjf1xNzQyxwKCoetaLvXwY5bp9mHZjGKLTKMkyf9rF4RQKg1mBzjZ21wRbHMmt3MY",
  "key44": "4tYwDad4621gyks3pZHk4VSFDrU5tGZFTv1mU6E2x6p6emf5JjrMsrUPyaPAMtd9EvnQJe218a6ztfaSobhu5CZ8",
  "key45": "5BnVdBF36116QZP7QVFhJz5ZvqH7qbCbQx181BpqdHXcy44k1Q7iqTHLwRjSvXugTV27Dw7hn8JmBhBM58z1XwYV"
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
