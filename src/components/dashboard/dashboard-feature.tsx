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
    "3hAytpFCWu2hSNg2PabSND2zhiQkWwS1kK7YFRLXRhZxbJjC5QSYMi5KCfmy1WTfFy2wSEa3oM2NSUDeDrwd1bm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YTydLJTr1hfRiYXuNxm89xYcwRommDHB8h8GpDDtiZbbDp9pvVro6bQJkFT9PD86wid1k5gaBdaXVvmi9QcZKn7",
  "key1": "5UyhqbRweXHJbcw3BzD7VevXQQf2MwapLqBbazbKJVHShbKYNruUCga2eYpiQUVGoai5pFypv9gsVtjHq5EJdsdd",
  "key2": "4KP4vRhhVBuZqPTuHzRNJYx5WsrCVT1EyAdXFByUHTY4CvPeArEVHuBPjJCHoLF6v6qKACZxv7Ssr732kgW3vQg8",
  "key3": "5QnmneNPXvmh5J78r5y9j7PMmPpXK8ZNK5tpgLfSJjgSaFdtiakEB5swk8NAKfdRzs8TMqX3XZqLebTUXbLHGUwQ",
  "key4": "4tfCxsCGtuC8CdfxL1pLvSmAqq3qj7AufgMPS73uFuQxeML88Dn8bRwqd4kwvXCPzVs7E1SV5pDcW1CifJd3ruRc",
  "key5": "2fLQtiwxVd5fvHMS8nG9nsFF3my6gWMspES4etxPbcprmKDbZYRRBQTVJ1HLYo8kNmyWnFEXA3ggtX6fQBvCfD7i",
  "key6": "37L34cseupt3XVQz7wsjkm5LjGVPXCe43NKT7XnNLJ4hyGpdQntxVY535KfnV41ET3a6yirpqBbLCiSvy9BuuKW6",
  "key7": "55AwkY81Bxo5kNcz5YDsJcJ38g4QwcX2tNJ1QfbGhUTT4szNQY2gxM39YXcQC6tR1JQsh713SEhK6pAVesXWzNen",
  "key8": "3CW7UP4ZW6mpF9KLB5X2qndHSikLWLW1JMW8xk9TSMK7MLazkHpBybw7pMFtdgs8zSCFmB7aLJ3c8a9WEBUTkQwb",
  "key9": "5k59TnP2fZnAANjr1NSaciHFDRDaj4xJe9cYgPwbz8BoZWhBs8waenvki7QuEKrqejmJZRHVYZCWpxhUJwT1Hega",
  "key10": "3AGWqZWUv2Hu7CuBujNhSL8o6D6fC9YtzqZRxEyDn1eCzy5E7rRu8eAcuW56iWJ8RoJehXhjyRVBdp9BNZgybFkg",
  "key11": "xyej3KkwNrWbmDtypCCcg6Sxne1ggK95XGJ5r6N3pHSddB2WWqEAix2WRwWpBATVud7dN38iHMmg9DLgJRDvi5s",
  "key12": "3MiUxwevBh6bxhh1N7cqRXkT1aQpEMSDdVUdXJFh9KJpV8MZD6gqcJXFuCDEGdJMMaA2WpkLTcdK3UUx12c9i8g3",
  "key13": "3r4WZfpip97ax39q5vmHhJg8X6KFsZiVG3k5x59NPZ9RKVyPkJPffXjSbRqYSaLLJtB2tRFQyFcoQpQAuC6221am",
  "key14": "2jRs7TAqi73HLzsK7BKN7zSH7L54hwDWyfXMpviMDCs8Ech53mEeRGywiL4rApSiQGm4VyKbf4BeYrBBCWHKjfL2",
  "key15": "4v6FQa6bNQyu9e2wqhFAhJ7PFGS7cZpYfp3fGgFNyiiUrYvmyoMJdBRkm5QggvCyHQjGEJkbZbU979qevGNkZ3ta",
  "key16": "2hpPyDTL4czEFPhzhEePfWraBjinroSdypiGg6rzpbTwTJHEAKVxsMwiWsWAZ6akFTWYni9Za1MkDDqUkx1P6mV1",
  "key17": "3FckHa1ST6YbghcqjhG3tTfFkuSEZp9narjbpWrbUUZXrx8XZsLqeQUQNgWdiJTCy7wBYXomTVXkvdR93FtFehSQ",
  "key18": "Fffv99tjY3pK2kh58qtuMVgff9Z1N7SvfvAby25XuyxbAZePzYUeUeaPUdb7MPrkE3s87hAK2F4aEs5CWWox5DK",
  "key19": "D5Vt99ZefasX6xgBskC62dMTTduCbJ62AXUtBYeCiX8KVFGbuVWjEQZJSz2ncKPvub5U5j4gA2LBovvxiFbXWJb",
  "key20": "3KTQEJzJCjT5oW9nb9TNAxPxn3GZDse5zDzviPNGVKS77Liw5F5FbFTu8coaPNZw9dRdHDmXzFowU1eujguDaRNf",
  "key21": "3JnL8WQQrCybgmvvvBSmzivxLraarBcEXeh16RYV6NZP2xDThce81VhsoUk6sGttyuxCJFtsBDk1c6GbEhBB18Vc",
  "key22": "25isvCu9VGk63JjbhoiMJtHQTgcRenmVDHLrwBZKa9Vs3xYVREWkh2bDpENbdrqbTTYJqp7fG2wQQybEWxf1eko1",
  "key23": "4Q8HQGThmygrjohRLdNbKsZciVx18LR6sCqhtGPUMfYDk16zDEsyNwUbLMLCoxByAZwfG1292MRtY7KhQh6peA2i",
  "key24": "2CWWxrKabT9NzyPhDJb8BdBLgV9sbRLxGYoRGvXZgQg8YK6mAXRDxRUS7uN6aYKoRmqq2Fj6xbhoGTQ4H2Fg2dKo",
  "key25": "4nxguqGskkPn67bjFaXN8LwNDdDPbmdPSfZ1S9MFU9HJDsvj6FFoHCBDtvAgVdd1kwB4Ka6KUW6qLxWru71bUAvr",
  "key26": "3kz8Ds3aZ4NkpZKpy7QP17hGEgPDqyRft4LrisSSsZSVA4gAFQXxhWwm96SQ7kSwcPVxvqEwU2p5kdgfQ7NYwpP5",
  "key27": "5W5HqpkQFGrakfceixzrTDSdieJZBkXnhKAQ9kGsmzzi8AMAA2wopC7Wjhtq3HgqdzDcBbJnGbabBPMguo9dQEVa",
  "key28": "3dLNzKCxiNPdcK7VMiveH2xtA5dkpL1WNwPfJviw9Lc9Kqqazxg3HcPoxVJc5Ddw36toN9PyufJqEPjmFhGyb3RC",
  "key29": "4HoFXhCE1HBPdhfusywpmRTczJERhtwLUFm14KeJ9pSeeMuovHZPxAVniZqVvDMQ3eVpVeCQhUtGqaDYKkW7B3L9",
  "key30": "47sMY9shQVB5kUSyWWuhzu1dNMpUMxahWF6Nc9mVYmJSKiYUU9bCx87FbYYrudkAvCQgyDfth8uZexJETN3NvoFu",
  "key31": "5Eqt488RGhmE4RkhVxRDN5YRK2ehoHXb7E5VjszEGKLKjRNNAD8kr1RBQJWu78ET9wf1top2qwUh8LBNn9vJ2p6U",
  "key32": "5aojy6cLoraas7ThwHo6d8LegBWP74ykbFAHfVFjmbpckZwwBKLsH93Pi3YmjLhAtVgDg6o9b1YwrPWWdcMu82Hf",
  "key33": "5hHHyos6cZENGWYASfVffmzZFFDbBrM3eBAHVdpcRKcWeCKH9omEAy5KAU37ZhCjxbQtgomphPNyiSgapiGAUWTs",
  "key34": "3fcvWWRpJq9rTrK7og2o4j5oWDfobqVt4mQx4VHcwNXDJmFMqF8m45Tx9Dsut4DQ5ubLy7advherHR8wfHAbHyAK",
  "key35": "4zWYzjDbgFTNHodD6B5WL7fbPzpfPgWo6NADegq94nTsZ69kGK7Mb1udnte7qZFXYckx9cbZpavMcS1GbQHECndz",
  "key36": "4uCLAWPQ7SRqbwbTYTrTxnJAWxBVY1kwFwatztcEro91B7DmLM787wgDw4X6CLNssETHQ3nbms7sTifF26QHoDhj",
  "key37": "4NC4n2MmoSz8Zzwab6cPChLkZ3zVS5ez43FgcGgLwTVqf9jPz7fELthreuVH7vjKmjN69KwGh9i4juJRZxauiLsY",
  "key38": "2gmDtNrVNkFJiN7qaymvHDYWNVwU2rgbxftRnUBiXU25pELY48P1nGu1yZAXjTmZcQFQNqqiSh1T2SkdcfEna2hi",
  "key39": "5AAQNpRk3LET3EpWuh36BEbbFwPsg32F9Bk28t4St38wGttuwtJ3hTt2jrtfDEhdJXaWvKdsYqohpRDw71z8C3Y4",
  "key40": "41tfb72Mp1LyUQYZCEQj9yAJAeJrXMvfQJ94mkh81xLPJ9yj4DLxyPVisaxdQiy92nHBuctYNaH8r6bwrAjEFD3g",
  "key41": "4r4tvqfoaX8Ehe3LXuJXqmWGVegVFPvckRTQnsPD4uwuxqcqP2PwEGV5nRozdo31g4km3R5pcX4aC6ocdmNCJ1P8"
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
