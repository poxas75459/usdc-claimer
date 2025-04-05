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
    "3S58DGA4G2CgTHTrSz8hyxobgKbEjUyVyFH2QAnrcGo9njjUR5yimZiiNrSETCCLBMbddws4jutgHYfd7obqGwit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uPB81qUTDbW73jZhr2hbFqp4NhnDH6i1QdabDAsWQoCKmJfx3UCKsnBitVSVrZp8p9GMD3PSQGmYJHCHW7KuCmX",
  "key1": "21cxkXEw4Tm8qFwshVDftfq1Q2nYQNYG3w1witaL1e6keywhDk9GQBgBXMeJwJPtTYBtuS7RfT354pd4bWawKXAk",
  "key2": "3rFCApgs81Vp5P9SUP4bhQ8bVfhviSCPfFeJw8PeAdHs9nTo56GcZA2QhQqV3vtiVqoXLRRN5aEfTyxk1SZJK5Ux",
  "key3": "5nRXHYJgJiBdczPMfHde7JyRz5c2ijPtxcRT3UJ7YAHFpHDNadcWhcYayeWSuGbvs7NfkjGbB635qFLeP6GbdmjQ",
  "key4": "5iDJy4y2qf44Kiueo3as1iGMdWFZQNevq5Up3WKuj3AhWivjKT9M3Yic7JAvQzLF5KSqazRGkkdNc9udDKBEJR41",
  "key5": "2qFFZXcaqAy7cwJLvxKDgVzdckQExBPByQiQG4a2Ah4Luu5gumH61GyMcxQfeAQLyeCKzEbxrN9PrpCRiTGxDg6x",
  "key6": "DywH3CYSJDYFht4Vn5CB3eBVq77tR9C93srS6cswq3UTYijnXkF5A1DUmFoUkWH8sRDkM86SXFjtS6Z3jkMj3xf",
  "key7": "5EsaD9dQibiW75kGgkba8zqrC6pQSMv1g7UYQByBYGiGq1vx8omg4dSXiktv2yAfgqT3yKKjt7Qpv36Q9VBSZpfi",
  "key8": "3ieiwSeYQAEQBiPC8zHLZb46Y9CioQknf5ZxhwzmZ3hnMdC3KY7Xmcg98irR8dMWnKU7oZyJ3TvEaCrnX18CAw3f",
  "key9": "4Ywv31F7tavqiXd8RiEMVhUQdNzhE7tSyhd2r87EcnnnqBFN7doWX8R7M7NBJscbCWpSfyMQ2i9oJeafEnymf8w9",
  "key10": "53Y2zzkyAKEM2i1E4FyP1HpBnNEjMabndGqNP4qNir8vRNAyz5Yeef79XgEz6RFwRQNytVayJ8DTMZGrL1oqTpMZ",
  "key11": "67c4fLTuTdsoujACG9dhqrK4BC6LZ2QJBAkMoRGY2JLmUVKiKaW18JTibKXkS75YqTsqa4g261YpjYJWcL1wjMx6",
  "key12": "4RCMbF4vLttEXnSYHTSSBuoHs55msPmWj6LB5dV37wePUfXLdQttFMrWjTHSamQhCWzrYQkXeYK1HHZb6n8cXNcG",
  "key13": "2XrxD6aGwXfxnnE3rVim9dXoHG3qzDC528hB7Fd1bVJWq8T1yfsQLJ31pK9CE6f28EZYh2YuMKdeMcfuFjCqzCQp",
  "key14": "4uwkseEmM7NgtiVGz1Jx4N7kEcrgZrK4SAfiVhNpCxub55htE8R63eC8bR7tmfjmZ6sA22dsQx1UmhagKdwsuEUN",
  "key15": "4YHGbr8A1vQ6Ass86rVNS9cGNDDERrgnTydiodGZs3U8eQWrAw3k2YDvgM8TvdcH4XTZmZPRJRK1U4GuebCMe5qe",
  "key16": "2EVVEWqLxi4s73eswbgZPyn7KnkvJtJhesRgJPWAqf9CMvjTeqHofWxV8f2HGW8QNz55FA4NrhRgMwJjDTSZdLam",
  "key17": "9R1gvhmLNKxBiUZZtMEVKBEkq216Lsh7PAsVa47Nu4hPa4xYLBGKrMiLXWk8ndWRY4qJAPRC3yzxxFtSgqZMPs9",
  "key18": "3GKEzzBCXYkXrZAHgGc56eDp821Q717mhYQLyDZPhYAxtnW1PLA3e9N6NyHYvXhGYVgpBLnfxB5eXVgPJXou8uL3",
  "key19": "3dCBcSkTPF92h9dZo8daMwKMkzQZL96ZNu5dVyBYfc3Vo4jhoun6y65udnAoiL8tFLQNXfnPkBLmRxT4HsRCBu8s",
  "key20": "4SnMoFp3VSibXYmitDCqKqnqGqsqnNu1YdaEGm2dASx4pgy1qAFT2PwKUPZgRxi4sTDPukQYJ7s5USzVTQTfvZHu",
  "key21": "fA3k9KGCGwrqoUBJQSZFVrvx7DddcboVetmLq9SrvNiDgAbQSpgWTkEvipGxJn2gj9Tbjmr6esKgvF9GMUTVUdh",
  "key22": "5AqLRD7AFfEm9YjvbF7sTxrnB3UqWrcqXEA4LoLiAi4LLeFyPQcMpbJ3sovxiz6Nqc2pDYDaTZxfovtQfPAJhXPN",
  "key23": "2pWtfjgdN9Uj3V5vrXQyVPJB3bBceBHrVqzaSkDLJhHayybsqAp85FMaSDcc1cy689j4tMYufwzDJ8Fwp4pjGc4E",
  "key24": "jNwsfFCC1emynhUqJ8gbNYGJn8N51wgGU7CYhLQVEoih8Hvo3uHSx1wZNc79gv1wR4KeGcSey1MaSk3qZa8mx9g",
  "key25": "5qsmuKcwdC8pP1Rek9s848ttpTo1e89ykjPXiAdeisvLEwP2pkscWWCmuiGZFM2GWSbFoksg8oDVTq6ojPcXPAc3",
  "key26": "25GMa1oJNebuKFZNG8h144Ji56SydzZaFwUnmoaPa2GgC6M2fXJWxZXo1emFazyE2UG46dEUguBgQ3Ub8dqoHzmc",
  "key27": "37D9YYF8J6cCv9Kkkh9F1PAG59LKAmb5AGATwHLbv5JuQ7is6ZbrN2TeSrMxoFQN7MYUvco5iRAoPNXfGuQL61Gt",
  "key28": "4HmAHwPeCiXtqxdGpkBGDenf9ri2A5UGTWCDgxmNJBBpzWMQmoLghJLZvj1DXGNp3PcfSrUcmmvhpChLDFSs4fJN",
  "key29": "93yjUemQLqsBW38wLCvW3G6Evkt9QLVs1gKJRtVMVoSfnnHTUZwoPpKwYELDuBCVUW9SNQ4aB7xiuygpC7nRE5Z",
  "key30": "phWm2CXHyXcd5498wKZVPaHMDJCcsMeAeEhy7wN4pYVcPzJCV3c4Aupm8aVSqkMfeHg1VXzuj6nT9x5M9jcYNg6",
  "key31": "2dqr5ouMcN6CeQJSiwT9B2bzhjxSpbV9fo1DBnV7P29io6hL5ToPf33cKrddtwwe7VoCUWRMcVWhY3CjXpJBvQ9o"
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
