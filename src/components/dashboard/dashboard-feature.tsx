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
    "2NivH7MCoSZ9d7HfTr5AReWSh33tFxpJbcWhGpiDrocSQtpzoxLbaCcud4kGs1TzgkCAEEALVtai6M4sAyxRvhCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UT39QgEdHmmenr89TMQaAexNeayKuPrsT3KFNDGcVeyhgbeiYjj4x3QT4QKJm3GKh5NKSBUiQMFs1G1u6rJTJdj",
  "key1": "Kib6QHtzSWhEzPEpYgqJFooYmmneu2rf9aRdy4ob3XH5TYbUFnfKGuGoWGrDAeh5tEDWgB2qgUzra5hj3Ldm2s1",
  "key2": "4LHwBFvuXfp151T3d77tPMmXzwJj2RmwjqyTcAcV3vijrLmNFy3qCEHczGA3Zw5qsJdP4LsANyjq63jsnotAzNay",
  "key3": "3enyHz2tiZ3jGQSVGqk65FRkTp9s8d3NvToxTWYfGb5DJ65xbYUzFwoxP8JCRJk3cWhJqdhpCLGxnPCk6ygSVV2e",
  "key4": "3VCSi4htAnAnCvJRHyenU2gKJHuAsJFG5UjYER2CiEgy8sJ1RnwBLusJVPtwpovteT2CLbdHxEja2QMaX9AgFrNp",
  "key5": "4mxWhyXt9JMYrhKQRFqyoXS2hha2jtnMK49HsZNfRZQk5YbmDt6g655GtgSfo8dFw7JV73ACuED8hyHuMnnLnTge",
  "key6": "5L13hcGpviUB6YqepfpKgrjhWZCFG1mZu6ScSFBTCeprCZuszRihq2UzxbH3jetAZ92rLwqZH4bfHrAAThBixGRb",
  "key7": "57krrN7JRju5ZD2sGK1wtJ8cHCz9UrrByhRKuV7TffM3S77Rhj5aczQ55jqbQchcDPSLAbp3CmBdEcjJBG1zTJgc",
  "key8": "3XVb3HfuFWDGYE85Js2TNFS3LkWRabHLcXrFhMFK57X5y95fBPh6mFsG4YxHKfVUMwK8v55Kb6GcQTBmuReNmcND",
  "key9": "4kgbVc1DHGcLgQkLWbMddNEEUwg8Zd5JzDkS4jWjosJ7Vd5qdCBW6YW9NZ8su9jWmrbrwSFrpkkuVQUdFBQ7uitV",
  "key10": "5dyd7xiXefwiBSSJqLEWxjczYDmCgfZAVP627QWH3WakufeXbPibBqttAZZyqW5QC33ZgCoxm48EdbTuLiZzsDRm",
  "key11": "379M8XrYXw8tftENUzdfGtcVyqYYdUex7VwxU9r4yirgMJCh1ypApwaRnSKYr3mfWYcNkmAyNzJmwEwSiyFqJ1P5",
  "key12": "3R61Da6KAb91RLsCjNRiKsk3MeBhmscPDRFEoNBdjFnoXfDMTVw5a66fmgfJwezh9sQCCB1GUYv2mBuYrBdgPiPG",
  "key13": "ycAzJX7mWTXwKrU4Vt3Xw4TfAAq4c5irmdak5WMxZr9D3afRxKjvm9J6uXZQmy99Ry2xD6L4UYQQXgbp9JhM4RX",
  "key14": "2KnQGdaR5mSuD6S91aoaEvWDiVcupanyUQRcsuwD7czGrm33mubgD11mPcRW8e2LgbWs1fMdsC5Edm2va1DAa5dj",
  "key15": "2aXnoNJ35TgwUoEG57z3x1yhQL6zRnEWCKB855bsfwFTfhsR8aJ4Uhz5CdJ6ghvG19uCZyxkLsMjCWtBdB43gMKL",
  "key16": "5u3EyD8wyU2hMdLNmRgev6N5dhvmU5yn3y6c57JUTrRq2ngwAa3QFTWtcQUkSJWNEyBwU7TvAgiC7KP2JdwBSJQq",
  "key17": "27d3jZaq6w3CyUWAVuhuGdoGwWv8XGuM7PqJ4ZdrTSX1G764fAFxMaN2nt2WX7tckhwRPkvcGx9Av8T1fkTvx39v",
  "key18": "4cNMyKsR35yC7gNoCKvx6R4gxH78qjcvxyiVWTYSX9GdRw6RQvxNmyWH7LhfWAaSderuj7FX4gUUvSe7bqon6p7Q",
  "key19": "CDSQvP7d28L3TpTqKaMWwwDSwpwKqJtHup647wWgSU6c4HJWVY7rfhi52oqp22wi3o2JWDWx2wMp7W2bydFemHr",
  "key20": "X1QzjRPAmsySVoeb9NX3xtz27CbxNDGXZeRXbPXABQPSqC9983kAYGctbxmoqSTucgUA5wdrzu2dwdvoxtTvVyW",
  "key21": "2JywSaBw2tJ1q6YrQQps8jS89CW3gWvd2oWz4zNRtxG4cywu9tSTHE5ov8noeMNJzqawtsK2HZurMbCTLxGjT5hF",
  "key22": "5hFSpKpeNGQpvVNFdAXi1mWgQcvnrGdPK9BJcRNMoPTRbrcgcByMmWkXHwYPpefVQ9rH5a1u6iLqR7ua7Rc6Rupe",
  "key23": "4WxLXnH6HUjPwHWh646yCJyruespymP7W74mMao4qFpJhp2zR53qdkYWqcB81tEqjztZ2iRzosDrYemMdrfxWrzm",
  "key24": "5AcmHK9nnbRkHNYdFxSz3n6zEd2hbbGgykd5oxDHKNvhBCzUy6ErjLdrez7YUvGonCekFgqxFQRGFkBLhm7ZWgMH"
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
