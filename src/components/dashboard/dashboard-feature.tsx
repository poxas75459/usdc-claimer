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
    "5Y7Rg9F7t7QPvZi2vCX1sZQj3B1s8oEhyWUM5JU8uXG8QakXqb2ZP6jDGRXoMQYTncXr4jhQPWBHYbMdosyWWMQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d11KBUsTGBSEuZSZp4FpjfTTakQCaCxspw8CuZgQvKJ2Ejjuee6GKtYf5VsdaPhBRzn87F6u18ymdQP4kXeGNX7",
  "key1": "5HXxv5XUJUcRW3PK1DWwQLQq7wK99hgbGuGqPydVVw7PvKrFVKvE6sMgdVaiLbM91X9k72MEvGCALx6e4b3qTAGq",
  "key2": "eFr3gdydj6gEp6KertrkqqYB6eXWycgU2NMp5zhmVXqNaXm5J1LNRPKUG13WkbVzBUnyt5uE7opAan1A3GGsiYv",
  "key3": "2NsVXgPAmQRQdMymFgjS8KwKf1Mm7U7B4Nq2cD4CDqwo6rubvUpXZvgxWFpV5cnPMiBpxhPbzCnZpxbNbMK32uiS",
  "key4": "4quuZuGiBeYkA7eYFbcwXVnUfvT7GCa6aETDoSFcFTDNRt8pBcNfgTJjha8eRKu3EtQQJWDaC5PyBkFprvReZLVT",
  "key5": "NR2pE9Zx5jFMkMZRR978aJZxbC6M2gpyACVUCKmm2CAUWnYNf3Yfhvf8Tox7yAkEvdik3f5yXhQJ1DRKeuMrtBu",
  "key6": "Q7Pj7MksJCbs8r7eeCqEBKVeZB8pMFTgMoz99EeuPrcfsEuPiKKEoF7PoB58XhYZ7t9QQg41GL8cNnuPavhC1ze",
  "key7": "33KhW6maEuUVB1Mr9ViUhfiZ9d9b2UNpFHDmijv8FCaFT95XqShBMedbpbc8PWM5pbjfPLK1KRzC6w8aBbwQyNm1",
  "key8": "5rK5re8SArfwnFQDiw1zFtULQjNorTSF1KSEg7mrKY4EnbrkiLSupgCYdLLCm35arnPpMSDfzZYRJQKvK6EpnNrz",
  "key9": "BZru1QEWBq23VFPDQofwX9gqf2nM544SVJUe7T7dH9NthRsLfTZKjDUxJS3UL4NUZ1UrW8qxTGgTDbohjM794my",
  "key10": "2pcJkDUFYNa37hpKzprHqQKjTMSD2UmjfQ3bRoa2uwFXubBh8Z5b5JsFY8d5E4Mn2PXdLtsG1G5pYqkyWuSZAr1Q",
  "key11": "4Yke5zyCY6AfjbcFzvuCxCQV8zxHJiL3ZFh6GYciFN3ymz4DAPXCCTfGSEET15WSB5VQbpJu6BUpK7prpL17BbWx",
  "key12": "37xHtANcdKv5QRyuNW4aUqx1tYmTXXsGYJgBx2NoPBZiivg2Tg2j37Vj4KFrymKJuwQHif2sVqN9gQo8mmQJrocZ",
  "key13": "4X2w6r2rCkF3cQeQ2rVKh4Ep56Mr8Du7Ws7QLHoGtmbcuF57jc2BjEbwEanwxSdXrcSBAzpE9vTgXTkcitcbeNwb",
  "key14": "4CeW4dRsd29UnGTU8d9njHeua7fUboiJt66kGjFbjr5txq2AmJbNQZwep1BYVVXTnfpDKPKc2g49ehF2rEEQoizo",
  "key15": "36s8eA9UNtaKWLNckvc4Xmu8TZ5qbSCp3YZsi3L7RfmYiHZrZgX2gNKY55j2NLPxzQqnSMZ5oCqS1RfLGWzyWdhu",
  "key16": "5xMREz948foyMPBTBKhFMEYPyMw6vm9FY2ru2yQHWo6kGM3CuHx1oBV9yxePdpRNJLo2oKqsadhkaScVfK6o8i9q",
  "key17": "4V6dPNhhJeXyDn3QVPjxA45TcVJiUxqKYd9chj2ECWRDrSi3WKcCZZ2oFqoAoEtE3U1aGTVTDmeJx2agPEioJ85j",
  "key18": "2ie85B1QwqhL3Aet3d3x97aDED6K3iqq3rps26dzKKFiq5AapTLbayeZmifkQs1Vd85qmgJPHFbDhe2WbFSF7FWr",
  "key19": "2D3eqMNFgUDhhccdVRn6pT75nQ11didzbJzo1o3H3D1pcY9s2cAPtWHEyWR9enn5riKWDNaWu9AEMxEeJW3tPhfX",
  "key20": "3VRidAUXAoHA4GS1rqZ83DcYRaHkBmqyfvieerqCPBPaiX5Hyp4YS6KbTr1QdXpu8qS9V7Y2DAaZJ9oW2rqwQ8oG",
  "key21": "5LuhWT2EQsSnmx3gP1cn7gYQk4kEteMbhwhYcLZxNv2EckBbpSD94BHes9eFr46AQnLUCKjDJ9LhQc6dkoWWBjBD",
  "key22": "5mudmCsFdejKXDZb4iWHQBEf19oh1J4ZA4qwy6TqWUrQjaZGrBH3rBNZ8sEKCb1LUrsW9KcFz2AxY6P9qe54YYzC",
  "key23": "227nfioWXN6haahedQDiqG8eXHPxaJNGyWM6GEc6MWxPeJkpzofuLiDREhMPhji6fB5KANwCdt91WJMcn9gFJPkF",
  "key24": "3fXLzjKF4Ep2tWjuYWyZYLaJdjrEGW4wjTuruZio9Aq7X8yNUhJ78LGFJ2RpygEr8HSwCsRZsyta23iQ9RnNXfh8",
  "key25": "4sHCTzRwVw7zvJ9ruBVunoNmTve7w1DCMkJXAYrk3oCCZHvF3MvUfEyJ2Z5VQffENo5rN3H5wCCjpAQvn47NErgD",
  "key26": "ySMw7oaHaE6kd5bf8PwqnFZ7Eiad5cYLSj1yNBarDAkNfFCQCkh49wwNSGouhXvfaW7RjPZqJRXzoDk53YzzNaU",
  "key27": "cZzc624RuXG8VHh6pCbQ5tESNEpxxwd4VozH9NetmsELoDMpDiVE5yAxx83NstWmmBxqkzWJ3FGe1dwQv9FibYT",
  "key28": "4pvjoDZYJqmmMM52haRHyYk2vcnnwXxVnxdcX1oyd6P1MzLV7pHkckKCwd1UvjgTEfYhNK2WotH1ugEXyeAF3YNs"
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
