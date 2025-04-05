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
    "43vm4XPZEZX4Gwxb8Ppy1QPbVA95qV8VVmTfKBoyUB3T738AaKFzPEBFtZvbJs4h9rt2rZY9QTNBTbhJ531qkLvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FKvPYxtCS6iRWZ4arQ2Mitce3D5XQnfW2wVpiPMrqyFjj1Ly9nN61jWo3YmSkXxSabT76LeibdhCjofR13y3Rvy",
  "key1": "3RB6cAHzvhZSzxj1HpeYJD1H6Y3KEAE4SxjGXkQxFBs9ynsBCgEiFz829y86Z93KPoKsDjHtkeAMsrXrk9dfBFTf",
  "key2": "514RLTjxJY87iV3x2frKEscsY6yCwL31mLNKJ4KLABPZG1Hm9hnYThY234Q14pwP1iT5UGADRJkGbNt78yRzFhsr",
  "key3": "4AHXgWcRzYNnM7sPaR3CVzXQj7A5xQ8nGtuxCh2fXsmotMEBF6XgAXJ8i4MUhxSijCLAxmVL6RQuFJJ9k7XNFLcv",
  "key4": "5VmyfiRr98MrNGiCa7S7kMt6HUzjsCHze35wD8EwSk7RJHtQx7wwE3feZcTFrG5akGQsj59LSc2n8nqgkuGQVF8L",
  "key5": "4BEAnjajYTe1NAuWY5oNLJmUFZeEf69m1CTH8utnSDVEQJcuexLZECR4s9sTZDkCtSjWyUsraSmy1mHLaqrLZfHy",
  "key6": "5eqiq8wfmQKuZDdXy9jVnk5kRTHNaVYuQRhmH2dqcgNur8WzD163Z3ZdhNrzeE1nrbHEdEuarQ8mDdg4T9T4UfGG",
  "key7": "2XHwvkwzsqBdiHXHvxJ6aJjQNhPaTCgNUFrcMUvQLY4rLtb3CjHHGdKFEeqVVzh6myWiwnKjGQGtqVPk3S3Rgdz",
  "key8": "5afxVWXKL5EmHkRLvdMzmQXPKDWNjq2fY536GheM4ahGoyg9m3cwgk9PHjZobig9HQAMxejnHPAPX1Q3eGqsYkaV",
  "key9": "3XGEuhwkW6B2ceKMtPwn8TNWCaBUMF1Z4FsrFCe4GYS7YN23NrXUiZp13V8pvEUZ1uG3nPkT5Eatbkjf7197MXNH",
  "key10": "5JhvEnPmhN9dnu4fc1JAAc88TEqZGJNDQdnWCZLjzBjmvYHFx8JUqxuwvqnSWUWUowr7AVAxJyzo4yFcTAouzopB",
  "key11": "8xDgqhs9KZv78JHtHMmbdSFLGkzMYX7fV8S82rLuE2RQAwBercpL25iw5ZnrFEAhNS7y3F3SGjtzQa9rWN4cn3R",
  "key12": "rDzDqKyvs4t2mqsv4ygCg3xmydfCMiyFRaLnLjpqgaxL3P7n7AtsDbHyZt3vgdmZ1zbUEZY9U6KFtJQr65xVAib",
  "key13": "2d8JbEVW8PkgmomBnsxhPVmurJ2Sr233jnbp3AMty5Av2CUgyVkZM1t9yS6B2JNz6AFcTRKzHRLWWkEVnJ1a6idQ",
  "key14": "Ci1f6RoQXVGaNQosMEzDuDhLpW2xDhJVUEoYuDPxkRJPxH1TJQnvPN5zHySJLPDDefRN5FAKRWVFgzSfMrLFrNN",
  "key15": "2nmUPaeMBxWCU92L1SDnTAoGRbgPANytu2Uny2w5WH7JmbtYFyH5wCcJvrnd9pUSkKvkyURJhijq46r1G8zUxFsp",
  "key16": "ePeiosYz5gZFAc9UFQEcsDvwabvqMNMDz7LQ7oLiGaNnEQM5J1fa3weLBZxctsGifXHtmyDUaDmZ2SbqokupXfX",
  "key17": "CQU5tVXP79Ra7XPL2RGsudKnNnHBBDhfE1UhJk3Yn5S7iZ1qKzrqr9cXMRRRhnpybHaBZUsXFsgiajHJVXMtpNT",
  "key18": "5VtqFVAWqdcw2X5qM58ct8CBKU8BdRtxmEWyMh2D2tEfhjnu4XkNWnmQzFfq9hVpeA2i5TQmoWf5PgS97sZVDkq8",
  "key19": "3krP1XbenFapSxRYkr8NtTmR1qeoxkRoYK2ApE9hbGUx9e1x4mewLx5WtsUqgcwHMyh1boJBabzM6qWLxYRSKKVk",
  "key20": "24LUBcYcTzHp4HeXiTkVRtfd4bDBceXg4huYjJrBXEMjGN1XLzxWnF14QkxPnjjxUAXuGwsRKFw735QdiX624HUZ",
  "key21": "3yENLywcsku54fvZcz83yqDqesFKYjDAyfMqZ6QdD9jRCLJJJrDaTTEokrSR3XWKGxTE9SGg1p5AdB6sjQywxEpF",
  "key22": "3u4s4kGhVp57DX4iYrxdGesnye6rb7aeKCiSakq46rz6nc1TG24jyMWapkod6zRsjeeTNwrpbhn3DmfyVPJhmM3v",
  "key23": "48DnrcEb2Gvt5gvz9Aak1B88kUmcTryHYV3yXJxqbTBgf3BukTtB8MrZuLidTnRggYTNhbChg683sPA2Zi4xcfjx",
  "key24": "4k3JHMLEkD53e7fsscX5x2Z3JhBfkVSy5qN89zFbHUX5q277v6qEy6sQMvuCyGC3MXcSEzB2r6egG46ZLkrPuNAU",
  "key25": "5uQzRvnoKw6ZMAjCtxHbta4UNbtz21yyrDHDTbDbWXxbYJQVEYeBnnkKhG9SnpbXe5gQ8zjK9pHXfXtpvWzorVgV",
  "key26": "4horUag8GHvvmdN8skEnYyTxyupoFBdAgKdqhDzwJ7hYHdc2Ffu6pevgKFhWPqjaefaXbR1t5XeFbs97eBPnkt5s",
  "key27": "2YLJxJAMA6Z4Fgy5e5gz6gWq3mhbLHvcq2x5HGbmYz24imHGAM5FawRyMB7CUR9nk7iFXFDxXnKxrYqykyQMEqrf",
  "key28": "4Q7fybxgfhjQBKC4hdMay9Byq9uHUPQejtpQC8ChixZEZqunN6aWrqqps7xan1fC6UYC2S2eSPcBSe3raLpHFHtk",
  "key29": "xRpwdBvnuPzcgJLNqoXmwQX5k3MFhjNdU866mDXE2WFmrBaaJM5JGufcWHftQjs2gnXq6oFXBa9PxWzDcutQ9NT",
  "key30": "DU47uzQ9BwJRz9khg6YtUFoySqF9FGfLRBn2DWAMsLkD3YTWJ59nhUYY6DR6UkNQHgHr7rNSHFLemKbCngQDMkV",
  "key31": "2kf8LRZ44pUWnZaJUS6L9BA1sGKeUs9TPjs81i25P2gusWh71gBvn71SousCKagvW5YK8kLUwpqR5CQdbP9A5pNR",
  "key32": "4UBpe2y5Cih4rLRjFk96mfamq7faxEzHtjyXuo1dP397RtTh1akiSwb2aUtEfgMGmqUDnR3JdDUxDGkTFtB4y1k8",
  "key33": "4ycFA4CmpofpWnFsrwehB5gNiH2aSrzHdVfZZMZxy5Yf2y1ftCMa8Pu4453ttwX2C3UvXF4hcLBTYk2enjqQtcoi",
  "key34": "4MtG5FwGnJTnswE6zNfLSQrcnbHBWbuaS8HRn5uy7Ps1pNQih63SvezjHDfYVSxniijjfkYbTjwwVXpr4wmfrRdr",
  "key35": "27fUKfPHLMH3ABFEu4a6u7EaPWTx4bV6sBhyLfr19rT7EQY9txwYjUDW3uCLo4QphpJaG3MEWTe4JQrfvc7Wad1R",
  "key36": "4iDbMC7A16ZWBR1srckAxvFZjtLYEq7gR9obVspNbm8Rj1TgqVF2NgNtbQ6MKmwkzc2KcU4aoJHCRhn1TKtyQVCy",
  "key37": "1nQX4c8zNXHwunEgNyNkCBbXYiof1feWP3USUiKWzMyrTH7n226XsFzuUSDV5fSjTi4SmMoxrVeSVLpEdAAay7K",
  "key38": "3b1MSwDa2Bg4YDZJBZAjskXERWZ5i8SY3pJEVBFWQsF6HDANGmQnzarnuopC6Dw75xUxx1RUDczDKoyjdNSztcjm",
  "key39": "23KgtYTTHDZBStCcp39dVwzAUDvWJknCCoM7E9UndHR4iKj7QwFn6kMxXXMtJyh4mSVdgPVWpNE5kzhLJqk1EFTk",
  "key40": "2hPMTQxNTzF5HrS1kDNH38oB7rc2CirtKJRq8ffav3zASbQuPQJsChcrsh4rcguRFsTT6d9m5bzyUf4bAcTP8gbC",
  "key41": "4XzH9K8jA992HxQoDzkWbWo9gJco9vr6Bmugx9uJ41zgHvAstLj1KA5U2thVbK7uWyn87hZAGixk8rpMJAvKrvMA",
  "key42": "4sUAFpPHvbrnLDjWpfx29eYnubSrNY3EPta6oMP7vmAF8RnFYp8qLRKxHXjy7PYmkWhPYi1V62kgKTD31NK4Fcoc",
  "key43": "42H6qHipbBHj8wrmSpoCHwjG74tiUTD7ixMELT9khz5t6xCgqQ58ny4bS5tiZqShBuDx8MHA46GffHNjvp6LgyLX",
  "key44": "5SeC7bWjg2Jh9Wg1ta3Nnrgq3wrnPvQDnTd4vHTnWB7V3iXsksxYotYawE6k4CnmDuwXPVWaxhcjYD4BAMpifPRz",
  "key45": "2Z2grXhWt1QaLjq6cDosU57K3VNiQ4VLNdn1urUZXo2EvTtq4rpnUHMhzkv45Xs84v35xpvQFUMEz2CTxiWsCn64",
  "key46": "4Vi2PEEiJUb9XDk2sTeJkzBMpdMTDpU8HvaciQ5R1vsYKSDZVL5tfEcNb3imxW8TihVqs9odhFMKwEVuyzNwSb7a",
  "key47": "2UswefhBxsoSzf1m9oyzTeGbwb9mXYek3ZNENUB8CSiPVJ3M5XmMYaxX4bcPMdEvgaG72GqrC3CATUApu59jLiJF",
  "key48": "bG9q6T4iRNGGEBeBsdNAuoxLrhF5bDamJk5SZ17dX6ei1iAa1rNzoeimZqW1XgkMKyfDtUyrK3mYkBKPW3sEZkx"
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
