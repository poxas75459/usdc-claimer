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
    "hNdQKoMhNPSpT3s5uXkcff7o97AJw7UFaGwfiwkg1dv33dDQjuG4P3zBysCbo88v5enH6dy1XnFWNhYkyAmmBMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hjhq5LUj1gD1W6hMzri2kvZyrqojWe8xZj4s7r3Fc87Eu4hdZkNzF5h7JCHcjkQzhRbvdsQrSJrdYjLCosf26qz",
  "key1": "PRhaKtD4Ui62id11xmjjW7pvM3op1AiHE4YWSZ3yPoezUFYsaGgNfKFAy63LawgrAEuoe98rnmxYuS61MQoGMVe",
  "key2": "5qoso6izkSUDZ9DYC7wu8kSvP7pzJGu1NyePn8tdqGvCQzGfG5djB9HFkXfw8K8TySw8uGTn53Sn4zZUBGGse1Ex",
  "key3": "5Qy95fjygW8btQJiSCS8FthbwBqvMnBgFfHLSFiMn9mXajHKxmeFspyXRTWytjh9e46VyLJ8PoK8EFLc7X7t45r1",
  "key4": "4R6JnQVKDBqtNTzn5eWzSuvY6G27gSdXToDC1c7iYdHnYEy1JzpY3XnkFXg5ZNkcU9Sv5Gda8c8VvBUNUVXHQ5JH",
  "key5": "3xeRynwewreFXMEVSfiEnQxAVMXEQe3wQgzGM3W2YXUqmJM1vaVFXD5XrtFFdM7sNYX9f3TXaogJnwKbyUkyZL3d",
  "key6": "4q2PXVU7Q7vrCCFDVK2cmq7ia8kx1GWUjrsWUWXZT6GRjt6D2N6tLDirktaeVzhPjHAoLbwa84KDA1vWBGxbusc4",
  "key7": "62oDG4cnyWEVWezShUH92Eic4dgrakK5TTG8o4h69nASazWFWRtK2oWFbJTLWu7adovCvPzpczk8RENnjp1fcQQ7",
  "key8": "F4rrRxspwC2DYmaAzRzYPSRWad1tqkJSu6XDMcWk71qWQQNSYcPsdRpPx6TC8Wac7N8mCm2yFx2YtxzoahSCkzz",
  "key9": "3C9jxADcwXjNam8Jhb39nCNvJ9wRRPoNxUxrgwrG81quNycLJt5RuKo3xCUJYEskqk26WWz2wkDWzEKQSpUWwh8i",
  "key10": "4TK7u6aEt8yqchTbKYT4xCunrWkA8cw9enbQ86VaghFGkGMqK9UbbSLycBrgsK5hjcoTm5At5EJSDtnrCsNsdYZ9",
  "key11": "4AxExzRDBaJP7BBmGzmv7KNAWtjEiiepHqc1ief87dCUKRJ2j795q6fUHnqBUzoi8CBZQoKdGWXJJ6qzhRQcQsPV",
  "key12": "2rBRxtyE3utDVjJn1K3cRfd5uuuqTr66K4P2UKhuDFVGowcaCgPQxCoheyMGTFmoBugR8xeByCvfxojKzPPmy6Qn",
  "key13": "3y8gbha2oAj8ZxdYkU37GRYBv8v4b5Csmi5n9eAN2WDPcpyYjT1k3quWfJmcWawPuMcpPD7Zg5nELoPnZVx8dsmY",
  "key14": "4oRFThAno8UFLfzyQmh8UAJYnJRbgmp3JxDbsbujF8v2rdqTng69XxtCVyxWkap9GFSrSAs5RTNFxEDvdV4J1SJv",
  "key15": "4QoziT1WFc16ncxbNNGNabBBe51aDE5H53DZ47j6c7Zvr4nEYuh2vj5mhWNh4NVeqVNctAQPdipSmf61y8ygdtWs",
  "key16": "2pnkrW85dMWMnJf4Nb1ChVrY1YSWFAnriikTGXLiTzwUGabzLcU77U5eaQEGCkbLqK4FxwKUYt8TXD9r6fTgTNDi",
  "key17": "5qfAfC8QBXJ61R3k4KH47HNjDV5xUtBFMyetkgB4opFSTnBYuCCXT6E7zLi8DQhEtvhLUmbbyKKzhr9JAuhUurJm",
  "key18": "4AV2fEdJrh5U9GWSXr32D1tBxjrJUhnhB4rBJyVNLccpzLvs55imkgT6cPFkQpjD2wCpXssAAySkoUYBBFCFRAqR",
  "key19": "2qL6mTEPAkKL7ZoMhWM8iC4k8tTY9W8Z1oUFZKW79veCRPYnYBcNgyoW3FLnQKsMcUbpoZYuomnChfkdFmquhr5e",
  "key20": "4gT2B5L5mrCYzbRrvnpNTFpPsFBBousX8wTp4XiFFiN4UF9exBzxu4GxKD4sDomBet1xfPTn3CPt1EQbqer4cB2K",
  "key21": "5LfQZhGxUrjQmJgJqVBUZ2k3jWZzHXi91Mj4xRiM3NTe2fbViHJcdHAMpUBuZmX9veJwTALBAQ27vgZYF7FSM57P",
  "key22": "QjeprEheBS464XJfUVziHadTTXfPKJhorwKbZB4mpkzae186xUED65tgXA3rge7LeXzMMXdwrmUsgjEovPC1fxt",
  "key23": "3ryCgJPD5TmZBopWnbrRpMafKHr4ET1p9faATJgLkjHRP1wzPeMynnQYFXS1DsN7jrt2MRPrSnP3sfXib9EZeZLC",
  "key24": "4VmmbHW3FAgH1yh8CuqFANjKZTxtLgbnakX2zxrX8v1qXEPvvXd4ceLB8iPNa3zeTpD8rWk8QoXAezAmLDrPnBkC"
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
