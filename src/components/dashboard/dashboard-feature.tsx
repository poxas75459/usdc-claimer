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
    "SL7L4GkeoBPFLYgtDbncVTyWerJeJWJqwWdtuUjZXVXAtfizFUrAK3MnQc5chhuPQKm6TWQYheBarRtzB3axi3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "236W62nMNx3fBZquXAoFrAvCqFmgMSqBYvKDR9q5CZguL2AKh1NWy48DqQwDWTdiBQMbXK4BVzdDLpUxXriBpZbW",
  "key1": "3S99kJazFMSGvJuXQKkesEGrEM1quytdvCHpYVyWaucBEhpQtjmGCQiMK5H16oYihkKBp4sKyQbzMV9VpcVtZ6D4",
  "key2": "5eoXFzgXSBXh2HSjpAdJiyTdnUaSNatnFsfZY64XKvhtXWPfDU6fpCAs2UNGPBzm1Z7kTXkBbbxwoTjYLVcr88yR",
  "key3": "5UxE6pC83TUr1DmvdukVDsc7ZcKangxEdMw3YBmfQ6ckXgzZaaBiMCcZokhAadmCA4UKBtep5AcJmmx6nrui82ka",
  "key4": "5bVqBGhJrf3xTs7Rf39NU6J5K9n566nzKXMsA3jkQtTUV8HqiFpffYB5trUpsB6kAYLWEQCJXU4w1eSVsgZFEdju",
  "key5": "33fR1EU8n4w8q2xvgSKh6eXYvHwHLx21j2rxVGgd9k9Tfo8pPFt6JzGBd3jznUPjTQXEcp2HsMLSw5C7FQm2LLHe",
  "key6": "453xvNAGaWdGefpSJJWbNBPsUNKtp8Am43C2Syr9hQMnD2DZeqQNpPm5KztBU4FKJSJKSrs9ABLD25cavEn3s7WL",
  "key7": "4J5QbU6CfnjpQvLfB2s2jhnY1ivEnMKr1Yor4dxrBArX5kKFw9mt5K7hpyP1ThwqaZGEvWf9523rbLRsoRcapVm5",
  "key8": "z8wCNAKSayF5hx1J5ekDtzeZ496cGbkW3jpscG519EiA5tGk9YvnX3VsCtLGNsyGgCSVg8Nq7NTrLeFMd9pzxuX",
  "key9": "3wu1KTFc2FWwfwSVJPdgus5UoLJGf1GhCZHMSnieZeqqVsVXnnxH8AKDTm9Jza8SMZkcCStRXLLSw6DKjugqsYa2",
  "key10": "4MxaLakWBiEbjM44J4vDf8pgYEFZqNKB6oiQvqL2GiJ5BHTfiYMU8KyYw7ouyrGTU7FmkfdNqezRk8vPXvYQNhE9",
  "key11": "4SU2JeMqFuYfeJSMgxoYXJqGqUeZKCAdbcJw6bTkCpvuS7EQnJFXgj9oooPcG2j39AE2qPVSncDwXdSh21Af3aME",
  "key12": "3EEJP5yA69REMc3HPhKTTLwp5K8jPesKGBMWdGKMBPHsQHgbZfRYzajaxdVpwAvUb3TmLSZoxXymWNDEr9NbaS3i",
  "key13": "4hKt2hLsVGPVT2z26Gcb882xpDPRnRRxAUduRsYFEc924yPYWcURTwFVN6NvHoWaTgbXxiTdcKooHonxkCZfLnf5",
  "key14": "73pvx8ZJwK277bhMo5Vzc5qdReZ7W27P4c4rdymBgcoeUXXHXq1z5Y1D38E6z8W7FdwTEqkrt4vAfru498vNTpv",
  "key15": "bqXte2v2WvjMz3F3pHhXpFEc9iAsRdBX6KCTN7uUWp6reSKyJnVRuwtVfpnshyyPF25wubLmVVJbWDLstAwxg5x",
  "key16": "4n2DveNmMNQPPqkn1BFzjx4oHAJ9xXvzMSSu3HQNqq4vfxvsNqvnxNZ28zEnoJi4nvjWiGkGuT4h5MnxnTqzrEvz",
  "key17": "4wLoWQWhrhcg9tZtoPKPd45j9HFih1b926x7zy9dHZDXcv4aGLiuwwc4atNpeGxrdhC5qDuY2LaTwxa7ju34Uk8R",
  "key18": "2Qf1Gcx2xY7GJ7gjtRr5AZLCfFQYPJiTmcSPXdqEj7Zspjo4TBpUgvdTnF1tEuoEAp34sqeoBzmT9asKzp7Yd29z",
  "key19": "4feVF1LZNgVZhBrPQc9RFwd4RXuo4tLSF27aa2yiifdumQ9YoQ5CmdTaycXfzCavCAU3KYW7TpqgTNJoRDVjms5H",
  "key20": "5S3jiB3qhgsDphJoLHXEbwwjrfF89C8Hq4KwwS4n73tDJAJBXGXy8SqoLHNUa4kpvUsqVaSj8N4eTGHML4RyRHjy",
  "key21": "567vmmEaZFwdMxBJJoobEAG9E5ok9xU9zhxUiNWuZKAKWK9RRARUF4BgMrMbnhzWQrJtJkRmQ1gUQGnnUEcT5hCa",
  "key22": "2YrHSZjUuG717yougbjv97Vwfk5Rp6mcgZiivvXPPmi3Zu5EYABNN86s9wkoksqKiViNAabUqZ9oYmkZ6zs2pnCj",
  "key23": "3eJCe4Tc42MPBaxmjyg2G4aGu9QwzFriHBynhkkyuX5Mqg2doiufpCUTagBbUpwYHdD23YhKUgRHt8z4njYXoQtJ",
  "key24": "4KNW153UgMkaHDBRFc2AVLvqQA97MRxetKe8t1VgEibkqKb2ofkAH7fbKM3DUV2TZfp4zGtuZskrNq9gFxkaGEiG",
  "key25": "LGUM9L9v8HcL5KgLLtytA1ruV6urtuZATnBYbKDkxtDMyKQ8eSR93BRCfuCjhhpwgfDtySDPkKpr7frVVBeAtDd",
  "key26": "2hjo9dSPQBHVNJGkmp9Wevy2scpJVxxYqfZpnsJGdiGPwrxtFPxb5Xo22VNta6vejDy27PbThUp1iJN7FX3JPymx"
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
