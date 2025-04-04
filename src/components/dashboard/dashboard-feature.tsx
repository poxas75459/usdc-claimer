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
    "5TCbXsa9r3E82W832c12UBUMpnGzDGCL3mjDUKeXmjtYGKBM5SrDDtdUZdskCsFqMYWGbYSX2tNKwwj5UoJ9xxeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GhF8SDb7Kapg4tjQG72fmGZmx2BQyUpeXCBCYayQhu3AgcWNrsbSmqiWqs2PJvmv1uoGp4j4F76TBP1Jz7nw2mE",
  "key1": "2Y7HA2RqksfNS4mJHzdpeKqZeB1PNc5NZsqME5wnwnP7z1Mibk5uptBEjF2C9mhggxrkCTuWUxqbLoUyAx7iSMJd",
  "key2": "3TJm9s3ZRYrha5PDPeVE5sGgrDPWfju23ctM4iXqgC3vjYzZXPPqbaSNBAn3m7K1q2fCBgb14cXVcCsoiMUqPm2h",
  "key3": "2543MQMn3twRGUZGqpRbq5P1mhgkrUvzZ8yAMdrfjPNVAANX4659ax5CDanTYXRrLvhJxNUchzaPSPzHHjWRW532",
  "key4": "3K3RhGA4Q119gRZ3G3u1Ar4XALY5BBY8sT3RxBvozAQDDrDe32ZPR214PzxCtjLiUWgWEwDx1i7pSJkxhqTF5omr",
  "key5": "4VmJU7c8PvcJeQJXBYJSGbDuopi5hn6n4mUPPwCvzzgVgzBUgpxxanj7JF8VYmnVLnXBJBADfnKqqwsQy1AKgR8g",
  "key6": "8sqSBueHCmQZAdTS6fPfGE7rhQGk4SqUU8rUshr1ALNEFpSZYaupRsAKgCRtwrEyk26oa1X7WoDQYXBESQJepSX",
  "key7": "46apfdoF3bj3NTfHxPB8JbCQWUuvm61oFHhRSMj6S5JYg4w7zKS6XWhiR93Q7s1iZs5qn2zJRiep5xZLpFjAKFKk",
  "key8": "2HkDiRZ1vKBZUGWmb9bfMJemPBWja2E163MDxfgMwjt6tFW7USvF2KFDTx5WbqntUcPj4U5gVxpBKXy15SFuWNF3",
  "key9": "wMATbHoz2kSoRhq7sfvkVJwxBZCPf2DgWWbptYQa5n7CTc4HuJzXwyRFiWx2k481MB8h3CuduCJDKjNbqDzxWYS",
  "key10": "4Zi5vycBADTCGsDs1XUk2TakWPg3MXqP8STXM6GLpmNkhA5EFX7JzYfSboeqZV8ftKY8Mkkz2VsWdvb7f8n4dzyx",
  "key11": "3e8Eo2F8GMJ7AtVxEYW1Y9etvZ1ZcUvQgES3sFKngRo9SBPKSpYDsMGgStSWnri3a1NkvLmswgfrMVtQo1hECtBa",
  "key12": "4v5GDGLnqAsLXZToBftQBuLcxEMPjpYG3AdhZMWuZwePXZz9x88hB5ULtnq3M1vqT8iRNumkMHR9Yv3fw4h7d1YR",
  "key13": "4Fti5NN7VbKLcqTSSnj81GK5egMmkfm9WgeZesyninxxHiLGWWMv2CSZ8K3tnFkVKqtB7RvM6P2WsMtzrhSo2g5V",
  "key14": "2xZUfvUyDfRy1Q8yr9QBJevhmuWvNLbJ7bprAs1K7VM9AFGLWufumntksGL2zF5pCESrJYYRsGc1EPQcU3Q2aEMY",
  "key15": "3bLYNxhaiWSK4dn3tZ7LWkXAuyqvuvqTxDCjnYeraCajUGy1rAPp6FxrMDEvwAgNcCem87B8cCPT837N4Lmwmi3y",
  "key16": "GF1YNUS9Uy8shPLjo7PwBPMgPhhi6RwAcjZrEYwM2sGrwqKyDXyBqcz88dGLCJetnEV7m53PKX4gSDDGytCtN7Q",
  "key17": "2ar4skzh3PibHUXKpyyZUDUXxnzcuaGKCNAfbFTHKvzgahc43d4ktu8PmfmHDQAfprSBnnYQ395hH4e9FDGFKr2P",
  "key18": "326xigBuNjT7K2QTupGQJTb1MwvwgAFpDhADeqFmb7gdRhGVYbykWrz3KbxTLsZvwMwkCkY71SUgK1XpG41Xp5KF",
  "key19": "4yoShp2NmFDJH212Y7H8JnYNrWmkdscmBZpnKhNhJAgdokYnREqGx4DUosnKg5GsDmQ9rNkhoNbAaQZb13E3rTMe",
  "key20": "61qdpmfi8zAGJYhP8tfTvqCGNvYhxLPxPHG74NiipK5RW2rdmfzAxYhk8C6fMMViX22cwHRPLWfwotv6ijTV1x7G",
  "key21": "ghGq7kYW2FEh44b5q7muBBM9CD6Q48X4oN8MecPL1uBLRMZVdQiMiDURPeJH8kgMA2EHb58WANqFXBYL4TCk3hD",
  "key22": "xZikz5RtzCHyzwiV3vYb36YYubjknDwVYDmZebiuj1P8kwYLnMEYanpeduuzCBr3o6rnoHs4aiQxghrtNHZcTcZ",
  "key23": "67nkhQLdKhLLxAVJT5E1qLfnJ3Nt3sNowesQm47X9xwJNgsDfMByTVRm4VTfvXTJfPxxhoRGRnjySYcQPH6vLwkV",
  "key24": "2tVawkni6aYNfY9k9oHAtp2mmqcjruEQTEdEmFqT56J5h9LnckzKtjoaAJsqN6q9H87UFKNc2mUouzMKnc2wRbiW",
  "key25": "vk7fLhm9gZyS35cCZR3LyLxfE3PvMEj8e1MG1TD77W4b8Nemoy5NGuGzAMnda15tp9z8Jve1UT9iQkZw3Az3dMF",
  "key26": "uHg1bVkM9VY3rXG8r8qCpcrxiUoN7onJNFCawgS2LbSvU5AoJiashfGXPitBpDQoJW2BFSWjpcqa4mbM7cEwuWS"
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
