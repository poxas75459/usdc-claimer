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
    "5DvzXoXZaZ3wQkmJ5KmDDDT7h8aUUd7m8TCqU45BKwRku1WmX4WbDFALmYemWnLxbMC5QcK1dSFv7Z4wXeZ22KCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zhgy56DAmcJRVo7VWGDABJhm28BfZuQ58jf1eYSW375HxM5tptVDm4f4Pg49E2aC1z25yGUin3qqKj7mn8kh3mo",
  "key1": "3go4cTJK6C4zkukbhiyWRPwba8mDuVA14nfVhMQraLBxuidUDckzj5Pe5zBpsKS1HAPBh7Ror9esYeBqxzwso232",
  "key2": "3t4aV5M2sAZMyvTGAWpthg3ECD12Jk1T7v97KVDVyKdsNAvuks8FvDvTgDVez56itEPyD3LDPegMebUN56daQfwJ",
  "key3": "5vkkfnopYXi2fkx31adfsnVT8sF8r1FTwUjHte6W9ZLsgZCzCczmsretpoDh88cdgTf9X6SeQ88nH14ixBSxD94N",
  "key4": "5jM8KzP1N2cqc1mrybdG6mRPk94Ztexn7zo1kBkKThrVwBVy34fNZEhPQd6MpVm1vpt1UPHpnpb6addUFCieYJW2",
  "key5": "2cUv9x3zhYBb8BfDA7zJgK3w54igUBUfQpuUAaUkFp7oznaVkVbMihNY9SaBsmkQNAQzGxmVANJn3H65aLbKeBpu",
  "key6": "BVT77oiRxGXZR14y5siRnLcsNjqxbQ9sJwJLWRvhThhZJZcaYNrrMsAo5nAGKWDDjMXFqx4TDGHxDMVzcBsgYzW",
  "key7": "5xwe9JY1VuTM89tmKzuoujHAQg1xEbdGCZ8Dq8dDSdeEvnVDhoarZTQG41os2bdwCc5zVb5mEhpD9mcmTVSN4ZKD",
  "key8": "655M2qiLQQTk1xVvqEz4Xmq7i7wk3jq8EBTfzWKHspu3DgXSL3KohAHYwifqHDNMPegEWNefND2KgrJz4mpwLnmY",
  "key9": "5PBktuTa5kvjVLH4KxynLtg1FqaCuPUtC1nev343Chx1P27qapPdLvJyQKjKHqc7qxp92iM9paeNdmRCQgRmzqUn",
  "key10": "LHWtsgwwzbGKSfaeBzG4PUepJUKWfDYR19NThkZkry9DsJcHd7B2C5rm6q3en8TrFuXRdvx2HBUiKnTCmYoS1Mp",
  "key11": "3qJhxHgkUuQizsfYUgm28hMoAvjzuvJeuGHtVL716SK53arXQAuzScK3DN9PJD51VDJGBdCW4oZpMgQbPV1SeZRg",
  "key12": "2GHSomEJxs7iy11VsMoZrDaheX87exdcAYT6WQYqw1iHKYPH8v6s2GeiAtbzgUoX6QbjJbUky43TZji17UFR3PTN",
  "key13": "GgremMgqfx1z5kt5PHE2Tdchgzc2FRCM1BUy8z1G8DmSVMNvQ8UB6H3VH8mYQ2nD29BqzzZAbb8XbSnzJhiyss4",
  "key14": "4tXKGTEAkgDTfntpunumajiGtXgLwaGMT8b4DkdT1ReYptz2srJRH5cU47f3rj4Y6Uz2ffqzwMzU6JnweGpnEn6Q",
  "key15": "5BZfMvscVEz66PxFXiyKAb8uLhjoZNDMFZYVUJGXRGsGH8APLpmF2zrHVDpJmEMapv5fAMuFtYnc66tVnwdRNood",
  "key16": "2EjN8FjxvdVqunagZfVAhvoJ3PTXBjxNK198UZhg8Gs7TozerpWqPpw2EkLdHrcwAPrW5FwbwFPng76yLaBJmDt4",
  "key17": "3zGEao3XuboqSs8N1HZPoqpfZQutqDy6oQiZGmWdZCR8CtegxznefxyMD3mgCtrfQa1GcrEJisVipE9Hee7ov4Fy",
  "key18": "3gXkncepkkYyY7Cav9t9rE1SdGNcWimYrKzWEV3vLbfJwjuiNeRdgFYZNP4XPWBsX5DjbTmLasK1PqN4hVi85Umm",
  "key19": "3wnsqVPdizy5eDPySeFBP6Lpee7NYFbFMRqx4Y65zcw5XW4fvcJ8s6rYLYZxdzBoTRcpLJEDbugY3zP3ejQZZpU7",
  "key20": "668QRQAoBGDBHqbBQ6ZRvjUv7FSZAtjg7U8j8ErtN8Ft9BCqAN9En9dNebRyob6SFc2R9SPR6vXTjGcEZSoJjCu8",
  "key21": "2N7LbjUmurMd2ZscS8p4tqJntQkzes1HhVMwT6i3jfiFxG5VFr1ZJoP5g2R3X59BQ6TCeYA1Bfesmeuidt22X2xE",
  "key22": "63hGHWXQKTmubMTgqnva3aA51PshzEoVU4NYxns6Kk7LkVtAusU9wVvFo1Q8XhRRktcu5qZHrWHWxuxbKL5ToG1G",
  "key23": "5Znngvq1Zj11gMc8tFMZCe1v176KE1QfGoi5b485tMMiGEhbvgg7mAYWmsaTsbLoJXozvWw3NeALoReFiDmtqyjo",
  "key24": "3TmjYFgYqWZsqBgFvSabm2HGsTua82sYJFW5dfcvrKXhhHfaqsoqJcoRvm2FgEeGtm2DHXWgtYEitex937FGvtB1",
  "key25": "2b4bRUEhK8uh6Dgxci5iZachCqbgghwR1oq1jSeJpSTgi796pxHnyBuFMXKqpbY68YD3KmT9AMAi6N2xrsWXA1FQ",
  "key26": "2e2VmguCPK4NRDgJqX6dp2AihuzCSqNtx1HVM1vb9sioyqMmLt5FAbUBBXH5VbK2WwMoBRDcuW2PzaaLE1cfM57y",
  "key27": "HmYBiX26w1xJBav4Vag1rGvPMyaHknHvKH5iM4kXL9uJdHGJN5AAYpigV9gtQejTRMh8PDRxbSbWkYFR9xkQomV",
  "key28": "3FQ9YTt2AMPX6szonPpJg4Q8sWaHcq8wW6zpwAcHmGn3ZN2Rjh6UjhLn83Yzu23SkFEKPCHNfYJUxiHoPf8yWvUu",
  "key29": "4qZN2wLuMgEWWVFSi4gfBDoConF1TdzBQ4ekMC9SxgfSnJZMefYqNq36nFwqPxjhbcXjCwVHC7Q1CxLZqM4JxudP",
  "key30": "3FVRAVtF73u58QSU4tkcaEtbt5dhY32yhwT14SzHAYw4rt68mxtBxt7gtqpQPJxSDGGC4eKbjtBvg4hrurSreQAD",
  "key31": "4qXVafFe1rh7HHk6vmVorcJbTG1miSL2YoKrK7RQv1mCN7EMS7DBSkTWVJdjonMs89fFiJuBRbjAyHx5djww9FVm",
  "key32": "5H8yR9m5mNGowUMp2pw1bmVqgiz73zZ8PJNSyE1S8Sqik89zBDqtJZ8HESmeUEz3snDttapSinds6CBpbpDbKJv5",
  "key33": "3Uc5K1ZSRAMKmkRQTkPJCvY2z1AxdvajqN8RAEE5gsXnjEYzfCn9SHZXJC5Aj4GB9wTQUFfRKZPuFJVZdywvCqsF",
  "key34": "61286FCC58FTUbutPGf5AdqhRythSdwt7mnS4TRcXB5XaULYQeHmm96dWnvHoUSgtbV9C5xankm8oQFPqdCkHJn",
  "key35": "5kdUuf81KgA7egP1i9bxvL1gobbjKVgP6Fi1DCXVnT6WegmBZpaHY4D4tLP5Msy78ABr2D4KLni5MCnUaMNZRQvB"
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
