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
    "3ZiyLWVQoWYFLMo7Y8fFEXNTao5MXexMsN6oVkAfB5rFkUZLbcnARSpSzLtP7K7kdujKnuCy8NcrdvGzcxXSs7Kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HrzoFj2pGS85yW9aoJxv2F78mi2ACbM6Bue9Nk1ftQ9frTW6qWKK4jf4nQnR4iT3bwjzGor3o3tQNNNGHg5RXVY",
  "key1": "3E4vcTx79RNsqG12A1dd6Uythf5uXYMpeL1xAhD9zLegndzUAS93Jxfn28x7YKe8xeXAwW4k8k6XMxsBVqcGXfen",
  "key2": "2tFsWvtbLuTEdKNaWCu4i4bm344mnsZx41VkAMGz5LeCJSwKZiCrLMGKaHD3yiuPeBDn1fCtZQECJaWQTRU5QDPG",
  "key3": "3ZeCAP3ZSJyrtkYA3rywGvV3uAyCjB6ehUx19NYAf4EBBmN2eqx8BsrCCY4vGbjRWif9GaBrqLexYtFMHwWtxHiF",
  "key4": "kLZQQM59P3YjM7KApcVo2g4pdGzcMZnsjeZw1xzTY9VDKZSpJPEmJw1be96qKgW4wNa2wRSK4ZX64r3qmBBmARx",
  "key5": "2k6LdHE33k7C92bw4iRZUuSXQa263EWKx8Xq92XuRJJzo3k1RGdvpe75BSN9iFHqyG8YCjV9x5qZaZZk1UcDPbdk",
  "key6": "3AxJoYBZW6BCDdueqX8cfUXVRyGTZsHrkHoXSQtKK5oY3eVm6omSXU1RsFz3b2st4dY5tV46o37GNoUGEk8wCx7r",
  "key7": "4Lx3YMixU1TorgRvJGfAWneXtoQM2J26GxgVaANp7631fyJPwsS81C54TiUjLfrvQ6PdcoK7xjtXscyArZiaZNNx",
  "key8": "4WxEqyxaf9TEqYc29v4umuLS4HTGbicVEXLa5wPWCXYUaHxbNkmvp3LkmA4bVQg3r4ohmZuG7wL3sS5nWdLTEhH7",
  "key9": "2e8TV4saVVx2mDpE9e8WNW2URP5KkBdenZboYt7p6Y3ZFPpwPTK3vFqsy4DYY9aR8zbXyit5aBrR62DBuhB9ngEw",
  "key10": "3hMP1RwhNpYDmn6pRJFR9bnFza79UuNzKMYRDdgRcURSk6a1Wq6ChLnKDvTGowVziTpyzRRX4US6wbVTCorF6fdM",
  "key11": "4h46SxLKWTXaeEyC3KiVf4QTSQGjXFHwAXJfQa8LFSpzGuHxqwtyJLQAvSs2bkeTNiC6F7kyo5586M1XwsL2M1sq",
  "key12": "Kir5LHcYsshQEeBy1ST9DYvGrwHNc53ysSE1LcozwCvjdG6Km1YtV49gJY22ZdxWRVbzmJ21GSCvYQfEj9JECNx",
  "key13": "2CVo5XxmhY6LY4re2pCWvisnv45cV3r4PTogBCKR5gUnpGLzf727gchBQzVZMEeNTM4kACeGWgU8Dnb61u92Luuv",
  "key14": "4zrmMxQ82XhMqKTNZb9cz5dxnP1CJpyVqz6Jfdf96Urv3e6XYabdmSvCbK3mP4zcgc3G29cG4ww6PPDFAcwbtPw4",
  "key15": "4ecku1Bd5TJJrnUdPai5peVASRgpWaTKru7wVXF78r1NhkTvSDQCrZkAj1NYJ5gWbT57SRLQLN29ny6gg6Kbtj2B",
  "key16": "3ZvqqFCcriCmgWPM1c8HuzXfZxAY54Vgq8LqiktYc5QsajbHPJ6NtYU6orzQ8dqRsic1NRG48hTxhGyxwBCjpBmv",
  "key17": "3tSdHYSrKSPTcRpwLt93J5bH1odh9RNcTsvgP5QzgZg9LJ4nB16wcfVY8MX42uoB1V5EDc1JTKnmzCdd5vtyJ6n9",
  "key18": "4Q7Jce2GgkKo1Rim1sxDd3jctfudG6ueRXHTw2cHLbkbURbgrD8vhFJTgHJ3SD2zJEXt2eEPJxASBUuJGWZNT3wc",
  "key19": "mWjNokkcLzk5WKuNTmzwA3nbHLpVHpB9xv8wpfWztZi3t9a91SoSod74LU9euvSRhtQu24ca2WMax7sF59qVZw4",
  "key20": "5gwRWbt4yvWF2y1cvuJcgGzBsUMtBJ1v6FhmXv4XMSUZcXC1c3khPvxTDBaTDWYTSnJAkmUWvuAHnV3kpdbcXzif",
  "key21": "3yFsuFwezE7K8yTg5hmBuxxpjQqAYWYcFVzemGkWAJkbgLFZcpHy8fvSpXZgcdiLLZ6onUnAagbUojoN2vDC12FU",
  "key22": "unMYhPXgHHDAR7PQoRLMcLTzGcTBTghopwiL4y4PAXqCWtZVcFDpFmsqXWDKP62DTqygZHC4L1Ho184UDLkFp2a",
  "key23": "2trvkiwCgE3rAUrh891JuQrkuBdmAuVUQye3soWZ8Zjw4BjXFQHANRq3cbftzNUSgEK7GxvSqkdrqoeGmjfHdbzA",
  "key24": "2ndodfePrRe4zyvzfj9mZ1LKb6khyrZZMgeabJpUMy2sFDSd3juWBTP33vCoBoECUH3kZBRED4djPzGCNANomPVi",
  "key25": "5hVwtjRqWWjRTmEfUgZs3RVB5FfC3LyQZceqzMF1DUURvj71JmARtjXdGDQX74W5B6uj11WcUam1jEuby1ndkpnW",
  "key26": "4FJkoQMsAqbEanegH2QYAnaFrJwWT1a1Day7owEZDcCpJTFdPoQeQ13GBJkhJKG9Yjho3DSHnjAMVGSPagoKTSoo",
  "key27": "5WKi57BzK9GFwqPriHQkAT6U7RvgpBNmp8Fcf6nW2j6S5L8kKd1VtQVM4PC3sQmd7PWN7pfDJbm2ZNFJkF4PwgqE"
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
