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
    "4M7ZT5rD5vMt3MfcBHWFPe2JQ3T4UMGTPgJJb5hcbZNLWJ91E4EKEduSTZxUwAKiC7dvNa2WjMQoyqCCFWD1u1Wc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3536LkjupyDvSZmDTmrnyD1frEMSeVPGRAi3N44J9SpJxkBJdivhszvSVxHLkB7TqTNATspfgDyqDL78NYXSXQDy",
  "key1": "24rbXPm9xAqiN91rWx154eLoHpMmPBx4mTCrXLd7PYP37RVkN57xqHRu4dyYuTSd4DuUCXaWB8k3b6QZdhvbCnNM",
  "key2": "2pBVoQ5qRQSTNDpTaR46vPi9JNkq4EkM5k2YVtW7sUq6jNKkuV8xm7KeLG6TtN2wpRW4WbjTvUVArmMvr3cZJ33t",
  "key3": "38nUStwTPgLNewyUqc7DGCzuACxA2ycAodpuSL3qWNdiPaA5UgnqwXuAHL8qeffrstHwZA8CE4LqkB8dzJtf1UNw",
  "key4": "31JpoRfuqXBCxTQ9SBxWtZHcafsSARZJE7DLnc6gYymycm5CJZqNBgBfpGfmdz6eHXRhgMspgwr2LfVWhCjSz61G",
  "key5": "4QBeKFj5z2zPYjVq4ijYMuaCUK51rAppQSHqtJR1hwsEV2PrvYZKPt6n8c3UMZM3HrZYqDCwoMWZo3mmF6KpEZo4",
  "key6": "2ujPDvz73kXBWqdy8w8uA5H5J6zwZ7vCN37FHTijP7JeYGj7QmXDuSvm91j4fgtCUovzWk7hHhdtAXf9iSe5qGcq",
  "key7": "2qi9PfZEUyVQgEtVFHmYu93H4gpwVUCbwkjF6viA7ZVuaoenvPgn8HYMkyFWp6qwxH9NCazxgqkLpTWm47Z9ifTY",
  "key8": "3qniMwZzhz1Ky48U7PmxhqtLgKhwTkjgfVhuogT3ruuXy1rqTsE3UZd9UfmbANX7qt8sW5zF3TicRVcoFhoVrwYb",
  "key9": "imJgGT4mTtk4Xsbtsy5vqQXTCGh1gxMVg8BuZ45hPYt21wMw4CmBL1XKfEo4SnsUsctoiRND4anjtiWm6ezaQqL",
  "key10": "5wNXrpEuENj12Aw7cnBq56tFd7YwVgvyfyPsnArvb4CKVt2V69RUV6tCQGLG2W2X6TG7cGnwNy52bYiV5vGuxma5",
  "key11": "NtfLLM7JucdPJ9fQhwMw99p1TTx6UpwTBUFwRwx9L5A3Ljff3paSmYo79sczRAm3DwHTp3HyNc7VnBhoLgPw1Vt",
  "key12": "5PLbyZRa2zAuesMJduS4z6qJw7sga8bE3bqY58H5hX4uMU7baurkfrk1aEnM2XHh1J8UXdcpMkxkFqsD5kzJxL4E",
  "key13": "2GPesDmMqDwQJeAcdidXMCANheyhcAtrCWeS5AkjrveKkhXxvDZCF1o5MQS3eM84AVbJqiv7gVedehETkyyYbS9b",
  "key14": "2wJCYJvPQah61i5fkoA7mEdzAS534MJ4SsMxHqeKdyGFmGRgoH3qMv9ZCFuzzGwEXgopwJGgLDgc96QffE3PWJsj",
  "key15": "54uaKpz3F6ADsmvhaRT4VSKE8Nnn555oXUa9K6Scru47WUesMfaotCU9vcYbo6HG7TazskDkqgkDv8ZdUTCgyxkS",
  "key16": "29R6bo1rSiFjH8x4PVaG5AJGn79DNZ2dKWZAFjFHUoR2HoUraezwJq5H2zKhpkP2aJVahEaAApzM4Vz3y9GuvJnu",
  "key17": "2ErLig125pyR14CrrXgRtYFy41ir69mmPBt2HoCwKWD1KoQdWx5usvJowdfpXsv9S8tYcREosLFSond9r7qbTgnn",
  "key18": "4kRmboRxJU5wouNbYV8NYcMfyCbQW1m8sztH81z3kZyWaLdJhrFDYforeEcHLFiiebVLGVHBn1WWHebJyFDGqCRj",
  "key19": "2DkX7BR74qTNuUu4kv4PEgzkjtRF5mjD1K2uTpnqecosJqRUCHwjZjm8gn39vDExtQHkEpnX5tsdkV6DAe9Vrpv3",
  "key20": "VSqfWZH5ZFwLXRgp9dV5xDwKoGxmvaMhVEFmjSQZf24sVGGeGxhusc5jT6ZRs5Yk8TZUF37nR1eYpzvQLBPm2hH",
  "key21": "suAynBXvaDyumWkeWMtrPVJXq61oULLZgjqH9q214dWxcTZNQfwRGfb6YePdGfzY4SkGeZwFncpe3DNspnGq7Tn",
  "key22": "2she3HopFFKGm9KGPoryj9nZwNLjgb3DSjskndYjAf7C68YcypBJ7kxVDd11LKHaMpJdASgYfysUxUJWPWTTsakz",
  "key23": "2M9ekzuaXq6bcS62nJ2etswaZVyVka7WfZ5MqxU192pdoRZ4y6KQ5EfHEUJc2xwKpND7L46RQUW87qZc6XzHdJED",
  "key24": "22jd4PxfT3ciEaqrgJYuMkzKKhMDtmfXBRNuRZzuRr3WaKFzNBW5C73xa65dnzRbBY1QmqSwLKyysHvcVSWhFgk1",
  "key25": "4SB4iisd88GPrK7V5mF7ECjDc3aDZDKpXoKRHFRsZ2kV51fUtLLJxoqRMNqM766nNqqdQRHGr8N3YAXVfFvEnDjg",
  "key26": "3enfnaLfyXrA28uac4VAKuvNmuKCapJBhQzxRDek9zRcwfwUV3ACeYN8JRDxGAtFph3zFdGjQo37GT6qDsZ1xhYG",
  "key27": "QkFsU6Vo6eh8L9e341Rpc9DWvyQPKqaeQh3SCe96vRsLwBcXS4nX9WG5ZjQVBWzSYXaQitUu3wLKp9xvRfsuc4m",
  "key28": "2erdAcZx3GtqPPaMmrqgZUACHBDsZbte6RWTj4FkvyoWaQFGqwsiT3VQfKzd8ep26fwoLf326go7sKXqhwAKRzUn",
  "key29": "58MBwG1cSrfG4RNx3xA55zZzpfW3D9XnKsw7PAYL2X1f2HSBkqQiFoEUD69rG9PZqjY299Fz35YgHZxqFTgCywnx",
  "key30": "37YfpMb7C67fk8Hdnpon6Mpi5o5rMFcXgUKJc83d7EoVkSrVkftaoJXF45t9iZSZaiyKQSvdq1KXYsZh8hdGvJK7",
  "key31": "4zZbWUoPX7vAWVajz2u8yD1LsCQ1SteWTX92njYTtFnxyEA2nAHWoV7wLqed7Rp81GNZ4eUEZ9Jpg337pNo35SbK",
  "key32": "4bGZrZb5GFTQXuEdDdd1dZ8cxwt832WeFUpxCjqmfHkqurHdoKjFcK2xiKLeP3NNywnC46HunNkDnz1pkBxw1Ed6",
  "key33": "4fbquKxxvXDGA4ErbsfKcSF3oGMMX4MZJFrXd88WSVJD81vUwqQwCG9eBuHRd8y63pE9EdcWPBTN5covVCyMAQdt",
  "key34": "5dc2Y5sjXKpJ5L22omzEhnqTyLogQ55WSSbpUSDFR4jjzxtf1nChQgMBtxQa1vzxLHTutdVjbMJmtLGm9RvV3u6k",
  "key35": "26FsfBe86E82x3WvupX1wvWX8f2exnd8XEKX8NVYKAJeZqjWY9JPMN656cjTbobN9SFvy2nARMtRuboFRoQ26T1J",
  "key36": "jDNrRvubXmynS9jjmvkZLnrWcCi4NbiGwNMiyV74qevjyxudi8vedpMEokoy3Uki6CyPNBzCXRt3p1BJ7KTWzXM",
  "key37": "22yvTgZtjJnX6fFbuExi8kGgRs75hsinvvcZseeCK2woU3iFyXyqbGXF6MHRJGwsSi6Qxk3C8TKb1ctikExDpKy4",
  "key38": "3NKXSqbFS8KzbTSaHXbpBdNbRqkkbWQVihyy97J2eN1RSix34DQgAGpNtSP7J2scms4gzjybSmgNdfZC4CksrY92",
  "key39": "5gTSXirc7TguhhYVVo5dPhUcBFf6kuP9xKEwC8ipxS8bK2XJZX9J7c3Qsj6DcFWEZAWmZoMLWFzYUBmtXGF8hXrh",
  "key40": "wmLeBdSiP7iFFNkwnJ1JQuEzqdsE6mzH7wQJ5cmxbpFNDuNjZSrznFvejgg3UwrgHbtCAuNq9oWeA2LyNWk2ggu",
  "key41": "Dd4TxDNSMLvpth3hnAYJtDfrZU67wTsTT7XmjnJ2C6G1CYAN1LV6mHCScCVuFRJyUezpM5DwpqHYE3xZtt5kbWD",
  "key42": "5wkXgruaAP4whQVwxcKUwFSXuLRPbNY7nJqFJCB9qr9kzmiYcWqxPAABVzuMyhEwmkMpqgjt1nkmKBQxS9uYYZim"
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
