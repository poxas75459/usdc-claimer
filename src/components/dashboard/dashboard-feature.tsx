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
    "5XHrTRiyi2c1ASZzSMoqW5cSZcJNZZHkKXZDbD4hyfhyffb6ABonvfEzPyz13T6YHrVYZdDteJLJDgBkX2dU2ESB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JTYXH8zcSfCu4hUZsrUD3VGAZwVPskgGcdoyCSHJgT7Lb7tDACsw7hH1A9ac7jPjKX4P16nhfk8d8RBFQJ3p5zf",
  "key1": "SHYsRxnRMPdaEe9v1AHBSve6vY5gHVvbxpALJ3KKYyGxRTSqN4rUCN2NqU8K7qCjNeF1K62iwxcMsH1dbu1dhvy",
  "key2": "kRcg9VN3Bf8JzdFcbZtjZ5brMpJZkNZZDhHGQghySYniRfuSQLAVNCfXAAGBXNXq3NgCBL8xf95FMSGrShxsUa9",
  "key3": "67CabGEtLCB846tsFsoVUDcZ86YomyeogWgxqFtuFpb272j2DF3GDSyAtZPPx63LuroZorknGvmSMbCPbeZf1g7N",
  "key4": "nmTmUJFahoKkes4a1q5p37AxiMpQsRtqQguiZS3XBuDJSY9drtGAYwXAZUWdTPqJ1GC9h94KevN4nG3uCZXXSBc",
  "key5": "2R6eNA4CUjrmoxNGxAbDj8wpdDPeRbLjPnWAL7UZyR8k4ioEWbbKPLdGYond1pGYZYUucSvUPiVMMYSUkAWSpFqg",
  "key6": "ncdqN8SX1EEg2h6H4qsCTFj4vYSi77FKX3rqN7q8FcSXnUk8G6TuWtaNd1T8apxMsNz7TK7iDoqgmqv8RJFLufc",
  "key7": "5pRQyihEcikRjmTAVbuq2eS9f66LL4gLb3QCiYtTnW32evzp8qz1zquoyx8M89EkNKXDTixHwcs7ztFgTmJkaUNE",
  "key8": "2Zkk4XZ3cRd6Tqv3B3VLuhPyfuC24vwXpGYQzzYPnmUhUjVdPfVpfZTERANhR2kr49n2opY9PtJNov2KVjdcLapt",
  "key9": "41UU6qxb6F5LR683nhnhtxCC4qvhSuk8622efTr4kpbyrsCrJ57ajMkVadMFkqYYWk5RvoRfBAWC4T1GHt1cZHzG",
  "key10": "3udMGRGGx2diXKRkCVMCCh9pgCVi5zW7yywzgeSwvHoRCVyWAJwmLcsvbpKN5nbhA39aWhxfKvzfBgyKCwKE42Ct",
  "key11": "4xMariemP8KesycFiUu5AYtNGKDbZFTDTg6FhkdtK8XVpJBRWeozceXnzuQmbuyKzoF9EFvDhdpdobWzMW6k7SHZ",
  "key12": "k1dxMRB5WPUxSfofhBhrb1ZyyjrMU9hcwo5xj2JgGRKgjBpYMez2z9aUaXwMyf4D6KjPVvg2wGrMAJrQaAXoXpc",
  "key13": "3hpRcn7R6KLSTqFpFbpBv1v7smJ9YLBdwPqAaSFKEibCHZmvp3a7t3BQAAzNsBN5VZEd6FsbwktPws9rU72Pyt2X",
  "key14": "2zS4Q6uArxcXkmsYQkoT5sXbffGXKqVbVaFkYSxGUKKkvF811ACbEV1xGuM41agjYc3ZWTtrXijxTtLvCfbTYwsR",
  "key15": "4sAUU5qshAyfHDKWtwVnQRP6eGD9QnEaFuNhjfk97Y8JYPBN5B4BtNdp6qzYsD3wWhWYC9rXjcaX6HGpSDMo417N",
  "key16": "5r4tymmmSsuvmMyzq2hzdaS3W9Xid9SvkNLX6yYaJEQ7awy5N73PrybkRSBBgTjHD1CZK7CRrYoRQxeTF9kL8KiS",
  "key17": "aqRVrxPY3fywokhHWXiJX6CW764TqW5yiCfox2wfCdW1kakEWFWGyB8vsXM1kHCi1gCLbReWqoNCxt6CbFGtC2E",
  "key18": "3pcY2Y1ytH4rMRtyP7kR9bh9bq2kJ4tDzhEYxg1zj8rtYSuwidEQvr2Dfpq1pNgWpbJMG9ohLUDWWdfyE7iu7aEC",
  "key19": "fFQP72QTn33cpZnzxgq2Ps9k3hA3fUY5WmF1RhiReXWWkZKNGrpQaAzpDh2N56VyXjbxwYxwHeYNH4hvQ53aJ8H",
  "key20": "3jhDBbK9HVjS2MV95n1ctuz6bWAdwp5AiDK9XmCPNGUpA4S6wMZdjaViTkaMzQSnJJCLPoArWBiS58TJGNJ3DUfz",
  "key21": "2boMtRpGHXbdrwVXS7A2nwQ6ze6dTMzHb1ghNpNfdLqiiJyv3hPyMqxMNzqe5cRKCJmVtWgt5vpyCoJzbzu3Cwxe",
  "key22": "4HuHX7t2D2X5wBUTw9armudvrbBMJUisPDCdLKMR9bDW4csvRs1n68s7TPjmyi9bB25QkWubF8FAFoKKxuqkdeQU",
  "key23": "4RMvhCebG5RgXwPARcwcv3xLNghwQV9piQ7jQk7bCMHq2ek1HrXAJChQn5zAfcUUJpFHSq5jFmAwhdpV2ad4MYkc",
  "key24": "2rmLyyXVcqPkg3tSDZEUazJUZcG55pXCpTeZWGfEfGgXLJmdeVQbx2g7c96GiH8DrBqhgmrY8jSrP1G2isv28TK6"
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
