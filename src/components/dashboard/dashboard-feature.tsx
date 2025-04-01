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
    "3U7e6RhN8gEPpsZ1c2cAUmQMLZMfUHcZjWR3yU7zZchwvWRvaYpPEv5VipvxgQB5ePqudqmk5VkcPschBctdrqfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hesVvDDu16yjhfJM5dpt9ABGSf2LoQ6gUCHHGM9fHq7ViKHmZ4TJXuFce9Q1dCyQohqzC5PDS7ZSc4QGqCzcL3",
  "key1": "4cYK19rn8LoRgcKCG6z8rby1fwkVc5i8CdDGkZTxnkh3n63s6hUDC8G2nJPm7WDeZCGs3Ht7owc2aVtwaudpNCD2",
  "key2": "TEtg2L7uoqR2S4o7hYtyhvjH85Fk2oznghFzNAtkg7U8GaXVu1xiqmcpGRbKskCdy25svmGkBCegG6ckPxQ6pad",
  "key3": "4VG2FEj42qc83Npvq6KeqjzXzRt7KEui3QKcV1SkJJqKDRwLtoUhDcdRDQrYF8pbtT7LomRmBEFiZQhXvYL59Xrn",
  "key4": "2Wwr4Vt6KrD3xMjFhAkvpD6qarCdCbkLZueXsxgWcKL5dySpfPuV16BYumgEtcQQL4uDj2yZ242z2CX4Pd3a8YJn",
  "key5": "2LtKHMC3BZ7YD7vmZSNUvxmtydRQr3MXKXCfytt1k5jbBNhUe92uV4tbTrEzmET7FLQJ7YKa5bpiyeAFfe5gjibR",
  "key6": "3CMEbHDFwi6ULmYvQo4K4PPiwEuDATDUnvhNoMZJU7pXq95A9sUDLfKAdExTRfTLAQUNb6kTSPjNWJ3qzn6CGjac",
  "key7": "5VLfxF9mMtSWwcKCYqHEqNSkcr3wWkdn71kQTNH7DXYaqYHbAzrYGcL3gvH7ZA2rRfUTWn3ibdAsqtHdjxu8xtP1",
  "key8": "2FyRAZH9TeDwK4V6vWVWdJatk3GbKYGuzNwMzWvdgtpgyT3aZUzWaxFEXRFmJu8TcX8mAgyy44TeS336P1G4SHii",
  "key9": "EczJGRJBtnqzDdSUkGEvihjidZnVUKhez7Fp62kZnVRJKBiakJXUb1JW6gkMRZxFhndWcfeLaqTnj9BHATyAc9r",
  "key10": "23ou9DjrRDD8HJUKU5GrMn4zgdZCrJbiSrbjCYAUYuBiafMoe5Yco3eT1x1jN2eyZS4TdV9juLKU7iL4LdcEA9ud",
  "key11": "2fBgRcqS2aR6A6S7auLBmaquuv8bVtzFtpWsK5LRfSoyAkoNwrr6mB9PUZoS88iuDoHmFSD4mj7jhEqQy8w8NN1T",
  "key12": "4UKa5dn5iGLKubbXmSJ3mE6wdifxfYCbTfrNS8pyq64mHu5eMgWFL9LnwYc7D5Rfxd4vhFqttVZAaa3tngR3Gjxm",
  "key13": "47sDF8JFFhHwGViaCbtZE2qogK8DUKbi48zj2WqLJi9HUdbxgYBCuiZXoXTejuk9cbafnKWFSARTUvsLiEDg6Wvh",
  "key14": "3jxvERe7HktGaaS7NurvnbZWNj4mmWmSPgVXh4s8diNjf8CLEr1GBoz2dzDvGQQAFEyGvYv2eCMQ3uPjf2JKNdug",
  "key15": "2V6pTdGdGormkSs5AHxNcw5F3smeqsBEU4yxj1dBkBBF7SaJ2EkAodhJnFWLX3KawTcWffy7EgsaWMrekdNiWAZr",
  "key16": "3z6vYLx4cBANSBiTWJN7NnieGNbsd8kzXrYBbw1en9EYMfSPCCy8CrfgY2rMHCc55un7u3oF6cy99REvCDcDGYVh",
  "key17": "AQvruHn5rGiifApoJm4M2PUL96tCf5LEWG17XDg1SYnoWYXXqHm3u15c9ww7rXzGGRB21TF3g9625KrCgRXyatd",
  "key18": "2AKn8prH47195X2RmzqBd8abQYJ3wZ1iWkEwTofSsCmucdz1Yj2BmwpxCeKwefEsnC1C4C1HCNuQYn5yZyfYCDcN",
  "key19": "5uDmqfTUNvDNugY9YbiyxAvbF7BswGKEUBH2P58LSzH9uYfoErgv7DNyGLmWkR4zTpQkG76dzbWbnGo5KFTJk4ki",
  "key20": "5sWoUhvUpkgjDPN3U2VAgydkVgGR4LZRk4P96DfDEpBd8UuJEz2zuNKCnbTGcFwCYYQ4Epo6yTvS8o4KgiUHrN67",
  "key21": "3emujhsL4LdfbB4uzMbz6iNeA9HK6drd9YXS7YYv8E8diuTQJEod1PXP42iCE3sR2ZPrf7y9trm9CvL1NWzJ9LxU",
  "key22": "3ZtDn3iMSpYg8tDk2gcPgXWeYpTnCFy4sqmreGAobeBX4WtZEf3caaHHztLUSMB9GM8nQoDukzPsguKiEieak4aG",
  "key23": "5dCisRC98dRGww5JQGkfpBhvKprCxUvLzbNv3vQkBBCu8vuZpCa57Xf6nnoRYKPcKwfjfuMqXNRohmA37EWw8gaN",
  "key24": "eLbNrJ6AfuWN8Gc1ye4SyFARc4dvCfbtM4Abbz3AtMXLjKExCyWMzo7G1u9C8bx2ox3F4A7dk8LZDcrRDeorL8o",
  "key25": "2RDhgg7NpQ1Rwf4yrXJc1LLTV46zvpEtjvNXjkdK1wfKyKrMR4PXkcTAtLw7r2tkq5rrRvxDkJGUC9W8KepJ8NQG",
  "key26": "668DNeVzYAK2zLVx5QtVrTtR5yWfbzG2nB9o8VLauQNMB6QoQJbuS7Hq1oiDV8CipGoQ9yAWfBCkCMDzATQ3V5Xt",
  "key27": "5U324jLnnnD5EShGhiuqKY971mKXPMpRCpBhjtKAgvAvRk5brku49QEUPt7XisrF2rcJYabQ91WD9syBKFBCm7k7",
  "key28": "287bmDwM8kjb9G5z5GXGWMfh8RkrfBDXyFR3ivkWz3dGBzb8t5sr3iEGmCAsFJXB8zo1oL1d4kc5znDkWojFMaGN",
  "key29": "5Taj76i5WuxW6u5o6dQHJY2P9zqpuXRzvbJmmPiMtJq6R5PNcrhqpveWPaLD4ZQivgj8832ZYu5xqZWod9zA5YVX",
  "key30": "4gkYVz3eaVQyzkGQShbNzbB9VU817s767FzAA5BStPt9A2BH9oE2gMvT9J7dkumif3DRKpiQgg5UM8u6Gmr2eKsu",
  "key31": "3pDtgCDqazidYLqMoKdVaEeNp2ZTnSUuhh1HmdtSC9cViPT959tjBUysoRCXQMeREsTnGbwruo9CQd8HeCYzoHfH",
  "key32": "tJKzqXzn5v8STHeRNEtqPeNA8dfNVdGcphSjevTCpT3MiLJQhhtXNQ4EhN7qaFENi2rAx1Ym5MdFZ3RKZxtrdX3",
  "key33": "3JauvTshpq64VceCDkkGSnGF8a4FW197XDTRedBEzN3bppFM3PVU4gsRgEZDJXwZZhKmdNdJmnjvX5uzcAjmwXu8",
  "key34": "4Lc3Bx9gcVnudgREDEeAEaTFWKEku8f1VsuKjGwn3nkMq9eZigS5RUvFBcbd6qobDUMnQ6QHcraigNYXfBFyAuS9",
  "key35": "4RWfvTCCJwA8GAmywyvPybUfNuSv5Akqo2cQ5c8p1TupJ8RHdso6BcaEJyzZwPTgTbbQyBEw6HRfMbVmsrntQkUP",
  "key36": "4NWzqRawZjM545ov4qQqCxkyBv5F83Wm2gKG6NufrtcZkHWVrnJg8HvtBcZB4sYgMwPnBCfqXSuWSFMwsh7ecWP4",
  "key37": "3BBRHy6b85eRfN9QRLM9iY6ppaK6aCfoaN8bHAi1M1pc4rhPcpYnfNf7vmHbGwwu16kFxxTAWUmBjdknhohv4PNC",
  "key38": "2RytrFFDfZdiWWg2F4w2CWabaPafZJZAH5gJ8kMJbjkbDvcsF1YRnZB79GmjohD9wtznCRBQ5oHSJfb7Mu3UywHm",
  "key39": "4nRNwJeb1hAHauqYPLswhgRtjGA4gU8SEEm4k12xRJ82fXReXWwwV3aK7QgaTQXuriDMvYjghnJ15xaDNryP5hRg",
  "key40": "4FqXr2NPFtQejrxwgw6kwB33Q1LewgBwpbH2wJeBE6qNMBbSgVpNw3XD3WFwMnwBNT2QrvfDgpkKuJsHK8vEs74U",
  "key41": "kGzdnJrTiseBMF8FcJJUYKWZ2NK1zjzi3kudDkQRBkUL9Ymkh9iEXV4JPeumuC2Sy3YbnZ3pv6E9wsDxfMfXyV8"
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
