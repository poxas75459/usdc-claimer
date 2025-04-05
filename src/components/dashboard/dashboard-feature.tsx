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
    "5aEvE6KwwVk5BvKpep1bVBAcBfw57d2J8ocFF2JYq8h5rzQnCYyh5wwp3T8Q7CaRbAH2Gt74yLUxXXPjUzMghhZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57LHkkp4rhE2B8TYcYaBu1f972aHGRDThzs3Xdvg8E7pYggkgismWhjAUUFtVbFUGKn5Zj5qQYoFKm2RFdcrknEj",
  "key1": "4nvGs58gtgHQTftiamGNo6f1yLDqLzbusAYUVLn8xZ1UJCxXxvFcB7apE8zsTgAAzgbVHWwiQbULy6VPDU1k6rva",
  "key2": "249eSDMJNHmAaEzNoD9en9csxAphmHustzUsnMXbJPU2TrQWLX7zKk89kkJyUmWrWZocVCmp4CTTbVZffYXQ3mkR",
  "key3": "2seMSigJVFDunU67HRc691n4TyaPj1Rm2kVcN6q7vuq2c6b5UvwqyqY1rFQMNSFsRn82YRtkbarjSr8Pd8wiLKDG",
  "key4": "5SUyonu9Xb7b2F6PAjvCLarALEgoksGmQQ2evUXw5fMMi3JG1LP5f7nDe1NhcfQSQnFcMyLXFwTJRLAtTuhRPfn4",
  "key5": "5gkL6dFkRVGEi4RvwFRNLdpHAwxYtNnGLr1WJjvbmEhXmTqSv46BpLAf8Dd2kRQwtXaQxn9p293yj8G2xoHK5mZn",
  "key6": "3JLXck497iJP1L9HG6CcxFLzTGA7trevZzcCRwUFWiynTNDc78oFXprz1eaiv7bNmPAHejEQYN33RVuwv3G1Cf2W",
  "key7": "5Zz3Mxh8cFJVAGw8EAgEjA4w1SLC1SLXv9FY2kjt9U38D9jriAvUL8j3LYnnyKfUFDsYEfgFNcn2oFmdwYowtvjU",
  "key8": "4FwVy4WJDLV6T1iXiNyiVGaHSMnXUvTJvsHxD2gokbkH7z2sAhTKtvNeAku16ukkz63YEMkWzmyUxHtLVLC8fgBS",
  "key9": "5JH4xy38oGv2AWw35cgnmm1QpHmMGARhVyg4fMqUcJHVNimed9bJepmCoPgWTMffR3yqk69CDEy1vJuM3E1boCmQ",
  "key10": "52GkkJQ4kTSdwxuAGmfL7q9Xbi7dqRBVQtufL4b6DCgukk7aCJ4hRNqBjFBXyQpR6BfftfMavzJaNsH3jCPptVGi",
  "key11": "4vYkihgES7twZyJbALwLeUpGMx6u5rLMXGX5jEt1qBFShANyfYtSaddhY38Sbsya2g3rwT3nczLB7zkCqBxir3ve",
  "key12": "5LruoFuC4nPkfxmZc3Hai6hD2vR4GzMqvF7nuruuRxvdoyKv9NeQh3TovWmGNEbDehMiJK8fFcDrLesr5ppkxg98",
  "key13": "5SAqbST24k49eCC81WCTyWuo6PmYtXnkXLXspitUp7sE8uVLSPm26nPa76Dz9DRiQj2PtACk6QdrX3Jj5bsiHNkM",
  "key14": "UyWY6ij4ExGouTFmdStVjvbRnzs4tiuSvU1ay5udDwhuUXHwTUqdTcFyznqGnXjn1rySHCMuvo7sWrd32KMqeUL",
  "key15": "5DApQE7efGSYLxPk3go22HUGTKBHqRWLKbcC9Lny7CqFgXdk225bxMDVrr9kJHYqG1QcQfhdg43kXGMqrK182M7B",
  "key16": "4h18C4S95N2s119XvMPa7pNwFscR6ZfrPUSgXCZMjkTFfusY78u1oquJ2maFUM8RXDDsvtFVtJVc38UCLRVZ2FBM",
  "key17": "511RcV3xMVYnKSodzxsMs3oi4CXmCkdB8YEZrxmtm3DyLqNh6CcGbLMbmwwm3Qv5uNiRwXithPbW1KUnL97QbgxG",
  "key18": "4emr68fB9PGGhSKcycDi6BVdJJXrj2yU9PxozdhQn7zxy5fbfzN8EVpyXRA8Z3ithGyWnH2gUUoMrYk8S88X5GKd",
  "key19": "4Zy6cnGLQHTveYQcwr6ALGWf9SM6Zqo2ykYMpRmRjB6VPSQQPd8z7r6dg5EWX3aaWBUWWf8mRfabrK5KuSZZbcsL",
  "key20": "27pTztmBVom2q61eaxngkfnbocH1n867pyyyNSuNoViAtuKLFGcvBw3cx69hFhpUbJ9XvxdPZBdU8apJDCGHAXA1",
  "key21": "3kWLXyp8Bwi5yq5gUJhdZqg8toB8dmLLFAiktsYGGyV5VVLgm255nrFsbWdppxwWHCBGuBALvibaYpbNncDwHbdU",
  "key22": "Ukz4zfZUTr8N6XCCSXdXsMuWcu7pqauczzd87swbuu3nA9CFu6KFzk9RAkg3x2oyRwFcrRQ1qT62W5mqMiCfK82",
  "key23": "h5sC3o9p7eZ9NesKo29csHAQVGLJbb48HRfPPRGkW36MhMpNb7wCmxaBwoAfz2rhGoScFxFfkvr2HZvVPHRWqTk",
  "key24": "38f3mXy2BjefHVB9EvRiEpop66MeTwcxzwKfapwzdXLGQpto2yYFewXgP17kPkuoYRavWNMY6u3RSyG3FR88eEie",
  "key25": "eVj43MxaZ6FBTLG5Z4ZUox2Q55y2vHjj9xSXuPNFwK7n24kHVUYsQPZSjvXQBYCWDaiw2ryzJfzxvrtdoMA8pNs",
  "key26": "3mnF67oAD5ivZ2gYJwnqDXJopnRuTkhEKSiafeeyY4AnaHPqmSTYwv5ucE8JJN1spj49KwHwFuBzHRxozXepc6mg"
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
