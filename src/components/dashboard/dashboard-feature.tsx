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
    "2MhKvHipmgxLShBJq1mKY8RwPZqxPpy4WkxWNodGL95L7WUbCoVhbtcUAs99gLeitBojn4n5SWhtrdBZCysAfHrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WquqcqQDYxd6P82WfFjkAoFuvgSogQqGVuGevAHxLHoXcScndVyptDEnKSq4BNQm9migoBZ8kvLFVKtfJ1v3uzK",
  "key1": "4YkRF5bTen833RyxtS1ZfErAC2EfwnucaQM8vP7aSsRWzAkeSMa9eRMxpzSCHxAYiMF9QxePSZcrnQHH7DPHyJ19",
  "key2": "2cmHG7ihUwS1f9ebCeyemTuDKAoXU2x1xtk1ae1BB2LqyDg2c5vFw8dqDFV8pqDQ5HexBKhBG1p2WP2cgn7Pz7X4",
  "key3": "2jBEwgw1NfCaY8oJQKgd2WJo9UVDWpqzDra2dqtayFDku2bUbMjg78Bynbhm8nPDjx7B6WecrAKH5YGS6v4sj76J",
  "key4": "BfpCvEPhRijkxyhCAfyGyUiWewfgfJY57q8U9QPu6tmA8pu5yLF4zZ8PVuN6AnkDEYxmTUj37qVgby7MGRisLKj",
  "key5": "2Zcd6HqKUERtd4EVAJ73fBEDjVzWNDemMmnQrXipbi1ukPZUjYkao8WsPvh4AFbYhGywjAFL8ajyXUN62myAsLGv",
  "key6": "5nUXMTWFRyEnZS7iUBt4vU4JS1LXLg9FFeyMGx78rxrRu8QjQhqenAXWphG53zqqA4WUqmXknD8YjjzgP1gpznEz",
  "key7": "2xuzivcevmmNd8kuU8ZpPuEX6jpbpj2FepXsPaXohtuwKiDLn8YFWC1hysgLPAzvxHC13Un1mmM24ZDLWr74QqSt",
  "key8": "4NBEMDwnqNaXn4HeSWamgDFD2h3xg9FZceBXK9byZsqcite61zJo2FoMSRxDBj2oznw99n9mFXrbL44oMZNhJGHw",
  "key9": "3ZMEXPUe2hEGWVZvu1jFfQ1ZpA2LLrT3tNCVuQCp9y42eHb8VVDwjqKzEHN4FHZ1Ne9gsMQ9HJoZSYu4vQiY2PZU",
  "key10": "4Z8SS5zdVfgJtF2gbj4wER94128NEWMWqx1qY2nsY5pzxRniWW9bri494fD7KvL1SQqZrqw8P7TBuDtmHpYNeApY",
  "key11": "bx61jPqJUicrVGz9FqvaaUo675k6ncseg2JhE7WuXqmiCZz6BQhfpBPzxMWTZo9yYpZBbGaa79tdBfidZTik48X",
  "key12": "57kk8qnRJsqX4N5gMM3GdyGMjKnRdMnxeF4DrxP6KwyUVCQZcQUxB9V5LRpnaeJcos7MJirJokNqCw2EFXKVVCn5",
  "key13": "4UuQvGAw7h95mVr5TmCgDZ7KGteogRL6KZSjrmKWuPxTPWcAz81UFxJvwVnuExEAW99oAzByYdqpb4wqaUGrMeRU",
  "key14": "417vpLJwS4s9V9aJvMDTytkYzgmTcra2S69kVGVWCdDULHMsYJqFUPTjLPKfe1QXXPLDLrk1GgAFMhdKv2en9h15",
  "key15": "5uWsuLovqsnPhvMmAx1qiZZ7HVsMPfz7Cd3Sv813RwdiYu3r82b88BaET4FxQCiNL5SmwEVid8yqrq1KpjfrSCpw",
  "key16": "2agTwexbv1YTDPyvJWwYSTr6R8YrAdR9EY4ArruoK5h9FGeht9nQwYmmVnwfEMvkEsik7VRaV7f3y5fa79y65KLZ",
  "key17": "23gbd5sLkoRktgFDFi4hQBRXvK4PKQe9qtDQC2gpocFa6okerSxtdxPM9NErmEiwrECsJ6LRdpXjyFoqrEsj4eFU",
  "key18": "4gs8f1SGJFz2k4znxyZnpp7tsFXbuyj8DLyy93WX7qH5jhvwgKPhMkybrQeRcXCEkGuy14F8UYMmxbSGUX5z6pBF",
  "key19": "3oUhHsL2RppUZLtvXACJhgYxKcomdDpJW3EmSsfFQn6ziVXhmKZ8ATNSjSzPahJmj5XixpMvthKK11ftwi7MwDe2",
  "key20": "3TqzFriZ6vc79y9fWWAr3BLm7hpYTht5pCq5nT7XHxaD3YsT7YGm6p4r8xDigdETt8QSceVGEnfX39wpzZpbxG4n",
  "key21": "mSQE8apsybGuXD4tGqr7qbwzgd3gz9sGLF2kw9PnaZygJ7azRpVpzeZ44PMiUyYHK8pWXcbtC85qypR1caQXoxE",
  "key22": "54rZyLQ9eWp3M4zPbFHwg1kgfUkQAz8LZDmVRaNqLVcrTqUsowM2K3mB25NznwriWsJ46GuBarEPy1mT8GPHnG8A",
  "key23": "4jTwz4J1MDtPCaJzt5UG79VBAZHwdwguoUc6dpEXnwHd37TfLvvjrqq5f11qLhMHmcKwJBHVYCcpDrqdGLeqHaWw",
  "key24": "5ZizkpxdRoaX88JdFYGiu7NtEQcw2RHynFXC4RjEGFmdXg3Zrpru9FvELdGQrh6shqzTpY1uxbe7xMBAtvUAvGhy",
  "key25": "21vHEsSYkHDBGtYSjqz6wKto8vkyQjiSPU2TJGUVKSDL4BdqzcLxUDyoyFBwUCwACzyzhVAcudEmssqsYFDr4isp",
  "key26": "3MH86xLAbreeTB71CgCkhghY7WSP5ZuTbK6b5JcFCSgQ6HQpnGAHjbxkTY8nUhn4NFiYxVxPiNv4D67v24Ls3fY8",
  "key27": "3rcpkJjhTuFVesF5me32UHuhenAKLfCAB5RsrtmP8fpLz7oBNAAYA77btJ5P18ttBRCpLHvjDoSrLaSWVtJcmpJy",
  "key28": "54d8vKQ1TZhSeEAY6XY39PsX5oPiFn4gw7VjwhjifbbALBjgiAosPjnKtRQkdXgWMR4uC1XWbWT2R1xmU6gCjuQT",
  "key29": "2tUCxhdHd7sNbRDRAvCFm2EnzhqRUqmmEFDX1qdbiYSSWnpoVYGszF23P9Y5rKLLPKxCep1RRDADtnaPmvgyFZG2",
  "key30": "5ZBQL2Ev3v1fs2kYAfDnLq6gW3qFRDxr8G1D7ZBhFWjcbqD4B99dJaKreC8qp8z4wsggdDc5p4dURCX6Anb1SyoW",
  "key31": "c79LNc4fvGbN3YfCYnTuftzGJJUn8SzFWoLZqd8NuaukJ71cx7rGfPL76SufzJVHucWiicDQRdE8pBm8z5LyGbK",
  "key32": "3RSmWwX2AxMsfp24VyJTF3wPWBqMg75wX5XkkQMWUFrxHTziPuy8Cwds7A2FWw2cPh2CbsT6XCCu7yM7FURJfreh",
  "key33": "46kE9nywXHwVJt3jT8gsMJf2kt55a4JpPiUBR9STPDcArkRpWx1HVPnS8vsetkx8yA4hjrhY2RZhhQ4sekWQdywg",
  "key34": "3H4FGv4Mr21FY7PR5GeALe2KEfArQFQS42pN1LjCm9EiWSGF1uDEMydbd2mkwUbYtGoSHXqdbdrJe2dL6tXgtRH4",
  "key35": "2WY6QGUSoABqkDi2zaRj6YFLnTVUBTpdKrMk7XH8LwzqFjWiE7jTJeBvRPyCDH4JtR6NRpVE8L5TddPc1fUuwGP5"
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
