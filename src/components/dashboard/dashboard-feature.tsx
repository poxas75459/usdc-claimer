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
    "5cSRszD8yrLGcNm6vADzS8PerFsgh3qTHTi8xo7uSvjrgUDSjV62YcCZE7iJK8SpwgD6Cs5EHeHr5QW2b8epnDcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a6HpoistReRGqvgoRbNNcWpUnbMhNF5VzDi3eca26jz1fVWjq1MBSju3gF9qgJhvvW2UhhVPJedZrz6ZTnhJSjt",
  "key1": "2JTHn3QLSYMEYffGrM9oy63P9NANP96EBQazmqvbeR3t4JRGAacFoY9MzDDJJCJxhXHThUVEXej7Exin6hjXsULj",
  "key2": "4cRj1TQyj5TLRTshohLkPbBs9XRe1gMeFwPv3Jn5G11Geq4NKH1p3nwjkQy3ijsgQzANgKETTUxmQrLLtpkXQhix",
  "key3": "38s1LSSQtPTTUZBoZp7B6EqycaFSoymR7cTrYDEVwgcRkEJm4V2DZo178s6cQTTNnuUL4RPUmbgmcHZVGBBQ26Xq",
  "key4": "4t8vZFATLSPagBsv1RbgLxZcxYVdWffXbwV1L7TrbtCiU2qVLDpygFK4yQjVhrcDUi1w5BSac4hNX6LTKqdaXVi4",
  "key5": "5P4EZEvq2qduvu2hCYnfYFzn2RS3NSGraCDPtybrrEGXegc8ZpbFqV6bu7jfRpqxNQB9dKgp94tg4qJfjGNEwRkg",
  "key6": "2p4bPUCBNWJpmJd75cQvkU6CVWMsF83buB6KxJeYhHdVvwCSg3bNBUXzmKTqokhCtYnuPMyvshVauWmaQ4XWJXHv",
  "key7": "65BpQPfooUFV8s2RiP7NFbXnAnWpm65HaAznxvre8wQixvT5ijEhGJXTyeCz4sJAvkwiTxYHHZSkDaAgirVCor9m",
  "key8": "2CPCH5DuXxdJgUS52fR1Mk1PR2ZuEuqM6ioZZEsbwiwn2MTujoeRyZw3rqsT82RbZxDmbTuW6moDajTavwdXh7HT",
  "key9": "2gMRGZe2ejenkfjeW2TkcrvcSMmJRfRAobP6dYD6FanpraAxtBvcB73r6tZKJSgaNRYzbXQWTQEA9ZXH5h46VBB3",
  "key10": "GpbrDvCYm8FTmYAiRHiETheGahzbfn4J9mPJcyv1NRyWG4ghFdoCXv3qvntkTN5Cg39moRmePePqEmG2rFKgiAs",
  "key11": "45u8K6BLkcQr5yw4skwf81HohA4T7JoRiynKE9MUD5HVjMbSkQVsuXmdF3vVUJFFY9mb6Zkaeq7HRnnaiTwJS4aF",
  "key12": "5yMigd8hHLLJXyFaVTLxEBwi3MojwSR7z8LoBG23T8omjdTgBgptsJoCGV5ivTkrQhaNLmbaTBtAM3L28bxyTHmU",
  "key13": "ihgMAK4jq7ioyTFQh1bqAnnYUEKrM3DmjfBbn1gLrNqfzo1Nk5rr9U5K34vXVCdNXoY42AxuUuhA3u3yDUEM7oA",
  "key14": "3i93vPfTwVbx49uV1xvjTsJeqtoRGGc1Endw1nCtB3xPHwPTa8MwiFweoBtPgrLp3PX4RuLw2UndccC83kwL59Db",
  "key15": "pCpzYrHvymHQa13WUioivrt5LP8Tx8dVGWv4UhGueU2RfVfZvfwBKZMJVErjG8n71Bbyt1Z52dAViXZAwg73zSS",
  "key16": "3PYxeLYtZVRA63EC4PzC1rR6AYCMGpXaKkPFLpAtqC9uDbefxbeQDQoiVy6HFHsYGYuyTJ5kMhfaA6YwmURyKtfj",
  "key17": "5jZRPJ3TwEPWUywEdxLYtyZAp1z2LiW624DGG6UN7ug4ZyrcMMFkGS8EVTNVjMqUcVz4rLuQ8wXXbwh81zqRTMSi",
  "key18": "3XMEM2YhXje4p4pBN9H9fE1X2wdbkKVPappPGe1MFj8S5Dx8k9AFE3oaeDuLtrhoMtFKYBMUb7jkkw3PBfTv7gnJ",
  "key19": "4AwCAWpPbWE3bXkwum9iJpJrBAacXtgroAyofUp8fvzXJFEj6VaHYpKnyTXDtqrppZEAH1NgRFMFhmNx5Xi4uLuH",
  "key20": "5pKoGSDVet8F3JrHQwHBrZ7jrLWJkoqySwoPHSHyMWG96P53xGyzNmFfaag7kaEyZP7ox5MdRsqbaYTcR29ybZh7",
  "key21": "5PVsXBxL2YQGt2yqZj3Zh5nWmGPDSYNBi5jvkS2FJHhwFXBiQ1ymZQsmwXfi4UWREXUNvz59xsHTSh3gvz6yPDam",
  "key22": "21V8CbSAu31vPGamsuJH3iCtu46Lqm4e23kFCVCM8c4VKGLuoXsuDDJ75sXK5eM5voLkCjncunCKv2CgWLRqS5Sa",
  "key23": "5SV9oiswoqt8DXVPYwv8DXcqioihRCZs6qzo7zm1RqxYNtM6CoKGkHSq7cmCWcHpJxWYv5WzBghYMWtc4DRsRjMi",
  "key24": "2xfnTZX98jP3882fX6kHX6RwvK2GW42qxHrvC5wRDXw1dunowW43uwkxu4EZG6cpLL8wLVeCjMkyhyW65vt5Cj5a",
  "key25": "5NKRtM4ekTWKJXhetGpJD4bUeu48KPNM17otBDFuVwTMi3CxxCwWsBpJ4Vv3PaKmasS8xWcobTQAp5SYziq2UNcZ",
  "key26": "36KpexrYEde7Jk1wJH7TqFvPEVNk7pReoPtMfWrYtVF7oLUUPewS8YyjyMqyu5xBcdP5A3FfuBFuSwRifw8R6zZn",
  "key27": "2AwEgZwqozvQecwzM49T4WzstUuFwNPwNXJ9ZuW19tfapNLUU1dC1XfYEV3uaqm6DKV7wp6keoWA4zdFhHVZPGPQ",
  "key28": "48VR6sLN2z8FCTpxReXgokAhzzaSQzcBSMrVg7armdw6KUjFz8EUxfutJNaifWtD2Ra2Bt4iwJfKwsuWFWKRKpsu",
  "key29": "PeNkD8ozyKo4d9NbozGP5HnP6iRnSPMpTfPXoFsK8oR1CwTEQ4w7ZkrhAhcXKHWb2pHka6AxbCWD8fZ4K6EHLEK",
  "key30": "2rJkPQx4XemNLtKemuQFQ5AKgihKoNhnP9PybJECdgGWkgSSAidd2s9R8KD6AFNntmYugHQiJCX2616z1k6f4Jmc"
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
