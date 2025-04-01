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
    "CfKVC9Y2CWmZ3MipxvEVui4WrZWRkPdHCcz8TQ8fjz1b3myfSKk2XKiS4d76ETiQKuQLZYkjYjKk6v1ZJFidZWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PCy3wRLf68pwvZhkeeDVRiRCs1NVZkCWz56bMDFzTFAdZauxUSX1Q6obmS5YK9ZBSaxr2g3EVTosd3rGjJmAmo3",
  "key1": "5w1H5fK2CXKU4aneEfEchYqjDgQsooKB8YjCLPtdKmnaFcGQvcSEHhvBToEjaXPcLTCXeV6ShgRP58umWLLNGHsh",
  "key2": "5uJ4Y1KnYa8hmpvq7KMUGsD8MXuifGBEmdYSS53nVNJkWAskzwTdJ6n5f6hsK9jpXS3C46NaQw3i5TfRdUrhXhG9",
  "key3": "4UZJ5EoDkZFUSwsgJtzrS92USuDiuDNERJwDY4BHeb6MMPNhGi2WpmqrLVUwtLRDuoqFghWayarY17c7vpJhaqU4",
  "key4": "2TxQxnapAYcz6CJT58rfPh3sbkF9ciTW7Bpr1eD8nCxoLWQFWSDbEX6XMejeq2bDcbDthWfXLBXuuihXS1YpRQgy",
  "key5": "265AHawdW8jfykwt2WNDEa2xPvqie29G2LUKBj4aSvvtE5oWcSDQBLbSJeKntzB9wNbS3a3VFkGBLZTVgwyoKFYC",
  "key6": "2QfokkV5BjH97PMtAAwUAtgiH1En78fCKnuqGK49C9dPRUhF2BXL8NQ4HxtHNM27jGppLr8N4LNwj5SHNr1QydSJ",
  "key7": "5bAmRnaQyFd1AxjDzh87WaWqSWru3r2zbYxbmFqrfhFdQ2r6SXpfvHfrDa9qV3vXWfp5CQPeHb5UwGH6BB318fnz",
  "key8": "48Jh1WAwbU3LR55PJjLF72nGwijmadcc8JbBrVKAnphAWwQBZk7mhUuwyHsEuLw7LP2UjD13L2o4q2j8nj8op7yk",
  "key9": "3TpQWuvZzSQew3MKcTUNKCKqL4Da5A6W8gTmcrbfaLp5ANd9YADxLGhtBHP1XhvoLs9Hf9iXm3Y7NrBprxqmTZbZ",
  "key10": "4EqkFzDnsigkzbEYG7A6GtrAhkXmWHKYepzkuSzFmNpHQHbrCUZZedF5m5u9A6aQdU2kZTkHHbtUQjjhGCdm1r4J",
  "key11": "31fngHACXopj97K1meXwgvjmA3RcE8YX8wtC6moVYkrQp4AjYuzj6XyRtHRNRrxMpqovDDZ3z5aktGxDNmGDCQo8",
  "key12": "5urNKJKr6msMtBGSwTRvLPzdc1yZ1Q8H4ZyWsBz7QnQQw4oUTfeFYeL1RcS3V6kLzXNqX3jGF3Jr4zqiySpLCR2X",
  "key13": "1GAXF7dBqaokProuqD7Toi9QE4VjgTrZQAR54Pr1Zqq6gKaabmuwEn11GqcWYpuy5wUdQUiXzZ5oscWbjWSRM9D",
  "key14": "5Yct9qi6erZwX6R6QSXBrooYEgYmbkEsuEmiQbNHSRbVX6py5FoTKf6gW5aEcsewEAHMfLxZa98vfhzokxd66PqC",
  "key15": "2HomGbwBbX4oNUzATexx7a5PfNUnsE72fuSpwYC9d2J7eYaLbW358wV8GW8SGSfnAVY6AmNoyfEUE82oCwyPTwnp",
  "key16": "uzTbNKdVjMh1oJKTfv1YX2VZ8aX2pGuTq7kXxRzzzj2rRwrE16kvqQYzmd5QgVAQHyUS6LnJVCaFd2f3U5BTn2E",
  "key17": "4XdQ13mNaSTy6JcjxV5jrys7VLbLpe5Tz2T3gzxWhifNun23Bibp2jH92vGpwr64u2FHX84tzrrzmpCwSygBhPBP",
  "key18": "5p1tfLmhNTxbppNi13oS7TXa9YGewpk6rwTP13AsqAVXzQJJk2X63Rb3Pb1SXFANqGwTyQiUtemr1Nsa2nLoPvgg",
  "key19": "27e9cLTTCy9guXffFmHdh5ZBEbMTpTeXyzegJgkP3JseJ7LPej53k74TjT5Taw1tWCEnMKZggty5BSNKictshqj2",
  "key20": "4exsg7YcxtjgCaBuyRNTM6yHrmuCZ5wju8HdNbV8Fskd8CZYhDvZyXwqCYHUBwcvsRUSk6EngoqbLLmoHNyxKTPv",
  "key21": "5nvnVs7TtuiWoA3hMzFyW3UUk7MNLMJ1ELgamUaBpxBm3mtJYb14Xf34FEaJ9SYmahtFb8LmJuwKXvhhk9KeUFfc",
  "key22": "2wY8utZRaRufmGngJEmwUuGnaUPyixro3jTQSPYdkCPP3JBn7H62fAoJPncGr3VPqmsFKrPwX3RBn28gkZ1KnNpn",
  "key23": "4mK5tEMWNYmGrxmawLsBh1it8mQ5PAxgDRoAnqbjKPws2zuk5J5vEzW8orBomeGVo53LZbuckG8P7Xmyiu8kB1D5",
  "key24": "4awLPaMhMZY3pmPBC3MzkzvbLPRBUv8eVgFSzadpHR13c7LvEFUGDXj7CrcMQCGh1aXoQrxQmZ8e9vYgq1SqJjwS",
  "key25": "29sGfX8jEmuzVvGYxYcR6ui2TQY6aypHfYWgDzucRZ6aMSzNtHSyiHCHpAhYJoBSfGchzLeieYT2TaHuHpdx9WYj",
  "key26": "4BZsordoiRBPz4ehbrGA8ctXV669B2oi4xwo5znrRXTzztdGeVMZrVEPUJQUMTGUBbKFP9JvTTEvK2VYgubw634R",
  "key27": "48ZZZDYQbR5C1H52XsUG1NePdj15Uc6X94chg24eCePw9VgeALLSEUBRPmbzNvcp64JbJscBBXxYajo9FTeWbT8B",
  "key28": "3aJv86bP7fpHN1iRcE4o3yyK23b2wqGo3G6oqsdb7AwuEUwVjcVcyqtegVk1qRDRM5jJSrUdYLvLSCJx7GVyH25G",
  "key29": "2b23fK9rK1xtigGeQ8beCCfzRxj7vhcEi9SdsdcQ5uSzu5La8pkLDKLwjw28Q658BykYnYQRQz9iGKeayH6idoCD",
  "key30": "3RtiWdwEpYyGMGSfGctg7WYVvKpN7poUP4ooQJCWetbLkcCwomQyieznuY4egYjfGkecCUTsJu3fsj5H1WdRUfBB"
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
