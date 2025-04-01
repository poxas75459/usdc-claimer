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
    "4Hj59AfmmLUtbSDsjTYvX9A9JyeH113m96QVeSq3PqzpvfBPDa6pZimJDEvhK5tgBwNtEEgwYV4VUH7zzoS8AhAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SfTjQZ8oNNdEar8SpxdQDcpTLp1cXMrfRmx1A1EPUM1LoYjYSwCDab9eERwQxZzaFkqJW4PAWn6JvApnke6Yhke",
  "key1": "UXyLYzjDYyPFUfTWSnecQm6dXA6xFZniihv2eT2AGJasqd5PdhJbnKoEzmTmfSGmckvjMhqXN2VKDvfvwJ4272i",
  "key2": "667h3PpwWw8ueeVx64oTREsfkKeosiU5AVVnpuCxiY8DyCUyQRRGhrQ23pMPaq2QTJWuZYXLMwgzozRSRHVnGuqe",
  "key3": "3nAfZSBjMrwH9t22eLb6PrgiDHSRXTeYAWUA6QEUgcdCcewdXXGQowkwBGemW6gFbMQV41eJcg2txjhkyS3K4F9j",
  "key4": "25wEBBGbmG5dgsJ2EcTkoKb5mZQm8AkWoGpGa7vacE71zkyrLoY5CkHpXXH9FMQefKY8Be9uKUhmtBDyhX2rPBSn",
  "key5": "4w2hJjQHsnpJJnG4VRVb9MiMgFmtUDLjNkYTarTxSueYpJzJyPgDgk3cssjxysQCfZ12JmfyhihQL3wCmtMf1JKA",
  "key6": "2gBFZgrBBd8QTysM3uXSJ26ADs6hPnyWfTQSBU6jkhvRipxMRs3UKaFNFrD5owiyNMaBJqNAehJ74vCnyMjTwvHr",
  "key7": "5xXJCzNXwpQsHXSuxQA1LiwPGdkVnGzujDLcexCc6hMsUDQFGPKUnqXr6p6r72NCdc8MWmhuvZ7gP1xUxpCpiJPb",
  "key8": "24XrGm4dq4t9eFzCjowsA2FqgAXRSzZ8isjvNVBHZ6FgLd4jXTmt55BUkjnvB3t4wXbL1Eh2PZe23tz1VAxRpzep",
  "key9": "33wRwu6N31VtTsMXRQEP2FNGLptLm9SBTKSMuqBWDEJpkVNtz6w5Ygzt6TiGqzb9ixkJTe8PY2itA7cAbwhHtr6w",
  "key10": "2DFtbzNHNWmuWsjSt6HbeFdsEgbAoTtnjv3JrBxHWTQZZzMHX4PsuMs4AVQ3owSiMaj35rGVvF7yqFNBS54xMVW",
  "key11": "4PowD6bcT42CSANnLDcTb5vsLVs7BQrQ5P5peh2v2gEQoqVqymxqKCAmeL1EEFVAxBV76va82NsfbJrtBeTfG676",
  "key12": "4CubdDKRwiFf5foXeak2yymryHjcsVEKb3suFZRA8QeuQSPrHAA4W9xVBPC47trzpYcaXCBJo9ZYz2xMotvPyR4T",
  "key13": "4utcMTZ2PvaVyos6PDEBgaaYd3HfHzyRiZb8x4ay5EHEcyhNc5tG254gyva5E9tsreHFEJ9DJYEa7CxS1erCth3x",
  "key14": "51tLkeSpYogAaiRU7p2fKkRht8HAHRZsNnKrNLKaEA8pqNX4czY77NA2QoVFWHNvhyF3mG38eu9DTvTeyDGSsk8g",
  "key15": "hr9noDX7nrcLHwDCtq19uBuM5UEsmBhb6mqXCRGnEmsrjEFPddLNF3Ho6Q2EXrpmVDSsxfV2VqzqhKqCXiyLCSj",
  "key16": "3Q1Fiu1XZPtRDt9L9actM6FWES94ryxpfmndBBZg8oVGsssJ2RBoLjgRD2nUwTCidpSjYWGrKXwh6yxHDjYo8rLg",
  "key17": "NipxKBaKjYnYyrXUAJ9yG9d1UFXTqKy23LUsst1huxz1Jy5dYTorFM2hz3C52BJ1MjCnyRr1FQ5DwVXkUCWrZtF",
  "key18": "2iXQr1CB56LTSyhpXBCPf2g6kcq8EqsECWzCJmxQgaZW86ceKtss2n2inEryXmjskkLWGLYiscdEHWNJi6sdYFhh",
  "key19": "P6w5etMWigzvzSNVSQsgAS77G2uKsffieoPiQRdnXWjvWPN3vF9qgPVKz1iGTRXBDpbgYAWdtwk1fdpePSG7hBf",
  "key20": "25eBPKkV54467MJ8uLhTCBQeXg5sqUZYEx4cnxqysCZJteHJ2sD5iex8gDdBpsEDdByYe1YJVkdmj6aECgcKdFzb",
  "key21": "51BceLHh667PAHK76Vkn42MYzbgqCrsBULpWRJk56U4aQ6icQppBnmmkcP76TsL3eGtdzH6HNZGG4wR8qDVR6y32",
  "key22": "5hXYn85afNMknGCZkSP1fDusbdpSRT5dNMPX8SdtD6uGfmct5JS8JQEArXCnGoorK3fBX279b9D4dj11PaLWNXB2",
  "key23": "45sD5pW1f7anqM6xtPX2n53W56w7TpWp4k529qc3H1zjC3yzSujoLcynNSLCBRsR183QCDCGrVUsJLzXV1roCYiy",
  "key24": "3mWKoFpWdp7wsdug1sHbF3vMNynnSPxEFeYMpg8SXDqGsh3EgrqMuisrGha8t1Ad2dbiNvBc5ktjQu7MdY2dEeus",
  "key25": "4fFTk2ijqoz5tmM8TaQRSXuajmNqpBArbDJ1Hw62GK1b2ooDuiYMNChYzVofZr1R7DZTS6DEebBL4MjSUEdqmpMu",
  "key26": "4VvSZREnizDDFDGfFqQvpuJe685hM6mBodnDoUdwKPHgzB4kgAuEJrsBAJV1NZRAZqDbCQJ2jMTa8Rk7tCggZCz1",
  "key27": "5LUGKWJwZecgt3RqwAj2NCXKSDWXRPq6UmpR4JEdQFtkXApSSoL8ABVRBQsTnodEUjiypmKySzadtU61XUbfwFdt",
  "key28": "22BsMKp4ZTMHpnz4Mgz8u5iyKXDp18gGEwbmXyQHiXk1WhvARghcwnjkuBHSwDKhNeyf3GXwTZsih9QKD9wtoGp2",
  "key29": "5BXq9jrqpk7zC1obSTVXRX8M99BRnXRCBDq4BWHzvD7r2qfWBhDmXkTuy6KUkxdn6yCqDScB115G8qFdEoSQjHpN",
  "key30": "5b8yD8JTNcqVsFfDuKR9r1hfqHF2CdcGEWJrFvJfw7As7W76Gdv3moS8VjePxK1umBUJNRNie9eNVn4sj8gWZ7zy",
  "key31": "5CjTNcmhozYEQWdsHuEN3c5LTFtb5j9dRgQ8U6QvyMATEe2hfYdqUMkDMUCzHCdPp1fGoAAwb2vepihbpBKJNnx6",
  "key32": "35Jhnnoq8QVTm7rLRMT9AvUR42YcYYa72foaKQifGfqRpPPy5mqnx3DQiKrz4Na5ivUR3Y1ZxXJfPA5pUKEzczFn",
  "key33": "4Tduww8LqZoaZRJjzr7sDB5P2b8eysnXGDawgkvVYKychkprpPDfnGeXj27DVu3MSgtp6KEmm7UXAmmvye5aRc2s",
  "key34": "5aJKoxhNxZRLrbt4TmsXJDBqkPNyPokaW6BstzKNPC3Jwx4SCoBBgZ6j2tcJZHz48WLotFuL9B9SoRQ2bfBJhxU6",
  "key35": "3FU2wuGVrz7UsL2LLJ4ms3FmkS21DSiFAmKA6AopyUYevgFCMwhg4PATv3bED3wWZGwD5gknMqj3SFLZDgjqYh32",
  "key36": "47PDvDx96eWV7G5DqD8pAVy52k8AYSJeNfS3qWsrnjtEY3UzY7pAY6n3haMRqWgXRQ1R7tCpcR9C7jkj4ecad97p",
  "key37": "Rak2YkeYjso91Gs5s38vr4qcFBytkkPbDjMFTvCsooYWcnK7QQwTBFgra6fYBJmAoGcR2SNuQFWHxx8T2Qk4FJc",
  "key38": "jAwESLp1aKxTLTSFANXp5qFnHbbPKctDGZZoDtBhJsgA4iyVGF6qV3fsHLr58XJo7JEA49to9Agsrpgzn6Akta6",
  "key39": "3wP3nrwvBWnzSCXMkmQ3wcPthnTntXvE3hnZoCacCM3QUpQ7WqsJwhsXUrjCL16bUvGdJdamHxzrVEM6mCW9dvkE",
  "key40": "3bKyxkkbBGw7oG9VydWKfxdXgmS2SFmtccET31MGtfGBvrFA9Rx4McMGqvEVbF5f5CMG4DoS5LFK1KgXD8NryJPk",
  "key41": "25eWpo2FuYbTSvaqJ9x41Q7jo8b1PUMaiGXLTsq7KDG6CJHokHFHK89j4Y1n2Xvxe8ustQbDJnNWwiUVNMK4iufg",
  "key42": "AJmbf65amdNWAcPNZ7Pwt3UvHvdxHZW6XXmNZHYSgN824CrEdhpJbGHcjm5ifvnrq6qf8L7F24mwjEc7ZZYM5Cu",
  "key43": "2F5CaQQLV8bnzJaZB59rgh4p1uFDxPNJXcpSproayns3pBTK5PRRLNKMPs9CHPwBwGZrWWmxnEBXqZ6SUXWWTyhw",
  "key44": "2pQ1rE17RwXMh73HUX2dTDefVwpkqGDQaCNh2wnidgTdntYoWTi1bMjfFrZGX77qGccEFhUFuzHK6JQhv3MskqgG",
  "key45": "5JVa2wav36rGLw6rezwPbqdSFi8fuTXm3YJXDPriRnqKRW4WMso6meYahHWskvcpFBBAwEDMsVQS9BsgNM8mjjdo",
  "key46": "euqnFoudmQttaqVjYRQ6FbGoBojoPgAQpiPZkjQPDeSmhRr5jZzY3NW7MfNrxvXZ9JM6RFQWpPenFXE1HFLPW9p"
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
