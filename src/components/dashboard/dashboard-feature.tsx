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
    "3wryKf71jcHisSgRPby4W18T1ax4RbzVjoRB6LkvJ7gS7ZC5S9AAe97aafpFPS7vnMRDN4vtcAxvY4pfBVUWhza4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HqqckXeuFDQZme8iUYJMK5smXd1K5iEhVnLwcwySjHbtFgLxAbmA39Kpog1QMe9gahfNzL3tnJ28H5RcKAHsHm8",
  "key1": "2bKP5td2BvVenr3xjaPaq8ksNQDKVjgtWNnXedMNWydz19SGvUJrYp3RGHAcjoawBd8FqbbX1R2ELEA446sudExw",
  "key2": "41o5WzzDq6rqC5RxAhLHinQaqfAek5Lzh2VbCoYMurCLD7oUgDWRy12hJ28fSQSx4Su9jR945KBP6quwbbJgFmkN",
  "key3": "3LNhJvHAy9mam2Q6tAaWBSEHmnaNN2EV42xeypirQH4chkjsgPfRmaC1fxwobsT1oqdfpbJppbkUnFeKpUE9WW4C",
  "key4": "Bk7q973D8GngySec6EoBcBZLWtwJZvJkzmUkXija1cA1r1aMByUhy8m2To57NbNZnoKuwQcu4qEgfQBGtaXrws9",
  "key5": "2vgHDvfGvetZyGGbAKty765ZP2t6qijZzQ8MfdesLgUViMNXBvsbpBSjGoBUzao7QbPHfyb54SdTWGEoRoDtkAxv",
  "key6": "qS77iarRsqAmZU2VtfXTFT68T4nSBvPLQFL2ZkqRPA5HTTcWttr93YPmE3mCRvNCWB7SvDVcS5wrv2yFoZrMZKw",
  "key7": "4uRoz4oPYCLbuidRHAgtEk9GQVYDjsrVrbJkK1VMAZ3MjhbLwKczwu4g7m43wfyTJeNsmb22Z46Ntsm5hEvjLXcJ",
  "key8": "JMvSdUy9gGfH1qmtvJhghvMQjjqrhVPDPR7Ya7mwZmeEnERUuozgjkh5rchT7nT3oJohUT67gGonzJqYoxWAgHo",
  "key9": "4tdso2bf9eEU1vwEeE4sVMWhM9oKsUApogLyLw3pFSoraMpcrmHXXpjo1cQxeUnoHg1ZNud97FZWvn95WofCrLwe",
  "key10": "5JRNmjqEFYv9xy4GHuTiSCoyrp1GAWwaibiiVhcm3587H8TvcoekJkXvZ4AcLw5CJSPhj5ghvoDAXFyDETPRDcDC",
  "key11": "Wxxrdw4ZLahuLXGJPdvyJkGcYToovBFWF5S8pZhxYGRxdwsZbwgq4JHL2UGj88j7cUMDikLq2hRDCeB2mUin3a7",
  "key12": "5Q3EAgFpmYvaZsqnUJYvgc5yGobdW1NySf7GcpVNkoZKRxqEVFkyD1Dw45QXg7fiQ4cxMPKhBABS7sHfysvcvPVP",
  "key13": "pfwwSMhvmp7nJ8SPV1BushHmWEAPWjeuj4E3fVYYADMEkfsuifHabqWU7cD46U46iC5v4G89hT4g4s9vGZWkSQJ",
  "key14": "3pMs9wsjmsGnvHV92zM8PiCQizWeH8s76S2CoBdqCRwCHD8C45dwZwzDTxHheTzez1J6nzmLTa7xg9d1ZAdhVtQZ",
  "key15": "2Mdg11LMJxovz5nC5kjvx4avHULBZowC3HZmUpDqDSJHr9dAfHjhN7XsFGsjoZ6CvRbhaNuZhrR7HcBmjCXzeoNs",
  "key16": "rS5Z178nz4vosDRxqhBJ6zF8LDpnnb2Wgr626FkwyTWhqTscy3b4uvqUNmPi6KQrhwdQ6UMK8iSP6HWHmSo7SiC",
  "key17": "584RxFz8Lbr3SWp19EgzZ3zcHHYLb7XhSRG8uCBzywPX8MZyMY62kjUJuPhsJKtBqjgQ87kXD1vDLsjs6VjAomAc",
  "key18": "62Z6Tfa1XCP7BwtBjUTF6YrzBeiZ8qzhP3RyexbH2vY52jD3E7tjt616j7KyjFC99kT14tTun9es5jq1n14gmMUp",
  "key19": "38XPgbP2iyRBcPGmjDMmAiX9x3hSe7g2nfyzvA2Sx55fgAXTq2oNMgQ3bET2UwJEs4pzCnB2fshXDfjV2iPfYEdk",
  "key20": "y2VwZvDL1BRXvbzd7ikvjjGjKawWjibb4faP1WMcJtJA19jLn9JKCqwobF1U62ckpGXPUmBk4xBbqPKaV4A9TYP",
  "key21": "n5h9fnS7xXxmjWD6sGzoEi3YGKxWWnNZphasNtVGWy271V1YkWoWnv54AHs79yrk4avnekZGTwoKTNaKfCffSYq",
  "key22": "64fYmDKk1GEJphRPEYeURGTSP1SSzDwKApqBfuZEWdmLGkA7ZYT1DYi3H21APZqBqeV4QY1xxUEZShngRsFrAMVd",
  "key23": "2f8L6Tv75SfcFVt9o714LPTDozSQfGmzQy2oNTk7b4Z23g8oGKatCcm9kj91VGRzrrGK29Redxxdu92yoqfQ1t7t",
  "key24": "9U8bUwaRp8C6z9P1jf4oFKE7MggiD341wUYA3oJqDHhJcrPhfhayS11WjZepgxSLAnEisjuWcrEErt7JWdNSQAW",
  "key25": "4MgExZHh9D7xVvuLjcv27qJzgwGnd4iAnfdbom1pSz1DxtLx5w1zWwLZD1wzk4Zqx58nKojFvnq8SikmYUabMFV3",
  "key26": "38YfVdXPFtdHMZradMXrwfD9HFfbdEngCGgXeaz9wceDaz4H7bYH5QLr5goYt7qGaPzoaDF1xc8LN5mgTEaLvQAP",
  "key27": "3XdkYBgpobTzTzKj1gM7vJEXaDthVuvMhLJe6SKFKChtZUE2f9b31Kw8Vj4XKhXSm7yokZBo5xQ8kvUtP6BFxZw1",
  "key28": "5Coc697gV31GuZ6CoW9PBHFFUqm3wAJfsQyxAJsLxm4qA1LPysWvCjE2aeTPN14corN8Yt6T6WQh4viYpEUVCqub",
  "key29": "3A2KwyQ8iadNN4tQww4xVMo6Qg6wmV9U6uJ32G8RjereYsbV1DoVmAm5d9T4gSz4if67EVhg9fGt5D6Nx9ZHYixc",
  "key30": "2fo3JnhyZ8yZ9BpG1iDksGzP8xZxRrUVhSdJibHsgWt1UddQSAGfisFsDYhvobEKAo5rGKcWvjDHEEJGo8whrmRt",
  "key31": "21H2Q5bPUNezeP95pvCFAU9jkGjjeaqn7oeJt65NU8kWYZH2HRfuVT1AbBnhJVY2xnNHCuPjWV6ugeauuDXCCo9r"
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
