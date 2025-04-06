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
    "2NuXg7K33xUaznBSL4A4446DKCBBrLtvut7qwsWNpBdmduMywvHm4aiPnfgFhfJNN2xF3hzV2Fm3uswJjHD4Q4tN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45SdWcKdXff6nzt3qp94NuGJVBbeuWbyyZsxmhxDkjRcuMS1z3cZa57FtaFYptzhY48PdhkbH2FiLd6mrHVYsz66",
  "key1": "5b8MSuJgAwgP6sCUksdGu3QUAdCAyirxKobgGXjFkExkHFoRyr9ho6oXVwAF3f3GRMmjV7KB2YZad4E9V4ChNwGa",
  "key2": "5vuYxYUJCnCaVJWsqoodi7DjQbDZq2A78PJ1QnpgLUyRsF4yHoaYModgj3vfJvUCJyZ21pFi9NxtMEnDFXH1zZNR",
  "key3": "2DdVqu7nDdLrupPhgFf9TU6b8z359ktdpjmrUxUiiza2YtLs6Pp5YkiLkEYwNb7dzzv3jY7VJ99KP7yAmcW8KRr6",
  "key4": "2AEj2GaAB3SzsxzqvrSnTMbaxBfc5r38EhHm5KRgC2fJVqS2Q72chmMvWLKyyDFuY2EiUfGp4uLaQRj1pd1jvGmH",
  "key5": "4WfW8UwSRVamSaa5hsYpigRpmrseU8VpfJg8iRLZyECkikDdMt8URZBa2yrdPLfSmgudpnyd1CDnvioH8H53NiB7",
  "key6": "3Mey7GENqkWEHtddx97nbivt1s47YApF9SyMVCVXE8thC7TsJdJUJqiPkux5zsFc8CFfxuWDbkvniEB9griQ86Kx",
  "key7": "4RuacQPr7mD36w3LK8iBYQ53bcGKapwecd8qgkeMb6AMiW99ctZsAzPu1t5xSyBZe8bQ83nWDs7Y17DurKAe48u2",
  "key8": "31M5UqHczCN2rPJLG24T7ap4L6Kpa6NmXF3zw5UL22hvfTXwyuPVPa5KwReZJiqUQkzsLd5z4h4aanS2MFR2NDn7",
  "key9": "g9QjjZP69mRX12JKBMH8TdPsNj2xNEjyQcA7qGbR4MNNEwzQvubV9XByy9CZL7KnSweqhsVpe1b4qYVR3vHKqMX",
  "key10": "5bcVyjYjUDgxD5AHz8DHwWdjegArBmHHw37AFaW9gdUm2ff5xeZSufj5KhEFnkFHpbquuyTgSnGXKYBLzD1u7YCe",
  "key11": "4qrivj1jB9gbEdKrWHMffxE6a7an3eLh3EdMhxBKoG4K4syb2z4rKMDUvvorDHshvcjLLEjnjo8ZYsuJwC1FaorP",
  "key12": "5bgx9PzkgB7n8wgvukmoiPvkxy8fXDa4gB8E1bH75d7hwe8h9c4VgSkheGgmpunoSc7QBZoVLgWyJDA2XzgdhnMe",
  "key13": "5csTGaJAsuXfSEVpsag6G71695u5PD1tfysXt1QHD96uoQRnBnrYrXzCiPpxBwyvEeR4ptkPzKBsjZdy69vXbAqb",
  "key14": "29bzafR7BzxNQcVo6SdFzt7swzHZ1ipA2Gz5mmDu6xWzAt7pqTrUNZ14BYimptzwsrrL78XeH3r4Q6feqwyBXESD",
  "key15": "4P2V7N2k9Xzb1wncgDMrswhNfncdstpVAD4fmisrtFgWc5rXTrrycxseXDWTAffYn4dWkZGisvoupvYXShy7BrGV",
  "key16": "3texfFhy7QREqb7p7FwwAy62zt2nG63pfcj2rbGfcX7hYVGcGxhsqdakcNhdtt3vXV6WfDsp8JPiSdVrJDAe8mrz",
  "key17": "4yTqFtbNb5Dx5w5HJmm8ioFx16usBwXEQBnkutWzfqZ1dmVhkYXEQV5os3M42U9Ldp3D17n7iHsKfau1w4jWHv2g",
  "key18": "5bFZtrrfsEWcpzY5VhGoGnL8c23MNATeALMyU5ExWLkUaQMxCvWy8TwZXDeDXZHDspt9Hsdp7svEUr7U1DUk62Rs",
  "key19": "2pDzQf3Bw5gY3PehNt7YE6YybXXVsJooPRvLstRec4WTZGD3HTbqY365khRB5Zwd6upywcR9TNp7yc65MppyakUA",
  "key20": "3jMtkFfXUkieH9sDt1w1EPU2q23vRWDSvfucDyHSpZ9xAmYoFZwhgtm2rUzCUv222mL7hSSjn88qPm2RDT7sDJzN",
  "key21": "5DMMpMYtNa115UCBnQNLJig6dmxWYvrs6jtNxoovPamUdL9z8Fkqj6YrzEUWzYBQwEvgD8CPsu9gYAnPri7ktTZ8",
  "key22": "CAppGtDp28QgHYBY3knVGgydgZhRKrQ1wYJntLHAXLoKKwFcxa5uAvxuh6yR1SqSqwnbZMuLq4eY9kYWmq9MaY4",
  "key23": "4ZCW6LTYStobVHBAgqcde3E8dPRxAPmGtTGTSTPLfRjEPaW9Y3VNg81x7oKrWxU2oqz6SpuyJL8x3kK2XVpchcDu",
  "key24": "Sjho4nWnzi8hbQPUDrffFLhoDyfsnUB45QjrtJ7osxb6bEUsf66Qxxz1dwMBGxzpCX1KMahatp6mNrx9UZK1UNE",
  "key25": "5aHRSs56TzHXuvokXf7ovMLfRtQakv3UUPsDV6mamfov1strJvywP5syyACxRkmq1tbGpUYcbF8tyYhG8xogJFwE",
  "key26": "3MJVLgL7s76xq8VZFfhWkgPF5q1jYFBG9zpMYbCEro3aJcit7nq7E2oMqYtPxzMa7sP46fnHzC5ZsUzsHMzfgVbg",
  "key27": "5HAszNkmUm7K61CC8WEePvVm2tpsL4GJN2wVKPrCpWFmLSFc4rYM9b95wq3pa61pvVdDwD9b3Mr7xH1zj3pVe99W",
  "key28": "8LsP3aX7Q9AQxhbyaJoiGqnt3t3yte7qx5JbU8gKKnp4cdAsGrXhEJMMQqM77hcKpM5HkeZeQi7Moz5fYZv1v9N",
  "key29": "4jUMSGAVapNFkZVtauYNMqipruNTKB7RVLPPkmW387VU2jwGeeQYW5MyPh9XnE6RSvSVt5GJCd7BbED91WuXSm8W",
  "key30": "385ACWV6FWTStc6go25WKdNV8en11p9ryi6zBoYsTyKZTbraSxuAAn6z8TfXc72xzQK4sSpBq9UXjyGxZxhLb39c",
  "key31": "653jJSfN9YztFWGtcnRohYBAZwqijVCwEVA5KvgFwLTfJjvGzQyyWZJApckuB6YJQyKW7mQyggS3r34upNepKTGW",
  "key32": "5BjVWso99BkvP5sQoW278LW6ndzWEe3dan5MfxQXPfbPUacnUD9WjqduYZfQ7ryoczcZYiJ6MAZ4cqagow59dtef",
  "key33": "4dZgdSwHkjMtZDLehEGiy18mfejnM8hrS9ppfyiRvrJxDyEuzM8PWQRNjESqaKy2hJRMPPbDSugFCJu1X1JRasjA",
  "key34": "4iyHFtnGRhu9g45RSa3uRFEG1jHc6c8XkXNkpHKPAZiPkPnDNPDkFZJTd18unvqargP5frAtfhW8G1mPD1ASEeDH",
  "key35": "4jyPVT5aHKvt7236FFuDfU1yAuxZ2Rosimsq582oWXPCA3KaNJcD8EtvZU95BYUW4Fhu26JXYVs6DxKMH651Yvyy",
  "key36": "5hvgt8u1tCCGDWUPkvB5KFrxSWmCx9iXX2RbzXTQgJ3k2DpgNwZTWQFVnR5krvzc8rnWvhSB9PB63n1RcAtp6gYd",
  "key37": "5K9hpSNToH23WdEHsY4RmsTHVopoZMaQEzp4bFXrWzSwqWyow2W9qwSx7PuCnoXRw4B7Wz9fEGQb1wxcuKV2nRzo",
  "key38": "3pBbx44Xv38dvneHYre5UAXpHPfuzVaK9AJ1jxm1Ef7bASkzyaLdwAanpgdM6J5U64k81zH8v2RhMyqoHtTnX9G9",
  "key39": "2JgTndLFWawz6WKMxjtpd5hk7UZnMv2hCorbH1w7xyj6WP7tFKCu3RLPxoruHVjTDV1QwwRpZdiH8BsCZShPVeEs",
  "key40": "3RdNbKTjw9xSPrKbeNjCrAphX2GFauCQg26KWNhVN8MbD2yk62XUmZGbGy2LphnLzJiy18kcSANaT2QRtoYyjjiG",
  "key41": "26YUirL4cUQgxfNEs8CjYijppVdeRPtU7YVgDuzNN59tDb7WGFYuux2Pwna3QyFBMWFuPtpbpp3kJpbjbj3HUBRL",
  "key42": "5FHT2ojNprYeUCqTetAeT9nxdQ2DiyhonhR3yUsKtyJuvSEDSpBwEVG9VfofGxakrkDskPcVF9M1f1RMgBfhKPyM",
  "key43": "4RJmDKtooxt1yU1xmvfXimJT14fHa2jmvXx4kRcQGLxQa1Faz1NVuQ1jevdKWBT6AH1rYZWMY5YApfqnacJPNTC3",
  "key44": "4eyKyAeRdkk4pYkvpQEWieSPfPsP8hRe797Jsyn7Mgzoquqgpr7sX2gjc4XLYhMhjGV973oYY7bp4N6LPmz5pNG9",
  "key45": "573FpdWRyuQhsL6XUs5QGUihxPK5MFMNgrM7o9ZmN8zRrSEN44va36dQFi6FKbGrvj4HEhiwbj13CRW2wSWbTSZw",
  "key46": "2FVPX9sqkfnyP4UQtiwvgwDfRfSa8Nwyc2CtZtYmqkmPn9QkY6hyrhb7YFpjuSTj4bE9qG1J5dngyagopePYuoQa",
  "key47": "5cdhKufu9mU9NuJcwft7swYz82h2EeKk5teqVNDKTWdm7SkRrWgpNZGx9KDARmNEVu9NMWQtLVQSVj4gay6nYUGn",
  "key48": "HD8LGBNKo56NYEGFjjmTYC16Rgc3jwhVunjDvbJJKCbgXLxjBAnF8vYZG1AxcjoL8u6eABeRq5XKDVi2WfQzFar"
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
