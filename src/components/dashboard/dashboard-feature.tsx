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
    "5t5z8PWKxVYFKfQwNucw1oZJevgCnaaNvk98m49bWddRb7jZU1x9mTzQts4eeUoJi2qgTd9SL2Qk4G65ksziERrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ysffr4mYKRNbY4MDSrYhftXMcaPJbVXu1xKngpCJiMsr4D4D6GRhBbF3XkTCJrPUKHpHPCGKiyC5PoRFQs58ep1",
  "key1": "4yupeFCFgrUMUQ7jAfPcZa6fWoYeCxVKcMxhXypdgL81GvZC5eCrfLDfQv8Af3wzoF58P7xM2K3YVof7GMCtVYRr",
  "key2": "wGGwEQa9PCz5h4A9FG64Dn6CLFNjJjYqNmKwzPxrUFznwSKw6mboZXAz3gjcoxT52GuVNv3yN5h46ChrRBirxxp",
  "key3": "5zUiFfZMMyvs4xfNJseWtzom56KrPaqntX1DgwJMvvf43i6BEwYZCcBDMQkpMvXngcrhMTf3VZqzcMwV1Ube5aW5",
  "key4": "4UEkUy3yRFtw5jUWBtJWpKoWezrJcmiSK98iQWpwyHZ8DsY5zGJYzoSw4dUMyz6eciYCQ6BAGVfGgDCZSpPCQzuM",
  "key5": "9EezzVQCSqmJijdmENgcWqTHDRGVPK8MMgA5dkFQ8mMsnEjUq9VYEHkV4AesEpuDAiY9nDKqu8F6ucwrPcwkHcS",
  "key6": "3LmqQkAqX1eCR5L3Kr8wcfCHNMNPfdDmMedXUaWJrrHUCk2LG3uoJx7FC9s1Not5ftDuCzyLQ6fAZQG98fsvkkmr",
  "key7": "HA7MU3c7UjiJrhCKpaiDse3FGGULrSYyWL8LvWfnMFPcxmF7oa7DZoEa4sDpcJrGNuJroQ6zoLRTLdSb2QtbiZX",
  "key8": "3TFB94YrscvvUXZQEk8W8VA45359nfJ6xx73Rc4oYzV2gmS8fXZbvaDDuBeZKpQkbqZSKewUnRAWr7r3E3bjPyke",
  "key9": "2JgzoJuLQ24GXX8rA7s1kK8tAgZ4mzYQTwKZgMWgz2jSKJuG8o3kST5n8YnJkpzchEH29WkYGcLRmF52Nf2s1W2C",
  "key10": "2FijESMpX2stKMhhoRrBCdAJ11Lht7bk6sLCnNVexuPbASMBcokV1DRSKdLZAA4LEqUMisCHoNVhD4GmfqV4PvF4",
  "key11": "54gsMt3WaqLDaPNS2SZvNEk3PWpEYRBuP3JjiyqgbBznYq7tGFWqwxyEhMshYKfxqrCU8SeUQPoJnS8x8c2WLQay",
  "key12": "5KzrpjNPaYNjTtHCMMQEXUcbvBd4G1asAnNuC5De8CoCLumg2qQiayfBcNqRJUvruaADo7siZWzMNoeKsAhbbCiM",
  "key13": "5BgcS1ao4Nc136j22LvRaQzQdckRnRSnaGeMmWp5gsGqnVtpH4dQpZ3P1PF7v6oK9ep4ibJc72RRkyzRBh5PehYj",
  "key14": "5Y51LLPceu3tTTtuZuKTUjRJTpXw3siSteBxwaFmu7UaC95DpBLAb1MGfVW4Q3dfovczbDCuc7dftU7Fjgqccdk9",
  "key15": "2VbzaQaj6koj8CFG4tUXkFAEk5V9HWSpfvPuirBx6WyURgxTM7fwci6fjrph4tX1DYYTP9SH9AKdSDkDdwvrDq4d",
  "key16": "2gHmWH8WqgjV23w2suT1STsdG2L56dRksHdnD33dooeoc9WvGUVS51V6Xbtb6QVnf5toQbHk3GbndyT2XhsHYhUg",
  "key17": "5PMniv2hfhDS5RitAKkQKxFbUYjgzRFa1wYwKaqKMHMULxvRYcMdwsXoF52TNFfT5jMkmNihqizoghqcdFEv4Wqd",
  "key18": "3hJSRRs9oa91k5YgsFvwJypf9ymjD6oAZmuowQ6moAE3ZLyYSdS9TAPYMjaX9xErWk5jpHY5moBALVSA3oCa52HR",
  "key19": "4og5m7skRfwSqwNJTeBwQwAUsQqG9g6WR9kYzc4A7DMAanYHUEzDwj8FHuZMFf2jCBKK51ZUsYPCKgLrrbgHP8kx",
  "key20": "4JWJKS4yTMkzdgPNCRPW5opfpGhLiGrWPFNzGvuYXUXw9LFg243vW3uxH772pA41vaqdfkgciEy8RazCYD3StmUL",
  "key21": "e5BssqHmtp9QbB2ScFsNosJxTi3AyiimsuJT2BMtcCtw3nWjsEBXrFVPz9J1eLxbwmUaiyb5mqPoZmvMHGsiCGm",
  "key22": "2Jqep3HRpSRRJSBudsZYdB4aRb87Q6sSiW62Bei5F3X6fgn2iVSJSqWuozgFBnGEgpyUZW9Csj5VL6fjb4aRFKBH",
  "key23": "RUqVMQZFQgAqaaCvuYHjxtkMVm9HsiNFoGpdN3C7Q1E5tSSp9C64Gj6KEXktH8XAs7g8XmM3Yq8MgYJefER3tXf",
  "key24": "62BeJWUcyrhKAGvP6D9ogTggJjPxCJbLimQv4MjS3ZcZ1naqDKSFnnL7gzp9RSjahvPMxWD8J65vUWNorUKS7qC7",
  "key25": "3EppQ4y4oqTyPRvKSPipkKae41e84VmURJgkdm9BneQiBnCfDwejgAU98UZrCS1t6NnH2TY1qGuF2LqukScqzv5T",
  "key26": "5EtCg5KfoKKTjhUdqsmA7m2mtcTEHXjdaaoXZCdGUUwimibvKPQCDCmWHbefwVWMz1DAdn94rnXbjiuS3Vogh1sA"
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
