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
    "3DPB5wVWEJe7DTrd68y2qKbVzNModq7HRp23xzfGLZWjm5pRNeQa72nSiMqrLF1npXcxMasUyY655EqCXHR6KJ8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wkZAf4AhCPtrdijN8DGdjtvMyqwYsXkF7UDMNXrhfhndVWeuWKsDo1TMRPTPH9ob5vbfREuftzSFWCzZtXWWt7q",
  "key1": "2qz1Mtmt8xNFZHYShd9Utss8ePwqJjvQSKMxU4wCxugd5sex7XRa7rnYy43x64mPjb8e73tVkaVv9RDrse6cdv7Q",
  "key2": "46bnx9o1Uf6qtrn1KsQxDh9tNDNK4xHUjBbWnBqUgY6o5nZEi1JamVeAdxjwrVoGdMedYi5oGMCx8ffmjQPAgny",
  "key3": "2A9A582XkvDJWRsAeCqt72SH7c44iPyFp2zrspSkPVpSfgkgWmd3zBuHpXTgoT9uiwpHZTN8yCcqZeq4BJYP8ShP",
  "key4": "35GRDC6tZo4z1KatHs9qbxU2m4giNykVxAob6rhQBeFWTYBhCRHnpXrn5V9M41cMJZAfGUtcHicBV7eGNDSMzDFJ",
  "key5": "nNheAbnqugxkRUkKeDnfv3Z6M8BtYSfDFjyr3ug8znKokTYXXoAoft3jTN6sDXrD2L1yoZfPwndB2uKLJs7DPzH",
  "key6": "2EKhgqTNpMXjjQAtdUbDfHtvN1SasGTZnzmyWhVoZjyP5G1NJuAKHfAKhciFurYLW87CU5z1pE7S7GvGvwPheBqx",
  "key7": "5r6ZwEFNJrw47y1E9dDusYYBNqRfANBTTAh7W5ic98uARHWj1FbjeC5Kpfx3M9fudDr1fPQHAVSuiriQwuTGvwjx",
  "key8": "4HwpfjN6MroUvcuhGCQocTt46HH65BiDcHv2tR6QYDrHS88MwvzBjSyRs8jECJJu1NUK1buSZanFo9fZeJ1ksLMT",
  "key9": "2Kie6tjdFY7cXxRFs3C9SHeUmTEEtBCaRutFFJ5mCA5q8oxh5fjF4GyZy3tYPFVd4gzitfvGj1uxFRkLKpmsUq9J",
  "key10": "sK1BQw3GEF7gKxNzk1c8pZBMe9U1zV6MFfLTLo9ep1CjWG3uEnQQCrS41Qm5nZoDfuGMvFygrW7gcm98CMwBFfT",
  "key11": "K5esZvoo8ppZU9hiVdePkDAFa5sdPUxuBwagfppxD7ToFbvsuZ7E4rGYb1yaq2Ai9FLYes2nsYwpJqkq6WCm1s8",
  "key12": "3aYwgtFkWoNFGUyib8WQXP81XUsccGeSoYA2sJpMgc5Ys6LCFatyNmjvj6CXKxHdPXKEQx2N9CVS3yQBhvmNS1GY",
  "key13": "CQkncUo5Rhew2FHZTKbtUtvbaTAv5VdDcn36WHTZMecqzKGWvFTtUSYswhVNzpN3MemYAnf2mAPc3bpPYGiGwzq",
  "key14": "5e6j9w6J79Zi2wuw4iqpkgjWhHpTKJhyt1Uix5zfSsvupn3nNsU6EhKkFhPL9bnTjT2wpUSEaHYbJoLXCFygsEJG",
  "key15": "5EvQond6kTtxtR5k8KxzbATPnGDXqwyL7c9qpqGbhRsbcxkLzqNq4xVpLoMgpx6sGjstdnTo8CVHjkoiKDv4Kk5C",
  "key16": "UwgWHHuYkfuBHZUso83ExqdAEvXXZY5nEGkCQBTGgn1Wphem5tofDpmQXUq9cWutPzvGgJdW2RgmC7MsARLZCyM",
  "key17": "4FzVK1Ao9D52SCPwQwi9Rq6zw24Q7w1uG9MDW1Kj2rsVxo7iBt2mfvecN9UbYD4gtviTKwg1cMzuFqs27FooMzjZ",
  "key18": "2Z6NXypK2UGGyQvm1jZdiT1T3wDbwqnqDnaUQyFMksyd6DgLJ7J6FpjauAoq5WvSvGDqLM4CghnsZAsHLgBkL2mQ",
  "key19": "5pA1XRfYEueJt67exP4ndQAVf3iMAcu2suNks6TLTumccDwBFYHV5MGJiXkHXNC4SihXnSGkyn7MitPpgNrArfKm",
  "key20": "4xHuzPNkMRxXeu84EkUkddWCZkCQhgEZBTcC7vXN3q5pmWioVVuGTCWmtPrCBaGJZGUEMAtFKdCHr4UTdCt6eAbH",
  "key21": "2VGEmCVisyD2JTUbahuPyEifa92FaeVBmuXwi1C5UmLaSwiMcRHX3Qciwhfqvr3FeWTN8aGStimnpnS8po8QT153",
  "key22": "5PUw4ZNiNkP7qgs6yXSpvFGMKSqkKhhbXHdnmJ9cEfbDu3RkuvUoCL1xfWfAfa9LLbfTfVZDjEkQELUG8MHC5cRP",
  "key23": "2bShw7cNVW5LRETZ4dG7vW62PYZTaCGoQibZCXoXekFPTUkpu8XwcqN5WjAeHQtwQBhgxvoHQrD3BEGAYdz61SUD",
  "key24": "VcjCoHWcJbZeYozaewHStPVNuULU76ESJwT6neHZXjXYG5r1AghwpNT417d2ZvYsE8SuWopF6R9YE4tVbqFnhp5",
  "key25": "4RKHUbYrzanERtBD1GvVGfUfv9uAgD9uYzpxkfas9e2FYB4P4KrzvxXzCHRHaWd28YY7ykwrGhdCZ84grb5C2dmm",
  "key26": "2WjtuSjZ4UpUtvY2QFMXwc5rkFHSmaPAhFGPetYx6jDkwpdu2QXgm5Lw3UtdoS4hwmWfbHAW9RHCwcd6RqNKKk3U",
  "key27": "2WxEWtsKH9pKbd4Mtt83BiS8Hf2ZEnCj4chDeujjTVqTWJdLu1chW2GNYFazU4WcDVqXTyWKXqVhs9EW6Ep4XK3F",
  "key28": "4LxqvZPQN5LkSoxuXfhYZUmZaGeyCdPqycAuQqazcg95uZu3NnbG5HCcuAwxM1uyTN6ytsv2LNiyq3ss3sNrmdAK",
  "key29": "382J7aHeXgZgUsrG6zai9HVBcXqrFbvfQQB22aWgpPa52nXkR8c465iSGLHnrBALPchVZtZ3N1XeA1wffXXXNW39",
  "key30": "3mGGyJ9q5rWAVKhxrTWYRpRzMU91opjC1s2UX2SyTMH91Pzqet8oGveVZvRGd5Sp95LYbZHg9Co8vv9BEzXY7zn4",
  "key31": "3gTTVzeoFefxHbeVwbQKunwwWiKier8xWYo5VGGxEX5w1a3cT1YmhS1YR4wH2q4q35Bko2y3jJhYXkppKDX4acc",
  "key32": "2zSDqebPGTD41VrVdbAdS5P4sBgpCG69oEqPnmBcSySKUDsF5rKKXQb8D4QugshigGgW7cdATCkd5SLcvLNB4S8W",
  "key33": "59WzsYbEznMPHoKAoFUQCEV2iFiA2mPVds25dSNhU2THZzZ1YC7fytJYw2ZTg6njSMYoBDthw7pvb8VKMD3sCvcV",
  "key34": "4uHZYWJt1A9uXERisHZk4qABR9G4Nr2dfu7KM3v91o9Mvo1QyuHQiTNw97vNH5Jx7eryz1UVEjf9jCYCEWtzDHE1",
  "key35": "3sWSD3ABGp1b8YbGrEWLuR9Lhy2PEojgfKHjSc9ZBnLqwyW6KHejUtAJnitxSL4XRu3UyqdphWjSYajCUHEUGsSF",
  "key36": "35Z8Si1rKFF4Di6stBwaqPjeoFXQhZdCi5oxSsoprm6abp2C5rnscTv5wNJn8KRu1muqusRnR61nCUXKnes6o13r",
  "key37": "5UCJeu2pJmxnz8xejmgZDRactAzizCeAuYUwrsxbXE4nQyfLSdK4wcLkX1Gw4Kc5hTQ8V9WP1Atth3XnRoLjbSfw",
  "key38": "2fkP9fd7n4SnnVPMfN1KKZAUD88cz7on6993kwUupg2sJ7xnxegehxv3TDAdKK64YiE23WRjfSupL5FUzNRDBqMp",
  "key39": "2hmSztjobw5PNTdKgCuNh4kxXdr6qGHZoEk4MAg49cNsMMgop5moZ3Bmep82pJgzwKjRPSV5H3nFCHAD66XsUjs1",
  "key40": "jsY4isQP74jDkHLTj16yFPksGt16ATypHWycXBYASJkwQgMiRR6G4Bt1LicEY3m7pF6MtgeVJMRu9z6K6HiS6wD",
  "key41": "4chDQ8jp3Gt8Lx1vzuWh85LeZG54h1LEU3YLnm2GzeDdHWM4EVPfnC5c1mr4Jywk9Gb38LvYqFz39eksSYKZqxLd",
  "key42": "2SDMXRbs2pEwx8g8rVvEsTyGfVknNJdc88r9QRSQPBeL4AN4RNE7Ac1P1XgZowxsguCDrngpMFSoX6qkBA72j5uF",
  "key43": "4yJsyzWjbopkkcMrSb3m5kujDhWofGMYqW115yXmrDAdZPG7GNBjJoB3G88u7hkVeZpzjSkYaKNByczoxzhuRorC"
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
