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
    "2X1bPgA1pSV1B1id3sESkdUgWpNi4DaR2ZFUG1gWH4WLaPj8uKPnXfjSDQxfknRhznW4YHzt5h9iQHhyJGHDPTpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MiqZknVND6QqVrTZWjtUfGGBNeryyeLhkmjZXDZi5jiBtzuNqVbUxLzp3fRNmQidb5zxgBgUUBWgRwCWzKkQTEQ",
  "key1": "31QC5zUNHAX8if4iNu5PJ8Xtdo6KGG5yVtUeBNedgpVaUW6ZrMyFPM1iBn215cBhnwpdq6a8QPnRMtGfd8YeZLnE",
  "key2": "4z3seuCgzLmDcKZw8Vpx64VaSsR9aiiDbrG1vVDudhFB1FatZW2jLKmin6P2KAm6FkH2rK4c3nTS5m2Xx5Gfp6hp",
  "key3": "4hZLkenQUpwQ56aTbJGxMvw6xy83kPgcJz8avvRwS8o1MV7FDAmXMN7tbUxNSKLmY81X8eaaYVtxADGU6stshshw",
  "key4": "3QC1GEkG7K29A3pryZ7hUmNWbgFwVNYboV4SCZJeQKEczWFBuFjmZ7LKoJ8g7Rw22xJ5oMKt2h8SZc8vWYpVJLm1",
  "key5": "5H3DYu5SEtLGj3AhrB9zyBDLUEirt4QRLCnE3LQ7HT7Sb4zfVuuS1VpXwLpzXsDUmJEoGHaHAtzbJgyWysDBdZ7q",
  "key6": "36LhAmRbbbuphoGsPa3k54FdAQ6ZYPASRjX1tWDj9DJRTQyhy76iXky95i3zPbiZB1AnmjV3ZJBX9hDyuxGLY54e",
  "key7": "yqEz2yTRmRhhxPHNvCSkTfa7Rrq433K56SBNpqAYB9zuRQRYATeaKGfsmKMfB7adC5ebynfjbENF4tcNavFz3no",
  "key8": "3kZeJrHiyJYAeD6ATHdrvv2mTcobRLoRSwgMPiQehfSMF5ccGKuYM1V9NoPQs9VrEzAkjpCsuDJyZdkHHCG5grQQ",
  "key9": "2sQk7e5TaervVCqzrtp3d8huZiEhj31HM3spoWDpUtXyFRtKUU4wD96ExDfYWEkKzTiB3qGWeatqrDV5sXfJrskS",
  "key10": "3Sxb3Lne8yodH4xTkFuFQs4hC2SQfgAdGeqyU4fBeBCsq46zTWSv5GwxfiTZzhh2NV4p6Pih4SmW5vz5k63UzrR1",
  "key11": "dJ7FdVTAFgi3AoMme2C55nhnfAgcaLQFaumqSmYiYJJhd3ZSTnbUXHT1pBbSMroGSnVFxs84Qu6qudMTpXYWyJV",
  "key12": "HggapZSGNALgPkVkyaX9voer9osQins1R82JLp68EE4UCxynD6j9gksuXNDz4hAm5XyTAL1qK3yqwfkV1xxnvoy",
  "key13": "2jhrRAJAXvEqWNSXZGBaHLPKBzQq72mubYgMBF7A74xqKoVgAoKCtFNuBKmZYJQJVpFU4CZy3KRmchYgkYjXy6QL",
  "key14": "3vVdAAc7f71X9S9gbJjRU8pPd3KoCgjB9VPapwavtvHRgwDQJVrQzW1VX2mExf3cuzq1U8aFWLwtfRbGZEaL1X2k",
  "key15": "rvcZvNJwYbiXAW98S82gRHbjxeMXssLticC82m7cY9irqKDZvohQWC3RUNRFtcybmT9JCD9oVzyANQQ1UTopLG5",
  "key16": "5jN6tirX8991pp3EypGWtADDegbvj4PhHRrY9gz9kwc9BD5b3Ng9t4Y3bGU7HkkVGxmSvPL2cBQ4A5XHVjLnz3fv",
  "key17": "3uUiUap1MD3DWxrYjNT6xpMgdjSoVbhVWZ4PhKSufP8WGMdo6TvZiaNvVfq5pSdNyz66u36hB3EmpxLVQwdM2FK9",
  "key18": "5FLspvFNzpvdBRjoXc9hb95xF4TtrCN8fgx8sQx62Fts5b4opPedGETkAFPEucLP2ftk9HEo1qFEJ25srESY8RN7",
  "key19": "4ccr8tDvNradE7JqbXfaXxu6qqX2HoSUfr7xuj49bSMJsk3xaDrqX6y8jXvxhAzy7xg56jGoLGJ1bRB2mvk8Sehs",
  "key20": "tAhUGYfTxStBtkQgaGijw2QLUabURfvUtXbsLy4EduA3mvQ9t7Z4xcwVYXVBoK4mLdH5RDfsr3mdzdjYjR1usp1",
  "key21": "41HhfVcaZ8tEey8tXsuqnWZkxmspaAHBgSUFVm9aKduyGAYvCmZ1oxpycyZWeHZ8buPmss7qRLzUJ4SLk74yWdc4",
  "key22": "4AM7ZbrC8YHfrvLo9Q3BwE5eXVp8EWa5UWyVe8J2NP2wHE1YyPjRhysVY9aexxjuh41Cyfa35D2caouFFpvqnETs",
  "key23": "27geaCDckfLFLSZSNU8aPeaJLTqPWX9f94jEyHoznxCXPacjqSmBMa8FWZnBphLsmBfaKD2pCgm4hA49gkAFrcS6",
  "key24": "76X8yFZQ87TsxmnM3x7t9JNWmGa7jWYVEdcfSDs99sCxmXTm9JJnvDRqqPbDSPQjiyVD1dv25746mUxneT5sL4M",
  "key25": "2U8pVvdHuTZPmky7z8eun1eysbnCBRQAG5Jfto4kbWnJj288p9gALnVVWjaYno5VtrmZJR7DoRhjp1ug2yvnFRYd",
  "key26": "4MqGKthrWiFcpZjatDVGBTrtacG4FGn9EWUBEQpPQK9n67eoXN9PPyWgMEzyUnAtVbuNMqk5NtSx9Q2zZfjqrPce",
  "key27": "3Soqm6RAtKSp2DR363YhmH3rcdpk9QDGScYFdrrAKYBhPxgXMPjZMi3wrnR4cW53pZFPnhiqPkUGkKBcEZQ4rR4d",
  "key28": "5yLNE7z5WWWLb5Dn17WZKCM4W51tNtG17k71SwS57BqczfXD9NZKojtF8idUEkkTLrVSZ4pmJ2oc1rTBe9QrgyP5",
  "key29": "2rUXE6m89aUqfC3AiHodmsZCXomj96o7GqE4SueUqNLRuGpXJvH4E364uPmrKDMD4F1PCTS9EnaSJDWNuLg3KdRh",
  "key30": "46Wfu8eH7AbqyPmvgrFPo3k9vDFLHaUvffBQPZj2aWNc9v1KarMDkA5AxbeDyYAmCrCpam1d3wKSgoccmk1Z4iqw",
  "key31": "2MV7qprcxuxPxgus7vN4NhCvUjSMzGkzcnhvwQoUJQDTYb5v1DrA7R1PAZR7e5xYTpTggX8Nf3GdrQ3NCy2VC4pQ",
  "key32": "4ebj2kL6cNKVeaHCZ62Rbr9eb2XD79vngPeQdzrnL38XnAGFtRHcZG8Lyhd5BPpiPhneEtYGy53qFTugMpsWr1vx",
  "key33": "5zmTdC9kV5Dr1n6kjJxjyqP7zUV5hBhdCMQtUzXJY9THhx5MopbFvGZGyhRMwUcH9T8fodD5jxbYP366nr1sdP3H",
  "key34": "4ibvySKM3chd23koqWgbWtCRLdoqw8VEwpqGwWm1ACcVJrqZkk4wBCPsAwqEmZ1UuX2KRS9krEbATW8kEPGyZmB4",
  "key35": "57DDxFdyUFsg9Rgg5Ea8GNUN5tGp7XAqYQE7YDeBiWh1MZgzDcG96cp5e32SSd91NUr6RRPHuiHB73Rqa37qcnzH"
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
