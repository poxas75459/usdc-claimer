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
    "3khjavBeNqcDEtwQ73kFtgxpfEo1FvERBeCh6EMYhzU3d9MN2dTDW8VKq8o3LUpHv7ffFmUeJNXKSQTWbb7mibw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oLX35JmYdfQrZAHBotHjevzxhqKzZaVcyLo35L9qYYAiLETfMh9xnEcKSxcxPyRvUdVRqJqmve4jf5w73Aihgww",
  "key1": "23dJMGzDBmyQZE6VnxR8HALGGguhQmszMGywxiE3LhvaeG5drmLqN8b1pPEge16Boyb8r9TJjxL7T7GDirXWRRzn",
  "key2": "35x6MsoS784P8Ab7sTms5LjXb6SZ93EV5ywrVC55fgjPm18WZP1qVtgHjohFRVhVim7XJaMYABR9TieWtZXPU66G",
  "key3": "4rouDsCisjZ7aBQLJppHpqgtfG3HVhjNwPT4C78bxWPueiz5zZDLJfXEg43k5ivVRyMUz6mjkdwD3N3K8yHkKxGZ",
  "key4": "62f2EQ8J5YsWGSrqTTcb2tk79uKtYYEotMvhgtbn8Bd5d8JdWkeGnFjKrtcCLeiqHNYP9nCHr5P1jsic9XppL2cX",
  "key5": "4WQJq25LgXTsdahXNAe3KMKtX8t687qc4dRNTpWk2E2RsPCnTGAJdvxUkdmFbUfJ3nmtiojzZJmNwoH9uZSek63X",
  "key6": "5q3crjjKhqAnjT232i9FjFpimKm7HnXdVpPFUeBHpTo3NTWA4Ybtqxb66xkf3saARQUVNxauxUSq6BWPSAjTHhdq",
  "key7": "3HB2n2jGBJ3u6p5hsFNRE8xr6KhmY3Cnbigx8SdSmiFKNGL2K9vRWFRUVQ8jxBZVD5ANgyCAz8yAfJp9LajkwnF8",
  "key8": "4nuBe5PsMnvEHW43FkKEJ4BhEJi1brcXn2YvUca1HqJ8TVyiPyun6ENbqqEMrmVoe5NU3SbmVtB6i3h4ZauMc52D",
  "key9": "5jAyn7B463yG1mkKvQtxEfq7BxKeBiPXVzU4eR7nFYpmsELQD8DVvujzNM1mnzG2zpHWormqzkx9r1HCsGBA5McM",
  "key10": "4usa9EjrPhXYLDGBsk2rwVsjUmgi9fAx2bDAYq8cQ4WSqwtehGbSWtBkrWQtXoVKo9aqNi78pXFpHgaEz5WqvEXN",
  "key11": "42MxGKvyxMMW8w8JEu7KJiwgAGx9NJhxHbSASww7FDCv2hTB7yidxoLXwCVNWM8DBbYXBXpozVpDQRAT6XSNsE5v",
  "key12": "4ZDefDddBmwHtZvv6wKHH619ionwfKJ8hPBFYoD9VQLCbU36kD4xAUu6yyU9AWBKoKQe4u2qA7HTCD5Dk5BE15Ev",
  "key13": "3zkBiiyKREcVvN2F8R3GCxbTjqBLeEvLsx9ZnNCUFSJmrytqzLXh5A69mr5WkxnkiHroqevrUUwMsdv9Suk6HzaU",
  "key14": "3Qcsak75n1uq27kRa33MoBeUhsihWjeneRpCd5A4tiegRjhnYqpCd9mwRSgt8vNZbo1e9iskuPLBwEiaYqJNE8W7",
  "key15": "TCwjLGUBzxEkDX5NVj2uVp6tm7j8HGgcWYUDAuEG3fEcTsN84Qcavxp18MQsP5Ea5RaV39vUPT6VgpMgcecif1d",
  "key16": "GioHmwqXNYzJJ7Ay5VngJnsszTCMvb1uyNjqiBSHKFGXmmp2mVdt6WtTGaqA4sxHSsB5VdyZhCcaXqoXWncTaDE",
  "key17": "3XwneqxAWjWBpCUnCsGjmrmjnAnE7XqPJ5w6vZAz6AAPDCUjeKQuTUFvYBoTJi7nGS7ZFukRPanibPTJRAeVRd7J",
  "key18": "4EZYu5UxpYYChyV71UnGMaAFZk7Avfn72aiAtyyGb2BnkXrXCAHxWXn5EEHp87JQMBr8xCuNzPgz8vfRKhbpNacL",
  "key19": "5gZD1tzePiCFedYFKzsoyZGb5YPnsVjHj76JHmDSnutG485mKFUWzjrstX2MW1q1bvZjqTrPhmz19kLHJBBNDAot",
  "key20": "yKN7s7t1bUVhaMqzF9nNdPFgpdkG55iTerWXPZ4aCFacCn7exnW25NCqKBfJrtYpm42hR2YSigkLxrSaNRVvvLx",
  "key21": "AtDVxeFMT3MLFhTEjgFJ6RCwyJfG7qJPh13Pk4LXa5x36qe6nnQ7xfU2SsaB6iSmLonWPjRHPXq2Kp1EooZ8xjn",
  "key22": "4Q1qK8jESteqMfNBvLRCzu2H7aqxx6t3mYDjJ8B5Fau1fa6pPSsz3ET3pNvP7RZkrsK3ieAA9dQXMmam9ftDhW8M",
  "key23": "5A3aJLQwTRKmWYft1vgPvtsmbTQqwtBLNVPwbxnVEWWmsPDE8bq4N5DmAo5zWuqNrZYdBQNJbCTsTtb7AYzpUGFG",
  "key24": "2nc475rTFqi4fSxQnvcDMewHHZC7mnAaYoHiZFTfV9LZns87JzeAF9zNo98iiJP5RiWR4H1pVuXbd8dp3FchPC5P",
  "key25": "33DWsedPFc9fgd1ewJAen7NUXAAuqej5tgMpmvXTDo4xGXV8dSpm621ptqeatJtLfMLv2c9ZMZXWSB4b4Z49t3dX",
  "key26": "2pS5qA4121YZTFL1ZtfWBaKfz12jdC84NtTTdm1rhRKcbMStz77hRGjhJPg7KWXFuxdqAuwcKS6tnXZWK8cUwHRr",
  "key27": "4wQzeHXU3DLhfoQonBpvd6jJZ5S9JfEbXxvfY1tPxJRcC1Dbipx5uwPH6kwMMPWuW8gpb2GVamEfF4mnND2KkqqE",
  "key28": "aBiLkXX4grNrU8idJcBJRbkrWXYChPSDz1pSWCRmqNDub9q8JLa5bD9k3sWFVHJNDfJy3Lu5yLKLZRmXi82gpK1",
  "key29": "122r31zpBJvTTCbTYyUEdw7xsaajDv5uhzYLa9LVQTRRDPzcFnwHkUJR1wYYBsWPmET5kYufZn2ggL5kn2SdHGjk",
  "key30": "5GjpeRrtu2ntDNDjTdyA32T7SfSCWB4oBBgmqaw13n9owJTqWTvXSdUmrBeU48kAyCssMbdun3L4RSTqU4LBb3j8",
  "key31": "44AQexCouXh4ZxPKW8djQq35Wa1oQe5KP93JgknHYo9Au6yWDMeT9BmyxkktFqME3J6P1KPRu3ALsxeVKKDriA8i",
  "key32": "3Rvqys2JR6cAZCypig3ysbRBiZAGnLnFK5CFRJmtiry6KpnZKs6K1swFLph5h5jFmZq6cm9D9fE2HHK45c443euG",
  "key33": "5MsYu5EA9nUvpZXtcN3eeWbwVzArdo6cyu3EoX1tmxxyejpA3cG49r9B8giLykCFonC7dmaKv1fuDWDWYs87AgXc",
  "key34": "2ahxjf9oBDbD5WHHnXkHgFsvu56zvjADhcY7CRfEPcZxEi3rFRrdv7Y3io7XTvufULn35soX6uCAtYhzBmxmMUxz",
  "key35": "Jdzwy1GuCmrjvTDBc7cEUpJTXAVpDdxHNV2S2ftCYF5EJ7ckyVi8dq7ZvVenjkhLRm2u83MmbEzhUiUzAK7ujSj",
  "key36": "4Zky9RXP9DHpWmT6XDsLTRiMvt2GCZamd33qmZDk9zfMCzCcVXFL3u8Lc83hxC8dnmXhZZsB5uZNy36odwpobgpN",
  "key37": "2Xj1Y8kifQco9uhiurAe64js7LxEEzQsK5PbyNByUaWbN8Eui4iXN7AZ5vhsbVcqw5CyuGtqzqyh55hKBgueoas4",
  "key38": "7aDYEgKRa8xFqRaRqaU1U6h1XMJXAsP6eWS7wr6a85zHoaA8Uba8Z7sQ95faGf7sKvrPMQ1LCnkH66QV41uVon5",
  "key39": "2VC1xSJBqjLcUnqfpwh83LYRv8M4Roz31y9Lp13vCjoPeSTs9HPwwXcLkzrTqeHwxA19NhSAJaVDhqHF9N8D85KY",
  "key40": "LJ3H11dVipcSxavKtqmwY549qVVHp9fELTGRkkEJ2Jege8vcExNLijZtUUNQqn2koDaPMCM7t6rVrgvJxrS4N9f",
  "key41": "3sy4dRo4sT5wdgVk2YRdNdJ8ThoCFft14ySKwPqpcpnuX54BFFgPneWPrkueZYFtcjDyeNYvwREmRWPz5pcKNBDh",
  "key42": "3gyXpWNF3pRsBAEn6FNq1TZRNHtiBiGHCkjRcE5TXswLN5zX1nMi1jcvozKuYg9rz2SuKb75Sh7L2TwWGsRYACZe",
  "key43": "2abD1FFNCscxdW71f11wVrVW8udQnPahfb5dFDp1fUxEs5vq62wi18EdL43zSEEEZZ4QPD18xScroBXv63CxYU7q"
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
