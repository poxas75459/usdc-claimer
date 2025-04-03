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
    "3sc1gr87KQXgb8qLHzy48PNqpJKYds2YiygBa54rmUbQsj4779qUAYTnruh9BcMyCxznmoRygQL3ccSesdcefowH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28jG1ezMnmXMmyP5Hu7wEiC3FXG22wKFWQXMoUj2JbymHkmE7tfobqaTaAAm1wRCXYynfypxwxrNWd2w7Cxja1Rn",
  "key1": "3Fa9nX4D33Xtr31PobGLir3CtCdMSpiXyWZSQuXZc1jvfzSYXYNm4mre96KYE3sDi6WA57qcJzhhy243K5fo7xgd",
  "key2": "vHCDF7aHXaAoNQXRVoNFQTTSpAzeUNuc4JfwcjfM7xspHujz8PEEHCoa5dmonLsUBD31A664c6K8fjMYGn3A1kV",
  "key3": "5MzxbdVJoaJ3QGbaPcau6C2LYhyjKmZJfDnKLMEMqhSKL2heFsU2sca3cvyz4s4oiP2GacsBPk9K2f7EYDCicAqa",
  "key4": "4BDSwVSyk1MCnQvLvQWNne2yfWhk3b9tXLihiD1ZqwFT2qmtTVrGmTXr5NtndN2eJYEhvPfw2E3t6Ke1MJY3MLsZ",
  "key5": "3GY94oJP6E7qynuXib9hhKFHGa8CaBVxuNBw61DE4QDWRDAEZk47yyYLa5STZWcbjD3ecHAGM9HcP5KxZrMkG7U2",
  "key6": "5GU4e53FzinrbQgE95N4q3Cgi8yZG3eDX9LZ1EzQsdYPujAQZF7VXhpRKDZQQzkFAtoqtbwc31iaTUBJb3uAF8oj",
  "key7": "LWqXZuQzRkNAUjJesQfxFK92Lv8pLJXLFCjup1Q74knzDjt5868PzDuXMPd46JYxnguSiR6DnNhFzxAvsPj2hYu",
  "key8": "3YArbcyAqyzyhYqeJnA9LNe4hs4VEduGiRUCMwZpSfNFZxgJkf7B7UyMQYqLMQaX1zibZGxFVjAdTHvWDuWhnam3",
  "key9": "3jvzvkSdUwjaUtt8zWeP7uN1kAeVqyjZUBHf7zpY8s57DS4WFsb1k7ph56qoKky2RaFs6iVjPpX6QF39S1ABDUgm",
  "key10": "abxKDhd9RcCotGUpAz6Er2hmdsVtPY3Espk7QbhXf9yY5gKsNSCzsN1CkPfF2Z8csSfez38jFmd3TsuEUp3AL4n",
  "key11": "4dSBtHSWPb6ieAwcGaq47VfAQ4GSJsYuNyPYGLGMKakYkeKzAYkrMP6BwiY9WDAgBtheYX5re9X4c2VQxNMfNPyA",
  "key12": "5k6zHAFo5gr1zm5XGtkapBY7nLwHGSzntLbcsLocooXGew5tE2YnknRoPRB9A3Zsxt58r7GTCuQjp7dSpiqWTFGr",
  "key13": "2wi6LNPPeotxgTj8xhh3KHVEmRrRhF6FgrqhH2PpsGvRQJofUesN1CYFiBYBYFhTLcf4VuysD9WyhVMvXGU334j2",
  "key14": "Y19F99XREdu9pKGr8DazmLnF3cXW4kh38EhCPXrUTC7sv4gFAaVTiP2QqVMSbHNrxSsJiBXq6kf1GJWAx2Zq7i4",
  "key15": "5tVjC36e6EgrshMchgwAqZpZ7yy3watRmKfSqn3TEzaQmPpUiNApYoZdKKMtcHvDuRVLG99HWx57fEtQHb3FT7Hz",
  "key16": "2owbTwaiKhiwUcQ9mMvMom6dEyqBRudeB1TMwda5aAwVN5gdEi7oGrRkFafwupB1RP6K7ZX3jNicbnkPdmKRL5y4",
  "key17": "2JNgqQxWaTF9PmAN8APxPWNXdenMVHLC1aNnHbXMhviCkGQwYdrZNTdn4RkoE7mGMg9CqNErd15WGmuWySmMwcgP",
  "key18": "3eHPGHqnqyEVniZT7gJMzRWVB64npuH7ptCo57WLefJsdWZ2ydvTkZWq1GwrVkSzHh6vY5YmE9TRSzUW3LhftXC1",
  "key19": "67Uv2dhhnEmFJSQM6phVwtV633N5Aiagcj8tSyHo2MCb67skwLH9PfPAHRE4si9iMnnmcwGsRTnZC7uASZEaLwFL",
  "key20": "5uqEHXZ1THiccpzNhHXx6MhVAfHh8mw9qr8WsjKTJsQ6acz2TfMc1PprGe7bEQLTPcGMEgk9goGvEKghLDquHvLC",
  "key21": "BwxSPCgiTbPo1pPybCANrxEyp4QYh7YDjm4HiZqbhHC4tBeq9ooSnZh1hbZoWnmVYLeRtXUUbGpqpawrLV9xkWd",
  "key22": "2nuj2LeLFuoiNY5BoSEL2b9WqYfEDxdQvVnoExbeYRB4jtCeCT389ufYFCbWCmXscEWKLiy2vEFWdZ44HjY68bjA",
  "key23": "3pf9L8DRmjAG5rLxELxnDTmtF9w5rth3houwTMYJeqGuQhvsf3zYgyFWEFT2m1tSAQ3JtxVfHnFNKJf9rtXNUFPy",
  "key24": "5V6MLoqfT1hf14FDYMHy8NEhp68s7HjcpCpAu5Z3dphB3CgkaCD5DmE69TnTCVAkLTnFuNVyWdGjLJiSdWWP9zL2",
  "key25": "5G1BSLkTnPuxLCyWjxU2NKTbqtLbeP8C1UjrXVosiNe5VBxB28dKTSAMJgaK5AwEmvNxYYMZC69UshURY5sAAu4w",
  "key26": "3RBxQPesq2jrXjCgqoptEeXd4wsNzSFpYg88VFHHsyAdojvsqLppzSs3LTRhWqHrKJfEgEdzvjiYaFeyAkMqYShp",
  "key27": "39G9w24zwUSvkpzZcD3e9HJTBgsfxL3uEimd2o1Ck1hJXeRJtdRYdVbaqSFf1eDuwn3PPhsGGg3WVpXwhf6DmAqb"
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
