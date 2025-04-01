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
    "N2TasQQb15rQS6A2y1MyWAt8BeJ7JVNSgaRbc1mCf4mhLAzMnMUdhMrS63o2aCdbWF9YnfKSHQArhoHEqTDLQoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wiwsuE7ShrYcNTs72DuthH3PUHu7TC6k4tCnRiJv4JraGzmePWhYqW5bqXQ6ckhxL7PbFG9QMMK5LJZG4CF7QA4",
  "key1": "2FwR9UXzuv8ipSiifyYcRviv58a2SHLEhfzbv37kG8ahx8CDXjWAQuyzwdPTr5QUZyp6Entw4RP8EumGAXkD9qC8",
  "key2": "4T8EnYjPkyMp8auHa1Kaf7A7G8ku9Xkiw8bwzsq9osqKu6iL23J4BM9kmsZjafnwxCCeAXEkoErPQjevH4ux9jhM",
  "key3": "2WC2GoVH2CmZ9L2dhoPuWJwrBFvPC1P72vx15BHL9pGq7k9PPjf9df7eVFWKk5br79zYqdF1UNnhPMmAvYtva8CY",
  "key4": "2zHEcFgy3QR6Q9jTiuHFx3GejtGTxP9RNkvXXBWyxXphtNMSQJp8T6sH7yrB3kT27UjKFFMzise1kU6M9AniGGTp",
  "key5": "5FPKKk5ap9bYZ7mJSD8RrC43pGRDRRDzTPLndSxRh1fMfzCX6FWzSL52Xuqzvy8u3RGQasSXCLkbSGR2V4RGEAW",
  "key6": "DLVhxZghKDxf75aSf5zFiCCV5aLHTGXYZijZAabnf7TMCw9L7aN3XPrCSxqAwRENS8L2Qq61T5ATdDntCkH2VYw",
  "key7": "5e8CMbSUnXpp6LSyHXnUDtj54J5LYb3uTPQ7uVsunPT1g5C8qJQziwQD4jogVE697JR64fodhUc4kLYRyTjyyiKE",
  "key8": "56TS4k5mmgEyXY8rbYDFynHf5fnxrvzm76V4Mex468xPM1P3XqCSS3vQAKpGGyYzSoYZoD8uV3CeUz1vd5ZzLrNK",
  "key9": "2NvvKqugBz4SrhPoLQW3Mx4Mm71QfGue5Msax7DdjRLj1SX89p47FQYo8XURZg9uQgC36JMi61V4JkWbWZD7U76f",
  "key10": "2Wivvh1hgMtgui1rV8JSpawCJMd6ZFK2Zt274bKGas7fZJ5N4D3YjpieK6mKVoXaXG3mYDXgLkqd4gPQjKZuduJS",
  "key11": "3NhXqBdmfgewPLU1AUcfg7oD1oGBR3CK2aBzcsWF8RdU1Y4iwP7hrofQF7u6Nraohk82Fk97FsFRppVkzDxpawco",
  "key12": "3ZoPELegj6JoMATCFPUyQthtBtLQ42CXb7BzGALE4bz1mRMJAXeawpkNuvxpBN5PQuBLRxX6KGf7tD8R6vJiqo1t",
  "key13": "3My3e4Vybsv7wVqPb7QmWg9s1asjpEMVkwiDrEUbCEkPk8CHrDkmZj1uTaSpNxSm1TnwrWqBMf6q7cG2CKEuo8Df",
  "key14": "2dXgPV5f9u8YzaY3zmfdFoQAHyYEpsNVjykypea3q9bL1zK9y1x9sU6jC4tDmWsCoVwXqacohkdew5cZN85PakDE",
  "key15": "NnUm8ynEWN1XZqBYwGgma9PBfDX9qeiNy1qpvxCKA8AtNXqJSAZcPE3CJyvyfgwNbeguqQi3NPcCY4iiNnMcLmG",
  "key16": "5Ed5d5TUUmkHrnnQh37UiUWjYLybSt6Wm5WS9GXygMAwiqoRibzf9YEzaqmLSdNEakkudRZtBckavYpoiXn9xvYo",
  "key17": "xiY1YGitaSuDBfATXPTVfBq6L7yfRfhtfMCRaKrPV72W2V8TJHi5wNH6a9Td1CBBN8jqDb1yzxRvA4R8S4D6baG",
  "key18": "bYfA1UGqa7MfSvJhSaqzi81s3KXFBHLYS6MwXzzDwsgh9YU6T7RKzJvRrtAFQ1T2U9fe2eP5XjvzkYuCwneZCT8",
  "key19": "t1hA2ycr4W6B63wsFUSwxkwg93cpYWhXuiutDvwQc5q2ucfqFw174utJXbpPy3NCEgtPWKq2kDLTjdVixf1rTxq",
  "key20": "67CXvhWzXgizdRfqox7EjfTsNhKNBWMUEfM7J8U8rykGXpR6TtiThKxotG1Snu5ey2UuWAe3X2V99aHVPjVPx3Mf",
  "key21": "4u7UrSGsaoZo8RsHNU6bEYVN4CEtn4atHSi5qBVYeASefQFbUwJXbCD4v1RjusZdJW22tgDUMLKEgktVvWLipf4s",
  "key22": "2jhfcRLmqwPbwnwNv1QmBHShgMvGZ5gyLdtsPrvpuRNMJ9LZc6kvXrt2sGaBvzN7ZjwdqPp9SZ5gqmoo9Eu3epUG",
  "key23": "59nqbT4ssybP5T8CWttoQdVg7Bm7YvFaovu41aNUkbGdhRPFcbp4RsVkTALsgFP456yT5xeuTMxjnf1VPHo7mdSW",
  "key24": "3BWDsLy4dWpEL6uFyjhNXWUNAKsnNBF13tnMpmxjvUJogc1VoTgrdkAci52aaW3KkLjpZm5KbB6qeyiBjwdkUFaQ",
  "key25": "5YdHWwtMdSq6T1pgARDA7nrknxdHJSWyaP8VRQy2L52ku5dAruXsi3cCiH654g3saS69dkk947jJ3JcFMfHpqERt",
  "key26": "VLpDqKATxkYL41CMQDFq7VNft3KXXFGcx29nzjeeoqnoWUXoVAYRB7wH4MTgsj11EKWsn3XcTN6Erjum8azrzwg",
  "key27": "3gtp9fXLK38KsrbPu56YPUnFFtd1ySCVmfJGD5KjW4iuoEQ16DRyJohX7GSjmPbg7pT5KPb5nbRWWpra7gLrvPum",
  "key28": "29PbrqBqphdo4gVJf133dRKCxra8svJSkBSFA4p1NGbNsPwWQurTA5hoW25KdPtiD32TWVqKnPFR5xYeCTBmGivs"
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
