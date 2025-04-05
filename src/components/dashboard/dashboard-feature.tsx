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
    "5m8TtcgXMHheqTpdTsmfckbTxCuXxasoS2drVX65udWhsv5Hq9rC9P63qmUcfpe3avctqYEXKshprwwc7wkF3GcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t4MQEzNKTrwvxin9NBhCLy391FzXWSucKstnG8FqCLiHsCCgPUcfN51GoBxMobphy3ru7XYdYnd7tbXbK7VeLyT",
  "key1": "FKDiXpSXsf9yxo4wBi2B2UQywQnxSvpVHBhVTMmyME2JW1LFsyz3VRys7QTvpSyqDZKy7a6oBrVHo6hpMnVfKFW",
  "key2": "5137jH9gnvqM8DPFtD2Aa7197wHEnAL9FWhMHGXMEwpp88dwMHxop4ZJKotTR8THha2fWfb1f22R3SrWdgzhTKf3",
  "key3": "vMdrztN1avkf13W3VvKLpvMuC8qM3BmCJoXZWmmzh4ytWmPWGuGftPBfmHeXXVKoz8mRUvPkzvRWuPtZjXNriiJ",
  "key4": "j282Pi9EGgBKfGFV9NrAMqHfKzdgbLSFAugiEVNVurRU2i7HxcBWCc4B448wq9oX7q7Ruy8HQ5XdHbxHy9kw8di",
  "key5": "4Gc5Xbw6e2MqEQUueAhF45PA9Vu924XKEy2mUjWD9vDFcuWPZyLfhsyMpCp7Uvjv1nzofEPE5kKntQ6z5RRF9wXe",
  "key6": "3DRBS9JWq4ZmivjhfiGZPAXioRf9qGYqPiyEEF2ujP1UZ49fmFwK3tJDCSMLVvriKq36PWCmRSBKozhZZBUVKXEb",
  "key7": "5rFke691DJuCK5NYrAcx26FHEUuKFDgA4s3J8bP1ZfB5qraBqmRneXG2AshayVZy3gWhm4A2Q6Y2UtUPwe4TCz9N",
  "key8": "4MLPetjsqPhSWmSYNfdVHnbDnyq75ZT4K2Y14FVqtcyAvCaatdhwPdh7r8jMTtgogaae3SDb2Chx7fpVCLgBGHKu",
  "key9": "3Ly3Up6FukiiJukFVQLJ9CEXRdJuo2vF3nsxhSBJBmFi91KHhRmR6XCQkvDJomPr44oLNCT2XmtTinTjjYVj8i3p",
  "key10": "449N3he95hctMvESopkwU6RQhC8PbpdZVAYaUc9EnMR65CTWL6mhsEtnpYp3AVbwHpmFY8pdpiQxWwejcub4cRMH",
  "key11": "5jsJDet8j8NcsmNshkaVugDsv6m2F56gpGrzuH7eLAAXsw4u7Z5E5L1R9sYfTtkkzxeARMhxKZxKqdWGAt6Vg4Xd",
  "key12": "3t4Py6tKxR5hR2hsLnPGNn22W5hKLHWzdiGGuY859UqimRbmrmyVXuUzR1PxqVxTmRZnoYwwKtomvFeRGaVDfWss",
  "key13": "5McxGFjMMhSCN9usf2CEPEkHcWYrNHC9CbVpki7sYo1iV5kRJFeme1zx3Gs2jKPHk16wNgP377KcixR4qTrtLLSa",
  "key14": "2xr9Rw1TdzLJ2LuUAbB5pHUbAFNYNXk1KfZmRA8R9VfAGzUnumnhYfNhUXeiFaPG5UF53TvaXc55NuyFSnsfZiCZ",
  "key15": "57E6iSYi5ukTXm19u2oqAyM8cJ9J2AmEtwh3LxuMietJc1jiYTj49AxHG398GsdDaFSCzaRcdM6XPs5YTWCrUyms",
  "key16": "631mJiti9pHweRy52eNfRMVB7seiipreB7HAiYcS8cuMnftnxdQA7otBWKMRL12muQHaJawo7ELb9jQWoho18ehh",
  "key17": "5oeGCvRHy4AQSm1RkubGoWR4LhWrYusF6QDjdCGuSuWyiG7JQEng6Z4cLY1J1NEyTrsjq5guBcXh4rYBvJRQqU7M",
  "key18": "K9yjViNL3oLxSRhhxjKA4jZFXTr9ctmcSSDfp778NY2zZtZaYxDTKiQVuB1CFVQ1edseZMKuKPZYbrLnpyB4YPq",
  "key19": "ek1TcGeqoz3jTLZvNYgHaRMN4Xg87pAb33TZu8ePNormF7jGNAgjwCpTSZx3GbfCqZ2coBPbJZUR1shmxezJrmr",
  "key20": "4A1caDUUQgFuYaUVycYVsy6LaBHo2LPeLrcvkTMpybi5qurzh6HptfXmin4meVN9s7AqquUoGvQauExDG8FYtuhZ",
  "key21": "4Zd1Ye4nyrgZY76ZwqkJ1aooiFJiejK69dn8DAwgMLw8zhK98ALmVs6cbBQBJgm9iNNZ1ommYnjkkQF5hYpstCHi",
  "key22": "5bYTZiXG7o9WGmFyUD9KZ2yhTpYdgg52hoV2RyNkSQDvfAshN3mSRZSuYs66bYXrWmHg2ovYmGq8anmKU63oBdRV",
  "key23": "21jj6ZsSKMNZTffwtdqZMYxSuSfUVx5aNNJL1sHyWi3YnCb32WWhD4JJM19HxbhKzLHizjwBy5ShrU9tvP1zaxcP",
  "key24": "GsZ4wMzkVg2hsjTok6AqRzeV8gJZwpYaj6QMWVyQKzDLYRKfPuT3sJoPFcuBEsu66BfrPpJFGMq34iSYsMtNhxG",
  "key25": "4yFDk1cCjyE5EXaYQt5oD5td3HCdvBTErkmxbtA9DqaVbRTNPEpCfjBtoiB1GobdivMyiE5nhnx6coJqG9kwnbMh",
  "key26": "5Sj25teouocATEEs8h29c7e9LCHPNqMR9cPxGX8dxDmw6Z7cqVQ3Eenm9BMamG4umrQmZhmDbNca2jWXbADJGgp1",
  "key27": "Dv4aKCJFd8LJ6f8BbAzC4Z7M4WAbSU52cW5DhVyMTwUKzfRrLbxTS7KTfiAUVZCoAcfXPfeQQCS13goQCWYYerq",
  "key28": "4FSxNu2f1kx8easGZkuv8Bjb9nFTR3H6bVcSNLrk6NiaiSNrvngAfyuYntCe3povQ1An98PeXJchEd4rtfYdFj9d",
  "key29": "4EdtRBYEPVAQACsqdVFE12M34YpvWJ4X7N3mXh2vp2zS56qvNED4EGDVGdUojtSvsBdsnvfmviLH1C448rYv8eiV",
  "key30": "4vv4G6cH4sEkk52oYjw9gLoyTi5bfqFfsJtGaJWsJcGrYmKkCRfexsbDXDnp3tJ2jEj8wThhdW3TSqbXr3xzodgD",
  "key31": "57q85ujWSbtQWX961K8fNJiR1wxtDSFQZBWp5s3YjDVLtaVW9VCgsgGhPk9n766CWSsHWoqqtNKYuWfeUzkLZAdM",
  "key32": "NkDHpDvVzsxTa7RKDKJftczUZ8fGSQDki157ABixhHRFeiwsda6Et45Wzc7bEeaqFJ5HcTqF5w24T49rXrxnHvd",
  "key33": "15s7CnMuNmpQs3qshaxe6166kTZjD1qUR1spyEkRh683o9wjc1gEWB8chYmakrgFj1zsvcxN1w9JAd9jDwvhksU",
  "key34": "3KEkdeHh97bfTXkz62U483APfMZRKXDDvoH57xpaM8Nadyei9orpXfHpovTEdKGfcDJt48sYL5CeFSRfeAnyMcaf",
  "key35": "21WRmBSKoXmVed4kaQMqAYtJ942v7LPoxCANz8vnoa9mfyvSNuvEQdFNW6V1r4ZVQ24wGQtxafHf1ZjorSwHNfpt"
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
