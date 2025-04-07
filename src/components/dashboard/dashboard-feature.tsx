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
    "27LcqbLN1TcNGX4HopEHE4WK9coTwfzRBW32W2XW8mgFM1B4yctqmgrqAqsoQmV1QQNjKpRF5EVm2KjJic7kqR6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ehyJSGYbXc9eJKUaBenctu6bJxzBZYHP2YmBARZMPDFqn1qMfJArAQDh6yXkGdLZ3eETJDGacEY2AiMDBScKnzo",
  "key1": "2aq3yVNU6Xiw33mqLKrYoSDxgfAeEScLohY5YjropH1NFmSsWdeDzL6hA5qNKfyNfa6yXNLKMkrTzejYNV882ikD",
  "key2": "5CCGXoQ9mwpX8nDuoac8qUtaRFTDgHBCE6HNpW84BdqbSiZqJ1E1vN4iCSXb8qCG1UAnbkim1Q8dVu6oXkbWbmQj",
  "key3": "34XJZhns7Kc7KhyjRSU8uVfoLyYh3zJwJnyW73FeEvemGsZiD6JtVfwRMHnpwGePiTYPdVADxTh27MFNQgKUkUGd",
  "key4": "5ep3wNU8mnGXWTT9S55Pmb4v9PjPj22txxb5A3gViW59gCzERdcjwDcgsy39DLhE5PwDwopU46HqVVEJidARi2Bj",
  "key5": "2YbLuZxX6LHevVnTts3sh9roVBtb8X7HDWb6R4M6SusEfMHejhJzxfcEqyWuZdEJgT215WQhof3mMsJBJq9onGWT",
  "key6": "2v5xn5kxegBWjxtBC7GerfgU6e4syvhr68r1oTQuYSZVEFD6dheSxyVwMaS4pphcGK6tVjveTdVBpMYbLyeGL7iw",
  "key7": "3wyGXCWMC8jnJSFGepj4Diw1QcCZgyokvf4EuUCeB7mSpTg9PcuvAe74REuaivLm6tUz2hcs2kT5ajd9jtmdadB5",
  "key8": "9s3TULcc47jhvk9JeFyXnSXHKmy4XmE1g2JJu3ZesuYntucBcJuZPJHjkmgK8apQxJi2ALesg4viZGY5366g8T5",
  "key9": "4SttJQgottFao85ccNnTzKTbw6dJkVsTufViV6n4Rpeb5R32FBqbw5cshD4GK8ckM8Gy5oUREFsRLgxvw8eyP2pq",
  "key10": "2DJAvwMko63uQaAa9XdwKUWPgQoSmeWBS6zvEPuk88MRXrkXNtJFCKVwwieJTvTTFWQqok1VwkNt7VwxnXReQoLP",
  "key11": "5ZoMNBdsLwdg57geBHeRdrV6tBkq4ZXSRRwu7LemDthK9FqCY4yjou7gzWda2LoVFQHjh7qqiYNLWbofWLkswk5V",
  "key12": "3JwP6bHaNEZy8Ybm8dcBKhWuvBKFaSRErVQUEiH7Rcxgpo4f4iTn517LDkUJvShnuLiyBL62WthmYWH1rKwLEmbw",
  "key13": "2Y9mMjviFQwq5uY4hii3742PtLNbRbpvDjGtMm2ocuGemJSaWTMmmbf2bTrv2pazQK838XVzEaKfbTW1Gvo2T5D4",
  "key14": "fXBQ9GTYDndioHrp7JUuXkzCyRrrbWBbZDFb5LquPKHfQvQoAuW9VywW2jANkwG3BjSSiULC8ke8tdPgNarw8ML",
  "key15": "5kan95k94wwgDhBV1mBDz8Gu6m76oxCMzTySZZ44nZfpoEpatUf6cedmTiKifCJZ3TLpxKHWLwUEpyieRh2Yn4qD",
  "key16": "4pojNkj6TvKxS2MuFGGzJ9NUS5zffdRQoZaHJGBwGrGNmQcq9u7yeUf4622ZFofmJ7ZyeCUiYBCPVc6BihrhHw7c",
  "key17": "4jKkwPxVYsrRM6C6n9ybzCKKhfSUVuHufYPmeE58A2ksJWctzucLEysCH9TjR2Rs6YuyLZTkDY2ju3nZ82amEgGy",
  "key18": "3wwWupiPj9MPcixgqr216JdVxp1B6ANhEDSPZ9xyeQ1dpfwK5Dt3ngi1SUyf4cj2Tm5RbCQVbqngaM1VkWk22uNw",
  "key19": "2ArQek1zQncrH4L9B3deF3TYRqRTaqQemdwdgNxQLJCLthqv2sByWL1xkfgrtaSysXR3u2D7cepC3nvFeHiCsGrm",
  "key20": "3pnkDbjbt9v7dNMk9eNRm2Z6K2u6pFKYY4cgmMm5HpbkPmbzCVhRKPrB47tgRE78cvL2bsJxCCw7qW6FYnYekANL",
  "key21": "nQMZEnqQ1Ar4YuPX4CBiyfXee6TswzB8Z6eWK6284cEm6ddNMZHZfjRnwKHq75vCcBiSmsj553FGnHqtLF3ifdw",
  "key22": "5m1MQ2N9nAHHFvW8Jy4y5H9RdCA6kBwFcmns79Nm9f8qu3aRcZHsk3wvn8QHZ5QpEuHZyRewrpAYw7XfiYgASWhw",
  "key23": "2PWfTDv8UJkB2xyK8WCScGycAWsBpW7ySqDRVfTdpJvxf4vJSzPiydD6QPtmH9Lsb9MvNQ4oNoMfTzPRFtKpbLJV",
  "key24": "4T2nfXn7wwdYKrJWACB7zMrsXCNREd7fSEvpNw8VeKPtBqbyWd47ZSnXkRouC1ihTTEkuW5HDXJ1YiNrp8Anngta",
  "key25": "xxx1PN3GWrowCwWhSABMgeuBrzsgTDGFM4Csko2CDqsEHCZjqiXkM3wWjd6yX912t89PvmKmfchxAbgvvSFLjVw",
  "key26": "2vkvqjBCoFmGicUHNTgxBV7bgtyXkmu4Z5kqdQJVUZJzrWKUCopTnkEtciMBnggCPnZX2X4qdMdSRWTgDSxFtPkZ",
  "key27": "4BpLcnmLfFhoEKrPmCfGVEzw2SReDYQtA6499mVD9sJV9JU735J1xUGoxnjzJbmqHPTossu4F5qfCnvcHbAiVAkN"
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
