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
    "5jfg4qXStmSUZzdde1gojr71LPQLQdBswjB6TrEhaweVHRWhrrhFudUuq9Hgo6WFaMGZXAyubPYQNi57WKX2rveW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PkfT71y8qG4ugYPq1KgvaH1xPzPerDXAe4VS2CUZjmM857yTGajDDfCQnVt3MJXp5crB1VCFmXSZYEGwYLB22Wf",
  "key1": "3erAE6bPyL6AqBzbdAM9RUf9RDyyrUyRkRzpQUy4GNuTfvWA4kJL6148FnVBb8cHzCpAU7RPyjcyijbHTe53Ntpk",
  "key2": "NCkzJQ4GRzxd2RdHPH5HtFfWaZ2v7spkFwauHqeexsPL4Vs6D4RETKExzbr7R6bsT4rAmcN1grbyX6AFnBbVk2K",
  "key3": "3tZZe4sVHtDzwmU5jzgBRjmMJtKNrizMLqNKiN1ourWN4znKujMZXtLA2icgNKukYRoc96DyhoyzJ6Rm7cjrSJwz",
  "key4": "45iPCfoKYSKtt9yngwv5FrrhNv5U2kW8wTFcjcPXhAk84HugZQAmCPkDnnmCuUH3ghyMCfjy1fdGchWtJastNRDp",
  "key5": "4vfmfX9r1MjVzZZXgVwcFnronjESaeBjTJyhVtf7Wss7ubBEbhqLELkVPn2gp9VsB378CMbZnMUQuypJb6fsWRiY",
  "key6": "5SZfqyaWKPEUbF5AXoS47DTG4ErbyTneL1QGVmHAwQDDLVWtU7zdDLRfqrHva9KFTSMMCxhuoCfENQjA6zF3jHxg",
  "key7": "2DkZvFeGscGEEpyDyUDr4Kt8F6bCnAMJ6GL3dL7biJGiuVUFH2op1Jec7ZS8AureEo6NChLCmwZ8sVpRKaPXrgYg",
  "key8": "4JnPV7cwPkQN7Gr1Qa4Gq8A2qm6ofTs4HkRVetGn6oMyQrPTg7Qyv1x6A5r8DNbofS7RhqC2aYSXAcoi6KKurnbM",
  "key9": "4TWdCffzBejJZeHaXCkgwLjVsNoTXx1n53JT3ed39FrUtAtr7vsdcg4RmRj5VYUG2FcK3vsAdWzE3SD9qYn3StnN",
  "key10": "3Wjwex7o1C1eyCrU8ZFbcP36nGxSrjy2XdqRwypVjDddKvbVjCfULXQih4uepKj8nMZANc46nku8k4U9tjGXmacB",
  "key11": "5BJg6U3FFouurhq51RDPQSuhu3mHJrgBEiYqQVXSScYDd9vnHpcURw23G1vw51TKxXDioR3Jzp1XWmkYftVY1JbY",
  "key12": "2KtRvoQb9rNWkqmy2hz2nkDJZ5VNuyunRzLWZH8vf4UxHhpMujNcYRpUs5KrAj1avdFTdYyTPM3tyK9J7WnSdHMv",
  "key13": "5MzXit3yTXXS1F3zLGJaRG1ngd5wKLDhkm4r9pyMyUwpJKN2geoqyST3HjCn6MC3kKutQZsvXU652nhY6N2KGvLz",
  "key14": "Z6xxUarhGgKB7gV6pqXUcDM8jnePEXcSDuavCYdVKF3FnTNBkm2Stk2EJjTX2LNtx7zFMctycASR4VEEqiPb9BD",
  "key15": "2GsE17CSy8NKeR1WHm8YTsymZxsk6Sys1AAC1GKJhHmCM5CCnmPsoxcurcQ4C2YKTad1vaRPnjGJeUHj7221WFJs",
  "key16": "4RweUnEoGVNjgEZvbH3HU3kTzBw1jPafpbUyVeRQ4xvQqsU2JEj6MCTN9eQhmW3e1J5xwMkc28i1ZKArtVHyoBah",
  "key17": "YzUAMi6w6TjXSiMoMJF72nUmVvH7ESji2fBCHE5impNYWmtGDdYG8RYCxGSgrMqcfemxvG7JeUTxa5MVdHGRHMK",
  "key18": "2528xoQ6e2dtC71UFVTCo7pBWFUwyrimicLfCFcw1md9bRPQ4PqbX211TGip3fGQt7DpzkwRtzDWwD3H9PhfoCPm",
  "key19": "49yYYdYgMv4UnjgyjYrtDaMDdLdub35jzrzYRpqY5Cko4WJ7JECgFz736UX3Kifev3hjZH7YcQAoi8zPfY1bkck3",
  "key20": "23yG9mWDDyEUntmphgGVVV8nw1ZRgG5XiMoTs179Hdtxx2jLWYJEyFozGJEmDedtMzjYNZEH6sMnat3LDdfY5qrf",
  "key21": "3qg4tXSsnJRphU1nCV3pwRrJ3psZHPvdE8PLj1HdPAW9CrLtMhykkHhMSGfuB2c4ikAYzZmR4rgDn1MUzdBqpJrV",
  "key22": "4b2jGkg6FfEQstmAFP2SEHa2rHmVSMSXjewBaPhnnGS3dPpYDMg4N73Rtf1yzp6nu4fzejzkynLSD2Yefa5p5pku",
  "key23": "iiENuY3swTiou665T8UhB9yRA5zGyZjaPZUgEQwFVN7U7oRVweg4F6jUYKcPYpbTf1dRnL6nYEL33T2bPQyoDja",
  "key24": "4MbahfzSXNSqDhBD3K9ZybJejnZ86ksKhAna47BcBAPZtPYty3vpbrHAY5cC1Y7YVeamb4hTBFXhdTpDwccnaGRk",
  "key25": "5bhEX6twtbUP9dY9xbmp6dJtsoXgXf5TRcbRLC5Ew5knnc5uUmgcRBk8bge4PLxN18vLGGiVx466KFuuJLAZs6aZ",
  "key26": "2PsJ75CLDUBHoBupvRcH9AMVcXerZPqYWFwo5wEhDtMM6T5M1sd4MrmE9ZrLCHzEvNxmMv27oXFpjfFiqssGZm19",
  "key27": "4LuBKXmwSBUekH2DnR8HiLBcnt8pybtt9mZWqe7HQD3HLBmKEGByGwitnc7ESDPL2SZQGBxhBsEAQ4gezZgiY9rk",
  "key28": "4kznqiXr7hJVdyf9ZkxY6pJjFZkCcP6CjMK8oKZU9F9FkipQ6KrayLZ1DRHisoFjBBjqhqBSt2oPst5H6i3BhbdM",
  "key29": "3Hsg64vsWaue31qPxvb97hCTdREYxUtEyUsTaHj6HcPv84rig2rYGCjcDgJABPBGpvMVMycquGETpgWiemQ1Ymcs",
  "key30": "2N3B1eMoPF6CDjYW8F8CGKGp3Cjsuf8wJDAWa3CDF6hpXWCzrekjWQMasm9Bbp1N8rJs3Uf9r4AzANaBhB7miJxn",
  "key31": "35hsb4hZeqDQQ3YwD1WF67unijjosS1nHG4QwEvMfdJtRgvgxMKAQECw5u6aPTD23uae8nFJAYUvdcQJrginZMjm",
  "key32": "tmtfE2Sv4XaABXn1dGEC4jsKQfx11r5XQcNr9AP3LDAf2YfCCsgj9KUmzhXa9kE2RWLAfiC8SkfpNXf8cJjqhZX",
  "key33": "2utgaZ16KBh3z8vrmbUqsPsKkfZrNXypvWmcPhUePB3b51mCJc8PnhqL94kvqtf7fELwKa79i2tNrWSpjVJhPY4Z",
  "key34": "gmFVsymSkEjhMwqw4e2X21MSkUU8Um5mbCG9QrL38ZFjGHC8JDTei9TNMX3LUbw7WmouL6h4NgiQ83YtgEtLHAs",
  "key35": "4iSUtV32MPTf9B9Q23SkL5vSxqABoN85p4NH9bzN1g1c2gSkCf6YJTkjMWHfvq2Zmt8dxLnQSmfdcDACikrqyhLj",
  "key36": "5RSkjaAEhyXeRe3DRWb4SjvqBEJBpLZ23fsK78twppMjE1mBxiKp4wrzBTmrEh1T2Bnxi4ZNwu3uYAoxd9Hf9KZj",
  "key37": "2Bjbnw8LLu9vurU2SFruf8ZJMphjLLq8ZrTR27xwtHw8ydV8ax9gKW4abm36tNC1yDpn3ufc44hwruEm9dYAp68v",
  "key38": "2xgkWyMDx6k3tEdnF7gV1iwYXRX6B8YYoUoKAXVB7jgQg2MQbAQgEmizPLoQe8fxUs7GZHFG1aJiPjyed1S8t3HY",
  "key39": "2EMpK3DKEr1CXXkHZzqeDLkDaBeZRVmyUs9MAVLfkart2XgcJBDyYamrVpM7RhD2VMoGE76uCKoAU3PC4Xnhu7z1",
  "key40": "5EWpg59QrsGVBAWSUNnr4bZW7FixftzMADXBTAL8yTtrFioZVymTfkpFgBCh9m533FLBnPCi92KPiSB2W1FKzN4X",
  "key41": "21xnYywKV6MfDAV9poMYaE3Ek1fuFaTWo2dqBkC7PB3uMevGhxJe2ENMps1Drnx7Kj6ZpxMLAAyJtgQS6cJKUtwA",
  "key42": "3uRCXuY7PSn3EeRDxGf89DDayJp9cGtsGRuUUQkBPTAZ1xbXP8D1XDYLXLpcB48QAE9DyPoFR6gk7CxNjHLi3Nux",
  "key43": "254wDA8jPiWyC6BM9qPtiHv4aipBSNJa9HCH6LTdmm4GyDHdQntCKf3haXwGZ81dieNBmAi1rzDfWfBzQ6n7pEXR"
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
