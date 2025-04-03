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
    "2Ev9TyEJpD2VJfhPXLyvnJhV1ukH6uGxrja3dZBAu5zAasdpocN3zCNjKYNjeetkaTzwocvd2E9TffdwXYcZfRE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ynkAtyEcJRbW1x3j3ZCFhkcziBi7BGDXU4q9XY4r5pZtBK6F25B3iwPj4uD6CimZ6gNdbTSTRBzwzet6cBtb295",
  "key1": "5CnqxS2ysVCWof1AUkuwvLFxyFYNsm3wK7md14BtMQ24qtPDLRD6A9G8bbiBwP6eAjTnXCL5Juj5G4P9Qz76Uvif",
  "key2": "3rhDsqvcReQuh5suCNwuDPDKunYiKjnZejFERdnRupFtgXfsCGvoWV94zWfcRMSFeHRAu3D8ZPYQpWfYXeZTEGXQ",
  "key3": "4PBoqC7bpNedtDQ17KKYoF7KWBSe8xSJbc3BJMAaPzLzcb7gLcnq2yR6uosV2Mdq29zCwPTfaf8z3KaXncGhiUvh",
  "key4": "4j3zCyEAY32Bbhasi6ZjunfzrCSPt1VJ1KpaR2GL8DZQc1SYDcFUwMV5s61dqXNi8efZs1DLpZuAtZq9uJNSY1be",
  "key5": "3PX6JaqU7nrL3e9R5hH38UFyCzx7G2JpXcs8ycJvmAjTWm2HUL6mYjT975wG7AW45AA4LXzF6omwjksXa8oP3SmL",
  "key6": "3eaWoNe7MAZZqNjTeWmozhcCtFhqR5DiKJ79tKpzUF33KkJu349RwFcYb3XWWFf469ZHC3XiL5X9bPgATSP6KVMW",
  "key7": "5ypq9jev1p2GidnAbARt1x81Yz4gp2meJV4RNkXJXBkg154n1dpNTsJ6aLxxUXcRcaLoMfUpJ8MyWHZNjA91V2iw",
  "key8": "4nA2kCuM9J5sJFK5GbGXfQkEUJn3sa5VQWedmX2asqbMBL34wGWGemmGtGXy6DxrFdtmiHADFHqELCZKhrdvHw3Y",
  "key9": "4vWpUgSFGJwvmmqEdErNRoXXHgkYneKvXMZthQxcPJQkXto4gDYagJ7YrQekYna6AsynudATXqCTUiT25UzQH7Gg",
  "key10": "4jU8xPdtnJsUUNsDU96K3mAHq4PCuDMAR8XkRrbax7Hmh8TuzpMiE3P5JXQ3eqLJbWGb1GQHEA6YWcbENntis5Jj",
  "key11": "3kxLEB58enr2Q4ycsqWDHmv2583nTsNA39dp2WZLTdgPbWnZp8tDqP6zShH1rh6CkP2sLJomYnycsUE5jfrKdipw",
  "key12": "2i54FP73bVyEAwqPeVu8FQYCe6g3Jow9kzM9bfEbp2H8Vv3rRx1mTmTotM5YevTMUbTQxjQd5FLFtiNkf3LfwQeW",
  "key13": "4zYHPsAzo2hRCkSKRwUaLQrqgMFmzUwmEwZ9dS1qDAqT28ChoJUZLusEZVymoMsJ9kBBKg1HkF4WU7F3n8FmNEen",
  "key14": "61ZuiwVXhii3BaD2s9xvp6AvEH6PQPekPHyFJyEQmioNDH91DFJsy5ZkXSVtAVa6VUKG91xXwrKVxgrjgcyh7AvD",
  "key15": "5KHvVLa5u9cvKuVUt7ctmwoGfKdbeUBsKmcTdRmMjJR1zkg4e4TnRRrqx26NdKczXp4PyUXwR6nQAnn5JtVT2AzA",
  "key16": "RBmXYvaRRsdRHfBJX7NRvVbvjLGHFKsVJkC1er5zKgFu8mUDzdFjTiPQtqj7icSDoNaoQ8mZ3bBB5bVAt2hmfot",
  "key17": "3NtRrdA6PfxFbaz8XpefTMKQjXkRsTGYaSMu1EdMALMaM86SirdxQhB47e8wceLE3ohZP4m36TZHmCUGgvn1TVgu",
  "key18": "8nPockUziFLS7FxZhvBKr5F573ypDTJ9sdBKVAAmMk28QEzRrJmyKazFJTWNrerzE3yaoz6ddoBpLf6ND5dd7dY",
  "key19": "4ywyJ1wPPeUCiwuccUqkbfNeYiysXmCRErBYhw4tfPNGovmAm5vfmggENXY8RBJBz4ZosDFAxJYRpgV1MN9RChqH",
  "key20": "2tHpizQboRkdgdUFNXmxReHiMFuaPG6pT7cHz7vUPL4zxyvdKwjpoNsJgyQEmpjg1KQxQqcV1s5XgQ57kA5buCvg",
  "key21": "5epZpf9FwPVkEpRvorEPFehkw393kpVeo6pCrapkQUMkx9Y9FofBEB8e7smvvPgaAMZFp6Moj8FGfKwxc19CRBUs",
  "key22": "TWksZTJZvUqnoW5J4AiV8DH8zP9rRp2FefHdMyCRDQJbeHyQTGRgZkTrzBW7c8ccZHgV3gxGe7SHvG3FoYqR1Zo",
  "key23": "inA9SZCBWJDmrXL8WfvqKKMv9bdy9oYZeAyyMDwx7DSBP9WuXuQ2Lh6L9Ki63bUukVy76GDhrpSmXGEwdsMHedW",
  "key24": "5aS7K9h7GiAf93kkLCeH2XYdgzT82Z5K2Dso3isvpvT4qyaCAkJjFLL881YCpvWW7269pmVtjw7sDoiw5NTw3ZNp"
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
