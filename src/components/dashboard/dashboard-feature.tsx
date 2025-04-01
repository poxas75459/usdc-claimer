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
    "4UNG9cSuJZmC3DG1Afb1x6eofhNWBVtgHhtzFssEJJRdtNjZk1PNMCHZY1fCbXBTh5BUq7RgUJdpvRNhf9fsWx5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TRQGYQWDNH1i9WvuyU1RUrNJQEtnT7TMFed5PGaQ8GwiFCoZYPXUjG2rGHL4eQndnz8np94cAsPcYMD6Q8Ukj7k",
  "key1": "4geiHoYtxoziG1ZQGRVKNc2bjb6crAP4igpuNgKb82bdeEdE6PRAVfNH6dD44BQyqHj8DWCWMDEKM2RdPLrhcJgy",
  "key2": "LeQoXwFw8usj7TEf7xtomedw1TnEsAYjnRzghQPS69SSS7H2nL8idM8zxAR6Q9TWR8QRQewYUp4nkGb5zSL41zE",
  "key3": "4ZrpMdgaSSzSmeVd5hBJ8JiRfc6Hj1J1UnAvwwMtUfmomq1vBsxjoegG93X4c5vRnUjywkKrzMxTqM7P2upubnZ2",
  "key4": "GBc3ATJMqciDSbsxSamBQ9hxDitr2Zj7xNFD4gKxEV22Z21bFHs6t5S3GCgyCzSWrpm9kGzK3SZBUHwsP27JFqj",
  "key5": "4F6NLXiaTMp6fRh1fn4DMZbPvt6hVW3wcznjCroD1hnFBMmuuuDpa9z5SzdcdFMw1jjsbyTtztF4f4efRSWSBgHD",
  "key6": "5jpjvp9sLRut4o5276RLEg5VikZdE3ethXCacJMmVw7h9t2AFLP9q2hADfvN1qwXrFsUhu1WirNbq7CpUM1uVPqF",
  "key7": "6y4fjfKqDBh1HN4ezM2tZGQgnpEwFrmhcj6mfAtKGRH4WgHF87SJafxhWBhc3KrHGCEWUMdTARuqZEzg1gSwB9N",
  "key8": "2m1hBxi7yxetpvjJzLdvRA5aQGqkUe3xgWMAYkyVEDacL8eaF62PmEMfbLsXruXxsLJsP7iQYCQUNcFudGVe7q5z",
  "key9": "3FEYQLzXTjqWeztQtQ3DSxv3U4MFWnWq3k6U2MRDLprSAfXGiRYtBRjq6qgoY6crKkM1y3g2efocM2v2eKu6Z1Z7",
  "key10": "5f3GLDPTT8pgnNfdSrNr8fdXB5JBvQARrFuV5CcvjwTLKKQocGP4gcV19PAtPbBvLZNvA9cXpyxz1ykGPpxYrLi3",
  "key11": "2EtHzt9xuXh4aX5GTB4B9fFJeuUuBBp89ywt7Mk1pWKT3XtvGs6ze18ajwKFba4VeTL7Jy5RNJQU696kDgqDUJcS",
  "key12": "2BV5ChuBEywsTqHyDN5kVPSSa96ZrnWjqnY3bJmbnuBTz2Zsqk8zRpDDdPspYmDCK6qYiuNPEgss4gejJ4wZmTbc",
  "key13": "5FyCY96xKrUH3HLPenmPSJwrz9dawGjodYTJU16gUtGXAj6CDEQyrmkJLVqRNteJThKV8nnSzzoKmHEnQYPJbBPq",
  "key14": "nF5tvKMTxNgWLPfD7e9taGscnnYjFxVp5BAfbqCUs8MgmvKLAJY3rj2mYLMkF1musAJJByv15mPkeoQYRGF6z25",
  "key15": "5Z3Pzh861t1xLNJpGZ58fKfRjwviwEesRNM2VAqpsktnxEBCMmUH8hrvGHHAyoB7PrTuSkwaamYPMTxG4EVJytQp",
  "key16": "65YGuHy75LVAHg1jiCvZWukuzZmTGU6YsT1kyaF6SpRd1S2eQbsyuAM3adVCphtQffaZbAy2aYxNkCJ9Mep7GYTx",
  "key17": "F7uB42fZ8eZRrNEkS1ef66XiiWyrSiJo5zB6csn897oKWShGrGEJcH5C89xkSfeH3jzvkZ49ZpsLg6qeLbYKQv8",
  "key18": "ETbdPif2iMzyZHhwJnvkFw5p3jmMXJnoP6u3kX2QQ9f8r7o1dMVn5RhGKJLJzvQ2Q97ZdEUjUBcgPBFQSnHZtP7",
  "key19": "43xnfCvXxUVdgLU5KQACXEidgv6ydhsJbPUPptfVae5fP28FYzj29fHkd6Mt8LrCbkhVRautJzH1id8uTPo9wF4J",
  "key20": "2eBUjV1ms452oAWxdboVp9LCSN3ctsMs2LPxiLVbeq9zuAAvAkdHiUcDuPVPzMr5gs9qETJfy4tXaXMqPncfvGSH",
  "key21": "Wzm354pJUxQFwn7dZLuyHu8PNsGm2nj74ty62TxVnJtn4q1pBe9eANwugF2vqxfAmwSAcWeAVormHorY3zgFuW1",
  "key22": "45LtvpUJyL5winK6yyRv9vajgwKEJoPYnnmnboEUVPp1vjG9QNdBLjCNpXXCPVbVVixDpGgN7HbaHNJWrzWYmJqp",
  "key23": "5vkdCJbPmt4e7AqtMc6wRQwF8iCQrXPwgs8fJSpcjh7cZHHji7d5o442myFhNp6PPBjZYGd7bQhaeGRi8c4LZH83",
  "key24": "3hSnvdkdx6JWhEuDXAqUJmaZnGsyKVzVqwPBFeR3zi4y4j29p4uVfYaXucFRZUtf2d5MBhtaY9RDySbGjuw2rY4E",
  "key25": "2FUeuae1zwYxaycu19eNChLQ4g6dsYXzqqRr33msSNsTEibh1kchRAqXtMnXFKr11YDbwD424qo39zWA6bD4XKno",
  "key26": "3Ywc2fm2p9wTWipkppsVMxFqnbhVHMfjbqh8jMUDmnHDGW2Zf8cT8WDCnwr1m2ZiPn7KdEd8U9zG7KHbVVWc47r5"
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
