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
    "4GBeuMb9aFew6pL45kqefsFkijKSmHXqP3cRwrbRcDHemxcTUNAmGEiRJa9mLBqmZPb7QqyYzy6ofYb9taKQrKY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Sw7EWRXrE4T2zwqvXs3kQ1R4JjePQHmhqzH71E6stGrvMmQ6gKgYFdUyXPoEzxcDxarJyBa4TGUNtUQAZkgWbS",
  "key1": "5dEYUgHRaRsfPFW3BGpp1GRCrSDiamaf5Xv5HVgm1LJq9d5K3qLPTNpo2MDF88ZTZRC4jPDw9xTYU2LYLPYk5uZA",
  "key2": "3qJnyGJGLRAduGes4kUbbSB3uJghQuFfuZ6DdDzcExk4xmEjQ7J6VqJjLguWcxZnLz2CvBPtwm8mdngSaX2w2fGV",
  "key3": "62ghaE5zzDzjenZuynj23dj39ikWzD3xb15kBhTPHCy2m9zvPCriTNxCvWrHEYVSAJ6E8743XEXyZPonT2s9SUQq",
  "key4": "562Dtsr1W5VtkpD98rGBF2hRkC7Qbcfsty56m8HaidPFBLzi8dFuWcSgmTWr6GkFuJHKQReXCMutWFbvMYMNaiuC",
  "key5": "2rHAFkhBj2C66M6segXLfSgZBgLt6SPSFZp24d8sQyGjKx7Ug78ELu3KmFJQ1J2JizmT24qeVH9EeX55Tr1EJPsH",
  "key6": "3kshuWp1iidtKkhfY59PQeBNbkdhYvnm2o5Etdkcp5ZLwqJKa1zsuguAy1Tsk4nJPMacXPsiXzUibLN23p9TfTCV",
  "key7": "4a2Bni33PekhSWKW53hqWDaMnfaRRF6m24eiJgi3Nd6cQBALpCK9SYQdr6gsSLVouAJwsWuDnb4LYb2PbpAacG5v",
  "key8": "sGUGhEeYB2bXFmZFSXFR6nKwv6QA2babTvt5GDrAjH26d5m3TQ7CYXt1KZTk39MUY4fRyjXZdusUUDf5s9xwP3C",
  "key9": "383sXguHd65JZBnyPKCbhbJvxjyBDHN2BDPEPhvQ1fSFYiXm3y5dMuD29q5j4ajsnXKYzDcWHz6WCn62PpYx982S",
  "key10": "5hHunggSkWx8SAeBXRZN16SzEHeo5dQmwubrEKsEnxYX9xUFGNytBDBTDiSLAfupwXzgDQycc6qttRmnTdwvLuFN",
  "key11": "MjmvPs3oC2xP6GQi3RFmhggqDnDc2DxHFcTZTjSQFCt43eowyqsqtKimtqkbZmJqwBmwteiHqgEyoc91rYggL2x",
  "key12": "6425CitUs1bNvxMrkYc1dHiCYpXDXN6BNtfS6K2vvzd2uQsGFnpv6joxQXrxSeTRcWwuYKscV6EfU7LrUPnYEJ8R",
  "key13": "4ytu6qMHbp6DPnr9f3x3MdLxNDZcgdvCrBMZs66Ac5rvSbSmCt19Ajs3YP2hJFXASmXgfLLzcy9e4tEa6LewEBqq",
  "key14": "37rrUt34ky6JW93qUzKwPUgrW1K3o7nHmhALqEA5rnUtFt6V4wvf9CCMWqKv6SZPeCgeDheee3RUBSUjXEGXmabs",
  "key15": "2gRCC3aHVDh7mtGhm3RKhMTFgU8ayJun8h3oJx1VUbp8smgSBbko1XhwaBUBtnhpYsgqhD68K7xS4qwFMrHcqZx4",
  "key16": "51st2xovQwBu4H3QVkrufCW6brwZ3afs3JnvGHbs86fLj6RE1VTbEqqPCcUeUEPddmpzxpZ21v7KHAZpkHjqGnRN",
  "key17": "3eiJ9z5bCFTCC1U8zyPgPrGmpVSD6fxMRX1Y4GYcvFHXApdhnd2mG9cUmPLbmkcTn7fqbSgWY4EEuUi4sgDpLECJ",
  "key18": "59ARPTyJDHXtzzV9cxfRadBbafMKm9EHMDode6sQYarhgyg1ZxXCnRXjVYqdhqaZVXoaJPyXGCgBTBh3QWYoc4kH",
  "key19": "2KPdRTyMhBHRcTucfJg8QudSzQtCRgDiM5mKYFteTorZnXHpphtEytkTbFHEzR3t7GWqLWenxBcQtg5M5vaZyFFt",
  "key20": "wGJXL4w9La3iZ1ysVELwt6ySQDygcVp2eszVG6NhBoi3tHGngWtyrtmAmQqwLDxqPvT2o68hKdCeE7PemQXs8r4",
  "key21": "4TozWS4Ci21CJcNHp9Gvdq2RNSerSFmv8ipaFJuK4464DWXFzzsT6Zb41Ea44LbNQ5dQjjvydZ4sRSNxXvuBSd9k",
  "key22": "5ezAMVXJ1Q47WmNE3D9EhBJTXLRAAcZGWPncNEZLCZAmkbi4uh7GkU3D9eyaeWBp5K3431MVvmTH3gmLyWpBYuv1",
  "key23": "4Ez6Hf45hQEWJRApC35w6Fp9zd6VARiv4AoLKA9tiRH3f5bEpW7hwBeZ7vgrhcTbFnDwzGfdwrHQSkpCLeNxnsJK",
  "key24": "3mcwY7C5H9aQjBx8exhB6FYF74qwTx8ZQC2T8CUGPyUESZcQeL2gpfqWb9vB1rPD8bYyGFc93wHkSkqFzmxikF2Y",
  "key25": "5R75MLjy3Y55bJae8AJZHbKWAxBKjQBsJRyjk9zhn43qobd6nNpVnVzzrFmP1V5dqUHb7W5p6HCL4DGrYqcUk6yK",
  "key26": "5vjuGnM3V92negdYY4YCUC8DYhuE2W6mqJseojsj1GEJwVQpmXLYQkKQBhxpBKsEmrJYT6ksRpFy3vgmvJ7LiJW3",
  "key27": "3d7G4RxqSRWQMeW9ZYEDayYd4fc2RMmqnzjhhVD7VrwfjPocomeVEu87otu8TFCyiUMaDsjhDoRBqByvMsRP6JMA",
  "key28": "6Zh7gqGc9rwVRAsCfsPbr5YmQnPTzrKaMea5S5NzUSs3zjicHM2DkAkvB3FKYVv1McvwXnF97KFxeUdc9LsFJcz",
  "key29": "5ytNu4CyzQM77WBDDWwA5hA1yRFif8i9k35Vw7EvBHGWRXvb62pcosxU5c4JJu27m6Umc9mPJ6PHwq4YoHGHviuz",
  "key30": "5rxpLE68qYeMmPuKKkPWHxjyqi71jM5ZGNZupPtnkG7NQGBuZK5Gwn3vfe7rZxXSv64rB8LrzM12CbCE35FSsaSX",
  "key31": "3dMaaUgvEKYyVhd47aRVXiFCERyyjhMLbcqHpCurv6zSEw572zBtzN6D85y4zwem2K8dNUyTSDFjaPMNr16jtxDc",
  "key32": "d5yX8kgWwogXy4TVFtGm3vsbDbTcWzzbViuoCCUqpprFENq8LnFcpaSKWH8DA8ZYxNrDYrujW9uw8xpLvrcrMb1",
  "key33": "2oLTcFSYEoGEBrUshkJA94zADg2jc3y599KJpuALNAZCUkFKLsBzvQrUeSBdmict1MEo7ggXJf6NfKztFTXmzb79",
  "key34": "5aXKHACyMEaDJDDN4euVqXDScqcHv4UK7KB9fVbTh45nhYyJHTkYnRzNKQqeaoHzbfnPe2axAfPzNLXBbAr1oqa9"
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
