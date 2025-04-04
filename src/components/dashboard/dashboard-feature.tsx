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
    "5njq6aoNv6Zc6ituSsg717twuf9ipV269QP9DaZ2Q2A8Zf6jxqvxN7utsKWaXX72DBKnrRgB4h2Zas5QBFQ7RwLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vUvqjDsP4tsrKg3xsMuysqUoWNW4BMuS3BCuJxpRpPRZLQTNan6ksaySMVaGxfQ8Hk8LDfajqq1ARbfFHh7BaiR",
  "key1": "5Fk4BvZgutjr6zuBsSB4hPyjpGjxR8CbhfZakpyy4jbrquJuxVWXnKeHWpvMEBcLzEiVboesZ21psaZxkCK2vbL6",
  "key2": "4e5sLUUFDBsJcxZDxmpdSzLA3A2MWcKzkqkUVXYiE98oQsbNW74eSP4twQgUZqkx4NDyamPApcV7ANSfGiEKe355",
  "key3": "5EK3ibaDf7bP92eFrGhKF6GUKss4zoWCwZeBxFr6PzhQd3h53ZRffFxV4Z9oVhefJVAnEexQ9KZa3Czp5ixjef3",
  "key4": "4cDtcEwTcJxnqhJSG1sYF8CRJnAu9JCYcNnpV1hRXNURcqQGtLaBuqHX8yXW1Y1vMgy2jDhJ6U9P1giCkbXNzisw",
  "key5": "G9YL5f1RV22yD96n59ivcna9Us4V1zCsbWz3tsB6KAgCKJXMDmjXbaVsYMFEaepq2Xi4VfT9ya4pFaQF3gGf4Mf",
  "key6": "5nWdANybBqEaXTZbo919ohjgfCaeaxpv8CihCRe6S8KYPeQVxomhrBgnBvZ2JDAaXJFNTwsZem7KvbCxsr5ACLBm",
  "key7": "5JZvuoCvi36idh4gyEgg5QFV4zfQ8NUsBCLHADiXYihcxaSV7nydnHF4VnxNGrxMTC1FXUujefKbxS3WPivxk47w",
  "key8": "5x9fVJ6EtDxprn55bGrULAEj4QGoJ3Fg3eFz6GKkGFNCaF4EeTcqiMXv1sW7FdDq8GgN7j6WNRQQejsg6XXCcdRg",
  "key9": "4pxzyNZBYhMcKUHpXktkhX4SdiD6aADikG7m1HtLgQR91FFvbhYGsC4m7nLtcUq4prdvuvyv3Y8GmRyV3mByVGWD",
  "key10": "3UmMP5NbtQcrYfTwmViJ37ixVdXFGdexbKEjEMTLzCiNYsqvvfkieXnnYVfqSRBnoGpZAqMfvUABP2BWf9dG8fpR",
  "key11": "4kYKYNmC4rcv366x19c6gegd7BY1io2y3cgJuimGpqTWBBivLnsdtCbqUL1GxSy5BzKdgccKrxe5b2zV3NEFMVGJ",
  "key12": "2uGMhYA2NNi2CgARH5DQpW6QAe9NrFxKLaLWMXtjxx9MMRc4RULUzoam7fbnBMxreS9oLeagv25ZNaQNidDHTUYS",
  "key13": "4B9VwTjxgyvzZ7yT5jgDmJru8oCih4HVK8Eo1T9zWG6Xmar6j5nmGBbVsEbLpu42XxsxAQiQbxAntZHeszgfGKVu",
  "key14": "2FC4es18fn49sGGfygrjnY3JgLAeyxQYHsrCojyQgiEQYzS5pEnF2SznJVfGfTu7M2w2kXApNrLhnEw3ULpkMuby",
  "key15": "PnZrZxBpdS3NkhW5AAMpWhf1LshaugtZSouEXL3rRtY1MDn1PzTL6CvLawgEEARrhNQQLZrC4RpYsejV7EFw3X6",
  "key16": "315QMm3hdX59wGdpgggKZiAAgCx3UF6DZq1yqYzF9WdEZ9a1R6mP9JxK2aMPv3U91VRU471ApzDE8HyAZjM59JU9",
  "key17": "4cdkT74z8fHAkuwtkSxpCtghzxZbNDvBJkVkn1jHChWmHB6EQyPMh6kpYbGLxLFAuGrYz4wDUxkLuL87YvCCX6AP",
  "key18": "NkaPRA2uJAdeqRJiBde37bASBi4hTdRVqE9DDgT7PTi6c5k3LEZpygBRmNL97fiCtgbWs4nSrVF9QK5QbHGjDm3",
  "key19": "3an6iokz6BmxzQafH5XGs9pNRUmpEd5GqEo9qDoM9T1x46f5aH4JuJ5P41hy9bmVgQYvNtwS3C1zpSAp9XDRpo7G",
  "key20": "3HbGp9qAZXyUv8t6K1Qc9QziWgMP26T1TMuWvj6WycxNnVGjVEQGs2E2T4MSRCpdQVt3EfE27EmZfZiBDagUerx7",
  "key21": "5aYAKaBxhoL8U4GPjVc3qw9WmVEydhSLVfDyn6vkw9QHWovBLNGCK8zbArHLcCTYM93Qot8Wf35ZxFUM5cx3uZQb",
  "key22": "4X6phpw3CsNNi2fskPKVBHfFG7WUNqzqmBh3aJ1tzmfDHRc9JDK6V4cu2Zki8RL7Tx1Yw2XqYMxhnmVy7XjFUHdq",
  "key23": "2Hhyy6ixCN8B6BCrY2vuaYCEZ6tTpNSQwL6oawgEckzwUW8X17ZcW3oV7XL2xYijo79gsNz2SYVxZq23aZqmG2xD",
  "key24": "5aN7tLjbzziF2m4fwaYaKPLzaNn3RNbJ9VHDsFa7ZnNxowsrMcqj9oUQBcKhCW7GTEQxEz3Payc4XrTzCKvHmjUF",
  "key25": "2dniY8a8axQwfvEPk1YKxWqvhsXPyC2uksVCiYDsHw6qAiAKwBxuMLxded62DAP8HXgMRowC3kpc9TSmG7E2FDmX",
  "key26": "5NdbXN7eWJetP4yqSX3r3myMEvFSiwHaEoThsoUxUuuiLUNmZp9zDmh8N4qf3VWeHKA2UjCo1FiaRQsoHCjM64cM",
  "key27": "3X87JCemT2Ys2sB7dTmMmBeRXdLYy7mXEpJ5dQoK5Bd48YAtaWBB6zcWrpmsKdNyXuCavoJ1zgWH6UVkjVtoSMVK",
  "key28": "3JNg7UqC1gtgfFMQRe9D6L8K3RC4AA31yrMd6bopiTpFUeiwuvGxAsFMAMbsxtVBgSCRZTcCLRfPEF9v3pAJgQtT",
  "key29": "3RWMXyczN88FuS7N8rvQk2L7Nax5RMSy2NLXYx6nBQV2i6sFeYhznr1N3gizkpBdf6qn7BmGQcadn2iXvLMioXJR",
  "key30": "5wWodRVXWF81EsrS8hitUwaoEGqBivGivE2tAA4cxVe1tP3kaivTejnBYhpZpWqTnobpT9EhpjqYoTJJsaaGBUEQ",
  "key31": "3ZZPfHpWupyj4vwieboTTizNxvMKys8URAh1iBWtiQKBWaAVKV5DnRpk6Bz4uQ7zYYdwipJUTcJTEgqGvkfhNSp1",
  "key32": "5xZt9BtbHsfS9j6tc1AP1yv6K5vBDLJe96V7AK68mQNg2R4mDxF7YpnKi5AnaHxWP3683fqPbkiqZpYrggXi7jH9",
  "key33": "Wewvsvx3e8c3xgPcAh1pKiJ7tq94WKfPKxrqHnxh7AQhjbXS3M1r9Uk11CgyHiNLMqQLXfvQ3AqqWLj8g7XofrK",
  "key34": "5CjwUFVPrNMuJKWZ4ZSZ4yACi6QemQvYaLUM2bJtXx3A4DDniXVTA8mW5S5VxAVbo9PgC2kmqwUdNdhBpAVciZe3",
  "key35": "2qZSxKDvDsWaaq21P3ueiStbbLJTZL674wGnrWPHMUzA7VdErcWHLPsms6KXztMMkfKND38JSxHKVkqk8TnagNu8",
  "key36": "2DGRufDwJ4TmdMhLR5UKjcoivuhtMYaxa4afESKCApk662AfxYvVJNQ7hzBKW7WxRdGc8Eajn31Tu84UQUHbN29x",
  "key37": "4Ppi8fSRTd5zfbwEp6wFdLfSKbDZydZBNbSQJ8nC5B9RyNUHeadWPKCStBKznV4T3Ggdpo4PSxi7ZH2xiqQF7qqY",
  "key38": "5w3mzirYpRtDNpNdJTNzr94NceWiCEuTaTr81LjGSX6qvVopLz1znQ9vdgbQWorbrTNprwEkuaWATb8AWX5daer6",
  "key39": "5TCGXTNrJwWZtb1gFXqbFGTQ3mJnQW2qCLnJZs95ruXqnHWcD7UjPSzz4EAgJArZbufHUHwA8YreFEhMzMe9u6Bu"
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
