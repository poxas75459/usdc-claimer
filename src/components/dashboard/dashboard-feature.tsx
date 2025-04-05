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
    "3outmyb4Q4HR28Sh2WrzYqEMm4SLNaGHDtbGfuUmfRC5x6j2qizT2XkLmZjcmnMB1vCEzPx8EC8sHdWj7FvT53CC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6dEmCQ1UJEES1f32XGjznZyaxCdXVt9QUt5zTCxFuTPpkFXutrEznGTeSRxHVEPpMYgdyTEDXkbmDKdJTTLji95",
  "key1": "xYPy1dYGBDgowVTyq7zYL7GcH8KnmPfJEHEduvTJQKHF3kAjvKewCHbCtvjkbHz54NvHBRy6RkmPnAD6S7xmEXK",
  "key2": "3zx6XAcGauJFZt9MHJL56YiKYT9dr4oNP6UzZ8tfxihwQ3ix4hJSKixn8bkCsmHYtTYLzdko3rrohWMHExJY25AA",
  "key3": "5WViJ24RU8GVfzvwvTbSruKbPL3CooVKmxBwS6gUanqt1Bp5B1gcTMCjm3V5gm6qABt1H4ukAHG7oXbyH7nXzFRX",
  "key4": "2t5AkpFQaM4yjU83WHPqvgKskQLGLkj8JT1tJkCR5zBbgRM8vRFxaZxaBDVjuUvYPFoTeSvGe33CGUCyUMR5rmGh",
  "key5": "2F838H9Hu8AqskZUwk8pJJ56KJgGzxYoU8CLwBFNkFAytDKLn6gks7vZ7yK6CVkg2sp7nBWvbUz7NuinhAHYpkAf",
  "key6": "3vcp4hZMQeW1iQU4p3A4uizE7TReXPc6VMvLKwzSxeUDAdvtggNtCF5Y2bckxxiTFqfcHsQnJLRnpMiFcTYsaWBf",
  "key7": "2PNyDQF9fTfGSVr9k7Y5YfamRUUES3rX8LnuesEoKUH7JyZrCdbmhCHu2Y1rd1LJUVM3afEue6Gj5BNHbhcihkrW",
  "key8": "3m6e4q3XFXYcAaRy98GN8RQDMU1rk4r6JAWmeTVmmPw6C4thAPF1wbJ1mAfRDNYuoNiqFRz7sQemPMGuK4QM4EBL",
  "key9": "5n3uYcb1SoeuXcYx3q7HWSryzzRPxKkTPno7oCyHyn587NFvyPnvPMj4xn6haY28YfeGNwLQAvrgRztveCcbL6Tb",
  "key10": "4L62JLDoHGSc1KUQCYN33ncPATtcHE9tiAHuLLieEbrugU5dJUEdJzgsnJmDpfXiuFvMnVVUP5Ja75LkXweES653",
  "key11": "2t7CygCDV7sF7PbgHLqy7T166F3fhZhiVTRsicUgL4RQFs6CRXfCSGSdCcRdUXqe7MwpNEWkA4PG1B81dFLZgdGB",
  "key12": "2dn5TikXBeBzcBFCF6E5VXqUAmHM8zj5Wtifyo2ZSwynyLNMMfs58qytDEzzujge25qaQvu3rJ32Ey3fdRWH2s6z",
  "key13": "2c78eCzzp5CkRud8q5z9ma4bu4CZeNfaQyiuDHiVd9wbuT5CmUtKoqxPkhgvg8Qyem1fLhk4DFRBBoRFzYAf6msk",
  "key14": "3Ywa5Qar6V5g2WCBp3YgWXMLXfwkq58jEXNLnwDVZmpnfFiTgqb3Prwk8Fd9qpQeM7fikWbePy3zSHs3X3jM1p4d",
  "key15": "SRQgpBiKsdv42PCc5UQrRAA3g6amFJHVP8mCzHQTKZr78VBD3gEmkcJuCeP4MAozFBA7aRHviRZkMjTtoEynLnD",
  "key16": "2VjtZc7i4YCSpXy4CY3nPzmbo6HGVnBUToJGLcNz9aRGn6dQZjVfEFUPxjM7rLKibWjffwJa7SNNiqMj7yExmrLA",
  "key17": "tZfSovFwVKoT4FsyB6LAesJT8fHHzB4KmF7QZjZKtG7Wq1hpTF3Jqbxdnwmjfi1E7rdbqhvD1zkGmfqdRK5M9TU",
  "key18": "2rZNVNE1NvLZwGE79FhxXVcpXx73ySVmiqQs7oKeNRyae25obWfDKXQwHxsN9x8Pe6tHLrvNpmM9FqfJgFFKpPy7",
  "key19": "4No1MeLkye8GcqqCSzAXpabvLfu1oq6khRDaRnH7DtjeF6YuFGsz7JMVh8miw1EKkRwyUV7Er3rqJmuahgH54ums",
  "key20": "8thqavbb8n9KMQySdCz2ZB1hixhYDqtN5F8LGxRe3W6QFdvVQsG3HEME3Cg72u2EWdyp9nrDcmusdtEagfkYVgc",
  "key21": "5Gcoz954ED1wtxGK7nZ9H3FmKrRjRJupjV5Sb8JEMZ43ToXzSsaa9K3hgpe2xGgY9UXqP2X83rq79YW7kRZzE8Lj",
  "key22": "3dhMYUziAjjZaanWcaYdTvfw6JJbY1VFRwLuPdizkHi7xBnFn7JHtP9HSjoqb9uNddLuQMKtUpfK5VDSv3W5iZCS",
  "key23": "4qdfqX7665gV5YZj3TYYmhkvyBVvc6DJmLcnajgCcxF9nKJFdD7M4FanbG4YEr6BmZTUsNajTm2D8ok8e238YQsH",
  "key24": "tWTVcyNofCWXQife6yCobttK7VgQMY4LMBismAahH3bWcC9omv9eUagVMagNGbjkhR1cSwDzdXnfjcQn3rFkeKR",
  "key25": "5GFzsCa7XC4uCRHD1NPYtLy7ef9WkehMYJHMVXBE9bmWP9Wvm49LT8adKArMAx81q7bXsBEUYyz1jxx6uh5gMJLX",
  "key26": "bi4T3EFBmYzypJ9ru1RFr1Jk7Qn75UEHP2j3JDfhaHf1sYudqaUBRPHgS9vnCFXdiizQbzpy1vYNPXvk9Td4zVn",
  "key27": "5cwNZMUpnJjK5a9imodDvJ4Y7VLfXw6zjsUo2ABpk1x5hogvwvSBYvVuXXfqkZPpTjm6jwdDgYXBdJoWp72iiJKJ",
  "key28": "Ku98MWcB9BjMQhBy5seYhF8YAMaWTr18pqoS5YW5N8yBAzi4Ti2Y61sdyZ26JamEMb6JByGdUhqpR7fzS3B5LWS",
  "key29": "1F6HKydSjFauNzWdtih5ZfER2dUfCa7Sm9ACsSbVCwLccp2xvMdhNZon2t8zvSSURQSgswTyWBLWhQ1DneNFyK8",
  "key30": "3bBF1ZXmRU6sW1M6kz6RUf4x56pFnnpVK6iNgZhYuVdzc4fvPfhAS2MJMKSAcqKCEjHPPppn2B9w3Hd8qfwNndd8",
  "key31": "2WH5bZPVcay2Vxt3YmpEX7dpg32sGkgesoTKCjdiKMDU4t7HYgYQhyaQ3mCWGSngYSbPUqt9C8qU6e8irhaG1KV9",
  "key32": "2sJjQbNMMXeADbGxPktH6vTbb6V7wjEh6CdvMVBt3Mh7AanYsXrBCkcbfbpa62RVxQScCdQXEy6Qum7RsBMu64xf",
  "key33": "2HgSNTdtcmpd1DQbPhV5bkBEmwTa1XwDqLkFB8fJgYx3Xrki1EEECV8Vp3WwFmzE6kkiMtANbmxrjoVCotAKgUwy",
  "key34": "46tLDeg6PwGT21t1ctHK8g4oSbwb6bqARVpEr7aJPJho4tDVVfGiMyJMpws56c48UEqtt9ZgwqEZWxw7rPAfM41n",
  "key35": "4jub9HpPtEfRug3Qm9rCkSVHoLdYpBxgNbAHULSV9HxAHvGWq5iL2aJ3CqCZXLtunijTEbbY6hL8CFCLg3TNBS8n",
  "key36": "4jzntqcpdP2BBxf4A2hPg17w4p7NavEti4BfgrNtNwSE1XM8QvqLHxxXKhT36U2Z2PZjNrGaLYdch9ns6HfHDbjx",
  "key37": "4W9taiQDkEi5J2BNjjRMUtvp8PPR2xScHRjc4xEgpKN9qtVQGgGkUfSwN3QuNqjvMxHwULg3EtoweVW8aztpcqvC",
  "key38": "2JcQaupCcqmGAhfGWHLSfFbX4NCz5B38KtqizhQwE5yjxxu3b2qASWqANX968mAuG3FzniJuBQj9fRozcnZ9zH14",
  "key39": "4aRefecyZtg1cJCNESjhuijGAF6LG5gJe5LbvHxvLfy4W2d2S4WQVKdAqC77EWqqqMz6vmGDmXEojJrRGsAk27eP",
  "key40": "s4TvZmuwUGRYT7iJ1ggNJfRhSTHs8pEjodfGbefTGYLiqrby8bBZHoAffrYithCEBNVvighiHjjhyqJUGLCikWS"
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
