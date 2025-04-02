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
    "3o9JuPbz6uDhSmD3sZHUpGixbToGjEnFxGBLXiiKw9DRtKUjgBoEyUvR6BXUdUkTuTrsDmkHuVawbj5wtu3ZYYqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cL5csT2fRmwGLTCQ53c3SxM77AwnU6iHFiJsH3iVnooKMqUR4sqJffyQkJFuLXsjJugeB7yiZv7FtVqdj6WoXur",
  "key1": "2aQg7qkDqbmfA5UAnVV9s4kGecuazwYNfFiyrw3fpyG7PSAD4Wtx7nPvH1DvAYSHcWgrrGnfxjRLFHATKwN1pf54",
  "key2": "3yG6skCWxJd3kUNd427EgsAoPkCsm77wJDfnSVUzEnbfDHfgyFS6FutrXCWJa4JjM8gfgEc1EtWj4U1z79MuiFxM",
  "key3": "2pE8f1uRfBJ9rzmSHwx8cqgXGNRRGc8kuykYS41vAG4qyewC1YSKHXrpwYVyPtVVBjaapuDvihockMghpmyE4zSe",
  "key4": "55d1spgB3hkv35xP51878Gd9kyuQtWMWb6bM1AqcUBkXfC4uHEYGYCwcWDLWvBwyQBDar7hmcfhm3172BkJyXpgG",
  "key5": "5HEdzaWfaiYAfjhsb4A4cjGNJVPU8qavxoDesUZwFRUTDscUVfF3VjfQ6LgkRzttMtVTLiLbsAeCk6vucSzPkMis",
  "key6": "5Dn4VKBnbdFDrNqyTRgST2bQ3ExyCYRWW9ExNFhb11FbyN9YWHA9ugWqBkuDqnehgKy4BtihC34hRyAnzpxYGNoN",
  "key7": "5opn5mrxfXNsYejqbyEhMrxK3Yzb6K767rZyNionembuQHAFodWzNJnSp6NdV2co5jc64BJekxkNUmo9KUeEhXJy",
  "key8": "4H9bZJeoGuAnMqRCozXd3dFZCM2PBE2xpw2akHDcTbeHAUASvbioyn72rwp1AghjJfd3n1rRuSctEqLtUdkmU4GH",
  "key9": "5f8VKEdsp6SckqFtbXBt56TH52f9ce7X9dMcEmNGLTK5a6JpmRbWj8X8zo5bbAiLaxWomk5fY466tzyjU9N3bvAk",
  "key10": "SMyzryTWXb8D2CkBjonAfLyeUCzDGdCe7B7ZHP7mWzRuWg7QfsLNMDU8RQk2oF4JkW3QGFn7QgptzsLa8aPyEED",
  "key11": "53BuxWpJtT8rXZXa6hHtgyZcJSX6pXoyJyQzzfqPazxAwMH8u2ACEX7LBxL7vWm9pDT4HiQK5eZkkCcPxasKVbZh",
  "key12": "4devqEV4nRJJcP2xK1zyJr73tTJkhSn9GH4S1f4aQzGjoJwy3UFxuT98tSycjNYKMFcopeEHDVkqxFgynXTDXeG",
  "key13": "XRePMhkKJGtvbGa4e2BYKDNeMPy8iHi6YDuRcsvwSbmPQh8J4fVttVeYE9VTqamW4C9bwappgUrey9Ssv3dqtHq",
  "key14": "26tepNKVDmRziw7SFvcmJcY6hHcAFC1kri6G7zuabqduyddMyQXbndRLZoFnFJPxmtCthbriqvhmHPwVdBixeBgV",
  "key15": "2E6dsXPjMNY3mUv6DW97cKxRc5g1LXgtQewazyEpGggG9Un317YyQfukCiNvmBLkVSxaeVjj34ADgZnmLrPAu7qH",
  "key16": "3a15ruqVJ5VGCUDoWup3w7HFwiDH4dvsvweEAjKnFK2VKrUJ3pQQJ2aN9gxbpQcybAPnC2ASZPN6q1Z2m5Z8hWnB",
  "key17": "4u5MczFfwM1Jbek2J4WsjDDXysT1n7V91PGiCHjK9YaeJHBVmVVKQjnamsHTRQVftRmCmVF6ynQJobdParjqWPvE",
  "key18": "3GMJm5JdS8Wv6ZrKmKhRBM8AHaDoLftqDB52EdxMwy34bgGXF9LNbnSMu28XHqewihYtkMxMHkH335mT5xMZ1Fxw",
  "key19": "2eWsMz8V3rA2zu8yF7Nz45auLH1bYru2sBURnetWceeLuSrG6LrRce3X3o1zkuDEo8D6VNadSdPHgVqTkdmkv4cq",
  "key20": "4bfmjSLk7t64AeWaRuUoSHt8uDm16kkvnmNwYo16eToEFQvnAEEP6tpSsxXzXhUPA7W7YKqy3Gw2EW9p7pFsZkR9",
  "key21": "MqjpZF7RZh4zsNF6uUbiNvjBfShYyMAxyg8Cf8BasWD26TPGZxoyYpcyKWpiYcgdfvVDXCJe4bZaH72q8YvKj3p",
  "key22": "5fobyw6t6uzvQZ7bbF6vK9bYc7XEVCSbrfoUbooxDi8Vb5Ubzxxiqj8qFPaD7HUYeAg3FSGKnfJ81UZ4xRRRmPY8",
  "key23": "3KDAWD9dEFPyY19xFhtkL1YyxX4Fp7LdRpaxnkwXDXcu8VjiTcbjttPjEZ8HnauPL9F6thjKTBJ7JvCxBinYyNrH",
  "key24": "5vs3NDkqsbm4xWBUeiqGVGZ3ZC5KVfpToTTXmTRLTHKiyEHgcWLAMvo9gh7wg9ago9ZiP1z8LNrJGA6RhmBbaLaW",
  "key25": "C2PgiFzm1pikFNB51GFBJUNUvbUi5jxiKW4aW872B68mW1Hxw3oCJHt9Men3J1k7jQF94k7SNbB7J9CTBdJsqbD",
  "key26": "5dAGmEQpxfzhMJT5s1LLfvtS3xgREWt6KwRe9sRiVNnQyrHFZL8cMWtdgo5RUVQwvK6pkdjjPNndDAVkrnKku6mM",
  "key27": "UtyrhTX6gSwYMVc1orbJEQA4HrgeaSn7eVKPmFUQR7WCcbo7VuCzqr4aamdjgGuaP7yAZJsa2owKBjuy6wjKNco",
  "key28": "2SP7jshSuKstDDUvti8kADnGnqLvTjYLc56pu1tzJo5cMZDfZphh6EPo5sG9VDPua5HgcmXLPaa1KPbyC1wgB2aE",
  "key29": "4PCumKn3Uf4qVtQFWdLP5SovrptjxMf1hTV6PE7D7WfBehW7SF3P1A8y5q6cWkzS3b5bYpAjdDz3QFds1VGeYVof",
  "key30": "4o58hd3eJz969R12vqekH8TR5TLRnwEmg6oC2AEQGr4e4RDrejADBCqQHxNzFe3aupWUSxvAb3VQtDH8Vp49kv7R",
  "key31": "5qgtkcfUqYdmEjKee5ewUN9cuZBmB87qqybnRgaUiDHuJM1bYLoReUUbPi2FzhVJCqU4hyyNT3uJfdtpBUXc2f2h",
  "key32": "4NRkofQesvUwrUsuBtbY1XQmqjrgARZwM7yxkWFr33CmdGc9o3Nmuak1qWu36YMtCwzH7Xmc5UGQQmxNg1LT7YZU",
  "key33": "XnkwcGnbHmBt8Y3nErDbPQbSV5qHQmZE7dpnyptspvca3L8WouQ8v1M7JGvhJXDJfKJcdU9f1yHTRHuFxfsker2",
  "key34": "3wMxaFXyhpLf2ZttzzB5z2LKyzckV2gsqPVJBgGSBTFZuGJEcFJaQJEYetEEvpTLyaLjgWnHRo1iRAmAeeypXeS6",
  "key35": "2tYuX7zRhwPYQnVRqekkjhqJWTcEvkJuDyP9dLaXsdXxsMqmrnB6xV9deN1kWnx87oT1Sa4McBNqk7A4msG9i3Zz",
  "key36": "5sSABBG1jYNXPfNVZgsXtkwjbYE8TzAPDknCMCu3wWaPF1rH53cqK6JP7hH2uyP4QjonoG4XMjyYBEca1mgX5tMW",
  "key37": "2Bhy16pqBqR3NoV9W8i597Jm12aBmuhCJXiBJKNCkW14tcEr3d2tgHj8iCZEzVSXTinhPrmUxhH4F5D2LxcLtSHz"
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
