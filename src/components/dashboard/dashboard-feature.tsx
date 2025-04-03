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
    "27DbnYMyaEWh1Q3jxycv3vnCVSrFTTsxp2xRfPnCcknMDMpnFWccmRed1nFrEcp2kgnGD76xuykUxfoyC2siecKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qqt6ewWCUCZj9pBRaoJKw1otsa68NQfoWt782d5JRgiKjkzH5hmkV1sPCmYr4h5pSEhmV136dgCkGJ1eY9Y6pKx",
  "key1": "4kBDTmMxWqF1vSFxe8i5fXVHu57hocgjzrT2mjJqHGNyDqZ3GoVdXFHhfxYGzeBc8muWpqF1JAB8emqcmVadtFhF",
  "key2": "2icF7SeQ1oN9Lmp7STzVPzbKb3GgjWmQusR7cVo4QMBiLjdmMkL6hQUUC41yBn6poFjtaZcrTFpuuNgHmA5A4m54",
  "key3": "2HjAkHJnKEhkoVvbCQXVbKpA8SV775HNgRja5XjHTVpZofiTNum6c2eMpfQN2W5L2PTiqCQzGn5rzVETuaXLEcYa",
  "key4": "J1rzD3r8hcYYwGWYrhH48iQ3pPwBWmVcVYeSCszwkBXhMqU5BqV7ooptfKqJGuxpnjt2NVPuR544YKM5Lj195Nr",
  "key5": "536kpdyVjZQH1iuTmuNnDn4gDzdeCfMHbRazVmqwUNFYUqGtHeboRw81ji8y48m4QhAPBYUZVv1eJeU3E7G2Po5c",
  "key6": "Kka2T8CMuQpTWjHcRSRWAWC3nJoHjNpdU93qGcJCLXbkBcrkWRNNSdZzUZGYgDYRUWTVqQ7c7sNbYKAzyd9UFe2",
  "key7": "SxM7NSwEFjaAcPXx3VQ5PnFZ2UQZmkYBy6XqBvbpcLiPGEWMF1Q9JP5KxuyqR9akfS13umCftTGs4v3sZsB7pNT",
  "key8": "2iKuzsF8urCKeZ18rNCH5a3DhQYPbX1TH37b1w691JJhCdZP7qPoX1ezBJTx5Z8wEX8MKWMY2bJk72uqMKYe9NXo",
  "key9": "3EHNPcSZUGtfaY2NiZarPEpnBwVpXzG7aXQ2RdmsJCGrYnJWzvYG3LvPfSAh1mT3sR1qts7jCJkLukVADTqWJRng",
  "key10": "3NRmkxm8SfiMwrnAumxJZUZ3134UhGajLpFxR7DWXQpuj4VrPSzyC1MeyTY4baQ5prKuQRW16yfpLbufRDTWQkgK",
  "key11": "2SnfJ5nFPLaAfoaF3QAySSECn7ccgAc5bKWKzVNbgJANoDKGinUhoMq5HvndRr5bKs8ggWyED7WrTaAJmXM7ZUc4",
  "key12": "2Zsey6odBJvdufgWt448cEF8ZbJEbzJE3xdL4udZQ6VcuG4NBjcjfjcFUojrxNiz5BBHrUNkSMaSVvYBZDGiBSnu",
  "key13": "57ximCCJWgHE2dBZbiRRZWhFm3oSxmFpTQeQDnKJMVdE4vTTiEEMTaXz1F8de8GQPDyNrBemMX5EhvbSM5BgG1ba",
  "key14": "TiM9bdSTW5dgBMx9DYfo63K88xvKwUEPQM7X1qsUeK4YQuoyykc2N1RGvPTaxaR7WEy7C6dowAzE1mehYyKBXLx",
  "key15": "3L9XTJJ3ESss9Q2cxZxLzxQ3cPG3MeTTb1vE9nnkmREXgQfWJX8sGNttzDi6xF4uYvdPpTVpMk1qJexwiYjrcS5h",
  "key16": "2NrmXu95Sv1xxexTED7Gxuoh4qy62Rh5Dakao98SfDmwsZMzMiWPrnuh4E8gNzaqXTqNpRXJNadNKJMvE2pQEpVC",
  "key17": "4tUGDF8yWLahgeSGYsxLBx8Zn8Mo8RjuyRpfaF1HSVZwHwPEVkpY5B2Mbzxet7mYDxTPvUfr87c7wWGRrshRcLCa",
  "key18": "4RygZrrRXhbgk2gunM386CxoNnSLqGAMvBUP1b9jvSVmtkPLL1sDUbnmAUZoUGRqs7m1KtGZsJJWskR2Qr8EdZZY",
  "key19": "2p9RFAUSSkVPdaDGgLpt3W7VXRbFfDvjrnQx6cWrc6kMa2jWWsN5CmpPbuP5BYAbh9dEeNF9vHArV9rW92rRhyjB",
  "key20": "csDgKheWHzpa8rnCv5sGALJhmor8JQbiRbLdcmjtnuCNqr8ZkJrStNZEopg7ByZ8zo4BHZKPhse1f5FuiU9EEaA",
  "key21": "3w2fePTFjDQCzsh6T3mMpCMK1pzYgVh9R4TkdWCcqQ6qW1bazUenxx2718z5teniZdAW2bBm8R99Xt29gT1TQqg1",
  "key22": "5jdqQATjcPjBPMNp8FE2cdCXdD1p7wKLJMAjxkg9eetG9uJmWods1FvXmvBwBAtrw15nPp5sdvz8RMvBG2L28kN3",
  "key23": "dptNz5mc4G165LgUMpAy9ZND712DtX6Nn85HLeyE2HjqiiU25WUpFrBMSQjBuFjiBGzzZt1qDajAydS6VZ8XFN2",
  "key24": "3zXYGGomb4WKz9mCXdf13zxwhYStV9iTbvB6cz33fkowHNUgHjqMVnyE5iE9z7h4Ei4Q4J9fkgSsiPccef46U8GP",
  "key25": "3uMziuWDfbe5yf89vJsRrtV48Ch7ANGRkag723GxNNYqAbyNrhmCijev7bD3jaSSqt7VUAu7twg6CHoQFX9m7yUc",
  "key26": "3Sfrunpxg1Mh5x1v59GD7rr5QPctF2HfyF6fXxuSWbLJHYVG5NvuStKjeyRZe5EYmfQQhE7qHBK6iuom2MXHYQU2",
  "key27": "4KhDvFQS1BMwij97eTAjfP1iedsreeAH82fJKpsct9u6d7Av5VDpyJazJMuM9Bt1tfcwuUGGW9VqkapCsf9kYNaQ",
  "key28": "2wJJ9HxD8cvvGgt3o3wvqveMj9Bj835QeR1uV9Xf4SYw1LHkv7wm66u7VfHX5ZxJVUKmjbo9NV31p8hgHXdmDEsF",
  "key29": "KxmaWs7aNgsUudTQPc3ST278iRMia5PUwD7Hph4i9bW8EGdFXPbHWaZ3WQDydsaVaQj2NacGXcoYX3pE8qyh5QH",
  "key30": "5mCdoL9d97pjrweafkaRMM8fAfr8myokWKNLJayogj9Qm4cJpk1r9CCA19GKSxV7krWXQXwB3F4rNgAybBiZGGgu",
  "key31": "45dqjyVeQUtbJ3WE4uaXUygUbxtqE4j1o3KfibS9BkS3HSp6LfGqyfd933EAfybYgD1ZGFxoA1VeKufvy7aUUoxs",
  "key32": "3SHM8re7jxFV4hFJdePFhboXnctJ46FTecCh3y279Zn1JVvU8gSwvRB6koH6Ny6yCuykjk9t3zP95xF1XThJ8VbN"
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
