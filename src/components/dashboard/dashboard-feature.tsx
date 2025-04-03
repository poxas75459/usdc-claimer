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
    "23e2hFYUznLVPyf4tgkPHdQjnkZaXLZ6Hz3cLZripng1cj55yyGpcMtoa5Kir1u4hXnXwkmMVZeBbyLeGfFMnZcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mXm7QcV3fphc7DXjT5sv2hXmn3okjGXKJo6vcMaWQdyteH7pZyLX6st4p8y5ecJpH3tyqAVnULjoWvG1jBbF9wA",
  "key1": "54TpLfU1E7MrrWoysoHYHdCfjh6c22TDBpfMmNfZfB9qM5YifWzuTQbkkWEPMPWtsYRdqukiDX8bfZF7qLHwgMjk",
  "key2": "5QmD1aCFU9j4ooMShyziQhNjnkkahbCKpHMFqxnRy9GyevCtuZ2qqjKCxU261X5jf82jdAvyya1xXWGTSvqpjLAr",
  "key3": "4s3v1APZ6AxDvGJMMxtMQL2YTGiKA7speac7hmPo8WEv4LwGyMGHsLtwYwguTeSWw2ELD32q3uosjVAGx8msHiXL",
  "key4": "4SAbU8kG4Cwzkr5QBSicEC6wdPX3FtnHn32X9aCURSZZTagbaUasJW8bhaLayQkwupJ82snCBTWNG53ySnaMMq5e",
  "key5": "2pXK75USXm68kCsMT76BXYV5FvG7PGgjZiJfrRrKngWyzbQJCEbhxXQiCPj2iyootzP3awbYka6WaD9nPoMSz9Xa",
  "key6": "65Q8CstC6vswDvAvDnvqeCNLdJtKyVTthYZ8P3eCMWbmVv2EZaTXHGiJSrzaQkKUpJcuFe1EJskyJi48p2bLjGqD",
  "key7": "4HZkLVfQWRMDnzA9uCHe57thwKGBYgYN5H4idMKoeJ1bwcvERYcvg8EdvBvJMeVPPY1h1P3RW1mBWUzaM5RYVmQV",
  "key8": "TuyQWHwPUXcNWzrX34sdEHNUDXaM91EgGsP45riYiuEBRXrJvuPWu3VH8vfWZ4xFkkXNARkwpZ3rkbLMtm9r2Dw",
  "key9": "48PkKEFtjSxacyo6MrvWPRuqRZ1FFq1ZSJmnuzUXn1Ksgh8RJxoF2YWw9jV78avynSaYFVWjyVLfE8SDqzicoutV",
  "key10": "3y2uu7XK1AX3VouwgxKS2C2Yk1CqHPM3fUb8vDs1J3SW23HLvbavJt9BK8ac1hRJHrJxtXqySBXtKMVp8uj6JHSH",
  "key11": "3XHuQU9e846jwikXd2oEXuj4xsx8qDTaM9RBjiYFGwrwdtTorMVHqb2LnPuGgFFUL3yQP6fosByVsPJ8MgHaq8X",
  "key12": "52VKZNtLLWWJADvVmgfCLfuW4BtofSUV98THPNqdPq3nTXcez7rGtz5nSUBrSVUC58TrZ9pjZKJ9EgdGmPhQwr4z",
  "key13": "GDbnNngwymZEAxmKMK9inWCQKX6H1LvvoknPvF447f16FTRjs24aitwHkni5ViU5wNGjUVHavnBmouERsYCa7Tx",
  "key14": "2VuiGEU9kNpv8qp4eEKHSJ6hUDGL3jGmUs8qfKSXJGdYZcqJ1D5g3PVZBkQWjc4jY7caDeo4rTKHZxG48nPWQAxk",
  "key15": "2LSpJi1vnHeTUvrpYsH2CCTNztbQ6L9otXDWPdQPWKgKFrKFDJtVb5roQCihpKoEzA56yZfUspmppXaf9zaFitUV",
  "key16": "3uYouvCdjzqLSnJ2g2pHPTrHV1TiMfGFZxsWJJuqQTbdAtDmWnvGipaANsrGP91zSzYgU2QtmvhvpN1QBbQyxKXK",
  "key17": "1Q9b3bpKSLpGyN3a3pJFQ3UfciQf4G5catmneayJ7wFbWALbsG2kepu6hkSMUHPHwT3nxfMPeRuLzKTRVr59kKR",
  "key18": "26Hac3CnASCNVsceFmGwKfpdeTw7fLH6oBo1HKSHUugigVUuHQs5QeUuYeizcCpwrxpge4YeunzFpyXkhbWVBkfR",
  "key19": "UiAHw8WrJ32sumtXLEhXHn5Z8FZESbqHtiZu99h7KQV8Hc7Cr9yhiTJDuvz7d9aaM2DHZjWDcmEh2Syy9fzmTpQ",
  "key20": "38wwnecsxEFtcDEh4QtqkDJ2NB1uLFUYNb9wNhy8fjMe5q78H9Lr3S9ohZfjUqdr1QZmP7EtzQzptDoe3k8aVTK4",
  "key21": "4F6wTvaP7oU7Labkmz2KWuCkTWtPnak6qyf4BLoS4qz2t4gpfuxT61aXCzuTsjpjEky73nJ7oprVk29RV2Favvuw",
  "key22": "uSCMCNLL7YSuUAsg2VYgQmXo37p6nwCm2a32xEhKCZ81c5xAjrmH9eUB4vKsxZgxt41CNqMhmFrqEwheGgaLnQM",
  "key23": "2yYvkVaXE9joZjQXWcFPxNyEJMQ8274RSiDxVLTjKTG3W4rtJzcSXgnNKvc6nLG2QaArWLo8JgWQZt16AttEY5Nv",
  "key24": "3Zni1nwgf7Rrf2bhTt1V3SCXTXdVa2VpgSSNBcnPdnw1Jrv5eAhGCJMDdP8yEU4isc5GcbCFLgh1zzfWq1W84PZM",
  "key25": "35X98h9TRGiFx5xVwXhrKZTxFzwNUXQJDtqpDpEVUcmHno3T8PWqPqVtTy4cTggkTod8R9iwPrcNxPmig7pAckRS",
  "key26": "wZfik1kpAU3ypwJJaxMARVQgsU5BYpwGq69KBTKMnRyMhhvQ6Jq4ZsnhEpianr1p8Nqj9DEJyhkZ72UXfL6m3Qg",
  "key27": "3TprVEequcze3Uta2zgT5rtXNMxJnKPVUTw6ce88PVuuMpm8dAksVyRLNS9dD8SqrotToMGGf1tSuk4zzg5F8uEP",
  "key28": "5tGJGf7whphbUvpSSaB2HLSFdBTh6u4DpXzY4nbU3TrfWiSGfMV8aodbfcTsv7HBKYsASJicVT68uV3T239hgGK6",
  "key29": "oPUTtUVngj3e6KVQRt9PKije2vgrja5nm2WSDCcr8cponLgwozg4KD73kTyTjWeTdSwBgLJQJLVAYQ7cVtqM3YG",
  "key30": "3HW3MoyF9c1zgQBPYyFLNnUwiU3MxU9kjQeuFaSCcszXWNsMoTU8ERp1dzcPChBEhr72DtwmNeTTCDxStBcrEnex",
  "key31": "5J6VgzXXeRSTN6jFzxT8tifMMvMJed1ExXw6EgzwREFBVkPq6zkQuU2x8rrSoxVK8UuPffo5FA1HuAhJPGtyEtKJ",
  "key32": "2PMvYbkKKZqcpH3CAbJvyTaw6bZ816BP5CDnTofZMtkLGTTYsPEpq76rFu1Th14uv6pWiH9hHg8Fr1J4AVfujM6g",
  "key33": "4Wzoq8HTUh4H8aQcWHVxuPRDR1xHWE1PBcJYdV5TkKWVWhDYqAcmMYspJ5QG4EPxsawP2K4Py3yRt2g18hjFagjr",
  "key34": "5FYDRUJjDWvKxBR9hHxNywoBgu3LsW7nHESKUQTXLS1jv565z2d624nL7M4RoqhBsWJjHAvtKYmwWEHuV1pX4arG",
  "key35": "331ifyaYkvMbx3B8JdbfDw4JpDjd7T4st9GtUriygE812P5999f3M4hZWfzBrMw4beCLeiX8e8Tjm3bTZEXjx8Mn",
  "key36": "rg7Tw2faHidSkv9bhCADvdHFtcJXVnB5zMVqaYhjFTDvPotBWJ4TnHH3XXSPXf7x6Kx6TEdUZXkyCuVxnXSW6rQ",
  "key37": "g46Lt5TANpjFZTjw6ASJJ2MCKmtnzbkQzWShLxzD3waAZ9Q2NWvDS24gSzmLwnbqNruourDVz1uaLohTDs6UJGt",
  "key38": "3ukmyhHqawq5h7vqHVxmA4KVm2feair6uNW3BinVdxZk6qnUEFBqKaruDhfBPQqvG9zVzBhtqFxYrkcq2D6Vdan4",
  "key39": "4zaey7EWUk2NeArEcE6ALxuSvMVf4eCCaU7oeKnqhakkDti1UvZMczW6BgMtaadegLkSy6UpYu34FMKwxv9uXMPY"
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
