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
    "41azBHhsfe6ZAZfSAbPGEcdGccHRPpiUGRXkrWyct3Wp1khyYrKVtE8tu4D6EwZSxb3VPmS8ay7np1ucwaKxa2Ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JLK8MpQcrtVXttWL4cz2zRwYTAVD7WX4LXsK3BSD2y9AQLWswSR6mePhFsf8iihp74dsQhKM4upQpZC2QVRwHoV",
  "key1": "3rEGtY2Rqgepqhx6uKAgR4djw8fEDuS8VWoJ3kZp2K9iHqXEQQQTGezwvfNkFX8pePWu9Kvwab73GCoYHUH1n5Dp",
  "key2": "rrAF3rQpBAHBicxo7ujU6Vj17ERfWyDuBLaxGstRevw9rA15kyfPs96X2pQA6WUNAZTjYR4HAcftQACko3qTCtv",
  "key3": "3bM6m5Wg5uKD29RsH8kVCMNt7JLM4qFRoU29NXZ2G4jkJFLCfoLySs1Dyj8LttDA8gcox6oNigBYnVNF5joB45X8",
  "key4": "2RECcNg5JzXW3D2BznRafjJJ8soWbxF8mH11n8yC8jV2gmvcgvmD6LkCHzVb5RysZnzc6r6qjtWhevdDppB2DqnT",
  "key5": "tM3hNGL9ywVgCbX85Zh94MQgTpnDqFCsJSMTuQ2uC19uFeNCPjqr5kPpGSx426qexeRGvVduDdYhpkZDn96xeXR",
  "key6": "4Ky5fSU9m5YPkguwh4ZAvkk9Sn8DS7M5SpZQdUe82cU7XzraSSYngfLDu5VN8Zx5rkdwj8L2fPW76FUUVLgdNS9Q",
  "key7": "5MrHtTeThUL4jhK2MZ2t3PbWfTSYX6ptFmr1UJeym9SUXLZfyS28ffEkxKwULjiE9hgUEmoufkWuLCfsm8FUjZX1",
  "key8": "3i9iThD5nu4JHcAgKFLDToFfsxHmLHNtqt7WyuF4spJqzVT7AG31RrfWAGF8x4wPqwwhVDSfGci1RCB7dn1M1Vjb",
  "key9": "2ZzXyxWALvEfn7YAEfEo6spSqfkMEvDhNGQZh4VSfZxAUCDk5CLkrL1HxQ95NSDuWRJahLgU2QdQhJoYFFdJqTd7",
  "key10": "35kN5LP5irrcvzxucfDs7V89Y8k7tfEPHyfiKwZ4hS1DiBM15eJFTbBpcxehE33J864cffgDcYtBiUCHQFyyXJRv",
  "key11": "3Q6gSVkB6CZkhqVkJeGKBrKHxrp5TT6XE39MDUWfJnVJg81tfRejQWPG8hnqtwBRXffyMf44LNaNtj6YPuaL9zam",
  "key12": "47pE6BHVcbzXoZevocAgYthNaj8dKUddwzE6AGnuWG3ugAzBQjptcNGepWziAuo89KNC2J1bGRoYfY5GSCUh5CZS",
  "key13": "5g7kP485z4JsXFHFYJffaVQ5j7LvrLokDkANqVvJih9bw3ZFd7XJn9Z27pfS3ruvbeYZSpZth3YQLEgyBXRxhviK",
  "key14": "5Tj2hQewB5omBerZj13fwVUuqmU735Pg8B6XUZWiWijMT9U8Ls2qE5EmjixEDevtmAfYufTzrUaWhF5xwUMUPdy2",
  "key15": "4hWPQiLN2RpL8EBVP5XLMXyH6QpXDE3qxoo72ae1K1E7gkGevd7VgNHjY4Qctp3kofJchtXLzUX9bXFvtP8coTxX",
  "key16": "265ZHB2T7QA77kyYBAaGF9Nt2ud22sAcbqXahxkiQQNBdAdTvYbKjG6njaxZPQCeWuknqdmVNAGimAywYfnnMKAN",
  "key17": "2vegNvXBVT6L8xyEBuTruRfCziDBfzNJ7YyrJdywutrPJPRgGU8GLnCD5in8tw9wrCJijwbGv6rNgUQ7L4x19U33",
  "key18": "24aDojCvKJJRbGxjXsw1wwPqp5o2DH2NcNvuhDxCskKQwcmGn1agTjG639Qc1TPM5fEVroZ9shagHP9YVDH6JM1P",
  "key19": "ZEX4fhoKm9jfQRVVCcEhijYS8mWAk4NTQDPQvEphh23vnmPTw2LDxQ8pYxzvkKUteyrM9yf95R9ZE8pQNSpX7Ag",
  "key20": "3kCDavgSQESw8SikUcQY5KzzFXYbTNb9BHXbMfPJ77f51tiMFAF4Pjg8ZcEajYrMPfDG7VT2MuYoiGt1iKCqW1Gu",
  "key21": "5XVzpBjojBExFCjwnCeNrbsXXEAR7XBYJq6WtHSbX6qKm5jmRL17hiP8wDhDrJ1YbfvduPzZuLU937svjWQFMLyB",
  "key22": "3eDxR7LpEUcBKp3tme8AUdBc12w2penCP7e8TiaRd45Hnpg8Mf9xSs69f2WgaH3tQw3Ddun7raXGvGneXyZNt8EY",
  "key23": "4Jx82J4uRwSMjwDqVK2efSXHM1Ma4Vgnurf5JCuwPaooFDNPannLuZYzZVddZ7thahukrVoL3hgTP8dxWrpFd8sn",
  "key24": "3xEWivDW7RGbcwDiNEGtg2Md5ggpPinaf3ExmzNzhujpRmXuc95EX8bJKYCWaGej1RT2i2ZhruNZoCTwtHTGa38n",
  "key25": "KXqqJNyyZjFaRm4vdnH4zif9eJggBovhmxSgW4k9ykvwdCbxokzi4zxcPXiGBMKCxfz55zkBvK5RGyopHqzMfDh",
  "key26": "4BtVvwkjoDAKSnEza7aTcBXdKVCJftFoFdZkdQxkyMfBMn3ZqenWd4w6UqBawD6qtLD7TEwcxDXj8yheByCCpVFd",
  "key27": "kg8Yw8h26xqTnJsf3FiuCj9t3xtu8zJSkWbeF4m1eCgsUPbQKZzBm7NoHBhLv3pu8iGijgJpDhH4jaoEJnVYdTe",
  "key28": "2c2vgfgBhh3hqrF3FDyoyLSsTqoZFPwwAfoLpHCkQormGWQLUpSZVp8Kt9nifMttxc2PvPAd1wLfSn3eC1ZQSw9A",
  "key29": "2zsPENv5yHjwnmL8RZYf8YhQzwLiwNsf42sEP8ejEQuxaBtx21WgzR2NAEUSVuG8wpyD3k8j8VVmW9Ammzt23JM4",
  "key30": "2VckcxrjjKNcqnUuVbBXx9xmv6WGqWfVEpumM4BBiiJbmoFuASwnogFPE5XmP3KXy49Ba6RMAhqtR6qHRCqcmFtE",
  "key31": "sbLgYKJ6AKDNWM2nYGYBQ8f4DQfsQkfnc1hDKTpxq9dzudELVGKwMs1j2GbE9AR9TEFNLs3m93RYjexgP49Lbw9",
  "key32": "VtMxSduXRduVcRazJQJNbjJYk5K7mixb1TbK9UsBAoTqapk9iycNuENszdCqTTXSgJ8ijCpANrRKpqvcgcAB3cw",
  "key33": "2LFsZYTUJfz47U3kc3ip9EEiJHJFBCBbS4maJKKG7MvPNgGea8e7vQcYwZZTKRDPWBr5q8U9Dt1MdNmR7WifkM6T",
  "key34": "52kWxzb8MwcuN3jDsMHiqQGHonFFra5t6o6eo8a2ErYPzjXChAmfxu3CCT9BYzFJ7gk4XMMG1oza1g8hH4AKZ4t6",
  "key35": "4scTbVDRHvfdeTJtnsbC2Q3jVcKR8Ums81aPT3XgXjsQFNTrdMr1ufKZeRhqvtK19rBrTczxz9chTHeN5KsKe7re",
  "key36": "4b8PLnpbYhkhkBYbo2oenXEEyTTzShishy5zqWLSXFGZ9ryjWfi7JQoUXe6nWSdopHpAVarAxVVzRR85Ny5tWDZw",
  "key37": "2c72Rd9iHZi26wqcC9H16CKizJV8RPoexceWinAwjSzrQP8bqcoUid69yuwKLyoeqDyJLvQ1TakAhyTeyREAPuhL",
  "key38": "34bmubqHFALWti17Nx7y1VjvPXHDmJexxY7spLKqSTQkfKTNeVvry4HdMsCQHYyPxvyAniNw9ykiDr5MfKaD9bXx",
  "key39": "5t918EZC5x5j37umj5w8jJAzXfaAjEHABhvyFNwwdQLW2CCnsBRTbutzfzKDcjvoMB46unwC7gmNgxCE5uncZFvf",
  "key40": "qTcav1JQVo8FxiFnqwQT7BUnejsWtvoocswRpJrrNXnjET7HBfASXE7R2qREiBnYZtqLNvBRxtsLAHcXmZNKTxq",
  "key41": "57B3jmcUAXihcv1Y8yCoptCDdUeLFwx3Jyj63kwdVwM4fVJWHCoHSs83PspZZXvebTGC4oXCEHVBCtwtFZjm2Vh2",
  "key42": "4u5R7bTLLYLutWMYhb3FswqbB588CNWno9F9KXPtHictEJAdw6YU4oeCbd9bJtrGw4MogwAC6yziKaAJFD8psZ5v",
  "key43": "kDcabZU3S7RyMozjuvEBAw8CJUwXfxvZ8Byqv814aabLXkWrnebZKTGhR4YUUQ1shVQT6DFYTN2cKpHnN2uywYu",
  "key44": "5keNqsphFFgJmsLoC94XZvde2UjoVWUyhN5ykeg1Nuy9BKz2dAuYgRvecN4CJMZXGhztu6WXe4ygkejbCEvbhhdu",
  "key45": "5XLLgaWuSSFL2ndPcGnF5K9XuWgSBWi73qF9gFemjoi4q5uLv4zwXAxUk7RkyNjPnFgV4dtGTNcJcuzkKWKPJkAj",
  "key46": "HYRb8H8m2TXcN4YMLa47pPhwy7Z7siwk8qoZwFMrWQj9pBgxVpzbeAgyRM7opSNJkJNTduqiV6oDpcmgHXPt3nm",
  "key47": "338XVHfJRU59vNB9vG6F2rfyMESvBwQP5StjjrprmxbPzvC4D2sJPGp2PRMUbkVq5DRLC9Pai4GCp5EEzRHwu32"
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
