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
    "hDDZJ8EBkMsH8TnADouKagM56P84gky69dQoxhXRQNsCA1dmhtkRajwrYyjNVUUrST57LoAV13H96PUc9gUfeLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D9XbCgvwkCjo5aKJsbpz17GqwbyjKRmJd8otGcK8LR7burm3nnruzkMvb2g2DVyRZFwnc7gXdDJG5PDt5q5q4Us",
  "key1": "EoqaUnL67q3Rq1Cv8mrPKapLP7b3pcbSJiQwBm8PB1ytr9r3j3UfpaMqGttyLpkSZqM7avhGNvWTPoRJJGvnYXb",
  "key2": "5GwG4qd7fzfTT6kRpTuLjRG4LY2sc1mLastiSwzEo5KgC6RbfEKQDBEwWiyHSp5rq3BWD92m8YNJPjCNytVhC8yV",
  "key3": "5NmCbAujKoUNYwhYb1kAcmbUP7JARcrGQi1KKRvPBsyoekXaBCkEPk72XsUKj3RiH3PXNfS6Pd5ojWgpmX4VHeE2",
  "key4": "3t5Kn4tnqfAfGzLGinkZBLLi6Avs3ze4EJJxu32fw7d9HkTBjbkS4F2beycSupgvdXgjrS2uo57R67hnEjPGXq7g",
  "key5": "5AnW7R9Bq1rgx7t5sctq7ofzJqZAuCiLvetKcvY3c9ott6hZniXeyeYRZgC9ZYGRBKCuExrxqNRSKKSav4X3ssLJ",
  "key6": "35cxBRGzoDuMUX8MGtL4GscnfvJ6E4TDdZCH8gtAAh71CBYG3vh1zQ7LEJTKMfaDHxMZ4iajpg9QSwR7yXHap9QX",
  "key7": "3a7QpRnLSsgCrSSBacZZzRueV6p5SgTPgFjJH21PsaGHFVpSDag8qWcEXjdtWTNVY9BfhtGh6gXQkfCGZ8eCBmsc",
  "key8": "5sQUjGkiAtXNbHzvAPNHiYGVUQ5N8V8KGoLBizeVCAAq7DyLViRH76Mm45mXb1hdKWdiCCsovAFN5M5fsKowTHWg",
  "key9": "4bVrXdHYY7UYqprzUiwaU2QLP9CRisHaeMGMBqHedhdi79wzCNpER6RS6My9t7wgLLm39d6FsEHRdkx8PMvk5ikC",
  "key10": "31J4djrfp8XyorPWVfWTLWqDGhmcbFiqBTSdXQ5em7aNYtvF6tc6WdqQYbpHsFZt5zuPyQsx7LnsnrHSDXiCwVa",
  "key11": "465UrvX17Lunm6kPfkZieAorcthp31db9rn2stSLrkScjSBEdKzZF4psVY4vxChr36gnSP5rfyqTuZyVDGGGHLA5",
  "key12": "2qH1mCxnGgvvDgXRBjCVz9JqWLnVtYLCB9VzuAjDozrTSg71SW9vyJ97xnXCcEU7mETNehwm8cpLmdh6r4bjZqhB",
  "key13": "31T8vfKLHXiqWeMecG8SFo4UXsf6PYWJgABAZCtDDoNXFP4qaXGFt24jvHx9uZJg2Kttxh9ApnyPfDF8FttPbDqw",
  "key14": "HehXb5w1avzuWz8V4WUchXgEd3LHhKhxE9RzUDy3LGsoQXMq51GkM3XvKH9QFEaNhzKk4kgajHUwi5pmuq1QXKT",
  "key15": "x5dADgvtjWR6oqg9KcCdy233ewA39L5HgUa3288i8QwYFPGgbAp4DNTTTJysMcNiH1b7HMPBGXEtxHVTsb3PtKz",
  "key16": "2iGXbRC9ecLUMPt5BpgxkTh4FR2PrTf5L4JHF281nRJNX1ceZ6AdQxhqVZ3bZofi6dJ1X1H3MgyeBaPEXkfhpuuh",
  "key17": "Fr6yikyWrG815tzWj3Vxaz62KmtHCmSZx2hbawysixkDvnjMyGZBMysm7M1xvVDiR2ECPWjW5nWjjxehs9AHRtF",
  "key18": "uBMQwLN8fuyHbFBBfzv7z9yV2UxEved69BWFSZw5fxYZbGpBTfi4YDQ1qRrqaho11gS99eAGHMLxvVeGm9Aezuy",
  "key19": "8og7KJKae3b8GBNqfSZeuXybeyk3hwL6yZTaimAWoUPzMmtGYfnwGY3edeCqsxTyT6DqwskEgaM7XVRJFA9Nbrx",
  "key20": "5rKNbpFaCCTn92vUMMCYjHQVgnupkjPMtcQVS63op7QmsGSoapAPyrM1ZFbntJyHitxyR3y2XtgEoeGWVR5C3ytE",
  "key21": "3qYWr3vxinTWbun2S4gTRP733FRg1LZ9TGoG3Sp9NzuNVdogxtAWNH8SdSFqpzXBuTs7Xjm31MFzb1nyw3dymKyh",
  "key22": "FhSw4NLC2aRm5EyYHGX3Gh5d8TZBDkNpWSVXfBnYbYcBcGM8GP1jZUAV1faXumksZhpRaBnv7SP4MUtdXzYHsWf",
  "key23": "17oR7QyGfBjFNDkpTTSkauixDTYaVSVkBJCAGTKCnMFawPsEnjpjqVrpqegshwnLu2pMUMVoWS3fygFc87ZXtsf",
  "key24": "63ZoYg6BqwXPYKVx294XFoLQzmkz1ciqTroCiJoWQgTgFkNmgmiwMumH2Hm5oQSaKVUxpbfSznhU6zw9Ku3zr3Mn",
  "key25": "3QM4Y82496x1DuwDcuKsbJSAY1o7BcQpjt5yUF4p9Uro7oi6Fo8nPiVRWjE5ZCJd1sUiu5dKgMKKicQsdJvVrdqJ",
  "key26": "5msvHkJXKU2DXninnZUYDUKr3gvbjxDN1ToXZS1Pn35YNuMDbHYPHUVyEJe83QHa33PUtQq3DFWw1S8PE3x85rM9",
  "key27": "3m8CLzYdYBoahX6YsTNj8cGbUyYtdnU9K4oiFQuMjERn73G5DvAEcM2yJQbVvF6FcaZQr3MQhfFVrjG3b9DDAtYo"
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
