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
    "3hPpw151rb2GgSLnGi4yax6x9R9ha7tgHTw3ymqeFNkwhuKmviXPNp9yQmZmiGh7JmWYbSmzziWxEXe2oyWYGhA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dCrxVVVRZyfgimaf3nfQhw1RKSMokVbQZwcUsts4DhTsXUuffcTniHZUHzgbB4ZZPirHhLPBHGP47XqafBE4voJ",
  "key1": "4neJ9XSY4Qut3Kd81Q1635V9tooMKpYBFkX6WsHiUxDDAap2khX5rxNaX3xmwDywkXj63wUHj1qopaFMKDjNsYcv",
  "key2": "5uYesCUzkPp1xT2kZwk6976FtPsRWCiny35eAjwzEGzFmNv8BFKwjUbUQ2ijugYsMTYfikZxr3nExeapSJJXWUCY",
  "key3": "4xFcV15YsvquTBmvgipXy6tW8621iLignc5d414SZ2z4hMNyXbDcpzm1qDkT7oqK9jfMFi6PocVZSfLzs1DJVxxJ",
  "key4": "4G6V2ULb2pcW9Knez38gUFr7xZvRTWKvcvjnQ2dxvR7FcwCQLMokhncS3xWdp2atWUBniSKJCmSWKQZFYMEpPs88",
  "key5": "2vegsh8CkARTK2LpnWUAcjbCCVGzbGD4c5hvLAoZwJ31koRSAoANHahLYrdN2uSTjUonFwfS4SJ9w5xKN5LcmSqk",
  "key6": "2q6CUW53SA9deVBa7699QUVdEUEuy76fKJBF16Wo8VeVJNzHabz379AKBnt9Smn1eQbJPMq2P9WiBXwQ9wdTz3Zc",
  "key7": "2Zf77QfYCzLYYqJ8Y5QP25BsPi2B3gVdzLpnggzt3iNuBGVw7b3D2JVvzejKBSrBeVXoJX2dgnpnBx7F21bSc8Mm",
  "key8": "4zARFc4J7eZNHJdzMy9WK5pCsGpTxmeBUMSmp1BnJJcYSRqGKSdtz7uQXQ2fwRXKkBHkjANw1JoNwQjqmwNsJukj",
  "key9": "PkJ4UdCjiqwqeiSKw8Ha2RA7w6Zq8XXEGbaxgY4a4nys9VHSpG4mgxeWGkjqAFX5vr7Ktrz5pK2nacet8k76kJz",
  "key10": "Tm9RBs66BQbepUYrD6eAsPNHAa3iohpgkVZWtxhTyYSvexaHtWyduL7kTnSPpZdXXGiqjgvDxFhXLo1t4PFU9A3",
  "key11": "5ZGbaGPiPW3vfEP3rege1HmqsWPgWkebVJ23FWH74WFqzKtCAPQVyUYHH9wktQnjtQna3wt4hggbSEVCxxLRUtG2",
  "key12": "miVRc4F3AsfSZMmbcHUeP2tAS7o4S3Jk3wx9eG3vy68kU7C3XybJ1gM9A7YdLAq1R7wHAZNJufP54XAMLWeKHbm",
  "key13": "4RAPHx6UaR1m2MkF3vVeU3aaqtPxo7qzQfgUGe1SuwBye2ZRa5qwXoD1bAzQhgXqhQ75YVSW9cK3s21p2Grfhv4h",
  "key14": "5eonwSRESuAiYq68unPS4rJ1vbciyp82pYvAU7vVbTw4FdidtC2k5RiBs7YugeHz5TmJAjRsCpsvHXGH2WshyLCT",
  "key15": "4FjB8xUynukYveuZdZ5Fs6CYc6kN95nC5Lj8MJAyoV9DPyznyXMkJuUSXzJZobdKkcFakfKrGrvPevSUNduQQEzi",
  "key16": "5S3Ld4rNZqsSnsDVEhkRawyFY4p96tpack6aWVKSsVUDW8t83TmHnp6UKt9ohhBBgyyLJjKYiZa32Zagr5SfiVJb",
  "key17": "5GAZxzXxHCHrbDRncHEFGT9tJv51BnGtawgdv1u5Na2XAC72EPbRDXbdZFBuHQmfsfqnTD39NrNHZ3iUCa54qZx2",
  "key18": "44kaxDWefTMKECj9qXXkVnNvxecEVnim5nXxUDJK6FGzrfs1VUVJyLmnMu7J9HgLeUZ2Uanox5FJghxqLfCMynaF",
  "key19": "9eGAnyGh8NUQ8qd9ChLKnSPNdQaTWNL3xJeovsyuymQvDD43yXhWGcoJyQxAqFiSwZzJHgFq3B92sr9MeR1Escv",
  "key20": "LuLNsUmLwa59jkfmNwQFLrHzVn67YFuJr8XULwdv2sSfAegUtamPtcLNriRRbyhZorZGXdYG14UohPNRJDU4zPC",
  "key21": "5GR6w8X3h2YyriKoseMXRRU6hzEPUYFVrhMP6TeVUVU5i7kW5kfXKrarD7WWCHWuUyngKGGPbRLD7YQdS8WgFEVb",
  "key22": "2HjzKMygie9rn88XfrMao72VaSwyCBR5Girc7cmPdtZdN5CwsaNpZfNACZYdBgRmqyjRXYX9qPXLWsijLgwkWvJN",
  "key23": "3wyPXz373KrwFW8Upd3f1KphKxXXzHPfw1y9DwpnnVzkFtEgfPVs7a94kbFVPmamizZs449uohzV6hEs5EQ8Xxq6",
  "key24": "3WFuJxNk8Uoy3wT39X9qFD6jYqMpppL6rfihe265pkEwAtufYNgqxArtUyGowVDw7ymiiYk5AGZWxzDbMww6TJZa",
  "key25": "d1mymN9fF1X7zwN4Zej5Re38uHkHDiKu5f1jmziY2BfkjKQ6dxp7AmbQ9N5TCmPZppvt4Qbi6owTSHgNLRAQhCU",
  "key26": "3tVAaXeC8oLG5CUNqyxDmdTDZfMzxzptWTEPdq5fzj4Ng1TKNHmfs9UDZ4ycdLoHwmeRyHonKPFyjBi63LWgYjRK",
  "key27": "552uhhn843daXFFsQu8WTSmoUbtTBdXbwj4rHK6APsGfpUBAsKboAzriUmSwEfc7cZnVeycdDz6B5fv7TUfWARYa",
  "key28": "4gWbiTdLPb9hjGbfropEJ6eHKx17wGnfmmGXyH7avp85TYhN6aP7WULjhEci8RUCnrabS1KBrbbA8SpgkqjFYSef",
  "key29": "1Are4hwMMn4izUWs9VLTf7BGtxotXCr81wyYJmJs1C9s3BGaoZherFLZnQsxerHmHneCU3ovkS3iWXYZ2U2Rfa8",
  "key30": "2vcdYNS6nxYRGpdztuA3ZmW2Fczq7PkJZYVvfxKd8pZzxHwgJ7C7YAbdJW9BmbxYTygmx8zZvzDx1vLfcMjC2Kzb",
  "key31": "sAzePkVzbhE4WpMjyJPFBesCP4CrUU7ejuZXfvd3eJCq465VoApxoB3WEwq3uPwkEeWQmiS7eWV8wiSFARLHVkK",
  "key32": "4PpiBvm61bNUEKEHzE4mTgDVtXb6JextiirRZawLDkkamJrGkTNrsPTYCf7g69zWHzhFDA8MCLsbE9q3GyB1BdGQ"
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
