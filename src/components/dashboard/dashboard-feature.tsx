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
    "5ZUMe4vWrqzAXvZDpNY5omPoJ1HUGkQgdxV86dkpfV8wE1J19shsA3NGwnGP2kKSminydaxbo3yehUNMvBhjnJHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RXuZPYhgZtfWzK9uHaRHR4Xs32M3gY7BUqyoHyfsec8CyL1H5sotQUjbN2K88cY1N82k3jTFis7VAcYx9bG4Dsb",
  "key1": "2EZYBmGmpnskjMsBuE3qLvdTQFFbekJeSDaxC9Hudjm6ppBoSBbs6kXy7GV983NXLfijAAmcn9mi3qUFgMSQ1FZJ",
  "key2": "2hbt3X7xpDaDwsBXmbJKotDkeFkVkcJAx5Jwuc6uaPu4UJryWPJAnxy8SidHnt69XDJJ8iEta2jwsT4FTV4ikZCN",
  "key3": "4n6NvgbTAMwrpopUiCmQwAe8ouJ8RxYVMJ4uXFcsdNzeaeiEUeLoE4Tguzny632q4n8oam27wtuwUUo7kECWDPvN",
  "key4": "3H5hRzv1S97UdzwWCX4TxC2XHyJJFzHUdeB17cbjEVPzZqvimRTk64Tvgo2z8paTFFZdGpnW7mZwxxWQpvfcZL4k",
  "key5": "4mrtdLDWcpHX8MdSDX98ikfFaSC6exQJPYVrwaoVeB7cwFjS8NG8QS8Q2oN9yPCKkDT9fmtmTVFiJ2MT69Gx4bZR",
  "key6": "3i88AGnwHtkbvtrNva1dyQKT2dpJk4shkbM96PCMQ1uS6U74pPJYY21KNG1RX19E1PqYHsX24gL3kqqwQgrUwwG7",
  "key7": "HqxwyG38P5DvawWHiYvdaqpYJPkZXo1tjAUfnpcPY6ZG6TCbfKNxexDmWgHB9Hb1TkW2dRmiPz4SfVUrQyZYbtu",
  "key8": "59UQkACYpE2SRPdJ6g6dgcYbaQMA3a9cA2ZXMw1xN2eYLq8RYaTkmhAspahZbY1CpgvEv75KJGTb71H88wPffUeu",
  "key9": "5hJnBqXNasbunPSZY4DSENJkkjyRnHamVJFuZwedhefX2R8zhTDhxid5ppq1KoNyJ8sZraeWh3dBnaD2hW3MRakT",
  "key10": "4MMqfKtZsh3Zw48E5pGR5cmANHfk6QbAaJeoiqguMbwMAxkq8Mm97vYdLJ6SUFDLjPkfgFSMUSmcDG1KYivfEZY9",
  "key11": "3d5hDrpBkjLKZPBsN8kPYa4PkuYo3mSx6MGfGVWxYGRJtmgKUbQzKtUURSaf23E7ZMPPbTPhA98CaxgP1TenduV3",
  "key12": "64Zzbmrt8xPMxFpDPnXNcnE656D3eTjVSqBxwYXFAkZZ28pQ92c9zWX1gh4iSDLjoewcTpq8WpSpwvQfEg65xdr2",
  "key13": "H3FSj3hUnuyentehBLUkBzUiJor1Q32VkfMxssuvKwMQcqdNzBoivUE2czMwtdk8b2jzeiCxfYBbuSMXsVag8oj",
  "key14": "3TCbtNJKRph4z7ydmrNq7RPtMqDhaTsEyiwFwu7Z6Sg7xHFZMYCcK3j2duVjvxamCiwjvVGBa8GhYJtAUyA9kYwg",
  "key15": "4tsLnmxWLwYhmRvrfgZjF4tNZSEzs16mwrwa47s4XMZcqcDvaB2kTRbAnzKPG98eMAfzzvU6DMpQYKmCgcJktJC1",
  "key16": "2JyvoiYrhwBcqivXt3UGS67aqifqih7TvnqcYqXQJmQbcr3rPEph9xWqWbhA9F37kxDC7vxtTQPpiKnw7aSo5gDF",
  "key17": "2aAUNjDea8nqdgGoNRq5QkPvkRUdtKM1zzHVLLoBs3HV4K9T2tBJYPC9qXThutKniEwFcppGky9TeQ67tuuVBZeg",
  "key18": "2WvZ6Z6YK9gdG3BzwKpE1eto2gFXyZzQQkfafsF2SoNhKiuM8rPTyBDTSBCnj3Bo6vBzTkmusdSXddtL3Muxbo3a",
  "key19": "AFcXzibeVUJkJLfHXQwhx2bQnTn6LaJ5iFr3PFeVV1ksrgdQbF62EyDwafxiGMPhfd9jwuMZxWJwVNtDQJE8RgC",
  "key20": "8SSfgpNr1CjS72Eqyg6ufMPfCmypdGPApvC8EBARgwqrvFkHcEwJpeKqY1voTuQLac4Xv7ZSosLE8osWZ8dX2ML",
  "key21": "3JnGA796QK8rwx7uppdhHBuNaiVig4VztuPh636tDuD37ynS3mKiwuNccfHqcTPgS7dHDQj86ZJL193keTB79Gpj",
  "key22": "4WbLga8qgeGFYDyLYM1mojCSEBBaZG4M1yZN8B2PUHDQGmFeoSXA54f3k9gzfEhVgjfSy1MwzEpJLS7pQ8TLUnaF",
  "key23": "Ycn1UMSxEG15AKwHUgKuswGADCizbwi3urpPbNzunzg5UyzP4YsEikWYmCiZdoHPHCCzFkzRCxN5M1UZo6X58Au",
  "key24": "q5NKdzUvrdQUFh2iDGAePjHfAuKfA5DrqAFRyS7MQTzmvNx8PjQXwNhTRAkeS5QmZ4YerAARuvBbdJX9exg3Qvu",
  "key25": "5sVyBH9cgkmPnRkDWRGs2UzfY585gExY8p4qKuA2yHQLkxTjpnVss3HEDqnVxQy8heNTubgiFZPG1DMZiXodJqfc",
  "key26": "5A9M8MCE35fuNH5SPkEoNp78wqDKnQmrN9cLJzTkVggfK6Sq3QfMWgtQrCaGrAqY6H8qNaVUJPz7YgNasx6EvUaF",
  "key27": "2TLT8q39JWaVrE3HvZNzctNYPzqnfVPGmSepbugyoRgTkB1uU7yixUQSi9GDCBSyNjLdyG8tHqP3MH8VaDtLoN5",
  "key28": "37E9yGNRq5Tc9XY5RLXtKKFPThKPovVAh37M9qMmCNyw6dMqu81JnXrr55RFk5eu2QEjncnA3yHLos1ZyUrabF2u",
  "key29": "5zrtsRDjBxkvJxrNWBUvnjJanP6mYVLM4ZG3BokR3YTiwf6upx8P2pwSr2zXPkGAEMD9dBRmUR81t5QhL21Pyjxd",
  "key30": "RhMybh9AWMyRurutrHEg2WRaPZBCmcj6dejs5MvezDTg5W1WX8KmgZViWszj8UMGef614bRZcP9tPxZSLhza5ZM"
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
