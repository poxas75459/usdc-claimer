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
    "2ccSKYgTWEQhBoJ7BgJgEBwTQVyEoLTNdBijzT63TKb9oZpysZb5Eoo6PMXPjHjRVRcoVmz2Siv8YMrJTB7EkxgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TycNWYfnbW6yhz6FotXsQs8WMHgt3thEJM2HcPSzpdaE9z2jUVFp4upPyNMyWi2d5bVGSmFHaUAWejfdcnM75qM",
  "key1": "5fyoN7UT3X6FcNxnbM6w5kgzBeQcuyghcgrtdwF5xiJsFJJUzrcLvLxYX6hwuYHNBzzYbyKHDFa3mhZW4vS6YYAA",
  "key2": "4jtywFRVMpaS6yuk4U4Z9KAwGS4bo3DHbJCjqKPMVq8jWuiFKaxLWndy1LoJgtHyEYcmfmYbora2M4EadLTYNBsx",
  "key3": "2K7wEZgq3iMBfEKiqTry3EEAa9XvcddZKpmyRFLPW2KSs1Nyz9sNrNhhee6WDAbcCAWLdBnGi3tPmZ1Lm7bM6x5f",
  "key4": "28PcUvmbeKnd94tNaRD7VMk1Zi9vyEvuUiC6y5d1DQZXhBKaAHrLJGqqR8hEFjqXGQnspFpF9u9gMuWRj4veurdg",
  "key5": "Sq49iEbbkjnv2zG7kfKjn4uSTBTcgeHfBuRXeZ6osX1jbdkGuTWaLwf1rABEQ2tC6aFwzazDDW7yEebneFxSxdX",
  "key6": "4ynadNWchxhSeLNk6TeKLWotobj76NejxG7TMn4tdBeFtFzBm9YPgVCxviAi9whfSt1ZVKfn1zHWNmsHX6GgoFy2",
  "key7": "39PrkQGDK9DGgvCxsivGd5yFPUohc15nwsTNzwkQCCH4CYJNQzEcrLQD7z7w37AcYqPTbA7esjA4yBi8TVrHqK2c",
  "key8": "3vqZSgxvDSRWLKqg3eUAsgUWiHn41onLWmuYBJGuGjrYBbTdxfXZQ4GQLiUke5BV372TE5darvfWTpyawNQDMYzU",
  "key9": "3PoerraWq51VaMhsWYqaZtYByc1H4LphdMic1oxhtnxsWX2XqPE1HWFG6JDQxAF8TXuurBUyER2t7Dvjt2ctLE53",
  "key10": "615ymKfgtzGaid4nbK7UouumdxPUy4BQAcCMLCL9pTshCgjKqkhE4EtzGU6qbogqqg57ceEVQQi2HueRsxWYEQUK",
  "key11": "52Ft6Pzwty27Q5JkWG7i2a2fjJHzmgZJKqN5ZDQgz49ysYivE4gH2MNi9dpWHrLe68gAArEg1g5zipPFKdGkBpe6",
  "key12": "49JSifXCCntNpao1a2jHc6sVRcSyy54mgpd7UfwTeTar8fS32ewvKf8mzTHmC5SJ4zNPYrzg7X5Dh3GH9yCMtt6X",
  "key13": "2EnYaPbkHaDuearrdjRUkYqXde27PM1UrNMq7RuXgWbqvL9VH4LSrfh4XnWqsGkR8ENfKskNCSu6z8cWucQyr1Nr",
  "key14": "3FbVmUcEMUnS6aAHCu5B3SUCWYyDbTtUG8yoYT5qB8Av1aLvTYxbA6NoX6t7s4KBUMktTZgMgDogYLTvNEc1qwXf",
  "key15": "3wU2DnG4XBWoSzmnvvQcnuba85M7tGZ3v4YXJYCweho3DLBksXbzDRDp4ggzz3MvMQD38mszk9saNWDoMdj6XKia",
  "key16": "59vQeYnYtuwbbW8Am8vBnHyssJxr5b8yTPbfvzz6awWQRHaAivkRWjpACebpHTkuXB3LG5HhSqJvndaPuPNgtjak",
  "key17": "5dJTddsp8PKgD87RqSKux3yXQZ6tSUU3BA7oukyNVQjQr38AefkE5MqqTvBDHMPyxAp3AwwCdsFpVkJPhLWSdvR",
  "key18": "3c87bkbJHf7h4dwxo9hrPUEjFxrCwg63Wp2aAZUXmXSMjamPLXB48BmGhwfbb9o2e9gMgLkZAJaUTRhP2H2N9g9f",
  "key19": "5SZscP1DritMaH4yh9UCvYLWoTkn7KVS7Vdizwy9P2FW6j1p49XKJEWqnzsNFy6fm7tYtTJox3YmY6hE3Ts7RXQm",
  "key20": "4bSFrNYdqFRpHvmZGPurCJisxLmRo3rhiDarDD2Dm717WtqFa4yv3C55opZKT3rKeNGX9TnB6pdEzyp9RG5vQGQB",
  "key21": "MGZSMKHRRt3ey1Ef4q5TgZSdUn2xBxLGxrVLLeSqR7kAQkpud7JJs1zsPPREufE472RPab7qocoEhmBzF7wFp9j",
  "key22": "4Gkszm7KyZcBXgt1Ck8n8QWHnr1kZgTksQaUzYGMXasRaVhRg3EqyMuX2H1QDvUbqGjUWDXZ6r9YTRk1satXxUKd",
  "key23": "rsGdPtXBq3RunxZUbmuEmpogw5CXQoT3VZ5vLZv5afqrGq5N7RDLHvQxHmxQ7XAth9hNUPmK2cNBCtwcpFerm68",
  "key24": "2hobdwABVJCsPwNYRpfUwBrxvVFeQbjseqwFrhPUyR9fGKvSq4qKNRGF8ps2ks6vC9RUptVbeW71J9ZQeYt23VL5",
  "key25": "5wMQ4CpcSShU6FvEvK2b2So8h5b41KdqzVbihetMo2KYsdatz2SLRkwvGcDh3q94tyqG55aNHbgJUpvebn6jW2WH"
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
