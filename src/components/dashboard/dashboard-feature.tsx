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
    "SLfHnFjBJ2dXvWxzi5MJGQSxAUFx7j6iiD3GwEmXzzZgSrjsZHJmpog511X7bsLfMfPrwjmVCHRkj6Qz4Xe7N1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jfRwcztZsn6Kvoy6zh1LgCP8KeRePajmSZfpzU2Zg8HGsRGLbnf4MjHpv2FQ5CgJPwvX7eCX6oU5JxqgRFoVESZ",
  "key1": "3vKWPHkpuNjE8hSkfuwTbyxyfy7Vqerxsg8GWfZjbDSSSoRSzD1W462Tk34jebtcSQwaXbHYbKht8Nn963sY35FC",
  "key2": "4KtkpAYHJCYsUSWTG7EjNrDJ9ijrppFz4u5iN2CnMeNxPLibjcTAnt4HhF4RGwVfb4JZaAtfDMx3L1ohR9a7Tic2",
  "key3": "566YCeMDYt6yMUmcVmaohSGRxZv98vh1F1nb7Ec7orTeyypzw3UvnGofY9DxGJSXWWNi3UTz33RnRM7f6jqNFNFr",
  "key4": "4rmkpXWtA245sGyrnvz3FGCq4jDWn4SRWZALxuUm7Q8Qp8hZ4D8a14RePuKP1ynvKZEv1Qmc1FZSc8kuVGGLf7H1",
  "key5": "2o5hUMrtG7qPZZZF2BAvzriB4wcjAWsngLsWGaADFbqoehggEwhKmWq6ncuxG8xWJsy3WLuxoAoJb37YPeDfDtuc",
  "key6": "59oQCL3ikLHcCA5j3ztaa26EZiPtS3g4HcAX7SH5G633ByWgPgAc5tADHzX6utJku15ir7uicVLLuWhYUvNEgn3y",
  "key7": "41BTtDZXrohmvtPg5rRKPQZq8wGamY71VtvHdRB2camTjTVx7DUWii2tFm1bxEeMJ6T52HDE4n7StuA9ykQ246hh",
  "key8": "squbPPYuzf4Chv2GYNCQMaZTHbS37w5dXX8M3Fq9BnTpQiGZXtp8ZbvoMA64oRpKWHbPFUaZWnT6V4A48cWSuLY",
  "key9": "2gEE7pvBbvNpdvCntbSZhgmRfEeyNJrBtFJsbpxX8g7mYFquupgYg3ZBALEgJJQQjNa8sdX3imF1NxqN6KfcuEYd",
  "key10": "3xCEnwzFgykBreRs31vy3ZwJHAtDnwYLyCeeG4qXkEF2t1CvkYXgKR4ygRKRFo79RfWbWcqaoq5PWXbTwCczGvbu",
  "key11": "5VpdaBi6t3CLfHr5xGAhtUH6og2H3bdQADFsJQyHLJHxpuM9LpG9VesBtGTbKtLjZFV24RJEjVcQW6i2wn3M7VhG",
  "key12": "4Vy2FEnWLajiqUASpb2hB8447WgXPMN6pFszuiAUjSpLpjpcbyqxjgiZ4h1QvC8LGhuUUyVcv8R4Z3Vbk1cB3aGP",
  "key13": "2cugHf1sL9AaetzSotso1FX1F5KLFckSWbtDjhspzCe8Dx5SXecRHsR6tcjp82xvgjxuJwAuGGB51RkmcUJP6SS9",
  "key14": "5aLu7mVmCdi6DjaJXWt4WcoS5rMetj7ySZ3w4fpCsLH9CeR9GwtYN7G14LEXxrV8aDnW6HRpFpvqCajTUZ9imkv5",
  "key15": "26L6hGTzz4cDXg5kwQWYwwqLE5LXkzFeLDd8EEYFvMw57dbcxuhSuZyaLbWefbEimXZhnRpkxyTV2HYWfTbAEK14",
  "key16": "5kPX2VVD6aNVHhPGGq6V8jThNzWRUVVKMgdtmPyAAMUCyWg89tB5X9v2a7iQAP7syZogsCpmmcy49rfxS1vivQMq",
  "key17": "59jk4Rwf7CvaWQQNFRnLtdEZcnqvBPYFGL91iH3SE7Pc42HgxMpwkZEYqtjczTyVNDmmnVjZLFP8Ntu9JKZuzp3i",
  "key18": "3aMRGTnVVSaGCASqHedDqKQx7Sp9KczvfNqyuKYsdWLY7UC7xK7b8kjLZ5y7R8aSD4W8jGRMw8zmqhqNBAyCo2qk",
  "key19": "3inhsEVXu8ynCDPrjkm3nsmsGo1XYafsXsWmHFfemzAQN4UwfvJZg5qduVpaX3vVbqPhkHzGdGT8c8bKcKVYCSqm",
  "key20": "5msWz49hdXdTqiyS7NWLr715p5c5eJXrmUEUykC9ajzZ9tRifDrwrvMAjqkCHEgWtvfEe41Xhycb4JZoYzCxwwSH",
  "key21": "5wTxSBmQsuVBwWqFRgfVgw99oN1RRcgsZmyWXZzHwmophpGjn5QFkkmo94o75Ja4FPkqSJgdqFeUqFtxQVr9BG28",
  "key22": "2VGsfgAEk427pk1hpru2tuWiTLfN2wGZvXusjm6W3ZbsNu14NjCbFuLoSqHX6px2SHVfckehKXsb8sDhqaCwFNUj",
  "key23": "3fasYEYQ3P1NBG2syEJNn5iQtiZhb3mNiq7YhbFvUKe1AjbdpfiKfp1d11RiFCwD8zVgSC3nv2rSv2FGDANswE1L",
  "key24": "3535sMccBvWtBEC6Dt6tsdy8n55B8hHGRniJaj91tC1e8CVLdF1t3sqTn8USq7uyxBbNHBKP7LyE2CYjMjPKRcfw",
  "key25": "2a6Jn8DbeU3BRiLiTS5CaQLB4WF9cdVVXbhrUFHWMpfTyi6bDrC5c3gpRGjnpJ2nbj4HYzSVbcbJdnEkrGNDuQE6",
  "key26": "gBN7jaugHgi1fRtVq5CagJ2iXmn1m6dDFEtL8naEq56zt5q5CRv6xNmdFkZKm3rRZHyyL5WyHnXky1Zvtx4Xo1L",
  "key27": "3SsjddDqCs8RaWic71dqnaeaBABZr2m6abyp6UrS7GHdtu5PHVuRaUZvQa99rwcBMJZqrtzGAtHbsJkUtpA2utEj",
  "key28": "3Gx4qxBaJQReXayYu2ubwwcAErgerUKH1rcFcjjCZhse5tLk3qSfKqxixo2BedVnGfmU2eFgsTJjqpKJuKVMsSnR",
  "key29": "34Jp4mPBtVnVepNsprDoqbKAJEFJN6ArZmBU48gjiKgKJ6992Yyr1oQR5oekJBH8dz2abuRxMYTNZedSny3rWzJ",
  "key30": "4vnECBEPbBH8pUMzpcAYjxU3QncB9R92a1hot3B3vdihHhfjyPVbHxsriiuLQzC4gp4JUForz1f1fmYuo1cSuEpB",
  "key31": "5oqH5nyf6tg7XzPzfdvo4nYdmePAWEd2ZACrdawdb4enj8kARHb1f2Cpe9eu4sWduLr8AyNdFskSPUaVneu4UN5e",
  "key32": "4XskvFyrHjkyfYTsXwKAX487sx1p5ynmZwtLCPEGPQmPhVbqC4ZbHEWdcQ8c2tA4X8eWyfEpMeu92gPDAu6qniWK",
  "key33": "2fVQhzMt9MFQkFY39qAvsVfGMKAMchFqbbeRw72KebNvyf9yRxFF4Gbs5zYzEkYmV7qVFReVxUhRwnLmSsr1Frve",
  "key34": "2LFcH93mXnAX2u4gB2YsamkYdbJZVKWirWUJvYohxH919vyNp7hF8wJRnpAUVMaAj5LiJZmEpJRHH7LsfhFQtuFw",
  "key35": "3oGeKMrcWSocfUKHhm87KPQw7hs98tbe6p9aiEF4CuESe4yaDPJtqSFH8KsYnvRtngCKBrJ6HWikm9i1TM9ihucb",
  "key36": "3H9nEiJLfqeeCTEjaUhp46tvba55dAPSePPuofWBz2iv9qd1UoXHmjAB5tP8d8qqvthjd4LbCdLW6kgZNKYKQHoo",
  "key37": "5L2rdnf4WZpKpdDvXdJXPYuRYzm9S5nQHkpxHJUYZRoyFGKaLuayUsMTNecyTG145YwFwqCKYqnecboQx4K3qXcg",
  "key38": "5ZnG6vVfJuspzK3ZSqKD6BwnzuSLsBNHQX39RdU8YQFBvrznLPMnsRWvZYcxsD9LFnYxwY7HAkxve2iPVvhJFPXk",
  "key39": "4Ny846kFHfUq6HmuaC8fCHeC4epX59bgqKqXxZNccvAYoiAxG5UEQ9DvXxMDM6uDyzj2ZnETrQVVESYyJXmrEqLc",
  "key40": "63r355GwkSu1botxw7FtMg4fmLXHBQfXieyG7ULes6hDTtYz35bXa1xcCMjhwjWuXJZA9XZtGTd1iQrjZ3cGXphq",
  "key41": "227zRgz1GzTV1VKW5A3PT137xtSwzHTy6CWU26YEgaiNSHetNJftitsrQGAtr6zs64ph7C38TJ14xELkZpAixvvP"
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
