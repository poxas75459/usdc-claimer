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
    "2defoeksS2XoFBE7NfPxRN3q4XswnkLSwMeN5fjFWKtZwmr7hVtJbGxeqRHVofNmLiNFiENWcDNkAGt79D1tFPZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yRqKfGFoaAA3fjaYtZsMg7VozKupDYZB75ELwyW85bHkbVjff5zGMhBM6WAzXVMmSvTLwXn7KDpmZ9cHW1pthNc",
  "key1": "5LZQNh7iUCbeCMWB7KSW242tzAdX2CBFpGTCxEXdsXSw4JCbSqkNVTpHSGaLMmkKaZib6RcVxh2o4oiX9fXSfcnw",
  "key2": "4DDaQmj3tni82TW9bRMnjw3ApVnN8Bwxk9TZQSgyf3dpvekhkqpWAN7fVwRw6A9QiCEe3kkK21kGwWstvpSmeEcQ",
  "key3": "2LVdPxpqPpw5ZPyV1u4E8mPCwRWHzUT1UmkrqHGk5FyCkkfDBHmNpALhJ9v7fKBSbqt2sk93Vqpb2Nv3jGHhcev7",
  "key4": "49y9wcS2HWCNvGi59KRV1CPKMfsjD2hGN3KVsheBUysZrxXCGGKBpvBsn1Ri91WFanD7ktJr4kXLeuh7FCb2iz8N",
  "key5": "4BQdYfxhQqUbNHJTRyLUfEhpKAeuJgELoNagC3Jxhrg1qT5cNmGyvAFKRAxMeeRpPkgxW7GijXKwzcbb5y3ALWqz",
  "key6": "2my93HLpYn1YoeyXALSjAS4Rg6EsuWSLgbSvysptNWUqNL3wcfFx5nf54dgpnWBnGKGQNUtve32vnzTryZHYKbDv",
  "key7": "4iJvx5vpFUbwwKbctDCBmTccCQK2RvBMexnrUBZsSSAY368zufjxdokSebLXgvW7jgw6PYXYsxbDwLZKLwYZUeV6",
  "key8": "4k9yYQaN1bJWaoBqPbwuq1GXLY9uCBtVsWpHk31i5CrmtcGgVZSJez1uWmdvByh7nHzWC6CVT773ayZwjRWbVztJ",
  "key9": "4VUu5RHbwxY98EY5XFDtctqY8XVRVZ7Dw7JVT3hnAzFF2aUQCU1aShJgQJD3wRisyRuDLdxB5iSsDHWPLaRpKSs2",
  "key10": "3JtHBTUXEncFDaJyeKxFyCdbMdnBc66VVmZhAo5HCWKDEvF11dLuWQ3TMPUBgFTapYkH5KV7MxxQCUN2HHkMvRd4",
  "key11": "5qM56f1qEd4oDAKErdkYGDAbMuLjHYSwFbHFbW478FXmuYTZj2oMmETTDEYQPu84qDxwmgUXvUj4SoWmhyV7GR1B",
  "key12": "3ftBWqQXi7dNWYnUuQKm8L1yTAL6rupbeD4Zns2pr9eF4rz4fjpVhJX54SkEExaem35kDYFPuwWM26xBHPS9Gqt8",
  "key13": "2hbi1j3QgBRrTAk1EMDTjWa2pjxfMiL9tMu8aonj3MyhzqfcJpWCSdVZ834su4CE9c5q6UUkQj7yv4ACi1ySqbAh",
  "key14": "4FZmAtzwHEdLN5iDyqBpgs1GrLAK3ZeQf1u3ijiAEw5b8SYkn53EWZTi9sM5yse78KMgQmfh8WES8gBp1hryyTA8",
  "key15": "s3eLLzTBw1cVKdt4BFphMszHksFYy7YTq59rdm53b6b3Dgg64VN26zGwMouNZSzVuNNM3uGxAssB6UxSp34xguV",
  "key16": "3H3LExDQ6ENz7384ijAZWRErfeMri3GjujWquaSSJLBEjwWRD5A1vd3skeYYf5y7nkjBJV1eCWf46K3DcTkxm6Vj",
  "key17": "3ps3oSgFRrGGBPqQCp9uvpeut3k29s5d5ff1YmiLjerdcRGwqabAgmXeuCLsoHKxCqY9zx8qrpUqLrbRJs5Uk8Aq",
  "key18": "4tVTe6voGMmmb5FWg8CFBSVpxUZh9iRMYpQZLs1pM1uVU4eLDnU7FEMzyfeQbJzjmC1zJSFua7UZuyF6Vtx7G7Bo",
  "key19": "3rQfhLQP8f4srLE25gSwtGnmpZh2gkGQqT8CyUoM5963M3tLCid5gRDXN51ef8HQxHqvtN1HGWfFo8ix5nTKyCRp",
  "key20": "4W5veQEUb6xe4ApN3Pnzr9TKxdQzLiihCKbUUm1XvrWVj5vPUQRnTJkC6SsUXmbZdhWj7edBQsQWx8fhb1XpKXCe",
  "key21": "2uf8CRntA8uZ4YCVc6FuQEpdevnXpbdr9TsCee2EFNiLuJwxft5VvBY94SrFnQ6mnfdd7iKJVPgxjLQV68obLKFQ",
  "key22": "5r7JeM88dExj8mpUTSJJaLStfkKXbjhBYZjerMBj7bturxyjsyfaMdUNAawNvX7R3beeiQe4ptD9UnDSmwyzKJcW",
  "key23": "4zQcwBKEnSz5eaFUSqqo4S8AZTa2G1wRafeE8R4zCPQshMGZvLFdXWmWEhGtNpAqfHoreNRTYHPzrsSEGi8Padh1",
  "key24": "5aGHgao8YChXG5ARMgcXpwpx7VJccPbmkiQM4s1gML2QPP7hwKnnDtaGeqwBybMV6wapu8zPYKucRJEWNFVfEcRp",
  "key25": "BH6H6X6Kiuf8wvjtjcWrshSxf7DNL5tgu8z7PUSmXaKPL6ZwCvQLytFj8Lcqmvpn8kUfqusSnCx7m8VzmKQrV58",
  "key26": "4ZuMmhkJFi7YmJWR2bQoicU2L46K4oaFi9mxNiAcesVYBDa4rcchPTtYdU3AwG6vmyi11TdTHb9kbtNY9iRuk69K",
  "key27": "43tAyqpY679u6Y723GARt22Y43cdpwqGSwPJUJX4zpeU3hgDjvg1KyFrzRpDEwMv9Pa62DsznCzBTjjV1NVUygg7",
  "key28": "3g4SHftosYsUpDLpg17Tgy5aBxNvi6v6SPFoDtxmd55YN2WW3XMCCstcEhLg8UzhvWTxHpjtJSirQuvrakNxWbxH",
  "key29": "33wFLgGByjtesxN7RQrkb23uKwUfYHnJBGgfBu4i5JZJ7YqwEGDbnvphiMhbtyymvFZM7U9QcbVGk6RY3p9A24vK",
  "key30": "rdoTnCa1PfDuHmkXWJ8UGdvtJnzUkgMrGajHsNEQ21wHLPFg2KJbo6qJwa8im82rUzywyGB6eM4QYxwLmr6gbK6",
  "key31": "2xFGUAe7AbpAcr2Hodct73bfdHmksKUCHwV9tJJ6Fihg8EkVKstjsGmXCQ4QXaNyYDK1diHyfbFAsunXHFoXX2dM",
  "key32": "YDbg6zT5xamvS2h1jP4ELrCKUCocag1hBXsdWc8Ze6zo26kj2DhvKyC8sfHrKM2mavLyhp8pTqU2ct9AavGhdKH",
  "key33": "5xMgTFMT7xn7fi1pNsTPQBDiGZBBC47eqpwYEB46HxkqUry4JTPdxgF9Yp5WVnNY8zmHM37d33TUC8nugCyWQEWm",
  "key34": "4TNfiaTbagmNrwRYG9Jz7q1expyuLRNEDtLgxNynEJxpxhQHj5VUvgL7YRS9JbgJ4abaBGYqxjJSaZd8EEd1PteY",
  "key35": "2dAgec6V3cJB1XLbQ5ogo4CWvNDbN8At2aktjjAzhv8ipL2b7bzvKtnanuPaozzjc89euuf1rNUnYccqDzbrCXZn"
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
