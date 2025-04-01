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
    "216xGhJdnGVVCvDrRG9gridZB2dxKMS4gDcBB9EcFZSLDSchVCQCHq14wkfuWL9eZC3SYrwGXXjm4Y5WW3cka1vg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gJBRga19gXNBg1UTnz3wcmpSfGMjMXYNzEGQkHU2K385qURNiGMrFw5oTZjhexT3WZzVCRBWmgy6ksYnSX6bNhR",
  "key1": "5t5MmobwTsprtyvgpDi9ftgXeSdTsiGY2VyGL2c4UUiR5fTuyD9Yp2J7PAMaJdMM6iEfzfq1eqBvLyzujs8F5zTk",
  "key2": "3oEdUQhz65qbjF1HCpdD8xnuoaEbJ4oBKBjixKWVHtNXwYeFAKAhVWn7RXtC8qrUCV16DY5YN1Z6xXyV9GukPCHG",
  "key3": "nMLkrCcRtrhXzS2uU4EqJ4E1VFWsxEQ7myojPEwPQi4E3AmWAYXgd3DD6v3xA6duoWAEZDhThLeeQaGTznnjngG",
  "key4": "2iEhpZcLwhzRMJpuvSVh9VWEgU2VBuAwBXAsjj4Jkc3CaWQKrcCuMwRK1J6x9MNjwezW6kUNvU4DTVYZNvDGXpo9",
  "key5": "jPDvc557gF9RxJaJzpGBpwKRXVH88sQpfX4hqwoBFMmcj6zckmwByWr9XKym1LRYhLpF5DEdH3TBKZgNKUHm3wQ",
  "key6": "2L2evdEJkcMV1ipXpBXH3RqTQj4Z8Dy7Yk1HCqetj8fcYEEGhM8iUpcT9PCEiGusoMrkgCheJQ2ivSE6SXDpeLfH",
  "key7": "4hpF7u7r3QSyQKspGTgzLnGNB8yuPfr6LfqbAjGKfRpedcZUvhz73RW6Fk2r2J4WYU6B6Y2y7xgdA8PLGQzCpMe6",
  "key8": "5c9ZgYW6CoAdUfAXAbdPcG51yrBx4Y6oNwR58m62oxtjojgZ7YF9Q9LFuyXXQzmhwPKiJRwy5wCL85EBBjpsQVtL",
  "key9": "2GdPmHuFdCYoEm7FfLTazwm8mfsKBfxioiV3XCCsKYsQxgR9vJ3XRcfFdbSG4uuJLoaLc1Qg5APYMUNBaDfqywvg",
  "key10": "3mAFHPSchtXECBSkqmCY4DQoR2XRCVX5si8DMsMnxrYNUcUpLEYrr3Zn138bmVKnjENVsye7sMCBBhWXfAgUVgmT",
  "key11": "2aLezxK9CiA13iuGd9gpbabmci4Ee6EbpZNBJtj6cv5dgoRMiZrUzCvEE4W8XzdzowHRmY5Qa93tYvNv5zLd2cy3",
  "key12": "36zd8AfJneHEJUx9nM1E1hgar2oUHNASSSn8c3XfSyymWHeBjhhuYSRNKAS1ztaggkBZCx5SdMRtad2qgtLXLPuC",
  "key13": "5cd7isHDFSdq9c264CfiACQYYsZhnZxVvQFnNrD2WigprpA9S8q7eMbqKd1t9bCNoaWF8BvNjLLmvofEAtvgssWG",
  "key14": "36vHRaWXmawtgqZWhk5Sj7M1xFfqcrcR5uazBy6bz6acPqJtwXnUsPupFK1kWXJq5jXnSH5RbpfYVVYB6pkYuRQw",
  "key15": "2NW6R9UPAoFvCPDAMjbcJ5afzM7pAMXQMzvv8h6cFoAUdZvjunjUaKJR35uxjDrPhFNZnvy334yYJr6nowMVtL23",
  "key16": "3dmd5Bk5YMt4wsqgTLBD2d5buS1r3C7Fd9GGidkYFBz25fZm69Ue7AvSf8ASyaqniA9cWBzXJTAyNuhHAUxVXPY3",
  "key17": "3RvRen1CRWxVhupd8DdVCDhdjrhJoQprfWg5qEN8ptcpDdfL15HcjxeRz4gK4vAYNchK9JYxabcVYCMJPVUHicTY",
  "key18": "RZudiRDWFTeZHkTbwcEz3YWTkbWZThDrLWynNihRf8NQ8wyJUxY7WB59Wku7KKrVsmM28PQF8wkfS9Af2qHmcCe",
  "key19": "2dZQ89Z34C6d43oVuKoSf1itHomic351f3ijnEdMteWu1KYBdLekiCYdV4X4zMvGbn7riy2EKr7nU1EPMtS2cXGh",
  "key20": "zvV2XhAhBCg883Fwqft6vwx2NsQcLtzXLQrXyf2rQ8xqyf5Tb8FN61PXeHzbaC5Tux61RZf6Z5K1UnbA4XWmGHE",
  "key21": "3urbVwrAJ9n1x2GhM38HMEbUYZJC8geb5G7i6BoTpmS1VLr25v8wvBh2cHpkuBAD2rPmWM8ghyyrPfrbhhcayorw",
  "key22": "3eJevnK8Av6s8Q9KNg78ty5TP1kv3Jd8xqB6BE5sWCr4irEnqfrH5fsePCCeq5XXw3yxd1aKzFpSSyGN6V151fXj",
  "key23": "5dzdnYueProLKTEW6Qs5kpMht6ykWKodd6hcsjn16Yw4Jz2ifsg9wRFJgrGGKkhmt3MP57wLFEetdkpzdXVbfGFn",
  "key24": "5vSxALGXsv58LsXyVgTLxftLfr8TAg3mg8TZycCSAAzoKdCycYBUiyGwTtojD4mgMJhqKNfiZCsmKJKME6czik3X",
  "key25": "56KeNEFHXbiFZ5qd2YefFRKkXsfBCiVpK8YfXomtzjScEXFdyNsPuQvocEkQzYL4DUvwDfgsiFeWuZKjntoen4ey",
  "key26": "5xFQ5G5rnf7F4fMFh73c4bb57jf5xVi3i9GUuLsswHacARbdTrJJwc1sDNqt6qZGbvud8MBZdxUnw8b8SFvKLBdC",
  "key27": "4Mj5JdRZThUr7zPkA2eBFqDxy7WNJ7zpZatthS2nL3LytYYNMxssZBizubPCtcrX6Eg4QuqUxb8FPyTAZP2q8Dks",
  "key28": "2MsVMh15wTv71h94wD4KSjErSV3ZzD6rprBGDkPhB8bpfRVEomK5e87344NMqLZzMHi96AZuWUJobGL3i7KpHQvJ",
  "key29": "4JnrzYue7tPAAn4htw2mSpbbFHmGCozS77iQbTaPdqBHHfqNeiUn3MoadEMj5CuyQUSWnnXfPZg1pFV2sVSvfDST",
  "key30": "4n3UobKFc3BbNuBDk8fri4xipb92qcbWMRBzswsqu1QAaS3jiV96Dkb4THooJjMsFpouKLDzXKbuyrfUefcVj2Xe",
  "key31": "2fXwv7LcwVFxLTRjCKo7ce9nxyqMBPNP6PuTkwJ4MdnE5ovkgzLLHoGZhCQpGmjX6t6xKa4uQyDWAiHGGWDYaQLT"
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
