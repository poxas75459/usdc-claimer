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
    "FdpTJw9FLWAwtdsL5zPZDSAVjjuYc3rCe6FjUWpb3RASYD4dFR2Wr2KPySLyoHMp6Hh3fuULnDNoY6dYGXr1soN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fBR17UA4vmhvNUrkB1NzthFRnTgBrQUHVBWAkKH63iLdBop6FRwh3MogsrRHo7pHBotS9b16EyPczJ6fktsehdm",
  "key1": "5o29gjMGutREB5hn6AYa9N4jydkRyuW2e4i1joyUxHADkQQKFSkYhsUaXH5KHYiQv3nC84qJ7cKSx9Ah2YiHZFnE",
  "key2": "54H65A6MrGWP4MN889Vp1FMb14yiF6kMsiqMEts1TCZqpgXgZhv5zNJu8cnNpvryRfX4GDZSfUSn335DyZvfXFKC",
  "key3": "2RS2s5RdVXL7wpR8KtPkW3P2tSDbcfrXpjCrwaN6B4t6ka9Nb9LA6K4aG5sFmPeyvcMuDYxeWkYUfuhFtMZu6XNq",
  "key4": "4yb1FkjLs8ojEv4YSoQEWATY68pxwDdmJBhp9HiyB8VSqWMm8PtBgt3JZJS3JGevyeqGTYtNk9WaJJWf5uaGZxK9",
  "key5": "uiD9ngYMDYvrrEzVofid1hnfECgvM6euoHoPmTHdvuw1Ur4hNrjpDb2DxkRSnpZBnobZVWsF9PSWBKVArKeWxGf",
  "key6": "63ZLz1mTcrpihbaa1V2Q5Tw2UBYRCnqmigqPvk4BcWTV2JcC9TWebkxy14RcqeqT7LE4VZZJv2iXmtwFvg2Y4XvR",
  "key7": "58hTcef41nvQhnbDfK4KVDKsyV4ZGJVG2kFLakJJV2T2e1kFTkYSPHeUfyatqXBtpjdDctGX7jbwPdKeDfnzegJs",
  "key8": "2hHxxE6HmbBbFN7xjEtadmdQYuWT8q5JdywCYkjazJ11ofv5fY3vvx3Yug1kVu1Kkzdcn7XAUBE2qaVfaLQAfTet",
  "key9": "5E3iELACSKLAXtcNuq62JuFdvR4PAHHivG8tfeQPcfxWY78iSPkdKP5aUT3pCUzumGP4939wLawaYGvW124XTbsc",
  "key10": "3aGSEhQKN4KFFDzjUQLxmELNik9FKLvYpHVFZZsgEFBx2BakYGRazpuLXsmyK44dnV5GFW2qeEpeP5JiY4bXnLMs",
  "key11": "5uQkXMWd7xSR5sF4GXbT3zoiiK4WADniNGWzRaBR8TfbiWcj9fpKwhxxyiziSduR7yBikzz7Z8uWpezycjYnAEjq",
  "key12": "2kEMGYdywvREoYFt1GHf1Dd1q3nyRhYHeZzrFUQJAGaKo1bjTR32nr1bTcsUJyUH3Wr4R4A6aP8SjXwgWhgvgJcu",
  "key13": "3jbyD4WbRgSxeVw8R1vY34Cr4ur3EEdj6mRoTZ1qd54uhoE4kasBCgxQS3T25DPG91ZNQyq6y1kEvreQ1JXzYYCn",
  "key14": "4GTPmxRuoZsDFEtFyU8pjCr4xDFCkpqexnUjNDi6PcZXHH3HU5enN5Tup5Nxowzxc69cZkc3SSrHtRV3zq5Ccwzu",
  "key15": "5dXCLRTjij3GBqtJ3PYdsvH922Y8AiUgpjsGg2Yqhz1Dz12gwmE8XoL5rxResd6PK89A9fNfRmQRnKzVky4zYnFu",
  "key16": "26GBfff3mzYwLfiQzvQXDnHgBPAyk3Ts2ZBQS35RpiMuyPMuGuoNQu2CP5wwonJWAKYpjDMSEVXRRCsr6E3Bjb1W",
  "key17": "31GHZgNxx3pK36ePVjnAxkSN5hn8GYx19nVnYjebVPgwPP1oDwTyahwhvJJ1frcXnn9a8cShZvxbF2BsvsfLux9x",
  "key18": "3H9GSJBsJ3ow3GQ7TemGCyErzYEsWAziHpfruADwpkRToBVK6d5s9Xc7yN1Ner7JpiKi57SGZyBLKoyY7fr9sEhq",
  "key19": "5jvJ4C5afBpNgcg4yZTq3UUg5b3CjP1QcjjBtp6LoX7opwD1L43STgNJ5Nt6XDSHavwPqipmdRto9uEbUdZD5dWL",
  "key20": "3zMjdku2QMdzEPRKrgAzuDHbmoeXpUBwwV9xjkbnqaxtsMkLsnUnAmHAT2k4exxjR4ExoNCfHsf2ujS9ASMMXZQf",
  "key21": "49hTXg2B6xW35JT4GtePdn9Tu1BhC9nKRH113cJ2HzgnhPZuhkjvJJJbPb9VNqeqaSfdVdkERQdVtudPVEVpwWyV",
  "key22": "y74DNJGjfUwqXoq9c3zvh9Eo2XetXKybp99VoZLq4iFWh3SrDqfWneqrVxpAXrzadCAidLAFnbYAa9noUCTzzed",
  "key23": "rBYokS2a2p46CRWMwunHhiuC4YaDkCnjHkYmjvHR6SeBVUoLFVxct5EQ4GtDRGauVAg1x8tJukHBGkoBBs2RaLS",
  "key24": "2nh5Aof7331eM6QyjZPSUJZWN5AvM1QK9abADYi1q17Vd2eL2Jig9vpgjtcjeoWzf9EuQ8JRncW6LCjoEHJCcyvW",
  "key25": "2cZXnDjEeSMzMhjEkZ938jwmjedZkDAGUsHUvkGKMZrawZ8yq2rFcBMysXf4GbVLW9c9bg7UwMqpeeqiVBtuvf1z",
  "key26": "2VUz3zgtgd8XLcR4zM9Wa99SG3Q8MQPuzaa7JQA4mKy2oLjvEyL9oWj4FMvM11FNQXJCnVaycRYbsVby6GMMrxSy",
  "key27": "5YMPZiKJ3nmhzAjzE2axAws2KbGzhqowbYkEABX7s7aL1wz6cGRZ9VZj6c1vDfQqdtFxhHDqye5yuijNcBR7fH7T",
  "key28": "2PfLcW3vppDses5ATxBdHLJvTEFnrpw5v4ARwp5sE3jSHZBBqVLFUfUeK5bB94W798mCW8cuKgb9BQJ6uy8ubJs",
  "key29": "yiu8WY6Qd6b9a32jrs3Lt3HvDqJdicSro1ThoTo6ZcbCTH2Pn5L7sFNdzHA1SR4JEc9dV9mAwzskgDEqBadGCEX",
  "key30": "5eqDqjMn9Uvd4T9hi5qJrJHnVFxJ8TTj5nfNGtJNvaTz3fjEYnuaeH17nmGPZzaXvSijmGa77F4h1VfdEk4tFMt2",
  "key31": "2R8wzTvbaU2mQ9DopLv7w91QsR9V5xqQkiQYCmN1hfxPWKaTxNV8MbzGbcbv1VToaTtQRxtgV4HBbY72wc1Pt8Dy",
  "key32": "H8byvawA2jFwJSh1g1hUfxWb8usHVLG2WTVdUSoBt5vTysmRUtxPVQSuqiBFFPxYnH67dgXKemrxDKfqYMGQYUY",
  "key33": "2GhmHMkSmBHBmXacG2g7dgT5oN5ygrWb88CD3R254UpbmVFoJaSDjdsogRPLAFpgChsB9ReKYzM9obbqZ5oynqto",
  "key34": "ncYgQxzQYr2wACcwou3e4j1JBsdw6jbAfMMb4w7MKyUBwZ795ncwYfpb54Xe9faTPxpZq4rgHjF69MsDXqJvpzy",
  "key35": "3UM7UmCiZE1BvSBnQpkHtNYNcVE37twRM8DNyByqFaaoJ3FSbJAbUjTFG6mg9rFNXV3oTuDccqc3f1Ai1yHgbPVU",
  "key36": "33Ec922zUitrMTKbMPZBNadVjFdzZqmgBRQQ5VFqYDnqVd26mBQsgwjQ4w6HRJGhxVhcKYCo52y6sRBAf8N6QD6T",
  "key37": "2e3TE8EYUVLMTBbgf46rntyBQfQVeV7srCoH3BTDqA5d54eDCfRUf1xmxcpKbiF12xR7jRv6WYso9N1CMJo694Mg",
  "key38": "2sDcbEZJtXSFN2WKhNGzh3oWpneitutovEV9zLyP8TACWboB5xmBpBh61sx1b6GCrR77cF3LBkAPi4Go6fSQoQLx",
  "key39": "5qiDoxDraojDNqd2pdfVdUDDNcmz8t8e77jN8EWzWpNdz6H9ZHqYW7jKZ1Zrrt64CpQzvZUEbd3KThRLApWR7gMp",
  "key40": "3xqgEQVcTPsiY6mvAXJXwuW6RXVjdyPYT5xZ9WoHUVNrKg5mujh6nhmEu5tURJeExh4fbw8yDQqNymZh8aSFDih8"
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
