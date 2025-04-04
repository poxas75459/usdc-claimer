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
    "28W31eqfW3zRKcDJAQqxVaVmPQqYWg6qrXX9FNWxrq4g6xEy6TEBCwPjEdDPDq94x3uFdgQLDsWVfg4pjTe1Ezr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VFYFAfWhepRS56uU6js1CJKisNs9AUMECByxTxHNERob8u23m7TwQNAbceQzwtH74LuT21pqc3mAYtqbYuzmv9N",
  "key1": "5vF5huPB5uiK5SZC9Qn8Bes3wpQDjmGc9MYnVXKFp7NqWQKQj7KShUJiPh84jTeqiHmHsKdL31J5G1DPUnbzca5Z",
  "key2": "4bhKp2bNjyHcxPezmM38emCvDcV6MHeaFbR5ybkvt5G7AnvoiMkbYCPBCCFnemAdWriiJEfp9DXeFuZqou8YCGPJ",
  "key3": "3pzDALFZVxupFWoy6d3QGrfmHk11t5ZfcrYwvRAHn6XLwRTtM3rPtg65EGotGLwueb1nJUJQ488KZ3MVByi2sN1N",
  "key4": "2aykbKorf4SUpUobPuFNb16r5hwPdBkbKRVe92edPYdcwSiEbFhffgg2H1hXLK52Rsqna1vHUR8R9aKA1njrBwLv",
  "key5": "5BmNzBfAqAVweUPieiXwGgxRHB46E2XQpn8Y2grPM4i3VyzpVhwwgKVBpY2HogWLPVibW43v4sGCdV2vgXiiLudR",
  "key6": "3P7ktHdFMD6iTbSw3aZ9wCCwdLDhRXYfLPw3XRLx5kpakm9yBfyeXqhg8E331PGJAkDFpPTHgDQkEFohfin4sXUK",
  "key7": "4m1TFwpnR3QxtEwBj92pJzPgRP1Yv1heUzSYHFpCrhqtPCkDiJpeLsQxBgQsrhcTUr1bTKyrRJr9m2J8xWfyvDGP",
  "key8": "3S5117jq9p7raLCmq6P5MP4k2Wu172qPc766tEAEasguYSdq2wiTrrybpdpeimJ5hm4N5UPQP8msN4jseB6YmkqC",
  "key9": "3oJJPCnNuNLB4sKdCpaAWYLSF1kRkwTSAG8AwxQipWHwdqNNJZy36H9W1vtph9KG7WfRbpkosTqm8DK9AQ9b9rdB",
  "key10": "5nBdVuTDig3BiZwDdB9DC35aGXah2s6Rr2vKKoTAi4QLkAzGqJfGrAX565g31qqiGEtcQsuip245XT9aFnu7yEgp",
  "key11": "2uMDPfP84CjWCAqSi8nHiVzog6wgEYcsJ9FnTCUQHCafncrgWwegaVxchajMJj9LVHb6uUGbA6dMB4UiXgRVr5GU",
  "key12": "5t722MK7ARmD3wTXRjTmtiwibpqfVSSXQED5xQqYUZ3Ez71CTPNiCK8n7oHKQ5t7f54h3Fn8Y7TpR3cKuDUYkHgi",
  "key13": "5BoTJ61RDBjFScnXBEL5ZFAkm43qKwXHsV78XaAEWXX4y7iZrJKvw7zbS4cAxpgFXoS99UxsMp8EfRj5T3BpDxKs",
  "key14": "54U5tuUt8xwuaWVSMEicMwfMSL6ZbgDhJmzbujPHnzA3qHhf5e5vYU3eUwpazyvPyo5CCXHkVmeRAxcKcKoF772u",
  "key15": "qehGCPd22FiWkPy3g6cUTDyWqc7cgztRxzwLH2xV6xc9ZqpHYtLdQxvofr2kVNTiadnpkGUbecoAPxSdSTm6B3s",
  "key16": "2h2ZZybydN5vnsaZGkhowXQJr5oUVd4SUvxwiahhJUxa8iffXchHX4btkYRwyV38cpVtdBN2Es93u4fG3F4nuPfZ",
  "key17": "2UGGK27vBYWh4C2tnEFX3Ucs4nj9beP2cQy7Cjzj1Yq6mpEwugFWearkpaPrFncWPuBujwEeREzLndNn87wAFouu",
  "key18": "27TY5GMW33xfWkEHHxfRXT6B4deG14jbUaQYKKa1T5caziU8xCn8XEf7iyqctiXXPmXr2taqHx3Ge5WvAXyGNY9H",
  "key19": "LeCGRW5CQpwGXM2bmcXZeqXk2Tz4aUxFfRdyts6p7Ve3Pkj8otyTJMhca1ozwVK4thLdcmdftUTnrL3cZZgL7ar",
  "key20": "5Uv6mmcf3jghxVBH1VZzJQcmUF5bqQmF9HGxE4RgboMgioAkn9wyoebT6sFRYCRiuHM469Q4ReUMnPquPVAa11V1",
  "key21": "444r6gJhbiNRZw2E5UCbGtQLLRDu6iSQdPDRqQ9ThXA6uHCJ1etPwsWct7NA9UxQo5uNvyGz8aijx9e2bCUWxdNA",
  "key22": "3Jx8h5unZU3Ee8Q3gumttxA8PVofbCDFkkCfAiazVfQrWjuzCYwETEFkn7KYpddkx2SN579FLtQSbVTJBjh77rJT",
  "key23": "2FHFcdGNdv2sxk6qwYJQiAdzpLK66HwMbJY913oK68xeQXDDig5vxs5nnfcVnVrZYxu7QR46AZMV98MpwNYn65AT",
  "key24": "WRwCWnbyfuFdmLe4yxQ8cfvSMz481HEwBEmZnuDiXMvYCNQ6mHfmtnNF5UexZFmxyBg4kmvRWmuWTZ6ZrLTNTam",
  "key25": "3NwiXF29bZeRVxeRhbVGtEFv2aNF2XB5x3zc8kSbhsrAZzXuoNV6tsRPno9MKgFhz7GNz61r3pPEf6szukhXwJmc",
  "key26": "51G1BUYjRw9geDcBd9UUJCNHKyZcCwZnWHDysFUJDPjnX8x6LQ1wkuzptboJgLHUDrzzWaBo7cFW5V8QATkzzpDc",
  "key27": "3YcxMy8DDy9Pcsic1qNGzSsQRPbivUNRpTgMM3Pe5ahGh2YnLcMh3YkRmwu3Q6voiYCgGC3mkTAmqhfxoCWR33ho",
  "key28": "3kM6mQa2KWbjX1kWAChNMSLv5Hayhx5w9TCT8zmd2AnUyEyJ9m6KDB3uEKbdDMYZTFt1vFt4LmWRAm9TLVvRHzQe",
  "key29": "62iVRAPaYg1wTrZ5cE3TVqp2V8BStgXXDeC6rxpTrVEaU9NEXCkJe7wwqqnH77W9LSijT88csw5BEi2j9RPQfHCG",
  "key30": "qRwvLbDxw7tLqVSQNNacQWt9gAvVpeNkU5nTX73AafPY5cttm9fSvXALR67Jc1pTRm8fhMRgG77QcHCShP7Zf8J",
  "key31": "5jE33DWjtpajNRhUz7yW4qdEcwuLnDFcdyN7ZWBsBR5xdy6iEG1pVzhNehNMyWkNBYWULL9LGbPEsRzsrLVXwiJk",
  "key32": "2Yj2tdeJPNLDEByxRSQniAi9Xknz43JMNKdPsMxfxAAV3ZbmJBWwFkYt4x3ESN9xh1cSnLqUe41L4JNsGmkv4bLH",
  "key33": "63tcG5CELbmGmvimjBit1LFbsX1HxATcCE2Cai2veJh1JfniCPMeAA7YT6puTRgHV98vfXbMeTyTSvbSCCodwo32",
  "key34": "so3M9iv9h8pMe1fybkH2ewJfBK4zrTTtq1bp3Ujm41RHhgCGC9szYyRpqa5W3q5xaANuMZhWzFq311FhD6kAPC7",
  "key35": "49Rx5MGrpfe97uRYpJLe5KXALPk9WmQ6HuoSdT14JXLp3uLzedLhKxtaZVtKiQDjrM7A5Gu8k61avtgpHLvTjRj3",
  "key36": "5UR54rFStRTVYMiXaDjru8cazy4zVVWUDd5svKGnp3D3R2bBuMNWmVZs6YTyoKYmWxNypuC6evsYNHb5rU2ob3ef",
  "key37": "4jLXm6B5jU1Jwy3yRkwUEk5FQMx7FFWBeQE7iggoEtaC1RkgGngXydK93CgSPEiVQ6Gia55Ac8xoEK9e33FBeRT9",
  "key38": "5dk8rVN8Kp5ejKgZ82nuvy4PXsahQsLBp1B72TpqYMwvAwCd6YBq362AV8yB2vwXP4ZC9bsnaZFLv17oCxFynJ2k",
  "key39": "4gogcbg8encWwZS6rnLTqLV77axuD3tjSN8NY6vrkEU6rAPGERb8dgqwRKs21AYZvt2w65ozfAmFbLySboEdJjPc",
  "key40": "uig9QT2peoqKSYwHbFv1GemnUeL8wZzdwp2WkY7RAh8hDkaLZWSrJRuF4KfFojBBGyxqnZiVtsd5rsoDXLNUPDP",
  "key41": "5GSz2aHQUEmvVRoo8BZj9QHNP9M7j7xSWX7B5WWr6ZsTzznQyMDSbjSKrhKUcYrWfUyPjAKTBcUCtPP4zbQDizkx",
  "key42": "4ZrXU5mNcfH61terbc8hwgeU3bWZTSRhebyeCDgv5HoTU7Y1G9Dt1wsLEKvhUXB2cqPbjAU2hQk5fQDqbKSKKFSL",
  "key43": "4iitKUG3DuBdhBDABoNJorUiEUU2g2fwzrR5JB7uF3nYLcjmAyqak2DHZpVQrCtKPy3DCdHY6S77sDCTffNbUA8t",
  "key44": "4TAdP77MrEKdcUETp6zsavSnmMdAjDvWpN2Nx3oeacYE5VF7icLHa77yWpmdoKDJkrXxEvcag9bPPudwS6KDv2KL",
  "key45": "5oqY2b2puooKWAi1Lhb8k4pY7KhjQNWRRxRTsgZ2dZFFMULtesCy6DUyXn2F6U4HQhhvj1hBvcTgm8TBpYXNnFvE"
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
