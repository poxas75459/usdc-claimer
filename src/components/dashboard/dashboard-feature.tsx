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
    "CwYHkcubUNEf3VkSsSUdFAUk4qUhu4t4LARDZbq4WSd384r8AjHquGiRmKbsiv1KfXrxmbDwRH5ZUcxiNqpasQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6hYMTnSdXMhRbuKkgQkBj8RXi4HGKTv7D2fVJz1oLZETDdpawn2pwBSKNUWCidzN1f3kGB7oPPHMS8C842kRCG7",
  "key1": "3pMxW5ViDmwncC4kgC9Zs1p3HsnqdkKKQgsuP6aCCXBPBJSUh63txkGeaGqWxaZaEUJTHtS66ehPMhiz6sJ8Pfxq",
  "key2": "3YLjr4dEvNFcAdZwack7UGSdBcMukaJwBUqKWTeswFYhP1SvdQMteixjXN7a2iL4cTVajQr2xdN8U6a7qxWwQC3v",
  "key3": "3YhuoLcjZnaTuS3K8FUDNKfsY4bj74BDWLjuCXW9GSbT5o8f11nCnSSnUqC7pQiTZFABAaVPzFW8hapa1U4UNipb",
  "key4": "31sXZJ544AmtXGeH2oCRmjR94ieGSDoc8hpmmHcpHt4rhvYxAnPqZVCkJKyd7cg3vWjkxqvKVZbe7xqfzowMaKeD",
  "key5": "5Ti3nmADP2np2CaDpTjnBUJpHZUgm4qyEdrvfrXXEMx8uE1sV6h8UGoKnpo2W1uk74jPXPE3t2Cq62j1pxbqAniM",
  "key6": "492uzt52epWMe8rLQyMUy4K57cKSaZRXevcC1upzYkUyhhPjkji75qfhfHX1JCs6h3rrizCo8mP1anuazz5aAMNF",
  "key7": "5vgx1oaHNTXjMT9uvrQ4V7t1TzLhvE69L9BcfGXTgmXZ7o7h6iT37vJTLWzgQciKm1LJtaV2JXMZsJRRnVvuFBto",
  "key8": "5pCXrErkJziS1w1ubcnC636z7j6mg5EJi4KB9o1DvED99aaFUSKjfoyaspqUmJZrnXtZtkSNfBfr6QhBFmxV5X8G",
  "key9": "4wWXNu1gen6bKEXgKUFUpBTyRWVphwuvXmqor9kxHBnZs122fx8HKTeT7tdfXnHytbcyqRSBqqetYLLZbbDzJvBG",
  "key10": "4QB3u498STmry3oUqJezduaRMiCYuR5dyB2HcoSj4sRRNjrPi7RxWLs9xDxucUtZ8tX2AU6jH2YXSMgu8HWxLVrK",
  "key11": "BNCsESJztSunbMnj9uoFJ7vwFGTr8BEn9GSE8TsmQS1yyEnfGS37WKxdiVYJSzuqZmvngmaQgQrXhSWcuxDoTEE",
  "key12": "31HWGsiFNfjAfsShozgN578dZHxkoTgkTYBsHGRVzhG6bFKX9NxmFiijSus5YhzmwdiN8G93a1Vg99WmxGMVXJhN",
  "key13": "5Fx8E5KCuNruUQmCvcwGeoSuYqMpWGn3XxPHgr9QPFyN8H8gxgopwA15jqJTrFhUJNXq7E8arNL9YjRJfW1ZkFbB",
  "key14": "5dgvob1shPTGXm9ZmAhhLUx4KWQmqyFpVTCGRhJPjx3bBzyZjJa5xK9GF6gNgm3gkkKk4Zzof9o25eeTEKoevs1",
  "key15": "iL56ezhh5pyNPFaNhYm8Wd4aRNUXstFmdkXvANQe28FxtcKTjhQkyGYgN1cyHJxLQEdHgmkBRs9ZnKJgKbd8hdQ",
  "key16": "5rn775vHnXWsEUL8MngeZ2qTQARbcrt2AYqBZ16PmxWdSyQAjaq5dfucuGKBbiLqUnQg5wJRzFDk29ZTa5yoZPMT",
  "key17": "2k9UJpWdYMhY95LNY54LjHQZxWwnmXS5mftMQ1KBAmdb34kaMSK8BgLWMNEkmnH2vvXtxLbknCfaZXTqqXsm1SVR",
  "key18": "45XUsPCMdCQdZi7ExdvM746Qsb6oYU69sGXr7PgoqWXdsuadYppSURJEx86HgoWkW34jbQBJPjvGG3yP3g4qrgSk",
  "key19": "4df6Q3rHWrd7vXvVpdaq1jZnEcAh77HRBZWAcALUU3HvDTz2cfVthRyxEuKDGVVNYC853pfg6EoN3wrHFqhjqCfh",
  "key20": "2N6EWkoogyuFdv8A6Pfvy7CYubgk9C2zFSsa9UoE51gRuPxHmkuRBpxsE7KL71F7e9dEBa4DeMdMSSEVUyumSYQ5",
  "key21": "4wwDfS9vYTZg62T5vrg1QAvjQUJWsmv1QzgRYJNgqi1ZcoELXj3Myod8i51xEbZQhLYdkJ3anv8GtjWSCqRTv1jJ",
  "key22": "66FoRBjar3Eu5uKKxdrMcskaRjxAxe4uPQLHyKhbjxYBGEhxMhquH6ourxA4e1qJKPnc1LHSsw3WKwTCBbakzpCk",
  "key23": "2iqgF6k41ep81C2UkrXty7hNSB4U7WFm1s95cbWGcmGJ6KXFCh8dDTWNUNixJejdeyJ57kbETMr5cQKsGY949ZAQ",
  "key24": "381GyWt4uGhvcDrsUxfQCL9J2SSm62V15S1nKAkcJSHLDoviM51GVPrt9WZKMxiVEq9bMvxyc5BcKZ3ooR1kUi1g",
  "key25": "hangvJLeQfrbG9N4kXdNVxJrNUdMD9kwk9sYioYAsPhjS6uJRUPtLiyri4MEdkDYPFsqNHWULrcMZx3HR8qgV49",
  "key26": "4CJUj5dkJ5WJ4tumXEEGB3c38wV7bYRVLnku9HzpBYVnkkusxJfr7QLncFvcJVxXeGpZvdu84RvZAzGNvi9Vomu5",
  "key27": "2Zm2wz4zMkgcyTEJiQsBSiRzxkXt43WiQCeqyVRzQVsFghtjeMfQvxrb2vXHWBwew8Lmad37gG87QWonqQHvhwGe",
  "key28": "kdjP3tpYYP3JNghxLzipbvYdvi2h78QpM3nybZKzfNfpFZvwU782RdaMJNV8wRUUnAFeeRL5MUAeBPeNGmwn4rL",
  "key29": "KEq3npwssXSdeNK3GrFQH9rcf8tAssxuBp5HhmemEPWb1kj9d6b6knWuagCSB37GwxQAjRdW6CJNRuuKMEMoxwY",
  "key30": "3ZRbsbtxXTqes86er33HZu1yPnTit5oEqzyT3QeHzVKiyuSFqbxBuzMQ9aBp6ZmosZAFVntycAo6M3oXxYAJG4VL",
  "key31": "1qkGvCf3Uj2odY4NwFNPsL6fa8Q1MRKHok4EifWkZZYj4Uz7Y3nqiMwEZGLiBtrMtAPAMkUGuyY1YE3URh1YSwW"
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
