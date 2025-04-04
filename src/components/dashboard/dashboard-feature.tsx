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
    "6487venxVc3NDuxtBySQaL4XphxRBeQwNbErgg8Ku7FnJBC27bwgGmp8N9j7aQYtCia7HLjsCYHMvoCNCnmfmNaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zCEkBjiQTBZigcvnx9bkqe1nnAHeF62D2mca8nVzFvpQPhk36emEAsAiHLVckeeJTMeA35UxJgiySBXJtpJPjjH",
  "key1": "2vfnCNyBhE5KMrtALL4cWmErRRnoah7pnG1FBNrT7swkF8n7SaXAXBSZvduc1J4vXazZvKWbgFtHB4VdVeNGmkeR",
  "key2": "2scARcmauV68Jjaj8uPbasijdpKnAqaioXpaV4YnfbTuP28hxmwttHf4HjLAsU6UAEbEkR774Fh5ZH4sVcGFzuHw",
  "key3": "39YxUG2SJT8AKo8czMgKt1TqpNdLxYbfwzoM9Vwk3mqNhgzFRyYL3mgXvi158MsfaswHXEmiBSWyEPNsrAdanDfJ",
  "key4": "4WeUdPY6Bj1QE4ChJ1LtQ2VSYQUZEJjNAQJ2ziGVLX1yztvDbBUF3GSa3cjnXz9SE2KBNrhHS2Fw7BNdsy8mnKJQ",
  "key5": "2MKKnrtECHthGCKoC6dBaGUPRpCGKq3RxKJKcjaiWwNEkcsDYuJgtjaxm2MpK6tagC9aUKLBMWdQ5Cd7d7XTugn1",
  "key6": "EDFvLq39iN8jN9kVzakkNJ831YU5i7WekQcPWPdUseQuABq37wawiUJnN8qozcKtyG9MijSonRadmCJ453LxvSB",
  "key7": "46EdpRy4wMot6Gy5Wrfpj98j5eUpUAy5grCULdDVAzCCsQ2dzUgeit9MrHn4scsqtL9nzvY5JZ9qEf2Ut4Qxokxz",
  "key8": "wbFQWZJUPtqhtCr2hsjzKftJFLt4NoLJTdiqrwLciFX6ZczBACvcZUWRW4uqb8HcnZYTvWAATRW3oXNS5Zyc76V",
  "key9": "5ve6WaeXuqb9oRmR1bU2r2RXWUav4vX6PPLDZfpJFijqCQrSQFm3FPLJS9PmYCip2nVqVkTpfjviTQDv8z9PdTAN",
  "key10": "4bqgwaxdbADWAeo8Y6r5TNVZFxZ8VvfR7qwsy25RaGwozJwvmTwT4dtN5toDjiUe6vhnZcTFk2G5V4VKFUKGDYp8",
  "key11": "zbCzA5pWWrEgKKgoXQrfiJWtYNZai8zLCW2pJZ7793JvVuCjScvRez4s3r9bi1aUMzi4UAvUPvWFGtf45M3PyXB",
  "key12": "3wJB4t9SKFGxywLN2Q7deuMMksrLk7p5WpbkgSz9vagJt4znuDiCETgi54BXcap1rCkDp4GpMLVdZbD54mvWsTsJ",
  "key13": "3N2Qeds5rRRCRSrFrZ4Tz7gCPE5etQfezQcKQd42QfvFFbnC9cBJqYkwBU9WHgdmteyqT6i8AMFiy4rrwJtMZy3E",
  "key14": "NbNtpwgVKgYJJb9QQMxFrTWRNRLXtWwCDK8usPPiC6W3pK2qZcSLrk8Nsjvu3KyLnGQvu9qDvPtv8JVvq5VZpAX",
  "key15": "3Fv9oRHG4H458CJwFBLAWNGxumakRzjbkdxWNWqaL3kv473oqFQVztu2CF1yMdT32pVMc2QAowYyGbTXC37qQRVs",
  "key16": "4rkFkxfRVGvU5T1fp4ERwbeBsciZcnKsBHcvSDnVwN4LysbtcC52mj3X99kfouwLuACTVPAE4m7SW8P13huMnjhP",
  "key17": "2kSsv6mioeDu3y5D3k81frPCi4hiFHkXCsEnT4TRvP22DMy7JsfcXJYYrpwvMYQCuu4xUn87N8vxa6SDyNpbEiWi",
  "key18": "2gLeZMWsi1Zz8ncPw1j8EeRNmTWJNYhL8YkTpgvMcts3zSt7utpRWvBfDyHLuxcENEZpth3m5HEt2HgwZ53XUcj8",
  "key19": "4dGb1tD5G6gLvaKawquukkdqoMZLzojNNsGyJ8NuqAqty13XxU1d5HL7u5ySnjq2UcqfrZU5mWVy3zjVE5T3BNYZ",
  "key20": "3vpVAKkbReuN52VuMSnAuneMji4N3f9NHTju2YBkrYbH1WrZwGoqbJ7eqn3kqHvjpHyuPm6UWLq9UEQQhhroVcaZ",
  "key21": "2aHHcnVqEnxpf9YdJbc6Yu388SSua7QEFaPSvSa7Ps1GQucPHqPbDZp8fCgpDjfdFssargdRKG2Fp6yB1FccYDud",
  "key22": "4BKfgh99znPoe14WjKs2DdaLi2mSzmmvK7qQp51tQJCYJehB499Dai7JPb3fLGwReVNyvhp7McA6wHk7Tp9xEgR2",
  "key23": "2DMbs1QFBfrQpvN1XEwM2n9EX9LT8xpF1s96xttUfPuv86gEfqLivxbJcx2BvRwYNH7hsAtTxuxowzEL8HwZLUN",
  "key24": "2aY1bznhwUFSmBzkKx6wrjV22eDAwTKmh9pXX1i2vPQj17xt8zr4hEjW8hFoQX38rbqbqPncc6oA8d3QybRU8MiY",
  "key25": "5JWnCSWvZised4BnVEk3WELBMjdf62QVDekankreKU3Z284YMD1iintzT7ENB2CjaiC6QSugkGryzFbqPchzyu63"
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
