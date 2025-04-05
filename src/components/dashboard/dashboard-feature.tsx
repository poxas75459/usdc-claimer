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
    "265wBEoCpUmjMY1R3Mdek5TAfmjTyxWBWkouv7HFD3aLL5Ryr3J6dch2N8AokCKk97QwqizL1Fv16hRc5xgJPwjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XSJDUPnpUnK98YoBTP5DbauMiCoXBSKHqE1ed1ez7d7bV5tuZVR4sPzjCUQrFXXN82WCckxaUpKSiL56WA2cZXu",
  "key1": "4uhapUU3p8Qj7ESXCHVKpGR8qvPmzYckrqUxNW9TeZJibQVLAp3gyRH6eYVQWcjNSfzu55RdFPbEBdCGhgWQZG3F",
  "key2": "3mBJxuW8jRop4gHQ9Brcmn7AcxwVcVVzLzJnEauS2vPbtjtdWy5LYdVSnotgg4ucRghTuL9irq6fRPr4RasN8MSC",
  "key3": "9Gkxs6YgR8PfrwmvfzsQZk2nM6AG833tEdGw5iLyX9pf1D75QKjUJMrm5eMmFTCqGxbyJY71gMxLfquG1XT42Lq",
  "key4": "2Gdpe4UxRuXhUNrKSE5BENpUZDav4TGJVr2MCPfccMJ9AUJ7yaezWwPG1HABaHq1u9VPwtWZgZSVWxtjH26jPgCr",
  "key5": "3mJKrFyPUAqKh3gxeSkXLgrCscuSnJKojr1hHteJcJ7yr1ZjZKB7gWbSbogRCNi5AcC5vwTyx7z394WqEZDAHBe7",
  "key6": "5qS5p4pJafgzoh2G6Lokk8gT8tvC56GvpoP1S77JuCyYTmiKi8CCU38UpMesCfufpfr6jYLH7bT14BkJTv2GotZ3",
  "key7": "4GEY1gmPzZTvYak8wHUSz9ZGHojuahAtQFdyYS6PA8KbLZLMaP2b4ot3C27LwCZrWvZi97VRgNaZPCt2CDQoKKVD",
  "key8": "2NJ7FxGeF7PAt1SWheUEX8fhcsAEiKzLMCR14AHhQyNR64VzxZDU1ERBTzh28mQBYe7kwCT3UkPvbGyZNFfra9dT",
  "key9": "3XYbNjKXfrNj4jUwxH7J1iizmfJZFyauMBjSpcvWFDp7D1myGvbuzCw5PE3fBayn5U788ENzHKeqhTeBcTETBeAM",
  "key10": "5ip59rezbWMJoNTpqqHEUbA7WWioDuciY74HDwn1r6eHMdrUU1Pbmu7XkwyWcGRoeX4u8XNv7KmoGQRY2dPGiRym",
  "key11": "3xFs4LWBESvewXcRL2ND15mcXdYwvpyKsapTnj7D8hExCvQU3Vh2gYzydc5PRD71pifCsN6bWNUGz3x8Q4fFURXx",
  "key12": "WJPBNVMFzmxvE5vDGt8VcHYLo3e3P8eNkJ9ZxuhdQeeKYzTXdEhNpfD9KAteEtvt4kgweLid1DfgE78Mh6Czeat",
  "key13": "5eWZHw3wbiJRWhnwnFGeYQgBV2gKKCPnXKVTiQ5ycHeKTdK2q6DAm4t496RqRsmmibCsV23Mqp1AvBR1wtGpECJS",
  "key14": "H3DHTKNhD2Nf9HLQSHaaAUBB9HodoxN9ga7fWo4vP2Y64yf8fAc2HLUDEz8UoRv6af4GiiHzkxp9pzShrsjPCh1",
  "key15": "hJmSWf9cWoEaA6qcBgzsmAXWcbJnUWKqNSMGHCNRpoztwZpbNnC4EtoMMxxnhpi8kcW5YD4L2Bu1PFDskQomRys",
  "key16": "4T4Hr72R4VaujA752aE1r9k3KhkEL8gsNCGa7MUY2ovPavorsqSYvJbWYSi5asksVZPLNPXvsepurVZqgbbLyVCj",
  "key17": "4hxSD1rE149ZjR45TAxwSaoQCe9wmPhDuB4QjDTEoaBTmJt3B2dkSDRHCWWLYidYvkVLvxvpzWnLbroPc1xsjTii",
  "key18": "3iVdMRa7Q9gtyo8qVybqFsZ6X4RtMi1LWUMjyy7wqFh4VrUigMfdvhUvR5VGapFwqVHr8B9w7fMTQPchExMLAcYj",
  "key19": "3YB9nEBNSz7Zxvhf8jLUWXLXe52rwmXMZozqWHcVJaKYwcckJCDdTAdMabVCYZjFKpoVDYAj1QLa7BSk82oabaY6",
  "key20": "2VQ4HKZu4A9wbXy76JmzFEZp8MsyS3Th2yXTubNW463z1pVK6cSV7pFAA8jpWWMBx2z5xYT2y7b6o2LHAo4qhmTm",
  "key21": "3kLXvhKmuJdvXmiGP4xwBScPvVD5QSG1UAnPFWEaCE4vNJiFxzJ8GxVXehxh1CnEN22UQMsdo7ZjNxTw4AxbY5M9",
  "key22": "3rrur8c6sEehBHhYTwj1bj1MPzHxMANYqbNrSPnxjKixkTUb2i2ZAqAX1gLXvtVpMQ9wUtki4Jg9yRENKtDCUnmm",
  "key23": "62j3WahF43F4axZys1CG7Sy9vjEnyCgAP7GwCEDjBSMYQAjSYfuuPXdCKx8LrkSSpzih3N6p9mExsHf8Z9aaDqY3",
  "key24": "5Lj3Bg2pFnUnMuaevRwC39xuyU5Lr6zTTR3vMNGeuKCf9Vt1iPdxNm4rKhBJsavJfHc4C6ehGZS5WqFjUkdGewK9",
  "key25": "5HYdB7Jungkhji88iAHajhs5LfhVo31xwCJvmbR5BcznThFZPMmM1NzA69dXKLWZRHyFC5fxEDEHgUrdvB9nDwxk",
  "key26": "3aZ2iVddycz5UMLQAEz8pN38W1B9BbpqXyx4kajXY7qhg4GCT1XmbFkh1SaUbP53Mhf5UPF7cqoNydK547pzCkbP",
  "key27": "4Nj64ySWtDav2cgndryvooGCC2kGYnKZZVX9rbghfED527tk4Fh8pi87NsAFQb6urVNGBzcjAJWRbuD19UCn23GT",
  "key28": "3Y7CjRvv8L3cxwUFzjwWCcxE6o331BbpS39fUcaCinQFuSDDBaC77VoqhMzdGBBRX26DB3e9GtQ731yKqgPouUqJ",
  "key29": "3Pj2YDbdYPgqaVZm2SzKeng4ZKgU3wmMFgSmo7eRV1CdBufAcPzRja91TK3yz8WpPeC5NbevhjBUHwtsomdFjS5",
  "key30": "4JusZxrmwPef3hJUGPn5zPyNNPXUA2G7huBGjBthJXD5JvUckzkrtMubdWfhSHxP2dmrsVu4VR24x7Y2gKuyQcgx",
  "key31": "3D73E3YEe8RsVD6oN77hEjnbwgnr2AkndpJAENXWYQ39RFQU9cRbgUmpxKaPs7CxrgVDRtfeQT7Y1thxYF2Xnmsq"
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
