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
    "2Q3Bzxw1NSi5mZyMMHNzMqzgbmKXeTU7psohm2sho7UJgySKbV7N8cAxDHaHrfY8eqC84Q7FyaDZmAXaaJtR8jxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oF8xoxaxNU9dWwADTdwj3dLiMg8nScjL1U85NciHdXoARv6agRCo2T9cibhZ6J84PTibwhwrMBvCE1Q1ki9KsDd",
  "key1": "rXXYAgD2nHxxAscrhGniV7SdozGd62VSC5g1KGNgKzqPeHaz6P2w25PkV1NHhDoL7yezyaBcDfRk5ZMXt3U8RGN",
  "key2": "4SJcbdPp9L9JwLyo5cSmUmz8k9WVH2qNCSKaNu9MfLFi1BapSBRhXQ8PNxavg2MvdaF9iDcdrwoAA7LmCzt6BndX",
  "key3": "2zXC2hcxRW5UzUeeXAuMjH3NYo3zxHWMKtvaY38bJC2K21ZLJWrgQrt6NzkXRQ9m4h7NMbAf3FfgqrTKzmuexbCu",
  "key4": "4Jjvs64fbVUwiq8CsfxUvuk3DEkhP5bEogZsQbzrukdNUd3ZswtuLHfukF6S55746jDrVQ9vdBfy2dVH3j1eq7FS",
  "key5": "3vykEFDvfTKwFWLiyaWzvVtv5oCG8sffxGHrTwBFqkr7otWVb77NFQueSHXUC8jbigVASD8RgTbokuYXkKGAGqdt",
  "key6": "4Tv8Th9ECg4ftAtKsBUJpqH6HzReirJtEqVaHn6nVyZSCJiGnxdncRa5HXAcwcdstJ3QymfijBCEE71ZFksBvw3J",
  "key7": "66bLGxWb3mJaMoQPetNxBrPY7kHiPpQe79UbpHSfgX9Gro12Mjp7AGcfKMKBE1Vch2EfZQUUcW3ct1QQJih9EGFb",
  "key8": "59HGALZxkVpPSrsMe8mYNc6tEutQvogWuGngw8uQr17GBmezEBAhyU4Ua5gfH2kLcjfNRHKLQGMWC8N49Kbr7vCa",
  "key9": "8uHuQGNBivf7ySQUNciRPSH7QJHvC86EVmEQ7yi5HhGc6TQgJnZQrdLJXrS8vo3hCNmQSENpB6yd9hKe9fvvgAe",
  "key10": "2KVQViivxDPuRPSedz4RoY1poGsjrJHVkryotNTiFJoHyuUe9oG3jAFBWRscgT9BAd3RLRrg2NNdPwtGQksZHbbE",
  "key11": "2Xds34J5UKHNVBsWBRV73y4HSFwjzzHVkaftfvHfHsF5WW5wL6t1Ng5RUatVTekcQiS24ZnmGoXwntt3TAVayYWX",
  "key12": "3SXhnDHbh5hwwL7rWA82pQjnJYBMYuYpTEmcdYGu1PWkPTGZEdQ4X2jtBdhptShokDx3c5HHD9DsMDcaLW3t74k4",
  "key13": "3Gm9bZh3en6SRxF1J8vrUazGzJGxRiRYE9knx3kEsmVS91eaKPCuiXBUKWbSnupxN9fJRKYEWUQ2Av5GsJZhusY3",
  "key14": "4HeSUPDCT4wvLYMaSn9zuPnsQskvThSD1g28By5G1kmUgsZeSvACjm7yzZiWcU2DkZUh8YbFQhv6KSLSQ3DapoKG",
  "key15": "48PpZ3aNLctH1PFu6yerztKjg7aq3pjcGhHHKFGuXM9mJ2k2jUTgwZEggndnMAodeg5oCBxVgwUmEJKCDHHrknPT",
  "key16": "ME8Ti3WPx6XhMtiCYkEra8arWofe3DwL8rSiuyvmKaG2PHNPKXvnksrTuyQLYEB522qPHCjsnEppjF1oEDzG5cK",
  "key17": "5JgbEe9dYxawdVR6AWq7S563BF1bPp5gYXDVS2EPiGFTMoyeTXgEidJnvgdZMXw9dYfStjaZpqx6JbQpUnfvSL8q",
  "key18": "5atgQuXg8VDT8zFhSoXKQZarFj4GHw4JZtmU9yiqKTodwWvpKNdQFqZgrUJuCtc5sgmHuWp5QigAWYHQJuV6SH27",
  "key19": "478sehctPML2z4MhTc4if7TgbqbTP6xa6GLnWg6f1GtmULV5QtDTP2FzHcjZhq8BU1LBvC27xojp7ZYP2ev44Ch6",
  "key20": "2xRcpDA7GRRRDFiyFYiptLdR1rZaRWCv78SZZtWLoQTp5kwGa91odZX8tXn86Gxs3b1xhSHwFDMQmKUmbGN62fo1",
  "key21": "PGoKs6bQEauCWL1nuN117hs6XGLUtdqqrkhm9vPGbS1EfuUMZzGzi16VuYNGTrCdZBpwE8mY2nVcJSbCp6pJwNX",
  "key22": "5WSFc81xtwWSoCcmJc6VDjWpW7NRgNYRCBgX78BG7fSuZv6yGuBHZ5CzqcGVi36q6Pd9D5tSzsRVJC9Ts8oLr7BQ",
  "key23": "UwSWVgGXumAkjs57hnNagwHDBXz2yAGC8bmgXRe4vaZ5xyoDup3TEQTUc9CM2qxmsthf5Dsm24jzzTdtjJ5tNJX",
  "key24": "45c5H9amcj3xfqWzreUCvPXFPdsADFJ1t7zrdj5QQokvx5Wk2vtQksxWTZLTNNkgJ75xqnttNJMKs3wuWxaFPERa",
  "key25": "4cvvn2E3Kz9PFFBhNC14E546NTgiuseRopM2Q5yHqzCK4Gd9ggueqaHLKwdh6c5tKMNpukNWiDWJE8BpA5EJutp2",
  "key26": "4MTJ6voeyBjpP53qMJCQcNoAV4wiRmbEhkvTS2zrsg4yKWjNj1i8T67BXYrGmrZq4otvuniM52ACE3cPB6UUaoiY"
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
