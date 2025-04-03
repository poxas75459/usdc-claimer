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
    "5yCqM4LMPiEF9kpJHCaxbz9d9Cmd8eHzQJyY7D58WJhJNBxrs5kAbdt7ZcbJzCV3eaZg1Js4rL5Nq74qvHUNzx3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zVbpU1QwWTRzQQArS3CJhGrZQSkiDsKP9cuAnJ4CQyDsg7f9Evrp7RkRzqwuTmUYjPuLZazRgkg2X7kcv21Cu9A",
  "key1": "Lw61rWrg3xmMA4ASUbLufVcezxjNde3pXE9PkWRwiK9yigG8wWcMYG55QURxKUaCFvkw5oni8yF3YDqAV1LQRYA",
  "key2": "39y3rGqfsh5mjHk9m1aMPx7tSUrgQfcx2iJvsm6z93E4dLJezhUTffkEg5q3qFJatY3HRrH9L6nBQe7EjgCviry6",
  "key3": "35A4PAZVBYNpDh9VHJtxP4h5aou3RQvr74apTYfnMuLT2bGgHKUfyp392EUmKHzCsfg46VbrprdpDvakFPFHv25K",
  "key4": "57uVBj6exkZbLRFoxmUWdsrvprp8DAhBiD4kR9y5y7eg4LKfKPmGRrXSVQ5DHnwtCRaPHiaSXuAEsn7fk2cL5j9s",
  "key5": "5cgrYBV7LB8soSvgQgzL5efpykGLcbXAbGAsX5EVGs6UNMkcpQYyg4BiWVymGrnimJaQ7jtLcGaNCXTdXfda8FuC",
  "key6": "5rXSf6HigsfaBcojsSapLsL7JvVQA7eA4Vbr6zu5NGhz6fTsJxF6zzZtzBmywY4NP9acR1WjkJ84dy49fmpWkrFh",
  "key7": "5YR1cLnjC3mcnsNAUR9xU9xCrBX2LmehSGyNWeMU6D3529W3XFa6JHeUcC72bxFZRogC7oyg5146fN9rYKFwsmRX",
  "key8": "5srM7BoywnC3ZAzdhpsPkrDT9JuRzJf38xHkLP7FrCiNouA6LrNqvCWEPgnFNvMGMN8zpZN5UWx3ETh8Mv7iTdhq",
  "key9": "2rrz6T62LeQLGkKyuaGPWhFCkqyfV8UyGz9YfioY5q1vAQj6GPkmHe9ZvBdXMBRjqq4n61Vo2NSyna4veQQJ1nKi",
  "key10": "xBcmgxcNxjkfEm9cQEfjBLtufDPaQpbynF7ymtBPQeQZCxHstBtZxCQ4Z5qovmfdKGZovKfpNBktiwRRxZ7atwK",
  "key11": "2Rnds5jzVnKD6gu9MutCZGzHzK3nsfhjehGux6dGH2XuxF64fxQDKdkaZvhPWShzzJMQZZZAjqNJ5DT1QLudAcSm",
  "key12": "5PjnQe7PY9QSxSN1NPvC8obuWtvikRNvKxqmcmRa5vmnetffHDdaeysFghjfzbforLBsdqWw5n3aJ1tedvg6mXXQ",
  "key13": "2Pmhuhe5mNMyP8eCnX6TQJz7Up5g1CVut1QtjFcBzkbX9wfRaovF7dLKjSaTyh6YUTB8kvi7AEqYzJRXMnCpa4RB",
  "key14": "5Dby7srYn4wxKCLih4LCRtyZx7QPR4F9ej6ojud9bBx9gPru6yRUDa4idwLzFEDzXJqAjr8iNgxKnJynBECN69SY",
  "key15": "w2yJcF58CJcJ3ub5RMiDfqcmA1LzfvHrVhvuu64mKHc41G5VVyu12FFgJp97mL8vsbCmNTmcKLCkz4irhbTWQKQ",
  "key16": "3F1ZC3iEDaPVCvRWSihCpyjvXgk2Bu7AqjFnp6W8Mm8bkKaCSvz9rummd3v6qrEqZSWs4ntqfCa3bVyQo9M5bNb9",
  "key17": "5RA94ZjF8dJn9uxV29862vURDicmdopWc5ZojYrv9z11uwgBcHXtZDUp728DWaACxD3tnj5qhjFAo8UsdRbWsFpJ",
  "key18": "4561oY34bBkFQkyt9YANMJXv9X4FNSabXYYy9FaLxaYcnrVonJjpyAo4GZdzG7kEPUWE4Pa3DpjWKvwfFPhTKkjz",
  "key19": "4fQKaFt4ruFGJyLxZet5Sbbw7cZKEhw9r5Qy1rvndCn85eBDvjzcxe1GgXxUYDMjXZ3LRUbFEZE2D7Wrs7JYpYYz",
  "key20": "2fxcXbw5SvH4ZiM4p8iVkUrTk1urDza8GMopz8HfyofcbNQuWY8QYLR3ktJvG3z5x76xmpaqxAVV2WnnpWQCQy4u",
  "key21": "46de5Z72aAwoaGaZzxrjzCs3j9Vg9ziP2QibDhxvKyzVeDDRADWNGS2fAktwavrBUt8skRBvHiM1RzCqEg53rv1f",
  "key22": "ThdGY7PuhdUBwftLRtPWti4tL7SDztApc9sg57qCNDSgFRajixxCWPMqY7QixBtnRm6MP9QVoce3YypyMR9pdHs",
  "key23": "22zD6CRoSV9EDyqyM7TB6oecEZSNfnLiwv7q6gvmJycN2FAP5Rwvh6cLAMoXo9JUVabvJfMrUrhvhPJ2xRaL4PZC",
  "key24": "43oQyrQPX6aDq4cXfC5H9JTNUzmdqaNiWyv2LNUvaoPUVk2hSQV88dcgPk5dgHdZ4gdTbCWr9b2KfebSURCWHYRX",
  "key25": "5W33eWZ9YkhY8b7oV6hKADXMHUE7JSM6ssqM9e3pvVCq6m3iQKeSs4kj3kW2tsXqHeFujaXvRK9zTA3RQ6kzaeEa",
  "key26": "4ytc2Bm2qPsfG34FHbkJtGznjTru2zTZunto1WqgHdi25wXVnXFbZWBAvvU5LJ8gj9kDXfgmLuUqn3FYJ2h3myNs",
  "key27": "5irh24Dse1VTdX511A4eM637kekLGiFeoA5P4R51XRid1gZontHPbByYSdeNga2BxmAS3YubV2aThUguv6pSUbNG",
  "key28": "5cZkddJVzG1DoW4CK19XfXxtQSWSHwJie1SfvrPeZYgJ9cdSaf94wWhPFWCbmrsoQzD6zMpVEiEkbW2SH94SZ3W2",
  "key29": "4BMKaBownK8mpw4eLzEcEaciyCQpN8rWL2ZU7NLN2TZhQhdCuukiDt2F3ASWCRvW3ZooRQN67jKy9HHipdcMcMVt"
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
