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
    "29EhdmriyrJkmmy5FSnNh3XqMSQiVn28DD4quucPAVmG3MLGYkfA1DGRvFTUAxn12SA6RoBnZ5QQkVCYLmX8SNz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qyr5hRRDa56TVok39QTcw6u61pYR3phZaDPZkW4B7xoU2XVjUBPhFz84K4EV6L2mofMMxMMPYFL8aN82mLQpcC3",
  "key1": "5TnQPS9nwcPdPMKdCSNiMZGtU8qtu7uKwdweAVfYjWg4RpmKbwiDUxgYQBbAPiZtr1tpU8uvAAhq7Te3P7MNsxVW",
  "key2": "48dA2ZF4FVZ7cP2DKGxHLdaN5d1z7ja8RPKDpgw8xidyYggWLJEnuC3jNbdhkxB3kJ3rwAYyfEaUrZyE1FuEPydj",
  "key3": "2M8ev7Q9wM9o5Mf6JuRYeRKkiaaPgz1gp2QfTXU3F33cRpSmwrCBZfQNgh4SFVHViA6yzCr9iv7xrdSyN89d31MZ",
  "key4": "4d7Yx2cRYkCa6Nvo2ceEYf33JtJUFqszftie8Qxov69nHpN4LnP1Rzfxe4sDPYjAntUFKAKssj4Ndf1W46PahEnF",
  "key5": "3omJ8SDSE1xeetDNpT8vcap6hrXBLzNU1co78d8p4TP8LsYYm83E2EQvvhm1rtcsoHJvnAAUAMsW82J3qtHx8o1p",
  "key6": "yhDYiQ5JVx5ttsY7RXmJYB23mkwa3oZfaXLSJQbBB1UZs9fuYAcLrKfN6LTNVT2Av9bsT6fiepsWkxgiM87Skaz",
  "key7": "2kBWcp3GXg96RzF77TZLwCU2HLVv6QrxTqqtr1HvEhsoEwuj4qMpAPSJ2VnVfieMw3SMJAcFFHd4yMr6rhwYXqxj",
  "key8": "4LQ8JUaqBK5tTBtdyKsgeiKNyLX8usxuRu9CP46CrBCoG43nEkLBocLcuFjN7NTzgdKHh7RzRH8mQ2C98UW5v51f",
  "key9": "4QXCL1v3RhXTKMea9HFTrfPvbbuJSG87wSQwUrpo6LQwjueb9bs86xXQwU8DM9vnYX2TMmcaLoyVqW45kdPgfTrE",
  "key10": "496VTB6Er3KAU7Bm5hxBwjifszf664A7wcbmhBghAxe8HATuxcyJadfGySrSNKBDbKxLacebRtZcv6Z1GcBfxKWi",
  "key11": "58toDRan9GxutyvoBtLBkpgHtCPF3cVfscj8cjn5QdgZ9c7VH6dTqg7gkcCbgpryLwjY2n3q67UrZjKMvcKW1pZt",
  "key12": "4wyJQA3bsBq8VNv3JREk7frbGrRsxvvomfULZY2ByWU1XZi1iMFkSfnZ5Xa3kG73R6P2WiSiQktsUJQUNQEdpzFK",
  "key13": "3hmvAbH2UmvB2ShQngByBDMELy9gt9mz5bgD86rQHdX9DDHij7n66CcDXTgotFCxbyKM9wyMz6Nqbkip4GjD2BKH",
  "key14": "3SqTuw6No5pr2D9o6WxehukgbP2DB5g42wz4bv1n9hrThpQ7Cxg8WGoQFUaVFUL8ckGfZXpsXQti6ZcdNwGd8h2x",
  "key15": "3G6WhWUd4PqESkjhp6LBjc7cJAaM2wKjX42KDjYQa1o5aTsnLDzmDeUD6iAQQfAcjVFSj68Sd5dSGusCfDCrAanX",
  "key16": "3JWGKQC8SR6VMrmJtNTobBTVsYWxQ34H5L3gNmTTcWEgH8HsYPyr8SCix7NmBycJWhs1rwKuPPBCWKBNs1pKLwhJ",
  "key17": "gM9DXHfVFHDPPhuMN4h1Hm2GxWW8VBvCKUnS3PbfHmnkjcnwo5nwsJaQ1TgiAcepRPYYG5VBmSzqSBuzG9pAYYo",
  "key18": "sQvudHYW95XhVFTpdnSVrFEQH6hyagWnRHNcvFhz5Qj2Rgk8UupL72K741bYC1tqbV2D7uhQVS51SZT1DyyrBJQ",
  "key19": "4Jd9bzy7w6B5V4o6QNRtfp3Dr8Hrk8vTWmNzisbC4ZVJPGxxxPx4z8hrG8MNEocSuRDSk46ayPw7jhkjrK6Y8vyx",
  "key20": "dBbnWtLz83We8ce6V2NdeSNZpppxW9BbmAzAE5oZqSxX2z1Xo18eGP2i9rqawU5VpmFNrwZZd4WB1qYP8CAYfkL",
  "key21": "2UjRv55DayurfaRSSWf9G8ZET38jsa5VXpkpWocrzLjbf3LMvBXNQ1cR1T1RPqsFXQQfaGy9g7rzoY6vLTn7jHi",
  "key22": "2nXMPvHsTiRmEu9xBNK1LiMqTihUjDLTEuAjudP6k9teEYBSUF9nEjtt2Cw44iUmrCGdLrSPqLXQuRXnwA8zCcwQ",
  "key23": "45nBQJrVbCHth6i6U8Mx7bdyF8dCKppRwMUWsTJSRN2z4jwpFKnKj2HMuamXR9SudXu1GJUc19excCgxZ9MSyZ8e",
  "key24": "3Y7iy5tCwFJ6YF7pvT94u8fFBeVnfnu5vYLjmVFv6caXK9Ad2kUu1Gth4ShAGdMcdTEcbVJ4gxGCjaY4V3UKbAXq",
  "key25": "3rB1gw94UsaKs7Gk2urfafBv8xAGzA9jHrHtbYdAYdfR6VtD1gYqFfEjq9rm4wJi5QUxYG8aXpDh1EGFc4pYpjZk",
  "key26": "3tbCYJhsUx8BV79AchAZPmT5posjsSEGhGxKMirgZEgurVpoTJ55NTW32kXuTHSxU3csTmQTE1wBdzDBZtPzrH8",
  "key27": "4frMtQn4K1KH6UWTAPFAgXvc1YUX3znarRJr3c76AyRna8SnHY3vSrn87WZaVDc3dv3Nr4ibFBkidVT42EEH5KXH",
  "key28": "4HhD4gUAGpuFmQiFq1m7BpNZZDw1TQBwPRbMoyx8798txFjrjuQYHur5Exp3AspQArewuV3qZnU91JjJWXEs1HGM",
  "key29": "4GK3go6nojdTYHKA8p4hkeNgLzSAY3XxkR1cWzBBhtEVGQsUzBbU2qaeY2cW2JydRdNyqPqdFPhPVtXDdMrdbJT4",
  "key30": "4nPSxs3wmUzAMrjEDNgmTRNeBz87rpAN1mFETHSJyDQ8HiorEkkBCudr2ydu2N2F6zLcMsmEooUp1wSrK8iMnZzR",
  "key31": "Ldu7WfxT6EEkwqYy9Ebu6rcXFT1pjMG9vNALAvbbK8pq7vmEgVCwgpu1cEcvKa5JpApp7QPWbFQqakq5DeAwEVy",
  "key32": "22PKzA4QQQHj3JYGBdvACJzJCuSVZD4g2MPjLJLKutigQ9PtVCsDuVizxYURAQZmFQ4nbRSGgzwsbS5vxUbEALaw",
  "key33": "4uQgVmdVM6rcUxYELurmLfxLkESvYvzHuRfTmXHSbrih4nFmdUy1SiucXX7Se8JWtDusbE5VkSMz6nkNUqKbgEeK",
  "key34": "3FYN7nMBUmTx42Lov52J7cvFR3MqPvXYhP17PBwUd9WkixQLkwEbtHnTyooyoMgTWoeF4uhWfRtBErHqfBapBzgg",
  "key35": "3khZdQk8QruzyTmvdrBABKjf1h5zjmSRahWPqVsJR1pW7dDZGGzVaiSn7dSUymDErnHbV4zvXLc6pYBWcwGZt5gj",
  "key36": "3Cb4Kw6D2RyGL5fS41X5BCDoHbr4YzpSmDxFw17M2piFYQQztyskNiJmTvbwQ8GYZVAa7FxVPLvxXhobANazVEf6"
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
