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
    "3D1ZQUn4rvd6qxEg1tF2Hzx7VNPfM4jpJrdhFbgpxnkceriTr2hgZAZPv8nms23eAp75UeUhKDeGvJVSzczphecf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vKFjsynW1dWg5xUTrmLCG1Ky4ohzgnUpfRMx7pqLgUE9jzG1nr3zcjuDC4KRVgP8ZrCTpXTtrUQ2bonjqBpaLUX",
  "key1": "4CjRP2M5oAjtkQKxN9TUvArCSpmWhch56WugC1XdwxTbenJhJ5U4Hmhpi2Ap3kgxQRK7anTbSq5EgVaeQLh4U2NF",
  "key2": "Mu8nswrCbjkU1tBQ7cZTXXSruLFde8DEQiZ6cqpyMrWkqoGMQ3GZMPfDCfMdZHWXsnWQywYPy9ZWASSQqdvWJ4W",
  "key3": "3nw3hjttjp58mbc7XYpkNsHHmPyfs8sfq26cbCxyFPvTKRHGSZWJyy2NSBzNvrLPvjs2o7yWQfGDX9xGhmRCVK9A",
  "key4": "3HWMTLJsiqTFUX5PMoZXR2m9wzCUW6jkM7xdTNGkUobNM2QBkTgY9KoxobkbWN2skJ6KWrysgkPDWDRidMBfmnW8",
  "key5": "67iYfgJRQ3SBUeGsJEFnu9gpfqpuUVShyVQVBCew4D59FqU99TYekk3PNiFG42xSqzP2w77vauqyF5gfe6sTSca",
  "key6": "iYdQtpFkvMCfX89y8qstKMHzJeEVAyQqdfqpCkdfrzmJiotmYSAcfkxyG5fi2jWNMt1XuCLYEepLVtMoaz9ktrw",
  "key7": "3uH6W9HBn5ULNv49CDRaCSJ6yVVUkC8qcoP9fc4ucaFEr7YrMUbtp64PPe3ivxWBXKMuygaG8rzaP4JMEspCXdKE",
  "key8": "2tG3WiUvujtAmyRQyPG6qepKXpkYegKaowAeBDJNFmAoHzugbN2t1oviRG6TnSxVHcuv9UrekvsTC9SHJTQi9CNs",
  "key9": "2ERpkK8DgayTVTnTBJAafoDZJXcdgnWeg4yjS3a5BgoEH5zeWnY7RJYpwpEHTdL4NAnVjnVyerS1nrwyBGJptWXt",
  "key10": "z9nYwaHsGK6c4j52gCEcx8Jm2PL8XphCi9vtgoWk1WvJ3McE15xvMCP2diReCEf2PuWbA1kmAEEnkDcSGo2mK2w",
  "key11": "cyQf9MjGHEdnzr8pdFUfTZf7ZHoxvDeS8LZSS2MFY4a3JmSyiNEvhSu1jFRR7sEuEafzdQpPdi22rfXpGV4zteY",
  "key12": "5Y4CRviHbU5CBjAAxY3XFgi4krPpWk3Ns4WpHGXnTKzkL9hqww7QykCaKvUsx1DJirtH71ex5AVfGdtGyk96NwM9",
  "key13": "2y2kdQbFPsE4NZ1VMAwW1UXdV1tjALTkL3fnagCNaqmrYUz1tkzkpJBn1gnQtNGWBw6a9esgBy6bn8x3SC9Nmix1",
  "key14": "3CyhtEKtQr88bJMKXFFLxJxPKQmKQsCQ6rr35MozRDU8yo7AzSfpa2gQ4FFfqr5hcG78cVedriUcBoBCKgd7Zu3A",
  "key15": "5ND2E9rMDDdf242hD5xwadeNPfbXGhz23HsCSnxF9p2kFrcVmB4NbTSKcQQAYMLFjogrorCiKzT3pCPCzapoTMwk",
  "key16": "2FsNvVUNdBsXEqcuENwfrhqSVt4ZkQBioWBoggShQtvAGfPk7crsMNab4BvEPAXVprZ1bGQSqvDrYHXj7R56R3Ar",
  "key17": "2oRdQxbG2vkhQV6f128r9a7vmT7jzmtEbZcmAj2gtyYtuFauoRGwytXBcn82WM1XMNAPp11cLKAZ8WeMbyyZBWjY",
  "key18": "ZW8UNiZuZomXP8RxHexV8KqbRiYV4VVejnidFsoWFuYqwyR3i784spfzjphQVsh1eBnz3tzTQMxi4WPomMyNfvd",
  "key19": "DUvEahxhKm4SorfN5dsYhoN6KRHKGvkMcudAhMmXLgFvr9pu1XvfyCrCFrrLGerWonocKjVwNbk2Yo3MrtT2inw",
  "key20": "4JBZCr8K8QCYZvZRWULkU5fpRVrSYgyP3EMWGLCKxLPR7nDrcmJTbWMPXspCGa8sfkoSiLiHNjSwyEL7uHYeH3G7",
  "key21": "3VPNNzbpEmAzG1ZssLgiUVERsKqiL8oMgAjywWRTqM3rHWGR6QUuQ5ce7HwZjpZubm6t7mCHGUm2ZCVMGfyQTnzi",
  "key22": "59dsutnQSpZK72XxoJNthSWvsP3rUpqpmtXH1dACNdwVaJAMTaR9fjETHH3TwbPDZGuqSGF67sK75Fp42JnkaVoy",
  "key23": "8hvrEUwhRwuZF2YEa1ehRGV6yFPiZnMpo2qxWnoLQ3oe4tWkDpZgHFdJfoD8gmGsPfo1SX4eeJjuvc1VPLorDJm",
  "key24": "5uAzpERgGRvKYspeaG39FVgrXiEvDbdVhkXyxnaCpAJTNLAVjHAph79PnwjrW1B2ZVBb2vX5n2fhVnZsCJubfMPQ",
  "key25": "3DqSjoCvDdiQqs9LQ3hyn8c9XETN7vSLeFQHrXrJTWeFKXPE2vquzsCmG6crZ9dfdcPooWRT8TtcyiBN7Dgo43iY",
  "key26": "5LSyKbN2WcZxg8dB9Zb3nnZSdcefZWGF8DHs5RR3FArLf8K8UPdiaeht3AqBZLdgHiDKXoZGhUiTgPcTTN19ipFj",
  "key27": "5jCHgV1KkbobjmU9SsG4ZMKw1Xn8f2ucCLxCkZy6bayJHXHdaFm4czW9bBVWqQVBWpesYSU9Cu1LGFb77dLb58H2",
  "key28": "556CjR4Q3DfB8vTYjrYS9bTKWx6qnp22LikCtqWVzwkS9B654dySrMYRj5XXWFZPW5rXddYUbmSjg8m5WqrzgAyd",
  "key29": "4yqPhW74qisoWEDwuyRbvkNn8FovA3qrF9hxMgQW3b7L1sTXQsdSN8x81LR7jXRnPHb7cdQUjfCpSqjYMpVAT2X8",
  "key30": "2see77jjoFmhCFhsBa475AZMQGH8eaYBw28iy9JshNHmf7QbBbizuzCLapFGeTjQ96BAcHsGeWteai4JC4JEbU4V",
  "key31": "phpzKon1RH7j8ykSVnf9VfdCuNSFmr8EZ9Csm8EwNsb6MzJnpaWfBBVPaRReMdKSzR2eH9JFhaRhTu2rzDMtQvg"
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
