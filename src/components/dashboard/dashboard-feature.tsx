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
    "54PV1tX35F6n8126WwuPtpxaTWmTqDtHX96hRPTXtJRdo1tV1wY8ZM7RchXrBU8a59GuYudnH1QvM3j5tu714XNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CQdrcetS4noP5PbtU5LYnmpxbLwn6cTRgz9kq9LdJaP5bTBTD98Tz3QLgkE1nndS9vekaHQvZ48AkDCXNkHXAcW",
  "key1": "5y5CkkCZ3CKFZAHDuEvVAuon19E416ABzdszZfuN32Dh5df7ZDDReLobYCLmSsGs2haixeLj81dxFT8GrtFajebZ",
  "key2": "wqSZ9JuMYU2aiqcAyBVJ9hbNNpL4Xv1N6Z3WWgp9WNDTpbA8tdfQ8Zjbhzzvi8v9Uny7oSA7GFEThaZxuLcNCcG",
  "key3": "sD5TvJ8FeZkLyrEzyt6JXciXUtbS89Cy3FpXZZH9jYusTUynj5K1vBLdtmki4mKBBP2DS74VZto6bBw5JLehs2Q",
  "key4": "35UbmARwJi3RPu7T5i3aCF3aQvhGV6HCP4bbsRnTBdgLWv8XbVq54jLVKwAf65We6xkWc6fp6FibcpdxG8mXdpaS",
  "key5": "igfHJPYKJT7Ub2Lqyf9LBkYP4eL1vEqL32q8RGBpguTFtwH12aQqwRFjkA96snUGVQ39EL2TFy8wG72LrCNuJxb",
  "key6": "zDTMJCKMxyTWBVZhvbW5DrN1DiYSHS5DDAGagB97pux6cLeXts8vac18mahb79ZpH6yXmUBMQs9Zn9TnLMPJDTE",
  "key7": "3ryuwfDP4tEoptbix7zYxVeWA9CmFovDtFegdakvYq4Z5MUVSkhvMiHUy93hozWYZFLJsHrVpLGYjHjaKA4A25v",
  "key8": "2JkKdvqHguom7Bh41sKGpXyeE4qH94TbWoL5xGF3AjBQQahTrNfTJ1oXmuThptFdKRGdFEPakVugHpaMgFr74w7W",
  "key9": "2uq362ShUmnshf7RzvQm86pvJxNLQS2P4ZPrQaK9QPr8pwMVuMjzDbPsZ8CqSdd2jSvpL8BP8URDB3qgUY6jMU7E",
  "key10": "n3VytgpnPwBnwZMPLfh7tgaR98Uv5j51AzAtgoSJknv5r8QnHHmogVbshtgVURtBzsmPqzWLVAt7fUV6WSPngZN",
  "key11": "CP8yMwsbxcfXvoPLku9s9UraZdGhJZUNfhJ76G4LHJetRpqNgVpfXfmxWBPQUu9C17DdLytx6oQGwbQLbt45nk2",
  "key12": "4zi2uCE3MMpXbd36XXZHpy311C1KLF1cNbrnwzoA9kha7RR3hdqSVu7n2YTSZhBFaNZUyBkViAX7DFeXVP6iFnUJ",
  "key13": "5fXp1Yp2M3roMnLVczhkH5bGXuDdKinLEMi9igCkawJcY4uZRbJmSMovxhkAjuiZXhxseBiRj2zdBLYY9xbTWFxP",
  "key14": "fiHjzRM8f5o3fnjz5zAPvr3dg6vRtZKV1fEGdPUYXNGwQPNVotRmteoRE1YYw5xKiJJAbGdhLEBgYc6EtcRCU5n",
  "key15": "2LHamtUZKnvh6MDy5jyF5PSy3Wv3X8MbXwkhaf1GrUnHNzvnHr7XzJANV627hJKywD9PGmyprdTbvZqpvRH7XaQi",
  "key16": "5PEgzAQrrvPetkWmN33ottysr7EPobQ1pyD8MKLUgbyRrs5T6FsgTEcHf5kz3m5TVnzzC5HdyUaMNizjpauaN4UW",
  "key17": "5Rvj3arW8spAadiqjQKvJXj27fK1GGTwqtFhtKYj7RXxGwmj8bfw3NYQieV6Nzd3UPrVPBLob9bczk69f8RKomZ8",
  "key18": "3PbdWxxaDQrUG5ofHFZ4N3EaTuFewwAvdxc2HxYmGGRgWpg2hPw9SboTPEtufTsUez3wBtfTCaxuDVBH5SsK1CgU",
  "key19": "5ai8hVzZzpz2GzbnJkrhRZTqm9bcRG3Nw38Z7JVGABke9hhBtAyRbdHGuvUWJLjXw1WnyRE6JqounFosa3CaCp3k",
  "key20": "4Hntrn2o1Rh3SA5UFm9YVDxicuPqaCUY7ZAr6zGsZQhcEszzpPJjjQzEvws2nWRiWygMxf6j1VCWJNtDfiGQgiFV",
  "key21": "2dVJa6AdBTYBecfxCjjEMRcamdV2WyoSKSAFJGp99V9ZRAEyqxYp1t1rgfpeCXb85UZbJ8LWK2dyTbfQLidu8qtP",
  "key22": "4wdk38dd6ZP4mMzqJfUXU1mqsU8e8gPjNUCvz2f5qKettAFbL2vwHqyph7wxFCuTL3cEssEhFxde5brrazb8S4W8",
  "key23": "3Ndrm4bgiLAVxWTZbTH2s9Dst1GTB6wCL6zyZxoyGWV69y5Q5BKNcB7qVnsKe16nGbbvrqbxHqCTesMLrFirLyma",
  "key24": "p7xWruEyoPyQ3dyH82jBxR9LKoe58ssFR1BC3Nmdx6nWSNUpiP3VTMMmS1nYKcg2Y4oX5GLyy8dEVNw383brjYp",
  "key25": "MZbqKuaG59ZZe8rjJbeXxF39DqKit5c8TucNAAiTA4RNFSx33aPqgdWLgLZyoaSBJJZJpqXZotEwzWVm9b9bH2Z"
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
