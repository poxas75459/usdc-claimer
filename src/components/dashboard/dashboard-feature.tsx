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
    "2AMasikk6zbxefFWeyHEbB6wyTqDkQMQtGwUuvpKb9pveNSJBqe8g9eoz4vftKVgMknSqifY76LKiVQca5TPpbnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ht58pRuS9DMMkkUqqFbJHPfsk7NHuwxSaKR6DjtJ5QrLQN8zCxXntJqBqVA7BYZkETD98i57t68o9uRNf678Grv",
  "key1": "66WjbkxuSdYvcRM38HMLj5bxAB5Cw2hjcXMkABEkR7rZcbPBYjK2uNQ5NLubfm1ZXmNBUaZVwL9vA24zjCBMtKsq",
  "key2": "5hVZZyYZqh2ntc3qwVCu7DWvbRMANxzXoUQS7iTMuqXYrWXSDzA8hpcNeRACyEAn5qmDZ6ShoXKVg4ZWEMAM5qYR",
  "key3": "trafPkBsZvQj7B35CD866ceoaUkyidEK7W5a3LzFqZn8oMziZBSE3spLqXNbC9uqihdtdUc16Zi9BCTG2ezZHdS",
  "key4": "4cdD3TDF2dToJQkPV56h3wWEYFv9vMAKfh6fYRWaAAE3HfMaC3y5iADMpMbuP7L1vaQwmKkKQcbx8q8LHf8T84Wv",
  "key5": "4n5Q9CCyNQYHDCkXcAfjMiCpzDDH1r93YheAGN7WmtSycyDWFog4dcCWcpeQ7eyLXFXpAMU7NozEQfFtTYkE2Y8v",
  "key6": "2KLAi4WdfoXGW39XSBFqP4h8XXnP58iqe7yte25WKhNqypuoykGMW85W2WvPT5rdqKABWSCCtkrehQzSJaGaMoD9",
  "key7": "3oW6f8QtVepGPKc7JEZu9fJs3qd5sS9yzHyhvVvGorcV19uU3ymZs8BnxhVNqnN8yEjC2rQA8uoCZA9sTNgEneb3",
  "key8": "65aYwCCR2vb94pkBmcwLyyQvpFm2z4xmLGzFtr7dbKGhCbYyqVd5jwh2futfZHPPUAsCHSaVATtZweM3F1xXShk5",
  "key9": "2Uq6xLtrm5XDbcATVQAwmPUzje1z915NzLfBNRpjyFZxdYo63Dz8zSUDSz2b3h5UcWpoH2bcy8pqVBC42d636YVB",
  "key10": "3g1QbpBZhEtfnL27k5VCKyjmuri7dz2yFMh59vM33aVqYqHwNirML9DSzySwKAys59tU5MKCSwK1tNLuC3QJ4wdY",
  "key11": "Jw9wctCBsfFtJQXAKbb1FHxgJ3NwNf3WsyCQCHvB7HavDGXQzsP9qYhHyE7o3R5q4VwVFHGFUA1ZkwU1NfUfSU6",
  "key12": "49zpkCPjvYGhddWo84i2YBkZqpPSL1DPmnG8qR6zEFmoz68LpNHhAUZ2Kx2bxuhUELGhERchoMXrHBaWHcZrSRHX",
  "key13": "4S8c3YpnZ2p2cpmgop4PDaUVoV2KGW1qActTGXmxUg9fxCjm3nKQsodYAVzCDu9mBydvm2Pmt9NSaQ2nAmDx7zPA",
  "key14": "2Ma1ezFb9PzGrWRom1YzPmMgu2NP2xex2WR4Z5LhgoARoXdVx3NozSUDpZkF3xc2Z8XrMxHPWFEBkxMrwEtiSPde",
  "key15": "3QkoMwcbmiG4Bb7pyHPT9eADD2J69tcoTec8PtW9Cg1y4KQffqZsd3XbWQwuNZ9KGvUo2UGg651dAjWWHdVqyt4i",
  "key16": "2oczuZBkczbhVy9WqwrjLLXxL1H6KZ7588YbyotjUf4AdpDc9iCLacv1rw8Buz9tPSTvBHEfwCJ1HQnc29itGuDz",
  "key17": "23tmbWz5G1cyMNDaSFYTyk4z6dxhLzRaxds4pf2MThYHzxbAM5mEVDXfCRAM4jieHA9vSv78NYCNGAX1ajGmPes6",
  "key18": "3yd3k9AvD7ePSPt26RF6EW62zLbqJpT3voQHpbniJybCmtf9aJmrrpmzLhc37aZKgeFWeizg48fAK3AtnKGFaNQe",
  "key19": "3stCxPGYJY3Lie8U7kRHxafrczF45pTxRiek5BZAnETQobmL9QsWrqittxpV6NYDNRiUuQd3T449caKFUbjpBNtu",
  "key20": "33jWScW4jkMpS2zrunQMjdUY194K18Ljve6XhMkas4SQVMC1kELgayumLiRkQCPfMRni9b8NViRX6brJMiLfdgQA",
  "key21": "3cLRRWTSf7H3x5U2nJ11YNA3wcYvpaQ1HpgQpXLQQaLv6g54nPoUZHn3YxyKUUD7PvrTd69ZZTgrU8nMFDQKFM8S",
  "key22": "2Zv6kw5Cr5ZiTk1fs6qx6D9mc6N1eEJQUQFKCp3U8Lfkk2VExxaWMHzKUy487NLUvRExY6vgaubEyCQGSYQk6VuB",
  "key23": "Zfzg3bR9gyRCWhCSQ1gKFHzog2Ppu8Bjthf71wWPzSZKoy91qreXgQkeimPVjVdFB3VNKDZAWmhPJxUuw9HyPzb",
  "key24": "v9qMggUbd9d5tpJ1FF1N84ZGwBt94qnXkFtAxfkisCfHCUNxyN8eQ5rGxfx9ffcxCF3rtKKt7KhFUecJbw8R55N",
  "key25": "2evfSh5xVjdzFAVx2ufguFcvrffeVuHZERg4WJqmH7GHMkRknkCQnDxeer9XURChN848KbUKHmLRejfry7MAnGgi",
  "key26": "kDWs2QhugaJLBCMSzWS6YwJPXVR4RDoWAt5dib3goKSaQU3hTda6GN463z92Vw9XXGYofTLRS2UNSv47BpYazhh",
  "key27": "HLrPGzDLitVgMxDV4oGKKSPehuvPbwUZ61TzX1EYQRS1EuP3ptyAcK93TkUyzFM9jYyf83yjEJjBrrZhQho9WiU",
  "key28": "29jCs62nLQJ1yr5YC8kNrWDb2S28py8tqPWSGE3x6pDFMBvuhbJqZDRrwhyNUDM7q5EDWmcAkxELRdJARKGHgFMS",
  "key29": "5nUEF75BuD3zBGrmjuNp8QWS44iVv1sv5e68uSEQjrRYLkiEbWDVWbUoR69rBo7DezHaguKNgNiPoVucxbmmzYVG",
  "key30": "35sAguhjF6ZZsfVekaaskZv3REki1zhWzeDNAkheuyFVwmd4ZZcQRJ5d1fuqkiGAeCNykevRVtb78hWbQzdCa9Bh",
  "key31": "4svvZpUYRnPNDw4BfYtAFjSFtJuDtXJLmTE1eSz6LDYjmmxopZmvrWsHRVzJAmMZk2FCvySp4oza98TVnS7Zxd6G",
  "key32": "335ZPLrwkdUGDG9Sohc3GRU47RKs2CuC6y5ey3b4Nip6noeryJbDbEA4re6kzb7sPiJoc8TpEcj5Kae82JJgatHD",
  "key33": "5wovZsYfj14SF3o1XXwVHrydG2fCirMkBtZw7jooMBx96jzvRk5DHrrCX35prkAX7tLPLke5VGsr32EiG1N4RoWw",
  "key34": "4ioTUKASwWw1eEkWN48pvtePNWWk9FGddDLmgovBvNXk21W5tAdWqe5Hurk6Jm91DPdYPTG1iuZqusmVJUBZNAtU",
  "key35": "39FPnx3DTB6BrkaSZA2WzjQyHKQx2GwRpiwQWuoNZ2oz9aonyzfMv6PcuB71Z3QQPcimVrx38xisRfEsg9xuRpf3"
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
