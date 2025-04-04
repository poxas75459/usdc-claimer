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
    "38pYTD17PJg2ghz4fXtKBkaX9rzunLotAGpWvwneUQhfqouUbJPm6NmLHjppENgQNosyYrb1wicmwerny368affG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbVvM3djrek7ksaCsq22fQFTbeJpTm2A4dxTTf22bZJHxP7zAPMcDLNULWRhmGz1ASethMNm79dcjZLXtykhKuM",
  "key1": "2BwbWFVSE8UXP9MLR5KruqMbfSUPeqe3JhZd1znMpMxRxGAfj7Ab8ZYGScfiZx9vHKwkUmkoZVBaWKijoUPVZ3tJ",
  "key2": "55ZMG4ksVQHKnJ25Mxqi5YYZPnkEYgEAzkdwXL6ir6JT2qVLMKa91mexgoxdL6WmeyEu4oY1n3NiA5WW7eoAyQVQ",
  "key3": "4b5BAzvVvYQdmdvF4T76UZgp9ZfGg7VB2mqYpzeC29hDQrHPYWTbLn2HCch9VaRqqA71kroBvFRKzbWTVwg7Vwhq",
  "key4": "2A9ZdLEXsfHpC9LQpRuYhtLJXtGn9XXTLkw3HcZ32hx6LR5rU8JZSvxGQQt9TxogeC37fJ4eVp5k5XTmCktN6oDj",
  "key5": "D9WuQmiojczVJamPgM6QD34c9v9aSkwL5nNd5TAsdQxyZbJmPnnwiC19fKWXQGA8g8XPWrpyF8F1ednScpjwSvU",
  "key6": "5M5naRPwCGBtLhFQAbdTVqspRWmX1PRb9GAj62W53KLZ5us61NzSw3qhZGALmHby96Kmwues4N6v7rhkJm5kKYn2",
  "key7": "3uJ6z8tb58uad3wUwWd7yb6MUVqqh9xds25KD1kESAjXsXTd6rVGZNUSXGRNKXBoqmKrBrg6Cs5L6wYqnLizxRxR",
  "key8": "66T7FUQR3if4o5b7332KgK4cmC5ayH1qV1JSqvykReLiBCLRZS2L9pgB91vwUXbxef3h58YqDzSgPkJ9P7B1qUjv",
  "key9": "42Ud6WBZkGbqD4vSSNbG6jMJBCYE3DRqWYkr9UpjmdGfsWJqxfwYYCofvUxo2ngRehJN9PRAKCLjLNoDmgQt65fB",
  "key10": "2HMtVm39qRgpzq4Gp9Ughuoah3s3ufFjsy75pBLCP6daWqb46EV4FZY4A8jnooHyHqZn9RmGzkVCsWP3Z3j878k5",
  "key11": "4GAf9AA23jURQ9urTgHRXdUsFmJeK7GDsvbZAfigvCtKCJKvM8t3EQ5PUXxtMNL4RLyGgHSMDvAjTjtWYqQEVAae",
  "key12": "3GTeRDmA3aDnkTs2d3aLbd4cA7Kk6iiyfPTGVYaUETZae93SKNvRwVLYaGwKynmK7w5Dxug5uXAifkbP2ygzYhGD",
  "key13": "5p8sUizawSdY4AhfPKLkUs67FYpE3UY88Mk6AtkQaMN1YEwxC3tFqpoBbA3gVai4bJbEL5qgUvgFY4aRfDxSDVEt",
  "key14": "57Kfy3mAB9ripEpXsBwZy3DFPTFz6R79idy5UxwfVKEXntLXuDg7Wuvp5ZdErEqNZ2FjWqc7KMKTXsT4R76jrdFm",
  "key15": "3MEXJSeAmfiLHJsVytoTcukiXbDAcyGR6a6bDTEsVGwsGcuFpKP86ALjV6dSUs2823gEUibwigfaHLheq1ojvEHy",
  "key16": "3tfp6sVqNJYmungqzsnwAad4Dfa1LKqDhKvtEY47nkEQ6AVgRZK7j9PEiWxo7bfWMjJqfbqXHh1BU6s7ZNUFN52V",
  "key17": "2UXHqT4C2KDejBo2QWdxaVfAkrigzDg7A2GNXVEPEbyTe5Cqpq8jvpzXovaKdWAc8Fyg41bSEpbFSBvg1QkPdiM7",
  "key18": "27uXdmh7Jx71seuGqZmnNQNvGc884hr5ZECkm4zmbuZZoy7FQGTCAyAd5swaBRr9rVm1g8xsJfMiqGcKVDkZs8DU",
  "key19": "5PHG9dZwaSXnYUNPkKBtkkzNdcj1pCLW4nk1e1GosT5wDXe7pbWwJLCPtpin31eAzzvScKkijcKNZLjCaYPR73RF",
  "key20": "A2ZvHues2Ky8NcQsBzs4jCVuivo2LqUyVJg7UE66MD63mSZtCefYSmKowxVH3m8CiYDXebmtjwjaxTmD7Tc5yqR",
  "key21": "5K2gq8DHcDK4vT8cjzweFtJ54UNFjEqvXEF2GzaMfAHiqrZbjfErhyy5VK1r5XxJKqa7brpqn5vEAMdf2WqmmhKA",
  "key22": "5Lshu1jH1eSmzYa3GAAHg2N9evRuD6A1GDuStaFyTqx6nANsBDWGwLqMYA64hnAg9VYKNRwyPjoJaxnYHjof12JA",
  "key23": "3bcLsjYoqNi6BLW4oygsJrwcCCrbudYLWoNwsqepQW4gA5TgA4d2mpnc44QYyTskThfYG4qckhGxpFcjBP8qWefD",
  "key24": "TyZn8QLhU8kZ22bRzSewEdPg1BxsS1v5spuiccM5KXGyaMV8RuZP3gpoQ8deRVZP756UN4urTByGZSkGbeC9a4H",
  "key25": "4FsM18YPjXq3JyAeqfe7A9r6UwR57SUsRgFt11gRiuybeX4AzAtMqPru2ZJ3oqrsj2BPob8r9F5BQL7xtBw5CVE5",
  "key26": "47iBDVgeZVzVbLUkQyzcq1MWmwqGdX4oBC91V2KPB5c7Xts11iNkA3KcZX2pF3xJ1FJViKGn1x1K4g8V87TT9nZ7",
  "key27": "5duNUjUBA8LSr4wTRxPMJWarLNxAUnyGCLpu8y2JJUdepaCM9zB5hfNombn8vJDJ58aureVQ9H19mfZtMRNDxygP",
  "key28": "5k4Qf2Wd1fmDk6dgiGLqxtxBYDSZhfqEjwZnJjFoxGRf6MjjFF1W5e7hpqiFfBZ33wijAeUiSj6DhkzTib15N34W",
  "key29": "2NkkS8hWXhrLsZDAUDjXpc3pPr7fDMsDxqKRC6h6bvVwx9Zi4V7ypdhXWn4zsUKthEp2Q7J9PwTyot2y9rDwVPFb",
  "key30": "5hXLLye83c5BtXMyvz9psN3L8CmbGUtrX5CtQVJNWPKMu8mvGMeX4uQbav8UDdiPoPff5UBMUYTGrMkejbMUjQmx"
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
