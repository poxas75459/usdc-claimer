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
    "3AD7pNvmzsZcQzityGFio8dEMRg4Fq4EkHeXisAkmTjZRzDqNNivq8aCBVe9dd1yG61S84gaKkRf9w9G9Ptvkp9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4USkfk38DGbrmX3tjER1awTnEUzMoGXuB5e3qpVjfYEAQxu8o2NjdNnToFwDpwUEEz6MUwDjrXw3HjL3ucoTLRq8",
  "key1": "4WrawjbGmvXCLU7UbprBCRF3ZaE5afZCXkoi4ivbKuPYKyq1eoqM4hZstYzNNPjxNYCqwixAmGnwyJzRUxeyD6BW",
  "key2": "2N2ZbgrcMVcjQsJfvx9YueDBriA5ytggmD8jx6PfYKQxqnrTKeQTrEKSJZdMYAVHZ1qDkUsf3Nwyr7UiKuRDm4rG",
  "key3": "46rMVEUdi58ZrBJEnrtV2YBzvJ91ogyiTiWsUBB5nn86we7BQSpTbV9YQcKMx9qFSq8gbcQxCpwFEcsEtt8miFJX",
  "key4": "4X8a2WfUuauNB8TuSbmpgwwqgzqs3t5xR4bYAqFr8fP2JWFoaH8k46xRpRC9pq1RxkqQh31eLDGi3Afas9acaxup",
  "key5": "2vEEGHA8TZvD5AvxDBa9e9fTLNfALbeL5c3qw5EEo7pKVzLrmoFKjc6JFWrMyCjQZSTN61VRtUpaejiW26eCvLRg",
  "key6": "4BUpnC5hkLLmUe2cGXZqjmHc2WZT2BuCF29CSDU66hxArjuuqZjy9Xvp98Vm3iDLASWeGVaZ4axvrJj3tYTU8ihn",
  "key7": "T1SVwHCfdpfLiEQVay54LoKbqJXkMGjrmM6xSALjHv7KjLSFGAmr8LMn7ZzmwF2nGHsgqvouJunR2p6fitP4Mrb",
  "key8": "2CbdFpNkzsMuqb7WVKbCucH5SmdLtPoqeVA3XaLzgwBVBXL9t5LyfnTLcUCDW7499Kmkun98zqqVLqiSPByzuUnt",
  "key9": "5d2o6n3RRJtaUweNUEPE76DiuKUQznY9kdfRqhcMJoZGmfxNUCEf54HR6DdjqWMPP7nJgsHNKC4hgSCeD9bDkFdP",
  "key10": "zTMHAKqD6pFtL9ebpeCgNCiRJLsVFwVwhvftWpzCtA9bcA542a7kGJ3yCaeom2ah6K2tZDB2m7U8Ri4zGkowhZL",
  "key11": "2sWHXHnPV6UYvE91SaRqpnt2P7cLR4YnEV6yreH4FM7TAUDe1VmzY53XAmkWKJnzDAX9XXRG7GPWSXvPhytUZF4d",
  "key12": "5FSLUAeKQRcPXffktN4eTbuwgeZodGADB9vj6RmUj2PYXWTdshaG4jwNm76YrbrARbT12T88zuqVfZMyFAgLdhrh",
  "key13": "4Rj9CRDKZzwsJNtZueFckhF2uK4SQwrNmM3fUEbR6BgrGgwX4wxacF9KA6vzoThmgFyw7KcWMFsn9svTrXJ7xhae",
  "key14": "2Zk9rNHdXUbMiAjWcJfqiYwmLmBnu9cby11oqVHf62RKiStn455UzBtM9jPxRjgTSPeCbYo7NA9FVUk6VjPqf9eS",
  "key15": "56PmZ91HGqeGcwovncSLMcVaJssLDogxjU7VXn88VdeWCv8pDM1h1MtATRgBw39ouMkSekq5iWgAeM74TMEvTPc6",
  "key16": "3RxFLb1Uieup3JdMzPTxbvrfJ3U4yG1Bbif2ZJLtkvyNgHSTpwjn86y8uJ8tUdHxke84ApL6X8EwVQDS2r9NiW1q",
  "key17": "3dukSqyUnb3kBCGd4tQiZavYaxDQMxdy6GzEy3s3zHWEpktbqb9A6XvU8orqGmXMEcJ4VKGvd6kC3pVnZVdhJSH3",
  "key18": "3xPk57saXBb87CjWZHgMxNpLYvbJDsrKhnK8A9dxrRYKF4Kp2mTNNC8xWdgqdaJRgwxzdcD6quMUkPrtFmxZsrxH",
  "key19": "3DTAKEB1XRXJkQGXpYwNJ2ynyYuKqMJXwQku9xbuYHnVT67KPYnYqj1K25wGdGfAchaXo7gZ2AFR8eeiRWcXm5Qt",
  "key20": "2338z6avrXAMhmRpQp2UHC2taNjEM1nNYBsKHkPxMgor1WYFGBJM5zpv2M1qHkQeML4XGMJfPDfdBy9JpiAMjiSQ",
  "key21": "4gxDHoXDmqbkXrD66D46DW6NvQsmqNX19r78HqtUjArqwp8wYYTao5B6x3ssKZ6PCAVc8uHXnaMAMTcSQiqcBK5e",
  "key22": "5KZDpCyAwZ7mdksHNMj4LXxbkQW1mmhTKteTMnQmFzpsZ2B4EMwoMKKLdtq1rkri1vnvchkGfpXLB41BJjGRqm6t",
  "key23": "3ByrgvYnGU9v92a5ogfKxMWTBSk463pEsUu3SSyAV9jvZtsfEp6254rA6nFK4wfEAYFesdwhL39XaKeJySXCKikx",
  "key24": "5s2XZHu9CRzXpA8JYa8EciRPeBZpR3km8pU4Uxkjd8KSNWqSziR5exKUdvYVpeeCjguuLRUfNf6Zv6asXTbiCnfS",
  "key25": "7NHNyAriHZgAkrQp9nu7TjvAX3rYaxEmAFfpoUvDAJuWpbQDzJ8zqsBERVc48A95Eir2QD18sovkEbWWkiEXQfJ",
  "key26": "PAKWzYdQBbyWavWmhyZnJjA4QXPpND5iYBWbDJxfjQxnrwoBo4Anuwy9FrwQNPhsZz4rnSKBrRxN2LexJw87HQq",
  "key27": "5NLpM2LfAvbptjP4xdkjafU8bpt37WQ8VZ51cWvUyfwURd4xc1mdy8F4zBc4WJ27kyLdr3UKRfY9fG3PPfJLanBS",
  "key28": "52m7X9M5irJBryjtskTwPiV2qGRJgNuS5NcBssBVywST8B6kGvYxVYCn1uesK9CfCNYJ9aP4GFeiT1pcu2V1VNEQ",
  "key29": "2Q3oQL29Y8VpJZyhDqmmv2p9htyMF1PCN3g6bdhcyjEa7XqCTvPHr6hWCT54pf4xGxZg6vNyX65NXs6sHJ5mKX2N",
  "key30": "5PCtzmB7REgggjk3tudJZ3DQQXzCErSqwg4tMEymUCMJ25gRpMzwqTEnXk9oq9cr2TobZXrUoMVj6KKfA4edR4fy",
  "key31": "2TPxMYozTMxkafPsYFMWXDFHUpz4Q1Cp5HMDY1dA9XnB4JUx5Ce1mQRjqf13i3gcNnc5hPBiFGeTyQfMtVdmo5TG",
  "key32": "4wioKvRfCsm2Q4MRQhTjrkEwV3YBPTDSJFLcp9Q7P9sgLbvhkjjoctBGQg2EC6u6Rfydiv9FVshKKfYMLCgw2zeC",
  "key33": "5Q2wMLMX8iqgYKh5Z3RHYT1fp5Dimds7yZpwAMYJhDQQX99BSTs1A21gtT3v86N5vXg32M32DDT4ur72kU8sLmRp",
  "key34": "41z9aoQsh3R6NN4hVaCUYx5KgJVBgaKgXacukqFXbaFAcPv6pX2HxSK2U361kETRknZ3Y6RK64F5D3f5gbpeHYaU",
  "key35": "4wggvjYWzpnmyrPLfCyHNENWJfPsSvCMvT8ho3wFLsUtEL4JSvApgAkz3eGnRi4vXGSiUCR6WB1jJKhBkM1SM62S",
  "key36": "8Ur1B8EdXiXD4LpYVPHBMxtSW9Gbgaevek7tp2jPeqNXmdMRJJBvKo2Tv1xevLnR1ebfrPQqzFsn4LUidGZBHsq",
  "key37": "2So3Lpph3sRL9LQcWrJdt493cW2EszHKNZ9qqR9ofu3Z645AVfeYhwW1V1QXWrGHvEc2ixHD5AsuYPxz7MRosBcZ",
  "key38": "29TWJEXhEY738ZBqfCsv7Ug9qpNCaUZovt8YkDEQvZRxxmDZWu1H6UNz6qyuuE7HvcTEaku1aehFkkunNy51hReX",
  "key39": "Mp3VjxxnSeFgFes37bU9HzHwLAHuRRyvSRyLTNdRLpGPbWQ4xJ2neoRmZ774kiUJNBw1yj3cLXD8pScFm4UHZPs"
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
