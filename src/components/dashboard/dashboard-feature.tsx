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
    "2F3P93K7DNJVySz3jhpKn3fAV5VERKkPkSjEQmaditfAHJMPocLJPC4uzJSDDWFz5KwcG8F4EukZbEHowXBcjXER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y9TtAJp8SGKxk1RfDrQaEhxuF3wg87voLbjNT1Lr5wqEaRSNRVr1G4m2P84UHXmt21sm3rA8m99H2c7wHvetuV3",
  "key1": "4fSRdiAAfLhqE6N5anymMUxotjmxxZntLDXyyStzj8kFrjSLTKkYz636E5domyY3NS2zqvk44ruQPpMr98BcEyuX",
  "key2": "27bXRCbWkfFVo4W3BzkARzJtPQSHSZv3u5brFCufBX9o74mYVw15Qg3DWuMJDoRmvtJ77SsXNxKztTUmvh6sCQ11",
  "key3": "2QBpZ37TjHnFF8NjQxyqyJfQDJZNARL2zC5iLJNfzbAjYLBYnF4GzJdqDwHLirgw33H4hPTnz96PfqNznid8BzCm",
  "key4": "3MU49moqGnFPnM5fRFMZ18tmo7fRmUCqkRguCHhsxaP8YeNrg46dgtVXGYg9n1N8mGo7BEUSLjpK17wgyzq2a2rk",
  "key5": "3ZUxijo1RNZCZCiiKWyueQEe9qLNz3tNuew3btBJjB1q7PgEmDCF1qDQ1tNSbLtUz7eHkuZzVGuEu3vg9mkodgvd",
  "key6": "3BCBzhLPHU2TvZd31x3aTqeeWiyF5B7y18JTbXdf3J5bLow3NY5jUoHoKDnuJqhdHuzFqgyGMKSgJMb1EiY8mVV2",
  "key7": "4tJ7aAm1B9RCcyJenvLWHRn9xRnebDKrPFXkAoq7f5X9pFRh36dBK113y7N8os3sGWymTJpEug5A92NjsTPZ81gC",
  "key8": "3G9hpoRwnJetgTw97ykVuCo2J8JLekDtEBYrCrHowT7a2crn95ibnX2x3SKFC6gTBEKDM3xSsKX1XD4Vf4KNGFzs",
  "key9": "5zrjxaaSPQNmYknMnkKodM4svaVyfZ9Cxaj56ti2BTUvdaT7b9PPU5Jo5D8jeXffbA8Ym4cKWBgKdKeDKBEiCGqx",
  "key10": "55aPjHmgm7S6kgwY6UskFsRJGZYHGZzRC7oWuGqLTSZF5N9tAgmaWQ9P8H6W35koVFvwniLgFMQkKBTLXb5NAaEG",
  "key11": "YsVHMRSdWjGL89XVB58Kpj1VJb7mm57GGjwm2YUn7XxrdzeYjPeoMBGPgDfc9P4mUXfnrPgJPTz4432Y5KWXYNq",
  "key12": "tHZ2JQzquqv97sHoXL8HybuHLePhneyKnWZiDHxZpdW2fDKFvNnxU6JZfJiWFnSw1FXi2RNF59Fr6BMTYpHcZEh",
  "key13": "4hBTyhPoDwCkd5y3zboBL1NvxH6t8iV23KvLQoJCSiHmuhTRQtMSU5G3LUYPkbgxzp2QYnCnA1vS2GucRn8ByE3h",
  "key14": "4prLkTfsRo8hp5VhsgxYCNBkdFT4GoXnjRVbmq39FzVPjsbn8gaYdyDkJWhM4CzasmrRdwP1rqXZbnKEYoGVvt36",
  "key15": "8fasWoDqCU6EDodYHLuNmkAG1Q3o2ZZzpH2Lng4HCxN2x7GjdHvbmmLScE2bjJAC12jMnSZaiFskY1jFXATPL7N",
  "key16": "4Eu5cVnyBmHTAu4zbYoTcp89EFhd9kuB6gQQzFycnscVrfAqRauawbHTteRYi9Dtmez9yRybgaTT333fh8j1EBGV",
  "key17": "ZS3bLbMHYubhsiY6dcg7APJAPbdfWNaXN8qJCM5Quje4Ym3PJgz4SNJCP4BFVx1jneRFx9T3jEYsWSmDNpo1szk",
  "key18": "4HWUKpK6yzG71zj3SDRFgm9DWugjPK4zZK7vyi6GTcRweUQsdYx4wMoJe9ABHyi6ef6fU6P1766XBk2nzXpuE4dX",
  "key19": "58doMrBwNnk8QdC5ZcEtsriJTnxsaCJf55rLWDUBpiFu1wyqkXJUErtt6dJaVdQiSjhWWvdz3bFYN7CGEsvNLxPN",
  "key20": "5ix71nGDpWbdVc73Ydb6w1U1E1qyVK3mtAPybtng7vNxpHBYbbKz9Pw8imwFrmqPiiC65UbERT88pgHtJMjsorw5",
  "key21": "4iDkm4UA1gcZuuZFBNvHevpZDrf8ySoq9tTuGk8vLVKYB2UDbMFByjffTTY9cMY8tBdvd3pRf8auhK3hq4korQMM",
  "key22": "nxzAEZu6p4bzzYaoFihm6HS2kBvU9hFBiEuuGuY7nMLq3GWqMKW55P2Z7mv4DXQsjuKeqX5QUqQNfeLiRKHPwfU",
  "key23": "4zHXTkesHEYxzcMnEGwHwbA9W2ESctt6XFbW8Cc3XRobCn6E4QiwoRMqPv1ZJRCnV1KEXjQCQqQhtQfJh7NYjPn8",
  "key24": "35SXSN7iam5z5kEz23tk1U6oNvtTC24mrMCbiyMUW6wwmnPfSr4jjwwT6Bs4iHghV5gQFAgdpJVcc9MdRkM4JqPB",
  "key25": "4TnE8KYzeUbXFCr6atxifBRVneDumbw22fcoioRJiKQDYV1XvLVVYV8TLqHL17RWDYdSsFCQecpRmGMZZib1cXfX",
  "key26": "4LHrJL8hN9PAWEmE5gFVkzHqe7i6R6LMAP2if5bzWiNgLW57MaQjaiYtPepmxrvqLgL5vVCbqSD1HrfndnBGAsU7",
  "key27": "6fytAYyoBJyYnQ1AbPUjFHpviCtvuojBGz8nCxGJQrhsXSKPk2jMa41XbaAfKfizieKhWgvAypigZpG9hM3vhLB",
  "key28": "5TXaowhSuYLp3rqzyAVz65SeACdtKfLykefUGGgwMcx83YaipRtnoRy17XG57UTUQKeF21JoqYBqS83Dt4mSSKN3",
  "key29": "48jynVAtNRYyL9MXvhVCfCYXAdFLD4yBSGx8Ai5HJcpEbhDfMquEiQ5ESD1cnRfRnoSkuV4c9z5bXxsYaVJtFMLi",
  "key30": "5LZtEuXnWiVY58jDHsdTXpGhjW7xr2bigWc8gZYosQgfsVvhJSy9gD1wJxUFrt4Wjv4srtrDyjnd1EgbbkfXrsBf",
  "key31": "2b5UkGsfFeLwhfZb1pDnoqkskcdALi4zm7B8CXi39Dbbzu4Q22nZBmxaXiUfp6Rq3rTbwtsXVHTNPP2hAk8gqnzm",
  "key32": "37WL3hwdSq2TSk6qysFUKsMGPKnD9QnPyY4zG3uUQtBh2phhHXCqcy6UD7tMz3Wv7cwccgkhmzddxXgaEqMkCAyT",
  "key33": "T3aSGCdAqhe713M5bhRxkCAf6XMBCRXtsGb1CgCrZuFYJ7gP7AnUzmhQ8VGtcfRsxPrdL6Kofu1kY4sKhbTDqjo",
  "key34": "5HNFdifMagsfHiDx8fjD2X86prDXy28jZczJemD9dK6wFZoaVaw46aSqMgt3hANBSwhQ6CRoF1WcW91FctkfvjtV",
  "key35": "kngbXpvwRhReL7sY9ciSAa8DL6RzSCPiXkBteH5YXT2TeYZ3PSFMZHkAm6gBx9dMZZxHZWbRsbaN46LFxGD4sX6",
  "key36": "4sWLrH5GnSgzz8brFNLVYYiDeQ9GaeSUqVWJCsfvQdXVhHxDJhHb3eLzJEECbEz5okxfowuPHBy2BUg5ECxmeP62",
  "key37": "5zbHwmD2SrRgnZ2t3NKNYrBAjiUE3JVm29fgEu6KceqTQsLXQJ6xGmpxJcTjUFoh8y3EK3F4fnPtZPXTDZ9vTrmo",
  "key38": "4MP186AJqVjpzxnPHP6ysqrA77csB36xmZUcwoLJpDmJnuoWoya2HGDVF7SrpVQC8Jsk3crxjdL7Zr4Ga9e4EJ8K",
  "key39": "3BEYoMdFmYHXMiKQcrEwKovRRF6he5hMjZnNncrj6ex27AUZMYUQaXaBf43zvqVbL8F9Gcd4EQy3TLXExRKvg8h6",
  "key40": "XESi1Cz69wUo6HxK5PoXeqrWNx36onov23JaruAthzArZgovn9NUiUeD6LbDLLWMC4nVoBrCPetUD4UbfVp4suP",
  "key41": "2MosA8hjefP7KBf6FuPqjvFJpzFtgSP6FRFJ5cC7b2WUtVUNJoKT57JS1jU6hvcXJPtQKYzEdP4HrCGW5mG2WAtn",
  "key42": "4dYvkeYgj2kyYpkfmRihp6K9Pse31pxMng8CLEa8gpc4ditk5icMXTJgAaQNRwjs1aVbXaMdaVJmAznwmAQe7FLE",
  "key43": "1fL3eYCBSd7QP9ZAZP6AGuKKiVFXwRWgwAVL9kjyf3q5WEkXM33rte2CR5rhwkWtLvWKemyMCVUgximh24Unjgy"
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
