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
    "3sXDmmRpNTRwUBm3rQ8NMk7qFKeKvEcxadAVacdtrpmph1DghNNY19DsejxLQUo6ZyVDPo9jMkuKA4jypAHmGNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iTNctEHUqFpXN7bb4zg6QeXCUdUahfP3Fnj5ddmec2eRuK3rRgeYqfPrwnwwWUFmR5EZhrX3eYbiwiKpYUw6oSJ",
  "key1": "2d7YQwZ94fT7CCo9M6xANqmDTSrTa1zFap4zzbKwe4XBmjz9iczhgDkSmTk1qRYX52XDUavxmUJX2pXsVdSSGWS7",
  "key2": "2NyFAgtwYEhRikFLpfXXCFFHBVMXmunvZMrZwPQgtK2GdficE6xaRFwnsQtBgiDLjDn8cxS6AVdsVE4khL6Vg14y",
  "key3": "3Yy6CdE2SSVY7dFiA8gnhbicW2zmpJ3pYEMMzo8nRvdxv5VGTEQVujs2ZromsW4hg53txk8xZMg4t9eKy6SN3xmS",
  "key4": "zpnXjcczDm7gyEYJ9rQwHYHk8nGjTPkwCacUmT4CGKZRgLyAfzXu6ESR2e8guDC3wHFcrDKJBsNnU1VyFY9Mdka",
  "key5": "2gcddv4ddktJ4KvpSweVGZNVuxDtbyyu3a2iSY3FMN56281xMNDu9DSfDJwYYsRXoo8r5o2kvvaULP1dQfw92VMi",
  "key6": "5JcLuKw4FCFtCTGpg84cTuW2YoRe2F6tgMYWZagD4PeL7QpnuiJjVb1sBtbLnAQ3KpHiCntVaDmwM63rbH4YbbHi",
  "key7": "3RTadbDwzajUZ7LZa3dY9MjuWfGXaG5VrPTKN8MVMVVBioL4xVMUUSGPrz8QxqRMwSG5pN4R33UxpF17EN7L7sMZ",
  "key8": "2KMzRSdsXuvWyxaFbq8jxx2DM7YpNwA9h9BJus5BzxHtzPg9f4Tw7qtb8PrpfRmMweo1sfSpSFpdC7KHBBvvhWsY",
  "key9": "3CzK6YdzV7f4GgRQdP9vycpQwFEECq74DPZfKFS2Sfuvsojqzy9zpHVnwwwC5sbZnJU6PLXsocBPwJdPRL9YFctP",
  "key10": "2G5G7orLeWhMDiGkEpJuSQXi1EGoskFdDuD51D7Lb3dA2zuSYKVYjFLUH8H28adtSnGzM5CXeNbSZsgCHWYeoNFC",
  "key11": "jzn6ddFy193bV3wk8VYwXyKkMWfiEPd98qGRUxhAtzFgxcdEfEHmisHi9MHhehpUDsjNrHmfDVUHEZK6DkaPxjC",
  "key12": "224KiuVJqd5W1gBZuEPZ4h9peuqtKscaCRdofUSAwuGPrDVfzYusjsJzp7NQYTXxNjJvFCTndaYphtdgcbiih6Ft",
  "key13": "4BDV9cfNPqkZMT1AL6S23r615QgXP1LtU46y5sKm1cCv8o8omKPzbwhfPhesCBbxE8pJHMmcNVzP91bbKaKn6ovE",
  "key14": "4Hn33wksr3hgKpcwA4sw2hAeQ4dBsMH6MAC9pBkzXYF7HzS5E5vpdrJKBvPtWeaQoAEXfQrMRsBhVzDocFxRPoN4",
  "key15": "NEHbus8Qc74ng444bE45NsQv35hyJ6Jd1unvqxZ1kSN4zAroTjsVqT1Wv4EQNsfFVggpof2GHQrFYUgTniShZsU",
  "key16": "5zStbbH4rz6aZK3MUzkCFRhxsFvom5nQj8DmfvuKLuGmh9Y8R41MdpwD7HR5AGzzNgM8kveVMsg5D5S5RexP8M7u",
  "key17": "4fuaCiP3gvLeWLp2dgzE1svMBVA1xuV5S7epRKMcnkV9oaDwPp9GE7ExgbgPiiXKjLqDEKjVimvbxa6Td7QTK1e",
  "key18": "28tmtGF9fUnTnFAGkfVHxxJMDYfNBv6qJan9vfcjechTa1FiJCpWF4y8k79e4jpL2C7TqFmGGVaSqWZpxtW1inSw",
  "key19": "3SCNwaHrJKbwjnq3pvYDwjmXaSUtDpkbABXn4JhL3oYZa3YJUeVozUJGdpJQ2xGHVUQsM5WuYSKArraCqvQfK5WT",
  "key20": "2zaNpuAbzN6RT8y2wkEXfDcNuRcNTUAe6hWdNPLfJtXigFAfBTcxSx74ixrdtzvy4He7znRuZYxRtnu9mxxhbxfY",
  "key21": "5gpEAPXF5auDNzSh3tPKCzy8XyUsUSPzS36ptAzZ4UD7m3s1f9oYMGjGwo9ccnVb6VEnXvriNB3SUWNDkkpsWWc",
  "key22": "4zr9X1oXJDW3sa5AabuPdSktb41xiFQeySjYTqz17yGcYVwPBhwc6tbhf2JJYR3JjcFsf3sM49hxiF5QR6NRkQTT",
  "key23": "47pP1TQZ4CXQgY37kiAxEkatUoa8V3tdDoszEJ19Fxcjsx8HisQ44hoaPhCLyhH83BT6Z5ca7k1T14bpob7a6wJ6",
  "key24": "2GkanR4DxKKcs543nYiVvyiWb3wWrEagb1qsHHxPYbpE7TrfnD1N2JZTwdxGWpjaDTmqWTbzGDmd58RJT5NmFJZE",
  "key25": "wzkU31cDxzh8ZJfVD2hZhfsdE4zws344rXzEDHtxhvY4vZG71oBczW2Dr9k9L6iNzZviYDzgomYhhfvrh9dQaxP",
  "key26": "2DFF2dCeJYgRbWraVnLWC3WSA8EjT9xF37tDRCvPcpeUQvEKzGDkWYFjTMjqpyBWYnuTHm8M8P58rzdVeWX1gY4S",
  "key27": "3i5WPh1aYowDZcsxnyLSgwhC9duua3S1XNpAVwZZvnQgkTecuQzQu8wYd5o2rWy2ehTfCW4zmpMxYH68XjW6qxYJ",
  "key28": "5NsaECkiGJSyoSqhZe6huxBAHoZbLMmBr5dNqge4oL4uPgG3NPHAPamGvK1pv9PUYPMGYRQdCU33GikWBa7FVXyU",
  "key29": "4TrPpUNHC31MdXwGzqjwYB2EEhM2nVhiF4fwGH2Vm1EA9W2ivqrkhwqrG89XiAoc81tptQuTg3js7pq6XvGnfGEa",
  "key30": "4n1hW6i2nU1iTR8bticnzGUvf3QwBpYgYeYVDmcg44SkuuD2qUWNLxVFJCSFR5rEcvUpLfWqE7rPRLRiVVoy1v75",
  "key31": "2383xrvtmzxZ8Mq7hviCGamvUtwSUbzVSgTrBTRqWEHuRY8mxHK4pCqSeHjK5iWoxJFKPNgbozGqroWHQysBj6t2",
  "key32": "4qsPkB63hfu6CtCyKYbK9hFKKYaQdoH1VE5bxhfoAzueXTZCHRsW6j8aRZgeVfFS3gVqVzpK13pFXFteLYe3c9iX",
  "key33": "5hHt4nat4MRcwAYnVDaAcX5wLUguDBxWfimD3ZwNZfTjRbqMaKf8ZgMNoMtedztt3o2nxobq6sTYWJqS1SNCapgr",
  "key34": "3DMnfV7UajqhXa1hQPhakZC8wtxH8JY6dk5XGbs2zDYDjMHsSa68JoYo1yP4LsNyJv7ifiwKBAdfi17GPQPXtip2",
  "key35": "51y8MjEJ9eiFCVxRzX4grp4UXX4LjBDtNcm49s2byLPmwopW13f8NR4uFcwm4XRikApK8YeoJESAZUuS4NHyC7ed",
  "key36": "3XRpqC8ryLnx7UjZuLTxpb5m3LSHE7E21mVD5SBJfnUVoZaYpaQRVUzZF9xy2sfULAYaUNHqry57abM3S68Rm4tM",
  "key37": "cxUKfBYb7DXmReRTBSpVok8m6uL7cmaUUt76ykibdHiwZ4bXTfHm7KEmvaZ82ibRhRrdVyfQh851uZ3RTaHdCYf",
  "key38": "2nVZEoRzLyhHknH5BExYsA5W8hc4WSwRrcRXBD4Hi3f5GGyAT2MhPTtS2DYwzvvUL3EVZnqMEiYzkHKeUQJuq7Va",
  "key39": "2JEusid7ikse4DShZ9mP3EPVaRRz1hXLqPsrtRwRJjf363c74waFez9GxUwg9DW6vcjjUMPnPNed5MgUdpNGu5q5",
  "key40": "3GjpBKkrJ3yYt6pfSjvX1JD4Krna4kQkTuHHzBdkd5WpdbnJnBq3AfCoNtt9YQkLnomgt445sf7HTqwfwQYNNAP3",
  "key41": "3wU5RZ3vZ7MokQGMMn56vJKyquaLuuWKXi2X4L3QwWhB4cXtFsFyzqoEFt1sNAGGaCzNa5rojJYWKzqYMaqoSa6W",
  "key42": "2d45UD9UiErbuaPXwqMxiz52XKFJ1mfADJuPVa3SyXLRrAC5zebSdoqXjsVLySdFpxtmcxuhoZZARxyUkqGLj613",
  "key43": "BGH8a3CQjaMU8QNEVJ1gmUJ7SGZQqZMNsoc184gDAQVFg6yR6Tf1KQ4mwz3RhRZb3VpKFeQvZYTrommD4opqV72",
  "key44": "TGvfiJbGpzgK4GirGZZJ9MGnNiDMyRe7TrL39jpzqK6LskziYfjPvxsLEJrB9AWwZfRwG7WvxMRhSZqoQw3qNL5",
  "key45": "5yz3MqEWjoBW9BHiP93HFfPrxHjzbzPmp1R2AypxLYQUMP3ysBZMvGbktRHFzcz9Tpgdz6UBqXNmJf644MhjT4mR",
  "key46": "9o4phGtHt5vKnW1vRzkqbLyMv4GqLeepfAtvVuBpoQUM6aXpFx38A9yXkCRHbkYooLPFgEytdjLvJPLdTZuBKo2",
  "key47": "3hgngYDUGnFZxNNghqa3HuFhosYwU8yYPKePwv9iG6tXZ82KLb6GX5i4qAv4JhVGzyDh1eEimzSLHPfKeCtFaWmJ",
  "key48": "6YeYSbTgGqwdYzspWLFT3n1u9UKs6Bbv84Fscrmtm7QWMMCkmXGaiZsV5EZFgwbE36PZstS9zeaMm8Xjzq2toYM",
  "key49": "48cjjL43SDEDu4PJRiyAmQWpTAJpTjTGLcZptGftoBKMM6pnVLi9gNmYQwi6iPNpv6KSrsVTR9MuseVumEW7us2R"
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
