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
    "64G4gzaDhaCwYv6RYDvaEZMH3intgVipmDqCQdAEkGhnmCnrNTc7qNpFjqfp8B6LuE7B1pzJDiakU7zKUMysjSRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HLNWSBJgL5dfFnccBtcTFVMEdDnYs4SgSsmkjFLVPamqiUmKyrwdXvWHws9Su5LtA8XviikKbdr2NqYY4HMRN2e",
  "key1": "3GTBU6LN22vQdpLZ8nGtimXtv6dHyHuQbijXoov6X9Ns8w4SFnkM5tTWo9FSxSjaV4DSd2UF1o7QL4ycq2YRNVb2",
  "key2": "25Ff4FCYNMaUVYpRwo4TLPtasQ9D3wjerVKrQ4ofLfpXu6oUo6oua4nF13x2Abtxh9T1LX1fXRKB2VJA23ieard1",
  "key3": "2jajwavF3rwGEi353GDbKpvBxjS2iSb6sxqgSPeDKW8iop4ZZrVswwXqohwf7rezFZZDPu9mRpmuxL7eWkxpXEme",
  "key4": "52KDFebJLX6gnbDnF1hQiwrMjJGWv9b2AwJL3vEvrZ76bBaSCZpPF2FrmVowPgbnhAWtnvZ5Gf5WPiXw9hf2Ptjr",
  "key5": "gYLJJAAXj3Qs7djpFbj2rju4AJqJfNhKeyTKbq4ooHStBSHq7cuNcDYuDiteiZqREnkCwoWivB7E2CfXwCc4XX1",
  "key6": "PRfPJfVMMUFgCWh6UVkcfpYCoa5PHJfXaHhGgMVfWXeYuaMWPx6fkhu9duwoGGEjpwaBjE1ZyqebGyrdNMFoj8m",
  "key7": "4uaYzQ9rDzEvncUh5J5HgW3s4wXD3DxN7XkSHSgTPQZ48EpDdazZJ3mQQZ6C1oYYXmqF6CFsCT6x2bFEcfgcSLbp",
  "key8": "3WULRET15HBVgWTZjXPuKLvPg5b2NezrazmSLxY9L9eJ31ycp7ZoN2tKz84N3ZNE6Dj4wkm2qWh4PUwpPf9ZAiho",
  "key9": "xq6YCwVpxy9dChEV2Ys58F2Gim7QRvWBYf9qpTmht58yhmYexCYZDLT3pWuyvDU22ina68qHduTv4BFbwAPwLaA",
  "key10": "4QmsX8WtwQgT1b32kZXZQt7ZF5x4fMdrEtrN4b9LKZK15DSFC2KMLb5Mi8VHhy1NXefah8bGM7V9kZTLM8BnPb6v",
  "key11": "5uwWjjbs4ELp89oTFoE3M8KDBZzN1qAQ75zdDtcJMBqnvUMJKVhCK46e4LcEidummrDEgQbX4wTemrgbeQprvCZ6",
  "key12": "2scJgqVgZpdSDZHTUAzoeobY4Y5caxdqajNRFPFp6Y3dA1RWZrmwBWNu7PWpgde8UcEHZLCQg1cX67rbpD1DoPt4",
  "key13": "3xvx33cM5RwJ47VZvVa4MXsPRmL8GdYKRgyB7AvNrt8zssXztGRS2fF8LZt9Uq3piNHoupnhxyV1ks8x4LKCSoZn",
  "key14": "2Gs1qEUnDGusWzXzWHN5pS2ri6mj2i58x3W4vQRVpaa7g6XUc78aH23mCoMP2jQUXXaDHA1LTk1d1fAx1uMoUDfH",
  "key15": "5siFKsWdxU7snCZdBAy24mHjcgqQz153eaEEGHetbFWZMzdm9UXpCQKATKXJNecfjwsMJfrgvZtV92LbrNPfKsZ7",
  "key16": "2JRFK2vWeARzwXt2wt1PWvsugF5fCKzu3kJUmtaefAbowZkpL4PhmcisGe9EWRoYF5mGu4BNpVkzjiq7Tz8jotE1",
  "key17": "cBDPV4mMax8ddTeoAn1ricga2E8Q4bKdvsgGkMr3unJ2a9mqVkVtWf76wSDfFRLa3FHND47VNeM98xLyz9yQoeb",
  "key18": "3MYRMStjL6UAipoERKv76cRk1V8AVVNKixdBNcJtBMirp1DhAwzhjV1y7yPDXXtt8FocaEAp7viswMDy7LqWRZUT",
  "key19": "2s6R4UBrKxQGe2H3ynPn59YBHADLJuGKMnTDUWPqkBEitkcUt37jJ5omuBazzZ6eZUsSHWfLUvZ9j2GWHwLgXSy4",
  "key20": "7LETvPsF6rrA3WHtcv99xpiSqxLzBHKraHWQcGWpo72XK4WQnuzu5iXPoiSfinDLCKKWJQqgpdi44Yndp94G77Y",
  "key21": "3mxXmHeYK55e61jmFfhJdwGcuECJYnALERfDEP5Sm2tZKBRAxXd6bbdBfowLprQEBhdbRLtjxNAtCviHu411fwcS",
  "key22": "DQSBoLb5sn8oYzw3yqSSwtqaoqZgAf62gZ7ZbCdHqjqSzdXzwpYCM48UQTWyDS1b2x5kNyEGpVFynjwjzdsZEXG",
  "key23": "2uNPZzeznsS8EApKREkDDcMnBr5Jar8Me23t9derPHmep9vFm8mRsMVyrgecCLYo2UbLNz9YLxat6XtysKX6JC2P",
  "key24": "5QEcfSLsT1rYqnnW4eU3UFw423kmaveaRRDzvXStZsM5EnY8PF6EiAr2ApRXtkXKqrAAN6xDva4kQyfrBgtfrMjD",
  "key25": "2cunBWK6xr27iN1Wc99zdNQngP2MBfMH4RyGy81B6NFCNw9P3LzzQpR5UkDZmE5FHK52b35Fk4zGQ2VqzvHWWm9H",
  "key26": "3Sa4pH3EQ9aK8NH4ZTvMsQiPCRKED2PyMPn9fJoYNZc5YkQXvAr2Krkm6ucD2wKdfQJU8vc2a66RJtysmDfDpq1g"
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
