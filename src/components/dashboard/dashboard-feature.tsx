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
    "N4zZCrtutx6w9rReB75DaPtctHgekcq5JZb25U7mobnYQ3nq7r5oj4q6eZdWfkYChAKKN5659PjA9Ux1s18natc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cxqtVneypTURRfMZFGk99QGj6je8rqJ827v5rpwwSAFvyVQMWLannhHwF4jMH9gvmd3ZZX93JNjsTrk44iq9EV1",
  "key1": "3xU5SoZLUogiEHRAq7kF9hvXzRjDPQ8Mc5hX8Dp7sxftA1oiBe5uaSn6UtoE4HeAr2c2P3oQYrNDAmEHm9N2oq1U",
  "key2": "47Migr8VyU2pkxc5CQ5Q8H55g4tGQGL8t793ZjgentDWjCpi1dzmsmmW48jebNquY2GiMaB9DxBBYJxGQGWNgVnX",
  "key3": "55u7Tb2SRoHghPYBLdv6VvUjvNFwuQhkpFzYquk2opZivhwNiev9Zazr1Vczp9m5tZCvdrcssughNUrgeniFttZN",
  "key4": "5Z4tGAwuMb8Au1N4HK84M4FnHvvhqmMrdSERk5xaow5ue8bchHMzrZaS2REzKh1ZeVbFvytzRWXfSpKP5R7YrRvG",
  "key5": "4Ef7hpb321i1ce8KcTeaUvMoxMfiVRwimSEHw8xjuyBBKupCML7Q4MWddkpF5TuMgb1WN9WuaKjxjHbSNuUYmSTE",
  "key6": "3ASsrHcjRGQY8VsyidibmtacArQrEHbFCkSzy8VyqXLer8uTSGvUFmGgfQEnmtazDkKBx9kheRJ1u4VPEyJmQCBB",
  "key7": "QhCdKRfYvzApG599nnpan8VAaqLMrCFxmHguorrf22aHTTp7eoLpeNSN5jYSfqqKtcY53zSQ7MLBebuJNMy6yNq",
  "key8": "nVpCZ92kj9rzgtv1Z7KKjRVn5Nj5CAaWTkBtW6eYZwnavkXfL4G6MZ7obUqcdTZPN8YULfxFrAchdwJGBAbYVzC",
  "key9": "2Zm5a3maKagTUY3miyYC4buEN8AE8aeoMEC373z9ymsXuJqLNU6eKeeUN95qcogTzyrNNHkqkYBH8pKB6Jmngsgt",
  "key10": "3W1fgf9ztcsSNoR7YndWRPUnwxEXZBuZx7Y3H1CvSCQqhnxGMFb584RpoiX1NZLFr4mwUFJ14Kv2ZJ1Y3mCHTtVW",
  "key11": "4vy44PVyBx7bXSRDWsifAyfxxYA61zYSSRckXpihGgGdXcJRDkpVj1fVHeoposDjzhKpkL3H3PHEPqMJ6hN1pvoe",
  "key12": "4xdMDiLzktnC636TQywCU4b393YP21ribCG1j2Xkveet32d52s5LPAQxk8WMFGiVFto9Rk5rxmp1vyb55KDxUKBN",
  "key13": "5F26nLDaPsqKMEGx41V3qhD8j7x5JatgcQQpeL7T5aTEjB7qE4QepsQMLfnEYM47Cc3UWSoz7RR79Vdu2MQ5FTbA",
  "key14": "phWBezYK6twx461GRTtpv958yf1Q1k2CLFPZSUHebfQJhyowQMYSZySDvhB9y3dL19gqKdwpJdLqoyFXb3r5E6f",
  "key15": "3XeqZYdUSAMrvHFXsnACsqJ15hSMzt1wk5C8RPzhVLQ1UWRPNRCsugJPjrpvFCx6DBFMczRhN4mDm3P8rpByadfY",
  "key16": "5N3Numw8DC8aMv2QC7h6vCEpfrgdvoCooQxGXTGM4J3MvjJeEYpGnDXt6xYuqguUN8NK8Q2ogVmy4au9f1yXxssc",
  "key17": "5Uth9VzHmbPW3iSTJiyi2nPiqhfJDbEtRiQ3ycec1Xrqwf7uf2Scm2ytnaS42CJnkzksqdErPuZCH4CpAJ2Kj19u",
  "key18": "3RmCEaVbZSpVhZHQpHH4joLvkH4aUmGZCSzP98vnrq4mwu77VVF7LxLMswWzfcCeWCEtp959q4c8p4Nj1XyQLexa",
  "key19": "3DA4eWcMWG8wRxbMNjqymCd48QrH4FiMseQ8P7iqGb52wKK5WBXKKUZFa5XdQVRrfMsTQiXKmRav2FXY1qSSzp8x",
  "key20": "4xdqaHkqFRdpfcaViLSdGfegK4LdzLjzFsGEvuNeJgw7U78xQ3d1f5JTwtsJ3jmK9AwVSeupU14dfoJ7Mzs1mY8G",
  "key21": "2dbwXmZNGT6SUYgPnUB3X7gWceEPjZCDaxgPhc8kJodswAUYdtWiyP66v7qUbCxcUzgaULuLXp9RekijBWpKgyGb",
  "key22": "5qwsEfrfVivbvLhXjCc3E9SfNA1zWCv44eMCCScNgEYYbpGuTFPRL5fB6g9ogS5HYCn2pHWqMob3sepYWJYXXV7C",
  "key23": "32iCRaeppRCoYRNn4gHxgGn5fhsZ4Q2HyyeQ3Yj23vn6ka6VkaUyQAxB4yfDsLuRAG3spLvBPeL12ghv4ueu83mo",
  "key24": "fCuqfSQ8vpvxCYohKZzCGeavGgCMqXHQh56mh5L5mdoyaxkVSkUiPDCrZZip5HPPtp7CbnHSuxbukzTfcuuqWV6",
  "key25": "3quWf42pPACAsNv2Ae5va7V5zTDaUDdFCAaTKLzPn5hE5BDANDfkaW7KH7BUvCDrm91C8ZRN75mWjwK9rxTDSyph",
  "key26": "4rs68DJ9xjmwp1kn98b7HaZu7MwXyZs4gLiUrkFC3cfoKx38DLiZvv9T3mr7YYuDmmn5fuKSz7L8xjxiZu1aLXKz",
  "key27": "JfDNfRNTBMfNFoZDb4BVXtpPTxixeAGXmPWwRU9ZDusrFnwD8siwqhkgmHCxjVafyxbjq6TdWDqu89NQSkTfpk7",
  "key28": "62LKY8kabg7JWqe6bd1st5hnFsUpEQ3mqtaHpAyD16GJgMYufeC5agkFwpTXEdHdXmCQcQUsnnwqxR5up2XTWA71",
  "key29": "DujQjWpuaiPj4mLahmGR9EpRCmPoHVrzcRFpksywac7tYoqwmCngErNFvrmc2wrjJDjv32uJw3hMxP5W7WDR3N1",
  "key30": "5GmsmpHUjby3YsuHP7rLAGjetBHtv6mqGLi1wM3MUQVx7sAbQUZqxD3967whmDHKUa2Zv4pjen6dcEHjSYyi1doa",
  "key31": "2Et3yM9Y5bqxSesyrzwEPkjdFo7inf7ouwCSfsyLG72avrxc8QqmNNg1BVM8VQEEC1k4gGErQesULejV6C6eWDAP",
  "key32": "5JV5nY7B9GuH5N4XcbfmLr4sMwoPQ1c72uxgrKKQqLfNyLoF1rKZez49Lcy2xoywXsCoSob9ySk3SepyyWsBfCd9",
  "key33": "2xkTzUiA6QKcVVTUMKs4ZX3sbyr64FwFDbY6k6YWPKgUn7hHVRmJG1v4rqhFT7SuFu8JVbVBPfWkHuhkh7NavhWj",
  "key34": "SycTnkKp7jTwhYRrNuvWo5vUmAdRiANmKUDViaczq2HPYyFFRgCh7vJWiHNzyRx3BgmZFXrGCtByxGUbz6VN91t",
  "key35": "4gisPKarbkLGPGiL29YHr4gzivUXdyKAeqtNK9cGM9oB3q8bYzbFwCvFkpscL5doz1C5XiFRSuFqh2FwoveikCy6",
  "key36": "HEt41CqrjeHaegPrZVPBmFkRtKMzsv7WrQJVFkBAGhiBrSSg1jkpi84wkgtriw5guAm9iAbNcakxDW3ShE3YDRU",
  "key37": "3FXRopkMtwy6VtmB7csLhnDig7aWYcxQLE5KHzpZsg4JYRyhSdwu199M2U165riP6TWr1oGgZVYfZ61E1zQFXz2Q",
  "key38": "UCws2ZU9LMLG9t1pseEGjZNTMZQmiGtUjtogqpHreLrhFhVEr5kaemT4HtHoU2p9rY6ayJ8QxvtLh6g8C1uYLgW",
  "key39": "2hLftnDdJoxway9vCjgQs6YU1uhCTkfCewo8yovSYz9Gq7W7cbYFPv2JuSJvHje88k7RcAFTZdGvBv73Y45EbjTw",
  "key40": "4utFx1AtF1x9bvXGpcgijRLwVw67Ru2VrtErs5sajoRAkJPsdKhHsj2ksqjcFNvu3etCL9vUJdXpeXc8UnPvbHEz",
  "key41": "ZGXDXZpZoESUWiAssaTn88JCFxs9gCHKBnjTBMKC3njuM8JzeAsY8vfgZ4Akm6otp8dRhYy5ojrrU64sk4bZGx3",
  "key42": "4PC5dQVRDTwx5PcmyQiBtNtzHrjEJLDVsVfU9dFPbyUYfVGSG5thUdALPcq9QqzskyRuBqVZPQr151Stjux2RXb8",
  "key43": "3x6tC1VLacRCmHAiBvbjRqfFz1Rmh79KPNNsvXRCC2wtbLQWmYKCGYrjepiv9ceJZ7c6sf6jTMM23e5iPNBy3xBq"
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
