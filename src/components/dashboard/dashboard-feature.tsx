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
    "HUAc6wDJS1UAgMD4VKfUhSyqrPUuiNkJj2QvqJvJ8cDjAK59UWiQmm7PNjCW1zuTxwz5nRJ1iBtLc1a5ig5JTPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ckayy76UdNZHA4VZxHrnbxesybHJqQVhPQN7qogyMNG6yq1trb4QVPxUn6d5U7yKPyoDzxqVupwYjLF1qHwbCPA",
  "key1": "24rc2aXHavWuBfMxMXdjFePsKoBRRnLxSDFDfAGdq1ZHEVGDstF25mP9CH1yju4eYQYFQnXcZM6bgeRbmPDYVC9t",
  "key2": "HPKjH25u6AWjSbvDJnUUHG92BWWPd6VHaeiySz9Kbbt7xYxQsDCjfWf9m9CFgvPPKjWGZbxDp3N7jmKpYZHVRhr",
  "key3": "LHwdyeBHhTVK7LgW72T8xSEtQNkZS6Jx8TXR3UanxJnxTQDacojmzTeEbtZU9Y3r6icZkp1C7A47rMyyk6MLYis",
  "key4": "3MPew7nN8Cr8MpzfbLX7MA2JY9fJP82zeugkPvUcRv6qz4dr36xgBKwpCfQ6TFdeVM4F8ZaC5kRwt45vXDxNd37E",
  "key5": "2KaYa1ofdterdcTg9mUgyAWg6jQ7FNZgY4gS5LNdx58UDC33vjDu58ECpWCaEXJhzLLuobq1cP1SRibtSbnahF7G",
  "key6": "5R7BJRajn2nTbesyS1ZNyAnKwbthw1UJy3XFWw1HNEekfkBCbg9wqZTxFXs7NP99QdYW4Bnv92UnzBvvbTNppShW",
  "key7": "4fXhA94yc2L5HRAmUmUSVf6FKNiN5ufNoAmbfHz9ctXctNa4nh4jbzgHVTEtZ8yaQWE3PcPcVqSJvJDKWuieVhDy",
  "key8": "36WZj1xopuRGr52tHjRfvnZpYCzpNXjVJSkCjNJukLT7Mu1ZG2iukEA3ZKLJyEfm2p8p5jvzbHcsDUvKo1TAEQRA",
  "key9": "5q5mKUz4SmcWzidpXrqqxPYDcjfWsQNAqPxfTMwpyn8CFp22hPuQEARpwzUXMA1YjpyGrwHS5V1uwVVTFquuf3xK",
  "key10": "21rrK6n4j9yLVXayn3WX4oFNjp7cnUGftv1q3jA6YFP8TRxGyNBC4AvnMmNzeyX237hGMffxQLRqgaj2iouXZrc4",
  "key11": "5ZAcWAGCnT4XLz6JZtJwVUBnkUPn37GoQaCpFHuyruUYYNi2Yx9cuwXbYdgLTQkLcHzkjKK4dbgp1mrqQYfEVNDu",
  "key12": "EHkcg22ujXTciS34PfXLKYpjRJxv42FGSYJw3Qsh9PHCrzGL6MgvjTU6xqig2UFhuceuDKHMumQzQ2P6TsbqAiX",
  "key13": "5crquwB7wBUZxTx1sgcMmHALHQVauFjzrfYBFyxzDgx8ZCu8w6JCUiKZcr5mmThummZBs9SESj5kbybvvcfsXtbF",
  "key14": "XjexqmKMDk31m1Wg7wPyGPob4V4RhkJS7FtTAodvRjb8scjGog6B63WKP1ETcYEpyNJmep6KejVii1xnw1hTrvY",
  "key15": "3TNnCRhiSFkurX2uvKG5sWDXYBtmWrA61WyJgFVCGo8ZVoQ3xMQKaH15L1j7m5W9wLJMZvUecTVPka8iJs9FCSmX",
  "key16": "4ASVv1tmPtf7qDwXRPRrTn6oGVDoPK9Vmn7yoSsqQDJ7SEEeq34mHfMGR8GETSHSP397Lha4Stx8NTtepsP7dJZs",
  "key17": "5sjVB4RfqkiifZpVs2Z3VAopwp6ttnpRbGqoWgEuZ2RtcHRzLdeG66q6F1NQjd7sN78YNjTm9hoyrUypzVi6eg2A",
  "key18": "3NxKQTf1NFrBhVc6Je4NbftJ8apAbuHz34eUqSb2MeBUYqcBfXxV3rGX8a7Xdkh1HQtDDVwQ1cmBJjhX8x9mEJka",
  "key19": "3jfYqSJeK4xMa3iqeNjFX2bPVwKyhnY6J597tXZhcotCMhmptWK2AyyfcgsDAYnNWmnDfEwnjBMiQ5d7vjyLasGY",
  "key20": "5navHpRqJtya5TAtNEYB2t9rQ8jSeh13Um93c8KGHxBBVDetp1YQLGui5qKf3W66MDmQkwsxvaaiUz1ZjK1RZkxP",
  "key21": "3ejywDYtTTrVB69jN55DMHTr3fMVmt8Y1FvFaDqzDdLWBYeWNTLWxwAd4iyZdPZVmYGLAXkozb5z2Fb3mPLZmbHZ",
  "key22": "3kgXHhJsj16fFSgsoUf6zjeNeMetMszXSQTPNxLQ2aLZMnpVrj7xK3Rz21Vuvuq6cUhpsMHwHHbdsMwQ9u8j8v6E",
  "key23": "3Utt6nP2NvYMtPn3cF3ikYeXx1gH4WdwakDfVz2gMCHiW7oNEbbfWw4dxCQdcbuemB1QJN9GLwWCgUzVbBQh7Gtm",
  "key24": "3wLhikyvapLFYjBG11YmfJyVBVsvdu8pkbNSimgiM8d6ikDW5285yo7FbfnVD4zyzrhcE8RjsMCN8WCmW8w1XMmE",
  "key25": "2XiNVhWKWXxozxguRvpuGcqDFYuzCkqJ1TiHKxxnmQnyEMTVrVoK8KqjsVjzdtjNxSK2fSBLJwyQ8sZ1UgirD9Yk",
  "key26": "2yt9CyQ7LLmia5JrrRLX6k9iNREuTWc8BTaXRG73nCgHDBNdoyJSG1RG6ncAihkSyAfiLWoMX5SEHvjGfoXNB9FL",
  "key27": "2iMt1rPh1sLLXJtxJqwJgZB6VX4ub6VCrBA5eQni1gZxSvEZ1UT4XqokGnXvT3MKjeGbGnrX7Y3eQq7UCsBBUePr",
  "key28": "3f7a4f8ELsJdrGsaNYm7QgcpNK1GLSY64NGaY6JMu3zUbypBxuycEBci7MXyGMBWiKA8V3bX4g1jnA4ZD9qbsUuW"
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
