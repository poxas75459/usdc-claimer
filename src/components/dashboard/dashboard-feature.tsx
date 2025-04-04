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
    "c8PK17X7ybscW3RTiNXnbnp3NtQBTdP17BtHZBVqSTcDPtoGuTLKDQJCYtgX6Bk6hpG9DpfQP49GsY1RwkKRqFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wBx9qGNA3RJfggA82HKhCf1eqNdtJRGoaAu3BiTcxUrj4knVSZSaPLMqhQq6WBg7GENmbeZRiJFtjgn8LLJ2gDA",
  "key1": "5jnEGAnmFj21S6TCsD8FMrR9gS8F4dFGGr78irHzTRimLBn9cnM827sigmGcxXQwN2WbUQ4W8mGYZRYac7ybhg6J",
  "key2": "4zBWLujP2SSFxwMBnv9NA3L744zujuKF4516JV1PmEtSz3LoZi6bjXtutvikMYXtABLjvpE7QJsFkuvKoFsyfDw7",
  "key3": "4xT3K1hsT9RQzSpjSnSE7oWRScKG2bcFTzm23ApTyDDGcf5nfsHC2nvmKPAixa76WpXRC8VVBfxpT2g2WSpKkFXn",
  "key4": "2TVPf4Rmt1vT79M9dFWekiYyr29bdaftnDn41ZMYsnanDRxrohAPZAPBpk3WSMbyKp5eN6e2sNHy2o7fJETsP635",
  "key5": "5kUcBuHMwT9DX4A7Y7TkoGPte8M5cTMcrXSbQAmhBe23GDA72cDrMn1dJ6W8jAur7yvT9jSGh8CnmaxvfVaV2s56",
  "key6": "3Nd7PFYgRYQLEULwYH8p96yQD1rE3bpXvseMhZmnDKFJyB1kucRryMEhJggqEwXKAqM2quuWMS7fhuX2QeQfcyNA",
  "key7": "3we7pwREBz5SPyiRDT5DQ9RhszWkXKBQfkaMNTi3drgCtvTZbdVMZubiPt91HdknicwaMJwBPx3W5QijuNZ2EYCq",
  "key8": "4UZS11Dgnfo8xfx88htVxmzLEgXFeZ7Pk8BMekZjraNyPQzHQzqbWRqQushYW3536V66mTLLJuM7bXkFcHDdZVvy",
  "key9": "58ccvfqToLe6838hwcDR35AzKKMuYy1hAraq86TVCNaKMdMeSJps3qk2pEkJGmmQin8znSVUbrsGzLZqiebFqcEh",
  "key10": "2fZUQjK3TUTBarpmhVyzrnT6USkpRuxc6J9zQvPFvVWDHYX9Npe6XXS8UuHC2uqx1mUGU3zJx35sGaykaJNPx6Y",
  "key11": "4Fut9qu2b4utwZPJ7JyVGNLEcbATWeTudHLjcpd6dG8wziRHWEUPN936W9U52YFjK6ktn6nCq9JEaGNHDCwsR5KV",
  "key12": "4GvNaVpZ5hidonrAMDhRsyn8R9BshGWW1QQPahkacVK2NN9bQsYS3ayG4tcTnVvmDSedkZ8j5oy4NePHw6S37nUp",
  "key13": "WAJ8JxLQJPM8RCvtwdQtyJzARhUAvKhPmFYvqkc3v7GqRxKKzyHXg9s2Z7iKdSJxprvBJHPtSQQLv3gwTzi9iKW",
  "key14": "4vtranS3TJPiutrwKFsjUtSmjp8QNintqZMPz5C2w4KJagZtG67xE5AgoKvXDBpYZsthpyeEsWZP8PFWbqUFSdMV",
  "key15": "VppJyp49D7xjGMzoPh4aNvSXR5VFD58P9NqLBmoHJ9wNSCb3JAn4a3PBpPMBRsoUG8xLQVJYXBrwE5GtEbUx4zs",
  "key16": "4FjzSA92Yf2L1u8dGJNqLcvMwWaGFXWGhP2sdQ6ZqjYkPesq6vQCtMCVcN7LXvfu6LZy8zzys74QDvGVfnZVaMfA",
  "key17": "3aj4CQ64XgVpbS2qj68KymPtYbUrYEDj4v5fU8yg2xqb2p8bu4NxSZyxNTYw6o9PaUicBp8b43MptPAgEzgxvXvr",
  "key18": "4LQ9CtAAgGkj5Y2LbbU4sxLDVDPfh9iqz4oLS7zDxwV2BL9QBKhGCqpzUaTZgVvKhsydFgTPGCapfvNaNGysDCpX",
  "key19": "2DAzvvUB8DZ9x6Ay3i5XNmLgYmmHBWK8tWY2g2VRgHHA5J8roJNfQS1oFkWkn7JfRHMZT2cqXpHQbEayXJb1cEhf",
  "key20": "3A6v4CxEeaiJQJXGicD3d4AoHAKMgGLdguD2e7XGNVL6ZfKpxvjffvq34z5qsUoBsgnrpUUG3CVbNVe1jbNjBra7",
  "key21": "49GJShPVSAtAbvkEGfULYER8EoqB1Nkk6A5S3EvwSfKG3LUnRDhwG4mLSsVLvejh2rbBJjCtD5RGoX3ks3KN72QK",
  "key22": "4LWGBuq27ou5BKMNCL5B84xQSe1Y3zfzxFm3L3knJ8rpmjGZ98jre9en4SfKQFzDNWbiRhYvLLZSSPpNFQdS2EWH",
  "key23": "3pnMLs8YHGTxWvRrXh8cBZaqA76gSdsu4WaJUc67TUraZ5U3Cwgyye3TJiY1cQNTnRdhMnDJSsVwqEmS12S9gBZd",
  "key24": "2UFNdC1kAT8MPNHUfJKnzHsJ4RbCDE92RXSV3V3FppmmrcA87TCwaUHFg37rMFe9CBzzWGbM4TvH1oXAZ6ADcv5z",
  "key25": "25quCDdNtJyJJZVMEynpkiK6bYkG1AhwUrKSCV1MGtqib5ddXTTNEn1WTgYD1VTSUojC8RPoUxm6ktMpsX2cCUi9",
  "key26": "3KPdm6Fp4QdmCz2yKC3JBw9tfkeZVU4hDoAC8BkbEK5gUuLpJRRVD1LKCiJ99TeW8QLftjRNsP7QoEkD6EDRnFxj",
  "key27": "3fqAm4RVev38KbwHwEFa8avfVGPsafuttwv9ENEaQm8D6xjX6Lpo6ftMPoBT9yPKa2aAXwye1sdJupwwXYcp54iY",
  "key28": "4VPJq8eWHPYjFCYbX22RerWVyRFtUFjPDQjVGpPS73BVqu7wJ1QHK9L7ECjzN131RX6i3D6UgsDV4dfM2P4L58Wb",
  "key29": "3g1c3DKgpNuMdZSWcDe4wGcYURA3oDKqvfic5aKwK9HGAPyiWjvez1GGnNmUJAou1jSoTzhdvfvetw37XuRwXAKS",
  "key30": "3pWfk12awRTRSZS76vBCdreBHZJMfZGc6HgTW52fZDT8BS3814UvCBfwpA4yqvDq3VSynRU43vvUZWDysNwvc8Kt",
  "key31": "2LM6dBeYWahzsgsD1XdrGdj99sLB5ZDxUGKRvwepATnC3m273ih6Su1YKAHVnC7gMEpX8ybCvA7HeQuLYjwwVqoL",
  "key32": "HCoaQtEJEFaNUntS5N9TNLm69gZVhkJe1QTBYTxDvGK1NoGc67CohxzaPeqz9n3pGG3WPP2euUTegxvDV32vKqP"
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
