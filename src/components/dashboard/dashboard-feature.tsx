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
    "5crnnepiuLtw7EcK4gsjwn7MKM5M4Tw6qTuFTcUG2L1AELVhXAEFg3FDCXjfPFjfrMmBizB2D2BUmjw7Ke7m9nto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FPSMHrsDXxwB1JjYRKqD3k3cjdQEzCf9SGA5urCRfzhC5K8iC9p1QPMHQyzrHHkvFqvB4yWbV2EaCsM5LpqwfiA",
  "key1": "SxrqTKz8G9bx6TZS7idVETNMR7Wh7bmdrFDpB4RCASW2fAk8huJGu9KNndA3yHeewoKD4yrZnrCesVwSc9iGNDZ",
  "key2": "2GFJnf1NieG6gZHdcu2aMYDwvypt5gxf4ZKaVj3mjP6CkDDuJKMbkL1fZUJSTtW7QyRYk1GgDRiDePpRYQtXKLoy",
  "key3": "QVCBh6Yg7k9xvBAqvAQ8Xg47e94RxLqtSqi5W2Juigo4ed2jV1tA6gaycJuho2WYhPp3QL2Eovu2EUGecw59iK7",
  "key4": "4Tg28qCMUSJTYgN7H9Zzbou9vsUS14QzrsQVE5DJi1dTZPnR6Jc2FF37r9deRaRcDcvNcE99Zx7LnTxe8pWdXJm6",
  "key5": "3EQeQ1QE7bEdoRA2ght3jt29oMm77RB3d47CSicKQz79ek4mkoNk5nWAFCT1AqQjRrxGh3bFPpDJoLrfLJo3obyv",
  "key6": "2VtsedJmiHycRzd5z8ZVow2wjN96qxG31rFLsLzJBPMSyu9rDVZvXK8thPrk2vEiF5SBcnBf1J5swb4Q5hYRVUjk",
  "key7": "4c4ZuP7YVq2CeT3si7Fv3yMrCqy35KoYft6En5KF6dMn7A85ktRbttDkqFBMsd6YF1YHZTYFm5RbEn39BtHmXm7z",
  "key8": "3epxtsSnmwu1ZDX1h8wypKFAiTRxRL7r8MSWNX4oaxs3HAtVYUSuJb1wQDXhjWgmxe7K9xo1hNgHPt1gfrJBSgWC",
  "key9": "3yEJHhWKZtLduf1MZ8GjGsWnUfzQz5G7hbi9uh6SbRQYnAwNN8pgBDvXxsWaaSErzkUCQJKm3wGbJHb3ntg1V4Cu",
  "key10": "2nhjQrxHKSAtA3X5pj2ts2xUosRrhsv1DLHdaRVFBXwYiakBDiafsA1H5xMTiKBpUSqbUg6UgiWCEtEoHwUTo7HN",
  "key11": "4qvnDJkBpxK5CG3zP81XNLfwULsXYK5RLQSL6goRdbH6S8m8opAqCRdbGnPv1xN161MR6PDFkzgsFczE7GQjpSMn",
  "key12": "qcxLbmyyWxoSwDNPxrR6qPQC9qdTS7XriNXbuYmSYvZuAFQmFTmSXXGGvXakv3p5EabYDpx1iZ1tVPjRjotWTtF",
  "key13": "37d3BMUvBbbnR6Rytmdp5aZkGRtAptf2QtrN5FVqkaqnMicGRyHqPpQyVT9tzecSv91Gzu8geFQctYZjqxnWFVr4",
  "key14": "4oS9gd8bP9vrwdiEDvYJLtdLo833R7aojv6g6UBtz5g8xJmeKhBnP4c91LXHZtsqohXDUMtXwD9YgnnPBHjP37LD",
  "key15": "46EhyWBgwwnPYzQTyyQKmDwUxmaYihCSFsnpgGPsH7zsBEMUUemaeTUtk6rMnKy1WyVAL3AniEfNxT1Nbg8hV35n",
  "key16": "U1Ht99BBzVZJXSUArQuWGWkiPEKJWo71HGz6jWq1pn5cNUi44tXWkwx4REQF2zbAtPnPSXC88WP6vtqAfoXKNfq",
  "key17": "5UhbsCDs7ueinoXGrf2UvVXxp4mPm8HxdsScKNjGk6aN54LMejNweD3YdWHbXj1RXq25QrBwoByUDobgSfrnqcaD",
  "key18": "2gz6uNtEfhpqdgkTVh2E3raXVA4yMKG6XYRfdP5gXtNScUNj5RL9d9pm5JiTKAZbzGu3J31xoXxwRMcV8L22dezj",
  "key19": "3P6H7mpEuHtrPkWiN81CBrKQawtzJkb3145WAvS864hoa8FDaWzW1pWLRQvDrwEyTEgTZXhGdEshG3eHKfa97pwq",
  "key20": "ziqTJwwNK5FS6FrUUsErvtjBaVZ8xWnARQfFaPicttdcEvXjnsfXerN1ZbCNBz9qaiHc6UkDGEF4YDjdqdC8cG7",
  "key21": "4z3Ns2CwD9cCMQmc1cLmmx6mdPWRaA2TFbi48MQ7KmZVGAGKRe4Nh8UVy4RAfCMjUnopZSiQxjEZDQ5XYLbNxfz3",
  "key22": "49KBr7CiqGfofo3ZGSf18JVa8SfBXfk71WoDHRhLBPKiWLB6kGSFCuKwxJ3jGi2KXAihkUEnNGuoVY2nXs8uPFjF",
  "key23": "43HJ9fDx74ZbLrfQNHfG1NvdgruccbC9BkQ8kUaee8gcXipb8EWVVXBpHPEu8NtkRiczM1jtxhc28BYmzCmMbGw3",
  "key24": "2HX3tLjvE9ycHXLMSQwPrtaKLBYSNcquJE7i3KedF3ADaVYFjLrDjovcPcBFM2JnXpm8fAQEzjfU1pYnnoXXwX1J",
  "key25": "5gn1L39bV3wHkBP2PRjSxCsAxPbHHdhrsgV6jwV15fyPQnH2o3vDBZgeWK2E9saZfjTEzmwyX4sRF9HVtbTpTewD",
  "key26": "5xtM9VdHkz1SMqbv2FuhhLSKCE9JsSMMa9zoqaseh3THWE5jv6cTJftqi93jrMy6dXCxVEEmWinFxzw2tc2qZfgm"
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
