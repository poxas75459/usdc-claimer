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
    "37avQraSbSkZRmTwDiPEn1suAZGMRQThFFemPEgPRLBbjgQuA6yQS29kcmNcfbYqn447wBd16pXX9Kf7BzE5tBQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSNFxLzNCbDc34KBFbJcAPL84zDVpq8FNiE27dsyQTNk6mVoYudkiPuoLXR6PkpgLKowpA3htkEWvjJJc7r4X6L",
  "key1": "2NP4t8exG38aaTmP5zBEZri2e64UUJyESNFiTzDneHxHufpfsaV7c9d1riKriP8p8J5XJwCJfSLP4N3cYPrR3Fr3",
  "key2": "uq9R1mzsj4VhxsVtAh8GfUBXrZppGHB2MTYtf76a8GAnjdu6L3hZ7s3YRoE5XemyEtr3xULN2dGKLWcBqoaPkq8",
  "key3": "jdZzpzSvHRNQN3YdTUjC12VDsGWjpbz33A963uQkKvVVAhiQy2AcjN9etgfLxXTKkQA5sAXPddvdpVP35nuqhDG",
  "key4": "4X9szbHD4WhVsUgYGTdjHsbUf2UZBJEEmCkqTLuVL2BAsUjPft2cw4975N4nTQMBxT6d38sutbfec6x3e4MFULpj",
  "key5": "y35XEzqAb2U6rtrWJGSCocGBvE194eQuBWiBczrBWZ72G1NdBTdJD3jBSeULcgKLESYLXtmaYKpxohLHcbrtjvY",
  "key6": "fZcpw528g98E1AJL6eWcTcp5cReh3f3qyrr9C9SeU4NwW4YtVHScsf4wPVKBLWRwBkwPD5UFDSL8PkNpYTz1P5Z",
  "key7": "5Akn1rmsbxsU1vJTyrSK573tKi9eoKEJkWJ9YK51NoGAEarixG92BqG1JEysabtNhw4gzHcbwDJ8e51nVx9eW1a2",
  "key8": "2QhKbC9EZsHJgZTrv16bYZPLbAZdPww4YH1hs2suLVvAPVq4K8AwgiACZPduhYe71ak29GqJ6iKeDKFEKb54ntke",
  "key9": "3qa3KeSTizHT6rYBYDnWZq5REtufVGyXpkspqwAwnGRZ9UMT3Y2zgvHeyqX3fLEpmVogufUN5wth6sw485wVcGaw",
  "key10": "3sLJBPrSGbyqaBhJE1va6LWDmsWHpJMDVcNsGSG9sAAgwDN8JnbhYe5YdzuYXbgUraQs5sZLJ8ZYDMi8Xx8CTmod",
  "key11": "2hfwSeqpKUF4tcGHwmLCXcZH5BpsffMQq8iTk2yvjci5WkRoEQuiT32u3KhLsAfScfeYtHveYsvXmq8EuG6cmsWv",
  "key12": "596qGYuPZCHueLUGQfiTrHUfjEfzPKzVD4peNavR5Bq6hY87dMG1ECxoHE2K8r9iKGaCKhE8LaLyfJY4BtESZjsZ",
  "key13": "2GWxziCLgEVtVTssTCkSjNWK6fFdQaSF113QF5nhEJ9ZB6Ge4op4W6iHUy3bJnbKZdyTc8qUQNfc2xooUHpLgLEq",
  "key14": "3DCAUqLA559RmBFwmJU628XKqbPmSmGcQ8mPgJgojKiT1igG4ERupwiuvHv1MUW9QC8yEjUc4jjFMJvVwMeYyqTE",
  "key15": "3UYy6c7nxWutY4r7n2iD1zPHRA2gTerewkzrrVtAW6177zpvfJMR932HYQNSjHSe1jp8EjJiTdcaUwtGkimku8B4",
  "key16": "2fKGK3hcZVeghgMJB2BUyTfaeSXfL3h1kS2bi6TQprKAwtNqj349h7vAeeGjMYdcCVVU5vfSPMdBBWLJpoEeppjv",
  "key17": "43bxendRpSD3eRXWoWYMXKCReiCXJHwtvRrUJzQvDuBW4fvnioHBc9vLiWhw4qG4aLiPjzWWPMmcRb81karVLJWn",
  "key18": "XpnfjHV36s8dyyExN3orK1FwEAqnZQGJXkL1sbykggrQcJnG16Wu5kqjKnGXoWvqY2ERhNm59FwFbYBXnV6E94E",
  "key19": "4qsSr5Q3KQ5tGxtjb5yEvrzN4yeyu3xuFP2A5LuxEEmPVrm3VTUW1m7qYgvcUs9r92u4eAm1us4AvPyz1bfNWd3Y",
  "key20": "2PZmhJV3SPULDhPCjNvENfME7qGAKP9Lj1t5cML3FbkHSdmQzgadiVjPFUiXm1BD8pP5pFHZRpMQCncNx1gBXQy3",
  "key21": "2Fsnx9ur1AfjdLNiuHQBM8dHnpNQzi4YPSr6hDBptQv4Dppfg5YHjNe3gsjjsmzzprNavA6wz75AtbYqy3ZqSwrZ",
  "key22": "2nendfCBvQB6DyqrJNdA9MCEJF3xGXLxqdn1UVgxiXTo2QaYCkmKoVMkcviFSL3Xf6eNW5E7bgWwGCGFpcQqgLTc",
  "key23": "2DDFor528kEwPFNRYtWd8gbKkNEjU6wPUYza4kQ83wBMU9exk5WDeWy9CarhmHfJ8UVJBJ8jLXSGpKbSN3Uhtqwu",
  "key24": "3YYTfR4bDwGzRDwjcShCtmsZC2BxicaQyijd6EGgSYBTLNeog47p1MkLpDoXNXHwuWkJE7t5eptct4HST4HBy6CZ",
  "key25": "59LKiNvo75XLmj5GcsmrEP7AyA8dzu38cVHBg2UAqAvG3hn9QgnWb6yQfPi9JQvm34q3Q6JuuXvGzZi2GdqjoA6P",
  "key26": "3RJsZKCx1NLRAyLGrYspsvR6gzVNYGoyPTwdxkmPu6PBwGrf4ArtxfDo6xKfwiGvKSazNXRCUMRvAovB2UuwtkUF",
  "key27": "2usnqK5PgDrpMxmDn5cFChYTnV79LPiTckDz3HTFhteJmobU5r7Jcs7Sw2jYvatoLMjeXpzqPikSdCSJj5h6cwbE",
  "key28": "5QhrZpoqZvPAuADjdpP5jqkvsWGJciHYCKVPTScSDJ78cFk9T7CqhTBPNHD86xurkdgfdnHWDc8A2gSmWbC7JV4A",
  "key29": "iCSmGaas1Guxusx3mthHrMqRaeG6gwR3ZjMCh42tGagnNwJMWhjvq91f5fTBKRtzXKMhJmqYzTWGYwJomhzTcKm",
  "key30": "59ygMZD7tM6VAjBqiJ5kAGkWr6d3ZQkvEPK7cPHz4oxTJKek2zDCitbAodBPw6g6oeEJ2YJcM859CPqhga5aLy64",
  "key31": "3jDxCeweS75Xdrt2J9d4rXCpftmPas1wnnj3ur8RnA2Bs5hhBKtqMWW8pENAbauwpE2rVJEU4fVPBYD4HjjaEC7J",
  "key32": "39sr9zfdf4DbfPxav245G5Z4AA2vTexkFxa1NtZxb2ngq1YwYUK7rHMEqH1SUQXjmVdzQsFqcZweN4W9HDrWHFGR"
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
