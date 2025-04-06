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
    "3DBATZV2TKRiifTqCsMcE1yqgiVcJwC8z7ox5P69sXq55LPo7fEeAnRhqkgFx4xKfiAM9g9QZuvKftXv3kUJ4pGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFg9tGiJFhrrmufjwYvZX1AxGp3ua8Z7ffacgrkdGiQ1dor5r6ZxMkqxsqzbrqfj8c5LBUt5GKtBehsQHm25wWf",
  "key1": "5tdsHVeLDtDg6mgwzdukAJoW2wsrH8DbxZQ2D5R6U8tHM2xDBDBGDf9HTwSR7EHEk72aXffPLsCAj3nRwyXchbha",
  "key2": "4BfCq6ta2mftabFYvAVXeKFU5TUMRwuDRbWtaPu1WoaHPh1MeVY7c5YqFQguvaVC8bHg8ZtT6TJzZwxXfBjRuFMz",
  "key3": "335sKfJDCUQRot7iKnPb3kRKxGA8V1z3ksbh4iZC2cjHV3WzU6ukywstCSgLiwbrxaqvLTKZMQmp3tqeqeZbwq16",
  "key4": "57Vhhm6r9mZRcsXRL3r8qeM72zRxZ7jgCeKmzp7uBYENkzdFUBvmQU8w4JUDebckAFJoQRJhg5nNwaJucWsHYyT",
  "key5": "2vMT8RyWTyU9wi36mjySDayX94XRqsyuXSfLSrsKX6VMc1D28MY22Y272cQDTW9y8pS96wVfVReByG85fEuVz99w",
  "key6": "5nwqHe44xdpmHTx3E13UDzpc7SicEd3ECKQXayZXdztZVX46sFh544fnWFR5wuJ4Ky7dvWBKSvi1asQ6b5qVudbd",
  "key7": "41Kh6RXzo3U6Tu4xCAiknDVNLPW6D4USdyTMyEzGf2k8YqXq3GWVX9w7xHieeCoae6RuVyXpAJExnfaBRzT1obiH",
  "key8": "2PrPF3LRBaHCTdH4hHJve7867KmLn2XHZC2tLozJr8veEsR8SBnzpwCAEcCkNNxpqAGdqEyVSBcANqTdoHjhrWqc",
  "key9": "5PvnZqNSZhuHWz5dC8mBggEoaS3qHGmZFr8NMmEVEuBUJYZi7BoUfuizLq3QcyuULj44d33jNYiMWpxYfr1FHUew",
  "key10": "4NAhNnKMTg4Tc3whJDwHJHia2CNXqSsL4Vc4Lj627cA3XCDrtqfHTD6xPfzUMoXjJfebMShJJaG5xKYNZHrdfMr3",
  "key11": "htbAy57SFUsfNiSrBjL5M2z4UDPJy5KNxGktAcfLkbNVZ6KGiq6kxcFXtyV2hTJ8aQeKVTSd3QE8KUqKeFcmfbp",
  "key12": "4BJPm5wSkdFc3k2NKaVewC1tc9QjsTocXftyZNHMS8UopafAC6bn4fVnms1QkqYMAFuGjNRSscrz7q1XhzzFnQ5c",
  "key13": "331gAPDCN3gnZUmV6gYkzMtQeL7jS4qnQ7dHBUaufiuCfJxdGPmd4yQ9oos4Fz2AFDky7M84zNAhA6oZ1Ukv2Sos",
  "key14": "49rijp22LDxCPrW8AvADsjWJKBk99z7gzSNoF7cvqxLofPJjTRsMsUByJ58uxc11FwHVFrqZJaMtgmzwtitvqAEw",
  "key15": "dBzKjU2LqW2wDfy6x9WgWWmk853qgUigULSdviixqtpGFoKduWDcXt2ZXaXN7PdX4R6de1qqESczdP4tVdwPjkF",
  "key16": "21gu8ESJCdJ6sWJaHes6hAePmMbppyxXweT1zMdLbV88hdWQbXKEsTrnm3Kd7zTfM7snhzcL3cJGB3odyrzw62Lz",
  "key17": "2MvRe9zKFunA9oBcSDAEMhLuqzEwupF6YqkxHwXsoimAv5EnKUBfe6imi1o1QrXZBpJzXH9Ra8FGgHyKjKxD2Ldx",
  "key18": "2pJQ6djn2648hwytXaRgaTdJYPaEtk8BnsdKdBDj542Ni6tyVdrQYd9Q1wuE8fZu9tVWBGYhy2RLy97Jtgme1S9S",
  "key19": "3TKLwRuMRFkh1zijGiChwqK54XVYhT1HWAygC9xHjXUt3SVi2kVPFM6W1UCNFayhKDd9e5X32kdQ9m8AsJNNNwex",
  "key20": "F639df6mQD4vHTj8o3un16c1ygAoKcRaHcurtVjRkcVsvFYm2JJQbhD1YAj8dNgnmTe5mfWMiURGLekmbZ8D2SX",
  "key21": "3chHedgW38nKQDx8aDTGnNDJeqWiCfZ45GQVEsF3cPV5AhzG7jDSgCY3eLRX5Qgavm1mxSDakntx3vUUdWAW4i4M",
  "key22": "5Yn3WnmfnZCR5YUyTHT3ezWysHRL6FC7jYtAB7hfcZ9MickCGKaTttpstTtzTHT9vaBhfQpxpS8Ywb168cvUBW5f",
  "key23": "4wZJJgrypVLugiTaDvUkLreHQ5aDA3QP8ApG4NFBB6L89xDY9L6mhdNdcGDuavdM6Xfguvpvwjg9jSQPPbLrazKu",
  "key24": "2pkiLfL9Tt8fvsFXrfPxfecza7pGQw2HXB61y8tBoUeHdq3kibfNkGHYccRtGJ6g7SymCD1LifewAJJ99MbDoUq4",
  "key25": "4i9Qo7Sui1s3eM5cSitwtjhKr7gCjF3q762BD5TLoFBP1ifbA4v3TgXU3G5QEQC6uhL6VN9skoRuLAJkUNmdDyZS",
  "key26": "5KkCYFkBa1seUzbhnZCPPJheaKP5SfSqyNZSR8YmswLmPKa4FJ6g5FiLtLKjj6BKf5WgScSxzyQnYBYPE7HXSbqU",
  "key27": "5EMGGoBDktYAq322nv3PcPcMRnznqGWxMM3NErybhvpNZEk14Zhjt6uVyCUKiT4Mp8epNcPCC5mjdgnYDugVHnZ1",
  "key28": "2ci7gmXsbWSHztmTpMAaXX1BEXT6RubcjcCBihtHTmUS8WmpCGLrffw4LcfDvfFDypQfNDueKMjt1zoeodwcE3WP",
  "key29": "4otBJWsiFohvX6tmv6THwqHvApYuypXiu3ZBRPfDV4rnAQ9TLPNwodMDjCqSVp8Aj9UjYZNPvFcaEdGm61ZcXcfe",
  "key30": "3Ze88VwQDuRnQCqiZcms2rxJMFVmwK2bsrj6YKikFqDN5TakgV6ckpCxKrwQkb6oeSjWQofvNDTcqd29QWnUTT5M",
  "key31": "c66mvhJTdwNaNZcR3GqXvcqy3LStmSkVivjdGXHpYMfEqMAfJsHGQqeX6qqbfgGhGW5Eqikpt8QRXzX5y5ZxciM",
  "key32": "2yDkgfLx8WxJMKSeFyuF7S4E6gpNneNwdMZWgmhdrpcVFc1sRbxF21EEL5p9JM66svAQESGHyv3HMsPQp8bEs9r2",
  "key33": "43hTfLxgNBa2Fa74DhsSmzGhE4mpttd7oJghXvUHVkFv9mjkJxHvCvesEY967pzd84cGvE8Nd7VbUruNTAvjPJpQ",
  "key34": "2xpbMgpTY18Evcv7iGPosHXKJP426xAJPrFKa3odH7H4CARVLqrJ9EEFTqjbqKxHZ4RLBgqihUU4KXjQM3Mcdxto",
  "key35": "358U3Z5Jb9XS6x6xUrjdUMnPtxFjVgncrBiXipEbmbTE8QruKw5HgGKhbr3xwB1xSmkNMRxvGPxEykgKpL989zhu",
  "key36": "2r1LBuR5sLbGYe9qEKWSYvreR9LThFsDroFrakAQTHM4HCFwyYUTHoN5z67ZKheR2rZDJjHFeTKXJsKQKArEGys",
  "key37": "4cxeYhW1YgmW2HQbWVimYGPJkR9jo7ZRai3tgYJVd6qnKbUN1zGS6iGceZFrwxtEHgjSNk4H3hu4mRVE4mgutL2g",
  "key38": "4Xs8eLSDBBwmBNxLFkmYbj82hMJNKJES8D2GDWgnJ7Jdf18AUnBpJzM9afWY6Q4tp3mUyWB6n1SDJuMLNZbGqEjG",
  "key39": "3NqckSgG4DCN57AiyzrkeNvFY6e4ots1rpsUcECVuwhAqEDToCexdiT9yHkKGvNuAwcot2mYM8xBgL1ag5jyEF3s",
  "key40": "2XukUDZsiCorDyxxxbFrydMPdXAQGm42ycFsdFCbcUkVNkkZ849dJ3KVBfKMdsXiLKrvwBuTVpvPGNGCfDWJGJ3J"
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
