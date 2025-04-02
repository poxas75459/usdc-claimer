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
    "4JqrKCg4sRGRMBeHVVuRjvG55RPZ6qGXfaGb3yboBtRUYhJEq1yj6Mx1g1NUAyqcSdLLVaamJzbPEFNciamqdkds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T3dcuMRYuuvk5B4eSQp1kF3QoFkV2jB5X8261XwjEnhQtg3hxByYqZkBHsv7xhVfP6LN523noLW6DpANpA21vBv",
  "key1": "3HfPKEM6A3xqzxoNtU37ZiHwAE8DuZNGCaKesfuzzoa9dyZqs8h3sCj1L8xdBzVJyjfPmnPE8JoKDMhFabMLdNe5",
  "key2": "63qaSw7gfRvB41EBPc1ZWnf4yQyuTueBooinGkVuncPxzUyGMvYibDG5pNdAYnU3ES89Y87e6i4AMMwfcetnP18S",
  "key3": "2V1iUmQPro3Y9LgHBNY6e93GF69EeLU6k1MNcnWos4pZHgN3bXaZB1kQmc5VQEK4KYSDWa5bkmDkDjLdL2XiysN6",
  "key4": "5Pd5RyixdbKyQCLVVfU2qSWbGqiuHipFLYqrdaPhGj29nGqCaKVcBwcPiAM6uEF2MkvALN7RwPBJS7rpAY7caodr",
  "key5": "2XQiZ8bkzw7z7YFFURhuwpjutwJ3fgXqtGDhK2kEBMwwvbMu315hronrLvESJueY32bvoqvzskKfSgZRXP4AQ9gT",
  "key6": "3vPkYfeHdU3sL4xbpvNRsyDejvDyVJSSjJRbUM6AYiGkK3gP8VetBom8MdeTEvLwR3bbEjyd7WqijN1oPEBZ27pt",
  "key7": "5P4K3h3jcaPNuBiNouP93MFhmnRBGfk8cS1WUwGfcjZyUZVt56E3qihwzzoe7Lv51oCRvXUUGXcWpMA4g8Ae2Nz6",
  "key8": "2NkAiBRJadtoaWEQX2oijRi3WGpW77jZxcCtaaLUaCPxDrfnozdkyq4sMVYQAXNbcvHRtXb7usPc87vsAT8XLiiw",
  "key9": "3xuwy1snw3T4HnRbcdm7CgwhN93P9KWg8ertCSThMG6kZHCV3kW27QFwsXMbVPSbaqNzVzNiK3GKkpjXzrqkV1Dm",
  "key10": "4AhDRDXkR4XwByvCynKbt1DGGpJSefV2xBVE7fkbSS27ZGj8FKbrpfQ4cH9Bwnsvwyj8XCZuJnRjZ8smrkFfBpoB",
  "key11": "5spFRKjSH5Ut2bgg7eSZ2q4gUH3HSQYUcNSYGDGqhMirSUfJXaRMf2NZbWpy6rx7m7oc4yrQNzHLjnxCCU5zswvP",
  "key12": "4rQFVu73Vqb2pktwsdvdrPGeN8E6gcJZM5AotEjWMNtEHqEpjdqaMHYBXszAFULke2nR2SDTA6Ho6ESJMe64fryo",
  "key13": "3S1B3SwG7EXXBjL8eVQhvXqYvPpzMtNPPRcsaU419uLVJwTKj5fN2epv8oujzotks3e9a7V8ugavfRtFQHuqvF9u",
  "key14": "K9rE5pDuj2k54EK99YrnaC9SR95aeuZhknZiJZ32cDnHtyLVwSa62A8ANVsd7sMEsVLoes2niE8Z2KBgp52KnL8",
  "key15": "3AJ1ZTbbVTqyHwtUEvUUCfCFNYQfCrSMbC37RDfYxnMT3ZWBUph3b9ViBEvNPj2xcnUfg1aLAezm7whwzrfTkbjx",
  "key16": "2Rb1is8trfLMkrePQPueARM2twYA1ufqe4cKGwUpDarphzwLgX7J9a8yxDGReiTePNiKK5YTRsXsC4yuWicWpTbA",
  "key17": "4SuhBAGtV8hBgGGc3nnQTS4uZM3n7MHR4jjt4mrk2533HHPEYowno6cZcngRtb2ic38uAT1G1WWqPATFDRVwzus5",
  "key18": "4NL5yJ4zGRsbH7X8w6qi29vsmJAJSSyDWgXkfrP6fG7HtMGd97NSys6LqsTiFoNRkZNPxUP3gifubJGQFq3o4hPM",
  "key19": "3hXeNDKFXkb5L1nJpJ77cCJhxi6Roxo3wtMiaCjJ7eZiMhvj7zJNzfuNJXFMBJZzjvifM1uQyT6K5EvXENmitiRw",
  "key20": "33o5bXaTUjL2dex6s49oSUGF51HnrizuPGuLSba7B39DiBBBYWH7LmP7szQypANCkkv2VHaRCtWQuvMr7KUFYVr",
  "key21": "2VoPXnBQ36eKYt9CuzM21UvphXiPoGENMrGgCcUinx5xdXg4T93T2rnB6Ja3YTFxHXGaXk5xbfy8uzUALps5p69u",
  "key22": "2Rg8odRsP54At4AS5CdBwV9xx1s8F58BkoxbTi9vCciJme79tSV2aDE2a3JQ3abYGJb4f6f1A4okx4RhLstEa8Uf",
  "key23": "4dDUqqWATLECpTo64un8vc8BiVH1FJ7hFpGjXgLUjo8Am2PCiQVUDGoZuaFXYrB85qoKb1o9ewfx3BSZUcbwWv8s",
  "key24": "2s76GWw9NWC7sxPHRxdYhg7qdpVwBMw1LEvmMraioMH4dv4Phm4veeZdTQUQvT7GsDK1Z5UU9FC7ZqxhhP7HvZd2",
  "key25": "2RY5vAZcZVC5jTocNB5MqB9GvJZnXSbEYjNiavoVKt8pEyzRWmXYJojUJ6D3kJ4MhdwkqBrKpz9m7mqieask7zaM",
  "key26": "61fXYRonYwSTjLxhXqQLRsR5grL84vacD5Ar7DkgRzMdmJxHLK2c91QdKZfRfkFo8u8GCWxbWPQfWXPhjQVp8wCK",
  "key27": "3x22PggMXMxd2mRuu58nh468MPjxBsTpDwT8k5SpZKXn7EGefqvAn9JqMWMCJQHtZ5Rz98XfHauhyMN1J6qpBNN7",
  "key28": "vkmLLCVASFsvof5Giv6dV4TN85iQ7cKaw1CZx3c4pw8qU2LnnA2xmmHUbjGDyM8UaKLpuKqmRVMz4hRskMHY8hc",
  "key29": "5vtoArSPCkiXbReXPJN2RM181UotA5cSQnfLCPv3B6qRgMpNE9iMxKPNxSr7FdkRyDDboryXRs7HjEmRQJab93fx",
  "key30": "66gEfigATW9g2roLC69VC9cXfuNFpSkqgEFJt6M7BSGNK5MacW3SucZuXavPQuXzo8gaJUHJ4iQ9hXHJnevGiaPe",
  "key31": "4Y455tzM8wgQYU3LQjMLLoqqiVcoEmBc36CXTpb2xYWV4cGhvZjjcKYXhkkxCVcuxY83WWCw5B1DGJRgRTh7sqh7",
  "key32": "4bX84aGP69WMrYvZteLLMjy7Bc9QHFhCEvqhiiNd1JwLL5ae49cZQEM5VUad49cDvDV6HLEGVaPdRSwSZzhqFWEZ",
  "key33": "25gtUmcbJ5B3EX7z5M1wiEMrPxswYMFzzRC6Sao2Ey8XVjVuS2YYDZg12cMPUZKQc4dHWocGstj5sXz1WuEAWEMM",
  "key34": "63rUmEGkmsm1J2nn1FRAdHAHV89hvdgnmwRG29e3ehLPi6qmtEYShLUZEpxcp4TXKYg9pBV1hSvfuJfoxmfHVYE9",
  "key35": "676XLNSS8wCigeELjn64N66m8LbXNZT2MfrNbkHFyh1JKoAJiebnNUkybq9Y7rFwMuWfn1sf1kswMVwrqTqFgPMo",
  "key36": "5df4zHyyPH64LGhLAVu8PNgi6hA9cTi1wqS9hTQj9n3nY6sSfHREKjobRG7fR5uPTHhz5XX5ZHYxft6WmU19HVoV",
  "key37": "2ciUUXTHFtngB4RdycB8yeTHopeKBSbdDavUbTQDP4cFUYmATa8xxU79EbLyXaEa1ChDiPvbKHbfN3iGfCoDZNmN",
  "key38": "3ViRtCXtTVY3FstEiivRdFFAnMAEVGhtxcwBRWvZGaaM19C56hYeiCfRSxJpeJFzArHZ3i5A7mqoQLPQUAu8RY77",
  "key39": "3daeewqMdko3qt97CaxAhtF86AuHxYEra2E11ZLkTaMZNJFATCbW4QvR8UVJfbBSxkC5XKfjBnfWoc71sQHYf7zr",
  "key40": "5TdzjsMmbRx7BQNBz8C4ojYJC8tc3oRmjUAd38QsbF1XBhVMGHvYfWcJcEwGUmZZY519s5UMFt4wtgByJzDmfpPa",
  "key41": "3Hnaz1odyiDxV584CFnjRQX2s4Mu11wREEDtEch9HAAkxVazoqaPwFbacJkw9cHQLFvBN1HDFUtxTGRMvxSVmkJV",
  "key42": "51XpYPivBb6o2JmJx7Upnt5ZPGN7GDRvb8SNHbX7hxdrSaXXpA8Zr8z37R9YyjiSLx4tAKgmrXUsyWj4cJwMbFTe",
  "key43": "Uswquw554TE541Mc6yDH8aME8CWHJQJQ7o5EsjUttG3ERzqa5iurNof7Pq5Rr8Shb6BWsXmipruayETuMjha3Va",
  "key44": "4gCBf5NJJ6DSqwebyT8QwNM7oEQsBYfZdXi3V6D156FoA5HhbiPPzhXDghhNKRA6gMvFKPeYhjv3rVbBtGR5VjhY"
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
