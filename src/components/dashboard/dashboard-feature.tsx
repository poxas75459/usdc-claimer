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
    "32qf8Agv9zKnTspmCZ3W5xKsmFXyonGJ5xP3ykkisAYv9Vwtp4aAYU7TBAbe2nSU98RvTwDXowtfMCKyTkerTBgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JtsaDQ7ZNBbPoCVFZ6CEf4uo3WbarQp8o71NxuX1n4sj3aCRnpQRZ7x8dF4j3Q8Kf6x9jYtv3bx9PT2zxNv6fuB",
  "key1": "3oqN3SjdRxXMer5AaKcjB3WKckXMohWmkKpjcHzxb5rsJprvZd8L1ygyzbVv3CDMptjJYDxdhXSPTSB49NAsniuJ",
  "key2": "3pKhTjjHUQEKWWhyVQYbTLBdiu2nxZ9r9FXMjJ8rDPWMHX7c37hT8GuwdiXbpSGFayuvpuwWzAvDiQceZvV8bRzA",
  "key3": "24KQHxq8RcZWP4SuXzLGJMskYYDZGuzkfC9MkKcTEHyS873tdN2nBqw4JXAsKpTUwpqQaByeRZFmgs9W7VWd6XR8",
  "key4": "566MSHiaTGiu776VfSAtEKjT8mt59gLctavSovYKxs7yBr93VV8hbVaMRAcCkBkrgLUjKV21s7g3Z5uiy6EpiTqw",
  "key5": "5q3uutQRM75K3HRNkhTBP1S9UuCNjQYpuGtbpAKpnm6oZwt2h9sWGRDuZtnHwDhVsMENBQixRSu3fdQ6CArF9LGs",
  "key6": "5nEn2vdyTSwemFqN18LUvZMSHhmSn7snKSg65g5Dq7TDCRxnd5QZYWf9E8YhBGRtruzqbxfukniLukcVJmN6n52",
  "key7": "4QhTFrhjLMB4gQ3WjRqgvNUcs4Geoz764HXLXLQq7j6N6oQw31ZoQh7ZRPQyLuSPQmYL3FPunpEyteKZX72yWtCt",
  "key8": "jDFjZ8K8xaTMYkoXqMwEvNyNa64pKQ19hCdEXtyq4tcaH3KxLrQcUpRU3N6rj8iY5f1yNz6gMq4dz5hP2nXhvUQ",
  "key9": "2TYTtvAqauUr42dJpzdx4j9qUHdRwWjweKtKhCRyu5cdSEwKcSKw5g97BGaTgs7LtUEMur5DQFnnKxJGPCs3AdZr",
  "key10": "5zfeKfHVP9szvPiwYrSmosDYNePvuhJsXetW1CQg4WRnEGnV8opAePyozax3cD26qMN2HvgYqkULZL3JA9ZmMdgq",
  "key11": "5gh1XQhYC1tkyg2qgGfCWfNSqvjYWJckadqvkXu8SS2GDF1oGVa9GtZDGszoygKus3WEjeM4QLYsNx8hTtpbwyx7",
  "key12": "66Yh84QPrzoHaFubmgsEY35ss8py3fZvtaCDRdoH4GWgkzVjmxd7NyBdpVs26DDWy3J8M4JHtY5bVr6HvSaQXuL9",
  "key13": "ZyQorngrudkGE9uCxwWzFqvFBba8mJGryEKrUtPKEimEcTuDpCPncbRM5JzUecTmvKQ3RFfVc1rUzx4KA3BnesD",
  "key14": "5XcRowzG7gA3FU7EA4eG5w3Qu77aRfvwBk2waNTWnDB6gvoQYtfJksDriiaL6unrG7q2fwzCH7DGJVjZMuGVEhvH",
  "key15": "3YN8iKNQw6BikeP9VT2KAniS7Whuj2qutV1BC99Y2SzpdtnfmUFkfWGXcrPtMVz3iXmq99VUKWjpcfTJGDwTKCHs",
  "key16": "3vG5YCaXrs6mBZv3JQfaqt9vkLMy4z1LdSUXWuaA1irye1nHKBKXy5TZzDNi1CT1mLZdKEtb5rpeFeqZnJnDegqM",
  "key17": "67gT7vtLcSUujTSw5F8AJxYsJa4MfVMkuSCeEyFWDz3HrACY8ZxB4vw9ayjBYXEGieHjg4pPhgeXbu5EiS8iS3Fs",
  "key18": "64MfXSbwneHDGqfbptU8fHum2CKFTTbt1NE18a7Rp38tJPWuLJEMyQgcnejbSi7Srfrpx9NRTBC1i2JoEPmNRrcy",
  "key19": "5NQjbdHKBWvkoN1YBU1jA6q6iQJ2HTJ6zXDoKgD3NvJ2ePJYWRQcTACsFAvYe9Z1UookUTs8RQYMBL7zfGUHyspn",
  "key20": "1zPDa6ign2F6WY3z8TMkseHrUuzJ7QL42QV9kyxWJ3GkyfjwYbMWT2UTzcg1EJ1ACvMB3GtVt6vJZSVxoMU24Zx",
  "key21": "2AztmhzWmi4J5aYPvZETi1VVZT9ZLTqkf4hERMW9pN3uoJiZUfuC4J32QrSXNYJQD3fBcXmshkGczedxiQZFyLaE",
  "key22": "9Wf4iZGMXPNnvFPoYDkFX1LpDc3TFN8Epu2RrXweDpkNgvsqq3k2ePnAbBmBdU3a1HYqa4Qqh5t1uECxmBDFScC",
  "key23": "2q9mVeL4Mp157GCHEtvNWBXz8EQgSLDQDfjjAkABgsNoLA3gczPTBW1gED2a3FyULJb2h4vi45PEaSdSsKPibLSW",
  "key24": "4GjMJFz8mPNgPsJmtud26SYFMzRtLGwrZoznkGrDuEAsrwZXEU1PUBFovvKikM2q4GJSNzPQmcrz3KUwtKTrn2Ju",
  "key25": "4jc3JLxuL7u4NbB1ucpncVEsiwDGyMVHQrzyLGPK8PJNR1p3qgsJAFc3v6tWjeMApfGPaFB2WB9XjdxpNs7bUnCF",
  "key26": "2Ks3hR4svD86fn6fbWPvEsEYgHBPS1tvS3kGHiPkwku4asQFXkbx6N4VgHEyqmwY1BqhUFJDieoottpVWA84fV19",
  "key27": "2MMi1mzLSVzf5rFhWtiV9742LW68fWw4TFFmup3VBkQFyyF9pkREeAa93seH7JNPfr1wwm5YGb7cHBacPrChG67k",
  "key28": "be7YMhztnwQdh82ng9iR6XwDyRkCfovVrxdGLsNpN7imsjL5z9QBniNq8pBeGB1DwRgD9C163UB1sgSNDoekGoU",
  "key29": "5sXQHw2oZ1pxXiyy4BgavQkqBP9zydTZXFwQr2kuQuD9GL1o4U21Cb8VRbKDVKPtL41NkCX5dUY59NwDNAwDTV57",
  "key30": "4sRs6e5wytmm2y2hjVJpwLd7X9vJJe5Ms3AqFmSKzztMZxpELxbYPLzy5VTNXuGJHJEaEDceExG9d25zbBsyEvog"
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
