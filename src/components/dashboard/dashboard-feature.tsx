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
    "uUYeWYfZrJ2gMfZud3eeR9f9QopuPXrT4sekHRovCPZmvHZDwH6RP1QWbmtUdELQGwd9xLgMKJFdAMNR6vg1a5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kErm4YxCR6CMJYY7B9w2KVGCoE8KPAVAHZzjR2hSh1UCRHfTFdHsfQ6F7nGwFUMi3iN7x9MmLpGdAr7BJgLE82t",
  "key1": "B7Baq9AQhcgMe5BfKXHmP1ukSZUsne6U4M2wTNagqhNEGbE26UcnCkaEedABYmAGnQxD2uC5Lg15yALHsjiiQoV",
  "key2": "XMWGnxNbio4ZFUeTXMkxRZqTe9D58QowyQviApSSLX7fdaxg7WToYgSnHWwe5uhpCqdoiaUFSmbbEjLfu1wtbBC",
  "key3": "2DhQzF9gZ2esPxH7WbHBEv5KhBGKjrMWcAtABkDguG2J8anvePstigvJFns15arqTFpTycDUsMDicxThY2wo96x4",
  "key4": "2dhDXhZ9wqyBCnGyGY4vGxPFTXTeoae2xCrGo2wtcj6irXxsojKZQV9d4pbjTWQ8oGE4r59cxYEv1SXRosTVuYHS",
  "key5": "588osCRR4nWcGaytrF4HnB2AYkqGVYBHrJfYYJYnW7Q1gYvqJC42Dmf7GrNbpdp8rqKFo7cj2CAkACmPPMjoXrJa",
  "key6": "4E4hu7EFXqJCjTcGdYoBJgG86GGbQKpVSzPYWY17Zc9pM7wUfT8cTBWR7uh2Levud3aWTcM7cHydFLfXRgf89t45",
  "key7": "4dUEXWrnQB4SmnrkTgC75Zk3a7HB5K1ENa7QD2wx3VYTUVEp44NhiZ4vWQbxsjAzkHuUDbNg97iLebv7wFV5yQer",
  "key8": "3bT3dupuQcARTmtYsH8H5mpXxB7zvHLAsCzsis5AFqzE6Uzxyj2w8hHcETaKhBoSnRAKuPanGJvVAiTeQyfW1htG",
  "key9": "4XE2FpJFNJwaXPgy2PKzNDXLTNi6ABabuFynvafZxXBTGXwFGBSWSyHjEFFM4msZpj2LRkVkt3BZxfZ16MpVvYHF",
  "key10": "5YWtRB3WgHKLQPYHVJ1jEzED2DX1kh9Zz49ArphXhEUHz5nbSc8F2eyRpaq3y2k6fBhQHwsPzLP6SauE6iCQ4Dcp",
  "key11": "2fnduVYvd9H2eQ1zxYbxjjK4D1pMQvFwXUDnYCpCoJdWbC9QCAx75CwVaMyULNYswWqWUkF3TsoPvM6ZKUdTKUVq",
  "key12": "4F3LbAmJNJevYYq7hpf6VSKviuiK2woeiRLPYTQUNsfLHWRVodpHhAnd8kEDy15TCb7tNsxmoTgBjsAe2jPKXE5F",
  "key13": "myLFo7aMsSiTzjBJkgVXpipMqw9VcAo6nAUo5PrHvJuZpiDgnoBhqhhC1L1qFHh75oYYuYUzqVqpQh2KLBoPTyR",
  "key14": "4XZv6URtydHWrcFqbikmtgSStYxDJGcdPZzF3r1TYyzKd7LV8NhNRzfjtmXW5BnuvLK3KnkiStztDAEuufKVBCsX",
  "key15": "3p5jhq2Vf9v3sgdcBN9fcjVftanPo6YtgGAMUF3B9CSHYYifJaAfkKFE11SPopBva6k8Q9zkP7FrdH8octPujJdX",
  "key16": "3sbfiDK6uX9QjpUQSbyLqEyBa3bL6d29Hey7QYkJ1KCfUg9kKSndi7Tggs6NzP8wwWYKMeKEfDpNvYHuEPzqaSQw",
  "key17": "J9uHFwgXDDAEQFRZU4Eyo23n5aSKpz8px7RjSHgAMsEUizfcC2yUv7NWgc5NqTFwmAJWyT1HMuhcjw5Vx8AxArc",
  "key18": "RYzpcdZjGRkyLHSCccPLWkk6VuybhP59ox2qVKsvBGf2hhQBLPAnBUtQxSn67QhH4q7LV6fwRnKTa5JyHQXNUQE",
  "key19": "2soehBN4iBzVeFPHFKTV7ezcvwurSALS3eFA68F3uYYGcHZoXwdkMeGhqND5B4UZXog6Su8PHQ23cXdh3CUniSFS",
  "key20": "5ZfP1L7ZHZyvfP9K8WwQpPeqqLxviThqCfEWynMWeRZNJVw4kG6u5Ei25pSij4qTJN9ncntL8YvEqq1GJd5VajfR",
  "key21": "mgiUKoB25Z6af35JQFDchCnfaeu7PS4nxJ4UZPbYxz2duJ8EDbNAdoKjL9agAXtKrjgcR4foBVS7naEMWSAo8c5",
  "key22": "3vcEi4FXW6Yx7aAkc7aLPHk9NfuX1HLXcGje5RP4DKP5EjkBB1p396t9fcd5ZUYqRkkrxYfCYsw4rBd7qZAmi8Di",
  "key23": "5H7kDuLABNKbsuMGVjk5RGsjYFDJX8Y7gucgpAFJQT9qPNxrcwjoGTVCXDh7vE2PAiFhHL1AHreG48vpwhz3sMNo",
  "key24": "3qBXxadFyAhXuZBVNUn45KfGLZjiuHqk6vEe79Qi9LZ37HexuRtprhzHUGbwC5Dhjqp3N1aL6BEkQqUt69wdSVd",
  "key25": "2Cj6CaThUuNGu3Su9FN22GhMChYxWf6scSm2cVu4YB1Jc65ZUXhpJpG2byFzrPwcepERXmfWoNcHD6B8ANABdHub",
  "key26": "5oXn3FRsn45mmn2vBtdEqs3buytfGHDKw8QfjRTCozvRCeBrVKm6ACPTAWZJfNBTimvegUwq7zJvhYiDfuyQDeSZ",
  "key27": "2YHCZCQah8fySfMVQsLhNxzaEhHpwTcQo6eWoYXXe7JLwHVpwCTpJ3FMuavD3JVXQ2MyHQhhQDeza4JrhWrcBQsN",
  "key28": "DT98RsvHUUAznNdk2drmQyTcXnKR23HrdhfUwG9UCDkcp1UpaAnzof2ac2xW16QkmVpXTSZ98128YN5CAL5bnhT",
  "key29": "3EAQeXbvemH3VRvsTWAPtR6qyvceWMQsgHUBxKBtNkP8dgLEkExt4NNb5Ffb75Wfm7h2jE23hRUhnfrC6u5sneq6",
  "key30": "YR3M1kcsCWiq41BdnQrwFfibUhAeEEyTQ3PAdbpMGxcnCWzU6DC2jR1Cx7idtBDCAHe96RQy4snVumiZaw5gZaB",
  "key31": "3y6d5Up9PNLRKJvo5s2SuryZvM6QJGRkhShVxZSJGgYAHAbDzqvrSjJdF5nJqHtq5RHuwdC7n5idL75gzrp4GEP1",
  "key32": "2DUyDJ3JCMfaG3Vi4NU2bFho7ZwjiwVaLQ3HjE4C8US2gAdDJiZmLimdMa7k8mEVxexuUqwW11aNZtcXvtuozHNy",
  "key33": "335gHBbBnbm5XcqzBBSatEKqzVJhHZMTmhug5ogLujtNNWA3nCBzPUeJkQQutxrgWHjENeRA2JwC15sR9jMpJrwX",
  "key34": "2Tm9hTWKPXMSz4bi8YBQVf1RPZxZMb8TSMF24CX1CRfNdE8fBZCp3g85Y2oFp1KjvCZnPXeTtsuDFGW5JXLxEFzT",
  "key35": "5HPUiodGFMkoxGjDYxA74fyRqMrsLKbnSKgKTV3Qsfk3P1wLoXPc4LwyxJ4HD2rEujg99dYGnT4H48ac8P9W64ZU",
  "key36": "thqshv8sB7NMSkJHEHjFM4cAL5GzmWtQJrAp3ofEtNZQJs2761yz4XCXxiLaJa8QV9NASxDftw7B2RjFBPYccdS"
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
