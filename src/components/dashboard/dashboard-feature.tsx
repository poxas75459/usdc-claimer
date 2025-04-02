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
    "Vb6aGEry5khZbe1qiJKzatKzRhDYrYdmcyTBtXNsq4zuqCUrvz2etyQySVZ6dXC5heKfCgtDh5mLBbyLuVf36eM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Rab4JXookdVV1TMTFNGQukuDNH8yZLwWZrYdARqhFF3b58UihdFvceCerMkBA1qw3G8HAig11jfp71SVCVfft6",
  "key1": "3gbFoFQtFqUwoZvHQmKSyKtRaZYdNCfeBb4e6Fd6FGBiQa7jjqmVQqeMj8FUc9VoeoF4XXTyQvxx5PuRTb7t3hZ",
  "key2": "TiUhKsmnZ7t9J1KnJBB5oRvsfmT8GftTxAd93SZQJRAFdaHfhP9d9foNLHzV15tt8BmMFBxnZYB4UEwuARacXvd",
  "key3": "4UMaVVDn6xVvzZ3nqhAUjfvgPVVFRS8mqVusd2cAt1LYYAjwHEgcgs1wKJLMVSa6G4cPoYntApUUm7VvyBPnienq",
  "key4": "TFLMkqUyVsT54X8NtN8WS3Bew9hMMdVfvJiXS93QjQxfFRLwKYHHkJUcaHsN1cXDrvTFyDrGGQ6Qm626qioAbsm",
  "key5": "Yg1FovSaqFBRovbBJvtnEe3LGepgtLryM9hWRBUTHk5Dn34LXo2UdxxmyxEbiE62Y3cYQjrYcnTcDA9rxkqQ7Ko",
  "key6": "8a7V4xkeJbY9RZvpYquA4myaRSqVRGctGn3FYfQX1CiZSQ5RsdhkG6h9zuuKppRvvcDd1BweE2TaW9yB9xa5WD7",
  "key7": "5KS7Zh9pXsSewMyGBLWpEY2ZyQTianVwuq81pUj6DkUkj5FSrAL2HGr1cq5YkWJgDE1CDNNKnEmMFJzZYiJ3iZU3",
  "key8": "5fPmQp6fVjHn7VwcwmqGVvbKr4g5ppCtUZASjJsX2virkXqDRHBXK3ijEET3r4aMrWwgBHkz4LqrpQ2nzsd6Hti",
  "key9": "5zzaqAPtm3sGRQi8MoQNtzQJUGMKTnvfAnMKYWAapa53SfrcvdtgRpPbw4V1Lbyp5Zdf9hpkpXdPGuthh3a9Cke8",
  "key10": "4vEEUmP4rQpZgS4FqD3QFQ3exRThSEC9BRLQchPGEUqt4CEWQvoXW1YRoMe28NojnBm5sHjdNCETFKoHrbhZ3XeK",
  "key11": "2CgpBfNKz37p6VaRFsLjLqdXejm7UpwJudeDUJS7Y9rxW3XzW19mCZaymijZonUgogBMaLpm6Xi8RwahFjev5Fk9",
  "key12": "5LCDPQxHmKKkeUErP5dNFibHt6wtysns2YdEidABnXtrT1UYMA6YuG3Rha2LxP97MjJLSePSVJQFdHTaewaoLtjh",
  "key13": "MB55jde5viHvPzD5SMcrNWeEq66Vassf8vsr75YFemTFh5hUhcAgXJUWC66rzkPF21KpaBf4kmkt3maRgEQLyfS",
  "key14": "4QbebQ52bdyFbzUfSh2BxwAjvw6u9tpFwVXhgv5d9PG4QupM3uTsRBqYVFbCJDHNpMM3TGcw5HrdFuxEPA74kqzD",
  "key15": "3YWDFTpeg5KCgpeDkKBeJHoxsNntWFUrcgDp6YtHXRFKMVrpeWcAho6HUoKXUeXhxdj3F3K145MNZSFZxHAd3an5",
  "key16": "5hWQ5sChMqLu1n1tkqNuS8Z1CiKXfjJPxhPdvGUrMDadeyij8o9pqMcaTUEFMC3oVe7bTJxWyCk89vwBaoUvt16L",
  "key17": "4nPKPV8R92Xdj46VGTHG4K9jbnYqzcGvJggRFqFaBSUBdwcMArWxPXQfBPV1kW9oPwefiJg6fBdGyZs294LAYRdF",
  "key18": "ypCFdynEtrXpgfeFwni4UnRRb5jF1E1NXouwjYQpg2LV55rUQEEZ3ja9a2bYhrCiwP1Scfou2M7qFhuzF9tfEEW",
  "key19": "33vQekwcrzyBDwD5EqaD9KFSarQNrDmxT95yqeBbL73YuUsMejAJUuBsx1web75SKSWgDLfqgw9jzunjaUPYQzWK",
  "key20": "3g1t1iEVDzRgKFsNg89xUZqycgNXPMrZkf97WFy3cCfoRSiQWUYt5xcGgVgcrHD6xb4gFur78WYL7oEhxSj73zXq",
  "key21": "39cEhjySXK6gVo8uNzn2yG7pKvZgEaAQRFxHZevCX1euQecbdtBnJEkBWqUNvbe2H7jgRb6dhxXeDgEPXF3KLukJ",
  "key22": "3Wd2q9LCzUwZGesZjQ5QNA64TiRzp6HhgrTx93WRcU3jE7FydMMejNqLvCi2bthA56cV4HaMbgp4Mi6H1kdSAPre",
  "key23": "4PuQ9K9mqnMdw3fW7oqSo7kwYaLHzg726Rz6jm7jVf4T4xFQVERiqN8J9hrqy8SwVDJwUAnoieiUJqrdWiss3zKS",
  "key24": "47ZcMFhmCvceDoKMXiuHGudDeYMFrSfvdMf8xXNX97EbtMTojKr4LRpatm3yKbu8BZcC32iy7DUkyVAmUp2Qtrwh",
  "key25": "2FYjep9JGTNVbXBgRo4cEH2CovVJbDH1hBv3ZCZZTdXMQKXjPJvMj1ktaUkQFw58upNAJ92zfD9xyNwqHYnLCzqa",
  "key26": "3XrtXKR2R1ab5AuXUbH8xaRckZwcKGGLLWs45ccVDD6zJHzatrVDdvfK7ELpzMaN43Vik3baBjgzMNjmTeHu72dV",
  "key27": "2hV4VB2YZXDYaCkbTfhVCR7bqL7PiWks23PLXV1fmCzxh2SLnf4RpW5CBQ7Fx8sSyiPmrXun8Dsyv6vwAiVc9eFj",
  "key28": "444rKgUDYvd1HX3PPfyN3R47Fa99E2r4DzUM27wj9vqJRH9wUyV2Vs4wb7TexCTSYCdJdu9RQkwxYE5y3PMkaaA2",
  "key29": "4sSZmukHJEfADh1iUBJ1FvSViL9UTVGtLNHfKWMuDbJc4sSTnmUoasS1FfiZC885WXcWRv38ydCC32h9a1DM9wF7",
  "key30": "2NqS8zDNr5nuQhCXd8HMkPuWWDwamVTuR7iyy6fvqGSPPA5dvorQKqxXGZMfTnQ7tcLGfT7wxXtvsZ8Q4tzS1b18",
  "key31": "4v2sFPyVJcucTdcXb5zScWkQm2Vr13WzonQDN36WpKe2pZwgH3Shth84qRtVRWP2W9sWrqP86V8uoCDntZSoMv7F",
  "key32": "3m7JjvY8Spem9oFTMSEkNihXrnKDJXTV32AWNt324j1uPX2hKn75jJc2ozr1MaWo2LyshVb7xmEZju77K6cHVVWw"
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
