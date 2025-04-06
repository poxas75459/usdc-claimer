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
    "4PiKBA4euhnaJjsZp8VbzCYSU57qZK1w96pigpEG9fDELo3EV5DC2m5L7xszVZ5HGKuoJo3DR7hUdErKhkbCzjqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ngHFtEMrjYMfWkZ7mZzUzTa49iRc9NhucDe7YZTYDehiYx8pAs5Q1ce2LV6TKzoWFKcFUsNydNWqhNmbHC1aohL",
  "key1": "28Z2KGAEQsf1d55kjgToX3xELXssKwbnHWHcnCtRDTP6kdEFYaCdWt99Asun8hDA7b4gNnzwEzZeTcRgN6kLHRLF",
  "key2": "38c2AWmSBQXp877b7L1ecQr3rzd74N4bMT94pCEgn6JmbLa17xV2pAGKTU2ULb7FtuEN7DNp8RY1sJunDoTtnMgo",
  "key3": "2Htr8q98vrDa4Jyjn281eMQWUzCpNG4YZKXNY51LmQ9U5HPxab4jaSoRHjGGcSVGaZgNf6eF9xgAcUzb7xc8t4r1",
  "key4": "5nGsAJD9W64xqA1eZJDgFbpH3zdoB8Nw2R4VQgyuc6yrEtRQjQ7TrPziwsqQo96c3t74BF4qSCoGesXy6mgzJJC4",
  "key5": "DdsRS3XczMJmmj1PBqQe3FRFUrYti3KaYEn3oQ3KTx1WcigNoKuoC98VDajGSdfBk7vT3kMZz3CNVz3YKduVaHS",
  "key6": "2hHiXFye5QeMSzxb1QaHHJUXFNbUcR6VeT5917RaBSEW8xPxorKYkpBX12awYZgCPgvjiwTaixHAtoqMo5jiWqwF",
  "key7": "3tdtJFpKb6nBxiPVeDNZWbzxASfjPTNiuumCQ1Jzg2G8YNwHnZosTQ4LdwUYbMmR1E99M9afWhoTDzS6YSMsw7SZ",
  "key8": "2j1JQRoc6RsNEyHoPeSPy3BLpvrwtNXdEbUscUFen8H65Zf3EgQDn6p25UB8ThfjzyoQHyn9euX1DgSL7c5Xqyou",
  "key9": "3dRNeyHqMmr2GbpLYdCpTFRUQzmSsMnoHemqym1trUH4WJQwfQdZFcHxGG6UPDjDLCYMnR5ib4bu1MGf28der7E7",
  "key10": "5irsFFQcW4jzbhn2FvKgGPKGL5PRpuZNp6XrTRAtn9ADQnPYZixbuv2fSCGNQgifWQNuip4Uai3V8KLCn94kj37a",
  "key11": "2P251AL9XdmLoSLhwT7ndrFD92uSuqvA37iZbjfKVsAEDsfPXgSZRrmtYsJBZL9h4LrvSDpBVZPTfQEx3pkkGoov",
  "key12": "CR1dUqrfu2WqoW6n3oEbzrKoNKJ6j7oYGhjwnrBbkFAiAVvCEWtBPtvjMGWeL7zhpgWusLhpQtJ62KwfSC5pi4r",
  "key13": "3g8aQVv4WL2TYXgwe4KwxEwa9MrKu9WTXdJZEaktZ21QZkhuH7NcNFUS1wRPzkXbo4N3MQuBEerSVwbWNu9YhwKN",
  "key14": "odukUrgeL8wgUK3eNpa3fqRKzzNLWQywUu7BuQBqzq2wVeoM1LWXP1xRTmLQ5Hnv9JHyJahEEepo6gBX1YMvw7X",
  "key15": "jDn4NKUtmVqnNPULVYuDNsf6JCqWd3GHYxaHVwyadKMSoEAXwCikTDLuz3bsWPY6rhPgjucBsf6S4bTnCiQeByT",
  "key16": "PqS15biZ7XRrp8c27PUvpNhUG4RZGQWaQhTmKcSLYfhWxsM6onmq57ShucCFys8VSg4EFeZDxFJ8LRZg5ir4Phb",
  "key17": "3ksLp8shjThNHBy5X4qC1uTnJWNJP7TMPf5v7WHXSk36oxU2m4QAhVcWkFJm4gsopJbQipQMLEGgQCf4SjYL9wpA",
  "key18": "3y8bN3RxvkzW4smWPHUfVPkSx8hNeGdvBFWoo33tN65eGCdAw7pwpHzqwnPdZgR6F7myZUmJmt9fPtMj59fLdf4D",
  "key19": "23qxkkZUkRLPXpnEQMq1tooC8h5e8APBTEB5Mapj5e1GKngqs82ZxiX5YqsLQcfg4hWWrC6vq8LTohxqyLEjp4cR",
  "key20": "5sHHk3wmZNLYmxBjbKXaAYu4ZQALSYHnx2oT45MvzEyijZZxAZMevtWzPvRgnFUnux6Cj3afuWb3zUbQxHkPohNW",
  "key21": "2GpN9h9igUdMgrHCj632U9ZDDRCAWp5eDirKzUqgUfVi18VQgEJsAZ61Se214m4d9a8YiZAYw6hYA6sgDpf7P5sR",
  "key22": "2nzdPFZfLSfSH5T6P35bQMe9cvNj5MEVi3swWSmrdWse2dn1mXYg3QxwWJSyjaZvPuMrBiiQwnrnEae6XcqRkU3",
  "key23": "3bfM32KnDRekGaxoUGsuLAm5Bd8J5V4RFCpDeSTnsvy66eeTDGWAoC4kH7MjqSRFzycdVkkS6f3nGRAdNS9HN5mf",
  "key24": "ktAvfjJYV2J2qyxKXi6Y3kR9YuWE7NYxZ9cVAMVeCVLcf6x6aQsg4uBgYv655YET4m5uDWedqruDguVTbCrCTVG",
  "key25": "4BUcXu6dbtvhBEwLkKxZoR8oHHDSUbPR2zq6uakTShLU8TYLp5eBLGQcLTcfR3c3vvLkYZBwnkPXmSac2F4rDdBA",
  "key26": "3qHZWhq2q2m6YzZpmDnYun3nhJEuuHUpegx5hivvWMQ72nMLwrVAEojiUuq5ebTBgwUxju3x8Hb54MSrgXcqxqZj",
  "key27": "4ZiavByj85PJxjJKsddzHvPF53nqo9rKpzLcBQiTodbMiWbRenebLR4cS6YrgAiVPY3BZuQ3YpepdkPRLai9qM7f",
  "key28": "3mMRKLVLJL7rByUQBGochbcVqBNVBK4p8wN9wxbVA886bgNWD68ig2BGNkNAaKUpiVvrcvU5WhJYEnDuMP27peqg",
  "key29": "PmuaD4jg87FQfJAvHppyBcJTtxP2TENaAfX8wS1MXZ7WpSFzyDJmuwEJZ3AmUfmaSjAGiuwmqVmT9LqCvX6ctos",
  "key30": "3EhuRog4SHiEvZViLcZgq6FACfvKWfUXQsT67bpQSsK6Tw1QEx5mtD1WetQZ19H5Lhm4QJdSywvzMfkStkJGRjh4",
  "key31": "4N93RUfTTTy3XENsNPjGenFSWA3qmMn57uLr8Ujkc9iQKqqudfA6htP5WQ9tbsZP3kf6oerAkCeNXXgDJZ3SXw8Z",
  "key32": "4oixkMELWFmyvaLurSvLkVdPYSd3T2xnUock6Yt7esCRCmebUmm5eJuP6CnUQ2u7VzqiQE58FunG2twt2YzgGQf8"
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
