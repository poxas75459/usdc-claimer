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
    "4gE2DWJaziCdp2vKnKStX81VdmLrxoxjCQ7xjBL2vWnGtdfjuZrN1BLsRWv5tEPxEBC8avnKsFm4be5eZzWmtbha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sa1Wy9JSoY1TA916mZQHmzjRdXtoLZZmpNHLXXXpYinr2q6ePjtYVtZchYvix4FhPoVdN4weo7zUxJiy4iFajmv",
  "key1": "RstZJ8N4E7LQa86uE7xKiEdrByNfZrxHKsdyWVsDMdLVRtd6EU4kWZRtBifUMqmbBpUzHm1d6P2Waf5pUjGMjjQ",
  "key2": "3YQbHCUYafkUEcwuJSUgi7X2yqkdMj84SoxCv9kf8ezGaEHpJ975ArgtBMc6qP2ZF6jJFm74YnLUn9ovSccUKLHc",
  "key3": "3nXjVWE7gV9FXnNq5VpM9AF5mDwucjAJncT4yPZDwRfTpTNBFZzwLRw7jPbwcpra2uY8eFnwr1q4ShoJmhTR8q4E",
  "key4": "2ot1uNeLtjYejEUdcGwgbqKFn8x1WYoUg3bPwA3T8u9yiVDcek2XFboqYM5if7A3gxzDaTQFLpMgFHYbyo9Egd3G",
  "key5": "4xqGauUGFMuJqi1umM87nhXKyDnTnNhLxGVMst1U4MEaGHUL9rxzipSJZTrGpqPnNAgE6B2sQdqdH7V1hEucLLhq",
  "key6": "5p1H3to3P3arJuTgHiMakRdsNGegnmuYK9YRFHSJsDq5FJWKvrRAmmRKudEBiXi4PPAkvpoBfXuFPrK6pWJtRG7h",
  "key7": "2413puuHq6Nm65EqktPpWFE49U4P9MGstATMVTAznw4ELWC4kE1uUgqHMGL5N6rhBnkCD5QgSEfZ4LyaSSV6Ewx6",
  "key8": "3sbcAcR7xwbEVPWqxzZDwnGWLPCt9AGAicJMBzRXHJ6Y4Wp47FnypTzYrRxVM8kpX3QCQ5bwmFzaNWid5Pu3oC1T",
  "key9": "297NsyxUed3EDF54ioPsaXU3NDnhvUorUZvXKVG579JynT8pE9u1Fv7wZ8xZc52nHsqY4QvuDjZyZ6eGaB8nYqwL",
  "key10": "J847ksk5aDaGXrAE22SV1isYZAuTLYRmQYeR2uq7eiFny35rsfdn5FB8o5XPzpPFLqc6jAWZGcsBf2vrM525v4M",
  "key11": "3auYgEEKETd2vZVHn8ummjaH9BBff4hV9C5eV8R44VfPtTdoKRStTxKUsKhiTbV6gebJhUC3uTWYW3nqygVuGBEu",
  "key12": "4o4ZHgBdF55GCHtywYhPjVcW9hoWTzg8CVEmao7JzsmbJFTf6qHfLxykzmXPbQ2JPxTp8cB2Rh8v6DtPAoejTmYr",
  "key13": "4egNvEBRUtWFqBwqfwQWivgHS1559hAgp4RGnd5isBmcv134xvPQM3t6yUcvKH1scV9hgupGjZzvmTFGZjWipWkr",
  "key14": "5Y5XHehS611eqrkokKA8Br276KMoDCM7pC7R9HwQJ9UGQNYw3N6ZVWEceF6JsRAq89KbMbz1hnabjuc6AVfbL2Af",
  "key15": "3kfMZPHmanJoWadKCuNfDiNaNtR5q93ajatwWzYX6MRodBdaa23sBpR2uYogdP4GhGVLkEivx3UgR1pDQjKAwirm",
  "key16": "5g2bBcugE4L6e2nVo88L7QoSQgnQUAjimBaevdxKarChmM2RVsMH7UYJJ3rgFtqbDoZFybQMwDRrjBfoZnHkaKbX",
  "key17": "3tjKFdFcH1Vtb8jBZtNuut9tSAWjczrJdSoq7M8U5mSVwcXdRpaDvXN4MWME83Qdueu85n95KcjScTqQi3gffa2X",
  "key18": "55N8uaaJn1k6CEh41XcvWZXvwLnQmc2gdQT41LwZbdjtZ9J9m7tZkdKpBmjpXdaEs7Z3rHbaj56w1XxvUpyx5YaL",
  "key19": "2B9D4zKjSecFV8buUx4We3VVQB2NFDHCP9V9vvYjXcXSxRvGkes1BwJ1rsVvEV42xaJ7FLtiXZwMZJjvB2NW7meZ",
  "key20": "3mAsGVaxFt2zM9eGnUaS6qE1BfjBryVZBJrmVVyiQrSr2SwWoc6sT3zAac4UTz2PaaDPBPjSA43nwwcLZSPhUoH8",
  "key21": "4qCGqGKGSnvr9KAu94trR3GwskRBgFLJai7s765hv6sH6x6zUGACnCTYa4LRCyyPk6YPGyXw9Wh7waBS4Jg4GWoV",
  "key22": "3n9HDM6C7reSRboXuwNRPuwVkaRhpUjnRC1FNL6gkZD3cHJNwbMArYJUgtqsUWv7ikSQEhh7EVWp1J4fRYRttGZc",
  "key23": "2nvRnxi37Acg1ouC4jtxZNdLAKiMxfigYDRRrhK1m75QGd4GvgcdNRFtkgKeJpa4xYVa9nwZ2s3XpoRijP126XzJ",
  "key24": "652ViZ4pg6Q6uRvwundFaSS42VJFDBEJ6wBNYj53q4jAXRQm2NCcEuG9gkPeGaqT2cLLjUxXuVoZKyMSvyLERvVV"
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
