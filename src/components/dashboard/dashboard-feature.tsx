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
    "3MeyQJ5MrN4jxT2yNojF2UahKwUbs6FFJZPxxMXpsH4Lv1LPXXnfE7JQpH9PC8FohxnK18byqRnH9zFgAZ2AuTFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qVxeos8vLmZbdV5pKPpYoaPFteXsVtDpGa7EqbrXj1s7262qe94Lz3qFZ5er5TZxJZwMjUwPnPXeQq4uvonUPV8",
  "key1": "3eYUzKRL46FE3WpuieBzgr7pS4HPwwau9FyfkuMRvMeDKesk7KUB6uPyzNSVqEbwHavXLUe3KMKFnoBY2PYY4S4X",
  "key2": "ZHq78cJo95gUkUB47d7Um1gMvavMVrgRXMyFvX5M2MuZznD5Kn3325Uub89TzKaW4LGuzE6y6T6bSEMhVeukrai",
  "key3": "5b4gpcuh1gbDtHKZkrXXCoPh2cokC6QhgrsujvsGwMvQjramWf7FQ6h9wwTeyWo72xP21zaESPpMUyHL3iHxDTc2",
  "key4": "ZqkuEdUcLQaLRmYZmnf1icHCc4Y8hNusUSxXS1DrK5gnETqbry6nG9JVdYFm2kmVkft2tH9Ldndhz1kevmXheoW",
  "key5": "ryk3dHSwaPc1ytDNX6VKavVQRSttLLF31sfKmw4k4PpYbwTx5KsDduKUMkCJ6NVvihemHrEcagmakFmD1VTAeYA",
  "key6": "5sCdng6RioWSXjF77Liy8CZKR7udBbe6rY5LgPUuekaSRxNEYM3Z9d4R9EZeszQWUTKpYESRtzxFBiPNbvXGTNo2",
  "key7": "4GtUv4ZYKNtLAatrTqNSnNDELZn137P3J4gQ6Rk2zSyuuU9WLv3baeM122YoEM2WbPU7F1smJsTwQYQT3NxHVgTy",
  "key8": "3SQFKGmCyYFCkNq5NcxTE7Ayp8fCK6qFV2bkh9XSfU4JdqweRhS94TGG5KkrfxNfzGVxQRqS7iyKdFKK9uhxSHg4",
  "key9": "55kjfUk6L5Z7KANoy5nsszkd82PZb6HavYZj4oB1Un7CLd9i9LCTDrmssPTLMo6wadTYxAu7sFaCrqQ1AB1zrTAM",
  "key10": "3fU6Rt3ChLhJPWLPnaK6wRoaP1HnQ3MmGE2vPPD7FQsbuqF7ne3EAqzSC9CdkUn3fPs31iCbwQagiFxQai1Py8VF",
  "key11": "2YnrvkNxB2q6yEvhkZocEWx282QWfc6iuuBwbFjCWifzxMnX3L8ZU1aDgjU9h1kSSwkbDAEqRnAqgeMNBaZmcVEn",
  "key12": "3fr4n3FCQuAFZvBXJuaaaHjWPp4Vjg4HckLhhBeCWAhjh1xvqjgZwZ2v8ifBhyAEVrF1gYDfqraLeYfBTQSzFnSK",
  "key13": "2JaJRy6Ub1RJQcq1sZ6fPQ2GNxHNQDbFsiqYu7ax7KD5P6oho8bBMqG3vr87GRrexWokx1Mk3k2yoeDp1oE3MPF1",
  "key14": "5XGbe3SrxAztjS5gk8eK97hRt7F9kT6uSKLuC2aCFJZPqPvEGTHSgyRjmDu79RD4HPEZyuAMeGJJHcSc3HmMPUzQ",
  "key15": "2iigZ1YRS4tY3GuN5c2vb4aTX9AbXbErjY1Fzai1BYoEyHWN9iizo1jfjCaFZMExnB3im9g2mHiv15NxGSMGRgmP",
  "key16": "3rEQUCH2YtjnUxHwwawgm89R16wxiuRMotX9aXv8YLwb2XTTRrUN8bYcAstGDXD6LCCPFmzMJpxzkbbqLAyRDBVK",
  "key17": "4WV1NrHA831sfzdYrPayZBQahkFmRvEHz8jDv4NhHvKqr7z3zvngztx2aWwmmS41M4V8X1ZXzSWBUJ1zuDfVb1U3",
  "key18": "5jSe9MettAhTQ9yHz3gp9fmjcnKKkc65BCBK8Pg13t9pmMdCjdF2ZpovGwbD87AW5DBmP5WwrV6ZUnANJ9oXQbXf",
  "key19": "3W1k8HPbpGr2oqCAJtiSyjt8XD7ZtrpXrwnFKUhhARnHbfemdRJdvL1AZ2da618hNRvuERo5ZzT3N1bCHSFLFCo3",
  "key20": "5ARP4H1DPWifrzTMj3kf2dv9qzEHwzfeBeKeqxFoaH6uX2Vgqb1r4qajyvjg2dBS9M8cBzWoy19M5qvVv1KMbunb",
  "key21": "2tiM6f7iyWUZzjk1iRHuCtrhUEX6F2DnXMMusJ18eUBmDRGCs5hht23GLXNAWLmzRnug9ArGp8iRiDL71ASmhL1s",
  "key22": "312SQB7YYPyi6tmrq91TvKcgwTgoTUAeEi3Wi3qYoDXzoxwnVAnHLYwmUejjpZc2BZ5n4cEEVVwSUi8eDdYnZ9BT",
  "key23": "3P7LTbBk34AXkKfEd9enJXxvB4uqQ4KMFfABPcA7eT3n6bELamUnCNxo9c5n6fkeYx4zaBhQr3G3idT621MwPbdm",
  "key24": "4dM46T4n1fTS2b2xS58xEUtNAmiK4bJV2sdtP5JLb3Nqi5cYERm439p76wCoWz2vVcf6FeYLtR6Mq4h4M6SaNGet",
  "key25": "4iMcQfBHPovLG4xxmPGntqAeQWkW9Fvzzwh2kXpNqb9VouEFu3SEiZNokhktMatdpxipnzhT2fAjXanjWH3cpCPN",
  "key26": "eWUio8eCRtWB6EmMSkf75yDqQQPdnVEJQG7baKcBNW8s95pzgSjHZF1fB4YQeQT1FxQVJS3SexKh2PBsGkrnGFJ",
  "key27": "PBdeHM3utaXYykFtqLccRCtxdcRdwBuYq5pGsczfdW433HQ1cz77PYiwaUhCnoRa7L6EduZD1qXAsFuyBfLfczV"
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
