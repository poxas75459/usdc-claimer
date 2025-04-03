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
    "3A8xDwh65xCBtWUEFmhnAyegVEJ89p3k3Eir4o4db3KQrPLiznuxqnQmuGLqHi12KN73rwdiJQ9CQYW5QoDD75aP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5By7e959dDiQwSGtCkNYAp6ybpi3sMfkPrbBaabpn34uVEjHvqbtcsXUuFQqMkdopLj8LTDSFTc9h8Ghfbvke7Kj",
  "key1": "2i57YoSnkFGBzktjeS5zae2jShxD9QwwArru4E2TAwkMEveCgsFMTWaeCfHGaUZ3E95MgUAfa18Qs1pUTgg94pxE",
  "key2": "qigVqWWNSyEKuCS4ddTB7TaQ4mZRBvgFYQ1e1aJ8YbrMdmQBavntM2zQxgupjBJpuEtgNBpkTMFrAn4dwocik1R",
  "key3": "5RiT2AQzVcfEcqnkmMUDHtjHmTWXXeZKh39dSj4xyFvUhgqWs2EcifhEd4C4HQxvXGNKWNBpbp2tTCdYqrp5zX5V",
  "key4": "4uBsGK7HRGxSw5jpqWtjUd6gM5jBktG6ncQ7Z8feUzpKegqBgvrDbGQwnoX6tYP1g3Y7ou7vTprKE8kw4cBJv1WX",
  "key5": "5WCifzDAdCUo3kZNK9FV2YXXFvsSiZqeEmEMWVFcWZ18SeBsvyZ9N7rH9wxpYZGA5ukhABdiLT8sEY2DiNBGnDiM",
  "key6": "2jRU5zMkwLsZD3eNX4Z8fZJpAmmTVBUhFrt8PtHstW9UJ54nU1nDTm5VyHQu4YVSU5FbkYo6byFVeMf3qKxBHXED",
  "key7": "365Bcnp8kALvAacqUjr1aCLD6MKhgD893bPU6fpC4chWff1GqQBXbv4Tcp75usBjt6Q2wFAQB5ij9DBZJUfhSpfB",
  "key8": "4ZDoAphXAFBgutM2oWcC5Tei2zxx8KtFW3za6YSQrX7fe8uDWM96LWmNtgjLSvSycVtcgKK4vuxC2UY57HH7BoRA",
  "key9": "2bvu2mw8D2KMeUQF3V3yoXugTWN337782YQUxjrmKqJs3XLP8933xx9h8BMkcV6GRjpHMBhctS4AbwBKm6eZMQ2b",
  "key10": "4rer9VrLu22QuFbPZkQb5zoyJzWpffAKpX9XbXGCzJUdAQjYM4BmJGL9xtbbGVubZSefUjQncopXLzHL7wPx58CK",
  "key11": "iJaB6nD4VsuoNsYz5xPqZkSxg9ZJ2T2KkwsmAvuF8WqbBJ4z5wodzDEKLXJPERd8X3gdj4ENLBwpN68rHpraiqA",
  "key12": "3411dALCMz1mJvBDRRRCT17hv2ufnaZuTBTDwoT3geeaY6GGqdhzBG2q2sEoiwwF7FPA48TrsKwUcqSL9ibyXeQt",
  "key13": "46rgrEdjon8UUyzdmEdqiUCTimUrekKmD9geXxa3HoU1zi4ZPP2hLaUaGDVQYCp5g6iMrmhq3heWywNgoUCURyGm",
  "key14": "5v74pp8bitzbVzCkaPuhUQjQGv6EwcMuSEfSSaLWucVkB88FXAFTgYF536kJUdEp6tazLBQBZzbxrepMANt2eaxB",
  "key15": "2VkHHj7gitBJXfVb1FipfbWgnQwFux7cvTcJVTkvRRUHV7WwwhkoLVfWX4hLnj7ZvQeshGiyiNnfFR3r3oizJa3G",
  "key16": "46vptdyNawtWjaGHUeaYL7Dv8b4fYKutENbdEZum29emfk53ywRsSykBLwRYhFcS9pijW5iemtgCFtXWuVFcctZM",
  "key17": "2C6o9ULAaECA4UajYhQhyLnN5uM3YisgCJjPqnKZj2dr23gbXCEaGtVqiJkUhmFL8CMdygBgbZkd4YnM1K7RBuC8",
  "key18": "5zANTKq5fSs9LKxzCg67QrndqLMGcPjYvc3ZoHT8UdJ63sDLpWGkHRc1zgfu42VD4uVQYJ9paaDPoZ3fZKZKQKXm",
  "key19": "588FgnCn5QRrQpz8UqZW9huyNuMeqvXXhhYGF49Mq8BprFuMxfNRyFyU44bTCb6HkAGQVhFM5CMWJqM8iedxBYb9",
  "key20": "4ecJ59ezxagXEvV5gFDLJLAUvV1BLqPFcYT3wVjZvpiuynsMvtF6vUReFy5qnHVX3Smf8asWyjwTb2AhpFcT3j64",
  "key21": "481477NTbZG1R43i7n8VownMugc98TuG9jVegS9T2XfutxsDc22rgDDCPxqXyeQGE9eLxsTmftGyBF7ZJr2Bo5nq",
  "key22": "4W5wauMAuPUwTpYtrF41VNPbZTBh5Z7vSstLUYq93YxfrEm9sE26HLA4K7jct92HXxfWqeJ2cpDqVQQB7QACJxCa",
  "key23": "3CEctdNDKayLmoxJziEpYPyospGyCLb2X5wCnwfE4APa458snAmodnTwzMfsBvjJAQDoeGYuYdX8HG9DThDRdWvP",
  "key24": "3BeJqfmq5BV4QgmX5pVi735YLmgZdCr51yiYSKkbYf8Hc79PcsWdSGDA7oTwjQqkfYHxMAqQaCFTBrdscPjBYb5T",
  "key25": "Zf6ys46nVobmKoAHZSV2W8crDU6fuutJYusQCRtY5CkZ2YRjC2EHnhqaVRKKGCEUM39WqiJkLCLPv94tP3a8582",
  "key26": "4ZHCV8koKtmEZZdzHRWMEgK9EU3yieJsRKqYKPoR9xkjg9sjcEd2RggUpeLAaKmNCdBpTqgfzEzASkBznvswb4KX",
  "key27": "3ms7Tk9KckLbuKmYPbGvV7o5yNDsVKJvZY8UnRhtLCdHJqpugFwbekRi7mC5zwHu26wN27vSrwu17Ft7wX9sRpRU",
  "key28": "4TUs9eE5tuV4C82Ki1q7kAD8M9FGSiDZhapPsn1qnFZkmEBkVhYyTrzFnwtHp7YhV3ZN9uysx7451bXHsvXm7yYb",
  "key29": "4jGoxMm2rqcs3VZi58Lo1WDwk9J5b9HKthNpFQpri2rNaGEdtMvWtk9A6csjiF4R2bAwerD8Nst3GiupabaEEa18",
  "key30": "5cwKgzUAE47AEcvrS1SVBAhKLTT6nFidwEv8rMPrTA429Pfp78W8raQJHa2Ya4smEjShMCFDf1CQEXDHhHmcvzt7",
  "key31": "4QSv9RWUKw1rRRiZYtyejHKi5fkpCNL2bCbYxucuVBYLweszYY4TZRGKBAKKG58zxiyv6QurkURhETn4zzws6VCs",
  "key32": "5g2gyweS48Qd4jTBdwmPvZWthuuEdwiBmDBnRAeJDUKGsTEWitdKFMzJEdiLrVBy2oco5GXaXYvRDjU1qbNVgh2h",
  "key33": "5nj8QGACZ8iz8octJGeW5pp8iPva2yhQAt6YxGzBdRzi9gfuXszchjkpcGLjKVhAha5MTAtjuSmVo8LneDo4Srmm",
  "key34": "5RDqYFDE4GJLxjdzNtT3yvvxZVRdcYmg1jcub68NKrrYJ9VnrNziNf9GEmtcgheEUeHxD2vmfU1ERfonvHBtumbw",
  "key35": "msSTVUtyQhEwrej67anfhcY4aFFZktKeSPx4MSVmMVSNu25eKyHwgsX55jeb42DvwLZ1YDXvxQTFvyq2z7c7XYJ",
  "key36": "uXNyFMLrh42ZgpFWf6vod5Gz3ByAckxrBJ1Zr5YdWCkH9qjua3icSaGDURttRC9QTUFpZjdsT2JZdpi2syzcXA2",
  "key37": "LotEC8bYysvRvrwhLJBfppDctyK62yKEGzKmumY2oiwLrjhAtHYmQzBvqp37JjzK3MJhVsFMDxMEbyPQmVThiB5",
  "key38": "2vVxcDmfiRr6onWrq27VWjPf3eXYNyvPe4DZfy4DD7449znoR5FUBcsUNAbKpQfws9CKvk53uYyWgzpaM9ko9DbN",
  "key39": "4fNxM2zAzQtg9XsEvx1kGsJNvT5c4UMZhcsRKhtDw6yVHq5PnkBmn8ncpnJJujNb1ef5q2rGoMXxQskskJtfDkJ8",
  "key40": "jiPFDqthzv1Apmu7sJLexXMNBwJgJPfWCy4eGrxwnkm5T8SAMVuPNKMiYQqrhByrZ56uoG22xpdRzZBgoopMqfD",
  "key41": "PFEFdEvthprkuNNDW5s9bfVzSUhDiV4E7wDqscCJAQ2NnaABquQfBDUS7frUZ6rFvSrdjopkynVrAUs3uCZ1Txv",
  "key42": "rEhKMRX8k2HvgaWsQvCe37LgCfpHXTyx78yknhPt3gwEToQFUBQQMiGyaTHFpKZnUm1K4KBLi4fQAZigLigFQWN"
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
