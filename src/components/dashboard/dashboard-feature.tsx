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
    "3pcNoXkrXrfxuQE39vR8xfeSpWZgW34oxGQLUjhFetHywimsxfCyWXCKZEsUw5wXBFKN93zBisGWGFo1Qbz4uyaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zWQEqxL4fA7LVepX1XmsxPYXgMjBVrmWjKpDPvf84CS9K4pZMgEBUnt6TPdKQQpTLsxHju4hccaRyR45YWkQCcY",
  "key1": "315N9u5kxxSSAGqLBp2cDsRjQsPpqqyVBxwcnpZxPFiiC7tJYwT3pYM27Cs9LgnT9fXVqAhqnXqLwb8JKhqWkcQT",
  "key2": "61KWSuMQyE7o922TmbXjvNBZRc4RLEzFTpfJwTh1xvgRDTGmm88xiNQdukPCKmaxPAX9yg9c7hVKZ2A13QjhG3rW",
  "key3": "39GmPnnVYecVGppC5GRjVV9fWbqP27LjaTmCbKnjVUeoXPeLNYz2jnM2uonVFXtoFcD7CU8R7k8c9M7fu7U8Kjcc",
  "key4": "5wJBQeanMs4KQ83bMySV1ovnTaX2BXZ6FEizSkwyUfv1MBjBsamgvxN1SaQJYTtTq9u7wkCmydmAHjn2L4mNg53g",
  "key5": "51ZoqbV98kETsfhp9qJVe9bmUyTR7GEtkqxYEJ6vqSAznd6NcHVFBwacLmHCD5E9utDRGPYRMxoPxCwVfAeHhsSQ",
  "key6": "HPGb7PrzYJiMXAM35gc3noUXtSUNWJpABoatWDQR4zssDdZZWyt1D9UUQGw4q477UoQdbgoCCcHSfZ85EkHEWtm",
  "key7": "4DvzJdgFMsT7z6Lmrao1uL2NaGdzmsupvHeKmFFv6qZvN8uF4RFmNzF921njpZViavL1AjToR4ukbwE6DEUbhLvF",
  "key8": "2xXBm4i8j7r3zf5dtiAXiA81581zsMY9KjWuvzRLfZkLcjiCTDivb3MzwNLDizazoCszq1L1aTcNGZ5KtwXmj9J4",
  "key9": "3ZBQbaRkoGo5QpfdXNChUzfQmeTv6gRuZa19PDFQaTyyrgAhB3LsA79jDwHu8BFh9FFhESUpUQefYxRtGT9GKK8R",
  "key10": "3eCSDhxdyTUjQgsmvfRFCViacByZbkYjd5mVXcNxkFKgiaYKL621oXGqQJg3oVfX2CRoHRHCiKF9MbQToaSZyRse",
  "key11": "4Gi4uhoUtZi17G8NPYQYw2YgF41H1VpCer5v9n6wk9xPyVHyzNpFqBo4gmAzsUB8ZNRXinBuQYVP2qdLp9X92XUE",
  "key12": "3ZeMWWfgz1EpK19j1KftCSsDf6Sf94P2gUn1pKL8WLvMb96TojyybYhBzzDRvTo5FrebkLxeL74DPeFcQtQgacxo",
  "key13": "4Hbyh6DCejbtimRcjF8HzTeWJvjWGHxnUCEAyGVPAikgN3GwCC2LC9arTA2d2jzk1JFU1YDssCJK6ioAQSSHRL8j",
  "key14": "4VmBrUbjB3A64hkPKpsunABaqU4zHNRJHgwYQM59nsZMoXLq53Ktv9LNYbtB9Pwr15QHxJVx2SoSwzmmsri2LSrm",
  "key15": "31Dt1qN3dY6hfECpEnjK5QvdmND8TNNfKpBSodHYyj2SqAMHpoogzjzRQ3MiXZFCWEexCkCZRAce7HoDaJFhqFMX",
  "key16": "3SGiYuJnz5WN3kEuvE5jGYPFVynRxSMordymjyFbb5EPWALh7dwRz9ZEgEMtAsz135kHmN6G1b35WVic1EYMe8FG",
  "key17": "5MeNETvYPn1G5cKgmcAaz2WCR3dkGLJLprwdWi5aXrdGJGAteR8kBFuhDdyBUYptuX5tvEeSpPzNcbWErLHLaAYj",
  "key18": "4Abv63vGxe1RjJULEhWrmGHMz9qnf7m4mcTrZ5UHwn6xxcYivNz2UrMzccTCF9oNkVM6UftMSx1min64JP6AesPC",
  "key19": "5SAqeT2x1QPyDoz3DzQujAsHkdzvRfzdNnGW6fekrU3Ueu9opDtgYvGQu3J4czhKxie61GJPzY8ySeuGAbPK8ZPx",
  "key20": "5RkSZ6m4XyF6sHCfRbAYwRKybxQKnnPYQsubYMorTEABy4Lgk4Wwr7xdhcsP7gmQepTGmm4BjnT9CnseSzNwCKsK",
  "key21": "3jNnvuATyDChpUkaNYe9hhDxo8MJj7mTA1qccskE7jeo1UUQLJPEJF42TCVJU5LDvmu6WSAu1K5wAXDEsP8xbRVi",
  "key22": "3ruvEKk5x5REuGpiUquUgaq81sfksiCYuA7QoeMjVeKnpTwgw5ZyyL1CrK6HpVrCgmABJSR1BZ6QscPYFjRNNEHa",
  "key23": "aJoCo129QMRHFf3PeEgh2rtc4LQQ4AUjTuV8SevS2QdiQre1qmvB5V3yxdHfm1Rpi8gmwJrYQrBxBSLuNfvLVqg",
  "key24": "4kK4hCH12yXxzMkpyUn6AuHGBfcX6AiVYTeb2TxkKo2r9kUYh56t9ghy3Bax89Sdw7MKySEBMNKZ3m3H2F7M1885",
  "key25": "4kTuLexCKefbSGLS9huuAVsJfsDW9JuJRPz7yoZNsZWka7wWWPe3CrmxUZ9343HpHuHxtPwHG7LJ6Fts1k4LnZD4",
  "key26": "3GrMB3xNUB7ANWeb6J9z6PSSxoTTQBknHkWxxfvg2mXEFDM5Rxy6oYU78i9yuN9FG2au2ZW8HNW7qa8toc4AUkqv",
  "key27": "2ruE2tmYZVUVRbdGfbvSRSK8MTdzpdb8ji5pUjVETipxPM6ASYuYudG38naCXYSXtwwPhzYrxt5xnPrshnnLatXz",
  "key28": "4cZoJAyKghCU5bEEEg3BSB1Nmy9BmJ16t48mEZCoC26jqjk13vmU38CLD5CPPLWkXH4ZFhkVnuhXLyA5ndMJB3aL",
  "key29": "wiAdf1k2qYaqiZoTDrCDjSYtC3cL3tNAFA9UVHeY1nYmMirp2MJSYCGKNsTQ5QP1g53zoSNWngUyLq2LJ3P67tu",
  "key30": "2L8yvT78MkV1J5aiCqBz12SzmHp4EF5h8gnhQXs7HzLeo9upL7L2pkJF7LTFfZTiw3NtrYoHhckjJCvVnRyfYJnb"
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
