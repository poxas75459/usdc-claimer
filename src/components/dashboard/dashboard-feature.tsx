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
    "3n3Ghd1ANy1zABT8qHBaWnTSxTzpGfZtNE2xd69EgnwPPrE12nw9EYC8z7rAmHay5bTimeKGrv9bsSfH9a7e2pQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p5R1BUGRF34aMTsKvnxWJ2i9mMp5LSbbBNGqgU5QWKJFa3YdoMXFqJptchoPzCXUPBPw3d43GK4KzV3X9VTMGAo",
  "key1": "3KkZ7fy2ahTNTmy3u6nFxfUABMQYM72Vk5m6uz7fQAiWN7Yutrmz5rsJrE7wpyjLHRHRfau3S1foghhc9rSrqhGx",
  "key2": "5FwQxGU9NW5r8jqth1eDVigigFPZjTy3DkgyTLZd1PkCzpLNg9QFiM6BX7kQ2Kioq8gXAw65wcLdwn9eJ29XBf6i",
  "key3": "4Qv8grV2mXTi3g3oVqsA5wppsfNBNT92W5J2ittB5fVxsDf66PtDBkjZwrwJN6SDZ22YJghCEn4bgDmMbgd4myF1",
  "key4": "31BU3NRCcXmNpXrQPa1pnMUFSsAEg3cnbw26gVABACpXZvXMH8B5WeTfA6asHjcD2LRrGm5Kj3oAigr2FC2m4FDf",
  "key5": "4mm7SccYQCukHB6Wa2hQHxPVag8LERjsxguDr916MEj58LPvKAgsrJ4hrSRu82y4e2JQmGj8KKyG3fD96Y9PZmEk",
  "key6": "5TBnvsd5WY6wuoiffz8keB2CfUMHJ64nMNwHUSdrup6NYBqjABofy96dNAKHBTvM2q5C3uvHgp4cTt7Fg4hQhcB8",
  "key7": "3Bxo6WAJb4JR95PsBMBPkG7XBSdXGSxVFEBLpihNhNKrjTupB7Av6iNQdS3vU6vKGrpfjF7bknFF2b53xXzMC1tZ",
  "key8": "2oomzNegYhR9YPJLEBEqpHqjKnWRGiZr9ctTUEEbh1W2kcNWCUETWV68AH2Y4bB2ZeQ6Yp8kRBQxPmHGzYAvFoak",
  "key9": "4GMmQXdtqdE3UcuDfZtMe2miJsaCi7AxYbwpgL8P3DDDDdsKaVF1nr7n3Ckrw2T9WZP74GHnQ1LShE9inJ8SndLF",
  "key10": "35rLQG2DirWZooLqGqhvyZwwvwGvL4D1niFjgTAiV76b3uCYjK1S8KPNgHpqTTeRyfrVfxeoD44w96rB2Su5oKz8",
  "key11": "5417KgQKuxkK85HWWTVwqiS3uEKaS5YTo7ahmALHYXSYxNZresURqEtpPGML6mo8U8ueyf2bLJTL5Z3HvU9Ec27B",
  "key12": "2cNz3kMc9Xnv7PutFNwNAk4cjfvGytjGYhieCXMGyJCWk6XzpCSsQ2hzG6ktVpsWtaKihgAuDhcPbDAL73sb5oug",
  "key13": "2ixsFjRnLYp5f5WEe1zqEDDRv8ATrJBcpkJDWp3DzzVhjRNNLnHz6ntZEayYrsEwCWCWFgd8VDjdmnX69D7eRo4p",
  "key14": "3xM5LR2VsWNRxd1XRBRrJFJeWRZWBSj5ELP4YKwMimV5FSudGaNqmCSV3oDQT5MShLgzVRWAV9HTYvBBGm4ECiKi",
  "key15": "2omvecxafS8NNHYdbi3KPYvbXapNafqNxqvxHXwKSQpfoYwBkA5vGGmoR4AGysgWB3pDjAn6t4uNWq37Qo2NsLPA",
  "key16": "ShHs2n2fvz5igYpgf3YQ5rFcSN3pmjRxAx1E9KAXYoNSsebNyDEpGNoeXw1wdxRga18cBMs8y6aqbrUDfMjCNie",
  "key17": "5vds8ZSYnow6AFzfNUPyS4gVinUu7RwPpf8rrMpXmAwYEk2ZhK4DxD7zGh9Kd5D55KUrBEJ2mNwbp4hC4tSaHFxM",
  "key18": "4shaFD646EGh5cHyYznBNYeMNNU8AmBoyAiYdW5RkoDf1CXAK9fUZW4G6qa4ekkKfZikXjfcnEqjLb42XWC5gppp",
  "key19": "3BBZaicQX57f9mLge41V7gGWYcxFjEaM9gdQKzxcM9qHqhLop7CGmhquBv2M2wLfxEccUfMRxsmKLPwjpFbtetqg",
  "key20": "2BD1xkmfeNiHZLu1ZbseGRzJJ9nNDD8ikLc4q7i8MonzC4y6LBVdJYgr6ZPwmXTvobBHWpmxipB1A55BUGdL9b9C",
  "key21": "2GeQxqaJ5qAHe6YEjCUPvcvGPvKNUAMZvapCXU58F8braSwENoVPZC6ssSTZMMCLCf7X96iuLQ6RuyRbrhU3XZLR",
  "key22": "4RvoM1AiE1Tc5Xn3sKs4qyekA6LFgs633gnbmkoYL2bqtKsoyFSTUF4d27o6Y6hD8mJhHxTHLRYCk5EPc7jJTaSS",
  "key23": "3vbkKZaFuoa2s8gosbbNNZScEgiwY3Nn7a9eqgUxD91VQ581RU8L73yVETUs78JHRdSMWC5ywDGmc263motsYZFH",
  "key24": "EHpvQGZ8AKa3wRuWbHQtswCEZboSgCXjCw5fgty3NHvayuEeLBA1j8MshY8Fzs2z6t4EdXYDeLmK1PRCkTxXZTm",
  "key25": "2XaWfasqMnLLMunfQPL6wUysrqFDEuTgSfkYWyfh6ud6SUf1WM3LeqQBUv1XQAfhtfVLrTMAY9KcpoWTRZjz2oZx",
  "key26": "M71272dG5tn9MnUvmsGiSvqyn6k4uTeLh1s51brUAFANb3GkJnnit6ncdocKtyhPrHZasHg5SDAesLbejiD4Q4q",
  "key27": "ouScypDxokTvAFaUZepkw4FrGGc42FC4sGKDdzNQBVHd6sVxFWfgQyGM3P8nTVZdAs7GfqynibUshMfLZ3cxCeC"
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
