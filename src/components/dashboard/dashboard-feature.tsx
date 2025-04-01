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
    "2UfDPYuQGuLnZhjS5BG5svYdR4zkscALAPgw51yfcZUjSyvEYNMX3iY73GjLniCNjMGKVKHCFkGkLbB15efwdHCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aVW9cRgZa85XiR5NFEosvzfoqFg4bx9c6cu5kenDVm98uXjGRUeXC8KjPp8s3jR7ir5iVGz5bJei9G84auznuNP",
  "key1": "5bZLCXE5VSzgZDAnFn2rjwrSRfsB48mjxASx9chTUe1yJUMzHjWEw2wFetVc3bTJv5foUGASgAqQv33DHj19M8g5",
  "key2": "4dRjVujRLK6gKe6Q3dxQin4hmN5Kt6z8eXhmgNCEQNPReSFxVzUPijdRRFpo3iWAmbhka2tmvky2kdjEyuAkyx9K",
  "key3": "4CNqdLcxoyRJhKFn3xjPnsmuPDXByhzbPSfaRnFGS2pA32kSgtme161RQw71hHFD7ZkfbECkJaoJ4sNMRSxqQBq8",
  "key4": "2ezeURJ826eMuTtGE2z5v6e4nFf2RtaWjYTG5Lr753e1bYB5Zq9rgi5ZDiE7WLvQopvaYBzqoV7p1VdBusxixzCY",
  "key5": "4bmRynBuiiPSADYxkB55gVWa5Xxyx1qVsmhdPDs53ud7j3JUnfARsJiMi4HciyeNhReW6aUJMW19D3c5dNPvSm84",
  "key6": "3KbFWFDADe4CanHoDgLAn4Vzm7G1Rups61HPhrY2kAyFRzgL81LFR8UKbnhQ3y6Se4KJY3XkA1Us8rwVT4tf1jKk",
  "key7": "3vwrz7i8NgnxPyFtGYM8uKaxRfVpXBmGpefRGAExNJ9orBzR4kxHQmgPMkfhQn3F6Z8jiLCFSe5waJitRzveUe3q",
  "key8": "4ZiX6BSZum9KGADodeHJqqBe9VhB2rgcnmkHxPKQutVcQKFXvhsws28BjKHyknMdDidim21WUGBHM14Y5NgwMxLq",
  "key9": "46JFPk63TZfVSFSYRuAagTCtgGiD7wyh2AHr4HRPtMaSaxkDwTFksru4Qizkhh4x2aFgkNni4NrV6hWBW1DhaAgi",
  "key10": "AZFZGotDwTd62ABk4kr59KGN7u3pCk5N9mxtvnz2d8zkrb6G3LFk4jj6kVYTveK2QSoQrR9ggyAMvfi6iKTE5S7",
  "key11": "4AgmHrMg6KqEpDPHsBGKakhnfMLaSBhgWj3yUnTBSbkSGcd3TsAwHxDJBoDuc3zGUGWXzmCQzChkd2mAUpJ9y8UU",
  "key12": "2q3CUKGDsZX8a6aCTuPuUKbR4Ab6y9cq9Q4XBRi1ro2txqq15M2Wte788QCzGskD1QcDhjBXDb6K5mETCqCSr1iJ",
  "key13": "35F2hqYLKqPGhoZWhvkH2KJaSVsgvEdCXNTn5RLfWrdXYwHYERtUtFzzDvWZPyT6TrAUjyUjHfuVR7Tj6Z6s7tau",
  "key14": "2f1vutHW48kppuZSa7KPY9t8p5LuSTy3DoiBvHp3xSC6acoHQmH7nwQ3ReGiXDUZS2duuYwCRMWXmqDUMwXZtwgH",
  "key15": "61GXYSr22UwX9o5FHQhuteJy7ofAv1i11r5fresXX3KyUDReJVhsPShyE7NPsXJNV26P8haxhBHA8gaizFQxQ45P",
  "key16": "4CpjseTFcBteUqQRPYKxdtDcFFAjZxVtqrrknRRAnUh3eSNhw3X45MxrLYwGK19j5E4WQAKmYMv7AGNXpkWqgraY",
  "key17": "B6WW2Ua364MZAsNUCVsuBVcmoit5SDak7w8AHZCuNaUuvg1PYmiJdDffm9TG8TUUi7KhLkb43zx1AAkow6PAZq6",
  "key18": "4H1PqFmwnzLRJrXAERbCZjKfvQAvcBGeHxFRH9N7WLoVXhFEqn41ARz6SkhAQDZWWBktFTR4E5HpbZZB7ekyKAsR",
  "key19": "GxeeoeJCnuCQpaR6DGrtYeQbT81XBnci4n9YE2YLQDTkNYkozFc4n3kczjb8d1hRPb3ofmqS2peVAdWH2GXZqoo",
  "key20": "4LRna4SFJH1ssdvtLxQG2AEjxNzUGuZv3VM4s2oGuAGN6JpfrKPWdQVwTLyFja8dkR7pAoepEwnJwQ8RhvfkfNRo",
  "key21": "581DTFq4hVtiCm6DDXMyHXxcp7KsmW1p17BYCPZXm1gBCncDeCVZNrGAi6ve2rX9VzHz6a2syh5TAXPATTriXHfF",
  "key22": "46pbPTYujiypYLL1zhxamRDtDniof6ZgZ5vSyVDfqkFd516iX1oe3ieYuTU1m7zPWUytnh72vPNT4wXGJEGgp47T",
  "key23": "62nuM56UHA2Ls2PnWT7JytQLEuc22MuZhLxEpNmZ1zue91Mkon1JEDxhKFXWBZsDbzyTiwcXPFo7T72mfAcau91X",
  "key24": "3TJfAHPo4ZdCQP6XJWU3FtsjUjLjmoRxryk3rNwR3DutwoQss1kWEfd8pHfsZpAKHN9Se5W63rS4FNBdtFNh2dqp",
  "key25": "sG5JvJbgKGTWt3CE5kWHKdYeHkGi9spPn31LkMcFH4NFzSXzVKHk1vRbiwDUThUSokGpMfCHkKiVfngpGK1yrnw",
  "key26": "2MunhEvUGz3UoQPwQrYdoZPknyxPGS3JbQVMmcbmN8MRWU87skWt7iC5RvrWxsLTpP193C4VDF2LFYpvR2xYXhx7",
  "key27": "6ceArmcTSqKgxMtycHxuDZCU7zks4mXgMLKkoy3yifxe8icqqGZua56bx2dry73Kt97J1LzawrCAgGkcyoWnQ9A",
  "key28": "5dM4wJbjJUZiEyuHAXA4xXtvn87FAbHuuWdqu6snttTnkM46ks3Dh3VNSkPFJ5KuWhwkwSMhNDFbpipgCVH9CoMx",
  "key29": "55o5xV3CDMT7uKtYyVQd8EfMkyrfytejXiAcQFFUa7kZmSLXyxB4hWKx7CpEPz3xuWmJmW4JZLGrHw4YmFscCc89",
  "key30": "5d8YVGiGo4KNt5hJ4Wrg7DdZPqnmysPLyD7sCaTmAYZBGVEDLQBTHZpUuZfXbdSMH8bRF4amNem2qtbA2VzS4pTw",
  "key31": "4L4KDryfBBLNapAFrPXxhfUCq5zPyZsrbGDBsqTK1BX8pk87VQa3eKEtkYc119VmKKFrUeMFXqpNthSVQ4hQBPFM",
  "key32": "35oKZbGRvuF7cKNnmHr3YeTMDA2N26TwUV3caMAXcBb7W2nRdeaGDomnPxsPh7WYicirjJNhHUmu9fyKEUA5dpn1",
  "key33": "5aqgPGQTjAYqzDjRLo7o1HDWWxcKhWqgxTpeB3KF851GVGUS47cngsEPPuwKwf6qMTQun297ScTquQpZAS7uV53Y",
  "key34": "4ristG3Qrfw7hSL59xnGuRPEZxC6j6yvcvWN6jXWMymxnBKaUoZnLSCwgeobcGMDDsDZFc7ZTxdrJbTSq4wYmJNU",
  "key35": "2mEBR2676vhTyU8qr23siYSce3W11fFXx8zmufyeJTdYghQyjxYECpcWrcPJnnWJt13hz8dMSuw84338C8KF4P3Q",
  "key36": "4WSw1JWJhk3uWw9nuwgk2JKvqYHze5zsNAZB23ew8ZJAVj1sXCNf7C6rKmipeLEdAjc1euVuCRZsr17EDz98ipWt",
  "key37": "3UibkkGR6E2XBcT3MZa2XT2DDmuc9JUJtQ9QZcRttASQ7bUAEvayXAozA57fSnF4CZgnwJyx2Rw48gdG1oMY9j6W",
  "key38": "55jSGNrWEoM6cXQQ6LYtAH8cBowK8DTWXS3YPttXrc5eXoqJhL2SX8dJWkssP9joRDFnrJXAvZTo7N863Joee6cD",
  "key39": "2VL2QESerULmwVRc3AbkKS1NJdFXGXYYtAdT9WuPdcxYh8AYoc3i9zDdABrkFpgyf7a2KnM9GqcQNB9d7ovujieR",
  "key40": "3tnyjGk22NXM4gqiSRbssFs5fStCXfh6yGcMPTSCJvKYPjFVthwz1LxenQHPPyKGKWsikpJPCtHZDt4WEqAyBYAZ",
  "key41": "5rLnw6CQ97ZKAEoUVupcpHTh4zGawBAxpVWTWpXV5pc62okdizXZREweAuWRriSvqvLDLVJqMN1kDyD4PLpmf5QD",
  "key42": "58k8CxdHBEeLLXg7aqyVBKjYhjpqvzRi1wJf2bMcqU9grSVaxsomCx9Vkuu9vWvz3VTht3yqSKb8X9Eg3briRC6y"
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
