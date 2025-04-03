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
    "5RAySqEMPHVxvCPK65Ffrjt7VfiYh9MpciVVnaED3hXGCU4m7XgygyZpTNELv35dCzBpiiZ2Y35pDPtG1LyWFYZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "294u169Ld5T3ZsmVst4XdMdn6JzUtZFMyFEHyXrxX7CUXbxNkXp1uny9xoBogbRUvN592w5X3WosRuZBn3E7VYaq",
  "key1": "3m2oGzw2wzSs3dMUPPyJqCfCx7k8fAWbmmMzQqEo47f4nwmEsLesYoAhAuMd1os6ZXg4Nh4ACUALEVioerX1TPUo",
  "key2": "3YSD53Ghr465U8zjvS8krWPFmSoc234zcSupQDnLELK9AtR9iLFwigD9s3YEapHVpp6KsMC8Gn6Agp29T2euysU5",
  "key3": "29q4LoQt3zc5fyoYqAhFKM6rHyuFw56xuwDsvpcatzAEZtSk9MW76cVSFdq6xz4e9H4XV1Btdo2E3J6Lr5cfaMvp",
  "key4": "61MkZQVbFjby4a4rY6afw9XAMEBUcGtcpwJPubnBphY1iDSAHbaRYESABUZ2rfpbfByBnBbaNFL7Xmcm4sCfq11e",
  "key5": "3yV5dy88bsAm8GQ4gte8qtuarRAf8rFNXn6YasfpNEKVV4dRzqG9UyGaWoRUwtjRfAQg8HuSYojuKtEYTrjpWweL",
  "key6": "578Ami4EjT7tYjRnTrTQdVraAMCFEWhVtqd95eCZrk7DagGuMvPorDgPrcUXZf9rzgfP95YZgaMXVxwWoS1xjmX6",
  "key7": "5uBxeKp5AQx838vr96L7taE8XmDYWcHbWt6wxbCa6cWdUSWWuEkWPoLLhFxN8jXwDmtX8SHgTsTw3B7RTgDM8x7y",
  "key8": "35Jmon4LA8ep6cEXRNWkdbH1MaBXVgKPz2mMYLgrmq2hy99fUj28HTi38dWxoQ5A4stnab47Fq8rhWMAeb1m1ZZz",
  "key9": "5c1oGEzMokm2nU3viyBhiCTyGxjGz6NFGtP24KarvbtXfLvpAT63w83RyVMpd6Fo1Hq44d25dJUAAuUrFnWZPieZ",
  "key10": "RTwd3vc4G99Z6fbqqXqTSyLqPSDsj3EvDhvN316aAumskowkEEAgBPF8vZxqkBppxLMCz1tdfH3U2Zu6RHWvPHo",
  "key11": "3Rsm9jwdoqEkbe7r6cXFWb2YQNeoHPVZjH3cBe9i65mwb4bL2KDAcS5S2DKGDwSmT91nSyVJkcLGdCYSMHvu4BA",
  "key12": "3nJUuh3PH3qmC4NtNFzN1F9WXdeqahLVXTgsHsu8kFRZcA8AebrYU1EkUN9CQXVGGXJfZ94nFaQDgxv2xF79FHNP",
  "key13": "251EXBaQ52cCSuuectmRWJP98q98y7rdyJG2Le3TfYZM7b1xPW9D2XgEXkW7J1dp2gPjWGDWQ24Zm7zaynjTmekr",
  "key14": "2EYJJDRcdNkc5Ho7qa3Ahjtk16pgyrWu2ow9Qb5RGG8jarVN7bbwkNy5swGpJgTnLxuxU3WfYruiWayDQik6mQwn",
  "key15": "3Ssp95WCFw8Rp5iyMU7E6k15BjrVXu77RdLt8iEUHCSrSTq9aT7F7ShtXVD8tJWpmX14tbGTiX55mc5hYCqHw39K",
  "key16": "2f47yZdtt98P6QfZpstScV1ouQFL65zwVF7dnWxpqGcLFKnHrAxTa6NgTucgYwhmthmTqSmbjbm28xDrsb5qVLsK",
  "key17": "2tXg41WgBLvWWXjYM127vHebhEX3SJ2hsEgYYhgz9hPcWQbm2Sw1YsyunN3HMnEjsaRjywutYyFGrpUxdYSKEia4",
  "key18": "5nbj7DxdWhP41AkE7fj3x7dBWaPY6aK8YDEsmFtU3DH98E3rX7P6oonBc4p7dfqyV29zraKewPFob1nv1otqamGv",
  "key19": "5DbtQ7ZbrEhhKBwdwTUDDA8ymCotzK4hJdaSxK7Zuy9BVg2NVr11cQ3VQSTCqZmNprXh5C3JgAtDoDoNBMpo5iLZ",
  "key20": "2NnGgMphDJXzvAPUFdqcezUiKsEWks4wEBpcLeyX5tWRRud2H4ouZ7ARBQKvikVZf4p4Uft7kFTRr3KqBiyPMepC",
  "key21": "3jAvBvjVYDW6fMq3ZdrjL43pjMyxx7Sa5qwQ5BXatbWod9Zy3GJciweQR7M3GreYg9PPKxyjGpxtRY85Bki3DXPT",
  "key22": "53fu5sr761yesBgRxNgwo5mXCmCpsjLMTU6GP1iZTP8eJ6J6ANEfnUNdW5aYKVmCXrr8n1HjRAtYJhLLSNN74Yqj",
  "key23": "2gezRZE15wUZJ7w3QRhTrsAWNTNSgNFbahvMowBZqhN35qTP6FnWLQFeqJNttgHa5Game11poPQyVExnKq9TiXhn",
  "key24": "3mjQq527sexzY5WdtFCbeoufLxurXapt9LCUqnFeCRE9kAbzApEEZQmUzc8edsvBcgv8rrJLSkp25pa6XMMWL6f3",
  "key25": "34Ef969vTZFPNfkDoWtRw7bEWSX1sY6o8LomPm5n6hJw2yWh3XWPQrRWbHMNXA12ZYgshg13cPZpTjxxUoeiFVf3",
  "key26": "65znH1arcbsyM2dBCBDKBuqgaJNcPgEkCySCi1TZJRxy1SqRuTJCAm4AUa6ZYcupF87E1NiYZqCM2q2Ycy1we5v6",
  "key27": "3sD6PRTC1z4mwYKfxaYCDqeGRxncLj874WoRJBrTj2WYbTuTX86yD5gyMUAmCpFAfqMmHy5P7CevS4WmeAVtdM7H",
  "key28": "2KHVVSneNxKy6jDu8xHX9EuxY6wCAwdKiULEmTmat4wwB8DGMwrsXhnsYJZEbQ9HavozkyNB7fZ8iHvk4FZWndyY",
  "key29": "3EXfdH7QoJ9GJ8UKdaNUbKSxs27PD2Qus5FEujKK6eHyEjGsfLA63fZwHS3CwdZXxzfigyLExLhzyJQErWM7aN7h",
  "key30": "4dMnAiL8Foj7N8MQQH7FC6KXe6hU1mTTnKgFTKqqSqh1hYjaPUvwoM4ThsNSqEn782pbcvtpiKwaqqvtvfE3HKvx",
  "key31": "DBBu1LgUkp5c7JhdRRf4MmAMVSbpGGCcevUhzGXDZaGnCH8XG2HgfR3HDZrCiwG64A9PLNKF1hx2uLJxy5Q69Pn",
  "key32": "5ipAGhH2p11woUHmGQvekd5xnVzbzahyADYDYqJx7qdKNFgaSE191NRqDVE91j1iCQYzgMomf4ja36m7bN1wPDpg",
  "key33": "qxfFgF65b7AdFkYP95cv4XwWbvHSNVPmmxLthtN8nfBNJUyBzwf63BhuoQoaiLECkReK3v9S5zNyx5fNfhTfper",
  "key34": "3hjGFRAxvcRLrUXEj5BFXm2YFwHuq22xR2GyuDyjD8X9wd4i4ftwxkfoz3QmkD3akD9esNpWHLk4KbpWWQBRwWyA",
  "key35": "5NmqbgLxXSybgZgC5TENiVA6pjLAo2JhVSn1Wz2T56Hm6Mdqxdshx3JaLoWZ3SHGYYaSffA47SzWv88vSvtWqwx2",
  "key36": "2K3LVB2QoCu2QHNU8wg48uW8uunqqNZ8WUie49mMNdb6SEa167zjRiUSqxwzQdthxNfNNZaoSRpDUc71D8HQyuL4",
  "key37": "4r6SevdqVrh6RfE1t6kSoYHtUHBw62tZYQqK5P8JsDj4hbya5pkNm3Tzdh8xhENzkYoN1tdN82mvUCdZhpBxFkH5",
  "key38": "547ZeYyYbxMCDEfneJefJP12phUuAUGYSKRKsZa7ETWr763z7efoGaHyDoJE68oJrcVZAMNyPL3QZBVysCkoT2RW",
  "key39": "42KCEr53qqEpiVu7NiJVpWgYzLgVkYBo1FvYNhkQSBiqVfT9QQpZxpZW36MiBzHqvKWsqAzA6hjWnk4pms3p21qJ",
  "key40": "2AbcA2Kp6KpvZz24wS9EZUUMh9oskqLJpA9S2EXUNRFJE6fXUJga9V9vnhjPYSEi8SsApQcF6VsxyvQFsgYigp8u",
  "key41": "41PXMTLAjusGYMtroekrdAkiDNuzBze8YK8CwD9BZuDubzrLCywGfAT1n5q2xLjn1hxj1RdVhwsvp26j1hHJLNRs",
  "key42": "5i7i5PkFcebtQr7SrT8bAwEDmU1Xh2rC2jrpAN9bdRBCTHXDpnVoVxE7n3BVosvD3pHJ3VLa6seRW3Ttc2TiWeLc",
  "key43": "46ou3jPyMB9tm47vguTtefyjbo9x41wCy5oWautsoNXAGu4mBFruceEu4eF6A6UyEarpUrVPNXgdFk8WobfKscud",
  "key44": "2YdBZAiZRs6aMM1Zjy5cTqLY27hBg5puLSGGa2A6ApspTbLC9bkaFoFFjyAehP6Ed83weQBXMFBgsTSZyhuC5UP2",
  "key45": "5vNURXiUYSS85Fh223fYKCC9vs4u5RFifqMJVT9VSAAMyG8e7Nfcx2rGkrhajjvaYg7CpHe95tLZTDhWRZREzJmz",
  "key46": "2Z7Tr4M5iUNFVpVzpQeGsMtnQiBQUyn9jYiYiM996koqrEEN519hM8Q89Bcyszytu9DT53fSzQPSShizw4Pd8WwQ"
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
