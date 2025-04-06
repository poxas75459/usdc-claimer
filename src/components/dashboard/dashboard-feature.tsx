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
    "4TobZkp33ATZTVLrSKG4TJvGDiATA3Ey8uoB9DHNnf5TufMrt3YoL95tRqyfpY27EYFbqM41ND47PpNLh2d6FfwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NxKbVzYiPBorPjGY8HDShy9ia9BugGbzkUi7Jc14pAh9Mr3DRrtSXCWR4Csz7jweZ8SxVL2Vd1D5XPn98zWgWYV",
  "key1": "Ue3yUWHWHLQEAFNR2becnpbYKak957VPmzbgjvjDUcjgKGoWKZenkTbfHgi2a2o7HW3LrdQ3mLL9hP5MSomLgwm",
  "key2": "2x29KVQUTg6hqnjAe1rDjNPAuMzGLKBA8dCxavX9EL1ENcZ4CDCUovQ37jr1LFBpfD7qvhBq5npyqAtYDGTb5DV3",
  "key3": "3Hy8yRP7tBH1JB1ni4t76sfJtubSNkgKyhJ2kyxK2p4nGrLFWShJpq9Gewk2ANPZaLCNMwg53WCyzJE1Roiq9pY1",
  "key4": "2xjmUbV7otTAd1tQLceroStPzPUVUDzfHh32PTRF67ek5PMZmQq8wxBb9Qek7aSso9Nb8giEuMsn8bkSBGBehJrV",
  "key5": "51dVyNsNQ8nDXrcrS9GPUUt5yW7m9Z6dsdgjgXfXYTDKZCTAVuiZVqsEWqNP1MXQWKqd8RKFkUos8uVYkvbq7FtR",
  "key6": "61QK8wsjwQguQwpjJp6sd3Af6tGfQvtNf7ADK7rH429X3RNdE16MGyoLCBE9BVUAcWan1cqFxJQcHtNKKDHTkdeZ",
  "key7": "5zQ7YaPiDAZRwufBhNgPbdoh8zB7CXYM9ATsjL3GCiwcJKwiCXuGiv1EpNYP5GiCy3LQPiw3yNfPnFNEgcJ98Q42",
  "key8": "4XUvixa4ZU7fKK2fcNcRoGhsqQfRkUbqJYkYNyzs9Ay7i8XPzh3ujWuvHDPbe3oFW71BqJ2Wq8Xzy9JSXbjMmq8m",
  "key9": "5bBw9uVqDbZuZ2ckiUnhQvyvJojrsCn8ZyXwt15CwVnz3VfRYqHAry5FeenHjEpqUueRmSBgr7q3QvWsLWdLYPd7",
  "key10": "5rxC3AMhZ4YCcMGmAcL2gMLkmccbwtzFiGCtb29uUJkwvWwCTn65UHvLEax3ZNibBsprVZtYC1TtLU94XhvuQmDG",
  "key11": "5bJN2PZjn8KV8Aof31t8ZbUvdUtV2d4oxLLRkSMcLTzYsGW6HzabuJF9rFMAeBaixhEMTzFSsssJxGNh4Di69h9T",
  "key12": "35rSyqLNc9PAst8ZaRV6a1vuQdpNmrdR37rQtRyZNq6UCujU4g63Kypk2KkvTKrwFUvZnTcyH6PmBdySyHkg36Ei",
  "key13": "4nKCUjwHGQZ2Cbfh8GsSAPG2fd7jyqk2r8yaPu3uPC2QXJ4AAzqdtRA3yxbhFLLCD1yt3Y3ssZNbKr9GBxh1sY9X",
  "key14": "GvrqrgL3qb3aqaRDgB2NzyzrQhYGDWHxrZxELXQhgmU1NE49VuJzKgNdEeocPYEa4Xcu3YtnPATSZ352E6JWGGC",
  "key15": "5mT3cSFQ8UXvY4prxEqbJchRVp8xGaegSEJGwKvLK3joyxni34euc7rjWPUyk6PtjcSa9ZCKEHgLifPdx44LnE2E",
  "key16": "66BqqbURVMWs5MFKeMZvPXitoFWetu5CZ12W6piTJ9nZ9QUq7Yznvyd1VW1Hp2h9gNYTM7SxkNy88YKeuog9AWkM",
  "key17": "4cQofXqqB3WqyRPsCuYpKdWjAESxucGZ5534Cz1MNMJLeoixV3Rizm8pcsnGVh6HGG55d7WiRaeA2KM7qZv9x6DT",
  "key18": "8zqSWbjB6EroX4BShAagZm57zeQbZytvrNxYVnwoox5EoMcZqj92hMmZqJ2FKwEBfH6SQkNXaA23yJYtsu9AQ4Y",
  "key19": "2a9xsoCZCg8ptRuqZBMxuDksWdZxPqzMgc3bk48pq7WqFQREQrqLaZg77geMhUpmPyLZtqNRkyx5tUAuohjSWKNq",
  "key20": "4VTgEuYPV9ZzLffY1eaasfobP1daX3AQt8Sm4JyXgrHggCKzZ7ZfWyThE5pZXbFH4qToCBZeM99bVtztrvRLHEbf",
  "key21": "8YD2JfpRZNfN6L5RAJ8nE9t8QnVLicXN744F4vAfqZ7KcDFReUz68EpgpwiLmqyQzj77CrB5K7RTy8NHGiTUCg6",
  "key22": "31oA5VpRwxZspXi66HyMfHigVvRA3HhzkVkird2J96Jos35SfyNhJdwRDAYuwrB8m7BA9JTaK14cdGuDpc7GsRnT",
  "key23": "61vTdU1PecwpuxMutcLZ8uL1LfTUX7pzjdLCMiAegYPGfytmDhkbofdRwr8y59LUHLEZ23zYuHbiY9hsKbiQBKrb",
  "key24": "4mAcFyYYt3r4MoRZUPtW4gJpWS3pAhKxDhnR9jYMictphw4J65Uw5e9CEY34rrA3rietQ6aw25BGgDPdA5JtQFX9",
  "key25": "2AKoCGWzWzg1PuTL8kbYt5QW4McHg1enTT58bshzZgQPjMBKDwSBemHf6nqfv4NugZds8kbu1Zs2H5bUDzKGmchn",
  "key26": "3QmtDW8rc9padjZRTT9LVJ4ji16JU8UzobVkFwZL7isNBnZSJpRG4HyZeyHodeaTtGHZqL5vDTyFuvvd1zgiHdqM"
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
