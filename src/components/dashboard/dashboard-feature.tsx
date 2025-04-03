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
    "2KBTuQaUVejczjxdpYSRvuZNK7qSeanSZTB6TPMMG5F1otpTf8mg69dkbwBsPZrNp3oRxCnHXaKedt8YZTXx4Vmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmsd8DW1jKsGiiBtDXcGSFzWwGsApqfoHExJaTpuH9oq66o53zEr9xro4ck3bjx5acCWUXD81afCPrPH1kj2CUY",
  "key1": "3x2d9Fmz77V4uDrC67k5xxUnw3EX5ebyXrM4uxZNd6rz3FjLGmYzzNpkWwLnueXEqScerNL58THQ4kLp29B96xDF",
  "key2": "5W2JKvSAbKU7NfeVZuR7bw8vSUqKbtwcczAM7q2AnKGZ6BtEJndxef2MoswBvti6kmr3u23gWFJjjYzPuj1BFDsy",
  "key3": "5YAUJaNCxY2DF5ZmwSTk5BHx7tmGbRV7nmkPLfs7FcT7Kb82s23p2pN5TQdJvagsFQCo1FFcnsyS81LWj1KWzEg7",
  "key4": "22sYu9JU8hyyp5YkSYae16FGS68sv333sXN4s2vthkdzAGUFcUprmkTW62qrUc61dRZrsj3NFWeec7LCTA3PLJp4",
  "key5": "46aoRgQqhWBFQo6uMXauGfQ2XoiPCAdthop38dQxZGuFRTzT2eEqwWFQkizd3Ru5f6jWqNwEjDNG5uAZTS8ApTzR",
  "key6": "3q9m8bRULYGFzrazfsDTFMEQVRxFvGNmDNRmCrgsbJ53SNMjuuHPsBowFBQjL68sT6pHbHhUwEBAwA3HY4nEehMX",
  "key7": "4MvNcmt3NPGfiXRxUwvPQaw4bNhqMJeSLZP7EZwQQzxGrHtRrAdjuCMicRTMCw3LRzLCWh8gURreXx2JP5MB29Jv",
  "key8": "5GNQkbP5KgCt1Fky5Fy651RZUE3NZc9NXV61wz64aphNvXdbJsSejyYzrFkX6ExPHcFUNUTs9pEkAb4sKgkppeUQ",
  "key9": "5x8LcZQjt59Kt65x6YgrNx7yaMMTU4JTdQmnLk75PbKcdUAANpf8YGsuEdm9kWy5jCrSRSa1QtfGuW75diKhADf5",
  "key10": "2Mn8x2pw2S39FTrHZsEVMS1JZqnvPATZ96FYyNDvy47EqbJ3ubxH7TmgMuvzUSaWieqPfZ7mxo3s9wwTPy6PTwh9",
  "key11": "5FUZdZ8xbiPaYF4WYFbgT7f8t9ALL7dAHNQViAX87C5yS4z3rqUexmRjz6A37By2nGFqJF582XFHK4svtcNMSrNe",
  "key12": "5Eqa8oHJf4NawLSpYThHyCL9wsfuE5CiTQ84oirzQoPMeEsS7ATqjjFocnCXZMDo4LxtD8ttLgQFPCKv6871AGJj",
  "key13": "4LESLNdDMSxDE9qcDmgj3E73iPBTENcZ2UJVLFgf6x4fXEs2WgUHyNcvGJStnMi6Um726YzgNdLWapQiFKbJaLuU",
  "key14": "4VcNdYE56SZZddsZrcNEq1FN8Rd9rp7aeFBao468YeoKVebyVHn3YfqR1jkA2oYM7bxSQDRVVSqrD94afRfjdYES",
  "key15": "529L1y18i8RQk7N9QwzDYT6xEHcjXhQJwEZkfCd5MGmaSnfo4W7XuhYuRmCPwNi215Wdm1pV4JrPs8GHrbZMYr3T",
  "key16": "5Lb27x7ea7h68kvWjLvxZ7YCLQ4CGNkZhrhcLoRBL6aNXHSEZdknMQpyHtP1tMfm9pfbiXwgfgSaeujAd7U3v7GF",
  "key17": "2zxFGhBZRWrtZgn3PdCw4dsBxBSCkVKzdQLYy6GbMQLCH9VyxDBpgL1xP3HJrAVYuRcYmrC8SCdeLU2aN8T3xtgP",
  "key18": "4RzF6nPTN8udrq9SLUL1tjoEGjJfo3iKnMnBVDwbjoh6QsWGunXfLNRiNfaru4cVrbVFKLVw4n3D8RsRoxv4h3Df",
  "key19": "5FkUNAZ3DQSwLWexXXDRj6MGrw5kSrGs6XFYvoQN1qNQexLBWksxRg3E5XHxnRLqU5dGNnAhXTHXQhVTzB2hzfHm",
  "key20": "3LH53rNmzHKQd7bUJs9Q7ahzjfEN7vBpfVVEcLPyKTwkhTuTsdYTjRHYaQL1D6xmb1WARQTHS9yvYDnGGSx9A4gi",
  "key21": "Vth9KMw6afpLQvWJQnBhoTPueMGKDvpHdjEHdkXs4xVmLn9kvHjjmEbUukfpp7xtkUCqqRT8MBHnBPjT2x3uQam",
  "key22": "5vcjuqyaP1gVQDuTNKUPSSUQKxCCBb9UDW13aw3rvVjKw4uowqYt4md9A5Dvg2Fsp9ngxEesnjzCr8dwFW5Gy2Nr",
  "key23": "MKBc54ecAARG1GstC1g2ukBJX4jjURgDnGJNGPYm9SvzFrc4RwH8TguPG6uX9Rv2ZKqwpMFFGXz25uu3DBuYYFS",
  "key24": "NrY2cNJbqLcwqzdoV2kSZP27Vmd8RFDCnhyv9yzifcdJgrM2qpSXz2xwERQcR7XovodYhESPKdzyHxbTHx7xkc5",
  "key25": "37YaYqwySpyuNsXtUxRNjjmHqSyMswLw4Ao8PutknmMy2wSssa7zFr82YFsbUQtpihRvX4P7VKQxfCogm4N52Kqr",
  "key26": "41YJ9mwEzs2ML4jP5oLLF58fWxqNZTctV5FRu6gkXWZpH52TXu4WADyT2hMzkiiwVKqmav5KYa3dFGmekdQnuJfR",
  "key27": "4iTptihix9RX1EnhrD6E9xPZCMCSc1X6ZFefu2WEmpsDTMxveVq5xNJ2RsfLz9MBLWe5cu2xUHToNmpigiyPJVxq",
  "key28": "67ivAuRW3tsRyh14Gfhv8Pv1Rdf9SdbKRbf3SmfiRKUEzw5m7qwpbGGAJpXFvy59qzC94CAN2p3hQq7fiLSt1VX7",
  "key29": "2RTfAxwQqWHGdJRyfeNje3iBvxXFsC4vxWo7dNvuweGmhX1xWANQhZPbozd99qrVrjUm5KAtH3WZRynymqD4D1Vz",
  "key30": "43hUVdUvY8tE1ZgwBFmRA51TiTPb5rFKtS16ZfQyYLKimwH31x59uMnUE1gJAxEzpc4V5MN9vKTdpnNb1VtME56G",
  "key31": "u6x6oSnMDkdSW5FbuRs1omBzDyN3qswUBHRFDBJf8AJVDwQJKP2SHLBsdfbmvK1zWWu3mgbrvcmTNBxjUs9S5NC",
  "key32": "5ttfDhWcXA5nmWuxtrnje7GjT4s78AhLVpTusb6SBxrnUurGy49CBFy1APaAR8oRLoBtanSSkQRdSESokuf3aY2A",
  "key33": "26MVZ1DxP15WN65j8YJ9V4gJ97xDuLaWqjzrBL2dkfWqkGdubFcDQYUWtxDHoXGwfSKW2Ag7HmYEy52z6FVeRXk2",
  "key34": "2QCWT389q38YGu9yyh41odCuPNaxFapd191pY5AD5SUZXyeiQjfe22CWmnScCKv3cKh7mmZueVev6pDvZ8E1ukdg",
  "key35": "3eJJQDyZuLbMK6Ngs11Gzh8W69kVdeqRqSE6D2CeRGRqoiVcjpSJhcJn5MDLwXUF6yHzqHMVQ1C9VN2W7zWsHS8i",
  "key36": "5xQ5aCBKnwLCatLHhSS95bjC3KW7MPiEhbQ6mbC2KRLQj29HfQvefkBweDK3cuj7tyweGPeWyELYj8mXxZhmDamx",
  "key37": "5ZuR6qUbqaUuPWEZ3HayWTefRD2a6HNzeiGV91RYMqivmdaztX6ijV81Ma3XNLML8t3Kq2ZoP6Gxe7X5zBno8pcz",
  "key38": "5pcyJnA3SvFr2Y3hpDkm3jmTm812zdKdXevTyP9dQtDH9dVzvshPLsUkaMXvbRAv7a4Zdb3tWXkd6U1yGzYmY4G7",
  "key39": "4eUiuKqZ9WMLTr9iLYYyWGMEBGHYZfwQxLDE63wZF1pUfPGB2e1Hp4HDvPnfUQUitTYLbWmzi2oNNei8ovSH2r6P",
  "key40": "3LM2Mv89JvuUVQC2mF344W98Qp6vy9ZKSWB8orxDxwfXjpSDBfGSeA4egbtmK4UsDp4TBEuQbFk6K7J5Gr8oiGCT",
  "key41": "2ADSgUaWSzBPxCGKsZv14hjvhiDfA4RqH6AAJhBM1PRvKXDCMzpd8eFsCbiR35WDVpYTJGy1UuYbDEG2RXftwsQa"
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
