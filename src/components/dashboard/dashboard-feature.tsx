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
    "58z85mZUAgCE4cbQKoQiPeFy5ZYDiYmauuTot7uzT5ax9QscsZpCttL5j7iQ2p4GoNH6xwpuMZydHd29GZUudbHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42RMSGGJAce5NnFFAvm4EXkaUGv5MdaDpHGxFDpuLS62jx8nVB3oSyWaD4Qd3SW1fhcWo1UyxydYDp8GRYHmTphV",
  "key1": "2nN8bxvdkTYYHzrHJE23L2nwYDmqjobfiXAPhfdWcfRLL4MkBvmNgg9HBT35f6qC399W2VNFK7aVxJtwoAJwSLAP",
  "key2": "5C3hD4zsGM7LZ7RyhQJmz2txj2p8mw9uCmD2gHErrbUg3CHhHGNCpsnpTXvGccbPppJyVHGSsPxtWf2BDaYjScB1",
  "key3": "55RJAJWkMFtYALRRt8STKtAr91U2SXakP5Xoxfejdj8pwwTdgYxST4fnaNxxP29VL1agdTW346VM7GkDAs88ztE1",
  "key4": "D729jJ6YimiozQL4tcmVMGLVDifYqRdEMP6w9T2AsYkADSz4WkNUpDEnpnVD9ic8c8rtH7J5vFhYkVS8LTfXuRd",
  "key5": "CJgC455WUJJpn1Wf83N4jEQcZQsqg4tSKoXMrNMY8SMmbqL5KBwDFqRscYUHx1en8CYVQ8GxhwGquJQ7KacN8P3",
  "key6": "4ezyy7SyJFXDvAfTeRxWi9qczsHd53e72a1xAY1HeT6FaLNk77E5jriXfLXtY8nm4a74ya8wzKBt789ozJR1pqBw",
  "key7": "3oxazR1nxXmGFvM4seAMdHKFJ2dLGh3zzg526kcC8SYJioxQrKLhRU67JdQNaegZn16pdpQSFaRBHQUwLMraFrpA",
  "key8": "3kvqjqZa1PDTZLEeMUtB7Q8GVdVahYyesvVQCrwtMFL9fhMLcWL1fQWkJtcTxsVqseTTS7e3M97VQkNWvJomNktT",
  "key9": "wF7Szn9A9p2Jr2q13LY4VxsAoHVP76W66ExeG4g9LwknrEDTVzmeCRHjirXqxfLeik1vfi2MQYJtb8oHeyZRWFV",
  "key10": "BaERawEFXu5rp9uWDQm6tj9wuus2udCkgjZKyVXnqUtG6gytMSRFyZs3p2ugLnYYvHAGTbi2mWtdNWvr196Mg6V",
  "key11": "52HfsoJJh4gGf4Q4tG22yLHz2dB4em3nf5zgjgMLiFr3khB3RjjPMhmKBaVUgyqNcwYhTkQBqEzjAYKhMYSkMacy",
  "key12": "bAYahgXdiLELwQ3T92EVRdD6VMFGegCJRPou245xfHiqyWDKoJtwDMAhSTahyjumfRSk3bWhpsPRnPUbfQwkZTQ",
  "key13": "2ERiENxqHLZg98ZXw4m7oToHiJgLxGmBJdFWWo69kwbP4K5HDhLZTEzy5JSkW1ztr1x1wUTdoJUE6ywMHgixEUk4",
  "key14": "2KBoWyEKJMVsVA693SUbDGtXM3BsVsi1jvSaDLZaQvCuAuPNuoGJvtPrwWPKrDLWSbwENu4buidqPuiAdv4BwH7g",
  "key15": "4N3P31LmFydFN7wbEH19yQpBDBeDSPSNJx4u6UbXuQKh9Ethe1RQi5S3EA25UgJmr9dSSzi4JruqCRH1QL5LdAsd",
  "key16": "3QEkUN8XiK6vJGicm4XrEFZjPKE2u4FE3jAuXkh6QaD1M2NwhxJ4tPJ9ygX8jNYFvUVVGhGbuzR4PrBQGk6qLAVD",
  "key17": "48b2C2QeUEX7a5uRErkStwZjWJ5n8ChyBfuozK9AH1cZQe68xwrkZJZ7HBn7YPLzioYjG7DK7kEM6GgFiKEPbCLQ",
  "key18": "4AtwWj6xfUBsX21nBqgcb4pu1tmLAGhrzpefFqCkNFW93arKbZ5CL9eSbmnzcvsQPjrTbuvGsJvFwB8UkxBCuLXm",
  "key19": "5GbEMXDfD5RSBGm3njMBNR1ZKXa6dzci5d6UgbgBEekboJzk2cU7UxSL89e7LGcfPpYZRgL5DKEt1PbmWrrnwxfJ",
  "key20": "3PtEhsM7Y7abE1VTHX8K81G8WdHkVei6TYaP3xGiEKc4ktGHyeZCtfQarZKzzMY2aajs1Y4uqoyDStZ1dqywB9rv",
  "key21": "5BaPSxUEM2yj8aL1c5nxGCW8zf6r2jnsPSpiNcHmBm7xLRFwLfnvsHf4Hm29F8V8nVGj81x1KvNaRj6zq1vzUWbR",
  "key22": "5SSWpPbWm1UKBoYv4a67QqreXobnquwnQAwnGsFQNBBXCHGk6R2PJ1UFHVrYtPYUNHcLvrp8WanVMUVyHyttkkFH",
  "key23": "53ageuJwheZ8uzgTCC3CiMQiMkNDte6BqYAfgpoAR2hfHeUDWHmEcW1QdbbWWVXunWmQjgDv89Zv76myLqvp4zJJ",
  "key24": "48ZSCLzfddqsLKtA1uTocCtsac3LwNnxiVobrKkYijDQpS1YeQXGP5p1eS5usKboXg9E7wXniGdGVo4Jbzz5GfUJ",
  "key25": "2TRHKFeyUUFHhiFZ1xvDvfmRdzHF3xkPqxRGuaas56oiLqwTjSKqijMnbBtpMQauKU8WrgdykAtgkjmS997fVBnn",
  "key26": "R8FyhNoUUHao4E9eAoAJ8yqEizph4DoF7do2NUcFG7qP394HV76Df7BqCBpTxy9WkzqrfWU8Z5QDa7zLUbndaP5",
  "key27": "4KNZCYiQv14mDxnApTi1ALf9CzxeR6EKpFD6UuiHZq2JC9ePPZR5NA9ka3V7rtGgRwT1G1ud5iozzq87WEL77KKM",
  "key28": "3tvp48A5M5Wz1GQFCaRQJGZf7V6sHnffVaxKqwdoN22bzQbRtxR8o4ndngb4bRvY2pCAnoNrwTtW6fFfjWLmNbCJ",
  "key29": "NuH52ePjx6qjiLTVoDXmmcJtrLHZDSnRQz17gdeMRPfWyPCuNFA1gNMdZAf7q3foePVkHFzhS8ByPD3icpkqeNZ",
  "key30": "3SnrfTwH5jDStr64XM9nPTtztPXb8h3JWfuVcQvcbsAzvpg7gLraFYSmAqNvBzEi18cY5FVkqWLHCvTwsF3c2F76",
  "key31": "4hUxRYoHDhSoGxQnR931cjCCtFg1vCrmcWQgp35b68jBbPtxkmueY6yHnV6JEXMmmBF8ZqEWzYnMRoDzYFW1Yzcs",
  "key32": "xfLe2QxupxmxVsc8uSBbzTYKLPxZdHrRLamRpbo72NBss3SgBdtUTSgr1tmrv1TFUZ8bWZEgjufMZ8rBqb7eEZZ",
  "key33": "NXm5zdyzgmfc2o9uVeBc1drb4hn8XDToBXDXBgvW5Sjx334GNHcbejDGKB8KNA4RDwmPLtSg3BYUijtBQezds6F",
  "key34": "S1uauKXciAMEpnpLLeFdawqbUc7KdeP6H8Pba2pHczQ6suo9CM3xsEJqejjgiLM2JHbdQWAgYWR8JKVQqoPUSzy",
  "key35": "2wJAjhRasTbqmRYHvMxejErKtLSHtffGFCRziDR291rat9RPQHbTBVvnaQtB6uEFffcRWkTu7PUwtC5AjHH8CRK8",
  "key36": "5fc5TZRpvdiijsGaCKzT4KJ3dRziT8yWERsWceA7wNNDAeMZSHh9RC6R3UvTk4Rp1Lw7p9KvqYqGjx8aFp2jyCmt",
  "key37": "XoeKfx8dKokbZG946jj4KJNNQui2WMurxdDSWtiZFByhUUQxbJt8mSGvbwNMjXHnhS5dWfZmoZE6jPXgkHbNiN7",
  "key38": "NEgjf1qpXp6vc8hggYVr9S1CovZfY6qVsQscfmfpWhHNvCLSC5A9Ykw7DJLtRhLjHs1tqTMj42CLVkth6imjizw",
  "key39": "2XGdJ3FFQJQFtCgXQeJd5Ny3z2oT2P56ZVDmXwkNoXwqjnPGonCEtBSTDgrMqs92zwCNB6i4AhVgsvVvPSSYcvMg",
  "key40": "5oEh8vKYukhwBd1KjQeVABEvY3cYdyxhyLVdoTz3D9aSFCEnz8MjBjPw3snNxbStt3BGDxfy5j1ZqhG21sPYDmxv",
  "key41": "2zQuY88fn67isiemKe1tDKoBLA1q1NmrpotkjgBZLp8twKdGBhnV2fdEAPpKzPTh2UsFoqAsaQSEbW9u1bhMkc73",
  "key42": "4FeREXXT3Vnz5jKqJXTjPmvDfMh3pT7xeFX4tgYmbebjJufKRrbNZZzNDUVeZ3iGH8BpGAQKFwkBcjqyRDypxe84",
  "key43": "ZkRSx6S4xsQCorzT2pCGdzHLZsgWFVbWJEc8LFpFY8Zu4uE54rRNpgDh2AT35Fjk4Ka7xxyAoTwyB2oWvPEudX5",
  "key44": "4MWdhxbtP5YJWPZ1uzj1acPAJg7rJUB26nuz69qz9pppPw5tUf42y9W88Db4xrsMXxUosBmiX7TVoBCGfZB83HsZ",
  "key45": "2YRZ6kFmY21a4e6fGLi34qS48CBR2s5mNP8wje5q7uEDdtQpAuBBCnqEtJ2JY29EPWjWeeqvek5y6ock2SGVwEwX",
  "key46": "eP8XT6RdRWL6UshLJXoJ6hp1AXjcVkavnimi3wMxUv3prKv2jMkX6aVboBFwVCyGW52hXmvpTg1j6hn18Ys6kbG"
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
