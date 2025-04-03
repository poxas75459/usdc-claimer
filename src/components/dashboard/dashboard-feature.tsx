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
    "5yFPrtayvE84KUAmWk6R7BzAWPrnLxb8w8cmizyMMmMKUnjx3ekmwXRMGMjmSwbAUZQduLo5Vjgurp2hA2tG65Jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BmPxXdAMXDBbG3hmu1Xdi1DsFV1CR7PDFEfSnd1JYnmtypKEDQbMencgNkTkcjyzJGfBX7378kFD7KaRw3bNC4N",
  "key1": "5E7KihtMANkWnoVd3yLw9wpRxzj7CEWnmd9DkRhNocjeoNSy3cJH1BMvvbKT1F76qMjfAzwf9xirTbRo9xSaGXyM",
  "key2": "BZ1NAJR1HLmXfW6MF76jpRCYrV32CQbcsg4q5YewzVTuWQjZNbMTDtXkmxhyMBQyH22mVY3RzBuJnq8g5G8uCz8",
  "key3": "2X1BtemvAR6cUbmLhdRmtNDTWHeAH9GjUUv7XWn1BLy9swpxuZiEuCNtPRuUijZE6HwRBThcc31h5xbLG4xs4Abb",
  "key4": "3tcYupdhZoELGijyueJizDrV5kqQJDShXAMJHSKfqsV2Gbju8WhPn3gSjaApLZaZEbyhwPn77SRGHZYGeS3YesTf",
  "key5": "5DEWpCfu1JodU6178v2Csf3NRkSsWbTFpgYf6bv4iZY34XbKBSm44GWoZd2U4VPJ4ZiFe8Xowb8CSHk2JuwR6VGG",
  "key6": "4XQQU43hRvVeRBCxVbAGcmFGa5a5r6r4ewrSaWx2R3urXziR4RuzSNpBhdJr4Wht2yEzXoJm53JuaVfvK3Uj4ihw",
  "key7": "5aUZoztSwcVx33Wbsj67EGtZVaSATk3ZvJAVxaa3nY4wrphSGiCg4aSEnV5Y96BNkLTutwdRR3jf24Uh89fPShaz",
  "key8": "272CLVdK9nGH6vHPVM7KGZnx3M7NY1FNVBZCpW4qPmkuWzEK76qnLRTMo4xVaqvs9Diee8cUiLDJgBkPHseGhFAi",
  "key9": "66tW6XvyPEfFvfhtwazrZTGH1tXXCW8hip8CmULqmN8Rux7XqatcEEoqxFjrLEd9RjbG6U2FvxDCQtkphvsWffiu",
  "key10": "3Gir67xHuQC6bYM2NmD1vfjCbHnvbT9S4oanJLG8aSYNtvQvoCeMZV6feS2BRzDdz3iDBpNeYvQciMGDLHZJysKZ",
  "key11": "5u3m53yBJAsxsxBtbs5UkZScLXLFmhSvjMAFzjsTzaq4K8SCcptY4K2MHQdwVzPSvFgXdncrUNmwxaGFJgMhRDbK",
  "key12": "2Dy5tzhBnu1PuWEcfUJE7XRN735VQKDiAAbSTktBZEysnzpyiLQ94DCnwdm54n5Us3ftu1YbMeeTBN1JPucnZhLa",
  "key13": "3V7u4tZsyzWixXcGB5jsAUk4RpqoKH4HUmLhmai7mEwuyRGjfJCzWJf3t2QiuyroMJQ4waXjA7XRMsiadHmpyuzo",
  "key14": "3iAoxadjAWdDCeXJQoUkzBZLoL4rbrrksU2gMAy4TLviiyxUWxJ3cXncMBKZaSjcv9fHERPFFr7MKWAMMb3W4ybk",
  "key15": "2gNwiPHEQLn7FzoYU64WmWmf2jyB4va8xhPy2tMpw5p4AJj9cydcSYx9QFH7XBhQm1haEDcXQDeBGQr6N5pU8TLb",
  "key16": "4jP5XEMZpVxLQRuCQBRoQvnL1Kbp9eSNsRzSJKdC2hWxihspZQBsg5tmJTaBwZuT1vYDTUoiSjfrJ3i4VDZLWaEV",
  "key17": "2hMMj59zDW6RYVk1A8dE654o6tAcXzarL84SMzNRd11qSwu87LSFVaMD4KYW8nPoKEFkwNWGBoT33sXCvvdoKZkQ",
  "key18": "2BH8MdAEdmnNzXShYogp2aTSMoyFuknNfRZoexatzijydCoyRsuXKZugiqadZP3W23S4CkqssojtyJEtNjJeZvkE",
  "key19": "2bzWycERVnCjdSd5eSAptRTpLsckZVJ5MUUjGnWNU188EHTCcz834X4NS8RYxuUbGEtf6NggCJ54PzWnG6prsptD",
  "key20": "28Rrv1HHY33STVXTE7x3V5UrCAhYFgdpT5sbaR3ymVZjDdHce9ceKESLvpEyiGsuvSqd8dGqej7SUkMgZkAG3GFQ",
  "key21": "5DVZKe2o1QjCBBM67mGkZGFTKVFrAjJpBDozg7JuuDLjr6KT4jw7zxCPcRQ9dX1Xd7tCBJfJYKDWx28iLfK8sqUv",
  "key22": "2RVnhnDdosc9F1HfC4MiZcTmKyso6z6WDF7Y2Ab7Dj8gpKDv62hBcyZS3L56nEKaVPoxhAnKTTYhM6jzw2nWhUZp",
  "key23": "oMzGPyRpdsSmE4XpWJzpicUf5ZVnRVhttxvpeMyVBBbCvZwmFkcTBAZGZqSktqi2dThBfM6ZtzXEzDDE8rZ8aDV",
  "key24": "5Jwmh5rUCMHSc3RHviPe8ayu9wcwGWGidYawtgWx5G1s625nbMz682W614hz34rHk4BMqdDWkPNeDGiHnTQvdHeC",
  "key25": "2FuGqYb5zna1biECDqJ9PEPPJAVpwCSPgycSMLPNBMaTizd8c8eFz4WNvVaTLoogswsA4mAHHAg6eQhasJhsdNe8",
  "key26": "Z3jHN4gsMUgGETeM9vAXqJ2xQpKAVQVcDvjXFQHNzqPhuW4GY6tuheTFL6W7dLJ26L4JeymAagGnRvZcPKu6DbS",
  "key27": "66aTaad1qufSdjF2E7WkVkx8ZagV2uQNsxTU3vibaKtKLxtBBPrwwDDfyJ7sAABuyaQFjjDmU2UuzMWaQ2bYZYkt",
  "key28": "31JEUQu1ombxGJ4AAp4h7n4pmfcYdgvomqXGqwzM8fYEhbNpCsCQ8cZZdBF73uwGundfg8ZPXva9VKHdwprXCV3j",
  "key29": "vcddoyPToDwNDHkg4UiUXtwrU8sEfLyaLuofDR3hk8epCRr8d29MZEDS39igxzzGPvPnS3XzDTLgzKvq9qnvwnm",
  "key30": "46Q6gwQNjHxKCTysEYVsW2Vk6wQv2JTEQhdNFiqwCN1VWTGfKqEk8GzfLdgQ67tPfq1UjEwtferxREbTQ4TTeVTJ"
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
