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
    "2Z5AKcbbMcn1CXCFktQhaPVJRoziCVWG3v4U1ihZzQbJM1oFTXqKHnhkFhUw3PQJdoEJ6bmpBq1JfEGGbVswMCYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a4ozr42iy9AkB77wXo1MYyZ5xhB3F3dzNB9uG8w1sdWMcDKuNPYk4jUuCNFuDj5rYbjxAqZGUYPUd21cM1UDMLN",
  "key1": "4CUWwtf623TDBHKQZzxeW2sWycXNVtrZVbsTgki2XCJzLrsa9iZwsBE45shhRNrofhJrmeT86UJKTcx9ef24GR3o",
  "key2": "5WbwV8REqDPEg6xj1mgMska13PWpQS8EcXxru9kjUzeNBVsrzp1JWETAcZCU48UZc9eR1AcEfEkzz7Kcq7gAwwaY",
  "key3": "2vkqgY4RK16xG6HFEUhojtsgpGD1kD2uztS7PHCqR4ERPMwWMiiV6uNeR4ptPxnADP7Q1qZoM7wwme73smEome1m",
  "key4": "2Bobd4cz6e3jM4EiE4p7AAiiGVwNe41hDfTFEf2hCcRVabwPrLtaA9nTphwPFoirrw9RRLf56LAZkYAjjmn34ZY5",
  "key5": "3d72AY4iEmkFpg5KdyUjUXUPkzbSgMpmjhvWFtQL6vkG5cfYtT1F8ctepdaC5DnZdsf3pSiC6VYStafNF2SuBzb6",
  "key6": "3PqbhdcYCMHjEqbLre4uq5Efe97r1t6NFJSsHcyrVSc2MeZS1rrjBmZ6MzDP8VyUrrxqKkoWa2ZYhg2Mf8qFgVLD",
  "key7": "eoRrT8B9kFFCnn6bNXS6gxagdYYSm8spp8gTCP4ewNLw3U4Qfr5z3W5HgDu1uUWeTRTPmQcbwDqDFhhnFt2VGWZ",
  "key8": "3uJ8Gp1e5vxLCQRcZkUMNa6YCZeuHq2RuiachtvfFzHsY2aPa73wkKiVKizFez9c692NQNcLV61XVWMQEWgvYWjP",
  "key9": "2pL6wPabuevqmBu53PL1fjLVb2kFzAxUbm8cPXP33euWJ6RNEkpz78QXJ9K46RXGT5NzsEFTfxNpc7MrajketS8u",
  "key10": "3p3fCKXT7zURK1vWumbGHWh19n1XN5VQWdUE4g2knJHKLYraJjMqd8JM3oRyvV4kmiBacEKE7RWxUivDMk4mh14K",
  "key11": "5AFTNsnS6krrNvLXcPu4pQyBvKFNqwUb2kEftmHxh55rvVL6AminGmQUGvnm6GVHcfw9AAgeThpLykgoJsUvr9At",
  "key12": "r2Ln2jxC45LRgZo48mzyA4vB8w6tGeQrhbKFc8PBvzCLhdUhLvXma1nnf85BPrARmxt9vMdeZE4WzPuq1Fz9ycy",
  "key13": "3m4WfZdZR5ZAB8bCijoiy2gWdrRsYoGgCkwiLga5w6m3iV2SHd7xbnNebQUyLqQB6AJovDmHeFDrTHqrUdW72T1N",
  "key14": "3nZzhNQi2swByszBKDQ4WGNy94D3GfgJBQPmjRMLaczxx9RMGsBrYRN9BLVFpJGnkc91ENkNP4WJNpT5JywM6nqx",
  "key15": "5rCX5EuuRZRZccmxm7vm4hp4kTFz8c1soyWat3uaXuATP5eonokTo7AXqrrwxyCNrC5YSUxW5gFS1bsbQKs7371S",
  "key16": "5RRxfdJyBCoCf9AYBWFjqdzQ53eiZNpGbCyGkMsdFGmjKa4L8MvtBtdAN8N5KEeB4st9gZFCcwhfJVWYg3gDbo72",
  "key17": "2soKDH3xFraifCzTxtozNMTMzcqoa4F7baqUHDeLFfH9y3LerzuRW6XHo2xJUEd7bkPp6ti9YxouAZmmXKXhZen2",
  "key18": "AzhtS6yzYYeZ5W4U76LRY4wopEmvS3kd1tm3mhwXjNGajDoCkTV5mrcwyvptq1dWGboP3cuVHTZ1NbSTVsZhh2m",
  "key19": "3KEj9aBexMwmLu89UN1BsvA6jK3qtT8AUAs7quaGwjNeb4X3b2vcSyPmQTaN8WhYpPUByXLrVKZV7w1GVUdxb8m6",
  "key20": "3cm3gZDzTf3jWiaPwyZCnMbT1csBMoH6v6QHGqDnaDHj719jpkyHBJ5x4J7L6tMsqXEkP5ipUtkufKbbCAhTtZzd",
  "key21": "3WXTPHgtderXGCYAj1RLaYX3FnNQs9fsPjtcHcNECsnrAKXJBP4qrsE79sFJeUhp5TyhJXNR4xRSStgKe42LTpPa",
  "key22": "46W41EuXQNFjF7a1YfFmtuMJxbsHqQ5Gs1z6cvrYAemgN9X4feQHPfm11EUxE4yA9MtBY9bqpvqAzWN4vTKdAu9m",
  "key23": "533rQz6RuFhwGocYpAHVqCfMuKYNo4ogFQ3Ru2JgvMHpsTDJnxSPaLs2vqqRhMShnvzHPSKbjbHdyKsXpJB3s8xM",
  "key24": "2H9fA2LY6S2Z5CWdXacN3sW8ZZ2SxXN1mcWG6TfFyCKWDCrnKP4cenVvLjcNFk8sbHs3NXv582DHebghPcWWZFa8",
  "key25": "CiU8tib4gZ14vfSKttxAE55MaQ1TikmYWj82fRackCXcNPpDCidyH3LPQQWa3LbLATcKh323wXhxK7L2UATSycu"
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
