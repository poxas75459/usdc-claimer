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
    "66swkvKCfhrXXQjubA5kfTSzDMZZ5pZ3LJyPW2C3HWyhJG9dDtCX79VCEXV98gRPRpQdnKrWZMr5wQyonLWFnRsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cgey1fPZmfX6hG1JwP7pTpUEekMHt2wb3QhHd8BbQ4cFj3v87h1Je9mhNUKJ1SY1jw3wfUTbqx79oNkEf4w9GqS",
  "key1": "5Qdk6wQERE4PsWZfE9EKF9iVAhjQAJw1d6Zu3EJjCXD91yszViH4GJBSfFp7diTHhz2bcap8CKFNgwcE5P8xWcvY",
  "key2": "6277UWGoxPKsVhZNW4wXRKYMe2uzrBBcNy4vxbwBiXDbzpfLFcsZafsjRT4fUy37UFWyeLj3yDkDDBb85KQiF7AF",
  "key3": "3pzqrC9iRj1vCpXyDbfhfPPhwLSKEgLgXU2wxq9naTAuFRU48agtnrBqbWFMPCcETHYDHsfhMxNSj1auXnWFDusq",
  "key4": "HpxsJiFDtb3WYPKnaZ37SYeG8FUF4TbNrAQjhTCsqfixHEKwQBmnABqhrFRuv4reggV9UtLqTsunGMmkwLfvtE8",
  "key5": "2p2PvKPBzq78m1EetFxQocwGJgHZLyaDEzrxLZcX4CqLiqZ91JBKKrRp3t6EWyy26ycR3RYyEbuBgntFyPrnjXPx",
  "key6": "o1nMEXsZAeN9MxWLH6VxCzmd5vzdjVb5BYvqrfyebdng85iszvkK6Yb4A7cimgWKAGee6qq6jcJPna21SjTG1NW",
  "key7": "2fuvpStnWvttrBi3nm17VogUgjDZ6gaCq7vNKDmGUnkhUdNTkvbX6rwsveCLqdjYRG1CxFfhvx5qS4Pa5GqHPv6t",
  "key8": "fWxFZfCdsswfG7Jc4mLbQ5ozYK5WjU3cYZ7cmVKajBWb6JM5QcVzodEc56znZQquKpxCuLbCKSuw4Z8GCgWpRXH",
  "key9": "2veEpxW3TRfrd5RVbnXbRw8NrypaWTJ6aWspJ2xYhDGjt6V2yyd7PEzqvLL6C6mr9gMr4UVCaxKX9CQTQ3VaSrxg",
  "key10": "2KStxDUtE8cczUyznRvAcRWDmyNatHTVymQsByWTFdFz5n7bZxEJcZNc3PcjzBr4jxCgfmxabh3kaKHRjiD9Uiuc",
  "key11": "jgRceU3P8cG2SJwTYMGyGiPKyuArdkTYeG37GsHR1zVvxvfRNuX9Xkz4UEMGvs6ZCmXoFyhJPSHRkFMMbXTuZXv",
  "key12": "3LRiJGme7KTA7pdR66wWMzvUnphXrpRDZM1ybB4AZNJkqmbcUwj7KcpZ2LjowLX9Jy8VLZCXHwLazVE738hVDqLg",
  "key13": "5Wx4y21MjpPSeJTrg7QXtbkz6HTZRdqBXpoGQ3TrcFdodpFL6yhQx2HheuMrBqnbWmBFxVaM8DD4pXW38tYtcw1t",
  "key14": "e8nDUnih7rijf2BabokV2io9DexCtHZVtHYxFQXnwCugwdxDazaqyL9xgnpv54N935kpLez75GKRfbdYFR4zAxn",
  "key15": "457cMe4rtYfjBxxe6y6QeJonyb7tPMd2VWqQxuDVQJpQ888b8sSVrvTh5FpFCQojskzg87hnCY6GP2nW7gc8cRqW",
  "key16": "4PuF1FhtVPsXdvYhKwN5MUHaKR2tmERFDx5V79GLcHonUncfRE1sTQeyJZ7yQKC6FA7Hz6b6dTNzcRfWiRNdUoi",
  "key17": "4tPfhrQijTuju7n8ta6UjFBvg78CAw2SrfJumFb4pQYiBCeQN3ynunHe2yychgPjLbZ4aiMvGgPwnUZov1ZTjCVN",
  "key18": "59bvzJ7T65qWdeYmNEjnv9FXSZ56wDuYN6RXneos5TsXAc8WG9XQA1TDqPKaMg6dnX7rBHa5yGGuSeZouPzJgD24",
  "key19": "Wf5jh3v2cUN2EkL76VbykwB15rndvW6CtHY76HhmVmwE43eHVGhgTE9GH6GFeX1v647sfySaWkKhMn4kXNvJ4gP",
  "key20": "6tFbM6RH7gC5fe3RrHFWJ7i93YgSKx9jpEZvSMq4GSB8v7zv4G5JYSMuU9FNnqyHGfGgao9RCR1v63q57nDKGaD",
  "key21": "3FD5beE67bKvhzzCduzjWfAfJMZSMjAuJzpnrKtczsyQnwm1z6KoBuW934hXRhAvNxLaXNogiir1sTH9joY2dMR5",
  "key22": "36EUJ77AQp9gnNK9dSv969K8te8ta6b8ZEq6LixBvDmBUTXTKT5Lrk7Z3QPjNBE71zvphsRMesEd5xnVY9opYceK",
  "key23": "23TstjFwNWVunyB2eNDPMw2KQcTM2nHyY2hsZR7C8qqaD4sj8uWMXEsbnErwiEEvmqq5PwjhWdEGBFmU5Tf5Fmkk",
  "key24": "3i514YfacEgPABCaAh5SFhFURzsCGRv4nPrTXGifZFPZNiaoru2AZ1oVEDTeij3CDuyq7CsAFSfbwRwk8nZgmuHr",
  "key25": "5pbNAD4pmK3c4Y5SoFNP6pfUXPbVP9izhEnPoCpfFkSo52ah4PJY4snZpa7XjXfrUV6Xc34tNsDmPmwMZkU6QDFS",
  "key26": "4GGWNqzV4EUWS5gV6MY3XiipNYTuHGBTc9boqkhiR48gjfHKLRpJWRtvAAGp254CXsVEq7akQAmtbbbryvNL7S8o",
  "key27": "3KuyMMrYCmpsUKm2cuFM14aSPBKLNcteuYVPnKBnrPKHgtuySNqrzsHBqJhjv2JZDN7tm3abgJ7WGvebF3kGDEiz",
  "key28": "5WCPx2yJPFtShMLxZdGAYtfHRQxEcAPRxzy65opFDMoEa6sFFa7xCKxwkSUCLe5aNuf3AqeNR299nTxYwyY1zAZ7",
  "key29": "4e9WnXczKrki83Hp3tPw2N4VHWwtf9SxstRGKJEFgDR2GnLhWYSVJgYg9gJz7ru1s4q1nzDD5b9m6Ga8rtHWxXDU",
  "key30": "2aDZHeYMPHqzKbghKPQwnqquVB6XDABdNzxDYu4DnsATTkSqA5WbFKwp72Pb6LzXMd3fooVNiMoq1MtZ5Pi9tDmV"
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
