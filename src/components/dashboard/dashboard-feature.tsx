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
    "8Dtz1BFyW3fiaTdPDuYGprfuvrT6xECxEhNXLVqMTHPZefyvn9G6czdtnP7yZGKtXeHT77MH4o93dM1WrruHJgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HW7qPYVZZYAxYinN6YXijpkSrqpZcZsJGiUnrw5XEtkC3STskafbi6aYFacFD1X97hddw5fvG9AikAyBkRoq6Ki",
  "key1": "hwUKUq1bTBDGFsY23nQfganMczU5f1B7AzcUMasdxgzTiayV4hLByCDdPiT2dJG2BKSZUCQbeZGiVnEopaetZXa",
  "key2": "3pYDeADHsewwkZtkhvH3Ev69gxRcBjp7wnLCf8YKULr3Gk4iHr1jhLiDDBTiEWcTwcsPWKjmPm6MLhKKbBiKne4q",
  "key3": "WXWiZTVvfzWQQ3jH36nxAre7krtn2jqqahbQD4p5ZdsjMLwf83ajLVZjmPgzRpdE4Gmpwjj65r3dWd8v15RNWvS",
  "key4": "3FfcfYT7AKi6x1ftkj17VsruotW2pj5QUFNDkpwFeDBGS7xookETZiSL6Ezs31b9KMrCJhN52vMmgpbNZGdzmtBZ",
  "key5": "4sYKJ84LTPjHLqo5vvx7fw6GGndmgBTxP1kiKWix3RKdBTCMmt7VU1ZMM4vDAYZTzSaNhCcLZxK5qZ1ZyxPChjV6",
  "key6": "2RKJXDc36rs5E6E1KCk5P9TdK7CAxxmDKdeFEUSrwVjhx4HJbuUGvSrJgeL8kQdXVV1GGZm4xauRi9brp66jAqVz",
  "key7": "5A5zuanFUBJmuQXr8m51rbmVmrgChuyeWGmetHGL7Q3fULXnVDNS2svDUFjtDyJGkDjywcD71TABLPk2zaWxK243",
  "key8": "5AxLg9sYyLQadRn1KDiPUWL6q2sHByRJRUDUQAp2PtyFMChmUVEFJ2UDehFHqVSDA5MpYyu3hyuZAtWk6Yp8omeZ",
  "key9": "23hVFQCHWeYJqwRLWQmjaQS2caSjgwg4iiCHX3y9yR41JL24ZdVxwNoMM6aaAvgRin8osxhqXQkLNZ1Yom6zP8cK",
  "key10": "WnvFoG5oj9APKVc2V9AjXGRUxwStQwt46tTonQ7ZHy15g8rzjewPAVdxgvFjrEu84vk7WrFX3v7azdGTeXGm91o",
  "key11": "3LQQwXL2JaRFjHDVfdLcaMgonodgXdEQz483BNewqnrdyxsrc6fRuYKi6229u2MYKurQsQdpEKWF422iM4USMxeJ",
  "key12": "6dnZSsHMedM3Hrsk5M4PMEKcB1YpUNcnFruS6DodFqbH3gYuscQNYwzh2AX7PEVoFX1opmVA3oAKw4JmgxApTQS",
  "key13": "67Z8TSa1YRnWe3hwzmov281URADgY3cib3uRzt5dJM3YXWExP1sRQhJuHkNqxZgbYyq4hGJ7NEKqo4mfoM7WfP9Q",
  "key14": "JKCQ5gB7F6kvYqEJAMkEajuatcoDSX34T5PekHdMZRmtzPAvWb7F6Uh55uSViTzQZWaKmAY58bXU5Vta3VHwCNU",
  "key15": "5TbDTKaRqWFuTxHEect4tDxQKr3hSgAFb1T2BtjcxVULtUQ71b5zn1QSRBi5MrdU9ukfESqumWUQcyvjg3mwXYCe",
  "key16": "3hrkNW9zkoja5oVLimzwiiAtQRuEhaExx8jxiwmAfZKyQ94aBBVvWgiGtdj4ofDnxsb3k887jTQ3PFXHxqHmDew7",
  "key17": "2mFDqKhzEfFWh46HsdUyJAnxu9LxcnEz988dinq5C6Hrcm22JmZSWFsqjt2Y3fBKPCj8ykmpz9Qh4LtCv5BMmqZh",
  "key18": "4w4NYSy87xZmuyNtF59qpRV2Dey1tRPRCmKZ9qCbmPxkJhMkdD2NACiNmjgjCQus72pFH5wBkMPnEHmkbRaCjanx",
  "key19": "2tt7vi2Mey2i2cNss6MovmgpzibtTgfFDvkjiEaWkS7ZLYaZheAnrmvEwM47iLJsWpPtUq9GcycQggcqjZh1kHk1",
  "key20": "Gs71RhV2wkXiN8ja3ihsfWF4UtKSHsDBo2QkqviBfaG8eDJyVXbZfcezpG5UuRX41xGfah5F3kiMyv8UEXEKnS6",
  "key21": "2eF9kp7JmrskGBwpwKb5X4CKoat7hZkLeEpKp8uRb4TyFy5gP36yaJ7MTaBtLNFbLxKdAveLx2ZMQznFZpMih2EN",
  "key22": "NmMoxcoUswC8GEu4gtVSmBhFFryxT1eStgx9fs1bkhhyvKCe5boD4zu48yeDdkzrn44Z8cbtg7B1ZCZGpxQWRHj",
  "key23": "2H8NsNWoAsbnS6dRBEjtLtRtSK3fJeUEdm8pkQKqisGqzj1KyrLeFLZxWK1kN77GUsLnorfGwPYTqo8D4zfNWdkx",
  "key24": "5995NC5gtcAtzBtTPxPSpiY4PCrKYrv97UTfkAxpJg4y3HaUxkTnqvGg9eJiVU4ctNkvses6ZnhW746eS37dysKC",
  "key25": "5UgJNAGhmv7KUTzqquZRq15kFBY9j2AKdyTjWVqv6YGWMuidu9cBVWzzVbGr29btvePYZpyjazDdJqKjPFj9R3Yb",
  "key26": "rKrPrbivMJqV85DkPz612HkexvQe36zJkbnHrGX2QP6mcvWyK3PkLZc5i76AtGFedf1WVFsaGxnE3Nh73fgPL9k",
  "key27": "3Hp4VfWEmSojkNFv89UPB52DKbgRJk3n6o85CYSNFTnSkhwrAwXnD2h84Hz15TzGtmLBirkJyq1VFVVeUUGnhXeg",
  "key28": "3TqEkfranEb7ykTAB5DVMBSw3dkQRHb31CftFnJGZF1EEPT2gYFdvMpPZsvojABsyYbFdredbmHnJnsfVxC3mVeC",
  "key29": "5TcvcR94LM8A1oiDRhwVzvcJ7QJ594JFKBAKtDxVBP1Dg1UFNABWWpr8gypWeuTGnLcBYCQS3NRPCox2GibqKxeU",
  "key30": "4NEFwspFQaegCgp9GGjKfSvKG3woBxRR4vGyPjHto66uS3pMDLKgKAgLofifMnhoTvqVdToDpGiUxPfU1SLbzmks",
  "key31": "4bwfFZEFHv8KLWe7aiMgdbj2zZ74AYUfxDNBmrC8iFcizsqQQ5BtS3aHAnzG3hznZinxf2jJpKhGiWDDydWD3xLi",
  "key32": "3nxiPnpCvwZCzCL22Ytpbv9w7cmiY46uietrBfmZv2btpSN6Ft85PFx4MYoooDSoUkmDEAGBmBYTm4wmhKwxa1c2",
  "key33": "4pU6x76uAx8S59F2MMq2Fw32NveDVSdBKenonwymPFgdYoYryEevMcVjsgRtASs91JkfHoNxKtqQ79Bpf62UymXh",
  "key34": "23zgmoz4txqvRSPyJELUtcsEDDeF4xbpxUyN8FnRKorRWzvvpsb75aKVUqUFEfo9on1UVHrdf7HcpvcpacxceuWo",
  "key35": "xmTuX2GFGf7irwmuf2aujoegcV3zjBsNXEBKzPoCok8uR2uyr9wkMKykGURXcrYFr2bFoDwUpa1j2kqNXqPjPjG",
  "key36": "5NabBPatjVNy3u44GVr7MYmg2oVzasmACWaSGPKgdaBDZx7qNxD5Ji3CUJ7fFiX3zhwDpmKqT7yVKWUafSLB9L5y",
  "key37": "5wdnJnBFrvJWkqqHaktietkARYoLhbpSx6YxvTuxwpzkYiTHuavdQne9EwnD53ZzfYq4UZRrRNoozPARkD9ZBezL",
  "key38": "5iNCELM49ktgCZNSDfqT8s67Rve4CRMUYwgG37N1RkqoVHXJGh7uoyhTPWt9rw5VFwZuokHABNTV8B4M4opgx1Dp",
  "key39": "BcrVtQ6Gpn2jqZ1sVxAn8BdJkhM9q2ibzTLcZFDW87gvf5bR2Zt6BqGfdaqoizbUcDZYGkfDtXzj4CgukXSK67J"
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
