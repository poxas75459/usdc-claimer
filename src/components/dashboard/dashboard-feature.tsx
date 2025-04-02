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
    "2RWXpZfiCqM5quW3MUyh4JBgnsvgP8tVnGDVhVYsAf6ZHu9avkoKpYTkeaXzvL6vSHC7wupHeMSJVFnzPgQTbSXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S3wRZConMGMHCAVhaWrLqfyoMjaKjcdyKYthrN3mRyZiDgLLjeeyJvw79kaHgBZ4C9o8v9xm9DgsgC1kZMTtWrw",
  "key1": "5oFvugcaj4DsR9mexAWfmHCsjuRY4i6jLrU1PnqATid3tfi77mudQsdbwMpPGpGsdbEeg3Nhtd9DNAbzUdUbgaE1",
  "key2": "3hPmCBoSfp4Kuhw7uPbGdbbUUehgp4sXkFojnouWNgUE76sAFDQJq5a19WWj8Ro7WxL4Kc3ZDr1SzLWm5CEHQbB5",
  "key3": "3UxiDr5353XDLoaXWxgenBsB9ZzEckPSvCsTJf1cG8kMC3r6YmHGFh5hvvi5x9NYHiSFVvPdGhKACkoJWkrsuLvJ",
  "key4": "2kxfqAHf1PKamV1HKC8C9SCYJeBgmTRZDYSmWLxTkifocQh676iRR8kVxuEX3n1uiGx1ECH35t6jaBuRFz4ttc8b",
  "key5": "2pV2Sds5XGWFMxp5dwUXh4ZiJg8c9uq8Fcr3jcFkrhC2p8fCpNCFUSnpztkUEC8Hz86z68sgukHGPgugiKNooNmj",
  "key6": "3h4ypDVpEUaKvwpNG65gfUJ3bDpZfqdJqMup2QUyCeiSNCX4kPTJwvp6n5t6XQ75G2yfwZMwHcNbrYPgvkhF4qFH",
  "key7": "44TyfPA36Qn3XbHkkmRLXvc2QZt8m9DHoWPMcm2gGNAxNKABSCNuRXiumTsaRH8Mc4wSESwZ6Am7fg1zFyNGNEJP",
  "key8": "126XwxNLJVgXQmeDoGmeMtLbNW7EVrZ6Ze8JMpRZwcg6ahct7diXw3R1LhBtEznxJnDsR6emAXobfNDydbPzsfac",
  "key9": "3XwfnBQd3T9s6LzvP9vGb393XAPC74tSwbUTSQ9RmyxYZ7UyfjNqq9qjwUyjN5XHzYiHYhdJaisdRYmbG4YpJgLD",
  "key10": "DyfDx88m2unhVgrqxDihoUzp1hpyUmAfibBgWs17ARJbmb8aqNwXhPrpDErzjH1YkqpTgpN4Ajp2X1X9MYZNDnJ",
  "key11": "5m3H6XHw57C9MzWZr7B33ZYbhTFuE8C3iZKh3i8639ibdzCGrdwhxGATbLwsiyyDR1q376kXBGyStyKV69yAuiq2",
  "key12": "5JWrfvqCSM3DeQpobkAfaiZ18fugVtE3QuGrRTYE2f4goqnzJFb2SGdSjQ1b5u34FLyLXKbPX9tndayQMjcTBU5U",
  "key13": "21AsKwh1bHpd7KdikmyLRjVSmnEDb2nTUzeRfQwSADaZiHB1RmWbUVMCDdkdfS2STbdwXtE8mHcKGsqSsVZN8SLC",
  "key14": "595j8U2en8UZtRpw7nHvFZ8TDHnqJSSHmgMo5bzHSorDGfJydG9cZu4K4YT7Sfajd9c37Z5E6VAQ9k542ec8stNw",
  "key15": "666UasRByz63Fzn7GqN4jAJAjiSeXYZNZpqgTNUugNKn2BkXH6Z94Q6Kbp4hdneVWrxMdq5rVexrtAfJMb2uBCUx",
  "key16": "7cxn2PNYNtHxE2gAmRpvKmNe5QVy1bUukgKafxGit6DD6mKuJKiyb9Up7qpe8Ci8BZQ6nVsWuxHqFY5EwTFKnBd",
  "key17": "bMu1WggtDkys57ZcDzNWDEHTJyVhNsVxVtjZpVrpx8Eoq3Xk12nrJJe8pLPgygDsQe54FNKNdpfYUrTpeXM74Kz",
  "key18": "5Uw6CAgTNbvRFGzprwBd4pdq2HFXuKJnaGfLkmKE48yJXJ6XZ7s6YjsLXrR59Zhu4t5eUXzm351S74ifuzxcDZGu",
  "key19": "3Tjh6pPCJm1r8mp4MCijqjVdzRzX5kUXnpo52hScERLbzNYjcKoFiw1vY4daLfpRtNGdxKXg37dc4Nm7TG3Yqo3R",
  "key20": "378gJHj7vov2jKSTe7C9bPcUP9v1WX888GepifBro85abXijVB8nbnXF4QG9dPi2QjceicEx8kXkWPJWK7dxAU6w",
  "key21": "3bv6NMcpAkoJYfMDJFzkSxJioRpFDKTWsFWE8Af9W8fgeQiyczvNbrCW2f626oLALuSUDhAXnJaRe9PZGL5XnkJ9",
  "key22": "5q5CD8YKXrQKbXj4wWw95BZXEaFdavZtEzF7A8J8g26vz32QwJ2SfoaU8pxuEbBLbYwg5w6MXgaCxpLVwyWfw9fE",
  "key23": "5KKwfjcRTwdZZ7qg6H8wqva4V9HJkovq9882TJqsSr3EP5viynucgQSGfHVJESnALgYs3DzACSxncsHH4UXM23HK",
  "key24": "2Z6XprUMS41gduGhppZ774N6umwxf74cM2ufqocS4LLbcwqKqHVsUpEDhcgCpnZm69KjiMpnfzYgGdK2ofqMtEDN",
  "key25": "3vUvrW1iAa1L2qR2mC1TKZcM7uXUomf3GY75AU9uZntdaFXGSyXH8MG6dsX5ivKrwKMgUstHuwbefSnJpvzDwdf1",
  "key26": "663G6jDmKZvSuX8PYJTdzMu8VYMAqXJSNJ1yxQrUzuAJ6zYPynuBG4hxF3AYGwThP3T3ayyP7JVB2kmNuyqUKhTX",
  "key27": "5u5eJBnXuWb91KKTPb5VafYGWiLDu7re26t9GaLGnEGzXXbTSv5zQ5TSeKARZgk6RrafsadNBboCwwFijrix4pT",
  "key28": "4CPtukvuxd4JJR15uygy2qZA2VJfauwDpZcNVifSRpBoN6nwNcS61tGQowKqxqj8x7qzP43NxAq2qiy3RSzhnr1A",
  "key29": "3o46pTtGJYDXKaG6RboFvT1s1eMcqKiehjHSCioFqadMRkVn42ApxDEFUTZqNPEgmX6PLCCjAegnaLGHuVM8oHxr",
  "key30": "38jyxXyDRkResV3mEbDwp23dBCJyFEVHitj3oVf2w71PuMswHuqfuMRJPNGcZuGmq4egm2CFtTrDPFWQXEAtmA7G",
  "key31": "5sqevTdgzCTGY5tguJqZCU12oo8aDvJdGYzREarTZ5VpEvzp9SQfgfBMYhC1JZkUk7PtznmDAKS7zuXkx1aQFTsv"
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
