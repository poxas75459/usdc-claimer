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
    "4uTfnPwt3VkcS3MVgyXEFwCtvdZdz3u1N3E4ajtWPxAX41cSdKmqSdVxXZusqtXpzx8J1UiXVBQXtmvtN9mFiyzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JEdik8bDExXmUsst19Twy49apVWvK5gVXd4v48bfhMPXVFDe7KoRTr2BZR7qhNtC62iDrLhLXFkuB4U5NMeSqsC",
  "key1": "Tf6NNyno8ewENCY38EoF86YKhzxcH6oDvNtJkApxp9xNDiPVdboUPKJVVzgL68GK5cAsvSZPkuTqmVbuhJicxYo",
  "key2": "DQ5fj5NjDDyposYr4XCJycZRoTroFJF8iwboDiTZbJ1hkr61qfE6EaeeUj3kxhBHVSzUFdC826jHUzZt7B6cJsC",
  "key3": "3gQxSVdNUdfw1zHMw2edbdhNtFXUV5vHKXTdZpYA4d172tQnkTU15AYyZr2jty1KYnv7QhVBWGTTZKWtRGwcx4s8",
  "key4": "3umgbCcd84R4cwRg5cArAG1UcWXzR3tAmiMYmVSaBtQLQwDznM95FwGT1pPMKuDhnMiPkihLGwAH3ff3CG93sQq4",
  "key5": "2JTD5ZxgVG6oWQyFs4DyTYq2xd9WRkfDTC7CCiW6NmkrHGP4SCTNxVqY9WuRVZjGD9o8vE2jbJ7yXSUtaC22ryh1",
  "key6": "2LkpaYmxAimrzePfQigNScBu8TaZLmoYz5wT1vxK53HzTExcPYS88C8k6yDfFXVKbtLVq8TKtYMBadtk6kcQJBmd",
  "key7": "4CagErKAiQmbRLddL9mrvtrMHBgqbBLDXNxDsTCvmc2Zgd27MLKAHiVBWhiQbE6vVReWGxkGy3baZVbn3WDo4AWH",
  "key8": "vnzFyWVG8FAaiDmGszoUpaMTsfiJwdpUEtYGy3rJdVyVcxbwTJiaAnkm9L9XdSKzyxJnwtVYN96EnioP2Ca5uvm",
  "key9": "UH59ksB5B9VxTZVx3AzShisQZPfknrQgwb7AbhyANCp2DkzGkPFgRuEZpCG2UMhFn4J9SAheknUtPaoNBfmT8j5",
  "key10": "58aqowuZRS2bfpCwX8rQakW7xFXeWh4YtZmiL7hEfRhTQz7S2eejKyrQebT2eAoD8yKFUzhnaWVnQebyXgzsMogC",
  "key11": "4KniMqFY1RsdJc92bXXcxQLWPf3B2P4ke5KX864tdssUmEcoWRNnCpNSZRHoFq2QYtr1AAeQmvEdzzPQg7hju38Z",
  "key12": "59nSNXvnm6WPMYefkcAtAxMM9Z3Xchn9Pg9pkRWmYpAc131PDZDapeZfbqiPGbq5AutWhSfyNVjQns69GjAVzKJ1",
  "key13": "3VBwS79G2Usrnd9rRNdqUnKXGqShzvqEfSwiMGuuN7JF7rvMH8FBuekCRwbQsxeoBuR68Q3xgDNQJqtV9DuTR46k",
  "key14": "4WnFfn4yEDcCZA9mZ6tAQMgeBe3Hc94tm6zczd5hhTni76zRDA9f4yDG9mknmgZSts3R6DYBQJyrNQtLqJuHMLZt",
  "key15": "5wxtJL94DziF4YmGufLdJstGD1u1HNWumdLkLUC4jPaTfSzmWuuDcbQT4G4TH7AcdUTciSoAHpNfEa3TPfmoAEy3",
  "key16": "3NYBnVUkpbSFt39L8jffqg9iTt5A7doYjwYQhyUM48PrJLZdqpm2qoWo2K3hpuStWeVTHHqY7DZp8DEjH9Cw3Nq3",
  "key17": "5Yz5abNABH7K37LP4up9f9af8NBQoN52TQHKe8qnKoThBAD6aearmFWPRBjftYRnQAnUUyBsYMopMTNftn6PWTbq",
  "key18": "cA2Pnmo9EEJVfzg1kPdJ7qRYwqoTjWgE7i6f92Z1WwNMPhTpEyVBnUCZQ4Sx8qLbaP61iLopr62nJWphQB7AShW",
  "key19": "4vkSx8ogHCcJyWijzvSSjayKpKFo4QMMBTaynNMdYaUK8SR1ZJ55B5n1FNKsnj2966q5KKJrrryjHxYeRuf3L5dM",
  "key20": "5kv3Bu8MPigp34P9nCxJsn37oYE3nWnDrWQ2bvFrxvtW8aZ11dD4ykeLd9VQ6Pjhxsvrn1ahorKXSdcJbfZNTWgP",
  "key21": "2RWHwfRVhHut97S7MPxic2SttrUdemjcTrYoVeFqhQjSGa8q7NgQgiD8LV3HKU5A4HmTbT9nikS1n4aWodmtPqTQ",
  "key22": "ps1MxM5R84JBZZ2x1yFZUKzsUxioqF91w39GrRxj1t1CDAV46oUxKnvTV9Ttdd9K6YGzQrAxDYhQnGbdrn9pxEx",
  "key23": "2LD6HfqPmfRA4y91kk37yWYf3Bcq4JQscxLPkSXvXN3UtpCeyhTQcj9EZggoVjRPC7D2Ftcz4KW44PMA2rEEr5XM",
  "key24": "1K5VZnnMATiE6gvjw6r1pAq3pb7ihCa4uttgNQ5UTT3DubtLRjvqQHZZMZpbK2h4stHpANUvFyNq4uFTBPVJYCA",
  "key25": "4qpzhUhgXVZ6PHHRFgPa3XKU4yn8c1aYEjdiMsoNLhzazAcnNEtctjy2b9f5Yq3mV6m7rCVJuhj5C6KTDz92C2k9",
  "key26": "8kMyTjV3mcq7UutTXdUmvckKksipEHEUuZ6nGJaVeE2GhpWn8uWCdCHiMfijaHmBnhizQXw9R79ftijJc8fe3ME",
  "key27": "4CxcrfxEzU8YzD6aYdvnzTsrxTDbf6rB77KaZGMntdNv7QtUUCvkHty7uQncc4Y9E2m1mxoqYLEM7cswHT1qeiJW",
  "key28": "2qtYrbdZo4ovbvFi34AgVuBUWCCEYdSStYRTPPQ1incwY8Ln1p8wi2XB2dTJz9gb3kHiWFw2fnwYjcH8BqMmi8WM",
  "key29": "22DdyFFd5z5vdDsy3rWL9yJ7nF4S7VKxYyNbaXGegs6FfE51ko4jRobHk1JLBShdEHZZGzrFC3Js33npE9JNzsZD"
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
