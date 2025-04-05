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
    "3VoAvkUEFhcMiteRdwM1UsKGXsdtd5dmtfqaPedsTUzuNWQ2FZsKtPxA8n7rmysYh7rNjFo5aiUzGnWZWxNcVPEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GPbXWYtDtKaUotZta9TLr2GRUEmN8w9W1EJFJQb7WCwNbmFBvneCBJti2HeymK7PAWBiQKizPxQbM2i8H2kzsCM",
  "key1": "2AjSRAgzf2A6FzJf9C8x2fX58jQfHXc1HDCGQa4s3HWeXysG3mgRyvrJ4GtNYwD917USVQqeq4XJgv43uNKYwMVj",
  "key2": "1717TahMszfiQe67GWSrtWraSYcZ9iZZBGWfTGpkB3bjHCsgAzLNx8z5Gnr2BK1AxRwVzJaAfGAJPPiw8tmUKQC",
  "key3": "52MQzSmYQYMNmsoHHz8D6YoDm5oZArapHjfHpjWZygsSgPJZ8qQ26tT7eG49cahoCaTJNGtgWNFeoNmSrtRKpfYR",
  "key4": "2EYmXDNaS63pRmigakVhjnLwv9vP9bNczzmuYCfKBXz5XbE8CiDNy9M5p1t1HTux2FvcKsT4cANaxcm2rN9u8cCD",
  "key5": "3rhswfzko71n1SXYEJG8utafqisdeMKhGqMKD58WqjbRYcU2pcLYQB29RQ3WFFT8vxbvRzKiaJez2uWTS7PBKntv",
  "key6": "3XivfeFU5pYk942Y5Y7qhNHpTDDoB7Ub2LfX9TYs1amhzocbnXZpPojFnCBiu8fFxvmrjt5eut4iXHyQbngDPiJx",
  "key7": "23TfL59PFrZWL7WvyH7sTXoV7w1jCiBv9x63QLJ1HViW8rUrtN5z8BVdeXFkrMqWZFgBKt3qi55UfvtF6i7pV8eC",
  "key8": "296HVPJLLcMNBmVv8KwR8QrQfp1mJfDh9tQc1YFAwYWbi7J16bLznD94hLNxGUQX1XppzgbmHnr3RsmSrXNm3ufF",
  "key9": "3XZ6xLcxZ1RELLEoAZjQqR2kgxHHvJ3F5waNzb3L3YLtaJQLT7hEhVzHdG4WUvSAxiqf3mBN2BeXeDvsj9sXTxtd",
  "key10": "5Ykr6bnj84SS3EQLaffLQffkLKFQB3hfbdX4eZjxjFXB53b9vG3iEmeA9yCXnRmMuiTMFoGkJM5pbPeebVhEvBwY",
  "key11": "5rT5FwbQm2vZQYodhLEye5XmvCJ5eo1NoHTrDSp2pYzoEgb4kDypad1GLQFkuAmgYwTXpzqxuJ1tvrmVsgC7a3vY",
  "key12": "4becdjMTwX2LDFVg4aB2J6wVbkM6yPMy2uHViu2yDVLuyb5WEmYo3TTJ5Fw2SMTpPF85Nzm3vDop1XpH5QY35HFx",
  "key13": "5rcYjkH6fCzyz5MTUaEpCPE3udgi1FKBFjWfDvXC19NxF32tRP2qRAVxtErEsxMMM1y7PVsNAbwKrtk8FiAHtnW3",
  "key14": "xnZHkNTQvqcnzpftjSH68sSxwkFmEQSGQGEhBeo1GsBgaJFmDyyKfS8jvtgR5FrQtdEDcMLGxSzk3xofRB91mXz",
  "key15": "GXKvcpnzbAumhciCsJxGrFZMMqfqW18QmqnVHEguB4xkdDxXnB9dTTjHuhpWeQEJMUKThCnxM6GpHLSuasqVf1J",
  "key16": "325fGjfje2dDWKQjxFkAjAj8HWvTHkNeEjE8MwxaKx1QFiAedRDryiCqb1NSBmu8VPDaKABbzWHjtvGA3G5JPnAK",
  "key17": "ZCTHxLsqMTobxy6tGZ5ZxfwL3J3ryTfvxc6CQA3kn1gSeEivEyK9wdYF7ZD2MpTdJ7Z1q1AgeRwG9Wg5et88YNM",
  "key18": "64TuyVaZepiqy7RWJbR4cpos53bxEaXNExYSYi8HgwKgksz4aa9zngpVSAsVhGPtimZ54R6H61jq4sMJG75xwuut",
  "key19": "3eW5B1mfowUE1ropXXKcWcmKGTwLLonCoWCkWaZQSU7JqSHsxU2DDfnmJHYqAFvxLBKM5GGTUuBgPdXcRLH13kKT",
  "key20": "2URUvnqZnLNgbHjKP7ZYCx9w741qBcjNSKGgkYABfVt6fqMXbmXx3fpi8KpxjbDbsrv8ERJ7nT9ivQhfBMETGtML",
  "key21": "5B9SMcQxvwf4tBeWejf9EgcJ9CxwdWrnFCrahC3hUPuxF9YbtckMgahk62jeYmAAGRiRwd23EVMT8juAqLcgg9TJ",
  "key22": "2iXdC4iWmBu6FvkunQ58aCL6PcBaPNCFUqd1P7XoyRn1KzEcufoUaKQM6UAguBxGj5gmm6QADZUJP4mVs9hhrLSR",
  "key23": "64qidVoVeDj2wFNiUXtohWsYPTcjyWPvZd4QqLgiwDNgLm8PbNTJCCvceYfcWH11GChEzJ3D8DEnaTnbnyfmPbnJ",
  "key24": "45mG2Fxq9Xx7wsnkaqpbwko7WEz5BzTRFQmQHQbGp2fd6tHBbBZXLXJjCmCFKiQ8vLqdQXmFzjAeKtY4X3goTW9M",
  "key25": "2cW2ZjYigKCUynWpBEcXhjKow9ui4A24Xxyhxih6RMuUyWrdN3Cu9H2wsyMtk8GZH4vAvy55ZxPiU1qTRCaf1pFH",
  "key26": "4pqyB5pbXZZqg328vRRda1m1SfyBn8KGVafsytyKfBu86rwDkdUkKbXamt2ZXMCs482pPN7RXg3rQSmoNfH7WciS",
  "key27": "2YmwUxw3Wei6bsNZ1EJmDyfYivGkztKqFax58AsL9Hfirx26bFPkSwmdrTDVy1QJFVt5VKkhx1f8aUdJSb3wYVv8",
  "key28": "39zM5NeSV1se3bqBwi2mcDLiDf8JrTjqZM8SFJmkQrSUAVQMC6WNNvmXi2kwhb6tFz3PK4UsaB7nUJ9EBoz9HW8K",
  "key29": "61xVWBtpU5KUtohXzwQMV8ZEBtKQDf8mbaezTsnUTjHknPT1yHpbJEsD7HNTtAw49ZtY8PPe7LPsKZwNhQmngasx",
  "key30": "EZ8Va1EP5p9xCrXKQWu3MtdFgFpmVxhnHY6vC2C9UXc7urYk8Pmee3mooPVBL6swAxRiSQ6HjShxgSYgieQxmWn",
  "key31": "588VEAUYJzPLtaHyMvLoBreEerxuMGLvSsA7Nycd2qUA48iT69aMvys8A2awdAwEVevA3hj3S1zmmutStmAVKaGx"
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
