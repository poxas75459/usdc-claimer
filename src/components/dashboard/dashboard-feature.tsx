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
    "3MPFXEjDb7Mbs4k22nu7cd6R3gNJkhx6oMsvN6HBEi5SW3Be3CSc8MzFYCBjZTpHMGarv872eZh3mnDHvu2Me5CR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uQS8cC3tfyQGrtVfqMdJvZnUfi4Z6gRjseVtFu47pXJzHEMkejmqbZevEqSFoPq4PHNwbYWf64ufNytNvYS3nso",
  "key1": "4dGM2i9Cpc25asthH6Kj4zeQNi6Fp31S2r6w5b65Vht1MjYJ5UDvbGybTc3E4h5kdPwrf4sy4W5j7eh91weTLAxe",
  "key2": "4KhfannHezQHqhGN66CyyK6W56UEPB76a4WebAmXs4k3QjFJxmVCTwMoEdui95GkPVnZR3jse7nRkJCgrQPjPexE",
  "key3": "2QmpwtC4mgtZwr9DkZH2WChKbiw7T2nHVaZzmHgWo7fSyvPJ52EbFCBsmk3vJ3bmewZkD9bqBTGkcfZwRBQEtaaA",
  "key4": "2rudaB6wNgiYh9BN7egAUMgKfeX4gDLbSbHfRDr7xeLGQ8ajr8sZBKjLS6ivEqZCXXVba29jvo5on2Dsahi8bQMb",
  "key5": "3k7H7tvA3oyt1PeW6i7Y2ebCjdsZX6SqcVcqA6b7hitapMFYsLKYWDuF5uQYDwRupEnSEMuBUoBimPQ6hurSQCEc",
  "key6": "5xvYF3P7eFSkL8QqZjTNjUgeNV8Wpu1ATdN3ScXQzoEVhrxnAVfwb9YWRPdvUqvs2W7g6GuAGSvmRSAhECpr3GvC",
  "key7": "63B7qW19uooJRPuqBm9U4RiGAdqavuzrZmvswkYjGzcxLDTNWiBiR7FX53aPXq21yb6o7xcD5vtLerKbQG9trbDr",
  "key8": "5VMz6KnW9Msy6jSYTwdZGRhoELr7KGv5d8rmMm9J2SdXf5PwKnQy5rGp1bgkXLYVCbGETp8QNgzTUDuSTJdQtcGr",
  "key9": "DU9ZcUjdmGWYvUzW8XCeMMi8XMHBHJi5dTXLNLiE8k1fZ125tNp3WAb76xxxBfZas77yRgbKgqFSnoVGeLUm35L",
  "key10": "dyNqbmDv9NTPLYiwbKKAwia8Wxw2H6wZkoV6EHJcaTXw4uHxDfTzJcCqfGYbc9ow6R4HK74SVN4HYk5NEeSfCD1",
  "key11": "4g7mir6FNExdRTDHPKNsE8UALdF6U2wey4EQfhNQ4Lc9UxSFnVUgMsnAvqhHc7JVeaA75EUvPxrFLpXqN1UCigqo",
  "key12": "4Ki8dMRAZmZ86FvSUu2LA4Qnk1FWTL2DCTEwJXwXFUZhkTAdktnToNXinyBb47zYpETZ6KEJ163wNvGNPpwwhPLC",
  "key13": "2wWjbJCtNQgKDWnxwu5h5wre6J6NJa9rehxxZwRUH8iXvNhF3FuEgmgH2LaU69tDVvpmxWXdCfzWdmEEuZDV7SRy",
  "key14": "2ea8JNUWMFy97g6zjzuUacsLGmSpK4dgcWge3griKMx5X5cs3YTpTiFCzZ1qTTLuoEhXJidxJPJuPaNzdAUHqfXP",
  "key15": "2riarZzYXaYUHZ5ey16CetUn5qmCWWHhhcTZKDB7Hh8xaAHy3nqci5ozMcyEMAv4jyKFfUBSTGGeUUKp4LotynKb",
  "key16": "5dgx83hZzLaCB6iGouiMbqrN2z6KPg3iP6XQh47io8VfzNN23Bte3iSr8yQ7VSptMJJqYjUXEMLtWrs3rnck9xSZ",
  "key17": "3MbAHVBXZsXS9EQ2uxu6seJ2kK3BZmTtGf39oUXy5mDJ1nCkpkSy44mdtntZRXfoykwVmUHUTs8A7JCDMeMKEbHS",
  "key18": "4k1RYByETr2b66vuGMCgxHeCtGgiseQh9rj2uiJbdSLoQKRzkafXDfSTD4AGeh23nh2Dy3RHMYir7XeCx8yXqV6A",
  "key19": "2nsSHFUEMbS838pPL5c598uAC35AYS2r5rLYjrTahP2pEDKcw2UUomUHi8xiGno9VjnjE8LSoayjyUPQhrPnRhR5",
  "key20": "4NCo9DPydSs9YTYEkrRkgbdZwjfJHUTkBByTrXTT3LF1TCD8yPUbRiLegDY64ataEMCeFPRCXTScie2aniS873Gt",
  "key21": "5dM9DK8o5oKy5PrDkZqcXiwf7u92RvT6FRyhpvRudk51su8Eafqnc7EuekbJhCUnzvynGmexbPL1tFHDkBbNrve4",
  "key22": "4DFF31xpXyF3o4aJkdBecxvsizGBKMtWaDYqAstB3SFi5GB6uhg2eE2Uj6UhoVF4NSDL21jWgs7d4pDEBLDAHcH8",
  "key23": "435xSb4dADRMLPgLSCi3pkx4FJPfd3gCN1Ax4kTatSUrYZq7xm5f4SboEd34Uqpgbfmyfj6n9AL7q2PDw9QWmpAT",
  "key24": "5m5LJBaV29xcu2enV55ANhzPpzsfAe7Eyt1rS6t2HGrPXBtvKkQRyNUMjPoBoQh4HxCKfCfYL9mVjhws2Y5csRP1",
  "key25": "kc1dHbzTuAmCCb2KUQ1EEF42QQW5tz8f1aT9dZGBjW7wv1nfGH9fXJUKPBuqn2m6y97rs7fZigtsnJHyPZUttRX",
  "key26": "5P7PgjCr1dKofxyCtnifEYUw3DcT9EwjDN5oy7PekBrsDxt8496czFbkzvBBZvCikv2JV2XbLa8NTLqcx7tEUzFh",
  "key27": "3ZB7oPsHprXUGqFiD6QXRnT1PY53wbrdEPXh84EYQL9NH4roY578MZcGaonS48zAJN3YaXzwhkMd3Mhip2GZ7jWj"
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
