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
    "49jhBBxcgmRJUX8EuKaFeV5bExA9zLP3v1YWDwrC8DYbogvJAP5vB6VLiV61H8ftm3E28Gsi4Sc9tBHjJWCshuuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XqqEkstgkJgS7tcnzh6LUPUBJYbnV5Qk7nN5k8zZdtdqdgsqq16Krgj7ghPUTx1NYszD8iZGDKRLTeZpC8CHdH3",
  "key1": "2UGuqnV6i6PvSPvb5nE4UpgYfb6DQmWhH7g5ojJ5jKkJxBYsEwGTzDPgU2ccodjDPtLHDFp5qyYTLQn5FTuQDbqg",
  "key2": "DwgcF5oepBQgXwS6ayQeRHofUC6RYNM85Vx1nif4vR6KFKqFA5vBqB9eAj3nbt3U3qx2pXg7jQcCorugcZx7tnH",
  "key3": "4Uhi6Rc6SYnySCJW5e4eK2sNvNyKWe6pz56rHombNLWy2bCBUAjoUa6tLNGRhtr6i5AXMEYs68D6D8PsAWJ1hU7W",
  "key4": "2uV91zLoakHNzmT9uzYkED3oTGQArbAB3YAXJTx6ePwrZqpxNS57wLZzmFugsFwrUZPBwJ2b8PPW14fX3XFgyQd8",
  "key5": "3u9rN1qWuKnFkCKGJmY2mvmzZ7mVyeof3Z5vKNbpWGvPLLpeuLwYyWF2q527Qtkuj2x1JpPhNJtNQ11tgxxeUt22",
  "key6": "KySiR7vcgdncwGimqFRV3ma2EVB7N8vcmjzPSUPgesBS3mKLBMk1kgz2WpCsUBnJGtghDJ5zb3HbJsXqARfoXdr",
  "key7": "2Qd8U3Ytq3iu4xybrQ4s8ufZRdDRS89sa6K88uonfx48xUJHG8pSbnKWQNHAn66qdmLV4Q3uVadHNvBMGmaU8HV8",
  "key8": "3TiZjwzE6HcTh4QZFw68bCx58wTuzvoMr4MUDMYWGHXJ5ycLpLvavrLP9TyeHHhtHTN1JzpkKDcozxUiUV1r9Hzf",
  "key9": "2o8kRwXANAUvUEvYLYsDRRmsLC9jyCu4irLZfaKewfS6ynyZrnh82YyWeeYYnjhrCjM1qSG44sCGCQ2ZcDpApN8G",
  "key10": "2TeLZtRnXtA2bhdB6EmZDtdu5cTBfMXKWLbmVWC6MUCwPU5xy1s6Q4kMb2DtbyRKg2h4EqR98XkXDXeMi5YEWXs8",
  "key11": "2pwpE9vWnFj5SDWRh4eciwgWEXuPxrM88NWKeKqDjwkw94pQcyKDhuaFdNSJcQdjQQpTwu8jKuc1Zf5on42iYNfW",
  "key12": "3yrcJS57S4MgBdgfiaHdvKygRtooZUrGzY2xvmXRBZze6UDUbkB87CrVxipcWBg9up6oxKZZcBjK2zWvtAavXZJe",
  "key13": "66fzyDcVmFA8JX1TJ8VfUE6UANNqgnBxRXgpRgxnTFYJhm5prR7HL2dU5E3APVsvC6uGXnEkB2iqL5M9gXBUwWx7",
  "key14": "53FPMEcwRZXejraaUenaQfiAUkEZWFAyM7vjZwaC4tRWkuKzRom8tHTDEG7b5MtPqLKcjpPKhNaTdUUPbWkeRLk8",
  "key15": "443awZFH194U7Yn5xENb736owTQpj62J14q3auipV2XvtzK2zJCYeiwxAZ2Qehxk4DNYvfwCKTxZ5jSEWsBVJJM",
  "key16": "2ohvgNpjjgjVgmkqErS3ioQUdepMstP3fNzBkiQ9f5hi8XFUeRBoZtRArQLweWNnwVCruTj7nxRBfZdGAWt5FkLB",
  "key17": "59S73aya1Ah2GpDXk8k6ET9duq6pTapgXimjwsGMo2Fyb6trsZ7GiQbNrtHKCtrW1HajPVzhgEZam4XBABXZpciA",
  "key18": "4x1UdG6eraHC23HdQ36sSbU53QGwLujmcmoCyka1WqjPGXzPw383u68PWe7hffq4MY2kqBNdbMdybsnePb3wDPS2",
  "key19": "5STa6wywWyXm6hM9ZiJVM52hcNeiCUVxKayWVnZgGECrqigWmx47NX51PyZPysLJ1m5FZFxJmc6jx7bEzFSNJTps",
  "key20": "Br3gcnJGZ2gbnWfCFn2DpNsBgAnowEi7C6zEuuz2vh7UgTGo2FKnrjqGrpewcJAQkuoV72UgEyRR9ytN4CnTgES",
  "key21": "2tnN7fGHMitx3K9zbbzqd2eRM7SBQFZXpeNNaNb7366HQnXEg9UfnezLuaXpSoBi22LiPxS78eM7YMvLedpHjEhz",
  "key22": "Vfjb3L97QtdHYNfpK6B7T9WZBy6PuuVLZBTvev36hJKa3BT98Nj1TQEnPVB484N8YSYW3vS9NKb3bZwGMRPRfSh",
  "key23": "2q87uvJewRGe6rb4wbnyAVfUZsjB1XKkeg1fiCvHj6LsAqZVNWcJtMJ7pDC3huF39rUzLQxRD92buwSn249PmBtE",
  "key24": "54jCrS9kuQRvXyXnNkSdcFBkpSrCAHEosBSuewQF5ghvnrjcwNDZcyCZ4uYhZ6xRr72azHeSkowWjpw9XnmEKjKB",
  "key25": "5hhVsZYC7QnaTokwcJ2tEJ6pEWFaJGPTKvLfmXE4WHVG5R7RBnRBcue1G5s8NM2QjRyBUZbuXtvRhCLW8cTNwZnn",
  "key26": "2Nsds5Mn9kyaMaoM9BfZYnyWb6Hyh1DCZ8gQyvQFsdwaf613K9uGhz1BvHYtQrwN5KDmLYhiDANNiVcCDqaGFLpZ",
  "key27": "2qxMbRbgs7yxWYDRXNgGPrvaH3UpoGX3GbxdhF96bTzDs3SCDHELyxbkykNyHq4UkDAgUpWdJuVVf83gNPXyXrww",
  "key28": "35ngZPqhU574MoyWsyDs77TKQSifh4bWYNtZWtL3HQifqdc1WFjKAE51BC2XAqvi7Ebxzqvi39X8X2wbKAsiofXh",
  "key29": "2QMAA6HBq2Xi2ozBTnAU5aC1K7ps5MVca8FjzmB9JovavBQYodAHBuXeLyvxXECBf6txMZMZ8Aahuzo4L7kputZs"
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
