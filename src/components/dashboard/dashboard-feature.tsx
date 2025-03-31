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
    "5KAGWJZUHxBDeoL8mfeRum4p2N8fdXE4cbw4Wtxf7wvniFjzLV65QD6ZrS2YQewELkETepTjPX8YH5zumqYareSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MhGxyxgjpcGFxnUU1ayXeTfY28E6q5MYFJBhpFmhELSPUQgFRLVw2d5oeLqF6HMBTyy4fWmaormAq5K9o7MzPgY",
  "key1": "33B7CbZpzhXZkoyUjNUBT4u1DgtR6NxXQaYoDJY4Wzw7CbbYEPXNcksxZV7X5MaZQqWj2kfttKS77QXXqYFnjsxE",
  "key2": "yhYz1rLX5wWCsGbcK5kpYt11RJsYSJzXedocXKfkPqamRDmMSPNH1K79yoYYhXJQ7qD6ogZjJkvmw7Vxm8PA3sy",
  "key3": "2wTqubVWSKhJHhmUpUurNi57oQRfiVAp4sntAvyBxsWXyHT9yiPzK87URvYQE1wNjNYUouuHdP1LoYrrfm4CRVh6",
  "key4": "47W3LRMrXMkYrrjyKFc8GXaftv1iUqvjHHxKops9h2gFQ9PXqdSovZNFTfXs3DHhz4DBu9pnVLpTZaWG6KNNsXWH",
  "key5": "5HhLwyWk3U2WdWW61QnkavDxcWn76tx4HwvL1h6m98spJ4RfB518Q3gYtk9a5QEDm2HBiCkHgSNQLmgivgSSnjCc",
  "key6": "29AzCBQcumPw6NtffjS6p3xELWRBbfpnhZhjvCbVc1npTVoVocVebMCXyspS5bPhAJUiw1gJ6zf8vUeaZ9Xz1KdP",
  "key7": "J3noYMja25R8gVUs9P7RzNgxEUvSJdDzPERUP7s1SuxVm6vxScTLK23nbS6YP8uxLF9Ew4vyJ579gGnVDXwL5t2",
  "key8": "4FxCHYEcUaeBripbJTvioCio722Drw8c4FH6iPWpFJuJmtwv5M5m4fzvh7HoggWDCQMZ5LE8cNGNinTavTNvufTr",
  "key9": "4v3BFdoSDFWfgLcZqbZUjAaPaPSRu5c2LuC3T7Fcy9Nqiqq75YmCh2x6HMnncwnbHmgKJ7hiFFRDN54nAoXhK23z",
  "key10": "2JMZiTi6KHtVzv2RbASawktQUXCLha8GSnW8hkpb6ZBrF7nZJJNCTkRUF2iXdfeRTgGLkPKEjzoJXgQbRp7PnXA4",
  "key11": "6kfdkzof6RQsXi4JdjWb1fFKAA3S75te8U6sxU1wA6FNHpB7YTWHCK9mPyjsBVd2W47Ww4ftSGypQZVqrwyfzRp",
  "key12": "26neJQrcfPh114FCjtxK8hYfkdxHiqb6kaBgm7GJ2TnfsRJ8mZDcpR1HZqS75gMrTGf2jJhrwLTRhrpxzrHUXBoW",
  "key13": "3ifH8LsK52Pfx76XzeiJHaKQnMNDTZvf6tfxk2MMe3d8X11YrAm2zkQkW7sqLdSfJ9d9WJQT3skAMeqwp8zQ3d8i",
  "key14": "2D4R1B2GTDTiDHo9dHdmvt6NMQszBbXFpqALS7XXp1sJrJbwYwquYWHBTjqwssfsb3qcfwVLFoiYKY7X4UHVsHcs",
  "key15": "3b4XBP7BEm3Ze1C8TU9qJ9JoxCCbdyuG86HxSSGMVxWeD8ZbGQTCHm5HCHq7mPKHoxVpEpwsLdLg7b8E5Rr9iQhs",
  "key16": "66pgGh5yDRr8oEtXHtPCmuwUicbtarzLQVKTU3oqCy3FiJJjdJsWGGTgdxF9yWVDJJc9pUwmhGk3B6kwNXT9tHW6",
  "key17": "22VGJXLx2jX82CD51ajuUTgfBiw4Tb6sKfNsLuJQFdPDCx638gDW8NVYGwuz4zn42P5D11TMfB7yVE6R5F2BbUBy",
  "key18": "5TkkKAnAonh9xQJ1Ja4dn5s1TPNRo68aVQyrmr76UB6bYn8JJZ2G5Eg4Zeqwn9jNW1PqCbMQagagZ9K4qXXwqYqh",
  "key19": "mGzmeeKYkyxJ7yQ2E512TXRJvNxY2BB6mBYdF7edqS5jezcbUznhqR3wDoYbtpfShUgjynkTnUpFr54J2PW3iur",
  "key20": "2sUKMGqT59zANdM9ouauimVbWJYhzyzuvwxREtkhqcU8sqEza9yudFYNcxCdJQ5dh1EXvXiCCYZvSgCmBd7t8vLy",
  "key21": "3tsjn18GaRXFkSXC7hZoqYuTEaSmKSMmkbWBSuhXkggGZ8wV7Lg3AR5Q7youycw1RkmM2X23VtpEcwY1BsJhqvGr",
  "key22": "2TsCKu6vgWHfMeQYhtb8fsi3PBNRHFEAELUZJrvsqhheRPXfWmmgGpGscTk5e3ad8BkK6M4BqqNoFfLUmp8HZLe3",
  "key23": "64p54SxMuKuJbftXPanyL1RPZ7Ja1yUkoFHFdDaLdfHzcEXoZHwXPfPwuLwuEyiCJbntLRBDRkZcwFuaGf31WDi6",
  "key24": "x3Wf31MqYVerW8cP8YjsGixdqw4aG2FCfij4PuFoxHTgwTrB6Hrsv9RhYvTFW7RYg5ccGBV1h34ibJhVGWPFcoV"
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
