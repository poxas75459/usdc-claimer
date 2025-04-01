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
    "3e34MYXkKaCYQEa2Kkt8Cb2AQpDdWDiWWJdhkjUPVH2CJSJ8cnrEErEuvo8Jz3CpGnTmKdRQ9qK4JJeSq3JRfZCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63xgCLq8L3mHoi5zDwXEB6DtAXDezKjWzi6xKA3thWnWJXwq51XwJXGohy4YtCfrUEHEWgK8Lw4WiUpZARE3x8Aj",
  "key1": "1Zzs2q6P2uZNiyyqjTRnp4Umc7dVVYXfTHtoviXnJ1RKCfx3ZecdxyMyFDtkKRytt9hEXjPJyvj1CzRR8JKvY7L",
  "key2": "3CMcGGkCMGvYZoUvdurUpzjQDSoyXzFkHWjnz5Xcs7sP78dctJaF6MoXs9bzVXHwK1SfthoTRDHGm4krGXL3wWx3",
  "key3": "2g9coJZgcGT2ozFUP7SrndFqMb4tLv7HkVNKPAtSxmToBVG3GXHo3pLeYqxwsRK61CX6mnU3jMsRV9vvXgzStDLY",
  "key4": "32zhBErCwKD3PqWwNZjquK3gTWUXqP1AcsvqehMSWerDV2fwAfCKkkbJH3ThAFLzb5gGYUoB4hhD5cZSYZd5DhTc",
  "key5": "4tGW7QTGF15zBoy5CD3ER2AX4uVJfHL23EN8KDe3gerNRg3LfyfgKGBPygLZGxvMqR1TdbuY65chFT3j3QvuzY1q",
  "key6": "5RL89qtusyeA6frUEQGvd94XaLEqMRJi3WWJQXJViDm1B15VSGikPXkKzLG7H11wr1Sdxkwes8sdSdQ3pPGqXvq3",
  "key7": "3u7mdD8Uk5U7D3pwUxWAq6Cp9CYJZ9HdWXJUNytG36cZ2W7gYbPQ6g9qda7icYV2dbP5mPo5NrpEgvyvDVAQTfpe",
  "key8": "4rH8FKiRGdjsPcWcpitqEb4gAygJGNKVQ3bfd8K9HXFok81M2oCn7Zruv1Y32J8YHbDM7z1tXsSyESHFtQcwzHyj",
  "key9": "5a6ncoe1FhGVrPYTH4e91aWex8DgkciDULgQY9VwTaeFM7NkGcUa6ot5qFys7ngn32ogKNnkaBm5sxRXvynoL5Tz",
  "key10": "4EydnRYSaJAiwb7roBZbQzoimm7MBWghC663aumoJnm4hzcs4K4oL2zrRHZZAE9kLAULuGy6ibjpDCAD2PPvxdxR",
  "key11": "3j82RyMZ6doEGJb8Wfcg2FQ2raDUNX5NTCrAwEKUHDhetJdQ4R5dFKYcoPG6tdB8wxWVphrpXh1TMSFU2P71k1DT",
  "key12": "2j8hXEzoHM4DCH1N1nQqSYgrGL9D9q4rSHrQpAGbKeqcw7XQo6enhFVgxFg5cAci61rrMtEJvP4WQQ57zxYYVhPi",
  "key13": "3dw4AchobuoWVE2HuG2fYqyndrfg7zshy1M8tKdPEenEDyGXRXPEswLMS1B4TdZ65if6hHUMMewGWrMgzsdKEJiL",
  "key14": "5hWg9CEphwHUQqPRB6XNBVDpoaa9KD3i5D6FAQknLRR8cZzf4xoz4H75a2hwp7BTAAeEorLmUShzTCnUkRoo54ME",
  "key15": "5BSLV2CrwhV8VAg7gUdQvJEiEo8WpXTJfSvkD9tyySrjJDs9uRH4hV1tQ3wh44zhgbQtJG4XnmUQMQh42FGufaGT",
  "key16": "4fCeC8Z2Uq7KpfWj7C8498qETWjDYhTCS1coghxn81Mb3aGR1rzbpynDyc8TaAEzYWPgGVmiFkKVzCWYwJpym3fU",
  "key17": "5gboVeGKTBDFFzJUYdhHmc1JvEk45rnzLXL58pqexzksgdRQW9ueYuTq7iNpQRXJuELJuCfgFJPDhZxp9zYCRo9",
  "key18": "3Mu9mYCKEpfhBX5qRoxN3j1jvd5UeVZbD23rgPCT7q4pp4Y674ohGECuUNfHgAsWg9qAXaEt1XvoYMbXTTD1kSMH",
  "key19": "3qFNXnFBp3ssS2oKj2kxi2NNmob5sp1vFwgKxRNHRSNeS2M3iEbUARSx2eDwA6x7C6TrxSSw4aorCeLT7iL7e7XA",
  "key20": "62MbRZQsVCrZAmkYXuDdY2oXMhQK6Ch4qALAn9P2d6wxJFkTiyJvzn7YNpt2DhTjU9bT7nXJk7dUEAzfyrbFnbTn",
  "key21": "4THUT6gLzppppKc2y7VyXhXEbf6QsQTGHz9izXfw15p4SsBZbjMaMTaXC5zx7SN5YEdMeAdhxb2PSnZWdqPn5Yvh",
  "key22": "4bW6Ji72zzfs5gNeMWw1hf54E2GDYTqC7ftDyTeQgzhxM5brtBQ6ZkMXGE2ZcZ5FWcLLVvDoYsyVBPz6KcpyTk88",
  "key23": "4MKUKYgfH5433VSphZYQrTv72zfJvVoiECb3eo5pNvdTARkorjDKHUimfgspGdcGRvVmi78FeZQQzcbSnzGXJ3if",
  "key24": "j2MpW1EAVyT6AjGbZXNfLUKLu5YsroUFzxjb6fy8soPrJN9iW5KNCkpcHHn7xWxXN2vAaE3rmAWXWJjX8FioaQA"
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
