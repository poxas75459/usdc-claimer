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
    "2JS9qVgmJW8u3WytJBwDXn4Cw75oX6B6S7auVFtXdEf8X2NCrJLSry7LLyckzZnNvWYVEKWbApibRyfT6amkazwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64hcgSfVWouiEog6hPQFrm4ZetorhHuGbtNEnFA5xpzeffPk5VGTJnGPVk2evQ5zGgyPwpAhgXJUm13XaLB7TEqN",
  "key1": "63W3JXYedNXNbugeXDKHqyvY8u6kHRmLrVuPaRB6gVz6pVk4Mmm4HV1x9tftJuNPXSEA8zgpGiig1i39sMG6wn6L",
  "key2": "3UT6LELDWMETiZ1LhYhyXJCEMs4UsqDdnTeMhwsFYjrKKcqWu3m2EX39DChvaZy7CaZLEpDPf4gBr74hq9k4GZoz",
  "key3": "49i9KL7ncPtGWeF6rRNMh51vrZAVQoWtNHo6Ud35PwWRGFiYDpGn6GLshJZoNeu4b53PQ88M1U4KDZmm5aRAMDkk",
  "key4": "3zvK6uEdkkkR5iSg94TJM2Q8Z9eyvU5m798C6RP6upkx6c4UqB3WRangQfVbgFHTMsGRXXn5k5sEgA4cSdjGm2rD",
  "key5": "WiEFVamAtbX8upBddxCPS6zGLxBpk4oHyuMUfz8bhkKsAXHtHpGhZyfhDZKuQj5uCG6DEBZbmJ5ocKuozqSezxP",
  "key6": "3gFdyyvp8Au8fqy6CZEThgX4x6Yn6YHx3kEA4msQE6ztzTdDg6b6yvPevFqgAWXuoYrZw5EjE3Brf6NqmianstLN",
  "key7": "uBSot33h5ScreyEp33DUg7j3QokNm43VrvDm8ez88h2Vptd4WeFHzz2fziELo87mVGgUJeJwZbdCtA4V2XqSvjX",
  "key8": "BPXVN91VvQ96nMA1uB6dzs9dNUSceYrVuMVfH122xvgL3z5v8ASrn6QiGrj2eDR7QGRx1Dc1gv49TseDheEp69x",
  "key9": "3Fkc7gGbvrQuzGMTgmzbFy9sM6xwFt3vEoMLvJP6sbswcP2qLew3cnqEqhejK4LgwGF78kUupruq9cQoT2cXD7vN",
  "key10": "3iBqDfhRbowG1st6XJTPUrpqqsbebzB33Lnf3Mpa94REagqzs93DiMraJXHKN7YMGM3HtW74RX7HCphLyjmfFR84",
  "key11": "4eLqBMX6jm33diycfr7KiQFMywFPvtDxQd2cu1UwKmknKx7JDnh29m4YuvqP7HqiEXoUpWhrnXP5Bhiat5GUdxEv",
  "key12": "2vJQ5aViyxaw2JMKqJyyFBcbiVYWiqgqmYJAnxTdLbUJhHMLQnW7wYxAoqtHX317Pp4uTNJnyXRecyX8BZPXH7at",
  "key13": "2qyDLZYB33cbPgoGMrurdXsMYS1VR9KBz4aByw9DDWdMGRFgujs2tffBfSHqqtYs1e2JymiWzMZwjqDXuvSaUe2D",
  "key14": "UMceraz97nJ78yjuzm8oDXX7Tmq2RuoFkQodEvczmQAFscESGpNe9YJkLoaBLJAKP5HZLzaPzrZPCyHbq6RwXEv",
  "key15": "2ZMk8MYcpTvN17KzzZ5Q8SMHawvoEwJCCrusZXPbL2GeRLkdBqifJc86PYJUpKZUkB1kgyMtSxZZihWNm7sm6e4Y",
  "key16": "FVqrSm2x4U3RP9eKACDAQLyFZfJ1mgeYKg12T3hARq873KrFPVjrwFLc5NaHK3YsHbAyT9qHAHLoWrnJcrjNuAW",
  "key17": "5Yqjx3Kzi6rxzpwHxMGQ3nU7WXjE4dHGzBP6NRdpmenaYFW8sX5MXxPRMFrf9FxxASQm6KSmTeZi1jmqPp8Bc3zd",
  "key18": "2bzFNtBnUgAK9YjWq4i1ZA4zg4VsaKwY6PBhazt1krpEoR4Zi4mnv4DE9sXQXE5y38bfw3absmRQQxKesdnAvE1H",
  "key19": "2oBtwL5aTuoYGopdpN9cLAzsUVfzCFxJCPcKAJMaU1DdfQLqtEapvpf1t8Xu3Y56pf3DNyscGm3yBC7FaAuXCQxN",
  "key20": "2mZtj46Kss2EhhVrvpzLGV2eksZzYyvdFHX4b8AoCd4ApFia73kYsrxVQqhbfGbdwU5NNQZEMV9CF6mjFpijUWNJ",
  "key21": "5pnRddyM8XZsgZcaosng5UmSaLZ8BzWJWTtqR2okaMgnj3FqwNaHVRfzRxurhtfeSfTwr64nhn5aYV9C48eKpp7L",
  "key22": "XgvqYXsHf7LNzeMourQk58cvbhsNcuiRNZ2da2wRJMfeQt2EGaCavAgvHwoUJxXMbh6nE6aMMTHNRVX5bwWAWfW",
  "key23": "uYvv5uyrmx1oKVhAubAZ7tYfC6qeQ6Ma2rjxVKwucZCr4gXUX4vtA33tBkMovCTj8mgeXeu91cZV6K6g4xTmK6x",
  "key24": "54hQFnxcyF1pm76UbTm2dDb4RyniCmyYuTeuwVXAPhrYKAjzw3nnhtepiP8GhoCz5dQLYR7wnyzMfpJwV5zLwk6L"
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
