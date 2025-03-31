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
    "3c1BeN7xsLgfM1i7fGTve7CSozhbACdJD2GRVLsY5cPwcKc7FWiCJqAL4AL1D7CXBvmwRVck5v27Q25LLAZrprL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q7sAesy4HEjCN5VyyxYM3RTvwD5mRjLCaV2BnUKARnSgPk39ph8rdkXMnawbtKqUiu9rKhKLmBKqWxQRtPbM6Jb",
  "key1": "2Qto4hofQ9PiZV4s4vq1dYJfoJcBjemes9dsj4RKgqvYQGizjfqt119mc98vMih7fo4d28MrVtP3tvPm42GYunZx",
  "key2": "UmBJwLiavfYvZNhMjyBurcxjwo4cvJWfFKZq8NWGGcugxNMgkY4zZHuGxvpUwVNBtgcnGAWGbn51a4Yj4BYmD6w",
  "key3": "4gKYy2H6NJpobKZPB6DZseGs47wsgM7NoigyRBFCZybDExHPGUBJybbYXoh8PQKf8J8uojaSDgpTV94KG4AKxbFj",
  "key4": "2QrX1L11BKjTRb5H5sU8f8fTYaeRDgbcZAis7cVBo94i3dL7io51HTsk7JRVPjHSnVNPQxgZ5u1bvKoHUHaZeVdi",
  "key5": "3AeWYFyQWNfGmYp3p7hFjEXyq4DGCv6oVZmvKEkqEjwkuMdESxx9ChXXNfJDzfy9HkwVwqt1CJp5oiX64EWQCBTA",
  "key6": "4ZjjiHD9LN3KJ6jTJkwED4KjG2s7oYUqCbBDdZ168XURtQfUbRqpxBxkxND2WA1Damv4MFAmL4PKzju5ijzhe7q4",
  "key7": "wpo4TvXn4Dm5KMscmZDs4xgmf81CDkq5FTTMUX8ZRmGY15f35Gna7N4urZ5TLEr4JmJjXDMuNtfUKzgjhwrvdrP",
  "key8": "5TZiAkpFrsvT8K8SAMEGoL4Ma8N65GNwVS3tDdXjQ8kLkh9B5HF5ehQB9GfigWGeuSCip45Rw5qrQrFaNtSBgXGP",
  "key9": "QfGYCpMwkyR7enG7wyHoENE2XB3JEfjRRBDssoZyfZDz8b1kSLfHCjHFizvo6WePMfr71Jynr5eyhqfqtQjY59d",
  "key10": "52mGY6NXbLWffPe3d8mW4CXSH828jSHSdUGBdrRW23rmnDE4X5FbZtkaQ9rSQnz6qYmvd8MikcjPXPdmpTffdsQH",
  "key11": "5QokAnTxGFwkFMUU4ZWeEE5zxfnPmQg88qr6JrsvDmnoDFfBZC9BoU8Ra662zw9855wqE5Z1HuCGiCiArwAhXwkB",
  "key12": "4wu93oFkh8tmkRfe9ijN5XeNefMNE88KzE1xhy8JWccKYs6h6YAngVwgsCtaKDPExKhr35e6KvcXYZ3jTpbY4E5W",
  "key13": "61KtiQuHy747hkoQ19SDcpoV8Wiq3drUKRqx7Ebdp3xo74yXKrpic7icWHYSWHeUbX9SFGE6fM2ZNwc8s8zGjeYX",
  "key14": "3CSZ2YmLMggfaRGcKMso9pCb3x1RXKWxDA4R47mP66doyH7zSauc5FAExQKyvhYGd8fUgJHdL5zor4iQtpJQk3zC",
  "key15": "QyPYH6yAcZarviz5Yo3YyNUDQZNPLpKxDShAikSsv42uHgeDwb1Rbw9cXXEPnSHmuahTg14EzStSZgHM9tC8HPW",
  "key16": "4GqubYFYhaZWnYPLNkCdiM1aRXD6BoAHtqoDDrz9fargNi2dWuyo3yv5JEM8ujPqG7neUQovd2mxXwgoe1GFq3Ft",
  "key17": "4HrKkz9fxcPhxfbvHWL4VLogXuz9xsjcfoWRPfiec4EiRpVrBJPWzLYTcig1y67JQkWsYgoPe6BY23ghxpwep4KS",
  "key18": "51hCaFxiqjKcR3FWZhuC4BygmkdBrichxJqU3ALfRujsCzrMDeUqyhUgsNRLCXcCebBuc1Hvvn9QS8pwLWxerVAG",
  "key19": "GeSrfKa9FFRYDWHTcGm3LsLfkV1ECMHN2KUjVdTceRJahzWCUtn2dRBhLsigSjdZ3i55mnt3ZjhgKHw22cSrmTJ",
  "key20": "2o4vYayrLqqzUP451E7NfKVDnAV5KQ1ib998YqN6gQp5Wg3uetKWCEWZ3LLbMF2NZk9CcTWvXRUd3GkkrdGdmXnF",
  "key21": "8RdupYJQXAz5CV8eNuv4fd7HJh4ssUWSW62V5Cd4m4L4isqwAkZ8etWsG8wduAzbn7JYBGehGHsxW8ihxK1iHtV",
  "key22": "2g9zr86aXFFNJT54gY9erwagVQE4Np6Js1jaLpYVhAyj3PxP1H8urRaubtSKvdsca5W5Y2ox9o7zK8zDvaCjz5xk",
  "key23": "49MWqpn7yWzWbFJzMzWBHB8EPayGg28g4K7dtBh18Kdo6hXGSjvxc9yf4xWQEdxxT5XwkcVfGkLtaxCtELYr6sUb",
  "key24": "ewkCZ4YBzjpgSQQ2efbfYQEVDxqzeap1LuBzCxTD3LfH4KCQwp8Hs95Xat4hy1Hb7uFuiqjBoHaYTPDXe2oHEZk",
  "key25": "5bcfEmsLEEpj4MxDfQmg87qTRfBpE5cuRU6UGxxG6Djrk1omKRNFF29osKVfTzBzf2w3zePTenJFNvByV1sqWhdo",
  "key26": "4XAjYfds7q6qrwTSvx9Chx3HgwGDK3WBEG6S3yAFkkKPZcBAjcLEg7H4PjxAoSpqTpdTp5JQFgWV8DfajBFQq5bZ",
  "key27": "3agZsNkAzNJPz5egSZBc68bRvYgWbWkMaC4ESSNZ3tC5FNmM9VKcSf8P5iUCZysyuZgLDUjrJxQGz6ex9buQhXSc",
  "key28": "3AJmu8N2CBEFoxrpa5qgadREg2xp1jQPd1TU9MtTuJRftCNNiySs5cCpXCBttkQNnkAKBdBSU5pMzrvyMAeiL6aE",
  "key29": "4meKxWM4BLYf9rQTmaWgATuiXKcTYbeYYqop3P16m7F896zB9hVPxLGswQ6NWoxq1nRRXH8PvBfvPS6iPV6e4vGY",
  "key30": "54saytZeu65mgGbDzm7hHkNE2C2JGFCkfe53cuGKVB8VS6khzTJkXwcPSCDdx1LtYGHGi8Gn3Z3Syt81mDcXZjbL",
  "key31": "3yhwouXm2Z7oUsUmz46Qwynx1fNeJkU5BvazPiAZatDuCAnAJ9veWkFrfaVKJRt3JS5sVEMXNSwgHdJMmUFixgLM",
  "key32": "53fMoD8MjRhoSr2ktzmgSLdKhYFj2m75wJyaBBo9tcV4ht7B4uj5aDiJjJz7Q66eUK3a1rDwHk94roHTXJDbmMBK",
  "key33": "3jjeBdjSZWxKQ62P4UExtiZP1v9KQefFSCHvqGNWNW1x3Y2gxUSjn35cjhrYGFzbzaX448s71zNTS9fsFi8YsRV5",
  "key34": "65s8wLWv4PrZzjvMwXpUfawi5HrqGB3SQjwawiRQX2VWJzbBEUSYUAsnZmP8mXZmLtKe4A4fbb1YrCZQbQ3PmxJm"
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
