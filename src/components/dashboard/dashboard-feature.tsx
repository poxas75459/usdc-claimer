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
    "52RAQq8fS1S3yQeaMbyUdsvzSV6hyNiRUaN2kmkGHor78CBcNvVjRKAgPG2xSqsPQHB85j2b3Yhr5vap95HG9HDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tptxQXdoCV59DwP6FRm685f1zuCNZD5Y2BC55ebQzsnngjBsjSBRkBCK3btFka7eTstNX71zt3YXo5yuGatd1X2",
  "key1": "365nvkkq4DFPxYjprqreeoUy3jqitpPPhrvkrDDzvRJoir71Rod3ASikSmRY5S1eV9KdUV1Uz3VroLyREYxFM4pd",
  "key2": "2GaYrVwq1neNigRPZwqrxe5DSS1tyTZbdvCYsDnj4NQ7CJ67WXHiGe73bBDwmJG4CbEpsW7z3YJ35NGxSPLYpt9y",
  "key3": "5n6NTw6xafoq7Dxvf5jMPjmA1src2dpJvhXAZis7FQ3eD2kdf9CssT2hjj6GHud2DFUTz5HzXqMP3h6CuhHmh5sf",
  "key4": "49ZGN1p9RRqVnc9EgLGGNXMY4dSVHe5p4DbE7Xi8F4b5im6Dx4VTqFFHo34hVEGdECsgogGFEQuBxumU1u5uxxEn",
  "key5": "3CaAZ6heSheGTRMThoGUozLZQeSFgmie8aRLACRUQ5Z5LwTwPvqttg7s36yu4B9NejBRTQAJP9y246bXcE3KV7dg",
  "key6": "5FD1NGVMZ5xGYNrK5FeDtEaZLH6XA4ZEGvJt7qhb5raKsfadqpM5qFsdrrqSbXwBLbGv8vX7NCb6s8W7SpsCLhJv",
  "key7": "69qo9uysaVai9M6sVMxd92xZ6DNr95M5taLWZ7EZwY3uh7GW3N5o6DHVnEJg3axxSNQP1Px3CkKS2T2FqjiHNeV",
  "key8": "3nT3w871VSFPxQ2p98AZ4Zp44nDmPf2bzCu2TLbb87BDKZkbznVwxvhsgB4LLEPduuvQhDNN7XFg97dYpLofkyg5",
  "key9": "5KhBwa5yEHHCjotR8PErfbvEZUVZSHJcSMDaPFTG7Z3ZUbxFQqgadY5JVpEZH6W8Zbi5MuiFQ8oy6RFiF9qohYHe",
  "key10": "4uYc8CSsBUP8nJXSMErxDD9g4mMiDRdsuHzPKS1TA9Bh5414dZBwL5Qy6qKk2wn1zdahHvCiqKiZJquqwwbhY5TD",
  "key11": "4BKVYNoCSBqR8E8WCS2SK5VmhRckSLrS5LAq1YFU5NmMqWh1EyCv27uPmJvgJyxL9tRtemC3sG4mDBSAhEX1qp9W",
  "key12": "3Sox8Q8r4u44MZjmA6XpAU7qfBn4vQHT92rzWWgRrjzaPmgWyKQ9NeNjEGRLRzCEgWaRpTJAvxVU21aMgpVqcAvw",
  "key13": "3TZVocUDPL8J2474svejqASX3dNExvHJpUH9ehxKBfk6aKJ2tVVxGUy2izbjqnEHvM7hdid2yFg5JcQnMZUBVSUJ",
  "key14": "TFBHmZVv8WWnBG1z62vwBndzJ3gHckYuoj3TtU4MRUs9d8u2e8WTK12JTS2EyvzV9ktLCCm4xWpJU5Ybd7ghCXC",
  "key15": "49xsqfNrVcgKNJwk4tbYGCbDWQt6gPyfdHr9eghstbQ5rpLUhjDLsGza1vah9n5y5Vbn6D7GMD6mBFTkNXYLBxud",
  "key16": "37749kNNxrTDwV1bXG9ZzAoXVv1iHCPNbXP47rEhpVDUAKM1zuHah9qTHeDdYPFwkMJRt7WcYcbtPVsntQ1tFJp1",
  "key17": "24MJdisedSeWJn1dSCuBmcXfgxyKHKNFTk2ceExTVrRCqXR24uFBQvBHDFvuBPLCxG8Nt2nHYnvvpnWcDxYDoVPC",
  "key18": "48FZ3HpH4jMs3YNFdzSt1jEKdgjconpB4nkgNPLXmG4uM2ikXLF5CCYnZytqWCWQNaJGjzu5is2uG3axYH57yMEN",
  "key19": "5fDZFVpWz1TjpsFL3Dt1r4RPU9822M7PsDpXP8oQomzaDPj4nTqnxA1cVdp2kCLYszFgZTULuGcJfexhEjhjniAB",
  "key20": "2rBVrgn22RWznJKTnZXHiE6pEoD7W3a9spi76B37ByyvGvGzQngANRuYCK72u5B4hQ7rvrGcRgZhCKBsSNmQ7WQi",
  "key21": "3hqdjbgKEsSc4XjebAe8bhGx8jUAtQQRSAGa8D8FcpYYTieEVogpVrFz68uTqFWwUMwsFQJkbiP1eoU1j7SZxUjW",
  "key22": "4GcTQFZtCgk8fudvQYYgxy7gadPfBa3Sez9DnCWceqr6RDVZhi957v5xsffkjSUVJ8Qb81LWVhwpEFesZsTtG43H",
  "key23": "31nLa38GzVQue2VqTGtEZBS5wrQKnbQxfSGn87T4kPT8AQZadeSkaw2SPdupQ91Em4SQS3dRsS6UXbijx7fTaeC9",
  "key24": "57ajBmx8psKtpbgDB5eYbyx9nYEBkc2QB9XMq4yEK7KxBnuj31wfiMCEHzLDNa28MpxM9FcTMSnh9rksV8X9cFNq",
  "key25": "8UvqodRrFebZ2aPwxgkwioToh1rLAYmY3fNgPc3BL69iLCSe4qvmWvEn35rERUQ7zbwLNTxQG4oUZvqx39HhVux",
  "key26": "2E8mPoYLz1CzSGU6UvssWFWs8LUA9LXCKSi21R2A1AY3E6ee9K7RgQLBaufsJ4fvLzmv7rhpU9X8uHarYk2FrKX",
  "key27": "3cwXiYCcpwDL87v9GgrmC3Ub1UYV7pjb7JuCGVfCP1QyARQ316mHc5bFuk1sLXD1ZmLxZRBHwhJAaprtd64Wi9nc",
  "key28": "4M99XuievhdZYReeVdnFNgiAvNQaNC43XJvAneFPzNWUEPW61CP1aaBa1um7hByxWbkbQZDJKrDTAfCNVfjiVuq4",
  "key29": "fchSVBhjQLK9AhvWhpK9Wj82th4Spzj3p2NDkaUDchCrUXuDFc2deW4D2WRHyHkPU4jS1Hh8SsZjWtLyBJs6vWn",
  "key30": "CEJ8AA8Nw4TBArW6WK3PpoDpg6kpUJVqbgfA6qkGym3SYf58gKnsnws8pURLe479Hc5kVounZKsnFi212RTBXvd",
  "key31": "2STegyRXkixGiGt1mKqQ1GZRj3s9di4h8getRdaFm6uu6SXMXiwhCkHivJVdyPgEMsoN1gtxXVR47gUgNSP7YyB3",
  "key32": "5BWqSsmrxpB1ZER3TuzHHH6mfnxeZ4mzGQvVW4uJSyzNc1fa7dLRZX6VWjUzLnH9CzLwJ2Fp5UMCEoxY8LvdUfK9",
  "key33": "aSSvn3TqRTqssq6fB8FuJZJWW5rYYf27c6r6eMAeDrbM4prVFCLQ5kqZchTUULn8Btiv5XDR3eApkiaLrLYWMxi",
  "key34": "4GTy8pnh5zPqeA7K28FdhT2Zic9NV4g3p2HTKJgxMZkN39tSi4VhzmSNG39WSLo9g3Qg45X5xceo13NEimyqm252",
  "key35": "4M5ZXtY5AUzqMABHeUZqQvJc4xNDEJ26hNodbowkGLy2ButUnchBzZyho1WSTYU89wLnSSWMwWPqQgeQwmfGx8Wu",
  "key36": "361Ji9sRfsE1bdX13cR5vEscZqn9S161nmmEe54TumSh5F3dBN4Uv1uiUuT6pB3SdjizkbRNRuEFWbcqfiDwHgmF",
  "key37": "2nDKdEVs3imwV3UAkuVFwWukKQrJGuapkjCbhS8KALGoto6exio7x2or8bXm2YTKpRPzyW2XSxfGwftdN57m8ixW",
  "key38": "4KYCB5hKZqpTQBhY8cxy2dGsBjVLBonBiCRYoY2DMyG8rdNW6rP6r1k4nuJumY63cadXKnmUMzF2eFCKFn7dBvFU",
  "key39": "w3cjiRKKe3RxDg5LjaT8tVmmki4svKQCH64gSd6yS4DmLqpznEWtFKuaBAzCuBdZ1GSESzFQXtwZRxZxYts4DTr",
  "key40": "3cXjWqS8Bx18m1ToLie6mrwjXzMzQHiEXSiutpcMeLhasD9PgvdEt7JzxSA49gaijdq3RqXmePLFVVTUxte8dcKN",
  "key41": "qkMf582AhkC12i5DfP5XFntDQ3fbLj4nVb4QVQLRh84ndNatggeAGDy4ieuJC4rMQbSD45sNgafREANBoy8k9Rw",
  "key42": "3VYdZQLr7dQDa8RdFwLXp5us63zGkKtZqa87nUCCGofuKNshULUBasTo5peYchzspaCRcjJEeE9XCHLNgNvaUCJd",
  "key43": "2KaM2AH5FGg7pisS9nrVr2AfS7vFdXQiP6N9Y38RFiezSbzxnD4V23ZszqJ3yV7ZX98xcyVvyrtmqr2tiehrAyv7",
  "key44": "5fSXkm3gb2qHvtZe4ksRqHW8a8vsDbFgBn19p4XHvZsVX8Xoa3UkmL4WGh7vkgMMvZ4U5LRUwTufFTU3gTxmSJkm",
  "key45": "39cdpzuG7Z8wvvWj7brSHanHoCwh39Lc85P7vfLPode48mnR4xcP9L4thhfqvKSmDF6E7eUUWrffF5zjAjcS3nTc",
  "key46": "GedkDeTReAMSonEC2J9p2p1A4Xz1x9bMEP9iSSDxtDYpfQN8CTWDwWvhY1kDRgHNJu8BPRdzzq1TNN61WCF1W1S"
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
