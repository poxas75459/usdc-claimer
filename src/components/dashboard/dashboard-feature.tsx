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
    "21doMmQNMVzteJ5ccwERZAGUUwSFgpitucieZ4Ds1mTobQs7zvJCvjxcLLLQgoH8dw7hPzrmDCYqVFfmQGPxkYYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jHrR7dJhcxGRqSorNNRvoBrnuedpMyNyJ3LAXFML92e7ACbB4rmnAAsC2cb3zzLZaM24wgWVQ42nLSviroSBhNa",
  "key1": "3XF1Nox35teGsP4JjVJYGD5gjba4kaygb3H27cM3EZg4osaSPQZXBZzWxqTiUMqutJ2DgEsM9BxViUsguhBs1RgM",
  "key2": "56bs7vz9tNYXXC1cXDBmhwwgtUc1jche4P3V2PZXaxdiGZeXx8T7rZEEiAjBiS3ob8nRBnPq5uUJUT5S7aggThDp",
  "key3": "3JLds7Mz1mXZoZjQB14LBoWrnvmakC6ZQiYgjWShmFBRpqPwGADqAU68Ar1gsFTcf1M2wCyPCrAiram19PNeBB9P",
  "key4": "3Wmpm8SLFLsHB4FxNjxsJMqJbM9zKV1nhkwkY9cxrhYNee5xiTdEiRhK5mmEJhBD17P6TTUqvwtkQvAvbMB7pnTw",
  "key5": "63ukZfWC5pMhBd9uJBv2CrunS8T7dLjZyDuAfLscTJ3ZuNxt5HPRjhKy4e93P7LqWpp3oCeSDNfw4fNfrTxcmuy4",
  "key6": "T3BfciQAAEmcPDyf7QFHWv2BpNCdfo7BfTU1HzpKo3MNK8YaXUENymAjqqBtaBp6Fro3abpJM8gmUQ9BjPYRz2L",
  "key7": "4of9LGgxDYa2PMWi4TybdTScoFSd6WLiAvUcA7DnrZK1yJh6gEgYyQ8twGiYzsJnuim2P53ePysnTHKUHKYbBfqV",
  "key8": "58hKXLCUs1ypz8XEx4kDMNKuApCvePXenLxjAZ8tMXQ297pS9ScSH1EVhD8xW16LX5xsA8G4b8QE3ng1Hnxxrmph",
  "key9": "4BZNFnUuxNxSXrna6TNYoyeBFGpcEquXBWnRiA21TB77hbQVzYhmFCLoo7NXaVuMkxVnyAsDSBqHgC1Fk7N4ikuQ",
  "key10": "2XZYy7pSeMYRAz7tXA1RBCwoycsCJiW71HQH4CsALrg68U96aNnh8K6kdYuvGeAWv6amLTPgHZPjEiqR55iAnQ8w",
  "key11": "4fqhUcvc7Y79tQ3XHZA72BzP4cfEfbW4MXVrNdXuFPcTFQFgeVZRFz4S34vhoPSDFLv1xYfL645pgs38KBkVMovB",
  "key12": "3kzenNhyWb8UdqPQ4LnFJhcXLQX8gCob34HdNMcUFHxN83wKLrg7dA3Z9uyaCUcFoRHWhkgvutu6z44RMqTUwmYN",
  "key13": "2ix94sZTa8CPXy9S99UYLVmjyypAWAPgHA1BNhCFCLab8NQDs3KSLvqaHsAcbsr4mydocJf8uH4uUt5zmxXuUygw",
  "key14": "2nJjoUqadwaAcv3HE12RvLy3UK8MqBJQrXqPYjPZ1Tcywi7HxnZ9h5j7tfRrXpnoCXex51NBnKg96Yb52RomYEVR",
  "key15": "2hfYXPEBKfYYf9DPqrrRcW99m14ARoKtde1jrx97APZZkacDcQrc2S1C5G5Vur4dppatZkBrddg7Aig5P7bTmv1Q",
  "key16": "5ZPDR61o3jfSBQ4c67n4a4ab8m4C8XdcMgHzUAdfmHhoSzrBQso1XUDQ9WT2booUE3bJ2Pjo771SFkswWq8wLZ7h",
  "key17": "5k1FcCTTWJTbngbXUW7FWie3NTLQjePVm6n9eVyu4rqwZVX9sMZuwYSH7o6JmNNuomfv8Q3AtifNg6ifApkgHcf7",
  "key18": "5jfm2SwMKXtPnSF4CsxXgGLTsu4scRKhXWkK6ZpGxyBcWwpstWJ5odRg3cc3HLkqMGS1QCeB4ycGLdqnkbNfb2rq",
  "key19": "w9dDtiR9n36322UtrR5Drs7KBGaDVpSwzAcB2hbeY62GxigY3BuNxSW7KcEKGegdX85XrvXyfjmQRh6CYHeHKTw",
  "key20": "2yXakPSQoQZ6SjXsqx7heuJ2Lk8rXTGQTyjWT4zS7oxvBadJBJVFMRpXPULsvbZPgGybv1sktVzXxVwg38M1ohq1",
  "key21": "qTpi9UFHMd5qN8vBSjPawGYaPSMAtZbyEV6w3grTvjKCWZno2YBm7rKfVmvJykGD5bkPbLU16CyTzGtKHYvbUPR",
  "key22": "4cZaR18ko7q3yySi9Tn2973GUfToPrG6jVgF2sGb4LUXaURfd5HeBEuv7Fcf66qKsK66K3kbZkUmGQV5JZtkAWxK",
  "key23": "23Zbiqkv862AmDnfnbBenDckBHq9vXXdNZv7j84R3KDbYUXAHDVUn84hBmyrXgXTKuZo7TXF9dgwwopUQf3XVJLE",
  "key24": "4Rx1NtEDVd4xVxNukGSz8zVL3u9kkT3E9emRZRTVHoKehqCC5MLDUHSQoQk8apY3AfN2C3TWX7UK7jrnrw8yp35Y",
  "key25": "5h1TacvyH7eLuvhbF48AfasAgYSXcL7GfeXPdy3zgPN1uGXPTRMKjx33oQMcfsvrPmjvPAmwodhDq8jCKUeA8wx9",
  "key26": "4QjXartGwA6ps9NNbdjB12mZryp8qeysUQH5jQysaDJHzWT82NVx1qJJEoUeYJ3MNoYV223Vh7HRtQhmmrWRgGCH",
  "key27": "5VTPRUumfyTrsxQfLjEqbEnZeSU8sA5inwKuomqZx5TVBjpFc785QZafUaq8NQ5NF3JAjHFRn7wQNoWDwwtk7AUf",
  "key28": "2gpAn7rWTYzivf9YmckxKZ71UAMJM1Edf7hZhp9q8visjBEQrhuZiV1AY7MJfpssGPbHwE1vPPCxcPmiLbjAMAHE",
  "key29": "2VKcDT9Gk8D8mCq76tiibt1GLbMtJSPs1uq5gDxcbEevd9SY9nin95ZRx42j6o5EofGV797jHyVQYqxpaGULJEgH",
  "key30": "61qz2NRX1hZugu15VksfoAfKJ4Lau7Wn4qYjTZQEgVmMwYxPEkpD2j9z4xSaUHBq3rtjwqZsx3sHSqt4MYmdL4Fs",
  "key31": "WjYjUooXFNzeSwjuHYWat4jXaC4y9627qqkQALAuXR259WyqFZNiXGaYYGsi7gKnZErehG94S4D8fvTPegHjVoZ"
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
