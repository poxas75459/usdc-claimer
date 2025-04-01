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
    "3kN4x1ujEdhpVpkiWYTJ1m8ia7BJkwhmR6DV9uv5t7admJfrVz1aCjVbkAxgTpSwpnwBo9kaPdzecwYyCZ7DxULF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LpA1HxAzvsBttb9y3KKr95reEDzmpYv5NxLRbKN9YUrnoCJThD9L3hwGNp6ru38FDBLVeXVgH7hPwnyHQA9cMeE",
  "key1": "SHTBVd97RCoYRufoWx73GAUDZateXugBoLNptK7XCgVMAkv3waLieCGMzmLZdpb8w93HerYmm95Wdx5KLhBfkZU",
  "key2": "5nZWhnktooDXrCXwUBiGxC2aEgPv4eB2S3MgQgd31JbBJ4Mfh2e37m7SyEDeEovTDGs6BG5iPUGCBZmsgDrPvn8w",
  "key3": "4H5Lc2vZQDxwZnSUj2VEuB8NsckvjCueQ4Ro3zHqU38MzUcUHncQpnBQwykuGtX3vRhF2owQbkPVd1VRMAEuFx2b",
  "key4": "4WUVWpdti9gZZLKtk5EPr8oTMZ3RGyUzWE8hsguk6gKFsmk7A4CcYvESLNBgG2VpbjUCdEJszRNG6Qw4kJMZQwdf",
  "key5": "2Sc4kqCv9k9dvBNyEeFyuEkBJZhjPDZ97PsijHyzCDg3viH7nGrVSQZQH3AMAzyzhGbXSCSoANpt1Kcf9F5GGQfR",
  "key6": "4fU98bxCBswsCoLwZEwpZWPjdLaEKkTJG24btMn2hEGYVABerKh9FreXzMMPqF8Pszg7mWtAk3KTNq4xpTFfoiMf",
  "key7": "5Jdktpu4xYcxUqmD4QaVEMMweoEozyGRnVXezxvJjzNfnA2PUETRVDpx7CxL3tr8GQy3GMo1ZLGuMnowUdooAd2X",
  "key8": "4YZ82QsZJ8Tt1BqxRWsEPCdQ56XyXhvyTyHeUyF98sALd9AwfoRhz6LKhG9cMdgt5njKzkdGdGQYXjBBXpGT3BAJ",
  "key9": "FZJDSeK9WmTtuNqxUDdqqnN9efGkxC1MXeEnsVyrxoGuKnox6E86Aja98yYNgEc9dQAfiMBxXA54DATKcy6b3EF",
  "key10": "LRoimYqb1K4X6rMEWxQXNwxqvBgfK7gPCbhe8se5LchGqXMSzdpATvr3hoPpvpoHCHCV5UHx1epwWWs9e3FWa3p",
  "key11": "2Czp8Gwb6wx1foC7Ej8mn5n4N1Rcw9NrqUyL4sjUUqJ9F5voFTmjvZTyr9U7ykW1Nq1FpM95NjgGrNftxZv5XvnW",
  "key12": "3uSE8XVYxRAKHKYZPHUR4NhTDHxbuvo7ZaEM4maENxVpwkgGN3AxFBC4a6EDBvESXXe8ASD8tqZZyjAHRVA3gr18",
  "key13": "51Dsyh6ie5NN6NvQPRGcXtqeQd2cLW2Qebph5gVv6fawNo8XocbxFZhNytMWY9TRLs2XVkLd6K7d4rJGu28N7rrs",
  "key14": "2mfh3aFb34rGJUSfRid7WLuCRcgg4by6dM71bQi6QWbHEALVzumQFjuzwJgmt1iHfMiyxFrXqaGYXb9osvpdMmpT",
  "key15": "2dHB5QZVDoWoXDocrUULp8jeYdjY9nBaV3CK4Xipa3nntrFYSCt5pVQn5NxjiJsvfWrooyvCV6LXKdMxuUKWK4Ka",
  "key16": "heNkeoLz9YTxhjGPEnaNW54mFoM47n8v52zkTSbZNP5P63YSDPmFEtGfkGHCB4Ca3aVp2WmQ2KBW8qLgM5C5ETE",
  "key17": "2JxBavmGqrFHd2KjF5L6gm8f5H7WH31xqMfEo8cs8kf8vLFVeTjDeiTwWvxHvmCR9tJ6P9BNoAu8VaCqXk8h3ztP",
  "key18": "3qxQhgyZvHfmnww3AstdFhPFaUcFA6KpGD7ErUMFUdDV9dVnsU8Z5ngHNVcFRCzxDMPybAAYp5GkHLzgPRkh1YMy",
  "key19": "2mUECrD1zG4Y1NtYP95zJYqUjKKUc2o9DAGsn2QaJMtFE2AN3ywfAh4YE6kqvUudQpq1vc6BexkVvA1R6QiCA97C",
  "key20": "56wj2eghSRWm7zXHcsrJqhEnC54nAjiSBf6gpTDDM54zFSHpfbUS5QbZeMVxbVGvcz23NKcjV7p9rLLqwxLWCs3w",
  "key21": "4ymsfwunFYmMuvkbRDYxX8ESc38J5s3N7Ur7kEbeDqimADJzkHpfUWgV1fez6hes7nYBZE35XAVdacA9EcnkwDpP",
  "key22": "3ZXrtPQFssCM6y97oJYMStQeojRAy1hF7LH9Sx1giuybX6fkhaVxQHdYjoJ6yi98PBQQghZnEWT1RcqwLQZz8Mos",
  "key23": "2UgibXz6Uhrusv4kHZPBYGsw5C23un2G69UbRTJkbxyincYKmorMqy2tMfKxsCmpYXoAbAoDpCY29VhTDkzemTbL",
  "key24": "2fmTRcyFN4ane24F8CrymTCYviz8popBjXYNuGwx1N1r6xmn3pH176r1B8G6pZ7oMtWG6SgfnorH3axT2RfXCFMw",
  "key25": "48kVah8LqvZiq786BFKEA3s6XWyuWh73TVeensCei4uqoENcgxTWQK5Jy8iDvY2koqco94Dxg7dzf9hL1AFcH4kw",
  "key26": "EqRTKNBeTARwBpxczcTWJtmqMAfrcQT3gWAyRn3Liv2g4mq2kMp6osaHy6XkxtjkrKx3WbUBBN5DnnfV1TDACy1",
  "key27": "5bbRXU3EKnoVgHDNos5K4uvyE15rYtZkJQkdminDzmQfBxBmnzC7hNsUEcfg7L6bKKFqTKf8EfwwSzctUriNiaWk",
  "key28": "5X3sQtdPE3xeGwuHMCXx3cUZmQFYTpWS7Yfq4idLtcFrWsULNKYiopdzT2DmRULnJ61DBrPpKgkBxbH2khY3iSqN",
  "key29": "3AjeWk8Kygn1eMk7Nre41GCWHhuhNtSVNUpNKksZWq2fsn8hpFgQyGhWSG4xFSex5uUUEWqy7jckEoNoRngrysxF",
  "key30": "2vusFJwxWsHVtDUKZbTuszTdvBJYQGPJ7qhSQJ9bhKkw3AmUAKfkF8sTRabbCfHbJY3MpeP6D43vd189HkbQkjHn",
  "key31": "5zJPQHEe1DFZgNvdhr74QD2XDrvnPehwvQW8CbZtFeJdRgN2jncpkeUjSP5sApR8MrH2e17rG45swULBjh8wRb8T",
  "key32": "3auaeSctmF9NKcmFqNicSp6pU8T6FRAiWhapfcWDrS4dHjtwXTHM3JfQDAwU4p5CcN8SrvwBDsS75VMxcg7ZCWHo",
  "key33": "2zepMoWfYHn6JGwhyidSqWtcu7aFupaGPb67eahNabWexR3RiwueWdDJJ3VVGhvMtv2vos5mLrsW59L3T68vUv6a"
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
