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
    "4mezjmbXjMeq8YWT3Eg8pM8b5BPrNvt6kgtv1G7o9YUDiaokHCauDPKs8QKzqnQyGH2TNXXEsNQZ6YLuC2gPpi5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JRErqyvn3FLKNK9H5F47wxzDHXmFxWWtgUpC6ckgcWmBqPZgyHFFPvJax1q4NcYWSY8ACSuw5XCS9hckkSUFVBQ",
  "key1": "5wDa1dHmxo16fbs41GcG6c5dQnzNtz8HnhG9ZA6ToKwoymySj5ULJ5ggja9sUMMwsTF1moALrF4YN4NYATj9Hvu",
  "key2": "Bx1vofNYsS5ieWnFKTgZsq8NM8sFqZDN4EsLxDD2969V3u8dBuk8fV6JAGh6L97pUgoKhKKZTUMpadeDJ8se6zT",
  "key3": "4CVf2kyeW1W6mvawgcwKUVGy1vmjBzAJAkweW2FACUAm7wBoaixPnE9GTbgwo6qVsRTMy3oiQDmN4UP2YS91RnTh",
  "key4": "2TrbjJWuC45tWvjpJVzhQBGXdtpVZfaxZy1xRsNwQPga4sn2JMV81BKKe4bfadq6uxWSAZUb7svLgodqHpejsGT8",
  "key5": "MwdntNuAQ9CFWtAxz7gHBasmKvbbZ1WQfz9KqugzmrPiTMQyEDdq6MZ25jwEomL83ApiNUfdrAWTatBQQkGBncS",
  "key6": "4ViyzqNHM4fV6Ttb2WPa236koVnCiBgkVuYWiF4kbfMcQb4VK1FpRPtnc9nvb7n7RP9bBmA7NSqtUb3JatiX4qdF",
  "key7": "5kgx4T2Pq34gy7TmF6NyPQ2EEYwnJ75n2PvFYirfaGVmZXtjRRbEosyDwJwiKxKNZKrig3EeiSsge8XqipNnLhro",
  "key8": "5roYMgbEBj2ambtCxMcCQELsG7WkRg2hDEnUdJUJt9LZDvLUYTuZvhEwnKktioq1MMG9SwcosusoWzXGr1WkVUvM",
  "key9": "3TCpQT8RJaKoXiTJrPuFsH9ksS6ivqJyNm6dnN4jS7o2bhne8RFUUnW96hGoWb359XTfoC4C8eKYHgYutNK8Kcrk",
  "key10": "121C8sQApXp3dViT2b6zanbEDxqW4Eghc3ahZsni2PB6g6oxr7BbwT7fYQbaou31t48EeuwotaqUMVh3rBanFW8e",
  "key11": "2ruuEx9iguGZHtenJ7YZQbar6o67rQ547Luw3kU696rJnxPpAF4kpPL7uuvZdXiUHpp1EhYCKKGoizisbQoX3amo",
  "key12": "27sEnFkJGYbR73HjLs7iRnSSvvMz21tKSisqJ5p3mXXNGbQtjEfAnKpwmvCYfdpaU7gbvo8xUK4HoCVMrwAj1Pr6",
  "key13": "2mMRTKxM7FU8En48xNNBh4ErFH6NZdMjfPUTKqfFv6wNMvQ9YGiEn6zWy2MMYrUTTptRKfZRtFqbRUU2Kphfecrc",
  "key14": "4yKzjSjLa9Gz68tL7WQ3JbFPupUKxp6N5VUcF8FVHJnhwsyQq8rcnkNuL6ganc1WFHcy3UJxhCBHyMae8QWNACox",
  "key15": "4JW6TNPMeBCCqaUFWzp2VP7271GrurKAfSYPJn9RS68xj7dufHT2mL6L4Lo13D724AW2y3HxvhAVtNbx4WPCzpcr",
  "key16": "4ncWKVTX8h5GiVRjiXQibaKcDQNn5qW3b9a4eiFc7reAahSjGsht8pu8vBnDh2CNNtoPZSvykxYva9VDHgdxYEa8",
  "key17": "4QJaj9bVmK8wGWfU8dvmNFkTYmY3LCSjDhLHtuDQvorZUfyWT2fYxVBfSxG8DSC845DrTBZYq6PF51c74H5egUme",
  "key18": "4BkSkctp3HES7AkNQwu3oiw6LgYRhPBaMwuUZRFBAMNSFzGQhcScZ42ysXR1Y3aUYrYX2rxw4FSNDJb4pdhskntN",
  "key19": "GQDGjsZyyg5RZySDc38ke13T28M1cCDNk1RbnT9UE6GimCKGM2v4qkGpyY8huFABF3LXJ3n5aM5ZQmZmdQhhyfL",
  "key20": "4oxcRSpastdGPasBFCkfviYnLYJpGEgxssgdJJJqsnyavfarJQUJ8vA3yCHrZqqsJ6Nvd8eQawQa29DwQoMeGxiV",
  "key21": "4t9gZrxPuMu3kFTyWdJxUY2TXeGGKNeJxgr67YYBha8ndsAjKkzyzenTSW2XsbjqZEreuTjiiMjAKWeds2k28JAb",
  "key22": "uNheassHDbwtrqFaAA7WWu633ScJQR5fnhmq1SdUGZ8no1Tuq7EcaGQQBYcc4srJafrpp9paw4LNM8HMxPyMMXM",
  "key23": "4tEj8oAqvF2FMWuQsUA52mxxxsz6jB12q8xuziw7yskrkaziVHS2DbH7GsPTrrBSydPkhgRNUhPPSnRk16ny2C8k",
  "key24": "5YGWKkKzT1gW77jYGybv8v7gj5DfEcmiCCWuyQMfWMEoDiVH4XPmsNCyk6xHfsS1mh3832LyCKeAZpqpcbbmoxZg",
  "key25": "weRDVktGcS8UtcBrM2ZX7FkNdjfiUrwdJGo7WV6JGzfnGaheYdpdeFGhc9wpEXAatvo27G6Zcyu1EcHya2nFocy",
  "key26": "obrsnxByprcXEdfJDZM2Str9BTh4JSdDxdhb1kLK2U8Smf75j2SgYSxgkAbhFBqYzaoZGUuNZhkthThAEK5ZBfQ",
  "key27": "2cvqoeWcVZ2vYXrF84qPHQLf6WLMpJbFbUUMpUnxoBDeyDopj5oewJrhYC84jLEd97euc1gDuvZ98VnJadTnjVgK",
  "key28": "4pREHUgQhf3FkBXkaAzxy7JcCYnZNhxm6aq3htsTiKKtQ2ZgB1bnkYjC916f6jXFATaqrrfp5GWtBCW3gvvWzbdr",
  "key29": "3ZJ6EkVDHnwE2UFHaHyaWn6PSwLg9cVu4FP4RuU779Aupdz2Y4qUpaESZGnPwFERpGVvCPob8T8ckibKdjQjkuRW",
  "key30": "2Zk97Sw6sqpXCVVgP9rDncWtidiV3tshAwbsf4SXNefDcETo352YrZs5Vy8Scmz3e9qZNCK74rRF7qerPo38WoLE",
  "key31": "64kQzgmuwk7mdzcPSVUNfwvxeNehPDGhgR1cRpp4sz9ni8Hayj1dSAZm7hSDcuL21thRLbz9wUJcfE3BUNP95yq9",
  "key32": "5AM6k5NkHYbC1P569JafiLL6MrCQttZqNAALEuvR2tq2o4PHeySFRYCtwQLuPd3yPpcGNsvxHCsmsz3UKTKcfG48",
  "key33": "36fupuLgzn6dnen7N5wn299a4Gk1acDkwbWG18PCM1s2TF2bDFu9EsoguEsCnHFGB8H4aPL2oLdu7UMAqv2MfasV",
  "key34": "5osQjn9iZGG9Y3Nxpryjn3yZqXuQRB6LYM1DcVtEsgATspwoDRNyHe8NRQKpc1BJ8uyfiMgjS3H3PrgjApB8wHCR",
  "key35": "2KkF5QJsr6KgaLFFY5hNUMCHvahj471kRsVxCMyiFotnknKxxof5wbEbUc2kbUm8PYwUDtvFksdmXV9aZnT2FZjJ",
  "key36": "44fqt7TQqCAYqFqFxVqcPBNmmqD6ssWyKFyse77HYFgxayWTNx2xdqxYg8NsQYFW5Z353RDNKcppwMZxYPyHvheW",
  "key37": "DTkZEeSiGTTtFhVjFKzkZ8VAnYgCABq1Kq8hd4dRjWa7pubKt8ZhmoUMpAcjLmZwmxhMmwFXYDEysSEJoj16ErA",
  "key38": "2VbM4U3Z1kq5KwsieioSE343kUgWAEGb2vcrwr2cegG5WHf3vgVKcHKJzZWPFfYPP1e6AnZGw85R59RsuLD9UCMQ",
  "key39": "67UXhgYEnmWW6cMUJs2ZDaujTPV1hPUstpFsKicKN6E5mb4vN8aaJUYQJnykTou1ELdLzz8cjooWJ7mkNT1CXP9C",
  "key40": "5cU4x6h3HQQALUB5V13w2TAgAwUmpx2tDWHw7ccrrNA1mFeYmSNiNrHeWQ4dSqPjFgtGzXvJSpG66yZ6TKzfr4vY"
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
