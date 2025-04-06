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
    "3fdwVnSMQr1CUWCJvx3N42n2VwVa8SbBUawaRAj7qFEe5ScaHx7r1UzpduQfqu4F36xBULqxXNoVQbtM36xSV1hS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k8bQb4q27FM34TL42eBhd1fqhDSgndnTZVsGWjDh8faYgU6QQch4H2PmoHcZG4cwYq3y3bUUJ2yRz8FoA5znBTa",
  "key1": "35UG4UswTZSbYqnEmXndYmW1TdZgkuuV9swV8hizoNj8GarE8frZyELy1bT7iYq3A3y6ExHU3LmhoXEkz2Cy4ohR",
  "key2": "5Gg5tjhszWyBfajUA2tU1a6HDZFb45poScyNqVrJZwXNaU4RKzE9EBPEc4RgHgFCEosYxFvzs9utcLAQanTgZG9b",
  "key3": "5SJ6WJGoHdghZoEgrX29T9Mr4zfKbhsXRr3M3VHdYjX67GvZVMbHHQC4A64eLNqs3vsLFWcK9LejVY52kbMvDTmU",
  "key4": "4XrsuxGCeerZkMo8KCdUBWSmNfj8GNxkQLWqtGibH3ub3ZPjDPKTQbe4hvERjQFUdFsH9GFVXETPHkUTxZCeyPtM",
  "key5": "66fJd3jVYtfuWtcGTum2phva7xP9eeT1JbpuLUP9V96kWqom9UGcEYCv2bJVZPZgyCBnsQuCc5Vy62szSr5wj7Cd",
  "key6": "2hKJhaHu2gNokPMig91rZLbRjRfoZqEjfEVy3FKAPGSUhdFu1S6aaJAU1Fdf12xkKR8dgY9mAnios4zHAGvuxzYH",
  "key7": "4dfJvZZLNa4sF5EhvWJso7Jq5YH22NWVycMUq35JRwMYxD3cfCGw1MV29xFtDtvx2PFEFAhh2fvBqvrFYVjwSRB5",
  "key8": "57m1XQYGdPBRo8FAWuUA6rXQ3VNmZPdjRaWWXBLTHe4qu8WCoAh3M9ot5m8bDZ7ggdrHQcKVR68HP36yrUXvEKFX",
  "key9": "3CywJYSLcurSJQ5kzEMUwJdwu1FNdM83Y71wvCBXfEddqkmpavXDTtrepikcsGuxpCakejezVU9KU4jfvNJs8reg",
  "key10": "2QPBdiYxEEXZn9Mhg9CKrZg6Lec7TKASHm3r3vvKRNJVbB3JWTJJYbr987ZxDDJfiRPuhG4c9PHcHRxdjzHAhZvY",
  "key11": "5x8FZYiqW2tLazS7LH2h2r4TV2BFFSvdrWAHqX7Z9P2n1JxdUq9rkzCykJa3Vwwprdn72UH481qbCgUnUZJKQXfG",
  "key12": "5jiCS9GEZXG8XAXNUGws9N13fgi2EGia7JQyVY6JJcwUFKoXdRJqaDNcAqHU4EW9hgfgAa3ggNWAvsvrXoENGoec",
  "key13": "46Mv4Nc5N3jdeaLvzCvFqRQtrCDMX9WRCWiiTSZbVJnT5VTQEyxXCeGyr7ErhWp4ktM1FN381p2vuQwhm5tA55JG",
  "key14": "2txPpLcAtHsdJ4f1Ziec5XnqU2Q9e51A3z3cN1fpyeTJjKCCuZZt9CACALX5Ni11x6sfeKL2x1v1fHdYx1g7LHUW",
  "key15": "2fpuj5LFnByWVuwX1U2DTjEAEgDDywvieunt3sX672MzAjFafARYrbGPgrwz2VZhgDimj9nypSPpYjF1dvmt3ZoJ",
  "key16": "3NkENWMqDUspaqivKDmgAeMsixkHMYyj8Caz9LKJNpGcwGVHiLTzLpg85oJwjRmkyXhc4McKqRiCHzTvLT38VDUc",
  "key17": "2Vve2xKL2rqh69gRN5ZTrjtfshc2Vsb84GAHufSosdLiB5Ttryx3aBJVDUPbcDVQcSwk3bKx5BD31u97oETeAeAG",
  "key18": "27KMoH8PhLRVtR7Ka4whW9eGBN2ZhsfSLoea5SGujrXtxJvS16GM9RCJN1Uhud48WhAjqombCJijjLTEugLUf63V",
  "key19": "3ZjdXktcjcRrEXzZzqnjVcpUyNhVaiVU7B4AMWCMsbMdv5Y8mGRAFrNoM2o9gnWPF9rMc5rq5vUjcxqEi2sheti5",
  "key20": "VNSxVgkceprtgNUUPKV5HKYWavHSgbi8UXxNi2z4hryWrQQNwm5biSmh9S2a2e4fYnz61JSVSyM3ixaa1UCfay9",
  "key21": "cR8Qi14UDLU5tdz97yMGiBoovny3KENvjsnThWVu13LgczUooYGANY61on5AxnVDFhxHDC6WG4YN2BmZe6bbqZM",
  "key22": "2FjVwYkXkwKwZv3knCtb6qew873yEB3De9NFPBcfmqoiTPNsEEwHsW4ThiUtwUn1ThJSt3ULQei8cCNGtid9z13k",
  "key23": "1vfi54Gzs7H8m6UD7nMebQfCDhvj3cMEZmve5AWGf9Eh4L1zf1XhLatCWAgFYAVBhJ99Z5wEhKLBrq2qmhkDyVC",
  "key24": "5AWNjEZvJhynR2h1HVTnv7ZX7KDRoPsZ7BACaR7ZQatHxpNPiXcbdatXV1BAawgeYrgjzu8k2AM8hZUxogNvSJPn",
  "key25": "2grGW1CSTRTvDzADdkkVuC6BdhiaZHqnPJVcfdGJkV259V5X4Ltnk2RvfPHd9p3qNJmbkMoNxrpVh9PXpjXCya8M",
  "key26": "4anbpYBUPzoAfdWZ7UrpjUnXtcHtbEEv7XrS3p5yyDsHyoLJSWcoyxEu6pvPeFBqCAEcM1VggkDASWGinakCDJsu",
  "key27": "4kN8EnmrWRhAtpi2u95oLdp71AUkswBcaCAYD8ftaoZFArnrQPkfjwQAtaXrPYTWTcrMSxkxxMNXQTwLVPRSppEg",
  "key28": "4A4M2msHVQfVn1y5vE3wrY5Fp1FNAGxt813S3ZHgAWbHMvSLVbsENQxYtpwtTsFyq23dDmnaPpibh3nLq4e8yBuH",
  "key29": "2nRJfrzkv3rvsRrWLx6NjX8A3NxZcV44CRB5ZjutbWAs9KFJSn7zPWaJjzX5XMdYjkRhrEs6Q1mqQJLURPdPNaA7",
  "key30": "2Srq3exSc2U83mymuJ8WMpahEy784FncAzxRjJ2H8aFraMhzjhx56pGTUfoGboEsa58fnoDd7kx54uhaieRon2Mi",
  "key31": "2GmBsXA1Jhv9NgTc8yRmWCZZg8hvd1P8oV3mD354rTkm2HdFyRQwtCXjS4iCoFbmwn4XtZZ3fkAZegSSMzvJ3ren",
  "key32": "32bFKuS3GKhs8wQXWYswZLPPcDhxUJmfgSBJG2erreRxXi61qQMEW84B2z867VmeHHDHuCyHyMFMr42uasK6HexT"
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
