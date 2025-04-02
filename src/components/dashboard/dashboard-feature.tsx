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
    "4Bp5PChw1PCuyjcL5mdCXC8X2UmrHvVkveXii3J7nf3GQiTGZ3L9qaabpHYASQDCd68YfauomvzLJ8GzD7NtMfbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y3SsTiiyhdXDWVCxL2xd6G6xTuWNz3uqbT1XqVJSNvLzjsWQLjTmqtqXsdZ76a6RRz6b8L8PG8tdoq3cE3s9Zcv",
  "key1": "wSyzeV8xJWZma7ZPHmTPBmzxKY8Ab37QAfMv95fg11AnqPrmA1ZdVRSyF1PNAWSquh14wcCeTss1rqLXdEuQe7H",
  "key2": "fZ4Lu5N6GFPQ115wcgVEvecpTRGKAc4ycyXmTpge3NH9zwR9zGQiL82eN2fFWc6bqvbZ6d5GBw1ZSEmcnC41Y3w",
  "key3": "2ZWmsmijrUVVsGxrgKehqQHWDYaf7Msdt5o3LzR6t87yLsnqNF9NvwM5JRnQak1zaVo8dkF99u56vJFXp4KuJGAa",
  "key4": "jzCdkjXUpVL71GgoAZsceHi8tcm1qVsBjTeAqJcsBfxCLFivy22EKqmqnCEt6twBFxrwff9wkmNjC32rtYvTDJY",
  "key5": "ajSF1faqyHCwzxEr2WsvVKyhFJe9SzuzYkMyBeLKPU7Q35N2HwHp6buUS7E72Vv9iEE5Qn2Q2KJrixXg889ZeeT",
  "key6": "eR7Yv2DaqfZwyUT1AtfPNcFqF8sFrD49gTeDLuFEud5rdYuTLYNi8BrWqjsxVZzN7BsaDBFrS4wNse6DFJFH1SR",
  "key7": "48uTr4J9S9rL5k8kqGtraDLMWwCoZnQLAiseSCPMZyuqVqhyHsDpf1UYDLXUcDoYxRd4kq7shSijwf2qhTcNdzot",
  "key8": "3x6gHudosvadYG2Q86Ur9494V4XK3TCvCNH5NfytaKhwoxVNoPmHMV2EFfSYakqMnHQQRdToxJTHdh1mx8eF4Q45",
  "key9": "5kyZfvB7d4K41BnYFwN3ZvdPUiEj8FFP7yUzFWtGTQDtX7e8YwXU5dujZL6TvRzFue1xptfGyceBFa64vvfRihM5",
  "key10": "e5BBhou2xhW3B4NnHpv4BhbFbu3rCMLWNFLXS2si5Nx7yDRvkVq7zYUtxGQGaA6YX4zRWD9mwyWtuyPLZqiRSTc",
  "key11": "23eousPAnAJzPJLkVGsGEWj8CHmxBQ1Zp3A4YVFFZTLxaWBuF81q1xSSPuUjGxj6AxZru1Ki7cUTMwfVBKeWCTHt",
  "key12": "4TJsUADXdvWanDXqrVHFtej4QDsqnNX7RaetTpRo8mRtU9aueKHcMUZfkJqFwc3mRCouL13258cZajvvLA4mSrSm",
  "key13": "JJ3QMnwTojPxEPqwxyCU5aaYwT1eeuXCFzxtUaknAfn5RpiueTUGiCAB84iPoWEuxbwxisvxSFX7xnzRsmwprvj",
  "key14": "4tXb7mgwDa6A3sqgojH3NxB9qkvQvSUjMT7DXHiPKCQz9uXeNtpRVjiToXybpiWZhavc2uh66ALhTSuz5rybR5No",
  "key15": "2hGfGoPgmQis3rX1HwtX8XQZ1CMm9ZyTdsLiNNgvHBN1w556SDYgTomi1uQHywiQrXTBcrFMhoKXx3UgNzh7pq3V",
  "key16": "5HMkYCFeXLjrjgp2ZpgaJJ4hogiuiCzuQTpTsLWfcMQKziA2DZbMRywcpeGdnszc8MZafr5S3ZDMJj4nwZMJwwan",
  "key17": "2A7cn6MA7Rz3GvP1tZJRYjPRMyHhkm2hvAQj9zuNXXJyqenvEdkRfBpYj4b1rpo3tWGU3TQaQNgPD7kLs8pyomjY",
  "key18": "3ucYqD9bqLfKcMAwRNYSW6XKrThNPM6bF8x4vSz5ez7Qk27vCytc3exCvSMQbFdVHfwHygF6NVoeJfDkMh3L6Kpf",
  "key19": "2MDGcWjA7jhrmbmuJab62hbes6vUNbccNLdjQLv86iZWECXEDutfx5XuisdKfCzhsmK68UfuUjhS194VxiKehJt3",
  "key20": "1DKWbPubdnv29bfkNtVSAYdddFfEuhwFLr21WjZDfkyDYgLP5atdkBXMJbzwJZ5WZTL8yGryJMcXRNF3s6H32Yy",
  "key21": "3JXAN2vpKGw3Em8nmnd4rBstX6UaL4uX4JPV73Cu2YMjM5t1Pu8PPRmrfGAZRn2Wg9nbEfDSqyk4etbCx1JseRv5",
  "key22": "2fiuCL2PXeKhpCft2xp8TVc64WpAQeFosib756vPoUycX8ndKfbthYvgC2sfEA1nWaU96ZZMUXKGWB4CkjdJosuW",
  "key23": "3RHWwnpMjLNZLmvvdR2QCfhMN3kbpCXFBvcFoVgCfPdL3L7m3hs1i7HajUHJ78eUsuvtapfdqeCCKYAMkjKmRCRD",
  "key24": "451fGCVBw9yrRqVU6ViMrEkvP1DFSdVBUnBB1ppt98FcEjRqWaoJhtxAeNH3HPnEE1r73DUoE264jdtXhKpa4RAK",
  "key25": "CNzW5J46ZExKBHWWkLZQDhanfot7LkLG9nSedREVuDVY9CjkNpkDbA9sM2gg4Y2iQBsx53a73pSEGtDRoGXYLgp",
  "key26": "5bye4dwznr5kusyyWToDG9Xqu4PyiuEtZ4f2QHhxmwGuPEpsrJSgfpAtU9nmYkwgSh3wZCuVQ1u1Cv4xfex1xnnX",
  "key27": "7BVzydm6sSBYH3P86EWavj7H4xwP3b1ktaQhWujx2Fvn2Z3hjYjbW6xvCLS58yggiDn5PNct3iCF6isVEVcxRaV",
  "key28": "5uWbERaRi7YhyVdBhWbfcFfYGiCYN9iwrnv487moLCzQ13Y7jEFBqs44TjNWCNm56Ma1YMDgzCRGSxMrUmLjAWDn",
  "key29": "MHWJh3xkqRotPHnrTVwBJdtYJHq3CQirTD8dMZHDp9uHPBcPXg9Bjz4hVPX5AEg5zNrNkN5s2dwe6sscjEdviYR",
  "key30": "etnUkNSbmpeffpsYv8DydxPTinmwhXLhx88YyhN19Vzza1dS56169oDP4uVwwrc421hwgk1oLDDgut3rCFYE9HS",
  "key31": "29xbKK3eyYjpSmfDvgYZvb2Rybzx5UXLHBhMyHuvCHinuYPc7ajS3nNWjEuNZMj1dqjhhwiv9k59sK37DWqJVmzg"
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
