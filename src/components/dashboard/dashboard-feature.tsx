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
    "w2CMVUAqiX2CoFWdMeqVeA42n1bpthw9CwcD4n9DARfoHN9sETFZUWBmiMK1Rgzwf6YNuRYJcn7LyUDe7h4U1fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vbbhw6AVUnJKTGH9aybqhZeZR5Q7rehrAomKWt9U3XF9yAd6xPXxXzJKiANfNr7wwJxi9JMbxkkryvK7Lmdhafi",
  "key1": "2XDbBuyhLA7ZabneMQW2g4a5aD145uirHeVg7ybcXB9zcvhoUfJhU3vMvAzipdowbBjgYVXPiXGFCbZC2X1fkw6F",
  "key2": "wMZFjjLwy6pauKcWHwLfQXiXrBbAe9msaBYqpuy9j2eGy6aboqUHwdAVhiXpDSV7adg72PP7y6iEx8tJu3C7zuv",
  "key3": "2c8znVHA9LeS2XuUchafgua72dNQEvqQPvdsFSFAXLAWDg5pnHWkmiLAot6RAyRdq3KbDwaLjVtyqiHvGtX3gjS1",
  "key4": "2wXZdsv8FgZRUq6AzkXH7LQzmMmkJg9PvXkgS9LUB2aNziMXwY4Lc8ySkcpjBv6uiczhVqBym9oDMCE3E2NQT1J6",
  "key5": "a2goaNUYn1pqJ99LsF325gB9jyqXiNXbM6bSzST62fndVCNPPbHrZCAQ6HJwv9yeum8yJRmMS44twkzaxZZBPnA",
  "key6": "3TJuoMpiDELCs9V8KGUagZumLWbJ9JjSSgsUM8xoLcxxCvz1DgoGVZY7Jir4MV5fEnpJ2x2SqmDN9oR6u78qiteo",
  "key7": "4a4nYW3PSgswYDRaiqbA3idpPPz85viJx451SsewVttixqxgFeU24GvUJtwNPd2kBkj65jqYScKBuzLevTsNTXN9",
  "key8": "37fgY3JaZBu76BBHCRzW3ZjVjpM8EsHfQHTHPJJy5BbVL4vxZMenoprJM9WJdpVUFSJ4NRiMYmzgod72s5NWCkAJ",
  "key9": "5u4Zji74RSayJhBS6FEbsXm29vcus6NdKvTnVSxAvcVFWbjE1VAVTX7jpxntz5KzGEgLycx5DEo7CEnuQjkgTkkR",
  "key10": "5BQUrCgeib2G5m4YD1MxvXjVpxyBpXy79V21pUc9xVpJsu17kn3mq98zP9MEvDz3bJ64MTywf62Z359M5fRmQ23W",
  "key11": "4zuGwkR12dA5w1n2oyb7vmDYYWa5116h3tsmUDY8sEHxcdatmgGN721F8ZRuK29bW7bzpEmo5gDvgWti8d16hTev",
  "key12": "5J9DMy5QEYnEu9wVUQ27AHaHHkT8XtoCWdhQrExtHqxP5HpvPHBdNgygpnkMVQAXFRKKmzvDpHV3sm5DnxGXbAmY",
  "key13": "3y25xYEjUCwKLu8dLyK3H4Tc12jLGifcp9gkAMJ6TV6rN3gcbPJTP4MePLkR4DiseN7r3pLbVsNGkUF4c29dBuVT",
  "key14": "51v8vqUq7MzahyXnBJ7YpcZUisoPuLCtfHSVuUtjJs35LLWtRTUUxk6KXxeUfL1Tws5vhKKnznJMc4v4HMcLwKfZ",
  "key15": "3Yo76EFNp4iVLJnkm7JvkvnnWdDTV9zYSSzZptMdsLo4mRiXWKMAMb6eVT9WXWExCF8ZNLJd25LTGoKP7NK9nVTo",
  "key16": "2VQUsYiJpNNPjNpsvtnCYJRk7LQ47ExFPwCgbyiaBniCsEKfu3AD52P1f61iQD3cw7DRTu4hxzWW9vXAiQib2J9h",
  "key17": "2pgjRVs7NHgQyKm7Ax6YeYvNa6f5HbSfB6zJfEDD4Gc7t6msAoJnRSWXC1bbKEPMZrogfKtnWfuLy143urfPoPni",
  "key18": "5Lkuj8vUkuGtXbMPM6hnjbQHA9Fijtthbc2CQTYeMmwe7dYrtx2JDwd93n7GTmubTLbDMqnjPPZjhjzA3hC1Yw4Z",
  "key19": "2pJGQ9D87Ci5eSdrh5LkNknC53FPichfZyajLrLBs3oPAXb9AeKptBCGQAz6iGLzDRP6uNJtEvR8pmFDWXDo2LSD",
  "key20": "4fFA7hvmgh9dt4VU3yZbVVuFHa4EPzzYakxGZ8B2bpgmmjRJYyvaQR8gbFYJf5HrG8SzNwp1D4cfaBiyW6XdhChv",
  "key21": "4qJCTp3r291pGs6grBczVBVyvNWgPyQuBeksgTXsy897TFTUFGpaQsTehDr3UAVvKTDYVUtfNEkgk1sA6gDeGrdp",
  "key22": "2P8NH7NYYfpiTivELCtT8NgA8v93TUYwBHvXevKnHkD8gbkS31XXUUoVDBqANhp1FPAa4awMFV2HkzomxhTbs3hB",
  "key23": "TG2rbTkzdGTdHuFwwTqZy6YHaBedYMSD379iue5AEmUAYHBmJ6ffYiVDPiJF3E29dsjbaDtb79RMye1WGTXxwoB",
  "key24": "4Cvu5GvkzxwRmtAmjBwRJjGh27FK8zYjP7R8ZL4oJksv73LgtwrkRJPGQNNTWhs4k7yr2jK8eS6Cndn4S2Fp9sqn",
  "key25": "3shrG7jywj7ZPTfXymvgxB65Hw2VSMGkjaMC2YEHwYkw9e8KzcyCnvEgaFQ2wAtVEGf6vSq1QbL1No7cTqy7AGLx",
  "key26": "3Q2qbtzKJD9fkXHshS4U4qdN9SZZTqDCoc7LDVarYF12662Mh1fpBm19vyB8E9z5cmk6Lo7RKpXUwdGqKfTp7jjZ",
  "key27": "5qQGbtK5PnCAf5gg4VDoZPtyDgao1yCymoYjWYHZiMgPCr8CMWRRVC9gbWE5nXpvYCbAMLTjVpZGefBwyjPQCVhp",
  "key28": "4A8deB2a3vveZX7VWQTQsgRnB6zwsMLAZPPQdCoHbsUh18pr9NbDLXx92j6yWiBtbjvSctX6pYR5vHUq5yAER9kx",
  "key29": "3FRHC4nCNAtAHiCzq4m1CTg5NywzVvDmEAzcyne485irVjzZNU4juhKfiU77Df43GKHUybY5yeayuEDxJnSK8cP3",
  "key30": "4ki1QtGcVgVqT4AM5sWbqcdbATHzM7SYZhuKhhMvMXsbhmSBJCH8ZYXPb3abS2BsnAjoqBZ4trBJFr7oTPZeqCTS",
  "key31": "2o22j1s3c68xHEUqQFUQm7zDe2QrQmhq7FRNTPPk1wEAvYqozMYxT6Y5C99i8z5AnyA3QKN1cTiYm2dr9XDE7v8x",
  "key32": "25YXhjgPJaF4QBRxRxjkG7H7ypuaCiDgUZSBZ8dnhZk7pKgsHbG9SLtFTqRnsvakNaEymtwmn69LPUvPdLii8mGL",
  "key33": "5U5sKwGffLFVTr3B61X1QTgs8KbmJoFAtgFFaaaHeRwPajB4eHJsN6Ax74dbHEzTwQBY9t1vLk79EvppEMB8WPDa",
  "key34": "nQtoNHHgbcQ4WB4r51wWND1qVi7z52GwXHk8TkNqMJeECWa4dpjgPrCDNAV4E3M885GfFY34jtXE3J9YWBN63fy",
  "key35": "5f8bVsKEN6vA42JNh96DTdWPz2to6Cp8xQpK61t23B4EbN7DWqZMqEAszaGQRXvYdqE1ZsKAD61LYW3G5pX6AXng",
  "key36": "4wTPX78vfXEjgVUY1goVqCZAqaSN8jsgaD4QuMbsib2KNQD4ajynGyAjmUYmqwzWg5oYRCH6GrwjkbLDqtCpcaTs",
  "key37": "3vGsVsyJgu4sM9PbkVbDDuDqzAFGfc41vWaNp2HtTRZnEdbSAqVatwBVeX5MTmtT6K5G3gFz1w4YN8wTQaNSXhV3",
  "key38": "5rvu53ZZgCKhtGFux9GMhPZQtTrmqHG6VCixKSSdofw3mkpX1aq4C2oN9CxaRJJcAjwK4hrVFs6PxWeLYSDvJryp",
  "key39": "4ngQLyKyM8FcezEZhGW4a3Ca9VCVMbTyjx1PAG8dW4Xz5Q1FtjSmvWRAooG178GwhCieQmtrJEU818dPTdSWDory",
  "key40": "2mMPysYPsadKZZH5uvHAqRsfgxtKjuB7hmxp65B79LQfwcdp2XzDD1s8Rh3itHxEp6Hyt8HCAsUGv3Ld9eBwqTYR",
  "key41": "27i5dQ5T1D4VXRYFhiQrd5uwK746QVxZrUc9xFmvpzQcKmvN3pMkz8SVCb67DyYaZnxgXsTPcryBeNrdyJ3g3oSX",
  "key42": "3erNRtmKyAvLZ2rXjnvvyMRoVQ8ZhZ7P1rzqiyx8ZHeatCVFyx8rJmf9DqitUs8bwSvn142Nvb5t6x3Z8pz4LAe3"
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
