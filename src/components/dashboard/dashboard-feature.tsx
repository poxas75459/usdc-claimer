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
    "2MrMeLxSdpDUBozKNCmBVLznDC9Seo1ZawHeqpgV1ZcX83qcaV4xpqYV8DN3xA4xVsiqn1PmUJGkmazgrjFPWCtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53yFqMDasCJVai3pEkBDNftbkJp6LXswz7ErbHfe6QaK733mNXfpDuWc6cpjnpusLYKtt67HktkW3qTYu4Lwi67r",
  "key1": "4v9uJiqR8xkDKCUwq15GS2Jtr8aFGifAmmk8R3JJ2uGqR6rGC8zN5g15Y7RHmAg2eu4FBD5RYQaVMKDbXSf8nDg",
  "key2": "5eLcB29jSME415CgLKZXcFYH2VzeoKki38H76nDp8KGZvtpyGkwyPLtQHnHDyQGmvd4TfVJjrsfXBxzefDxSVLyG",
  "key3": "4tPgSJuQakqmQjZbncD31VSqJWtQkMNn1udYbrz6pW7JyQDDFuHuhoHjCZXTCEKJJ4xniifhvH3r6nh3aBD2TQPV",
  "key4": "3LgNvwJk1f1Vb5b4KSNqwApMgXq6QsZm3N7yVsaAecFWpQeyxGCckpJ47pz7VZPbksyruUUyQE4RaGScV7t8wraA",
  "key5": "3EYnozz3tVAHoQvbeeG1dhaEzthp6GdeAjb5hCzNc3tv1436qwHud5M7mRt7LbYZdxvyQwZ2SAnULuG6Q9s25QZj",
  "key6": "42fhG8kpFEzL3R9GeJHAFXy52nzkdcd5FVJwzMEp42sBke4myX9LXXv6WxJ8qPCA8SRb959WX2obddiVviscCm62",
  "key7": "3VQuM2hQ27KqL3qWhndGxaSvXDMMRhwkkfyfHjg7w5yrQDAEJ64XEuk9Xof7RsMfZh8tFoSVyffAmnAduRUrgSz9",
  "key8": "4ogjfXCgGxPNpEisBw4G82ofTbzuUtSq5nEkCDV2ZBt5Ep2cH4ZB3jc7AtTeQBCdHN2sXWsUJyTsQZU42N5PUxMk",
  "key9": "2WzLZtNE6RBTWfH6uYcEHJ8ipRQm7Xzyt5T9rCgCDpkNSSpp7WE1ZwHWkYKzsY4ymbFy3TbfJ1EAnLoFJFEiVkfW",
  "key10": "5His8dBL68foUmeMycXMTXUSMoZ92pjFSHcL8d9sXmHakzL2hDe5p8xuwaivM7zMJMWGSCrCSnHrNJYqMKLPEeF3",
  "key11": "391WiT8fuXw8d9C7m9ZdFsQqfKVFi6NGSmNe2FFg7qZxE2GUt4CqbTJdb1BjqM9ZNbgTyNudDvuPMifuvxQCCFmr",
  "key12": "4X2nZY4dtEzn7m6nnafVisEWgggdAGtc7ui9xNyf6KKEJNApkqPJygenRmfQhKSifVzfdHp2ZW9VgH1eBezP2EJ7",
  "key13": "5LJFzXc4dqVtNeCqwJQ9dDc6sVqnG6M7gTo88xarYq6D45GESezsBM8wBTQZ4SakQaBvN2hg7g5hk9eZNkD88pjA",
  "key14": "2TUMru1N5vdSqMkJ9dxy3kv8snz8C2FqYNT1E58SgmZhQJrx6EK8CzupY4nya8wEpbn9BJmVNkG5cbrbvPkcJ7F4",
  "key15": "F344tY9wp8G4JHHrgJyrDpVm4bA1FAGytGwqSLUzhSoXVYdQ1G9GmCdFpFDmNVhtWDoXeA5UpYDPqKbW5j5JyX3",
  "key16": "5ecgY6NrfxzQYXrVZDTeLVqvjFF8ymRQAmyQV6GMnc4see5HWBUoqwLJnxCwN8bcPx7Vwzr72QZQsKm86TQRBomy",
  "key17": "QWj11ypYVHJFNNEVbw4yy9dbH1gcvC8ok73RqBTiinK9CWcbpMk4saoUZokzokyhoAsWEZCB4pngv5HuEQ5a9C3",
  "key18": "4oqXZGb7gavtc2QdbAio5tXM241XLC63RWorqTEM2ELy56LsqzC3n2DCSdi5jgza2FNQyXDVDVts7xq3JHoEAemP",
  "key19": "5etZNPuksE9at7GNaVgMEmBvJAdm56ThDo19ZXvsVddu7PeXQaBGTdPV8hfopyDf9K8Yd1vAz5bPyTq667m4G8UJ",
  "key20": "2cPJq792whVYY8diCDcGE3hAT2zLg6UZUqjkAsrjJf8MjecTnrnjXfStHkNZadYsXvLMz4AVzTYJQ8DcAQoxJXyd",
  "key21": "gyXbttbojF21DujCR1mBKdiLPdQNtTeWmeZUGenMnbWddJQ9L7iJ64jDmBuSw958VR6ZB1JM7Vs9kYUfJSBHZfE",
  "key22": "3dicxSDwDHuwysEsJ1Ze5cps3NgBUJvqcUfz75renXMhsjxcRFh8yX5RuAQ8UgbfyPH9tSCW2mmXW5dN4NS22Nb6",
  "key23": "2b8eruEgrMoyHDY1jXe3Ubfu9XUPeekqmxp7XrPfNRygiwfaemsSQbszD2rdgozHV2foMEVKYAQLtzTygXArGfEP",
  "key24": "3njk3LWJxNeXMaCtc4CtteSBGAgvEJnEUVwZ1Y4SvpxJiVEY4fs7NpeAHZaA6WGXp1qLXYxWMNGftt7azFzmj9sj",
  "key25": "4E4TY7jdtZbyhdvqmbbMR8qhWWFrFvhDHDbKmqRCBEcLC6tLaTbxumdMgs9gMP7SXY9cgttzmja7EnaewidEmsZu",
  "key26": "4S5nKR4DmLc5eQjxkcA9R7buH73j7yr2JBn611jQgjo6tgqU7TKnJif4kd4Th1jGW4ZgMSAPw6ocFPgSvJpw4Kkx",
  "key27": "5wDdS8WZ1zjSgtPXSmZdvxGQ32cWdX4XFXr7EdtXSXM4RGJtuCWhRkmdzxu7E2eG9bKUtBwhyPbHZyK9UdS7bor5",
  "key28": "3u5gpoqFmyvfx6UuarocWwAWRe5xGnTyKBvLidi1i2vhXtS6g281AFxSeDTUZpvv22SyDCz6g3fbV3MA8mQymv4U",
  "key29": "4ip6wAMkQpe6FwGQWpkBMpUGmdUmNKrgKY1QYLrGBzi9Yq5WNjpu5gbXQzSBSyNVGxWyySpxHbjFjdaXdUUFZ7Y2",
  "key30": "4nU7xVhWEuysX3mh6Bum1adn7FVtWxfXLXevjiLrVTPBJZ6UTHzQtrJ1HaiPKoQVnbiebAdH8u7Ra9WnBmF8AtZW",
  "key31": "FaLKdJHgWDLiry9bT2nTYQRG5NtRArUCDDxx1DtaF1Bjd45jbjMDBygYf79pBG2XpuiUAQGo3aHCyRq4MNQZ8XF",
  "key32": "vtt8UuaRYH5Wi9qw7iL9nYXEzAip3cP6Vc9qViM46itYawX7JgaZMz5X2dfWKxqvga9nLnfJFMaMqYR1zZL4znv",
  "key33": "2zHnmuFcZCivKCdYUgudLB7FWnPRpSghhXR98NMBmvC4uuugTir3cuVMBXUtKiycKB5EiaPsHBQ6A8RuA5Lb3EMG",
  "key34": "2DdAMYr4F9xAuM6bDuDyMbRVdHKWHNmhKU5vYrnjQeEpQ3HTefmyyFcQbng2p2aXfjZDCUdaqLpvZrc8bG9SdnE5",
  "key35": "MWcsEVvt1NfJrnR2L8VkpykCrb5XuR91E3pTHwPkLFNEaJZqCu8ssofTDpxaZEYMXvq6bojndgFVSPCVkFxd4Dd",
  "key36": "4RSGhm2FWAyPVa1A1DWUHj4Dt9Q5y2uy9BDsgeF413PoBhMnAbQZVaJp21Bstowg7kpW5m7CWZwVRtTqr6fAW1Z5",
  "key37": "42JEbQ6uACsSGTbJCZ1kpTnEqqWkwZwHqn22HDetDAxFVRw4qzpHtquwLDcKK3Wpw2wRcVwKdeWxL3chwPHposzY"
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
