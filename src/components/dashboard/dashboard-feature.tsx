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
    "2r4cNzoSH7WnNv5Mg1JfCLfhDJshNT7vhPm4qFRPgxXxqkvE39uQjboH5nA3XH8dyZH38w6bkJqDksDcgmEF6KrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AJbdjhbg43tJ3eRX6caS2UW7RnaYMUgW9ywm3tmTo8QWVV6paR2U4uSNWrtaNyGyMXGDCEzRs3bWWZc6vvwxcib",
  "key1": "3aDF82FCyAmG47Q49e1SrsHPmPAGGBvkFjVtGdXaawL6Tm3jSxevn2vXdf95tYfxk2rSf9unYVp9srprViob1Hrg",
  "key2": "BFxANAZR7sTngNPRykJ1ZLfY2ZgMf7WU1CNMP2RPYrKeanDs21hEQHqP4Wfe4ppccK14uxVuiPbcK1QLQnmtyDN",
  "key3": "47CyWo8CahyVWpDtUhKKdbcCLJpm3BEVqTCLEvzkHiXXBspo7PgCYWL5SBWyAfWT6S7yuescfgWgmhtv63nMyF57",
  "key4": "4vRhE3FHMPcyh9fRHcrgtKXJkPAkaqUvbQDN24Nzk48eyAMJR6ZJwoyBtUJZGjDD4jXC5ERuMHFf7tx2QPPBXRYc",
  "key5": "2VmCZKxrz1XdX77B4c19hLqLms5hNYQxLqcztiCjFLgNiem2C2RSPfhPPnGZHUKvNXvQGCP74gQ8hz5mtQEAzxdS",
  "key6": "3QFD2axNT4HvJcbEvRKi7esdXpqrHDAXSDCjUCpco7tNnkJmd4grwhhrU7MKFNeaQi796NkRSiTo8KejSBSBFniF",
  "key7": "3K2GTnuu49LwoyKzCdBDWjft63C7PxXJrsC6SkugnyzmDuEmZWFMmJUP6aoHgWiDi2eych6z1JsN5pzksQihecBv",
  "key8": "2izdvAqRL3ZMSHmHQ25dhFwQyNpZoKr92Dp2SGT3B2HWi7gBYC265mCnfieuXTiCNymRJ5ost1dvJuPow5xwv4PP",
  "key9": "2rUerm8F7ariXgo9FokEggMCECDhLCRbMEQGcRYYv8bG6VkuNEcaykUK2xmKg7NHCY1ryX7GaAEwqppjRia7fKj2",
  "key10": "5dsM2JtRzhAH8LHWftppZZuEaLY5N4VtLjgwFZYf33oooAVKm12MezpWHrdjbtedwv3w1LFcExHKowyrWmFSnaHF",
  "key11": "4AhgdYNwLn7ZyfamfVhjqTxuBJ5cQEJ1xP2DP88RHvy7cs9fBqjk4TL9P8GFXqFBxQcNGwgZwqqGyKZ4fG2r6D3o",
  "key12": "2qWa1ErfBN9W2boaFv927ryztSMQV6gYY9TPjsWeHD3cHt3Z8wbr89ZSMBRS1UaKBC1qRPAokBqGLW9Wf1hxrTbC",
  "key13": "3gv9EncxydGdKyCcyRiumEwSM24EtdE4VVgpyYE5AhoYMKmNaZiWqncPAJFdy8Bq1BL5Lfbx6be6jUJXVzLFsEZF",
  "key14": "3FVnuS2U2gNbELaZwU6ntTGnLgfbuv7JWwV8mQ74sSGHvkFsWBNvNX7gxqWHgXYZQ5GJ9ujWsRiaGyt3Spfnxp8h",
  "key15": "UfkvwkuUgv6fMPrUv6meJUFPAJfrHXpvJ71tpAz5EdjnCssEDVB8LZsbJpZbjUce8qfaxZnUQP5ThNY5KXVdC49",
  "key16": "XJgfcjRLJ721JZYSCzZUiyMJpCmVGRURj5aJ2jTmNGtAyP7exZ9Bjw21DUacffRBmkUQ34xr48HqqkZPrLBYgwi",
  "key17": "5xtJsHb94KuamxzGveWbUbvT5QxRm6rQ7KpjKYNE7ZgqyjZybdVuBoPhr4HA1RGFtFTkvd4WQe2FB61YsTSHJ4C",
  "key18": "4TesK3j7L5oj733FqpNMkPz3ApPT95MC5PvbZocDDCVGNbtPSAQbLHrmD2Abixz2wa8abQJ8b417TPRACYnatJtn",
  "key19": "3FroV3QXQuZ1oojSjZjKM9wZcqSB6inW9swaWsUEftPpWzbH7yJqxmNzumJwCrF7ccQPFwRuXY9jvqaQn2Ah3oLZ",
  "key20": "2X7CYAWy4o5yribMyHLyoQne8BsiR7e6BMC2hiF8efUcTMzga84yhbjTW88tzsA1dCAu49J2rmYpfNgDTkFDybmC",
  "key21": "2z4WK1V18Ttb6J7CXi3kRAngdLjRy6TUZFd4BMwQAMG9EjWbiGNARF4PGdiaYHFEqxh9rL2zknDBv3ZmqA3bWiQU",
  "key22": "2CRSs2ppxVXZZeqYegbPfxTux9nhaAU5aCobkPiRPB3P1fXALXBvXkEwqwNKi24w96YhqUYpxtY47rhqt2hxWxY8",
  "key23": "5dd67dS3YDuMVTCYX4QQdzYRzvAEniH1AWMr8hrtfAZMPNQo7CALsRhcQudAHYh2nWmwJXkohVKBQfRbBPw3Gpgz",
  "key24": "5eWFydNkpSMXzAfebr6yNoXHSb7cr4DACB9e2UAbUpXyAT6HxAu82jyNZ11AUbm4dGfncz3w4otCU8BseiSsgs69",
  "key25": "2hp9ggpoNCUcBfhQoRSrGFhVZ56hbJXNhxCrWTGXYVtDsvexqW2dHV6ojkbmDXoHjNt9VrCGW8qSSoKJQvVj2sZB",
  "key26": "3XPsUhStaRUiN81hC2PshFSsp7Cr7C7i28k9F3JB6wjHn1wvT9x6xwP57Ssucm2WzxEfv1k7oRcDixQhDsCBsANb",
  "key27": "5rr7VXASMo54WG6qE27CMqDtpLuRiw8m5X8YNYfRp3iZDAqKu6AiH9odQLadtS12haeXqkvH7xrfmYWvTX1JH7GD",
  "key28": "pHgPh76C28xzNmaGYwJbQuuA1yf1pzdYrbJcRHL26T7qjzgrmYjQEoknByQqi2abm8ziuRhE4vTihadykmJfhXT",
  "key29": "3kEGyujrETh2f8nZj4K983iWepfamYuQv7xD9AT9FS1ehwvYWAT4peYY9eYo4MKrsdteDBqHweUL78sjNcPHpvCi",
  "key30": "2ABjpGdQUFgjiHy2LMd3f5dGEYumgKBywB31rrytRf9nJxw3DkvW2KWoK2H2pw5fPxUtwJds8fnuqsCANMs7Nq5K",
  "key31": "26ZcfrhuVBMJDxFuv66etoGJokuu5kEQbdFcTq8BcsugwgdnndZktGEPR3CX3z3f6ueBF6iY5x4YWUoZcwa2XLXm",
  "key32": "3RDYDPeJzUZNSd77KzLmonC3uzj9rL6h9nvtc6dm6jqx7bUvycqyRc3VP9BoiqR9XLStywh1vbE72SavzWA42xoP",
  "key33": "5TMNiyxNFpuKZCNqE7UjdXh1XzY3SRDerp4PYoZUBm62F2J7n8icW9KEqX3snvV1phXJ3cRW6nqWDeHBBkXvQsEc",
  "key34": "2pAeDgvqo9xdiJd8xvZRups2yhmmy67cfhYxxb3Y9fzDHKgPp16khScirXbt19gwA3iuTPoo8EogtmjwwVyK2bLn",
  "key35": "28Pfh8tYGWrTFphU1TVZaDejKeQx3fmX4DFi4FUxim4hPUpJFNKsFV3h9aih1D3PbF4zpeBQGqTutnESBpq76YfK",
  "key36": "25PVnxduNmyvNEzB6ytGCSgXpiMKi7DMHZtsycwmrFXVsxjvwwkZnWHh3JSTX7uBztt8qc2UsfFz811p5NPTJnyA",
  "key37": "4Ks5wmdSwiFcNKJxfvHvXpdoj1XQdAm1M6eMpv6bm8agmNBFRZdbQ1icpUkLE4ntKkfjDCvjw6HRNFEKvWt6KUnS",
  "key38": "djAL8BrnZwAtHsyuk5xbEZVSQm6MuVnT3BCasNNLzkN53c4fLEoEAkKrap8QxuUmDJac2Lp93MoawDPereK3kBf",
  "key39": "621z35fm99yfymsfJFC8pJL2gwca8bZFchct7jrribgtY3pXchftfAshSNWw5ZPDA9fXDVTcUpa3hmGGXvL2dzsx",
  "key40": "8tTCYKmRuJ8pJXuy2epVpyAoVbqKjUZB7Gz84MK8HuKhFpS2Vdgw3xkTaQYBvYR4ZDXraoRDdJkEZ9KVFy8cWTY",
  "key41": "48ZFpHD2K4Vcr1LgfJfB7kMnJmc65sVt23X9abunnQyykW3fGVVtUsvEcTNEwNiN1Lr7AsaYvwATqnLWqvWJiF22",
  "key42": "Tce7RZxK52Dy7u3EB5GEpvjP9bxHXejFUBaZzPb7fu5hDfLA8iBerXJtU7XisL6vdbdz8vWQxbthK4jetY1y8k1",
  "key43": "4o3Uaaw5N93c9L8GuDqASQWreMv8F9fyCcQBb5X9PUTdiVJVUMpyLGutyBTLoogddvAjJ9yeaynHTUBTYJufTKwH"
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
