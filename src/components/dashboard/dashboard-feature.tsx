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
    "67K81dBmaNBF3if8Ye7yxrSJruarSwYpVea7hGo6WUhBod9oX9TZnDm9PWTMYSTJrgvdoB4zrQbXBDc5KczE86dZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XFBzzEckxDyFdCRLRxNc9CmGeGTRWMoJVHipmS1oJufR7QPJiaoivFLgzEup7qsSFcyPm2UR7i3eEAAMzZtE632",
  "key1": "24XiHTn4KvfJZFCLmHVADe5sKqvPofh6tYta6cCBMv1YCcwmqSU7G8Xnnv2g6ShQCA4DfBDUoNm6EhCYnb9yveiU",
  "key2": "53KCnywePpbiaHygZvHH9KA99Y5ephWzN1WVb3gDPZYxanxQdiawtit8ZmWwbnKGcavm5oEGN9r2zmuehFoejPc9",
  "key3": "2BL9NqqxkQdJfUVzETk3srVTSe2nHNQCgWPzYbrX4NbrPKpenpEneoSdmY6V1qhBPxybhqJBLrrE8H2KsUw6oZsD",
  "key4": "2EzwjmtsvFxdngAHjvgY7UD5SHYPtfutAGgb1GgDw6zz865C9W932fWXcyDRZcBKi6HcaAj8BvQYMz9ZGbyNSvMV",
  "key5": "PZU4jKECPBbF4n9nFemGZYw4iJfNKp8uYdwShiYqLqoUxWDDrx4sox3BMwz7CTomHcjiDSkqz6wg7WCnjWwuhSc",
  "key6": "5bUbVFjZ2izSEGQXnUxm9WkkUd3osf8kfrE4hDLJg5JmoAupqz43V2YCqgBB3nEN5LVHzMkdqgbvSWbjiDMzFvas",
  "key7": "2nyTxpphyZ3zFjsRGFGHKKnYvtxjf7HFbrgmWXCXUrqJhiD6Ksadg6Nthb5LDNBo1vKUFyBXYzowjNCCDKHTMaL6",
  "key8": "3CW7kYtnZQ2TrnhN95LYfpXmyApToEo9rE5MTgVPDojRFWcgnmgRQ8wX5eaSxF8RgBCjXi961jWDRWqXoZsDqLM2",
  "key9": "5QwuCZ3xWvunJVNgKE97zXHbxUVWnn1aWvffKdXGFce17rXqUMcfaJuEXTbkgZsqRaU3KcHxh1boK7DagvfmwMYb",
  "key10": "2QAfnzA8Kvo4Tu7mjzeGRygSW5MG9kAo1tv1gJcBTTbUqKLKFCFyXVGwEuTwJ3wQGHYHNy1hRb1QaWfwg9DykSCq",
  "key11": "2NjA7Mdwxus8UwbAKW7Zg2NDQkMK5mkHnCnkJufqPpApwiWBoheTMDYzCkCWXhiPZKTHMPb5QLmRCJ4WzgnpzgLY",
  "key12": "3tfkPw961iSg5Fya5r9ndnKYiR9efPBGp44iQ1dMMuL1u7KNdwbYuPimL5UoRNjJyi6QRz6c7BGcGG2NCENHv6w7",
  "key13": "4ZutUBGsMXGopUpuqeEUg4SbkC8abxmwXkNJeKeKPb4FNUmfMyFzzShaxaqvu6HLxZs9oae33DCWeW3kmaPrMf4X",
  "key14": "AxwJ4MfR9qWQm2kFh2yYeYTA18QJKFY4iSNSc3FiSYunzTQ1dPaPq7TzBW8DrcFG7fPntBekBqozSV91LCrSjZx",
  "key15": "4QDrFvxEHhpAmHqvHiHS1bon42J5u2QL7LTA9i4DhEY6okRX4muR7yrtfVdB2frrSJS5MsA5XX28p9uwMQFqXm45",
  "key16": "5rmXRUZC69v4FKWZWoGWeaP2iJHBgQYjo9N8HBZeCPnDFCaZ4XN4mmpzPZY5RkZaxXKNj1X3qLEfwWDa9AdBoGBU",
  "key17": "4fukGE7j2sVYpHMeUexRsZ7P59cwq6CHTxcTaCWZCoGRwus7azCeUMfqnk7oNvXJ6zHco1GomMJyaRATSKhpbFxC",
  "key18": "2VE74oj3FSzh2b36S4T35zVuUAKWxVALnmsWExZT6GnPQZ2NXUSfQYvqYMAfR7jDVymPKCLJhs9WzjSiHBxWMyiP",
  "key19": "4Stx5Wi6rT8HhvjJPCeejHZsJxYffbMgmHo1oGZSgrXK1oJZ1kAiP6ggqCpjD4ssycj9WNPH1Ksz64rBW3MrTiAq",
  "key20": "663gM8T3fsQNRy7aMTcS7QPUsRe8rKqm25NKuNukR9zN3DrBsGhQNYKNQUyhmU8HDKErH94GYThGA3EFTBzpVe2z",
  "key21": "3p4PJJTbVTnfe72Cck71CdhARj5qxyfgjHJBnjgcqE2n47CbFbWyKSuTYLbJYKarpGHSFBLjJeo3N7SYLTB3Qiz2",
  "key22": "2TiNQtrP99y62Z921rFNtUCLXak16EJcPaqhLvhC6cujWwPchztBf8dNThdxaJhYP4YR7Msw4t9cXVeHCG623LYZ",
  "key23": "7w9A9FYe93yptrfCEY1ZyfENsLk52CS3oRWyq3hVG6VqkdVzaBzRptMPAZD5gasSsu1oUD1LmDe3G1452oXTbsT",
  "key24": "1oi5Ln1rGAmQ799iGUYAep4PuaRQQuqQcn2pd464ULH5zHbsRYLbDbYk2EtsbPMqizNCWr492jcB6Wr42vQ3G2H",
  "key25": "4fT4rY9FkLjGeWTvnfMSVx22Ss7MNHxwyNw3sj65Mq8myL6x62JV9Kwj1XVeo8AQqqamYinTXTWCrHjyMBLkxz9z",
  "key26": "5GNr8MnHxFSD91XCQqpmjopmtoTbfBmHDYT9Jf3yjo9qy6KUP8kRKpJNEmyyrHPj7TaJpv8nEZAwvUApdMfWuCGg",
  "key27": "2Bc9FSyfVL3DPz1op9vHTj7rppgWLg3iE95kcnDiSbNpv8sYhC1r3tuFsVww52HSvDc3eW1XbqFaeqEftgNsbatX"
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
