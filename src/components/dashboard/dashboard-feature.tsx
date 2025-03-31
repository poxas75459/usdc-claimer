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
    "2h3SKNCdmLszTKuHk2TBMtjV4SCdMWyqLnWb6pHgXefZgp5iNfkkEhSqgvCEoGEa5oMb9HThwqwotmFV1jPoYusP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g4ZG9EJEhs5vwZmoY1JZuTsdQwT5c8eMsGg9fa2MBjoveYMZp1NNHorq5G6x7qUM7yK6Nb9pvUYFUEnyPhS6VzT",
  "key1": "3L4vyV7su3SGwVXsbinf68BReJoXaGDHurfDgB1Sf8k8zhw14cDmgTXqCDz9ATArRuxZvHKjnh48UY54rj4fE6gE",
  "key2": "2svVw3httKhLFVfN9u35CS827Zxk9gTcrTVid5ouBc8edfDMH24mg2RNRKCYb53zykBq6uKEkvQV2567gqr1wEps",
  "key3": "3hoD7BoFaUQ7P9PespcwD2eAoeGmHMLyAX5rT4kYS5M4h2Ub89HKfrFUvsUCUWHpdzz2JovcqJyubut68ACxtoYb",
  "key4": "5feV5Y9et18DGfVNRtHG7bem7YsxPnx2mF2vd4cKobcgzaeiNXwBmy4v83QZ2Kmrf6A8314qtAekJYWFi3g4USCL",
  "key5": "3pNYc4uS3pmjK9Fz65s7nKeb1WSPSpk2d4P8fthEvHtBHqG1a5wnNeT9n6nXbqcRDzx2JQXJ5zP3VERCUn3Dofn",
  "key6": "jjYDjkgiyaEbQZdk7iRckY6ftDS314mhuFKdnBdDMze6yvyMcKYRSHZUxTh3NomrENh9CTCbbkeF8NnPih8YpLJ",
  "key7": "2jptyZdXX3bWoMhbwLZwxFircGMDMW1NMA3ejiy1U1Vr44DoqmLWSaGcq593Zy3a3mYZfTuR8MyumebP5uezNsHC",
  "key8": "41sVcAey5bKdqXxVACntCJhM9JPHrBmCdWcnUtCTdZFodp2aDsU5JRUAjXuUkR4dnWdk5yLWycnakDX93KaJPPzb",
  "key9": "34phPkn3cJUDv3pgc1YNaNMcxYVhF871w2JZb55Kap2nbt8V3xBiSAMUyakhvKTGxSNJJsx3AsnHx6Ls1k1wZG6f",
  "key10": "64vTFNYdKm322SU91UZomEKyi1WP89jqYH8mGe7oEh6M3dB9YX8wvuYzb82qhrqeRdAosj4VJqLivLPwaZ4JY23k",
  "key11": "4Ud3rjHXZad4sGYGYEWnisn7dnmsYbg18c5L6fhHEtXjbNosy9L116bCHkKjtiBX8HDNqydYomRfmBfM74Juaiid",
  "key12": "46jyo5EvZC2mAskhue76bbc2NPAfXGXN2ZyTJGYQuAUX5wam5kumWiZuw1tpkZTbWu3AvmcVdNwDo1haLMbzuPKo",
  "key13": "3VjLvscoDX4mUVUgZnHTvWcXdna9Hkv8rfpTYzTXzNPzomFb9MY2B4M19hqy4GxSMTgrUKALCLvnxfAnG3RzAkiy",
  "key14": "TaEm7QjYdeYvRaagYSd8PfvDcLsBSDRM8nM7QsUX8k9pKjaLPeRKYiKpXd2iZi7zwmhVS3nHiQ6WHn9yJnHmMu7",
  "key15": "2ia8vLpiFfUCM7yJXxzoGEUoo6emy8XGNoAqdvUw5uTXXjpjZaZ1wqYmmQvmJx452gFrmqzr84XER1s6WedGKReJ",
  "key16": "5xFj38xey4d1gQdPzs3nUUJJKfgpu3K41cyiRZpMGaaeQsSUrBhG7ZxRwXzVPRUGeDd8BzGAdg1LEqYEA15C4M54",
  "key17": "2GMj1mUreVA6Qzv4TTxc4GKBXYD4v3WjtwgYE7hPqwFAuq5LHkEyfA4E4vPsq4JHT8ukjx88tAz1x7YG9ecUVozz",
  "key18": "4RCyjFKDL8KxevwGiwaHenSoSdouFj6fpU9PTi3w4sM8vLQwjDr2efc1ZRwyonQFL7fqmnPToZthRMzk8qH1ScXG",
  "key19": "3Tt3Vi6QmVYLCZsWmNFQXzMBxyuLRss2o94YiP4FhpCVWEMiRs9Gb6qd3nA4GLmnwp1nCvz2wSsrxfuzwm2jjocg",
  "key20": "7QDZq5kXanX5LpURHwLSN5cHcYUKT3bAQEm9oriew4TZ6tnVa2zmGYPk7u316RrqQiWr9QR89YDF3DC8i4pLbFj",
  "key21": "3B7rYe6byGydqzWv3Sf7zNSqayavNCHMZ2mU3b5ywPT9BdZia6GKXorw5LEypQoP9bGaGkjTeXoXiHWiX8CBXxo2",
  "key22": "32JqTztEW4QLhvk3GadGe9yPS59DBxeoPy3bYU3Wk7DNmZKYA1DN9qP5DrsP719eQr8HuggvPyFLGtrAJkVAqzyr",
  "key23": "49tQoanw1p1bMK6oTSsWdyhgxHDFzE3uHnH6wXcrqtC3rz58mj1kBb6aPCz1hFGYZhtKNaXvk8knHtPPVVZnMrv4",
  "key24": "3PuVGq6kvzCqzKzHN1QPPmEWCskSsPyTNkSt9qqbMXDmish7yrcaDRvLePbbQoDhVf6JfoP1aQ36sUmru2nbEKMx",
  "key25": "4Laop7XyufdyXGK2zAd6ecTZqjuHp9LQc9ZPhhrxcfe55zGtwd2rsJGvufYfgHZ5DE38V3XmZPnpmuWgdp7W8tz4",
  "key26": "3LJcZxw6bThdhsqHAEhS6MHQ1FniKuV1Yh6N2KEVj5ezBb3dcqJVs4nEeVHweG4ZMgqZP7EPbScoTpAThdgwEwgd",
  "key27": "28dURL8bXyFGHbBJx3hQFe3ie64x8iLyqUWeUET8YFpYbnhimVaaGsZVEBdQPyKFSngur6ewCFHVB98TBoErK7pq",
  "key28": "5w8SDecsSH8zQamexXpKqSi7XSC6LCxr9kpRdEGXjmaGr78No8oDGUVm2rC8ex3zZA2BFiPMFKHVj2AkcWK55T9a",
  "key29": "4XvhfQWCnyfCRgfZeEiMsKgVbNLp65tJ8HRTeteAFuqbdPVRt5f4hxAatgAeom29sDTCBruevQ5rwW5htjDh7kEe",
  "key30": "3rD4mnmdV5VuhKxTzcNC8VyjHPdaDvLakaoUydFv13eok7iZ3vzgmFuF89iPA8oMvMSihXMGE1NH14zM1heUaZ5S",
  "key31": "2nrtX8YTr3Bt4PP8NHD9Q99q5g6BM2VVyHT8i6LnHQjoeEA9fZxUe6B4izPUDcCHRHPJdjqcwcxzJ5rMbhZ1PN6M",
  "key32": "pZbh3Y5jNNgYyNu41foHQQ4LaffDiMiy2Q1QYFki7ZNqUdh6GsfH4nVtCYsnWxwhrQy88zte1EhytFwWpCsZDie",
  "key33": "3eVsVPf3JvXSW67icot8JbwcHDvQ5pFaeMvCu2nHtfGEc9A2LWeojGzhMBHGb4nt5YbcVX86HS5mp3Efu9Wzt8BQ",
  "key34": "N4eCQaid9VeMwTqwWt5HFzWyzzRbVHCbWKFPcqeHepkxK84YxyPfkMZfM19VXYzup1XemdKPhGAmWXnkesL9nY6",
  "key35": "5MB1R2bJbeUKBabxh4iBFdw5ejRcE2S37zyP5eeYrrsTbybsSXc3QFYSwibE7pF5sWPGk8Citix2spa7TApMnxJt",
  "key36": "4Li7MNkCNzHQkipZPgxeVxpp2eY2uzQGDEhtBcMEijEN7saT9wZ8MY4Jz4F847gtys2SHuzom257sVu7J2qgD9ZJ",
  "key37": "HXhULBbPqe3VLnik2DMJHDf4vVWfPoVwTMe66gYM7npp8K8ZJHQDF8jM2EgDH71ExcaTGd3PFT5ey4cJMHuiEa9",
  "key38": "2WcwwxEW6xCPK1JENPvMsHxbc3kcmru4TuDfZQszhrrRZTLQ8WA9m3EUv1A33CcGMTy2NSepHXd354ByeCnasd5B",
  "key39": "379tm23bpWUuQgEgFNS5uDRtsD8jKxBDsyMuWBLB9KaeDDjV6XYzYa2ET8653CHh9GG8oM4GnvBLVyiixnnFpxQK"
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
