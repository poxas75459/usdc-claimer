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
    "2LNcptH3TfQBosX7xNUtQKGrfVFkhuejxpMfTiC25DanKKJko9VMzPaYZzsMQTCiGrdAGLKf9saWJh1zcD6jFp62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uu4gu9cywu5gKzJXAYZsTXW5yeFLvKkuZBZ4oJWyDMWrWrzsAEvbfUq6x7XtvQMNWh3Hk5FzN3SxR5hupyLRfbj",
  "key1": "43kKkExdcD5LhBjDJmCfpnEFPAjqdaSyoxnsJTdbSeRHf7NKPTFXCeoZ1wd5LfosJLf1fMewFmZTnDrV19d5Bj48",
  "key2": "4Q8a6GYWmGSAAFFiYXK639C1MjvoGdVXNkJ5UNscHyLVHLFJUj8hg6YMa8SirsVdjbSVN9h8NWAJDY1Y2eDHzj9Y",
  "key3": "2C8AzVRUN3zkpuYB7hn3u1YLZiCmLAfKxi11DMCB8HpEAfCLXmCVjd5DVzZEg8X4SLvATFaNvSUtfSPvqCVok8CR",
  "key4": "XnDzTFKxtP6doqytGggXn2wt88nANHAuBNBSM5ZNpMbeA7ZUA2KHzWcsEwbGpw6S6wxkv6SGUa2RQtu5p2NNK4s",
  "key5": "ZBHRwR1As5QMpAkma7VRW8jVKCB66hVKYGKwGoaqsVNUxCyZVfMVT9xRL3BA8Cacw6DxYCD88i4BBiBosPBJXVM",
  "key6": "5CpeDyPq6eVSKFrEAM5KDgbSMpWounTiNtJfh4ggwf7mxL8QvJ1bKmgdcD8cbBEyL57wS3MyShKfZ1yKRoGAyGvr",
  "key7": "3Jq2LFjLxWjWR44sZK9n4VBevKUxSz2aQnzwMF3tC3azodYg1XqnQJmUttG4P16hsaMmTFyUCPexumPe4oX19SsW",
  "key8": "oYFLx2JjqZG3doeqr74VcavPhLa7L6g3w7ecDBGgLHNDusJyU8gEsenweFZH43CSGwHQo8dXcV3QScgD1QfV7zi",
  "key9": "5tgU5jE5p9aDavhC7z91c72Gxa18FKgRYzz7MEMWB3Nv1cGFk2q6QqbAACrRgh6NqcwMv8xAecCcG5Yo7fCxX3jR",
  "key10": "5QTkJsq2MwaSEg6Ca7C6J4qLHESjTV8qu4Rx4R75DwZ39jMGVeJ23odXpY9kNgyZE5tusDcbywyfrm4HUReNkCQY",
  "key11": "3tt8pBmu7NnfyQxo7b8dQLAFrk2oeixtykE2DJw78JhGnSdVhyhyvMViuUkthxWMUriwbCjSEgEPumvnvEgeeGqr",
  "key12": "5inL73vvcoXkpnm6ZsMoMJAKpXGvGJYj8yVX9TANdH9RicSWWVTwZNczCMTmYkkRh16PnPEATc6refh9bAGwLU8z",
  "key13": "SJMMA1fEAFCavDoYXheFG5RCgFvpi1gJfFcvJ7ez2vnT6hqDVCr2BAaiDSnqCSaogFA5JbaSmWEXKS177aoGUam",
  "key14": "4NxHwUagUZknxwW8Lh6iZ5L8phfWG8qq579zzyc3FZKtLNK1msAn9nCKDujKdfDpcYjkpsFK5LMixfbwa6Qhx4Ez",
  "key15": "3RiNGAzQNJKTR3VGhmefxWWhWVhfQ2S4iPKw8S9MdvybBwc3HEAqwFX2qYkhVXYknbNpGhdLUYUSjxs2w58p9Tga",
  "key16": "5YDHNmPrjX8GkUSyppuGBHakc7XvbcBiq94oz6nmdqiBaq9Mx3fqHDNcmsLE2Lgge7LtA5FXN3sktBwLy4cMPpvf",
  "key17": "RWim3A5Z2wgkruPHfzXg6NrZR8qyz7sod4JAA6fZQHVrF4d68bBVJZM1nhvoVZyM9f1g8Md7PnoYv11zD4xn3BP",
  "key18": "3952f4QR6tjRWP1ziCz2BWsfZrUYjqWYxy5zWAU1GpkqMhxMasBdsPJKrtmfmZtg4vxZ9pkFCjuhsCPHvS7VwKxj",
  "key19": "5Zb6oCgV7PBGr2Krqbno6QBRLSsXUp4HuQw3V2nC5BB9M7KfWy3rJFB9JSWNd74mj3q8uEbECzQiu9xBDmHSP2Uf",
  "key20": "4adRvyCC1PojRXGGtkGV5QSKb7BvCtMsmW2FrpmaoWMfa1FejksNUf3i3SXHF2UnLQbWVK53PN7z3cYNuwidevyr",
  "key21": "5jMVL9aRY2icrkxQWivA4nGqpMhp4nppsb9k5cC1Rgz6kJnz3H73eUF18YuRRJFMo9rGh79WMH2zfqRDMZZ6XAfi",
  "key22": "UrutfCbowc5vWdorwwzHXsVjuef3GWqENYTiNwXPngVi8fp94zMNWzn14kLUmgC2rvvPe6anLBsugSiJhF1gaU1",
  "key23": "4WuNSCehPm5Zk4fQjqXgzVRHKyiNzrmCHirz8CTYBo3rku6YWH9kkst6iGUUahqGhm7w1BQAm6w13ppCc16Rw12F",
  "key24": "56ZEwfzsZfXVG9Ysj7DqPdWQw2k9PUGYSD55wKBwH1yhqQHXcriMRRSjmH2fwqZYGgZZMM1bJ2cZDLbPzvR8nx1Y",
  "key25": "4vhJuY2ss23QZpt5qUbNnZUL556VvxG42CmU6j9xTR16xe3a7Xw6oU2v53p6fbiwRSK7PCjS547LtUCxbEn7qwY2",
  "key26": "LDKLkXDKK7Qt4fgSLVWxtqWKJixUHBr7pvcpFvn3f4vukWUdiENsjAc7jskUG7px7WkU63wN2pyFmVn2KbyEg5S",
  "key27": "39vHeCaHwwWvctswsVkzyvGWi4QFopurgxhpTMFeAyL2qNMB3prvfZanejUshSUVUgdkdDGUgtscHGK12URY8BCV",
  "key28": "3zSjuafHsiEPTRAFSZF5MPkZJiUyTB9wyP2P1aCQBgL2ykunN2VUXK8MtLFown8H7Ymk5cCLgfTrRRymNie7x8jf",
  "key29": "3zBZYnvr8wGeqBEbrn8bhsT8BWyDk1AVzbckTJQ3PV7xMtBhgFrEFFF8HzYw8kKaZ12YEgU47bLPcmGFdeDLvRkQ",
  "key30": "2psAh3TbfGs73AnLWmSjM6xVfHNbXA4fM4kRtYA4CR4V2PjSJnkNNjQPHin5vGdc3Duxoefxorp98Wv5fTft14nF",
  "key31": "4rcbVS6q1Sizd1LGS28ZT9Dhk6FgKQFoAo2H2YBUkTTnGzbi8cL52d5ZYpXde3vQwKTdgDYHYNpKPNiBaSVVDw9L",
  "key32": "3NttyaZgSUwN8paGq2toZdnaZSWvpQeuY2eRkEwopBLZvFVTSrDfAH4k4Pn7Mg2EF81hJUZj65r6S7NMqwFwN6PB",
  "key33": "4gSBUFdG3YZwyD5pU7WMM7KAdUboMjoKSd7FaoMJx94gtojidopajJ2XUfUZHb56HnvSM7rS6iNtTCjLKGyM2Gsg",
  "key34": "4ikuNSJttEnAJaohzqxqd5L7DyuuVfKmxX2DER2WXhAnAbSykLKVV2E3sjG99FgDU4eHD5nXys4tTJCEeS2cdDvp",
  "key35": "2ruqsNTojsPJxwZPL3NVHTgZu8QWxY8sYRa3NDD5kd1dkrkEzMSBWTmn55LVBhhb9k9MEcmjHgQArRtM2j9EsYLA",
  "key36": "2CKUF2chWGKtDq6zA32hGPpteSQqKDwZ1k8w7zftH1wcj99gXoEzrnpxQo1MEQQc9aHscZvAbi8SHaD9x52aWafD",
  "key37": "5gnATe294xWHdG7VAwhBYg777kqvPyT88UMwpmvURVvoSaFN4BfY6kZ5TDWp2p7AXSpz6Nht6dGy3Rr6RMgcRYKH",
  "key38": "4ja6hK6bfMDFiPeQFwbCxr4CGbNsNyJS6XeniWH3KHz5tQEsGWAtcKaoN58RpzERG8jiS5fthxWz9a3CvZoo1NxV"
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
