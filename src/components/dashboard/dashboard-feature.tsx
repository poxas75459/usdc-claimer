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
    "43XKxrRoZxAWUmCEFQpA663UwGdMspfzWh7K6ej7tFneHwAKqWBmK95yFXy3GfVMpWU2EcDPmWFbbE599Xw9Gqr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SbAUHN3sGKmmy1wigYKx8K5bk6ygrEf45vRaf8dq44NAyMYA6U4VWZ2acee4PYBX5vp2PJxyABi31x2JEB7ggeC",
  "key1": "5TrKwGpJZYYB2vtwDFnVud1LtAePWCuxMjj79vcgcYDmk5rnEpM2HNutWYRwfutmGDFeSo4LhY4FxLkoNX4scURJ",
  "key2": "5c1No8xC29qyoCuwEZP7SZ3vt1z5XCnhJeSD9qbHsGxuFfhXLDVYv48XCRNmtmzwKAfvXCv3W3imWRVbjqfVdSX6",
  "key3": "64ejukifLiWpKQjhMejmxErqCghwxCAWUy9bsCJqKckKGvfuAVwpMwqaoM6dRUUzvgARu3ujjywWZqamd1AkQ4Rw",
  "key4": "2k6H5K9xeRpfzb667zS9CeQPsHmYcPxnQmh866ox6MFZDqYj1pR9YsEyF3ncsQoUVQrpogHq6JUDYv6oGC6dLgwL",
  "key5": "3CkTrH2VfTgXyXcf5un1EFqL5X9GiQBPA5ADKkC5USciJFmEYEgLDzg9AycZd4j6waTjMwGMuwd71t7bMKWqVsou",
  "key6": "3Mb9aML1YVyPFht6ZEuDp4sFztbRXGiSo7iF6jba15XkRh1jTgkx5FSx8etrRud8djG7j9ciqWeUF3RY35eoAqUs",
  "key7": "31gduCunXqFDa1t2FC3oYdxYccUeDKu5GMJytXYpmMH1C8mzad4xKRmpyd4S4KpE67MGT7p3TCF5rYViFaPaJ2yq",
  "key8": "4YsPBkNrcvmpADfUAzGx8rfXNhyKJd5b9P1pALMkb9rWQtLgr7yMFD1v5GFWy6vceLc5Qgi5G82bMuxpzc8H8pSE",
  "key9": "3Zq5er1ujTHSYNARL7Nis98vERKsZDZHjQ6ahUpWEWuZTn7gCvwwEJbDDSLfjVHgFEKAZQmQtitkW5mkQ79fi29M",
  "key10": "2CYrsnb4EEyNH7ykz4LXTgrk1LW3GKSHcSh6BakSWuLxb8FYRd6TKJjkURYdV8hMxpdM557A6yiApYZwNg3CEgAw",
  "key11": "3VtSMyeP8W2trJS2opp3Qcm6f4tKW4dUe1J9TvpfKZ4gb2xj5V8FQtDajBz7f3iFdvpr5duf8QdMTUUpJXBWBzf7",
  "key12": "4J6CxJpAxSFNatoC4juG1s38GroPjvefC6Rb9bemgEpzbquPsYBTUvt8PXfYKdZ1bZjM2EG6xUMErrQ4UZqmfJDv",
  "key13": "NR7QiyagJEkaKWxugQKw7TeFjebpwMUH45CG9onrJcVjk43RtDjjiSVeMc1fcCUPcFx7WRYDH3HfByPNDdt4mG7",
  "key14": "3JLMPv9rZZ8bQq2sT7qfxHwEX8YPmdv2nbgTofPTG7aEdXZmGvLMQmCtbz2SxxnyjLBNyhh5id8uB7niJ8b1csnr",
  "key15": "2ju8HfcQm24DS6BwxinDpFF63DUMfCVBaWtCfKYhsEhkog4Kokk58Bw4rr3buAKVF7E2EfWYudYgB4xx28osx8Vc",
  "key16": "4ouZuDLtrjAZ8qyH4xdGWCCJyBkgEpyE869eTYw9ZAn5nAp8vWyxr8Kjr9YiZBxfB2nRtQY3PNkDNKNa8tTtPWjC",
  "key17": "3yhCefdHcvmDSiTxUvGxZwnkqYTEZ2uznPyyZL4htoTovrK1XTN3AafZ2M7jxRaQpfCQ3dgV5z7rwVr9n2ChWh52",
  "key18": "5QELLvLhUi3462wX9ZsDbcnm5vfSqQAoJfjJrKxmSTyM8NNHPdYsEQnuE1rSVrKLrxGY1oRAMdB8y6rZDCKiQngV",
  "key19": "54DrtSN3TK9eaMqpByBx8pWiRbsnafPVAX6poJA1Gg3pLVTgueCymsd329YpCm1Duk2nnJWxUo98CFufQzp5BTYP",
  "key20": "3XWaFnr597qaE174dsXEEPA7Wwa11fxTPasYoXUqtn9N8roteNMbTUeoSVetwHRKBGQP7wqSpDneSuhejoc5AbKM",
  "key21": "5FiBdtefSjjrWaEZNuYjCP3WbotaPSguz5U3NG7kz83pH1t7mT8tRiYHDgDmvBRtBKuVtpN7k58WMqRCxLRdfW8P",
  "key22": "3MWRSfaVQ3Ae9GxJjjLyJGfDoLemRfywPhvXJ1DTn6TAgjseaWmMH6Km4ztQDzkwbu1EguTwwT4Vzg3wSm9MLxTa",
  "key23": "2hnBMkPqKWMmK6CHR9ZUsS4fTNsiNMAxKZhfKwPmtcaVjgJdVxXt7kCfzrS74eEAsYEtUSjJv6FU24veZbB43TwL",
  "key24": "3wvNphCRVdsSWpVvjd8bN3Jf3pZKTaqLbYk6uLh978LU3UMc5pUr7vkLc9gX17kzDeyH5mfY2wP1p42FC61jf6wY",
  "key25": "4D3nUd5TrDphxAPfJkovcZCWL6KW5tcnhzdkYAYJxoFDJNs53qEWg9W8ayny3TJrdwn1M2N1HzJeco52sfBXSYaw",
  "key26": "5B4aNBwHGUExfmn6qnycNKA7M9VkJeAskmv5efDvmzxbd1xd8k7Ex4MeLAFngC1HfcfNthu7bbi3nyKJPRaZJFTz",
  "key27": "4C11kqffhwy5SttkgPYyzGdHm2ChUJYPVNckV4mUmGqUQJkFZi9472d5VTrTxSW3njpouVWDgCUkTssuQPACJjg3",
  "key28": "uHaJ84YPj3WEZbMaXrYH1gMn9Q9QgM51rYQ7a7ciq35d8ozWjrfpbhft9YYnQLN2MrsiWs44mqT3Btdy8U986Vh"
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
