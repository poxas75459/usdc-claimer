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
    "4A6D7p5G2WWAAXk1Vu49aDZpK1uQbYxGnUcoiVviSXF49Fc6fWcAgz8BbJtVSXK7BuV2LCP5LgBiicJmEqqc5KFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VaPhqfBid22N6JKZj3PEHWb9pqDABvwpLChqjGMT5bUSYb3TrC5Y9sZU2T1v4VPJ2hCYFVKubWVidsZ3djKEtny",
  "key1": "3KaeujxXuYfT1urQszTHcYwARofcKf6Hb8geS14KDZD8Kwnpd9kMGwp44mpMDrtLVU59m8TS7Nq1SuzuqRZV4H7x",
  "key2": "3UYK6cAonzH4woABa6yWMnPeBWHDzu6gYrok4JjndE7H6xb4ZqYokX7wnocq5vfdoqWSSXfmbxL6vjV9idKapAKN",
  "key3": "33f1orAs9yqTe7a9y8vYp9EC4isWyQ9vQPGue4ANCzAsHemGzFr6562tGaWSDk6d6c4equqjrPL3iqBAogCcEViW",
  "key4": "yoTDRbNjHDb2NATBzRdAs8r6gS7LGPNa4i5cdrDXXZrvqrZa7gqdxMeNzqLF18vhXE6D47vYKseqSvuJkMxKrNC",
  "key5": "32CvKoFyZxFBZQMbwxfgko7oUZP9Yk4Yf4KZRcWJjiGwT9Jt3SktFib8HfbBByqnppQJACvf4eV61u43Gw5LNRQ3",
  "key6": "3fnuDhqkw3veRQ952GbYeoA3tT9RBDpNq6aAjFDj4CMsNFAjZQMrHfrvcxAk4RAcMzayGSew2RSbJABWxoXpWrE5",
  "key7": "4pcHDPRcaL7kD7VwgD23VGvGhehrFiAKZ1PYMp4Gu9KHb77dPogbHDkb4TMFnTDAhFkhSrWTkkJbKA4GbpRUxuCe",
  "key8": "3aWJVBnXCWSnArC4gDzrES3rKA1s2NiMKXseWEvDCD6xnPMhQmYNYUqyckswVRdz8Zucu2gsvsAkjxyJagGTC8Th",
  "key9": "5VKRi4A5jnbeHdEJKZTJhN6RuUqQQh24zYSuXRrzaAETAwxqzSzjYLvq2mxcVQTgT4FipjQgEj2pZeHzpqu7TZKA",
  "key10": "2LDBWNJzPJh9D2VFfHQQLUWrf8DfqFobFLcnRVBBkvk2EgUVQfomvE2usRaA9QeLgA4Jqx8SauNe6JScnM78YCB2",
  "key11": "5QSKPz37RHdKMT7NTEV3Hhh7pPUsWfyB7swLU7PiBd23w2qwMPzYMNC6RfQNFVsKrYYgtq4BuHT31g3dvuWbXXvV",
  "key12": "2EdfWRWAmoyKiLr6uzmSZ6afc6eqvWHvkjNGDpFK7k2CBahpbkcLWRaeriDtdLrac9Nv82L9qKPNrhewknKLmLrE",
  "key13": "2HFEtuTJktYTh9NwcaPzUoG6h9fVxYt9SBfmYXcv6LpfaBx1Uconep9nTrVnDxBv2qtVxzFhV7MYpsb6cXKjwJBi",
  "key14": "4HgQCsGeVmbhVXP3bpGQkQz7hYzjgPnFqDEhF53hr9o4UaLC8gBGNP1fNgtFfAHKNTEavd8gcS9WLWqH6QjUagar",
  "key15": "2DnVSayd2A85tEqsDPfBKYMyBHgpUKyZEupUiHJwLwzKsJ3Xjkr8rq8sdyDXJLKneBeNDizA6zVkCWTpDUAqToJF",
  "key16": "4nmnTEHbpnuN8po4mPWc4hq4WsCLFaFNSEX2Xoc7eCbBPhVdcngvgDNhVXgkXyE6n17Rzq9MHAweZgv8cefG2Yw4",
  "key17": "xAkFVYEfQhmQgVSXgLwXT8KtcVkrPfURTy8iTC2NhEsSkGum9iLc1hkPq5yMD1FrbND9eWabwzwesgPrqcP5ka5",
  "key18": "3GebX2LqrUDRgSmcPjaK6JL9YhQ4LyagnsaMqorHWtwMnbkDDdei9wbvQeQmrFqkerBJtaAdjXujfLBnN8FXtmnw",
  "key19": "4otTWdmu1xeyBeqr8o93GWVj7JchZrRPmdFQVPbi9CBEkUhLnUznaq1ifWJTcTcFvrBFtMyA3DtmPE4K8cFftgk6",
  "key20": "26aUHWqTLJEwJ5CpWegx6MUu685TKvLBmr85TSFrwLewDK3BqiS4MMwDyEZtF37NmnaHbwc2un7FNkp1mkbnYZ6s",
  "key21": "5AXGk98Bfqb6VN65cEbgzkQeLinn5VVJVKLcbZZSssztN1N5xzGYbXGyqwwfuQmdzMskSm3uzHgG8UmhJH5kZjZ",
  "key22": "4FnCjiLDnSPfZGcATwfREBjEMxm25eimVgG1yFwQYEmaiWr6FguMLLEGLtNiPAcohUSTFo9dxHadvhYq9V11XtcS",
  "key23": "V3cPWLX6DDSxFnSRsf6X7jpsBrLoyrU2zErwX8uP261kkTYhSmxmAirq2pnHQEEJkTbygVe33SkzYKUooRJxNhv",
  "key24": "2CTfUwZMQ33dwzewpoyqnm2ndYfbLh1h7zp1HNnRh5psmbfrnsDhTJDAffiHkqmWS25L2Xw9Kp8h9WAs6ckKorhY",
  "key25": "5VNGPEnVGPHWKamrELe3KyQpkkHgeZgSbJdP4BWErGL24wvpdL59z9f1o5BttDeE8rLtRPrSkbyKttSovHvGGRvX",
  "key26": "5QkeH4oC1mRhreLSfrVDjegcR4sSgpnXmcNRbTVgNQCwMSdU6FyU7kKtYCMGSaT7uGXFHP1Zzmbr59VVUJ3MAdvx",
  "key27": "bB21ji2pLcDhvkVvZ5PjvKQMWrMe1reGG61Vf8tfxZi8FSjB9Sr8mtqcqPH4WjwqYjnqMK1JzY52YSuQfasc64Q",
  "key28": "2uQaQtUJw5mqfUGabcAFR8JMmKDGB3XNLqKn7VuQBGSVbDBoymif2JDNCuLvQ1246X2KseYucpdE768F8s2Cv68D",
  "key29": "4eFaYyR9E2VDpkDfE3JCHun9Qx5Yq6aJ99qNndLUqsB8S4kGxkZJ3dT1msri9TaLWdgbjUzJ4Czx65Hx2a7kMC3v",
  "key30": "2J5JgJGruHsfLZ6fQFrEpPsUhnRuV8vjkHoESPymA3qdVgBbQpdPwkEumUh4w3Uuw5oPmiUi12aseZHKCu5QRTN8",
  "key31": "21rQWq9TRigcJzsyMHJhiScDU99wVsjpit8vbLbNoV9rKCt45tA5QpqtcVAsSQuv19ZTRjVTvkSAX3fXXLDRSCMP"
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
