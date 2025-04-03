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
    "V76yBTcZQ5xuyBmNiKsxeHRM2qoJYkMRGFon3Ee5Dn153v56qHf8LmrqMCpsR1TASBCD9dH5xX3yGMXANKxPH28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fd77CbyKMWK4ZDTahJRWNASuQqV3kqaMVotYZDyhDuYCbGQM88BexmkhgsqbG8B1RxgR4wwYwkGqNLJ58MLEW5N",
  "key1": "4tZy27vgmVmPviYyV4oat6tPfvFtumxYDyWt6AEQJq5bysykETGgNuwVsRrLzRfRZQHV54UMXQESUDyvn9rk7h6C",
  "key2": "3ro9ncrjXh9SMpMDZ9PTY5MdBBjGQAhYuHwHWhzVAHxhenL1iy3P1EYiZC9tvYK71qq1uEoggamrQ9V68pLARrBi",
  "key3": "cMxViNWMF3E2ijfPtHUYn9P9cRNoXdx6hftpgja3M8bbsrSUCjcH4rGnsDZJuK7vvju61dtY5zxMC8LYGdpevwq",
  "key4": "PR3nS3VeY3H21p5Y1dWb5wadSpkBePMja2cUyPZGVeceEivaHLCZWmD3dpLyNyVRM1YbyzozH2KChUzFh8BqM51",
  "key5": "5scauhhGxWFU6dfMar3ujiBp2ZgwumEWo2Qau7iVcUPN2z4EgPMhrqQ9bW9AzzxqARNcuRdLNuBgn2L1Vw7kGFoT",
  "key6": "3uop8mrfuHEnkaSsTg6pqEPR2itY8z9rKfzeJLGk2VsZQbYW1DDHfaTKUzpLnQFXsLYxH4675o9P3AT1Cvveg3tg",
  "key7": "5WnuuWn6uuPsrmxmEfU933AdVbPecShNEtvpqFcN7LW4pLgV7CtDrZCP7MNeUMYBAuhzwfm78MahQK11Fddmkkg1",
  "key8": "5smVwk6xijJX4ErTHW6M2jvy5xNumwoWnho2r9GBe8oPFt3wtG3UkYn4x2G5FjMS6bqyTntwX5HrsAj61UhnxM1p",
  "key9": "LBYLn1Ae1kniQ1cFHV4nrjgT6BP9T2F8mhENp41i8YA6mD34TmEEEcDjSTs56uHyZpGfaN8ziLoozkT2UYavD4W",
  "key10": "53WxvbHYAr2mXsUi7kLAB4FYFE6NsKHh5NwWAZCe8rKkJrP92PEzyRXjZSyPvdufhUBWagtzKgNaKwoXBCjtDtVh",
  "key11": "4jn1rSDwjdFZysxjUvVSmfQzgAn8YFP9T2qCs3TkrtCBoFKy1PiszBCRrjqdSS9yMspq2drFQaxRTAJb43LA4Tg9",
  "key12": "3qaV6mYwBFFfHcEsq56mZxB8TaXaqyP8rWaNdjv3udS6a9nAKiQJE37h1nLYZz5PWUh99fv8QPJkVBpE2WjK32xR",
  "key13": "DGeKRxpPKWr6d7VUkkn5nYkDEeQGfTrk8P3Hzk3PGACTWkUuugUU3UXfiXR6dZRwFYw1rfZM3girt2S24SZqmyn",
  "key14": "5ptTQfxgGzShCkZZNfUGdzqZRY59NjyjNFWJhN2viQKVHAguSLis91U2BrfRUVbCNBrZAPb92tpgvFh6aBrb6Ud5",
  "key15": "37GQ5TrkGGKUrZ2CXbumDzZQLP3vy7qSpLuKuycbtGDKmYz792qK4UDar9oL9QQBsunY2qXKNo1ASshoe14UgGKq",
  "key16": "3B3SKVcTF9PMLHqQP1VrJExxFxCgWgGQ4ZyiZVrXq45kyB4Cze1wSmVWDposBU42N1ufxRczQgoxVvFXFZpzbeZp",
  "key17": "2YbkH8r69snDit5fUYgV9tuV1piY1dDPJbjWBvuiiyRqouHF5afQbNHiZn2BXZry7XdAie8cagceTv75pmN5RJ94",
  "key18": "25ezd7rnTuqLycJNT7HkH5DsBKfufYQ2XTkpbymkHWYURAnPBzrQMGkZV8LbUcNYejQvGMSATCDfuRqia6ZzrFhq",
  "key19": "227SAFhzjgVoPvoK23zqJA7kZdQy2rtbYAjW5Wc7BZdWtAjPKXoqU64SGwLEcPPmESMkzVG1Urma22PnikFtgdKQ",
  "key20": "3oPtWw2cgtLtm4dVMpt4Hwg8HetSMzY1yJiyhrw8Eddbba58Xo5JLUtuB2a11ekn5CqqmJqGXZB4HeYfcK26foq1",
  "key21": "5WKmWoubuRCyRMYWmqGLcnh97axrEMrN6BxdeFdUPXreREtzGaWQCXEVvPh3Xu5CauCbEfsHuLnyFEjPQfx5KPtN",
  "key22": "27teGVCqvwSyw9Stvh9HK9xKHRJXqVt2VRrUCuUshvhxX9TPsfUByr71QUgT2apG7esc99PhokCRXnG7ASRe44ci",
  "key23": "4Uk2HrXo3iBuhar4X8UvPsi7U8DBy5KKdmbaL8NggQ5LKLwBZrJSUgnyf4oJWSM67Zej26zHEAeBGFZR5Gupmuyh",
  "key24": "5XFkfNXNDAZTeyQXueaptp3FpcmGMs5SzyRCBFcDdzz7YCf8ejXssbLf5tab4CGEqtfmsn3GFT5wXTA6xnyxry7J",
  "key25": "4t7VSyuhiaqigtfdns42KtLDuh8hRyUHCx2bESLEbBYXGzYMbuXKmeRkCCpBjLzsJU6B2cXuSK1UyFqngxDfw8xs",
  "key26": "3L93xfVM3pC17hWf8i3grPpZ3eQqTCSnwJ3gif8mG6HMrjrwjb3ZuGo68sEo7Rj1eXYRV2hFDFdcPbNscBQ5pS1v",
  "key27": "4SP4Tj9Tv6Di6uomvSRJxAZ3HqDzK2uW3T22vN5TDSwmXMja6SJRry9pGZs4EohmevhVhq5s5f19ZXKs2Av17nWM",
  "key28": "4g9UBbJvg4WpvY4UGpC38P21CDYiE6tesQ7PhKkz7bY8oqVsECp8tQaqmMiXx86CjReuiSRLZtPN1D1VZFGuEUFN",
  "key29": "27Z9yPeqtP7jAEWhp3bRy3gChyfKjsQXM4JnV9k1KJwbdnysUDQvR7s7Yz9phKeZ5d6riS9YnqcQAc8GV99w59gE",
  "key30": "3UiAkL5BNNAeNVeZm5K5GreLhNffDtYJyAXnzeRbL4c8RMCZgNBVuShpaFnmf1TX9Mh8fWYad6h9Ms6qyMYtvARt",
  "key31": "5zbPhGBcHfKtB49Cish8WpdRmmfWjVQyViSkj8VcW6SToHMAuk7gk74KrMMbetFAdz8Zoy8VGs2rrCXubQ3UJm37",
  "key32": "2h2kdq3qWuS31HvFXH9yQCLCZYCWMZhy5ozMgwfz39nBKTADkGMNMbQUQhnsNnxvexjZv13wV89gxGjtiMJwv18o",
  "key33": "4fkxTXtMftATNgVkxDeMJ9mcWPku28PAXadJPEpGhUt8aBe7DKPgQLeoZaAq9nJ2bdqJaTr2cA7byS1Ajctot8LX",
  "key34": "5jN6fCxWo131bDnqidgr4Rf2oDCvUj5prDctsandBimRkWwDBsKbgUw2p1nyHQMyq3ji5a63Q2mRaLvyWzZpxcjc",
  "key35": "3Vg7EtBjiG7axKpniGPfuQvWTdNsAYHcjiNNcNhfz9QSNDoZ8A9yK7rN7YhrFgGQVFpyjjew1MxGMmRLawEsHpN9",
  "key36": "3jYt1AXsXx59yk1GHBD1vJdYfCRvuDxjYsKBxmTe5aHgCMSR7Am6NpK8k38BSANmu3CHVUfjXmKzeDWwNc67PSge",
  "key37": "GexggeQSQv88GdCFC4qsWNPGNebovPxoNWDXZV6JnzjfusyCrfxCt5DAmRB3jwbqJehbyvUwTpUJa171W9t1MTR",
  "key38": "4Vsnh28rv5rSxp5QpmatEv5d5AbdGvDkMQNyxtdxKeoR8iTC1aU55JJHPMaxG6KUwXuW7au9VuQjijGPhMuQ653m",
  "key39": "5AJA3MMfqty7kDWz849jwd3qy39esM6ShxjesDRRvUSuFkmHAkiWbwby83yCBeHf6aaHCgzt3EJbn5Qspc9BxYJw"
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
