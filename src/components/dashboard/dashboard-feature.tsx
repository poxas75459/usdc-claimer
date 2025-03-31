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
    "iDMX4PvpPCxM2C9MXsd1VxVXPAoMGCJPT3Psj6m6uEAuReT3W2TgqUFG9b9TEbb1Zx2sMXS5uW5Px13qJ2GffaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kg9w4ABwRv5ACJcEQAKKvpCj37kMTmYspvAkYmhxouZX16aanTSV42M5q8cLWdLpgLXQeMZWGdd7eW2a7WVJoN9",
  "key1": "22HBCnW2EwVFCC3Kvm8AQtB4kDE7BE6m478VF8mAYJXp9VFzdk9f8UTaPkYj49Nwa2f2Z8euU1hyUxHhUsQ6tTrH",
  "key2": "3GCiFrqTmc498YNXXjs2m11qU9aQnWNB7orUVFteWUMVJBLDjkUyfRo6fXBsy8fkiH5Z4TmbGERtjGSMGhoqajE4",
  "key3": "2y63527j9XTBs9JPyzoBU6LQz6j5Xadai8cDhDrmM8jG29GhHAjnGmGK3of7WQ6MULNYFQtKjLudi97UQr9StPRf",
  "key4": "DTuKHx88tJayaRgp1HaGqqHWXyYP9fk7BwX1zGZeJxgKxJKa4FQC3cc8Hgc28zg1u8SF2iisZfj1xkifnDbhcBH",
  "key5": "3CH6BJQd9WQ2SmNh2WyK5UYGcaeYHv9t7D6z6YxxWttgckq13ChaT5d2vNQDgeAzAtdCHNFApJitkXEwLb1xVGm5",
  "key6": "3ezA48gBbeWCD5KRHXMwpKPBJBCEGsQzHwPRajPDw2ZgFngnP2rwEuuuwhLX3mYB92MAwABoCYX5qimjckhp59c",
  "key7": "2jGmVesDSrJuGDAfBtRprFyZJ2fmNBpoK8Q4PuNrxmTFQrTi7eZ2bf5TQut7drJfrptq236MuHkt5Z2MLd8YJtJg",
  "key8": "9eCUy6nCFwGSMepexEG6BgwKFg3PFys2vvqp1xKK11L5V33WnW1Asu7HPML1QGek1PjQwVKvFTdLu5vWA3eMH7y",
  "key9": "5JDGMnzyz4f6yhGX1hzzJ3Kt9VSf77MEXeiFFj2pzgiyyuG5Y837FYsHgjwDdmCjATpdcVStNZJbCgf8G8ACdUzP",
  "key10": "2RjYMoRVRhLr8Dd35ueNv1EkFmntPNE6XZbmQDCmAwSZoo9wM2YQLkLbSTQSW1R86GtX9p2NJWDPbULyjZms6M7d",
  "key11": "2JYFAbDBDDrKxBkzCz8z2ATipJv7ri3aZjUqEadCiB1fFHYt4cuKdY9WzYHrXAAK5R3L8WjoZh4v6LdMRSzPyxTu",
  "key12": "2h8T5sDHwY2XZVWy3taQweBmQc2TPQj4XHYsGTYcu9E4f2VJryN9er2mnoY1V6dGUuDfUg96NLymyx7rs3VAWhPb",
  "key13": "2GbwoChubUHAmtifWMRKPDDSRG3Zn1URsryzRBBw8CMNsqTz7eAzH9Kg9SqgdDLKefPWckZKiCQef4zeQgZwk3Tj",
  "key14": "jN2kfAjm2jW4JcDvHfnnL1136XZryeFFf1Sjm7pimmYJwFxCvzssWK6qXZiH2BWX5pexV1i3fs3wgQd1HqGomLQ",
  "key15": "666KawWWzrigMm2uW6cWZyoLVbV61zSUhQdK5PbhEFuZVxhr8ZCHFaBDJmobRTqXjFDmQhGpUg9uVXYByAkYXkNb",
  "key16": "2pKPR4Tu34N7uLUou3nviDZQUtCm5KvruAoMS3XFws7E7AwSZMD6U3FLP1VKfvZYFYKNzUkBXfTSznYPT1xSKy1S",
  "key17": "5HTVv4wD9z735CiBizDKYvMNY2cZHA6jyv39ztYD6AnyqsHBRe9mt9EFwNRngM8CtQ9NF9b8i3FRvKsNpCLyFRm7",
  "key18": "2YgoU43U7SDY2fFzyv9GXrDPWyPLRfbV3LfMZzRwYcrtcqh3rJLvLt2uBhSFgMq1kKE3DwvsvdGEaH6s8pk41moy",
  "key19": "4p9v7hk73GnLFuPtzUXCGQRuNbcZWsfLDgfJkqUqpMUiWvFKQPes6pRBVZK8iTSesDwJZJFxdTt7WTFkJLU2zXVn",
  "key20": "4yjtss5kutP3BDGLXKnB26RJ92p6ELtkriaGuTbTTzaDUTRnwqKzDiycErnDuXMDKN4w34gxS6Pdqg9AMxkepLR2",
  "key21": "5pKZ3tE96ifGFh2M8DMq85RLF53ZCAT8SAmPERWB49cnPgW952rpUaXAoLex5NGxWPqQfCNJwTXELvVCUcvmRRM3",
  "key22": "59ahpvjKq7tszJQiShQhUPq7aHzmjxzazpU5XthBatK9Ph4Ts1vFt9BW1DooVqYuGLPQPnUyCDNAS9PS9vV9VwQ5",
  "key23": "3sMr3dyYGZqoe4wAegFKj6QXFbW9gANick4ySQsDMszxYk7MTspWMAUhqpG4q145wJEvsD65V3CvCioDPqQBb7jt",
  "key24": "3bJhR9VU5zAjE3dSm2kMgxGUUrpZtr6J8QnGve62suDQyWspW36ptGKc6KTsUPhSAsueEL3jT3ZcncCUcvRHnd1d",
  "key25": "2A7zbs6wDFji1g91BG6V97ERZnQb2wHtoi4WFv9LTZNdzRyr61b17vxAGVKH7hqgjQ3quoKVyDtRgiYneDCdcwf2",
  "key26": "5Uzajms8Lusvj8TsZsB4cpby7jjcmcNPnL6SDnyKFwQSVqCwbP64icKs4MBztUengGac6m34x7DF5W3d7G2aNcUS",
  "key27": "5x2WBjtCn5dKZhEgCKHFL2UWkA5jFiRRwQghmYBf1wmDF56aMc9f4SnN2n4tbRdB9raXr94v9GdUC5e4GX9aERdf",
  "key28": "1bh8RqFGaV6tZQ3aWGaXgUqFMvQSVU3fnVM6HwZDT5YyqA9i5WZ1UbfKsrufL7rfa5fNuXxm7wxjwNBCwrTjJVM",
  "key29": "31dUBEYsicf9Sxnz9CXhmXwmih7VMwu2kEcv8hZu3LHEgP6fTP4Ph8K6J1yqqiGGxHbNy1NxgwJizYc32GG3oA5R",
  "key30": "49yVBt8sXTXWPVBadhNodVzko7RMEPLN1ihxgdwzoJHDqbRiRxyhsm4Ezewkkqnfv5XdynzVGtwF8wvd81JfCnXS"
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
