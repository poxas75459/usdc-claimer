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
    "Sfina7663pnfGJ3c5jFd71cLy8wPNDSZPtA39bBwBdULUxvmMzYZH4NmcZNijVnEupJcAX4u9uargvKD7NH2xTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ETCqFDabzAN8WHwVT4FojDXQjFhKkCy9suM7eVNaYtJzoa9bMiNqugf1n72xaa7Jo6dbw4L2E1jprKq7tseQid6",
  "key1": "ofqmZ8PdzcVvWhGK7DLjY1NiAbQev5rV1vEZ5NZMcqz3aYGpN48pmS2GwmM5NEQ5Ndhv41im5LaLD3Z4hS8Wn7m",
  "key2": "3QxWJQ1XEFYefG2UB3FAK9iaUqiz8hFaAjGDqv3iDiFpHz3QJBL8wptqPgfbH32Z57ye8Fu5JFRrK2f12ktmdYRF",
  "key3": "2PNPozerhTpsmmZcreS7c44BNDz5cSfMVGP2w7bjYCJbv9xRVZbAEtbabqVmabmTv1PtuQpM6md9UJ9uJgEPZmky",
  "key4": "65KBtxraS5sSsLQcUaoProN2BHneaBqLtjTrXnBfJenCs6vRJP563iQEkviXnkrkVWMpMFZe1REUbcFJmpiRfPKE",
  "key5": "u2Kiw6wTxYYUXEkNphbKKoraZYrQZwgDwY99YrjKrysJiqEoyhG4v5szf55HVSWRgJtZuTqSBssQpdRZdBmThnM",
  "key6": "3uCc8UgfPp3VGJEwVpYrJ6G9Arj5XL2YRY2itScio498c8JqhDQ9DL5XiaAwymbfmUBjSrAg1o7FcVTXLuDj5Wrz",
  "key7": "5XGijDPwE389cCG5PY93qC133xeCWtvb1GhqL2JfrZTmNnUmsDNff6b3PCqQLhioMVNrgNVwEMZLrcJ91pSfre8C",
  "key8": "52mCfiAT1aKXmX86UA6TBWCwC9wsxxCrqpwQjFaqji6VQCPnDChTmMqRTij9DzLvaQKfLaXXHH9vjys3tXeStEvB",
  "key9": "62w6a2MuYFfg83XLVccQ2eQ9NwCCkrZAq7g6YMx5JeyPeG46yzRgLybDb9fdQPsiF1JheswZwSxJSvU5ve2L1m2R",
  "key10": "21oTFkvwZ9hg4tBCh5GPdfinRBfTq9bEHrFbzB2qmQoNp8eRndi8AkwpiACvwxYfm8z6vWcuRY3VD6K9Ene58RSv",
  "key11": "4hdDkZ6UV2LAqywPRq1cwtZJx9APRHBbhpMzzdWgQTRuowmjcPmn5tfTyLXe7mGZPDckHDqSVjRmKrUeg4WLZYRo",
  "key12": "WJu5mghY3trB8ZUBehbGe64P3UWvgv4C95oFvfxUNB2NQgDYqRMQEJ3FTbJbV9KZxjq9zXAoJGGVgMrDvXFXBpV",
  "key13": "5YKPEhE6HDRpoDVUZed37AopW2eGrMVA3XNvJs5ns7DyXGBoCF3LoBB1U6KvTWKDQrbBqiezXaMchKcrZR6kfmp3",
  "key14": "21xheFjT5CFUUf1PA4PytwvARCrhdGgk5oGFjjhj52jHynKSxxirouGQFy1esggW99mVnT8aN28qQs3DRSVxpHf9",
  "key15": "64g3WofBWxzYVrxTvXcvfxt5WNLqrWWbFtb2neQgH9ap5LMVAJDtoihqqUwyJcwJdiZZbqVbmz2wXBDGa78ohwHk",
  "key16": "4cWYgiUHiF8WyqdbfiRHkcgqRmivR8ih46iKvwtP6x9bhaC1VXMkSZu51rnf3tLrNTU9PSkyWbzwynmxwqpsyLJ8",
  "key17": "2H2tgNqByUSPiRXGLsvqGz26Ax5LVfT2BFUfjqWp4dYzXtLPs5mmWJxHPux3umueRftQy4Q6Sk1FEjsQXvyQKViu",
  "key18": "3Zn5zGeFXgZMkm7hqAVVLavFiRQVfVGQmwkgLCC74r6QfcVy6J9T8KRNnEj68wYaafuh34uXCPk4tCpq2A3nb56K",
  "key19": "43kymqeeHbp9d3pzArkanA54RSogWRQ2cVZCQFFUaPFm4wn67M3Gs32BXmCt8qyz9TJHsKgRfKEsuzd2png6iDE4",
  "key20": "ZnL2ivs8SbhVEaJn37QTkGUT6q3B7aa7b679sCnoqdGemkxjiBi43ZsNoJKzc6dx2hv1uS3rxSAonNuk64TzUo8",
  "key21": "2Ts1HRpNmSpy2CAeBttVneYjCCHMLzmMzEsWAvWpCtik8UdYdYCSZybmCEJLEqK5Ps1h8kwXK2PAUGza99d6svCg",
  "key22": "2q4GGPA9S8JCJr4gyQ8ifn2dgXayDkv5jX7ndcGP912Fdw8xpA8BgcTcjix2isJtb2BUW1E6r5koQ8x812UTSUN1",
  "key23": "3qjBhZK69QWFMtGZnGDsNgDyZzQF9aEeH74Zn4E2F5Zmxg1DJ5LJ6vrco7GhwZFFhXhRNbnTR478R4ZYzTReVYhQ",
  "key24": "5cxHfEbuTxdWhYvGPGqvqcW6Z7Z8Bq8U4vXeEmuQ5rUf429WeKr2ftr5LMxMK4EPcQkzELDYvvEQPLCFn786oHjC",
  "key25": "3f95jPH4G91onbQkSGTzq8bLuNVcyBRojTqkoGS8bdsKUZ7dvW9gx8LzWFq7YJZgvCCS5fxtyfsc42Ee1LkaVUCS"
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
