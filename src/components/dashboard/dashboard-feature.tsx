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
    "4xh3SvfDdJAkJR8NSZ9QfVkdqoic1anots2xGRtnQNst7PE9xECB1q9tLVovwAnZn37bUhp7AhmfgF9Lbgr3LvMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D6cVhaenyT8qz6VbPkVCzNSCf5QQhctfofHr6E84PXcepNrJLbq2EPJdDtpcHTDujCq2uobCvNGESK5Mg9zDahc",
  "key1": "2zz3SeGyB4UngwXAi1Ek3VoByzj5ioZZgBj1Pfx4SLmbfd133CfChh6nEC53yyTnTA42sDGbVPsAN8kWiYWwu63B",
  "key2": "5BPV1UPDq1CEepfMKF4rj6TeaCGBAhnsupf2MzQr3YLhVh1qNzTwwoAfSjx3rcRXZ6rJgaTf2xnkkgZusacmjk14",
  "key3": "3hePxYogmKcem2sArqbKC4mfFBy1SM2rxVqT8Tv3Vqgp7fBZMPrZ8ADrsJdLGJh5kEinu7RTmpVLQ3NkTFcBghS",
  "key4": "5oJrRtUUYXKfvFMvTZ4pCFDUMgL51Us4ksJ3oPk9YvXpDV17Ek7HqXfk2VJx2sqAc7mDMx7sgcrLCidwEWEbcrcY",
  "key5": "4xjrqAzXwPNGVVkjNpc8mS6czVVKLYH7FNyAtstu2K8rsfjGEBbNq8Ue6DaE97wTjTpM6XUwRNZgm8Fa3oD6LNfG",
  "key6": "4FuPsgh7LpyebZZ4u87x3yTrFCHMD3xpijx2kFzBUhLKbXaj3sVGeDZENL9M3Pd6ubUemWEGaXmfG9QjVvfWAtSP",
  "key7": "qswkMPm9RbakJJqd3nscPQmpudAnAawpa8HP13ME4XWpAWfvpLZu7M1h8CqK2yXPS7j6Z9PFfqvzvptCLp4MjTz",
  "key8": "4jJnt71xNMZRdsXwXZRE7UnrygZre3A33Si7cbDPV7i2Gg6YteDfx9RXPQQSuj1GJQrVUWUo5nGsMU4cLUAPGUHo",
  "key9": "3UsbMXaHwDTs5zUDU84pR44FnQWDGM6nLNykXm38WCehmpQBGWK2jU5nwyB8PdJQwdu2Pv8B36mupBMhNJS3rYhV",
  "key10": "2qkRaZuUweh3SQWZviemsfubU8KaXjBGrftyxtELMtEwMsQM4Mh4h45RLE3U8UpLFcke66vqHFkkjQLjZuFc8YAb",
  "key11": "4VjbSiqHtXXE7m2echwfsDmRLaYXyNyDmu9cbxV5gzTa2nRpCDkF2fd1MGEqgAvdFip5i9A7ugi5ZgycQRbHUN3J",
  "key12": "4sYxknsaT7UXx5ELs5bdRartPqvcjqYd2P4iba1Aju7o7dgCjaq51hpS8oHRNokEDmt5sNmefjbLUEmLqzBJ6mgz",
  "key13": "jaLv2eYZz2a96bPfq3R885H4SUyyhYPev5zmy5HadXp89Z2aHLVQR6rfabBoehKU3enH8neWN3AZKmB322RScU8",
  "key14": "4o2QhmqYnHu5txTyf5UmBtMim2WGhPt6jvzgVKdpvuVN2e36RFSHC8Vy55zWX7n2AbxQWiA2xaeWsnGELS1mjF6G",
  "key15": "5FyH1CWiV1ZgY2uVrrUdG4FpU6YRJfJci3Ee1oEtLTnCEnZb9EuZUgqydytExgY2Cznv1tetvmwxyhVDk3Qx6WH5",
  "key16": "p3ZYcYFMoTNJMQksHp8Pvfbc5QKTQwWFDeboAbANfwWqSn9ST3NZxeFQjbuRQ614RrL59fJjYkVce3fFv8M1pRK",
  "key17": "5RrG1rHCgpHYgTmfS2uUogBCkN6wnbVbdH3RbHJa7mMYHE5CxtXqwdToq9ch377jPZphMNYEadJDqFKEXQXtgyy4",
  "key18": "5RRz6YZYvvgK8JiP8RErLHrP1H6Z6h2pUj8KupazN2ZiZPQrkvG2S8dpzA3crMtdAhjSGAVLgc4gWgVBiCdTZ67E",
  "key19": "uodi7iECeDwiuBcNoyXhgYJDGzW2WjNrzHMFiE8vvtBktB39KGSCt7gsFRiyynguwG87gGmEr3NvKKxoGhEhAaG",
  "key20": "3RyfNfWfH1mGEWewyAQibHRoZZf7YhnmJhX5rS3Gz6rhEou15CE32zmG7HkfeFAov58vitp8cBsc9P2xNiVpLgTX",
  "key21": "4YpFqx1JKM8N4yCE1CMS5xdgiWZh1H97gwqNj3nHBAape9YTM3e1mZQtqSe3gtCnNpdaKmt76s5Jyq13h6ZgTda7",
  "key22": "2JY4TYU7dXdhDY3MTe6otCL9b4KVsra9oBTDqMSWqTYcrHKmhUCaBg2Sk2H9CpE4i2FUC6YK5vHMKSrGAARxa47J",
  "key23": "t9xfsJD9DRoUiMiBYg418joP46YzGeWEnPV5oiNhMsQY1Tn7EZQJYjMTvWzTmVepUMqoLqjRgwGhwSxRHq3Kb7Y",
  "key24": "4L71gTpc59eGnPeeRhHGHjtATh1kRyJpPBzBLM1nyNy6Wxb8FHgnFAafHk18rSEnKj3ShLnWpLaCc8dg5q51NrBC",
  "key25": "2uNi9FV86Exd5M6riAzE47X3o8e89oGvUpTpjyavyB8RcdCUFdxw3DX56fGwuJGsreJjyqP9GsRSekLfrU4TY2Zx",
  "key26": "56b5PcZQYbzDe5LmpE2fCaso6fZWu3kSGJyA9QZV36hrJyYK2Rmy7bWnE5NjgSnZ4kc6TVxvrXtAqhMLXsjkpJ45",
  "key27": "5WdQo9NWTghe3mNkwSYwEavU8FouavDyWZv7eYj6XRByCh2PtzriQPv3bi7xXU6xzAqSUGB2j55ozYJofTmSqmsM",
  "key28": "4eDAbU72yBnYmFdnpLnzF97hT7qnjTCgQXigpKXVqr2obo413md76N3TcqvHhBp197GRVc3goTJdNuyGDUjp7woz"
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
