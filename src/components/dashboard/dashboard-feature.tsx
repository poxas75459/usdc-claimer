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
    "3sFrSbhiksfn1GibyRAtFwvmZn64EL5VEtjBXDoipP9VDawK1cL7jeuYgEWtijXCNcfmBYbZ1rDFbi5TXwigPoYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52TMB4ML1dPUvGz93trKrUxepHWDotEmFk2zTGKLoLvbHyZYWgB2rULzgGL2kp9VH9vPjempcKneYm13wGhkQS3x",
  "key1": "kESTQzZzaDvtMVo8gSkfwdkuvfDCFzJj2TMDaidYZ3YW3VR5u5tdjEp8HxckXQei2NJRq1ra5v3pSW3QTgHtJAF",
  "key2": "2s2Jc4rwK69AA1b13GcEAeFvykrVeg1QnJm3sMpmNadpkBNzMYmfoGKFfmzEjUTRrvPnzAfTm13mSLLaGCPiYMLV",
  "key3": "2BLCqB1RCrgeUTEhX6EQz6LvX9PjE1AMZK254gQFSFYUDDCcWABVzmg6fvR1CYVADRqwPfD5ghLFuFJcr9yuJkQs",
  "key4": "cvYHEMDT2VQXT1zC3abcy9xBRXewivJGUjPEiXi9NM1ckmbw9oAyFxQdn1JnPzfKvUBBsNNSXVej85Eayt9ELJg",
  "key5": "5oyf5YEwgCSTriBaraeNNbMTQscEbFjyGRaowdjuy344mCWGSTdrZY8tYm2jypK6PCDZ67s1vdCRki5LbcoQRz6t",
  "key6": "4cQXUjG1r5cmvL4uuTaNK6acNMfBPKHvGxZQyrskLJ5AVBMY7tHPeYFgWuGKFcyT9xKoc4ZZ5X4Sgq7jEVxkDXLi",
  "key7": "2k5H8Z3ZuxC7jUvfmwW7HtJitApCxtcPX5tj2TsQXsaon7yRXt5NMGwW4ZeNok83XkjeZuoqmUthKvsBP4ke33wG",
  "key8": "5LCAyz2M1yDB7WbexkWevxsAmtcCVZWS2eQqvDgovcx2Facnpb7wMmk4sBXAL9QF3w2fUAkaBBFFVmy9cAqoAu6N",
  "key9": "JYudpY37Y7zDT6B6jiqFbs2SH43V8dKHEfPekxtp8KgJ32sYyXmepx2Qz59P8e5ZUsGwUDQBhm2ZtMTG47gJLoP",
  "key10": "2LSsiYzDTwrDRPqr9dAxuKmpLD6XXdbBJde5MeeGCM1cZeaPbciqYr9eRuNVg3foAqa2qnrTfJw2jZtAkMozz224",
  "key11": "sn6djtW9cbPVfoqxntLcM7vyh1u8992mMyaJeTundbdcxKnpN59exw45UZibBB34eYbUwZYDyxZcXjXS9WZe9AV",
  "key12": "128bgRj7uymhNAZP2WFcZEHyCc68HeQoV2a9n4yt49DYKjRhGQBviwp4MVukQpHadk7pCVsbCQHsVuF4DxsBErdB",
  "key13": "dQknNAEa82BjMBeopvuanpnSmLzCirLyHETJ4yzmMVR2vNtLWG1PUZfLrCSwc4mtDNJr3DFmHUp2NkA6cMFxKcL",
  "key14": "2MTPsF9Udz9dc2XXUqGQyV7wKxtNJnmBBEDm5od2nvfSARqc3Q8pWYH3NMA6HTbNLJpZgkSWkZQqB8r3R7hGhta4",
  "key15": "RDv7WifYL8n2BGK4BZn9btddgr2iNwFj7n6d2Z7BxQMb9DN4Poc8YhFoMMtVFF7UiXUCqFiKfCSPKVzktowqGcr",
  "key16": "2knpVz7BEbj363J3D21PVKD8bqStN2Kv6kzBBwqYnhTShd7BcxjSyeqDPGCF7RNwe3iYacC1PZWV1hjRdbLKwBrF",
  "key17": "wfYXAvsovCjJDqS2WuoqVtUgiBPpLU7GoLQ8wqZK7Vbgncz2FhYQJz8VajGkGtTLv22Uei3uB4uweiyYg6aeNuC",
  "key18": "4UGuWTN15wPKfAs6iJ3dHP4zST2KX6H6TwcYw1zXWSJE7KGyivBBur6yWjhtkBxKXxx3c8uccot7ZVhwyrFxpgZx",
  "key19": "5RRU32dQFK8Prx7FSLMdLjSCD8cjT2YKo7avgjQ9rk64ospfoJWaYcoJdvNVSPHZNjBGPAFjMSE2Np3dLS9sscr2",
  "key20": "5EcJuB1kYykRs4bQC5FwU1n9Fo4ztLxKmg5z2C3m5KA5xTqBjntHqvhMTmJdos33Grm5poFv5spLL8SM1Mcmu548",
  "key21": "GnQjBLeFUhQVYKDLuzumQKqX7YMWpjbEDFjE8K5Za54DqzqKYAiqVE3T29J9AVhuVxJ4ZRNHKTsE2q3NRJMZXyj",
  "key22": "3HSLfyUBoPbGAsfRcLJYAwx75vG2kDLtHuNbFuNCCSPzeU8z3PA1tFgxxDN4wWEVpkr2ceM7aHJfPpeF6hxsLW37",
  "key23": "wZ9UR6vxwdWXSDfvmz9uJBTNhaBZFFWgGC3yvZo7a2ctC3QEJVorVb3LgUSHCWgPiCPHfL27YBAU42fx3cFVKcV",
  "key24": "22mnwJCTny2FueqE5WH3nQvAzREig4mA5QVYYs1F48G1M2EiQeSNwy5n5yntLWrypMoSV4DDJb33ezEsEkCX38AY",
  "key25": "3vy8LvE9ePY17ASskCRvVqAjZjha7UUerhBnmGKBVqrV1vjrt9gapVQk8spdpErHYSfX2ssbSAQw737n6MhTkwdm",
  "key26": "2MpCQNnDtNJWmdnDrrQeQhEaGixBGxyYt8NS9HN3Z4kr8gQqZjgRKzP5V4sDTxzLB541gbcMz5wpc95ZrxxZ6ez1",
  "key27": "3e1cb6pKynfBfUuW2JHCHtzLocU8CAAnZxfB8FixXQLPwtCw4T9aVbLaknKF4nDes8T8wJeYDVd9vwhdb18U3tYR",
  "key28": "2u5S5wfbJpVtnn5tC6L5Nmmssdg82aH8F2WfQR8SZxHe6CtCZXG1ncRXWewhfRBwdzuJxaxZfykMaoedkJ954eJf",
  "key29": "21xb6Hv6DrQThCUKZ5D8wjo9T7oEVFKNLoHTgcHC4zMUHFccncxtSkjWd4aA2wpdhTJ336HT13T5D5URrSmVat2T",
  "key30": "4V18fkRc5LKNZ4wqzHRsV4kfVCYAsjFMeexiieF5rixZ46Rcah6kdMY5cW3uTEF45HKX2A44tJKaa35aK9uVx2Xa",
  "key31": "62uMR4MmZNwbpmADJWGsp8wNPYXMHcqoQEETXbXezAek8EQAHMDY9So6cL28NV6igWWr3uZmBw7F1kj5ajjzR8W",
  "key32": "xmnZvNMUC3tjVFUSdp8D8e5KKaGSXeea4gqjVdekbu2b7BGeWaQ2iqnVZc2abTcPfHE3pNyATYvg6b7KTmcYgCr",
  "key33": "1Nr4TA7aJVoPEpRkVvinSSVYCTJXYBDtZsN12bBLmBF9zQm687xvMqtUdHq8A46y4bqZAV9zioNKxa3LcmGZx3d",
  "key34": "5eS8veU2tTmPKrXkQq9VgJALzBsX8V385i7ZMwZeowZWG8ovZg1Ermc6gS5ab9euZZHb4iSa2zMscgCqPmF2LBLH",
  "key35": "326dn4n8Y32MBBRQdMR2SMJiqysiE3TQJFL1k7GNaJrW9EQqYsmQtg3LxDKxKWxwdBwFmC21Wd2AbBvRs82vqkxA",
  "key36": "4iNzdAkr5YhQhn9Wm7sLiZF2TRD4XEw68FZBmshQ6RXhUwtwZrJw5FSSKsjfCHHctSchhzPF3koZb6zEvAF4XuDk",
  "key37": "m2KPWc2TqtozmZJdaqFixHRZLxLQfw65uWsrkFiL3csgu8GAcMouptVrhE5HNFTmpFqj4Y63hhE8R2uUKNu2FV2",
  "key38": "3HrJn4XFV6EP9kp1Gio8W46oGzRKfsB67eS8tpW1SUqSs7LJqGfR6fLGJnRa4KDgfyLSyfEpFqgs38BuAW9Z44EH",
  "key39": "dcnTupZsWW4YCS5LXAeaGAU3gvwZ6imcQmVEufthumx6stT6sV9EyVnkgXhmzTeHtCkT5rPgP5ZYNsyXsKEe3HB",
  "key40": "3oM6e42ELzemZsnMkD9MrVi8BvUiZ7JjwVtUMDdugyqaqQaC3RZ7todnrtuMqq6Hq9oHP7GTpZFbvwS5jwfdzy2f",
  "key41": "5nuZFLfUZKCUXLYmx9Lu8FPSBGZCRD8vNDDSFAFdPHy5mgJcEBnJfxoY9D1eU8RVeYygjLbKDdAK9XnrrWMt8bjq",
  "key42": "22MofBKu41JL4gQdW3ShMSgyTJ3PAm5U7NAWRsuvhmmGynipNt3Y91LpGhopMTDMaYau9FttbdPAZ1dt713W2MVa"
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
