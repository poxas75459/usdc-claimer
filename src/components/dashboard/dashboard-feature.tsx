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
    "2rkiPG4wu1B9FgAxqm9KEzKS6t5y2iFLHspJReLJfcvXzKfqrsuN4fPBewoqFC4ECLj2d5dMqWn4t5591JhwqWiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jXtT15bJvL1328g1LfSErBrarUajFkwLsMPkcWtD7hrxKUBcLwurhfoAi498YyGoe1QLMeHHpwsR4TeN1omqV1Q",
  "key1": "3nHfuZLY7mU2kVie9xVFJhZvNmncutTGmMoruPtnqUL4C9jUfmrygZqPAuYDi4dZzv861Y46Y23J4kWJfxia7jeR",
  "key2": "3bGtoiy4dhYUZ3dkVeBZxifgymtWRFwFxwtgqtAJEjhk3tpTZJ9piM5h3nr5C5oEHG7sPPKtP858xm2wArsepVBF",
  "key3": "2jpCadmDFjMKkTZAqMZiNmwhTmNkRsnNKKEkX7CbYYzS49uGDfKsa1bazUdbpwnnEjXBTS5cC5kg6eg7rvwXDYoz",
  "key4": "4hAxSFNBx8q5vUfhW5HM9rnGccXioABNwX1QW6XYSDaJTsaQpeMMMxXqgeN9JCxsVybxQyRhrVW1KjnaAkLFfGgd",
  "key5": "vXFw3mch3xDZZ9ojFbzNmUJczxpUoSPfPoqCGtoyQmASaTsqreZe5uZ9XQagck5Wu4wPQLHX6RtfWHxFtG5Wd4b",
  "key6": "jUidwy7p8KB6KqJhYJmA1oHDYNbkuoqisrqec9Nz5sWJ4FhDAXeP5hSFNZtoNgzCbP1qjFMYGvoENNZYJPmGaxt",
  "key7": "4f3PVpNEeGdDzpwqHM2yx5U6KaeJoCaMm5H2Cd3EQPL9Z2B6Hr51bg8uTwXKe3ntb3pSxFuPwFRrBA8K6pKvu1U3",
  "key8": "2aU9NhDset16HYynhLvH1ZJgsFe8C8thTjyvCiyBZ9n9wM34FCXdgUPEkaPNbsHq9gHzX1jkgjQtEsBdM6CsQM3x",
  "key9": "3yJKuwqb5uRaYFYdt2ygi82TQhTa7dT83snMpKenYkD7LxxwYVNVT1jaFZsQKs7ubAqzZESZQbzUyxfMQEe3KXeE",
  "key10": "3aE4jxxK6B2gAKT62EPofiBAraL8jUQXqL9yNAER4546UjRayuruRybXpiERuj72U3dBoRQc8QAroDbnzaY2zz5Z",
  "key11": "5kRypHbrPwDtHC5gfFfJ2JHW9S7kznUP5heunfwYpNJTh4wcdo52Zo4H6fgMafQpiWWQ7wye499AEWucRqn9yvWJ",
  "key12": "2hVVUNdRRoWQvY5K6AVdbMHBAEmM6EZG1ZC6HYGSxzCFrnLNf6NCyBXGHnvKfB5ifnim8vnbrureDNACbSQevz7D",
  "key13": "4M3SqppDGu8kCrpQJ16p3WtvLBaadHdWQjYp16BZGVZ4T557yS8dmtPSkPGXn69mEJLxnvXhbKvN2sWsuTBbfT1G",
  "key14": "2Sb3RBrkFi5ogXiZK473UpLsFwULDcXcoGqK6juQimRAg2C4mh6U2tp3rbixeB7uRueL5vwWW4F54JSebBtBSSy4",
  "key15": "4eAxNZNyo7heeBReYuLpXhdkNWi1VWo5cdQXzHQhb6TZd8HmKUrHUdVGBs2esDKWrsoyC1go9qch8n8yaZi6jTbd",
  "key16": "65v54qNBsD7X6PGjVuiReNr4xbR3oZEtjM4wqY7tMyLokTJ83ifpe7ZqVgietiLjNHCB8mWPXZkAohKfJ7QJ4PaP",
  "key17": "5EFhGMSKFwiNEtzUt5CQmWg3Uab2N9rFvUyhvuQRfidioHbrLpTq92amnk2ZDC42SeqJcHV3gtuq7ko4giKuqEUW",
  "key18": "3Kp5k4XmdsrTfxzUiXAotRbCEcsBMj9B6URwLCTxrQP59AH7xNJGSxY1CajuK3Av88JXc5EWJMsNCjUcKTN9Vq1m",
  "key19": "39RYnf7TFAmpuY5gVMwuzt716V9zwcf85nxu8U5f5bqY5jPPRhsQGyuD87f5tw89SpGjVAsU9fhjQoFK5ug4Q677",
  "key20": "5kEZkR4NAofgbzgaRZVBycVebhU6wXkBZP5svAkToybS2hwFb8oZy8JLMjknjLneduSCdF5iKdJEP9uwBzPUuFHG",
  "key21": "2jAt29hsCMqXd25n3iWgruf41d2HUfiARPDfQAsXB4BRjRJpjZ4MHGfUo7k1vefALRUeHosvKqVgDrETwVexLMA1",
  "key22": "2Be5ybU9sGmi2WJfZffWEH2mZXYBvjfhmSgCspiVw5gGv5GzXpJxaYTJEqfehHp2wHrKT7BVfmYJErmozRvGpbeC",
  "key23": "4qzaT7xGfe4EBqFkFEXxm7REmRT7tutWYLjPq8NWFZukBEBPqsuzejuFT6jGQeXLEHyX8WjaKkuVa3YrzvNK2AGG",
  "key24": "2GaEgtAZJBf5wrzKswYBqzPdnLErprXsWncbFqZFg6zhsGTnXVnujZn1rWV3M7pNckkyBtrE3JfhRMT2LeQF8MGD",
  "key25": "4SLg3GmNiXDHapfPpqjveT3SZ7pVPwL6REEJY7QLc7ATXPd94kgnwmDGno4ryjCrWGEJuaomJgDsoRRSETPxg8ai",
  "key26": "ZNsuiybp9cpL8EpA27BxT186HnbWrvhYrg9qedXhWJWSfSaC59GCTGNJV5yA18TrTvph15pmNZ3SuK8e6tCYf4L",
  "key27": "BHKaBCCoezmbcNwi48KnipnPg58mi6V6QxiH23yRVZc3cnoKTzWoqu8PbzMgMt6HZCL87hWZwHiDn1CMUdAb12f",
  "key28": "2io3Kr4t8ZSfzvv76QSF6yXEPcW6ZxiaygxmgJfkC3NCUEYPS1EmYnL1iSfjeNrRdSH1exkN5xb9DC5VDf17kTDq",
  "key29": "wzm2ye8aQafbcM48d85Fytt39bsNnEo8RXSvKigR5EnSjbpwCuq2KHBpda47TDXBRyG49mtW5hsurSzBuf29TxR",
  "key30": "3ksTDnMmJW4frZEC2TgBBsSRZVgcruY7F1P9LatYXQRCADLfHtaTakh6k7UNSv6Qf7invfjgXLiQaZqgW15aKPRA",
  "key31": "2XkB3neKNGZzHMfdnAroAVumdVhGBDW5t3FiF82XXsEK5mt1UGpk7t2nMbi5m6jgH6UEB2JE4vS6vqmSQ16UySon",
  "key32": "5zYjSwbj1horcB1yVgjuc2RqSoHvn9cm9rVbZSBsdw4ZeYEaJUFHgK5uSJjM72bHh4ZUqkc1BS5Bew9pB9teC9TH",
  "key33": "2AX158HtoCsoeCtrK8t9SQm4sa78f6yAgkUMLibfHxKFbEQuQc22KhyBGYFHEttVyAccJ6vybhPPEDqQ4ijc6md6",
  "key34": "5ruc4od8jXxA957DnzoB1sTiVGy5WBhSeit3xzHnWBM7DFfUbriCECUH8FxW5QDpnxu1fXPeLKAyJUs8FK4e1HGo",
  "key35": "5Lzzw34R59G7AEYX4kRRaZab8U4d2NCSMHPLwR75DaiGCkhKffLsnDTsxb4GCWVSQ5trswKEBdDAszr76CHmTYn6",
  "key36": "4KJj1xNAPAJpLYBhEHXmPT8qL4bZXHSgaUavCdRSymLPdRkc2VoZhCHNvS3ThkqvyuACE1ctc5n3KxnHKPwioiXE",
  "key37": "W7Fr8XRNUH6iVdJ6DavABQyacJ3jvhmrjEvWRNnnSG9moZDoBEVM3FdBkhitFVcwYv1Qov3yqGP3zrfBMYdbVPp",
  "key38": "5rcG7AMu4efvavEopqtFUpgxSFKEq854cUrnjhS2NrfWDPs9uqZDCxX3pGH1YDx7g98Mi2Pkmy52tR2sBGjpRnLG",
  "key39": "2aYQfLeoFScuCx76rxRQdk2NLFfMoaNrQwK8CSgHUW9dQkXARVVunejQn4w5YppjgCMSVeE28zhB7WgHVZoc1uG8",
  "key40": "s9Vqh7NcQ45JwHCbJBWuN35SKuaT32UF2hRhGGU9DLN2svLaQRyf27AJv6YnsMzcTkHmX4BH75JdKbYtutRDprp",
  "key41": "25t1DuPZYTRazw9Re6T6jcf8zR7hvWyGBf67c2tDgtx6BeNBZdcsd77GWaB1ifv6jwHS3jNWe5DULjmFGN3MeShh",
  "key42": "34NfZxYhUZH6H38bFhFgDmSh2sdH6trez7aDKpQhuScQ2PQPNzy6L54trC1YMi1uzSXERigThMrNPYaq4B8VawHb",
  "key43": "5ezJL9duVbjNEG1N3WMPynAJSt8soczrHBbMJ1FDddCuhqjwtwX9wwcsXSsDT3feLfbimBeSANfhvigydZZzfLeZ",
  "key44": "3sAa8tfzMu1ZtCisXfuzy2pjWWPJiXuZSK2qmdWwEPRNS2Qi3oFBK9qtTjnMTDLFk3da2Fo3E3wu2EtSqqBAwoNV",
  "key45": "4SbBPJvgFGnwG9J57Gy1BCbUAzct3S8hyGGMWzSNFgdyAwHVgLQcDVwFcR4Da5BJb4JTi9ggQh1cEUZw1t5cBe11",
  "key46": "2Q7LZZ4MyEsTVt71HCfgkPKdmV5SRa4JNSXSEU4NzRxuVHewNeJDgUnqFBJRPzJthh8FJBsodRocet37FTt6uXhk",
  "key47": "2WLpXV3SHMspND3ea9HzGrpAHQqjC5YL3JwzpDMqnbXCR9W1EYxE1w2eFXvD4a9JPkcu9ZTuxCGrmZcrjtSjZgcr"
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
