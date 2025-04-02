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
    "tBSXMG76sJxi2kfwnHVvmnyMJBRwE7FCVadcCzevLNoTpgwDaEWKUKx9DEPUQHUeKcLKpH4vgnpmdBoHpmhbfMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KRUCNxD7z1BBhwsXwJFZFeRJXoEzVmCumr5nBWhhKMBJgiYfQRbX4vsd3ez55ikh9sJX3wGTCx3b9q3JVRZt5nw",
  "key1": "zZV1DfjLpkBx3SnKKzMiTUxwwsd4C5rHoXx29aMJGQSV8RiQStuaScGYdwaShb5J6cstbFv5n7BrGktK5qgCREg",
  "key2": "23Lfp1gJTPeUdqxYzZqB3DnXi4XHwwA6BpcZKmM3CUSv2RaKtAJK94nBxKZ8CeEXVhECJwVDVRScuAEvMcFfw7bs",
  "key3": "572AkVZf1YGGof5hBZctCRUrKicTDrBLpBan9rqXESPqKChgY12oDUxCaJYuwBtgzwoyajpkmSVx81UZXYy8FxGy",
  "key4": "3EX4qngTcFJjySozuoNuLu9MKadHgDDn9mpqyk55KfSpfkA6VbEadsSu48qwKXSxQxBA1mXe8YnkMvsxQK9nBEKw",
  "key5": "5Pj5FmpSNXxgctsZrFUMetHGNpBHi3C5rv6Phy6uXsEpwPmQ1sybXyq3mvHRSyCteXoGPkosAMCWBquaZ2E7sinV",
  "key6": "VLtbkmytmk2LukKyB9zWrQNjVwxc5Za8MfP22sk8Tni7hfxg1NWz8Jo45Pjm3ArUvRaL7fZHyKWQn9k29QYez5c",
  "key7": "YP7AzqVqXLFjLBAAQkbYwaSndXZWRCLRN89Nwb1STayWKy6kcuEVb1yEKJLQf4iyiAE8P6eLJLC6XWPJkNQ2cFn",
  "key8": "2qPeULvSezRDMUVLRNW2dBdHMoAdWnVhVhi3PW96AakvnnqxscU5qMdipPonaqXYYvXVJ46v5E8fU6qidKfhkZVL",
  "key9": "3KTj9n87Tk9UoRe5BcKdTYrxGY88aho5E3hkmVfsUQGqKA29CyD2QpGNpjz6NVErbtb8gJ1nkF3hJxf5h9PJKxBB",
  "key10": "5jETddhFMvPrAZ1cUZt2oBbLgypD1Bd56TMdPopi7Eg56ngeQeus7bCodiYxpSnZLURXjFAfx67xtLTbArkD3NFE",
  "key11": "4ZeXhXtSqun1M1TCP9ftqM5p7mQ5e7mGMLXHyqbyQaoDZWESiCytKNFQw5ZCtZhy6VsoB6YU89XwdzKUe7gVVqBW",
  "key12": "4PbtsD4AWc9GrvNGY73MYNkwmDBijthnVXPnKFeMsFTpnSbji4yFFbDMG6yN38cd3aE3pREx3kUDhPiBZQMGm4EX",
  "key13": "3qABCKmdrVSXYT2gp3hL4xP1nN73HDdvvotzdeWRZsXJbAbHkxJGXEnJbTm4Pnd7Cr9NVZixRqTt1F9yQF5fd3CB",
  "key14": "4QhMXfdMXWL28hChsQF1hHiFHFUj9upJgqCQRqu4qHLT2ovHs466wFHMksSgUZrDqszjKLmNLgJfs4TdTD5fwxab",
  "key15": "4BSZjK4F3D3ELNUuv6j8N3FhuTTShXJSPDMwvZR2ugbuQWF2kMkonXq7MBV5bj96zYDo1Fh4b51F3K4fF3gZFyit",
  "key16": "smxy5FbyLhSsnKaZagp1m5Fh8qhi5Gg3CJbJJHGnjvLBVHLEf9JoneK6WKFxAwwY2QeMuj2gGiRTjCX1Ahfrz5v",
  "key17": "63c3HXrCYuMeLQnbuQsdYeCLRd4ohuQ3cBfeVTpAuhLEQyoXPRzaUsapnvSrYkMvhJoPghiANKj6fQ1q2BWmTCvd",
  "key18": "8DcoGJBB7BT2sTwwZaUQBoQ5uEHp17FvoASERWxoupXBfhe8dfrPLkhUq8bbq34SmTDdcPtkHqhCVkEbbDVbaJw",
  "key19": "42JeHMmwMENueL9f1EvNsqu43JdvcGMiKGEUMXVEdSQJDW5XeHSCaMiC2LSZihtTSPzk7h2ggq4Ge3fWAsWHbWja",
  "key20": "3U7CQFGG4U8naoiyPi8R6SugSmAcPZP9GiNwZn1xW8NTZZxqJnkApeQiYACySmj9Vak6RibbZdvvej8cD5zKtb3f",
  "key21": "61tm11Cc7YQ1Jrn2ncz7RoUxMcEdAnQQRHzWDwaSn7L1kBgbbBbWgfQicxZbP6omw6uTAd1svZoxpgV8DyS5MCbf",
  "key22": "41MA9mybNPBJypPBdcEKKEfaqAzAPCPbnccQHK9YoLjRMvS5R1Rtg2UrhdfktR5DWGDpJu3zrob5M28nSpofYM7J",
  "key23": "4UGVVxmMweJoCnNP35P35Cd4iarYqU5P4EHCkfSFSK9tcYemF8NrrwFESe8y64LcnqzsTcQNq2jFnvvVyq5an8MZ",
  "key24": "3XjHT4ZkbdKJghAF4EZpUFTGLEWgHomYeHbzaDnrK2iGzAPeFuVAC3xpHx6fXqh1SXbdB3JRX1EF5NBAS7UFGWrf",
  "key25": "26HQceLiJpi1Burg5v1HF3ovHcsLHN37aUh8tXQo3nxARrePvdmoLoHFjSV5Zoftueh2BMH1VjA7KkYZw2DYZUh2",
  "key26": "oUcQ2pfsDiKx9PpGv3kgAMhow6jswLPC9edjsCjh9n3n7HXnVQ9pZSmuZnKk9fKSsqMxST9tQ8NYfCDCvYNdC8H",
  "key27": "uUJKq8Yw2EKXR8TavdEjyHvfgXRiWCTMNirYpoZLgzyzJdXxyhZwQss2KJZGAKEJwUqM2fWGdhhQB6qF3prfzH3",
  "key28": "2cTXsMy6AbTviGXBqvynjj77EhcBLbh4m1MtYguasWN41P1rrfX4i74xcGxLsrQrdVxV4TQS2MPN9Cp8Yxfqd54"
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
