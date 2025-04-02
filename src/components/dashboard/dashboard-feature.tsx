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
    "JKMFRRrTLAvXGcab1qq4PMSRsG9AbEPRRVDVhKzkwzNTyrm8VH7EKwMn1vx81Dsg2LRcoUXQXcAsuc89hB1CYDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ky3rQaPWciPL4nXJmpkFfnfLwNw2PxYDNm2EXLmLoVgXnjomsW5a9Vq9sr5QWDwjYT51eRf9mgyaWZanRUz8wK7",
  "key1": "2tF1BjVpDNYLe6WH16jBNv1ZauWEK8mUujpTHsHpajPqg9A4DWuQKzt3w2ywbzzuwwhvaaTtguRgPLCpm1FCoRGv",
  "key2": "58CY9G4VPzgvwHgLvJN5USCi3uTmuA6pP32PXQDbQY6Q3LzWASCCvW1GCofUYaGdmvgeMFr33GatLCN3migytryW",
  "key3": "427yyiWXfLsut5mrjgXcTKo2nLtiUWVoB8zBL1xta1GDtBKFfXii8qcSwU9B5ps2G3cCuAqjVmnVnFdzABctBSzQ",
  "key4": "3JGwytc4zLeknn2ZLMvtxwijGS1a4sCb53BB8bH4hHJwSaCge3gWNunRXoeAQn9XRToQi4USnX1wRErMFLcwDsRx",
  "key5": "uTSuguusco1evDrDcvLivPvKeYy21ipyHufRQAkeMx3mPCGLks5yVHa2AMTGuNkr6Xp1syfvLMp74Sgqwmk6HBq",
  "key6": "64dsA1TMkViBnLJdwTVmFcjgwZ6C4eq6RGXY9rQjrxKzc6LVkPvTWQmppH43q37E18w9Y7UAf3NffLnF8T95gbcH",
  "key7": "3BdtRtsJy9pahfW4u5dxz9riTKPUZzGg7rtFRmNddgYnfdgxjEsFRfzHgmnkRvxDxYGSH7pbVAMuUHz1evTvgnkM",
  "key8": "4SwUkeBCdgnsLT6ShmVD2VWfNVsqnoqsZCVNEPjZNnEFNFQZTTREC7w4R37WTE9qV866zYRso8EQA9QuHhmyKjBp",
  "key9": "3kUyaqydqybCB9ciRae6k7hAKDrCi1fvZVtoXrb87AJhkxftFG8kciSRYdh1d2AsF7XK6vvFT6BUXCACqfE4dXj9",
  "key10": "2mZzJhZvp8sxiRPaFK5PoBgQ9gZqCY8nyaF6qaXKffP8yfjME8Dq1mFVuqwP4dEzUjVAA7JyiAi2cmr5fds6YMg9",
  "key11": "4HWgZe6shU3EzWz1yeFW1FTqBEnC9bsUR1NEFndP233oE6bZKuf5oceB9KhvM4b4F8qKbHhVoN4JMCDS5Y9BLcwb",
  "key12": "5LPfRe6Y9ZoGexj9M3CbinfHsj6ubfzTKB6exG1AvQBBQ2PUngmidm1GT45f8LA7Eh4jXFuHhuRX4tpqzEtyLzL7",
  "key13": "3qFqrGJfBvhoBCLC69V6oBFK3PzUhayhyEQBvJxm7sbgzf1whySUi1YNo4xYVcj1378fsSMaBXsa8YLjfZbwTpxi",
  "key14": "qwRxhBKtSpmJjFfHFCcFPjDvjv5g97JSGZJPthKB5UwMAxsZAwD8SDPdL6j5EE83KbZx9zUZGCD1ywZowoVtbZ8",
  "key15": "fwPGW4xrLSpbiKeC5CL3SNybX2QKFQ7N8fwwVhYo7e6GRNsaZRt5qAnNGyfjgvowzUV8WEq6Rs74gNMfPM9iyv6",
  "key16": "M4QDSnBy2EJWb8C5689sDnScicsL8ENt3iTn4paiqTY2SzZBdfUZYmhdqe9Cvty614VkjZkLvXog7o2JVevRxJ7",
  "key17": "qJg4r1W3SfgntRAuyP9BzMqD3bTJGt7YQtgv5mQqmXbqXSbvVq57QUTzLD2RGCcDg5DhBo3mKtuEeotLowG4Aac",
  "key18": "LjVEB4pSFky7JGTrKcR5o3wLZtYnZbEmJXxxVPoyJvGCeyefpoYxBTsW7HZkUnvz368BSGZEPUFKLyn4WPBEafx",
  "key19": "3qUPc3TPNNEXNneJTBER4z9B9qdDohCd9nFAJv3X94WGaCVSy8pXoQwRrmeKoaCgRdK7KRMYgBNqNGLWCenHzoac",
  "key20": "4yiLW2UQccaXREZiBdHmQgELXJ5jrGauD3mB674KDyBr6NXPdd7suy59jDscCTKSTbAVDUeTj59EwsrbupbFMFwm",
  "key21": "24Uz4gbLy4QY7BWNiEnAUM7p7szFHk8s5J7ZqSoFZdZt9C7uPZRaVYSNzMpfNMvZqPBtY6iWZPdDw1RSxgbZqXqm",
  "key22": "3hz2HK7ykuTbxANBZ5NNjU8qPGKKVYizPVn8tj1uueagZhTfeAxEBTaeunHtcJg7T4iABriEsDhjHnfw62TfTj31",
  "key23": "46NFosTbm9SZWhsDhZBF8QTM9Txk67qsaiXXisXL2wT4Qdcpb68B9vZJXnWUZF87o3aGhkZyzemCcurst6jhXy9E",
  "key24": "39N4VBDcHRdRPTfLBdpbRQyCrwc6p5F6NAoXg9nNn3Gxw8JcjcKQ2pN9fEK1eefEenmqmCLctXKiCKX2gRDNmsFX",
  "key25": "5hjcPoeqf114e78nTxaYLrYV1XFbqG781o7fciYt5dt71tgWfYyg5cBR2NAzo5ckPVBUf5etCUo7SwUAgZnANQLt",
  "key26": "k2fTefdcKYMxneDhHoqyZ81zLe7PyFQiVRZY64U4ZMYdwWCudF7Xnom886P7KvbexSL2dxPxQEMnH2eUZpBZgVW",
  "key27": "3GL3oR889kZYUYm3dQkZixDNeKJLMEJbR4aXw6EJRPEBPefBVpNC88wqSbiTMWgaBxrkvKBnVLfzut8iRGuRTWa",
  "key28": "5ueLafT9L6NgNW9b4aaKEfWrJhM7vMhpL1smRtra2acjhzdbMcVHFpqGpb7g9cmJhwUskizvbzHoEa9L1hNdKvJy",
  "key29": "MxhPd1sPCdrJwwoe3w6CnsRiQwvuuDYkhHrYnReXyGaatKrQo9rwTgR3uZRokHFoj65i7dtXSWzo5Mj9n49M4bb"
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
