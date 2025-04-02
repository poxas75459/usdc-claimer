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
    "4SQdme3hTouN7b7E9ckEXMpsMEPthHY3ddPYwDTaiiweDuASXpY6p1FHvX9V7rc4rF5h7z7j4WNbUkmiBYpurxhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VsAMAnPaLaKqKo55Koua4ceVb1gXHbUo7XtTbvrd9DUuGfESwYG6WSNNKPHrFiwV97d4fr8HiN39Rt53QYJnLZ3",
  "key1": "3yhPL2UgtaJnkcQRCn2NXXuLsUs8CDmuLbDHUFCekvdkAxUR3uVD6iq8VWPbsEHENNvc4vaQ2cubjoMUNqQirzHu",
  "key2": "5ATPPMuBEMZ61A2zDS3CsBWfYz4ToLf5nf6JCP8QnVBMKrf5h4cWnqrtGBhuQ6dYZ4rux8XscNPM9v6X9dbqigpN",
  "key3": "2bs825nMf1N1CihgNjW7zsA1F3ani8EbobVup27pZSsXqtM3ei7YqwNerbwbSa16BW6QK32TFdYyxJHbCcELsZ53",
  "key4": "2FtocGwQzLgTnr8gRahU1qmRbQziLXqRMt1AYnwG3SfDPHFhwwckBgr7rYm9hsSSnyf9kwKNH7CmVEM3AvAXSCc3",
  "key5": "7spf5YiqUt3BuPr33i4ktyhReN8hDAci9mMWtDNkeQTS4gvjnxnnvc1XvzrMFdEjVR7L9w6Rv8tXu25Nj68b3AN",
  "key6": "2kukdqNYSQMZLJfbAcjzQDdgJAcdFDqe2fmgJmcuaFKrvrGk9X2rqu6TXPTPMJLRM5BaF5jdByyeHWozTwQuWim7",
  "key7": "5Db4A8ePaiScW8TKrTjANxtPjn9FeXsDVvDoUSDy2DGBY62JfQLJhkV4syGuakshkKrJkHF6NiibviYd5nrBR1f4",
  "key8": "63ENymVkjLGeweDJdQNVpmv48KwbbBN1U3M2X5TQhmZnsCnZwZAS8fNAY961SAyQcBWzxN1aPcxcSzeQjSARUrxY",
  "key9": "5UoqTaqWJ71RMEatguBqxqBPRoBYxry92PBh8zuFAimAWdWegy1MmV8PVJDfoVunqEp6CGo25bvycEjwxg4s278U",
  "key10": "C624h7UUmttNKotkjUxFpJ56F9odA2tqfaPcmNihp6LQ1JPXRRAPtST5Lh5aNKEgiusk9mmHcAkANHAiNUGNn7X",
  "key11": "sKJ56wRTPNqrt7A46spZ2JruKVctwyRGwMgwuCXY1s6gKDgvNMqe5QLzyBa4hrvBYaw9tUuUQYdB6TJx7QXXXbG",
  "key12": "2P7pvJzGVdfEbpPTjwb1uSC5tQVJ9iQHVJJHKmwhKWrqjzxjtrE7c8i6C2rxbr1zJDFTJbqSwzuxMWRUAZDzXw2x",
  "key13": "1rWUnMYhzLSMYuEWEw84kHATr1DcAZGHmZJLanwFUHnLHT3VMsSNo3srdMUrQeaq9aBdPg4bGxiW8tTFq8JfMTH",
  "key14": "4ReNCi74imGs8DYZuAw3zQ9LiuKtmuG81b2NfWgFWcMh61UnSLVxkBoPCQ5uxXdBWWszyPuaW2f7d4GPHyW25Gmo",
  "key15": "3FxiMxSNpwW3rDDtAxSmAQ4qCBCgWNDUo1BeVSJA6QXALz3FSFGRighzLhkZ3TV4RdkFNCRhAzha9vdeqjexJG7M",
  "key16": "RFwTPqLF1FxGUmBCLcyKPe8jQQNS2GNiY2hKuqx9zDtRRWULkgxW2Nn6eAf8zCyKW7g9ZHeapyRRXsBRJKAbQV7",
  "key17": "55E3Bj6EkiizAk7qb1btxak11MJS1Sc3PsxQzobTJjDYosJTdB2Lk9eWomVUWLt1SSbj7ywr3nKFd1NNs1TtwbXX",
  "key18": "3QRmw3b8TZuVwhSeobBSLc7gdHNnFhq6rss2z33R4H9CP22KMwXTWDpQHGxqtba7TzexZ1ijghZzkoVxFZH6iReh",
  "key19": "5AAR4zEopSUgLTZo8Jb4FXpLdgKS6yDuXPVsNNmaRbvgs19m6EmwsJcedyB117gt1e5g2PQ2VdZ2EVWB29zEu5VC",
  "key20": "4ragv9DvtNvX36aeu92jcSzjJCtiEqheBcLeQUeYP6gj5QC1GwXdC8vXCo7Cbg9JrB17t2T2AzLf4McnjNFB5bqN",
  "key21": "JaH8SMsz35o4nLzTGPvMR9p8wQxDDjMQBnc641rGMbAKs96cWDdJ8ZUHoTGoHFyjc6gAucbB7Wr3iDPPXdeFW85",
  "key22": "27LN89pgrgDifT4hjxLp7JbQGTKrd433hiWinkrLT2JZyuNgmdwecnF5hasxAqoXyDxqoFCTWBVG5iEfwP7DeoYJ",
  "key23": "5pXGHbVTDyiA7ZHQUhM3HVqQVjG5nYDJrSiUN7EtmiDamPFF8CgFVgdRbi4uKJ2PF45w4sd4Jo3Q51BZ4oPzFcZ8",
  "key24": "5PMT1dyBju2Ehwwazt2yoa9dX9BSpePEdyonp2UCpMpdEjFpvZoqWpgum555fRoVrVKH1r2kp243QW3qJECacmXt",
  "key25": "5vb8EwhLtfXzq7hpmSGTvFFXLUCFWMcjmtGmV2S24Ey13yoRAB3AJFyn8qMgyjXqBpmsx2j4qrKrYwEadnDL5v54",
  "key26": "4XB2ECTDwbZvoT2djS5vG74QD7j8BX7y9YJQgvMbmF5LqH3YDiD887fNrsN2jkjAcLvwF5uYnQDDW9iRnXfqWRoX",
  "key27": "3CS5SQMmLJQbCUjCe9arPxgUC1C8LDcaXUQMM1tJyuzvYRpV2eBdceUZrw5X5AT4MoYKxeDMA8xRt38YUYAhcP7k",
  "key28": "2gpeS8jn9TTjaWhxYyNd5SYwiBLmYCRdTPJfffdVhhFccoSsRRRWo9VkTU1WUP7XypZ8TD6DWRNocuAoRnucqBTT",
  "key29": "QD12SZ1bnuiqZZcukzAW2RoRNCiFfmyNPwMteJ6iWbBB2GN6WcaZmfT4CFiZzS1NTHbAtacMMGEEeLWs7p2M6mb",
  "key30": "5weDTX1B5wfa6qwSo6MhrR1iJz5Ucv3HTcfT2BCSTepERktWPLZPhd48Kdv2uPUpxERYUurYaTbQy8dte6XF8G2R",
  "key31": "XYtp1kgQH8CNDscdRAvJhusRDmw2hTuwa5uwEpHucbaCDCZUKVjLwfA2TGk6zeRFc3Aayxoz8JcPbm9vqtvQnJz",
  "key32": "57oZtuXZ4E2wao6XsB2f86h8JKGgpzffC5WskhsG68fPyaNDnLBZmgt8U6S9RDdkTfXopLGxEBoLnJeDYeZrcAbt",
  "key33": "2E5TeNMgkCxRUueydThdyGnoLPcYACmu5b9Qh3pnhbd8na7n4ms57J4B9Y7kqMWgVzsQtScaZLF8srbYkBxGUTHB",
  "key34": "4KargZN19tafNmFmoXaHDXYVa3fjenKeHQcF1dtLvfrqcRy7YSv9QGPuABVZWnC2ND8XZQtZqApWxuxs5xDnrrMx",
  "key35": "aJ5iAyPULTX8WzGrQRpZtJugbBkrmhLcL7UYT1jTJ4izvd9Z88QD7j8UxRaMiR7EadF3mWQdbQKQSePNzbRzWcX",
  "key36": "2ZBpVUL1MwbJ6T2WY6t1zwGJcaZ9pG5j6eWMU79VnJ1Y1oZLXdmXLGymU96UdYML8uCYo5YncgdXQ2EAVMCLL9XU",
  "key37": "5UBSdZGXbE6J6eM4h8sZ3dxS2RgPXU7p6wXGzbVtNn4KPputGk7ZmXjKhs2Sa4VQwKXGYyZCTGRWY53GgF8ywejs",
  "key38": "2y3LN3Jh4kg8LLgBvj2vAwevaXDSkLC6XJCLTtKm8rdwKFYz8wmQ3NDguiRqRY2pqp7nfhxbTzo9KgUeZRiSnw4a",
  "key39": "5789dX9MHunjBn3GK6MkMQMJJoxZn5t4DdLrMCw6ZxYNcS25SaEwujT19dZi2Pyd5fAd2Vp6jbu2eA5X56TkSAPy",
  "key40": "5tzZeDL2PMLbhJDQSuidugTuH1TWD4dCDwtdvz6pdaGmYgbrcwjYxYh2ULsqk4jDVPLyQyeaK8d8K4rZqg9Y5yU5",
  "key41": "66yvpUqHbJzW4WWVWrgMaiMDJimEtTWqrySNfYYUwm3AZjuwQNjY6FZFLbGFNDo5r7ek2bx665udPMgjLEYEridu"
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
