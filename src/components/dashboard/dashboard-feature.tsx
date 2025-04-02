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
    "655C3mjJ53J8rafnKdanmmEd2WbHdGBNCGwAVrHE6mtyr5tu76e8DtcdNmjrGJNrm1Rn8vVkcEQEt2QWnUKqk1Jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5UqimXCu4AanKMS3V4eSJahdKL9eRHMgNMTzjzWkA31bsgx7nQ4FpNokFv79MoU3nTghaioKfLpDVVkaKiThe1",
  "key1": "25fTdjBCtZdkYcCuLbnNt7F3jpexWvdusX7ykdCQTXwTpXrQy5P6kFg4iJmBdugqBHSdLKx1A9DGgCxAFwuU8R88",
  "key2": "5SMGNVR3xskkXgs4Eh6NFY8nRNYjM5D3X1sD2wA6zGzfmJtaT6dFkJsLf67gFoWKzzt5R82zkewkrbovudLJupVV",
  "key3": "4tTWfVhGuDQsLuNMk1DJWyKXkoAXxbJ6TMHxJi5biMiGD3U2oE9PZNgDN6X5RkeBvkiD8Zmw5vCRwLnookRmGCiQ",
  "key4": "5hFYJSnu1XfHnwx3ccJWZUvo2yDKFt6AGuymCBHrfxn98Ud9bnHGMFt2umzTDxBmAdWsUcCkiJgCZUUjtoYHWQnv",
  "key5": "3LJ7wSGmDwc4CwtrsxfN7LY5cU77FgTez4gmKoPAxB1WrULGcvhYB1wSrd7bZQa3odndaV4oUJFYUZeXcMn6hm4V",
  "key6": "2duEkpDQccvnVPxngtp2J21iYV2fmnhb2Ga6dy6vASYr55jNaYfQUADun8YK7nWvhzZdy5VZJehHTxyCVoUW5PdT",
  "key7": "5JFiBMmvDwfkXTcXV7EfTAg6shMHgrVCJZSEkXB9KeKK4ZQbKGxicCQK7ijizCD12N1gd6y6Nmy73dNDGPCxob5m",
  "key8": "3vQWJaBuFUu24Upy7XaEWk27UMQ9RbZok89UcGf3Xc4Z1GmsKSXFAPTa3eZAz5jGaKTnnrYRsCpB3Rh45P8Ukc6X",
  "key9": "4v3Xbm8TRGpSNRLkYfg2gg5b5Mr5iyHWYGiEoQF4see3AeTZmQ23WAC45JGoF2Hz8LrkswTW4CoLwEPL34BUQkJt",
  "key10": "3qk3ZeyaMuDZ73c3Ub1fauWb47JjoEy4jfStsEzopPx2gFy7XiNWBM51Deq3N7m8eZ8cqbMEDCDHLqdmL8oFTwnQ",
  "key11": "5QCSS1x1hiYUKENr9gzHVJM4mgcibK3hKb64WETWQBHM1QAStVVi3Wh8iGy1RxucNtb6ffdefc9Vz3JKV4RjLUk1",
  "key12": "Azh9gkewzLW9MSzoDfZMJcXfa5tF6gGzm4Dmbs7o6k3MXt6SfiQfkYbLuS6ms1uQCepr4Wuf38NQ5G9WXpaR4rp",
  "key13": "45amqLW6FM94QFx4qjEkzC97jWQsYvVVMJKZFByUx9ah29P8G4Cfqwmqo6htwi3mSZ5B2NDJjCzUasSP6Ca7fKPv",
  "key14": "5CdfW8Usgm8DL8aPZToi3fL273F8nYA9SSN6326y2zneSWHmcRMNCAURiUvkzwuBJh7wGhtbVBt5nkaA2n9vqXED",
  "key15": "3VFkTvHRZ8LYVv2U62XxXsbAcyd1rETP8jCk4irsSWSYUMzzETPm6Axm47Xr69E76i9R8GSoHGykeGNkTUWdki6r",
  "key16": "5PaEwadXfYr92ib27LDJfcRq8mMXBVHEB7zjE8LiSrun391XUd6viafef8WVyEE288kLrHnC9eKCQ3MZ7UVbHzP8",
  "key17": "3XEeUYji8AfxmLz897A35cf7tHMrvaQXVsX3nfYDXKWo3oBeNj5b24w17JRWH1a8ZgbisfdUHyEqvNgZdKuqaLhw",
  "key18": "3ZFA16rjhrAprqVGxSYhJUJ2mDQ31kY8PTKw8bT5hRUv3X2JojMR9KrxFjY2j9NrJKK3mk7HnTEtFMj3WAcLszQ5",
  "key19": "bzMFuZQMAzN3cGjQ3DiJT4KE9YrUWHgzJ5MAZvLTVLmDntuJfKDbuJWc4zQC7TH1TmaHWnHcKu7r5o2mcyPsEqt",
  "key20": "4puGLBGhbpoFjAf5MR2LXyEKVFLA25PpRHJPxuEeWYzmPMbakx2Msu9dRLM9o9DfFp7ovaPFrLs48mpVdpCjVQbA",
  "key21": "2qS8fi1vEFrkXX5UX6nsk6EketzJpMNXE7wAiDvW1CXUcCKK2CTyDvihYmNuzfRmg3uj7mgse4W9SRufwoYxkEmc",
  "key22": "3eqnRKivXiEj1EsxdPQFKrnkJLxP2cWwriJe2LhipzzMR9nQT9MnMECvbSMUurw1vfxYQUzbsHgXk9P695qFpaU9",
  "key23": "33imqNzUcm6tM1ViFt4srV4kqZ8GCSsK1ZCNotwSWHPb3bijGboMziYWdbGAesEDwUVyg3EpnazuwGBWBYNEhZ5U",
  "key24": "5oBWViF5ab9Vk3zPGXBrSziBHhoWNF1zd6AgKF3vo9K4GMuXuWEKJ7CJ2NiarsYq9vttMXv1NqFtzUJLzFtvJzkQ",
  "key25": "J9QH8CdLy7tXEcTMgfDhsaMKkMb768Svtr4PgMMELdj3sheVHGVHnqBvhTh9U7NWGVrMVZpixMX6ENt4YuNAxdH",
  "key26": "G2v1YWq7rmkFJwa1rfRXtqdkaqiyYiu95bZ3qJnnAVpnLK3axHQFgQ5ffvb9uUXMiNTNcSGixaBNpraPyotg7xp",
  "key27": "P6XqUXhTa4k8nbHqg6dA7MdnRq7GVzTVZu6NtMYA6eZELdd7nTbQLmJsRefvQAqjbMw6DZmgo8gDJ4cdpcefnmJ",
  "key28": "21CHA73arXVpSoWdUQBQvCJke3QHSAUfNSP9Qq3nMj1hQ4CPZj2EHAS6dhSyj6hbLhvTk1tkW9XkXVKrjjb913YB",
  "key29": "4ADQC9GyqEvj6Meq5eifmZRvAQ9npp5v6VdepJgKZsKU9GNby1uWPeQXkuWWRW8yjJwemboHea84G3eE2NSe7DmU",
  "key30": "3Xthpp2HgrXh92aC955v1qecj5y926sU71k4i8LwGzDRuHyninUQbCUTwiAW6vebpdKPK7CySVjf6jE2SWbJcfbg",
  "key31": "3u8jqT19Pcu1Ptmt52XGQcyd9YJsVsmvoq4gd3o8gWXW7U9d6Z7A8By4NNFJ9ek5dKMArMoLfUrezCkuVRo1gkAC",
  "key32": "yuHJAsbnvh3xaz6W5LXhguc6PPcSvdTJGZTNkpjVoKHWh7H1bSCV4GhSfgYij7gpPw5V3ymYsKcN1GLK2pzMH3h",
  "key33": "4u42WCzq5S3wMso6cXMsTgUVW9ccnoUkDsYuHM83Bvzj2MEFoeCimCXrxQSRLZnTsn7BPcKhB5zCDPbqRxsyxQn",
  "key34": "4pKHRJToNAGozThjmDnhwsEckYBzops2E3LwQK6BmPoHT1iNN67FrbfCmdAycaCUSHzCjtdJdJYtQy4ZKU43D3BN",
  "key35": "yc2CAcNYPxkr7NSGMYvgCxBQhBgTMYo6aMuJG2dFyykoWLdrKTKv2S9obDrhHznpqEaJtSDkJPeXtDN5YpzsSft",
  "key36": "66T9sWBbb6XikWiH8fuizMNVEGkQygVGCQgqP4x4doRKN1oQib32oPEEdoe4uoFs4QT7dFEYRcxc4GBufYJV3oH1"
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
