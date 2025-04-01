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
    "5daZabKuTBo64ux2Kmj2UbapzHDWabFbQjTyDnXDat2Uot8vtrZ8tMnrD28te8JSa2SYYXpcb4FtAa8EHGUkjZaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kdGXKYbZ8xnif3GxMfkKptYxMCHJpCeQwUKASQeBzEYyuL6AG3aUtrMnyeSv4Rw1K8T187RQBMwUwBrf9PHY52X",
  "key1": "2mxy3QNEUSYZNRkCGsQsgB2hUHvRw9Ea3V6jL98ytYTUnCsN3mewUTD185Tg7Adbzgk8f1a8xDUeNM4uxX8xLnEw",
  "key2": "3btNG62KWMJDDxSBfedYBJ5U8dNMt7E13ytwEQdWdckovQHa41fLxrgUzhd4cgVaSYFfhL6iFCmYcfj5M3PeDSxQ",
  "key3": "4r2LGoa4JjBrujvovPnVNqMTqhDvUxxGqiVjT7nSxJUx5LwMThQ7Qf4pP2QtpHYTZboDSDqmZo6wui1MCYGzRRwA",
  "key4": "ARZCjHgJH9hRsr16Y6u949uYi2MeBk1TR1fy3DDH2TsHWXoXGCcGpGNJYA732AQTLdxFvGRRb11Qfdkgi7HVa5L",
  "key5": "4JgDNhpQj3mzo6oZKf2dJ8oMdCUDeMJm5bKEHJ3nwiBuzMv9jNk3xoccXNtpJ6wKxFpC5LSMZwj7K7Rb7YEhZD3j",
  "key6": "4RtAZ27YBxXJHNw1FuGmve9gV8Vu3W6ZkamPrzWBSbVQ5Bqht6cxNUyxVFuG2eoJxiFhFT4XnnLgtcU7fdB1Kpub",
  "key7": "4beaYi72Xx71FeeWA22jkzJUYEu5rqmqH5qeThoTcpmCjwNxVE6PtfcMZtVjEaohuLMjt8WvyspgkWXRRRf4mWF7",
  "key8": "3tHd2JKVYgDY6sgmrZjUReEuCj3srALKLfHxYc4NkaAKvJ7RuxQZH8UX7PX8bz4xMwuvVrU5WT2oZ1F5SJrQkZiW",
  "key9": "2ibB2Vs1naoZcGqB53djRVaTTGrwbLXjBM1AjcFGAfvCfqfdWsQ4QHUJnGSNZ8No7FaVVRzQdWK3r7aG5CaPjC9Z",
  "key10": "43m1RzptbR6BgHCDyC6zBpj1YuALFxKq6XdBsoHRdMzLRPGdEUwmXD2bZkmWm9GGM4hABX6gZFLE6766VfTu4ScS",
  "key11": "2FKeLAM1fvNRttJea1mrCBCmJWUN4c17s5fncD1zpRMtCLBHJUTcMhuqgpEgMfKohJNpVvrVtKjfDr8s62NbTCMW",
  "key12": "2yYsDK4KadEmg9eCYiJbh6H6qoqydZyj38p4sni2U7TUL8X8Ztx51kWJYGSs2h7GidWjTX27Gcm1C69ShhtaUWJP",
  "key13": "2v9QsQUUPj79xJSaPEhMZuhLMA531mgvVxCuLTWgDm1edzHZzFXyj7C2wKEKjo2q2Z7LCx9NmMN2txpyJi4bdw3c",
  "key14": "oXxh5RfaEc798owvybrLXL1eigqHXLR37aFC8vXpJx2CA3TanEPPRLPtEa5CebdU9JHyRUC1Y9Ci7gqeUfvz8sN",
  "key15": "3hkAbSTbPQK3DuFGbYY8KzwnoxVYhKayq58QJh1nesEiJiaBRf3jC7WELfXfFik4u4fh8o34JZ29EndUVnrRBodh",
  "key16": "5d8KBFFCf66xwtud5wPhv56W4zg6XRBGNJx7Nmzh6zFtypztG8cg6bF4tRgU4KHzDKHWxnjKAvYAEDSxs4Put5tR",
  "key17": "46AAmSzgqGxt3ySYYuR7ff3mxV8jADU8JUAtdkR7vZotrM5DpjR1cJYdM3VHhr7jFDwPzNtpztVnp6xreqzkxXJ2",
  "key18": "3hpZfjGKnKQViDLSGs6JWaTJ2V7apVyX2fsPKRYLYppnuPu4MBaM3kgr5DbYaEbPp8XMTWfspaP5d6ekWJ5S7Muq",
  "key19": "4FqxGaYeyRc9JaoGBxgxzXKuado8S44yvyKE4f7GFr8EMHvJMZKAXHpuf7TxKRbqmvXysajBuTMmSeYNeLSR33qv",
  "key20": "2jdfs6Pjn9nZvp1DSyxuzgSqvvEFFiEHZ1DycRdnmfLQVf5jM6TfVV4jNoWJfCMLxUS5wDR72k3QmqRXUGCWRXyX",
  "key21": "3hftozGneghJwWCXR51NmsjqutsiZbayxJKu86SHE1uepLFsiGkET5gs2KzPtNdBcjBDQaXmmGVTAbXi8HxHxZW5",
  "key22": "2TCTkkC7P1PPbLQWcKByJQyNNo9BKoBuJGomwwF863JSs8eMLtsHicbQzD6maN4UAuSHr72dj1gdTJonDTNdPM4L",
  "key23": "5MwoHxU8fmAdSkHR85KkFSFSC9oBJKr9BbcbNkAYf4h4w8Qe6vkzHmJ5UWr1t8EG6EUM7vGVfFbSNwMXF9XGus53",
  "key24": "2TtJwdsA6GjXPLBE4T8qQG8UoeuepuTW4bbSA16LHLDEpkqWYvJMAHqZVFD69SPgWjFMvK3GERZFiZhp88onBj6C",
  "key25": "2hPvG68LxASUTiC1Y6yUKUb934aiDoBBwRYT95uDBfS2MufCoY7xNjC5jfMhMDXzPv36FqZGE29fVMydg3yY5Rhh",
  "key26": "2zrUgfWF4aTFdSH3AhXsovs959hJtuYMwB7Ro6tWDPy4A3jD8Xvw3ZcRcJULnvJiZec9sDQsnvHoEknoh5Dz75W8",
  "key27": "55oo9XLCou8iygkPRxDBVn5T23Y6n9kigkUqsU5M4hFANBSREeQ4uKL6yvQiH7deHaMs2yoXWcyhFPsXUqrdHwad",
  "key28": "2fXFeb62mYSgtV6wteXZbDE5gak6Gg5muew3iVHaYGLNoNui5vhhecQWH6oCq3hsxtheSr94TpY2a4Wc5RoxC1na"
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
