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
    "4HH5pXjkprJ6STWaDc1VaD56uahcSqNfb5tqYLLszudQSUuMyfFMHDRgJ6JJ13pvNrczqpFTL1KH2B8Kn8becd4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BGh55hMcvGVcBTSBFLJzQH9e5YFRHYMecYbpdcjY29gBtMkTGf2qmJEKHfoDfuzFbB1TJqfchsjAPYXFyBGnMmz",
  "key1": "2N52KYCngfHzaGxKoQwv4RYaQM8tv5XLy1LdLgSQufsQZ4Hhdkzx2DM1MCcJaC5mT6UEz42SpacUX3zCLeT4WN28",
  "key2": "2Hy1zhCaQm1MvufTrhCqCqK73nY2WihFQMEnteSBcc9q5pbbc3RH9SZPU7v39KnCtcgb3DDrZdPDERpL4mMvXm94",
  "key3": "3YDQqojN1AiMpH1j5GwkpPEiYrHsY56uE6EtT9Km9AJ6pdaz1vnuKYE3DBUQ6aW5jWpk9SsESywDoamqyTwKxbh6",
  "key4": "4XrdXmwMi7HHb6vheGHxshd7nnTSsRB37RgDLXGZbUwzU1GoiPRTQbrFR282xRSAosaHQEzDP1ZGd1ZLRTt7baXi",
  "key5": "thJSJhbiwfMonKbeY1Q4JpxxCaEpS4NgmuX7hrp9Tqjdm8gAxwj2gmuukWbo8vTsa1yB7GsgDfsywpVa9ANyBbE",
  "key6": "2uJpGRFqiuXgzijFgooK86Jsnygp1evs183DFGDoiCiWuLGfJGsyQposbwwnLcATaWDGu9xPhefC2ArsqrcuAzGe",
  "key7": "5YkMysiygpdTEYmpNDLUweL4dUL2mGnZjeKJepELZvyMXRT4CybxH89BDAZibENcVYS8Z2AHHdvPEHFX5DtspgXS",
  "key8": "3TWFx1tLRMATddT8MPC8KSah2XZFnWebYWzmGss1bSqixhroGwGKK7C4W3DyTvZinyxeZvaLkjfNXvNbSdSWAAXg",
  "key9": "54JCvzbxzbnbR1uks95BQZ2ddqfZvS2bBMBwpubkzVDFQb7toHaSFWuhMR2eJCi6NwabtmrV2jZkpHTntvx5DKUf",
  "key10": "2JRdGf9BMaHEQKZNkzZg7mD7EzsvWL7NYpZaAR9x3KRk44zbHLtN7GQFomaAymQ7KiGu6Hcchgi9jPxsDFKvhfNC",
  "key11": "3HYtnN7jbSe1nySFSrHcJwcH3b2f7vgTh3wWLeD2iBvBqbNkDb1zYhTzhqsHS2tDVJWxNGjAeJy8qp9PUBhEVGYU",
  "key12": "3RrwW11UKepxxXNGiu5YYSeMj7knx83LdcFRCDuTw1f8HhMyFQ3VFnVUUSAEAyoVPeuN7hvs5dtphRY5noV4dzTH",
  "key13": "5gNnSsTxGQ1NvR8TuzUKuSQFvh8QwSq75V8UnM3x4oBerKKfSwZMqyFA2pe1YoCJ9rJXRST6QFM4dtxBiSJVJzvt",
  "key14": "3xKfEAfSndoGQdt3MmdHYy6ZZQQuskFtLkyqBwWZfA2EE2LcA2NuZAWu6nbqeZgD43fV5CuxykTuacx1DxiktcT6",
  "key15": "59Bc2GaUwGpttjQdYfbaJc5kd4VLmev1QCuN3dRo4bychFYK7nxaFGDKQFXsML2GvftM9nfXs9b27bgo8M3fDrdZ",
  "key16": "5zLvxUM2L26He81gkT72qsTJMy3xKpvD4X6eoNB9SVazXs5exyu4Wex59wL3NVZCudUzZoVmjdnCEP3MC4JcaZAt",
  "key17": "27WRmRkKm5bxcWWXzTESTeUWnUKjae3c1j64EbfP8nqj36arYbSgm2pErcyxqVo7sei15o8uPn3u4fw1LWzURNrj",
  "key18": "4mwSP1NWH4ncJQMTf8tXyxNxdwsBUUo1Zn6SxJZtTvBY9vpULh79Fpidvxo9PgCVee6C724VchYuWrCMWQThJJdr",
  "key19": "5cqoWUwh7rb6vkwoJU2TgxSkjnZCCtWWkMYUJkm9tfyzPJSHi8qNRmZYopa5dNzwQzNb7LfMXTjBBdHKACKRcBNs",
  "key20": "23SwKASUg8t8BtnGDsJoS6BMdasPXd1dP6Qx51kBL3g8SqPBJaZQkJmE28BBqgEPtvsPFzzBvTai4EdQZShCgpcH",
  "key21": "2GdzYHka4r2t1maWSFaEVteiSgmgGWejbkLPC9bCZDhCU7urRBcrQJ79BHmQZ4r5wggDVx2dNxgApUT7QYGJ2Xk4",
  "key22": "3znUcySa2pFGwP7wDQRD4vaVwzQbfsFtVujDAfoNf8WxbgRMs6nG8xYC736Qc86csKsxLtotEGzfvgw1YhsxnaCZ",
  "key23": "45VD78SDBku4Kx94oZcsBkGyZwRKwejv29mVZk9bmukNuJaaGVHw16KTyKfDjprfx83duwTbXs9E7mu3YnMHdqj6",
  "key24": "3T8hZwE1rUqx7KEWVXLeZApBb5Q8VzMK8MqzLnrurukdeYzBTCLYC2XnHKT93Fqwdq3bhbNbfAwS6k4jvGRHSoJY",
  "key25": "3zf2XQkaCweT8wPd1eeqriqKE1yS1wZdtjPeihwZeaUQBZbXANsmNuAkoyGeAy41msu97xjDZwPydarzRgV3GpLX",
  "key26": "2WvTnVfTXCDrXgHqutTKuXobBnv5ahudpo1qqVfPiCFd65bSLwuqc2yfVUEuoeHE2LDh7ZAusJ7MZYNKHgaT5meU",
  "key27": "pSKXfGWgqR21JwuASFT6bzRGRCYwZNE6BDhPavM3t6EFtUcT7AD8bPM6XQd1XfwXV3ZfVPweH8v1woACvppU685",
  "key28": "XKgexKqpbX67Etu17HYUpDtCQUAzHYvGe18nFrjoSDDRfPxzgqszCb5giHaxTxwyjCSwckKWcjLiJ6uquxqmB2u",
  "key29": "4ebB9jEs4MHAJpuz7JPaqkfe5xjbR453Bv6tzC3uYDe2npyEHdj7qbMD64gL4D3evhWQxN1xewqAwnxNqg9EW95m",
  "key30": "4xubB3whHeX9Xzqn416p4XaVdiYNPCs3xENQvBB5YDWjw22QqU9xUenh6Vs52AxJ6M61WZhkBYq9cJB9PRQBF71r",
  "key31": "32swgJvKtNXT4WEK1rtLALcqECEB7QGzMF8yRiaw1zZ151WVWuZyncWViXXNXF8QoMW5qs3McDP59CJ9SrxHNi79"
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
