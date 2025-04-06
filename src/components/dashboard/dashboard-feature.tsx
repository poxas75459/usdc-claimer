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
    "5Lo1xYGx9G15u4Dmc356DESokGFJZH7SYySJhbaB8qoXNTM5spLPrZicNvzG9DFRoWmHMCxwEHDjP4rhmQvvYoCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ntfUV8tPe3xFe6wchh2SXpdHdd3fdhB2J12dMDQZXfUZnnkoKiCKV3nDwA2MK1mhcQwqTntADnCsQxXPSGszxss",
  "key1": "5vxWJ2PLEodyoeg5XTKK2sTYtkBHvGGW4nfTQ4gZoCtUqT8ABj7XDHWhtbj8MYWk31vqVhFqtG7ZHLS5oTva8MLY",
  "key2": "2QwgADgkcijfVNP7UShmxsUdLVdA79dPNLx2iiPtFbmDj5uiZ7xm8ZEhCaESeaKVRpJi7XrBy5s5adH8Y7gFvT7e",
  "key3": "2Wx2B7C7D2TyC9qWrQwuigrRFvnmeESAq6B7b6ScqxtzNDYXBErDXHzG3kNDxXqR33LWcsvCAUP1qixyN1EHJSpR",
  "key4": "22ZumSu136qXAZYY7j9s2vX4GXuMypyAU2QubVVhEjjuMtjkj6YramYg6EGJP6bqCUeBhojKXXPdEBEydwknHrHc",
  "key5": "vW7728SPvsWSoUaKdxBpCs3KgKhNbm4MD4Ju5KoWoe27Muz2H2SHakTc4sZQ5dx9UZ8iiw4LQyZcSmiMTw3rmbW",
  "key6": "NzM1ZDajX4bqhjwRY3TAq1TN4Y15r4dmfopmoyq4Bq8EqDf8cnB9CLxhdMCoriVRv64Pn2Jh2nxptgwAZgLy94p",
  "key7": "2Nda7BiKHQgAR6oWwLZVG4wvnk4TKmpgBs5Yn2UB8wAVC429iNgnGX4jjKsfoZaDpeyHWpwNGWzWQfggpptVYBZB",
  "key8": "3pTChHn9Wb7PvPdB7bstSTzMDBvyw7HQWR9si8X8yYLfVXXmUvn4qjzUMQhwYQYfLEzdmN9MymX4RpwjDbc4D8fk",
  "key9": "3XvpBkgxuVmEBU3mNZvJ8BNU8BSamUJyhz6Sp6RoD1c7AnhHjP1kHsBZbCU2kLZ3wgNC4pie8ovS72WZsE5Q2Cz1",
  "key10": "Q6WHk9BMD6g6cuYrFd1gjQUi65LSfRfhgHmsNbRuiQ3KiDXdLAp2ghrUZsrhs8zxDqU43EKcbjFugmhkj3V34iv",
  "key11": "5mRoNU9xNijJ7NcZds59STXhMfDgQSy7fhdmNP49x3m7CMzuQqCAw8bG6DKdwTQi7gZGhQfqb1YZ1qg9BUyGyWQm",
  "key12": "hQtxn36xZvbjNVBtsnAqZpwrQcpCPwPw746EVhH77x8VG1cQkPRgA4YfWj4ASMfRvEs2Lq4WWC1oC3qkffyGbPq",
  "key13": "2YeECE1d4acn81GT7vXFevQ23M6TuSf5HGsqThyUTnUEwcx9gqFsD1ByV8zYZ7CMckAupfVNRw8itJEnzKaK18QS",
  "key14": "5GyKi8DFwE5YEFm4DyxtW98k2aRGPWBhXxjn45kfmvcGSfnUEDss7nHgNHhgmGZz4XxCi8fvrtWPzCUH3BHUpJ3A",
  "key15": "4uWYun4Jz854Pq76KARBVKrYzfvWUS5Sgm2Lkev45BYTdGZyRopPCTHrFKxPFR8pPqggWHmg6cqEvHKL7wJLcyzj",
  "key16": "2VRCSPwCCvhYLwL4ckm76ndTsxSHdaHxqAEYkvSUhy3ZL5aywNMZEr5C97oaq6woPTyVZwjNMDgv4YtsiMwAXGfn",
  "key17": "5iMnQ1zUGC9WM8aKX78VGe6APnBuuknxVUNATYdFC6F7ryJLig8x5SLDagGYLy9F15SrkJdB14EBWGFqimHUsUtC",
  "key18": "5cKXQ48eBESZEPHGvwGf9ot2YLBbe1iRRcuJ6tjFJJvLkjjsSdgwkrhCDMi2xUeofNodccxBt9WVL8TEUFrDKWZV",
  "key19": "3BxXeBdJD3VsjX6KqTXKnUwvTe82QGLbtPbsSJQpbMK7EDqarGS9n3A3pivrSNLxEzVuXPDa6WR1iuXiBZThjTj3",
  "key20": "3wb8Ge8EWnK8BwXtSG4qMEJyXJpjxK6LjHFdTU8xzoqFJqvow4hPxgDzhiHV9BPFS8LYXxSaw8FGsYS4wz5We3e8",
  "key21": "3sdGomPUtix2oUxki1GiNUtfuyaZNw8HpMaxkVjhNb6ErqmeHNDs5L8KgNALfsurBNV445ZK5dbUoj8C27pdUw1N",
  "key22": "e5gxGSgZpAbaRGVrm7GUpHQ7NjLuhnSDHLB7m4uEGJBh8vDBWkdasiG6icfGZm9FNW4SyWeVC19ZZvpUs4JhLEr",
  "key23": "U3xgrcB9oJkfrP5JxxpTfVejgDhx7tuAtdyq7tTjp8Pk9KvyFM8gye5e4vy7Hw9pHvYrfkVq8DH8ck24EMx3Py8",
  "key24": "2c4pr9NpjgPNTQEtZd8zW576Jvn2Yf2n3eFLe45fbnzJ5uB5uBa3vMGCwF7tSAm92uhHvva7VCmWDu4MQo8mEgrw",
  "key25": "3p6i1HsJkusHQ2LGYTnr6HwnozdMhNHvGerryDC1d7gfuTDTsaxJdDAoHjPMj48k6sYmMpN6qdh2BiWiJqCcJzgt",
  "key26": "2Tc2wmA1nwtU2PcZZAuj54WDmC91jdTJwBWPdGdcYMPkpKA4BV4Z3vJyLAHHNuLNoTHQ36Ji4rZ4xT8tcf2i72i",
  "key27": "51kvw1ruDGwNezeZCQQzSWxD8KiYf2UYvi75aWpjaRVxekcJMLjUHfBUANvwC4Mi7pkcMvpJJgp6i8KgdatuJbco",
  "key28": "5M2Cm2pxzqwPrteNyANwLpSekuqgSsRy9FZhqMDuUKuBNLyvc2G23LYoSeE5sWApS59WvjWnTsGXsXUEbRPXtAZw",
  "key29": "5Xxfjondpefvsmoess1PhQJPXKzwFsUXJQhwGgnReWQzepPEA3mzbuBS5U2BDirndbySDDtbWSyUSAJL8nWXxMSk",
  "key30": "5RXJzmYiB1igGqvk3PuC5ATGP5wyExQa99tAzAjzwENSffzkcW25brdAHBXw99CVNoMr89RpzjwhSwWD8SdLDkJQ",
  "key31": "2cQFUfkK3Lp3536czWWre3qoELtqSw6zktL6KCeXYNd8ZvwjfWBY1oCDEQumBi8GGjPhC7Ces9BZSjdUggj3WsDS"
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
