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
    "4tjD1zPUCQj3MjC1K9f4i6jpeWUksVVE14jePTypqUhPbBUHLZACvqE2KmcEqtRDqYPHPDGfCozej6DV1EZihKHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54yQkYYGie1kvQ4e2y1DwunXasEvp9cXwY27Z9Fd52ghja6FPanWCGnkUBxNBcH8utbwsQWggx2z68DKsbYWCtwy",
  "key1": "3n61r4tYXocQ2M8STNxTAqQcZ8SKgWFRSqf9BXBjACJa7xJcqA2mWLhZyDhRmi25ME54khPghR53GWEKB97u5E6J",
  "key2": "4Pc9mBaxemRDTuGnHYNogKTt8BiJLyqtgDhYze8khgRWqdXc7NRwaGJYhF9ZYq5yypJTeHooNgZtbfL6UBjGuJi3",
  "key3": "59Fz9m8wikF4Tr8Psf8tnwJVASBDFwLJkrhHWkgCV2wb9Uz2XUj4CRWXrU8vYG1hzeBbXRTAedFcAsfCAAuzsdYM",
  "key4": "3dMTM379DYsiFJGq5BpaJdsapstq167jmy4GX3bzraZhzcXrKaADm4Ph7VVQCHrPxrLUR35J6tkbVGxxgnEgEhzp",
  "key5": "3eApqtuZ3pSid3w2RnrBXbWvZnZxr64nSrJ8awSotx7GohV1gMFPaEp9ZmgjnQgjB7dN7Sq19FTdKQoK7KxPWWD",
  "key6": "3tFF25stTK25JttfomEZftpCrhasqxHCPGB5DnhC5sdje5Dj7MkoLGrLDJePYoxL8WSvSjjoAVmBJPTFnij6N9ER",
  "key7": "29FCdMzpYGkpVfGRhpLYDmRNTDAjb2KU1SaCPhpFqa7889qvmifdLkztPVQMu1Uabkz2xe7zrfX5NX9fPDduh5h1",
  "key8": "5kx4ZmofyETJ4Q3KX2PWGai7XNd8EG572WSii3fv17bUD7B1FtK9JFnNMZHWfAgwcfb7yRqEcnDUdSf7TeRjTdCK",
  "key9": "5C2kEfPduJAh7orBmDKgb7QWvCPwQiZCmAZJHgyPZ84bjhj85rrwQ45hxdnpEjwGsua3Yc1gPUJy3HWCJZXJTaUf",
  "key10": "292mEkybaXZrKX1RXEBsjRKt9EBvDd7NN436oFjy1jGNe29us4oDHCihVuEdUN712rGbB4iyMrDgXnCcCUZgGggS",
  "key11": "WKAZz8b2GT1Mj5EAEPt5JvpgTWYuKJEMhaY8NhyebCzezFoGVPg2RJjKbMHP28UopcUnNGkwovnSUkev1dyAomd",
  "key12": "4draAVxCjTmwaRnoDyfSCthLQjsKFAm38BZjknvE8RFsbQasxGm4cpyZNfPwPmDQZHSm4GuWLpK3zREG3DmdP7H4",
  "key13": "4FK5T4KLsytXrndeZwDtsTpxZYiRuBJxqSUXqZ3ob7CNyuMt7isz3Paf6zRrcMgq67VcuBv29eMyc6Cu8XEKpd3F",
  "key14": "tKvwCvmrXEP6hoZtRCfDKq4pbX8QqfQD6byrF2qwMnbQ3XGfLFdNGYiCwKFRwyPgNiJXQpLAJfQquH4RQXSmB4F",
  "key15": "2rRnb8hr6KNYY4n1TK4dctyZjePwCkdfYLiNjGqpg9Jq8Pc17XXNSDj8h4x246Fiq6ojp7rwL2yNA4bBKcaH2ATp",
  "key16": "2MBE859EztyBJKijK74yvy3N6D9o12qhuiXimoDpaUhQt9Va1FaXmoG3ArayHWjTPQDypE5Vfy5gg5L3eFDmh3ih",
  "key17": "2EGXPuKfca6e3KELTJRBiPcQdGR3rhpR8QCCboxXAeVN3NnA3fHSwhi4GP3HwXGN9UAk3af6oNhbNsEj79zcuofN",
  "key18": "4oN3wQEwCF4wbkofqqHTmgd7buLeVyS8ZmZX5Bh1yyNWeTMnzUiiZZ5YoBPruv1Tnf4R4hH4rBZ69ev2d2QXEL9c",
  "key19": "31xBG6kUEycgSevg6Re9N6czos9wdibzBSMAyrFmmYSSqdWpK4RyPjRZE3dEv2eLAYovLZpwVe8BSjCQKL5coUpm",
  "key20": "3a2LtPfhA2ALMC2rrV5eGNSFHtVc4T1Ni3FqpDruUNVpJeAmiwo8Vi51V8duRxjS1PAHvCXvK2Srm5GmgBtcWvcG",
  "key21": "95MFtwskSCUpy2CFeC5x3zRdzKxA4e4YVW4NfUqTGBBjrUXEBs6kRNTSBxqcK9tkY2mtzPtejtFEdh5hnwn7vNA",
  "key22": "2WW6gBJ28WrymDcM7QXUBZjfqPKDYgZYKNvooos53LxvWsBs379NFcS9ghnCyBzAsrbdigUN5vrfAoLww5Vam39x",
  "key23": "3zpDShtTz3w1BvG7jMJt13m16BFAJRY7f8YKN3esVGt4Q4531UgyjLyN1XY5iRmQhLJ2PoZJoQdQfYxoDSSk3rXC",
  "key24": "5Lii2WAxmsnfjy3AdBddFeqgFVEvPiiyFX7zecL6mJ14qx3yR5zg6J75jvn8rMP6eJc8PqTNpFeXok7pekZg12df",
  "key25": "1rLwRM77hAwqMUscFDPrjSkA1LA5W42S5g4qCSKiMzyHmrvV2xdNrviqAznRDSA99hFFb5rG1uftDDKh6BXdmtg",
  "key26": "4Fn4ttPGBW5NUkTCpZ1NVX1FJY4N5XEXGs9YbYf7cYQXdFEiL4udSJaLeFBujX5yx2oZZkwkeTBdRPZLTCZoWazo",
  "key27": "2jdV5rjBP7V87GPLPVhrt3Ym45ZfxihLkEwVR2yAKwS99Yb4BMmEKRaGdQ1qeFbP5wtmsMqAp1T3AxUT2GpiRUsE",
  "key28": "ZaeLBCtnL6XCVHJ8hxxi3KCbaiF3MH8p5hBcgucQpGe3wJBjQkEb6SNF2RXkLKWuNacrvgAC557o8jmFaoa1gzj",
  "key29": "5R7G5JWa6pMM4FfhFDgZwFTg8peRFunH1Uz9NZpXxtU6ycKXyGDVfT7f5WiBJi6pPNjGw3WE7Hkxxc8qEMNP5rTn",
  "key30": "2CGzV3XnkfQEGa5sB9VZLJdxcUAw8WANuM6FgsKjg6ymGfA9K3DfSLDLntN3UxiHHGjEgW6AZvciFvxVf59g6PR5",
  "key31": "iRiF2wfHsGxtWdSU9baET8KLGZKDhr3tZBydMfF3pSnX43N8T5RxPXGcg6aL51nyrAVc6F1TrSqJR2Stgw4ggyC",
  "key32": "4JvL5UF63RUqeWjeHHEbaftmSmd7RLA7N17c44z6AZjoAFQTGUzw2U1cq1GmH8zD8A8KYSwJ45sWJpGbn6J4oDYF",
  "key33": "2J7ZF2SnJFKczPuQP2fxan5RVhwTwkswbmwanvXA2k38JpenLWzTsPt53hRqFffiq76WMuNM9VBy34YkKL8rNfrQ",
  "key34": "3j3HTDeskAJHr61wiDxW1Cc6pZfrWbEB3Jw1ei8QD1AJS35LQuadvo4WA4Jkid6WQqUwAPUsD8KPHT7xVnyWdSu2",
  "key35": "tQ7yMVMsJHLMa6Cy71xwaMXXHdobcZRdX6cUB8Ghv82avHUiCAWvU3274ycUdm58HvrukESZ6hThGzHtJaaH5VJ",
  "key36": "5KqURUXCGbNaT9NB4kfcuGxo3mGkM2bhsKu9p8AD812TyYgy7wSuvunSRG1HsCM1RFV2zC149nHGExxKZ9bgrqvJ",
  "key37": "3Kyx5Xd2UJXvyk58SjA6iK5KcWsbJ7TDP5LrqG298cF8wEcZJLA3CoSEwUDHiDpSKU6QSWcnxNnmnL965vtvAFny",
  "key38": "2WfLn6jtbWqcFmY5BLWxfgFXa4VX74fFi7hXUUcTvz94Rbrrk6fVyXwH1wvPrEEvtXhyN1nECCFLR3144owkVAV1"
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
