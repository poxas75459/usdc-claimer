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
    "2z69wHFMsdHMDF8i6YU4tUt4Nf5BLPxSxNnAB4oScNQrXwUazxWmYT9s6stUzDyEeeg5fCu33RakbiJrJGoV45av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53BAJMwNQuNYWSC7Rj2UuG7SmEoXhDV1j8agWRVNtP7A1j9ZDct8QzTnFBRVtw6B8wc8S3Cgnq8H7Q5qhfHctWQD",
  "key1": "2s6RYJH1vLmn48bRgY2GH7oxW5LJYmJXfgC3eYtnLQ8Be26XHwqxnaKMfvQgxG9QL97La42tqzb67NisdnyB2r3J",
  "key2": "59wrNgd3ySxzmcsZVtY74KBFqUz6W7eMXxXUf2o3pVXD9CmbAg3VKaAxfzagZLon3vWVZPcSxRZgEgPa5X9z12Jj",
  "key3": "2nMr6QH93XyvmRqkuZqES3JmQaA4PbT7xDEUgWD2SRSGrqbtH7RttZxskfCZtRWbCptZ18rhKyAUfSTUMfT5CQ9B",
  "key4": "4Cm9EUadFEHNyPDGk6LFcp4wLGxSvhhhNWs2bbVQ1VmMw7b1WcxkqrJ63xFsUya3GTwV6Q8fhpBgDyqGr9SgfqTs",
  "key5": "2npbkWvTQ9zBa7nMucKP5Hn3jCCNUpHi38WAAaWgD9FQQX6qEyipFtcp6iQ5JHTrQyM4FVVMyqi8ztYUKqZsY3vK",
  "key6": "5DWC3Xk6Kb66KhAHxjFeqXAomVKSduXnux52R4opY7gt95jhqebmxw4rvyusAUGJdsbf8sSz8KNpNoa5cx17G9Kq",
  "key7": "5EZFbLzVMqpRpZa2nGPe4forM234YD1GJXpXK5me9i2Guff1nPLEG7ve8dSeryU5mxKjMfgz2rZF4LDX4zxxdcwy",
  "key8": "joTjvBWAn8n9xfaU1AVAz2oT5U1F5zPjiGPmRGrLM41s5iJHjZxJPfS1VbcJ6ykiekRm3ug28J9PevUfaSDiU2P",
  "key9": "Wj5WLLJxGrExau3BVDkXUEVXPT7npPj3yPNPFMYsAoeWuFJoFMN9X4bu7epsvN2vTcaazqYVwMHTEQzTnK86Fia",
  "key10": "471pbucEUS122me3m8qtgpZfqh4SBiHUZavLcvy7T26oA42qQ8gUhUhCoC9E7jDWcy78ZeNUusXXZkx1yXToQaBY",
  "key11": "5WKFo3N1BpMia1HLfM7Rca5mtGfeMECmMSGud15EtLXBSPj9F6ctdpa9Xg7FQVet1bvCxnRKbPisHqQkkUBiZtEg",
  "key12": "r24DznaUyguaK8rPj6KmZT39kT5auJ4Jb6StY8KomLuV7b7qKFseB5MCLkRE2CZ8heU7f9QvUJNsSzGXwxA3MBi",
  "key13": "GXFboaSBQmmmPtGyqfLxkMucj1odnURqeMFS2rZC5LtF293j8HZx41LEC5cmQ5rPXejShYRgVoawCycDdf3Dh83",
  "key14": "PkxQCM9TqqTcGCEr6HYYX2CdFHXakygmuHG6RfhxDyChkrCpyB2vsXHUphWq28czgYTD7uiUQhXfapEnN6UaBZc",
  "key15": "3rFPsdf1rQ3fUDbEQskAY23gwk1biXfepW19QDPJ3nuRMMW4u3MaK2uBCCAhaQg8X7MLWBtWvgr4QAMeBwncbMeW",
  "key16": "UHctB8nM4RfiyhbFVhJcEooNZmpLi2fFRVoo9LjtwmXywuiRekBihWmKV8gGF1vsiuQJ3FP897GdcJfTh13Jmjj",
  "key17": "5L9sgg4EUzuaQdXPM68CtH67D3rEEbsS5RMTtwiKxZPHhfhHMGZzLdjVJfsApVqHXKraqaJFtPfPZyyHyQJDGDYZ",
  "key18": "3i7YS7XAm53Woamzd1zQRxyMhXVmQJR6DhwbMUgxLewVEjN8pCtyCnvT2FYLmTwj4j93Y6shnRvsMhXmWoxdGQJb",
  "key19": "3nYGvvV3MxUoxjdPjd3wCSpfHiTTRvVs5QerGvb2pCKQqG4SRgPhEdpzC8mvBgzBEFNv2sVXdAM6Z4m4oB3XTsxF",
  "key20": "2chaFnpt9PdVGknPWuY1MRHcLADGgUiZG11Qmocx8NpfTXEuazoBwK1N86g8c94iNE82QkcdsqRY4WpLyA4UxiVF",
  "key21": "4ke78ZyYuCDET1L1baPpc7ovN9FvQtXwB4Tmagb9fQdsHr6YdixtRVkFX8GdmKEe27rZhk1U9iKuwhk4CU3sHkWS",
  "key22": "3icG9p9sZZQkWKuik2fJ8LKJWkkPFuLrubQcTgqcHEW9erEFvcpqvMh8DVAhqMKy8UeJgsYtquo72C5V1DP2hKPY",
  "key23": "38Q75vUyiXkFBgQ1XhZnGkg6ATqsxn4CikCgdbJyBUcpqSUTzEYQzqfDhvMAH5DQmiaNqczqM3VtyPakohC3fQRx",
  "key24": "5JrP7vZVvPP8g3T6ZgsxtikS2UWhykpt2e8Xz5eCUJQwPzj24d6cqhYsEay5mBsEBZyg3huxxancQkfR4GJWDh7a",
  "key25": "5goYkn7e37imBB66eXZTG4zczqmS6bogLZG7jnUhcmFPy2MaXVFmVnFxqPQgbk6tTpnTXSPqgUcQBJzZjoLZPxR",
  "key26": "4nxGxPaP8spo8z31XtFDu3UgCQNfRji3SRhoYJ7Y8FApZ65pPCtLzv81WF7VuwmbUyQ9Sn387TMWPqsFdMedBwG5"
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
