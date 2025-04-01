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
    "4ThaFxKRKCtfvobaYyiPrXoPgF3fwb9yTxVt1rDfnADx9uHU9sV7Q2eficjcaUxbS8CPvF1rjWyXhiRaKwWeVkRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HEYZ6VgBMR6RtzZRCj2a9uzZ8xaYMq1s6usSEeEgZ4oAFqqUu2cbfHv2LneDhRgBUC7ozDetaqpYdkaFd71i8C",
  "key1": "4UsGJgpT4XieH4yLYGhHbQsGjXAt4fwYK8vci9fZLrh2TM69atAQNoVtWdZjdwz7wX75DRKiCC4HAemjJBAy3DbV",
  "key2": "4zpGDBgdjB93PEomQCRsYZmaM2dR9HXYLFs37fZ555hJ2nqCaC8ZxJLgoBqU4aVCi1dT4xq5aLLKKq2TZGaQ4ACN",
  "key3": "5MxNQTZhcNXyQLMJoUvUaXN7JRnKtcKrjUCy39viTonyoko6DtpYu1PvDuig3tJnKq75ozp22DQcLwzFg4R8cUF4",
  "key4": "yv8TjX6xaQSaghUnaLTvLRifZXZRgfKFWSX3WVPt43yHQsHqsWqaPFxADHMsB4AQSQ5C746n3925kC2GnRJLW72",
  "key5": "5ULoAT8RDgXGaqyjdiqR9tk7caTvSkhebFpespE1bQmbZYLrTNnWyJSbBejRoT79BJueYLGroCe11eSUMistCppa",
  "key6": "3Xgf5V4y8mAE6FCp1Ydirh5DFT3qfYQ6tqSSjUHn5qnAGMeiT8piRQB85vrCgA6YPXQeM56LkqXgGN4Aww1LhKH4",
  "key7": "4s4Hssdue98e24wQfjQyundmDgQ9iNmbBekixjevnhYtymDdi75Jp46bL7FmMcEs3KPYtJNFTFt9pQKNTyBTdwZX",
  "key8": "3qka1Jaoa4cRZ1wT19PtArauiDYiSpmFyZdQShXfbLmDXzrwXanGWreWZ9GpRMc3gSRFyo3eh7HjG4gxjZxoho3Q",
  "key9": "41xmKhgB4cW2Uhk7kjsXrUDbuQb3PUgRCrSug7CETRq37X5tQMcgpTUoLzfrqojNvgyWiWNMpaJ2hyHxaJTJ4UaF",
  "key10": "5dptV3mqkxYy6V1YMsCEQdHaV26FWyiyqQYA277otAGKe7qQriSZQ8NwPg9eorf247aqUDg4JyTxvHMGGJzhchYU",
  "key11": "2ujHBjg3ZSLBGZJ1JVhqzpujK9QYtV2bmsSj81GxW7RpkVPY11WpGP7ZXpiDaEdiTGV4pu1tBRLVV2xvLJ3cBJH7",
  "key12": "5nCsnKr7oDjoPtAxFxCrwaLjegzYvzoCKybnJRTs3oJrpiqFQYu6osmo13kQN3RkEGS1UF4oE1EVrJjDKB4QVHXz",
  "key13": "qXqvCChnfQEP7X2yeciCta7WtqvrxeWKhdjaJnfz2hJtEmGgNzwhjPzUJJLuRgX1KS2xvdbqmVv6xPiLTgb5bwr",
  "key14": "qd3CkBbN9yZAsxB31cpLzVguKwoZr22wbzpZqPr8HP2Spw4SnMFAhW6vf6hVCtM7JuM1k6YKCdvF2W3LEyF8ee7",
  "key15": "2n8Eg8tmLqUH4st6Q5vg2z4CJ1SVJYrc6QEDJc8awyB9nsiV48ay5rhTEvA5vAqvtmdE5TyisSBoiWzFVXBPKJme",
  "key16": "5D8d4Sj7jb5XfPqgwbqz3a3hZUCcHMesBLY99Ys37NreAN2ETa11LciAVR9nQXXpwe3awkSDNYhg1wYRnwTonGr3",
  "key17": "4DXbF75TgsVN8zgu31yFoYQjhd5dpTG8sHkDFEnbEne6Vusqzby4R1WSBSyLjVkyzyT4nyzBTfViPpS899Y4zD7y",
  "key18": "3AgvWG1CEPQWx2NYfHmRLusoDtHjnVyoVTBoDwevdCwqzfM8UFoAJz4y8PZdPuXy9UeM57ocB1QcLT1cw39qC8yF",
  "key19": "2j2dbwcDs1UmDufzDSuphAFYFgmifBvZS9AfwCg33MKnujqPtokYGa5rQY2goE3afh8vFBQNU9KmZ73AY7tsSfHK",
  "key20": "2mELtbDSkzgeM2p4zGud1uoD8PbaoTmF6X246Rf6Fdd2h4huPdJTG3fcWaeYvMQZermFLfZ9CxoH937bDmXyVHJg",
  "key21": "2hwDhDzdw2u1pPrg8BirxmRd1iayv999ucfPToXawsKrk1WtA4fyPwTVBFxz44YqCRogaVWVf7TTuuYAMAvBGxwL",
  "key22": "43oyH1xo9EAzuNvsf9eVivQJ3aomALRLB3mceQQeX48dqpdKWNysLM1mRcSAyunUoDxgFnirPydaCQdJAhiMPSgf",
  "key23": "5Uvv9k4E2kAdYJ1bHUxGdxrNNEicMhMaMSfDD1MLEMsisBCeo7CPhvcFuaxJNCc6q4UA2Gdv7eb9jngpqE9dz8QL",
  "key24": "5xq7zaKTKNRZxNEFYJWjRbqtqQmrjBNduUGEjxVWQKkW5JCRbRfkccKiU58rJSX12UJenqokW8MGsHXvNSL6drt1"
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
