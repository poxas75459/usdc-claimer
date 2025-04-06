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
    "2KCr68rhkLborrzpcQqXQ5foKyDDtf9HeDHFj5yxvwDERmwJGcZGyTAkSvBBwRrV6erCePFpkZ6qdHEfNrpHSxV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YubLc7TgSQmQHYUuD3VEfvrT4f24pw8tWj5LBwJmxwJXLCogdK6WcdVftU6PH1UsTKDorGVHa1Dpi6ePgUFGFDV",
  "key1": "2JzGQQN7npz2vzXyTZb5sPZJNGVZdYHvUgFEjoZdpwXVXjpfD9mdXMS9EYfpoiyo7YVzZjrNixMxd6iDcVdYkbMt",
  "key2": "5G8UK33LhGvUhSmTVDfXfiSRsEDicyPDXNEJy1xhgn3EyZ5JHqoLaUscEo7foomtLwo8H38xuotFW9Eqd3tXkV9c",
  "key3": "4fiEkobUiQBt2bCnrZnae8Wana9EPYN1kyU56LUr8UtrRv81QiFGmMWtqXFC9UxkS2nD4j7BUkwGnPnFGiD5dKTa",
  "key4": "9JBE8ELzGGtjbhQ5uFDY4hmcSk78JZ6yiPovM3Afs8PPZgreGVZ7Vf4sNR1nJwu8TiUSsRXYhQovUXpEZ5EwGLJ",
  "key5": "281JDMCWy9nHvSPkqJfqnz3Xd7rBtJcaES81ZZVeSRC832oKPaNRJzHMfCm4Tb8ifmHRzJz48yQE4GnERgUWxAVe",
  "key6": "5kqMvZjmMwM7e3gkFTHdX5Q3cseFVnDVVEV6fGBVnVRQTERqXEWssQMY7nJCi98T8EZwLnyYhCXMQgEGQ9VyETxu",
  "key7": "62E26fuUTAEwEWDbYWn3UthaPQSaUAWYfsPs4pH7Dx1PY2LqMNDTdxT7qsgqPyv32EcnxXKYt63ufiB87Bw2VyMi",
  "key8": "5tkAExTMnCrnRLfZm2sfDKpkd2jvpQmG9tKGhdPYkmXY28wjB6eE41VUAYP16GjER1vQYM2naCDEPxwn5RUCDdPf",
  "key9": "49LXviHCALNzuzmn2bfiBh4CbELUTaGr7tZEsDpVURcvUYBEgxkGdSiEV76CZp7YghkNq8ow33buVqXVgDkbHMQF",
  "key10": "2xqGXo2vAGNBwhWD65t69cfT8XV1u5vqYALd4JAfsQYevB3HNzqCphnfm1Hdc9nAMvfYvi8QSm2N6GzicWGKMvk2",
  "key11": "2tvTDMZJ2PU7ktEgGEQqmJr3n8B4ciZ6kZ1U4ukURMN4Q5VPLh8nPVTwnsnvDc5nbfV4AxV5QPw64Ee1Yu3SB7mQ",
  "key12": "PDSciKNkEYFpVzseL2Tm5X676HANJdjkqGZD6udYsBGsQoYx5J4AwHkiw2Suq4q1weXaWFJ69Fz2Kr3xUq3vZgU",
  "key13": "3A5ZYy3RFdxXWb8NiEJDoEKf9ZtiF281pDHwivMi8hbhshk2b9u3JQaQaBEnLw5WWsgt9FPcyd3ZBNNb1WaizY2y",
  "key14": "n3dE2Dm3gowpi4RTdM5pQqdGmSRif2gMNGoWptK9DgisC8pbzmVb3rntXKvJbqS6woVsaUAPn6Z3mPxBmT8pQBG",
  "key15": "qpxfbJBofyMxigMaRc27eXDN9er3fL8FLizaB4rqqFM8Fr8gtKueT56qbyHwhEatTdrpZXS3RuFANTypnWbsnAj",
  "key16": "3G14HCtp4SWSPXizKszv9XkEfnuN9ZgvwcXocbGVYo6hcW8aW8XyEK9fB26RPpCjDBcUUGdm1ZSDYSNznToe1Fpa",
  "key17": "5fujf1paoDsPyZXNAok168bJyFdFd6RqWeYXcLmnr1KDUp8VW5Bb2pkGQ86XbQu55HNviRvNK1iMrVsSU1WiDfvH",
  "key18": "55ZWxpb2rjzXF1UxbszACgaKb7FPRoVrxMKPLqna5T329N8udbCwb6xVNRQBBYWn3h3UDAYtppqiEvcApqPE3xuM",
  "key19": "2MHdkBofzoKoPLWuMmFfM4KLc86NkRpf8tJ9jT7WYqQAw5SpdqHZGPoUyDHSA3TetTCt5KK4T5A3jUzoVdtxJGER",
  "key20": "3zd2RocMGgwdWPuV1ERQTZ8VCayECieZDE3e4H1zxs9HHZpc32BFLhL1agRcop1DV9pjC2NWVjLRDnjbGcw42csg",
  "key21": "2kZ8t9PDjYBYqFWeRLG82KHZ9xaC4nBxYNUcgBwHt5QVMTZ4pBZqiaProXNKuxCtidtk8cNB2dDcQgQ1N7PBpYjD",
  "key22": "bMPxEvbSfdwTXUwnHH4gRovPH5Ee5fSXFg1mDD3kwWDAiwsPLo2RacpivLAWUViBJAsrRMeCzn5YU6TqLi9VB5f",
  "key23": "2pkE2UboYhyoHnCT9tY85cuRX6iDfUqzwRhCYnEHAcW34ssZiniZW6sHqDkEBq8fJUDMKtzxZqHjK8zUHphoACMa",
  "key24": "Y23PuZpMdiH8bpkyoUPyFxprYsnc3T6xHCzHfMGVqLv7QAmxws9WRSqep1MVEwHoLc1Jao6rdak5XPC3bRT75iA",
  "key25": "DQai6agKr3gTHNZe8dfEHkCpN1Aye2bjvmCvibAfZMcQqjmsQWFuyJXNPmhtW1Q6kVGudbHmoqcfU4GtzrkFkJp",
  "key26": "2g65F4oqiCdDmXtxWiGBomVHcvQchHmp6bXiM4jkkPGugHWixi7xuS4mL1J3HtmUw79W3r9sA3aah25X4sZNSLce",
  "key27": "5JacGHLRzCP2M3guyM68v2PPPX5YKrVbsmtbK7fBECcD8zGMGQq6BYBLDjY73wTXPb8XRReBa39hJiLZcf6aXve",
  "key28": "4dCcR7aTdoX47589yi8tj8n6mzwvd3DbcCqkcsAMvvWzcofFJkGGq5yQM8zfpVA49dr1AiFEhPaSKyGkZepyDUtS",
  "key29": "2MqyAtBYh2dV4RbvJCZyD74x8uvGphUX6BAFxHTQ1KSeavPsdYBCKAX1HxB8VB9WWMR6TKZXDxbVanG9chVoQ4rt",
  "key30": "5r9511s2yFqmmgfV2oz2T8YgQkfbvUBo4w7UNwqzQ7YRH389eNCFTnUnNkjsr8jEKg1B6ngMgbPridHuZ3FJxie9",
  "key31": "3XdRRqAqCh8JjqmXQjFRTiB3F3wdeaHUQTyVt5sisk7BokvsejMooQvujUEeUWC1reYQ2PLJdoRpFTU52W16sBg8",
  "key32": "4NnBueNtem5GVWbCmPzF56EsuCEBwMizRDrf7y3oGGmdCNrC3hKGVrnULWZZQBvJS5e3rEc5sfDLftoqt32fgyTk",
  "key33": "3wbxUEypLZLKaqvFG11yc3FzGQEHHctPBXUX7PVArptxKZ3iE1cyLSTXrfzQxXiCPGvF26YAeeQLA65tPkb5UJmy",
  "key34": "4gDL9WrCR8C36VLaHU6NpzpCoQj7WWwUtTSkxFKuRuqQ3c3vcqnwiJfdypRNzZmcSthfSnUSmg2fQSTZqqzHmMQq",
  "key35": "Mdnw3kSVjZntETxACs4xM6vDBRnYWJYXf3SrKFUuwUJpZjzGhu27h2SqxzR1GAXp3axqJZT4iuA2dkqMNbryM8H",
  "key36": "658Q58b6KZmWQdWuY9ByibNwYvygUZ3GhCxhBZakfsoNhNA3Ao3GHoixuGkouVBwka3Hv6sGVv7r4yxxn6sVRnzi",
  "key37": "5LxJXwnMwURJNPk8WDmWVcPBfVdBv23rEqYdaBFzXnh83vRfSm6xd65KqoCmd73WhcsYxDDPhRZGpfWxrX1HKiYu",
  "key38": "3EzdwonGk8cByrFCyxxe8HFjWYhrxHeQBjzHc4UzrXspJhYWtFDebWwSjWj6v6cRvNWw65xJ6ZiazHgUDvE3zKCZ",
  "key39": "4XBnBbZH1Tc5q4FvgkJUNk3bYF7tToUx57Yzst87pyMoCDhcFdPnM9rjv7Sg5T769Jh8rjTW5TEc3yLssmRQfcCz",
  "key40": "dg1A1fcHZNjNg2hwo9Mw8gq1G4uHrQrmJwHko9P5g3btF3iVrSkFexvXXgPhMu6ry7p5weCm4fXDcSachMbYqYd",
  "key41": "4d3CV91mxnotGvrvpCiKyUfiFY5h9KUDTjnW4YJCvLEgFDH8U32CPV31H8cM7rwVMGgURmUG9wETCYgts7E1ueNd",
  "key42": "3zu9sgmW1ye8dKuKSjFuJrpmyopmj4wYFdcAp1Ag3m37kw8utZjWYVDpg6Tv1nfS5c8cv2j1isrWtkeW9R6tpeCK",
  "key43": "3zgtuc6nb7HSzdrxAic1AB9wGthCN9fmDdhP9nDYeN5MMPgoc2SgFMDxLLTRqDgSyuz9MGhJfFY1i1U9T5z4o2xu",
  "key44": "5v35kqRf3UoUu4JPToVeDUi9LahDR2zqcLPN9nywk8UyFGtftRJW2hNg5LY45BePk9ths752zAzpgN6HpMrwDYYR",
  "key45": "2EzDJpL8fZDc87jLNL5qd78eZmFdqXKwd71wAvHriW2gmQoZwiXUqyohYdnvZkNrXVrwHSxrMU1cqphK1iddZ7hD",
  "key46": "3QfAVeb2gzxexvLfxVAk9Hmgu52L4L93u88W8PnMiTsDNTp9ZZUsfteybxFfRtHpu6wsmE5CcjcPQr9uBF4JxhbU",
  "key47": "3xRuzqRyDwiWb5MPeFjjtVaAkAgLFq2Nxf72bH4g1yuArWpERK2uq1FHXKwNGGyywVqXbNaPpeUPPyox8MBYNaSB",
  "key48": "2ud2cgXa21zY54x3xMXZFV7zTkmrS28FMqLtF62P7gquampNW5oLUJbtwQzTEDPKSpcSqL538vBRo3XLdeKiNpCN",
  "key49": "2FXLKoXsqb2ipwcijyWTaxnurWqF7Wvpi1udRoUzxLNkNCvoW99RPRMeesRMacDZwfBTTxVCqxMXpLPdusYuGXhD"
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
