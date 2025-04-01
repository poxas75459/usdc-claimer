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
    "4vrJxBrNVML2Hzgy3NkNqenBioGXR458ydH4qVQRk4yb18Qco7a5uZHHWbWRg5SjanB8RNpZNn9oEmbNrEoBht9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XiA3ozrum1ppw3KQvmahWytQT42WuFLjXyopMCF3XWTwBSAgZC3CXd6W5qNukfnNNu1NYLmG7sxrfbmfpgCETxh",
  "key1": "xAkwfRo5umE8GCiTD4Afd5kZLKeX4qwjP3LtNmYiTL7fp37PpRMyjcFR9jetMQXGTG4EpNU5rSELiG3Lnzwx5Fi",
  "key2": "3wGwaLzC95KZbx71ZEtNUW2JQLmzTpmqbQev1CHaVCbvp6CnmoS9LQKgGdrrJ9ToLpP2A1KrHqtiVBusg4Ud7hyc",
  "key3": "3pubFqZAkaPC7iEFYJLqiSTJZAEhCMYKqTQMpidkgoCR3t8LijGPMTpVR9hMU94xF99nrTApxh1ZKxiUBaNAUiad",
  "key4": "2qs7r6xvnGyoNzUAzTdDZvK6DV1VF47ScB8RgiTAQ77ubnjzhDxwkJJcL9dcz1SyFqo7ANwSB6rU3Pakkv3ZT9sL",
  "key5": "5gKffftFVYdtKABnhQC5hZ5MLwKsg9KFXCr34nVKYqdbLLf1JxDPV7EQoEo7nVGCp6APu41X1dKMpS2V3DsCGgvn",
  "key6": "42e4JXeEeSWaJKtYsWCUk2DTXorM9nv3VCv7nftCa7QSD3GnFqFH4i2KThyciUXvZ8h8YFaLvonK8pbkU1v1D4D4",
  "key7": "39eWmH1e4tinWJJqaaJJmFdsTZ8DKKTCEuEr5o1ars8ViKwsWbYswcbBqduhVeTVWiLg6WytTXwMGauvD3o7cHGo",
  "key8": "3wsdYZt9dN7BUqXYXb4yBiCZwgbe3BA2AiiS5FPfviGJmLVZA2ybjbCAroLAY3mrtxhrXcGMcmAK6uAzuGoGdCuA",
  "key9": "58cRtUzEWCuNg9nDrBShTRVaQoNCn9GB2id351rR7zqWeYFzQbzEK68kkaQqgJUifHevq32xbL82onisukhkNjWN",
  "key10": "3Vj5WJRHizcSXCShatuCtemGsSJdo2dXCKruqhXpWJ5EcdsuukHhoUKrQPX8TyHJh7ZyN3CyFoXDsWBZ4jhXo2N7",
  "key11": "cd4N8PTt5wa8HNVwJXDgjgAf3t1J7KJcpt4LLCsvJcZzMVc6GCgisoFX112TyYK9kSKkEsuFXMvbU4f4rYV1r3w",
  "key12": "32ZocqNwSeN5ExJXSu13ovUMirmf5eLDAX8o4PAQVXC7w7YVfzezJEsBxKLmVPxL7pSgHCFkJdtcaWYs1pdgW398",
  "key13": "3suQEduLD4M7n8TNzozKEkhCktpaKnk9FvL8UphNC1tK9YhdtWrmavHRKW72YxwAv7Jdr9mrwVw4Ea1HHbGgySsh",
  "key14": "4jWZAqEiQjTSEQc7vnHAouE4pWXmZQmEf9kPAZNz1EyZu62t9JqBiNxChDYHqSKFKTqLNpvzMHfNo1TXuKsA68wZ",
  "key15": "3FHu8KbrYGuCzwPeWEoZCR5jYxw2jwN9UndxtQUBMrmPEWQ9HAxxb1d6o88W2oTSekufDKRNijWEBugitDEus5n5",
  "key16": "5uvWuQ9y96aFzKod6NXb3ws9qfjuHW7Xwu4s1V4hsY8MJTs5jfNVQyJ538khYVMFdKpxY2uq6z86fFRRGN4rWGsK",
  "key17": "648zCZHShycP13kfjyDr4LJpjMhpGgVBBXUjzH34shjWovRWnXgcivdB9kRGGHoDJHZP1LMzcbVRcsYDquM946wT",
  "key18": "qdDhRDtMC9PGhzJBM9z7ur2ShXX2k7nfyA9pG1X92ES32LJvntFA4E4V48UW8QJJgtn4xmshK3ytFBydx5ALQkz",
  "key19": "cAnEfixVBg4WcJ7jdn3Qfe7b7Rfq4aXMTnb6kYKvDGVYjohobuGjxCThU8q11GmE8qNkLytyGHK9maAy9ovCuZz",
  "key20": "3V9A9WSdH3fu2ozkeXcthC94Dsy3sfLsun3Yr8mVxzN8TsSivo4Xaik1ZMkWNLHmAYmzC34YdSHjeDH1bqr9UUt3",
  "key21": "mPHndmV6UJqSLSnMpDoJZsCTNvTjfY5nkjex3gfT2BxkaZu7btz28yc43sxvNpGdWQcdGGJ3pqFEYoJr4zwii51",
  "key22": "4BzCTPTM7UN3FyS2efKebrGGHHepZx4BDSQU7WrUjpcyPNJXjurGRWR91PqbHyTbPWUqxhFhRTb7zPgLrpPP2ZSa",
  "key23": "2rhRsyKmUG5Ej7iUk7ZQQruJriP9GidfSz4M8tYxJipvGcA1EtwvnKt6WzbNcgAMxBsMMN8Stc9smHobeVLDUNFH",
  "key24": "am1t4KnRm9FFxaVarbPPJtsP3pGbwqeeM7JLqU8fPE33CFktTGHHAsxdRHkXbiXBTYqqkhxsPFAeA8WHoEddHwR",
  "key25": "4zzoPmxnHVDvfHJo4fDf75DAdrdVgqvc7cVRhnA5xwWrfTd8WxtLcKivjrTxB6j9gSeuWnHnBACT4NKGv64goc1m",
  "key26": "4EkXGnwnSdceLyPZJwwE2RUfSpm3LkimEEDuSh4EnRaUpfwtemFZNJixy5tRMMUBrHKTdM8q1ivsQav3HgW7FNtY",
  "key27": "4gWQ1JsGqh1AuySqDTeSjxbeDjSVDjqms9niuAAht4SJPCvfvTZtugGcF6AXjLM913PQYMkBmRyGnEFWWrffCQLZ",
  "key28": "2MRvfK4rWuSPidrRHT4FXVaEkHCghiqGPX2UpLcYA5qgxJVeXYS9q7eyq7bmvwDbJbAZZFi23Dz9PcfgUQBjrD7h",
  "key29": "4Ez2HFz8YBpqj95vj6xKggdSqtrw8sZNkd39osqphu1PLLaFM8cGKzZs4BA5xDwwqQDfpap2n88S5vajrkrLUDtb",
  "key30": "4iku73FJ8UTnrgsxyY1PhZchgNPQvZNF6g62UpeaWoht8Yd86hkKhoPfqLamctG1AvKEAZugZ816zvsSjiC2qsw2",
  "key31": "3ZFmDVLbmFsiDG69suzKazFJVQrCKSs6939thbQq5Cwp4dqXaWGj1a56sQEsCuuUhM3LqQ9rWhrh1VQtySQCc8dU",
  "key32": "4bs2xzvDKmDYVkJmZcToZUnY5CC1RKg5bYks4J6Q4xfyGQAD5rpcZnhjkjop3K9UNF9QeefcgXKtzEUkDoSfjuQD",
  "key33": "5EX8nCbP4YqtFpLD8HHxgaAYSk8uH8HNwFTgDnbQihTC3n5TrbrHuf97F7P82oFaSubooXLvGK88RNnpGXXoYXJ3"
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
