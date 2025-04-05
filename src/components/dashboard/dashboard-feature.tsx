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
    "ftk9ffUb5emgxnTcqLLEeWmDyzuvtmBjTRLFa6g3d6U1DctNp7umcQjo4ZB5QKdhVpiEhaQFCgKAyrymJHGbemD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36HwXp3mVzBFwNXtio7fbf4hLpnLLmA1LNzz9buVANjHv3Xup3Jv4PD1waWSHhEsf2oBjU9CRdWgUBfULATLvphn",
  "key1": "4c6jkih5zLFXXu8VRgJKRmmL2W7c8ZrgvmXh42w3P1UutgVhsvM2n4yxKP4SAHfnFucLm2CU5zssHjkFApPYYnsX",
  "key2": "2MtpEf4z6J1G9CT7xnnQWG4Md7QjvpXDRhaLg4JZiEfzqbuQS962STGquS8ivQG8ZS47DB3idhDb8EZUM2wM1SZo",
  "key3": "37qiS77ctjMLWWkwJt6fM2vwuWQgANBsBT61aKDJRbKwx7wBSe5cLJhLUR4Q6TazP4oCNqJisNx8id8UYUor8Zjc",
  "key4": "4tQuzKn8SibdjTiQpJWUcvdzxKCAqEmabCVb45gwSeMkyN5PQmSm6zQGCkPM7YgH5iEHctjpYp9qxvxqBsfTLR4E",
  "key5": "5pNU5VyEh9t625pJqVU1W5vkTeyEJ4UCd5gGMKtZFwF3UsM1hcgxwEWic3bTkkEfErHbHbD8vgL45Sn5qwhuoJhB",
  "key6": "3ta8Xfwrhfc3EU65simBiSGnLpMEdvYDCZhMNnyFQgwKnGBiWyp84gjsd3m63kJQJpU8QVf4n1FaExkSWNKooMMN",
  "key7": "4uU8hvLw61xKzveA92j4yY1Sf9LzDL7yuTLbh9EpiQsVCV4CnZR31gHEFL3pcDro6UxQQgijMPDvhxEaQam3Wuy8",
  "key8": "5R9mWyPBSvgGu1zEBwh9j3r8n6nFTXMqnuCfPGCTVmQfGfqZmhEJJMHzcfxSEeaXu2QD7CSckeFLVKn8FsNLyXq",
  "key9": "59zmF3UJM7LBheXtdhbZh2xq19er6hTUz7ta1uNCrd2Mj7qWfAaFWJZQVHaetLuENS6DAHmMJ4ctNAYh4JjCgRpv",
  "key10": "MLpBG3VcGJq2CoPSbqw3SEUM4KYyi2kUAsuemz67mVjaYojQ5FLuRFTopJhZMjQsJPTMSkdQcRS772e8C1Z1a6R",
  "key11": "Xg4jWYGHXW8n4KBufTvBZCdaH5Sfruum9t2idcW7MTytBjB9jsAnDApRQQxo1HFp34R3iREY2HpPfLw5T6Fp8xA",
  "key12": "4PUDRBmHCCma3ordTPfxTaTRBD1tGxHpEdaALXZrYA6aU42UCXttTUSyPqDkHLxKnsygAPPx18zBK8uFY724uxUi",
  "key13": "5QHS1Cex8DaTB2T1mwMw7CeTwDEgZcv3YNHCoA1ZqnmxLzm3VAipNRiWJqLknJSB1TJJwGS67KJgT6suknZaVQTW",
  "key14": "pWYMPDb8cRjVSYKGAvFy2Hs6xbAJcQ5iLWuiP2xyRuojLEhYjmBVL5tYFW3V7Y7Scv7tMk2qzgnKJ1rhMreMV1W",
  "key15": "5daynTJXq6MYsQseUYVfY6UoT6FeT4WnWr4fHRVdkFoCxgYRp56apXMFJYwRg5WwkGUfbTUwpseASDNgGp2nR1RN",
  "key16": "22zszXvHcFyB9gcPLALHWv5DgvhEZsB6euruyRruWqZmNbx4Vibky9UoG1Q8WNusnVMotL2kj2dJHbNxDX4V29jn",
  "key17": "5QBV2HnE4WKcJMu2WP1znJjgHmHggTQVe55pLWXBtvPKQtYkRaY5ahmQQRjjFY6AZkBSuyGs5GNvd2AStMibYYVd",
  "key18": "ND9jne3Rj9fbGrB5V1dzeneTVUPAJhEyw6imrRpWb3LcBVC6cQyGJA3QS9k4TbTJagM2DmK47tCoUSFbhZ5dkPN",
  "key19": "3RwHi2YenqivaFQre1BVh3mU8U9U8rEvp4C1vMYGTvG6iFchS9jzHZ7i6Lz7hPY2VfELiYWT7DKUnjXvSgckoQgA",
  "key20": "4yA2wV1VVkz1YMLVkfkxoVTqiymmQTF57aYwY1UxiZrAPqATNiDDwfBWRWTn1aDnrUxVVrGCEcthgMwySvb336FF",
  "key21": "5UtRRiHerBorvSzFe6xeJWGDMAymKitTED21vgqkC9cXq8LxpMSxdZ6YwewFXBzvTcQrtd7qBnBkP1bCzFaHrm8S",
  "key22": "2wRo76tkgFr6M7SuxcnAm2GDyWTVHyjorvexe9U1NcL34Gr1wSBoZoztsBwJKCtjAtb76q1bAUKyfW6etjpaAmEQ",
  "key23": "RAcqrrdLsbu1ouBBBJXGBWXXDsvskfK5fbMaMZWSTXDSQmhmvLC7zZ1u8hxyN2pVeDxjLwhZ4F3Uhp48VLxAXLk",
  "key24": "efUAHyitmaHKWZH4zNjVsqLz61ffwJmuh8Wf3kKJDXKEDgjuLTMqxKJbqwxUt6XysJEht5XknomeCZMPS5seT6Y",
  "key25": "3W57WAcBRs5fGwuif196viXEJ2YVfvmF7z5vs8dTUsu5Z2p52TTcHzDfFUrm8RxjYcoqFMfyqijwSXNvxWGemiz5",
  "key26": "zbSskpoD3We2te3wHz82MnrgR7Hgh2QGR7B3Ab8TGiHPrtgTveJcymhaqSNb3hHyk3dAz322oepLoCktFR3Dov8",
  "key27": "xD42Cst6SQ24PRdmztiPkWdKW9pcfCRLciMVW8fCTN51oC6bkQxFeXEd4HU5CcjH3tasj6nHfTL6Sby2xkPQD2J",
  "key28": "5nrhi7kRB5rKeWXs7K9Ca2c6RKboL2y1UstXUHafPZf5VeHWdNC6BRFadugXDGB1ta6UtCYc1Y4LnsGwBPL7Jw6L",
  "key29": "38dUzU829LF5yi97zFsjL3uDArYAKJ45WNvwvXWZcF8zL7B7uP4gUggc8ZSPuUM5mN68vDBoeLSQqX8kBJM5Hm7F",
  "key30": "4KRSehACcY2nLzYUx9sJcPGYr8Z5BBXiW3Lz66uwUsXCHV6drn5hDcv6RWb56X9FbKsX6KraJLGVbU2FLZf5j2DA",
  "key31": "p6jaKChfp5g6n88bKMBzbsSvevdEq79tA4qw26cq3Qgv5vUbQUErf9GFmoagp4C5UffuRHAaaWGRLAxtNSRg5Q9",
  "key32": "3Yx8VKCHJ9HZRFCP8mtNyJNKY3DWGPECGS1nYEBx4eYVwhB3vSJBdoCN346qwkQzNDpQEN3rUHkLbjGUzSqLHanF",
  "key33": "4GZ5mTT3TvPcmBEmSddjm7Pak2jVxvnbVYV42bDEVkakBA5umNXYBqz2T4PufFDV72MKmsguzwLTaq7Dpw4fjEHz",
  "key34": "uA8em16Gdv8mPJCJpdqESsvVTpBz2r2BRVZQ5rKeEF71UMYuJfnwcs2nJcF7azPsbi5fVB6A1V3TT5268ZW2cgc",
  "key35": "4micoJRjzZQ3v4w4UPdwdSF9jL1UuFvsq1Ma1NJmjp5nfMVN8gaH3gAnVoX14NLfDCCC5CuFwJXnfhgv8jfLumgn",
  "key36": "UoNTmRKUaBtQJiyDQLUkpmgMUZyxEuUnsnBBwptMc115BBtu7D488vcvkF7tDn78cCR4w2imnUseYGtRoBExXwQ",
  "key37": "5iLuE319Vp5TuimozDJhasfdTHPQ4XoU3K6Ac8KQk8wNW175M5zxRQzzK5PdtEs9Tj4LHUcoFv6aYeSZQxQ8Fc1r",
  "key38": "3uSZ5F9wFwk2cva8HuWFftGr36kVezK8DaoUjX6G1xV5Xr6vMJ2YXPGKepQeKRYMKQnjxSRXwHNq2nJyk1QkVash",
  "key39": "3ykNtEwbCoRNmjtP8LYyegwq2NT9XCdWAbDXXmKGThDvp2Y9swUMqobkB9MeECztY7ciy1AproHx2tmuiUZSxRXX",
  "key40": "5dgLN9hUF7egBHQHkkf2tPYfUKbsTFyCiRM2vpJzZA3FWWQTo7jTLEcQAEAX7VTZGdYwa3PvRvPn7kR6KhpU6QFY"
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
