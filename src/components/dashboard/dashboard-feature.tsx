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
    "3WDtA1JbsrAmJKa1YxgPX78ezDwA5V8pfjPAbB7qRL1rtGS4hMfXrAvU6ZhPSTX5xsv89w5UJRqNaQAbVSKsQNt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61o6asAoAhn1jjw9tpWRP6EiXpfNsMdtu8QbiUMXmeAqCYXS22TyZbgMMVp3Qaut95q6b9YZhVRCFr42zuKYzNe9",
  "key1": "47dq8uQe6dtmrg49tkjSCrtTyv8A9Mnnc1rxsKCiTrbVgRstPgMYeSYY4Jhryk9SBkKGUiNS5uGxe9x1sUuWyNDu",
  "key2": "2sJbNvS1Sn7FeR5ShTh57Xv3hcEh9U3o7Vbk5hLgUkUaERaJHG19EzjC9QbiCENDg3cPFt5eHpkMgUcuDBU6m33u",
  "key3": "3jmsdthbAzYRJDxNRAEbjf5K3hQTHegg98K5TBUbqpTMz3Jqtit2sLTr3q5yiEdc5gFF8KVM9UiHmZj2qZBAUCE1",
  "key4": "LoEBWCkRAKJ7KiX2wWHoh3MTGHd1sTt3duaxgJBva6RZQNfwVG29m28pakmqj9YerSTAUrNJU8XaB5XJ7VQ5Bcc",
  "key5": "T39eAhYARSYqo9kADkyxD7zskx8svV4QLMCMeWcXAWGRKwRDmUBwHbu2yFJyHakQs4jzzfo2dJPACuEge12Por9",
  "key6": "49UTKMgtNJmBFX2Sfpt564ppuBCqYRcCE9D7J9o83bZNFLk3GJemRmDcsAEUynChfvCy4W7siBzgUebdNXkxARsF",
  "key7": "jqutvP84idT7fR38rNAvHKHJzRhfRrdv1JCLZNrqLSchPRyPVwqsKmopZFY77wzbsb4EkGjcUPik4zG3taYQzfq",
  "key8": "2fFH5wcc1SxgcEdMDHRseJdFWwBE1CNvkP73PbNZfuw5WnH3TnE75e1PMnLzoewLNPxPRSU2KkN2GoxqEdHxD4HK",
  "key9": "3fmufbGfLDAyM8Z6Da2ejfwQhdouTdW7K57L79z8RycCnazz4oYVUoDJokVSi9LsEA4KotkroXq5qSV7w7bdLYe5",
  "key10": "3vJRubMPSGvR1UmwtpCunn9mvAP8nvihBUR3aaBXqcdY82fg9YAgas4t8w3qpye7mkuEzwt1P5ggcNM7pAHxSZLX",
  "key11": "4F3rctg1ELZ1UGkze1dkqCsmDBrahE5wgAoDJfuBFQzKX9PMXkCXVJCeouKbJ82qNiEcWbYjpm5vTxMLTSgbvmiT",
  "key12": "4waQGEJDjGj1vszkFnKhSG5Zm9ccq3vLygJcGuMEygHM5axXkYHJCVvVhCvzcuUXEUcTK5nqTXc9YpdXLpAWvmEs",
  "key13": "2awrkLCshbxfnqdUJSozXgyHAngvNWVVHNHcY6Yu3MBuRdScU6H24W9GGpX6zTEnvKbRTpazX6MNZ3SJ1ddu7MMB",
  "key14": "2kiQq5DsRfheweCyDsSL4JHAaPo5FL23PBL6MKqHRMvpvqGbvLw8QP7BzE9Zw6Lmss8xk4JnJeAd5wfpErzK28zA",
  "key15": "48PL57iMNL96PWU5fmcALGqJ42jHmV7tc9A6WedqxRYHoyoGj1WadHRjMJ9djKfWJewe7d1ctMPaYyoKk6yXXXiG",
  "key16": "5WGX6FRzaVPbxzPv3JFDyDaz6LS1UhwDLnTAYKXfSivS2nH78bHbX9rZJybPAj2hpAALcBQRxrnrJwFitbifrjsU",
  "key17": "4h28VXtVf28UDioQoqBZ322wh9AuJPkqQYsRbUHDPfmBUwssLiAktt9MMaTAxn34WmWDRrMXPyxLugTUV8iZFk1M",
  "key18": "5TiazT8HY4XGorMK8Ey5p5qBSy7MoEUFMBfFY6DRH6UJmAvY2YW4GmVvCkJ3EDAv8VKRVeHwAh8YBP7bTSBgu8Xn",
  "key19": "28CQjCZmjfdAaMMCZwQK9FAGkhWQNmZxNgrZsZSAPQdZrw9hNR9ydVjivQJhQb4aEPiaEkC4E1wrULYj56WPH2ZK",
  "key20": "3sEHcfedvS1ZAbu1KD1DFYWCTfxeZRPLZ8RrkXUT8nZsPDfWrmQ2kuL26fbwL1yCpkXrL7EfpR1LvCNrV1BokLJK",
  "key21": "3nMNt5Eana8FVWo6p74fWz2VNUXRzopw37yiio4tq8HP9bEK4fMgWMBsr52Heih9synVeTbSfX4mXkejpHWe9aD8",
  "key22": "5SmUsWgvDYtmxyqymVCMQ56EW56BjikA4yESRrLrzMEuNMw5sWeTUwA9vZ87ii3rrFa6zzxETKRuJwubPxQfDXbk",
  "key23": "3oTLw62tgTFbyHoFsa7hEsFGcwoVHNnpupmCLN89aujA7brC7udC6MJ9oAv6UseFekM44x85F5pAaYX3tKGCNK4k",
  "key24": "feLPpxbq2GoH7HFt5QFAKMyAAkqT2nZqCKTYjSSy8vAoNce3BVrJ8A8VXQ7KsL6RiaTHpBaNzrCPWrH8r3gSE2e",
  "key25": "4pBWCTrPsurG4DbnbffeNM5NwaMNka2tQ8QY3xpNVQ8ySi7wHCG4bXPMGGRQJS9fWuHhuEkJ1tG88i4pU75cPcng",
  "key26": "2EZRZCP72DxFVrwNXMZhKJZogezVZLtpypexFmGspxtfpHNsGiTfrqttWEM6ELj4JTueMKjspLUenCZ1fXCoEP3M",
  "key27": "RSEdipuXkWTHhYwM3hedygS6yzGFn4nh4xnKLfLoxZ8tekFnr9NUcTftBxCyvKWq7hPQEW3JaF3Vbj2nzf59oHw",
  "key28": "3xpAFpErMs9p4DbDbVBgpXC7ipHMDBDBiKVKJd9FWRseb1ZAZVbStPmo6nY2AjQZC3wxjSabEgppJZzv2AcJYjxy",
  "key29": "4WPiGKKpiBGMrgtmcmNvwhD6hXbdtf8TeiDNBpoX21wedoq9Vte4THhRCWSTsVqyoNtDFUpkR8bGe1HZz6zkxb5U",
  "key30": "4kqPNkMWePkcTSFvy6suy9CCUsbLhap54B4T9ccw6uSjWmbGUcXPhZfWUw4oJ6xinDtk3bstqJSrJHu8AVCyqeJS",
  "key31": "5p9e94Ei4diUUPjsdGcB3cNXyNFoRSyPKTt6czTo4TPLK6o8E3Rr5mKt5uvEoRjNwHdRrGNyXWoooHr3ba9PxZAK",
  "key32": "5tBkz3ETGYRtvigyYMyEH6vh7bA46yQ2V6GL1JQkjuYaGrnqbKJzosya1DtiQ4c1Nf4hCT3zsuxoYaUx1MspzkuC",
  "key33": "PJLR3NCCT7Eb4oniJFBW5hDHjppFkYonvo4k18ZT71HiorcNvCjZ79Uzjxx4aP1CUbyaqVybRUWCUDvfypEVSoi",
  "key34": "5UaaTwbPRVAk2vHzCeH19QZ1quk5Vic4j5LKtf9E5L4o9e8k4Z1PLwNHuAn7iASWBmtTLrx7yNLvJVSY7gXKkvUJ",
  "key35": "5VkaumfQRbuTAyf7Mxe6Ha1UAa7HQTMUW1oA2NrrTnTwHELcF4Q7vKUzax1YYb1fSTYskpd7uUNs5hSocAT1NMwb",
  "key36": "5WfCouytWJcEFPjwwNbPSU3NhJ9r8rY3QF54x2JrU8wtGLLqCsMSRUXRJDwK74bDU4KPYFEoWYcMLzCWKNAf5bvT",
  "key37": "3ngRdHNjuV8YATBNDD2jHGaYN9D11x8Up4fMFD8THMbVFkLDBvjAYtWSbH9uVn34wG6R8CZjYc4vZ3UNBox25cV5",
  "key38": "3oeERcwx18tzbaNLkLC8JeVWveiX8aQEhZ9XvdC1kra6c2P2ieiLP9Gjc2FziXh8VKnQKqpYsSH7SVjHKFKD8UMY"
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
