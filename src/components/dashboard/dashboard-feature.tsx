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
    "3xisHDwo46JoxZLR6kCkmCXnCRoAG7ncoqUqrfosyQNirWjAfoAnL6JudtjBxs55YJf1bSsAUs1X55eCiCiMCquS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MuzimrJBWHAWKV6H8WVN9PS5SWAG4bh8cwsUvPUnmWndfS3zNJcB6ti54Rj1wTWAfABDv4HgnnfKYZR33z9EYPm",
  "key1": "HLqTUCRe97kHn3yWLchZGzwndqUVQ34cxrw9eMMLYfhPgkXbX5RgXmsJ5Hs8QxcTETvwDA1bzV4oZDs8gV5LoxA",
  "key2": "4nC1RVqZCZEubLSkqGxTZGFf5DQb9eKfCibn3htqBnVCut73dnYZ3GUA2zKY1nW8GeJCkDgSihwGkh3H3ykVA9W4",
  "key3": "2uyBup3n5CLMz7uc5HQqA2iGruUv9gE27HY1RKmwBG2zXchiQs1gnBtMQTPWVcF6EJJL3Miv5RykqdWpbnSSFrSE",
  "key4": "22TTNoPF5wDzgYfsd9DaKNidcbP7Xdhgaeve1WADg41CXZt4jRmni5gTLcA2bgniWTtdx7VpaimQX81Magk3xU7Y",
  "key5": "3dA2jJ6K7q9jZJg7ogTrunnJ7xoT7vJdbzzT8T4HF4kqL2jF8BnY2WqbYv9oFjiuNMaWC5GnSf3P33JyB53kVyEB",
  "key6": "vfmhmMcTtXr5Y1fAHif6KA2Pqe9Guae9obP18UKAAK7pdwd6t7UMPCwoiUGx2m3BuaXgwUk7RHzhzunspjmphFD",
  "key7": "432C9bJEnwHiXqAg37Ntc7MtCiFhFGZCv4ekYEAvT77a949F9UjptbHNgwPLJqQtqYRaELhrVikPQKg6rBMadfec",
  "key8": "5FNscgSgtu8CAZSvdRwEk5kFHwGoAZZuoXwUkjMFGfVw6kmzdSLXcmicBpSzQj63mnt7J45UKAr5F6iyAyTPthFM",
  "key9": "4RwU3zQzx9wEYyxwcnqzw3gx3z5BaMritPPrTxMLG3Q3SaQvtTd4cdZ2P9aYc8SYgvwDbhNJDev263oSx68zEtWi",
  "key10": "46byUtNUX24ZPC3ERtUhWHgRjc5bLkTz3dCJJFXyRAJn6QZ64mr67NeTnyCoKZEgURTmTd7AgdELssPTuJaTRg4o",
  "key11": "3FpjP9k7E7WUzU9uexWFmP9ry4ebeqjkxLwPBSyf5Fzhbjk25jK2LVescc6a5wCefccK7iDZTKu5MGnNz3VrDqBC",
  "key12": "26Vvdx7NQVBEaJmg6GNqHYhVTqWESVsxyHLn4nwddyvYqrN5cuj1TZKQYVERhSXbqZFLZUK4doJJkRweW6yNRAmg",
  "key13": "3jpwFuq8w8VqK5UiHWnq8rkJ9dy1EFkwqbxrfHPYiWnKLJZhEF2tkNmasf1RXiBTM6e4mkr4gwC41wPzMCxiLPAe",
  "key14": "yDTqtcL36V2nwB3XQv5UW1Wfqo6CoCMbRNXp5oQV6VFnM31F1tzXYbhBRzm4CVaUdFnE9ZyizVWdsCxvqMo3EYi",
  "key15": "3bN4pMmRLshW7g8Eivv45PtvZzypKPrtd5uQPBWcMn1uUQMw5HzESQ4N9WjrYNcZqhgJdBJmXys7DNsG6WAQbXna",
  "key16": "xj5edPDTySwhxWupP1NhEnrVt25CjKAL5UwapAZx7EN9FKEFuAsMjs5tjnzHGL2SuTpWZMX3KeZbpMTxkdnM3gf",
  "key17": "vPutgpHUAscuv5KYMmMUvgseRdy9dv4R8f7T65AxLME8NgJLuLJV6FF6ygpVYgWnucAcNVSsuqtEuoCAfrHyYS2",
  "key18": "2CV3SFCbPyg8Vsx4UERVPjQ9erckJFViwQFRRdeKMi2a4vuLBHyLQ5gSWmM1pYc2fJpuLfScpPAk6xuMDBy695FU",
  "key19": "2QkRCwATjVzxTZgetMgUSV83ASTyK2CwqWpZ5ZU6sEsqYyRS7GwtETrLVzZ3qjNhdrKjBKUGocFQrr2fi1BZGGaB",
  "key20": "41zoa2vjPnUCT76T9Ls4pvLQC1j7XCr7LAbBEhB3sJoTv1YrSCHUiyjXCviCvvQoHtsSei9EMAjZE5AabMGSa8Zi",
  "key21": "5yFaPyfmjb6EATJjkJwLHXfoLvnBH1QZSNptUFtGzKq6FqbRoVuZiuc8Z3HfRcnPoXFyoVMX3phGAaaRMpDJFSXh",
  "key22": "3tKQJ2W6cSiuMZJKpNffsRFn9bhqZVA4Vxkx6TYTaz9KivcDLC75BES9e8tYAW2xwqTSg5N8fymXSwo263XETkGJ",
  "key23": "3eW7ToVfcALLvJb1j4WAUmbnfZePbWT1dfWzry8qbh8QAPA9oMTBoUAQHRJ86Jofaqi82ruHLuzvV1wH8r5Z7x5c",
  "key24": "5Ah3RPHiYWwjWwoiPWV8Nat4KbFFWwbRG1i7xRnhB8dSpYpv7KnVd4rc4NidVdYnakVUQTYWzc5BRuiNbtpMFULk",
  "key25": "5Rf1fvXu8fBJGiFEJRWZAgovkvJZhGiYvmdf29qk5hpPfqk7v1E8Wes29toRVBH2ZSbyPPbebTHCyxb2SStq3CnQ",
  "key26": "4eYtioU6pPogwX9wEEWUvVGgBAyYWdsmGi8rkRtsiRLmAwGGzbYBquojaHQwmBoM8QpFbM6aLtYeMEgMCE1td6Gt",
  "key27": "YCqgQfxHxTWKEvU96mtJfbQCWiD77mXAiPp3SZFwaZfm7NfaV8qqyYEgKKniv1Nz9N9SH2XDJfaEPs8zwKZRP9o",
  "key28": "DB4eUeaTkUq3wNoVKV3TPvFCHpRKnq5sqLwLUKTVvdBmbvN6J9uWhfS43HbUNqd9TMKQJhVHdHoxZdQygvfNKHW",
  "key29": "4MEq1jHpLBaJ2Gq6rbMFKWKQ1a3rWwAZdES4UdK6AwDA5vu3pfCknBE3MAyopCSa8vWMGEH85toc5RA6wwzh7hoQ",
  "key30": "2S7w4ErNjHrvxbT8ZBjiCmMyPLCgzLULPcGHdGhTtoP9LrjihVb16utERGZVfnLp3J27XNiXxXPdAMpGMZbJsDmd",
  "key31": "2hh6BkFc2fAQtrEwYjdmVAeLGugJpb8VHCd7gx1ZTSFuHZfac1pvVAwAqk7udPZ5woN3zWGA4B9ihJR6QtigTZsN",
  "key32": "2utYXLobMULiyiMvu3iGjtVwEfNUcBj8vwHccFzXXqg4Ut8hhcRe8HStEdvvEEFMZinW2NeKCbEQ4RCyPHiFhYBe"
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
