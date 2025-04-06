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
    "5BUcWS9uzGT5CBoyrS7x6n5zxhk1u4LiHo1Yvc5LrbsU7cnGMGxF7EpnAa6RC5LQCWm5BknmF8zkWH7dHmsbcs4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ffQEtCnh2Hr4HUFmczqdYaLLt9uDrrk8RkoCiPZBKg5NCwiQa7PmiQgjiznAksn42WvdKKjqLiDXuPuVtCZz15Q",
  "key1": "5Moh3Tcr3GeCdtHWB1pikKbLDEwDsMEjum6j1M2nSz6aKRqNGTRe64LiFYqfB97vpjwJeLSZR95kVTpeXsxtdPkt",
  "key2": "xxrkEsq5MSqsE2pF6JCWdyBrQbQ3rGjMBdL2bZuuBhwx5dh6rmaY3TS9eYp1A3h7pJ8usUF4Eo8UYjtgRELGU2V",
  "key3": "4hGdnZL6asXS8KWc3CPJ88gkHwMvoxQ2214Pzc935WCDL8uPWfVGeNpC9oSD5QxEcPirtxp1svRRAgGaW4exy1Mq",
  "key4": "tXKyVaPmNEd4VQ8bpbRJvKLHH69FHZRDwZy3t2YHeuY464NmvTnzdJ3dMdhu2Pti6EUMRWqJzvD3Y2NYvjHtHnz",
  "key5": "2H2JkC3vQpdFqDtkNMS7ggbEKVnPZwT4ANLz6PE6QLQj2dmpFmFXPoWnDttpuK151TmnWJFtxJS5MdL28MrfF9Uq",
  "key6": "1N7n35czsFuj1q5xExUrDPNc3KwSjT7wcAonD9JQfDXodhChKVgZ9XJrPeN5iXCaiDvJwtjvE1npEQQEJYFyXnS",
  "key7": "4a3wBoaA6WBio6xsyUmn834vnKqs9NnfXmVryJ5pC86sksEWjzyRwk1BotMvGbYSbUqn1J13UgRbVPX2dDmhJkjC",
  "key8": "4GVG8zrZ6Go6ywV8cBN6UdeTe5jthtHDNvo67w856JDDn1BE6wuWvbqZb39b1xTSfg7DcqE1ga71tfhW98Ru3opo",
  "key9": "26wRdtiV4EHxMphahpNL6XfNZLpvRUBmkqDWHFNoT6kAQtQUv3ieMNVKBhtawJzr429jfP3nK4Zpg5B31M2zNTqc",
  "key10": "YeR26QVw6mGmAbJKGEGy4HMeTtzKReX3XVZGu6X9qr93PY6hqcKiv2SCwsKWfZcL1x1ZnPEZCeDXqpP24eytTjr",
  "key11": "wuxcdeis2WFvuizotd1YXHSVA6BEN5qe7TifgdBvs3FdN6TNvkXcJUNqvjQpo3ohzCs5QWW8bDgH1vpJ9H1bg8c",
  "key12": "4iCYDiwK7JuJW8J4DbB1MVyVwMPkYfpM1wBbkKNKzPdPTYRUT7NYqWyK1TPSijvdMk86wJRdkDgH9DokUk7HSN9P",
  "key13": "4oqJHwvpjEVSTQTiWFBvxAeHwWeNYxwLsmnkaXVLsttc6ParfAv5vdE7up3RAJb1BH36QzFH96pEaneUKwBSxd1",
  "key14": "2LijGooNNrwWuLwjnH9REBe7eC47A6Gfb8Kab22savvdqEpUFfFvHFHz8N5tY9kW464Nzp9L2NEZ5bxWSRnCvQ72",
  "key15": "46rH42qA2S2gwDP8bnoqPzuTyx7sZtH2HZbqvuFvuxanRzrLsw4ucNANCAPAjPdwbaTEYUhLkLwmcYqYmAzD45Ty",
  "key16": "4GuHUtZWHZ7EqfK7nxS1DtcP9hB8XFnh1vQazJaFLDFkDko8E9JHs51GT3LPvCGGgoSnfymMSvkkd8dzHRa1qrZ3",
  "key17": "32m3ZAxbpzrucBWdPoKn4TjaWDbTtYbYuvdY72MVAJZXReCaa3y2mK1aEv55ohQFRN9U9N1Wbc3hiFSHZgtySFrJ",
  "key18": "eXCqkaLK3Hjfn3oMWBU2ykYobhsJNLkh1P2QVZ9T6CcfprNDdJFfYxFnbgUpR5XGG8ZqN4kJww7WzHh9V92uTGf",
  "key19": "5NCTWsqi28DDojzRgKYLCZh42RhaWa9TRPuPdDs8rHT4PpYQ2dHGSQx4NgYwTF1pYpDMUfUSaHxk7nXfH8cQGXZX",
  "key20": "5hzxNsQ188LzCGpKpzzgiWeF5iDezyJ29Luubsx8my9rh5JJThkRFPh6Qk8Rvy6wRXMSpjq2ACch33JGtroAt9BX",
  "key21": "3BfPQdGqLqQjEqw1aFemtX5V2VNBYsJ2jNphrmioAXGAgDbW4sBndraXXA8uQxb4P1Kpb8xW4DwRntS28ZpwaWwa",
  "key22": "4iAtxxtgxL9dKYQC1RwvTxnKZWtqqgwZsxPPDUs28x6VWSD6ryg2gUmKpn4B6pWDtzRrGXPiGLeFcxxqcKuH1uYA",
  "key23": "63o61nQQiLN3Bcrxf1wEshtKpG28HzNfQUsepuXscwj8Aj3YpieNzwrkGUZhznDpAFuYg8dp3fzdwCgzaP9XoJjc",
  "key24": "39UDXdzzXjwYzc8oUj3kby54uS6EQHnmX1dBQ9zdi48VHYYyDQJ48N7et9viTduZWh2JDXXBZZNidsdmCNeoBDWB",
  "key25": "wzN9R1FEZXLuJmH3YLg86hqyxyFSfoYoxhoEiiKyrrC4G5a58dedwBw5eKeRffCgMXAwTXGGdMyaRfFCzXCww46",
  "key26": "2sKkzP6ryQeC4JxAHRk8LBhk4iaVZYXFhAJ9bepDXSWdEMyhQrZq96G7JqTGTMEfGVjsDEmWGwAWm44qs4EM6bBn",
  "key27": "5rrvoTuzcUiFuB3zVCHAf43G2iQeN1yuWeTtgRktmmac2Kq95fngxwVuqDDZxNdkv2SNji6WYtGP9q9AcaUjRkG1",
  "key28": "57jT3fRKadvZ7vbt9v3GPXCBQLyWG3jEm6KDuEBc8piNU8zzwgiVSVNJhvSWFVdEjoVt2VFcNmZ7zUz4sswLubL7",
  "key29": "4AUuiqgZRsGMRqE8brpWgBuVtwt46UZNCjsfBTYsuazimVFgSA6tFVsX6om1Uze8soRv3VjKvNeUsEHAwYdpFE3N",
  "key30": "3JG615K9bXRToPuYnM1rguLhyLao92LpdngjMN3w1sZ2oSJnUb15km99K1niSRMWK3z3HTFVuk3GoNPN7nnFu5vd",
  "key31": "4KmZ3PQDpqb4fKP2x3ueUmwJFWEWwoqKbo1EQFdKaAV1JTSG4ZLve9482nN5GgxmFAhDeyB262bB19jPL3uMdR6L",
  "key32": "Q6GC7pWEvXpCCyFwFvnYxGuJT5qCdutBii6uhapu8sfH2vsKWBVaJDp5GoZeVCk4WLSFD34Y1FXA3n8q8Aupdd7",
  "key33": "3hap3SpXZa4teU6weBLEqJwviykhBLgEEYGYiKtk9q16SkREsBpCXRYqNkjrDT552qXfRDD8ydsHdGmkQbxEqoPp",
  "key34": "3TKBD2aijQLRURAH6bDyYKq26Jg6EX2pHTXnrYN81N4XBavm2cbMkHGVJPNybwovgqNtDXB3cEvJFe7UWLkgrq1j",
  "key35": "258AG3NHDixW2ctbXpckbkwHkPJmRLkh27sBDxBSsXKgjLkLcchzxxAQa7hHTBC1UzPNCNHjUZ9Z9EuuMcBykT2G",
  "key36": "eHK9k5LoYULf1URiYjAR5cHVGbchYfMgQnYZkvqsBWaQKpXJ5tz7hKfcHvDN11vQnNvWyMnkVkxNL9aCyRRuD7F",
  "key37": "29Li9kqWnD57Y5saskXZ91TjxS9iLX2WZGMGxvo1Ma8Z7y7qtLyAHWJjDwxiD2GwFXVemtPVxtnUpfAzJqc7FPT8",
  "key38": "4PX9kgzBLNhAXKt3TP3abuYonGYSt7KM29ZJJy6PpP8Vx6GLZmxGdaZa9bFgwXA8P1uqny4YV9ogDY4vkkKJhinQ",
  "key39": "52EkRreAapdUk5jbqGpmmwkDMZUP2GNrP8fGf3CZ4dKtmTcjGWxHAeZ3MaN6ZjsZ27QMXweJRkpcKvpRoc8p6YWZ",
  "key40": "2KzyrEYTeqE9z8cDwyTsweKCPrKshphYn74sfqdkUHAe1mo3Cnb749dSfbDKGuK2gzhQ6JY5HGPS8r9rHVbEGZYw",
  "key41": "3DSZuwXerHgELzVmefqyoH38kdw4XRvn4QRXCvBN4n3Z6yp9FkJ2WvKz4MGA9CePPcZXBJwtZu7fDN2A6nMH6cwT"
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
