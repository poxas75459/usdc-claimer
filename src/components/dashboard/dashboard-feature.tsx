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
    "5YdnEL7Xnx4wNY63EA24QcokFSKFZCRqbcrs5sZuGeJ34ongdqaseb1ZEtemFmPn7c6PYBjEyDHrRMEeNCeKAhZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWfg3ictD4Sjm2g7X9t448282YmHvo68h3YCyiPtjyXMEuZNGQrWM3g7coUPRttwwVdAG3WWUTnGvgS4kSWhtgz",
  "key1": "4L7zHVkpeApBP54SB72kk9gnRNHiYbYXJaG3rYbWwX32ABjzxFfEXHPJ62THqS9PWeUpzBqntKNcpUymHHHCnRZ",
  "key2": "2CZkkeF8BnPbVdPWtk1jqth9QNEdLy71dxywFAivyBQCoUSaRi3PQ4rZzxm2SteSuUZRdXaDuydM6edQTU1TM3rK",
  "key3": "Pd4WTwGdoSW9aNWaWciumwfBd7ox37W5zjELPxBK5fzy2STLB3vjq1CjvPphjZToXo14EtA7emQWUNg98ScBmUA",
  "key4": "2MYhcNycqJKvL7dijzPCVvuB8p8S6LA24WzZc5KRWXXQ1fjAHCR4amWXReggH4h5BHhkWEpcRGSgbwTxgjbisVhp",
  "key5": "59vMTKmHZ4uC7PNCNJLYvcbAeWzDU2NXn4Daoy56NFmX7aYxRiveCbh9jqqXPnb7inxmRtbre7bpfHhCXRvWWRDs",
  "key6": "5QN2piyyNEGYdwQAqr9otvSAD3xn2echSeurv1aHSCCwKNTrJJJePM8aY1aeKy3Ck36qCjio676JWXpFaBsMsy5z",
  "key7": "4beHF4y7p977joztSk9KPLLiLWePXP6SbN1cUYvRkCMC7xAaQYHFpZmcGMWkBrCBE6WxiLVsYNaXgk7zEkhdLxob",
  "key8": "45kdjwx1HB8X3UjeATEtMDco8sJJy8fngrQZM4m4g8jgnFDR6rgJehXh6RG9gVLxDL97jva6G1p9JFrYtwxv8fTB",
  "key9": "3t6zizk4LMdgu9wPwWC88AucCwpq9iZ242ipMiaPVKQnU5ZDRkKBXvn9L3RFYH5GrF13mpbeSCSfgbvnZFxVVXLG",
  "key10": "KBaXpuEtxmJ1NJoS4KZJerxxnezuzke6XwJTCGoHByuSSdGRtfJx8NDTbrcdP2x2VJNeG69Z9JiaY6z2b379Lhv",
  "key11": "pY1SjbTxKxpQUxrg5dckwnccWYnjThDfpkUf8drfUqZbKniZNZG94SViwEB2y7HFdRsSGCG1dvnGCJqYfeHjn3d",
  "key12": "5R5m86H8h9LPv3knT9mB1rnokJ6Ak2J14uNQ5tzQYALi4fYxuYajHErajPpW4Mdrk5FaCc5S5p63L27H9ujm1CuK",
  "key13": "51V9RFqgX9uRt92shNNWGTUdPELHqUBXxCX9KNRtvHXSrLFPqpjEAXZv2vgXoen7aCX2URm1QZRYGScFPvbyBUqp",
  "key14": "4iwue19fLtM2Jq1PTNV5AqGTswXVEme3eH1r8hVQsCJ8aG8THTD86uBsVydUs9iCJ1usMZKqgwfC27npP6TiN1GV",
  "key15": "2UviJGU8v8p9xL4wggTmNwvmpoSbjYJhaAi5jC88dcHj9BoqGtAhiYK7paWk5PReZD3vfXErGjD8QSfVyCskUPKQ",
  "key16": "5qFLLboSUrwVa4RDEB6JHfwQxiSgBmtdrrQ8Z6wmuLzdmoBefzqhZMS6ESHSrKk1Ywi4qpNTi3eCGy952ushv8g9",
  "key17": "3pPs22M2zod8VZaeHSSJmdtaSpmJpBU3EbaFW3nUPaJDqGzcy8o2f6MoJ3RQSrgqEW54XAAUe8mmk8F7faCZaVwC",
  "key18": "2DkyBJe9yFTRmiX6h58LEBmF9MgAatVcAAuzTKwsiX6CmXXBb4afekyYxBuGYFHCVagb7jwkyPao2snp5zY4NM5T",
  "key19": "3m7o1hERuhHM3XegMdNf2iRebyssu42hJE9EUZHRNmu47msHLtgv5aehyZ5hSFyYRX6phoSeHbgwRV6vj36QFQmj",
  "key20": "2mnRYvp88svXhKtcoJGjieC12xMHkBgo3oaZAAG48yNDM2nZM819ibBHR6DmAq8vtAmzekaPkkEkUf2QhuJyQvjU",
  "key21": "56WCJiJfMT1BcBBASVtWLGmW9dCSztcVExSPzaQMZein7oze9giBm8yu6TNBv5L8DFw4Y3sxqwcYqHPGTgZXzp5w",
  "key22": "4cDFDHsDANhqTvJQfCkLqJ3kzo3mwNRQbK2fqUr3TEF6ScRvqWfSvUSNfEcvJ4v4FKQh9YxCBHcF4jTdtao2KPdY",
  "key23": "2T2DP9XnDRsMUJK9cbrCFRJhY8jahexKenN3xJwxra28B3x3zL4TA11iujbeveLYjPGRQRFm2hrLsB6AAXGXWetR",
  "key24": "25d7MXZw3aQYQYrs98HPwPJ691C557QEQ68ytT9tLAV43GiQsZi196c3RoeHywJQ87ZPasXsPfm9YhxicaoM82Sr",
  "key25": "eXGj2XybSKs6MW9nuHD5rNAnhogMBmh7L1QxoTUmqwHnxNh2UyYpR313qBxfyb27p4hrNgfv8HvrKxuVSKKPYL4",
  "key26": "37crJgptu9idqHiKPM1i1hLLG4Ef5w6cLQmtNXKUTWn7pbfzVYpjWUNa4REoym3AhT2zZ39Tb7ZgVcWLBYC3wFK9",
  "key27": "4o6uS4Z5tVN6AFMdyc5ovzVnQS4JFvc1B423rnn1sJvZG1XMUhF7ehQSN9wKbWFm1qu8Tf7b1hPRQpXsds3jgJhC",
  "key28": "31FDzbE3oqEAcR7i75gMvjZa1seMtiaFgszhNHQ8XFAsGKwjS6qNCqZgRhgKhWY2ckdb11smxPNFhVyckkEVwvfp",
  "key29": "3vmjAGp7SdunBbRN8r3KngRMUTNJBSxu2qv3PCepvHqDtbkxaHmcHnnYeSYX5tAKu5fu8835AdtjMS3kY3gXyCJ4",
  "key30": "2V7AVV8dapDFEgNHvchWso7QaJxNDE9n3vudmVZNwr9PhxnqkLTaD3wC21HntDJyQnJXfqpfGfEZgbNYAeRCWqZQ",
  "key31": "2MqXpaY6REDeyBs6bhFPfPmcKSSK7C2fUWC3sbcuRFKC3jYcbeQjWMRMaQxzRznevTm1Cpjvsq6BmBMm479VbdDL",
  "key32": "5CgUmVoVAaGGSFBhcBNwzsDbe7HY5sSWyNhPtFPbM4XuHBW9pEpAL22uEEcdMJwFuHrXHC3WeVXgKvmryDjmW2ga",
  "key33": "4t68uK1EcXaKKaYQpGvTdm3TJiRzMScbgfzjMpRNqtAFt5DsvnGxRKbUPLKw1MqxTJQQnGRV56SoQQnUoCTDFiEo",
  "key34": "GwVhjsBAtEAM4Rtn5MBYJpxMdE2AmNEgw6SYccoRgxNJTyNy2Ts39rHCUjfQoViTyuh361LE7sctX3U5126qyET",
  "key35": "3xaDyWdsUzfLS7DRCQe9fKnJGfwAtBti3KJJrg2aV9XpQUketdRk7GiTYnFwyf65Ev6no7xw8dEc5HDvVJAfaSdQ"
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
