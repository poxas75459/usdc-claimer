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
    "2oFpm6PCqq2C1SzCaJ6X53opK1Rd6YuFziMYYopr8ZzEAnr4yvbWtS8E5ZW7fgf9dHWQWGyNhNTUsm9KNGbyL6Si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aht3fT8xT7CvCzyGNsWb6ySWdSavem1Kr2ZVPWFtgVb1SetigyPxGCG4dtLsUiaYspGG3LWUsZh4jFw5sjcR4Pu",
  "key1": "5oc3THwhQBK6Liaqx75UWnXNtokr5eJx4Mh285GK88xYr47pfUGdisRoGzT1ErWVNHXXnDmff13nfPMSgXKeq9m4",
  "key2": "3oM3Huqc46Upyt8fvqjciHVjgjkEJ7XgNvBtxpAt3HWSN8pUf5FVtXczf9Sg5HXtUdfkqGJMdFhvcmnrdGZLZhUU",
  "key3": "4JS5aFuF44tArnqgZTfprXsYaKHnTduWgAviNz5TVrsMNTe4R7w6U2FejWDpLaZMVD5fLVNzsvxSp7CNeP8AGZTN",
  "key4": "3cEmEiXCePCFGC33E9BgGuc8WorQZuC1CdvD9U9DWxADoeV4S5f4prGAmo95BEnLnnQx3sRbn588nyksvXQKU8MC",
  "key5": "3DdQnscMWjosQxw6zQYGdFSppQkNhn6L4quBtRadR7JTtjjiiPXiuHtsnpMt9QFNgFB97wyWzPB8oDARmWQYbAia",
  "key6": "2Tuet1cJ8gnTubMycK4PMC8raFZjFuAUKM4SD2EqpFK5WttyNFDGN9J89y3v3uNxoTRKHzGGWCt57cQHeb7VQajF",
  "key7": "LcTVYKHH2EUfCDc8Nwv2pANkz5FKCdhCmeiwbXJ9NoCd493d25H1ffUFjEyjtoKdzvy3x2wwXurGqUJfGQZC2WT",
  "key8": "49TU7PdMcfrLcwadrnydLHiFwznE2WoDza2cH1FWuyCWvHAVryYdLSyNPsCnrpft1KpAowkgJNzjVXdJytmawaqa",
  "key9": "44tXG2s9VQUpBUDtWmN5wMY8PFdty59x56E7YsRt5WPXaMmHv67jy6vu54aARWmjDThh7F7K9dunieyy1AoMMpqi",
  "key10": "3NC5pw8RQYcorZNh9zJRBEH3oBBfhdRPLdJo9yXyW8gAWN7NCvQ3PyTPQXRsydTCtqCjmY1gGZjiRbnNaq1S6VLz",
  "key11": "65BF3i8b1H2B8KqNxk628drnStzyHuy12jskvgg5SzKYgh2TCUieaoLP6N9WzRXaEEfvr1dKAZdoCHzpkgyvXbe4",
  "key12": "4QCN41nurmc6KZFk8HygFwXXubfWSgtP5xGb2p5UZcoJNXFkD3p4g2BHWL4BBeSDt7mQx6rDCgiVa4KRbSKytCgC",
  "key13": "H7E2k5YuPu1zKjHNDgeUjmLAdyto4UAdbMp5dEt4zYsa4Jpo9qpYAcPRbQJrraFwzBKTApzWmoB2s3poivFn52V",
  "key14": "3WNWHip3C6fyn6zVtmQTD8ekXM5rAgJG4YcbXBmfx6A9VpZWRmG1ALKiL2dcKdxzRL3VWqjVLTNYZrGommL2D1Tf",
  "key15": "4MaAWwdY4Z5qyaPPJ6kSyPVdeu6AQkDYKJ8pFS7DgVfZF2g3UnkToB7ozVCgQEVhuFjXBxUn42bQrgJfAXZvzRCQ",
  "key16": "LA9HNjWiWYYLCgshEEWqf7mVvudLbsc8JKiDfDKF36WUYCJPmGqabb3kLeimiHmcrsnhpJsAZ5N25rt1m7wDHCd",
  "key17": "4eNU7Aa2gvmSKmFjBEzMjYA2sHeNwJJ9Hz3mVFPVsHWJwqXbEVMzjpjLNsiGUmRBNThubmKBAV9dMnPpd9Lo2dot",
  "key18": "4GW7pL85SsjXkBc2qyEpb5T4adAB1CxnstrSidSadse1C45esp2JyVC3kPEAZCqiV8ozGEJssEDVo2cdyqT49Dk3",
  "key19": "36q8t9RZfGjkzcA9P8Qwc1qQnsyWnhoySwZNRREU15nRmymhdaSb8myy6xhDCZdocG3izL1xEryk9vjvVr4mPVEV",
  "key20": "2ctP5tyw7VDqcwatP3gxGFnPPrjA6ZWDc8fai4WdbMouAzhVySFSied7SfRNNUFLQ3K1xob6BqqWKkiugJQsuA3v",
  "key21": "42jiYqFs26SxKXXH3qVQJNdCAeANDqBdz4VaHc77dxKCU4dHxZq5fxmREciB6SteRY8o7kGYZGwhN6vo8gh9DnVi",
  "key22": "5WCwqNj7EnCNx8JxoMKJ6VsiUHs8pBDfQftVbhzCQohKZqqtiSLXiyEQyihrfrFfpT6tLBxB4fLbKE7gJdZxYPUm",
  "key23": "2edykTz3ByFvnLVrRWqWnMcdPzzuzY9A3HHcrvKq5TTa3DkVGvoULVFbgb4eB2xj6d4M91Q5XsouayTWv3jbUerV",
  "key24": "5YCmHdLraNJGQrtT33oiM2PziWUFxV26Y94frgr3wbNGyfR7ZAuX4eAcgqMBLJWFyGmTH9esUbWrGKk4L8Pwbhm8",
  "key25": "2MFtErPxqJCC71fZg1cccRErXrcwNDTmzozViYr55LUShbMWTNDqLTj3MPDneeTbuNPsHLG8AqRv58Nbt9BZcFSv",
  "key26": "59L9uKTLHo1z9DSmYudpYSbHBnLwUUEa3MBXquYhLELwgvM5Esvqmcwa7xJvGShw4eqXqacdZwhiyh8LBUq1SrdM",
  "key27": "3A9MqQcNcfuSumVF9t3x3yVToo24pCQwLZSuEuVyxVHBtxqiymTbHoiG5gpDEZo5tbLFyGF57CThAoYETwNJkzsL",
  "key28": "4MxFVQThBirH4GXzBmW5GUZfmzNxejpgpRWvtq7ycyj9eCU8RuccZHpEX9BtiBJnrmDwDmKmgvbAPXycCPQt58tw",
  "key29": "4DuKgMgu61mSQnxnD1x4VgjKnMycocuLaM1RCTsM5kA39j68mgfcBPsbYzcrGy1bytoKgMRtcQaSjMmVFrUfog4x",
  "key30": "27bMzKoomPMPx9v4HM57fxV89duH5JhcD4BaghWH95qLngHneS2WofnX1XdtDaCmEumUoioLDxabrbnac8smZ7MQ",
  "key31": "2AbWHUjNSCY8RBqBfyCQ6mwCfujLxzDE6qKD9MrLd2VFXY34YcDpf1cn7V3jWCFAfnfDuRjbL39JgzRgADUUWpbP",
  "key32": "21FdgGEx7Zm4A5x7co3PLnjNfikFQSNhHmufBhQqJ4TnL6cSubEaS8DEu8Grcy97UHw3qY5ZoeUQ4WSfJzDfrdEE",
  "key33": "47nKgXDCJreH1mQXHFXTUXsVWacv2v1dCGUrsULZsyVcZrwVsA4Fz5Twj1qAiqFuAFB34vbDDyx6t86PGaT1tCoV",
  "key34": "2ADNFcLMABp8WDf9pfaB8T9EPjx1EwxmrH6hY9a4EJvrUUU4crY3Vgy1Tcii6t7N1gufdqVAZ6w719DdkK5YcL9o",
  "key35": "3DJ4vZmo5rk7qz3L4MwXZwv3yQrmG6SqmU2UAAtZvwQNE8mGnFHv1XLenp3JRJJJYZyaEoqzFw5zA1RMhAv8Attt"
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
