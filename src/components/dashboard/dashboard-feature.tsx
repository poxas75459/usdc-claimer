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
    "3bGRUYaAx2rt2rKeYLNcp34sTnvE2wEidC4GbUrDi48hqjafQemTpcSctuCsLQGkh78VWKQtWfug2fn1DCRpHYaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g9hpew5sNrCEtvQrQUD1KLSHU7HJe9GttPFb8LwaasbF7h3HSm9PVmNLdM9Ma51uJQ3uDXTG3ZL1ZyQigpaYRbp",
  "key1": "5fMGaBsuNupA9sd2k1mENwVkBGiHnhpttoWp6gRebyYR6rDRXJaMsqT4fbcwerNUM4oc3fWvmm6WptQhK7AEeae7",
  "key2": "zycVCryNQ4JSSfiUQmFvsj4upRa85yqTQFix29wYEcXg2WvNiXV3u4MCzfo4jRJAnrwQTwvgR3VCcPTjnjWdc2s",
  "key3": "1icuzXKtk3cyVTouzJ5rYsA1nPbyGHbqkTXtLW27wQjKNaQRZrdpp3TMj9nYc2pVgMcsYusbV8e82Ng5CNjzNvz",
  "key4": "3QDGVksrNZHkWWoaBV29umgL1w2BhZi5UNbtzcef6iTgg94tW3qprHpqE5zadJ32abZNyVua5sZR8ebko2XkehRZ",
  "key5": "4DjbvUE5S5eUvvyzwKnCzH21G3f7M5zMt4YRz1C3aj4NfHNPsMvkySTqgHcYbXoD7JfyFdqjM8fbMfnzUEHS5rmF",
  "key6": "3ipDoz6GWSwNmRhMCKXb5GjkajpXtxLeZBkZoHnMpAf1HAvjP4Z7MX9uD4hdxF6mjxyeaiduc498FxyeEb29Cjmt",
  "key7": "3Atc3jiYdH66kn27DCQPDUAcRUaWZzTiGdy2Dzq1m31MVdf1ohaTb57W83PMBeMzuycPLWX51puJNfkpGPS2BUBR",
  "key8": "37DPy9SM2aPzpZoEuxDGUin2Mhtgczyvf7iNiLxETaS2ZpWMXiGobXWMy5asgC1ayAwSJtAigQ8GmLnmLTNsQsLh",
  "key9": "64M6kXvPEr9ttrRkre3njetw1YfbrgMhJDR5KbuZg1WYUmt7Zei68trycqxTK4TkToLgTWS21XDLNmZbZVHX3Bu6",
  "key10": "2ygwxjtcJbm3u3z7rXNh23qy3HfwKwMEPi5ZQ4rrpt35JQoAzPNfrHc1Koe7Go61BzXqfTzkjuCLg1YZ7NDr6SFF",
  "key11": "464Db7teejtQB5bUcY8rSRP6gbdDwjkBZ5TXGA9o2hQbB5L6gxJH9mftyD49c3AfEspEnF3Zuvj6QcQwUJZ7bAJi",
  "key12": "56MiogVaBzC74Nf6QuWHQFeuf58tVaqHaCFNshQ7stzZYJhnZB4amZeKBWGdEfWFv6d8mztV9wo4ER2DgSNVZgX8",
  "key13": "YRrhzajzi9tYByLTWnzCbFHNq5ZfHhvVeArojLV39SJiWwd2TDcBLWE4QHtmFmUjBYDqUkPLNUiZgkhQb8FwRZY",
  "key14": "3yU7tK8pmPY1HhpJxHVGxutGJMCfmXqn2csDCGApseTrurfbKf3KqzPBGmmnqpeutnjzdrFBhCoSR4dvACE2fhyt",
  "key15": "XikzjUZ1iBGsjcEDZH7x8vJZ9NFiaDsTyApwtTmhci37PdLQ1zpaAVSSDocGCD4hcDaNgDh9DY1fiDEjHN8AHsb",
  "key16": "4MHqWiDWnh9AHELEBFwUgcvteEzgSGfzE5sffv4riTDaAyDdXHdSSvDnh5puPr5X1XGkfocCiAxvzgsSLmPF2Cas",
  "key17": "3hbC8UonZVcywAg19d7Jw18kJk8uUsVKRpjMF3NE48aWRNqQqjtS6d5A26yPiiREQY1gdsE4bNFriEno7ahLQXpu",
  "key18": "5HDPVN6RfmeveW782RyWVK12iKTnoggDn2cmfDkeSUfgcQe9i4dVBDMKqFzz75wRtncaLcFYdsipfvXhVKjgC7XJ",
  "key19": "3czybBa2dp5CZba4G85ShMoDk8eL3cBQCanK5JSQJGks7HeiQRYyYiZUTBqHztZxDq3GquufohGZHwn5QP7yb5us",
  "key20": "5GZzVvJR7n82KzJu9y1UeztogGGbbM48qP4C5SvNaUUZCeg2bRDgDgzwJzWhjVBnynVihYRTVeNK7BR35oSHRN5N",
  "key21": "3kfujBZ4ZvrhJqaVAvwLm5qUdjUXGaE4jnhK8kGAPGdYp9V7JNgTmfdqazXsMg2fEqEuyaQ4WuaCUqRi3KtMe8eh",
  "key22": "M5ENV4T3G4SYwGzS1iXj1izmQ4PBmwASyDiN2Rk7TZP8V3QieF9jdEbcXUaxDxvbANvuds8Nswk5kbqqNhe6Z7Q",
  "key23": "488ttbU9nEB72p78rvMVeFJtnDqcnipHdiGhni7eCdmrj5WpsH5Tri7xkndForrY29ZuZ5jyssZvbJjYAD6u5GfD",
  "key24": "5RzHyeZesxtJPTYK1ZTMh8iNLakEdxnoiFxqm94fkSeZJZ5YR3PpkRq5DNhbnznAEEQCdYbFw1z9cV6hUSXfgix1",
  "key25": "35V7QKcTmU2yYwty1NVuV8os8vRuaKk2wiW2CGJq6Ldd9TZx4ydZBUdFcexULE8ownEdk2STkFZABsUcvwKapwFX",
  "key26": "55d8rwodxrKmpVcwtQ4W4f2xir3aiyM4vejX5uw7D9FQ94przbV38EDXvk2FvBT75YheKxbTs57og4x5gJcgYycQ",
  "key27": "2rMgTaefXiHokRGfGFGKUYpRws1cWLyyEaEuDCbsmEg6zAJUYgCdyJ56RG2q1dr9cCVxvg1HLLduRZxLyK7BDK9Q",
  "key28": "2tDxABVNwnVNCNpcHFXG9HePBCLwRe7k3Fw6YmYWow5Ry8zMCyriSxZ7wMnb4HKxEbsMENMHdmN8FB44FXvoAKbX",
  "key29": "5ywM8GzUn5wzTVmTk2jgFNXZeL7bKupnkavYdqbu6pjtVPfE8ufW31WmUr2qniZdSC98U4BbP6dzUX1vKfVmPZ58",
  "key30": "G9Q9jDdzKnzEksESR5tbmJZCFAYchGgBQzSKBNK5hH58CaFi6NQ9VKC7ybQgrezeapgJgcCuK3xt4Ykm6HFFGNs",
  "key31": "4rX4umFF9Rjhh6i5Kb3pGFED67Mb9NiAKtkoDYxVSMmupNsew1we6ASXBSRpoUT746rzjcBKmnJfwkoug8nnkLpe",
  "key32": "3YD66aHE7smDVpmVmBExaCtDXzfLaD2aG1ssN2T4h1ogjpdKAhVuSEK963mzyh6symzgGXNY7YdJ4qVqeVBpWuxY",
  "key33": "vYWVh2qRa4VJr2QERExzu3FmVyxU5jcrxBiQvA4FLGJ9Y2yhYGtjQPyNtTKhWXasdpxYJdtnKNJgDh2cNDLp9ny"
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
