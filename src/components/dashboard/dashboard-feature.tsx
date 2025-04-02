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
    "Qwv7cHwnSJSKSLdeWEV9rczheL6NXH16N5ix5MPBiF9jSbgxVHaSuWAUTmm1b9oQMHxkYC6zwB24aV6M8fYPNcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZ7EaUPaN41oWtAnYJnTWZ27aXK1w9UFWTQ2UhojhT2bC28Y9kscqpp3qUXEZQY4UogZdvRZgA3ac82de8sqnYh",
  "key1": "3QJHajiGNjeaBzdi3CbJRPWromF2b5DpQrp6umjjzVBBRgH8Nm6uXHBrRbehtWQ4Bk3g8sehdTxQUrDFTsWEfrGp",
  "key2": "jT5hC3AT19ZeKXU6HxDGYkghPe1bWh4wUTeZN1Hkr6pgKw4eAXSBNh9vHyouY5soLJGr7NQJEYhh4swtgpQfMbe",
  "key3": "4vbsqhFnVwuDWtQohvyUHxsxXRccMMTnTQvYfS4BhMo8gbs7aC7Y2vjqzgHxCQvfNCV9RKpJAeGqZgpM9BfF54Rm",
  "key4": "2vzojJYqjhD71fktbSi2ChRax31PoPbRUzsgMqZDgVccK4wib6PSVkVq5F4Fi1kHvkWoE79JGn3kF7t1CgwFPc2v",
  "key5": "57RR2iApgin5JnpP24Sw6zyskknJaetTipf7HU8VsPJxpWu6pHJh1qVbNhiGzXvYUN5tw866ffkSBduyQN3DQBdQ",
  "key6": "3LojMiSio4b6rkB37YRZ7KyjDiNuV3VQRjHZ3GvDw9Mh32e6ijpAEVSMjKWm5P381br5k72Y3RgRGYuokQbiu9fd",
  "key7": "5s6uAmuLgLjEvmViPZC8cmrPBMKCXWVdxtBmRTCsTPo7UsqMfhte7To2axCnxP6zvRvBUhbYWr4Jif1CEAAWiwGd",
  "key8": "4iPTnV8axJt2wyaDUSVE9eLzMFU3fvAuCjBgSaTWx5SArkPGbWLsWDcNAo6RpjDiAkHmmoVwf4pxhr5AnKLxsdG3",
  "key9": "2s64dpU6Uuf6XtS9XbP9QuKwDXHJLfQFkWKePtWhKHzCBw3RHET5NzAMmvLqwR2iNA9S5TpAdcLMNWFT23UXKhB2",
  "key10": "sUUKmoNHeqV6oi9e3h7rKs1BNxyCDXtpv6TArHs3ZUmBDSoGVuv6UopayPaNmbpGMxJBgRgTLWjDMiT2ndnrWw4",
  "key11": "HqvW2uoCgzPWKr1cq5cUVNn4pv9B4i9cJSWZ8oxSk2nKhSb7LfTvYJbia6Qo7rCUfD149JNp7UvzFzkBFRU7pTv",
  "key12": "x2vCFvAHNc7PrJcimuEGu8Yi688x1jEBuUUafEWNfN3zn3r5CTGmbY73PbAeF96wfJRJjh57LvYnpgVc9gc2P1n",
  "key13": "4jsaVKaagHT2mQTupu5TA8NiYf43kXwZ7vZ8PnDoAW5kyPT5KmdEuLMzzXMzeuwq5qazXFSpwqnC69KXx3MkVaPC",
  "key14": "4teqtbKWCtxuSY7AMpUt7dc4BvADcX3KBu9hZwTyV3NcZCeXYUrr83JE5Jkc8ChydKcsKnoHfqHDPC5PrfyRCfUJ",
  "key15": "3LGZHTyCSmsN2wB2wGLXFsSmYZGM32LAbjxWucrnHWe8C46MfFycG18Ey4Dq4y39ps2CPiPgH9dvs98yuZ2TaAbf",
  "key16": "3MRdrUUrXrF3kAnUo2xiBUdqHiHZ6FdQv6LjPWHGgbKZqgcsGtHwBBKuwKjsasr79RXqpCfEFJzQXUXewkHjJQ5o",
  "key17": "2ntqZxxuxS755Y2Hh38YgoiiRPxnhWDzhTwYCDoirFCKzNYj1eo19pL3qrNCR1sQ3bZ21qGQBoEKsfDdrWNne6Wc",
  "key18": "tiZByeY98WdMYQuBsmpK7aKuAJDsU8oPhe2U2HAR6ddA5CKcUnuRzJJ8GJj8CKFqe6JQUpsbJLERNYaAdDzFA16",
  "key19": "2rU1ddL2WmHdmnfnWjRXHmJjofeyCX4XFfEaA6G41kjM7jfbuxGEYmDiLfZhf3LvtEsE9x8taguesHT1MeyXiGN1",
  "key20": "3AHyhgmzYGmHxfjfHiezrFgLJi3mJ5U1xdf5bFNqxib6G4NfLFqUYDwYU2WkR2A7NLoJkTauNguApei5jSkzKjgY",
  "key21": "4R6kh8C1Jt58LofbnC3kRsEnypQ8Sx6o257Lm4DiJrCjw7H7PwKyEpVsa2WiZR3CNQj6WHoK4Rs8Mxksc3nMeNt1",
  "key22": "5anG5t5HNVYv5qxPiG9idSR5QKwgxccqDHmZBcy2sZ4L3fpJJj5NtgrDgArhKMyFqwrpG5QS2MPoMqG1pTXrZVFJ",
  "key23": "5ugF1vFLUch9coNKpeASiLr4JxqXfo5TTyidESvFwJLKkbBQG38SQpwak3YBpPnmj9dB6E6iesMdUriPaMZUTtWT",
  "key24": "29uCshaHAJe6SPQGDfT7sYTNiNgYu51eShRCjdwqUJWdtjh6K7fTgDPeK754Xwh5X7Uy3u8nmnQZ68pHTkUgLMij"
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
