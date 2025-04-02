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
    "6Ym4cB7bcADe5bHjZYkmWJNugARjJvivfuTFJhBTZ7XsxjWm9xn6FUd3gn6vD2bxZXerPnWHvrUzaYCDBYgH1xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cXQP11ikbnjkHC7z7VbhPwmnwCmrU2kSLSzufGCAaGQcGBzDaCoz3WEGWG2rkuhPrfgdBRmxXB7AeRvFiN4rpT9",
  "key1": "YLGFJ6BFCQ7HpMtm9v85o5yXshjjxyqYnYv55zcJ18bP9yn1mcwLKbw5yLQe64GJpUKxLksetEH8awJQQ2LXCJr",
  "key2": "4zwxy6cnEZQrSusZ8gRSAZ6opBZRhiCWGbWcvMoBeACYk2WJLX4fpQjmMMQnjeUw6QmAAGvgs98dHEfgvpDN6M8A",
  "key3": "5phqdWXRGaCypNZEVwMaXCmAxRsUuB1ADBEBRmkizhtxHFD37EVMb4U8B8hwLG47G5xCJPyB4ceC4NBBH2cpxM8U",
  "key4": "Qobr5bwZdaMgSnr4UDEHXrdB5xuyK2323CmpmW47NPUF8fiJe9EWxP86xtMi1LPyG2gJ7JqMS1GXZEcqkdvPxN6",
  "key5": "4zF4UFAUwUTdd3BQyimXznX2EjaNZGGDzMCYsRF6M6pH1rsUoDfMzidHAKiiWn2Q3bcUvezsNyFUhx3PTKRy6qnA",
  "key6": "2tXehWHcHHx2XPyVR4vJhYPmd1X8zJLsKx4zV1ymP5SewbXxbrKE7MHWbGSDN9CBHazVrZ6brBwythyB1HEG8yfu",
  "key7": "2o1uWimonBh9mhLALMwL3ZGYnEeYydWX1xuRMDGaYNg8yZj7BfVuGyE6EL44qGy4JTTekPVme6vRfhzAX64kBQrN",
  "key8": "WXHi2LNyufN7dQEZgeVc1oAwfKUJWnn5H5mAk3Hn3Sgc3RLkQMErbvuheK969zG3XZz29PWtM86X3jPyvw2vBuj",
  "key9": "5jzzn23gdgGkLypLzNzHNNxiffGo3oRs8PrQKC7JqCKXrRPBdvq1z9RpjHoDMF9uykpW5muMjoL4meFt5799imYp",
  "key10": "23amGrgLjjgFMAzS6NRBchvaBN97SrEsj31suKjoLVXNBwXfsUhtUw7BC17cK1zVVoeotWZoVY1xNfWgV3bhP5Hz",
  "key11": "3k3rTHeK46ZjCNRt1gY3vaUu3LrwekghrB6dvuarcgxfiTXpQEgN26HNk1kMwM2Tmt1jLhepf6zvTYZQr6byC3sg",
  "key12": "5uXpZeubWPJuaNHEwBtKP1UGRqEQjqqUFuRZATxnFJNrBtKoaS9fxeRFKUyB1SxbhN1VHCNGu9LmefbzbKNj1sJ7",
  "key13": "gh2UoYi2sDvLkxrtKJ8FjrTpTBPojAKmB1yY5VKYDoLU3yVb9KyfSgek7rPHmvGjQaEKeWFPfpkfnnpHvZke8bU",
  "key14": "4nhUkRTcQotuYT1dsBWY9vJU3iZLCyufu11ByNDw2hxRgq3YkbEa3gkzSzwCUCbp29213kG3kxo2pZoeftDvmy6Q",
  "key15": "4AQ7w2YQqJhpyAUxaGSGPcBo5syP4JhL1bZEsERanVRDLgQ74dfKPHMvkiPFSgNR7xyxBTvc9vXJn3kjZAanagXB",
  "key16": "3TwJMSwgshjQdaf78CFVaWSJANtNYRPWizCj92ZvkS5T7xjk6DdYRcJAdxa5pCzJR6RpcKt5PnQfuCgaL7wWP2bJ",
  "key17": "39YrpfbRmwVLDAPr2KdLXpUMkn7daLW3EQFywt2qjZrfnSZzY3dnmGZmmLQaUnnfNNYjQsqFqHiNLzMCtC49Q9rm",
  "key18": "4Dw1pAVxL4B2koRQNGufkWhUEHazmh1J9m8vv1GSGrFGfwAGpCVBYw4sG51ffHXnHHitajerfEHTdtuxPS5NHi7g",
  "key19": "5TqdMdqmxJyeN5uiEHd5jcJqHAPGRk4mChugmkSpqqmoBaT2y8eeUEJMuTjR7oBVpJbPxFQCUFS6AeGNm79NtzmA",
  "key20": "2SRyoSqnzLM259BKX72te9RHhjaaiBPCe8PSb8BKCXFatfSE6gDWt3mM653vRqviLVnwdi5oBD1yETLTZJaYNckK",
  "key21": "3McELeF5LFimHtzDi9K9Pn9aUQGE5CEQuSpfot5NZfbdmiMSKYeYysfCm2qoodMaijsV47MQtvhVrRDJ1pR8RLq6",
  "key22": "4gXJG49dLH283xTGae5MW6kTQ1osNC5oQDEJMJhRQPboF2RX5JQEsiCW4HgZH9HFyqEySwVwH7WKowgjmSQwcUug",
  "key23": "hJa67p3QmS9ZpXTXt3izLHMFfy6bdJm5Q1Cwka8fsG4TDk9iLGHYo6cbrxm57JTQQAtBfU8DiosTdTxenqHa2Tg",
  "key24": "56cWYseinttYQVeW7G4w2bLnfoqswBAzmXaqaJpjDEKJwicugYoE3nntX6Brm6C3mTJMwpcCL9bfb9E9y6hwUZNa",
  "key25": "5ouW6YJhzAWscGSwD2Uute9t1e8HQuC16WGZq8JFS8UGvp73eSMbhdtoLkX84TDC8vitu45tm9HS1e1Unsxf8ZQ9",
  "key26": "jULbu3zVMJaehJpwxnLgmCL6nhsab8DbcE2mBQnLJPixQLVwU4hfuuMKFYf3ncVam591DicQg7GyX8Nj3ccja5K",
  "key27": "2AS4csjgszkHHwPyZYUhGeD8YNgLnSBFC9WscCK73E7C2Rh2xrvBWdkj7R87NbZMj9s23Ki11NnFJRbupFSwgrzA"
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
