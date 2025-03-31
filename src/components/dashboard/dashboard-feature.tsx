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
    "3r8XepJKVbdArw6Hdhv4hTqk9nubGASL8Fr1TXqzkUy3iVBAHEXLkTBJrKtzJcH71KUZnvwkcyQH1JbUDw1C8EPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24JMbXzWp5ckuR6YtDEYHhN1KRZEMsofMd2s8rcRxYnJcTsKYdK3ubydRnkEaqe4HSSJqDxTyyWNv6TevMoESMxy",
  "key1": "5Q6ZKiewJUoCHSEKHesoD6QRisejCsk3A8es1dnjkvSzyVx6KXyYKWB9bBqxTsE5XVvaMWDsmUi2n5p9Bvui4UYT",
  "key2": "5heWn2R9nsPEURCe1fvjLrJBTyom1KVBNp5NsEswekP6K8K6Rv7pqkhBNddwUpZxiX7rbWGW9AUHXwUvDMQE6esD",
  "key3": "4pkaCmmy6KiEhHefccNAYSDrv6KXrvsSLcGuzRBJ16QTwsN6HPn7kiGpgTkhrdzs5Wnnu3CPA6qNu14edt7cDbXx",
  "key4": "4LZRn31ebtW1zPSTQTzuniEoVm4Ek7NMfPZsbfqCxAQHYuqABBpw7xjeYtYFWxNw8DPwUKXDkMVBcUCmDdyjLQE1",
  "key5": "4QUotfkswPtub1vMKRnXSyP1FXYTVSoCh8bt9jetH7vgWZAeEahkKMmJvzEkqgPrY5R4VhAMHLu2ZUcDErFGD2qG",
  "key6": "26R98aspNdCftwCE8rTTg16sdztifCWeWiJ7wpYxrY46YyABC6zUKbEwGNntLWHpyY8bA3FqndQuLCTr5YdtvVpt",
  "key7": "65kp3nk8D59SKdoem72FrRMjQRgJ9dMnu4sCDZQFVzRbYXC1oDarkTvvomsRB3LrtowZuyRN7ySMEqPgowYtihVX",
  "key8": "3PmAo7WMx5DzTx5qcYxU5oABmtoTRzkmK5oEgh5p8ANPzusuB5WfGNUCqbKwmF3vjtxE8M2TS8zY76xq6PJkuiFG",
  "key9": "34zp6URpJzFfNYyhr9GusFsJABECHhDb3ujYxdwf7K8Gv624j76gGroMSfxhz6oUn8JdKT4HCxsUaWm374rspngW",
  "key10": "64t4niwv5416ivTh3io3G324XwFuwCd6oSEG7NtqZwYmBoGMwfrsy82vWNyqP31d5fJax1BAWuTkjyvtiHfnucqR",
  "key11": "uUQjGLvvYS4eBYixmVip3jSeU7YFHJ6oskGMzqMuQGBP5Z6Buqyf3SiMyzavwEbB64sjrD35UCwBEvrbEnNRdFh",
  "key12": "PTg7xLrMu4YTggS3bLm7CfhatgEthz3UiLH1uKQj5cqsPpf27U57CXPMpe9tVxEdVXW3bPZYe1PZDBKfGGnVsSB",
  "key13": "4a53NnjM3VXfMxhLR7MmD9V5h6BVr9EnedG8wYH2mVDHdqXpBGE5jwN3FX2RBhBGQyKBJvKBM8hQyK1rt4LFgWCg",
  "key14": "2QV4byymfCvGDHGnHHB5jYN5j6dbUsUtEsWEDExsfxBCnyXvXAm8oG4ds6vnjnU2DLXwfNri5RehwUAMFcYJmBfj",
  "key15": "4GzbY6Vu5mV5MYj6jTK56Zg4HjyXwUZ5rqCDS6kp3cmAz5mffgYwh5a4rPM58a9fP9eMsZFs7giJ4AfcWPz5P8N7",
  "key16": "67XHU2845h57giVJmVMjrxmnoQ7mbycMp98nepjumcmCkx5Jo8JRAS4XyQZxKWNexkx4yQYfa7LuqgZ3zPneP9kc",
  "key17": "5cSvYWF437ZAqJiiDdzDZoaTrgo5XQp5qWtSdcisjke2m3WVxqbz3aJXiE1bUU1n2fujBRNLBWfC3in8HbunR381",
  "key18": "438TMFrEFTxSGxTsjTr2GMNBvPF6Gtwb5deYoUwwVRgnCMYf89ww6AGCPNBqcC4HXuKSjdU4xbuRYpCca6SKhzun",
  "key19": "2hLkLwjEqCBZmpdagKk8DikjEgHMSYbYoPfHE4GeXuPTnhHwzHfQa6g4mQzD4fStgpvE9xS7pVsy1JHjjhBnGQ5m",
  "key20": "AfJesiY1tGhwwSREWx9RqHGxmhSxJYEhcThbKdavQn6v9krAFfvrnJsjNUYV74M7sG1a4SZ7Y7mwaGg1waAd8fD",
  "key21": "2uyBt6sULQAF3YNhtinLTEhqeRnLN1JEA1E4J8GvJL7rjXX8bhFE8buNV3dCistGiUxhMyCQkjoUWU31N1bUdSLN",
  "key22": "2C15KLB7BtMDGJF2roQqpHukQfDiikcw35zpyWJJ2kkrFEKE8GefvidJ8mueJ3kwCKdRbbft1RvkheM1ksrFthdF",
  "key23": "webgAhUeNkF1YukYtGNYvh6qyzC2PEo6Z2S9JHejJ1WdZj5zbtRXuPGW7JXBs4uiHKs1U6AaUgfSLRrstFyAczR",
  "key24": "493961VsWuitaBM7HPDCUDkKk9AG4F1x7FY1frbmA3yEkrEuEBhtyHECNr4htDYPMMqMS8oZMgecTpTcbU99Vp82",
  "key25": "2oG8Eo7mGefPVFhVhi3yieB6n497q6Skkwhio2scuVrgG8G6wAG9CAc5kQGuATcFRFPEQWCTxY6Ri53EKgrY16bu",
  "key26": "fWVJtXwzJwkxVvQ9MH7LjFPrbhKnoMk3S2q2wNVrdoK1mBooFsDYAzDnFHdzQ4TbzaYqjPrZH4bH95ojBzbZYxq",
  "key27": "2xCHGP5TGAU3TNYoefzJF4dY5mcKyy1VLq5Cv4Yy8TxmKf2aKU6pwrEtaTy59af7fmqtns5t7kne2JzVEhaPSQzB",
  "key28": "5zgGq9HgXWVg8iaeuA8fqEibm3aV4Zx3LphD73deUpRwptPUVoZ3vBQyjKqea3aTHDVuZQsN4yGpjFmVjHRjs29w",
  "key29": "5ZbjLXDVKcjZphqioFYL2cHwt3WZon3ancYjdikh2JnfEiCqu819Eq4jrcjrzwpzbgKMKcfizNVWPJZTv5vwhm2Z",
  "key30": "3NSa3Xgcjbd6wDNBrT8L1cHu1S9E1zdsKaZ2E3iZyUBL2tCDce1faPAhk17aWA8TLMci5V8WsQ8mLDvK8knjo77c",
  "key31": "3P5DkoakjAmCPHuCXMpvmxRG2NGW8X2r9HKmpbHMjiSfMWMPmSrq2Giqk75iaTaNYianBZyaXpDpvsmTwE2yg3rj",
  "key32": "3fRjr7tbVc2ifsLkU7FE7Nk3Hpnnfn2UurbHHkzWAdoZKkhk9DNhSBwHS75r9wt328FPu9AeBhsiPZdNvL2NKQZ4",
  "key33": "5YTV36GE812p3DtNprjwPLJcokzRbdUL5jYsGuMkPud7Q4pBKUikkbJof4YgKRqDii4QzhdyDmWrg9jPioUjozz7",
  "key34": "mRib1unZuqerwpXvMuftZ6sGQAvDZ6tPVZEQKdvzSjwL3V84VaxaYHZwHD7nCEKT8CKKuKgWQ8TynEMoGLbjmrx",
  "key35": "wuiw7goqLrRRhLnHBR1PVSdqnyRM8eLdv22u48dNA6Y5xAKagQEPzfAqBdmszm2CsfKhostizix7RVKGKcEteCP",
  "key36": "3sVLE3G7GVfrSEQZ31ZRcyQcBMBs5TkdjSSJ1ZKLtHfrCr32786kgwko1FeXrBFytgR9vhvSMv8vNB2GTz5tT4dY",
  "key37": "t5kBWUmCX76NciFqgbuMUdARHXeBcX3sVAQ3GRZWDeoAs5LdGrBPkc51ABQ5bzqS1j5QKRH5mxaUB4aXnEBvtLP",
  "key38": "51XLt7716TdZgtFLmuwMiUjwc1fNNBrmczs9cY6tiLDARZ68M4rwAZ1rzw5mL6wo1Sm7B9EQL2Yb6KfyqJ6PMbGJ",
  "key39": "2mNVUbpLEEbwo2k8NpTwYerDZXKamiwRfDsnUiRvyedMQXGBqJpVga7mSUYVKW8fw6CaK1EuJa4HstneF5hLwTah",
  "key40": "5o67ba44RNSYxw42Q74q4qZ3CddJCxzXVLZtKArNbrVuFxxw8yPjVGmGknfzDL6YKGrTMmX2BB3fAVvGZQSN2jTS",
  "key41": "5ThjtECD7o68hhVre6d5FsfBSmhw591Dop87ewyty9urCQitYSZo9xbcuKvZtKk5RfCWhW7HATSj9PKdxn4JkKgW",
  "key42": "67HM4KuNraUiVCuhSzqXX8SyCmi1ij3FpxsJLL64mteQKcYaXAZ3x1PrY22n7mMtJxSGM2iR15EUD4x1JYHMcPcM",
  "key43": "5Wqm65bWhMG6H4sdwQRZAZGqKHGQ1T1cGTtadn2kdrUaZrYieqrJbVYheGKYxrM8rgQpyP7HJPBMqTQWjUVjchFL",
  "key44": "5bCdj44x8AigTugAwydeRTE4FjxwavGxbKedDbJsFxZCi3rkHsprqFKiNB78ZKGb64pdNwDW4nUYEuJjGgDypD5B"
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
