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
    "3Uzj6oRYbyZeWq9NWkFvNaMmcEbXN8XKt2t6mEVKkFpsnadZkiK3zz48ZCAwV3ariJ9ZXuYeNmGQpUDzphshZcQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iUiwZxccrh9QfqoucRKhcTXCXBUpeq6XGrScdhN5XestDeyQ9VYYRTxUnggzXMYAEXtaxkaSrPGg3ZerGQhJ8cE",
  "key1": "2taV1tNGkwsk14fj8owYfhBe9TsMj1btm1N1f41yrhTmjZw8bkionh9EtG4J8myhNbmn4emE61og8mUiGYQobwaD",
  "key2": "2NmogrVEoo2wssoRpqMyGjo8zuKMzie4xvziQguCZLLSjAsfsFD911GLSeJkaZsAJevksN6XSba5ccMorBVpKbi5",
  "key3": "65bZnjvZGn94zwNcEg6FZwWbeNE52H4BbWMmFuFAi3pQt5fg9eBhZjmQdPF1ZBkHivx9WptaBjRGLDLBHuCqDZuc",
  "key4": "38uy4TQUQ6Zhmo8ibxej8Ac3GtVwVv17mgaJGeKTp9AUKGiq1wJC4teMnqE4VnLarTJ13Xj5t5Dwnmx7xBhUsrx1",
  "key5": "2Y3hspbrW64yKahJifJ4VE6AfDihbfXJ77zyzAK6Em84brZWybQ8HqQ1jND5as21imJfEq1V6rPVdcEQXC4vMTZw",
  "key6": "4ZupichKoUoDysihZwk6R8q7pJfmiuyouwsUJyoThxrup5bkoo4AAhnt446PXz1XXhm4KtBh635rr28HPhqx9qxs",
  "key7": "3iY4PVAdRsPp9D3DedCUpmMsTmWqGeBPNsyd4F9pQ2Cqp2C3GVkxc3GLibGGMNvGGbqirbqkupw9v6onzADuKnxf",
  "key8": "2uE18UePzHGWLt3o6ivaeaEf1g4S3RdDAWRVw7bsrwVkdcrxSuYkr2bvMqWAHvLjHMeNfcjWuR2fmQcmAFeNDv69",
  "key9": "sq9SVcsqCXfqBTWgd2a7srSTXqmNgfvNZmYMdrNs4V5TUdGh5MZ6APBh2WKfnovHaSvdsqKY5dgc87fe86VWuhE",
  "key10": "3JVf5bNFu9ehKgkDhjSmgjq9KnvQRdQZYG5aj1NV9VnUYdrGB6Q7kpt2WFF2j11VxbtN7e8NWdkQCUoexWuaDxGj",
  "key11": "418Rc1tqW3EyNBJ6t3CBU145LMJhDoj7U2QMA5jNyeRA3UQ6cm8j7X3fnrBriWX5krQR9nfZAUqTaH7ic3XCkRrx",
  "key12": "gD9jW4i7j48ugyh2R5G69SfZUGrbTWJBJMS55bGnezEZjnzNLutc5AYFXT3qm55hft2rvrwLcgnQtaJ1Qj1JxUn",
  "key13": "2xNiTztueLBfjZBq8XeXm7ayJMVMHjzPHQQXaRvweFmAvx5CpmYrWUzYdvZ3aLufR31px9zTnTh54Uj43Rq7YvWN",
  "key14": "SmwesNFvTppmg6ikZxAewjUBzSLEbnuQTcJaFbB4FZxEmUuoe6XB8uNMkgEJF4Y3fFYS4LCaNyniB5EiTmG8UUU",
  "key15": "65Egv1oUpMvodnCXa7w4b5SyjqTSzcRYJSQteidrdYeYkXYK8UiaibroMYMt1J6UspnjcoKPzbAJwxodggSBgoG7",
  "key16": "5BuWwuP88KAkzbNNQYPkQdUotEfVV4iGzRRLv7jEhsKLL9kBAbmfAoiKjxaPXG8CNXyNZBLWAS8C2ybsnEiXgpg4",
  "key17": "DRF2zKcTAETUzTTNtwBd4mG1YCgSUXJS3euPgpU6g39R8seRybRhdaiz39bu6Ej9rMKfN6EYyUzaJ8fzuNXHwmW",
  "key18": "29fifvh4JzFVhh4yv9uGuvny6LaTEAsZ2CZD1NSED5gziaaHLQjRQ4hdonrfXFRTzPNeohUBfW9FvULThCYUFdTa",
  "key19": "5vPQyjjVznVn3Af5fc19GzYxgTnd99BRSah4cH2LF4HDhtSrf8sCDFpT4JGToYVSfNMmJSo4z9EyhWUxztNC3peU",
  "key20": "27RLJZwGEPwS9TgXi5a5hbda5sMpGQzNsmJ3ZfnZKg5kKyVBkavbdzDaXpUstTvN5mTAhkFyGaBR6AcDa1FR9eaQ",
  "key21": "5oc88P5YBWASg3mZPwWENFfYHpD7TaQQtTYJKUH3USUyqD7G1xDxuUzQBM6Q33LHAJB23EdmfQu9dJPumhfdr3ZA",
  "key22": "37fKcvfC7SgVaxd8sNDDN9vmPhsZb1dBBwwFG5UqV9ravqs1VSn4RR8SgJWDLxAtfCU1gBahzarvhPYujUXucT2w",
  "key23": "2nmMGxKVx9KLDutHNzrJvxx8XEHxxniszzgsBnhM6kULzuo6V4WESY1RfubeCYxnxCtqWJesf6CPnWaw3ir1C8TC",
  "key24": "2pLbsjQNe8TA5fqh5u55khWM3aUL6ctWitEbsqBPXNF3gdchDZx7r1BPd1gMsNySc8mGf4ecXLxHn86iwFxQcs7A"
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
