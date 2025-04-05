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
    "34BBmS96aS9pBBCX2i94cdNTmK8fRU3D4kNSncZUHPxmvDHBK5p3V9vBnxivCXpPQJwJGFDp5isTen5hYRQydC82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tDvuKfFLeQXkV86MaqXphXrydFdCRwyB2P63yYuEQW4N1zFEqShXL5iwQ826LZa68kcGQ8toQEAqCV8LVRFKpy2",
  "key1": "46oSrKgYhJDiQ8YYcJ5RsXso4aNqjhzmD7LKUcwuTjgTN9qzq4C29Hm5BEMS5hPb7buaLEx1EmcqGsQxDGnmiRbP",
  "key2": "37MuXsNKmFvcttk3iHjSHCWdcot1kzCCFkrgyDN7LS1X5tc3w2vNezcnKcTuwVUuq9duzGq5vuuGCjwzcckZsQCn",
  "key3": "4FvYybML6Loj4d39Ary3Xa7Ct98TTniTqkzNo22icQFxhfy9VCxKvRSuzXCV3SNiy7hUBh9JL1yEzfm2WCtCGdcE",
  "key4": "5BEkAEXQWVBbWdhitEywge1tgLaFgFWEXfyXBwfUpu3EsrW9vrvMuUAtLfV5SzJnK9XJPkvH7dVQfnkG4jhGedA2",
  "key5": "5beCv37ZxTE34cFBFxHcqignPEsRQCL1q3LaTtycJXU5PukMcxzUxc7abGUWTAQBTAX6oHtxvzS9CdMVUz1sxgH1",
  "key6": "Jy9KksUKZv7j9ksv9nXi35G9ge7hbmTS4opqpgt4GHQqPGHptHTCNAkuzjEJxtJY3gEnGdEBks491ex6fMZwGj3",
  "key7": "4f34nWipnDWQnmMTcUGSJLsLKrqckSFedFAqmfpdMVCFC1S6FZyvqj22S4eGLFVvvjgu6i2fqX5Ryvq4sBusvbRJ",
  "key8": "2AsetWXFdCNLrhrYtMY1BRh1GczUnG9JXTyaRniw1NZHAWbV9D9XmnGdgKK1pZGndJiK4NfDWY2Hj2ZuYvsrmSCU",
  "key9": "24BM3e49pCTWGJr5B9rAq2zL8QdMm3gJR6HtfmuVydycQfhwqAAWoFh9h5qt6UBgDfMzdgvuk2qDL7w29o8JZfmT",
  "key10": "28iyL1TVjvA32UZoG4gbC2WRu2nhxSt3N12cbtTK5H2wnidybJCMzpJ8K17mc3NoYt7tQT3Zb4kbgA7iDJmBGrHq",
  "key11": "5F1uoEHrCkVKxak5viZbJZ7pTDuP5oEoBKY2W5dVR9kkNmpAAwfDm5KyKDrWokzfzda6jh3q1TJkPLKw76a5uDQ",
  "key12": "4xPTZentKGJswthR2sNb3eXeZfzUjhfMunMkjkCxRZ4UNdb4fNragLNW41XYzMDHXX8ZtWAAD8rnmsAZmmKgRUEz",
  "key13": "2EeVDgSXz1A9X68SyRG1NgFxFX8qpnzKAe7NxUyAHqQge2U4qftc2z3gXUmN8bjk88Y6ENSmjGbTZ3omhJx4zWb2",
  "key14": "vMPt7Q79K3qJdAjuGfcnUX5b5eFR67YX9L49KyqQ67wM9B2qVadLLgYMaukp9QGKKQXp3AEkaV88BWTqT3uERSJ",
  "key15": "WKKeCRskhDY5PqbfY1a6WWCJKD8ApmPAabjnTF7hrT9nnaBAQKoy5QmvKaqQS9WaDjswhTQNid1emgrsYkYDEKf",
  "key16": "a5ryhUP2Wui8SmjHtmLQUM2PEuriZj1yh3q32a3w6BmCJXxuGSfRQvZCbYS23GnbYw1Riyrb2WwQzBCSVgZQgpQ",
  "key17": "5ss4aYef9MQgapzr41VJr8ChwW9xxFXdYCmxxoRomYFGLmRo4dRkmNiTWXHXE86HhZbqCVYUuwPFjKCmE6BeLuyd",
  "key18": "646AgTjPHqeYqcNFMCDNUJUQrAeAguxpph9284GwAAq9Zm4wTrEA5dMSxoBS64eQgJwDMmfMUPkBevcwq8tV2pY4",
  "key19": "3Coz5DRkNFiryQ9GgY4zUBkkZTYKaP7ABke8mu5xqY34GcvuXiKndVrAoLhG1SuHmv8pg63ovEjQph3fVNNQ3qgK",
  "key20": "ggmcVbexeK2dFbXjQXT8H52rM3K7MZG5eSJTSF9GYoStDY4kEd2PZ1d5WKjHUeKKt8n1vTXGnTTGiC5sWyLo5GW",
  "key21": "22TtbZ9aDWUMd2Vhi1c3MdEd1HAATNYCjzb498ijBChGheYYDvrsVemNVsBYGmLAoUPPhpdNTqrKpuCsiomohSWw",
  "key22": "4FqzxV7weyMFoiU7r42t7SHA4Jcy6PYg7iRKq2RZ3HrVyVSsbafnvzeL3qxFnT6PnEgawfKZpaEdUq6xDhtydr7a",
  "key23": "3QwoBbFcgAhXVqjB57vBv7ACFPNwT8ZWRMdMLky6BUxLoKGjc8LpaQtmDPCQM7umbXsE7R37SZkdJ3GovKZFiarx",
  "key24": "5dzbwDRcTV9uZBPHzqWSMw33D1YE4rWi3YX9mHgRLVr7WgtVphx8gcVUb8uEYUSM5VUvYd6YEPiUm6C2zJ8qh9vu",
  "key25": "5Uvf66dfPMshCcyBHbGu1tamaQWCqkMH9B4t6Z7yEXTqEFjQwNrbs7QH2B9vHKE6u8bPt1JbsRJAGkvZkL68RdSk",
  "key26": "3ggZhTaLk4nquW1ZrBr7hhHtKuLA5eme2RKpX8XjJiVeoEiV46SG91tXKLvXYswz36RdYtqgLdGdGLyiAc47TQec",
  "key27": "2oq3RdGqAeof4j9gEdYWZX7dNCwgSPSt1LzS9dNBVvEFTDpm33B3LNFNcycEzutKnAU366WgZm8hX8EA48mdQWat",
  "key28": "4MwX6mUq9DWVi4dAezP9khHTFAF9remg18iTHcZ9VtyRjFR1coAY2K4wMTATXKABgwTKDKPvDv3g1hwWLocd4siZ",
  "key29": "DHvDMhmWKKknmEQcHvUuCXKN6LdVvztjiWLZW57bMFsHN7evSzuZr4sTjdHBUy9awmcsby4av31zjaen4G5NTtE"
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
