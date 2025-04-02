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
    "3Zbtc9GJYoESp7CYdHtzvLTyfRaaLMGCzAckaeXvGvvLZSseDP6iGYfh1BE9XBZE3VzpYQ2EJex8fTRJH31Kn8rK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zqdG4HmgxDskNYX5Cxn6Rgog4smE1irzu5CDAfhe3NMF4AyJTcRMdCxSXf1yGckfPZtWcD9BmftGDzUxT5fMsyv",
  "key1": "27Eqjfsy81ouxA8WxrZPkcG3SESBYnoYRuD43UAuiVY77AVYJv8N3fUgu4m6MmNmDuvDc1d8ww7hhqAD3wW3Yps7",
  "key2": "2m57yi4J8LkwpoxG9rPPoekzC7UPSQ5L66jziSFZ5QDoh9qUdiuU553bdEu9tGcMA4cFf45mxcCeq5nkfJFLaTLz",
  "key3": "4t4xURqXXfdUp3sbaGZUeHB776E3SWdvdV3Ze75fCaNC4oqC5syKheDJp13hRKNUQTo9NzJqzebjUVd86bAnTe3X",
  "key4": "4kZqPXGDRNjgqdpHeeXkLBBm93Qm3e2Ps72Trta4JrP91aNLc6wkXsVxBRXyb98cW6NxGF18Y5oCA8a2QL5KdFRs",
  "key5": "3F1Jco3YEVNgG1Wr8eU5eZ5UwHetXgxQWhQqXb5hJY2QQSEfHEnxrfiJ4prViXB4dbrUoCAs9eKCWmoe53PNZMye",
  "key6": "cLTCiYj5SSmxiqdRifezejuQm6yoSKGUo13iooR2hbmuJyLkJr5LtX4dyPxwSQNTckmha3dqH2JqZDZX8khn29b",
  "key7": "4tgqsrPWxGs8thBtiwjSAJgv8G2DaAds4vDzfiznWc9pftLXuiqQZYVaLiKnaHMAwu5WYwasxAgan5PGbRFNd86P",
  "key8": "478DvDDgtbEarcznWF9Gzw5cetFw3CY2RjVuvdR1xNoFSxDEC6eS6Q4pTrB8f3htjj5z7Z2ToPCwoq2N42j8ssiK",
  "key9": "5gfN7Ksr4KEEHqUGxaTM4Jb21coWZZDkHBfbywcjH9wX7r3bPvwY25uzYTWQsTjakLFCiadkymV2MzJw3eESfKmM",
  "key10": "5P9R4hbiffqYxZDnJmDGLJ3HVuGdY9xj8vC5LsEktvb3XqP19NyK4ga8BosQM8NGKh4rUR8w4fa3z7qURHHd9dYb",
  "key11": "4c7xPjwkrcJmqhGvF7vah64cNghwdh8RTru9d3tCssieDSMbz7RkdiHuc9vqxhW1v4UvZdiFK3zyA36idEjeXUdH",
  "key12": "BAS5FCwkwJYfkZ8ZC8cFp9LiPG8weUsEdYurm6BcbVDhbqTPFWFVzKBPVuF2jwZhCFiNTHr9VMkktL3sx5sT1nY",
  "key13": "5tj1vx1aHKGjyupDBLtPH2Cv3rWUHFLxwBZhEr1RbQy6XZ4cs9XS1ZhvWygiTsqNae2nDAqExujGbMxv3iQgBeVe",
  "key14": "f8CaVXUbnrRgzGinVYyawEUnUWpQBpZcwTPSXM92Lep3Lh62MpJrN6tUXAwG9RFXwbzgSLjbZqroNsMK9CZQgYP",
  "key15": "2gwSwkFBra2edJpDXJqBy64Dj4Kw38VAHH13X7LiqTTBAQVYa615tQKtGsPqMCGyYYmuvfEYHsCeijcxADhULdHd",
  "key16": "2LTMaVLLvPsBDtWGCbMjirkACjEaipxqhweCCbLTbbeik8VqfaMaUvPtduXHijtiobCaevLKpKpkP2AcRDC3eiig",
  "key17": "7AB9Jt3WRKCPN6pnF7XnB6kL5oZGesnjuS6b8uNf1V2VCZHFk9EY3zRc1ap96jPTc4Yit3sMZmuUpXmvyLS9bGa",
  "key18": "41MsBDtbdcxBXHGSkpkPy74roBMdci8mWigoa6DhNx2aL7DvHuv8hwb34Q6fNDhfqQ2nwmjY3Aeu3EA3HfeX5zAW",
  "key19": "boiHVvTw1mCq3eaGz2T3jNLj88p38cwMzUq9noLqUbhZVNoQfqqJSEEN6c1ougwD6Vnq1DBnPCqA5JL1Tbemre3",
  "key20": "2HzszzMvnQNRC6i3hZeKpjNpZQFQCqesTVqD3yUjfqVQbgB2iuZoTsY77EfHttUD9JebKCEZFeZch8auchz3a5C2",
  "key21": "56oBEeuMQp7PbshQEJu6tq4vn7qQenNDv4x368qyMnq9YXx74oHXHjmjVfJGA3KKcBWmbuNEpAVQLq8N1EkUwpwn",
  "key22": "gVB62LD1crH5kvTFV1XgmxE5DvHMge82pKDgLmLghHYGYyL6yh1BkdG28zsPtyzsSNRpWzXGbBjVnDEYxrD5mtY",
  "key23": "2pEPpHWDiivc97fzmSHwFgDfc8fdckLYjhqQQeqcwLKYi7URtEMy5RuJjV1vE9pUgQgWNWn5t5zvmvz2y2UEgTVa",
  "key24": "P9cmRr4Qrg72V12feTyuCnsvvbvkwMNL8jFV25gqk96bDBvnugucG8MYyAa4D8bbmibcrEtY2rduTGRGvKSML3b",
  "key25": "MSryZKDfh6x16GesuqVyoE8T3eEaLGs3VvHCW37gQeiPCq7EviFAjurJ4usjKRmUJNjaiztGYDPtHd5YVAa1QWW",
  "key26": "CZqueiGnTz1v3ihyXK3MFDcbtPFEadWpKi1fdHHy75HqgSdW3Lo5MMpVB9RJPAcXCyw2vzqrmKVDv2XU1RHHDhX",
  "key27": "5sDAZ2doU8PiC2CacoP6k7RG3euWPeesemtXtWT4dJmRJbUqRcxptwUPSXMwBkLr85Avk7cqbb2bjcPG3Ts1w1ed",
  "key28": "5FDtoAoDMM4GnexGhufLuLdR8uhu6jiv2bciCLBJYgYbrbp9FSG39d71sgbK6D2HwrSQV4KudFHsGqZzXarJYQg5"
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
