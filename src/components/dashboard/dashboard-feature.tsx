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
    "2mawNxDEJyfNHpZHsBNEvQ7ExE7uai9gGy1CWtjjde1mqj2ooAQBobmttggNyw88ZSGvseDSwXPBdeoJvJA9D6qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "stY83LFrYa7tdBQKcw4t9369g6M9SnDwis452u82cPJX8bhg1gToECHzJYqdc7QGKm7wWCGAohMZ84tCHKS3bYR",
  "key1": "2dJ2gc5qJEp5FvJoYqhSizTYeiCKujkR7m5eAdkSDSXE9YAyQQWt7GCbNHFTCMFR2ZqwsnwtmBm7xEk2FSTEsoqR",
  "key2": "2sk67NrqZf7abQVai7jW2W6yXRnxrZs4WDegNoC3g9qXTEgVfBUUWp5WNg39z1w5dgY5s8MkjZbynDdHsNPNJDPR",
  "key3": "3sJxvWei7eWHdDzjLUy84GkhTo9okL5gNmq6WKTo4Dkh6X6DaLAsVo32hgB7F4qmjizyuGV4xx6o4QnQVBFvLFPb",
  "key4": "3UvPPb8W3A2dsyYcBCc4JsqJ9YWtrEHVSEUpgH1tPFctPm8VePaw4PUqUzK8DXG6Rnjc6McGPB5ZZMa2UkK9yU9y",
  "key5": "QkUATahZsnYY1dmg512SMbQBqYVSUqYfT6BSwJURreddrAzcYoyoNwucrmLkuio7Lwknhkt2p2NPB3eTttkDuJd",
  "key6": "63joP5bZjRfGAobyCNSMFkUHhkmCs8B9S1hs7HN8QYapsTZPpTtGSU34Adz75H9Ko6dh688KnGTvxpX1S5JCKJjX",
  "key7": "23FcKJ8iPXHLGoZ7CdbEAokiVAiUsjtY2pAytGJ6GAjda8ywHqgCnnP4E2U7SC4tB3uhQtr1cGFiwi879bKeddEt",
  "key8": "5Ww9LuoRNuxRxMN6K6nCQFXcqwQh21RK3K8CC5QnvGBuT3CWSjseAUWAaD9aRZNxSnVaEUs5LNCcCGJ6cCvktZsZ",
  "key9": "5Cc6DecN4PA4Df4PnhFjGPoxoK4jo4qCMaLstzUtjGwkCn3Q6h4A2shk75DwH8CGEM9gY9h141TPmwcJASzTQAJ5",
  "key10": "2RsFsi8YQjkpwwqExKD6wnMi84V3dtjqm7XDptiRYztH8YJnh1fzZTSpK21zkn5ZeMg37ciJ1M9RzGf1yebytxTF",
  "key11": "4iX21cEtEr589cLVuEjNfyxwUtZjHquz1CN7Dm2e2Ne8uRAq3BmD8GfoAETrR3H6aHBYaHtJWJ9snyXE5TQNqvWR",
  "key12": "5MgGUdpz8D5xosw8jYfFvxB7zqXZGgZ8gMBwAJCBaYiVNqNSBHwaRGFv6xdRUyezpTaw4Lpqw5rHAsfhs3vVYxeR",
  "key13": "5e4hGJFFsLk6i9hnU1Uoe67dscjAqMiGxPK3SQGoHqo2oyQrXocLv8tfEH58z3cZ16NsffUdMTCoyT5v8p4xo2xN",
  "key14": "4y4ynC7xchFDFTRyD1CXKqskFUWyFoNLFWyxshut7EWEN22NTvyuZwgK8HG4vb4sJKeop9kcFK5b1y49eLxWFyaR",
  "key15": "csQg2Kz9RroUvNxhxnDfU5itwJoeBr4JLw7sukboP9pMGuj5ji556EdXKhYMm7WmHu4HsHVt9fV7hrnMtAymPsN",
  "key16": "51HX9BvtR4XxQrtESgAfX1p5JBJYX9r5Q4JM3aa4uYC5zAu6wg7xLHPWwy7tNvkvE8k1PdRKaxQY6e9GmTzmYL8u",
  "key17": "2SdanQcvxRD7eNTY3dswgK87nyJ1DZmRqEqfPfVjgMofKgWfsBjKbVGx7bRjMAiBLC5YAWgQy4fXNxGc1NDkNAhv",
  "key18": "36MfHz763Euq7eNDZFmCUyeN6JU2NoXLoxx5QVGe7uxHDHayNgMYCtXQVtecKCbamtXzBbdc314e5z75Aj9wuK8h",
  "key19": "4cnQ1DZxizsPDNhGa5bmjQ1JJuqMfd1jGhkwcNVqCD3typ1ZZoP1vmihWVmU4D8EqXr6wcpDkcZKSzHK1bpwj6Ev",
  "key20": "4jpna7Mh2VBPZC2QDZBwq8ekvEtWecBh3L3BKdS984Zao1qrVQffVBDYYr4i3oh9GzRRnJpWoeM8GoRfGHZPWbdM",
  "key21": "5TUSKaXKNixqYhSFrNc7LmbXpVq7o5eoxjYMW6uALSEyWERWmczuoRZUSUcEFyMrQtTL5mPNM32k9U8v88NWhvG3",
  "key22": "63RmFj33aZY6naxoz8HiDNBhNfzGBkztQECkycSNz9TgibnroDykGKsX52GYok6jBvM8KVew2pt2jbXfxXsqXk5b",
  "key23": "425F2GrNRMfHFeauWaxp3frvjYcKJCEVnfhGPz9NFgGBwxC2TEbn7bVKW1YwXvYw2VaWEK8cECjtbyFAHtMVFUyA",
  "key24": "CGAK64DKcX4EHqw5DqrLW92PuJwqzqH4erWxR1ZzAAFrXEFkaNCpJtzZEnRSpHhLoS2WCxB9SbHbaNfjAB3dgbQ",
  "key25": "3RnSFGhL3EzToq8kiMry4qc5aAcwGhQvw1EmMCkrWusugArpazR4eFmoCdkVhoRkQFqoFcYKgULSMPfqtFmpxkVH",
  "key26": "5twrHoLVfagbtm8M6Lp7s1xZbg1qtGFFbiq6vsGuYoSfSALkDq3jKMRvfjPLXR9SVZxstx9ZZjFaHkk1xZ1LLjmj",
  "key27": "5WY5fKpKu6jHhVJ72BKaq3Z2AbXuZP3nG63RH8moaRjiP18X41m4haWgSxJPoBpEGAoaDmXw1G9zVTTdcSPxsTzU",
  "key28": "5BPbivPxdRao8UU9gSh8nKBD9TjWN7NK8YYEyT7Vak5Xu5THDX8bhQ7KjV7o6fsRsFFP1BiPS4J5r7FkHdoSi86",
  "key29": "3oaPFBt6gU4hU6QqP9RMkY6jVRcEKwGVEnhesBM9JpcPnCm2z5MjKGbhrQz8x8ZtjzLCkVgaQG5w7FEPh9xRjfmD",
  "key30": "5LYmR5FFKWGaS85tSGrhWyPUmNZ7hMyNzqM6eG118mhFcEzdX5Eh4ditjnL4Q55ZAFV48e75JASeEAiL8o6cXz1F"
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
