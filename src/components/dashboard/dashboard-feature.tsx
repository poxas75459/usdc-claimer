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
    "48HFFhVUEoPo1j4g2YqATYuzaABfpCagpECrNsuas4VybToExLiv3H3znFGhgvnRqgNdEVZrWeX26SdzPfDbUgog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jTAP8yPz8hf61uJFL7jPt1qgWyK7XvYztNJmYJn9mBZZajobZvvqBKJz2VvxynbNFTvMGzQuCp4gaSe7WzGc7x1",
  "key1": "4jWsxV1r33nXQMPsoY58AZAVdWhbsPG9naAxgQu4CvNyrpiuyCpjcDsYk2v7ffnKCxmbmpxxf8vxtDFXSxmbMXmH",
  "key2": "YgMBiySJV7nJ8cfjcYJjbXr5FXJpzG2aq5VHSpBqCDUi4ZUWF5QUL8RLCPvr6iM8yHMjNBZEoY3UZ1yaSRbNkBT",
  "key3": "4gHTnnjueZzoRSV95PGp21iZVxiHs2pm6VZigjiUUR4JGht8vdHXnRY1X5qZrpNYpWrVGnboqKpB8nh8b8dwM6jk",
  "key4": "2nwQstwNjrwuodki6KuSProzVz7Pbp6j8VUKKucD5UQqK6zYbdFnSQeL3ovBnHybpV2T1YyHBxsLUWPv6aFd1Lbm",
  "key5": "3VWyHnKwMRxtxu5sNeNypEZNkfJjyNhZRykgdKdN8Vs7BFewFZyaqUU6x1kLh8BiZvP13iqKQ6ouU8PsCaWdsiKW",
  "key6": "8MHb5vWevNXo9ivJnZBEqNk5eZc6cckPtjpesoqVZXy9V8E6DY4AaRv6GbpjXxc2D19XHbVX7jVvgSnKVYVrcyW",
  "key7": "XM3cg5fwgB8YgEnbUfWyHPFbW7vX2NjmExq9981c9mKkRi9K7KNLYpcdNVypodZPGPWoUgVjp2vW9zFKNXQiBwR",
  "key8": "2QnMvM1XG85XYCMXenXPPCkegoLno7o5DWjhJmBJ9538eQXikkvjuZqhN1rnF74f2wTuXNMboftVgAtqSVUoMFEJ",
  "key9": "5snXN1a2HbG8xMZo3noXUaNGRa93qWbztSAjJqf6Qs6RhR5FDXPyw8A65saj36D8rVnyvVmFFUzpeuXevF9HZzr9",
  "key10": "2ydHXZnt4wyCbcocRBamJvTLx1EKtqTdfsCeKaWGp6EogQfjHvmt5Le9vtp9nhz6HVwKQf7eZ3GPw5mHwMaNxWXP",
  "key11": "HiCPibuzHQD73Cn1DcvwuLxGoYsTxPheUxTNWDNqXorNLpmLzPX1JKfLMZNXLj15JzJCbgvyFnLJgsXRvRNmK7F",
  "key12": "2uobAwZSKjd4k7xiLdfH1zGvTtVJKyVcYsayuVTge4r8VEnhNt9zoaM26EixqP9gx6wHeiDWmSQo9FTv2BCH8fQ9",
  "key13": "2J6W2nBWQCmqz2KHiedf8vvA4GZ69mUPyDGBL1dD2vrGGjN8yqaCqNT9KFzeW26jvWFMuFLQ6a1Z9Sg1G85QXF5M",
  "key14": "37BMPyKYsCaMUuzRuT5qte1EBX19kpMNVW8Fc4RjwdRCsREeSqMNqh8Nyuo2WD1eeS4CgKxGxmAfnCJFamHLWFMx",
  "key15": "25aTW9kXLswi9bVmGFkxcjZ2PJVsKSbuqbK22Q4K4bBUuVcwGNK3bdBFvPVohn4T1fJwJoqqCXZmPufR17cXmpCA",
  "key16": "5pLBWKiUqdEeyAuRYENRHTwLEn5FkEPZpN6kXTaJtcyszWvfAKTPd8N2gDBbE7deyfK4pQdPyuD2KF96MUpfYjX7",
  "key17": "7YAPA8ppKqXYCboMEubQiVL7xgUdUzbNWkerikEZXs8Cwccsou5uTrmfbnoKY2Ukrf8uVj1pk3Q2iQHUo9ZFgMc",
  "key18": "59Z4N2gXaGR8p4U7vBDsFjBjFfUrSaVJNiaaKQX7DECKuki9ZTr2wVqGVMCrQhybUfop72DuwNYfTa82WQ5JP2qf",
  "key19": "3SWAt8dLkfPt2BVhef9yxSyojYm9KAEjgY2Xjx49Vb4ygt48DsQC8BE85dwmsKc41YKSsC7HvCcnW8adWzxFiUC6",
  "key20": "5UH9VYB6PRagEuJhasJmemesiAewkhqbn8gRkSpt9udD8ywQxfxSdXUeEcVrqPxAxdjP7i74R8gzYXBqbAa7rr5W",
  "key21": "2WYd5yfcZjcRouKbRLx9PGTBZdVUeK6Cn9XNdheup2q292P2Wm29qcPVjsrdymrJduVpwhQLGvJ8ioaTACRaELho",
  "key22": "TXsazcTopN42u5EjNU43tKPVFM9s1grCgm9cCdBpuvTSaLGAggkUeL5JRtRYNiGPcSRk6uAw1RqXMKYGwCx2mu7",
  "key23": "2whS5B3xNYPZnRbubGk5b4vTL47fECzX4K2hCDoWnH2W67HSjMbC1Evp5ccsrzpup7UtMNLLx5TZNpn2aoRseMTP",
  "key24": "sUBkomeUzCyoL8PTfpTLNsRJ5gQmrq6DrzhDuCJGPJEivzNByTzdQ49T287pgHVtRBw7ed8et8ZAyrvFyHs9L1N",
  "key25": "4sQGLe3srWMj8dofWyCD3d42YfAUFBdX5nKaRyXDaeGyC662ddgvdqThXRtjXYg3e7xie4wh7tyC3dCEzvNP4XqR",
  "key26": "4CCXVBCbmE1rwqNyjkRroiPRHsEFpLHtfbPcmGsrmuVQhWkZiXcZrEKR5KkhbVG8vgizsiwVP27mcC1NmoTCgsHW",
  "key27": "HhHpUie6A5Uitf2wRWLRhYYoHG6M6yHBodSvA7mwXMBsdaNLaXDFfpd57iNjKV1adQQFYEqsZnddR7Qd5Gw4ZR3",
  "key28": "4a95QnyJKbNumXvHWCcUzYgddcyf5BLCPGDvMgTqtuWV4U2BSKSbGC7qdmsH4chp3d8heCNF5FDJgbGYEHokeEeD",
  "key29": "2CkH8rvs1hPntUT5PiuPwmQwEPehFCWdBKSW4zRy1Wb42iHbcELcdnj5etYieozyEW7Y6Gw1A7XiYB7eWMbpRDQn",
  "key30": "3RLpAGX8pDhsEKrozRbsVWU4UhbXK7sA7Vby2t6YCWsHBfSGDQYNdwJMnKcoNRxc3N4mQ1df3Ww73om93wUMcEqn",
  "key31": "XM5GypcbhZijL7htixCBwXLMWd6AmyaZz8S3FnLd9GcsyP2BkcPrGYTzpVvbBt9YMpp968k6ACVX2geiRuRkVjU",
  "key32": "2n73xXue1EKzv5qShygMkjQnubc2VVixL2kY8Vca4AKr8wWfnWpVQXrBCCEz4LsGaHv4HLvoU6QLJYcZJDUpTC5",
  "key33": "4LXvx3C4quqELjYsjk3cPNnbBXk5HuBjxqgJ91gMYTzbyodh9zetBQUBJ398kippSa1DiFWcFgMWR6yuSRKcnXBQ",
  "key34": "4DXVFq7x3NbYTK4GtwcbBHca8PyZbb7TbWGr2bbbaXDrF73qPYKK8ePHApJu2V1Pn8d1xt6kbnLyZcgJRG4qcj3f",
  "key35": "vfcc9myHQ5X2wTasjSiLnhtL6G6iUSnfzsxJFMTfp69BneXxckotaq9xH1ePF5ZZ3pDv8afTVUGhhypfhz84YnT",
  "key36": "4YAPFmJhm6ePtvTmybCKh8bfMgWhWooG7mqFDxtf1QXT5Y72uiSLxftdQMg5SYMdfBTd6yepMUSm6Ays4MxpwNik",
  "key37": "3s2FAfBvrdBeJVSF4hEKqAyVUYgo4xGX9zXCe2TxWL3mjrd4ZQwzfxd7yf2nSvEuDtVqkkTykNo2s8sidVuGUYMB",
  "key38": "63xDHs8rxJAjfMu2c14sKhLx6iy9cQG4VX3LCU92mvwfPWFBUcdNhYptC2a6Mohd2SUG21R2e9gRVZiqhXs2yCWz",
  "key39": "5KBwxB3iwZbyvkLpZzApopaKcSjX3aDGaCYEJmL2oZycTjzVDkMp15etmyemt9ze5qUjn8z8EmFyzXs3JQZmVTG3",
  "key40": "MregYVLC7j7qRuMBkefrhkLgczZebrjzjqEH5wN2b5ryRu4jrKHTDXKAYLAb6jt7Huw7N2SU9sPR3nPrR9dKAcj",
  "key41": "31N2eyaVe4wS3SC9fy3BGxH5tS5T7GPraR2NSCPKmGdPxTH612Lv14JQBrRZCCZKDWiRC97EqUNDcnXDZHDRVpyf",
  "key42": "5dA2fzmhGVfu3gvnj3vC5ARhgbLZe5QksjKxcxeFk9LCrPaE1rynn9TF3JWJwydgMT2eszzqcpxPyacje2eEfks5",
  "key43": "DQQn2Fh9A1hTQPB1d6afTciovZJ6RPpq28neEYZTqYF4PQD79Zz7MKLvGNqhAsmciTvTSZdYY7FEm7qUnS1Eibe",
  "key44": "4AoVqHKVB3Mu2Ck8xHt79D4Wzz916dp3UGq8gFJRQTGwk6e6tN1GX5Rd8MAKEyosA41AohmEn4N25pSfdKkrfXLC",
  "key45": "4f3pX1Z1NMg15mAtbh3VxUpd4nduwDWkNXNjJ1QvDWvzCvjbSiz6owojvyJqSYf2yhwFTETVC5GiNU5j8ZoQ8Rf8",
  "key46": "3cSvWeUkv35mC5zdKyXbNvoA6LGBGPsZJZrnQZDrCzBA9WGbJXUZFH9VhLqirPw9X2HMAGBPwwm9n7LUonq5p75q",
  "key47": "2sAdGmkw21NjxZkeHyyzFXtt5MaAUQhufVRkKp5TCwb5GcFT53XFQ8WUZ6cq5dPhCXT8EnhAK5z3vg8oXUHp2mRp"
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
