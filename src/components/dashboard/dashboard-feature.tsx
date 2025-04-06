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
    "4okStyfZVUf5RkYMfpCPoqtwHniYVdoGDepTnydYyscSeb8xQ69YpaoN6Ua6ZjSasGDJU5Aqr7ffmg6gaqQDjbMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bJv9v1qksAzT2Fyh43zTjjQ4C3afW4RngtmvHGMNCgz4pC8whsJSEAAbJtoRU7CzyKZg51gUMveqFCY37T9745v",
  "key1": "CXnba1r9Y6jjN3M4QfU5YBW68o1soDMPADe1JBiT6s6HQ2Hctqh6cuFCR28hhqf4WjGPqyKwXhFoBhV4Ztm89cd",
  "key2": "3mpif9xXuxRfJLHsmdZvX8mw1NN7UDTUWLivkZNLNzxBmR1wnuU4Cw4C3CKut9jCSjMEhm7XjaH7GPwwyxuoqPw7",
  "key3": "57X9nWV2Cquqd33c5gcsgPK5SjMXVpaRh5fyB1u4xRxAM9zXrJBC86phmgJbi37ADRNEiKVYgN9YuFL5uoQAua4G",
  "key4": "2fdwhHguiSYgxaD9Cis74LtyuKybti99NCSvPxi7XqdK6AQKTHKkSHVQoxcuYs5wa9HMwWbyUcKxwQLjJs1y8cqr",
  "key5": "57iMwrMjjvVxP6SXUCWwAPjoXXHUqXpM7WMYWoVjpTD31c5EWrdWpivTVVL9BdwDyQj5h56AH2BDjce4CmdQY16Q",
  "key6": "472gdhQNpSpvxwcghYQQtt6LbGTnCedryJdDBUJvT6khi9aRz7LC268orMSmgE9fFW4fmTkLRM9VjinVNf4G24bH",
  "key7": "5L4QTT7aBQxgSpWfwT45C8HBtJpd5aBGzn5wCXTPfpbeQkX7tDrv6TK8Fpy4pwqHYdnHrER8qRsY8oGQYBQp3VMy",
  "key8": "7mb7nYHRkAu8yywmTQkdRM4p2YVs7yNG9bkTADVX9pDRbMa5UQra2jAVcuCjCUhvaHRoeiTJxu8dxkPJd34ju1a",
  "key9": "5MZZLjCDfFSwoSw14XYaEmpuipskYN2CnZHz6iS6xMyaRkNKaejdWozUs3xFKH4uZE4ErN92iiVzwAhCJanVXTRq",
  "key10": "4znSeTKhQsPpauaAAPmSujsu4BVxmfKXCTtGTAna98EqAVgcqP2JxLoWiG65A5pT7JvxZ4526P8H3Wgb8h5Qxf2c",
  "key11": "2jejbLT3sQDYjK44WQQS5GKnnJxpXYxUHjB4bppu64eQW735wc9CGkqsPyZU2iSdz1yyefzUQRRVMsKWUKkxG3gc",
  "key12": "2DVTEYqkLmvVBpN5Y15Mneiyi9fJbpWfThv9WH1DwXUPZzkftWdFkVK9ix6QqRmD5z3PcF8qqBAbBkSfqKce1CAg",
  "key13": "45yrnciTbdsqcJNYhV4fDZbRDHKDMKNbgvyK1KCyEB7ayFEGm6EFL34dCChkah7Gkcz3N1XxBypCGEeUh8tGeaqF",
  "key14": "2YnEFZtfFpFSP14iistHps6yp1jb7AVaaxAEVj51QWKV2tbzx4MwSJHxrXyFbU2Dw6S5uha95u73WN85mXTBuyix",
  "key15": "2r8WnBaTxKhGJVuXxrVBShZhueoEKAgsd5UzTwuWjKUqESzkqR8fjjxXxHcfPVxjwZ2K7Wo4rnVcrxzN76XgSbKC",
  "key16": "66uzXkCFaACAquNFmh9tRzRsrKqXerHvzFtxYfYiGvXd7Ck4qhryM5xtx5Bn4Jd95ZQHFP96mEiHxUToV5KhjPsN",
  "key17": "4TEE6UmZSeH8H5BSHhqRN5hnGqucqsqqyxMia4vePQBRifaTqvR4YyL6SutQrcMsbHKVAt4w5fTbg3PsfwEmcima",
  "key18": "3yieLYQDMscGNSPNuMmQQ5tBT7GZsddoEAMViEXMthGG33TcVLowYsp66JJchzWi1rKzRYbvTkhVjpzcjoL5aW4L",
  "key19": "5doYNYaHqWRksSFA9zGQqrbksRamtZQPHmoEsdxbYNArMZtYvhuymK6sgzrShfgFjr7RZrXwcMpUB92CWSJrHt5x",
  "key20": "3XfnDGXbJXiY9cYpLJuMyNBCvZH48F3VgAViMJyi14AwonrvH1ieUbqujTCGxKew9p3wP7vpEnsGj3CxxDmyeAr6",
  "key21": "mfQSNDE9yZrBCbqtJ4BSMNFZ6qPG5ez5DVd6Ba5P76pFbTKmCkXMtuBW1RigQ1CgRgsErgpsgdp2RNV6e3MRLwA",
  "key22": "5QacVgp3Q7iCFZo5htppiKVJs9Ut8noyQfHcz1EoVmbTRKrX2FGdeieLjhXdyCpkf2ZMze4czvzjp8Hxzp26tFV",
  "key23": "25e1RMuvr9VGKkNFwpX8MfG1epd6YmazoREXfuFoPHwrcZnWRrv33X1bcKBWaE7LujUQXuXTuBDM1nCnWdgAAaSX",
  "key24": "39oU4HsedvuNizSNErAqWCPH3Y2X2fhDWtEUmrDunBA7bqR5wiuY7o64xjqXJqSpirp2xvte7z57zF3eiN4u2usa",
  "key25": "5nRh2jJQgFjQV8vRVaRk1LnSSQawBYDn3GvkwK5dxGGamkBZRUxEBR12dhBn5YSK7qVUTniTdvk3493okhmHRYj5",
  "key26": "2wDC8JdX5t4QmgVVPHEoPsCLo4C57bXtjdZM1K9kJ25djVf9knvnxbPDDL6HkkgMEfURV9EzpUXs3k1kUEENjxCE",
  "key27": "34Qkmvz1Y3QzkSunXBMoFba7mAyjcV6rHuSgdj27xoZiWVruZjzQARwSu9t88azWV6p9kTPmtWacury8RDHpLWcJ",
  "key28": "5KBsgabjxtQPYYwVcGVZGCppPnWdaq38jU1bQzwXZyfPVdT9pBPeW92T7RFDePZiXMRjGpRd3tU4L6ddTEx5mmXC",
  "key29": "fnKK3MEz9xHbCjLPZWaVzFBEknTJMaXpS5aB4rwEn85TjqeyoUtbKPYzSVMYXkD3U26Kq3BBNmm55n9JjeyiCsG",
  "key30": "EkdpqeECRzqfvXat4pBBaZzbUfzKFKkheVQdc3xFN6SwoTMqGsoWtXnQbe5K2jqcFpqyoofiBHcVC3WbdkmHrKV",
  "key31": "NhquEzoN13uVzrZFXjFo2HnodBSejqzRuuJsRuBHCE7Xhz7eMMXrjHzTaV3tMndmXVW7JapARWd1FxbDKTs2XkY",
  "key32": "2sKDfHN9wUjcH4Br2qt9iXNG6Y89JRsZRipZdwNh4C72Jnkvomcjb63PT2SSGLnHFcwRRaDK6fFJNpex3bPjhshq",
  "key33": "dc5AJ1Mr23z4io1dXqZiPUL4tKToXkzJKY2X3A67W5y1i145Q5HAXZcaZJrSQoaKicyWcYUFM2QBpnHbtMtgyNr"
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
