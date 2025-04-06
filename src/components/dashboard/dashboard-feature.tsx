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
    "36N3eKBn3TdPVQXGZruQfTuLVUHV4uEH1ZonkrkvXgN9r7HEFnTDvLgn7dHyCu4W9Eq2kStFZ3eUm6uLEcbtUPcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N7zcBdTmYoXd4eXeLa2BVg38N9Z6Nyahd9jdoKFiWUoL5Qm4RiUfXD4G4nUb8GPen9q4jggEBtEknzLPiYD64eh",
  "key1": "2efq8WX1urQ8FgKvUSKREep7cv9e2fWsmk56187kZt94X2VhZLPyn7TVih5vedg6y2JUJv5VsZUr6HnTjzoahu6Z",
  "key2": "3Bq3Fm7cYKBarbeg1Q2jzXwYV4AsX3ED8ZzrNAiBjNwqidrZAmnaRW8Cgas3hBoKFg4b3hC8dU1Uz7pof1N37Kc2",
  "key3": "TQK9Res8xo1Pfi1x249ZqoYwix7XBcoGUq4vRSNpvCHHx2eEQ4z192GhCxPk6hM5WQqJKQ7CNcYwCu6Nm8VxjMi",
  "key4": "34mSYNT2QQUk5SEoZhcLH1VbPwsSAkBTbJPmkSZDGpuKc5NibfYPkLdGRYJ3k5Y42PpnHULYeC2vyCC2TtRwwXQB",
  "key5": "2AMST6b6ezBiWLAddfXPbnc99Nt1FvvtcZ8HAFLmpFgbW4BrvnqTf2rMJUyw1bNyTD89YmDtqVFnDk9s2bwnapyS",
  "key6": "4SGmfxJFXiUGodTURC9QhPpyaGZqh4soNkK3GkY5ECrj5MsQdY5koHNeufhYXnpfwNTHQwzTcZcTocbipnBg7JyB",
  "key7": "2EyXVsw3tRxq6TLbudbdNSxdaSUKbZEqN3yXJ47rMvQxoKc3q2wrPXEAFLWaEpjFWH3yzmriQV8ork1tintNCP5n",
  "key8": "3iTbiLhAQoe6TaBpQ5e7hPYQdCj2Rq9QdBYe6tcWW3dkReNqBHv3GJKudXe2qg1HTLg2MdMwQNFMmMsajjrQTo72",
  "key9": "3eQz11b5iaBqg9hQ72T2xtqCBqPQ1jyApuDMJ2VfVMSzD5QgC9aqk8LVGfULNoVYZqj5jaYoXo91S6vzSfKwEbuG",
  "key10": "4M7kuRELfdr95i2XtMhHLRekgJMwg1oftXyPbMSPDZYsSDyBhnzrcxftTk8a5v9xKgqchH9KY19Lcxc9EqeXao8C",
  "key11": "5Cc6JEfUucdPxJwkwM4sVn9Fz9mzXbVhcwrQpFKpE44usdboFsVPTwbCzW5XH5WdnjLKqN33rnLXpViq22SfjYY8",
  "key12": "24MnXvskosxdMTKH1YC6tMNt151spcV2k842VfHsDaq5R7ZA5X6XupBxwD1w6EiMEYyvCghDckmXdAU9LmhJNk9L",
  "key13": "2Z3vqDUkhGAQGSGhnwnVrfkhV2PsfLgJKBGSp4MW9o5nyeansAh6XPFVkRzw8Q2B59cNJTCRggjUhT6LmBDAP2Xd",
  "key14": "5u6NK1vUHMMY1WYYxeC1nVD7UBysnEcAQDXXrYb2WXQ1SEuS2k5QKRK6s2sx27itwaSbuqZpYq6PoUfgVHXf3Btr",
  "key15": "3D8fu5BdqBxiXN3NwcdZhAhnv9vbNpKqnzMRKFdiweb9ZJAzfqnx2nu7A37HjH9feK6iKJrMUTACNz2xiBEFDtvG",
  "key16": "2QfVGMtj7Y9E7YzqJuDq4NWWwKNRQRa9DPgmK2CSNYt4ddjTDerGC6jwved6oLDwLXqszHiYBKUyK8CWqTwAWT1j",
  "key17": "5w7EuHgwLmMGqZMWiRpGR8KjymjwWmvDLgcB71nspULhMkmrQXGUSKVHWoHyEfrErKWreLB6WSTRepsV8bsYpdSN",
  "key18": "58GQtweYaqnb8LHcE7nfJFy2SGoQLAKWqz7nNrUEiGDbwDv8aQsHYF8Ey1inpGd15WYYARDM1fF4gWq4CGY6cqQ6",
  "key19": "2dH6cuL43T8MdcVK3BDHUhAnoemiJUXm5hcfcwa4eAN75YYf77EqtWN6PjFGuLgBpU4rFPypsDoKREwmjf8rq3gh",
  "key20": "61fAj7ki98XKjPp4gXvRJiuSMz47wX1WpfbeXAMD3kbHMM8F6bFkUZ9aDde76LJCfT4DxzYYwHGNVVCpqRoEfj8k",
  "key21": "3az3cyWZKtd76f9Gyq6eS3KKwPebabUNxRN83nWy2TrHnzgvSdxfbB8DZ1BfokZjeSGrc3zBfAYfk7oELgeCuJwP",
  "key22": "cfj5F9iX8UmLgwKVfrtj48DUYxkCaxHA5B3xF8qP9qCz31e7PmpamFbarTY96pfyDrHpetpemfvSWcC8efhEqkW",
  "key23": "5WaxivyZZPTmbEfYLZWAH7Ze9bjfhVqYCxP7MT7z1qYG1MPB3S1MHXU15KYt9EXGP6CtJpgsWss6psPPwmC8gp3W",
  "key24": "3Cz3NqHNJgDk11uFKDKdruCJC4aYLzoeW7HfjY7XBiFcWnYR3eDc3n1jkokzsfpNgf3sn8mzp8gvL3cwsm8KjYK3",
  "key25": "5mXGzkCwLEPgGv9QSmFdF7WqQGvd5faGgtrAHAjCFcQZZo3QCEkngHWwg1gLgGMyoPmJ7uhnGkB1ZR1KdJXiZMfb"
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
