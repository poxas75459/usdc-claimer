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
    "o3v9k2yKSQi2yderaZNWSRaKk8xCDpsQ3hDeWZqQk9k6NX9kQGP1UnC1DfcrgnYCGKsqZfZHhVVdFVg3Exh8f7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nL2YY82WiAKmyeY7daGsQAPRykv5cYvCPvzQ3WinB48AnBeQk42aXmzsMrRc8QBQow2eThFkMK7BiV8bvVuyC97",
  "key1": "4ocxfCPeo5AHGek89vusBkehiLygtRwSGsqDDgZ7ZWnW9MxsJVnkAyBzF1JJtXxsJY8NZYhAYPyom4guCBWmD3gn",
  "key2": "42KZn8SCuHUBkK8EwBs1C4DBnmbWU3mqQMgRKci5wAkZ5byA5ccvj9CaPsRD3RtaAcswTYxTBtEusFoU4MkJQVgi",
  "key3": "4aEHPKyzuH5juTPrsyviQqRuCiFQDqt3MGBM2cUpAzi9NEu5Zxgqd5WYDUQ7bPVuTde3v1jRz2txHKe4W2aFtv5Q",
  "key4": "4RW9XD1VcMTHnsxnmnphHf2iWv1yBfUpZYgZ1E1HdCgjqcWuUPViqBeGJicLZ4XubrVYS8jAgHYxTdezd52YN6aQ",
  "key5": "2WgjNTc7FKYzAkFgdtrcnDgcZH5hsprKuWntZTrqsBpKkdbG3C3wFPWZBudycqg413axDyQayBrYRWPKvoppNnm7",
  "key6": "ZRHZ75vfhRUiKxnL4uhYKrF1R95CbLv7Xpgbyc3Zreg38xTvmtQygcVZmYS5fKt2zDpeivd6N4kLffESeokg7ic",
  "key7": "234uG8LSbvXFQGx9BeHvTqeojpE4rQ1PcnSiDPzsdwrkYPFC5xxG53jHygcowzMyrqXGA9tB8Ddbwi6TevjWcghz",
  "key8": "xkyZfgFGQAbpLb5XVojZM5cHYD2ggZEa1QvUJYnU7tuB9L2Pjfexe5bntJogzBR85vPCwQVHWg7NaRZx8PxcuDw",
  "key9": "3vG7tHpUZCk11QDfpdMesd7jXEsfGqJibP2fYD7hRKxcyoJSbg6DJUYirPRWnfUfU3TSbTYauKXRs8t2QAP9TKE9",
  "key10": "3Jh1bew4Pb6NFhN95hahNWLQPHqVHbSADU9ppEzaubXnfTWwNe6zx86iWNBcyemnMeKtB7AEjLzTyuQPLn86H62j",
  "key11": "64LpSbWKg14TZrsVZpXXH7Hp52yv435jsktjXreD2hdx1MxXHdLjkmx7dcSYW4oiiT3yx1MEp168wS17zr7YQqS8",
  "key12": "4iVKk76teXmq8e4ru5VvnnUJvQ623UhjeboFkP7AF5Be5UjDaVXCVVRF3wFvsE82R6DBuXHqSGCFQ6rmCR1t9Snn",
  "key13": "4oc8RKXc9rGqxWyaK3rr3iNLoBC6dL3gmAAfseTc4cqh28pWvm9V84ALwaURwf7haZ8KGpeRVgDphHYtyJe78r17",
  "key14": "3X8BtCRAHjd2twJ7mqR7cTZf9yqpWdRaLVq3eQNDnaRPKfrz3fCNS9qPzd3JnhFqiprXVhjSnq7YQBeBUwNbNpve",
  "key15": "4XYDSaHsawJBt2QrbRRkt6zFiyANQFqzd5uRX8BdeKG7eSP6mgRpLYhgbXq9P9D5GZANkzC2uvN2FFigyaivUe5S",
  "key16": "4q58RMHvxRXdVEeB2bZ3nkpqxnQVjbYG8xLJr7sJn8mUMYn9LTPJzoBmA15C4xp7YqtaPAv1kJoByyPBw5BuzMax",
  "key17": "468tg2xTaWQCsXJLgpPNKqP9pdCBzoTzmXHqFWJvnzNjaYAaabJ69Cn2sRJhRSTTTLhkk4aryP2h5CKEM1UHA2sh",
  "key18": "4UVbJZJRneaDwBJhbHnco6oxJz6Bkhtivh6dF2SQH5Zs3tJqVDaLwdgJpGVAZLP6QoMeZweH91ozw6tz12tBv4as",
  "key19": "55KjZgN8MrY9jbf2cvAgaKCbjj1EDJN8DvPZ8cHB8KQuuDT2EcbXBjiUXH4zJAyPHwn5aMAFLNgg5oicHVsYebwf",
  "key20": "32W8DrbKPdBhw8kCmu2GLMJk2w2XvYU6ensT9gy97QgH77Q5ZGFsoLJ5c4F7ersHp9ZsCy9DfqJAPBdsn5J3JwqU",
  "key21": "2pBFPHRg5c1zavH76gY7K4m52yDqJsvykZM33cXHKTiqvkW3VoNofLAmoFcvt243bqFB6hRLGYkPCZYS95y9xPP3",
  "key22": "4GkWqnt3DVXddXuNNGktGSzJh3PvnePRKv4DstWDjris4Nkaefs9HncP41o6ZeLyoafRbxsyUUbnHyjpZX2wS2WC",
  "key23": "3vTdhgxraKbVg4CFedwUBbRUcPCrAja5GAYHQmKAqxgtHYtk5MxN7FD2fUZTWdBLumgoTPTQsJYYzH3bjwJqFXTp",
  "key24": "FE6GuNQnyCAEvy1wiDKVJ2MrZ8chAUNbsWZN6YtDLXfpeEKToYCGT1DWr4WMrwxso6LYsdLdMrtpK7dTDN7CDsZ",
  "key25": "5JHXFL6AapphjiycavKiGFFC4LEH63RkzJCdD8P1d7dXCwseLqwvKWfWCfb3K2PHVoyXmfA8soHBMBfseniXJA3r",
  "key26": "5uqGnr3uA7EefHxn8gaBWhhT3wdej5ZwNRwenTWmLtXxAaqqdB4SQhKuTaj9mpRWxQteD4VQy5gKUvfpBubKmAin",
  "key27": "s6NaV4am5e3LnbPTGEYBeUTpLvhhg7RPq62w9VQQboFH3h1Fr1ZK2GPbJpdRxW6kdxe296HqHHe1FY6pKiWsa6L",
  "key28": "3G6fYCv95rkvncseUL4LPX3L5uhhy3qMYdH2m9SJDBBXqFUJLEqLaGax3EttkmQT8DmAJMmZteoFW4HMKcjuCMFq",
  "key29": "2Z4oZZk6zTQgaCpwuSKwobAb8qAQDXPTnogepNatuUg7ixHcHcPhD9tXQW8R8jbXMZ9kh3paYCuK4PZTSm7DrAhC",
  "key30": "43DeB61zC5sLAeq1sHNQ45EDMZJvRkB2DArd5X8nW5B93rdVB3p7ccYvXxcnMzyo9QrsRqtGXEjbG8auce7XgY5A",
  "key31": "2MxaA9NM9QA8j8crkwu5jFp6y8MRF9aZzZtzy1BVYdcmAjGnSHJ3ayssJ6sUMRU2RqDLHne75bx9e8gauQsTVya2",
  "key32": "3Ppg4nnz8uutP7YpzVqK3ZwevJhAgc1AMRpnCBUbCYuCrZ3KA3kkAvfEVoZuVhpf8MhWqRmHX7UuH2LAJoHzCKPy",
  "key33": "3xZTRwhy1kk9JnrYvYXLVgVti6KTtWon2TfDp9saGgm3QKC5EvTwCnMGHbBjUwBq72WFf3p4bXMmYNa4tZUruGnP",
  "key34": "5f4Hi2RRVctKR6yPcbCwm8dPSfB8bj9xrRy3bHH63FRx4rhcnARqnBrToEXzgjdgy3uBVQRbRwycZhmDxmTpJTEy",
  "key35": "4quWuqmutemwwJ11MrGHcNCMzEk28AUk8ehEYAB49VmDRpbQZMG9EuwuWYt9NR5yYUVgL8P3JfGTrCYc8LW14ykQ",
  "key36": "51wKAArhDT3NajF4sDkzsXxnviH8dMi5xS7HSYjb2nV8uymnuGV4eZvZ18sFaMzyZ2QEUdVfQoeKYKcWsNBnPVMk",
  "key37": "3nvzFw6oHPc5ZBBwMpQyFaELwHondeb7wvLaZEZYnEhGdSt2hwKEVBxFMV6eX36VwPoHCWuPMDR6WftHxqYFSijZ",
  "key38": "3WgrA6eT9kvg2gqbN1jz5VFZTdAumLVmr56eoSd2u7YMeFx724BqUxUfUcJ2AJCJd9zyqeBRNnwmHCXVjh5xsTKW"
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
