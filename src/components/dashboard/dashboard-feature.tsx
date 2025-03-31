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
    "39YTSqg91MgTKzwq8LU82nhpYg46DkwwDrNgsVir9xPamoa6d9XS3pfuqrowi5ctGKri63MucVdqjQu1bLdZiyYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C65oXuoSm7KTKivPLgmdackwhKCQgfVKmmhKDqbdKMtxVckmNCFXqd8ow1i6WCrh6EMkpjZsjcPpKxsFfTrZzoJ",
  "key1": "58sFtssW6U9WNTVEBpajwY3FiNJ9GQpniuYvfYPf1LsbQftVTF55oestL47jkQqLLHig3dtVenZCocwnc63d6yfm",
  "key2": "4G5HjdFVWwXFZU38uytSsp4yxez7SCacgPGqqTN6UafDTA7C49hQ8CAfXx5F5UepUxQjY6ijKCqt27ZrjDYcstkh",
  "key3": "4jrKd3do2xdp6J6ggXum1zowRZUWBz8z49TdS4z872VRQ4EjtczBkfTBMANDq3Mszq9JLBcN5iaRS1VadKg2DsWi",
  "key4": "32aXhk1J6NA7sEbApuTbrNDLHFsfxhALkAozTvKYtwGzJz8Sp4gUUkAgvECRjF9LKxRceNKrMEghBRNcAaedDkQy",
  "key5": "3UEGCS2JN46gm5AxQeUt7LfanjPLw5ckJrtE1Kp3dQfbdQVwDDUzwCZVZQogQWb6aWX2hkK2sJqeHHWan2tH3WNS",
  "key6": "4uVSweGCcqG4D95HstoJi6tirV27hH9QMoCoiqf7Jn4n3q1jzkgJMbUV7y1jAZQtfFFo96nemjfRRanpzroh89Sg",
  "key7": "3EnPtENCgGkgjbnXkcoJGDAoF3mMnAKHyNZ77asxYeV7Q14fYstpSyQhkDkA6GrkATiggvj44ug28YCvQzfc7v1F",
  "key8": "4gQpKMKanQ8Ti1YG2v442KDjTgKEPb6UtYcQRXiJrgm6w6dG5sjfGyM19XA2TBvZoagYM7Jh3BRsc2dwq1WuVfCF",
  "key9": "ekEKRRUKBC8Xd826v6s9cF4BQ7e9pw3U5DdwoQzyHohuv72RuNvJeGNbdw4kVA7onzPH4Sdd2ujusYgCvCMKanD",
  "key10": "2fnTXXeJaU14bvpeibZ5gV13AfwGCBKb2GK2dpYkVuPvV6SvnhoEhVdq2rcwoxXGkArNoDm4MmwXKDyiKRWTMYMx",
  "key11": "5MRwX8h7kGeZbrqCBnGicLGrRYu9WVxFV4Hrx3f3jWfp2ojB16UWefTsj74sSuSG6QkNQAf1K61QJWqgyaKnkmgg",
  "key12": "2KWZxQQwp1RenDASQhMEZTYj9FXoS35fJQ9dPvpbnujTg7WoSYNFjneSn3FTN9VA6i79XLQYnbB71Muou9wPzvQd",
  "key13": "4WmQW255cVhexyna8btZhB6g1efEBNibZ8FBGz4tCSoTCE3DiiHDvdyRLgaTpw7WKc1q2Gg9on7FF1aXMKffFSqM",
  "key14": "4MaJAsgG5QGsh1N6VZbGHrRRUidxGgUWjLomWMTFFwLBrxA3j47tRPcHHzPzu6wAdYLGQuSa277vtZdGSYSVDoGk",
  "key15": "3PHRfPJ8Bzw1tAEGbi29xPaP1jubdCyGPvxNQPiXMiLVHXRYF8o3mJdSr9aQ6QvRh1iWv4zoGar2U6h29hxvfnvg",
  "key16": "4fLPpyGeC8p2eK4eKxY5xZM7VQWgH2S2ziCf83vF2KnDhCdKGudp6wUPaKJvep9MwZXiw5mjbzkDyZV13tbRVEBu",
  "key17": "vYUTPPi8fXhqc8NW1CHRr6MVKt7AsZYAh6Va2B4HCy5N5nFF7iBc2NmqS1LQ6tYFaPAh5959PXLro2KPfmqYfAD",
  "key18": "5fXKuJ9KTLkopbLvn37m3p9em4mjb8a11JnKmLeMMhbq49jgmcCqEiKeo2YSf2JbvAr79JV8CNVSJbbCbgihJXVY",
  "key19": "2UY3DnRhZ3K5HE2pRj5HDfjMBsddMBSHASaPQu4npGMCtQLc25YeoRtMCiDtoont6gUgRwbPrWQ2zgf3TvMYo3GR",
  "key20": "UyWL7VBLXX8N2hDeMDu1T7WMYqmwq3yK6arvBCs5SPXJSZZMVTguBGytphTZn8T8xx4n7d16BRyBZt2zwm4KSF1",
  "key21": "4LzyVJYn4yXc7cMPhNbFpsv4MA9qZGv18SdWH7BnQUsiwG5a8seswjAShwyBwjHGwa54c29CSukxtf8DkHJNY72X",
  "key22": "4CnC4UR8j8JoLM3YXqv5VQ2bHDNAXJXnYPZmyj3sPAv8nVabVLvT3u2ysU3uRoT6x3bA5LMYJaLb5XDaqnrmCRc",
  "key23": "3DXJBxauKDMrxnWGcKXDtykQ2VKsVMW3iE7RnYGZChtk894ddaW6PWE5zzoLhS1KfHpGvQNdkiCWonDMELYS6NHE",
  "key24": "27JHfWXW8qo23MisSMyNwUomAjJwskNmQvqB1SBdhx5vcaTKtGn5y4n2E2dc7b3AaHTuyN9tPaWgagNv74UqbqkL",
  "key25": "XJnhFdJVcMqNT96xbtdgKnL81Wz66geyfYWe3L1Ft7XGVqkXN9CzoM4NcHSquLrS8QMvkxb79BmYEvjSRVs56aT",
  "key26": "kbrUMbvVcKriPMg7kaNibmnoyZzFX2ymuFCZaugab6FccVjUGbg36Ae21Sn7Tb4gfcnv3DLDWfDfmu2AKF2SDow",
  "key27": "57ECrj39xi3foqxcx7vzKQC9zRgWRJMmi3e6GTLRMTqDeKA6vn6DUyyyiTGpbH57F35ixtV7vdiugStm87v8ErWQ",
  "key28": "2i56eZcFtzmxmfqhD8yktNdnoWszsS9M9UGY6VpQb5fyjuMx1oa2CMfXKzHGK7cAnZdxpK9LmVDW5jRSidJqBX7d"
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
