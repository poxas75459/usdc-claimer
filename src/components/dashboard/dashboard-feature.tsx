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
    "2EdHw46rDQ3BeHhXzrjkWqkUfvQHB71NCNWQ659HZd7krFCjGk8eowkBg1iqfqvrFHmaZJAPBbRpKYXjZTSPTJSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39BJQKPjMp9w53GDKUeTWHn3QZAbeJo6uKmbs8k4ppiQbcBCqniFoXquWPK5w8WB3G2KsioKRM1qW1zLkWFBprE2",
  "key1": "5EZTYDiyYmvk19yhKsc6dgGuSV2pz35bLXJyvSdL7RQwCjFM3rYYAQiwCE3W5KChopUk9U8YmC54ovCkuhot5Ni8",
  "key2": "CMKpScyAhLjot8U7Zw24oZ3oTwTqBoumVykkgv222nc68URqvppVHtGT9KRVmaK1EtPwEvbj9Kq4ScvZiMndLsf",
  "key3": "2YiuhAftrU4GQTJoKvcz2BfNYwBgoWtVhZ4AhM5E2fpwZgTtzoiixRw2PEkD7GY21nh8ontxYjqm2kUFtanNNwb5",
  "key4": "3cij4SJ8VKnH8BodyxY7cK64itCeb1vmjwnD9CZ3UripuqYxrAQS2zEtNBa7UDZVftFqVyibJTayhUJ6vDLDbzVV",
  "key5": "5MTiSx2RJFYWHabvHh5pUdUkshRywL8q44XGGVgTpSc6Ff2hxYYtdFpaz1VLbXSQk3N9PHFGE4LHVRrp7Uq4Bs6V",
  "key6": "33tJPskcSTKVKv4RL6CUzYSCNdANY5zLyzR5rPeYHc3CsiWNLePSMDmKiceoUKiadpCw7fDe2MVV8dm2fmsWGn2d",
  "key7": "2aLPCyiRPg2ueqp1TRLjGRhBuh9vmEaVbVFVeP2doqnydbxTraH35tgkdCaXXfPibxH1wn99gbLWCbMEJ5NM9AEv",
  "key8": "4z5JCb1tjueJqB1wCSA18We6PT5Z3q9FAK18aCtM5yTM3spDy9WBjnFxLFtkuQWS7JbcqEUktb7fvdkHSvdR3MnZ",
  "key9": "49fWUXLZznvPjuGL1YQp1biuZfou7PDBvsotA2dbcrYbLPdYNZ4x6oU1aUXridCpJ55zqd9rCoaGFuCvizU6CAFg",
  "key10": "5bFVoZs9BNRonsgba6KPsHaCb32n7D8NpuTkkjfJQn6psCVqjJh4siAuFC5cSgkq85sBRX8t5UZYB9vZ45FZCoEu",
  "key11": "UxVnB5ySyMJqKEu9mFD5uZZL7n4Qrk9XaSKxjXXVdWMPQwLqV9cAW463Vt4yDsx63VXnPayNkbx9Xn2EPZq5Bmo",
  "key12": "32sCFQdvgsFPfFzmbjM8mdQhC4jHCbnqdurg7Va5ZPrUeipZvpgc6NR6JVFCwHNfJCZiQVqfW85RjLGyvk8v1bUG",
  "key13": "4F6BsiJLeWzvPanAxHWMkRZja17dw7WG1xuFajWWBhhkbiid8xscgzNeugQhDteV4j8CEUYXfmfyo2yW891JuPEq",
  "key14": "5sM88zs24j8cojnHPMP4aDtD6EzjZ1ttiRyVZTwK2D9xLM8s2FKqnf7HVq2SpCEiv5FWkXREgmxGWpzdVFqQPkJ9",
  "key15": "524GNEefC5ULuHWQk9Ex5msv1xbNRTpXZcGwDeCzfrK8ZXQanEtLeiFmf2WY6KLc1bnhzDust9eH3NjRnWuVhR33",
  "key16": "43muRUDko3j8Q9cNkPEHS6HzCha1hN9cXsKn4ZNpZimn5CoCDe3CUHF3C2nx4PEZfAVP4X3dKwNuxe9NiC6LZdz8",
  "key17": "3tXdvDRgQAPajeygmbuW9eFfvU8AnRjaz24VDvxEMeWeB9ztrh6rLDK788vQmwupjSeBTiVAt2sQT2aY8U8Mq4nh",
  "key18": "5V963oar92aopw81i75LrcrE2eKmDF66PE7yKCaKdiatMtAaoFttNpeuSSopYxHJWbajxmWrFwwJ4T4y27KqQGQt",
  "key19": "43NPfo57LBbPMi8nrDNz7DLd1fQGWhgqJJ8M8yuUzPoSJydPJxNXSX2CUoJDjq1y3zRZLura1fMtXtzfVhz32mvq",
  "key20": "qhkTr5xwdZ2qEFB8jR7qtJoQdKgfqhvPmQn6tRnomznU12jXHTAQBQGDU391oSksdPhZoRhDSzD7a4eYGDEGQuD",
  "key21": "29kvNjfrd79aQQovjCQcWMN2um9nGLUq78Z2Y2SJ6vr6BprjnMaeFs8ywo1LjbHF1Aey3ogbHJ5ThA3ACyxeXhNj",
  "key22": "AgyxtNLuo5igN41cEJ7wrcwa3xqjX1SvtNpqegZDvaa8Hvzgc7eQX7LgWMaEmQmHqZX18QFkz9YqUDX63b6mpz8",
  "key23": "21siu4kjmoyxfdtLDXiFfecJjh1rsQYufVggmvQ1m8GX9fm4CF1gtbXyQWctFXLNdRPtPCvGAqXfx8HM8BjYH9AL",
  "key24": "5hSWYdXpDysg2M4BdehHsgpyLATXRctmKShK5dYdk5Q7TNby8xC1Cef4FqkjQv2DvdTs9z8vndypAWCtKQgywaha",
  "key25": "38EXVem6y4GrM6NwShKSetMiTs3EtvCAv7HwphX6ZUxUMvtXu2YD9BE6spSwGfUhaoH6ZvrNfpcbdbR8wQW1sD5v",
  "key26": "55ykcYFZmnJCywKV1J5XTkxMA57Uwhk2ZWaLwgako4M41tsAGy5nYAYWFFsBLpJjJmSXwd1gxxWoCq29WUaT5N6N",
  "key27": "4mZq77PameaoCtortZRcN7xbG6QtYDk3VKQE3LnwAymkhT88B3TT3XzXHUWq4EjMNn23L2KHGKnNMX7Gdph3sXex",
  "key28": "2Y2kKwcgcqLu8vbY2MrwzGWkp1o411d9ogVjV1vYpnMrMqNr8qpiuxvi1X8SNwaACXzd2hN6rCt8HZibD656mCpv",
  "key29": "44WP6ieAHWKWbgARD4QvcBJZCnWD2B9AZdGbFZvXmfKNGtZn69KVX778GFKjEMSm5WwLsBSC8XKuCn6YK8LTww3X"
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
