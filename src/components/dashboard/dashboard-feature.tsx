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
    "4b8Z4CJtD1WRr7K6eTQvCsQYdZDYsTWvTqsCvWVSKfUjXJsNjBECMkwsV32D4iky8n8Qc5MqqcWg67MhPYFwCVEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gtSYv8JtmoXNJHQHkQr5eTvqHVdyz28TkmNefpB4ENq9DACTmbMg7QMScPv3X1z8qNr9vRvFdKvWybJ3NqwM9UF",
  "key1": "568Suq5qmKRRN9tDoLGKsHxnunE1J2mi1X4Qtb4ueaK4F4uTeVEU1eong8GK4LGkCtnRHmyYP5SqkhcwRiDdWi4K",
  "key2": "47rHKWaxZU3a3rJamaCFm4AuLxCihCV74z2zwSmnQgLesseF9YdhFxEm1j8jB1EiVZG5TKBsiNb9F7JJNoFpkA2",
  "key3": "3QH1CshaLiiYLC8DEMPzxZxTW49C3r1i8e8QJ1F3gMsimAzGsfJ6Z6pftJnWrD77KrtVY9Kz5FhGpx25u2UWKYZ6",
  "key4": "25mw6UPpL4CPZGak3ot1w2aC8TN52ob4numVKDHXkCrd65GY3PmcgvLUU1FggRJhmL5kKmE7dno2n4FxjmT4R52e",
  "key5": "ZTYeY6WrLqgXxvGGspT5zNA9YtxpyjCAae53UdZVnjNxnbbN5Vin7wZfok9pRATqAA5VzqmQeEGHkeqFkegp8gf",
  "key6": "25khCTCa15rVotrpoFwyV8nbUU35VQZq2TGxdCZkCHCsMziJTobZPzjwc9T3B2K3yNxWrvBDTQusZzXkMA9D3JNd",
  "key7": "5psaqXmn8HVvbNEzuAFuYH6aXEgiUJWDTzBjceASQzkkstpLQu5usM9C5qC4T5547gqponxtZ6jSn3Jhc5Vx5XT5",
  "key8": "28Uyeh6r2naqLwTdoDNEoMqu6TaXayJg949825rgupvadf4PjmaDM7isgDw8cfEBhAyVM4HD5m28kxXjhTxb6QpY",
  "key9": "37AneAdzKH2R5AQR8aQaopq9Nv9UhErKtx1V66NrEDPuSVH9GFLJYvycpDDRfvJCZycoEMymTNggt7scNmz2ZgLx",
  "key10": "5fMmAhBi8ysontCNFXL8B737z8sN5gXevzUYBT3ADfU9Rz59FWno7d1ag9roBe5zXggyMtgsUECewqjyHbozJpyF",
  "key11": "341anXGFimUfZvGD4GXurGWAvxndcnB97qA5CHRYRyVJdHJK9godyKoX8BCzdB7hKnUN2qsHSBFSiqq8q7FVcHR",
  "key12": "4VRzXjosdh2oqUFeQJe4ZrA65vy2vbWkjBcTwxU8epYA5B4haWQpfp47RNpGM1hoWox2f9GxQ8BVY9RkrMVFu3h9",
  "key13": "5kq6i91FADJ34CNxtz1Rj7af5XAiWkVMrbVECfV5cLnPkpoVejxagXBAgAZXYY4AHiTBYeYhg6LEX5WhvY2hxyku",
  "key14": "5BWaLGfkELmfE1u1MsfG7uarM1ADxumVnXNp4wm9GNKcYrZHUTb1WRpwu2XzaHE3euUXprrfFHoqJ8oggHW5YJQV",
  "key15": "4ZKunfKvmQ4GoZGjzxBQLHMiZqYXf42fPENUXeyna9icC1PcAYsisjpJsm63pF4Lqg5bMSf8k1jqgcGMYPfxVQ5V",
  "key16": "2qgUpN3YNEabrG3wp3BQjEgR1KGMifWzab8ZixLK5b5pZoD1dWLokMXWcZq85FffsfBvfv1TeTAzNXqDGoHT14gd",
  "key17": "2B9Xgz2nS8xNVJENTopLaFHFvLk9ypJ9TAVSj1342qVRDQySQXiwQbx1BJE2txZsziGFXcZV4oX9A6ycQ8MS17mf",
  "key18": "2U2PbPLGqd44d2R2nQUjmYFq4p1Mp4WeneqaLkWKJQy3cpV5DjGrroNpR5QZUpGDvMG2C6TjZMBSXyxVDhpxoxMy",
  "key19": "APXxupjv8MPUwkh1kie5dJfEz7U2u7VC9WzatfzNe9Fj7qk6SyMukvFvjzvVChCKihHpoBchiTicasvdjz9u6az",
  "key20": "2fSTqJRWorA25WKfPeLrvNx4CScm6Ncq2T5k1ip33juDm285P52vbvM5SvBXcLWfDNFUSVUPSNSMd7ktFtyiX35E",
  "key21": "2Bd1xHoQiBpWMifxxpHehMXiL3sdCkurWUiKGqo7cPVXAr8dNZ8ifBQ9MeUNseKbTMiMvcYiCR8YKgiQBV3UPdMX",
  "key22": "3pDS4T1kJqbTHyDzjij41Wn66Rn7rHc7JYqwoKDPs845pHGDYdeH6ZDzEsuHjXdgn6K8z9Bv8pcsNpUwkeH7qhr3",
  "key23": "Bx4c4AWdQjjrioZKHMSEqRrHGD4sRavVyXnYhRfgHtYg72pj7qfwbVsuuYFJFKDi5f5DcCSCXU2k5uJK225bSMP",
  "key24": "5riHtiyvhLCRuUEJrLAiPc8HZTB9cZuqR1BR8a3ck7bwvdmWKNtGGBPAV8rvH8FEYnKSUkAHM73tu91zcd9L43rx",
  "key25": "5Q7YxFyzVDXSvLU9zQ3Bydfi9urYBCT6LuwyLtUArMEpdBYD25VE2kYphiBjqRVfrvbf9VNnaH4sibnyEfaKRrnB",
  "key26": "5HPxLjbNjfYuwnLwihZbo595fnSs1kyhYPfqQGCPwTvz7hAtbrXHd2xTdxSdpS4Gbt3yCRQNethD15QKJp9s2bp4",
  "key27": "3USyreAbRDnEPsmNqyZCEdfZmphgrwEQ25u3MSj3797miJV7aLuzZZRmFzacL8q2RjQu87SSm1ToBUHh9t2bDwXM",
  "key28": "ikJ1mmGQ2Fi2tD6k9pv4e8RseLPTGQHihvaC3APNffqGico3xdiBJACTKsB5ohGGx4ye5ct8U7VWMVXtoSDzZQC",
  "key29": "2GBH5bPnS5rjEgTpLmAqNYtFGd78nps8DPKMnEZajqawvgQnh9aAG79WrwWjQeu2VprG5ZzKf7e1pwHEVqwLy6P3",
  "key30": "3z6vaGAPaHzGEzfK7wjGzgeG8oaZYpssLHzncSGF97o6ANcTQEqdvC1KtGJxMb3p9dGY9WPMAFHZpu4MTkRAdEX4",
  "key31": "4JpbT9LTEH8joZjWmfaubg1aztnxf3798a72SMrskkKVYVduM6ojFEFaxEyuMohugwHjG5w1CqbDyqDyfR2v8qmj",
  "key32": "5hJikmJVNdAiBGXSQrx6JepjfLzkghB3sYLLCnURKkDN84mf1cFzFzhGhPVVwn4uKHjX3Y438Zcv3NxitCNZiCsX",
  "key33": "5FiuyAMu6svXs4mvijqdXXyQdSBrNFNETYTwjABRjiEEdpWZZeGk756agidvJdKsDBWTrPSvxJHvs1eQ2gYLj74",
  "key34": "4nWydgjPGJCDP1juM6bg4W1p4kafXQeCmdfzYufDpm4MbkFSxyWF656i2vHyLLRygP9vKxBBRhegGjmkwk8Ezgkz",
  "key35": "5FXSku9ektZint1hNWo9SQyFC3XxoHuC6fJxT6ZMjxgeEe1DAxzLafVwvXc5kXUFDXV5daA5Y1VqR2Jjcrf15iL2",
  "key36": "5ieUu8AgNCFGXUcqtDmcYrPhafPv6q8RHi579HqVUQByw99JnK9FyxhZUA5CvyXcn1C8YDZnC9K6fnNE3LZsiEX8",
  "key37": "5LHtN54GU4CihQEpw5mDsCiCv78peBdFpMQa8h8631VqA7TRS2y17XLkKB5VxBX7AUm8Lgkq4Qo2xCtm3kWdhUFU",
  "key38": "5S6daABafJas4nWypLruxPwkjkdDq6YgMtmnNgRb9U5ZXFLpzRkMUsHo6AGc94nLVasow9N9mgzNFKeBP4Lq4MRG",
  "key39": "3maSnBDHEWQNqYD5GMrBgjNW9vSLfd4mhS8cNE42ex6BBCm7co4ZMTyVkcKLKkaUUje5H9YH2DyXVUcjTDnnhmKD",
  "key40": "4g8GVuSF7ZTBkJhVBckBtwsrHH2uwtxgUomFAAdo35bNE9JXDEWbauejcrNtXQD7n9xMckrKtqBe4K9uSNmgELjG",
  "key41": "XCrjMBi7deu5c1iZRegRX2uExhEyv2X5i4Nc2yWaoZqLfZU9rH621BkPXnkp8A9kem8JxjAHvKLZZnVRkkJwC3r",
  "key42": "4hZTPu73R2JbZXLvndxbBjFg4uZbSffAWdoahE2kBtP3GmEWfUJy9RE6gdEhn4fPCnYTpt85ADc8GMNuD5Cspyyh"
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
