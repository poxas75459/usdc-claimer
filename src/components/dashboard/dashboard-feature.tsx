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
    "5N4pRaAsnEbGzTvF5Mm6iaS5a5KQTUdKnw7d3vxCwQs24Zit8GWByBKAXhiEDYvX7E7RuJdYhsM7fNGs7xhr4Wyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dSjvis1nxyssXe3eGjjj1k4eTYcLLweuoLH8BV4FzgBNu34tqCynqfXLtaA3QEeTmxW4mzjxdq2GKyzp2DQLspL",
  "key1": "51ymuNVkPEro8QjhtZ2K2r6kWdCA4LEenWhrUpCagp17SY1VtbRjQQKWZjKwideawCXRpPC7VoT1VNyroAqP1DUH",
  "key2": "3yBuhew2zSy1wKi8eyZWwf24kJgmQ3CZD9RqmSiKGB1i3G9nBWsFrGJiWobGvYGpe5S8UN2Z9xUEYX3qW7qKSriL",
  "key3": "4LaxjACtABf3Tkb6SxWkFX3VJeGN4vbSrAEqjoSP9CHivXVekwwky4m1qnyqxbpDq4E2g5UM5vEakgKahMtkpswu",
  "key4": "qCQkUK2UucYgKcasKnMm1WZxNvEgH61MApQHJzdPEyfrgg2fS7MMbYA2XDCVw1xCbuELqewMVoofqCsGeMAvob3",
  "key5": "5ptDmZs3eyAHtynkHp36NF76fHRFevSCWh4yA2SasoJYDNTTo2D6pFEbR14ByjU6wXdZZkmeE7gtoETJ1Cwsq4NZ",
  "key6": "3aW7CpqRkpSgfDxQ5pXckbdkKKtsoYxr2NWcnyKRRuWPPuEYuWFgqaxieNCuhEBsno8ECfiWvajCY7s54tH6NApy",
  "key7": "8PvvuA5e9ELtm4M8m9K4PmnJ4pPmJXr1akiR4tyVBseWpbXWP4mx9TH3XccyKqmu3h8A8ZaA5LnEK1aRdhxNYfK",
  "key8": "4iELzke5pEGsMPZ2s3QGwkFjSz5YFMACThc1yWZEtXGewzUUVWMqkPoMbm2uDsY8kEDHiemvgPjPTzs2Rt6WtvLT",
  "key9": "4rDWSMu4VQBns6bmnxSiExNUfV966puzamgYj3wbrr4UrEc9dWA9grkEuUz8nffia84yTaYDL4YE4jxsJX2N5mhn",
  "key10": "2Dfr57fCz6JNscS62rRoqKLi8htD4N47DtH4w9TYLYnyEquyHu5vpY4pfGzJeJu1Y4wzEduER5ZnDDSk2bmT4K56",
  "key11": "4y5S1dDLFozhiVKgVAsvLTW96ykbfq5EsJWXNCvxCb845CZNLnnmF1j7fmARc1NpLJcqWpPo43WfkzhakSNrmkq8",
  "key12": "2k12gYPe9GRta6F7C8feMcAF35vJouKXfFVWDLHs2VHuUHxukswJkscGSPHdGDDZ3jgcdWfG3ATUaNqFSKzZCeR3",
  "key13": "3FgeptiunHwg4ANASt33kyN6QuPqrnToniXKSSbiHN6bzLMbmDU4J6453zZp8JDxqazCPAzLggkUyqLfHy7PGvPc",
  "key14": "3kavhuCRc58tW1EF1duGFLATmZVud7sEQsxkY4gG23saC5pToH7Kmgwq9PAemdAt9eRvBXcZPUde4gnMJ8CE64Dt",
  "key15": "Ho23fFyfSMgVqhqiTsB7nVawYwnv6qFkoe1jcJibJnD1Fwiz7mB39chr7uJxXse1C3omqMc77iPy1ujADujYKKc",
  "key16": "3SPac1rKpHNcNZ4hmPBqHg2XFSE3iPxu2io4N6yTPsjSZx4FNR4cL9ztYNmGuBaioHKbDzjMRXj8XPwTFNTB7DcP",
  "key17": "3oQ9BniX1hqcnJ8bPzZqEpRwW4byxzGvp6JmPf3uqUL1pM2cezZsQ8UieABmCVJzJhsmPLLpQCibQ9Xb3GqXqwZa",
  "key18": "5KWL5zS1XPg7bYsn63sUK9njoBNxRqXZ8sSSLa1iTMQjvedxG5G8zHZPxKuvE77m4zUfnjmvMCVpPVWR9CAhBHBs",
  "key19": "n7q2M7wtoDewa16gKdsdVi9weCmviP9T7HCBTDAHsbgUwCxFyoZRFfhbebdxfQ42fFGTie7MV14JjVf4Vuix5C7",
  "key20": "67KySqQ9eDH7WFwKd6kEk5q7HUicAaoJoNua2wsabCF2cT1XiRHfnzRicHu6f2dzTT26dYjnFXeriS8SqAc4vEj3",
  "key21": "3jJmjqZeDpqg4uPHucZBVb95C6NihAFo556FY5Qnrth9P9bRudEfPiSfZ4Yqy91hJkAVFqCQdWhK9BJdsdsPuXvV",
  "key22": "3QPj7HSDLyqx6veyQfVjyALGMDWwb4Vwr7LTxmARh5s1W9tsDdt9BQdB21mZwhQdJtm7LT78soQHEem5B5diLetE",
  "key23": "2n9B6cw6spS2v3m85hiGBCdbPpZ4zTWJqpdMg7N6H2SKYyoHDVqouB6fm4oijcqrr5FSeoYfMM8cvgc1mpKxSSe7",
  "key24": "64yhG77CPJhuNxrn6YM5WtmhKtE6McSZJDNzBMz9QedUHbVHajGDSgy11CKcmjf36LDbp2ms6e9ydTY6etQWSsfQ",
  "key25": "2Go1BoMtTWeUCb3Rpe7P6i6NAqXu4fLyk8bDW6K2HjfBCqJg6JBEn8LfNsYqe9T7bSrwpXHdvaXBcPfsHzitzbh8",
  "key26": "mGNRfL22xJkJvmSLE7XKpV7vbwnXqGYm4nnjozC2qmrLQjH3qv44kiMkDNfTnvLC7PzcqsM5ZaXFVeUxmhk9MQL",
  "key27": "4E2u1E7d5mzFqcESxkrzjC1Manvc7qCqvKmGir2ugh3vG5J2Nh49NehPfztyKCyKsgwVtsfwZDh1rG4cFhCVgtrw",
  "key28": "4KN8a6VmUmjZEuQE9RugHABTRWZcZeo1tqyPWxXck7TaeBhHSgXxYqgwWXVVkm87YZW8RuAPd7d7fJdTQXC3Rya1",
  "key29": "4GWppR96QGWPjRKasA6TivFRKTtJ6UaXzCT4Jhpu2rqBw2ohHNL7mVh6tisiBqwrZCkfwXnCRgfrR1VygHatLW3z",
  "key30": "2WufF3Wf8SznCmUonH2VDxmEZsG977qYngKhtYATXzinaYUQTNzAzwJ9inAdj3hQX9CQhgHDu2Aca52tQd7NqRGG",
  "key31": "buLAE2RnfGSqR5e1k5Du23YyLALS1hc4Zzb9rXcxHtvT6bNib2fuD3g9qfUeNf3av1WbG9fXYM5buxXGSeHCsN5",
  "key32": "2kqEurgoKAgMSmJvGQmR39oin5BdUaa2wtDLG1DaDPwS8ad4kZ9K9YvtVci6kV6wk4d9RYBFB2Rf6kpcqvnouSAs",
  "key33": "3DLNbdiqVN7JK2zv6UYfVqWJHe4p3bXWunRUD2SCjYWRSupfRZXskGeZAeAUGnEP698sTbd7oMXvkf7jnPg7LUNm",
  "key34": "XrfCLRZEqT8Z1qzgKjqmxDy5KF5iiWJdJMS15VujDkQgvZXn42n94M4Z4CpDNjV3aVEUo8p1nBjEFq1N1GCCzQQ",
  "key35": "igJuDHcvkiQ7LYHPzhjQgRjzFQcyz12d47Y6gQvu88earvH8WhpAmdzvKWdW5FJBi8ZaZ1DorSCxYzhGqUBBeJs",
  "key36": "54fGFzVNm3ZkKaTLbC5enZWjRRZnevJVRLhsFsgW2ye9Ay2wyvHYmjSxKMfH3h1u1VU7p2EcchVQyNBQGnDTQXEy",
  "key37": "uhwQUwm5LLLrJHDQfpP64igrq99ByJYVZYGx8E6qe56WjwLBm6p9esLZgjyPWrnWNwh67isQTDVmrtkpkzpife2",
  "key38": "j5owRgyWtkSC5R1E3mXkitYFCPuzZnTKr8qyWXqQr9jmGJAbuhUoZb9hcxzU7WFAFQbdGYowhBScfMBgUsCRwHD",
  "key39": "5uWVgHVETv4bmfzDyynP3fuY1mLEBHVbhVifkjMJeaC4gFpfmJ4H5n7MVst9pZYRCbd8B7Y8X9dwjqPSteYAdR2T",
  "key40": "5FNKtEWjTTWXNecpPhKjMFkp4sc3hBUAcw7yYc3pMuPBzJ1eUrLTSQiaYDPbE4LHHc5tAE6XAmdEhxawsayXUQyX",
  "key41": "3fhhrxgbqfix6YEVeZaqJ8ZnU6415bnimsCnvXpTKYMA4GEVpX9WGMpQEMibnu3oZCmbGjssDVDYEtiCquonRXbH",
  "key42": "54X4EuFrLwnWoLT2NBUXMBwyMfhwkULDTxHRKM8KKG6ygB4zoxUPDA1ipxRQjMq7pXmwEuZW5wdx3dMuq57UK84v",
  "key43": "3uhz7N7vjZrUvGp1nmcyuGowQvBqAZDY8ztth7jK4pMBLMSujUqvkGRv1sH63dnpbvhLqm7UwuM9UcRtFMkyaHVz",
  "key44": "WNeVyp2DDMQ1V6t1z1gKH3DdY6AzwDjU9rVeRqLijiShQJyT1TDeEuwgt4nguZLA5q4ReH7cYevx7TbcJPamsYf",
  "key45": "3JJxnaEWF9Bv6wae1pMt8MUJ2veUr8dDfLDZ5JXYdcvPVkWcupjjnEc9TVx93AXTLnkLF2BycJXsQMy578qfUcuV",
  "key46": "4ZhBMK2NBneTKAp3FY1aQeNHPfY7P5boUiKcYhqFn163PLukkNbD6kDMKdBsfaydnFTzXz5DSyNk5QNhcS7E13kq",
  "key47": "3pWmDT3dzm26seButF5BbjGhiuJGvSrswZYqr2HQ2Dq9ZiJRqAFX4hHk8FSXJzx8HzKe9Hj24Usr3dek2keQzHwu",
  "key48": "3JugAfJgbaJqqLT2G7Ztkv5edVia66fBEdBV2MfH3DzaGpPGSByPrvjMwWdVjj5SYYH88wqqzwtqFDQLyRnGAJcV"
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
