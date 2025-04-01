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
    "2Ns1UadovoWn96V91tYkNsmZUpCFnfSyWGUqATJnXSEBs6P4bySKyuQqipXJSKWPW2H3sScEwzqiuhNwRgn29U9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i6xWwaHjGmgcmcN6Rz3JAfuuZAb7w247r2BouSe5thr2eSVuNg9gA6tyfNUy8RAQKfAprFiqmNmwaPcQZGKLfue",
  "key1": "32kySom5g3UeFeit3xUAAiCazi4moXfD9rnRm3geHui9jyYsoeoM4E8QZne33DoDvDzsZ3RyUiGrsMvAPXMq8Win",
  "key2": "5mQuJLR6XUXaukMgF3dpE5LERG7Sw5qswxwYaToz4jX5GPjb25uQYUQ2Vmk4gNeo36PmCDeudZtL4XKp3QwZeoFb",
  "key3": "3oSHzw8iR2egYeDdTW2VeRkPDFPror9rsoPNHqC6GUCwxdrwe7qBdi5mYmrzFtUEiFCTvjH7kAQ76BepCaoWt96g",
  "key4": "4RYuyxdPDWPzQTns7ELsgrtp3XNC6KGejKujzfh1cig6NnRDyc6Nvsraoe7ywsM1kRSqMjecd4U4dwk9RNskkkrH",
  "key5": "2AYBtvQMjnSKEYVLNUdNhtTswaPRhLbbMeMu5ND1hgyazspxUmBt6av11PjUdfnxK85frTy6efXzZiombnu9qPcD",
  "key6": "2u26xbAPVAm6wwKXzyVLmuwNDoh7najL3p52tEjrRWzKGiaCJcxsevQnGTxXMqaw6BF26sZFFXBakdYYWS11L4Yh",
  "key7": "3qycLz2Fj5HMApEbMZPyRZQ2oZyKcJuZrqLv6gg9kgkRTQejQQM8UuWpCqr1Sa7RgsNFqJ7S42VCWn1UGv4i3dii",
  "key8": "2GgHxEGiDEYivscxxw8RPFPoWj8zeojw2CZnhbR3mVCVgeou1Syt28co6kjsSVZiJ4myfQXJcHKRba1sxeh2BHUz",
  "key9": "3PYnV5kLQDPE9sM8SbJPPepmFG7CVkZAfAL2N2po9RUoFgqhjKEfYnwgyLfzpU33hYtD3VKZwS9hLnKTRSiuWcPv",
  "key10": "22mt71Ufh2SjQzwLAMM8vy78HiGWzV5opcEGo4pFWRj6V3qh7UoCWAtu4VYPqtAXsK4Aa9fcmsRkZh4qnRztPN2G",
  "key11": "3Te7cvRq5pzDe9KZQuYq9YFayTCoBHo6vuG7PvSCeBjYi7YkoLF431qJ8CcWHkfuRbL7FEA4Zs1B3wFtTZnVb1Fm",
  "key12": "2aiJQF92uG6mhfD6PgL5x2KsXu7HBBmStBCUHDtjVKCX4BfvvqR2mbamBCgF3DcHWLkBLDpb43LWCT2YrwgZ6agQ",
  "key13": "4jQhB4pBeyr55s46aBpPNREv1piKdbyZKR6opc38dgfj7FiHwWjjr7N821qHjVqJi9qHAt5AxT2tyUnzzKad96V8",
  "key14": "52b4oS8r3p1hqkB7a5HiMTfG8FB6V7RQKNu6X4Kr4Qv24s4bbBQ2YeF7J4dmz9vyHkqsfm2DKCy5vcEii2S8dknv",
  "key15": "BZQdFRyngghTniBg2XyVwFxSbsGwdfUGwkCK6rAAko8Y6JmjR4iScgujVGSwX4acyRo9sWajrBJu4KAFLx9GAyH",
  "key16": "5n9nPAufskRAcNcgBHTm3KyUURBwGUJfRvu3s1NSef1v6WSXdAAckLwZKL9v1L9gFhMRutmnJf4tSnM9Fmr7MjQN",
  "key17": "3vp8HArvcKPHJszKDYr7DnDny9HVhQSnvmQAJpLUq9tW2aUMS9tAHbVDK9JKZWFdwVvAbXnhnzuFSzLDHkJg7e2B",
  "key18": "2ytYmKqpRpSHYm3W5LMr7knU8pJhEeAqbNz9rcfXYRi9s1iMaaD9sJuUJyJTxnsFqya5Y41yk27BMZbRtvgmCVqB",
  "key19": "52bkxn9qRcUT2DafPutBHSeDhxb5sHxpQWCTsFyNiF8GQKr2iEdw6oWVQ6MFxEWdV5QEecW9EzGsHcXJ4WVB2zB7",
  "key20": "xA682VGNUETBXCoKMcMpUDkz95GGeXx8UP6U61godVmP4MMMK8wmzQu7oy119VSLx3KV3mLNJCqf52RrzttQ54U",
  "key21": "3ohhqAs1HWZQQfppcrfmanhzZF7AkkawmZY3YLwS6FYa6tHX6Ebmcxe3ZdobJe4drLkPdvi8QNHBLXksnfDdeJpd",
  "key22": "4xRZk1E5mAstFpF8CBsDmyZzyKjhEfomroiCX2Lc1sUgWzb1BT41r5ez7mG21EQYAfbRYdKrGryud37DmAneBz7j",
  "key23": "4YEXhuWHcmn2jUi4BZa8osat8s8KAuLEjMAgMPDszuuPpvwtDk6MsRRW28koAkV7XMx4ijbaqcCmRMnw2jssKzLk",
  "key24": "3FgnmpYWeo3tnGXnJJCj3iLMYhY61TkMiDGzHvjToL9z1NkFNkqK6kaznc9y14TSGPJgab7heVDSpwcAv3sVR7XV",
  "key25": "3vQnjmdLyqnKpHk1SUYUQSrxULwojc6BpzjQjB2v2rDjsA36kGhGA7QoRLCswRfp6XkpqW3BuAzC78vLYK6wiGjj",
  "key26": "5rqkkWp5CLSPxJFvKstgkHxDhrvf2cRyGgqWNEzqMQ6ckZ8vp8E9gznjZQ8TPQjex8Ceu2DtTfWGLHmS1MSeXZPZ"
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
