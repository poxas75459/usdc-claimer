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
    "jcDuHM3VsJXmtx8HKtyfrdF5SsqC1sByZr548CMBxQTrHEBX7wpDidhZzv3T2dSzB2KhfPpEu2tEDg6irS8Q69S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27JjtNsRuQQA3XAFrQCfnTxNMiSMgnZGJG92S9Gf8hGYQ6QXdvQbVpCATnXbw8Jbr6e1JTXHvJDPWpz58ssWw18T",
  "key1": "2AudXGfq8D2gX7FEWi6FKyv47aMZAmRz4oUTbsL3KJpJGLijKxTyTyVA19vuy3S5GJs2UeLDpNoaTjBYorDjt1L2",
  "key2": "H4D456CYHwmoXNCMfMcvJq2BocgWMz1rcTuHbR5PhUDureGE8Mh3yoLcMCRL189qCcSRaJeDKnUYFQdScKB4bzb",
  "key3": "qBm7QjwTc5i23AkQ9vbqDnjiTZAZL3NaKh1vkLV937CN3TF9TutioBTftka79untQ4VHeEB2LoSD7nrbXvpHhew",
  "key4": "2vw4i9yNq6QSboU2XKg2igk1GtKnFNmTaLWPRc2JRJh2pdAnGgFSTmjYNw66EYYT4LvamKpFoEpoQ4XEDPDwtTxm",
  "key5": "5mDa6BXzRJP5y8rsiuRFsUxdmRd6qsgE6Kbrr97CEs2NZRhRthjoKcv4cQS8uiZXNHY4oXXWgFqutz5KpWYVpd4V",
  "key6": "4ZCXL8vz9xVNjnMg1k4k74CPpqGrC8f6KVvJB4RwPumcQ6gr6sFwNpvHMDE9MbuMHfpfUWLPwawsScaCcZ8CwdAE",
  "key7": "U6j1yW9aCAHjbePUwews4tATaCJts7ASyAeQw69fp6mCtKuYtt2QLjpF5c7QYkNx4YhCQxbL9JudHVxoDomf1q5",
  "key8": "3tFJQMZvVtmCs7c5ojjoVS5qgrVenN6vRXC6CsKqJ4xQwGaUkh28Rr1hhBSyMLFCUK9a9WuNs5E3GzLoBY7PQh1f",
  "key9": "5ydYHLgtFS1n1GPp9Dw5mAytGjkYpsFg5GarFeRXUKA96yVqYaHVA23NgB64etLCerhPptF5cNm2C9arLuL85uXC",
  "key10": "3AsiGEjSK25aH3RG2x19mAVyHXfbn1kmtGXSK2tEm3hbL8UuamKFecbLKqVMsBVtXwg4hL92LTGxDZYDvsAHsK1Q",
  "key11": "3dtiSuunqquMJDwWTWdksxHy6uazz4c1PKKvbrkmo9zaiBDgAvVUeR1PM1issoS1Yge8MtymyBHnkBTjaHAnu8Sp",
  "key12": "5b8rYMGh7bPMgfWpwChuRNFKCE2d8aQXWJafR6KLiMH5T3PjBrWnxxDFDz6q2y4STC1HRfngQSGGUYkXKZgDpkZL",
  "key13": "2irUXqtLjpFNUiGvfcPBan5po4dXa8HGXJtdn6g79wQVCFuNHZU2xMa7wpSPyWx4GtX2Bzrsjp3MBLbVAstDEZqz",
  "key14": "jdg6V5iWZaBUWXLdM2SmVA8TmvDPCmSw79vBSsq9uSmGMSy89HjEYZaqNtXfT44QAegnmvUKsWL8u8Uy1Myf8M3",
  "key15": "gVfmjYgfm985aZoRNo2qYpc19MvsBicZCpppW7P8dTu2QZU3mJHuMnCPq4XVfMxe7qzm2fpfkALzARo5pxUcDbh",
  "key16": "4vzGr8jVQKsRXSUF4fBHqEP5begBQAV8dyQSs74TAvZecAVhMTVRchnVsUKLShMaBonRh4gQ6uQqARtRhGmbPVjF",
  "key17": "2JGhyUpasnNZ5LhUjbr952fY9gkrM316L5qMEra8MXrgaCpk563Cm8P3BjmQheMYrDhjxNMmxmfmnR9JsaM4ovF5",
  "key18": "3zojKUtXJgkuhBCbLgGX98nqUiWqsLh2pLmDMffTPUrN6TqLMdjJfDdVdfgVNYbqx6WDHNXznH1q95vFBbd55Yn1",
  "key19": "5Z5hRVSbgBnvGqTvH5WuujqLcArMa5wFQryoX9FQCq4QyGTbRJdqyc4fwhESFwxN3YfcTUbWbiBCKiDdrqsbzCcQ",
  "key20": "YVfPEK5KcFQBog4sTGyrJCDfoD25DWuZdoA3k4SyMv4fuJg42MdG4nKghvNZWkV1xJEmeKDUF6rW6UzX7pH9Tes",
  "key21": "2UDmzHrjJZ2agFt5wikVzJM5Yzg7r7zPbJJmapVR6EVaeRmWPpn9WNy6cHgcKdiX37bZ76KyFTjZiGaUsp8Pdprc",
  "key22": "5cMbn4eqLXpy5JFMxNYA7TtXqkGZmED8jyVWp5Xa9faioFsVZ6PQ4Xw1T4vkq89RegmC2unSQfcHPsLvdrYm8bNr",
  "key23": "5mHta9tZfmLmVrG1X8kEKRgmcu5cvaLPRMeEMXXashAcPuri7XmDzcUXPKdGysY73AZtQULjRT2bkDPbNgTFrEC7",
  "key24": "5Qp1EoLY4kcLgSzNQNHVejWzdZbFcX2K5KgrAKRgV81VHpVPCMrW8JvK2dutVgxDz4gQQhwxWg6UtrNqstr24pUd",
  "key25": "4MTNHWRQPagbvCftgqr7yZZnW26p2keSQNgoA6aPx2FGTWrRbD9DJgXBWsS89FxHobNKPNhEa9BNgF399KbvvBaK",
  "key26": "36fptVdNrbePyMGmef6zuJ4eK6npmRQmUNsMpgVbJKYtRHaq2DuLvy9136WQXkTQgCrfB7xhbRWcux8moes5v61v"
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
