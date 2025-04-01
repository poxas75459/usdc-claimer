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
    "4zjpyVaPasAwHzZLdodKNxEs8XSscihW4RScHVueXXuYcbCdaXUNduRXgsndqaY4LEVyGrc5uHR4yJ5wyHz1Abtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dba5r8Dq81NFFWLcdRRXMqUEhZubJVUZAoyF1NpM9sDw2q5PGKz2Jf8JiHybfrmw7xhaES9Bhiz4PJ4DjAYz25y",
  "key1": "4kkPZuvzpCkg77rmYWnf28xtBKTcjrZbQuVUiiUEmbK69wE71KTdCFh3TTgJ341AphgeYDnTZLkhBor2yLBYruKQ",
  "key2": "4qDAhiChtdAKQ2drKfzfrwxSh3NkBvvP64PatzhaiSeYYuS7ZjkXe5p7hoTpQjHAb6Ubt3NbJbvxP37xzziKuM1W",
  "key3": "4kRDTYEyZZnfhXGT7dfwkv29u9zyCeuwvKcyj2eFfMFqwKoQ4ZyUiZPXn1Rnt7Hwbj7wtTohuyHD4aSCCArs2kHF",
  "key4": "2ojkXc4n4jVTwQVB399dZErMg7smUVrZ33NEoVyrEsmFcvdRMpJqco9qh6M8NRv3MkEsXxXhJ8duZH8MqQASvqW8",
  "key5": "4ypQjagqdRbTffKYM8eSh4WgSaqdCfKJChZTxsTpTu3i4c4NSqddViqTX2doYnnkYYvcwkxtcikMTmqizMq4Cmiu",
  "key6": "eWktksNAT1Ji618pmeadQyGKQ8DwVhGFcxWXZ2p9BABQptXfb4kyYHPjtdLwUgrfrVxM9mrorGAU3qTWi9n6XDM",
  "key7": "5XQuiLENRY53eTVpCzichqipniYt52wctKmNfaQQSud2cQMMnVMF5satMuKsfD2ZNYXprhyQAsgTNr4wmdZgisxr",
  "key8": "3FvbsRBWsoA6BLF3XN7ttoFYAFiULG8wQybFQpZLT1Ao7Mh4Yry9CYK8h1w5SqXxGFeAfJupLdb5RUkiJLvnjTYN",
  "key9": "4MvWj6vHrrQf1iYHiaCBddjk5CB2mFRmY8BCXZg2ctqnkzqeR5arR2fLcVfVGS48y29gxk7Uf8WRpJdyjJ7q8t1L",
  "key10": "4vYJhyB6cs5F4DeSFQV1Z2HtbrACS75fLibdj2F78d8yBut4LZDW3fCuJ4jbStqf33AVh674ReiCwUXQq8DsdPpM",
  "key11": "3rZGvFcLX2U3bnnKCT5XwbvA9PsgZL2jK2tYCXbFogQQfffSvhVqHb5PWo1yRGcJbMjmQHRrJEW2u2m8fY58Dg8z",
  "key12": "2evLyKBAGoMk165LQC4twLzH18EuxjZ1zrfUHp4QhKmoBh95U4WQFzcPpWGmcAEGwNeF5gmhDD5Pu2NftF6ZucPm",
  "key13": "3i1jvcdV9CNxoN1D9R8WNhWHpeNyJxYPBzRP7JdiCwGPc68P9ULvHmDgZdJtY549tG3bTrSHB8oraUvx55A62q41",
  "key14": "4MDuBq8hWYoNFpeb2j3gGy3YrxLbx6swdWvnFuKzpepFJH2ykHFKTGz9h3aKMva7LZGPxs8ymTdH3GtFqf3jf7RQ",
  "key15": "4G8ALpmgzHbojGsk96bsd1HNCq49UfA3xq6ZofAgRx6iedkqENRn5c5YDGD5cAAZckQf6y2E2gs2hdUCdtJdQb3e",
  "key16": "3NyNtdc7S2kT6568ANXiWEfz3UvdjvoCm8Yhj8uZsRipWncnChe39drtnTWxdB8nRf8evbBariE2X3dowkKAkA9B",
  "key17": "3y2US5cXtmniEt4i5r627jrp7R16ivkWXiSsJETjT7PHDWNf4Ck1u3TjVYx1dCEDwdC6ZMWRtngpE8fGXwuAKryB",
  "key18": "3EZPZMT7Kp5htGmZeMYYY8orihsAgQDp4Z46JbKq9QkZuTtxUy7P3Za9NsUECCUvYFngLXferAiHK3uWgwaaii53",
  "key19": "675r8cGLvxWJVH5eRX1HUnkmPLm9nh9jYgdAQVainWdKr8TjJRUVhY4rYbitiyp6fugQCH5Z5GzWfo7ZTHJnrwK6",
  "key20": "u7Jhp4b9K8t6UcTs3VWthqGy3MzjaY4gXHriZoCfRnjB1LtRUF2fgu1cce1XcRCbG3vPMyrKmBCEy6QPxHVVhUo",
  "key21": "3TcpfyvAQBHBsfB9BEdQg7oHpKcj8KAhqFpsNywkiNcyFLAjT12g9W4SD4h22TeG5r8McxpcxwhVx3VY37c88d2c",
  "key22": "37JQezgvMGKDEbnrpuH8xMro3QUboeJtxeYdFvooZz4yQ2bXTRZBWmDEbuULyKodyMoQGkJgSmmeqfBezueefyDn",
  "key23": "4pmkC9mwHGkjxXgtKMMWRPytZh42ZyXkZxv1TdVqKE2eSyhdudYHN7FKQyPafCNeeztFxAPsj73bo4cdb7JNzRMx",
  "key24": "5dpfmbLEZRkgbjbayeKLemdcPxjawZz2NR3H4xFJvvw6Qcn5UJxe5WdKxfWvW2SaTqm62h5Uta46yC3iN3VWUkqu",
  "key25": "4vw5Egpwyqk8EtxqueY3aVdZE4VvCN6xYFcajM3iBWX71AADEMKL7eD4oxchbdpdR986rVwBBVKx54DFrLR19214",
  "key26": "65XkuiajqxbVPBQk1drQERETQdvNz2Q8T6XjZC9oKbUoMaHiaUKeUFRZxrowMJYbiSzT2FgAotor4y1VtAs2wHJ",
  "key27": "4hEFsAdx6rQdJqeZE8RECE6yUpWDHSGfWK2owN2FyiF7y5aBjvcdGx5ZSjyHC7n9r1pVUPZ22318oWbsMyLrPJve",
  "key28": "oZh4dvxgoRSB2G1iqJempEX8ccAv5LaDXbzFpdJQc9YscCoCqJaYZb65V1WEo185Cn99Bpow3joAhRmL7XWYs9q",
  "key29": "2LLAwdu8d1QGwVn22kpCJtpu3X4ULuKgisXcbfMDpQ5mZtBgC61mXNLbWWuWcenXART94GRo2HSEhAPiEafvMRXW",
  "key30": "4e4mEpM182R19G2Ar4SBCAfB8TZ9BsMwL7ubtMueABo2ccfiyMRWCwVLDdv771B5NHLi5F8VVLcL8RaBV39NowUK",
  "key31": "4cfJsAq3zpfNnknqJohh3AyBVQfSvoTzuwKqTk41SRxPKPV62tTwrJDqikRaX7nzXHzGBvrpzHJyAjJeNo4Ju9aV",
  "key32": "3Wxgqoqqn6twXq8PSXR62xiXoUu693C5N7PM4xZQdfPajbSE9ScBpgcma7awfiKLwXy6X19Sp7M3ZxxnuhEyk3kX",
  "key33": "p3VgRzyZvLBgsgM7tQGtxwwmtiaotSLDyZe3QLz3b7ddvFhge1n73nEEPdmhzzwJapr2bGcsVfTkSc6CCoDqdvC",
  "key34": "3fCPcRvmgdo2wT8bHhMTiRJ7cZkQnTr32V9qF5LXE3Gpk2y3kUXXbbyxQr2ZYBnpD1wawhy4564TMttcQBszaGxW",
  "key35": "2GMwgQ1oL2N3KemtXPaoP82cZ8tyxuqPzT49mqBeHPY8QHbGYhSJVKFTE1hCfFk9pE7xvTz1pK4DK97X1B6ZSrEg",
  "key36": "5J6mrYXpsGCW2hAZwGtRAv4RTNvJLZhxc1WhKyWgi2K84DYXvDg2sWXaPcrPfJwQne6GjcksTh6NQSw7LjXjDwCb",
  "key37": "2yg6bnQGaqGv6K3jvkwJBXbRucgFDuMwjhWX9eEyNiYYVMPLGafiRXTXoB7LxT5kRJoNE2yDgTMb4sxvPCSVzb88",
  "key38": "niKrZPruNtX9Ps9zU4Q8MePCWHBzzNwT5kLN5w7g8qpXqGoGFgSHuoDUdx6D1c732J6qszsAM8vVCaUz9oFgPLz",
  "key39": "5YLXSHwD2vhxt2Dko3TphwEXxXhnPH2sLD41ata2bjXm3MCm3yhZ7ebnhavLZeTGsdeWQaNfSyULcdAkr1pwjXG9",
  "key40": "3esjg9ZDfYytSjZo2rsn2MWfLawiPne7tAUHeRUYB2JQXAgQ3UeQ5LCVb9vJirukc9p2nt8oqkS5C17dNkeUeMAG",
  "key41": "31JTCG2UUhjuroEWNQsNXKmkKABLs8awfuHcTLNq1pbUUGbcgUGN5Xsah6iFDpApjt2viE1c1648ARrNTAS4QxEA",
  "key42": "3dYzjk6t1FWaW17EQVuJJ9UsWr6N3iH16rExTHewLfeTyC4wr5znA9sUcE1hj7rsiPDtUeHyQZMfvuXhNrh2Xjem",
  "key43": "2FXtp7J84MjRwSiQ21ccvnn5fFRXGD8MYuvSV9J3onQ3imZ7njZL1uRZpe3jwtUWuv5KGQKsGpNnoWFAtCkBxXLo",
  "key44": "55pnjNwkHtSQG1GZjNZr7PePifjJ4seCCTUuQwKYi5mmWw1kN7chGaTQFhQw6JLDPKGfDjbVFYscfgCRPLTzRfx3",
  "key45": "5qiETFchRHxKvPrbiUJEE73wivCwGtKh8KEoARQoDvMC5FsrXrfsQfknjP4un7hqYqDYrADCwEtUsgYkoNmb5td5",
  "key46": "4eK3H3mh7uDS3Ezv9d3EHta87D1RgJrpYYJnXXg9QBy1ZjpLs8kgfrJ5tL2pN9dFC5MSyDb21jrsXKFF5hhee6Uz",
  "key47": "2Qi3CwzJpgx1qnUdgcfDRc9fbnfzQ9wxVXDF9373NXvZeoWkYzW2Y16YULYSpdp1wCXV1x65XW2LfHWxFqDmJwdA",
  "key48": "62jbxnWUoJ7sAx9qr49zt9L9oM1nd7hPuY7WMsUkp4jj64wrBUAaok3DpA8vWgG3k7KWNMjkEnxnFWHa5Tbr3Vns"
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
