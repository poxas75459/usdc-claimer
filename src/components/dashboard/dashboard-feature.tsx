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
    "5Jo1fqumpQ33CxDWHmta7WebGYQnLQYsFF2WR3AmcGzzJLauzKe35AyWjkeEnci5exkr1EhAWbjWsc2SW85mZyBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CRVY1NDDcZZaQkafVbfFCxCoKnx84wRMVAC7yzAwivuVsXgedRs558AQKcuMLvza46Lh8EqtedeGchFa3HC6QAj",
  "key1": "3NfgoigX2wsxgFH8VrtpKm8A2LCs91kvN49prN5nGzokbVCAL2XXXmz1YG96cDyNj6rf62HEfZLYWddxXcvVviem",
  "key2": "3RqDhaEXaMF6r2zwYUBh6AufTWHavUMUbCYsSHDcs8PxNanR8PgW6arZmXYt5k2i8q3PPE9cByHgy2j8tMKYZGZs",
  "key3": "5Bji6xtnG2hyYnQwchfNP4xgLY7QV1m9NNQpDtnv3vBPPqLKp8n4rUy1LEmgeetsZwuSKSVurnhEVYBfnSZ5ctXb",
  "key4": "5r6EcA4nhNct5UqT5Ri956CxQfHgiokfDY5XnJZ5iGJRva612PJZJA55DghviTW4DDfkRoyQGkZh7PGmnDFMg9Eo",
  "key5": "3svihAgpEkRwDouScEgmPDj6upxCyUKe6jMm97mURJuP9F9YR8h961mAPsvkZQDjSivtCVaXTFFrTzPEsJyk8Raz",
  "key6": "3DAyzSYm7YkX3SySGVZxZQPiMRY9JyF11nfrTuqsBHuu25NVScrpUCgLPPyjuYS8to3dUKCdPR8ehz3GRJ77vVmZ",
  "key7": "3MGyTauFPKHTF3pEktj7z3qdRgJfVnAB9JvSWrYofdkgxJYDNYoqppL45nBm4rsAE66ussL56oxT1TN4i9symrmg",
  "key8": "5dm3VYUsDx6CPX4SnotPPQnv17UnEjqU1QVUEZC19KVURuV55X4KUZYNB9rwQqFCwrG4xavcQYasVkWcUtyk8Dgx",
  "key9": "3BnRzDJDLfb25soV1iFVn7M6G6L4dszoszvHvTAhUjp6FkR3KwvVPWh2tRpEovs8pqGWEWtHJi2srqSTytxGMi5N",
  "key10": "4JLjKhTirNF8QRYjZUAYyENZY34Pww8p9ueo24fjXDvYatgvX2Xvop6bzoXpzEctSMEyVcLXmggnaHw9ogSQT3aW",
  "key11": "27XqxYUFAgE5Cfy2JW8w5LQ8ADfQbC6T8Ephm8aSEPE7c5aFNkPtXBnLXChU8WZM52b9QFJNiYgNsutfEZgG2PVo",
  "key12": "4chcUj9po2X9XuQPGGKDSt9HEbafeVTgZaMn1t7PCinxXUie4GkiLZ5msZxvGMapD2Qx3L2Z8ypLsQpePf73YFkQ",
  "key13": "4BK5QwfAMKGLEgWFNe8NEid5sqZTjvp1z1Wyjms59rHhbNxDoWTZV7MH62FBpVGAq4QD7o4yt8rH9Nr2JWDRg69i",
  "key14": "4nWETYboJQQTDGT7625qkMWuuKfPQePegjGzCBaQ1a5nELvQDHjrSjwQxtGvKXhz71WcimkDyu3Uo8WWZD3rekRq",
  "key15": "2WyT19HyUBHC9SQcpnEi9TWSCMP7uMHa7rjHhX1BJUEvSBy1UrQtB3aC1EirhewviD8WdPWDkBkFzVogyFA1jZKw",
  "key16": "4dibG3Fy4JKnyJenSw7BKmWhhUi4u7RTK8kqdxxh5oKvgpGZNBRpQgVYoeZhpKFdYTQU65vSytBhxsZTB7v1QpBG",
  "key17": "62pMe5EBqSkvwx377kwFmqARkaNLt5inxkR2ShWjBGSnPRodA7kcyvTD8HY3wKwTcLcthdnyVzTzLxHj53XiNKnC",
  "key18": "5ucStibhKi38Z8UckKjxp2Z5ZqCAXGMu1SwQmBjPnZiHG98LifMspNqCBmCGWj5a2B3WErUVqtsh7js3ZrRKduDJ",
  "key19": "66sdMxjFsCa2iGVerXFq3ykNwTRDGExP5kKtf8pYqFBNsULpXicpVSqeza5jRtaXzEcSbnbodsKS91vDr1uu1cJ2",
  "key20": "3xfuKeqqwcSgfU72C4jkBNy5N1WcFgDzNPEDMgtW5PJ63XcxKWArd68hbtJnbQpChbcHkhZxCqT92s44YJKhdAzd",
  "key21": "4e851RTrAKcwBfQfLUVawBVd24dXoKSq1r1JzLqnYTwz4gPnj3oqpjt2aLnMxUcdE8DoNKYbPGvk5w185e4VbgoA",
  "key22": "4uVkct7EHtFouMWg7DMe3DBVCuG9s1wZgGULV7JHbdHxhgi72wbRtVZqaa6FuLTPwjQ182U94VX6bgDkmv8o6dho",
  "key23": "bMBDcvwEGtUScM3Z9aEmpmG35r8tB9fiWBEepawwGHnNNX96jDqgeNzw3swM4VXkXS7JNN7viUQsCa7rdQ86Cq8",
  "key24": "JQxNJCyg1XXGMg3h5GXKi9TvTniSgpvu7nPWwVPBXUgwuDPg3jaC1kPLHV9zj5L2QKAuRPZtcJrMAD1op16Hz6z",
  "key25": "2Lo4hQRMfmcgCm6x8UtnfEhP3TXyztVtFfqQv6zEZTwWE34rAQf77B3vDqjRvFNhftGv99krGq9a98PCkYjcxwJe",
  "key26": "4WTwT5NS5CB4fHVjf2uUMZ8vcMCEjqYxRdmP7vc6BcFAmhfeKxEshZqYSWcgfHRozDaFitg18YqH4FiRcddtgAJd",
  "key27": "4m83eitzr4i6gNBLf3d5gU1E3HuXDxnFiUpzVcwoDdHSWygBuYKB7sVJYaKhmnTzCDUzGMRUyuEKE79zqZNnrF6K",
  "key28": "4vPJkauu9xSAvPrXuza7C9TYABSKPqJXyQLP8YH9jQGpzf94DgMZ7mf1cpVaNRth1wVNb58kVosYczVopDmzHN1",
  "key29": "5yrTs3iRBBjySPNyCjYHxgN3bbicYT38EsLtnfpu9k4PU5AAJSBLnfH2TUkwitr7zfe8T9cqE9YvnfWrAjtNdoUX",
  "key30": "WMiciSKEzwK1WjkvK3hDQ2NNkBYPdFYiVBozYbNxjvE2PGYXfWb8H3wSeHgwoVjTEm8dT5Di2XoT9V8ANhz4FzC",
  "key31": "3mmDpBNNfnkd94FoR9YnKfZWtcLvTnDL3NJJYLNG7agdACZsKpwxpceKykpTHNquuEVG4UtvKqtaS3rGJWjusGgY"
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
