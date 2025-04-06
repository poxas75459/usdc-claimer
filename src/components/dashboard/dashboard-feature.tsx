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
    "272Lxy6tTvvqxYKRNtzwzVXjS5xTXPCafpSRzRweoRsun84UUSBX8iWu43NQY1dvUJsFx3dgYKDhmCJ4bie3QqiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ywW9ASDoYGR6bVHoV5XBmZuucTRsN895pJ4SngBxfTrw2JAHsB8E6mZDTYHY2QCqgPqzWTJmtx5bsG7zcaPv1uY",
  "key1": "3rWFNJ1wxiZqiPgDZwgfvdRzpuGReKbmQJ8yGqXcypyNg3ESSAzxTqEXkjzDquijDpZQCB9sVuxRN3KsVmtVm5ZT",
  "key2": "3x5srpi1CoLXxaBD9NehCbvkgYSGYULekuBqR1VS8jvqTpHFcStu23xn6jCXJY4jC7s9Qz7nRXqSMDv1TcWX8Hp3",
  "key3": "2ANCf5CpG4X3W43g1nr61EZyeSKrL3uLr5TvXoA2HThByZAN9SuhPCBThPaZsAmUY1NUgAHmFFPALSyrQyaLEGhf",
  "key4": "4nRWfRJaeXBhTYEjBXMjfj6Forrttt2n2UnPLioABDhZKF9ZgCHa2DVyAFu8frUjkLTWrRFCyCBf4KL1Ap7tFL4T",
  "key5": "4bS1Z8DskSZALLis2cJwFi3FWmut2op5zs6G9NjM3zuTCjGCK99yZ742GANuambTXBaWp8dMxszr6S3KEGAwykR8",
  "key6": "5CsrWN2GRD1mf1TjgNVgqpgoyAVFGM1YFCui5SKfipaVXZUCSmwndrX1hTuyb4V2SdGUxkPpAD4XDyhV8kuhfMkj",
  "key7": "3MzjPnCXBnFb5o75bh5gi5mi77VYXgmYtX9HzDo89rxVEhMfQFj6i5YTP3VCAbxFnRsN6QajJYwfnjpEYCLhzKbd",
  "key8": "gANoL26ciZDqjXWV1NRZ9rTLiXrEH7XFHQaPURdyhcUNrfaujXjPmqFtRadfkpDyb78eYeSQQVJnDFAJzzQDz3t",
  "key9": "57tdBKN7p5pXyv9e5yttdWmavG9AhCCVgHaX7JUPUbQ9pjCv1n5PqPxJYB5SZL4V9fvv2fHZuNkGwuNfsFESdmmU",
  "key10": "57sc3985poYrLo5pp6T5TpoUBERVs9CfdbNJNZvCR4ocPgWg3quHyFmxxf74nLE7mojj2sqzScAL325vnn9MwPEf",
  "key11": "3RKQaSSVDXaTnQGmwUbRkUtc3aL8hM86BeDHSMgK6kDMDbBiDZxDQSR1AyyXqHZt1jnJN93vVDvhFoAaPkdqagBm",
  "key12": "b1FdpP7m9fUwgKfDnazTNKNZqh1Nz8sJR8qBC9YYQMs1w7thZhTV2bBNAAch1aKVKz4hGikoezeWPenRbrFMTNm",
  "key13": "2imRFSEy1WRaZ8vBSb8taRZWW4Lw7tJabTWkeB915ioeEgQ9ALrUHNPrLy9Jn1qHygeSRYkZxK9o4mU55sbNiYGD",
  "key14": "2P81ceyhGJNFx73Wx5D6MsdYKT21reuthe5FFVh7ua38LPYx1SEsfWgit1B3rz8RCLVi7TozJJDhhJs6Hbje4Lck",
  "key15": "2iA82b3q77xStZhEydYkCPx91aPBUhnrYK4cHtnNu4WC8TzzVL5xn5WrhWk2GsCvkoaj9fvrfwMe7memQ4UgS1Ny",
  "key16": "3ta99wG8rvK64UpbdkUZu5jD6Mb58tftuEPCjJBRFLQoUuCyyn1vuiV7xbaTsb7CsZYNybwYULjo4pm7a9LNQjYo",
  "key17": "Mo8tDEemu3M2QdFNJ8n8zu4fZ2xbth6o2v99JPjtkBZGJxR1FghVNZhhfbMaU8NmzMybJuFbpMLnm36UfQh1VVd",
  "key18": "4AhECuB6VJvKGABwQbnJcGkmpXLvX7Cs77vxMyDjCBiYDx5uxVGHApfBh69LQ4KpUxHoxUyRdDSrY541gX1oxSEc",
  "key19": "273yyKWg4Zx4FvF4XDCv4oLmvYxwuwqXKJTwgCiMLinf2pnHHa2mE7BMpManfrfSrRDrxuzrLgqxW8t8X5ZYnzzL",
  "key20": "4UbtMGqewujCmnXwk6o42rygxT4Gqx3kCy8TAJcLEq1x3FwdjdBCccd6p4mvaQkGmj6zfLFvoHn7Z3ZE6s8X9Pen",
  "key21": "L5GC4JeDf8sc4tvEozpo1RMKF1UZdNwAFdmpRyGLGeqVwyqgAVreX6cYUVUu1mhm1bEvp6UzqX9o7ZXHcMa6qsr",
  "key22": "35KeEfvSXDbNsz4E7gvddHQMA413w4iZMxhwqVihZCatbJ94sfzK9tkpCUhBr9fc4wXd5HGAJtdtZaqBAsyeMzna",
  "key23": "4kmfbjGnDtw5nusVPN3Ct45Cr5gRpVtTYGAkPVkoqhNLm4ByxcURCwdg2o48Wq1z8GJWsEkSzkEyyKmno6FGLgWr",
  "key24": "JyaH1a4Y56VhEo413maJkMnwzVCrM72pifuJSP3cnhTWR2fTu3mz6FszjSVhddyoKogypK2FAVkiRyH76cbAe42",
  "key25": "5Dmo8x5WUj6bZpajC7AW3m8cPNijFHYEeNGcUXosBiX3HyF8hptgVU5mZ2okXqXy3H4oE5bmHP4tBLNkoXhmkrYd",
  "key26": "4KKeirHV6orhRFTVVVxQU2E98yTaGPNpB6kfoWWnPaT9Fvo5H7TskYV18Lz3ePybL7VhpuDMcBsQt6i8Bh1FAeRs",
  "key27": "4grmJwaQv9WUcEowp6VQQ8u7qZqnmcCyeLgy8Lbji5fKdW7gEv5e3pWF2fg7GDur7rzQFCJHC3LhsxSWVeh32erG",
  "key28": "4PKGtULBvTFEaFKGU2416vQDk3dGqCK583DKbYWN9nXCtzVYrk36bXzswqZhLTqEXTovsMQ46LUDARFEw5rkyLDb",
  "key29": "y56ziQo1mbS9mbi82RnqJK5YqTcT3C8f9P9Wjp2QSqnAbh2xgiMQFXd9ZFc6Dj8WcHADyqe24fn3LVMjdQvSiQv",
  "key30": "49WmgE4AUCnWNvGdCSM7i8xX1W2VWDb2gnJGmkpqMkFsEvWa9GFmiDBNoScowa7JiUU6XXE4kQ16ykGDwWgcRvTx",
  "key31": "3M3gPQHTDPDMDEV77nWVXWp2h7C7yPscWSABkg7ym6WZKtTt3PgwSQUrVpfjg5guUJ2fTwCwaMJNMaZHjkBuVXKf",
  "key32": "2TA41tY9RkoYVS3KLZXg9o6iLLyfmzVHca4nGbF9oDY3tVAJqUmu5C8Tr5HYFY2CDB6wN8S87t4RgV5hx1SiEgYn",
  "key33": "3f79hkDQ1zyAqiMqfearmHVQHRZEff2b2RbojPzqeCjgB2Xhkf7fMgmCRVAMK7MuauCX6pU75E1FKaSHwbdULXyg",
  "key34": "3L1Yes14cC8d3pKDvtgiHmeGsoVQPv7e7KDA9Bc7942L3PVmiKXBSLAHws5abNFAjq9HMbmsaf2qXL2y1BoMKZ7Q",
  "key35": "58RkMfmWJermuEZPmUN6CeGSqrtVufwgqZYWLwCg1GtweE62BH5ZUKFV6FYprmuiqgS4eGQu1MS47TgHFqcgD1Xq",
  "key36": "5KBsMe5J1LoZVjuppSo2muDUuXKcfdh5oWvms1YVvA4FnrS14Ec2vh7HcLAnNYu7qwCyZMMpdCAN4RB4b5AJZnRL",
  "key37": "4An5bN9yvHwApPysuWwqkSJX1hs6t3TEMAVhcMrf9HfEHUBurtws3Z7UbB5gSKUPT9S7MANso7KXdCvQx35PUQyV",
  "key38": "2TnhZZku8rkPXGt4JPitXh7Zf3Kfneq2dpw7QU5b6kH1aUFU1KiBArx53HkXg4wvUmaoYjnr2FSkhCbksNbSRmAQ",
  "key39": "4CRQWMexL4tb5vra91qXnzFPGPpBfeTfVpdNiSvtXEQZ321TooSdVLUMAioNfRnSV4qFxDTmYYEienSXJaFMPLpU",
  "key40": "5MHRDPgfDg4vHFKfn5TQd3LTNd1hpkwE9rd71od8WBrFy6iYAjW1eNJcoDG7Bi18A3V5U5P3ViH1K7ZiSni9J7pD",
  "key41": "nMv3HFNapntgLUn82rGAn8gDLUpvJjZHdKaPLUhjXy9ydf2fWathaFMY8ZpZu6iMi4WXfPJrDseXHxxDUrvkURZ"
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
