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
    "Z5ZvCd1c17zsdQ3CU11YVyRCCSrE6dwTgbDDU6oeE9eLSpF3ne3CXPJjGTW3PLSDhiXX4xycmN8AYUxsEXhrWAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CR6499bt115XZaFHerXB9QwxnF7zjxc3tKJQQX2e3No84nFBFTBCBQbQcFpGeHGM42CNodnLcGMZuBYQGLd6M14",
  "key1": "3pHwK3aCDURMPepyaQdQxn8PM4F83W7rVtcuzuLmeA6d4wbMoVVu73d91ZHZnDyFA1j5fREZCChCuLjjs4RU96mZ",
  "key2": "jg1nGKosxgiNaMqwq1tPRtS2KcrGi7sBEzWpe7wVQZoQ439tgbkrgrqwfF8MyhdheJFCymUVmSPXvU7dUh3V5FU",
  "key3": "5nYg3ZKm7HHDtEmBnCpbSJqiGar257obVwBUH3xaiaTkRrQEUf5Qfsd74NhXivbz8oXGqLhy7W5UDDsYHoGRkvLB",
  "key4": "5BKLnuPi7NpzXKZLkzN4Ju6Vezd2TgZKPkGQ6VD1JvDZmGWJrfHNJryHWcQij3L1pcytsHzddxf7MFcfNtJqn5dm",
  "key5": "1n24ktmRVwnzUHE8F72eiZEKeyBqrMsbADu1H2xqoEYKojmriaTNxhmoBFLfeRceaJrJMSKUXvkvpeSX8tgr6r8",
  "key6": "D5jdSvYHorvpsFBq3eZcWLKVvBcqD21u92Moe1QwWj97mML1h2J9gLEaW5eo6uMeSKdyUeffZN5Ljrdb8Zk1pst",
  "key7": "2xbn746m6H9quFYeEiWthVeMmS1X8UDVv3ccYTQ9eJSCgQE9VcvdXjaDbzpGdWfCXFgqwWKdcMx3sSWD85JbMf69",
  "key8": "2MrdT5kQtAYwhye3qyEmcefXecHxS2ax7yTthMxho4VfuUXThrZgNLN9bmKeY3xC68MQhnvW5VifKkTeZMMTvA9c",
  "key9": "kJfQdAvxtxKM3zyh9ttEMFCDQvQmMLfDvi5tkEf5J1ghBt7Eeym2ZmzL9V2npwtWsdjA2keXNY66Gbrmx77h46m",
  "key10": "3QGfWuMEXm4omEmmNRK4s6zakmNKUAqkvhyQ4aFc1cpY7bFvBQpTwBuUk5mxHpUfVkrE6PAZTCNVYGEngniGzLmn",
  "key11": "5sMhMPD1K7SZqcCLgtHvzxnArGCSQHH3nzsJQq2vpvGvZrUYU7wVDmAuJUyZsrym7NLb9gMyAVvYqma4WXfzzFiu",
  "key12": "3BsyKQmeetZ433iUaKNFR3pio8umBLCnywAKbBDuoPgFecH7ZwaN7QhetP2aPKfUiyVjZgCu9CLF9r2pV6K5dEqQ",
  "key13": "4XWUSgnaGqjUKmiGAPQ6txYHwYak6BEPfXM7MutSfRUpEHYCFgpvBs2ytBRvc64YVMZTgomN4JwWKgU1smsahBkT",
  "key14": "i8V9pJMUwF2QmgAC3v53rmzWTb3HXhRtr5DwuaBKcMggD3BdDphXMGXKH2QB2zVfw6Avi8womA9kzYQKepGYzuW",
  "key15": "3YthELPibCqjE7kXUmKGoDE9m1sf6y8KWoANUgyLfVgVHAonrHDxF8FvYMK22SRPBrAvakt37dridBHc1QX5Qj8Z",
  "key16": "5eg474pBqjV1otZDFBbxtoZjQHpuvxz7cqS42QAGfMcST7v1kS7hGaVB3SANuWSwAbCkhBDeN2FVaRPQzErtooni",
  "key17": "MxBQV3oihFGN3PQ3nE9b2Xdea7tfoJVGUHZhjgtKyLrY8212EhoZddTcJXz3g5e68iGiKemsp6dXqmVjrUcVveD",
  "key18": "4e9eToUGJroaZNYwrEx9qBowLoymah99WTT1C9cT9zHrrREebyRJgXDzY6cvb8FcrgGhcKH92HF6GzzQy6nNhHJL",
  "key19": "4whkTWCwYRz2SPAkycyKENF5dHieujJ4NZadUK9VVAK6GYg1YsyV9k8DGmbj1VLRtuWWMkDnWbaWZWN8iP4GseNC",
  "key20": "5MmfF3BJV84KLWGjeUQGx8rS4X5UkNzph6h82xXM8JEXR8wejMKowRbB4i3fPexoHdifibWkiTmmgcYYxDiaG6n6",
  "key21": "5oBbtmWUo1B2UCMXJFqmwyyn6fSSmdW6SpCM68oZhTayRaZTuuQJLe95bAM2x4PDqoNdJj1tkfS1TwcZjkxREuC8",
  "key22": "4dD5B2LnsJMWE6kW3GNCQiJ1GzeV3zM4SdVZdemwqEv1jMWiTwuJZMohMwNE9KD3wdFkjUcGKkrbUoRVQi77E5Hr",
  "key23": "2BC6GVinbwb8nXVjWtkzprHRbKMseNngaEbxPzDRwTTW4zcpeEh9Zc2mK7Cf5VpeF5DhGAKUa71BzuUgY7biWMx6",
  "key24": "5K73nWvyFvuWAZxtHERA8EHXFXf4FnrsmuZc7YgwygHU5XKotrtz5ghLHiPBabZ349oDACwTQrRxqDvfQVk2v7aC",
  "key25": "2oCgPwXzLermJEb93CX2NWWwhu5rGJtZttExQ8trpNc5siWrxqqmCkUN4YUyN14hEUZDE7RwV8JgbeTK36wHXNrP",
  "key26": "4HYadAo99HHr6HDF6uHt9kALeNwRYsKc7tUKMMbfbDDKu77EeDsXo956U1oe92vJAoLFxtQVzssJSsX4qKrXjP9P",
  "key27": "2Z2nnT5VnVpoK2aQ6GcCpgz8eXcrRn29trKSGN9AyyNDR6v1652ADHZoyfeGeTF4o7bnVDnXp9fpGqpGBFZJbZEg",
  "key28": "5fvAbX8xnUcX3QXFP4BRbEUdKzXn9jeVej749AYBWqPnpuBudrjZWDrfBWSb3CxkNYtr3uuNwYa6rvPAEyDNLYGA",
  "key29": "2dZT1Wz96Mku8xDNnfTkC6cW7WZeCDtDpiVEW5QQPBP8r7c6HMRsgteXZKGzogXYENzQsxdB8z9KchtSFRf1hdxz",
  "key30": "2XUtfkQupndLRMvAmjrxVNtd2cKuhc1xYNeGEhW3z2GPF5oLKVduFUY29WmGxwH81aHv2QLGVSZhPRGyxX2iD8KM",
  "key31": "2NuUu2fY8SdwUfMvnNRkiAVLHbUVB4uHbuHtK6kCG7gdZ88N5kgL6DMZysxd6BzKqAwRSKcBSLpko2B73z85J7rH",
  "key32": "2fx8pS2eq4dRcZdhuBsvth2oNLizejrYTLnaRLAj83rZ6UYN1bauygcWeAeHotguFkE9SNUyPDTbjgjBvswNQh6B",
  "key33": "2mfYx7mpK81bZ1T3vkqaUpf5m4byGh3t3QpB8gStS7WEV6jeeEPhakNZsPuq31CHcVHSN5Ti9H7yHCbM8sRHT88e",
  "key34": "5X5YoBcEmfBnYEM1W1cZh7fXNS7rEa8bZmspFVfrwPJavzx5iBBzZ2jG9vBfwwXhYNUY4dgx3Vi5sqfTt9wM782a",
  "key35": "3rLps64Jc2uAQFNLULNaL3ZwjBboEBm9fTq2tQzkysM9XbM5Yx7jrg7rXEi9174fgbT98Ays7HXpBZX8LGHDBr1m",
  "key36": "4v3Jb4n9j6MdviMnLShspaw2Mzf7fCaggSpxMEgyD6JPLhyku8C7XX3JJ8yuvfsbF7qbtgnQoU5JdhHHzs7vkk7B",
  "key37": "5A4KHG4JMH5jbxNc5StiodwDqo67ZRkY9UwY9D1aAGWH7DTcXwaHUvGm95i3aaEhn5wHz1km9Wi5C2TpjC2afYsq",
  "key38": "2RHSzUMua9GsLBKAdjtS6y1a7kbgRqaawzUxvXxsxN3rBPqzWw3gBdkQDvS25RnxtikznaFktkUSz8n1xcPLwGzQ",
  "key39": "45DFX7xHPndh6vzhgasEfPRkkR2Mf5wcU6AddG9mPjiHm7cPutoXf8EvMXjsbJYG8pyv1XeJfRvLXALkZnNfReLo",
  "key40": "5Q2FVf4hzEmQjv7QrGSQeSLEoYZsMZuKMK4yjci4i5jEygnC2xd69WKjp6zNrLLmxbq246fXoztX1NnuANBc6WHW",
  "key41": "5sKkgporSaSH2kYiV9vJ7H6MvCy8f5B9Z1Da3Rg2N6Sv2saewFJpjeZjevjgezusWGbvbik8WwdG75u14QubZ4m2",
  "key42": "atHich2DeYhVfdXLA96yKoK1RenvN1bAsKHSAQ7N5N1X6CRqXMrHdXobBaJwTujfPiH6swq3HoZVTn4UVLFDRjg"
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
