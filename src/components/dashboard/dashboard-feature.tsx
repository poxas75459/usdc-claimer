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
    "4CPzQJWNVHKcismz5nnWThUVPnnbigfcVqgrxeUM7bs6nAMzHb9a3WZVRqb4RSuCzQVCgUzj3UuuQbiLxs2bZQiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CZKFzXVFcRgWxce7saCe3PXG7fao7hFHrtGFehzTD6krhfay2MGdmX8CjLX7R7RL6zVKz9AVAKCvK7eC4GSQiAU",
  "key1": "3edCbz2iisbNVevtmzA5RXco6S5bnyFuTjb2ZpLwwFi1pA6hYg7kuSCYz88bMmv7sMNfm345YGMH1KweJWYMZ4W",
  "key2": "4jFFRbuXGggSRCR62kNyWMo9aqWESsR9kpKFQr8kwTC1hwS31GR8DVTLHEMG5ioRnnQiCjMUrN8K4NjwpgfouqJ5",
  "key3": "3vw7wc5s4YoRifakF37yaRqDSMi1vqm4ViCY3TPUirUor6yi2qHx4qE39K5RprffZPHYRMRB6fS8omry8B41ysJ1",
  "key4": "WB1gfdTP7iG19efsTBjw9dS6wZTzDsComTNXG78ctGcKBT1rrmKY8J4N5RaHTQvi3SYsVyNF1L7siDbfFBTzM42",
  "key5": "4t2F5TNxENxAL8haRt4JvEmZsaQv49ALrQDTqUwDfrqp4KP5LPRuNtiaiG2awfg5A3JT5kYdEP2sZMP6BuT81Epg",
  "key6": "Yn1nwfR5yM8SzbtmYJh2kyS7EezepzDWbK2N9FD6ra6gMpkrt2BnTGJziFY7AUmDDZBNZ6eiYXH5wax3RvugP2P",
  "key7": "2HSEwXGBpCB1tUg7xfnSEaZnLpA8pVoiNF8XrTpSUac5thFUFCwbMKcC1QPnBt8Rq5e1GFDVPSYPrvrxXURw64h5",
  "key8": "64pzJATrzEZWeQZw5kdbZ2R924MioSc1RztXretZR5bZdciKtJFCGdwAxqHPEzn4uQCRaky9LqYUsFRyaXJGNpKE",
  "key9": "4jocK5uRYrgDG4xXEdABNXB9zUbxavp1nv6Y3vZ5927zAywN53nqZyyucFoghT7pHJompGSBbVqtNWsKK2q3KvEC",
  "key10": "4uuh7j4v6h14ByERXa11ouvy4eWPtj6Ai1WTFASHq4UcMZjZS9Lse4WasYn5xLVwGdbMQ7X8EBWLPZBdPw6kAHBw",
  "key11": "2WVSPNgzM3dHJDyKL8U1Lp8dj7FM9mXviQd4veWLAqfmQYGTNFhhnNU2vPZ4jV9oRhtH9oNzwyEQVNnwF1tFgnXE",
  "key12": "5d4SZFzUtuFF2w9ctwBNvo7j5GXhBNr8AjsamkZx3xLnKGfgK2Zokou1rbqjisFcqxM1ZrH6iwuSdgzZpTwjwrC5",
  "key13": "36g6nV9nHQLTavGcRqCv7Rz12Kj5ech36FZs7xvH6NEUb7Q9LbfpGhQHjXT46VYorRPcLzRCw6M9iRdQSR2ydANf",
  "key14": "25f7HKjnduh5RR8YBz65PB35LNKHHxwkHf76RBWaWsA7eMd2bNwsBV1kbNQFKh4RVzZKN9YgVGKMrphBt5wLJeBf",
  "key15": "FTGTBC9nnUvTaXqwBFDQXKWeu2LkSb6XmLwAXvVfDhu8bsDMav17WGoyixZ12RRLk86tNWYp64hNHgLsu45hRcU",
  "key16": "4NqbK8mhdkhrh5LLLkaVeaFT8vD6xb5ELsV3MyHNP1Rus32nGdhnXMnaxBUYsCe8pZEsyUA6rDANPcxXJYUqjZww",
  "key17": "3RZh8FdQzadyXTR9LfhqrctYa8Bxyfc6qoEAdvWsEvwnApgtPzpFP8c9hnq6qJKrz4aGnUeAKcSNGmxeAuG6YwuN",
  "key18": "fWvZmLQffVdPLEXP92HiQ8tHAWLKXwc8wmbyz5HD2TUMaZrprwRxRFDR6AeY8JWnYkng35G4T8WYZKD2bukSMrK",
  "key19": "4YpsctXxR27jrfhx83HPpAajsRWGuGUqm8o3KxBNr96Qhhr52Ki7dRpynEVsFp5oZEoSeGnoNKt79azCzcqCVKXM",
  "key20": "4BMfbYucSKrLb4mVdbB5hkkUcGaCTBaCDuFCacTpPzbxxZQL6XBKfmjMqdFHrztzFXibKYuKJCvgxr3thuGi3CM6",
  "key21": "4kgKkHNWtRkpEyVEjAFjj3ELczXKn4WMic1NPLfw7uiJK9geGE75cs1yTA8PqUBZFAj6wPmm46c42VXASfFJvnfe",
  "key22": "jJ34NE5JWazMkNn7rANfgKxteGAU7MCPtFuz6Hk3c3Aravb3aHkEAh4ffkRiNpVndbqwezBRH3eBmju3mFpCDAU",
  "key23": "3S19TW4Ly8Dm1M7pqU1HjD29JzBHxwHEWAvSbesaQ3tq5dLzP5nBtkkFnhWZ1aCP2Zn9MUgeQgHGpgrVzPeqMFAE",
  "key24": "5FGiy8B69UCYf3w8GscNHzmvVeqU2EeJZ44qSUWF3xPsMrkCqfaNi2evTEqBVmk3dCvDEYZDRfmLdGGi7C8c4sdC",
  "key25": "3HUUosK58ezoKqXe2XDpT3P7oDGywXjDfS1GZ3LrstmmyYtrB4NfNiMQBM8MecC2FE4Mifytfr48nh45q8HzCHyt",
  "key26": "3Y7NcFyMKRQYppt82tkzgWmGehm4rFmhV8SGJNh2GtwToPTzxLwJWv4XoKYiwYU6VLoyurhLpUd6xaVauifA9yug",
  "key27": "3DFbvSYgf1VNDqTsLm5mVSPyeXH8VEQtE6u1yfFkamCqt67A69mvEkNTbHVmFNZNeUS8gHKnqpnymgSb7qbQoaDv",
  "key28": "2w4qx1KMi1mjvPJg6An9fFEn1jzM4CNGBBvWgqQv7zoQokgobNV6AYxYUqHccm9ALj6vbsEwoYqtdvs4BGMa6nWQ",
  "key29": "2vcvY3DzdUY8ZfTDybBs5QXoe1jUqjvvjmiFVQgX1VVtaWqHJGZGxkv3zPrhupBhiXF19gy2mi6E5787awa9gZtU",
  "key30": "GB21kcKNp6DjUzmUEsTzvMGU1teCc8D6ssChccoUAqQykUgAomdPXcAXe5nARSmUhPHtkDuFBS3qrs1EZ4vPfxi",
  "key31": "4FRRcAvon48GHNRKZ6nPRFo77k4cP7TPwfK4eh4oiBCvb8z3f62tDDVAJDe8oz9SvxSFXymvre8pE4jEkkN63TyH",
  "key32": "2RZ78g6oE21bKzwU6u229GAzpKQag52Z38EhS7gMNr9gHRkgH6E1i4kkSRfZFvznV2zVUo7jEgBnws71ortXUfG",
  "key33": "sTJEnKodEngs9QNwbHhwPz7MVRZQRHfsdYDboTzH873PC52doR3xuuDrEL9tN7Kao1UqiBahzPzX9TyWD9Uu6jv",
  "key34": "5NKKib2xAXXvUMq1exhrYYXGtS1yxtjANBqoqcKVub3JRzS8vLvGe6sztZJRcxinNSuJHRoUJiupN13xmHLH537Z",
  "key35": "ZTz1YvekR4oFa48hNNPtMNER9aSAH1LwPWvBMJ7roy47hyvwALJLo8F86CXrjShBF7jJ1dzqKMn2cyFf26AX1nz",
  "key36": "3QT1JhEY5AtcTi9Z3awgwTXVrEbSKPViMk1n8i3AHUiurijUqSvpzGSyR5V7fjTNjttexmVPRRxsopKQ25n5cZKf",
  "key37": "NXftYsQzKTXFiTXDo82eGXNEH4DZcYyscB7iBP3fuwyJNo9P6vgEFHupDR22y7s1hrWNTj9nuNwXo1m6saW58mC",
  "key38": "4V3u6U2dZSU7ohwpfxka8VTwfHVphPorsU25kjCbLWeAUHvR1mBxH87uttxEHt3nrXEXycVfekc9MAXZvyDEj2J5",
  "key39": "2jzYgDs4TH9dhE86a3a3DPyZQmx35aEogiMNg3SpXtZZdWHktEKZQ1rtugX1FemmerJKnYjNR1iXidCFrJVYyH6A",
  "key40": "2eHBiyRofU1eGde2j3br8ucNUnwM7z8U4kjpRAUxr4d1iXRbAbYw9SjTGm7W89QWaJJjKxavE1pkJLqEaFa6N7sh",
  "key41": "4hDVw9c54qxXwLDu1fHLs6W5GC4dzP5sUcgFtKdS2G7K97TeG4j5YhwfsFZZmCwv15mY931d1jpmmPT4VSiYZEtT",
  "key42": "53rW3CFCXqGF335BNUJuBcy3b6yqgBVqKqb46CnXwUjPicthVbzfuWBdFfjd6SdteS6bwMmPveTU8MStj4LduKNf",
  "key43": "5LDWYmJymZdPBHWBSZfCiMGwkURGuejeUFgcYJvAQdw4HeuQzbEfSVQNvEkXfghFXUKNLfXzX57cUrZomt51rzGV",
  "key44": "pTynmkqzWbdGYBr4zUFSGXcqiFzifD4PBDPZoRpReCa251YizNwDm6LK7KrM9KPLQVJybydse6b2n1bPWsmuXJs",
  "key45": "UM8kFHJkyV7BYzJkSAeYf2q5Yszr6BquC8FfaaQkibmk12SoXd7jCJJiM468u1wxWb9xNai93LdbfLNUPQMpmZ4",
  "key46": "2aayanS9cwjaHvuXQEVtJ2Uzt5qBYG4Pyxc93P3fEdyoBXAGiynUAHpsffxzpjC87EgCTrAzfDJd3BN2iEfDoGL7"
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
