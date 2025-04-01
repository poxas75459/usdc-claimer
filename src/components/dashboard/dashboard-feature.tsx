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
    "5P35AquTJvrk3mJbhUBnEwcSNvSR2Yyo4mtnkr2rz2zKpwUVDVdaSD4zVaqLJc4WeQYGN5ueHxoBkuQx19c4QuU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HXxjNpiMzG9qSS9USXV82e92UeQoAzKsDFiySaTWt4FMxDSGbRdU8JFGr2wDBtGFrpVQiqXs3E7Fv7pJ36yVZmR",
  "key1": "3hCAJ97cLckTCAwryG1vF6ZBEd37ayTn2HEgjPdUUazYJYzWtZBr6jqqqMEnCgG6TQQAdxM9wmBZ7tT2hA4qYiH3",
  "key2": "4Rokf5Usxkmo1GKXgbAg1HiWtoaWg368xD5ZbAcNT3uM1RAajAFPUDLnLp6EtN5VRksR3jkW7SUqRn4MkN62XgrB",
  "key3": "nwGrqYKizGNNiRxubaXxKXNrAM8PyGH221uKYNK4DmZ1D9VbgRmvVdfpPEyUxeGTvZKPzPmLoRyUuji1RVM8X7B",
  "key4": "gMij9xxdUBw9z3BAjRXiPVJx2uYL5zsqPv4iNNiiiNQqNv5Q25oojwoNmt8mNgtMMdkJGVFJqFmAMsvXXNLq83h",
  "key5": "iJtBmyC7S6zNeGnsXL9AqQo5sQqmyKRRy6ArCXyRX4FXKarJaj9JEsaEz5YPH3mEjjCYm8gdJV3QRANiB3svxnj",
  "key6": "3hzp9e6w86MZTkjbc6UsGxaV8TpYF8yqCHwsiE4cqgvPuACNjV5y2DsjoqvRb2GjGkFF1sNDGWyJPW21WPL1zEdg",
  "key7": "5fRG5nSLfo5RVXMWBaKU64RUDr9BVsq8EYBZyiSJU5s4yA2ec3gufmanbjPmn6DTHUcDKdrHbbyYo43Fvpx39R8o",
  "key8": "21fpG59Grrxzge86tyUnYTr2DFWYomacAE4xkCT1PpE7owrxai318TPpMiH3QmEQoenuSzyT8kZ9DhLXLUXe9yaz",
  "key9": "2JWmkx6j8BvHKYHb45J8pKtQcRmVhCoPv9D8m8w53FL49GhTUtVNJFhyzu6THyntphNDcVCyM1uRWLhkRr1sPxve",
  "key10": "27ZPVtwgjskNkGgpzFf2nKUpBVbYi7Lhtbc2XCJP6wdpYrZzxxAV1SrGgwVcCWt85mk4AHqp84PpYHhJ5GHUWKqh",
  "key11": "2kjo5HpQuD2PZUdxUPjpWrFVGTxyUgDHrkepsgW1BFDnhbtiByqzHxC6hYaSW4gQZt8jYFm8ctcwnqW8n2GX9nSW",
  "key12": "3etZ61iGRn1HJtnCsYLjriNbw8fi9tec9Zefiu7zMPiQYMxe2W34Gd5N1MLxifcxZbsmDzpjNfZHd173AJyYgMQ2",
  "key13": "3xVv6PDQbxKPh3ZjvLoRVhNNzWbdf2xeSHqni6EnKSRRVT2T3m7TD2dbgDoM9DuDxzm3aAi9chNLweutBGkHC6Wo",
  "key14": "2LYdVaCQYweJQ3RdoyykwFj68HftfUtvMgLrfm7vhkBkiAhQfFKBUaypKYh2qun331BSLUgnqGLCQBNjYRDNktYH",
  "key15": "AaSknRsstm3SfDCBAEGMM6A42RWWmdMq1zPTSYXt9gux8RSBb7jtSwqDoH5ZyD7czF3XVftdJT3VS5FhcPsn1Kf",
  "key16": "tizK2rrfM2VtmyZwXoisWqr4WTfALYJ3bXL42N8VsZqXY9hmAxBn8kkgaQmcHZdqcQS6NRRtUPWVKVvt712bHTG",
  "key17": "22QNFjKtLD1M3JBowdmNUfdyrw2MMpNwubwwyec3Z7yKbDn7nx1PdQNiQMfiuYWMUygdbB8ckb55UdPjfJcFDxow",
  "key18": "vxyzoyHKQzvHDeKE86q5WYzeXTLuC7ZzP8TsJXMPfNp7BPQtaxfkwXPYfDysjxatqwUBhcSavgVaEE4NWZrFrXr",
  "key19": "62xvbsnhV1BNjGjobRadXr4pW66BW4qaEbcCaF9fBhi6aHEyT6YG86eqzhaVH51BtJLuhorbu4r57tEkZWvjkB4c",
  "key20": "3A5Hcz9Na5YtowgUJkKmRE8Rc3YWzFhME5GBC3y7ZX2hzwv2i9WBsbc5NBBdJBGnx4FpVi6Z5khoytciyk9qsgjQ",
  "key21": "2dySMgJCASZwpFFnFgLNa4uesTnFs8iWRhaQbmSgBoLeCcr8o1StJyJdPHJ5LgEDADDK3Lt2iAHaN93SjGYDLeVq",
  "key22": "teqZQ3W1bKbzBSyM12JTSzWm7dnm6XYRemB8y49KWe9g3aKbhTGtUyj5mSQv8G2XPiFAVjwXzB5hE8DaNka6khY",
  "key23": "5S2mC497JeqiCRdoE4GqAs8Zvkja1DWhqJFCezZ6Ay7dzgpB8nXCbTrMYfrDwJj7Cp56wAVFhtGaWh6HyWsyopMQ",
  "key24": "2ejuNFguytK6UwkivkTFqx5HcjMZXkVD19NKnQDaQifLotWuZGv5t44G7qEPoZM58EUnQFnuia8CCizNgQkWigq1",
  "key25": "3CdnkiGFR1yiaZNguwCLkqbJaNcnGpycfsnqqPdioREKTVPeQh8Syto2Scnzey5oeEYo57bzHwaCgfm9mHwLkfvR"
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
