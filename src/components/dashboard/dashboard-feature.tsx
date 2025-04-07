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
    "29g2PTUHeUPPxV5DakLZqFLknCYCKm1ip3hDdfe1QYk9YCyEh861mTBpvwJoK2bt6XHkereLRjhyFVqvDL9kGWyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r5Ba9oFbT7qSs24Tbg5qedpV4kAX2qoUpMTQanorXe61kym7eURqCqkbaMTeVBm5BkyuxTsmzWRUM1wbFvbsTiq",
  "key1": "5FdGjtKZJLYDeEi78F2jGtcZ5G2WFKphcWXY4faGA8jC3GwoEfnPeVMiVJJuQyiTRUi7coGr5t8u83Qp67UpSTSw",
  "key2": "3s3UHK64qvdg52H8WcFARy4PPDnaZj3WFHrAUzhyPgiWJtPXPUHqhPSgcpuvwqnvt1q5dXQdHyxv1QBDea2xmHf",
  "key3": "5njwfxBwUWYa4wuoZTTvirkPbH2HsZwd84CkWpUiGaTs6xxzZXtPY4g8vnRFMd66b8FJNcVNj5UJCWqEPnKrKgHp",
  "key4": "46CqEmTV8JvspxC9KfUNBWUBRhbr7zBuFDaomHaKYHpAV9ipcoaR9eWaim5X2jByjFCjV56pZ9vM7GbMRWg8sH5t",
  "key5": "216YCDZCQrgpXeB32jRGGHMc6FbisaJw2978Msg8v8S2YquxCdyLPCEiMi8956xj7Zgef2wUnsjhrgeVjhPmvfs7",
  "key6": "3sdCvNqRcQva9rG7Psq9q28PZyA9iasDwXcDC4inkG8KvjR5E1EgBQeHJD5GKcwLe3a98FqVunV2MXTrsgX8Yq4w",
  "key7": "45BSuf62dmLNk8QzgR6qcmEjDPHSUrqNrrAZjLQqcmBqHFJt5ruS8qVktZLqdJ6EomyNmDL8jgHQZdt2VpEqV2L",
  "key8": "2VC535iZpHGPpS7dK4mkhbzDac7gwoDdsnvBWQqMe2XVy5bC7jf1X4zrGp5EeUwYTHuVAgEVKoKxX5RfxDFUX63L",
  "key9": "4XBqF3ePwnve35q6nj98a6W5X9i9Kh1VNQCVzUwwBnoWtJjdtCLS8uuzgDPbttCpZLcAUjY4KWrbKXrWHtrZ3cqW",
  "key10": "34wiQLNFK9ijht27WbnKr5RM9CnsGonG3eHR58y8Krz1eFrTTVLWkRaqYB4cZc4RRzpqu5jvX4H29rpiPknsaztM",
  "key11": "4f4RHoweaTN5vHSMMLHhYthAVHcF8X2Jt3ufUtq3Zq7SSBqvXdUyfCjy5jYf3G3wmAH2gPEPghYJTe4PE3aN2crF",
  "key12": "2ZdKNe1fAxsTLWJnGaXGu36eeTbE7d16DngXPUnNX1WxoEx84ApTe8AaNrjeB4CxwxUfckcGFkZ3gadGaEHW4vbN",
  "key13": "59TYigH6bD8VD6BqBMG45LmT5d59xgJoVuCicjRTJnpUNJWhjF9dvEU9FvKLdM9Zg6NpyMzPjaMiPywwqSEKBWvi",
  "key14": "4pkhBKDPzF7uuVwnuFsz6Dox2oRgbp5e7GUkQTkpMfNrzA1e1ameLJzcBJ9DTXTmz8dXrWzmVBKJ1TSTFS7QRid4",
  "key15": "PjqKCz4chpbvfbWqmejUPEQVoMTTH16wd7Gdr9yDvbkRQRm2jxVec5m3W3S6pb8phB9pMsdc4wes7Rr7spYHCAP",
  "key16": "2xzsozviD9ErAsF9LsSo9UGtkTQLBiDMbViMonvEeweNpb2QY7DZMw7Q4dvgKJe2am4e5ecP8vgVnag8vqx9Noc9",
  "key17": "3YkuGN6AKRaVcooJdYKaRK5UxD3c3AxvgZwVg8yUr4dNUvoZSZgcP7bDqYvhD5UTxtvLNRUjg1xtRbA8BnFrLcQN",
  "key18": "3nFkMKeu3B7Ma116cKN5drXXN6P2oWCaUFgC2rkfAgwofYqqWa4gyzA5a32AE16MgWB3fpcwCgkcvpmv5vuEjQT6",
  "key19": "4jsGV63U56EvP5f5sqVyXsPSLbAXdBMacdb7t8LHcyJKWJtnm5phUWFab4mjnQEAjYu5TWp8G6vh3LkeqMh6ywZq",
  "key20": "2sgsnAs8kNvYg71yK4KjmppLZ9RuCynbmW7YNxMmc3354WK5b4wBLo3qN4E8r7KAMEXJH9Dc1P3z6Vdwiaas63qM",
  "key21": "4znzvbn5znhgqiTvBvEs5cEegBjr48PCVhpon5L6tWfWpex3vcW4LkFddMCxTVDsJDxtdgmFEfudaqxxv2mE2vk6",
  "key22": "42dH5zkB28opqaLU3xcm6qLdNkj3oeiWgkSKicq2wA8XWzx6HTRBGHLgWa8vcUebVXZLostCQSaeBYsaEuZEBp9y",
  "key23": "58ngHb3so2JuoZBALvcqGgBWAGQf8wXpe5DwUY4DnaETYmRcN2yhYigVFnoFoFGHbryXDfzoejz6aMzNczWy6Z4C",
  "key24": "2ZQQjxbUWS9D83R66qebsJd7Mn7HVrqcWcTuD2A3rGuDDfQNH9ahE7nVpyps1SPeJf1hVQ4dGySY3adT5K3ge2yH",
  "key25": "ppBup52dmEWFRzQjvW1S97aAV3hdY1Do4u6NNfYR2QEyEDPbC5JGnYEx42K2x9vrC11igTEotjUwv8Qq43z53Vx",
  "key26": "5dzTE52Uz9YpzspgUJ8e27pj9JMYHtkA4kCGrycwBMcy8tGZbYcMPwUnmgAnug128s53nxYPrryxT62hjejBe1RV",
  "key27": "4C6PUh7NDppSb5Y8k3uGV6wp4MzeWjiMa1GWTyrZV6wiA7STNAVzERk5HJVcG44Mncm6C7ZLHZ6ecDhi335N5aME",
  "key28": "4CmG6Pfxc2Bcrg4Kk5yMXUkbgvw1NWV8V2YT3dYuuAXCQB2ot3wW4K9VnDAnbZWPyLKApRAW1PfBNnRGXga3gWyH",
  "key29": "phyxN2f7VF1pgCqhrHZReFfyLm9VxjUiaqkZdYeS3aiXWwngSvakhrbgvCuo5WLf8p8wQd3f8W9y49vo7dvhbfN",
  "key30": "31UfDWHTgnCDDq9x87mxciRJBQ77RDRzjCU61Kces4Bd2oKtRUz3g2PsG6X65RTgaatYFhzqG3wJjLcRxftEr7dM",
  "key31": "4kWXWryNhYNdSNxwSJQG1kAkm5UbeAjAcnpUpzBwfHV2tudSKYEmpN2Aku4dwWCic7P8eqN398QxTV76zoUfLiSt",
  "key32": "3iffG9UA2XR7chJTTut9NmZ1rmo3GF2ZFwDT7XSJfZPH8Vu69TPphxTHhrnRajXzmjeAu8UGKNgCrUW8rruMo8w2",
  "key33": "3UQAw6rV2ioTmDZJE7nyFzjsV2f1PJLSEb6K1hoWpdkNXJLSF6wNDbH6PW674S8XVLQJeSqNeCtXTyZSb4KbfNPF",
  "key34": "5Qg4W22MDxZppP2dZNe48dhDiaq7uJQ7UZ8a3Tco2VVYYQ7mj5hBNDtpgKnMnyj7HvdAodqd9ZSjtQATsiwE7Ge2",
  "key35": "GVaiTxgyWTm6R7HdjX34RjBYuQiepvf7xYpDPwvFC1w7sFtvfRyWrbptHbVDzenh5nGtMSiu5xE1TbQkkqzmwHH",
  "key36": "3geH9Y8heTjS1JwLH8uv5yFVNE6GAVMTEMNh2NrzMz1sZ8L3xMgCwW4JxVqd3GFQiyBHHv4qNwf1S4VD3hx7XBum",
  "key37": "VZWcnaSfJoxXpXHuLjchx5JQ3TsJg6geD7CBYRUsNqhWGJepZALrXQ9UY4Vj1W8nWGMxeQpnVgvGAZHG28r2w3m",
  "key38": "2BXTkKxvfN884Wr4ZWFmyUqBW8vqWux28pmBNAxgdEKkfwpgreMm9bczVDq4FoY8oet3BCG1r85iKLGze9dUyxBU",
  "key39": "3bqfDpKQNtZkuwTFvNorkUNwcjVYWHSqHxtqppVR5cPdRmEANXsA36EusvzNjPWCCGr6f8X7NW7AZYJRMwj32wGV"
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
