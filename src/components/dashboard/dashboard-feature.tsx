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
    "5avWHwfqcAPS5bZkQ2dw915rN8RmRDNy3Vnai9p5uue3Z9yhWEcF3Db5iopSJmHEAaffWed9ccbBBMY4CWpHBNXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YPnD2c78MeW8L4ztont1oT1LcFPuyEDqFQMMiTForEzYrDRc7CVctWbQqUrmbSZC8WWaWbRTkhiqaWiXY7ViqLo",
  "key1": "5QLAH3Zrc4hKTzwYdGJQwbE6oiN3cLWLeLitHAhHtzFra9XAEPeeDmaj3Xzne8r7fbrEYpoGLe5vMTb9NGgv5vok",
  "key2": "2jr27o1vMVif2ZJSZAAQUi52YCFtRtKBu2XBCoxzGeuyTFpYrq9WRbdrd5VoT192WTGixsM5gemi4HYRfajjan5S",
  "key3": "4mDTVRCvV86Er3mABXwXvjQpxcQiRnFoUeB1W7TTanidEYY6k52PnffTc3aDb56DGPxx9mMxFUvQjoLuWut2GpdH",
  "key4": "35zzWtXdYtP3VXkRsVhcCjs1NBRae7CFirmHA48LdztiUzbB18DdEszFSn8yBLgx2wNF78JWb7pYoGZkFj7UxvAb",
  "key5": "22oSGgaY5jeVa85SorGboLKvh7GsavRqZRRCTnaeZmUnDgEyHqzakvh23J2U2VYhWMixzU5jzk3ThXv5x5izVYcw",
  "key6": "3kKVKs3LpSywMkJyqAAPKmyZzCNtmLUAatR6hKs91cMna8dFeVqCFQJdmosmVUW5aMKTfPBtRrVWfREqp5SCfaXm",
  "key7": "5rkdX4F5zEXyqCGY2Jgg7NTwDgzQsAjbCRGCiUXcfBYYi8wNjAMRUYitVyrjXo3kFsKvMV4STtvkayQ89jk1eMZP",
  "key8": "2iAV86tS15JhadjkF7S2TZWhCrEhf4AKoRpxaFxMVuGQ2PJzb6RDZYnwwJ7rmmR6XZ1X9thWVTAUxgG7FXwADk2o",
  "key9": "5GN8GpGfQELpuaronCpsjCUmhMWgbHDNJiVH8A1ViCHDicpX2CLdwBeJgi8TTPbqv8b3gxBJYriv5t59MAuGiphN",
  "key10": "JHfTwqo5jaidGGQtnwidNz1V5mz73Yrm9v4LsYvVvjTyeT4jTq4y5BDy4TrpheWPoJeAzadSRD3DP8tZfaAYZCn",
  "key11": "56Zagp331Mv7QSc9iAn6JowxWhEBoaVv73BAZfyPV7ERc257okzffd13RLfPyUETy845PKfBfYA7o3aeBGghFhic",
  "key12": "3G4RP4nbBkYMABUh8jH4FcLr2QSGzDjhR28M51s19sRXWg3zqz5A8YatvwtAAHbMWt5JH7wSY3cEGSbynM2xnE18",
  "key13": "2Kq73Rq23CsuGdjfJ8VpSKwcQawWRNzr1MeAvvysDLKB3k6Wkgh6jEVMFKXExt8cfFTDNpc6BArSCP38REuM5bBF",
  "key14": "5Nj4cpvvN3Sj46REp5Q9VrmJokeN4LgLV1wznVj5XMa64r7XiRCtYvqixNa3XmW4EE6EccA2xJuedHpBMDGy67uJ",
  "key15": "127oDbubqNLUjA6t8tkJuhgUqtjY11ZCKZEu6xgmGXSh2ArHg6rAHiWVU8dviEXD23RGJWN9mnWVnC3jXphWeQQ",
  "key16": "3PYNFWX4qJEDvwDXxnHAB15vtn9aqp4AvDTymyDgpiZVpqg4qHvjroaDW3RxACg4iZMVPJ6ARbUEnj8aqK1Bw43Q",
  "key17": "2EFJnkPDK74DaE2obtoUkzg2rMEEbsWeRFnurj8Lxb94nZUeaRXrv3TMbbS7ERJYxL23uFDWZKx3SiLjz4tXYuoB",
  "key18": "4BPZ5RcrEsNezpWZ2aXRfzPtBSTqta4EV4GoBYB2dbHg2sRpEHkqrtZ6m245GD3ye6t8ppJaw6pu6B6s1Af3x4ca",
  "key19": "5rfQXPvaLRc49Mzo1Lkp7Uh2cSC9uc5nct4dAcUN77B3MSzE9e3z6fqwMVjVPVHWz5Vb4mEgj7ZTwx6NA4BCddsm",
  "key20": "Sc17JzwH9oYbaDwXW37jNoRNDuT69e68L3jqStpmwBgT3HHKmKuo16jLqu2Ma8Eygsd1LndgBpt8sEYYmChkdFB",
  "key21": "BStjKo2jQci3JKG1mZqJMGGQvXBDTqzMmJwKKTFMur3ntiWuQ4mkf4BaonmG9yjs1r1RzW1JxKe7CgfLN3fyyp6",
  "key22": "21DNEo8AG1g5b2QqaLGdzuigSLbRhN5dVUUz7vJouhduZhrPdcXFZWDVp5zVKZ1hc3xT7XjbAcuZL5A3Jn2MSqK9",
  "key23": "4CgZ67cx2B8CvUDv69DiCXgptEV7suoPwZADRM7a2ihxUrufKSNtuRArs7K72E9A5kJnLt22tCBMkkzoRr6XBnhx",
  "key24": "4Uy2fEn3nEpKFr5s68JgsWSpV4LtqGUWgWwLFoBi1XSdARor9dZbXkJuhRZp6seWEvq88Sa6ZscLKcbb687WawuP",
  "key25": "52pgFXPCLoq8xDTUAXwVw2Bor5VRr5cMfQPBHkvgTvqhi5UrUJm2oUSjpUbAGv1JrVxoHPtoVGRv1JJch532V8YR",
  "key26": "4RbsMzn5SuwY5EMiMcDZEZjV1VWodtX6QXS5UU2QaYiDb3sCcjQLu4ztFNuNB5Kgi1WgRkrrJrBVjagPu56iVvsc",
  "key27": "5Jy8xmcirpH3ZhxXyVDSqR9iPpdqGTvKt5eddjXtygLxPyozCpdFD1BCipGa6RHHSirdrg5Njpd26HeG4Rx64c4q",
  "key28": "KwXvRLTRio4H8S67BqZ7rT2U8LkQnDHFsAcHqzfxXSCzkGQZTiuEDSJsu2fpacUcoNzRhjUDZ7oMhJjKvVR94ds",
  "key29": "4EekTg1StzaY9oKiUVkqJ4PTLyjJCvZEGGkKDdX2ThUuNtmtcS2k5uFMBSDBxRggRk22pG1RteK7TDmjzPhJrqNr",
  "key30": "uGKFBBLWQs5FQmEDeQc9Ag1dmAY1AczXX3vkEkBaEuebhYmgRv4kNvTZBkJSrj7TKDpLKMzQZ8YkBuzA4oxAUVm",
  "key31": "2KWF9YUdxPvirbG1tnFsKJASFByvgVBFQu6Y64zshhC3ioRjQBpDjECizd7FC1WwP3jTRF6yq8kqAtzwJ7pgX9wK",
  "key32": "3AcfqsTAsrmCLpqtFGJb6TMJnNCDdCUUuiLsx1NHvrcLWbjqMTgyL1WLKLMbsiV5F9G8TTQU7yKJNEyc2m3ij1Nu",
  "key33": "1295GuycQGw33RpGRf9cfkZbKqyAz1YHCpSAYZi4oVPCBfSjZakozjnzzMJMCXUHwwgFdAG8HVVZ6J6BCu6PpfX1",
  "key34": "442joKc9VsEgf9CXGTs2VHU3uEo98ksWw3B4ExkjYERjVengooeX9dRboxqVspoqLd2hb5VUkUciTXdQkPFF658C",
  "key35": "21k4XZUHpY8RTEeT2UhkUZMX6uk4JAJJGFB1hng1g7bcF91UKKyRGi398XjgjkSk85ef1Fr4K6MeKNC2Rz6Pv4Le",
  "key36": "539jMf9ByB1bcrfrug63Hi1yhwMAAXVX1qY9NiPx2kBa9RcmM2CT9TQWKJcpQWc5gJbQc6vGE2Hiysjmb6Std9f8",
  "key37": "4j5NXoM1d8vfgGYBUQnYgbNKgEsSHTe91vipiXtwFuh8rzfNmY3JsnNCjRGutoEby9ESiauRbRS5R9JWmxNkCyZW",
  "key38": "5NPYyP1bKbtGxTy2c2saNKL2XVLAt9y4rJBoSr9XGvjJxYxQ69hbB7EKU9DVNcqVK9wBiZmVHdX1kcLSkUxa1tjX",
  "key39": "2kfiLbngdcEhHsoPaU7wbNB8q9PbQLFmc8LHVkSMeKBx4dihho8sFQZabcGRmwUfxwWi3CLXv5tek2QNcf3Zy9Yo",
  "key40": "5GVzyyobwYbJzEDXhgooMMC5HAGYhfaJnsnN3kirnb8g4sWUy7VxP21xZdvTtnwobCZRZ9JiEHspQT7rpDHAJsqV",
  "key41": "gBXc1VCcCYy5scuKymZ49fu7xbs8CYuubyqBvyKiwHjqjBJVeR3iZerWmHUBSEoT166WnPAYAjshKsereAc9fj1",
  "key42": "3x8ovbAsa4P476xwMNXbXS8uraUWQtSVDRhXxSacQFHr5f78Xsc7QW2jujmkJkRJs4FTAfzaP4Y7a3T6cfV4LuyG",
  "key43": "31rpXhhDnwASoN6QhPdCb8mBWpERMyHPpLCBUWTFXpa5rV9QAzjDiLkYCGRBJ5rsCF2uhkbrXwZxRvwGdwiiPk7w",
  "key44": "2dGo1m47qgbqPoUfsz4jPkwBA9Cj6TVJdbmeE65FSccWjpZiQaGxyrziVjRJCaT8tTvjyz6V8D6gwAAgQENVfS2q",
  "key45": "2we6MzdP98YLaQSJcyzxE1cvk8wzE8eZxKeytG3QZ4hNDPoQU4NhzdUS6SgmKC8CmMPFVKPfJC5xyi1EsDmjFVvQ",
  "key46": "3Uj3i1wtYMiMPDDoF1XGyGM3nvxqj5984oThgm3FV9a41KhZtDN2GELhL7rYkLJWQwoBL2GFS4CDUQzUdqXJRznD",
  "key47": "4597ZCYXqARSgxdptoijZtcWgAU38g9kQvAFL2TEU3hAJuoxZUJrrcdVyhKNQtnQFJ8atmXDn3tF5wsMhb6u2xra",
  "key48": "dUtu9BnYc4J4CP8ibBTgf8Ks2EJwCCBN5KqqoGKDDfT7BKLdeCym287Ju3TfgctT2CfcGbHwSyogW8RYLKi26SC"
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
