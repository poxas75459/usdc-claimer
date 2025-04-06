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
    "2joJcPp4tQhBRgArpDknRU6XJVgaz1qMjp1gCxRnV5cfHcGzzrHCoK69WTiJanwPbDnECMsGBVm4orMoqJn2GLjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oJ2wX5W17iXiLGhoE2LmiPdfjfa97tJEVUg9RHocH4c19snzjRLLPhCHSYqW8qpKgvMhX7ywMiDvW5d5r5bZi5i",
  "key1": "4ZCZ4pceL2FgszD9q9nizFNxAgreag9smR3vDioHsEikvKD25BanFEKdRfC69y4T2iQWrAKHpfu7TzNkogu5krwp",
  "key2": "3YwvQ7F6hweAkCLoqnk8vRDxKfYFoqEtKKZLEZsqzircy62GtKu4zNCMDk5hXvNWYchAkWZsteAaP2UhTYWiEtpc",
  "key3": "nCguLkvf6nB3nZNwadUdXasPDaXNxZxXwL8KUREduUzEjMPPFdMcsF4EB5CbJShQEHacjXNpHYK3S21LJniV4Up",
  "key4": "5qQtQ4Fjr9Uy9rNA3in9GPCHFrqaH8eKgKGSKY4NU49JJUyqcQwUuXxrZhQafXWsavJR5RnPA3S9rUCqnyWtLLhB",
  "key5": "3CTRf6hsGAJ7A9U2hxLq8UVZu2z83JAFm85gc26kp1KdRG2L5eNTDrk7XVjrwwUj9wgw8HGUnUwsr4h6iD17HuKP",
  "key6": "fgf54Q1p1qsPgCnsbEHi4b2aCrcQ9xRX3FdUkq8J71PvWft7e5rq98LA24c8Wu8jvd8UwpPmyiL9QdhMppZxvMC",
  "key7": "43ZGpiD88xvHyfkFVi9nNWYmW6Wpgxwci4NWEwDBs9jG3mMmErW4znjJVFeVSQ4oGBPYv7ut7aFH1fXdGV77AgDR",
  "key8": "67oo5J2Ff7n2LkzxmZZinzZNmdrDnzABTR57sWJpRXStrf1sDyxhRva2KBdW1WNWEkkb7mqGP3WwAqfDQ1MrmZK7",
  "key9": "4svUH3nsjdDFN1Ug6APqH9QTTMXpLw99KmhG9FLseBAMeZWhLxhzQVAQZSAcXhDThbv95fBpaBGoTXYqcq2viefx",
  "key10": "3LzXAcxjtis8fuAwYQrKrpPqFrxW9QJdzqekBi6pXJ5iySUMxMGRNP45SX8zoK7Kz7HcJvm9jySuZCLPnTwdhzEp",
  "key11": "3SUdTBWdHQ2JN2P6v7oCGcwnAYrwmqR1LcVAzNTrvvtQJCGPVd2yKpKiEkfStxMzHSvBYnh7fk89pXcyr2BYu3Nf",
  "key12": "aTYreLZ974MuzEPSuDaHnfRsbdkeyFX8yBfKEhi3veTEfEZ2mWaQwE95Pz7pu4qk4NEPiWx9KhSdbs4jAjWgR4G",
  "key13": "3Msnu7S4HL516oKL59Ccc5ZdUfGkPS9SVPVjPjFaDJQTXGx5gLq9eBuAzNTRsA1UcwcFgEf5Fz3WkWCyUst1Sgx9",
  "key14": "45M5wJW33QDvAqPfHojumKJQZhb5bbcooCis4JBn1hsC9tAXzBYgw89X2ivU1qbNrTQvgBivrxc71Hn7KW1Wb1Yk",
  "key15": "5gCGJE7UYs697xSf8GMx9FZW494WJ5yFAUkgFEzX5QHogd8hhcpuJK4QUSEoQWruKh6B8tryHk5rCdFFxjhq1rk1",
  "key16": "4spydNCS5RFgbbMYN7mP9KRanVJHYmSg1LpABkaGT9n9P45H11HG2AUQQLHBMiNtCJF9a6B3wEpGtPeF5XB7MV6Q",
  "key17": "62yRELW4eXwWgVFNvCUGaSCr5W8ELQRxENPw8acqx3FWr9xHAdMpBc7uQgf7dek4CE829EQVKskPgv93CKiqqPiW",
  "key18": "1jfm8vE3RS1jZWSHWd7j17dWD3dujNLNTpNk2mcz4XgTgFHpEHHx2AXcjE3u5t6vxPrMzWCsq415bMK2MoeaTup",
  "key19": "3zbKPHp7Qjj4n1XNZ5KwWSXyT3xTBoNCnpVjEqTLHqzrb8WmhsTKKwmQPo5CD7KNyccDK7yMQb7PqEp7AaSNWAj5",
  "key20": "45wuiy3gzA2GTgoswpDvw981qKYaqibNqhcHJTPQT7Kcs181spiJZCJCQigzWbqNYNKWmzGmHvYGnLfZt6GyMA9K",
  "key21": "4dxEXCjPZ2KNCrcAzVg7EZ18qjigL4Cbgy35DXFXjVjGnCnFhRSmXvCRAUjWcTTjAa4SCcSiNoJRxsPexkkuoUeT",
  "key22": "2aZGobJPquCNcR1957YNzed48Phw4rKFqpjS2BdEchiH1ngWuEP2DWBtD6rDh4tgbNetsLcvDRcaYiESJb3QLmxp",
  "key23": "44gPGiqf4iLwyq9bFNnSTc6pdYvwhjYN18jvFDYqmnijUHrCmCMukZP7ZFMF2sjGvHWWay55SxdE3dhrdTohV2ZA",
  "key24": "5A5WRLtqF9aCiuu5nBxVWznufzrdoJmN26oXzzg5MmkF1oHVaXqhMkcoFZ8Jm4RPbm7z9rbTpKLRVHShpYCk4Wj3",
  "key25": "58VfH8NbR4JgrFeY1RtD7Hd6Nfp523iQzTHESizgrKxevbJFZkBEmzFVWhgWjsP6NhCdhZn4t1PesiRtK9oRi3MT",
  "key26": "2Bj91hCnpP1B9st26tFWrzWMEbDvm6xVAWapS5XVTML9cmRWH3G8xsTRDprfXGM1PavqizQaq8Fx9TW9Snth5dnb",
  "key27": "53jo87xE4ZzuCcPy3BnWXn5bt9x7sLh9CJG6oy8KoDcLnzMPGA5ACY4fMY3aSkS9pSPGUL31D2Z9RhHEzLjqfTDi",
  "key28": "3AH12DHVEPGTiCzXxgg5bNajMXKSgosPe5A9ffxjq3WyFycE9ikuuZzYoWkKF8pX33Mkvx6EvPpXhpnsAFB3GLRg",
  "key29": "3e8uMe8VDjuZvAFh5KUagb6duVi8bveEaLxcEFetZLKgiKCDiuNnnuVok9r6urbEtRMuqbLdWTB6RK7VP62r4Z4c",
  "key30": "4SxzdmBdU5neSSH27X5vvbqMqQg5u1y5zbYn2SRtgH5NiMfmFCQcsMP6U3avMC7bViUcVNB8WEjpGxWdGpbBspC6",
  "key31": "iSwLn56TKq6Nd6fgEMX6FgUJzVRRFcSEU3zmjPhyoFzu4hSA2PHH6NT8PegStpdqwGYyPWQUTDkfkoyXq3wmwPG",
  "key32": "2jtUnCr77Dr3AAU5z4zgtYRnSJbHZaFyHFjP5d3X1aJWru1t73ouN7jdowadjEWjs4RdzJDUFJJykeU2zQNqKJgs",
  "key33": "5dXFxcrc9C3xy3ypXrYXgB9JgLzfgTyp7WtWkrQbNzFHHsAxzouYfedP4NeEpPzKDsG5sdn7TXjkB7fx6qe7NKjY",
  "key34": "2vRCPtWqZ2L37o4fxqU6uFMcSF6br6WWDc2NojzChZx46FNe5eRbvFSYoux5b9gUmFtvgheUg3CQbqFQwwds4emk",
  "key35": "2eWHD52Zpph1fcVdQkTJv84UitY9nh4ipFqmTaUUzt7Jp5uGEEKkZtSJhhBwLFFfWnUbxty7wujo8ybv5pnRzpf5",
  "key36": "2yL4jSPrQiNfRhC8Sc9PperXi3VDASBrmwSfz4uNSUkePwZcors6p4VnCMAY1mRzYrcr3gsufwwaNcdPbKv8xjLD",
  "key37": "4bRe7ZwEp2b92nnQ7hP996nkQC7EVgL63hD7eEiiGsJtis9qfc8vzMNhmMdgZxLkraoLVNViVyscsw2iMabNeWcL",
  "key38": "3UPctRRK5YJLvedzgVaGktAhvHx1g8pwsufyH9m9FF4XhdkjSk5jLApym3UyuYQVaTfSrq9ixWMyoNhhPpqQqSam",
  "key39": "5TNF6m8KQMWbTRfKENo2uA3s9ZfgQngzyqwVU4KqHyJqDF8BN5J8m6mv82w8gkdkvVWjAyYz14RL4vDx4exw8naa",
  "key40": "5BCqeXwRRokdZCecM4Roek9vRNu8frfnpzCksQcLmZMUKVptJEDFubYrTm4oqPD8Xwox9TyLSvXTDufQQymuQoY3"
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
