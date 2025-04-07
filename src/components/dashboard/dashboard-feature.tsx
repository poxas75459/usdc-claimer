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
    "5Lg5TS7egu8jntPboqctVCh3w47ZScmcuywSgjvMD79JrTWHt8W4bsQZ3HHW9X5mcidGUHTVg4eekavzqkXwkMm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h8TLMMTm27esH7SRA9NRGLQS6iMdxrpqyVeJi3UxCPYXxEiaPFKqWzZoYRP9y6VqDaRZWLedsf4HvGxgLFni2XG",
  "key1": "5bNKpWuDJask9DLyPB3awV6MUiHx5iN4XjhYGHriC355LBJEp9ugrB9r3Fz1rMEGwD6qYdyGvGtKrNA17ekGPRnv",
  "key2": "2c4v5EhLurowVaPndeEoFfZ4FDufK3QLH3yqDnhSGSKXjvW4vGRZGdXsxv7u37p6xp11XYidryQbPL2BjwUX2akP",
  "key3": "2Qkbz4ixrCWwfYdfRjPNZkLBFfcrq5G5nMkJeRxD1EG5GCZ6RDKxFMUxstb62PNLDczbDkmbAJ9wY9FqV7ogE3LP",
  "key4": "3uvK4ZKsQh1GZUxa1bHbRWmWY8bwArjjmuBVmqiF9UxLHJUEvju1Rru648bhCGc5wft6w3yijWcsb36pURQVYi2q",
  "key5": "48KhWdUuTGY5dcvZE4pwEpg3k4R2fHtKasi46zDyg5kHuJZ5QDfRWm9dEkk9KxdYfAhNAezvBdM85JLCQbXdseoe",
  "key6": "1SL5r9QqyzQrNahgA5eSVExuqC2he1vMiHmVnjb13HCwytZXFZwA18agwSv9QUav47SLKnzm9UZJo9mVsZUMzqC",
  "key7": "2LEBkDTKRVZWNnBRDsrSM5mSezdZqxbtrubyzUcwJ5FL1VTqQMUbr2P1kEFBQWP6DhRT6QZfNMWzdfETN6xk6Si5",
  "key8": "4yE4K7rQrURTZqZr5rxjP4AxfTFuQqmnduarDiJpH5pHXTPtTakkE3pANGzMiW4Eefoqet5CVxqcNj3netp7D8dN",
  "key9": "2fFVXasVkWK86rRJDkXy6pmxvvU9HX2uwoYin6S3CqqaackzkkxxUHbiiwnytiA4gPm8sdQDzTmy2vgeK7EGsbZg",
  "key10": "5WQ2pYr57RfycpNZpUE2zecCj1nzuL4ss4FVB3Q8GPybwiNe5yqg1or5GL2zzfu4fQNj8jax2qfyNcV3Kfq4kdQa",
  "key11": "2xkzUDRmMhrUJCQzF8ohCBf3ZTk9YBhAqmeMHXGympgg2PMoRA8jH3zfnnQX39CCnsVFbQM4Hc4Tmrx48tcc8F3y",
  "key12": "TtqwkjZ5bFZdESjxdR6CDcTb5ssexzkGgru6vq7fqZqttauqQfvv7NMV1b9SDqq55x2j7ahA6yjM411cdEaARJM",
  "key13": "34VgRUok4ctdpNKFK8srj1MDt6TMfTEqZbMKvTHkUqtP3V3Yj3EgeMBdiDF3n2NgepGjMgJo9Nc6ZD4nj315QEkH",
  "key14": "3ktJcErYxuGe2SxMGRYawjxy2q224gDXBGyC8pe3Nq5U6u2eB58ePycnDb6TminYq5mKGTHb1qYTFKhm9NPTRhim",
  "key15": "N1GbXTYLSt1eEz7JkXXpPJQz4Vn9Bz66orY5Yjnisej1qNVjNKvCYuXU2zTWPc3notRN2ub5bBWMQELfkRrypTK",
  "key16": "5ST6eGhzQaKKYhBtfZK6sQHN1hErK4jts2P48yFWBPXtUCEZnxL3JeiH955kE9zi94M6ihV7Ng4GEp6aCy5mJHmA",
  "key17": "2k3QzYowQuPytWpHcd6bM42CQwmB7ydSdWwghMzXZ9ytpsWHH3EAj6oi2mUVQoZ86dPBhjE4nbo8a9b5ZMb4U2aL",
  "key18": "JDRX3ffVrPkc5D2eXGk2WWM5WjuTTyoudjxtNHZqpP85furRtN7Qx5GJ88pd17qyXsDZW5ekpJb3onvdNx2mSCP",
  "key19": "2xv4PdfAbk3xjUCmcnWrdTokHvMcfh8Bcn1dit63VLa2efiYr51c753yfdAJpkEP7sCkQLwRcoBLRtm6dxNsiKJ7",
  "key20": "5WPwXYvufkwJSkQ6dPYdZtKGzFKrW7rfjWBmxiwKneo2p8T5FwKVrxwiWzVmtXQoJNFfYCquuLRBsWs4GQkxEGtf",
  "key21": "5gHY22tkQxqTjSwwAj2JadAe2mcNF8YV39wut9d434XNS6hgQcPP3787KNw42FkiWMGUx3T3LuD7DoAnzhXKPzx2",
  "key22": "2R6YiVzQa1hvB2KfvqaZh4rdKTTy6hjUqK9rWDfxUfzEcx9qYhDpBWBk8PK3jePXxCw51nhpqGdyGYMJFEJGRpS8",
  "key23": "3MvQHve6L71MKhcyDNvdpGwA6axvAWzz4nehQxcBMo8KTZUgwqKoK1f8B99fp4ZmgFmZFpXsunuFk863vPRZwY8U",
  "key24": "4AASrKL9czpacsksPBvDjjJNbMAVMPWd6ACzB1RCEAXP7FRZo3ouaSX3fFyk5ESCPbHivjbKj66vexLYpQVu961"
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
