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
    "5GqDYApkECn2qdTpoFfP2fdJUYobtrqaDDE4dbWmHfDKVu9TYNYkLiaLXFuwyUzNSSja1VLTaPXK8zfkj8vUutF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hfCocpUCCx88zmHdXgDDr5w7dYmqM2G1yYCLdnfW54nf6oCf6rFdMHNhV1gSbM8tk8Vr6JkrKzCRQ3yodFxJMbN",
  "key1": "4qNj2xyje67HkfUUHUeQSAbgt9WqtRx2XfthpoGcRKqJ3w5viWdST7sJPLMLgKMgENbvNtnAH82wtJNzyndcQFio",
  "key2": "243HqsgzGpTguQ8NT7fjci3sva1pVUyk31mJhg7Ei1XSnEqLHu79TJZkkTFRUWKzHJZgAkPhEMpYZvBwNk9kg9gG",
  "key3": "3SNyFH1F3pPAt9AiE5rW2s2sNmgjuET9m5Nv7HtxpHauPwzEoAztrnDUAm2tqkbCTxR3CZZJRsBpb3vggp5poX9X",
  "key4": "5hdX8ZHsdeC44kvcpKtX4hbRshDuPB8j2NLsAr69mDfdvoR1HmWpN6kEbCq8JuUyKJSZFSvH86f1QjAHgtpuutFw",
  "key5": "25GerB4G6JXUckaifazwFtULvkaEQtu6qWwwAsKPnEEcmpwoEgVTbDgKFF6zkaJtt7DMBBpoJyicQWDDjKdZScur",
  "key6": "5Uts3d3xt17NkYVumtrP8ATDLe2BbGPQSf2UkPgQSCUssRzsEJP3otiZMQmT44v2EKNQp73r6tocYXZsdMvHrpkL",
  "key7": "2uqTCNjC66dLYg83R7pJ6GdUap92CjCWEPqX4ifXLi4RbgQo7dpAX1rEsi84mRmx1ReTTVeQpWtziE4Syubep5bB",
  "key8": "4jm5LuxgMdf4AL7zbzUX3UzBenUZUC3hfMAUC66oa8SKKtdGTAWcixKbJcAMKJ5i49zT7wpWkSLvCiPhU3aSQEVQ",
  "key9": "5WGgC94gRotwZ6DTgo8fgKGJMUs98Ry7wz61N5KNwe6wQMsUDN8mmQLfZnvpqC6b1xtSrZuKAkFU56MMcPjMjLd9",
  "key10": "5CqWSwkvS2vL7SrBfJqSsBmeG5rm7xyih2xcVUVMVSZdTQaRP5SJoritTutvaNK956NoAPfsZfVfXhvSm5Mmwbax",
  "key11": "4sxiabdr5SQeSSe1JRixAiwNtse9MBqk2qyq6Q9NVLLr4aYhhdCirhajeXLmGsXyaLwTLN6CWGLRaii4bwWCMhsN",
  "key12": "3nozedExJy1SCWYAJy5iKfMDtwVaUqKHiCKHNrrAtE5DfccoC2eG1cUNnXYSnRcnYofWsG9xcgM4udNwDpsKYVe4",
  "key13": "5TLendGsLH8cwKR5AqFSeV2TDoPamDfvXr82SS2ZfDqXV9dnDywUeDESiSuiKvBesphB8u1iozprmmWwsxqovoSk",
  "key14": "CJSYhVg2H2huGhxyRB31pvNjEu6ReP2oJksQEPJZ1sHhbY7CbEwkBpYE1Cc87TD2ZjfmkEQsiAdcK3sr2PBef9M",
  "key15": "5rsnnFa3uN3ZzuD1vb42yEUfZZ1apTKWbpYvmoTaUdpe1JhP2WuNWn4veHbc6CHLvL2bMQHHzTQs62QG2EY5ZzzV",
  "key16": "jaQKCfki8Uea4SYGbPzh6zP5aCrtKJfYXYbon6HPhnY1vkrkNLNzz12irogugGYWjdfoYvfdB69ekhB9ciqzUf7",
  "key17": "xPeyURxMYkGgfDh3CWdX3Ekz29j2Ko7geMJ6Eyg7YjJPXLoj6qjneVbpVv1R6K2VntvUye9UPJiFXWQ4BDPMUSf",
  "key18": "qSsWxXnqS3tq6gne8Ax1QFx5oN3uJE58kkNxjv6RVHEWA6oS9KYQoG5FGRS7e4KomrfGJhMaqCmhcJyZdM26tcY",
  "key19": "2DorscQaLaGe8MnDfSumyPrqHgdJTLtyVooegiVbNH1Y5ouBWUftJyFmkPPqDHgCVXd2EvwjM7AvJd8snyZ6zRrJ",
  "key20": "4QbqBU57tKKdgC7JyDx5KjDhsRhiHSDT9QxEZb2Vi75iuuntRhwA6dUvdNtBmHhTTy9BufWFbaP1kbDTs9Fqhb7",
  "key21": "dxPg2aRgKd8dmkBS6ogkWXWfovwp5DJpYY4oh7Q8HHAiHFNa7NPUneafvDfA7Nza2kPDY8TyUksEn6gKwWxgC1o",
  "key22": "5LB5H9ww3mCFKySMSZbBUMXYxijPXU8LWeRXRQ8vhz4rDGZcQFCYvmENRVEajAHkZJxqux7YSTiS4bdTjn8RjWbn",
  "key23": "yoJw2NcscrWbmSh4X1byjRaVjXHfeEjB5naKfZA2PbTrj8RT6seyCZSYcK8QTpzzPeY56Nvs55SLgxTGuppFRCt",
  "key24": "3g2uaMDq9CivFtiatYzBViK7U54Njap85M6akpCS8kTeN394WcVhw1B2CnkTbuRgdVewfyF8YTkWvR6Wo3sCfqV",
  "key25": "63gM5a7r9kHK73VVsm7czuenLpCTkQQn5JYuC7rraJvPKoSpMfRqLDiWGYcRV47oQCabW9fMhyKwwPneUwJPvgQR"
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
