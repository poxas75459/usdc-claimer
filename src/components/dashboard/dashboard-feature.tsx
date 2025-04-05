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
    "5c27gK2QXqaZFUvtAuJXBJeEteCZFqzSp13CbgNNRyaq3uSGbBeQHx2dZ65aVpifGBWoWRRcikEhPvm6XpYoMWPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oxN5yPuTbM4m1nQDkcW5crH1t9GM9qM3epBVpitA83EkHSPNDdgP9up4X18DRH9dYLs4FhdcDStbWfEatF6dzyy",
  "key1": "64YCib5JUSEsmqKw8L6r6zux4PrH7eMJ1gQapJsa5NNRrP7iYECuGm3kxn6xX6NVUDH1q7vqMcC5xAfxFaxBeznw",
  "key2": "4Tvo6QjRt4XVWtRyzddip6qNs658urHw8eg2jzRELPnfCu2ZqZh3GGLtNFM26arsZru54Pk6H9HwxPzaXjgzKHQY",
  "key3": "5z3NBtpmkmNFzr87zzGJmkR3Mm5GPMqQcExHHe6wKWfAXDescM2xxaTk9Q5Fo9q3UszEQfn84u3nePU6fPUZjVPn",
  "key4": "ipQWkwyiXzMYhSPjQ1CbvzCfCx12H72EmoVh8F137JTtPGsZP4YFkMsVV235jY1xUceDxABM3FG6SSw8V6g6toK",
  "key5": "59uUH8wUAK8B42vCvRqAVxXzSHTNb24Ch4AQdYJZsAmXyVuAbTMbbk9WS6oSg1p7cgeJbxg2MusabFtLstCKp5XU",
  "key6": "4Vt9ZY9GqkM2uWEAQpAMocgGPN44G3DSRp2r4kfSKehm1KCGssECasTqY22mZFHvvhELwcmfis3AoWZ5b3LgHA5k",
  "key7": "26QPHsEFjLrp42464vT7fYCri3v25N9L5bERoqExc5WqPoFdYA1UE5vXEhvvGQtYCtV2ofrYDWeFKVxMgoGDADGV",
  "key8": "2KNdYn6zTnhADwQNfJNHdP4zxfo3jdCTM8DUtnAKmPFRQhzz7Cwhr4RN7yqVEocp7aRrczoBENwjswNrVmBuq53X",
  "key9": "xuCdjcvK5236HyixPu5wcSHPw1nU7ERYZw2UFWNUZgLjvQoCYXrdTmNB8rwuYdP5V7BVqv6EbaDT3LK2eoRwwpq",
  "key10": "yQARD6dhJ9dYW3N1D3M4Sk89fcZvWb6Mg1AkwUsCdTh81gXZRPn65qUsVRZXsjS1fZLwgJsmykQQzMXwyuvg12r",
  "key11": "C9o1UBSJu681en1nfyXaPRcMcUsrt2NDrZU4s7JkJCkwrbxzP577g3TnJEm9QCQCDLdCbN76gT4sXd8VBdddCEv",
  "key12": "VEPKd9BsgGQZCsYhJpAmWz1D1LZob5H52iEReBGztd5unJ84w8zvzoKDnnJZ2gTSkKpyEyMShEb9HqJPw9CT7uy",
  "key13": "5EeFkYTsidQep9WzDX751nPRobU1UJrG5qpXM8mYb3qCeje5BiPupwXdAzywYJWATeW4UqbJMGTfYr9qM2TjTMKL",
  "key14": "oNhMyHxx2X3uQyK4mhBTJqPwCdepdru31sSHkCtXV9TtCrinAoNkt9jAJikJgx5z2mw9iBLLPztUtNtTaHsdKjf",
  "key15": "3V5yMoz52Buu7kdwTSDNZAVctfjLo4CzZCoE5p2SLQKXhCugfKsXfZdeD1xC6arxEnwhJLkkVBmUVPcNaomp4qGi",
  "key16": "3iJ22fkrjiGDVfV9BNuREf7QCD4wLu9ZCHVjQ8RWtCVqPE8VEfz4qhD7RzV4PtHpRpjvd3x9sVa54o6CZapNt6er",
  "key17": "2AUUu4J1McQxMSLPsb66R6LPQeSrcU9xXuui1kbEUvtN7cNUHNwDuBgcjvM5wyBor4AUM29UjEQZSsKDtBD7HEsW",
  "key18": "5WKkvutYvCwUwKGARCRePgL6EeZxHeswP68pY2RhgyWXNgFzxWb1WBZM1wihj2GttNYYE7c5BHbYWdxCHvenJHP5",
  "key19": "4TedGuwE7Xa7NhY5kmWpA1H4b8mdvZpiXn1L8Yf79mynVgbEszUvMN8pDQeHTmdahxqQvLbRAX8Drp5jWgcfLs3i",
  "key20": "nxcft1PTvj4EpLaogmChuf4GNF7MQhgUdkMz85T1e7o4DvZxAVaxSnMujiCAU2v2AmCfpun1WD7L1MGKXGSks4n",
  "key21": "5i1hekF1NsUthUWBsmi5Fg31ZPgbcDcUwZcXs9dGBfMnwjQtzDHsZNo7SLD4qtqBQcPXpdWukfYb3T6yqf7NyKZZ",
  "key22": "44VmuWVS5rSQQ6vWfkryZLfa4isT9R31NWqrRJ6JtiAFhxsW7GjBEBugbru1JzBA1P5jgRLFE71sapw5cu86jofJ",
  "key23": "3cnHQzHyB7PymwGkU6wnGiWSonkMycDjdy4vXAyTgEXHLnx8togkXCEfcM4gYKAREPWW88Haj4Q7BCapmHCWvfR1",
  "key24": "325ognJaEE7TEzNq7soGuL9C7mhY8qzcZxpbWUMfNkdTFbHotNkHyBKKYyTB5nSdZhKQwJSs1FVsrCc1webr6D6V",
  "key25": "63XNbm9Lj4hc9yoeMTc5zDWwhex7UnZRVMtNKiupMKrWEVXTCcATa3XnvFFcApHsdfvf9tznM9BTBcAJVYWKbhBT",
  "key26": "LbRUE3DezigVqLjDYD1ddZtpFKRSNqsLDtbkoav1XtmFWDAMmymjNQNNKhuMhEhTimQNpX1RBJW14tFwFFwhw33",
  "key27": "2jN2Ty7LEKktiyNy4mhUL2ufVHqGs1XUqidHcVUwNexYEgqjPqkVny4nimbV7jyLzV1dq88YD2fbbGKKYfi9kjBb",
  "key28": "4SKwjAsXeWujAkSNKzyiwK3FVWYCNFNZYxUxmmQ6BPLhuwgfbXMC9ynMKEhpgiBb2DGwFvVVDFaN8R5L5PuU5eNX",
  "key29": "29u1qkL26AA5Un6FofK32RcQG77GcBUYgibedhwnrEkUKKMBf9WqszAQonJdauHuW19vZAFAixG4mdhh1KTRJoc8",
  "key30": "m2xJKxXFbuZ5HzNtqmef2x2BXRpsZvL3cDf99y48w2VBtA2u6xZsdhgKSKTCVY3yGwehsojsGiw999hTFgRMvSX",
  "key31": "32TFbQfn5efmQMLUz41HBNagJSqnsVA7gZdi1KTBBLv9Dxvvj7CXmfXq49LPX5WY28jm2XtwUAgdR5ouEwNaV3yn",
  "key32": "LkzWfeqepkK5F2P4dwhecP4YBkQHiTwo5d8JjXV2Ua3y7jeSQFb7pUe5kYEwVDSS5ceAhFatCxCpmRBDH2AopJv",
  "key33": "31udTRAZJCBbbrFmy3q8dhWurn3LbjsUftyxs2RKw6vGm5Ai1XYeGjM9SHms3nay63vTftXEcCVEpDgtsTNaCtCC",
  "key34": "UHamNAfWArQyGhBGU3oTi4e8YQTAbWcKPNZbSprjMjEfn8rtTTFEwaZmfSNiPakw1QSDxGD75JQGS4ej2Ze5js9"
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
