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
    "3u8JmVZrCLYUr622nwZfsFw3HPktTRY8X7vFwLCwwh9mzv3hfE8YXwk4eJWJbzxBy4bCH3M1HjGkh1jFCGQkxRei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25gLJXtPkna8JCjbybm59wGnD28aPE2ZJAtHoNa2Cg5L4UnBDi2g4BqMntfLnLDpBCji1As67KXCb2JTVtjWKQcX",
  "key1": "3SDLjs7CPBtR1hwZjjsq3fJnNscd8kHrMFEGtAzfLWrVh4rhWgWGT25f5HpsKD2reRGTkSvASnbiKmZEbPco11Bp",
  "key2": "2kozoTrRmh6dTb9GquxdnhhjaCV28NuMyeDMFPKkUQxP42EGmTmx4pEeXXKi9htDvokzqSN4usiWTpvz7TV2Qw29",
  "key3": "5yx4cRt4h2yGNaF8UhVJQJnheZwTNsMYr2n1YtEoGLbyLvV5kwJYHfCSqaXFZob45ZzsxVjhws2RiMnB41uV1nHH",
  "key4": "5es3Fro1qCacg8LauRVVKwgoF2usmDqMBstnhG5QV2hCg13vQQSjzrVeKTCLpqjP4dF1eAGzP4Cka4LFY44EYszU",
  "key5": "2vc2TT1mdUtFiDYSxjjBgDbFrzCqWuzmvesDyDH2Pgxqj9vKT9Zoow3mRsQV6uSxCsFuCdTw1GQQj7KW8dh3wgHX",
  "key6": "3kyFvEPJQU9aqCV4kxeFPSeb2CWc3ArTmcR1kRCzSzDjy3zhstifWsxHFJRNnsdMkCHq6cRUG3fxk2z5DXfC5Hic",
  "key7": "ZdPGsyUKaBpHwSbd5aPufJqZ87Qx3kc3uiPJnggvQhnzZ9pwedFLHKNN3YsxKe92REJ3UmrALUtNvWCGfooGXWw",
  "key8": "5Rngt7VPvhrrjNKTvey7GvD9sAT1AZkmmKdMsZRrqZfCAdEJ5eTVS63J6jQE1iji9DpWrz7e2iG1yiDZtq9VcHmG",
  "key9": "5sqSB39eoGeT5WhRUo7UfGWGHN5Qsj9ZcQDj7mP8X1NVtXSUgZ4s93yRrRm84fuWsuah7WFYdh1t1t4uXCNaWfjd",
  "key10": "LGuXN9rKDvodfEEVpJt12Gj5G2oKwMCAeYSG7BHBKFV3eThHn8VxYuruD11MqSxdWPAjjrW7GADxk8xjdVFFHZR",
  "key11": "XJTykjJfMemxp21brnx5goAWTH8b3xL8P3d3MVSQgz8vTV62dehB8SBNH3UxdV6Tp1na8CiFv8bHNHfVpXuXEEN",
  "key12": "3G3GXvNrwN4zp383FNpNsEwosfikhAFngCiuVhmiHrnkdYPs9bi15zjcbLq4oTbCdoVPesVVhoopm7Lhnc2w9CTh",
  "key13": "jsnwFoakhjirSb7AoumaDRYa87LrTkyVrDyMUc97hQN1N4dtfoSVnzZ3cf97qpJ26e44kE7qQHu6TAHSm6QNeeF",
  "key14": "3cGfaXiedA9q83rEYZ3SJjBfiyU7guXBsvcbCmwqSe5wWU54fDGRbSq1kNSv5jN42YJu76FFJZubSbG6N2XenjGh",
  "key15": "3DuVSF1nDpb3AyffyCprwigDm6TRptHStKu9mYobTR7XTEeDK3pHsyWncMiauhPpbfQqwKUw8TsY5tY1DNnKaosV",
  "key16": "2GkxQSScxndb8HRGyweRCdutVQ9wsosC9NQf8A8tTiR13YkLFWXFQBeu27WEkovDUZswsJd6j7HCLM7z4kh6m3kH",
  "key17": "2Ntph8BhejfuaZzxvW3eVdFxdky5fFzrPofZZpMrHokyKFXzwfqZ165QuGyxqThFNGXhCyer7PzxYx6VoztnTLhe",
  "key18": "3y4pifS5zftyoqUAnhXM9pL4szqC8iDwEgD9mGbD7McNyQUVEQFw1UxJ8zsGU4Eb6A2fzpCCGQaeBV1L7vdwMNbM",
  "key19": "4HTWafkPSGeEkp9CWnAWtVViFx6o3pc6eKyJ2r9S7akvTKc84UdYiShWmNQzkgapZbDQZeepTHHLxtSKWEY2vVY5",
  "key20": "2X5H9Jha7WZVJL1YjtE73sqQ5edf4bwG92uznQg6UsV3MUuhu65riAmMJUHa5JKbkp9safLBFkrUnJD21jC7uury",
  "key21": "33Zi57p3Nnm97PRrBtejUbB5gy4ooKG6AeVbSf3TYNmztLgL4BvKJUDbEBjnG2Xx3UNdxfZ6xagcbYPA5dt9aScM",
  "key22": "3qZKBwrPgM1MhUbTxtybKskFhuFSVTFejEHgtQUWz4k5QTaWGnaK8CnLE5kDeh3v57Qjun6joNdBTHUY2ovCHjsF",
  "key23": "3TY8N4c34RsjezCHzZvkFrEctD5P4ipbf6HPM9d8Pu9CrfFCh6j6XUVchWc91aLytipBqxopjhdVetXHEZEVfWq",
  "key24": "5GtX5ZzNeeV19e3Cu8atS8syLd6ySGMBN899kRMYpBUcLg3GewSk3VRQtL9G2NYYusuZxQ3SdgRpQ2HRzkH7hivr",
  "key25": "2dbEuFecz2kwjwcM9nFT1Y9PXnkgcxNNSjFbQCW4zSTeqHBMsXw2ohBMxCryJQaAEnyGaHjqRUSns2nLCWQ4uYAj",
  "key26": "4JaB7XVmpgFNRCfESscNT643fjRai474B6xBLBnKeY6UXZWXSJb3pVVgVkxz9VQH4JUsw7udGfKr1rx1WxiPNj4T",
  "key27": "244G1QxuhBrXRnXJ1YosjPdsp2913FCZuzRDTkQEMHrqZhD9QgUPhG9V17vnfcG2e9gQeUvbkcmAnsVKUrsdcqAC",
  "key28": "3Eme3c18bgMcGWmkBwXXb6BXScDB6TyvnGQxMSmvsuCSXFjKdKP4RRdki872SdBYxmmPEuphxtGRHDmt7X2RfREn",
  "key29": "GcJh3FeyhaHtAE94R4BTUNyKAKEPuVtNaheQMLzfkx6cCa5Upa6Buc1Ap67m9yKbDc9ULS1ofpTSdKfS8YgTCxL",
  "key30": "b1JmbRM4rgpHNeVEYda8pDWVuE1pT7djShvBnumBt1nCY5jnMqhAG67GaA79BKa2SqHLQvnJAgdddxsDb4BuCar",
  "key31": "3iHuZ8mcsQFAnQsH2oDGYQbuKXPXbpTfub7mPidkkQeGWiNs4ytjxdrADpDp1S4zdVbsKD2AHbh7yShsggQrRJy1",
  "key32": "WMgg7pRBzyhDHTLVm9kESVPQi5VAhm8cctzfXajBtmGXcBBodc4E2fjnmxeMoWHhERGpPb2w2d6tUiJmhdwSuXt",
  "key33": "3wYtLqFHgGEntgr1QvZSrt7HZx87gFFXc9zuB5Lx8NmFPp4vcMnbVLwEAu97nswjpKpitHLty93h9wMgLak6dY3f"
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
