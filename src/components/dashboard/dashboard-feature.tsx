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
    "4H4Wwf9XvZ67m77WLzKEB4oGtUsZic5Mu3RU2BJF7p2TSD87rUoyxXmKTZLDgSfQ3T5oT2aEwN8gHFHrQ3MEktWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37z7z3ALkNamaPEsinkXQAV6MyDx8onircoWqyv9aMihC9xP4vTUymbb9JCRzNSVt7MRhGWS2sKTeGWc6nTVNfR8",
  "key1": "3qejh4CgHDtAx1SgXBXSNxbBnGcdSFr3gquYGiv9GsUpcTisu4RsG78ooDFauoLK7EBnVs7zXQS3uC4CKg7gWsvW",
  "key2": "4SNxqCmFwQvChHqL2i1ErtLG6EmFEjvUJt3fD1ftxkwrXKAZV743ucqfZEYBxu9MvpdHg9FgZDB1BtinJoLR1aTe",
  "key3": "4RBnM7qYoWveNraR87bVCBK7ycYSiwo3k6fnXyp2TvufekJTC8c4DmMgSnicy3JoXEQFnKDqNCg19ThFgebiekgK",
  "key4": "9s2QHcvJCZMnE2Txm4CWq4Ffyiu4pjzW7X6oxHQLfCbPxCmkBQn2XZPRHaAqFN9kiqdX2VDQowLYWnj5QotZpQh",
  "key5": "5uMkEn1BS1oefL5X2TAoayViR6uKKdz2cpprgoHSJtTSoPozJLf1RTeSH4bY7W1DzhDQyZTP93mu3JxfRiVhGTy3",
  "key6": "4PmUJCknguePxxFj72DLUH8J88xjmnyakpvzFDarXPJWSp5siNycFWaP8M7Cqshx5HbNDT1yCxkF4MLxxBhRp74o",
  "key7": "5Sc15kZ8fTm2PaRULLPeQNNnrT6cd5GAHyHon1EERYiRW8zrM81NDA8CPk8bMoEBnzjHrVXRjtVLk8SHuVQaZpfd",
  "key8": "4rfB4Ba2vBYaCMjRk9NGNEz9h45Aq5njGdwutJqqyCTtFV5N4jy9esqBqSvNYThkLpeC6U5SujpM9RiAPBauDZTt",
  "key9": "3vH4icFkyKPbYUQuuANtSczB1qhGQNH9GBSWKVz1GdgRUC5si45RvjD8evmWEn4UhDwxCX2kXxGndQamBY34BXUQ",
  "key10": "3gbhccwvLDge7dnS8B6ZaAWVAr8yCAeSrP78vghcL2pTyWYDatQxgPkRYQRHfEAmpgU7E2VpbELABTqgASDMkDzS",
  "key11": "2z1Dxy1t9gepc2y7tstVrMMVfUp866MohhiURa7hK5MKtiETuwmFZRQBQr7zPo4fFdtvqcURg6y927iAqDnm8RZT",
  "key12": "4kBSX49o3U7pXdso53zsxRvPSB1Ks9vsYnnVDY7TBUBi9AKbdstA7wVXEEjsh34k444vG17yQGku53SHaXJ6Ak8d",
  "key13": "4qyqKtefCMh4UrhWrMSfgPJURL2Pjbmz2qm7c9DLop5cw5NcB4uBQxBYBT76kW8k3SDfzukKF5wh9rRVTa5mALzV",
  "key14": "2bXYH3tr4m89aE9c8AfUGhXxtN2mS9nbD2NYdzAG1VG5VsyB7hU5a1ywcKwzbox7EkcKYYHRRTWR9Ex2Ej2H5veN",
  "key15": "4nXhjnMu6iKQN5QMPX6oeovWeDcmHgQuvn5tLUffsEHfq5kKUh1sLkFoeMrvqTr8w6hSwoyWuceoctwB4vFdkdi2",
  "key16": "XqxTHXm77qE3ZnzGZfZBU3LdsEi66j9SuHNqyfgbDbbcAYEddMAbvx3bH8DdQpDaHva5b1bj6bSHoXDRwvM3GJE",
  "key17": "3ySEszDDuBwQvubWgKxonKnJcqqiKwkzDuk9SEj3QKdfdv4VhdVBwWaKTaSW5BEpq5WEVyKC2Vh1bQghXega8rdr",
  "key18": "4xpaLhmRuy8xU8znVMBquezYvmdnU7gFvysogFTHassQfy8vqMSuubFzQJ9TeLCr1Ji3bbFo4CwGcfVcyrt3aAoa",
  "key19": "62RQrepfCv1KVsZP6GJzLwapUANX9xf1ChjEjKTB6d3CKecmiNdUapMUJB7Hxu4RdpdJyfHjNedidJDw1FHP8xC1",
  "key20": "37XgpHNDgnDSVkuVq1Wyjnax2yuHmgkvYGLkhgZ5RQmRtdKtMBpe4BVUWyAGxeUWtiG1bGgoVe4qzSXWZMDMTsZY",
  "key21": "4jT5xv5EdE1sE3SzDPh9ZYqEZ3Um3vfEDNCMaF9DEGy51v2E2QNQCkpwymSuWTLqwjP1UWZMf4TZV3UCJ6NkZVbo",
  "key22": "5DCBPwpweucYHrfXq1AfcrpagAS4p3D2HCfp7au38LjVD3eqVoJkyoMhqDi7KxT2oHwnZQhx2spnFN9K1mcrMexo",
  "key23": "4vVC5kMFsowLzmhp4E8DY5ia4XVtEYFi56DfreE6yeHx3Zd8Km7PqfbG7Cz1D8sPQoa6cz5Q6DGhzirPKbrgwuW4",
  "key24": "nmSaqT7nS2ubeff5nfhpgCfcrNFVqynfMT5xVBPgvCKFadjisETaUemssGy19fSDSAe7suFuTUUMakbyKAgZCce",
  "key25": "3godzBE15WMu2m5zcu7cioEa8Fe2yGX59DEKsUoG51NvC6PtbTLsrPUePYv6ahanRQHiCe8NDqjtqkUqDXgQA5Hc",
  "key26": "5gshPqEtiYGpzWcZKGXAHih8jzoZfGSwZXdQGgc6EhYSVCbY7GjJbDvdZWb6Z7yJYBtUSZ8QFsUZN9WZEDVBGg2b",
  "key27": "4c2piYAcPa4e7ePv4H2dHer42wGmYzNQj3VYQiNe76EA5fq77nWabBh61oqWniNsrYZKVK8zu7mBCaB3e6so8iAL",
  "key28": "XFpkkEsFKLs6f9AGVvKyRmuL3dtJ8sJjhGh1fdMrJgFK5Qpz1pLkHKpfPNKrz3u4ecXdBtSAQHBj1HkNtwWiS2i",
  "key29": "3Efa5cjULzMZFaf5VnZqfZcTvf9a3JmEkcF9bues9bDc7SAYCcqdosmjNwEd5m2mNFdxY5QbYyRHqx8zcnByQLZe",
  "key30": "rJ6ZxmcyYNekTuqDfyMjKLr3QAEJPLiLmTPAmYoBguFmYpGLFZaewqi2fbdHjco1FA7RqAADUM7wgMXYLiaF1XN",
  "key31": "3gbC1KphFitp8aw4qsHa6sVoT1zNHVtyWjoDwuttbAKUwouKtgdnDLD5mPfZZtDRQhTwSebvxofo1borWPjr8vmy",
  "key32": "5V4zjs8sndvXX7R5gJpfuw6raLVZBZXLqX8CjL1N9iyK8Sj7Uya75znxtuFWoA6132QCbu95XuFCRkSmRiXBQEBy",
  "key33": "5m6SfrfoAUB95xNVs6Wqh9VphNXR9sLosp4E3QiaBwQkR6u9NyA54Pn9HoYrZs1SLVwRuTSobhW9A1BsVPeeXKuN",
  "key34": "4dz79F9ei2oGrU9EbUtASUNBGgtHRy2nbHQXX1RDVhWzsNVWdzPL1NGNuzAFpADKCEFNgg3AXdRx7zKevbwkMa71",
  "key35": "3UWtrmQSoWEuHehut268GjyGJt3UshXyLrxT43WGVYawpCf2JeWb2HnEJrLdReszeP5dTM8kdQkqPTfUxcK7pYzR",
  "key36": "wjHm5hrHx9bFuNi6VzP6doGZeWbdvL5Wwd6CyHiRQF8mdNKZwsYGd5the4rWkrD8W9RfujZiDZmHXKF2GiUiMrG",
  "key37": "3KJae3ifg4SqCJEa8BJXJHwsXpWvw68ozEsBV9kxoLrdg69hQJCNqk8H59focdpL3irBDKKYm9J1ajbJDLYMJC38",
  "key38": "5Sqqkjhg4oSqZiCfKuZaUL3ZCiXLsa2EG268ieHcoUEKaEufRZQE8cKViXFyuM84kL1FECoQVCmps6e7Bsn9xWJX",
  "key39": "2qZy44QkCsLL9TgYQG4Xo545y1a6RL4LGRBrvuMaisWyZA2LvZjsSHxoq7AN5mY1pF5CMhjnt44wRNX1KbbiycxP",
  "key40": "3iFA9Ekomp5mJwgnkcHnSfv2uxPPwSpRy3HR3V4XXgEeNZhRA8fpSx3qfsaSdeDHneBWBCebWKhM7ivCLh6eJ6oS",
  "key41": "4de1XtwhoH8fDRsHtKqKD3EjT8PUX28nPsDoFwjNSjCHzPhvbTCi55uTSjhJsuYpPsJwGWVS8YjGMeXx8oy5LGd1",
  "key42": "3rtQN93zXbwfhPLBQnSaM68HSK84bK2z18BVovxmr2mV3i2HmN61bBC65twwrNc8VAz3oXpchaPMFF65JCMqJWs3"
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
