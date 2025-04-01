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
    "24joYDJFdQ6PMcieF57kQbrkuqXStSZPeYWJ5UEUZYgaWzGmUGfypp8m5jFVLMqnr57dShZ4HQ1m73NNiHymmwrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BVabgfHSNhS9GLzRAYiTjDzQ58dmMY3n4kjt6BrEjEEwKb3sjxPZ2Qe2MNGAfgySuNe1QjjHVr1V8gbnC5Wavku",
  "key1": "5cQAnRXK4ndVzZCB5QPtAXh2X3Gdu8dUxfvRJBPvSs7QtBKy51ZnZ6L2tdSFxFNatR288gVd78skSNtVozcAFKUr",
  "key2": "Zjjr5yd879xcGGV2UnWj5tJszgGLyks9NA74A1EfT6LZn6NracZGH8AjS9vMgNKeK1sn2FYPbvKrN3gC7mvym3A",
  "key3": "tcMw98DXSTBL7XHdTn7ZUSWQkXXWBsP4p6cu5hPgNGDzEWfSDEftZuW5bL6Ycq8BBevtttvUuDd15s6MvexSW1z",
  "key4": "5B6yCkZqxQSzpghVBHxEV55NKFPjXGvy9185RgC3Dse11VxrpGhaq6ThmWC5ehPBTd6TwqXUziACjcASncyaztBr",
  "key5": "2CJxyj4BnTBu7H5ABHy7RxFStFqRdydmRSRf7L2jxR2ftyeX4W4DfNj3ArHmA4HRM1FF7MwNQXbkT4S6DtjbnvhQ",
  "key6": "5WDMgMmKpQj3PUryyu8wQQXSvE8oc615zwa1CAUatzYGTMrpdEx9C248eLkTKbgTRwo7T9PUJmfKyFDBwXVpv3F4",
  "key7": "4gWHu6EBZLEFZMxeYHiJNprSrbphjChdnpe9mcVhxK8WwdX1a1Rt32T8ZbtkYjWyJ8JME3o1M4tk4pwnaAEYRYsJ",
  "key8": "37msF4BzvGJNyvnDVTPZwUCe6kzYmxdyH8KmHgMNCu12h2AUZj9hFq79wgpcTnpkKfrdntPKsqdZBuacYCqAtjYd",
  "key9": "2XLGXHroVpKJGdXCcEnGzEMv2EnNkwFqNiKhc1nBipVyVNSXsmPvYUArJqUGe33w7XUqKj6UG72fp6LgHKAdB4vP",
  "key10": "P4rTSRZyoZ1TTaENXNiNo8rCJJDYTcv5iKDKHAakLeHy84GQ9tHT45CtBPed8RQQWSzpMe4THjX8DkKstR3fknF",
  "key11": "4TFUYroQYoYehBaLQdeu3qaFrJTZ8ZKZ2sgiTuPEk7ewrQvY5EYFQbW68Tv91jCWVkR3k7gyDZKuvdwWkKBbL4d5",
  "key12": "LJi5qkhBddsdznmboEehucXw1zNSEYwVjy583ckhw4hEfVJZC2dE86SDzHYYJhZQwE6QvY8cAza4SZhA2D3pDYh",
  "key13": "3kUQG2bLiKDb8pRQw37cr2LZquUgbZa2C24GdD6Jmk8hKrEZoNYhZUi2nseupmRBhZ9bRQkzkodJwbgBVcr16SjY",
  "key14": "5dhzuwB6cNCjpJEAqwhkB2XgAt7it7NqiTXRU3EgCGhwfQeEJGJWXw6Wmug1gQYEX45cJadhN9HrsranWgN8SGuc",
  "key15": "39SrpveGP6k5A9UEfJzhvzmBHiT4GyZNoK2SyuipxrLW54EqxSbwpqtJRuRtWcTad9stkJAvmJqCxNDkz9YXU5X8",
  "key16": "FRDAayWqmKgyN2pWyvesGL1VYK4LdKj4r19x9aQFJ5zPpySTYn5FScfAccHo9gjvgfktdBJoNujSaeBR1HRR3Z1",
  "key17": "4aFB8baMebLm6gAcQUhMLQhdeUfLzqjnsH8jnc4s6ioTcbUBxSQr47SCGRJ1KFz2rCEygNRreK3YCnZJ3Lzwuu3C",
  "key18": "48B2A5R1YTPTejgv6wPUqj4bTwmtQFz1w6MRHf8meFwU16J36CUS6Xc91qG4jsMHCfFRMGhzgshC1wyj1Xjv1ANX",
  "key19": "5RyZ7bjZf4FZVn367xmZraTkBiv5wy6RRqTGJT2a9iuQfPWUovkiWQVfqUyhhoCXmwDCLT2bcSdXUs2Rju7NTab8",
  "key20": "8kcFhC2fHGodSn4yDEbT2V6GyhK2ARW8knRZyZVyUv4v5nXxa9yJz9wKt6DMw2T41fATm1uxfZRkJz82Dk4cmQa",
  "key21": "4FYRetEvWzXB26opiuZnVfqTKYrXw8oUtdZgsjf2jFk36AqyhQFu4rRiwEMhCqNbcimWWpkiHHKPfcYAQN6RrAN4",
  "key22": "2GjtQk8fJLv1ognCfTVypNyANtXWC9keuyA85zYoDfy7dMJGEBBAVo5Hvqifsh8B1Eq1yh6w6MkEpuz5561ebzUA",
  "key23": "25fMAeF4WrJLHP6dAKdeX3oB9aLfokaKexQDCfPhE1vc8nycUwhmgRrErzLs97dFvkN5sdvPoY9AckTKEDqTxysU",
  "key24": "4x5pw9V4JTvDzG4F2rkrXxTdyerwijpJza5YkYCZ8VH82u83mp1NCdAT38YYfHQNzZmqBsaQUEeecq96fsqiaEeC",
  "key25": "4qCRytfoRFuT9PBfsgvn4qYF61xMzZxYxTxFbw4FYcQP6PiDrFTA8S5KfdR3zc5gBLegUbasTx2hYydKjCKnX8tg",
  "key26": "53ERsNCND7uWpo4iRNG6iw4VjvR8LojyTuDtkmhDtZz6sLoR9STuzkark2dJmeDtLYx9pe1H7jvaWpDbu55hQt4x",
  "key27": "4LmkKtp29F4M4aaajFALYs9Atmsx2N3DiUB9oQWqT8eJRzo9DZLfFZfJkKrzb6ibwqsz37Y91zH8LoG9Cc5aDuz7",
  "key28": "4GBEdRcMXUmtDGzfvqR6PJzS7p7Uu2JCy5wrQ7Psn3QALcLW8wTDvPxLr7bdNxxuPaasrMnrTsNaBJ2kYzJ14meb",
  "key29": "5PSnHvVLZ4yzywH3o1Hadw925Umjz1CseMhfh8Frb63pSA9V8vW1zVs7UyTjjTL2zgxqnWoNkfc4FHCvzLd9gg4b",
  "key30": "5TrxFHUppqBcXmcuPW9EFUE4cjR8Ff3AjxjVfYc7KaYCZmPPnN5Dn61XdL9BtjdMZpud4bzYGqbXgVivt1rLrzNB",
  "key31": "21rHAZpyvasJfZerFxr6JQKUMcpYjm2tHQfYfGW4FmUzkYKAqppsj3CEYuVShrzqtpxmU3cRxyuPDpxzFcrJVSdS",
  "key32": "4XGMnvgxXiTooFBhi1kL4e8ytGP2oUEURktNMCufdaecZ7jzm7GJuV91wMS4P57MLcddB4a3R7mK62ZyuCG58HEo",
  "key33": "3CDPwHahCEDydC9r2HnrnJ7CJJv5xiUvVXP4QQbNAay8BD7XevziqeURVV4Bo9rFjNXuSmv5TXC3XP3AAj92J698",
  "key34": "A9Bn5uEfWhP7JNCx2Ngexbir937CAo9sWiAvaCBa4ji25LHHccRk5fRZJJAPRmBRpNHfZ4h6bzhvCx88AwZ6fBg",
  "key35": "42UYjSeVbo4tbXoMP7NjGQhV8dPDxCNmwsbPorqe7rzLsvMWvP95GukLSvpPE95gVUMbfQAYSVrZ9W7geeDsNNbt",
  "key36": "4zgDHYRHP1tjvZCdNgdmEnFGWTi7hEyuURnbFa7YanJPfE4z3w8Ygi52syD2mvspuhUhWUqqc6zGParSN7LffiMS"
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
