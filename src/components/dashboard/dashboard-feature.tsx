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
    "XuShLMyiS8oDq2bwbrEi9cSsmpjHJpjsyWshuweZZrsu5FV4tz9YTwGmjhdjwjYWXwMBzFu4LX3LqxDKJBetSeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GBWRvtLdJdnJa625TFvt4HvujV6m8GdnUzL6Gj6WfZ5yrcsieCKnmAFjs7vtZmYjAjRBkBFbELXSe5brtKxL1jY",
  "key1": "51XCKoGEKx16rGqu36cDTSNMmJ4wG6MrfXoDBQAGmFuJFGmnhifMEKB9Dh5yJRDYG3JtKAnMKSCdsAZPUUx8tTmo",
  "key2": "5qhaioKJ5CfU2ZMXzr3PF7vqJZVJPSYcDwwH18oQVHJSzymuEQBNs4SxAMRrM4NBzyyEkf5YZeHMBuV3eLxoeohT",
  "key3": "4KBBWfEBJStVduMYXup9WzoJhnBNwMJkYn1M7akTRRqDiaqabQSNCdkFmPbQtNGDojCrpV2J4wt5Jps8dA6zAvS8",
  "key4": "6332Z8SszXgrg423ScmQEruVBD7yfEBgMsi1U76cmp4E8A27mCrgZRzyNVba3eCaWiRbQtZjDLyvy6WJDnDNgb4n",
  "key5": "5ZWT44RYgSJ4nYp6QANBAmqjQD8LxFWYRTC891E7ZUo4fMRuBTad1A9aivW3JRKgCF1tkPVSKV4BLsFuZCio11hF",
  "key6": "5WENEaMXVtq9i9KiUmt9RTBnhmp1c8cFhCMg1uwDqGxLZ3S4fdWTrkJPdeQAFVdRPp712t6LokVHheSVF4CShWKk",
  "key7": "uXqGZ5KS9sZpDkwZ3e3qdsfj8mAMK4EyvDYVAVXz2ne6sDkThnHB8gxD2cKhUTqhvo4cyHj1ZQK6heRmNPorvn8",
  "key8": "2TWxSewTybD5vbnS2H2Q19oZZySjoMtQHZLJU726PrSHjWzeiatZ5gKVqHG4aR4U4zS9Hp5V8C8MmmtR2tjJK3SK",
  "key9": "5eogUFcg3TdVmebhft91TPLJo5aeWcLziw4Px9DYfj44bboWG5BE5MZ1CjLmFnqR4WBKfuhq2t4Pm6fa23rCMiUc",
  "key10": "3wQSE5ZieJpmUBx6jnJNrFpvLxAj7qN1qC9Lg8Re2gxgCeadJpEHwuT4FkhvfTvXTqXrWsVVmsD9njo9p22Nm1C4",
  "key11": "visfLkMSkRRduWg5qPhx1ZwpNKgioYRcWiU1c1sxtLci5rkdYwKJnGEnM6z5MMVC7SeaebFJ1RgaJNTtex1fsY2",
  "key12": "5V9RyHhWraUW1CaZHytZiFD2fJWkcDeW2Th6nzAt2H2zmQ7kTBQn4Ucye8rQQX9G9jPGbvosmhorrsz6eeHxFdVC",
  "key13": "4uyU2JMba3TCBDNCHy1rocatVqwEDKA2vYu7ZKNYmkRoG74iMEwdX389ZWrsMoYm6ccBgXNFznESu99kRtLGoArm",
  "key14": "2uibovAAKsLivMRmEkBLC4TDX7Dg66yWvEBTdVFTRFdPcPZ6sEMkZwCfUYZ6CfUhyvR4hqU3QE8CPHGuDPqy398s",
  "key15": "4Z8Z3QZ7RwMnCo4kjatR3qxqbguueaB7rtbD1TuPK81SiiKBmEnEYJvf2DhB8nxZqavJfHkhBfwvPc8PV8qE1QcF",
  "key16": "4ozUJJdpGsKgxSETPPDxBxqK5JzP2h75gSm4isexiPbwdYQ5jtjsedcsuSJLma91uGBU6qyFw72YsmtQwDMjKRew",
  "key17": "4DESQtPLV3d25vYzKc1nH1m9ppHTxxkQWVrbow3KphgZbTrRP8qBPN7Q6TjLoy8nLpKiXDT2smXtFe9hdcU2iiV8",
  "key18": "2AZnqjBPyxVC1CmUWF3M74wdmkDU9SP8FRnUzSeoPMohruynd9xpGg62uCg5zbdEwsH1JjhNWfRC6iZJGsmCqLwP",
  "key19": "2FTLUnKducx2NM4gNC7eyTY7Rx2KvtwQqcxRWJQZ6fKwAYrxWgvJ5ohL9rws6UEFfXLjNPNPbst7Ek3691vmbYsT",
  "key20": "k8ZcyHJhARTKgucVEQC1HbSF7FJc7H5NG9xeedP5dcUiZCU5ncQWyYg4NcmedJCLfqTejbVpabiL7xFHnpCE53Z",
  "key21": "4cNBibJvsb4umEhUVBU9hQvrLT6rTpKXq6VG5hPZCRwqXWhrh9MwBDB7KiVBCwmRinuRnUMgkSu2taFua3vjmcFb",
  "key22": "2gxYNqiYnqH8QqkDUvt3uDxT5mUrXXpsbvkE3kvDYVE499htRMRMocbcZpUj16aMe4WXWZctfaXg5Hh6w2TX4rh2",
  "key23": "5qymxfKD9vckgv9818br9S2gSkKLeuuwCNTTebcLvnw4eN4Kd12BLRCrpJPhBQZVx4v4Qdpeui5yK6XFdf2gFt3j",
  "key24": "4wp7EwRgXkxA7UFiYZ287SWGWk1UfQ1vLheUu9asqUTtRyzAv54gQu6Vmqcba161ec718hZ7p61tTvUEDDtsQvep",
  "key25": "1xco5FUt1LfnUz8hpRcGu7BZXWataimSQCaZPvhk1oNnGEZkJ24Dff545uyThBYoHWp1FADSS5Zx1GEj8oY6nn4",
  "key26": "249tNsbRtfdo4Xn8vYRVpPccwczw9Yurd6KSUfzbd2c2aQF1aLX7dS8NW2q4SW7fmsmUfy71Z23ggofqnTYybLbD",
  "key27": "3wUb8jT6mfnTgYPHdMSM9VTTS7jd3Kw9kp7QnXs3AH9G7dbP26XDjePCCxjhVdVpKc4FS8XPm9EJ63xwWG3tY3NQ",
  "key28": "4SCGeUsCnqCXGxedmxzSRRHqMm2Pqxrgq5hGtij1kLDq19nmJUV6Burv7rdFeGRKnc8x8cR9kRJT7jDg2bZMhbdh",
  "key29": "65GhXNWyLYry4APziD5aZywWgx1rFbkRmP2U8hLkctsufUzKxVx7MN7PuNAR71TkrpBPkvg95SgT8RwiANpHQU5X",
  "key30": "3HYLgUapdfZW2gGGuTDZMgErSuzcmK3DhUyzSJAWemNB2UdXuTfmjBF5NuACqWnkSURLM8XREz33hbmZVaCP5JdK",
  "key31": "3KmSSoimoU1LrFuGumzchdgbtPhVKQCoPGzgGV8fwUqz8Jt8JsjEuen1fnF8dcYTLVSjTbjv3cqHibECqzEkt1ur",
  "key32": "29yJmErcj7nTBw934KYxWAgbG5DJ7uW7kCxMJnbme4xitYTo8F5pGHzjZqckTg6yFdyRmVkjiHxA85Vx7uQa5sb7",
  "key33": "4ALsvRKce7TiydDqDjbFiMGBWZDoYx5S4iobrUXJFdMxEhGrgtiqQh7gyZAteza4gs61KmXwCZuatU3PP9JUrpAV",
  "key34": "SV4vDdQReWzT8aU5VNGcGaY5JSN6Hx4ZG16nDXdXcYcutZWFpC32yYHVCPznEuwVzfHPfdbiJhwTfVEk7imEKNv",
  "key35": "5Z2DRBHKSm69GtkpTUWpjTpC9uauKhY9fzHtbBAK9bzxrwmgvodKzpaTf8xKhUG8E6XWFTestAAUxB1Tq9FQ1v4U",
  "key36": "4kSJwy5p27fbLQhMMaBbLdmL8sfWMNbUgCYx17N8rMgCKCa6kGtMh4FPRVNVDGFLyVvRXnY8EfuPkukKpzAkqg1i",
  "key37": "5GsVV1XQdqWu6o8hyoJWQ9WL9Du2sfAkE6EtvvbeqUA1aRpwEciKzZRmDd422PCtqXpfhwgwwqnhDZSfNsB4mmEs",
  "key38": "62DDaPxrW3fNf9XgZ7hmDDV1XpBt7Mkv4sz4YU5gTQNUuzb7JKVGe2MbRLsafZEJppZuzsMwtnjEHdEuzWrnYJH8"
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
