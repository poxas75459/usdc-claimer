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
    "DrjYkpkJ3bkNJPjjxPq5mXQMPmuwgWqgceV7cTt4X5DDLqBM7mPHv3dxRGTSUuJGJgBQKekYq3MBtvv6LatTRtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zC4bSMDgFqcNCnbRh4PMsyN8LN6qqu2ZJHhPWcBuwSRkyXmWivZzXsQahDCuMAy6xLwWcZq8vRYmZ9QewApaVMH",
  "key1": "3xzp5kJWTx12zLqFVLgU5cLNZ8fsr2fkivJTkT7cXV18RSGqjApZeHomAeMVfn5Jp5XYkYWfu6Ti6gmEi45n6XTK",
  "key2": "4TinZQR4nf9Zgxoqi1Mf7VRENBXzJpLXwDpwV7z5CTduP6vDwh1TS6kV3vsRpLviWbJBxecubsVSn4hTzcigvYLG",
  "key3": "5TpiCmBs8B41XTGCjtztUwE2jJTTvnbRkYQabbv8Xkobo49QUgVReeJaP9j54JagwtPo5Z32zAu9LXR6o6KWv1Ue",
  "key4": "rt7KrUCsXHuWi4SYYPBedfhhqxWb1L9sk2aER1Voec8THfsG93uWUd4yCwheJFjN4QrXcQAhQ13pN9mmnhvNPcA",
  "key5": "48Z6XgSYzay6EQTTzs8mHJkRtbTcBRjAoXtaXB4KXnhJtAhmWUzE6zzn8xPSKTsbYRD9Vm15dcWNimLXZZVP6Wrg",
  "key6": "4NA4v4cseYZSEZNAEPp7wJwKo2Mj9UsaaamgZdML4rjYa2fEA3wyjBWaxBTSgu5RniFQy86eNELZKhqR4UZJEx3T",
  "key7": "5ecgqWvYhpT38rn5LtGW9ba37cykPejjeoPKPhrvFn9jWTvFV4ddBiEZTVVuQ5XzW7685xHdNa8Lu3xkc8qXhgrv",
  "key8": "2B6UeyKfk1SFejF8EQu4RMmJrUn6oQiDV6wgd1r1kW2k47g8tNwxUDRb5Ay3fWCWCs2vALnh3vNbT6GLJkSosfKW",
  "key9": "4KsNYvzAuBaAq9HmbuHRY7q69KrwbXA5X4rASBKyx54RT9J2edqkyf2hawotZX7MfZPuessRxcGSdUwTptJY1YBk",
  "key10": "4mxeW3AoVuEBQyt2S8Je1v26p4PyVfAVdWeebjsEh5JKyS6SiD1LvVA4GMWF4JbzTs1QZePVov1SorZaUSNvqt7U",
  "key11": "55YtpdRuKEjEh6Bih3maNS9MH2Gsd5eJDJBeKEAwycbLyZ84dmEJBSjaXTHfYfyk7dKXeBGdc9GpU6gefAWY8Kk",
  "key12": "4z8ydALnkTBaN1qBNeUVuYZ4J78sMVXd1KzJSwL3DPE9J5sW2wFLTtT3arV8eP2RWNhYoLuMh9qD6AvmHpTqYjmg",
  "key13": "2sSb7s65arV5vfKC4kz6Xd34rvnWUFL9brZAYiynjyJMLz79e74rUaR8F9bQ2A6UtmZuXqSNK6sRT72JSs985qn4",
  "key14": "2ejmRc1bmEn925gvc368bLKJnLvPTh8qQET3Fr8WUt9FqE6vMQEVBQkNgiSTwrTGUnkibdp2tZ13grxZyL5KUSzj",
  "key15": "3HRku1MF2e5VRTgJUUKa4JHtbsmFg57dLPw2CUZ9DvRX2mYFrTPKQSfCduHKWMcQQTKuJdYggkakGsNLNSUwJo3Q",
  "key16": "4ziHUXkt6BxGswZqfKhhKNqnSAu6T8SrzTqo5Kap7tz5YP13GwD4aR3HGur5S4GK9du4YSJFvozd6Vf3Bu7V5f6a",
  "key17": "2TA77sBELFzssxbkCpGRLXZMbepJoqFPtpEAwEREDvn9uqTnzkJDeh8iUvwNAqdQSuRLhKHyeDLFefwP7a1YRZtf",
  "key18": "2zYS7SaWVnkcvrEbEVSPDvj8rTPtEmJ2v7ngTBX9URem56mUMhr1o1YM6w5a5a2U34Sukdby9qsF1BEtK759M7Bz",
  "key19": "6Sk4cHeoMBFyvqr2PgYcRV5X2qUjFGB8MKb5SYNJSupUYxWNQ3F9S8UPENyXThJH44NXjsX6T89Nz7N34MjbMwM",
  "key20": "57oN1n2uHYiViCEMvRjnergNJA1APjhaU4ZCUr7zEom9kj8ugsFuUGHmZ9rcVwWbUoMH2ZA7HTLJauTBSx9UQ9gj",
  "key21": "63znJXrCFATVSAhhuQPNjAwHkhx2jH5rsNPufdWgGnvrMq5T3UnPRVjYnehtrpZgx5mSY6yqcVBqWsvf13ksZBYq",
  "key22": "5LFGLKQU2Ryf8nc3Y27HvYvDgi1YnVw42FhG9i8wAc2BqoCgZgi9LUtW5M2jHW3w9o5byo1zZndG921Py3dx7uV3",
  "key23": "5Xx2k6P3CrbHVzdAHAz9DoSUTjMX9E9knBhZqmUFN7pYNwudgifVApctRsfLUm1Retv7Ez5Qy8wicxdnjUBBXqeg",
  "key24": "4tUC6WjHdJ9DN4TJ8BiqWBGrhcRf2PDCrfWW3kSdVx9T7oyGtBKJ66ZquDVibT1bLohXdWKZZfQp85vpPtnLsu44",
  "key25": "xLLqcsbWTmv8rLVWfdftFKPp8tMbcju22LPo7awiH86XoijosdUs3Liuo6JHYXSYjFvAt3CaURvxavCiaS5jRd9",
  "key26": "5Lbnm6Ammx9pvtHREpvxT3GQgwEP29riZjfuvipoBPMAtDgMPFjbD9Jz4zLVM4oViZRvbPfEswVuMxF7egWaGc9r",
  "key27": "5o9CCLagdNUEBSGePedYPSq6DSqhD2eK5BhmTig4UnN5rk1fTqKaoMuj7gVBZFJvqNkHuv39rB4fsCXVARNScseZ",
  "key28": "nN5VkZE8seHqADfUNMW863Kt7HdfpTSy1FUvjWpZWcjxdn7G7MJkbf6HzdFgEn1UdodsS8sQx6WTzwrZ8bqXt4M",
  "key29": "3aWdrhb6Kd6kZJ1Wzh7TTUykmAA7wHx4nrSeM9q44b4sVSmYheqXnRYzp1FANGEQYwRD4pMQiC3zXx5VWLiNTcJh",
  "key30": "5rGXDDGiyfrCjmKnmJMvGi5R7z1TfZoP5Zy77bKf8v6LEEtkYDyLKYiE48VYG1nFwxLWWvcbt17FrvEMevV1eFu6",
  "key31": "VYwxu8i79qjktKnGztDsqsxkzoU5b7KcWLD43f66UTguThFoUypYj8q82oreksyhbYJqkfPt7snw5SGPh9YyfSs",
  "key32": "3kZm2ENdzYeeoGtnReLRtyPS2iwXsQgkP7heCRV1yjyMNY3KipQ5QYEhggM1bYCbVGFwS7KrCRNyCzJqsks6aWrk",
  "key33": "3HtrTUDDfvZyGhsvr2PwbacUGxWtApuHqNFCdDV2hfXeAwa9q6CinafqgTT4ho8mNAWvqxXF8Xs2jMVhEsZW3sgP",
  "key34": "356pxqWtePwAWdPKL3Gx8GkU9YLiMswTzDMf65f2WHz5pr4JMu3VP39rgihohnHGMe5Luxoo6PNpCgMxZCcXFrHM",
  "key35": "PabXahCbcaHF9xGszrKcY8qcsA6nhR5yfEAL7TiCxBCdZVTHH1P3QRUcsKudBzGmJv1PGVF3VBa6rBGfM1MZHk4",
  "key36": "2RykwUJVDrbq77XaGG5RnD1zJeQDhNXKBA3B5FnD5VBzMbwqmdLwLMhWh1HwhNHFqPgQ6cGbU1TvZABMpXEgmSJz",
  "key37": "4WcYZukPcXFABPJrLgxy4evuvxGv58GKRvHm6KPuecy4Ktzx5cScDXctQJzFZH5sLRyALRNEGr8wsFDYkkFnPDTi",
  "key38": "2Yev76JuSefFZkaBH2Szvu5H1v7aKGJDz7c33pomtUhxhuw4ribNDB4gyiaZdGg2Ewduck2Kou74T5BP5zw83XeU",
  "key39": "RyWpvx1RaVjWK6m2Vbnf22WmjWs51aNs2A7dzXw9W5Ya54Nc4GBAK35vTD66BKvVLfhAB4R1ygNRBqLUQRwUrEv"
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
