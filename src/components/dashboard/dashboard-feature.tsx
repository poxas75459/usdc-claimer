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
    "4eMBsoWUBkwMayJZ5WXruhygCD9mL1mSefN3D6758kYqazSjuqs1B28TSVjQ45P3arU6ojLMCQn22YemkP9LtpMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sEVuLVJjNwxb37s4Ekjhjet9yMuCkpUFyaVnRuSSVEhyjGKwokkp46nbJ5dHwTgzRSi1gQdXSy6ibB4hGcGQK4F",
  "key1": "2zbrhPGDZmr4bwEuFJKj6FTveGFTZ68s4ABPRCR1fYjpjYPXM177YFsAf1fmXjW2MCFc2p3U2LPzBnLyv6j5gmWR",
  "key2": "64wAFZezPmc8cPDG8tPMKvVTKgwDxz2wZDKwFeWeB5mEEf3NzqWPjCVDBbbtT18J86Y8Qm21dThy7AyCMqSkgwGT",
  "key3": "36fdeMdxvm4wH4ZajKWLe3SF2AErqbxj4yM2QeLm58SjE46Vmm4MHo31M1jVcMZVogyR2HD3od4S98pX27dVw4Rs",
  "key4": "Sb55xJWUpskKRgsNv9Gm9Xq188ZC1HqfNtLvbgu1icLBMAaqSmqEtELZgTu4QrG6ZUomTAf8GazTHAPpA1JsafS",
  "key5": "2CK3MyKCtQjGHqytksJCNukab4eTnnSqmbKVSpiHe3euZnfnvZ96eEEJ4oZRo3AHvvf6F9r8319Xeija1vtzorpJ",
  "key6": "TPk26ap8ysgHSkLnYcfnNmmWGWNmSvxXT6eTDSBedTTjVzuBQhKvwWY4YK5ARbzK3v5KaUGq8DMxpsWAqbwCjE2",
  "key7": "cqzpVFqvksbYwXyjk8xwVsmEH7AypF9zz7Qnmyj31tt9TjLad5kdWRoqL93nura7HgGXc9HepDRSwVHqWeCbm2v",
  "key8": "3BuNv6bymXb1xc3tvWDKQhWRGegT2GdaMPjhAxvBUkvvZ8Rat5ap52Pdmd6mBCP1SS3icR25dfyFLd2u1rvvvLAF",
  "key9": "4oSV7c8ELmgWuFbMcZKUeN3PfFSWET5AYLNSpKfGW6NpRamjbhYdjfTyXRo6trJqG6U2uJY6tcWaeSLbMBvJUCHW",
  "key10": "3TyHqJYz6LRsmWFNXBKYVyUHFVp1SCyR7MYtCYYePaNa8C8v77JLg99HRRrk3k2riENcQVT6ca7XwtWXgsfFQLsG",
  "key11": "dZ2YbygKAJz5QL5c7gD52ZMLN6NsyGFAR1MNhneipKwhLKATVLy4mcfU5foBvTg7fsrFNHARPyXvzEg7AWXkf6Q",
  "key12": "3P49CjXp38Ys3vxV7v7d5FynCpKGjnpJcZt6SfyHkJ78A9hV9ovJdn5ZKAhDVNca4gkwjyHdSCZrC5dS5rwJZbv8",
  "key13": "5LDADR87sWo3RRtY53B8DV7jG6g3SzmWLvgHd4VArz6KVuaqHjbJRu72HiZTnppTraLsPndbtnTCLyoLoB3sSn8H",
  "key14": "3kXGdSH1FPB12nS65yMyTKEMcwADmHpzanS3LA6erQvtcu5LUp4JA9BcQhBhTXHrVZ2rnarZLUYSF3vqkQSQEjQC",
  "key15": "4xzJky19qRtF8jAPWJQ3EEcMHoiZBUiLfJRPg688b2VAf5e2rknd6RA32HeKWv1i78kYMyQE5AF2CBqgKpXeiSC8",
  "key16": "5SKaXKXHLVdfJqZjfuZtH5nwCVKqTcHKk4ixaUomg7roxyVNb5MVL418wRDc4ii8Mk6ex2bPpc381ChRRysMGjf3",
  "key17": "2piGLC1XmJowk17AL4ovRyN3GCFD4KS6kDmmtiVSFhGmrgpiHnjP32fkxfNahHFYVHBCxNfgrQvqJiyWu86uWmoJ",
  "key18": "4zjAFLPsbaPzRmRNT3Dwo2jQ4Ddsa5mq4YJYitd3N4VrW2BrtMgVpRhp9mBkFVfEUbmQcmwRz5nEgh3bxBKAEK4M",
  "key19": "EcSbjHM2gjC4M3pcw9hi54mbaRj8pmyUEDTYHswAPDYJaZmPCpzxsSwsKcJ1vzTxMGqVFRdHJb4DP8bzGY1ZojJ",
  "key20": "3JUaByLW17vqd1CeBi9T2FPPuifiR2vMoEV8y6yHueYg23WtRKy4nXaSj2VGWGiKvsyk3rsrXTqQ3PDzbYneYZon",
  "key21": "2E5hryA3qWP2fT1bL44JDFJsERjUmnRcYMCFqRN1yGkDy4JzjSPwPXr72k2PUVXEQwifgJtaikJVUMC7YQkNJEFe",
  "key22": "4emCJkQBgZjZKh84HGLv9szrrrbKCfkdKxMpRtw1kDTdSbgLxMt45t1MVFPwUVmycqPB9aqCvGdD8oCH8uqNkaVW",
  "key23": "XrKfPi5s3aDhgKNbnpWgeajNYn71UzKBnSR6FxjC2VaYXTK1iH6vQThwvKBBHADzp7RJr9Are3HoWAccFUdJUfr",
  "key24": "47kX7oqKcBzBXbJVB2php3bxLqscph8wU5MpHpYFSdpUUL4SCtQaGtHv2xGbAtJbEVruRm78Ey2khChBjHpcXTkh",
  "key25": "5NGT8s4bFcTJ3fcERZYZTHUKuoEcepZkFj4QoSPJSwLqgXMZbtXdvtcynVQim4akZjHTXy47bsRVVCyQM636jmHF",
  "key26": "4rprjfxnKM2oc1y6C8AAajd26DwbJm7PNkqzCNrz85fJgJPcibEQSFrRPwwXeUpuyw9b8WitFKXLWHCFtzwdDFY5",
  "key27": "JF1ZxizZzKsW88ifhTV1k9sLrTG85SGUFNwrEWUQ6T9cnwibF2amX3732RBTvJuxJ1pwrznFp53YyhvgzKUKNc8",
  "key28": "3DKY4oz6GSE3f8HuJxhYZkgXq1MsfayeejHys1EHK3wvvrxcL5Ybw8y8RuTEFSPkYQSwtk7zK8zGdv26pCEUbjkw",
  "key29": "2HRAj6nbtTAyakMrC4QHSkZB9rLi8PX9hXKkTyGQngiwC3jCUDhQ8Tdzvv4H5gSEVXjcHCp8AG9hZCGYb929fyzJ",
  "key30": "4HwWy7W3edfazawvJT9bPUZRAqJVh9HWKgXkWyT3bXkieDaHYQGcPsQPQu1oQ1Kkf5xMPeJeSgyXm6Fsx748FXWC",
  "key31": "5HRbNVY4jLB4Ekip4ru3rnd4T67ew3GiE75toTxw4zNUWWd2DdXmpdhBcg3YT8GUeuxmKoqyRT29ExaFk2BL5xd",
  "key32": "2fVoTyLfkV6vzkY2mTuk5KamEKMeH1Z87LneywFGgabYcWEivN8qUXDce7RR8sExqHZdsp5j1LZDieuZzYUPoW7L",
  "key33": "51q5cZ2gJv8mMbbyE5f6jb7LEJXLCE2Js1QtsdVBucGqYWbtcD1nfDp3o2rS1frkieYDAtD5gV4Jx9XX2yvPaiNR",
  "key34": "jdMmQszm3W9zYTwFuT9yGhngEJuTb8DXNB4ErcMANKT1KZNhqnh6DZt3ciQE16KAgNgjBbRY21Uv6zgmMKRE1vp",
  "key35": "2D91hqVbGByuUD5E6F3E3zMvDSWgWxYQNvvLunkbyCd17UDj9pKYQuvBinpXTXYLxCRwKsycksqLKmXCA5HuDSSK",
  "key36": "3NQofducCo1Qot4EsMv783VWqqamGhoaGFr9nZzG3kRnF61WDS773hdxqaEcMo7gWv8BSxEYeaCfBzGBQAJ2J4UA",
  "key37": "2vJiwvUEQ5GT7RaXqMWp471tixieKN5rq8Q7a5NLCAmMBAto9Rcuy114wZgr6Yd1pzMFLWp2qvUpQZzcnN5Tk3Ev",
  "key38": "ML1THkEDBKCXbXqBxkpguKK2pYLan7gA8uTHc26G18GB6wNMs61faqEuevSzFmUWz664V7cSVxPCFqGGkh4MQQn",
  "key39": "JmdireG7iuRWLzi12kCTfoQtqT314DUVj2Lio59XJG5ckmg5WzbBd29quMewZZVFtueFTMgj4vnZrBsGz7nLX7o",
  "key40": "mNPFXWN1QUh9jZg5cJdjAgHBcydMYvQHz3rwNB3xoVA7vLKCxKYioWfvJrSKYWhCC3MNXqXon57UR7MGPcZS4U2",
  "key41": "roRoDoHKf1CJVaB5LpWA4UiRPt1cdt4YyF7Gvpp2XMwb9X2MVnrRrgjWJT6TkJgS3g6HKNTu4BaaHz9MHHXkDnK",
  "key42": "2LMWEWprqKXrrWMy3gfzqg1Bzwu49dDgK6zutUCC4pMHN1XQAo9aTSuWcDxTiSQEWbVVKymp2q4g7GKWSUK5GLJf",
  "key43": "2hKQ5L4a6wB8LZoimsTdrVkvd8nxSodKQ7JaJsNvDApxdE8AJmLBq4PxgY41ArScEAMy5S5Y2vLZXeaMPM8tsBTA",
  "key44": "27scDxgS4hYoQoGyvcBXYhyFtMgzPQQGyNPMwoAdpMNUJWQratqrmU7RpxFJnugFDegrC5vrSdA5FKKFwanYquBK"
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
