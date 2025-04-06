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
    "3FUA2CM6knWeuEP9ss159TLcNftUyMbStGL5DyRbJAHDuZ9LVnMnhvGqLaMd69hNrr62WGHxK13u83feK7DsJPHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tYqrQfUVAHdoLDZpnwLxXfGLZfpA99KfapZwJmJgUTSMV6QB3mva8Ua2e8bRfe1MfH5jUXvJBpTDhbzVbe49JUm",
  "key1": "5R5p2b6FhziB1vkKM1S1aWp3453kLMeRqzTAHREdkrQctpPA5BpUfdaFAzj2QibTs6aZaNENYjTxnWngL7VNBHdu",
  "key2": "4acyb5T41nanSrzohQceHsWsNwcz1r8LCCxkJxfQsa3oLkBthjSviAiNeCdXdD2dYEkaKSwcKtv8oT9FGgbwwxDC",
  "key3": "5pqgnbLZ3U91LdQqCPEZmeBFPRCrYxCfeaAYMa7c3ct1Fvb7cFrg4k9x9mmXdktUFdpZzGZw8c7SQiLh773TjT54",
  "key4": "2yDr33sr4YTSv5SmBTvQcQviaUnEXj84PDEswbLJ6WGKU4oiagF5GogHeEx7J9vzjrzvC8faKqbdsP1GjnhuK6b3",
  "key5": "4EbNybJaKK4ewJbvAeAxvDbo5RRnshBhtF6K8TyieiyTk1HHt3dDKqUF24dfLQRAKiD5ScqSfQgekLx8SxAR2w1f",
  "key6": "5DKuTYYeVp9my2c2Ka1f35xqgVNeeMKYckKDCzSnwNdPweN4Xdm5kCsYedzcSNqu3E96mJsX5E5sRCddqTg76uns",
  "key7": "43hprV913Prk9T8EtUx4aj6oqfwjQP6soBS73q1kN2oURp5j2aEJ6ECG1VjVe5E51fkHUrJA5soWGbego8A34Md6",
  "key8": "kmsYCXL1fTx1e6QWshM9SoRFS6HtP8FSaWJaCFkt2cxZotX6Cd9thoLto7dZE4eSWRMowKAuzN97eaCapkqdFGn",
  "key9": "3Di1BXsUtbEMRFqLnRe58uSDvMJHSP92ViQ5TU92vex2g8uh2zanehdAxJxZustjEwy4DmF7xQPnpjrtQTV7eadu",
  "key10": "Do2A7pt1gDegLzpa9YXiubd1nnZC3pB42kNnA4SYFkfd1eZBdDo1smDZqXN7hQ7y4thtb36zvpeiQ98uZ85BuMs",
  "key11": "4hxtPjUTCR6kgHzL7PD4kq9CHq5qtZj5BYkT6EMGnoamFKvGZ5VViqZh1c3zC6HBZU8PJearL9jySCfM6AjpYAi3",
  "key12": "3SXU7p8tYGMWw3xdvnt2vMeXdZahEGUd9iCmuWPud5SmzLP6Ep8iqi4aq73epSYjWtfxEceUfNXfYCxSDFTzBTEj",
  "key13": "9rPDhcudUgGHgb8PDFQXVt2nyA9qK1dp6HREcZM41bj2vYqyZ2hBJCokwXVPVMrHFZn3uZ2TN7SfqqC2jtRwvqh",
  "key14": "2Eao4VTbo5zpfK1VMgsVKkpCjZWfHSZEJGyx1mkELwqsgtgXv18u8Eok7bvZKnpvLXVPNnut5jV1PD7iKmuKJEM4",
  "key15": "62oHpYKbTNto6pjxXPudySTk53hKYtotwFtcZYrakNhYyCjLHKfKcUSkLmE6qiBzseoNAvMxPkZ4S8AX6ZYcabC3",
  "key16": "6k6yG4FFhxdBiyZyqhngDUkpCrmzg5rQNEXRaj2JqLrib389FnwSYE2c4rudw4svkAvUYy6UZmFHdBAbAkDkdiT",
  "key17": "41kutFG5KT4ijRsDzS7uFWLucAVZZeTPuy6ha5sPVJqFRmK86viNvFHGZgEbyb5RJomZHhygJWRYCtnKvKPjQcp4",
  "key18": "4NYkEkJqNvXdJFrEGLmyqZABAzPL1qymd9XXj5rWakhLa4W9UysWxQ6ZFot3s9FZ6TwQQdFbBR57XGHdjEoqmoS6",
  "key19": "5PZr5yrVJ3Z2MnNVUSXpWNL8ado1ELdzKuKXaAzUc28oKRZhgA96KxW2PLdTeC5qzRtLN3nYNryJpD5wUUcAt24Q",
  "key20": "4913QcrMKjj7gi86VBT8xGVPp6Cb8ysBc7EfHU8LKYLnLWQYJEfsJwmFuZcZcPaJXJ95UWzNFphxZMgp66ZniTQR",
  "key21": "2dHhuEF4xNh3dtmPYDT5jBNEXEGea7QtXtHnEDeyNP23c6ven7gM4ggMynD2e33hHVh5xwLaQdoLncbx4LCqvMSF",
  "key22": "2SLjkKTX2HK1i7eFLipJDu7qsDFHyhwcrYifxq1LSxLLYtqLW8gTU4TD9vwB29pLk7YNaPKRRqZBJdLPoN6rxRNk",
  "key23": "3dsFmhHwq2vUUEwGC6GeNcbgD7879jU8hd1jznsSbqAp6RqfaGWjDnJQu6i1ifqFtB9NEJrdHSpjHveHTLq1gmiC",
  "key24": "wUvoXMA5aBke4gFNBZXd8EY3NJTtSbJTo295VvHyBhX1u2RXrU5Rvjao6BCn6yWTs7hkeRk7DDvHg82hWjNQwan",
  "key25": "46varVfxM2yPMbNZgkJknhcQuHLMTkkhvA65Q8r823XkV7hGqed4dafkPsZB3FLmjuuFPxof1nGJsxL2eiv87WNT",
  "key26": "2QNKhLTKd7q1Mp81kwSHnjXrJMp7UBRBd9YpLELJyxxC2WLEGCeznnLk8h5Q2GUU9QLSGHxKbfvcw3UFCsR24Mz4"
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
