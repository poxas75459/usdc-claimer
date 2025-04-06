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
    "3ZH2Er2EwozqGhUkWTRyMjfJk1vtSuf2n5Vxm9imKXGEDhdDBhPPuL5c3nVM5QXPZNiXw1VJwaGsthN3pzabCurB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZD6WnFiL3B2FEVFHwjZWHXot66vK63APsMQvUEa2HmPqYPJNFWuNbbHQTBmv2mkp1Rm8m1R8yVbno5ECtEoocVb",
  "key1": "Z5Fr87UbSfu1EBJ91fmV66rRxJztEAqnqnuye5EwupiQ7i4GLbNsmPtMD4oAFzuRsM5x2kqmrGBcipFoCNgkmv1",
  "key2": "qFxh3ARxqLtAyo2oZF3R4RqfvSycX5i9PmDwjF7BjiW2gf6EPSgKFqBRSkbgszjAJZQcoGLgcHBxJg6h8EeqCQF",
  "key3": "qxFbijwwfqZe6Xrf9ZvCqJ788KMvtCRGKaVLsEUjHZxu1iFdXWAua3XD5A4QsrUi7q8ysb7jhVZ6C5rvdomB6nT",
  "key4": "5nJcqSeY3Q1FSrjTMi43Rp1GZipgYGZitwQqFSNpcWmJ71qAihtaxdPr2NM1xwTgvaCpazVWY8frhFuWsFyzGuMf",
  "key5": "5xK1UhPzAAdv6mUXNUSfswxk34F86cnUgwTzwkCfPAUcDpgLRHcTigGmWFkG16YNqRrPd53Ca5qWtPXm3WCcyHV2",
  "key6": "2Y2uinuweF2f2GtsF9x7CJugpjWGacwAhQoSnDPXNA1TjeVQ6P8MuKR2V9KQDB1jCrRmDgPPbXEgbBaHpE5q1CDp",
  "key7": "3VQtA5MLNYuCiJpb2iHcWC12hm9Dq7mnjWzXZtZqQC89tf569SasNTd4RAtSdyjb59ShPnDPEhMrFrrXjRwekZbB",
  "key8": "5UAcmf42nnB2dTa59yJwuowTy5hqmYWEA4DTiRzDXjNms2d3ekGTLtf63oG6Tm22hPSo9zgRoQpLwaqCQwhjRPn6",
  "key9": "bY49cS75jaK6q7mpG7H3qUHGxg1w45qY8mvutbhyMSqfRwaysMq6u75G66jrjCjt6ffvUMTSJmHGyyxEnfCoDG3",
  "key10": "4CpVg3iZGhmuVE67cDfmrcpzkWK6s7hLFhrM7x8JPcY2abWP1RNPbpx2ACwm9PTjPZ2QiJZCz59SXvM9FNpBkDUY",
  "key11": "1DPkqPR7og9QZx3XVxx39JYrSGQ6jwzUXADtENhd1xdpCXFWvNEBxeLQbmRqfCc7iq8maBVm3wFF2U1wcYiSLGD",
  "key12": "3NpyFGfzQfDUyhdwEjnJVodj4bvmvMx2dNrxBhoKT1GiGNsfafEPjhnEqHbSpyURDVwHqfcU14G89aUh9P6w7vMS",
  "key13": "5tDU6H6CbAaypR3MPtBdtZ2dVZy35BER28fh7SQEZrJYjd2QyCHpKKYvQ2D6Yuzai7HyykdXth2VU1T56hapYaGZ",
  "key14": "5EaY9L72GgCkhQkQ8g51EhHPJfsXosXC3wco1JPF94Zksf1JPcBq6LdHaxZkRuADgvFS5cUUt3UQVkUPDnKzKDgh",
  "key15": "4HwGviTgSbe3rj34BEekkm676uJfqZyKAU4GNdmkZmN6JP3eJtBCpo9EKnJBHnsmUzcpdQhdqdSzHip5HinmbCMe",
  "key16": "2SkeBzVu72nw7CCiqawF2aSyxN343ptsqWAMo1eLWMMjDrEDRcDfYHPbeYjfKfP9hxM24ZtU6Qktx7a8Bt9F7aKp",
  "key17": "3wLxdSLrSA3icAdvf84RPxS6srAxCgkVSwFG77jY9MKzW9VRSJVJXUSwVHcazTNRFEUGjyrRKphQMYHCfiBJaFU8",
  "key18": "4tWqtJT6VTaMULeppseC6RrxUwnC9x87nRVLaryxBSNK1htiX9fUTmTXcmkt59YkxxSPbrZKmhQJ1rU4FaQsLqy4",
  "key19": "8EJvCzx25SGWhiZzzESdEuJABqSDa3wiiwZoSdNS4nvepPBvsgo6yVVc37YcRVKyH6PwD7ugkr8oyGZ7bUe4AVD",
  "key20": "5aF49ujhqMVhoRGgkcWRaBGXZwiURKEKQtmVLSTYJSTG5ihUipBHaPu5dz1a4C9Pc5JHGyh5sESXnVfd9QfkPp1h",
  "key21": "3HYnZSXz5XJ9qWnA5UG1ytrmP8SgmAwtJrdL6WNzFQdJmou9Uq2nr9zXw2d5UsJ9TSe3yRYF2xjP1KUpmQZRvQ49",
  "key22": "2tcBgpgVPkZTJdNAz6RhDctuT3FysUeyyKziqL9LUVumSQx3Eph2uMYbUdDYtRzJxd2EggNQe2pY2KqEuEkCLigx",
  "key23": "T9P5UaXw49uCCvebnuAA5KLQdECieU95ifunFrRszn5EnjWgo97pUQ299PHe87kk675L3KfRwFCGX25FDpXGtLQ",
  "key24": "3nRRbGExotPiKN3jgkfEnTcRtZgeGEHoXHRVEM98mVuteYnstPVWN6jrGoEPdMRUhA3BV85w1Vmw8XJUKTUunW2v",
  "key25": "4WmUevZSVLvj5Rw6rxdi2kBnFJFxLKMkUkNH1qj7xZFPsJQGu5Z7qfg5bNxx2woS9MbWk5sqrMa6zZUUFPqcjdxL",
  "key26": "3yeZTFgpwvqFv9o6Lu6659EpLRQNpETqsCm31YFGjWeE664sFnsKWPaQHu1s5fB6dkaNG792BbtUUmmU7dBNV5NX",
  "key27": "sjBLvjB96zUDNCKJ8kG9jtwSEFBNPRo9HQaEHsbWWSoaWJXsV3yf51mvcj24xYuCfRNtXFKcrbVPn6noNeQjJ5j",
  "key28": "5hYFWSuNrUGwAYo8WZT5jkTsWzdbK3sEgJw3kLrWgiCMr39RqwCsifBHPxwYFUtEymvGQDzRLEogze5cosN5PZD7",
  "key29": "2fGpTYkmvAJxsYLkU7uJordxiv2peziuJpo6vCDSRTSUewq2hvMYJmfQy2gRjQksLJ9YMvPZBcV9XEzcBRa5Lq1B",
  "key30": "ztDsFzxRayoCD9F1GvuLb6HgTKm4sko6FSjUSpLnHP2MdPM1LPTFJLkqons6fDUZtR33sMWVip4thn6YM9pjJjm",
  "key31": "4RhWvGFhFaV9QFzQxoK1hCgzc2ejxHerqRFhAPgesTKnC3v6CcwxEarq6DRcTLCZsc4k583zaCFt7MULQmVYM89v",
  "key32": "2wHdKmufXSe3GddTJP3rTGKKJYJQaa1QshdJn2YnbfrACxTZUmtSaVFyPFxshMH9j5DSProCVpY2HMjvBZRRTHcv",
  "key33": "5iJYgDmWAdDf3Kybj4pDxWhXUFYS2WzpAgQeox2MLcs58EQ6ehzKpjhJoLneBBJu6TXMdH4CuAXwXZZ5PvpjhWws",
  "key34": "RdF326paE5GLDSZDZYnHthi3azK5iihRfyggrd6559z9Fj54tGxYNVNtmECPFzbenvD7gRYCEfxWNyanjqEYE77",
  "key35": "38tiB1BXBcyxEqZfox2cbhMq9Ta6BeR8au3VFHF5w6aiVquBCvuhTqmrcyKahMusDEJfKhpWdbD519eyDGCJ5E3",
  "key36": "8XhmZE6tL3uKv5KoMaXMVY1SB1oWvnrm5G3EKxzTQWP3q5CFBcHErNjCTzedi14p7VgpRdMRVTvaRStHd5iJ39S"
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
