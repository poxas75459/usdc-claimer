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
    "DzgUeMZRevDV6eyTUWVBApXwuubwyFsNvvdhFd5TZxTyra3gMenCjcmTCuPZBVTCjb2DJDCz7HAtC9Jy4Zugsvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jr3rjHrSVwE5kdtQfXEaaGTeF99dwX7AThArScNvXqN8kkXeoPET2j5bsfBfcPjCEYWBfeNwNthp8vBmd3HWy2v",
  "key1": "36ViE4BWcXjbSedv7NJiMM6qun5sRccLzseTsk93RN9Y58S2sFwgsQUNTSuaEwYWQaWJ1JtnRuYNvjg25NqvpfW3",
  "key2": "4HoCgWpbFJDfCY2QWWhMTCtDZyiANGuen31WYPLzTiHcPHdsiRt7Van7PaT6sDUhTQ7adkFinCKRnu9AngTy5RWd",
  "key3": "4e6yKbZZLe55jPueo3BtrvaEySAn9T3LWrXLmtBgPko2e63Wkc7g2SyZSus1KYX6zRfcwPjwKwaJCgr4vPEo66Hd",
  "key4": "2o8jmxHGz7Y9yo3ZbBNagQPvQGp5CRWDJrSXV9AZ2E1VMRHezdFmqqNsTK9mwPqMW8vRt9ySb7yUYoXu18atQJgC",
  "key5": "65QZJZmnCuSt4au2SWPYw6VDkLG5yLZNmHscAz3WgCwALtdVwYxQEKhcsh13rEvmkBQfjWiGhwp5TcMi8DcAcoNR",
  "key6": "3wwhfBYwHKEPr6ZSEjeMj5XiPSmtCiSAYVFyXMgXy6ghDLURT8Qnm1FBCY9FUbpzue6gYP9Rp9afvKTjaj6nHBbA",
  "key7": "67jNNFnzBXBr6VwYEACantwrdVYHMa2ZCePr6apf5JYc85j47FvkTuGSJY3rm2rKzx3hTFspjfGUeof6G22efNS3",
  "key8": "28wqHWjZr18S3hn2Xa5fwUVaJGr82D7ELxSVTDtmGz9E9AW3v3NGx8FqQHJbS1A2yEr3jn42gBhKbnFx7r6iDDfp",
  "key9": "54PcfDgfNpr7wSGM25kUcm5DouTCHTA1qaVjEKBPUxyr1AdShGBV49e8EoLFwXkEoGnqbCtbEt3rLMYDrSwf2Jh6",
  "key10": "3LpDU6WgTntj3dGtrRrJ7XUutb6eePFeQasMGZWeQT8LCEv8ZvA56FNCXmFZEi1zpsizigudg3qeizAnxU8zkU5W",
  "key11": "4Wpoth3C6iExfsbVi5Bbm8u44VFmK6Ri8iQTHJkfCFcgzAfbdtqriMsVyfvC25DohG7RSCN5Bsa8pgKW1eVua4NR",
  "key12": "2i5EveEX4hQa46fxPMCBrUo7aiXmR87KpTJQ7sinRWRjSndDo23UUhm3QFpMt54W2hPUUmD44D36CEBftHRtCuXF",
  "key13": "5rtxeG3E1r56uUVEkJDmzV9xGGvMfS64GPaTQUJEEe8ZHiSVxVLfxjdiECicaw4xYsEJTnjm6qYtXk9grFrGkVQ9",
  "key14": "5cUnKg645jZPoET1vEpxuHuvkL6ppTWHVYuErgbKgxkiNuztf2qxQVxoNJqjuzkH8AmvQ53nnWxXCJRAhr8AE1fw",
  "key15": "5qTfMfpovftN5XJHVWV82y2EMgjtEJy37Hi5BFeaZDuCHhGWtQQgbMbhGXbX2kVWRYn7UpEGS22PGiUhJcBDT3Ys",
  "key16": "3vnC5FodVSBeF3obXo7ezdtuSxqjCQ6tJ77pAyzRngvGFQYeh52oFKL8b2xR6DNCh4mfeojyCw4XqNQJWpVhWCYA",
  "key17": "3mEYGtXamSKTw1YXkcqWr5rCTcvxbkaqmYLuYV4GdjpcxofheakLH2hUajbxDzyuxQ6DgC5NS8ntek9nr7jXrfGQ",
  "key18": "NgghChNxJsCtDvQ6MzxGeMHUbk48wPJvuDBYboZSvMnvWgkJzgzKSWWpXvJU3pkLHYP6YztJwuHwNhKJQ7ZF9YT",
  "key19": "2xiMCjyYgxHWDcdy6TkGwdYUECTntimGZkjW6Bk46pDnPvRRGRnwkZp6qjpGxzJZDHFxwn6y9hD2Vego2tmGhfuL",
  "key20": "5WdxMTigL5KHHQT19WYcnyDp2nQ8Pj5hjeex8iSNpVxqpD9wnAmhKnHGASfUxukAEVP7qWFYhBDXGTKHN4uS4Nfu",
  "key21": "4qHQNriNnUFDKB3oqspAJRmvC51uMHmnQ5UCw5fDHCuUv2u5nuQknTST18pDd1mXBUeGUuA8SMx6eKLva8Qq1dhV",
  "key22": "jubHJ5q6N2iaASpE4SRTFQ3hpq448ej1Fj9PQmcQ8CoQ8G5Tfo1B9Y1xoBuxtZgMrWv5WUHJk7FrX3kUYnzZEU4",
  "key23": "2VQG5QDu3CETaKqHg6DxTR4i5zGZoKS62Xi74Dgq8BXLKgdDkC3VbhWRExeCX8LxbSgqSGxEZhpkh3uxukMKRoPh",
  "key24": "35MD9wDERd9LvBJnX6wPrRCYdXQcFqbatwz1rgVfgKM1S8BjpevorafGPPsEVxZe4YQKb8gL6iuco5t1soaaBSQN",
  "key25": "4zk3sFKWS7xFZhJJ9uqN2gGXLvKXRcMheWGJ14rvnKGrHiCNtm6xbNes1cYo7KqbHjG7qFfntGLTaSTVLAdxy9fm",
  "key26": "mkPTF9xBsJSdodMYZRUnViWuckNDqehFMxXDmubgoryMBxUtSvBUUBxB8NE7thfFaNMvUYjT3FfmWWgGsq2CBfw",
  "key27": "54M6urER5A8EBa7PZ1FCcFwjEyNyyj1SeMFDVtiuqEbpqxwPkP6eUt1PYtu5Rdufx78Y5gXKFTetHE3au4tQ6c5i",
  "key28": "2qXW3Af19sRUYzrfHNEuau8e7tqJ5t2mWVVgsobnGYb7MhynGEyK6HQsFb5PQcZLEATdtZAzs6kja4oqrEY97vYJ",
  "key29": "jyqyTEGPeazFnmz8Ue8cEciz9NHHSniKfZorgwqXbBM5PX5GubL3XQLdcAEKZ25r11nzyTssWYM1ciVbW66wr3P",
  "key30": "5xTJbCMu5nFxhhM3guNJaZNyscrmNQnABt8WoWYPk4xjrvhc1FBuzzX1TURtLw4nQbLzVCWzHxX2StG2DBrGKzT4",
  "key31": "3j3YbTULh5oYt3dqFTMiuCQonGY8QM9BxSVeUcZUsxgeZhsrB5fZs9XV4Bvn3ktETBUWseTu71aFGnmS2qjMVopp",
  "key32": "2Pzcaugz6jWfHzQMoULzZjHmJG9ufVifUTfsXSYM7ZcPf5Zd3agUPAK6NsUULEQBsPmLERYpa6byRAYfWGPjVRSN",
  "key33": "nMhV11VDrhne9UE4JxG7P4PZKS9Nj2zrL8Gijm8uQQQNPBex1DMja6snPeCavBEZZbUr1AhGRe2y2Ze6eycFWse",
  "key34": "63jfL4T2KwTawmdwLWCenbqwfjpQGYoXB7Rk1DX581bEFLCCqHAunWxXCUzmB998P5sMie5XrpWX11kz4Sh4H6ga",
  "key35": "4QMvEQuFuiAcjL5D12wa1XUBk6asoWqmMS87678s7Cd4YTEykua2FJvMWBSEXJ5VBZAqVdpkQcBmF82z1zNy9KZ7",
  "key36": "3ggScc33avAytML7X6csiRSs6JJd3EZhJFCpNudTa8cPh9zQty6dhsVqU5jQ1Z3bBXGHSyu9qZPdZHTcHG2z7yjW",
  "key37": "5R2CULLsksSksVnepzkMXGsKzxG5k7fe5oQDHHmGDE5zJQw1Mf9hrB5iHqF5AbG6K3Jk1VSfqaMdvKdkubiVv4HC",
  "key38": "42hNCxCLqwGMDjLgUFVpMRCMWZy9CfkNBFDXmWnCJbViqKy1HT5VNGK2cJ3UpL2iNz8SAmmHj4s9JcqKBSRjP4MS",
  "key39": "4ntWJHyzyZh1puvgfsFEMAkBuWvyEyQP4QpoqzQ4TXTD9Rcq6PocwaoFH2eGtsKUByqcLvkQzRf3WWHo8uRW8Y3K",
  "key40": "4WJfqE1NRqK3WXoAAED6GbRao5182oZC1eXXUZatSJ8DBL91rMybWyhhumMgYVJ5LgpVLEXHRa251ujgvV2YZMk6",
  "key41": "3FbHQaRQ6fBhs3fVJGdfj8gEkK3p3hbpMeNifHiMPkPFzVQtrkPKNKWkwxMZcmUojo3jRSEYJLmw9d27JAusXaFd",
  "key42": "ZzpCyKYs9hQuM74YH8fdoKPYaaTqUhcftipH1GGRo34yGfVQDsV7ZTkADVc5zXKxXeKEYWTxXMcMDaYJ6V5rSfT",
  "key43": "45tx6DeUZgsaLQjkUBbSfwJfcnbruR3FdrqKUYp3YzGHro2JWQRsTyd5AkXeFexw91uinFQYuDxkY74ivRXeb98q",
  "key44": "39yr9mqmE6sNwAUpTpnqVgnLNC3ER2LucRMaXSveqFTfUdyiRmA9F3TrSFNQ5YtGKwEq3yFeGzgJbkpHM9kL2eB2",
  "key45": "nPjaRPjjeZdXFx4zaahpSwpDbx68rXemdJba2x8qCekHR9TTxWpY4BsP4A1aMiDknwZMkkRqQHjbubEMSox2TMB",
  "key46": "5fdEqxLP9BMkLZRz3zgb54YPRLzJZBUQN3ca3BNB5YHVLpMWJ8HowgxMnDgGrzF25eoEriwhqo7hdkchiNgSrpmk",
  "key47": "gMucfM15STSGWzGkRXYxgMugUfz9GGVmxzETx3SRK6u2ofP72nSFddyWQbGeEhhRvnEwMJeoK8cpiM5Ewm15M7T"
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
