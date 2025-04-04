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
    "2V9UH31gFBTUNB1KUN4rRZv9Pk9d4Z7sWQHwxGzuGjduscRmdMjr62xZFxCEXj25SjP4FtpKX89wqLJb1eLAieHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C3hDibh9oZRZqNhp2CVVGfoMZeEw67HC7iZxwvZezLyGdXXaStEGw2yWHkfK6pYcd6d28qUsgzwByZMUFMhFVJL",
  "key1": "4jjWGQpF6eSy9da6w3YSyXhdXHspmPSG5LCzYiBgd8qQ715FGQaWcYKYdrmzNgx4RfVbQapVFv9jErdHWeRkNmpw",
  "key2": "4prBuKyoeWJc5dFmgst6r3snDhqpqKyA7epaBGrZAbAwXHyvxYpC3NXahPaLaUwT7j1SP8PmGVDasBV315BXpfm8",
  "key3": "3Fm2q3NfQZVgSLda4WhVDsZ792a6xQiHgrMJn6e3QchRErYTkuBPJ7BDGvoGp436Q71dBJQEj6jp5aMDzxfvgLbM",
  "key4": "4AXYCxS14yU4xnxqWuiNKFt9xKDo2Q6ndnbgqNTYrSTKm1At7asS6mkqExuNqsQENQ5fCFwK5fMXqwnPivKjcCtW",
  "key5": "H1LduVevAx3GyWGv7hjn5JpViPTthCYacQQREwkaoeSjVGr9MuFUY4X1SrNTBBQc6o9Y9gUWqdfcNhfe8LLiM4v",
  "key6": "41Zr3cFgJcDRw3LH8EDb8eRR7Qd5rU4kucg1QBFCZCW73jF2zeGpDT4m7FgxqHkimmPT5Zip2gCCGa7GU4FD3BU8",
  "key7": "JAfRM7A4AqGGet44ebRAoyHrHf2LepfJ1WA6TeofNFPotpkzhmBQP2BpuE4zxAfAwDoQzGrMARK9f6KMHYUnqxY",
  "key8": "38dVMbgcLF2AmZDKrXkNDfdL3ohv2tvgCmkozVcb1eahZj4mEF66zjkambRxfMCePZD9CiHZxRkfusDXrHHHCq7c",
  "key9": "2EfBRZE4NPrGeB14BgSHEafQ5a5Znjqc6Cde5QJaDYV72NWz8wxcJiUz9K1PsHo28cD8fLpQY6RnVXyLEVt9SEUi",
  "key10": "5mpzWPey3Z5BGpgV9YKZrW4GTD3jpC6Bjp2XiZg2kqmmUWemXoVmfcAoipnjMmfsLcjQuc7WyhyQ46xZXf9rzGtQ",
  "key11": "567AQfEQPqud7xtB3imeUnCKApM4Bv5WD6nPW9FE327vjcwV9tJ9SDJ4aMLoKuuEdtVGxhQewHtBvQLabJSzRsRL",
  "key12": "4HKyK6WXmZFvR54uuvCyby614yYBpC1UaWRhrZjVHkXzqt4EnGviZgeJXEBf984wYE5udUaMDa4fjZAQjNibrVne",
  "key13": "nvZDE57L5Ver3SZLdBueNFEbyFN5etVhtshBreYQnmSw3WcMLnjocfAbgc7yvacERRj8BrcDcBpAEd7CvBujFqY",
  "key14": "3bbzT6Axjx2ECog7po973PgoqRwV7Hnt2qgRPNydFWRpLei5oHaesyrDK2W2sXzrPd4iSnpDMAwdQQ83uG7ki8ZA",
  "key15": "5ktSF5p1YHp8UwyC5PdPmCsBd6iS1AzW4bQ6JSTgAw1HJtypZFk1nZPZHF8MoUduBUAuFMFYZboQ6YVNRLUitx1i",
  "key16": "3zxB5XLRHGwF3BCe9iyZhchnRRTBXfkMvJXqPwV7CLAuc112LrrD4PeNNSmuxpvTKxM2AASF7xwuqoWnXXsX2kne",
  "key17": "HNid6PmPAnsL41K2vCFjmsdTDCQK82giMk8jPuJpEKFwkDv9yTstGQTxoJjjkk8trJxbjgfbTWLF2YbUmELwHkS",
  "key18": "WsbkbTwc9BHwEvF7yJ2LRcTbjPMY62SJraZp71DgDyBf9fWgL2zBzJeyuTcP1tZCKbmyNbTjfQhW6dbXPKARUCo",
  "key19": "2VDACTX855GPCnUG4AuESEtoiTEoLdrUHZRcXTbvfZC8K8kAC94Jxst2q1eFXm28kjKdgcJuTxEkNBzXy1aCxrWv",
  "key20": "2ei6CEkFDK6v18KLq7UZB9fZUW8G9Qc2oYWXXt6uxt58sqcphEiQpvsVpuGxBBK2NNsoz15YKVbuMN6EXXP6Va24",
  "key21": "3Jz6jvquWh5akjNiR1nWh1Wrp241UWDi5Uv8ZgCUFDmCR78v3aq2xc15T9KXktRY7sriRykYst2Y7i9TGY3rqpwP",
  "key22": "58ZehEH69CC6fLkKGs6upXPEey8jCfMF6q14vLZyZEwrMM29oBpYSNZHNKyAhuxqFa3GSFHNCKLHXmGxJiAsF3Zt",
  "key23": "5aXEYww1JXxT2eC4DJUBwzGsxBJQ7orTutMKnMvQVBXvGnjQZmw1K9QZWDDYA67np8Czr5Tm64PhWX2XNTq2XYeu",
  "key24": "4SdeTL11eSqN3SsujxMiAVYPayVZY5XprHbfzP6EH7AMc7Uj6cK9d6j4FHBHJuJroZGyuqSvoDY3HrngMc3FdH4K",
  "key25": "5i7VrehshiPtiQ76WNQjozEN8wbrVAFc7sRMbhRekfTJtvNta7WmRQiN4vpxbSoupLayFFVCLqugoQhr96H9WKhT",
  "key26": "3Pbw8twL5UnN178w3wC6VWPE3BgLRFcAJC8bHLUFnbtNfqrX5zWoRHi3YiszZQkqY9BWmD89BqbVwCf2Dr93rb2p",
  "key27": "5sythEcXt6wYCdWLKNgrmm4MiYT7qwChkLxctiDC1dYGFgF6MnWsLmp1fV2H3SiG8HfNDj6h2SPz8XsJ21rwhpub",
  "key28": "kkwate4MQTjg7r494fYa7sQkuLxKNZpfSSYT7DHF1iqpSs9kNp1nizEnwNbiR1JGVgUKcXpfP3SE8isZX7aYvPN",
  "key29": "TBdrTKqieTeq9a18SKUZZXwP5cqgETGdpguDxcgF3BAXwDBkHpRQyQXRgnHweRrKaGxf1FRC5aAv4kEBdPxPyYo",
  "key30": "4g758uJHAJNU8tbgUfz84CRBayfPHqaNLU1xHGtxSXBL6P9hqnydEXU59s7XN346XmmWy6EDRhei7KCBew9R7Gt2",
  "key31": "61daiWU8MrEmM7xe9mo7M8hBa8R9MdkdtNsj2N5b4tUxgqwnD8xD4XRwQMLGfVJW8FGY98dTQQFsUCJHDMNJZzqJ",
  "key32": "5SML1z7scvQ37n8eVKrdmKZ7RxvKGyfK1ZxmX5Cjh2LW7FBTp9KRpgv99RES2vTaPqGHo1pLW6AxGT78CaXZmNnP",
  "key33": "5c49huxes51bgWWsU4EaegX7g5MTMx8awReSyW2BSjCG46ds4e53WPShbPApwfGMum1uSExkpqCcxyXXaZ5EodDX",
  "key34": "3JuYERt25FQEKsPAWWViLHsLVyMRHa8L1h3yTyrq2ERPr2FNrJ4uear6pHV2HQgPQdWBHHiJCEvjpBgV8n8EYtcj",
  "key35": "rxhtJh12UMvAfGmNFdYBLVLi4CVMx7Ykw5GMG4rbEupGAYAVLMNSkL4PbNHNBHEjxGesWd72sdr7Xi7zoZsFVyP",
  "key36": "3fEJzfqyKx68pesaEe3bc2AVrBq9cRioNQZExgwpiV4GYmnSq6QUXsfePJbjzxEhHF5dEiFzrdekSxSq9e9GdV9A",
  "key37": "45aYbif9ZWWgWXCiunB9pon9yFuEPrabYnmxrT1g8C97mTLLJhm16r3bZJDV3k1Qo2TkLaqD4rgWpbiDTxCXWHgs",
  "key38": "3NirDrmyVVVcWKX36h1xf2Ezb1kM2hXnCE4SzhN86fU9pD7EsEVh7YsGK9VvmD5t4WoUe7qScYuCkCLH5SAG7oGD",
  "key39": "3xiEJLChAsV8tGJciz2FnXKCgrTE2nzWfsafKqp2suBz3WhP5NSRKRTyLRvx5rxn91vnEF86fsckMzaK6iwnLGTa",
  "key40": "4YmDd81f9Q9yP3NwrpB5RswBmrmhB7N9S835vkdrW5fUikceH3X7wg6ZhuG1NDtPTikdahjq4gh2RbJ1ERMK5Fr7",
  "key41": "3ZgXHLKBPbHWjN8nSDnN3rpLdPNa8Xv48sVcyzYPHu7mKFgyJMTwoaP8WkDpgv71bT7G6yAcWRwLNV3SdhbCD1Z8",
  "key42": "5GBXfhoEZoikkDUvbRPdhBRkEH4VshP6rpfQ6ZW8iyLCEuEGhARCvbPdw5PiqYDmDw2qhWLeVkADJeAiY8zGA9Nu"
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
