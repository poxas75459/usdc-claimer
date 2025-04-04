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
    "24neczBz6e5eSx8d7NPkLtkFLUz5jwd4BhG7tXL3j2rEzuYZQbcFiNC1pcufjk5e2mAAjF9GaD4WzwLeAyxdig5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LxkKex3b1XCFeqdARXsFSeDEkQ9dPF5fxk51yt7B1MMZstsbUZWmFAzHphKM6MJuVKCi77BYK9NUU2piuECKwa1",
  "key1": "2pUns8ik6zQp7Qb51bb3bjcL6zd9QCcxDnasLBWKc83JbH9pDLgyv6hbcEDtquN5LT2FxJxDhJ9VZ18qwwRh5h8p",
  "key2": "2G3esZ7kvqjH1FrXM7hXF3y2v1fFiS5XWbZ1zYyYsa7sVFTrW6eVM51CVASteXgfG2FnCJUKZu5oGZD1ecvpgEmp",
  "key3": "4x6YrzL6tKwUa3MSyCGUGAZfEndqiyYpgAUGVhUNvWyfCLCbtdSxSFqr2XR9YxbHCwidWZEY3e244iDn69DXc422",
  "key4": "2rPHUnY85DXuTF8s7iuQerGCQ2dsc3rVjWjMg5KE92AcsfXQ5B9upgTo2bas4VynYmeqfEUhcS4Q22BXQNZBJwM4",
  "key5": "5m3z78Z5XQb4d76r5s4AGjWaDSzDT1nv5PJMrMDFzMjCVGFbTrGtngcFLwZmCRGDBrCRkiN4FEsKEpSF5KkW9dbd",
  "key6": "4w1r9D2krtdFV6zv7nrrhnVhYpvg6AvKqBR5qeKZzySuw2wvGPVhAxoCoc14iKMyqStNt7XrmxXMmv6S4kJyJEVa",
  "key7": "5AYM81FBZrQrJMnLazzzLzWX9veRC5Qf1khp2hv817LDohyovEQY8rdda8qgaWuQxDj6XDxySNZkHBAUWaaEwLjz",
  "key8": "2Wz22Ky2ojQtSTsE3HHR8Ft6UpSCdjgRpLNr5mos5zpUgrvdqBzL7YLX4cEzXYXnDaGtCbWTZ4qe67xeFzuoZo81",
  "key9": "Mvn1UL97a7JkbnkQrhrmcLBtuAwSMHnUyTFgWnvMw3u2w7kTXX8hXaqyebZSaaheHk3hLLzqi6MQyUFnk9by42H",
  "key10": "5ReoVwevaE5RtkjpYdJkkPkg77T1ec1JFmNN4WTg4CyQYJVnzn1C796LDQ4FN9vEcGdcjSHeyqgD3yjY6CLi1RgG",
  "key11": "3ctY2nhkgDLrEHMCFY7UPwuJBGDN2zCfickTEs82oTSuwTdUFBhxPWzunbyaTfdSRjpc42KAFjQyXLhGNDsWbuR3",
  "key12": "28xut6UzvTtWo8uLKjS4qmQastCiuKk3N1dDQzVomWqiUByjpP1wewdyyYg7hh71sqUeJDwG8nJWsCyx7ZXkdZGC",
  "key13": "5yM6XnTu5DBkYuy9KNotWi2oNBpHb9hK7dwQUvix4oLdt3PZWZCevHFGRzgHPYapTJ8G9UncytFweNyZxnTi271X",
  "key14": "52YB5HG4cv8LMWp29aUfmGECPV6zrHogdWfTWj5qKGHFnkvwFL7bbViyQZHFmD9K9hUxGRpeQzYdXdEEMgoLCvdo",
  "key15": "dvtioU78nMazuPjVj2ubq4rPFHYMiNLEc7GajZ2h2i4dVyaa79QQdVjPfKgDgFsvzomJZFQ6JHWQo864wiraMdY",
  "key16": "3Z8m7t8FzdMjUug6wZVLv6jFdySJHq6rVhz33qYYjM3qjssiwZN1wej4dmWKga4TUxDZzpdxb5PCp8HWCD5f5Vvp",
  "key17": "3upm3PtYYcPf2ZVyVGivN7JmgqyA6EdMhJQ2oMvoTN7CaGX7wzPczXeLTzXYxRj3Mu1ZnoUj2Ekg3ifZTb7mgFNZ",
  "key18": "587eNXzsr9hN4K5BoPFZZhqLuhf5q1ZaEKfeDrrc99E2geLmmDEfPsWCGSCKgjxFW7STfkw9Rht6T3nJ4ue1VPjn",
  "key19": "51BFA1p8EDCom5qfLJFT54eyJsqZXuBmV924t18rfR1YGps2iY3qMaCkKU5bYF9LVY5JUSNzqGLCbYMKsyniEC9g",
  "key20": "NtNwokw4UvAWiYRKnJX7Qd4HyaVsedhug5wSXrKRx7tP1rgDgeEhnsUUQz7spsxCDhcydPGykK6tXyU2btNQUU7",
  "key21": "3MaUSC2kBi38K9zKXFCoKzHiiCM3PeDwXVvgkquMEFy4gxCYRETKTZ3H8Wciodg3FZ5bK9ShZzSnfX4S6Mjsemmq",
  "key22": "9qyJeFUaq6UCDDSXnKqoAaH1iUiRtBPiobXyzb6awKD5gY27bqjmcU9rGMS5haQAWvh78pUD5kaUNubv2bxLMC1",
  "key23": "3BbotV8rjdXf8c6WoWotx27eLHw1te2i2RAeRFkNBmUik2t1AdPQLF2APvFbaLAMV8JKG1K46D6Ath1GrqF1ME8P",
  "key24": "mhrtP7o83woRDyU3mdeTTKNaDpgPY5x3uuLroJLtzrhKSWuYyumCMQnnAfXoMKjAqJpqhgu6UVr2ipTLQ4c1nBz",
  "key25": "hFytfN3FcZCaNxCLVkqqC3VwjLT2mHqzsgrkxnoQk3r6k9FCzm89DwJVHCkvQEMynzrMTXU8WUQPq2sfh6ojcWV",
  "key26": "Awk2FDNm5Ce1phd8N2xwNX9CbUd8CmkTkJ8jgTjbBR1Hm8FzJnvPGj2NpNPGWY6b1g44JSyxDHfp3u793ZPpcqN",
  "key27": "497nZ9CcxTXiKtBFV7za2XgTPbKXiCMtJWm2inr1fTR9XUb6fU4NAuTr5TRnbHy8a4jucBeQ1kk2gMvFjZ6CktMs",
  "key28": "3DoC7tT2vfeHeLDM2R7Hfq3Bz75Ae8mGVcCjro5H3mapw8z3E3bBfB8G4Am5TkgH8T542x2ADktAAxMT5FTBMwKk",
  "key29": "2qMNLiacP3Li4tcAfHMYM6a3mNgxg27hKjibd3wuKsF45zXCWwUUrJexvWLzScY9ggG74niANVrSpjF6tGWgL5Fo",
  "key30": "z8dMK4JES89gBvt692otxf3TiTyVg5bmFJ7Uzsmeh3DoJyEy6qZRU32ywVXnmzKAHoFApVjA2Fkb9BceK4HPWvA",
  "key31": "5NUDYeSh1YdYfc8MwipjL9dbwBVpi8XszVSPxskgT1mK61YdPyefzQ3bQpiNMoD8JXYW25XJfGni2mzsz99MJCmH",
  "key32": "39JgA3bMdtuoLyKzwcFz38mam5AaXgQ4NDaRRuV3QfDNtkt62fTc72fKLhizEwPWbCJm6wEmTqsmSxEzdP4fhSFM"
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
