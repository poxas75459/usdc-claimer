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
    "3RLYoHeH4NSd2p5btzPJcEhvHzF85Rm3ThPd7SHeYBgUnjKcR2j1AYUHSujK5znmfHtrJ4DKCceNdiExsffS51qV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kxyoWGGxY1UTNEmvA8GuGroZWhyJbXzSUzpiHnFXfkDKdFBuM4YACgC2K2irUhJ1PFtAEnatNjzVW7xLqohbohv",
  "key1": "3UjNo5D7n5Yi5RS2jPemXSqvPf5kPuwtrxkND5FCSb9Z1LU4EsGoYDUFxA7xAcyveV1cqRYYBBQPrcKZCQ5BsoEq",
  "key2": "5MwXF8WCKjcouxNG9WVFkxQvDZpKuDpyCSFTzCr1zgWQcEHg21hosJi9nYYyvaLxQiWE53KBigfABHpnnhA62T3N",
  "key3": "2Q8ZzUbczxDXevMzwCsiowWkonyCharm9zvZFRPZ3FKtrn99MiZ1GFHPPUjAVqYT1CUViDRtZe9bS7F3H1F6gypD",
  "key4": "GzkRD5WMzWvYgbYCfL62GjESpBfKmucrRSZr4m8Gt6ccHB84Be6NoT4f9qXWv5PNUKoxYigbarjNw25RqgoDqND",
  "key5": "3gEYVygTmqkcgbcV37yngrSgSnVAMynPpyUXHwjkjZtuk9uo7vM9q39Vqa74LCpGMnFPh9tRFEqotqnGRtCVYCZ6",
  "key6": "8vELEwKn4xUcJd6rcUjGGXipwmh3k4BDenBUHq3H8XHUh7HbgFehxzPnB8dVf1FGfKbCbGimSXzL8CXRgPnFNjN",
  "key7": "5Jim4YSqMjrQAbEPyv6zbPcyzkGF2bNV5r4a9VivsZeYzQypW3Ua7VduEvMbzn3Jf15AWFkYqzL5vpwEYS6v4nJC",
  "key8": "2UwKyqSKQokRLvEqQdBzPHvCwkuWT2Rp9hJ7VdGt6Z7iT7Uu6c7emDj6heXZwSTmhwaXeGrXw8Mr1rREuycFZTuF",
  "key9": "2cGThSbTsEYtg6j8XkDrdc3hJh5tn2rdRpKo5rYw9c8xek6geht2JEH9fosQPwL2YErfzVHmeGF3WZv4Mgp8xG49",
  "key10": "2hBNBfF65LDALGg7xp7ki26eUQ6uGGGwixbqqpRziraiqwVG91kZKrXhxxkiKHxJy3Fu2d5ajjxHPPEtXTj4sa18",
  "key11": "3bazzivHZS4WU63YJ9yFdZQUs9eVXhLTVJpcU8PjC66A2e6UTiDkLFMDHBUjfkTZNyiLnQY5YACJHSGMLnMkb6e4",
  "key12": "sbsL7eNvQKze1m7NTcRRWoZBnqvTa8m13Y3K2XR9xXdrS8u4rLTxBqWYXV9vdhTLKmavjtRbonuXGVb8othBH4e",
  "key13": "49rec6kraQvABVGd4xKkfXNP7HCQCEkvbuw7UNRi7RAE7gmcxmwFmsrCNeABVDVRct1vMKR1FchEUHbuBd7yStjr",
  "key14": "4YFLeJNs4poZcqebaNRaCry64yimGftS8JhJAFkjELRTc56xoEUhEB2K2rtQ1VEo3nkns8atgYP98gtKCcvFL2ta",
  "key15": "58tmS8hphZ5t8GAs9C8WaUmKjsZHMzPaZBWgckxiGhJFU1hYm4YMMs5ZvMYBoNg1oNuGT3FT4GR7MVU6jabR4Jb1",
  "key16": "3txD3JkMQsWgT9D64AJMQgaJ7qsjHXL4fVSVMJpFNiuhFsw5yTgnkADy95aevJCXjB2qZrMZH7C3dsus1mEcJYTC",
  "key17": "2NuPJKv8dxc8Eax8ZSVFGkPVa4zxeudRjNJFDFMMPVgcFwpn8Xm1vWg7LqTQd1sJHPZw1gcBgBTsXCf5KBdt9H8u",
  "key18": "4hNTnuNBdVeY7T9b5u9wUBtSq9DXRcWe9ApDFihGXumzpPvg1y4qqnfcSaZ7Zu3969yTYk2ETmXKahcDgqnobg9d",
  "key19": "2kooSYcSyajK1aUFw4wvDypz7kZqrGYjcfb5GAeFXSWdb5tyShPkkRqQRC4yKkar8bKSYK1c5o3vHFxEtLyHubY7",
  "key20": "2CSDFme8yTb5tfAPxC8Q7zP9oawYYLqyecQkkS26SdKaDSi1hkDhkhRG5m89dqFJ5uQjt4C1xzgoTNY8VcRNbUfb",
  "key21": "4umg725Bje7dkg1Lat2Q7gYA9tiDpavaTXAoA6qWawZk1eD9BkTdWxAYeUDmtpV6hiTWy3oEN1B9H39gH3UWzRCH",
  "key22": "5aBHpXYbM37caFXCw3t2EbwVeHyy1CtReqGfQxB9qqG2Yyp4xtPzqfLLcHXHqPDFvVLPEMxYgCNH2DWP8wnmdNns",
  "key23": "z74gQBtnV5BAfG66fbp8taVVPRhYvC54eJLAtKo8vHNqX51SoBwdsv8F7V1CDhu6f3Fq22LrEiCNQDsukEmNqgh",
  "key24": "5s9tN1bGsPTkpZ1PE9iKVyL6tNVm6wK1kv2mNhcvV3EieKTxtzeQmHrdVUKEAyeW63diqLtTYUBkMb59nMeuybsn",
  "key25": "3YKqLCmdtEDsv4V5uxrsRGKHsPuWVRh6QXAamx1H2BLrKKSesMcdXgdJfFs4n95a9NUGnWcSmNMdTEMKDJAZ7xNz",
  "key26": "N4LSCkJzCMvRPEPG71GYjWSfq6qiSXEAJJ3hsHMzUNC4pAPpq71fYj6jRbMav11EqxGRSbMhMykL1dSF4QAWRLt",
  "key27": "5mv3aucEgVVJikFMdrNtUZ3DoGTu2BrY5zYSXfqWPBoB4AzghYaVAALcU1E1c1FpmJnm5JMoWuNoh7iBDy1ufS8Z",
  "key28": "27VwZTDDd1UnSbSa2gi9BVbftbPMb8Cptn65AkTNx38Ly56Z2UzY5CgReavjgfBanNePLNtrgLSZftGPxcEa36p4",
  "key29": "4yAYyRGr5jraDC3qhvGSABQ7n2BK9qE1tzKjSWfFaA19j4HvcrSvYrfVT6xjqRMb5aLN1dePjmCVXBAtp2orJMgg",
  "key30": "3AcNk6adnJGima5ezPpQ3PjBWntwfo7VRGF7iztfjRs4ycNbVDqbDaBRLtpFpYq2mzMa9Y3eJp9vPuUVXVy7df5T"
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
