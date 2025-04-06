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
    "3eoNvKSYYTuMTV3QHERufpZ9yCvpnFFdZZVAABDjdXDrdag6PwPRwjk9LrL7sFiAKzUjytR72ZvRdBAXTho1VZKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QWHAGQE9oiT2GQTR4uyjbhkBkksHpTwa1w6mfJ1wgZonnCZFFpcvmNYujFAJwB2AYo4M8naDUVbTNnzGKCzs3Jn",
  "key1": "349w2U5tRiN2utYdiAmonq2cobzw1UkWYS1Uda1KMF9kYnTuQA2cAMwv6WUNUhVvxsvVVHiP2YLbitiFxaw6jKPU",
  "key2": "5rSm2WR2f98Q6e9Gb1JQXW1fZKUKEEy661m5a8EgQmpByMnvAejig6EcXS5KvBGhE7R76nrXPSduNm9froUv2y7C",
  "key3": "3AKuGzxhxJL6dWaBekTzsXs9DSRUDmujrMceWy3RJKb4snV6okv478xhERmG91vgqj8wdmMH8o3U75BoCNFktfRC",
  "key4": "4sVH8czdChPjtiFi6XCHXTUPxb3XtXfjAUjEQWdu9U9FcjzLfFBvgTgT7WCXfYRrjxeNYmv3nzau843EpSZyAwm7",
  "key5": "2SZ5uTbRHZdUKYzD7Q1NA1L47q7A9X1EKkyVij1LN1pPjaoiHNdRE682K81UGbeKmv7xYWCfTBGSgd4ZMnVtLgwd",
  "key6": "9GE4Xc4JKRStqs5vbirkRmkNBSvwMTxUAzgU5vXbYUdviv2ZQyBqfr4gVxG7d21fCDhKhyNCDXbHX4NmMzEnSvA",
  "key7": "29TY5bAPWpn9c5GTYvSpUHGY3bmvfC4cT9yP75rh97tMvDhtad6ZtdqTuofc3DwzyCNwkecyeddmo6XtKGprE8tQ",
  "key8": "25SZLKJHrnj3RucrXRdoyqPTWeHXYwZ4K5VGk6n46BAEDWWkkcUFfN7mBhB5XGs3V95bMqfUdcQKS6LXe52ftpjS",
  "key9": "64eENsFBtQLddCykxhpihRH227YyEN2f4bDvDqq1zjbvvHTpxoRoaNKsGPE8B66HBdHpc5kXQKWeF4JCMT48TYnx",
  "key10": "5enk5jY3N7WrHpqk26QGeScy2JBTqDuchzubTQGEqRxUiEk9ai4Lpc5yaC4MF9awSnK562HFQBg5Y4zTDSPhFxPz",
  "key11": "3bdyqi8MA7Hb8Nijj7puLv4Nnk5icFLgmefsXxqP5E6BBChSkSw7ZsUmemVEYghL4rBncGe8YckXRZTxH4fgyLjA",
  "key12": "PRqCvU53DPrj1AHuGAD6GuuSjJnKydU3erSEksSb6Bp5YXp3zSVaEzi9uVsKvMuNw4Sxj74kzZ1ncPYyxPfHYus",
  "key13": "62R5FdifdLPgeyRhQV4q7iXFiZj2xXHk7oS3rJsL1LQxjtjZMXXSRrSjm8XjF8YTJPLtiT9rfXcvMsg4yUpSQCos",
  "key14": "4C9MhYy8dwS43NW5PD2dLK8h4SDZQ88Vmmj7dN7tYA6ijs9QZgFopUdK3FY7HYf2di5Guggv1512MB9yk92rzeih",
  "key15": "3feLm4mTHQmPzfe5ihqXhju6R92Ha7FqyDBxjdgbzn9D5hLViXx5Fz95VnYj6anaRXzefgy3zCRxQd1xUY7NXAdT",
  "key16": "2EiV1jwAmtufEcWLa3M5iUReGhKziouhBJ14yWPxHASZUXzmPhdwYBxsEYEscLJ5ZebsMSLN5fv6mkoKkj6n2VZh",
  "key17": "3cnGSkMCeEatZ2njY9hgATT4QWFDvzGgjspH2hfosDxtzcAS7XKMNEEq8cUPsoShdh995k8DJbNYB5HmMAA3cBDf",
  "key18": "5fQZadmW8TaD7tQuoHM4CoX8TLvmy3TQ4aZpUFsb7CPiTeV6FqE8PYNGd7DPKQ2vbSTNirSkda3Nocnt6HtvcUJa",
  "key19": "AAGoMSKNAVzP3eEsyMkeJLKU5N3eW6yHsujTLRSUyzxYLmXWHSNSbB5wLxBXqD9SJu5XstKi2sg6MheL1Jqni24",
  "key20": "5UHPG8bpxoC4Zon3MjD7fWSZzjQhXaLMNv8wzPgmYrXwc6PTXTT5KCzC7gSCJ9wSh2hyCBVMAYeox8iCWX7BGwga",
  "key21": "55oxKPbqkXFXBsRuN39NDbcwmdmXNHEAZCApCxfiPVqJzSYnDP7KSkrZDqVqfjB75RdRC7Ep7PfjKo2GP5ZbHZX3",
  "key22": "3LHPc9EyhyRzkKLeeEXvt6barBzBup4j6VFQm7QE2NvWivQzBjpjExExVT5SSgyKqymvHuqEqCyJAfsanmeDLk2H",
  "key23": "5mWQNdczgjmWxMBXYBZQCyU2MDAbj8Pv2nvfFrxn6DfU4LgEFGA6Qd7cstcHdiU6NdZXh2gyPbbA9rQfJB2NtgUC",
  "key24": "2STwCwH6Rf8ZGjTLpPURtSXCuLE9vLo3TkiiWoY1F2inEccSLDTpXEmYwFzGLVWkuHAgk258Fo3neYaWWM8oBW36",
  "key25": "49DS9FSEv7M26mRi8A9gmV2P2PWEDZNS65ronWMaHacbCj7sk4xCioyLqmtYQZS23dMLcFcTRpBZ9B3LMDqyVX7Z",
  "key26": "5ZSvs7AYJQMqmM2opgrJFF8px2vFg4wdDmTwhAQfBrGB8u4yJHx1QZwSCeSScoQnV4BbFqeQB6DHF1zF6aJ3bwnQ",
  "key27": "5TPbJG1u8d9ur2Nf1sANoLPr6Gp3AdJjigsE551RHXiB2nrRNq4KRrS88Ae5GwWyJ6qDBBrZGZvwNwWRMFfAFckh",
  "key28": "3dN5EzZwFpos3zHSXHT6WURsdJ7AxfEicvyYknKMP38MbbQYgrB9cBZ6GQsg6VDPmcV1oNTVGNSUE1yTJRa1LN7x"
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
