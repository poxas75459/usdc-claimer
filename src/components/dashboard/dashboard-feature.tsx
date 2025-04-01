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
    "3w86QjMpLUcG6fEaVmTQXFdQusrRPditgzYjMRf6QVtzcPFcjho29njmFKxxQzGkxYRkasjgDFkQUxvYfEEXjJXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ooqE9GW84eLUNzMYg4se1CMM4X5xJc74PVmEhvY83SMPxQDLvfMSQ8gNMwyb8U8zaKeyPScCEuivEJG9RQvjRS7",
  "key1": "vpi4KwXrCFjt57NNBUPjd5qhpY5CfBEk9seERRJy41DGbki8YPPumDK1nispEFaRm8cFgVntP1DhTdqbf7Cw59v",
  "key2": "5SkGzXzZTL47xyU5UvUwD2KG7BcDSmKS7LhYQWCSvFRCDxmQjXC67vKxYQbT7i9zt71yb8pmemqkj1YqyXWTZv5g",
  "key3": "3Q3Pqs3drnyPzN2XGwRrsqfhnjspDqpZ2P1dPZQbZnrVqVpaSTpPHpK5rXHsEgYB6MCGixv39hptg3zzeuZrhQJe",
  "key4": "2hN4jhYEhzz8ygkBL2nGBgMHKtAAQ3pqiH76fCf25YQDoQKsu88edcDqE5SXn84j37wWkYp4tXp6X9ocgwU523JA",
  "key5": "5Hv2spDd2gwsHYR1DLY8HmKEqEwF7Ztj3BdMU2XpGrJ1SeopovzyABjqs3G6uzD5M9mActWBhhxeanFSA3ePXNvV",
  "key6": "5bedF5z52YqnFfmtXGbkLenSfW74DmFu2FD7DJfd1heBzsjCDANhgkJZ1PyDzAoRwoEAFGsDLR8ER5mcq438FqzS",
  "key7": "3nRJLk3kiUbZ74ZGjtr6cejvX1eXH1QEBVCMVtruJagop4H74LGPyZaXFQTWA7YDn2Tprnx1xoiodfBe1BCiCDQD",
  "key8": "3Z39j8f3LwMsYGdoKJ3vWqRhFVSAoWS1HWGU6P8962mQWe4QaHQYNLy3Z43nRan5NtqzbHo6mFkT91ZNYcLyyVxZ",
  "key9": "5uxuQpx78LZdnnMqtWpaXpdNcsS2SkNmxa8nMNydGVtWvMN8BG4ne5uJnfHMbePxsnEALfSrN3CYHgduNc4R59D5",
  "key10": "2SecmrhpVZU9FjfuuRtGe4gpFWy3pLbpoXrpWutAdaznHgJoMhXRvWSt4hYCaXoXPqSZdXrLosMt29rRfKn629BR",
  "key11": "4g7xZJK28Rv7rn9PAURdjTaMJwv7UYxDwBQsCyziAu1GUmBryFFKszjsse79oXVnijZooPMtQw9xfVsdLkHL4Sgc",
  "key12": "4hH32NYz31yqnn2MUscz5uhagGUrUgeeriqWiUWq5N9SPnv72nZGccFKWqKeJvdhLQguw4KgacKRP1fnpYssLRRC",
  "key13": "5LkFwSX7jY86oQtXZU4zpEZtPQicm6JJ8Dx7CJ1eVG88d25u4mLPzvxoJwbdegBcsE6QSubYcTpCUB7KFbefV5zr",
  "key14": "2L52FxSA5EYk3gBTnYtMZaBdWJYwDpoqxEYceKuX38SbUsKyEbdMqsMAdoWAK2yEv1nsbfFbGNUTJCT1oL1zDpUN",
  "key15": "4fvf3dm7VnGwN3kaDs7Njis5YjnFxRb5vAmT4U8KWht2vA4i1ufHT3DSgMoqfaGdBo8kcAsnuiP3h6r4rTduhECi",
  "key16": "5RuDmwZcLbVyMzQtSXkDiFYKCXLhnfRmeXFe2JmivttQHXzsTYJpUBhDoQwj9Bsah2YSPi2ymufpPRr7w7qii7hy",
  "key17": "3vrp9U84kFCpwmdLU7jEhmNwfJh9PBCU4jogYBgHpwCpsb2zeP2EBvfPwtFKLLRsnkfueo4s3HGBRtB2VXgxUaQ3",
  "key18": "XkmhynRnUSJuSw9Hh5dUSJfCuF6Jk2K23WMeFA7QVJcuHQ3oW4a1gYeVtPeRyrnsoy3zybbstXQBHfDNZTLgJzG",
  "key19": "4NTongXJUMmsB8Mgibq1Pg242Y3JWe9Anz3zACC93TXjc8FzM2RHJsf5cd5D9bYPfcNdfskhbyvT6tt12oGBv4NE",
  "key20": "5LSuK859GFCf3ScHDE7BqQyPu8C95QTFKadZxKUNipgW6bshZQqngBEKgcSDFERZzovKkYiL4yvPfkmmeK8GuP8Y",
  "key21": "CjY5oPXpmDEja8RFySVxGuNVQVPnqvxy3iA4hqXAFyNC3AmHKWdLgD35b4QdcqnnvS3UXtV53LjhkpbPr9D9ZKw",
  "key22": "5cDmTYXUskGCmkDC6xZKMXW8jQJp96D2NAdCGEZQsUqCu76y658z8yDQpkXUYX9PwgKhGbkq9p7DGuuXXPsui7E5",
  "key23": "5FKdQxV25cWaWgF8ZnkXNZ63mFURFsFjBPu28BUpHL4yv554KS1W6Xfev5N6YADyqjLXpbWMKzDuDfyscP423VND",
  "key24": "4QAvYheTyusfJn19wcsFKsas6S4x1dzSd6ehLRYqyMVCTtXcMXJcVNxfYD7mhkPW9ML2RNAPjoZysKLYdQ7aLr68",
  "key25": "6z2gGSdwE7GWTJy18Ko53PQMaaiN1isyr96k5cMFiJ91eLDhp27sUqkFoVCQHKacRim4Ym2jSSA2PSNC5qKzqsa",
  "key26": "5J1SrSfieUhqg9DSBXAXykVJKy6zpAHWCsKgmRTE7upx22a1WcVP9rFQ4wBqgpATN6sKN4W7xFd4zzsomTZTgLqX",
  "key27": "2Fzpn3P5xL1KXsRZV2axr26vh7GKLtSzNp5RmYL2zU7F7t9GhrZhKrGVfT5TkGykcwPCaf4si9zBspqmMk7SbMmm",
  "key28": "mQZZqtwvvjN2zdB6N7NmmdHGiL1T2G5wHYryoobvtwUrFD8imFoKHoZiRiM7gfJminLtuxZXBnrGLYoM5fy7JrD",
  "key29": "2H3qmXbJYaG6hxmWi5B9HCPUfFezKvKLz6nwznPhTDJ24Wq4LGAP1u8mSLT42jWDMPkevY1NJkh8bPXNWoe9Btkk",
  "key30": "HsHqQBuzJbBdwQmUVU7gPXWiDetKoWnwqSR3U9fSKnfd6JGb54dyUSMXAPD7Su6wosSn3Lj4pBE48nM8XEirW4h",
  "key31": "2HpZDYRkSwYnxK6cxgeVPz9pMTMAK3K68WaQKd5vT4NpHaGtRYNh5qcKW9DFKL2THiKXoVdhRTFY9rVBSS9Fkbv1",
  "key32": "5DcwKBC16xSqJKVTM3AuqjgeDC4QvFTZLRbkaJ8htjku2uqXnQ78R5VVyudk1P7Pf2WwSwZvbBzWUmmfacBd7G6Z",
  "key33": "5HuaBga4UpaR5oJaaBJJ4JMKRSvpaXrZ8iujfYFvCE1mcUGd14kiMRmc6p9VESrtaVaBmJrP7LrpELS6PAv9K8tE",
  "key34": "2gyR18yJCE9Rs5z8aJhiGwxduPuzMnzqgwKXwT1oKm5E8zRMnoA8USCf2jKwSYMq5xvQmf2M8jv4eiveSePd4TRp",
  "key35": "2YgpMyMr5w94qWTkR3DBV4ZVMAkyvEjYMKW1gDaHkB22E6miuJDYkxCS1Xn2caJuVMCNHQXTpPU49P2HbfF7uyMn",
  "key36": "pm138WnC4PRoLUxyaNznRufk7mU4Xxv9oeunVXrQfrAJ7aSKjyrDEz5DfR4FtB2pQFhD1nkPxzKGo4bpWxwk71x",
  "key37": "SEFD5Te4GnGeYHDsFdLeDmdeYVDZt4u7J1o1btWWkiVPhQ7fQwgaJiNBPWt7C87f1uJ6sfZhMRntPRVQnw3UrZ7",
  "key38": "KGF1DqU8HGSZPE12VNPq1obGUjqngCeirp5w2YAc2bhTTXLWE1DNPbC8Yumyxhu5heVfkHviV6NrpsSm7aZZtjq",
  "key39": "5G4kpcLNoQrJwDYWBwN11iqp3aVWTH78ubGfRNBdSWyWb7Vnfi46obp8GBnwRVBkPB71wnAzX8MNSnto5QtFZu3n",
  "key40": "3HydNDU6UkjA8jD5AdjEX2HiAdMHFx1TV9rJUhdt61yz1NPXTN1vUPkJhw8EhYMz7cSYpArHteux4LXCerhKFD4D",
  "key41": "5mTugWww65tngKTCCyXizKqVevYbGgTNAUikLZRQejWD5nXA2aKon1GnEUvC76NpXqSMkfz97VNxWM9NWSmXAFQv",
  "key42": "36Q4k5Emis2EiViTe87hMeU6Lr4PQy8xYGfzdwD3MgA7xKYfkazT9zpyfynpFtiSEYpWvPbMYXLDS2rDWE9JKKcf",
  "key43": "2duLzcRf1E9qPcu5BuzgbJbTagRUvG4BFMUdT5NgGd4jzR7S6rGmrGjhr8AQojA8MteJHx1vAmjpJEUMNikGChBx",
  "key44": "4CB8SJduxTWZio27DHVDCDwbYeC3jeLpVsKZfeSs1btitRhEEm6uHuQNvEWngubieB8kf8Wjj9RhcyHuaQfPQ7Vz",
  "key45": "21xmRcqxspUWDKM9L3oqt2GkyY1Vr71nq61TXBhCYgz3vNFx31sBVYnyqhs6cvDBc2QQv3yFiM7QWt7kcKuQQZEe",
  "key46": "4jNwG9YvtQhJCrz77RkPEwRihBgqn6nDor8JUfU95vsdy243oJpUKpn79P68fPJsvSUTqkNQzenK3yxPPJ2QS6FQ",
  "key47": "2ZjhRRRjyu9bNr79t5eVFVksAjCecaGTE8dQ6Hyvh3ouBzKqerZJt8ysMb2B3mov2NtiN67pnd2gYzBRi7ZrjaPd"
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
