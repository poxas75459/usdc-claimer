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
    "4aqxHbqoTfVc1cLSH1yjX1eHgF7CQetn2VEdARRZREtSua1rbAriXXf9qmfE2x8cY5gGVgYVSvrQkVh8wSd6rpoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qi6LVoi1BmRj6mhhmfQ4gTkK5wtqMpfsKwHrDg5GTF7pjxhAtsbbvrDc6nZr14KBjjyqVomnPPrdkiF6C3Cetsk",
  "key1": "3ULfGfSSvf9LCnrAnyGTW8Cs8DdQrRsFNoBvQjz9mP66VGopaVeJNJtmiDeZFqVZzdHKAfZ5FMRLuDLWYf4xfWvH",
  "key2": "2wmEmMoJGWZoQLdoit6ksgSSDf5mm3PETDHJwvt7yGuRVur3ebGQJCcPdBwVv3scgm85HxT2sPx2DiLNsafjXjKN",
  "key3": "2AW9gPGSEc8LsT86fyZfsFHhwbKeuJMffVZZifZztC4aapoaGiNjCyY9avRADTxJ4twpDDypvUKzu9ERPaAUWFHC",
  "key4": "L9vNgFPiJBPjsG6Ws1QVqZE6ciTQqvV1SQLriTUn6RCQrKGWP36EZcJ99eLep1yvFSZPWakhjTAxnHF63kt7BXa",
  "key5": "5tr7u35XRqKPZLEdd5h36yzVbTEX4PjvLhKoLjSk8gbdxwijnh2dRnJFJpZfPNASVcmJj4zw6inoFPkkBUat8NKd",
  "key6": "RtLQvXrhRc55Z58XWjGvS8xLKozVyCq3ja3TYFdEWeVuk2z4skQbmKBpDsBNVwvMvatmhJKGKHHfLk3jHzxbFQA",
  "key7": "4ATAwnAb5EjHdvmSWuXGqEVqt8bLgWfKnR4Zv2TewbpaPWXdrLyU2YBJxNbCdXnit154e7VNxx2CMUdRv3tX9mG3",
  "key8": "4tr8GSk3gtZD7pJYcxU8NcYRG8VL7RdyhACQ6Sws32Ps8TyTJXyBzoLog7t32mJ8DZZA1oPSyL3LT7NJhesJW1CX",
  "key9": "qmWHkNrpSBTZ6445We7T6CZcmK7y6VWtP8neo1vcjMCSmXHvAR2veKCDCdN5XNVc1waxGSV9V9Dgk69YmcCG98T",
  "key10": "2zYo2zFVuCyKEeXXhABTwHkn6rcPTPtZhU2qdsUJ9iMj6LZqQ11FWWQqDQ1LNw5d2DReJxrcvVuzZ36NcrweabCV",
  "key11": "287sL4q2bejU8H11EjcVaqEzav1RtGuyQjCQJ3PxefZRgp8d3McrQ715fYyZj4jHjUqwVerFoHkH83BPDWZPievE",
  "key12": "3aHLNQYZgKkL9eK5gGtxZjEJQkpZrW5mkBF9fBkmKzGdZwGKJbEGhLZdDDHtsUdi1ZiDjUiUcqbuLCH85vN4ndKo",
  "key13": "28ewHi8NxoRc4YzvYTUiXr3d217j7Poj1U1YicHQSbUUyTof3QXa4bLMW9FGfMXxJdRKRQg7TLST9XrqDCNiF4RX",
  "key14": "4mLzBXQaPeMqGnpysDT5yf9tR1msHkqUNxD8ZuiAY8ViE84Fz3Q8RsJo3H3cLDRdHsaRbrHTTGhuejHneNPYun5g",
  "key15": "5kYDcuLz1sztgDDbQdcoQ9JiPFbPfRvKaqMJFj4c4VimmRjdZFyKgxgXkSzyDKY7ZuSoBmUdDmv8MhhPRjWsHhKx",
  "key16": "2YgZshwjV8NT7e7b9sFpXNEncCFTqDTbXWAnAK3NMe6X2AKWAtp2Hv5p6sucsEjf84fF9hzEMhMprFmV8Cg1ihhe",
  "key17": "4WJwsxypg6jd2s2tcBQdwZynoUqeRwrUa89nBv5SfZJDqaAaCLbfZGzntHouJWPGFpfC61B4Wr9VgmwpfUDZPWLG",
  "key18": "2jey9CnzwXeZk2yM92zupoSQCikztPdWcV8SaNkPrub6iMp2vc1ZkmCizVcasjvnPrLz4vwQENbbAnKWRenjUoyQ",
  "key19": "2U33xrZNubGwyLYErAiBRkiZQTrdtw2JeW1Ep9vRFZLYQ54cy9HWHqjvH6vGSBAjRm2rucgEHvHf5mmRfY9WjnQH",
  "key20": "3Gk9u5hFTwzppyBiiT8jdjimoF5mxCW75KsbiMA8NgctJYJZpkfsSS26D59kSjjeE3WvUo4fi7ossTMMFSL7WNiQ",
  "key21": "4agjF2MoBa7zeqGrjrT3sZpSx2AmH7eqnExTthN2gfZsR7KLeZVby9qSTRKhCmAj2ZnMi8w6HKDs5hUE7BZrNmGh",
  "key22": "5ZybYhqJbtvJ2dG2QmXYQUwuYGv3jguKqZPAEJLxUzJuSG57SRq2SRkrJDrWAWKY2CynBWCTkpj2Sh9o75fX1fb4",
  "key23": "41XyW5EHY9xR262WauHGhHbwKNR6Y7NP1HCMhTv4xT5o3tMP9pvscpB44hQLhmejaB9KJpUtmYXSGaaUhZqZPGiW",
  "key24": "56KhF2Bb3zGWHxrba21oVBYH9La2bT8Q6ZLc6yv9458ARHhTq3gPfM3BesZuePFx1oYaC7ckteZu7yG4WbxDGGW7",
  "key25": "65KKjaBouKNrzTMzC8HXEEFyzAkPL6heqtwXKfaFnpMzGaF6cK443hA8JKAXcmwmwuPdNmUS6DJPAZAs22gWLKf",
  "key26": "4fDD4z5GJ17D2sQsB5pmzbiSN1eVbVZLjdgUd3EJXrZkkdq2Hf4Hn2QNopn9hjYWJ9XyvB7Up2edeoaV3YMMJBYL",
  "key27": "4HubaU1kDu7W5gaMsB3GEp81NpatpSNXe3trAkSNyFizQ8vrzsVL2zovvWe4Qpy24kQTu8Ru7mbb8MojVmAEquoL",
  "key28": "2fmTx5kp6bmdoV5kqWgzk99P5DBvwNqC2sQjyQ512RwigKCKtNCZ1jjxe2Y8JHv4GUUaJnGLcRYFC57cw3hzFL6V",
  "key29": "4tajLiM8kKzi3tfCSsQJcxi1PLTuvUWF4ja4Vh1pwpjAv6gVWwYtFrCHnjbgdBrsoCNB6W4qpFToHii5u62Z8wDk",
  "key30": "3xGtNwJLDxeNgf1hmWRaVjwvVXD7NbH3KEnnmBH1xHJMJyJmtodByhNNXLP8c3BZeo9tBnpXGFzjgcf821mCKgFg",
  "key31": "4sscpB8EugBduPo2zviTvL9TMzL3rt1XXgyicCE4icmNozefrmTryQ7FtZSAG2adyU1dLorSvsit1dKyJj6KN9D9",
  "key32": "2jgnTZuDeMs68z23Jp83n58Hnxg2f98JLi2p5ismgzLxPjLa22tnskVCKJWXxpu8cYaCzHGM5b9HprCFkqo3Wbjg",
  "key33": "3EbG7Eie9S3vu8SLCkAKYqsrBCeoxoEJkoSdMjmioxT9aFY86o4FMbQncXZAZLzpFEa2o43wDeXJYqzyCWc47JC3",
  "key34": "32qisWGRGdxGT4h3LEoKPwKow4uT9srMfGwidQydvDXzFWpzNMbuQgqYEBwFGBY8mPGCGNsvJ4fkhUw4ziQCqVhr",
  "key35": "5BSvjtvD74y3qwcwDt1a8kyv3aKmu2nVT5WBX4Vh1UGkQ8UC9vtigjwZTxnS7bpwqR14oMiiGSdZCKq6hmKNa83N"
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
