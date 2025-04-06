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
    "5DoGV8uqXbb3LpzcpgGrPHoGrq52so6ZZyW55JRiM9vBnCbr16geiNsDfEE5VqVFAytUm8NrXYgnJZ2gPAU7XXdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Byy5HK6o9oi1aytUzjnGbusA8Kt9ykfT8km2ayiuhMLAKxokJTwGE2q8zGUQyS8bgCWuLs48DfYbB2DkA7vobka",
  "key1": "28yd1LySib5XW56YfQ9wg487KrEwEQfCFPYVAe9K7DtNmQjdA5BPgUeu9UDu21ftt1BpCocPzeB9gGkLQC2uJTHH",
  "key2": "2eQaiC4FvJTtoLpeBSVr1ez6J2HdgwD1S7tiyFR6t9B26CUFsTgwKJmgc6vE8iSxDa6z5biJXLLimWwxLyfoJiLE",
  "key3": "2ePTCiL2BWwtHE3PTfV8mGSjs7Ldm4YnWTNn65NRU8sSB6igchmeijhEVFvsSVg6gw5qBP8LYtQDS1MjiQvQ8sZs",
  "key4": "XzX2jXfY2FpJhmcj2bXBdaN82NeBNDM6DbiLDDPwS1dkbKDzX6mtAbEQbdZS4xmLDwySnacQsYCAJd2mnqrE7xw",
  "key5": "B5wG3zrTHtVaR5aDPbCSJYs9eiJUDowhkFQLfAwEg57bCnx5vPVVQyx8Qy3Yh17zD8vW68LDQrw7rwC2S8wPLVX",
  "key6": "21Z697RDypJNoPEvnR4dv6N6eRoX9V43JytqGKxaJknS1Q6JYH1tYYAFypuDD4DmTa1fUMCyGFcgJYgL8rG8WyLW",
  "key7": "2BzCsSbdUsp1zw3Pstzgx4ZJaixKDaNeGFhVEvNsEf45qtwqEZ8r3hi2MbBiFcrXtifwKMURrxfyyHjCpd5EVoko",
  "key8": "4gBX2yTwEHZGFFidMqqHPVyRfTetfNRtNUHAzPFMasw5jeTBe4dysZjfogXrP3Q6DmbHZfA9DfyeJrT6Vs371Lms",
  "key9": "2JT2cNzXUX5eGLVJJK5MuHfcsMMcDybE2oUeb9HjBv17EV5wGPtBSfs2JK4WMEGupDfXQjPpHyQwVUAnr8riecEZ",
  "key10": "dshzLSzUsfdhUUaFp2yAQT3koUKpQehAQWzYvDxStiyoTj2GHGw5ezR7eJGRtmcvgfsyddBSWFP79As5iAxj7Fw",
  "key11": "4N2zujrwGEcjEofeppnXU2Cb18xZiPg3SR66BUc9WQRY6L8ReS68a2hUfv6vv1nbGVwqEU5ZDL6BeoD6bBiX6zbC",
  "key12": "9omNrHNXkkqgydWhniWXJLXYaZDt5WjB3MS4YorHtaYD9RFReNt4VoQD2fGxghJ6Lz7JHcdjqYgkiZ9uaqEx3G7",
  "key13": "3hLHUE63Pw6xfDTHfxUrsrECixQfaJ6YoDmprfJZsjfAfEdmALtKmr8NSeZxXWPcf49AtNtRWBRX3zF4f9xzkd8k",
  "key14": "5aUzkP5akW6yohSVeGVZ3W2nyEjHvddny7anNJ9WdfbrX7qzw6hyuhpXkpZvKLZdQnb5GFTnCtgRQGXQ1rMpV1mQ",
  "key15": "4m9gLfWoHD6TUAr7v3ipRHLgAp9jEvE4vNFYMqwqwUpDrexhM1yp2aYdhtzH3AYAWHBQDFRbPgHL5a6UkkKQRWqV",
  "key16": "5iEtj9n8fa5Ht4X533ShspWVKvyUdqxnw8WWy288yppvRxz9VMapCgxsMGBs4CRS48ufyc3DVZVQgTKiMKNVJoUR",
  "key17": "2VrKyYbbona6iWaYYY4y4oVwAsv5DUvCWHQ8B9BYYwhnTxz4mSw8BD6kot9V7E9V4CnPfZbPnsiGAUkC6umTJ2Mz",
  "key18": "2gZT5oLRL1euPVC1acD62gxYcNJBgknqHgoEu3SPEGDEc4gbzSUCSduoFkVbo7aYoHqZdwhR4WGGiW38XyWJmiGC",
  "key19": "Bj2NRrrZZS11KrRxoZVUG4W4CXAU9M3s88kJxDrv2xY65voVQDqbd2yUhne4z842nG81ecu2Y8A54Lqy9D4V7Vf",
  "key20": "52WvvbceqvTEA4AfDkHCKYeCJw4DuHNbuToLp8tEfnSUkDVV9FgFvf889txcXR5KukYrLXatt6fNRSuKXDTZ1RPH",
  "key21": "5xHbazy6wbo8rmyEQvFc2BKkcFGEk8U1qSxeHjMLbFtU69zdr6yiBCQ1GJhEWeqLHDLtn9sz4N4vAeUoFaNGfU4o",
  "key22": "5A94byy6qwR5P5WVG49uCF3oLUrpB8cUvMLjKNWGZirJP4qoryHmho1qVUvuc2P5E3sMEEH8R5WPGBgSSqDEtVQH",
  "key23": "mukwYBxH2uahZ7QHFuqhuKxBBJJb9by5rrWDdK6TiNSDSDMK5uP21briHNB7rwvcuKx7z334mvZHpdCrbVNJ1ii",
  "key24": "4Daf73SRMERw1tPY17twF1YZZwpHMzcsn4mPsyperXfG7kcBaH53w591TNRiHQx6YWSJeUBM4aE1KZUdqVFKQTiU",
  "key25": "5yZ7N7dUL7z1xJToWhSiN8AG9keYA5RVL7dX77DEEkoXTDVgsBq4xJrYmSXSCvoiYuEf974SuWHhMV95DW1fjmyW"
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
