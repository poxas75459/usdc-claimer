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
    "2GxYgVJhecuB11A1aoYU1RW9Rd2DgPVm3NaR7r5KLL9NnuVhEwdgk9s8WyKZ53To4267EvjzMgNiHjeF6S3ZBycV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rtTmXbqUZc9wtuxsSvyJEq4QEY6rkrLkEjHZQfypAf4tTxxZ3LtBrS3SAdiPeQCKRnpZGnKSnaQTZxfUiZM21wG",
  "key1": "2YP5rRe9toxgAEM99hLwMFQSxyimXwWTguhYAFpKjFiUiYE5wuQCfDsWMtMahv4KG83aowR8V71AP5ktkGDLeMRS",
  "key2": "yzkBDUsMQippAzqHkxEtv4eKiRRj94G4ubyvbAShA4iZfQANHqnHEkicKp8CJqFmYqcNHzgUsuwpx9RNj7XwFkX",
  "key3": "4uvnuxsFRh9s5Wkt2nKtrd7JMmg8u5swyAob63pfgP1os2y4A4iYWrGvsT29oX8rr43Y15XNBwGs8esHvznusR3r",
  "key4": "4SfskUHgim54C1GwjM3HrK5u2d2gDRejWzkpqyxxg32ypKDLuEsbUrV3gSkhhBak6ZRZAoqBvVJQsYE7D8inzod6",
  "key5": "e7vmexJsuWRbNvHsvVN8WPmkcWAMC2T4RJMW2VYE2WESjY4QcxjMDvMiPpkeKvQGAopdmtt3zjvCA576bzY7M4b",
  "key6": "3FaN8B2MGpNVo74EzaTRjnAjPgh3e15QJiLgWHp3x7bfMwCY7NmqmVcTWP3qccczYtZD1o9xkXFHQizcZREiGrAv",
  "key7": "5mgV5qikfUscamGw3YWDiHHxGjaaM74S4ScuHdo4D9ZMC1rZTTtLw9WDowYAL4W4YUPSkaXQ6WPJYryEZE12GXpn",
  "key8": "2NoBMhRZZbQPgEgmbCq1sMcqYVaGRuv9BjWG7rVHGz9oxqzUrhWoSZY1u4fFLBH8vXtdTAC3Wu4DR4rSSCwGvcyZ",
  "key9": "3AWV1DizfvLtnVjpdCq9boaE3UYGBV3gXLcej8noDGQoFeiYm62VfQeMhNutmgGeX6oXR7dFmuzXHrekEkrXWEaN",
  "key10": "4PAUuvB4nC8viUG5XYcfjL9mxvexzY6R4G7zvB1TkU7TscMok5HHnAP917kPxmBHE7TqVfiU7z97grQQmutTTcv9",
  "key11": "22G4G1wpQ6nseaap2dNzCYC28EmDwoXDrac8FnRKJYS984W9iNpgfLvNdvzJ4rkZvRMiKgjHQtD89tGYXfJMth3k",
  "key12": "4rDtshtUbagw9UjDTbWM9hnbfCRYsZXrVTT6WQp1rQ1USzYEWNFFA6M98UX95y5C9APbgqNEzS4FkPpusSS3iocf",
  "key13": "4ti1V9ABKEpD41uULX6tRbFSDfFSdThiJGeJpxDbuJDVB1jsPtkvfVMNmaGV2C5wiaosBvNipQ823aPZzadBrdbu",
  "key14": "3WT3K9g6cvqhEzEUCc5QLhWSYjGriSLj3eaq57decH1vgqrrcgdsVNm7F9AFZowbnw64eueUZ6DEKXaefwUH479P",
  "key15": "67Y5XemA7DV1dpfrasg4qRrHjufXThg9vCypb1og2thqbVg6BMyVVWD43NroHNmq7tNRE4jKzH76KFK9wEa1DsrA",
  "key16": "2eeoPYMgGYpQ5ghuViChff91s8CoounEoFPWc7M7HRuMVRRBgW9sDXuzFYM1DXEQfdgWsZZ9XKVBKT5EagLuPhYF",
  "key17": "5nUBjQRqX1LNnyDLyTfudLWXuaV7vSVXuX61Pb6nEsQQQYGjjp7t7Sd9M5MiMXZWVV6YwcXxksfiSkTRkXSytdw9",
  "key18": "2DMKLHEGqR6mDvqLHsPSYr2xzLKXtMMUHPThF5NuYs2zQpGsUtUcn99UfNFQgVZhhosQJ7ngNW44nsKUrLeMeBZ5",
  "key19": "35fBwaxcoXNQcJtbNhbTaGvcbu6F6Kndbj5j9TgbAqoRLDDpkPWJRez5c4eExaonFVKv2zPNGbQATm3y9GePGpKF",
  "key20": "5fHmokWqcYfgaGm7dfbbHeu5M46oQofdeNe6bTMBprBdxrxuv58jxQUA27vGyzwwDPzRQDjoSWsS8AF5Bfy2omxq",
  "key21": "3nyXRc8gWvLs3AYvffL8NXpbPXx4aNaT2aBPN7tDqMpbArefQWdSVwa6jjBC5ncfQoeYxKkZhpfEwcK5cjt6ZZbj",
  "key22": "3MXDLLW2fZgU5bzsc8xepJPUuyQ8UmKmr2mAgfTFJKZm83vRAA7SV9GUdfVMpXRqCN4xKYzW2w7Yn6LQWTfWqW8L",
  "key23": "3wydS65Q9qoVCBpj32nagt7J7dv9sXPBrJKCj9JmRum3aYtS9AwyNfwY7VKoufU3A8K7paPY93tYcp4xL2m7JMkF",
  "key24": "5VmjAETtnQ4XajPiHqzJ35npBowrMbbzz9vX8BfwsNEb95g6PhYnb9CvpXvPXfTCTX4q92H75s6cZ8ipUXSLW9Xj",
  "key25": "3w2tuYjQCuRhXsmuS9A1Vb9gmx5UJ2P72jMPmHXXgDqv8rSDGm1kGvqB8pCQFbFiPPNBmRUAcscBm2GigqoFQpxt",
  "key26": "h4hMkUvsJY9DHMbNg2b4FLM9ACV76YPDPVikf3qDhSegfyFbMVhJ497XdcLFWhUJujbwjgKo5R79CjuaifZraeG",
  "key27": "28vjM6F2W7v2GyXUFt11BLonpHXnvS1YEPLUjUB9mA2dCt5uSqdwYJYvvJvzNNuJbxxynVkgyYb7EyxkKrZL2Lfw",
  "key28": "5cXkduaFFWPeW6HSkvkjStYbfWkSFWYNkw9okfKAbA2bf5jV6mjbnrgTTKUyAZjduPY7z6kr1Hfbwi2i72k5fSfZ",
  "key29": "RwmdUDrgd1ecqAcssZppBVho76CRjWqLe1swMdiD8q8n7tdH3zNH4HXP78nQQ8Wazvh3phpL7rwubFL9wL7fK2u"
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
