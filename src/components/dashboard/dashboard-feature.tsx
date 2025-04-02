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
    "vH88G2p4X1sCGMG1kBT9SPMTTRMDK6mGfrJx3RLLWdfpEBhMGiM95qjEYoq769iguEzWTeeSuyiaipx6bXYfnuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Boy7N88oGHbrP9ALYtE4hnBqXStqJWZ2HVnKd3b2iJDyZpw1pzWLYV84tBqTmqPadFkB6Qa532e36tZpYkSnAmD",
  "key1": "th6BeYmGYdKA7bxqmGf5GioLnrpnrtwRk2YLBhbzt7s6Y5aDTi4cz9kBGHRvDMQKMDuZjqdJvxyiYZV1QFgJFaX",
  "key2": "4LCD1syMa51VdDKi5JT56ULDYxfNjPuAtfAJryXi38omFZFxKM6Snuj1mEHk9sdboKmLr3pFuCSq92e8msyPLUic",
  "key3": "h1qMcZQhH6iuJYMVzfzJ8krak4JFUXsotogK5zz3nR18Pe36dXzgKsDb2oGaUZHVMNJL2og8hPsGKpzjfY1vRXd",
  "key4": "525K5R1hVH1PxuH9yaBSYcG1gEJxwq3f1EsUHPTGnmNiZxkcGNktjRBSNQDTAMcuwzfxVjd86VqqDDGk6Vg4rwsD",
  "key5": "5Cz39D7nStpn6HKhKmv9A7weN2LLLn7mjAK9XkpRrc8zgWBFgX5JM3hBavcV2WwJMQJT7Hri8hJsGre2hhhDZy2S",
  "key6": "4K5KRw6jPCLo213SPgYtFzMGxo9VFCTYXyeA1RxG72seadYKXcX274D7kfafiNLCNfnSPCjgPNSLEe5zC2xASo2j",
  "key7": "5c9px7jJKUEy4hUuKPEoAd7tDeFwsqgBNsbA3j7AF8yLcLxY3E7emAtHRuAaiBT1CkFpDaVfwHgaoeLQ9s7Hy2P8",
  "key8": "m6SM8AkmoafE5wYWqtRYDPfkmazFbWAUphEoLMn1Zk4hCwtHSpHPjNor5zeRnrkAVAESnpewd2QYFtaePkSR6Bi",
  "key9": "4cjwYJjrREUTXjR84Ex11JHdHZek67utZw8PDtQs3nXowYRuqinHmhXXxhoqGKrahouxR1aKpc42oDftezCtWbue",
  "key10": "5p8hHU8QZHoxeu4D5KtQwpD2hAkXhvzb1g6j5R7ytmiCtRibCn1Yhrnz84aNogfBmmUXjUEQjaYcLq6teBzsDDRi",
  "key11": "V7LNrcnnPgP3AWRy37XAgTgkRckWQhX1smDavN8YMCvJeXuyx55FjKmXrwGeJG2TGWKUHcmNPWSBnEdZDcoovbG",
  "key12": "5NJsa3S6PWPE1sKXQUNYqTFmQGbU84sjyX2NiSzNwpknbyZtCx5y9yJTBa9ptQEmpqXTyxZYLbhSSEXzdFgbdE9L",
  "key13": "3dtueQpX8kH5JnyqsmeFiyVS1U8Z3Meaj7yyVTvgYS2dC8Wt73UMBJwPJNZrgWBnGnBXCfUQW4mLgkFAVgsexhiw",
  "key14": "4bwuBDxKBadw1W3gwwuY6bTVvBS1a3cNtkdaGzJbhTRH3T2rnhdnGp2WD5ctq891Z15Y6Vt4sH4Qd6iJuo2dccuD",
  "key15": "3Z6YFXecyXhv66DR6TwGcnvZEEefYovznZ8R4KDqb8yzZ9N99AuMxXRQRPXBfppViLGT18B26JasqSDg1T1q3MM6",
  "key16": "3nLQHbKgobZJREqiqXKo4BaYgoNSWKKKon1MwUWS3C6Fd8XLhKcp5FMoCJVxKcyi5Dn9CZf4bWBnConG1NAeKc3z",
  "key17": "4n5KatNYav39xDg7cSRTGqe4eH5RWr9rDmHcoHpJyFa93uV7MX948vLKLrzDWZ8h3q7RQa3gcaYxXcq7iFdDGaef",
  "key18": "8TP2ZfysYFdshpHa4RXTgeYEaVb6tuEZufNxS4fykdh1D13UAdKHShR5eq1EgUVuiwMqU9Wuyc3cgFczceNUMvR",
  "key19": "5Je6wjvs1nngL433wBqraeVCXCbUg5Bg8Ma7SiwTf8sMKWMnH31eoJcfU1v6qN2ycsoc1q4VNgFJpMEyENQduJDD",
  "key20": "5hNVVuMKnf2f6ZfGHAEMs31vsTiZacVqZgcYJUoFQKRQCMcKJxoqC4hHQjGxNSqqnAwFcALzndvGCVfbki7BGcEY",
  "key21": "21ncDhd326dgdhThf6RkkMgDBnXxExM5i1x3FV2kAKWo7qC8hxcoP2bQaGkfVtBX8iRqFiZfWVS6LrM4bUjaUpRL",
  "key22": "5etpWPY7Z5KysirDxSZ149GZmLKNdCVkLq7wfhwo8nYCbeEJUStVBk2dsZPeSAYhPsyCNfbR9x96xpmSt2n3pN3u",
  "key23": "Lrcxps7uzi8for1piVRcQT2wmdveasir9C32zm5PY4kNG4jKTtrkHtntcGWBpw4Wqny3jNZ71YBjEJGeq6NAeVr",
  "key24": "5m2tpWVn539KMM9EYcxPZCpQw9aGQpAxjCdd7jha27NSkr5JHiufvABMVetfKqb1ko9RaefMRTCGLBz6fczyXicu"
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
