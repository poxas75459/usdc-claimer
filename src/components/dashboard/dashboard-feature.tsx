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
    "41NQcsFdbPJGGMZFeLTr8tKyUQeQ7mGia7XkfYN8bNgABeox3R3VgxWPFwqKmcUrz5USNG8efe2yCCWhrmSEfkiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P2wfRt4554hMkNs6GB3VukcYdzu1exFQnPVfyQZRePS4yitTZdTAs8jFjm1S3jk46TsVvPg7jwzHXrxGwTJAxQV",
  "key1": "428X8f3vsyoL7oh28xG31eCNFa6aNjkwx6ud9rn3o7274p3Mcq2tNWnoqzbG3k4HzWwP117sGzuCbVV6e5Y8KZ2U",
  "key2": "5VpDP7YpkMhkLX2mn3umq4cDC9kg3umqkvbnDqC1zhJ9twEpfxAyQ7oFDEdSyeJCuwWHUJTyyGv5dqH4bvNt32Tg",
  "key3": "3ZBfToKC7cC7GUDPeFU8kQLSdtjQF2yzxiC8hp3qVP6A2HY4vSxNLviyMoWgURE75aXtBRxe9qU8iyUNG9dLrw6w",
  "key4": "3zLC4mDjn2HAEyyaz89yH2KqsiRwjG5DEHJ42pJPhB5kToN9Xs7inEow7yfM7xyiyas1AQN6eBS7WmHqWvAhQgki",
  "key5": "QAPSdCGpb3yLCEvW68i63Uj7M55d2xvV3n5YQqLoJ93kyGcS42aeutyo6jcuBDJibdoF9nVCRxR1pX4ATSLeTJA",
  "key6": "34TdorYNR5CGRCT5CQw95tY1a4629w83T8X3tV2kbKRKGBoLip2w2N2qhsPnA83MjvgvC1Lrkk4TTkKBfq6bSyDh",
  "key7": "2BZnYs63aLuh6ZHx2dnXKjXsKBb9zSRKtmogt4nSneavCnEftc2WZXrehva54Hc9mArWu7JDUU4dsgJbrNs8ihCT",
  "key8": "5dU494Nmwg3KAVZLEG5r9wUKHMMFQ8yY2mmPDPRjer6b1bG3wtETt6EaUQTdsxtLbvURPxFaz4i1oYjXgUNHGSbw",
  "key9": "c4eQh9ERgX72MSPQxovYkPCSSW3qicBTVzsJccLL82ZK1446Hgn1jmVyFX5R9NUAKqCp1wWfUvK7paS5NFTLBG1",
  "key10": "24tMaR37pCz3XqHSJahY4gKcew8jMzRD3g2WKiip8fAmRMpn5crvtS7AtQ4k6De9e6pKi6bnu7eyvMoQ3esh4ZT8",
  "key11": "nNewcymVewvv1FDn6mx8vGrnif6P1qh1VStzsUJSuk27bsCYLUFdFrcSyrPG2xMxAwDXWD4SVm2f7WZAhVbog79",
  "key12": "365ajDh6cxrkVY3KV96Znz9vfpBEuAkDN8dqtUAb1WVZDK6btuWSzYh5LR6nLjsdk7kNTboP6f1THJwqJyGo8PoH",
  "key13": "5e9HY3QPNX3BfkSLM5uqbM46BV8hsh84SmKqBSfm83LttZsYA5G11nPVbCp8UwJCMwge3PExnP67tpSSNyXKuaDx",
  "key14": "2wyqcmiJAwCvDmoej4di5jQBuS9rMVkmUzmUpCFpirpJoV825Scej1r2bE5X4SkA5ndwsa41DAmYxvqoC6Yu1BS8",
  "key15": "34nuy3gmAJaLDNnJ34HgFLprVbrXe1rVSXq7efqk5dNKytVGRZQxL4ZuDW4Cw2KVyvyMeqTfeAcfQPzabNQPyZ9U",
  "key16": "2CGQW5QX7GbZ9kTA2PZgWzCgH3L5FfCeSxMt1xdBXXo475HweRbjiuKN1aJvmX9Kp5TjPWJyEedgsPKEiWqFi7De",
  "key17": "52Uvrja6dGvN6CDzSEaPqLAHTCxRRmPSdHtTmreZt4qRNXboZaS9D9Hu6ypGfEEuT16PqpjwTHxds7jbbzQisR5w",
  "key18": "4ySdXS2ov7P1xqQdnCYgB6KvMLuFhySFq9ux2w7GjsuARX2KnpxP6RyYFbfzRmgxpfweRWyo8BN9tdmTBW6bUDAu",
  "key19": "4a4MFTyf8KG6UWDwBJGhWtYVveRz1VQfrPadzi9eo5JxD4kVbN2jwiQTsjGQfukxZxs9r6fC21tkTQxdp3a4fw2D",
  "key20": "rGCzFztEfmoNAL8CfC9aP8XwWiGhjGmryKTrrn6rMoht2LDnUSnuQY51tgsKHXYEyRGZNGQ9F8ABqEL8wvviS4r",
  "key21": "2vd6TBzzTWuc47Q11Z746DETzBLtmp5ucTn537To7N5e4Go7yVPCRetiiRLgGLZysVS7M9Xe3edbLzoR93FfxwcT",
  "key22": "45ccBsvTPfjMBo1Zz8ZWpzQg8CpzVEabcB2omLt5L5ZP5DMsbd6PWQpTubXyKhdVp1qYiCTgrFcs1Cb4qo69U9c2",
  "key23": "iVphfGcCrmf4bgnZ9XC7LNwskhF8oT17wsNYPFMrZfEPp8SHbkBiK4qpPwkYBimuQcghTFkCP7R1pjydq27Eqnd",
  "key24": "41GY5AcSEPMBrbcegUtPVTgEJK2QSPfdj5uZ5vGDcrWDxYWh4dGxLdxBe9SCFfjo4SyBgYSszj8YarqCPDfdR8Pf",
  "key25": "2Fs5EHMKvWJeS1gGNPcXST3gudN6ax8MQK7VqyhRdXb8yk74zUxhyn8sST69kEjnXeHHZdx4UkYvFjcmFMSTEkhn",
  "key26": "FoaYjnJzqFhxP4bzHAwUdsVo2L2MhqF9CUmT9ynxciFiqW5P63iT5jsV9xHm6AqFji542jUweibR56Le5HmxLMS"
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
