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
    "4cn7z7hoAegsL7ZGwiuq7zCzbhpFqbWTCvde9UvQQZbmDWEEPwonphMKVX9j5fSKbv7S9cgN6Mz1wsKq4opkkKLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EqniWxKZfhMTAwX8YCamAWqu6SqXqHWy1XwHHGnWHqUVfEgeCDSWjBWTBnDzwmwfbYeeitd5PtF5ADbGahL9Vsr",
  "key1": "yJutKeunqmU8q4XFLG15kDN8ZfXTt7PM8g4HsHkCBssyUdq2HbXPdqHgCAzXhh1S6pN8mq5xbq7Fk7BWBa6fbdh",
  "key2": "3XnYNx4wVQivbpNHShEPaw3p8TkERm7CXsqYNS56ySZaS9kvQWAeriawGBaWauoEHkqY43m6JDPH8pagYovuYX9S",
  "key3": "4JzcesprzGfsH1tSDb3zzCiJSTSVdGU6J3icBwPFCKYFcVaquT16M3m3ai4cao4QxSBTBfBdggsW7BXR9YyqFfcQ",
  "key4": "4X1CSwPhFNNLvjbFgG848iVkRwzaxeBaJBCBW1QrGoTPRYbceQnX8n3Pm8CkmxrpQTfwYhMsxwtWQwJq4iFesZeG",
  "key5": "4zRDdjiXCpbzuhAuoHj9cbjuHrFyVfYLcRAWe25qqhzACZRPFWx42cCqDxEm77bZU7EYppYS1fZFZPKLKFphDb9k",
  "key6": "59LVjNF7yH9bFLU6oMUZqKk4bjKY1mgGejFkpXCjtvxUUGt6tHzjGpXgfHihjdeBJZ32BsuKANAdL5QFqm737qCo",
  "key7": "2g6gSC6H5oaqqkoSXe7qog4KQDNSbN8gZvvbUyaRRXxtKpFwC9patpeXXcsuaeAtyWpPdhzxSxujZ2Wv4C3fF77v",
  "key8": "4zWQUooWj8Cziu9p3K5URderDcDj3VmbxcT99TNjFcKuJHfLMswpHV6H5CGKwnx4G7y4yExZKY9awm6FFWjZmbTM",
  "key9": "tH7Rew9Nk4zpmSCHtS92NWgMCRMyQQcBmCNSDMquiyMwMWAcQvw2ZTbz1prNzTsqnPAUApch6pZfTCoFEHeQUCS",
  "key10": "2DwUGBGq9W9EzuaxqPiuevYHCcrGY48LZtwGwuE5VJ2WxnVJDA5oPmRr8ctuCtwtYGuY9P9KkSSfpjUGWMsCemWW",
  "key11": "487zKDf5MeDydRgcU4qqAhn3ihibaGmZ3qfkf1yTwen2aFEVVkwxCnbgDHG4zqAFkkzh69atdciKayEH1owpVBVt",
  "key12": "54LbRb7EWYJU3E2toqpkwr3EABhZqbEMhPJWWyZUjMjSjkQgZnx3mJ2br3TD5F9oTNQ2rpKG1GDTDMJKng37a3ck",
  "key13": "Gs2ggbJiaive1vod1LPVFppzfxFmnTZXFttrGgQ7NNjyvbWPFUC7RA6KiZxM3BjmBgDzLLaw4Ut35BU93DMQR1x",
  "key14": "5Yjm9SAMXA9NVZq9ySvjp7i3ENSjvn8s2U6ypungfrKw8MckqamwKJpizcYekB6y7mS6VSpcLPsNCpS48mDprqx4",
  "key15": "2pqCLPW2toBAaQ5xJ4kBzZacEJhpesq6xwRwbbV3KkHCTJdWt85S8smE2AccYxur6UFb3sdabsyj5QEpvzbbHPrc",
  "key16": "4qzd5e8bnNeQAUe4aUtxVUAyEaZdxpXpBWd9BBAmNggkCrNiAvj8dFFPihE3i3BUi3wooAJTsZtkRMse2EaMA8rM",
  "key17": "Ncb4FZmpJiuNEMoYPi1AvAkMAhQ6fgJQtBkDak5dTsb7AYkCzNHNh3p4FavhWPLUB4f7EBYEacFfFZ4FdnydA3K",
  "key18": "4Lt6EVeBJ1Rq63UbPsDwGjkZY5YXsAAzsaZSy7ngBMwxfapHrVrUvFkRnt6hqXebvGEWuEL5hPHPgXCEPBmC3bZJ",
  "key19": "34Y7eGZedNh5K3YRpLi1uDNhUDdRCgG46xg6rzmLojHjXY5XEXYVvxhAuJe9mugwKmGfhKo1XDf2o6oG9KGsrJ2s",
  "key20": "eWuQSeEwE5bDmQxY2ocYF1fxRxZ7tT47BQWXxdxQDUimiy9ULBVscSLVoJVKu2giY5nTBGijbQ1c7jrzcdibPkW",
  "key21": "2gZzu6LTjGeyZY9aSsJWwKfbuJw6qTyLTEhFpKdxYm9W9Q4uWkVubCvNhVvG4RAhDsCLU323ArnsvoJmTCXUFM2g",
  "key22": "4jcR7tMjADrzDWALrtLdABiEodoLq7DeAgnSJSzHMAjGQsVhigJkqsKo6CYaFxrQz3v3ncGgxz5gxEjFVLke2QhF",
  "key23": "Kr2Z1Txow6dUU2RXrtG4R1Gw9Q2qJMkHMe5jRnJimwgtjxvjKGd9FndEBnaaSMhaGB9VvwiENdMqkwbVZVnqyaA",
  "key24": "5evFP6G4PhkMascCGbsVaJYgtUcg1fAqVa2eoR4xYv6keZ1c25C8ohyKkCiVZNUasH4TBoDzp6ggk7S6Zu5tPKEH",
  "key25": "3aLD9bAaLuAxPwXeK8rQRydJLhPwcjWUdMbQJxE6cw7wdZKwXUPM3srVVibyvDhdFBpFZoB4UKHRkpiqKJNZQmW3",
  "key26": "4jGohHo6eA6dkWiB38pf3MMJuiFP6wfSgE7izecB9edwxqgWjZnRwMqY2XS6tHLsnBhSx39hcA96ikJy7CzygepY",
  "key27": "4EGuQMQLHBcmeQbmVqHU69uMhjsEeFxBDyCAAy6uw44BCtXwkQVSNfcmPZFvWzBfECvqdUgVZApenFB7184apay3",
  "key28": "4VBg4MMFFv5LSj8XMKyTRKDSHopXqisKfk9rgBYqs7Ksyxk5bdxEGhLb1QwbFHfmP3wU5JwhCgtMp8RBMLZYYcAD",
  "key29": "46BwenFKsSfUKfvjfo1fRQupw2L9HoPuJBdcSicBD562F7yVM35fLFqpjibVCdDp3Fkk4yL5CqLRa5XHWfBNddGo",
  "key30": "2UU5DCgAkpgELCryZTYqjCCDHzqCdZwqM7HheaRWoGPU1DVf4m7EnGN2NHR9zrcNiAdVNu6piftfKgWHVqGWMVVk"
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
