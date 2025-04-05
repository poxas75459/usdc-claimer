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
    "2zCfbrEhvu4mtczE3vWQV1oeLLUHDRxq1uegNMKRWHtZJiN8FHJmVwF7wEkrfUT5FxSyeaVupCjADUQrqqvxwxKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GatnXFWQPruwEZKaJJ1r9Y8cuUwabvWzBedeG91Dw9umCYEXzYPKqxbXSTkWfTtf6A57NDtDvVUQZwyRtH5vchu",
  "key1": "3mqZk6r7bdnktTEehdpCKCfqQjvppCJu14mRnFu79PyM9RM87sRyfZSKaa9DUVePLdLyLSfRNzDMhBvEGuUF8eJi",
  "key2": "aRyY5qmf5bUqwNFvmxXUpRV8FAVwMEecc3W6AwFEfK8FvyyxX33eAZ4zxKGvQ1PzspY6QySnBo6fBJcEn8zF32v",
  "key3": "5BB9k9Fv9XNmzGtNKmL6FTLz2TGRMSXwx9hWhgzWNzn1xrRZzWXHmxWKz2co2NKuq84TAdBzt3zdcpfWmcE6cZAZ",
  "key4": "X5bUipS44Lr9G7susnsuJTDSgxiq1MWd6vFHK57q4FuByr9xXDQqgSjoHoUsTV1y4bqeNkWw1Xk8yhgqUKUUfLC",
  "key5": "4BwYgVgNpy4vGjrni4wQHkXmXJT6eYpfiwdyDJfcsKBjJU3Jpxv1prujmpTiasWjzvZNsK8UkMGZBqxK9cms6mqY",
  "key6": "4v99phZpZfRXHPJeEeNUFLwVANGFAYUmgNCGMsJ5DDyZDXXxfgHePYJgSibvXpNxZFT2shCUzSVuXaDP4b695Cgq",
  "key7": "2Wd1xF2M8pUmACezc23CQaKZKUKXo87zhz9FExbJ8j2qhkNofWbohzm5nbLDBAJeWtk6Bz6uxNofa2EzUhgusBVC",
  "key8": "2Z3sGYwpRso98P9rhBkUSmYnEh31W3ZtoYFW9urtq6m83aFRjTTVCieRFtBY6fRY2N7sbR58j487L2azfpSDorTq",
  "key9": "3yWQXKnFmidFa5mcJKXdWZ5dJUDZBToz1pWRpBJ9vZiMoXgXvkJiKsrkrv91ZHbVZMXDr5EYQjEjKarKQsywu9d2",
  "key10": "4EoJxyymTnMTQoJqn6Mszsi4ktK7e9kWfzkWn5LL9f1qo8jSQ5dDnoCMuNhXNPb9uf3VxAX6ietx3E4wB6EqSHqM",
  "key11": "ypwwqbdpM5Wg1FXUrH98qvvjMm8KTqvrwJECiQ7n6ManduHj8WkHv3XtUn5yZ9ysvpGtyEosy1ovK71axniaBaa",
  "key12": "ZPSgfh6Wigx9MqF4S234sJ5Kkpk1SSCnEdgLUJ28HiRnyLWQFEYtAAn73vCw7YaUo7bd3SvanEY5ziespZpG4A1",
  "key13": "2WUD63JxhGVu2R1zXcpyY8zr2zgNQdZuSp8QMcm2WFN6W7wv6BB7cubN1XPwEvax2TQhQdXuyRyieaTXiQk8T88z",
  "key14": "dyw1bp1qMPY3KUdCyxJwJa2sLYXVnoABuBnRmMbVMSmwUVwPXHvktEJhiGkffrfGey8xUcQ4d3qtkyhGaodaXDk",
  "key15": "28VVzDeDJkg2SeDMBY6HBLFjmE2RGTSoV2LcZyxGEDpzHCFz346eAc1G5jjJYxMNCUWLbCNq9f3GqtvgLJjkejYx",
  "key16": "5Ps6U5h5VQpMEXgzobGVfxUEtaftiqpKGEiMg4PhwzuEaZrrr84fRer6HwfLeJBiTramQ9j6y1rMYDZihdUw5o8y",
  "key17": "eiWK5kysAHVfctAngxxWQGD8GEQxTmGE2tmbHCMmrwwf1JPMQf5mD6WD3v4r9DMaGdw2xaU2Cfe1C9kLZLmb8Sd",
  "key18": "3qggPByUYZf81zqQDLrxYXRAqiDpvNWwDhhVnBbXtGd3cg8JkqHSdZbKqUbXZMbD1ig4uhX3zpxCKxTwfNmeMP8G",
  "key19": "2L79U1GzSCitQSVv6RiH4ujNTFRR8qghRAdxxLxhcbMqDHZKrBmiw7hQvwDMAUbB5Wmg3hr7Eikwh7BdesEcHcab",
  "key20": "3w9vHEnxya4ttsiHFg7oTrmi9w2j4jDF6Q3divcFLw6mQA7L5KaKXQZTfXjJwqrQN5a6gWMQSaxihkPnHDcB6u74",
  "key21": "6DpPX1QaKrypNSoWuSp8DVXDsFW3AK6WUBzZ8QCBK57uwS9z7E1wusCNcvwaaZxB4hH8CDiDycXu9s88rg9pP4j",
  "key22": "bsYwVXz2fdK2nwnB1dgdsvGo7p4fpF7izvFCdjHbKy8t1Vgs4e8VhVkfoCuqWx5YeGYeGwLSg1u7Ftt6oRbJktE",
  "key23": "57xSf43bezDGncUe8m24pK4zXh8SEqkbdaocwi9oViR7zkPueP5pf5h2y3jdNGM8FTACUoYNRUBhN454vMGxH2Xz",
  "key24": "2aDB6q69WBo72TbPhbSs3LQYmK4PqwcjZubo2uXoqSxa9hcHjKPorMtBY5rg3ow1anpvLHZdcZcg61W3eBEaX1Q6",
  "key25": "5KR74ZZuGMt3Y55gtq57XYcTkSUP6iE3p35QHxshP6yH3Gds1tPcmdJAzKsjYw8fyRpMj3cSJrLAJ1KAygddLBWT",
  "key26": "3H9bp3vQGEBwyx5bZGzjULHi1RP1oNrctUc9Prdty14dT1bRMhiA96AYATi5ogEnPwn4A58VVnUShXL6sgUuU9JD",
  "key27": "5fMi5cuZL5YETokveFj1X3FD8fnNSRneiW34ir5CDLyPHE49WampYWeD6rsUEJzemM8LbJhmJSuq7AM1j8oS68oJ",
  "key28": "2p9M2yXyVu33DoUPAHDhKa2DcsrJsgV2KuMxo6kTrLSCniRBZK3jbUfz6Qw9ezyX54bPEuq2FbSq2H9Lws5MYCSK"
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
