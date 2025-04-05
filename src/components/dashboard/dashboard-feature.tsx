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
    "4PWWLK6NguSiBphsqVB1kYYLgvZ8tARE49hv78wpxWfFxDPwiEidRgZCwduqBATzMVNvXMK6K8Hsuz5crJxzBvBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s5pCCRrMgtkhAAGCiHJpQPdmnK5nf2qDKTkgxohXWucocuZeirWxufnudmyh2mSL8RvZhDmi68vWWLykNePr2aP",
  "key1": "xiJUYCJkZGKA2scgUGUHcA79XcTrGN9FjvTwgdu7EAiN4UdDSKrMDsZTKiQ75UeVhwn8nHMNDEkZb9TL9HuB4t7",
  "key2": "5nSKPHdBHANRaMiCLnWFLy17SF923c2aGsdNk1ug5NJHejPXQ7FhprPCZ4uSkJduPz7GxV1pjeKRwdj87JAHHPXw",
  "key3": "3msXp2RVVFU4YEtvTBpjpLnYJ2A5mUbSeoU7AAxh6rhnDCTzY58NKVkRxgBcWEnREoVbFMVajzgpPJjcaZNhrSk2",
  "key4": "2tjgGAqkmxUVsn1mTeFAxsgrsc7yUaEhyUf8C6MoiQWV7jhtEhXvVPDGpWuNYrK1qFdhkuPn921r3RFuVLnR44td",
  "key5": "35FzbqkTKUDdahzah17t1hGs1ftjyAYW55pZRKW7nZHXH5enY5hef5ZjSSZ6BjJ3UMtV8ySqtc4xxTUdtVccj3nd",
  "key6": "iGZDfDwrz8Fsz7PXVsaitkTYZ5J36VDVUQp8cLVFXyAc4fMBYtDxm84ZxHLRorYP32gSkdcPiL5LgH7g3zkct7N",
  "key7": "5uVNWbLC8W6QCjoKdNhE1vFJPMim9S6efuJ4p7eqs2Gwo8C5x2jKtKp4MQX8pHnkxM2jwXNVsygfTdhaZf4WCMXq",
  "key8": "5Fqjqpq2m7njWAeA7GjrKo7ZEoyiDp7aNYHfoQMEzRRDYJhQNGL9PnKDmPAoRX2zBdS5tskdF2FbHSLxTG5MvP7P",
  "key9": "4PBL53QYevXqUx8xhrw2e5fKQhu9jxTDzaBShXPfBQ5Jx1FGUmfpKjEsT4VAdzEWN9jE5zGQYnGawD1VpJw3sejJ",
  "key10": "54fC7GnjgBBGVUCiRzwuCvER1KKgLxNdWkQcPzDW4g8LDMirabzBwWYgwi6J51aKzDLJCXo873ZvYdmRU1L752Ev",
  "key11": "57Ycd8qfyvkrDn1qS1uain8qLBorhd6zGi2qxRZiUpjz3VvjUrS5sTFAnQmfEgiWH1gazL3tuAbreQvR8Lw6tzsN",
  "key12": "4vULSahd8QECGgsPrz5CJQTqGYmwZoovRPQTdTuMK3HYg6gce7jLcpQPchXWhCAs43j6qa6UEndJUDFDuTCZDhLT",
  "key13": "3wf17ogHFUQ29z68pGAAwHdirvAEiAsNFZmstJSqfKDZ9nAm3RPYPujSbtkLem8YtygCR5T7qHdPttwaF6HrovDy",
  "key14": "32ird8gdMmNgm8Y8fVLGW1utM4e2bRzMqFhh7Xv1VCSPrThCsNbhKxKGvKah272UQkSGKVQvDH9mQ78bnGqu7x9N",
  "key15": "gfcC3cnjquP6HhkKBf3TYQSNsGmoTBh76whYbdeFm9Xv7bRibWQQ82WLypa14KN9X9hogmzuTVjdtyV2dYEbRHz",
  "key16": "2dw5PsB2sHQTNKs12d19Mz72Sf3K6fZGYPxMaKsoSqhg71rGR9JtbQbtMoRDdvx2prV23ynpf23CiuPCLQMEp68",
  "key17": "5kDnWvtXZ4V118UEyX8arZqhVd5DPFdd4CA5NzJDFg9FsCzBXFxY4NjNLMTEXqa5SwPVyFDQdQENNcDdkybS7tjx",
  "key18": "2rmQ23xuJJ3EsFKk6Rasoth9GP2WJaGf1RyRUiw8F8yXE19ummd3w7qjHNakHCLCBpDmr3WrjHaoYB7RbpoPDm4D",
  "key19": "27cX8w2N4w75eUwKq6n7ui8ZYjqqGJrW88HNRF7JHTrrw1qRgcrj3sVTiJUdMiv4tirQMTDBCbhn1pmcRkPALDqs",
  "key20": "26qawzZbVeiku54TCHY6GTaYy23sckpTNAf8ovE1sJdWHWb8mhLakH3sRkuDzEkCLcutNruHS3cfuMQDWJkUjvFU",
  "key21": "phjfZoDUo6BKC6MwcXbMcMSx9dF9sCXeNGXsFhcA2og4gxwAXdtGinPPRmRdKgdZLYa9L3pbS8NwUv1pYBbtBGg",
  "key22": "2u1DXJWsyJhiR29V5UXGPEjGjGodr6d4HzMDywPS6KyK6HVWqV8QAu6pDVQszx4XVAnxjp7VDsDxnp7DP25uzJ1j",
  "key23": "3ENftz9foVnrbhKtp1YEb6mC2EAG9gac9iyC4ryGnaMZozpZ2kBknLNvJrCwfoWRbYyXemJrZRZNaxkXt1HcUdNT",
  "key24": "3L8NDnQU4YLLacMaEwFZuiV8zCxdhECLqJfL4JzwEUKk6RwGwLPMuHGz4cFvSrQrLYc2pKwwnWszm4x8oyEEcWi",
  "key25": "67QQD55tfQk1XCmtiDG5qrrb3BP6aBqraJQuL1ZDia8u6RBWvgyjnY4w2ZH32PeYaFRXMG1L5qGMo2cpZLCQPAEg",
  "key26": "2xMQdoMJLaJqZQM9UTASbmMmJzH5N9hdNhGkLkNPYu52BZaHmTE6y25G1EPBUYHoM1FSGq1k5S3eLpkUeBeyfhNW",
  "key27": "3Huuwh5mVMpS8jxBbN1NQH9pjK2SMRZ2bS4z9BJXkydyiKipDHkWmURJTWQ4HJTpcAK8qETsD4TAAeRaFx2Goswh",
  "key28": "5buTm8KwFDQ7Lukk24ug6JZ2u9CnRkJiXVjPmrbixvK3hH4xvWCGiDtcsVZJUwwBK4waCuGvSA7gNHzVkV1LzERa",
  "key29": "5cRaWcXNHAcm4EeAc8p9s4EYEgbsTKJQNXtRzyqzFiVMRXSKG2CzPRtCUVA9BMeEyR5McPYy5NcYzHK4ggmz8NJ1",
  "key30": "xF135L1amGty1SJKbAuG63KWwwmPHa9yLeaoKJVNz4P3TGkYDCXrayAHyU9EsWbrnHWqRNgp7xe1MZg6hC5s5ZU"
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
