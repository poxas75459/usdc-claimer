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
    "5QEh8fvtaoiyfzb5JWvHHy5iebeABPXAq5kaPJGtvyvXBSRwktkt2PyLYD5qW7EtMg963SRcyKdomcbYAniuQFrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LmtukbzLfwPqdZFW9HizMTNMxR2d3XqczSfi6o2fbDXCgyR2gAquQs2cPAGT1oDgESNRsyLS8XHGzGCdmDbuYGh",
  "key1": "66Fmw2wSo3KDVecyJ3H88u3TZxuUeTtg8GL188qZeMaAmF4oVidc1Ztz7veET57UWSo3g7ScRS1gYLrFjBk3cd9r",
  "key2": "3fFNGK6QNo3sEjm2dusJCX7dtW4fWLp1JHp6r2Uei5iDAdAV1B5z3LWWx5ytA45SMMt3cYRBZF9RrPvknqvh53ij",
  "key3": "61E2oZocePdk2Ju5qvosJgfqDWcMMQ6eXB1B3A4ifXoapsj1UU7YLaJQe46J77C9NqKKwVmCJWKMj7jCFyc8Uk22",
  "key4": "2hvNkeG2UVXV7adi3hx9i3ZPZqoTrBe3ahRtLoP21H8gKVDo7VWdj7aSrfxz2MmqYHxkRbG3PV2cNTtnJFgkJW9a",
  "key5": "23NS3m5cnifSmEu1HbxzBvZmrkomSyDZN7P1AvgbUCuZqKJms82pRPMXTgNVWZN87CFvJtz885LpkSnatnqBLjU6",
  "key6": "4GTBPZWiZtdA72s5kGCDE5HFMjd1GLrNTmfRsdxLuSbJf8YM3iECZQwBtBHhSgjdGQmJ48GWP1GbuvMdCpcFxE56",
  "key7": "2YWL6kLtautZSXy1E8xwf9B4uoKLTH92179BdPSF9xa7rnzrMME2fpKmgrZ2spqK6JscqEEDAtZ2sZAUtX1GDgQm",
  "key8": "2oMscMru92MfHovqcojeJ3dpZgSn1zmLJaRK3E1Yy4WDSkh4ZQF44TuGt3bRrLTGRwMvYdZTb3yu2z4rWqYEKAKC",
  "key9": "2kMsTqVRdnAcog9k3nJEnZ6T7BTjQHT1gHLd5BLnFzyKHZFBWU6LqiQAbQ5J6BZwxLatQA8EuwYDgcqUhs2wP2Au",
  "key10": "4B1LSpcaw24z8NLqDeQgUkkgGKe5CqG5vzfhC8ziDmtaiAhYGCFUGabbqifb4yKwZk6LAukbXuZfp3QpyiX7NXdy",
  "key11": "4ndsnkvPZwgr1c78R6R9kX24hPd5T6MnsZmfgE7FGLcaTJntS6WG7HfnKfwkqP7hbMmeEwktWcq8QPZDVUBgZSJp",
  "key12": "478shjSuoCcRMhbGgDpysWzazBhaSHdVzhHrt8ojUivmXLXGiHAbZMkCDTe6pxBaPnVsVxMXKSS46tgx8svJnKUu",
  "key13": "3JW9CoXCVRUp1vtknfLKEqNRedfUg1bDKFaq8yKabYrE76APZYnFbYqKhnn8WDrnyB9g8uGWD8f3MJGTKvXiW5We",
  "key14": "54kkHG8ZR2NCbxmKNV3f9fjbkRV2i9t8KUz95JqoVng99WuE3anK1cNh9Ub8zuKNQYDXsJPzCAD5MmSX6QR1nE82",
  "key15": "3WZS4mRLEsxphbHAxmew3DbXYJVxzyTagTZGXY9xfTH4hvccZFHsgzZtKzdp7rPFzZhCppJTUyYjLQkoXFg7xmff",
  "key16": "2y4rwE3CcB5xzdqu7FYQCJn7RX7z73a5N2oxRpiFHckzcWjjYvosZmb843QTNCCYPFTgL8Qp9KDUfEG36WH9cLzR",
  "key17": "3h2Ar3JsmVKh5Re2vu1g3w5idnKg1Z5mxJgJpQvdBTY1nyHycpmZqALkLE3KR9fU3v7brJanR28y67Yff2ksBkdt",
  "key18": "5s23LxasXX33sE4Mi3RkRQnTkbB74BvLUAMkcTHWCvqaqKv3jT14Jo1K3KzGbE3FiCnoXTpaQUztvWQteNcbeTPp",
  "key19": "3e4Uh8tfDLSKoY9mDCejhaHPZrQUampDEs6DHuP6Bq7mRbtvCNrgTU3X7VnsL7zoqQfxJTiyJnS6bLTSuXJf49Lr",
  "key20": "2eZfcMHmTUDNyach7kGDnUWjEjC6vH3aLhqWmv5TiusFyZzFnQrdfxHboaR8PB86FEieX62MFdLtAugZqgCBCtRu",
  "key21": "5YX4esMWztGJsAbKXWovCV18PJJjJZ2knX2TcnPrw7UpotYZMNoJaS5rNirrsps5s8LZyaAqSXqYQgyPdRv388y",
  "key22": "myAdvFcRVfSrGHwWBjtvnr3Wan6iPpXLaEPv7HQ5HHJMyLwMx7EQh54QwiJFRcqRcKZ1N6jEoE9oVFrQYZZAou5",
  "key23": "2TR679uZErQzCJiWr5ueakK9U4jrw5AZyv29sCowGK1C8tShGpf5FYgyEvo6hrphpJ7aXgyRXXmbVnQ4TJhYt3mE",
  "key24": "2qLLtcSsA6GZyTNisRVY58Bi8w4E4fRNvp8Sbkf51CULvyrLdGefRxMbNJJjcfhjSN8kUgXi6waM8xyGoLAUA9dP",
  "key25": "3V3DvsWVWwTE5VkbNrim6wVZnc2Mm4dF3BX8T9SJNFq8249UWKfCEMHtM2ZvTPd28HRar3zVLcRqVGhdQ1EMqk8w",
  "key26": "2fNvC1rPjYyF6KUpHeMtCv7pya1eq7RfkwofMNhJP3Fjo8Whgi1rxz6VB89auLPfjsE5zR1xhcAbQVLY9nMTdYd1",
  "key27": "SKoWdSoFj5QATsduwPYmU8otE54WfjDBpkrpfniQqTFHsvgx8ZVky31erX36heBNRJKTvJWMhbWNvBzo8gmo5fw",
  "key28": "63JsJ11D3P2hitn7NepXrcgYAEmU4ACnZn8BRx1Ebr3a7M4nFc3ncvjZk4jCJ9DT4xWFJBAcgBPx2Wb9QMEC5CsC",
  "key29": "fixpWvCcDN7cKin4tti59LXeK6VizqvtAXFzy6TaHVBGjuLD4Qj8j1PN62DZDJTwWc1A2n4Xm1TNkNk4CDshJMk",
  "key30": "5dyGXoJ3dU1FAgVWvW5iWYTsw9Zc4L92NVr6q49N93arzXinjUZCnfKnoaTjB5GRH6rQmHXAKtqknraQP6MFYGWo",
  "key31": "3a6ZW2p4gfhmCsPpbpsB6EykTbrDgBGvpEPwJs8xAYkNqD93tFoUsSesEiyGbKNWvqroK7YugrgjSxY5yhEXV3md",
  "key32": "5ycCWcyvp2yRtUDpAF5TKDtgbZs5GxyCmGc9uZqkEPXuS1zszSDGSw96j5MWBJi37TrCgeScTzBAZXvDGyuTKyU3",
  "key33": "4KLhS6FmYvSau9k8dSuYVP7s6tv1y1vPrBWTPUQLx7eTzJmw8EJj3LR6efLUxBD7LJLysKnGBziQeAJQmfY6V6o4",
  "key34": "4BV7eJ7cSMsArsKz4UeQCEc6jPie1FPcKV7pCLrew55deDj7f9BtT6AKrbJcwrTYpqdhY9os45tMvA9eAFyaJioe",
  "key35": "46yZDH7AyoiBTbgp1ShujfjYv6D2HTVoy2gurBhBb7D1rpEPpaR3Ei5ubhkU2v8nEtxNduGbzQ52iRsc9UUt2Ysa",
  "key36": "5ZqsWDhHaXD58VZE7fwSusXskeGJ6pYh8Pp8acrurjkUeP3aEXnwFJrH8JNTboQNJA2mVatgwHBRJbLeVApA6kxo"
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
