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
    "NG8tPofNv2NfD1wWrQ1Rk6hFGNisEvET1Y5RPi5fWCJ6pmNEJXgasFjczAAkpAAQorPWkV53g5sWpguFvhPtC6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zAESkXQeVDqHJDBY5L2pYdHpmPckHSm9QDWugGvrT8f3d57BSzdTKL4iQ5f36Tkz3dBv3KhJgPB6VK7BfXWYA7s",
  "key1": "zkdW2VQjFUXXzwR9wuQ9ocrByjxuBEf8wSJ46r2cDtgjdpxgPdHUTbTK1ggDT7XwM4htncU4huHYVXFufFcXPnc",
  "key2": "22hZno1GLJvNQUR3oH5LGhZwiPaEryAvFJpGCtzTZNVKS1XU9cbPxLWsAMxiPs3qci1KG337hEdAnJS3fHUE8aoZ",
  "key3": "585ELxk9MGoArQwvx6qwEhnCWjKRo2pq5TJ4YeBLm5wQLxjC1tVkqojPtgMoocmzhTm1gJ2Gg5L7VarRAA9WrZCa",
  "key4": "4rKkMW4uf1RMHvyyd2Ay2Z3pPzgYdmrqjU3xS5hezpq2LNZ57DE6Px7dnWaMTwfD81yPDdo7TRwVHoaNQvcxRmbo",
  "key5": "AtkC7pRMABYyuvQ4eSDz9UsUDzrjhRiWS8yhDTLT4L8dZLhaykgUsfYHE1mo7fcmWifkRAZGEXnPJyfUDyTFxCh",
  "key6": "53f3q6LBvDYuPziVD7S31Bknz43Pt2niFmmeKFSGqBmNbLEMeWgJ8yqzjyHeD6KHxHKps7XueFwcrCZ26852RgHG",
  "key7": "5zJxyBmUHb3SqLyWFyicHn2Xwhw6qmPyGcPqcLXXBRbiFpc6nEzFwH5mkwfhZK7S62WLaRkNRUEbCngtENZEvE3v",
  "key8": "2UKwmndoYPmhLiB3nTBs9PyXF8xF3tthrs3eahGuHde2mCExj8Pcxwn4k2Ww5FEViXKsqutL6PeUsMfnNnPm43zF",
  "key9": "2F2LtbfDUmuX9WQZ2CwYRwzYeGZMp9g3CED1uW7HmEKNsrj2D26PkxHQdw4WUEFdmFHxBz2TAwYanRgzV57w42cH",
  "key10": "4SU4NYfVvqdMucsup7ULUcDcM99VoqgLGcmYEauJqnDoxf6Lbknuon6fE2CMVPDj9QMakcczZdbVwME2AukrJFMP",
  "key11": "517VBJ1Kr8fKMsiF3jD737d8br8MrMsff7LiDchyxAbtKSLEZoPocvBDPtBVfScgk8ZnzjhCJSJCkKRuZPh9jieL",
  "key12": "273RACcrnbRqGsJ38PRDvnM2dbW8Q1aBNVd3CFZNaUW5BtM8gZtQBQaNyGRq9EHyzfViC7bcpjCvsRhfyCfsyhCf",
  "key13": "66JVhKgCHx62XTQA1F9GaAEh8CbecnX3t6XxTFqcJEmoc7Mmhbrnu9aDz9yGtPrsCaytqwjcJdutTBP2Eq2bCn6K",
  "key14": "5k6fxRGFbfs15hdmnDXBFzyaR36ABRwh7jLtKjNPrtgv87wz6z2MvBE5wK19LwXZM55jMxZX4FNYSYPYN75wKF4U",
  "key15": "KDAviFteRGQdkfTXDmD33fY5fDT7e1UcfsjLtWiSHdSdZR6yJXdorm8fBmGTuy9yQLqhPzYgqZmXQsdh9pVasNi",
  "key16": "rWA74CgV9qpjeoQ1DRo195sYeocJc9PSc3NEzKFCfKJt1FUUbpqtrFeYStDC7rUgUyAJXPXGKYDFpQQj7CZmF1Y",
  "key17": "jzdAycVhcRYLk8HGAehun97m23mMSygaCdpbCTCMK4J3MwRVzsnb1FyFCknxiUUCEtKVFv2YoEaRE9Xgi9c3t1Y",
  "key18": "3xkvT6nYSosUj4F8ohmH3btE7xSwRP9shemSt5fFYh5zSZWrXnF2s2t3V5sj1zgtvt2Z65K7Qu9fXkJP7cndv4Wn",
  "key19": "3uTdm4bBWNHAkXcsFEUXnxVNSB7QvxoSZ6gWc835RfCixAdBugFd2PvsUB5cN3N2U9QMcRc3mbe6H9sLgMS7zDyp",
  "key20": "5WnJz2L5BUhaTDdYfgnBn2yb8sfiu4TGsdqAygAVURg6UuR5uCMn76ymeDcmJiSvbSbbnFucQw53hNJy2C1nTkbs",
  "key21": "4DU45SkAeEGGJYVN81SmtqCYB8hvorr2U2oRPqdvdsMs6hg6DHbHFusydQrsD7FSTSXV9DxwzRWAS7Xw2y5EQAnW",
  "key22": "28DBSNL1nSrLTeUwTYBxeBSw3zNb44dyEqp8HLd7qYqfoGMyhvjP6RiLYams9FJyDGuacRKXVjrdDXcwH6CUP3tV",
  "key23": "3uGJWaxpEoKdZqBNjbbTTs3H3wLMn2v5S15w4o3Q6fw5Lnpk6BuhwhGnLNGLrYh3m1MsShBm12omvGpaB5zm7YHS",
  "key24": "4AWMXsh2PfzQDDe3eEyjwszbZe5V86rGBqrwWRUMEzpy7giFKRZEaRE44sWjFFJKVzTdBDHPJo92iu5hyC84hyUR"
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
