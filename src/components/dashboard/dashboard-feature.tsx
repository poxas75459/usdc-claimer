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
    "2fR4LR746Sb9VFVdWLh6SHQQDhGQHRdwmsGCLp6KwKSkH8T38QMASqD7KiRd4DsraF3NS5wegjqt6p5DGU2ypCjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sCU3t7M12PXnp3xrWMc95McTkYU54r97LvYLrUKSJb7Ah31CEXb2SnzAQSYfRifjF3VjEW17g6q3ZNzT88X1vBQ",
  "key1": "2m8U6qMC8Dp66f9LfsUqVUMgytAanpLPUdkjFwYxCiNq39sRD755YXwromXLrSDy4fQBymxoi2bPWe1xaFwWg3YU",
  "key2": "Qa6Cf7M92PfMdnFiTSLLbA8aJKAD4JCFJPMeFx1BhdQ1GnDjiZ1u1i2X9NXMs5T4yN8QNNvSZ3qVtyzJ7hjkFGD",
  "key3": "DX2phSYtvU7rGVZtnF9usN5MVw5hHkAH2G2EJN7hFkhqRFzLEa5vtCrb1719moyhzUnyyE2oUrEuSaXNfLA9kSu",
  "key4": "5bStRGgCMYuqQ9isGkm9poEAMNkAqnQXKBxtCDrTuCaD7Eip2VM8EmHySDS6FK26E6Tw6kw3yM3u8pxbd8FUQHW5",
  "key5": "uRSDn8L1z4snmMEDK8x7XfhufCtxJdt4NqN9k3Duuc8CRUW7mt1ethTjURgCWXSYUFJv73Ppay5pmZpRKBbURi4",
  "key6": "4Mgh3m2LouzA9oAgaLExRA9b8KYFy6MngR2PV48w5mniS9fUDjt5AbF9ERErHC75p1hepxZeCn2GBBg5NKpSyr5o",
  "key7": "355yznHRc7FsLEcwPjAPf17g2XZcT1rJwivJ1YjHXgdfu6eohXTqVXKydrv86u63n9GrayFFpFYFjp8bTWA7WSu4",
  "key8": "46bwaeFMrBBqU4zbzzuzBvspqywRo4hr9sfEw26cSGsJ72dNxBqke4cxoayw9fw3n5z3BQRbDX8uRVkSqJphjEfP",
  "key9": "63B7ghYjEoStXfwP2YyPMffcUo6k8v1jhmrVYWSqqdt65UAjHwfgCMhoQVdCSaB9KA9tQdvvw5MnpmWvqivGLR4Y",
  "key10": "4JScQX8qQ8sRKcpY2jxH2u3tA553WNxAjSonzY7a1ZAActQgqd5tfsYPJXKtjKRNfq72YuqZJwokG2TBGKptrs3v",
  "key11": "5NWP8wut6nQ2pdeoNe4vo8cvCrS8JDob8pNGVNonzegxxavFGuU1Zg3XcwvgFPJW2nRWDy7BEGE3Nw6d7NQZiZov",
  "key12": "39LmAp3ETfaqgrDuA6rxGsvSS24pgFhihxrDevSCZTzjxU3i2qo6nhB3wLvSm9w3pdWUzQ1Z2kUfGeT9XbDnWcZ9",
  "key13": "VzZPik8GMYAeX492f28pY2SLgvtMj4hXVftJcJ9BsuLY85dZcGcToHxfhEmr6hm5q6XmRqe8huuCqDtQtiEmAzD",
  "key14": "2LHWHoiSQmEs3UqPxB9gyorhSUrEoEwkufp1dc3aZajncxtSXEYSKDv3kwWVsQU5ZYCDMYE5bNbf7rVbQqJXKN4U",
  "key15": "3V6Z729b4HyrtgVfcZekDtabqvLxGMTnEBXLo8kg6eZAeuMVUj4LzmLkHvRCbJCeNpgzezbDKJxiuaZdLdUqJhtW",
  "key16": "wTGKYEshibvpKWUXeSRehAyjKhsvthDmxn68F2YEBwqR4xStbwnwdr1XqHaRqNC2oRzdVQnFdKBoitixMWqbP5U",
  "key17": "5AUcBa4Y8ThHz88AcCYoz9r5NASevjshsyLAmYc2NUyHTL6HmKjvrNdgKgoUiRaNkmeTycKps9Q31YA5LDHWqMm8",
  "key18": "4JMcvU548QG3VFE2FTr9buQxuwCKKF2CRFrr8rvQkwdx4432VM7VP6oGafDqVeWSbrdCv1WNkhAc6brCVD7WcnCQ",
  "key19": "3o6C46mpZT86WvBw9UqvRrNeUGqBZiY2Yyw1xhzWr8SJ1gWh9dyeTXAKuauECDENLYDu6DvZVPF3u6wRVuMswzSj",
  "key20": "5AvZj7pz8zL6YswxUov6GX3Z3joqUmfv7fJPbyww7oDs8DGddmBP8dm5WbR6hnvZvvFa9vni7QCPmNAYxus7ZgfQ",
  "key21": "2JzdwrgcASkUdw21MGDyxconcAHyewXkLiyodt4jb24JEmHrD6DHcdcxg8CcjosFHFtEMKv3evxWzJ9PbwAwFkTv",
  "key22": "3eXhp9LBr3kHVaK3ZupGiWBbHfezXZFCrNmpMkuJrwsD7djWGMUtBkejM4yY1qfXu46zhFRBxeRQv4baFmxsDKSg",
  "key23": "UF44NGyptSojSesKPcenYpQdCtvsokgu5bC3b5Hb1qZCsfDrJaorvrSaxMBjAHjB8m3RKyzL9c6fhQ6WVBzu6Zm",
  "key24": "5reKFKpQt8EqsPVuFqkgRncrkK7xDzbBR1XTFni1GM33NPZuzSzrchfHa4NBe5RSieWAETkMBfJQUZx9dHhMhCcb",
  "key25": "4iB3YTgV36HEdbqhne4iBxCuH8Huaq7dZ8ZFJpasAz2G6NS4qSnVgK8dcwhH1yWTT5BnadjDGheiPgztTkr2JEkw",
  "key26": "5fT6yGkwHMLwXQ6KTbEZWuMaM3oAavwM7DZhgQakZY6qByhc2Rqy4LAccfMZuERWaVueMb2SX8zZWRD7pEdtvY5g",
  "key27": "4HTNpuBzdJGEH93mo8V2fjEShs8o42vKg6ecMQftkGhY3ptZeHJuPiFxbTP8y3CAExct18L8hkta3FKHHDGZJ3XT",
  "key28": "tabEMHfSDrLzPGtZ7X6LQVJuqs96jJZbuUGYwrmYMp17wzZYqSAJ7zBBZh6FHwRDJ8nc76X4AhVS56r269SZzqz",
  "key29": "5F9rYwtrQzJJgg6t93kq6qWf4FbusRJa4rZAEWxgiVTanUvZuVVEKmkNHELQZc1LQqdTuJGTJTdXh5kW5rDCZfDG",
  "key30": "LfvV26JuTZfP5BJ19R5WCddtaQ1bWTFfm83ALYzTChJS3PbnknyLc8NbNMWU72ZutuMmWwwyKiZjkePDZohJxrs",
  "key31": "5hNoE9LaR5iAnCapjBHqg83bqgEbowzZke4wtKShgNpQC1xgXNUvnoj8P5SDNh4TepJtfCnx1NjMZ3FZDaEfoUFF",
  "key32": "4tbwcksvwM2vnrk6p2MtxrTTxRm9mzTRev3Uhyb6rM9EbBiqs8w14rVoYQfnqMhkQFW2qf2AJrLPtteqjiAJvGBZ"
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
