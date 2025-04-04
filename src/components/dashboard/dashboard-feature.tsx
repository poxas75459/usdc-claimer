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
    "4XnhJAZ6Abr4qxZhvrVAc6ss8hkiN6xhosetLf7uzaCv9ifvwmmoYXh64PmvDm7g9g29XuCzLKBQDveXcLGGFzyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rCeaSA2eq3Wtcv2vSyhjSXVbSF41dBiHVJ9hEwaP8nKYxtdTuJ51FsPxtyZUcB9By1StHp1iCbGZ397ERLb4ntQ",
  "key1": "21hoeL8g8V74QeBFqo7JioaKFbtg8eXGvTrWL7rjxm9yZE8QhWSA6EgfCejussSKVbsMacFMseqRd7w6wWPqxfCW",
  "key2": "3KtWmgBkEYHyUreGLpFMAn55NGARp9HyiacTubPjWYhgZkNh7yEJwxBkm9ekXW43VDV6End53pRqiDzRSEaDHgnH",
  "key3": "45ZdUP9ECkvdQjVjnwj7pEvd6mftfJG2mSFfS18eJptksU4mZBP15nBuQ3C8iEkchhaw22oQa5FxzPJnDi9ktns5",
  "key4": "2PYE5HxdfNYMBmgXjdgmYWr5LPd6wYnpR3nwUSiPX7tchva5rR28z1mj32uJ1hyEZNt7tUHvcjJ8CUrkWpixidXS",
  "key5": "4vwg7UtgRnrEr9iceR1wB5WW1o5x5bDh43WG65SBA7Ptyp3eLGHnRTEaf46fKYzz5ZjKuZsguqe6ZNweWQKrpLLM",
  "key6": "41xyibrRJHZP7t6ewTHpAhBagzXUDR9T1ducXWfyoMX7EEQiFPPewFWMQrJZSnb2c537wM9TAiRgxNHdBAE3Qvtj",
  "key7": "3errzjNM9eQ8ZBQB7Rrtkr3myGvusXPB8yNP3nqbRonsxXQL3fa8RvLbemoZi1frCx6XDb1GjyfijVpU5kSTwagh",
  "key8": "5HDjGWMjLyAjCvfYC2hGipzcebN6kipyrsxY8gsM2913wEw1BRWUW82v8MWnmDmMX5UEwZqUZRmz6tztRrpjhM7X",
  "key9": "3ajycuNwTAxpTfTJLruuAFeN8UxJfMChAV8kfcy8iT8ADMTJFonwfiW6EgnYUMeVtnavTNg7DrodQpeL2mvxQeKr",
  "key10": "5UsQ144NNgNw8nTK5M3NTZqUzHoqHf82dP4Xay9oatRyQa94X7pdTBctKW28XmZdqj2TDaAwkqrJ2ZWy5H9rGx7e",
  "key11": "BU47BTFowXVhuVciVhRKGmo84LWMd56DNgdHUGGpjTdZ5MFhATBLpppcLntYZgis6PDz4gsdNxvDmbTJZXMGyg2",
  "key12": "2eTsCo1VK4VfjKfqmNDdFjPE8NrLYhh3YZwDPisBBRoCqNAx1SdjAHbNcWSwZZek7KUuEfJv7w4feiztQGP8hDt7",
  "key13": "22TWcL5xAR4tasDeMJ5XPXa5VMb9XRE3dE3yTYM49d9vV1icb6oX7nsMk8HXf47YU4d3Hp6wSwbsja5ZWbjXmHcs",
  "key14": "vaSbPub7CC5KNGmE4aAa849qLq6W997nqmvTXJk5BsqXZ6DA5BjWv7vNottKJdrUrS2e8Y6VMJyaxg3aqehM3Lg",
  "key15": "XhnTn7tBHCrXdiowXu2Hn2niJeUmuQd1ziJoLFziByAXEEqpKSh89xhNd5a7TzHnxK1yaaxRV8ppgf5UZN9K5ZD",
  "key16": "bPcheajBoauea8mxKgPuu7mjfAYM8Lcjqdmu4kRYanjLuv2wE6nrWLA3rdozipYgB4DvCK6B6R4x17VZT8nvgVF",
  "key17": "4Q7UmLdEzJ1ME4vHBU4VvtFMAH4TRBaTcgt2hAPGpjfRJudnEqLndhCPxBY7AiKFkGCYWnTfxHg2y8ktE3bpW5cs",
  "key18": "LmggGjozGdy5TWJQ4uxXpmDewjbWJHU2rd88rFeU6vskFmheNMsfaEacHVgZPcsMQcthWm4HEd1nfkh1SwRr2mB",
  "key19": "N1RqCtYaPH1niBEMTJ6hoBGXPPWM3JdgkrYPq8L2bfocWdPQ9rkSMTsd9zTKk4YYkuTDbMrLQSKp7ut8SRvwqFj",
  "key20": "2og9y3YQB2WekAEf6x1KuJTzQfAhXvGezwAWxTQoM1Qf1kz38uHapDq7JhyNqcH5C2jheF5FnJFvbk6E4rSc1AiT",
  "key21": "4AZEYGEj9r8wqniY7vTPYCEcLzdL1dzz8Sr4tjYEuegoFJKreJXLZAzryBE2yuB2vpt8kZ6F3Jn7Mvgu32rcEdW1",
  "key22": "22jMymyDVsdaDkxFwG4jE1vqDiVwtFLc5mGBZa33tNjekTXsAh8avgAS8rxePLATxb2dbPY7YLhfzAh8UM83ASFY",
  "key23": "2mmBP6BcZ32PM1QyBYQ3BdS1mokcLkGkEsCQYApmUvxroczLzjk5ZycpbM3qakUcamTd6y51dDJtVidP65WvxW9J",
  "key24": "5h2dwksCg7xm2nvhwfayCBUmWSo8gRrWkhpGAAFQC4uK6hAvKcrJQsgZyAdjaSh13yh5Ga4tPJkYJ3XY96SD1kLp",
  "key25": "4FBH8b2BxAw1FwAAQVV5QqCbjCWmdov7YjecA6vcyepQ8n8kfJUozEkoxyfJru2C2Cia6oPGDPZUJXDVTMQvy5Eu",
  "key26": "5vAHmWnFMtNhbvaYa7zN7Aia7v1moErK2PqdQV7RzXKfnwDe2bAdipuypcSztiNYyjeS1AgdwyJJXu8UbEfx8UPw",
  "key27": "3F8hKAY8RWRcQWequWRudZzTwGaFNb2E5GUv98fJqExFwfHAUU2Tgi4vd12UC8192KpxCrRPFEEwyFu3wpMVzB3t",
  "key28": "WQcQdfofLRpTsqbxeircQUP97PP7su2TUGit6G2dCuBujdV2sFortUbxm1EVeUfe76ut5WYsZmETM3PXP2jTA2m",
  "key29": "3dq2JNwUyASWFw8xNefnFmZA1iK7SerAn3byzbGiX3RuttfUriSuAq1v4HyBp3xzunZvMDwWXCsQuLBEu2Hrv669",
  "key30": "36WkQjFxMazGkDj6sUtRTbMKmVxkcxFU5ksjVmuwFKKhaNMbKQdYbKaus8Kt8RsmyLPgjF6VhXCv4BmjMNupeU8T",
  "key31": "5ksWRGAtpee1GuPtF3ThPD6VKwAh8pYyAjU2jtiwnsL5iLymEKM4GAjGBnKWsUcaRvBeCj1ztwC1cr6oDSyfpzTd",
  "key32": "4zv36Jo8DqTCK68AKW6XS6HkjB7dgW1QGF6QF1i4pC87DDCW3ZxnpfhNseubmkQJBdyMhaE3rSosVFpHAHSX2smb",
  "key33": "2AW7omjNc9X4HMEMK6E1SyRfRVUWpJ4vS3C9mmNcuDmyFai2qq1EtS9ESPxyecZduHGVR1UfdADL1PhQAG5Jqowj",
  "key34": "2gkW2aMvayQVqMQ17Yd7wAzuqYyRcKcTJ4TMYdeNtJ3gzNcTMX81ebYgNAMmBWkA2xJVae5hVM8zo3ooG4sUtNsV",
  "key35": "5UxSFb32gzpab2MfnTuusA36QgQtaFw4BLj1nFb1yhB34yLF3NJiiQxZx3vzEocXdWn1pAFTr5daMaKAZKLLrJTC",
  "key36": "59WwzaxcrJGff3P3D1bjFJ4Rvrmkb2AVecw4aE5RBgTefnPdXkqtxynJeygaZoW8NZ5jWVkkHYZ2qPDXRRNr4hbX",
  "key37": "iQLwLrhsmqefah7W6NdYBrshxXZNxvYXn9PHL5ypo5iqYdT8ESUQ2ELSVJketQcqwDHeuY8b3PmzbvNesi4fN92"
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
