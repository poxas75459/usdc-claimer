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
    "kPekqeKdt8C12ivDsBN6p3d5uRjw3wtvXEf3LKRtra5z1VvRKHPs5SmWG5i6ZXHtx9BLJwoRb6XVfwxXfVbWhME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26NeyVeMpFT5EeaqBSBv11fFEjgzhLvmg9YBhXLKu9ErgTSg74m1fVHAafGEXqPJyQMZnjvZFpBEmCE5nbpYcZWA",
  "key1": "545Luw5PAGqrgvDznC9SLwCjG2erY4ydJLtugWvGxWRXv5E9TpsVicMbrBknQtUKy3PqzqgdSbQTo6vMqUbzinLm",
  "key2": "4SF7a1ub56ixwxbchA3F19dsp91tqgxNua1jutkpaoBCXKUUARTNTrMxabLiTwLh3GXbfjaTJGGLJyNomdPXvMbr",
  "key3": "22tECcJpkh6VZouKFSBrb8o9xeg1eXVdNG1LPZGf4Se4DeLsDvJDd5BKzSB8hsPguwHbiWWVovNXNNo9vqDkC1J7",
  "key4": "2pE85vDNvntJcULHUHZ2HdzLXuwGCZFaWvu1UJSxPYPsiZJL43Q3fiB2kRa1qphav9j9jYHtLsBNbgEGcpKo7bj2",
  "key5": "5zD2axsef3Ny2YDEJCLbkUgBAkWZugHeetVjGrEdx2ADcRB64XyCmUnFLJJyZFQ2dkrXTsmDjekjYmwxi9AMSoJF",
  "key6": "5HgroHbHMiNcMYtw4RCqTK5QTAeWR8xTfFaSMQ81TLSfhgpMUNeC2hKXHig5NC7zSQXNBgWJG8e7vUmo6qsoCntB",
  "key7": "8EW9vpyGU5hB8k3C6VVzwGfy9D1xGnUvYmD3n3DsnePrdR5PmJ9kG8cq5u3xYE1PzJw6qkFgQSKKb32uQedyzWV",
  "key8": "8QRB5LB4vqfaZZ5ptuMPqdeGZYSYfE7d5jPjzvrt9pLRvRWMErxe47aQdVkwNMSuNwSon5mNwtLK1Lxv5RTYX7c",
  "key9": "42XJgeVeophKGMAcrGzJVVXwcDnJqm3M5ifpdSD3cAyhrqMqNTXr6YLBghPN9eADjGZcdWXFxxaXqvFX7Q5VgFkP",
  "key10": "4y3Asj3tqrr1dCwnUeeGDJqc3oSKfBMz7bLtgMzij6wHAj1rArPXL1FFyFY6eBqH1mGQHT1eSQXCqaWNccQJL2Ew",
  "key11": "3E6zkMi9H7M6AJJFPvfwpGLMAbA6YZynKQgWPB3NViSB5nrktK9y4v13UYHRwAEQQtBBaEFm9ysUeyRgmFtRk5zJ",
  "key12": "4CS1QHgNcQGbLU47TjYQYHm4nJCuBJ6rVmdjVFYcn27aJesqTjbgzn8nkUcphhKGTZobFDpQeUVU8FLniFLiX4oy",
  "key13": "GuDZeXM1EuRPFQv8XrHYSJRxgxMvajqA8uWmM4hdkipPwu9WQTd7vxxXoiDjdWRdHvd3T1QbQpHpZj1w1MXgBLh",
  "key14": "1r3vHc7fCSuUsJTqQxN3y2rNweHpDXzYZppDGaH3PG1qYyAkQb8iRq6BVvCQE3kMcKXtkCiWaH5iaB7tgPiV85j",
  "key15": "Ktr648STv95vD6nuSZvPRqkJghHqUyfcpf3FBMZiW8B6y4diyx5bGDadnAJJtuXSGq3awghqkQdw479k8yw4kGe",
  "key16": "5G9hQJnxA58USAnXcxdZTwTiSD6aLZCCcqV7cohDF8aaJ1fEqZX344WwUhVdRdQQzHZDQf4sWo26vkAxbsPdXx5j",
  "key17": "cpHyi8wjYH6Ln9CXPWTMgbG6mLyCTeDLVnR5iEySfu9CajCpWwZ4U6KdHpn1FrrESp8JeSRMuUwbtjh6NT74XTM",
  "key18": "5ssjUYQx69vXeMp4RRHJipNnawnKUcvM9diyFKqN8nsmRJhzg7HS773Uh6g4gLEgRazy8J79x77cZWEm96LXm6aK",
  "key19": "29XqpTgnNuYnUd4ZqdYfp1tuWXkBX85X6SV3NdV2Wa6NdkgRzZsVaCjuhsRMqse1XhiWXExo8P1tUfALqyw9c69M",
  "key20": "4gx1L3dY4mrdGYD9hGn6CH4Kmcq97QzyzoVsCvXRA4sbzSziCCW1tuLx8V6sxpbAygHm8jUj19vR6XyiU8SvJ35s",
  "key21": "aATeeWiCH5BUDs4eSwnqU11WvWDaUBjs1PCcviyN4tsi8ZW9AEcRHik8ykJJgfRQt35xRN2PdxBKkA6ScTrKje9",
  "key22": "4dcpVUJd1SiN8Rc2zTr7JAygY1VbbW18mjikmRfdwXsHYReHmg8DXQ2hGpeo9pEiBoaqJNG8rMVNeYVpJBX7NQVN",
  "key23": "SdmhduJv4jK55woJq1cmsupCHELjfc8oAMQjdXB7f5oxVSFQFWZmRPQMbAmDepQEgrTmbTdvffFjKFrXzcgKHbw",
  "key24": "Fn1uHdhJ1VgxpXg8ivD4ogqehPcy9g64a2QttXFEXt8PSr5Pk9bYYoSDBA4LCZHVB2Mh3B7LLYoaFFDSWsW527y",
  "key25": "5CniKoq2RqKww88aVHcoNbYphA2QVgdkkhn8efV2aP3utaHvyPMK3JjbpYvrfbBmZqF3LZJUUUM4YgWMptvhGKfe",
  "key26": "3BC4mHUn7QNVkqv5VwdKCDdaoW4s1nKkdC4sAdykYrpXoJvcLZxdYNp9Vmv2CcNM7khPuqHQeeCdrAgutRvh6vAH",
  "key27": "2H4ioNmuoWNA3As1WnhTqL8oLfA63z42yfXE5xYEb14duy2PYJwjFK684bba5NgB9m1KMNWWx5yMWFEepRkx9M4t",
  "key28": "5bdVGcfbJGUuWXy2yMZi8PJtdcNkc8SAMnpiepR1mcCNFPavkou5zjLuTyWMaKtCbAainYS4JxkTRGn3JbiUmGX8",
  "key29": "2xDKFZZUbyABuTMZPDQRaGCrrEcXYWgQ9ysGZ5VL9aC72BT92rnQfCT6tehg4TMAJR6irWywxLUcLioxabhyq14D",
  "key30": "3uQVXYbmzn4iRwCqi8MFcNyfCRLELWEjVm8K3R2QQeQhY3ou4qGQ1x3jh3uGeFiPsUPi1hsK5VytvtLF1vuP4TeV",
  "key31": "2sQAwbGhmwLYHmNHGvxrzbvfDqaPYM5P4Aq3pzdQMuUugtvWJatPwgF5aFcKps6uYB5hB4azP9dmR5m2r66s6rmc",
  "key32": "5Uo3vihwiP2Sq53kSJZENDc6DEQCKCjgV6nXxGEcs6sRgFfNjXpbfseY5HhiziP3fUfurVmYDJckRUXqwXF4AMcH",
  "key33": "5ThdF45EUhHAnH9zCG77XVTR9MG9K5K8pfHcGmUzv9rE4qNY1rGsM2c4fVTvjg2RmUHY9h3Uvf74a1G12LB8hNyE",
  "key34": "5UVk9PHTinHiSS9rjmzyYShWRcV65LHorULFAtQU22yc9hqKdNq82nhkGc8SRGEhLHjbVfRmeNiddfAF1hQ5hLxA",
  "key35": "2mtUcdMxavSJdufTPHfHZrz8NDnX3QER2WLu34tW5wEzhkpq1fitQyFZCoGSW2Vr4vxsGHD3DdtMT4uN1dGctNxK",
  "key36": "G73LCW6WVPCab4kXb5U74GE5k5TsUX9TAKPesDab5jTX9bZoBAfkHvjhCzB8t1QXQB528HPVQZmFg76XTFVm2oo",
  "key37": "UNtbM3hr913TRyAKu8fohW3VV4fSm5sXRP78TFiGWS5oi1UaAsnQckLbL88gxDNKWWiVLXQuJDhpMfWKKTt17vx",
  "key38": "3UZrHipbdXi4Y6LWsq8gQxAWzVQ8uSdG3E5Zhi4dmzxLuHtJ1XpAcRyvYmAxWC9Tz5P6PZkc2YjHS7Bj8uKebMbv",
  "key39": "27wyH6SjKxe95e8V5yWAKqf6Htva7yQBQvuG6qkHmzYjpB5QtAhZbc1FX1K7Eys3z2W4d2aYFQbAh6FZyL2JE6Kr",
  "key40": "abdNn8rXE5ZVDEnLZNPUpqWJnhPr4P849nfDVCe3rmQ2nk7DPQNjwjHvV9yZgnMF7z7ksns1XQskxcFgFc8yApz",
  "key41": "2GcAaTovGLohBQBRVv74PWhNAMzRGbJnKm1WGc4SWptPuWbaPjVFNvgnSxTHSSJnZBAwu7g4G6XD1RLtZngy8aqk",
  "key42": "5iDxWpYaoMnGtTWpPMs3ehS6Sm35RSsES7pAD8qeqkiGKxeuzu2MFEjPaxz6UNiBsnBdBqQAxjvDYmQvvrnLryWM",
  "key43": "3DjTjEuVdjH9Tt6q9Lr63BqkDMrsztfCUs15Yp8we3M7teTFdVtdh2StMFExz3ic2S1zbfX2Ydudx4shuDERHzdi",
  "key44": "3WDNdNywNqKmswVTc7Z5XuZ692vEZBQotYuHpUANUcztXbFMDcuzPY9pVnwm916Gw5tzsvuTxTvXNVoKm7FPKnZ7"
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
