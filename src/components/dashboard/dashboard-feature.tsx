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
    "3vC949YUGUReT1rAZTfgZypYbtraGRzGuxtAcsfNHM91QrjyNEHNHQuUj7ox7GCi4ZPZJ63CC6kmfntXJ3FUngqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iYRYY364r9REiXVviS6VYh4z2bQ4c2GbSdJT3VhadqGrBKeRFkjFN6KBaPtZ1GVygZfauY1cW6nTjdmQUBvR7rS",
  "key1": "5URWoap3YnfGvdhU1eT9hykhSwY5xc5eAg2pZD5DcnArmwYZE1ZqEQEPZ8dfSqKmcdEWwsEqdm4a1hxSmwNSzcc4",
  "key2": "iyzoPmW9JVQiG4CQVroBHtsik5Uj53rayz57ZddPcAQgchGcBy4HqVeohJb8FPaohmRfBHfYQGk7MpFJc2aiebp",
  "key3": "2bCfFCAzztCnjxe1ySwSQajtu9eDT4nQ91Y2DwHaPFVDYa2bYiCvCetkqRPofnwQ6EhQJb5QQCDiec2vD6MPz5ZM",
  "key4": "3Xr2mjGUEycyPfgVsRQahyUb1kyoR4hgXwZbQrPyXcp9ixeCfxDZJJfhX5NbNzHQyXww5a3hior1bzqPNs21VEUU",
  "key5": "4a5zhWoAeKvU1KenFxfFdsxXBCTTknwode4QsZPZVPSt5uuZpT3rBEqmPYuvNVBt6e5vekn6Bzw7mgeWYL1zgb2v",
  "key6": "36nKbkjfCSRduVe5GGTqvAnoHyzBnUMHfru58f2MwKQsT5hBJyzQLRUMxXBDWydemXkaLtJMGmjtHDfx9GPUzbjr",
  "key7": "29QJrjRcyBZFr88EbkoY7YJShZkgRQJyFMasXxPLwnUW8CbcAihg1MVVTrG1LcV64UsZEABCLspzaE8xXFdshnPk",
  "key8": "4NyW4ZTEe7R8kztAPFQj617DLHt4zQnRsNDHgcjgFMTJtGfeKzi6ApFnvMqfPWqTqwFNGmDfDo6uVeeHX8RcBiKF",
  "key9": "2nvtHZ71PBP5zYXeNk7LuXFfF1nwcGywnifhcFpTPmLQhEYArTVam7tJXhgQHYzoCFw8pmZz1iyeuQow7zmeN2Zd",
  "key10": "59K1rBvaff9VbiYhR1rykbKv26QcvKVYCFMtb2vQejJfybTdT5uucTqbuXXv3occ5jLwTcjiVVeJui9z1cRKci3a",
  "key11": "jReZrVFMj2i1bMvtPktRzh84WYvFEZ2ASZbxf2M1iycwhv98s6mH3ghe1jyQHfPNWC5xcp823AaUyhtqpvjTyov",
  "key12": "2Mvcjv1SScUKi7xqPQmVB2nj2CcycgaNyThfB7mnNCGWjPeGSCks3NPRAHngaotA2QJqmzaNec8HZ3fiGidcDk5n",
  "key13": "4r6ZwGDUnwESp997dJnw5PPWdJyNdSn6hTtxNHWBvLwtMWixsw4p2nqNoK8LWTab66bjRCWPZoVuvYwLpXPtpAVG",
  "key14": "4StVwD8j4xzZWSH1GrTJZw1b65q2TnFrYCinRX7u6LCEy2xYKamFZdyssDikgbJWXAmtsNCHp4M2tbC4SWhNFUNG",
  "key15": "3ADhM1NwFsUcmVaDF1yZortRhQTAs3oT9d1L9LGyv4TBFJno61RBuyy8b4pX8cUUmxdL19TfRjXRF3gJxPt2oAiy",
  "key16": "5xGfNktMmwmeCfD3PLc2p3AhpHuCdxeAjNT8ZtomwM1Cd1jYUhK4QBuXeLaTqxsaWSa7oQ6ohw8EQGCkebbxXYL6",
  "key17": "3kFnpSVn2AB31cR1EcqDk4R51Go3qep6qqGnPjRSDKTuneLDCb9JgTFzLoBSFYDUCyh8D4haVG6zFnHG3XQjU8mJ",
  "key18": "5BSKFtvzhsAX9DYWVUxPwkcyDPvqMoQJNcqC2n1gVtmSFyhbep9ZUbUfPA24DXdBMhjEcgscNqCHxQ5esKuf4Kdm",
  "key19": "WFo2tKo3VMW17mmw1dz8JccxHuHxgsjxveTxDrvSReA5kxM2Acp8yVKeKLy17qD5LEnzpszcdyin9aQp3ccjdrA",
  "key20": "4Xkbo73KybgNXbQ7tWtrWPoWXF3vHdGY1hiWzS1zCyhor1q9U5YbkRzayzgpLdeFLC5g6P2kw7chn6iZD4tAujt2",
  "key21": "5cXJrUqKC5UHegAZYpqZBEYjXMmhZALR7wTMf9u3cdBbLmX3DVipFWaA24oGMBWPi2WtTdoNrmhiHBUqcQ1Wijmz",
  "key22": "4wjottqn4cDTRZzKTwhcSqqT1gHH7BZWLk9K6r4RfWGWSxXeCTWF8nFA2xWX9PU2CzWGFjY6dRvoomtv5ed79msn",
  "key23": "zT1vA4kytw5VBAynFUXHzM2xJfMysNnb1m37DqBUQZby7aDUreL9StsHF3U1H8bxoU26V3GPt9u1wfYZQjq6atD",
  "key24": "3c82DRBh2gE3EVBtUFaAaGzFokYahM1qfKCJrWgsQJTjSyuCEWoWhLSr9vVk342mP1xm3SvF3pkndnMaRMzZtbFc",
  "key25": "45XNKLMaZZHxqxJVLM7vC48np1c94vQphfa9a6o2daTgAAwZKMHA2HqYBWAUR3nUZUV8btNHXDbqYCYNJAviVzRG",
  "key26": "5r3dqXSGUCH7SXrkwb392iXG5mzkpDboC3td2wyoRmpP5rwwCvnfVCVA63vnvsr2HLDHfNWQEpatFv3njvTK3umE",
  "key27": "65YcjLqeNm31yhtDCxFLc8Jqjsp2rLoJoKsCPmHNFJS4u4gxsMArH8EfFMoNiPSkBHpCtGJQqTjGpLvqkk7qWMUo"
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
