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
    "2e8tJLBntb6MAZU8qJ2QA74Jg2FPKmGRTfiWS7WHW3wo4WjxnGp1CzCCLmdfV7HHr2t5ku9Zw9fCCkF44cd3d3au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xc32JbjYEri7cvB8NF21dDUetro7Ky5b78D3cNcqqmRBYchbHdrfXn1rdW3FiMcQ1JX8mAkBUhJwiW2Fz4Bp3xw",
  "key1": "zTd7h4oj3Grq57LUfSmhMH3Agpi5jkAmYXNSQ12KJfEQh4M31CfCsv1ce3saNQSev5xbzJ6n6T4sJAka86XjbGc",
  "key2": "1rGTfQSK8mvZJcMb3JWkykRtX2h7DEA7pAtSC1k6S2pJXoN6vPiCz2xdkGEVb7EAa9cKmAUUEXaWGYJSLVXwtfm",
  "key3": "88yKsoCXFR6CfP1h35BJVdo1RQ4UTjwts5GULMGmn3QrV26dFvgGfZbixboTe2KwEdquMgMfrR7uJsek6qanMBr",
  "key4": "2bVA9iNbUEbqXQ3CXeX1GpypnbwWVP3KpxqCKEN9RqaFvDxD1bayGMrzy8WTi76HqN8DxCqjJ3LnrHCsgc51tYZC",
  "key5": "3J6ztMvSmQQP5uuQmb2n7N3sTqZ9RaUitJuAC5gwoYid6nb3BskcsXAU8YBWwzpQPht1Y8388NjMER3evA395oDP",
  "key6": "Jhz7HsG2hr2iPnfuJhdDSD6h2YJPxTzuzhoKvH7w5V9H42Sbq34gHgyog5KVFBE3GxR2LQp59uFt7YTtwfLNNLC",
  "key7": "4tcqxS2x1tSH9VB1icpivCnoTVManiU16WFzknvGz734DY6LqcsMV69GpUXjnpVsot8czL9wVBJEzuUuomc39Y4i",
  "key8": "5CV27adJL9nbMSV9Cuum1zfjzMNwWo59dPgQZyksxjccYqXawFre3jPzWFoBk3dCJsR8cnWJgWDz4CWioLpC7Ej8",
  "key9": "4b8VFWdJvVR6PweFb5rzz7Q9ZBFHiws1SF8bnXfrP95L886dWsarG4F4TtsaEforY7qaAbMHd7ECtutrGdRFPS57",
  "key10": "22mGffi8LMob5bafQpkBeQtjL8SbEFwoBuQCfHNEg3BizJX33VcMnsD829dgzRpPfzC236BdkS3EydSSqJ319FBb",
  "key11": "2zhV5ye6DBZAYHGEMAyVUgBpBiQuWNFe2tZvjcrK9whtpGcQqqnP2mfNqLCE8aWGhMwUFq3yD84oBdKV4Y88Tz6G",
  "key12": "xoA2TpPUPn8F7aCtmkRBaVhkb43NEAUJB1Jbo6FsgcE5WRfDtft5HJQJ9q579sjKGGQHZ4CF3hLUUgeAUYwVGMF",
  "key13": "4fXXF58dtv6Wx378JvXPWFYXTS57Wybat3CHstrgafNkXGqsAY2VfmgawWAfVVeDKgXRVacBwTuUXThgBX7Zsm4v",
  "key14": "2aS6M7vinn5Vj6GaZ35r48ptK3GsmGCS4T11MGbv9VZeBWt7kwUAe6399uQQqWHVPGzagQwLLiRApmPF1Rs7cqvf",
  "key15": "SqBWUAgSZHiJG4hPaWiR2wLiUuGT3Gryuvt8kcVAw9TQqu4FkudG4WroVnXK4NsuzdQALjUzSTkMiNspe1HGuwv",
  "key16": "44Q8AGenarg67pdpo5od8hijqP9H2xRGk6zeCeDUe922vcG8KNQmonYYzX6JqCWiK8jcca2Vzavyo5JCUh1AKHz8",
  "key17": "KRDdYFT98AVwU5BHJ2Vyy7dXqb51czvWgUeNMQuZiVUu8CYjpiuzfpn9cFdpE7DcpxeuLLCvfN1rZiJsdtQn2A9",
  "key18": "3Lzb5jYg9H6A3x9bBh5FGz6BHBnkuz5duPR3Cfr2AK1ReppsYHC6SktFRj7Sv59QJoYUeZhoyir3jWkfqKHfg1tD",
  "key19": "62XjDo8ojzz8jfBPTXPoTJ1QEffokyev8nznrHh2GzJRe7aTPLsUwoqUHRRp7KLqFZsQiJmtEMktvZv1UiC66LpL",
  "key20": "aEHWrXDwFux9G3E98CGtLgkByPsVhe98WXZck3svDV6XbUdjHuuQFZ5k99eXfyyy136CqU2xRF6xwyuVbjmGgrs",
  "key21": "5upMFu1ocRP8my5AQaAzKYxxW9MTn2erk2HfWf89odYa6DQWMyFvvU7CC5RCV6AJh42CCdnTRaJvjHJtc6dHijfo",
  "key22": "2exByJWJqCbm8QyHsmjkPRuzLwgM9DuyHNtWtVG7q3nUV7WzsT4mBjKh61g3Bobs2bm8vHyQz88EjVxgSSpXvcD2",
  "key23": "s7eH2H5ZZ4iRFnUnBaT8uwgcqPq3cG9DgrWG6qiwWG4VnPuNNY8kweMpKXpy344DXheWgpfysTx8T7byvabbjxh",
  "key24": "2arzC4HjKDrxx8Ka8vF5mZcXkNiqNnfw4SfTsJmN9WW1EbJdR1LJpExhgaz1KUH1Jmavta24T1nGcJkeYENPLC9X",
  "key25": "j3PGKSzQS9fpc2fPWMitdSd1oD6t31ixBUW5crZDaXLgq62Wu8LVNquhmF5FEaJwqqC4GYmvDCQRx7KenQkiCNE",
  "key26": "4h47HoFEq9qVxpmmsXJt5v5qwHmaeAwZGTLq3bKSzb7dGVyUBobVWZ8PG5r8om7bPRa2Kq8Cd1Xzr2GGkMvoe89M",
  "key27": "5KHsjn2RTn1yHVYbm4UAuZzpmDHz1VTVme1GVt1DdXrdEmQrgR1gv6pM2P15kKFPFmqpQgcFFVVzBjWG1jrqoKM3",
  "key28": "479Ppsc5aDvwEuFZfKjPYxTsPWXtQHuceA5GYiQdjkpmUUDjE4caV9qqsvt8Jh6YGRpN95KSiRfEk6kepEiDEf19",
  "key29": "2dSFQrupGT5rVHAqWuRxDDWCnhbsG1KamzZiGhMR8LfBUNzWUbKt5yh5QrMHnYtL3BHoZ1Zsqovm6YzUiLCZQfZA",
  "key30": "5e9NFtgVe7w22Rj8E3reQ9iVZ3R72oB9umqs3kxbPhtdSm4xuLqCvU31ZiZY3mWqVbTSkTqsiM5djCYcghBUUhgG",
  "key31": "2L21zBYrTfSqcFBZV97K21rtf5ZPoqeej76xuZwrD9SpBjZkqML8D9PZx39e8ZdF5Sbzw39BLEAKTtF1SFmFTBSm",
  "key32": "4qJucP8r4XYT5Tfs8PHXQR1RYgeSLepowbNxTxEjfWsfTAx25BADPhAJDN2VfYgL1hmeqDAh15ahgn8ebnTVFvom",
  "key33": "av75KYudQBZFcfpDqhMcG3xoGRGzKwafRBEJFTCYreujZ7d515Vn6vmuJX2Lo7GbJA2cU658UKG5mQ1uyfFJYrq",
  "key34": "RJay8MtbCrZJKXFPYqTBeGFhLDRD7VQeGcVZBedAAkUW6UorCgDwxopmGpcAjqb6sizf8LH9vk7EVEEm2XTRcRb",
  "key35": "3pYUpYzpJ1RV1LhktrgVF2M8oGX882RkqVKLBhGw5a3BdgX4Y7oF1XyC4HLLWcPCDbHg38xDhvcfR9zbrig6aMjH",
  "key36": "2Ju8cxe5XnHcfx6SUZsEWS7kjiHL23oDpuLDGYUcJDNW32tj3vxfCRvrn4rATqHp9KKJDzjkVfvfn1kz11HUb8gR",
  "key37": "223GDFTWygMtAKDSTimYA36Yf5WDqxAYTMViV8mvBKqNycG4brBsSAZMWdbvGpERNjaGLa2QBav2iHQJcZ5VhQDB",
  "key38": "3eYQ7zhRmntGuy5ce2mgqdtcbF15xrdcAwBCia7gjycqgZtVBMHCnFhy8YJtGWBrZeGMdZV6vPGGACDKMVDua5G5",
  "key39": "3n3awgyhr1STuBe7QNguKiLXwgjewuzp93uyNw24McJ9WTUUNhXFsUY6tjEpuSkKG7XNZo9x9hFoFG6fLWuqZaF4",
  "key40": "4qJJ381oiGPaR2894cvWzFueGyfC59L4jJcmBcxkXsjfYm1wrVYRQz6uQVb9ptPPxsSfDxh6kzBBpo5Exn7RDgBA",
  "key41": "4ytyTdX8nKXMhC17qshEQcz4gRqKbshzGpPyMvpe6eGxVEwrwjpBRXwKWrGyBCqJKx73bZJimBndWchKE1SbT2Jt"
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
