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
    "2cacSfok85E4rkJ74MDBexpKYfcMXLfCAsGb5DKqE4CEZStLC3KXFe1So6BPMKGc1BHV7tPaiG36MUkDd8HhE8M7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SGEBB9WemxRCdVPfwGWUsXuyJSsSQxeCyL7m9z2W5RxbrWoELYqAstimq26jnMmcEsj9HacszWC76JP7nzCC7N3",
  "key1": "5FHvchabfEp7JmF1U4UYJSza6BPoBV3dzwAAVsdRpnDQQhwj7ACujh9NGCmZSvBYERhdd4SFsZ1TFmRbtSi9eT1a",
  "key2": "2zCjFyQg835D8wUJjmLAaTWsUR1hx1csCVZrTsnsWS8t4i7kinMaXBtZQWqs8eXhxkwmJspHuqzGmxtEnFroiGAe",
  "key3": "23ETkirL9MWep6hc3AzFWJjyAfSADEpwSLTQ9ZNAo9eLFkDFR2hRTSHxsBRXJxaCFKUxf7sE49npDTfkgQq9Yqbq",
  "key4": "3soQsFK3m7cYbT69gdnKErhbY5P8D3XW3tXixfiYkHbBFyKtrZG8gGwaQjrgoANA2GTUgzRvtm4bZs75BKHuxhpf",
  "key5": "65Fu3XzaJWovQG1Vuv3HhzjWyhKaYAFzWM2mDv7Cvgd1K36LD4PJWyVsbJupUQfxUCX9L25JApxND75Hjwjcwngz",
  "key6": "4sBzwHfWiWEm52jkpD2kZ1e4XUrzcP9hEjEjL5Gz2fRYfpCyJbSLjd6RhaLpB54e8n5iJ9AdguzdatLnov8ftE5r",
  "key7": "3YUZBMJSJuFjnUgeRz2MnGXtKFCLtq76izqiqWmUWazwixC2haWswsfNvL72BA7qRvfXsqMFTVu4cZxJEnhqq1Ty",
  "key8": "21fLLuy9rYAbFYBRwzavH45cVWgsrEqNuPybxd3mvWKn45djuzoxQkWYrd3p6mPh9LhPeU2g6RFKjnBRTFz5pPgn",
  "key9": "2x4Cpq6FVcfvmnawyejuHk3qq6Lpn9vpYKaLUiUXbtBLib4XXFwjcAnfxJ2CthLr9A9MByQShAdCjVAPPfWFYesn",
  "key10": "4v1Mn2KuAUZDLwpwqixvmMiyFrjA7xbunLtS5fVuTCG49r6VmDEGos95ouH3RhpHZoGSTy6KWZS93kPAsGKFC78C",
  "key11": "4Kuwd1QiNWJH65jucafLfVCavWyZvYkB2KXiqyjc4CgLCXv6XHr4DKbQ4vCtrtDs3BWCFmqyRDw3eUogbAuLuhW",
  "key12": "9kABoYYtjZxBzjx2GgHVdPZApG31cLMPkjaUYwhJkWRAPxHSSCmKSdy4w5xQbKSrRRZF7Tt31R8MKLe98tosBHh",
  "key13": "pHdVpzM6Du9ReXt2YQGL48DjGdDz2cErX83uwViPdaf7yqj5v6HWy7iVMmUMqDAQw5UBFzodeo1oaFREMb573Q4",
  "key14": "vWccZBKRKKkr1Aq5cbuEQZfYS9AVcfuoCSEuB1GnkgknSw9s2PaNhEHHNDRVsD9etPk6Mg6xD7LJdyXdBEYG8SK",
  "key15": "3X27sFRswMUj6nrLis8gXHL5CEt3DPTNghEjizXv5RvxjveULRoBDESiRzjkczGtHrZt6tqwddS23UVw8gXLf44z",
  "key16": "4zKcmLfrd9VbMsrcio9i93Z1ZsoNxRER2HFzRm8wnkbhP7wYbFhje2vhXKig2EvK92QUHnFyTMHgw1hWhZmv3nju",
  "key17": "4d9VmUzoB4EtkCGwzJdrQy1FS9Kprn4comU8pagUSMzZg9F2Yfd1w1HfqC4W7LUhuz7zKKw7Vw87ZhypkPb6zF9E",
  "key18": "23tnfSsL1RRipB7vjdTqu1WkykB3oLWWpt4EsRPe7JYgUJ8M7KpuvWphNRddZJmWyUUXzjJCjkhCB2JE4sDUJ9pp",
  "key19": "gpVEngBGwT2q734TskZEmgXKGB2pncbMUfZwrneMzEZbGHAW7Wevat1EcoenQwBKyfqrT1mLvGEHWspZCTzyN8p",
  "key20": "5nZG7SNJxdU9qmU4cJesPXzhx3g49huFVSmLikYzP5zcTrkT52Zuy6KkdehExsj8ArXMhHUovoyGVnDcwWhQoVmN",
  "key21": "33JQES4ZoYBqgM7i4uB7CCXSuppdJ87d1ARQ42t7eC59ypFLAzeCkBtah3wyv4qHdNYbmmcZ1nojTUDqNXXESScB",
  "key22": "65acn7duiun5YxaTiwKEGhMr6SJXT4rwSWRU7QLGJGLctE356UjjsgRjsi9q5nDCskgqw9iFLswXFpU5bWnNdLGC",
  "key23": "di4MG317E2ZQdBhXA5uU6vrFYPYiERsD6qD78o3jHVutb7WF81wkjG5wKwuBinsmWFStynmmN47SaFZFc2tXxHA",
  "key24": "4WV2JiwxQi6CaVmL5UH8Rm7GbdHZTKda8HC2ahg69Ag6izvfDQAZybNc3ypDYxR1RTVBjLvFfxM4LB4qEBvbJWC9",
  "key25": "3XugzDShztGFoYKKuyiBJ5XsXT9owsTE92Srby6Hh5gcUMMevaEH3myAdcdqfNsYExbTnYjqyawWkHjQaUznGMYe",
  "key26": "4QfKBJEzsA2VjpJwgq3LYTpAsEFYUg4Lyw8pJw1B7ph3D43iWepL67frs6dFv2Dic8vTFKrPn5JaavQJRsB8cNBV",
  "key27": "6i17NujNpBdmz1iYbYJpuqYbyj9MR8ZZWxh9ryD1U7cW7GaDetD8dSNARjYfK5aY3di6BXBaCyfB6SVAhsviy9t",
  "key28": "2BGzvv67ssz7Tt7Rhnu2AFrS6JXsgQEsXrMYSQ6mASaLeeVu3721TmWK8hPjF8wqYui7UFDziGvnCFMvLrFoVdN5",
  "key29": "4kzK4yMUWSuk223kLbd3FLkQppFX6vrhm7sbTKfhN38zMWPR5rYmpT4QPV4SW9nqoUsXNMqEMU13gVmRhNsjtnHG",
  "key30": "Evph3XsNaFZcUPh6Yn6mh2rtrb4UvEwCcmNft9rtDTxykNNt9XmZHpAr9qfafvhnA97MENf6iSGrH8rbKNUbpXU",
  "key31": "32C5evWdebpnffPhLy162XWkqUHR6AD7YAuHuUvC6NC3y5e6caBtkaLvj3o9Q69sbT7rQwG3SmMtHW3N8UAh5mJU",
  "key32": "5UCxNx1RrrEhCttbSAGin1XZhAZoGyxTR8qU8EXHiyLs61VZ4QWyhn6vnNEA2Pv4Aosi19FDsZGgnqQBVBWWQG8N",
  "key33": "5o9TfpkE3BWDJgrg5kCDd36h6EGzmE7pBsmA26nn4JAM5dK4omTFTpvHncpMzeaFgdRXw2mWEeL3Se7FnpB8o89B",
  "key34": "51MXJbpgauJTrV4uzfN77ic1G5UMVj88qMSi6MR5z7bSzg8o4fo4BVkMg3qUwniwfx4W3SL5GMQ2BBkD2BguimhV",
  "key35": "2wTR1uj5Pr5PWjpwad3VJGH1eGHeLmi7woGQexiprhVywmB1cHs3g4Gupg3dm8XpbRjMSQgMyZRBq6bXdATf4Rxe",
  "key36": "3Vom5j1365m4kKEDvyeSGsDdr5qbrZ9hjVjXKwhT3zU95nZvvnPMQ8zah5NeJKNnVY9eedQhZy6uuvuF2AHKee4N",
  "key37": "57UM9aHX7zkuiTAwdTq5qeD7gytCsjzh15qsPu1MxNkTkyF6Bs16gofXnBLEuBtRs3dmUj1f1BvsyTy7EZkDfp7R",
  "key38": "5dQmmQqS67o9cW5zdtLwTdzt8knJyyGS46yA2XR3QCtTaRPVvj9TLjYxUFo7zZUkgrWDqsMFKqt2csbjcM8rC4S3",
  "key39": "SRFdMCueqUBSb6LZgGSHjaud2WmmzQbrTAfqTQJa4KqJg1WWbFPPLmG4tmZbUGERozExdHuVKJmK94zgMpWqxAm",
  "key40": "2XNLuSwV6e4zaHq2sTqJkd6qE2yEnErbUq26Kzgr3Gd3mvDqQzy8cps52AxuYVJYVTNsEEn47sk7D53u49oYL259",
  "key41": "5nL2Z6TbVHkzJpmJbZWWvqjjUaYmS8NyU4bPesdJpVvDL1xXUzkFkamFRcb2bi3pEN2UzNqyKVj6TPjHEJYhS6mR",
  "key42": "5e2x3XVic5zVYxQa3UbqmDCRGtbVVbM3pPVRaceid6Y8UqGH99S5dLbYHqasyALcH9XJgdA5Fz4HjgqYEJkoBq4M",
  "key43": "5U1TjWY57TeqZNKwJ1kG2H8s1Y1JbuMCJpoQmXvkFqTj2KFXHTANvcpnTSTSuTF8ryxnvkUdo3nCrFEjGFvvTx8U",
  "key44": "4BmJ6Y8866RwTsW2LCuUsSh49LemyZTudHw3Er9PKm4Jp4D8RLYRjjoL1nwmWERvtV3YRXqsudqVMWrZaVZmSXij",
  "key45": "22gS1Mm5yTcBnkzPomiZrgqUYYd3p5SXqADaq7LEV5DN8Q1MwLxLUw4HMHR7cARbasmq9FjD8WiDPEawfNf9KndA",
  "key46": "4bu5TZQ7ohHGtU48TNp8bRTay5B2n7XpT1GavWeeeLr9CnSEWj7DJmjr6GdJRAdGz3AkYqsiM843bEkjbskQY5BG",
  "key47": "5hSQ5t5VomwWC5FWAQXR7geShC9td3JpnPUjZxwF79h6gXL4HJwX3KCAP1QvzVQLDJXhbs3sikXb3MPtMskFTE37"
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
