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
    "4gN5ELKHNsL7gG4eZbot6gy3LS6AcpNNPWEEFhuj7FH2ii2jRCrHPS8m8AkYCeXPnTf4Mc4d8SvVd875yv3SfBp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XiDjTqQ3kcD46VtYVAVmkGuY2P69pboimHiFpAV7xNnqpbeGfQt5WEwFsJyrwBE2hm68P8umCWjJswT93eKCZpi",
  "key1": "473mgQ5J7QpCSUFk4U8Lw4pcRHYv7BtropF4bfUbNoaAAHUjnHkfXNZNjzzcAEQ7JVcCdJ9kdHTSakawh17BxW6z",
  "key2": "2YCv16KvSAP3AmEJsMRBB95sqqxa3gDVVVBXNV6eDPZXy6FL9tPgGaiYKCMDJWJQqAxUaFp3KCpGwwt6DpVEs895",
  "key3": "2iJtrJPj6YAqAGP12MBrtDgdmP4Ez29841RPBUQrQ6WbWM3am6FjpJmwLbuqr7sTAcmDGGU7tmaG4f8PzQMbgxn2",
  "key4": "3bzhjuhezmQLs4JYtB6MvcU9XJb7LyTbAwqcaaDiRDwE6cS1QmWeG7y7ejEiNGN8QZFHHpquXdbjT5a23j3xbS3X",
  "key5": "3kpZxsSZgX23JjXXuYDfXJMxa2z9h1KgbHKwddjF9dh8AkP7t1vmrBqtLNCL1wZqdPSeCf93EzgwyYxVFTeeXhBY",
  "key6": "3vjdcRHHbgTarZYssiAdgf2YcFzvA5zGBbNk3wmdxUz8L56yW6yYaB1RW7va6opo66HEMX8t4pPudtUigrwzV5um",
  "key7": "5E6pBuTDJqeJiYSwwyZWUk9Yi4SjWAc7sNWa2aA7s6Bk5HvQCL4XydyUVmbpAkgEDbC6FtVeWXML5Vyuu79CoxtB",
  "key8": "35xqR2XwRJkF42RE8pnouvMhUn25JiXzr13hG9kwD8Y8y1wXKNHoPtVfF7fNri15APXC2FeDAA3DcPCgK6pH8x1U",
  "key9": "4Pd44hn7sW13LuUqqMm1VRYHzK33aVyXt7YJnDDMazEVxByRGsVYVM99kD77s52b3hXcsn6QaTQa1YiB7nBGmiYP",
  "key10": "4ojrWH5jJPU6o6TsrpYNTGWkEqujdWw49r4tjxZMLJzTpVX6bZvqf7Bz1vybAsPzxigsJiWdSq9AzT8eo3vQriBw",
  "key11": "45qQu1cj87Bei7TUattG6qWnaNvioddgvS4eMj31ScxBGB6EWqaw9RS2WLGAUsAHhqhD6aMcM1QNiaxpza1PfmX7",
  "key12": "5bBnKtgaqNSxFReCjAzSSDgPehT2xsCYVv91hrQYjsLmJ66RyQebdFPFLwDe55hAmyYQhLC9WikKVsNRNkfZVwJ",
  "key13": "2nGikRNpQeshzAbX1Db4qT6WV2QkywpaujKCc63DXqtXt4k5Wi1DGwQDS6yokKLMWcrNXM6j6QLXh1afCR2bmbu2",
  "key14": "2H1uQ8coJvehEJCV4uAhyrUdEFZdKr9kcQHrZyxPnfnA9R877ZAy8gC469eRMkS8sE2hBpqKaiRKW8P6xYmnJpPC",
  "key15": "5PGVdZv5XGuA4id3qMj9RrqkRKKbNsxEuqWZmh1L4qy5F3xkNB3XgjiTVTdN2aHPWCHoSVRhzosLW8Tqi5QwnUTx",
  "key16": "5p4vg2kmV3dF1Yai2mzNfYiKMn8hHqi7k1c4Y1EMLXDVQM877xbSaCQ7g5R2gwrBb3T6MFeLW7St2dVGcCs1qQs4",
  "key17": "53c2MpS8PxFbEq6fQFbDANzWkNyx6mhz3XtLq84roHQ9xVT9fRnDjKKZHyeyxG8gDKT5V3JMckadj9s4qiqcqfQd",
  "key18": "GpnDFvU9HMiU4yRhNPzAirAyRyCePc8ob7Cg7wm2tdsyeV87aE4r9897XvUFKAtp89TDZLNmTpmv6gPmoK3x3dx",
  "key19": "55dSg3gRTzyJPDirS9HPnbuctjTnpBtDNWeNy4rjL8wUYzQ53nAVkzv3LKnivTn6pqvAFmKsrCcPV9ZEaCRJMsqy",
  "key20": "4W96aGFcaWfmGBGNibC51aBq6PmUQyUduDaBc9RfKLGiiyiVd3DFneLq8s6t7s7jUALdbCvYtSfSSpK3WvWKwxN",
  "key21": "KY9352mnLcVGtCaxiCW5t59C7t9uW8NxH3gJW3MMsLbFfdqrVdZ5m3v6Xh9a3xcMCSz3iVkKLVRu9Kfa82QnWko",
  "key22": "5W4kdfuLfYu3EA457pF8jAj9bu4Un5P4uzdCnqgffUfHKvgxzEqCzJXVnFmiNNFipyPb1kAkoyTubTXzCrLYTfx7",
  "key23": "5FPBNgCkjGQX5JgAmtZdKjCASsazRg2dG8aM4NJDN9XACK6wFmfixKyH1QQaPcd9PHXmzeP8VueAqK7f6SqgTf7i",
  "key24": "3jLibjhFb9Q8D6hYcovvxTaXBCXciE5Yvt9MUT5PEgUNmgoSrBHnRXsUiG8FPsvTqCs7ve9PahMkDcFq8N42yNB",
  "key25": "4QYnuNpzMoAdiWYz7htEng1Po3wnyjK7yokKKQPetQ12uJnALQuoQirzK45we25MQEtSD8wou6G1GedBqWwpo83z",
  "key26": "364yYyaxoacU8ovG2chjYV6Dbuszcm9hhXJsPefFH2b5EdiNdZY8orCcCcpeDFa8LBnJ1CJDDnHLwqLNJ3eVAY3H",
  "key27": "5UhHERZMWU2dkjhv2jPL85eaxiCseZYJDNLMeBRsTpmeNa511gHV3UkVncs1BEupMPwg7abFeE697esFu2AYzd7M",
  "key28": "2TyyJmQ3j1yMe341oBZuLavUCZtRoFysdaqg6QvLuYHS5DJ49htaQysrSWjhExBGCLw3vNMUbjTiu23WuWDMMSLC",
  "key29": "U9TbNHGkJcPDoDswn7sqGx9TNQUVa2oqavFRobm5hb4EfahPJ2vsX4Zr8y78WQBdNFRhLjpPUu62wuJwmzk7s9B",
  "key30": "4AwEmu8NoKw5wEhUzhUELmkwAwnXXF2E9JnPTyYmsjsEUAzw4vhBoKCKC7anVpVYu1GViuDQ7Ddae1ZHQvmDUh9o",
  "key31": "2cPoF9MSSqe8gatnD5vvxHyL93goBjdEiBjoYpoudhXUY1WAi9QEDfHiHxHY5i5gTE3fpH3nbPUNhfGhSd2gm4xZ",
  "key32": "4BJfTF9fcHDAq3HF37hSCmRBfMUVJYUC2Nqg7pJPmDoJNMs51WAHkfQNU793R5qohzpfQAXTyVbdstnnwYdgo5eN",
  "key33": "4L8X7CyjY3yeyGuvb1LXaNyZUGaVWSQZrouzkNk2mGUjWPVAKmCY8JR6fF8rNnU97vjTWTzHTxU77KXUhSFaCwsT",
  "key34": "2KQNG6rT4Zp6ceiNetWAooZ1UxkotNg6pVyiLAfyF2s6vnQgvTrAMQMLTuJFupmx2moDiHYMd4wP5u2o9pcVKG7R",
  "key35": "2fDRZeQ3ccavKJcka8aqbKSWC1gkgn11PMin7krRmaze4gMi4ShK17FjqiquY3uKjBQ4591R2nuocDgKUALZ3g8S",
  "key36": "3a7gu1L7JqpPU7gdNj6VBLrRRkjLp5ZxAhoAi2ap4ZBE6eygGxKGN1eMXHMjLenKizkK3dCDh45fAy1StXU7DiLt",
  "key37": "3QMFUv7w6gXL1HXMVck1eFbAz1B81DmTVyiLkV2s66p8y5N2tF3iGMc2BzgyTwAXo5tkyndtqEPGJAoUZbvLHYC9",
  "key38": "2YjouNhcQtzrq4x9wPtGyqXAZCMVWEp8yctb46iKjKwo8x8SykhWDBzVDqS3hMgWs6BG9adVtCNiXQv9AMXBRwfr",
  "key39": "3hDx2SfLCdGnWBMSZPPiPK26apeb8HusJRyzDHpHouRTUsYQbxmzdBgms1tAUP2ZExjk6cxCSjV4gn9zknFXex15",
  "key40": "D2peJ1S6nJEcRoVQVabVRmor7jrFkvpQJ2Km12Ui52XBGBkMQ9tfBNcugLTH3bkgvsjEwSJQyJUFrtVj6EN7ggg",
  "key41": "P9LaeD1FXQF3tq99tZNJPcYdkViqDXS16aKbk1PxHkUuJ9daZQCdXVtCyPa988Ee6gvMNmJtrEawDFiqjoshuPa",
  "key42": "2y4MWQteS1xscveu1SB4bFu2gq21U6gDY4Ep59jTmgq21NnWtTYZHqYfgE9kWAqnuyT7xSuUqMw5uzjcya9FSCHn",
  "key43": "2turqkThBRj6sWP2LBtKfQJAtqauR5MXoDiQQExd5J3PURRzsQe2Re5wN6qg2ciFSkJ3TAWGseXrNsFHQZNu2EVx",
  "key44": "5CokwPTezzvbeeF5kwG8qSewmWXKvQtCkNvch5cE37Y2K7SLmKkCXcKpPSp5HeK7Ma4MS9ENm86et5CHEB4Zmapv"
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
