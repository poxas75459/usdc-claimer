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
    "2CE6gRrXygneBqZHwWieYhBTGqGSQ6LAqckPoHxU7a7EprrLrnMSwdV3gWkyYXnNRkmaaYCm8V3n7D7ANKmT4vRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32761Gqjhnxj7kEUtcBY1PBniQzKJYjvT3TVHfJn7TbviQXzG1KZ5EuGnqwh7t3xfsZeU5wvX5eY6NatQLhzrHh9",
  "key1": "2qswt48UJSWusxyeEKKLyydcSyh3ku7RCDYZYcA3fY7FnSrxTtb8614KjRjRvdRLRrNzhqzvX6Sjv3LDqQzF8yVv",
  "key2": "qQCkUnZJKF4Tz3E9cfr5pACPnAEq4kTcQE8M8HQES5EHgsrRoM8UBCryAofEFgL3yimSB1SioA7ZaeWvkPNt51q",
  "key3": "4QjE5shxzBxM1a1CwWgBPuvRpkTYzH95tdToWPLg1MuUQajW7bkQ6uZKQpCPanvakauMSCwVT94YFfXx5YTvgGbr",
  "key4": "hyPkQPPYoqr6Dd6WcwuZDjB7zHAT9t3arMo776xtHwgr6sJbNoPetUK4Pjb1wcjvT9nzSXfYXu2KtpXZNee7fiz",
  "key5": "3aqbLtftWAtwZEKB7ZQRDzeB8z8CdgLUq4dJBVcAa1WgWupxhRZoSm6L1DvmmtqWjZeANi9bynPxyTv9LafvQaei",
  "key6": "KJoA1zgVet539VrDUVVZt6PWGwrP5AiPnj9mUSLhhoxqcdSmYz4w46bgSqFn6bfqaMrNTKn99J13B1xwUnPcHBz",
  "key7": "2ZLWXmq3u3e53HvRfFKUNnYMcg8Wo9Fd1m1ftoJcJyHXah4qq4Pb3R91pgSfQPAuZHdJ8KK4zvWovTpM4ymeu1GC",
  "key8": "5E2bAckybsuPzJmMeyEGKy2nhD9LEkWDowVVeU5aUA5Xu771dqUFotNr1fb6bdtYXe6QnDSwjPbcMMJaD7yStcM1",
  "key9": "LY3b7gCzLpMwPBHjnYXqQGTpgxnztUAzEm8e8qniFrMZXbnvaTximBdGbz8KBsoLXLiNt3MMMY992BA4qLf1EHH",
  "key10": "4sbYcJFUmh2uFXrGK6XConfnUcZWE8N7jSf3b2XNJf2j5rkgZtv84SG6Q5gha5SghJc4FSRkRv2AkgTPaoWE3QzZ",
  "key11": "5shjmqnikNramVsdxoDymw34RLGt95bcPgZKGwAJp9vJpHkWYGUc9YZh3qngwjfQda1DCNzKYeym4n5XBC6qazo",
  "key12": "5mSrQaWZB2CzLUNQaw4jSVonEQaUc2DW5F2n19fSawxKDcfh8GMdS5zzZP7CHz6BCBY69Vs4611UQG99G2tjTDao",
  "key13": "MkMvELBiFyq4vjqwyrToPexvxCfgg4HRSVQxTiCNUcArt5m2ZUWTDgPsYz9A2kKUT12Gi8Y5ncwguuWJLYtu5gK",
  "key14": "5fXiQCw8xuENMztbRk2VaBbh4de3XcVQo4Yczy8NWgbbRLPShjNxGdLcvgRwp2iJSxoKrk41VCa9CWH2KhnTXPmR",
  "key15": "5fwV5dMFHCbcftv48URkndeqa2b28QqUP4nN1FaTLMvtXLUGsLoMEALrJBZsNu56QEwu8m7iCxYoWqaEa37L2smM",
  "key16": "4v45BT7zUTH7cXUnhEprN5XKHY2zaS9H1entrcAstoo6hfKRgt4xwHq7vqyGivH786d6YTiuMgDJwruiC4AV9Sjw",
  "key17": "1rybj7LbruQmMcQaFrrsvokamwvnceyTuRfiS7FZpYUNwqyx6d5QXfKHdwdNMx8M5ANet8XurapzpdHVMCJ5Fc7",
  "key18": "3xuDmRk5ipaCbZ7rUQojp9WCEiJcnS4HSJHoaiANdPrHU5c7B8TwmZ8zn8UAhkSvKBhQKqdMwVcA7mYEa4pXTRDJ",
  "key19": "3txuhL9SuNz4KgwyiXpHVVa13F1MKX61j1K1DH5GxVTwB3NVM4ZWz4AmZzgfzkq52jGKLGQCcMfkV8AqEn14RCrM",
  "key20": "zqSD5q3RCwoTaR9bhuUPrwbaoU4Tr2cMHgUYL4RuvWFSPRgD858Ln7MAFZfM4aaSUVuv6iwv28gDXaGgAu1tBvv",
  "key21": "STHUMQdk43MUBL66dJ4hpQR3zziNLBVqywgZ1NoJ3yeAXER6dfBCRds4shvSqvoLxqBHaLPpAiEm5EvTxLprv69",
  "key22": "7Wsq25F4jfpdkqohFxnJiS8f19HgjVzJvogV2MrLHYYiBqRM6GsMMAhGQk7wt5DaHKnoMdovSdMxJkxrjsQdTe3",
  "key23": "4VBKh9zqKBWnoRbqYVzZ8iz8t3Cq2TbhuVYbjRVC73Gs9UTjAG7SQRG2R4mQ3ENTXD2q9VgFwUegY1mG5ELjdD9H",
  "key24": "3NExdXF9zHyPdXRgWyakCiHkuqBXXb7EdQ8zJC3b1ACGWSRdfxpqzpMzo262iQ5m64HiUNV3JpZ8SwDo6FACER5U",
  "key25": "B4YuGcxRgf6ZYASutUH3QpTm5Q3ekHfKiNcJYyfK47imRpaB2UJyEYEn4VjCEVdqZc1qcVbMVMdC8sysdxPLpvt",
  "key26": "v5LxbbVeassR9HAu3NqScwNYezKUktwJ9MdKN7izYEUcdhnt4Tm1QkBsPPa3qXDtDTiFsVb1h8D6H6HQre67iJK"
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
