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
    "JwFgJGPTGPEXsCSA51RoptQekxsWebUnqgPpThR1gkedRACnp18S1rVHFgdXKsiwLrrdPuvCQxw71VhruUahWdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UvwnnJhWaspNPRCQ4ZKdiXA1NGgquKatEPem1G8cF8W7pnvuSUtU9wPQP6UK3xEBG6ZaioKKpz8mTXdz6nreQTp",
  "key1": "5XvaCUqUwLM6joucnxTd57catDL8ZpqH8UEVGiADTs1k2z6QBjPR4PwB8x991fkUAivZsavpdwVapY6hFdjGPDdG",
  "key2": "67fKUmw1Br7zxUp6xdsHctZXXsNRz1rifBMG947xV4zuVqhKirwLJw8L76UeFPrvQoouDwUPyCa5uPZ6WMBuQ2Bx",
  "key3": "5yP4uW4jt9nTDAGfRVrE8HShN435oTetdSDravs6bFkbmCDTXbtso9UMN5xGCU1HYzJsunfXKKHnyEr7A8KPL9Fi",
  "key4": "4aoVxmXwoYApcyGf7BbzdPfid6sMtobH6T6apxvTAtMk4cXdLu5sw8dK3ADn7ZqHYpbv74V2sLJSQs3sdXJdV32a",
  "key5": "3BtpzcKfZtSSoDyEBRm6osr9RogG2iYuVWMTGq9HznScJq1Jr8KDkRu49kAghSuFzPJWgeh7nwSbVjugxAJVEk9h",
  "key6": "TAfJYaRHBYkDzk4wuSQnEvAVgkYHK1R2xQE7UttY2NEeKtb674QMvLAR1b4E8uRU1ZX69RAe6Ah2esDWvz25o8o",
  "key7": "59wWporMpvavJR1gyqSoXmwUA9mcZpvEnKdkynLqK9GPviDrGxewE2K2FEdSmLhKncfsHuqcVR7tNqqy8hcP9oPf",
  "key8": "4nGJaxe4gTsA9o7cSTKtp8tUbtJrUJGesP5Fa2UgqjF73HzScA58wAitGtnoyJU1CgzPmLua41E2HJwU7GfgYiSK",
  "key9": "FTefPKruaHkdZsAn1NuUM1xobfBqvTuzcWDnjHnddd7CjRgWMiojt2HGtWaSGgMBDrpuFWqKdfUkKgLA2zxUJmX",
  "key10": "59V6x4qFct7Pu5owPc42UGzQkK7u1ii17xqa7TRcUMiebRkdknDx14wFNcXh5VSyzzAUiCN2aCh4NZjgF9xYdhWZ",
  "key11": "4FDxFA8ry6Ei3bZswryVoCXVA9rUCYbpnhraEYWDrvH6mzg7fFkPdarUWiFk4XqQzryftdeniXJuaEXy62t9KP5R",
  "key12": "2KL8TsPZr5FcpdHHWWdemXudnSbk917bzbeNkN3mCgPRjF6xwwskaHv14B9ANXA1KNkzdn412mvzPCp7zzUTbpys",
  "key13": "2PmwLipLzjG16yz7GxgduiCW43sTnkASUotM9dYfxTzWPWp27Mwi6DX9fzNsNgATs99TcdZ5itX4JjthQxRth1Va",
  "key14": "5B8TgWY4gswkwo3tY56vTWXHD69KPRpyCEzuknYSETUXGDRE2yjVNgTwKSpkcbc6PYPD1i7dedyreXZrucz3MkQ9",
  "key15": "3a67ZP89duVSarVsS2smc8BybhyvDYKiNdQ6dZNCkimHLAEqmiJmAqZpxEXaRxhyybceVgPghPmv3N5Bde52wamM",
  "key16": "2jafaGTMmHA8jGNFZ2LzwQh9giQ419rnNSh9D48tEE4jrTQifraDrr3ns6CpKR6zKi8YjrWFcS67GWHBRhpTfhgg",
  "key17": "5bEvKKqTnHdEgQXBtcNt3fKyNnrs1ubtRzuE5oQ8Cdfjm6rm75piRhC6Jvm5SNzXxcm8t29L4Y4pwScEyWaUZ2fj",
  "key18": "5QYDepxip9eBVBkSt4t3xbNYgNJUwThmXzRbmhL1VQNWa9i27RZkgummBh3JKMbJzeZQcgjfccKNfaiMSiSQRJN8",
  "key19": "3n8AC1YeqqRhgdDFQqdL8ejzcNRLcxT8Bo5Q7GfnZLVsxBw6BGrLyLE2yYtvdYShbfQZUaES5Jksr213hvst4Mkg",
  "key20": "4tF8pMr9zb92SjKhG8DBj6HVfeWbo2G5XLnrtr3rY3Gnvz2R2bpdNaLPxbkVYqVefTMTrUHJkiiznVYxmQHKsLw6",
  "key21": "5sFNU7meae23wh6Zpbv3voVhg4JTrryFxvZ6AJzPL6UQ5RfzSMQCPAzZoBxNu1xhfwrfimY8K3TUiAm7cBBTatpE",
  "key22": "4gozw6rGjGw2c6mvdzzTdbVXNJ4Co7JnydmKK4ryUqGvgQgndgeT3WJ8FDhcPw5vixDMr8vfa3aRjxpxxi3xG1Ha",
  "key23": "NCpUEvvk3yNhbLhkZhiF11gokVYJtdzBvkamRBdVVooWGEKPV5dxhewJGGej7QmQmM3gtyLJNUWTCCrgjD5R8iq",
  "key24": "4M96kM1o4Bd6xbXC4sYAzaspTZhXgHbsiqt5aZoPtwksCGX5kke4LXPMTssd6FLgpmp6BAuCQPsSFcqzXvjaesSy",
  "key25": "2p5hmH1S7Ep3kaGBDP4xC4nAcvWS9Jp2kAH74wZ4sLGA8U1Zdra4EQCXsYtDNQM6Pm6BggnE4e3TUDVj31UanUxB",
  "key26": "239579wrpKUH8Sy2ZR3GQkCTwRizq5jRXqYWqM6PduGHfxNfzV3LA56bKtMnSLaaPghmjsa194SfZjYa1N47mYnc",
  "key27": "2TztncG2wpEYpFrg2PUsCW8bqAUtq2EpSrFCjzAWQoLejLgdmj5i5Bcrvps2vfMTpPg6onSdmnfernC1n496uAdj",
  "key28": "5N9ZyPbHFm1jJDaFNdUF4h7J3dAWQmwfRRDivX9rEyek8PWmYX4fcUMxshgfNv6joXQhsnG5yj2nnhfK9w7RUNbQ",
  "key29": "5424XHzL2SF6C8Ye8FpYH95wwJniiWr3cVWMjyKRhPd2jC4KhTFqXW4NGt2JYFXHqABxNZjY5orKHXGgsqA3tQa2",
  "key30": "35eoUjpKMfBkX1kzvYDbhjEg8fvgKbeCrdo3W4LuAW7ehKidSapS6giibS6y7vAN2HNdWbRZRrfS9qhGEVsS9RNc",
  "key31": "67T9UaHHAAnXB9ECi4sfxS14sxANx8AZihaRGLQhD7GgHUeZZPxRmAeyjuWf85nSjnPokq1HmLgaFKJZphcXS2ie",
  "key32": "3FidAwcSgrLJrLFb72fLaPZ345mcYfxKLM8UsNAhjNCb1istrxAioh6LkZWj2Fy8h5RxZBt9Ejpvi77CSJsjvDYE",
  "key33": "udUswnSjaa5WG3pUzrCB1yVeXqehD2y6d6z78FTEjbPLEsdGtfy2PLKAnCuZ3Gv17ix5LgNspH7cX99fLAHvXpn"
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
