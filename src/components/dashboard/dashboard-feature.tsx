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
    "wnHEoJhRrdHvCniSJQ6EKwFwCdYs5fX29YfjRDPPWM6z7yKUJjsHMMMxCfDsu2brG9Gcwnkod9fuYG5V3fiWpF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SpSU2d4shcVbWcovLdqsKdFsLQx9HWSA2HM9LbuLndUnD3HLTcDGszSHN815L5mizxBJjkAjB6NH7s4u4Fe5QAC",
  "key1": "3rmNBVbH189KRwSqXMaKL8P8xHQCaa5VS11Y5AZrBzkiUxasw8pYHAJ65SuR7tiH4cnwdN1eJiDQhbCp48rPYG3E",
  "key2": "4LynHiPC75L5mTAgag58d9vWNqRac34vgWx2a4ZsCYgLuq2zyWDYyYm4q7raFCBKX48pAX8GyWCUz9kSH4gCcYi",
  "key3": "16kLKDrW6uFcY8vYKEcASr65kWG41dkidhuyt7JaYn5DTxCTwy9G4A19cNLUJz8k5fHbxvLv3eoyyC1eJbpt7rV",
  "key4": "HsnDJP7Ho147S4tYxktyk7pZhEWHo7cChn1y55ydEuYiCVVoTrnoM6ijmupzo3SX9U3YH1otDGXHpx7h7yDFygV",
  "key5": "2xtSUdj4mYJLLWgz3rZ5Jrqehnj6ueMCVzSH849q1NVK8LiAz5TZDXc8r4PXDWzTKmLCYgoPg2wiMWrULPpgL5zw",
  "key6": "2Y2NpqZhHvt4yRpP6iEAETRpvCQhJVr2evVN6Xvon5E3r8DiPgXNatLs24zfhuzTUwcg1kcXZ6qNhV4cHd1VnSMB",
  "key7": "3ZMhiLuFkw5BPW5N9mJMAVD6pVVwR3jy7UFez9evny9XHH1seW3CmWktUVpQHjgzmrfoJArx6qCvfRRdoBrjmnPq",
  "key8": "48MCyxnvmCg163c8oneijoHvs2pBB4EWSj3mTcrau2rc1UUg68J4vXEs1JUkr6EHHjeWovodxKw78GzKNtWfjpzw",
  "key9": "53hwhC3HUoePwqo1pVcJjFVupcRmbdNqQp58Hb8BGKtt1PS4m6za28ANh6Y3EArVgYiPs5SUFDN45chqcm2DSmre",
  "key10": "fmgDj9145Vb5hWFFTNVevcm9VHqf76USF5gry6XLat4toBjy4w42V8QXHPTWpimzqd2phgguykrvNHrAZNzvV4G",
  "key11": "48RHCQ7kem5jKyaU8YrP3eJ6ihBfx4KhPKNiaeMvAsKRFrcPWjfjPJNGbH29wTQmDXB7YxoqCG9PCD76MCb2Kfug",
  "key12": "4mFL2ApoxMomJZp4d7ce5YUtddoQ2Z1Fq9uAsZzpzcwgFDQYhvewtbXLj7UUscCnXpYg7LSaxSDhV6Cbcb6tza9F",
  "key13": "2j3oAaPuQ1Lt91smuay6BfCmWuE8Tj8Yof5uzKo1ySR6zt9p1GLUL792t6fasmuyhkJfHTAxqubYudVZcJ3juRfP",
  "key14": "5tZVqLJxHpn4tKkQdD2SQLx1d3JkvLs41NMVLcKQ8DcVAnJn4BBuynuxcmqZktiP8LZR7suJhqsHFf7Tzi9trmKQ",
  "key15": "3oaaM675mckFKaBMfadu92wfLuL26KWWcpmJYZkCe9a9LbbRj7kou1mwvvXN6wbowxUXBcvLxBBCSGQk9DeWz7H1",
  "key16": "4n6m7Ef2qcvDBwXhKH6npjLjjWAwQRSkGYFngC1YSHQaHCuz7Qn1fqkMUqmkAemSormLiYmqJbEVJuW8oZqFfMeM",
  "key17": "48Kra5XP2dHfjEccreyJ5Qz6aAXxT5Dr7pJm9sz4F1YixpmTeZRjtVznQNtg63oWCCJDVin5XFi6nmnxYYEeEySb",
  "key18": "4KXRZbmYTVBxjuBykGseFJ441SLbg6XHis5R1tjbJt3X3PMiBk4WrtMVs7Q3oL6ugWUP77Sv5CJ71GWLVGJCQLGv",
  "key19": "3zp7WUGYWPyGaXQJa3DwRQLMgw15PywN2rK4R2wosurHqURKxBoY2mJ3AcXxr8MSPri6qSrAMfiCcWWj6qPQB88b",
  "key20": "4bX23ZhGoXoJa8v8WEBzxZV2i5GRvfFSosb7XTDfgQthZvnXRsRgrY87BUeX1BRwoT3EBAZSPjrGAnL5sua9Cy5r",
  "key21": "33F3qhk4sVFLVG5gfiDVDyVecacVhEMpZAJ48vrgw7Fzcqy4oND8evuPXjB6VZZuPuDHUNHEkWKDK9t6Gp39YGUn",
  "key22": "VWiRpmJqsDttYPU9211M22211LvM6iUo6o8W8sT4G8hzRjWTL7wwaL4kg3aYNFVFsmfbkJa7rDYKknhxjXJd5M8",
  "key23": "5ortNKoXsSF4gzfzk5kGjxnZxBjMbxr9VCkj8SPKD5o4QiRRSaSf4DAoBzu2ttAMJ5Lm7DCqqzu6GRPYnVeKpwUk",
  "key24": "569giM7nWFU5rqDpSgPNE41tPXxubFtbKuc5nqXEAWMgroSzvNytifNa1NPBewHqkqyrmyXxfhqzwJdaTnzhJn55",
  "key25": "4NmMz1jpHPj1u5hyECRp5vbRA7Jd5Rd5T4oHftCRKYdyJmTdFN75pbmaaq41cVJf6MMYnScjua3rJ6GPTxmsUdNb",
  "key26": "3tmjCV7F8ftek1xicmYrq4yoJ2rh6pdCgxD4FS6d8Gzy5GtBtvJf7WRCSmrTdKBUFV7UcCdnVUEgWRZe3juxPVbW",
  "key27": "4XwaUuNcrWAC2Ha19ZZPAn99bjLjHVVhtqHgJiRU8HJLETGwR5JQ7eRMiXxJKNgrNzYt274TEthXBQh8PeSEy81Y",
  "key28": "48tsza9UeMogMj34h25C83kZyNo9TEiAzGVWWZyDmf4Abo5tb8tEFVcsHPbzyjZcZ6cHjv624wgKpwMaZoy44DH4",
  "key29": "67UALHbQi3CbkbJL1CgBD16REAzL2VsigvaTRxKkHDqugXNGFuGp3u3U1MzLkeqr24dxbkGEVqaQMuJXxV7KHS66",
  "key30": "5zdJ43hErcHy2BQn7paLYqPvLzfKLjVLVehi9ihaUfKfzLo5D1b79s86rfNcLjeiJd1y8CKfvUTRbmZdGKY7hA4T",
  "key31": "31mqxE5R6oWEGCoAtatCc1GYENQoNRcS3cc3GmACoVPm3vosL8nm8F63pmkwZXZ2AoAes765hUBc652TjS9cRKD6",
  "key32": "4KVN4vVqDqP1esSL2gj9oxfm4nXWYuxkNNjCRUVHRUbHzghXCXR2YGypC9xWegHzvaGaVEktzLvRo7iCrsr2jXdU"
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
