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
    "5WNJX9w8gpFDSp2Y1xMdRg9qWDKKQz9K42i4B7YKD9L1PujErRVuJ8cAnh16oMXcGfPzyTukwerWZTi3R1JENvYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YyNwG5AJ29La5MCUALqLc3VT31q7Az73VbXiJ46JrdpDWFZPYWwJ9Zq8SHhF8BgMU37g19nb2mwcg7A21xR9khL",
  "key1": "3ou8YBsXCiWuVGfYZDPXQoN7JqLukC9jkGP9ZqK8rMwGjSzrFJqvonNAXbyX6TtD42bQsuNUfqCP3D8nCrrNxzew",
  "key2": "2pLk1vBKMyqMfimzdKLASwUrPZiXXroasAUDfbfmWY92K7BJF1fB15kwgjss49LbRZCFdUMeVDdooGxqcZABYYT8",
  "key3": "4buMoN6W2CnMRK4BPqYsZoA1GAeEFgoEQ94eH71GJKdKDvdTySihXZJAwZ4hv6U7rPR1QAqmASsfM87j3hvVeMtc",
  "key4": "5avkT6xcu1Gktg8xV43K9Ha988fpFGGJGYvjxM9tTUsxpx7ipZj7DHurtpqKAUQCZxecFPrrNyzPshomaDFznmwE",
  "key5": "2SXPcV1xY8vnjhx6VWszJpbbuNc7r2ZCB9xqd9eCoGuPfd1bqBLcTqxKoyKR9P1UQe3t3ZZi6tJShtssKELhe5wN",
  "key6": "2kKvYjNrecBnyzm3dWAthEJoeANSFNiRJrvfrM6Kzkh3u22j1zbQj5LadAPoM8TMYevQDWm9BZ8zmsqtB3TitVAR",
  "key7": "2BuDujUEtejyhCSwyAVuschxnf4qeVNDjoJYpsDJMHUuDpjpfDeSyTj6segSnv2TGwAZYvUDbKa6KrdjEBmnau7U",
  "key8": "AhY8LPZMYRR3PpfJDWL3x648ZDHj7ZkVk6SkhKFxBdqWxRhWKqnxayHi3mFcjNB1ufjZmChFrDBcFEmkmYqmQwK",
  "key9": "ht18kBoiJX7cW4WWxsTNKym7QWxxeSRwKmBFVoYHwGJDRCCxqeADYreUR45ydLMxXZTgtrGS2rTEeaUjoDxpMRr",
  "key10": "4yTgNyUar8fmjjiyBwjLqs5cXbTcEG9pSnvkktGiqiSPmcfQy8MgtgKNZcQLeBCrsCZAkBcXLoNqFrSCi4ZA7SWX",
  "key11": "JVimo4dYXQvSBa8PQeQ2AbPwxs35WhHbCTCi7WqLq8zmaEz4NNTWSCacwvoWCAwdCsFLTdHX8Xu4QhmcBq81gT1",
  "key12": "61E1NtJUC2pad7dMzvt5JZTxvU7gW8uJDAnSkFthkXPCkHq2P8qiudUnKJP58NWsTVvRqTzKbJaUgb6G4fwQ7M4M",
  "key13": "4qWTBb8mtQ8Du88mVNH2uHKacrwaKjFVqgtZsJBRhGNvM7etG6nHUW27iw6MiisTDr62FNrCG21cGnyofn5fkCq1",
  "key14": "5qogQtJUB4JxcnsneBsW2y6m3CQ89Xh5rBTgdCnrEy1J7HBgwzWyreZyt6Kd8e1YiV4tM8aCpMXZYHWQBJDadRC3",
  "key15": "4NCAiYXX2tVB6cBye1AkFdJ8ek3YrLEhgsuzyTApeGCT9tyvbmoEum1oUJX8dfpD8fwYJtdH5GLhUtXQCk74mA9u",
  "key16": "5gH1mXypoKEGcbMA41nYNF9KrxYoAjd5qPbt7x4hFPCf6Qwrw5V6w4ZWk6EdJcn5tRXdKh5NFvvA5YR7CJj1x4ng",
  "key17": "23kCUmJf8PrAtoDXhHKwXcYDgra73UVcopY8cPTPtyTybPJadNFjgNGZ4WfhfyX9TnmKpiNaAseruUcbrydHPsVp",
  "key18": "K6fn7EEznVQfysdJfRhUYjccJfZM98n5yQC5FQXTCnkCNbWhZVyERgPDrTV3wKdAh98HjPpWhjjJymSEez5gHLP",
  "key19": "2YXZfoTQEDnjckLiN2xJa35Lbo4BjRvezw2MFPLKwHiKeCuts1Hp79QsQkHEKSQuTaKLweFBXaYZcdQWHxdyWjoc",
  "key20": "5JdJMax1HGGeQ85QNyTCNSHjMiYK6atszu9nfhVxa2kqs5uJRwkZk4PvuZwDd23FS7Qb8vVVaGCU4RDGt4se2nsZ",
  "key21": "2omiJNXTXYmLGPxnFyt1CUiaWtoe6aSJXkJZr1qfV9wkVtFtnC9V1MSMpUWev2mLGJj1Gcaza4NpV5VSm8piRLiL",
  "key22": "5nhqGfQT61ngC1k33mGf7J9jnAyg6hSRdto52anFkpHQg7wr53F38Z9P8nj51BxLcPcJyiuzxLkHV1Wx627iBqpL",
  "key23": "2k2VmUGPm2xamhhMDdg4i2ZnBZjtaFRLXWHKN8NXyXFCiDX19MHox6EWBuxazUstcAQGG14a1eADCZa9LwUJVHeq",
  "key24": "4RUiujPSdGujxwXhR2oo6C7gMZEncUFfNHaeGM9cc5JhcNYmofy2ANEQ4sLCMuGkdoo9wWSbcGWafq1FT4ijF9Ws",
  "key25": "3382dCQyJB5L8RQcCpFm7ZfTEmN1c8JHDsYzwavPSew3gtoBdZzyW6mTcLAqrF3BzdmmrfaEX6Y4UQgjhemxVWb",
  "key26": "2T3g1fuaNadr7sfQUbV4xzWfJaYeBiAUbgq4Tdnd3ttaQP92yPqCXP4K6mmyiz4vVTBgBfsEFtWpbyAsWGw4TeCX",
  "key27": "2XyQbYrongoum3VdqpRvtUnCw2PCRVPTf8uwUNi64mW7Jh1ZjZyxk4Rbp3CXaRaxWFf6ynNpwz5WjJn5faFkczeS",
  "key28": "fFwy2gt9GqMYbHCD744DbuJhqEnTriKw7APCAmMS8KpU5icKnqsPCGNpMqDGQyZmUsRjFmgYm49DcXvkeANEFkm",
  "key29": "3VAwBhqkEUFqS9xtdovm7aZFtEBsQD5uBQYLr4RNGVdt2mmMKiEvcVVjAbFeA7t51FXXNuhB6NPoc6nB3QGNfnsF",
  "key30": "22NkHZKEToMPdneTso6zZHHVZhHu9wj4J9fDhLHDhRMUoy2xKvMwDP5zyAUCxR7HBDb85WNCRqf87aTx4MdJs55c",
  "key31": "5uMFdJ1Kq8b7aLiU75o65rPTx2JSGMqoJLrKAJL4gLbFeV3vQJaK2DYeNojKNW1d8EuTDcMTKvHDS7EhPi3LVmS3",
  "key32": "2AeNG64kHjxGA721iomWnHi4TSVdYeLEQJT5wMV6XVkNMCwZFR7VE8a9kusyfbDTdj3xd9fMuXwimC2Dn8xBHwgK"
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
