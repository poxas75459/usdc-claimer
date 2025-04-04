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
    "4GzvB6S4QR4VFt5GpBVndfbqWDuhpV22KtivBTf8vy3pwSqFkMcovhRSQfLyr4Pc6sQ2BBCnK2TcXawwUf2cL4wA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63butT1QZ1KZwvfbpmFcXCTMMB2fP27wKw25oDB1Zq1zhWUGqZs5Qw9a6rn53FQq5NwFnp71bBazvBmx9rXyEmqt",
  "key1": "v9ZnhTpu7arA8MsGYi4h1XF6FNChEPdtv3DUfRk6Taj7Y3SvtZnTbbzDGv8vqLMUuDodHt18jQRdsKD62M5Vm2x",
  "key2": "VH3omCZFcgYAzxccjRPqGwNenwvZEo2poNdinLjwGzJd3duiW5t57dqkv5zThPEa34qWxPFTsqPNp4gzaNdFr1H",
  "key3": "VjiQqc6CBBHvhnRC2id7bnd2BPrr3gDhZrohJUpNgkJyRAYLCRkuHLw2x6bdyLjZcUg5tnUn5ypLNyvpup4zh9u",
  "key4": "2nYY9UXgktx9DCgQAzArdfdp4mM2PpH8HK4H9Q8AzustcKRADLgTBP5szYga4sBLQ4ok8RjfB9pps2iVDENudtLq",
  "key5": "2cKhs1j3XxUuR7jNGK133ZTQnMQ8n813yVxU18t3rjisi39iVYwxLtVzn2yzqkM3WKMkpRh6DrVC3KCuZkpmEiEt",
  "key6": "3VjQsJysWcpeTberLBg56hEDpwhnxmKKuJ82tkZSiFyL5uJAa1FnHrdouEoUVDpK3zBaNEv3P2S4AVPuQVJXm9ah",
  "key7": "5onJYcqwkkynGYwkA9ooppc5ykWrL2ozdjezt2kiZ2rQ7WKtx9saWFQjzkeE7TNeeFy7rfKXacGUzDxLyS9ir93z",
  "key8": "2oHacfYTXGYNBabrQvbXmwTyRkTYtt27eH9hTq7TDJtr8p9HZA4pEYmze89Xu8C9LBaS3JhUTf7hikK5Ayd1ScJM",
  "key9": "3S645TQJSFQEa5VsstL7ER3tTmeMyi4ARKiYkBkSwsxUta7Ju99UFgB6qSzoEQYpQMfZLyS9CDC2AAUpWq6bCwCq",
  "key10": "3svZr9TXeX8i36QwCrXmNvGDu1iA7kAeRwdLVBVuQVgubTNLusMV5buBMRwDgAwNZXT9DqXvZo9MjV4ThZP9BwLz",
  "key11": "4GP5frCUiuwJu33rQgt3tkoV2EyDuyCspryePfb51fMvpTZc33h4kf5unGGQaNeeMcavwMN9E1jmarS2TampP1ye",
  "key12": "WxvkngmiFpBA5FWTYJsdXUizuCZ9hjuhJyHyVsPag9tgembFuiQCXSU8GyXdXkgLFGnegXfDrxxTX7FXZr9pP9e",
  "key13": "27XpEMDbmKKBVfj9MxiDgrBv7pdGtWx2sjvjBc3xk5BvLwhVQLPeTm9AjMpVhZwEbshuZrGCNbhsDRTUTPmXgaU7",
  "key14": "Ty4jw73CCo6DE7JzH3EPt3ZbKJW2H5zBmNNCGy5xLuHMtfgBJJWiy8mw3cgQX2JGAHNbH5dwLXu9JG5jnyhTvVo",
  "key15": "52HUmTaLY1PCNEUaeDCKvZD3iwerF7esp2Xm56fL1jaX6ns5FxhtufbEDnZfHh6Qp5JWqWXJ2yZudR23nj3aJoxk",
  "key16": "23CWijwAx1f7A164mq37sdHRpiiTFdDKNyYAvHQbv7NKsxQkEnXij5LKafMGMgaQPc1yzfkgYMBkg8pByZCGCb5W",
  "key17": "AUNo18jmpHUZN11td3V2uXgQfHXo3iWXkvLCEXcB8CxYR2svqfGqwVht5iNKywmWgCvDxNaDvrsXiGT8ajPYLpE",
  "key18": "25WHBMkkqb6QWWZ1BFfP3FcQkx38tYNAins5HvbtxXintY45FhfzYhK4xDvB7VUUL2usoCB4dSbqpttL9CEVRMEd",
  "key19": "3uCSBE1ifcw6razC7LFh3w3RdisLeSPCfpdQxcPAESmBFr6zULFC7sdcWoxJSiMKaA3znpwQB38FY4c8Sr1rFVEU",
  "key20": "3pBRvjRoeQuSghTzHbEnzgPdjdBHebm7uX1FttxVoTkzixecXMhZer7PK9CPU3LgCU8zcmTN5Lt6yJ8PyAMy46Ps",
  "key21": "WYV6wYPma8qRqnrF5BgVjdJzq3XHNKdhdWuTKowdTMVTZL9cnGynYrCKw8FYpg67GX1xv4G9NqR16WwfbvQmUp2",
  "key22": "3JCTGzBn1grC8xLH1As6sDq4JQFXNfZx2T7BpZrv1fpwEjVyLMLUPWa88HuFg6gVb1C9oJa4Pr3Fsmnz5cFYYM7F",
  "key23": "3HoPNgL1iDU2R5Ema2nyaaeQQi2XXik5eiCDurBPQ9TpjEWF4566DnR9bG6cERJcAtD5sJxs5oP3aHoDB6HKKHGe",
  "key24": "2jgTqyKND68noaSqnJDphC2arwZ3jDq6Lh9JkUSchM27HfDXfi8uNeT9irUhcrBrwjMVeAKnh7Z921wMYfvd1DE2",
  "key25": "3xGi2L2JMAWR1uzCUer2SKMpRYuj85AKBeL8ssfkfeLzUEZZq4Nn9Z8jBaueNmUPRH24exyXaRuSrRTRNxchADFx",
  "key26": "53LQgCErPWnbDTeD2Kqpj29fhrFFUkRKiDKYDySsngcoF9hbM8EKdF6kmPZGRZSWgY9rN3GFu14A4DfiAJiy5fz7",
  "key27": "Ahfa6n6TzgD8ATvRsN4vN1brJfy4BNPrKa7aPBv4Ry5CSrSf4tT4ss6Sc3WDkuVXD4seTRs7oD4HNxbB96aPXcr"
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
