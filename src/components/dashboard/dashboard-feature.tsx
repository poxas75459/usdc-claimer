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
    "4UPT55KEBV8wERtnub9Dzf1jNBAwudLqdUfWyFm1hHPw76fAsjUXkyfQ3sRc7e8hMrhREJUepG6p8ZhtJvxhKMDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MjjnDRhvGBzZrY3qKFhtBfW9LqXSXE6sRagBGjyFNPxmt9fS6xLTYoS4vm3moKU8k6qZH5jrRD54NkPm3Qk8vvY",
  "key1": "2fzEJEyrGZu8uM39HsWwq9HoEK71RGQ5sGanaQs5VnboYXMhcVoiPJPk3ULeSSG7W6wZw1hem3Vxg9AizTasfa6z",
  "key2": "4SP8skJLoEbreYgsCWjhXu3i7F4aD5PkWnkxZKMSDV5JwKozJFgzjisgEf9XuEiNJdnYt8YXf7XFNCjoQCmg2ctW",
  "key3": "5rTEHV6KA6KvaWBY4BQY9dQiECCuKbjumntY9k1RHJRMRjiaXDumHGL5ZBpt64UZdgCc1fSESZoJY9rkhrMRQpRy",
  "key4": "4tx5NSuzTzaFY5Rp3Pbc9azmhtebwL5wgfCxGtj9uztWYByAmX3Vj1vVeqN9kSdBmGCZTtmbbNvjs2yRsvVTitZm",
  "key5": "XoYvADW8Nm46hAYjNVxEHP7ybP6nxCTdevnsYUFR4s1dPA9G8Lj2vMtGvzMsbCb75g8Y67w2Qxj4eNX9H3rhyhF",
  "key6": "46wWY8aaHznBarUb5mqiV9ub6mbm2qFc2CsWJ4z21dgB7fWr1cwStBzMxjup5DnYzPNu54WguuRh9FXgvcHrNwCv",
  "key7": "4mwXrBLYHdiVPEvmBYuaV3Rv9DfdmQ8S9fseo5doEFFX7L7SpcgJdzXzFQsCExeVqk7jzzEye7zVZRAipuyjgc3K",
  "key8": "t6ttPawWYe6Eii1NzdVCngzA6pfQCdedTTEks6oH71f6SawTrTvSBFu7haS73td3wB6ZPKTxehTwN4M2dSyHhDC",
  "key9": "3fa9KXbAutdiJyAkyuj7HkzpxHiEc4UcVYP9n7FexrWamfbUo7Sxtjjcegtz9Jisqr8KFrNpkwTdA1bd82pSdHcW",
  "key10": "4MhGyGHQUb33X7qTsQC9akw81QxvMwgS5mXzd2TjbjED5vjqWHyQ93wSftEwnqPiCuZf7e68XP26GPXkQ9dAmc44",
  "key11": "31mYnuLeiAiEvCmFC96D7bFkxEyehgBfnFyWzdT3NRTbLxHhpcnPPrkYt7N653ZWLDgBjcJK219RxZVYdfHXY52k",
  "key12": "2PfVGKBk7dPerysoKJLUjmbtftgVvBTg1kTWCvruwF3BFLtYnoMR6DWzaYzm6qmC8ZMHNcn1hueDBNWReC2jN5Ls",
  "key13": "5hivq73Scva28tWrhKXqP9R7KrVcwiwU4eynu2ooxXHSkcUR5kTYSUChkkvmVvHdV4gucVvJHD8ny9uGHaLqrnpP",
  "key14": "45B5oeeWJnVHJSuHfYBPUTgapvzpNFccnAvHTRmWt5AabL9UhFN8KC59emHWgLs54PwJM5wWpuxNnFCyFTUkhScz",
  "key15": "2wDCbv3CHWWdismSdX3TbvJKBdBnvXAMzDoQ5JrjXWkzj7ASsTmUMzTceBJQfyHvBJPMSyPG2BFJiSHkGeTzXniC",
  "key16": "44yfAAQ9yVxAYxpxWtUcoJfmU4BCvCjdQBEHw4hj7TMtAuA2GT6MX6EqhN4asqkEA2G982YUwrnpHnPC6K5rXek5",
  "key17": "4zy3MWXthaG5L8riq919tDPsYusMVD8MrrebaUP1jXauj1xWbqGVjNYq8B3pfFNtYBMuUBoX1ZWzLjUsrggcnsja",
  "key18": "5EAvYTCmLRmaGMEXGHVtLyWGHd1ciHuYd6es7XYHRAGcZReeh1FmwuY3pPCnVYV4YJ5NpicC8t5ahXQzpHCkU4gv",
  "key19": "3W6UBeJ2FjU2afU5KLDUnBbLAiqivDgLjgMeCnvuBbbPZfXMp82VaCCdZEZi4ms6EyTazrefkrT1KAN7eiouKm1f",
  "key20": "3RKdrsU4HRddHjFF1qkXKnBbpeVQw5ZMWkcKAqYvpXgBCcWnkaEntDHEH3GPnWiunZMiNug15TxCLpvgu6WWtVBj",
  "key21": "61kMdgYAyPkN1KifJ3N11eGTAtsBqB2BAbHaJFbCPPvsVLBvbq9AjNKF1cHYK74NfpTgxf5wysbnMy2GLftXqoKW",
  "key22": "3dPLKUBoEjs6uvKLZb4VNiM38KnKeYP72i8hiHaCDtn6VAkFssz6jpdKq16nxMWuo5zMMqMvAL5JQs8QWk43NagZ",
  "key23": "JCvDif9L1zf3FTAqM6RMkiFz2obCdPDokikGcW6Q4yKup7q868Ks5PjLP3Ui2PTfXy2wDCctryGd8Pu667AcrE2",
  "key24": "5AaK82PrZQYtLALSgQTPNjbL9Ec6tU9THazQUXpaU5TLnWmyUjPEVusnTv594DCpjZR9N3UsGdepLzRgcYJkJntF",
  "key25": "3qZHpBrSgmRuRzBcqt1Lhi9vkY4ZY7sxtt37CajHHaXLWyncvAH7cHMhcNbxvxENgcoew8rnhZh7JCE4DjK5dQZK",
  "key26": "4YB1YRMyTa6VHnyErnh5kwPCB4PoTfoRc7oh3cZTEY9E1maunD62i3NZfVAqPk7GmStxQKkifYKYHxYQgG9tCMpw",
  "key27": "2etGCjD1H8CLfPQqzrTMB4wbW5M8aKoyVcgfHjExgPf2x14EbSieN5u3JzAXAqA2ZPC89jVneKWufU8BrWWJYxWP",
  "key28": "mKB7t3sSJqvRnTcqGq9yg516tugJCkSoxQduZSnmXoY8n867JJU4ufnnDkTCHEEBa9QFzdjUp4WiXsLeicZm4LR",
  "key29": "2cYRuJhL94eAd3tHUUgHUxXmLfhmeBXJGxwHRSkXTZ1i9Py1fHfHcqoDawPBtpyzHfXTxmA9yjCjDC4kBXjDnxpY",
  "key30": "2aXt4TSo8ZghE6rkCQAKagxhFgNSiastpkDc8QsDa3LTGw8EX43ok52S1koVViGczutgFTPhSBEGRVwrWd2Diu63",
  "key31": "4yKEJCZiS9J87iFBnW7hisUjeLdJ8Vnd4frLyjzwwGW14zksoi7qHp75zh5mvbYs7KKdAe2Rrx9s6Vf5sJme6CCp",
  "key32": "2aR9BTD3ZeYG3Hi53okzXG7iUgY29UN9mU17bFTmMkHQtwMd3MnHFVpcgnqUJNfbcJA1aodhQqbkYUhRrL4iKfR4",
  "key33": "5oiYWkiYyRntaXEMNAoiZSZmrPqqT75HJJxFhPsoDz628UVcESmNue4n8ZohzVyGjEtgv4iN95VaBrWiLp6YMWmh",
  "key34": "2dKQxoo9SPfKGPVuRUv4fTUYcoguZaXs2ffAkqrmGXYDbHr5HDQVuMzhGxuUnoDjHVWuzkddafVYwGRMSWe8PLZc",
  "key35": "3yeQpLvhjMQ7JNRhuhaqDqjYfGd8fybQkedipfYTKUThSeTqMqU6Tq1adSsd796HK7XeucW8q7D1bVGWDqTEPDcb",
  "key36": "3G62qQenyNSi26ru1H8tru9pAvJnKcTduoRbP1pCJGJViDirgycRZeVf4WCV6Krm3SX4q5rqNVRji9cYcG3B6VRc",
  "key37": "5RWqZ6wSfY6caRhHyk5SLfUQfERP9oiExVVLh6uQCPNsLBqDRXyh7SGNxEnprb36h5nyf2xkUqe6QXByDEkqs1yc",
  "key38": "65Ghw35dKZNCg3q8NPuKo852KvfU6rmarUXyb9HFgdmb27iyo4ARdTqyFt3YC8C4Q3Y9K7b1aGStX4d83vwfsPry",
  "key39": "4n1ZvEjrxtkjERF6HeRtXK7HbKf9KmHgH4CSaLCWZpvxJFvCNUomac1bmt8BwLurTvSPhFiXtmArUhgBtUn7NPJE",
  "key40": "2tAEPYKMPEPj1KHELhL92xUVH7vEe5BaXTRJu26T2bqE9Ds1NEq3fkRStysNurUCerwC6WbYjdpNBCUnY2H3LaKq",
  "key41": "3sbTtAoS91ioG3LMEFobhYo1N4iuPXwGPPK8maczixdeAdPkbpBaudLVT99jGAGjo85NmvyK2CWZ77fizayb1mZK",
  "key42": "5DPM2Fmn7Z43NEyAx1oYmVjk4xVuxqBAqfZuszhHcyKxKts2aFgpdUAQL3WMobTGzbW5xwsQp3uNMi64U92FyaDX"
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
