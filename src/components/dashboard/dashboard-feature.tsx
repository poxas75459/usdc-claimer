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
    "oaRPxj6rxtaXZN52KApUzPLz6zjvJoHUM97SwtxzSepNigRHBLALe4er1XQBtsAPA7gai5iiPTp93wtgjBoex66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ZNXEiSxvNTfTF65Pj6Fx2bHvyxfKwDL782PJLPGMo2CrP6xpZ6wmcLSu9KrmyVnxzmMk8Qt2Hjj498NPaXhmjV",
  "key1": "2vp6beEWtpj4dYnsitQbmb5UdCUT1HwaPRrE1gqtZi1wi6Ht7DD9T59TvjcNP9sJAgn9tqJvZkKFrKnhA5us6qmc",
  "key2": "4LxZkjXReFs2YzX72tRRtFNLDHHEVh3yLWGcfqhNSdAsGtkxuJQNR6Q3kWqhNt5bhNm6z3zBkeiWzVNW3wpmAigL",
  "key3": "36jBSYbDAW3oCpsrDqNHANKeNGBThpMz7bwpco22Ga1QpV52dgySGgCCHtgvW3EU3Uw1xhVvej4UMhPeb2z3Eu8n",
  "key4": "4NMi8UjZ53KeoUjCe7v3FW4i4zHdyhRUgVduPXdaDUJNYwWccXDY23Wm8baF3Lq2tG63SiPLqWSVXA3aGWGf4XmG",
  "key5": "3Dy95FyfKCeGXnPHRmqQyfmvUhc1cHW3Xbmh7Nzk5wosDAYSVpLjYLK893jC3MWmA1E9G9MQdyEkybEBwuTtRhyk",
  "key6": "2Www62Vm3PP2R26HfPh8rnb83V3TBWrUE1yMgXTNXgdhpQjufocw2oKKDHcSDrCfWQD5oyuuxnWvWy5mqnvyxibf",
  "key7": "5KaEruDC3WLb7VTfSfXq4UzUyeqagJCLD7WEigniJcHxnkEw1SGrAkdyFv2QU34ugV6MrELWAUYowaEnVjCoZm1f",
  "key8": "3bWuE3xdS4xzPZbimgUN6eCUsnopnX5GjrKkHsBAVFZZjYMFqGvyG2Zut2LwZcpEwFB4b5cpX1t9d1XyVWo7L7Ud",
  "key9": "UMiZLSHRedFiK9p7jyU52uEPYHYNdqPeqoEmiTWwtQi4uLPKCo5NXVQkJjP5nLkqWg9t9jEMiLfEHDbUsT6Vh5x",
  "key10": "56ypiaRcSCpsegCHuhpbEiCTg4fGeFKbHg5pbeCAYqGu3M9uUpx2rsD6sfk2baZkTQ5LrfsnJLzTeBrWMpJHhYrU",
  "key11": "4eTqsp6BM2KadpxBC4hdFAyCWrZB5Z13GcMfa4UfviBPBm7EnTSfERdATokm3knrJpLaALQ2M1gidVhqySia1qrv",
  "key12": "3fBqEK4qR4BGTd8DKp6yZdggMEnwMzgCg8p9D8jCdAYUbjpoPZfY3kKnSQdXwRRyEVZvYiexJ9qxwzK5GmRnNCoU",
  "key13": "3YX8VEcYRv8XKc6nCLxDWmu7wFnTQjrQT3x5a3Sjv5UTQiXSirhThu4TXWUn4sDh8wEug6V4BPk34PYF2Mnyp42Q",
  "key14": "2jnD2aD1ph2ckCecnkdoL9LAMwdyjL7jCgnWt9413wUzahaia3f2UYz6o4F46r5zcsw2Ap9MtkM8PdCznPNJrujS",
  "key15": "5SxxQMkUoswQEyk3f2v2nWF1qzVNArQ6rrNHhHegBC8cVPsctyHD9UpwTT4nrWEtFshhrpE5nmLmpUbzTReVrauy",
  "key16": "5sey1RdR6Nv71S8ecFutzRJfLixgQa36D5HTzYnXptN8g8h3FkrSAEtZLdFPpuavpKZahf9mWNBWqB6GHLNDLJiP",
  "key17": "38C24iZ82rqJU2dhgGVZy7wi1MXihs4DUBkwshJ7F6gt9q6QLTzPpBEb6Nbh5R4REi8ZS6UAWhMuyFrKacMqa2Pj",
  "key18": "5tVgmUQEsxP3Ru5dD7G4zAAygDUapm3fnJUSSpsJgvCJRuYP6Z4cSwMXKJgjXLYJoFYaYeGJYUC1nXhCcAma5ZTT",
  "key19": "2rPqKoAxCVfWbKB33k9kCMfnshPcmVUHmo7DS6uZbZLZz8UownVoqxAv4TXZLt2kxqBtpqSwR1odEndNj2noDxFS",
  "key20": "3TPWHk2WJmxhrYdgB6XxbNo6WDVzzmF7zpEw4FRvbb8rHJd1Xt1QchKv8Qex33n56NWQCjgSLKWX1o1Tqm8vTZTU",
  "key21": "38B45zMWeayeKp9UmM8NaqGfP1MQkUo9vVBKpmTSnqauJsWohZzgzvrm5HKi7aWU2usud6x2TPqPMv5RxJbWumt5",
  "key22": "5AtjiHTDxJFxhhvswRT4UPu5qhA6GJeQZEpjdurzXCAyfhVWx9ct8o97etams1LxxwC6wLau9FBZxn5swcinxFcN",
  "key23": "5ixyNvCqDfZrDwPGXj2nnetm8ZgykWNDLUVwSBip6pZx3VKjbKysykhRA1y4wrXYRAZCNNnoiNxN8JYWLA44gkGo",
  "key24": "Wan74NjEhgLNDKq6TDNpD9s4pgVVnKRRKTGt5yXcjo8rAaTnuGGg5rs1FoVgNedxPbacWWoqrhKRum3mnbrQ9PK",
  "key25": "3u39cfoqVgdhwHYXaD4kEnrPY4q122E1gtJ7nDnFtZtjhZ9nCLuK5b49VUZuNUFTCYBzMY2U5z829aTNHBDkbzw8",
  "key26": "4FiQca4Hi4fSJi7x3XindvzqBCcw2rsgKYJk4fvci8c75Nm9JouFV6bJJDmzDzL1zffvHJt5qPn2Cip89KxtT4q5",
  "key27": "4Mp4CabXUEy9M3Yam4TN5xT6s7JFYgFwTSGMwYrsbEBxPzPhVG1aNBPEscjkffwGUg9xG5WdkK7tVkNaV9538wWd",
  "key28": "vGzF31AGVL3gF1ZStPBYMDbVRv7v8X7m2QFtgfHDjzJk9mhH7odFLusZxEq5cZa3TeTD8Kbi2F4mFNKBZXJVMog",
  "key29": "2XPMnYZUzsAhVCxLGassYjAwdRDWkoxR88fTFpbaHraigYWM6MTC55fqRqU6teUpeQNR7JS8x4jwFUzA8UupCdUe",
  "key30": "5wyshwgsjckCcH9myC6QmMBhC2BqsE8X3jZW6rdVDy8eRf7YfcuGgFRtpfdhnTMuPnRvLujA98Buj9oCti4SxdEY",
  "key31": "47EcWUB57xwHR3oA8gCPMp79zHsqKiRR6na3GQPDs2QfrKM4V5fxviuieY4WCDJWQYBAv8Z4VP2kFNNJ37GFJs8C"
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
