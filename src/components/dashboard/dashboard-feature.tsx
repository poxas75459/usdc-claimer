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
    "5sBB33oCJ4gDKG9KU9yCjTPu5mDKUjv4dpEbau9Rto2vhuTM4kV8jdZzsEBCVbVmaLRZmWhAWSTn6dXKu9gXERdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x3jJYbUkFhfLPihem4cY7Lspux8rorosAa6T9ewgpPKLJKKiqJgZUDL6wxTo3BgkGUwTAeZRvJxpKTrqZVHpXnV",
  "key1": "4J8JBiYnoSMfrJ8JD3qgsqFjNH1wBfvNHVvusqZvtX76Rsu6898yvEtfNSogHFvdvfvdz8EWBurp1fXEj6jbCo49",
  "key2": "5FAuuS12jzEQk9PDZXPhS2pGvgf4JFaKLjJYpdg3jvYYmzqBHNXKqo3vtv6n7YmbSWG4uyzAKxFhGi8c5mqMj2KV",
  "key3": "2mQiQFhcx3JiE49wfwRp5xk3WV4kVCc1smHHjoNCYybNy5N6yjjPheBoruFjjkTGZwFtF2s2VuCPYzd3CndjMixJ",
  "key4": "4eXGnnmdJ3oeGExXKbRj9wuwAWiiHUj1sQSdxoEKNuJqqP9bbWeWYGqsKAfTaznBfR1qKEMhVVazwwmhjy4raEnD",
  "key5": "2Pwmi9QuWaFnhEQXdpHER2QULVRS4Ekv4B7ecdvFp9qV3todEgd3vwGs5M4cqL2SZuxKmQRXV1TUWFk4MDYMCZet",
  "key6": "3oXy8kgg3nLVLXjD3J7SWdT8CudwDvB7HvTFPdifMxoFLBKqgScZe7CGSvKr8an9gEKME8KqkX2XbS4LZAaoYyKG",
  "key7": "PAAE22kreox2BYXG8EJiyEE5nfwDt1onx1NZFs7srqsCx7RHjU8Ddacw8FvmKTs9TnSj5H9Pv6MnfQovmTJEBzM",
  "key8": "5ufUzrNU5sF75F7qmSm8VAf7KwxNhXDAvQcoHnMVd9PypEdPEcqd2zRJkcG5xHJU5nY7SDznc9uZAo9xqnWSfrKi",
  "key9": "5cRLG2mUr7ghmYKtJKSkZAwsBJ7LgTJiePNDoRVXEy6AgWKsDzv8iGMhRskPPe1ZtD8fL66B5WUkEGQK7mTPKhMr",
  "key10": "3JX7upveVEFsFewFY1sEQNyVmxzrrvcfnP3sNFy29ryTcoKJ6ExLJ82zf3zahPazHLgxxpxWiYd3u6W6ChccqyKa",
  "key11": "5ude2G12WRavPeGCrsBLD7nJPAewoUnw3yy9TgjQnuC2XGNPAszcrU252AQFrVsy1GVHJYTQGbdp44uF9MQcSqw8",
  "key12": "374o2De6tW94n8YFSQnHgZ8Eu7QawZzzJz2s9P8M793MN4kLt2nbGR3hrApJHfVoVjTxNhwGhjjLpd7anYQkaGx8",
  "key13": "478thwohp62JGUZiTK7xoACgn9pEyZorkKsjU2veEufGfjBPszjYVXSNRB9HedeW1usnRDfsN3ikqJUaA1Jq9XRQ",
  "key14": "3tTm4dsKW4d3ncaynw5smt7odH8z2hzz4fpL6bVhdoHWfqHCUhw5pQVnWnWFtgZMxJ4nkyfPivM5yMk7VNzQgEXp",
  "key15": "35mJvE8ZWgfrV1P6fT6EEEgmTbXpXrrW5zSrFnKaVQBhzLDKdQVGdYcHw6UNxJEzd87dNX1oBfqkimkeKkSkHqSv",
  "key16": "wA8xWGaBm1MnKSQ1HA1AHavMg9LCeBg8HtcckCrM3N9EC5hh1vHpm7re1UJ87VqWdzdw1wXGDmooDQVKcZeqwhN",
  "key17": "5wkuTLn9iJyU3X5mwwL98BwKgA5GZXytfVPAA21ngmf8Uq9aP25DKSDNCWosFZVr4x3RxUDvhKD316a8CdxTd8bU",
  "key18": "2oD3XYeEoVnGKoLaYn1njgKkPTzRmvmUzhzKcb1SjYA5go54bAgX6ZDz52prC6K3dTWkw9zX35TPAVfNZEbY9ihx",
  "key19": "65xuLCQL6NKasmmYxXeEJRAuY1kgtKogr2nyi4QfV75rmaY2TaN5WDmCNxUkxkpcGjnLStQMUdkpis3RKB9DfELa",
  "key20": "2HXWdoHfeRfBK3CjuBrgPfbMX8PE4CKGaQ1MNf5cnVXFtanPTs7zuxFTcYMJfeQYHFwWjCM7guGeaNDJN6QJN1P3",
  "key21": "2NB4XexSjAUixqbXZ5ttJwhZAMcAAHxREo57Gfhi2b9LbHeccSfj7d5X57urmZTHWdKYyUZRjUBjVH98NcXtfLop",
  "key22": "5f6sHEWKJqt9VZ9TZyKmHznnmAPtH94uXpVMfnbYNmysacsj5T2E5GveGD8LYmpQfe5rnQevnJjtDA3gkpJMyoYY",
  "key23": "3rY17JRMHt12K4oxwJESjQHtfTaxTRrKRcDF82jV4ewvo6kPm2RNFG5DVPnVGFvRc3N197Yqh74T54u5R85Q1RHU",
  "key24": "5mq3sNNVWNC57XB3ofn2CgnxQdZavuAg5r8igdzPbc4m6ifyP4uww5LmF46ZnuF1oGx1B633xVDCLpAtAcPaz47y",
  "key25": "3vjWPcYoNBpc8N2m144cUbvTFZJcU2nqCiTitXmNtDmqzXdFT7ESJ6y2hxPxXaFVQFBkXCWuNs1MhKneB3f8d5Qp",
  "key26": "UuwxSVidkbyA1DEG3VyZYhHFvyuhPrnsz2VcYHCScfuvVXW9pZLWFERvSGSJ6u8EVTgmPtzqfvdcUbN16Qa51bc",
  "key27": "2UHCyiCSpzJubygXEqahTFR7p7Hk7nzW2LxTiu6yQLP5FvPrmTGcvYfeCpZDk3zJ8Z6TcoJPRv8JVE2LZWhZCL8T",
  "key28": "P7QrU5pdaFjoKNtBL1NhRao8TMoUamH1SaiSdeBRaU5Y2KvudwGinv2XG4a8V4Wms9xYhLAdJhH1uJZUPpjEs3n",
  "key29": "2ZU7FeL22vEHD1EMQpimRbrMC2hvQnkoVxQvCm8epPrUGeA7mv35xUYHjXAxkCNLgQdBFFDHXzcpuF7vDe9F3T78",
  "key30": "3UgkPp5e7xzXjQZWHr6fR2cKBDcDsuYFWT8VuU4nVybBLWcd3TH4FQBNM55BDVewEi3ff9qCpK7uuxLU1aMLpP2y"
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
