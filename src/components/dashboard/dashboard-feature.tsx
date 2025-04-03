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
    "3QWU3y24iJuXtvaLR9FUVbm9iDnKxS7EfKwDgAro3v2DMrYtrCFwFxCqU4W4FnaMkhG1wZkJWJHLrfZVCzrDiNHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iLDmoxTnkWPPErm2rbQ4qW77HJk4gnWwzjcCr3K6DQC2u8cAZz7Jqvoe6zwUpFgZ4NrL9DsjyTufvPLYhe1v3Kf",
  "key1": "5XvNLVu2hYEdt9c3yaonUUt449toXndKzJmtpw94cjpHLWrf9kZV7DYq9ZhVDVhhHmYdXoLjrTEABQUuPgg67oqU",
  "key2": "3WXMAS3WzV4JpaSXtajpHgCJ1KqbPYJWXrowUKxY5bGJEHtC3uexsXqvbPj7ZDifWySgENBKVNLGQtKtod9nqMtJ",
  "key3": "4dsBT4F5xSM24Z7MsWSiYDf27xa9uU7hUdhwnXHGsmDYo2BQFY75jvh3z44QBDnGf3XtBLbbKZY7oZQjyw2TaBPP",
  "key4": "5M6hM71w5jpAuPGpyxNBxXKk32cM3tPQ1SmMPKZiTnkX6yfDuRomNyokV7SkZBFKm4AjgsCWNpVDFjaXmpzm64UD",
  "key5": "4rCk1a2PH6e9QeLsMM63TRQsLWp5zdjbAheuwQb5gmd2A4WABjayNJqVm9QrwHEjiWw8VbJYzKsBi9yaCQsgSR69",
  "key6": "5BW6CNYWofdiCt9CBTcRFvTjcJ8C6RT67Veja5iWPcg19u4RtehGZxsbbuptzWicK9FJiZWqTstVy2pAdAZaK1hT",
  "key7": "3Ez2rPHPDsVbzCMxzUNRLwZvP1adKTxkKDVXguizqpWNa8LfCQjztqRFcFUTW6bHRSCPH1kUqzYMPABMtdWoEAed",
  "key8": "32AJoZwKhS8nUBz1rYYcbDpfMfJuma545XoGPHA8n1C3ktkB1Ro7swzWUd8ECeXv1gNW4o3TYi3YcaH2rsCFMY6U",
  "key9": "5AFjsRKvxtKKWvsGgGKuXRvwq7gKPc5ofue6XjtzV7wTEZFyqDbEZF6vox6cXcM7DkUaUukc5FHvor61eS3n5nsg",
  "key10": "LuimkNAQqSYqUCa4K69Dvjo5bMx916WDa2fFVzxWuRRwNkgAhmQXtAhobUxFemfRBZUECg3mCFrJz8UGjaDpqLH",
  "key11": "3tgxowvxtU7YBM4q2fjTUJhkA4xUZKpvpEPbs7ppGtc9GUY7qVBivRYiXXvuUUhzeuiJyKPAXYAjrPu5wynrhJ3B",
  "key12": "5Svsu9sABw19XqkbhwMRFX551YX4M1FgawiNLfJ3GwhgWeUftLhoa3eSgoXQRJGoB5p73ewg4y4FW2aaciovipty",
  "key13": "3ZoBLfVQW5Mjtu6LPHMxbp2eiVX8DLYy3BsfoLHLrcaKAEWcZpqCEJBn9KkEdFaj7R4VpjaJsMvxyV5Qz5GCTSpt",
  "key14": "267fBmADhFPqbaFZWvGHhbD9raU5TVQoWrsQwkn2R7ZbnZFBakKfNV8vwPuP7NHCzDHeN7g5Wt4dE5eAojbHtnw2",
  "key15": "4abBTy122NBtPe3G3kKooBWJKQuA2YEXfYqU2oHb5FzHwFJjGtgimGqnu63uqDSGYfGqm9HHnCu5F9C919Np6Kmd",
  "key16": "2Y2HJvpXWxPMN35ZvcoPS8sPszoEXhBLfjQ8XJoPN4yFKfvchERy3hwj6gdX85SVZQm8dvx2CMBrAtUpEvnHv2KS",
  "key17": "3ywLf1ToJMVmW6sjXLnr7AmoLgYKLVHjzZRrXXhVq4baCgYM3tudcu5yw1TY4ZKSFiRyQwtBuDC3BpNZd7VpVePF",
  "key18": "2hrYHU7zFjmKNo6tTGzkgymyDqNpLeXgLUQMLm1XQHYi1zNF1xu226hhjyveE31zbD9sy1EryGCdZKgWihkWUtBt",
  "key19": "58ZFunpaMLTMQDzf3qmRorvSc9pXWkuWShskhzp4pjP5qiYYLT4T3q2Uua6gW2BEGQrA8SmwooK2mEFPZakeP5yi",
  "key20": "54aDMoeGkx6jEcGBenUkfPAgqKmKcet3CeUp1r8PRkmEKtCtxB72GoNKBHV15evMFHibystHspx8oH4H3D9nvw2X",
  "key21": "631vgxw8mbn7TXZoEPkDZgTAu51CJnSVK22DgHGByVmf2rSEbSg96RZdno2daVQ5ysW7erL4htiidq3S88eYCqFM",
  "key22": "5aFtgzsNEDKW8omVaeuMo4cfWoJzgkjggwSxmG6gfX64PWi4s2h9XypcziLRUMVEhceMoNSgLtWpo91XukXuP6pd",
  "key23": "2jMno7r4KG9d4xNTrhywxBvcPgUHUdjtm2R9Nd2xBh9AXQg2U92yXW2ebo5jWS4743b94NNjgj1JDJh5XUmR9trC",
  "key24": "3PiU1kjhX6y7CTvEL47iDFzJ7YsR8DhPFv4um1pcQnxdpZJHeMUtjkjPk1gyHKk5CVmFF1o4q6nbktGHDsfNsxcU",
  "key25": "5o2HC7fwPpxqSPjeWG7AcAWiikG6w5uiDRzbLiyz2bVMv6CbimhvVubxNC3QS9zo98NAVmqyvGiUAotVW3MCqeUB",
  "key26": "2aESXUAGP73w9Uc7b47kXTkDuv1PoLURx66ot4hGqRQ2Sm6Z8531CwUftx32SCKsQ53QFMoxbZcXEmjexV9yWFLp",
  "key27": "569vJb194RzXpeuS6psCGoo2Q5z2wBDChSEZikjkMrUj4EGWtf8jbgAdFPVyeZzYf97xw7d4MATXdehQFSKPFyDB",
  "key28": "2KLi1hVAK24m58e2eUTNf1KciDdGFjk7xDFTbvzapyMDWX8tpmyHPXEbEi71HfZ8VNZM8U55ifWSNretc27vHQXu",
  "key29": "5GYG24zdh7hVyuqH33UfXG6jRV5nokSeb2bkiZ4S3bRGuunH7YXLb5CQgaB9NWYL56hvfZVfZwSvgRw6P6snvT9t",
  "key30": "2VfhbCw2FJjW3EugquFH634j15NEug5yakWcfzQyBJbeXDEWd4KC4W2gN3h1TD7Z9JozFybKo3dAv1P8ZYGRDaxu",
  "key31": "cPAJiTF4yRpdyVk3eh3aG6zSpjPmzxGZChrmssryAFv8TVyoZwzXJJmZBm4yAA2xt3zg8x92fLjnyAciEj9z1P1",
  "key32": "4afL8H1irwJpJHRy9LHG4z3GXBPAcQ3J6jn6vVrCb3jvFAjzKTtwm6qLrVEumze2ECmVK4i19GJe2Yy22GKnDNtN",
  "key33": "5n6aAbdgC2oRYBYYfjHbfyCxdxC2uB4Z5BDmqv5qW5LSmmUxdeTDHpVvdnAm1TgACtjk8nJnBuzRVNHmWbJVgyTQ",
  "key34": "5MvtktzQz8uS8cfc4oMmvyp1ECGbr32DNkMPEGwyibDXxSGZzn6nxjRRwkbRgV3uVU4WjUcAPuZeb13dKrZsEVpA",
  "key35": "AG29mfcvjgeiFPH4cDz14kNTrA5q9qPp2QkxkdpqAuSio4yaGBkyx1n8K2Vo2tqkfMng1RWQixgB92gnGBnyoLa",
  "key36": "3zCJ7u33nvWR4fq5S3zjqjtmE4d71yqD61ktaZ2Eiw67D4jWH3LSiP4wgs7yTV1vjFXNB7gRkkjKVs5FUgAtEHUh",
  "key37": "2VYZieuPM4CcjbQu4KRhjHQyXJ5tDrkpZZigy5h5fQkpnf1wdEgqQwBgRmbXVt9TH48BicNDygZXsftaWamAHjik",
  "key38": "4v1tdBTTQWkciuNHWyj5DT2bzp5Yq8r9VUAtHjDu12gx6PbmPFEYrAyui3anpEiPQnwG5UuqQNNXEv3eyXJN2wSK",
  "key39": "5ACvbCSwg4pXrcppyXZWYtPxLD6Y6h2dPiNGM5HTUQ4aRQyT3mPF8yJRMYE2VxKdLmdtGQzRGdkgKENfUyNv7XDG",
  "key40": "2sVKBsa7iM4wc8bpibrkJrrHDWkyYu89QUoXz2qC25LWv6cV7rRx6JdVDEGJK9ypaM3UMPq9tUVMt26SRnh7cW15",
  "key41": "5PpuZg6ASGZi95y81wTtu81mnpssrvSMnoNZasLzzjFJJV6DvkxN9w8WXFRuDExDXpo7mFqiPwthzj5MFg9c2Wgk"
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
