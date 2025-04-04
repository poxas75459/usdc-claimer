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
    "5uiA2E67mjr4uzxjins6ay2535Ydf3gNAjnNspCqPdgKg1xh8VW1NiK5Ej68jVi1qDzyQzm5FcBQBjyW5epP8UZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCrcKt8K4btFDfXKMCrAWHh78hnTtU1pLi67oSCcA1rP9yhLEUtjRpeW78qGTJw4UmAxW9FWU16Xp5thvaAfwsy",
  "key1": "33Wn4LiVuLNhXYY1oRfmuP8y3djkTtwjL8r7k89yrzi5MpdWiYCghVtmF59MmSx5ejyfUiBQTY9VDZaagTqBtQ9C",
  "key2": "2Rhn9XPke81Nc6dsWqRk5nTAQzkpjRebEoK1mSrAoQjj33qGoKsHX5J5feqJa2rmPkyECcgGhXLzrK1Hox2WNcPT",
  "key3": "2P5k795q32KtzA4nLABUViXj8JfsUvykgtRboEpzvXRdL1BAJMRrB7WCVxnzmR9wPX7Mb8qZrZpVsnyoxjRrPKCg",
  "key4": "5WmNTxVySw7Jh6oVrEHdNx2GoAyUNq8YFXiVTG5YJceng8wD7vscGu2ABaFE4SaN8YrPZHXRzmzhbAUoqQ4HZprA",
  "key5": "5hzpP749Z1aiSh6Q1tU7hJBjyc5JYDmjWqwpT2GqKakD34PAPWoL6ukxDJg2h3ibPqR9Di6M5Q3j4eqMY3mVcunP",
  "key6": "4GkJwp4ksb4TeZXgAVbquXBbLhhhFgfxMaW3sn5GSniUbmWJepLJbz2LPM65YJTrb4r3xVWVV6DJvrabyrRLQBsn",
  "key7": "3qrG24Wn3t5XtxvKKV5DztFu1sNVDpLcisJtaY4ZoFHfxb7R2YzEiiHpAtvZAPT8245rWKyA5VMkKYsAm5txDPtU",
  "key8": "4N3sF8hKWZLe2pprXfdBovkfQX6W9TrmAFraSCqF3BaZRWPesdxaJfK9LsLbRFW7puQspa7JXsvN3j3TL1qNBv3J",
  "key9": "45AW4KX44dpeniuBCxTRACd7Rh99L3dQm51pgqCLjKtw3EeBa7K8rGbUDfsNVbizp1iRbBZX8nd7tjfKA58tFPWy",
  "key10": "37mz1hri74JpRETQYFGxSJgW7v3JGcndN3DgsRGRkLPNHjHpqPWvYRs98MUJ2mGxy8SFoBa9aGzuhUiDSRTZSwsB",
  "key11": "uvvnibn9oguvW6aRnDCRkSUhGhfZiwzyb5hEqXAuUZRwh3TK15kyQG52xXzUibAGZeUWZWwHuG5MpMQs1cRuRm3",
  "key12": "5hoyBS1EPuTpd81z7iqhsDFfmRTK42ukYgT1wyc6B3toHrUfJ9RFChrSdsrf7CVxAsN8unehQ2wZSw8Ls929Lwwm",
  "key13": "4LCkM4DbdnzGd22QV9FWycttmMNR9RHMLUu9GrctYHZ4M1HGqeqR14WbQTSCSgRr2JrDcpU6QWvG1tb5gTgQpPaB",
  "key14": "5w85Tp9wNVpYeonvBXqbPKutrZUqPuEQdzW9EExVGELc6YavY9Hq2rh9xxDw6jpukbwNMKwL2gaQ2zaCu37pyjtS",
  "key15": "3PVJsvKBGsyNwxYFB5PXieo8c6Yj24z1fYFAodxRjY8mNwTHUDDvmvvHML39o5wB7MM1HCUV8BwMWvnMkXVvMNGU",
  "key16": "Ry5Nuus21UKNngQ1zR7jMZxHLjAv9F611sgYLe9GQz7kH1Soe4xPHv1YtZUnY2QtY83LNXudEWwLnFe79U9AJye",
  "key17": "44bf1VJ5ZsSq2ynZxVEnRh9ZsS5qof5MdJPSvkH9knaS5aWJB2uZHEfXmNMic3wACGKikVdkUmuW58aBZ4Thtrv3",
  "key18": "3oFNodVZupSLVLStPg4qQ9P4KpyWPyavfqcrXB8GaRpHChS6PaDH4ogkXuUnt2jQXwrnMz9Dv5Cxz4QHRc3VvDM",
  "key19": "5Jo1M4byRAts5deV4vhXDrPZojaPLBkpx8oK69ztUbmUbqpA7gFhWD7tNzYKjmm5ooDDrhFMcFZjwwMEu6pv4N5S",
  "key20": "4poELbhBXvPvVR2dfdi17PqQ3K5G3po5D4EQuhwHfaMGLFtQMs51yRXYtio6wA4Sx8MsYXrvnysrBGNREwxgQtzo",
  "key21": "HvVDRiF6aKW8X4dJLLF6DhD9L4HNcFCQ1X4iyu6N3GLMS7Wwti8vBaiLcvXhTZXfHi3CtzesbUaeiqK8uEvsNXJ",
  "key22": "6b4EV3SibYAbqLkMJN7R8oGQ3ME5W1cn4DHjByAmZnFYaxWUpGMijW43CBV3RSs7JoPAgEwWzGJcox4sBZ4G9Pk",
  "key23": "jNw2f6vpP9YmMCbKgb6XHTZjV6kjCSSYFA5K5kK4sLmFy5HkFVNbzrKHSJVMikdu2cC3apFK3eEwTRHTZsSvHb9",
  "key24": "3s6jzAqFngKvujoS7g4uki7Rmn1HEbGJLouUu1x8g15fREA4Q1Xy9g1adHcTZAuzM7kZ43gubU6x97Az2rEDVrLm",
  "key25": "66e9xX69oRWLv67JApg1pvXt4Dcrr8xFXTttJhYZrtZAijRLpkFWNFMiHUzb3AAFkvyhq6S5hfBERjQKaPvhGHcD",
  "key26": "5G9xrHm8QyUbe7SoiogkWwKvQM6TFfRfmHr6QAR3gi5oN7U2YsTCApSdXFMP95eGCZzt2XWouPHRR7p4NUAkZfzE",
  "key27": "57LKPWPciZ7JEvtFr6yX5RtPGaQU8To8fmbccTWhV3g2z4cHyvKSQWdkA1cDLZzgZ58NETRkk8HCk2RAtFv2Z5aR",
  "key28": "5aCiCMAx3SPFqq2BzobqFDmrwHt97VzGrvHuJW4qDTXRQVU9sMYyHSpcLU4PJtyWJyj4RTvLjvAP7zWdEk5AUhb6",
  "key29": "3WVhNQVRSjw5aG11ubTBkzPaUV57aYcLZL4u1jBbi254d4QMoFRCLvyo3Pe6Bczkd17Myi4H1gfssFHuGf8BMBjN",
  "key30": "5f5HDxS5xV3rcqEVZvxGZuHhvZoH6VY9NVPumyxrP7zz23gddmsD8dtvzLpPhY3ZPLqcU44LEPPoxXd2jkePb1H7",
  "key31": "53kWjqqDXmawb6SXfbfNjzNVGDxfYKM4QNSzjNRZuvDd8QzU3eYB5aDPDn6oFQjPvMDqfuNEva1mpzZ1ZiNRZo6X",
  "key32": "3ThzgqozKdAPKRi2eMLtuRFFs57whX6MKVnxxkqkHo58M7qAaZoV1XaXfUzpJzqMXMmZ8kMhhCrmcoGAwer2Z67w",
  "key33": "fccymTn9sBQbzV8zyd3ZkQYge1ZbRsTT8bCw6knkKd59NHnVPFe8NoKb1Yy5qmKDzRiuiKHTTBb1sa5F9pSyHPe",
  "key34": "39yZ5JJywMYbJSQ8j7fwYDEqdqckyRKhynE97K9YuRpqL3owXks7dkgntKf73P6dyoHLHidS1KnX8KaNV1YQRoU5",
  "key35": "a23xGMcGvYj4n7Utu1LrZgQgJL7qSFQvD9fn1seEgDcAkkZN97Z4o4RATBwgVrte3oiZ1ZPArBpeuXbEZJVT9am",
  "key36": "5xt2J1ELmCYfWHQpaZv93wp35KLzwpcvJzzGyvUa6mTwXo7iJbhPozJXmJVuHLWudGq24edoVhH3ZoVdQs9wuwb5",
  "key37": "61wShVAo7NWyNRuonae1fVU4GijyAcVSB2bV2qT6q76zvoXReT1e8JUSC8JQg2JRB8MY1KVZUwqprZ1PtFe9qdgz",
  "key38": "593pB1aTFtr3ip14xatWvzUE5kijxjBBJYiRhj5ByLjT8CPcPrxxTC8KNgqjGyqKoUkyevqywaFyRar3byGMAQqR",
  "key39": "66kDMEHVwhdD7LrMqQLQARodRGaZcBgRZrwfTX8FJj94kwDkXwjeTpozgLyw2fmB5V7u3D99bM17oa4PeECYw4n6",
  "key40": "2uCVYFfzmGWyxtzwzViTAkLCZhVrZots5Tgo24ynsRzS2CDFeMLHPYV297YRtzbBzXg2iQ9AjdzUeKK5EysA4CQU",
  "key41": "3qHMJJz4ivvj5DuKHZwR5m4edghbNVA59DriERsocmFuT8d4NwYrok3m3c2pYhWYJQtpkiPYXvVGSrKm7uJfQJwK",
  "key42": "TbEyifCFJG2mHnBem4Y82U8xC4tJiNMi5RPLf7UAFkoL7QZbFk3BRUt57iuDKtGyAMpebkTHkfEzU98FAtCXJaB",
  "key43": "3ogPxJ53QRt2vMc9Aohp8KpDRvpG1be9T6BaAZpCz2wD3JK6qqMDGexrh1HTBYZgM3S6oT5dcyBRfX1WnUJv8p4N",
  "key44": "qARMkKnfGicr8ZsfH3qyG93n8oxJegP9HT1sU1DWw8dq6fZEPxZSeyiQutCP5rXHrhPznNbVvM5STidD5FpXRQn",
  "key45": "KEY2uKJJU8U7ewRfFrJKDdHeRqMiETrzMJWLuksLbcnpW8spCVPvMGiSALfTM4U7TxbyknVUESgB7oRyTa7dPcr",
  "key46": "3jJXj8QPCNWq7e9GWbRWLKBp8XEoF1KKtxUPnuxPnn9CN1ThRuo5qEaoEQee6wRKxU6XhJFGdtU2EfH5qDtB2aSj",
  "key47": "4uckafNDRK4ssFJvq6h2G8BeKes28cd9iAVk3HG1Y5uVVcfcSVmVAmY52DbHTtyXhWDhBBUBuJRNp9nreWN92eFW"
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
