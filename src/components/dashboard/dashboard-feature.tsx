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
    "3fa4mgcggmEbAweTZoQ7upZvvTsbeww7VsJsnJwrkG99y8ose8ZkxzM4hpbXGtropdrCsEB1W1FafFgANBtYHfqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z86bDFFr5v33NUHeZ2dasyJ5XeBKjqAqKgUM9nwxpJWpCCuY7ma24xEJ3cypjVy3uqJn5Gz2RiDpWrtkGtUqo6m",
  "key1": "3PXDiQesAFHwD9sHf6LVzKhC7jhYvmvPaR5dV6CUyXhfuts2w3eH3cU8QxFEVsYShptHzyzfJxvcygx8SCjPyJig",
  "key2": "2ob2jk2Wuq2af3bC7RKuhuNgHapmmGmwPCSNXpqGU1KpYwkzSZKo3zc12MyiuNXQ8DN6bg3MvueZRh9nBtZMZQD",
  "key3": "3BSmUWqDjBpHuRi3fYQJmSNLupabQNDgDKHm2vyTpDhcAkB7r2DnAwtBmPyuoVzdWzTbp2trmYT7x6qkZSS8xF29",
  "key4": "26u7VAS1FXWnc7fGQsQ7GCaLpAgEeTfFX4wkKcgjWromxYHYTVceScthK5vULiCsF1FZ75Nq8MHC8DSZeWaQiBgo",
  "key5": "4dXs9WVkrE4tJcYJFurnhfTgm82kmmmAnCx84oswXrcF9oyskYdDSr7fdgFwbPCbRZtHucfFGJxpMRZAvsdnwgCZ",
  "key6": "3EXTQNV5mCa92Z6xavvKf1BB2obfXW6ZJH1jyYhSu627TGinoTseAYMGF7na5NxQcGSiVkYnmh246yVcmXuSAemx",
  "key7": "5scTgg8NvBqvX8tmoCAfUDy5dSzes5at32Xt5fyiYFGzTDee7FHSTo9WCbecXqZU54u69zM6Ff5LcvGvKZzpfAZq",
  "key8": "41cuoK62U45XkJ5mJstAhzVee7eB2jnPTCu69bPbWnHVzPts8LvAkrMm8mDNjvj2QekSLHSDYsGgXzxjkkKFpPg6",
  "key9": "4LMiNdD9hNg2wCNbWh14m8PhrtWU2djfEgRP1JmmrXhuNeD3pi4PeaPM6dRqT97DGsVnBQLkoyKn6SPCY2LFofK2",
  "key10": "2T5oicFVxVN82M2ijtjJwQuiEvB2RhtG6RzmVj1xnH471WT3fHpHskooySmeU6yUZgWAXSxW5Cm2AXVrohBCqG6w",
  "key11": "CaH6NZWov8aruSqLGKir2ZrYfmAP5Gx6pzXGBmvF5BP3yn2LbZGmTyWycNUzkWipdsSYdEWfkx19AhCYVVsbgek",
  "key12": "rY3fL2umZkPn2cRCDAuR1wRqEU4Skcuju8pTJ1JewvnFd8CVetpNGVALDA94yMasfiU9teC8kQn7aPEX797GtLZ",
  "key13": "RiiR1APESBEf9jBQHE96kQUYyizHT4VMAMp8Ft8jZ3ay9ymMEHf9vD2zrc7PAELAFtLYkmReUMxYCQpySrfEP3N",
  "key14": "LkhyjyWhG4FL1WFeSk6iwcWkUPDMwJBfFZiFwSkswRutJh7tF6aXsoE19ZvFWweoD6KRFLg9YBdnn1xJkYRKRfP",
  "key15": "4npk3rEZ2UFaGSJNuwWd9PoFnXgeKN5aEDJtgL5T96QVPesxXMXGtt4FSNehGvcbwxVwTjamiAPJxw3GYgFQKgjv",
  "key16": "4HvaiNZNaXzRtdZ3oWzMLesaJfM6zp2qqRyhLmp4kpe7TW3hRLsZCAnrRXKq7e5nmMX7eYyRBThkUm3VM5JhYCqx",
  "key17": "2oAMPhBLJNQTaYR2DRppTxYEUGYAkoucPjFRdJtHzJYBhUHtdd3793xCdWgXBjzA2AJb3sgGZFJYs3RWiunPfXK3",
  "key18": "2fWt1xMQrsoexUArC5NvkXYzUhTkaFRP4og7kt9H6Kp3kQXgYvvhWWNweEmanexFdrFyerwbDXbXgFhw6fDhJjGP",
  "key19": "BRSu7VjjVMwEMUTht5621cTbXJi2MrJLDsNbfCup4Kg76xFJQr7vUeqPAFa8VikJbAm2w6PTcM7No4P2R6Xctpu",
  "key20": "48KJLKkGSD2izSMnNZk72tDxAbB4XCefRJsjnZHik5mpdSSoMA3REcBuuFmPhGaijojvzeTHL6hNjYE7k2qEE41M",
  "key21": "TMJoimg1byEeQncpv6uvhnqFjCqy9FzXsKsb6gF8GUepHuNeYhDzDECzaQB9iroFqkHEc1JDCPyjSbQ1Mm8xEmU",
  "key22": "23RJM4kh8knAuPdXXZyFs4tg1wAYU5asBxGH9PaH7tUYY1Wf8gUxgvM9oAfG93KaciACB542XCidpEpArBdGcDFu",
  "key23": "E7PG35nZnwzFnLQUL2WuXs711YnasGN899YPAFQFqaRthNoVNHvVJi4ejRvNcu7o3Aaxe3FDjVQ4DmAreQYAiDw",
  "key24": "xeZaiAA9e6yLJogTzy432GW9cDVFiaeXphie5hZ5WkEcMrRqiNiDFnFUmwdnUwWazMH7BDVJBwVUSWAUFFfRYNW",
  "key25": "2xqbmQ7d3K7radiUzK73pzXadN4rLv1PCQLYupejLrzVzTWu49NhBbZjr3QEUi3fQqQ1p2Jzj9qMTS5G2NaMUBqn",
  "key26": "293zAE8WntjgG2EjWvbsfbn2MMgsxugCuFmGUP8qqRHDeU5SEfNxtyq9EwadG9mMeCogMb6VsnKi5s8eXgNDfBxi",
  "key27": "3VqWCk8couCuJWaAfJsduGpw9FAK6GfBD1bacWZKgW4j92mTmHGm3KbrMuDGmTVNAQp4vEtzT7TtE7vi6mqX3Yxn"
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
