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
    "5BPXiEg77EnaGg7E46LnuAnLtREptZAQCfAYENBUzRrMjARdmh7m1NFZyTeoF8mPQztnSbAv9BCVQ6Tiuy5Wd6CX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R4ARLADp4rD92VgMPjriVjdhhH1kxPYzjXzwvDKqknoyZKpzgCag2G1UMdvLmYr8UMVfeNAg86zVmd1zBWGPFQV",
  "key1": "wPCAbseyejbQUumooaNtoGrH3zso7inUtQoqUX2qv28p3yFTeS8RXh3ZQoCqkuBCgXBZYX9rgfL4v1aAarG7fWg",
  "key2": "33LDxgWXRkDrdy6MEJPY7frvsop8APZKYjG6eTy45yJaVh4NWS7HcsPDL5hHJ8P22YsQpt6rm6Xm4mcjLUVjdVdo",
  "key3": "2FWLnBvVubXg4GRahsy68WuctkUMYwAdfiCrR81PWxLrkhXusfnCKwsR5bKrZ5zQMqDWHMGWp9wZBpXqentfpWaP",
  "key4": "47pFSDKwMdtAkdcmN4H386PLgQFyYHu8VeuhXZPKJJSdUJVnczLiBoKmkwYn3MryPDVftkDrAuJVtGk3cBBeLUiS",
  "key5": "yLRpKCLmbVamyWjXkK45fk26NqpzCqUeDLXsRXjdFdcsgAjWi3Y3QiUTSMD4ogeQvZhdZSygv1DyKgvmjBwV8Ln",
  "key6": "5kkDQtifUixM38hcCMekgGqGsTSwjLYjUKGjHDL64gyfZZB23NJZuHFEBo3maauBgnSakjrMfG7KfN541oAhLncC",
  "key7": "ByNqbE1uC5PXvTcrRaN1CV98a1M6LW4W6XJoHWAoFHocEjR9cQiT5H8wBL4ScM7kFfBa2LyiHF1QWAzh8DAhZTt",
  "key8": "3di4Y1mkMeirdH9DB1N2hFt6Db4sCCviJ41T8YjN24yVT93zhP7Wj9hbgnYRHeWawfFyC1QZpUz3WcbNyU7FV7H",
  "key9": "2ttBp8z5XgLfDKKxK5ryHP4Pmzh12vipLXEsCX3LW1g9Yynk6gGYRrbvJX6oKKPt8VptyQYr8LWN8XNfQh3u2Up1",
  "key10": "42vbQEMmXeNyUzk9rFyb3wkKj7SM15rPDzhfqisTUDwMbCJhBawu5enLsYuxgL79K3mecYHFJTBexhoTpn48BkQM",
  "key11": "2cA5QXBwhTb67ABRMpQNrX868Kixu9zkjpg8Xbzpn5Y61bgjm3LwmthscYLjsX52gH18Y4QuTP7i8PTBmh8ektAn",
  "key12": "aWLJdxmdBHvtDbEUnuG4jTfm6uLf38FUWXVfqeitNqHqdz2empY4Lv7VJWcoEBhDVMAKdJPUrNqFGPmDpccBHUg",
  "key13": "QwcCvf8UrE7uxybX1tQ7enJZSE6qYBHa9HMoxohbcYCuV4WtrpgMLKs38ieoTtNsJY1cwRgD6R4Ct3Mq8oFBccv",
  "key14": "3oZhTsYB1kLYu85UJXxraGbmoH39KrR74da4jGj5zDVrqtAZkgNL2aUB39cJrr8YLDcicuvScd8AwmiY3WzY9MFE",
  "key15": "4c8CpiZESLGzSnCf7LsNokWKGZJgWsoNvUNbTJV2uzKJnvWE7QcV4Be885P7NwAk5Qo21p2cjszruzKFPWTk6Fqz",
  "key16": "38b2Z6ZNEbWPWFq3Tmurq1p5Zi97PdnyHxcfotadGWXAExUiX5aLLE64M9PDxsshBLgj6ey5M62DXqsikohUWfSu",
  "key17": "FAW4RVoELQXJwXQwrV4EJecS4aKHLzG2bVmSr36pYmNWxHWw4S3jjvPx1PxzXbZktZ7NZ2trYNM4siqyoYTDiHb",
  "key18": "2FwaidLpZkvz8mozDAJqhaBEf7qE2WJuayy3oe7otGk8N68MDwq1wL2d8tnHFqF1vmKFjDg9ELUhLWAJcHLbPvED",
  "key19": "2nnwS8dbMhj3Jpaij1s36DsUFB2CaPiAo5Dr9bidVK4VHqYbFsMoq4iVEmppE4WT4CUPaRdnj7Ln85vrcaG41yhc",
  "key20": "2RLL9HX31oEiq7qVTFLFsAdDtTTar8yPDpiP5zFymqHqmUFz4Ac6Vdj2pFd5zfiifUKB3ceJYmzdC1Rr3h3ZApeg",
  "key21": "4jX3rmucBTGN9cJp21nR1qKqRqWbpx7HRUfefQKK82UvfyqPqSYUcHXt2XqVVprUKPQgbYyZGMVmDQjheFnsjSCv",
  "key22": "29788ip25N3Z7VwGzhx59zSrGiEW3EDNLn3RUPMsurdzLeJVtWWVmk2YUiGcHZLskxgae6vNrpYoWbvV4QbSP5UW",
  "key23": "kk8dbqdxPuiMzDTPLAZQdSBFfAK5UwJuecVgsrnKqW3tWzraTsdxzarcqFzWfkcnqa3D7y3yf1ckGMPZXKoXUCU",
  "key24": "2GfCoUJo3c2cSkCcug3UJeJfpsUpZLvERa8scTiPw5KsBa7M67XiFMHVEwPRon9pupKGqrKrotpM2nubcGJagaFY",
  "key25": "5GodDLzEagXnxWLmMApeR4XqTnWL5xcppieUbge6BMtLsFsvjYCuxUVfuHFnuALyAJbGrBfN8B26xGG6SrFFbRmF"
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
