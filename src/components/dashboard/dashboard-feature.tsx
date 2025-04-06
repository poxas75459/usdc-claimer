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
    "4g8Eqyvm6VjyQr6ougTZrHT78quX6R3jA4B4eVsbpqReJENSmq1g82TTPPVm3qsM2he4Cmy2hMkkymXHfYQ7f2qo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v3Fu77Z7Us8mT9RJyR3zqoao62B7eyFbU1TLtA6h7Qh2Qg5urHfpsF5yrbRabg5Z2YTCikTah6dYPTN6Hf7Lwcc",
  "key1": "3qnnsZsowuLgy1V8hNm9Ktp1XmkKepckup7ZWVPPNs5wuahKMxbMFbssBFGVqcWCnH4c8YWwPJETSBeMYMgE7gMY",
  "key2": "2ibgCUB8HqL52T6waCEKLyb5JW8nq7FHDyhKgSYtyfMyEHN6cWGMh9UXpj1zhn8n3Xp2oXhDHRT8oboQtysGF8DH",
  "key3": "2imXV6zqUnt1tnbNU9s5hbcnkZ6SHwQhqryEayuK9xgUjPN1ExQq9RaRnTBxiewJEh8v1kLa3dEURrYUFWXJ49ym",
  "key4": "2b5RAoHdx9Vra5qUHMudTkuJabQ31oRJXuq7M7cfp74NLiCbZ7Tsro3GQKZimqUwLNkjjt3bXUa3kmWUJV2Dwd2u",
  "key5": "DjwuFdV7qoLnqy6dbRSqk5hAVQXkzX55mw4MoQKCSx5EnBqPDLnzKsCBzETPkFzJozp9xyLcMkTShC225xDLizx",
  "key6": "4o1FLJA79Bksgyy2xY48PnZw5BHWpjDSLwwZTTNNCNNCCg2t66H1qLBtrootUCakCp6rSu2GxAypCSWVXN6y3qfx",
  "key7": "XjX1HnsGjw3x7NPgqDZFBuZ1q6T6webyUdA1VQfYspFw38NBMHqvnPjM3seikeFENqbAQ3zMATC7X6cx5hdHUJC",
  "key8": "4Ke3tzphz1Nr2JPsxcUtwaihVwpQc7Rc5fRiupFh2pqUAZx6XVF2B1w4w9tYC31QZDftriWz4vBTPet1GVBops7W",
  "key9": "3NJ3FSGx3bgpHqJEMFE3qQMrPJmdG3RGwgJswkUB9YJLxBzDu6uXSGfKoHRoDLmMiWmHouLjRAfz8BgdySd6MoY3",
  "key10": "3R6jvxKG1ntUcDne8QnqmzrbE2rtMBgHa36diuE8vfrdkfgnW4LLfq2ar3aZv5k29pbNLoNMTZPS4L6NUerUddkr",
  "key11": "4HCcs8zBM6DF1DD2cmsXyBnozyRtvaaF8c3cSHZqwKhRH5Dy2UqtKjcAxeoE5jRCtPx95fDrQYzVupVXQcJ1FW9p",
  "key12": "FVTmb1MaLnoDbKGK5S2sMboLgeVZg35H9jBfiCx1P3wGykk1Vzj244TuxEpPi5sfd6U8aSSuqU9RwR1xZAe6Goa",
  "key13": "3578naEMGXubFqszK5d275oBcBXw7GPddZEfJYurWhznAWHLBdV7Sfg76REysf36jz1inhDXVzzbqU6esf68xnV9",
  "key14": "48UWVcEr4rYdX1nqQpcMJHEFArJiyUWWpYmW51icKZP8FSS9gh4TGam3YVBpnYdhmMDFFAQfSoTNXA23bXtcXHjX",
  "key15": "4cieUJ8JF1rgQcas8uRJQyRTAzjG1yUxmBmJPK7qT7ZqxzkTNR5ezReYw8oL7K6LeXqCNdRkJmV2VNrWyEsY58JT",
  "key16": "3jtcf9qX5pScgiZpqRi2YeBpXdYK3LLM65KfmLcdf2eq8ZonZoZrZf7bQTepFq3Z4Guq9jZS1kNF5C3jEfddAeco",
  "key17": "3y83gMVPTonrV9q48avUbThkrDsFmok8KReu73my6M6RksU9YxcrzSyLyz1abh7uKbUDwyJ3ibTAWA78cDRbUsv7",
  "key18": "5LWx4dKVGbWvg61st2eqp7m4m5Pif1tKRjpRnpR9W2UyeyxXV4kAkZX6uzJSvEaqStxE9THPfjHNt23PJEX582WN",
  "key19": "Uj1qypgDvJA8FQntCSvxgQTxTA3cYFUydxKmjpBrJ9JFQwEZgJcUdk4yv6YSaTswch5dg2XZ1ggz7RXm62bAnhr",
  "key20": "3cEWNvGTu7M1f5TiZgFeeLX9PL4KoDL6PGiV6KvhRW3wP2GzrnGufXhkyDbT9CTkqtJSRveffGGVyDv8KVtRcRXB",
  "key21": "4Wz7FyabHZ2ANwPGwNToSkbo7JdSxeX8Pw6GVDxHggNjpRGyMBK8YszUwtUwX3jZKw8ywrTuKYqv77w5Jyr4GSHc",
  "key22": "66BsmNFLDW9xHjzLeRU5EKL3yYRnzw3kaVuVXeVSejqheXL4hoGEJWpbfyL9eRrara5DDnFk1KDSZ8fBMWwQNc1F",
  "key23": "7Qb9GFcAMu12NEjy7KuZ4y15QvxqZyTVZPTYqgRSV2pyRMa7NJoR3S1PFMUDnfVhqzrtsa2hEXF8zDi3GEgLQd4",
  "key24": "2ssmTYfPchT8S3Zqzr3oD7YidpyaU5YiQPEyvCbcnsrpr9vM3iMf1RxSagtLknSH9RcKjKyKhfWgxVvV2rmvxnom",
  "key25": "5sp2WFRPajswUcBmiTnKb8fCxzYj9TauPNgbvUgAWHW3mWbJWYGAwtW345J4dDAHR2SnBJxu2RHHSb7Fh5dHhNKQ",
  "key26": "4UfnmJi8LEzMptfP7raJZnUEnZsQnzjfE8vh5RgmS3kin4rVV7dfrhBh4rr8odNXAqiwR9KYg7CGLzQEyazUjSud",
  "key27": "4vxfwD4vySjUyY1PcRChBJ14UsrXYPpbFb7H11KoRaTRomPXGSV6eeyrzPdi4JVsXTcT2zWXfPCZ5v1hkeSCPiBE",
  "key28": "3uoKZHrEgA2AGjm7vv61v12vBBkBXdZzsdvdCPvrRL3tjHwRwDdWLkMvQNq9FnXaZtae1EesxAin5CEG1noGFt4n",
  "key29": "2ptFYm7eXtHQovnerRyS5KLc7vQTWKqsPDctonakoVJx9DS9DwAF8padHMi4MvgN5MJKSv1T7tWMQKmj1VUTobxb",
  "key30": "T9ZDUHbFLJxGaXi9WzfnhNwWw98itQL2hGc2hXqr1vKNsaM6PL3Vvkcay7ZMwN9rFuNbonHUGvXVF6AYRT23x3c",
  "key31": "24UEpEdoAC9fNXAnpqtdE6fc1nEhapsoV4UBzRoWZVetYFV2ZysbeRjiLQU5kbQF9SRUQcEnE8WxLZW7SybHf9tw",
  "key32": "5xTbTpmFa37gBEg7mFB3GpturXd4UT3CXbeSvG1oAi7L2oiyV5Ye9edXtp5NJSdoaH672SBh9DdtfnWp4Yc4dKRc",
  "key33": "622y6MkY9LXbqxAqCcNd6Eab6RngYUcDorviHKrsQRXHP91HE4YxUNQ5yCCGSYYjCncSMyg5ECWqVCaFojaCrffq"
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
