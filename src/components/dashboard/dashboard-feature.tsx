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
    "3FRQsvCuuVjH1Wt6RFqbqDPY43u5TWxaLnQqAaoZxiiSqYTyTE8gtD9gk1L2NU4KafrdjbVnLa4BuRzE8ybB78qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWbPjpywaUgdSfHNsM6tHZREQqo3NTqgDjmGgShKnB1Y7sH3FKbW771Kb83YLaCTuEvNzLCtUT7CREtD877K5Sk",
  "key1": "5gimwf51AX6XFoFwbLeKbemT3z1Emryg3ZiEnBfY7VWpom74G4PgbRS77FJk9tXChRB1GbRzPncJTB9WMGpq9eNG",
  "key2": "2yaAWnt4SVn9f3FFPtMQ8ViE49iwx15u3wnr7wXMK4db717GPqsCXuBzo7BUURvPeU2c3EKfoe6kJXX6hQ2o6rV5",
  "key3": "fapUYYSiwsUk4arVgcpT7qVpX7rLWxXR6v9rHyegBWeYHSPgor33uAVaH4GmQe5v8Pfh3HVCAMibWmmdd854djR",
  "key4": "W4Yn1LxXsBmxGdEDC22abkde8PBWnpanoBHgaabNYg9Wei9LJiQ4qiE2cqBkocDTBfGd4StrALacMNm1HUsnRMU",
  "key5": "2eX3c3BGPjTGDqAZkSv5zGLwocApMECV7rjoAn4qw9hxb2wV4rAzMdAYx1aEKJaPJAFRvAtkPEEdCDCEi6oHykPp",
  "key6": "Lq4Qp3B6q53Rha4ytSZJnicWFnX7rTZ8BZd4bQv5d3BqaBZB5n1KqReuCrQW6pD9JnW7Xr2jyHm7KpuMd7WP3B5",
  "key7": "631Btesy6MCjDzA1zwG66WfToYpbMPwyrc6zMXy6SeF6afgKmbgDFVrwh6NgcqPGtKWEgKQJ5X9MrHim16omkeqF",
  "key8": "26LfMSrid27RVRYER3xKUjyAL4cyDWUaRRbSAzwwewYt6uCuZJeDcPJXjmHwrgk6v53FcQAcDBauYxVwJn4WHWYG",
  "key9": "5ydjrincVorhbvpKYnr7cW24fxUbfQkSt5Fgu9bMLyDh55EvA1i748KsZwvgmwUrryCfhDSQyqTiQnYj9y9RPwLJ",
  "key10": "42pS4p6ntnZSzfDvmakxhbqJkzwCPLS8ztnfL1AEpqRCfLtcAfrvdnJknhidsQ6snAoNQJPPJAjkoamrFLhH8PyJ",
  "key11": "4sQro5s58eqoaffgYowcd3KZi2pGD6ArUmRVb2zVyzwA9zP6rYKQJe8AqquDsEx9Xwxtcs3nj4hsNkUP9CE4idSi",
  "key12": "4sYXdJwWzbCccdL677eUwj8DUtXLizL3Kma88Q7NZasq2pCW15xWFcyi1ReaX5fxUoZ6x7HdNxn6vz7A8uUcnQc4",
  "key13": "4LnttbdtGjceSVdQqzbRqtHYPD9Ks7cmKdr4wqYhFJek3dqWd1jj7SdiEtfpjNAr5R2gsFmVHA7fp92nx3rH47PH",
  "key14": "3nrxafs3CjSj5h9bcU1DcgAFc6BEHFzBZQGZfhcDFhYGweoHbicVmRjGpgyyMCcm2pEWNbihcNYR23hoKynn5xcg",
  "key15": "582DkcQevzjEUWUXyJjUgRVM2SDuKDSJw9Tsi2Ws7BRxKh3xN69VJM77QKcaenykeeNmGmaj99M92P6JmgTyPxRW",
  "key16": "5XDiMbNbb3BJshQ2Vke3bBbuySvDp8wuqcXhPbmXAJ2D4fqasZDd9vJkfdS91rJPx1mDkRav5EkwWDbJNzfQQgJa",
  "key17": "PgHTAcJecRyZhk2VYERLiejDDpq4eWANxfEQkopGTVpAFSPwYz9dkXDWBLfCY6dtaQHvoD59TA3XUZKRJpYnbDZ",
  "key18": "2yQkyvy6MTbkjXg6yyx1MBeoeZombcRnn5bNwvcmU17Wn31CD5nCK2KNsVt8ap8ihwmMawsFCQ2yePGYMe1p5HeL",
  "key19": "3WNFFWCjVAmo8FxrHJ2j83Xwh5ikhQyDPuNgAp1ANFAfGfXGbSjhukBhkK1DF4Qou1M4U8DWkhxAzni17NXXvPh3",
  "key20": "39xgwhC3veBvLZ8wTZgWP8vYgK31Syr2a75n6wTGRKYKabPm8ptUZoRMUKvH5ShvtrZ4bjdgGUMtgtYAWxVZKTx",
  "key21": "Bpyqt9L6JY9ETeeiis7F6Hb4TnW15o7PyiJLspPZd5P5DwFR3LBGxCHPcRag8Z4asSyHvNciAdwaSYCyabRed4m",
  "key22": "4gJZbqwUma33i6T9BJM4v8PWp5KZoqecD24fiYLC9KD8mL2Qj5CkHCAfESvuMiPpYo5jSDNaBDzCkvAv1BxTN4T7",
  "key23": "3is5yUtD3QaCyUwLtAKzJjTR3vZi6KmTfdRGmjBkJKoHY14g5jufJmPy6zdXZ8A3AttDaTVL73BEHC4nkydFsNm2",
  "key24": "3n1AkBLqnTQqBXH2JVXyBzxrDUz3kgRV4ro94GuALhYX6Qd9a6LS2fHcW8eo9yuVx3J8RbNVsU7arbNnhkeqmwxk",
  "key25": "56t7va7obhFrSbuHSbPNE8FokLjfAyDiLVk6zDVExc9s9S6KMvDytiYFALFXKtEVs6wGMQygwG3wTdKkCTneiBmP",
  "key26": "2LnvuTMpDb8JipET7hN6WGLc2sk6ikDkGmhGrzUvoDPXGRrMFe4fnpUqbx9nyGjEifhUrqKMzWUxQqi1fCuAhhQW",
  "key27": "24adGoUEyDBfDJRtZF2o7SHfriurLpGt9nnP7UZcJpL4AgWsuojxsKcWB9ZJU22HnVtCQafx13RPJrhSQNmjmcJ5",
  "key28": "3Fj9XpvPKFSBVk5i5Litq6HEmfMips1B4HrTBxbWZhFjhJcuPrxqJ7akV8yQAY8FFhnsWEUgDaRbEkAYFPQRJPNH",
  "key29": "3axVTtDrrUiAsciW5TQHdn4GXXRbVNZ3XQRm1o2RZgPiwFiYXqKeJro8qzPrC3jQLxdQex8vxzoqNMHw63G4yAt5",
  "key30": "5RHTBFzUyMQ6HftFLpZkrHtJ5e3y7DSh3qoEXMdbV4EfWiu1hkPRQMa1ZdjqVz9dnfuob21MtmyJStT6QGtZsENQ",
  "key31": "2Aca6QprhfaGHSrZ8hDQUdonb6bsv2dpSA9h9EhSHmXeZD4DLJUMGikDMipAhSDEqcusyibPudkX8KduQ8h1NE8X",
  "key32": "4r2BpatamhcR5ozNhKUNLFyEjVei7aPiSzCS3jRnRG2awDtkoDfUS4EnwqT4JHcZU6cs7qB5WVzk6iHd652yo643",
  "key33": "2LJVafH64BYaJbeF3mUtFnL1GWLgXgRfQxu8G7ZBVk7MhYTTxV46n1D8XwRJUaGDBhZ8qSPrKSwzJBRvuJqRZqgC",
  "key34": "Cp8XdzKdvyY2nhswKXNWd8tH2eLNeCKE3khjQdwzKL9gxyMyJ7joDHszDT9jVFvYn2MftKPtbPNnuPLaKopQTsP",
  "key35": "4XQPzwEtex8V487iy4D4yTAxS2hiTVqP1ND3ko38zpi1jUp8LAwrFGCMrdPH1bc9rSeHDhbciVx9ihNagWEokEjx"
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
