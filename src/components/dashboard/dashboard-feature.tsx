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
    "5zKuEqgEJEUikCQJpLXAKJHmUtH54JSBZG7BD7cueGBA2y9q8qrmCmPu1gc5eGhm5sq1XVi6gtF7hsYNZiZjm1nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57jAEiVpzsgd6s7VwytJ9ngesPauAXQ8Tr5moxrTL9MMyRsvBQ4axTMsG7gRx7gfy1VVtNhTutMuF88NL4cZAz71",
  "key1": "3rVGBxX7yz6Zactwtqxxh7CD2ecLapVhKC9Ww4nEZESdDEdiVU9MD3FgsVDj7cMr3wv1dubqxsjePnUGrv3shPz3",
  "key2": "3fYfXU9ERS3Zi8oXfzf4iPCTW1Xc5hyStTXzdTWT8cxGXemS92zEiKKmsv4BisLRwJLZL2Zj5T9jnANB49qqAczH",
  "key3": "4yDfWMC8Uqc7PognwosisqZYKNsUhDvS2DP9i6qo7AG4zwavubxWpKMMr96ZL6J1dBx9uWbhk1V8VVLENnEq9RTZ",
  "key4": "32ZBf9eJmYr5o7fGNfEEPDAfEAZTKzt5i87B73cTsqdURRxfLzPb3NHTo8qNZTPB6TBJ5BjA15rgbNkLy8AspiCQ",
  "key5": "3Yum2nNyBeAFxFQjtZxh1TpUZYiA67jeVVxgjDysvn6fz5wDiRf95aWMqKxEiGn9TEQWVQDDHLwp55mHHW4TDUd2",
  "key6": "4215byvc6V3rZUcAqUCzZ2GNUkEzYhgKr79zrUNBuAP18TeoABYNVwKCt6Erz57ZR81ijikRJKcX1BFfjnPhSHoG",
  "key7": "21ZwECqCgYE2qqL1yNiLEpBmnXxt2ZL1126iv7kbnzbAWRoZU2QgyQUtfMjUCLjbLcAmL49jxXskXQh3yx6nB7sq",
  "key8": "31jZviJ6oypCRk4CMVTWYcJR7NFZPtiu2ar13cb8QLWGXECAWBEbpBXMfaqgcEctTfq1KvfaXRyKiF4UQXiQQctK",
  "key9": "2omCA1mpsAb485vYbNwbFEwpufcehxUVzHAL6EKcd9C6ivyJiRtE2V1GPHcD1E8Z4NnAzUnPu31TT7fb16BNeabJ",
  "key10": "e78YHLD37FcjzmwDpBY62g8tMvVzv975z8tXohzFNGq5uWUqQkj3hadkoea1e1ESbgQfYhqKMFFTZWiPFjMLkyS",
  "key11": "5jmWTH1KkzFCfspxiMHVU4XwQgWSSZbUVTmx7xtWFBcPyeBBKRQZEPjX4nKpLfzX5UL9K7xbjF8guj8DcV1xcSvN",
  "key12": "5DB21Pm6XbVq767UcmuQ2ffcdnVcQVTJmGeCgLhiva3epntxPcHnz5Hp8VdadrNGsAe9fgje9XkM1i7AyssUqBRA",
  "key13": "5aohDYLuWXZHnLrbJPw9d3aTSFG6xRvcdvkYDbryHmAsFCxgaY6yf5HQwckXDwT6w4XhQQW1vbFEZtrvfZdDY6Nk",
  "key14": "4vkSxtDWo6pE1KorqaFhpTovZZHNVT12DkuTyyx3eTWrGQPziYpzNNXzGqjc7MTR1z1BjRget3qWFJM8S7o5SnJ2",
  "key15": "YFRaxCRCBXN8LHWcqHzXNVT3iFWatNjbzQwF5SQ6odVMajGajvZrvgjGXroVPfXqE3S1eYJaE4UWCHTRBsGHWbb",
  "key16": "dg3zeL4Zzkz9pUZe3zJR2hCYQRqKNzhJ21SarvcxyRzXd5sVFvGtjizUjs39NiE5a1FkwyRvibEG2cvQuHb9RSa",
  "key17": "2FSbuwr2cmzBr7dtYYTfg3monZfaZ4Bf8bWh2Bu2N5D3PZogSVe8oza5MsrSiYHRjfjds2z6bwkhCM571oBWHTf7",
  "key18": "43VmMoBraLcXbGTzrBrekt6ob9utKj6xHnx4STMy83JXciY4dn7As15p89Qh1UhwSYAvDS5V9BpPVh2e1Cr2NwA1",
  "key19": "5wAqwxjs2X2hkDXZC9QwoERspc2Qt6vavem3A3hS1198iEMe3VCN1mALtmAmGqkozc5JWFxkpr2RTEAC3pp9NQUR",
  "key20": "5uWwYHK6mJPXti6deLiHNfHP1KktAUxvjzBAuiKRAC1TzP1ZEvTeTb8Q4Fwu2PASQGc9zrrWaToJ8NJkoN4DwGBR",
  "key21": "4AnB54wEJxdKzSfcNCV8XtVmvsMcreS5w1FnsuUCjQK1HEog5vRzNnmbhd6vcszKYJQ8Y8bYjQx71YorVsv6z4Cq",
  "key22": "2oG97XuKjrVrWPPjk7ufm3mpA9fobwX8gT9oorZrXDQRdze6hCsfhfTyMbA7PuZjBKAZZ51qKHdAMCkebYe775iS",
  "key23": "48CUpAdWkJHSUcs6azoX1iad1VEmioEiYumxLgjF2WJ8YP41umUPnvSTaX9XeEbjEApjtr8vZc8aN3aLod5XMUfv",
  "key24": "3iip77WcVDAfwuEiVyJhWgPx17eHQvPV1pUTPhVDxhCq1NATouMw8zCLjkoHWNTpkePo385bzweQf9czjohT54Qr",
  "key25": "5CLbfnQSCGBrnMA5HPR5sDFY8LfAFVMDbENcNToyLrB9Hz8SQ1YX9KsAxLbDGvuRk4CLb5mbVXNJpjHwFdnBsApu",
  "key26": "3S4o1nL9LBk88WEWhDbhmnGpHJyow6PsEVrGitL3C2pJ8dRefodbtgo6X5oUXYd4SUaug43Z5ZH75xBtiXuM3q3K",
  "key27": "2fjHRo99neDfZnWud6PRLCHJYQnGz3EGJHXDbGej6dmgWWV3kNhQigqabpzLjKrDK1RY32FpMenAVgHDg9Mxm7D5",
  "key28": "4chDfpnzYDUX75eftC3nXQeqEGyxBofUWLEgSfrBJ8Ri2k2sA1Js657fR6MCpxrgB18ioLj8nB4kt2VBmidMsrd4",
  "key29": "2kHVMbWKGZjzVWGJYh7pYS8sepfEu8dyriknGM5NTPySKvwpDWAiwn1CHdq42nnCiinUv8K5JWK4GKL35KXaAqFy",
  "key30": "4xMXKk95VfQTMihHLccE7Z73rQXCdiemUvogXfA388RZjdLLHZKuW429hMvM4x5eL5VJbdCXzUzDcrjDmboNsVLU",
  "key31": "3p65oe8HnkHRPfNS6vbt6XRDr5PYB5TvFhc2Ttj2VNaWumdRnPY4gB8qQhYbPLahiMg9BBJefCT28T1ceuRMXBjE",
  "key32": "3MF9M8eC9v1Qq9bQRjCSK2MXm3K6SgKPkXw6QrKi8CSPBAh7oSo48iy3a8qkThaN32Lvj8LDeZc6gBr6jqeJDaRC",
  "key33": "2WB67pd7L9Ln4aGDj3ZnAPxeKMvdVSJbLrjvEsKaBdsFojjfqfoL7dnm6zpdV1rpDdRxXTG7Vd7yejabUpkFp6Hq",
  "key34": "2x3pr7MECaAktjrrxysKsYxrvLeUJFJmU7DKetydngeJC2Dxq4pAy9shE1q8bMZqZbBgHW8C88TuW6GtoV4LM96g",
  "key35": "2v6imt8CoatNe7N598vmvMESJGWjw28WhoNvFUaeEN4B5RD53753DRzCGrzbnFD2SRctuFwG2QPkEi2brizdVBs8",
  "key36": "DcpBw8spu7m5JQdLv47Kvzv4ENiMdnJWFad7r47AkVmBRxCSzAjeq9ta1j8MwY6W7WKmyTHoVTVvrMXftn367d9"
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
