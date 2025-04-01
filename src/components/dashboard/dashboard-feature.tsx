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
    "t4rQFsxtww6eYf89q9mQ7pQx4WY5sHNkY8FSMjf6EnPf3gFUuTfSMQ9qd4796SJYJraa1bTQC4M2qQQjwxxoNe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVpco55eGkS1LnjDtuJKRedRtromU1tphpjLRhp8edjQnWyg5xgPknAKbywrmPUw5HcjbFgrfAdzASeeP6FpFRC",
  "key1": "3n6AJC1F9NrbjNWdHdxFi9Mp8dzHnMDuigw1fcCjdmv49wyzaStkLiDUyEjEtk1iZ2SbmZpcwXQrZ7m8aP1GVj6X",
  "key2": "3eDF5yMMouELi739Vtqhc5ZYceFAr8V8z2shuaUwqDFnDfWE7v58rymh1RLHWNUNcZ3kNsCvJSpt2PdgYk6pR7D6",
  "key3": "mB5bNXhxyvNUWpsDpSqLfrEfeQCUWU4yAtvKQTi7cnQeKUBD91FvcajzF6N1sSQYHaPPqTpdwaSLBTqAovcjhT8",
  "key4": "4scLAnHjbJqmePjm2BkZFMnRzi3JYbkRtJu5kcL1hBYX9YRZxmzAdC1eEBfgNEEquQeA4kk4k6RWgh9QED2yRHvn",
  "key5": "4fa3KAU7Y4AXBsKdN5rofmojRGGMxdH8c4RnC5JKpak1u99f8hao9WKf6Chfhav6nLjKPZnn4zda3FZEw4w6tAJx",
  "key6": "3BkaQf8cfMiXVVk7rbNV6BfBptKCXQDjCQ8T33JsAdDUdxFKNgT2RgdNrXQEGF8hsMTPAbnGkpR49Yy2pFcdVAsZ",
  "key7": "4CHB5dn46EHi43v6sSqo2rWUWHWJE4rX1i1p6iNWh97pMRjptWYHWSJxhQ1e5XqeSzwRwniNh4x2Zt84F71rFpVz",
  "key8": "3Wk5W5T1eLtbmnjbPjNwxRVim6iQZmqRyZqpE17YnXUJDGEvH4XQbPxfhwY1GHS9zk1iUVaNSCK4yAioyx6yK3JE",
  "key9": "431kdD1Ks68T97Es74e2FQcZL3LQdd4HXQeYD7YxhXcdVpCocuuoTZEmPgi4ssuWpteN7LMJmBgax2bo2XXZMr4k",
  "key10": "2P64TgZ697CPfgkx3E7T3oRqnvwzrCYiJLZ3VB2vRMRT6nM2vV6UE8mmzgSkf1zhsVfsw6MR2GfUNiQnFcLMnZjA",
  "key11": "bk5JFVTcNWuapAVmEG6YenTy3f37LHFnCoDbrSg2ATW5zDSrGJDCS7D139CWq8a9m48YVU6kFyVqTAWB5ZcA4RS",
  "key12": "2FVvzh8EWuw12RGUdrg6mvN4qqezLYwaBBV6MCrBDaAqMDHvGTnvd65odjyKKKWEbNdqgCSb699cEMpr7Cy5cBs7",
  "key13": "3d5Cr8zcwUwmBoCZ8BGePP127SWdc4rVmQ9LGVEbigLDSi7QfRXo1oKVxtQ2YSPVphjmk3XTHbMqVPh83GFbmZ68",
  "key14": "5vgNtx9PHzpoQYRDv2QnEMsmb9L7v4ccJawyNpioPbwhHK5rYDqckwmCrg4CsdwwUcapHE9mG1kraqaxYV5PPAZo",
  "key15": "4Utvm37AKJxihq61XVHVKLLix5MMTdMKyh7x3bCz1LZSrbEWy23Y6bNk7Qsjrr2DmieQpdxGsq2XMGYtPiE3N1p6",
  "key16": "3bJon89hyRs5CtyKaQhYN99K8hv3cbtg5Vt1VceBehPP86A8Z8QzR4dUA7bEBR6b6gzZz99Z7xV6dgEiHSnNRsYD",
  "key17": "3D9zYt7FmedLerBos7mcYthzbyKwignQprRGFEu2Uxrpqu1kCnUqSgECWgG3idSE6HX3QyEFm85i8eiXGroAVx5P",
  "key18": "2AnwB6f5SGfKRtt1Kjp1fSdBBfRvHenvjoZJWskc8cvDsBbqQ4mad9s1bZ2aw7H32amAwf6RmE3cmn6ksLn7XmYv",
  "key19": "63CCwj7fjd649UFQiWUTGnRuCL8ZnXUy8hVQCXy9M6LGNT7jWnPFauC2PHJAu3NkMwN3gHK3uM3AP6NWTg2VzHy9",
  "key20": "4cC7SyCFQVTPnnc8xYmCF9eWYHKBVU8qA7mBLpLdkJxzg4w83qNKP71UYRWtfk41AJFTPHj3NJdnTvx2qnnwFh7q",
  "key21": "2jfktFM1rU2HWMZeCHf2iVCgMsPeQAdUWBGG6N2XfFbesZiAUnYbnE6e5XYP1d6R9AtkKqkWVzUSXieXvs9vij1y",
  "key22": "5TGdQebqQ6TsnTyhiQx73LYtssELavWL5r8F9f8HC1zjj7gErfu2kZzYqbXQBTPcypWknRZ5AH6dQN4rrZi6AVuT",
  "key23": "5bpfWJEeNpRZVFCQrdjjTAtoJU62BuuNDcaUxwYjqtPayzovr1anvKNJyFUVjyWGAtDLRwjnA7qTeewad9FWqcmH",
  "key24": "5G7iQszYwET2MzeNhYDUCpzUJBrYn6Ua2rcRJS1QbFG3jiuSKMssggd5Uiua9BmyZwvHn3bcmhPRtNyJ1nStyoDE",
  "key25": "3SNBvHHzu5pgTkuwm2aCfrXgcaCkuXvoKa6WzEwP9mUse3eus5KacdLYuBp5kjPXeMLT2MoP38g8YCfPADEF92rp",
  "key26": "8RCDffewtJ1P392pcjVFpxXBhvLnCaHc4W3dXUdjtX4fCgCkctTPJXGsYbxr3qW7FXbGfE6T5CxYTQFG9aSxjac",
  "key27": "4fytw6D6kdw2uNxguptLhCjYULwtZatxUe2HDLtD7xbY4wrKkwLURGTHoq3YdsqhrufwXB6YDCLEWFA4muQ6qRrP",
  "key28": "5342rop9WW2KUFcqm6UmuBc8VD7AGyhHP2jFA3z9U1WTMhxxFa5ji8FMz7XcpfhoCGjghhk5WC339beTnLdVcM75",
  "key29": "xiiT8Rih6Wj3FQFdoPse5t3S6rpa9qAULZn1Dfer8wR35yUyAF8tGhkPagkd3p6WpSk7EmkxCpCZfiH8EevpP3s",
  "key30": "5AEKtLLVqc5Dw5VqT74ZMyUPbZB5uSFT1KrJRfx1YmxZDtQZhxicQzr45vSKYVkqDXrTnCwt1XDVp1T6Mmkae8NH",
  "key31": "5R6AfmqcAW9Zae6YCsQWoegsGp3rcdJGEHgkbK796LYDHjFaGFDUHurXNRsBDMejUADckCnpPaX9XvsEHkBfP12a",
  "key32": "5Ln9ctJDwq6hanbpnmJJ7ozHUKVVhBVo38WTk2qtWTKLc1esh8sijvZUFi2MtEPyz9rGL8dB4xEoik8uQnZNtN3N",
  "key33": "2g7PtQecZS7NY8hMeR3ipGgEHnDjKLrKVGfRXGXwLGpzDyaTgo6BHXi3vAvPK3zXG8oSXYhkjhL6SyxBp2huDhMq",
  "key34": "2FWAeVPL9R22VLoTVkWcsrZZgeDz4Q36CsfR4Mycsjw6wQ351PWubCgaDR8ABi8xfEceTnXz6QthcZKunc8Ycba6",
  "key35": "53DwFb9hovnP2XwEpQA1u2hmMkVSFzDTXDqpWuLg26J7ui9tcv7q34bU1d7Fx4mzqi81tv14jcL9Co7LCmmvbTw",
  "key36": "5mXKtntsQqTvMrb2WRubEmEnpJq2qqRjhQTEJqgmSzb8hT86GNesBuDwdoYpWpTfP6BH7bXo6FGMXmEbsg12Zz6K",
  "key37": "2zJXkY2hQnynn6Au6NdHHQaYamwHHCK6cb8TzsPNt19oGrqHa3AW6LZYGpnUxCsmrvCgKV4ZtWNMFFu5XRNXhoGf",
  "key38": "5HDGPP8PGQxYpSBkWmErNg9sCDHbNZL2yQjM45FRniEVGtCmryRBTdtuGpFvMET7Cp9hEPKvL8XAHvvT65j5cHSf",
  "key39": "24tCmJw8WkdkMFHS2hWR2NnSVbCGevPWm2Qr5959BSrYwdvmP2BktETYZVgpA7akevbLTqtkJXY7CYqg8ceafBY9",
  "key40": "KiXxVdDAJfq6goH52ngTwGsKa5uZNE2fKk4ozhZAoVoiWinKzWaF1mgVHqmMxNMnCQGmgUcAtjhFTkVX82LLXRq",
  "key41": "4MSe4H2u8K9oei1r6ktxQP92SRCpokakujXU9VNZxjNm2zgteWFFYd1pjjEU2NcxYLtW2fqwuxVvuox821TFaz5r",
  "key42": "5pwnFyeDTSczyB15qHeMSedLP5uj5X5WE67D2pVvWfY2f3FCXxPPDdX8ziGpe8Mwc3HLtGLdukrEbRwvk6j4GxVP",
  "key43": "4sBuWeCV7ThgCK5Bav12yezaNRucxYj7hm3TdW6ggJRQkyBymRyNYr3q6Rt3nycbZbHxMXtivvMHQwCc9RQDqXC9",
  "key44": "4qVpEDoJsdwbaWDjENoYXR4XxZsixD5KjyJknE56v27RHSMq1i1gSpVZ8WZHegLJHPLj6GCSoZ4RiFLNCztjb8xG",
  "key45": "384fHxgNxUQb3WDjY8YHWtj2hkWqFB3CgEzc934TS4bpKD93xUqnV1jYUCBZVTtPAMsLvNeqHGq7W1qgTHYTiAU5",
  "key46": "47uFfQ8wdnuJnDzhJBeTV41gdcfs6TfAbD3eHFzCXyX8ER49XiMtDBqXA5cN3XzvTgQeyGoTxpcXeA7ZNuxVKywQ",
  "key47": "5Fy2zmFqXXVpyjH6txajtEc2tCwcGN4L3YsTZ3UVqidFbd7Koq73ha6kB3S6P9C22KYKKgU5snmpr6NkYhr45oB7",
  "key48": "3R7ifrUBCZn1ySUKH6BB65J4v1eX3MnQhBYVRB4n36eLPdqNCvxYajyAvfVq4WTXq8n9WbQg2NcXgyNTdgsjfL5B"
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
