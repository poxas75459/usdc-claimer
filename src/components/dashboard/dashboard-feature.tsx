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
    "3vESH17ktjvJnWmA2MUBicXRGE74VkRwAz3zuH7pgC5g2egB3M8i9F3sBLRxj478MiwbTDcAhLpfDrxfzYsqxv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uzc8dCkWW6RGGr9n2yc7QMB1r2D1nJw15xgvQiG5LDR2SG34aMCMMdTBtWc5Amcmp9t4nXWdtkoDufwr2wmw9BC",
  "key1": "5RgJYUpidXBUVfkkXC6af4XK4KeYvUuReLxnFZWfWW8LwtuR11QNQ8zRJskU8JVVywSKbXTjiRFKLhXQgyD9ivGz",
  "key2": "Mw3jDgFj44NYfK9Jur798CWiqXHtztxoQAj64bynD2jxGpGEgFRf7csmo8kTYjtzXiEnBQ5nh7apBixPMJPY5rJ",
  "key3": "5A8iT7mgnK2FEGFa7Bq69L19mLZMM2hKxkVufveDqiHoKyLksFDnx3mKzLGTf7KXrW3h11xj8fgdx66NDGSoZBL6",
  "key4": "4vmwKBaFAa7hXwodikLMVA5M1VhJEWn4JMY7cVT29LGGVFE2foKcmGGwDgR9vcnHPVGpzMTZuhkvsxASXZvuYBBP",
  "key5": "3YacbTpLS9La5B5QWpKrUhqfK7sDyZJVAqhxyMvf5UKmqA4z39Kh1WMxPV4eBDqUyDGHcBiqmvcqiqCdUntfmiwC",
  "key6": "2DzWbBmtLnVp2m4tgcBEsEs1LHTzKrJoTUNSFBZmuXXq7Q1VNm8rixKoYqmRPAw5zjgg5bwWLsUzqNfcd9KD4q6p",
  "key7": "3u3eWqKVRhdj9JNZvR6LCPvLtMgoGvDwymoTEMV45GkpiK61vcjfRsohrCCX3aGPvw86uyNC6xW9XpiUNmszXPSB",
  "key8": "5dHSu8iaP3fHtkEsxePijAdSqsFWTEBv7tUprE7jjrd3F6fxG7Y691cwRnG4v5iDfaJvsv8L9KVm83giw9umD2KL",
  "key9": "2fYCzcYSN8E1ceX1fG1YUNv86ySLvEnXCmJgtsDfkCU8vp6qFWgf5HsFQWwuksT1jL8GHDj2Hgb2aymZi2UuskwZ",
  "key10": "645kc4ZooTfGGBQjUq3oKV1qH5Jsu6HqMAW884uFJqdGfgrefD7tc86p66yNTi7otdxJAAH2K7L9KGisY81jXArG",
  "key11": "5dez59KDyDwkgn47xJJaPUiZWv2U6dzLYJDZwJcoFc9BFD7fWhezbeCDrQ6oAF4D3UcKH4ioPXZkD6fgUz9HQSdM",
  "key12": "65TRrLMV1og74ffjJftf4cmL95riQVeWbPp5QgtJyVsivYJiaENf23GawDsUxfJba7vDTH6ToEHr31c7ozjW5Sxn",
  "key13": "3tK5phh1dXjYJAgGUoXUtUSC6q9zMsCKEZZ48pXEkiYWJp9iSiVowJSBcaxaKpmCagvDDLYJxbthBqNKripcYmu1",
  "key14": "5hSg3GibTAye41EHZrp5FhktzpjZGE88YBbtgCh9TE3gN7eQVenMWhpeNL4BZyVpuG6vwsJzwWT7auyZKDXs3ZBE",
  "key15": "4WLS7EpNQFtnio1BxBa3LL8FEC7SHSYUXc9uaaWnKZTh9eeWJ8gL3ZAawwbh1NMipAfec8xFAaoGsKP3K8cJ6cie",
  "key16": "3iqVEMphtapyxFs6YvKFGSage94J1h5LMwH8osgUXBH3kKdxKqnKcvY9hNFxbKqAqiZiqNNDq12Gv4141U8TxfHB",
  "key17": "4UqmuDP9acweiH39wnk8A7duwjYetZN9sxvcsyz6KiizoDiz33GRNvi3TEsRyC61a8YwTR7y2QYNWbteWZtWX3Sg",
  "key18": "22oM93Lfnq8TnPCFYMqaaVWxuHzjYtDpX1gKcoGTx7y2UxG9aUQn1Zaf6ECUmCx2bzscgQ5dDZdZsUrTDDSjFM8A",
  "key19": "dg2q92mxarPX1Dfe8k3SLGYzPgf5zpFHwY61ZCfD9wtyP1qZ1u4UYHKibH7gxeoXMwKdaZTCvAxVoTerqxhhtk6",
  "key20": "cWDJ2ApqhYZDbJXkaz4aVe141dA6u4t5KBQiHcxuSmrmGpp34YY2Wy4tmRXx24jMpjg54mbXvGqp4Df8GT4xa9i",
  "key21": "4skWpc3aSDJyp7sKxY2wtQVXnQFeRhjs7ULfk9S8CYpYifQdRMe4P4o7WYEXbPYt7psij1VrA9jtAhhHAwyzFP3i",
  "key22": "4krEts84juToK3geoA5V9CjuH4yH3yPK4qq5HABnDpLAATF6VQgaBnZD1J6FsvFRM2nTJ1fYct4pqSJLkwstAe2F",
  "key23": "2iAX3d1Efygpx7T9frLDPoDLWZ3vX4ztzXFx56xiBCq1YD6XtupcdJwthEzaANinHZdvQZK9vmFsY6AfD5JQ8ejw",
  "key24": "3swaXEzfVi6XDzzaxEzU7tUeGvTTHUNrVBNCQTFuomHsJ7DNLpUiq8ZJtkPftnsmfFohimgFnnVKSDC56eTTBqR6",
  "key25": "355ryoXSPKki3HTt48xnLjf2hPXJENDtoaaGkWLZrJrbhS9w7enioz3muFasbkWiBhZ2dNPRHasH7pnGDFJVWXxb",
  "key26": "29qB8z59XnFAnoo7CyEi9gP7eWeUrHzeiNfqrwYy7yUCEGNCyow4jVdMJwKXZ5T3youApst5dBghcet1nv7fWo6m",
  "key27": "4DhNg2XjfQuCwVig5Y7kEvdCNutz3jkm9bdFzioJUQRoXhZvqscfpE4VZVVk7yB9m9EK735TuFi8WALbn3eLNdMZ",
  "key28": "2K8BudibowFxsAPPhBAEUbx3ohgRB26wLJ5Efg3ScNsfg8pzoBJ8oxwL8pAMnR2SvjkCKNxrawrVBEibRfuauq29",
  "key29": "4x8uJKLygpYhjeMuhjxB46SpaKgM9Wi7EuBzHgdcpmioiHp45BqHgmFK3etosUECoQz9EaSYD8WChsh5Qms4HRTe",
  "key30": "2CgvjKcDyUvmuEtsFuTSsopDbhD3dgP7dy8ZQyYxQMX4oVzS9ZmmbPFW2Cxmh8KamC5SYPECgibG9gNikbrffAnJ",
  "key31": "4j6HR2N9jg86NRDDYWMWVtVTZwHNLFrwhPn7JXuErqZncendG8VPnTFQSL9z11EPBKvVFsyQWUmFKx6TkAcQXtpL",
  "key32": "5hK5xoGapeV3W5Qa4zjD5Nqf5CQsJEYgu9ASgpHYdkrijBykBgzxJfsYGmhYQjT6VQfuHjg1YaNSfEnKRYyTb4Uw",
  "key33": "4iNeyFwcy8FYNtS6X6NFfLsor2FRMSHeavHzUL6NCsXZoeXGKJw1zBQncRYsiNEe5qxJ1dSJB5o7hK5NCApV3YDv",
  "key34": "2BJJ45CNZeeuZy8nBiwwV12MdLiNQY6BjGy94zJFFovFvHyewwKwqy7xsHwJ4WmyYmEgqhi5A4mrhE7CCN9FWJ1s",
  "key35": "gQngczRtvprxuz7keFgHxRaSehkbqo28dmkUg72aWzR78BYoN5MHAH7reuncTRgdRAmbZbaVehzE6bNEfHRmedJ",
  "key36": "2s4BC2z9D29cUaZD7WDQtYiLZ7JshJ1Af3MNW6SELitA2GzFbCe3XaRy5LgiXxyxG9mhALry7NybchtJv1U6N8me",
  "key37": "zHaow3PobNqNx4HRUVNcAbsTqYD7bNLqP8txCfxAg858L4YQoJ7HCidKJ24eZDyMdDFLQBpJPL3voTpiNA5dxa2",
  "key38": "3RPeTgMGZk16c4EEMsqUZLi7iSKZ2Yr7ze8kr9G4u3aRdntmKb1nAZn1J4GbtvVJfjP5QdegamKzcHzns8Pu2o75",
  "key39": "5gY65AvcWNe98GsgD6MxHfu5VeRwgLCe6fqdxyeC61Ds5AhzgiStKBRc1Bx4kHUEJPTRbMz1wjh9qtGFUWELGd7y",
  "key40": "3zFFTKfD8dEdvdo9uSVNhA7pZbLDGhDf88fhJ4UhjYSezbLUkFVPbirURaTfpKJSu7USY3rCUHxU7VfJmokR6fC7",
  "key41": "34MyBuEdpuKiNAi3bQ6ekKCHSLgfsLwQyWGW6JJv81GayneQnj7J3PefAmEVh3LYNVAozEqf9WQpKDKYACMxTsTQ",
  "key42": "5qJAa9cvkE9LpohuT5t1wrpDBQtAFuWUunRo2HgrLWY13B9rbbTLZdf6VPs2am83PqiWJjdp3EbHDC5KMZaKr6Ja",
  "key43": "basui6RBA2q7LyyytQZ6S39x6MvLGY8nUY273eXMK1ByQEewzc5vEtj2i31QSum5aVxokVkY2wtpRGKTV2BS8d3",
  "key44": "1cAoyHhJwqAdz8szC221c5NxqzPpyxxeGt9EvEVG5842sZsmEddYskZ8owoKMqSxWZHg3Gvts45QZGrgDhwNPFy"
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
