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
    "2svMAQ8Uv8sXFq6Vo5n6mSr8i4XdTqaRPifqZyfUKhhX5Hk7wauyNr2zR3sXw2aU7BJUgeTP2RGSdp8niZ8pMjxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WfV8eXUHCPN6H2GEp9pEssN5Nhqzygtow1cVSdMG4y7R5qNbWWTsQsRoD3CW7VfDNAiK2iBQ8XCfYDzDWXW6TRY",
  "key1": "4dR6xqaN6KkFyNrHZEw85PQ4seteqy1Xqn2zTVGq7X76NpUrnyBvo55vS26r5uixGeFu1AoTMRdsAMFcR6wJx9Mb",
  "key2": "2pN3gtwWKHtrCJNmhbTw7S3sJEWYvpPiN87wfbuQuxMwaETq9Nk8HYNsRMdWtbCTUTnSyN2ZDm2cyDVALLW2DQBQ",
  "key3": "56HwSy9i2MAieXzL2bL6hMyfYH2cJkUaEgmyMYAy9nEu6vJJezDRxZ7snKTVqJLgBmuehS5EUfUdSuKwYkpwu5KQ",
  "key4": "2NH29217BrP3tKDn4bc835wYR7FWoAf3mGZnq6ts3TnVQ5ayp3HJTtFZW2nTx9V1XCqutAmoe4Ua5DFgwan2MVWK",
  "key5": "5GzGnXfByiADCk4747s4ULcjhU27is3ikTeg8a5DZ6JVEc1ptBbiNMmHnB9bDEEWbmLQAvug7z5ntUJswbERFzEs",
  "key6": "2asMv7nvq1epQGQX9WEcx3ZyfKkH7UZwkiXyVW69vfjNNY6WKi8Uj6k7Kb2g4PsTWMxg3k2VPSeJ6oGqCb3ixyD",
  "key7": "5NX9xMAYTC28jT8HYsWqxNTJ9CXB1gt45ATJ3AmwUgHHs5JHYEwBkBG3gFHB6RH7rZUwoMiWDDqQZjwQYHFZ5CXf",
  "key8": "4W14j4dRumJq2TCx3uLNfKXDtHX2fas6KsRXMNRoEJo2e1GysHqDzJiHWEiJqKdVQFRuXPoSz2pHxJbaUYMTDFcw",
  "key9": "5zxHue1v5zTAb2PdtkFDnMEE6tmnzUwn4Vp4sjJiHsysD3HDaFaWcWhGBabqfJJp2aGfFgXeAMqQ6zZyzjQfgjX8",
  "key10": "jUEFLUhMYtSFymDxetgLLGBkFH9hJiHf4Wi8q6prSP6k1RY7sWJnBomSoatXKF59Zwu3zAngGa9qL3tJdLsMsYt",
  "key11": "5N53hGvcG6kcHivyvCeqKvKa4Su3sWUAdPQADr5bdWj6Li331f1NrQxZ6NjMghGsnkm77x1zS11ZTPRgvkSc5CPp",
  "key12": "EReHGQ1j2ymN3kKRPtdqcjaJGWjCpXJb6QfrVCuvs7fjyvnhRybGj68cEdEBeMZeQpCHdUwFUUXkrHB28HJCgH3",
  "key13": "2yQPzpVHrYT2Zw1sYz4HoQsdwwsS7y23pb6eGKtozATGkNNMjvJ9ddh4kZiuf9rbo2EsCpao1hya3PxbTE5a24Yp",
  "key14": "4VbNAAFHyhoJasBCdbQxS538r8T9mhjaTSVJohARPzdbZFQEfW469o8Bx7suddgA8abxecZHCTqP76v4pB4BHNfG",
  "key15": "5VKrNTjS818khoM491JAeDe5ovNJzx8BeP2zxVqQWxtXjgujLNmCN8NjVWTnNeNcttufgwGnej6rYs3iPrYFfS1g",
  "key16": "2Ro3xrs8zftp8sM1bCvWt6MvsAM5vwoFzwzEFWFWSHuu78KHnKJjDv2f4CTJP4Pjiqdop7zn3THan5H27LGeYmf",
  "key17": "3ZPKgZ35pqcDe9vPuhCbE5PAFWnt39m9KKPLQAMczaJJWZwDq9NZLPNCRUpYC5XkASPUy3DGqWtS69y5LAueNJUJ",
  "key18": "5uCjPbobudjQ3HcEVPjKZVBg3nKG5oJnb3v11cRsSHLFeYJ5qPEyy5syN8k3X8Wt5i4zQfon6TvyRUnv2TGqSqBm",
  "key19": "wjXKezhAB3aUSP4bBRVSVRDa2zPwzUWm9Vi1xXBKguk2coHqFqgapjRBAdJ4Q8Aoqx91GVykccnzS1H6tW52w1z",
  "key20": "eoVJeVLxkWYxs1RHg8Jxcf1oKtwhtAVjuxxGjZLSbpfu43kuivtWZaCFjKYv9c7iTbJeV8MRxUJpdmjKGrHB6eL",
  "key21": "5WL21c4vt15Ds3JjXxPABg8rQsPDHBJvuB5fgLzprBC1BKanGyu8VuocaDLmJyCMFnJnof8ZfGPFev8tJwMyuA6s",
  "key22": "45CJKQSwRqddwWQ2wM8bBGdi2n7Mzp5u1r5Db1WoyHMJBAVX9urQer2q6JAW9cGgTdc1EevPoTsCYotVnggGfKcD",
  "key23": "z9UG1oVbXvTYzTQ4TSqrxuPaVGZtLFCXvZHgzhsugk1KpkmgiuiKmwRDAKVn78Rvu4o2L5jq9mKFF8TimnAgSpG",
  "key24": "5tYG5ZUDkTyY5dDKELLp9xtV8tziAJznRuWH3RR5uafCWu4NaYZ8MfQNYE4fzVC68VonAWDahqmZZFZ3LxsvxFiK",
  "key25": "kice1G34b8N6TfhQt1aYgguDwegNFv1Qk33qP74RGmWHuKjFZJdhvb8dbz2nvs9NaYfCzdE8N7d4kg3fTXNYHFW",
  "key26": "43WF2CzGgv7SAPv76ACaTjR59z1VULQANLRqLMNYNgUebnm52GJ9JZL7pEdBisVucJeZe22uzmiyXiR2EHtcfWBy",
  "key27": "65iy6gpVVgyVPfWGmPXG14BgPkwaqn4gNbAyTbN4bSMmEZpLcR4N3qQmHpQ8zV89Fh8gF6b3C8PUiFqBFfB4azVR",
  "key28": "4V2an1cU1gZ9c3YVnzgCUjBfY7bPqPTTWKHBhkvzyogxBcpCVSaW5W7axDVjs75BnewritKSfNqJNxuE4VwKf9BQ",
  "key29": "2ai3uaPHppir7yKvnK5hz4gpcYTpbkzhTLtg8mNwAsnrxDJ6ciY3JZg5NF9e23KnuwnHkV2umUm5YzHK5CqkDudM"
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
