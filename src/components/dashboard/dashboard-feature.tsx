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
    "2rWFHtAciuVVYJUFAWo82H1N8UvZ27oonTGwbFRQmvHXrVfqxHA6DLWGd7RwURN4NsEttnFNeNCV3DND2AmBkqnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEvRpp8KasAt2Ydj8WEvuaa2HtEd6YxWZ9ooAGwHU8ixszaJXZpCB87vduwjGcJcS6cQe8AEmTH7GktLvbUTTx8",
  "key1": "qb3orE86Qvc1Q9XHJz1nd1UANFmyVxQfjNMBwNnmXt7zner9HfC8jA5oR6um99fVLWQsrcLnN7obwrTfTeCdvXh",
  "key2": "5pTSLh6CSRWSEDTqBkAdJdQ4LWdhwEDuGbfrkanwKksoqeEN8cku5XmobucuvtYKU35aJ5GjAVPiXiXvoofaUnXT",
  "key3": "5x9nVchUdnWeQ2UqjNzoMHY1C6oqTTHY9rLhsYQ3Qqh354HvWbs1dxWUTNJ7jw3KjgktZ6c1bchEby4u2U2vH85T",
  "key4": "34Gss42rzEAzNufJuaR2W72YnJzRn5oqurSnP4VtXeDHp43uZGhsovgTJ2N8SHgW7oKduy1zdxM8xCYTx7pKHDGy",
  "key5": "tvJmz5bjySR7k7eXK8FHn4zwjmMasW5wxcnhsc781QdV5UwK2q99ok35vaZGq715LYXj1RAcnmBXLFpCE6xtmni",
  "key6": "5GzYaScjzz8G5TF8PThAjL7y2ByHkybqsForTr7YRkEkiWz1hitG9gLRVE6Yu6tcDvY6KtmYBydEgCYDXWVnLJLM",
  "key7": "2EucB5NMb64MX3fDkLf9RFwFjpTBDd5k96EfBdisR7D9NsxmGE5w7PDTMqs6k85obAV5gCAyXf1LgVTM2TtdgmkP",
  "key8": "3BxcjKi55stBw81M3xJ3DXhshjfHkKYnp9rSoQpJtD1DnKmF1oQAEPDKJGA3CVuYeR5TMEMhenhHL1vLbb1FRHod",
  "key9": "3joy8xxZeixA7C3gJucmChtsrveM9NmA5ss8bsWNRESTgSnGAAUmXNx6eqDXVbTeFywU1Di3h2iWLENK8uEsQYig",
  "key10": "jhLrPeEamnhDGJE66MxP1sKReyYC7ukTGCuxmwFTmQ7Fw2EMDcdXGbqGAG2VEG3dRjnucgt6MnXdLfdruYE6x1A",
  "key11": "3cm3uztRTT2M7rYSqW4vbBL9EYZxTDe8dxxxKLT89yjvEDzRdEbMERk6JjQJ3S4wQyxxYbMdDoJRak8n2h61BVHj",
  "key12": "5ASLKJupBsGGcRHTyvoDZCePFm5myY6NKDDkuXG9qs4YmYwzurQgpoUtNPrByUGjNqxp4tE9gVA4oeUkFt1PTso5",
  "key13": "5EpKiKKJt3UCAQnErvxp9HfozBUAGUbQ2U9EdsFV1aA7W71vvni6HAZjzRNjFetfUs82JRzdeUc5bRe24qxabNNi",
  "key14": "5W7qgTGksKun6QVV1VtQsbF8M9BNKxaCGeBxshxy8QKpvYiV7rt72DQrx89BR8SohBdKjzUc1bgo97b7HJmpuJMP",
  "key15": "49dDdZGtxRNGLNGTC7GZBNTkwmHZUYC8NxTuRdaxZho7nZswRw6HoXwGBhVqKPVMJrAkQQMgU4hCxMsumAznCoda",
  "key16": "22s5LGBcYutV78mBYQyaaFh1veRTy4i9my92ji9kGxb7m5UWrBevQbodz1QKhnv6Rgq1b4xSbQj9a26Rujiy9DvU",
  "key17": "4QMkduLESRJPP5RZ8myq63YT8hsRmRsAAVaaEjpgFPtxUwgneQTh4JcTDSwrctgAX9YxH9BzJrDC9F5EiNVeymtT",
  "key18": "385q9mXx6rtWdh6SogPYTKvNVkqycsFUbF6iMEcgUpNRa5hxU7j7fYJNFSZughRwqNMq7ufFgxCp337ZgJ5Eo4Xg",
  "key19": "2h9XoMRUQ429zPqe8GCm4127TYZm1AK41DssWsfdnLCYyWL5j3VHu7PogZXPsN5ubaBkQi5dWPgHehfHfmYyeTXC",
  "key20": "3zgehvUnVN9wymmxgEa3qE2VgDE6aLwHD2KZrjqLGM6eeW9w3KLdN4LSZSq8oNuRywaEMJHYBvJdgwgVrpAix9fS",
  "key21": "oB1ibJJ5hENqaZgUTNzvpYi6XvHeK3c4TWLC4Exxxoxsq1NACAg7KfyLCooaERW3Et8QUCpu4hQpBJmLhL7dyu8",
  "key22": "5swZhbbq1KLrz5jziZuu41ktEG78JShaoVWC6qiW8vrZKu4iV8kRwH4PRs8Vmbuc9kD8T75BukEdUmrnAeSpL3o9",
  "key23": "4KXwAn67cffmvB8J5eLTnDMXWquci2ZrrrC3W6oZPWV8YDnhm2fjpyZMQM7ZzZttRVbNJjSamJHrJ6mq486GLfes",
  "key24": "2Z3fXWozrEbehQCMatrNyhGjKzo2vTXcoM9naUKroNm66sxUs4a3Qhp882vEyABeZQZ4d69nkhJwbyD1AUnN5hBB",
  "key25": "5Wj75MHi4PDmC2KDAtNZWd9jGGX4xSi6b16ccV7wtcMBmCYPS6GfFtUjEC8oQ7k1nf7YsuqbJF8GsmhJMYy6Btge",
  "key26": "5JhV3QsyKju93cmFFQLyMt2zUFmzvy9mdLFxVZHJ6gzBPRq64JbZyuqqVz6jbyqRGVpSn6ZmY9YqTmoZ193DjmfV",
  "key27": "2f7tyMRqnySEgmajXzFzYnG6Do9Tvr8s6R8sS2RjMDMJ5pHCgFZfhQuXfYfpd6BedAJvPundR4uU2i7TeELrzHJz",
  "key28": "No1hqiYM7Ahm65Fjs56wBaf1WyS49ZAtd5TMKV5QXvL95FPWauBnBuerB7r5EDLKtbNzC1bedgZUCjuDN4Udp5A",
  "key29": "2tJpvKA1fb6EWGeDWJnFohAy5hnFunYb7dKXJdHoButwUDHxraSgWYB7iD51Zutat3DTq8aLawvsiK6B9tNcyFmV",
  "key30": "525T4JGgtvxiNZ8F2MQDyNFvB21FAGtfJdmLaAxab8x4GK6bi5ecw61bxjVKH3mcFAuaM5QRz63nQhRf8WzXNZ88",
  "key31": "4TG9HjRACVRw8r8tMe7GoKjY11Hvb52eZFYHCsxgr8DMZ2pcR4c1ezfKnj4Tni5Wg2NXEWf3kErdw4zMURMfpFkF",
  "key32": "2kcAZnBmAjpQuFM3F63V12u7tkHXjiV8SRQe4q8AXhU6a9kumnRJaq75wU8kpLw5iyCADF9htAzF7x2L1fE1JmH8",
  "key33": "pvbuHhKo6KmFsVg4DNfSaihjBX54g4wZqEVyaycVLBRhfvLEPpZmPLqV6tX1zRQWii46L6kd8XQ5hX4NpUa88U5",
  "key34": "2uBdheg8sMYpD9KYmroZJePeTQgrcUgC9EWKmZXsoiMMzBvPUJCbDSTxBzWRuprFHsWmX1yyxHVLHxbB5EtK8JjY",
  "key35": "4hTqVEPWv77Efgm3khMB2kbyDqnMBXVaymBkfaKJW6SetAJBVQHiMULw6UVFqMtEyeSVZv1UXcCAtwHYrcZw5oYY",
  "key36": "2KUtAAgNGr2PoDGexpncM67uXWQYgegyGeDKbKC9U6VMcWawxmzzC6DjAEJJJdXir59BpDPg6GA9iSNjd1mJJXzc",
  "key37": "416ySxdeU5VZwzp4XMeohmjQKE9Erp2ajBqPmCGNcBnXK1upNQUAZjkVpNDocrbnkurBNm1BdMkoxYXKggJGYqgk"
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
