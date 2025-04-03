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
    "99vzP8Af8PgfVvGahy6QW6Pf1taUJuXzxJXF5QVM3XjjUZdnxpEWSQcAX8YiYFK4EqVSNZgJUs38m6KV5vfrs89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gGFGSnAYGwni1pLPFbnEsnB6hUQxqxpj3FUMbSp7ct34hiM3t4u8FBiwCKMAwXdGnUSsefW9dEztouv9q6pd6EX",
  "key1": "3fbwsKT6keSienT93hbohNrPEDbR1UM29JVgooP3qcUu2KNJCbp8EfJ4EiXyPXeXPteV9sQHsF8NF3Aqx79DWwbg",
  "key2": "5iDwXdY6BnwizDhh8JyH3XqEZVtdXHvnv8qL7rDXReiFZnc35RaFMAjMPQCckaaQxbYePR9ZD9sjF5fdZz6wefyS",
  "key3": "3NxjULdafHFBYLmAtyXnjzuBC5bWk8oQHaGuQGVLnv4rCiA9VbUEcLDYsLRbfcvWTVqpPXJJQ1fesiAFuEVcEbfH",
  "key4": "2JzNhgUjEcrV8Nbq2oyHxL5nYWKq3huBMm7cQLRntqDZyqn8CyFSjrv688jYwAh6NmZ7cb2D1XGiFACFmDtjcYqq",
  "key5": "2DgvHZ5bZse1DE25wzbUWUxES9fk9GHhWGzJnj1q1UhFkLN4sGSpVaAJMBuSpQNTMbT7Jeuqs1FVoejd3imM8qfu",
  "key6": "2MxEVpriehrzyj5vKgnZYi2xWuQxtxnhexVppKCGUX16ATLNUCvzdY9xPFxBfAUkCaD9SrjUgw6oY2GuCE2Yju6b",
  "key7": "P8ws8eM5BeUT726CrBKZ7fDmuo3SkWuDV1Jp7eKyZYA5gpQeBbZQFNDPSvLSB6XCUzwWrsnYaD6j6tLTd95hSS3",
  "key8": "2zYDXti768wxihAE8YwkG6nWzgeSjLNdsd4i7jA5oq2PFztnba2UktfT5JF3st7NK4Sj6kjqpqipUHGA1Ug5UCd2",
  "key9": "2kGcJa5EqVrfm1o3epQyRvgSvn6T7d6o4HRoVd5PQ26vssS3RLBtzee4DkPkqWoPX5FWaiCz3APKKXsLCfa48Zin",
  "key10": "3HzYU3A7gene8UU83Yp7cFeUkxLkzPMCTFvdyeETuyXTPSG7snG3tHuVSEGLtfVDe7kMYf9SWyegY9Ksp5FNDpZw",
  "key11": "3LyTXy7SHJWaGbeXKeZTQ3xjez74aAwfVdYUgYymZabHvFdW4UqoxRsXkKCpzPccmZ8vPoMTjRZVhRbEgFNDunzV",
  "key12": "5aKTVAraBVvb5H87zdbq8ibBAhu2NFkkCx2XJWcnyWS1wjzhSQvZb1Ys5SVro6bTznTMXW91Y5kc7996EMMfVqWB",
  "key13": "3ovYwf6fzbeabkonsBpxtz2jT8c9BthAbzz5SUdxX6KgWbWhmVkRaXvKp8xg8vERqP5Atz1T4ZF4uJJC6YrgKav2",
  "key14": "3udA8vvzzir6UuXBps2VEEJg3QQRejyK5uU7x4h6viqxiv5bRSWJ2XHoxYBDjDJ9Ay5czhEH4bNTrHqZYiEeUJzt",
  "key15": "pUoVaKqzMr1EE4w11CZC92NnK3qYkftvbqRULawCNrGoXvujCNJVpzvpBYUiYBgXNVLXELHQTqHdtGnTQ8SvZfA",
  "key16": "3C4axzR2rE2M2d2PdgzVVBGbGrnBxav2pk3Fo1gNT9E2L7EQW69YkB5cjJj6R72kePLLfXmzEug1Gv7ZoLDAV6Bf",
  "key17": "4NT4vc32rQtvfqr9UyvFGcfhgDrNtu1ZeRqw4NGYZFCEwPKxQHhbYQym2qFZ1cv7rWmXhaveT5MQqM8vZyoFUEpp",
  "key18": "3WFeUadhM8SND2PPDUxtNE9QVgw9dezHa1YU3pYqoSFmyD85ryF2exgwo4Sdaj7GBwdMQXtcyEz1vmQmcQDAuhVh",
  "key19": "2YYtJ18fw7DdHiczchXdFtA3JYVbszX8it3FzWqtmeh73g94oSVvDjeMzgicYjgpNd4E3KeNjrVodeCFaiqRGe28",
  "key20": "3RnQ3AiVh58ossbuKuSWoto9ZRbixRPqiU4TqiQ9iM45p3unynPBWLTeq36Pnh7xoD1MSpka1p6i5PpfrdHx9egY",
  "key21": "2fpGwpGsxhgWPfuRzhcPmdHX9kfKewgXP93UM8dGz6wQ3mUUbHLf5hrDqt3zU8XaXtXnRygNVVURpiXSUkV7Ji5L",
  "key22": "3mjz2WAjm5ZWxjtkT1k3XSiLtLthtV4BZBgsNbEbDXZHNpuZdR7DzR1oZ9yGxQJ9ToKo4YSTpx7anHf5ak2VeFRj",
  "key23": "37gfrq5oL8YLd1tzWtNAN7LARF4nhH8xBogVWtHBa3fE4TfxvdgehaPcrJahHrJ3H37pqBNghsNEgBG6Y5LSfQSX",
  "key24": "bqa7XRC2ocKcg8Sszvn4oYX4WyrKmTtLLBDwG2PkazrGUYQ2kRtqkXaqzc9bjovCZi2HkW2q9AcaHHZUaHEm8sq",
  "key25": "83UPeJF55oc48SED7g8VwV6p5D3cQ4FA4H1GRMm2YML88mw7A8mc6CYHQK61najxi9vQr7sa8Y449EdhWm84VBE",
  "key26": "RSPdMNYgVCZCnQ9mpxVWe2XEHDjztYRWa3ziZAEz1D8NpN127rDBnsE8RybakeQ3tUWGssnbGRBxL633GCjHUtu",
  "key27": "2pJeJhfwEpxv3xiTUdU9Uoxr6teDuEA75YB99tnUeGEXFZXyoyU2YPFUa1rwE82SL7kyyC6XMGzNwFKxErfpo9vP",
  "key28": "2ZmFMt78JhdGvZY3QuYoohUaxV5YAXVcamFhkFJkg12pqCJWm5Cwmy4WeHoRf5Hn3xpWbe7DoLUzvt8RTKzWBfDf",
  "key29": "22rBAD35WvST5RtyEhwamYDRrGa3PK4H8v4YKKTHxqyS8BUHcQ1jJH1iDgC57Db8SbzXv82n3txXpKzoh7Z9DdH7",
  "key30": "o6zT59QrYbTwqHHBwWqhcxvjyB9UEmNcqeszZde2ra5c5GdS22SkE5CxD1CLSm1DZucKNvM8qoBf5TcaVnBheMD",
  "key31": "3n4d88s6e8k4sQJmq6CHecqAtGBBuF4FVywVqS4C7jZzbjmMKCbszHwDtPao4GxSfE1D3hhFrxVewg55fBWP3Qfm",
  "key32": "2KkdyqKuMEnVK1bknL1Xo4M8typdQtc94zWX1MJ8FovXVJHGMzeZ6NexiBLWDARsHHZ5g4aWXFekxF5YumwmbkcA",
  "key33": "y3dq1YVxC1zUB6tCMRLYtYH8BT3cKSVoSJEY2jX5wTxuKtMM8v79BQgXMb4xL9xLERotrkAonkmUrcBk6L3hXWc",
  "key34": "wSXh8mMTfFMrZSMXsFzdhFifSFECxEix75XigirVZDBovAiZjZDEFXTeTK1pstAzH4VpXynN1tHMnjDU895sCgJ",
  "key35": "4pZt67tnkZ6NHRDMbVb2nABG4vWnxdPQHCuzp3ufC2g1B5U3XR1bHWfr5QrfSy4uRUj9GvU3qAWTiUkWmBMyqeoh"
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
