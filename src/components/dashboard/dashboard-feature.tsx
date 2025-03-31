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
    "2K9qRsV5mc3VZX6TTAaja9kSr3dsDqjQSZXPYwK1NwWjwYzd6hv7h2nsTNqC3idWoRngf8BxsbnqKJB1a9uURuYE"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3L6muhqXs4G6hdZMjQQ4go4NqeX6bAA8japzU6ezFoQVoMGdebfD4apf3d7EfArvMkSAJzQhXUrAVGAK1yJtBfca",
  "decoyKey1": "2Km1ZM26mMUasFDAXyVngQ2HK2uKEhDxQhe1R4E1aLRMyW711wf39R3qZg5bRnYXKFxbWPNErgUTBsWacbdm5KQK",
  "decoyKey2": "2aUVjky4aF8S41KxzTNHH86gqV25FjfgkuPnwAgnART1i3VZz9EeqMgH8a5fSKWgppyq7oV5gEboxhJFJgZcAsVW",
  "decoyKey3": "3bYUkCvLJrvEgvgNKNEYtVeLWusF4hRYxXNdY6zJFMk9guj7ymjRhir1ggH5WXQrh1yUjEwCdciJbPTcE1c3jADb",
  "decoyKey4": "42nCnnPiv7iJBBEZcfKSVq4Xmn5pBy5BxMrvm1pdFykg3vspZkkbty8p8bdk7Xso8n5UP8Sh5ZhcdCMBcG8RKQsR",
  "decoyKey5": "3X6HaDPRFkbqgD6b9QK5AV3Nn17wnncTG3eUy6j6ZcueRLJhEHfebPGLg2DVvRWUApTQHduXLeriDG4eueAbJDZp",
  "decoyKey6": "2ZYtGceduhJ6RyPiNqneNm3eZv3PyskiSqVeUS35GmW9iWnZYYq98r19dsPpiBwaA5MbCczH6rJ59X5KePQfruTg",
  "decoyKey7": "4qjnXeuh1YRR7ZRxUhLuZ4BUpmjV8A35Ysy8mRL5X4BAom4eyoPuZgdZcY4YwHPLiNeCUT7iwTYaYy4rdN8XZaKv",
  "decoyKey8": "3DN5WktXn6kE7qsx8nj7u1v9eeBU4HKphidU7Dfj6c3opSu1AQF5FHTvvBMPEw3q8Ptu9JRYRkmiYufzWQGKT1b3",
  "decoyKey9": "58HsZrhFN2PsrZchCmniyrGysFhr5zwmzvRVFivPNyhhqabZ7DQHMtA3WDncaFqjvMGH6rByFQwo5z8jXapMHcwF",
  "decoyKey10": "4soBFUJp6xnumAdugbPehUZdveU2Nx7bbZbZi9L6TKkJViXm7sKv1DE7XxpBp9ztfUfKKvvgdFfPq71ZU1F6YUhj",
  "decoyKey11": "2J76WzmiVfCkkTzKDyg2EKUqxEbUCgBkJitXrprgLCLdBrhexivpDTrWWo5tg62WvkwiuoiJgfRFnVbcKHZ8Z48x",
  "decoyKey12": "4GHoPi6Gd7bfsMYNhEoTkP5prwmGfCu1yJ1YWLg6kVnMZHhYAVKyRrWay5DrGhGX3mEzSqNCsqUBpDTiq1QMDds",
  "decoyKey13": "35a41v6DeNGZSzdpKShmXzyEgDymZemZfb9GcSHJijRw35Y17hdjch77fCbHvwdaDvSi3fwM9BQgArJL5XUUtxrX",
  "decoyKey14": "RnnMQAMUvGWTR2MDYW9DevwjGVhD662evz5aFN5kCquiYb37Wgd9xfdScZqu9C5EinukGmVPdereJoGJTiEGvs3",
  "decoyKey15": "381f6AFWUnuVdju22e69NvxZZrnmdN1CNFB4TtrG6znMQu12bNu2YquPsrh27JQhyoBXhsJrZH9Z383ebseLheoK",
  "decoyKey16": "6uCFveSu6qrHFhxbE2Bbg3RxL75sR8sB4ZuECx2L39AsgYq2vV9P9RPCXuZMizPeUvWjBofhnGWhRP8JreuJ7ht",
  "decoyKey17": "4e6A7diQULisLSP9VqgA1mNZgJ3gyxwoH4KyDALftU93NzALDsYYX6GAw6kd3SFuCFYnvtWtKSUTpvexD5hbx8EA",
  "decoyKey18": "2MMqRPnrFpoVZXQhmPn1t9QEM1QuhexyqKDDsZc5xZEfffeHhdLpKAHwu4Yxm26WYdue2RDWikDXonq2qPT8K53L",
  "decoyKey19": "46s9ghmfmFX92dYNZJHWYT4S1UkK7KDkwhcu2YHWJxV8kbcMghV5zgSt7EwkTUjr3dHz7aob7vs6zXbvDCP8CRGV",
  "decoyKey20": "5ZDTyfWxy8hSRVPed6wAL9uq2HvsX6qNyaSvocBMCi8XM9nsBRxmGvEDyH9Kvoga8g5p9VwPXJAfhHdxP78YVvut",
  "decoyKey21": "2tu1pfQ3Lzxn1F7KqsQZzXV4YLxh8YYXbsqrQERhyWYA5bfFSNED8oXJpsqAygMm5uy5Y35AhPMKdJQdSu3NAFfU",
  "decoyKey22": "48iSmPT58NmcZBqGndmUVDvH6HzePn7Jx3ZFLHCiRcerKtzuSzUjnUKAPQgdYkZmUSGNZmvJXAZYeY5B6qYK5HrK",
  "decoyKey23": "4mKuW3Bv2VCNxYwPnugJZ4e2QfxgHDWiyTzFRvfdacEDWP6yTmTcJHVadJY6dwNcScEcs9Rv1wANxjLUwtKCX7Eo",
  "decoyKey24": "3Qxb68ZEwTbsbLhLCgeZVYobH3WcYkWpxsjiXB6YXgyTasxWaB5bnCaURWwxoykUH9tqDRcP1vbRUwuTnhv1qtJ",
  "decoyKey25": "uP7fQbVU2q2sn1BHAUE3M8tQWz2zRfHtQ6nyX4CB66ivhgaQ7nBSXFzUQKCHtKsxcnrTHnKNjnTpdGLAHMpeR18",
  "decoyKey26": "5WWnGMDHEWjejaVj3n6nN4gQV6v8gH9ckt2NRL8CGiqwUrcfqYyfRjh8QPYzuPk2tdz2TPURuUpkSkPf6v3rAF8e",
  "decoyKey27": "3rPB9yao6sTomT6nijB5hEeaZkJyku863XB1JbTKkzq5fyXYXKkpUpRJFfKZzX3ifEF79hJV5NR5cmfwf8YpQy4f",
  "decoyKey28": "41rQgHGpnLYgqTTbVbShpk8PzWGVpexksmqvKBhuc67fLU35oyNG8icK7c5QyiskWbwFjDifqbTT81XWtbHVC8ih",
  "decoyKey29": "XZwRHthotV67HW4eZ58YiQJmDwp42KUydv5YYjpzTBsgnjPe8iq4g2hGWgHcpgSCQAnMmSmdxX1SDYWBGd5eN4A",
  "decoyKey30": "4dXEwEPdYnEyAD9ZzWiY4WoVLu5r7HwuaXxhCPPEmKPh8VUVuhYhoHcGCfrbxirTzVjHVWgcRBf8Zni23J6eYUHP",
  "decoyKey31": "5EbrjdxSAZDdfUTB2pXs8VBbiuUYg1b9fzA4QpKYnjGtLPady7j4RKbWwfRZe1pdPEjLLqPqoG5p8vJd1t18MFBy",
  "decoyKey32": "4YhNA97wWNcqhhUHa6PRXUruxaK8BV96aYXcr76hRuWo6Zvv9FkY1paQaLKbaipMWdhsDpXEFnVbXFb3kx2YvBdu"
};
// DECOY_KEYS_END
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