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
    "4vFYb4TZjdSoGJSCb83uVKR5T5CwHRc3NBh376azuh8bSYrNVkMB3DbCLHsXo5qTD9uSySB6MsBLrNsS83nytVww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TTStmCdgActcB9XH2aWaF3vWmHmKWPK4Pqs9QM8wGRwWVtH82htRrwkjWgtiZAMgM8j5zgZCESYK4mtQPrP25TB",
  "key1": "3NBcapRLiFpjFSaw5Q4s2fXSCPTWTH6MZRHTDALnPV4MMmVQ2HNisF4xFpfDg1dr4TqRHAGN71ymrv27pGZ4wiNN",
  "key2": "5UCriFgYw3raAwR6Z4WUHBT2Cj37qVVn7BX1T3SLgsUWiTKJBe3K6E3JKDV9jYDK6Xb9L4Rro9rp5d3KoNmFhekn",
  "key3": "51Hgws4ZWXet6t7xsrd1YH3Lt6yYZVY1ypRdTnUCLqpC7WHeAAtT8EWKH95VctyChPDG31VVFQf52YEW2SdxtmJC",
  "key4": "e3hbbyLhGYdwUJBeKqutuSME7sUTEBzCLXwnZq52V7o6wH1L4uV7eM8j8xcdszZgeG7jNynaERqfJJF5DXre6m7",
  "key5": "55EEdxMjgJ2xsLjDP34CGEP4vsKhEEi9c4cHU1cBtVyGrFszrLgpEW7YAUxYcPCME98dJZSLaYUF6DaeEM1TNjP5",
  "key6": "4MAoSqF7ru6QYDQZ9ykoUfMDMiqvkgmr3gjhadqiHAWwRY92c5NxyF9y1Zj7kzNkuQYnZvrn4eTaoz6forxR4iai",
  "key7": "4b72qwcwUac2YJXzuzEThCXBdhdEvoCzUH8XEpmn5CNeLNndtSkYCvJGN5bS8X82ZyUQujxKrM2whkswXNh9bFgR",
  "key8": "n7tKsdgh2fLHGS66TomjmHFqoB9n4BXVshgyD9HtY394yAudiHYPuLYdfCmmrJM7jPpM2ZePXDKNCiSf3N48KAH",
  "key9": "4Gi2VL3vE7czDcY3Pfn818ka4M3RHbEQSmk6PEisdqZwNNj4vM7GmTW4nZcUFRiNGXSRb6wSLT2xd48py8Vx7CP5",
  "key10": "5h812kvHmpBm4tNykfukQFcp8DKM7cgHizaTLLY5ymMZeX56EEBD2TudMkaA6frPyAruPTV8EVRWhHn54CUM4EVL",
  "key11": "24c3X6PK9Y56NRvTpzhTwBL87frJxZgVbWdeMYdL3vmhD1i2Mjq2c81BqcjQBNG2pRVemTMtryF2KYQ14qVD9e4N",
  "key12": "TRmUqfGcbHwneWr95VLoQgucppP6CTftAfLTnxpcLGCaGrvwQbaTiNk3iatUWeFZjoLCkPgyCg2brHgxwQyupG2",
  "key13": "M68zDXBCXN9JyEcnGyG65HN5PMRdM6VkXQQj786RjF2FZQ7ASNFwMMna9eyKtESENE2F6AWMFCeaUES9TgzTfda",
  "key14": "36UUae3Skj3vMMVenpKJPWEBrMt96AURBSs4LxJg8zMwMfAn3bPGPht6JoW5nRtWBS6r3XuSnQrTxBnarvLjwq2D",
  "key15": "v29kvSfD29aTChgNTDJK6GkYhEZ7VQ1Ye6eZCb3Csyogps8eKTdtgFVn8hxpNeHku1WaH8U3tcQkhvfmwFsZvQp",
  "key16": "2yRLe1W8rfW1CL6SYyHS8Q59FnE7x4K3Q8XBZZFz2YeUv9BfdpNm7C2aaN9HUp4UdjCRNjgjFnSPvmB6SyDqNhZt",
  "key17": "5DqgBTudv6Ra4vEXHSFDUmNwMmPDiqJK7KZVLiEpsQcicNJBC2WJ7DRHsp2bukZJ6kCkDX3kC9CZe7ZrWTWSP7We",
  "key18": "3U6nm18dgYCcAhfcBYRMQ4fFSW6VS5b9FmmwBg2n1WCYUBmcBZHJoURJNXLvrqDDZEBFxHfCteneFifijz8bFuXH",
  "key19": "VNnZUzoHkZFAxTYxUMoDWR138kySKRp5v4Zi6TcJqFAcn5SGccutQq9MVnFJ9pjZhQpS8uT3qTr967V2LdEpbAQ",
  "key20": "42WitHGsLPD4r9DZvhTqXvK6yF9nazxLVFByT17fffZtftUtsJ59P3Wyhcb57xEiLcNvDykh4pMh3nWjRthzCf4Q",
  "key21": "ZNEkyrYqUfAWjqQYumZ7dQCEYup47rEeu8dtsUG2hUSHPVkD5nFMMP5VBs7BMCacMSvvimALyDu4bu14BD4VL4y",
  "key22": "4jN1vmqtNsZcPoj9sjBVc9tQ654ahHUr3wj44vrcEcQLoX43SVjaHS5EhwjVyhV7a5FDLV4PJ48QvZU3DyoixUoE",
  "key23": "eGqPHWUHfgDG6PgVd9AaB8A5jYC8HZjRqWgSSxM1eqnoRW7mL2ufsECebSedzNiGCvn4zUkXQSSMGMLPHDGjTBY",
  "key24": "2tbpziFxsENgKukrP6TG2zWxNbXCkadwChdJghnVwco5bVh6izzTVgqqJbKpKLLMtganC17LVt821oRcWMcCjGKe",
  "key25": "3Ed4dWFDnFpyXPKK7xc2sse8uRaFbJzA3FMTiMutYq8oyxNLB11Ngfp8TfUdqSMxcaG1PU42pzVrcr7cce5ZbNmf",
  "key26": "4ii8LZRFe2wzXWfvKXFxyafJrfDHjM4G598L9xGo7q2F2SMbutu1yQ3AWBXjKiWNiiGfnVbvA6mZFFj9LGGMTZXd",
  "key27": "5HjQwLfWdJroxcq2ztxjZNtfTVz6psyM8zbYDu8kepYmpSci7Cji2SfajJntKyFM65QPqZWL7hXiKaFHVCkZWSbu"
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
