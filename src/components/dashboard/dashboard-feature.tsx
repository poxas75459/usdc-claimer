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
    "5E7mw9Qp7Wjii6eZuEM1NKx8ZL2hnEEfYBN7KU3F53RqhoGA9VEgCytWZX2F9UWFsjRAeto5A5xboB1Z1QhbYq9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RSy5VBm9hKkFUgfN2LUew7ZPgKw53sjexJf2YrEXhssZ8o31uFR6oTzstrMH185pscb1XKZbSZiJ43tqhDpD5f2",
  "key1": "4ZNHwRWD4pvR55viAZtSrqM6RQ1Ni1hLr3oQAswK1GrMmf26s262fDQdg4Ziywvbh311Vaymx8Uphc9RmdWAXReP",
  "key2": "5AoHeDXpqmRa3hLW3emeTVWRepwrA5BMs5pQDAEYDHb9yuBCd2d4zAnoRRwut8wdhaYXzRd7bUAx9dU64r5fqqf6",
  "key3": "39q8ZMThy3FjfFnBQkpUsgc7HNBPtxppr4ThtLrhQoXoEQJizVN2LUctgZ7hugdz3nEch8zZgRvxV7ZRLm1erDXu",
  "key4": "3K93EkshQDrgryYDYpKCTJFw55Lt46e7v4WHR9uZ4qtFAyZGH1UF3vqohwf2P9BUY8vGiMzJWPTCAd7fd2FnCNsM",
  "key5": "3pix2ATXRKN67Mi4rHXg8DxDEN5Y4vD13CxiTeAs4r7j7Hye2abmwxNKqoaJ9SSegGP6bSrS8gym1bvZ4KRJMyB7",
  "key6": "B4HZuudB7YreMHbuX6QDwXmAcSe7tiuN1sbpjeQnkcRE3Wjntgy4KVYjGsVHeC7mBBYmwBCVd9yYeATGx3dHM8A",
  "key7": "97i1wuBzzfTt28CWAMvDKDCPZibh3DXqHUfeYGRiHGBZQB1LJVqpArqn8W3F4BHGGMT9mtKgo8kCiPTHCQbic2N",
  "key8": "4LxvEaJmG6p9oU7gXjnM5foE6SDq9o64CNKsxdKCcrcSZLUSUUCmXVFz1RqjowHXqUpqyFrDwo7SLuCBGp71gdBc",
  "key9": "2f4Qfd5rE3rXSueBFGj8ZpnYVeY3AiVjvtKDyQvxBbWm3Aq3AiNgSg6Sy89hvwvYCrKzLynPdfSXuUugaZ5aWmRf",
  "key10": "4DBoaTbLD815cpp44onMTdo8TUMoxKgWbJopkye57XDruSskP47eqrxvg29vuBZJPa9kb9NaqLH7PhkVwJdyw19L",
  "key11": "4wvBfGiGNGv1KGHAABHZRR9kwke22em4FNNQKDmLiDAGrxQBTQXPM4mEUFhJk4LhPR8ZKccmqa8qyYBPHpiPHS6C",
  "key12": "3oDz966ADu1NSyQXwWEFAYmBx6KM9CsDVMBqfNVrbcJJKYtLLxBfRCGBxpEhND2T5KJKAct5ZBrKTKLMs7WVx7v8",
  "key13": "373rex5MBrc3NZkEaDWBr2W6fiDBgv86RP8ZGSJxNEzj1gSwEPKih6NWUkMufzVzfmswXMWdGQkmzLresanq9f24",
  "key14": "5FQ5JAWABiSoc5toUG7Qpim4V9ccQW5fvUUbY1oRPNpgmFKUfWm5h4tvuRMzvqqr5gDW1VCy8X4C9ZfygqorAoXH",
  "key15": "bAHGnZZpZfLK12pdDfyfupJU8dzz4CrvLHx3gEqfydTEdMjJirygYtxrE73HDVa3nL3TsBUe9DmtJPhwMEHWtRN",
  "key16": "3DMkY1icUHhbZNpbg3MpBk6BcTiZ9P1tpA3zrtZZrntPndUpT7Jd6xp2jGu5ciLrLV8QhWTsfezG4sjGLU3LKbV6",
  "key17": "3yLmPY6HTPdRRZwUCnBjGFkhghP6YiQAksrSvf6gXdxnkoiTLs58iCL1wwYhirxDG1bwab38ao3HzM2uA2Qfvsne",
  "key18": "3pWSXRk7juHaFbDzs4U1KG6DuFF8MFyd6sgaAsYLjsZpSFnpG5NuSHrNqPwuDrhy9qLvs2NGsjZAmNg9V9hWC7Sh",
  "key19": "2LEqf3c2cK2PGCJ2pir8Atryn4eggeWmnHd2kzMZowj6V2AJguS3zcCY5jxJ9RWfnrxHtzFWgmCPrQ7Emgxs9smy",
  "key20": "2poXbJKqRZd3tjRk1LsEU6aLAMmdzuUVmLcdVP7TQXWvmcS6Uo8dBDqi2SWM9axGPGpMhK7JmMC1tGSxZXaYk1XQ",
  "key21": "3tSgMd32ZejPwXrcUGBGyk6wgqLfypd3nRyMLnTjpDu8pVDzpzLCe7gPhLkPD2WPeTRpVcHc12ymUpLcXvAoFbjs",
  "key22": "2PBWZHGxUCJueLSt3jNFqRKzC1aqo6ncFcb8R5gksiVCiyLXFMWfmKzL159ETxbmGbztj3Anqjs1cGDL59KDKv4G",
  "key23": "4N83gP459ziS4vk2inFWzvdcsZiFR4wFoUqitr6YWCM9ii8GExdbwft68Hiss2XES9LBqKjkTo3UJmMQvRiWgvNd",
  "key24": "2ZaN8nzTeaFpSYhPgtiYXachorkdpAh3z1vK9xAyWwka1kwoYtm4nGhMM4YTjTciYGsGTcFYfS37vvUYnrU1ijs9",
  "key25": "2UPc6qC1Jmd4hosa41Ka9gXRfbRNsuRKkydF2FqJDsYjiKGff7Q6NK5xtATVos6RmPQPM3St3QfDkHn6s4Mq3dN5",
  "key26": "2M2eUxncPtP3H5jrDSErYmJYMPPXHExnjhRQNfHHk8Ay7KV1WFNBYUMpjf2pY51rsxY92e5UxhxCwpVM4ciHkfym",
  "key27": "XTkiRZiAUvUpHBhjfPQvDeTietvLc7ocL5G41pjioTiEsMMjtAx1pPNMyDmiQc4Li3H3dcUZ6GHtcYbnMdgR6iU",
  "key28": "5uUF2gYp1RTSBgzgdvWqgpmmhkaD4vyV2j2DDSeSqC6DFZ4KJHnjcQfh5hYPC7vMgpsaxhZ7YSALPPuJPGvtDoLY",
  "key29": "4uGaMahjchWr25Bt4PVDdP3ccdS9WjenjRpM3urmE6VtvE3ozWrwxWMfdnJeqdR4445pGvP5Ks3rQxNG8Su3xsm7",
  "key30": "2t79cnHwco6PZhrk7NTGgxbKbWReT83rBZPd8DNU3otGWQDgQUJDmEWLaPHN3aukyqMd5fnGkKAFxcEtssCS1ch8",
  "key31": "4wRCHmbg2o1v8HKn5SFKsR2butGtDiSY1gBUzySjkrVGzCc9uY1CHkgydgksqrnsRy1odqMShsQ4AjKGfBtsokt1",
  "key32": "2KNtBmFcE7ZAHqbqgykXizhxtCaqzUoz6pjWrSRdV5YE4KmZwXFTd5AcuruZA2m8ojxA9AkGfrU7Sjxobfm7sqfz",
  "key33": "4rYnzoqgWrTWAKvvE6Uebf6W1GoMi1k8K1QhGBibwLDf5S9jyZWFWTSrB6Wn3CBHc4i5izbceQmFQq28xhFDkFYi",
  "key34": "5NhCWcfHri4SYorkZmiq3J61DxEMULSVu2FLJQPAyGk8gdGfBjd2bZHmt6r3FvVS7w9r4kun1FE6nJVqyzpntozb",
  "key35": "meoXZv5CGNCcEm82V9KrJ3qjP7CxXCfYvS1emjAjvo5UKi2NVogEaBvQyzUpFTHdTgChcymgCiMe8R5yhswDMhs",
  "key36": "5CpvVaQmjGuq4SuawPBKkuF6EwNLBDSDJfcKHyki57D8ME2zmaGP2BnwbSUzFBmzcWKZNJXgs6mXApzaQDWPCaRb",
  "key37": "3vXZhyQLhTi57bgSkuVSsjxv4P6qUAj453zNFXFz7igsR9viZUyGWABRDL7RPS46YFz7tPf2cx51kTLPjXyHp5nx",
  "key38": "5iAJJyqGfYDMLf1sJtjCJYDaADvkUt4kinM5YJvdRnh1FcyZ8qUCJEEqNFgtYcj712rFjwYV17ZL4jBixDF5gMw",
  "key39": "U6uUiWysrEXh6kwdAwcXPYzSNTS4MtcRZXTkbjGjTBz4G94YLGMAwoFasx6eAZ2UUXbh9kUMXwviKL8V3dfkgi8",
  "key40": "5PXoZh2TLC6foZaaJHMsd8PTgAGcuoY8jbtpqCfAw5xXG6HeHNCKepHxdcsJ3RqpNcjNXZZYSdwEZvySKX7NdhzX",
  "key41": "5x3yryZ5bszjDNEEV3rG8Epv8HpZcTV81m9Uea3Bynkp9svoa6Sdp2HCzVECN2yTjg3gZZDMytjNm7pdQQa2o8f6",
  "key42": "555juC1egZsCdezZsvFxNpZXQCSUKvuTXEgVPDj6aUCRjncDhWCWAd3kQhB6C5miuvSCGQtUPC6bcCNFDDCRs76S",
  "key43": "MK3UmKxtUsGLpQ8PMUDXdCCknziNyfgSPqfLSRcF4Hgxn41my2S1GaxiMXBRXH2RTvvZRMJbMe2QmqNPsoCEhuY",
  "key44": "2h2JjMAxtTJWdivFAYg1KpbEKZPhjrBFLTyF39ZkZTFuo4pekLAL95FQJMHh85zuBqiDujtWMQkGpxpNedeAq3Zp",
  "key45": "3aVvaKpnH2fEGADL75QQJHUU475nWBJKbKYikiDtdBRb6BCGubCtJDKKVkcuUN6WzKxTAXYwt4iZFoeveLVsnxmA",
  "key46": "2gh3BTpRcaNXt9imtbEGQeX25839qNf4n3pUrDiVRm1uK2aee5Pjw8hNsqP4QPixZqidgaXvJu8PDu3Msja3Gxay",
  "key47": "316KiDhfDCqrMHnpoq9ene5v56rtqC4P7VdH6kh1PaXkzTEDyyZmqn5WjuiaXYcjyFqhHQcb2sDYhanywy9n94Z3"
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
