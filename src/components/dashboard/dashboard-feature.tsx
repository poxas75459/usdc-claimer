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
    "2puSoZz5cZxPWZVpoxmDcm6tQaWRDx55vwb5wSGVgKePoApQJFau2MTvhW4hHcsLpFQwnPteLHpg9UUDkapgDSQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GFLQPRu7EnTtmU2odfdupH16ER743o7BiyyZwkb8BSG68e2Ew8SLrZjAmBxm32xCEkuAnatnK6ADYYsVjrZKPgu",
  "key1": "4h6p18PUbjy8SZazgb8itzgFtBbVJdiG8zxdLAQU8w6ry5TZ7vHZhw1Cawe8mXpftRBpVCeg8f1G2vgai9zvKHpk",
  "key2": "5MdocaqTQcjimB8R6d9Bm4JT84fZnkFUFyDm9nJ24FUo8rE4pbFP6SnHyQKEkMoAo5DWfd2xxo1GcoxC6dNyAQhE",
  "key3": "3BFy4NAJazUkSU2umRX457Rn21dHtiDMuf4e22f3MPscxkebg1zpyrBFVxu1dYUoB64FERvTWJ5FcPMETPsZRYRn",
  "key4": "4Jqmhp8AFRkUaEKSFswmDWpg7WFVu6FPjn1ez76x8v8dyyFhUhAya1i4dGUonrSycLv9dPrr9VqRTQQXCnrahmM8",
  "key5": "2YJBq4UBFRpZHhbrjAk3GHZYRL9CKZjbwGYA6J34h6j68RmwY2HQg7NToC9hq8q8Rt7MxjtfQiK2r2VTno77WiYt",
  "key6": "34mUBmeHe2b86LA1eezY9Uviirk6gREBSKcvHtHLDyYoKy9tU8uuPKEAUSVa1wpq9pcswtEAzdA5EgFxRBYkg2kP",
  "key7": "3vXDKDcowRPomvr7p4UvCj1MN29hRXxTzybaSgwQMvrSSEQZQwwq5jzrgTPzs5psKTs45jSRu32pTJTX7xzgvE34",
  "key8": "5AxrGi67vwYug37ZVEGBiaKa9w5dou6adzUPeqR7rnYzzuYXPCQNqd3YjZkySu9kieGHnoJ4iAbxcrGadHWcU8AL",
  "key9": "2nPtqv14G8xCDUahcgHCcychfzqyhVZNWH6owNosTbvY4rMGu6RWj9dh4fu4v5cZtia2vzieo5jo3sMUbRtM3CyH",
  "key10": "35wuZ4Hfn4opQUbeaYKc6taSx2o6oyYk16AjDAP4Wjo3Eu6VNTtZj6Sy1ymeUpNn977up2JbETMR1dA4sMnfsez1",
  "key11": "4ZiX9WrbUzPfcdsWuHDNT6VarFrBQbp4va8GXybvHTgviMsg1acfEhuh3jmTY4QesTghfba52AtQcigYkttRaUzs",
  "key12": "32DAEnHyaRmccpVh4XsH9YXPhBZrsuZiQoiGUgCWf6B33o4VwNzXFBN4SJv8EG3qtm3FPuRCheDKiTpb8nPXH2AU",
  "key13": "4Pk43VGHjhB5e27sGAw4V16bSm6vPRhfVsa1EcEtYrVVqHP8vMRWiprvuucm2yHXeEvoTVeLghhugXDRAFVquL5C",
  "key14": "2rJCRE4b3yLSuT7PUvn86EfJYQw2mvmLms7xrNS5M4tD7oHdLqVKzZ17AexQUv54tmFg2ineQTfWcvGaynFjR6KL",
  "key15": "2fXDzR2DPuhw8XCWAk8Bta5brytvwpUGyLoLW58RUQ9cZiwMih7p5FviGUvy8D9px2G2jn6WveYXMfHuGZRKGimn",
  "key16": "5GCocvm5vpRkkhzYwdrSWRovhTy4n3iepdxZDHUY1coxq5TL1M5QfUUT4boptyM8r7eBjTspgmyoVVMVLohkgDNp",
  "key17": "278ZtTfNtAjfj6NKqrGgkrhDFmxgveor2aXwTWq8tF8qkoHdD5iPxA22N2emSA6uCzVtJnfeaYodHoPxVD2yRr9W",
  "key18": "4zowYjGE7m73hz8PvGqbNvv9AuaLTCHx19BSGLqigNnaqvgkh8prV7tK7XouEcyZmpGupNEcNkp1suFaFkokJX7v",
  "key19": "3Q2c8PLmXx6uzEhnHUYn6YR3jPCVJZVEsDfwBjNj3vZrY7SBjVFAjh6gwGRHMUim8FBoFUb3HE54eV6PY761xRrB",
  "key20": "4N9igE4me3FD4qRSPPkdsXFMomfpeR3jk6qH5v9z9ikfJBqJheydi6WDaR16ZgHd4wwNf9XB9i6FVuAWdvHMr7x9",
  "key21": "5MMEdQtW5PU7K9KKxiGF5J1k44XfaWbdFwphy46QBctpCMj73tcGasN61Ko6ZAgBDLspX6tATqY6udN33kKvgepM",
  "key22": "4XM5UUfiq9M1jA17d3v9isGeUx7eJkZU7ytahU5PdytVWV1XVKp9S2p5522hWQC6uJLmehv7jLWp1MAxtU5PKaew",
  "key23": "4JYDxz2TjA2LunA23V2nkZJMBwDNW1iAYqQqVM4LCu156fTNdMAKAM3tTVLh2uXswEuhHnCpUBcD9AhqdNsqprGK",
  "key24": "4NsDooBcJ6WbqkKEGJvA4NEfJXiBjnbfocjssPFwZtWXFuL7B1LK7APwJxnD16BZY45NNYixouD2CyT3xYoBqzGJ",
  "key25": "2o88v9hwKqjkekFgei2McmRUfijJXPxGHGWd8uBez8v2r3YDfbWBAFiBfbgBLxkNqRnymjzRVCkMG3RA1dFU7r9D",
  "key26": "43WK6hyiVRY3zo76BMquaGwRoraG3ZhvqbADKPLpA2NKze2qHzzumHneXhxmB79XeWQbCz4NMMuWgffQw7S26iHS",
  "key27": "3kBoiw33kquVLH5vY2xo7LrjX1ysoenUatc7adv3BcwmWxbzKhEmprVK5sQU5Ua5921FEaRSnkAT9jw5rzLj2Wu2",
  "key28": "3cA6BZ33F359DM1G7Hqh37MCZU6fEj8UTRDK5RQkQjMK2LoXS2grStKpEpiU271NCR6Bgb2y62zAQkoVaGBok2NF",
  "key29": "4b4G33RkHpzvHURYKHv2PnJkLaD2Csry8zdpBHNUVQ2qaRYBz1RPTRcTZnRww9uXfsqgAEtjajcnffVJc8sfgtQ6",
  "key30": "5ksA9gu15brCJxonuZyfxnCY7WDNeFeHK66aS9cLRVqEh9Qf8cAEQfsUCD2v3i99s2HfZ1KXMxpev2RcBhJReuMX",
  "key31": "2qWcYmogtUSYYfiSmfaihkGLXh8wRxzoFiHZC8XWxqPVSexcnDqGh3YKRebMtcfeCuSqJrdFfM4xLVXJ7DZ3PegB",
  "key32": "35dikn3DtZ3VYohdRBCcqZh6uDkbgvoJ9dpBgWnthC7jiP1gim8pb7M1NHtsNjPt827VD5KThkSLdYUZTd1doNqi",
  "key33": "3kiCPFFEuYQRwsR7p4qfMVycyGnbFPqrDubupfsGSYhgJgvbQsphHsK9bLfnbbyvSKK9EjuECVu3rEHce7mbRG89",
  "key34": "4QyC98pj6Xt4tPTohTxoCWYdFvzFzithFJajJB6xRn7iRZoJ1wBMUq3JWAdP1ZH3e567xbpfXXKTYcqjADmjt98J",
  "key35": "3dAJrbm6XwF5eKJYdmLgTe2DHeEtWdaU5bhtyLNiGfkEtrkHBK41BHEQ3eZJo829f9Q7YyZ3Zp4Q7qeK8KibD85",
  "key36": "3ASptdAqJMMauBeeFjNGYFuMcxVc4jgrGyPe7rt4U1L9CzB8wGCYQsSKyRF9RxWyuZrfLDhstkNvKKLqtmnLziki",
  "key37": "2mJ9BjgGZwq5D3XB2aTfjvDm4kKaBcihyeRFU97qvpPctMda4MM1v7ivsWsnjDV7wNGMssyWmxMQhjjq8qso9Peb",
  "key38": "2wvxJNb8X2Szu9SUvBKFW3pPPLGud36RPCESjPQBzTwRiBXfjU9Fm1CD9AVW11D2taTfSRLs5fa9BcbWQaaZC1TZ",
  "key39": "qSKsnsYLtXoYxWozhMq9yUKQSkfKtctZMT9QMtRj8886MnDEU9B7YhxoVvkPuLfxRL4SmBcrAdxxU1Xe7QyNrUQ",
  "key40": "4GHwTfzWhfcTF8ML8kDG86bbeV5k28XNabiRCdANEepEsNGmn1AnS8wDXrLZMP6yH2vXJgP328f5r9AEKkQV7XPu",
  "key41": "18LEUtYnzaKLq6xcx34C8Y7LWxorQARBNZiVsGNe5PqnzAmiDef1DhvkkTFKnBxtK5fBtY8xz8XwCfDXBsJmnRZ",
  "key42": "4RZt51GBAFPTe7zMaLCSREHpiziNV6SJE9wADaGCJ1J5pWnpqqsaEaDxznz9KQm5sVrmkVS4JfoJymYXfLhZvrh3",
  "key43": "3yS93NFLGWrEaa4n22mgpS4EoFWXnTsrqRHySckNuYSBD1ozbqWSkkXEA3mzc4NuwGqKr1zgFT4Na4Rt61imRuoA",
  "key44": "2L1WMFzTSmKQEvvRarz1RzGvoFSBc7X9N3Xd3fNnmqJSqD4Vs8ZrSMGvx25XWrbqxCpRRzGmdgFrFR6XLXP6b1J2",
  "key45": "4ouZvCFEsb38P4NQqFNjAj9NPiYZCUQqzKkM7s6DfiDScmPWEZ7K1grFHMmy7xCzvoKvVQBaKsHfTxiBUrs6QaK9",
  "key46": "5PPVYcTeohvLfLW92d5wWUUuYeA6NyhPVEecPUPDBzwKBFCpSBPY8abeccfKuzjj2LxBFfqxZiYofZq7i8cYVpHv",
  "key47": "2meogfyJk2gozZe2aFYSYAjQiztBoMfpH7pw41h2rE6RFUnDwQXzf3CAK4nF3AVBNaKUqHDXp6s1GNYT81j6ZBfN"
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
