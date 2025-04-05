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
    "61Q3nuFu1fbejVgJYhRT2P2Uo1qPsxoSEoF3nJS6jxjHqKarHM7iHxMYE5tBFLEhLnsNo5nu6PTgtTwYF9DVvxhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPdLwBmh8cfYvzfB6V3Qp4693PJgUTjKGTGCKDKXp956wSrp4TTfRnoCXS1DUBw1TiZJuRuRDP4ihXdRb9txewh",
  "key1": "5bGzc1pock1HRkoUogc5Gzb8LcUe1qiroXPs7Q7pvi3MAKT7DckMJ4ur5MBQC4aP8PHNREsQs3NHGQnThb3bypsH",
  "key2": "Wu5ZtE4EFJ8UfUmivRKdroUa9uiLpdrutQQHfjz3AyKM9GRYvsnWPNG7PqFrMxYWTjgyWuS1bdcMSxskiATCPPo",
  "key3": "3GdxWH57iavWR57smVDVTDH1akaF6jFS3DzjJww3HZW6sFS7vpM29SCMHfCtFWzhrqMgzdNHy4gJ2XXfKDnKHKXk",
  "key4": "4bHj2gbDMkJFzPD2yEYTo1NfT3CYrAbKdRJebMuRHrgjBboNyu2bviXnWAdagudPSZhrnexyMfGbf3ccPhXQBB8K",
  "key5": "2jGp4JDCyBF7k3h5pj8T5JTnM7vvUmngN5hhFo6ZCL6XpV2DxWArziNE3ysNtV5ypsXKHrgPrHbrGG6ReBYvzW7F",
  "key6": "4DJP1B1ZEqo9Hcfgmi2L2Cvr326Smg3dXyMCwntuxyoqCXUMv8RRsX6HPFrK1bVUg1NtFb8u1QYU6bG2gvh2FDS",
  "key7": "5mQzxEqG4TR9fUX75z5RK6SJhk3h25eeoE4Z52E7NxLLeU6PhhiYamvC8GEDZ4CCqWU8TpGD1ZZqgjJY6u2hzWZY",
  "key8": "2WeyGU3FsUa97uyZcUHF5hQNgkikVBaw6T4HheC2XyHqUCANUrqE15Gfq2WpZk7yRfEYFpNgXMCj2bnXUiDUeSou",
  "key9": "nQnby87H6A5RgNjh8AWPQCnREUWb1Akdw926JBGYxFHiJEiB3ygd7dFT3GbKXBo1J8iFj6x7ajMQG57UvmyqLd3",
  "key10": "5UJcJPExh5Py9zFyHY9i3GrTEF81RGXcJgppwGyYRpTypcMpa1QT9wJqntmg5EexBfcRWtbNG8FE8fvfekkYXgNh",
  "key11": "2kYpv2oCoR6USC7BGBgY5bvMpXQJxCaxqEebKwrmnmUaPD5KujHKYsuvz2o816DASL9L4YkdWa9LXxr3qCqMwJfH",
  "key12": "4DnBMjY4KnETBvYZE5t234HpAMAKqq19RygoK1i1WeCW6kbhTQMsoGmRNuJiuy3Lb4H7fkjYhxQs8HH1ccrsiXnK",
  "key13": "3eNrRzdckVnu883UMC9JSAjFEjxpCT75N9RotRVnbNdVmt1YWVQriSsYSsQBGNNqyA8kLjL5v5RU5peJpwWV3Enk",
  "key14": "3346mNeNCVugLCUZ3SSNY8AsXWZ5vN83agzKuBKPCa6VFaq3YZ2rway98aFV4bQWshFmMuMmdDrNkd6uWyUKvA1v",
  "key15": "4EU9CKuPgqiNpmC22nN3cgsEcGW9VRCm2DDrrY5RUWN65F6cPKBQRxAoQa3yhKaqBHbqvt2u97ZfhbboYeyVbFk6",
  "key16": "65HMHcPzAxZ6Ag8PmDvo8dhn8KGPdMUjiCyAsBkfvTLFBQ7XqU1pLPS1Y5aHfUntKJ51rV1P72oNqLThnRoh6KJQ",
  "key17": "3Sfh9xcQXA3mRd6CWdXzZDTfxV246cjjTaikUC7ND7u4baFdt32hvAkyKW7P3bDQjdpgHkGSGUkFBU9xN4SxwRc4",
  "key18": "2ACaJLCS1KRKw2Keg8KAjjSkQAraqLcYmPckCAUdeRRPy71wvZ7hPedtBTJyHYyZYd28jsHfd5tWSmfQAFa1pwAY",
  "key19": "2ZUwYADZTkt79JUnz57nQrRM8EZvh6TT2mHjxPnTvr31MV7WqeGMTU6BCMHrqLpz767rUxesEcTkfquohpPA9QdT",
  "key20": "A2ppw1jqgtxXyw8zx8Hag99vVGB8Bd2JBvRFCR977VqR4GEJ74MzobNVQYgojo8fE8HWWMbzKfVwZaiE43aUxvM",
  "key21": "5AEiodWR5A6qnxQ4GsejyrbEtf1obbsmVaJ3zkArzoz8A1unuCL3TYmBW1yJweX6WvFuUgACvPMfMgFLwWwoAA1q",
  "key22": "2SFbrRJVfvQfjzsE8yDdWCZrh9dn5yAWoGhbKgXGvpMKGfsY3av8wyhubXmvCZueRLazgeq8P4R776Euafk6Xpik",
  "key23": "4UZNPNZEM4s2NDhpotFBDPkwAVmp6drQ8wwsjpxSMCJfqq6Xt6UNmZXojrgjEbzpWNtxeksCT1KRgGPeGW8pMUv1",
  "key24": "nigXLh8RLZyitDxtmQP4Joh7g2tvNviqZwsaQTjapMNkGvFLpSWwR8Zn4CWU2UNNsgLmme1UxKN9xsGnG8Pnzh4",
  "key25": "2VzWdXoKNGDZBu3otg1Ah5GvJgibjf3gYY79Xqfo6XdoWM4xH6Sxm6Db16AsztAPM5Nd9V8Nu7wpDsqdWev489RY",
  "key26": "3wopepFDMbjgKTUUMcr1t96i6DYypqARwvQucVogy9z8TUGJYzPbvKkWwo7sDaHpfL1z58spJXtKcG1kZTr1Rbcr",
  "key27": "2ePGDvkWEwJfUjULdjWA37qNXJeW7gjjn8JMvHihesAf4QSVKLtoLPoKkfnY2hUSVfDxWderVKimqFdRBGA65qgB",
  "key28": "U1WqwBevKBVELY9pbc3vT4dRUNj12XN1nLX7JCNVDxdK58Yq9WRk7BmqX61tipMnQQ7rS72UqKtCwqtytfCy9N2",
  "key29": "4dNW1SaPofUNAnn71PmwCM1XJeTM4sZ7nbXSry81KN9E7nGtQZNCMWejAjqusNt5Wr3Bji8GTBccxDrFmez4Qyo9",
  "key30": "2aU4SAeuwezaEXD2oWhRTngP1RDnnyxgoyyaftXoMvRoPKirYEbdVH5QHPfnGGbMLcLsA4QKyBFtMZiTUNHYdj4M",
  "key31": "2bh1yhntWdc39aTp8EeTBdxeWNPjxd3QP8DcABmfPh5pTgCnicsFQaDfWD3oFDyw1yLeT9yixtKPHGGPCaDFAT69",
  "key32": "5NzLVaUPPoHRfKhyUCFmY3ipgCTyD4ciGSoWr7J5CTWVDKS3zc6HaosQv2QwPUzfccfj9YmDuqJDsCmDJGtWnRqj",
  "key33": "XdjnDU1gqEJyGG4ifetNDQ63gUzsuUaEDfFJhXVYQ2vbgdRJCMdpUXeBP9UG4TxLwvFDYM54XKrn7ReNvkkoAFu"
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
