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
    "2HmohvXUuCD7kbg1pqcxSPTvzJjPg6G1EBa4ipDypL9rJpGG94sT7eZsyDy5vY4QHUKqRHHmc5pQTvgPXEAAY9Jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32YZfgpivM5LRKMzm47FhxBb4H1vkmxAsYNF8ZaWD5d3H1ntphLCsR8AYXUYKammZtZiuHb4naWqKNT4NY34Xv3u",
  "key1": "2b9ZcvKvTRKroXJ52EvScGzHbRF2HNfgfz9qxiQrg9wSURCquxuFyn17jffiohStbtvAPa6JdKVV51sHQZQ1qfvz",
  "key2": "2MpRWj2rR4N4CmmGCGtHw5SkjkhqnCS9zhFZKEDhRDAoSmRJNHHj7LFVrbCz7Px2kWGiY9nTE7EbeRMGi1uVKkQy",
  "key3": "4w42vAwfM5v7SSvyMqSyrY9TBbsBQXhyadeSHHCBPpbhF2r3NTY8fpXGATKhuSZooGbTatPpYmnvTyCrpj4ZahCm",
  "key4": "4pwexYga4EmAcvhYmkcVhosFW6DtgwEAcsefFqm3DmAKc2W6BzMHxVmmsAmLh7LdMGNSDnPZGDZE4GMPEGxoDuSZ",
  "key5": "HXzLNLA8hdPrzL3TDXgWGA4BjF73vot9hrMQwvUjQSA34wjo7bPMXK1igfRohz8wSNk1ukNT98CK1LTVvfGgpfX",
  "key6": "5t5KGyPF2s5fioqUEYV7A3WqWorGWhUsHJaG97etdRLuRANKsengzwXWrQYGpWVWaTtxZsPFt2LeNhF9MfhXWgcK",
  "key7": "2w5sWDVXUNuKRST4kmDSVKTCRtxcM4Dga9oD3Hd153VWQabYz6sPsnx8zSxZ7dSQjnaaEwrRyagCWnXcZsQ2MjkA",
  "key8": "4qQ9uU236nkVMDUTCFLMiRHimrgya3PvN9wMsC11TGUwc7XRhxYMnMJvEK4vCwX2HU4enCaSYNhKegJRz9Jb51ZD",
  "key9": "2bMANsAAYHK5VZ19djA1gnXmYYUqv5NfTfhRrqHPLyFeTA9VKf4tviUvpnuBv3tb22pwHQpot3WA6kY4sf9MzYdj",
  "key10": "5fxBb6gRGsduEmXp35M63e98cp3FFcKA1aWepC2gA3mCG1LSVNWGudJC2NQBSSGbJxsk4xNkpmdRq6peRXmg6PGQ",
  "key11": "5unGWSwHJBNnruH8A9cbT4DHv1FRnda7HUy1wsUzi77cewGHf1shDuLoZZ1CE33E5zxZMCzfyboHRHf6GnTAH1Gq",
  "key12": "5yPzUPBX6Ttf7AVYemPeTVSpXpEXSJ7wTXLdPvmQoQpBdqinAPKYdtqqPooDx6ErLd14GdgNEhjZ38LyTbdFyKYS",
  "key13": "3PtAd5UcHi5MS3bCUFjbbbnzULXBAbsgUgMp8CVHw7bB4js47YJKuAzLBg8waaHD7ZcdA6e1WqW2ebQWaFg2LG4P",
  "key14": "4c8TJwNguVaAy2HKNAVLaZ5p8zsKd98kwR2zn81wwEtrvhStaHKWyh3hrSnRQLt72R2McvGV65XiWTrHxPHDnE36",
  "key15": "4unPNk6c4Rf65SyJhuNKceRurynAS1HzSZMrPFgWrvRBRPKAgWbLkKmJbCjw8JKqfnJZsq1QArschzfSxSZtRhmm",
  "key16": "2M6W1D87ZaMavJjk1iba5yrfFmQH5SfsLQf6owRQwQcEhiKK97wZNYUg8HuqheeX7bNQYoVmkb4YLMfFgii2Cx4k",
  "key17": "5a94y6zq8MrWJepWT8Wp1iHRkgLf86Zyd3cULnPxyHAhjZWh3HVTZqJqQuUaqN38HcrWpUkr6savd7BMtgWbfi7V",
  "key18": "heNgfn8pMNMfsonzkJijukRtmBd5KcxmKDMENJrjj4cWVVEq4fysYHtGPBHj739vq8yZmDVXG7yw6uDjjd6PZEt",
  "key19": "52baLi2d5RtwzWqXH3Em9pcjPpmTMF2Vd4DY75YdbrkaimE6dbPsHL7PgsPe6kWcWZ1wF5sG2V4f6rX7A9NC5JHX",
  "key20": "4DFdjFiCvxM6NYy6BqBY81oRpYw7KspxRHiNyVS7pUHAjrFio1xRWd9tiiGECRHrnRhBPWJEfwtzHGA9UF53e6nx",
  "key21": "42EJHPt9v8dTWfamzQdvRnZE8HGGyHmHRjFFFTq2VbmFcSVyibdwHZjyH9GstpuUGddG6gEmx1U9qu18R7Nfz63Z",
  "key22": "ANBtggunoJLBbEwEqFJpgTewWpywCpjnCvtCFiRoJWLChUyHBsFZ4eUARqcZzHq2N6ZQsVcL3CKfTMG937nPJG5",
  "key23": "288rofDK3EqoW87NfrgWDLT3d53EM2A9fBEXKpmwVwoLWmZL8LwZFHgwgZMKfHNUNWD2XwsgN1hFMqiSm9tZvBS8",
  "key24": "HQT4UwSkU1khMtkmdLdHRWazjQhofhpe1BrJeFFLTfKe5ZmWHbaJq6DfByvDzJ3iL5cBPdNTyWSmvQtpb6K1tjf",
  "key25": "3zohpTZeC9tU3o4NYTUq52aqtJexdmvZyRUwLD2wo8MVEc96QMm1rdCGbHmoeDnfqnwXHMkifvQ4TvzTtqdPVpQZ",
  "key26": "5VjaLbTBc5hRuHXhSuHkDHvbsBdKm8KDCs4p4nXFSBq4fFXmG78NfPWt1AaqkA9pdaUAkec7QyqQDEPhPhpHvHjw",
  "key27": "55w7Ve9y8uqcRTVKPHSxCxBGKcZ9JoavMGsQUjUTR4ccyfJFyVWZG1ynAK38rcVyCtiSDEgRCguErXN5s5knTHkp",
  "key28": "32aNiB8DNDedy9hPt19QQCJTZD8oXsD1f1Mz5A2dzdMFtumzNctsaJaGvyqjCVNSnChyvMW65SH5QR28KhyGARjV",
  "key29": "3zXjF5MeTz1JTU6hvXWBtSzm1BBhuSG85xDkdcH5VUvcjgJLjjx1nGuCV53KnzkBo4aV16nQ9eSdRw73QvSsWvsZ",
  "key30": "4XB6W6sYBPoY6VMwGax7DvuCMMtxuzVQ8SWtQ1J8JwhHm1wHuQNun6ncf2rwhhfnbCWxfmNLWPFynZSBy9twMc82",
  "key31": "35xB6z3TWKA7QJaQT2PQrTuSnbBKqB7cYyKi51gJxU7tn981ZsVrxEyptmcwbfMBoi4hunTLUTXwoijyMhkMcXnX",
  "key32": "55PAyaehrpg1We4chRofKCRRDnhCfZdko5LDBrXig8Dg4iJqr3hooYxnZTxmbtF51dF2pHV3h11oKyu37hzx1yrb",
  "key33": "2BrspbagLtp5FVg6QwUxVC1aQyZmUqiTKijKVc6dSMwhX6ZU78RBDAkBw6QsLpAyNgSsViUTWtmGxHAfNSvqcgbK",
  "key34": "3XMFXCM6BGPWdiQyqim2Dn4LnB7He6TEVi7sgCcfTQUkKf4HTMc5vQvBwdXYe2ZgRZw8AM7Cx1fsEQt1CRydk7dN",
  "key35": "4JssdC38KtioB1MP2d9GB4m9doxqdp7m2qcLyhxCcuYPKFXUCZ7QELpigrCYxZ6YkGBW7JGpKu6f5VnhP8Uh2PZk",
  "key36": "228S2WK3zytDDvS3SPe7YGeM7H1Wdnzh3WPRXEbM7ejarQ1XCQV1G2tiDU1EKYvuyduBGe4ra6hPUvXzBJo6Er57",
  "key37": "3iBqhqiQFQxJKyZXJWWeHJZm1gZ42VHXsJ7nXwbDuP47CHWa7Nsggz51ipmQwmFeU1mNm4uRU4ooM7RqpvKWCahM",
  "key38": "54EzoA5phFNFw1z6nr896fEUqu6toWJ2jJRUoe9J7AFQEeTsUvvDFWRziMLnXCtRjw8uM2nZg4nA6BFbLpAoogdh",
  "key39": "39B3yDcD1kWqgC3o5VHZh6m9i74wagDjmT1RLR1k83g7NjZMrQonk9XxQsJPRsMP9qfPahtJFtv1ie2ztUNKRgee",
  "key40": "3bqwdgoMvDbKZgPcdaaJeC6aN8BSdNFEzEopeg9yz1Wg5msTWTYA3ZHaUBNbNmivz7Fn3w83NFch7aa7xeY1KRka"
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
