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
    "5Vx27kmC1Cv7T9YxXRhzBAgCKsQwfncHq8SYV1boUp6fx2n6Wzuw3WdhmNDGwBhrZQZmDhuYQijF5KfmSNpt5ayh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ndsrVYchWq7xcwPvt3fk3FWhdwvejie8iuF3ArE1du1vEiMJvgFN66pAa4kKizMzzJ4CzWz2cZ2r6FC8E4gN7Ms",
  "key1": "Wz64T7QFpY2iJFjgJrhYKm58uDGvL6hLsqPbVwoLp4kT5yfoWskdw1ZW7hgd9AEcQnhjLo3sRuNcL2n8fwMmWBS",
  "key2": "3jFGaZjxPmxquNyfhU2r2EDuAorNQkKaV2AiUv5DGutgfKGvoKEUwBK5a3yb7c8E4J2wv1mDE6w9x5ivQXpoeAoU",
  "key3": "5PhYPDVA5y4Ezt1xhyjaawXuhkBX8jjQyt3RmBjhtEFktBqxWoA4thy1C6Ed9DJwYJq9E2k14fLD5TbCgkMcmT1s",
  "key4": "4JTmcXtMUZjmQV2VnVhtwsPfV8xeUAKEHhuQX1ontquUEp4WDLUiSY2n8AuLwsys8uAACL4ovVXNZxKfn6C5SxzQ",
  "key5": "Wbxe2Sm35mJtUdCdrUkAMU6tJAZXzhDYUqCBtvP75AyLf5zgMt6hb1UL9rPhwGLKwcjQjKvFLXeSaxbk8og6k9Q",
  "key6": "2dLEfKfUqjzPnZZzCQ8D6FE5jQ3KyYEKEfhTz6ZPretv17eRUQU6kBaD68xUHboYDtgEy34nSzaCYvB7KDjbFhnJ",
  "key7": "3wF381fLQFLnFMhX79WufrFRhvE2uV8kLYCURtTcdiRfCaUF1F18ahVoaEKHXKLe9hH4ck7tQzmPL1iwjdxCQood",
  "key8": "5yDgrVzGbJHk5NG6FYBYYJrygWkefPLF7WQYaXdtX8VcLiM5YGRdCxEZCGtqqAPJ3UVfc3B8GC4MiMr9LpkTLY4d",
  "key9": "62twNURypkDpuHCu6fSaZHdqVhQPPu6i4XTA9vho5XBduLhf3QiTCkNTyG2TNrnMWtcTMWfXZ4Qvsj7a8MiWnZwG",
  "key10": "3eixQQWgUo2KNsP8mCcPgFWnFQqBFR6RptjNnuNbswpsS46yJEG4YVHU6aqrjwJfBeeQGq22pqZnLPvRuKTMd9vU",
  "key11": "389afJYsknqWEn3fog2M6EGScgqHr5qVjwBmtfjbqAfJoXLEy3Wj5YGhASdV3bqXWgzuQs5Ck1BkmYabmNoLnm2V",
  "key12": "3qNn8s3waAAq4sbLHdjpAHyJoebHf6PcMQacjzkiH8ttowuwiWi8C35WUJVYY5Gq8mPLNJDhHY7vZaPE1GTYAs6R",
  "key13": "3cd7ivUR1kEXyu4HqkMBs9GHxjiBFPbnBoJBasd8EPs1rN6YecR8tMJwpW3bzFUg62YHeZB9Sp2sXWEfbY9fNXRK",
  "key14": "2ZzCV1PLobPjsT5fi7muyYu7SWfkLhkRsuJajKrHCZUoMd2TVdyv2AkTPBwUcZAWPmJV6xUAd7heytTEWTW6KKTh",
  "key15": "wvueN7bNWxUqEZ8Yzj3eLZuFYAp2hvRs4KuLo2g6zJTxp64BGb4JmKyshJyaVNmguTpbVEtbBYMUixo2J3M4XiX",
  "key16": "5ZftMbSPmgk3eDeZnuJgPZYLkL67j5RvGSELhUbBJZsnnutQnPRx4vXhdoJKeLXR2dSvhai9tD4ZiE3wQAcW1bfZ",
  "key17": "4uumdZjuuYnK1WKseG935fqEssWnUo61yGf9B7ttsNqeFqdfyo78j2ju7A3iGW4MCVTmQbEwgpFgGkvCg8JbguaR",
  "key18": "4KBUA86XLofHMyTCZaxrLsWsvdYM8acSeA2DjXwNWazYX4zGHsRqXVhCtL4oiZ7MYqW8CZ8oxh5uMTgcUifNzXUg",
  "key19": "63NNN9pJVC27SgK75QPgQcPshsE26BJCxt6Nt6yMmFymDf5PZ5ZZogLJujn1MEMhZj9sw58r28uD66C9NCaCTccv",
  "key20": "Yt8Jtg14tTWuuZ41J9VhkE1cuet1xD2yv2jw7faGysS9SRAAg9ix1LT1rZ58cdkSLjFKH384oDYg7eXNu5D4TGS",
  "key21": "4Z2wftDLe6USJushuPRvpqEmtBdoHSVL3vPwYhZxKjhwUo5BrQtcb9x4hLu5ZUPnkGtp1x8DqgYprXGwghY5LJEy",
  "key22": "3ewfN2aTLGb39omsEWXJnuELUu9va1GAbFcuZGgyxHA1h6v3xnpq8Uo3aZWBBuYkzRx3kHJjYKYZ1Qou663t8a7y",
  "key23": "5La2PLJFANqXC6g8xfDRvczC6VxE9AZP9kVuSsAuZZ6ct954L7x3MBwQfGPTkGaSdZtgPycU8qTjrR49MtLXcfv",
  "key24": "242xqjSVcnZnv5faZBSXtRhaEB7tmQvi2AseANrf3qHrXSLGAj4TLdoDXyJEKs9eMZXPt26v8bnKasKZ4ZLzxewf",
  "key25": "2v9xV9KAHiXCRoXgcXvou8hocbfCaALSEJFW4SzBDC2YUKqnpYujTbp8167rUh2m71fGQAjgoTkBfcTyMXca4jsT",
  "key26": "5mJVtkx3Mn7M1eT97pRbj8yzaTRudhNn2Speivi2ZMQtRj8qkWqYDBc9B2MgsGyjcQPfNv18n2fvNvMkWag3hMGX",
  "key27": "Y8Aqmdz6dg5R7nfsTXL8MFaeLEQzRnkdNrnSbzhzMYbpBGSJhRreW6CLZipMKTnGCgeeP41udazfryn1mYRhVTL",
  "key28": "aebPZnoYgU5rxhhVwwQC7Q7wxkKfyETrNDvpPtjJ5SiUhG7riX7QwFJyZpwUGxxqEVnGFappGEiiUiCZ7xrQAr7",
  "key29": "2K6izTscrK3aDAdSUbmCTgrjeq6KGm5YBu7bjkXfPWGuEuY7toczvALLEjVuCtRPGBhQ3vkV8SmcFaUj1prKT9NG",
  "key30": "3G4fNNMhL8ue6ho7zeDK987dAWkQKt7YYaDD6UcChkqmG37VxEFTwaEsgNfedtsyouEhSFBVFNMrbVaALk41FBVr",
  "key31": "EnWb61EtKiT3if21tbmPnCz4e3qkFnPRp46kVn2kjDi1wvXozEFHRkZNRvshcfytzJtHz1TzJyqSoBu5ejdWb5s",
  "key32": "2hYQooiaZcSRzYTJxNfzF453WNkPyDYrMwBrvM1m8rwKPAYWkdVG4cynpG2tdCStXTtJydgS7arTTAxCRVMEDEU5",
  "key33": "4p9fpVnFyMJmEHTZ9YYrd8ZWxEGqBppnsjYiF3uWFq2H4kgpLdh9z4LEwt6G7wL6T1MRR3R8Yryss4N5yWYc5Jt1",
  "key34": "23TLVJBLZbXsqUANSRSnLQLQnTWPZtwBJtJyJt5ExaPiPQ8yPad48YPCd4fqzuxZkuUjRTMJxrnR3vRJGAPh3enb",
  "key35": "53EEMH9c1iLdcBePK8d6wkpc374KhqWUG688nK7AeVzY9MMCx1FWKpmiiy4uFoStayWT2b419zxAAHSny2NsA9jf"
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
