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
    "AtM6JTLqff8hg6FfUinkVtNoNqpNgPWhHL8MFU78cBKasZtNPjxSjqnqjeXFSsh5SyUimsj24efyeNCUv6qU98Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eriVDvmuHyKxWPM6waQWicA7ygPuXSva6PveJdrWDG3skiKeYEbC92LmMGp1kQmGXdgwVa5Shp3cVXHqmeLJMe5",
  "key1": "5CDpXjQLoYs78XtvPBUSm5k8Zs4z2XpBvtov3GbQ5qZCfcHRwHxN2bs6CLYWBm2TFGKCHfDkr2YA8BFd2B4NzX5c",
  "key2": "38WGZuNwscbFBzEdcXNoHEEyJnsdyGG9eoP1LgjRaBmdJ4RT6bks4WeBuvEnJEhLKtrDNx9iCiQUbnffgzhinXQ8",
  "key3": "4oh7P5waoDiVpgy5WbtJwgCRsrCNMXUJBPNjWDgJWwsz8b9DqxURe9KGfXG4aNRk5ZXqp4WKQGxpPJ8DRsn8BNS6",
  "key4": "3zErwtP217ZrqohQLCcYjRZBkEGJyNFCzaxhhofbmD6oEa4rCe847RyzneMdRZgJo4d4xTXP5oYghpYKWSojaaHH",
  "key5": "5FMUvBgXeBhAXW2egAHS3mw2eQ2gX65rRTHNCUAzn9jnWqFEFvXMEPdi2qNHtj1Ya84ACf8p8XMRTeAQrYgpzmLd",
  "key6": "5p3hCWcFaimwBKsXzDw8jf6KxELzCTTEuZFBjYFiq6GoRJUe8o4PxuoNVXXEv5nASeym8TJubg13WrjRMoNDJW19",
  "key7": "5iPgST7HWc7q6fP9rrpVRaEPStGriUGnJHxpsvDYzYjA7FuLK5F8sziZJ7ywigsjjriZ5uNG5owYhyNQj5qQWu3b",
  "key8": "3MjDS3tQ1TK8YVdUZk3hmcznZFWcusBr7uz99vbwXBepMkeeG5n4Dy5FTXfKRu5UGp3ZzwxmJVkzMEMfPVosFkHb",
  "key9": "2jQnsTpwvyBHNYuC7iDdCjkBQ1yfrYRqYD57Wcy6XumwJTtbFckLcZPKRjSwQZPgcjwukxxC7EbEsQTTJ9bi3JrF",
  "key10": "MvTinfZ5eRN65iUfyzGezMsMFqjHeVHqrM41odSryv8Yc3HkyapqmKaAtVNo56dASuVD93yUNZbSG8miBJYiAYM",
  "key11": "558YQo3MDFWcUJBxxbkpzdYzJbAMW6pnFnHYbiS4WZXuSZAx9R4b1oG3gmuonLsqn1LA7qNgEDDEXcRRk85MTeH6",
  "key12": "3PN8KQuuNwpchQtE2cRMqr8YZTXuXqK1MooKHjoqc3TykU2HXXhc9iNnhZvTNjA74H9vxTrevuxnp8Xh7mZrRMt3",
  "key13": "2nnML4V7tyP6ewYEexuPaM1HLV45LJYfLoGXR96Auwtj8YbN8LVkUXfbzefSvoVvNV3iVXyh48j3XtEsNGxY7ibc",
  "key14": "aGG8WArGiw34w8zEZ1FaLdB6mVmWFt9sCoYJJwYdLrskXqHr3UGRjmPYkPMfdBZurL2hQEUaFM8gt2727W5yZzY",
  "key15": "4RwYfwd3tXjeoRThT25PXXPxX97MLNggV21hztne3GfyknvzupMRa1MJpNk7FFYwMKrLByutXdwpvNZkqxenmwQo",
  "key16": "2QLB6fcziAGLKyZixTrUYNFTwGTxcu5gftxnzuZ6Jxy4wBQUQXJWfDrbtUHTby37JpU7DATX4d1JgA9M7z2ekhfJ",
  "key17": "57FpZTyCD6mPuvWPP5ck2EL2FjPJni8YYqZEhvRHV6KtzMvv2wZCJ3qBRq39Uv6CxU28nVbyBV6MqsPtYVuXKWMo",
  "key18": "23iRa6xnjqXKzWjjweayJxUyjehSoJqgxgcWCTTyBDLbWMGJ4jpjCntV1KQzXnfmoAPJgiNjo2QVSjha75L47fG9",
  "key19": "adnXXpjDia2Vw371YKtY66j7jcVp8WXz7pLBzoKxXZqhqXRFPPUqqfJCZQpbFamYN1iTFL4XWUSUpqK3Wtiru2f",
  "key20": "3pUYKKhHghunhZ6RcXpiM69n8LtbtJGZMMHqShSbMP4BL7TcP71Vf52f633KH571KMDCeT23Ee1p15CHm8RK2B7i",
  "key21": "4pSXLyfRvMKYgXkEBB83Pb28NY5qKsdsFY2oCY6PxpMaKttLJcHeUgo2nhAUBgWz8bpK3SRqHrMVY6QnjnsvueRk",
  "key22": "GkCpxmxagcPPBn5NrmWm8f1VLw6nTrrhXch6pEvMu4CFhyz39CmXgv5Vy2Lrbfvvg8Ka2r2RpXVNPYZK3C4Jecm",
  "key23": "4XSizMLeatcGKeWfinU9db7DD5p7ReFc7WvHYiCV4vb23Dhn3x9x5US1EU5kNhvTdiJBbZLDvNyshADJp8Ev16tn",
  "key24": "Y4K58N3fG6DzvhZja1YQVBZG3fQm6ojHUB8TpRPkijYDtf5C6MyULbrHxcz8dztECM6ma6eBcEguH9LQPLVAd4V",
  "key25": "3CmzuFxqu8F8S2wjupdMqw7Eq2Cs8bp59nnuH7qSjoT5dVGg46gGvj8Awkop59AQYAbiXe2o16CKJsuWZvcmnHRF",
  "key26": "3Vsq65WFNnhqdWhjPq8pj2xhfBzJ71soduBLgLCqmPVdkFEier7cEnjowULmFusj81eQhFdTsUCK6vb1MyXCJdK9",
  "key27": "2pgDWGybesg4zHJGoigHx9ppKfYuebC75UVq1Lknraj66b4gEk3VG4WyMC2mHraCDRAXGfbXfKtmJ7iBkhEtavR3",
  "key28": "22HxcyVXrNPmMMgDSYvKkn62iCBBN8toYJAL3k7bdqeYELsUiRNqe2A59nhzqTYBwhKFPwxy9ZFt2K9374aHgJTw",
  "key29": "5BHLMouKoxyPggyuorMxEwxikJLjAwupTBTUM399esr83SsxMDBQGPrzcVppjkRXPkkPsdQGXRvcZ6sUDQufVQma",
  "key30": "QJa85vDCTP2DfJfXaT18g59QQ78KpZg2x6rF39Zvbt8235HNeCy2uNkzSk86wkpkD2zhnzW36PdTsJvRFZcEtL4",
  "key31": "5aBLMcjX6FSvoUJiHC1nTmsxEwUjPTpvyWBVhYKqNPFbC9PwQ3ozg8omoztNesPcR99xfGvcvf1zKQxtQT19E1CU",
  "key32": "mrTeYhWQoiSNyHybBc739qhUVqL83pjYEEdocqehcvwdmGCL4nWGSdWfHRZfiTb78WjCUfVCzT5iu4o9JJLh3Ro",
  "key33": "5PLe1ztJqLHLoqNgVCJYnBJxUyZJXzHaP6DVUGUCS3NhLcro1ivZXijZP79itGxPcNED4GxprXZRr5nscgozPDjz",
  "key34": "2ydo8rb53PRqYKt3PVyXpCsWeoxZYx8xY2uAZBX1pNqv5Rw9JS63iWyXGu7NELyXdSD8df68S9QmVReadykUpeag"
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
