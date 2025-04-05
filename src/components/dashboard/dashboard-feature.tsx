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
    "5tjh8y3U3utyBnxKMVWPQVaNygo9kxnr1qTx8H96hL4Vm9NBvQGWjCY6CPgMzzixhVuGMJZ2jSb96uNQ7cNZbqCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YxCNMFSvN5sKJHavhfMZEStsa4oz7VjsSr2YdCK9ZTXwdrQ2NrK9UkuVR93pv7mcTCWRj2Wm6BaQxPXVzthbrV3",
  "key1": "5TnCfGyLH4YxzUYiRjBKgh9T2rDFpXwzNsdnygWi8AoruRBT3EVJ2DbEPjYkURcxpyasy6ht8xQ2TUVvMyC9QHYh",
  "key2": "5B2Sq29GwwRVRpgTokoQPSQ4p2t7RDXtStmfM8P93cSaizn4bPVsHFCTnpzj4o3vptiz6BcANVdtfSb3oqGNRpQD",
  "key3": "DdeNoKhTc3U7uBHAkaycK5V7AoTcDgQMf2i8pM9ZpX18geYbECxp4KFfPHyAzjKCNGGdKieTEBDUhrwLmmaAumM",
  "key4": "F6jh7YJANQXmi7bU7H4miPznCWEhNVxquoCxavBB7g8KRzpqfW4UTGzMZfR6SRz1fm6Tz2a4UxemUALSB1L6LM7",
  "key5": "28tB3eZAQJNewXCThbjtRuWFsqe8M5eaoFCzpKpaZBzRNwCq2KpyKC4LXYB17ShRR362L2wUBf1FA3TtG3RU6yWs",
  "key6": "4B7K5zuqdB5ikBF8dxGVApMUaB6Kck6yiDM7pgPnDoQt1a2fBBxcFwDwTGdxWTkRqeTpidDZQ9Zf8mNaF7cWPcaF",
  "key7": "62CWkbs4fgNKRYmHbHooczSK6srWWNu4LFkdgod3pySZhAfwGn5M8FKHWXYPgX9ivQTHaMb16ZW3zckSbZ8qArAt",
  "key8": "dnnHJDPH3oRaei4MNpm9tw1pivF7SLvwDS8MmEa8g4ASNX2FYoCXM7pMtYYEZyg7G6BP61TQ2LwjDkEKCG5dJrD",
  "key9": "3KawfzwoarDfmmfoD8rDw41xMpfZ4vUMvGdnj1XcY8BuYmySNKyT1JwCkiDVcmAjgdn4a4jGsS9gGVLpUkNaPEPZ",
  "key10": "2Hj3CMyNNmS5Ti6XpusrfTpsP96JitcbvNJC5CKVGWvbm1DCSmjFd7USyPY4XnSrhPgpQV34Tvpo28TA66gPUt8",
  "key11": "5B41A3pr98yfQpv5VdE3HE6DkWjBXbyrtZjf2MjDDXzLyV5CfJJRYNwwBteW41XzUFbPbpexa3BX1GRvzCv8nU32",
  "key12": "5txko1UkhuQeWCQuEApqLJUJT9JyYkHWzMn9EeohfHbh6T76kqDwdjPorJGQo5kSjiRU6vxMk5zniggTrdXcLNXS",
  "key13": "4PHXtqqpbkVgPnfgRXPdCYoAMxZgaWQj7Toqy9jEb1YxxzkqurzpWbUi7rSAyi3xbcic6YWq7VhPVrp7tFBh5KjM",
  "key14": "5tZws6ZrVcFwzyWAn4oQqHk4qHqTeTHnyQzUiXGsJzxH52eVtZhWiL35q4RaLGgsYfKgL4oZVd7oMvShkLWcXmoB",
  "key15": "AokhLbiNLQkZXB7XNNEVVPt6mnbZHxVHy2DxazFCTwExFcS2syavT9C1qMs6Nepe1Niy1vGnGLdzxsh7n1rz3mR",
  "key16": "5pyE59CNQBe3B3BMHbF9BcjAqSy9ssnPcVYADrkEMAbb4tGn2bZ3s4Cr9JPjH7rccsSkd3dGkgMDto4Vo6iqwFCb",
  "key17": "47abhooE66PJgMbZFSB9bjswhx4sAdxQPesDZeN4mtEAbb1z4ZQ9mGmY2eLLpbtAWRezreivoV7YTHTevnnM7c5u",
  "key18": "57VPTsQXhX6EDEd5p7Uc7VyV4v5rHkW3EPRRuCZHGcJxBUr2BQJpAzWJFk5Y2Qqu8mzNShuKj6HP4awhJ9GXQuSQ",
  "key19": "2dpLt9mSda2pZiXdjdqScV4cqjz5Cf83H7NBZUeNvDscv9CgxvuSDfjsrVsV9dsQkRN6KPAqFcCuHy1GP3b77eLb",
  "key20": "zv3pLeiCou2bkDCNKph6bvmdPtbsj7iNG53zu3ZEhaeDZ2y69To3ddiWKtq5qN6gxzeRrQVvuQeK7GnEGY8E6mQ",
  "key21": "5V5pyLZNGcPgvKURoYiSL14BTPtNf3KAEYtxrKHxLJ1Zd2D9z427XRtn3KWZAUhd7iQtbWrrASZVciMjvMp6412z",
  "key22": "xxSRdNaV7nEXfk8YW6iKiTExJpWxwTcNiE5W9QJ2i3suSwxMkZdp8xrabsJStPzJ9UcroaR3kZAgkcDhAg5WYJ7",
  "key23": "5BqESjwxMDx5HJA1HxJf2hHdKpCXwgqEeFKr6Edz7uXk6MWuwc3i1opYWzcrUGtB16oYvUZ6F8izsqK8hFzEh2wD",
  "key24": "5FTKjGrwyzB4QKU4RwyZfn8y5SLGnfXZnJHL6kZH8Fo7br6JTybU1qJhJXwRLhWLdjnLHTUkGAnsZ1GmbEtvo4Rg",
  "key25": "3VNybwJmtFqbY3HrQTJrG1AvVfVXY7cUfy8AGGjYG9uxWr2oLa6ZFXLHJC6tJ1e6sqXbpNmJ6nf2Ac7ndqY2f45L",
  "key26": "TTmmiK7YTh6VRZsGHVFZTb64a9Nww3moeWej9W6QkYtjnF34siHLrURAoesJEQrB1D67VGTwiTfBgrj3X4EWEH9",
  "key27": "57tEbgTeYJTGzNFoj1inDqdnCviHziZqaaF8dAPE5JtnWhRPJqxKZRL9JLztVKsZ9fi25s37nTocC1tyJLx64mZh",
  "key28": "4x5ZfK2MoCZPAj9g9BkkVU9KraSrKiqxtQQZtJz3dBLUkyhtkojWCngMtcP1CLDWkBdfpjoqtjhuFoGer6B8aPse",
  "key29": "4kDCEuRAZWtxPrzrpVs2T3NJy9r4pHLGnKyZHiMtN7cDvvAYGdaEV68ET8G1bR9dVzhsfEUnYMynQhHWo7KGRbEA",
  "key30": "344g3BqvpYUiTb1LwKqR6eALzRP38EmUN8TVcfjDft3Wx8dPXEzRCPyVVzzY7zFMHKL1rVVWZ8tdMVuA2pXxaM2b"
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
