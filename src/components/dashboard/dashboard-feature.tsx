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
    "2hGKs6buChgEkYYF4zEttUQAdNCDyReC7YYFMTywAzPjFiSukUtT2pisAaHbUt6nvzY1MkC5Uy8jLqiXpK8PQbhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uo1Hbtvvag1MbZL445sD76nvZqF1W27FzzmiK6c2VKsGyTeXxfhbuPARnJQjQpVntuyn7adhWSjtPXAaXmPc2Vk",
  "key1": "2eVuQyVttRRx2gLNN1RvwpSErGn2zB8VcwRD82jktSNL4AK5Fq1NZUZHbmabTzczBLSJ3ENB8ifqTXr7pY9Mdpbu",
  "key2": "5Km3H4taRDtzhM2jsB9P6oB4G8zGdU3MNP5WtufHVGxSkFSRZisSWqLMpgN2o4fgj77nCXnVrEG4MNfPetKkEhye",
  "key3": "jH1kK5zagrDdD8v3Mw4dUabds2kXiy8ZSHEPacASXrMrYPgk5mPQFriBXmjn4MLXNkBHjPsjz8NXB64UiyzZUW2",
  "key4": "2Sc4MnCqZ37T2ynjxeug9Ym4ehAs8Jknir68QTiPqKEgwggW4mBjDxeQKx7E8UTb6Ym65xWartfw3r3wvooFfX9U",
  "key5": "36qPmHRVZs5xUbbp5Ke3dEMcJvzXDdJgjrsM5RRTdDdZnyGkfTJ63SaD5BiwwgsKy7ytMfpLPpF9chV68rKtkEE",
  "key6": "EeqcKuu3CzZt81kWDXUUDZC9fKQ7zxkRjWGQpqAu7rXxHdZwgxrtSDFhCeF1HD82ij8FqorDoK5sSXeUxHzdaCS",
  "key7": "4kdLpBaw7PnfUzkZonq7LCMPeCtdoirJkj4YYZerWXU2ES8YEvVrSsw4DRGoLXLaGCXkRdVEymv7HWz4whu9cXgX",
  "key8": "zm8GtiUNJzUySLacJdAqgnSwFqcLWjmgaEp6Ax2y95o6fPwqceGobz9WEZDRXxndSpmcxHjKJTJRmEovg1zhtBT",
  "key9": "8curr6npmq5BYyEYi4pXfJ6qug8hTP2iswTXFJjRKUfzQFMfBemgTdeAAta6DqXVcMsRE2UFgEfFuUnktuwS2hm",
  "key10": "4f69xHpS2tkEWyQ3w98aczf2wHztWiLZegfKGYsAJVozHvb8M36ZgCjRp6KGAtqXxUAmMGN2qC5f2yaHgDmRcyYm",
  "key11": "88fgjDSqvKXeBf73U7UfPTySz8qZzYhoRN7a8e5rB7tLwd1rwncwJBGyLUs99hV2ysq2MxRVkamQzYXMbxhq39w",
  "key12": "29aeHbfuLdL7h5vkAWaDJuBU7cHG4oSreYZcCVQFBR75MiPUsxyv1Hw7SwYe7Fp8xhQta5uSyBf3ZbhCJkJoi3T3",
  "key13": "5UsvxQFYLmc7JWdEPd7PxAhRwC4cJCHe3uk9WrVyNAQdCKUpBWnohNGQKqvgEJjerunuK2BKjyzxzELz4PWSHyrF",
  "key14": "btbuNMa452br9qSPyJH8WPVa5T52AnyUcVgru37Ks9dLXkKhUQBDLsTooCytufcs2G5LVGJGqjYZNfUA9smXGQb",
  "key15": "28vsZ1v8qN6MDX7Ja2Nj2HVFkJnD3L86YAHYaEAzUPhMBWgbGF2hV16NMadecQziifR3fZGmacuYwsVJegdhabpA",
  "key16": "2mvEL18FKBV12BtqFeBDPcEt5EZQCsa8LnSsSV1SvVdzEKE3nkG9ZTUY6jfYayspNwk2jComby69R3pSsjEr29B7",
  "key17": "3PCTqcF4NRxZms7RrVHQGpN3gYS1h8r8yp6ZSTKAH8nBa9ktXUYDuGz8i864GZS7xF3Kfb92Vg5RpLYFvjik6bvW",
  "key18": "4yCqM1j8dknpPNUqN1JyUP74aRrf4AGHsrC1vEhZijFtouVdq7aHFHqdS4vYzHEgdYcegJq2UK6Lf1NJocQCBGrk",
  "key19": "5MrKptx4Q3LwntWWFK9tbLzoJzg2i4r7map3PkUvhfbeabx1E67Ayq4GgcXXzzvPi7uoBW1XvLdMtPP7qhkJ78ku",
  "key20": "3BQ7HSpfzDQN3ag7cxb6JENuWveigPDS9qHxwY7dNH5ibueT5au8FWv3c1iKBonEiqes44SFNacy2GLL7hp7Mu7z",
  "key21": "P82gaLspVZo4YvqL5pM3Hnc422wU4hHD14GNErvLNB3CMHmdkW1Lqn9qbLHScGZe82pd7fBMHbVgFzTKAuPTdxg",
  "key22": "3zXvNbBA8NDdMFXYAPTAddtATop47dfHMZ5UL2GfQFRxuGjWN65iLtFvN9ApX4Vz2LteefQUQRBKFLUxgEq3V4XK",
  "key23": "4D7KdFC347tZGZhJwjQk1PprFxfsxmCu2q4AkdEriPkLr3iSda8qidAvh5tUSQVhTSDG5xviKVaXngME8c1oh1Uy",
  "key24": "X4BTpsNSizF3mJWV6vWsRDcDtBuR3AbpAToYpXf7sxbLJ3kg6GE5qjg2dL6vQQd67xjQ2kvsoCuaTqkukr5xjzv",
  "key25": "5jRwirHzcAAenGYsRfVfFGZKvpMaXjT8y1kE6unmQADrqWfu9zLBmdAQqndpngoHKKM3QrtfjbCLXrCkVPKzHYHc",
  "key26": "5j5QYDQ92dbyoZLeLtSUQAhEdEnfUwghsfCCLnERzVsdmPjHaA3TrhwG62YzJF5e73rfNQuTyeff5cfW2XB6Ttex",
  "key27": "2XzTX8HfnteiwAP2zppjBr7S11vXC9fXDUTt8Rff2YRp2Jsogja1vd6oWsRjTCpfUwMQwn4AH1rD6dgkCTezdPV4",
  "key28": "2f7vKMpEeGLoJb4qnLCZTF8Gr1Rbnim68BaxMLnqYcKk9mNwdB5ZqneTer4MEbyt4K7LRyhHSgo5GxmPHZ2ay91j",
  "key29": "3uxCiYrqpQMPbWJKGX3RKAfQ2dxpmMbRHtXZpcDsWjFxnG4QZNZ1h9tZGM4F1DrwNELLsFHPvEt8syZKGRAaRjAz",
  "key30": "4YKSXNc3v9pxuEA6LatPu9FCCPbmSqr5Wm1CbhYf5svLAvYvbAQUUXBaACgHPiNeLKeYrJD96rrBJikHViQz69S2",
  "key31": "TWZFPRmBvgotuV2DAHmwHE74WVPPBjhrrZBEN1c7PmQrWcbteP7GZaE9sxSqgdSDesmYetp1TKZCv2Wb6LrAmSc",
  "key32": "2QxQ1s9i5fetPoWefUtFYcHUKsmsRJabtTcR4FMEAPVQRZ4pfk26ffnZdDjn5Lg7gEmz3Xa9foPzkVxjDYEgKePo",
  "key33": "2sjHf8B1aRzXN2LZnd18kGyh2Fa76guRXBEDksBvryo1vVt5SHyNrH7Bu6U7ALBN3TVmqWt5s3ebUgvQr2mmy395",
  "key34": "5ykQG5ene2tb2GfWpWYeEiJ1cHtYN2d3RJKAvpfyRMCvTSNqxDQZtrPh4cLTJheQryJefnzb2Ka2XBgwKmub6g8z",
  "key35": "47xKubrWbRiUQVDRqMt7kfkRZjjKnEUJLhyB6gwY25hbZDmBaWSLYiVk9sewmSzWg5L31ZL4AYRe5tLD4D7JZX9U"
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
