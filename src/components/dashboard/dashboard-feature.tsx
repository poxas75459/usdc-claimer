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
    "3kArW25dkk9LT7kEQ1VRyPwDQeiuTdcAcpaNJVDgjCfKhGrfuG298jVYnUY4zGtA8PCybc2my1YHb4BCfWwdEpzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47djEbCNaMiAgYdiYJzdm9GUAnXCWQWFz9Prg7GLzA6pk5x67wzmG9tph2CcswJwzyvWr29k3ZyVyXariFmZ6GRn",
  "key1": "4Y8QsViBCkRkNjWLByZgckbLApwM4magZHLw7ezemmhwg73HQFueetUZt9fnEqupEg396SBGiLjQM2JkfnijbPUh",
  "key2": "24dSWpg4N4Kpgvu9tTymmErc8trcD4G3Aay2MwMfBbusfgzQkwVByCn1HY1qz1RvzDKfaqiaA72zPAXZVo5iz2da",
  "key3": "2WcG4Ae3BMarbst8TVKpZiidUBvief4NmSLBz53yJ6465yjo1GkDphE6zPQmTzwPWcsZEe2Z8X3MzNK2XjVKzqHq",
  "key4": "2M1f3uq1hoejwMQxeHqseWYJwKjo7n1YM1juU887x26XTjPTgvo6Qvqy3pUjZWhqys6TjMNTvvEehZHavHuXHSJJ",
  "key5": "3Z8jUSizMSDhkWrLAAPkRoa2QmjRVzbQ2nUF48JXYH2c4GuraymQik6Quvn5mJ8xebXjdm5Cvhgkk3AoEv82wfKk",
  "key6": "3hoAPNX9BSRG7Wz9LhCgcWGsxMgga9hm68hSvcAMKDWwAiKRWYq9uYsDcZRYXA9A6MwvLxxKJXj4Er3uoYxcu1g6",
  "key7": "2bs4e87dFm695c6gixKFeiZf32vBi68YWpyhf2sx3aduWj7t3YWosg2YQn162k7vVmwnmDeErYABQcvNJKojwEzW",
  "key8": "PGw6LjgvXYZWJKHfYoUP6J5n9oMDtZru4p6z4HTdWsKuw4BpHJocxeVAiDTixGTXXpUYFZZG8xcXFiCsLyEukWk",
  "key9": "bV1aE5ookqLjUtNNrkf9RcdcY1HZKJpZzv1pqjQXx8bciVhcr7YeGk6MUav8XcGrn5MxSZRvxHqpXo7cGnjQZdr",
  "key10": "5btbRgYhWR6D5Sgfm3jDNnVMA3VoRj98Ek6aUSnuurPR1URt9vrJQkh2P6oS3ydEDMQ1Pbu158CpqQQEGgjfG2cu",
  "key11": "2vWmfaLaB876CTq7Kkz7AXBw8deuaP6H4HhoaKF1PsL1n4S7FKngfCPVWe1NS71CD19aUzdkbj49WUM7bP7zxe64",
  "key12": "3QZV7r9xHW13TRNHL2RscWemgztfZjMDQ6oe27a7d8g3fshNTFcDJQLPuYmHi6s9Fk1XZHCsWHFeZhQUA4StkkYw",
  "key13": "3MqPAbgffgWUN4WKzL9yrYQgzjb35oYMc8zNMcZt1ruuxAnHhMC9GdM4A9M6cix3n2F1AQ1h6TgvQqgr6VrQyWDb",
  "key14": "5SZyifGVY6XsreZ3Ssouak8FCEoqcGNReoEojqMTkkD4XYvhw4GAGoMXwKjWzhLTcozkyr1BbYGoQJYKVY1dUaE1",
  "key15": "4xnTT7X7PDCcRfSew9uN2j1mxcGwNUaUoR4RYuKQ6PP58GTvWKH25jFQiBNPfZDbQWQDJ4nrvyZAkytw9rr5TM9e",
  "key16": "3eQ5o9XghMu27zXeCP7wdffASXyQiHewdeBNVQYDnm9oxoSNK86htHcWSGtVsEGsvrrD8S4bGhLwhoho7FziSHQZ",
  "key17": "p78h7GM7ShgvzjNg4E3LjuQACGjG4Gds97UNYbFcGNx6nz4oLZz3aXdrVDEwR3jWMji3GzaPFzvcpFuyPq7LMju",
  "key18": "5ip2aQfN4bXdFEgi4dD4Ld7hB4xgxn4ZmRyAXKAFm7N1MWJZHU2uMJruGHLYWuu2a5bHxiTDxvt9HdZJVe5WjZ8N",
  "key19": "4L84rWERFqRiAxvzPcnrNy9Shu4TNfvEtW31pUTTpaezRy8VKyhUz9t4nmDoMt29J1jfaMheB5sUvqjEEaixS46B",
  "key20": "4QkZchA82wy1EJmiUX52d6Bv4x81KfriXTBgWafyMm2ydivqXttKdJrRcicFiJDM9xxw8duR1zaX4AoCejzGRaGW",
  "key21": "4skQ8CDeV41EKHX62xpD1tX6jR99ac1RmFJmwuMm1azTQeFZA2eHcMXyhvXj4Vq9ya4uSaewHGcLhpEekUe2uEUc",
  "key22": "2BegiNSqwhK1R3WbMSJaMRjLsP8Ys3W6FqKvqCiYa3YvbG1AtRKGUSMZo9RU9UKyVJYayESV4jwnU5SwbQmpxBhN",
  "key23": "4L3hUrEDSkjoCYZVeH3aovdt5eUBVFCjs48PK4bSpeSRqJSER2pVNbGFVaD3MYCncvszmadSaEJdtEs9QSmzGGgf",
  "key24": "3H17kbAfSSEphu99W84WPsTjfW4QA6Pb87pJNEUHTqkYTZjy2JmKjVdM2oAEJbXMwx1d3wSQzViTyevk2E4cYx38",
  "key25": "2nkqavaLht2N7UW6ZJ3Mi4uqai1K8x1JQfLwivP3cARZsNKwV6Qii6s2cigqhA7Shjm9jdHSgcXyJcwpahHc3mPV",
  "key26": "4Uw2ZpMBJqF5KnA3SaK9ndbiyg2uL2EPt51fT3ucBWUQuoPWUAdnEwSZY8exq5FmtuynvGFftuk8wkCAFmsvM7a6",
  "key27": "2sWY7gn7VFWj8oDU8iuBT35qUTZ7XWW6rWYLvjEZUEWvGYZrpYywAbzRk6PT3gMJ5s3gXoQwLmnbtVZy8DvWf3AL",
  "key28": "7cNyh9VLpDRRViL3JW1Gs2NmEHeKDcVjQRZnG3XxNtcScM9GGSaRcKnPkUDpFk37MdCN9LdY6X5sWm81RQfdHYc",
  "key29": "kbMCwr2psKRGgAtm1TTvfUyAcV6Pv6AXGcnVhzWuGqiJBZZx96aiy8M21E6xfcGmMH63wGFaYKvCPSZrff1jnf8",
  "key30": "5By4QVN1rNU3eqCD4HXWhpSibCevHvmWZiLrkwuuH8mY8as4UV2vjgnenoYSbDYoopWft61QECn7bsVaPw4j985",
  "key31": "5tgHg5GTNhb3PQuZsV6cvmmGLL3JN3AVwCBPv3hVdsbbV9adzNvYBxYKcqTbEpvSvBEfwuAWHDsxDiv69x36BsR1",
  "key32": "4AgqcnMvm4Nt5wx6Zg5FqysA2a52AF5kvtiQzrrPmUMxnx4B3Er5iYJ5exSkxt931rYWKkEa27uGoxjxkWVpVu7e",
  "key33": "5vjXBsozzpV7bJccHCfnmeasadueoL5w94jmxrJGULZHTzy59GWFukKDAZjWrxRdKaXiKymchRwoPJCZUHtnk76a",
  "key34": "3HdKGx9qyHVbj1wqfNHr5DtL5R9FFe2eprFPMPSLh5UEv6wzTsFUazW3AyS7K6VdTGMx5xhwhzsULYCKmcG1kvDb",
  "key35": "2896yNtAigZ5b3J75g4jwHeiixq75p2cMMoPY4huFfCfq2zsp4iGxzRbcHC1sRuMu66vT8VTGQu8eyTXxwt81UST",
  "key36": "3Co558A7zrBD9zCvBTa336kHNH5bEbph6XP5rCKosksg7dBuBeMnCfF6BoaA2PRBb2yq6rf92Auq4yTdzP1gzZ7j",
  "key37": "5h6tjAEo1FRaQwWhCJL6aAttMFpDBgxQMUvFGkfwTKxNxVi5wKD7PcmtbZXY2Uao9EvjJkMwCbsoV8ebRvhgt9JA",
  "key38": "4sv5v4KYRhDhSoqaD7uDkMkpNt6NS75cTPPaBszSsRtKj6ShJQcDA7SC7wsyRKUEbNvgMje4v6Md4eBK3vZEsLik",
  "key39": "4mrv67cLcmPBAc5oWvJkcRvLwLocAQ3FDbS992TzyRZja4mdn4J62czTc6Jyet8gi3Rvox2oqxVvhGWicRnYgTL8",
  "key40": "3X5JQExsmkdJz3DziLGZQ7eMGzpgRjAfiMp6f8t4NjPVh1L1LhygWx3s17jUsuHybXRa5KGt7gMT1fXroevJc3bG",
  "key41": "61GsfwkKFP9dCBZVmobn96j18dq1UhpKDVDMYj1eurpMWcSkAVX3ARB1RC2cNPvGBtnzwsTSWhqRtbJbwk5pFyuv",
  "key42": "5pDKAmFXGsFhtRh1pS8tikjSuxwyRVuvCr2KXZgAiSvZtgvWZmDsXN2rFJSUgJksCJ7xcZEKUM4ZtSQ9L9PtYX6z",
  "key43": "3LT86YDSd6q16bZdhUWJNMXSEaBrabMGLwLA6WuAdyMqMQfVtSYuD2VPxUrXmysuU9E988YxaRmokWE22ySDQRkf",
  "key44": "5MEYroF7QHyEN32uJn2WEjQ9KRjsTV92Ve7zq3RNw8wwX3vW1E5znErajAZpyfE9NTpCaD2hcF3yrV8qC7nJ1NZj",
  "key45": "4D4sAFTQJFA2c8RRSWgm64T9ZVBAx98LbRnA7iLYcPKJm2ZRCezXtqvpHFK4tjLquTqowusuzYP1j6jnRcGLjemz"
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
