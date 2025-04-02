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
    "514LykH27bq9SLxE6ycS67sCutj3AUsgR5bQk5tzRnuYc58kDnT19YN9g4i5hnMcYcLtn546YbETFJ8ygfPbb6hv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HPuqczTcLq69x8mSiwbDX59XRxY7CmMaMhuyQZSdh51UfkFoj9QG2vP7f6tSjot4Fm9R5Zd2JcPk1tCSANxMort",
  "key1": "5nk3y87aSTXF6E6AbKtuvnEE31AK7mcgK2N2VH6ar7P5d7x9DZbfvJXbfQPHdGvtXX34wSbgV7dWx8Z78QjaqRai",
  "key2": "3FESag7xZnfYrt3Yy8hFDQkquqzVF6mTg8PEdpMQGnsfWh365V3AiqGE8QLixSBeSeiqP4uMbdhQTR4rJfAGi8q8",
  "key3": "4YwE45Dp4tN19jDtxzfT7RdzwCkuhMqUfpULZozEWR45tSANxEKBk27mqN6FJ28j2Es3KT59yEUF1xvnbLSbMhU8",
  "key4": "DsE56iR12bbr9X54rRrqNr1VFgZdTDzXJtudtn3zBSz1SYy9xTAoQrPbHEwnngkVExC6kg2EnrDykT1vdvsPA8T",
  "key5": "45nYrCNXVsm2BPZCBkESspCjE3xeAyStx21c7qRRLQR9sjnVbsimiFBBkix6hMV5T696Ny6AvzxvFpAKvLspTWo7",
  "key6": "3yVxkWKnzN9WfoZE6h3xv1coXk8nXRWhWfrAt274PMCz6qjdnWWeUv9VUCMc4r11QUSQaLtx3VJx8yYRTSQGAhm3",
  "key7": "54brz4FJX91v26KNkC7mKHu8Ktvqk7ZSvmuNSUxHWNknCntEhxjsuLRJekVtmcMfxtFoiWcZe3NRd2NUyH6jVVed",
  "key8": "56ZL8nTKtUUZ3YcG31rfMuxj1qdGG1E2JGcLi2wGCZioaHKSLSWxQ8RLv6J5ref5h8eV8TyG2JkWYMk9Ek4EGt96",
  "key9": "2agLTj3XaXnJHwVJLViXvUYsBHHx2SdKNW1bZavNC815vnm2Hb1FzWg5p8KJNEgL5EuBtbSyv8kEyQGdAQfUvj6u",
  "key10": "3P8rNDr3xTYARFW8vLLTgRtUoRZfmP2ewdKAyt1CdpLbnKjgCvmYVRyKFc1pgh9ELqQthwqD2VyrgzcBvxT7iJJN",
  "key11": "5fQt3YwJ9krY3JSKekEtdieC4mM5Q2mfRmnphztX2hLENiTbcxFAk6zAtDAQqAQZEHdgxdSTk9eoXfVPeMxVj8Vx",
  "key12": "4dUESdWNnQGLBwi29m5nXpH5JiS8gsy45J9jzqM7CzJtyeNSeazxkqsvr7bnJcUBks8CGNmWsM8ApemEHZsPUL5q",
  "key13": "ZL5faek4qAif9v3BEmx52NWT6GXDBXvtF4W1LACdjiZyX92pfxgf8PRXUZYoCy4i817TtD5U98ceyRcWMj4hLz1",
  "key14": "4JmZXEhPUZES9dGiLU2vXNMxdA5SPfHexDkbsNGze2QbJt1HvLEnpkkXKvpt7Dgu6Ve9tBK3B98WPXJhR6V2EyfK",
  "key15": "2smh2fskhLfH7Lw2kTpTdci4KH6uspRP7LSGiV1aH3fWC9PgjqLSoNqeYPwK7QSM9NP1QcoF2divyQZkfNeY5gDp",
  "key16": "4Gkh2owGU1P87wniyPLRcynWL3jJpPZ2wcGXnhZdn7eXCLHvBBcdeiTq9gm8CqUY8DapiSoLBKxXvBDbQEhjFFna",
  "key17": "PZubKG1tkNqT8sEGbdKRpzjJubnDKTHzHcnNuPNHaqyY5xbg9CT8fTUqkNfL4ePnEEFNhMeRVQYjNt3v7vpp3Zd",
  "key18": "GDLfUVKvHcZ5HBX2KCFL4VMpsCXFU5voAaKxYUagowEXpHZDU3bmmnRupYXV8dSZiFmvegzCR7JPjK9BZFSUuG6",
  "key19": "3Kq1yf1pyFgBT4YHMo11gSd6QLBRTq8fqjtC5ZdkFp1BFiMVAqDorYZAPB135anoX8GBVoKQW7MQSyByu85RvMV9",
  "key20": "3uCR5wfakZKqPMky4wehdsgvoBUxxNREDKH6B9jqM68zz89X4u8gkT27J3DwNhmRSDRxTtHyy94rEzFtFexS1Fxo",
  "key21": "h7GPNmHJ4CazBpW9QqH8RaGM3oydyQfa1ZQX4mUVMoWRwmRqR7K5WFZF33eVYCnUMs4eUQSUBaWT2pQ2QLi81jR",
  "key22": "3qzTpLvnGqe1Am65UK6P9CTpkD1ejv9nRLsAkobio7fP667P23mhUT5Qz571RiJJBfSGiAfnLiLBvtLXTQC565dN",
  "key23": "2UKvPoXAA6MQD8gKejLBocqnaFZmApuGnt9Y5dfsAMjitEx8321fEEPjfJaDpAdaHkaoPjkiWT6snGUpYQKXbicw",
  "key24": "ugwMzw59LEX2xpy98jHnfax77ELtHTFo9vu5oJ8i8xHNRAcgxpAgFyitLefUNxQSYagAP42Fzen6AkZZxTidXif",
  "key25": "466PiQznd2rHBYmRcpZycRS4vfVhLMexkwxX5oMkdNbujheNSfA9MBRGJvjGGTSdWRccgP9qfYQ8XwmUzeq4niY6"
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
