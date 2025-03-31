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
    "2PF1jExmPYBa9zccEF5x8HWxxv5nTh4LE4wQZrsK8vD6nMtCXLqTwRNbwRHUqnnZqrHoxwVM7QXaUQzYVgj1mr9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32HEAA2iH7PpkrdwYgiwiTGAvogfjmJKb5awcJUmCPQV7vj4q4fgC59eCq8nd1pfXQibvCnxCwsBjPRGXsbhbpRb",
  "key1": "63yh292x8VaKs1pxZf3wAraJ8PQKUKLK2VPyD38mkdv1oz8HrDhkT3TEZJZoL9inWQQLxDa3APxWsYR4WV9EfjY1",
  "key2": "4LvnfdJaBxny7FzPPAvXFcS8Jksg9tnoVaQYEnfZ1Dnpz4uPH6MPuwsBhgZAwKxT979ciksAmEF6cU6VZa28yoWf",
  "key3": "G1LMQkJv6nwoPw8AqtzrQPoQELTm1df8o7LxRRenGoCVGuKUcvESfVmLeLav1torjM2SV7sSkhKRFGJV8Hwo6hi",
  "key4": "3xH1H89QXCfsMQhwPE47siKi4kSzfiWv9tdsEDzaWpHSqZHB3CCDFMxqU3A5YdDXKscyNtua4ex5rnD9p4dZ4wWp",
  "key5": "32SVG74NGPkCZmCCL6QTSw3GDsGUVbxXDHFtyEfKUEC4znmnRusoTYmY9yAbHuHZe6HXBohhnKrKT1mRr88kS61p",
  "key6": "2LgbF8JV3nfDVevgHbLCm5y7nnwtaZfQgVHxFXs9UZJnXUeeSZkXTV5v7nNYPN4tXcCX5AnCd2CofLgToffzj2fy",
  "key7": "2bnkabmBtygfEydw5zTJDwi24nakRXDdvC2u5yz9QfdzHcNF3bR49vSPLMFvcA44nZFeLojgFxdBwKwKR7z6P7H7",
  "key8": "5aifP1vQLSoi9UiLvfX2Y8QgwFpHYSh1vRCLZCdZHmL6LXqkbsU72s2ix67T5dJ1CN3px7z7LD86c7YjUJLGXJss",
  "key9": "2WsGQPAN1HhWSvaeZ3gqbtcVvdMP2TrhnPDa37ZfhnxExotxCZjHcm56JZRGAfu78SmLVxrGvDN8q7SKbV2Q66hn",
  "key10": "3a7ktoFuJdwAxAh82dGyvZfoVH884p3Vp787Vfm2j9sv854Y2faMUreyu2kAPJQ872KzBVVpUNk4CpT5Ci5WLcRW",
  "key11": "3NLo2zLLkAzNDszZYn19qa5QfnsWTZS5ADjniCD6GHDhegH33FAwbmrJyAKWL6gSwRaNfTBh9PfvKjovfRvWU7Yn",
  "key12": "gFxMm28B3fnQ6uXQ5ToE9grufD6hztMr3ncsvZJLm1ygVJFYP77yy7r8BoBQ28CfMP1BYbkiiYRE8jT81VAcZCz",
  "key13": "4dYb8WMBUkTarbtFLv2Y12PJSy4nyKeKttKyTn7xLYPvtkN2dDAVqj4rJowKgh5t6bph8YABLFhmrocgMqqcshbW",
  "key14": "2NYpDCZMaYEjxr7zJ3cDuUeuTgwMmaD5JZwtW3XiwUTtBJuKN5sjNEuA1W3BUXf1Dp5M14aRYoy9TUiBkL4PJEfk",
  "key15": "3qqYyU97J7iEjRKGsBZmCfuX5B6aMX8don85TCKyrdxV9muFrf6QfpXR7K1P7v1zJfW4tZmCbV4nQatiYBRYCxMY",
  "key16": "5Ev3mCV7oGb3fg6vyL5rexAYcF89yK6RNadv1YVxfCmP5PL6fpCgXTi9iJBt7h1xbRrVRuY5fxHAFhG5XrKXr59q",
  "key17": "33Z8dhwzXuWjYM9LZtPZXw7ZUtMtGajfen6Zq54ajU5KzWncHos3V2PZV7dYYPazixPcBPQAYvvnAiBciU13md9L",
  "key18": "4bq3qQiH4Q6chD6Qq7kmCf1CJXc77Udu8uYqQcmHL2xsB1NZwdQ68Sxh1yAVivPLCHcj4nscT1pWJNAiwEgnVmY5",
  "key19": "Uyob4RErpKFJzo6kLqaMS4Mh6ZFCJB2PVutBerk3vZX6q4HeaaaZ2sbTEfUB7BsxaDj2jWBTXKCzJ7fRta5t8CH",
  "key20": "576vGX8YWkd1c6M3oCB5N9KJRk17Cj2MhJwJUYvhE9Nu8RYm6VRWmgdtcocBdCSvs4TbF7pJoYeVyjaHKxTwrfwr",
  "key21": "5iabBf5VMcL1mZXWBfvivg2b5hzZTGB4M7JEQZ5PkMCqx5LEG1fiUkQApSgcsDXvJzDxVu4p9f4WSByy8XrQYwe5",
  "key22": "48M46J37jCkqNK1NDEuV9VDki9bCY1gYgNVr78qqvseRTnKsawtEaToMWrm4BUWmQPaZhzTkDjoGVr752dGmgTD6",
  "key23": "4db8mLbfAW4e9U6hcWUD1omjSBTMvN56jY1wGL5HyCYoBYLiqMvPCma6FXBwdgNnz2UicXt9g8HEgdB83vbTHLVD",
  "key24": "4cva55GKA59mcmf1fSfchTKa7EjED6uDoMu5TNxSBvUwLPsgr63g3RbQaQJWc34PMKnBA5prVYjQMtszsQAquXxR",
  "key25": "CDsFbPH2R6WzEmcJsdK8uFPUxy4dqyPAtJRpfcsL5D89HGk4SeHRqBmepX4QiV1EJRCVxrPJUFscNxJwBbh5CSH",
  "key26": "4yCgiuh1GGophMF1MhF2T1DavpukXac54QYrTvNcgn6mWRYfSK7pKdevgGhh2JKngsPBS5Uzef8tn6tWShiMjniC",
  "key27": "4Hr9aL7MWAQQyouhVKL5CGDUXXKopa1KmUd9RG1SSWByy9cpct6XuprizrpYi58VehF1hFbpw1Gr1MKhcJRanTdy",
  "key28": "4CHQjFpnhrZiCxxmbYgTm3QmqVrYyB1D9ZabDaFR2SH3YABv5ReD6mgtguFs4fBiKWsHskdXBm3p737GQL63A68i"
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
