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
    "3PStRi5GA4tEYydpcFt5UozFHZoxorsMKCUkmTHMJ41RYB68tvBSs946StmQeEi4tMJTuE42AYEo7zn7zuEmWC8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N8qUrvJLBW6zBKYGH6W2EewBRQNnNuxoPpWdWdbtpaPKu8S6uNP6cFjQqyGga9AyFDS7CuG6Af8Zxo2vyeJVbtX",
  "key1": "2gXR6ekh8xktji9BRwBP95AKn6S2USJVif6FZmuHgn4jSz9rUWfotAni2B8qvpS2RrVb7UQeLdt7ifTB9UmkEv9v",
  "key2": "2gXVFQsJ4U3AoCB3ZNSkWha3xPenHwd6PqTJQRcG5y45EW9LgGvF1ZRPUTJJPc77TM5s68USHsrFcNvpAGGBmXgY",
  "key3": "3m1TeC5qNnpqAHRBgEyW2qkkNXn2gTscL3xCiwUrevF8ghQAe9tZkZjzJ1aWDceHSTfNuGq85PQrMRFwnXMHr9Kp",
  "key4": "3UP9KhQGEUP4wTwv2bc68PmMZc5LkKFMSTMb8foDjK4qrwhSF4UkvxvjUHfKLNKJhs4bhjcHQE525bNfnocdvbWv",
  "key5": "3HzKgcwpaF532fQ23ErUgCiSADaqSDoq5m1rsr4RivoypEVbJKoGTrPDTVFBQgxidSSC8VTV881XMofzp7ZyFEQR",
  "key6": "sASjSp6jy64Ya2SaW6Lx9UkuQmoCGj1hAoA1pBP2er6Fhjj7XJkSuKUSWJBMdpMhGPpF8RQQVmV9VPqdSMTgDq5",
  "key7": "3NdpLtjCKkoRbDZCFnpydsdvqoUxWJ7gxAV88YHktzomTqtufjz3JnLgCPebag99h199nuaV86XxZ3uaLQzNrd12",
  "key8": "2YePkke7e1Xd8VtfAeP13TGLoUqPYeXn8VJwNiicFnKfVZnSibNgzN3Ln3Q8cti3LBGfuYWz4XBPKuYB1nmbKeBR",
  "key9": "4732Jitk3jgtanmvkP9ZGV7V2oAysJaeftxZvMHWMR5S2rhXngNvQdfhyLvnTpbzQf9ePknXoDvhuvqR5GdzGMYc",
  "key10": "43e6pRSVaszzW2fCL24nLcQDc8rQqfTDw3LCNwEDWY4278xuJGM8NT5ukmVpVqZ9exG1sC9N1KfHP1W1LgzX5RMp",
  "key11": "zVYTdUhisGJEHweVKmXabk4xo5x6EjLar38NmMTmj1ykjidZe527E4g9U4AqPPAuAfoSur9QfJuqkU1NFEXNQPo",
  "key12": "6jhoNT4tnQtr7sq5i5moT6rgANdq8vKamCaKJb4beqdfWtxuUTsUUaJmeum9TkmffA3zAYmFqSkpYHQgPs7tZ9z",
  "key13": "4wMKKvzRkyDakaUwoiGbSHW1LaDJebcFqWXeYAFp7WpUE9kfm2oSeHgGZSQWyzjC3kPw6G96Shaf4fofiT44P7uq",
  "key14": "4dP8iTvqPzyppQFVE4F2JsVP3R7Y4ia4k6RBtHaFVpSZ3uNqkW7TiuBxRJHi4pJwP8wAQEquoXvdX1xrHkJrLEBB",
  "key15": "4nhzxmK86oYF1ekHe6vrBGtEX6sB4B7cerFdx8nGWQpUjX38etz2BhKQiG5LSsCwmUrbiyjYut3Z4i65F5cvzwQS",
  "key16": "35M7GfcD8YbXbnjBoNHpffgzyo6HMhEU7krJZMn87MHdYWvXbm2Gg67gqPVPsTU4e5WUiDPy2RPGyBHWjoHLYER",
  "key17": "5CYYHnyBen43TJPySfXX58Lj9K21DWYDXAD1wgt7KQMuQw7n7QQMAEpKDQkd7wCfPtppDPtknVZcd5pEuMjEqtzn",
  "key18": "2X6kndcawk4BqdgNMNjJo8xJRaBCskf2KxSy8gem8qh37aV9dDzsW6CnBtSJxvdut9g5zuSAtYs8xQJFKefoXfUa",
  "key19": "4SMXaU86f2kMX1Gx29JaHkcqBKKT2V3T7KEytjwWWKdvTGG5mX1RzyynZgyphzmG2qmxv6vQ7u1TBdtjB3tXeyd1",
  "key20": "2cqE7CpaVXdHf2KV3WeQV64LCGRqVPSuMiTAMNEbrLTtYkJua1ecRkKbAcRfVzEVTioEFjxkq83ngrMYBqfL1o2q",
  "key21": "2xV6DqyGcTcp4a3Aj8upG5NNEd8CSifAc6oTXR9Tftd8rFEfj284RGYgDmgprgoDaqKF1i12z2ByB4ZYZQm9EBA1",
  "key22": "4rqFPveVkemJm9qzJ3bARAtgaNcqRWzTLCPoX762EMnir7xjaSmxtEu4tuV8zGxQeM9BLHunqR4ushp6FWQAyNsX",
  "key23": "5KXr8JWhPEiJGKTdTFZ8N2eCRrqyePcimEFChvRj1Jfvsvhvnwz9zaAHgmTCALAAT1NrLPFh6FQ4wHnY2PV14mQF",
  "key24": "DJUa9A5SwtqpGPipJnEhVDTwhvto7hxUdoQ7gxEGvTtTkw9i9p3WNgvXmJaWdx7n3mBYfWAsWcVQrc5Ye7no7ZT",
  "key25": "fRpSnRjB4vqw7kEkc7DW3diX9pJbdidfN3jsNJSVFTvT95vxsh19kzQyQVKYVx1Dy81hL2fvKhuDUFbGgQKVnPy",
  "key26": "2PjV7HFb39fUVYLVTPop5mQPymqbNESwKXpnZzoZHSgoniqpqC1A3hhgTEyNtb8V5wVmYhQN4wXgmq9YBrV3Y8k4",
  "key27": "P3mcDPZDQKoNCjYsvjcwtRq33A6dn7CdZiS76SyLPUferX3vChaY5av2KjNmyrR123boq8sfghR73mkLSXGVx6D",
  "key28": "2Ex8W2NP1RehoBLhdmtEXqJyP6UGpRQ4fgvJkoxCnpfcNzCh5sJG1XuFd8usRx4biUkRBmdQF26BH5fVZbLcyPAU",
  "key29": "kfVHimDT9nBpXNJXw4xQ7v876zTb9KCnX9Ebwf2vVVX1GEdxT8Mi91f7JKYXkX56pnvVG5Qb6gu2ZuYgJq4ZGu6",
  "key30": "4bXBp7AGSFbnBfET9mfd4pw425RAa1zCHZHMQSjDfBFYc3Rjg7Kmb7nBWzY3Ea1wtL3qxFMjeA6rAwa1KtGyTeSZ",
  "key31": "3iom7xPweZG3M48HtBKsKbfb1bHCXuCSAMaMfiEgxe9PXsdBGNkp1isStwLp8M1YjjigNmPFk1qXBF3PmHf84BW9",
  "key32": "3YAhx4217VKGz3qHxdKFEPnKurvkMcj8grF7hKsXyVNLb7UbbrmiRYbyuxivLGF2zfHCjBx3xctF6yJCD5TjGaR3",
  "key33": "vpshtKuP7EqddZJriqa14AuZnePAdwLVvB8raCZ4duURaHvMVG7YmkvEYhTirocD3B7x3YraEtVYE93EqLnuvmT",
  "key34": "2z1H1S3aaHemQadejpXDyNvHd5zthm9B3X6gHBtMP1tsNfFzqC8ipFYo92yupgeJMeCgpuJcgTaLoBDUprUEmwAe",
  "key35": "bGhRZ3B7mStTHoVoQVPEzRHse5mB2R8J8XwUw1Mr4WuW8wMoKK7asi1KvQ5wzaPm1NDm6hgNXv6hXBqH75Lc1tr",
  "key36": "5MCWcabUWJJoVDqmKNo2U3udSJBbsEfkoB94R5z7w6YWsndGFVYhRdqfT3U54dTjm5jrYp1uBWFgdNkMCc1goxgW",
  "key37": "3HBzn8f4Jd2fQjNH6fyE8CqqPjSV72kCL8dF8eioQL3xxpPcAR2wjG9RGNRTttPYsrsL4hTCEnw3J5kQd6K67LYM",
  "key38": "X12NVrxMEg67STpSPiNsxvZvAHgwRNuL6kRmmCzbNAJh6sJUgLpSqThgVzyG9SnBCZ4kr2TbbunTpLuHsi7QdHE",
  "key39": "5mbr5pQN1x4EyKZeZgpQV3ms498TD7rzvX5Gj58F5KQDq4Raj8Nz2dk4aqvDmBn9kbUuc6GpXWNZnrdVkerjaZVX",
  "key40": "XLjAAE4qiG6WKF3aygPHAux9HLuXtdRWfj18rwSjoXcUScfbVJ45iaCS4YHFe7NCRiMhkGUeBCbCXgL4SDdd4rV",
  "key41": "4BHampYx3v1ndLorxtfnZqEjoutyuvghFGhoZSUJdwE27MxKYqBcTttqaUPaXyifGrARUSxFvqm3KD7GPeLRQcaj",
  "key42": "3mH9GEU7b7TPpmiN8zbDeUxxvDRsQT4CH8jFefYYJeLD3cJWTAQarL3r3HmFhQWJYvRpUtCJfsnEPjvxT4eQFEwM",
  "key43": "4se55QMWhRd1tsufFzm2ReKtpk1ZLPgw5HjuAm6wgS4Fas8hpdGiBE4Uj7StPhyXt3qim5k9wsu3osd9ttHJNqLH",
  "key44": "YLZbEDaofFTztaVDYWDoHHydpn6Jrxf2Ej1hpMNt9BCA5ToQB6EdmRZZjHKdrgCgv9S8H8pcJxmcmz1zeYJ5YUc"
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
