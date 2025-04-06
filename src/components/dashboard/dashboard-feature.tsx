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
    "3qtehX1WLaGKjLkFQvQWM3FREyzTwqJzgF19kH599sebBNUnF8zjprmmWE5NHH9urxjEQSpzfLPMpS27ZHwVXF4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vJj7MWPibdcLPVcHGJxkVGef7Ps1EMk8NJGbGUXPavfHadgphnknWjAgk8vah49418seP3s9fGZdHDYUti8Yo6R",
  "key1": "5MShibLKBXZdH3mYq27YrvUD2FXSdustxsFTPQZ8JqE78d4gR8KFS68QPSwQsPMapfMMchwb3PGzexJCaw5K2EVN",
  "key2": "4V3zd4csmtAU2EEzgN5FEgRSuTJmGHgJre5WaPVTuYKNa6goptYjcCfDHtpLDwhXSvboznoFDQQRb8UaWapDLntd",
  "key3": "2HSo9VRxDqnJvgw98uPsoxpV3Fx2f4jG4fEsPML8RyiDTza7zZj1yvuz7nh6Q8ct1XFPaJNM8J8J64Dzj3oQDrdw",
  "key4": "4Ct74S25ucF2YMV1rK8CVdZ9RvPn931CFKpVcKc6e9cFcZ6berTs6D19WFH7bCj8fHTWig1tCe7e9MbYafiJddpd",
  "key5": "2YhxDcPpw9fzxGBRLgoSzVfmtsLY1wAz2dpcoXyiGz64KiTrtk2U1x7uRoqcJRC9MB9Yze3Wm4xk1YchNNAFGWYz",
  "key6": "bS9PamX59p1eW8pFHTFtt3iqgNWaiGWfpPrJNnsVtHtmih6M7ef6DiE6ErVtadQqHHs4Yefe4kHXzcmBRUBAqSV",
  "key7": "3fTfyU3wjpXWuPJvUsAucjq9dmGC8tpy391neRK49vxUbxencik3mE7CJ5PNDfRXY1DwPro7b9niyFuZifUimubc",
  "key8": "CK9ApbvsGXN9zpM1sUDdnC7a67HWXF4Q6X1bGaBCGJQofnttCopJjZ36tvEamLLtg1E1mgqC5CFDzvys8Tad4bN",
  "key9": "4NMWLqq6D4dsFbwiSBG6N9D473wyRY62nD5hZ7WciqZLZaLeyGgi9PMVKJcCBhDE2L4rT1roMJxsD3ZwoxQ4A8Tx",
  "key10": "2RxnJj7Ny9hgciX59aPSDd2GsGMEtEES72EKagxGu2P1CsjdKp6WKYj3fCCJhrfPhnBvWoCWdJyMLjpNwkzCwvZe",
  "key11": "38KGNS4X7oKsDo164vuTTLK3CmqQaCanmrSEsZXcKpwTL5ubLEcjFuS4D7U8tQ3seBaVsn1kHxxdxLHuaj6zABxn",
  "key12": "5UPHvKW8dAXkgS5Z7F85i8R3BtLccf3wep5d3NuFjVXeGMuy8BwStQiHsgLjRDJm2oddtB4kS579aqveFHh8nMWv",
  "key13": "65ZKU3WasjBur3vMcrHEvnSkMAERcXz6L672pnwqXUZG3iqZrgitu7TbX8SLg55ArqRHBDnwRKpDSGHABPqttAnt",
  "key14": "aJof9ThaEEea32jxUtfdKvDSAiA4n8cKVj7oPSJYtsbLFSQRps1PpNWeEYVUu26Wxdapdq2BgWCr7DKiBgMKymZ",
  "key15": "4Eztmd16TiSNJRr1gLdTCK5cPL6Hm4Z8p8QV5NzSzAbYhiyANcxKsxuKpNbbpCprH1Db7wfCWU4w6QoX6y6Rs5Ms",
  "key16": "5BD8o5k5cpGbfdy2KAGTmDNZd7m4iRizXUTiW6GEaCSxdxCaj6gM2RBTof8HG6PagA1skmK2wi47uvsKwFApKhKh",
  "key17": "3p6BMAfgKmBH8YanYLKLqeYd1tZVbwV4porbm7pyiuBX8zMQejvfgSQ15Z6MwcmTKxfR13pzYdWcY1iSS6SMy5uK",
  "key18": "5NaTpjJomTL8p8DH9Mok35vyk5r2otuhPVScxwzn4oHLD6mpQYBqW6Zmp2jWYkPJF5vKoAGkZqziPB2Fk8a5VFbA",
  "key19": "2xM81erNKFxLPrianvS7nLtsh2gccGSMSfrsJspR3j8pAioJGk5q68VoTDyPSCgg5i3dLYZSD33dUNSzt1goMdkB",
  "key20": "4PQP787HTaaDNyfGu8KczX34AtEprpArfAM8nfUZtvzfTeJzVievq8teTL2uzZ7CR9Xgv31Z185DfGrPKcgKEypD",
  "key21": "pQXr3huH92ugMJ8SA8et6hH3qdyjx9JpHnNLYJcTcZgkEVaTgtCNeeeu17aTjwrohtqS5WzbjP5gWKCJh7BsJH1",
  "key22": "3oG3gfmEwqfBE6DvDjwerH2tA7h8dQ5FqwSDwiwsZEPwzHbZKkJ3KWLnr1tA2qbfgXc5kPJhTYpWAh8tmM67b3gJ",
  "key23": "2ktQ9EmDyNJoRzagkgn4h3NfLY9wQ4RgBCmx1egDVQnG6fJ7jQGY14X9GD7GkGwhXDrwJW6FbvpERKktC9fGyQGX",
  "key24": "3EPv6sPBEJv1AHn6uXb9wF7Q7fXKBJLokKGAkCFgSTVCWm7C4bezu7iyVpjmA3D9DZdNnVr7RUMdJts82dkxgsuU",
  "key25": "3NXR4zEytjyXRrVxeiW21NYQVsPNgP5FfuycGUyF2w75cC36NAXQ9WT8WudPTXYE3CRhqp5PGASqQr7pRJMUdK2G",
  "key26": "2qUcJcNuF3iVKEizxJT7mLGyKRcYx2eFBuQmvrycEj2uQM9puD6x81RcQrr9P3ZtcdUW6twvzkZnb7JK7PcwZdS9",
  "key27": "2YLuc2VqLhrHDMimv3Ynb4XYGbiSoHJPNHK3jbzYweuxy1bjH846rrGMsepTMiajmDa3vTL7XAmqdj4PdnYtuZ8c",
  "key28": "UGrq2tXiuMeVJM4kBFcVkx2sGKv43FqxeV6DR2eKdafz1d4sp2k7FkTfVHbfcNK3wJQeqi2bDKVFN8GL7XR8iBT",
  "key29": "3KJ1E22duk5S3GgdC8kVLy9Kqx8i4av8MXwyKEjmGjKrUySRk3wibv2CWDJ9VFX9jkycF6ifY3CMGvobeDmFnsxN",
  "key30": "23pwySuGRH2tBpaXJpiRVRKLAHYcn7A75vY8AcWhM7aic3TSQdnJiwsmUGTFC6yrTLMaQN5gCvQH6L5M6b38Tx7s",
  "key31": "4DjLZY7EzZyULtar5dZg92ZgudYXzzidYxp49iPMTLJfn4ADDmXEPmf7metMkLHbMJ9SCKf4u4DqLoGUoCqgKGuo",
  "key32": "DKzNcZpWAA4moL3ytjNfeDoMxXRjDWywTdz9LFARAF6uVG9ig8FQQ6yn6JfsQj2QT4uLWoTyBbQFgaP9NwkcHYe",
  "key33": "yhquyRuFDYh4bepdbgxkRgNkovgNNYgxJPHqNoBtaU14kR5pp8KyGUGadNsnwDZWebSg3R3Q5eEE3f5n8TV5u8Z",
  "key34": "4cRjeEL2BdEhRXsFZmnGkddfcx3Jzcu46QWgdo4VDB7VFQUhfYzrizU4vKnPUbDHJZoHpvdKe9eFzvsdxPMqiigd",
  "key35": "4REJ4LDshyXTLhALSi6FgE8Ub1SRuLpuo2Hruw6SghaDS7wRt7dF4HXEnUx7BbbwucVNcR4V5GLUuGqt3z4quJ32"
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
