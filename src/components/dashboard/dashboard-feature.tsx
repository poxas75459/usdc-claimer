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
    "4WXgSsxDzixXTNhUKsJD1o1jPhaPPdXto1BdSjHxZoJ8aayghmQ1Bzd1JLz9pDxh8Ec5CtEnq6WhH1eZgyS4NzFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vGFYDfghEELGd3FKeMKk871Yu7687ek8e8UEq7bTBiVCA5VgepSrmXQakzbM8tNAxb3ukaDz3k2xrHDweqRfh79",
  "key1": "34b85PHicvvM6MZejC43KPGaqgtkpMiMCc55jwRg6g1MqKkv89Fv7qy5nj4xuYfR5VL7GK1ND6sWEumz2YG2qnwK",
  "key2": "5Zm7HVDXEZ9qb1jh6rivtMz2snk4uzPx3GUcvVhmrye78upNSrdUMTAZEHSKGb8jL8xrLWPTq4NGRGYJpFjN1Yd7",
  "key3": "5XubLxv1mdFFdt1THVHKanPbTsbKjVJ3bh8dccHPCJ8uAe8JG6GVj7Lje7TjnDGLkVqNBLm92e3usu7BW4vnS1Kq",
  "key4": "9gjAE5JguzEUydXVpPK36Wi4LLo4iv96DXGkhY8v1TMiznkLoRpzSPHpkHsZUbB582gK9RMSNrDcRbGcSqJTx6u",
  "key5": "eaRFTa4fmaiwZhb8wiPHwUXSXmkUGhCm1ukw2s6uqPXyCwdZbEtJLJwiwtspzPkhQEsSPhmJJXFxg23aF6fWnYz",
  "key6": "5CDWJCsYCrvdc9zfakzwhRYpEzAbeDCtZsu5CmKTmuj8uEHqgMfwZCB7Q9fxTUUqfPubntDSbrxrfqVYABdXZDxv",
  "key7": "3vvruFyGkMZmQSZdmpDcvWq7YoTP1k6uu3SDsZbqwnbXDcReHrzNqHoSfdd8CaquaXCvCpZnMR76on7sXys46FSv",
  "key8": "46qNLNGsYNQTuJD4UK64EtiFyBuaeByvPkHyMC2TEzRwBGCgMFZB5TPFYgWvC75titAYqQfkoeKaLYaPcz1ySLER",
  "key9": "3L5ZufMk1Jur8MaZWVKAT7h8SQzRK8nYFjXZoMvegK8xNxqJZV92TBi79wQ33T7MmwKstqXN1eVywjXZpyP2Kq5N",
  "key10": "58KsAXdvxNrsxZgmomUSHjLLeCrksBDdcGg8XEruheGnLzyGYWLdb9dhKribVgcr8Gf7n4XD4hZ3fvPYtPKcP5fV",
  "key11": "FtTKRacMeqweLBko7p4ewKi8Ua9VnrJqPQwRadZndiiXBNi4HjJLrzqoG2JgqExXTKZzPUCfdubp7Hh25DXTqHs",
  "key12": "5xCS3UB6Rmx5zmMtHTzTTgBB7UbinHcmBj8f6C37hvJbHy52sTs4vJYD6oibeQ6mDBBuQ9itSwRc9hJSaDAy4CN2",
  "key13": "3GywPQ3Y4GLN5Yty7dNop5n5PqHRyeTnoTDvPyJ987tf5V5JqYZdmLA58fAiwyxBGNLPtzwS72eRRmejdJcPfuRM",
  "key14": "2W4Y7xPxpMA8WnfMjTnoFoNJJNoJj8aNfywz3CA569Ze5NzdbNSw8mtawdC4yM8P6s1L2uXqJC8nS6VSXvZgpjAU",
  "key15": "4cs8V1T4V37sFTCJqMXYLoBUVzBPZUCo8SJhmWZ8CtNEc7q96EwMZaod7xa7HoCoyYvhNywEYSgcRhJLfpGKvUkC",
  "key16": "3QX5rj5bkEYQ3nUrkKLFeWJpkHorMYB15jmJsjgsVXx8iW7sRHbRyDXGJoyHyaBS6fDdEkwduTd9y1vm7USvsfdR",
  "key17": "33XGkyFQzRbUWpXvx9eR2C2f6qFbnBRZbiEy5j7LFRyJ5LoCehuHPz5dHtZusYex1fAdEDgawCSTSwviD8Bi6bcj",
  "key18": "62jWNbRbsuLJwMZknHY8Tkpi2SciogNoMWnA88RAb2PKQYMRh694rBKQ4irLQPYynunVLdVQtuN9TbMYsg23duW4",
  "key19": "3KUUpSmRPrqtJ4eF7mtj7vmvpkDBoFK1rrXyi3y1SLhi9Y9y6bcH16hqJXDTCq6VLufPwX2guBqp9EQx6EfSuTze",
  "key20": "4fsfebUUbeMyem1KRwmKHrAhMcgzX9CSaP4D2QXyj48aizGNaCv71vXPeAcBnU8tgDwGfRAsaMbQYZnBHN9PckXH",
  "key21": "5ajq2MBXumgrpQBmUECKsFTb6rcAfVAZqEXMS8gA3zG7JNZty2TZvGU4sVM9ZQfgm864VZKu5L1QEbtiSTxuB7re",
  "key22": "2tJPGo5bP8LchqYeQBFh1U7TmpSW1WGAWvyxM22ojRd5hvKocH2KknWnFBJ2prK46KUBGvYsrqxnd3yTshJx2HGM",
  "key23": "2USjntQqNkvga2v4yxAW8LMVDbWSvLiiEVFowqmsUqzdfVgGug3Q5dKeUnmDjjckDC1YBXACqMf7hYFtqggrG2c7",
  "key24": "2eGEu8fn131ixaWus8A7WR64e4fg7X1yythSwLfGWfhMQfkWpexX2TCy3EwMNnEZSJA1Y6dEqGWA3kTXezVAeTNZ",
  "key25": "3GTfbqGSHVAosThEKVqjkXETfQ4BLDRQEksp16BLFwXdPwZRxqU9WXkXxRyGUCRRjGefHbkD1ckFsamv5N2U9ocb",
  "key26": "4dBaagYKfYjLNXiYCmKP96gfw839mnynjCV7MUDzJ4rANRWom2cQX5P9pBUZ44WkQBEnDXSCoN2fPdajYT9j7ZLx",
  "key27": "2cbYgCTmDozykDrjaiR6ZePKtTUySRZrWzN7JZYp43qqrpTMP8gTqYnrBKFWHaXJQAL7UBCr1jAEmDNma41T2fXL",
  "key28": "42agSTyjQb65XotkCZ1gXhyz1YQMZ9cFWYWHVhuxXcEv2bweotHfVFQZ94mHeLJPXv6NTMs8QME689PCToCNXmMz",
  "key29": "61Tjde6fnD2xyD2MeZy9AJAXr2GkzTsyJa6ugRqnZYwMwarUsfzUCfy8gejidUNzjo4Z1ef99gTgpMrkiCChd6zk",
  "key30": "ABgwTQAZxkhs7PbHkFzTVLa7KPnXyWnkE3VgR68ijyvAvkhFBSRntNh9qdVkHhgsD59KoouxD78VkKmFDuuHkWa",
  "key31": "4bTtSJvyNRaoBqabqYqAg1EXHMvYgouV7WnsfAwvrMMD8C2jxV6QRC7fcU3GpTSpiUQwwbbPtVpFXbNJ8Y4nmhgZ",
  "key32": "5CJozJKDyxXvw4L2eqjwzjxM77etA7T26cevSj9m8tjRJL5PDEpkQDini1DPEmWXW4SWERKszACtjPzUWYVvu5Rq",
  "key33": "ErSSHSqkeJTy8aq1fvjdcsr79FVfdKJbiDU8WFgurXYn7N8Domsb9EB21uiYPD4uFfTueuaM15iBumkRKdigxwC",
  "key34": "2wCVFXAvQG1dMXonNjS3qBtu4KETeXgMSpkFiTFzAtuNH8fbvGzJQzywrMMeY4F3ZtMS9zXDBfHqqC3XjH5VBM7w",
  "key35": "4mtRMdd5u5ZhjGebeZhWqDXhEkzpfLu3EozahnwPrprQuBmRvM3z1oPrDjcmExGQ1YpnUPTvWy3dxVM1ZKctvg9",
  "key36": "4FxLSXzDAhD4Y9aavp5tueuWuS8t7rzST9FEscsZaw4jx7RiYukqiNJRWqpbR5ji5keuzjoDF3B29UvQBPvy48NC",
  "key37": "4rBZeXpkGD83nXYouMWVXifKchpg9SB5hxTFFVFGYGhrwZCi2oMBS9cYczkYkdNm99F6CbT6yNCSvkQgaUxe1xEX",
  "key38": "3FSvPvXFRAdoUXBDhLSmMNYLqUoGceWoCRAjuXSxhNWHKkdc9BzMjMfDSoDqfB9Ji3eRAUpJhH1dYBUYmWNAUiEj",
  "key39": "2dt1cyNaiJUKetehVxLQQg1hELUdFsom1ZdpfqopawqF2Gax8Z9WwvPXKt4V2JCaBPur8h3gAXiG45guFaBevhym",
  "key40": "5KaryEeMy26GuMWewVpwzyNh8iJGMD7WBVSwtf9LMCUKchYaPNML5EjXwR6x88V75eHiM3uB73enfqs1zQRLNLYW"
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
