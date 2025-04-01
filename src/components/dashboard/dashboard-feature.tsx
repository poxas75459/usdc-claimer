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
    "5q2VaKudbqj5winbmzw171rS5feHJind2VV5jY3w7ZbxLe7VHLrPiDMB687idaGFNT4EuiwCLhgULDXFf3synGZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GE2kmidcaTxUGjJsJru5gBAyCpi1a6GTnpj2XFqfB4rehxvnCpQdGJbqRoKwKd6PQW3Lync2RbtkaTQyCyPCRJW",
  "key1": "auwKKaWVX7zg5Lsvdd7PDPinTiroxHEGoZBKVv5Z7pAGbDmgqaZCCA6KuiKkTBM2nf8PhnDf8pGyudUEkBRVHEa",
  "key2": "2LYTeGoxsz74Ypmw35qHVBTSGgwxt1Zz4mXrNmcsJXYB4u6LqUMMqB1ygLotsMwUw6ckdiVPJy1AHEzaUe7vvaLG",
  "key3": "33xybVX1VHPrWaVcvC5oXFQBP52dUL3YB4pP1WcVn5LZiYrQ5m7ajoX74SM8rUpm7D49o9nVtmNFbx289GcNg3sC",
  "key4": "ENdJssm6YsfBv9zj9yykxcUSLWhvd9onCbPvattV6v12hfJjPkBAEqqX5TjLyn5qBSYfohwueU2KV8iVKUR8KCM",
  "key5": "qzH2vciEVvXpXTkgncHafoGFWUWv1K43zydoRDnhUg4NFma3LSCWJ3dWibvH4dj5kGxsaTazRoTeg1X6JmEM9SF",
  "key6": "4TsRgctUrB4xeakNRajx5K3RCATtt2ToBSRh6T5KJPBXzHu8Lbo9i9Qu4zMxvPyEbfojngyxUksWkdPfDmZc1fyy",
  "key7": "4mGXkinC4PhyT9dpNSANHfGGSmSbmv6swxJMZZiLPaMEhBMBpXMv37efmk896MPQ1ds7ya8Jw4YJz4YbRJUu1Vst",
  "key8": "2QXciaX5TWqcQZPVmMESVq8yMpM23TydCr7qsDV7UEjuqumzp97wng1jyqDGmS9DAWn3d2mhunPe5zYHX9heRH8V",
  "key9": "5xDoVCYNTRGnKYtzWTFayWvWnBiufWyWoqm5rWDGEXR17zcZ6RrjbR1rRqjnkmhz4BbMMDwZDKwkcNMaFxAcwyfs",
  "key10": "1hztbFyVjcLugTXir5VXX96XGuxyFF8Sf5461m1dMi5NSPZZYERqcksV44Sw7npJ3QQncC7ujNwNuweQHDi65vk",
  "key11": "S1CA2g58cdkFMWMR7qkXPDtZbwxGXiWFKXs2zskkF8CJDsnhQWyv8ByiwbF99UpvKVgMT7FKB1PmtGQpNELDudE",
  "key12": "2kCEYGuGrbirGxgJFy2aHDWqQGHJgbSMfvh5WnEQEBNEL8SUp8XhaTqL6JnqwS1Q6mDLQRp1ACbGbxnMSi7mQxB6",
  "key13": "2LMTnpnsEvosgVz4YUxMgsZ46GeUw1H151BYDKVLQe8UTK6kZ9JJWQwAewy9NTekuTdNRs4pALxgsCHoGLxgkeCh",
  "key14": "2hdAMygXYKNFjVkMB2ftLzHL8ry6FknKmEKFhSMVw2XF63JpgRoBbYBhHSt3LRzimjKUZsYNPbxngiGH4VLUCbG5",
  "key15": "2jkysfTfvPsFq3R2kG9giydUcyHp7xUUtXqozBRdAScvGcETgKD4bGpV9dBEviPFyb3QodAWKqWakxoTm2YzvTRS",
  "key16": "4KPppPKaRDZ1hhh1YrmojHWzvcdPDHH9QRUhnCCqY5h6CJgnRosJvBC3GPBEWNift8CNGzuc5cy4NPGozPtu8mKe",
  "key17": "52LGVtTpg8H6FSGoU7VesapwbzcvEW7LbsCVaKY12weWdDZPw3YmXnBX55XBD4REgv5r9FmbGv77K9cHcZEgxGGo",
  "key18": "2xCQbSuemKDxV9VuWqvUDFmCnSHqhwiiMcqD98mYne21mGQfugbNeRHJuiGDtdrLnbzcAKEkDeodCEHcZtEJ1WC2",
  "key19": "45efpbdAJF4aV5tnQdQiGRmbRn8n8c6T5wHDwFoh4WhGSh83VJnVo1CA6hJZpQ1fBbhwdcLAcXTkEDgr9YW8yRF6",
  "key20": "54GuDXBe6YtHQWKt7Na6nZYNDNDozPtTieSmV63BmHuyaeu1Do97KBeyJVqesvWjiNoeKNhyWzHDBNfA9ukTwTB3",
  "key21": "2mBduLrufJFWAirZZUZNpbvqRwpa9NKPjH9LweFMKyRniDxGBFS6c18jHjEcyHTumc7rpadYBju3PY3wh6f3h4NU",
  "key22": "7vsSDy5EaUszLXv6SrpWQqhDDn3fbxjxB7kLXwESMJjEzqLYFo7nQXwuNWdLxZepxomm7Z3fEyaw97i7JhjjF6K",
  "key23": "4CRTvmBKEsaXLfSZLa6kvNzu8LL2UBtjPmvg9oVN3DDb5toGTFPeBdEr6R38ucMRVynUrGcfc9LddE9B99neuenW",
  "key24": "dqwVXJMHoYuoWQUZ5P9Bbp97HSEKWcGG49MNu5kYtrkL2TLfmJ3rZirg1CBYNk1b2wtTVhNxjnJbTB6YNaiB7C7",
  "key25": "2pf3psdFmmGtVqBkXNpe4tBir18i7mKi9SM7gx4zQTXzJmubG562u3i9wqaWZ6nbciFcM3jm2tmtp8xwqt5ZgxuX",
  "key26": "2wNJ1xnUSxQfnYf9eb3meWuhuHjkJJX2qqpjufsRcSyBt638mLzJL34HQLzjxgrYZz897Mz74nd341xhgRWZyPnP",
  "key27": "38V3THEY5mgHmrq2tCciVrqjUwKa2LLAgH2btfztN4PgsDXB4yd5zGNDczrLcjX5iKhrJHNv1wmXpac6hhPcD3Qz",
  "key28": "42T1wtN8Z2z7pwoJuFrkPr5s4kSuaQ3bttBrqUCbkFM1YVsgPuiH6Nt2Rk7bBn3XCTK5BXgEK1JYYPJvHu11HKXj",
  "key29": "2QkMHPJsu3tHykmyBuWxyphrQg2gF4AVNSPzQvet9GkxHyMJNe95eUXMckR9izL9oaJdgLEvwkWoJrkPvAvVq6cq",
  "key30": "5wRB8FoUXfm4ANg5mQygkniDunF7naebkdy8pvEtNbhyXXPxKf57czyZk4UKdAnhzThppUET5ntgjdMPc98N8Y4",
  "key31": "WDFosSEk764vnU9qYt6nx6uHiYBDosVW83kuZxXr4RBJNUcJqeTewMgEwiFX6qvBshsqCGsHjANZ8NciWpE9AeG",
  "key32": "yMapuFBtMiE1x4q4sZ2Zq3HWVqACk8LK7JjP8SepDhdYzgW8bpBh4q5U2hmkmiF8tumfehzSHbiJAajd2jBZff2",
  "key33": "2mkaEpRi1TysfAB23N78ZMfP2W6VX39Dz1DqfDGSu6DbLAGm4RZHdFtoaYUv9x3K77XTnCWkHiDgkbZMTFnoc4nq",
  "key34": "JdXCuiKzKnBfdbjujErhCHkCs65r86EvHZTQjkyQ967LdkGtfRCPLQYCx6m71KynTyZmWVNK3Ef4qt62haVbtRG",
  "key35": "5eNkn82VErXPQCDVetWEjXpGmmmPc5QFdJvG2yvEvwMymagGqtbjGLYvhxcGYy2nSdtX1jXWY5SqZjXPEVEnbrtJ",
  "key36": "3iKvZbshyMQRd5uMcGvVofduqDuhdtf21NQLcVyjeTnq9zunQHVHt9hoZ4D5woz6Mx6Taj7Gp5hqNuM3EJzWimuK",
  "key37": "fF7xBdxCPjHk5Eg6WsCUxDyZ18MnyGBjAtESs6wZfWPMCTTjZnV35u7SV3WHJfqPtdhys4UxaZqDVX6k3NYn8vg",
  "key38": "4Rq4dpAjBwDBbyCDpETzWsyVgEjKngoswgJeG5upPHWr27K5YR8LuwbyJXWwQ1z6wt7nnYoYxAcJ9ktN31a3fdCo"
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
