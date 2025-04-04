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
    "MrJTAujSc76UFGp7FPbC6DkXSsnvzGykbDLVKqakg6viim5ny7UvxXaARUXgiCxQZWxqfmGVzDv8sq5Rz5FEfbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r19ssqhUUmJsMj1H5VBY51hJpNDYKSsd8eBkk5zjVis4YRud4uz2sTjGL297EjsLAsybayTEELWB7z7n3wBieaW",
  "key1": "2Me8y4ZHG5GVX1Ls955g9QSBFHB3gBmhV4kf1tgVSDBZwTVFj1fmwGpFiqBQktaTukjvmQFgTg9dJrox2ueNJjG3",
  "key2": "3XcNfYoZFPM4b9sbhbyUYZkUBG83gvVcWLVgxFqbbk7ePh9o5yTdeuA6HwboTo1iLLxFq9ubJR2GiwHzvQhiazXf",
  "key3": "2nL1dtwe4FmwqBdCsjWP2yyqZm4eDPK7XaNRih6cXxaSwSa4LNQBZPPk2VTb1g1XYjis3qsgAH57CZmo9QTANJzy",
  "key4": "3pmuXFkSG9rWNxa47gPvUcSG7jcDVawBPyNBekdQLQgUgJoUADUfEBu7iugzJyXQDb2payJMAu8mHQbDTWS7aAQs",
  "key5": "2F2fdmhiK2StT4f3umTDq2TShV66BFhXsaDBerWY94kXTCV5zXfp3Yvw2qrZj2Jyr2itMDmtoEZLMQb6yStxVKUH",
  "key6": "4FSfF6bJN9omcAvLDxfRNCNe7fwsu8V4sWewB4JiJzs8CYWkXvg7MAR4E8fX2ofV5PYKbULZLUoBiyQaZBQdBXeT",
  "key7": "5MF4b5DNPgW6GBFoZYY6TEyN4trWWr1rWx5UNKgHbeX4PGuSJCSeYgb8c6C4wqxiDFdRn6EvR7wb3TfNA4aLN1un",
  "key8": "vmUZDgdw5dEYdP2P8G2mXLoYPnKCLPGcgertkB1Nc25CpojNZTWuNTJBAL6i7TkS6SahzMWP8xqfvb1inW2XnTc",
  "key9": "4qBt85xRj2vYTTLGjiFGqjjiB85gdJJtoZQ5VzeGBLeoEdPsH7zX8Eckgdou1diAYCuxMJA9faGKEHnrt3izP4Mz",
  "key10": "2WVmvoaFn5JzB3s6JaQPaXA5Sb4d5rBpNArrXe51y3b8pnpCqcsEQpPFwf6sfdyzXurBojYqvQiZqvstBAU2H7AG",
  "key11": "54ab1GuhSpDojWsojJEHTdstkTSAJKUXFhU1TQvBc893bZQcSqaTGTSF7VDTQCRWj75EmfQnWexv1JJuWrmBZKrm",
  "key12": "3CwsTcmEANZoJS4biUXYSEU4SKgWRPPEvA4ndQguZTHeETMztZjB6vmyfBYVDaaZJ6ECdvCvr27oq7NuhXxiJKgd",
  "key13": "2TGTmyPrV6XJHgkqKQRx3z8AaTvDoQCaymSCePub6DM6J6XWQiG61713rQx7MbPxfEvc85awXSjUdyXKiVWjUhbM",
  "key14": "4Bv1aggx6EPgov5fw9xKPAANJrr6u69NVuu6Nqjf3VagtVe2maD4QfM966PNpnAeoYTxwaRJp6J4j2sdrT4kbXoq",
  "key15": "3U2w6taMh5X9XGd9ApYgMBaLumWMESnmLGVeD1pQYqk1C1aEn6Nse54mcCyANRTB4imuTua1g3VykjGyaUy9crxo",
  "key16": "5FXuRvk1ZjAiRcMfvGnwegqTKW1cLhs87CbK6yDhmcZm145s21cWXZdDd6syRsS3hA2JGWM3nK5oQ6T7NDH5qh37",
  "key17": "5upZxHfdZ2b4ptHVtS7HqK4mcdvXuV314fDBSQvUf2iWgGhhgRxVt3Fe5T3cmgaBjVfGqeo24RCjJmXa2H69YUxq",
  "key18": "4858pG36yJmYa8JTphC8h5MijdeEmz9SCKJPfTELT7vvi5r24UoUDxxrTUC82FuPHMqqsWs8zD4gcqPskDCXWXeX",
  "key19": "4kJbQdGjTxz3mc9K8tk5UVf7pPG98Yz8rrH2S5T7tz1u3DuYwv6RQSkGqmTmTXw8qiW7T2Ysjk4xYPcLuYP2pV8D",
  "key20": "2xVPKEwg36RbEN5SN8ri6bsdqRLL1EFeGS5WDNujM4nm97MvnA25tLsTFd2W3txpEAp344aBicniibnwyJtQqksg",
  "key21": "4EZ2UVh9YZypfRfbiBvxZeW3kgaXgt8QZFQsVomLvbb5GdPvVdDvDFEaY6uqFotwfAepF4qGAmr3NQveqCSoCUU1",
  "key22": "eTPTnKcrXzrCfno9p6rcrcqAdLWvmKDrBDEGaG3tUwUC5MkU77mjmvHoK59e7N2nnYy3BrFySbgW3FDcQGmV3z1",
  "key23": "4fHRyzBab94EGfmF4Cp34aLDAaiqhoXCEfCiV9LzBvhfbH8Zjk893oJxpKsTN4uof6qayPW6tvCsVcZ1fhJU8XHi",
  "key24": "2SUXZrQshZ5CMm2hJn1Dh3Ei3oSVgZTEy7yQtdHXEyoDE4vd1MXsES5Shfp6hybFdbUzQ1p6RKAosNy3G5JS7nfT",
  "key25": "2evsriur4oWC2zEYJVDGs4QhmhY5RUwyhvPEZeB5MhPR1vdb8yxX5cC2HQEAirXLZ8B69FMSsGvwNpJmRTd2WDDL",
  "key26": "2JvQARx3BowDLNXSJnhgCaFveyHegLExDxDkP7maEq9CJBMvYuQT13RPCNp3J9FKq76e7u92C3RZvN6vWZfkUPCy",
  "key27": "2Ld1R67WnNAnUphYNUdyyCa8JApf3oudZWv1VAQnMXtQmBysKDaRLXNF4eLqiJBBavuQgCXQ9nWyioJ8p29ecqA6",
  "key28": "3GWsmffvnu3rKDMh3qpMYGsBEJ9CXKEWKmt2KNjKxUhyJ2Z3vjnn9nUkjkceKQFpzp6Cz9PMZaKU8jw6uTLRXSMH",
  "key29": "4CJUkMWJEbNCQCVqzEgx3Rbki9nCVu236EBeeGwacLeNmYvVm74wb5TxXw2cyLzXJ3PM5UAP8CzkU8bgMrAKkJ1P",
  "key30": "5maiJUmahHiur1dJmTuBBPPR4C6DfkGNYncbjVXGgRuJNVqzaJKwi9zpLcuZZPB2PMZtTZYU7tQcaiA8kZtk85VS",
  "key31": "4jhLyqJGZXVncQKbZsMAz5i6K3GRqeZAQzn1GE8tcWbiFAb2tWxvfwLJFSZ5sCzsx2QwtMr45ZSjwnmyVBdRF4wM",
  "key32": "h73ptgQsSqLWxRmPhvtoZt7NwpjvQMHxqzCRcPAczsasv3Xd9uKF5ikGyoGSWQsMGQ1Ksmj81Z933MFyTTJo3v5",
  "key33": "4fLSqiQR85DDw8fmyKHhxMG4uAYa3ea7LrHeTWpYSSwNcMaXDrJ8zJ7FhtApQaeFPLpogd3EGadMGPYeLwaqW6eK",
  "key34": "4NgNFdhbk4nS9Nu9QwaiFmmq7K4qazAsrHeWKLfYagmNa9X7yu3W6qhmYozi3dv5hmo2vMrtL4rajNn5rrrmL1Ye",
  "key35": "44PLf1cmj8eJvjXafPijLCNo9ZZ9eqnjBBSLQ2QsuRtp2a4e3Rjy1n57BroA524WCvFQBEQD5joTDhqso1Tp9wnp"
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
