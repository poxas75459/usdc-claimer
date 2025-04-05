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
    "44MyqYXGxvmJBk8zfuA3JqFkD9UFNPgC7pJqTr9ugFwEG8sA7Jqo2pMkNSt9nJoCK4Lp46xF9PzGsT6NhAyPs9Hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6XKZBKHyQcmBJB35yCLv9ovHN7y5biyodVktKjVE1kudvDRUVeE63NVYhpFXWFA3Z9BtnrdReHycfnTTGsxW5s",
  "key1": "2oQudEqNEuX571ps5jPtappUQkJWyTGGUr8NMZyiSxC7MGMgr95jD1882brDi97RHZaEJYfci5A8WZcELsU15k4S",
  "key2": "2b9R6o9xVQchGGNBZmBvouRt21LJFFyJzenAaAx3dRAL9m7GNJCCeY2hLY3zN4fsG78WePCthx4PTGn65goCrZe9",
  "key3": "mUiGMGi157TPL9u7ffJGHfcnp4471eZK4J6e1Rfb1vtCckiFjmCMptjFxHtHRTik4cCR8wyLqpbWjwRA68jrU1P",
  "key4": "L9xSSRPkLDBuRafj572ZR3bdQ9omL3anT4QwSv6cWri1F6cdD8pH5kbvVh55i6Qb415HcqAn2JmcimtQhuuE6Pb",
  "key5": "4gS13Nr3SwsNjT1AzGDkipJNNcPJvDijeVRdC2XE9Ld4yyF1Co9C7mmjVdFhKtx7E9i3D9BWjW5GaCDgDc8Ckcjt",
  "key6": "QTFBjB1bDT3SAY9LxxvHA3ZhNVgcyGs4WF8ar5dZt8KuZTrH29y7k2m96m3hhAf45qcDrkzwtNertjVhFjS4aPS",
  "key7": "cNShUhbNyZFEWGX8p4zDJrrqMfzzkLjigAa8VweCgo7csiQhPdwihwVh55mRzikrLbDHtvpJGkX2fAiL6Cin7tr",
  "key8": "2omsrjBxKwTMPZCqtiMwQxFV8gJ3xZ79HAn63CjHUnGYhFu3H7aoxKZzg4i43HyrYmB7MZUyLu8P3XbhLtdQ2oye",
  "key9": "2KPyUMdWwtwwDijbc1mh3Ne7R8nirLvzy3ixZAMWbtr5VA2ZZwmxA9bcb5pWEoFDotmkWCSgVhDYQ4qYvFZZhPNz",
  "key10": "2DSfDLFCJYUUuhhf1E4AFRHqAYfRPSwhN3R2582HPRvxaDrVK2BdAc1MtmmdHufkBAb3odGQ2SuBquQhNq1jGggo",
  "key11": "3DgZLv9S1hQCt4wCvdZNJuucYf8gkDX3Lhxhg26bwaqnhLHQqGiTERfNrYAAoHTWqkeMosZGZRdtoFGtuYwvVTE8",
  "key12": "2ZTQcuASxHrBRTcLh1yCcn4VHQwvvzM7dv9psVTDdNSRQJ6YL1UPxK1ZwAGHVUvyA1vziKTVXhJQDLeydViVY6Yb",
  "key13": "YTVwpwAkkCcfD3c8JWh6mQndWf8PaEVa8JxBsDtsn3imCTyQaGTGruLYbwWSVkss2xV9XtTX3fTcyLCN6PiJCiA",
  "key14": "2P2FTWQDXk29yoGFYKqF39k5SozTysbDqbQJa6M6eogx3XNZyT812jAyi7eoXGox3hEou7g2HVcSLi756NVm78Pd",
  "key15": "5mpVragKiNGxu2FH8n7JoK7Fp4zy3FB51xBPkkvfEdbqCjonT2Da4u4FTSTfZDczX9oCeD2ZeBHSy4eFPPG81Sdt",
  "key16": "r2it4jLzdssWRbEaRxvoY7m3goSEgCpJE9gNJPND6ZoJ5uRC1HnzRypAshnJQ1UHwKBBr6UhHwmumibGvibEwQz",
  "key17": "5edjddAtWdgyiqZp4qUsKNZ8PVqoFEoztwpSQSq5mA76bvip6puXDtLiECKJBASdhwKmsYdydk5N7De8P8bm8S5m",
  "key18": "srb2fYBHz2jJMs6pjovKzni9KFsJ6Usc6zk86oD3nK9wvkeCfDiBSCr6zeiEdKEBjLkidUvJXvzy6LY2W2RJWza",
  "key19": "5yR9CzYAShEuWH45isA2uBmxVb8gbWi2neZePG478PUjJrLzXBexzpuCzW22j7VHncntN3Q56iMj9Un7ymbV8R8s",
  "key20": "8Novfn81X3TJeZT5qc4S1yffsNy6HmMsxnUXU9DJgxBcR1o6R2qAPXz54BSGBUFq1zm7PuBZQjVMZyVkLKjoTt5",
  "key21": "3kKatwEppg5YymDrSeGXnUHdFJeYxai9knKxnGWiHVpE4M4sW7q6jHwAzafVEgzv5uLxTTT1TxPpGV5nfjpGDgc3",
  "key22": "5hBDfxog9y8N8ETSE9xiyST7d3rM2UCiJuKDsCFWs74Z9p4kk9jZwhqsDpKJwXQfASgBDo2UeBjN155UWwJ2heBq",
  "key23": "3VKMzwbuyCmStPWnyiq5XuXEz1uTXoBcFRdz2US6Pd9qLsrjX7SFg3aShYjucCpJ9wMRVGQ8Wr31kf6riXwazwUx",
  "key24": "5nzPDcu99ip8ZuP1yY6C4uQHiV1QXsjuQUyU2eq4eUGSLd56RUfM8RYUBeAfnVVxybHZdi5MfCoy2tPi6eZ3uZ3b",
  "key25": "8W45FNC25An1UMATLmrZsppAM39eWM2T2e738abjcmvaKSgvsnLm1NnFH11ufT1gxj9yUV6RXNRE7cDiUA9PwXd",
  "key26": "4hispmrfEu1eouYGND715Gyzt16opNDBEhfodgFUCwJcPQYxbEy7fHiVmxpWTi7GXpKBmbj9aDkCXKdWH1Qu1H8c"
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
