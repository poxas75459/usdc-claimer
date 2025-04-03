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
    "fSE6Nq2khieR4LjiJebAwpgsv3s5dbFxeMoJCLeD6SGmK2stCkchQDoxusAyVbeCofNAHKktVgdHMPJSGsCma7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zvqkxpzKwaHC8mKgxUybgduwF8CA9FT3KsRTMtTnciS2PJXVgr7xSZhr5nofM3YMcKW7WmW9c3pQeLjBUfev1FM",
  "key1": "dmrNj48h7yJp9xnkKJqX2gorCS2pSKWVRYHzjXWjMFTWbAnJGKj7S8xshAdiWcpm9X2RXk5aDpoanHD7rpxooNR",
  "key2": "zjoh49o1iR9dpEVva67MLwRvCN62tBJhsJVe9uEFXNDYy2fUg15ptvNRXVHXPXxakmnZVkPfNAYuUQPL2qkLve1",
  "key3": "Dw7516AqW6pjxw3GroE5v3qtH1nhNsuCp6WtEvRZ4WGfJ1NMN2h4t1TfzXamxy4bky7J6JSJjbqaEjsriBDKUUo",
  "key4": "5hzdQwVPELpKjDQYy1CkhWJbU2Rtd9nD4fhE2XHSb53J8grChdn3CWfdP8f1MRa8cj5GMeZzBanHkEQgsipgQAkt",
  "key5": "3JnvriZ14jkQ5KjLx7DMY8epWxst6GTAVsT6gnUVWjcivkqwsaVeSjj3D2yziY5xRvt5usyfrT1hKepL35GbhBsT",
  "key6": "5ESocLnAc1SfkaJLBY1pEbnFFLVPcrttg7ZpWSQvgUrr3iuJYEke4D7cwy22qXTUTQ6HtbViATDDbTVqNTHHQMQp",
  "key7": "2XcUPw3Nkwq9Nk1DazgpJt8JfmX2kgVi6TtLShK3FcQTNvKgYdge9QJkMb9zccG3cqZrUy1kY8GBJonQ6ZS8KUjn",
  "key8": "4kFUPwZ6JXbmgtWJBz2dAopZimZf6giHMavTZ4kZ2KEHK9sGXVs8XtmCNzbgX1n6j57PcAj2afR7TRYfoiBob1Kk",
  "key9": "rR2UdZEyRrw6mK7f9c8ppvpbe1CjtQGoz46rxovSxL87QCG6vwZpu12jdgHBLLZrTnVvTwYqGoSaKucyppeNoku",
  "key10": "5fNQmo6ETE3grqDDPo2Pp97T7nwuq9fUNCuJ9VYWVmknv83Vqp1yATsCTS7qAzPRLZakrt39gHzcTWVT6NkfW8Z2",
  "key11": "4mpQYAC1mhRzcHcLfXmn96jYiw69wk1vHiSGuqz17XhSVt5pP5yTmSR47KUPspxPBawXnF4iafVRGNRrF8x31ri4",
  "key12": "48A9N7CZfh1UvxxZRSgPLepjJ3hrBzsZS1Pt8xBGUAp2GMCFQjSvSTUskKVzRY1J9hc8Q3PQvht24cEyKdd1JA1k",
  "key13": "26xk6A42nnVyMhpWQoefvHakXvHtewZy4aenJrSi49TUYo5rAdkHQGCM5qX6fH1zCcUAYSKw2t3ES1r7unaN8uzi",
  "key14": "EBBbhyvoprHXyYszuEG7tecL2GdwSTzSXxzpt5NqSzdLdKxs6e8d39rMiMk1rBiWUrnFLCzVoa9mb67ffvWmPjN",
  "key15": "3YT2FnvSqF27bZc6AJut6nETjESrTa1EquE5ZER3YD41bTPqFgutiQ7ncTWcBM4kfhsdVpR11wfdHoWjKYFRVwe1",
  "key16": "2BPJuZmzXCzzfN4EtbAwANAVK7RdtNia7V6KaZeYFjgx6dKSKFjrpPig4Dre5wVWNXSpaXZBZcvRVMM4vhuMRJGN",
  "key17": "2NFD2HbHejGokJu8ego3g1nnms1xDyzqq9GwLJob5YAzFCKtN6EZ1EaXn5ynCgNTzcCEygpHgdbb8Hp7gxANKAF1",
  "key18": "2Ej4pvWsxwq6KqSN6vKX1PyWpPHg4Wm8v6adaNZAj7NRJEtJQMiLwXk2XN3FD7YHK6gAHkqjDuFjxM8UGJrMLhnc",
  "key19": "2BeY5WzaCKDxogd4xS7fhfdkrkiHiAsTeocKKQZ248xC9VMxmjZK1te1yRtC1s5cUJrKaqVHZSubkvZJ6WtEN8NU",
  "key20": "2Az8RzcJ7rfYpA1R89FEaqgwY73LQTQt4JFXypiMvNuBdGfwvWRyow6vfH2Mk3BfYG9KFJH84B72MjgJ3KZzfAx3",
  "key21": "2ynykuKbcFAKVzPpCEUVvYBx4uJo59kW412MoxCezHTHEbNDPpgJbpkB3WJBCwn4dF2dayHofNzd9wTi4f6ug56S",
  "key22": "2WUcsMthrCrfifpDRpNGJArQL52w2hSjo3jcuVHiqfTZazLrANHHHRwjQd3uN7JsxgcbadMgjzD6RZtfb91LPK3Q",
  "key23": "66yYDQcZ4KV3qJmUwDNSqQ4dg7yBCkKQJBYs6VvwkLoHYGyedYoL5gfdSisLsVg4F1wt4WXj8dMLpATq3VdpH5Yp",
  "key24": "4UXpTWgxVYJpjoZBhAjnQKLoRXtn2Tb89vKhiJMQTqMbZsjdQ6Lik6iYdFhN7fZ6rzAGrHgh9CMqhU7rjLWvRRmB",
  "key25": "4Ktaj176WVH1gn3xhY9C9S11wY1Rbe8x5zZqKWZqDDyVrD2RwN1DxpTozWJfsrbzztYapfZHNiDwqEpWB1MqirVw",
  "key26": "5MztiztTQ4FihSmTB2pKrRM7zL5EYd26pb3N1KTeU59ypbcMJq3N5wzhhZNsJdF7XWZsHEvZBtdrYg8VTS44aHpD",
  "key27": "3fhwyagxWfFJQ51odr4eLR5N1nwjoivzq9adNw5mkjirpzmRteMQc5vWvaSQcQkDYiUPDuuQxVASFzM35Fg5EsoU",
  "key28": "3z7xdWP7mkZSoxzkcdNzGvY9tPLkNwcYf5jHMkoBLjFRAf15Do7DX72qzsRuSvaCnJTJXmLHiqCtEVwqVH7c4Ao7",
  "key29": "478DR1MCHCHugXcXAGMk9tcTYy3EBBK5sWuRvBVMjVC929sAatNJw4PMcpEYLi7oPeqmtTCU7ANmWgZsRaB1igk1",
  "key30": "5LUhUxgZLP8xysMttAb4VnVdzURBDxGiUKB9QQLwp6zbizPnAZqq1d4ciYEqtCffaqetm9GGzwGfbR2PDh3mdMjy",
  "key31": "5BstquyChGExttau4cuPkCHAKz61DiDKDotkU9dvUkdpdpD7nvHwgkRPN1XSQNj6E5SbU9wTPHcPALomoh9fA58f",
  "key32": "2EvU7Wsx6EK4qqBzZj5bEyd1ZGk9TpV179EfAwpbYbAALvm4AGxQYTsMCxYcHaasuKtybdu418EfdMw4wDXxEsuq",
  "key33": "3isXGi6mG3SX8Sk2SCSiqd645W5kMSEXg99nxWn3hPf6RNZ4KY4gom5DaQokbyhZExLkryxCoonEMNS9vm6qXjgt"
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
