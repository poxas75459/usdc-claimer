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
    "5qSC2tm9SZuRkU8EgNnZQf1jAS78gY11PHU8437Pk2sHAGsMiRh9n3A1kTgMybwn4nX3D2hzhMcMKd322hpaQMtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GsHjby5A4VKxSMhL22XGMicC66ASE4S44jKKe4BYPTj6CxdSaLHxg6EM339u8574jTQ9EFqdGt9ZGWesPUGkt3s",
  "key1": "33PS9kgi8daqNs5NfNe1jaq5wCiKAJyxHeJF3nPLpEs6r79gBjyQn2AWEUtQ8BMxBi2qPYGmQYeUvmL8CUhASdBW",
  "key2": "3rt3XskcVLedyctMcgoiJ85LEws2Gqn3TkTQFaPUceQ3pe1NWQqxR8GzGe61fV7y3yPbAvP4SL4npdBxTUHhWJQt",
  "key3": "66YXACfg9mDAyCDvADH6oqqXRVQJa7ynj9YRT55x5yQHVvZT7gwPZNTuCRGiHX4VPLoaRHspA34o7SPLaoiA5YCw",
  "key4": "2zPEMMVkgqbXZy628e5oi5VEJor4qHs3X497Y49YsTYnaLas2e5gz3ui82hJ7pfzcW8zhgacgZSo5aLTsc33ugzg",
  "key5": "4YmganX94rGdiGkFTxJajf5BQmTCkZffaSdEM9XWNVQmTKMyyEff3x3gMM9GooWj6LMZksDmV88dqj4BugkMVxZs",
  "key6": "5m3e9YnrFBZmRECjgH7Dvv7nt82egUdPyRRz5dM2HR25MncU7qeBxp6fDqepD1PC9DuttVLVEEVBrbcXQVU3DSAH",
  "key7": "2th3ukShuMUB9Nxw9HMLnhpQW1AN9zX8RHFXr3FfGQ1ndkmJmruZRDgcvTdEo1cPL9qgjHT5F6fDsTVasam2c7Qq",
  "key8": "5o2kM23nFUFcQgyTWdcuAe9effggjgNWqbzivWAFZT9NbSEPVHsK1B9Ays1sMFNMe8JropJkUwN5FEtHg3Rb1GHf",
  "key9": "4F5yqm3Tpxa2GEJpGCefi5zBsesJJ85GtkKH5BTYMmjebx9f3YyDMfPTVukU1fTwkXMepUmiRxuA12AJ3RVdyzoQ",
  "key10": "rxaaESsfsEbtYzzkYTMtvvcErRY686EEvrLJDXkPQWWjGpxMq8sHexNMhnxSkubeqzviKmvqhkM6TG1d1CTjNWs",
  "key11": "53jtsgG1vC6pX29H95422CHt5jEpGhhF2TA4dTkxZDeZ4caF6hHsZnKPLRA55ERZNphqBnifxtsuE9Py4LwbAzMQ",
  "key12": "3JUwVQ9xjNugvUc2ycsn6JG33hfE1TBnzXN9Wtw3kbVGMGC7KuD9nTPgZrTdrmKY1pTstNG3U8dcuVKj8qYtpG78",
  "key13": "1V1UBfZFdewvdrDmnU42BYfZ8ducnkddbFtbpDzoQ1tKNDNVmPMhccy8m7UQV5LvTkr95i6iLLMTTFvrQdV2Y6V",
  "key14": "5CpqhTxQDrn1fNHK5m6tuW62ZvpkUcRkLJJnoCEhaLWSTZszBVAdUS5aXrnGX3E77rsoX1gBwgREw1hwpiWHcyjQ",
  "key15": "64LdUDAYvztadFhhnPR4mLJSaVcYzXjgkrjN422Xk54NnUF1Uo4H3c7YumhkydsDfXABWN3ZToUQetGxMeJaiG2q",
  "key16": "UTPQkjEuLxW2Q7jFE39T5T5dxrMKP7jogi6RFHeV6x5RtcRzV2EUprs9MNom5YtvaP8UHDtPTuxRsQTVWB584bv",
  "key17": "3xpsy6giyTbAYWBW7KP2KYauyKXcEbn3QQJnqyoPzfXFKFzxcfjWun6s7dFfYrkepuLjEjTgDegiv3r5QBWAGme8",
  "key18": "3QN6fVScctLMbgqRNyKozx5HZNt6gaDFND5M1FvTHM6Y1weqkjMmuxLLrEK6nKt7e9hBxtkssWMsi6VENadu8n15",
  "key19": "52DKUrTLsLhjaJ3D8ZLk3n37ZHCzEdppBh56U1viWi7wuc83qhDS64sutNJRebutvVAJsetpW2BnYHAhfDekwLyC",
  "key20": "659s99TWy3aR71ygiKxiwFvLEo2xZVy29yDZxV1sHkXrCyWVDTjVp52KFgDCSRgoGvsxouARguuwSYPbkQnTjuT4",
  "key21": "2U34efQmjMHqMBXDWAiLNokW7JAjDqrSrA5TpvcFzQLDZx24eMSqCYD6jYVv8V2mJHXPRw6mkeFMnqQjGT4d3pkz",
  "key22": "435hgTYBN283epqZPNvBFrm5jTadvoycq8qkT3vwnUmMumb4r1ZSGbLLLtmfAU2YZVpAMT2LDCYY5nTuz7GBJ1WT",
  "key23": "HLw5BcGNPa2125teT1AJb4DYaMNP1Vy5J7JsdEMNCKAjaMdFyJcu32Fuzj4Lrcy483cSaCY5umQ7uauJPrEoC9g",
  "key24": "tbDRtk3GnRSnXvyRMZZtTrrYy4TVHN2sPzJm66CYtWV6pSvj4scB8zQLSyndVmj9NhVQhhYSMRkgnXgLsB4jMNL",
  "key25": "5svMLv6Nr4XGiwEzZBLPc86SLzq1GS6ezgWhDwWgXzaj5qh6bp8T6VkFDihm9E2ALK8xy7PEdK5XADfiindoPNZC",
  "key26": "3jK85TepDPsttGG3ctA8j6bUADT3NXsZ6CxfoE9z79ueeAYoCrbNLDuGNYUJJwS6WykxkLnqDgLTGZwC9YMk3bBn",
  "key27": "4szDi9UiQ5M1T9z2otMJDXVfRvtsNYbErirwrL1WSfcuxLDqjRWYcE1uvyh5kSt8ZbrhSQyyNXiqpjtWsw7v1gDo",
  "key28": "3gEB6UdAmWj9vBN4mHVypxUbXJKdjkoXS1bw7qbgZM46vv73PcGbtRURDA7bgdwdrPE3j9LoacCeySgPmiL41WGu",
  "key29": "2ad9uVoGU6StiSqQkn4fejvSjwjtxJfiY5yzFRjoGjMXGRKcw7benYXqf9D2zgBG7NUV82P8L41mSzUBRMYKyipL",
  "key30": "4xfWok4PR9gyFwX1xri7sH8Br4MnGTncsD6BivShdhSfykdF7ocvbSCrkM32yMDBer89Ya1exVBCxjwbbU1jRsjh",
  "key31": "2hmW2u5QwfrucFaaQZz1jmedDwnwW8HSqhPYhhJcNWTW6UkkpGfhQkaiykq5jPnN6Pu6zSSgPmi66jA57eoSJLeq",
  "key32": "FjiP93hEE6bC8SdLogdwPWJ62pkpwtRDMn5tsk4KrrdCH2MSq472DVJkWkjK2tv8MvzhyyLsTqEyoD6WJ8pjsbm",
  "key33": "2FamXepRj6brQf7rMa37f2R2yjGWozQCuvMduhf4MmtAR3xPzNpdFrsXN3wBcc8dKS94U8n63WFKTbnsXFWZ3HRS",
  "key34": "5busmkgUzijP9BygosAiXWm6paPaLB8H4d1KnT7JdSgpeYpY4vDkrZjhNoqSo9gMoNbDhJNvB4HdCkLHdcgbV88F",
  "key35": "3oBqABjDs27gPnaR4pYSfheAx28NsXSQtMHRZ6w8pcqvoaxAvKqy1ZfknQwsHypbu8iUtzoYVhta44Txv8pTHxpx",
  "key36": "45S3jJV6suTu7GHqanJePZjE6S4UjVzUMmVe5aAhQhj8aXWjWeMib82L34YaxFaLUePUWFntNRNwUSRNwtmxNzjN",
  "key37": "4RbzHkt2nLvw5ojdLQfChd7jDTjz1pSm9sRB2iHYXAp8atkjjPMXUBu14F3Zkd5mysbG2dXm2LrqxtHD24inutFe"
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
