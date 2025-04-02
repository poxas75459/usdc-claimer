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
    "5n5fUaiW8oYvJQK13JRumFvJyzKNQzBWwumobvJWWbTQ7Amqfm7UfomtojB78NnCLL5ow1jot8iBHCnvUXudxsiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hM2yyPGninLXSjUZp4Qo79QKAYXaPW7vhzxxKuYdJQREu4sVcwWa4oyZVHrFPv5c6UwNFPAuj6XyoYrvWGbJP6s",
  "key1": "3f78MFhVjM9jbFwV2Gw1aZu6TLHyz7qaEFQoRtdxJ5jojLqepGKyPcNVyoib4r4xi1YiqefZcKf8k1AdFwAWsah8",
  "key2": "3jwuWmtC2hX3T9iRWyP3EJ2HU4NvxinC4fmV4f47WbhXL1NTYQYhxgyrGV4J7Rj3HcFGubnBhSjmkMnHgWc8obsU",
  "key3": "2UDZ5rDERf2WMSkom74eK5a5GX5jyWegHzYdJ7Sym7HsQDiUrUHYpJaB3qEXGeT93HHKxvfdtUfk99vH55HpVBjD",
  "key4": "3jvUsmFD7QtJzdFbZ1MSgRU8r2eRxFAbUZm9gagd5BQyiiJxCJSjHE5fCdqzhCxTtvqFeaCaSZqwtX6QgLiaFSkM",
  "key5": "2pXu2FUTX3bZYiSwhhR5n8xfwjp8TzPv1rn4CcgfaheiF394bCDEtF4FbUkVvpZ8RTUtFoXzW3kThj4U63mFWrj8",
  "key6": "qTQekZiB4MWCxzbRgp2kPZZDRhzgUKByz5i3GCTqSWR5xzWxsBKYNvhPjPwUMH4AGzzLyzY1HtaK7NmZUP5UsW9",
  "key7": "h9myFdj6uhgD8AXfpMj2hHq86zm8nTCdSnfA893EgrFiFrd1pSjsSnLMAMBQZJEaz22Qhqbw5KM2AFUKC4c7TLk",
  "key8": "LbLABMpQLLSbenBrWpaU5pBKEiNsctsHqFeU9XWm9pQSGNksRFZgwoKh85Pf65ibNLiqoTM4x9vL97bmD7DDd95",
  "key9": "4UpGoB7ar3kMjq5XyvWUzWHQ7hv9cxqs2wu2zEbWP9zcPMCnCkRyGktfQyNMHRQuvVBJotvRZ1EircLj1eZ6UvaL",
  "key10": "3SKNRdubm3gM9KJjutFgHp9DYH9KmngfXdnhBpr1tds1x4FBz7S8q6nR2gfCgTCMQpPs1tXQvepVUVmhNZ3Qt3fP",
  "key11": "3KFZct6W8MHGRXkCkN46o9ALwTxEwr92RyNqsfL2EiQXMBaWzdXn7esXbaeDKL556abcYiCjVSAY46ug8aj2wL7s",
  "key12": "2Q2spZRaZYTztdJZuqrBrp7THzLoFPF6pScShw5Jcc5WSVirkJd5hJ29ECUUdsKHyfmeGFuoa1n4iEtSJy8XqADJ",
  "key13": "4ahJuRspkVJmTCr4Yp2pc4yUm5YDEPD29WqrASsfPtLW2YBXouiGZPBG6NHmdvXGedjscTfYAqRcnX5Jjb7XyPmc",
  "key14": "2W1mjgy8pJgTtZP5XZoW9pmuVFa8RbGFGn5DxPmVt2gnP1gLunrEXMmzfYESDt8VR51EV1C8GkD3cf3GL1yWqWP5",
  "key15": "2jkVRyqTLgCUstGUwwDy5hqP5QSpRTvzYHXPQp2cUeKu2rDGge4EBbFKm5jcSbSkMQZVo4TPdvqbnv6VGSqfxBsb",
  "key16": "435DdfPJAp5LGdiqDZA9EMzLMsho2wgVvyGEhZwxbZWDvwobrvdjGFuvUBfYMpBw8f6RkspW7KLpgL1cRb4KRtY4",
  "key17": "2Qzg8byW5auV9J7vAkXuZsJzc6F4wrBYWFAquQxsTN4wUPkV2BqQv3VmoFndVP8AWaavaexxDtnVakUYD77zVidV",
  "key18": "5yDjobG5siBy1KPTUDNbQASYX5hhASZK75LJF54Vw4vNSvFG8myn9282QjQkhZRU5HyFqkX2UWSVSxRaDrgdLAv6",
  "key19": "335QmxQ6hadAp3zeoX964yWFYwuYTLPXpvk5UpSw7zsWXNkQSKCsJwYViFz7vHzyzLhQFn3ZmWDTAkY7C61B3vDb",
  "key20": "3ykHLCAAoSS2vSGkUPRt17EU5ti9erPxSfR6aZnn3de1NC4wxVeTBi7JibC1VeK9jit1p9vq4DxsLDhqEc1qEE1o",
  "key21": "4sMVHPrMRLMuUTCYTQQTX3YQ7XVegTgY9YaurWokfpDWri4HsuCt3LuexAUzabW2pcgBdtfU9UGU6Lo9zd6CJMAt",
  "key22": "515uexYWKihDXCULbonrDC4mg2jB9pfFmw9RH2smfqnvzCs79gfwiuDMJB5K8FfzebHmTqZNZH8HR11R5bHsWc9s",
  "key23": "C7vQo7pU6n9MkY3LDQLJFs6A172ptWk9uP8ww1BZXNKibkgtt3UvwiwGrAzvkRkkx7j3ATgj2UYgcghWt4Sw1Yj",
  "key24": "4CHE2xyVLsiTk9udevrjYt1aso7qQWjFVXHMxJF2qAVBnqGeU86QoNNB4B7YDVGxX7VAkgqsJf4VxdXvU16TEE6t",
  "key25": "3po4Go5f8yYGNGWRe3cLSCuD2sg7tY8LLhDe2anmNkVDvGETEmb3v75GQNhopx12AX7wVTbcPv7DaexqYNcGufi2",
  "key26": "5XdA19sZta1RGnXLrSLgN7zvemTSMHrZoxVHjavsMdz8GCDXDPoLY2tquCrNqHWP1i81X63ombzUne5sigmJ9oGj",
  "key27": "aET7FywAhaKKHvCjFp8ayM74zqDD383AQ5BXKeqTDm2VMJpzUCAbRyTUDzQVfXq2GC7wsoZJAHPgxfuAN2B7mnJ"
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
