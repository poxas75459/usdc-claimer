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
    "JFEcRpgqWMXSmLJuSXaBT7przGPHNiAt77Hmtrjzc5UPnMpWgtbMqPWf8T7MqjPZpNSdz5pxuWVaAfc1kURzmJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R3CJ2K5vBP41pNjVtbBNY3kSV4dW42qRscJqhPZ91mdXe1RmNsMfpYDHHqZXHUu6o324nQtET3w6bJdp1zo9SWi",
  "key1": "4U71kEfPfg8o2cSHCmZHg5M66LvmZpG1SpGxZCr45MajPEM8UKy9YgtENapXo7QMx6qXAnVm4HE4zpBNamJqLB36",
  "key2": "3PD6rPcJXXum7MnHhfz4CzFJC3zamz6UqHyGxrAQYMX5SCtJDFvGFL5HEJU9jwjjspwbJByGDUFB1327rdK9yAkZ",
  "key3": "Qm7v9NoksWSxqUSuJmJKaGLxSwetFzsmiHJYsUpp6Pm9LqK95iFurYgKunQquevKdKdyHdjooDC83SbquK2dGVJ",
  "key4": "5tNdWBTyv9reBgmDvtcfUZMGq4M1RELTXK5oLUb3aGky3jdGhGjNzwLue3FxzejCqGYkC3ik9NeP2b6jRBEgPdBC",
  "key5": "2BJL3TSS9UXt2wQw3GbPwvu3hwaXLp1u3dxTDf7FSWE9cdEPLS7gJi8aAFdAft27xFrfR7j5FnfFRDKj1PCquhxT",
  "key6": "5uEMnkZk3boWLhobH1mAwep9UuJbp9PgRi1PMvUjj6QWxLL4EeLuhrbwBYhnCynh7z1CxmpFvZuaJQmfvL9X61VS",
  "key7": "2tMVnbi3VcKbXVxfzzjj9LU7LCgbEqFw2Yfy7byoX2tUenmaEQ7ADYhanE5vjtsGTDLzVriPytFy8nkQ4A6xcvUc",
  "key8": "3rA6CAEmYEpedX4gNr1ssR1LUuxbM1y7vG4QWAauJzzxEdF4R9FgfEPoBnHBvfF1SeHcQC7YA9fLEisUjmFbpFz5",
  "key9": "3rVcfYMH8j3ZeGwsexxXfbDee3rTBrMnS5uKkBYWJmBF5dUwfqCaDu1cwHVwTcmtwQzJxy4ANBcuL2GbnoAKrEfo",
  "key10": "4EdyJEJWuyM6Z9x6JfuKoCwxHUhKzEo4tTKqHnAXd3mVr6npzK5B8348VpfjjGWJJKreFWiKhdrj4VULExV9wiyE",
  "key11": "2Dx4PV4JjFUFjPXi9UeseeJo4TnHDtf6DokXuHkb9JMKWW23UbBr2dKg7joU833Mu7YYefpLUfme552m8Lqac2td",
  "key12": "32AZZ25KWskPooVTL2bhAnx9iReEEtP67pRVrFZdo2yrmx5L2XUEJvBqadvxyCTg1eFxcfa7KqiER4XiR4FHbn7C",
  "key13": "4DfNhXYEKdZtt6eEPngWgoe2uhYGLhfVfyo9KU2g9X7LWYRcFe9GGpMDfKe1DP2Q456HSEWkB1FrogHNA3PGEpG",
  "key14": "3gvxTRyFivN76ffM6mzmx1xemfvnjaHp8888S7AZ8FXbQ7TbbacJEzshWLFFapsHUwBWJJhnvs6yivnfCMcnhdWv",
  "key15": "FnKcNgFZRHkwyoxzmCYQitKnbgFmsZY2idbnv96ScVywzNLRbarhNKjgN82HE5vdmMg4MEYVpUcatxpxa8utcwJ",
  "key16": "2iirGyiEqJfnGX8rwd9Qb1uDYFWsqyBQHV6sqQsUb6CskrfadYR7tTJAExWm9hR43s3ZKZGPsKJ6mQZxQqi4Dteq",
  "key17": "2FfsPxRoGcBGguRnUT26o2nGdV7zBgYkEXArfhLsLFKv1NCLZ3AueuKVCJCWKPfzBc2Vxvq6ZFFZ4at6FsoU27Co",
  "key18": "2PsdMKJFWQknrVj9rX6BHN8zdnwWATDq2xug2kzJmSGhMzNBZh5Lzo9Ypg5cPRjjBiiNpedoVLPSUiZjD1vEN1gd",
  "key19": "4hSVLD5RwRbptazf6rjyayt9MR8gk67Djzt6Bqt7jD3JaTedZkLndvBPR5WAYzGpQkqRyfbyFf8bFJYR9vhAhKTh",
  "key20": "3YmTc1HdUNATNqn3LhgAK9p4Xw4sig4dmyjD8KMaDnaAmxQ5UXhYUpWKm5WAys2jv6ZhbwEGG6qE79EcaGzRmgkG",
  "key21": "57UsD5pmYpLESHkdQgDvxSU1tnCBthLNw1YEem1CTY13PCfJesxG46qrnW3SUUggpogJKMLbupPAT7zhawJtVyYr",
  "key22": "nETR2F9vbxMqAGZNSANQ9xHUWqtRoncFMkjNxtD63tvwsASPv7PhLYnzmyS9Qgkh4Cgc7ozacfDgCr3K4UMnjb1",
  "key23": "39yjAqNTnuWQb42eJstsgZ2KHxoEnRPGRZDJmrK3dN6sUJ8qnF4BywdMMxqZn4gksRYofy2UHmULKkJU4VBWMadt",
  "key24": "4R9hQd5YLU8rvM4ozAs5xamY4u2ZvKugUUJGnUgoFzE3N63Lo484aUTco2JGj4w6243cpFKeEXPNWSDWJtJPKQxT",
  "key25": "5JgmwYPuG9mAQhDYhW9RRF7WPVuhkPonhwnoCWAGpQFPNYRNf6bMcwByWV7qJxCxUEAirLngB4Gn79DdU6TrTu5N",
  "key26": "4T7LekQSdnkPGdK3GAzG155yjXh19jo9XjHLcQrZ14NCRuQ8KLbuMwmuphCkZDW3HJeukanDFR2iD8UWxRajNGts",
  "key27": "3ZWki5B6TEGEEdteuP5TRa6dNPuUdYUhEPQPYEaMPgLQnzo6SDfmC76MmKnjsqr8i1CnDkUmg3dhgEvh8Xx6QPw8",
  "key28": "d7vurkgn2164YYStNPWzMXpFZZzErjEE8FQP4ueRCV3ymFAugNpaSGqoD3xc1NiHcLa4Ljfeuj62ihSPfEj7rdu",
  "key29": "4JNyyZ3ch4VQzLXJ9hyXzL8pWndNQwQ6c9rv8wXVt43p3aH277jVaghSiQeFqwMtJiXb8j7X5ZKV4b2QVkwdteVp",
  "key30": "1wGaeB84bi8scZd4L1FnNrRjTLjDqP2JSfeBT96UmMfXUVbDRNzgHroaSkDQaRUeJyrfahMreHBMNea5ygfnryB"
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
