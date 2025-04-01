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
    "2LYjH6F7Tj4ruDNSha68pfzLbAZznbeHMrDvgSkB2pka8TzvrAB1VaLACs7RcPsUWeoCvhZcVcEnKR7mLVaadfbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PZw21zhrGJttqRfXRzBBHz6w1rMFSjt5vYzA4C8kpvdCQFnnAdYRE3dA3vzxnz7SLZZb2xat5EVNTfG31ELdKiN",
  "key1": "h4uteH3bDhv14MVqemwsxp5BQzbsFoEtLUdVUT4tbHUHcHxbbgPgX7w3tYZ5Tc35XXfUcnxjJedyUboeDeae55p",
  "key2": "2J8GjyPWmK3q1xDsoNDAzjs5bVqtMoRUx9LXVRTysDVVSimpNxJihQRSSKJLG3gQJs66TTQxQ74aDK5hN3UFhwaz",
  "key3": "2kwq5iXASPULhoccdQ43psYYRGBeXMLxhc4KiSb6xQwjiCET314dcVVpVKLk86xUZsi1bDN42xN99qZdV3J9ChTf",
  "key4": "MK85zNDdbdwCirLHosLYAuEEEkaQ4GqLUrqe2HMMRURGLZ8Lk3M8DMJZwwiG7shSbFJ2hBvrJHhN9AQwMp2jkNS",
  "key5": "RLcFNVVydcZaFqqxez2SWg1pEnwrMSYpvuJiG3wkmkf2Fs3pwrHZVFd4SUDYhFug1ANQQTXcxmuR1UupoWNGUWj",
  "key6": "38kZjNug2G3HbaRAa9F6gNL7DG2W6t8wG5VvK7MJCmgEyjRobY4DaiD4DXJA4tBQRmoj349mEZ91ANL9ukYzSx3y",
  "key7": "5DFhP3Ztyt7BVCGAyRMorkenR7HKWW7k5hJyLQ1XdrRKSCxnXEVMfn6Bo6frytD7b5FPQWvATKveQS27qFxdEEPf",
  "key8": "5Sk4ZTQGJeWRJajJTTNGxPFiu9WuhyTdkPkQvMQGY6hzNaizYHHnMTDhc6NkHxuRmg3JYYzVuJXk1wWL5JsFTqfh",
  "key9": "26tZBXtySAmsm3iyYF8pLYSpejYZgVTqBsjt1LsLpPpDWtd8jthfNfh4mFiEbuqXFTx53H9SNPtf1wEFAhRp9hU4",
  "key10": "2EyVAqDEsCe6nQ6SCMXTWjczBa8r4tfHuvUcGgXLBvKR3dCYzJXigbecRdtmctb7wwfdKbN3egcpMwSMhk6rYGeQ",
  "key11": "4hWJQZp4hcrW8EaYL7LgKVmnQJ5fSTb4bsMGWK1yt2QqQsX4xXyoCzsH76kSudzQx3vDdk5qYoa9HMvTvYcE8wdX",
  "key12": "5WLuXC8qvyZEnaegUfsLtBuw5msL6re3aQJctmb1jsq6yRL8pHb791yV9nXD8YdAjhDRhETqmtV9HjKtk9NuMYv7",
  "key13": "LdFvSbhrMdt38yQEbrqDfwVtHvmFfMspdcSzDs53oFTt1QqPYH5WWmprLiJ8AzXyuekkbjV7n6tLrqPWvJE8r1N",
  "key14": "4H68qHKWsZVSC1mQoKXFN3t4kc82bvgDXKVMNbNmBGX82V3mw68EUeG5aT41QV2gxuz89Lv4atgCYrR66MPivpXS",
  "key15": "5Aa7bxjgLMQeFF75GgTwky8Trn4ZTE181cXFSiDSTfkaHkVVht4Y9zmfWx9ajXyfkV7g6rHkNCLf3LMqCm51XaZj",
  "key16": "3QfxKAr6CUNCRGzL34ddaPhs9xUtpJpr8cxbj7yQv5DghWPPbTzyaVMD8XvcRUhhwT5sLQhGtPVe4Xr8hB7avTNk",
  "key17": "sPmAB7WBstsbqXZrQAGicUHX9qrSX7uxXrQdd2gzaAYNYVQLXe78UorrVwu2QHN4dYxpSVDtEuzg8KKPSdQmgcw",
  "key18": "5G3cs9AF6WK33Lq45Xd5yJfG23qGjmqUQ8f2rdom4wFTPMs5rvKdVt8gApkTWFFtLQj5RkJjR6xwz1d35ZK1R67U",
  "key19": "3nFcevtFpuq8c6KEkTgEnqQLwCL2wuvazRyaChLr3xCjD7YgxtNpMRmB9wSAzdnVD9RQmvhSFsRyocpA1v881qFH",
  "key20": "2HjSFnA94kFVn2pqgWCtfA8yGn97TXGmrNezmHM9VvtUZRSdtdVSPArkeT8nt4NWAuee8iqCtiM8foZdbhpwrZxE",
  "key21": "3JC6epFiuHBPciuGYS78pxjTvmqsKqZ3foYY3egQECtdCJodHeDXvkQ1nHLe5hw5aZC9XavrfAqoC6u4pWkFEKRc",
  "key22": "4UiAA1JfMczzvdJN8Lh6hKEEhmhBdy4cT5iXHdg6L8dACHRLZu5jYjAYZbgSRyyK55jta2V1VrgaJDGyfThtMMtD",
  "key23": "5sTY46ejSsVNAy8SMBzMqfP9qeaM2a6H5tUsPmw5g1BU5kSr1HdsP47TsJCWwJiSSh8LicqykZFoFg9Fgx9AVmJP",
  "key24": "35pV25zAjwXoz9ZhSuwh2MK6TMAnBmFBaDPQNZjnH9uy7Cr5UaPNiKcnypUYRCgeLSfZFXeGiT4dsJx5eKixXfet",
  "key25": "LMcirSM3bNRj2hs58Hc8fEhctUquqPPF6EcMes9JhKFukAWDZTbwrjemLXntmJ7yTWb4CRqnKDPJdGt7xXLC8XF",
  "key26": "53gHUa5ZhhbJajK6viLaCdupaiu6qggesiu42arqBtNmTd7Satbt6v354oMZDWDyryrz9Jkjzzwk162S1SpEBvyT",
  "key27": "4c7m1Kb5TEXcThw3qU7NLxFUPcUcCHpWc6FndfeCgp15W6J9Bp2vMhWWMt4BwxCpLimn8r8U9a1VgHEoG8BRj1qf",
  "key28": "3ftsD9GAWbp4m1JaHNsb2bg5ZDhybKFV1kAEHydA9rmEBvxw9pgEcgXF8ics8K1HbawGFzF8nZaTyGkKbUQsj2dg",
  "key29": "4fn33kyACbM4Ly14fLEcuiEzeXnawwzrGYgaW4rycHnUKYrcWSCYhEnbV6cCuL15wpGmBPwdtjH9zAQsHfRHYqDB",
  "key30": "5QhnkVrm3yNBbCharwPWULpQaaAo8EXgsnQfKDECx1DCC2HrPpRK8xGggdzHxuPgoHzrPFwkVvKBkWztzFQLkTwg",
  "key31": "mWcsVm27b9jhhm7fuGwFNW8ijdMqNxJGpN7yd2SyS2Vsau5WZPLZPaw3r1yuPejjCHoKca2AMHR4MrW2AQs8JUL",
  "key32": "2xHmbWdMDvvYSnC2y2NVgR3R55zZzqzyDd74RgzEW9WomKerWd3Tidu3oZhNBDXDAYDvXa4RYNU8KUhhoezymVgd",
  "key33": "2De71ogX9o83U2KkN1rjU14irX2nJUbnvfgg7fZR5r4hnrxu8p4QvJeypvg7Z5U7frNy6NF9EnQaHkxxkgB9HVv5",
  "key34": "6wx8uCgBsceEk8fYU6zPv6txt161F8prQo1ANsVidmUBLUkF9P8prYNMaXYWzPRupJCVS8z9ZHZRbJNw1gbuNML",
  "key35": "kxung7oYrSxyUz5wdFnQxD1ZwHPoJWbbZckLp88mgryCmWc2aUuc1yVuxKJR9xHe6go8gz6YYN2SkA9Uu2iGAC5",
  "key36": "2D2ZaH4fepYWUEvGVbywVhGs4L6odK9JBuW9AY3CXBr1cssYYT4uLQ13ZBoqk9zPTECC83YNRVno9N1VXt9CEp5j",
  "key37": "oqFWGZiZfrfqG1sJWGp5McxCtkJc3BnKLfxmsjuZdp23tEQKQT3WWLLCMv99kChwRR6xxdefawhwdAVPsJrpYpu",
  "key38": "5BL9whvZRdRvVBUvLecKwbvFaMrFHYS1isUwL5ZGCHRpvKunLmoaCHcY6kDTBRuijNPxQcoMuta8dbAnRLXYqN16",
  "key39": "2fduJKQBJVL8AkJpvXyyTq2twpMpKaxkbazdrxAnSifiUa8TVTSYig9XnQSnTUtjAVczzbPSgCsqakg6MTHjWtWj",
  "key40": "51SHCSN6tCZwFkcwZaV1FgQ3i2sqq6TR8qkU1vShKp6LiBK1P3pxU8Qyent42VaN3hUkqiNN46SJHrAmoDbxjnva",
  "key41": "3n6idk1cHsjxnT9SmkaVsXSCcK3Yejhr8KauoAFZ6StPaWgVpDXDTog6EReqDJkm4bjpxZCXpTyUpbQ81bfaCnKV",
  "key42": "39MjvBL7ZTVJfSyWjxpwEnXtMfL9539DcE8EyGA4BP6UWgTEscyvuznc69bBXT8q6AKtotAKRJCJA3hvR3ZjFtrJ",
  "key43": "5suj95ahEnof8KEshLrtBkFpqHAzL7ATFowiWoCSY2tTT3hhddjiDkG4YNsBNJMKkdEtFCUVmVURBPHbJ6nsyHwA",
  "key44": "5bKLrkP6pFLb1ZsH5v9ZpuHaP6WxFgC4qVxPn3JyGCDpAEstGvkZzoCL783KiuBA7jSXtZTjyoXznuGuHj9vJVd",
  "key45": "2qb1zo4SPstwvn7NbyhW8DA2bbbJK2dJNrAdRHdvHkxRYmWmL3RkDWHHfpmzxEUAsyvcPkZGYNuQx2Cwtj94eJKS",
  "key46": "5nmEDnRpnF7Ddfzwt3ttALuvaKi1SWkGDukxt476JF9wnwapigSoECZGpZSBTMuWTiYqG6LbgHFZsLE2yEJGXMsv",
  "key47": "3RV9iqjLkDCNUMH8kHgSBtJhE5z27qYvSfLRbR8YnQvDtKyhGoCpVZNMKg5T7cvZCVcB5gGMaXarLwC6bDWpvFk5"
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
