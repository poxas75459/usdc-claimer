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
    "4A7zpi55teDBZR8RWnxAYpSto5McY1C42hW7pqYJB83LC7ER3ZdHipeoBMRoGz9hC4VXjfCiSMy2UbVvDhG1Phjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fY6T68X2Xrg4PHA9V9AnH5mYtviKi94DdQEpXagDnhysi1oR2AAtAQP8Pv8DTeDj6uLCM6ABK4F3DwcV6GFm6Mu",
  "key1": "P5uui6SKAd4GzcQE524spW12YsiEzgrDQvtRAYGTCys8q3XqohBQRttjHbyQ4iHaDWFDBVePa9EemkJxQpGYmCZ",
  "key2": "2vAs6tSU8GD8ZHzjnkLuk1tpE3w2EFWf8krcthgNBKXokZgJm2jpijcvTDCWSWSebeiQPhWJtNDb3zjEw2giy1yc",
  "key3": "32zu4jX5KTgRfP6ZdnafFk3fx3WESJyrVATfqQksQWF5zwGpDMCLr9pEmzpgZkbWuJ9Ckd88v8Jf8VnZ6cNFHkGq",
  "key4": "2EXfufevzPPJwSzBJh7NtnzeL3PAbju7xTE45w24cevTBAmFSPtktb5HFid48Au3qkEsywdhRWMTZ1swnggrNHuU",
  "key5": "3G51SgRfq72h2aKPPr97A3wWd3dHPxFkJocn5dTUsNV4Wcm8APuZWiWHJzMFpbsPyd9SGV2d6SA9hCRiH3zmqTjN",
  "key6": "3TU8YnsXBH96hFzr4NwxJoE9GUdTkehieSbmDP3KDoNLbbu6AmQ6nCsv7ve8dSk41wdNTCuhmJLpnC1ZPzahgg2W",
  "key7": "2feFzt16Jh1DogVufEoFwuZp4DkvwBCpowyF9LQPsg21mXMtzxhvk3DvPMUoHgZVA69o9euCmZZ3csiGCRbk9DPC",
  "key8": "CHgZfzRpaSemdnvAzxTJLCrTsnJsiFNwiP14qGjE3uLhujmMrXTaj66hZgd3LC1htJmdkgzTqxF188vMta6zHVc",
  "key9": "5qBffTgPwbtGjBHK4Jx7JC78c8sYmFWQgyDJqNYjHwbZ1LdUQKGTXZhYCFDqn37XzCqWXLo1Hn9bLQfMBba3Hwz",
  "key10": "4xBcRyp4xqqpxpLkTQ8mJ3wtdU5zk6aFwDXEXf6RkGs3Leo4zmvvtATyerJ4AzxMuQWVViRtFQMsof15VnPvy9Rg",
  "key11": "3ndheyEVVMdK7NGsZzndN6WBxJCXtXmkvZKW9nbbBsQoN37Jm44p8L4YkSTnuvNfx1LF9iqebasLHq7gK3h3FZkP",
  "key12": "2bJuY1oxWaYmyzzh8w3h6MRSm3AnEsw1hhXA2yhc63yWuNE4WspSL1vvQrHzn8K5HcvjPeUBxGs9Hy6qQjRfsu4J",
  "key13": "5tHsafPiuHQtUCF4WkbZzTAAbCZcGwyLsB1dfQ4oXuE4CwaoZsp5kjhmXR3232QEMn35JW4ES76ntPRbwqt183SM",
  "key14": "242LkHTF2TaiahLpwxAeWMvFkBtHtrt6Jv7r3XqN9jQYVLVsFw34uwWvyx95nGdeck4kVkvTj4pJxNXWiXdQCaDH",
  "key15": "5HuhqfDDtRJKxy5x9CXeLXNsbHrSodcNPiAdqSqa5WXt2Q5rKncDKb2zVyh4Vn2djfYUC6DDpBe8fpW3m44rWcZ1",
  "key16": "53pXR4BuwdsYePii3CtDFhNnT45ZQB3nVx2kwZ8jGs2sPnSYJuVWryMHxQEyd8qQCiSHtgyHJBB77d21pTnNKbqG",
  "key17": "3fW1bH1P5eCzuMaBAVfCbVDxiAdnR7VF4F7Ecni1N6Qoma2vk4pKjvCbskoab1ZrQYz3bcSEYf1HTWbQTGD49T6s",
  "key18": "4sYgWKFpXxSodugJCsAXMDi1sFzxn8U6RVhF11P52fW9BgGtsWVY7oDcktjYcjRejixYxA5oJ4wkTMw2rBdAZM3H",
  "key19": "3yqSWxxBqs4yonYxxkcqnbKtVu4MaoMfqmdYkDnUnQhFUdA88ihTLFtQpqySMk1ZAab3YLW6JDP69HVMwBfVFSDS",
  "key20": "ZcbyB5xbVs8SjpEVMievs9aHwkFsN86bjyfqkqGiaqoTUR8dMrkwHQTEs1XbgGTJ4iGZowh6MtR1zaHp18jsJR4",
  "key21": "4bKDqRzAxecAiJnndT8F45mZrQxaVuLCeufdmFqaYxoJdhXnURLFPrAoe3414uVKPFZnKeB5sesk4eZFw6Ck3Hzg",
  "key22": "3H2jQ3ueijGqr97zvCxrUxMdxgM2qhNgKAfzmXoWW3zvY8USrm6LZEqQGAnpgBgrtRo5uVidhJEYSKz2EgSoht9h",
  "key23": "5AbtL1P7HzzGss5fyMh7wnf2WLqgpfpPgcmyoys1phRd7Wkb4HvsnY6Ai2oAYoifSCbPPYGW6mUxi3WDMfjE1ueC",
  "key24": "5ArQ4rWox9i2B6xMN2AcgkULyFJuCFmVhYdjC39HziNbavohHxt4YrVRz4Z9uNWffc8DkTNfrAdv1YrnD1VerPz5",
  "key25": "aiHEN7a45XWz54r3yHjuJGEtcfCqrR2XFXF8oLufzN3D9yQniySsChRQGcngzwKCNwUmZYQ3GVmxa8cRETUAP3A",
  "key26": "3sTrmXHw4zNSHENFnqyjSyE2abvr16rjtSJFLgoXMfUU56ebheKVAkTKgoiqrJPqofwfamWt71w55jtYHzVRUAnP",
  "key27": "25R1ioGX8dTMwR1HTNF2X7BtJ5PUD25uhrQmRSKfSCjYPsb2s5xy8XrS3gyQWvGhc78Wg5bjre7dL8if2vwkGwUB",
  "key28": "5b4cxFtXzvpcyUWhuMdvL53TVLdSQT6KKDtFoiPhYU1MUQ36Wf2u5YALAomCrb76ifFFBWENUVaVzHbRUFPpXWr5",
  "key29": "5fq4CFPD6MnWJTG7zBU7oyVAaj4YV2zKVixzjt9Wp5ycxBojjx2xUs4L8Gd893G6ZLh87v4Y2NYammEE5rmYZzpd",
  "key30": "4d18j22ekMcVae55XRaLJFraJdqeL4ojaUEPHmXPhq6tnr8DXVdg6SWDU4LfcWRKYzpTQKrDedSMJsctszM27JQ1",
  "key31": "3wogSYCEciDhpUQQ145wbihXqR2K9W2Lv1cKDBpAyY2KUybspcoAWFcu9Xnpmxb5ksKv73pER2PpsxGQ5CmjaE56",
  "key32": "5T9m9j1Udski3qTT9WCMKvtb5stZgyjXVUtfzeGvWfTMvrpUesdN7mo49ymVvs4vte5XNHvJ4GCT6QEyzs8AEL31"
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
