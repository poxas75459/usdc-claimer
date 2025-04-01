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
    "64RG4eB7M3k5JzzqQGDnGcKCFwnqvZxb4ADGTFwWrJgfAnf2vVXi1zbAa55v22oP9wMYAY8vmRCi92B9fv9jekkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PwivMnTgBAyESgRhEdnpBM2cv4TW7Y2enTHchaRdv3zPhyJ4ZXaBdQ1PyKAS8rRLXmH2bKwseesV1CqKLhrbNg1",
  "key1": "54J9xaFgviEy84wo3JN3WVi5RxsQEiZPUpPXzJfSuC3R61rzaTVAPH3nHU3cBWo8CVzXE1TPQriu8ZHmwSdPPbXp",
  "key2": "2cB17bnYkhBWhws5MUYkGEfqucxhdMESB5kZdTREYTv4gfwe8NjH115fWKdanHSKqNL6EG7fLnwKY6ULoJ7DSC8x",
  "key3": "Msfx4PUacsFQHAmAF3nbfgiWWMJaPKYwfDpqd9Mihza2vksqs1qANoTjMjncrPrYmJfV2bPnoDnxyMU6bcHo8q9",
  "key4": "2DCuHNxf2szU3uM1LaxTiCDndMM7TioNQqbVNus9DiUP5vy3zrVmGdTWS1wbdZUowr1s7M6VbFfRQzdjFEV1zRBD",
  "key5": "5nrm1qJwrmKSstxA1e8KDvWLbhT2QGCizRz4nZF89HurTJ26U4net12Jng3vHrNiRKU8u4MB9BhaxaPfxqEH6gop",
  "key6": "4geyWtqJdVnDDBNZekXNYdi1bekHDGhH2GydV8FRAfPoytmBdJxkpEB4zX9iVXL1D2XGKU7pZ8A1qZfWR4gt3RF8",
  "key7": "59ePaZd558aq6TcFPzUP29uKxqcCBdkTYHd3e4117ka495BbTjyb4aKhfkEUzpbjqxsFgrB45DdB5Q7Vo6V9KGLj",
  "key8": "51vJ1r8bggzwdKEbZoG4stbZsnX3VKPjXDBSjnhuM7qnG88CDFM9QbH9vHVaemGXFQnMp9pcYaZ2avwmcy49b35g",
  "key9": "4NPd6goC1cypuqE1JrZ3jhDAuWrzJ4or53KQKzGFyeK9B3s9VB27sYtFsqhPVBnXB6Tkjp4t5Rx3LxNvYwxqbesQ",
  "key10": "5V873ABJZJm44q4uPYXC4h5dLhzGpTqdzdR5zBhRgHmX2GGsMT9umGu56SAPGQChpQJf1TK8gr6wDTkkDbyznG2x",
  "key11": "2VEBWCHAnaw8YsPJXfoLQvkCyvCF1uK1RMdk9mdfCYbb1CFDzuxSn86NtatTwKq5QyASp5Rd9S1vGGmSCCqVyQf9",
  "key12": "55Agk62bbkuy6KVpqmwh7hqBLVKsJBtuAV5vg99e2fRSpLXwbMsMBHeF3VAduV27k2fJZnZni2XTDGUBJ4WWS9x2",
  "key13": "ATwSbTCgjQBLw7MSmSSyba31EAfXXASSuCzXVJ3YmVVyJDhpSaUrgV8fgKcprodfc7EwwhumZ5apJuVFWmhQUWq",
  "key14": "3yBLCU875K4ioeMSArgiVCrvMEWvyKTkiVqvLPdopKanHY1vrWfJUzapX6T2M3bBcnT8tgD7524mZ3mwK3svS1WM",
  "key15": "46P6Asci35BtULCR6S4d4uFzVJRJn6qBE9KH8vFPYoTDX6YPn26mGVABkKtuQw2Xe8CXSBEAHs9b4GEDWwtfML2m",
  "key16": "4tcv4Wgd2n8fL3ZzK35J8R7DwoGt6cBSTdub3VX9aDpNcVCdtrZqFfWnSYtxoALxHgsYB9GatWAFXrfwuqfRpW57",
  "key17": "3S5pAKgKN4gsZhWwMRckwJZiBXEMtVD8AEjHuGa76DDZmQFgZ4CQmYbmp6vSm5ZBgXtWK2akABXRjKKViCKUG8zq",
  "key18": "37PCjkHjUEbtKMP8km3oxbjAiSPKEPkUHNGPdABDTTy2jpan5EU1LZscKYb6FMaTTevFPDhdjoNtYf2GBbKPfjpf",
  "key19": "4MmYjQ6WQp2XYecxcwRQkzXU1cvyqiCJ2ZpR4vYtLAkgLCogKx14JdQ5HfEpAgYw2iP7nKdbe1t8b1FozMZ7fMH6",
  "key20": "3ffxPuxH3oRB7kDKHT2dc7yhCC9pgD81g9mU5PANirEYnfPLCZ5zriz1D3j4TubeHWg6TjeoJHiZKC7AeqcmdoLL",
  "key21": "62LRTNe688ix4zKkpX15eMQ17jTRmn4KGkt6z8CvCReYKCwHz2PhvLiemShgV6vqUVD2JHksovNpkRKeFmDhsNSJ",
  "key22": "2TLMCXJ8usG1ucJHNd1eVUdiTTEauT3wMtAB2JQb1hmTwAE6ZThF2E2jJot2xx1EUx4caDpr22XnXT4BYsWiZ3ms",
  "key23": "4RcZHUGSRwW1e3bMPQVoa53b9ddjv8bk7rh5wgAbRmu6yP545EBsezGpKRtwGj7v6pxuREcMTGpg3CeqLXCGhJMh",
  "key24": "5YsYNqGYxrV6Wa2YtGq87VuzSiWko8heLbx6ZdUx1LybyGb6mDFa8x6QNXGtG51v6ihPLSUVRwdhrsxpcp7C9TiF"
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
