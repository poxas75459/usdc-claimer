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
    "ZgqdFhBdfz2dyfWJ6uwKTSa24Q5zS31U9qaxSGCnM8YwLUcCXXpu2MPSaqvSfKtVmfGFhEu3k7DBZYJzY6KjodP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mfh2CpyB4wU7pDdmnjjcYCMKUgSYhWwYR9vVNDkWPyfFMMJ6M3ZTdaSmxGKCdYbNiU5wfo8yP7dh3DWq81jCoo2",
  "key1": "FpNXQCt4VDuMaNypq5U8zpf5g4bqBRSzvewhQ4oxneaf26f3LGmEkpxv9HAUdw7v59cEqJKpUMZtyqfKmaofBHj",
  "key2": "PBcVzHwJGTZChtbm18YNf6prSxCHjneSNRgJjdaCcuFXyeKH4s7UBFgPDQPdgdiP33Z1easRpCxhzgyX4cYd3Mi",
  "key3": "5Wcuf7R9jG8LyB45bDWKHmZs6cW6FeUe8J45StWE1nQjRcdkftkGv7TkdFznazN5nyWRDtw2mFPPYF1KyopLerFb",
  "key4": "41Y1M7PJHKvsg6oSb9hDSW328BPTFbJ72ptbexCskAytj7k3JYQxVs4wNwf7wb46JHHW31fnySjuadoxqArd8hTY",
  "key5": "2RcaU2ygWDcaybg4UNZhkXToiyz9We1yt5BfYvjrdATGJHa46GM2DPrQwmjPmz2G9pwyfSodXgojkXoi9wRK7tBn",
  "key6": "RrnxuVX8CSprTZfMQtjifvKtEC1hewA2TZR3ux8oPC7denJTmJfvAhEoV7ww7gw4R938wpZ9J8ZgaxXc42Mm8sS",
  "key7": "4JztxeVvdkaNKELBDvmoNGAa2hrnisQMnWHeEng52CnekE9Qd47ku9qCs5kwb2bzAEDh3bFuUMVrrw9h7mSMUK5m",
  "key8": "5Y8hbk5E9Jx2K2yKnbPdNaXXjMi4FEMRUet5E7H4A8F141yhYCuxEWyekudn9rUGWXTqjbViioFSoERdMdGnUTGj",
  "key9": "2r9ubNZGh25nJeWiKeWRUdudJcTcDJ2vhD8fnPdUPWVfEGPdqk1vY7apx9dsCu4RnW6NLSBSdzAQkdoYWSSBcxkr",
  "key10": "2ipLfgc9GtMwv3RfVVe8dccjsqQQ25rx3SmqpcNokKh6csvdhpqkCTUyygMBGLAjXFan5cobJny135BScTHbBwEY",
  "key11": "2FM3yGEw2K3NNN7SkUkJ2NC3Hj5Um5rLWfvdEwrAy5Wx7ygoznw2HY9pGzbBcAzX6n7jc84vBJ2kmrYEc18JPA8P",
  "key12": "fXBT7dgkV3eHprXs3Hk434iz6RW2Ug42KesFkDQhRBDxYTW5n5SAtax9S3ifmmi8zYhnvUtgsh7sFQ9hShL4hKS",
  "key13": "pmMaU5jVSC7kvhdwPD3X9D1HHHdyPGGgGonaxra4UL12rvF6YXUDd1cUuKVqh5kMHtS1rsk4TfqVruVpxocq6A3",
  "key14": "5Gs89HfRr9DHPmiLEUAwNhDsu4Rs93JAiw8kUbybK5KjHnZaTGdbvHFx4m7thoVrbeGhH85hzMVDvp3paPBn5GCC",
  "key15": "5RjNdykUv4H27KBppSs1sphcUUKQ7w6gc1ATvhBAJ8o34CTgGJZMtKZCvnH1U6CQKV6jaBSBZRoC7cy66AxZ7td3",
  "key16": "dLNzDKn29xemGhG5MqcyhSWq85Rnwtpu2sJjVSUfyGhAwTRS8M5BCwRR4iFq8djEk6qnLEX1ZqygpwhT5jkrMwp",
  "key17": "21zh7LDbAZY6rCJ9XAUqMKNY4DCPVQz4eGC4revBGDKmVcd7JbQvBh77MiyFquG4V8iGPZnpVS2udjMa4qiToAgw",
  "key18": "3n8nr734nbehuUjTP8M1Q4yE5N5y6UBvL8JKakbua94ntNs48ZJQTrSxNQrhKn8R6X7Mfp7Byo7Nb7hB9LFLTyP9",
  "key19": "ayuATZJ7EF1FoQTuc9k5CmgW2CHZRzjyonNtrWHDjg6P18g3MYRnPgYWAoNbnan9iB2iRVdf7vbEcbCwuMVmjhY",
  "key20": "dUhc2YVrrigTqPAvV6aAdts64jhKP1YQ7SbYAAyhcopD28zi9k9t856K4JoqLyVqaXk6wDeLkedLHZiLPFsTD97",
  "key21": "473JFL81T5t3jihXKWM1LSmZHPjZ8duqxkyDoA1i7AfGJKWQyTj9H4JfeBqbrgDWmNWtf1rt9G1Uc8kyzj5GPfhy",
  "key22": "5GMqhG2EouYfaNUPRWYjqJghLecGpXmakXwfhQ919n6zNVMTs7ibdeWh3VjD7bMzQKjwoNE39TkNDEtBS33XQ7eQ",
  "key23": "WAgGG5w9ViXHmcrWBVX2CVLLy66kPUsoDzjtftnnLrRAvfATsDLhFEks1n7FEu1N3JmbA25zFEL7kQCLz4sCKEq",
  "key24": "3w3zxRMP39LbM2kRJkofF29uNLJ6kEH8hRisKndVkTyZahK7WA6MuAu5S9t9SY1onUbQ1w8X3T8YDjAZFC6YfXkq",
  "key25": "2uVGpjWiJw2AaaJ3M899zuTGxYL5rJ13s78SzxuKSjq9NVr34U8pRra98Sbqz7d57yEtShgu65ZX2cqRaK7TXB3s",
  "key26": "48rAaMwPaFpocGrGpjj2gKaUH4bT3T2LoK9wUdHCMJYPsnL1nNNyFwDQ9gwdf7cxfrUVmsxgEKRoTm5edZJvT96w",
  "key27": "52ZMaWiw2Ec8ZqM9Bfhf8cpz3Kgjb4zjDY6PWZpjSKGAchpxqCD8x4H3jd1Naf3tR4CHNdkX6rsGqX9fqfWMUMhS",
  "key28": "3ZyrqK5WUj2kD2EhQkMYRuKbQKwYVfps3XNW1ySNE6WgzYnbjRTabSzkKDQYBkZYzJd2siQU3gEKgrcnAkFhrTCw",
  "key29": "63EPCWJuBBrTcqx1MzwQgWqspwj7943CeG5qUa1vSHFXmwxHUAQxYNjzQ5qiBzAGEtRrLmUMnqMzMiPP4t4ZZwpm",
  "key30": "5HpHLySRorStwZPk98ALsMhvZjaT4JWSSVWFtFtKaVa29S7DzCHuDnxL6jHff4MZGjPkqswYGam24BRZEY3wj9M3",
  "key31": "qCu1sM8EY2UfKHAV1nHYHLke2LYGCf9AdpJMSYAjwC2tjX4w5L8uBLeK4AbVHUGgu6xDEjVJ8j9iHTaUV6rmmEK"
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
