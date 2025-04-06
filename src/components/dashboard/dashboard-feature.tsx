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
    "4Eb2VcKzi42X5DQjxEuzbtyyTZ3bXGNQTRhnTry5dJAK9Txs2mEorxb6RxkHpBAqV52JLXA2uYtBMhUi4gv1q8bR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xzkWKTVrWiBsGMgxA76ybnZ1NVWEYj7TVC2VNBQ8UTD8Hw8csXsabyLyxkiEqhaH2SQdPkikNoURQ9Dkis2iezE",
  "key1": "5QaPf7HAyc5URSZD8odxqvCe4DoxgHGVctm7nV2Pkuw4QZXkfr7aGTzWs8UftMviEoert8FVLYNG9PsHBzYc7zqZ",
  "key2": "5NffdJdPFzBaPL5e7G22a5STateBb6xyD41MTQiKgwTyrmkRzaCouGz1EFRo4arU8WWHuK72J9mQHzx2E8YnD5Z8",
  "key3": "2j34cFvYowuyas2PnuFVMFgfzrN2x2McSFrsc9aixdVGciL36Ufp8Wj52HvnqcPzS8Az93pakVHDpikqT89QqSjQ",
  "key4": "4FaFAGBSnjve7hAgLaEy8igFgG7rxGZQMY6FhXQ4FbqdBRpruJ5o13HLyPHKNzwov6vPNDJnhwX2nVT6Sjk6GurR",
  "key5": "65964Zn8WS3eQ8uoejZ8XXiM6rTcVYkRNf4ZZSX91ooJDSybKnCsYwhaokg5gjzs5xA7gYQeLZCDNQs5Kf742kY2",
  "key6": "ipWwhaoUd9j9dyLx9mtpVVgZTL3CRwAZ5xfngHx2cLqyqhDM5jQceDR8hqi8K8v5E6VmpgQUaapxhJEtazZX1Au",
  "key7": "4m8rhdjHVzV4PEbiaLTbzLQvuts3uX7YeKn9rJHV32ucFcyD7oHNjgdZXaWLVACJsCHRgt23tpHVTTkssT6Lo7KG",
  "key8": "cBS6N2xFWFm97DxNofe83CdAYTAaAsJBEP4A3YCpj9R4UyRrWiRPDVxeJsQMX32mZFw7Qd1Sms7fUP7hVToVnZe",
  "key9": "azr6YNpLJTk9ZeJsmqyxM125hxTRYhnJsfHUxMx7yHqNAkt3v98FGpNVJvdVaA4oeuRo5EnVnDL6CsaH4s4Rguw",
  "key10": "2VgfhCVLXd3kYTiomLUh1RdNEcs4rtMwdJ7p5pMp8RY675coDQfsajkCptCi5mAwnTkDTWyek1GoocAhtPVTr9B6",
  "key11": "3au4qX5NMrgcjMDqvLRHLCr6SR99iECk7QEc3jETYoozuNZukNy8rrEEvyPwkhTMekCqXKePpnw15XKh85abMMmC",
  "key12": "agkdK1P9MLeyoaCKC55yo8LLwyicQxwXPxc7sdBZfLkjjw6ktwvXEc6yTyjshfMmkQSvW9ZjSW8MLKbzHZeUR9K",
  "key13": "2d79wNHa48o7owtPFkdjs6LSH43fwpxXgYLdwQeLZq8zoQ5HmuqUrkdQqkZrgC1gmiuuKPrFRwdZ88wapth9VGf2",
  "key14": "2T6Q9mS3Uh6GGEdGss21iEmiUpsyhKbVxTRPUPAeysZqaM6A1YHyfqXHy3Fu3XoQtnSFEjimZPaiPJJHWzV9tVbh",
  "key15": "2CXFLhDfDN3vR5GC3J2oyaTgC6TDZzCkxfGH3dEbtDEH1tKENFxqSeUX5FRMU59Z4ZvBgAbPWay32WGPbxqVpUBp",
  "key16": "2Dc3TvKZ1yZY1M9aT8m19NPjNdTEEjePSeNWtCeQmwWh5dYrYfqdL2hK4C9VzBqJAmA4wQEkxo9gk4PYFaDMBuQd",
  "key17": "3JCLKk9T1DqU6puWsfUwjpt7KkqFiZSNVdmmnhWmXm21c6FjqaAnAGbm72HEu6fA1YL2BMbAAYYbrbCLWqLqoiE1",
  "key18": "2bmkd1SjVSYE6xnyD33rnV8X4iBnDY1knGMFFsGbmRghbmnHx3LGGjHs4Aukd6PV21iUA6XzK4rsVTKJz5h7R15g",
  "key19": "LNQS2zpAC2AA5eAGTH1fSfDiDS6rLgozi6FspFPoa9onEku4GTWj1HM5JUfmtti3tJTjwEFdbFTQP5CcKXzqRdZ",
  "key20": "Q3BNXZXXZwt9gqebTHNeKFLMj3tckLqEMC3bPLDiPcgnUucAGamTQZxTX1baF4WpbQbouyzkGex98RkBWZnPbaM",
  "key21": "5r2H4wGkMy9NdF28hK4f1mWyxWrxdP2m2Bv72GgRS8B7VSgEaX6kj6ts6sg4EpKaMBmBEFH61rLm7xu9MehLBT9s",
  "key22": "39JPWRNUrzHGzqugedDUdPGNDm1A6nsT3BTCV932G374tXScJiF5rcRRYKamdUMqqupBqMHVH56aYedXe7WXWuCB",
  "key23": "5xsuUeBy1fFCkxS23gbbEcbRhnh7uSHanCnNwQZYbjdm24esAi6owEcHsbuYRDsbR3FegSkLgUcbq7Sm364S3KAE",
  "key24": "2RZ46pZxEAj2dHsJ5fiXCTLGjCcUbq9V9XHSKcSfaStRWGFq9Z7NBm2iVow7G3Kz36tRZ9SVPjNRj35ze8KD1PaF",
  "key25": "H4kH2ZjrScJcSDdXKUoMWdtfXMv6hgTHuGg8QhbQ3pi8F2moJADNDj3hyMFnZWKmiE9s2gzfHUiWpmyZLVK9Fje",
  "key26": "5tzMx9Dz8Nu7bED6bB1yZgmqvmzowSFDRDrVs1Pe2KDPraKZ1t79X5soZ5MvHzzUPytdpzZWC5J81YnYBQ6FHAgS",
  "key27": "43CgMGhdz5kripzvYTT5hutZGPzKafkdTKHCz57rfM3jNjLprZWmLFCEZWMZdTQp7UgFoJwGactng8QEMtDcB5gm",
  "key28": "2Y5kXYeSDB5rnJMZtTytddqrCStqBjQ4TJcKxZG6Zf4SckXwed2FiKzDePwUJep4ZqiwLhrfJP1L2Abv3dQshaC",
  "key29": "H77mDQN6fow5AN5Gt1ShJU6xAZpxE9MjTAt1xU3NGNTSarHDui4wt8w5JSqzGtjaH2KwDrSekPa6WtjW4VQMoJV",
  "key30": "3XGzuAA2vLACBLaAmGKbDtKb4QYPHW3JBS4cN2n5o3kifF1sk8Q6izUnv9LnRtZ98N4TSNvtVBwpwmVxegg8xWi7",
  "key31": "5Ge3zV7QDTDsxBn8ogwUZ3moM2fjhr1P8rKZmWSjLsysYk8bdXjR7G9933HLNCKm5tCGQLc3e6cDAs1u9RYSDFKB",
  "key32": "4UhweZ6BXhEdVoT2ifSZoeQ3kMg5eMw34fBjZoFgbp9D8YAf4zfth3nKnTsAkg6WmTNGx9F8V7iuzQbDdfzo97Dv",
  "key33": "25CMjuD7Ysd5DKiNve4uxPUCBwMxcBpToPjwreJR5gEBRcQV5nkAVa8pgeUCQzZwFkpp6BmQghH3wCjsw1Zzzjxj",
  "key34": "5btVV3NqGrFsa2FxrsZuURBLef9f6usb8iLjv6FZp9h49gSs2ck37y9zA4eApZz7fCYtu62VnQKp9A9J2bxxcDwJ",
  "key35": "43pN7yjGxk6ptUarVXQuuLKGYcppTdFnUmrnPU9C1ZgRXkKFNss9EB5snBQxnmHyJzZJkS85wzTvcsNqu4jr2dGp",
  "key36": "XYT8zbwRCE7z2ggVfQJFBRS62MkaRCbGTCTiJrKXBwmuTKA2pUepA3UvWTdKEPLvwVNnimJauyFEy2EaiqkXjqp",
  "key37": "5YDmyRS6MMwfxgdpV8enSewMMboy8dfqwTMwGsim8DGzJiT8iGs5hUPf7efXGZUTcuNeRH5gUXqa5ED6JRMLe4qy",
  "key38": "29KVuFvxA5JZbUuureJ1U2sT6s2hygQxJedHdfuRiF66uzAVpCRH9bBYo8Xt8E59Zn9pid6z23yS5K2HfNjZWN68",
  "key39": "ZifZDFog99JsaRPjJr8gFCaHHnNCSabGvrTZQqrgc3vCZ2vRfNFh3pgCVmQNfUZEmSxeFkvWuM6iyNbNUwXgRyw",
  "key40": "UQ67kFkYtV6R4tUEJj9xTkuHM8Xc8EjMzRi3nKGkG7bd1bG2uQ9spYqcZWBKiyw7URVYgcA1Mey4us4JE3ccCzF",
  "key41": "4dFd6p2zpbWc2bHZp2VMD3gX7ttGnVv4fGKX6qFh4Y45u1qw3g3HDEgH4uERaSHykPpZy8w17CFgqBgWLhpr2Pz",
  "key42": "4Dp6W7iqk1RzGFuuiLYEFeY6xy3xJU375xCFeimwPZGNcuandrkvu7uGpzi8URN2MmP1PB7m8P1HjtBkBUC3N8PH"
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
