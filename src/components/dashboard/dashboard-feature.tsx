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
    "2QNcXXKAEbPytdNiJ2gVWVU5TDnmYZf2oCjpD9H746zwdXYPYAKt7t7BRL9JsQB9Hi6hEhp8PeTpk4WoaSds4mvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wusCmhMnRoxkV95ZqgFNw2X1JMkjQRKHcpJbpnvcXvpctZvtRvYcFMd9hg7UtivR4GeXoCFJ6pCkfzca6RLCcLo",
  "key1": "3zgimCMPBY669TBUK8cy45iuMuNUoLNorUcG6gjbJJaSSgwHKcd7f1REzshuUtbcD7NZNG3GYtswYTcutoyrWMgg",
  "key2": "2ZcPATj1BrMQp7T5u322uRyThukjWJ2XafmB2L67nqnLuKTuJEp8SGDPrseZdF1g9hRG9AH2N2cjDXjxPPGmdjZi",
  "key3": "4ugd3ftfLNSKhCMugjQxo519Txynam4zcHRKTGR3CkNCLp61gQF9nE9tGSu5yZSrC1kjF9Y6czDhuisMpnh7oBQ5",
  "key4": "3GpiFbTH8ekyKZHUw1Dm94zcP9C7N9TNXYX8HU9qp8uzk3d3Lai1Goq3ysJjVopdGa6zkfFjjEwJLoANhpXM5UZC",
  "key5": "5JaFPpGuUy1zf45BzJeWe2a9bRw2bxh2nDLVP6XHpkFi2LSn4mEgkNysBL9EwbMtV87MpciLU1r8H6DmEdA57dZM",
  "key6": "237bPNwWXci2dUSa4SeKxVSom5FTZ5yQimHgcCYb3hpkzmD3SJpp49GpY4hyNavnc8BKFG2e4mXj8pk9VdwGdmb1",
  "key7": "7WPSvhTnvhVEgheEgagEbSFpLwX8joULxC9AFxfLaJFDaPZgG31wiigsjM8ZQgFjFPpRJ7Jc1rcNPLCy7mMRmsW",
  "key8": "21vKY2KiTdyELPK6eeKppYdDsxKRwCqBhA6Vh1sh1yNQGXdjFPpgZTsCiT8KjVnRrLYuRYfoxp4kJG5zGRUcAEgL",
  "key9": "4sLjsknmL17srwKuQ3okjrwTNPnXDW67N7wvc4xVKwSJgBdd7yCR3DWeMeRdBu1JQUAnp4wmE3HWCB6NEEStmnDP",
  "key10": "22jtPFNwYtyjvSHhTGNRzCqxxgAW5EZaE6qyj9V5rbfsfgpDdrWhNkD7pHNFXXYHeUgJVgDggw1wtw5fgTiz4CX4",
  "key11": "UUvA6ZunuwACwtvsq4ktkehtjksGWrjyz4ATxKBmXdHR8JxEGuPVD8SpDAc8hhkveF7665JQmQLUZ7TjyMUnJaT",
  "key12": "52oV5N2YjHKL9UjXf2noSDN7wnM377nwPZySMSdt77gyd4Ww9nSHECQEKjvSUdE9AEZWsjQDfM7KkAKup2UtC34g",
  "key13": "a68Jd6XgMEfTF8Q9hN13deNLq3JpdwMm4JMkEAiwhT3Ee89R21yBMdMh8fQrbwHQgwQSynoHocVbi2J2MVEdSsf",
  "key14": "24bk212eAJCDqZyucomNh9iVz8oh6iCuXq1TAfvi99ZBku1kusm7AUqwcEyPwwGvP82uNzfvR7aVnSX9Y97cBfXD",
  "key15": "4SagxAWXBDUYqEHDs6312jj7wSj9ttUj21wScJx9fWpkSfTBHBAmwHKC6gC6hYaa4cKWgUfvnJwckaNiGM3W2YdV",
  "key16": "3j6fQvAueq9SS2DsvJ9Y388yY1Ec7v5i2EbrJNtNdNVUrVQZPvSb2XGkV68Jush7sZA1iE46dBwSFU12Z4t94Sqa",
  "key17": "2keq7V6ypBt6rFNZTykWkPoWu63bmryZjDrdXAGytiX12bG5a4K7nCZ4DNEcBrZJdCGFJDJmCuRqrAin8Qfhzd6h",
  "key18": "3AJmdaUAqD3PUan7CQYkXa57RR8NwSEdwPL5yP9YBytzA8N615AZBeCvg91PY9nATkGgQV41dS33qRZWAfdMzR9",
  "key19": "4pVcoLhJMSSxXioHgg7xXhJ1cwrRFQ76b3YVVNvSQ5bPZM68ft99qbgmYLtLUjoMNpB9YaVW86KGHubsLeEGdvEc",
  "key20": "2nG6eMd93Rgxxu4EBdxe2JzNNGBmzx9YSoXjLqHwyScpYLGEvkz9txhVAbMTLi5jbKFwAtWVvooXGhC54oqkM2Sr",
  "key21": "4WqUMkqwPv7UgA6BU3u5dFbHvpyGRu41WkuhTkevbGrgWEvCuJ8mZG3RG872WRHQjUFRPQgneM1dNu1azP7Zn6MW",
  "key22": "5iJH1nurULqjojqC21w1JSvawBLTbjDyfJ9jWJM4SUx4TPmprDG4nPwLAV7RziVpSMjBNMiEWQwZ9E9mZ9XBuoA",
  "key23": "2tnPG9Q9LmAtGKGXL5uaNegprDJBnDxomVRRF1H97X58Td8QUxE4mSTpLR6oNeDc7xshhoPSj1Kq788m72BWC5XQ",
  "key24": "2gBUuWwvmNJvLgwBhKvcZ5VbeqKVfxhZzkr1nEfaQPbPaw4vDX2gYyUQujoNPMNtAV55BQcFxNxQvzxtPrWs79qP",
  "key25": "5juEdsnL9qzZoRqZncBd7Ja6HthYBL61bnN6jzaB1EbDjV1633bUhZpx9PYU1GS9s6V3Qo7UkFTzkj24Pge2RmtW",
  "key26": "KQJbEWdC5wabnkJ5UNHHbJ3xEUVXX39pfqJTC1oqXYbhnRAjotb4TmoXY7qMF6bMCSSXsecjCa1tvbVLVgJYeD4",
  "key27": "no8jh8qyuh7CJa7xDiXrXqfkgvLVJqQEx4z2VWbTahuZJsMfLWE3aEkG1rKEGEk5sFNQE4R8KRqmYqRgSdpdEwd",
  "key28": "5QccGNdgzf2fzre4JkuzoRy8NNf91EJnL1VBAxcjTS9ZdC3wdgw5rEg8JyYVhmGv588qfNr79XiFSiEez9j94bQ",
  "key29": "4US4xDpzFopYyBdfvayj5nUBu13Hu8QT8oDevpcjiBKB1ay67d8Lj8U3QadFVPCLoCtAQ8xK74nDDRREqpE7Jsd8",
  "key30": "5oX5B5HchHiKeoK92WkhAmMZfqBzdF1XMTc63w9Kvxiu7wY3THLeGex22BrPUVYaZFm1B3eZ2i5FkFnSDozwz7pF",
  "key31": "4N4cP3UYAkEZarr5SQYtc5eG18K1oX6fCfMWLucjuzHzbhDZ72deuzmkfTQksnMaDVp7o1HMXQPRkZySWp3Kvy3h",
  "key32": "YRZJRuxAFDxTtDcNA4GV77Ukk4LbKTAWfVzqWbfdL6NLAkk4jfhxxQK4xjZN8bxzEdp9a8adY9njydzXATzMSN7",
  "key33": "4NuJEoarRZn4jXkLRj6xWoeZ2VMkQyHEseV1Tsavk1EMFE3YxYQwY8QjWqHzwnFjyEJafXDUpWvzx63yLwjj1cbf",
  "key34": "3WtnzJkgMKLjZsaDJdAdG2un4GdKGUeTzYgFKNHYgQC9gnVbDuCvKYfDCqmULj5uMR86RwKvSaEMq7yPeJ8xFYeu",
  "key35": "SfP8sx9xjrW38C5JgYQwhbP4Y57dnrtKVbVBAP3Gk2HyQ3Tid9jqdHZqQbxdy49JAB6SotnvQXedtaCsfL7WQRV",
  "key36": "3hzUz85yoXFrU7wu4DPdttfF1hXwCBCzvr85KpBiMXZ2qy4unL8J1ATweBCZB3oJS3ZPYN9CRQW9UW4FeCGBasjk",
  "key37": "2PNakw9st8naF59Vii9a1ao6iGCSRT8C9hN9mauZD75dBLQMQMjALdCTSRGaAfraGGxjCggPkzvW21wDY74tydmF",
  "key38": "GxosVQcub4kD2WQXukxqDDi7Kt4hR2NnLcmsgeMpJhaw2CWXK4QtzvVDodM7FSLcz2kKoPxvZCJh77izogV34d8",
  "key39": "4wS26YPwBfcskwDUqwiw6fKJpZ8FKXjRg7Un31F2YsrHqY3gKrhWwJjFSvBtcsddCSvcfhRbtLJv5SuiEKWpVJvf",
  "key40": "mqBQscf2PhDQh15txaRmoSQHGQrWhMwssGc9WaThuXjq1rpQ8J9DZ5DSMCj7GgC9AynhdVAwD6qxBf9TC6W5hMr",
  "key41": "5RknyXMJiia4p8R6s39CycDD53usyc5AvNvZ16uUrp1cmVGwRAa2ocTDcWGdt88nmm3BSHvXmfWSQ7mx8e5iJYBc",
  "key42": "2pormbp4yBBxc614N7oVnKVr23ZBdQv59AZY265twEVuymQb1L2dh2D2zz4KDwsnGjnjosX2yefKv6KQcDKkb4o7",
  "key43": "4AoR3gaa3zBaoDYVxjfKnA8KAQN2VxAp8N8HLFSjAA2vVaaF8PpSUqQc4oqbFaq1a3ETxtaWXg8vAuZTBPnsSftb",
  "key44": "3Y9WgRunQpbod22EfQAKS6VymTaye68cFhFX5Pt1YZjrHDZHesSMinoFZ5ombRTDNPR8ap2tBxN4gJyZkqGsoE4x",
  "key45": "4FCsfdhG4JN8g5ZMGTyuURhxb9moZA1LzCvaCNFwfAosxXxakw5C3EzJcqq5vQZkfeTdygUvB44At7w1m7T39j4V",
  "key46": "qCWNtVrmoEEY6zvRX1aWFNj2VMvj6zzKETtRpH9tUnxmtXUKrfvKxzrUr8t3WtnxiwsRUCR6sJA7oF9tEkpoQT6"
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
