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
    "25RoAo5EVPQrncHqKmSZafyhToUsVjjsWLnWNXYcQa9o7EegXovuu2Q7bYD5pwwWk1txNvKDs3QWPu4q2Y6dAZev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eh39uxy7dVGkxnVfCDNzNDRRY9D5HLKFPGhMGV27cxNcV1oeTLyEXVJ7GoAFpn2BsYPaqRwdzG4TXaTvT5qJ1Eo",
  "key1": "dnt5VXHqvZsGaMF7oHF36EfkSFD6eJpwoqVPiwBKfRvWr56cgYaYfFVcbrhEzB1bck4cJoYgrhhMzSevtJ2MSCK",
  "key2": "4hBvH9HMktd1VvDGREBf87f9zRrUF9K6zUCQgJxjevJHK47ZzrinNaUTGtRGQzoYyUo6UiEMrwPU9mLjzERiiQv3",
  "key3": "3fzhnuJxCGDrWaDZfBdsEkXBDL5mj8Tb2RzJjtueHEn8UsEHavzFfhHfze9xyTXjYnwqxp3M8GPpBnZHCNRvfr1Q",
  "key4": "8umqxuyqdz6zTuHaQ8mvFVWjbgFRXC1BpV4fnrB5ChQkQffkk47voTNeUdXqrxAnuGZL2pnCxeAUWhC9gut3B4w",
  "key5": "5TRt8yAR7xYt679LvX4mUv23ppmEZwfBGJstQN9opHzHNiKbFmAkgosjaAMGHZ2nQEZ8iSKLURHvLeicCAv1WXXC",
  "key6": "2ybag4kBVafVz3FGdXH4JXZYvLqnMgo3bUfyTaAd7jKZyou5s8BJeoBMSw5saGkHupxXdtuMPVgzqK1QontxcCeK",
  "key7": "ygPdo2WpNW2W4xWmPVU14zmVUkqFFJvxwT52ZvbdDQbzjwPUVCB5gEh7gr2WUbGgREWYeW2hLfEf7whZVcPX3rJ",
  "key8": "5XxETiwE8RvR7x3r6reMQZopppruJVsuuQjsZE1FHgcZxwYQbfeZMvdyH1atWn9Vga8kQEccNq8DgsUfzHBdemjJ",
  "key9": "21iy1Fa5tfKYKCvB7diexnC7tyBuT3cbKZG25F5HA5N4a171Wi9FxtLjULA1YV1nBfU1b7AZnMHBtuudGEsVV3ys",
  "key10": "3wJJ1yxQSFvPdUWPRwgBxSvYFsirMPJPZqKZni2gLrWFmZGLxeVPs5hk3qRZUi2djNKwggoJnVnNEjdVUfvKHusT",
  "key11": "zJyAtfZhFusqPHwp1e5ezPbkaTKyVW3GaUHZRvUaW5tiKbeoddrfzKYqKpdbAqxSdQDwCXRxypbQorL8PznJZCe",
  "key12": "2EQfj1t3E2ineT53reFjF4TQTxQ5YiUNEsJatYxke5HoiJaxR8K1nKb8W7wRcL1FXzZPhRK5dxBLGHMfYgyzVbph",
  "key13": "ZDmKkVoHYBgdCNEjmVLGt7gBXMP6ufWKErYWNU4AtanHVbVECokspnFSpkHs213eoBM7mRAyWvX6771ZEZzcKeP",
  "key14": "KhGuwr9mXScXf5hTGbjp9bmVZG1ezbCgrR1J5wqNsRV6oT3TfVeMQkfaCa5rnJ9MXumbQPhPWFTz1kKFY7n6xA3",
  "key15": "qbovYScT4U3KnM73xFXXqoKNfDeJKjQSbEn7ArS88Wvkje8nFoak1Ca3Tku1zYQ8Jkmb72LGr5qXLP9AfcqKfxK",
  "key16": "2KSZRRfXr6hsd1T7XwwAnJgES5XWhGW8GezyEuh25TD8wNVFERJXAP7spBr1TQm7TfcrS325VzwYKkqJ97kKZA3H",
  "key17": "66RG6eUMeDReHhALKcmFhdpbMbpPkvrDyCRscq9QuNMLpFwbsrkMo5oqoALK1FfoxBHHyM6tMPeHMYA5T4SHDvfn",
  "key18": "3FyiFp9SF4vThQsBTjz7W27jypkALfwfr2bbHQYtRVgqS32qmp7hVW3Tyd6W2SAHX7qYJzvkm2u9rtxiogfCpMRh",
  "key19": "TJFzXtns4F7ay22hn8FsrrC75AjyQFXjFgcHv4MVBUqceGmWjhFqeXR5qrUnXDEVE4tJRifGUCgQauRDxv4vsbY",
  "key20": "2BP4mWFEMwzm6jv5ttLH3xAB8PRhnAnrytAFNkeW36c4inirRMcCk1Yq9DsAME2mcQR4nfggrDvBQjPBqHvB3aeK",
  "key21": "4yasuv35dZCDhCLmnZWovpHfbNLBqGYujqHmjW26vxX6J4QF37WfFrzKNkpLaYLosw8YXvaZf7x7KxsNBnAqGSTL",
  "key22": "328Bh7UeADDS2Lu6vmCQBmfN3cN7t1e41zMniagHTHuZMXiJNZ8vMcfxVHHJ1uQMDuc3vtw38DhKFXSA5RfndMgj",
  "key23": "2pWPQGddP4E2DpFtYQfNEuUbWYkg4oYaHUiK2zAG1SJPVTrUvBVJ6mFcySWWmzB5xKqt6mgcKKhNP82JuHo6btQN",
  "key24": "3HKWGUTerqqqwyXLHKoR2Z2Qm1xNGGZpEAeMywGGX1LNyeNZrK6VRBukZNMXCDhsW9A1xvRNawDPK5v28pV11d6H"
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
