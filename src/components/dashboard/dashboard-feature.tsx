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
    "5EevRFW6VBY6RgiHc9SDfTdYQWmfbA6jLsFMT2GTc9bVSxUv22F9xvHPDp5nnXCxT1rBdhjTrigShtsjVVdcHrGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29jrYbzfxTtEU9YZKosyTT2rUHfpTCRcN6LNi4UDLrrZGmWfjXJt49MLSttamAuShVP9MmjXgq4Kby2Nbr1EXnY7",
  "key1": "99biBCmsLM1FwDGvkJ8BR2CBSuqCoTpDp8zPth1WdqcS37Pib4aBbAozXRguHtBZXLLCjTt1dJHRBrtpgx2yMVM",
  "key2": "4WGX6n96wMER6b8cmrZXPvAFQwQhJdoXgmwSzPTyAHkmTyqayCmX1qvrGwFHerB6vSVrPnYXRtvR7vegrwgN29rx",
  "key3": "2vFsmRqTfrN1Py89ypgk2hcg9LVnedZ5gAohqaLpdcDaoFLVyb93sS1ZdjrYtoDbcQvE5JTqZuDkDf6Dyu83ZxMs",
  "key4": "5BcMGhV2226ZMf7Uyj1htwVA25aifDmDsJqxAwAW5esQZHTSyb4AamJxHKeTe5DvBftzPhohrG8cA8yN5hc2XQac",
  "key5": "26GQtV6riWDRs7wJMEA8m2pJNTTBpdDJgARQAAfUeSpvJQ55f5CLegZsvRUnirDaZSQoLeHntvaDC3D8DaAdffLC",
  "key6": "2hCkgk2aPipuXPbZYt3y9mvZSaTwjDDZyhvQgRSNsxWrrqBwjaGTMUNLUipGQXUAcxGv9AKpui4joeayh8SDpd8t",
  "key7": "4SH5TtktLnnBPFhnQ4Vx6nLeqPDMUnJs4qiKh6uSLHZiEHoV3vtqmx7BSjti2ambQrSQqoxVKEjCm41B466RX9bp",
  "key8": "2RwKYVhhQbttPQxvXbJbVuaiTt3RSfsxUmDf1XqvnTBcb8UhNtGt6SUcXjWZ6uJbgCU4PS1CzjpHUa1QKPHvXTrb",
  "key9": "4rsXB1SuAAZfA3jpKr42wTath7Uwgtjijodns6uTMRKewCGWvAvdY1UXvJyQFK835CfDm3CbpPNg8DoKaTmNmFXC",
  "key10": "44rC95Jm9hAfVpobfAu1PS29MQY3rvVrqVtAiL4GQvhzhKPmKqo74BXaNQGy5vSsn2YcdgjPBS4nwdRJBL61Ppxb",
  "key11": "5fnyzMgGuDvRapdhKQBENA4w5qJMdMt8ctMJzGhEoHJCo4oFJQx5x1v6pCsv1CmGyNqAXF2MVRFbvfwjxXQuZfnd",
  "key12": "4Rpm73BkJMU9v1XdcentYrUhc6su7q3MJoShnFM2XDFoW87nz6YQmQni9iyX5jSLtXpBZHHCuDQ7NcjQv89G5jaC",
  "key13": "Xghmr2ozHXWbkD24vhQya7cspn4Dqn8CczTJvGmPzbtHNRGZG3vZ791Xe73sGGWN2d3MfnuG2wvQSsQJQ9kA2Cz",
  "key14": "3jkPWonAsBoh77dK2VFCYsawBYiXPGy33cFRRKSWLxWkYY2EwJ6XzdPakFy8KxS7pxXyxsbm5xZHagrTW31FTX4h",
  "key15": "5JfR6oeXaV3QdAKyZFAtM84hyNjPdhBrzjfWE19tY4M5ZjRMtvM4M7hUJGTx69RGKLLmwD19BgR3QrnpHSGYG66g",
  "key16": "2ES8R9HidjGiipZrknZ4AKnpdSDu7aHZAMHPdz31bpWtk2zovSSUGF76sFmZf53pKhCucV9hWfo6kuw2tthETPVm",
  "key17": "4VxXY3CCegjy7jmQMaGuZuejGr3wYWwNVwNm7nozxs6GSfXQ4pne4gFLCqS9F2q2cz6VR9LAuqd9YcKT9T2bPXqN",
  "key18": "2fLg65ZFWrVzuwKBJHVAAEBbqVvRcRMTNT67Lv6Ef7o5haXV5W4hyinnzzJejyrauoMrE4vVSpUK7W9jppJx3csA",
  "key19": "Nucv6h6662j9tEZBhR3jucMCYmnwoLSz5owKwEMgRrcmoQZCbU5PihMiNBXxJbXofsb2eMWbssi7Prhue7nQrnp",
  "key20": "5V116BZ5MWUM6BfG8jZSikizQLb74Y7hNYJo2w2A1VuWmtJjxhGJhfZWxY3HYGbnLYw1ePFfa4hShPSLZLVmWtEo",
  "key21": "4YNLo8SD9TcHgHk7N2pco5F83qxBNt89D7rkb7UZXedM34trFCq6e2ffSzk4FGo4ckNzKVrAWKoctqZ6stxDbLZH",
  "key22": "QnunfVD7mHZrCSxDDxCw1FFtozaGnVieHZ1guiEiRV4F9bM4w9KmwUWoTGBKfHxKho6AEyfraPdHgm71nrha8Jw",
  "key23": "5aacGJPwXJiBY4tE8JCBD3TR7PrnZzhiB9Uy1JRC84kyGNKy8ZoH82oJK6bmvTdN3bbEkmfD1iwkU9fA4nPykVqQ",
  "key24": "3V3AApL1HMqq2Ktn5nyFw2qJBbkvMUbezM5JgWXT9CsLt32vzunEaswsuC11QKNcT1AmWkwCQNSkkU79zRCGRghA",
  "key25": "3aV2SHqPEKmMgE3qrGBcVwbxYuv4fynwp7725hHdQwCXPWyXRBF6cK4FvirNR5TiFsk6wtPUsmekvuMKhYJNbeB2",
  "key26": "d1R6KcEXhin4MJYZWyxgjMB3YJCrM9k6wX93mEjTwXuRM4QSgnsmtXgkqph4gir441sAmesXG5mfQxkdvGsstY8",
  "key27": "58LXXbNghbqvSAhcfajummVvRt7bUb4WFrNq2w7DwnUiNzZwdcuzL7kfPUYrX8EMdvGgZ5ixeCiAmWLgC3pohW5P",
  "key28": "7KHDnqHZBdMvX3KPNGMWgURFZJXZM6cvEuyULreHptDN3NaVB4qDUhyiDRME1x9yR3z218uWmk5CWCN39rVGdmW",
  "key29": "2tspWs3MeiWpma8Zar5wAd3Nsw1RcbmU84tgRWevn6B9P8tLZpQxs3isZB2JJ5JDrbjUU5M5jbBXgcSt2AYqncvM",
  "key30": "4sknbRdoMHCpTLnjBTpD3TzTb9jGJ2i52W7vZNxGkJNYdJFgP8YpuefJ6DeyPp6viwaQ6bkvwcyE7QEx7bTHjQHs",
  "key31": "4qKtSC4pQsRx3ci1zAad2HxPNWSCrHk5dBKkUJRcHk7HvrMseKFFCCpWe7RDRRNVHvnRm9Vi5QuvaAT1K1Ts3LRn",
  "key32": "3ULvK93SeBoNkc1hXLXq87FJUvNpYsuQ4PWJoFyTmintyu84F2UcC48m4xQfhpDUymFyC8DA7pcpfbF152iX6Kcr",
  "key33": "4zuGSpjk9iN1oEbHYKPFYCVufmLLB4aBbe8LMUGWEeyjAVwcKZ2Eb6kRvxqAS1EsqNFZfBMbT8CFhb9jFyxRzFBp",
  "key34": "21FpA4qvN5Z7gxGHyEuZDMhXkZsK5PUzdqwdBdH2edsbLGbXZNYxLACsXd3A5EJbJRxXX9drvudAbnrzb9tRQZa2"
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
