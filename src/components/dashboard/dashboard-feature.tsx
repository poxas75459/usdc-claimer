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
    "3XqdRnD1kNqNqkASXXW9A6q4xvTdZqEKSxs5oLmnFfZJArcwYVfTZA5WfrA11365VZUXMpzPLXJWWrkgfDc2Sx6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PwbBNnUJdpkc2haTxZXsWYn7oHLhq9hXCeWBRRZuLHQQDtynw2ixGP5wBNW4xJdgX4wB4fxdmLytazUvpEQSyof",
  "key1": "4yoZ3KCsHCeabQ9hp2THRQUi911Fe4S1z5tqJQkc1izRZAB39UFuH2ADgVbeQjGe9otpkX7sArDZRwXaw5mnc4dh",
  "key2": "ohDno4rNS83V9GsedSGTzw1muwjzJB59LGgbegiYC4MN2hYxo7nCXCgtwnbG9H63fFvJkbhvvn5c5uEgMaru9fD",
  "key3": "3yNbDZfr5XHEnDpqHqFALqCGfN834ZwGVPiRpmREGvBmZJY1xm9rpSzQjGnaVQdPLi6smo43semSG8tdEQ1rmYqj",
  "key4": "2Q4coLBUFTtDbH4uDDvkUhjPXLBhdpuQc8JxueXuasbbHdhVoRdyb5KqGXJi4X124RPBQfXiw3cM4m2EJBQWuZaQ",
  "key5": "3gfPKKZupMrTVdCQkojVKSQrMfcziNzBpfZz4MfL5BKUB1GkZwHJhUT1E3d3QwoTs1HWrriGjL9iSEQ8Q6H6iZeV",
  "key6": "3BQVdJswAeJJ59ifzqciRbzEAfrtSL8kEGqFVKpE8viDaYcv3vFwkpMP5Ee9GfRYoFBipRru4is7ad3AiyM61GqZ",
  "key7": "4YUfcKmXPiKnYRkJ7rYcufLSnf47bUJSgopzgcXWPq2hoHMMo3Akrs48EBa2qeLQh35F5EjFf1srMHtJsT2HbVYm",
  "key8": "4Yj1W1qHtXqN8wsHvvHxLhza96v7uMaZNxY7YzMqGP5JuHjFsYo7NzNs6Ajuvmz8tjNXmzG8qdgmmYCw919abvk2",
  "key9": "4Au3eDPxHTH4pLfWm47ATZjnqahA2wRxnZeCvWtEGSire7tgS5osnop2yyoQShaksy2HfDf8oSgjjMSD1Q1XU8TL",
  "key10": "W1o6Sqpc7kwmK6bUAVFTCUrXuGfGMzQg1YYFM5oZQXFjd6Ng685cYzKJSBtkqfmKHCSu99PgZ9CtsPF2mZcLJhq",
  "key11": "5fn5UJpgJpt5kWi4DGrXSQFdZPY8P83CjDapp7B811QMWtUpW7VqsLEpcQ8MqprDHLVKxDQoRsGMUCX5WYnxKa1k",
  "key12": "3ri5FNajgivWXd5kVLqNJWtdYiAPGhTK3aGxgnpmAsvyxx1wuTSXS1tUKVF1jathV4b42PtQ8KVLTZastbJvBXAL",
  "key13": "4Lj1K38V5BSvzJgEc7p4wufdpejEMA2A3iaJa9oCCDhucbVNVgqvVa8w8ZBj7KESfb1AiVuFAhBdGS2MyyQhSwXQ",
  "key14": "3PRPQMk63sczWVq4hLhRAjz2iv7q5BpQd5QfocUinCmhyYQaxKMdHdiRFZoVrkNTnFRWhAJ7wGYBaD3CPqtGZXYe",
  "key15": "azYMXkSThhJ4D9DEYHgrHxrgd7grJGqfBzw3YndUDu4WxwkBGfB3vg2pbK9ran31YCmEoT7Q2kEnaJKHSTXQcxQ",
  "key16": "5WJZn6HWUYQxwSYeWjkSnYsvhGhmQjuyPgz7Q9PyqkLefGEKLu1LRm1QvgFPZDfiom7MdMskhf8q9TGNRf3z7Qcp",
  "key17": "4LNoeBUiAyodxFwFH4WC8VipY1tFBYqiRdej3R7cPyQvYzvGKvrrqS4LbJiEsyy93APnLY1i4wkHnzVDrM8Dk6aP",
  "key18": "31wgA9ti4g5FKH3e3ApABuwBTEpyP7NGsekvTqDCLzkd4MW7b8aAmg5mrSfJjinnz2aXJ9N4Puv1VHaTeGFYbkD8",
  "key19": "KEEWvd8XPMvSkRJFhcABb5MyKrbgXhdA38f2RntBC1XMnahQ4LdHJZsA3Nd3mqQHpmHUAjMvvHaRLWPkpCfeWMU",
  "key20": "2dQoc129rQRQuQ54gKGt9f7VJJguosRGUL4qRmgcnsfXEuhwQ6WJ5A4c1jqcNBXBpqq4yMYy4hSNWHiWp5thqJnJ",
  "key21": "66zKD9NDGzUJi7uuQAmiXLNXhFhXCcqZog6qohLn89ZnuG5oDzHzVbmzycDCL9FWXP5vHJAMTimP4s32Xdq78rLb",
  "key22": "3YkxfMMJfgEGfGVqM3jwoY1Xiv513MMWCF8HegfYwgtZ4zdeW3vGiQ9JhN1t2WSJTc3ccZ5sR7eDjw71rpuJrjLy",
  "key23": "SQffYD6p9xKh1TofA2Qxxpmg8wMQqRrjWHcDNevtsC4yw53S82UmZ3cpaTaFXXe1HXx4Xdszg9YHke1r5oypn3g",
  "key24": "3YXbWcHNVpH6jvX7MY6qoe8kT2utEeEQRLJiBSAqym2P79NGSrNpdiQZaAFKk4gA23m3thp1uNfqdTeNrnAHEu4p",
  "key25": "qrFT6zspqWFo2Ke6uZoH6xYV1uuakb2iHHqYPofVo54DSmcHraSXU2NLQ8pMQEZmtbRncxGEPqEwNuGjXqRh9Ku",
  "key26": "2P3hgD1JUTiJoJjFbFvmkYUVHcui4AKD7PzZxGjpwxkDEt9AfhW49iWhaL6kQWVBcfyAoxkxC6iY6pXEtgnEiMys",
  "key27": "2GYotfy2DM55vBsxXkZrqZNxoXBFxuZK3CYugUFdyMcJhpcKEGwACiAe836JhRhqf3EftQWp2YBR74UjjZ3FwvQz",
  "key28": "3Xg3m655eUDxgM4e9ygXia4A26BkKCijm8Wp8zDctns1BrC3GdNevmSPsNtRgTzjnQzXrAzB2BHVZ1ke1xyt7HW",
  "key29": "2gNHTFgAzXisGRVD5Wdy2SkdCCNWQn7JehnMYZpLySZUjQscvvTLRa97hk77a4dJEMzMhoZkAVGGHpdjmBfA3UKT",
  "key30": "3sqpdsfBKYAGLGtLSHgxuKF491Np9nSJ1KZrCpzmDB2NsC4kSbYq3khbXoNaaZDdQWgyUb3reB3jbZta8ZcBdxtR",
  "key31": "5eqKGS699jpY9Srd7ZAyF7pzLBiNYU78dud1UfxrhFXEWYdgBQnZx9dd3gqonLUn2WkwbodF6wX4nYSht6UwUCof",
  "key32": "28EugU1TqnFwYfzRjqtzNdqAqoJU8x5n5PiAMxDbnGmxWhpMdSnQaEKNnpx32phqppEuyGh5uCbnhG3kYRfacdxw",
  "key33": "fK3kJJBdNGY5xhjzMfNdCYFwP6sg2PFWKqsEGEe5iAVwE8V2U1wv3XdYLTJvkcmpUHMWZy1eQW3dq1YvJuCzvLJ"
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
