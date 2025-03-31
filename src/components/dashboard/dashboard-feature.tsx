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
    "3rSPmYzyPoN3BcVd84gyH6ScEMpeThdEVYf56MecS9WwTRqKM8JQ7e21FiUa91WkBzRc58anpnLXmBcRMuTzjuUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NhMpEawfxeSMktURhzFmYdKJaZJe8LZHwf1yHG6usvPAWgwVs5KpJ3UNGbU1pR6ZEuhwuxQTL9cSJ7GZbU94Hj4",
  "key1": "5SJBe5hKWvfLzznpef43JVmozTQKkjccL3c5syTDXwQJzEk7osj6L8q9P71gE8USyBstTa6UcB9UYQ43xkKV2KAf",
  "key2": "4CcCzRb3ai5WmW5p2oLiJNSnNHqQ5UoV2FjAB7Fz1k9GJDsJeg4zAVwdKqP51FGYPu4k7HmsoLFyc7iypnPWeo4e",
  "key3": "3yWivFe6QemBYm3KU6xPYj6MNNMrmvBJsFPJGwuGvCczcUnGQc9nCCq57HBuae5Baeun4kUGGfu5Cj4MhLQAfcFq",
  "key4": "2v7qyUYmWtX3uw5ASnaBoGyc91aNqrsmH7T27qtQn5UuyJbdLfgzMyT1wFwWgx7DmivQh7Nr3Chjok1K8taCe16H",
  "key5": "4UcSAxAAgatUjubbXpDkkM2z36ni4okcYdczkjycpJ7pUfRA3XdPLZPDo65ZSvbTvnXLZyjpcL7KoGvnPg5at8N4",
  "key6": "2WA3Wwgu1K6QR1yqxwzAT5Q1Mb5gkxZWdr2K3eAqtrydA3RCxH6iXMocYCUFWKgNdVCYcMcGSidfPcGMkroirP3U",
  "key7": "2ov6BmesJ5ggc2k8k2Er2tgMps6KGSjeLt6Yc6y7yMo2eEmH1TEjVhGdT4a9EAZ1hfyb1Dzn3dYHTm5eBHLr2orL",
  "key8": "4n1DBJ8Me8mADdPjjLguVU9RVcHo28cL3VdxiTE6ooLLcFXXNNe7RsrA4g5F15ppiEcn1RuedLjJwpXVSd14f1oH",
  "key9": "28LjTmqevM2mC5yMp8cyfKVfSDkEQQZ3mjziAKqyr371SLkd9KBZt7LVvfJHvyB8w9cQ9WnDKVKgk2chvE849zPY",
  "key10": "3bXr3mWRFz8zxsYJKijhyGeTjMYEK3ixzx97r6o3y9YkWfLr5BYTRbivfmDQyuwqGqtDQLLEG4kh8bHVEgWKMUiC",
  "key11": "4y9Ww2AT3BzWhvnruoXGMnebxhJkeS1z8cUGty4YQ5DDv1dgGAqnkehjmANbkZJcDhqJDjyFTxXDJaePhY8tMwoy",
  "key12": "uCjsURVQzgTnppyJN14irSsFnhsBqGyRNGjJsb1BiU1uKFr3FeVcqqHkVkbJ7ueHX2ynNFbQW4Zp8AFb3U6LqxH",
  "key13": "5rsH3z2MafnVPHXTfgvSn91Hz4ipBB3iTdChGhaGZDoevGgKkBriTy8w4Dc6egReAYvYwTWJr8N2GbgJB2Wi7HNG",
  "key14": "56QkvrbFw3Yfe3jwgoWknpz94MGpZAtdXBfjfmdYi3tguMXV1WrpaUgPUKBnmAe3ZGmi6iKjE1Y8dMjRi95uunqZ",
  "key15": "32xkuud4SMbMkQNFKK2fWX33WzCc6yRNrichn7fHc945gmf4tequGorY5YPwKMobogK2EQR1u4fMjTENp4xEmSXp",
  "key16": "2ABmmAqB8bZ2x5aw8wjhYdzh44bShfRdiSKUZGfRwT3J1VKyWHKodd9uvfW2D8tTggYWdtp71f6eCQez9UmL5dtU",
  "key17": "5nvyhmjFGfDPv2aHu1nDtiU3fqTJ5ZmAExcGHss3dLaZvyECmR63kotHtCfdFHTABAxu9cx6pYnBgkqL1RHoJU28",
  "key18": "4bF6VY8QUzPnFteGjQi3Xc4dAHjrRPkgFs6hw2usiMkUJGjvRhoe47KmTNUKXFvNNfrGSodQ82KNKfZqLcTPKLrz",
  "key19": "GdRGA3m1EdWtMsRZuAZqaWZNrhPyuHWLWqBkoXUmPbZXhXD9XeK2uJuofBWJPeP7w5h42VaW1Apk6zkjzzBpswy",
  "key20": "5VbALJZ75tViPx6KxRjiQ96UTXm23wBY2eebUMjVm3SYXBcUKJ1ufKSerEn8jsTXNCujDxZZuZ7jMhLipLG4ic3h",
  "key21": "vGaa5Rq5JtMmEbtufXskKbhhNG2JVee95Hxd5BvaNN1HqRc5MTaKta1LuiWmREYKRnUvykykpt7XkzNjjergzA9",
  "key22": "3vESp73PMkTm1MdSw54qddKrZWoh2bvG4VbkiCZaHaGEJo6jGfaJK6gxKxoPWEb5NuHbLUngooqmGHZk35FBDn1a",
  "key23": "49dQpmN54iPKXaJYePzZf7SxB3ve3dnoiPjft5Ez3m93V7YcR3QFdnZARR5erbcYiSG6cZ7EpVVhPeuKLjLA7hmS",
  "key24": "2GZyErwW94ioUqzuxGMnxBxkcgJLVpDZ64ATNV7ebkMetpx1XQd69C8ZYCZi6MA2isgKzSMSTb2pgv8k5d7bQeiP",
  "key25": "4X8S4vwkRx6gtoSGFDuSXZFUsg8yL1esJwZ7QX696ZWdo5E36LWWq2oaybZgptnLthezRZ4Q1bJCHk8f2iUNi5db",
  "key26": "5nnbR3GSJPgpknoH1zrhXSYxDUm993eXmqpfaS76BaNitWMRJnbTuwo5BJCazXCjr2v18uBmbmQoxZ2jN9W9CQZ3",
  "key27": "55zEAFsL34aSLHxmuFFFmSSx4bruGY2284wUnTdF35MwY8AaqFsfmcE22GjZg2p2sbdWqnUTJGFjuYQeLuE92KoA",
  "key28": "5w47GoTkSwBJs8Yq7hHwmz8CLdviCUvQwd4FJvgaKZDKC66cBmneRkpUmjWRiE8EDBew1N91ZnKCFtZthX9PHeHu",
  "key29": "3U9ofxpnMKzDHFhuhDb4DVqixU3zEvQmdxX1WbPpyuKjo9ycKdmcEgzzGrCRvYSv78vmUAGnSHf5BgsCibc97UZe",
  "key30": "3UQhvpj6LVAUJ7MTeVnurVz5bgaVDGiQjjpeN1SZA9vwRv6dU4Gt2zfbmQUfShq7WcMZJnPCumo1NYvkaRaLscN8",
  "key31": "5CUT1Vrexp5kLfNghvhvRUggsTNUoEicygtG4nRRsqT9D28HNyY2sbFu4wv5Qe6XarUHzHm6pELtYphNn8CVHavL",
  "key32": "4d1Z8izgRkeZAnxPY4Lze5fYyshcCcMRxgkRNGS7wHJuMChGsoWh9ALS6o5s5Do5GJaV1ZbkphQf6MxxxiDH9vVQ",
  "key33": "vDCBsmLPQZ2GYyEC5pEswUyzUDmvrSNAhGKqfK2YeCbZsR812cqz1Ak7MvVsof1QRSCKoqCdsbNvQ5zGDwJ9peB",
  "key34": "Ta3CugecmW169YnXLtKMUZ7u2rmbeVeYuajZgzt1HSa921Hg2ibkX5VEyoDYDSXmHFGdceZdsPTscXXvQb3Mmt4",
  "key35": "3naEFLrM7ss5tES9xq8i3pTFNtiZYKcvaDtV3P2BAR65N1Uv4d2TwCkng8h1tcSgcZ7R1qncyd4VHRkVPNms2zd1"
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
