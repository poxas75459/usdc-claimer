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
    "42z4Lc6r2F8Y74TDa2SwJUMze3cGSEpiqRG3eh6guQj5Nxp6GdQeEPB1qbm9a9ywyWdUvPXuGj5ddN7TE7BQXuXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FGeZhqtCEzyB9YnD8QWdRsN6umLT8kC9bKDj3pPxmFfzMExXRiuUnkiiY9oiz8PBhZxJ7AZx9iA8jn3KsLGJUYK",
  "key1": "3CuorHziH35pgzEVATc78b4jHiEAEnRXbk8bzmPkvtbNL6i8HKTJKdUR5tmAeJypTc6ieZfzGMjW4LuzvUXDjnCv",
  "key2": "4svLz8C9QZZyNkbxzsEkmgsUTMT2mhV22hJpppfTzyh9tcLz5RVipw86N7RidjepTpUdXnXMkBXQQrkxr3pQgyjx",
  "key3": "5DAQhXviL9GwbVGUjCW3xT12yHwTuJvL4SEN8Aq79zME2fJyfMvdmrzfaiEmmPdYVeM6oS9ScHzvQ3MXzXSo7zCP",
  "key4": "5pv2KXhUrS1x3cfRYT7YyYYTL2JnJotdFuF41eLwSdYBRZhHjMVcFfaZDP4eCEGaxdnfFQUvewwARdrzPnXZFhxw",
  "key5": "2DRKBxVRbNFa88pEiAugN7edVDyAcQV115tLiXB3FziY7AZo1H3Ls6TyTMoAsu95F7Vmk5LjMCUJhDjrYJiUMiNs",
  "key6": "5dnGRkiBzt3NjwV4PCibNdJSi2quzEqTob1hdZsefNspqfRTsFJGksEHhR8xNqV74Lp8JriAJLdS7D4dsAqHwi8J",
  "key7": "2pzC46t1EDiCyFP4z1DHGc1ToY2q63QGr8pPwvVsrFMjvtNqmarVLk9rM5Ka7bYbYPHnFfDjwdJ69yDiaWARTbHA",
  "key8": "4J5TGAtP54m764pWkbfo3PwU5D5qjMe5aP3Hvd8hHodL4L5nk4sjFAm4C6yUTNaojvi9xnXtYA6NMVwCN5EzM3H",
  "key9": "4hkmxe4HAVuKif5of4ChGe3z427N23z8EjYAj1AzGGFFbdt489h3TtAjSvxqqubcM3HBooCt5dgEvK6VyNnKqv4e",
  "key10": "S4b2kfmVs3P7fDHdfAYamnqn3SCzzxkffUiy8bXYMJWQgrv7wbj87N7zL8s9HFqUcHTDhHvBWgT8oC3ymCxNiM7",
  "key11": "5i1UA6Rm4FYMvDtY2mbMRMnokT4Mz2reSW6pvUn2ZRx7PAgPsRDi3qPbWfdEKNoviPGxK6EXXvHvNaNfPQgoQb42",
  "key12": "5m63MoiDVbsKhNnj29WoZmwuPs6gxqfTcVvULsQw8qrm1ySXrpmZjoBAg5YzMWiQNt63cCLiAdbWe4r9ezHgBb1C",
  "key13": "46SYwoxga5ZGv6zfAAdNMfPu8LGCJMrfGPXZawNtbCgqTp7ggg5mE35SR2ovVUx2LybeFWnbZbPGavtiu4QAsrem",
  "key14": "4U4mLioALQ8HPjgZMZvethTP1RXD2pH2Y4Z1jXmdmgBLapaxhLh6jramFGarAG8EGXw2uaV4Mv1WPLvWeaMbc6Bt",
  "key15": "2ThbyF42oA4rWWxgjmuKL91PVPJSm4xrRNbyBTqNNGhcZ1f4TFdis6ptaiSacyTHdA9pvd1J26GyBvYS4BaJpV2U",
  "key16": "5hgNpfpNPzaQRWQqf2nZ1xjFk8z7bKKkbu9csNVkVfSnR91eWhMuzHFMjvQvRyL1ax4goG4J2PCdvRorqoQWu7tv",
  "key17": "LsdcyULjo7suLfXTtJVa7f1AHi6SBMg38ZMvUEDYUt36vfVnGW7NPDX9Gm6EsybUqNKHK5F2C5bffeywJpMivnD",
  "key18": "3Ac5qMx2wi8ev44Kr18VpiLJqQVuCKmLUtHCtihXPNHXGwgUgmTe588rpWQF5S1JF3CnyhMHo5YvxrCyzAzmohwm",
  "key19": "4TBm8SDe21RdLdJckVqN17gY85CdWcJmq5MsXrDDMEkd3wT5BH2bviPJzpbBW3euVTRWzri7ZAZQVJq15S5qbTyp",
  "key20": "3d3LebfmErTvtEFTuk1W2kFEFkBDi2GGpWsyKnw9asBeYmpFbXN4irazTKme2xtQRdSt1rYxSw9tzP9HnMxKLLLD",
  "key21": "3D3ojt75nmDMRSARaAGwsoLGd3aQPPmpMvQxNVEhoidyfUzsbGqp9j4JZnC21jQDP8Zjftcd4WQuHcLQ1RK9BUpV",
  "key22": "2FT8twBPdbWaX1FDGxqsVAoEJWPzPk2YZX3jnmtXyQK5hBhwuNU9iMQ22P5T2EDf6wuDz8ySfqoHb3bb63Jp8sr9",
  "key23": "5vxyRNX3ESjPDX1MV8ymwtyp92rNXVCEFNZDiadrrioPT8hxGkNeeSA7aBgvsphrAd9BwPfiotAER8x4zisdzDWE",
  "key24": "9c6fk9MBjZPRE2GLD2jN1qLJiHRF5SPN2VDNyE2mFmP6Db9qpdNG1NEidbuzLeKojomzST7vgvygnn22c8KedxT",
  "key25": "5HuDWWTCsZ5f4aW3ve87XNuSaGeAw5xrB5ahFhhcJFHr5wAHHQ2ZGvtrdsSG6GNr6cyBG9V1tFdHxogrKLayqmSo",
  "key26": "ZLrbFeSwsdX4KYPd5XuBA2mWSb2wYMZ5HkCctJNdcDffHzFSZBVUVV2cDnYQ6EWKnCnZf3vrT9MTo9uQSGmcefd",
  "key27": "483TVFmAz85q4ZiY7P7oF7qS2HM7CmcbAm8uug9aTu9zpEx7kzssPqmhCGyRjMHiUFixKApFjwPXCv7TgvBjABto",
  "key28": "2PQshbLuZjyyAyURFojWVbz7aBSJhrcWXFCYwRUQLF2NsBhsnuFiAY3qQxWj7r8TkvvNAPASx122mUqcHb95Gc28",
  "key29": "3WTtMJpKV91cTssxKxy4aJTH3v4CY15pPszWr2Xzx5HMUpvaLYamNaQPgkyr6EhGpMFbgtnEJLtziZ7XMC4zdy21",
  "key30": "KyFNvkbLAxefux6siJE8UADTFVJVaQ1c5C5HjxxKdUnvyY2Fsircga6BJuqdiLrUu7g83nPQD69eSjpvT2fivSh",
  "key31": "864C1vesNiNdrBzN3fERtvRS7pKUANirL7CwoeANSFcz34XSnYUKUdEymG7bBH1o4rf4d1xn694LuTG6AfVtDKE",
  "key32": "4CU6vQPTe8L6nHDuD6UhVQCz1zzKMXJu1rxgT2QFs7y1cQ8P5uPJJH7AteLhpfMmrJKvTLqDdhQAXbXBSymXus9x",
  "key33": "5BQFzw3CUD5bFSc7R6859Hs8yyDhPL4Mud5i77pmTdin5wyKHjzDDfG5yuDC8A1feksBSKPmc5A4iG2pYEXBAimU",
  "key34": "3DFpxkHp7tUsYC8LX9K148Z7nNY6uLvnV4aNhnsCq62mSZFiADg6E2TDGfQXmxPJQv291DCFmjJqywe3Xq8JRyB8",
  "key35": "256DjFrhWzGRA7SjuAB1siPB1RpjfaUpMHv9dZo5bucVXfgVZHd8TXJuSvqsQTvTTEJvVauHzHCYKUvobhLSiK1y",
  "key36": "1FaQKNFWz3vqGwJSU2ZXaEwD8whwwRbz5eoZUDY5DXerKf5X8mFNeV5UAqhgjJt2yFeDFrLxE2dG3yeRzStX5qR"
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
