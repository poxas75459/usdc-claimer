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
    "33oeK2VFCUv9St6M5AU98YG6g6AjKPeukL1J3bXSW2D8ZcCCuB9eF3HymbuseFrZdzhtuDngHNP4bRJUAwEfTKyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ioAVReE5KW8rz6F9ee9VNsmxHEXE9JMeXQtjpdCdzL978shiEvqaZWAvuPK1orDpUaUoQvLti3yGkpfrf3MvVTx",
  "key1": "4KzP5cRZxKaRs3fkrBnw4CmJMxapJVhdGq9zGZxDFNaW9JPp6NVvcQ1ePPLECrnsDe2rwdchW4wtXabv87jqRXtR",
  "key2": "3fVj1EHDVktUsnb9pT81feTztGZKdJXuUNwv7pXsJvB9LdPr5mRiyWEWJbF45BTaicHfcJzbXGcDwYBpFfnKQDmn",
  "key3": "2PKa1o7nwNbyjV8bb9QS9irvchpAef4yYiZMS1sy6f64TkWVU4MJuxqPznNHhC29uKDnqGZGwH39R5dgSacCVQsM",
  "key4": "2FU7T7LxFa913atNgjWPceGQGEmS2Ks5vDqhoChsVr2X1td8MKgp5CQKTSEqHn7DC12jakVQc7JuA8LdttYhpypp",
  "key5": "58pJJRK37g7mezkgqBJAwi1uyxz6Z6qqMaFEkMkiXFXn7eVAeyi5uzekfTKs3bzYVnQVQzQ6eMJQcnSPaGW6UMLe",
  "key6": "25nNnvfFPqV9DCZqozFrv48cZJTMuGr5Ba3K5NK8mZxSyKe6gAirtRkHVPukiPDdSiVBLUCmEASkoKM5KDYZqb3U",
  "key7": "2FtURwycKBH5EPJba7eGt2fprtfPkMcVkDJNisKxMP8zeEuJmsKgdzfZJ2ELzE95YNJ4VxkPTuNh2EPP7bWm2DVx",
  "key8": "3N9K5M7gunQ8reNxUEhFoRKgVFyA28aQbZdw3N9KwEA5zuMfuHdppKeY2jMen6Mg5fopraLkhHeAihe1bFzjp1Bw",
  "key9": "2t6nXYfkyAY1Kxc126DerZ4S7zM3dMGyvTonsSModM3TFMAMUAXYfSqKioQ4LeQ2MR2xxmh55R4F5f5pDx9MHUnN",
  "key10": "3W5UDt2H3edzqNLfvtNbsECJA17NXbJJV1r5piQYvDXxVDYT32w4aq7zS1dH8EwCAzRLEGVypokqnTCG1y44FrbP",
  "key11": "3ztmfMfGAtm7koz9KJxivWw6FHoGtmxkicxqXkuEgDRZDdnqiMLH6D47eA5jwvQx8EoGQNTCnDprqWVsHfYaNk3J",
  "key12": "2SSgUDwrk1GbSZaq7ygtyJYSqtBnV3hDLKALqUyzRV2yWLZLvYyEEqLN6ChzUEiAVFRXDLJYoYoe4mbTQLEFNSnz",
  "key13": "3AMoUgbxb1MKMZyJVGEKg5EYanSthEmjafu48ffWzNPdoHPZCDQhMd4TjYMJXEiBMZVFhjEWw7aW5k7rpW5PcB6y",
  "key14": "5T4YzH2zzRiMFtGyGhjDKUX1mhKc9GQJqoVxJbwjvmrKsd6MZ75NzQTNQ11TMneqYq4L9dEYTCFHkFiqZydDX7be",
  "key15": "2FwkvWxLjzJQHyoJo5zquL5CxZyC3G2mdkrmSThN5uVbtvR9Q2tBHSHEhwDdN2vC1E7gwTJVHL2niUuTnXZdkd5B",
  "key16": "5MwGoLSWbxBWSefuaDqUtca9R2aaxE6CdcWUmm8cguUSjbhJzFzrynaWCn28E66sZYDEY4gqsi3Zkz5KN2SMPJep",
  "key17": "22uHxH2Z5JLfpWbMEvSbXAw8kRSPtKAwkMumKgZbK76GPBnAGQB6CbBQYhCDP6gfjd1JYUMQXhLyUHWBim38yeWH",
  "key18": "9PWcihT5d7mS5fGbPk97RBtH1KMmChyFzuDoMe64rEpwbdPhtBp9Q93HhmvSfGuK2um4TSvTyWhMeqk2q88BRw8",
  "key19": "3TkQZaEXvcdU8foemVYfBa612vtaGSttL9jRAGE8MPVz93DWAmLTfw9RwdzyeUPe1CmKV5KLnPHQfmE52z9YwHeY",
  "key20": "56K8j1p1QgqSZgk3ed7iqB2icxqE7SqwDnjJEgknD8za9vxmtjahnnVKnDX1SP2n93gsX23tW4UniefXKopH1iTU",
  "key21": "2oY852W7Dd681HgxZp7Abz1H9SWesdC4nLsviYEVpLxYSwEaq8DSt4jLYAZxw199KzYhZzePEGfsQwXEnQPRzXzn",
  "key22": "3svWLxpNk42dka888v2V2uumWGqz3mPW7K3q3FHBnCbAWsWReRev2gPgoWZQsNxySxT1Ajb3FPyrDwbECvSTv59L",
  "key23": "4SfU5V797M6P9NQgAxU42aKP6Kb83GZsEdofbcZUhmDwZ94WjffEwuS1ZUq76TTqmtwpZ1scia9ciqn9Pv5698sC",
  "key24": "61dzhDtU7ZJcCQeFNn6aPnS8MpKtEksTTY5Z5QNmKW3tJBSgvPMBkJ5PFLCjGzAwhEkA8NbKUM6a5zJm2c9Vf2oF",
  "key25": "23sVf4STKuGgeoJzNuLzuwUkW2uvHZ3GnJg3rXUwPwGQQ9nzL2CQ2MCcVpQw8bwtiz3Tq92xEfHBNxtZEknS3Nk8",
  "key26": "2U6PfqTr1mbki8j8ojgp8qZwVgebb92KwACHnQ9kzUM5wjqU7BwW9UfEA31hA2zuu99mJmWErJLoALJLM4jCtGY6",
  "key27": "Y6AXWdzdrU51XGhqEwu86hKFqnPdVzykWUtpQL5ehzVMqFQcT6hpbj5sk4ZmwuyzJGhNNwk5aGc65VsbCpT97Uu",
  "key28": "3YjVmHzefmDdKi9DhLLhePBpr8BgFb5PkaQMzNGmq5kpKStYqY9aWXoqN1PRqjgFbzYGXT71r5aFatz18wMXgY8S",
  "key29": "4YBYwWxim2pmh1RLMtHaUX8jsExNhJ2C1rguBRVisqzaEbLvUght5ztzP5CwpjWVkeEDENmvj2L3V5P5RVyhwvM4",
  "key30": "219XYU2pwStJ1oFdk1ZBkPV25R3ku1LPjmiLkHZjaxjUyuonYQNxf1fdQt2kLJXYXxA6zxVXjvfFBZekGB7WCT7y",
  "key31": "4mwqbH6P1GH6P5NLuncatvZwTCQK3DpNHEzh9ZHd2agXjU7hboLR8c1bEn6TK5Yu6HkZymxRAknt47XZZeQMUCUQ"
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
