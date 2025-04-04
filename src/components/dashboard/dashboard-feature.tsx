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
    "2pqa5P5Zrb67axYJu9Q969rV9UvwN9pWvdBT137oXY8mj4ENzTbmTyrfjJwjAeYCrsnG6u2hKSaE9dzsYwgLCP1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hYknEKBGB7TZp6mzKPmE8aNLq6aDoSqAjkDYt6Tecz822tfJCUBFsze1oUCtFBobXNMCQrTnrbnd7PSfo9kBaTk",
  "key1": "8bEcS7vZFRfb22A4X81btdmUumWymFiwWUoQZ7TzfV1GHiPyg1SzzdwVqH9ZP8CTxYj8pwgqG7GQQLxQjyyS4JM",
  "key2": "UFQQvKLtRF8cGaWEwT99KAnuVUGTRK1K5kyCWouZppSaSjUGscWGAHbyZFQ6fkxXAiAqH2kN66RWMBLh2ymwZDU",
  "key3": "3zaxFDf5ven9F7UxpZ7UzFvwwcY7MhyQsiJvB5dXoQ4Xiu3fPzZ88eLyraEFhN5aUm2PgUFUuiL43wteUzCC5o9",
  "key4": "ufkx5bko6rwZo7bT9VpgWhQjzqqvR1wLSYpbbSumAFSqXb8JQMk1WJvaNFrhBdRXiNS7RPihigmscfrrPPtmrMP",
  "key5": "3WWH1VYe2X5gmU9ATNvma39DPyQ7nDXvZ55g5GSecBshr8gQESYj1nuGE7Q6w65wzr6kXgZHz1SxzRapZSRaaUr5",
  "key6": "5hfrE4NHuwrBMks2Ys6Db5xJ5JZdDAxGoPvHT9K7K4XuGRoLaiV81qWLJamKqR17Vr8S7BbFvrwMsn6L4ShfdHor",
  "key7": "5FreGwpBsybfd65aY83ahD6nBvGFAwrUVB9xe4vYQHzYTdnsB2M357GCVpapDfdBKw4dG1Hvu3pEzWK5GHAMX3ob",
  "key8": "2ERivNio3ntetZMyxFs1U5ynK4zHvWBiHEt9b6BM3U1ykgQAnZps2PRqqrtMjb15tcoK1fYYnMHvaEL61i7sjXBK",
  "key9": "2pRZe642SJapdKsKG8fBHy576wutAhhuGLa7F48ZRGhDEUDVttv3TkacC17caavFenAxSpjD8tdtUrzh2g5KgmNB",
  "key10": "3M6GT7NUBeyhLhKwpKsc12rFYYE5C8U4Bj5DQxzmjnafiGA3L9n5GZrFMu5wcUJrmdf4ftqAFVMLBcuHKsWtDW4f",
  "key11": "dgog9dyMZ2JKAZLU8T6JWQUjz6MJZzEbfEMRGTkexo3KVFbBAqp9JsRbr5wnRgJududa8DsYcCpLTGv6pzGVXLJ",
  "key12": "wcH8BtpRLVEyg6oTb3KnEgScaLSYGjYnkZDuCRdMHY2pJwAePHS6t78oReK1jFSmRVUToa5Dp9GcT4ZCmZrWfpX",
  "key13": "4VStooVF6Rk6bpu5ymE7WK9VW2ySzg9zUWJ7GVzBoZYCouGccsyCTGXktvGBm3n4xEcKGu9DeFuJVfVFncdKMuv1",
  "key14": "2iwdCfaFCJK7i8op4RzaCWreMQYARAGPhdQyqDb2UvZxn8bwwvQvNLAkyWYjZrxaMfuVU5n4B369YHKo7gSKkpis",
  "key15": "3P1U98JejbwyqsCVz3qYsbmM2X6NmJu4FLCg6YUhdpZ2Yp3DUif2D3eCgRqPqeFwXXMgTPscURmAr5SjQzymLVkk",
  "key16": "dKB2bhyrXPfkAmtGNmwZHSZRQiJsoJKdVVcGPBhAinWpMgTWFpekQN4uH7g29i2awCCGm8X3RSCS2zW18u3EKhL",
  "key17": "386dk8XaD2dwTio4k974nBJHNQEG1XKXem2ALgDpkVbG6uekges7YMX8kA26YqjmZRVnUtKGbePz1FLrGB22CVNT",
  "key18": "5UMVP1RaywzPGf7kbFQEF3YCd8E4tUYkAd9rm5LvZCVa1PXKvNeJCMeJY79RjKa6h7zqtYNa7wYN3gnUJRgYegxb",
  "key19": "TQB2UQG62157sNmVkju6vhqBL11AVLf82YSbKhU64dZtzbo9eTKppDbKYiHYwxwCzgyCLmqXTc3N6fxr4VhEagV",
  "key20": "A7rBCMwQBG36vWR6p6qQCegRs5D3TXRi7bDZxPpny7NzKnmca59uydvCdotXVo9FsiNhGCoeCGpSaZnurzU8iTY",
  "key21": "CaDk6EMUSJZdSz3unEyBTsUvqdFDY3HFWxz79oubgaaUfMwk29XurP5wiS7rFZgdHGELVg7NqvNeqtoYADnWM4K",
  "key22": "3tpKUKQnoVLAdm9hQCsVfVKTjJvzu8xeddpuYx3B3H2ZmcB335DkkXE9nSs7PZSiXMCS7Hef4aVmmaPX156jojt4",
  "key23": "3JNHn86iQZhaGm1pm3mXYgzxDTqq7W4pzrAnjnZSKKFrwFtM8iqUSqESmRrfRHB5LxrVuDtRjSUmLeB9DgseMX2X",
  "key24": "45CQn2aghooYA9JrA7KSoEhGDTywVeDkyvYg5uVXHku5kQi9Xa4bxPdoawcN3BQdqE8R8CDPKZGQV8Nkwim8fBp2",
  "key25": "3gqBSRVLqArnrTUEhjJrqZVovZRVvQiE56XdJkKxAtCWMxc5zHoGbetfB9918KHVCHzRogirKDftZagn2V99HqbZ",
  "key26": "5sDDh6MKbt9pEJFgAM1skBURttGNXbbRiZrquH5pE98iCAqfdmJSSKWFTrt4EdvD6L224FABrp3xdWVB5VHXpWpA",
  "key27": "2KwhV4UEkdkitvyS54h5dbu2AutkqYDa8nE7NnfaNo9rfnwXwhUnNkZ7Y7sdqxeZVBgYjFP2Bc9A51iukgsR1SPY",
  "key28": "5ViRhdnMfTUSj7ZDoN7XhibHvvKv6LY6ZWYttia2zn4F2poQ8qDUnFCTGdKPTvomXaRCMK66UwZ7q8PeQou9GbEK",
  "key29": "3oka6vkA4Y9uEYvHWmv1HrxZAW5j9NvZHwkQCtwsN6y5UtunHtAYAYqyNb2YFoTA7aj2d2YjRHZ6FeE5tMtTu48d",
  "key30": "5FQaTEDHR8i4LAiGNHHCUJuAECasXrpSYGu831ygtR9xfyHWGWN8TAdjpNeWuFBkeKmV68umXxxCuDRNGSTKFion"
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
