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
    "37nM22mV2gzNL311gRys2EQswxWNUGMxWtqNJavjznc9QeE7rHhAXj82uuhuSUNSgieqHHojn9pYhMW4dLQNhYFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qghsUMcxW1JUmSq4roxgLuspKLtXNMwFPupU8AeMvFiy66BUED3YzWse3SGxq9YY73dFXoE5fEaWMnWVoQKD86K",
  "key1": "3kHRSCDTZ36cABrAGGY3fgfWU7uYNB8EXbVPqoL8G5bJmLYkv6kpQgMkN2vzNHPo38EBaqNnXbh44za3yUjoDL5P",
  "key2": "489Hwg4cZU7dSgimPkbNBCBVJnHTVTkvJVxf5X4SXfe1fiFCzPBhFASrtwSjskwHK2GX9BCmcSWHsRBK9DwY3ey1",
  "key3": "2vzjJaxPJv8iyqTp5sirE8wvQvfTziguu4kgqZbybEY7esET2JcnMZPuJ5zd8N6X9tafsSuEYU5GTDjbroAym95R",
  "key4": "DttVJskZwtN4VTGrx6R345RTBMGe36TZa5vqm4rXJNnC5tV2KA9tSC5fS39sRipF2iyEh1kucvZb5nCUjTi1cvg",
  "key5": "SbMeKLASMWrKYY6mZbXfqmVUrsVXkZLpshW4DxpejPwxLepEFmxaq9Zhd1fJmZTZXG1aSviKPs7eReTHSYqFdoS",
  "key6": "3oQz2Z3vg6t52YfE4aQ4RUpnTKbMc3KZD3EjLQg1Qs4ajeCJzgw29YWLRfXGML7RvoUEwse57SbeLMApRSCvPVPd",
  "key7": "mhNxQ1PsLamQpnncQW9MjsK65nE3BKJvuDvzgdw1EEbB5WyrM6ddq3fA1SpGrRGpQtbrpbqP3pWVhtum16WathY",
  "key8": "4apW2Vh8YALdGdAEUWixc7NdQwAMqRqREazG7WAXCtsZUZF8qmKcar8yPGuFppaJMAp36raT1vzp16XEYVqN6soN",
  "key9": "5EZHYbqYBvJPqAMGqkZJ7ZZ9Qsqktid1W6cZ97MmU59EQXCw8wNzB4tfTSXmgVnr8YBoqZzXR76FoXgGtZtbXWLU",
  "key10": "2hMXn2H4GWngVGHZT71EYocC6MhDgWkQ4qiTLN4a7JJtiTJE77eNjBmicpxQ1uAWZh7e4KQLcNFAbN7fzKb9hkDn",
  "key11": "3owzLcwwtgzaaNtjCDs1TZQprucsCAc53Hpoctsf8chP92jjN9oDoGULxy2PsJwRvmUiAPJwJudATuZjh24DHtYR",
  "key12": "2C5FJTYFSmBWFwfx57Ryk8uiF9zZqB89q2C6fMdKBD28NWbF3GmGVjVo5LkPp7QJWEJVEwszdJCw7KeqPjexguHz",
  "key13": "2oFAFppv4BRvQPP4GVbJaGCFaNdrp3xHGhz2hxBpXXqgXJvkBavYGufTZZa9JE3zyDzMtxKFas5ocD67SZzSV5JU",
  "key14": "41PPG9tfzcoYM73uLTtsfgtBBW767WMsLvbcStupFFqeTBzeYKSoFi9JNQVzKWuBwkaHgmFVZuRFYbaktkSWK8o7",
  "key15": "5bnKDpbRiZXsxJWKLFYEGnq31QZ3pUxsVDVhkVpHHFtAE3DHXcq3vFNRBPUhKf8Ratha3sLfUksDBLdCbzoAWwdG",
  "key16": "ZhjLCoTUnDfKFBcBFXa4ZSCuyVuNZpm4GJPxZBrimkeK3fcbYk9ZKk5UMxE7H5vvvWJTrYmfxbGki6zCzYfE7g1",
  "key17": "4g1eVUgypf2qJMpCEewQUWKeJe1Wj1ViACz8TibiJQ4g8Wf1QorMLdXQCC7nd6H2A1Exk6qdqbUdJGkhtciJnwX5",
  "key18": "3Dixt3PCrXqcyM5f1PBr4UFeTmWYPGshcvWip8uZieee1MUsnVXERPSdTGhyyWh2pWbaJVkA7hXNPKBsvW4KQsMg",
  "key19": "3nWNBL6Y6kZWDTJVBpCpJeSPAyFAxsvxFnnRpxrHkpcTD8afZDHvBnLCs6JmboBu4Zib6DT35w2o3E2CVADUhpPA",
  "key20": "3Et6NojxepjybHFDEZCGsu7Fop9fWo5GkcQjnm76HwWZxsQorbwYEsxCkE1TsX4RsHnsr1FAEeRCEgRiQkjie9n3",
  "key21": "4YkJ7teJzQnS2BY1bLcANXcbuiPsQuEp9A5KBYtXpTAyZjU1o84KFEyZZeZdBkumqC16VtVEMmBEbFs7tXyKees2",
  "key22": "KQbfb81Y1zeU5LDQZTaC3PZaeHDot1sUdBAvT3yNrwHmb141ceHYXnUkXSuiRQV8vWVf3J2XeoTRUpq6Kw4AKQu",
  "key23": "3cP4jGDWqwDVY4kSQPQ36AGPNDoLrb4ijRAEpURsh8URK7DBFX1BXi37GY5pJaJR6BQHrZoKSoFzGBBAorByhdZy",
  "key24": "2tfwAAPezsNbDLVUsykvPWgt1ZwHqKGYgF8Ho6pCCyKfyRcpu6cZHBJRiGHzC7zoCMfWY7pvTToNSVMZJ5tsKGPz",
  "key25": "3nUz36ZsDnS41qbFb8UZg4MM5keR4h2ondryF1TAgCnzy9CxmF9CMdFtw5XPTigo5AmB7d3hzmsr6a1ALpdkSEYa",
  "key26": "2YhJ3rYqjujpkvFzuwD7r77L7nGJyc21LZ3mS1vXL17oHdnjiXn7cSqKPwn9gTx3mwMRKsGNdRRJGMD7BNdjKiT7",
  "key27": "66LJmgcS7DGzGudNjANQ53iUhPbbFeEjTKpa4zaN9NTNL4kSCjY6gnWacgeXxrE8K71MPyhMuxvqrJkWqVgZJZEh",
  "key28": "29YdXVAYfEHrDa14Sv88d38BcKeocDbBUDEza8tjeDTh8nPhLMVGAnqJq9Vx6E9pGUU8HgGYfKjNFNS5bh2XR54h",
  "key29": "2gftJRcSWCskdJGm1rTBRGd1BhjgyqUP7ffVRVYsYUm9hsqqchMtctmdwYBnxVP9jQoj5z1UN8oqpxWxGx2RNf4f",
  "key30": "28hzd8d1QmpeXEJLm4G8gvwSF1xdTKVKfH93dwJYAW4aFyShu6N3HiM51FEgtH8yttBbu37iENVso4LX7zMn5wWr",
  "key31": "KKfDzzYp73E9vqhCxmvzMyTpqet2cc8AtUzYmaxRSM6FoC9tSXQ1tkwnQyqZPKxeQBrADCu1o3BfJFxxFakuhLT",
  "key32": "5v6HmbpV9E7VZEvPH9i7NNhLMMvmpSXWG7aAz9wBrSpFYKxCWRA22AK1BQYBzYzz5SLg8j2bfpnnNX5VZanz9LY",
  "key33": "5gn1x82sX92oizYWF8H7qrsXSRaVPMBCt2Xf48Tq52rVtkrVZB6Yvtm5jFrjenZv4AYpMWu4Z62UthoA2DCApVYJ",
  "key34": "5t4piHNmDfYJJCvZP2aQhsJfXiMsWopbLWcq5bmR61mAi1Bq99e5aZjcE2nvZzZPN3DCCm9rrAwAfxgWaL5rRfBB",
  "key35": "7Gj5ty32XPzRwxhV2c4FqrN8rFJxLMXFR93dSUyUJTvBrL7yM2M9ekjwTXnd5vTZZGMrDUm5W7uNkBVJCF6ebBV",
  "key36": "2C4qtdPw3y9ucgE7adV1oosDJKL7hio43pAPUBVXaoCGvzt6FAnnShPHBpGduabvjwFJPNgrJ1jo2SrT4d8onma5",
  "key37": "5SJ3TjWGyCY9TLGyL5zbHLjXCqpMCs3VVfh5iPdKovnyfGagjfMjpNHYkYAMv3k5KYtd9brznKRDqaRSKnCe1zP3",
  "key38": "4wn6q9TWD2qE684rfLbJoAUr8iegSErgGn32sGKXKTcDnNp9HpK8PZqCk5KrBrikvxJyzUBQ1iZhDXXHzAvB3V3g",
  "key39": "2EqnczYSNmamSuSg45Gu8o64u8oc2tRfuuQ3yrzrRsKerQKb2oXj5jGbzbsDi7M754ZxarAzphb7PiQvkNSaQQBL",
  "key40": "4A1t6SALDP76TKcBZAsfNkcAjx8929AWYexE26zjw3KqL8SkspeemCWZBYXbZWxmfiZZXmRXm6ftbwuC3wzmLy5j"
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
