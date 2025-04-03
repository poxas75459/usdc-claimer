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
    "5LD8b3Zp8ysiY9mphiNdLiJdTaVT1EiE8bNiY4LLJRq2mRWssX1iUeirCtF6tiAN3wTTtMWEWvrDmpQeXTJniCbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62uix2mxJBZuswUv4cEJfdD1CEV3s8aX1XAzCaR1EVpfyCZNsY5cLm2pZJ1TZCPCnWFNdEgEdAmyPR1vCQQxCFDw",
  "key1": "2qaiN6WhkrV5SPojAogaG3ae5n69hWGq2DiDHUESbX38N1tQzp6NEoynWSQ5aiWmEw9yrrSnWiqsLGm8r79f99gy",
  "key2": "4iAkoX26Qdi9P3op3VVV8BFdXVv3LDWsUKWEFCTgcmRV1jpnP7aWaP51ZQXfzduigPV6jnYa7pxY6vyc7M3xNFJT",
  "key3": "4F8eTB87WK8UYhH1e6CZEvvdLpRPmx53Zzx9JVKd23yZruRhpkWvttnghyZXdoHBg4xQBxxWZjdNjXU4Zn3Djo9c",
  "key4": "Vcp9MwZdsCBGdxaudU47jEcai4aar4gxS3HwDuwmeZi8Jno165mbwkL3LfGhrDAnVtEPeypUn6ErbnnEFUv1ufU",
  "key5": "2tbKn1DWisRqK9rsiLV5B6hsUmEcwWdJWDg7Hbj1HgnEa6VVvKacBPJVtW2LNBZM9AP1zhhJ91rEm21LTvXjoCka",
  "key6": "4hjVX5wuKUdQ9woh5bA3aqn6dqyobEfu1iQKTBLZBm9jKkwENDtT6vyfDdYXj54U4S4SkqtVAMBu77yFRjnLi2sa",
  "key7": "5PQxRbkmdGV8cSmpWnmeCJnRpoW59HBQwKZZ43Epog57pE8xRuhL1kRGDQAn7Q5BvVwmhN8W2LW9M1DibxYgUre6",
  "key8": "42jETuzUUDTkxNJMwiyg4sZsmMZiUS1BpEFwfmff1pBs1fkxZYU1HomFvhZx3jM9QqFKhedKQX7bXGzjH5tcrXn8",
  "key9": "3MTzJ1HJFScJ2XKp3tVJAbkZapFyr7qYRhZ6F93mRcypGVZbuta9DcmMYEtBjvfkeuNrEh8roy5PpWHWX7gsUMBa",
  "key10": "54qUS9Lns9RRXidTCSXuEiVVuJVponTaXNgSnnCvxB7DdUhggu3MQ7gX8pEwRkCvZ9iAGKHUMnVrvNSoyoisW6Wj",
  "key11": "QoGbwdCXqBnRxt7hGZyF5e6dQocHZm9DgCCeK9HK2ijdc5jjCSEbbVTUF6sdfRxuFtBNpoE2UTRJiJtKVgaetBn",
  "key12": "2CPHAsCAj6uFV7DUq771Xg79Pauk4m3PxYdew8GcLCiwcAqcSUwAtkXdtF6ZmxmJgpEjw7NtGDmxAFTDaQafmBgQ",
  "key13": "34f8jd4EnE4r61y39ScCCsj93hdxPVkajCU7Q9HqUV8Hj9NERxnzFj2Mzd3eYXLvtudfgnvv3XDfXsZzotTfKFHT",
  "key14": "4XcwLzep9yPs8yHWPFHDHSxik2tp2R5yJR6buxmRZxGk4uWYFWeWKu4i1u7SeWkqPngGj7uurmVznSNzpRQSK43x",
  "key15": "XQU5BAbAodwWZacvnb66qPNpLvbeZt63hSaWzi5EciLQtRcNgff6t5YzxBMK3AvhFZ8v9woUEgC9u8U8Ezvtwpo",
  "key16": "2HAqfU7VFqUxqj6kfM6NXGL1cCEmdMdSic4YM8UPHDzSvoLWN2oTAtDSq9gmZsg1pmArzpDZgFhBipzsT4J5Td6S",
  "key17": "bYwFiKWaYm8jA9htwJQ9ShaSMkQHghGgnzZsSeZMrWifRY85x3RGa7XxFeav9u9MAdmpXdwkHv4ktksVsGUjDSr",
  "key18": "5sddQb3CfmD4A8oiN8nTBrUp9uMrBkvWzyi25M5RMuo16rnuWdwZWPuEEVmS1viTChchbKU41PfXfgA6X3mnybVA",
  "key19": "5kE22g3NDmH69Wx3hYfcTShDsKs2W6e5M9C2LnxvtgdyDDpkVmsAAoqXcNmxuoBaoJKTxUR4xwaC9XByXTWHkyCU",
  "key20": "RaR2dhfd6eueLMkoXnx84cTKCxnh8HSYyYgyM7tVics8i7mb1SwDGNHbQjPxX4Pbn5WKTHf1jMsN4PDKHXtEPzc",
  "key21": "5oV2QrVMkfcvKkJ9AAQsPxRbN1vrrQ5PCBD7QH4KhNEzcngnDfyzKHdf8u5wkHRrC1Ka5Ra9EftX1T8JBn4PThH8",
  "key22": "3C7GPrBY7KH1xsgF4ejGUAZgaMJ8SDrorkRVPsyRADe2QWPtLUZUnmTAsPbC7rFXZiiLK5QBYAxZvR8zBhFXL6cF",
  "key23": "4NqivYX8tZGEuTBLQkmuSDP8pj9286mV22wZqZSMk6YJ5jwCMh48mhTkyrQBpcR1nW3CSeXpNKE3KfcqTWbN4h3Q",
  "key24": "5xCrjytP2X4aM6BZphX3cANRPgKXsLvG2KXfTacBQ3RnrZB1MytD8qratv8tWz5CSv8mY1aBZdNkRR73skvKE7AU",
  "key25": "Lh1G5iQdaAgXyR6krTxM3kHTo1zi6915Mj6K4uS9HoeE9YNHVzW9hXY84ScGe9Etuen6WV7KoQ3ErPDzKN8uYYr",
  "key26": "5Sphb34we5EUpS375RBwE6TuPximo363J2e5cVfUqRVjpiQNYjQVgoNBk6WKTpnTDoi8FJRgtpNRVid6eUyeSdUe",
  "key27": "2ALPnC8mBhk3UuGVLbeZnqJcUS7t9fBo38Daotff8fcbRvex8dFPxQ9zL7jQrZNCtWhTXe5LwNaJWmWrWY9dLL5H",
  "key28": "YZc1kc8jyXAdev3zirpqHPsTFJoTNreATLHhSEErU5g4SAGvpbXmmEa8FAu4ZzxjAviUfJzcUuvnaFjhbWmW2iV",
  "key29": "4YLd5jZsniBUccLVe6XSNfcfKjH96bETmdrXXXJvaAFmhyuzZo5d9ZdNWXZHwG2RWv3NpLCjddMboeEUXoqX3ff7",
  "key30": "2FaXsJbTvHcPRsUx9J2fBUeTzDRhD6pDpaLvfncHy6BAKzBmdtQifsmjY2QHhm7id7KdZvw6cg1g17PaozZos6Mg",
  "key31": "4xRgmFjP777uajiXdA325Z7peVnaaBAMKVCFTe3GtJje9KBCMZ6h4eNSgFDCQAHCxAxKrsBns5FfNq9ZqBNAAXxN",
  "key32": "2c3LkKupZFUwNmv5ypLZ5pgQg73Pce6CYUae6Y3z59tkQfCioNdoZFTcsJfSvCaWXrnhZKPVWmqkkvGeMdfzLpBn",
  "key33": "4ATsToADwumZjcZFxjJLvCLJLEQeN4wjc2bH2P2R3kpkHV1SLpDUL5bJg4ZyihNPzGERZMfCsnzTvdaUMuNfDH5A",
  "key34": "3NvJLDvMEePqVZRxwQdTmPvQViNsK1mgmuLt46KtrXFcGg3YTq3M2zdQjDg6H32UHAUdJsC1T3hcn1k7Ps3f1qmS"
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
