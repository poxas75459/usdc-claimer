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
    "5VBokGudUcQAifJfjegryWcMqrwULPKCaHucHZAYhoudy9Si9RNuwaN1AYR8toy4Bydo3Lv8qiT6NjB8bPsgut3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PP9fjVnY1hue6qNthQyvmW8B3ye1pkMbTNB6KW8hpUzAANJYbEiymTq9M4VVbrj4D7desbRokhpYpdZjpDPQSdL",
  "key1": "X7kTfV1HZN6NURvXjDFesi3WpnbVNRytDcbBwvqHXRytcqCasRBx8an22RzUupACKuoFfZHNFNLMmAMCiFPJaPG",
  "key2": "2DKfSUgcrBENbgcS9RNGG5KM8R473CTMs5q4wkQfJk6jS8V8LCeANzqSyjomAgdC8Nit3WY7KWdVp1sfeaWaeDCb",
  "key3": "2Jy4nH7zBrEzZ57efAqfx38dspZHQMwYM7ddJbsmWVyJMdidc1j76aE19CeAywPx2ycjmYsRM6kzVeqLhRZ6ToAv",
  "key4": "5h2ja6QJJQtxj4XVjG1KPKuDew9zKLAh5dgNZM8Vcr5VnD1Mb1dNbBrZN4VSPWQhxWu4bqhAsgpMj9g73mbVL7HX",
  "key5": "67m92ihmvHTmpoVYgk5X6NHvu61VhbF3ihCDuaZQtQCtrV9udGVUFWcSF11aeQYKMrY5tcTixxKitHWZUjWY6djb",
  "key6": "4duuksPp47x2Nac5TcSC3zAQzK8W27Xm5ZjKtQUiw3sdA2ZdEMjieoE3Ypoj9uCdQD4UErJTzDBChcq96QrhASQA",
  "key7": "4VzQq1cKgrffWS23ihvk4k7313xPBxNdFwXAinJLjdcuptVv3MD8aaQTCq77PHSBrv7r37qYRjPCvsc6vnY17eLu",
  "key8": "65EtC4iP1bbFLqW62FBpujWACRfxpy49ZH1rjAWgznrUKujx3cWyZghmftmFaYWkLZzohqCpRYe7sftunSMsfmzH",
  "key9": "fuTuAXKPBnBoY5TqL48TerhdsdRHeuVNLCA8d68Are8dUX4CSDmSR1Yw9TAQkAEBAm5QKvhY2e5uzL4phbcb6Vw",
  "key10": "5QqtNBzqyuvHHXHbxyZPFPwmGgStK3Dm9kLsNRQSXdc1NgcPMwCQUxxC4LArjvCyDhzeYCSWqfzeQ5qA3aGV75Ty",
  "key11": "4bXETLDrYn2cLgjzZnjqVE6yV8S1FBbnpxhqUsqaKVMUNZAjSYqcTLZ7z5y7ShsvNq2oJ9GqQSrpwZ4gnckxCCTV",
  "key12": "4pFtMnokxN7pqE5sGEqSXfW4dLdLa7rrfNnrJ4nwETK5HtHrQ6daK8L4HqR66wdRJTspWPGrSfiCr6b6nXk3JFen",
  "key13": "3sfCYkkHpnAdKRrBn5shpRuDjb7QuvsV25Z6KodCndXK6pi2jYchWvfoBonZt6zs1Khswr4PELXmkm1ZeQ17tCq4",
  "key14": "63kpFFDwFvYKU4EhwNK8fRFPft6XxiziHdx9G5H8HpC3ZYNJNY2qd7bk5QmmjfCnBSuHALAQY2xUrCsim6wrxNeU",
  "key15": "3qfQsCaE89yqSVPxtL18tUXbziNRFDUDHnCdkEvb2xmiBdSx4tT1rzJe9qmgnKqiXFopBJTAn7qupaUyQ2sGrodw",
  "key16": "3R1ycDQZ2pUDYiMpVTL2zHqoh7F7uJNNL4M5xvf9RKLrZRWSkZ6K7tpqAF2HuGxiSf8W2QkvA53HPEGBGhpUesPg",
  "key17": "2xnL1nFpMf9WTyV3C38dUc7NQrWwtiYsQxSQ2upPJbJynnALQWGtrmgeoxcj1jauhg78YEpS7Fr9R28Z9RJJwgU4",
  "key18": "5U19AAZgzJGLDwkUsYr8s5uU7tM5TeRt1UHDgxUMHxt7ivEkZgkxcAZ12Ut2xenkMexZgQcLyJi1NKvyFZM5waLB",
  "key19": "2ozU2JFDqyDqke9xRGmyFdjtRMabWzo83jXXA4sd51AU6umXrkAHuKGz5xvHSUrkSEuyLEv9kMNwcoFnEWD7QC8H",
  "key20": "4mLcTsNWp1isZSdXLuVcYcwihecGghbZW35vda9A9B6N4HLyYmvvS8D7xAb6MtCCbQKAU5AQT5EEYp9NxQxfnNqE",
  "key21": "4BTWUcqCJv8tEK5LRGX3HuCC7J2m5dHZmvyxRgU3Ljh4au9vC8kWJ8HxB4WK6Mnbm8crV7S3upXMxewVyHAFavnW",
  "key22": "4xQnsz3VqCMxuuU6LYZxGx7p5PE8CdKzQS2y6wRWcruy6QZwBsF9qUsskvR3EtMJro7rtDz9Zwfe7KvfPiCy6bqV",
  "key23": "2rtwLjgS3piktRuAzSriGmdzmPiqyrzZdnHTL9Hx5HN8yXKMeqMWidoeriNBEV13i5wdRLosuMfDTiQpwoW7h7L8",
  "key24": "54G2mWmszyLumD1ArS3D8dgKUVDitZrgMqsicAmq9oazDnKMs8JT3Vvy88U4S2cpMRwyTUXLcLhoX32dvyfE6oq",
  "key25": "2yFuSiaxdPxFhsK3AtiGdm3C8dwUSVk6WKxD2tkeuKRCnu96c6Nqiedvs4QyM26up22Dmi7er8iaiTP2eFTyxTc8",
  "key26": "2PTZstgnDsPCjXqa1bfUYJunrqTMdsVnKmfjbGyfBYtf5yBGfbVR3cWPbcjTsUEtBTUJ1rGg7GKrNC6tHQMfrzGB",
  "key27": "5Y2pp7MQHNPL5FqFUhLmSPXR2e7sdQ79VVTFNKd2oN4e13SQenawXP34KKFuDkWhhDXeg9Hp4eMBqqFbmUnWoDkE",
  "key28": "2p1Z6FXs5CYh1dtZKZa3w7FcwhA9QE424MGp4gyvGRXghqD6vi6gSLRbvcoSGmyZvQzruCEzvvauFE35Z9xgQiMJ",
  "key29": "2BMPn99kAusGfT8yALqUVQsGqCsipM1gwuWPLj44Ruv4ZfLGDvz6U3KSNsTnJYrYiaDsYbhiRcTr8VXSi6nYEByx",
  "key30": "5YgH6Q3yRtsRBzQkR8FMtUYqzKinmy4jtoYJmCAzicpYKWW8cV1rFjKfb5WdwhUVuexC3nep9AvhZ9oCK4ciK1fs",
  "key31": "59aumz1EHg4S6yQCjPyGDLgbP4R2Zvmoq2ejG1UoQXd1jEcmpuefEAe42kZ6yNkie7Ps7kmbnMEKwULF1RaxTPuX",
  "key32": "33E1ToiH1Drruzwz39BdisksC8P45JwLk9UNfb59WmRfjDjBeMfCZTwXH3TpCgKqKehco1gBmhavMgzXL4SCuc9m",
  "key33": "4mUnyLdAxw5rFjTbVrW9VioarZapYNY9m5aJQetxgCHwAMrSxksWfYcRcCA2iS3uGZaw3bAfrowqubwStX3H7KJR",
  "key34": "2zdPUaDFi8JYS74656TpooicvZv2vkzq9RmD4oX5ztJxGWXcQnvVpFVguzRpTn5cgxTrRbBNPTZUHR9GcXNGnVBv",
  "key35": "2FctGSa6YZoqLYiVU1JrACKP6RXrrMYHuep2TBU6pTESmmJxfs2EAYAXxQkxjRF1Riuxa6g9HBN4YT2tuWmpNkoW",
  "key36": "5arG56Xcj6QJmC8yceZ7yi6RJ3jvD7FCnWp7ZbmjpiC5EmoLoHffzJFUnV3pV51d6B74TEBpYdwBSBiYPfxkZUF4"
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
