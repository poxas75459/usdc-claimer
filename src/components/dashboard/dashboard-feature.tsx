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
    "yePCvoQtR1EWAsSeYhrogGW5P7eGfYQ1Tki123AdRRpyYk9uxVDqL5mhrDcQRPScBtRoHSuZwmcnfpiyLzEh2Ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MsShM9FCyHFqkcTBPn1phiB2wc9jztugVdZneKxVmYtJnabcK3JbduQSMTUzKd4ntKtEQyXatGKQobVDYRkaCBr",
  "key1": "pXniBQ5wypbT1yZ2iH3ZZTcVwWpgeK1RXZ4QJb8f5d9ihSJEif7BP8KgHXYeVAko2UpYwsBfya51hCeG2qRjy74",
  "key2": "59SkfeqnQf66qp8z1G8PKhTqxU5WzvuDVDNr5MChRxcgGxAZPCs9wrW9vJVpdXkdpPYbAH3h4H9Uw8rCgTCrxoxN",
  "key3": "rEX7SwWDyJL2YXxU3ZjztqB3nUGE1td2S6o59goiGauUwkYCb2VGTtGbSvXp4qxEDs5MpYXvdteD54FGq7qYsCA",
  "key4": "5sTmb1DCWsNqjgkGcA94qcUZFDtJVK5YnnXF78RFqqJeKcbA6FXJKuCa3ziy6c5k3WboSikgJtmJgCtiFYLUFi48",
  "key5": "2TM4zpbhptCz83VUqTdRmjB3e4LsiqfjVSrCpmaC5C85EdUKqzZAGVTEAowrUu4ZgY66fafHfEAWkSKzVTPwNRYQ",
  "key6": "9gmmeYaexFnNzTK6dCyaxE63W11gbiHdYo2HqMctcJeWgsGzMBJLYUBAvPtimigdxua8TqjXJCEoJ28KrRfoBEz",
  "key7": "614mmMPFcmaFT87CKCpyxuqc6r62nDCosBBzKA7F1d7vH1VnV1uQgHNxAHg9wMr96HFwaEQSiv1t3mug197RKGfK",
  "key8": "5Jyqzhw97AikgbKH7vuMzy44eWFPJ2rp8FM4XCHiNP38ogQHAuadYG9XES2NfHUwB2U1gcXizK5s3vE44r5bADbM",
  "key9": "2zmuukF8pQEnPhkEtzMrZQ6QBozGryhoQp8TEH8oP6B7bhLQMNWF5yjoAzU9ZvjRoSNny6yYXDXhxVDW5KLpHrQ8",
  "key10": "5ubgSYYh79mgDDALEagfp85LihYcHpxiEtf8A9psq19yex3HPwpXRnW2o4ctTAaSxTi5zwCVGeNYYHXofFNXUWEJ",
  "key11": "3rfV6qArZS3nb7LJazbykgisrSgYVY56gDAtbvV4cc3urK4d1nj43MTL8j1RF6nu1UQuJvgpuQUt7XZ3DyLVDGsX",
  "key12": "3YeeXxo6XLcVM7FvG5HQfhsZuWAh361N5eHC495cuYtHx8o4qQRGMvHBDWmQQSrtASvzQTgKNEK9JkKHM37XqsB6",
  "key13": "uMK6MwmB4GXLotFQvwrtc5KAHepRUQJxBzV4BUthTsjZr57MQ3uGEdKRsVCckx6zZAYQws926EfG2RTpZpPM36E",
  "key14": "4BAmKi2nJuFSkPrwYExmoZqkBEDoLM1AuQNGTUUTjzb7qrxrw3FADBLAc56cf45qgeVrz4tVuWoN5RtuvgdPuVjQ",
  "key15": "645ANWikFBPgdAUWUr1XTYJoYMCBWw8okqGzstmeXkj4W2JmwaUM1DGG3j5MaFc9PXSaKE47H77KdriTFtoioAkf",
  "key16": "4vA5hqB5YqZv8GthcZzcSHRVfHXDvfg9pwdqkVmZ3epKqq2B9R4vQyDV39X1K7g6qq8PF3dyntaCJShSaGe2Cs8Q",
  "key17": "QvFThVVdH1mh8YuitHkjr9i2J2Q5GRcdqiJdispBqewtkACLQupVkaD6h9FETnz8PbXtM5EdBeMQk3E4tQPucRj",
  "key18": "4uQKoAXbsA1YqXRUg2GjgWqVEYg5QBGV4EihsDMVJmFEfH7m5tGvit1AwRceNqe216P3Sf7jUN6eDeeyCiKEZNoQ",
  "key19": "3gdWsrS3LoRCemtYoEGufhBrfWfVSFjzbQs7D8cQ5mDnNw8zMdLDoP9H1vvMB8h3AkvJCfa6oNCqbCCYZFuwpPvm",
  "key20": "2fFTFofYzT57b3PBsknaZ4K7Hgnf9HVCj1p5D17D8zgLLNZeftv4W4L7ouNq49YoD24bv9DKhDonsR9i5W5deVPB",
  "key21": "2MUUJd3DCoEpUwvLKkW8XwWrMHN7s2RLwWxGgX2uXhNyQrmdVYgoLSXXfAGe4vXBFTWkpvBcmsRVaF66gusVJrth",
  "key22": "4CC2mossgjpogVvNPZWg4Ns2zTxBYA4J3i7nmLyZQAfAVCxdJizU2eRTcVuSBjhEdaH11pd1kcV7M2nyTd7tsiva",
  "key23": "3pBqs7TXjEUzWQDoqanKdGvT5uHW6US9Ce6ne6KKvwPzQgTWgPJ3RA9Ynx7fnMfU5SpWJjaRRRh37QLc4cbX3a1r",
  "key24": "4PrCHQZKmkktbX2VGZdcQddD7ULyNDyfEvAaaDdnc3KNvJAJUDP8o2r9txYAeJAtQ6azM6CN6GYn62YvEE6rECHP",
  "key25": "4kWY76PZQpNAsafpcQmifdeCDrm7g2AJ4H6D7juZp6U1uL1fmNTLyGm4kNm4p6JhQYeLzKmH4eMUQZX7hN7cxQvp",
  "key26": "36VHyo6zrJikxjHTMBGtzGdVKPFW3ccYddiHH2ZfQgBuPVEMPBepkr2eyw216G5x2kbKeiPPBn3Y2Tm4LhBTdEgU",
  "key27": "4b3h3N2FokceeNy2jZp1XuSgkXmuZtYDuhtH5g6mRVvoDxGjbdGjJDPH92WLcWm9jQ52HJDLRuLbmvbkP94M2kAb"
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
