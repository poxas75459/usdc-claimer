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
    "5patgtf2GsowoxajyKeERE5qfnFh4gyoqikiq17Md28yMjXtWMHNhSQuJbzCw2mh2ABq6WjrnsbJthNhLyVF9eyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JpwxMMRPt6rdd3npWsCyapj2HKfDZytG6cuzgdi8ht6xNhau3HM9fFcfWv37qD4ESBe1heeTRcC9ZtNEnJkf4kE",
  "key1": "ehNRP4rrk3m6oKsqVzXz6YrF1BwtE47A1bxPGhGz81SxKTXGnk3kcSpCpQfudrjUMVrVGnx2BnSJxuzVybCS9pB",
  "key2": "5173LY9okLK99JQKpeY6MZztav11rt42QG7nbEwDLJD2pHnGrijYBKH57hBbf2uQ2QGSP6Tkt6u4auhrtrhsZhBk",
  "key3": "4zypHZYV1meTzC4EqW4NCP6kALxTFnuoFvDB5FscYEcxUe4LHRNxoLppc9XEBBoVAsT799cu4s6qeMERh9DHMvom",
  "key4": "mYNkNSpDEAHZcYQQpuRgRkTr1xTi83aeE6jEkpsc9SbRKThG9dXPdAEuWDfuRxLYbaTSFWKzpH6GGHvtdK3diZB",
  "key5": "5QXUANYg8DBccWLhKZXwyYd1cUAqqzonKpJpGUT7BwZYzWqZtEQqULhkFkyf4oLTpWrpgbmNZmxMXceSEamARLTD",
  "key6": "5d2xjKD3BWDZsWHDPwZQTXW4sCXaU2DiTBJPGUmLrbtCnEtLthP3nGoFJP8jPFhuPDVrVfQmHWdMgY9MRvEUW3aM",
  "key7": "4PGHD8EQPCt7kXUz38duZ8cuKJ22ApPpXXFu49rCyqYLGXXK85Dmz98j2Jav44giWub3oqbCQzid3mthNYCkoske",
  "key8": "K1FT6k9DzJNPDo5okki13wcegCMnRq6wARSGrDvHxi7fNn7tPfGjv3vXRMryjMLJ6B6NW38w9aczMRaoVk9CyFB",
  "key9": "2Q18okP4KnhgPq2bWRkYBt1y7dNfpwCz4FGV9cN5hpmZCGwGo75WZ1z3HyFFWZLtaXUMMinaHHVqLDTn8zwbMPbz",
  "key10": "4F47GssspFxbDum9wsTMW9MWKmPWFJ56wywP1vxo9HLVQXNb3LZioUmncS5xaprHn8LzkeAWNH2dwyUQnK1tjrHx",
  "key11": "44ipBMz9bhEfwjtJgLhNhpEEZHKque63HEybaeAwyXeQfqUkUy3myC1A6uCD6X5h6Dk5VXEbsKp8pCPrBhiJWszj",
  "key12": "5R2HNXusNFTD2CkPupu8MGDczzq7GqUuaPCzkPrdgCpZapCryB7KtpqansAatFsujMHXaP1bUchxUj3oGGTce5yg",
  "key13": "5Sivytsv94QBidvQBCNnEiXdpTZKtcK1a4vnV9UmPrczATJoTSDptfhVDuCrwcUiA7EAGAJpwbcCUainZvgxpFKe",
  "key14": "3RLpZ3xv1jSiwG7rmqDrAN86LuefaidyuAM2RFd9TicbmWXmgKu5Lcyhr89FpvYxvMKDd5uWdrL13NMfTitnimpV",
  "key15": "5Bw6XWkQwF1owziGMLf4V6v2qGULpMDKAEywRwhMGsBWtadN87s2SrHtigHa1faozgAEfb1UwbmW2QanHx9yFWyH",
  "key16": "2DAz16paJKHkbobHGx2efLinWc1G6V8fT7rNydt8Uf3BV68m1NxCfxfxE43DzEDW1QUiPJbbZxwcS2eMKNS2UTxZ",
  "key17": "5YztM4jcecZNXGPNqn5ohDdFiXMwa5ycZ44duyDACqxoCF6HJBJQC2xM5ZUJX4hz4QjFezBddq1Xg47jdEDxadeR",
  "key18": "2whPmeN8BzFvL8RZ3DRmFQVhaAif3LucJaqQTN9VCrYFGhHigDGtwNh7CQFE91T7uL6qHayMFtsythgJdgN9dU1r",
  "key19": "5muyj7eYfTRBg1XUPxTb53gMCwX3g9Q7gRYjkyqTNBQHfSjb9GeZXMs8e9mttWjpPHm8jbGfj58MNb4NPZgBwmUJ",
  "key20": "392byvJAhfpfcan7BXCkEo661uLyBuFTPLDqAN68tfsSzCUc9eoBRmEVEbaNnHjFrqAVUD8uVmTwHwqqevzciA5G",
  "key21": "8BrjVVZgReyNmnwrutoHcsXpKd26wQgEfPuWmDafGwPVByJYgD1TzpLksZFed1X239CuMnb6KW4NmTUEAYLdSiL",
  "key22": "emUFiGi8y3dRVQXSYmHP4PtMzMa4fP32NpKQaB34LDyps8zAnwxzo84C3qGwURao4U84gkQq4FmE3fMR6VQQtSX",
  "key23": "57S1ZXhkopgcwHABQaidhtweVEMiimvGQrrAQ2BdeLwYN3vsc4nxqAeu4wE8F8BDmULdJpLcBG787mLzKQ12ZGf5",
  "key24": "2bWTS1xTmepDBbwYfZ7Mv7am2TsQS9xznQYLzdVViMEggba9ihFKfq7kh8Snr9T8QsusmSwpeC7GhakvFMMNfiaZ",
  "key25": "YiLq9FRK7XD9CEw5CV9jiuN4S1GiBBg4LbKjQJ36CGmqbmwsvGDg4e4e8aEeyFCv6gBvgoJzwdZCtozoUmp8SSd",
  "key26": "NLy5TSNg5Hhh9jb8if55xCdvrbU947RzXNL31kz7n7JhahLyG2Y2bZETRKnD32sWxcKZuGdR9W38dVUqmDjNuCY",
  "key27": "3bA134vZH9ykH3dwt63vvA4PMe6htcqZFU3AtbrfJP55mCLUcSLB39WDknk7PFEPnHtKDH4A5NUwANGnjvu9k5ER",
  "key28": "4i9pPbQ2S8YVA1iNdPiGyRaNHj9gzZftXgBQYsb4oe3nk5h9ogCYPqJdJZXe1SMyC8VgFcTb2VHryHxDEkkL1UBh"
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
