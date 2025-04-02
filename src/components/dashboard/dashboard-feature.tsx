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
    "3AUMxv3qKfjHa8bdgQateP1pU8xv4tvSyYqKi4vRdkZHRMnDrvdqG8WY5NTaWiCqc5xYFYnTmzezvjoCSW72JVoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zq1obaG6yrhzvAFBkv98LUzPy6mECnYxMxgVXUDXSPVHwpVg2kB1Xsu6qGy4DMg8xzUz4MRfH5oz5emXP1z5e7L",
  "key1": "oSFsXUBbBZAf9BraE9pxye5JuPk8uFYpT4DEAE353gYZKnYgbjbvJ3uck388i4s1AZLLZi7tp2iXggDxXrRxpFc",
  "key2": "5qgtW3hWfgft5eEJkKmh7GrCvcGwBw6WcH1krCKFqTQ4NdkGoKrhDAHyAGZr4E8Lh1rLH37E2DZUzwcCBKhsJDZM",
  "key3": "3uL57ppiMGinSLUVuhwu8nGfkP8PpVja8KP1r7oCEP2asN3jAauvejqLEnstsxQRAmLLu8DpchxnQapSxmX84bJ6",
  "key4": "5fHbEUtmxGNLcVDdEGPWxEZzLviijW6fSTq1gd9xvKfBdUqnhoz1tsdyTUifJajYSGsyWXXmYQWLSR62697Bbxzg",
  "key5": "5bkW9YsnATpneZEAJ6uccHatnohemyaJVRtuKS5ng54zXegYJ8pKpqqQVzRdJBZDu8vMTc5MzfUoVKi69BitJF8d",
  "key6": "cAoe7hcArX5diQCNt7JrctaPuiC7cihCibWwuaPNBbSQbYWxVkKFv3qACz5UWqT9vi3NAcc4aKgsn54ahUgjKC4",
  "key7": "5jc93PRj7D9LnJ36DwSUt6ZfYg8SvfXUXarVXEgx6wVeq14ZffZNTtWnuQgbQ44auZrq6AtoXom6fXsnDdVbaFKu",
  "key8": "5sbzkLXMCkZELZmzeEFKXGaT4EgfEBcTcSuSAjoeUjbjzJhXQ6K3hp5FjonVZ4Bs9sv69oA49U9Vn4uAhJLC1Q8t",
  "key9": "5BZk8dTSbr9uHpeENqCAzAVAEzAj4QhnRCDkTA3C5ntivDQZYtG1YShN5Y7351oYahZKepGbS56ukEDJVoMMYAuE",
  "key10": "sSWoYhznZXaTmsfG1voNrecU7qLdzWTvuZkb42uDSZ5mMLft264u1sqgeMPLHaZQ8RgZMePDKes6ByXa19wYhtX",
  "key11": "2uMuBVBPQ8jHHMunxw7FLzBbm6ZM9ViXjmXQYzrgQiTGJ1LMDmBS9Za98yWus3byHX5W3z8UQ8VgZoHVx1nUhz3u",
  "key12": "59VDkHDNZexVLv8wU5odNe6X7L1EuHgEQ3rFk4c5jfThXYgm9VE3V1nsB48q6DVg9pL6bUnnMB4hzjaG6U3VnYVp",
  "key13": "5VTx6p4SocFso4NmVCDsyfShDkMy1zjU6otwi5giw6zq6t198HYxPvwck5FP826x4qJ5hhAjLRqLjTLaEygDZhY4",
  "key14": "3Lw2zCQgSbrLRMxZZxwJ9Fc5GDYubMtcWTcP2LPzNmsBjuuySxkUbwkJRrrqg1dAYvRoSq4RbSjUSrYByUgZKAuy",
  "key15": "5cvHvAB41aZwGdjytrMEsbpv9N1LHLE8EEp9wrr4SncKL6J71Fxyd6on1JPgMi8ezBt6KiUdhqBpe6SLJ34bNKQe",
  "key16": "3rTSuA5AEsKJYzAyGUbiXB8RMAEeiyX1NyjdNEpwS7jHTnUjBxG1bmGdjiFX1QsSeRhtMdxX1MBGrEaDmU5BVD3A",
  "key17": "3WuA7cMrUiiR22qS7qu9taSww1hxobuyyUVfxxgNARxXWWQEbkH251TUb8umYw4ZPHNKnxh6LtbbWJ1Gu7XwAMWt",
  "key18": "4hiJoXM6VSEPrDYFXpDDntNZuEoEyXswzGDjQ3QW9cQnjpfRmBtn5EbXdxGkhenJQxgozjuTzpJBVg4t2pcag9nZ",
  "key19": "4Kfwodew7Nb3XPitUpNuYtWPH7TKcyrJnxLc4j8hkyD79SXAX3SSvcXXAGDwwNDyKmQYpUeAiMy6bNMjqLfLzAaa",
  "key20": "2h6Xj5sy7nsopcxnK7Tt5QVxyF3HsBQeEtnHfSQADgtfemw9w8yebYQx9prt2HTgcfnVPQacWkQtGMnybyCgS8Yj",
  "key21": "3z1wkNQTLwXJZYv6ayqgqnXbNVn26Q8s18d1bxjKVjTaQ5QGfx2vTT5mQyvZJHJjMjuQRr6xTzan6VbRdW2HJyJR",
  "key22": "4XjrYNwQY32mqJFDQYev1HmQVvZv9wtNbGzsDtJNoTc7x7zFbfDcMi8TgTGXzeQkEKYB1sFAbrM4yFqAvfQEpzzs",
  "key23": "4v63Z5ThNzW2M4GtxubcPmWrCTForB1ecDRpAh6BwkZw8N6oAmh1GhL49j6dfHZFak8AF1S822fQ7Ub1LQVVN4LG",
  "key24": "49bZgte142zYNHhN8LwGqSYVLGkRU8ZCRn1BZTXp5kndv8uxk3CwuoHHdXN3PkvNbZtT6pf8VrLVN2MjJFgMwkeM",
  "key25": "4jjXom4zBe7HgVf6AG9AZWXekbbG6cxRfdqPeWGzThNWbRDWtd7hWMpfzenRwdWbR2813oEu45j6eT8sw79ydX3e",
  "key26": "47rLCGqLXTneEyyYpK1UtwdVg2uKkLMHLp6VNqjoHhnBhN61fefABbVHyfCCSrCD3TWFPJ6gi47urRcBCQxyKr2o",
  "key27": "1BDKkcwzgyNMFZa5yhwagjEmbzMPNhjcjjjcFtaeLZXLTX2CRAp3eVqA7AD6QnTB3cvtvju2jyEcEKrfkS7qGNR",
  "key28": "4kSgmfGdppXiqQ5EPmRjKSeRmMTXPXhfHGmQE9m1DNKqE3B53vYGPS9ePXdCiRkigeNyXMYqANb2A6fyR1m8TjN7",
  "key29": "63Vv6hTWw7dvhrRV2rTwDZP1kqEARnCE4nS6BzFWtGwCLiX8B6HN6yvgKzgNi3rxnwHx6CLPJsuNbyd6ayVUZmts",
  "key30": "32yTVpgA35iDEfism1j9hafjg8X7us7euWcYYxGfxZXEWvPjh31uV6H9jvUXQCEi98tSrKZ5vwdioPLBE6ruE8t2",
  "key31": "2VKBU23PHYdQJAwhazXGFkn2LEhZKGMSWcRjLMNzPCYL3mfX1Ytn6WX3yXfjZxb1mKjZvetHpnYjyvKwNayUB5ba",
  "key32": "pgyhE9zqXrT2A8gZRGfiHdK64FfuWw4ZJD8wacpkEtPyDFGMSJsw1r6o7YJLhFia5XQt7UdduAVQHpdATQ17sMx",
  "key33": "4XvX5ADsXr7HfLLpDecRGCPNEDGQ7c3XRZMUcTpv98Lq1N7hQgDsGuGdSoUL5Rt4k9YkFyQnPAFvJoFgjh5zaYG6",
  "key34": "3WiTSCAqAWu2qB7BR1D1H9Tpau9Rm9CwjRqW1JnfEPXj1GYozqo2De4WZ6QXVGyuKtrNKB59JREaN8ciz6cFMgjb",
  "key35": "5zqvmvcS3eE241EVmKzDFC1XQfgQuMrV4DhCEKRa5L5Uv3ucHmzk2Wb8Gjbq9igp1ayPmi8Z4j2jGcU1DQTGuWRf",
  "key36": "5X8noH5krCoJ76zkvu6mCGAFW4nQmMNDaYY1CH1QuxpUXE2Jt5uWcu9CsXd6422dvFxRxcbKAwSGCutqQSkkdVzH",
  "key37": "241Tc9MmUPumQHdN7h88M95Hz6yU8gTqruQbTAsLUxM4mcQuzgHJBa7ugCu7Xt89A6k2gNK8ah3kanfymyGvdwSu"
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
