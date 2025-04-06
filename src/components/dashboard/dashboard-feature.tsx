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
    "666PFTQDvjdqzHaNZ1WupAE5a1edEs8mjNV9foVUEswqGSk7gftEsqte6GM6zSGA4vZguz1jnmcFPhByh5pBjqvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a1XcLRB16gXqYPYFSrBwRATebkg9u75WCGjdCeeApbcbFPVQdV2BGE7JtunxiHeNPJC5W9nxcbXNCngmP1ZGMYt",
  "key1": "4Yq9CN5Xj2wcc1ZF4JHs1H5K5MVmaw4LyPfbad4tYCN4t1w3pmTCEonqcoKpATJKgbTk2kbRKKqxoDvYHp6KPvaP",
  "key2": "VzYkT792cC4pc4XogcQQdzJLDhfdBwRkydxKDS9gXeDYYcYvPEiNHrtpCNnh1dM8o7W2nCPX4SD23DT7ZFGigpb",
  "key3": "3iM8o5YNLyNGYrznex2J9SumhosR6sDz2xqBGpZo8R1VYEephTfsP1BkExnxiJXyK8LBzWbD63EfVET5F5FzWzQu",
  "key4": "4QvxGsesHb3cZTyRqMQ9SJMbjia427Jyt7MaFF3WbieTF62rToWPYfAUjpP3CyUzdQPDRjU5qCZcq95tS8tZxLA8",
  "key5": "3QSWQMSjq6t4S9npbgJpKV9cFDP3ZaX1eHVmjAkgueHhHVYWHaieNptLjrjanRsqbfK6e64FoQm6K4yQgdQXybfe",
  "key6": "2HMdL8nmi4aVEM1nPWmYKYpfzFZNVmYmVQ4ygWwoZGqNY6Q7zSfpnU8vneJ58qMBEFmyLuKBLqBZrihkRmHe4ixQ",
  "key7": "5ryQLi9KbTfnSseFvWsGfh3cqZ3vywq5X76ScDQsuxnNiu8TDGjxDBEhcgFp23Ch82qEBkQaCV5nCtyhShZ2ViF1",
  "key8": "6FPFyn4prpT14z2Lnct3eT5Rc2eWeb19Mr5dYTCoy91fmgE6jYCEuj7JkWiVyWFUCoqv3W9fbBEQ1hmSqG8T6FP",
  "key9": "5LxnTfTrnmVrD7QvhFipenkShKFesgVBxCLBWU949JQ39VdFFdJRfLFJjM7qMh3fmKwLPoDRG7iMWD81HEpY66pM",
  "key10": "29WQxsVMH5kcBpU6dYSrR6v9LurmH2nngZYrk2s5ziuresrEshk5KjXrXaHzFbtiPFbLK2ryJ9jMxagy2X2X75cD",
  "key11": "5FmyxSmVmdbBmUCnviM8kL5XE2PAkDUV2M1WATdHYfpnbvEyNtsJYrw39bBzRXAvFRmUAz7gHLXmoaKqajyHTVd3",
  "key12": "gmDkrzv1UmSqc7SMyceQyJSe7XeAVDAJANgNWjGCGVfpHdYxynNPLSfmtr2FnAoFqRWrnJH62ME7aNrqNKXhNhU",
  "key13": "2bdaQ6xYftetGoJ1KsuN9sha4V2UgCPXGWzWANiXqjuHA1g29WvU1pjLBKxjNfSD8iY858134F9MVrUJUWpvmzvi",
  "key14": "rwwixVHcXU2JTN9gKD1m5shdVRDrqzo8BVyHQZuuDQoDV1UazedBqvHzoX43W6yJULgrW5ojoHnfZLsuSJwCUZR",
  "key15": "3iU2MWdgAFhs27HuAdobVsmSKYfWsszfLKk6eD8JTxKYA4rczAjTyHU5airC9gsFDSTx8ZiACDxXJ5VPTcDPFDWb",
  "key16": "cZJB3eJ4g8eSyY16PBCACqWYiZfW96pa5yyPrRxvMz1kD3BuLZ5XuYaWCgA7ivbgW1828a9gGf18DSQo5HQpsQ4",
  "key17": "5EnHTdZ44agsp4KjRVdDKcfJPiHtiezhE1ALBn1BLtLd3SAeQeweMjEjqSdZetEk464cNWCNc8dWU8iakCXKJyEA",
  "key18": "v8T4AvBrWzCsiCQFCgApaoYNsFsjLXyxs8dbaBD5jMPfwVBBsyBzhbh4f2tK36EmvpZ2Gd1PYUoAM8iGz2iZnsB",
  "key19": "2Tr1hH7pFR1EZY5HKbqSSGQUd4gATPzisXMXfgds2gGsMZPPXCepTEzF8AeaHoEcHFmVZVMMk1M4oLotYDUX5chn",
  "key20": "4xccuPJVM9kiTYLEq1twqEQzS2owT44FhX83UzsMwYTo1b9Z9n5bbLxmUfAmycVtJN8CrBwNapkddJMW3ggU3PLT",
  "key21": "iD6SHtrtBxypMjc4g64bgrop6YEhMbbRnLsntLfgfRhAyqukcj1iHuiJmFD5Eqv87Leou4Gnn8q1pkP3zKdWEEN",
  "key22": "XqC7VuCpdVP85VHX5SfXRdLrYQ3UYQmqMPX3U8ToJYTDUqcqXJ2r9To9fnRu1vhzZmUWx3JAUvGK3RPxTioHaPP",
  "key23": "959agxbeyLL3bsACxKe7KjocZmHrhqMNoEig2xMSs1tMy837jjw2HkKJQXK2ZUyeuKk3zsmQpVzSA94WKeyzUdB",
  "key24": "4zkoTt21DwE5dcrazP3z5d7RTiHsPqwmiwiuSrXJZGM7CaWRVEuDNFGq3ubwYJGHub8RN5HCw6n9DttUECxYWhma",
  "key25": "3wB3uw52KXPurbwU11MVtRT77Raqn6E8JCuv9Z6k3ZP33BPdggvC5PzPpcPYCUqXcFg1EqPwuF4nFMwL67ajRkZR"
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
