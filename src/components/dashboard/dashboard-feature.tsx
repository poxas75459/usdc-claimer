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
    "2xNhX77WrAxAtJXKvPKjt94NbtnayBRUL1xkFBV3g9oyQ6FnzNVkg248S6Zhn2h8fjL7AVL6Jt7vU3KGpCGKaKNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KJUrm5HbHRgLttV36rciWD6U7PQjK8q2L679pYisGzUQx5WGAfHHMKjeeXZBfJExKP7iDLohx1VmkKWEDceYtni",
  "key1": "357Tb3ASzmHHu27bkVEJXuLX1s9Lu1GfhNzTqzmgxEgtXEkLSq5yKHNaj7E5vQesQkvhJ7eqEJMannj3fNMQEwVR",
  "key2": "3MqBPq8ExYLbi5N3aWH3SGB1YigQAvBgffFrqx2nm9fCP3D3b5miDddr4EV19cj8fAxbTEdiNpz4vuotQafCSL4L",
  "key3": "Ko84N8yJ2nVe1ALSoP5ajGTycPUCko5pF2GG9z2j3gECANeW674dv62b5gL1gDu8o24ZfFMvvf46Th4133FziVn",
  "key4": "4XKHm1DPMvfAvVZ8Auc2bk8tRLW9mL5YiPA5H9jDT9g7p6eGLEtfrAG1fJD9CGKmonpaKwe8msGhx7tSUDv3YWuh",
  "key5": "wtasXTFDeEMvkVUV1auCBe48KpcgTPJaWFY7RsDj9SRegjzWCJMuaQQMUVfqZjzdv3T4Q6zGUR9bvCsYxM47mg8",
  "key6": "5B76dGAzzzuUZSYeTBfogh3qfGA2NZU5oY7jCifJGV4Xb5Ahqt2JP2gp9xjpvRvAenA5GuXubuxQrrHjDPt87GPi",
  "key7": "3QvQGAdGY1K81paFGa9QwZasPTU28sDa8AWJXHQQHVpFJ8RHPNVgpExY7y3bj8Ha5oKkENGFAf9qfScvMEErT49t",
  "key8": "2h9v2M6aJtNJUx2C6YuabbjhZFMBLKqjKykGGQHGa5iK9eksbScoqPiQpF1fsjGUHDELmEjUTS5izNFr4pBVAbnu",
  "key9": "4tQym6LxUgJEqEuPxg3WX49r1uVZUZunfEF5JDn7JZ4U2WhCeFVTkaUJ1BohesVGwvRYSeYo5EKQcbqno9TmjV9F",
  "key10": "5Y49Dfy18xSn7iYri1QX4KWaVnAPCziFDopdhsaidwL2FDFpbS9X2hJMn7iecD8RRZEkVMUVjBKDkmRLAKfyX9m7",
  "key11": "3sCjJtMYoBwSJGbXuKBCW8FmXbhSPdughQqR6Qgcyn7jbtHkV4iLXcRi9cnYGjBGb9BJCLs5jYWFjQDhD4EETDRL",
  "key12": "2Q34YG2jLPD8KaaqbXzc8aAZCEiTjU6HqewH46dP2p25keouJSNtVzULa7in1erdgusF4V97M7KwxG8FntwfULq3",
  "key13": "3VAaDitgvv1Y8M8P4vP7T5cRAa6CXG8bDg6MJ2WPBUJH4vByHXewZyoZuytXt2uKvUoGfuF6xeDNSmMNS8thF71w",
  "key14": "5eZ9uWmiwEPNKS2VEUyjxsubxaREKtjaPMTZPHYZmb75XTYmHmrBBseArMPWZC8ejJB7Xji2ZSSyGciKpxMkiuhQ",
  "key15": "52ATfqQAkHZKb3iskNTBSHWvuFgj9mXchMZf1QccxsdVdqNV666Evk3RnS4Ffj24fPV8Khqh2KMi99sd6NNynjQ",
  "key16": "2XTjieo3DBffkYcxmpRDK5is4w4A4bq1MUJtSnqUkzcDUHtdhdF4DYcoE8RMUHB31Awabf8K4RYZ5t1btZodRNpP",
  "key17": "2V2Fzaie1Xc7Qr8Q4CRAdfetKCH9LdDFiDk8sjUNCfP6qRU7doeq721JYYRMFLy72B5aiGfP5YZCrkHydCGrCoD4",
  "key18": "3zPPqvwhpvfqiTiFUQ9RigsreLSJcgyDcZSHRxWAZipAzZ2tkXPwFhC4jmbrUmGwZoib82vWYZ69f63Xwjx3mt8j",
  "key19": "Jx5EkeUG4KfvYiDLeQuMGwXz3xgtDBncbKpHwoTmk5Pjyuq3Ndi4SXiuXzzzV5FTvUUEPQgbboqFrgnBZVJy8ek",
  "key20": "3t1AooSDbN98BquhT8YNbbh1UbqjogoN7EMaTRST8mYvq2gjTToev7dUMKAKwZbm8CWA6WBjzDBuxeR3HwkKqC1h",
  "key21": "28Q2zMCpchJVRBJujDhQn1ENdDUpHv2abtmzJVfPBbhEctyMSJPos9KN8P8bK4Ryq8tEojnTsP4ZhKn8cGeo4FPj",
  "key22": "CXXVmA4q3vNZAtyzW3UhPex74wVeguxygKYu231qysmMwX474YoE12o27DKFjrfYqt8vhL3PYHHais8TzitYE9g",
  "key23": "wgNFJ2efoDRiy7VbiGrxCqz71ww4KQyAvEKhR1ivZpFpcj6F1yU8cb5kNZv9PvtVxrsfZCwbZwFwhd3tfCpwapY",
  "key24": "3MLYew845qWNHRzQ8hmWY6RmzNeH8NPN2hEAQdKcmucWXA9AxYFXysx9BqmBQqf2Nz2Q3GBCYCEyqixMorat2eiS",
  "key25": "3j878UkuCHnZ3NR2YSDWnHktSezUUgxnV6x5F3DySauf5i6xeycU8tAm1pruPvhmDsDt2QuvwGhQWyvWr7WpDoXW",
  "key26": "9RFfiA6RdBuxus4e6hyrxTpHvfGEhse1GYNX8ESUQCuHxX6JypUFa6VGA17wEqFFqdp11ZhrXkEBU25anrxTngu",
  "key27": "65zV3yZzUhhy78dnvfVnX3yoipRwfsEKtFwj6zoE2UZqj2HMFQ6QvXQomoVnRBEv5BgKTMKXDehZBRjoyfxFb9qB",
  "key28": "5Um72FRD5gFQ3ahvcaUtoN1y11XfiTKSuJu8AV7nyTBgC2twGr9bMNJy1qBeqkDENThusFzDnayQSHMV14FNZ5bR",
  "key29": "5aZ2CH1vayxokf4fv9qJ6go752NTi56SKYijK62iDZoAmcHyn2qaQzzcYQaB8mQVWP3UaJ43pFvAUaddK5d4R4cZ",
  "key30": "Eqcu9qD9xzg2uuEyGAQCPyvZb98tq2YHWqsgL7HisyVXn4vAwWePoNFWvm2W2SzBeLHivpxhtM7CxpWGi7tThsu",
  "key31": "2UZ5n1iUqnhUJVQQTWxt9FLb2cRkXrykZbv2Yf1L8wt37Zkqr3WizRZF6iFpMX8cQhMb37gs3rFmQkkYzLUdbHgA",
  "key32": "2xsWxH8F4WEwzivY9fAXf6oJaiZtTamgqmtrap6Ms6aGQ7Ji86odQqoYsDVjQczzghRmmyJcJwSxJo5uNc6vPAmd",
  "key33": "5Y9z9wzRaFKebjRdcLpYHbh1KjrLNUxWP2VTMFwqc9sW8cannmPPdqcimpwUL5k7wV8RQLMbDUNhtmZ3yUwcxbQt",
  "key34": "4UAWU1fFC9DkL7H2fnRdCCb8nQmx44LAwdQGPNWG3SmM6F1GDaPpTkCQbeDJVmcBNrfTyymrYQUkH41vDEncfkmi"
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
