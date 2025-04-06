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
    "5z7kpWo2nimuDmvkKMeYBaudfwY5NrqM1jYjYn239Hey9U9BuwNu8Cx1aLHA7z9H7cLzAVcz5wD1JM4V2aRR5MUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XB5mB8EzqB7V2DdmD2b6XyKmLu2GMqXJfaSkFmwQAh1Ju4NkYT84hHVC1D8ZdV5fMNdUHbLUXRhznG2LXvvnZWt",
  "key1": "5oE6LLM6LkCHKQF81MXCmr2Z4arxTxsygN9M1QQyKQ2RSzrB1oyENBXQiQRDB2NirsSJ7ybyDX6ABpqAXUyPrRQp",
  "key2": "3bfEhZeKWiktMRKLWg9imHeYbq1j5yg27WUqdGhszLNiXVgYPoGoFzXfFiR7AcsfJNc3D97CUx2wRN7QdHqLLV2v",
  "key3": "4ogeKgBcNTWR8XMxLuxbmqmzSwfhfFGWekg1fzp7y1ywaD9pcVuundtSteRSuptc6rpNMeB36SkMcYhUmjt79dMy",
  "key4": "2iWak5dqvwv6GAvMvibNXhxVHAw58TN6Jedz2hCzquM79Xd8cevmKSqHzDMrRGHvHFXVG1AoayG4xRpwpmKaBrM9",
  "key5": "4xyiwdiVUc9zk3iRzkgqLNoNZvLPnC4RbYGuzFM4PASyvCG69hnozLpBKyGzowzwkkyvRBYGm3AkZ6WuH4Mt7hLt",
  "key6": "5Qon3QGzEUc9Nu4NyynRix19ro5isZZMR6NugudFi1ohWoVZrUtwUfrCAofkotbXir23Jgg2DNM4FVQBgVrryGgp",
  "key7": "YW3XyYHNiaZ7y7G1mn13BMF2UiZrrXMsMERnfVtPVZn6dGtdjSrLbFN9CPWM9q2nF2YgjrdvheYx1EMeoh81fod",
  "key8": "4wGmYaD25WvqVnXKjitLzdC4UXCbsN1W7mwGQGrNWp3hUVNzgwFpen5wv6AKFYLhSXWd1gNuZCsqo9aPuiTdyEUy",
  "key9": "3AezUAz9gw6pt9yp2WpJLbKJUXFrzj2V3KzDP3jMbhM2W23uFXwDtt4piXpL8kopLuqUJK8goQVeEtWLmjqK8g9f",
  "key10": "PwvKymAyT6RuS3KnQg4xoBPEfjqPEFQXkoeRzLvbQFNbavg2927TN65EcvAtMeWNRZcTCt6P8CkfD5dD23AqfeD",
  "key11": "3RAuLCrx3kgirgEaQZ6kLDzWmE5TiQ9ow8Y2aZ7UqynBfrkF1HpapJoveFB2yG1ZsRP6YjDS5knaiV9n4TzWZyDu",
  "key12": "5KdSQPh7tSXqkub5jf33ejGo4wtv3p1xtiskVFiEev8HkqTvHdvnCcxUqVUqsY5u29Sr9JWLYhiJhdpjBD3EXPHD",
  "key13": "2U4Kqhd5gXkxaBGDxSTTVcv4HduMaucsp2ksXoxa8M6VT84kkWthSFSYixEX7ZMCha4mKM8FfLAyxMeD2FqZKdtG",
  "key14": "563R2weuyAPCLDSfAD4txHY3DGiyL5Jih1s6oSmbmCQi3DLmT8fWKZHrpKjM7Jj4nD57Y5PyQp5fBk9AW16ZD7GU",
  "key15": "5KPgLQUHsVHKJVXKZTkvKn3x2dWdqNEDwcophZKpKGMtP2395rXbTvK8cGnaXD3Pd2ndRoUtV9C9Sje16ktt5QYq",
  "key16": "gMu7LER9ALPuGr6PpoxSFAongPZ7zDFEdDgb8FM2gZ9TaKB9Liq9khQ1RKypW1vQvMuRZJFzyLJFUMAz5Rkmcc4",
  "key17": "64F5pLg6dcHYiw7wzQSYz9fUZujMBSMVv9LX6hpjepXKbgUeQXKaS4AuqLaTPxBQNhMgsW6G7oztKqG4aW4b2RcG",
  "key18": "2WHHv4EWHnen2wjSGKxKHzyJ74xh6HLvKhfhnLNwqk1iMnLB5de9oXxfNwrgJEgSnCkxoZWZmqvbkrLm9Go5AuKv",
  "key19": "5ZnWUfqarjWxmy7JVQMHLfCXEEBHZgtLPB8xywfSiPP6Qqr5GvdB2AKqAACdvxDHtZ8AX7PcfzShK9kStTLvn3N1",
  "key20": "4aXEbVUSLrhL2fSLoKxATQgrwB2yGBKioGiuszJJffvSzKEdpRcbKXsbsa5UWxknxaa3wVSW1Ywth6RLpoEE768S",
  "key21": "h9NTRdJnD7K3JeQuFC7Qs88YEoX4H2nd86G4Tt9udDQhkAJgzqcABZs9aXptmz1mM2Q9fDq1XiBXKtJ3sTNQMms",
  "key22": "4p32N4X1Wv9wiwNge3M2YBoFFqTHdauff6dL3WFCaSLqtX3eqYnU6iTMwpkwbupnSHUpaVyTUDtNTLYgVKWJPcuU",
  "key23": "2utoX7c4xFhcrtptK3mFZTwpxbKRitQtTQW1ypeqbSCfQ4nE9E272yt8VeEDHGhc6aBzcZSpLu1U3cJhVxFyYRj7",
  "key24": "2PS5nSQK1mHT4352s8Z18XobxvyyBvhUw9Vmme4Jh1njeUmvd8ahmSWYWtrG3eAhJkHaLw96aEpVKBnGvaC1HQuW",
  "key25": "FQuFBCtm4VQLdCaXg7dLEdz3FKi72nRKQnkKp3KbtvDYMi3PHvCJJU88eu5wKs6ws2CskxkDn8xpE23uTAdMyV3",
  "key26": "25AZhQ5WdHzDo7spX5Vfmuvj7bZhGVTi7TJHbzkRZ24qEea9EohvnWcUy7zPgif62e3rtdu5nBD1pKugEM9EX3yk",
  "key27": "MX43XiGXNcsCC2n8JDmeyCg3ovDMCCW13vBtqa5K26ka7JAkEPzRpR7ywZR6nGKR42DbwUH1WghYHeoZphXWnLi",
  "key28": "4QE5WN7bnQm5vY1FaeWJ2jH3B43urHqEXzVZzR7PKC3d7wrAGbm8Ln9WKhFMGuR4qt2Er22UzubWZBR35hkpCFfV",
  "key29": "5ZxBoBGqaXhLtFyW9g9p3YUZSWP3wCNtpW1BnMdnq5sirtAPJWmWUwDbtZFV47PhbAFjjVYPsCKWWP11f8LLudwS",
  "key30": "to2C2kfMC6e2TjpDMmCpJE1BpqDTacVLaFU3amEVfJHCRw3jhbcYcnEwbz9RigvoPgYuhwhUL9sa1Nj76bRTKHL",
  "key31": "2SFgbrwsKujsHYjRrBVbTasJgg6CSvuwfG6PC4LDB5NNqtmEww7355TWp7UKReRgdkQ5mMKGFZ8WDUyxe5dba4Nt",
  "key32": "4MUYKEhxpACEfTnaxn9aUrjYMyXf9bUEz8Xu2uABVBRbEez7eeAWiFLakqyv9KKeHXrDZGFYe21pARRmU3tSAJ1C",
  "key33": "u7cAgNLBAsLZV3mKw8jSFEyGZjxgUKXboA7UEnuxEnrmwvcgHhCBQpJkoiquMRu66285taw8Qb1bt5ACpB4GBTo",
  "key34": "4atgDVxSGf1GFbQUdqnRcoCyWcUG4Hq8kTsV5ZRqgKnrUxxCrSKfzBJ4XNj7PD1vXPTTzwT6gpkaXAPQteK6rvKB",
  "key35": "3BKsaoV7nLVtWknfLf1EPYVe9EEGumTeR6ti82FW9y5nmFSBupF33yHSRTbGSS3RxYLPbqfAMXgLiYhCurHnChH3",
  "key36": "4Q56Bxz9f3G6YyafhcNECu61b9S6NTakgFvoYCDjzJYEcha8p3Yfg2ji1pBEZgs83DarvGVoUd7i4R4eDorNa5C8",
  "key37": "2nNwces38RU9jYKLDZPg5BZ3o94xP2nRycQL1kmopwe974QZP3QSdpWC8CDAE7oXJBpsKJMVFpWuhhy9B8dVmwVK",
  "key38": "2K1jVPJcHu45kuVsgQkuo622r9xMRR6b4LfnXQc7gQEgMigbA4PsvUzdYQVPeSXVUzrhhHU7cbFQS4gKLtNLkdW4",
  "key39": "t8F7afaB7kn22GdKWEWEnTJyGggk7dJFu3FKPdjr7bRa2GHGJgsJN8Y6VQ6vLVTj9pvFgjNrRgqX891D93MXkKB",
  "key40": "4B7gmEMZZzvLgTUwtXWR34DL2fLCJt7ouQkYKguSwMy2PAiAzgYVN2HpjfaN6JCTEvzcRh8Cd97MekvqZ83GSKGD",
  "key41": "3G6Wygtf8YzJthcw4ta1vPhH5137ZQs8zGuqLngYTwnyoxz2MH8YEtzcy1HRtaNUJXfPLZtdek4S9kyasjE8tYu7",
  "key42": "2SgBRJewPM7CCxunsqkJDAg4Tut5Z2zKozfe3LnWndHxJ1LYpgAm43b1qZrfeC74uN8ZFV9X3Ei27taSPXc94oB3"
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
