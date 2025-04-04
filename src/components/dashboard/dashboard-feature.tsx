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
    "3nx8Zdga24RkeiGAnzbrzy7FJ3vBeJ7FKjNoPZshba5FuS9bh8sNRFas35PMCDNV18D1o3ghKRnhm2phtqhTTMz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UZYg7Nxq8CMmAn2f3MF57yrHXcPQ1ktTvdhPWTFsMU6p5k6Noo4y9fNk4ojeaBB4478VfiTjsVDGGsqVrrZ2C4Y",
  "key1": "RW8957AsQVcjiTdmCyEAREAHuU1MTmmrDgXJns9Xn4hv4eDCL5yt6LifFXaUnbNDiZL3L29PGihv4HHeZRStTZW",
  "key2": "pKRo85h3Wiiq5kouVkvf7EzfXjkaYaaFx9dWvpytkrcrW2r4vbCZQ2eUmn2sAk7EnMUKGZLACtuva1Ehriv5G7r",
  "key3": "4ZLMBSeDYoYQurLXuruuSDHgVhYdAqCN4SsXYgmxBs9W3itFhJFhT2jgs7XGVPKLgqJBE1cVspQLNJaYG8jkVVRQ",
  "key4": "4kk1vZ6YJ39DRtdkDJAX7Rt6fFG5FrLRuFBQhQFzPtqbJnUAysoWHCBAESNDKu3TV2aKMGStVH7mqRNXaG9TDe84",
  "key5": "54CD3xkKLgADhgvDfMDBUTidjwnqMxQEq61CCuX7iL2HWNVhtFeFLLD8pH3up8rK7FTmLhz6wBVZdsHaYfaCjzjZ",
  "key6": "4CC1a17n2eyyUsaViaMNJNyDNAj29U8Nr9QvvVAREFuoRv8nsDqk1owyTFf9aCbKJ2Cz5vKk1EWfBsYzHaGrctby",
  "key7": "3uMfwbngEyRaj428padeHDi9tHJu7Yby2kLPFhPfM2M14e9VVWh5jw244dpeznnUsEcSmv941VCUxFKNh1w8jEYo",
  "key8": "5RzzzHkgYz7kDD5cZWHt7bSZMYqgCFrXwjnHPKs8LX3jPaN3qGV1WSSLpfvvE2PpXpzNStLiqfixBKNz1uZSDXkX",
  "key9": "VxGa5eupRyJ4pkS4dEMFbGpaYbwn1SZMoR8kZoyR3oTBsqRU7vjsoUniXavr3K41Es1GZUnAwbGW7npuQskwese",
  "key10": "4irZzzWfjU7SYhyrgsmVnimeLTYSFDNTrUgcALvGsHe5hp8rMh14rsZAbLM48fYv3e25KXfKQkFr4EL13APLNWpA",
  "key11": "4gmQZ79yzm3KPuZJaJ8CzcpJCH63uLGRRdfBbwt4QH83G8HLxH2S97TQMrnk8uEkQr4x38UVcB3U2rXzZijhPEXD",
  "key12": "5vgfGXZooAvKD7KbmRF36vXfujMmZdDy2RKkxW69dK8kgBj3MrjE4guYLXKptmU77ECFuEuBpN5YxdwsQ3vzzLTT",
  "key13": "4TNhcDwH5GQ2BUzFLn1rWpVz2nW4ofNFBXCtpJ6oKsy1gatEvSnG7pmPRJ8pMzBuDmDvtfYEj4DVKVtZbpm2NL27",
  "key14": "wBkL4TD5npyKrocQ3MjkX5hKPrhM2tNjkp1wBbbX5HCg4i2TQEavaUqLujrfzV2n4wW6bhwafTJfa1duH8NGboc",
  "key15": "3p2b1cfJFbVpbwShc3eWsaH98kDV7gK7hpQURhXyxSdz6S5jSTWKnTgfuKmhc5f2QnYdbrxXPNMYvrvj3h6iPLvr",
  "key16": "2Fbwq2Y4551peza3VBijteykcgTm593yw2ynzRwFx6Es3cf5whreWJfrFHcKQWPDZHsfy4fLKNpCdDyfBVe1681w",
  "key17": "47kwzHu2vEPMHxCLQjDxKMUMWWZGcW9RAJf9bb8QmDbb1tyGMTmAJELU8XnWs58UckZUSnn9Dtz5wEhHZjT41Qtv",
  "key18": "5VSXB82tQEo3unETiP6GgWqaencD8Hd6UWJfAvmzQKSCZa64p29fzXvdqXQNikGv5wPvRtCKFbdKLRFpFPvR2uPm",
  "key19": "3FpHgREC5NXAD9dHyXGZAFAywfQW4YXiAeZeExapmPdfEcMoLh36mQowerNk1JG3dLAMTQtkkNfsWhdPHyND9QnT",
  "key20": "4bMguZjJrJjcUCaQxsHgTV1ecsDPHU57RBxjtpe6ACKjubJXy4f1vHkNWbosHqKRQf14c77LgZC4vrcrJHAZavXx",
  "key21": "sTT6KU6HD46koQvZqXcr55xz2FGciCrUy7upkfGsqySFr2bGXZwDB1oijXAQY3EyfH4qYhWF3KQ2oHbqznzPTBm",
  "key22": "3R9wxU49jdSzaEDBBP66wxiQTtuWYwNpM9HMPEU2t5XTLD4kcmDC2JDEJmCpJ29dycZKibwZvURUVSipEHrviZwF",
  "key23": "2STjxHnFXUMfFU7TdB7wJWg28dQuznEL6pxnDzUZwuVUUvKAZDT9BYAidsVYigxzuYS18A7MqWiLUDRp6nQ76NhB",
  "key24": "eVmsrLDA1SKHaBoXnp4yp6ZL4JUmTr9ap4CVTV4oLksm3XWxefD2szV8xEvBGRHvg1XfL5HZ7vQqcyuQ186NT9j",
  "key25": "2cE9K46ppdEY3dwhjMwsxw7zo8uKpFTfHL1yVRdRLP8Y2y7rQMGvsoFz6CUoBtSTZpz6GjM1MXzaLGJcUF5F5i5b",
  "key26": "33E8bJmC12pud142z27zqPhjBmfhefzwmjigdfRN5FoDqUjwUp5xzAebtEPed1Mn6GABehfZwyz6LGg2YA6iyLAA",
  "key27": "4UfVg7eY4vT5ZGHre7j6ViFowzsRgHZaKBKsW8qnbKbuZQRk1pxgHK9teiS6gLHPzgioaQsKxX75mfnAyezUER1i",
  "key28": "3mzA4oTRomyKKcKfnmbg8jWPmkArXi5kzTQWjfm6jyTRKwu6AW5w5RdjnfQDjGRJRvFHk23GkuwA8dAoyK3Xf5Ki",
  "key29": "4zyfWWFHRvqqjETi8Aq3jANeBD4QFaNnbGnrxRqtjas3GGJKoPWoDPiZShWPVYURfDiSkbJhJw6wTv4FergS1FG7",
  "key30": "NDnWWNsS6rCZzrK4CZZREFRM7Racv5WNpsAGjdjpszcuFDnUUoFkfn5gkG1XfSo3EVMVPXS8W4MurWuF13G27zC",
  "key31": "3EzjYbnV7vr3CVqxykRTzA6hRT6wEf6eNXEFDT1t7K6KVxpkovqsLMiGHoRoaTjpDbtsSctkREaKcGxgyFY3du9L",
  "key32": "4HaSv7YprNP48REL2JtmCvaR6JCfSaBXJaYEFAvMiTnLAVcL2SvAoAp5MFfpDoFX4gK7XNjzuaHdT2rdL8aKV24q",
  "key33": "3SJ6xj2adeRCPQKZf9izyvDJTRCqoSnLpmAGL3D9rhAofnaSuagroeeBexeAaW9y6FBEaaYs6UtW5tvvKDvUeNA5",
  "key34": "4e3LMZ6ut1YNqLLh1C6TKCickyjAMTWLd8Bh4gAjTdJA9G6cF99TCi7WH28hJYa3xSfvCq2mexbtK3mAuiNgh1vp",
  "key35": "5NUrHvbrGQfv6e8o6aEviHu9e7fmY7QbFh9C7oWFyUG4juddp7uh3HPN9TSbRaED8oe7zY8pEuEbvWJKa6Fe2BRs",
  "key36": "2TurCZQddJvQJzrwdHNtCQTrAhVAT6PGHjh5a8xEwMBPXQcJoEmhE6gJa2T9zH4NV2uxbesgbBAmp2JEKeCTzZzk"
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
