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
    "5sZmwnYE48Fk8E2TMQsbo5gENBergDHyEoYEKmuaRiuruaV58u3oASoDt1nT3gj4VjqBV7KtYfVd2oQbFW6Epvzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "noWWBWCS8KXegsR57u2rnA58h5kMjSsU47XHJzRULJwC3PmRHrEyS2kFzyptDHGRK37K8nQKDcU89v2kummUjux",
  "key1": "3zVutUNWKjbQyp1cJbojvrwRTPFnfnB1LpimY8ESiXj8efWYc1LzWjyW6rbNGBCsp41XqMqHgCVteTQ8FrEeCkb5",
  "key2": "2PhMn9XemsHP8rMDP6pSc6RmkqZu7NjvELBto7qtVFZ9SrZdz1ePkFGcVpiEZkoKJUhgUa7yrrvTcd27RPxsfJvJ",
  "key3": "3cZBULXfhMk6BBw2meiKpf8K94Syrmb4v3WUwCbWR4V4MCGocAD7JNPEQqT5t1dreCiKNEFgJkEAgm4vYCvLvEcq",
  "key4": "rmXbDtJ1vDrxHnYLctwWkMKpyRmPftoaKqYxJbiTWU522qENzR9eqHxgjgecfWAGqvreFQPk5rdM8VnJfMt4UWV",
  "key5": "4T3o8fKyfBSPZBrYWPUFV1jHCXFhxrexgeAKm5r7gmPbYe2MbdMBb1CeQhYCnfi2Un2MNgeJj7E11XH89HsNMLNV",
  "key6": "5Rp4BEAEtBytmtZjzNoogRPigM196AU8jTquCXRGYBudstoeMVvfcvbGkEoBX8LmXRrqGdF5H1qoW1S5GB3g7u2v",
  "key7": "3Jzw1bgDbRVWwkmNpB7ur5SBpe45TBu7nbprrzhm9PPJ7erZ1MdTezh2NP2E42UgzUpPpqWB5TuvuznJNSrc5VSh",
  "key8": "4Dyp6kgrJpoFf3TYoUrCJo6nDQKrdd57F3k6L6MvHe94yQkAMmqwwZecptWSLP2Qp1K8uMGQYVVZjRDp6EP4GjmG",
  "key9": "2Eug5nzz9cuE5CfhGMxRJLF73iTXgpy5oZMEUayTNwptSYyXjZ3gdgQZ8T6szNXySwsB8Gmiy4AAE19u4id5dJAX",
  "key10": "35KTPDyLk3KTn5fNfeRRK3PaNe2s2GtLCJijnthSYsdSsAj1YKUowT35wKuNn61ZbYBSrC2qquNVyzNGJiEb7nEk",
  "key11": "4CCKmKv3jWm6JfdnP9Lpr8E4xSZnnYVXQK6BmF4BQvVtMU7ja1Sf6qAVtzdHagb1MqtquMQZ6ckLQ7BFenoWUSjp",
  "key12": "5VtntYpMT87yrT6EBnjY4wdFVtxg1z1uCkBC1Q6aUN5wdDWBopSJde3P23Q5AM21cVvvgG9EfHpbDkvDPCs46SCm",
  "key13": "561mXoKp3xXwNT31n3qZ3v8qrgvjYzs5a1fNj9tQzk1c5oBta31KzJPNqvYapM7fyxZjYQdvUZMcmAsEztysrsNG",
  "key14": "36TXVKpcshxpkhhesdne8NN1Yap4DmhKNFrsJQSu8x2XHjxbZfP3937mnHbtPr2SJDLgLdrMCAMD6oisvpmNC549",
  "key15": "MbXWcfQNytxdtSNNrzyNV8WwpSfHTCC2oxfUKthyDWi928RyKWnA4x3JsMUQJwmdmS3GgdchvNLHDJgnu7ZS3pK",
  "key16": "412XHnGoS8E55XTENG6wNMAy9DxL6jqmkRPugofPcgyK9D5M63G5KqNCiwuzMVKmqcVVM2A88Y6MsWSmareQnS1Z",
  "key17": "5Aw29NbAgLPBUzBPEswtddtCTk2SRary9Dg1c9xNdVD4VH1jAArnVUMRd2grHgU5XLqmPc9bf8uPNYVkNwvBTcM4",
  "key18": "49EMwYyhduR7wwaAkTeLEaujB9dDAbiBRh5rANrCeEGZZ7w7eBErZLrMUpdzfJWE56HDHkePzJgYQzQeRX5Zu5aP",
  "key19": "3cw7c7BJ4vPKbBpBGEvox5APrE8HDUADjDmD6TRoc7aoNJAMDZuoP1xJ5Qz5eCk9TTkNRvnnJQC1KPKKkLanAqyK",
  "key20": "2GKW2RUG5Us42CPzG78MZv9w3oXuJRxGed3Bi7NssMRbxeijubZtatG9UNR1ReruKnsoQikUxLuBPNMgmT9PTm7n",
  "key21": "2EsovgMwaZB2ZCcJjzEi7LZTssA1SdC73vGFF7aHbMU9ZhhZ4UPM675e4he9QAxstb4v3KgCVzMPJd18JkPM5ztk",
  "key22": "5vaCiMRJf8ScJjsEhKTaS6JRPcj11zbizFjiKNWiGVy1Vow3xGLGVAaJb5g35NCHcnEMpPtZDZGFSU4T8iaQoeCD",
  "key23": "TpAsE35sJ2utsYU8Dw1vvYD4bJoPtNCzRoHPXpmQXxWkfnZDQRFeCN1ix5RDH4Ji1dw3VPMGWjgW6bGbwJfTW2u",
  "key24": "hg8tUyXjNDU3Sc5wL8rZ6juxuyXR6RDfudEpMFjtFS9L3S9Md9a61NbyBKx2esESdZctgE2GaW2q7qEkifczAr2"
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
