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
    "2nBZGiVaLTUxXtMEet2MYSqiFMcDiPiHSfYZASdfMdkeXHxyPa4PZYrmPKJoeHrDKLZGjcyXtf21MoFsszKRPFA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QLGhrUqXyzaDjHaCYKUihMLwEMkBpmnJTieWEZJrLcAeAAuHYSV7K25WNpdCTAmSkkqaadHZm5teGQXvLg7xoS2",
  "key1": "548ySBb8gpEwh1ibvCeNqHErMZgmBnZk7aYuN5XoTzVTD6Z8imxECSZvGmL9rs8TbJxHLu1NDiLHzn3XgoQ58H9o",
  "key2": "3pRMe8K5d75VRvCx8KhKA7jBuYwAUfhGTtEoygp9YxckZQDNjNQU6xUEGNBdNKuQ1zpgsqiZTMyaCxhogTegBtV4",
  "key3": "jr7Es75VGP6Vj9bUs2rMcZKKv3QXrmFsdyATM2B54uSddsnjHGYbGDTCJgHfbQC4ZgsRSnMHPZXhjUiDJQU9Utx",
  "key4": "2aAeY7UdW2fWavoswgu85GLnBM6w98Rn76PDLjA7eLydg9HYjCzBU3xqhjNVFYuznwpUR6N4etrFDQiVnzoZwGVk",
  "key5": "fUzQCm8fatGncsNj6E6z9n7fYbKBYzz6ix1Pf2auJSNeFfecgKD3DGfptnUpq8386D5mcP6wmSJdHxRrCsy9JRi",
  "key6": "3m3rxDtJTSvTXgQ57TytPJPd7cbDZWDKWKQ9WMNMRqKZYVkaNDsrukRgRpKqaNaZc4qQNpDHh1TGAjauVL7GtXiB",
  "key7": "4cGe92nz8JrFYDA3iRSFjyQaSetxG9CrmSWzb9m9Niojiabdb873ru49aYBr4RtPiEqPZ6TS86Bg4iehztdARA6g",
  "key8": "2XsPP5mpqjrs777XAcnTCAeeR8uT3sqZ1fHDugJ82kx5U7KaBva91MTKuCZFXciG76fzwq4NMPRiXC569x6sQvVV",
  "key9": "3BoutWVaBFbS99zmSwkvCixQYCr4TnwoTkBrw9N7WwgqqCnb7d9SeY1AFnSPrVxn3BEjjupk8LermT5ACN3S4XHM",
  "key10": "ZxF8MjX33JA9vDPWiEwwijiwut5VojSTHxcqgqXRf1XtduHnfBoy5QEBdii1FSjAUYmVw25NGZW59qsBe3JPUv8",
  "key11": "4UUrYhj3hbTYYBDDjGR1Qbw1Y38RaK1WNS8nWoEDaXBNvZ9SUqoH33AewG2TRSKksmMeyDKWxK8FBKCd6XWT9829",
  "key12": "Q3kaqWspmmhtjBvjAMx97KUnoEW2q1fjwA4T4rdVtHmBqeRSzpMpYsNPkBEh3QmCuhVVu31BnBdRkNFvM5crjfF",
  "key13": "4x4RPmNeARq1F4jh1nHT5esBMPGGqMpzWFvJfVUJ8qg5pQQ1ebxuiBL23n3jnHMhLnY3FansXKwTs9wMfV6ygj3s",
  "key14": "3vTrwEUkQvf6zrAUBA1erzSH1HcKfC5LfBEUA1ZipWsE9vPS41anj8okE8oP1TuN92UoNvFjwtMSPL2R7HukjwZq",
  "key15": "4BZntmEBzwyphEfZoeqDnyb46J5RujKSNFuWmQdhCjmpAvnoPjJqT8FMZvBw4yyACdCQrWdm3UPTXmxCkaZGBAAg",
  "key16": "53XbU8tYbTBZs59rMnps46foS6pjnp3VZ3KXRpjBJpekqTrMy9f1QpJkWpbuQLvzQ52MaJN8sithpBjKF249RiUV",
  "key17": "S8qpwZdhEfQsCKfrdc5tzLEnAj3qZGawzk6NSx4a1PPjjtmJtZNiENCBgkgExyVtwwQ1b6rk61wEJf6fkLM5SDW",
  "key18": "5TnLzsaG9jiF8QmiP82yZGERjA2pHsZJA5JAQ6ew54YM8xfVTVSpg3BUb6ASGeDs3Dc1Q7XwCRjrMgpZp32GULXj",
  "key19": "65cYp4ncH1pM7r6PJcisUHoWm7RKphsn3qnNn3wS5AKtqh74BJsiTgSMH33gjjyFW6i1SxC7zpRrFf1gMrorPmP2",
  "key20": "Zxva4mZiqGzJ8kgfr4NjP4C38sAtqe7S9PvH8xYmEwjMSMQ5L5tJaFCxXSQFWu456QudCu6PWAeoDDY6FSepueN",
  "key21": "3JLwgZibZrMCttVXDcQCbiPPQw9Mt5i2jUTmG1GSqnG7KTxCVXa7QB1nvaCyDQFHtBGEYg2FnAcPRfwHr8LWa9Va",
  "key22": "2vqm3A5Fn8hBkvfSvpi3wiKxqfHPmw3GHppaEDnVg3TcQgGsAwLTqEy68nZuKTaFgqev3jUHwAtrra3r8iyJg5nE",
  "key23": "3kAQ4rKqUPVN14rAtCwyhNU2wPhYi7rKzUxfNmTXYoCj6N2euGvLMMvshZ4ksphgUE65vZDxgr7LBxkzv7yG4JFM",
  "key24": "3hqxsLDjQvQHm2TqecfkafQ2WyZdH79db7AtXVuSJCRyJDdBLwxGKUyZWEb3WnftqboFgiEU9KCNHXmdCwcBwHbN",
  "key25": "5W1nJm4hgQRGFEHzCZ61C5QhKg23WcfdVkvTzLpptxhMkiQ2VuHrKiqNXzHr7uiiC7PQEmd9f1dj5gBLydc9dH6N",
  "key26": "dYoEtc6jfxFpdMrr33va7GaRWzZ6atpt5kNv1jN6YWPWvrbJEVsE43DhDKnpRAsTA6KoWssTx8cRwvF2ZdKTaQQ",
  "key27": "47G3SKtpHzQ9E5KsPmvMpHxp4D5cjHGPWMR9KaZgCJK3U1SWnoPPwEgCGoM7qppSLdXcFwRrMiNj8y39puhbj1EV",
  "key28": "4KinsYjHBMGGQcJNuteaAgkFSSi6si7FwJyjd2fSLC8wr4Qd8Df8tvHZ4bW5F6QF1jbnSPhCEznPBxHuvfER1zee"
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
