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
    "3U19Ae2o7drUAEdA3eGoDeMQZgvzWx5H8xDy9AYY6NT6vuuC9rAKpivzbqTaWbGPbbHC9ktwexyoBKwDAVr5je56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R2LM6iScGvUmcMUhkqW6jXD1VWuy66KDwt8KawRm3g8kEH83yq4VdBmWYePoS2ZcArpioFdvxjZq4yPSWJZfU28",
  "key1": "5ppWWhEWXWEsEECgF3B8NT4a4upVtkpLb26tkSegLzCzTVVH65XqsLskS3fpYSbLG5oxzZ5BRQcaGJCKjtFq6ASM",
  "key2": "2Tw2RsdTqUg27tXweJBnPZmDjXqKBDiBLiLZ9JgzmUmyoZ3HPdhjKrnFQKYADEM86Art2rbBR2uFb3k7WRCgS3ne",
  "key3": "393krK7JMgq41yTydmChjQ9N6ioC7nEz7HexEBKt3pJgXNqBvMVhHx4xu52x1KZRS8AJiXijqQEhwr4B31XF8iD9",
  "key4": "2QsuT1psdxzNF79FcTGGDG71CbSucJSAyg5gdsCXnbJp5crNkYwv6Z52yjjei76EiaV971ovUgVuQv8rSB5C7Xv2",
  "key5": "JnudjJFuaqLeHk5Twnaim8skQCSFonaJcfsvEnTydvg3KeSXjy4knjedLzrVHsierzQ1bL5hFjSNKCthbVa76w5",
  "key6": "4nXtTqmF9R6pdzYzcrdijyqi6CGz5NfKT2dBbB2RFLNZzuZbvYQxCiYs4D7hmNgbPTrY14ZGWjKHpQEC24sP9sHQ",
  "key7": "5fv3usT6xAhvA6pzFwHA3gCGgStpbAiwFWz9brqK3o9D7K382NW6kebx5Q23D3btvQ4qfTp8nKYNaf6WkXfWChAC",
  "key8": "5KyKhvpASGjPDPAiadFdvCHXdpHDGtBTWoqr62WYDFDKkkjod8BhMq6yZZdYHPYuUaMk41uqsWUZPMRNaNjgDsQd",
  "key9": "n6kqnwhSwSMxMQ77NKj5t65oTSzUmpmpCYuzygWfqaQHAxtRhQPFCxKmMNanypK6r6VKiSMLhLqAzWq5NrV3ZRv",
  "key10": "3hZA2BxfEdH7mwBYrkHVZYipsNkhvDxBkWJ24vt4JeWHaGcK46BGBruh5JSEU8VL5Zg1g8UUiNTAbyNKU7MWTC75",
  "key11": "4fovPebKJE9BuNZ6sPQbpyjA32H7LdrSxmx6a7KbQGEayaJ52dkyE4K2KYe5Ah7nrr2iFd6pTfNSRViWc7TtwCp5",
  "key12": "2rYvGz5DW81DTyyLNKcMD6RajUokL7u54YcvnY77zmr8cb1VKFXG2Zp58g8Ggv2mDrFedv76JR79caEJS3uDoz5M",
  "key13": "2nB7Q9RghsABQrhntNUayeun3QFjEQ4SWqwRTVrWetMLwZSUZNd2fgrs8DxEeuAJqPGWhGBK77EvbYa256Uos8ya",
  "key14": "3x7KXxiTHqmYcMZRuh7sqojfqFBjriYqa7mjBvDqNx9yQ72pSZb9Si7tiafRv3UGTgcCuvixeiU4F4uHHYWKBqbd",
  "key15": "35KBtALVcKAT5FSQ1JwvDVQ67dXwDCAdMeihVUM9YpJzpKW3HV7YdPUy213FnWzSsq3WRySr88aByoxGSXz69NH9",
  "key16": "53daaw8xBf1xED12JXdcE3ufNxD9w2bjDrnfDqs8C7AoCtTKvZrfPHKSAcQb7nwLg22afNcnBLLmdXAY8KPhAWUL",
  "key17": "4vQCQ6fpkLbTgAXBKF9SfcdzYrFStUyh8G4PDmBwdE5wPA11qnXM1hgCpscLnwPzZa6VkwBozW8SHrBV2PzbNhd7",
  "key18": "4xxfECRaveVCTupVbvqzj4VztRym8nhTGpmSoF3tLVBkqEGGhpXEANn5nVTdp6HZZ558uVt2bNMc9pShyB1MsCy1",
  "key19": "5qcaPQRa5GrG3todnNm4s6JvZJwbD1cMBTejEC9ztNVnDdfw1syGCmd18rVVtJEs5ZAcTjrDtmEgX7iv1zgbzk6n",
  "key20": "3nnkfQ2JA2qknxmVJPApf88ULffTWMveNqrXBLcj5cqfGPKmWd2Mw4jYt418ff5tY8fX2TD3y2ApR8irNhepAwGa",
  "key21": "4sUYuGw1aat7FVk8kBF1fMtCSo2yfxkBSKVsC3LJcj6djZK1grmj9MM5E5GiNZ2GfjiSvWWHpA6CGLjedvUHPBSH",
  "key22": "47ZqUTSwCxX85xT1FpHyUmru9dt9kdoNypy28sLtGhu61GKUCqb87ByJXCSrmzRbqNY2cWK3oz8znkabkHaqC51s",
  "key23": "3EC4F1zBn2W3JiBvEEdGFHG6reZ2vTXneYos9wPskcwmF1qK7EJhe1925ghh23dAi5Ez5Z1HDfZEKk7weDMi8V5k",
  "key24": "Xt6DHEpsSpqgUeZeKnmEi4Y6SPmjxSqCJgnPF2NkVeeRGBRyr44vK8tYmugsLkBDh7cnbeCnDqHcGLASFhnUBPL",
  "key25": "vKTsDmEWhmEYvVSVtRMks4o7jJ8ZX2yeSE5RaGvPARZb87Xajsr29vUieKkxLmjDgFjvoLCzFhusTMwT8Pq8ADv",
  "key26": "Ks7y8buAXnEsFgcTh3UAWsvNWhbQMxwRJCAprDiP2swiEf5PAQ6TeKquYQPbsCcbimqNpqz7Y5tXzFyGqqSH3Tg",
  "key27": "27DZJYvfwDkV5KKsDrHHFnha6PLuZghuHkw39xKNYjJfghAqySCLh2Va1PjsneomxrgkvStz6yTvdRr59TJmHmAL",
  "key28": "25hawfX1dX7Rv32HgmYL1ZKRYcBwx1WjQwHtVg1rmS4wxCs7r2WtKF2F1PoqL6SfnJC2nbrjPXFdezbpBVvfQkLx",
  "key29": "4vZYzL3mR5u2YtJGPzVVZVkYvrpNHsBGF5ZMFig2uj43HRd94cmnQL4rD6vPDbuXA1QW1p3ft6jgL2q7mdLkURdc",
  "key30": "2ESiNGZygVETv9G4mngxjS3obQEkbnbGYrVUsjr6XUeukaBifFmfWJYzkijwYL5GU3PEdeHAHXs4qZxL1i8cAQzD",
  "key31": "2zjjNRYBxHrfi4qZG3XdkvciRgKTaKZ9J32La57ZLuGeLT45QABEBe3vLUATfM7VoqnoKMRyJhTWiD1cfbdxU2BZ",
  "key32": "2m4GubdxXGphAJvpv1rkZhRxvPMk9HphhQRobMe5pVQn14CFSVfdf4f9yQU47CprZptSwWD8YniTiRhcYuGFTo6A",
  "key33": "5kzvTc5jfcozieg7oyp4ECS9RQxbU5oLWo2U359zh5uj3YyDWhCywtWmzBnWBpVzdZtC2wkVerWyK4dkwDjEAa1h",
  "key34": "4AMGB7uypi7x8vXwZU4aMcBG6VhqoxYzvpFRkkFAgDvTNBzyGAZhxA9s7xeyZk6fpsZrUZpW27Hvo4n4fgdxQiFL",
  "key35": "DEgSSTqtfpwvsYwZui4KZtexQtU2y3qvbip5gS2dQsYWz83rrJvVUZ7yxtN8drFXMD3iSxjW7xPfBLsd3E8Jr14",
  "key36": "3nqsP834ow5Qtj4AbZWXkQZiG5fLPjTLP1buCsn27wXvPWA97Csnc1pUT7RTBQjcHFK1uF6dNZim5ExZZrBczJjx",
  "key37": "22oz463eR3h5ugthwPKfU4kYZksstqehV9ET6NJ8YBQgFPha5Vb6k6NAPFB2ozhTJtewdrEwHjbNAeqXjU4qzFJY",
  "key38": "3p7MPEiRowS6tzZxkirsY3uqzLGd6toahwzcBmc88cSgm4EyLRwFQGeGMMt3PKpKg5e3LhxyuiBNAMdLQbx3CjcF",
  "key39": "zKeP8ghj9oEBChnBD8xmQdmCMWGxbAM5Yk4SAdLPhwT98S7AqV9Da3qB85Mx4HcSv18USbBoZuVbCGwappsNMJE",
  "key40": "4pLVd19uSigBotvLEXiLq1daWuusFgXRmC4qVHXkYagDQpGQmQ3NMkcmvgJ7ZvvvE1C9SYcDC2C5pEh8WFY1EsXW",
  "key41": "3sPhe4LFw9gnc2cfNyDZGBA4KNjrLkY1qr2FCUr9XZ2ptX3nCfG5sae3QsdhZS7NA15BS5udPXUKTi93hyvTGNSV",
  "key42": "PQ77WpU1cQhJwaH6EZ8SEgGuzfn6kuwZBmamavkAzWvzXYziqCUqWLkU4ViWa2C5dKHJiwFPZm9LwjtKx8VQpGp",
  "key43": "uSQ1ANk4ixcjrzkyjuwsPQuUQNrCFcMDgEJodvKkw6ossP8iy4dM678zWgJNbyhDanWUTgKu1xJBTwk61xXErud"
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
