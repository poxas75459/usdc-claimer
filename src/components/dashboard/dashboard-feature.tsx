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
    "3qhmtwS1eG3ZhkyR6wN6LCSf8avGbiAqjRQJApjo6V3XeX2xpjL6fBKAXTVt5aP3sqZG171Wv1Q87hRBz8VETknB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zeiHLDcoREiTex66YMjST1UysTbqDgsc1bgHvQjsvxHkevEygjChFzB2x4Kd9oFVGPP3AponfJnCL3j6zaBP7uZ",
  "key1": "59hXrWWRbKiemCQBJMEihjZAXgVwDFx7k99EaJACjbKLkUiXGtAmHBiNuGa8CJoPo9T5bavJmaXasbB26Ts72yTh",
  "key2": "5NwsUE2FSn5xKvHAEQqebwfg33y4Gh33XsXzVM7AqAQHYthsqZDiJ2o7iBpAYirkxbJj7jnEEP1gF9AMgscBHfjC",
  "key3": "2cBpZxCHkJoib6GLog2SNB1uYzScNejpKjCkvGTiVNQ1NoD46qhGDVC9bpMDde5FUvhqxai5pyRjNfk6dy8HeVEL",
  "key4": "5LyevAbD28E4Y6kGU1oKSYmnKEQ2y92Y3352nSJF9kjn7iMzwLhvEXrLbqCtmqtTo3da5yHkeL4scPEpqcefJymK",
  "key5": "4YpWSJvME41WVX92Kq6ZEXaRrrYVx4L32BABshMN3NeAtXDpVQyFe5m2HWp8oXVPPqvjSzuUrAxrK9KHYVwstQGo",
  "key6": "hwRGRnLdwZxxNtFDNMtLe8oT48RYxYYqCYYxkLBupiv1Acf2SfRKixxUbZph2eHLxxBxMZCJbRsnzh5cCBunQAy",
  "key7": "5S5XaUg5rkoegugU4Z5ihyTie21nMxdivPxXAED48ipYSzgSKQgJKzEKNj6vcEqgptvRMDd9Tjhfswwu3d7MoQaR",
  "key8": "2hYGPVxyXXFsHiHXg1Y63Ak1Rz5VcZh1tNxroUj9vENv394dMobcpurXzn7krR5gHnewEhv1Ftu1vHw7FD1yjrJh",
  "key9": "qkkXj1P287oswbm5pw16FvF5sjVJr6qyNgJEDUaygVWt8PTpks613aFnAkSRSYiZHre9W5PzjtMskyp2eLReMjS",
  "key10": "X5MrXe1ojFQSD1WXKm3ZtSWfGNP8zvhK4gYze6GXemBDwTUCZ4x5FHkFdB34umrf2Lv96cCuwox9nBWKwHMRx6K",
  "key11": "3BLU8cH68ghrMAAPEaNZJyYRLqPzsnDZ1uisnyVBmb4b6zc2rC1hAecqn3uHYEG8tFS9nKTG5bbD8uaSrgnRSJ5A",
  "key12": "2Cw77BSboabEcctkhk8jYefcP9nTravCNqqY9V2mUvD3Je7pxf7p4EEdVX2GudR3BkWmTsWb9nLH1MSHfY5A6hzs",
  "key13": "2tQXq8KuvjpruvyQund2qrVesjuPCFXVFBHAMiT426hJ3RMYpUsGanV4NH6JPykR5stHoG7CR566cNpLi17Gmeqi",
  "key14": "FXD36PfVre8Co1hwjHTZ9pTVQhrUMMNoYaiQchBKrAwM3Gr4YnLR69gC5d2pBUUqKLcXPx2nQ4PUPhgMSAfD1HX",
  "key15": "5qmu5bg1tfEhJy8HVUeT8HmMfoiJ4ZAusszacjTCZDL6BoSgP2EBKfK3pPGwuznBEeP6xb4pSrZu77gqFsVhMDL5",
  "key16": "4yDLxqVzwF16Ccpp2TX67g3u8knmVKvboqWn4Ayrc182UQxpHuve5CwQrPq3S9t9HfJqrW3zQ14mpoq6aMuvEA2R",
  "key17": "3gE7fnWW7w2w2t2hMrtkaNM5SoDFKYTFvbhjtc3WNWFWZeKvq6t91cGT2J2dgi7hYSJBtwKk9dz13oTnCwGCii1C",
  "key18": "42yw4P37X5SHAr9Coc2LEqDWwfEQskALfhQuW31DpUjKWSgpJwYN6muiTHuZWs2tEQqUoMcvuRgFPmScmF2HeFUi",
  "key19": "izf8kfW8tQ3otVSXAd8vzLQs8YwXbgsL3XuwrhzW15fWpLoB63BSuFdkXmLrMcmjFXUNcfdoXxtHuTyu9C7dk9y",
  "key20": "5SNL2E7tsoDa37ZZCcLtyu9ngzxZsJH9yvtMKnHfjkL9gQLwLbBujg68YPDsHzERXjdS17WX9BcJbsxcj9QGjbTr",
  "key21": "5xjFoipDza7Kj9Xvo5JJDvm1RdnPUHQG46rddWtdqhxvJVbTqinp5DuBqiSnmtxbhrDGKnwd2r4KQEC8JATEF92q",
  "key22": "2nk2kzKwwH5VB5y5dp2DTnoidCUnWrWX3EhJbP7qxKuxjHEqv6Y2JYRQGnw11vB55QUXPLAddon5nPtfWUzgxBK9",
  "key23": "4SuTcCLGysqQ6EsEVuBngTYK9kxcHgzSXdbaEjocMeVZYXsEcmyxHy3tRKYAF6izyTGySZH1MAtMbeMRDTJtGQ1p",
  "key24": "3QsV5MQ3UcJPZm6WrW1BL6HCqimtV4xE8kGg2vsAmLRJMNDvzennA1gp5eDyQKaYXfybm96UpXPDDbHggSguc1rE",
  "key25": "nC7iQLzDPmX7RLCg6Nm9dCZhuhdLKfJWbxgdCuiczwDKYSr9MXXeLEVmBSm9i69VinN6bw7TmmccjHLagfzrdUv",
  "key26": "2hsnQpb8hNW29dGzZdfSQizHaRRpLrzf2GxZRinhwdQhi2Sq4LwsZ6dbdUTQZDbRuXkRxMdSWwCZBCUhXzrPTgE1",
  "key27": "2WQNomH1yzYkWvejjH3xexRxMG36TdHcZ599FMCh5nHk7xSmVBt3KVdQWiBGc5jr7QgojsSQPGyUJMyKUUdBLhg5",
  "key28": "5hQf9zebbSFpH1tJ2ZnEaia4zpoxsF9tVpyZN7GpKtjhdoRCrHym26dC1KMpRCY1EaYCAyo9Cn7p59kEHTFUkveE",
  "key29": "HEEFcATyWT6ZmCMYxJAb3R1EQRqk99d91wFcRdrZsA2dEkwHNryohKgrR11XJ7CwcgLTJgBuDp28519cYkJMyML",
  "key30": "4RbFrSDnRfPHvavu47aF4Z937yz8yPM7yEGFzwpBtpSZWnPQ8NiunN1MZk2BDT7BhZc1JUsYaTA4ZNvTfHi34Bmf",
  "key31": "3mGpTm15DgAR7n8HoV75san3g4tA1Rp63p63D3NNcS62qiqgkaZdq3hYmoHkvSWJYqSNZpWWHwwYbuWANK6c232v",
  "key32": "2Wjg58UPG7qGZVtveZYoxm2skSKpgDZReULRDu4oS4tTYqPAqt1b97tEX28WEJowgGYxriehBcyRgfSHXcL8CQCt",
  "key33": "q7viKhy4qA45m6D7Z2HPrhbGgCgNmPiMhKWpU42jZRKuD9GiCMwRo6qsTpNwnJozDBWXoy8FKGHNTCubG5p9BDF",
  "key34": "2eT4geZ6MCtWatA4wEV7iCymjVepjFh25VdTBbzVG95bHtLMtU8WPekmWScr6DqRf5dcqJdWQyuFEf29JjRyAHMd",
  "key35": "43CmeijRMkPGr5gfQpLEA6Dhez7pMY3wxWCjmr8frD7MU7xr6tTHq3hxEUDSdHX2qFEP8H3m7mewjHsYhDz9WUci",
  "key36": "5ArV2LetjhFhTWn6n6mjgsx4qoNaHGzNWQfGtXetXXnehomSjAhUugQof3Uq1yUxPkSGDBmW1Jmsq2qHsv3AwMAH",
  "key37": "aehQR5jbN2z1xXoAMei8PEJ7ujqcoG9VXPyBqj5FEppnx8V3x4wvsteLhgHwTNJSZqfwRtJyJ1ffuZXp8coCMo1"
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
