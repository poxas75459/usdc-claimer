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
    "pbTZfx7t47E9CrAFHsxEtheNopvbDyZxoL2kb94a3dQQfAk4f3kdi5iBb8KHr6SWMzPnUWooectJ29q3W3JqsjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42hdTuoVsG7VqL8FP9DSEtjbEY65R5m33RhQWDYqLPzQ8tXzn21irQn1WjboYMnKdKizcaWYa15jnfzgWvQDoVBJ",
  "key1": "7Rwyn6ikcBo5PaBKACGLhtjzb9mgetogfoWcYGPcSGfuvZU8F54NdV6g8Cwq2HVQVv4cW8Z586Da4REC5A3GjZD",
  "key2": "5Kz1hmoHufhqT83tZmhFZ2vaE4VoSvJcYD1qU7iBG9ZenebpWPJEJjbGkjZyir6YY9zbfzSYniNfWSt7GC7SQmfC",
  "key3": "3UEkbhgKW5rfzLo68ifYC3dsk6TPQ5o9Kp9PQgDZ2c6UEShSoaqkPX8LcEoXUkbRafmATzvscFKZtSDiR78FdTbZ",
  "key4": "4NUbtVWnBL7ks7Vw5pQgFKZjYr1ggvw7J5bmotKue97RsWrww5avPECjAwkVQnvhDwz9QCPcLCMzzhYMeBKCdpPF",
  "key5": "5wgsvnHmutq5781wyw48K9wEhSvpRyxpHLLpzwpeqwbZaLhPJbi17vXuWagzsow95bxBwL4yx4hTdA9R6yc8nito",
  "key6": "3gRvPFeUJRuuCCToHZid4JMoFFtRZvfgzKRemjxX8yTVvzsFufhTvu9NgDWPwFLncqxtBwoJJu45KWcY8diN1TW",
  "key7": "65wiZ3pq35tHFDWJrSnSSh7VVYhEcF4vgmec8ii4HRjh9A1QXWaFYmtEpiiUPtH9EBXTpzU1mbzywyhwHHgkCs4D",
  "key8": "3GGk5yAHSDsuqAx9yKci8wkBYRi99Hx1NNHdNEfkknkB5nMN8nGdoZPQpKZ1gy3iKeiwhcwp3cLrsPFHiE97U5Tw",
  "key9": "3wFoU2Bf6k3A8bHT6pR8c1rukGwAgrnbU8ot4SSBQUPLg5CZ14cxtHPtsa6ntp1QtxX4ck32np5NHJzqeqieAt9X",
  "key10": "54UxJFgsDVpkZso49L2EFJJWMzpXNvdm9jfeBV1CzktmRn9C7c46bQADR695qKZe511NAYodLS4W544cKbRLMupy",
  "key11": "58ZcMcazr5oyHPDVqLvkhSUVhpeByRgd87SvQd6D12kE6fuupDRKwShDiBZmbScXpc2nLMXHkzkPcGwwtxP19e8i",
  "key12": "3ATpanFs1MUYU87R5tC2CaCM2cxUVEmVqv2GvjecvSN4ZzaNupajyf3PG1D3FvW5ika9FMpVJJC55YEqqSSDuuao",
  "key13": "3ACeVPNGjLiVabtJssHmoi4NvTjDsdMk44SgBX93ie7ZGqBiMh3S2sD2EzveQGmarduDTM43f1MX84H12iUFB8g",
  "key14": "37UiZTqRUV1cWpL5BH7dQJSfNkDkvQ8WMGC9fHcbJcDZzuyXnujYAsqXsmUqi2kDNkxwTzVRMEevR8KbTXf9fMFH",
  "key15": "4ceB5z59dbxtsVK1hXNXxvZNnLbP6PipaovyoUandxsLDn3Ue2gPbQiiJGonxc2wSPBioGu4ZxUygbSUbZitKkg",
  "key16": "nHVrqDPGpNeegCGq2cu63nVihFiU8CoDUSTnqwEoL3DSfjwYfSEHG7RK9qvJRXhDomoVipmDQbdUf3RENomeZCA",
  "key17": "4x6MvKz6F36YDgUyppvQVLimuGS8NXqygqR8mZWp7tkRM9Tqxizy5rhWBC4Jx8PWRcuki6DfCNFxjzotACmC6LMX",
  "key18": "853hCAAMKhgQQLvDCxpnuReK67U5ybwwPKVRwVVsVJFdzFxhy9i5tpzkaLMtF3hvodCeaXUaN9pWL7vNPAP3LiW",
  "key19": "2qYqksnMpJ3yF8E9CvYuSqyRjDtbTMs4JCU5mAWn2uhiUYkfbr5txBqNWNAhk2PU2SojdLZHa5skjJeBBmpk7rwd",
  "key20": "y5mVPwN6zJz4wfMNxPuqi2rThepcnC77D83Zhughjs1ixhwdiVyUzxQFjg9b8W3PmJPw1UUszz5uBiJdiT2yBNt",
  "key21": "2MtkxQPWF6Byzc1AcDFKA8pXCwFhDHhiGq8iAdZTJaMBefW1R7atg5Ay8ShoTKyid5crr4zajFa5isMdLZZG5pD7",
  "key22": "4bx7e8DwHmBkLTmprUL4fUCpuDJrZCsYdVyEfHn6b3K4aqeBbb2Qk24Ke2bzFksg1Ad7jCEb7k9tGjScYKMEnfZR",
  "key23": "26AAAgHgPQPrCcXRZHJb5vwAWNMVWtbpQ9y7eVkBpcbMGCZaN5nyazjrPDJQCGEfYyeATA4Jas39zZ3aiMS9FG32",
  "key24": "5wiAysPFLRymMUV82CU1z72ss5UMoA7WXGdmeXeiTvdZytSEJUmaNEHPayFscCHshr44XvGuhGiTjku5KZQPs7J6",
  "key25": "4ZjdL9bzGxugEumE1UD549HHD3FpU9YAqhpcWWi8ZdF2JW6x1y5xw3jWMyUBnJXCqwGxinv27chKnkmVtMpzrjZW",
  "key26": "4n6D1VJGApqQ3vyoMq2A1CwyzAsf7ZKdNmP8Xd6MR9mHqLnzsVsUKZVMX5QUcZAVJL5iRx68dRiRxHxikxtWagfd",
  "key27": "2QaScntbjdTih2MZKvT8MXqzMK8LTRmLdBtk7PqbvBGGE649QZGsBAYUpcELoGo6A88xsiKK4khBqmbAunMLZyTk",
  "key28": "4UHSukuEo1rG6PFtn1XG5qDykS7nLvVvwETmGTZ5jpDSDB6JnpgSUvHofL4gxeso9SDRPJgCWXzX4D1h2i8cQfkw",
  "key29": "3RRvPkT7QcWXGGjwd8BhFgSErNmYoBm32xCWCryud8ZNFA8TB3zA4aQky72muiwyrgsrEopekSeViEopFmYFjmvz",
  "key30": "47tpqTcE2ybvnzWKXS7UcCLUzVg583faUh7ZHk11tFSpYJUKdcXeqjUx3tHiPHexobUmQ7o2m3m2oDkUUbFEVu8F"
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
