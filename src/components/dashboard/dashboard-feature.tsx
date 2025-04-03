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
    "3quyXived9wUBseQg9tPj31NssR8UaD23BeVYjFQN4mfHYZhV1qpzgV697rRyxSoY5NF732Uc6sijcZSwCT9DNKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38BFjwkJKCC5PrfVd2p6UpJES7UFsVp4QbWz1XiGVMukXja1kwmR7mVYycPXMcEQmZG8LjCxVoXsCbjB74xrp4yu",
  "key1": "Qv9DtoELcGzUcBK3LsMc5dbBxYibUGnKtEs5aBU9QZiQftJhzNjdrnTz15yMKvbtHH4ummaT2GBU2KDk53tX1Rs",
  "key2": "3e4hZJsPbqsbgVPy3PABv1tPKkHSooo3ZW3y2gVmbas5W9XoJT13gw7AkguuSxwuCEmUVxM2zz3wS6yeEYSJ1zc6",
  "key3": "2RF4nNtuncQeBcEr93aBCE1ohLApegQk4R46XF1mCPpsSpXHaW7AA7MV2U4puVPvmmQhxwQJryf7U64ydrbJZdXT",
  "key4": "2sV6DggjctHgfC4Hk9VWRW6mJfZLrbMUggKZLpnGHuskgWcHdNUNSKDBNCiHgBzKUytEvuKwhJPasXuNMTnUcK9f",
  "key5": "5vVHz9DwNAJhj8xgdMFaTiypB9chsAkmpwnU1Ah9mKRkjRTUhUwFXgg2eAzNg5xgXePwSimHxUv68SvacNn1GPcz",
  "key6": "j5Z5MoP34G6JdcG9V85jqAxt7q5EefqvWBmRv5qnmayGm5qFZm5CRxy1rcC7EMe2qEuWvQ8f9zcMrLvTn1pENUn",
  "key7": "3MskZC4gNqHMnPQ2aTFeUnsjJ7ekXE4W6BSqha4QbKtMnb5pdadYCNrm3uLLQkdojg5hhUryNiWBgzyYDcCoeaNm",
  "key8": "2xtRhtpoqnqg1vjYgdrZ9KHpgN3aaoiCHaeQjwr1nM6UtNEV3vyNjLzvRrU53XuTv8B1fRDFGDUwyYCrKT1LhyHn",
  "key9": "5EQicAX5Vsw7ab4DvLzAhQesUMAkDxWMWVUZDAooere6Ph4P3bRPNpNgoYowqVMgGEitbRdC9cbkKEHatnGfBHJU",
  "key10": "48j529hXekpfnJbSAwyxTwATsJxBQMqHLJ4hyTCQQaNWsini4sCCfN6h5e8jTyKSPpozC2fJTJxPsrNH2R6HVubC",
  "key11": "4MQfAtvqirqXjv5wvE5Q6tVZRovq52RqFKH3X5rST5w6DMmJjobt7BV5eUkHf8YEtc8bXPVWKZo1XnjAPjP53iDR",
  "key12": "CBbAbTFJarNn3Ko5JU9jdyTv5x5GFyyWoEDBSHp8VSoXEpfgz3ta6uB5ikyX1vMgtc9AKQ2J8UZw88rfHc8ZNzR",
  "key13": "4pJuSoCZS1MbBSfju1yvsGCGKKotwm4YBk4376EdVgo75uUdMmELDYjZkTXcC1kyrdEmxAvyZyDMRQUZaibR523s",
  "key14": "3fbJyU5h397uaPV5Lg1HWJGKh74APdPutSsAXZMyS1LTXinSekD53jKVgJVAKuDRqhtdQ2eB8RzBvHQDQWcjzM82",
  "key15": "36edxjNCV1zYxPR7JxvFdXTYRa7qREAVP5m8msWspE5MEz7uPihYLJrvjm4FVDp4QWhQFd1E68YB6JAfcY297nBc",
  "key16": "2oSA6ehmjFJBTsJZnBECS7wSjsK4HtcfbV7RzqYD6YAwB2uLWbmZhPvN1TqCNZCed7i5NBXfXqafCrWWR8XM4Ueb",
  "key17": "398wkEJfZxuRd7aVLQgFHJRF2yox32UXz5rCatMwkvFvnKDsHpGbbD29FRyLCuvEueeUeahHtLh1SsfismsEG79W",
  "key18": "2FC2sjeYoguk1rPy9wMGmYwGaWY2i63ruDRYoxvupPW8gjjue7QXyuJbQVjM1og8ZPCmuKmaKth5fQBzGivEyUox",
  "key19": "962NjfSxx9pjihykYAQQAsu2ETYaYY7w2yd9qYNu4uDzoy26hmrzAKcYnSfrmiACGkLzYtypaJbfwkXKgdo2Bjr",
  "key20": "4jRCJNFz3Kjr4i2uedsuPkxy9CnC2HdYvNjJTERq8nCamwc9PFcihuMRtABV57yRR498tkW1iM6jz3rPvwMw3jWj",
  "key21": "YweNi9QTZMy6rPimhtvm9CTj28hPB9e3d1HmRziiqdz2wthXnNpuXnLcG5V4dmth6rniWFiRgH4PN5iMpoHifnz",
  "key22": "KoQ1AKJuxfV8nphabtLFBLUhtJP7vGDUAK4FoLPAufWBg8PDGTiK1y9ovUidoKetiwLAA7xGs2GoTgkXmRXdRwr",
  "key23": "5A4GmAb5E37EhfgyfFwM9hA1JjNzhBmK1RE82JmH8CbBEuV1o7WDuH8D6cdtjY1dyHbsvmaGcUnYtJWfUS6Z9BWv",
  "key24": "KLAtSDpBxTojSCMYotvYjyw3Esx9qEyQhJ7pKKfX6A4Q29ehj55pJ5C6qCLDSqmPMb1VLx1h6s5ToLWJmAZ4bqq",
  "key25": "4wSvbT9ni3iWHXEwyYofrgUA1HsqiboCK6F8Fm3fhjaU4GCCF2qyVBysijYjhjZE9y1SyHnBRQ24LMCzU2p2aWpw",
  "key26": "2zscCkRj1e9phB77aEb2vZqkpGKzHwPG3kmwoFZ1JE2tf2sPMyU25JLsu5BiacAPogP25ShPVfYto2HuM44DkDvK",
  "key27": "opFr8GMgqskHSSowx7yTiVNfp2QCvGLVu8dLgy6uuU6hJb5XdjPFM8Ro3TXmErYFDuQ3mivZ9vhzrNbyoztb1mx",
  "key28": "5upoo3kCsNtMgzGVriV1pXXPzkTuuJbTDNmU8gtezQ1j4zqafVCYbAV6knFJDsN1Yq78PUf7S4Fjg9afCXMjBA1x",
  "key29": "2JogBUiCoxihkYiX84fefxxV2isH4D2rhscJUHvcgCZFd1RubfxCatQ2Qr78zUiTod8qivxQYdY3mhFDPPqj6ymh",
  "key30": "3arsMC4BDs1CCqxV2tEcv5McYmz4oQNC7fuJYPmBi3XXKAX1xEZbTFduwHUDcTUBnViqJoxqyB2AFnd2fvPJ4inZ",
  "key31": "5EkE5sGzqmWxs2m1PAaxzZWavPEJM8Emp8kz92vuWSXsk6mjdti7uYiA2LX6GpYQCftcDwEEwVmr2hSZiHwi7mfE",
  "key32": "465CVh2zTeM2jXkx3kY5yynpJuCphpmXUceG7MJydDq8sGzYcXrmoAgTHLiP2iwrGMC47ti4V36QsniPpKkMpCpZ"
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
