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
    "4URLNdsjaoamen8mNTWrsAeFB5RyrESUHmAfWtU3KjMsg83bH15BSgYabcbQ8iUyDBHx3YSP8Qd7aj2UHopsrd3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tbR16LKzNTPWoeFkvrEAHub2WB18E92KNtWFQTv9rNRb6hjvaWQ68FcvEFRGvhN6wy6F9NCC2RXPge2XQdCwStV",
  "key1": "5ZvgF4RXjYS3mbqSj23YxnrDvGAT71ngPKD94Sy55CHmeHBXHsSdWLZ3Hpwsh9ZTMmsTaMPzMmfCb5YptfKmtMQh",
  "key2": "3cLBQ6uo2fYNjYmApCjYWhKRoqmnzSevaSdjQUDfrRSAEPrF7MZ2sis2zqDXEfX8Jyp45UjagHcr6A2bfEfEp9Zu",
  "key3": "3hJLxH6nBJGTyaG1m4dxisQs1W69TAAPGniXBQLz78iiFjFWpZ4Pv1JhcnaBBd4UP7yNFKmnAnTBTtRoNUycpArq",
  "key4": "4cjo8veintjaEjunCVVPAFrS9mbZ7vik4dymv1D8jR1v8hSvtx3xTVP4x2coCMhfEbA8wQ8bes34prN4mnPWkEcJ",
  "key5": "hWtpcwXyoWDhk2u7CZbKTJT2wkH8ZUr7LvGLLy5KBiQn4FrACAN1dS4hoy1vAs6pki3bSpGzLw1vyQ3UpXSh3Ff",
  "key6": "3ZPQRud8w4qon3S6ZYW16QZ9NQjatq2FaL4aEVKfRBRqzugMc6y8FN56uyZa9zNKjiqL5fzheoF741BwC9UTfqhi",
  "key7": "46F4h2YyfhyigZZ3jjyCpAS7YxMKV9g3GNWRkFHyMFDRrXdqDcrZnnSdd4HDvDiY1ckZBobbtURbLQq2SHsb5dsA",
  "key8": "iQ4AXneXfSWoGhP2t1pAWrhUdq7iXHjWz85nU1gMDocyj7nY875EMSR1teMBLzvnEzZUEuvpErs9okpmWVtMkLu",
  "key9": "4HvvgWuQLrLnBfW9Py7L57wzUtpy2rKKqdzg2K9PFEp6c3JiRP9DGJZJ9HgVWd8UUj6ebnwWLh2EYPPCMVGc6EYu",
  "key10": "557krW1aRLaFECjUMXD9kTekKirZoXH1xwmcdYKw8KZsAU2FbkwEtjkMSBudnE2bw3XUA9idUhvxBcFdT2X9yokG",
  "key11": "5cYiuuVYgMdhVTEoSyozNn4VDADKUh7ZKiAPGbwCkMNkxRRMNmhwaWiU7mEavRnRiW1GSQhvbJmyXkC7kUvCeESK",
  "key12": "8x4C85FWEH2kcm3xt25sPtTfvy9YLZBi5Z5DMVZ8HCvAAoZHGDuyA8xVoQR8qG9PBWco98PR8sfChy8Gm9WBjxo",
  "key13": "2LqbujvnMHBRxT2H6dgULP82gRSHkzpY7KxybresYaR3MfjxZpDeAKnDZoF3aSgyUQFrqdaRGSQn4t3D8gBAjNB9",
  "key14": "3FQ3TUrJESpf2WcdgSEvQg9QsgJSfNWhzJzh9k622Mu4S8z9cVFyX6kKLZPmD7xFeptasN5SbJcwKBTNZN8ttNbT",
  "key15": "3kS7mJXRjfPTaQBZ2A3Fm8saiVUNVCsDSGRqxyoFpZdMSgqpLqxDZ4bYpx8ezgy6Kc4upviP7Vzh7KQmghH1R3j",
  "key16": "2Xhv9kp2L6tjQ8bZgE24kLRbg4LoAxdpyJMhF7D9Wxg9RV6xxwwwDA9iGpTy3mKxXkpJfjyP8k6DgHkPCYFSWTAj",
  "key17": "ubpsbNz3WG6KKmjuWjdGE4A51zV2WgiAwciRFaVLS8rJDD2VnRY2sG6uPkM91NBRdtKovMes1jMoRSyaKrJ75sz",
  "key18": "31rFUAFjPpqD6jGEphX1oN7zm7QhyGchSgjUa4FiZhEPTssmjnU5aKXJNNKY9WAsErqmjWK63eSh8KZ8dX9a1oo4",
  "key19": "1nBLNyDmYigwBHtGJXnY4nXGmpTkeVhT3qwNh4sjL498U9GHphVcdpAeGqaw2fHRtwx5QRdVt5GwK8qUK4g1b16",
  "key20": "5EpQF6ninV1fkgCfUTJABuSTPsjRoQaRzRD9zV4SGM76SbnQZxeN5QKpLHExTW9C2zxfLzdhoLHdK3Sh8FsTgQMw",
  "key21": "46D2rVVJJB9SyXnMUPqsqsDE3nBjyMSWFKiFzpMzQe2FZRWbREV43Un7p1Wfgj5Lp2EQUYs2nknrTvVFDzbyuJAx",
  "key22": "5Tno7jPGB4pePfQFKCEHDb8sQ6UxjKhF2MDvPmUU2vM6csVsSX6AhRu9vrL2WXQmoesCupjGB8yWQaYi4aefQFt3",
  "key23": "3js14J139KA1wCrsECQCvbTT67kQCw8fcTWE3dGu6TzzjimnYWJGh8sayPRYHMkLwN6HS27dPoDLgf2e9bFaziHf",
  "key24": "2N6tTUZp2BepzL1TuPSvZwes7MTf9rQyexqHZC2B5LtP8PXbn9P8jECREBdLGZsv5R8ErVehNSZtkgQaJ7PWfizo",
  "key25": "39fbady8ZTRZt5NbAMHioFSXhbYSAffv2bb7M1bRMZeYvcespsX1kccuEzkuKKn3eBSMkAUzNkCgNjgKPsq666hY",
  "key26": "2j5idks4LzN6JiqwGXL6mCgqujDrDC8eVkngXhVhEdpR4QB9RUvYL2X459K2ryDxSwMsYnc8RaYdK2RmpNKtxvkP",
  "key27": "2v1btEtxS2qhyHxyVzYS4GNocxB6XJH13XM76xSGH3FKfhPyNVCnSns4PkHef47XpBNGZP8vHUx9VdfTncy6jK2E",
  "key28": "481hV1kQDsYboDHnekAjaBUDcjGeVAUtLGMPhcxJBTuV8yr8RWc5ib3qFGQXTPSJzAyVEerMbu9snmqgdBRon153",
  "key29": "4VRDhonikyHZsDAHuo6aXUV54haY5Diu8c7w9Lc7Wi4ZpXoGvLT1UzCMbTukbtPuxStwFQHnuCatm8qUmnXQwQFz",
  "key30": "3kwbQ8mUJUVwXVAgkxc5U8rTS5D3h3pjAmAktdkBSKjmsU3WVWTLjDxNgTwaCoo7NoiE9xssA357G2koXWteoqkP",
  "key31": "AoKqioN33VxuMvAP2meNi9s25XjKTz3JshscmYemVLteciaSsq8GVpGfKaqVKoJzi2NfWNxQVym4ikCMNQbnLBr"
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
