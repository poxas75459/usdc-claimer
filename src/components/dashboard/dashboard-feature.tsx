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
    "4icEexizDioPKSdeLa9oznP1ypHySigHgGyayNSu1pCAaasCeG7LVWDaJZdydZVUgE2w76g1tXgTSRio5VT5axPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WhrqByqQVxDJTqeVo5Gb5f6CXBCH6DLUBVpGsuf4hMMdqPMtdhDrbMZeCRG8zybQ5QiKzYrnn8jb8fEXNEiFvoV",
  "key1": "2Njryxd3KcwBUPUyeVgwKnWKzgLJii9RGX7M8gjwRYr1wVfByqXR9jy23biTKMR2yxyXGZvNq81T9o3muFfwwaeq",
  "key2": "4q3DXHTqvZBfWZNaL9Enfpr3efXyVvL4naVDE9WhNVqK8hJqVEMADBR36Z5MaDW5o8VUkhnrNYrA2AnJKnHgpprU",
  "key3": "2TvoBwitbjpmzFtDGDBRr9rykCCRbCW9Rjx5hQYFM4Vr39NFmujKrNXFHKT6A7JDmQC3gqDb3FwNrLDQyzBEyuHH",
  "key4": "3XFmiKXYkSas1142pBgqACV3vxKC2KDvfuLScpDHVy5iYzwUi5k6DH5X42SietwvQ3gp3oWFJirBbEc4R9KF74qA",
  "key5": "NE8LbDdQnk8oNMq5JMEmY9Va4evPWHDEEWkNoFnN5akGuqznUipbFrzSbdLY9MjiZrKzjVNBEC2dKMtiugHvDag",
  "key6": "3c4YjzZQwG3uivGMcLeR2SermVPev9vnrPsjtgqNZqaXWSfkt4p3FwgRxgzZdyZuDtcqfeWvqWhxGLNFARs7n4j7",
  "key7": "4KHyBQ71bEh1ESyRopvoDbNxaaNW82Y5Mv8RU5PyUW5bDmqfu6oGeJown399Kpx9xkuM8nh5kgXxAW45tFWZ1Jy6",
  "key8": "WTWTJ1DtGVrLe6EPJGRENhVXJeBxUjh7QYaqd7pe7sHLcL2WFyWYDZLLeYJ4L6xL62fNbaZwq9SMU7jEzS2xdTn",
  "key9": "2pEpPm4EbTecatG9UMuiC9K5hHDs7viJnqdNk7Bx2kqZtmKtV7UsfR3MF1Es1nJfTKadBQNa4UNo3S5dGoDwX9Pj",
  "key10": "4CPSuAXTHKrJbCfhJkxBkrsM3U5eqkUfgczCN3zXmoYvGyBFWUzGTediQPcoxx8HAYWvbSQeF3yx5erpxeW9qwPQ",
  "key11": "5GFQHSjGfV3X2GayQvLtUCF1CPJ1EYgFKQSFgUx3z5JaGQMsVi15BEhFBoeHzJW5uMqTRCZG284Uxo9AHxuRA1GZ",
  "key12": "VASS1W8SPCBQaMmNFZ9zqvamRbo9LWcucztThz4EaShHurQHHAjhjH55TyYXthei64K3F56gXSsTp2FAnR7M8JZ",
  "key13": "3YE7JhMvc34CJJqDdqTLs3v3dyLDSSBMiaW64CcoL8BUWhihvmBNrdjapgy5WZbPQhT5fYF8wEzh2feaKiM3yFMY",
  "key14": "KttUH46vZ7KKE9DRkyeSkXLnfAXT6WMpoMFxdRgfd6jYcwqsaMbtwLRgxanhrRTx7eQUqdnAQ5p9hyubunUexun",
  "key15": "5X1oZd6qPtPXtfidxaLehfHydikr7N2FQyFCkVRU6q4oQKmxdPoikUkoRimuCKGovwQk42BSTCMzzveNSExc6cbP",
  "key16": "BMXN2fRSndVKmBPd9pWGvuVamgKRhnKQ6atdgo3bpyaYmwFQDPgph3f9riidRK2eHKzkYTiYQ25m5LktL7hzWMT",
  "key17": "zaPEAQ2WWphiVKVrs4keXMaiYQymuz825cmQbdebz5oHBDzpB8E35k76AWScE92FbjdXCEgMuh3YycigRoyP65v",
  "key18": "2aTEjsQY8qyCwj5ahkiSku42cLmZzHKqajkZ3Uuj5N3UG9vQcU5uwBgx7yvboYjUfRDkSaYXqPev2hgXzNEKSLdZ",
  "key19": "67YFUjKqt9g4NTfuPR5ZjcZ1mtC7TwH1iTzetc128MhkXpFsY27PH4Py9Y5CwDCqmTm5e31qkDEZ4mkmavoYW7t1",
  "key20": "2ZHKnPVFDyszopnsWTyY9x175CyJyQEewtxVZzkkXiZHy6TCjfPvmEuHP25G9pyb36tRxHEgzSw2UgofCuzP2dMZ",
  "key21": "3DCmJs6bhdTBgzWrRAHforFVWDc9nhhcL2fu3SGFDCgWqFNRhmqVhxarMSk2qR9qZn8LWNrTVTvrPivGYZ3prwFB",
  "key22": "2DvWyRV6LxQ3cz8ufXJK8aa2EoTKnQ1J6zYcvzSBUBK3udSAGFTJFB2oo6YiJvzy6XuuUJMKKY9BF5EcjpxVYQbw",
  "key23": "3Si3jpLtrBHs3W8u4KtkSTheaEeRvzrBjQPofqypCH1GgP5FRR5WvoJonxnafv9rYBxwPz1wUyPJ6xktmLfx1Vg8",
  "key24": "3wU1uat6xxCBBmAVmXRSe3vufh6W1ToyVSxo6ZfX3cdY8PnFd26y4oShqAX4zvPDpKH6ncG4f6XzmF8LxyYnhxWW"
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
