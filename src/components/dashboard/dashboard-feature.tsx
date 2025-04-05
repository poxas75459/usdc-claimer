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
    "4paB9QcS25TyzcTSV2GhCqcYhiLiitgsm8ayVDSigeBdzHGNfKEhvMm5ze1Dr7S8fU7p9c4zqsan9k7JaRCM1yoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51hxfqfojr1GU7Lj6Ci6FwjmBmBNVBqo55YhZGDVWjX1P7szuaqLsap67rh4ZYsmuZ4qPNYdq1jqmQUfGneyepdu",
  "key1": "4RGVQ4v88rhsC391FhDq4MnD1Aa9KWgU5g7Lm4DVSBttcef4gHYNuEW3otWVdLZV24u68GzXLQ9TvQURhbtEH7xw",
  "key2": "B5jbknYmCS6jUHMHQukH11JyLx4dPNLHmigp5xHpupqUrpTEEhgYmMyHAh6Jg8oCVRxjXcSSiKtHhQrWnuEyh1J",
  "key3": "2WQPPyK4M4paL7JpzQsgmiL3dom37JR5BGa85FT5Ad6k161TMm4fdX29s3zzTgTHexzf5dFaxuCvvHEnje3fQwMy",
  "key4": "25ZMdQMfjnsa545NLbsh5MKBn4emgWEj1vBJoBiyipSWVowqi4MbRjsfKeDYqyLpBzv6ty4KYSsJTfW6JJ4R1vmy",
  "key5": "22k7chGb7ZQN6SWo21iAcuYDSEvHsKS1BNmTvEoEkSmpnrATSFRGCECnKCbwg1tiarydY1tNkXJMoWoQXzpkcsyt",
  "key6": "5EE4kL59R4Wiz91Fv2F5kYmGy4jws8Xc7MDmwne25dzUg52o2RziL7kDSBQFf6rDgeSdTiSzzR87QND3aYF1FC8k",
  "key7": "Jb5DmYnWinPtyiZpXozBHYLux7vu3dFoCn4Bxn23S5P1Y2uTrmW5k1kM6zeQMzUTJMK4TrxqGiJHF2ZWnHUgoA1",
  "key8": "5eaugMZec6gKCdmojAoiWcHHGWNngEVojJ3NG6tTb84yfM2N4m26iQhXVvcLVyeAXNZYZ7HsHUWhjwd3sULjHXDA",
  "key9": "5bUHhiyk9ZrG6MdtJL6qcL8hjYEZGwPpdTMCgmfB65ygew5Ft2hGapZYYYCWVwBbn32Dx6x3iDvdXJSTgJSkjCnC",
  "key10": "4FozKifbb2AUGhMPffA7Lh67UtyCBcdWMeRDeSLAtHioyqntYeaj5tgwAAMGHV1va9NHWmfdWLW6e4fx6UfUT92V",
  "key11": "feBG3j7tggKitJQvwvjuQCMkAzRcktTmhZh5TqQWMhrGdgLKkqUGD4h98f9AsLnYBrRU2MG2us2NxFVyAvacEUV",
  "key12": "5J38pXysfgW14ZG2qr92CdeduB9aYsU9tQnrEw9jt1uHLCNSvUHDVcpQ5yHYKoVNwKfWDgS9utCLucjEaSVPPvb7",
  "key13": "4UfY2caaaER7UFKDkF3gmmw2NEfTZcV8dBmkETJF2KXDewvCSK3UFTUsBLSACpFzDPEydUY7qVXTUT5ntQazAXcA",
  "key14": "MM6fN3JZVFp4o6mXiXEfwV7LXtkJwzZXg9Rip3De8pQsHsfgKjbrKgtzjADgtk7htQscUXpWVtpbVMSuudGoS5y",
  "key15": "3ux44fmA3YutSPTvdMEamTmb7hHjFGtYDSY4PgEey6mPZC4eeiRMx6d8Tau69HY9SWgJezZhRVem5UjJsfshbYdu",
  "key16": "3ka4WTfv425tvDdTWdZQjeiwLRms9CG89NtupBxo2eyvGdAtuYSaKyy7kurJQzRJG8UyeRQ46QUVtz9rmJwWasvB",
  "key17": "3jobTy65X215xgEWZ79rfA3o22g2TrKW4rTZPFN8fHX3BYAyk6Fgs1E14sLEwfhShTSYJKPEQLDHqRDngWt2kdum",
  "key18": "2vAnLH2M6iajqoq5VS36UjenkPoKjRr2uTT4sxS6B5acgQLV6g4oe4enKHRZ1tRZscABrMqoWShh5FBwDb6erGBD",
  "key19": "5hy8k5Y6HFt8jmfTSvXfiTmcQm89f4ZsmnMJSnf6UmiC9bCzxGSLhxqysKWyQxPyQt14UocLy1ntX5x7fMb98Toc",
  "key20": "4GCcEU9wS3mKQz7Yr16cvmb2nV8binTpAXUPrsNCDpY6CcH8qqXj9SABMMX4TesuB3BzYBaDAPMR4J37y2wWRDdy",
  "key21": "5fXZYjyehdLQpW2wc2gB4qLmor3uuRnEB17d5Mjj81gpz3bzRqgVNieJ4yQtENMQgDiN3LPQ8jsAB9maXnhjV8a5",
  "key22": "49bi4mzwzax2WB7xMi4DJqgyqHJcUYt3znezZjsJJNhsQFMTXE6ZSLGAYEd1xLsuMkzXb677xou812RrMzSngNyi",
  "key23": "4DAZXypnJKGrn1gbBPYBXKFhV33ppHwkU9fVjY145bvoMCzbL5YWECuns6pdWy1HsPNpECE3v7hyxhFEds3vDBhe",
  "key24": "4F15YnvT5KPG8Benf6mQ74BZyXJK3GFWLrUZtxTftjbnrMqsvP71nWABbcXJBtkVehBRE1AgUWM9c3FbQjLKVQr9",
  "key25": "4GpRKxXt5mHGsoxBKHKViuDA3mpUMFmeYoYyqTwc73wr1c51WVUKFptKvKfnTZH4xt9UPwCEQA28tDijoyAbi59W",
  "key26": "5UC8UbN5kHWkXRocPkpcdgD3u9w1pJy3zjWPLtbGQ1BA6guNVboiJFbV3zmk6qyKAxL4qyzVYx5NwbpPiHP1b4R1",
  "key27": "2taKBg2M1FytWnyZHyNrJJo5iokHZYYwks3yuwV3fVnAGnA9pJDd7ju3rKyJGTb7qYDckAGgTuF4Rgnuftwe92Z5",
  "key28": "TvTJZ4EQaWuzbFgo4ro2FDLLU6YRhemwyRXi3o1NJiiqWyaJqAPqt1gjT93yBr2RvvFTLpoM6A83UsVNovfKyQ8",
  "key29": "3vLDcGFvjdC2Sjcr6czfk2ob7Zknp2agU7MQirzEjtE4VFPrumgpdjmp2mWueGFRU677UAAm7jBtakLPDMSmsatM"
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
