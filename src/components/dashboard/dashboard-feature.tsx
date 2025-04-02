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
    "4aHYUDB7TWZR8b4qwa8WguCHRt41YLUqbkc1EjXf9h6kjzJstE1JpCGnkW4TYbx7G6MEU71pT3ksn1ojaQ37UDt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VeyBf28xBvMta5Nay8nkt2dqSRhQn8WH2XCiTdnZkjkZ9Nn1MHjLcL5PjbQAYZEm6zYMFSzhDDV7xGnHPc362Zs",
  "key1": "3iBSNHHm4X6UnguTwVJyGrVZTqW9r2YzYhbkH4B8cBta9p7F8Y8B7wEF9Se4ZXRdWFDHCssizbnwZivfGFBDdDae",
  "key2": "63UC94iaoR838gbY5yWhkx2MPraoz5aa4gGY21qz1LxHFns1yn1u4XD3sEU6ibpfjH2P8AzzDc7YvhCrJoJ1guAq",
  "key3": "4y2k5tFpBfpg4D8h2CmhyzVJC7GVT9UMFJjPAY7nLxCifXuXbG6haSrY5cseerfajU74YzV84r2JNBWYKtCPnZra",
  "key4": "h9NXhLT4ZthrMrmd6DbUi5rR6R63vK7VYZSMPhhZ1oUF8fNo93Cq1kJW55hg9fftXcvnKEQ1Y8XoT3foz8njV9v",
  "key5": "2iF9xe4FM6MgDu1xnwXfAT7vWh7jJfsKPmG2HU91QWPisaysg1ETuvYQWB8wEZQSXAbFcZz9j7tC2pyu6cedsij",
  "key6": "mGqbcjeVmFResToBYadocJ66Lxarpkqe6DEx2TDbir6wPKxDcvfA8k3EQ1Mz7EXbxi2gPuqPd2YDfcQ5rFzRF2y",
  "key7": "3TXWQ429KKfVx6rEN6nAxBCx6uMXq1dcCDr2injWtNszBtm2b2y6hM2CL6k7QuVuqeTKTFwatLWDK15xyNCiwx2R",
  "key8": "49LPaJTRdSc6HJDVpk9nKQgomYhA1hdCuNZ6aZuh1TDu3LkaGZQXJYH8pZixwyqMLa2q5rURyYWEzYmVxPZyLw7b",
  "key9": "56PsMoL5rdF5TtnNAEY56J9GTsVynT6nw961knmkstQ9bztQfPPMdEKe5sX99J23q798wAT1fmM29GCeDAgtpWav",
  "key10": "5DBrFVhhfp4w4fjAgHVq7eSdsG8w276rck4WPyGSsJ4vNGb8FVyPPSfLMscFuerc1iUAKfv1eEtxH8T8ZG7up9x2",
  "key11": "22rC1PrCaaLxJLxwwLFwW8EQUWU1ZJwYqy1o4Xtcn4Y6fdme5avy6k3aEmzABA1KAKzjbTVz6NS61bfMLkvSqHhc",
  "key12": "3BbLnzTrgmJAfVQaHZGpGarMxCmBWcpoefPZpN7sfiLMGNHFY7vQPhiAPRRu614gYdsrWozhqBcdazMpc7BRbptC",
  "key13": "4zHsnPCpEt7qxzoDfZjEAhn56tvttK8Eb7bV7Sj6KwC2aYfYfyw7hbLk4PVLvq9aoNZMgw4tEvaSdiyTQaUburXn",
  "key14": "g2EPyKrE13S8FvywVxByWfskapNiiTMTfYCYqzMdsYzBPWSskguqrfsBCaABHyoQ4chJ7gxwnKycgn38ed8F1Li",
  "key15": "5JpZhPS1FjwpadjrDt8BDQ61Uwdb9kKTs9TzbTrLXmDHbiR8nFEEDYjFdUt8bhceke4smiKR3qbSPUjJ57SyjtsU",
  "key16": "25182TNntyN9Fuz1zFEU1Te5Sij2bfhA5vnAE9v2MHeBvJhbyGNWNBnYbPvNuexDyqpQW7hgjMZphGcNi9jWQvWD",
  "key17": "5wPSEedSdfWwn9iBBfYCHSeVyee5zwax7aSsUD6cLvp2fU9tJuK39PkRkte73iayrnE9nnarzjkaHaAKYwmEdBV7",
  "key18": "5Q4YVYbsH6JckTvYZQ6UZ6irtiEwLzpH8eJiahZMP6EtEBMbdWZtSaC3ojkz4VMP8EVva8pdUmj8vmZgvG1Fs3on",
  "key19": "4Q8ib9xEJreZUR9mw7i1BLX9CvhezndFXxV5o4VFxDyBmko6wXNvPrFqN5JtzZfsZeXEjcUejjkh6Ym38Fre6Wx6",
  "key20": "4VyNys3NTzrVQ2p1BKduFmuJFqH21pY59g8i5f4Ngku7iYSi4t2oR5Xro3KqtU4YxFETotarPn76ZGz16YXm9Tpt",
  "key21": "ffFj8PRVx5hM5FwkY8vui9H8k3emuZTMzL3rhmudr7xFtRTCs2ZUVNQFTsMPndJUJVdNghBMKDYEnjMyep1ce9Z",
  "key22": "3WPeDRZMem9T8xrDoAteGjk5rD2KyuJYk8cJ6ZbqNz3AFaR36DPsVtFgeFLMseA7e1dLpmSdfrcCMgoxtGfaZnPw",
  "key23": "N3PXWsxekmzWwhE6daJuoVsRsUaUirAGyKRRBRwVK197qCWaopnKT3d5MXN4uU7aXTavoFmGvQdHj4CUx6VLZUp",
  "key24": "4XQz2GvsXr7vfns6aBP5tUyFuEezDGDNKuoeyUyd6x54nQkbYicKF9vBhtAHnuyU2QzmbutjDJFp6447AXesJiYy",
  "key25": "2MAq8fHWwh1U2FQwbRuF5F4P7eax7xTYXh9tuhukfFQ1D8bYSKyLAEtC4X1ZFggv8EJMUyfUEkQKbbXGUcqBGArf",
  "key26": "5UA4hnUo4zuvpq2e2MJjwhUoucuPuZLMCE24Ukm5ZpBdsQbcA2vW88PHpkmEbjrNdJ1NBnXTZQbeduY5NbX5rVEM",
  "key27": "2J5Kjid2ovgBvg21t3hyqpWkbGLewbvvhqtoBbk2qXJ7nmZtQz9zG1JaDkTmZP7y36UsF8oREdQhhCS27eHAfY15",
  "key28": "ZZ4ZwuQVfByq668ZAqGENGfYTzoLaQadzn4SV76pjSxyYMLywSC3qGbbVN1LmsMGN3Fty2nt92ykznB44x1foGh",
  "key29": "2muYqGhkjU8tAwnkMxVYz8Gsw3NrNJg8sepBoP3HBXP6Nv7DbZ9xze8cn8PAjghDCta57CjMtFKYhu37bgHe4CfD",
  "key30": "2KBPpMyiam8CEVAEtfVxipGxz8LoQvayGXdqMr4FyH6npDXztAwjbP3PWhaXQ86SHb1hGdpVqL2bSoLpn68sGqns",
  "key31": "3CTm8ABxZPtAB8EKpTYDXeHMXxEwgx843BqLL1NnDv4LXDKXHdz2H21tWvQtF65HmFDgwiMvnLais2fJHQzYqeqg",
  "key32": "43ASxggPaHFun4pJkdE8yG6tWqA7DXDYwkTBcQ4J7k5i7cAw4KfiQr7n6FMg4fKHfT9vJeKiWRPJBXdydjEGydzu",
  "key33": "cmw9xMtuutL7HTT4mVqUkbgqGLwWCLpogzxi8AUnCQSqYMknGBUfNuxvuQ2n1ZB6GXp2G9vDeCD3nDyMw3Xd6Kd"
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
