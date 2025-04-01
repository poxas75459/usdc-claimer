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
    "5jiEAYtiRYT8rMW9xiua2gk3kKGLRRuJohuqeGhKdzWkmSxPnVSRjvMT8PQyQJib5GPsbuGFiNu87CeXHneVTNzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zcgdd4sqYx5mp3uT7ywKs2wQd1SPa9sZLzcTYQLFgvYPwu41QC8LTej2G9HBrqGePQkbiF6NqGEDcAfNXMeNtE9",
  "key1": "ANq8viYZoryHszvDkLUVFocMUcLwyqNv1aJXsufit5AiTNcsJ3xHznWCs6VLfYrvHS8AAtiGw8G2WGfrksLDNoZ",
  "key2": "2Bv2Ac5jQHbQWhFXuZH5cwfwok53FJmq6WZgqQz3oWdMnaXzccx4KdoBY1CPHHeWUaRUg43bUwUDva5uYyr2cCfS",
  "key3": "5DW1cKp63pkyp4ApBQEVtXxnxiZmpHh2vo8UduREur8WqTzqoLzd8LPJ8NVwAY9fj8JfjAstKvZTUCuwbvK4EScw",
  "key4": "d99GgoByTWXyAyamLdKw1FEDcHSeHpx4umbouhifevcn8Ct9KZYL1iASkN9iuLfX5dNoHwvZh2EZ8dtUX2f4YW3",
  "key5": "nGBhT1uHTDYDzmCqtrPeTR4LM1rMADwC7bz5vY2Ve8NAnxyt5sLDiZaATP39L8uwVWZTnRcAKsEMxFtd1u29rXV",
  "key6": "39R2usSH6cnySPMPPPjC6czDoJ2yXxEqUBLvG6AksWbbqJMLwV1Q23ZE27ovP1Tyr7J6HVzLH8voyubV3T3iiuWQ",
  "key7": "adWdTjDKxL3ZaeYd9ykVjBG1MmYmv8vwmYqSt2pHr9916e6G2mSM13BMjSs44VwyU5Y7TEUN8ZjffpDJM1tHdZw",
  "key8": "3j8mVFzfUkrFd9VzMNXsEaHhpmJvhx5GqUz2xDiFjWeX5eTAC6aVrurKzmJVv9jm3TH3Rs4ibLdhJKdHb9pHJcHK",
  "key9": "2qDnbNeytjk78k9svTb4QMdn83y223ANyJfFhACBWEEadKM1nMYqPDUyJh7p9uvnfCUrEcSUrByw82AtseTehFwU",
  "key10": "25ojqawhFyURYJQ4ifPonRRF8RUMjstHBwT8bRnMaPiRGkYMVXztxEdiZ5Mu3kodYfmKqx2WaBeDmzjmnsQJCgFX",
  "key11": "mu2MhPUZnxZPmZesL14pgBridPFQa2N585wyw5kERdWMrsYSktTfcXRYF8V6CTx6HaPW9Yt5o7hBfnMwyr3E2vB",
  "key12": "EoLJQu9LLzhxRZYFaZGG4qEeEsmVtqSRBohXCHnXeXdoWmvkbeqbdfWjZpJzwrV3vuHoPbSHqM7YGEnKa8Ps5K2",
  "key13": "QMqzWwuAjsyWB2RWMZ3XxbHkouFPjEHCQE3XiHbgz8JgoCT77HYZMAE6a9vyDzT6T2xKWWQaKYh2mpPGmAmeVry",
  "key14": "5cc3DeWoeijHmggmHK2zL4t4h9HeHHPxYi2LmJzc8CjrfZ1kCiQtJwPUWWcdYg91LH4824syooT5CDarRj14N77H",
  "key15": "51WXvYi36Edcbv3fm2yFrtvFundjdJNTz6h6g8upaZyRRDmMZMqR3juCXzyyJiAcMBndsLoqbextptXq3YjaCQRC",
  "key16": "3iJsGKEA935uxszVZRCRBhoqYKtE68NEgzTNgiFu19c3dFK57nEMYMVNuGShv3LcfEvBGzsdj4XciYCx3g3fW6VB",
  "key17": "5cy1NfP5QsJytKiUSXMmdpwDqfDwaD2iEMYCcv2eoHpPUA91PdFF85mF1LTHNpkQUErYmtwcnZ4FDBP1feN77V62",
  "key18": "3k3uD6JbaDuPZcc9cPnaXjdwz6iXbpns6RycGBZB4YAmXLcaKyeiaaApyrUfEBU447PmVCqk23faneQ6tYxg7sBo",
  "key19": "2MBfaTzs8pJTnV5tYfPt65KaD29CctdCMp49h7MD4cqKe6TWuMqdrn3uFW8V8UfqsdXK9k1dM79hBXsfnfaz9ybJ",
  "key20": "62La89jvZLhMExmXRBxZJBgU32Cv1D1wmgncNoV5jj1GHaecPuzSuhX9VZy3hK3Q335uVD1ZzScCKaMiAdGaYC4m",
  "key21": "XXbC8qumKvr5pbbfhNY8ZApQ5NWstRGyryLNyVE6sPhncan54hcUvq5vrS8EyPWqBHv4dxzHeVsKxj7CHKHFDrf",
  "key22": "4FXdN4aCsyD3ZcAkGerAYjybTkUdCxLs1sjKqYpKZuCPUgiL9wMoVdSggUnbvxdY363X48b26MBpG4XwdACUN9Gr",
  "key23": "5wFk3aejBsXQz6e3Vkh2GDHur7jX7cZkPAsVbzSXFn1k1u53iEsMmTorpNn32kppNJPW66Dg2hfbbmKUzc8Y7Q9n",
  "key24": "4d4nmcfwBsARS7R1v5pYVKPLBFVMfc1eTaLjSSis3QMGBGz8vH6FAg6wvjPKdNx9htF31vf6jKrgA6NLDR74pjr3",
  "key25": "zdUtqtyq6TSnoh84g9kszfa7NAHZp49afnhPqv95HSRoTbUsZtVRe5DfJKoDdiUwK2bdszTfGxAggm5Jcu8gkyC",
  "key26": "LkqRp8sVszkyKVXhbY9PAsg7Ex6DVsqtEopYBZyVZHRdGm1xziFCQLgLngmBwEgpnjasGdrE2oZR3KLYSXR2eXz",
  "key27": "xevLDt7L27Uc7CGfkFrWKi5G6e5gAYGRfuX416SLcrUQPXHCxnxikvU4VP5dP2pnZR9FUafYFEVokCxErd46NjY",
  "key28": "41s15dsSvdjAim1pih2LWrUwRBPNTmjRgmcMzY4Msve6G6TC5Rya1Y79Mziess3YV4L3utEPvxyMrBLQb73ppAxX",
  "key29": "49u6DYg8a1v9x947PSMLRfKM17B5JVpBKVqmX7Jh5aSC4euzyi2sMcjakHGnF2ZniRCyjPpejULDyAEK5AqDhWHE",
  "key30": "5cFuKuTP7qk3N5TVZmvmjURGB693KbwyJcSvobJNkrZrZUS3J9279dDjhZhwRvEpgLLDdXMZ5YhRCQziw8jqf1md",
  "key31": "4vuWD9HLx3G6wVbfUkXAh6QGNv1RY5NHR3aYxXU9rC5m3hRCzBoVgi8JQLfbbUrHWUXw6DyBA2GKfktNpvyGnqJS",
  "key32": "59ESxpRxxsjuJpAT2mvkDaSvFUyqd7DQ43UPQxAXrvX6jWJbRZ9FGLdh86aENgCrjJomQRdLTWj9HXhVmfFL1csE",
  "key33": "36zDuCCZoDSv8DFp78cwgNmSgcNhGmuY7ZekkbTraC7XvV9HNM7mUQ9c7pL2BLCJsuFcBy5Zwto8YoKvhjBj1FYY",
  "key34": "66jfjRtq5m1h6CDcb2S7c4vj2i6XhvYejtDqo5QCNQtnxq8ZozdrvCCwP2WQNmTyqPuXsYywDBC3sJBvkjcWDjDy",
  "key35": "5QAHZzzHebEXWPAAhLeDYuYaU31MFdJpU3JsqzvrRBicfqagvf6hioiDXYcy8Y8hHeFSPNGqwwF1taeR7R3VAxaC",
  "key36": "5ETuNGSAW5hUMstcZmGFp3Rr9GGwatH4AfxMucJpGkL4utEGgA3Qhsr71mWhm4NAuUR6khkjxNWZ47mBabdhXMHF",
  "key37": "4LEjERhJf9UraSbQoxHqBdtngGgqQSzuHiSRQ92wNjQyc1pyzZ4PJdBCCK8GwdMKRqrU49vxjZgtRiiowtJyNhWr",
  "key38": "3yj7J5UXRChHgJRaAyWP9PNAZBEXzbSsK2SgmPyNr9Ss1Nd988Z5jZMJKNiFDSTmUDXMqvi1SbVoAhLy9VCEoJbz",
  "key39": "2LJt8xPknsuzN9s7PjEobLsKxgPGGDuFdvnpJEWNEae3zg51M3XzDVNyvogms38WpFfhP8hEcntRdDHSU5zNo4Hh",
  "key40": "5Yv9RvgwqWjK3TvPXqrsA2f9E1qACENd8njaSqQQdZnW4wSRJriewtUwSbT8twRxfFwJ64xVb8eAhHTxrxPK2g1r",
  "key41": "2FD6fDmN3GMj3bbbwuUy9NVTRLqP7QEDwoW7JGf2dkrCG1mb73y5s7Wy4TapW6FQ8Tm7eK6UXPQGkmy5QL27oeqV",
  "key42": "4gZJx5WynnutruEQmgyBdqqJ2aZYgpi4Z1r3mzT9v2xLjZwCsHEkNcfLwDDZ2JWwGtm6FwojiX4UgQW1UrxPHisn",
  "key43": "25W8D1aD9Hwxw7iEbRnEWJECwizPSTzbPw26rW3eTcNfo3qsCcmpj3gELNWPTZcmKLLbpkBMZbx32HkqeGYKwjUU",
  "key44": "s4ahsBixjMUtzaJy8ho2vF33zBxxo5cEzz3XBk8WZ9opMopstyS9PTGpraExxAxePo57zRpJXrMVXsZEzXp9VCb",
  "key45": "44LpW1HB4kgvwmkYigAZX8JChRR74iQrNoh8xgsSWDBM75HtnqVGLzCTzZEjZ32KgfksaPJGto71yHJCSnoMU4wK",
  "key46": "5CmG1BfzvGYCPczX2aejMHjJKDvwWxVEGxo1JEWj6j4tDtbjWaiW89R4Xx3sLYUDRnXpvVwqAD7jM3rVy6SnfQEx",
  "key47": "2TivTFH2FfT9rpACuQ3L3ALmKbkAsz537awVPdEu2LWRzL8TdRLgA5gK8PWBfcK8AD3Zn94BzRaAZU3Pfnmd6RME",
  "key48": "2JMYb5vSAHcdbpwHe9Z3z6uHo5k7jpP3a53G8LR8Jiqp9edDjE69qrfPgE3aroyVQqEfKyo3Q2SKk8VHWkVeC5BL",
  "key49": "2gyXWCoSRZukj5CyYzdSExPBNmHiJEABuVo7jMibfXFnUwB74aCqttBsdSu2cm352GcJfct8oceBeP7KB48yetcf"
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
