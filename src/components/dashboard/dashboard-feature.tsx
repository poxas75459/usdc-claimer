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
    "3wrEdHT6aopn52FTPAgVkP6b2ncQkhZcvpPrhDvbGcnsPPfSp9uqoUFjyVZE8zUFqwvwVxMJDtYCFaHMRf6kf83Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NjBKcg19La8JiW54kBpZWg6J1Jfn3E1G1C6dkwNPbDmiWc2rRMvkkDeqb3BnfYVrxKBKzcRZ5yiS1WRLVhEYZof",
  "key1": "2etyUE7CCXqShdsQ4xu5iENEutLBKat2J94RWjQKDVCTXgL9dqnmeJTatbwnPBYhXQHaK7riJjgcj93Egkj987z7",
  "key2": "5fSNFNLz5eKReREU7SSo7h4ZzCgpWYngYk7DdMaGi667hE2As8ejEyUa2kJUF8FYZxWJHwMpaib8BVC1up7ndzhB",
  "key3": "2iAysg9UnHfo6MFyE1RFiHp9Qu3fZzyN8qBySsdmiya6De7oSb3CA1DGXnTJEW4Mr3XCMv2YurxH2hK4DqymrZ67",
  "key4": "7NmrFSFxb5S6pgmTktA8AwQ5jUdxgrPt83S3gqXwrERQCaYsjEgrKrh1kfrsLjPynE38ruPS5BHEyE6QFuhH7gH",
  "key5": "FRmVKR9eXNoJ27R9Hdu5231upFK7XqRyusf6Xaqmd4WGj195pFcCEuuDUV7E5nT37srReqBDqHrP5YiDrBdGJaL",
  "key6": "3FUd3xeiEyGiUTHUQknQgCgFUnkNjHwFKF1h7cpmAN82s1kJGLCnVyJQpkJ9dhSq66eQ3JJ4zK9sfSutJnqTG91J",
  "key7": "3eJX6LxxkXWxqHDatoCeuHWqUeeooyg8e3ZciyDt2R6G9idCQa4zgx9VjNjUEZPTvetLo9eZSmzjHxNdq7Nnkbgs",
  "key8": "5oZR4p1yYUuw983d1yuQUWoL6PthZsASE81Peq8bmyXMXKNYi5ptg2QeAjGiAaUTBpvd1zcYyPFo6GuD8LRBuGGg",
  "key9": "Xd9VbPYPJMQngtJUHGxoc6umwe9VAENpVZU5RCB1EoqWDfq2suzqa6spqrCG9vpZmriFc2NMRx9gautVTnD2HT1",
  "key10": "3nvJPy8k4jYGYvNTsT7d5SeoSUrmwDyhvW31AKxCT7w4qQYx6Uujf437mpEHuowUCqkbQpche76CcAY8oGMxbw53",
  "key11": "45ff9Jc7ca2zWv5dS5akf928AtmjNzGMv3c5EZBrEBsdDmrrEtYDZKhhwQ23e3d3g7hcRmpJG9Ke4snbgX6j52UP",
  "key12": "QQ1fdNM5Xq4rvLWNC96BLfFZXxXT3ZEwh4saus78tXfE3zooAm5K8WKM3s2qVaHV9KQ4Qp4eypvQ8og9vFjntWN",
  "key13": "3BGTQXhQDHCJBgpyWRopoWgzasj8o8W55Rwqj8wTwuUfmDKxnknhUBgpf9kPFkYWoAnTT2FsyQdUvD25BtY5WmXg",
  "key14": "3Av15fRaDfzheyfPuv1yMmW2YtnKR5nwPAE3tf2em18HxW7XEDL4hmRq2BzHoENEqR638hHqtLHx4cgR9caMAuRH",
  "key15": "4Q69uFcgSSvDfp5GdPQBW1Acsin2ErvNJx9Qs7C8w6nYGVvBqaBRiDxgAKsGsLhyZLxHoCygsKFAsqEhcBNPk1Rv",
  "key16": "2iwQbN5RiMbtzkkiTbdioi7Kwt2umzoWXPoj1G4Euvy4HDzNrnwXpYhTm2EqNLDrxjGMAa9aP3YJZHauH2PBaT36",
  "key17": "2EWoC4YLmpPj3FW3kiwyqikCRoEezvNBkuq4cJC23P6oCEUEHjKi8RBSnVgVatsMnne3EHJWPrvQpCWSRGcLUprY",
  "key18": "UVmqzaQxEMPhnfG51ZWwnTVzHLyqHsovEhio3Un2ghaev79oJBnKF6Ug9S8YxQH4HNJRRiz1aLFEHTkxtKXcCmG",
  "key19": "3q9rsgNDRdNJ83VVDd6yEk4Q2G8hNBn4PFsozniJiPfpgdeRKHeMKUhwxpb6wc15NfBUEiYUJ5Lf5SGAh4BwZaxW",
  "key20": "5XcwjSyEqdigapags8LA1WQJKVdRETbniydf43pL17WU8zgk7SC5wBLjzgVxjnubdJcWFxWMRn3DhBZ4BvPh1pMs",
  "key21": "35XSRpNDWSJffH1zFQnRU1JecoSfkbcaX5owraGoiSrhMZ1X3uCAjxLBhPVLC34pkiqdrYVxMA7A8C8rbM9Hv7E1",
  "key22": "5K4D16GB7pMZnAg5vRp4QZPdTpcE6e2iRhQrEwBaUuAzB6ehkXYZNHUC3npo8oavzuvjJtDdW4A6o5EUHkQdL1np",
  "key23": "hEkKbqPD9VaxyEacBXwAQbiujhZf6ntrpTgNdJWtJRiPYRC5A7CawPGXLMthBjR1UJPcuKqHfsZ5NFP3EzLDU5L",
  "key24": "4noKvGYidv7DpQvRFXq38nGmNeXqRkcTkz9z1XQ3EK72Xosyu1tp5FuEmVzngYgmtJdZMNMw3TrBA8Cm9KwTDhqp",
  "key25": "3nSSsbCoNsiMk4KLZGsGWqBcJBU3r4eXP8kQjrE1iSRzQUZTkvq2VcmxktH7Tahc35axmHinQp9W9ZeCGL6GvSvt",
  "key26": "2tRcEpxBfmAPF6EVcE9b3WUERCohYkAmRi8sbmUo9qU4gCVdH7LnUGzWB127ybPKaTw6vcPUbM2w72uzdpL9zomq",
  "key27": "5T14pgWqNcrGKt7nchyuEpev97h8XQf3ipCru7uKuu7HT14twxDpXn7yWF6ZAStJ4LJDCF524QynPpMuY8gSxmQB",
  "key28": "3k55LWxzaxtqokTpaNwwYsoJEeaE3bU7UXJKCg7s2f22UWRQrcEFdyjtv7MVWBJtuAifiMR3gPa8Xbxme9Xp8BwP",
  "key29": "5Nx2EPuGSnQHykcmrEWVYV13CykkHfDuq6xcmxqHvUuBzS6wkgX76D39h8dPZk3WAaUtkDVJUPsAVqx8TDkCVwCd",
  "key30": "5frHY1cGRKWSi6uRX7YYcLfUAVanqALqZcybumtB3uov8FFVNRVfRoax8JcYpb2ZdhUKXUM9PpzXYMkJBNbuND76",
  "key31": "C7tb1nPDTyy7DYw2t4mZpK81d6eRwCMLET74kuCio3Rw69xhH3RT5jxzpze8FS4t2BZ3xqu1y6i9Xbs2LWvsWYP",
  "key32": "2W2VZUEuUPLUTQgKcZMpa9BmC4Cyey6p6pPLk1KndQbDY7gTsBeJBtYu6cLJr99ZaDr23vLbayWguEh3u3sn2Uqj",
  "key33": "66jjcWw3oAf8EuoX19RwCHYLUx5PxpdKgTkGQxXs1povxz4JrJmLdTaiCgBqZGmXFpx4fQyDm27nRJYmbP2Vqugo",
  "key34": "4iRaHBS3636en94CuqeUcRiGWsHCxK2PC53jqAudT73Y5HoGhcAqkQzPmVYoKH7jG4nAyc6rtwiWHTS5Nd6eb98L",
  "key35": "hZRm2b8nNSgfQvEMWf6cwcbWGN5B7UF1bVDnAR7VwtKhaq4kM6XbDL7DCdggRddKVhrKbo67BbHAx14qUUox7EJ",
  "key36": "3fWG9R2QBNUrxiUGbfK2x7GCsEEbu4bhaVFzQFiuET9JVpLJPGVzUpUNQXLnhXXSU9S3tHfTEAd4MgxEwgJhbpZv",
  "key37": "34td1eqZckhwngeyySN7FdPiq2BHC3jhM8zYxxqSUHQNvJapWQbTHrvfXyNo48S8MjEcn7niLy6qiSdhkbnQZKZ4",
  "key38": "2v1uuR2VDFNqDbzWouXHN7mXnpoMdEcWpUyTr5rig3pFgDfdErs6n75tmzAbhYRSuAD3nXWtLkxQs8SDMrFHmpXp",
  "key39": "3Dx6YaiiV45cu8pCANQJYzXoQPGQXQP4Vb39tYewDr8DyFQWasZtuX7CQ6jyqCMniSqjzm5YhZryiRhWLPgHPyrH",
  "key40": "3oXHY8jhnMjY8N58gmESAa2vpNdwJhNKWAA64tJYMnRvukpMYun1UemZmW3w3WFMmZkWTUw1VCRwPfHKCuprTDVr",
  "key41": "449sUqoWy3py2PQTUrAYm247RfApMw2uWDoQp2HTepRK2jHYjQSVWAE8KXc43wyKQ9ToTfLRcuL9Eq84gz7jF8JH",
  "key42": "2ehx6WjWWFnsu9pkf5D2bPG8CExGovMW4AkvForNKNmzaYLsfhaWmjKEzderfKNen6tACjXEtD7spSMzJ5XvHsMz",
  "key43": "4bfMRsEj36zjhGVbZLdjwuv1zrJxR8f9473xa8JW3ambYmohD2ouEKV9HWDcpktK4BRksdrUjq9p7gxRtqeAjU8d",
  "key44": "PZDNf1PZrMRNwL69qYXxSjtJjmhCzUYZK2fsqFDaNqyAnvpYnyf44cHUfoMGHKMEm2XFz5PVcHv4KSQfbQatcfT",
  "key45": "4PZioQh9kT3tFHmWTvPwr57xPQnQPiQbc9BkTfLomfCboMZLTkSTCXZqsunhVFr4psdcnWk7wrfded5uy4viw9yG",
  "key46": "5mqjTXj9MNzxeafYvmhKBF85yMZpTW78AqTfov2Anhpce2NpVYxUYbaLA7ksgqUNkH1Z69vp7BswzWpYev9ejr6F"
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
