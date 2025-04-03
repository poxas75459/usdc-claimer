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
    "WHwgTdH2PewCF6Rq67YiPoF7CxMUi63BT3JY2GoPMPM3ypV4idEESTLTCdfUuxYeeVGb62F2B63cQGzuLfTqRQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N32wYMiznCzJWYR9kvvzEFnyiXbEQLrcEaJH6SuFN8FVrTs8qPCvs6SqUvF8peczoTLbfm8X99nHJooKN8AVgAc",
  "key1": "4wsJEyNYibPNYvmSeSsXk6YAKucZ5F7tVXUpgjrkTGNCJpNrLBdJ7GopXQrRCcp2Ef65GbF24SCiy2XZoCC8efSf",
  "key2": "2g8h4supvB4tBN7LDKHq2SokerpXNjnFCG5Zh1CoCKE66Hk69LYbg3H8R2FWCBNBveDZ3aZDG91BwK2NBU1jjWyV",
  "key3": "2BbAmegLFrB3bL4k3xjNbfWYpbt3AJW1CaJCMSfEzzB9XcHBKDfTLSwoEw6esV6B7LqcLmtrPzTufthS9bswiVfZ",
  "key4": "56v8cwVsK8SwgBueDT4MsQdWVNVpjg8p2i16Dzrxhp1namsYQUzwDzZUo6HxA5YXcmzXgHAhjjxmhBqthtTH6TKe",
  "key5": "3hXTQP5aEfaqvCk5W9TscRKNfpCmLrceXfFwZKraVfKTtVJDACq4uN9KKeDgCTnpTbJYJPvohSxQfqFv4fKzcqx6",
  "key6": "4Y5deaDZFaj1qdHAc8P29SDXoSVDYTD5Ddm9PywKUZ1kmwfT7aT1xNqtYyCV47Doq9xxwVJ5UB6PRr3eyTGhpVgJ",
  "key7": "43o1QGfVKEJ4US3BY5XpC9qQPLS8tqv485Psk6grcybiUJJxrc4AXQEry1SCUgA4dpa3sb17ypkNs1qe7xUK18f7",
  "key8": "65FACyiybZokahXDjVQECCfJHegRoMhUtwiuzfHqStKzL852fqvpTdi3qzzAbvUtDT97Poqs7FU4ntMiCy9arNvp",
  "key9": "MP37W2bETprSRL5c2G7CcgmLj2nHf28ZjBBmH2VvLtt3tr3uzoQTFG4mqfQdhAcBHMjFzpuhom7NTmCxBxQxPXE",
  "key10": "5znr16MDXfhG5etLp9riH5umNo9E7nEzUviE9fP1jrTDcfJC1exPnRN9zQDCs9vnC6Mu6B7tZp6fXAnNG8auSXqq",
  "key11": "4j363occAXyRJLZ4RqpBsfyaSWqBxFybrqxwhRoNijRkNsMbpyD4MjcCJrk5MVkVVio4rZiJEapjiuncf5ds32tF",
  "key12": "2g3NrirQEr4BfZGX1CAGpbN3v4fXg4uGuQqTPoLDQsEtWvryobTyyzFZn4iYcCXwSB1rxq9q3Pn3kXf6m8JRwEeG",
  "key13": "h9Vbe8rVdaf5ot1MZrWnbVah84idf1vucCMu2eBoEE4bnmGYFLyLMgpCoKWfpXuTDBHSt3WriqQ1xsvc1bTyAer",
  "key14": "3wEzpjAydoucB5WnFV5x8uBQAY9HJw689J2op65gDpNqfKNJQxra9e6kYSrukeDqp5vUyhU2pPmrhrGG9iYXTajg",
  "key15": "3jGsQD2sFkrBABepV17GSDmXHLJ9t51GnMJ1HuTxhxZHrpboySqCajM1rsiqXyQeTz7hwzthwr2XayEYv4ZhfQss",
  "key16": "43QrD7sDfqf2srJDWWyo1Ky2WyoQhPf8sh8HCeUyhHCYdx5RLRM29b3fuByPLtaWDGhgq2zZeuLYwHQKLwX1QVng",
  "key17": "JykNcGAhVHxsNw3Jp5YGQgrxG6h9E9fr53KTBMkTWmQ22wdJL5psFXc696tfS4YJxii9gunXkXtWv4YfTPjnbFR",
  "key18": "BCGShTUb3W8MBD2A1kg4DpsmodVXuezfPFRsKCvfMzhGfAwkqNtCUyUeGA6FZxTLED1663qJhREyPauKpPmvdpc",
  "key19": "4WhzDRAXUoxCwVc1YRSTAdkmsprF2dxwEe7EsJELvmgqvnsRzhp858HA6nVR6QpBXQUzaRm4HuTBcAEayKgWG3wW",
  "key20": "3nAheMp7XFGfapVhoq4TqpXrBA57Z3mUYVGVnfxfed4fcswzaouuVcZU1DHSNqVbrdwxZsF9PNSX396Hjcu3bd7f",
  "key21": "d8FtG59qLFQdy3WKw6gcQyaGY8N3Mtk9k2HCsuNsdRkngJcvsenEb42ZMqMkACFP7omkqCFdJcazN4X3oTzYhxM",
  "key22": "3LpDajrCatwNcVW9N5dx3tzgttpKZRxATnrehDVKeHKg4iXwdPhoZPSvD15FgoaRy9qkrKQrRtdRnWYU8PhUcKa5",
  "key23": "2iH1SqiTXn6BSaCBHTZpt576q8XKQHEgDsCjJj8SRQ7mmh6yy14ywFwvFANMW8FFSY83mmFAEozm258VJYpme3kT",
  "key24": "3ork3aXBYBCLbR9Hr8fYThdCS7cRkibFSPdfEQjroqvTaZMp6KtS5h2G5STuPUhnztBNQAGrHLGe5mKzgNzvR2ao",
  "key25": "3RodJPoVZhWbttm4kfShpM1tCFUKb9CVNMTsU6aSohD6ZU9VTyyAELM6rxGauzPCQerXseBXdUkev9H4hnEB4sU9",
  "key26": "4uqA7QghAoa5P4ii1q1S5fqMD5dH5uk2qX9fvEZggQmxjxEeU9PfxovNdUxEkErQi6nAn59YiBmQZ2i1UWKTuFsK",
  "key27": "Qk4cH8CrVgZzDtgP4tD6NQeYksbbdj7sYPZpS6YChDhw44hGgm7VHwU4GSF2G1YR1fKY8y7SvBpHbDpnfiA59rK",
  "key28": "3Yn8NnLWsf81dTYYZcZN4k8dQY1n447VGpFkrmY1qjS1mcraC5GT2jx7gEmTud9ebuogaxznm3pCr2xioWcWz6Cn",
  "key29": "5WL9AjYjt7FdQ4jssxvJkQTLNcd58YWVTMs3rdEmP5rZ5uBGzLBhnpJR5vfBwArPjNYjX4GJoXNudnQHZARAp5PA",
  "key30": "c5fQx6eEhXHwGsFkj6cJqhEwuEuuZSXbtLU12baQAdtUes677iqsx9ApKt52Ao1rdG5GVzLSZ5bVJin82wqLUix",
  "key31": "Gj7zqk4qrSoZZYN1DwTGZ5EJrv4dFC1CCWDKJnoqpWi2tJMpv7ufCqtSbgnjAZTYpCX6tJyMdMURFbsreoCCZur",
  "key32": "4texyzUhNLQpppr5HuQiEvVRkYD94vMUTZHyF7ViwoVGhTsKyXgCXMS38PNoH5Kpy2kG2aiiMzAcK7oQjmo8gQCP",
  "key33": "44A7b7JJ5CKxUnZi1KrXqjxbRAufULKNxY8N91xKXVzrbdN699dn6bQu8KCMeWYLAEBX1LBvCtQnLcVu8Gt3361A",
  "key34": "5d3b7SnDejCd27eA3zD64mh5ayMXDj6bBCRJrQgnUzx6xYBXKW38wbdwcidDrFHVYvkrst2EVB8NmATWsdEe5FiV",
  "key35": "3DSJmSohitrYQc35DDWw8ehPPkehZxoKqE38zwe2ym1htDxuBW4vfCYhWQd6BeLfZC1A2ubYhffoE19ipyCKehme",
  "key36": "2kmwU8wysg49fM3de68NrbdmaUoiNP2g8pNu6nxsXJCb8SioKLRCRdUosfuzsgT1kHGHUDVRndZRDqc1BGC2RW2c",
  "key37": "59RAMFiyrz1zgAoAkKNAkN1xervxmwT6yGocWy7bejzEYCdYGhShLcpYSfzwnXfEXHy4Tu1Tnkxoj4nfb8tzEpPc",
  "key38": "2hHTE5BEqqueGPkJjLvYSWS3Zd7933fi4g79GnjKcNSuWLGqM9QTqGdga1WffzceFGS6epJAo2zSUKPwM1C9UyKh",
  "key39": "3XJrrV8aX7DMsJJZEMLprLTAQdh45oaQbbkfLh9vrBYn4vLfvrMiaGBrTQv4CZsrFU15HwVQi1cFmvG5SzizCEjG",
  "key40": "2uBVAYycPAqDqxx9jEnq4pcgrauWf53ecAXzHVki1jWFucTDQ5vio2R3xmkzPkzAZLZvmv8qAvutrTP2Zw3ZENZq",
  "key41": "aJd979KVGkMhGVxqYAZjtvp8ckcpYiT72cJ3M8DHtqgsTPudowBzPEiUTA84HriyX1EjsvEQgDDp7Ce8vkiSjNT",
  "key42": "3vRuQE1erSNUWeQCbD9HUkKJaDsnjWhW4ajTA86Uf2Q3LPWHELSKkd4ekbUumzFhs3jKqmVpejj83oWdVwAhZGyW",
  "key43": "4X9RS8kR9GBBu8W5uaryBSbD1F2MHf2kL18jz3xwrjAxiFW6NUn4b1bP9oTDeYnJgXXRU7v8WqJtudKcdYFnhxD9",
  "key44": "hRwW3bJ7YKrjoTbhfQvAYTbge5BCqbwrmUTm2eULNrSTr6CZ4vsyi6t72uWsDedtkhW8noFvG3JtYuZ5HRMFT2G",
  "key45": "r7ADt4nZyKSP6WLJrqkkVwNkjyiiyaZMxFQGDvw5HM5epMnBoSSUmDYiy85Rctzi5ki1RLpUhMs58iWSM3Z1zw9",
  "key46": "27qMsZDaiUPNhWSipZR4cfZXSUMJMFM1tNf2SLfLC2VUpWcCnAhFtojpf5tiUZAwSqJfPxoPH6SSGqXtFbqNqFqL",
  "key47": "2aZ8yMJaa5tKxmxJEKU5dgigNkvB3uQtw2McQNAN832TzbgSEVEnRseryeadC4iTxaRd9BUTBqouaFBLhtTYnSsj",
  "key48": "2uR4ck4DuNQLLyDY1N4i3ZrGCSQsjGR3BZQTcg2CjSeYZfDdW49855zQNeiEVu3erdYqYTzn42surWg3CrSsM9AB"
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
