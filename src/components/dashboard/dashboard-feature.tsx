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
    "479hy3hbkbntGkHuc9iL6tN2gLGEVPKVMm1RMecZJC3GvmwUYR1C71XoMAVK6iHsrQwbw7FDwLcapLnaA4eugaTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RX2my3pQHSNsuY9fZnXBEPunR1wr65sQ96BPyvLxdZeSTr4smPSiJy4n12wgwZsCkuv8UdtJQ9Gp39RSt8V3RdV",
  "key1": "6CzQ3FiakHe7GTnpvw3nGeDocBu48YYsKb1EeawmNzjqz413JtUaSCdNXYWGqSsJXSWJnA3aT2uigGekEf4DeqG",
  "key2": "5X3emWK93LzMyQMp3gsBRNSXdi64FZD5NaGn6k56HH65G2TjJ7sqyynEUipW6jSqG6xS87QbiGphX5pccac6vbdi",
  "key3": "4oWDHHFKHmK1rQQXLuha5yDZ5TJZ4HWD9G6mfc2PSdquz74sTr9zenFJHwUrV6cPp1JaNjBn3oAvY3v1SM3Ubaos",
  "key4": "2G7fEiXoAUEa1HJ1xZbC6LM7vZ25mNeJBjAaXq9Z3sKrDmgVKHRUhXkC232S9TcfermC3aNVmUyKV8x6Mr1WmCs4",
  "key5": "3uhjx83YHM1skahYT4DtgyzDA8QypPrWiJN4M7GfELefC4Fd3w2HfTNBtjvwcQNn5mWxxFJwZQpqJJ1doMKBuK7e",
  "key6": "4Y4V3LrYAeq1GNHcKAnGEhrKEwTYLk6FjhdPiTT8esBu9oMCRB6irMVQrUFXoZQuZ1Dph52DrK759qcHB3DAahxQ",
  "key7": "5vr24FzjxorE5kgELJN7zrkNCnSHuuHAmHaxUMXqzEkb8VHy2zuAwT5RhcanzCVL76V9o6Xjm7S8wyQtiAFS4sLr",
  "key8": "5uvFAp2idVDBWdUfH6j8F6QdJ4VfPe3Bx4aoN1tDM9qcqZZjnMYb6L8zA5yBwoRjRA3hsoYoUCbUAK3bVXgZFoxp",
  "key9": "2a8inXTMb8YxuMTVq3kh1TBa7eFLriFyaztv85jCqmSnPkJJVyoY786YKqVhcUjZkznVGuXcYNgGErDcg8fqyQCD",
  "key10": "nEEHVM4GKpBjpAUXuDML5yrkWycchxM3VyqviCkAWmVMXc8YNiaBwcgSDtsytiTZsLeKowabfeGXFgq7PAfjE6p",
  "key11": "67QXPJm6nAVS1Ufta4CyF8q27ptQozDaeZQn1e2gn6vSBTZWUHgZXr59haHn9jYCAhMrx7Uek9GrG2vHBgDe7M9k",
  "key12": "5YbxHmssL7ghRiFx6cTVStbVdfALb6L9QQzzixyoZMkzQktrTpnkTotEoa2j7sYNACqp77ndrQSjTJJkW9nbcRPE",
  "key13": "5Qe8nCvVmeDfSUBkRXBnUv476KUGCugbbdsJPA6DchDCc4Qr9nia5H5qGFHVMm9Tdj5pRTr1QtRfLiXN7whG4fYS",
  "key14": "63KW9GdM56DFcgeYYLecXiNsqDH26AXVHBjFZkWSqsCuStuGA7wkCZcuMrHrMKUGbt1CE1fQ5HnzrNc9g9DBvNfD",
  "key15": "4ytEWZDvvBvcTKxBQcmTk1en9Dtdp1zYE2WU9kQd6LJSFper7Z2fXqqqL64vgzuKgu2V9eZxXxNdmxZL7tcNF8F4",
  "key16": "QdXp2woVutVDaSJnLBWwsPUTFYqgZ7obo6eSWyEg2E3N6oqp28HECBUx6uRHGU4BE3NtMWAjLsvrBe5oez5VHFD",
  "key17": "Cp8ZSZEnhzd2aVW49fdx9pJ7qr1pW5YTc1pwRiroh5doksXDme6baxrDw4WsTpoZ4hy6CzS5nJkaDsjAk3XdQHJ",
  "key18": "4UZxiCQwCoPzyvt43LpjvJHURxA8pQ92NiB156XEV1YDT52twqMfepugUAajtDK2DTpW5wyi4ntXxNhTpKHciDwe",
  "key19": "3soUYYFadyVepfgV2RFPeJmu8SzywMp6PephpdqK3TR9cPxCphW258UondmXy2WoavGsTqGdSHRSemFf5c4LJgCw",
  "key20": "5gt3PeUm1mfsy9gReKqVq442SBjSayTs6nGfKJLy4wfh3axf2yH6tCZVBP4fvJnndnBJHbWeS54KNCBVekhFD8CT",
  "key21": "3sMVM9vTW6nJqThpMBBsrh3iVHBeGAJYjPiGfXQSqkcjRrLYVJX6ZNE4HqNctHpddSLZPrKVnZy994Xn9LSqPfaZ",
  "key22": "4TF2o1fi3BPXjPv18eSHqwwt9XiecPveXSjHxYs8VYrtr2teVAwaXnNASfPa7ZL6v5PZzzzh9NoGJFCchRquETLo",
  "key23": "2X7msvkfbGEUoW1gMDip4GaQnNkgjoxdSmKb7USd8AxJ3xBGiQuF5p9VTKozuyARjxoiutqLcmYh3badzZEGTdEs",
  "key24": "2XsPWXSAgXf8aVPgsu4pJaULEpknNrojhLtV8Aqrd2zuo5C3pj5MHjAQofnrja9FdwgB5BqfhirAmnwAR1it66bB",
  "key25": "4hSqh5hHmaTdWnuA3PAngHRqFqNSPpKiYEJFXfc9vg3oKdu65kZbkvnCr9qpGoQarf1SS4ESXFKEeV8yLhJf8tS8",
  "key26": "2GSyXDQS6XJNEHNZuqcB2P8Ze5G2koPNieNeKrgnZrVCkSioBxcuQcFn1srJtozDRTnJn877psgBUgFHSydnipKT",
  "key27": "4Y1CFkc2t32Wp8yLDjwDXU2QsuTyfjsvH7m3jQDutg7KtVKir1KWbjP9b4dR4r6FzCuL6BgAgtfJ8niqxzW5ebkN",
  "key28": "4XFKKKNnZYYtqDQvLgHKgHPdBChPMgpKLbAu7Fo1HXoZL6x7zWuxMT3z3DxctiuSPXoe1oFTJLYjQm58YQ492waN",
  "key29": "4QCyfgsbQMJDoU7F7opS8qxo6yKo5ThAAbHQjFRNABcssJmEC1EuYwSEtKQeEJE2FvUas1xuxyLEm9gMR9YLhysM",
  "key30": "A72X2kEZ8dvUmZbAB1hizh12ijzgcWvDVxPFiF5hPaPwchZmpWzDUVzHrUQVgc75rKM7xqNq2gz9cSNnRC7V4io",
  "key31": "QsAMbB7qJ3Ezz5orpE9fNCfpgxEnZMdMUHHg9VuZJofQtEi6MGHJvYMLKobAw29qmWhuP55TRwfQbPfWWNP5zmg",
  "key32": "2sTc5kFmHHaWE6fKJH16Baask332uB2KJSYQvVKT22MBJwtLV2my7kyaunEyTAGh9NpVxtHdPwUHsev7a88jDkeG",
  "key33": "5HxmU3JGoQSKFcjDsxH8SZ8dBDhf7LS5etYkiD8pgHs5J2NMbZRwURv1Wnn8KLEWiGWaSdsjDRtg1gdeJskEhxMZ",
  "key34": "67h5R9aewoRe9SBDRU4VDMmJJuWNAFMrrrC75FtrzhmUmH8L8Z7EexLBcGxvjMhX7cwmKrKDRP8DPvaPY2x4rV5q",
  "key35": "3E77eLvXsXRXgmMFpCJmE8TrQf6SYf3d3mvPkMfqTvQqo9BJwAfbv2Ke7DQeu7rBgHWeDn6t7jZBycBN4gzaW21E",
  "key36": "3jTDb5oZA7vhjYr8npP1vZ1C5PUanc96ThvHqbf1iKof8aNDDd6SFjaE8gzzdjnVRu3P21VPNNRhNr9NGBjbu8QK",
  "key37": "44TAEyySqfx6zezMMb17cam5VM6PPr1zkd1B2hwxL2yq23KJK3FH1o7MzSspJ16Hz3Sr8bSkbdJxAuhyduQsEm98",
  "key38": "25jLxbFDZUCP81KseGY1mNFvrynsBEBA3k36Zavd72xhSw3LQLnCGyk2RzkXuEFRHPe3EmUFXqdiHmmzu9ujNbzv",
  "key39": "5xoW6XzDNuB5bh1Ziq41ziQfz15MwYuRoaRAMdKomBBzJ3QYfG1XoujQw45c4bM6d4MXTXfzTUijfDh36voWUVCQ",
  "key40": "32P7LATajZGg7whAYFjiiTcuCg1fA9pdp29ZyfaVPVrob1yYGQ5BUVPi8SRB1LnyKp5RDktuQuMS1HZrfYXf558S",
  "key41": "21HJGAC6RFqBEa61go9BBGoMvwxK6J5muwAHx1yBny4Tiii9uqkJuW2FrqVveGJC41RfC3QvkfkyM61wPCLX9ecp",
  "key42": "41xKaEqVo6WBm5MB2oFc7N7xhR1cP1y3pfV6i6vcnJmyH2u9myB6CMGjmr79Ncg6mjbbFrK72Q9W3XbkhenEgTp6",
  "key43": "XfahKivkSo8M7t8U8utddH1E2NTd8JgeLLvjwcABtmAudFLZzFVPzUMhC5dBzoTL3NRyYRMwnPNXEjdCqT9uPXx",
  "key44": "2gBUsfSFRa4g4DBB2hTuPDmJ6TNLkBXvNfZV9NfKoxVMVxrR7kBccCH5E4nLQv95VSMUXv4hCLNYhUTw6XZ6Hwx",
  "key45": "5BYDH5GZjEXVK3a8gXy6rDNS84Am8R45wsgXp5C65oNhgpTSwX7VhpUDAy3gEvBwsd1WAb5vWWfULzND33bzHXTb",
  "key46": "2CEYxNzmnWKQQuvbq7cAvDa7vJWJ2sMxBvgcCXhZQ3qZbj5HgeqyMdCLCPbftXPyY7zJ2mfZspk5LoP5KHUQGkun"
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
