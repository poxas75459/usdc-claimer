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
    "5Bqvn1RVfzAwHj7tmsZ5VxRtH1zYvKu2ZcyvjZ9LiVUWdYVTeqiV82YendbPBYjvMUPFjCVPciy9WqbN9xD9cfYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qG94U1tbqnBMJ5cCfwdnrgdWtrXQsSPftVmHGJPym6HMCoDRV8h73HErBZWe4AMVocw1CSfZuyfcS5fd5tLC8Ke",
  "key1": "5DurhhaFkhqfmJV7f2FTwqrNcLDExUqtRkZCsBPVi4mFbdVVrdkR6nUq2oqm4pFh7v6tCE17LCzk5wx99FTk1X41",
  "key2": "4vJTGfPiGCVEDQKFb1a57JZ8xXMsQWVpKRoPv8yHkY9cgiBJCFAgXYNjyUMcoPn6YLkaobUGfKZEQ7SntKcUGAUh",
  "key3": "vSYZukvYf5KKMkgtxMwvK23dZiXDBQnmABUBeB3oocVG7qNQtYnBe3mixVM8gES9CkJpEuSMr7qTpHtH29ftgxP",
  "key4": "3SKJcL2XWoUnVmqKB5L5hXkaKRMpfWsABASYHihacxTHMtNHhCD3rFyqD7KPb4dHUjZT2APquYHUXLaYNpZgHv23",
  "key5": "4jVpBscjw4s7yCVDqgysEJu4MLjz7VoD3XJaioTz6SjALedUXeYUFbywg2wD82eAhsvTn1pjmTKY8YxGnNpaxycH",
  "key6": "Ajf2rLoVLxt2iA8LSxg7Yj1HFpfTAhVcLZKNSfDLTFDdX8Jn91wy9B8ioinYMrMaP2DBYKkjkbn6wzSoLSdHxBH",
  "key7": "2exSfRPiDzR5tRWJBDoKaikK2tvdxQDgvHgNWfYtwtYxVyBdd4TFTRxy7AbZoucGyCvXMs2Rh2SZafkssV65jHrj",
  "key8": "4iHNa8w99RB9U6tRLPaQWJkgPzhegTLVQYzPrWPvZjkYW2GUrfuHFrVjtZRZN6qizZ96Mr132UQCd8WFUSbSLMjB",
  "key9": "5Py73zKMgj7EdDUk5qyAtAL54822n5t1vww2sUziMngGWba1i1Eu2T3eHFd4qiA882WpNDtTQXF6iYTDPXCxgGSs",
  "key10": "2UxKBpdWw79jzvrEquHYknfUQPb6vpBB5aHfUQCxArn4hqtMEQdNfNKbpG75BR77rqnk4G5beyiPBhADuA5roS2M",
  "key11": "3nJoQYh9bRWeSDLidTZbVs5VVDge2sSR2pcryuotvyzSGqdcndupxAs5QqYsSg8RDFxogiuaLCvqcm119ijgUdLU",
  "key12": "3ZzUN4srwkMUEqTVCH2sBnt6NZEiBnNXUc3APeEH5MGUD4y8ZMcmRpgkDGHHc7jzW8Ks3M45vsT1mFjh3w8H5Vgn",
  "key13": "u5ia5in8SG4Q5xf6rGNNxCBv341TYFGWSfgaqYaVmMtpRpePq1ciEqQNmQsxTdkZQXNSjz3QfDjpb9WE27TYQBd",
  "key14": "5gf1vxm9vr3DRJxDHrD6vRVeytsnhxRGDCw8QSm64Z7F53pixRDrbcTxZGiWrUVXgAF9MyW2Moc9AqFY5mnJ9Af8",
  "key15": "5f9tYVtygYa7q9w1QBoyJnmHibk2KxcGRgXTADZF4wVy99qLMgrwSZgVPA1evh4618si5CXa11ytke7TgS6BRQ2j",
  "key16": "5AYYG76Ygkn6FoJZKPgsDKF836ztsTMiLSgUZ7gLdqxLtBDm2h5kLSAsR9VNGLsENzn4m4v5NtAswUNxP6yUr4D7",
  "key17": "2KGhGSKy1Fi55HoeTcMtDHhjdkLmKyjYHUEkLDm2wZwoFGKp1z9bTPB1RXNz1U9zYmNHuAzf1H4yTmKax8NQ8kgK",
  "key18": "5oNqwEARHZviULeGyWFQoTJQseu46oro9yxd2N8EVjqjRj8g7db5oMZF1Ng5pW2SNTcLb4yHtStqdCksEDqMxv3Z",
  "key19": "3LRQHiA64Nyye98f3iBiyFxrFiH2kyroK42Bz1VEg8GsrhgEU7abLSE2VBbtBipGQpc6G5mkTNDFqQKwJ8RC6dG3",
  "key20": "4G4MtpZyB1nAAqngjSnKWCT7TuW7E9aoEs528ZRRwQLT4aEJUMAHHZTB7v2yq96R5KWUqCYqKDTzDzNJtXNLupx4",
  "key21": "4ryZB1vN7w8L7GJdjY4X2zNPHn8zjtP1Qa391AGQRfK756FSFEZkJas8YmCvwXWCYCinMawthqJvkMLGYrEvA4Fg",
  "key22": "21BGNZxHAMi4kL74XAAMyCxV9JG9BruR82WjtH2SgbLBgcCuRBKiTBD2XCA6FF77XLMoWnfEcRLfSXxiDbZGVuGB",
  "key23": "28gtgzZk2yEsSwXBLY7z4Voy6i293P6YZKzCcyudC2cPmEZhxwauzb6sYhgzjk5QJPzjSKYGuBxA8WDVEHUGxQ47",
  "key24": "4SVAmPaWLyfWnWqFmVBGD34g9Eyu5AnefqfkkGQqC6gjq8ac2shxrLFwArLaTPubkjqu5xMM1suR2zdcpdq9Fu9o",
  "key25": "55Vvi6SxQjWqq69EzFGXcB6S5ypPyWiZQGcHfh1c2EhPa6rUTSvE7LzcgBUroU8ZnTRMMvdBb9u6MeeG1HixJhH3",
  "key26": "5AHbpqnH8zubkKem7nBH1NFLGAPVAyGXrYMu1r1vecpAXRh4fNfGSVkN6ba3E5iaHnrmxBWN2AcbFrJsyau3LCXe",
  "key27": "25R6bDpm3DD94MVT6wwMRP6uqmgsy6rrYi8W9Kfjb6pBiAH3spwGLvnc1XRAqufza6ss8XKeuSWKuKMaxhrzHZiJ",
  "key28": "56rWscDdds6wjBVDdzCvQTFnFD9JssXSdhrtiBW9dnsSZoksBycAUBLL18skBinHiZo7LKHUDi1YnsAQpN6xJbqG"
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
