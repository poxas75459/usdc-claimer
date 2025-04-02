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
    "2zZvZESFnXGFBzGezeLDEHy93FWTTen8YSt37cLmUaRj6Wg4EJRygU16E8HsquVEUMZofpiY1ZBmV27Qh2UbimBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U5c3bGR65bEzdVgczyzGGuGNH7PF3AYyqPaFg64AJr3fatmfY7QxpBu5LTMLJneaa7595EbXfv3idAe3LGypZCD",
  "key1": "5EMjNyTFof36LD84bfv3c4caDZegb3hCpm66NCYywhGgUKX3HB9fK75FxhYiLWQe2JFLRFb1y4tz2P9phx4txkkr",
  "key2": "3DmD7DfESRhGCWzc3AAofdf2R5BUyP8m8WkQBrj3CZdcGbCpKGP1MAfSXwWwmnuDscurQSMVAEUohk3CcsKHELVm",
  "key3": "3B5ALVZuBStXXABLricbiNYHbSJ9EMSiPdp2EgPbCjaommKRf12oq9cVVb6CgdwVncGEcveq3FvzWZFXMqCS6y9M",
  "key4": "3N2HQfCYhKWGDxT2CkYeNTqouZaCMK2sgSeCH6MPM5rxDyEj45QN97hLxN7R6bP667SywkfPgoYRiYP154xVvS1T",
  "key5": "398Md5Aw8xAm12SmoGvDevDabGvRriRALV4soaTQbtWvAQEajeknjVamSFDw3kF87yAFfKext85dqiC1FZkZC1x1",
  "key6": "HRFEAd8UXDic4tVcHWbBxfiKNiaW6XzXRRtp2DLRFF8TMkbM69prAoZWWPEsQegYaLzvciJxSaD1XGxbXDDfj1p",
  "key7": "5Aq6e5C782PLbQj5ihx6sUQ71Z657wPJFtxRqc6H1zVYd1APqrx5z8xVuzuyy7Q7cjBEkAKYhqyGbsQ1Br7eKjcV",
  "key8": "4Pa3Gw6xDz4ot6dh1iqsidgL5VT9U8SAv9sVNVwPjqBCgNaENdsyRmBCBPhSQMTxezYqeEf9kj8GmJTFwa2cFsgn",
  "key9": "D71zgg4ttw52FgzH6zvf2fULuGFD9sMX9zJeh9fmYFUC8wA6frGtWKHMcTaWvn3R1m7z9ZpgdEEdhbGeEM52qU4",
  "key10": "3Dv5sHYbWjRA941j3Rj7fvg8HiYcdhLCzoQdZbVuHk47avzH212FzNdoUVniKJUs6gmczZDTquhPwzvHP1abNNYo",
  "key11": "4gh7NpmWUR4RBhD2CqP1uXk1PhStxrVii22o6iF3rqVU9D4kRuU5BmdVcdP6fH9P5y3fstz95WeQqW5qpJyXurwL",
  "key12": "3DxjgA5vrffqvB6R8jLbHh4P1roSajeiENLtzYK2VEucGzX3mG9rz3qanMkhTPhwBxSeHxE3RoJD4gAcZvu7Ze1u",
  "key13": "5HSG8JgDYsKp1sMvccGALdDNagERGF5YVgR9vtYP4Vw9JrfnDogp1C9D7wWykB338ShNCoJ9iRfG3GGVPNuT5TuT",
  "key14": "xCnr8jptZkwEvLAhYpm7cdfooXpexbrboHVpYn5FQ2pn6RvJCWHe6ho65HnDQkwpvd2QGZLTU331Cmwtj7ocSW2",
  "key15": "PmE8v5wvQHJNskPsqfQcc9JxS7eyE9syMkNfLfV2MpjEasFjSaLudCnDfWuDkGeq5yav5XgGoGMsYW3ZZBCFpAK",
  "key16": "5cNHHJGqusAKQ4LSD3zDDGGn62V3F2eHLRfasS62UAq9GA6zP3JQSif9nGsziv4fhRMSsyLokRt6yQ1oRkCqA247",
  "key17": "dLZmWNQhjMYW8vsr6UqnZuxFKkegxuG9nNtnkF9Ktto5pyLiJFziHW1LhKo9WSQMRgHeMFFXiHu8eBB68WYcK94",
  "key18": "3gcY7Td3Ew7yoEaCvnApp5Ae8GpQYCQmzTYV4VuNuF9GuehkYokcbZmCVeVStJhCoSB5XUf1DTgYhnhpf7W14qYK",
  "key19": "5d7UNj6YwJqT9bKQP9V99o2QRxvRCJ8VGH87crwsn6PjHT859Fuc8mJ5mDdttJ5XK4JNxYWkFFbFbsxji8Q6nJEg",
  "key20": "9AhesK9hMf6Z8qTEWSgTi9ryE69XVfJ8cvZqSgNEQiUuWU2bB8pe2ia5a3Pmvi6yt2qz5pJn4aAcwjrFqpRS3Eg",
  "key21": "3RabLgqgrPktoXaHJF38nAwvLdBcsoDYkVbAJYBgz7oa5DBmoMjse1Yo7SdKZ9V232PAfqHGJjvQXHiLu9pcbLWg",
  "key22": "4dtpYLWQAViEV7gwNsFYSKVyEefqgnBKfJWh58XT5FvZfBKY4BbsN8fhmY3PAxcsiMEGfVJ6uXR5JdfJ1GgqRNyn",
  "key23": "rtAV25GDN7VmvJSQCud7AssrRCHAoQSnMFK8fyTnM6md7RChjSKbEYHXqZpvqRs5FTErMKRCzQV4mZfwyuWsTr1",
  "key24": "4waEUjWDPCANKi1gT1avxUPi1FZPAZM3sBR3hKYX7T75f4rDHzy3VQLuwX52NdaCVsecA4hkXgnkVru6uM7Fv5WH",
  "key25": "4wiBiaYJGqpAByqEkQohTZcMQmLMF7PFtqFQrGkKePwV5Yn5Q1oTaEGdoV9M5HBUamVtZvgpNdX66BGkUXxG1ydF"
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
