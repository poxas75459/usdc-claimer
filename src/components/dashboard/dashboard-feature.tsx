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
    "4sy555c1uMS7aovUsksDcpoBqdjXUxfwL5PkC18J4R8n6NsmqFeKH2jRpagiimVbqVkhPVLSWzZE6c1T5PC8j5cW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b26UpBX5kaxJarCj2qypxTJVR1Pkjgf2BVfQ9hxxBy4SFAyu7TxjHYqgdAcYQEeNUUcxwjqDCH2oFxpUvNSYk9k",
  "key1": "43iTm8fBiFYGsXqusWbJ3i2234rrQV6d5LkELZn4zdR9SLpmWPgjk4NcgY3DC2Cx7uDW7rYZfQB58ZwjSzBRsbVd",
  "key2": "2FLUUXM2oJDMs9smSCtJfszbPG9bqQqGKwnU2HDgXXtMUCM8qfDp1UGGscjYLGVBePubRzyVbodbTnUu6Uwhy6nJ",
  "key3": "2ozhWTj5sUaapNAoJYG7bqqEf6Pdp1vsRhb42MTiJdaBetjHHCMJdUFtD3VNjsvwi2Sqtjm3zmDNap9fxQUtNeE2",
  "key4": "2eJY5HinFPL8HLvCToLR6TNUv1uJmuu2LTexiBhrJd26CPFd6jvcedy5BivUqy28hPiqaakBpaxuzCL2ZQhAwMQX",
  "key5": "51MbS7vmJiSSNwDgAexAYeP7rujpp9bgPE3uS1L6KUYmhfMehvk5s3YitqqvPkr4ue2PvLNZwuvenEXuc1ypVDm2",
  "key6": "7Piw2EbDWyikcUMFbwpXF96U7eAvBViEmZmHpGfZ8DsjDP4qsHvRVgApr5gyB1zZgN1oiBShd4rysFzLcMduR4t",
  "key7": "KPpY3F3jcTbNeqp59Y2U6pLB86tonoVFyUNwa4EzFeyH2N9ak8bAKnCAaorWa2pUHXKjfbZaMEnHhqkwFBEcsg3",
  "key8": "29rSv746jXSzyyfW517nDmf47CGFBDL7bPK4hxU3kx2c7nzxY4MQL3SBCuW9rR3QQv2DoHabzj1yx3LEGsQCbCMN",
  "key9": "9SpveePMVw8hETJkULyMKLgo8rDc6FSiTsYkMrjvxVwXrVxhSnfXnVeMHSregjksYVRKDNDCBLhiHS1ygpjfcaK",
  "key10": "2wTqn6YYPjwF9zT8HPiVQrotBRmYAj2BjW7nwPAFcRWGKK1wcwpV74DoJ2bNFn2gzpcso42FqfYbrrWcKnWEGrw5",
  "key11": "3iNWeiX25GLWxKkPmL9bHkwmiosu2Ln91B1tCoJKRX1TKt6EgSksrbLSYXURkKSuWK6UbizteMbbesWiEj3vTWT8",
  "key12": "47EQ4GVRcwCjrzAkaEBTWfbvEFU4zYDAyHGQb4Ee1UQoCUM2TKhDYsx9R3ZrktmBHW6TH6B3WB5E3rVjoWHhohZP",
  "key13": "JdNmviB4YXH6GX577emfta5WWHj7p9mrxddrpvdBCwa4APoZuytD6H5eYS3tg2sS678YpQjG9aj31Aggvu7bJie",
  "key14": "nddrNJoZvws3X7b3vYQebkWbRgkW8VUZn7vL6A5s1gZrmVPynZD3riwpJqAubkbPL8uMfxtFgwEdczcSzf1qYmr",
  "key15": "5vjKLv5V9xbymnYNBKt7Pd3mpbqi7zR4dUrDMAJZtK2BVPr7LosQZwuPP8MWGLFaCLpPkMSntajbYFMuuHeeimVB",
  "key16": "5UyS8GM3xMQS4oxi9n5G7WS1sw8RadtD6FXF8Hiqr8BMnSYb9YfP66KwYJeBvwkvU2JNM8UHz47BfLkTMg2oJnTo",
  "key17": "ZyPkFrCau281ror2eShwu6bLtnjoNpf5UCzFZn1V1wxQGxjXfxLBp4YB2zmDaPLf5LkQ7gTKJRX5P6rTfHN14LM",
  "key18": "49mafnonTj4RX3qm7HSyCs7oovqhYL9vsxyw3oYpRVPr7KkD9TZLza2ZxcHYuLtArXGyLgBeu2dHZNy7P352KM8N",
  "key19": "RSKr47MwePBKMJraSWHCXFw4zzPcrzY2aAvZB88chuvoAcx1FCUKtwtc6dPoujfXca3YrtzzAxCQpVvxX4NrH4H",
  "key20": "8uCpSTg7XAwgW9UCLErZduAB92JpWrX599LpepnraAH65bLWNhxecTTmBzNr8GAc4f9JDu7Z8BGmtJJXB7CN8Fo",
  "key21": "4K9d4EjE648J9362rfHD878cg1Kqrc7Du6uWh4hPoGaHT3VtT9Z332DiwgGRXJx2oQmmSsjKnkqAqc59vWYbhmFC",
  "key22": "4AaLmpiMZkXymuaCy4yfWH8Em34uhdcQrmHxm4fQ5QRckQa2aL59bd27ymV4YUGJkj6PkhkNnL8jt6G74o91V2i1",
  "key23": "3UGZxe9RX5KfueehWXikoP2Sny3ucnPhA64rt9MDZ7BxcxGP7U8o24pPnNMyPvc4iyTgVyErW66utkhYAcHasP1Q",
  "key24": "2N7D5QXr52dxiBQSysc5d3aPYb12SbbHSgSuxf4GYEWMd6wScpBQAG6jhYopJj6jUHvL7K5UH6j1EYdQcT95V68M",
  "key25": "LNdtTEzMiwEe9k4YteJYXaS8bdSmJuMyJ5GJ5goTPHpRjkqo5mRXamE7mW4exZrXa5379QXjSWiJi7okgbts9j6",
  "key26": "BvpcTUC2VJ18Ho7kSMiJzAKVhhEBoZeLUrvovd8eyuGMNqstrprvEGh13vgGH6pyYbWqLJYEUE9MD4cBxNj5Rcr",
  "key27": "21PkVHqAxYGjTv38Lrp5S9CNnDUMQEfxDjhe3kquvVmzuNzXZVb4kABXvGKVwGRH7Evg6npP79eZE9w5MCe6QiR3",
  "key28": "4tvWKsbRkpZbB8MLWTL4eFWuncQtHHrS6ECy153hxusm8ZoG4jXHofSizaXWp39FxCYsZathZHgpM4pcbZ3Ag593",
  "key29": "nRtFLVBgUhVayT2RkhUXFPVL2h8rp9AbZcZZ41Lz62rMxJCFjEuABBy1rHKgQUUuL9CHMhLufX2ACXsMEtp2EaW",
  "key30": "2CKsniBYakcAYaqkgFzzR88r2YD2joD6yS1Q315KQeLHsgdRhGy3gibqscVCFez6Z15F4MFFU5SWw7jNsQjrWFYQ",
  "key31": "5RwHDrTbLK1eUZE8TQoH3bzYpn7pYVPnGr4Dd2Jjsu3PHkiQgWE7PwQD76FNgtjCi9EMNbUtQLeCEiHfHqXMUFmW",
  "key32": "5Duvs3o6Eu3Sd7eBt5FzU2DLe1zL4vigz6RCNrGz1KFv9USx1yWi7vAPNgjrgzMrp8xqHTuNZWSKwJtpLbtBQ8We"
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
