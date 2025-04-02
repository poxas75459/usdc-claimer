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
    "623UtgKD5KXEUfJxJ4uUJwfsjEHpT9PkG1Z4eCgi5GK1VLZG9v6Tgnwin2xJ8t4dhHiJ4gTRgiRHtttCiXSPX7Hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PoJp4cD9AvUmqk2ibiWcWnjYCtnaCrbNq9wHd5XmCn8j7DVB1Qd7hMhbULcnVoFnmSGwQXM1tzWQn92yV2o8rjq",
  "key1": "2msJTgUes7dNxYJY29enRb6o9gzs8ML46nWL58dL3fzTCbtznmz61CPh8j4v7FbZCKauwLiaSUJgJbKaLYXEUoiV",
  "key2": "2LWjdep8M4nTV8qKsoFub7D2uXPt4jKK4GJ2pkQihiuhNxkuB3SAtPknuajoQR9q4w7xn7PJozcYhNLmZa3CBBmH",
  "key3": "2mWEaf6YdBAWocLzJJL31N4aUu85WKQQBPrP1ZUAtRMAbPtFCxDqjVG9A7v53tFcVeoHE1ZaGsug89ZHzwYWWzXg",
  "key4": "BjLnid4FdfU3FAMSHVWuGAuL5cahoT1VbEYDtNz5Ti3CsDTcC8mESUx4JjXYc7NvPJiFwzxS1vWqWo4gbCVUzrC",
  "key5": "kSzBswkdmJuvz7u2uT9xM5zMXiFBXeotrJ9zovyEMf7SnPFoPUDEHBCsQKVBAZGKP4FF4WgcBNfzpf54FZgp1yG",
  "key6": "3xRHaCpimtV87d2FgJGtttgoJ7kqwfEJ3ZTS74ADz7ztCfKPxp8R22FrN593Wnsq8dSvyR4A6UaU1qJgwQSthPa1",
  "key7": "BvFWqp1LzpUrTnei8m4tyuk4EHmhMTG4frgqUtsfQJjeiuru5b9YQyKgnSC1Tzi4SXj2DzBuAjXNpEXSvCm3ira",
  "key8": "483VgjcwSQrGUAvmn3K3ELK66oCmwwJYr8JQCCfaUxMssvZJLvNRdZZ7mCdF4htRAUgvCKm6HdKULRPEcBYPYJwP",
  "key9": "4WdZv4HxnsrUfcmenMTpbfpyHy1CGh88mYosJi9mV43rcWGvrakNGzq2C8e8c7xsDo8dcUymQawGhcB9HoY2VCdN",
  "key10": "5ea9i5Gh4gPmVXm76KqR5hhN68wNX6KQP3keuvCbueVaXzF5dewKfXDv2DCvZnDZ7ey81SUfxDRN7ihuBN1QfqW9",
  "key11": "5AUJEH1DjFMn1B6PHKhBDxaMbAvV1aLhLc6gtRhPufX9ThqatqXC4TkxgkxUb6SHuEcEAtv7U2qwyw9RJBA7YM3E",
  "key12": "4CVuZNGY2AGLQKRcLN9kNZ78mqU8MvmiodC4v7ENTBRZZyfE7ZAQjX8KdEHn3Yu6QKpD6pKm8rpUbWP2UQnWTMDc",
  "key13": "65SG513JTyivykeSbMN2tyHwLXcFZwZAUEmfER1XL591XRpDamBBRfH98hE269PTct4Fy2NBGjDDMQ4PNgzi6Txy",
  "key14": "5FqGKhEKzPkF3SUsQsUe6qtUS4rHweVZp8VoniCprAi1R29z5xRUDXNJLBhu5W8uUXLhMJMc1nnYBcPFtxsC34kZ",
  "key15": "3Sd4n7XCavQ2nUZ5Vv7wW4Z7mM5cyJuQuiiY27N5CKDjNDJ8MQjvvBDhnVyHLC1a5KXggRnVR5WhLkTyn5wuXfCg",
  "key16": "5gXiBmqw5gRZhGQxdZHjKzuG9v35zJnRKmsBiKeV8DivDnG1FFTbfMS22Ph1V1KQTGpcR1FPiG1RfMZuZ7vdigx9",
  "key17": "3HfzATC6ogq28GbE4czmpNyFpvdqds82kDwgbTg26B4GGSSBm2EczjnJpSDDrQSNUUtfPG5xykk6uVfeY8xMMUsw",
  "key18": "LQb8raqeUrJ3MJ2ZJd8dZtbJY2F9G3rNefeNj9XbGEFcVZtUHvHy5yGM2MJJh8DeVmDDePc9euqBjgvKw5xxMyf",
  "key19": "2GxXPUenHHK63bqHhPgUTuc1jsS7XDKfRN17o7KEhiRv4kRVG7GmBngT5jWWZe6tmb96joda7NA1QMRNuw4kr4Yy",
  "key20": "2Zet4aPnbUgUHQsgjGruuJxY43M3CHpHAzwPGxYL71FF2qa2prB1R46kyGPipsLosT2ok75Bq2JcQMRvmNKw8HgX",
  "key21": "dwofXsRzrinTGB97Z36Yc2dfBLfEYN1PvUq7aeKBP99rQPta6bn4dUuG7YdKSk29dxA8oYdAfxsDfTHtWeZYfbE",
  "key22": "63wwz4yQse5UhmhD2fCBC5jortPyDUgtSPGo4Fio9gAw7BziLXPr2qbVQkPEnynW3oaJkPTb7e79TKEzspJvScSo",
  "key23": "2mvXSHaWXGv5W3oCjxvBFx774aBZb3fA2uLn1pXgEF9WmiJcNVw9BTuiBKnx2YMdYuswJKmJn6EYufeaqhhDj9se",
  "key24": "3P9eJKdKdAJ2rK75oF8qnsYPdLDkg2TSfxyWCyqH3cKbtPeyr51SMVZZ5zGE8h4NA1zNYymjUMgz4NjeK6rerbTC",
  "key25": "3fdzEvcRhurMmwKKzNMXoSepvpLY9bhfGDyCLMpUgT9hXD3PqY7Qc24Cipx2AQ38gbm5ybygogBwfs1rHzHFJFgu",
  "key26": "3vPn1ewP233e8Z3CULdhJoWqgqtE9AAskqCsRGwEvw4YC4rU8P9YEe9uY1USyWi5nQFmzMNvz21nFb7ubZ29xzm6",
  "key27": "Hp1m4RkthQGkycBk27Bn562Rc16P83g2GmDwXNJc3vND8xkXDoiTAAdmEJaPFzaMgmSoJF58qVrCmbEeZjbmfGM",
  "key28": "2SUGorZ81ip8MGMM6JVyjSXxkHRkCk3ZNGwJGQ6KLT1egW7GptfDXrR2aQdjkD4hMyfg1pfMjP93RutsCxZ5iprw",
  "key29": "LWh67ytRSZL9BPXXKgEz9AZaCD85Xi3hCjoT1bUrfzCVUcVT43s9vxNLrxKZvdg78bMkbxwHdCCESkqvwCrsfFw",
  "key30": "jZFHzhtPpzvpEirftR67DFBgaw2M6ajvJfHNqfbnvH2tgH8HxiBt5LUJBZxsMoKbL1GDzc9CciVGRcmV1SpFahj",
  "key31": "hEgGK3f51KWcufEuP1t6Q2R4YdpqH4y6BdcaUHb2pWkwZXXyk9GsFFFGaRLaG3AqV7n2Jkj31A4xb4Ea8nPt8zz",
  "key32": "3NX4yAHzY8epM5nNx28zPxkjkZgtL5YhxNHxQ2UwBFdbwRg4tYGmhBNgWUE9GQQQUEFWN7CwDbD4geWeugL9saKH",
  "key33": "3gxU4ob7vLHhYm2EusT2ye4CSjeocDNVjk3yLc4d3CuAeUGNDUtSYWXrF8GfygHp9kJiyYvRNi3wEbxVS2WvGr6s",
  "key34": "5o2RXpUten3f9ewHVAS2HrmXCRyDdkKdpcAv4XYT2PUxaZCmxQVRFiKckrJv4b7Uu5yksQumXAteWwcTrMRVsKLk",
  "key35": "4JL7TVNmACzA9fjBMYzPiUbjpmqHRr3gqoo7xr15WgTv7nbTGcfaP5DiavEVpXEcC3ZpF1spoDx43ttMi79BXzXh",
  "key36": "yaV51CEzzykaMwRxnFg84ArE56hUHGMdy1Df5SfVfK8bXUFeBAdmG1gws7Bd8zL6GZpSAX58fXB1rEXtq7q2DuB",
  "key37": "5y4oqdaLBYvN9MRVm3Rx3aFqpTCm3UbC7FKfnVv9c83Jv2FsASVjLJY7DNX9AS2yZdokrtwJjGbqTQydSCGLgTaH",
  "key38": "ZkoZzXTrTytPjB1oWtN2qtatoJFrRrTeudam6F4nzK7V7qHnCbax2WPgSptFDqbn7RsY31WTupVyaT2WMNSapTA"
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
