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
    "5r55ivX5GUV4s6n1u6dEGiecmVZjLLAAvW8YL4Ln5thWkdZcW5JBRmd2WXFgs8zbjefSuEPRcD9J2EfJTPwYKUDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BBPuEnRKDYT7o52g6mu78CyiXtD9Qm9yZcazTec7xXXoyMqNuxvD4xd8T1RE6iq6GhvNE4LkTV3aJE5UPT7Z43t",
  "key1": "3RFU35bjPUkVfNGNNAMkhZmxje5TwZihwr5zU6ZjUc3RQLAEzSkAVn6ToTEu2KNsTFHWBA35UfE9AhFW9p9FMs8S",
  "key2": "5XHYAbDyuSSrVVxCcN56K5JAHQoQ4H8oEKXEBN9EUvN78FWd3EkMSU8UH2qELixFnSJja9kvLy9X4Zd5HZVyWrMT",
  "key3": "5HTrVmAtfNtovBYVdbCdL9xMexZjSGNtGeGhUEURp9NAgPSVKYqC2qzkvPhg4BfNKCdwKAoDUj9Ga38zY3x83ZK",
  "key4": "5zKzJ9J92DSrr7AkRVpH2W3vkeKT55mvNR5kafAoz4nQkBgnRwjwX9v3TwmpeRbptGRfkjFjk67KwWkaQU8G6ZbD",
  "key5": "o7vEpMaVxVR53FMHop8WroNHjR2aLXKzMd7XyMHcJQFhPa7t5cegcLyFoVM95DxMMoVbHCugwz7hFyXYfSsuwHx",
  "key6": "2g9Y56txrEzvvuho1f5bNrdMEvo3eqa5wSnQTTm4L8Bjn2Qvqazt5z6MTUuxs7ToHeoo6xsa4RMFv3pWospLE3B3",
  "key7": "31nJM9eiT9c5LuA16JYZ8btsyFyQcWpUDjm3ytxkAZ6a26JvecDNE6GJnDG2zfXA3iw6ZM1t5b7ezoUkiBjUKQDD",
  "key8": "4X2e3TJGvagYAW3CMuAvJ8GDjn7f1TNKbavTjusBdxmYi9wwzasW45jFrB5yXYHj1PAGXo2KWPtTfwccQ8byhHSz",
  "key9": "3zWs8nMVQZWfWpkYugWAcjYvXCPHw763s7atiFPb58RiXsJnZCyLVPFvyDQjqUAsnRiy7Xc9dQ4okqB6FMoKS1na",
  "key10": "WCSGeXA5fsSj9HKGmwkNVii7FFrP9qTu6xkRqu2EVMup8Pob3gUv25Gz2RQmig5hsVKYsAvQzSVtVqSgW4xvAJh",
  "key11": "27AL2qLg2o1YNS27GdaSdZiJpwbCs5Tbdby5HJW8QdaZBzv6wW1Ga2vDebRQb8M1b63qQNndj74xwg2jMmPxuxUY",
  "key12": "2JDJ6fPA4jmbqAsEwQKi3eE6f41yLL6RszvbK1u9dmUY9nsRn5YU4V7y6mEXG8MzfN73U4vMVwexRDVtBUDwHS6C",
  "key13": "4RZNfddAubJKXRw1SotJFWjExVo3qBKWjNM4CdLtFasWpiRNQogBtFWqX7a1eRikhNXmY2g2Sz4PLqYVkKhkNjee",
  "key14": "5WxFH36T3eGPUXhmceWPL7tsMnhYtckVFbSGPA3fgquTwZTL4BKN8E6wbzvGdrhA4B17Jxa2APohgmfLYS5Vwwuv",
  "key15": "45zF54My32F7D2Mievha6jyXZc23g9jd7E9DtVnGYcs6jdujQ8Yo1M7HLQ8G2nLpfircxh1NnX9nN5C5MaUE2oGR",
  "key16": "4KpYATNzUDH4dAxc9GP5YSkKJMESeoUSvxZfWn1ndJYBoNuFx9gG4WbnsjsuPdPx3Fmux87LcaC6pbWr9s9VwruJ",
  "key17": "axjSHrGFcy39wtkBwg3gHj4vjJJmF5aKLTCSxGebo5BUcDH87H55KYWrC8GoR96fBfqgR55RRVtWyaH3FauEJ3N",
  "key18": "4AdQ4VeEoqCCRD5m6h4dBiHrwgPzsw5awn2UN4KsFvUP9uFVbFrhnUjzznn5D8GF2C8M8cTu8mKnEA42cnAXJQ6B",
  "key19": "UNkMgUG9NTwwPh7amYKGuUg1X4UqR5jo7qNRsmE58RTi2fCqtNr6rNvwzb1cjc84WKu4gor5VZZQezSp6LM1Z7M",
  "key20": "5N8gTraYDZ4t3hrh14SYWqLm3XtszGs2BzLKCndA8b13fzdVE7gnANEnA3QHNXc6mMiLXbLCHgQscTtJNBr1na4V",
  "key21": "AZoeN1EAAuMxfE2GfdWZgnCgiVCcjbPUXEL6KzqHMfzLU77cUXXH5FvYvfj9TwB66AHfoUxBXZQWjd9dcjouZPH",
  "key22": "4Zp3afFdR5CbrGiwmDcWuGgKzS1FL2RrwFUtrXScH2fAncnNry8ZT2MVZbsD9b7KN8a1Xh9HVdtLhuPCVgSPrn5i",
  "key23": "Yzme82MVTHSAdoX6iVEBjNc7wEKchozSGbxfEai12rkTqj6U2vCj2ZTq6HVuCYrnWXrcTFwRAFRXWKdz4vQbo1d",
  "key24": "2nczo6raoM4uxi3TKEdbs2Qp2pLfhY8ibMbg2Tj7zM4MvmRXiM83o2jYJMQJrAXcHTJbTP94xW6R8vp3Y4xNdUfN",
  "key25": "589K2BxVDkgkQ1sSrzFTY451urVmRejHYDUurbUdkfSDeEn7R7e7YZKoPaFYuCZhDxuQ2HnQsvPgL8wYLuoJQ6hk",
  "key26": "634FnAGqUwyqizUse5D8m1ShduskBBj92C3phgMGpJqKcnbi9ATNEAn1gGW6ZSrufFDgbezXzWEUmEnzLiBcdBFx",
  "key27": "5xKACmegFL9WkeXYWRNCwdPY7951NV1jq8n3qRtLJMYDnnRpfGUuGFZRgZKTeZLQs6jyZPtv1vvA8dcPoCKpp1oA",
  "key28": "2PK79MSj1AAwtXBa5s1xEdJt5fy4YQ2uTJ2Vc9utqZD261aY4gmuMoi3zatmARnkDztFVanDU3RXAZhMcgETrNt6",
  "key29": "5N2YvVSWfuNVpNNuS7miAwZkdZqLm14mf3WzwfkyXV8u93MKSeQGLD2LVikutQadeQaQbNzHSCeVzXXEzifdMKKk",
  "key30": "DQs8E8d933ovAMfVRHHbKSJJP9rYL8ksbJ9APnRo8XbxzHP9t7MuoCaRcNEs9WucxPkSWVBdPY1bJE2HZUCSdQE",
  "key31": "Wc91Qv5rd9ZUru72FyTCpNr4HZABUyC8oRsEbb8tFwH8VYaUUDhQqrdJma82nf9YV71nuqzXhmgEhj4p1oCyAzP",
  "key32": "4D3pccWq9FedoeezrDFvVEkzJS9rZAjXmRXbVjnVQAZs5t97ry8ovMFq2gLbMqqNRWJdJrFexSwVJNnThSXuDxHF",
  "key33": "4Fe918zPmtgQnrvhXkU4kjtvVAERH7VpVvfC4f29tvKfTK2P4GdNE4R6w41RczmXYpv5vNW8SRZtsvmtLza6kWvK",
  "key34": "25HgMFBARg8F1skhL7gKYWqTKwpbinPYnK7E7D5ncjQVF9QY4WXVrvzFwQmw11vvaBqHSeya45tsmBFYs545zHa7",
  "key35": "3tsJzBALndEwjtiu6WznwRYPpfxsZ2FsYYTpubYNY1F3eDwobyM4KpRj122CXof2XQa4cZs24paZqgQoXxj6gQLW",
  "key36": "4pcmYF7j3LmGzcskncFqqFZFNKRpdPE8gXf1LybFbjcBdrywDH2RnQ329ZFvohkeAPVeNg7zaCXwh4EvPvN6XwNA"
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
