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
    "3bQBFCzYcaX76wkXcEzrk5UkGs5xNWTxzoNB1tj1wDRT473BVDwrFE2bobcGwnKUL3CnU4bQmiNpgxPjVexjN2BK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9py5M3Mi4Mby4KcipnWecbHNDkxZQs6WhbgcaBYQ1Aw4jbRyNhuEUJg6QtDetzZeHcmznFmuM1vKzwaGZsgHJG",
  "key1": "5eNH2CTxTtktt7bDkbgsNADzsy5DZZoNQPLaYWxTQkzcaLNFQJ6VDypEpSbyLuhgMSSCT7Js8iy9RtXbqTapRG9t",
  "key2": "2jxhrjqcDpSMmq6s3PyHHLEVgiLNwn8bx8rY7aM5StVUSVQ2VYC2uWEgF7UpH3GJwpTqpd5Pf2zXFJw2AWavN52D",
  "key3": "4TyKPC3FBcAwGBdDZFL8Lt4K5PvfXd6ZJzsVchHzGx5ABQ3u5hCfmAdpEikMNW1o6xuNGfmocBKCP1eQNaSds7cC",
  "key4": "4Js1931XrfesQz612cJo8aA8RpiZwnaFkDJKLpi5AvaagMqiiDijsG4ZKCVpfRr8eZutY8Bt8yVYoospLH5PAkwq",
  "key5": "5RoNQ9YL1JdUaS2nMYBV4ptc69u6WyHoJiG6zVS16gWRFsD6KUMznBzr3erEpyfA2G78bZA54rNdSn1Te1dSGepC",
  "key6": "Q4ZQnasDuMEeXJzyE3zAGjpmmN9s3EZjNi5Nm6zjEqKtG7UGawVT4kHkah57nWtcN14SHz1bTuvmexJCutdcVoA",
  "key7": "LfM2GbwM7FZ5f5oCJsU2aeaWMcHyywf7kkCFQSS3BjLXR7VKDazqi7Fip5eHq1WJXJpNyRW7EDX4wbh5SbPXgsp",
  "key8": "3GZ6aVK7rdDWBJi2Ab1t2PE3VVf5cQCczr7wqmsaQy6pmSHLX6NfmF8tCov1tTqUnZFLFXSQhSK4XZFuxTHbngPS",
  "key9": "5meK1ckHfWWAxo4SyqV99diFoZZNziHctee6qDh5V8Gp4dsazRTwcCnGzAGgtSPrnqGHPfVbDMD8XTajftr1DuPr",
  "key10": "4aRFnKNBrMc2hqNQcmMksxjuPF7UEnySsV5551qjwoUqCqRy6fspMmhQknDgbcJbVTD3DFbvXvSa64Tn4ZxW1NZk",
  "key11": "3kgpYg5uvtFCrhncbjNp1aLC4g6btaxJZUvaJ82P9NLm6a3XmWKX2GFVo9iJvigDqcAYD5faVQ93DS3SicHKEtZD",
  "key12": "2M6RuX7TWU5CcMPm2psdMHmoWWzkcGo8YGiWtNoDrHnWNmE6UHG9tuqCjXcUcAPVsrHjQdnePKAT1q6iCh1eWPMb",
  "key13": "2PMWEAJp65kh37XqifW11wxVngeWTRvgVdYcEc5CQFS9cFm16sH16PQE718cnK7qUWY1PNmvryYwcrrZuAb2Yesa",
  "key14": "3uqf1pSq1CYuf53V98hvkUuLSD3HYDQ7ZcDq3yK5U1adBktX7PSBtBtwpumXosg2XLnj1dQV1cg89TQ7gH1QSeMg",
  "key15": "3oBzanc3iMeY6YTBKkR7BqLdUW4WBCceTWVZKD3Ro1NbWfh1Q8cYY8n3HDdNqKHGMagWVMK6LzhR1ZBxWi1tsPvY",
  "key16": "5XG8Dk1NP52D2cukRnkW5qgRbBh6B1tGK9Sx5cLUqHLtsknBtF498fZ7QpTBVBcNmaEqwXfgqEQtBzfTwQzqnkM6",
  "key17": "3D7PVREs8DUThpRWgQ12SpxAAJmhLM6RrgbtVYK9p5V8VMBx38m8N5Up6hm8poparqdGBGTjyNPSTkLx1WXbz96p",
  "key18": "28nBZ5AFeoG34TjfVqzdVb1ZDjdAHE2R5MVzXUtmSkAFZ4ZNGwFPbEGcJuEEaDWvdFPVJaHW9dnYCTua9HPj2VVo",
  "key19": "oDR95VFV5SYenBGbbHJ1SVhS1m3Pqdb3w4tQ6ucydkKWjbQWVE3TEBiKSdGGt4BLq2paFT4w6JT5bgcphEoPun4",
  "key20": "49JTQ1hB4GTb6CWK6zvcDmTGpJnB6r2jANQD9WMRUDfLyAZKn6rud4sqXzUFEsfjRxAEh7oPkazpaTTXnAAWU6R5",
  "key21": "eHVAvRtA3KZk5dS2EwMkLtcsaTfpxCVEd9n1WWcqvRTdRrHQCTZfW6n61h6KQnANpjfTp7Fh7Lnwey6f4FnGQk9",
  "key22": "61VrMMovXRW8b5VtWbnfGqAR2dzGnZeLDJftwjXwpg2CiSkAXNpoorTN6BR5K8ALSLcMcBaTZCpaZhyh5qw2SqHb",
  "key23": "4QQnEUtTtvnGRGyHHfesVsRreuZY7eyaps1At2TEdFHdKSFCX1tvL9uLRirgcYTSEjDLn5kKsffJcCYyWpbzBTkS",
  "key24": "4BXbk4XYVxmP4MbrZqoddCaHSHeaoQsuM5FYy2ZqdY99463222yVGiaVtCrSv6oNj8jH9oKfQ7axVabzsThZcYgX",
  "key25": "3MGfjZWgvt3a6yLKHRdZcCSQwAHMNLzDTpNPUNzEfRx3VkLAb8c9ywwYr5FvjKbhfFNKzBuk8pxg6ycSExSfPvds",
  "key26": "4i3htXpQEtdaLPfTZ2ivLePEGRHXF1UQ62keLGybq96ntEH2vyHTeZJNDry1Xi5fZQgULK1695is3biVkFSYguhF",
  "key27": "62YbuLGHpHcXeTupMZkNNWesmga5KbA2gX3qFKBxvhmFYELDNASgy4JKrbjduxXZaoZqiaJ7pUePQ974ezX2R1RH",
  "key28": "3CqdTGF7d8mgDmz5oznFEEbCBVSMKcoFtgMErjaPjG9z2oSuHv3NBHvocx1VT6w6cGGaefVCLhRsqdCVTTy7hJbW",
  "key29": "4S7tUSzfAZYPyVoqTUw1SrK8BhcpNssHuC7ZwwcGAvL9JcSDoLmukGsAosi3AXoUWAEJ2a5JqaHcCSDs8wgP8oSW"
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
