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
    "3HSgJ36L2MSJGV9B2jw8k4pCp7XuTCE8SWYzR1rAYbyFYLrmdYyon2X7bq3Hr9hc2bknaoce6qg4Cey35ZxmjqWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WJUr2xCEsZ2dmngxrf1LTawFXoJRk39LhUjcnBL5SQ59VebgHP7YFyaFmRRpEWvzLG3Gvatxk8UuiRpicsQsAEm",
  "key1": "5X2XjyZ3XpkDTKQz85uEye4LfxTB9DDn4gmDxDxw51dGZebwGGd2uT9ydqUTjZHvT1dYBPaRnzZQQeNkyWu93Rzp",
  "key2": "TTZNxvTMi9JaJPqE3bmranCSPHRNaawGmButVN9WGo4vKZX3Nb312yHprkbWdXs3yt8RU4YSfYd63Qs9P7yRdKZ",
  "key3": "4yqwvmsUAesgeXNR4dSWkRwXSHbgN1sgNbFW31tn2NHhUFWP1vn7sLTa8yzXP2bj3yWp3zNwKx6N4UCcWVMdJm98",
  "key4": "2V8yfAcNZPB6mCCKva7HCzpzmfQ92vJkLqoJ9PTFhVrzkcg2gboodV5rVpB2RNdWVrWK38738ZTyuwmvZtwVzvcW",
  "key5": "3mLUps62Jw9ftrNmynFvTd1PkYz8jhDfgdZJzUM189ZdkcaYsVR9VfXe4mYR4oZWVTRSqhA3EievdGhPpCMSyLYD",
  "key6": "3ZpPPJ3bTAnDJw3XzgMAobeNJD4iQNDYnvMwSo3ubxXHah3CNkHSeuPi6TjWYckL1kuX14AEys7A1EspvcA6N1Nj",
  "key7": "3B6z7Hss3qEbEfBXMRVhar4aym3UYM7a1AB9uSN18maSGjemw8itkf1zVj1cvpotrxzjNbtZVFYuwyaqD89BF8h3",
  "key8": "23EoV8AeMq7QHteoqqTeJoEK3Rm5wVucwzzVegj8rdeG7EviQqVLF2KK7mTtNmSzKx2cYDqbUkuG6tRMG2EgVQqE",
  "key9": "2qUmhDCHA6XVLZ7nG3BEERyrP22kGb8xCGTTLyV2NqKra6GSUKNoCYEZkQvvSjpHPYgAR7SoXRmbc6WimoXSuvMe",
  "key10": "585X9gNKdiLN24hodMWkoytzDHdxu6rrAfCSPVksn9UpTZxp5vnywMwTGkgfvpg7c5KzY1scMg6xB7wsXvaP9fsK",
  "key11": "3RmaCHKFyyg5Y1ADi5LpaZtqrcMnCphFotc7dW8SC7sMQ663dGSLTafSZk6XU6EuhWKWECfxwRtoRb9nbcRQdsoa",
  "key12": "3qEGLE2JfqFyEvUQBhZ38CGJto2k1Lrk3ofrZNt6qqpZ4EjdaZMEbyFGPJX3JqWysUgQqQiY38s3K723z6ekkmZR",
  "key13": "21ujJuqKymHy7AT8uTyd3bZL98RzHkSjProQcTaEEx34wf1VspcWtgtBHgAvaMZMy6k8N1PF1VBZLiYjbsSpTLbC",
  "key14": "2bHMuusWQhapVcR8rbWZnKgoHnQRRuB4kAuvJvUUzZwFDN1Y82UEmUMQKLwzBw7zc3rGzdzxTmf4xph26F8pFoEY",
  "key15": "KH4YRoxQ2FLswadBEyv1F6znkbPoCYLHZjDm1kWSu33nfj9esGTh5X1cigYb5JB9hTQbC3EEKZfp1ssMCZAdiuG",
  "key16": "4qhxW7AZRUjygBMWBYzMf2RLY83f8EqBM1iD6uzHGJgnzkVY8Ag9aRAecXE7nBc1YKS5LHSps8gXZPGntjvyYscx",
  "key17": "45Y86cAR5hSt72BpzRWToVD5AsUkRKmpNToxRL4iWo8QR7wLeNLpF2qb9jZQABmLoYKZ7dzZ7U4zaX12cvvzse3d",
  "key18": "2cX1ytHYZUaFYkeX7fA4yi3kUtq2gJKAvn4harDfKx2vPrqLX9aZ8GvQwRf8AMhx6Q2YjxCfxov4MzSaMbLYVPRb",
  "key19": "2XbumJiKmjazzu89dUNjPUZs1HZdMa7RfHSFmi5VAzPyy89yrKQ8aH3nzc8pAzE97vGzJzj2LJFQ2GgUk5EvW5JE",
  "key20": "3cDCkAtLauk2VynM1Ws3isMLmKZJ8DNUUxaAe3wzzzz2oD6NGe4r41Ku7SwpNRprHMW85uiDTHiLQMN5htHuhdZx",
  "key21": "52KQ6Aie4dt59hd37tU3zXhi2qPzb3P2YrmKiHFi4MbHPGPT22poXYYQHDuiPftUefnowauZeCvX3eaiY7MQpVrn",
  "key22": "7fRSPowesptT2FeFPymsvc2X7M9SJWHk3AbLMEr691Dnrajd5oJb4R9GjSDWcUem5dDf3EkFhcoYVt7FMyXkgFJ",
  "key23": "47R8hYoUV1AQAYUkSEndVx8QMcPhGB1XjK9KYq1mDASw936MEdAa4XEodNG9jBrsteoPbvjWrmPgt4VF643eipns",
  "key24": "5BfH595MisikK2W6jiENena5RzSEdvYiHBQoAny7ngr8DXSSCMakRqJmcmQFEGAQE7btRnZCgm8hknByBUSpNV1V",
  "key25": "37ZKe4aL2EpsXucGrtuptTRg5aySDgBHV7soQADSDscut5J7x4VtLgLXmDQ1r2iZvh8G7YpqivqjdZRiwgtAxosd",
  "key26": "5mJbqc7JeiSKsJtCZtwLtAtf8rVBXtt29zePwRzJfoB3ewpd64CfjrXCx5LbxzL6kK6L5KxBMGDespgE4ufWaqGp",
  "key27": "3F1qmE4UxqurcfRBDRuZWw9a8FhBgK4baxkGw15ase42mBHAAxqi84FJSXCvfrezQrbJNuNfP4B61dGgtPUSf3j",
  "key28": "3Z9yCqyKrDonjzf33oggcBThQoiNEYCmL6Y3LUizZykJFHdT38Fzok1Bt5cduRX1zmoNbAdHSrNhPdhHSKKZVkTa",
  "key29": "Kwi595UYreDnbk2bZs9DzhMsthFouyPVhRcLkRGLUijjTMfZzhHRxpiynLsPiniuQZxnzS9zjiLdHhvuvMbEg76",
  "key30": "3CHuceuv3xekSnh5Fi9aEuBba1Nvk9KHfrPhgekB1bed34qg8CrmRycU16CDd16soMk9W1Zj5ypgdgMRdDWjm7Lf",
  "key31": "4Xsi7nRDMznTS6WCGXyJQCxSbt5ygCSeWCTHrYYo7RfnuiUhMsr4wMunMshaCe73RVfwsPmtRcVjS4Upwd584ESo",
  "key32": "3MpYGLdRUxA1mRH1wUZVV4SY1bFUfJdx8PGC3yN8AQiFKm2hbuEE1KnoJxdTUi6Xd4PwBbW4QDzTYYSEx3QUGWUD",
  "key33": "3KvKmeHFjbpkjrtTyWnamWM5Hsdy8icj94sKWT8H6XUqLyzkRyKXeLHBXYLJFwAjwiexJRDxxgYW2riycJoNUknp",
  "key34": "5v6A5cyfsKJeaKEoAYnWPusoVPqdiZ4iWoY29oyrQ59oULX2wxRQFZhJrHix6EqUg8Zq4xwWLEGJEgpiBGisMQD3",
  "key35": "37dLj7EaTwee3CKQhz8D8rE7YYxaY9zfa3jcetAdrKnvDdCEr8hh8tf7iVxM9M5sqpuLz6zRfFcUkcH88gMGfihk",
  "key36": "2xo9HLYfkXuGWr6SUgxySzBhEDyb7woP8ocir2yeT8veSPiNL577kz9H1j9ERm4gt9icekDodAWJYQfdbUZiKuVJ",
  "key37": "25jH1kiKZZvhVD74SwRwxuVBrPvkT66Tir35SB2mW8MXEgN4YeKGqKPnDmMkzoHkPVkqmbtvBYUm1winexHJF9Ko",
  "key38": "WvN7wEq8typWLgQjE2mZZMhCafK4N2AbDGW4khZWufBB3X7WDyYpi95JpguLUY7a2nEsGXZrTLH7JcfTFsJKQAg",
  "key39": "2hjFKMAJ4oqX2sFahoEmzSFdN3ZJrJ5NBtaWwwuopR41EmBftMqBStdjRPXHDndKWTkEqSzSgdUgK5Em4rkAJqv",
  "key40": "2roYMeCPGVUofFQ6mNGx9BUShgMqcXEn63dhm2pZozEoAGuxxXNB8zNo7dVw53BMmUJWaRzFL7hNFJQuvzoWjB5s",
  "key41": "4bzRsZ5VjbW5ir9jNS8TQ7tz9NyTgrRpLg5mEBa43dPkJuYW9fjZREmGHqxnmfUb55scvWhfiQyNHpuHTS82Zgyo",
  "key42": "35Cvr6uTxRLPxVk4hEzXgKM54wjpx17qrNuE9AZSGwxFGWigwdMfJixLy5WR6uWrt1GmEuKocPp5RNdgB7x76w4c",
  "key43": "4Jb7Nt9uhvyUqeUQ1F7r4X7a4JTjfs3phnXzP49wHCk8WKMmY332eRDG3xp5YHUxaoMw4TdenVcwArUBUa6D3qjZ",
  "key44": "qyLAaRWH28aRdSHwscgwE68wASU7iQJhT4gvYaoFuDhJLQG2sKpuTy157HQdL5bM6HZRyqLNY5ELF2rtey5YVG5",
  "key45": "3yHnBb6ypFwV6weGRz8fRoUBqrogCuexnpybSwro1ZVToKQBS9tn6aRUZyUMDW5nERSZUsaT5LTfGRu4rV4oVe98",
  "key46": "5Kf2zjuc6eGGPruzavdiQbm5Je8R3qDE2mbfp1kQBVsxLW8DNT4QLkMKwqKPNjPwDuj1WfBuz7KyTsCWDhcMtoa",
  "key47": "WRiNNcbHANy44U7px7yn3ri2AuXZsJCzu4oazRkRHDd64waEsv8v54N8SepzLkwk7wYakbaucBykKoDxAVFCYWW",
  "key48": "2fX9CjErZKaNpsiooZJxJr97aoEvPe2tUBTGqsP15taHDV4UAhKVTnbtr5phpaDBh7UGJZVoXSp54jRYQmaHnSDY",
  "key49": "5dHEZyNrxAEQ2hazMn6ZjddU3y1E5ZEdrBnxpAG2XcYUvDo5uxp9zwiXS7kJdxVR2rZWRDWhChNpC2EhLfN9AZyT"
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
