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
    "4MKMVk5m9VK5qXM9XgDScYgXTjW7bccrwBoZWNMAtxuroKmuWErk1YSfg7VtQxpLLSUfUs1gsyJygga3xkwJXbRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cguSTnxqVgreXSDFchXYwqvFy6LfY6ArMErLjxJ9Wiok62eiNbew4Zve7wdmbhtM7B2pZ5Tho98TVzc4ZnrwzCL",
  "key1": "3yLKLf28Ez6v98szKkjfwmZzkFJijp1LeX3yhuStqFm1k1WX68kQ4omqzqN2riiwUK5ZDHKVds1CcbYwvNSzpnBP",
  "key2": "4fT4TUzR7Tm6pqCsnMF9CBRHzFaimfvPxxupfW9TNFiqhq3r5dXjQ69E25rozuoATTiED9Auufdpkm5znQ8yAfDy",
  "key3": "3rM5F5BX4gdDNvLBFHatFG3EuVip9t9EzWJmtwgLujvV5SJATmWaHqxPJCYHyBoJ9ZRUmvj9bJT5g4Db5sEPE8rM",
  "key4": "433iXStpghYyn9275Xo1mWP3eLP8yC7kAeSCGCrY4vtGemo57b3uicapdM52GdEFVtUt321BbCSjPMWGPhv7uYCX",
  "key5": "6385Yi8HM2nDJTDwPb8Kt1HyaTudY4N2m62a63WkdhzxhQhDtjUTi5ZwRP4gXeS564Tko989WLJx8dU3nqVTbgWC",
  "key6": "3tK6C2f2FE3PMumXWCff5Ejd7wKRwauFrirwdmckGbEXnnVWVtxGcvsyiD6Dd54Snj4CnTigDHysHVSSVECCPRT6",
  "key7": "DRZpHLQQa833bmCoXSwUoUE3XnQh9RQ94wPiqxMWyTqL7qtR9iDcEHxNTx9qvQdD4vQPJoULffsHjZHeiaWAB3H",
  "key8": "HWqcKSLtyzizW4mA8B59MGuLX7Uf4LQiHBoidhY24KdJXqcUPZdVgyBpND2FQQmyu4FcR3yAQXhHrN3TdP3yTU7",
  "key9": "33SxnbWzAtp18gBfZx35YadhmH7L4Xb3QEiKDcafcemXUn1i7zqc57SYyWLDeLsQdcZpJ114sEtQvCrBK2vnetk8",
  "key10": "3q7AQ42j6esSXtcU2BWAEA5aJ2RgU7WtjpcJYjnpUZ5eanpABA4zja7wniV7rRo4U6xaGFzaikyyY28QSCuvPTgd",
  "key11": "7X4VmUWEmG2XCgjpckFUMAHiyw51n7kg27UU7RhpdVzymUYeVjw7gPPNGyTHhjNegYbmHTyR5deG3rjbr3E125B",
  "key12": "2Zb15puceB65bnivg1xC6N5nAGtU5ctWzG14ZWcCLTFv45gEMGb25E2TG6tdgiVEjLBmNeYYbYE1WJbM6WmNJnGs",
  "key13": "3QYXZZPVoVC8XtV3E7iPhRzS2n95iJDQjSGg8GEEv83gs98ZtEzfAsniWDEy138GMktREASvKY8Ao1PFHLFwtPCa",
  "key14": "4Ux7u2CvJ8gmqg4cCyysfkgqRio6iwaTr95q4FqHqRonYFbwe3jK4aho4FLXPXZaaNs1jXUXqWkzVqUnQqNkcVNs",
  "key15": "wxCKowzwvLZAoYQc7ZxgkRsS1P15y3hdZxNhgMotLPpyowyLgimo1kEHTJAwweSCMApojyP6yckX5Aw3vNyrFSg",
  "key16": "21q3C9BQBVveErLwiVkkuamWiYPfnqKZxzFo9wsTpGxaqTE2eyFVfGDeLgD3yQm2M1QKCD5SaaKpumg8cFogyWwL",
  "key17": "5MY3nKf3AGFXVFEJvfvqMiCw8SAzfWH4X4CfkYWoRkNDrtZkTK72P5VNjWhAHBh3g6zYgV4r14Mwf54MZphterfm",
  "key18": "2Mx9UQhAp2opMcdsDWUz9ayGZPpx6junBXNGD1gSucfhE8iVicvkmFMDzt6AnosXNxfwtxoYFfRNgNQnukMJzbzi",
  "key19": "2KwXCLdmxnykJesHRPkSzri7Ty5DqdH48jWuTwYqsrHp1ccQoURstRPhchSLVxhHyX8TYhaPELAFsP6Z3TxxYUjE",
  "key20": "ZLTxkuHRUF52CudD5vKBaf192ZjtwW6DZinwPJxm3ddHc8mABkWCs8S162EN6qej9SFst3mvBwCCUhizBnyC7q1",
  "key21": "3KJKwiqn2JsTNzzmAs8LJkBw6wj7gbZqVsKyPDkNmAk2Lj3Qmd6i7hNUAkjngeCKwgxr5v7WxhFQxdvWu2s6nfZe",
  "key22": "586SVsSvhGrsHhmWXeGgdhWVRDu4PWurMsBj2k1g192ottrPa8pVnkdWcZfKah7Xwf6wkT9wCPRxo21L4mGtTTdd",
  "key23": "gmFqkTZgbt8HygiUCgo497qNeQFLSeeD8Rk5qdTDhNxiZia7wyrXNDXxTGzZyiNz1pFaRgbFBXAG117GLdoyG64",
  "key24": "3jeYcQafc2XSRKs1z5Nm37Pe2HmDuJAAHymkJ9fBZ7mVPvUdLNzVuB8Rb5ZWVdL42nq9csnvGQmawCFAT4navj4p",
  "key25": "4wkmCqAoGwm3rZicDzaeYXkf5Qh4bEx1qJ3M9ZTncNzma2V3V4fULiCYCjWw5YrVn5iVf3TxVMxWCpk32nFa1JCP",
  "key26": "3RWDg7jQHgsK66zUrqTHHwMBfUHnTzC732DTBSmfiXQuuhGsBPuizA4djeNGwyfSDjxdpisK2SqnNoWpQbBeznZh",
  "key27": "3TuM1x645TS3oe5fV1iKkcNu59Eo9mEtHPgubfMcXEMUBRJUdiwN3JC2PDmsx4vrR4ARfKFeWPWutLiCVyHF9Nba",
  "key28": "2e7yEHW5hB4EgM4DDmTKPrXgfBeZWW3ZQRHk59AiU7PY6wad73f7Vf9Kibm44D5sPVAqRf8kxcprLzGjMrNn5RER",
  "key29": "3ACaXpLb8sh9ePfWKgGMFo2195QFqZRpQSCDAKzvSPAD6aQDqVHnTrReNFFYkQntYUwhipN6UjkypVWHWBgSXPTA",
  "key30": "3z36oTm8vfUzJBxmwnPxE72mU8XkMGTZFmYvLveiFqcoajNSCnfeP2NC3u4RQzXgjBGiCkinSUhmUHTThdknMKfQ",
  "key31": "5FLpoTzsqmE6xH7JZMKpgKbaeimhPPWe8vpE4CSK57rEu1WkxyUqEBAR381VbKiPEi29EjAwjEStKvQmqsGFTkhx",
  "key32": "R7w8AaAjAnv6grZfeTY1H8D6njD5mQgQLyBmzMa5bDk5vCxYArGRULZ1xsa5KPKQtEtHMxgE1wDxxX9QRNbv5Xf",
  "key33": "p1A69SYkrTCWiAavfKYZ7naGPoXZrDf6DX6cM59kLgLv3uGHY2LMy3yDDA5oGVLuXgKbWimy9kaU2jViQqT1c2c",
  "key34": "JdyyvM2EMnf5Qf7arkiws4KtKStDy6odDF8a4qe2VjZLsdU9cgNvx1CnTNZRD3wCUpXNH7gHGPkVLxRtEc9w1TB",
  "key35": "5wzrSjKwSDsaXKppvWdu7R2K5iMrrxRHuwL4eoLfZEyruU4gFmbBy5FzWdsK6M71UFBESw1V65MS6itTGs66tuXj",
  "key36": "5tGnxP4619paMSX9oTQ8faXkZSCi1J1mGnALjHvNPTRn4ToUUvEoh8DHqdrFhouMJwa5n8kKWbbT59hxMX5LL8MH",
  "key37": "5KDCrZ3YuzTHkyxwAq6pZrKEFyAswCjQJYhEKCyzgTPZdqzXP7uSQzgTAjuGDF4qAZLREq6UdCSRHyKFpa8WKExJ",
  "key38": "4wazDhJ2bX6ZZ2NWixJYbfRQMVYP28MFG485KWpe9AMZNEAnh6VMmd5Gp4qUkmReRgKi3CvZU8JDudG4aXkjQ4Sd",
  "key39": "4JFbVssUvA1mKkny8iqDmF6E1awA6DYGB2bdAJsdTpNBRyWyLVbRg4c1DovS6vCDJz4bGDdpcMY8hAceLn1a9zJt",
  "key40": "4SsK7MQjGvvjrjGW3463xwUrYMCdYeFCHLbSJYwykK28BbEhnmJDvVahQLJkpth2B9abeCG649YmWJ9HNDUwdLSd"
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
