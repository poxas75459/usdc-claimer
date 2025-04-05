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
    "3kRTkq8UQsPKT1C2Yxx7ndewHqHtMhtn3LdCskihr8ybwQAw5vSgaUpWEU913kpcXJEZ5eMasqnZNdbXmzWneRek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mTc1HJJRvCm9zWGkjT7nyHaN3bGNbLSywBpKFpxzijV8eqBzV6Eige4St2KDaMvxZRbpPTydvxjPf7rQH9Mn5sk",
  "key1": "2RhstFYsPktsSHJzhAnR6hLDyGpe1qw7ZeZiSFFNJ2PdDgqynCpQ1PTYrn6JBFpc63MKCV2Rn6JyifZFUhjWpSPr",
  "key2": "3HSqqxvSnEU3xjXWZWMyTJNzLvigzf3NrtYqwzXtevRrYWY55GCXgM4AFghCWACtuMT4wAsTa4BVmdSFgBSmuY5U",
  "key3": "3gUoJt6jN2Q2CUpa1AFi2XE6GxrGoStPMsas4UwHtWQLu6kRJa87ypCKSBAuvh7jeJP5oLeQUfTVKhAqEUQHoJ6S",
  "key4": "4RxxeUe9i2E47mRzJujhZrpPgyPjV21x3Jj796AEPoS1crGwmwKV4M3JAYJRBWjNRdKKkpuDjZ1ZGRCurQEYHV8y",
  "key5": "hxNsWZ2JU1pcLWQ8H6veYxTP5T8GcAsn8vRuBiiGDtVRzfADEZqpXfsYjFm7XhyuywLdwnFP9egTPtUD2NTJ3HX",
  "key6": "2HzBC5LERA7upXqHZgcWeXawUUmsbqrKibmQJ9TVi6hco1bJUKfTAamre3EsstjC8em8sT5DWqzyjzXKbYkrwqNa",
  "key7": "3yUdPZph3vSbb7ANBMbkxywHuHCtHynHEmPvDZrmP6irmey6yW1GhTrw7xMv3VFDYUosVYjzyDbVspsYJnhRC3Cp",
  "key8": "2tFtAz1wQKZqhys4SUUT7av7rYPVfAuRrDzJY1UcapcgXWgCArHe1xvFjp92R61gPqdR8Gc9PmUryXiVWFzvRCQf",
  "key9": "2kbCHZp5y17DyoqND4KFJLqJSnEPTB5MyQeCbLZvsxbwt6q6riuoyVi6dX3RjybgfJWYDCwzkm6mvNa7ni6skMjK",
  "key10": "2sKZvTXcQCTz5aNzfoJwLfrDStwHMAMjBjYJWzP5R7Uds82YQT9iPVziPvehoabEP4rmXdyw8269i1FqHRBumt77",
  "key11": "2v6pzgsE28NaBxek7WC35jGhHJBan5GWebED6mFxRcUkfHy932Sp6yey8nsS8kGhM8NmqQDNG23dRE88VTmCFxLW",
  "key12": "5b5NdeNFoGkWiNxhHFx5DxanK3ebefGGZpJ8sJ6mTcfagAS6Ce7e1uAXSkwDUo69WrmFoF2K4Gk2WLG7vZifsTic",
  "key13": "CHkUTDJC6XfycABGKUWQ6wq4moZ1fYa3EwvLGd7GoZ7Umg1U3PBxBCV1R6T7XwnQgE4n9oHZvL8BPzdTShRHG67",
  "key14": "2F73XjrV15yDCuQXhPG7iji22WZ9n57UFjanDUMR5JK7NMTRshcFreb8TQXcNehqT822sioxPgmhzxBTdFHz43J3",
  "key15": "2pUpY74KpzycodvwxW7AmUKn6BQnYGGF7jbHbvaRrYTGmZqMzXnfQCfDbs7aeqATDJ2e17kw3wk4ALX3rB7uaUzq",
  "key16": "3A4sVNFY1ka8E68vdeXfVSL5mGdf178mbAqTb2mEJSk8yhyxFXj7ijUJdLmtWGr9HN4X9fSuxRaLs4ozpBC7TyN7",
  "key17": "2cBL8PFvSMyQtmKshuDqUuWBbyi6fzkV7aqkoGtnnVQBYNwa49T595NhUXgKWvE2NUCZRpqSoBuYWqYzmEFL4Fq3",
  "key18": "65rGFi8RNRvn6rWKMouY6F2sRpJizuumczSafPTqfuiKjPLeQLGYVg1ZZmSc9xqyiijTxzeUjFpQuMWLnywcSFo6",
  "key19": "5vKqQkiXKqffiHYmL5ek1pWW2oA13TJNeyJmzZGxRTWU7KPXuKiE3ivEA8BERqMnwZcpmZaHPJVKrmgscUsAfHfH",
  "key20": "PvV9GswKJYtercT7En7NcXRTwDEGodXPrLaeSHdfzUkGvDrJEKQjAopCaXEThbjoWUfqaMTiC6iX7sHzi5pH8q7",
  "key21": "4pFs1Emmxkf6cv4QKWsqo3Cmfr6gh8PPxdApebfjU7bYetKAK2ydF1sCVu4M7YtVNSJ11y1Jr9ZAV5hejceqGSLn",
  "key22": "4aPivzhBgpk7DSMgs5mTKuZXoHuFYFUfcMcVWcwiPtapgiTNGRWnzbx93Eedf9dYtSRy2Vra1rG7ebcwAUK3cUUz",
  "key23": "qzeXDNYdoUEw5rsQkSVQjsUuTCRRDBgnJ2Nn9bT1kwtRsQ9cpSWnu4FF8uppoZj6fFipfxKjfhXoZew6xAjKSq1",
  "key24": "3whVm4UWPE36Bc9W7BdxZqzkkkSHDj34ekiF5LBRweDW422oiEQodbrZzWitjqBxFKN28sDgrepUj4NjPgBf8XHa",
  "key25": "Ji6gCY47sNBHX9txog6MAHMLtvKBwN3tLzhBqJN3tPgXnZHnqBRGSKbp2CBWAzKv288mUgLcLa8RioZddEWL7X2",
  "key26": "x4NuDgS6NCkRgR3os7TiVeMbYxxqyRVX8CQpuFjktjuhgS2itRP4gspdYfif99ezSnJ93zpDrBtENTLJNTny8Ge",
  "key27": "379RppnAwPYkNc9r7Zi8hpDzCYyPintweaEdw6F2G5BF8WxFRjCdTiJF56ZMiqZQ8ZA9ps3AZiwSsCxg3p24TcZ7",
  "key28": "27ZbCEg8eKMirxftjysoNsMTfa9o3QsiCNG3PzWKoJ45QDtPLzQdU5F9jTaR3WaPGdMgiZGDYJwQJfzeYkQLt4mF",
  "key29": "3sf5e5ACw2LKdZCUACqc1XsgnA6qZsaENQhXes48wHZmudijHh94o8juHeRR6pXqPUGfHJYNac91sp4ugv6nfduq",
  "key30": "5cM9pfoSisfL4mw47BDQrGfRQG23jz24RmUV8QVgs5Nawpyq3uvQvH6APN3VZutZV6BWaqLgZinHacVmDJxzYpdT",
  "key31": "EFLpJshBwhC6YBZT4RAFkQodA7161GLgVU6BL4aNKG84hr8WHnjddPGnhZ9iEyEkFL94Tj1eXJFTQ4TCLLZXfcL"
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
