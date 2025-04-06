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
    "5bhr2HzLtPszYMaw75yqpZrfQcQ7MZwFGGuwEBnvdtm9Ce5X755gPKWYu5GFvqKqksHKKF7Fz2FgZngHjqTFiNdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sUq9ernznwxPjb4tWSW8234FfVVEHRLKK1hvgg7nFHLoBdqMgdgEhYsNC34HEstYUYdxJGjfVNMtzHyQAe5B9tS",
  "key1": "4KauuMyBuH9A63BC7vk5iBJkCCTAMuw4s6xg5jyft1QWFzh2GLKiFu6Fx486bJFtFXdBFbntKzq18suhAZxPBes8",
  "key2": "3yYppkyt4cN8AuQ8KZVg5hmC84HCw3NkYqFCAsy6idFodFuoCdgGoNAuv4NjaeWF5469AdSJVHo1dotpzsP3Ccib",
  "key3": "62knsatvUsp1NZErxcyuNCzFaDZ5WMWd5CvpXJWtHGJckpL6uRkrGSCxt7AEW5fYFucLczodzEEeQKeo4cja18it",
  "key4": "4JY8fukTZaPchfkTGNY2qXaDhYYkmAbJp3az7teFY6VPhMwyjH2nXThjsZraZPu8csRKm6SbDrPeKYDFMpTdFcKS",
  "key5": "3qbDGd14fZYs8ExHAjCnd8Yqz9yRz3v2Dy7YrqQU5ncszjhmdrCohZwzuA4Ujf5w4AmTd9JAnMw3zZeSdLnPDrg8",
  "key6": "4Y8abbWufh4LQrSw4p2exWNtH2QV2pC8iofFkQ3vJWp2TzkCCzuNTKqbgYzHw3kN7DdrtNdupSL7hVPVEg1tfn4g",
  "key7": "63MJDr2msj9ejqQaS3ZyqNBiarxg3ZadkEhkE5vgmkYrSK9NFKhGucJ3X3vCHFZRPLqGDyNsEXtFcCwkLWtqVHmJ",
  "key8": "2MSyYgKq3YsLNXW4Zq1RaPPKqvVj3Bmp7kNUhMiZJBDWDdqmFnpdZZ8pEMGtzdZZANKQLT9u2B5aqpaeGtoSzwPb",
  "key9": "4efv4Mw9N3ZiEtKbP3zjNs1vGSfT8fs1LA8mor5zkg9DnfnZXHUGexiqDsJhm4PLHYMzgEmocKEboYf5Tj9uDAwm",
  "key10": "zWba7KTfHfebwD4TYs9Lc5zJs5499bueKtQBCMnUB7Mi2SbisKtf32UXU8KbxdNwqBwApNAvCNQeETHzCLtkBwc",
  "key11": "5jF23h3pQ4kVnHM793aggwB3R3Aj4TTn2rf2BhwCNaQHDBdfqUPhCgDRtLSttcc9kiaGEfrYcvACcN8PkRP3iJVR",
  "key12": "3egWxyuwvR7wzgp6euAqc3FBLaKn2ufFsmsJfnzfntWXZ2Q4ECanvEcqPewdaJsDBDUM58SALfDGbvaZLvUAEDhy",
  "key13": "4vACED9sKYM7MfQErmb94pgB5j2T1tXHRxcrMZdnjZ7niUKcLnUw1vYQKVjMsPtpZ4RK6pH5DxNj1pF9CVFRAEN1",
  "key14": "3ymCgGnQA7QjxTmL9F52xkPsf4NVQhuqe5Nf1gv2iNxGJZVBFR2L383N5SUhFSvi1NHhpqau4Jnc3KBnMy39dciZ",
  "key15": "5ewFT5TAJzXCLsdqWyVs7CAZyfguDWkDazQjjDjRA3NgbZgZkrvrTR7uGieuqXoEmfSj5FsjxxJyezef3BuL65Q9",
  "key16": "QVSH4xvNigwSf5AfUW3Coj4odM9k35D8tCErFDT76ZUne4NyP7kFMbU5LNwNigACmdcg5ipDMDEzfdPY5sJe9Cz",
  "key17": "262BxM6AdW4MD7AEcr7BopkZr9Khx2vYdRW8F5cnmfEZRSZ3j39CQ9Xbkd3zvLENaKAfKVMRVmLnEaYGgM6ecwJ6",
  "key18": "3vzjRh5ZPfdJ2wubANVPfZcHtyehQd4JofHVtTA6SrLPoVRQGEUt8HNU5s9MKYDaL4bHX9N5Ejyk2sVCZRz2GTUH",
  "key19": "4KeQjPDDhpH5QUcqsBGX3jmH96EDwaednqKCTueYnyAcA95mWQ29uYQjmFEM8dHCeH1jnG4xULgkcVtjCVzVMQKa",
  "key20": "2dfEJwDoHVeLJdjcHRWkamEFT4boTUZRJYQ9M1DapBMGcTwfH2a7zZWHgkjZipCL6a5YvsWLvNv4BPfoFFbeD1B2",
  "key21": "5e3LXWj11a6y6r5zFwbT6UZi364gqwV6kJydyLXkq2ptiwi7gX6aFwD3uf48A5UvGKGhjQCvxjNjJWyY1ReN3ggX",
  "key22": "4y7AsDnuogdvGWRXSKtJRmCNhpdXGx5n8NPgt7vwPu62k8xaWog76RxioucLCdJWV2jezNb1PXyQLrpBHt9nEyTr",
  "key23": "26pMsjTZdm3fsLecSw91iwUpjZMXc4ooGiczbyjmd94KxC9rmNDHZ8u33HZfW7a9nxFgkgvxCNuABS2nLG3MGRe9",
  "key24": "4hSz9RxYmxzLyGgkzENaZLhfjgma7eX6xD1wiYZ44DbmRihkdcD1BSoSe3XgekhH88Dqur3nzqMjufcvALP97Pip",
  "key25": "4NgFeKvJzGzpPeJeyLWr16TCfZAw84vAptmafoLoHZSrnyv9i8YKDgeKnRnRo41qrTt6oXJFXxrkF18KY6qhSRjg",
  "key26": "5PcSfXTsRwWV3N7ENPNUwWmPb5m8Ttbegbt8YPtQMEuTYc5ZjVTX25J3DtDTDq8r1MjpXU9HuE3hQJbbUP2p3QXB",
  "key27": "5bmugoXg7ciR5bytJUCP7kM8GPSJBGd785JNh67EhrvGQ4ka6EsdDn1QPCJJ3qxYujciF4wgjAE4yX4pco5Se3a6",
  "key28": "21re2inBnwDL2ippv6RTFKotCFf5nZsVLX5Yv3FczdvzRrSyoySHPmg8nmhAoovw3ZuDJN5jptX9zBdwqZ5gS37A",
  "key29": "44CQC1RcJitACaWULLQj1fLXxZyoXsYLoP9LeSVLCNvxeAQbMcgPdEWUm1YDGPdYfyyS9EADWvqBS3GBS5bvKJEt",
  "key30": "2jEYvM1jzW9RTCfSSc7k7u7CkGzw3Cp8NUWQgAthZKpZFZKRKbi6VrZQekYBzNcWxo88w4iRAG8Q9oaH27sXX79E",
  "key31": "fj39DZdZ62H612pfJVyVavjg6txhCYLFWPLP3Li3KSWgSnPR5cYFdVQTfs91ceDvFiN2TfC4GcBj1DPBaPbwqD9",
  "key32": "4kccE9qM7PBsvQo6bDAqrZ52kSnfY7sEHj5rmXG1RAjYfW7BiyvH7pPwZHUKM8Hf3er4q9jNDPTSQ44aHD4Cu1og",
  "key33": "3uWWtuSSks9nEJzZeAYFiiaYL2nwkBvqvW4YDBTLe5jc27vAVtJQZ4RUZv4wPtrNHNjn7VnebUb3i9cnL5CDsKtr",
  "key34": "WutvNx9wkHZBjmPmgWoHxbw37GRp45Nbg2kWfC6jbCkVL5W4jmGxoGHEqerPm1wCAB8wWQWK5SPkDmsnthbY3f6",
  "key35": "2AcaFdnUQTBEvoWqm57SwxwhQsPFvy8rL6fJKdiDnTK8prEajkz6GdUK8toqpv86sBRrfK8RFY5oBWaoMhT7CZWB",
  "key36": "2WoM8TV5ZVKTp7KSkY4ksTmiYA4hAFUSdCowxa92x7ytJXXwV5USVahLeXvaYNsYEDsmpsN3puXGBuLUCSvTMKVu",
  "key37": "4AsyuMgvfxGkTsfqMwu2rdyj8ni5KjetoGpjR4MgnQ9JxTSneVH7jwifn5RE9iWPFZmK4NcQExpum1UYFTqU9B3R",
  "key38": "2xNfidMcJAFrRVXbx9EYM4F4iqbzrmGKQu6iUFQNJESpjK1qYinyaJYTKzRCP112T9fDJouYxtKrf47ZczJA72YX",
  "key39": "56ZuraJMkizQdMYVnaSugnen3Krbv4SLrxhV6JhVApWX7Rwa4RJoLXef5rubkuqnxfCjEj5kcCi87RhW7Sz4Yvne",
  "key40": "4dhUEXAuMz6KFRDMNhGjHvEJKeMM3wncurje459kAuRqZ2zFCrziDCHc67EccWUXsG92qRzS9HM9VchxXS1fo9i6"
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
