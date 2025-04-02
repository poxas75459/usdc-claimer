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
    "5UWchTtWDW74m4dNJHc4UBeoMBFmcu4MN7yNkSXbs3dPH59ZGnKxDmo5uNsFLG28a4kWDNjnjcd6ZBqUe75pzJ7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "614N1Arbs45GSNyBQYRKcM5ZF8dQZXgQxoA1itSMXNPULK1bqjFg2zXA6Na7Y27ekhQYtEzt9BxS8gUkuF4ts5g6",
  "key1": "4GjwZmEoB4eNYGVCdKbc28R8dmYAAizKmJderx6fuyP5MwnMPm2xLrAxsxCV4QPztRzLwSPJtY32ddRMXchC21zf",
  "key2": "4UfjccSf5id1wJTnpK5f7tGoK1bR4XDDuvQVaG3BDPyMmkQ1auGyT6yoPEfmtERSefQsGrww7ZH5USTYeNhGHLs3",
  "key3": "4ysymBuZ5S918jB7crK6PBwvUsR2UCpEkyXrpAPqkukXHZhiVxtzcv1Wuww1bcRmvcWU9p6AHRxQms76zydtq72B",
  "key4": "491EH3vXXKbEQngkEh5Xmg8b9pNGrX7AHuS9oFvXNj6AHTdKjaQchtVnK1ZNkixRDRBwBsFfqFeoddjWZ6PzY7dx",
  "key5": "2UYKhfssfwguCX2cKHPEoefXwMjqkH1ymTyVycxpqY1DCL8GDKfXXmKzjq4JfLmsa2h8SimBH4TeeaqnhFdraZj3",
  "key6": "5oyym63hibLpuCJGPQhbdxRQ7FCqnGoLNuGfC3cEua4Fwsu7XKkszS9uRd957dassEpNiosiCWB5XEdczC7gjmMq",
  "key7": "3wjcbN19n2Zj8rF1kR7tFU2JSHAWm3TPwDXeTMkwzSJpepaZiHEoMVETfnBSLJjL5Vw1PWJigTyjSNKPiNou4Sa1",
  "key8": "3kjEhSkXbszK8DHCwkacHsPFXmnEJfP7WNdopGoEpZjNLjAtNo9tFVv46bNGmd8wyN6pU9uBS2Y1hp6rUtkK2Jgm",
  "key9": "2JgJxN7xRkCrVwMGeEZ7eLFVWbjjg1oM8WgmJa5AD46GAA7goYsa8yJqJmoW3dcf8st4sruQJ9xa1wK8E3E9NeB7",
  "key10": "5iyvEGnhENLg3UsYussY84LD6AkScwLCKZTwzzXvTyG15mJqYfn3PRuwzr3m5WHLV2oVThXnEVvzSs3sRewCaj1z",
  "key11": "apSdxcUpaSV9orR653Rv2eKacs4qXnW6egcnRYz617aUqB7fGhTnexwGQjd74y43ZcNtSDRSfWugU5AzWaHx16r",
  "key12": "4seykd6GUYTwBoUmvDER8sTjg9ZW6nMJsTpWDS6Wax8XE3hUnKrorti9RmumMXShNsXhEqE1K7xVe99N1zHprtz5",
  "key13": "3DJYNe82qvGR4UkHWTXToonVYAPgkKALNauhg7dhbvD995sT3WYBGNepLSPXgArnUNPHjmi92F8n11LHpHQC3t6Y",
  "key14": "4YchHY2BmjfCqusMd4TNwxyBNdf2zHU42A6MVyu4UTfw4JvjqxzkwRuwEvHgwyDgsJ1JPNTeuubsh6isa32oXW2c",
  "key15": "2mV2tUR3mdUNyLPhjUVUDbCpQhHeSWd3UhCpSNHfts9gSSp57VBVGyA8LoqtDo9AeGQTEsmswt5FNPUB4u9Y1wPk",
  "key16": "dm6tSFfQbCubspYq1rqKYnRCip92J1MZEAJ8vVvPfMbKi6PUx1g8he3JS4EZ7zvf8Fyz38H7WWwcbc9S2M9gciZ",
  "key17": "3fUAap1acxUSXibou8VQ9JM2EdRi4h6UUvZQYuGVZQVd6xSHbpFgvAzgcxTNkNT9kaa34FDqMQPeHvehh5fhW6FV",
  "key18": "pCmr1uBsRLayEa5yy6i5MqkVJ4jw7WZyJfCCYd7WmVgwuKW2FzJ5u8wfr5TJkFiLGd2gR1ufeT4qjbvjryeg5dZ",
  "key19": "5tdKzWR6oepnu6h57imua3aRWmxdHn6RNKZBdM1zKVbFWeU95M9PKw6Yu6a3NrcnuPTD6P2B7KuuckP5dr7TVccA",
  "key20": "2z4fbqRYKRJHHnJJWPDQzX7jocjw8SVfkhgodKpEM9WEY2WqCoJdkBdMn4BZBmQSo99D8Rzzw5kW9YsoFf1xpLrY",
  "key21": "3xTZsPQ1U4417S8siATaZMEQNoM6zwQTAA8D8n9pvGfQeXX6m1UgMRcoiGNPWBjYb2kcr8GHAuuDcfVnLiTHkgTm",
  "key22": "5sDxPsSrXNHniV21zejZkwhrHVfJWiJoa9zvpLrg2QuuD4G9ivgcUNs2zrJbJhzWwoDPSmEDVTVyXvtjFhtphDEF",
  "key23": "5UUZUFm2LpoJuriKSpgFnVXHtuYiEE9MpWaYBmFYQtc5TqQy8VQ7xecxMRfKJohLEoWQGZUWjan3Z47ntUymbUDU",
  "key24": "58qP3fQ8Sy4N4VrfiP3ffvBntnzLUN4waaJPt3uBCcXfJcqY9aT2BEgVZ3VHkiwsxP7FU6spsF9CZSwZqdEUa1Ux",
  "key25": "2BHK6qiCZsyiUNeKqVPvrEHu9QopLVSZwrgDJSAqcCX3i3fogpAa35XUpLDQaze9RoeCbdcKkDeEJBQi3esi5gPZ",
  "key26": "4fY4pPuLk3utM9AMekyAA6J98Lq68B5vjXjg6ypWhQ4t7ZSwX6ieKKzGjkSTnLJdx8YHLqKepGmerTekBtT9GgWT",
  "key27": "2qQPiayXvdGVUr8QQ6BWZsP4bPpEom5RhQqjiquxedFYZCjxQh53Bdu6D7ABSYu9629WkaMufsh5v4P5sqibSo1J",
  "key28": "5UefdGDEwcvGmRWaPPFWw7k61Qs2dw9NssA9PgpEy6N6JfoKTJiKMLDbeNxqFfzWP73HEtwSvoHWoAVh7uPYiYTY",
  "key29": "31zZ6wqhRQRVVx8PbmqvRqiM17iY7Y6Ggk9bB9jUqDBmTBswEyHcGvRU1S9us1kBrggnnXZp39K4v6sUF3KNGiL9",
  "key30": "2QGL4YsKPkpUcNbFu2uPfFDYzYYjKm4LNtHEfsU4cSx38RF259Gg1yT3YE4zBQsYujWJe3WoTto48oQimbntaF6a",
  "key31": "255d1DsQ1R8rt2JZY9WZmhfZf6wy9h1Qhdz3MBx4UKSEVzQFHqPkqD6tVzeNaBeYrTNWCZcjpDSJYaRQxG9QgFPC",
  "key32": "3S26Ewhp8CVaTDbueuSfWEbANxdHG6BRVcga7nY4TuKTVq3XipEBaKAfbESHJvMNuGR57LZVFCFZLUdb5rncyqBL",
  "key33": "5auBq3rv5SpGURHDr4mhF9ppdoMGbJqQ1N7Q8PEKqtDoxZ3Kkhu1SBdtocAjHPW85SgQmNMkT5zsKorN73g2TMVW",
  "key34": "vJjP2C6Uy4Nq1XS5h7b9wR5FcGjZciDLT1r2JYU8GHKXRQRAbCHxz6J1sbqFcSLSieqoUSsVyBX5aZjWhEyHUD9",
  "key35": "yFEq2SXXab8TDx7dSVJMjL39SgbDRxm1RFYpEkATsJam82eoArNxyF4Ve7gE66oqw17juNd4JVxTgT2mudw2G9N",
  "key36": "4835zp2gQqXcSwZm4ZyGaQr1UJ8t8WAfZSnWgC3g5jyDoSrNQVKWQCWVvdRtEmJ5P6oomp7mwryMGULZxGQNcDN8",
  "key37": "LCgxZjnWFJyGi1bGs8rLzypN6SjgueY2vxsL1nFyFR3vKfxeobpofFaPFEDzE4motPcxb8d6yphnUm6V2UYKYVr",
  "key38": "4CfmjcqNpWFSY8QYAyRA2U4yRYCeqoMgVnxDsQmi31SQU2XxcPxPjJLWvQM2XHV75QyG8FbFPihKisqjw3NFKkn6"
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
