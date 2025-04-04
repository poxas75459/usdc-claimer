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
    "3AmmYLkkvci8i7V61RLaAsqgkCLpEeiJA9nKqAaanz7q6rjaM8J5Wa6AcyMa7Yg5vG1duPY3pgqFzL8PouEBNGno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25hFeXt3NTxjG2b8xKExLc3s52dHP7v3ZJp7fdY8zy8rEAmpzpLbfJiGGAReA2q3KjriVXmBBGXWpG3cQb9PVZx3",
  "key1": "5MfgaKj8NmobqrSpoco7U2UDLMqnC5Lxwu5dT2D7Gwp7RqE2d9f58pdifgF8peTm38aZaHprhMYRb7vSTPBe15iJ",
  "key2": "37qTFmsXhnmFToZa8AWuxhCT5TyEq2EriE9Xs1HdgrznJVXpFH1fvcUKV649XDpgsmpU9PZ13J7SPcdKB1FFrR8Y",
  "key3": "5NYwfLZf6MZuvv4PU57y4ptygJrPFMKXyyFYYiT6odrzAGi3jTUkNcpe6XGHaja7GN3Z9RyF1vgQq4rGtMPyayHo",
  "key4": "3nspQWaWQDKM7KuhwvfTec9c78hvmw5VZkU9jwX5fU1w8eUdGDn6RY4VDu44nE4cw1BpgK1159SWAgcju5F3JP8u",
  "key5": "9bRCLNJZHhS3bE5D9aPJ794XRd8ASYp8ubMEJ8viFoC3ftKvbm9fAXNYBprxMbbqhSokjS4zLDiXrSirgLacSFZ",
  "key6": "6131oc7RNRWF15qdvGY4qNEatKV2RdtfJufHtmXhdD9vd7LQauXktHGibLqeu72AYH8H91fzq78ByB1yxBzwnbyU",
  "key7": "3TfhUwAEHMU5aYLqvPx42hUmGmRWnTz6G96KPPBFbJGB5jvdUSYzWdffXq1MJhfkk9Wf4R6PTbyzYRu8Dae8C76",
  "key8": "5xqSpMHgPR9H5yRYkkbpoGe59yFtxAEtfVhJ1DLDAFogsEYjC2LPM6XGjN5uyTNVP2oLRW3NNxgiJ5xkf3a9Dtum",
  "key9": "2j96L7dn7LCVrqeKLoqMvBcEWrXvzFEvv2YEWRp9gurzcxFr755et1FXbfFX5ZUoPcfni2XbKxDiRfXFxJbkFSyB",
  "key10": "4f6UbcUWUzaZkwYv552sUSnaRLgBBzrFSDr1r3cEe1FhdVZWa3BgMrWVkVVurNhx6VvivCh1X1rVsK36prkLsDXw",
  "key11": "3mYYgsy8bgjAoDLy9iowLvuTvtvBMp9GffHWEyJb2wQnikCwm5ezQw8XnCefLUzxWgAJeeXZz1V4ocrQjqEuNowZ",
  "key12": "2QYcKXv4ndoxn1FCuPBgCkL4N1Qr4bEdTpkzNw3invAV2HcFHQacs3j2STcWLsj2t3NRGS394EHyDait7mYvJvWw",
  "key13": "5Cdbz5PSYEbScMjPpUbTkeQNNJode6ckoRWRChdkKmV7ijUW8L7T5pTmYuAsJ6zoX8ZjRTcEdbZYke54TSRogXiu",
  "key14": "2fCjhJMb5s3TVuEXJ3NkmGkSspJbJCbphxwhe2VwXk93oRbiHRY2ZKk9rf67LxV7gqUhmLDhqCKPyTyJ3hqrzDxg",
  "key15": "4P51WCLrcmB8HsWPGyuXTAKHatE82T2b26LbwSqtiuBwaC5avJXxXZA59B66SkzQkKauGw1PewNYYrzUTDFFAcL2",
  "key16": "4aZiGHZpCDv7qnj9ftVMKaVR2rD8fEjxpG1BHWLJ9hfSZbtnqXB45AGbPg3pg3CiaF7yRdQ4sXVvAsNewM8WsBJc",
  "key17": "S7562EYRMGS5wFwCPVAvcEpBCLgVP7g4bESf17Fz9Xjp5VmDQfZHZDch7sGF19ZQEe6VZajdeL9xJ71CVTFoSrW",
  "key18": "39GhQSVdvnCkueqMYcuCLEYvXGP7tvhmUsSqsFCNqczw5JGSBBSuz91roBTKKn5u8bpMtfhgVzTe2TFpmETir6M8",
  "key19": "4AQcFQETfF34kYgT6A7syCJpzvxsYzodcDn7foGiKYcSYUv3Hk97z8ywmNH6RvnkzHwmTJcggz3yEpAKpTNdF5jC",
  "key20": "5bsBHRQRMbUdzpdBd4U2nX7JByb1EdJunJjuExFuguojAxcMYVx2tDtvXEoCsPzfk8FvTFvkQQN7QxP3hWvRTBMF",
  "key21": "5F1Ffo8VKWFUBG8A6Hj3QWyVzrYhEfDFh2Sh8HGPuJ3xG4L4XSpZHDU8eMGBqkNsERk2qDhKyurxA1dn8hgwua6U",
  "key22": "3SEJFmWndggAbXJArSq4qyNwC8TRq1ECQWsmLinKDAT6xHZT1DW8cpDwsTErEM6nycPG1HNfT3Hpno4bDC5spZtv",
  "key23": "3VbH6jGV4Kw9onJsmnmWjAfdaqV3DUQwzwDLUKAJU8JXEWJHvJDUqfpEj9u2h8nRLVzdh4LugUcGx7UqWKD1J31Y",
  "key24": "2J2LofUVBd2Hy9ZgTmsPnpCLASakXNySH5p6zs7SHJqticT2SatvLSLQq5rE3TKEzfSCpiRGHmc7KQ8TtvxpUoE4",
  "key25": "5P5yfbaUSV4hJzPYgsWi6jYe1VT5q3pKesGe6X14ZPzinGtzyKWrUpurMzgASvaTZXgTrQeWp8xPBMe8XrwESST",
  "key26": "24NNHfqB1ojA67ztZDr7VTs4vmgfZJxp1oXjFxbxcZjBpYFiVo2fVfKAzZu4UwQgrkWMtBPZbwqwn6DZ94AKHSDv",
  "key27": "5Cpa9t6jdfsbmuAwWaKqKHHdMeXnfdcfJ8DTsL78z3NKTBS6mHycopMj1eQycMjWL7oUpYXsXyovk1FKVFoBGobh",
  "key28": "3dNgsdLWig3D5pLR3W7tTVLr5a9SxH4zs9TQGwf2Tje1aBtADueJ6ZWBfgUX6KucqCaPLwNPRhduJQ6tzfUZAzoh",
  "key29": "2VMzi4zoE6vPt3VxyzAdmmuUqXiuinbcts4KXDPkNHQ7bUZ6i117wP2BTD63w6GW82jfuK18VxyVLA6sq4a8C7Yf",
  "key30": "5Mnwo5uPy2XUydXMkQrDAnzjZb2m6TnpjgBgexr9NPko84fSivACvXnGCTQh4ERnuosh2HDppsDHwqnNYhyXViBd",
  "key31": "2Mu6HrTGSDjd31KKfpFNAFw5ysEm2kL8tBsLm6DA7rmH5rjDx1uEqJqqjuWsNqcv6GLVt2JsGkbV2qx8zUPBrmTr",
  "key32": "XUtkCdpn7Et5n34uKBJaJKNbA8VA6oK5buuqTPCKuQFNzyLZX7XG3ymBLAsxMaVEQ6fGsk4uHoUjkCNUXi3Yz7R",
  "key33": "g4pWQZNt5bsW1AdACy8RoEEsHWPmQtzaLgJ2H4beri753snsC9vMg7DWFjNdeWpA8ej5Qs6e6PUZ6XhvcnJCx9V",
  "key34": "44c4EiNddrXSUCkDwmxJ85JmKEeZw5bDYtqoPHzkKCjq1QqmNM5JpmDNqbDssxrnTgA4pffADioAbtDVoKgwyfpN",
  "key35": "5NiaYF7B63KqPC7T5My1Sy2GRpsFYei5raZ5xe6AYb2GkK6wF4VEdHvoe46HxW5DusetQ66dmrYQMnTTsRCmX9so",
  "key36": "3iD8sB2Nb4y6EU3siXyadTA1KKCE8ovzQLTYCcAHdWv8e7iPY6Hfu7ZgCrLRovYbNVXiUrPSdTGZeydgXH2afKYE",
  "key37": "61LarxtYG5rg9dS62JQxD5em2iP5K1aB4oMgvN3mJMX9JdWFAAfHLDXYdKpS6d6NHscpfz7n6x4MmyxaHv4sWcru",
  "key38": "5qZuSn74R9K3sRhsW3Ekzfoc1QkQQbkQNoitdS35HXxGYvdDJVucjvmTLWoFndZrejNFNEZEdZgqmeQVyHBDzsCZ",
  "key39": "iKtmUtZhoV8b4fXw2samqTBKXuTkMaaXJGUYFJgZgfPv1Bo7Mp47DNWiUZLCcW6EqUT2Tyomyhr2iwmHU44hn75",
  "key40": "3KT3cEL7SRzxh5wcygS7AmcYfUVBpDmLNdWrQZ4bnFGKdXfUXoAmdyZqwmuQm7q9zJhmVxu4KaQiFRxjjyb8icHa",
  "key41": "GTfTa95cV3pjp1enBUQAD4eLJrEFGw8naDBYWD6v8xmoh9qmpHaStgVQbRhHBzgUA7eLYD1iNsEU9y1QtR1MHts"
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
