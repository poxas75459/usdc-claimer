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
    "4G3y43qnkHT6Kfm7oosf641fLjWdL9nhW8RDtqEYyf1inw8vXZGKPwqwchxXcoeKPBWRmtgvHegBFCK8teekdDAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47gTb5uepuJeosdPH3PzF1REWDKsuvFfzq5NqXWKrFa3SM4BDyhUusehocRprrGZhSNDMKgZ4koEqRFzcDksuLXK",
  "key1": "2GVxvDVJqZevAWRQ3zRMSuevPm5hTT6vMwMbWKEHqBP3mH7PuX56rf7Ls18SDUZjjnponetAfuQA1V4ge7ckZSU2",
  "key2": "5VUWgXDVTbvxYuXayCwKYDH1sjoCqA7DPTigw3CDLxgaSanB1gSUTfcR1zVFu6bp6gAQCwYuuZVJbWD6L1xEfn8w",
  "key3": "64MoVCjvLN74rvBqyvUFy2oZw5Ljspi191e6kzmgLc1c4VXRh7kz6Frpbw4FcggJdwUgsFrBhPs81BcqPmymFAMZ",
  "key4": "2RxfcMzjcXEknUMzt5Jne7qYkNtpTjMgmzCUcGHQzfKjpWWqALPZ9P5v6NPjdEsYpv6QE82e29BNQyoWPxj9J5un",
  "key5": "f1JPnRhHUMVWgC6YziZ7X2qpEvFE1u6k3aLt6RuvbGfwAQZsiqCzDJquCZdE2pgu5or3g4fQeUvYT2QzdXg3mtu",
  "key6": "5TUgmCRsZrZqtGAYKn34VBFfzApSqYf5Lu659oViWA1NUkRud7z3hX2b7N3a3FVdoy98hWvGKUxCLymVcRBDgJBJ",
  "key7": "KVqfoNB9Tyj2SJdabAVJ7qi8jTxsWv94sVZsSou7kgS4fsknnu3VoyMjRMtfUPM5RNNisTdCTwssTWVsTeWPMfb",
  "key8": "5MSMGCjuVtyJE5NM7yBjy9g5X1xP8tsCuxQfCCYnGsLMFqq4VZBCTpCMJzTnjL6ze9hm2hgCxG5EQGCWyHHVoPgB",
  "key9": "4raMxmrYLsQpukPARmqeLa9C5gDx2E37k7H1jUhauiEALMBQivHuF6YxXY1evn9G2j6JHgQxFHcxmbSeN5VAQdKx",
  "key10": "Ar6wC58XqPwCHZdUh4LNcWZ3qSBQWJK8AoLrnqY3f82NS1TDD2avWBNTzwRW3GLPXUyBw2t1rmsS6gBLtV9z8eo",
  "key11": "KJ4zHjQuCnjSWwc8fYsJa3fKUqPGg5gomtrCBdPLboDyXhD1GM77rMeAVQeSxd33ChzPkZ4K9L5GuVwWA73GdHS",
  "key12": "3XJapBFPmdKUn2Uxee51hvAKMRtf3QrKfeK6KMK1WnDJ43UjjRWGQMX8oRFNmEDvXbBFeuutb6BM5HGZXPXb1Dkp",
  "key13": "2bp47CCre5SomodAn2bQ7ButZ8rPxeypkpsdZ9FRjEAkud9s3PhpcTJQaeH73FZXThcnmgXbTwFgpzVpR7h99csQ",
  "key14": "5DkuLiSMxbZ2NJGFxmXn2pHRr6e6MjFHqwL7ZmFTC7pm8Ty2nYQASi797f34LggE1v4AQUhPQXv9qAQV3H4k7h3j",
  "key15": "48PdGHkGStCHBGKrbckNhqkNXNTAgQDUDhriLEQ7NHx7gGAoH3hfxbrdGEpNvHLaudsZSgH1G9bRsfXxTYqx4BWh",
  "key16": "4m5QvaFm6P3r3o5xEMjM1D4y8rKDoenj4ennbBX6vPFe7LkrkAmBhxvGCiEP9C9ocjEVEGpMkPLHfk259j7iMh5i",
  "key17": "qW8Xso45b9z4xb8fn1YRNSbrVBiDWnPd6q9VFcHfVbNFBA5E337THfRpMTKJWaWep9w1G4smzPbsYQh6bfCBGFz",
  "key18": "2Bw5RcKbA4fqsXwZtXtYKp582Ni9Mvx5XHARS5ThVT6RdGDtpRmV5UnUB1Ahwq44PDK5Z8LD76HfmAByPJkXrvGe",
  "key19": "338z4tKNJvRLhYzoRS6aTaG7cisZMS4PtKVmjLPJsQi8L9NFxo59WKCuuG9MWC16jngjJoqN1FmoWxdncxfh1PLf",
  "key20": "2Duhg1HYNYaDTRqkTMo3qaFwVkkcdnuThNgrdqZw38NJM5HfjVyY41uRsfNCnGw7F8udvjbD7TqnqX7xmgds5jrk",
  "key21": "2gXcoN8uWxbLNoY19f8JRR7DxNpFSoBVwaedfPJXorAAUCPJ8BBY62CkzGeJKg7uki8fF3t1CMizFuPJ9JfN8onj",
  "key22": "R8Nz2zDUZcbXCc7mucjWHE3raKLFhKkpQ58iieSQDQmy9utqkgQ9Gzkwjk1KoSmTgafjZtoBDXuHH7xJJYXdmWd",
  "key23": "59e2vGtYUe2G37q9g7H8UzRvaA1L5yu5viVbRdfUoFp5eQNT2ffxvMJ9dtefQYWYMxGXcFAfG7hSLMp2skdvReSs",
  "key24": "5XHLUviCFzn2MUD5c3dtXQxFdpKcUkKk5Pe6piXwb9vRHBrpfzVYvMumoBoRo7BrrEX2YcYFr4ubA2BWE8454rUz",
  "key25": "5qU7RHvhWGju9CHjUZZwcq4m1qKtdxa82UfX6EJtffiS3wEn4evQ5Tiq47PET9pRk9NCrtSLLFjC5rLuHeXC7Kce",
  "key26": "PCbsw4RDpwwTHBDoQP9wd2Yag1npr48TXH8SUTK4o3pSD9nAB2wTxThhJqa16KSmx85CLXA35A9NHcCHhCK7u1J",
  "key27": "5MTRajnVnrXH4PUJBFukYn413HpJsCucd4XFetYs2S5JhRipUUr82U22QxZnQhjqCZNYDjcvnBBYZP8Vzua7PBTq",
  "key28": "5h5QxvgBu2hg9JEDZo31MizzWpV73LcR4TCgvZUmPHD3btft54mmJfA64RELJLd7xZskacD5rxsfWkZPPEGRoXNb",
  "key29": "3G99NA3kZBHfGwRg26ondpqACqNLvW4XfRPTNuQdBp8BPRxAQCH9AfcQGRBFPAZVHJdkeCvd2zCr3cPF4yvZpKti",
  "key30": "jzk5qNB5SMxK4aV3w1cW56FpwC77J8MpZP4XbtPJZnyxyvYWUjLfrgAvF6StgYrTpW8Y8GTy9UgRmQsvRrqqEur",
  "key31": "34xJBGwuhi2dX44mj9qJamnRTpedaDJVKFkFKKmLfeRrgB8HwDvPrjfYsyqc2c9nAsAjf5t3LP1FFf1yYVUZMQTd",
  "key32": "2wgEu5tH4SXFDBpwigJVGQLWDk6MnWNBVX6DUL6Pg4DX9hmpC2xjhxSPyH9oZcfdPFauVf4GCvPYvY2gyC3AESuw",
  "key33": "REZEPLT9JWskEp4kStS5AHy2SAs718qwHARJg56LyVhZQNMgFTzK3ZuiDc8sWaQRsLXCGMb5vPxnto6hFWeDkwx",
  "key34": "2CWWQr2rKsme39wcKBgiwAHhhNk3NwFVB8QKDL3cDY1eKYzQEanXVPGPTNtZiZ4Y2B58moxnboG8G47LKcJjPAhw",
  "key35": "GEWMdGnNrASLdkmSPq4cm9CbapCBCPj8sby1wRisXbH2UJzcTuSuUVGm9zayqyApwCa2Cbgo3XQbGYefc6mZWep",
  "key36": "2yy7zCJ4ziMAFKoK6mvbzMpJUZaRP1wFAZfh3TAF7dMfiW1Txoyrn7ECLrXdPjSax44tCNzsuNBjMZmUjdqwN8df",
  "key37": "3EZGzMrWT7xAEEXhTxUHfwSf7Bn84KChMc81Gi9J1SmHDSXwuxAfVenkF5Zb8DkKVeRHB8CCSAxByijfrLAXasVZ",
  "key38": "4j3hY6kRsaQe2hFfkss5VkBbCTWcNM2ymy9Ei7zF1e7z4mztKZpvJXx4XwuRfzh9qKmE8N3XSSjkmeHNuzqg29G8",
  "key39": "4vvQeQUmpPgcsRyZS5XizGXenmiLgk5UpQGq19mtuq84wytPptr5SX24gwi5tgwf8Qw9JipfpFcg5mN8q8UxoNtY",
  "key40": "5ExwJknd9HJgD2qcTDKTxSWedPAytdoSCc4bhUtem27SGepjdBhEqtvv9wcqV5gFuLDKH1JBFbqyS1eXEDkYP76B",
  "key41": "4KqSqEniqdc7zHUfExjUHEV1RT5mfLC6kcLHesMQyBTdiJ6qWWVVrTVHdHoRzJMFnQZC8cBkbLtPH8X12VheVJH2",
  "key42": "56NVs5SQRyyzm1pghbvL1iXG6cKJS2ZJXqo4zc6qA2zH2yHsMs2BzeGgQYCgaBXX4Y5bpe6NKjP8RQc2ZDUchFeN",
  "key43": "t3VTBKKAXmdHg7oaDtA7AhcmgTVYC4iF2ZS9WDamkbHJkzPMs62osCe9wyFmKJVnsMPjk2bjyirxe3fHuzFvvgh",
  "key44": "qYgti3Z8wWFmLFcPNW5Qy2TFo39dPayEftoay6hA26BpaMfyH7npwXrzEgVBftuGwmPmvHFNQngRYg3yY1P7VFa",
  "key45": "3rEmVUuprseGPQrKqL6T1WALSJHkHeugDM7EypTEbFcvKx3NXps38CZsesabC3BRsx69y8Mp7LLxCtxbtAiH4zg9",
  "key46": "5ZDfiA9rejhVVd2YHHn3VWuKpLKcnfNC5DFiVaKvYKeHGktvVrzc5RNxUjk89UddUTgnCywo8fhFXQJJcrJrfspr"
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
