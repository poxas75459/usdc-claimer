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
    "52n7Svsj84ASpFjEPtse4BEvY3gD9eHehkF2UWWQ4RVEdfE5Moke9wYUw9Pebrpx3ZXiEG7T1Nnb6T2q3GLXoBHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62QpfxRsoHz9xS92BZGivCbcdZvrZ4VFPgiKnPtcHkyoyCDcdmYFkAnyiiS1f9jZ7vFW18emaaFzSsmHkJ1HaDbD",
  "key1": "3xoo36s4mzZxbhVDewgqAV81P3neNbxdXFcDwzBNmdnMQyh9yP36fLgACQAJWoSymi1Au1iRZEg7Faa3aBMKv1nT",
  "key2": "2GB1seMZzQ2Z62NevJ8MyY2vcGEBGAshQLWSsyUHAp4MxuFSUdiWc8xVcSzCYfzEX2nem3Fziu4rAGrLpdR9Yn7K",
  "key3": "8RBMXyZKDDmzBdEZd5q2pb6HFmcF1ydJjjXY4jBvRUR9q6QvtTGf8DsiPNB4hVbNo2GRujXUBkwnBfbFoNMvfWj",
  "key4": "gwqXTp6kiPbQMZSRYTJVGkQSub98Q7GAr2DqmkecwBPF9GbthH7pJPeYD8oLAueZuTreHKX5d7rEBGfHmrS24Yz",
  "key5": "24WTTPXaNsfDPt5BeuGQAxjnG9XC2sipRga7tKNH1rUuP15kpcnaPq5NAREGBaRtqVpsfJPvsMuLch4M8T53FRWb",
  "key6": "5fhrcnnsCAnQhrzP4K3wUfGKknFXCmm5DN8Uj5USwzUVttf16CY7BfnTPAPTegTik1AccFSarJ1ZrfgizSP9tvc8",
  "key7": "2FKzVJ5TWiQdh821duUudSeDdUw3rq8EQkhSeJjpuXBxDuwVcevSLHNHxa5LYCP3yVCZjRuaUzW97NgQB2Hu8BN6",
  "key8": "4Zq4C63KyKtLo3sfuStcEf13b1KQgWvtwz64DJ6znzFog78SYPZ58tJN1j3g8TgCceuXBn11a3P1d9Wy2pB2V4qJ",
  "key9": "3GcGEdCKRAs597TFv64rmCY7q8PYMvqCXe9KXfV4s16m7Nm9dMb7aPBQwY82c1FB1oNCLfVnzrKdkwdxjnN2K2Yh",
  "key10": "2Fg6ifmXuD1qMxTMtSFmBSo2JvcntJf8YSkR5QQtr2zEbfaiBwRbzSTeN5dYKWvpQs2e9F2qCzCjjMMD1hDb3Jzo",
  "key11": "65xUJioU7ZQMtaJHDnFLXiZuRZp5L2NvSawRfWCdePyEpoqJfmxiek349zQ6VTFTATkDPtkXnkC9rtvnJwdQPza9",
  "key12": "nzYebeW9UqXiB7GgMq3UnB1ZewkXq4y3yRvXAUYfa3dEg4BrGDmhgCcGDy96Aqsg1LEAMbW8r45owiZmL4gykUU",
  "key13": "332RNeXSjbDfwuDZpJHhTU7Z9FG5KgNqAp9rwYM76ZfE6d4wHpfNDbyqKdkWFj45k8YNBXt1UvX1fCLkCrLtN9pm",
  "key14": "2YGBMhhxSeFvBkYquYDCzPaTBWh66o6WNzM7q2qvfD37ECJri8n6ZjWef2b55LbRVYc9sFwDerg6Q89Sak9ga4WM",
  "key15": "2DVVqvR15X8vH5mWtmgS4Fb8xbut1YMaS8cWPd5J9b6vFfUgnxW8RnpDN42fkBynMsRrjUXEAWm6gLCaTiirFueg",
  "key16": "2No7MRZGsbziFMbMnP3i9d1VsDr5o1ZZtdPw2uppcALM3eoKYzQxVYcHBaagsaR4wENHgyjbvqYXTwMRYrFbfcb8",
  "key17": "55RwL8mGh3R43TNmx7qrqXLMZfTKfjthmV9S3Rpd5sXUuR56QA2P2k5aaLHRQ3qu5HiRrpPJSK83vYk3YLxrZ8xZ",
  "key18": "3rD3so8jq9phu3skV2c5UQZVWcYfJUbo7xpsQtdmTZszPbMHnQANy4HVgCjBYCLLt21yyBNyGQw7PKaKdvCt1V1P",
  "key19": "8DijzzcacHAx4hiV49cuf4UEdvjaERmEt32PKoCYuB6DMjberTeB3RM1tRRH2H7m9r4XZErgM6nxx2YN445Nrna",
  "key20": "8Y8S87nbYsun6QfbykxmeMWZCRfeWZrYGCGR32kGgioagykpe2fAeFFRfZt8aCzRq1CQG5Re48XWKnjbshBa6SL",
  "key21": "3WvtBuFQ8sz7ymVstCNZcTAAe4erNDiMSqBeCyGnNnabnvHJthAb3tXiMxi8mYSvNaX5GwGerEvnL48ogY4nKpsU",
  "key22": "36LKjDiFAyd7nZxxeLH5b4LHVYNDH62tsb8vxnUDu3xgiCFWUY7x1iR3kuL2HqzNEanvzkVZqUz1FXQTMkdNWp23",
  "key23": "Nv2QAa9kUefF83jh3MzdAFEPrWvHM6z85iPvNHP3UBRQSDsmdD3kRm78iTC29MEzq538DQMundoLFWjGLSUFEYZ",
  "key24": "4rEo4e8y5bfPwDf4Ln5U9RbTdzKXA9NxbkQLtJDRFp7wptaWMRVATb633YxE785z357JEtvgsNnZP7oCUmBF3wtQ",
  "key25": "4umKQs1aQKyjCWV8XUrN34SZP9SAx1GZomD2r1A2C1mRDFAcn6jG5T8qyvfByeinYCR8t3FxKiHyMJLgBP43gsk7",
  "key26": "3dvR1bbW5ARMPvKNotL7eCfKqXUkbod3yEn8fLjgUR1dkYUuVLjSH7zo79BviU5zxqWv61iL1pg7SxpuP6Jx3irn",
  "key27": "5sUoYX5YguLRuyQx7jBCMNheSjc4HmcxZ3cezZezd6mrgsytXsVPMuhhSSUNv4w49kybu5DCUBzBXnMZC2K2EGxj",
  "key28": "2V2XgLLEVAJWnEonGY6KYWUmMXKbz7LhZdgsTJMu7JdM4E6EXc3FZDXgNgT97Zod5Jq76SdtHsfPnZLHyTD2F219",
  "key29": "3E3cZM6sfvWXJsrYcTtmqfxnKfKFQF1qYEbvP3EvkSZxHaAntmUCpFpvUXo7f2bpkfYCAoxjN2cj5REp5JfGwxQ2",
  "key30": "BZEJXTZf3FSgWZZe21EZXj5wkh1LascTCZTi92H5QiEZiCSd2tfznc5c4HrU3vNEW8rtjonBZDhiAYbT9CZ5kpD",
  "key31": "5ZkbLhjv9n6Ebpu5Kj7EzdXGUwPzr4wd8smcizWeaDPVgsQpu5XZAyGd5Zbh8xTrKgeycRAzZAxs7ZdmYq5LXs4r",
  "key32": "62VLJYxfKzVo9WuYaeALoe744NfJqMNQbdqaW1TN1RA4bNZjJvYuxpQzRfuDNcvwe4dXyfPMDkDLqXeEAtoVnwAR",
  "key33": "283J3xgka4h8ZcZZdQzEftuSbGwmEEbDWX1SteQENyfMLwU59RQUkjxVqZxacDP93hG76U2VPboDAo27Wad1GP5u",
  "key34": "2MCFRdV5bd2v2kbEjoDkK1xvAZCFhvwrp93Y9aCrAq8Gygbd4UArW3c1woSwVipnaCKyG1kA7LsWz2H3QqxGNQKT",
  "key35": "iVRw64P4AfU8e2BFtJXCfUSufdpW6Jze5aJf87tuJvSxpZduVsCG4tqLrNEHie3gD1wPTf26VxfoKuABRRB6iCR",
  "key36": "3Df2KHm92JQHk64uzTS2EfdTb2erWyRDQeoA3mmCqeJ3UTZV574aQXGRVd9YXgmWKh961wqjHeyzR9vumb2Nv1tQ",
  "key37": "5DSrDmSiBdKUvDYc1YF4kTqFt2yEf5Qq3m6Y9jsUwA8ZtVydsSvju1uwythQpMKUnAXU4KUAJDKQtkcFcQaNZzoy",
  "key38": "2tfTPhhUQ4YxfhjUffavHnfynoS7tQJ1HLKPnnb4VbTkphQqS1zDxXoFos3NQB7ywRGHvz73FFBLqFTMTSCVBR1w"
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
