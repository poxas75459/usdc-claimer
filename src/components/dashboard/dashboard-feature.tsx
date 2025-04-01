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
    "5M15as7XSuiewMKZijUKVqwb4d9E7uBfCE7yHgKU3kD4Ps2dWcxPxM44r4KmH1Bq1bYaH9VLjhemd3LotBhH9UJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jzeZrsvMQVF3qeg8a4CiKtjse2vFwta4i2CFcpeJYGQNWqNqowGgRoygXbzWEFEWGzJ71hWaqTxEwGawKyTF2Uv",
  "key1": "3sGFYjoTcNC9fAMMsFtebFnD74F26TVCoN1xcKvrADyonU4VPeXFtxue9it4TiE1Dsc4urSWDDMtsATkPaNyrSZo",
  "key2": "5z9Du29Z1qgKfjD1AQyZdDMJyqF4NzuVgunpAbbVzgkLCKpGMsc3UmrVD9GSjSz84ceRU6ezs3kANuHvDQpRxYS8",
  "key3": "4oJuM1BVfhsaujng7r1T9KgLg1LtakyhN5LxPMsnJkS9sUW26EWoKECMjufNEqoXn7uQoWHSsSwajWKjxjRy4gRo",
  "key4": "52harCWvZ2yKeoFtFfnfJSE21metZyKCQj9rmbaNuwQFG7MUNs6Vf224W7QyNY9htADoXiKWzAyL7rmW3jriGdXY",
  "key5": "LRGfStnYzHmLkPgVTKP4XMPyg6NvFay5U3bFNoLmoeSvNbb2feD83fYf3nEcvNi2vDVrgx6jDrC7af6K5N22ShY",
  "key6": "6PkbyfunyHRSt5zYjefo94auMM6NPQAxBVCjeofYy2QWZCD6kNQSoMDiANYro5nmUhHiTQ5qiYHB8McXQFWBrYN",
  "key7": "56vsdzGWLoPcy31qPuTs5Z44HGAcHiR8Jf24dqLuUJXVWLrUtgQZGavFBp6F1xohxgmubD8fyy4Bu8HGdnEdZdK7",
  "key8": "4fPPYFXimaJb5SKRcqJyVb6ygyDPD1VSKNsmQjAcwLDkATTxmaRRpHCtq9UfiEpYYjHe4PLu2fPtzd5iN4wAvcsT",
  "key9": "3qJdq7bNeoaBDup3q9YMEVWhQpkdDwy2LXxiyGxx1pmXXAVECwFmUykGW64hg3eDs629KgxV8GoUMzy9kXU3P5xo",
  "key10": "5pUvHucMLFNuSonY1KYygQHdxGDXN8SUo5TQb3qZeyZFmN5X3XRNkVf2vVCW9v2K562QW9cabgE7vjQgXfii47Lg",
  "key11": "3mR381JzZ5AqABJdAwbWGnY3js5TCqFTofRAFWog2mm9Zm3n8jk7yuQcK174qVCi9g8KND6VuMsbAMYG81ki9qsC",
  "key12": "8jdhChPpc8o7b6fNuwbsGwX7FyZozsiLAjPBQoynoip35C9pidPm4zmPYnVMd11327iknf8jVDKSDSty4965X9c",
  "key13": "44EUvV31SamCTPWZDDFept7n3T2nay5UL13yCNXdg9kopHdWptDNmda2qqQ8YWUipezXPXEyJojraY4SuSDqQTEa",
  "key14": "5sAfEicbPvcTLsoKg1y74TdNJmnZNgkuo6So7NJu8kq2qiNJMA26kT3oXYDqMj2iKBDZs9UzcHr3YavmaeoDvwV1",
  "key15": "3MRLEP45kRimAvg3aYoaakyCTCBVMKe72b2GZtGBQEnzvLvBnVh6JQiBZ43sn96buQ8HQwr3dotv8H5j1QLwwcvh",
  "key16": "5ZJtWRyN63qaJBSNiS5BmS9X8Dr2Bbcn51NdWp7jfMFJwW7FkNz3noC2oZhLhMSRrYRVk2CVmW7BcGyrkAq7HQNo",
  "key17": "2MoncmJiyek51svwjHBKmz8ErKR2xbbd6orsn97DrVhVND1jHS4V6bLV4EgweqwVRDja1SmBTe9uVunmqngD89P8",
  "key18": "4cbSXAF6Xg8febD2xm6LVVKrJYiozpPPmjSyKRBXUCPpzfUzqgaeViK1cm5T8haY1FYabqbJZ9X7mp2qUeebVB9L",
  "key19": "4ZNeMopXit7HzWELnkiGYuu42g4Udpc4K13S7Yb5TNjtkkWH3aEzdm4RmRSQBW7QFBbdQzyzVwQsAD5bawTz2d8g",
  "key20": "2ecGyUe63FQf5bmFwdmFgn2Ji9kBDioAw5C1JPN5CnKrzN11cvx4bFjJWYXzAncGqcATfZBzoLhsXq9ff3WZHZNT",
  "key21": "5haPkaRcCYTs1wDb6hFgNGXco38QnbmRmGoH9sEXBZv56hsBxF17rUm3Msjd7zSR6uVwmnY8tfVUnEsGsA3EY7MN",
  "key22": "5xfixFEVQ12Nqz35bV4i7CktnHJ9GSG7ppCSbM2twzXd9jifWP7rDRpAi1iUiVzJH7vp2s5h7akm8sTexFA52Ad4",
  "key23": "2mWBCGVb6F38zqPvJsjWPySfmW2tzwSL6ai8C9XxpGHznhxKp4sQCbxkcbeypHnvHEdd2AuTNp9buYjasvqDdaGT",
  "key24": "uvXmSSc6Zp9VzdiCgAsjULNPrWpAwjWPUPB7Y96kg8gJUtuaJbDVSXZR42Hfk7nMsvp1Jcjv173jmkEg8mQz746",
  "key25": "2fNy7k6n9bY6NyhbWdUxDX97ieKwaeQ1V7wnKjFW9BExHddHsxiDqCBKATc9Exk5g1Uf54rpibJbLR7MyQkreiL6",
  "key26": "PQbyf5VPBn3ZCbyBU865XVMcCHVC25ynMg3S96dEfQvEpZey3Mi5bmPFtnfzarBe7Ed1PW22qEH5wnd6S2peZWh",
  "key27": "LthWTDsbeGHfwcEpQ2FHdYZR1qgV8cdeQuTMEjfuweSeKAvSvVYfsM2MC72pCXwkkRyVw1ZseMZo5xEo2wroKTs",
  "key28": "3Kiax5NfTRWNJ8HPwaDBXnRzuoqKNn4XozbEoEwDQiEjaWxtJYZswCQbZsorhuV16YQzti3DA2hzEDGyjCHGjCvR",
  "key29": "aXdPKUcP5EyuZan8PSF3T8DN3B2WX4K5o1vWndrBhi51eusedDJeHQD9XDhZ4JpnJx8qiuXEqwRib97F9TpZkKC",
  "key30": "YBkfmUko7amP8p8U2coyNdbs84Vq4snvpbvNDCG521rwtVWsz1QQTsZSFd9T6nT8Tgrj6oAQSHDCAKHu7jS59Pc",
  "key31": "YFFoKmXZUw4fCFqDnNniPkTdibovC7C69QKVYx32mWornxypVdLq7Zwjs7xfbu7tETPJBk35U6CZzdBt5sDZPic",
  "key32": "316EtDo9LSqcwdwnK13tqq1iQWAWHJg8vhRwcPJx24CfEqvU8jX7qL9zdvRKpBpiYhYZ2rY5vSnud1B9d6N2rbX6",
  "key33": "3KRGdZ3a3MatHSzCEYRUuDbaLb2ChwXUephhAyjKRzPySBh2hnEbwGD6CS3upX8PjVHVkRVcAgMorzFzTHbeQN6p",
  "key34": "pTRJWMEMHmhcVgcWJCoi3WPp74SHFHNV5PGmwcG3ekqCEaqPFE98o36RAAm1DHwrVuVmM58EjfpLoTeeyqcUnyK",
  "key35": "3ccYDPVa31U1AxnsU5Aspu96oxXTkaUWUexAhZhhma52p6QqHwVJ5ZDPdc6kJo42L1TQif7DgkNVcK5zzcrWfVAs",
  "key36": "53pBiQ1NWvAdBMwb81eWgt5rt7y1JmkDQf2SNuBUprMAyHqf1C39MG6u5uZbXwz9Za8SJpHs8ssAkgkBVZdpLHuF",
  "key37": "5NVAZ5GRDnc67cFqp6tZpq26WkoihxMVCLkPTUTeMVqJ93eQRjjRBv9LVq7ikF6HTxgfs3nnXtaTcsyDftw881rD",
  "key38": "5E2QWE7zee8Lyxj99pQCiXrgGHPmnnU5jCDx3VjyQn1aSxuSuEZKGvhVjVMa2w1DNS3fCnWKm1DxoaxF37y1zFgk",
  "key39": "5gRbzjY2a1v95F4JGkb8PX9nGQDxBcS4twcr4L8m9xKVhsPmT3d4x9WuDmSWQioGQpwNTSxv4pwgJJUS1JEirqBb",
  "key40": "4cENMALQPC5tvyU37MiJrdkZmbQaUkJRDcY9HnrCwUwtUGXhu4Zdye1pMgQhk2jLjhvENtiFhxnw2NjeVLv1Smt9",
  "key41": "4vFLFP4d8FWPDtgXZhKkXJ7y7quJsHGJ5N7TYALmWnTBtv6z6CoCbFat7iAM7qi7zdb7DHCqRywgWfgrPvArZDef",
  "key42": "YvWrdstn5wYPKBhGfq2iDQR3ozosvoAmpt5NXZ7rHAQqTDHmCVmLvJ3B8gy6TnsVrxPPjDvzaYyMGLZtP4Tuq5c",
  "key43": "4zrs98qx97byyTfxPiMjm9rA72mcicCCVpS7U8w8MbUnLvdPtJXuEejV3KYEePmL6bcyL2BteARPkactx1fgTPj1",
  "key44": "4DuZLaU5cbfjKyo4mSgxB8MFChw85DpZVmVR4e6eFQeneJ2YnYWeLa6U82ct6wo6Y4C7i2MvEduBoHoaeA77vtde",
  "key45": "J1uhZkuxFkTNfVwUmWatq1UPDjypeALDXK4W8FJvpSxGcwNqvg3RAvA2eA9N33ZJitdLbUcvh2S7MYPsw6JwWNv",
  "key46": "9BzEYMauUK6xvFsgkDBHuFctbqWi5HhAkkRiQHDfUcEX1pK3HS7ybc5HCCeum5QiT74PcTJPHH8hPhiGUvqLzyg"
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
