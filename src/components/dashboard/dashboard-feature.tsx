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
    "5TKsqcmdCdNFoYpvoHrfdrDsyKsckp7eJjVKfzVB8A1gBsUExP2s9dqJ13u1zRFQaKURPr8NPH9Ve9XKAPR3wV6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FPpy6qjtuZ9vNHEtY5R76RdZxK1U9U41i3EzzrmXn65FNvjLf92FBKqFVkVHdjnNcL959Fb47mJc14Kk6iX5VaU",
  "key1": "HEtEtac5grdbZz5CAqrrs19US7WFdVLEPbiQb5cdhojDDHs2KNC7TtsVtGTgp2SeD45PooseeyJcgt54Gworm7q",
  "key2": "jPyc7wWxwoHCQ8JMX1EYryKxXa7NvUbkNp8U6TW7LMSQmydaLKn2phEjX1RToDv9xomTay4LcHbYnvUhyGFRsaa",
  "key3": "5J14ksnLPZFVuKngEUzffqfMpiMkKxeaZZg2b6wNHQNedWUQiSLJn3PxHQ6SK1Qv1NehovyoEgbNDZwuxYWsWujR",
  "key4": "5xgjudzojoTbM1MtFrgCJBdLCKqDCvAUDFJBWnoMmoZzzgiuDqZgyYkdhoBzVaqBaCYinaCYHQBv7Mx6RqhAxxaX",
  "key5": "2VnnZEy6e4dZNhpGJW2FMo8bexHWxVB5Y8KVbsPYTLhCffhqtWXUpqyPPTeWF9CWRFTFYDyTE4TAUSpi3odA9qyN",
  "key6": "2qdu2xzga5ernpDt6tGM5rxQTniZnN6XtkykySbJwzpMsv8SLpKPbHSR1tykQXp42n2MVDZGvMqwH33Zu5ht9Bea",
  "key7": "3CFxMKUrBEqbGRK5U6owRNkxV9YLDAR4fkA5y8t6YLCMsPyprkZjEB3hqZYQyGRcoAzBRhTLBAiTHtzEk25zjt4r",
  "key8": "241hFwE66DNdGre6RjPyqE3f3jCY4SDc5zVoV8Hz6DFQEZ5UuAsmhNaeBgck1tohxSJbHb3C3RteEL2G7SEhRaCv",
  "key9": "5yWkQrjbwvmovPAnZMvJfRpTxgabKnCMm88w8AbQv2v3vt2yTcxQA1VnbfcarSB6t1K8qPFjqTuLpUw76GE114ZU",
  "key10": "3nUkyCfs6J1zjmXCakirSoWVgYFpN5KdZeDJsDLmg7SjdDzchBbUQSPHn4Q8DFEu82xqqXcPcXs8kSk5KxniQiHb",
  "key11": "4MUyum4Trm8fh9jqJXQUu9XJb6Pt3LnqwZ5y7j6xMQmtdgyvcEpsVWVHHJw4fyF3e92tgCDGDvNojD6ptsmxZKCF",
  "key12": "2rDNLiqNVE4B1qqaD7kEWqjutpsWRYHm4Rc7oDjQQK5RzrtykLxYjnm6wGLzc3JkP5dxDPGTvb42Bre6UGKFXu89",
  "key13": "2qcwkTrcHz57xAErG8BouHJU5k4YkA7vAzweLPU4KPabm6R7WKJnmdYCpGaJdsHQtU48noUPJ7Nam4Vjj2dH19q5",
  "key14": "MzcDXabaNgBvoYbEAsyPF6xyHYuabLpg448qpJD5V46nAAFsMHvQMSpfdNnS9cDEKUeBiZTDwTePpJq7FWpy6LW",
  "key15": "5pFN9MVR3dnJgyUXZV9ZbJutzujo76gywCZJQWn9yX9bKsqegtvrMmq8u57JHSTWwSzjZvLtqjUwQZzMKVV2iQEt",
  "key16": "3nMwPXHtpJ8QKwM8jrGuaEXJQSnw34PkMS6qh6BAQzJGhhSXM72hqbNaYggkSswKgQX7n3hxQNLsBmd1pQNdTqGv",
  "key17": "XWyaTZSZU41E78LFXFe4RhMvtjV4Pyc27SmKaDHX84R27Lv5LTTo78NbdYhQXjKpafnjYSvN48naeE7NuMv3ULA",
  "key18": "4UE5WMYXGgtGzWUEDvJ6DCoxhLtvZmiBLWcbrt74wN6qfpywM4GmDBMeBh9PR4UBfadPhPbxVBKxvWQccep24zfN",
  "key19": "4AL2heNRgAgccVuJndFBPxd1r5ku2xwcgxhRMuCAQNJqEoQqbDyb4wXpCPa2zKNKATLemhYVdpq6adcJmhJevSQw",
  "key20": "4rjUDvFBTmr3RVdJHtC7y9kHxrWWoro6CH7Z9m3vXukzeBk1c5g6jTtcPMHT1E432xkKmt5sGtM2TfhCtMwygpjS",
  "key21": "aXgSjFKNRvkVg4u1kpP6h5Z7QAEXJRwfHuLbS6QZZXemmLrQ5EZATvPu4i6s3CvgaYvBYFzhdr3dtiHX8Xn3p9L",
  "key22": "hY9EzAsGp5pxgoTnBeNGnxPp4MwHWeHYYG1BDExX7i1uD8bF1a2vwmGYJXb3mUhFLQxr3pEgM9QkjN5Njvkxmp4",
  "key23": "52e83vg2qLLane2ZNSS7qgzFjBCCfVct97JSnQ42Ws9j5qKY9NF52zPc3pdwT5wLmbZ7pHcKbQwJkk5wVpbnTH5U",
  "key24": "JUuounV9aaw8XVVNAq941u5NGs2AR1K1dPzSjKaLupLZWrzkci75Usvy3FfFVAHfwqmMNj5fLbTYTVcfrHxZUmy",
  "key25": "24vNcM518Q2Dju8JubZjJh7q8ZPZVH6n6oWiHTFnTU5c7GCeW94kjghKzon2pcwTb3eS7Qm9MPXwUGr1zzCUuX7z",
  "key26": "2KwAJy5X4zLuDhvxWPwQq2fpyFTsWwwHmEVgLvMrzkmHy5J3R7QmBKxSddKHbq2byfUm1Yb5YSGYYXumgEZZ1M8v",
  "key27": "2Ek27fAYSq5rmH9JMGc56Jh4hzntgP5TCELJhmc28poHJ37pUNXHaXzq8s9KSbPQjZmFHWdHRJt9Kti8QMZfxd4t",
  "key28": "21D3J8ABfyo9puMibLo4WMT8XPrJ285AAGYp7Xjzzb3me5rfsCMMz59qrdciH9bW6RMQDZvQNMwpEBk8dMpaQs2F",
  "key29": "VM5BKba5HVv5SbV98RaYMkTyxWEAzSJ9nUZARns332Uhufg9WhDzSbEKdZAs7cc6m6D5uqPKw5Yhhkk8AeH4vUw"
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
