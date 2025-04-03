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
    "2RZRygjTZJcqUcXqqF1gVzuJmfdVTcoHdLYKoaYAFJu8M61wDxxbnzJSSvp4P61iWozPHnVU2dKwxSwUBhGjoU5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sjVisXd9bSMYvR6Mx5rcnwj2PeaeGEf7aR8K45PTfgyw5Xm5pJ5Jh7pydH1pLfGZv5J4CsMPhzZpyKvHHo37Y4F",
  "key1": "2VHkF59EUHNo3AAV8J7SkNcbLQWDVFN9yfqKfVm5vnwCdZdsGx1qges3sfgTZquU2iUkqxWW4cQ96b4P3gnSWycr",
  "key2": "3N8E3REimzZDf5zMJjqE3mA6jBK4mNuSfhPTqv741XdN7QQwSEdKcJ8HZZv8PwWTRitv17M8LerKobKUZD1Ktfx4",
  "key3": "zhxJ7mb2R7vGTKVsHSqWxF6gdSP6rzxsMjqwKKfPZYBDFpJXZP92TkbVWGoExH8SLDQyabobGUVtufiLocw9gZE",
  "key4": "3DsfTksekpqgkyJkJxgHDzgMqmS2yyCdEUbRwtsZuFyUZ17RTJg5at6ha5x5KaDxvq9Kap3PRoKMRyBvJwAQrnYj",
  "key5": "3hMkXWEv8chc8iDEtjfEaZs4UEqDX12fKRBuYKufZ2MWcVkVxE7TKQpcRxk9rGhmH38KiGT8BmbviH7j13CnJTwq",
  "key6": "27wS4JK7RsQDYSaHsXsiHLnf68LU95wwiGMr3izBBW12mhoW7ufmLLMHrxoDhKETFPJ2Ht6KpHymvCvyEwHmGCTR",
  "key7": "5q6duW3dwEV7FyyQJZoRZj8nMDwfxHbftUVPGfxU9Dgbse1oHwww9aZnpoLYwNUJW3Kv1C8crjPton5AFmjTn3GJ",
  "key8": "2xmYgu22v5fQ21WjAZBvtb5ydQsGhEStUGH8E7cxwL8RfVuhsrT5bcURz3A5ubEBouAmM63KhzWxhuFGn8LNzqiP",
  "key9": "45tGEzQt3iP8ihe1zZjXDLZQduv4rvZ3QWGjxCEF4GZGVejtFxC7Bj4kkQSMKb8yXRqB2xGo6eLbEgqpiFFZyR9Z",
  "key10": "3L77Rsc4ypQxkvyUQijpbkytvWUVBin6Nj3Jri6dqhr3qLkhx9EwtgNo2hRYD6jGpNoGKdZbDmxu3Zas1QM1uWCy",
  "key11": "2faX6pkYE73vg7qqJVuTDnXnc38SgQccg8kr9XJVh1kW8M8YedTZ3nyGnm3NVJpwgJcK36pU88riQKj7yd98oevr",
  "key12": "4VEeGCrdZZsmC9EWpcpRNPwj3XME5jDn82KCFJNYUJsPdV6rXok7QQ3hCqA4u5jDp1s6g9td9YNR8WH2ZFqYuTAB",
  "key13": "3WobXaEMTQRSfkimngM2i7xVXnZp7uyLqRHMtA16rAiTypHoLw2SEgyrmJ2P2PAj3Vyy4wfAJmy3tTwS3bLpVNDR",
  "key14": "29pThP7pg83WFhSkprLt5FWYsCj1AacyHuSqXTZu1gSE6rD6cTDsXDh5wiqKULHZM5EMTi1TLXxFmtofaNxtAxj4",
  "key15": "28nPZvXCsnLfxysSjTiLJHozC1UXhoMHggxeajiwjsfmLXz4jRBjGBGERDNNBcGPavBfehE9L9Vg9FHZj2WYhYvJ",
  "key16": "4nHvdRfAKfj7XmtsSt4BZLgTUiA4cCMVErHjPPdqmDhj2TpPTeRujTRvKwkNpry4Xvi3x7w86Jdm71UiAy6xWSig",
  "key17": "25Ygt2oAMGF8s9cwokbEbLywPD641zQxjCYYkRdtBxWFcgvdXV6B78PQ6d8YMc4YRiorPsx6AkfxRr34MR99S8p1",
  "key18": "29hoULndVhU8ixMWqh7ZCpCRoXL6FxjkVZLCbNGT74MYSoKrVh4xNdScTmzmCvqqriCFzWyFwZ3Tz53SDj9tb3yd",
  "key19": "uS3kc4maZfePWNu2SyhCLLqunioBtVcZKTvktUnfNWpBzCNGxEHCLMDF44NEPjNWdEX6HJRgAy9idpSNNSEPg5N",
  "key20": "5gVLpRBcJgBNVd5Q1ciz8mmCVMAqUywvQJuiJZZYVxij5vrpwUpsn219VepEKHhSk1Vg2DRPRtmMSsMSs9wbR2Ks",
  "key21": "4ngAkY7KbBgc9Y3PCFTy8N1rHjQaPY6KkJvjRk4knDeyCFVjdj3USmAyZxLjqT9tiyXR2pvTZefuYeADRp3Fohhw",
  "key22": "4cijRHLzby7Uq3nLNfF64FXzWFXecHRtmaLD7SGpNUBFW4QdVreqdAhKFLXyhxUQTCB4K7Ms1Ynw3Kwt8JmX53Nb",
  "key23": "63ZykGNwdzkRjp22Adv5zTsz2RMJgJ5tE9RDa5faBFgT6QAHoUcRYZQnc9eJPVXZL668RC7Dxku7b8xSrdtcXnjn",
  "key24": "5ELKBLqpcEnf5R6sS5H7ZYuEt3A6CBmu9NBiEesQfpTwsZvTrjKQHzgVm6irQer3aWD7btsaUaTNAwcBdZWtQNhc",
  "key25": "2X5Gpys1rLG38RnRBqUFezigKD6JgYYcjytUTDtzxUjGBiMUmZDCD37JzYTNuoreFeMuKJQ6mjqhXa9mCt9w44Kg",
  "key26": "5jk5ykdkme3uZ7vk2EBBgnTnCeNGCAKQrQ3Ddc9fifkuzGRFTyoHJ1Yqm5ptrjreK9455hxfe8H9iRsqAW7EM4Pt",
  "key27": "5s5aNjtN16Y1DkpeHWjxE3QTG966rPmC5U5yRxsfPehnekqHvSakcVc5QhBAy5eRgkeWM6Kw2kfn1uzjyg94kJGr"
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
