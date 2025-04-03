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
    "2jCWvmRvVFxnky6ZkKbYsz1JX9wBdJBvqVyPeoCgmXsbgG2MhWWszntAjKyeTnQFWmHjzF2Z2yxttYmxK5iyHgrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R21EbzemXhKwSWXtCr87LerMD786nPRWHSH9XYmP6zfs391sMgpFUwz6mUZPgD8owr57TdDPfgRMykkMa9EbJ4S",
  "key1": "3962JpDhj3yNTZVYedKoVE7GWAzRnKAepJeZNMs66WnpSbXuwYjqBXy1G6E6w47Ni1LBcf99f7TnzgxAWsCCPfDj",
  "key2": "64iCgE2HcVQXAsR7WXFkKxgqnyvrhBd5hfUxuRPqpZBUQZkVXGBcagtw9Z2GANnWJJkrAyt3ysZRCeDJibVEaEG3",
  "key3": "36pBcQsYLHKPtRA13u9mUqWcpRpNZEYuADoXpEaebu665JxHwSmchC5vQ6MGrfkXGRJdgAXrKJ58qvHNTFLrj4wL",
  "key4": "2ZwSmwTvFR5wJP9C82ZHooVBKaRMrP9b6mGbimpneVEmeJtupe7LKpcR2QgqUprDfx5goHDa5E7FCRq4MEF2zAjB",
  "key5": "UbWBgkcUrJdtvgiHu4bajDyv8rB1ZPQVX6uEn3MwZCWPcsFhyBpgTAzpAeL8eVtmU7gomeuqfcYSg6ecFKn7xRb",
  "key6": "4LLTgpXm55qfbSyGoTfUFcYoqhRxMzNUCNxH7AxmxNYY2ih2G7ZJKxveB9r1PVZtmJXmcXtvCYJVmFwFv8HjHAk4",
  "key7": "5Qi2df6egx59WhaWaRaS1eHUuzpLhrTFmt8qnEsEzWujUMKDY82huPT6pwyRKmF7q3YhnCHsEPREFYqBvoQv7S43",
  "key8": "3abPzxwjyWA5tFBJs3dLvozg9NwKR4ThrNNEiaFf6HpbynjLWo7a8Moz8wjh9wMwGT8sJP5AmZ1nkMKVJVQibj6n",
  "key9": "4rFGv9AtPVQ35rFUCZfgMCCxfuRcVqbLUoNtfW6Wz5SQJ95JrJ8SpDFjE3DgykVtvtXaT8XuEbidSvTgTUWveG2H",
  "key10": "4WmzvnYnRenyUv7kUgRXCpd81dGLJrNYDjQdg3KbfRKBYTVZU95ACvdYJ6MptTkZXmBdnQB9hEJtgNEF3A7tXPF",
  "key11": "4aVNM6wFyQVo2ruprJngz5pJDU8Mvt9nZ2gPDE2Z3rY69j6SQtzmHMW6VbpAmuRnBeSStJwLAfqeenHUKyHoSpA",
  "key12": "3UZAwhWZ6kwAGHLctEg92J83jodeFMM4GRQDfRSaonnMggTVtPuPwhphUQH1Am3fD9iDAe16KzyZfr4PZubHJHb9",
  "key13": "WNvwFQiHPUH7Hg5X37yWbMc6qGwY3GAq9r48bkApW7nzwxaWQpW9CoskaPQtfnds7YiwUzQutpskUbkebtFHUEL",
  "key14": "7VMohcKTdNVqmg2ZMXuZ3jFfTncF481j5kdzZWPjUbBsKEr8D65acDZwjTgCQAeGGgkrnwkSDypiRZuPByYRmYs",
  "key15": "5GR3q53mv1PWCK84wibMEjW7H2W3GWWFeuixwnJsYv9Pw4Vo4NnwdJDoyfKQoqKmrSHB7QSnaCMMq8vSyyAnpF5i",
  "key16": "45mu4DbnVYsgzVTk2EazRyapDrzJJauKXfPTa7FZfdwexhP4nC8fmG974TVHwDGgDgP4rMTCRsTUWcbt7UWCcaTd",
  "key17": "2uuVsKygW4TH2tdrxxhuo7sAWn51pKc4kQNVqkmPfTv911Us9bn9Pfsp4JxtWqf4NJLovvrtojbCMZfBhLFv6PV5",
  "key18": "2HVsUP9NZNpuBYKeCeJo91h3aMMrNbU471WZTVEHfQ3vQLskr6atoi4hArU4vTt7bagmabygPfb5aFc2Hdt2cy5M",
  "key19": "5xrY79aoH3QidVvrz3MueAq7XMfP3MvyFfV8emLZnGDdpiZswvrKFiG6WQdtzhX1Tyrj6rzm31HyFgPw4sZ99xps",
  "key20": "tJQMxRNAS9dEvHYLzWduKdfCsb1o7Si12Hy2QSrsXJyaJr8Mp25HxVLwRhHYxoryBg7yJendA2iTyEKjCuGhaBg",
  "key21": "2i5k41JaNGVcKH1yC3x3qCTWKbBbeNu2Mjhgfx635t7MT6hiKsNomiFYjtsVzHSfG5jj9SkpgjbypMjjq4YiZcqJ",
  "key22": "4w1QZpjHLoKLzv45S82EdUrnxz677JhgJZ22kSXz7hCmcjx9yrYPdVWcitXKEH2HFaxfsTBJYD79KT3BH6Yv32HA",
  "key23": "3SWVo2rwWcX9y2WCe4ja47H48GnBmLgjLb9cu6PTuvbVA8vb9G2m7x5Ff78Rn1BC2PdKzJ9EkUZR1dmdeFxF88b",
  "key24": "5gGH8EwUVfimWhC2iQDBqWTuiZSTt4ZZdgXsjzXModKUzUYDXUjLHBQip54XpiiPchgLuCE6dFwqXfxff3i1tEEP",
  "key25": "Ykb4LMmxwbZepbbFaZ2uKqZF7DVwjZitd9v3VVU1TJ2JVh7daYcYMocW7BE8C16PXJigWBHxvNerWtUjNhgKu3H",
  "key26": "PnoJVReN6x8VeeccPayAGUakQ3nubuUKPWK3WfMz5nA1ij99BNTotwovTRzFeKEPxsqnDn8qwc1xZGoaKQRHiuB",
  "key27": "62YWYZ3oDqnNseFUrY4gevZfLJkGNmGepBRwgTPa9ZspM9LWznQmZMvRZoM4UgufZz9H9fA93DGzT5Vg4di1THAk",
  "key28": "78r4suPojtb8bLu4k7BACfCnsE1j98zLpZeXXNsyCfgcGJznmqRKbcN6aPA7ELx5uJiHEZ81EJ8fPqNm3fj74c9",
  "key29": "32LPc2qyhbLE3KCfVFdEywZ6qAo2FryszkpGTcAKk4aZ45SLdxAg6cdXwwZrpfGG8vj3qHcjKKjS3U18giAZpjXc",
  "key30": "4dZC6amA51kXFfr2iWEkotVBKNruc2UPFbM4Bn9Uhxyipu7MnCzprceD23yciDqf6R9GxLTDQh4mPR3CF6NXxBpX",
  "key31": "65qWna3wXaAuAVztceZWWhKSwsdaqygHrGa4SPzojekCWjMJoN7cWsH2NcaKig2dWP8VyMV3yDcs4xGk5vLSoYNJ",
  "key32": "4syVhptJ4skripq1FNprwFqMASQBupdLiRJEF1Tux5zhz7SBYB6MycaVZApjVSKFhLnTrkeuvXV7qYD79VJfePDZ",
  "key33": "3Y3c2AMYhnqB3VmbNNEmH8jv5ePa4LLYToghrZ4zsfWn7tR31PCmGnwSiesagWxibNsEPohpejtsf9E89JTj4FbB",
  "key34": "2GJdauiXRLF5PzcXn3i491sJAu37WfwUyFcurDC913s7Vb5gxYiDknLg3NF4SL2Kqt1861Uy8KfD46kx3zxYDae4",
  "key35": "yBHq1rvKxj4DBeU2qoa4HpNNepJpioktzyZDKuTTcum2Py12NcYVBpf2roVb7bh9pB2evZhbryrjuQfjPjXWChu",
  "key36": "5n3KPVTbBVrLdxnVEztkn6JxPTUdN2WmmJSuevoRrdWXJ3VtuB16WqocHRPCnomiYkNouJ5wA2D2rQgiPnw3gDBA",
  "key37": "3z5hNW8dCKxqpUf82t3tFFfZ6ELBoKQg2b4BsVBWE5w5NZMGahCYWNfiYWP5EkUFe3YPHuhLrAUnNRa6jAZZKET7",
  "key38": "4yE6RoDhuSRLwsrzrjz9CxcCBSRa5urYxp513xNwZqf9ZsbfpE3sDwinDB9k7a1pmALz9yWsa6CeREuMsAXhp6Ez",
  "key39": "3MSkH8Sb7QTXLB3LNT6gZuDcwafv1L8vEbM3vVUtgDH99wKzq8Uk1JtR1FYvCzHr4eT9eLqn5waURuAyzXHQE2bi"
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
