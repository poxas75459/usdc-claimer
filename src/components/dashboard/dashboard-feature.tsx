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
    "2xViWQL4kHJDXiDEGRcSEfArCPe6z5JEhZucQXhqAub73mNvdQWK9K3jcJ5P9pmE42JNqu2hqKSYitPM1ANfPS2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tiR3Yhfig3J4YtkjAV1PoJRTfxixge64duxVoLy2ud2KEh1FVsV5gARJGi3k9k4gfFqst9mkbXikEAcLZVNCUnf",
  "key1": "GE6M9BLKDhWCoDWbhutwBkaRMA5fCSt1SxnjiEGX9kFP6XPimr8mFGWprejHQDomZPjSTKdM1nzXCfuTWzgpHyA",
  "key2": "3bmWupE9g18KB75D5ddDmVVftWXmpEhJ5UG4CMtrqSQzx5pZWBrnvD3UQRkoBsxJ4yqBPbmGGWDLJ9cN5YGW3ZfY",
  "key3": "5t5zTTQ6BLsBWSbgzTY4yZJKqJGHF4JkFUr1to1dBFfP3NJ8ayQpgkzo42YVu9W4KYFVHsxc6YNPU2gPAn6ADDyy",
  "key4": "2kha8v4Z4YUnRS2eSY3aoZoqCR3Ewas8Jvczty1HFjiW1KZSunhv6zYEdZxbsTJRnEiNfbQUfbiyGgVdJLUVZehY",
  "key5": "5QxdVfUCbNbvMacz1vLQnHqZDWTPXaCZfFTRJXzCtdN1SZjsr43QZodj661dJKDBrd8YqAPKa9ondbkz1JLyEVx2",
  "key6": "2cLqaXkVjWHM9sY7iepsGjku7webcYaUZTUG3iSMe6Qj4HR5BdokWzNGRtCqxthQctHjwr8DGSaN3Rg87vTCy43e",
  "key7": "2NzRPtdFNZxDnCB2GCDE9caGdaXd7Yj6ULhWvj4kg6v9E3LcSAsbz4fncaLMUb3fDz9QtB9buTPKaeMbaPPyFDry",
  "key8": "53jmz3jyEuUABAESqB3xhkrvsm5Gmtyim3p1SAZ2AUk8thvQMnzwaB4YQfKQEj4KcEpbZeBz1UM8SHdfVGdnBK47",
  "key9": "3qKJ9NjTM7ptjbCzd58dzYqDwBXS1E1uN7cZvQA1UFuUgmMaTG6jHTeuWYgqrH8SMx5LhBSJ6qHcRyrXXps3ARoQ",
  "key10": "3gdewjPaF1KUqrWnuRrCLwcsfAvcbjuSPqHJbFBUfiuAZYF7XRqmyjcRqoSA9yovxZKtgCCPp47JPnAvKJ7Nkhb1",
  "key11": "38btecSKyvaoxf6nCfppkXwcEjeGXYGCN9q74Srfv93YofXFxUMpdwzraBVCA1rZumgcmLFVMPJycVBj8nrKSb75",
  "key12": "4JbByieuYqc2dL8b8Z2RzoqzNEgFemshGNGTF4avtukjZ3ohZAKZPnggXqgESTkD1MEdj4ze9TiFAk51GPJnKKo8",
  "key13": "28sz6czkCW79KkrkJV2JWHaaEvaKjauJoU68yJfoTzNoWdjVJxLamw43vWh8ZPLbPeJZrzdcuw1WHDsTzY64ijjj",
  "key14": "4dujUWhHxJYRDcYrVp57cpaWhPgvZmQAYhsCeCRANaRx1PMuqmwkRpQ5cvTyaME5DnP3UmVAwQ2KRRSyKKToK91T",
  "key15": "HYF86Sv7fHVvWXEanhU3eFDrEwPBoNqDie7M8b8TEcYfaZYwv9rwZnK9hGVCDBrXMDajbhqSfWrhQHh2cxZ9CEm",
  "key16": "5HR7KeoVKUEfXA5cqtpaF16o6KbzFmXTDVJHGqdhPcsqXrnV4LZ2gKEoV2i2aeobY4yEHqW1j9oRPtdAdQpCo9EC",
  "key17": "gh5yBaRYJEVkn2KSE3kodCNRkvsNfjKgKnjvxfsCN9yNPMRmQSEWbQeMHVzUhUGMo6tcDfALSBbZmDjM8uk5GN4",
  "key18": "4UviwoY1zzLMNcBRtubh8AbWxc266Jh2DLuTg7Xoj1dG5CYm267rV5VQsU6d4ckFHTQV8bd1mJ2gJmBPC4aEtgjy",
  "key19": "55Lc58wBPo3eLdfF3Mm92jN4gZmzfXmAeFhg7a3uE9b7CnKkbjWYKqnaGMJN41PeiA8SjYxQxbfd2AshyG1sQs4r",
  "key20": "646C7rgHVgcjNac5TWfbhd3EL6SA8uZwZ87wNsu3DeSBzFYhvzF1sf7LUGevVDUtxaUCT3aNricr5b6YVcDwzEAr",
  "key21": "3TQgcFm9aiPMbV7vLEtjvf4H17vjbJoWaPn8N7Ta6QHUv96ghFMuvLUVUhWU9RjXJLyY5AaiijGcxP6CKhbGLbns",
  "key22": "cFCQR4jcRhNWLfH3xNykDanYqD6qL2L62tEPuxqckmsGnbuhYceGNjcdpRwHJFU2cuLvQrprrjxgPsm1UxJaJ5t",
  "key23": "oCYLAeQks4jUc8w7FVGoMuP9xPpLCXWYbxgKAiTaDnqeqQK1vTarY5nozdeFiDnzkFCdXNNVQRgsLdZgMaT9sX4",
  "key24": "2HB8iL2bs9BqSo1hrMRroapT9oW6r1mj1sWEVTudFhXFRVizLycQrRw6MuaqUAmBLq1wuE7sUA1za97RESUvfQsm",
  "key25": "2JZA336L7qvf1FCpNaxdQJPuGm9zy2sZ1nwRETWWq7THkjaTBixtZ5AZ6BmvEfqpERP8oPwjfZgx2yqftguSuJNX",
  "key26": "2kyaZjpVAcHNfkdXotu4E77KpwWoCLBxRZmv2hCHb2VospMxpV8mM9RwGhHBLFC51ci9nnWx7wrPq8Xxr5zhkB1T",
  "key27": "RxUkZLK2oSxZMg6zRp2HBQu4o1BH4b4ok3qwy983oEzJoSx33iXUvzYq912gdxStA8ynbUSJmTeAcvMQ6tVmAsS",
  "key28": "3H4wNY7qxeMiLwj9LZon6q2yTHbKAgApraEhFumqWxZ1kWxRz5Gi8rkvw3GgrQ78FD4Br6fNcPxFpzcwfgGFPpDo",
  "key29": "5amUDMiSWcbGkn9Hdc7j7UxnatipWexn77FEQVWPTGGofiPNCAHrGRKReJZKWXMoMhnqAxhjPomvZqCJ2F24jpbh",
  "key30": "NfaAuTBKrH2oN6cAYdULpcK9bXbKGVnpNJK8W7Uj4cfnCkUahmLJRThH6CMPjkXVzZ7Qa4b3cppDrgV2ABzqtoK",
  "key31": "4cbdbVhy1Jbq5itekPTAEJtGfsrLKHJk9BNtkdgbx3cELPDcfF6MCjTpJcuA9mXUaD8jvi1NxCpEv8R1MfbtwQG1",
  "key32": "4QsfLPk4pzmTQmpWSXMbb1oTUfhvvQ7N6gg1p4gSS3tanm8UZFxPc1x2Zo11DtjYk8tPu9iTTAD9yi7rmtuX4Nra",
  "key33": "2Ga7sMoXSkcGUUV8cVRhmLwdW8ch2dyZifLScmLnq777UhL4QMAWLFJZjvMfvurEkZHvLtHNNrGAbzzyoQnFnEhi",
  "key34": "3JAnydEpyTBc8XDp3jqgEcD3gYDrErjQQqjZ4RHD3YkJotvefVAUWBQJfxV5Jb35yrz2Bq2ywoJqdw1imW49nEiv",
  "key35": "2hi6bPqPpvge52hzhtzu16WRcCE2cfcZA1sEQNHaBFzNa6JVu2mJ983tvyazkgqPyZkXZkwqdiCBVRxffowmk8dH",
  "key36": "2y6pQTgsw3qYrW1GuE2kdMQ2n8py13uzUQuXhqG3x33njup2vASuu28NCimruyAn6Kn8g7NuupNtULymDFtaRQm1",
  "key37": "4xQKtnCZMerMSDBFnJ4wHsYahGhjZFqdrtwc9nF39mcrBujSg9DrsgkqimDSUcQa32k9tar9P7boiKYHgw9pyzNA",
  "key38": "3rPLviYGr8CPq2R7bV86CaKCXnbCzKeCQ7yqyCzmpaTg8pdpGmTyKxmr9wMqGxGGA9KdExDtRsiuhFRc25VYdf4N",
  "key39": "ggurhFyvf68f9CeZFcMbm2sdnAvtSih7SCrPdPhzeQRpQ32x1DpNJbD9eHoN7gj1akRAhoyFPXHfSh63zQULiwh",
  "key40": "5f57kyNEYiSuWM75pAMwJ37NzsMhXFzgrPUH2cN1noC75qqQnBBPnTapFgc9UaQGWuVQrfpL2HB9id8taRbWHqQX",
  "key41": "2cBxirQzRYAWVY9VN5EiCe4HJPcogX5B9SRgaaTLQFKGcdkFEbG8sEmFCGqaKCBLoSyTdRev2EEDqp2xMZK9ZtZ6",
  "key42": "5sYweZpd8eYSVK5u9ahha44vu6CnrYEMR8RUy5Dr7DcRSD8ctJSh39RyJT5ccWkMn8CYT3Mu5AAN8RXTaH7f6Tt3",
  "key43": "2kQTTHNHqeD9tjn8xBzXvuEmtimDNBnuxPYbsdoow2zW99GDK3hXHSArvmV9Ku8gXzEKaqFgibnYXcafxhLyDv5C",
  "key44": "2mQn6CsBqTxaTpngNAeXg6Byt3QBsUoUDnzguR1arEYWcJZ6RUUs1wCk8wrcoVpSxuGEoBweQ5utpk6KLGZKPxdV",
  "key45": "5WVZ4xjHD5FuthEFVG82NKcdsuV2cRWv62LLaw7tCwfrcZBPfkQJMQubmLdJt8FuHkWsDYmwmjZWTHwUAvcYJomL",
  "key46": "9Uq4iW2HGFsNBQeXFe1s6aNQhnfvNn8euYGZD1P2kPoL54iozYmgJFigG77jwqKa3junkpsopYfFawAZHPP3gFD",
  "key47": "363PQXq8QrLMUX4ifE6nB4g5K3JafVJj6Yn2WzUM8GX54vFu8McKWrZei4WYxNJL3mdziz1y2DM5pGwegLY1aQmR",
  "key48": "4Dg6fUWFX8Q8cwTGSVURQGhpMSYi7DiD7MmrHdtdB4p2FY8pvXvgz8JiS1Yy92DNYjuP8WFCH9S33JSeDh3GGTsr"
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
