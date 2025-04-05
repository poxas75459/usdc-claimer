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
    "YvxHzR8t8h8KxmogYrZHLHGdcw4P8y5tKo63mMe5XnitsRGNaj1boFzxgwsihBmiAg9XP4wk5oaX7YbPbcPGfrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aGePuMcgqZJDDumdmDtvDvw2KwFLmo171yXNuasjLuKTtxEZ42LiBFXQvhwA2ftXsVQZyuDKwiN8CKDV3srXZJ2",
  "key1": "43o6mwRnNkjG9qTkyEiTmR1xQpszSfJaZb4TdS38fKy7sFSWciSpc3k8wTFcya2ipnxWKhWJFfYSysihDLZUZW84",
  "key2": "42BsUQy1dUS3HnLg73hqY6yoiQWCwyMtLWAkHGA65LnyFHqZ26tbJnrCPyHDkpRVSprroVgLGyVq76Aj9bHoZJ7Y",
  "key3": "2XwGPPfLrC2egr9TxH27RgPoPaxmUV5PF7c9VTxKhVHDw6tPkmjKa9Z5tYoNVuo5avoge3JTfGZYty1kUtv8tC7v",
  "key4": "3CEnnpdQKTyzznF6PRHf85CiVZtY4LhNKQzwhmQ4JgyNwc3ixkfS163V38K7guSs8D8MehhzYKo5HpZEiB7UQiYB",
  "key5": "ipib3p7xm8qSKYGgDBMmrBp2FUbMEhwWBpLNqZLPY2zDv7ZWfwzZoZn3CB91xpe3RBFBtGBw6kroiXDKQt77CV2",
  "key6": "4NMGQrEDhEcCoVuuRLfMRTijSe6MQh999aEs7x9hQawc57ZPSYMrCXxsMsuqaeGZymidXXiGE7ShPsagQhAhNJAN",
  "key7": "2DRcD6dzcJ7dFpxV78jh76TnBfH4r4LgWGf9M1px2kBYTjstbx3q4ymRvYDXM7udLxYpeJubccjk9vMwNPfetpV9",
  "key8": "2sReHZ35YrBvCte6Vvy5TfrfLGkfLGz4D1oJUVrDDnU5WXB3XGTZWi3p3FdgJCXbkVowcfsmwja2LxdRrkUFWA5X",
  "key9": "3DzKWhWtcSZ9LEGPE9jExtVo95VkGnGrxCHkaPewtZju57VgU73Lp2nDzDbMssRMf7SC4nPL5LFxHRhgA9nEcudk",
  "key10": "BTrc1xS1NyVSGn1xjbkqMm684x1MhmrSCj2FDnXmXaqsTGJ4Ad3exss4wTd73hdFhZe9aXuYAbhD5ieGCYAD9pM",
  "key11": "2Rsm3BquXzTLAq5CFZ93SxokWPvVBkS3SPhS94tzPbEumuA3QWnpr4yXWsUyVTsjBTQRtBgdxpfPNyo2Axs1FgyY",
  "key12": "2nBpEeciiiRLreMDGpmmWH8fpRsz1QuEgAVUEb3X8hfU6bwUSxw3MU3M3RvChRkE9phqPn6R6pCbbGACXyFCSqvi",
  "key13": "qVEtm6avYH2PXLDdA9bHZ3Sthr75bQgdTkGddubzcSrD85SfSqFRDGsfevFyNiyQ6HKdo2ezzKw1VdTkcJDUhyv",
  "key14": "5QVDsrh9c4Y4ZhKQqaW5N9obhGFpUadBPmEvJbscWNTCHpTYkkDcHKQLxLhJ8zoH53jd9UbUMa1SD8modjWXErpU",
  "key15": "2CyUzqH3BqJKBDKoseDi4paq1KfHqXwWqGS2ERCnzPXURs4EHPvSVJbG4SDWQCuXbRZFT4JCqowQTsKweoPJCeUm",
  "key16": "5gf3irpJyE37bxDtPrqN4Duw2PuGiNo2jW3TE7NJW6ymN2XiCx7mFf7ZoG2ZQiFPknptR1NSQTL1RfDjKrF8E3Rb",
  "key17": "3Wip1cZ8foYY4a2YgR9qsJo4JFFLAhvAKFE6v1QySsDwK6eg9BDRTN62KLiytCvKxcvjY2DnvujEJVydx7t5rJ4D",
  "key18": "2kJWDTXmCV8YMinsF5j7suxUdMkdBiwWKHHYEyFHWndwRD2k1WTu7w4hEyQUXjNGwowL9mKGwFN4RAG7GVzq6gTG",
  "key19": "237gj7KBoyAcQQymd4ZEnLkkAXoLDbV42CUZLRVU1zTgjM5sBiUvYcaUDsrCXRWzdRDDncvxUHkvZgWPcKBXbSGW",
  "key20": "5KCx6cDvXdJRAWPQgDvAUc5qoAb4og9YTzTCYsnFS7DxZw2q7ujY4msTgqnPzd185HJ798ufBmhCHEqTepb3yf7L",
  "key21": "3GsDTUQwht9zQHZ3EdKmqQoBt3aa7YXUXQQ3k79PMDeyDCd47x9vmLFTpyEAZi6b5T8aHmRewENbim6F1uUos6S6",
  "key22": "yead8pG9HcVFZqWaLMfH9fuiq3FtGTsWM1vxdLywFJWEgn9qcP3ybijV2MufYw4vUupiqiTwF1MEoCQNrttG3Er",
  "key23": "2YuNgNhQVVTMEkGsC5MXXmHvxEePYcqY2M46qhrENuxsS8zt7P6bRkXKnqxnhxVnt29k25BEcvLktupqgS176Sq",
  "key24": "61HWPKxmAwEqE7xToXkU1sMhv95BseXKekm6oJqQDFAc6YB1XCsnzSxaqVv2Puz6Ynn1Phk1zmWDzEaUYsWVHoWx",
  "key25": "2ubJMwFX4ajHzAkgUP1mcrxHKhtxFC9DYK4RFwLMuNFjkzmMrrtou4y7wRAG8s7FFTx3G3rr5xS5gGUV7ULZJGxf",
  "key26": "2BBGx4b13SJTqzCtvP8NdcRkXjjcFksyfzGC6nVxb88FfwMEToj35PfUB5fsXmK3NnQoGkEU2WPrir4vdmZQtHni",
  "key27": "5z9oZw1NvwnFUX8SF4DuRZFkCiuynqwovDej8cQxSndBqD5j3x4SrtcAWoppgGbKUT8uWVwZYkQdF8J2j29RtcZE",
  "key28": "3o6WX1ZvffcFoVv5rnLpYAgNt7jDYfNrBSPCL56m1mWCsWn2nirX1JFLoNAHHFYBYrfnBSY8WxAS3Pkqigomiidx",
  "key29": "32hSX7hhZmzuN4JGinoRC19WDdYM98R9wKKkvLn8MG6y3DugGrBdTYb5iauxiJv2PZ4AsirS5WjwYoJFN8Tmv3hf",
  "key30": "MiWtnf5wGd1EXUgqrkDHEoboHd1ofNNvMCSrYb87LGLACMfkmN6wXEXJf1iZRnHeQD93LAUsENMQQXsmpZNPWBT",
  "key31": "3ausHKJPHPj7tw76ZbK9e3mh8aguGNcmsB8PvWCAY79qdSyoyVAF3uPSGe2m1JUB9PEkwGn1uxdJznuN9pLNPenA",
  "key32": "3FFAhHafCtcSNuoQgKTZqD799zZwFCy5c2BdHMQNF7aDZnjNwYvi7djfbZxqkb5Wfn7hSr3tDSi1HGfYuRS2tCQC",
  "key33": "3Yh3d7SoWtgNFNYB2rVARCV7wtxn3CnRgeVL2Xey46NvZrbyJuaUBWhVaoU6aaEZPNgeLnUrvH8u7D63BTDm1Wb9",
  "key34": "24pFev8CRK4yUgVpzssR2B7fjq4MkZgCjpaeTVrwx8Tv8RHFSrT7jg7ZshLzNS47Gg7ZbJkRUGyL8LbA5Kq5MeBD",
  "key35": "4FsCJXr47viSrkHzAq9eBoZKiUtYHB7VHLSbH4WZLw8cy9dWxUiqYWoUcgD1uLaNoJVqPtJiiW4ucHdv3LHiSR12",
  "key36": "4MnLZ94Avz2ZifRmJEuaK3YKo6YKFZ2PugcSR1PKstPAPzLsSdmDyagAiAs9j3kKtXHRCMU6dzYReipMPMzxpSbE"
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
