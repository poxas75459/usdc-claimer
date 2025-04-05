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
    "37Aipfyqo5ve4FgyhvAj8mgvory5jHLdFcSMdzuMHU4PsRsW3Rfv5B6Kj5ycWTp4fDLwuwsHFZsFSDWHF1DGPsZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Aeo8GLJkSXmECYkoQV2hNidW87yEj9j5MwSos8VgjrF96Y7KHiMM447MxYQPi73uVWbo6kAnoeqhTaJEmgH9LjX",
  "key1": "44QhVeexsn7jczQDWn16ESPUao2Vj8vA4xnNaCokpWga2MKEdpGEHtzALLigX1vQCaNYreDBfeVB7XHcUj2SN6Uw",
  "key2": "3azuwjXBAodVkMvMKfLuBVEGVadnSsW9d6X6FxfYjBMY7g1NyrUzZviAMX8Zu39cFRAcDZJWrPaBA1hyFoqophn7",
  "key3": "3iuE1gVeNPe5fvTeCac2JyNXcbKCxAkZxkTBxzqvTkTyEBuvfhNZ2wGf4UPrKMUdmAiR8hZNgM5GAiD5eCoBuoBW",
  "key4": "tqoMg7s9xQhjKEkh7ECmJjqZEXZ6pcCfG6Y8fNuSgXKbgPcvFjWyjLg6RskYxEwW4FJ3y5BZzN2KywGevXviUwZ",
  "key5": "21qQMepH8HEouZhLEyrTq8hhdAARk7pNobws4nfXQ3GJHAZcsuKBFEuxjK1EgsEaCNKzfP8DfBNnejyvYY1eFb52",
  "key6": "5d8ehpL57Fn8vMbr9mv3aLBXRgW59jeTb4FqkU21bpZmGjh4KBttd1cftFzmB2o4H2CbPkDDFPQD7eKURCHo8zbi",
  "key7": "4HMaNZ8t8w6tb5B8WoTFPMtTpVuYkCpTyVyECS1k9yqVTmELLaaFxqSBfTQVMUEdzPxwXnqpGz3B7Tw7iDR9Xsmq",
  "key8": "5hLZeVfUCmQYRxqGYVaPvGhyWj3rMU7zUHwtzkEvAdy7gpWyAiQLcRDC1gWwVnZCX79prAeHqY4HAt3RAih46mT4",
  "key9": "2DEdUFt1zTBoSaMQev64UobmT2xr7Ck6vY3rrc6mqH6JiMxn7p7HxXEQup3K12eyfzgPvfGfwmMPw9dz5LGUvxko",
  "key10": "2epAw4TToHoXJxWUwQhKHLiJrVegZcNm4yCLnfmSMmHgaiuCriuDLgDwKdVRnTRhbo5Fe5hri2vPT8qPTkxZUzy4",
  "key11": "2uF7mr3UmaGssS19MUL75pwcyCtvq8iL7NUNQpuRiYWkyd3FZu3gpRZzWDAn8TJaBBeGKMb2Gha7AmSBAC5EfBE2",
  "key12": "8wiF2XVSvr4fYYBXujPQZJ3Hzo1iSxsHusvDvuypSnbWYNRWwmrRZGwQLPp9gMxLZg3GcEZMLSiVV29eMo1BgYB",
  "key13": "EiD5Fknq9yd9jQd59cvF878PPo6xzsg4ssP1QDSz7pyRgNmSFosBpWJXuqDhrFmBxxecNWDgYFM5fyxwDPCWLVC",
  "key14": "3LNhD9rRnXL3XJbfSifSgnQcKSoKPVwJUMECrumkk2gYdYGY8kDGfd9zVpHXh8djay3w2Sw2uD8oNihwoJdpoEKA",
  "key15": "2Wkjowp8Ds7fcGFjowJ4nLKjyepvTCZcvah3fdYxScv1jTUzucozQsHmkKBxceKq4MZ75jQYqZ54QnXLJ6YjDzt9",
  "key16": "4Sh9diyW9SY4wm8zsjHoYRqp2Ce33GX7FxxayxHxxXKCEvEAwxvBxBUvWXrU5DVCPeVMe4g4xp8wGjweEnDNr1Hc",
  "key17": "vjKFAnSEwSGoc24aNQ8ftzx2ML1d348m68CgsVeRCDUL2cViujiuCP9fowX7Yc48Dy1jQaFqs2SzKRdkXK4CkJc",
  "key18": "4QsmrPejP13rHpPouj3DJPfAWkkeyWe5VN15wwbotW4rauAGqG8hdmYZ7VkxpPvCixQdU7BzKD8jVD1hQQ1P4uYn",
  "key19": "5t7PKiWQ1kMwv1yqX9unth8epZD1egS1EnXd7BNp7ECveuUS3kMPDujPwXcruWXrnVPzuh9whH2F6pSA7dh2NHg3",
  "key20": "3WQxjq7c55zjnNVsoccX9HqCJU79vAvMXud8KAzwzDLSxwxNunCGVNjk7GKCNjXgdkMRuWNs4qyGkKzT34w2CWqU",
  "key21": "5gQ6UdH6ioZWcB3fnz8EqRd7G63paQAsT3Z2djbpUJAVcwMfKtk2bPncHaosrn9aNsHKgZpznZiH6wZrevimH8aj",
  "key22": "49pD7MgVMWgn4dq5FTft3iQHuFPk835AmAy2V2u1gt7WtdHkme3F9AiB1tYc8QaTfB7dZQ85SvVjPmZNsS8PQRMz",
  "key23": "49kCPqRWQ9adXrB7Wwv4pRZAXRLmRiWCbDhFyi4CKJeJLhstSRd5py5aLoh5WZyP8fjsinjjnvnsHXHLrRWV6dTw",
  "key24": "46wNm67xqrykdWY2UkVQxcctq3Xu4yGAhctrniALZUrWW86vkpenat2EyM7bRpUivrbRe6iG4oQfVm6eruBjrv6V",
  "key25": "3BEpqNdopsWpZj6P8iPeLnwuDA3BV8LRtm1JWbQcsnnFp9T4eBWzuiHhZPaQfyvKghVfBAXAVp3SEMn4zrVeKBd",
  "key26": "RitiYZQiZzrfzjz472hcmywp2TxJ9BUm8D6FoV7BhEXhDeNiUSAqsQTaX71SPaMfhiv5uovJVwb9uhe2E5ky7F1",
  "key27": "4FUmbMnbmMJFLYgCtqHRBujJ26W253QziXXK2yPt9A2jsA32dgk3fYfdLbPmd3Uv8amh2R78WRwiUiMEH1PkiBsG",
  "key28": "27gkPdpAhXCLCz3rjuXGpHz9javiNJNu9rperGFbMvNzqZVbJH9TC7nFigkGP84G4QhdbbXETA1DTQrjuZjuE6x3",
  "key29": "2VFEXyu2puhKcDiDNZz8qHpK5vVEqjLj7FfPNcnVWpHFJ3XNxucpKHXDwBxjdbLMdKUkUtj3cSYd3sS4HVjzCDBQ",
  "key30": "621w2ZzEXjJtBKM7XZd3HVfG5ehtG9nkZCjbdKEexxMmR8o9UVvyhymPfzV1UVbCiaLxnRqHDbqXfnA6HT8D9uv5",
  "key31": "2jmjv9ftv8KUEnKWuGyazdM6T547YwSJDT96BKHRReai75Tgdq5TyyRGT53F4zT591S7eCQes8PWfMG8bbEBhGRq",
  "key32": "ovsBjtoK1HrYZxABdgF6NFgpFc4WKUpocTAecQiPwBp5ZdjEgEKkYGwnhNHQ5JJEDpmUpWM9qXkLQDsV2AqFxd2",
  "key33": "3xCKkTY4zAqC151xJbmAb6mYoL946VwFytM6u7d3apJ3QnzXKo8SbNeuxtdmxRLF9Jd2qxHgnBskXZj1MPfNFZcq",
  "key34": "2UGU9KeDXiE6LQz3pWu2eYzPBD2BU6F4RieVNQpYs8sVve8dFa5nsLXwNW4kgfdapvdqSuDJ4sGHPJ5GwFvE7fJo",
  "key35": "xA8Sstet8wR8PztCC1G18JKp4wS7L1pcMDrHPn3t4fyjRf3dxX5cK3yVpmxMDtseW4Ja8mrYswBZxRUpV96ck8R",
  "key36": "2MYNtHAErFLXMYh6bCgv1NtwvWBsZMRZRhrcPq4WFGyUetbzERXZM2TyAf1Jf14W8T373RkJMetbDV1GCvroKEoC",
  "key37": "5ZMVdKr3xFuXXTiUwutodjptAySxu1JkWGC7qq34i88Ws3kKvD1kk1ethn2RNUM8NnmdmB2PsDQ9idZTTN8critY",
  "key38": "2AUZdoi6pdga1t9ejRb5hZuE1FNfomahPQFAMsmXo4tuPqheN2eKci2HDfRpAa5NkKnHYLhs7YV5q1fqZwqWj6gL",
  "key39": "2JsujpstDcS8gEpXkAxLeWXXRTksJ6Fpg2crDtevDKKgutvdqDv2BaT6uytoQyiGFgB4RoiPxH7s8pqKUWEDp8e2"
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
