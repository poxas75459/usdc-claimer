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
    "3jfrMup4gPniZsbpF7NCn2m5uwTiJZwZ8csPZgKahqpM5q8ZJkoDYEeeJ4dCkdd5Bczj1YjoEaqsNXgcJNQyNPEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AGBckwj6FRe3Vwb87tN6z5H1QGj8JDsvtXczKsFuEwHghf3Jqh2q31m7X4M5FGRStcBAt4De9V6fzsx9tkDtp9E",
  "key1": "3mgZUxhRCGhRKg4z4vKeVKoBs7UYX82gUG7n35B4cwphSku16xYr9R9gx1L23WHKAWhu6RkhrG3gfBnk1YDzAZVN",
  "key2": "5Rvv3WfnXtQVbsa3kbQwrMskvFxhEyYsu7GTX9sm7o6d1HY9Zt3yj6kLYtaKSUQhPnSuDY2yrJMuuY3fhFuUaWVJ",
  "key3": "z3zNmsmdd6qJkUJDzW7wSuciB5temPC3qkvyBmMh52TtyMYMdWpNt9mRmkMn1PNH3xLUSHAAZa9kfcM5WQQgB55",
  "key4": "2R5zHmyCLv5hfirYhnVtWGCXWa6kT1RcbAEmqiXdhV4ZJw4qpEQigbpBqVsdroqeThVcCATRa3DPX12dQ7g8vF6Z",
  "key5": "3ogrG7X8zdgtw1zQSEJsagd3UkhidFSukT59BsPUVAzuUgEWVYoh1ekHKbxAJMXxXL8896syEaLa8cL9x3GkXs2F",
  "key6": "2gA1Py2pUic17p9nRqNBa7GrWrQSU3Dx9gvibTJkVJCb5pUwKaqjaTaTrkT7tQZCAGqJuedLHpdUBGwKDggufnBv",
  "key7": "2wNTgKg847CmB8D7QR5TiLqu3v5S1Qoo9FmHHEZa9wtdCEi5qM7b7AjBJHqpGe28s53jJRxjKdRXZJMTtTJ41Edh",
  "key8": "2Ks5DBG2m3r87GJKT4UY6HGAtdVAEQMzRbgtKqEqpgh5FTkSJTiwpRDvP2pCoa9F9YRY19sHEiuAfHbKLr7QHY21",
  "key9": "3M5Lw9hRSf5QYm5mJbZwq6k6bKX6HEbM53rnF2q116frYJ2aZ3nBQty2rc9rmW6UcL8Kxjvd4tm4ZZ62dc8BTQXk",
  "key10": "4XU3YCduosye28mTH9BxH9BQ83WAKAxqZWJJUjua6DFE81hLUdTnw3uDXZ8nf3DZkgHnDERNe3XLqfUCfoHZFbng",
  "key11": "4EGd39hChJEHmRaXo4nKfSKek2vj3x1Er8t6f4ohQFduQZNAUyh356D1QwVTnfhAhySS5RbAEyk9fBmDe3gpMfZE",
  "key12": "P34ypERCeP8pMBb3pygrXL4vD5FKzeFFYNm5PXNXMchCWWVaDJNgtvXWUqMrZQnhFbRjKUHUtYFacznDbuPqUSG",
  "key13": "2rTUDu6wysj3iVTymZQfGRqAdhtEXHgkH8ziqvFJFJWL23BdBMD7SHj9g36X6v4B5sfYxM43cdZaQ9yr19TfWY81",
  "key14": "5Lmcv5cs2wpkdowbadXUUyULR2VyjVGYCtenW4qFhxoUtB3NXCLda5GMuzAKipC33WspZ7oAye3J1GgqgSVzBtEd",
  "key15": "3X1bqhvEJp8ert58sHp6Zp28Af35GeGAppDYQF8S1j4f9aapnfU9GKMzjq1k668cXxP84uPCHcFJ6Em3hsUJsZEt",
  "key16": "5oeX6rpyeb48Mr1hqPmcFYfGBUTkDzApiSAggLEYKFAyMM6fQCJPaK84gMMsVopHEVZa8WnQH2reymAWWYKvaMnL",
  "key17": "4Yw6ttNMZJpJdDPwAT7YVdyKWFbnejmfBoKnfZpQh3XDD91FE8vcF9t8B3jtM3Ng1w8G1FhK971EwcqSR4yuYzGB",
  "key18": "3CA2y421Y9CbcchKLveFtK4FSVaSuPaVfxKGfarh3euKGt51ZCfS1pFWbPvKeDia8x6HqfAeCM3YRe2hB42Zfm2p",
  "key19": "5MyKmzyb6Uz4PRDbpsnkatZ6xWwmYbVqit7CnuJVHRXrHB1ABmE2qrMAXF5Fyd2H5dqhQZvD3EPNaLgkMg6BexR3",
  "key20": "3E1FWJEk3dxwgufX6E2v7R7qa33y5TfzAn68xpHWYMrHeBRWNmA47bbva7W1mkBMMxCAT6sL7Q8zfCF83bdhRXwT",
  "key21": "3X4Pj5m7KVxMvuScc7JxuwZq8x1E5xowyYuB3RLWvoTfdZj3KbUWa9aByBsGfnxmcr1KLB3KjeBLX5FBAL1zSXbH",
  "key22": "4cd79oWtBf3nfsG18Pcd5m4h9sUqRyufvKwSY62TBcoTEmjo3veceezpVXFk69vuqo5Lo5Tx8nL3cNqiJuGnSCEM",
  "key23": "65JsuTNSDDmxmHF6Cm5x8a6edZEc2uwLGtyfVoWzw85fEgdrFy7H6dNLqttcpzGtnXxsP2173BJyQbpSnTGSiduL",
  "key24": "anitmMquE2DZ87q7iBLvhJvFC3CzZ5ahvpGY9YKxEWVV47cWxrTDbTcLwm7DJZTkVhgLzo2ZxEwLumJXxD2pnkQ",
  "key25": "23SFFj19mG17DQBwppcj9iiMZBeDYZGcVtR1tCcmQqL8Sc6hW7GzTVrF21oRpqZHJ4zGRVej8AbFvLqtmKgA1JcB",
  "key26": "4MS6D1JPG96Xcq17XQpS2CAhxQKSVSnZNF5g2Mc82YtRAwL7f2N7eqRfd7FCELuUYiPsGPavJLVB6sjX5DqE3eZE",
  "key27": "5L8vDuR4yU5SFgckHzHPw3kGxBhS9ZANFdKmDjB2oGMRqWfcufYQwNv71ZM7mR33kwMMeVGCgVw8TmJNY7af1keF",
  "key28": "4VCZrfSHN8wnj5dkXymKgqhzAoTMduqXHBhfQLvtA6urtk9irSeBnwKZuL1Dtu3tMste3uttY9ZVm2yap1hdDYRJ",
  "key29": "3YgsrWu1HhM4Rutici45U6gs1AeC7LsPkUJLKTx2P6dcW6DLj9SghovjqS6fUJNCFi3MNRMXNhSPGemXLRXPdNa9",
  "key30": "4SyzEs1Bx9zbX8B5or72MsG2LKCcMT78Ra7oMZTjxNcNNhMxNVT8iJnZjKS8FDWpCpKXvoBLkrd8wMNgXXnk1QqQ",
  "key31": "5ekc5Xf48ckXN6kVvvzteVpBnz458krFbYvQi688gU6DT2mmsSfAeYYMunMizT2AcnjPBKyJVvQKQ2VDHmGLpfob",
  "key32": "2kcBtzRiv5aJ7tdz4KoR5P6766iCoBLyBqDdmZQkcsX9sMKE9p5UnxfqvFbrs4K4AyQ33ij6yCstVg3jLGsigT5y",
  "key33": "4fEbthfCYHPy6Q8MmfMGkjaK7AjRb3uwoWr46Ke5aRqUZy4jb9f9kdKXSEJPue8Zfta4pieo8ptAtBsbpsZzqAND",
  "key34": "4NR4NfbmmPzxrHdhQFfVSbRaWRuiP45tRrGKwLQk3TUeJyxgX8oQw7XXPhByfck8yrq7QngwiDpxp5i6Mpc8K5RY",
  "key35": "2TW1Lf7bS4WGdaZfEfg6jYPT9yFgHcPuyrza6sfAhbGYPZw24KUboSvdAopH3jEDJNbVRr1Em1h54XcK1Wig4cnW",
  "key36": "5t4re1gxmmCQCeTwTt8UKduJbL6gkpKTngRnsDorAEVGyubnvaeud5B9JYs4NjEogKUUbSw9dCbQ2CYWryoCmsRJ",
  "key37": "3Fsmt3kdyyWhuKcGb1bmsb87z8tpXbomVzXLCkoQbBfJvQEsWraciHdVKoNMWSbrz2bZgxVYWrsFwkZEfQXvxu1U"
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
