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
    "2G5W1KcQPfuSsks15FSoNWkjkhSy3j3efvZSZhTe18GurVxujLr1N1H5nWJqGAmbNEhFWEcj9ZuDnRiR7HuyspRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sBpbvLBJKyhqBpJkxb6fKUh8Fav9hc93Nd1ss9Sf1okaTx4Jm3oMFQ6Uf9GutZxrW9nioaeDeQShftXVg6dWJHc",
  "key1": "5neR1qgaBBapXPDzBxGsitxgfcadffQZNKmdAzpSzpuBLNjFttssBffPPxYqiEQhheKbcyGK8bMRg2sGP5x3ni9k",
  "key2": "TuuFNzx8F36FhfaBGnPe5Nkcf58EfB7HThqa4qQJSECLfBnhgdbevEFnfDdr1Cu4gr6Fbo7hx2Cxy2bEEKz4Wyn",
  "key3": "3PhpVibbpsWnuoGJiiJnk8MDEQH44WXPb8pFHqK6KihAbQter8zXsgfHuBubywqFuajgiL8AjGfRJxwXvVVgrBUg",
  "key4": "53aGorWsUugpkogCoaFAAdejYqNHn8mQ4RNokUc1gDzkva8EA3JL26sG5PotT5JXqb2FkNQKgKZAXst3K7Un1hPX",
  "key5": "4cgCCQyaSUtYaePjhQFDy4Q5cx9uSE3TjfvtAgbiKRMWmFChR1VvXg6TouhvCAE6zfGw8BwHy2rmCWkTFECh8AeV",
  "key6": "2Z3kW4CAKcqKrx4Fob8PzVRfinSuzfBc6Rvam2HVkUSKpvJKuUA8eJdAESxtioFJtFS3HV4pEeg5EK7vp5Mr4Xuj",
  "key7": "3grLYLdHaagfwja8o7ZN9HYUPENNYgT59LpfpBYMDxSTcqFLxZBjNrbThF1NKxpvvNfbFxYKHnQKEyUmgv7bWQPm",
  "key8": "27tgRVMmfgEk3qCL3XiCt7rR9HaA6sgKunEDaZEBzY5esa49B1hpg99VtExXRmPEBVaDYhYkVJxkARXMZynxWJtX",
  "key9": "s5XJvSvEdTEiLvze3PHBZssSYJqeZGxYneSs21D1S6nNTpJ8MMjXUb3wxvTA74JneqyeEmqa3EjuCbywFgNSqgB",
  "key10": "41t57bxoFDwyVyUtDENuxzDAuYaYgh38ncpcVC3WBPDFqEhqZbvyvstNnn9AeaExMNB9n9ftNrTuvi7fZb7Wmht6",
  "key11": "2yDPymHhB3cMvmybjYytdM3q3AnwEUyjVHHLT6ERBHaQLR7xQNnXG8QCqZsczwTvUzsPpTQDwLSZeWLWsYoHYase",
  "key12": "3GtpHfXMDcC8Hjns68pwBgSLGvMvJDaPW8EUVgDr5ZLR83tgR2zYy2HNTExGsqusinJMu24aRaUBXLpbXKneAn82",
  "key13": "5X821uPtoTemtwfpkPJiLovBnQaYcC6fmu9u4zbNtd4WEaBcpwhBygjWhsEjxv7voYZprVwSh7X4YNGgAuEiTYMB",
  "key14": "D3n2U1WsBCoTpzEodwRtij1rzv4va5thWctH4UYKH5eQMCBjysqmp2W7N8nMQ6mjYRRN3f3r6tXcjxPSo6sHpBo",
  "key15": "2RbMxEJGDDg4wW1a9ZuLfEAqdkbprg9c8KjgnTdsQLb9NQJ6Utaspd2zYwqiGjsNGmWS6jgRpR99HyzAAQgGtCKW",
  "key16": "2VeNWAgjeaYxcDiLKthgGwJ6pk8XLY9GkoVj2BjDbgcK48MM89XUVp6ZYczsDZwTLxwFiCtHqQk6iWZbaTDJUkzt",
  "key17": "22uo29RCqquHrW15AUBYsa41Mu7te9ULtLBb3jnjfVXhP7F22UgLpwLzTjEApyQcMGFBD3ndSzL4nfmZ66Fhrjd9",
  "key18": "5Y2Gd2q6LAxYfPcdTGYHJC62zTuNKSDpQFyq462zEZZiveNAcmiAtxKABGDRf9KB2Sw5U845nErJGsSfsj6dd9A7",
  "key19": "4aU1LH8e4xMcpyUZDa2NaCe1QVYuonUMA8uKWjvGhDULrGvq12pQXzUDhSHYQEZXLxsJtwThGh4rczpJJbEQ58HE",
  "key20": "64We4LrLxVeRW7uaLFxGMUeJL6eXqPtsygPneN1gHmHDr5Rg1tdQc3Y9MUufy6ecw3cs9ikpt2LYvBZcBbWCa5Vn",
  "key21": "hVyvP5jVRJExiknih57HpLq6cYycoX6arEv3jEeNxKyExu7m6fYbgWdbVyWdJxGCD5QvP7HUSqJJP6khSmSuAL7",
  "key22": "2MFZLGw5ofAtpdaAQwiBwdnMgYLYMiWe781iEdfEAbMCYbU6vpFptkpMDkN2AAQUSNcbx63beUnK8AVkieCLxT1d",
  "key23": "33ZKG1vrYJAYRb38wfmcNvLn5pFNJXBu4Ska3AzdvHUbyx38bDLkJJmuYBjSRZMnWeCgHpkjTKkTt4PBpBEbepNe",
  "key24": "4xBumrdwkJhuBSLStSrHibbnuaSC4b3M8gENMBimYPrhUSnfXo5fgWuNY6aT6fdiRofgfirNjBRrfGM35SBDtqr2",
  "key25": "2dYZiEo5w9EXTJRAWo2ooEug2yhDHymeYMRaPRT31kab6H5BDJ4tGHb6CExGzWQCNSRZinvnCYFwuauMn4UB8kuj",
  "key26": "23uw3oZ73JSwLBLHqQXYt8t7o52UheBXtE8LQw3pBVJ3U6EekSR7CNGn8VYSdTGth95fLuJswZZzWP4drrLUoUY6",
  "key27": "2515pkjKqCSS87qWq6pNfm4ab6QkDwnM9bQGu5nYTP8VaLjbHHm38AZk47L6fC5QNyBEASuxKuvg7UN8j1q63fKz",
  "key28": "3esfVGFT1u6P2vvUtdgDrxjZVK1ZLBj5HuU348YNbpzL1dAMxrXbpoUsVouxZFjwpNFjeMjXJGNktYZtkLVMGXQg",
  "key29": "3X3Xag3b8gNAYiMFyQbaS4Ch1YucedXqsW9GsXT6ojwEK5d1rsC2tBrmVU9LYzicqmSHdTCTgC6zRCtXFyKMLNrq",
  "key30": "3mJC37wbjYmaaQbtcKJpate6iLHGLgAoZgsig1r5uXAps6KbqnarL4z9uJspSaqYnsBmYCVjk9DKtLxHHv3BnoDk",
  "key31": "p3E27pBic6CxAcYuvu5d6s9ohgK24T6azZf1616EeXDYE4WMPTY6L8eB4dp6aCXbb6T1F8tJfYwvu5CkSfu44Rb",
  "key32": "2SrEHRt6sE926uf2en8RExUnpNEnMHWdzr1HfpdnoJjHdimcEQ7FtyYCQBGzLRZiYUgBMkzwGJKckmNZWYXFxabA"
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
