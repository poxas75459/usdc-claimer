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
    "5LH5vavsudU5j77UzfiQzVJRhof1ZV9tdmaKV5NQeB3gCBFUujJESUqzuJrbMeHu2Jb44pMgrkRdqKZ9ZyjTnVAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xsJVS5xeoELE2kSpYvdhAdr5GmnNui8BRoAe93JNsWe34AHGrvxrodYMUMaWVrfea4pWCftBAv6b5fBDwocot1L",
  "key1": "2pWop67pDy6MBdhakqsfbBQ84YDCc7v4pi1M7aQcri5txDC9BEV1pF9eXLte6tY8ayzaQkM9Qy2pGYpHjgE5NWYC",
  "key2": "2zW3w49rRDGkxbbhaLM2G4zByV6TtuwrUyWBBYe77s8JFobAN42sbczcXYyiRr2HkMneha6sfVrzFCgGFXnV7Vtr",
  "key3": "UbzrM47K6vrGiRztCUVgBAQUuHEK23wYBiihx1cL2C5QVcuhLxhn9QhYhSpRug9pzSwNjrhsTqjWLp2dCLvWH5C",
  "key4": "3y9g81svBBrivsLSBtLBbaCRg9ditAgX4bTyXytp6ugKS2kgSK53HnpnMgd3i4w7J32k8MmY46AEjRWBPEdWLjUC",
  "key5": "54WDKZVhus4erFTizxLBM5YrXCcXWAYPb8YQLVAJshERNUZfETVru4ymTqpSpSL7MKeKr6uA1j95dUAeNXrjEeQ9",
  "key6": "2eGcUmGsZq7AiqqgYSRcyghtQDEzjaLi1D9ZukyHYY4noRXbVnmtJ5EnQyMSB34UqCa85USE6pVn1bTGvH8jT4cV",
  "key7": "5QXjf3exbk8183G9Fx3JGSBHTvHqm3KCWevp3n43mBFVPjuKxdUTEqjDnV4cNGXLMmZHVmQtMiJhVMxxzvnYX3mR",
  "key8": "5HNAdnQe9VF8x7kTXs4oLmPBz2QWPjEGq21SJmjDdeqhwm79Qdf9t87DDSWLZTLpzGcNfjwECwdZXRJZsy5am9rT",
  "key9": "QF7auesHWg36Ba27pgfscy7C9i4JMmpte7iSRznUuGx1F3wut6tBNERhccN29GzSMk9t4mFHACrocKHVZTcLMxy",
  "key10": "613o6k9WKyqDxp589bWbE5byMuiBcKFZ9ojS8LkWUquELb42dz71HRa8uuf3Twm1DpqnY3DWJx59812nbvYHYQTT",
  "key11": "5qgRxhXsh3XMgtB5YGmHxrEfaD3MxPczZCY3A8hfxHpeQy4zpKahCSff89tQbPoydfUW7apADBz2LCGjdc9wxrjs",
  "key12": "2B1VBYwsznuTt9hheKgAJwryTuPPEftWDrKGNLjLQ9DSWbqYPMnDpBfyQHZpRMs3j1pZv3eGw4d7nN18vUAFSXEE",
  "key13": "3jPyKhNfxLswGxGvjkYyajY2q6UrXuUfbyH5VbVdmDh3qzdueuWLh52UpfSMfdJNB3G7KtB62ZWKtFKLwnLzJfHR",
  "key14": "TnHa2GZRaPypdRTajm38kCVf9q8m5fEcnQuLqEiiTWsddkYieK1M88SQrKvGhmSAhzodWy47gJQbFctS1iMQzmr",
  "key15": "4nwtGmanmz9ojMf8dwUHxv9C5QmEAGqDHB1gqoqf9viZvj2EAyjLWr4PkQdNVSFAxgGxBwz2ueWGwjFmh3TQqppT",
  "key16": "YvxSRzN1fYFjuijdc3iLPJEhMGRXRSHZV6g1Gh46WZZXLbVJBsxJEwr13TMy7xwtUE1Vi5cWeGQWwQ6a7TysGHV",
  "key17": "3TfXS4em9xvH3YNBqkEzvavMkKssZxsjHwknat3PRBz47575MquB6sLy9YrHQMkpyaLwV9ag3yn5EcWqkBDYU2Lg",
  "key18": "4u54Gj7WQez597H3xzB1XQ7k4pPKqKARH97gvesnL68Rx51pc5EfVeHxM9vncu2KqMVaBu1skfqphPUBjaHvvFAw",
  "key19": "5zR4uvALepYGpwSqRcKNScpFsC1VzdVv4RrsTTDiPrHYWhETZfUdkEqkgtsjJQq8dYQm9cy9h6o6q6xjczPvAh1Y",
  "key20": "4BFXvgg8ots81tpjeG8d9eUKBrwPBCJapeThZEs6UxYEnWtbeQH7FRewqNQfwZbgF1F8ycSgkLFxq2V1XwYqKNcM",
  "key21": "2wqUM92sandXNPxPArzLqB7XXQfzjhzdjoWSSLwG3WFSSuwvZW3LrBHyCPBVLhB1y4pwzGXj36qTm9xhxrogJfAb",
  "key22": "2g3ujMUSVRcGEFsxfM6pmzXYi3sdiZS3sRuM87P7A7RRBFnVUcFx17N9oVDcheTX5o2vsipkPqM3V4FhDN1CgtyU",
  "key23": "2yRBAceEbiT9fqnnh1EnyjHznEKidtQu9dqPX7w6hJFpiVqspDoP1rifD23TL21QdbWsa7Ugr1t8qw4GAQgmjsoM",
  "key24": "4syhfB8NBXk8hgPXRvbtxo2VM4XBtPPHR73Dc96ekWbK36AszCps9k7usUQ8BprkBpzZcCqfdZey79B4qW8zHE4U",
  "key25": "2ZeG826mEfkXMBkHMLQQNRrAzw3iFYLVK1suTVqWPovSn2sbBhGmyseAVc7TGuqmWBHKx4J9Q7pGMm1MggPTunWb",
  "key26": "gqeBrhuCz5cESPtwYbw9XMxsDfNJavHJJ9cHj8WH1DTP284pYscz8Rkw6p1haPUN2MS3DiefUApjeFcxqsmv6AM",
  "key27": "651Za9nBB2eTbr46T6edLbczbf3cdKf7Mt45RhEDzvBbrALvBQRLsdxTDZmoP8aZEGbDaihWfvBdTXBgK9UAYxuH",
  "key28": "45MeHG8R5zcmbewPn6HrQNenz82MdoRLGVKnHLfsU636B5Qe426uL5BqnFVtUfW6iA6pKY9hKr9T3N9tujZnVGJk",
  "key29": "2YGs4DiZPUMDgnb8W7KmjALdDhLVAGHJghjCfKWNBVAYsQ1Q89js7wbdFGTNEiu5rYAXEaniZUSTb7KmA4hFs2z9"
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
