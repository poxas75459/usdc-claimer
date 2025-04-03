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
    "3nFSgRdBzsF36xDXkMeP1zR9YKv6TEbtXJDJp7LH8NMG7ZZct2dY4CzHGr28z1raz71JCgrqqggt1fmq62hvNN4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "evJz1BDwA1oeebDXrwYXh4PoKWv3dBPx3jsin6Tb1D6bse3fr8RvXo18GnQys1Jd2UyQGYwE9wSANj81PjULurz",
  "key1": "3VxU9h9GrH4B6mXteNp6726RazsPxk1Xxm4f2pmK1LGsAQmoPU1DnrEbtG9GvZpC1Y3wFH2HxSSqV2U4gC86Q5hK",
  "key2": "4sKSTPnFSsoA6mHrnwWKDeLhncU9LtdSMmvBCtKNSt9WEQoN8xbPXWUBVxYV9pcsZjt4dMDPma8mJvPdW4qds5Xb",
  "key3": "4bdSm8isbENH3ywC5ZAo6BNSd8SDfNm3oyHC5gdLbDrjtBVwfbn6CUrMXVvDm1mz7D2uViHXwoN4GBRGiJY72F6U",
  "key4": "46aq5opWpi2Pai3jb5RTBt5Q8LvfZad2FpWM7427MWb7mEnj1JhoTUBVuz81Vfya66PK36DizoU8EuUv5oYhdcDu",
  "key5": "Z9fffhhr2FQD76dt7nANv4pjemGPTdZ3LpPqFfzxAgt1zxVsTzCLdHygK8Tn7BFdkESFAPWmPorfoakduorqY74",
  "key6": "3qG1McLXbWqEz9Q7b7qqg3Lq6W7iwW2Q8qQfQ68pdqjieJhLndgT2b2bwiKUcz42h5gUhBrkH9s5Tzu1GVCnc1v5",
  "key7": "XEVaamyLXFPyGZqkh6DBDnjZHNfnmyfk6fy6DoQxmF114L8jWKsqTj4b94HvmVwNAhHnpe763SKFFSEL94YTeCz",
  "key8": "5ab2ejpAV4SSqqKN5Ai4uDcw4NjcjqGgGq57CmtoqRnQsRrSSLvWbnE7Za75dJKc783zfYeDL2KXfvW6n8KZQFHv",
  "key9": "nREcmuscsFzA1ytHa9ZNr9gaNNWWXuzf3QFWAaH2dS9MVjSknpszfeUYCMPda4TUNvJd3rvrsmYq5dRSiHzYejr",
  "key10": "j5WfVvzvCdQ12eRYYnpT78APNfJzckxSr22qHZ6nSx3RmmArTtDBzffhPgZ8H9bNtsW44E13yEMtXEVDEBksyvU",
  "key11": "qwTzvZE6aGsUUQMKaYddX813oRSs6eM83oDtjbkoCnRCJNPFqEtLcxND7rqp5v5nyVCgbHTXRE8xVefktn3iVUS",
  "key12": "4ekibh9Jsna4XvGHVp18bq5MwHFzkhCgZHLiJsyMTPHqJEyW8dq1muCgJwSXnv1368rn3QQg2YbtpBefWzYCv1FE",
  "key13": "4iD1Tx723uCYzBs1ucScCwoWwjG6wwekcL5tY2J8Hm9q4CmMfaf5FUzuJoMvJyQRyWRyfRzzbJGjvR5D6puSwqoh",
  "key14": "uzQc7hTLC64fMsepp6h14XGnq6SmsoW3YNzG7PDKFe9qNRgrE7F53yRMh2ZCh7k6EFdsNWKT5Z4yka4fJXkB681",
  "key15": "4nV2ZHMDyoeK6vwJQqAK9kqymqPi2zNf9o3nxLm9DdCfq2AP1FDM77gDijJHWuMuD3Yhtsb9SkYQCwbJGRY4bvUw",
  "key16": "25Le8qY143YkqkifJM2KyasfR8xTUiT178o1uysm9vzqPsWMykLYzH3DQodmZ9XDbxdXTxaGBFC3ZkkNV5AqQMGN",
  "key17": "qjvTzELzXY1C47wdUwzyNhUZghzn3UMXcvzxGBc4GhfYS3zmnaQB3MzgSoFJ4Y331JuPNzpKL4PP3eq4YbDWCK2",
  "key18": "3tg7msRbHgdgDM949sEtsVXHeuKysLFDRRUY91rTpSf9GJK8uvh8kMCmb3dpWR1BftwoJF7zaCrZeLCxsk15iXNf",
  "key19": "eYmySLyCM3VakFHchqgeqz2T66HQ6V1Kew4ceND6Znm4zzAJc5nSzcjAs3GW3wLTEMPpn8uHXkaodKgwxpa7goF",
  "key20": "48LPhfpumqYHnP3zSaNgWo3qFgwdnkU27CW5byax1GckGimND6pvH5h3TK5JXt9vf2kJU8sjuUj9Pm7rNejwCMs9",
  "key21": "2tdhMp8ca2TAMSvizg218m19ZJtWdeN5hAcuAytBQJK3siYMpzyfmaztdCqMUMG4sDKQmvDLNeni2KB7G6hMzbrH",
  "key22": "3stNbwaQJL64JzVCHV8YPngvamHaLR9HrSNYif5vWCkbingKuZFAymh9ofG4tPPsBfKtkQ77SWiiMHC9rMerdfEh",
  "key23": "4GeJabBM5sHF2A8orhiNdVjXV9GF7uncZCFt7c9Zfk8cwdmePLCPQ2T3WNVTqAyZcwktckJ62CcFPD1Q4pPhQ82C",
  "key24": "4Y29WcKZRVhQ7U6zU9KTT5Zc5tEGjVFsuo214T13mXF7HgejVEkJb9yjX9bUyBtpRy5ieehELXw6xdFQ3nJJkY3U",
  "key25": "MFBZNZ11NQV8eiBDmUtmM37f5nuw95Bgj89YpDkTTGC6gyxWyTVXbsZKjs58YhUb5JK6jTiHQccKhTe2u8gRw6J",
  "key26": "5YBqjcMf9a9ogeLLv5TvFAouKfN7RjMkGXeuAbVQq5R1Z5qP4JZqXWfAWbvgd4e8ozd468u4Cbh5jiStyawznp5g",
  "key27": "5bHv7Qu9akJeWioKZZJKatmFwEez238HrXs3aCRk9LTxuaFLFfneRZMyM2RHUmKnjAszg2ihodRjmXgiPZrLaDrP",
  "key28": "2FaCeWgdRMhhKVjBAumFBjEJRUjcW9qNFpziqx1TXF6a9JfEEGUQaRXoXfWy4xuriUm4VVNUrX71fLNDQ2nHbz6b",
  "key29": "2YTj4nXEBu6x1ETVhqvrHpJ6Q5wfJYzeyR6GTGgahV41arjSqJJ9sb1dmso1HDneXAtArUaLUyoQBVxieLvpjaag",
  "key30": "4etYK3jgtWDhGdzpRCDvDBFK3mP7UQ9fVa9Ege51Y9pkFEZkqnKErRYCMkuTxYC2TNWTXDL6MET1mcPikCmSvmxC",
  "key31": "5g8ZmepWAkeUQH7dpjJqHHF8Ue2aXrfh1LmAk6kEbvJexQVRFoQo1rbDX3WNH27o3R8LgbDnJvKLtdFnCBCMSidD",
  "key32": "gqDuZDtvaYBZsL97DmY6cYSuY9X2gkfreQfrbRejzsMHMe7ZbnuZeP5emSikHi2VBC9mAP1vtKhAiQZGRcX5iqK",
  "key33": "4NAkbA1ff6aRNLoEmwK9nLE6HwJ9RHWBrLDCD6mh4247prBKfNCeDyJEtyNozj4RU3vXtxmAeXLWy85hCd3JHs8i",
  "key34": "2Dxiou2MLSZ7qpqouuwJUKCofYEPJzsgBFDTpYMDL6amS1Mxwr9TstkXFrZgxm6tTtivSdE5HmfDTP71Ca5juFvb",
  "key35": "24FoM9R2U4CitskHztwP91nq454QtEH7oi4qEniYLHgJGWS3zFEyeL1TrUyWXxD9yQTar9e38kauu9AGDYBFWbxG",
  "key36": "2bnHBP4RT3bCzpp6PwXmEw7VCjNUU4khCufvJ3LkF9KWCzY4qLJcwafpKREyfugR5dUCgKs1dmvrBBFUCrFgtbkV",
  "key37": "2HvVUUoXQqNHjUXnvcMLJy56AD9ML2N1feASeSgbMQ2pWtHc2oXTxihwHbaeRtfhhei2HwinS2fgevSeKRwYRjC2",
  "key38": "2VdTtuSugAVVK5vt5nXHGAatFxZFSY83fyaTSQFJQMWKzVJa7A99RjkGbQkkAqQLkJo1BN3NDTkLHofMnDJAMWDt",
  "key39": "xZkCREsYSPmpfbcoaPodNDAp1TwcomvspAJa8nBMteYBbn9W2abc5RvYr59mCtphg98KJTsB1Vffkrzzp6uNhjD"
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
