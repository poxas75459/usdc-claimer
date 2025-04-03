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
    "4Ha3hgCcUr9Jme7Qgd1VKAnxHeMyJhMVWCtibKXcXbFNzgKN61tw5EhJGhqrNmvhKD9frsaAAdkH2iRczesCTnME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27LJUUCYV2SjwGUfqEH9dpuNifsDM4qzYgHPdeqD5F5MB1pT8VAx5qLJeiW3pAFpN27UHps1eaRxgHmVejnjLNBp",
  "key1": "3faL52KuZx6VLCfJmaGbknrZhyyX44RdVQDSYaGsd1CfLJe3YwrreRZfgmRXsd4Tj9E7q1Lt4kBq3TMrihm3f1WZ",
  "key2": "5ZFmLZLX4G3hLYsUXwDayozBvqnJVy6EUBCLjGMnXr79RmrDxv7NwBeh5pBmUknsJWFoiMmmfX9Zf3L6Jqg26UKw",
  "key3": "v1Tzt4mzJ96VFsbth98ujJeHFbrYAm6TJRqWUBE1CAPB9hE8oE9sKRFsUpTS6kH5qFWf6G61NhiLFqKhCnxgYV5",
  "key4": "5WxErUBpBPnL6GFNw6ZG2v5f4LF81dpGmqF8R21mFMiR4dD7fbpNa17njXQJrS7Gt2tzw8Mgs1vKhWQGeDn2dn1c",
  "key5": "3JmRX2v4wwwgt8isfLUnJkWnfTTfP3W8GdbchJAZ8QzjubbnUgTc3t9KPXTvX6gQqfTDTmmo8cCzMNyWjgMRPr91",
  "key6": "3LuafEgJoZhZX4SdGca7kEAjxLbugrm7oJLs56HNvduMu8bmvvsCo5Ar6jpc2D5qRxx9CzKfiRrrqC6821HCcFzt",
  "key7": "2vPhAtQiQPpo8pEKWGV9rFS9RUYB17b5Htqj15VcMoRg4Fr8JA19DTKBCrcbKuUU1LkKHWnB3CN5AmhCAtEPWWy",
  "key8": "3iTyb9U3kqoyfTi84yUTKT7aZx7pLkxK5YWDNpR9K3TEW8RXRi3aHvWQVApQkq3mEUP1JTF3XjpPHbsqiHpVXoCC",
  "key9": "3F8qfqkgS9MLVAF7YmmSzFDaQN7W13zmnHKXHxtFHx1uPhBEYsXW9MVZwKemy8ycEBJEY9PJb4EZQCWhQNrtJtMQ",
  "key10": "3hLt68VG1Pc3cbHQ2S8QSfuFz4tB7ZsAYLV6upJBpX48LmspNyvp8NBVFsYxFaGdCjyQV6VSyWMYRjoZ3FdDegCb",
  "key11": "qksPEu74oL3enHKYhs2bTXQW7m2QJvHA131xRKgJcx6df9NkN2jdJVc5tz9ZjbWUshvkQ3DtyjiXBZkMWNjZ2m1",
  "key12": "4V37JkmmGHpXSUSdqe4oZkKVvnQuVdKubrGMMAtBdPQYbV3qkk3EmVSoKAk9KiKuGgcCkjysyqCKViWwc39S2nGj",
  "key13": "5kUZcM8W6XUj6txuvzNTGLHW55vpNaa59koXgTZz1b9ct9USi2XWRxmqCiS2JG27b3tfeoeKd6i3YFHyodQpyvGb",
  "key14": "2uJcdDktbbGvweoLVbWyTSM9SAwvdhTXx5fvVvy4SBLQWLCQe7D53XoxGwgaZp1PcfZezdCAXa1fkMtymFB1PREi",
  "key15": "pSyfPAXk11s8ML3Laap7EhCjy3xWSyX27945ZULUQHrSUQoz71dTApDrcxVtvJAMeTdAFvHtGdzg8t4vFbuHVRG",
  "key16": "3Fxijru99MiFCxQi4PZyrAz9WFUcp7RkqF7XmLX9zArgTidtGGKXctuayKb5hYG8PuG3Q9ux7GZP9vJtoi1d6k6Q",
  "key17": "acKQ5PUN9uzbTj1kKM1aNgZ9ppqorsa9rFSPWr65ukQR2Lq5ESqyYJMwXyooLUdFABWEeNGBnkPhzss3P7kCW8r",
  "key18": "3xQNuFrgAKLonfGNYC5bESUNFJKKEJ5tdepKMeGEhpz5xbgvqf16LifEKgfi2qkaiqxHW66zrM2Hi9yYXj6S36Bq",
  "key19": "2kcHoeek6kBNx7YCsm1ntowkS4vKyjUMR8syh7JrcjBjvJymXvLYWjRUEzzr93CgzrLEmwdaDMtHPrLc46zcwetn",
  "key20": "5vPqV9uPeinmJNo88LsU2TT4MWtTCh8p411cBXiSbDdrM8715rW5JMyp5TA4JD1wJYKwNuYNnr8B7hT7bn4PQrmz",
  "key21": "DZWcztneqX9vEknkjCUqHg58K7jt6UtnGx1XyjNDZqWYA6eh2u2Vbkv2a9S7PYB9dvKToy1dPnPjd1A178fihyH",
  "key22": "2KwERbqAotsYZSdGhAiQXeZvy53Nz3Q27TGSZYfiDtyDDp5EytGTRYPCQ4EyYvUXZ89njZZY7evTXNfyHxLxMPw2",
  "key23": "3mF3fD6MTcYoUUZCMCPHCTHeCADwV6ovVuVABgUs6AJffU9XzrDNAPZiFRd7Kv9EHzE73hf6S4qBtdDHGsWNAU9M",
  "key24": "TPrJ7Mydka967Fm64nqFrj9zMs5cpAoBLd3W838YUGhcmjKgynqSaGYBAojQjVetbNmuDJpwoL8c3aw7EuE7MkR",
  "key25": "3nHDMCwFn91dJaWzD2E5dZmcfxdTGnhmjemnHiAy7MDMRPq933EZLGykEAWKK6tmhVryizNxgVY55NrjAmtjVK4F",
  "key26": "4npLuT1amXtqyrKrNFgwmxUkhBtWfHotKMuXmeTxc9TkHwrFYCtyLHwnodFdLFV519jCHue3K6CAJy19Rd34jbnQ",
  "key27": "32AHUnerkxv4hAXYmNVHwDsRAXYiwGxkYE6kLkt5zq5dnDqAztwjitboTwzZage3u5Sz2PipzU9NdVit2DPgWhXK",
  "key28": "qLXUuzSD8ssT3cPksxnmzNmgPj2vFtmxAM34TCCLoWQ7brXbonJ9GsBHabLtKze9jNafN9qGHu7eCs55wght5mF",
  "key29": "3sauidA5ya3jpxYzqX1uqNgHBTy9BYhZzEmQ2VR852nJLxeLfWUoaCgANgZjgCkxDYYR375RzhAekszVNRrsqmgB",
  "key30": "WHKgprxJqhQK5Z2GFPmUHuhjkzozWXtW9PEiyHne2MLKpeoJHnPVQ3NteszyVtXgFscrj8raMAaZpPjGN56R6si",
  "key31": "3eD2itwnscC2NQSGNd8eJVztRpPW5JEXy6mHTk6c6apaxKmCMMUjvJdnu8vxjwXFvwJgrL5kqUVwjKWYoxr1JvDx",
  "key32": "1xK3tJQvxwZUW3q5R2bk7UQceobpmATngEkVEJ24C4uMXbNaFmqMQpEU4XK4jSDvAUpxpD97H5R4Jgcgj2LdLyH",
  "key33": "3iuu4baU4ZypghHPrgb14cNo7Ay8CbWXu63hSKwXE2Yv1YY4AcJb2v4B3bESLAcSKkZM1SRZ5U7NndTvGnsf7EC8",
  "key34": "2faqG3Q76mx3M5RAiLUBBEwLjxSmb2KF4iaWXQE3n5AAikUwkWZjHzpAgoLskptP3LJJHAcsCpBy5xt44JB4REX3"
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
