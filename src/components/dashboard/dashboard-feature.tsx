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
    "3i77NKGsDwUKxSk9dX2QmAHu3MeoWWA4Ld3ddwqtCAAXE4XqbH9pMjWEkKDxZV8DERwqcn3q1Dn5T9BkFusuHKuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G28EdD9wSPQ1Vd3WDDMGLUhHo3zuehRk1snwTN4RJP2wv7EkYorVYgFLuQvx4iFwpZdrc7T13nRPG6Yyfy6h2uq",
  "key1": "uVAfGKBe5Dm89GtXrtv3VeJpMLXmBuHdfSoMmNsjLST8onUDN3VUffqWdqS83nqmozbgj72AsAEHuTztwq2BEAN",
  "key2": "5ah1S7CNkYwB7pB4seKV9npvU8ePzvF26vQZ8jGyRnBhs1BRiTYeaqUKi3xbCYSyC4Y2Ur8ng7fVGyFbPPZ6bKrs",
  "key3": "44RnUHWxfEsi7BZRV4TYZjhFoX8Fvut1LD1CRmfaMUtskHTQyqmJtp5EMxKZ5tdbEvtJRik9pRfnQguYokYzWkkc",
  "key4": "4pgRAGQGEz9LTyL34mHAtfHf25ETzrC8bXaVxJKBPTZ9EMSdHN9BtV3QMt6gyFrHfXMFFsYyKaBWg3MVnbmEAaeJ",
  "key5": "5Cq1VY3mWW4tMkXK8RgNjH9SFfDGHwLakaw4XbewdmkrR56nNhTRLnHmaaEtC4mEGkbHkt9xfLL4GxDhnYjsF4i8",
  "key6": "23rHmSyhrL1VzW7As2n1fuZNUfPVfs2D1jc3x7r3K63N5HMKQtw7dRnKoCUevixa4AygvKv8qmiPTLgE2Gpxxh3i",
  "key7": "jmd8KwQ9niYYrXndego6BXvWETmWurddXjgs2PbEyWinAtcsWEgaMULkwAWRRKuhQ2P9p7L2xyXPo4W2Scd9zjX",
  "key8": "3SUcUR7rhTJML7HQAe8k9rm5GtZugJynZRo6zXDsa7DAjkDvyosRcB8MGBz9A6rosutSbQtRuS4PZrKRUF3S4ZAS",
  "key9": "4MB3SjHipcKtRSoZfFEjQgzbcurLKuGs3kbqc8f7KAAHB7bXbuzUskYQi7PxJBjDSgEiJsLTHRqeRSSRBn6DVeUT",
  "key10": "2g6jL2UCAVJp8MaH4XCgnJN1jRgmGb9vwJVmWM8R1tY9zL17wKENErSxDk8QyrtwjTUcdKAWySMQVZwkHgEdvBfP",
  "key11": "d5T6igGDd816zSFbYF8u3dKCe5zJBdww5CNeGQKfZQTUR2sTKhRPJ9AFuJnN7N2P8vhEtzx8UCmvziLDkhvy3AV",
  "key12": "9C3uEWLtJT7d18vZs9JL9YoDTFYM8T8eyLiFs3zujJZDV8QAEKfTFprzHj9swYPud6jb8Qu7oTJf6zTpUMmFsdg",
  "key13": "32gtZMLc3D6ZQsLXkVer1ZwHgaMaxjvXVt4cBauHKW8pjg94U1hQoHbemSiT3oxExSLvYhEWtA3TLNFkobYb7F73",
  "key14": "3dxVdiv4eE8PoNprVj3xtwp7bwGy6WhSiJEb8KZ3rRq1PifvQWodgaH7H7iaDAg3zGNUz7imJ5i91bSQzYSwAbSJ",
  "key15": "R4AipqBhrX4T8yUbpM4fMGxun1MpR3DvB6oABTP4b7B5boDxVyQSTfRfJyJJ3efo3mz5LxsdxNVWtyybgME3SUo",
  "key16": "4GG6TV9Fs13c3Hrc5mKGSdM6pqTh4GgD8H7q9kvknM8AGg7w9KAhBb8J81UXBe9RiKhKLWQSdUj441b52dCxT38e",
  "key17": "64LUAKztC1gvvyLgYyRyHEC7fGPqVA6RgsStYk3Hi8cPNkn9mz44h8iarGZdQjBu6KxcPbrVzkUsqNyTmBuGCsiJ",
  "key18": "HDgpAvozM5tySarGFXsDe2zqE6f22FCLbiMz2kzKCAj5JpZrQ9ipofeNHxbNnHFyAnrVNnDPRiwyurdaiMTg8cA",
  "key19": "4r7DRfquE97U3AaeUkroMK5XJJ2gmqThu8joHPUGRGaQqNSTQ9odMbsfBP5q6QcH7ArBWgzPHLZMiPUkW8LFrXd2",
  "key20": "3Dr8p7Ju6o97GAHiMEAuGVB5cnWeGzdGBwVshaJqBnwGJ74r1eHfCQjQFzrsU53Jz5nfN4xZuoQztCvvBc6KeC7L",
  "key21": "21GcuapRZFB9bzv2PoGkvngytRSR8xqzDn5RWyHPQngM3c5GhqWxgZCRWGVCFB8JoBHY4c9ddJUBo7AobyYoU7nh",
  "key22": "4jU4Dj63kZizzf45ggx8p9NbkvRPeKX8v6oVCzEYxHSXMyQgGMChU1RdbvegBwWEZAVUWamqoCLFjijS8wU47NUG",
  "key23": "5sG1iCASTEnTSfmrmiiyNfBwc94TCzq72pF3BWWGiXHyRNtF7ihDiTj8HwiUWByb25LHGKkwZb3xUs1ALzA47DhQ",
  "key24": "57652LKHJt7U8hq3C4A6Pio3zmNSn7q8N99BKV15ECRdSqwtqz62KtSnTsGmJCmTFoRxAnH4HAqEC1VN7TkWDo8x",
  "key25": "5oiixdodAL8DieMYUrMyA1MHQaco7pxfZkzfhxx7soyAwNaKT6brGmrSs3BdZ2ERcJiSEEwhRBKvkLKEagPRbJkF",
  "key26": "utiGz2D3zsNsTqjs8NoKr9iAYHT44i58Mn1ZARsoNtBLWRGx3FqQLUha48ZJx96xH9oFniKkC7HX5UNAMpR4UfC",
  "key27": "24hh3qYCfDf8MFM2MkaKrhsRY4PBK8vpdZ5KfNw6Sn2aGdu3AGtT95U7dajLg72qf6UsHaoAjbj2TsK8bNGJrgNS",
  "key28": "2F6KQfjdH3MusmVBwMuhQn7En9PeYoiEuyxFT8usBETABqM81jtd4NghhAkXppzKDWAiB4KXJyxKpCQB2FuadJnm",
  "key29": "Jj9MDCCG2sUzayTQGSzciJwG3uYTmSzgDuTkJQvfMmZx5j6rdLXjzqQ7hBc2ngRtwSNFF2ZVodxd6FQnf4A4dbP",
  "key30": "tLfVVB7k79Gv3RHVqZe9GwWzAGVkcKS5eWF6z5sPWpgqe1BHCSaMn7mFb3tjFm6tURwDC5sGtXzbxGUcts9udQu",
  "key31": "7o5ceby2LERGV6unmyqsBaiptPVYR8bLpyLX1QFQoWAsweM7Ngb9CeZiK8eAF5f8feBf3gsYYUTmsdHKqM7Df5B",
  "key32": "ewxZ5cj2FnyNr4jRERmRDk127NhJar6DyEKxmLjdWSnctq1WD2i5e9KactZiwLVGQPvH2L96fA9bSm5kzNPyMD6",
  "key33": "2J4sga1Xf8W5ZZTrmdd2Xrn3tpZLh8zKmqR8Zge8QzXdazPbG5uP1oFPsYA1c8zJGuMVJ9f1k4BJaZeV3Ai5inYV",
  "key34": "2HX398wb5jtKf6asL6Ar2Rcpafpp3yNay7UGsorfHfMCzxyGTrr9jBdChnxpQb9ptHPHDjnwgc4LW2AY9nQNPk4v",
  "key35": "cKpKZ81q8J9QGHFK5otDhAFeGE8tjwdgZ8CDheP9MeA9zQPALBxPdnY8vWncUsrj7agT7FBRnru13CgeUuTBjeP",
  "key36": "2TcskziTdd8GzfSexcWvKEcP4Yp9MVDJ2j3aC6ncXTP9SAHaFhxx43NwYPVi1f2QwsEctRgZKC5mjm3PKjrLEuto",
  "key37": "3uz9Rdcwz3VkWL8gg8BqQQMV3NdX547BsthaZCcj8q9DDAN1p34efsa4v2uWEm7SYVVM2YCJpga63UW7oNrjFctw",
  "key38": "5uuHStg51KxArY8zug5ksjibS4HMwXCkyjchHkB9H4bAHzSX1RxJoCvdJ8Wk5p3JyX1VwHiibB4XjHdHSpKvAdbJ",
  "key39": "32WUoTJUtE6ZZSTc6zW8Cb2xcQ5RoSSwg6TCJT2BmzfwapSx8ujQKQHHwqJ3XgFjiY9agK9BSVL7z9S5a4me86MB",
  "key40": "nd657Dn67HUTue32MiwQGcnP2xtKp4kmh6y67yRZ1imuAF7TLCJgZuudVrdBvydWi6aSYqBykbkFKmWHVkbTyaa"
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
