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
    "5U7FXXyAEhXuX4tuuYxuVwMTeaYweU97o2YcXSRZ6NconWHZqxZBF1d8vFD6ZDpY1PjqHvzDtQqU4RTsLqxpDu55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2syi57VHMnLwj9u6nGEV4bxGcqBrdEtt2FF3LxDvgMLacrSBWWw22Yi4WPAteqQHsQVU3DFzfVikQvB6Xdcds3pU",
  "key1": "3oeZExX5zPmwksrwpKPz3TnzZGq6RowSEoavaXH9QNJ6bb8uFSH96pugD2SRACALTTjEfnaVayg8zLZ8wF3rorEZ",
  "key2": "3GjgXx2Xkh7eLqFaRHQzMQaBJwFmdUMzQYtt6cSYrWJY4Cqnz2qkHuhAYaPh9qTEVdL21r4bk7jrFZeYWpjhD4My",
  "key3": "FDZo8K9ihhrHYS3iU5MPGvMqKBePE2SqvNJLU4UiLdpQmybeeFs8fy1BUixPfK5SYN5oxSjcCQr8SpCiyCyYqeL",
  "key4": "5szVL1VJmdfPJAs6Uf69pWtK87d3pUGEQa4S9iLghmYUyuYDwZbtXrjWEHZ5uQLZtBKpg48qLimvaLeahQqodE2R",
  "key5": "3FqMMVKd4U5B9TDrtx5eoQs62Exkp53epqx5RRLha2w13YvkuTDhoHnk2Yb4pFoNvbcjKWtig18MjxLzw2VZdgrH",
  "key6": "4v7cDBuvZSmt9kznJWrekSLk4Ktkay1LNsYYqxvdNkaix9dKHViJmeB5rNJCDHbas6A2KCpZW81JPkZQP8KEXcW5",
  "key7": "3VZNj1e1kq3trjyuStu77mwNqXrv2JNjADKhyeUrxJdCqKq8EiwSE92VNKQdCPVxJ3KTVC82NyRBhhZq9zKubXi5",
  "key8": "2YWcMhiVrHvXqacdmL8XK2ZULef8Vftqw1qjaCSjGHvYXLmw3Hp8MxtWchPTNQKdLREWHG37LMC8vngHDjNA47fi",
  "key9": "5kFhE4AvqmQRYfS3JoDt66F2do9efXFyqwTTNxcgBeaqDpVAjiofwPqnKM8unmqD1AJCab7pv2TZYFx7YGZJNqw9",
  "key10": "2Ceds4YnpdV19UD4HujKaVGcgNXNEJFQtK4jVtQZstHZSQrT49j9ERm9QmMx6wTsUaXwz65BRSa1NAqJ3sUcnaYg",
  "key11": "Gwe5NfuBJG6xZ1XC7YgxXh2s5UDCjtfd1F7ZuKznArwoxsSBufJmJ4UXkfLV1vVpRF1N7n8EwDsEEL5mVnVGLgD",
  "key12": "2rickwd3mfakkumFAMrz2RwcnVm86v25xVCSbPfgHdgjWmrTnhcVtJfZpD4NAAJGLtQZkAj21ZXYAiAfWrtxnWJ3",
  "key13": "24NCcsnbo48BsUsHFRPhm749igYB3i4iDwtZxDY8J7Su9zMbWEX8gsFvLijP94vCy9oceKcfrUgbWhtKoTHiNCgy",
  "key14": "oHBFtzbd2r9xTRg7MbBTVjFTQnsYeDt8gHYYWiXDWqSqYwQuc4Z9T9tMjoXigLCaF4nZXsspPyLHFbjwLFUcJct",
  "key15": "2kG5ScdU17HDfwUp6F4uDmBbKF6jo4aw2ygxFeYvAyqYrVqH5qTWU2xWnmxCE3Wvu1Lj34sretTAygmKaY8vAk8Z",
  "key16": "2HsfHCMm4GBZbo2RFazHgn172usxS4hTHyxRqt7q7ZHTSLPRcnJFgQxWc1LstoGKfjrSxYdzjcVd8WN2zrGsxbNF",
  "key17": "48aSVnnhnPEGD87rWJ6VtrvfbBqDm2C5YfXKBhs5wUsMMJA4wPvaEko31HqjAEEKrz7knhyvYX43G6wFRGVjSZ49",
  "key18": "qwu4bYPYjn24eCaaiswMDZw8sqWCHQCK6WLyVkG62XVjHjEBjRPXEXLFjkqGf3Af5uS3zu55dDBDfHhxSUXc5BX",
  "key19": "5zXhgJqngtPrXoTAJJH6EzfYbX48P2B4d7efTiuSFWHSaosfFpUDnN7MfVY944ziG7zT8TBjiTgCGPRaprdMQjHU",
  "key20": "2bXYqgDaNxL9L6Zfd4epTP3A4dnfmGr5xmAgN7jNkYKDK9Z7tcUA4Mzw3ALANUcsFNPm575P6aznBjP2hDKQxRAp",
  "key21": "53smq6cGuJHJfENf5mmoNE4mFHv6AgH2LttHnuGM8rXniBTVbpUAyT2a4yNiUaSPvkVjWPf2wYEbHfkA6s1m3Npx",
  "key22": "5qLvTZsPs3XND8XTeudGThBy6zRDzoxZ1zWFpS14Rzk49b57Y5DrMcL7xTHKx9AGjMB85E2Bnr7c7VRtMz2mLAmp",
  "key23": "5MKPLuc9YjpZxbH2KygMkg5HFEFdcgYUzMFJjWZn82Yuhsha8KtimBgmZAbDd7W5VXDGbrmJpPLPre9TddNG4EpE",
  "key24": "5ojT4zTeZcraXofRt6kFPfgPHi9DHvqcdwsSWDXvVdaHyKXkhoPXVxKeM94TDXXdeMyruSJr2r1AJEXesiiz8tuP",
  "key25": "3L5AcKg26C5BNGyZd7bTP2ZgbaCAmgeoPh5wTB5zgZrTff2QFEy6HJ3ksNcmxmG7ybtA1LzMfKuEqq8rP7iD2jGZ",
  "key26": "5SMVNVkGyATvforKVwHYFPRvCRjtcxBfPPQ8svDfjDC3rcRACqjFrVAxwmWZq7VLCay5maGvqwcGwitZn8qATW9a",
  "key27": "5UNbHMQw7E354R1zS9cKVZgNpKNuywtujTkK8mBePzayzC6UU92pxV3kYkZ7a5yCQ6KdwJC7gvNnn4f8D8xtC812",
  "key28": "55AeynYyyoWHMoiRP7pxBu2MMQx3Eqaot5XW8RoZuRiWiYnUn67v2XhDVzviYya3WzXaEhzd1xJFAj3ksday1JUD",
  "key29": "43H3tKTozL5MfvvSsZadJPmDPGcgbCiLz5HvwXzKJ1swbCEXPXr2cGsWFHgVSRQW9hgkLob8uQE347SwoDcmSGPu",
  "key30": "37ZB9Yi3aPdDw9WQ6EQo2mvQbaTjoPVgaUZvQS9udhc6qyfbj9SbgdW2PBdBJQ7ce8z6UTFcez6LGB1EA6gDuktV",
  "key31": "2Ycy8KwuRNDrzShSVjo3sHCyVGckomPxfeq6GAHuaXRedsaRQggR3raEjELWaw81qBQgRH5ixJ6XsEVW51dbepqP",
  "key32": "3TFD9FaSxDGNj1FtsYxZMUEWCwhUDBfcGmeiQYsW33FfGFk5ZNLAitQWQYJrSk5KFnMFQf2jwsEdthsX6GH1U8rH",
  "key33": "4Vt8iW5JnctUrJNMiFw9rs1x26ELXoKh5MCquS9MjKMEPyvJtYzjtjGxWqLmYZUG5xj3i6wy5YTofHjFrUkexxMn",
  "key34": "2xiVpWhvwgRqAWmwVqfzcHwGJEWfoHQZVKtsE9Xt7fdSJyrYCuvTyfsTMXfSjVYVf23AvjyqkBBoJPMLKXDJsYd4",
  "key35": "RpVuHmeXdufCXGvKXcwQQ58zqj688z7cWFwTHDHqNzTyauy42oedjEGky5mfym8FU5wjfkKgM9A8PfBFHSasH8k",
  "key36": "3yZjhCXxkwRZdoMj4qmFipUVYMv4S3A3GydpvKXCmcn4rxYbkzPPqCVfSq3KS8jsm3cNjvRtgFvcwQV6MsokPmF5",
  "key37": "bmDZJmTicBZAdzpkje1S4cxdrAdjvr2NCkow1BFX39tiNqe6LodcyN1FFgwzaJZ7H28nHLVc3r1CBJgZxY9DCBd",
  "key38": "51ZP45mWjPaT6ykZAB1s5FkVkuVeAFQMGJNfY7KUQpbtSUuvSYEAibLArZAVcTGArbmcVCdWjvMPXwJUFqFBYv5U",
  "key39": "4LNBa1qGKipKCFyrCL1fay94gtG5oxTNQSBJWZnqo2Ass2sH2y9caXTH6zHU8tkgP826K2hC4Y38VSZADwenKhWo"
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
