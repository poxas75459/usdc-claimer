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
    "5dzyHspJhVZGrfGryj6xhR6XBvduMgHy2xqFQoab36JPDjurei982LPwQCXDeVwLrccRPfxKARrpzUVxdxCEJmNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DzzF8eFLHbnwTP1mDrA36Z5sxWxA5EEiVbzubkbbk2R57kRydLgFPnBEq6SBS6mAM9HUTqhyA3BvZwqrdAqb5Cg",
  "key1": "saAkWVSdwHcM1HXNG43b6oSuryG2aktfWZ1VqQJRgoLRwDAheMFxMBDYXxENHzwvYwqUKveZBE9qtHsAVyRZVnG",
  "key2": "3Rz73vSgwGh8fXCFuLSZmzVw2p8M6WQoR2edVxQ9uQpaPKKxV6o42daC95CJQKogoiEWz44A3aka5MfKtjV4zAGm",
  "key3": "2vSWZN8Cik52uUFRzpVQdjBits1U221DBUuVgJtJWxBJo6jUSHPkZHRW8ftYWEbvscGtfxMWtQhZYW6vexjGRkpD",
  "key4": "jdN4Ao9wUQTGm1oY8q7QoZxzX7oaxerViychjkY9sjqh7QfANKbAuS9ptE3FgMCHqqLCyTB4h5yPwaqTK21Bbzb",
  "key5": "3Z5mAvJcqpA6Lmc2CfXZpMqHzL1JimPzswuUFJLijyQX4eJRYLE85HjpPCqymfQEP3f4TXmjqtiJzZVyAxmiyMSU",
  "key6": "4jAWzitp33uuRodDZevTYEPrZKwAUpYh3eHw4TgTsgo68YxUsSjRNVDoMTVifAikVXDMzjFSbmymXe7L7CdCz6ZR",
  "key7": "2KhnNAXdsuJoEvUQiJwfLoah4863zSdWzfPo1byQ5zn9XUPAPguKnjbHzpHNJCPi4J23c82iZvHft1WJrs34cndA",
  "key8": "35awNjQVRas3g4QxCn7YYqDQGbssDFQnGGsksq8nozUHfgeqjhvuemP42Mygfq9mNEosDGUjeQxMw4KUp8VXgdpv",
  "key9": "4kzYvLynSE4D65XSJMNU52Wk6HHVbU5uxHe2XhHXBV7MT96WsxR83xevQDuFbXWk9uLrZDGgJNgMv6Fc6qAkHCBJ",
  "key10": "4GcGKpvSakByu8TsTLBZ1ePaDDGn1p5RbjnQL3CKN1LgcPu39qVgzJ7r7QcLWSBBqzGUxMvL2LQcyVrX2ifQehCU",
  "key11": "5GoWt4eQuhEZay8goS6cGQZ9EDLkKnMMjFQtjpasCxxXyYrW9VANiHwrDjUw7TZ764wSPWPgYNwv7qUBUMLMcQAG",
  "key12": "3KrmEggHPBKxMHi9jN5X8yRNmZJkfg8KQy2UzbNZbwV9M4HTTxteix99LDVutF9t8DYXM715kmM1hKjpMENLtaVQ",
  "key13": "55UmRcKUBw4xDdYxjNsBptsTJdbPjXVzP2Uf2vm4KRGXVTDLZMC3yuj86Jm7qugNgbEYo7AEuVwEbvtv8ZvcAr8q",
  "key14": "Y58oWf38NrLo35SZmoGBBGBGaJWgSy73NuFe5Nz2r6Tg3mMBa7qUmhVNzAfoxg5Z2YRCQUxaUgDxfCkghK5gbeW",
  "key15": "4476vgzQefwZYWQSsGUeFuJmZEeTGHbWaB4HiHNSPcjkfaxPo6LrYuLARude4BNdNmhRA188Mi78fZbnKp7E4tMF",
  "key16": "oYGN5ehy5XVVWjKnJqsiX9VFbRiautZzhVqdtxA3fBPUtophuRwg75AdpxxxxH9WxkrzqtdBhWyTLwXnNRbRw3Q",
  "key17": "2PHpY44NJCYHqRFvsgaYNEm6fdLi9fDqTy2MrBnUpMamiYwTSJruCNynSF3Eg8Et11oiGQaohmrrZBKHV7iKsfte",
  "key18": "3tjExxDh4ehtZvqvarP78UqeopsMN2jnVnkvZtLPTgRkTFawaGK12qTebiuF82DHnPRBYm5MLYb4iFvYqqRz967M",
  "key19": "34e2Hpno3WvP5z9KMQC4sCVyxn6hyEKZnv9L19d3ZFygNXer7FhEbcPcn6N39eA7NkTx4oSka2NUeYY9rNLyPSiT",
  "key20": "5dxUT5VZCFxVaMJ3qYsfRDvDzKkbkKcjUYkHFyBeWcn8pEEtDiazN4xWQ6Ucj3fxxRuxRu8dHi6iCThQ1LiVug73",
  "key21": "3cwSwvjkUwQdAdDjwgPiiGHfxohBV5Xy4kxXL6Ltux18Fm9NcdPUZj9EmDYUJiNe7VVUhmSGmNUarutRE7M2D9BF",
  "key22": "cFkKtAzbc9YUQmJyeoaTYbwGKXKWV1oExhgUyimiYSrwnnVmSU5whyVwzGqdwnXrvnnBFMwhQrV7bbqvsoetmZH",
  "key23": "4B2nyYHFxYfiPyoccvrETWnnzDNRswb7mYhBNMLkiJMDdC2ugaqafGT9s1v4TfnF72e3EZrdvtXboGtj39Km9dmA",
  "key24": "3WkBaRg8u3dne8t2CtYNfB9cWJnDY5JW5TQ9JKa99aAHjZ1zdi8tAtKtFYScg3c3NTmpnrgRgE6JctYegAGeNfLA",
  "key25": "47nsFDMVkFYvuWKNGqzz76Dztjfee1gpUn3TsK4oU5qHEgKGBAVFKYgiV34hKotKRUSfcXhdb6io8Q534nSdp97z",
  "key26": "2724Nsyqc3ngPWv55zPDFMTD43Uo6sQnKDxJUQkvDNnSh5erRvbZDMPbWKY99uJPFYaTgkqyYZMHoK6EdsgmuJQg",
  "key27": "2r4hitpEzcC8WDxzuZfzvYsHxqNUup7zK4WkViDgB5nDRtmNfdKvbLWFiWmhirk4Kohp3KTmc3QT9kTNYvUQsLyp",
  "key28": "2s8vcrV8XfwGjd9b8eeJ6WnS6YfjHywwz6a9kZUKxF16cUEC2VMvhmSszdQwX6jzKxsqeyi9f9w8UFpefz9y1GUK",
  "key29": "4QMFj4JyG5Wk3yjSnC1D1xJrXWpryshvHPsv7dDEES9tgC2GLXJCzcUAwWxYsNnfrPZpzaGbY3oBNHeXhpsWximh",
  "key30": "9gMV8t8uK82ktf7RjNxJYjbCHoP8wHHjXqFN1owSECyeWNN8Yi9qroRdSozerb3rEPn44amhid2YZMLtXn5uQKr",
  "key31": "ZuTKRRjxZdgzxfoUKtinPCBx85AjGUSgvYK62gCSxF8cMKyzSCCkWksmMpbMEV4rJrutLv5UyKiFMjiR3E5avPc",
  "key32": "gSqYk9gtQB7GwcRgRPwoKHNAfihSAk4DFggSmmMDtFzZyUDjvpoNDBh1ipgCa2ZizAHyy4HuPfvywniRQFHgpNV",
  "key33": "34rzYPF86Ytn8cpznn3M2kPLvNHRgnKbf1idUYGJ2YeuYUdveCFChDnmXbd4CQa6YHdyxnzcSzbnUQfKp2kETpvH",
  "key34": "4FdNN1ehpDTK8aGf7WAVn8Uza2QBrw6va6Ah6yheUiCQa3itNA5SmcPxjTTr9eJMBbfCTs1CS78s68LomnZGuy2p",
  "key35": "4jvhU6NvFhDDtoxvh6E1oAjv7kx8nsHTLRihdBiKbKmMkSmjbwnT46DFJYXMyJqW3ZadHW2JKUyGetjTbgyvyrAo",
  "key36": "2xwQp8q32yZSqHBDJj7iBNNaVSE9BqJEbqhgs3G3YJRSwqJVu9FaVi4BxuXVs278hthm1wrGE1u7Umov43qUhxkR",
  "key37": "FCGsvY5oCxM6MjtixBiBfzzajdkmqA5zM1LAptapZJzvajLdZrNkpbzoWYFZKn2F4ABkwi5ZZs4PX54BTBF6Y2m",
  "key38": "vxe3ni3ofxv8LQwEnmXEnphWs7AHs3QTBh1AiCXdJXq9fzmv374F5eD3hWXT864Fh9S8DZwtNUDH1RN9hiF9g36",
  "key39": "3AZRSxxyNtyuQPxwRw2zHDU4vhM77AvWLnPiNMoSfs36V9LfkiUYzE3zkfd18Zx4DRNoQ6xUGw2rDceXABwjAkMm",
  "key40": "2rmPhFeREFNVE1CGK1ygfgZtz4MNUvkiUzB7GKXLhC6p7pXCMnbygAtbTLAsfQJdrvmg4QZCYKcfmv6HAL619R9k",
  "key41": "2JsbZCZZg2MvGR84BZELYqNMpHb8DmbVUKRTSXE1Xf9qv6iV8mZkzPkaotU2fYhiv5kvhVGqb5TTEMyatY61oeAG"
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
