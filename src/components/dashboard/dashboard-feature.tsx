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
    "BC3qBABAcvDMd74nU8seLwxqcPWDK4KigZ8qH1vykE3EmxAvvccQsrgCYNrUyvroKoKqC3gELN2vKAH8GTSHfc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xbQQfbdeSvx9TXzgAY17DmPgajjfjQbgqweQpwWTByxktcKHUVW1ZzDbQmpDkek1X5MWHNqYjEkAGLAQ4URCSNk",
  "key1": "62FT2v72YQUL2nvBbysQZArNhstVJSxxr1K7E36hE4dKNaZYF5LYnvi9Lxmf7jrHHayC2fPp2H9jENKJf7aAo39k",
  "key2": "59KNsbufTurPpXvedCoTJieNokq9Zcyno7vWQBTf7jiFLfTC4ssaaz8ucq4snEvGqpqNtWvTPECGHJUd1rACJFmk",
  "key3": "c98N4qktsbWnbYfUCFdw5BjZd2YfZzvtx432o5py4PPJkbRd6kZWist55cQvtvcp8NoXfrTsEuieqFh6jQryLHy",
  "key4": "38pMu3GrZHEXxpFHZxDwZPK3iHFe7Eza4HSpRy9UbE7bdFYvvamekm5iL2vWdh9oBQSRr14pAEnmaz4aj5jfaLi6",
  "key5": "4MeRTFN11Whnwg919UeGUervALQiTyuVAnEauUEpCnWEcz4QzDbvNLfLreveJaFtjXHEDgoToTRQG7vPMWEgXVqJ",
  "key6": "4ed1YMXDTtYZfthR7jipgy5SJBDbzPRvKiyKF476hoTk4BeLzjE5z7x1mqGP9HCd2JHGas46mrUxWCEBoVEmmkjV",
  "key7": "5pu8R8dAqUZHmcXfDrMDiwrBreZ3Vq7hpADHtDoW1WcD55tEVBgXgCELHgm9EGRroiEpWtH5UzFqtxvHaW72Q1A7",
  "key8": "4p7K3qc8txpFWfrrbmM7tFYoE5mH8XUPxT5kYNHy4AtD9SGAkX7btFcNjQzgU4rDNciwVaV6FqS8mWJsGU7gQBaY",
  "key9": "VhWu8qf12RBVtf6dL42VQUpmoKpxXJTzgKZr5eTK6XPUVZWf9dheRAUoZP7zFe5hVucpaNAjxdpSwAgNRW27n96",
  "key10": "4wezKtw9BtKetUY5QFzhfuafi77u8MpQBs8Nsvifkp5KBtPRnmHicnnRT7wQvXpA1e5dKicA5ihfS1dbcu28U3bW",
  "key11": "5ijLSxCNP7bo9tzudaZWsXe1U52y9eyzAraQxR8dT17Moj6cMkvEZgXCySHquf4qViTKMYctuBwkKPgnaTCp9pJx",
  "key12": "3Ku41njjGz8izrLhLpeiPP22BGvXVBBpsRc3GovSQudtcA6dSRcN9A5NXakd51uxeaf9QeF64RcFEpB8iwyXMdwS",
  "key13": "5rmWZgJqUzwS1fhHLvFDzco7fNVAeKx33Lh4edsVUBdNJh2p5r6EqSDXpbaAHYropLajLmmG4rfu2axZrCFvwMN3",
  "key14": "3Xkkh6wQbscVCvC7kG41Ctex3Pwvu72BEBcMQA7LP56eXQyqguq32x1gkhSze52NbLhPQsTjnkkd3uSkNuqHRSU9",
  "key15": "3LnweQV3jboXSXKm2oYLKUfHQH3vgcFFGdpJrFKDDaSoDWmVX7j54wMyhDVdLyGFPGnDnZknLMRxu2ExQqM6PK5D",
  "key16": "3mFHKa67TRykCsFfvRH5KNTZC8y7WLdVZKdrZqxH4CHYfAC9pKSpfDB7ReWemcfy8PaioKgYdt5KBtNbLJebXarr",
  "key17": "5CWQCVkQGECpAGfFFBiMDVdBkvfM1t9tRwvnEANAdToa2f7Rb2nPSDrjLtax3Ph2pdjPZLra3R8fSndtpcvDw6p1",
  "key18": "4iCFQCcwNy81y3kQiNjq4Pefc8nikMsWXRdNqVCkRAxNnk1gXY9NzNcL7uhebo8excGgJMiTRpfvGZqkZjAME6YP",
  "key19": "488L8b4HRndBBNTECxTU8JnMLZED1j7LwFfrzoWpVDxu1XfhcM9V5z2eCV7pdBTcSwPTgWSBdypLuCAcSdW2TVkg",
  "key20": "29wydoKg11pfRca6vvjoEdthwfzRHLpxpNiTng68Fb7LDnmkADY4jbesPmW1FrAXvUdRQu39PjU8TSUwnUDJ1ZsF",
  "key21": "2w36o5AMMVbPbWj3unVJEbr59k2GmDmZXJZggKcGtozUqrSKUyAyV4eRghSnz5kFBBdvDYUKrmzUd1gZWW7rsDvB",
  "key22": "3JX27QFRMk4efLBryVx26Xh45o2fqa9RDT9BpFp1L8hgoksia83Yty1kEJ8Q3rWX7qxu4iv17YVJuEZJqf8hKu1J",
  "key23": "2aqRCqRtqTsVypHN1obBHqNhqXt47PEeXRdkGngiXv6GJtFWMXSU5VJbjmtXbWiGFyiU3ViheAP8WipffiJpU9k3",
  "key24": "46yz31tZ3xX6sGy37ws5zdoE74VGbi2LJbokLQDfqHn3aKJRnTXHTaHcAHiFh4SvKwN9dMMMuBeg7Dw8nR567xX6",
  "key25": "2rz7nuq3zc4jxySvdEJgKspDmEtUitbnHgna3qvL2eYQ6gAXbHj3Ddf6ffkiEsutUyPo1vq2d9E8dkuTb4AjHL4S",
  "key26": "5Vyt18zAqekH7uverP9erNcLDbUgrWS1yZJU7wtcqs8XazNuwMZZWEcLCSmwVVZBBDbbswjcK76EassXEGzGD5Tf",
  "key27": "5iPTh1hzLH8wgCvi4p6K6TTSZYpGJATLbL52onQbCMUW6N44mUANJAizy4kv1trd1baH9zqqUsqUD6vS2BVwshV2",
  "key28": "42tzKrsz4FDdFkA7Gj5zJWeZ6X4GceJQBffTzp118xyzwuc7ahxwXD5kBgPm7ocGpFHjAayj43NFFpVme3tG78Bi",
  "key29": "zh86v5QBkhZ97v3jfSXvLvcyoyUNrdVwujDDvx1wNveuJ6w8V6MtShSHwRoGJTTDEhzVrEQZ5hq28Y8eCyj8dhs",
  "key30": "3n2yP6eCuhNJNfZapPDDahwtSgAjwXQyr7VmCoJiCVNNDaix5bbMhx4DWwL1v7z2JR7hRA6VLccttS8uj1P3ggKj",
  "key31": "5xVNMBvfW9Z8XABGTaxFyFuZjWhxyvrptoYkyE4HfnPmcMZDfbpyCWtq2ht4wfBEXjYojXiKW9vzGGfAhMk9hDKo",
  "key32": "2RpB7JjvLRZ3wHfSLpcPSr6gYkzCX6HvggR7qPZXtMRJio9Eph29ucXQdnECSjCd3eSa4J43jTh6A2jUW4i5X1n9",
  "key33": "dHrVzQEGn16PWCmKZeN9VUgUk5rU7PeZS5TxgM23ruTFgQMSMXCbsekMxLQQAxHFzbMA9YdN3rfALnoAJCpXNfL",
  "key34": "3PpUDYYzRccqn6uw4iYMncaZPMhA9R8BnjXRz8Pqa9AVXxxBw9djeH82LaRw3Gt8ttS1zNn1RToQNVe5cpwwBtdi",
  "key35": "urdNTbyMKfUw2cUsScL2wHwECDs2XfdatvzhujbT1NkXH9AkM4XPuneHBAGcuBQkxSafCrDyi4YHpYaaXtC3HyT",
  "key36": "18madnjEqvVpEQEXs3KHperxxedQUzHYWvG3fPj8siUoAL5pxDtRmdBzNnyX5yHbLEBhLidVNYiCYon3Z4CyKFd",
  "key37": "3AcVfiWCw7EY9Ej8UQWtbZGVNBvcMbmhCz8DiZRpitiQ9og3gJTvJvTVjebU5vCb9GURQLiAfsSBJ96TJKpYfXEv",
  "key38": "51jF7Pkri8LMQ3FN8uQwTMNaZmZXo9eW35Mesd3SjSZRHuL6YtE9u7tDidFGpRjcXt4maSdaKSp6sNiznYTni8Hv",
  "key39": "58BNaHuhMxfNdzhrCaY6DoWF51a2eMrbZ8ahiAVFM14yAGApWuereoCCwugbKvVazN9bz6CauhycZMF9gvs2E8NQ",
  "key40": "4rDKFfQjdmMoYx8SwSDaBftgb3eFpLPvju6pynQFK4eJhcWmKYAXsJK6bpPnz4RYmK3JEAMPFvjXP5qYk2GQVfNf",
  "key41": "4KibHdqsGhMFNEtcJ6EEky24yAQmrgJ9XBhDVnEqPhRXqJW6pUWmtDDWdudAb4UXXBkM4L4TXmjvrHyt3iHQ6zZf"
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
