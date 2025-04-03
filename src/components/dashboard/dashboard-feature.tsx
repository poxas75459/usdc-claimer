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
    "5WXQomKNeKqUK2NBXtErx2MAm9H9Fx4YWFvWUBsbYfJYEsYShnXPK1qtpsNzEo65qbEfk74buRLJrXX7NLZcAHxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bCqsAwmConwALMrJgLuR3u51s1H47BJze8KT7z8TZjHzMa9SXA7ggNqosDDQuRk1TvTvUHvqUCmo4UG2LW9RMWv",
  "key1": "2hw4UtY52Ug6SUunrYREm2au5jfF1mkpEja6YQa214yjJXDfbh3a8ZvaGsuggzWvQXFcvXNzu6wDQQq1sJuCKuZN",
  "key2": "3wE7VCC2sRk9gYn8FuaotAHjutfFg3d5W7cU4N1tSQJrj73gTS5KdDXWbxMHhrazpUkzq2jk6XnThzyfFmY3T2hq",
  "key3": "3uG69K7KEjLWhp8f7kEf3qkFNDmAUrrmfJD9ykceZTxiMGAeTEz6bNrr1fWFLoSQZ6K6aYr7rJSJthUKMohnE2fG",
  "key4": "5sznPLQzS7AgXcHD1PhtNuKJnEn5sKTJGNUdc6ppLDaGQY8pYXcbFwx5kUaYt1zNFpmyEcdhKvqGMeXnWw7hKVpp",
  "key5": "5LVaBcHGJsJT3fumW2BacyDjSYsUDzjjFdtD7okxVMkxTUZdLadDUwc6BWLzn2CDNi1djwt55R2fyKeJNVGV7Ck2",
  "key6": "3s7ERZq5uaDtsZMtNZEdS5MNjCEmVsUsZz6MLkLKg8rGBDSAaNsP5fjiAhY7aWnAwhMdiFkkGktXbgYd4u69u4pr",
  "key7": "vAV92mBxUvs1DkAvkeLcxcmAMkvYoSVhftNQXgctyEiQGFGK3SGwi4w4eRASJQMdy46VwYT2tTLk9oQD5JGBm94",
  "key8": "2TZueFraoCZRGXorhnT2HwSHqmiGGgsSYNz1vgSLrQh3eCbcvdpnN3VQfT1ixdjjmR6S8ZU1gJJ8X9VWd5VxfeK7",
  "key9": "CCzvgXZQcwLvmdfbwW4QgRpRpcHHkSNXXMR21D8rfqzZiZDuehRo8dC79gBqHqKwC7w5HD4hvRiYS2GsDdHtvvL",
  "key10": "2PR35tnYmUACyYGpyC5zHAFB1QUdot3UYcCP5FVnURkUscKAKQqFP2du9EY64k1BM2Q3nQdXACzMmn1HXBwN59qM",
  "key11": "4QBrthgmTsqVKVbvJgSgNtytTsYwkHaAzUH1xShPiEBihHXDwS6rHLoWCyAmH1TQYxvMnJ7e5tZoFJfxfvyFkXgf",
  "key12": "4TeTJrUNwhzmSEJTDAkwnRjRKqrMUThaeB8t92uSdm7DJQJFN3EpcnF97snwbCXqixwwYGwymh1Pjkqyeeheq6bK",
  "key13": "3uSiuZd5FxhzLEY35ycjQhCctxoqJkvddxjkYTkdi5xGy4P1n3Brn2BKNWafkbmTjGVCc2LaW5M7yu4dguJp5VCB",
  "key14": "5sTo8ZYcdXLSceHfUyVGtSMLbKHqymxjheDiMgPesY9JfvBZbmwZMnQhsjWFtMDX6iELmGX8UEyG1S1kwS4fJyQj",
  "key15": "2fN47urWAzQb3WS2dci2K9TWBRetusESqVNbPwrL1w1nfprFxLwft5kRUf3VkYTxTjEvKXo2hAqo79SHCppHdYqy",
  "key16": "5Rkq1nGpvGDq9CMyEsA3zvJoxFSJ2kBXu2xDNTS7e7ZgRxYwHxAfLSChDubCZCzzi28XkudMALKoDfZ3KPK5d7Mu",
  "key17": "3RBPKQpvzQjPChzhpc7xB1q2yhWpVpinH18odrGDPuShjfNXh6jQhFeRUVfP47QnftQyNfL2hxkmcHR7JRyeDwbr",
  "key18": "4NPuZC4qdU87DEBL65X7uhfU5SuUkiwP4EnTPSSMMKxa7o4m3K7oQvEK1LNmhrdCvvnSpr5zqXxpGxNNPfNh4cE1",
  "key19": "2VhsNdzacfkoV2LZwqSuFyQ97nYERwfAgbNfGG8yFpdTSRA3JKGnD3uTWjAT82bPJjJT8DYJx9JJ5kbzMSc28adW",
  "key20": "36ZWsZcTCr3Ed3PE9XpoLDVSdfP7nCJMmz12A3amZGWcPga366Qg3LwCTmohXfvskCe65rU3YjEsmCqAhcbJaiJG",
  "key21": "nERVChesC7pXF6XJCQVGqiBrHhFBPEuSRoHBcC26tz5xNZhB21V1T33dHc45hiv2FNj4z8MTy1GfCdBSxfrBWDs",
  "key22": "2bpsbLycwqtzCUtPLiZc11pauBhCbEYMmXrBuszfVeCF9wR59H53MCXFmykMiLYPyzwpFuBGrFzjbBExbpLM1m9G",
  "key23": "5TmLU89HUaJNB2z3HoLaem6LscHcBS1aDqcszVQ9omCnEA1aFNP2276RaRQsuJyoGr8MUVoqAiGAgeKkN3jE9jEq",
  "key24": "uXiZuro855cHbxc87XYycg2sPyoWEQJQuZFHmFZRpkjhbV3MLUfKqn2tGPRoBv81wTfLsyudVae8f5rBckXDhQU",
  "key25": "31LAHjzA5KG72AXyj7GMXkNddjk7YXrfVn5rJe9FQkhwdYQrKUrLdvCw2R3CRNpFkruuoXKJhn4REXvDPj3ZRQFi",
  "key26": "48SzizRmJyF7nQZ5xcUsrAKM4nipe5LeojMyPYBfEvm2GAU84A3UtjqtcTs9JBvf2mNLw6PJKGK9Fy7Es2FGDcKx"
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
