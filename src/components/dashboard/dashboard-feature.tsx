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
    "3smbZSmm3rUhRaefcUmg1K6vdvnuPAC7GWuimEjbPB48gm7MjLdGZQc6etkf2zAXqdLmGSdGf8Xggr6JAKGDnPiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z3rBActxATNFiv8dX25CDTeW7keoj7VxR5uCwLpAN8mgdF4M4TwRNZXHYgcui3CR5MkUc4DR2mTkcDb8nAFvH55",
  "key1": "MQUJHqY2cBU7m9FSxqadU6o8aWdGk6VXFDvkzdqHNgn2XtBJUYRwytVn2tn6pmYmYF23HH5Q9CaPeRb8ZpW37BR",
  "key2": "31XWU4Mnrq7N1eyTjaCu7CurFL5USKD6VADvx6cwYiHMC2Rpi8NEWF1iDswWFL2beGAuZmbSfFJgmYRB4MrQMdvz",
  "key3": "41x1aUf6opwZhxd31v5WFJnUsiUyDPtqechwCZLCpHzNVrNzn2RAKNNKkZvLMDkyq9mRtxSK6Vv2frFGk3sHrQAW",
  "key4": "3v2gzZMcfG8Z3DeBDCcPKC7hADByE75drf6vnvELBJz7XMubeuTn99vNiUF7DwZXouS7hmLoVxuda4EcoJvNrtQx",
  "key5": "67nfA5KgJ6RjevaPK3oB3QVKcjpRVfWRn8VFcPakK14zDDvQLxUmKdQJHJU5isFMhuK4Fzt67oTvwc4fUNhUJeSs",
  "key6": "3KULyMThnqwVRy3QxRyYxTV5JEHTJhZau1HHXhf7Q6WxNiGWJSLUJYZVeWoJ82BTVzB1tqUUq8PhKCQdUBggXEQf",
  "key7": "5YwEx3BQ1GYp7dh5utGKSfoRmtDE3cjeV6G7qhA2Sc1vAEBAjKR9rhJELAdrWysTExaawZjbiKBtwDeW7t7HLvaE",
  "key8": "21BsX5hv3qRozXc8KaEYtBtM7tDN6xJtVyGoSxCT1j5iCuhSeRnz7MrmBszXJcCQPdeFUSP4cS9Mx1x9UAfWU6gE",
  "key9": "26Ah6eaK4K31v6pd5PYTRY5Pu8wLqqLSA8qQVg8RpEyUPjNcozSmTqg6Jr8yuYMaf9YYbDzj7vJRGmNnnZBKrv7T",
  "key10": "4oYgk9SPqLN8cs9Tyhit6uayg8MvsiLvDiWnmvMTeBTJo5xLyB3SKrqr7Ur21CKvw9892rM34vEL3r3sfGJJtfbu",
  "key11": "4bQW7T8Tb6Anc11nWtkE1fixVKhYBc6GKAwf6622WJag6Bo2dNXc5u9pTbiALq7BUxREHsBGAZ66YjAgEpg3pfQR",
  "key12": "5k6p8rCPncMyLjVj5dtM71ggpcq1571mpQE9xpxTcJtLzKRcBna9p1JfANTsj3D1ajVLPqxpdN8Kxn9LhC8AjAQF",
  "key13": "5qqBZN15TcXwtqYsJcb2dtmMCpiBVrxC5nrTCZY7mP4C7uo9XBr4JZgkbB4K6LansYpgcZNo39MFeRyvcuhmbamr",
  "key14": "5bBT5btuJtodgVuXVaQD6gyG2FaY4w7wbs7QpwWnYKRpLQB1QFbJdqDLCMjusDUyPK28bX7b8xCy9raFnPPqycZJ",
  "key15": "2GuZyJXZnQLiauSD8dGgihZPo3iaxoinSLA3y1LxDnLpTzpkAQPhkiMLcyYwrxWsngUEtxfoqirghwB6wKHLNL7f",
  "key16": "53JhivHZMJtf3ukaKBw3GdbEBA3dARrswELgHeE3stpFtYZ6vhtg9ThiGZTJu2zCiUE3a6shXzRubXe8z9fhHLiB",
  "key17": "3HktBHBVK1ms1HvnNyN5A5PX3fc1S2YNusmQy48Z6nvSuRmCjyUsNihqorfHyZWr7XAChnVqSLQDLmivPYPjxhAy",
  "key18": "51AxSuZyVXdUS44wEvCAwgMaxcGxEa8wfK4GuQ7XzbdFRrCQkN86yZkaU8AdCwfzPzYZRSNBZQYKVucZHaJ1tNa7",
  "key19": "25ieySxiQMR6jApApZEFcxmGVJsaRyMBFR5xXeKDnTwJPYCs4GiCvEJeCxezx57QQXykoieV62GJ5Y79EhFoyqrU",
  "key20": "5uuEHFK4fafBGnPCrChqy3R79YmGmMf9LEvJv5GZWpNKw29ggE6Xpwu9JegSEXpp6Dsy1r6UNymt5UJVMUypccZR",
  "key21": "2BruWXLFiTBnDGFocEDHs31MXhiwCjuinxRjATCEotRySKkC5ihx6nuyr8tqwvED1p1qY3wWnpfLBEHzPaCBGo8L",
  "key22": "5kBqXpwHepXYebqngWP3e8bUTLD2FkFa7N7dVoUioAnPdTMTn7nxLXi32tkdp8csvaDtfpWBuweWSDeT4zXBDe7h",
  "key23": "3kQ35WuGknecAeap8UnXDjffzVyfyJrCUcuGGtRVqvajBkQG36g8V9g2onxnTTxkXaTsmrSQso9mNrm6ysA4zL3H",
  "key24": "4eGuBnNAdgMGK8mqfsJw6L8UzpEXHort3KWHGTVnCffv7qckCPe48x3RtEvCVtSNTUvK9UDfmrAqA8rjsuQKcWde",
  "key25": "29bhWfCDDfhr6MfkVg6uCVb3kKZRscgUCi3TKrSNgeuQe94DBnTaSHZJcLz8NmU113i664H7M4gwKzgvMZpN9NLu",
  "key26": "5e33BBkj6BUWNwqnGPZn9pyzitbmBruk12JWtpYMcfcCAg2Q4sFM99jPmoQHN8sE5P1DTDFwPpeSQzmGHt9oA38L",
  "key27": "5bbns5Ynr8RYZv2cw8uoS46C84jn6eqTjF1XofUau5Hr2hcd9cTXSmfu72i9mWVfJuyEVEuQQmhoCqghhRoMTDkX",
  "key28": "5os15yfxtxo7ScDEwhvaK5Ej3vEcUPw6QUt7Zo7XQPfgc62yiRbbTyGYueg6pC5bJFTZDKcN7dFyMJuyXLGa7HEX",
  "key29": "k5iFvvCKBS8ogjqRi13nKDxzY51CU3DgFgeFW5PRYRh23ajq7JECQ7QZK8U2DjKkfuQ9yM3yoQ6skT9rrrpzqK9",
  "key30": "KRvfUadGLTPKms6NayYKwXsrhFWF3En2kEaXMs5g48XtMvXsQKjjVsXxsXDWymDYmAkGABRKyZzYD9b3wxiKbwP",
  "key31": "44BJa5FXUdZma9TkgKTL1z4YrQ7zYo15k8S144so8iMEFpB1MjNoyM9axcjiqtnWDqYPqQSs1bk6pV7Lns1FZSSa",
  "key32": "3LgNYumidN3c4rBeMFkEzyd6eMNPjNodVVSUNPR6WzW4Xs6q7VndZLedgpVkSnKzNwdN6rpWiUjQTufsesSqw2nL",
  "key33": "2qkA59GH7xiy52D7ma3NWqVXxGnU6Tvpou7BGYs72oBKEemuUfWtPxAzkVP4L18brmtXUkw5p4NSWbwuDhmhBcnZ",
  "key34": "2pESQE8MsABEoEqTMBWDeNfPErJx3H3QMXRPEbqna3r6pQ5L4DHNmU5Jbh7T6kJxjiACCYdqWHPLick7KueGphH4",
  "key35": "4dQVHrE6KT2x3HF9dtxKFqQYaahUb1yPcLMuXDsE1uDxJZ48KerLrf79UP3DK2EsHU82f83vQfqZZfRMY73SbiSt",
  "key36": "3nYz4SpCMZqhxc4avRKRF1J95STsq4eGEsnp37vbwUormAV6toRGn3XB9JZqUuQbYLr3gBvbcRkHeBtNUv5qSjnV",
  "key37": "5cWTbT5E23JhyzjGEtGFXof26dkswy9taAeHs9g7gHavSTPY1dJWNB7VTHZF58VA95CoyvwKLpm7SNQaFbXAgP8S",
  "key38": "MH2Rdw6JN5fnWXGkoMXcuYa3cNTMhn2wFv5vMEqZBSygLrdrpkQqK45LVDVd4vGEVKGANrDAPvhMKBejB7gNxh2",
  "key39": "51kZFbY7j7pzdho72ZSgu2SSULi5n1cCCCyTcogrdtCkioQm3Nf9VXR3xDx7LdG81gvn1n7Dq2hp9i6iFr8S21u8",
  "key40": "4ewA5Ac4WK6MTGycMF7ZPNCthPVomjfmvy975urpXu2i7ovGpHmE65knctg1bATX6gfrrLFGDRZ8AmUkCzct9KQ6",
  "key41": "26MNzhnQhzozu5BpvKo745njdn2Yb4Hp3bG79xFgKicambjSL2FEMd3gBR9jZNj93CQ4f9wDtEvsCWzM8PEXZNVe"
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
