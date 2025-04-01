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
    "5kRxvCTM74nvNrn4RGsKTNnUv6avRWEbAG4EfxFpejjFitiPvwnS8s5uaruF2FVPAWBt8mSv3StK2yy2BN71gwoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ft7EswHtoxUSgciFgYk4MQHRyYN7L2pXanRwJrN8pv9MZmBCqY6GzJNHwhdmWKB9Sr8mWDQDdCxq2Ka9g291F1c",
  "key1": "xEgGrhbzecELLJKt7396nyumCe5rH1WrxTP94HY2QADdVmio7GY1QURT1YmCVWxik14ifcfeXjQXf88NST3e5oW",
  "key2": "3vY4quLXyHEmG3wEJG68n4GNQQuJEGGYDb7doeA7g4hybhHb4SvvVeKTYGhTCSiKnCnirkD1D59LpEa5pYf3EdPG",
  "key3": "4stAryr8Th3FSyAsNKJKJUdViqxSAgz49QoymdE3pW9QbejBj3fYY2QmaptixptTLviK4nTcoX7K94cQNqDp1wM2",
  "key4": "4QoVLH6t8g6Qhz1sdj2kYs3kX4vzMpCvMdFn1oHZoVPDQ7azer9rBuYpfiuY9nzoQ2W1tej8CYT1C4qKHpdG5Y5D",
  "key5": "qXBqJJQYyzx5gXDX8HffBQqBjgXC4kt2smdJgigMGgWmQSRjPjzmgYq5PdAt4giUricvfotMhbbBrqMZbFXyqxk",
  "key6": "2rYwdKweBC3h7YXEgdj1nvhabsXWq3LSzxBfBnq7sSTaS8x5nEqDe45vCTKvy8Y9NujDMqCZ1WqqSii8w9XGjwWH",
  "key7": "cpKTHVrxnah5TzU3ii3jss4exAiAkH6y65Ta9S5aNKmBR92rRPv3YbvXsAfWTS3fvTuMLpycSR6nvcJpeU5qDB3",
  "key8": "3BxztCRZMixskC4Wxsz1eUcmyYerkPXEMCXZyMde3iVzL1W2Qv8189PP8c64hioauPJgchKD3GWxV8SNrL2ZNpvM",
  "key9": "oxWbn4k3EdoexRYpBfYyrDN7Z4D1scAtvvf89ztceMXbS5DA8UEv1vze6mrzxGhUAiofNjsYoengbXVdBqW3RVi",
  "key10": "MX1Getf2yUhqFgyhKxiS7TuSwGorvEQopcmjyvArR4sxdTiQ2XP5NKDRDL1d6MqgK2fpHZ3SthuX1LckknFRCjS",
  "key11": "246kQ5HNVoDE7evXvV6AQuhb3QYViZzut4mVTih1k4nS6SKPHBPxTmUx3UGVmXDvmPeUwwVRtoMhZChHJbGYKQy1",
  "key12": "2WTSMTEBLXvth4PAM4YNwv51UtVCgfJ9gbn3KT2jHaDgKHqevFJaw5C7dPULa9oZ2gS2iRaX6YZhcfXHRjCnFEa3",
  "key13": "nz8amoWFvCDLHwbFjr63u8hxYDb7tuXoxuX7V2G9Q3EU1Vien1zb9TWwDTPnU6fUWPPngvAdxT7E2pvXU4QyYFT",
  "key14": "4Sv4SH46zouL5dEvqeuUxUJApxVUHXUCYb1px2PZv3v2Uq4k5sHCLYmJXfx8wYDWnNqNc1uUVuGsFnyookSfGiKK",
  "key15": "dK6P2eRcNGQoKr9vLyESwckkB1N6Nbzwesz4UVc7oVNBZLnLbmqqcadhkiG8Tt83es9UeX8Cc9Nrjkt8Sz4ancY",
  "key16": "4YQLrQ2rF2K6kWn4b68UowbUoGZRP7rdX7vva1XBB56nc59d11KRT9Yk8Nw3nPjFuJZ25vidRioGwtH1Kv21z5S8",
  "key17": "5vWeRTxnrWPrv4ZTmuyueJDtm2fQfgbMrgkuUhT3G7k9QHpQDoYvq22RmKzHKjhLwcebE7hgZAgFD4vLypPbZBQV",
  "key18": "2eVtFU6rRVEV9F7mxXybQvdF6WbccukrQH1r5b8XJs1VQPn5s4SzedsBidd2vv7pU8FmWtn9kvLZdSeiTDWE5zRc",
  "key19": "31eWroNUHCrvcVkUdVYd2iDkhXVdgx9C8QLRXy6Jfd61xHAttzdLejbMYCwRzVViRD2CwF32bpaCEmaaaMBEKyhc",
  "key20": "4LAHQoXN4DnLa1tGECFNa3ahXJyFDLRuyrdv1LkkcdUjYQjKGQq5Y8J69KCpqvp5E6nhmmybCCPgcLW4zGWVhc4J",
  "key21": "3iVdZQKvzi8zSotJmFJWuP8ZKPTwnKEQrAsLYw3GsUtXJwJQpSAViFQqzj7C9DjCHBeed8PW47SfyPnrhfUvmKCW",
  "key22": "3hL1utrFRNzBwZyqu3E9fuQ8a62j9a7N71sXJNaCS4v17KPHJhY1bjU3c56pKbxQJEVMZ335NTtiToQ3b7GUggwv",
  "key23": "RusCbQu3mxCFrZE6fwrXUake5ZD2MUYMGH3YkCp6PbZGbvYAQhLbu6TVzYsh6GZ6ukuB5B2C5kVqpJuh1PeFjwA",
  "key24": "5ZC6i3oCKRj5vqa6hQEzUeutoC9gkLQU39HdNFhP1jE8Gd8ceoWPxevoi9h37q9mbdVchJKTjrvkvY5qBRD687eM",
  "key25": "xdnpr9NCNCrmvWrezo5ZphJxi7RN2wbcQqvnfvEyeHVfQvy12fYn4vfPZHQd4WkRz6HYMy5GL3NrsvdzPB7ELQQ",
  "key26": "5Bi8h1GPwG7k7TCr1uNhFNd3vMj6Pe9yunD2gUF54urda3PpGNs8KhiSAvMnkeAfZfdLQAbZBXzdD3JFJJRDJxSX",
  "key27": "2q3VUyY1UGmNPYKQPLn7EqdVtGWPCJSpx8Gaff7FDggYBE5bA31EiLfFr3eA1Y6Dr4zUxJrW8pNwbPwgdRc1fJCz",
  "key28": "2eLT66WU7rtLybdSt2BWDjcsmEuvM3PFCqzjJfXKx1x5JYGATiNvshHJGMV2HHdNADpSQMdaQzZ7EVXJvrW8ZZca",
  "key29": "5yYwGPAEgkk5QLu52e9Y67KU11QPnSZt3Nf8f6BogmKt8oejXAHCNbx65AQz8X9v6p1vsjvaDatz3jcVsSs1vT7S",
  "key30": "5MpUY9f9EonL8GxScsgjNGEJDajarnv8yNAhjPCY8n6DD39tqq8P9zGP73WKGR65QFLWHywkxq3V4nWEDnnmhn9g",
  "key31": "5xj7sqbJTddXVhU1KAjt41JsBLjePQqzLWvJohUX2AHSxeovDa9BoHXTz9LANjcEr8P7g5SwzQ8htfpuc8tUgY67",
  "key32": "Ues6YcttAVXEha2rGML8s1GP6RyrNyEB8o5QoAPnz52mnAe9TGoFjgeA2XEZH56c1xTRAmeFuLVwj2BjMzCaVAh",
  "key33": "59tffkabJF6sxuc6W6ptCKz8VX3y9AswWtZFCUPith6HaUQbqZfNLqPQXu4k1ifpqrn7p94juby4q3hYmLUHR2Qk",
  "key34": "3cmZiYrfnfmzBKYFDvrGfXCM9qjBvwaqMjyMdvLGVJvEtfQkhBML97Ysed3FTkHKYpDkFHoKwX1wPC4KLCQxNfo5",
  "key35": "XzfgqKfBzD3z2UcXAcyfUgh384RL53WM9d8jHWPLmGPXTfQn3DvxwPpXr9iLds5DvNLLX2Mx5jBCFJB2PTRifzf",
  "key36": "5cdXUnP86mg1LhkNdptheqkGPHbtpGaYUcmcebyS4EVyAHzMRAmERXLAjgYK2nwJkZ2Ad5LNhEjvub3pqG2ngKe",
  "key37": "5JWKwdSeByXcN7qvth69QBPMotM2RLUfnu9bdn6rg2vTLDzjQWNa3GGuUciZCKFsHrmADZXHFoGwqEQXqmb38cQ",
  "key38": "szMN29RzheakX9JACNLsYAnNTYvsULhmtsGFmLfboUAfkpRQH95UYj4Xb5Dez2jift7LzHYq5ubQoufUC7hRqTE",
  "key39": "57SunKUZyKnpigEwYzSCknodj2EjfJiLWFFBRuEMbQ2KAF9UwbWW1eGtzLJ7nb3qWxAyytv32xRxErExsbquPFfX",
  "key40": "48EHxS4CQ2A6rJR6rtGmnXk3N2imPm1HqqguHWkcpxTr4nCTPFgv4XXqJcrUQ2Uypcppa6TduePmeM6REYtoMsKT",
  "key41": "49DonCqNankuhmxiAcJKbCvje5yBXDdTSKMCnBmaM779Kr2Fx5H6yiVgbcGnvzDETpjtH8VenSrqzzDKXDFBXABY"
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
