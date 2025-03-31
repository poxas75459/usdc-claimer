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
    "rm5gqrh1zxSyUnJybPuwqEcgR4NeP27fsfdw6WJtQYXYX98TMwRSqWbV5soSAU6Pz17ErPAAk61Fzqf2BmJ41Uy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VQucydZPNWLP3CBk2ENKRvk7KFG7tkKmXFv5Yz3p594uR4o5WUkff93TFMqz5UVCkE1NKpUH2VDvdgGBR2xychV",
  "key1": "MqTwE6gFwcbd8nsH3DnmYGUsvCBB9vmn9BFyJpSnPKwcdwz4hMHcQpMBHv3mCatvjqfRnWusfBbXHLxBNmETr23",
  "key2": "23rw1yTs1MpY2uujvAJ3UWWKhN2LXBMtgjJvoZHZa1FLkY3BFHDpufhdEmauxJRM6WS1c5oHoTDGgfoGK9ucMAmW",
  "key3": "2aL9T9ikNDHy7i7SZr3BfDT42WCTQuJ2DoieidbaFZVVZHjxHsx4FriSigE3G4uguayxphCNBkzUvqBwhTuFs7eo",
  "key4": "3x9FU72b2o9yMv65DZXEbajrpzgdcBasrwX8XqNNvr6vmVJpkpwYhb4oDkQ14vtwy8JQQLXGuqFPUmtQtiUQucfd",
  "key5": "2YeqY9mu513SgMeWD94CQZQEtvFb47uHf67WxrxqU6e3ydtkcuYWwYV4uNvtgHcnK67s3AnHP4AxfdDdAfh9pJtS",
  "key6": "66xK6QKTrcrND8aNvVzeSemMU2fBB4kmjath8JQx718B8nyHDTrBjGeRbKaxvKrGLoxgJBHhdfCBW7E23obfP4qB",
  "key7": "hmPLnXhwaz1nNXrze1sEsv8Wu489kBdfQ7PA7L4uBygrwSrZy8feh9oNSk1kK65fgpqSA2ShoSLHa6BYwse8Vrc",
  "key8": "4xm3fvW2V8WcZjEqfYoowwqLbAeEXvE3J14tUe6b6NwRzKoqy7E23euBYQryyDw4MjcXFN3wyrLvPKnomp7H8PKa",
  "key9": "3ADawtGW3fMC8pw46qDyDA4Tj4cYtuBi6D3kLpXhmUxNqRuGHD2hXvAukk9UnWCenetkBCq7n5esgMnbpQzvQrhR",
  "key10": "4cPG9uHuSkNrZHbzCeqAdXjpV2V5Kc3RJwVyVT8XngS2YfzfzhL16K9rFepYQsyuzD31kR757WqmpkjYp5VVLn5C",
  "key11": "4uvCdQQ1Bq34fQBvYsAmWLjFiH2wdS6GCTMCFaYNMKFKcg5QUg9KfvEwD9XwkU2oskdy2phvTpck2kwxsKSsnDox",
  "key12": "2x3NQuwka3SbqmTReJAyX3mw1ugWFMC1jBNGFywmZZ6wPxkMdDM2667sQW9iQsK9QhCxF6tnC2mbQM6DjxGeWTqH",
  "key13": "4eDyHVeqUTxB2KbnYPb8k8bmrbjEAFGH84pCXHmrVSWLEdNg9BHt3S1k7nKrusVjSJRhysL5sYSMemDgkSfAhQ5h",
  "key14": "3EJNX7XE65cDMjwoYYMdEDWhADngjbVMTRpAB3U8g5apNi4WqawR7sbFn5egVqcCtSE1oJmHxEeHUws85d4NSK9b",
  "key15": "66JSR8AZs3DzdmQHnRB2tuhEmjfZ84CcqpXs5xi2cvDrqpaAmAdShGhsn3H3EFLoYLtJ6DdKu2j1pK8Gzr5Nvueu",
  "key16": "5y9vj4eBRRUZow3GW8aJpStfEFxq5bbLizFKprJJioqFyjd9kY4pJJ7UNK6xSna1gBh5qnFH8G3rHv8ekQ7HHo1f",
  "key17": "2ahv1F53ifJw9psaDc6EZFsSQTuUYiswiMk3qwWLzzWb8rdtDsbePpB59dgwyPVmwmSAZK3MwUKD8htgtWnqLQRH",
  "key18": "2NSsnCGPq7MYVWyDkGY9dBmDP7Bs1FZFmaGzk9JMK8PAJuPB5g8dETKMnTaEafLkT2wz78Nmef6275tWbv3fJ1hn",
  "key19": "3RazSyybGgAvdS49NFZDZBHRyvuVDDqDMuPLAHGRZgKaj3KWe6zYxy89TNrEh5enQvTiLChEwcUg4PpsnYDgKRed",
  "key20": "3ymEh9QpozC5LKrJV91uAd3yJ4ZKBjDEnrD6Jp2YA8XwSPDnVQN5Zs585rC5NhnpqacWt8VaJ6oUFYVpZFmkW6Yi",
  "key21": "4LYJEeQU7XvnRCv7fC5RALW87eTmnQff2qVA6hXMw8TsCqJL3axsKGy8ZYNo1YwW9yzSGXQwDuookT77pHeJRePj",
  "key22": "29CQQsk3TwMoPncQMKUHr4p8ErHLBS5pfLwdXHVRyQtouCUofrgCLqH6gjWXGzFFuPSuCAEYAVeU3cuVbAwijZfm",
  "key23": "3bayokouLnEvnAR41rBj7t1GhAHtBWby3XVcMGLHmSFEiaWiLA2SVy79kGr3SCzJM3xwmsKSErfrjjtismJW1BaX",
  "key24": "5qqg3kjLBkngGv3EKCFPKwhFUxMkS6juCKfzLp8G4WuWj51jfuvvmLCQdsFj8Ez4VVBdLdHV7MiNRhAJXC9qhfZP",
  "key25": "5Wi6hS8rHgmDsbKp1Xrxdzh3jnySpe9fFBmyJvnkkZyQhHhxjUbHfHCRLUUa2BhXoHBPdqtedgQqCDByptrTfT9J",
  "key26": "e1nqctxj2BbKBVDz5eaSo5YPB5GHPLBQJz6Mgt5w5jmemfQo37YpFdkpvZVED6en6GoeRK56WccYJrsYSb4X9fE"
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
