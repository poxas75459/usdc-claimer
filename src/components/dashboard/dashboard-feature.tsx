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
    "2rfA9iZcPzUBusdZJjVC7jsTseDDQ49bZRWnysAGXYuvSZZYQx1of4RP57YXLJVq8jabax9xsWJZp4K6Mj2pmTQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gxkDmVCbj1wZNU9nXbfzmv5Rj7K9nA5qiaD9yGZbs6TvX8Lr2kHjC2wdNeg6S4yHgMoL1imLY7QVXqwhvumW2jW",
  "key1": "38pVmo12v4Scb3QHELux9EFSfPdbK21YjRoxGxNBCrnBEm77tXcvwDwgsb2rVe9aKc2Lm48kS21Mx6uyv4Nm36pq",
  "key2": "5abN58AYRgewRJUcTm8aPbVfzTe3vDcExecVjcwSxhcyY7dEtVcB1Ki1ePe88psSNEBLARNBDCYVMa2dPFoyiMi1",
  "key3": "T472NBBk7R8HMRBGE2gmMSG5SQSSgZLjLUHjBye9L3Bjg2ffjGQ2AVuu3q5SrABApHMNrv9WijffQwGUi1HXbKx",
  "key4": "5zXt5HaPGZqj2mMJnKYJ6NkD98uRNCkG1Ub15TzHZ4PnnruRZUVJuTMJmUhc91ojw53XV86JA3yZYKsP2AGFL2Xv",
  "key5": "5tp7oAATwBqtohuZy7EykH6Esmaq7chCmY8S4PijosMqmkmFTvhrun8bhGqEkaNJjddeiGQ8mUEKxwMfV59von7B",
  "key6": "5TbzXk4LpKpz78SXYcfEHkjagSnanu8pbn7DDtMSUjNzZUDFZB8jvB1arBH2qMqJ6j6h5o3DjKVPGDquJs9hvadR",
  "key7": "MFyf8FF9vStBcmDXFZRmL78q8dfVTbAAZLNkMvC53HcvU5fH4KGeT2XSAYtxLusXdMQr5xs32msNP6WUgYmecY2",
  "key8": "4xCbnHTiMD9tTBKcTjRmrKPfjK7KPhfwSe4QVpkGzQFcSqrxwGxswF58aZvpY8KAxqC5U49qq3Y5h5WWozpfcDNS",
  "key9": "4bFhCz4mEPWuXea5v9rXdRqxngKVkCoW8zA5ZGJhyNgW6ZkSfEHVgup2jBqsZRdGravBC5sC9RYd2pF2qfxeoVdi",
  "key10": "2ndMr6CfKxsJkGqnGeATP6mzRtJgsHsx4jjYn6zmLQBKqmCAqTibwXTwKtEYi5eXpgEuoLRZZpHyV6w8g992SaYf",
  "key11": "5rGfNPfAmZSRtagqwTvugqddPJ4ZndHYFCPXCvMGQjjU7o3xvWeycg6nztHTe3pePSmeCw5Q2sqssCSuvznTgBbE",
  "key12": "3jPPCLX6TymesKz6cMTKDHYJr5xvp3EhnLDT9BekJVsZpLXk1VqyM43wri41JA8vtaB4rMB638fKwT2MEau9hmkZ",
  "key13": "4tnoGh6L9d6AGJh8P4tEiWXiuxsHbEpHSF3X1oSFJMtBgudv91f5m4UFAuwLFxYrnb2HyisFVwUdGRgUwptoR6ow",
  "key14": "2rf2Y6gFfHfJdihHqhKs6bfzAVk6JQ1XYgPZQinM7abW8XQPwjse61kmNL2T4qTufXRweq21CC252LR6cQEYBL4s",
  "key15": "4zi7betsRQqBiMHGpHgQsGDtmpE1SDZ36bmWZv6fi63at9e22QfYDNXbJxsSttiVoFqMt66S435TW5RHB2h3RMZ8",
  "key16": "3kr7qnKzJnpxHagSvCwYNm2seLQ4xn4znUK2ecgXpSBGdiMdBqzc4fSSfNKWw6MTxjTR8iteoBTL8uSSEwqeQPkx",
  "key17": "5iarof9MafH6q5HdaLbW3c648i2UwWg9NjEmmjXqKBjP7TwhNy97VsN4vpTZmhkaPmf6NDLyqQJe4E59naXaXsdi",
  "key18": "4nigMw3zS55gcCcBymSiQ4W9pMheGpZ8nr9toUjZWW1XCME1LiBWnnSy21nsMmr62EEdRENcKhoiSFJ6J6hHm5fk",
  "key19": "H6wdpdsRnxEvvXgz1HssMQZ6NyzYafafTPLEMQQRuNM5GUbMNfpVRzYjatKCtLPHBV1aotW9WUqSDs9FJ6gjGpa",
  "key20": "4Btv73L5frZ4bFCRiqYE5znMtCtrr2h3skcv1mKAv65vGW2r8JV94nmMeu2CbTQgRFQa1eTanDESWeUWxvzAq4Ue",
  "key21": "yh2NaHrzwHbSEUushxWAszGbbBKKj7DsVBUZzfUwkVtYip4tCg8fPJCLGa1VqQ5kJmF85RrfLfPqPi1CH48JvF4",
  "key22": "2P3cRY6za8qQ33S3Hmuc1AagwVoc2Hjtu9qdRo1Pb4WuKHepup6KS9wrduk4RVWwsDsbb6Upat91SBWUzikaWXYA",
  "key23": "3ZGaSj9rJ1VQmhneQVFctyq86B57Mbdmj8xwZiBCE69vZcdLXCSZcdFQJccJ3CA3gt5sRQMuX4F9DrskvK6rKL58",
  "key24": "33vLvxVLsLtKyzJjumdn7oPhaS4CqzBsxaa4ZyFcorgZKiwNu5LPCQabW21Hq3t1gC9XxP5SkPvxNVqtiTXHazGV",
  "key25": "dfQbixAa9Ga3L2jp1gLGkrNT2q7SjTjBSfFy2wRJJyHtETdKdDbnhFiBmipnJ6BQyEYPLmHN1JHJCKZQmF9p9Fg",
  "key26": "2sMcu1mNQrD9pQhLnXwMpVVZGq2NTs3JmJCKK3gskwqFvBQm2BbkSaoyrqsAxQP8C4E7EsPhk5TQfg5K2vSsX8iJ",
  "key27": "38HPXjUqbGnhJuMo1ZYqkJrqhc1EwrzS6YtkvCq2rPj3eZCiCd1XKmfXbWm3YsCjytjT9dmAFTjLSRqcNxV9FpXa",
  "key28": "3cEcF12hFrc1VFJC6heUcFoWBLwPqpKYk9Pe66p68mKe3DYej3mcUkSdGVjFgqXcUTefuawCFfasgwZRVX4tqXUq",
  "key29": "2so4BXyWpdKF8HsUWMen3RSVr4cezUVUnZK4eCprmdKLUXw4y9s5aUHmonH5H5GXdN6odkxSbcTXKkFwaCrs5UuJ",
  "key30": "3rUbj9fk8g7nmuRKDUxKtRMQGbT4mRyb3tS32Gzdz72t4sVheBnkQrz6yqcMcb4y892e1mdFV3Z9NrvLgAtedPVM",
  "key31": "3Yn2GqY1v56VNZykV3M78sZzYrv2ggzzk5D6Ccveuajs9WZzckjU3EKN5oo6sFSzi2jQiGW5bCA7okYa3Gwijm71"
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
