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
    "2Fmccw6tAACnmjcxzNeKzsNz5B4zSCg9XHpxvZei5zotFRthBbFTSHPg73hReraBM3o7mRTJEUBtkwCVgJPcrmKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CbMnGgpZhZLfM6ox3oxWFBXnXSWynuZWHZHFkM5WkduhBLdRK4Z92nfZQKeX2GgsgR2TwD2fSsnpPt7oy8JsFzG",
  "key1": "5GDaeKuYdnXJgTW1zDUHeoWCMfa9E4meVWVZMzmy1LbH3q6K9Hr2MHBkuscsTa1rjro2cU9srq4GW4BqMq4pK1XG",
  "key2": "47UobbW6YC3MQ4TTEFA7BPtJJfnUSvFveurKA626NRLHkCJnAf81kt7AjKUS3jSAdcQbXwiebTfJMhrignk9FTUV",
  "key3": "5ukkzZnqm3vAKiMXeymiR868KKSCKVvm2vk3mjuuGPqEKPSUCwv4jtuX2zW6foEZ29tkR1fh7PmPKw81CzdSp2HA",
  "key4": "62hQP3EZUKWC4GK8ApWFNdynnneFN1dT6nwwEUhGJiguZNxnmbG58mbL9HrsU5Pm97AWFvp4o3jnSLTDn6ftNMF8",
  "key5": "5rkzSSmg1wJaur8DzxMHadUWD9ZZMSxij384HGtonM5CkfgkABBPQzA6ZZnUniPnEiRh7gM5kZzfovv9TDsJDmwa",
  "key6": "216sKiasdD4qiwrboBFDFxdNjX57GcKqbczTEnvCGtLSgHrRQwK3FS7guffzQuJ7ihTmVwj7QwQwcbvdYYYYX5GJ",
  "key7": "3XQB59uPwp2FnMR4i8yXYAFHbzC6bDMLXY98qNgXXgSeJzatThNXgJo3CdifaXLsPtfLfoEVNufibbhQNJQ9Ti5T",
  "key8": "3LNnzChHrtkSxKCA2DmR4XLAgf44eMRF89cMjMfSzY3W7rf1ZVHMAnHmx18H2EBd2dDvCBKHx9RC9H69kepPacnQ",
  "key9": "4GdCVTqgo7vPSqy7fSdy27nyib8gy4saryyjyqzQL6PTEtmQBCoB4XSC26fzfFNqXzkCaN15C2ho5f15xVxtU9BK",
  "key10": "4h2wEeYnnHL1CxXv8ZMtzgmjrsovfWjPbXAwKcxSrj9wze69bm41xGGAaVfFx6eEMfcgTVzpB1WUwRJyV3x7qyL",
  "key11": "4SFELpKwVQtwUZzSLhyX9xean3tKruU3ongRcWgyPgUdSYjtgLdZMgFJH4GBaGDKYaHbu6WRSn99Bsi6TSNgEb9K",
  "key12": "5DAzNzMcSDXECHcDedNydom28v4GpVaETJHkQx4BEYRPMKELZQocLNBYHDyRVvPMiSzosjJy7Xan3fodDeN86Z1X",
  "key13": "gj4K1yMRR8E8ByGvpwVbESNABJm8b3pYyhWS4DY9MqX4CUQ83xvZrYmmSpow8UYqf7eEQzTB7yGfQM4NujjCd4f",
  "key14": "2jh3K5DnwWP7dobrtNEekBjKQFHHkFMCfJ7AWhh7AHUDtNSBSrtYrPvgLqJ8SjUs9rj4etkLdvLj66cYDcuPy1r1",
  "key15": "W4hLzsvgYNswh1ypNWGH9SBfNoDxJD1ZMTAbug5yQNAudfgco64F6zWKVoPVCXXWWdCdFzdHY1DSxa5BuJEHeq7",
  "key16": "4qU1xsV13kKt9GF1xRZysYH7oQbgNbHDD2Qvtziz7TwRjCU62NzdyLBkBeygvQureshNQ2fBajyo2Yv9LwY14Mc8",
  "key17": "474iCAvBxdVMntZUtgA2uAqq1TDpB9yGUkyXCcEZVVmiV7fQb8s98NqVwz3woTYurKKUHuVBoFUzW3yC2V4EBhZj",
  "key18": "2y3Pc2FJqVx6ZfnM77Q2WNytXr4QFV9BTuuEoxL9tecoqsFnTsCo66kC5Xai5Keep98JnMte4Se6mv7JkRabj8Tm",
  "key19": "2sbjNoqY7wsu1J7AYq9LuQxKn88W9a2gGH1S88ZFjqDjGbKhikuve34VwpboTDcTAa4o5qyqNhSTa3AhJ4uKkvA1",
  "key20": "256JeC8e9bCcFSfSNvjyC6te5mMhT3s5hw6YQPQLfBgPezBRBrjKR26ZpBb6ED5Cnv6urR8knBbCeC1cyrpGVCBW",
  "key21": "KoQs791svVGSQhxvSbmvv4KTSi4Tf7zXn4vxUMedXwoz7pG8rqoAu6aedNvB4BrJ9ypkpnnmbXF19vofiMBSYpL",
  "key22": "3p9Rx7e9ew1ZrwS4NWV96ZFBW65NR34RfrRxS6k6Sq2exM1KiLYtHXiS1aNvMzpzWGjjA7xfXKcExxpjL6BkiWE7",
  "key23": "Yg6LnwNBrmv7pyG3a2F4J5j1J8T4z2DC4QBkNozWW77zuMPiVYHA69pNyU6Bd2xXBMjQq86GXS6G4aZ9jaST7hh",
  "key24": "3hWRoYWpeazgfS3x6x8fATZLwT3DRkr75zLQa7qAM7Bqw9nYSJpcCTah5j9bHjpT5xgLWUhmAyBx6bp3UkvWoWvk",
  "key25": "4HDxYHLKdKsNUFATQxob5aPVAGpE62jnrcsTrU58uZJ9eQ35iGHgBwvCEbJexq5k1zh65y9Y58kDKBuK5f35wuMY",
  "key26": "o8mayuyxGBtZncr9dWV8vm2uH1MpLVWuX8WX4Vv8aKopG2P5QaM7GvzVDDXpbuZJmknKh3tUy7nibTZSJn3BXxE",
  "key27": "3ZAfr1nKw3WhteXTk5EQCW99Bs3mri77byGaz7vHf4cDthxH8d2RPtDqzspnZJovYsq1wFh1T9BCF4no3ZdD9cNs",
  "key28": "hxtpZ57YtvuPD441W6FQFBEA8nhQCwUiCYsweDPMATz1Aqosft4EwNwH7Sos6VB3f885UTN6iYxTNnYa5EZQSfx",
  "key29": "2y1WEBwv8UJ3Adq4ZJm6HJyJVNdfYjpFJmPjwjna4YqWpW8tCcLYpE6teTEQ1nPmnMQq9nzrMJ1iQcMLSeFGZyKB",
  "key30": "83WTRBM5HzQ6okDV9c2JGpkHUE8dV5sJeAfkZTAz9pgNcXTgr2uzNUR9ZHASeNJSVQ3MupMKknwpvmbGsgGUqr1",
  "key31": "551f5qee1TB2CXezkaeykoeqi1ZHVSYfrV4HDwMBGrdeLgVamH47KTX3bCAo88Ha8Ln18q7Mvq2MM1rcMfVGC29T"
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
