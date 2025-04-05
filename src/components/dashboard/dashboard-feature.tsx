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
    "5Yrad1Sk5DBsszuPBneRCtXEfMtD34BYu9rMBTPDcq2X6MdvvGXmLRtgdNWS5M87cTHohFwLJut6NjUGW1TkMqwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GtHt6sCuq5L9qxBfdk5Zd5QYkHEnpci4A5BuyrWQsC4WYWctA1gRgUhM5mBtACxyBbX6Dn4gc94NAVLb5XTjBTS",
  "key1": "54f97NgXk9aBHgEEuVmv4myW1TKuwB9cTgfdgLc6sBcXZjks235y7fAi1L2boesk7wErjw1sG795LSoNaiihntdf",
  "key2": "223v5J8StVRywmsxBKcnoa4jKvkxe7fsgSGAuT2FnczXTPbit5jPe5PgDkRhqKvbg1ESXcp62TNfiKmK8wW47yvY",
  "key3": "3AYqyrbRH9CLnYegbDH7VHxhhcbsP831SVy9sGKaoY84Ze2MXBVhRUzXpGkTroBuNqPmcdaYLZy4WvQ18DRhz2hL",
  "key4": "uHTn1LhQMhuyrxDfuCKtNUPUPYkyT1rpiSsUBaofVeCeP537X2ZzW15u1N5hpJCB8xyMjREeCFJTSeoDeccN2Sw",
  "key5": "3YxA1hZtzvve6hXmviXvZjepsAYSQ5gm6aFMjzYjyJ8UcqPwWUrRGVpgNC45xK2tx3oJCdeKBRAbtAVnt2pWr3Wf",
  "key6": "27GwK493MPuqMS6oAjohNwgkBw25S3yLY93ebj8UEgQk2PR3f1Ef23Jw99oq1Jx6bHg2RcFMDMTxSGZecJ9bWrMr",
  "key7": "2ETxxFxkZ9QXcrKwkqRH5An5vj8qmAsBGwJXwXaxWraegY1vFFyx54HA4UVTGXh5mdBwW4N45jj8nQ2FVy28eCAA",
  "key8": "4FsyEtBp73TmuW1hALx9UsmZNUoXUgYG2E2m57sJE7JbzfKR31y9DhDS3sdpPWgvLqXV1sdX2BjFSW8bnKKKSDWY",
  "key9": "3G9AHyJucCqNWWNYQN9sAivmyUHriGFknvdrJxoWLRcedP9wYVyvU3Jss6FnmRfWTwcdUEnH7ANvujoSasvL5bxP",
  "key10": "3DeG5eGuyy6XiEH3shbEXsufRfnwcbn2UBLRArWeA5ZfhJZDcmBydGXi3mER9ZgZDURrCEx9ZQkwFa2Cb3ckx514",
  "key11": "2KdPfopoYEkAnSMTWyeav1KR18ArzmqtD3Dop3VXtSVBC7hq1GikL1SxwymBVb7CuGyfZoUjwfrumArSrdNeTmZD",
  "key12": "2KdQtFdJa6X4k1rhAERhesHahuznwF6ff78LWpHpHAyb1ixBH7iXrX8iMzgEMWwD2r42AZ5jKSo6ic5teXNsDVrF",
  "key13": "Va5DWoHjTaDC51Qr9xQ6pV7Q3m885G1qZDoM1aAT1e4kkTFJafLaePu3fGN8H9tGFMwskTw52oPDCz5ewrMJUg6",
  "key14": "2fSm2iWH2kVwCWLkdLhVpH8ZtM1JsQkeuonPyKUiSFX2YCJKarY897LQqNfpye9T26KJx3gg2UhDktm7MQz4Hcnq",
  "key15": "33JWrKfrn6Yyy9ecg3yuurbTYQft5snmNw624aGVDeuqEWJZci6jGRM8SdWQk92o2Jy965wXg74bLWJPExA4tyr5",
  "key16": "PSLF6oY6xZNTUu7gixwQx3CVuYJdRYwkk97Em184DAmHMB5oTRxdbF31T5LQkuhDhgCirFuWq8EJk12TXKj4uea",
  "key17": "66adqX8LUgeX67EBtBhBzKTDcYoyojZoKQmURDsBVkaHvHZMvCFz3bF7Q7EkVoPioNJqHXh3WEK5rRpEcBXXDqYY",
  "key18": "3A8buu46PbZEENFK7eDiGfe15bFqP5kzJrwwnC6PnbfCBNgkCJHWEd2JC4YXiK6nTALxmdEfYVYGg5efx8S3gQfb",
  "key19": "EhhoQtCazguvJ7dFDsPt6YEkhji3mh7moe93CHFYobTcxujZBmP8SJayCEHa6BxAmzeL7CrBrDRNtYHY8gRXfiT",
  "key20": "LSVKHkD74fadw5oNqwUP55q4ewFDnXwWzrMEyXrDXcSMhLcYRn2bHJCKGHsFmyno1sbFMHuiRGBkRszhAc6Du2E",
  "key21": "5R6PiWnda7fc6boy8qCmRVPX9Driw4Pg4WzANpAgeCcCcfYGpnrWDZrcxfy4PyPeC3YEmCgQXit5YZ3MF1dLWDMp",
  "key22": "5VhshUp9YnZQ3uDDJb56ShXAB8LwkmRuQc9dcZeP9wP5X1Sa3sjvXfqvyRdVc8bFSuh3t1BdPrmT1whfgkFYHVtB",
  "key23": "3WSPtKdnUfooLXrFGWrku7G4kkfBbH3P2MXfD3QmnVrfkz6KiNsa1FW7jxpPJmZZS8qkVJn2WEVyUnUi3enovMyq",
  "key24": "586jeX9NSxxqH3MsEAQGyWQtfNRHwFsojAoCRodi8Q1PkoJWvkZKm3fJFvZAD8xFBZyreCb2BjWLmtEx2NYryKBJ",
  "key25": "4SJtNqJdwc1K7JK5PXZdiLki9ywZVMFwCCJzTJfBtfNS8HhiRkndoS6dtuG9aFiRd8YK1p3jtJrYwyhMLQrF9ae3",
  "key26": "q2qtSasKfJeKtbm5GqrxEXTPuhEwkX5BZ5hXyfXoqPeTGfxgDVhFs6tjiw2EDFwFv2YCeVgdWrNPX5f2VXPxhac",
  "key27": "5osXVemCRpvcxfggFu9L1Q1LiozhvzXnCFpGHo96QVbZ89MdR5yLeRbv1e8CFzA5ECPc7ViWzDwEdyCTDwvDSW15",
  "key28": "ZKJFcbu18FCR47e17R8xM2xoLbjZMzyqn4t4TDzw4JXFN17zVuLSGhHJwfgLP3hWU3jsffvU65BU2kZXKuxoDMf",
  "key29": "46WFKEBcx1Wk4vK9JKhCdHBcBWa8DTbFa4BnXstsK7VMHm22ZBscgye7HCQbeEqFbrD7Bhka9XGZ5gmfiycoy4iQ",
  "key30": "4CVefiGYH9V3KcUCLeXWg8TzinxEQm7TTbqT1SR6vzKv9UoV9wZ3fMrRszSTRRUxNBUtjbRdc7ZnaSx4mQQWbVMU",
  "key31": "54UoCr7mamwCfFbz2hHKEgWPedVZTDuZVb5PQVRg1WhditwiM92DMC8mVhQpo63CS8b8Cusj89k1fg24h2ErvyaS",
  "key32": "562RQ372kP76HqzaWwXEHSybc6ftweYPC7xED8bvZtRBNnargbcErJhhMPRM5YzSPta5sgzCPZ62N65GPbf6oMyi",
  "key33": "3gpYmJiukjn9HE7QtjXDNoTdxRpyojduzZX3ohevvo4bX2867fu9wgYMy677kqevVBdYYDLqSTyJSEQViD37dEjL",
  "key34": "4g6SfvZC6LwpeqfH78kYmpiHA7dKwbcVcafqG5jNKULp8Fm8ZSp3SS8h8GKWs1t9zrhdX9ezqGbMjTneBhEmKwPX",
  "key35": "3qMV4BJ4gWf3snSonCUCJkYzctvbpzxhaqx8xdXtP9d6BVC8WE1fzFMybqvsGw5G1DxLCaksLBNpS5gKfpEPJBiM",
  "key36": "2ZikBTwrvbNZzmTcvQku9cEXfxtf43NR5gue9x4tRjZSsTfp56KZD82qJNNWPFvK35qp3Wa4RgWPDq3DiXDjBVRY",
  "key37": "oMFHqtCoDHuo9SwHXJ7ar91nXYWWqeFJVr3z1E3ELprG8Tm7Hs8dWspqdN2spEzb1WnSoVWQ4jMTN66LYqwfjab",
  "key38": "44cXyPe9RzUwe3SXuEH7rn8QdkR7bAPBnhWLxxSQUTgA7CH6tVHAkDqhSWUqn9eNv9Naztvha7bZZhjRqcRqvaNc",
  "key39": "4fDPsmUEqYtqj8wBrSciyvrZbCXBXwsFQzkJn3qyMH7k3fqbkZz6Pxucpnoi3MXozQytsVnYTwspCMTEVP3uDoHi"
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
