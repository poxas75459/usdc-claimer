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
    "3rf8exdpfFTTzSn7TXofHww1EbWHNQXFTGhhwck7nxr5ZcPUZbis6pdvsGvPKqHzWDVrHajUskNG3Xcv7jLTTBNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57KVUKkwHdTWd6GoM3Jv4kTc8EjNGvyh8jQRY2HCBtfmZxWDjJyizySdJKoJHV61n1JTanVf1wUvntfgjFST2j4B",
  "key1": "4RSMkUFkQiXwPM5Y8cbKD378bCmSM7Jm9d4jy1LpsKh8URq9J3hzbfEobQRK1twhJXYUQYaNo6s38CFC1GNnntef",
  "key2": "5VJqjufTPWXYoRdt3yRr69JCJmYyrk4TfhNnFAD8Ex6DwPCGoPjy5kJDg8X4LBiriAjMSjQ7oWL6bdZD5ZEis9qx",
  "key3": "UZT8qB2YkXHa75p1Y3NhjZtyiVGBpYDBoBAM7pfvNpjynd7oaAFYL367UFyRzSwb3emBaVzWQZ9Arxi7RqSAqfk",
  "key4": "3ZVk6DCBJoYPoRC8La93cZ5rp2XAiGQT4JgZTJ9FHWeKL62sUJcx4ShWy3uqhm9dk1Xvw4JkQyoyb6ZNKXZTkUKB",
  "key5": "5WNXjgB1rV4KiBKdnPBV5eA9pSiJXKTsVpAP5t6H32oKNq9zTTL5cyjLc1Ko85tbFGKrNqN4g7EFMqGrH6VFmvAs",
  "key6": "3gJGdqjFRrDiAzkYooTzucMQYhHtGwaFvQtegcxdqTNNFYkWrex3dvaKavCbiMABibTjhLeN6iZQK8M2Qnj2jqGE",
  "key7": "2CTA5j6UTBKH6mqka1SRxEkXzofaFTg9VnukSCUrZzbzSNJqydEqxKtWJEWRiWpNJavamudzGpzwMV5wt2sLqRpx",
  "key8": "3EZotsGSHJvT165y4DX2t5MnrAG9scNGG4Pz5aaD7RtNxKoVybvtKnnjNpHgvbwUupwLoEeBMXxiSFF6LNpbVciH",
  "key9": "8ZJ4ZZgKmA3UQJ3rMXG33W2awqsUqSwKAJJp7z3bw3pTxGok2ff98BbwstDJkgc5oX1ihL9Az6A5iqNoZvARSF2",
  "key10": "5Jcbj217cRJ3XG1r2BQseTmRwSzfZdpPe58gf48okabhy9dcqdreSq7roRWsYyQjjaCwCFAKZq5myfByNeagKFEP",
  "key11": "gdUAQjuGmzogFKZshAjWVCXXMHPAz67UMu1BULbNNvbCdQzXJmAc4GqmhKbU8Jq1Ado3HBGdUGNeqNdqSocRWER",
  "key12": "LdfnKQuaicBwuqV9gy7urFHV6oNikAfNvKdKvXE6SWZbiAr4sYXzmRkcesFnbRNmmzuiubpiMbQi9tMPcXoZae7",
  "key13": "4Ekgom5HDPd3Kemzh8Qioaus4pNVZenCyVkUQf18gkgFNgGsUVwz6m6u33WRarpvCLiFtVH53ibzVJ978pz2i1tE",
  "key14": "25wQqATZ888T4GUhRvdq2cXtccDAuP6tgRDd9pgewLAjqSnzQM8rhccdyRNLgW8x8j9xzt3z1tMNG8sm9YUXYNcf",
  "key15": "2fZcG97vxL24RgYwQz5YQrzXznJMYtAr9avvKtPD4MLd7jxkMB2UWiyFMV9v1EE7Bpi3a8DHcYvwdYjjGMs3F8Yf",
  "key16": "5F2Dz6JvpDHy56gftT6YcGf86wFZkgX27PBBQChujZwHMsMemus6tirD2HwNYwhwehUPRKyXai8y7DTp15GwkYsa",
  "key17": "39HRFubN3j2MXpbaEDc1TgFgGmjrgDJdTgXDBQX7rCS6mFRDN1APnbk4VuUKC4vfe2dREDTYEYnHptXe2X9gpDbq",
  "key18": "64HfXPfZnoKs1YEptmtB8GATJd2hvx1Z7U1ieRDzTfSMhWVYjY5aCWa9oK1PFb1Xwrtg2bGz1ki8L2MSVzFN6rRv",
  "key19": "4vgFxz3os5KdNbwP5MkKyaedhUUzVtKx7fkdkfnxjRQguGpoFDMYNvG2ocVnxA4XyrTJT98sXEWRSZ6EfSMGBHYY",
  "key20": "3Q5VLFbAMqWsyKmacrGnayf82qFpqBuM6uAtqrZLK6ugas852CiWEfHhEC25k8ywWjYSyyHn1YJiMmkSzcguFENm",
  "key21": "3UekbA6ispG8PMS9azYVDsiwmJBRxXZB1gjL5B83KwbWFzzFHyzLA4kWKdGL3j2xq46QLAeUGSGs9NvTy6ByHED8",
  "key22": "TWH9xjEWE56k4zrZgJrrKt3kJerSuB6pEuFpxdA52kFxXJ7hFHy8DUiDSUQrNqeKyK9A81788r5GSBH6X8gQ6im",
  "key23": "5H5eQUCmHfFCaAryzsVrm6pvA99EQgiswFkqr4UGTw9Wdjn8nBMQwSBEYJaugxaPct959g1gcgMd6HcnQEQN6yyk",
  "key24": "3qy5hxTTFFVt7cmtrWuDyQ5Xpc6Tm9zaypAiXHLgq1DQBYmV1wtcpH6ovBU1wXi8DknenvYyUwwthEcUWa2xgrxy",
  "key25": "3smqHcvhBqsQeb6B2kpVrefRbYmF9uSXqwQqNR6BZvGtUb8RomUEdixSWGThe9kKZVNw36MDg3HjntNy2xc5a9dm",
  "key26": "sobaJwQisFiq63Wj7SuASau9weHjkuyRiGitDe9AEP7nNWxf2qyqCo94vbQJ3P34JV6XsDyDBzzwYmDzgncdb6S",
  "key27": "4vwm5aAL7ZGmET2MMredMntdY4MpZvkvy1pQhDLrZ2qjWKrmLgF4zqXYpNAT64t76Rscx9ojWvZDfor4RU9tWeXq",
  "key28": "4qcBsJCvzaa8kbGzTTnjFwAkx5zkHLGp4PowtFvjXVEdMnJgLodZ8knoEXzc5A6D59EsYvMWNvhy1EU2ZfWdxexW",
  "key29": "5Lh4PHWaQSSg3MyrNgBA8NV7vnLuWXe4KH4nDVku1YwB8zZFKPZvDKt6aH9dBQgwg3SkVAajsNK7cYoP3BSduzy7",
  "key30": "5T7Qw8k3nBY1t2GzXiX8PmMDLAvMjbUHRngsPbDMKeTKEdumnrrukBYv8YZw4FoB3kzJMsb3PHpE7dpqxuLqPrRR",
  "key31": "5QohGFNSjhVf1s2fNqSLequ2Z5tmsAWF2pz1iziUAJgaxLvJLnA9FJhVD9Yu3n2SfHPZ2guvkCxfEqQSKwJuaYnf",
  "key32": "4Gvo5t8TAMmAFoJLFe4aSpV3QHhFidYfmnYM5uLHZdWBwVW8MXXsCorB8srU4KAtfnBWdCCNmFpTCwdijb77stcG",
  "key33": "GzoSbxbG5TYNgRiTUML9yh1HJTpTwzeUKzJRzZeZowTDSmrei88xocAkzwSzcS3QWGheeGHyz28hrynrozT36PX",
  "key34": "2q2NeJ69nyTyWRrXmX2n9UyTA11awZAft3cgxxYfJWtRzZNLtrK2xFKtfyVUYcwjmoiVMgGvx8SDTUUB3EaWqur4"
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
