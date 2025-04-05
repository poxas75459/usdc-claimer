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
    "k983mioDdx4eSKS18ujBhrCjqQcVP8vzzUsoaYRt7zMMbqWxEVrAoG9w2vdJz6LvenAaTETLqZfqD8KHvXSrgZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PvX1me43rdHscgMkKGEA14xxAddKD2MfWH55sG37tXcZoZofX214TN2GEkUqxg2K8TamhhXKUwJVnGS6jykuswV",
  "key1": "5SubHJG39C4njemvt6cA7VxyRKpHmjTovknxq2KwQiA6D4t16PMpeAN2PRf7LmKcwcfXXun18rUXXyCiYePGJvby",
  "key2": "679mZWy4aMdjxRWw54ifhu46qPJ7q6YMVVGs1brLRUGJkQi4ZRzTJFQddGNH7ohK2eJUxKmYmRoqfpogBsPuML3X",
  "key3": "4vpKzXANtjuWn4vxPwqs1L7pAkh8DJYKtcB9mRAT9P2HCgUwHaNbvDtyLGEP6bPpfuUjSU1bYZKERXPv9sWNDzmt",
  "key4": "431jszbFzMWmkN9FXcWZentymTJ1FdJJxsMTiFvUo1eY3tvpd87CDkW2DNiDWhuAQf1sR9tC8c1X5ZtVnGcDLoj3",
  "key5": "4pUzNyD9hCbGzii2jMzTCHHJ8Jas1YqbXjwjSbVsPpw2bJLcUP2EiVggFTKa3vCXmdyZCgbp7T97ELfs3wxufKdY",
  "key6": "3JdMZuSnGB3E8tpNkwZTTZ3mSUYC7NWNCWefNxWvEXEaAfdHnNwCqKAveWjQsjrxVa77TKQsY6dxrQtBSTNqhwn7",
  "key7": "3qQFpSgPTvFUxuLEZwJzB2xkyZ9NDGh7qQxouakwBptMidTG5bxWSxW7TfyVjryHaxVYoNqMfE8Tmx5SVofRFt7Y",
  "key8": "4dNAeVNdTyAP2nTcjPSL1E2eMTuHcqRPxdDRGCH9CYFxrqnrTaKFkNPQ5xgmtq89nXALpWycSPNm3SorfDhdTr1j",
  "key9": "2NBsT5y8LhXLqHAVXmbJASnHQqwK9FjEPLCDLByBxti2Rr2YwYaQBzmf7x8YtwmAmnDESafA1bFZwUVKd9aGt1ut",
  "key10": "2BGQHZvEHuN7v42Qjs7aagjmvLwUffqmuhiagsNPxXBu2JxH98fMgEUreqieUpZr431Gm12z6Spy5EeVFc7Kmnxc",
  "key11": "5MsUaVBsAn2Ls49FMhCRPFmxbQW2WGrQoniiHAUuHtbF4HA8yABMYX7UVgUSSxkYXJ3p466mdYNJFTL5xucEMxKS",
  "key12": "3ppYFvsek7MYY4UU61qhvxgR3bm2UmdYvVUF8y8HHd4EyDs4Y8YBNs1BiZxA9yCHRvZYWAoX3Gkq2RNh5wB424eP",
  "key13": "3NgDaJpWdY2DgX9BLg99HT9gFYcUxjinqNm7Hcgknit3ntcQQwKgjQZTJ6n2sVhcTvNPhW1YrqU4uhbSexb5YiSH",
  "key14": "5DF1mLtuYa98gPtywoqvasceRpAbWzQXz2X4a6DjwPbdH5MEHwJgYBCoJTBDhWEkY167zAUi7STrnhef7HC5Zukf",
  "key15": "3d7iniKLZLs4nVLzxQmveJGDTSSrHhKhYaEE3qS1B1n3drDegGUz5GE5UwAMJmk1F1KAoeQpCzqDVnfbepXBE49M",
  "key16": "32VGK7tJFU8pTx44fbLBQ2pKrENHZ8yqHYWLZYeHuSz7emWvkrpB7qWPQKKdSjtuNMgTzZ11CRFHTAXgvcnW1TJF",
  "key17": "3GoQZzDTtaCVAkbDojNmxVWCnUCgCqKLLNhWGkJMTxJpXmPRKwWTJDY8weVmSL5jQ6jvk7L7MpZy5ZWby3Q61GfT",
  "key18": "3yZDEEp2ATR2iszRAc2arGz9TLVFsk4qML7p4BEgYFMznNEzYBremVyiWwovXKLHwjZieLAEJWotWvbWvFZjY95d",
  "key19": "5boZyccZMWjsmrGSK3LP4U6aTQXqR5fq66c2zGbQkEhTRx8WNFtmHLmo51k5gAwiaUCgydiDfLnJHuEy7eE4rSWq",
  "key20": "LnJV56SijkeTdPqeQgHDQQrzZ4cdxvhv9Hu9jiW4XCov1Di9gbAikPXUzALvGHdBi9vJcRx3yC4higuAAx49zUy",
  "key21": "EyjwyVdy7zF6gVsUhGFyXG6CHJYTwZXkEhkdeJVcBrKavw6UpDgAGMZHFvmtxuZss5pXotnefLf5BRQe7SBdtnH",
  "key22": "5aXSTbsaZjpEiSiaLxJPYkp74AB1EUXWT7Tj6QX8NzGm5cXKLnyhGGfYtY7RnnAm7Pecc8eHRvNtUyGh4icZz8wm",
  "key23": "2gftbx67t85CpVuZP5mL1BmqGnJ6HQjSzRD6HSyyt7P9JXpnWBu3HdGBd4kpseRcRPT4AkK7ebZSaRyyHAJL6xd2",
  "key24": "4qAbwzGYV5mb2WbavNWTTE2dDWHHdJC5bfHbMXQm38LWCTRScmzMVQmnUgAo1JvZAEB2fKQY27ks4QJNBjXA11LJ",
  "key25": "5yFfWwQStiKfo2D8PUbcVCf6Y5atcQDd83HwvtJJTiPgysCXLyS9HAov5osAJ4fLiLBGphTutvoD2Quw37EYHDvs",
  "key26": "3do1n1oAGjLridoSHMvMPPQprspoJaBVXDYmmubchWuQZ1ymyGgE1HMJaita7gAhSFjL2YwEYmMy1PFxi7iaotGT",
  "key27": "2TfeAcTNB7DZJFcWEHNKYHd4rXk89eS2rt61kGf1gY3Ki2qrrWqCoHWoAvK2UVfzqMjtdQu1JnztqSPWmNYPDMBR",
  "key28": "4PqgdWjs11tiTKUxTSpbf8Qz6ir1LoqvLk8xrdWhR4EexTm8Cp32W3sWrUuPVSPfzZWytJbycMC3NGqgCv2TbQJ3",
  "key29": "5KG63Qb3uMV9JvA664ttf5PAZHrKcz8DgrDZpFGTW2MwDgnnLbZvGHpKXwcXpusYg7G3e8hMcHB2Qkp3PTXgB6r7",
  "key30": "4Boan98RQrEw1piGtdGZUeL88SkrGQuqqETkBSNZtaR2PAdc6cGhnDZNdorq7dpWnDnY1qDTt4qjpi4ypvJPcMkx",
  "key31": "3ApbcwcTDbc6yDD8tRa9bwxAFGVkBW9CZjZ6Ye5kKRYeNut6xhWPeQR66ToGtszZDHukzsreCqi2bNMaqHnUwbRQ",
  "key32": "5suxRWPnDwzZCSPDm3fAfQHnrqMbukNkiyuQ5JE24J3NQTZiMqM4EyZ6hfhpc8YeVxbc3fXMm8SAYACJug3bvZwc",
  "key33": "v34ioGAMSWyqwVAFCs7n9fkDMjz7hckQ9AhKdmhTWTKNqPNNa1ge73AhW6jfwxmx1bV1GH9E9L3uk35iVmHkHzJ",
  "key34": "5F3XrowvTTTEJ1LSbTNjCKJEwqHUctaBFkkfKY4Z5kh9aEYpn3NFR5kuUSFQaXvamw9fpHeCNJ7aqYYXqGD2QhRz",
  "key35": "3X9hLGGThFLtRK6YDudj6ECeNtjAdB6BbEx8zfWK8Qf2kJcL4EdK9nrUxEMefTAiyoSvHs6qPcJKDmhdGkPNBNAZ",
  "key36": "3WgAzn4SJKJ9oLc1mNZ6x7pJirFnSfMq6qeL3PDsFkWEpFj6a2ssVP8n4nMEHEWMdSzbYJL7kYJZ4a1aQD1zj69q",
  "key37": "2hvsYqn8PNDtngQeH9HjCxEgw7CWADnvUuir3tp7G6QC94VX22ZMWyj6t9JBW3MufqKZW9HTWtFVQ81wB82UtSrp",
  "key38": "5zxGR5eShE83ktSAr57Y2okZxEbytVkYQUnesDMzKLoj1GEYAARMuFzx7FxYqmiLDUVib9ZVbuhDrJHHY1Ce3mqF",
  "key39": "TtAsSpoKF3BH6c51QSaw93GxRNT9AXcR3qkSSoPRzvmxNDY14c5fLqKCbj3mKk1jJ2uPY4jPhqfpE1UdpnvXzyn",
  "key40": "Ny5DbGcSgLTN6rVTKLPA8SXLfUhY6zLFNqPjiDBE9ztpkJSphr7CLVWE7w5fw5i7G3hNY2fq1hWkPkW1bjStama",
  "key41": "gwTMHZQF6DfeXEdF5rK1CKz21qfjjYTEvQCMDz5d9jpQC9d65fizLci1oiavezGsVt5Kgpmr4MgDM9G9ynwKGiL",
  "key42": "3fjrkBm8MJxEduP4p2vpkWqzzf86RYAGK1HAU3n5SLm69hCKboVY8Ts3nLyi1TzShL3HXoTvmfeLy4DRiweDzqgx",
  "key43": "35NrNtU9iZgd7fcaWWKXnTrhsi4tqW19RAx2zuWWwoc5F4KSTWtqHVQJdGXo7otBasWaAFuACT8kbAFjuRTdtPSN",
  "key44": "49y2Zhi2Eu9fdbAJprLY4qmFpdeyUyrLECrgScF6uBriaSZtYKAyAJxnBRf974BqPh6ZB5AoME4i65Zh9aJA6PTq",
  "key45": "4SW1aVHM3zjTScM7AVoMbwd5Z5A4Gcw1m2Xjp2vX4GduQYdSeryKDmMq1SxDgbQusj6HS4QJWGZHRpmzCerdCWiC"
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
