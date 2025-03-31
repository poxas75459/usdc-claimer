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
    "4fMk93bujQ8Yx4UbLgt9RHVuKDq6XqqMG57CPuSz9huR2HtEuKjT8EmL4mt5dEcKb6VT7AqMeM3edAePuM9KvfKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQcLuZ3ZiSyDMawRRkck1y7yTzuBmbQcuGP3592jo5u4SwrXeySZrHwMhGYELiK2UzBJhTT9Wjcbjfu1QrHGEnu",
  "key1": "54ygGDeSmTgtyzyZiiPeb6Guj4MUFeL4LDvMEiwi5xGQj5JuoPbyuP6fS1TZtA9z2ZvorhsSpB7TUjvhwf89pPRq",
  "key2": "4CNpJFUYwULrvJmVZHcjoKbyWpsrcSQWiQQV2ZyuN2tdftYmW6b6FaKdUkhgh7oHLiBTH5KUJhmjuzWf6KKaXKw9",
  "key3": "5Sy2bFQFmzYKQv8uMfdLUoAjWHDb2r13QRAMHJtxY2yXRbHTSCxcf9iASHgYCDUqQAqKNam86TTbRvdeQ5riqiAp",
  "key4": "3hoC5dm2mCZzxNsKAhpqSMWHL2FwazZYaFVUUmuaBGPqEdji74Ysjc9voFTR2iUkNCmYL2JWLWeZ5NbWsVCWq1jc",
  "key5": "3VtnPNZb3U59JPbATRbNLUvxRz8DQHcadv4jy58rCcnRMR5QPnP7WyfRUDJPfQpH3hYnzQU14Q43jCTZEAdy4JwX",
  "key6": "4v6ucvRy9k3vYb4wmkLCCJgJgJx6WUh849W4QtobZb2NfzGebmkfcz5cDsYYwRqzZ82p72b1T2gWPiofARQuN8oB",
  "key7": "5Mv5pthECqaawgMGTbUcEPbhQvWWvQMTtQtJtXBugZHf3Fex1J9UKW3L4refcjwMWTxydq8so2SYrMB9mojvYz14",
  "key8": "5hvxoxU21UKq46kw7b5tbwCtP31GR6g9chA7VvZU3h9bWewKELKNHBzdWQH1VPEhkgw7PYqpzR1YFYW74N6TxUTg",
  "key9": "2DAapP67fmMDGJmMXKakPoFfzkRQy85DJMKZgfnhqin8x5VidciwZSW8KM2ENiiAkayVgH66DSgTvqdfWxYaL2fv",
  "key10": "4vagXiiW8L5MeFUafiwqMuohUKT9pzPvAVEbR8FyiFJwBepdygcKzkmMyQUypav5nYT2RHvuRDL99MYjqKcttH5o",
  "key11": "SrUscmH8di5s1VV4KrxQoiYTZ2QgcuqoiMqo9QgdjTDbcJg2e7QELtFPEiBzuU2TL1jXWG5suLLVE6rjnkYEEmN",
  "key12": "5we8f3L9jbhPDGwrpLHDUxttjPQB3TujT8Pao2m47kuz4aYcdv2V5gdqFZ8UZ1ewyLnE79iszo45PTE9YiCqLXW",
  "key13": "4XJzizmSfZ8saMGc9aHV4pufzHjyxnGhUE8SZcpVqt33bHK79kiuPKnCiLBuHGNFXsrgD1tWF2CjZMiZmNcraQex",
  "key14": "4h1LakYwRHZB7gRmUR5jnwdNM2u4XhTDWw9w6wFnP86NF7hwfRFgjh7xSowKx5AeYsiYkeNKtzUhTNp6CWu6nuyW",
  "key15": "HonCAskMZJHibMqdQyocMiXBBS2exuwkJ5y5hQtaNaduzqLJ1SD8nonGxWop7E3p527MaRRs3C4CZWW3pSU1tSV",
  "key16": "3mszQXYtpoqQ8zj4cU3fQ2P964D4YsS4LdhsxhnYYm8Ns8kbsuNGPNNARqK8jN4Tx9sjLkcL8zN8ASV2bqNhwxtD",
  "key17": "3rQsEq5ZdJs8qnDkkHV3LG2PHRpM2aH7CduXTogYt6Zxf1bkZkpTLjkBaAUVoZLJu1F21LqVcbBJqMXNhUJ9JENZ",
  "key18": "4XkXz1j1FwP9GoQqRdW67bHTNySNgY54WSoMNrue8Zq6QcPrkeWPuXSGjUeXZQMz2gPrZXCwwt7PRmXZgAu1K725",
  "key19": "4s5a9AAbFYUPg6irxFnJ8sNQwVSdXdm4NBzdATJX7QVpWcg1nVC4yQpkAupwrh43H2YyqXNEei1spuBUow6iuWPC",
  "key20": "3JkqFGQ9znytxnjYDoko8RAYZB2f3cCcP4ixYAJv2L2qgWFmirjoJ2UAnHM8b1nhZYvLFJA31rSCLJ8EJ9bC92g9",
  "key21": "5Mwwonw8Ts2ch2ZVCu9xuG6KdgzQy5VEn4wuEQ5nmnV79PT5xx8eA7kTPsB24joEqLujw9PezpnUbo3ge45L3Yfm",
  "key22": "4e6KgZ84GFcVkTjc1AzVk7xy59D2zeSwiwNyzSUV1CpKvFH7drwcJfEdtzpkd9Roz23hTdW7nAYxKpbJMZamgisx",
  "key23": "4d7xk9UHTZeYZdtKKkaHAJQx3To5h5VkwTY2FKXjdKPm9XPaLYodXzZei4wGyQEyBiH635PsMBNp3bzeiS3A53oA",
  "key24": "4hjzQqYP4jTehTAZZJEvKvGNQYAtM2CikpFFDrA5re2gMVhtUECMtNjGKRvtKUMzbvGmwRt84i6a5esj1UgSs13v",
  "key25": "3RPeKYfYXriMkLLg3J2eCzMEqcFuaYQRmjbFyrpTrBebusRS4na6Ne3TV6H3NAYYxJZ6smiyKQdtaYUhGZcWfqsq",
  "key26": "5R4U81xFgcwym9sQgbXB84h23zfTzSwzwQLdYqK95y1RK6L8qKh36cEF6vP8xFfQafzYYuPE5sFemsuw5cQS7yEZ",
  "key27": "2SokYF3UneZ6BsL7S3h2bphi6RNAeDh7xhzh3TC3N4kVcmGu4dvn9VRzy6Vj2jB7rHsSXQ3oouj6rW5NZhFA9K7h",
  "key28": "5hkoD2prPvB7Pk6ZCGoEnk6EvTy2NL6MzJDgnfgV4W3nYWdL3nVeqEeDmp8nejrSkxfsWTms5jzFYX1NVSMoPPf1"
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
