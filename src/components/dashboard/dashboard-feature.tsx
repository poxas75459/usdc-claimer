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
    "2qaQxHSDeKTXmcTuXFTHNLJu7stz6YMBYTuJZsLo9NZ6w5od2d35eunotx3CsQuZXUbNUEUwCKu8XAwKCu1Wuo6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a3N3912dKUD7yxaSQtsW4N9QgxRF3jATksreWQMEjXVNkWv2qNA4q8U3jsEVhrH6vv4wyAWUPaRRwiQEFafM9Lp",
  "key1": "5Bj5rLgYqXmfkUHdSXaXLWWExuVnJkFAkZNRn6h8evp5XTPPFxhQ6juHnjU7wyYst9oqV3jVebC5hjnVTD11qFVk",
  "key2": "4LYWz1x8epHpEGfrGMdEdhqdAhjd7krhBD5QZwMjzeFsnLBnRT7WagqJCEsetW39AHpN5qi4zvPyWAXkpH2YLytQ",
  "key3": "5nnijHtjD8vVroZHS6moAs3bVZSuj9bAN52K1Ng7bF7EfRmQRU5QUb4bsojbk2CQraYibc6FepomRrgPYMK2T6k9",
  "key4": "2ScUaomyq2eKJmHiTB2QDZUPHHwoqPCSyWUHEZnDm7MEBA65C6YdmQ2rdboPNoJSHYNd6RWrsLA2yE5B1gLNimxa",
  "key5": "3rTAjvh5aKU22eFuXP1w8uWCN3Shg1oFxLsi3kG1Qt21QkAe5Ym7USrpxpPmXKr1dTTUoDWRKeb3ncHhm79n7vMz",
  "key6": "4G5JWo8dALDmorZPsnuycLuMuNXSGHuJgkU8jW6AuV6TnmFVHMxpELJiqBzH1gUVxciLPvDtPwKNiP58WGstf7Vj",
  "key7": "2e8KuNpzMz6z1vELKAdxaXFyHgvXNejuGKRdHzV3Ge1V22WhWM6LV4xHunTmXd7BVjfCMhpAPkpAmDygGZ4YR7ED",
  "key8": "58SPqZCdN7DmkoKkudcbp4WPH8HNXZkYZWbyo8Ez82zs6WgR6d7o9QYGLpT2ZRUv8JPUJ2ZBm3GYaLSPQ7EvUpyT",
  "key9": "4m1hwxH3x82rcC96J7eD6sRryL95tEYGdURUJkKyoxSrpGsLrDnsuXzP2CczKDpj6M4edGSM87MGV9SjFhPGjrT3",
  "key10": "3ddGx4CjsCyxbZyMnWu6xU6QWdd6m6yX1FEZytVCRBU8aZarp5K2sPEMbXKCPmt24VWfMTpHBAQPTQaEWw1v8DMY",
  "key11": "67ik5nxBv1sXvR1vX9LfugTLdVY6xmpTt81PDJ5i6sACKyjv3go9gdSv17fG86neM6aeMqRyj4VsfrJSSc5R3R6q",
  "key12": "Tm8Gi21amMoZSqScdoX89Y2uW8oURbmYDzRT58yC1JJeZP6oFNd9muSPZwbtLrw2Fhjrn64YmC5u8GpQidB9X5Q",
  "key13": "2KJP4m2Dk959UQ3oAZMdH8Ls2sRbRZzFmVhktkkH743KdZ1yYgPUxcdNMvnnoY4UghKwXRRuycqeGoCZNNdyigsm",
  "key14": "374EGbzGqwfrYga6nxjKHVgTvKeVphp4bzUd1dj6o7e3FEuoUEcaQpfWGPYRNSdKJPCaohTwvAy9uVzs9nf8i4kA",
  "key15": "43TecFrzDBnE2poCiRcCPnpDz5fmt327ax35wjYSFU8EMcL9wduZpGcgufJyQmkFCpy2VnkcNUnwgveMG9sEfVcf",
  "key16": "4xNx7mXn9fkWzHU57QYRyKH38CcfdTmRvJcm9Hs2DsyjencTPA5mX8TvtqXNst2wwQQ6vhn3s3y8AwyDJmunRZDF",
  "key17": "61hVuhkRGF794M3Wkudr8jNtnL7h4e6otpPRFxETzytcFU28q7RQyoWe16aAPiXZ25CqGfGQv9iJBkhaKvjw6zZv",
  "key18": "5LqQd3m4Hoy4QCpssFb7qQFZM6B5NJAgAiqsvDjHstHAjZGZ1go96PKUAN9adi6zGsTTxw7ArsE25GCHsg7P6FH6",
  "key19": "4fQxdn9R9LHnCgxbica4nEzNbH8BwvD3aa2mnJCRJocwy4EfMBjHTVKC9o679akQb9rmbJ5cGJeuR3s8kzLPw8sC",
  "key20": "2Sze4XKxBA9UBT7cAU6SwL7MGF9EjUEWsmva9fzSfmhu6EKqxFZSitKeVwYpx5S6R1QGqngiGWmqrcarZRCbgfM1",
  "key21": "2jxTsjdvGSYg9RoY3fQ5v925WjDwRyFpNEgxhUzTnGMHtKuyFzZJvLyBKfKiHGPD9rtnEywhpbBGudoWMDqvUJgE",
  "key22": "5CBeKSadWLWPA6HgQEAvRzcyouR2gi7dGMF8XcU2BGpZHV4yeNyULsHcsfJYbd5KwpGpUuiv98E3SNFBJJHPKpXm",
  "key23": "qMNsBRidjF4tcPVxmHCu5F5GzptRje5d8kqThqDABBAKx97fwxC39Sv2e5JgK12PiZ9L1N77QHJdHMTQC8mWXLb",
  "key24": "6trraexX86LjMdJNiUYSW97vLL2JzaSA5Xo2aJi9BAScptazr94NqV3wC9Lrboy2b7mYmXqV1maqnmQVfqMkkBi",
  "key25": "2q541uK49j9i5Qxdjnb1Mke7gRaWsFwvF4tZyRNmG58ncgRow5rT4csaqxgCZDaS5iAF3oyaiMDtscaynKCvKfkX",
  "key26": "3wEBckyzC9yKMBXV5w1AHHh786Arr8cqzVudaG1URZW3AAgnaKVfREmm49mtegvdoLYLwCuvnVXYNrox1DxF5v8s",
  "key27": "9A96od9hNhwi2Yzt5UywevMg43Zf4EF2Mj5NdJR9yaD4mnmSUb2cxMMWrYE4EQHLiY4Rz2NRKppfEe22oz9frBj",
  "key28": "1fwxbb7LoafNwA1Two8L5WZxcakmMLw15UscCEqVRxGYavgQbDPRoAS2jEtk9VcRKsPPraDDXGVDfd17UoXceDH",
  "key29": "3iRgRJQYqSobLcSeL4wX32K4jDbHDH5Pu39gSHPbfZpNCdkFpgF4bcQnL7awTGJq7pe3EaT73cuL44DbUNSEePsN",
  "key30": "KivUntStAERvd45xK5RRw5P9gewogXZJcoK7Sou8teAEooxfEwgcXNC25k9ymmPWAgm1P8ciHBopPYsKQovoNR8",
  "key31": "5NdBLJSa72SoBSMLshsfDBs17QSksYicRcPNMPuN9pSzodysqPGnpnjVMa2M4hNHzrPc1RrxaZRRJzadsTguS68g",
  "key32": "3rg265q8aKuVBxyH2NpSDSHEivyAniRGJSN5KX86PeTma1ttv21wUmCddoKwYGDE12NNs5KUpaUdoTF3ZM5y7CNZ",
  "key33": "SBgk5m14MW9LWkLF8F6mhfxCjpuEsdqJQp3qTKqM1UmcqXyoV74DwSKJ4JDZgL1qMPLNDEkNzmSy66ijbdrvFh5",
  "key34": "5gTptQb9h7GtHwFZp3MRWN92QmzLu87TmoUkG2rp7YH1WWTushq6yzasRbu63rtFtM7T4gdfAmE2tDLyUMsRiJqw",
  "key35": "2VMZCZMRv7naDcWB146oMbCDE3dTkySGMk7qBwbCvzeNwu5sdVKYRwJbUCqtMSwutd2jg3HcQFq3EhtcjV24YZUf"
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
