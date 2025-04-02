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
    "2dRZJ6vnEkiQDNHWdRUhb3rSvo8DaUmoX2kcUHSVooMqnd3kcGwwvqDVELZVZzjZYzbdE2sPGiNqVnkzBvvHgGdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54oQSUn2vgAVgiSm5vc4tduBhrGpSLMnPYRcxiED58Zwi5vF7UZZSnHWDGNqRijjZ3N97dCnQrY9cd9fqju3kMJQ",
  "key1": "3YbaFvGmNRLWDWva46ZuRyu7mc8jD5ACwkMidSp4p9JPPFb3cLquWf3AZsExdwg6Abr86XJNGCa3U7YFdLP1MrwQ",
  "key2": "64a1RFFdavpRZ9WCTY5Fa8Z8xRerm2soVSBSGuxsxP3jZhitMFyesHWihbxwzePmek4DdbCcbZhHbuMGeFnd8BnP",
  "key3": "5NwfRtf9QocgB9sW3KnFgQA6CPGqBMn6MUzLgo6UZYmX6uorjbRBBXjgtX2R7uK6DrgJhHFJxsRutfQtGBKf7LHU",
  "key4": "4pSkAgTHnkxJynRHrFkwtjMRxVAKx5iRT6BVCFpbmnxbe7BaSbb2dPiab8RngR45QdNsWvG9ukeYar1By6iJogVJ",
  "key5": "4z517oPiDjM5bp2hWBeZGHNPWEwwYdqxxTJBVmWUSv24PzjbvozCcGDSYPAxEronLFQD6CdTi9PZTqYEjmkjfqKX",
  "key6": "4n7VqnUTj59MtW9b8EYrMgkZfEMecrmcf7gfCbyUxUmcdsAWs3P8SeaWbN4sxAb9mNNfNfbXeY8iMtHuNq8Xi942",
  "key7": "5RMB9dgq347W8m1SynyW9LQ172296nWyWEpoiDuNn3DsQsnGjZaMn8hnb7vjbAHqHa7Hyy89bDPC9TiHBwAdYTbV",
  "key8": "4Eee2zx89PqxffK3L5957zizrhLVF7BV5FrDmGNWQjyS5r8BZGKemx7Ehe1bTtipEFzvRgpoByHthTJnns3pFtP1",
  "key9": "2SLtwv7eHSQDqEXG95e3VFtzvUrdX1ejqquaUb82952TYpRjcX3xbTiZqF7aiZWzYETEfxgNtdYiymxBYhxon8cL",
  "key10": "3yZyGYrgC6Vj4FbzLs9RjgDqTPKYsGwxhDhFJ9YtJodmP8QBFFS2eQpW39HC4Ss5CKwSuCoMuYG886LMuZRDei6z",
  "key11": "5YqLeYdGw2ydrrMpk8Yvbqs5x2yJ9XVNuVJFL17s8wUsqMcHqkqYPXBAiUWjdch4HmziQVdrxeUkoMZF2fqFXxoy",
  "key12": "3m5mHosiuoGyhhkeTXSCtLq5TVJapb35ug4Zsx4Am1ydLcHRPCknSAxFLus2PuAEvHsZBUFwKgqhAfmAFtaVZMUz",
  "key13": "4mUFNqfEVv16xkNQemRSstjtU5VJe6uqHKXqDdtA5YzYp5yZrdgq2DLQKqDEVEjV4pbajn9B3jWAKtZkyvfofb1D",
  "key14": "4WxUhYLhep935Uf1LZsXSYM5TD2wehpzZEdw6FDwW7so39YEPRFTNujw6MpYVhTTTW7YbMpPubPfSZBHV4AYun8d",
  "key15": "4vHq2WnttptiNFpEcFjYeFvZJtCPHgbFow5kWiKAzJp28XTx6fxQFtMDBgdw8cJNeJEWGyAhUuG8vHJ1H3WRYNcQ",
  "key16": "58vy2y9QwwaSeYTqUsuJnofsb2Z232gUBc7LjcFgXtqA2i5Xiwmh1BzWbxnq1PxNQ57ADPrSSopZhjn4ksPm1Nud",
  "key17": "43GPH6fhtYNg9HTjHqCkxzDSR9zQZqV1q52uLU4hgyozGVg2AGjFdPySy2XXXVwgrqvHE2GxksVo9VVtMoj7Vd9b",
  "key18": "cBZ5pJYSUz85NxK9hdqDWb5uNFa197nbo1HRmVo1JYizpWFteeVnHo4AR3TWwrS8dCZ7yAwkdMDwQNe3z1WtvEN",
  "key19": "LRVU75miBiuMWRb87kBcZnktaPkPydrYSkCAgJgh26gt5zuDTPj67TjazdPbS4jppfsxmYYZ3czZqfCzQvj56mc",
  "key20": "4ghN9xqhVhKZE9fkuDD4sudTTBkencvAzZANyiqH1jc9v3RY3FmK3LXkSfovRzRWfZ3MG1wpL97ivGuoKREEKMqF",
  "key21": "2pDjw2vx3p174QqQYokzFwqxEM7E96hSr8X9VkU9JsyraxJFPgh3vrHzn8rXojiD6CE8mmsRy9UDFeLBNpuADcTU",
  "key22": "5kFrJQxgyyYbQMrWLzKgoXTrVUagZxEudeFnyvHZETBi6LJYbWTFRm7jrMr7qnYaZvscNYsxmXcmdwCWW4DCL2QZ",
  "key23": "2amqubqkV5uWfAHkPen23W7iM6XF4ynGkKVamCQmGCzBNFuT2hjzc6cjNteXkEjY9HYTUUCab1Y96MDWUVMXwowD",
  "key24": "rrGNhDTk6rM5bcretso7R4MG4yuDmF3YAdiNmhoykYZs7dyTLZKWr3iSXjcGUqzjKDZpmyny55foWmSu8tdjkb8"
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
