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
    "4Ha9z1ioJdkxXvTdM1T8ryqzunLsZn2cT88rQWQQ344ehYU3d6Ug8EA1HRUyXBS95ixU8kNbqvgNkTU7kgFqx7HL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XDS1dHLjjVCFoxDKsCj9Yqesc3c8iv2wC2fyCjg5S6V5w2nhED7iWmEEjSJf6jp1fyiDQKtSpj7LeHJwBuVhkxb",
  "key1": "2R93zu8nZEZcqxQZhKoA6D1hyBQCi2YWcH2ufgSPSHK3oS82daitZCxeUhW2cdDmFDwaJtWMgQ56s3nmUwWjcAzx",
  "key2": "5m7uK9xABQxsZDqaGEnVfaZEFyiuxfohCpyJTvq8FzrhzUfEanefoQUnMQgQ2Bq3TDJZbeSwwBHCLXAub8dVwRbs",
  "key3": "2SkXbtbdZfYhUkRmCMTSKW9dPDCKKrcffWzJuPWxZqgyaMR3miNLWBEc1Rwn1NrEGWT5Gd5FvwFmvBa93NyHgdp4",
  "key4": "3mKxqKJG3KQdnsYebkkHXFt68MhSYtZb5PiDwozuuicNjmXycR4ExnYZBroTAGAV2jmwdbBmsJw3FAUDWnrdDQPs",
  "key5": "487mTySAmD9nNz64DKABupNm2FTeFAeASiSyKWhzfqzymKzpkGhgHwbAkc7ndQNCwtfqFsG4h34aGY3TWyQjYVYw",
  "key6": "YYshgwmkVGqY9fUowkegj8UiEPYoQBqm8dxaW5mfWjZNszMcHHu65FrJUyhC4zug915sm1Mf91aWY2rECCUXRKs",
  "key7": "4G5xtfM4zTLtGrv54VdbST9jSF9fKJshfUpn6v175GGRpGTht9wcJHptBSA1ddxifbxKvJ8QkF1LX3NwZjoNQDKo",
  "key8": "2Mkh6nCUzC3y9XcQxY1ipr1s9ftVKLfkv8cgSxFWnWn9UDPtHpuV4J7p6xKcreyPqvVUtCoCStgmkQitpaKXPC5Y",
  "key9": "2noQrVFbPeBxPpxmYYAeDYZSYKPB1mXs4xrAm5z87BmvVPUEYBbEcqrvuzoiUgw1xLU6HK6iFaz8Tps3w7muXiMp",
  "key10": "2qhXcEGkNeumAU45DdJTZ2TiX9fTsteXdWqf75TA1sWpLYGynEtjAP3Zm4L51Zf7HnEPjfwCm7s4jox8r5oCUZm",
  "key11": "29j4xiUGhvsaUF1RYCtzbjb5CR9AHRdWhdLT4okeWJYHgibGGDQK88MbakT2VytdsniCmbaFqrUriR41LYEwsPr8",
  "key12": "4fQzfQyzSQt1dGeRogCBZwm1ohXar6ZbWd8TfS4ARffNRyJh5sRS2DzfV3588qQKgv4QDk8wfpW3i3JLA8jmhjhX",
  "key13": "36KekgZiC12q6hZhNzWhsDeJCv2aTPs5JbBnymoXZAvXEypGsxV7xQwKNrsWGNiWyZkBY3F1JottDXRwxKXZDk3Y",
  "key14": "3oDBVij44hxMrM3VG2vEDiF1cJ9nQk6nCgVvtjNUyT93k4ugAMVvRK8EWz4RhEsaQ1CioDz4WB8syqoDLkKgEkzb",
  "key15": "61Tyham6EHWGFLRST3FRFYVL3ybp6pDLYtQfeuBrybo2qmsAeycWapmGnPqjxPZaSjYyCoaomzgf5JcKMqkzTjvY",
  "key16": "38CkLYt4GhzkYuaTTZMPpeoYqTUkCCCq8QcdS7CXjyue5BSpjSab8rtgpaL3P6xGAPKjuCsecmHJpozwTucT4DkU",
  "key17": "3sEUuWb5Unjx6f9sN6rKWgFJfZMAdoUJ14GJQAqsfymqe9PZjby47tCNekA6b6V5qBx59DU7CJwC7xAHXerr1ce1",
  "key18": "VvmNrBF87sAeEeLWztASGE7oPNhH7CoDyAFpR3e3hV363Bk7CW6AMc1KNppzkvH4XTXuzLgYrf9iG3tj35kty7X",
  "key19": "4AJ96UF4zQr7iu5UgWLiNnzUW5ExzUoAngMFfAuvW55wjM9UQgAfZnFFrq2saJmRkztW2d9S7asdrm6BbYTsPiAY",
  "key20": "ZL8LgnjXpHPCvUCxFJzFR3a3mScDxRLRouAvRjpmc4nmacNZzsz264d2gq5Lrp4sX6GLPDWqKC92ytmYyiyLn2b",
  "key21": "NGsUGC2yHbBUbbC5uprV8XMNjPTnEWh95p59D3dgfCVtAwZPFEBBmYM7GJoof72AeRmT4MeZAXikZszG6wFcJ86",
  "key22": "3QfVu7T7r3xuHteva4BuZppwjNxRmQDPqSfSCFu7dukjHYPreHWoHPpPDNBu9pPHS61An8zVZk5WSoc9Ms4BjSKm",
  "key23": "4StHB8XSxWe9yYTU5oiFUGGMzLco29XG5T2E5Va83vj2daQny3YQRoDL6LpuxhoXDdVjvfwaitwXTakL1xdkFsSP",
  "key24": "5pTkNc7Vtr34fgAK1xAU7JGe6HAmh5WGwZuXGabay7PPpHR7s7dHg92UfSYj8T9cCvGu7AM2T1Jy3zxomMiLxLbH",
  "key25": "5g4SSGyxT24qAqVxcJWDcKg4wQN6LCPjaaAiN7QD7nMfRTgMzjVyT6JSe5wvn7taabuCECe5WW5NC2orsWAmXreb",
  "key26": "2dBzu3ATKXNoxWpKX7NwzoiKeo8ZUxtFHJGN1FvqF616keFdaoQpkH9kAh3qb1S3Vs8Hhhqow3kMKic43pHFikuQ",
  "key27": "3yxgvaVzoACa71SKDxA3tvfEC1iWnYkgi91xxbpK4tFbcf9e5hWHdWaQUhzwf8p6bWq7aGVwABzLZ9FEb1JsB7ZL",
  "key28": "5gkYiRbRDLPvpFRyUR4QzUJr2xPqcEqrPeuvBzUUpwcz9Ef2dQCGR6hM3ovnA8b2cU3KPZKacS3X6H5QqSLopucf",
  "key29": "8e8t68vHn6N6ULu3hCNMJiDPiTYxWRhRYmvvEJFACbgArf4whQwNyhfxxnLU9V8vzzcupi5TMQ2y4T7MAnjQcce",
  "key30": "4pQxBCq88AaRZHT5nN73jHJg6ed27HjKeLtcJXCMh3WqnNjvEpriVUzqE3LFitzV7Sz96RnNahuzTVUycU4Pt1qq",
  "key31": "5sfbCymekNitrbKBKXxWDezudP8LeP7fDpZFW5FfELmM3am2ga5frRGqdFbTb9GRWNHuh8YTXtarTt5Njkuchpse",
  "key32": "zsTmrq1daCvAN2A2N6AHdtJesuanmv6KXaMpasSUXybWyBdfD2cdDPHH1N2ZzXjVZhMkvNy7ZN1qU7oFhNDxuw8",
  "key33": "2SuskjuxrmSFAY8Fp8K6kTG491PGwGfn8LEVpEC1q6mWF7iS9aorZX9orMbRPJv7krJyAEvRbBKgTTsrhRGt2pRb",
  "key34": "UZSRFwsBuqoMKyNZAgQLQmQjDzLcoPMUquHMu62v4ZRRaQiSiQPZoCJFTF85Hm6yWVjXMpsgtBfABzvtmhai7nF",
  "key35": "41ZSeqNEviNCsxg8mf42tJWZiXaeWmTLHMaMkSxYCKhjaT4BGz5PgtvBE3vMkUmaJzPiqq9nEKMRCphHeNcmRRpq"
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
