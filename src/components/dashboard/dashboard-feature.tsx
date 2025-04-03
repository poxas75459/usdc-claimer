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
    "4Uc3FPfPJ6kdK4bFyWwsz7ArJvtv8hdRGiVGHuFdksoG9UewtmmW3AFuBepspBs3ibXAP7zHQ2fhXYCunXn2MMSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ah9vtzo7u9HDrRmNyxDztAyRt2mAhxw1wskLsyeLEZxQcnZi5vvyQR9JkjYqSc7vcYGyYGUpQA3AN9SxBchDci7",
  "key1": "5eayJe8e69XKGuzjHWB3CNVpG4Urnr9nH9G78CyWFZHUwWpYNGqB9c5sMaqoqNm3hYos6JntZqYC39YutdRyHVYM",
  "key2": "5m4GC1NJfEU2fHSgNo3BQaUicP8aE2C8xng7uN82ScKNarKjUsLwWxvkmdoRf7U5oxBnM2CY5mLFDfG6TaRKYymE",
  "key3": "Qv2SZVXqGm2Vrs3S69nZzcPm9JJYPdbFyFZMoz5GnZzdjYNAFc44rV4fErCf2cW4HYvrYiNXKriGZV37wbKE58M",
  "key4": "3UeHJDZDsMphxong6BzyxNd6a7gZZyWhFM72ia6gvqSW8DN6UECfSGoVQLXYzjxho4DFXFBdtHNL6xLF3PWy29JD",
  "key5": "3Utp6xAwF2PokXjgGi3kaY1VDFG6jDwPWPsEz4E2pANxKtJ1Z2foFbDdbRtSPpf1dZCDVMQouwvjg1pWApXrCRV3",
  "key6": "3rDbBEkhi9cFeH6NQZ6Un77SeNRdY3cMFHV8HX6pPHvngoTZ74ENaGbbQ9swyDtPA1P5CKGzG7sxTdzVAvWYK81q",
  "key7": "2t5uTYtmMW2ehT9Lt28WMu99YwexxNeaGN6PyDDokExYGeCprmYM2SBAFY3RzQ4SDNA5UqiZ3sXhkjVc9ptb6yT9",
  "key8": "Ns5PF5iMFdwPrj2QtLWKf4yFndjCSHA5x6syB4G21rbw2nSKy23zNKpbNGpRd5oa5tUyLDeyNGd8oqFfnCPSViB",
  "key9": "664nfGURSo1VjjZbrxMXNq4Ja9em8spUJwYcqAmztwGXB3dNhdGH98YFVGXwZdzmworL2N46e7iSZn5EWuCxJt6P",
  "key10": "4Nsvgh84Yc9ZDkZwXKyCQorqcU6jdH2J8UYnyLHeKhA7D8NmFfE94z9CoLhA5s3KT76YxKsC3uS2fbCz9DcUdytt",
  "key11": "5rJwWzPsuQQHBkv8z7ZJ2JYg3A7XPYWFiU1a5tbKdY2jv9VV4Q6DW26fn1jc8Y2CbpEBN6thvVVNqdSEkbrDZaqY",
  "key12": "2guZjXw2xWpuZXNgbq8cnUqH8ct294txYKg1FWaJe2VDwL8QyJAvGuszpcKPDZSqs7Ubp6tq7AaAWrLeFms3oZg4",
  "key13": "5xLdPgkYqJvv7ffhw6s1wpFzBoz7EADNR1RxqPj4bbzr1kfH9vi3Tc4kgG293kh1xAoVj7sxRX9BVExJzwrHQGcs",
  "key14": "2ZDxkqZDrghioPrAEHFDsq98hEPgm3ssCG6rE5KLEdWxqBuUHDBTtu99ELD9qEPfokdXHovamX7XEWXXpr6Jwo4P",
  "key15": "2aGqx9yozii27Cc4ThLqc3GNwdBR8fXFJJbyeJ617LAXrMF6v64F5yssUzkApWNASdt5ZU774LHF81a4gSkMd6PA",
  "key16": "SiLbSooCcvd92gRMxLC3fg9Hmm4xvsSFfQ1dYsErYdwC5YUuhP8VfEZtYonAPzJPdxN64BAqq5Avpkstozd5ysN",
  "key17": "4r6m7gQLjYZcN1RQwxCRPMHLyxGUVi5gyrFLCFcfm72MrfRoPC4oY3HbgLE9G2SvLzSigh1cDmHNhPxcXYQFW871",
  "key18": "2FoAoXLBF4NZSj91VDxZe843G4vqyqqUFEWjhNfra4or8sDiD3Gm23BDRSikok815Z73hGdNZMrnFzy2uHL7edZB",
  "key19": "3iL35MZwYXhVXnqf6NpXLYp5qBXBifTzREKkNQSUkEfRa4P2FgJPn7X28dgLwfwaiHxfaR8iktZP1fB9wxH2nV1s",
  "key20": "5h3GgdwKAb5qXksXdqhRfYx8bg7BuJNv9NSGDmx1DfaqhfTQ2VrRgWwasK3Rhc8ivtGmt47QFcLXyZXv4H6Qd6Sy",
  "key21": "mtoLoo1876vCJmhwjmbWo7Y6rkVUVoDirvAEbZjqehT77UrB749Lr1LJwGDbzpSowcn5a9zx2fehEpxHSNS6bpd",
  "key22": "5JBQFEVjDiZLgcBFypt87hBzjsgPfXX9iwvAgmvzeitznNkB5ARMjTL8RDfzx77JsMJZYTngimEke1Z9d3x83Gge",
  "key23": "5jbLCbEBRLJaXkc2LkaKAzU6jsDGceyswsznKQHfMsLTVD1NcfXY5VLFxdQgjc9sPciCXwzc5TkUkP7jyxtdDnym",
  "key24": "2Geanuy3Lw4RvaSkJvmVgJJcA1pdnzs9rR7JbP83K1mm8EiQc8QMttL32egfXzzUxDT7M1Qo7bZpJu8CVN8q4Jc7",
  "key25": "412w8FbghcoTSgBx7FiVDva7tHYLJyzqk36vALNpbRX4c2HBfs13dcsaRDGianwGUteDs8AqoXDhGEVrdzbNv9gJ",
  "key26": "x9cUmArgFQgLtZgbw5JaJQDV72S4qBUfjT2gX6yTUwbVdx9jykSs2i3ZMhwZV1854ewKEtv5vj8Z87LmWZJFnRW",
  "key27": "5bXGmixBxJNRE27MSZujgNKPAN7UAvUZzd5qNTjswh6KSx2EDP64Ef54cEYuDtgftxKBmqtfGLDsyXoCdQz5znmH",
  "key28": "4FqH1ifTLtUE1RfozSNrRhCgYCB2VdjoPK488JckkN1Bwz2yB4yTh3MsZz3nPa8yCsiqxF5EpHAhTwD3EppkZjjL",
  "key29": "3568TRpUsJ4epPLZtAH1MunPX3qTsKYj73SEskLeouhU81h6s7FcootGc5gy5HyLBUgtTwJu8a5Tu6QPBm1kjnmr",
  "key30": "53rTjEHkb6jLBMVgTCvL5bRycnVcTFRdm4xzwFjKMLihxksna6SNnSSTxZxeg2B3D9gveBRXFfHk5K5upsHeFJgX",
  "key31": "66oAEEwmyc3NLUK9529Bw9sLLm7x5vyQUX2Sr4AnnPbrEAfCdEmWbmxnn284A7tZNjeM9nZcn5TeqDyD4uPD6d1r",
  "key32": "hSvF4GtANupinxWHLYotBezYdXubEMcnkAg8Dmmn4sNQtPBd9osHgQzfo1KPtpsqyi4uSAL1LpGhcTw9WKzjoM2",
  "key33": "3aHRqE4iHszQDaUHfj7WnkDV7T3AyBkFSPvcohWmtQG1CY524JXBw7sJom7HobCkGSt1haUAvM5DmGKYBNjrw8xo",
  "key34": "XUnNKe8hdN2v5UrKW5XshV6Pxs293mzGfyQ9L4v32HiaC8v4Bba3qQMr7fwsAmEHsHkefx6X5q8k38jPzXh8ks9",
  "key35": "2UwjPZMkC3ydQfppgoFn3BiGyeg43WV2hsPYuesz2wzKTyQ8jt2r7b2uxubSjbMsRX8V5wkjPZzYRDXz3bm8w7KU",
  "key36": "5Cx1d5D2EF2sgE9mQqVarw8L424tDozx3c73D4uRN6nHVN6xFPKGAAsS89PskKQEMgq3gZrLSXXNLR1PRQHYp1uK",
  "key37": "2AsSbs8FBczJh18Pzi76fBQf7RM6vgiQ3EoyHcLGwLjdd7yq3hFtQY8GequU3MkK1pkaiQ8er7osLTpyroXH25qH",
  "key38": "9RFerpaZyMRheiF4efZtGYkT58JZNXn7GPrAYMwnWh7ciq36Zri2VUBaumc7CjrDVTnuunYGVPCpGipA7iL482y",
  "key39": "4C6NCwWYg2i9Wj4pgWfFLxrh9LYt27R417fJ6qPAEgQDKpumPJqXPUmtCUaAGwfdKusYZ1Eb3vfvEVYd4DSS7m5U",
  "key40": "4BuUXq9wb3gcYxnDYVjd9MQApiVtyqYrgLEoxV9oJXH1KokxRNPitZP11YfiVZSpSvqwwyZ3mqhDa5teYMa1jNds"
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
