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
    "2WkZcRqmHWbzH5Xofvgf5eCXKr6tjxbvSJjD29D1bbsfaayz1heF3Ks3Uv7Kiptho8qnfvTf7e4ciEktHtQ6hRgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38NYhNc8nLmRZBpF4XqhQf6QmvjgmTvVYQRz5MLrsA27TFkC9cvGb6pPBCGyDGXhFT99bjGSAfV6dPYHh3BwFiUe",
  "key1": "5BCDGvBf8SW2eKGmuss3nobU7HUXYxBwcb9X2JPnHj2dyiHdVBgS1buwmA72iLCH72HQcz8D5F6X5LTPYQ8oBCCN",
  "key2": "4DybEZUTHx6GnZbzqT5Eq6fauB1PwVYzHwsgtCJd3gpZwaxmBYxmuVsUb37XmWP8J3gNz4acuBhyuToWurBaeWEX",
  "key3": "k7Md1L8ZBZejn1xmNKyABjf6XrNRV48pbUkym9AUgMrZupgHgLdV7fWCsN6MPDKiVKzqPnLC89jnfi8TGkLxdGd",
  "key4": "3rtCqKtfirydFUh2nZsSXBCCosjfVkKiyKwYU56rhxvyukuF7WdWW1VevX2gBsZEa1awa4LkCsaq3BaxqA9CTJtd",
  "key5": "4twVZkj3W8n4GQg4Zz5wT4zfekadBTXPLVBcn2brNmPVdAsExpmSyYZwdf76KgUgKdE2Vitm9KYbevArMUVKhoEj",
  "key6": "5thaj7Q83DjgR8MEXV1wdyPcmhz2Zkp1TJj2DAdoDxcwrRgwkh2JgU12ADXEb4cM1SUJBnb4BtapwN9xVZsnMVbY",
  "key7": "3ZkEfGYtkJAFkpffcR5fVWB9D27XcKHMrsUd8cKK8LBd1N4s5DizVKAH6a25EEdE7GpDZvf4mGgXseMm7czuEbm1",
  "key8": "4aDiybPgxBwT9g7G3otkqrKZ1zBU1BdjppqaHkFBkiZLXjrCto3HKWkikq1zxCSRxQbtGgrpBbesebby2hu72qNT",
  "key9": "2wUfcCaScXw2GUC1qtG1bJePyfesMAE8qY19yLqppaY4GUGCxsNqNG8MkqQN8X9CjurBhkTkE5kJps5krCrnWpUC",
  "key10": "2p63aMzoPdVrUV1evtB3CV4w6uZmGPr9Hw7rzaLR7yDmAzRM718HNXJJ852uVX48pZctPJsnBjA4yPuTuCQLbKtC",
  "key11": "5E3xvK5BtysKX7SBwx2r5BrMKe8aerMqJWgNJq6hPvUf1kMR18mfXY8i54wYKufKxzZBiamQozaph8FpCvks9xrf",
  "key12": "638LjDNbWpEtb9SkeVmY8ymNbA2L6DsriT6rfg5xyUmMdPruAx3f51zpbuvvy8kw7QoVxKxou7AZ1HYs9E3LR3q1",
  "key13": "4mk3moy11BEywZe4i1AfMFkTsqo9BED5rv9y5CzXJMfVShhU5V2qdfqZxB53kTLdepC3ppa9KmLMAq5WzRPbPzGS",
  "key14": "5DeFq7Qf3PWro3ujstkAB4yxbsSXCoe772CqyoK8yB5AnTqr7ksdtD8b3zCogHYjuDbFpn4sLUkEmx2xTZcP5ErH",
  "key15": "3sERM2Yr5ztureVR5Wi3rFvDQb3VGPUYaBFGuLzZ4oQEy3o5vYtR2QSyyt6dFXAJugknmhdz16ExtbH75S3c8XW5",
  "key16": "3AHwAvzm9h9fRbTZpAb92uDLKscwEkdzV7drsN5fHMZ3hp8xKz41FVjCxPA4phcYozaMuuDoVnv989aC2qvqn2sS",
  "key17": "278X3ejm7c6ZL6uNeFTppgozmJ7oMz7yX5geUNTXGyNkabWxEnXkMrFqCLkozYZn4F6PgvEx6bQhwHP2RvWutZWC",
  "key18": "3NuUBWELgkMnGZxJRjvo8rZ2y9yGanqRD3KmNWQ7obByTdNdZNXkXL7W11ZbUecREtyk3LUv2EbUVP6K5Gn1Zy5E",
  "key19": "mkLuVZ2zha39Yts1fro5yoAFF7h2mvBaXRMuGBdx2KRgS2WBQd8uHYBHtewXMT1DzNbUYVYc3Cy8rr4N2Ncefn4",
  "key20": "McMNoXKP9VZXXRi8KfjxyLxVAGkDBSGq7unCG32p9M5BYaLgv5poA6BFhNzDYhFoW8tv5ghM49tzHqPGbpHrNk8",
  "key21": "283x1PEohCMM6FrBjffeNAN4WQDnWgN6JkQithbca7ZRB7gHh93TFYeZ3TWRkuSoj3v3PXwFofuZesTFRhBcaTiy",
  "key22": "5V8N2RpVjJXPZgDSEV6ojzBpyCcVg5HVUiSPYPSUcxwggc4hiRmshPrDS7HsFybu3wfh5q7SCCsiHhMUviAs7sgD",
  "key23": "5o3yxo3KMYLb1L3mpAGXjvoWM22BdeKgYfkZs89odRwu4rUXXYXPdvUhfQTsSQzLg5XSpAaV84WPypHuhKb9aN63",
  "key24": "3QguChBbRSDRjJpZXNhekRJ1KpVUKfkXyAbF5FoaCNLsvGJCLqPxgPkYnUkERQNpsGSxKsbpDQA2SFT396EVB74x",
  "key25": "36i2YTxRxvhGUWPeumGr3BdsW78psFUx2bYDQemqocDq8Bak9QrmxVsSSf6BWy7zo9aeKMGMcK59pEEby8pXZLnj",
  "key26": "3gq2YT4KZGiypxjT8h5EbAD92tqMhBQdVVd3NEcGph8grtWs4azve6Hbpr6FUVpjK3qP9LDyc3PM7tRhiq4Vyv27",
  "key27": "34txevy1aJm6VNHKAYuFkLwQZ78NQkBa7fsSHg5nbfc67YC9yP4qjFmXwMP8PgT4yWDFGDSG4AiPLMRStPZcn8Nk",
  "key28": "3EUNHrYXUa6ZSzbV9j4GS59k5mNo4YWG583CsyqsgbLHSr988FetdBncgJ37hutGwS6SCyHCEbYHncqpFAYWvbEt",
  "key29": "4f2amXPbizaF31kFrE4feTum2Dgf1FWXJP688mcbZ34N6soJqD2GbYrQgYg57L1QBSxhMvCqMM95y8waXsrVQDRj"
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
