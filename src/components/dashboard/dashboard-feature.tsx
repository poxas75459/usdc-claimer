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
    "5wMLEqbu9zMjdKMWEiiWkjyfYbJNpUxGQ4P1BesAqQoVniFqRajikVTbqmgADshvQ9PZBNKq12e2L2R8H76ChZJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DXzpJ7C3DQYWDRVyaxX2tjYJSLaV17Rh2rWJB8aUFB8F7MmooGZnTEHeUy5Q26decVffPx4v42A76eBD3mB9Kcn",
  "key1": "5CEPRjkJzKLXSZithA3ULUyBQHj9T6mdjosWzjpqrm1e5we3vwMayEz5nhF2jDwXGHLxVQEb41qzJMDc9AFWejSb",
  "key2": "4BFr8Co2wVPZCmCT7Yi31dyyED7tiK4mx2Ckskvumcv7oAMtYKxxHGLEEvCX9SBYeEikRVR4PE7g7ykNZCi6Dz2q",
  "key3": "3jMVuV1g8kgGPU85hpWVceXCsqeGiUEeG9wDSEBnTzkeCseaArKUbuDe3p2B7NREiwEep9UqNzUSkSdQ5P4vdmy3",
  "key4": "59SB5a2gJnapB2CxPYFJjuGg4ujgAuwMwbPdqQSY79S4dpkocLqekfB9hMs9gUCftphCi5ZrkraP33sX9CzPVT8r",
  "key5": "52cE9twpUuKJ2CQnDRk8mhDcnvzo6JTsZRrCV4LDYWXzuH72j2GWvvB4Snet6W4dttnag4xSv8EVZ7gA4nkYFNnZ",
  "key6": "62xdD4U1pVycHhKzazmYsAaw86iCUoDt7XsgU8urNGyx3tJmHoR5ySFK58XDGcX7r5SeLMS1cg6UmzaqfiBf9gBb",
  "key7": "2CMWTMRC4Nh5LqZYaSVTuDexxTJ4cmsPpo6q24dbjXAeaWxG7XeVxBBzYDGpGQxDjXZVsjTYtCMpdwKJmWCkcHhn",
  "key8": "3eDgKHCW8YmKJo44VCafdnkY35bqAU9haNRwajnAmTjLdLxHDU6EiWzH34G3bhGKRSib1aMbHDC4iiX9XF5C7kZ9",
  "key9": "5CZWBQ1VFYUNPiCZpDyrVW6o1VfxfaDcDzxFZU7oYDWq9Wu9sYcMB7LVPzEq9wvCaos6vPpNjbPyadwpfpAtDzea",
  "key10": "2ViRLsXCc6rmMxo5ebYbwxUvwzKRp5ZJ9iuR8TL7Pd8NuVDVKtTTGHt4YoCwWu9zUvaQJ9vMB5Qm8g3ZQWgYfa7m",
  "key11": "2U57qDjXUQ2q7JKtCrxF3ZWGJeNp9fAhKT8zh4tTjWQ5UsFCUzxnNM9MsguhxwXWJNkipNJdkbkuSZLS1wHkgzjg",
  "key12": "3Hibgq8hQKvBqAo7RtJP3Z8GhNgZ6MddfVzpWH2Ve5DAo9UowXqbe6tNtj7X4Vv4vjF5tDLZMnwD41qLAbiy77fo",
  "key13": "24TvHtLNKk8yijhRAUc8Ke8qPtWmZQQqYhk3A4pyMh89keizLgQuDSKtozRDNokxoc85X8gDjPvPvDEkcvxb4XKV",
  "key14": "5KgaEGWWiPnmJjP37kU15SacoEJn2L9GdHFqsNFJNEEnkSPgcXnZdCU9rriCDWqiR1a43jGsGpJZ3kGpH4QWqkmA",
  "key15": "2v6R6gREyQEYuQyjJhhnWxRKZwAPaH1EwUYgsysUt6UFXGUUpmAgwcerRm6repp1513vqHS6xz6w5yD4JCk6LVye",
  "key16": "5p9dUq7m2dX5gfxCNC3YM9sh3mAwWWXKAn4vg8vpodJj8uWmjH8cQqRxJg4TMGdFJTL9pWMSPABRfzgG3UhQX82V",
  "key17": "2si48x1R9mgoTzMuif4npGpYN2NQjqkv3QgEL55Q8NgLcP8mSAd1EdXsfvTuxgjm1UPMhSaSwUHoq6H1rW7AuTNC",
  "key18": "2d1ihiX8EAjTYsBWx3AVtWS7aoHkKf15HFHdBrPo2kgrt2gq2mCyoeEcVmZWLqBkf3Rq7M4b6Y32dwgneKTbSu7v",
  "key19": "pBNke6tiiCSMyJdRnxyCqYrgVZpR1UpnFSnarjs1nemzRacrWddqH1c63swRQDpMEyqmsUvVVzvjp3hrTYg9sBy",
  "key20": "2GdYyt8JWB4eqLQDi1qRYUTuqxrhaQk8QPSxmfS9f7YiBVBjSf5kZNZ5es2mwyZdhDZ8UMJ8wPdbXVmCAxMr8Evv",
  "key21": "ejKrkSzopk2S7DozZGV6o8KScaiXrr9koxmkrdaEbCfvnRawcmDd2bGi8W8u2f1RCDEYNAowUGUF4kAfMtPxGsb",
  "key22": "3MB5r9Utx749ibM986RpVMACBf4fKvPhrw5GRgBjTMbVMdDtxDTcw9M57hhBFLRViziE416xw9q6QhEvPxo3A4nk",
  "key23": "3Yo7nkYutbTvV77jtpebF9XroiEQyLESsV9kxMXTwA8h9Pc7uSMpGjE7HrYBGdX3S264NRUgBoTBJkMvAc6mCGNt",
  "key24": "5f7h32cv5eenJWcp9Sv9AWu7nqHVyXYcW2qWJFxa7pgRGDRb4f4E7utqixcKcFcqQ12Y8jC4hmeekiJf39YgBHTc",
  "key25": "2eKLxaC89P5uyBhZFdLEWH2hWkzeGeuyULka56arT6pGvtzwedYAqfQSibtsNpzDbAiWBzxGjfyqFh6WrkAwngyR",
  "key26": "66kMY4KGYHhzpaaEBjzCNwKLLZjSaFQysAaQRahQhCaHqTdLTGGdwTHXFdo7Z7rv2rzrCvLpzMS4u2bHXj9ZsoZr",
  "key27": "4PAu7ZQYn23ksnKvzNbYyeSvGtXRNNEvms2VnQnS8duAdLLeNz1TMWoRnosKXp5gbhxyoeGhDMpdkdd9gh9NEDBz",
  "key28": "2Mw9R8nXUTdRDYmPxXapo1TEKAzFd3A5D8rDrsiftTJ48XEDJ4HYUxUFHFFjhVNkmsT3JDhtikbB6ZtfewVKjFPq"
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
