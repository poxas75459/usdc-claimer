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
    "NRZ4y9MX9wpZBwNJVokf3kQMWkX1DBFDnVowmR8Kmv4fgj6ejfBoervCTpLbCNAwKueS8LgLrVAzRJzrSQq9ur6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gWiCmgrN7UiRGmL1AjHDambHFEryCddCVmHpbAMqHbzR1r5qThV4i88XFexohC6qcW4jjiJbjwWFVWJMdneY2bv",
  "key1": "5xkgFew2GzsGfDbhqSpNeGMBuc26RuwAR3eJACuKBkFUZavXCAAyHTDUQuxP5Yvu9AxxDhdLja2gSF4PumbRv2XP",
  "key2": "3Z5eVbEKCWDwwFx8RAhjZAxSrax1nQKLjfeyXX2c9gB2tcqLjyXzxvpMTBpgw7yYnipnHFrngU1h2zkrbZTQfbgg",
  "key3": "5rntkGFPA63BKAVtVG8XMbaGiQnZGAoj8iVNko517gShsH7Rbd2o8nHe3PkfAtZkTdhby3LtJmRG9ccc64tNZkVC",
  "key4": "5KMnRg65hBeFqmKoXegAP2N81AMWLbdtnQtDsveCmC2pWsqqFpscv7oFpzjrR8ZrrXbfYydEKngmcBodNm9CDgyR",
  "key5": "3zmyGyJ2eYwKMCbmhLfzYYU9st6CdaqgKq62NjEeVJxNPgbDf9gZbBBiyybrTG7pokP68j6NCpuk61p4HpJv8Uf6",
  "key6": "4YYj8fCMfQgrNzcYrT89WUhNpzV7eWyYgQJPFWgg1fwWHxKx6MDkTmwXvYPRGMA33k2FKN5V7sp2ZRsdyceHW8bt",
  "key7": "3PjhKtgJeCGPRGVwm3vMFZqdPo1ytjEByxJxYR5GHefZFbXsGXUFtD25wmxow7ZeMuZAST5HyLivgWeVdVnmTgwQ",
  "key8": "pgMw58Wz33GLw7R4M7iT3Hrhivxtj9P1KwaCCqooCqHJHzHvm8Cv7RMFK7r3qetwjWFEPE3Pe7Hqkx6kNucAHeb",
  "key9": "3x2ExcpE2zepB7ffqyE7kYRWgpCbRqMacKzHyCAhX7joi6xx8HevZVfhRaJtVJrhz1B3m6PHn5trxf2qSc2pSvyw",
  "key10": "4qg5pVDhM3En2Cu7EabEVwJE6e1a4UgPotV1ZgSwrjNW64TAHkcDyYvFwiLnR4mQUpeT4uNS3E8drokTCifNFmR7",
  "key11": "5NvVPmeJbU7cw9qXUfM6bNC1ygCx9eYF6GapFnDpQ1J78Z9N32ykYFFBsSYXdv8CR31xT3enUTtDtnWAw87pzJRx",
  "key12": "2obip3CxEUTb9tghx66RKRF9HbQxJmHEMdKbmiUYJpbhYaXtbuuBMhUzkHXH2sDQPQEs4kLCaqrri9gX8BUpiFAa",
  "key13": "mZHCgfSGroDq6LveKZ2UVT2xhLBU44stRUnLhLKV4Yjkt8g28nsMikuhGoEVZeUUYExJNuF7kpmVG9PhV1MTbui",
  "key14": "4stGwbLYA8qCP8i2GRUwfJVJrHJu6DPkH4JTyJtZwggAq8krToo6jbz7popUsMDXCJDByfSRKZqPdpzPm4XcTMsg",
  "key15": "34dQETw8sBov5CbxtUiSGpPmdeTgZyhjtsPvCf5tUTLsTk9k2Q5hFc2UWG5naiPcshBZYCL2yoxggaqEWMqXsEVh",
  "key16": "292NHR4KJ4pcn9AeBCPyMNt6tu1V59BkxtUwKe7HcVASciSHJ5gPcwCpYJwrKY2iXwn4KccsUTr7u1bnkeiL2dZU",
  "key17": "3oXQwWsQgXDDNQhBBvNJCvQ815urhTnbcxgihsWMK2QH142mLHB1Qf41AciqDEjxkZuBiwe1RuspFEFkZwEc5Z4P",
  "key18": "59edzkGSD3PdsuUEiCbMxVnKA9PV6wR2eoN6Cg8YiC6mxMCLwc9MZb7QAxFkjLLwTqhZ9w8f4yAGPf6XYZgJM6v8",
  "key19": "266CL1W95UdfP2DvM3K56PifXgTt47sfSt2WJ7N3XBh1zDCRQ2aGfzpcVUMyu3zqG3WbJrSZznLKu2GAYbUfG2jK",
  "key20": "19Ve2sjBKaYRZ4Paxrsqwxz6FMzGWRj2LXvaZrd1JuQGJsfjY7soJ76xA9L1NwyzBLDMwah3a1GEpK4smH459Bp",
  "key21": "3XKMZnu637dLYK5sJLEt4ZbBJcbV41FH9Um2j58KxhoMMZjhyUX8S2Q6M4AmJ43jmkTJqJoWef28M4VFLr4BF4wr",
  "key22": "2QnsNCUoQ6qQfUKA85stm6g7ShUzNmShU9XNZ3oYpZYs1PM1bK2cgw6esJ1n6rEQoX2a3nxiN3oFFGZRvpc7uyqw",
  "key23": "s3HLn6W1GswRhiXZQsfFGYVxsm5aerX5u9QNiHXcXMRqebmgmXjv4JTkdcnwBvLAoLgqo2TW9Er5mFaMJSD8DLd",
  "key24": "3YfTyUURsTNRFw6n457AQvN5QdWoRQXGMB7kUeskgVRH9rr5cuxY1Nzk3DDD8Z4iUSMAYLkZPE1k8gwxZzT2Daec",
  "key25": "3dTh3fUmQSxGa91kfP3q39WnWfuRJqUiyTQ8atZy364iWaQFYzhAsgJYaiKBzoNLgudA17ZnHMueSv2G3txUfmL6",
  "key26": "Z3KRBziJrMJXqcNVDsZnQ3zA2D3eNgbNnGph2wXM2Fceneey279EXEkjezRX42grVMyMZLHpZwcgSN6TLqRAkpZ",
  "key27": "2182MppwXzLDUiLwHRjAwXmQXCpKuW9jMA8KT6Co7SBxKzrcpBxiC1ZSJm9Nn6jv7ZsmjeSpQEhcamZ6mLsBoKrH",
  "key28": "5V4zJDyhyYsxKemMmXLYcSKJ9oP4R9BmPpC5q2abHdcYQH8dkvrzQDwLF9gdDuucLUNc7Noqm51vZqXaTRqe79wQ",
  "key29": "MNyU7pE84LJiMWizD5bBJux2XVfeZqyUchC9JtRyfpAFodTHwxfLFcHhKKf4Jupprxpp1JkVkXhUXZxERrWKUvi",
  "key30": "mNEyyg6zpd6wC2cjdro3JxSTpqrQNRcQBaoGj8g4dStAjZReY9Bu8Xvy7kJZR5doBJPrsfaJNRxd8bkYC364HxT",
  "key31": "5RL78EMX7imFGVFocr71gLXkswYfu1DCSqNru8a1dkmqkHtnJ3swxZQoVgmjUE7adH6fJqcoScr7AFFyzP46aoCj",
  "key32": "3zujtBm5ee6pohxgfCtABHkUZ9prZdRcnj71p3GeKeyLJk9QPEn3zecwSUnS3PAwWKBBTYMb2o8FnVGaxc6iNfQe",
  "key33": "2SCjjzH8hqzSYjnWT5RyM2r8fbYELLUXFS7zfcDVoZKU6BiYZ6wcYq6iFvCHv2JeqoiPediyBVRMrmHEH6MoLGAv",
  "key34": "4GZUhtcGRyKhK8xiL9aSzegQLNy6m3kaM1AX8zrtxYzZvmVKmfDGECbdazApxxKeUKbpt4xH1B7PgdYJRiU6KLGJ",
  "key35": "34e2mhr9y5L6QgsWVKDcDerAXUKpYycuWttDmbqBVABthq5Hi6vMr5gBeoycaoLd2FUHvKxWw7b9j8mQYnHVmMBd",
  "key36": "5Fch6F4YDxntG7ERHGxbmcPwTYc8QfMFBe8CSNeTG5Fg1nvqUWe1nWJSL4TGnVTGi3SNytTfH8deF6UhexVNRSpq",
  "key37": "3hnJqXCYWyB3vQepFbFQ4DoxLLFAn7M2v9rufhFYpqMv1sWvZBkA1zYJKXiHHdaLsVPtJPreVzj2W1NpnVVx6cz6",
  "key38": "5FU3rAZ9774ZBxCTHhLTH8cmSLVqH7aWryr2SGy8aTW1C1EccyCEuuUTp9ayrdtD5diEtuo1VSHzbAzcwENo9voM",
  "key39": "3kaKYyHBTcKDjQ1oywAv2jUC5XH7Nuh9ibPrMV7ENZcRkLJaGRZtmQtLyZrsF7pGy3mNHR3oPySvQQRcsWGPvmq2"
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
