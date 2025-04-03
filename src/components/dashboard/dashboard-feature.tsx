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
    "4pNcZTyLqxgcHX2ce6iMjWAprxmqGuLX3q88sMrzM5sGHFQSH4KXknmaMbRq1iYC4ydZD7bvb5WHveyg9ASSFG1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xES19aWpBjbqMgd75cQBA863Zd5BiZAsG6sZ6Kq6WhjXtdzkvwz5nF2KF2D6ZGDZcVzCkywdnVjNkDJXKUENXye",
  "key1": "2BsEw1BTq5grD9cjsekjPMfHorZctHKrVnMqPcwRwQz4DuuVC9LtMTpWTm1zNjphSYhr6kTr4fvqpMRyuvB9dDey",
  "key2": "2hntkwPhHQSJLuvxjzq9kCALfBYwHFKarrUudAqgyJPtjezaANGwzoxR6Lvr9X1tURJDPXXdJfZszi8diszZZJsG",
  "key3": "RRAvD6gVidj4uKoNGzXhEq9aH8sXnCZ7gsndSWQpmdxjGZBZMwY6cRt4xdFvCBVWHrxd8mruwGC3wW6DPvSmidW",
  "key4": "4qncsepEncUDfDR9dvPAHsbqmqDrfbFSULZoLEdD7f9jzeCDej5AZBWCpmPJDCAbUThHujVS4MotxhdazWc612BK",
  "key5": "3RUf7XW6JhnWCtxn7gH44TSxqGNCLYup7VeBYJ9BYv6g1chyN7PcVAJ4VsXVQdAgjavwTBkr2LK4wbYdKz6RWX8T",
  "key6": "5dWTL9GcEqtnnxYrGqppVKPiC8EWb8iCxzzqkUzgUrieVJWxsVvEuiD4aMYdCodSu7AkL6fUCxpEPyrGLTiAFP4X",
  "key7": "4k77SYetM1AzGeKSX7ZPexyD1rVoNmrp5jCua4QwYAJBaHLNt5Gwk2eQbFNEHSSDCbFc2RLQ5Bz3ykRR2Bshgq6V",
  "key8": "d5Wx4a9KjqHbcPii5a3WLvgaXWUmQrbz6ywqGTcLMR6qSQ35o1h57GkBycznK925UQEk7hive5UBRYPkgyBLUyg",
  "key9": "B2k88w6j5ExEstwZnT3acU6EYc8JExy1Z3aWEBMAbXp5dmX98XWoVqzc2Fta1gYsXp8EBmVCkinvRkvv1JfggQ9",
  "key10": "5EhsbkTXeSZCMWu6xs5rCfgS3uHohpAp4apuMNdc8pp9GbnpjApiwMgL2F6o1yyw36ayaoxNcRmfzpXSWPJBZGFh",
  "key11": "3utsEfqDqKb3Cu6KCeafAAiTwrq4ZV6T7hk4uqpcsGtLw6cD1ioRuD5QVBWbtmjYaSJQpwsHJ4vPMtHdNWbJsfaX",
  "key12": "2caSwtRZFL6Hmcr4S8eGimGbEL5qGhkSEeDfGMr79QmsZjZ3jZXxn2YqSEvmHCYmVrR4QrhxtgStFyoNxiUv6sqw",
  "key13": "5gpS8j5WtzjC3NG5NJvzzFkHKbHGyM9Rk5NesihAtBDN2JaorESQKTcERe2rGZzy7pVPeKGGN67BbYHJf37CQHfF",
  "key14": "3EQQx6VuMDc5Ja3ymbo9sbE4bJs3DSVuotunrkxDExxWhCEtDTqpJdnJUEdmRqjaEpn2bNjiHEcpCbMEcFKWJGEc",
  "key15": "2gu5HaTZGG7xhpRwHX33c9kPqdLZpEqdCWrC5w5x7e7Ak6ynyBdunYwDH2WvXa7SAiqgC9ot7eewJC9X3HKxiHgS",
  "key16": "W7yEPe7DyGYM2paAvrYL6wEZ4xf2QkiP1CE2FJcRpaznXcPAucPENhKZABiK5zdr2HxVvWhsmMDUKtu33PLNpr9",
  "key17": "27XbcwDaDg7aCGNLmR8gXnJDCVBdh3yeTKmHTbA3922HEjwnKpyw6JyZ15yvQHgcy6MT3T2ZrMhWvN8wdBM53Nji",
  "key18": "QTEEWzWGjGXJkyjwRQHWtVVgnP7JmMTd6q3rnHMYEuqZdMUHfzKKj5FujQ6AZcovxHAza46ba7eR7PEcXat9xcv",
  "key19": "4RZeGsesaoqq2MPe28cCX6z4CcWuqE86LGjeSa4SFP4gUqu6vZHfMzz4MA2Zi3KEuimrztQxtnsaVTVp1jTBjUzL",
  "key20": "4uxpAoH5e2wzNu96pc5iiCzgaiUAH5CMMo8LcBZih7ggthEhruwjoqiGWSgj7Aq6qsrJjAu6atD4yq7UhrLqkkpJ",
  "key21": "Kko5AMhDKiTE2G5yVA9zLcUjm3HEdHT1sQb9SjvHSJAPBn3D2Fb37q3kQXmMYfvVGJtwahcXeJzuB9iMfQniNBW",
  "key22": "2Y7uAYawHCvz51xdJD8Ak6AyhpveDq1oKJ7sXEDnZw1FpgwovQtKCAT7fCcdUgyw7i4Cdy69b1ZDpNK2fD2vnMEw",
  "key23": "5oxpB2DXSAMg8pXodGporkYHyEeSTrFL8xsr1iemNUYF1TBF1XCgvgWYDhND9NFhTf839ozwoTPExGUEjFMU5mo6",
  "key24": "2epHxdpNHufvxHjxQMfJj6LZkBvE3XU1XzTtSut4x4t68cjqk9qEoaZXwB7YX8N2gR9EJCQvgi3pcBxxfNTgfaT8",
  "key25": "4nmuLWywa5aG54Eksj8y5LBXB9NsdvqLdc2C6uCXSFt2ZYDVfJFCt3tZXvdpkPvejBkiPTruSZGRcocqUsDxM675",
  "key26": "2zngWLzH5Z9W5kUNXWeJrFifQ7j7z12MHSPatn8pF2njC578aXsuE2Mfe2JU6aDh5AaGVyuH7joL4PXs4fW4HihK",
  "key27": "41DVSG2sx4pgTtMpTYMWGB4YbziFC1bfFtxCGQeY9ATHcFetJAKemUT3uH4hWsTQGnW1TwZANem5ayy3KperXE3G",
  "key28": "3HpEzAGXPU6prUEzSaz7a8txPAZucpayUJojXAsFgwCybxAp4UTqfihYfjdqrsrMzJQ3ke6SZ8eF5JGfLtNBzXVj"
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
