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
    "3RzoJQYsW8eo7BCVpgciGsnEQqmjtz3BjCNuTVo3BtK1KPW98RHCt4LyCbEFoTx5nxu7kofx9iV2rDeqBWExq4ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nZ2EYSAg96HbSWyqRjkMRjZSznqSGWqDxH5KesVviNV9w8B8uTa6eyUPzGVXybGypgh1Jh96AgouPwNhMoNkRWi",
  "key1": "22xiRwP2fSfKu4JjRvNLEaCk7jgkFpozqN5LHMGucv7qYhC9rYd38NMMMsBBtiuby93H3ALa8mG1rnzQXFXqxmwU",
  "key2": "251YARsM4v2fMLRo986sY6Tqyis3h34fGczo3p27XcrxtDL9KQdZ1sgB5KmbWDKYphGF7WsUDXpmLnc6btqhqxmH",
  "key3": "4jmYwdoux6HqjsGS5rnQbRNoNANRjDUWvenj44ZYTxUibVPrgUYzntsAHs3RjnD7hWgRKCyiGxpXhy4xxDb8WhcP",
  "key4": "2kkD7UcTYYgro7h6KMh5Dk4mWUfD9g5ZowJJFaqZvWRvQX7tyFbbzH3HF6zkQkm7tJJNdPzt5zKb6gZUEqm5PXGe",
  "key5": "ipY2WnQdohaJM6b31z5fdVUXpT8eGp99aG9rEvyHaRbcR4KBifWk8YW6k8Tn8UzSJNY13JqcHbcB5CShzSK8fgX",
  "key6": "5kFTBEU2d1duzvBz7zpQikJabu8DTpoewrJbesqciRHpz8KCzyQASgQbx9vnSKDP78BW2dxEzu77DvPHv1JdzrVe",
  "key7": "5vX7ajtviEKb65FXpCgN4bMnojb5vWRpCKQMrn4xfBvMsCMiQi39mHaU7mDKHCwHno6YynCJJm119vzwt92GYJJ4",
  "key8": "2AnCy3iZ3zihPwpnfPdXbWe5uUzgAzUt8G3G1yLfnbxDJWjZ6QwbfVygStY5bwCXygh5dgyTYhqcvdi3H4wZ99Tg",
  "key9": "5w88xJhcRypKfTLFMySDaffVqY4ZMsb4LDhmdELAzbAT7TnsYZXrsfgisgz3auJqYPPQYpqXQxXSFupi1MoWgnFh",
  "key10": "5Q5qjtsrJaZG78PKDYKkhGryjjmemRUgJSB4msUvX6r7xuc6any86mNYnuo7KMpXtKNFvrasz7wyVtMwW1WCD5vW",
  "key11": "k66Ni83ANgfpvAnU9vQaEEErAMjSAXGHMP1Nnkd4wrREmW9RgSFNPoq9qUA13mMZtNWCtuTjd3pwyibXG8Kh24E",
  "key12": "4ZzqZcCqy7hnKrjd1cUt69sHWesy6Uw7zErvFSZW7FDFJHRWoqQjmBEn2K1BVgg5UJRuCxQzSa1CiyB3Q7vFoKzJ",
  "key13": "51UcPiJyP26SzhqgSnbNxFLMzoMpaVhyyMuDn5g64YPGdGA7p8wVeB3gnErDGfByoJjj65DZBR4R8MxtreZN2M7C",
  "key14": "XyzPnXfNZCp9HogmwuVCh4hxMU4WRywrvxuCxqTeNGnbf3VMQcBDtVCkofyZbENnvodm7BqE7SPTkrp4WVztyJb",
  "key15": "b7CAm5XhofoC2PRYmy4JGnwhbJ2b5SokgNG5GAGDkdV3GEK9as6YDattvQS3nwhDUedMt6xHbu146EaFHK6oEK8",
  "key16": "G3j13zffjQ7ZkNppWNGuGXJxUZMoc67SA3TDwJjyiNAuatZsdV4FCHmUdmS3mdBVKLw3999GsgzgPEuayaXA5ce",
  "key17": "5j9UgNrZZi8YvcjM9xcvfzGzQPekjceSbb6hvknYBTFy7J9pDj2q3VgVcG34oph4TpeEZjShjv3zdL7YT6FViPhQ",
  "key18": "2tm4Zmo3cpgT8aKTAUcn8QfE5udV1JAwpyzbZrLzzkTBeeNFQPdeZ6kFCj1pdJJXtQrGV3MAfhVh6JwRH49TbCta",
  "key19": "2x7uyo5nZjv8ac6y13pMfu2FmCddzxUnKHCDiUz4M9BzrBsednFrjQUpgxRjCBZD7DmamEwTB5xiuEkD7ytooqGX",
  "key20": "3j9CTd4NfM1VNS6SPmJ2nUfFatKycrWgpXKqxXGnTTinu16AFf8pP8antrgbp4np3hQ8iy2Mi48gxeiNd1GEBnYD",
  "key21": "2ufiZ3YjjU9HJYFXDSGM5HbmQ3hbjWwn1HC5tBqtxqqeFFuvquji4VH6Z1dfbU9JtsJpik5pPrykAkjGup3UWch9",
  "key22": "53Kxx5anwPQfqJsLa1qPMC9QvENVWmtfbJquXD17XvNtjoqjjMkvTS9dyQ5dYAb4MkEpBb2nByPSj473MVdh1PPA",
  "key23": "3kqZJjqFMSYkLs8KEwZvfYaqPNiBfWLXPEuvaLFVxCzKMuteiugXkiXztGQueu6HLgBMhXU1cJghXmgEPGUYkWra",
  "key24": "3ANaU2PAtdZvri1bhcc6iHuMHKnEGCL3bq5wCJuTkjo6LwnrTKJFyFUrz1tzvQPUfQ9jdZ1ynUQBztPjQVbVKNsz",
  "key25": "opDXv1sZ7mJgqgvDo1YPQXmdqTjdPhQjm4DyPVmCi1N2Yq6LaHxsMkrWEKPRvzAFJFr6Trk6warzFdzQYrT6J23",
  "key26": "4zPEr6pHZXS1binGW5zyXYEP1ofLK1R5oU2mL6Ti8jxqAkt9dZc5DrhQeGTPrsX29syfhtvUkBAAobyFGhCvAuZa",
  "key27": "3nLotKAuAkSioUBVvBthnhkgrwzPwe1ooNJ5EYLaGAh6bX4QipR68KgJ7WeS94NELuuDLoLEq5dvPKpnUe7hib7f",
  "key28": "4wtM3XfF4FhjnaE4r224oHGwuy55ByrahwHyo9GD1EKn1s6aVbNxwD9uimCrSSt6kSWd4pSfJfvA7ZytcwRoLKMs",
  "key29": "28zKFKLHfaopFY8FFUJmg8U7gTq8Kzz9yMnGT6eT6FTQisyxjsWQHwPxY9iVeBHNnCEsXkTXSFtLQSH7R777nH4p",
  "key30": "4iRmSWsKrR2PYBvkSs2iNKBWUCFoVVMyQyPR3GBA5WhhEdxbovDSRWi8Zpwciu4ajLYwPYtC78bKzWoU7w5HhAUL",
  "key31": "5axGjZPjuqiMYqGk4ohxx5gmHoULzhVHyT21iWc5BcQrKBbmKuR3u8JE34CcgJZCod2cdqXvP2ehzmBMrWEEXPVr",
  "key32": "41PtaeUeadwike58dP7UsD5jtazWyr1ucWvzN3NduvhKhLJx7Ky1Qq7oVtSPtVBgZ3b3Xe2JeZJaMQg1fYmAVfyy",
  "key33": "46Fd1UMM2yfw61BpY1jNWd5jHRTKDXZqYSojtuV6fFg1xDqgaNoMksY7yZMc3KdNm7vVEswX9XrFPNQrGDR7brz8",
  "key34": "4Sjz5y5xe2nSFAtwboZXrC8th25aS8pzbjy3sWN149jWD6zpn2hRnZe24trU1mv46mzL3TjzNoJGs5Fn8w6zZRKk",
  "key35": "4k3HzziDRnAT17tWuayi8TTFgZ9vMXV5HKACJc3Vzx6HSmoLuU8KmwmXHCbj3jbWCeCokMEZeVftb9j3WE16Ecv1",
  "key36": "Jsf8Po6s3KgvtfQ8KUaAXrn34JNS9HoXdahhWxB6co2XXNXXh2kjtVEggvUPvqqRDyAUDGpv5gtUSGTiTZ3BAF8",
  "key37": "WcHowuiFNvkag8QAYirmMB5ka5YcQ3ZHFsMeeZAjEpGNf33HPUWYrTJRHz3owCAs9Wazu6RStVRwuLLJcMqX4wN",
  "key38": "38USJA6KiZgpYysfQfyfMQTmHVRBA6ht1SNsjrXdK2HFFsvaS4r66fetdM2smTDC4J32oxXow1iXiAi5W8DtTSJr",
  "key39": "nPwUsZaJai6bxYJkjbj7qpgFHyHFHHhrHtBgscXoLCgL36T17xdmZBXibBz9B7W7qqyMtbeLkxfnizHT9xWSpZG",
  "key40": "2Cnz4ZMVS62jMZ6nJcRRdLXMBe9CV4tP54RKi6XrK8TqJizagGjBZjjj6my8PSyUXVF2Lt8ajsPKvrhERGJ7bJou",
  "key41": "dcwbwm53XorgPuc7VtF95H6kjjW65Vw8SNZKm9H76mYZ7AejWmcuk3kjZTUH3W8k2RnaUpXbEEWtz82qnGQHUsy",
  "key42": "4dVdQFMzreS7AskD4kcRPGkr2Y3Zi1VMRyL2BL73qdVbshRydhDDoFrgegqaS5UQL6bfeK2cEJi3LAK3XkbaBji9",
  "key43": "4KapvmgPe3fcTBfN9Wo4mSmA5rgDf3apQhYqMmeeLgTS42CmpRjpZvkjTyGrUNAd19qGRpxEtHAKQsspPoJAjDDJ",
  "key44": "5KvCD8NKwe3CNHwmmqz6gE7V4hodC83ebAnAVkfDRy13SNZoYRWGfwQSMfJpHPds7X8MLLU74Qfwphbhc9hSGrdR",
  "key45": "PhqwkFHBEXe67hjbuKqh52sdzCBwNszoZF3QezUd7XVsf5qEe6FurZZRZA4TXudLSo25FMkdQ9RybRShh4yyPZQ",
  "key46": "4Jxn4HwM44bbuFcC8WqL33eZA6NMv22NsEZS8NXgAExYpQsxuwwr3tcS5vKawuxJv8HS68JnnYvEv5tWDYYRcQNE",
  "key47": "4woqinQQFwt7JvsYq2XBUqq1GZPmnVDG4SyBEmzfVHwWk2hDLDBm3QTWaGCiurc1qeU2AXXNLSy4supjHc7y93nf",
  "key48": "hqdrqSXNgwBNhA2mZmnEDkKiNdaNw4AxJ11YyybKvLmyRCuP9QvXE6sRuj5zp84EFQ3isdFQXqRHyLorSS37pjC"
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
